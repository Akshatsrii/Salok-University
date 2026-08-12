"use client";

import { useState } from 'react';
import { LogOut } from 'lucide-react';

export const GatePassRequest = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <LogOut className="w-5 h-5 text-indigo-500" /> Apply for Gate Pass
      </h3>

      {submitted ? (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg font-medium border border-green-100">
          Gate pass request submitted successfully. Waiting for warden's approval.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Purpose of Leave</label>
            <input 
              type="text" 
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="E.g., Going home for weekend"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Out Time</label>
              <input 
                type="datetime-local" 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expected In Time</label>
              <input 
                type="datetime-local" 
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
};
