import { ComplaintQueueGeneric } from '../../../../components/complaints/ComplaintQueueGeneric';

export default function AdminComplaintsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Complaints Resolution Center</h1>
          <p className="text-gray-500 mt-1">Review and resolve AI-categorized complaints across the university.</p>
        </div>
      </div>

      <ComplaintQueueGeneric />
    </div>
  );
}
