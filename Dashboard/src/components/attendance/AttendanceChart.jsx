import { BarChart3, TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";
import { useMemo } from "react";

export default function AttendanceChart({ attendanceData = [] }) {
  // 🔥 Safe check
  const data = Array.isArray(attendanceData) ? attendanceData : [];

  // 🔥 Memoized calculations for performance
  const chartData = useMemo(() => {
    if (data.length === 0) {
      return {
        subjects: [],
        overall: 0,
        averageAttended: 0,
        averageTotal: 0,
        criticalCount: 0,
        warningCount: 0,
        goodCount: 0,
        highestSubject: null,
        lowestSubject: null,
      };
    }

    const subjects = data.map((subject) => {
      const percentage =
        subject.total > 0
          ? parseFloat(((subject.attended / subject.total) * 100).toFixed(1))
          : 0;

      // Determine status and color
      let status = "critical";
      let color = "bg-red-500";
      let textColor = "text-red-400";

      if (percentage >= 75) {
        status = "good";
        color = "bg-green-500";
        textColor = "text-green-400";
      } else if (percentage >= 60) {
        status = "warning";
        color = "bg-orange-500";
        textColor = "text-orange-400";
      }

      return {
        ...subject,
        percentage,
        status,
        color,
        textColor,
      };
    });

    // Overall percentage calculation
    const overall = parseFloat(
      (
        subjects.reduce((sum, sub) => sum + sub.percentage, 0) / subjects.length
      ).toFixed(1)
    );

    // Calculate statistics
    const totalAttended = subjects.reduce((sum, s) => sum + s.attended, 0);
    const totalClasses = subjects.reduce((sum, s) => sum + s.total, 0);
    const criticalCount = subjects.filter((s) => s.status === "critical").length;
    const warningCount = subjects.filter((s) => s.status === "warning").length;
    const goodCount = subjects.filter((s) => s.status === "good").length;

    // Find highest and lowest performing subjects
    const sortedByPercentage = [...subjects].sort((a, b) => b.percentage - a.percentage);
    const highestSubject = sortedByPercentage[0];
    const lowestSubject = sortedByPercentage[sortedByPercentage.length - 1];

    return {
      subjects,
      overall,
      averageAttended: totalAttended,
      averageTotal: totalClasses,
      criticalCount,
      warningCount,
      goodCount,
      highestSubject,
      lowestSubject,
    };
  }, [data]);

  // Determine overall status color
  const getOverallColor = (percentage) => {
    if (percentage >= 75) return "bg-green-500";
    if (percentage >= 60) return "bg-orange-500";
    return "bg-red-500";
  };

  const getOverallTextColor = (percentage) => {
    if (percentage >= 75) return "text-green-400";
    if (percentage >= 60) return "text-orange-400";
    return "text-red-400";
  };

  const getOverallStatus = (percentage) => {
    if (percentage >= 75) return { text: "Excellent", icon: CheckCircle, color: "text-green-400" };
    if (percentage >= 60) return { text: "Fair", icon: AlertTriangle, color: "text-orange-400" };
    return { text: "Critical", icon: AlertTriangle, color: "text-red-400" };
  };

  // Empty state
  if (data.length === 0) {
    return (
      <div className="bg-[#111] border border-gray-800 rounded-lg p-12 text-center">
        <BarChart3 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-400 mb-2">
          No Analytics Available
        </h3>
        <p className="text-gray-500 text-sm">
          Start marking your attendance to see visual analytics here
        </p>
      </div>
    );
  }

  const { subjects, overall, averageAttended, averageTotal, criticalCount, warningCount, goodCount, highestSubject, lowestSubject } = chartData;
  const overallStatus = getOverallStatus(overall);
  const StatusIcon = overallStatus.icon;

  return (
    <div className="space-y-6 text-white">
      {/* Overall Performance Card */}
      <div className="bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-gray-800 rounded-lg p-6 shadow-lg">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-orange-500 mb-1">
              Overall Attendance
            </h3>
            <p className="text-sm text-gray-400">
              {averageAttended} / {averageTotal} classes attended
            </p>
          </div>
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
            overall >= 75 ? "bg-green-500/10 border border-green-500/20" :
            overall >= 60 ? "bg-orange-500/10 border border-orange-500/20" :
            "bg-red-500/10 border border-red-500/20"
          }`}>
            <StatusIcon className={`w-4 h-4 ${overallStatus.color}`} />
            <span className={`text-sm font-medium ${overallStatus.color}`}>
              {overallStatus.text}
            </span>
          </div>
        </div>

        {/* Large Percentage Display */}
        <div className="text-center mb-6">
          <div className="inline-flex items-baseline gap-2">
            <span className={`text-6xl font-bold ${getOverallTextColor(overall)}`}>
              {overall}
            </span>
            <span className="text-2xl text-gray-500">%</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Semester Average</p>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
            <div
              className={`h-4 rounded-full transition-all duration-700 ease-out ${getOverallColor(overall)}`}
              style={{ width: `${Math.min(overall, 100)}%` }}
              role="progressbar"
              aria-valuenow={overall}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Overall attendance percentage"
            />
          </div>
          {/* Threshold markers */}
          <div className="absolute top-5 w-full flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span className="text-red-400">60%</span>
            <span className="text-orange-400">75%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-gray-800">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-gray-400">Good</span>
            </div>
            <p className="text-2xl font-bold text-green-400">{goodCount}</p>
          </div>
          <div className="text-center border-x border-gray-800">
            <div className="flex items-center justify-center gap-1 mb-1">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs text-gray-400">Warning</span>
            </div>
            <p className="text-2xl font-bold text-orange-400">{warningCount}</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-xs text-gray-400">Critical</span>
            </div>
            <p className="text-2xl font-bold text-red-400">{criticalCount}</p>
          </div>
        </div>
      </div>

      {/* Insights Cards */}
      {highestSubject && lowestSubject && highestSubject.code !== lowestSubject.code && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Best Performance */}
          <div className="bg-[#111] border border-green-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h4 className="text-sm font-semibold text-green-400">Best Performance</h4>
            </div>
            <p className="text-white font-medium mb-1">{highestSubject.name}</p>
            <p className="text-xs text-gray-400 mb-2">{highestSubject.code}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-green-400">
                {highestSubject.percentage}%
              </span>
              <span className="text-sm text-gray-500">
                ({highestSubject.attended}/{highestSubject.total})
              </span>
            </div>
          </div>

          {/* Needs Improvement */}
          <div className="bg-[#111] border border-red-500/20 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <h4 className="text-sm font-semibold text-red-400">Needs Improvement</h4>
            </div>
            <p className="text-white font-medium mb-1">{lowestSubject.name}</p>
            <p className="text-xs text-gray-400 mb-2">{lowestSubject.code}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-red-400">
                {lowestSubject.percentage}%
              </span>
              <span className="text-sm text-gray-500">
                ({lowestSubject.attended}/{lowestSubject.total})
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Subject-wise Performance Chart */}
      <div className="bg-[#111] border border-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-orange-500 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Subject-wise Performance
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Detailed breakdown of attendance by subject
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {subjects.map((subject, index) => (
            <div
              key={subject.code}
              className="group relative"
              role="group"
              aria-label={`${subject.name} attendance details`}
            >
              {/* Subject Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {/* Index Badge */}
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Subject Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-300 truncate group-hover:text-white transition-colors">
                      {subject.name}
                    </p>
                    <p className="text-xs text-gray-500">{subject.code}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Classes</p>
                    <p className="text-sm text-gray-400">
                      {subject.attended}/{subject.total}
                    </p>
                  </div>
                  <div className={`text-right min-w-[60px]`}>
                    <span className={`text-xl font-bold ${subject.textColor}`}>
                      {subject.percentage}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar with Hover Effect */}
              <div className="relative group/bar">
                <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-700 ease-out group-hover/bar:opacity-90 ${subject.color}`}
                    style={{ width: `${Math.min(subject.percentage, 100)}%` }}
                    role="progressbar"
                    aria-valuenow={subject.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${subject.name} attendance percentage: ${subject.percentage}%`}
                  />
                </div>

                {/* Tooltip on Hover */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-gray-700 rounded-lg px-3 py-1.5 opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                  <p className="text-xs text-white">
                    {subject.attended} attended out of {subject.total} classes
                  </p>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-gray-700 rotate-45" />
                </div>
              </div>

              {/* Status Indicator */}
              {subject.status !== "good" && (
                <div className="flex items-center gap-2 mt-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    subject.status === "critical" ? "bg-red-500 animate-pulse" : "bg-orange-500"
                  }`} />
                  <span className="text-xs text-gray-500">
                    {subject.status === "critical"
                      ? "Urgent: Attend more classes to avoid shortage"
                      : "Approaching minimum threshold - stay consistent"}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-400">≥75% - Good Standing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span className="text-gray-400">60-74% - At Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <span className="text-gray-400">&lt;60% - Critical</span>
              </div>
            </div>
            <div className="text-gray-500">
              Total: <span className="text-white font-medium">{subjects.length}</span> subjects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}