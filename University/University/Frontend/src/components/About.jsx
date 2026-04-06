import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const stats = [
    { number: "30+", label: "Years of Experience", icon: "🎓", color: "from-orange-500 to-red-500" },
    { number: "500+", label: "Expert Teachers", icon: "👨‍🏫", color: "from-blue-500 to-cyan-500" },
    { number: "10K+", label: "Students Enrolled", icon: "📚", color: "from-purple-500 to-pink-500" },
    { number: "95%", label: "Success Rate", icon: "🏆", color: "from-green-500 to-emerald-500" },
  ];

  const features = [
    { icon: "💡", title: "Innovative Learning", description: "Modern teaching methodologies" },
    { icon: "🌟", title: "Quality Education", description: "Industry-leading curriculum" },
    { icon: "🤝", title: "Expert Faculty", description: "Experienced professionals" },
    { icon: "🎯", title: "Career Focused", description: "Job-ready skills" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className={`grid md:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-orange-500 uppercase tracking-wider font-semibold text-sm bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/30">
                About Us
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Our Education System{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 animate-pulse">
                Inspires
              </span>{" "}
              You More.
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              We believe in transforming education through innovation, dedication, and excellence. 
              Our comprehensive approach ensures every student achieves their full potential.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </span>
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 transition-all duration-300 group-hover:scale-110"></div>
                <span className="relative text-white flex items-center gap-2">
                  Learn More About Us
                  <span className="transform transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className="relative mb-4">
                  <span className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 inline-block">
                    {stat.icon}
                  </span>
                </div>

                {/* Number */}
                <div className="relative">
                  <h3 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2`}>
                    {stat.number}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>

                {/* Animated Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className={`grid md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-6 rounded-xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}