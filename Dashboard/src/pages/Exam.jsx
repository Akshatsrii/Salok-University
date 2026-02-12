import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

/* ================= Lazy Load ================= */

const ExamForm = lazy(() => import("../components/exam/ExamForm"));
const ExaminationForm = lazy(() => import("../components/exam/ExaminationForm"));
const AdmitCard = lazy(() => import("../components/exam/AdmitCard"));

/* ================= Loader ================= */

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-black text-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
      <p className="text-gray-400 font-medium">Loading...</p>
    </div>
  </div>
);

/* ================= Error ================= */

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="flex items-center justify-center min-h-screen bg-black text-white">
    <div className="max-w-md w-full bg-gray-900 border border-orange-500 rounded-xl shadow-lg p-8 text-center">
      <div className="text-orange-500 mb-4 text-5xl">⚠</div>

      <h2 className="text-2xl font-bold text-orange-400 mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-400 mb-6">
        {error?.message || "Unexpected error occurred"}
      </p>

      <button
        onClick={resetErrorBoundary}
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

/* ================= Layout ================= */

const ExamLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Header */}
      <div className="bg-gray-900 border-b border-orange-500 p-6">
        <h1 className="text-2xl font-bold text-orange-400">
          Examination Portal
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Manage exam forms, applications and admit cards
        </p>
      </div>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

/* ================= Protected Route ================= */

const ProtectedRoute = ({ children, requiresAuth = false }) => {
  const isAuthenticated = true; // Replace with real auth logic

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

/* ================= Routes Config ================= */

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

/* ================= Main Component ================= */

export default function Exam() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<ExamLayout />}>

            {/* Redirect base to form */}
            <Route index element={<Navigate to="form" replace />} />

            {/* Dynamic Route Rendering */}
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

            {/* 404 */}
            <Route path="*" element={<Navigate to="form" replace />} />

          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
