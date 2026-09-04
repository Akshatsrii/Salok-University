import { TransportNav } from '../../../../../components/transport/TransportNav';
import { DriverAttendanceTable } from '../../../../../components/transport/DriverAttendanceTable';

export default function FacilityTransportAttendancePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Transport Management</h1>
        <p className="text-gray-500 mt-1">Manage university fleet, track live GPS, and monitor maintenance.</p>
      </div>

      <TransportNav />
      <DriverAttendanceTable />
    </div>
  );
}
