import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { HeartHandshake, ArrowRight } from "lucide-react";

export default function AlumniAssociationPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      <main className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="bg-[#1a2b4c] rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10">
              <HeartHandshake className="w-16 h-16 text-[#ffb800] mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Alumni Association</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">Join the official registered body of Salok University graduates. Reconnect, give back, and mentor the next generation.</p>
              <div className="flex justify-center gap-4">
                <button className="bg-[#ffb800] text-[#1a2b4c] font-bold px-8 py-3 rounded-full hover:bg-white transition-colors flex items-center gap-2">
                  Register Now <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-white/10 text-white font-bold px-8 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        </GsapReveal>
        
        <GsapReveal>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {["Chapter Meets", "Alumni Fund", "Mentorship"].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#007bff] transition-colors">
                <h3 className="text-2xl font-bold text-[#1a2b4c] mb-2">{item}</h3>
                <p className="text-gray-500">Engage with local and global initiatives driven by our alumni chapters.</p>
              </div>
            ))}
          </div>
        </GsapReveal>
      </main>
      <Footer />
    </div>
  );
}
