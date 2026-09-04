import { AssignmentManagerTable } from '../../../../components/assignments/AssignmentManagerTable';
import { Plus } from 'lucide-react';
import { Link } from "react-router-dom";

export default function TeacherAssignmentsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-500 mt-1">Manage coursework, track submissions, and grade assignments.</p>
        </div>
        <Link 
          to="/teacher/assignments/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 flex items-center gap-2 transition-colors w-fit"
        >
          <Plus className="w-4 h-4" /> Create New Assignment
        </Link>
      </div>

      <AssignmentManagerTable />
    </div>
  );
}

