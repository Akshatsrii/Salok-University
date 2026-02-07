export default function PaymentFailed() {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center max-w-lg">
      <h2 className="text-2xl font-semibold text-red-600 mb-3">
        Payment Failed ❌
      </h2>

      <p className="text-sm text-gray-700 mb-4">
        Unfortunately, your payment could not be processed.
        Please try again or contact support if the issue persists.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-primary text-white px-4 py-2 rounded">
          Try Again
        </button>
        <button className="border px-4 py-2 rounded">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
