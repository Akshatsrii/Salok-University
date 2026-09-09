import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export function LiveBusTrackerWidget() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-indigo-500" />
          Live GPS Tracking - Route 42
        </h3>
        <span className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Live
        </span>
      </div>
      
      <div className="relative flex-1 bg-gray-100 min-h-[300px]">
        {/* Placeholder for Map Integration (e.g. Google Maps or Leaflet) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-6 text-center">
          <MapPin className="w-16 h-16 mb-4 text-gray-300" />
          <p className="font-bold text-gray-500">Map Integration Active</p>
          <p className="text-sm">Bus is currently 2.4 km away from your stop.</p>
        </div>

        {/* Floating details panel */}
        <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase">Next Stop</p>
            <p className="font-black text-gray-900">City Center Mall (ETA: 4 mins)</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-500 uppercase">Speed</p>
            <p className="font-black text-indigo-600">42 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
