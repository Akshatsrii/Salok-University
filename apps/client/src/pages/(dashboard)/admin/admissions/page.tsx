import React from 'react';
import { ApplicationQueueTable } from '@/components/admissions/ApplicationQueueTable';
import { Users, FileText, CheckCircle } from 'lucide-react';

export default function AdminAdmissionsDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <FileText className="w-8 h-8 text-[#8a1538]" />
            Admissions Portal
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Review incoming applications, merit lists, and enrollments.
          </p>
        </div>
        <button className="bg-[#8a1538] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[#6c102c] transition-colors shadow-sm">
          Publish Merit List
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="bg-blue-50 p-4 rounded-xl text-blue-500"><Users className="w-8 h-8" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total Apps</p>
            <p className="text-3xl font-black text-gray-900">4,250</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="bg-amber-50 p-4 rounded-xl text-amber-500"><FileText className="w-8 h-8" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">In Review</p>
            <p className="text-3xl font-black text-gray-900">842</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="bg-emerald-50 p-4 rounded-xl text-emerald-500"><CheckCircle className="w-8 h-8" /></div>
          <div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">Approved</p>
            <p className="text-3xl font-black text-gray-900">1,205</p>
          </div>
        </div>
      </div>

      <ApplicationQueueTable />
    </div>
  );
}
