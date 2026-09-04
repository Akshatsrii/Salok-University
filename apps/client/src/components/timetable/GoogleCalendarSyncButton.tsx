
import { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

export const GoogleCalendarSyncButton = () => {
  const [status, setStatus] = useState<'idle' | 'syncing' | 'synced'>('idle');

  const handleSync = () => {
    setStatus('syncing');
    // Simulate OAuth and sync delay
    setTimeout(() => {
      setStatus('synced');
    }, 2000);
  };

  return (
    <button
      onClick={handleSync}
      disabled={status !== 'idle'}
      className={`px-4 py-2 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors border ${
        status === 'idle' 
          ? 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50' 
          : status === 'syncing' 
            ? 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed'
            : 'bg-green-50 text-green-700 border-green-200 cursor-default'
      }`}
    >
      {status === 'idle' && (
        <>
          <Calendar className="w-4 h-4 text-blue-600" /> Sync to Google Calendar
        </>
      )}
      {status === 'syncing' && (
        <>
          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div> Syncing...
        </>
      )}
      {status === 'synced' && (
        <>
          <CheckCircle className="w-4 h-4" /> Synced Successfully
        </>
      )}
    </button>
  );
};
