import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Lazy load components
const SemesterFeeEstimate = lazy(() => import("../components/payments/SemesterFeeEstimate"));
const SemesterFee = lazy(() => import("../components/payments/SemesterFee"));
const PaymentHistory = lazy(() => import("../components/payments/PaymentHistory"));
const PaymentReceipt = lazy(() => import("../components/payments/PaymentReceipt"));
const PaymentSuccess = lazy(() => import("../components/payments/PaymentSuccess"));
const PaymentFailed = lazy(() => import("../components/payments/PaymentFailed"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto"></div>
        <svg
          className="w-8 h-8 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="text-gray-600 font-medium mt-4">Processing payment information...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="text-red-500 mb-4">
        <svg
          className="w-20 h-20 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Error</h2>
      <p className="text-gray-600 mb-6">
        We encountered an issue processing your payment request. Please try again.
      </p>
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-red-700 font-mono">{error.message}</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={resetErrorBoundary}
          className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  </div>
);

// Payment Layout wrapper
const PaymentLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Progress Indicator - can be enhanced based on current route */}
      <div className="bg-white shadow-sm border-b print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h1 className="text-xl font-bold text-gray-800">Fee Payment Portal</h1>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto print:hidden">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2026 University Payment System. All rights reserved.</p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Help & Support
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Payment Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Protected route wrapper
const ProtectedRoute = ({ children, requiresPayment = false }) => {
  // Replace with actual authentication and payment verification logic
  const isAuthenticated = true; // Check user session
  const hasActiveSession = true; // Check if user has started a payment flow

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (requiresPayment && !hasActiveSession) {
    return <Navigate to="/payments/estimate" replace />;
  }

  return children;
};

// Route configuration
const paymentRoutes = [
  {
    path: "estimate",
    element: <SemesterFeeEstimate />,
    requiresAuth: true,
    requiresPayment: false,
  },
  {
    path: "fee",
    element: <SemesterFee />,
    requiresAuth: true,
    requiresPayment: false,
  },
  {
    path: "history",
    element: <PaymentHistory />,
    requiresAuth: true,
    requiresPayment: false,
  },
  {
    path: "receipt/:transactionId",
    element: <PaymentReceipt />,
    requiresAuth: true,
    requiresPayment: false,
  },
  {
    path: "success",
    element: <PaymentSuccess />,
    requiresAuth: true,
    requiresPayment: true,
  },
  {
    path: "failed",
    element: <PaymentFailed />,
    requiresAuth: true,
    requiresPayment: false,
  },
];

export default function ContinuityPayment() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<LoadingFallback />}>
        <PaymentLayout>
          <Routes>
            {/* Redirect base path to estimate */}
            <Route index element={<Navigate to="estimate" replace />} />

            {/* Dynamic route rendering */}
            {paymentRoutes.map(({ path, element, requiresAuth, requiresPayment }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute
                    requiresAuth={requiresAuth}
                    requiresPayment={requiresPayment}
                  >
                    {element}
                  </ProtectedRoute>
                }
              />
            ))}

            {/* 404 catch-all */}
            <Route path="*" element={<Navigate to="estimate" replace />} />
          </Routes>
        </PaymentLayout>
      </Suspense>
    </ErrorBoundary>
  );
}