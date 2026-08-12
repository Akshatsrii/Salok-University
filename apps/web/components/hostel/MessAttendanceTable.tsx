"use client";

import { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const MessAttendanceTable = () => {
  const [records] = useState([
    { id: 1, name: 'Rahul Kumar', room: '101', status: 'PRESENT', time: '08:15 AM' },
    { id: 2, name: 'Amit Singh', room: '102', status: 'ABSENT', time: '-' },
    { id: 3, name: 'Raj Sharma', room: '102', status: 'PRESENT', time: '08:45 AM' },
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Today's Mess Attendance</h3>
      <p className="text-sm text-gray-500 mb-6">Track student meals based on biometric/RFID scans.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Student Name</th>
              <th className="px-4 py-3">Room</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 rounded-tr-lg">Scan Time</th>
            </tr>
          </thead>
          <tbody>
            {records.map(record => (
              <tr key={record.id} className="border-b border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-800">{record.name}</td>
                <td className="px-4 py-3 text-gray-600">{record.room}</td>
                <td className="px-4 py-3">
                  {record.status === 'PRESENT' ? (
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <CheckCircle className="w-4 h-4" /> Present
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-red-500 font-medium">
                      <XCircle className="w-4 h-4" /> Absent
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-500">{record.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
