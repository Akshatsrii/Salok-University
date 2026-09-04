import { AlertTriangle } from 'lucide-react';

export const LowAttendanceAlert = ({ courseName, currentPercentage }: { courseName: string, currentPercentage: number }) => {
  if (currentPercentage >= 75) return null;

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6 shadow-sm">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
        <div>
          <h4 className="font-semibold text-red-900">Low Attendance Warning</h4>
          <p className="text-sm text-red-700 mt-1">
            Your attendance in <span className="font-bold">{courseName}</span> is currently at {currentPercentage}%. 
            University policy requires a minimum of 75% to be eligible for end-semester examinations.
          </p>
        </div>
      </div>
    </div>
  );
};
