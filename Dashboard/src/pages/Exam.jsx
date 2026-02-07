import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Lazy load components
const ExamForm = lazy(() => import("../components/exam/ExamForm"));
const ExaminationForm = lazy(() => import("../components/exam/ExaminationForm"));
const AdmitCard = lazy(() => import("../components/exam/AdmitCard"));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="text-red-500 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Layout wrapper with navigation breadcrumbs
const ExamLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* You can add a header/navigation here */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

// Protected route wrapper (example - customize based on your auth logic)
const ProtectedRoute = ({ children, requiresAuth = false }) => {
  // Replace with your actual authentication check
  const isAuthenticated = true; // localStorage.getItem('token') || sessionStorage.getItem('user')
  
  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  
  return children;
};

// Route configuration for better maintainability
const examRoutes = [
  {
    path: "form",
    element: <ExamForm />,
    requiresAuth: false,
  },
  {
    path: "examination",
    element: <ExaminationForm />,
    requiresAuth: true,
  },
  {
    path: "admit",
    element: <AdmitCard />,
    requiresAuth: true,
  },
];

export default function Exam() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<ExamLayout />}>
            {/* Redirect base path to form */}
            <Route index element={<Navigate to="form" replace />} />
            
            {/* Dynamic route rendering */}
            {examRoutes.map(({ path, element, requiresAuth }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute requiresAuth={requiresAuth}>
                    {element}
                  </ProtectedRoute>
                }
              />
            ))}
            
            {/* 404 catch-all */}
            <Route path="*" element={<Navigate to="form" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}