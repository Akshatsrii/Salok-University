import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { Home, Coffee, Book, Music } from "lucide-react";

export default function CampusLifePage() {
  const facilities = [
    { title: "Modern Hostels", icon: Home, desc: "Air-conditioned rooms with high-speed Wi-Fi and 24/7 security.", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069" },
    { title: "Cafeteria & Food Courts", icon: Coffee, desc: "Multi-cuisine dining options maintaining the highest hygiene standards.", img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2070" },
    { title: "Central Library", icon: Book, desc: "Over 100,000+ volumes, digital resources, and quiet reading zones.", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2088" },
    { title: "Cultural Hub", icon: Music, desc: "State-of-the-art auditorium for fests, events, and club activities.", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974" },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a2b4c] text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <ParallaxImage src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" alt="Campus Life Hero" height="h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <GsapReveal>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter">
              Life at <span className="text-[#ffb800]">Salok</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
              Experience a vibrant, inclusive, and dynamic campus ecosystem.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2b4c] mb-4">World-Class Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need for a comfortable, productive, and enjoyable university life.
            </p>
          </div>
        </GsapReveal>
        
        <div className="space-y-20">
          {facilities.map((fac, i) => (
            <div key={i} className={"flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12"}>
              <div className="flex-1 w-full">
                <GsapReveal>
                  <ParallaxImage src={fac.img} alt={fac.title} height="h-[400px]" />
                </GsapReveal>
              </div>
              <div className="flex-1">
                <GsapReveal>
                  <div className="w-16 h-16 bg-[#ffb800]/20 text-[#ffb800] rounded-2xl flex items-center justify-center mb-6">
                    <fac.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-bold text-[#1a2b4c] mb-4">{fac.title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed">{fac.desc}</p>
                </GsapReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
