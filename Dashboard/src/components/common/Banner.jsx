import { useState, useEffect } from "react";
import { TrendingUp, Award, BookOpen, Users } from "lucide-react";

const bannerSlides = [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    title: "Welcome to Student Portal",
    subtitle: "Salok University – Knowledge | Growth | Innovation",
    cta: "Explore Features",
    ctaLink: "#features",
  },
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    title: "Achieve Academic Excellence",
    subtitle: "Track your progress and stay ahead in your studies",
    cta: "View Attendance",
    ctaLink: "/attendance",
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
    title: "Upcoming Exams & Events",
    subtitle: "Stay updated with important academic dates",
    cta: "Check Calendar",
    ctaLink: "/exam/form",
  },
];

const stats = [
  { icon: BookOpen, label: "Courses", value: "8" },
  { icon: Award, label: "CGPA", value: "8.5" },
  { icon: Users, label: "Faculty", value: "45+" },
  { icon: TrendingUp, label: "Attendance", value: "87%" },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = bannerSlides[currentSlide];

  return (
    <div
      className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 transform group-hover:scale-105"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div className="flex-1 flex flex-col justify-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            {slide.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-200 mb-6">
            {slide.subtitle}
          </p>

          <div>
            <a
              href={slide.ctaLink}
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {slide.cta}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden lg:flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 flex-1">
              <div className="bg-white/20 p-2 rounded-lg">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-300">{stat.label}</p>
                <p className="text-lg font-bold text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {bannerSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={() =>
          goToSlide(
            (currentSlide - 1 + bannerSlides.length) % bannerSlides.length
          )
        }
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % bannerSlides.length)}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
