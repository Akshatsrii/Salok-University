import { CounsellingScheduler } from '../../../../../components/admissions/CounsellingScheduler';

export default function CounsellingPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Counselling Sessions</h1>
        <p className="text-gray-500 mt-1">Schedule and manage online/offline counselling sessions.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CounsellingScheduler />
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Availability Calendar</h3>
          <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg border border-gray-100 text-gray-400">
            [Calendar Widget Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
