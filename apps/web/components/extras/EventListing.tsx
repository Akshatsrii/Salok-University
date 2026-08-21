"use client";

import { Calendar } from "lucide-react";

export const EventListing = () => {
  const events = [
    { title: "Tech Symposium 2026", date: "Aug 25, 2026", type: "Academic" },
    { title: "Alumni Meet & Greet", date: "Sep 10, 2026", type: "Networking" },
    { title: "Annual Cultural Fest", date: "Oct 05, 2026", type: "Cultural" }
  ];

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
          <Calendar className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-gray-900 text-lg">Upcoming Events</h3>
      </div>
      
      <div className="space-y-4">
        {events.map((e, idx) => (
          <div key={idx} className="flex justify-between items-center p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
            <div>
              <h4 className="font-bold text-gray-900 text-sm">{e.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{e.date}</p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {e.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
