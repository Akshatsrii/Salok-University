
import { Eye, Edit, Trash2 } from 'lucide-react';
import { Link } from "react-router-dom";

export const StudentDirectoryTable = () => {
  const students = [
    { id: 'STU-2026-001', name: 'Rahul Sharma', course: 'B.Tech CSE', batch: '2026', status: 'Active' },
    { id: 'STU-2026-002', name: 'Priya Patel', course: 'BBA Data Analytics', batch: '2026', status: 'Active' },
    { id: 'STU-2025-142', name: 'Amit Kumar', course: 'B.Sc Biotechnology', batch: '2025', status: 'Inactive' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900">Student Directory</h3>
        <div className="flex gap-4">
          <input type="text" placeholder="Search by ID or Name..." className="px-3 py-1.5 border border-gray-300 rounded-md text-sm" />
          <select className="px-3 py-1.5 border border-gray-300 rounded-md text-sm bg-white">
            <option>All Courses</option>
            <option>B.Tech CSE</option>
            <option>BBA</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100">
              <th className="p-4 font-medium">Student ID</th>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Course</th>
              <th className="p-4 font-medium">Batch</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {students.map((student) => (
              <tr key={student.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-blue-600">{student.id}</td>
                <td className="p-4 text-gray-800">{student.name}</td>
                <td className="p-4 text-gray-600">{student.course}</td>
                <td className="p-4 text-gray-600">{student.batch}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-4 flex justify-center gap-3">
                  <Link to={`/admin/students/${student.id}`} className="text-blue-600 hover:text-blue-800" title="View Profile">
                    <Eye className="w-5 h-5" />
                  </Link>
                  <button className="text-gray-500 hover:text-gray-700" title="Edit">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-700" title="Delete">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

