import { useState } from 'react';

export default function HostelFees() {
  const [selectedSemester, setSelectedSemester] = useState('current');
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showPaymentHistory, setShowPaymentHistory] = useState(false);

  // Sample fee data - replace with API call
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
    },
    previous: [
      {
        semester: 'Fall 2023',
        academicYear: '2023-24',
        totalAmount: 45000,
        paidAmount: 45000,
        status: 'paid',
        paidDate: '2023-08-05',
        transactionId: 'TXN202308050032'
      },
      {
        semester: 'Spring 2023',
        academicYear: '2022-23',
        totalAmount: 42000,
        paidAmount: 42000,
        status: 'paid',
        paidDate: '2023-01-08',
        transactionId: 'TXN202301080021'
      }
    ]
  };

  const paymentHistory = [
    {
      id: 1,
      date: '2024-01-10',
      amount: 45000,
      type: 'Hostel Fee',
      semester: 'Spring 2024',
      method: 'Online Banking',
      transactionId: 'TXN202401100045',
      status: 'success'
    },
    {
      id: 2,
      date: '2023-12-15',
      amount: 5000,
      type: 'Mess Advance',
      semester: 'Spring 2024',
      method: 'UPI',
      transactionId: 'TXN202312150019',
      status: 'success'
    },
    {
      id: 3,
      date: '2023-08-05',
      amount: 45000,
      type: 'Hostel Fee',
      semester: 'Fall 2023',
      method: 'Debit Card',
      transactionId: 'TXN202308050032',
      status: 'success'
    }
  ];

  const upcomingDues = [
    {
      id: 1,
      description: 'Mess Fee - March 2024',
      amount: 6000,
      dueDate: '2024-03-01',
      priority: 'medium'
    },
    {
      id: 2,
      description: 'Electricity Bill - February',
      amount: 850,
      dueDate: '2024-02-25',
      priority: 'high'
    }
  ];

  const currentFee = feeData.current;
  const isFullyPaid = currentFee.paidAmount >= currentFee.totalAmount;
  const pendingPercentage = ((currentFee.totalAmount - currentFee.paidAmount) / currentFee.totalAmount) * 100;

  const statusConfig = {
    paid: { 
      label: 'Paid', 
      color: 'text-green-600', 
      bg: 'bg-green-100',
      border: 'border-green-200',
      icon: '✓' 
    },
    partial: { 
      label: 'Partially Paid', 
      color: 'text-yellow-600', 
      bg: 'bg-yellow-100',
      border: 'border-yellow-200',
      icon: '⏳' 
    },
    pending: { 
      label: 'Pending', 
      color: 'text-red-600', 
      bg: 'bg-red-100',
      border: 'border-red-200',
      icon: '⚠' 
    },
    overdue: { 
      label: 'Overdue', 
      color: 'text-red-700', 
      bg: 'bg-red-100',
      border: 'border-red-300',
      icon: '🚨' 
    }
  };

  const handleDownloadReceipt = () => {
    // Simulate receipt download
    alert(`Downloading receipt for Transaction ID: ${currentFee.transactionId}`);
    // In production, this would trigger actual PDF download
    // window.open(`/api/receipts/${currentFee.transactionId}`, '_blank');
  };

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

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-primary">Hostel Fees</h2>
            <p className="text-sm text-gray-500 mt-1">
              {currentFee.semester} • {currentFee.academicYear}
            </p>
          </div>
          <div className={`px-4 py-2 rounded-full text-sm font-medium border-2 ${
            statusConfig[currentFee.status].bg
          } ${statusConfig[currentFee.status].color} ${statusConfig[currentFee.status].border}`}>
            <span className="mr-1">{statusConfig[currentFee.status].icon}</span>
            {statusConfig[currentFee.status].label}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Fee Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
            <p className="text-xs text-blue-600 font-medium mb-1">Total Amount</p>
            <p className="text-2xl font-bold text-blue-900">
              {formatCurrency(currentFee.totalAmount)}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
            <p className="text-xs text-green-600 font-medium mb-1">Paid Amount</p>
            <p className="text-2xl font-bold text-green-900">
              {formatCurrency(currentFee.paidAmount)}
            </p>
            {currentFee.paidDate && (
              <p className="text-xs text-green-600 mt-1">
                Paid on {formatDate(currentFee.paidDate)}
              </p>
            )}
          </div>

          <div className={`bg-gradient-to-br ${
            currentFee.pendingAmount > 0 ? 'from-red-50 to-red-100' : 'from-gray-50 to-gray-100'
          } rounded-lg p-4 border ${
            currentFee.pendingAmount > 0 ? 'border-red-200' : 'border-gray-200'
          }`}>
            <p className={`text-xs font-medium mb-1 ${
              currentFee.pendingAmount > 0 ? 'text-red-600' : 'text-gray-600'
            }`}>
              Pending Amount
            </p>
            <p className={`text-2xl font-bold ${
              currentFee.pendingAmount > 0 ? 'text-red-900' : 'text-gray-900'
            }`}>
              {formatCurrency(currentFee.pendingAmount)}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        {!isFullyPaid && (
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Payment Progress</span>
              <span className="text-sm font-semibold text-gray-900">
                {Math.round(100 - pendingPercentage)}% Paid
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${100 - pendingPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Fee Breakdown */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <span>📊</span> Fee Breakdown
            </h3>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                showBreakdown ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showBreakdown && (
            <div className="p-4 space-y-3 animate-fadeIn">
              {currentFee.breakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900">{item.item}</p>
                      {item.note && (
                        <p className="text-xs text-gray-500">{item.note}</p>
                      )}
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {item.amount > 0 ? formatCurrency(item.amount) : 'Paid'}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-3 border-t-2 border-gray-300">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-primary text-lg">
                  {formatCurrency(currentFee.totalAmount)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Upcoming Dues */}
        {upcomingDues.length > 0 && (
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>📅</span> Upcoming Dues
            </h3>
            <div className="space-y-3">
              {upcomingDues.map((due) => {
                const daysLeft = getDaysUntilDue(due.dueDate);
                const isUrgent = daysLeft <= 5;
                
                return (
                  <div
                    key={due.id}
                    className={`p-3 rounded-lg border-l-4 ${
                      isUrgent
                        ? 'bg-red-50 border-red-500'
                        : 'bg-yellow-50 border-yellow-500'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{due.description}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Due: {formatDate(due.dueDate)}
                          <span className={`ml-2 ${isUrgent ? 'text-red-600' : 'text-yellow-600'} font-medium`}>
                            ({daysLeft} {daysLeft === 1 ? 'day' : 'days'} left)
                          </span>
                        </p>
                      </div>
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(due.amount)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Payment Details */}
        {currentFee.status === 'paid' && (
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
              <span>✓</span> Payment Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-green-700 font-medium">Transaction ID</p>
                <p className="text-green-900 font-mono">{currentFee.transactionId}</p>
              </div>
              <div>
                <p className="text-green-700 font-medium">Payment Mode</p>
                <p className="text-green-900">{currentFee.paymentMode}</p>
              </div>
              <div>
                <p className="text-green-700 font-medium">Payment Date</p>
                <p className="text-green-900">{formatDate(currentFee.paidDate)}</p>
              </div>
              <div>
                <p className="text-green-700 font-medium">Amount Paid</p>
                <p className="text-green-900 font-semibold">{formatCurrency(currentFee.paidAmount)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Payment History */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setShowPaymentHistory(!showPaymentHistory)}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <span>🕐</span> Payment History
            </h3>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform ${
                showPaymentHistory ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showPaymentHistory && (
            <div className="p-4 space-y-3 animate-fadeIn">
              {paymentHistory.map((payment) => (
                <div key={payment.id} className="flex items-start justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{payment.type}</span>
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                        {payment.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{payment.semester}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(payment.date)} • {payment.method}
                    </p>
                    <p className="text-xs text-gray-400 font-mono mt-1">{payment.transactionId}</p>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {formatCurrency(payment.amount)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleDownloadReceipt}
            disabled={currentFee.status !== 'paid'}
            className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
              currentFee.status === 'paid'
                ? 'bg-primary text-white hover:bg-primary/90 active:scale-95 shadow-sm'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <span>📄</span>
            Download Receipt
          </button>

          {currentFee.pendingAmount > 0 && (
            <button
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 active:scale-95 transition-all shadow-sm"
            >
              <span>💳</span>
              Pay Now
            </button>
          )}
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex gap-2">
            <span className="text-blue-600 text-lg">ℹ️</span>
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Need Help?</p>
              <p className="text-blue-700">
                For fee-related queries, contact the Accounts Office at{' '}
                <a href="tel:+919876543210" className="underline hover:text-blue-900">
                  +91 98765 43210
                </a>{' '}
                or email{' '}
                <a href="mailto:accounts@college.edu" className="underline hover:text-blue-900">
                  accounts@college.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}