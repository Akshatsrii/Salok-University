import { RoomInfoCard } from '../../../../components/hostel/RoomInfoCard';
import { MessMenu } from '../../../../components/hostel/MessMenu';
import { ComplaintForm } from '../../../../components/hostel/ComplaintForm';
import { GatePassRequest } from '../../../../components/hostel/GatePassRequest';

export default function StudentHostelPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Hostel & Mess</h1>
        <p className="text-gray-500 mt-1">View your room details, today's menu, and apply for gate passes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <RoomInfoCard />
          <MessMenu />
        </div>
        <div className="space-y-6">
          <GatePassRequest />
          <ComplaintForm />
        </div>
      </div>
    </div>
  );
}
