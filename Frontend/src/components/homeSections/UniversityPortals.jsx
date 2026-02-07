import React from "react";

const portals = [
  {
    title: "Student Portal",
    desc: "Access courses, assignments, grades, attendance and activities.",
    button: "Login",
  },
  {
    title: "Faculty Portal",
    desc: "Manage courses, attendance and student evaluations easily.",
    button: "Login",
  },
  {
    title: "Library Portal",
    desc: "Search books, research papers and digital resources.",
    button: "Login",
  },
  {
    title: "Placement & Career",
    desc: "Explore internships, jobs and career opportunities.",
    button: "Click",
  },
  {
    title: "Administration Portal",
    desc: "Manage admissions, student records and finance data.",
    button: "Click",
  },
  {
    title: "Alumni Portal",
    desc: "Connect with alumni, mentors and university events.",
    button: "Click",
  },
  {
    title: "Health & Wellness",
    desc: "Book appointments and access wellness services.",
    button: "Click",
  },
  {
    title: "Hostel & Accommodation",
    desc: "Manage hostel rooms, meals and maintenance requests.",
    button: "Click",
  },
];

const UniversityPortals = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          University Portals
        </h2>
        <div className="w-20 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {portals.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              rounded-2xl
              p-6
              text-center
              shadow-lg
              transition-all
              hover:-translate-y-3
              hover:shadow-[0_25px_60px_rgba(255,159,28,0.25)]
            "
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {item.desc}
            </p>

            <button
              className="
                px-6 py-2
                bg-orange-400
                text-black
                font-semibold
                rounded-full
                hover:bg-orange-500
                transition
              "
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniversityPortals;
