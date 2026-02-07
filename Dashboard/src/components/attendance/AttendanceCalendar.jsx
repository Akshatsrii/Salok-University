import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AttendanceCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Mock attendance data
  const attendanceData = {
    1: "present", 2: "present", 3: "absent", 4: "present", 5: "present",
    8: "present", 9: "present", 10: "absent", 11: "present", 12: "present",
    15: "present", 16: "present", 17: "present", 18: "absent", 19: "present",
    22: "present", 23: "present", 24: "present", 25: "present", 26: "absent",
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getDayStatus = (day) => {
    return attendanceData[day] || "none";
  };

  const getStatusColor = (status) => {
    if (status === "present") return "bg-green-500 text-white";
    if (status === "absent") return "bg-red-500 text-white";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-gray-700">Present</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-gray-700">Absent</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-100 rounded"></div>
          <span className="text-gray-700">No Class</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-600 text-sm py-2"
          >
            {day}
          </div>
        ))}

        {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
          <div key={`empty-${idx}`} className="aspect-square"></div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, idx) => {
          const day = idx + 1;
          const status = getDayStatus(day);
          
          return (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center rounded-lg font-medium text-sm cursor-pointer transition-transform hover:scale-105 ${getStatusColor(
                status
              )}`}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Monthly Summary */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-800 mb-3">Monthly Summary</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-green-50 rounded-lg p-3">
            <p className="text-2xl font-bold text-green-600">17</p>
            <p className="text-xs text-gray-600 mt-1">Present</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3">
            <p className="text-2xl font-bold text-red-600">5</p>
            <p className="text-xs text-gray-600 mt-1">Absent</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-2xl font-bold text-blue-600">77.3%</p>
            <p className="text-xs text-gray-600 mt-1">Attendance</p>
          </div>
        </div>
      </div>
    </div>
  );
}