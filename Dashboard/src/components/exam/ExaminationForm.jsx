import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExaminationForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formStatus, setFormStatus] = useState(null);

  const mockFormData = {
    applicationId:
      "EXAM2026-" +
      Math.random().toString(36).substr(2, 9).toUpperCase(),
    status: "approved",
    studentName: "John Doe",
    rollNumber: "2024001",
    course: "B.Tech - Computer Science",
    semester: "5th Semester",
    examType: "Regular",
    submittedDate: "February 1, 2026",
    examDate: "March 15, 2026",
    examFee: "₹2,500",
    paymentStatus: "paid",
    subjects: [
      { code: "CS501", name: "Database Management Systems", credits: 4 },
      { code: "CS502", name: "Operating Systems", credits: 4 },
      { code: "CS503", name: "Computer Networks", credits: 3 },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      setFormStatus(mockFormData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400 font-medium">
            Loading form status...
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-6 text-white"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Examination Form Status
            </h1>
            <p className="text-orange-100">
              Application ID:{" "}
              <span className="font-semibold">
                {formStatus.applicationId}
              </span>
            </p>
          </div>

          <span className="mt-4 md:mt-0 bg-black/20 px-4 py-2 rounded-full text-sm font-semibold">
            ✅ Approved
          </span>
        </div>
      </div>

      {/* Success Alert */}
      {formStatus.status === "approved" && (
        <div className="bg-[#111] border border-green-500 p-6 rounded-lg shadow">
          <h3 className="text-green-400 text-lg font-semibold mb-2">
            Form Approved Successfully 🎉
          </h3>
          <p className="text-gray-400">
            Your admit card will be available soon.
          </p>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">
          {/* Student Details */}
          <div className="bg-[#111] border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">
              Student Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Detail label="Name" value={formStatus.studentName} />
              <Detail label="Roll Number" value={formStatus.rollNumber} />
              <Detail label="Course" value={formStatus.course} />
              <Detail label="Semester" value={formStatus.semester} />
              <Detail label="Exam Type" value={formStatus.examType} />
              <Detail label="Exam Date" value={formStatus.examDate} />
            </div>
          </div>

          {/* Subjects */}
          <div className="bg-[#111] border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">
              Registered Subjects ({formStatus.subjects.length})
            </h2>

            <table className="w-full text-sm">
              <thead className="bg-black border-b border-gray-700">
                <tr>
                  <th className="py-2 text-left">Code</th>
                  <th className="py-2 text-left">Subject</th>
                  <th className="py-2 text-left">Credits</th>
                </tr>
              </thead>
              <tbody>
                {formStatus.subjects.map((sub, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-800 hover:bg-[#1a1a1a]"
                  >
                    <td className="py-2 text-orange-500 font-semibold">
                      {sub.code}
                    </td>
                    <td className="py-2 text-gray-300">
                      {sub.name}
                    </td>
                    <td className="py-2 text-gray-400">
                      {sub.credits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {/* Payment */}
          <div className="bg-[#111] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Payment Details
            </h3>

            <div className="flex justify-between mb-3">
              <span className="text-gray-400">Exam Fee</span>
              <span className="font-semibold text-white">
                {formStatus.examFee}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Status</span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                ✅ Paid
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#111] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Quick Actions
            </h3>

            <div className="space-y-3">
              <button
                onClick={() => navigate("/exam/admit")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold px-4 py-3 rounded-lg transition"
              >
                View Admit Card
              </button>

              <button
                onClick={() => window.print()}
                className="w-full border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-orange-400 px-4 py-3 rounded-lg transition"
              >
                Print Details
              </button>

              <button
                onClick={() => navigate("/exam/form")}
                className="w-full border border-gray-700 hover:border-orange-500 text-gray-400 hover:text-orange-400 px-4 py-3 rounded-lg transition"
              >
                Edit Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-white">{value}</p>
    </div>
  );
}
