import React from 'react';
import { Flame } from 'lucide-react';

export function StreakWidget() {
  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const activeDays = [true, true, false, true, true, false, false]; // Mock data

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          Daily Streak
        </h3>
        <span className="text-2xl font-black text-orange-500">4</span>
      </div>
      
      <p className="text-sm text-gray-500 mb-4">
        Solve the daily challenge to keep your streak alive!
      </p>

      <div className="flex justify-between items-center">
        {weekDays.map((day, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                ${activeDays[idx] ? 'bg-orange-100 text-orange-600 ring-2 ring-orange-200' : 'bg-gray-100 text-gray-400'}`}
            >
              {activeDays[idx] ? <Flame className="w-4 h-4" /> : null}
            </div>
            <span className="text-xs font-medium text-gray-400">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
