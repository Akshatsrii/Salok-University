import React from 'react';
import { UniversityForm } from '@/components/superadmin/UniversityForm';
import { DepartmentTable } from '@/components/superadmin/DepartmentTable';
import { ShieldAlert, Globe, Server } from 'lucide-react';

export default function SuperAdminDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-[#8a1538]" />
            Super Admin Portal
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Core University configuration and infrastructure management.
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-gray-900 text-white border border-gray-800 p-3 rounded-xl flex items-center gap-3 shadow-lg">
            <Server className="w-6 h-6 text-emerald-400" />
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">System Status</p>
              <p className="text-sm font-bold text-white">All Services Active</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
             <Globe className="absolute -right-4 -bottom-4 w-32 h-32 text-gray-50 opacity-50" />
             <div className="relative z-10">
               <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                 University Profile Settings
               </h3>
               <UniversityForm />
             </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <DepartmentTable />
        </div>
      </div>
    </div>
  );
}
