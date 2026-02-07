export default function PaymentSuccess() {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center max-w-lg">
      <h2 className="text-2xl font-semibold text-green-600 mb-3">
        Payment Successful 🎉
      </h2>

      <p className="text-sm text-gray-700 mb-4">
        Your payment has been processed successfully.
      </p>

      <button className="bg-primary text-white px-4 py-2 rounded">
        Go to Dashboard
      </button>
    </div>
  );
}


