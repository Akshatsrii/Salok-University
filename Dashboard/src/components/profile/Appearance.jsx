import { useState } from "react";
import { Save, Sun, Moon, Monitor } from "lucide-react";

export default function Appearance() {
  const [settings, setSettings] = useState({
    theme: "light",
    fontSize: "medium",
    compactMode: false,
  });

  const handleChange = (key, value) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appearance settings saved:", settings);
  };

  const themes = [
    { value: "light", label: "Light", icon: Sun, desc: "Bright and clean interface" },
    { value: "dark", label: "Dark", icon: Moon, desc: "Easy on the eyes" },
    { value: "auto", label: "Auto", icon: Monitor, desc: "Follows system settings" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Appearance</h2>
        <p className="text-sm text-gray-600 mt-1">
          Customize how the portal looks for you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Theme Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Theme
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {themes.map((theme) => {
              const Icon = theme.icon;
              return (
                <button
                  key={theme.value}
                  type="button"
                  onClick={() => handleChange("theme", theme.value)}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    settings.theme === theme.value
                      ? "border-primary bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${
                    settings.theme === theme.value ? "text-primary" : "text-gray-600"
                  }`} />
                  <p className="font-medium text-gray-800">{theme.label}</p>
                  <p className="text-xs text-gray-600 mt-1">{theme.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Font Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Size
          </label>
          <select
            value={settings.fontSize}
            onChange={(e) => handleChange("fontSize", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="small">Small</option>
            <option value="medium">Medium (Recommended)</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Compact Mode */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-800">Compact Mode</p>
            <p className="text-sm text-gray-600">Reduce spacing for more content</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.compactMode}
              onChange={() => handleChange("compactMode", !settings.compactMode)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
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