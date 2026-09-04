import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { BookOpen, Award, Microscope, Laptop, ChevronRight, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function AcademicsPage() {
  const departments = [
    { name: "Computer Science & Engineering", desc: "AI, ML, Data Science & Software Engineering.", icon: Laptop, color: "bg-blue-500" },
    { name: "Electronics & Communication", desc: "IoT, VLSI, Signal Processing.", icon: Microscope, color: "bg-emerald-500" },
    { name: "Mechanical Engineering", desc: "Robotics, Automobile, Thermal.", icon: Award, color: "bg-orange-500" },
    { name: "Business Administration", desc: "Finance, Marketing, HR.", icon: BookOpen, color: "bg-purple-500" },
    { name: "Biotechnology", desc: "Genetics, Bioinformatics, Pharma.", icon: Microscope, color: "bg-pink-500" },
    { name: "Design & Architecture", desc: "UI/UX, Industrial Design, Planning.", icon: BookOpen, color: "bg-indigo-500" },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a2b4c] text-white flex items-center overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" className="w-full h-full object-cover" alt="Academics Hero" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4c] via-[#1a2b4c]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <GsapReveal className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Academic <span className="text-[#ffb800]">Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Rigorous curriculum, world-class faculty, and hands-on experiential learning designed to prepare you for the careers of tomorrow.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#ffb800] text-[#1a2b4c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <GsapReveal>
              <div className="text-5xl font-black mb-2">150+</div>
              <div className="font-bold uppercase tracking-wider text-sm">Degree Programs</div>
            </GsapReveal>
            <GsapReveal>
              <div className="text-5xl font-black mb-2">12:1</div>
              <div className="font-bold uppercase tracking-wider text-sm">Student-Faculty Ratio</div>
            </GsapReveal>
            <GsapReveal>
              <div className="text-5xl font-black mb-2">Top 50</div>
              <div className="font-bold uppercase tracking-wider text-sm">National Ranking</div>
            </GsapReveal>
            <GsapReveal>
              <div className="text-5xl font-black mb-2">98%</div>
              <div className="font-bold uppercase tracking-wider text-sm">Graduation Rate</div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GsapReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b4c] mb-4">Explore Our Schools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover interdisciplinary programs tailored to match your passion and career goals.</p>
          </GsapReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, idx) => (
            <GsapReveal key={idx}>
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-16 h-16 rounded-xl \ text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <dept.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2b4c] mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-6">{dept.desc}</p>
                <Link to="#" className="text-[#007bff] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Explore Programs <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GsapReveal>
            <div className="bg-[#1a2b4c] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Global Exposure & Research</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Our academic framework is deeply integrated with global exchange programs and hands-on research opportunities starting from year one.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white font-medium">
                    <div className="w-10 h-10 rounded-full bg-[#ffb800] flex items-center justify-center text-[#1a2b4c]"><Globe className="w-5 h-5" /></div>
                    Semester Exchange in 40+ Countries
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <div className="w-10 h-10 rounded-full bg-[#ffb800] flex items-center justify-center text-[#1a2b4c]"><Microscope className="w-5 h-5" /></div>
                    Undergraduate Research Fellowships
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 min-h-[400px] relative">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070" className="absolute inset-0 w-full h-full object-cover" alt="Research" />
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Globe(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>;
}
