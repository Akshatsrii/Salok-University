
import { Award } from 'lucide-react';

export const MeritListTable = () => {
  const meritList = [
    { rank: 1, name: 'Rahul Sharma', score: 98.5, category: 'General', status: 'Allocated' },
    { rank: 2, name: 'Neha Gupta', score: 97.2, category: 'OBC', status: 'Pending' },
    { rank: 3, name: 'Amit Kumar', score: 96.8, category: 'SC', status: 'Pending' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Award className="text-yellow-500 w-5 h-5" />
          Merit List - B.Tech CSE (Phase 1)
        </h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700">
          Publish List
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100">
              <th className="p-4 font-medium">Rank</th>
              <th className="p-4 font-medium">Applicant Name</th>
              <th className="p-4 font-medium">Composite Score</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Allocation Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {meritList.map((student) => (
              <tr key={student.rank} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-900">#{student.rank}</td>
                <td className="p-4 text-gray-800">{student.name}</td>
                <td className="p-4 font-semibold text-blue-600">{student.score}</td>
                <td className="p-4 text-gray-600">{student.category}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    student.status === 'Allocated' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
