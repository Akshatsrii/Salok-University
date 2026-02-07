import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ExaminationForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [formStatus, setFormStatus] = useState(null);

  // Mock data - replace with actual API call
  const mockFormData = {
    applicationId: "EXAM2026-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    status: "approved", // pending, approved, rejected, submitted
    studentName: "John Doe",
    rollNumber: "2024001",
    course: "B.Tech - Computer Science",
    semester: "5th Semester",
    examType: "Regular",
    submittedDate: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    examDate: "March 15, 2026",
    examFee: "₹2,500",
    paymentStatus: "paid", // pending, paid, failed
    subjects: [
      { code: "CS501", name: "Database Management Systems", credits: 4 },
      { code: "CS502", name: "Operating Systems", credits: 4 },
      { code: "CS503", name: "Computer Networks", credits: 3 },
      { code: "CS504", name: "Software Engineering", credits: 3 },
      { code: "CS505", name: "Web Technologies", credits: 3 },
    ],
    timeline: [
      {
        step: "Application Submitted",
        date: "Feb 1, 2026",
        status: "completed",
        description: "Your examination form has been submitted successfully",
      },
      {
        step: "Payment Verified",
        date: "Feb 2, 2026",
        status: "completed",
        description: "Examination fee payment confirmed",
      },
      {
        step: "Under Review",
        date: "Feb 3, 2026",
        status: "completed",
        description: "Application is being reviewed by the examination cell",
      },
      {
        step: "Approved",
        date: "Feb 5, 2026",
        status: "current",
        description: "Your application has been approved",
      },
      {
        step: "Admit Card Available",
        date: "Mar 8, 2026",
        status: "upcoming",
        description: "Admit card will be available for download",
      },
    ],
  };

  useEffect(() => {
    // Simulate API call
    const fetchFormStatus = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFormStatus(mockFormData);
      } catch (error) {
        console.error("Error fetching form status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFormStatus();
  }, []);

  const getStatusBadge = (status) => {
    const badges = {
      submitted: {
        bg: "bg-blue-100",
        text: "text-blue-800",
        label: "Submitted",
        icon: "📝",
      },
      pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        label: "Under Review",
        icon: "⏳",
      },
      approved: {
        bg: "bg-green-100",
        text: "text-green-800",
        label: "Approved",
        icon: "✅",
      },
      rejected: {
        bg: "bg-red-100",
        text: "text-red-800",
        label: "Rejected",
        icon: "❌",
      },
    };

    const badge = badges[status] || badges.submitted;
    return (
      <span
        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${badge.bg} ${badge.text}`}
      >
        <span className="mr-2">{badge.icon}</span>
        {badge.label}
      </span>
    );
  };

  const downloadAdmitCard = () => {
    // Implement admit card download logic
    navigate("/exam/admit");
  };

  const downloadReceipt = () => {
    // Implement receipt download logic
    alert("Downloading payment receipt...");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading form status...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto space-y-6"
    >
      {/* Header Card */}
      <div className="bg-gradient-to-r from-primary to-blue-600 p-8 rounded-xl shadow-lg text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Examination Form Status</h1>
            <p className="text-blue-100">
              Application ID: <span className="font-semibold">{formStatus.applicationId}</span>
            </p>
          </div>
          <div className="mt-4 md:mt-0">{getStatusBadge(formStatus.status)}</div>
        </div>
      </div>

      {/* Success Alert */}
      {formStatus.status === "approved" && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg shadow"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-8 w-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-green-800">
                Form Approved Successfully! 🎉
              </h3>
              <p className="mt-1 text-green-700">
                Your examination form has been approved. Your admit card will be available from{" "}
                <span className="font-semibold">March 8, 2026</span>.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Student Details Card */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Student Details
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Student Name</p>
                <p className="font-semibold text-gray-800">{formStatus.studentName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Roll Number</p>
                <p className="font-semibold text-gray-800">{formStatus.rollNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Course</p>
                <p className="font-semibold text-gray-800">{formStatus.course}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Semester</p>
                <p className="font-semibold text-gray-800">{formStatus.semester}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Exam Type</p>
                <p className="font-semibold text-gray-800">{formStatus.examType}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Exam Date</p>
                <p className="font-semibold text-gray-800">{formStatus.examDate}</p>
              </div>
            </div>
          </div>

          {/* Registered Subjects */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Registered Subjects ({formStatus.subjects.length})
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Subject Code
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Subject Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Credits
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {formStatus.subjects.map((subject, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {subject.code}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">{subject.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{subject.credits}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-gray-50">
                  <tr>
                    <td colSpan="2" className="px-4 py-3 text-sm font-semibold text-gray-700">
                      Total Credits
                    </td>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                      {formStatus.subjects.reduce((sum, sub) => sum + sub.credits, 0)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Application Timeline */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Application Timeline
            </h2>
            <div className="relative">
              {formStatus.timeline.map((item, index) => (
                <div key={index} className="mb-8 flex">
                  <div className="flex flex-col items-center mr-4">
                    <div>
                      {item.status === "completed" && (
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                      {item.status === "current" && (
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white animate-pulse">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                      {item.status === "upcoming" && (
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-gray-600">
                          <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                        </div>
                      )}
                    </div>
                    {index !== formStatus.timeline.length - 1 && (
                      <div
                        className={`w-0.5 h-full mt-2 ${
                          item.status === "completed" ? "bg-green-500" : "bg-gray-300"
                        }`}
                      ></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <p
                      className={`text-sm font-semibold mb-1 ${
                        item.status === "current" ? "text-blue-600" : "text-gray-800"
                      }`}
                    >
                      {item.step}
                    </p>
                    <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Payment Details */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              Payment Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Exam Fee</span>
                <span className="font-semibold text-gray-800">{formStatus.examFee}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    formStatus.paymentStatus === "paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {formStatus.paymentStatus === "paid" ? "✅ Paid" : "⏳ Pending"}
                </span>
              </div>
              {formStatus.paymentStatus === "paid" && (
                <button
                  onClick={downloadReceipt}
                  className="w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-lg transition-all flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Receipt
                </button>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={downloadAdmitCard}
                disabled={formStatus.status !== "approved"}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-3 rounded-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow hover:shadow-md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
                View Admit Card
              </button>

              <button
                onClick={() => window.print()}
                className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 font-semibold px-4 py-3 rounded-lg transition-all flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print Details
              </button>

              <button
                onClick={() => navigate("/exam/form")}
                className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 font-semibold px-4 py-3 rounded-lg transition-all flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit Application
              </button>
            </div>
          </div>

          {/* Help & Support */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Need Help?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Contact the examination cell for any queries or assistance.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                exam@university.edu
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 1234567890
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 