"use client";

import { Calendar, Users } from "lucide-react";

export const ParentMeetingScheduler = () => {
  return (
    <div className="bg-[#1a2b4c] p-6 rounded-3xl border border-[#ffb800]/20 shadow-sm col-span-1 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffb800]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <div className="p-2 bg-[#ffb800] rounded-xl text-[#1a2b4c]">
          <Users className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-lg">Parent Meetings</h3>
      </div>

      <div className="space-y-4 relative z-10">
        <p className="text-sm text-gray-300">Schedule meetings with parents of at-risk mentees.</p>
        
        <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
          <h4 className="font-semibold text-sm">Amit Kumar's Parents</h4>
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-2">
            <Calendar className="w-4 h-4 text-[#ffb800]" />
            Requested: Today, 04:00 PM
          </div>
          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-[#ffb800] text-[#1a2b4c] text-xs font-bold py-2 rounded-lg hover:bg-[#e6a600] transition-colors">
              Approve
            </button>
            <button className="flex-1 bg-white/10 text-white text-xs font-bold py-2 rounded-lg hover:bg-white/20 transition-colors">
              Reschedule
            </button>
          </div>
        </div>

        <button className="w-full mt-2 border border-dashed border-white/30 text-white/70 py-3 rounded-xl text-sm font-semibold hover:bg-white/5 transition-colors">
          + Schedule New Meeting
        </button>
      </div>
    </div>
  );
};
