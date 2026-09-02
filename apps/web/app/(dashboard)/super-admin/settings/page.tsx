import { Settings, Save, Globe, Lock, Mail } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1a2b4c]">Global Settings</h1>
          <p className="text-gray-500 mt-1">Configure application-wide parameters and integrations.</p>
        </div>
        <button className="bg-[#ffb800] hover:bg-[#e6a600] text-[#1a2b4c] font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm">
          <Save className="w-5 h-5" /> Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-[#007bff] rounded-lg font-bold transition-colors">
            <Globe className="w-5 h-5" /> General
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <Lock className="w-5 h-5" /> Security & MFA
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <Mail className="w-5 h-5" /> SMTP / Email
          </button>
        </div>

        {/* Settings Form */}
        <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
          <h2 className="text-xl font-bold text-[#1a2b4c] mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#007bff]" /> General Configuration
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">University Name</label>
              <input type="text" defaultValue="Salok University" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff]" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Support Email</label>
              <input type="email" defaultValue="support@salok.edu" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff]" />
            </div>
            <div className="space-y-2 col-span-2">
              <label className="text-sm font-bold text-gray-700">Academic Year (Current)</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff]">
                <option>2026-2027</option>
                <option>2025-2026</option>
              </select>
            </div>
            <div className="col-span-2 flex items-center gap-3 mt-4">
              <input type="checkbox" id="maintenance" className="w-5 h-5 text-[#007bff] rounded border-gray-300" />
              <label htmlFor="maintenance" className="font-bold text-gray-700">Enable Maintenance Mode (Disable Student Logins)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
