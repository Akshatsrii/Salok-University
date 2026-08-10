"use client";

import { useState } from 'react';
import { Award, Printer } from 'lucide-react';

export const CertificateGenerator = () => {
  const [studentId, setStudentId] = useState('');
  const [certType, setCertType] = useState('Provisional');
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
        <Award className="w-5 h-5 text-blue-600" />
        <div>
          <h3 className="text-lg font-bold text-gray-900">Certificate Generation</h3>
          <p className="text-sm text-gray-500">Issue Provisional or Final Degree Certificates.</p>
        </div>
      </div>

      <div className="p-6 max-w-xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Student Roll No or ID</label>
            <input 
              type="text" 
              placeholder="e.g., 2023CS045" 
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Type</label>
            <select 
              value={certType}
              onChange={(e) => setCertType(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-500 bg-white"
            >
              <option value="Provisional">Provisional Certificate</option>
              <option value="Degree">Original Degree Certificate</option>
              <option value="Migration">Migration Certificate</option>
            </select>
          </div>
          
          <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
            <Printer className="w-4 h-4" /> Generate Certificate
          </button>
        </div>
      </div>
    </div>
  );
};
