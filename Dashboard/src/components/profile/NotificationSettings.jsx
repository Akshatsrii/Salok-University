import { useState } from "react";
import { Save } from "lucide-react";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    examReminders: true,
    feeReminders: true,
    attendanceAlerts: true,
    academicUpdates: true,
    eventNotifications: false,
  });

  const handleToggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Notification settings saved:", settings);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Notification Settings</h2>
        <p className="text-sm text-gray-600 mt-1">
          Manage how you receive updates and alerts
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Notification Channels */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Notification Channels
            </h3>
            <div className="space-y-3">
              {[
                { key: "emailNotifications", label: "Email Notifications", desc: "Receive updates via email" },
                { key: "smsNotifications", label: "SMS Notifications", desc: "Receive updates via SMS" },
                { key: "pushNotifications", label: "Push Notifications", desc: "Receive push notifications in browser" },
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
                      onChange={() => handleToggle(item.key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Notification Types */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Notification Types
            </h3>
            <div className="space-y-3">
              {[
                { key: "examReminders", label: "Exam Reminders", desc: "Get notified about upcoming exams" },
                { key: "feeReminders", label: "Fee Reminders", desc: "Receive fee payment reminders" },
                { key: "attendanceAlerts", label: "Attendance Alerts", desc: "Get alerts when attendance is low" },
                { key: "academicUpdates", label: "Academic Updates", desc: "Receive course and grade updates" },
                { key: "eventNotifications", label: "Event Notifications", desc: "Get notified about university events" },
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
                      onChange={() => handleToggle(item.key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-200">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 font-medium"
          >
            <Save className="w-4 h-4" />
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
}