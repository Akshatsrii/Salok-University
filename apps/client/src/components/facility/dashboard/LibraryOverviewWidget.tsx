import React from 'react';
import { BookOpen, ArrowRight, Clock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function LibraryOverviewWidget() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#8a1538]" />
          Library Module
        </h3>
        <Link to="/facility/library" className="text-xs text-[#8a1538] font-bold hover:underline flex items-center gap-1">
          View All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
      
      <div className="p-5 flex-1 space-y-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-amber-100 p-2 rounded text-amber-600"><Clock className="w-4 h-4" /></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Overdue Books</p>
              <p className="text-xs text-gray-500">45 students have dues</p>
            </div>
          </div>
          <span className="text-xs font-bold text-gray-500">View</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-red-100 p-2 rounded text-red-600"><AlertTriangle className="w-4 h-4" /></div>
            <div>
              <p className="text-sm font-medium text-gray-900">Lost Books</p>
              <p className="text-xs text-gray-500">3 reported this week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
