
import { useState } from 'react';
import { UploadCloud, Clock, CheckCircle } from 'lucide-react';

export const SubmissionUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success'>('idle');

  const handleUpload = () => {
    setStatus('uploading');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-blue-50 border-b border-blue-100 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-blue-800 font-semibold">
          <Clock className="w-5 h-5" /> Due in: 14 hours 30 mins
        </div>
        <span className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">15 Aug 2026, 11:59 PM</span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Submission</h3>

        {status === 'idle' && (
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
            <UploadCloud className="w-12 h-12 text-blue-500 mb-3" />
            <p className="text-gray-700 font-medium mb-1">Drag and drop your file here</p>
            <p className="text-gray-500 text-sm mb-4">Supported formats: PDF, DOCX, ZIP (Max 50MB)</p>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Browse Files
            </button>
          </div>
        )}

        {status === 'uploading' && (
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-700 font-medium">Uploading & running AI pre-checks...</p>
            <div className="w-64 bg-gray-200 rounded-full h-2 mt-4 overflow-hidden">
              <div className="bg-blue-600 h-2 rounded-full animate-pulse w-3/4"></div>
            </div>
          </div>
        )}

        {status === 'success' && (
          <div className="border border-green-200 rounded-xl p-8 flex flex-col items-center justify-center bg-green-50 text-green-700">
            <CheckCircle className="w-12 h-12 mb-3" />
            <h4 className="text-lg font-bold">Successfully Submitted!</h4>
            <p className="text-sm text-green-600 mt-1">Your assignment has been recorded.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 px-4 py-2 bg-white border border-green-200 rounded-md text-sm font-medium hover:bg-green-100 transition-colors"
            >
              Re-upload File
            </button>
          </div>
        )}

        {status === 'idle' && (
          <div className="mt-6 flex justify-end">
            <button 
              onClick={handleUpload}
              className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Submit Assignment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
