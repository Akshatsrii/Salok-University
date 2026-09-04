import { DepartmentAttendanceOverview } from '../../../../components/attendance/DepartmentAttendanceOverview';
import { DefaulterList } from '../../../../components/attendance/DefaulterList';

export default function AdminAttendancePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">University Attendance Overview</h1>
          <p className="text-gray-500 mt-1">Monitor campus-wide attendance metrics and manage defaulters.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50">
            Export Reports
          </button>
        </div>
      </div>

      <DepartmentAttendanceOverview />
      
      <DefaulterList />
    </div>
  );
}
