"use client";

import { useState } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import type { PlacementDrive } from '../../types/placement';

export const DriveTracker = () => {
  const [drives] = useState<PlacementDrive[]>([
    { id: 'd1', companyName: 'Google', role: 'Software Engineer', package: '32 LPA', deadline: '2026-08-20', status: 'ONGOING', eligibility: { cgpa: 8.5, branches: ['CSE', 'IT'] } },
    { id: 'd2', companyName: 'TCS', role: 'System Engineer', package: '4.5 LPA', deadline: '2026-08-15', status: 'UPCOMING', eligibility: { cgpa: 6.0, branches: ['ALL'] } },
    { id: 'd3', companyName: 'Microsoft', role: 'SDE-1', package: '45 LPA', deadline: '2026-07-10', status: 'COMPLETED', eligibility: { cgpa: 9.0, branches: ['CSE'] } }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-600" /> Placement Drives
        </h3>
        <button className="bg-indigo-600 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-indigo-700">
          + New Drive
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Company</th>
              <th className="px-4 py-3">Role & Package</th>
              <th className="px-4 py-3">Eligibility</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3 rounded-tr-lg">Status</th>
            </tr>
          </thead>
          <tbody>
            {drives.map(drive => (
              <tr key={drive.id} className="border-b border-gray-100">
                <td className="px-4 py-3 font-bold text-gray-800">{drive.companyName}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-indigo-700">{drive.role}</div>
                  <div className="text-xs text-gray-500">{drive.package}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="text-xs font-medium text-gray-700">{drive.eligibility.cgpa}+ CGPA</div>
                  <div className="text-xs text-gray-500">{drive.eligibility.branches.join(', ')}</div>
                </td>
                <td className="px-4 py-3 text-gray-600 flex items-center gap-1 mt-1.5">
                  <Calendar className="w-3 h-3" /> {drive.deadline}
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    drive.status === 'ONGOING' ? 'bg-blue-100 text-blue-700' :
                    drive.status === 'COMPLETED' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
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
};
