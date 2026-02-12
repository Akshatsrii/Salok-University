import { TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export default function AttendanceStats({ attendanceData }) {

  // 🔥 Safe fallback if no data
  const totalClasses = attendanceData?.reduce(
    (sum, sub) => sum + sub.total,
    0
  ) || 0;

  const totalAttended = attendanceData?.reduce(
    (sum, sub) => sum + sub.attended,
    0
  ) || 0;

  const totalMissed = totalClasses - totalAttended;

  const overallPercentage =
    totalClasses > 0
      ? ((totalAttended / totalClasses) * 100).toFixed(1)
      : "0.0";

  const stats = [
    {
      label: "Overall Attendance",
      value: `${overallPercentage}%`,
      change: "",
      trend: "up",
      icon: CheckCircle,
    },
    {
      label: "Classes Attended",
      value: totalAttended,
      change: `out of ${totalClasses}`,
      icon: TrendingUp,
    },
    {
      label: "Classes Missed",
      value: totalMissed,
      change:
        totalClasses > 0
          ? `${((totalMissed / totalClasses) * 100).toFixed(1)}% of total`
          : "0%",
      icon: AlertTriangle,
    },
    {
      label: "This Week",
      value: `${overallPercentage}%`,
      change: "",
      trend: "up",
      icon: TrendingUp,
    },
  ];

  // 🔥 Dark Theme Card Colors
  const getColorClasses = () => {
    return "bg-[#111] border-gray-800 text-white";
  };

  // 🔥 Icon Orange Theme
  const getIconColorClasses = () => {
    return "text-orange-500 bg-orange-500/10";
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className={`border rounded-lg p-5 transition hover:border-orange-500 ${getColorClasses()}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${getIconColorClasses()}`}>
                <Icon className="w-5 h-5" />
              </div>

              {stat.trend && stat.change && (
                <span className="text-xs font-medium text-orange-400">
                  {stat.change}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-1 text-orange-500">
              {stat.value}
            </h3>

            <p className="text-sm text-gray-400">{stat.label}</p>

            {!stat.trend && (
              <p className="text-xs mt-1 text-gray-500">
                {stat.change}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
