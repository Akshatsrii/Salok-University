import { ExternalLink, CheckCircle, AlertTriangle } from 'lucide-react';

export const SubmissionGradingTable = () => {
  const submissions = [
    { id: 'SUB-001', student: 'Rahul Sharma', file: 'os_lab1_rahul.pdf', submitted: '14 Aug 2026, 10:30 AM', aiMarks: 92, plagiarism: 4, status: 'Pending' },
    { id: 'SUB-002', student: 'Priya Patel', file: 'lab_report_priya.docx', submitted: '14 Aug 2026, 11:45 AM', aiMarks: 85, plagiarism: 12, status: 'Graded' },
    { id: 'SUB-003', student: 'Kabir Das', file: 'kabir_submission.pdf', submitted: '15 Aug 2026, 09:00 AM', aiMarks: 45, plagiarism: 82, status: 'Pending' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-medium text-gray-600">Student</th>
              <th className="p-4 font-medium text-gray-600">Submission</th>
              <th className="p-4 font-medium text-gray-600">AI Suggested Marks</th>
              <th className="p-4 font-medium text-gray-600">Plagiarism Score</th>
              <th className="p-4 font-medium text-gray-600">Status</th>
              <th className="p-4 font-medium text-gray-600 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {submissions.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">{sub.student}</td>
                <td className="p-4">
                  <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline font-medium">
                    {sub.file} <ExternalLink className="w-3 h-3" />
                  </a>
                  <div className="text-xs text-gray-500 mt-1">{sub.submitted}</div>
                </td>
                <td className="p-4">
                  <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-bold">{sub.aiMarks} / 100</span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-md font-bold flex items-center gap-1 w-fit ${
                    sub.plagiarism > 50 ? 'bg-red-100 text-red-700' : 
                    sub.plagiarism > 20 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {sub.plagiarism > 50 ? <AlertTriangle className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                    {sub.plagiarism}%
                  </span>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${sub.status === 'Graded' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {sub.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    {sub.status === 'Graded' ? 'Edit Grade' : 'Review & Grade'}
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
