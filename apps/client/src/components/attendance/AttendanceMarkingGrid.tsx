import React, { useState } from 'react';
import { User, Check, X } from 'lucide-react';

export function AttendanceMarkingGrid() {
  const [students, setStudents] = useState([
    { id: 'STU001', name: 'Aarav Sharma', status: 'PRESENT' },
    { id: 'STU002', name: 'Aditi Verma', status: 'PRESENT' },
    { id: 'STU003', name: 'Karan Singh', status: 'ABSENT' },
    { id: 'STU004', name: 'Neha Gupta', status: 'PRESENT' },
    { id: 'STU005', name: 'Rohan Patel', status: 'ABSENT' },
  ]);

  const toggleStatus = (id: string) => {
    setStudents(students.map(s => s.id === id ? { ...s, status: s.status === 'PRESENT' ? 'ABSENT' : 'PRESENT' } : s));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800">Manual Entry Grid</h3>
        <button className="bg-[#8a1538] text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-[#6c102c] transition">
          Submit Attendance
        </button>
      </div>
      <div className="p-0">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
              <th className="p-4 font-bold">Roll No</th>
              <th className="p-4 font-bold">Student Name</th>
              <th className="p-4 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {students.map(student => (
              <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono text-xs text-gray-500">{student.id}</td>
                <td className="p-4 font-bold text-gray-900 flex items-center gap-3">
                  <div className="bg-gray-100 p-1.5 rounded-full"><User className="w-4 h-4 text-gray-500" /></div>
                  {student.name}
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => toggleStatus(student.id)}
                    className={`flex items-center justify-center w-24 ml-auto py-1.5 rounded font-bold text-xs transition-colors ${student.status === 'PRESENT' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 'bg-red-100 text-red-700 hover:bg-red-200'}`}
                  >
                    {student.status === 'PRESENT' ? <><Check className="w-3 h-3 mr-1" /> Present</> : <><X className="w-3 h-3 mr-1" /> Absent</>}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
