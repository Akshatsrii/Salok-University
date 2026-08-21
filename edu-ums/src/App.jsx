import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Attendance from "./pages/Attendance";
import Library from "./pages/Library";
import Transport from "./pages/Transport";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";
import Register from "./pages/Register";
import Alumni from "./pages/Alumni";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/library" element={<Library />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/alumni" element={<Alumni />} />

        {/* Clerk Auth Routes (IMPORTANT: /* added) */}
        <Route path="/login/*" element={<StudentLogin />} />
        <Route path="/register/*" element={<Register />} />

        {/* Protected Dashboard */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
