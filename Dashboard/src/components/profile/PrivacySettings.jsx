import { useState } from "react";
import { Shield, Eye, EyeOff, Save, Lock } from "lucide-react";

export default function PrivacySettings() {
  const defaultSettings = {
    profileVisibility: true,
    showEmail: false,
    showPhone: false,
    twoFactorAuth: false,
    loginAlerts: true,
  };

  const [settings, setSettings] = useState(defaultSettings);
  const [successMessage, setSuccessMessage] = useState("");

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Privacy settings updated successfully 🧡");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const privacyOptions = [
    {
      key: "profileVisibility",
      label: "Public Profile Visibility",
      desc: "Allow other students to view your profile",
    },
    {
      key: "showEmail",
      label: "Display Email Address",
      desc: "Show your email on your profile page",
    },
    {
      key: "showPhone",
      label: "Display Phone Number",
      desc: "Show your contact number publicly",
    },
  ];

  const securityOptions = [
    {
      key: "twoFactorAuth",
      label: "Two-Factor Authentication (2FA)",
      desc: "Add extra security layer to your account",
    },
    {
      key: "loginAlerts",
      label: "Login Activity Alerts",
      desc: "Get notified when someone logs into your account",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black
                    p-8 rounded-2xl shadow-2xl border border-gray-800
                    text-white transition-all duration-300">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500 flex items-center gap-3">
          <Shield className="w-7 h-7" />
          Privacy & Security
        </h2>
        <p className="text-gray-400 mt-2">
          Manage your privacy preferences and account security
        </p>
      </div>

      {successMessage && (
        <div className="mb-6 bg-green-900/40 border border-green-600
                        text-green-400 p-3 rounded-lg text-sm">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* Privacy Section */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-5 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Privacy Controls
          </h3>

          <div className="space-y-4">
            {privacyOptions.map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between
                           p-5 bg-gray-900 border border-gray-800
                           rounded-xl hover:border-orange-500 transition"
              >
                <div>
                  <p className="font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>

                {/* Orange Toggle */}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings[item.key]}
                    onChange={() => handleToggle(item.key)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-700 rounded-full peer
                                  peer-checked:bg-orange-500 relative transition-all
                                  after:content-[''] after:absolute after:top-[2px]
                                  after:left-[2px] after:bg-white after:rounded-full
                                  after:h-5 after:w-5 after:transition-all
                                  peer-checked:after:translate-x-full">
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-5 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Security Settings
          </h3>

          <div className="space-y-4">
            {securityOptions.map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between
                           p-5 bg-gray-900 border border-gray-800
                           rounded-xl hover:border-orange-500 transition"
              >
                <div>
                  <p className="font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings[item.key]}
                    onChange={() => handleToggle(item.key)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gray-700 rounded-full peer
                                  peer-checked:bg-orange-500 relative transition-all
                                  after:content-[''] after:absolute after:top-[2px]
                                  after:left-[2px] after:bg-white after:rounded-full
                                  after:h-5 after:w-5 after:transition-all
                                  peer-checked:after:translate-x-full">
                  </div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="border border-red-800 bg-red-900/20 p-6 rounded-xl">
          <h4 className="text-red-400 font-semibold mb-3">
            ⚠ Danger Zone
          </h4>
          <button
            type="button"
            className="px-5 py-2 bg-red-600 hover:bg-red-700
                       text-white rounded-lg text-sm font-semibold transition"
          >
            Delete Account
          </button>
        </div>

        {/* Save Button */}
        <div className="pt-6 border-t border-gray-800">
          <button
            type="submit"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600
                       text-black font-semibold rounded-lg
                       shadow-lg hover:shadow-orange-500/40
                       transition-all duration-300 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}
