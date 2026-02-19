import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNotifications } from "../../context/NotificationContext";
import NotificationDropdown from "../common/NotificationDropdown";

// ─── Constants ────────────────────────────────────────────────────────────────

const PROFILE_MENU = [
  {
    label: "View Profile",
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
      </svg>
    ),
    path: "/profile",
  },
  {
    label: "Settings",
    icon: (
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    path: "/settings",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatPageTitle = (pathname) => {
  const segment = pathname.split("/").filter(Boolean).pop() || "Dashboard";
  return segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [notifOpen,   setNotifOpen]   = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const notifRef   = useRef(null);
  const profileRef = useRef(null);

  const location  = useLocation();
  const navigate  = useNavigate();
  const { logout, user } = useAuth();
  const { unreadCount }  = useNotifications();

  const pageTitle = formatPageTitle(location.pathname);

  // ── Close dropdowns on outside click ──────────────────────────────────────

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current   && !notifRef.current.contains(e.target))   setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
        setConfirmLogout(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── Close on Escape ────────────────────────────────────────────────────────

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setNotifOpen(false);
        setProfileOpen(false);
        setConfirmLogout(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleNotif = useCallback(() => {
    setNotifOpen((prev) => !prev);
    setProfileOpen(false);
  }, []);

  const toggleProfile = useCallback(() => {
    setProfileOpen((prev) => !prev);
    setNotifOpen(false);
    setConfirmLogout(false);
  }, []);

  const handleLogout = useCallback(() => logout(), [logout]);

  const handleNavigate = useCallback(
    (path) => {
      navigate(path);
      setProfileOpen(false);
    },
    [navigate]
  );

  return (
    <nav
      role="navigation"
      aria-label="Top navigation"
      className="bg-[#111] border-b border-[#1f1f1f] px-6 py-4 flex justify-between items-center relative z-40"
    >
      {/* ── Page Title ── */}
      <div>
        <h2 className="text-lg font-semibold text-orange-500 tracking-wide">
          {pageTitle}
        </h2>
        <p className="text-xs text-gray-600 mt-0.5">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month:   "long",
            day:     "numeric",
          })}
        </p>
      </div>

      {/* ── Right Controls ── */}
      <div className="flex items-center gap-5">

        {/* ── Notifications ── */}
        <div ref={notifRef} className="relative">
          <button
            onClick={toggleNotif}
            aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ""}`}
            aria-expanded={notifOpen}
            aria-haspopup="dialog"
            className="relative text-gray-400 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full p-1"
          >
            {/* Bell Icon */}
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" />
            </svg>

            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {unreadCount > 99 ? "99+" : unreadCount}
              </span>
            )}
          </button>

          {notifOpen && (
            <NotificationDropdown onClose={() => setNotifOpen(false)} />
          )}
        </div>

        {/* ── Divider ── */}
        <div className="w-px h-6 bg-[#2a2a2a]" aria-hidden="true" />

        {/* ── Profile ── */}
        <div ref={profileRef} className="relative">
          <button
            onClick={toggleProfile}
            aria-label="Profile menu"
            aria-expanded={profileOpen}
            aria-haspopup="menu"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full group"
          >
            <img
              src={user?.avatar || "https://randomuser.me/api/portraits/women/44.jpg"}
              alt={user?.name || "Profile"}
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "User")}&background=f97316&color=fff`;
              }}
              className="w-9 h-9 rounded-full border-2 border-orange-500 object-cover hover:scale-105 transition-transform duration-200"
            />
            {/* Name (md+) */}
            {user?.name && (
              <span className="hidden md:block text-sm text-gray-300 group-hover:text-white transition-colors">
                {user.name.split(" ")[0]}
              </span>
            )}
            {/* Chevron */}
            <svg
              width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              className={`hidden md:block text-gray-500 transition-transform duration-200 ${profileOpen ? "rotate-180" : ""}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Profile Dropdown */}
          {profileOpen && (
            <div
              role="menu"
              aria-label="Profile options"
              className="absolute right-0 mt-3 w-52 bg-[#1a1a1a] border border-[#262626] rounded-xl shadow-xl py-2 z-50"
            >
              {/* User Info Header */}
              {user && (
                <div className="px-4 py-2 mb-1 border-b border-[#262626]">
                  <p className="text-sm font-semibold text-white truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
              )}

              {/* Menu Items */}
              {PROFILE_MENU.map(({ label, icon, path }) => (
                <button
                  key={path}
                  role="menuitem"
                  onClick={() => handleNavigate(path)}
                  className="w-full flex items-center gap-2 text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#222] hover:text-white transition-colors"
                >
                  <span className="text-gray-500">{icon}</span>
                  {label}
                </button>
              ))}

              <div className="border-t border-[#262626] my-1" aria-hidden="true" />

              {/* Logout */}
              {confirmLogout ? (
                <div className="px-4 py-2 space-y-2">
                  <p className="text-xs text-gray-400 text-center">Sure you want to logout?</p>
                  <div className="flex gap-2">
                    <button
                      role="menuitem"
                      onClick={handleLogout}
                      className="flex-1 bg-red-500/20 text-red-400 border border-red-500/30 py-1.5 rounded-lg text-xs hover:bg-red-500/30 transition"
                    >
                      Yes
                    </button>
                    <button
                      role="menuitem"
                      onClick={() => setConfirmLogout(false)}
                      className="flex-1 bg-[#222] text-gray-400 border border-gray-700 py-1.5 rounded-lg text-xs hover:bg-[#2a2a2a] transition"
                    >
                      No
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  role="menuitem"
                  onClick={() => setConfirmLogout(true)}
                  className="w-full flex items-center gap-2 text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeLinecap="round" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" strokeLinecap="round" />
                  </svg>
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;