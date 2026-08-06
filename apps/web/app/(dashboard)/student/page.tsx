import { AttendanceWidget } from '../../../components/student/dashboard/AttendanceWidget';
import { CGPAWidget } from '../../../components/student/dashboard/CGPAWidget';
import { FeeDueWidget } from '../../../components/student/dashboard/FeeDueWidget';
import { TodayTimetableWidget } from '../../../components/student/dashboard/TodayTimetableWidget';
import { AssignmentsDueWidget } from '../../../components/student/dashboard/AssignmentsDueWidget';
import { NoticeFeed } from '../../../components/student/dashboard/NoticeFeed';
import Link from 'next/link';
import { User, BookOpen, Calendar, IndianRupee, Library, Building, Briefcase, Bot } from 'lucide-react';

export default function StudentDashboardPage() {
  const navItems = [
    { label: 'Dashboard', icon: <BookOpen className="w-4 h-4" />, href: '/student' },
    { label: 'Attendance', icon: <Calendar className="w-4 h-4" />, href: '/student/attendance' },
    { label: 'Timetable', icon: <Calendar className="w-4 h-4" />, href: '/student/timetable' },
    { label: 'Assignments', icon: <BookOpen className="w-4 h-4" />, href: '/student/assignments' },
    { label: 'Exams & Results', icon: <BookOpen className="w-4 h-4" />, href: '/student/exams' },
    { label: 'Fees', icon: <IndianRupee className="w-4 h-4" />, href: '/student/fees' },
    { label: 'Library', icon: <Library className="w-4 h-4" />, href: '/student/library' },
    { label: 'Hostel', icon: <Building className="w-4 h-4" />, href: '/student/hostel' },
    { label: 'Placement', icon: <Briefcase className="w-4 h-4" />, href: '/student/placement' },
    { label: 'AI Assistant', icon: <Bot className="w-4 h-4" />, href: '/student/ai' },
    { label: 'Profile', icon: <User className="w-4 h-4" />, href: '/student/profile' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar specific to Student Portal */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto py-3 no-scrollbar">
            {navItems.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.href}
                className={`flex items-center gap-2 whitespace-nowrap text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  item.label === 'Dashboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto space-y-6">
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TodayTimetableWidget />
          <AssignmentsDueWidget />
          <NoticeFeed />
        </div>
      </div>
    </div>
  );
}
