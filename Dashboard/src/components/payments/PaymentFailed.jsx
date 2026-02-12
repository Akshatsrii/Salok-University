export default function PaymentFailed() {
  return (
    <div className="bg-[#0f172a] text-gray-200 p-8 rounded-2xl shadow-2xl border border-red-500/30 text-center max-w-lg">

      {/* Icon */}
      <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/40">
        <span className="text-4xl text-red-400">❌</span>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-red-400 mb-3">
        Payment Failed
      </h2>

      {/* Message */}
      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        Unfortunately, your payment could not be processed.
        Please try again or contact support if the issue persists.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg transition-all shadow-lg hover:scale-105">
          Try Again
        </button>

        <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-5 py-2.5 rounded-lg transition-all">
          Go to Dashboard
        </button>
      </div>

      {/* Help Text */}
      <div className="mt-6 text-xs text-gray-500 border-t border-gray-700 pt-4">
        If money was deducted, it will be refunded within 5-7 working days.
      </div>

    </div>
  );
}
