import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function SemesterFeeEstimate() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [feeData, setFeeData] = useState(null);
  const [showBreakdown, setShowBreakdown] = useState(true);

  const mockFeeData = {
    student: {
      name: "John Doe",
      rollNumber: "2024001",
      course: "B.Tech - Computer Science",
      semester: "5th Semester",
      academicYear: "2025-26",
    },
    feeStructure: {
      tuition: { label: "Tuition Fee", amount: 45000, icon: "📚" },
      development: { label: "Development Fee", amount: 8000, icon: "🏫" },
      library: { label: "Library Fee", amount: 2500, icon: "📖" },
      lab: { label: "Laboratory Fee", amount: 6500, icon: "🔬" },
      sports: { label: "Sports & Recreation", amount: 1500, icon: "⚽" },
      exam: { label: "Examination Fee", amount: 3500, icon: "📝" },
      technology: { label: "Technology Fee", amount: 2500, icon: "💻" },
      student_welfare: { label: "Student Welfare", amount: 1000, icon: "🤝" },
      medical: { label: "Medical & Insurance", amount: 1550, icon: "🏥" },
      miscellaneous: { label: "Miscellaneous", amount: 5000, icon: "📋" },
    },
    discounts: {
      merit: { label: "Merit Scholarship", eligible: true, amount: 7705 },
      earlyBird: { label: "Early Payment Discount", eligible: true, amount: 2311 },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((res) => setTimeout(res, 1000));
      setFeeData(mockFeeData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const calculateTotal = () =>
    Object.values(feeData?.feeStructure || {}).reduce(
      (sum, item) => sum + item.amount,
      0
    );

  const calculateDiscount = () =>
    Object.values(feeData?.discounts || {})
      .filter((d) => d.eligible)
      .reduce((sum, d) => sum + d.amount, 0);

  const totalAmount = calculateTotal();
  const totalDiscount = calculateDiscount();
  const finalAmount = totalAmount - totalDiscount;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const proceedToPayment = () => {
    navigate("/payments/fee", {
      state: { amount: finalAmount },
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-black text-white">
        <div className="text-center">
          <div className="animate-spin h-14 w-14 border-b-4 border-orange-500 rounded-full mx-auto mb-4"></div>
          <p className="text-orange-400 font-medium">
            Loading fee details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 text-white">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-black to-gray-900 border border-orange-500 p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-orange-400">
          Semester Fee Estimate
        </h1>
        <p className="text-gray-400 mt-1">
          {feeData.student.academicYear}
        </p>

        <div className="mt-6 bg-orange-500/20 border border-orange-500 p-4 rounded-lg w-fit">
          <p className="text-sm text-orange-300">Total Payable</p>
          <p className="text-3xl font-bold text-orange-400">
            {formatCurrency(finalAmount)}
          </p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 space-y-6">

          {/* Student Info */}
          <div className="bg-gray-900 border border-orange-500 p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold text-orange-400 mb-4">
              Student Details
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              {Object.entries(feeData.student).map(([key, value]) => (
                <div key={key}>
                  <p className="text-gray-400 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </p>
                  <p className="font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fee Breakdown */}
          <div className="bg-gray-900 border border-orange-500 p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-orange-400">
                Fee Breakdown
              </h2>
              <button
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="text-orange-400 text-sm font-medium"
              >
                {showBreakdown ? "Hide" : "Show"}
              </button>
            </div>

            {showBreakdown && (
              <div className="space-y-3">
                {Object.values(feeData.feeStructure).map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 bg-black rounded-lg border border-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <span className="font-semibold">
                      {formatCurrency(item.amount)}
                    </span>
                  </div>
                ))}

                <div className="border-t border-orange-500 pt-3 flex justify-between font-bold">
                  <span>Subtotal</span>
                  <span>{formatCurrency(totalAmount)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Discounts */}
          {totalDiscount > 0 && (
            <div className="bg-black border-l-4 border-orange-500 p-6 rounded-r-xl shadow">
              <h3 className="font-semibold text-orange-400 mb-3">
                Discounts Applied
              </h3>

              <div className="space-y-2">
                {Object.values(feeData.discounts)
                  .filter((d) => d.eligible)
                  .map((d, i) => (
                    <div
                      key={i}
                      className="flex justify-between bg-gray-900 p-3 rounded-lg"
                    >
                      <span>{d.label}</span>
                      <span className="text-orange-400 font-semibold">
                        -{formatCurrency(d.amount)}
                      </span>
                    </div>
                  ))}

                <div className="border-t border-orange-500 pt-3 flex justify-between font-bold text-orange-400">
                  <span>Total Savings</span>
                  <span>-{formatCurrency(totalDiscount)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-gray-900 border border-orange-500 p-6 rounded-xl shadow sticky top-6 h-fit">
          <h3 className="font-semibold text-orange-400 mb-4">
            Payment Summary
          </h3>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>

            {totalDiscount > 0 && (
              <div className="flex justify-between text-orange-400">
                <span>Discount</span>
                <span>-{formatCurrency(totalDiscount)}</span>
              </div>
            )}

            <div className="border-t border-orange-500 pt-3 flex justify-between font-bold text-lg">
              <span>Total Payable</span>
              <span className="text-orange-400">
                {formatCurrency(finalAmount)}
              </span>
            </div>
          </div>

          <button
            onClick={proceedToPayment}
            className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Proceed to Payment
          </button>
        </div>

      </div>
    </div>
  );
}
