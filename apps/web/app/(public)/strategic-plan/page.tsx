import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Rocket } from "lucide-react";

export default function StrategicPlanPage() {
  const roadmap = [
    { year: "2025", title: "Digital Transformation", desc: "Complete rollout of the Salok AI-driven ERP and paperless campus initiative." },
    { year: "2026", title: "Global Expansion", desc: "Establishing 5 new international research centers in collaboration with EU universities." },
    { year: "2028", title: "Sustainability Goal", desc: "Achieving a 100% carbon-neutral campus through solar power and waste recycling." },
    { year: "2030", title: "Top 100 Global Ranking", desc: "Securing a spot in the QS World University Rankings Top 100." },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      <main className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="text-center mb-20">
            <div className="w-20 h-20 bg-blue-50 text-[#007bff] rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a2b4c] mb-6 tracking-tight">
              Strategic <span className="text-[#ffb800]">Plan 2030</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our blueprint for the next decade. Building a resilient, sustainable, and globally competitive institution.
            </p>
          </div>
        </GsapReveal>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#007bff] to-[#ffb800] -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {roadmap.map((item, i) => (
              <GsapReveal key={i}>
                <div className={"relative flex items-center justify-between md:justify-normal ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} group"}>
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white border-4 border-[#007bff] rounded-full -translate-x-1/2 group-hover:scale-125 group-hover:border-[#ffb800] transition-transform"></div>
                  
                  <div className="w-full md:w-5/12 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 group-hover:shadow-xl transition-shadow">
                      <span className="inline-block px-4 py-1 bg-blue-50 text-[#007bff] font-bold rounded-full text-sm mb-4">{item.year}</span>
                      <h3 className="text-2xl font-bold text-[#1a2b4c] mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
