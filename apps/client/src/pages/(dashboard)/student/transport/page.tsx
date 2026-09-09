import React from 'react';
import { BusPassCard } from '@/components/transport/BusPassCard';
import { LiveBusTrackerWidget } from '@/components/transport/LiveBusTrackerWidget';
import { Bus } from 'lucide-react';

export default function StudentTransportDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Bus className="w-8 h-8 text-[#8a1538]" />
            Transport & Commute
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Live bus tracking and your transit pass details.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <BusPassCard />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <LiveBusTrackerWidget />
        </div>
      </div>
    </div>
  );
}
