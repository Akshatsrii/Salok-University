import React from 'react';
import { Timer, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContestCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="p-5 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Timer className="w-5 h-5 text-indigo-500" />
          Upcoming Contest
        </h3>
      </div>
      
      <div className="p-5">
        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 mb-4">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Weekly Contest 104</span>
          <h4 className="font-bold text-gray-900 mb-1">DSA & Logic Building</h4>
          <p className="text-xs text-gray-500">Sunday, 10:00 AM - 11:30 AM</p>
          
          <div className="flex gap-4 mt-4">
            <div className="flex flex-col">
              <span className="text-xl font-black text-indigo-600">12</span>
              <span className="text-[10px] uppercase font-bold text-gray-500">Hours</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-indigo-600">45</span>
              <span className="text-[10px] uppercase font-bold text-gray-500">Mins</span>
            </div>
          </div>
        </div>
        
        <Link to="/student/coding/contest" className="w-full block text-center bg-gray-900 text-white py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors">
          Register Now
        </Link>
      </div>
    </div>
  );
}
