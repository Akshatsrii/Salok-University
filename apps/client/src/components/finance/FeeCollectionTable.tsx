import React from 'react';
import { ArrowDownLeft, ArrowUpRight, IndianRupee } from 'lucide-react';

export function FeeCollectionTable() {
  const txns = [
    { id: 'TXN-9021', name: 'Rahul Sharma', amount: 85000, type: 'IN', status: 'SUCCESS', date: 'Today, 10:45 AM' },
    { id: 'TXN-9022', name: 'Tech Mahindra Ltd', amount: 450000, type: 'OUT', status: 'SUCCESS', date: 'Today, 09:15 AM' },
    { id: 'TXN-9023', name: 'Aditi Verma', amount: 85000, type: 'IN', status: 'PENDING', date: 'Yesterday' },
    { id: 'TXN-9024', name: 'Server Hosting AWS', amount: 12500, type: 'OUT', status: 'SUCCESS', date: 'Yesterday' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <h3 className="font-bold text-gray-800">Recent Transactions</h3>
        <button className="text-sm font-bold text-[#8a1538] hover:underline">View Ledger</button>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
            <th className="p-4 font-bold">Transaction ID</th>
            <th className="p-4 font-bold">Party / Student</th>
            <th className="p-4 font-bold">Date</th>
            <th className="p-4 font-bold">Amount</th>
            <th className="p-4 font-bold text-right">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {txns.map(txn => (
            <tr key={txn.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <td className="p-4 font-mono text-xs text-gray-500">{txn.id}</td>
              <td className="p-4 font-bold text-gray-900 flex items-center gap-3">
                <div className={`p-1.5 rounded-full ${txn.type === 'IN' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  {txn.type === 'IN' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                </div>
                {txn.name}
              </td>
              <td className="p-4 text-gray-500 font-medium">{txn.date}</td>
              <td className="p-4">
                <span className={`font-black flex items-center ${txn.type === 'IN' ? 'text-emerald-600' : 'text-gray-900'}`}>
                  {txn.type === 'IN' ? '+' : '-'}<IndianRupee className="w-3 h-3 mx-0.5" />{txn.amount.toLocaleString()}
                </span>
              </td>
              <td className="p-4 text-right">
                <span className={`px-2 py-1 rounded text-xs font-bold ${txn.status === 'SUCCESS' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {txn.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
