import { useState, useEffect, useRef } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      course: "B.Tech Computer Science",
      year: "Final Year",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5,
      text: "The faculty here is exceptional and the practical approach to learning has prepared me well for the industry. The placement support is outstanding!",
      achievement: "Placed at Google"
    },
    {
      id: 2,
      name: "Ananya Patel",
      course: "MBA",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 5,
      text: "Amazing infrastructure and world-class facilities. The mentorship program helped me discover my true potential and career path.",
      achievement: "Student Council President"
    },
    {
      id: 3,
      name: "Pooja Verma",
      course: "B.Sc Data Science",
      year: "3rd Year",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      text: "The research opportunities and state-of-the-art labs have been instrumental in my academic growth. Best decision I ever made!",
      achievement: "Research Scholar"
    },
    {
      id: 4,
      name: "Arjun Mehta",
      course: "B.Tech Mechanical",
      year: "Final Year",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5,
      text: "The industry exposure through internships and workshops is unmatched. The campus culture promotes innovation and entrepreneurship.",
      achievement: "Startup Founder"
    },
    {
      id: 5,
      name: "Priya Singh",
      course: "BBA",
      year: "2nd Year",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      rating: 5,
      text: "The holistic development approach here goes beyond academics. Extra-curricular activities and leadership programs shaped my personality.",
      achievement: "Cultural Fest Coordinator"
    },
    {
      id: 6,
      name: "Vikram Reddy",
      course: "M.Tech AI & ML",
      year: "1st Year",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      rating: 5,
      text: "The curriculum is cutting-edge and faculty members are leaders in their fields. The collaborative learning environment is fantastic.",
      achievement: "AI Research Intern"
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Students", icon: "😊" },
    { number: "4.8/5", label: "Average Rating", icon: "⭐" },
    { number: "95%", label: "Satisfaction Rate", icon: "👍" },
    { number: "500+", label: "Success Stories", icon: "🎉" },
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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * 3,
    currentIndex * 3 + 3
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3)
    );
    setIsAutoPlaying(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white via-orange-50/30 to-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block mb-4">
            <span className="text-orange-600 uppercase tracking-wider font-semibold text-sm bg-orange-100 px-4 py-2 rounded-full">
              💬 Student Voices
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500">
              TESTIMONIALS
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Hear what our students have to say about their journey with us
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center border border-orange-100"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-orange-200"
            aria-label="Previous testimonials"
          >
            <span className="text-2xl text-orange-500">←</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-orange-200"
            aria-label="Next testimonials"
          >
            <span className="text-2xl text-orange-500">→</span>
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Gradient Top Bar */}
                <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>

                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-6xl text-orange-200 opacity-50">
                    "
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-md opacity-50"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="relative w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-orange-600 font-semibold">
                        {testimonial.course}
                      </p>
                      <p className="text-xs text-gray-500">{testimonial.year}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Achievement Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-200 rounded-full px-4 py-2">
                    <span className="text-lg">🏆</span>
                    <span className="text-sm font-semibold text-orange-700">
                      {testimonial.achievement}
                    </span>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-gradient-to-r from-orange-500 to-red-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
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
                Ready to Write Your Success Story?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their careers with us
              </p>
              <button className="group px-10 py-4 bg-white text-orange-600 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2 mx-auto">
                <span className="text-xl">🎓</span>
                <span>Apply Now</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}