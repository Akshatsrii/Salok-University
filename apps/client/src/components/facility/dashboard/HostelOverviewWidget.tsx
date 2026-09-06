import React from 'react';
import { Home, ArrowRight, Tool, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HostelOverviewWidget() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Home className="w-5 h-5 text-[#8a1538]" />
          Hostel Module
        </h3>
        <Link to="/facility/hostel" className="text-xs text-[#8a1538] font-bold hover:underline flex items-center gap-1">
          View All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      
      <div className="p-5 flex-1 space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded text-blue-600"><UserCheck className="w-4 h-4" /></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Room Allocations</p>
              <p className="text-xs text-gray-500">12 pending requests</p>
            </div>
          </div>
          <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">Action Needed</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded text-red-600"><Tool className="w-4 h-4" /></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Maintenance</p>
              <p className="text-xs text-gray-500">5 electrical, 2 plumbing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
