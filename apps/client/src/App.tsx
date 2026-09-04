import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Public Pages
import HomePage from './pages/(public)/page';
import AboutPage from './pages/(public)/about/page';
import AcademicsPage from './pages/(public)/academics/page';
import AdmissionsPage from './pages/(public)/admissions/page';
import CampusLifePage from './pages/(public)/campus-life/page';
import ContactPage from './pages/(public)/contact/page';
import AlumniPage from './pages/(public)/alumni/page';
import EventsGalleryPage from './pages/(public)/events-gallery/page';
import ConvocationPage from './pages/(public)/convocation/page';
import DisclosuresPage from './pages/(public)/disclosures/page';
import RecruitmentPage from './pages/(public)/recruitment/page';
import VisionMissionPage from './pages/(public)/vision-mission/page';
import StrategicPlanPage from './pages/(public)/strategic-plan/page';

// Auth Pages
import LoginPage from './pages/(auth)/login/page';
import RegisterPage from './pages/(auth)/register/page';

// Dashboards
import StudentDashboard from './pages/(dashboard)/student/page';
import TeacherDashboard from './pages/(dashboard)/teacher/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/campus-life" element={<CampusLifePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/events-gallery" element={<EventsGalleryPage />} />
        <Route path="/convocation" element={<ConvocationPage />} />
        <Route path="/disclosures" element={<DisclosuresPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/vision-mission" element={<VisionMissionPage />} />
        <Route path="/strategic-plan" element={<StrategicPlanPage />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Dashboard Routes */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        
        {/* Fallback */}
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-2xl font-bold">404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
