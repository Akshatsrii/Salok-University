import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, Calendar, Clock, CreditCard, 
  FileText, Bus, Building, Bell,
  Award, TrendingUp, AlertTriangle
} from "lucide-react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const studentInfo = {
    name: "Akshat Srivastava",
    rollNo: "2026/CS/042",
    course: "B.Tech Computer Science",
    semester: "6th Semester",
    cgpa: "8.75",
    attendance: "85%"
  };

  const upcomingClasses = [
    { time: "09:00 AM", subject: "Cloud Computing", room: "LT-4" },
    { time: "11:30 AM", subject: "Artificial Intelligence", room: "LT-2" },
    { time: "02:00 PM", subject: "Software Engineering Lab", room: "Lab-3" }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 animate-reveal">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, {studentInfo.name}! 👋</h1>
            <p className="text-white/80">Here's your academic summary for the current semester.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md text-center">
              <p className="text-xs text-white/70 font-bold uppercase">CGPA</p>
              <p className="text-xl font-black">{studentInfo.cgpa}</p>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md text-center">
              <p className="text-xs text-white/70 font-bold uppercase">Attendance</p>
              <p className="text-xl font-black">{studentInfo.attendance}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {[
          { icon: BookOpen, label: "Library", path: "/student/library", color: "bg-blue-100 text-blue-600" },
          { icon: Calendar, label: "Timetable", path: "/student/timetable", color: "bg-purple-100 text-purple-600" },
          { icon: CreditCard, label: "Fees", path: "/student/fees", color: "bg-green-100 text-green-600" },
          { icon: Building, label: "Hostel", path: "/student/hostel", color: "bg-orange-100 text-orange-600" },
          { icon: Bus, label: "Transport", path: "/student/transport", color: "bg-yellow-100 text-yellow-600" },
          { icon: FileText, label: "Assignments", path: "/student/assignments", color: "bg-rose-100 text-rose-600" },
          { icon: Award, label: "Placement", path: "/student/placement", color: "bg-indigo-100 text-indigo-600" },
          { icon: Bell, label: "Notices", path: "/student/notifications", color: "bg-teal-100 text-teal-600" },
        ].map((item, idx) => (
          <Link key={idx} to={item.path} className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
            <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-3`}>
              <item.icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-gray-700 text-center">{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Main Grid area */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Left Col - Today's Schedule */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" /> Today's Schedule
            </h3>
            <Link to="/student/timetable" className="text-xs font-bold text-primary hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {upcomingClasses.map((cls, idx) => (
              <div key={idx} className="flex gap-4 relative">
                {idx !== upcomingClasses.length - 1 && (
                  <div className="absolute left-2.5 top-8 bottom-[-16px] w-0.5 bg-gray-100"></div>
                )}
                <div className="w-5 h-5 rounded-full bg-primary/10 border-2 border-primary flex-shrink-0 mt-0.5 z-10"></div>
                <div className="bg-gray-50 rounded-xl p-3 flex-1 border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 mb-1">{cls.time}</p>
                  <p className="font-bold text-gray-800 text-sm">{cls.subject}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <Building className="w-3 h-3" /> {cls.room}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle/Right Col - Important Alerts & Progress */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
             <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" /> Pending Actions
            </h3>
            <div className="space-y-3">
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold text-amber-900 text-sm">Semester Fee Due</p>
                  <p className="text-xs text-amber-700">Last date: 15th October 2026</p>
                </div>
                <Link to="/student/fees" className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                  Pay Now
                </Link>
              </div>
              <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold text-rose-900 text-sm">Software Engineering Assignment</p>
                  <p className="text-xs text-rose-700">Due in 2 days</p>
                </div>
                <Link to="/student/assignments" className="bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                  Submit
                </Link>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" /> Academic Progress
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-600">Total Credits Earned</span>
                    <span className="text-gray-900">112 / 160</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-600">Current Sem Attendance</span>
                    <span className="text-gray-900">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" /> Recent Results
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                  <div>
                    <p className="font-bold text-sm text-gray-800">5th Semester (Regular)</p>
                    <p className="text-xs text-gray-500">Declared on 12 Aug 2026</p>
                  </div>
                  <span className="font-black text-primary">8.8 SGPA</span>
                </div>
                <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                  <div>
                    <p className="font-bold text-sm text-gray-800">4th Semester (Regular)</p>
                    <p className="text-xs text-gray-500">Declared on 15 Jan 2026</p>
                  </div>
                  <span className="font-black text-gray-700">8.4 SGPA</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
