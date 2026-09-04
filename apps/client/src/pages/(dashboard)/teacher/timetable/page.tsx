import { WeeklyTimetableGrid } from '../../../../components/timetable/WeeklyTimetableGrid';
import { ConflictDetectorPanel } from '../../../../components/timetable/ConflictDetectorPanel';
import { GoogleCalendarSyncButton } from '../../../../components/timetable/GoogleCalendarSyncButton';
import { Settings, Download } from 'lucide-react';

export default function TeacherTimetablePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Schedule</h1>
          <p className="text-gray-500 mt-1">Manage your weekly classes and lab sessions.</p>
        </div>
        <div className="flex gap-3">
          <GoogleCalendarSyncButton />
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 flex items-center gap-2">
            <Settings className="w-4 h-4" /> AI Optimizer Settings
          </button>
        </div>
      </div>

      <ConflictDetectorPanel />

      <div className="mt-8">
        <WeeklyTimetableGrid isTeacher={true} />
      </div>
    </div>
  );
}
