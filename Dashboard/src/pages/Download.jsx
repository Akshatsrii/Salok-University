import React from "react";
import { Suspense, lazy, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const DownloadFormsPayment = lazy(() =>
  import("../components/downloads/DownloadFormsPayment")
);

/* ================= LOADER ================= */

function DownloadsLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="text-center">
        <div className="animate-bounce w-14 h-14 mx-auto mb-4 text-orange-500">
          ⬇
        </div>
        <h3 className="text-lg font-semibold text-orange-400">
          Loading Downloads
        </h3>
        <p className="text-sm text-gray-400">
          Preparing your forms and documents...
        </p>
      </div>
    </div>
  );
}

/* ================= ERROR ================= */

function DownloadsError({ error, resetError }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 text-white">
      <div className="max-w-md w-full bg-gray-900 border border-orange-500 rounded-xl shadow-lg p-8 text-center">
        <div className="text-5xl mb-4 text-orange-500">⚠</div>

        <h2 className="text-2xl font-bold text-orange-400 mb-2">
          Unable to Load Downloads
        </h2>

        <p className="text-gray-400 mb-6">
          Something went wrong. Please try again.
        </p>

        {error && (
          <div className="bg-black border border-orange-500 rounded-lg p-3 mb-6 text-left">
            <p className="text-xs text-orange-300 font-mono break-all">
              {error.message}
            </p>
          </div>
        )}

        <button
          onClick={resetError}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

/* ================= LAYOUT ================= */

function DownloadsLayout({ children }) {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Header */}
      <div className="bg-gray-900 border-b border-orange-500">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-orange-400">
            Download Forms & Documents
          </h1>
          <p className="text-gray-400 mt-1">
            Access important forms and certificates
          </p>

          {category && (
            <div className="mt-4 inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-500">
              Category: {category}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>

      {/* Help Section */}
      <div className="bg-gray-900 border-t border-orange-500 mt-12">
        <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
          
          <div className="bg-black p-5 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-orange-400 mb-2">
              Multiple Formats
            </h4>
            <p className="text-sm text-gray-400">
              Available in PDF, Word and Excel formats.
            </p>
          </div>

          <div className="bg-black p-5 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-orange-400 mb-2">
              Always Updated
            </h4>
            <p className="text-sm text-gray-400">
              Latest versions of official documents.
            </p>
          </div>

          <div className="bg-black p-5 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-orange-400 mb-2">
              Download History
            </h4>
            <p className="text-sm text-gray-400">
              Track your previously downloaded files.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500 py-4 text-center text-sm text-gray-500">
        Need help? Contact{" "}
        <span className="text-orange-400">
          documents@university.edu
        </span>
      </footer>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function DownloadForms() {
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
    window.location.reload();
  };

  if (error) {
    return <DownloadsError error={error} resetError={resetError} />;
  }

  return (
    <DownloadsLayout>
      <Suspense fallback={<DownloadsLoader />}>
        <ErrorBoundary onError={setError}>
          <DownloadFormsPayment />
        </ErrorBoundary>
      </Suspense>
    </DownloadsLayout>
  );
}

/* ================= ERROR BOUNDARY ================= */

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Downloads component error:", error, errorInfo);
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}
