"use client";

import { Calendar, Clock, Video, User } from 'lucide-react';

export const CounsellingScheduler = () => {
  const sessions = [
    { id: 1, candidate: 'Rahul Sharma', time: '10:00 AM', date: 'Aug 10', mode: 'Online', counselor: 'Dr. A. Verma' },
    { id: 2, candidate: 'Neha Gupta', time: '11:30 AM', date: 'Aug 10', mode: 'In-Person', counselor: 'Prof. S. Singh' },
    { id: 3, candidate: 'Amit Kumar', time: '02:00 PM', date: 'Aug 10', mode: 'Online', counselor: 'Dr. A. Verma' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Calendar className="text-blue-500 w-5 h-5" />
          Today's Counselling Sessions
        </h3>
        <button className="px-3 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100">
          + Schedule New
        </button>
      </div>

      <div className="space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                {session.candidate.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{session.candidate}</h4>
                <div className="flex gap-3 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {session.time}, {session.date}</span>
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {session.counselor}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${session.mode === 'Online' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'}`}>
                {session.mode}
              </span>
              {session.mode === 'Online' && (
                <button className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  <Video className="w-4 h-4" /> Join
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
