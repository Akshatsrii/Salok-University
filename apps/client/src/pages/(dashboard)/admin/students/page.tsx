import { StudentDirectoryTable } from '../../../../components/students-admin/StudentDirectoryTable';
import { Link } from "react-router-dom";

export default function StudentsDirectoryPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Directory</h1>
          <p className="text-gray-500 mt-1">Manage and view all enrolled students.</p>
        </div>
        <div className="flex gap-4">
          <Link to="/admin/students/bulk-import" className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50">
            Bulk Import
          </Link>
          <Link to="/admin/students/add" className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700">
            + Add Student
          </Link>
        </div>
      </div>

      {/* Sub-navbar / Tabs */}
      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        <Link to="/admin/students" className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium text-sm">All Students</Link>
        <Link to="/admin/students/reports" className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Reports</Link>
      </div>

      <StudentDirectoryTable />
    </div>
  );
}

