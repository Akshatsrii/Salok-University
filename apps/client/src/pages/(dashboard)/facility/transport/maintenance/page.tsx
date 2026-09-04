import { TransportNav } from '../../../../../components/transport/TransportNav';
import { MaintenanceLogTable } from '../../../../../components/transport/MaintenanceLogTable';
import { FuelLogTable } from '../../../../../components/transport/FuelLogTable';

export default function FacilityTransportMaintenancePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Transport Management</h1>
        <p className="text-gray-500 mt-1">Manage university fleet, track live GPS, and monitor maintenance.</p>
      </div>

      <TransportNav />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <MaintenanceLogTable />
        <FuelLogTable />
      </div>
    </div>
  );
}
