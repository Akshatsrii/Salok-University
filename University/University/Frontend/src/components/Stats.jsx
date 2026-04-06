import { useState, useEffect, useRef } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({});
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const stats = [
    { 
      id: "courses",
      title: "Total Courses", 
      value: 500, 
      suffix: "+",
      icon: "📚",
      gradient: "from-blue-500 to-cyan-500",
      description: "Diverse programs across disciplines"
    },
    { 
      id: "students",
      title: "Our Students", 
      value: 1900, 
      suffix: "+",
      icon: "🎓",
      gradient: "from-purple-500 to-pink-500",
      description: "Bright minds shaping the future"
    },
    { 
      id: "lecturers",
      title: "Skilled Lecturers", 
      value: 750, 
      suffix: "+",
      icon: "👨‍🏫",
      gradient: "from-orange-500 to-red-500",
      description: "Expert faculty with industry experience"
    },
    { 
      id: "awards",
      title: "Win Awards", 
      value: 30, 
      suffix: "+",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-500",
      description: "Recognition of excellence"
    },
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animated Counter
  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat) => {
      let currentCount = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(timer);
        }
        setCounts(prev => ({
          ...prev,
          [stat.id]: Math.floor(currentCount)
        }));
      }, stepDuration);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 py-20 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(255,255,255,0.1)_30px,rgba(255,255,255,0.1)_60px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block mb-4">
            <span className="text-white/90 uppercase tracking-wider font-semibold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              📊 Our Achievements
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Numbers That <span className="text-yellow-300">Speak</span> for Themselves
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            A glimpse into our journey of excellence and commitment to education
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <div className="inline-block relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl">{stat.icon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Counter */}
                  <div className="mb-3">
                    <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                      {counts[stat.id] || 0}{stat.suffix}
                    </h2>
                  </div>

                  {/* Title */}
                  <p className="text-xl font-semibold text-white/90 mb-2">
                    {stat.title}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-30 rounded-full -translate-y-1/2 translate-x-1/2`}></div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>

              {/* Floating Background Circle */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500 -z-10 scale-90 group-hover:scale-100`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className={`mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-2">Global Reach</h3>
                <p className="text-white/80">Students from 15+ countries</p>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">💼</div>
                <h3 className="text-2xl font-bold text-white mb-2">Industry Partners</h3>
                <p className="text-white/80">200+ corporate collaborations</p>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">📈</div>
                <h3 className="text-2xl font-bold text-white mb-2">Placement Rate</h3>
                <p className="text-white/80">95% within 6 months</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <button className="group relative px-10 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl">
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-green-700 group-hover:text-white flex items-center gap-3">
              <span className="text-xl">🚀</span>
              Be Part of Our Success Story
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}