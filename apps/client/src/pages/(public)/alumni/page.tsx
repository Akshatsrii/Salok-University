import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { Users, GraduationCap, Briefcase, HeartHandshake } from "lucide-react";

export default function AlumniPage() {
  const cards = [
    { title: "Global Network", value: "50,000+", icon: Users },
    { title: "CxO Level Alumni", value: "1,200+", icon: Briefcase },
    { title: "Startup Founders", value: "850+", icon: GraduationCap },
    { title: "Mentorship Matches", value: "5,000+", icon: HeartHandshake },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a2b4c] text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <ParallaxImage src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070" alt="Alumni Hero" height="h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <GsapReveal>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter">
              Alumni <span className="text-[#ffb800]">Network</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
              Once a Salokian, Always a Salokian. Connect, collaborate, and give back.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2b4c] mb-4">Our Global Footprint</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our alumni are leading change across the globe in top Fortune 500 companies, research institutes, and their own successful ventures.
            </p>
          </div>
        </GsapReveal>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <GsapReveal key={i}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-[#007bff]/10 text-[#007bff] rounded-full flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-[#1a2b4c] mb-2">{card.value}</h3>
                <p className="text-gray-500 font-medium">{card.title}</p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
