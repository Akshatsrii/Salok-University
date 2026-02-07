import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SemesterFeeEstimate() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [feeData, setFeeData] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState("current");
  const [showBreakdown, setShowBreakdown] = useState(true);
  const [discount, setDiscount] = useState(0);

  // Mock data - replace with actual API call
  const mockFeeData = {
    student: {
      name: "John Doe",
      rollNumber: "2024001",
      course: "B.Tech - Computer Science",
      semester: "5th Semester",
      academicYear: "2025-26",
    },
    feeStructure: {
      tuition: {
        label: "Tuition Fee",
        amount: 45000,
        icon: "📚",
        description: "Per semester academic fee",
      },
      development: {
        label: "Development Fee",
        amount: 8000,
        icon: "🏫",
        description: "Infrastructure and facility development",
      },
      library: {
        label: "Library Fee",
        amount: 2500,
        icon: "📖",
        description: "Library access and resources",
      },
      lab: {
        label: "Laboratory Fee",
        amount: 6500,
        icon: "🔬",
        description: "Lab equipment and materials",
      },
      sports: {
        label: "Sports & Recreation",
        amount: 1500,
        icon: "⚽",
        description: "Sports facilities and activities",
      },
      exam: {
        label: "Examination Fee",
        amount: 3500,
        icon: "📝",
        description: "Exam administration and processing",
      },
      technology: {
        label: "Technology Fee",
        amount: 2500,
        icon: "💻",
        description: "IT infrastructure and software licenses",
      },
      student_welfare: {
        label: "Student Welfare",
        amount: 1000,
        icon: "🤝",
        description: "Student support services",
      },
      medical: {
        label: "Medical & Insurance",
        amount: 1550,
        icon: "🏥",
        description: "Health services and insurance",
      },
      miscellaneous: {
        label: "Miscellaneous",
        amount: 5000,
        icon: "📋",
        description: "ID card, prospectus, and other charges",
      },
    },
    discounts: {
      merit: {
        label: "Merit Scholarship",
        percentage: 10,
        eligible: true,
        amount: 7705,
      },
      sibling: {
        label: "Sibling Discount",
        percentage: 5,
        eligible: false,
        amount: 0,
      },
      earlyBird: {
        label: "Early Payment Discount",
        percentage: 3,
        eligible: true,
        amount: 2311.5,
        deadline: "March 31, 2026",
      },
    },
    paymentSchedule: [
      {
        installment: 1,
        dueDate: "March 15, 2026",
        amount: 38525,
        status: "pending",
        description: "First Installment",
      },
      {
        installment: 2,
        dueDate: "May 15, 2026",
        amount: 38525,
        status: "upcoming",
        description: "Second Installment",
      },
    ],
    previousPayments: [
      {
        semester: "4th Semester",
        amount: 75000,
        date: "Sept 15, 2025",
        status: "paid",
      },
      {
        semester: "3rd Semester",
        amount: 75000,
        date: "March 10, 2025",
        status: "paid",
      },
    ],
  };

  useEffect(() => {
    // Simulate API call
    const fetchFeeData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setFeeData(mockFeeData);
      } catch (error) {
        console.error("Error fetching fee data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeeData();
  }, []);

  const calculateTotal = () => {
    if (!feeData) return 0;
    return Object.values(feeData.feeStructure).reduce(
      (sum, item) => sum + item.amount,
      0
    );
  };

  const calculateDiscount = () => {
    if (!feeData) return 0;
    return Object.values(feeData.discounts)
      .filter((d) => d.eligible)
      .reduce((sum, d) => sum + d.amount, 0);
  };

  const calculateFinalAmount = () => {
    return calculateTotal() - calculateDiscount();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const proceedToPayment = () => {
    navigate("/payments/fee", {
      state: {
        amount: calculateFinalAmount(),
        feeData: feeData,
      },
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading fee details...</p>
        </div>
      </div>
    );
  }

  const totalAmount = calculateTotal();
  const totalDiscount = calculateDiscount();
  const finalAmount = calculateFinalAmount();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary to-blue-600 text-white p-8 rounded-xl shadow-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Semester Fee Estimate</h1>
            <p className="text-blue-100">{feeData.student.academicYear}</p>
          </div>
          <div className="mt-4 md:mt-0 bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm text-blue-100">Total Payable Amount</p>
            <p className="text-4xl font-bold">{formatCurrency(finalAmount)}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Student Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-xl shadow"
          >
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
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold text-gray-800">{feeData.student.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Roll Number</p>
                <p className="font-semibold text-gray-800">{feeData.student.rollNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Course</p>
                <p className="font-semibold text-gray-800">{feeData.student.course}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Current Semester</p>
                <p className="font-semibold text-gray-800">{feeData.student.semester}</p>
              </div>
            </div>
          </motion.div>

          {/* Fee Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
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
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Fee Breakdown
              </h2>
              <button
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="text-primary hover:text-primary/80 font-medium text-sm flex items-center"
              >
                {showBreakdown ? "Hide" : "Show"} Details
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    showBreakdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {showBreakdown && (
              <div className="space-y-3">
                {Object.entries(feeData.feeStructure).map(([key, item], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center flex-1">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800">{item.label}</p>
                        <p className="text-xs text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-900 text-lg">
                      {formatCurrency(item.amount)}
                    </p>
                  </motion.div>
                ))}

                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-gray-700">Subtotal</span>
                    <span className="font-bold text-gray-900">
                      {formatCurrency(totalAmount)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Discounts & Scholarships */}
          {totalDiscount > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-r-xl shadow"
            >
              <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Applied Discounts & Scholarships
              </h3>
              <div className="space-y-3">
                {Object.entries(feeData.discounts)
                  .filter(([_, discount]) => discount.eligible)
                  .map(([key, discount]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between p-3 bg-white rounded-lg"
                    >
                      <div>
                        <p className="font-semibold text-green-900">{discount.label}</p>
                        <p className="text-xs text-green-700">
                          {discount.percentage}% discount
                          {discount.deadline && ` • Valid till ${discount.deadline}`}
                        </p>
                      </div>
                      <p className="font-bold text-green-600">
                        -{formatCurrency(discount.amount)}
                      </p>
                    </div>
                  ))}
                <div className="border-t-2 border-green-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-green-900">Total Savings</span>
                    <span className="font-bold text-green-600 text-lg">
                      -{formatCurrency(totalDiscount)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Payment Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow"
          >
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Payment Schedule
            </h2>
            <div className="space-y-3">
              {feeData.paymentSchedule.map((payment, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-2 ${
                    payment.status === "pending"
                      ? "border-yellow-300 bg-yellow-50"
                      : "border-gray-200 bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {payment.description}
                      </p>
                      <p className="text-sm text-gray-600">Due: {payment.dueDate}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        payment.status === "pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {payment.status === "pending" ? "⏳ Pending" : "📅 Upcoming"}
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">
                    {formatCurrency(payment.amount)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Previous Payments */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow"
          >
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Payment History
            </h2>
            <div className="space-y-3">
              {feeData.previousPayments.map((payment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{payment.semester}</p>
                    <p className="text-sm text-gray-600">{payment.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      {formatCurrency(payment.amount)}
                    </p>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      ✓ Paid
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow sticky top-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Payment Summary
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center pb-3 border-b">
                <span className="text-gray-600">Semester Fee</span>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(totalAmount)}
                </span>
              </div>

              {totalDiscount > 0 && (
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-green-600">Discounts Applied</span>
                  <span className="font-semibold text-green-600">
                    -{formatCurrency(totalDiscount)}
                  </span>
                </div>
              )}

              <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300">
                <span className="text-lg font-bold text-gray-800">Total Payable</span>
                <span className="text-2xl font-bold text-primary">
                  {formatCurrency(finalAmount)}
                </span>
              </div>
            </div>

            <button
              onClick={proceedToPayment}
              className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center group"
            >
              <span>Proceed to Payment</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <div className="mt-4 space-y-2">
              <button
                onClick={() => window.print()}
                className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center"
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
                Print Estimate
              </button>

              <button
                onClick={() => navigate("/payments/history")}
                className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center"
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                View Full History
              </button>
            </div>
          </motion.div>

          {/* Important Dates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl shadow"
          >
            <h3 className="text-md font-semibold text-blue-900 mb-3 flex items-center">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Important Dates
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <div>
                  <p className="font-semibold text-blue-900">Last Date for Payment</p>
                  <p className="text-blue-700">March 31, 2026</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <div>
                  <p className="font-semibold text-blue-900">Late Fee Applicable From</p>
                  <p className="text-blue-700">April 1, 2026 (₹500/day)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">•</span>
                <div>
                  <p className="font-semibold text-blue-900">Semester Start Date</p>
                  <p className="text-blue-700">March 1, 2026</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="text-md font-semibold text-gray-800 mb-3">
              Accepted Payment Methods
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 border rounded-lg text-center hover:border-primary transition-colors">
                <svg
                  className="w-8 h-8 mx-auto mb-1 text-gray-600"
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
                <p className="text-xs text-gray-600">Cards</p>
              </div>
              <div className="p-3 border rounded-lg text-center hover:border-primary transition-colors">
                <svg
                  className="w-8 h-8 mx-auto mb-1 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-xs text-gray-600">UPI</p>
              </div>
              <div className="p-3 border rounded-lg text-center hover:border-primary transition-colors">
                <svg
                  className="w-8 h-8 mx-auto mb-1 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
                <p className="text-xs text-gray-600">Net Banking</p>
              </div>
            </div>
          </motion.div>

          {/* Help & Support */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl shadow border border-purple-100"
          >
            <h3 className="text-md font-semibold text-purple-900 mb-3 flex items-center">
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
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Need Help?
            </h3>
            <p className="text-sm text-purple-800 mb-3">
              Contact the accounts department for any queries.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-purple-900">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                accounts@university.edu
              </div>
              <div className="flex items-center text-purple-900">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 1234567890
              </div>
              <div className="flex items-center text-purple-900">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Mon-Fri: 9 AM - 5 PM
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}