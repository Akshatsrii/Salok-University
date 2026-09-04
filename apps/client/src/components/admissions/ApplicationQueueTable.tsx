
import { Eye, CheckCircle, XCircle } from 'lucide-react';
import { Link } from "react-router-dom";

export const ApplicationQueueTable = () => {
  const applications = [
    { id: 'APP-2026-001', name: 'Rahul Sharma', course: 'B.Tech CSE', aiScore: 92, status: 'Under Review', date: '2026-08-01' },
    { id: 'APP-2026-002', name: 'Priya Patel', course: 'BBA Data Analytics', aiScore: 85, status: 'Submitted', date: '2026-08-02' },
    { id: 'APP-2026-003', name: 'Amit Kumar', course: 'B.Sc Biotechnology', aiScore: 45, status: 'Rejected', date: '2026-08-02' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900">Application Queue</h3>
        <input type="text" placeholder="Search ID or Name..." className="px-3 py-1.5 border border-gray-300 rounded-md text-sm" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100">
              <th className="p-4 font-medium">App ID</th>
              <th className="p-4 font-medium">Applicant Name</th>
              <th className="p-4 font-medium">Course</th>
              <th className="p-4 font-medium">AI Verify Score</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {applications.map((app) => (
              <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-blue-600">{app.id}</td>
                <td className="p-4 text-gray-800">{app.name}</td>
                <td className="p-4 text-gray-600">{app.course}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 max-w-[60px]">
                      <div className={`h-2 rounded-full ${app.aiScore > 80 ? 'bg-green-500' : app.aiScore > 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${app.aiScore}%` }}></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{app.aiScore}%</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    app.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' : 
                    app.status === 'Submitted' ? 'bg-blue-100 text-blue-800' : 
                    app.status === 'Rejected' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {app.status}
                  </span>
                </td>
                <td className="p-4 text-gray-500">{app.date}</td>
                <td className="p-4 flex justify-center gap-3">
                  <Link href={`/admin/admissions/${app.id}`} className="text-blue-600 hover:text-blue-800" title="Review">
                    <Eye className="w-5 h-5" />
                  </Link>
                  <button className="text-green-600 hover:text-green-800" title="Approve">
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-800" title="Reject">
                    <XCircle className="w-5 h-5" />
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
