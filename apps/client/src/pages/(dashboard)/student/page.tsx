import { AttendanceWidget } from '../../../components/student/dashboard/AttendanceWidget';
import { CGPAWidget } from '../../../components/student/dashboard/CGPAWidget';
import { FeeDueWidget } from '../../../components/student/dashboard/FeeDueWidget';
import { TodayTimetableWidget } from '../../../components/student/dashboard/TodayTimetableWidget';
import { AssignmentsDueWidget } from '../../../components/student/dashboard/AssignmentsDueWidget';
import { NoticeFeed } from '../../../components/student/dashboard/NoticeFeed';
import { MiniCalendarWidget } from '../../../components/student/dashboard/MiniCalendarWidget';
import { QuickActionsWidget } from '../../../components/student/dashboard/QuickActionsWidget';
import { LibraryMessWidget } from '../../../components/student/dashboard/LibraryMessWidget';
import { Link } from "react-router-dom";
import { User, BookOpen, Calendar, IndianRupee, Library, Building, Briefcase, Bot } from 'lucide-react';

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Rahul!</h1>
        <p className="text-gray-500 mt-1">Here is what's happening with your academics today.</p>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AttendanceWidget />
        <CGPAWidget />
        <FeeDueWidget />
      </div>

      {/* New Middle Section: Calendar & Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MiniCalendarWidget />
        <QuickActionsWidget />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TodayTimetableWidget />
        <LibraryMessWidget />
        <AssignmentsDueWidget />
      </div>

      {/* Notice Feed below */}
      <div className="w-full">
        <NoticeFeed />
      </div>
    </div>
  );
}
