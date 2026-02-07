import { Routes, Route, Navigate, Outlet, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components
const FeedbackFaculty = lazy(() => import("../components/feedback/FeedbackFaculty"));
const FeedbackSyllabus = lazy(() => import("../components/feedback/FeedbackSyllabus"));
const IQACFeedback = lazy(() => import("../components/feedback/IQACFeedback"));
const FeedbackInfrastructure = lazy(() => import("../components/feedback/FeedbackInfrastructure"));
const FeedbackHistory = lazy(() => import("../components/feedback/FeedbackHistory"));

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-gray-600">Loading feedback form...</p>
      </div>
    </div>
  );
}

// Feedback Layout with Tabs
function FeedbackLayout() {
  const feedbackTypes = [
    { path: "faculty", label: "Faculty Feedback", icon: "👨‍🏫", description: "Rate your instructors" },
    { path: "syllabus", label: "Syllabus Feedback", icon: "📚", description: "Course content review" },
    { path: "iqac", label: "IQAC Feedback", icon: "⭐", description: "Quality assurance" },
    { path: "infrastructure", label: "Infrastructure", icon: "🏫", description: "Facilities feedback" },
    { path: "history", label: "My Feedback", icon: "📝", description: "View submissions" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Feedback System</h1>
          <p className="text-gray-600 mt-1">Help us improve by sharing your thoughts</p>

          {/* Tabs */}
          <nav className="flex gap-2 overflow-x-auto mt-6">
            {feedbackTypes.map((type) => (
              <NavLink
                key={type.path}
                to={`/feedback/${type.path}`}   // ✅ ABSOLUTE PATH (FIX)
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-3 rounded-t-lg border-b-2 transition-all
                  ${
                    isActive
                      ? "border-primary bg-primary/5 text-primary font-semibold"
                      : "border-transparent hover:border-gray-300 hover:bg-gray-50 text-gray-600"
                  }`
                }
              >
                <span className="text-xl">{type.icon}</span>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium">{type.label}</div>
                  <div className="text-xs opacity-75">{type.description}</div>
                </div>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default function Feedback() {
  return (
    <Routes>
      <Route element={<FeedbackLayout />}>
        {/* Default redirect */}
        <Route index element={<Navigate to="/feedback/faculty" replace />} /> {/* ✅ FIX */}

        {/* Feedback routes */}
        <Route path="faculty" element={<FeedbackFaculty />} />
        <Route path="syllabus" element={<FeedbackSyllabus />} />
        <Route path="iqac" element={<IQACFeedback />} />
        <Route path="infrastructure" element={<FeedbackInfrastructure />} />
        <Route path="history" element={<FeedbackHistory />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/feedback/faculty" replace />} /> {/* ✅ FIX */}
      </Route>
    </Routes>
  );
}
