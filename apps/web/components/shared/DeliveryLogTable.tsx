"use client";

import { CheckCircle2, XCircle, Clock } from 'lucide-react';

export const DeliveryLogTable = () => {
  const logs = [
    { id: 1, notice: "End Semester Exam Schedule", target: "All Students", channel: "EMAIL", status: "DELIVERED", time: "10 mins ago" },
    { id: 2, notice: "End Semester Exam Schedule", target: "All Students", channel: "PUSH", status: "DELIVERED", time: "10 mins ago" },
    { id: 3, notice: "Faculty Meeting", target: "All Faculty & Staff", channel: "WHATSAPP", status: "FAILED", time: "1 hour ago" },
    { id: 4, notice: "Fee Payment Reminder", target: "Specific Branch/Department", channel: "SMS", status: "PENDING", time: "Just now" },
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'DELIVERED': return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'FAILED': return <XCircle className="w-4 h-4 text-red-500" />;
      case 'PENDING': return <Clock className="w-4 h-4 text-yellow-500" />;
      default: return null;
    }
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'DELIVERED': return "bg-green-50 text-green-700 ring-green-600/20";
      case 'FAILED': return "bg-red-50 text-red-700 ring-red-600/20";
      case 'PENDING': return "bg-yellow-50 text-yellow-800 ring-yellow-600/20";
      default: return "bg-gray-50 text-gray-700 ring-gray-600/20";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">Recent Delivery Logs</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notice</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target Scope</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{log.notice}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.target}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{log.channel}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getStatusClass(log.status)}`}>
                    {getStatusIcon(log.status)}
                    {log.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
