import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Attendance from "../pages/Attendance";
import ContinuityPayment from "../pages/ContinuityPayment";
import Hostel from "../pages/Hostel";
import Miscellaneous from "../pages/Miscellaneous";
import Feedback from "../pages/Feedback";
import Download from "../pages/Download";

import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Hackathons from "../pages/Hackathons";
import Courses from "../pages/Courses";
import Contests from "../pages/Contests";
import Activities from "../pages/Activities";
import Notifications from "../pages/Notifications";
import MockTests from "../pages/MockTests";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Core Pages */}
          <Route path="profile/*" element={<Profile />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payments/*" element={<ContinuityPayment />} />
          <Route path="hostel/*" element={<Hostel />} />
          <Route path="misc/*" element={<Miscellaneous />} />
          <Route path="feedback/*" element={<Feedback />} />
          <Route path="download" element={<Download />} />

          {/* New Feature Pages */}
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="hackathons" element={<Hackathons />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contests" element={<Contests />} />
          <Route path="activities" element={<Activities />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="mocktests" element={<MockTests />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
