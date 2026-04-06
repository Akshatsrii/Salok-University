import { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = ["All", "Campus", "Events", "Labs", "Sports", "Library"];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
      category: "Campus",
      title: "University Campus",
      description: "Beautiful view of our main campus building"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      category: "Campus",
      title: "Campus Grounds",
      description: "Students enjoying the outdoor spaces"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      category: "Labs",
      title: "Computer Lab",
      description: "State-of-the-art computer laboratory"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      category: "Library",
      title: "Central Library",
      description: "Extensive collection of books and resources"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
      category: "Events",
      title: "Annual Function",
      description: "Students performing at cultural events"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80",
      category: "Labs",
      title: "Science Laboratory",
      description: "Advanced research facilities"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      category: "Sports",
      title: "Sports Complex",
      description: "Indoor and outdoor sports facilities"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
      category: "Sports",
      title: "Athletic Track",
      description: "Professional-grade running track"
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80",
      category: "Campus",
      title: "Lecture Hall",
      description: "Modern classroom facilities"
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      category: "Events",
      title: "Graduation Ceremony",
      description: "Annual convocation celebration"
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=800&q=80",
      category: "Campus",
      title: "Campus Architecture",
      description: "Award-winning building design"
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      category: "Events",
      title: "Tech Fest",
      description: "Annual technology symposium"
    },
  ];

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

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

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Navigate lightbox with arrow keys
  useEffect(() => {
    if (!selectedImage) return;

    const handleArrowKeys = (e) => {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
      } else if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
      }
    };

    window.addEventListener("keydown", handleArrowKeys);
    return () => window.removeEventListener("keydown", handleArrowKeys);
  }, [selectedImage, filteredImages]);

  const navigateLightbox = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = direction === "next" 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 py-24 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block mb-4">
            <span className="text-orange-600 uppercase tracking-wider font-semibold text-sm bg-orange-100 px-4 py-2 rounded-full">
              📸 Our Campus
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            College <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our vibrant campus life, state-of-the-art facilities, and memorable moments
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-orange-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-orange-400 bg-orange-400/20 px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{image.title}</h4>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xl">🔍</span>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <button className="group relative px-10 py-4 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600"></div>
            <span className="relative text-white flex items-center gap-3">
              View Complete Gallery
              <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <span className="text-white text-2xl">✕</span>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <span className="text-white text-2xl">←</span>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
          >
            <span className="text-white text-2xl">→</span>
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center bg-white/10 backdrop-blur-md rounded-xl p-6">
              <span className="inline-block text-xs font-semibold text-orange-400 bg-orange-400/20 px-3 py-1 rounded-full mb-3">
                {selectedImage.category}
              </span>
              <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}