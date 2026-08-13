"use client";

import { Bus, MapPin } from 'lucide-react';

export const StudentBusPass = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Bus className="w-5 h-5 text-blue-600" /> Digital Bus Pass
      </h3>

      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white shadow-md relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
        
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <p className="text-xs font-medium text-blue-100 uppercase tracking-widest mb-1">Assigned Route</p>
            <h4 className="text-2xl font-bold">City Center Express</h4>
          </div>
          <div className="text-right">
            <span className="bg-white text-indigo-700 font-bold px-3 py-1 rounded-full text-sm">
              UP32-AB-1234
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div>
            <p className="text-xs text-blue-200 uppercase">Boarding Stop</p>
            <p className="font-semibold flex items-center gap-1 mt-1">
              <MapPin className="w-4 h-4 text-orange-300" /> Sector 18
            </p>
          </div>
          <div>
            <p className="text-xs text-blue-200 uppercase">Expected Pickup</p>
            <p className="font-semibold mt-1">07:30 AM</p>
          </div>
          <div>
            <p className="text-xs text-blue-200 uppercase">Driver</p>
            <p className="font-semibold mt-1">Ramu Kaka</p>
          </div>
          <div>
            <p className="text-xs text-blue-200 uppercase">Status</p>
            <p className="font-semibold mt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> On the way
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
