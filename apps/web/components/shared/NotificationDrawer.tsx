"use client";

import { useState } from 'react';
import { Bell, X, Info, AlertTriangle, Clock } from 'lucide-react';

export const NotificationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    { id: 1, title: 'Library Book Due', message: 'Calculus Vol 1 is due tomorrow.', type: 'REMINDER', time: '10 mins ago', read: false },
    { id: 2, title: 'Fee Payment Overdue', message: 'Semester 4 fees are pending.', type: 'ALERT', time: '2 hours ago', read: false },
    { id: 3, title: 'New Notice Posted', message: 'Mid-term schedule is now available.', type: 'NOTICE', time: '1 day ago', read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch(type) {
      case 'REMINDER': return <Clock className="w-5 h-5 text-blue-500" />;
      case 'ALERT': return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case 'NOTICE': return <Info className="w-5 h-5 text-indigo-500" />;
      default: return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
      >
        <Bell className="w-6 h-6" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 className="font-bold text-gray-900">Notifications</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-gray-500 text-sm">No new notifications</div>
            ) : (
              <div className="divide-y divide-gray-50">
                {notifications.map((n) => (
                  <div key={n.id} className={`p-4 flex gap-3 hover:bg-gray-50 transition-colors ${!n.read ? 'bg-indigo-50/30' : ''}`}>
                    <div className="mt-1 flex-shrink-0">{getIcon(n.type)}</div>
                    <div>
                      <p className={`text-sm font-medium ${!n.read ? 'text-gray-900' : 'text-gray-700'}`}>{n.title}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{n.message}</p>
                      <p className="text-xs text-gray-400 mt-2">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="p-3 border-t border-gray-100 text-center">
            <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View All</button>
          </div>
        </div>
      )}
    </div>
  );
};
