import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export function ExamScheduleTable() {
  const schedule = [
    { date: '15 Nov 2026', time: '10:00 AM - 01:00 PM', subject: 'Data Structures (CS301)', room: 'Block A, Room 402' },
    { date: '18 Nov 2026', time: '02:00 PM - 05:00 PM', subject: 'Operating Systems (CS302)', room: 'Block B, Hall 1' },
    { date: '21 Nov 2026', time: '10:00 AM - 01:00 PM', subject: 'Database Systems (CS303)', room: 'Block A, Room 405' },
    { date: '24 Nov 2026', time: '10:00 AM - 12:00 PM', subject: 'Software Engineering (CS304)', room: 'Block C, Hall 3' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800">Mid-Semester Schedule</h3>
        <button className="text-sm font-bold text-[#8a1538] hover:underline">Download PDF</button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
            <th className="p-4 font-bold">Date & Time</th>
            <th className="p-4 font-bold">Subject Code / Name</th>
            <th className="p-4 font-bold">Venue</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {schedule.map((exam, idx) => (
            <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="p-4">
                <p className="font-bold text-gray-900 flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-500" /> {exam.date}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1"><Clock className="w-3.5 h-3.5" /> {exam.time}</p>
              </td>
              <td className="p-4 font-bold text-gray-700">{exam.subject}</td>
              <td className="p-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center w-fit gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {exam.room}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
