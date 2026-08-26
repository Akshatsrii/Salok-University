import { PlacementNav } from '../../../../../components/placement/PlacementNav';
import { Briefcase, Building, Users, CheckCircle } from 'lucide-react';

export default function AdminPlacementDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Placement Cell Admin</h1>
        <p className="text-gray-500 mt-1">Manage drives, companies, and student placements.</p>
      </div>

      <PlacementNav role="admin" />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600"><Building className="w-5 h-5" /></div>
            <h3 className="text-gray-500 font-medium">Companies Visiting</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">42</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Briefcase className="w-5 h-5" /></div>
            <h3 className="text-gray-500 font-medium">Active Drives</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">8</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Users className="w-5 h-5" /></div>
            <h3 className="text-gray-500 font-medium">Total Applicants</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">850</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg text-green-600"><CheckCircle className="w-5 h-5" /></div>
            <h3 className="text-gray-500 font-medium">Placed Students</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">124</p>
        </div>
      </div>
    </div>
  );
}
