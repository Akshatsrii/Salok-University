import { AlertTriangle, Info } from 'lucide-react';

export const ConflictDetectorPanel = () => {
  const conflicts = [
    { type: 'RoomDoubleBooked', message: 'Room 304 is double-booked on Monday 09:00 - 10:00.', severity: 'high' },
    { type: 'TeacherDoubleBooked', message: 'Dr. P. Patel is scheduled for two classes simultaneously on Thursday 10:00 - 11:00.', severity: 'high' }
  ];

  if (conflicts.length === 0) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
        <Info className="w-5 h-5 text-green-600" />
        <span className="text-green-800 font-medium">AI Optimizer found 0 conflicts in the current timetable.</span>
      </div>
    );
  }

  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-red-900 font-bold flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5" /> Schedule Conflicts Detected
      </h3>
      <div className="space-y-3">
        {conflicts.map((conflict, idx) => (
          <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-red-100 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{conflict.type}</p>
              <p className="text-xs text-gray-600 mt-1">{conflict.message}</p>
            </div>
            <button className="ml-auto text-xs font-semibold text-red-600 hover:text-red-800">Resolve</button>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors">
        Run Auto-Resolver
      </button>
    </div>
  );
};
