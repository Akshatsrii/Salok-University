import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { Camera, Calendar, PlayCircle } from "lucide-react";

export default function EventsGalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000",
    "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2000",
    "https://images.unsplash.com/photo-1492538368677-f6e0afe31d90?q=80&w=2000",
    "https://images.unsplash.com/photo-1523580494112-071dcb84937c?q=80&w=2000",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000"
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-[#1a2b4c] text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <ParallaxImage src="https://images.unsplash.com/photo-1492538368677-f6e0afe31d90?q=80&w=2000" alt="Gallery Hero" height="h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <GsapReveal>
            <Camera className="w-12 h-12 text-[#ffb800] mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tighter">
              Events & <span className="text-[#ffb800]">Gallery</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Capturing the vibrant life, culture, and achievements of Salok University.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#1a2b4c] mb-2">Latest Moments</h2>
              <p className="text-gray-500">Glimpses from TechFest 2026 and Annual Convocation.</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 font-semibold hover:border-[#007bff] hover:text-[#007bff] transition-colors">
                <Calendar className="w-4 h-4" /> Filter by Year
              </button>
            </div>
          </div>
        </GsapReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <GsapReveal key={i}>
              <div className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow">
                <img src={src} alt={"Event "} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <PlayCircle className="w-10 h-10 text-white mb-2" />
                  <h4 className="text-white font-bold text-lg">TechFest Annual Gala</h4>
                  <p className="text-gray-300 text-sm">November 2026</p>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
