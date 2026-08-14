import { PlacementNav } from '../../../../../../components/placement/PlacementNav';
import { DriveTracker } from '../../../../../../components/placement/DriveTracker';

export default function AdminPlacementDrivesPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Placement Cell Admin</h1>
        <p className="text-gray-500 mt-1">Manage drives, companies, and student placements.</p>
      </div>

      <PlacementNav role="admin" />
      <DriveTracker />
    </div>
  );
}
