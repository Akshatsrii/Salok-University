"use client";

import { useState } from 'react';
import { Search, Printer, AlertTriangle, CheckCircle } from 'lucide-react';
import { HallTicketEligibility } from '../../types/examination';

export const HallTicketGenerator = () => {
  const [studentId, setStudentId] = useState('');
  const [data, setData] = useState<HallTicketEligibility | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    // Mock API call checking eligibility
    setTimeout(() => {
      setData({
        studentId: 'STU-2023-045',
        name: 'Rahul Sharma',
        rollNo: '2023CS045',
        attendance: 82,
        feeDues: 0,
        eligible: true
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <h3 className="text-lg font-bold text-gray-900">Generate Hall Ticket</h3>
        <p className="text-sm text-gray-500 mt-1">Check eligibility and print hall tickets for examinations.</p>
      </div>

      <div className="p-6">
        <div className="flex gap-4 max-w-xl">
          <input 
            type="text" 
            placeholder="Enter Student ID or Roll No" 
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button 
            onClick={handleSearch}
            className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Search className="w-4 h-4" /> Check
          </button>
        </div>

        {loading && <div className="mt-8 text-center text-gray-500">Checking eligibility constraints...</div>}

        {data && !loading && (
          <div className="mt-8 border border-gray-200 rounded-lg p-6 bg-gray-50">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-xl font-bold text-gray-900">{data.name}</h4>
                <p className="text-gray-600">Roll No: {data.rollNo} | ID: {data.studentId}</p>
              </div>
              {data.eligible ? (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" /> Eligible
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" /> Not Eligible
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500">Attendance</p>
                <p className={`text-lg font-bold ${data.attendance >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                  {data.attendance}% <span className="text-xs font-normal text-gray-400">(Req: 75%)</span>
                </p>
              </div>
              <div className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500">Fee Dues</p>
                <p className={`text-lg font-bold ${data.feeDues === 0 ? 'text-green-600' : 'text-red-600'}`}>
                  ₹{data.feeDues} <span className="text-xs font-normal text-gray-400">(Req: ₹0)</span>
                </p>
              </div>
            </div>

            <button 
              disabled={!data.eligible}
              className={`w-full py-3 rounded-md font-bold flex items-center justify-center gap-2 transition-colors ${
                data.eligible ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Printer className="w-5 h-5" /> Generate & Print Hall Ticket
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
