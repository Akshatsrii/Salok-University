import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function DriveTracker() {
  const drives = [
    { id: 1, company: 'Google', role: 'Software Engineer', ctc: '32 LPA', date: 'Oct 15, 2026', status: 'UPCOMING' },
    { id: 2, company: 'Microsoft', role: 'SDE-1', ctc: '44 LPA', date: 'Oct 20, 2026', status: 'UPCOMING' },
    { id: 3, company: 'TCS', role: 'System Engineer', ctc: '7 LPA', date: 'Sep 05, 2026', status: 'COMPLETED' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-50">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-blue-500" />
          Campus Drives
        </h3>
      </div>
      <div className="p-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-bold">Company</th>
              <th className="p-4 font-bold">Role & Package</th>
              <th className="p-4 font-bold">Date</th>
              <th className="p-4 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {drives.map(drive => (
              <tr key={drive.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold text-gray-900">{drive.company}</td>
                <td className="p-4">
                  <p className="font-medium">{drive.role}</p>
                  <p className="text-green-600 font-bold text-xs">{drive.ctc}</p>
                </td>
                <td className="p-4 text-gray-500 flex items-center gap-1 mt-2">
                  <Calendar className="w-4 h-4" /> {drive.date}
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${drive.status === 'COMPLETED' ? 'bg-gray-100 text-gray-600' : 'bg-blue-100 text-blue-800'}`}>
                    {drive.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
