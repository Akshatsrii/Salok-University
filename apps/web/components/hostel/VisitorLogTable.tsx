"use client";

import { useState } from 'react';
import { UserCheck } from 'lucide-react';

export const VisitorLogTable = () => {
  const [logs] = useState([
    { id: 1, visitorName: 'Ramesh Singh', relation: 'Father', studentName: 'Amit Singh', inTime: '10:30 AM', outTime: '12:45 PM' },
    { id: 2, visitorName: 'Suresh Kumar', relation: 'Brother', studentName: 'Rahul Kumar', inTime: '02:00 PM', outTime: '-' },
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
        <UserCheck className="w-5 h-5 text-gray-700" /> Visitor Log
      </h3>
      <p className="text-sm text-gray-500 mb-6">Track visitors entering the hostel premises.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Visitor Name</th>
              <th className="px-4 py-3">Relation</th>
              <th className="px-4 py-3">Visiting Student</th>
              <th className="px-4 py-3">In Time</th>
              <th className="px-4 py-3 rounded-tr-lg">Out Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-800">{log.visitorName}</td>
                <td className="px-4 py-3 text-gray-600">{log.relation}</td>
                <td className="px-4 py-3 text-blue-600 font-medium">{log.studentName}</td>
                <td className="px-4 py-3 text-gray-500">{log.inTime}</td>
                <td className="px-4 py-3 text-gray-500">{log.outTime === '-' ? <span className="text-orange-500 font-medium">Inside</span> : log.outTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
