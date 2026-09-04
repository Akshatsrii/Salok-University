import { AlertTriangle, CheckCircle, Download } from 'lucide-react';
import { StudentResult } from '../../types/examination';

export const ResultProcessingTable = () => {
  const results: StudentResult[] = [
    { studentId: '2023CS045', name: 'Rahul Sharma', course: 'B.Tech CS - Sem 6', sgpa: 8.4, cgpa: 8.1, hasBacklog: false, status: 'Pass' },
    { studentId: '2023CS046', name: 'Priya Patel', course: 'B.Tech CS - Sem 6', sgpa: 9.2, cgpa: 9.0, hasBacklog: false, status: 'Pass' },
    { studentId: '2023CS047', name: 'Kabir Das', course: 'B.Tech CS - Sem 6', sgpa: 4.8, cgpa: 5.2, hasBacklog: true, status: 'Fail' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Result Processing & Declaration</h3>
          <p className="text-sm text-gray-500">Review computed SGPA/CGPA and flag backlogs before publishing.</p>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
          <CheckCircle className="w-4 h-4" /> Publish All Results
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-white border-b border-gray-200">
            <tr>
              <th className="p-4 font-semibold text-gray-600">Student</th>
              <th className="p-4 font-semibold text-gray-600">Course</th>
              <th className="p-4 font-semibold text-gray-600">SGPA</th>
              <th className="p-4 font-semibold text-gray-600">CGPA</th>
              <th className="p-4 font-semibold text-gray-600">Backlogs</th>
              <th className="p-4 font-semibold text-gray-600">Status</th>
              <th className="p-4 font-semibold text-gray-600 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {results.map((result) => (
              <tr key={result.studentId} className="hover:bg-gray-50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-gray-900">{result.name}</div>
                  <div className="text-xs text-gray-500">{result.studentId}</div>
                </td>
                <td className="p-4 text-gray-700">{result.course}</td>
                <td className="p-4 font-semibold text-gray-800">{result.sgpa.toFixed(2)}</td>
                <td className="p-4 font-semibold text-gray-800">{result.cgpa.toFixed(2)}</td>
                <td className="p-4">
                  {result.hasBacklog ? (
                    <span className="flex items-center gap-1 text-red-600 font-bold bg-red-50 px-2 py-1 rounded w-fit text-xs">
                      <AlertTriangle className="w-3 h-3" /> Yes
                    </span>
                  ) : (
                    <span className="text-gray-500">-</span>
                  )}
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    result.status === 'Pass' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {result.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center justify-end gap-1 ml-auto">
                    <Download className="w-4 h-4" /> Transcript
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
