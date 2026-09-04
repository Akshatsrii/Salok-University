
import { useState } from 'react';
import { Camera, QrCode, CheckCircle, AlertCircle } from 'lucide-react';

export const AttendanceCaptureUI = () => {
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'error'>('idle');
  const [method, setMethod] = useState<'QR' | 'Face'>('QR');

  const simulateCapture = () => {
    setStatus('scanning');
    setTimeout(() => {
      // 90% chance of success for demo purposes
      if (Math.random() > 0.1) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-md mx-auto text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Mark Attendance</h3>
      <p className="text-gray-500 text-sm mb-6">Course: Data Structures (CS304)</p>

      <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
        <button
          onClick={() => { setMethod('QR'); setStatus('idle'); }}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${method === 'QR' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
        >
          Scan QR Code
        </button>
        <button
          onClick={() => { setMethod('Face'); setStatus('idle'); }}
          className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${method === 'Face' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'}`}
        >
          Face ID
        </button>
      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center mb-6 relative overflow-hidden bg-gray-50">
        {status === 'idle' && (
          <button onClick={simulateCapture} className="flex flex-col items-center hover:scale-105 transition-transform">
            {method === 'QR' ? <QrCode className="w-16 h-16 text-blue-600 mb-3" /> : <Camera className="w-16 h-16 text-blue-600 mb-3" />}
            <span className="text-blue-600 font-semibold">Tap to {method === 'QR' ? 'Scan QR' : 'Capture Face'}</span>
          </button>
        )}

        {status === 'scanning' && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-3"></div>
            <span className="text-gray-600 font-medium">Authenticating...</span>
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 animate-pulse" style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}></div>
          </div>
        )}

        {status === 'success' && (
          <div className="flex flex-col items-center text-green-600">
            <CheckCircle className="w-16 h-16 mb-3" />
            <span className="font-semibold text-lg">Attendance Marked!</span>
            <span className="text-sm text-green-700 mt-1">Recorded at {new Date().toLocaleTimeString()}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center text-red-600">
            <AlertCircle className="w-16 h-16 mb-3" />
            <span className="font-semibold text-lg">Verification Failed</span>
            <span className="text-sm text-red-700 mt-1">Please try again or contact instructor.</span>
          </div>
        )}
      </div>

      {status !== 'idle' && status !== 'scanning' && (
        <button onClick={() => setStatus('idle')} className="text-blue-600 font-medium hover:underline text-sm">
          Try Again
        </button>
      )}
    </div>
  );
};
