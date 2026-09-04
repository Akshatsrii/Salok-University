import { AlertTriangle, Mail } from 'lucide-react';

export const DefaulterList = () => {
  const defaulters = [
    { id: 'STU-089', name: 'Kabir Das', percentage: 68, department: 'Mechanical', proxySuspected: false },
    { id: 'STU-102', name: 'Ananya Verma', percentage: 92, department: 'Computer Science', proxySuspected: true },
    { id: 'STU-145', name: 'Ravi Teja', percentage: 71, department: 'Business Admin', proxySuspected: false },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-red-50">
        <div>
          <h3 className="text-lg font-bold text-red-900 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> Defaulters & AI Flags
          </h3>
          <p className="text-sm text-red-700 mt-1">Students below 75% attendance or flagged for proxy marking.</p>
        </div>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md text-sm font-semibold hover:bg-red-700 transition-colors">
          Send Warning Emails
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Student ID</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Name</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Department</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">Current %</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200">AI Flags</th>
              <th className="p-4 font-medium text-gray-600 border-b border-gray-200 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {defaulters.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">{student.id}</td>
                <td className="p-4 text-gray-700">{student.name}</td>
                <td className="p-4 text-gray-700">{student.department}</td>
                <td className="p-4">
                  <span className={`font-semibold ${student.percentage < 75 ? 'text-red-600' : 'text-gray-900'}`}>
                    {student.percentage}%
                  </span>
                </td>
                <td className="p-4">
                  {student.proxySuspected ? (
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-semibold">Proxy Suspected</span>
                  ) : (
                    <span className="text-gray-400 text-xs">None</span>
                  )}
                </td>
                <td className="p-4 flex justify-center">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors" title="Send Email">
                    <Mail className="w-4 h-4" />
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
