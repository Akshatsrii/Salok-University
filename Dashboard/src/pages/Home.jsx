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
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-6 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              Welcome back, {studentData?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="text-blue-100">
              Here's what's happening with your academics today
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Bell className="w-5 h-5" />
            <span className="font-semibold">{studentData?.notifications} New Updates</span>
          </div>
        </div>
      </div>

      {/* Announcements Ticker */}
      <AnnouncementsTicker />

      {/* Main Banner */}
      <Banner />

      {/* Quick Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-500">
          <p className="text-sm text-gray-600 mb-1">Attendance</p>
          <p className="text-2xl font-bold text-gray-800">{studentData?.attendance}%</p>
          <p className="text-xs text-green-600 mt-1">Above minimum required</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
          <p className="text-sm text-gray-600 mb-1">Upcoming Exams</p>
          <p className="text-2xl font-bold text-gray-800">{studentData?.upcomingExams}</p>
          <p className="text-xs text-blue-600 mt-1">In next 30 days</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
          <p className="text-sm text-gray-600 mb-1">Pending Fees</p>
          <p className="text-2xl font-bold text-gray-800">₹{studentData?.pendingFees}</p>
          <p className="text-xs text-green-600 mt-1">All clear!</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
          <p className="text-sm text-gray-600 mb-1">Current Semester</p>
          <p className="text-2xl font-bold text-gray-800">6th</p>
          <p className="text-xs text-gray-600 mt-1">B.Tech CSE</p>
        </div>
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Main Cards */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Access</h2>
        <HomeCards />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="lg:col-span-1">
          <UpcomingEvents />
        </div>
      </div>

      {/* Important Links */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-gray-800 mb-4">Important Links</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <a href="#" className="text-sm text-primary hover:underline">Academic Calendar</a>
          <a href="#" className="text-sm text-primary hover:underline">Syllabus</a>
          <a href="#" className="text-sm text-primary hover:underline">E-Library</a>
          <a href="#" className="text-sm text-primary hover:underline">Placement Portal</a>
          <a href="#" className="text-sm text-primary hover:underline">Student Handbook</a>
          <a href="#" className="text-sm text-primary hover:underline">Faculty Directory</a>
          <a href="#" className="text-sm text-primary hover:underline">Grievance Portal</a>
          <a href="#" className="text-sm text-primary hover:underline">Contact Support</a>
        </div>
      </div>
    </div>
  );
}