import { AttendanceMarkingGrid } from '../../../../components/attendance/AttendanceMarkingGrid';

export default function TeacherAttendancePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Class Attendance</h1>
        <p className="text-gray-500 mt-1">Review and manually update attendance records for your current class.</p>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-4 mb-6">
        <div>
          <h4 className="font-semibold text-blue-900">QR / Face Scan Active</h4>
          <p className="text-sm text-blue-800 mt-1">Students are currently marking their attendance via their self-portal. The grid below will automatically update. Use the grid to make manual corrections.</p>
        </div>
      </div>

      <AttendanceMarkingGrid />
    </div>
  );
}
