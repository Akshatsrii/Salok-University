import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { Search, Database, Globe, BookOpen } from "lucide-react";

export default function PublicLibraryPage() {
  const stats = [
    { label: "Printed Volumes", value: "1.5M+", icon: BookOpen },
    { label: "E-Journals", value: "50,000+", icon: Globe },
    { label: "Digital Databases", value: "120+", icon: Database },
    { label: "Daily Visitors", value: "2,000+", icon: Search },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a2b4c] text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <ParallaxImage src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2088" alt="Library Hero" height="h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <GsapReveal>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter">
              Central <span className="text-[#ffb800]">Library</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
              The heart of academic research and learning at Salok University.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2b4c] mb-4">A Treasure Trove of Knowledge</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Spread over 50,000 sq.ft, our fully air-conditioned and Wi-Fi enabled library provides a serene environment for scholars and students.
            </p>
          </div>
        </GsapReveal>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <GsapReveal key={i}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#ffb800]/10 text-[#ffb800] rounded-full flex items-center justify-center mb-6">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-[#1a2b4c] mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-medium">{stat.label}</p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
