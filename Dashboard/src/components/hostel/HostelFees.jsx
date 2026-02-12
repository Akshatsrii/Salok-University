import { useState } from 'react';

export default function HostelFees() {
  const [selectedSemester, setSelectedSemester] = useState('current');
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);

  const feeData = {
    current: {
      semester: 'Spring 2024',
      academicYear: '2023-24',
      totalAmount: 45000,
      paidAmount: 45000,
      pendingAmount: 0,
      dueDate: '2024-01-15',
      paidDate: '2024-01-10',
      status: 'paid',
      transactionId: 'TXN202401100045',
      paymentMode: 'Online',
      breakdown: [
        { item: 'Room Rent', amount: 20000, icon: '🏠' },
        { item: 'Mess Charges', amount: 18000, icon: '🍽️' },
        { item: 'Electricity', amount: 3000, icon: '💡' },
        { item: 'Water Charges', amount: 1500, icon: '💧' },
        { item: 'Maintenance', amount: 2000, icon: '🔧' },
        { item: 'Security Deposit (Refundable)', amount: 0, icon: '🛡️', note: 'Already paid' }
      ]
    }
  };

  const currentFee = feeData.current;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleDownloadReceipt = () => {
    alert(`Downloading receipt for Transaction ID: ${currentFee.transactionId}`);
  };

  return (
    <div className="bg-[#0f172a] text-gray-200 rounded-xl shadow-2xl border border-orange-500/20">

      {/* Header */}
      <div className="p-6 border-b border-orange-500/20 bg-gradient-to-r from-[#1e293b] to-[#0f172a]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-orange-400">Hostel Fees</h2>
            <p className="text-sm text-gray-400 mt-1">
              {currentFee.semester} • {currentFee.academicYear}
            </p>
          </div>

          <div className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-medium">
            ✓ Paid
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-[#1e293b] border border-orange-500/20 rounded-lg p-5 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
            <p className="text-sm text-gray-400 mb-1">Total Amount</p>
            <p className="text-2xl font-bold text-orange-400">
              {formatCurrency(currentFee.totalAmount)}
            </p>
          </div>

          <div className="bg-[#1e293b] border border-green-500/20 rounded-lg p-5">
            <p className="text-sm text-gray-400 mb-1">Paid Amount</p>
            <p className="text-2xl font-bold text-green-400">
              {formatCurrency(currentFee.paidAmount)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Paid on {formatDate(currentFee.paidDate)}
            </p>
          </div>

          <div className="bg-[#1e293b] border border-gray-700 rounded-lg p-5">
            <p className="text-sm text-gray-400 mb-1">Pending Amount</p>
            <p className="text-2xl font-bold text-gray-300">
              {formatCurrency(currentFee.pendingAmount)}
            </p>
          </div>
        </div>

        {/* Fee Breakdown */}
        <div className="border border-orange-500/20 rounded-lg overflow-hidden">

          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="w-full flex justify-between items-center p-4 bg-[#1e293b] hover:bg-[#263245] transition-all"
          >
            <h3 className="font-semibold text-orange-400 flex items-center gap-2">
              📊 Fee Breakdown
            </h3>
            <span className="text-gray-400">
              {showBreakdown ? '▲' : '▼'}
            </span>
          </button>

          {showBreakdown && (
            <div className="p-4 space-y-3 bg-[#0f172a]">
              {currentFee.breakdown.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 rounded-lg bg-[#1e293b] border border-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-gray-200 font-medium">{item.item}</p>
                      {item.note && (
                        <p className="text-xs text-gray-500">{item.note}</p>
                      )}
                    </div>
                  </div>
                  <span className="font-semibold text-orange-400">
                    {item.amount > 0 ? formatCurrency(item.amount) : 'Paid'}
                  </span>
                </div>
              ))}

              <div className="flex justify-between pt-3 border-t border-orange-500/20">
                <span className="font-bold text-gray-200">Total</span>
                <span className="font-bold text-orange-400 text-lg">
                  {formatCurrency(currentFee.totalAmount)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Payment Details */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-5">
          <h3 className="font-semibold text-green-400 mb-3">
            ✓ Payment Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-400">Transaction ID</p>
              <p className="text-gray-200 font-mono">{currentFee.transactionId}</p>
            </div>
            <div>
              <p className="text-gray-400">Payment Mode</p>
              <p className="text-gray-200">{currentFee.paymentMode}</p>
            </div>
            <div>
              <p className="text-gray-400">Payment Date</p>
              <p className="text-gray-200">{formatDate(currentFee.paidDate)}</p>
            </div>
            <div>
              <p className="text-gray-400">Amount Paid</p>
              <p className="text-green-400 font-semibold">
                {formatCurrency(currentFee.paidAmount)}
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleDownloadReceipt}
          className="w-full flex justify-center items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-orange-500/20"
        >
          📄 Download Receipt
        </button>

      </div>
    </div>
  );
}
