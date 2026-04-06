import { useState } from "react";

export default function Announcements() {
  const [isPaused, setIsPaused] = useState(false);

  const announcements = [
    "📢 Advertisement for appointment to the post of Vice Chancellor — NEW",
    "🎓 Admission Open for Academic Year 2026-27 — Apply Now",
    "📝 Last Date for Semester Registration: February 15, 2026",
    "🏆 Annual Research Conference scheduled for March 2026",
    "💡 Workshop on AI & Machine Learning - Register Today",
  ];

  return (
    <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-3 overflow-hidden shadow-lg">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]"></div>
      </div>

      {/* Static Label */}
      <div className="absolute left-0 top-0 bottom-0 bg-orange-700 px-6 flex items-center z-10 shadow-lg">
        <span className="font-bold text-sm uppercase tracking-wider flex items-center gap-2">
          <span className="animate-pulse text-lg">🔔</span>
          Latest Updates
        </span>
      </div>

      {/* Scrolling Content */}
      <div 
        className="relative ml-48"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex whitespace-nowrap ${isPaused ? '' : 'animate-scroll'}`}>
          {/* First Set */}
          <div className="flex items-center">
            {announcements.map((announcement, index) => (
              <span
                key={`first-${index}`}
                className="inline-flex items-center mx-8 text-sm font-medium hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                {announcement}
                {index < announcements.length - 1 && (
                  <span className="mx-8 text-yellow-300">•</span>
                )}
              </span>
            ))}
          </div>

          {/* Duplicate Set for Seamless Loop */}
          <div className="flex items-center">
            {announcements.map((announcement, index) => (
              <span
                key={`second-${index}`}
                className="inline-flex items-center mx-8 text-sm font-medium hover:text-yellow-300 transition-colors duration-300 cursor-pointer"
              >
                {announcement}
                {index < announcements.length - 1 && (
                  <span className="mx-8 text-yellow-300">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Fade Edges */}
      <div className="absolute left-48 top-0 bottom-0 w-16 bg-gradient-to-r from-orange-600 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-orange-600 to-transparent pointer-events-none"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}