import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { BookOpen, Monitor, Microscope, Stethoscope, Briefcase, Atom } from "lucide-react";

export default function AcademicsPage() {
  const faculties = [
    { name: "Engineering & Tech", icon: Monitor, color: "bg-blue-900", img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800" },
    { name: "Medical Sciences", icon: Stethoscope, color: "bg-green-900", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" },
    { name: "Business School", icon: Briefcase, color: "bg-yellow-900", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" },
    { name: "Applied Sciences", icon: Atom, color: "bg-purple-900", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800" },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <PublicNavbar />
      
      <section className="relative h-[50vh] bg-primary flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <GsapReveal>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">Academic <span className="text-accent">Programs</span></h1>
            <p className="text-xl text-white/80 max-w-2xl">Discover 150+ undergraduate, postgraduate, and doctoral programs.</p>
          </GsapReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculties.map((fac, i) => (
            <GsapReveal key={i} delay={i * 0.1}>
              <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow">
                <img src={fac.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <fac.icon className="w-10 h-10 text-accent mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                  <h3 className="text-2xl font-bold text-white mb-2">{fac.name}</h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Explore cutting edge curriculum and state of the art labs.</p>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
