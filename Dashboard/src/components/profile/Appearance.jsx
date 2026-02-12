import { useState, useEffect } from "react";
import { Sun, Moon, Monitor, Save, Type, Layout } from "lucide-react";

export default function Appearance() {
  const defaultSettings = {
    theme: "dark",
    fontSize: "medium",
    compactMode: false,
  };

  const [settings, setSettings] = useState(defaultSettings);
  const [successMessage, setSuccessMessage] = useState("");

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem("appearanceSettings");
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    applyTheme(settings.theme);
    applyFontSize(settings.fontSize);
    applyCompactMode(settings.compactMode);
  }, [settings]);

  const applyTheme = (theme) => {
    const root = document.documentElement;

    if (theme === "auto") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", prefersDark);
    } else {
      root.classList.toggle("dark", theme === "dark");
    }
  };

  const applyFontSize = (size) => {
    const root = document.documentElement;
    root.classList.remove("text-sm", "text-base", "text-lg");

    if (size === "small") root.classList.add("text-sm");
    if (size === "medium") root.classList.add("text-base");
    if (size === "large") root.classList.add("text-lg");
  };

  const applyCompactMode = (enabled) => {
    document.body.classList.toggle("compact-mode", enabled);
  };

  const handleChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("appearanceSettings", JSON.stringify(settings));
    setSuccessMessage("Appearance settings saved successfully 🧡");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const themes = [
    { value: "light", label: "Light Mode", icon: Sun },
    { value: "dark", label: "Dark Mode", icon: Moon },
    { value: "auto", label: "Auto Mode", icon: Monitor },
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black
                    p-8 rounded-2xl shadow-2xl border border-gray-800
                    text-white transition-all duration-300">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500">
          Appearance Settings
        </h2>
        <p className="text-gray-400 mt-2">
          Customize how your dashboard looks
        </p>
      </div>

      {successMessage && (
        <div className="mb-6 bg-green-900/40 border border-green-600
                        text-green-400 p-3 rounded-lg text-sm">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* Theme Selection */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-5">
            Select Theme
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {themes.map((theme) => {
              const Icon = theme.icon;

              return (
                <button
                  key={theme.value}
                  type="button"
                  onClick={() => handleChange("theme", theme.value)}
                  className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                    settings.theme === theme.value
                      ? "border-orange-500 bg-orange-900/30 shadow-lg"
                      : "border-gray-800 hover:border-orange-400"
                  }`}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-orange-500" />
                  <p className="font-semibold">{theme.label}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Font Size */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-5 flex items-center gap-2">
            <Type className="w-5 h-5" />
            Font Size
          </h3>

          <select
            value={settings.fontSize}
            onChange={(e) => handleChange("fontSize", e.target.value)}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800
                       rounded-lg focus:ring-2 focus:ring-orange-500
                       focus:border-orange-500 text-white transition"
          >
            <option value="small">Small</option>
            <option value="medium">Medium (Recommended)</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Compact Mode */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-5 flex items-center gap-2">
            <Layout className="w-5 h-5" />
            Compact Mode
          </h3>

          <div className="flex items-center justify-between
                          p-5 bg-gray-900 border border-gray-800
                          rounded-xl hover:border-orange-500 transition">
            <div>
              <p className="font-semibold">Enable Compact Layout</p>
              <p className="text-sm text-gray-400">
                Reduce spacing for more content on screen
              </p>
            </div>

            {/* Orange Toggle */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.compactMode}
                onChange={() =>
                  handleChange("compactMode", !settings.compactMode)
                }
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
            Save Appearance
          </button>
        </div>

      </form>
    </div>
  );
}
