"use client";

import { useState } from 'react';
import { Wrench, CheckCircle } from 'lucide-react';
import type { MaintenanceLog } from '../../types/transport';

export const MaintenanceLogTable = () => {
  const [logs] = useState<MaintenanceLog[]>([
    { id: 'm1', busNumber: 'UP32-AB-1234', date: '2026-08-10', description: 'Engine Oil Change and Brake Inspection', cost: 12500, status: 'COMPLETED' },
    { id: 'm2', busNumber: 'UP32-XY-9876', date: '2026-08-15', description: 'Tire Replacement', cost: 18000, status: 'SCHEDULED' }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Wrench className="w-5 h-5 text-gray-700" /> Maintenance & Servicing
      </h3>

      <div className="space-y-4">
        {logs.map(log => (
          <div key={log.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-gray-800">{log.busNumber}</span>
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                  log.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {log.status}
                </span>
              </div>
              <p className="text-sm text-gray-600">{log.description}</p>
              <p className="text-xs text-gray-400 mt-1">Date: {log.date}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase font-semibold">Cost</p>
                <p className="font-bold text-gray-900">₹{log.cost}</p>
              </div>
              
              {log.status === 'SCHEDULED' && (
                <button 
                  className="p-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-500 rounded-full transition-colors"
                  title="Mark as Completed"
                >
                  <CheckCircle className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
