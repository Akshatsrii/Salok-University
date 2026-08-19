"use client";

import { CheckCircle, Clock, MapPin } from "lucide-react";

export const LiveClassRosterWidget = () => {
  const classes = [
    { time: "09:00 AM", subject: "Data Structures", room: "LT-1", status: "Completed" },
    { time: "11:30 AM", subject: "Algorithm Design", room: "Lab-3", status: "Ongoing" },
    { time: "02:00 PM", subject: "Machine Learning", room: "LT-4", status: "Upcoming" },
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[#1a2b4c]">Today's Schedule</h3>
        <span className="text-xs font-semibold text-[#007bff] bg-blue-50 px-3 py-1 rounded-full">3 Lectures</span>
      </div>

      <div className="space-y-4">
        {classes.map((cls, idx) => (
          <div key={idx} className={`p-4 rounded-2xl flex items-center justify-between border ${cls.status === 'Ongoing' ? 'border-[#ffb800] bg-[#fffdf5]' : 'border-gray-100 bg-gray-50'}`}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${cls.status === 'Ongoing' ? 'bg-[#ffb800] text-gray-900' : 'bg-gray-200 text-gray-600'}`}>
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{cls.subject}</h4>
                <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                  <MapPin className="w-3 h-3" /> {cls.room} • {cls.time}
                </div>
              </div>
            </div>
            
            <div>
              {cls.status === 'Completed' && <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold"><CheckCircle className="w-4 h-4"/> Done</span>}
              {cls.status === 'Ongoing' && <span className="animate-pulse text-[#ffb800] text-xs font-bold px-3 py-1 bg-white rounded-full shadow-sm border border-[#ffdb70]/50">Live Now</span>}
              {cls.status === 'Upcoming' && <span className="text-gray-400 text-xs font-bold">Upcoming</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
