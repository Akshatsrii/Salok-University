"use client";

import { UploadCloud, FileType, CheckCircle } from 'lucide-react';

export const CSVUploader = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Bulk Import Students</h3>
      
      <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer">
        <UploadCloud className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h4 className="text-lg font-medium text-gray-900">Drag & Drop your CSV file here</h4>
        <p className="text-gray-500 text-sm mt-2">or click to browse from your computer</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700">
          Browse File
        </button>
      </div>
      
      <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-4">
        <FileType className="w-6 h-6 text-blue-600 mt-0.5" />
        <div>
          <h4 className="font-medium text-blue-900">Need a template?</h4>
          <p className="text-sm text-blue-800 mt-1">Download our standard CSV template to ensure your data is formatted correctly before importing.</p>
          <button className="mt-3 text-sm font-semibold text-blue-700 hover:text-blue-900 underline">
            Download Template
          </button>
        </div>
      </div>
    </div>
  );
};
