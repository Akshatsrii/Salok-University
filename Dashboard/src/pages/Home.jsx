import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import Banner from "../components/common/Banner";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";
import UpcomingEvents from "./UpcomingEvents";
import AnnouncementsTicker from "./AnnouncementsTicker";
import HomeCards from "../components/home/HomeCards";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));

        setStudentData({
          name: "Riya Bansal",
          attendance: 87.5,
          pendingFees: 0,
          upcomingExams: 2,
          notifications: 5
        });
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] bg-black text-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 bg-black text-white p-4 rounded-lg">

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Welcome back, {studentData?.name?.split(" ")[0]}! 👋
            </h1>
            <p className="text-orange-100">
              Here's what's happening with your academics today
            </p>
          </div>

          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Bell className="w-5 h-5" />
            <span className="font-semibold">
              {studentData?.notifications} New Updates
            </span>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <AnnouncementsTicker />

      {/* Banner */}
      <Banner />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="bg-gray-900 p-4 rounded-lg shadow border-l-4 border-green-500">
          <p className="text-sm text-gray-400 mb-1">Attendance</p>
          <p className="text-2xl font-bold">{studentData?.attendance}%</p>
          <p className="text-xs text-green-400 mt-1">Above minimum required</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow border-l-4 border-orange-500">
          <p className="text-sm text-gray-400 mb-1">Upcoming Exams</p>
          <p className="text-2xl font-bold">{studentData?.upcomingExams}</p>
          <p className="text-xs text-orange-400 mt-1">In next 30 days</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow border-l-4 border-purple-500">
          <p className="text-sm text-gray-400 mb-1">Pending Fees</p>
          <p className="text-2xl font-bold">₹{studentData?.pendingFees}</p>
          <p className="text-xs text-green-400 mt-1">All clear!</p>
        </div>

        <div className="bg-gray-900 p-4 rounded-lg shadow border-l-4 border-orange-500">
          <p className="text-sm text-gray-400 mb-1">Current Semester</p>
          <p className="text-2xl font-bold">6th</p>
          <p className="text-xs text-gray-400 mt-1">B.Tech CSE</p>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Quick Access Cards */}
      <div>
        <h2 className="text-xl font-semibold text-orange-400 mb-4">
          Quick Access
        </h2>
        <HomeCards />
      </div>

      {/* Activity + Events */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-900 rounded-lg p-4">
          <RecentActivity />
        </div>
        <div className="lg:col-span-1 bg-gray-900 rounded-lg p-4">
          <UpcomingEvents />
        </div>
      </div>

      {/* Important Links */}
      <div className="bg-gray-900 rounded-lg shadow p-6">
        <h3 className="font-semibold text-orange-400 mb-4">
          Important Links
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "Academic Calendar",
            "Syllabus",
            "E-Library",
            "Placement Portal",
            "Student Handbook",
            "Faculty Directory",
            "Grievance Portal",
            "Contact Support"
          ].map((link, i) => (
            <a
              key={i}
              href="#"
              className="text-sm text-orange-400 hover:text-orange-300 hover:underline transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
