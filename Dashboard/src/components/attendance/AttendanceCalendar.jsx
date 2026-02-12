import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  TrendingUp,
  TrendingDown,
  Award,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  Sparkles,
} from "lucide-react";

export default function AttendanceCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);

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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Enhanced attendance data with more details
  const attendanceData = {
    1: { status: "present", classes: 4, attended: 4 },
    2: { status: "present", classes: 5, attended: 5 },
    3: { status: "absent", classes: 4, attended: 2 },
    4: { status: "present", classes: 3, attended: 3 },
    5: { status: "present", classes: 4, attended: 4 },
    8: { status: "present", classes: 5, attended: 5 },
    9: { status: "present", classes: 4, attended: 4 },
    10: { status: "absent", classes: 3, attended: 1 },
    11: { status: "present", classes: 5, attended: 5 },
    12: { status: "present", classes: 4, attended: 4 },
    15: { status: "present", classes: 4, attended: 4 },
    16: { status: "present", classes: 5, attended: 5 },
    17: { status: "present", classes: 3, attended: 3 },
    18: { status: "absent", classes: 4, attended: 2 },
    19: { status: "present", classes: 5, attended: 5 },
    22: { status: "present", classes: 4, attended: 4 },
    23: { status: "present", classes: 5, attended: 5 },
    24: { status: "present", classes: 4, attended: 4 },
    25: { status: "present", classes: 3, attended: 3 },
    26: { status: "absent", classes: 5, attended: 2 },
  };

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
    setSelectedDay(null);
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
    setSelectedDay(null);
  };

  const goToToday = () => {
    setCurrentMonth(new Date());
    setSelectedDay(new Date().getDate());
  };

  const getDayStatus = (day) => {
    return attendanceData[day] || { status: "none", classes: 0, attended: 0 };
  };

  const getStatusColor = (status) => {
    if (status === "present")
      return "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30";
    if (status === "absent")
      return "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30";
    return "bg-[#1a1a1a] text-gray-400 hover:bg-[#222]";
  };

  const calculateStats = () => {
    const days = Object.values(attendanceData);
    const totalClasses = days.reduce((sum, d) => sum + d.classes, 0);
    const totalAttended = days.reduce((sum, d) => sum + d.attended, 0);
    const presentDays = days.filter((d) => d.status === "present").length;
    const absentDays = days.filter((d) => d.status === "absent").length;
    const percentage = totalClasses > 0 ? (totalAttended / totalClasses) * 100 : 0;

    return {
      totalClasses,
      totalAttended,
      presentDays,
      absentDays,
      percentage: percentage.toFixed(1),
    };
  };

  const stats = calculateStats();
  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const getStreakInfo = () => {
    const sortedDays = Object.keys(attendanceData)
      .map(Number)
      .sort((a, b) => a - b);
    let currentStreak = 0;

    for (let i = sortedDays.length - 1; i >= 0; i--) {
      if (attendanceData[sortedDays[i]].status === "present") {
        currentStreak++;
      } else {
        break;
      }
    }

    return currentStreak;
  };

  return (
    <div className="bg-[#111] rounded-2xl shadow-2xl border border-gray-800 p-6 text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent flex items-center gap-2 mb-1">
              <Calendar className="text-orange-500 w-6 h-6" />
              Attendance Calendar
            </h2>
            <p className="text-sm text-gray-400">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={goToToday}
              className="px-4 py-2 bg-[#1a1a1a] hover:bg-[#222] rounded-lg transition-all text-sm font-medium border border-gray-800 hover:border-orange-500"
            >
              Today
            </button>
            <div className="flex gap-1 bg-[#1a1a1a] rounded-lg p-1 border border-gray-800">
              <button
                onClick={previousMonth}
                className="p-2 hover:bg-orange-500/10 rounded-lg transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-orange-500/10 rounded-lg transition-colors group"
              >
                <ChevronRight className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-3 border border-green-500/20 hover:border-green-500/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400">Present</p>
              <CheckCircle className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-2xl font-bold text-green-400">{stats.presentDays}</p>
            <p className="text-xs text-gray-500 mt-1">days</p>
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-xl p-3 border border-red-500/20 hover:border-red-500/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400">Absent</p>
              <XCircle className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-2xl font-bold text-red-400">{stats.absentDays}</p>
            <p className="text-xs text-gray-500 mt-1">days</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl p-3 border border-orange-500/20 hover:border-orange-500/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400">Rate</p>
              {parseFloat(stats.percentage) >= 75 ? (
                <TrendingUp className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
              ) : (
                <TrendingDown className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
              )}
            </div>
            <p className="text-2xl font-bold text-orange-400">{stats.percentage}%</p>
            <p className="text-xs text-gray-500 mt-1">attendance</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-3 border border-blue-500/20 hover:border-blue-500/40 transition-all group">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-gray-400">Streak</p>
              <Award className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-2xl font-bold text-blue-400">{getStreakInfo()}</p>
            <p className="text-xs text-gray-500 mt-1">days</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-800">
          <div className="flex items-center gap-2 group">
            <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform"></div>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              Present
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform"></div>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              Absent
            </span>
          </div>
          <div className="flex items-center gap-2 group">
            <div className="w-5 h-5 bg-[#1a1a1a] rounded border border-gray-700 group-hover:border-gray-600 transition-all"></div>
            <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
              No Class
            </span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="mb-6">
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-400 text-xs py-2"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
              <div key={`empty-${idx}`} className="aspect-square"></div>
            ))}

            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const day = idx + 1;
              const dayData = getDayStatus(day);
              const status = dayData.status;
              const today = isToday(day);
              const selected = selectedDay === day;
              const hovered = hoveredDay === day;

              return (
                <div
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  className={`aspect-square flex items-center justify-center rounded-lg font-semibold text-sm cursor-pointer 
                    transition-all duration-300 relative group
                    ${getStatusColor(status)}
                    ${
                      today
                        ? "ring-2 ring-orange-500 ring-offset-2 ring-offset-[#111]"
                        : ""
                    }
                    ${selected ? "scale-110 z-10" : ""}
                    ${hovered ? "scale-105" : ""}
                  `}
                >
                  <span className="relative z-10">{day}</span>

                  {/* Hover Tooltip */}
                  {hovered && status !== "none" && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-xs whitespace-nowrap shadow-xl z-20 animate-fadeIn">
                      <div className="text-gray-400 mb-1">
                        {monthNames[currentMonth.getMonth()]} {day}
                      </div>
                      <div className="font-semibold">
                        {dayData.attended}/{dayData.classes} classes attended
                      </div>
                      <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 border-r border-b border-gray-700 rotate-45"
                      ></div>
                    </div>
                  )}

                  {/* Today indicator dot */}
                  {today && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Day Details */}
        {selectedDay && getDayStatus(selectedDay).status !== "none" && (
          <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-xl p-4 border border-orange-500/20 mb-6 animate-slideUp">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  {monthNames[currentMonth.getMonth()]} {selectedDay},{" "}
                  {currentMonth.getFullYear()}
                </h3>
                <p className="text-sm text-gray-400">Day Details</p>
              </div>
              <button
                onClick={() => setSelectedDay(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#1a1a1a] rounded-lg p-3 border border-gray-800">
                <p className="text-xs text-gray-400 mb-1">Status</p>
                <p
                  className={`font-semibold capitalize ${
                    getDayStatus(selectedDay).status === "present"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {getDayStatus(selectedDay).status}
                </p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-3 border border-gray-800">
                <p className="text-xs text-gray-400 mb-1">Classes</p>
                <p className="font-semibold text-white">
                  {getDayStatus(selectedDay).classes}
                </p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-3 border border-gray-800">
                <p className="text-xs text-gray-400 mb-1">Attended</p>
                <p className="font-semibold text-orange-400">
                  {getDayStatus(selectedDay).attended}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Monthly Summary */}
        <div className="bg-gradient-to-br from-gray-900 to-[#111] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-orange-500 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Monthly Summary
            </h3>
            {parseFloat(stats.percentage) >= 75 ? (
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                On Track
              </div>
            ) : (
              <div className="flex items-center gap-1 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4" />
                Below Target
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-400">Total Classes</p>
                <Sparkles className="w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-3xl font-bold text-green-400 mb-1">
                {stats.totalClasses}
              </p>
              <p className="text-xs text-gray-500">this month</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-transparent rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-400">Attended</p>
                <Sparkles className="w-4 h-4 text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-3xl font-bold text-orange-400 mb-1">
                {stats.totalAttended}
              </p>
              <p className="text-xs text-gray-500">classes</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg p-4 border border-blue-500/20 hover:border-blue-500/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-400">Percentage</p>
                <Sparkles className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-3xl font-bold text-blue-400 mb-1">
                {stats.percentage}%
              </p>
              <p className="text-xs text-gray-500">attendance</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Progress to 75% target</span>
              <span className="font-medium">{stats.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  parseFloat(stats.percentage) >= 75
                    ? "bg-gradient-to-r from-green-500 to-green-400"
                    : "bg-gradient-to-r from-orange-500 to-orange-400"
                }`}
                style={{ width: `${Math.min(parseFloat(stats.percentage), 100)}%` }}
              >
                <div
                  className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                  style={{ backgroundSize: "200% 100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}