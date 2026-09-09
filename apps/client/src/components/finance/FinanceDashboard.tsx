import React from 'react';
import { IndianRupee, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

export function FinanceDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative overflow-hidden group">
        <div className="absolute -right-6 -top-6 bg-emerald-50 w-24 h-24 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
        <p className="text-sm font-medium text-gray-500 mb-2 relative z-10">Total Revenue (YTD)</p>
        <h3 className="text-3xl font-black text-gray-900 flex items-center relative z-10">
          <IndianRupee className="w-6 h-6 mr-1" /> 4.2 Cr
        </h3>
        <p className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1 relative z-10">
          <TrendingUp className="w-3 h-3" /> +12.5% from last year
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative overflow-hidden group">
        <div className="absolute -right-6 -top-6 bg-red-50 w-24 h-24 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
        <p className="text-sm font-medium text-gray-500 mb-2 relative z-10">Pending Dues</p>
        <h3 className="text-3xl font-black text-gray-900 flex items-center relative z-10">
          <IndianRupee className="w-6 h-6 mr-1" /> 85 L
        </h3>
        <p className="text-xs font-bold text-red-600 mt-2 flex items-center gap-1 relative z-10">
          <AlertTriangle className="w-3 h-3" /> 210 students pending
        </p>
      </div>

      <div className="bg-[#8a1538] rounded-xl p-6 border border-[#6c102c] shadow-md text-white relative overflow-hidden group">
        <div className="absolute -right-6 -top-6 bg-white w-24 h-24 rounded-full opacity-10 group-hover:scale-110 transition-transform duration-500"></div>
        <p className="text-sm font-medium text-white/80 mb-2 relative z-10">Today's Collection</p>
        <h3 className="text-3xl font-black text-white flex items-center relative z-10">
          <IndianRupee className="w-6 h-6 mr-1" /> 2.4 L
        </h3>
        <p className="text-xs font-medium text-white/80 mt-2 flex items-center gap-1 relative z-10">
          <CheckCircle className="w-3 h-3 text-emerald-400" /> 18 successful transactions
        </p>
      </div>
      
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative overflow-hidden group">
        <div className="absolute -right-6 -top-6 bg-blue-50 w-24 h-24 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
        <p className="text-sm font-medium text-gray-500 mb-2 relative z-10">Total Payroll</p>
        <h3 className="text-3xl font-black text-gray-900 flex items-center relative z-10">
          <IndianRupee className="w-6 h-6 mr-1" /> 1.2 Cr
        </h3>
        <p className="text-xs font-medium text-gray-400 mt-2 flex items-center gap-1 relative z-10">
          Disbursed on 1st of month
        </p>
      </div>
    </div>
  );
}
