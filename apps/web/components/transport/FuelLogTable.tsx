"use client";

import { useState } from 'react';
import { Fuel, PlusCircle } from 'lucide-react';
import type { FuelLog } from '../../types/transport';

export const FuelLogTable = () => {
  const [logs] = useState<FuelLog[]>([
    { id: 'f1', busNumber: 'UP32-AB-1234', date: '2026-08-12', liters: 45.5, cost: 4320 },
    { id: 'f2', busNumber: 'UP32-XY-9876', date: '2026-08-11', liters: 50.0, cost: 4750 }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Fuel className="w-5 h-5 text-orange-500" /> Fuel Expenses
        </h3>
        <button className="bg-orange-500 text-white px-3 py-1.5 rounded text-sm font-medium hover:bg-orange-600 flex items-center gap-1">
          <PlusCircle className="w-4 h-4" /> Add Record
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Date</th>
              <th className="px-4 py-3">Bus Number</th>
              <th className="px-4 py-3">Fuel (Liters)</th>
              <th className="px-4 py-3 rounded-tr-lg">Cost (₹)</th>
            </tr>
          </thead>
          <tbody>
            {logs.map(log => (
              <tr key={log.id} className="border-b border-gray-100">
                <td className="px-4 py-3 text-gray-600 font-medium">{log.date}</td>
                <td className="px-4 py-3 font-bold text-gray-800">{log.busNumber}</td>
                <td className="px-4 py-3 text-gray-700">{log.liters} L</td>
                <td className="px-4 py-3 font-semibold text-orange-600">₹{log.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
