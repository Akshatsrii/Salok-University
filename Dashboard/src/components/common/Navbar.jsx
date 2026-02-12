import { useState, useRef, useEffect } from "react";
import { Menu, Bell, User, LogOut, Settings, ChevronDown } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <header className="h-16 bg-black text-white flex items-center justify-between px-4 sm:px-6 border-b border-orange-500/20 flex-shrink-0">
      
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-orange-500/20 rounded-lg transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-orange-500" />
        </button>

        <h1 className="font-semibold tracking-wide text-sm sm:text-base text-orange-500">
          <span className="hidden sm:inline">
            Salok University Student Portal
          </span>
          <span className="sm:hidden">Student Portal</span>
        </h1>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2 sm:gap-4">

        {/* Notifications */}
        <button
          className="relative p-2 hover:bg-orange-500/20 rounded-lg transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5 text-orange-500" />
          {notifications > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-orange-500 text-black text-xs rounded-full flex items-center justify-center font-semibold">
              {notifications > 9 ? "9+" : notifications}
            </span>
          )}
        </button>

        {/* User dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-3 py-2 hover:bg-orange-500/20 rounded-lg transition-colors"
            aria-expanded={isDropdownOpen}
          >
            <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-orange-500" />
            </div>

            <div className="hidden sm:block text-left">
              <div className="text-xs text-gray-400">Welcome,</div>
              <div className="text-sm font-semibold text-white">Riya</div>
            </div>

            <ChevronDown
              className={`w-4 h-4 text-orange-500 transition-transform hidden sm:block ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#111] text-white rounded-lg shadow-lg py-2 border border-gray-800 z-50">
              
              <div className="px-4 py-2 border-b border-gray-800">
                <div className="font-semibold text-orange-500">
                  Riya Bansal
                </div>
                <div className="text-xs text-gray-400">
                  Student ID: 2024001
                </div>
              </div>

              <button
                onClick={() => setIsDropdownOpen(false)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-orange-500/10 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-orange-500" />
                My Profile
              </button>

              <button
                onClick={() => setIsDropdownOpen(false)}
                className="w-full px-4 py-2 text-left text-sm hover:bg-orange-500/10 flex items-center gap-2"
              >
                <Settings className="w-4 h-4 text-orange-500" />
                Settings
              </button>

              <hr className="my-2 border-gray-800" />

              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left text-sm hover:bg-orange-500/10 text-orange-500 flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}