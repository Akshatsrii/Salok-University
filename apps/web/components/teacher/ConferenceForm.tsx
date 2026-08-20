"use client";

import { MapPin } from "lucide-react";

export const ConferenceForm = () => {
  return (
    <div className="bg-[#1a2b4c] p-6 rounded-3xl border border-[#ffb800]/20 shadow-sm col-span-1 text-white relative">
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="p-2 bg-[#ffb800] rounded-xl text-[#1a2b4c]">
          <MapPin className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-lg">Conference Approval</h3>
      </div>

      <div className="space-y-4 relative z-10">
        <p className="text-sm text-gray-300">Request funding and approval for upcoming academic conferences.</p>
        
        <form className="space-y-3 mt-4">
          <input 
            type="text" 
            placeholder="Conference Name" 
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#ffb800] transition-colors"
          />
          <input 
            type="text" 
            placeholder="Location" 
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#ffb800] transition-colors"
          />
          <div className="flex gap-3">
            <input 
              type="date" 
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#ffb800] transition-colors"
            />
            <input 
              type="number" 
              placeholder="Budget (₹)" 
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#ffb800] transition-colors"
            />
          </div>
          <button type="button" className="w-full bg-[#ffb800] text-[#1a2b4c] font-bold py-3 rounded-xl hover:bg-[#e6a600] transition-colors mt-2">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};
