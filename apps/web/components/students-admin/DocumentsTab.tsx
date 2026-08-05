import { FileText, Download } from 'lucide-react';

export const DocumentsTab = () => {
  const documents = [
    { name: 'Aadhaar Card', size: '1.2 MB', date: '10 Aug 2023', verified: true },
    { name: '10th Marksheet', size: '2.4 MB', date: '10 Aug 2023', verified: true },
    { name: '12th Marksheet', size: '2.1 MB', date: '10 Aug 2023', verified: true },
    { name: 'Transfer Certificate', size: '0.8 MB', date: '12 Aug 2023', verified: true },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Submitted Documents</h3>
        <button className="px-3 py-1.5 text-sm font-semibold bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
          Upload New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documents.map((doc, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white hover:shadow-sm transition-shadow">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{doc.name}</div>
                <div className="text-xs text-gray-500 mt-1">{doc.size} • Uploaded {doc.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {doc.verified && (
                <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded-full">Verified</span>
              )}
              <button className="text-gray-400 hover:text-blue-600 transition-colors" title="Download">
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
