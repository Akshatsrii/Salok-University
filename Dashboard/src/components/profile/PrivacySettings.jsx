import { useState } from "react";
import { Save, Shield } from "lucide-react";

export default function PrivacySettings() {
  const [settings, setSettings] = useState({
    profileVisibility: "public",
    showEmail: true,
    showPhone: false,
    twoFactorAuth: false,
    loginAlerts: true,
  });

  const handleChange = (key, value) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Privacy settings saved:", settings);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Privacy & Security</h2>
        <p className="text-sm text-gray-600 mt-1">
          Control your privacy and security settings
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile Visibility
          </label>
          <select
            value={settings.profileVisibility}
            onChange={(e) => handleChange("profileVisibility", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="public">Public - Visible to everyone</option>
            <option value="students">Students Only - Visible to other students</option>
            <option value="private">Private - Only visible to faculty</option>
          </select>
        </div>

        <div className="space-y-3">
          {[
            { key: "showEmail", label: "Show Email Address", desc: "Display email on profile" },
            { key: "showPhone", label: "Show Phone Number", desc: "Display phone on profile" },
            { key: "twoFactorAuth", label: "Two-Factor Authentication", desc: "Add extra security to login" },
            { key: "loginAlerts", label: "Login Alerts", desc: "Get notified of new login attempts" },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-800">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[item.key]}
                  onChange={() => handleChange(item.key, !settings[item.key])}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          ))}
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900 text-sm mb-1">
                Security Recommendation
              </h4>
              <p className="text-sm text-yellow-700">
                We recommend enabling two-factor authentication for enhanced account security.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 font-medium"
          >
            <Save className="w-4 h-4" />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}