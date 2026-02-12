import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { User, KeyRound, Bell, Shield, Palette } from "lucide-react";
import BasicDetails from "../components/profile/BasicDetails";
import ChangePassword from "../components/profile/ChangePassword";
import NotificationSettings from "../components/profile/NotificationSettings";
import PrivacySettings from "../components/profile/PrivacySettings";
import Appearance from "../components/profile/Appearance";

const profileTabs = [
  { path: "/profile", label: "Basic Details", icon: User },
  { path: "/profile/password", label: "Change Password", icon: KeyRound },
  { path: "/profile/notifications", label: "Notifications", icon: Bell },
  { path: "/profile/privacy", label: "Privacy & Security", icon: Shield },
  { path: "/profile/appearance", label: "Appearance", icon: Palette },
];

export default function Profile() {
  const location = useLocation();

  const isActiveTab = (path) => {
    if (path === "/profile") return location.pathname === "/profile";
    return location.pathname === path;
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black
                      rounded-2xl shadow-2xl border border-gray-800 p-8 text-white">
        <h1 className="text-3xl font-bold text-orange-500 mb-2">
          Profile Settings
        </h1>
        <p className="text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black
                          rounded-2xl shadow-xl border border-gray-800 p-3">

            {profileTabs.map((tab) => {
              const Icon = tab.icon;
              const active = isActiveTab(tab.path);

              return (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl mb-2 transition-all duration-300 ${
                    active
                      ? "bg-orange-500 text-black shadow-lg shadow-orange-500/30"
                      : "text-gray-300 hover:bg-gray-800 hover:text-orange-400"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">
                    {tab.label}
                  </span>
                </NavLink>
              );
            })}

          </div>

          {/* Help Card */}
          <div className="bg-gray-900 border border-gray-800
                          rounded-2xl p-5 mt-6 text-white
                          hover:border-orange-500 transition">
            <h3 className="font-semibold text-orange-400 text-sm mb-2">
              Need Help?
            </h3>
            <p className="text-xs text-gray-400 mb-3">
              Contact support if you're having trouble with your account settings.
            </p>
            <button className="text-xs text-orange-500 hover:text-orange-400 font-medium">
              Contact Support
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black
                          rounded-2xl shadow-2xl border border-gray-800 p-8 text-white">
            <Routes>
              <Route index element={<BasicDetails />} />
              <Route path="password" element={<ChangePassword />} />
              <Route path="notifications" element={<NotificationSettings />} />
              <Route path="privacy" element={<PrivacySettings />} />
              <Route path="appearance" element={<Appearance />} />
            </Routes>
          </div>
        </div>

      </div>
    </div>
  );
}
