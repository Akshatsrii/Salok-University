import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { AbstractGeometry3D } from "@/components/three/AbstractGeometry";
import { Target, Compass, Zap } from "lucide-react";

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5] overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AbstractGeometry3D />
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <PublicNavbar />
        
        <main className="flex-grow py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GsapReveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a2b4c] mb-6 tracking-tight">
                Vision & <span className="text-[#007bff]">Mission</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our guiding principles that shape the future of education, research, and holistic student development at Salok University.
              </p>
            </div>
          </GsapReveal>
          
          <div className="space-y-16">
            {/* Vision */}
            <GsapReveal>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex gap-8 md:flex-row flex-col items-start">
                <div className="w-20 h-20 bg-blue-50 text-[#007bff] rounded-2xl flex items-center justify-center shrink-0">
                  <Target className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1a2b4c] mb-4">Our Vision</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To be a globally recognized center of excellence in education and research, producing leaders and innovators who drive technological and societal advancement.
                  </p>
                </div>
              </div>
            </GsapReveal>

            {/* Mission */}
            <GsapReveal>
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex gap-8 md:flex-row flex-col items-start">
                <div className="w-20 h-20 bg-amber-50 text-[#ffb800] rounded-2xl flex items-center justify-center shrink-0">
                  <Compass className="w-10 h-10" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1a2b4c] mb-6">Our Mission</h2>
                  <ul className="space-y-4">
                    {[
                      "Provide world-class, outcome-based education across diverse disciplines.",
                      "Foster a culture of cutting-edge research, innovation, and entrepreneurship.",
                      "Collaborate with top global industries and universities for holistic exposure.",
                      "Instill strong ethical values and a sense of social responsibility in every student."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-gray-600">
                        <Zap className="w-6 h-6 text-[#ffb800] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GsapReveal>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
