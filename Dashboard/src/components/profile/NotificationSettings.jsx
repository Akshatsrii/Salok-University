import { useState } from "react";
import { Save, Bell } from "lucide-react";

export default function NotificationSettings() {
  const defaultSettings = {
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    examReminders: true,
    feeReminders: true,
    attendanceAlerts: true,
    academicUpdates: true,
    eventNotifications: false,
  };

  const [settings, setSettings] = useState(defaultSettings);
  const [successMessage, setSuccessMessage] = useState("");

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleEnableAll = () => {
    const updated = Object.keys(settings).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setSettings(updated);
  };

  const handleDisableAll = () => {
    const updated = Object.keys(settings).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setSettings(updated);
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    setSuccessMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Preferences saved successfully 🧡");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const channels = [
    { key: "emailNotifications", label: "Email Notifications", desc: "Receive updates via email" },
    { key: "smsNotifications", label: "SMS Notifications", desc: "Receive updates via SMS" },
    { key: "pushNotifications", label: "Push Notifications", desc: "Receive browser notifications" },
  ];

  const types = [
    { key: "examReminders", label: "Exam Reminders", desc: "Get notified about upcoming exams" },
    { key: "feeReminders", label: "Fee Reminders", desc: "Receive fee payment reminders" },
    { key: "attendanceAlerts", label: "Attendance Alerts", desc: "Get alerts when attendance is low" },
    { key: "academicUpdates", label: "Academic Updates", desc: "Receive course and grade updates" },
    { key: "eventNotifications", label: "Event Notifications", desc: "Get notified about university events" },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black
                    p-8 rounded-2xl shadow-2xl border border-gray-800
                    text-white transition-all duration-300">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500 flex items-center gap-3">
          <Bell className="w-7 h-7" />
          Notification Settings
        </h2>
        <p className="text-gray-400 mt-2">
          Manage how you receive updates and alerts
        </p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mb-6 bg-green-900/40 border border-green-600
                        text-green-400 p-3 rounded-lg text-sm font-medium">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* Quick Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleEnableAll}
            className="px-5 py-2 bg-green-600 hover:bg-green-700
                       text-white rounded-lg text-sm font-semibold transition"
          >
            Enable All
          </button>

          <button
            type="button"
            onClick={handleDisableAll}
            className="px-5 py-2 bg-red-600 hover:bg-red-700
                       text-white rounded-lg text-sm font-semibold transition"
          >
            Disable All
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2 bg-gray-800 hover:bg-gray-700
                       text-white rounded-lg text-sm font-semibold transition"
          >
            Reset Default
          </button>
        </div>

        {/* Channels */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-5">
            Notification Channels
          </h3>

          <div className="space-y-4">
            {channels.map((item) => (
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

        {/* Types */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-5">
            Notification Types
          </h3>

          <div className="space-y-4">
            {types.map((item) => (
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
            Save Preferences
          </button>
        </div>

      </form>
    </div>
  );
}
