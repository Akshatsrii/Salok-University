import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Microscope, Lightbulb, Zap, Globe } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      <section className="relative pt-32 pb-24 bg-[#1a2b4c] text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070" className="w-full h-full object-cover" alt="Research" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <GsapReveal>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Innovation & <span className="text-[#ffb800]">Research</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Pushing the boundaries of human knowledge to solve the world's most complex challenges through interdisciplinary collaboration.
            </p>
          </GsapReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <GsapReveal>
            <h2 className="text-4xl font-bold text-[#1a2b4c] mb-6">Centers of Excellence</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our university houses over 20 state-of-the-art research centers dedicated to advanced robotics, quantum computing, biotechnology, and sustainable energy. We partner with global industries to bring academic research into real-world applications.
            </p>
            <ul className="space-y-4">
              {["Artificial Intelligence Lab", "Quantum Computing Facility", "Advanced Genomics Center", "Renewable Energy Institute"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-bold text-[#1a2b4c]">
                  <div className="w-8 h-8 rounded-full bg-[#ffb800] flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </GsapReveal>
          
          <div className="grid grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" className="rounded-3xl shadow-2xl translate-y-8" alt="Lab" />
            <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080" className="rounded-3xl shadow-2xl" alt="Research" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
