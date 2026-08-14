import { PlacementNav } from '../../../../../../components/placement/PlacementNav';
import { BarChart3, TrendingUp, Award } from 'lucide-react';

export default function AdminPlacementReportsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Placement Cell Admin</h1>
        <p className="text-gray-500 mt-1">Manage drives, companies, and student placements.</p>
      </div>

      <PlacementNav role="admin" />
      
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-600" /> Placement Analytics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-100 rounded-lg p-6 bg-gray-50 flex flex-col items-center justify-center min-h-[300px] text-gray-400">
            <TrendingUp className="w-12 h-12 mb-3 opacity-30" />
            <p>Year-on-Year Placement Rate Chart (Stub)</p>
          </div>
          <div className="border border-gray-100 rounded-lg p-6 bg-gray-50 flex flex-col items-center justify-center min-h-[300px] text-gray-400">
            <Award className="w-12 h-12 mb-3 opacity-30" />
            <p>Average vs Highest Package Chart (Stub)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
