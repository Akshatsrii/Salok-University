import { useMemo } from "react";

export default function AttendanceDetails({ attendanceData = [] }) {
  // Memoize calculations to prevent unnecessary recalculations
  const processedData = useMemo(() => {
    return attendanceData.map((subject) => {
      const percentage =
        subject.total > 0
          ? ((subject.attended / subject.total) * 100).toFixed(1)
          : "0.0";

      // Determine status color based on percentage
      const percentageNum = parseFloat(percentage);
      let statusColor = "text-red-400";
      if (percentageNum >= 75) statusColor = "text-green-400";
      else if (percentageNum >= 60) statusColor = "text-orange-400";

      return {
        ...subject,
        percentage,
        percentageNum,
        statusColor,
      };
    });
  }, [attendanceData]);

  // Handle empty state
  if (!attendanceData || attendanceData.length === 0) {
    return (
      <div className="bg-[#111] border border-gray-800 rounded-lg overflow-hidden text-white">
        <div className="px-6 py-12 text-center">
          <p className="text-gray-400 text-lg mb-2">No attendance data available</p>
          <p className="text-gray-500 text-sm">
            Start marking your attendance to see records here
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#111] border border-gray-800 rounded-lg overflow-hidden text-white">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#1a1a1a] border-b border-gray-800">
            <tr>
              <th 
                scope="col"
                className="px-6 py-3 text-left text-sm text-gray-400 font-medium"
              >
                Subject
              </th>
              <th 
                scope="col"
                className="px-6 py-3 text-center text-sm text-gray-400 font-medium"
              >
                Attended
              </th>
              <th 
                scope="col"
                className="px-6 py-3 text-center text-sm text-gray-400 font-medium"
              >
                Total
              </th>
              <th 
                scope="col"
                className="px-6 py-3 text-center text-sm text-gray-400 font-medium"
              >
                Percentage
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {processedData.map((subject, index) => (
              <tr
                key={subject.code}
                className="border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-150"
                role="row"
              >
                <td className="px-6 py-4" role="cell">
                  <div className="flex items-center gap-3">
                    {/* Subject Number Badge */}
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-orange-400">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-orange-500">
                        {subject.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {subject.code}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 text-center" role="cell">
                  <span className="text-white font-medium">
                    {subject.attended}
                  </span>
                </td>

                <td className="px-6 py-4 text-center" role="cell">
                  <span className="text-gray-300 font-medium">
                    {subject.total}
                  </span>
                </td>

                <td className="px-6 py-4" role="cell">
                  <div className="flex flex-col items-center gap-2">
                    {/* Percentage with dynamic color */}
                    <span className={`text-lg font-bold ${subject.statusColor}`}>
                      {subject.percentage}%
                    </span>
                    
                    {/* Progress Bar */}
                    <div className="w-full max-w-[100px] h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ease-out ${
                          subject.percentageNum >= 75
                            ? "bg-green-500"
                            : subject.percentageNum >= 60
                            ? "bg-orange-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${Math.min(subject.percentageNum, 100)}%` }}
                        role="progressbar"
                        aria-valuenow={subject.percentageNum}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${subject.name} attendance percentage`}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-gray-800">
        {processedData.map((subject, index) => (
          <div
            key={subject.code}
            className="p-4 hover:bg-[#1a1a1a] transition-colors duration-150"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3 flex-1">
                {/* Subject Number Badge */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-orange-400">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-orange-500 truncate">
                    {subject.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {subject.code}
                  </p>
                </div>
              </div>

              {/* Percentage Badge */}
              <div className={`text-right flex-shrink-0 ml-2`}>
                <span className={`text-xl font-bold ${subject.statusColor}`}>
                  {subject.percentage}%
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-[#1a1a1a] rounded-lg p-3 border border-gray-800">
                <p className="text-xs text-gray-400 mb-1">Attended</p>
                <p className="text-lg font-bold text-white">
                  {subject.attended}
                </p>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-3 border border-gray-800">
                <p className="text-xs text-gray-400 mb-1">Total Classes</p>
                <p className="text-lg font-bold text-gray-300">
                  {subject.total}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>Progress</span>
                <span>{subject.attended} / {subject.total}</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ease-out ${
                    subject.percentageNum >= 75
                      ? "bg-green-500"
                      : subject.percentageNum >= 60
                      ? "bg-orange-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min(subject.percentageNum, 100)}%` }}
                  role="progressbar"
                  aria-valuenow={subject.percentageNum}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`${subject.name} attendance percentage`}
                />
              </div>
            </div>

            {/* Status Badge */}
            {subject.percentageNum < 75 && (
              <div className="mt-3 pt-3 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    subject.percentageNum < 60 ? "bg-red-500" : "bg-orange-500"
                  } animate-pulse`} />
                  <span className="text-xs text-gray-400">
                    {subject.percentageNum < 60
                      ? "Critical: Attend more classes"
                      : "Warning: Approaching minimum threshold"}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="bg-[#1a1a1a] border-t border-gray-800 px-6 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-400">≥75% - Good</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-gray-400">60-74% - Warning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-gray-400">&lt;60% - Critical</span>
            </div>
          </div>
          <div className="text-gray-500">
            Total Subjects: <span className="text-white font-medium">{attendanceData.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}