import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface DocumentProps {
  name: string;
  status: 'Verified' | 'Pending' | 'Rejected';
  aiConfidence: number;
}

export const DocumentVerificationPanel = () => {
  const documents: DocumentProps[] = [
    { name: '10th Marksheet', status: 'Verified', aiConfidence: 98 },
    { name: '12th Marksheet', status: 'Verified', aiConfidence: 95 },
    { name: 'Aadhaar Card', status: 'Pending', aiConfidence: 65 },
    { name: 'Transfer Certificate', status: 'Rejected', aiConfidence: 20 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
        Document Verification <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">AI Assisted</span>
      </h3>
      <div className="space-y-4">
        {documents.map((doc, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center gap-3">
              {doc.status === 'Verified' ? <CheckCircle className="w-5 h-5 text-green-500" /> : 
               doc.status === 'Pending' ? <AlertTriangle className="w-5 h-5 text-yellow-500" /> : 
               <XCircle className="w-5 h-5 text-red-500" />}
              <span className="font-medium text-gray-800">{doc.name}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-sm">
                <span className="text-gray-500">AI Confidence: </span>
                <span className={`font-semibold ${doc.aiConfidence > 80 ? 'text-green-600' : doc.aiConfidence > 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {doc.aiConfidence}%
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded hover:bg-green-200 transition-colors">Approve</button>
                <button className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors">Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
