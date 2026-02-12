import { useState, useRef } from "react";

export default function PaymentReceipt() {
  const [selectedReceipt, setSelectedReceipt] = useState(null);
  const [searchId, setSearchId] = useState("");
  const receiptRef = useRef(null);

  const receiptData = {
    receiptNumber: "RCP/2024/0145",
    date: "2024-02-05",
    student: {
      name: "Rahul Kumar",
      rollNo: "CS21B1025",
      course: "B.Tech Computer Science",
      semester: "Spring 2024",
    },
    payment: {
      transactionId: "TXN202512345",
      method: "Online Banking",
      paidDate: "2024-02-05T14:35:22",
      totalAmount: 38500,
      status: "paid",
    },
    breakdown: [
      { item: "Tuition Fee", amount: 30000 },
      { item: "Lab Fee", amount: 5000 },
      { item: "Library Fee", amount: 2000 },
      { item: "Exam Fee", amount: 1500 },
    ],
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleString("en-IN");

  const handleDownload = () => {
    alert("Downloading receipt as PDF...");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#0f172a] text-gray-200 rounded-2xl shadow-2xl border border-orange-500/20 max-w-4xl mx-auto">

      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-orange-400">
          Payment Receipt
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          View and download payment receipts
        </p>

        {/* Search */}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Enter Transaction ID..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="flex-1 bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500"
          />
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all">
            Search
          </button>
        </div>
      </div>

      {/* Receipt Card */}
      <div className="p-6">
        <div
          ref={receiptRef}
          className="bg-[#1e293b] rounded-xl border border-gray-700 overflow-hidden"
        >
          {/* Receipt Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl font-bold">
                  ABC College of Engineering
                </h1>
                <p className="text-sm opacity-90">
                  Jaipur, Rajasthan
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs">RECEIPT</p>
                <p className="text-lg font-bold">
                  {receiptData.receiptNumber}
                </p>
              </div>
            </div>
          </div>

          {/* Receipt Body */}
          <div className="p-6 space-y-6">

            {/* Student & Payment Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0f172a] p-4 rounded-lg border border-gray-700">
                <h3 className="text-orange-400 font-semibold mb-3">
                  Student Details
                </h3>
                <p>Name: {receiptData.student.name}</p>
                <p>Roll No: {receiptData.student.rollNo}</p>
                <p>Course: {receiptData.student.course}</p>
                <p>Semester: {receiptData.student.semester}</p>
              </div>

              <div className="bg-[#0f172a] p-4 rounded-lg border border-gray-700">
                <h3 className="text-orange-400 font-semibold mb-3">
                  Payment Details
                </h3>
                <p>Transaction ID:</p>
                <p className="font-mono text-sm text-gray-400 mb-2">
                  {receiptData.payment.transactionId}
                </p>
                <p>Mode: {receiptData.payment.method}</p>
                <p>Date: {formatDate(receiptData.payment.paidDate)}</p>
              </div>
            </div>

            {/* Breakdown */}
            <div>
              <h3 className="text-orange-400 font-semibold mb-3">
                Fee Breakdown
              </h3>

              <table className="w-full text-sm border border-gray-700">
                <thead>
                  <tr className="bg-[#0f172a] text-gray-400">
                    <th className="px-4 py-2 text-left">#</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {receiptData.breakdown.map((item, i) => (
                    <tr
                      key={i}
                      className="border-t border-gray-700 hover:bg-[#0f172a]"
                    >
                      <td className="px-4 py-2">{i + 1}</td>
                      <td className="px-4 py-2">{item.item}</td>
                      <td className="px-4 py-2 text-right font-medium">
                        {formatCurrency(item.amount)}
                      </td>
                    </tr>
                  ))}

                  <tr className="border-t-2 border-orange-500 bg-orange-500/10">
                    <td colSpan="2" className="px-4 py-3 font-bold">
                      Total
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-orange-400">
                      {formatCurrency(receiptData.payment.totalAmount)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Payment Status */}
            <div className="flex justify-center">
              <div className="bg-green-500/20 border border-green-500 rounded-lg px-6 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-green-400">
                    PAYMENT SUCCESSFUL
                  </p>
                  <p className="text-xs text-green-300">
                    Transaction completed
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleDownload}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-medium transition-all"
          >
            📥 Download PDF
          </button>
          <button
            onClick={handlePrint}
            className="flex-1 bg-gray-700 hover:bg-gray-800 text-white px-5 py-3 rounded-lg font-medium transition-all"
          >
            🖨️ Print
          </button>
        </div>
      </div>
    </div>
  );
}
