import { useState, useEffect, useRef } from "react";

export default function Events() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  const filters = ["All", "Academic", "Cultural", "Sports", "Workshops"];

  const events = [
    {
      id: 1,
      title: "Research Conclave 2026",
      category: "Academic",
      date: "Mar 15, 2026",
      time: "10:00 AM",
      location: "Main Auditorium",
      description: "Annual research presentation and innovation showcase by students and faculty",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      gradient: "from-blue-500 to-cyan-500",
      participants: "200+",
      badge: "Upcoming"
    },
    {
      id: 2,
      title: "Cultural Fest - Utsav",
      category: "Cultural",
      date: "Apr 20, 2026",
      time: "9:00 AM",
      location: "University Campus",
      description: "Three-day cultural extravaganza with music, dance, and art competitions",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
      gradient: "from-purple-500 to-pink-500",
      participants: "500+",
      badge: "Registration Open"
    },
    {
      id: 3,
      title: "Industry Connect Program",
      category: "Workshops",
      date: "Feb 28, 2026",
      time: "2:00 PM",
      location: "Conference Hall",
      description: "Interactive session with industry leaders and placement opportunities",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      gradient: "from-orange-500 to-red-500",
      participants: "150+",
      badge: "Featured"
    },
    {
      id: 4,
      title: "International Yoga Day",
      category: "Sports",
      date: "Jun 21, 2026",
      time: "6:00 AM",
      location: "Sports Ground",
      description: "Mass yoga session promoting health, wellness and mindfulness",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      gradient: "from-green-500 to-emerald-500",
      participants: "300+",
      badge: "Open to All"
    },
    {
      id: 5,
      title: "Tech Symposium 2026",
      category: "Academic",
      date: "Mar 10, 2026",
      time: "11:00 AM",
      location: "IT Block",
      description: "Latest trends in AI, ML, and emerging technologies",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      gradient: "from-indigo-500 to-blue-500",
      participants: "180+",
      badge: "New"
    },
    {
      id: 6,
      title: "Annual Sports Meet",
      category: "Sports",
      date: "Feb 25, 2026",
      time: "8:00 AM",
      location: "Stadium",
      description: "Inter-department sports competition and athletic events",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      gradient: "from-yellow-500 to-orange-500",
      participants: "400+",
      badge: "Live"
    },
  ];

  const filteredEvents = activeFilter === "All" 
    ? events 
    : events.filter(event => event.category === activeFilter);

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
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block mb-4">
            <span className="text-orange-600 uppercase tracking-wider font-semibold text-sm bg-orange-100 px-4 py-2 rounded-full">
              What's Happening
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Events</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with our exciting events, workshops, and activities happening across campus
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-orange-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Event Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${event.gradient} text-white shadow-lg`}>
                  {event.badge}
                </span>
              </div>

              {/* Image Section */}
              <div className={`relative h-48 bg-gradient-to-br ${event.gradient} overflow-hidden`}>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  <div className="absolute top-20 right-10 w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  <div className="absolute bottom-10 left-20 w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                  {event.category}
                </span>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mt-2 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {event.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Meta Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-lg">📅</span>
                    <span className="font-medium">{event.date}</span>
                    <span className="text-gray-400">•</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-lg">📍</span>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-lg">👥</span>
                    <span className="font-semibold text-orange-600">{event.participants}</span>
                    <span className="text-gray-500">Expected</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${event.gradient} text-white opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 shadow-md group-hover:shadow-lg flex items-center justify-center gap-2`}>
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>

              {/* Bottom Accent Line */}
              <div className={`h-1 bg-gradient-to-r ${event.gradient}`}></div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <button className="group relative px-10 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600"></div>
            <span className="relative text-white flex items-center gap-3">
              View All Events
              <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}