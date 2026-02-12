import React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const MiscPayment = lazy(() => import("../components/payments/MiscPayment"));

/* ---------------- LOADER ---------------- */
function PaymentLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mb-4"></div>
        <h3 className="text-lg font-semibold mb-2 text-orange-400">
          Loading Payment Gateway
        </h3>
        <p className="text-sm text-gray-400">
          Please wait while we prepare your secure payment...
        </p>
      </div>
    </div>
  );
}

/* ---------------- ERROR ---------------- */
function PaymentError({ error, resetError }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 text-white">
      <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8 text-center border border-red-500">
        <h2 className="text-2xl font-bold text-red-400 mb-2">
          Payment Error
        </h2>

        <p className="text-gray-400 mb-6">
          We encountered an issue loading the payment page.
        </p>

        {error && (
          <div className="bg-red-900/40 border border-red-500 rounded-lg p-3 mb-6 text-left">
            <p className="text-xs text-red-300 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={resetError}
            className="flex-1 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Try Again
          </button>

          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- LAYOUT ---------------- */
function PaymentLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSecureContext, setIsSecureContext] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isSecure =
        window.location.protocol === "https:" ||
        window.location.hostname === "localhost";
      setIsSecureContext(isSecure);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (location.state?.paymentInProgress) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () =>
      window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [location.state]);

  if (!isSecureContext) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="bg-gray-900 p-8 rounded-xl text-center border border-yellow-500">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">
            Insecure Connection
          </h2>
          <p className="text-gray-400 mb-6">
            Please access this page via HTTPS for secure payment.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Secure Header */}
      <div className="bg-orange-600 py-2 text-center text-sm font-medium">
        🔒 Secure Payment Gateway
      </div>

      <div className="container mx-auto px-4 py-8">
        {children}
      </div>

      {/* Footer */}
      <div className="bg-gray-900 border-t border-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <p>PCI DSS Compliant • 256-bit SSL Encryption • Your data is never stored</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MAIN ---------------- */
export default function MiscellaneousPayment() {
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
  };

  if (error) {
    return <PaymentError error={error} resetError={resetError} />;
  }

  return (
    <PaymentLayout>
      <Suspense fallback={<PaymentLoader />}>
        <ErrorBoundary onError={setError}>
          <MiscPayment />
        </ErrorBoundary>
      </Suspense>
    </PaymentLayout>
  );
}

/* ---------------- ERROR BOUNDARY ---------------- */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Payment component error:", error, errorInfo);
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
