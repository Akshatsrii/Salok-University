export default function PaymentSuccess() {
  return (
    <div className="bg-[#0f172a] text-gray-200 rounded-2xl shadow-2xl border border-green-500/20 max-w-lg mx-auto p-8 text-center">

      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-500/20 border-2 border-green-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-4xl text-green-400">✓</span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-green-400 mb-3">
        Payment Successful 🎉
      </h2>

      {/* Message */}
      <p className="text-sm text-gray-400 mb-6">
        Your payment has been processed successfully.
        A confirmation receipt has been generated.
      </p>

      {/* Divider */}
      <div className="border-t border-gray-700 mb-6"></div>

      {/* Action Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-semibold transition-all active:scale-95 shadow-lg">
        Go to Dashboard
      </button>

      {/* Extra Info */}
      <p className="text-xs text-gray-500 mt-4">
        If you have any issues, please contact support.
      </p>
    </div>
  );
}
