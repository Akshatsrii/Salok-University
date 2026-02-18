import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import AdmissionDashboard from "./pages/Admission/AdmissionDashboard";
import StudentDashboard from "./pages/Students/StudentDashboard";
import FacultyDashboard from "./pages/Faculty/FacultyDashboard";
import ExamDashboard from "./pages/Exams/ExamDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admission" element={<AdmissionDashboard />} />
        <Route path="/students" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/exams" element={<ExamDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
