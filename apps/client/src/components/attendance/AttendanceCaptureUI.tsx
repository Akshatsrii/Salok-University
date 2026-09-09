import React from 'react';
import { Camera, QrCode, Scan } from 'lucide-react';

export function AttendanceCaptureUI() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 border-b border-gray-50">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <Scan className="w-5 h-5 text-indigo-500" />
          Smart Capture
        </h3>
      </div>
      <div className="p-5 space-y-4">
        <button className="w-full bg-gray-50 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 text-gray-700 p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all">
          <QrCode className="w-8 h-8 text-indigo-500" />
          <span className="font-bold">Generate Class QR Code</span>
          <span className="text-xs text-gray-500">Students scan to mark presence</span>
        </button>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-bold uppercase">Or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        <button className="w-full bg-gray-50 border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700 p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all">
          <Camera className="w-8 h-8 text-emerald-500" />
          <span className="font-bold">Biometric / Face Scan</span>
          <span className="text-xs text-gray-500">Capture via classroom camera</span>
        </button>
      </div>
    </div>
  );
}
