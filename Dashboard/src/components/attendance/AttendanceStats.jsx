import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export default function AttendanceStats() {
  const stats = [
    {
      label: "Overall Attendance",
      value: "87.5%",
      change: "+2.3%",
      trend: "up",
      status: "good",
      icon: CheckCircle,
      color: "green",
    },
    {
      label: "Classes Attended",
      value: "245",
      change: "out of 280",
      status: "info",
      icon: TrendingUp,
      color: "blue",
    },
    {
      label: "Classes Missed",
      value: "35",
      change: "12.5% of total",
      status: "warning",
      icon: AlertTriangle,
      color: "orange",
    },
    {
      label: "This Week",
      value: "95%",
      change: "+8%",
      trend: "up",
      status: "good",
      icon: TrendingUp,
      color: "green",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: "bg-green-50 border-green-200 text-green-700",
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      orange: "bg-orange-50 border-orange-200 text-orange-700",
      red: "bg-red-50 border-red-200 text-red-700",
    };
    return colors[color] || colors.blue;
  };

  const getIconColorClasses = (color) => {
    const colors = {
      green: "text-green-600 bg-green-100",
      blue: "text-blue-600 bg-blue-100",
      orange: "text-orange-600 bg-orange-100",
      red: "text-red-600 bg-red-100",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div
            key={idx}
            className={`border-2 rounded-lg p-5 ${getColorClasses(stat.color)}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2 rounded-lg ${getIconColorClasses(stat.color)}`}>
                <Icon className="w-5 h-5" />
              </div>
              {stat.trend && (
                <span className="text-xs font-medium">
                  {stat.change}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm opacity-80">{stat.label}</p>
            {!stat.trend && (
              <p className="text-xs mt-1 opacity-70">{stat.change}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}