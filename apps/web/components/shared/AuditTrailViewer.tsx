"use client";

import { Activity, ShieldAlert, ArrowRight, User } from 'lucide-react';

export const AuditTrailViewer = () => {
  const auditLogs = [
    { id: 1, action: "UPDATE_FEES", user: "Admin (john_doe)", details: "Updated semester 4 fees structure", resource: "FeeTable_Sem4", time: "2 mins ago" },
    { id: 2, action: "DELETE_USER", user: "SuperAdmin (jane_smith)", details: "Removed inactive student profile", resource: "User_1048", time: "1 hour ago", critical: true },
    { id: 3, action: "CREATE_NOTICE", user: "Admin (john_doe)", details: "Created End Semester Exam notice", resource: "Notice_89", time: "3 hours ago" },
    { id: 4, action: "GRANT_PERMISSION", user: "SuperAdmin (jane_smith)", details: "Granted HostelManager role", resource: "User_812", time: "1 day ago", critical: true },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-900">
          <Activity className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-bold">System Audit Trail</h3>
        </div>
        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Export Log</button>
      </div>

      <div className="p-0">
        <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
          {auditLogs.map((log) => (
            <div key={log.id} className="p-4 flex gap-4 hover:bg-gray-50 transition-colors group">
              <div className="flex-shrink-0 mt-1">
                {log.critical ? (
                  <div className="p-2 bg-red-100 text-red-600 rounded-full">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="p-2 bg-gray-100 text-gray-600 rounded-full">
                    <Activity className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-1">
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {log.action}
                  </p>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{log.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <User className="w-3.5 h-3.5" />
                  <span>{log.user}</span>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <p className="text-sm text-gray-700">{log.details}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500 font-mono">
                    Target Resource: <ArrowRight className="w-3 h-3" /> <span className="bg-white px-1.5 py-0.5 rounded border border-gray-200">{log.resource}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
