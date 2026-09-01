import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { GraduationCap, Award, Video, Download } from "lucide-react";

export default function ConvocationPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a2b4c] text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <ParallaxImage src="https://images.unsplash.com/photo-1523580494112-071dcb84937c?q=80&w=2000" alt="Convocation" height="h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4c] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <GsapReveal>
            <GraduationCap className="w-16 h-16 text-[#ffb800] mx-auto mb-6" />
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter drop-shadow-lg">
              Annual <span className="text-[#ffb800]">Convocation</span>
            </h1>
            <p className="text-xl md:text-3xl max-w-3xl mx-auto font-light drop-shadow-md">
              Class of 2026 — Celebrating your hard work and achievements.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <GsapReveal>
            <div className="bg-white rounded-3xl p-10 shadow-xl border-t-8 border-[#007bff]">
              <h2 className="text-3xl font-bold text-[#1a2b4c] mb-6 flex items-center gap-3">
                <Video className="text-[#007bff] w-8 h-8" /> Live Webcast
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Join us virtually to witness the grand ceremony as our brilliant scholars receive their degrees. The live stream will begin on December 15, 2026, at 10:00 AM IST.
              </p>
              <button className="w-full bg-[#007bff] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-500/30">
                Watch Live Stream
              </button>
            </div>
          </GsapReveal>

          <GsapReveal>
            <div className="bg-white rounded-3xl p-10 shadow-xl border-t-8 border-[#ffb800]">
              <h2 className="text-3xl font-bold text-[#1a2b4c] mb-6 flex items-center gap-3">
                <Award className="text-[#ffb800] w-8 h-8" /> Important Docs
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Graduating students must review the guidelines and download the necessary forms prior to attending the ceremony.
              </p>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between border-2 border-gray-100 hover:border-[#ffb800] p-4 rounded-xl text-gray-700 font-bold transition-all">
                  Convocation Guidelines <Download className="w-5 h-5 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between border-2 border-gray-100 hover:border-[#ffb800] p-4 rounded-xl text-gray-700 font-bold transition-all">
                  Medal Winners List <Download className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
