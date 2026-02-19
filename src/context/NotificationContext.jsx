import {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";

// ─── Types / Constants ───────────────────────────────────────────────────────

export const NOTIFICATION_TYPES = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

const DEFAULT_NOTIFICATIONS = [
  {
    id: crypto.randomUUID(),
    message: "New Assignment Uploaded",
    type: NOTIFICATION_TYPES.INFO,
    read: false,
    timestamp: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    message: "Timetable Updated",
    type: NOTIFICATION_TYPES.INFO,
    read: false,
    timestamp: new Date().toISOString(),
  },
];

const AUTO_DISMISS_DELAY = 5000; // ms

// ─── Context ─────────────────────────────────────────────────────────────────

const NotificationContext = createContext(null);

// ─── Hook ─────────────────────────────────────────────────────────────────────

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifications must be used within a <NotificationProvider>");
  }
  return context;
};

// ─── Provider ─────────────────────────────────────────────────────────────────

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(DEFAULT_NOTIFICATIONS);
  const timersRef = useRef({});

  // Cleanup all timers on unmount
  useEffect(() => {
    return () => {
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, []);

  // ── Add ──────────────────────────────────────────────────────────────────

  const addNotification = useCallback(
    (message, type = NOTIFICATION_TYPES.INFO, autoDismiss = false) => {
      if (!message?.trim()) return;

      const id = crypto.randomUUID();
      const notification = {
        id,
        message: message.trim(),
        type,
        read: false,
        timestamp: new Date().toISOString(),
      };

      setNotifications((prev) => [notification, ...prev]);

      if (autoDismiss) {
        timersRef.current[id] = setTimeout(() => {
          removeNotification(id);
          delete timersRef.current[id];
        }, AUTO_DISMISS_DELAY);
      }
    },
    []
  );

  // ── Remove ───────────────────────────────────────────────────────────────

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    if (timersRef.current[id]) {
      clearTimeout(timersRef.current[id]);
      delete timersRef.current[id];
    }
  }, []);

  // ── Mark as Read ─────────────────────────────────────────────────────────

  const markAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  // ── Clear ────────────────────────────────────────────────────────────────

  const clearAll = useCallback(() => {
    Object.values(timersRef.current).forEach(clearTimeout);
    timersRef.current = {};
    setNotifications([]);
  }, []);

  // ── Derived ──────────────────────────────────────────────────────────────

  const unreadCount = notifications.filter((n) => !n.read).length;

  const value = {
    notifications,
    unreadCount,
    addNotification,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;