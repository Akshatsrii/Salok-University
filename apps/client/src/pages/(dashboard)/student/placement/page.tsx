import { KanbanBoard } from '../../../../components/placement/KanbanBoard';
import { Briefcase, TrendingUp } from 'lucide-react';

export default function StudentPlacementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-500 mt-1">Track your job applications and upcoming interviews.</p>
        </div>
        <button className="premium-button">
          Browse New Drives
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-blue-50 text-[#007bff] rounded-2xl"><Briefcase className="w-6 h-6" /></div>
          <div>
            <p className="text-sm font-semibold text-gray-500">Total Applied</p>
            <p className="text-2xl font-extrabold text-gray-900">12</p>
          </div>
        </div>
        <div className="bg-[#fffdf5] p-6 rounded-3xl border border-[#ffdb70]/50 shadow-sm flex items-center gap-4">
          <div className="p-4 bg-white text-[#ffb800] rounded-2xl shadow-sm"><TrendingUp className="w-6 h-6" /></div>
          <div>
            <p className="text-sm font-semibold text-gray-500">In Progress</p>
            <p className="text-2xl font-extrabold text-gray-900">3</p>
          </div>
        </div>
      </div>

      <KanbanBoard />
    </div>
  );
}
