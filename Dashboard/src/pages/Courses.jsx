import { useState, useEffect } from "react";
import { ExternalLink, CheckCircle } from "lucide-react";

export default function Courses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Predefined Courses (Enroll System)
  const availableCourses = [
    {
      id: 1,
      title: "React Development Bootcamp",
      platform: "Coursera",
      link: "https://www.coursera.org",
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org",
    },
    {
      id: 3,
      title: "AI & Machine Learning Basics",
      platform: "HP",
      link: "https://www.life-global.org",
    },
    {
      id: 4,
      title: "Web Development Mastery",
      platform: "RCAT",
      link: "#",
    },
  ];

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  const handleEnroll = (course) => {
    const alreadyEnrolled = enrolledCourses.find(
      (c) => c.id === course.id
    );
    if (alreadyEnrolled) return;

    const newEnrollment = {
      ...course,
      progress: 0,
    };

    setEnrolledCourses([...enrolledCourses, newEnrollment]);
  };

  const updateProgress = (id, value) => {
    const updated = enrolledCourses.map((c) =>
      c.id === id ? { ...c, progress: value } : c
    );
    setEnrolledCourses(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-orange-500">
        My Courses
      </h1>

      {/* Available Courses */}
      <div>
        <h2 className="text-xl font-semibold mb-6 text-gray-300">
          Available Courses
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {availableCourses.map((course) => {
            const isEnrolled = enrolledCourses.some(
              (c) => c.id === course.id
            );

            return (
              <div
                key={course.id}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  Platform: {course.platform}
                </p>

                <div className="flex justify-between items-center">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-orange-500 hover:text-orange-400 flex items-center gap-2"
                  >
                    Visit Platform
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => handleEnroll(course)}
                    disabled={isEnrolled}
                    className={`px-4 py-2 rounded text-sm ${
                      isEnrolled
                        ? "bg-green-500/20 text-green-400"
                        : "bg-orange-500 hover:bg-orange-400 text-black"
                    }`}
                  >
                    {isEnrolled ? "Enrolled" : "Enroll"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enrolled Courses */}
      <div>
        <h2 className="text-xl font-semibold mt-10 mb-6 text-gray-300">
          My Enrolled Courses
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-orange-500 transition"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">
                  {course.title}
                </h3>

                <CheckCircle className="text-green-400 w-5 h-5" />
              </div>

              <p className="text-sm text-gray-400 mb-4">
                Platform: {course.platform}
              </p>

              {/* Progress */}
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span className="text-orange-500">
                    {course.progress}%
                  </span>
                </div>

                <div className="w-full bg-gray-800 h-2 rounded-full">
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={course.progress}
                onChange={(e) =>
                  updateProgress(course.id, +e.target.value)
                }
                className="w-full accent-orange-500"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
