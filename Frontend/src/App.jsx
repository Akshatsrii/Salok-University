import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import StudentLogin from "./pages/Auth/StudentLogin"; // ✅ NEW
import Footer from "./components/Footer/Footer";
import ThemeToggle from "./components/common/ThemeToggle";

function App() {
  return (
    <BrowserRouter>
      {/* 🌗 Global Theme Toggle */}
      <ThemeToggle />

      {/* 🌍 App Layout */}
      <div className="min-h-screen flex flex-col">
        
        {/* 🔀 Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />              {/* Existing */}
          <Route path="/student-login" element={<StudentLogin />} /> {/* ✅ NEW */}
        </Routes>

        {/* 🔻 Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
