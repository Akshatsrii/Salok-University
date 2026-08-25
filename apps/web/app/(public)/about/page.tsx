import { Target, Lightbulb, Users, Globe2, BookOpen, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries in education and research." },
    { icon: Users, title: "Inclusivity", desc: "A diverse community where everyone belongs." },
    { icon: Globe2, title: "Global Impact", desc: "Creating solutions for real-world problems." },
    { icon: ShieldCheck, title: "Integrity", desc: "Upholding the highest ethical standards." },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a2b4c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Our <span className="text-[#ffb800]">Story</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Founded with a vision to redefine higher education, Salok University is creating leaders who are academically proficient and socially responsible.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-reveal">
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#007bff]">
                <Target className="w-8 h-8" />
                <h2 className="text-3xl font-bold text-[#1a2b4c]">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide transformative education that empowers individuals to reach their highest potential, fostering critical thinking, creativity, and a lifelong passion for learning.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#ffb800]">
                <BookOpen className="w-8 h-8" />
                <h2 className="text-3xl font-bold text-[#1a2b4c]">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a globally recognized institution of excellence, driving innovation and societal progress through cutting-edge research and holistic education.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-reveal" style={{ animationDelay: '0.2s' }}>
            {values.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <v.icon className="w-8 h-8 text-[#007bff] mb-4" />
                <h3 className="text-xl font-bold text-[#1a2b4c] mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Acres Campus" },
              { value: "15k+", label: "Students" },
              { value: "40+", label: "Countries Represented" },
              { value: "500+", label: "Expert Faculty" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-extrabold text-[#1a2b4c]">{stat.value}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-[#1a2b4c] mb-6">Be Part of Our Journey</h2>
        <Link 
          href="/register" 
          className="inline-flex items-center gap-2 bg-[#ffb800] hover:bg-[#e6a600] text-[#1a2b4c] font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-xl shadow-[#ffb800]/20"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}
