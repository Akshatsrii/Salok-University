import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Profile from "./pages/Profile";
import Students from "./pages/Students";
import Assignments from "./pages/Assignments";
import Timetable from "./pages/Timetable";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Calendar from "./pages/Timetable";
import Classes from "./pages/Classes";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="profile" />} />
        <Route path="profile" element={<Profile />} />
        <Route path="students" element={<Students />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="calendar" element={<Calendar />} />
<Route path="classes" element={<Classes />} />
<Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
