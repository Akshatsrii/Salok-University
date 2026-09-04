import { ApplicationQueueTable } from '../../../../components/admissions/ApplicationQueueTable';
import { SeatAllocationBoard } from '../../../../components/admissions/SeatAllocationBoard';

export default function AdmissionsDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admissions Overview</h1>
          <p className="text-gray-500 mt-1">Manage applications, verify documents, and track seat allocations.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-md shadow-sm text-sm font-medium hover:bg-gray-50 text-gray-700">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ApplicationQueueTable />
        </div>
        
        <div className="space-y-8">
          <SeatAllocationBoard />
        </div>
      </div>
    </div>
  );
}
