import { PlacementNav } from '../../../../components/placement/PlacementNav';
import { EligibleDrivesList } from '../../../../components/placement/EligibleDrivesList';
import { ApplicationStatusTracker } from '../../../../components/placement/ApplicationStatusTracker';

export default function StudentPlacementPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Career & Placements</h1>
        <p className="text-gray-500 mt-1">Apply for drives, track status, and prepare for interviews.</p>
      </div>

      <PlacementNav role="student" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EligibleDrivesList />
        <ApplicationStatusTracker />
      </div>
    </div>
  );
}
