import { FileText, MoreVertical, Users } from 'lucide-react';
import Link from 'next/link';

export const AssignmentManagerTable = () => {
  const assignments = [
    { id: '1', title: 'OS CPU Scheduling Simulation', course: 'B.Tech CS - Sem 6', due: '15 Aug 2026', submitted: 42, total: 60, status: 'Active' },
    { id: '2', title: 'Data Structures Graph Assignment', course: 'B.Tech CS - Sem 6', due: '10 Aug 2026', submitted: 58, total: 60, status: 'Grading' },
    { id: '3', title: 'Database Normalization', course: 'B.Tech CS - Sem 5', due: '01 Aug 2026', submitted: 55, total: 55, status: 'Completed' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-medium text-gray-600">Assignment Title</th>
              <th className="p-4 font-medium text-gray-600">Course</th>
              <th className="p-4 font-medium text-gray-600">Due Date</th>
              <th className="p-4 font-medium text-gray-600">Submissions</th>
              <th className="p-4 font-medium text-gray-600">Status</th>
              <th className="p-4 font-medium text-gray-600 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {assignments.map((assignment) => (
              <tr key={assignment.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900 flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><FileText className="w-4 h-4" /></div>
                  {assignment.title}
                </td>
                <td className="p-4 text-gray-600">{assignment.course}</td>
                <td className="p-4 text-gray-600">{assignment.due}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span><span className="font-semibold text-gray-900">{assignment.submitted}</span> / {assignment.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}></div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    assignment.status === 'Active' ? 'bg-green-100 text-green-700' :
                    assignment.status === 'Grading' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {assignment.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Link href={`/teacher/assignments/${assignment.id}/submissions`} className="text-blue-600 font-medium hover:text-blue-800 mr-4 text-sm">
                    Grade
                  </Link>
                  <button className="text-gray-400 hover:text-gray-600"><MoreVertical className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
