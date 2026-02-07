import { useState } from "react";
import AttendanceDetails from "../components/attendance/AttendanceDetails";
import AttendanceChart from "../components/attendance/AttendanceChart";
import AttendanceCalendar from "../components/attendance/AttendanceCalendar";
import AttendanceStats from "../components/attendance/AttendanceStats";
import SubjectWiseAttendance from "../components/attendance/SubjectWiseAttendance";
import { Download, Filter, Calendar as CalendarIcon } from "lucide-react";

export default function Attendance() {
  const [selectedView, setSelectedView] = useState("overview");
  const [selectedSemester, setSelectedSemester] = useState("current");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Attendance Tracker</h1>
            <p className="text-gray-600">Monitor your class attendance and stay on track</p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            >
              <option value="current">Current Semester</option>
              <option value="sem5">Semester 5</option>
              <option value="sem4">Semester 4</option>
              <option value="sem3">Semester 3</option>
            </select>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm font-medium">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <AttendanceStats />

      {/* View Selector */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1">
        <div className="flex gap-2">
          {[
            { value: "overview", label: "Overview", icon: "📊" },
            { value: "subject", label: "By Subject", icon: "📚" },
            { value: "calendar", label: "Calendar", icon: "📅" },
            { value: "chart", label: "Analytics", icon: "📈" },
          ].map((view) => (
            <button
              key={view.value}
              onClick={() => setSelectedView(view.value)}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                selectedView === view.value
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="mr-2">{view.icon}</span>
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Based on Selected View */}
      <div>
        {selectedView === "overview" && <AttendanceDetails />}
        {selectedView === "subject" && <SubjectWiseAttendance />}
        {selectedView === "calendar" && <AttendanceCalendar />}
        {selectedView === "chart" && <AttendanceChart />}
      </div>

      {/* Attendance Guidelines */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
          <span className="text-xl">⚠️</span>
          Attendance Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-800">
          <div>
            <p className="font-medium mb-1">Minimum Required: 75%</p>
            <p className="text-xs">Maintain at least 75% attendance to be eligible for exams</p>
          </div>
          <div>
            <p className="font-medium mb-1">Medical Leave</p>
            <p className="text-xs">Submit medical certificates within 3 days for consideration</p>
          </div>
          <div>
            <p className="font-medium mb-1">Condonation</p>
            <p className="text-xs">65-75% attendance may be condoned with valid reasons</p>
          </div>
          <div>
            <p className="font-medium mb-1">Attendance Shortage</p>
            <p className="text-xs">Below 65% may result in loss of semester or exam eligibility</p>
          </div>
        </div>
      </div>
    </div>
  );
}