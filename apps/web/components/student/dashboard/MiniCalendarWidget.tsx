"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export const MiniCalendarWidget = () => {
  // Static visual calendar for August 2026
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);

  // Random dots to indicate events
  const getEventClass = (date: number) => {
    if (date === 15) return 'bg-[#ffb800] text-white'; // Today
    if ([3, 10, 24].includes(date)) return 'ring-2 ring-red-400'; // Exam
    if ([5, 12, 19, 26].includes(date)) return 'ring-2 ring-[#007bff]'; // Assignment
    return 'hover:bg-gray-100';
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm col-span-1 md:col-span-1 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-[#1a2b4c]">August 2026</h3>
        <div className="flex gap-2">
          <button className="p-1 rounded-md hover:bg-gray-100"><ChevronLeft className="w-4 h-4 text-gray-500" /></button>
          <button className="p-1 rounded-md hover:bg-gray-100"><ChevronRight className="w-4 h-4 text-gray-500" /></button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {days.map(day => (
          <div key={day} className="text-xs font-semibold text-gray-400">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Empty slots for start of month (August 1 is Saturday) */}
        <div className="aspect-square"></div>
        <div className="aspect-square"></div>
        <div className="aspect-square"></div>
        <div className="aspect-square"></div>
        <div className="aspect-square"></div>
        <div className="aspect-square"></div>
        
        {dates.map(date => (
          <div 
            key={date} 
            className={`aspect-square flex items-center justify-center text-sm rounded-full cursor-pointer transition-colors ${getEventClass(date)}`}
          >
            {date}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-red-400"></div> Mid-Term Exams
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-[#007bff]"></div> Assignment Due
        </div>
      </div>
    </div>
  );
};
