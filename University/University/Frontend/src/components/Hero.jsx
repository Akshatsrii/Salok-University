import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [counters, setCounters] = useState({ courses: 0, students: 0, instructors: 0 });

  // University/Education themed images
  const images = [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&q=80",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&q=80"
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animated counters
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { courses: 500, students: 50000, instructors: 200 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        courses: Math.floor(targets.courses * progress),
        students: Math.floor(targets.students * progress),
        instructors: Math.floor(targets.instructors * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "k";
    }
    return num;
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with better clarity */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(1.1) contrast(1.1)",
            }}
          />
        ))}
        {/* Lighter overlay for better image visibility */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-gray-900/75 via-orange-900/60 to-gray-900/75"
              : "bg-gradient-to-br from-white/70 via-orange-50/60 to-white/70"
          }`}
        />
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-8 right-8 z-20 p-4 rounded-full transition-all duration-300 ${
          isDark
            ? "bg-white/10 hover:bg-white/20 text-white"
            : "bg-gray-800/10 hover:bg-gray-800/20 text-gray-800"
        } backdrop-blur-md border ${
          isDark ? "border-white/20" : "border-gray-800/20"
        } shadow-lg hover:shadow-xl transform hover:scale-110`}
      >
        {isDark ? (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentImageIndex
                ? isDark
                  ? "bg-orange-500 w-12 h-3.5 shadow-lg shadow-orange-500/50"
                  : "bg-orange-600 w-12 h-3.5 shadow-lg shadow-orange-600/50"
                : isDark
                ? "bg-white/40 hover:bg-white/60 w-3.5 h-3.5"
                : "bg-gray-800/40 hover:bg-gray-800/60 w-3.5 h-3.5"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <h1
          className={`text-7xl md:text-8xl lg:text-9xl font-bold mb-8 transition-colors duration-300 ${
            isDark
              ? "text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]"
              : "text-gray-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]"
          }`}
        >
          Online Education{" "}
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-text text-transparent inline-block animate-pulse drop-shadow-[0_0_30px_rgba(249,115,22,0.6)]">
            Academy
          </span>
        </h1>

        <p
          className={`text-2xl md:text-3xl lg:text-4xl mb-12 transition-colors duration-300 ${
            isDark 
              ? "text-gray-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" 
              : "text-gray-800 drop-shadow-[0_1px_4px_rgba(255,255,255,0.8)]"
          } font-light tracking-wide`}
        >
          Empowering students with modern learning experiences
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button
            className={`group relative px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 shadow-2xl shadow-orange-500/60"
                : "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 shadow-2xl shadow-orange-600/50"
            } animate-pulse hover:animate-none`}
          >
            <span className="relative z-10 tracking-wide">Explore Courses</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            className={`px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 ${
              isDark
                ? "border-3 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-md shadow-xl"
                : "border-3 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white shadow-xl"
            }`}
          >
            Learn More
          </button>
        </div>

        {/* Enhanced Stats Section with Animated Counters */}
        <div
          className={`mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className={`text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3 ${
              isDark ? "drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]" : ""
            }`}>
              {counters.courses}+
            </div>
            <div className={`text-xl md:text-2xl font-semibold tracking-wider ${
              isDark ? "opacity-90" : "opacity-80"
            }`}>
              Courses
            </div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className={`text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3 ${
              isDark ? "drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]" : ""
            }`}>
              {formatNumber(counters.students)}+
            </div>
            <div className={`text-xl md:text-2xl font-semibold tracking-wider ${
              isDark ? "opacity-90" : "opacity-80"
            }`}>
              Students
            </div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className={`text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-3 ${
              isDark ? "drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]" : ""
            }`}>
              {counters.instructors}+
            </div>
            <div className={`text-xl md:text-2xl font-semibold tracking-wider ${
              isDark ? "opacity-90" : "opacity-80"
            }`}>
              Instructors
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className={`w-8 h-8 ${isDark ? "text-white" : "text-gray-900"} drop-shadow-lg`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}