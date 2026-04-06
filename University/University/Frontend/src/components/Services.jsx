import { useState, useEffect, useRef } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      name: "Admission",
      icon: "🎓",
      description: "Seamless online and offline admission process with guidance and support",
      gradient: "from-blue-500 to-cyan-500",
      features: ["Online Application", "Document Verification", "Merit Lists", "Counseling"]
    },
    {
      id: 2,
      name: "Certificates",
      icon: "📜",
      description: "Quick and easy access to academic certificates and transcripts",
      gradient: "from-purple-500 to-pink-500",
      features: ["Degree Certificates", "Mark Sheets", "Migration", "Bonafide"]
    },
    {
      id: 3,
      name: "Affiliated Colleges",
      icon: "🏛️",
      description: "Extensive network of affiliated colleges with quality education",
      gradient: "from-orange-500 to-red-500",
      features: ["100+ Colleges", "Pan India", "Accredited", "Quality Assured"]
    },
    {
      id: 4,
      name: "Examination",
      icon: "📝",
      description: "Transparent and efficient examination system with timely results",
      gradient: "from-green-500 to-emerald-500",
      features: ["Online Exams", "Hall Tickets", "Results", "Revaluation"]
    },
    {
      id: 5,
      name: "Student Support",
      icon: "🤝",
      description: "24/7 support services for all student queries and concerns",
      gradient: "from-indigo-500 to-blue-500",
      features: ["Counseling", "Grievance", "Mentorship", "Helpdesk"]
    },
    {
      id: 6,
      name: "Online Services",
      icon: "💻",
      description: "Digital platform for all university services at your fingertips",
      gradient: "from-yellow-500 to-orange-500",
      features: ["Student Portal", "E-Library", "Fee Payment", "Course Registration"]
    },
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block mb-4">
            <span className="text-orange-600 uppercase tracking-wider font-semibold text-sm bg-orange-100 px-4 py-2 rounded-full">
              🎯 Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide a complete range of services to support your academic journey from admission to graduation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`relative mb-6 inline-block`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${service.gradient} text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-2 shadow-lg`}>
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>

              {/* Animated Background Pattern */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
                  style={{
                    borderRightColor: 'currentColor',
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)'
                  }}
                ></div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-orange-500/50 rounded-2xl transition-all duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Help with Any Service?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our dedicated support team is here to assist you 24/7. Get in touch with us for any queries or assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <span className="text-xl">📞</span>
                  <span>Contact Support</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="group px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <span className="text-xl">💬</span>
                  <span>Live Chat</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Numbers */}
        <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {[
            { number: "10K+", label: "Students Served", icon: "👥" },
            { number: "24/7", label: "Support Available", icon: "🕐" },
            { number: "100%", label: "Digital Services", icon: "💻" },
            { number: "5⭐", label: "Average Rating", icon: "⭐" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}