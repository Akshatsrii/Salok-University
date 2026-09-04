import { FileSearch, CheckCircle2 } from 'lucide-react';

export const RevaluationQueue = () => {
  const requests = [
    { id: 'REV-001', student: 'Kabir Das (2023CS047)', subject: 'Compiler Design', oldMarks: 45, status: 'Pending' },
    { id: 'REV-002', student: 'Priya Patel (2023CS046)', subject: 'Machine Learning', oldMarks: 72, status: 'Processing' },
    { id: 'REV-003', student: 'Amit Kumar (2023CS012)', subject: 'Cloud Computing', oldMarks: 38, status: 'Processed' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-6">
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <h3 className="text-lg font-bold text-gray-900">Revaluation Requests</h3>
        <p className="text-sm text-gray-500 mt-1">Manage and assign answer script re-totaling requests.</p>
      </div>

      <div className="divide-y divide-gray-100">
        {requests.map((req) => (
          <div key={req.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg ${req.status === 'Processed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                {req.status === 'Processed' ? <CheckCircle2 className="w-5 h-5" /> : <FileSearch className="w-5 h-5" />}
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{req.student}</h4>
                <p className="text-sm text-gray-600 mt-1">Subject: {req.subject} | Old Marks: {req.oldMarks}</p>
                <div className="mt-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    req.status === 'Pending' ? 'bg-red-100 text-red-700' :
                    req.status === 'Processing' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                  }`}>
                    {req.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              {req.status !== 'Processed' && (
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                  Assign Faculty
                </button>
              )}
              {req.status === 'Processed' && (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                  Update Result
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
