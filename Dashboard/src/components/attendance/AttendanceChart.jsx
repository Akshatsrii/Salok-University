import { BarChart3, TrendingUp } from "lucide-react";

export default function AttendanceChart() {
  const monthlyData = [
    { month: "Jan", percentage: 85 },
    { month: "Feb", percentage: 88 },
    { month: "Mar", percentage: 87.5 },
  ];

  const subjectComparison = [
    { name: "ML", percentage: 87.5, color: "bg-blue-500" },
    { name: "AI", percentage: 90.9, color: "bg-green-500" },
    { name: "Cloud", percentage: 80.0, color: "bg-purple-500" },
    { name: "Big Data", percentage: 71.0, color: "bg-orange-500" },
    { name: "Cyber Sec", percentage: 81.3, color: "bg-pink-500" },
    { name: "IoT", percentage: 69.0, color: "bg-red-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Monthly Trend */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Monthly Attendance Trend</h3>
          <TrendingUp className="w-5 h-5 text-green-500" />
        </div>

        <div className="space-y-4">
          {monthlyData.map((data) => (
            <div key={data.month}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{data.month}</span>
                <span className="text-sm font-bold text-gray-800">{data.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full transition-all"
                  style={{ width: `${data.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subject Comparison */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Subject-wise Comparison</h3>
          <BarChart3 className="w-5 h-5 text-primary" />
        </div>

        <div className="space-y-4">
          {subjectComparison.map((subject) => (
            <div key={subject.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{subject.name}</span>
                <span className="text-sm font-bold text-gray-800">{subject.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${subject.color} h-3 rounded-full transition-all`}
                  style={{ width: `${subject.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span>
          Insights & Recommendations
        </h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• Your attendance is trending upward this semester - keep it up!</li>
          <li>• Focus on improving attendance in Big Data Analytics (71.0%) and IoT (69.0%)</li>
          <li>• Excellent performance in Artificial Intelligence (90.9%)</li>
          <li>• You're safely above the 75% requirement in 4 out of 6 subjects</li>
        </ul>
      </div>
    </div>
  );
}