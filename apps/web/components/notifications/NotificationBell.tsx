"use client";

import { useState } from 'react';
import { Bell } from 'lucide-react';

export const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const notifications = [
    { id: 1, text: 'Exam schedule for Sem 6 has been published.', time: '2h ago' },
    { id: 2, text: 'Your result for OS Mid-Term is now available.', time: '1d ago' },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors relative"
      >
        <Bell className="w-6 h-6" />
        <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-100">
            <h4 className="font-bold text-gray-900">Notifications</h4>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.map(n => (
              <div key={n.id} className="p-4 border-b border-gray-50 hover:bg-blue-50 cursor-pointer transition-colors">
                <p className="text-sm text-gray-800">{n.text}</p>
                <p className="text-xs text-gray-400 mt-1">{n.time}</p>
              </div>
            ))}
          </div>
          <div className="p-3 text-center border-t border-gray-100">
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">View all notifications</button>
          </div>
        </div>
      )}
    </div>
  );
};
