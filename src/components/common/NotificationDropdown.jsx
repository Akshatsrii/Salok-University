import { useNotifications, NOTIFICATION_TYPES } from "../../context/NotificationContext";
import { useRef, useEffect } from "react";

// ─── Type Style Map ───────────────────────────────────────────────────────────

const TYPE_STYLES = {
  [NOTIFICATION_TYPES.INFO]:    "border-l-4 border-blue-500",
  [NOTIFICATION_TYPES.SUCCESS]: "border-l-4 border-green-500",
  [NOTIFICATION_TYPES.WARNING]: "border-l-4 border-yellow-500",
  [NOTIFICATION_TYPES.ERROR]:   "border-l-4 border-red-500",
};

const TYPE_ICONS = {
  [NOTIFICATION_TYPES.INFO]:    "ℹ️",
  [NOTIFICATION_TYPES.SUCCESS]: "✅",
  [NOTIFICATION_TYPES.WARNING]: "⚠️",
  [NOTIFICATION_TYPES.ERROR]:   "❌",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatTimestamp = (iso) => {
  const date = new Date(iso);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);

  if (diffMins < 1)   return "Just now";
  if (diffMins < 60)  return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return date.toLocaleDateString();
};

// ─── Notification Item ────────────────────────────────────────────────────────

const NotificationItem = ({ notification, onMarkAsRead, onRemove }) => {
  const { id, message, type, read, timestamp } = notification;

  return (
    <div
      className={`
        relative flex items-start gap-2 p-3 rounded-lg mb-2 text-sm cursor-pointer
        transition-all duration-200
        ${TYPE_STYLES[type] || TYPE_STYLES.info}
        ${read ? "bg-[#222] opacity-60" : "bg-[#2a2a2a]"}
        hover:bg-[#333]
      `}
      onClick={() => !read && onMarkAsRead(id)}
    >
      {/* Icon */}
      <span className="text-base shrink-0">{TYPE_ICONS[type]}</span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`break-words ${read ? "text-gray-400" : "text-white"}`}>
          {message}
        </p>
        <span className="text-xs text-gray-500 mt-1 block">
          {formatTimestamp(timestamp)}
        </span>
      </div>

      {/* Unread dot */}
      {!read && (
        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0 mt-1" />
      )}

      {/* Remove button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
        className="text-gray-600 hover:text-red-400 transition-colors text-xs shrink-0"
        aria-label="Dismiss notification"
      >
        ✕
      </button>
    </div>
  );
};

// ─── Dropdown ─────────────────────────────────────────────────────────────────

const NotificationDropdown = ({ onClose }) => {
  const {
    notifications,
    unreadCount,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAll,
  } = useNotifications();

  const dropdownRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      role="dialog"
      aria-label="Notifications"
      className="absolute right-0 mt-2 w-80 bg-[#1a1a1a] rounded-xl shadow-lg p-4 z-50 max-h-[420px] flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 shrink-0">
        <div className="flex items-center gap-2">
          <h4 className="text-orange-500 font-semibold">Notifications</h4>
          {unreadCount > 0 && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="text-xs text-gray-400 hover:text-white transition-colors"
            >
              Mark all read
            </button>
          )}
          {notifications.length > 0 && (
            <button
              onClick={clearAll}
              className="text-xs text-gray-400 hover:text-red-400 transition-colors"
            >
              Clear all
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="overflow-y-auto flex-1 pr-1">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-gray-500">
            <span className="text-3xl mb-2">🔔</span>
            <p className="text-sm">You're all caught up!</p>
          </div>
        ) : (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onMarkAsRead={markAsRead}
              onRemove={removeNotification}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationDropdown;