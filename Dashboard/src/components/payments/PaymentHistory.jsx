import { useState, useMemo } from "react";

export default function PaymentHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const paymentData = [
    {
      id: "PAY2024001",
      date: "2024-02-05",
      purpose: "Semester Fee",
      category: "Academic",
      amount: 38500,
      status: "paid",
      method: "Online Banking",
    },
    {
      id: "PAY2024006",
      date: "2024-01-10",
      purpose: "Sports Fee",
      category: "Sports",
      amount: 1500,
      status: "failed",
      method: "UPI",
    },
  ];

  const statusConfig = {
    paid: {
      label: "Paid",
      bg: "bg-green-500/20",
      text: "text-green-400",
      icon: "✓",
    },
    failed: {
      label: "Failed",
      bg: "bg-red-500/20",
      text: "text-red-400",
      icon: "✗",
    },
  };

  const filteredPayments = useMemo(() => {
    let filtered = [...paymentData];

    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          p.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== "all") {
      filtered = filtered.filter((p) => p.status === filterStatus);
    }

    return filtered;
  }, [searchTerm, filterStatus]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-[#0f172a] text-gray-200 rounded-2xl shadow-2xl border border-orange-500/20">

      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-orange-400">
              Payment History
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              View all your transactions
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all shadow-md hover:scale-105 text-sm">
            📥 Export CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 border-b border-gray-700 space-y-4">
        <input
          type="text"
          placeholder="Search by purpose or ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-[#1e293b] border border-gray-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          <option value="paid">Paid</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {filteredPayments.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <div className="text-4xl mb-3">💳</div>
            No payments found
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-[#1e293b] border-b border-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-gray-400">Date</th>
                <th className="px-4 py-3 text-left text-gray-400">Payment ID</th>
                <th className="px-4 py-3 text-left text-gray-400">Purpose</th>
                <th className="px-4 py-3 text-right text-gray-400">Amount</th>
                <th className="px-4 py-3 text-center text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-gray-800 hover:bg-[#1e293b] transition-colors"
                >
                  <td className="px-4 py-3">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-400">
                    {payment.id}
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <p className="font-medium">{payment.purpose}</p>
                      <p className="text-xs text-gray-500">
                        {payment.method}
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold">
                    {formatCurrency(payment.amount)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig[payment.status].bg} ${statusConfig[payment.status].text}`}
                    >
                      {statusConfig[payment.status].icon}{" "}
                      {statusConfig[payment.status].label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
