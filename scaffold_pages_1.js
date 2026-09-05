const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'apps', 'client', 'src', 'pages', '(public)');

// 1. ABOUT PAGE
const about = import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Building2, Award, Globe, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdf7f7]">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdf7f7] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <GsapReveal>
            <h1 className="text-6xl font-serif font-bold text-white mb-6">Our <span className="text-accent">Legacy</span></h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">A century of excellence, shaping the minds that shape the world.</p>
          </GsapReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <GsapReveal direction="left">
            <h2 className="text-4xl font-bold font-serif text-primary mb-6">Tradition Meets Innovation</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Founded in 1924, Salok University began with a simple mission: to provide education that empowers. Today, we are a global powerhouse of research and academic excellence, spanning over 500 acres of lush green campus.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="border-l-4 border-primary pl-4">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-gray-500 font-medium">Years of History</div>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <div className="text-3xl font-bold text-primary mb-1">50,000</div>
                <div className="text-sm text-gray-500 font-medium">Alumni Worldwide</div>
              </div>
            </div>
          </GsapReveal>
          <GsapReveal direction="right">
            <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1000" className="rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500" />
          </GsapReveal>
        </div>
      </section>
      
      {/* Pillars */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <GsapReveal>
            <h2 className="text-center text-4xl font-serif font-bold mb-16">Pillars of Excellence</h2>
          </GsapReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Perspective", desc: "Collaborations with 100+ international institutions." },
              { icon: Award, title: "Academic Rigor", desc: "Ranked #1 in national educational frameworks." },
              { icon: History, title: "Rich Heritage", desc: "A campus that blends historic architecture with modern facilities." }
            ].map((col, i) => (
              <GsapReveal key={i} delay={i * 0.2}>
                <div className="bg-primary-dark p-8 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                  <col.icon className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{col.title}</h3>
                  <p className="text-white/70">{col.desc}</p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// 2. ACADEMICS PAGE
const academics = import { PublicNavbar } from "@/components/public/PublicNavbar";
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
    <div className="min-h-screen bg-[#fdf7f7]">
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
};

// 3. ADMISSIONS PAGE
const admissions = import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-[#fdf7f7]">
      <PublicNavbar />
      
      <section className="bg-primary-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <GsapReveal>
              <h1 className="text-5xl font-serif font-bold mb-6">Begin Your <span className="text-accent">Journey</span></h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Join a community of scholars, creators, and innovators. Admissions for the Fall 2026 intake are now open.
              </p>
              <Link to="/admissions/apply" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-white transition-colors">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
            </GsapReveal>
          </div>
          <div className="md:w-1/2 w-full">
            <GsapReveal direction="right">
              <div className="bg-white rounded-2xl p-8 text-primary shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-accent text-primary font-bold px-4 py-1 rounded-full shadow-lg">New</div>
                <h3 className="text-2xl font-bold mb-6">Important Dates</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Application Deadline", date: "August 15, 2026" },
                    { label: "Entrance Examination", date: "September 02, 2026" },
                    { label: "Merit List Publication", date: "September 15, 2026" },
                    { label: "Classes Commence", date: "October 01, 2026" }
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-primary font-bold">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <GsapReveal>
          <h2 className="text-4xl font-serif font-bold text-primary mb-16">How to Apply</h2>
        </GsapReveal>
        <div className="grid md:grid-cols-4 gap-8">
          {["Create an Account", "Fill Application Form", "Upload Documents", "Pay Application Fee"].map((step, i) => (
            <GsapReveal key={i} delay={i*0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/10 relative">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-lg">
                  {i+1}
                </div>
                <h4 className="mt-6 text-lg font-bold text-primary">{step}</h4>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

fs.writeFileSync(path.join(publicDir, 'about', 'page.tsx'), about);
fs.writeFileSync(path.join(publicDir, 'academics', 'page.tsx'), academics);
fs.writeFileSync(path.join(publicDir, 'admissions', 'page.tsx'), admissions);

console.log('3 Custom Pages Scaffolding Complete');
