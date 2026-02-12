import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components
const StudentHostelDetails = lazy(() => import("../components/hostel/StudentHostelDetails"));
const ApplyHostelLeaving = lazy(() => import("../components/hostel/ApplyHostelLeaving"));
const HostelIDCard = lazy(() => import("../components/hostel/HostelIDCard"));
const HostelDashboard = lazy(() => import("../components/hostel/HostelDashboard"));
const HostelComplaints = lazy(() => import("../components/hostel/HostelComplaints"));
const HostelFees = lazy(() => import("../components/hostel/HostelFees"));

/* ---------------- LOADING ---------------- */
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-black text-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        <p className="mt-4 text-gray-400">Loading...</p>
      </div>
    </div>
  );
}

/* ---------------- ERROR ---------------- */
function ErrorFallback() {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-black text-white">
      <div className="text-center max-w-md p-6 bg-gray-900 rounded-lg border border-red-500">
        <h3 className="text-lg font-semibold text-red-400 mb-2">
          Something went wrong
        </h3>
        <p className="text-gray-400 mb-4">
          We couldn't load this page. Please try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
}

/* ---------------- 404 ---------------- */
function NotFound() {
  const location = useLocation();

  return (
    <div className="flex items-center justify-center min-h-[500px] bg-black text-white">
      <div className="text-center max-w-md p-8 bg-gray-900 rounded-xl shadow-lg">
        <div className="text-6xl font-bold text-orange-500 mb-4">404</div>
        <h2 className="text-2xl font-semibold mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-6">
          The hostel page{" "}
          <code className="bg-gray-800 px-2 py-1 rounded text-sm text-orange-400">
            {location.pathname}
          </code>{" "}
          doesn't exist.
        </p>
        <Navigate to="/hostel/details" replace />
      </div>
    </div>
  );
}

/* ---------------- BREADCRUMB ---------------- */
function HostelBreadcrumb() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbMap = {
    details: "Hostel Details",
    leave: "Apply for Leave",
    idcard: "ID Card",
    dashboard: "Dashboard",
    complaints: "Complaints",
    fees: "Fees",
  };

  return (
    <nav className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-400">
        <li>
          <a
            href="/hostel"
            className="hover:text-orange-500 transition font-medium"
          >
            Hostel
          </a>
        </li>

        {pathSegments.slice(1).map((segment, index) => (
          <li key={segment} className="flex items-center gap-2">
            <span className="text-gray-600">/</span>
            <span
              className={
                index === pathSegments.length - 2
                  ? "font-medium text-orange-500"
                  : "text-gray-400"
              }
            >
              {breadcrumbMap[segment] || segment}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ---------------- MAIN ---------------- */
export default function Hostel() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6">

        <HostelBreadcrumb />

        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route index element={<Navigate to="details" replace />} />

            <Route path="dashboard" element={<HostelDashboard />} />
            <Route path="details" element={<StudentHostelDetails />} />
            <Route path="leave" element={<ApplyHostelLeaving />} />
            <Route path="idcard" element={<HostelIDCard />} />
            <Route path="complaints" element={<HostelComplaints />} />
            <Route path="fees" element={<HostelFees />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

      </div>
    </div>
  );
}
