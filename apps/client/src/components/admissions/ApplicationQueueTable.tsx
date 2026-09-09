import React from 'react';
import { Eye, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ApplicationQueueTable() {
  const applications = [
    { id: 'APP-2026-001', name: 'Rohan Sharma', course: 'B.Tech CSE', score: '94.5%', status: 'PENDING_REVIEW' },
    { id: 'APP-2026-002', name: 'Sanya Gupta', course: 'B.Tech ECE', score: '88.2%', status: 'DOCUMENT_VERIFIED' },
    { id: 'APP-2026-003', name: 'Vikram Singh', course: 'MBA', score: '76.0%', status: 'REJECTED' },
    { id: 'APP-2026-004', name: 'Pooja Verma', course: 'B.Tech IT', score: '91.0%', status: 'PENDING_REVIEW' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-indigo-500" />
          Application Review Queue
        </h3>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
            <th className="p-4 font-bold">App ID</th>
            <th className="p-4 font-bold">Applicant Name</th>
            <th className="p-4 font-bold">Applied Course</th>
            <th className="p-4 font-bold text-center">Qualifying Score</th>
            <th className="p-4 font-bold text-right">Status / Action</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {applications.map(app => (
            <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="p-4 font-mono text-xs text-gray-500 font-bold">{app.id}</td>
              <td className="p-4 font-bold text-gray-900">{app.name}</td>
              <td className="p-4 text-gray-600 font-medium">{app.course}</td>
              <td className="p-4 text-center font-black text-gray-700">{app.score}</td>
              <td className="p-4 text-right flex items-center justify-end gap-3">
                <span className={`px-2 py-1 rounded text-[10px] font-bold tracking-wider ${
                  app.status === 'PENDING_REVIEW' ? 'bg-amber-100 text-amber-800' :
                  app.status === 'DOCUMENT_VERIFIED' ? 'bg-emerald-100 text-emerald-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {app.status.replace('_', ' ')}
                </span>
                <Link to={`/admin/admissions/${app.id}`} className="p-2 bg-gray-100 hover:bg-[#8a1538] hover:text-white text-gray-600 rounded transition-colors">
                  <Eye className="w-4 h-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
