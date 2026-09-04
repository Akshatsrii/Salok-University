import { AssignmentList } from '../../../../components/assignments/AssignmentList';
import { Filter } from 'lucide-react';

export default function StudentAssignmentsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Assignments</h1>
          <p className="text-gray-500 mt-1">Track your upcoming due dates and previous submissions.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <nav className="flex gap-6">
          <button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-semibold text-sm">All Assignments</button>
          <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Pending</button>
          <button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Completed</button>
        </nav>
      </div>

      <AssignmentList />
    </div>
  );
}
