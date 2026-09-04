import { HostelNav } from '../../../../../components/hostel/HostelNav';
import { RoomAllocationBoard } from '../../../../../components/hostel/RoomAllocationBoard';

export default function FacilityHostelRoomsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Hostel Management</h1>
        <p className="text-gray-500 mt-1">Manage rooms, mess, and facility requests.</p>
      </div>

      <HostelNav />
      <RoomAllocationBoard />
    </div>
  );
}
