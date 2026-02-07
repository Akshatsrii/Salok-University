import { BarChart3, TrendingUp, TrendingDown } from "lucide-react";

const subjectDetails = [
  {
    code: "CS601",
    name: "Machine Learning",
    professor: "Dr. Sharma",
    schedule: "Mon, Wed, Fri - 9:00 AM",
    attendance: [
      { date: "2024-03-01", status: "present" },
      { date: "2024-03-04", status: "present" },
      { date: "2024-03-06", status: "absent" },
      { date: "2024-03-08", status: "present" },
      { date: "2024-03-11", status: "present" },
    ],
    totalClasses: 32,
    attended: 28,
    percentage: 87.5,
    needToAttend: 0,
  },
  {
    code: "CS604",
    name: "Big Data Analytics",
    professor: "Prof. Verma",
    schedule: "Tue, Thu - 11:00 AM",
    attendance: [
      { date: "2024-03-02", status: "present" },
      { date: "2024-03-05", status: "absent" },
      { date: "2024-03-07", status: "absent" },
      { date: "2024-03-09", status: "present" },
      { date: "2024-03-12", status: "present" },
    ],
    totalClasses: 31,
    attended: 22,
    percentage: 71.0,
    needToAttend: 4,
  },
];

export default function SubjectWiseAttendance() {
  return (
    <div className="space-y-6">
      {subjectDetails.map((subject) => (
        <div
          key={subject.code}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">{subject.name}</h3>
                <p className="text-blue-100 text-sm">{subject.code}</p>
                <p className="text-blue-100 text-sm mt-1">👨‍🏫 {subject.professor}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">{subject.percentage.toFixed(1)}%</p>
                <p className="text-blue-100 text-sm">Attendance</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 border-b border-gray-200">
            <div>
              <p className="text-xs text-gray-600 mb-1">Total Classes</p>
              <p className="text-lg font-bold text-gray-800">{subject.totalClasses}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Attended</p>
              <p className="text-lg font-bold text-green-600">{subject.attended}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Missed</p>
              <p className="text-lg font-bold text-red-600">
                {subject.totalClasses - subject.attended}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Need to Attend</p>
              <p className="text-lg font-bold text-orange-600">
                {subject.needToAttend > 0 ? subject.needToAttend : "✓"}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600">
                  📅 Schedule: <span className="font-medium text-gray-800">{subject.schedule}</span>
                </p>
              </div>
            </div>

            {/* Recent Attendance */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Recent Classes</h4>
              <div className="flex flex-wrap gap-2">
                {subject.attendance.map((record, idx) => (
                  <div
                    key={idx}
                    className={`px-3 py-2 rounded-lg text-sm ${
                      record.status === "present"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <p className="font-medium">
                      {new Date(record.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-xs capitalize">{record.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning Message */}
            {subject.needToAttend > 0 && (
              <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-orange-800">
                  ⚠️ You need to attend at least <strong>{subject.needToAttend}</strong> more
                  consecutive classes to reach 75% attendance.
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}