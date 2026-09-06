import React from 'react';
import { Bell, CheckCircle } from 'lucide-react';

export function FacilityNoticeFeed() {
  const notices = [
    { id: 1, title: 'Hostel A Water Supply Interruption', time: '2 hours ago', type: 'alert' },
    { id: 2, title: 'New Books Batch Arrived', time: '5 hours ago', type: 'info' },
    { id: 3, title: 'Bus Route 4 Diverted due to roadwork', time: '1 day ago', type: 'alert' },
    { id: 4, title: 'Monthly Maintenance Audit', time: '2 days ago', type: 'success' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="p-5 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Bell className="w-5 h-5 text-gray-500" />
          Recent Activity
        </h3>
      </div>
      
      <div className="p-0">
        {notices.map((notice, idx) => (
          <div key={notice.id} className={`p-4 flex gap-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors`}>
            <div className="mt-0.5">
              {notice.type === 'alert' && <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5" />}
              {notice.type === 'info' && <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5" />}
              {notice.type === 'success' && <CheckCircle className="w-4 h-4 text-green-500" />}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{notice.title}</p>
              <p className="text-xs text-gray-400 mt-1">{notice.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 mt-auto border-t border-gray-50">
        <button className="w-full text-center text-sm text-[#8a1538] font-bold hover:underline">
          View All Logs
        </button>
      </div>
    </div>
  );
}
