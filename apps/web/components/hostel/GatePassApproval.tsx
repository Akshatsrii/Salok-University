"use client";

import { useState } from 'react';
import { LogOut, Check, X } from 'lucide-react';
import type { GatePass } from '../../types/hostel';

export const GatePassApproval = () => {
  const [passes, setPasses] = useState<GatePass[]>([
    { id: 'gp1', studentId: 'stu1', studentName: 'Amit Singh', purpose: 'Going Home for weekend', outTime: 'Friday 05:00 PM', expectedInTime: 'Sunday 08:00 PM', status: 'PENDING' },
    { id: 'gp2', studentId: 'stu3', studentName: 'Neha Sharma', purpose: 'Medical Checkup', outTime: 'Today 10:00 AM', expectedInTime: 'Today 04:00 PM', status: 'PENDING' }
  ]);

  const handleAction = (id: string, action: 'APPROVED' | 'REJECTED') => {
    setPasses(passes.map(p => p.id === id ? { ...p, status: action } : p));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <LogOut className="w-5 h-5 text-gray-700" /> Gate Pass Requests
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {passes.map(pass => (
          <div key={pass.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-gray-800">{pass.studentName}</h4>
                <p className="text-xs text-gray-500">ID: {pass.studentId}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                pass.status === 'PENDING' ? 'bg-orange-100 text-orange-700' :
                pass.status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                'bg-red-100 text-red-700'
              }`}>
                {pass.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-700 mt-3 mb-4 border-l-2 border-blue-500 pl-3">
              "{pass.purpose}"
            </p>
            
            <div className="flex justify-between text-xs text-gray-500 mb-4 bg-gray-50 p-2 rounded">
              <div>
                <span className="block font-semibold">Out:</span> {pass.outTime}
              </div>
              <div className="text-right">
                <span className="block font-semibold">Expected In:</span> {pass.expectedInTime}
              </div>
            </div>

            {pass.status === 'PENDING' && (
              <div className="flex gap-2">
                <button 
                  onClick={() => handleAction(pass.id, 'APPROVED')}
                  className="flex-1 py-2 bg-green-50 text-green-600 rounded flex justify-center items-center gap-1 hover:bg-green-100 font-medium transition-colors"
                >
                  <Check className="w-4 h-4" /> Approve
                </button>
                <button 
                  onClick={() => handleAction(pass.id, 'REJECTED')}
                  className="flex-1 py-2 bg-red-50 text-red-600 rounded flex justify-center items-center gap-1 hover:bg-red-100 font-medium transition-colors"
                >
                  <X className="w-4 h-4" /> Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
