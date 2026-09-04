import { DocumentVerificationPanel } from './DocumentVerificationPanel';

export const ApplicationDetail = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Rahul Sharma</h2>
            <p className="text-gray-500">ID: APP-2026-001 | Applied: B.Tech CSE</p>
          </div>
          <span className="px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
            Under Review
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Personal Info</h3>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-3"><span className="text-gray-500">DOB:</span><span className="col-span-2 font-medium">15 Aug 2008</span></div>
              <div className="grid grid-cols-3"><span className="text-gray-500">Gender:</span><span className="col-span-2 font-medium">Male</span></div>
              <div className="grid grid-cols-3"><span className="text-gray-500">Email:</span><span className="col-span-2 font-medium">rahul.s@example.com</span></div>
              <div className="grid grid-cols-3"><span className="text-gray-500">Phone:</span><span className="col-span-2 font-medium">+91 9876543210</span></div>
              <div className="grid grid-cols-3"><span className="text-gray-500">Aadhaar:</span><span className="col-span-2 font-medium">XXXX-XXXX-1234</span></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Academic Info</h3>
            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-3"><span className="text-gray-500">10th Score:</span><span className="col-span-2 font-medium">92%</span></div>
              <div className="grid grid-cols-3"><span className="text-gray-500">12th Score:</span><span className="col-span-2 font-medium">95% (PCM)</span></div>
              <div className="grid grid-cols-3"><span className="text-gray-500">Board:</span><span className="col-span-2 font-medium">CBSE</span></div>
            </div>
          </div>
        </div>
      </div>
      
      <DocumentVerificationPanel />
    </div>
  );
};
