import { useState } from "react";
import { AlertCircle, CheckCircle, XCircle, TrendingUp, TrendingDown } from "lucide-react";

const subjectsData = [
  {
    code: "CS601",
    name: "Machine Learning",
    attended: 28,
    total: 32,
    percentage: 87.5,
    status: "good",
    trend: "up",
    lastClass: "Present",
    credits: 4,
  },
  {
    code: "CS602",
    name: "Artificial Intelligence",
    attended: 30,
    total: 33,
    percentage: 90.9,
    status: "excellent",
    trend: "up",
    lastClass: "Present",
    credits: 4,
  },
  {
    code: "CS603",
    name: "Cloud Computing",
    attended: 24,
    total: 30,
    percentage: 80.0,
    status: "good",
    trend: "stable",
    lastClass: "Present",
    credits: 3,
  },
  {
    code: "CS604",
    name: "Big Data Analytics",
    attended: 22,
    total: 31,
    percentage: 71.0,
    status: "warning",
    trend: "down",
    lastClass: "Absent",
    credits: 4,
  },
  {
    code: "CS605",
    name: "Cyber Security",
    attended: 26,
    total: 32,
    percentage: 81.3,
    status: "good",
    trend: "up",
    lastClass: "Present",
    credits: 3,
  },
  {
    code: "CS606",
    name: "IoT & Applications",
    attended: 20,
    total: 29,
    percentage: 69.0,
    status: "critical",
    trend: "down",
    lastClass: "Absent",
    credits: 3,
  },
];

export default function AttendanceDetails() {
  const [sortBy, setSortBy] = useState("percentage");
  const [filterStatus, setFilterStatus] = useState("all");

  const getStatusConfig = (status) => {
    const configs = {
      excellent: {
        color: "text-green-700 bg-green-50",
        icon: CheckCircle,
        label: "Excellent",
        badge: "bg-green-100 text-green-700",
      },
      good: {
        color: "text-blue-700 bg-blue-50",
        icon: CheckCircle,
        label: "Good",
        badge: "bg-blue-100 text-blue-700",
      },
      warning: {
        color: "text-orange-700 bg-orange-50",
        icon: AlertCircle,
        label: "Warning",
        badge: "bg-orange-100 text-orange-700",
      },
      critical: {
        color: "text-red-700 bg-red-50",
        icon: XCircle,
        label: "Critical",
        badge: "bg-red-100 text-red-700",
      },
    };
    return configs[status] || configs.good;
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 85) return "bg-green-500";
    if (percentage >= 75) return "bg-blue-500";
    if (percentage >= 65) return "bg-orange-500";
    return "bg-red-500";
  };

  const filteredData = subjectsData.filter((subject) => {
    if (filterStatus === "all") return true;
    return subject.status === filterStatus;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "percentage") return b.percentage - a.percentage;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "code") return a.code.localeCompare(b.code);
    return 0;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Filters */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <label className="text-xs font-medium text-gray-700 mb-1 block">
              Filter by Status
            </label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Subjects</option>
              <option value="excellent">Excellent (≥85%)</option>
              <option value="good">Good (75-84%)</option>
              <option value="warning">Warning (65-74%)</option>
              <option value="critical">Critical (&lt;65%)</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="text-xs font-medium text-gray-700 mb-1 block">
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="percentage">Attendance %</option>
              <option value="name">Subject Name</option>
              <option value="code">Subject Code</option>
            </select>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Credits
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Attended
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Progress
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Percentage
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Last Class
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedData.map((subject) => {
              const config = getStatusConfig(subject.status);
              const StatusIcon = config.icon;
              
              return (
                <tr key={subject.code} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-800">{subject.name}</p>
                      <p className="text-sm text-gray-500">{subject.code}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-medium text-gray-700">
                      {subject.credits}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-sm font-medium text-gray-700">
                      {subject.attended}/{subject.total}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${getProgressColor(
                          subject.percentage
                        )}`}
                        style={{ width: `${subject.percentage}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-lg font-bold text-gray-800">
                      {subject.percentage.toFixed(1)}%
                    </span>
                    {subject.trend === "up" && (
                      <TrendingUp className="w-4 h-4 text-green-500 inline ml-1" />
                    )}
                    {subject.trend === "down" && (
                      <TrendingDown className="w-4 h-4 text-red-500 inline ml-1" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${config.badge}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      {config.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`text-sm font-medium ${
                        subject.lastClass === "Present"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {subject.lastClass}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-200">
        {sortedData.map((subject) => {
          const config = getStatusConfig(subject.status);
          const StatusIcon = config.icon;

          return (
            <div key={subject.code} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-800">{subject.name}</h3>
                  <p className="text-sm text-gray-500">{subject.code} • {subject.credits} Credits</p>
                </div>
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.badge}`}
                >
                  <StatusIcon className="w-3 h-3" />
                  {config.label}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Attendance</span>
                  <span className="font-semibold text-gray-800">
                    {subject.attended}/{subject.total}
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressColor(subject.percentage)}`}
                    style={{ width: `${subject.percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800">
                    {subject.percentage.toFixed(1)}%
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      subject.lastClass === "Present" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    Last: {subject.lastClass}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Footer */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-xs text-gray-600 mb-1">Total Subjects</p>
            <p className="text-lg font-bold text-gray-800">{subjectsData.length}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Above 75%</p>
            <p className="text-lg font-bold text-green-600">
              {subjectsData.filter((s) => s.percentage >= 75).length}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Warning Zone</p>
            <p className="text-lg font-bold text-orange-600">
              {subjectsData.filter((s) => s.percentage >= 65 && s.percentage < 75).length}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Critical</p>
            <p className="text-lg font-bold text-red-600">
              {subjectsData.filter((s) => s.percentage < 65).length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}