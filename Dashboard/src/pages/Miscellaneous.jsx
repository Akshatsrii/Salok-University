import React from "react";
import { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Lazy load the payment component
const MiscPayment = lazy(() => import("../components/payments/MiscPayment"));

// Loading component for payment page
function PaymentLoader() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-primary mb-4"></div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Payment Gateway</h3>
        <p className="text-sm text-gray-600">Please wait while we prepare your secure payment...</p>
        
        {/* Security badges */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Error boundary fallback for payment failures
function PaymentError({ error, resetError }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Error</h2>
        <p className="text-gray-600 mb-6">
          We encountered an issue loading the payment page. This could be due to a temporary connection issue.
        </p>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 text-left">
            <p className="text-xs text-red-800 font-mono break-all">{error.message}</p>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={resetError}
            className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-medium
                     hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 
                     focus:ring-primary focus:ring-offset-2"
          >
            Try Again
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium
                     hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 
                     focus:ring-gray-500 focus:ring-offset-2"
          >
            Go Back
          </button>
        </div>
        
        <p className="mt-6 text-sm text-gray-500">
          Need help? Contact support at{" "}
          <a href="mailto:payments@university.edu" className="text-primary hover:underline">
            payments@university.edu
          </a>
        </p>
      </div>
    </div>
  );
}

// Payment layout wrapper with security features
function PaymentLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSecureContext, setIsSecureContext] = useState(true);

  // Check if connection is secure (optional)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSecure = window.location.protocol === 'https:' || 
                      window.location.hostname === 'localhost';
      setIsSecureContext(isSecure);
    }
  }, []);

  // Warn user before leaving payment page
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (location.state?.paymentInProgress) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [location.state]);

  // Security warning for non-HTTPS
  if (!isSecureContext) {
    return (
      <div className="min-h-screen bg-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Insecure Connection</h2>
          <p className="text-gray-600 mb-6">
            This page should be accessed over a secure HTTPS connection for payment safety.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Security header */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Secure Payment Gateway</span>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>

      {/* Trust indicators footer */}
      <div className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>PCI DSS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              <span>Your data is never stored</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main component with error boundary
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

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Payment component error:', error, errorInfo);
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}