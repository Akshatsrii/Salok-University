import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Briefcase, TrendingUp, Building, Award } from "lucide-react";

export default function PlacementsPage() {
  const topRecruiters = [
    "Google", "Microsoft", "Amazon", "Meta", "Apple", "Goldman Sachs", "McKinsey", "Tesla", "IBM", "Intel"
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      <section className="relative pt-32 pb-24 bg-[#1a2b4c] text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084" className="w-full h-full object-cover" alt="Placements" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4c] via-[#1a2b4c]/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <GsapReveal>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Launch Your <span className="text-[#ffb800]">Career</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Unmatched placement records, industry partnerships, and dedicated career services to help you achieve your professional dreams.
            </p>
          </GsapReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { label: "Highest Package", value: "? 1.2 Cr", icon: TrendingUp },
            { label: "Average Package", value: "? 18 LPA", icon: Award },
            { label: "Recruiters", value: "500+", icon: Building },
            { label: "Placement Rate", value: "98%" , icon: Briefcase },
          ].map((stat, i) => (
            <GsapReveal key={i}>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-transform">
                <stat.icon className="w-12 h-12 text-[#ffb800] mx-auto mb-4" />
                <h3 className="text-4xl font-black text-[#1a2b4c] mb-2">{stat.value}</h3>
                <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            </GsapReveal>
          ))}
        </div>

        <GsapReveal>
          <div className="bg-[#1a2b4c] rounded-3xl p-12 text-center text-white overflow-hidden relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 relative z-10">Top Recruiters</h2>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {topRecruiters.map((company, i) => (
                <div key={i} className="px-6 py-3 bg-white/10 rounded-full border border-white/20 font-bold backdrop-blur-sm">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </GsapReveal>
      </section>
      <Footer />
    </div>
  );
}
