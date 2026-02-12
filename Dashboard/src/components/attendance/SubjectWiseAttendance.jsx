import { useState } from "react";

const subjectDetails = [
  {
    code: "CS601",
    name: "Machine Learning",
    professor: "Dr. Sharma",
    weeklyDays: ["Mon", "Wed", "Fri"], // 3 days/week
    totalWeeks: 10,
    attendedClasses: 24,
  },
  {
    code: "CS604",
    name: "Big Data Analytics",
    professor: "Prof. Verma",
    weeklyDays: ["Tue", "Thu", "Sat"], // 3 days/week
    totalWeeks: 10,
    attendedClasses: 18,
  },
];

export default function SubjectWiseAttendance() {

  const calculateSubjectData = (subject) => {
    const totalClasses = subject.weeklyDays.length * subject.totalWeeks;
    const attended = subject.attendedClasses;
    const percentage = ((attended / totalClasses) * 100).toFixed(1);

    const minRequired = Math.ceil(totalClasses * 0.75);
    const needToAttend =
      attended >= minRequired ? 0 : minRequired - attended;

    return {
      totalClasses,
      attended,
      percentage,
      needToAttend,
    };
  };

  return (
    <div className="space-y-6 text-white">

      {subjectDetails.map((subject) => {
        const calculated = calculateSubjectData(subject);

        return (
          <div
            key={subject.code}
            className="bg-[#111] rounded-lg shadow-lg border border-gray-800 overflow-hidden"
          >

            {/* Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-black p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    {subject.name}
                  </h3>
                  <p className="text-sm opacity-80">
                    {subject.code}
                  </p>
                  <p className="text-sm mt-1">
                    👨‍🏫 {subject.professor}
                  </p>
                  <p className="text-sm mt-1">
                    📅 {subject.weeklyDays.join(", ")} (3 Days/Week)
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-3xl font-bold">
                    {calculated.percentage}%
                  </p>
                  <p className="text-sm opacity-80">
                    Attendance
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#1a1a1a] border-b border-gray-800">

              <div>
                <p className="text-xs text-gray-400 mb-1">
                  Total Classes
                </p>
                <p className="text-lg font-bold text-orange-500">
                  {calculated.totalClasses}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">
                  Attended
                </p>
                <p className="text-lg font-bold text-orange-400">
                  {calculated.attended}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">
                  Missed
                </p>
                <p className="text-lg font-bold text-red-400">
                  {calculated.totalClasses - calculated.attended}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-1">
                  Need to Attend (75%)
                </p>
                <p className="text-lg font-bold text-orange-500">
                  {calculated.needToAttend > 0
                    ? calculated.needToAttend
                    : "✓"}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="p-6">
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-orange-500 transition-all"
                  style={{ width: `${calculated.percentage}%` }}
                />
              </div>
            </div>

            {/* Warning Message */}
            {calculated.needToAttend > 0 && (
              <div className="mx-6 mb-6 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <p className="text-sm text-orange-400">
                  ⚠️ You need to attend at least{" "}
                  <strong>{calculated.needToAttend}</strong> more
                  consecutive classes to reach 75% attendance.
                </p>
              </div>
            )}

          </div>
        );
      })}

    </div>
  );
}
