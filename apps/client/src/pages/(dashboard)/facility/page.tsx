import React, { useEffect, useState } from 'react';
import { FacilityStatCardGrid } from '@/components/facility/dashboard/FacilityStatCardGrid';
import { HostelOverviewWidget } from '@/components/facility/dashboard/HostelOverviewWidget';
import { LibraryOverviewWidget } from '@/components/facility/dashboard/LibraryOverviewWidget';
import { TransportOverviewWidget } from '@/components/facility/dashboard/TransportOverviewWidget';
import { FacilityNoticeFeed } from '@/components/facility/dashboard/FacilityNoticeFeed';
import { Building2, Settings } from 'lucide-react';

export default function FacilityDashboard() {
  const [stats, setStats] = useState({
    hostelOccupancy: 85,
    booksIssuedToday: 142,
    activeBuses: 12,
    pendingComplaints: 28
  });

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Building2 className="w-8 h-8 text-[#8a1538]" />
            Facility Operations Portal
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Overview of Hostel, Library, and Transport operations.
          </p>
        </div>
        <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors">
          <Settings className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <FacilityStatCardGrid stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <HostelOverviewWidget />
            <LibraryOverviewWidget />
          </div>
          <TransportOverviewWidget />
        </div>
        
        <div className="lg:col-span-1">
          <FacilityNoticeFeed />
        </div>
      </div>
    </div>
  );
}
