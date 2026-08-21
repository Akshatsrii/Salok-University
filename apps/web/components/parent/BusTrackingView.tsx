"use client";

import { Bus, MapPin, Clock } from "lucide-react";

export const BusTrackingView = () => {
  return (
    <div className="bg-[#1a2b4c] p-6 rounded-3xl border border-[#ffb800]/20 shadow-sm col-span-1 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffb800]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#ffb800] rounded-xl text-[#1a2b4c]">
            <Bus className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-lg">Bus Tracking</h3>
        </div>
        <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live
        </span>
      </div>

      <div className="space-y-4 relative z-10">
        <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs text-gray-400">Route</p>
              <p className="font-bold">Route 4 - City Center</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Bus No.</p>
              <p className="font-bold">DL 1P 4589</p>
            </div>
          </div>
          
          <div className="space-y-3 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#ffb800] before:via-white/20 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-[#ffb800] border-2 border-[#1a2b4c] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-2 rounded-xl bg-[#ffb800]/10 border border-[#ffb800]/20 ml-4 md:ml-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-[#ffb800]">Sector 14 Metro</h4>
                  <span className="text-[10px] text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" /> 08:15 AM</span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-4 h-4 rounded-full bg-white/20 border-2 border-[#1a2b4c] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-2 ml-4 md:ml-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-xs text-gray-300">University Campus</h4>
                  <span className="text-[10px] text-gray-500">ETA 08:45 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-white/10 text-white font-bold py-2.5 rounded-xl hover:bg-white/20 transition-colors flex items-center justify-center gap-2 text-sm">
          <MapPin className="w-4 h-4" />
          View on Map
        </button>
      </div>
    </div>
  );
};
