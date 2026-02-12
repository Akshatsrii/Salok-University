import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

/* ---------- Lazy Imports ---------- */
const SemesterFeeEstimate = lazy(() => import("../components/payments/SemesterFeeEstimate"));
const SemesterFee = lazy(() => import("../components/payments/SemesterFee"));
const PaymentHistory = lazy(() => import("../components/payments/PaymentHistory"));
const PaymentReceipt = lazy(() => import("../components/payments/PaymentReceipt"));
const PaymentSuccess = lazy(() => import("../components/payments/PaymentSuccess"));
const PaymentFailed = lazy(() => import("../components/payments/PaymentFailed"));

/* ---------- Loading ---------- */
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-black text-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto"></div>
      <p className="mt-4 text-orange-400 font-medium">
        Processing payment information...
      </p>
    </div>
  </div>
);

/* ---------- Error ---------- */
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="max-w-md w-full bg-gray-900 border border-orange-500 rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-orange-400 mb-3">
        Payment Error
      </h2>

      <p className="text-gray-300 mb-4">
        Something went wrong while processing your request.
      </p>

      <div className="bg-orange-900/30 border border-orange-500 rounded-lg p-3 mb-6">
        <p className="text-sm text-orange-300 font-mono">
          {error.message}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={resetErrorBoundary}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
        >
          Try Again
        </button>

        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition"
        >
          Dashboard
        </button>
      </div>
    </div>
  </div>
);

/* ---------- Layout ---------- */
const PaymentLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Header */}
      <div className="bg-gray-900 border-b border-orange-500 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold">
              ₹
            </div>
            <h1 className="text-xl font-bold text-orange-400">
              Fee Payment Portal
            </h1>
          </div>

          <span className="text-sm text-gray-400">
            🔒 Secure Payment
          </span>

        </div>
      </div>

      {/* Main */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-orange-500">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
          <p>© 2026 University Payment System</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-orange-400 transition">Help</a>
            <a href="#" className="hover:text-orange-400 transition">Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

/* ---------- Protected Route ---------- */
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

/* ---------- Routes ---------- */
export default function ContinuityPayment() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<LoadingFallback />}>
        <PaymentLayout>
          <Routes>
            <Route index element={<Navigate to="estimate" replace />} />

            <Route path="estimate" element={
              <ProtectedRoute><SemesterFeeEstimate /></ProtectedRoute>
            } />

            <Route path="fee" element={
              <ProtectedRoute><SemesterFee /></ProtectedRoute>
            } />

            <Route path="history" element={
              <ProtectedRoute><PaymentHistory /></ProtectedRoute>
            } />

            <Route path="receipt/:transactionId" element={
              <ProtectedRoute><PaymentReceipt /></ProtectedRoute>
            } />

            <Route path="success" element={
              <ProtectedRoute><PaymentSuccess /></ProtectedRoute>
            } />

            <Route path="failed" element={
              <ProtectedRoute><PaymentFailed /></ProtectedRoute>
            } />

            <Route path="*" element={<Navigate to="estimate" replace />} />
          </Routes>
        </PaymentLayout>
      </Suspense>
    </ErrorBoundary>
  );
}
