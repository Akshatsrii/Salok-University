import React from 'react';
import { Bus, ArrowRight, MapPin, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TransportOverviewWidget() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Bus className="w-5 h-5 text-[#8a1538]" />
          Transport Module
        </h3>
        <Link to="/facility/transport" className="text-xs text-[#8a1538] font-bold hover:underline flex items-center gap-1">
          View All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      
      <div className="p-5 flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
          <div className="bg-green-100 p-2 rounded text-green-600"><MapPin className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-medium text-gray-900">Live Tracking</p>
            <p className="text-xs text-gray-500">12 buses on route</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg">
          <div className="bg-orange-100 p-2 rounded text-orange-600"><Wrench className="w-5 h-5" /></div>
          <div>
            <p className="text-sm font-medium text-gray-900">Maintenance</p>
            <p className="text-xs text-gray-500">2 buses in garage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
