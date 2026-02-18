import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000/api";

export default function Topbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    fetchPendingCount();
  }, []);

  const fetchPendingCount = async () => {
    try {
      const res = await fetch(`${BASE_URL}/admissions`);
      const data = await res.json();

      const pending = data.filter(
        (item) => item.status?.toLowerCase() === "pending"
      );

      setPendingCount(pending.length);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        method: "POST",
      });
    } catch (err) {
      console.log("Logout API not found, clearing local session only");
    }

    localStorage.removeItem("role");
    navigate("/");
  };

  const getRoleDisplay = () => {
    switch (role) {
      case "admission": return "Admission Admin";
      case "student": return "Student";
      case "faculty": return "Faculty";
      case "exam": return "Exam Controller";
      case "admin": return "System Admin";
      default: return "User";
    }
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-orange-950 shadow-lg border-b border-orange-500/20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Left Side */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Welcome, <span className="text-orange-400">{getRoleDisplay()}</span>
            </h3>
            <p className="text-gray-400 text-sm">Salok University</p>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">

            {/* 🔔 Notification - Only If Pending Exists */}
            {pendingCount > 0 && (
              <div className="relative p-2 text-orange-400 rounded-lg bg-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>

                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {pendingCount}
                </span>
              </div>
            )}

            {/* 🚪 Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              <span className="font-semibold">Logout</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
