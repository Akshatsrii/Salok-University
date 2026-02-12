import { useState, useEffect } from "react";
import { Bell, AlertCircle, CheckCircle } from "lucide-react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const defaultNotices = [
    {
      id: 1,
      title: "Mid Semester Exam Schedule Released",
      category: "Exam",
      message: "Check portal for detailed exam timetable.",
      date: "2026-02-10",
      important: true,
      read: false,
    },
    {
      id: 2,
      title: "Tech Fest 2026 Registration Open",
      category: "Event",
      message: "Register before 20th Feb for early bird entry.",
      date: "2026-02-08",
      important: false,
      read: false,
    },
    {
      id: 3,
      title: "Placement Drive – TCS",
      category: "Placement",
      message: "Eligible students apply before deadline.",
      date: "2026-02-05",
      important: true,
      read: true,
    },
    {
      id: 4,
      title: "Library Timing Updated",
      category: "Academic",
      message: "Library open till 10 PM during exams.",
      date: "2026-02-01",
      important: false,
      read: true,
    },
  ];

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notifications"));
    if (saved && saved.length > 0) {
      setNotifications(saved);
    } else {
      setNotifications(defaultNotices);
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const toggleRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: !n.read } : n
    );
    setNotifications(updated);
  };

  const categories = ["All", "Academic", "Exam", "Event", "Placement"];

  const filteredNotifications =
    activeFilter === "All"
      ? notifications
      : notifications.filter((n) => n.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-8">

      {/* Header */}
      <div className="flex items-center gap-3">
        <Bell className="text-orange-500 w-8 h-8" />
        <h1 className="text-3xl font-bold text-orange-500">
          University Notifications
        </h1>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded text-sm ${
              activeFilter === cat
                ? "bg-orange-500 text-black"
                : "bg-[#111] border border-gray-700 hover:border-orange-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-6">
        {filteredNotifications.map((notice) => (
          <div
            key={notice.id}
            className={`bg-[#111] border rounded-xl p-6 transition-all 
            ${
              notice.read
                ? "border-gray-800"
                : "border-orange-500 shadow-orange-500/10"
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-bold">
                  {notice.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {notice.category} • {notice.date}
                </p>
              </div>

              {notice.important && (
                <AlertCircle className="text-red-500 w-5 h-5" />
              )}
            </div>

            <p className="text-sm text-gray-300 mb-4">
              {notice.message}
            </p>

            <button
              onClick={() => toggleRead(notice.id)}
              className={`text-sm flex items-center gap-2 ${
                notice.read
                  ? "text-green-400"
                  : "text-orange-500"
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              {notice.read ? "Mark as Unread" : "Mark as Read"}
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
