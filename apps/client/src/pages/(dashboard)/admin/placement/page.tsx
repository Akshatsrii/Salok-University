import React from 'react';
import { DriveTracker } from '@/components/placement/DriveTracker';
import { EligibleDrivesList } from '@/components/placement/EligibleDrivesList';
import { Building2, Briefcase } from 'lucide-react';

export default function AdminPlacementDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-[#8a1538]" />
            Placement Cell Portal
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage upcoming drives, companies, and student placements.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DriveTracker />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <EligibleDrivesList />
        </div>
      </div>
    </div>
  );
}
