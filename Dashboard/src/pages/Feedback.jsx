import { Routes, Route, Navigate, Outlet, NavLink } from "react-router-dom";
import { Suspense, lazy } from "react";

/* ================= Lazy Load ================= */

const FeedbackFaculty = lazy(() => import("../components/feedback/FeedbackFaculty"));
const FeedbackSyllabus = lazy(() => import("../components/feedback/FeedbackSyllabus"));
const IQACFeedback = lazy(() => import("../components/feedback/IQACFeedback"));
const FeedbackInfrastructure = lazy(() => import("../components/feedback/FeedbackInfrastructure"));
const FeedbackHistory = lazy(() => import("../components/feedback/FeedbackHistory"));

/* ================= Loader ================= */

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-black text-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        <p className="mt-4 text-gray-400">Loading feedback form...</p>
      </div>
    </div>
  );
}

/* ================= Layout ================= */

function FeedbackLayout() {
  const feedbackTypes = [
    { path: "faculty", label: "Faculty Feedback", icon: "👨‍🏫", description: "Rate your instructors" },
    { path: "syllabus", label: "Syllabus Feedback", icon: "📚", description: "Course content review" },
    { path: "iqac", label: "IQAC Feedback", icon: "⭐", description: "Quality assurance" },
    { path: "infrastructure", label: "Infrastructure", icon: "🏫", description: "Facilities feedback" },
    { path: "history", label: "My Feedback", icon: "📝", description: "View submissions" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Header */}
      <div className="bg-gray-900 border-b border-orange-500">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-orange-400">
            Feedback System
          </h1>
          <p className="text-gray-400 mt-1">
            Help us improve by sharing your thoughts
          </p>

          {/* Tabs */}
          <nav className="flex gap-2 overflow-x-auto mt-6">
            {feedbackTypes.map((type) => (
              <NavLink
                key={type.path}
                to={`/feedback/${type.path}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-t-lg border-b-2 transition-all
                  ${
                    isActive
                      ? "border-orange-500 bg-orange-500/10 text-orange-400 font-semibold"
                      : "border-transparent hover:border-orange-400 hover:bg-gray-800 text-gray-400"
                  }`
                }
              >
                <span className="text-xl">{type.icon}</span>

                <div className="hidden sm:block">
                  <div className="text-sm font-medium">{type.label}</div>
                  <div className="text-xs opacity-70">{type.description}</div>
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

/* ================= Main Component ================= */

export default function Feedback() {
  return (
    <Routes>
      <Route element={<FeedbackLayout />}>

        {/* Default Redirect */}
        <Route index element={<Navigate to="/feedback/faculty" replace />} />

        {/* Feedback Routes */}
        <Route path="faculty" element={<FeedbackFaculty />} />
        <Route path="syllabus" element={<FeedbackSyllabus />} />
        <Route path="iqac" element={<IQACFeedback />} />
        <Route path="infrastructure" element={<FeedbackInfrastructure />} />
        <Route path="history" element={<FeedbackHistory />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/feedback/faculty" replace />} />

      </Route>
    </Routes>
  );
}
