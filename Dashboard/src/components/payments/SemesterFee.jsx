import { useState } from 'react';

export default function SemesterFee() {
  const [isLoading, setIsLoading] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const feeDetails = {
    amount: 5000,
    currency: '$',
    semester: 'Spring 2024',
    dueDate: 'March 15, 2024',
    status: 'pending' // 'pending', 'paid', 'overdue'
  };

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsPaid(true);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'overdue':
        return 'bg-red-500/20 text-red-400 border border-red-500/30';
      default:
        return 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl w-full max-w-md text-white">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-orange-400 text-2xl font-bold">
            Semester Fee
          </h2>

          <span
            className={`px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
              getStatusStyle(isPaid ? 'paid' : feeDetails.status)
            }`}
          >
            {isPaid
              ? 'Paid'
              : feeDetails.status.charAt(0).toUpperCase() +
                feeDetails.status.slice(1)}
          </span>
        </div>

        {/* Fee Info */}
        <div className="space-y-4 mb-6">

          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Semester</span>
            <span className="font-medium text-white">
              {feeDetails.semester}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Amount</span>
            <span className="text-3xl font-bold text-orange-400">
              {feeDetails.currency}
              {feeDetails.amount.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Due Date</span>
            <span className="font-medium text-white">
              {feeDetails.dueDate}
            </span>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Action Section */}
        {isPaid ? (
          <div className="flex items-center justify-center gap-2 text-green-400 font-semibold text-lg">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Payment Successful
          </div>
        ) : (
          <button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-semibold text-white 
                       bg-gradient-to-r from-orange-500 to-amber-500 
                       hover:from-orange-600 hover:to-amber-600
                       disabled:opacity-50 disabled:cursor-not-allowed
                       transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 
                       0 0 5.373 0 12h4zm2 
                       5.291A7.962 7.962 0 014 
                       12H0c0 3.042 1.135 5.824 
                       3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              'Pay Now'
            )}
          </button>
        )}

        {/* Footer Note */}
        {!isPaid && (
          <p className="mt-5 text-xs text-gray-400 text-center">
            🔒 Secure payment powered by your institution
          </p>
        )}

      </div>
    </div>
  );
}
