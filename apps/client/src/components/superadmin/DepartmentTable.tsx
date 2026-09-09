import React from 'react';
import { Layers, Plus } from 'lucide-react';

export function DepartmentTable() {
  const depts = [
    { code: 'CSE', name: 'Computer Science & Engineering', hod: 'Dr. R.K. Sharma', totalFaculty: 45, totalStudents: 1200 },
    { code: 'ECE', name: 'Electronics & Communication', hod: 'Dr. Smita Patel', totalFaculty: 38, totalStudents: 950 },
    { code: 'ME', name: 'Mechanical Engineering', hod: 'Dr. V.K. Singh', totalFaculty: 42, totalStudents: 1050 },
    { code: 'MBA', name: 'School of Management', hod: 'Dr. Anjali Desai', totalFaculty: 25, totalStudents: 600 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-500" />
          Academic Departments
        </h3>
        <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 hover:bg-indigo-700 transition">
          <Plus className="w-4 h-4" /> Add Dept
        </button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
            <th className="p-4 font-bold">Code</th>
            <th className="p-4 font-bold">Department Name</th>
            <th className="p-4 font-bold">HOD</th>
            <th className="p-4 font-bold text-center">Faculty</th>
            <th className="p-4 font-bold text-right">Students</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {depts.map(d => (
            <tr key={d.code} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="p-4">
                <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded font-black text-xs">{d.code}</span>
              </td>
              <td className="p-4 font-bold text-gray-900">{d.name}</td>
              <td className="p-4 text-gray-600 font-medium">{d.hod}</td>
              <td className="p-4 text-center">
                <span className="font-bold text-gray-700">{d.totalFaculty}</span>
              </td>
              <td className="p-4 text-right">
                <span className="font-bold text-emerald-600">{d.totalStudents}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
