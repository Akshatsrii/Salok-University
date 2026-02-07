import React from "react";
import { Suspense, lazy, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Lazy load the downloads component
const DownloadFormsPayment = lazy(() => import("../components/downloads/DownloadFormsPayment"));

// Loading component for downloads page
function DownloadsLoader() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
          <svg 
            className="animate-bounce w-12 h-12 text-primary" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" 
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Downloads</h3>
        <p className="text-sm text-gray-600">Preparing your forms and documents...</p>
      </div>
    </div>
  );
}

// Error fallback component
function DownloadsError({ error, resetError }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to Load Downloads</h2>
        <p className="text-gray-600 mb-6">
          We encountered an issue loading the downloads page. Please try again.
        </p>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 text-left">
            <p className="text-xs text-red-800 font-mono break-all">{error.message}</p>
          </div>
        )}
        
        <button
          onClick={resetError}
          className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium
                   hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 
                   focus:ring-primary focus:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

// Downloads Layout wrapper
function DownloadsLayout({ children }) {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Forms & Documents
              </h1>
              <p className="text-gray-600 mt-1">
                Access important forms, certificates, and payment receipts
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="hidden md:flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-xs text-gray-500">Available Forms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-xs text-gray-500">Recent Downloads</div>
              </div>
            </div>
          </div>

          {/* Category Badge */}
          {category && (
            <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
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
      <div className="bg-blue-50 border-t border-blue-100 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Multiple Formats</h4>
                <p className="text-sm text-gray-600">
                  Forms available in PDF, Word, and Excel formats
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Always Updated</h4>
                <p className="text-sm text-gray-600">
                  Latest versions of all official documents
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Download History</h4>
                <p className="text-sm text-gray-600">
                  Track and re-download your previous documents
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>Need help? Contact the administration office or email{" "}
            <a href="mailto:documents@university.edu" className="text-primary hover:underline">
              documents@university.edu
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// Main component with error boundary
export default function DownloadForms() {
  const [error, setError] = useState(null);
  const [downloadCount, setDownloadCount] = useState(0);

  // Track downloads (example)
  useEffect(() => {
    const savedCount = localStorage.getItem('downloadCount');
    if (savedCount) {
      setDownloadCount(parseInt(savedCount, 10));
    }
  }, []);

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

// Simple error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Downloads component error:', error, errorInfo);
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}