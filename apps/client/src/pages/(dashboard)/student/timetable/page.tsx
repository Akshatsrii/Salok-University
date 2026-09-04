import { WeeklyTimetableGrid } from '../../../../components/timetable/WeeklyTimetableGrid';
import { GoogleCalendarSyncButton } from '../../../../components/timetable/GoogleCalendarSyncButton';
import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

export default function StudentTimetablePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 bg-gray-50 min-h-screen">
      <Link to="/student" className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 w-fit">
        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
      </Link>
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-2">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Weekly Timetable</h1>
          <p className="text-gray-500 mt-1">B.Tech Computer Science - Semester 6</p>
        </div>
        <GoogleCalendarSyncButton />
      </div>

      <WeeklyTimetableGrid isTeacher={false} />
    </div>
  );
}

