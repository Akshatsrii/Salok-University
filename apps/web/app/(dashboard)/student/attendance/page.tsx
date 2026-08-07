import { AttendanceCaptureUI } from '../../../../components/attendance/AttendanceCaptureUI';
import { MonthlyCalendarHeatmap } from '../../../../components/attendance/MonthlyCalendarHeatmap';
import { LowAttendanceAlert } from '../../../../components/attendance/LowAttendanceAlert';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function StudentAttendancePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <Link href="/student" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 mb-6 w-fit">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
        <p className="text-gray-500 mt-1">Mark your attendance and view your history.</p>
      </div>

      <LowAttendanceAlert courseName="Operating Systems" currentPercentage={72} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <AttendanceCaptureUI />
        </div>
        <div className="space-y-8">
          <MonthlyCalendarHeatmap />
          
          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-gray-500 mb-1">Total Classes</div>
              <div className="text-2xl font-bold text-gray-900">45</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Attended</div>
              <div className="text-2xl font-bold text-blue-600">38</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
