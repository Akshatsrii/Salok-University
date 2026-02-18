import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("week");

  const stats = [
    {
      title: "Total Students",
      value: "1,200",
      change: "+12%",
      trend: "up",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500/20",
      description: "Active enrollments"
    },
    {
      title: "Pending Admissions",
      value: "35",
      change: "+5",
      trend: "up",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/20",
      description: "Awaiting review"
    },
    {
      title: "Faculty Members",
      value: "85",
      change: "+3",
      trend: "up",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/20",
      description: "Teaching staff"
    },
    {
      title: "Upcoming Exams",
      value: "12",
      change: "2 this week",
      trend: "neutral",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/20",
      description: "Scheduled assessments"
    }
  ];

  const recentActivities = [
    { id: 1, action: "New admission application", user: "Rahul Kumar", time: "5 min ago", type: "admission" },
    { id: 2, action: "Exam result published", user: "Prof. Sharma", time: "1 hour ago", type: "exam" },
    { id: 3, action: "Faculty onboarded", user: "Dr. Priya Singh", time: "2 hours ago", type: "faculty" },
    { id: 4, action: "Student registered", user: "Amit Patel", time: "3 hours ago", type: "student" },
    { id: 5, action: "Course updated", user: "Admin", time: "5 hours ago", type: "course" }
  ];

  const upcomingEvents = [
    { id: 1, title: "Mid-term Examinations", date: "Feb 15, 2026", type: "exam", color: "orange" },
    { id: 2, title: "Faculty Meeting", date: "Feb 12, 2026", type: "meeting", color: "blue" },
    { id: 3, title: "Admission Deadline", date: "Feb 20, 2026", type: "deadline", color: "red" },
    { id: 4, title: "Sports Day", date: "Feb 25, 2026", type: "event", color: "green" }
  ];

  const quickActions = [
    { title: "New Admission", icon: "M12 4v16m8-8H4", path: "/admission", color: "orange" },
    { title: "Add Faculty", icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z", path: "/faculty", color: "green" },
    { title: "Schedule Exam", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", path: "/exams", color: "blue" },
    { title: "View Reports", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", path: "/reports", color: "purple" }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-orange-950 overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Page Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Dashboard Overview
                </h1>
                <p className="text-gray-400">Welcome back! Here's what's happening today.</p>
              </div>
              
              {/* Time Range Selector */}
              <div className="flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-lg p-1">
                {["Today", "Week", "Month"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range.toLowerCase())}
                    className={`px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 ${
                      timeRange === range.toLowerCase()
                        ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <div className={`text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  
                  {stat.trend === "up" && (
                    <div className="flex items-center space-x-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                      <span>{stat.change}</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-gray-400 text-sm font-semibold mb-1">{stat.title}</h3>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 group text-left"
                >
                  <div className={`w-12 h-12 bg-${action.color}-500/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <svg className={`w-6 h-6 text-${action.color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors">{action.title}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activity & Upcoming Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Recent Activities</h2>
                <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm">{activity.action}</p>
                      <p className="text-gray-400 text-xs">{activity.user}</p>
                    </div>
                    <span className="text-xs text-gray-500 flex-shrink-0">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
                <button className="text-orange-400 hover:text-orange-300 text-sm font-semibold">
                  View Calendar
                </button>
              </div>
              
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors border-l-4 border-orange-500">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm mb-1">{event.title}</h3>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-${event.color}-500/20 text-${event.color}-400 capitalize`}>
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Chart Placeholder */}
          <div className="mt-6 bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-4">Performance Overview</h2>
            <div className="h-64 flex items-center justify-center bg-gray-800/50 rounded-lg">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="text-gray-500">Chart visualization coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}