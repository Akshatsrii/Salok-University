import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { User, KeyRound, Bell, Shield, Palette } from "lucide-react";
import BasicDetails from "../components/profile/BasicDetails";
import ChangePassword from "../components/profile/ChangePassword";
import NotificationSettings from "../components/profile/NotificationSettings";
import PrivacySettings from "../components/profile/PrivacySettings";
import Appearance from "../components/profile/Appearance";

const profileTabs = [
  { 
    path: "/profile", 
    label: "Basic Details", 
    icon: User,
    description: "Manage your personal information"
  },
  { 
    path: "/profile/password", 
    label: "Change Password", 
    icon: KeyRound,
    description: "Update your account password"
  },
  { 
    path: "/profile/notifications", 
    label: "Notifications", 
    icon: Bell,
    description: "Configure notification preferences"
  },
  { 
    path: "/profile/privacy", 
    label: "Privacy & Security", 
    icon: Shield,
    description: "Manage privacy settings"
  },
  { 
    path: "/profile/appearance", 
    label: "Appearance", 
    icon: Palette,
    description: "Customize your interface"
  },
];

export default function Profile() {
  const location = useLocation();

  const isActiveTab = (path) => {
    if (path === "/profile") {
      return location.pathname === "/profile";
    }
    return location.pathname === path;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Profile Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <nav className="p-2">
              {profileTabs.map((tab) => {
                const Icon = tab.icon;
                const active = isActiveTab(tab.path);
                
                return (
                  <NavLink
                    key={tab.path}
                    to={tab.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all duration-200 ${
                      active
                        ? "bg-primary text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{tab.label}</p>
                      {active && (
                        <p className="text-xs opacity-90 mt-0.5 hidden xl:block">
                          {tab.description}
                        </p>
                      )}
                    </div>
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Help Card */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <h3 className="font-semibold text-blue-900 text-sm mb-2">Need Help?</h3>
            <p className="text-xs text-blue-700 mb-3">
              Contact support if you're having trouble with your account settings.
            </p>
            <button className="text-xs text-blue-600 hover:text-blue-700 font-medium underline">
              Contact Support
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
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