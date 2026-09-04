import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { BookOpen, Award, Microscope, Laptop } from "lucide-react";

export default function AcademicsPage() {
  const departments = [
    { name: "Computer Science & Engineering", desc: "AI, ML, Data Science & Software Engineering.", icon: Laptop },
    { name: "Electronics & Communication", desc: "IoT, VLSI, Signal Processing.", icon: Microscope },
    { name: "Mechanical Engineering", desc: "Robotics, Automobile, Thermal.", icon: Award },
    { name: "Business Administration", desc: "Finance, Marketing, HR.", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a2b4c] text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <ParallaxImage src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070" alt="Academics Hero" height="h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <GsapReveal>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tighter">
              Academic <span className="text-[#ffb800]">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
              Fostering innovation and critical thinking through cutting-edge curriculum.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a2b4c] mb-4">Our Departments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our diverse range of programs designed to prepare you for the global challenges of tomorrow.
            </p>
          </div>
        </GsapReveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, i) => (
            <GsapReveal key={i}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border-t-4 border-transparent hover:border-[#ffb800] transition-all group">
                <div className="w-16 h-16 bg-blue-50 text-[#007bff] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                  <dept.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2b4c] mb-3">{dept.name}</h3>
                <p className="text-gray-500 text-sm">{dept.desc}</p>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
