import { StudentBusPass } from '../../../../components/transport/StudentBusPass';
import { LiveGPSMap } from '../../../../components/transport/LiveGPSMap';

export default function StudentTransportPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Transport</h1>
        <p className="text-gray-500 mt-1">View your digital bus pass and track your bus live.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <StudentBusPass />
        </div>
        <div className="lg:col-span-3">
          <LiveGPSMap />
        </div>
      </div>
    </div>
  );
}
