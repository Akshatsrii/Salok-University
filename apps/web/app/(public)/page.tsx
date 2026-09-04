import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { CinematicHero } from "@/components/shared/CinematicHero";
import { AbstractGeometry3D } from "@/components/three/AbstractGeometry";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Globe } from "lucide-react";
import Link from "next/link";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { ProgramFinder } from "@/components/public/ProgramFinder";

export default function Home() {
  const notices = [
    { title: "Admissions Open for Fall 2027", date: "Oct 15, 2026", isNew: true },
    { title: "International Conference on AI & Robotics", date: "Nov 02, 2026", isNew: true },
    { title: "Revised Academic Calendar (Even Semester)", date: "Sep 28, 2026", isNew: false },
    { title: "Ph.D. Entrance Examination Schedule", date: "Sep 20, 2026", isNew: false },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <CinematicHero />

      {/* Program Finder (Searchable tool instead of static grids) */}
      <div className="relative z-20 px-4">
        <ProgramFinder />
      </div>

      <div className="relative overflow-hidden pt-12">
        <AbstractGeometry3D />
        
        {/* Main Content Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GsapReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b4c] uppercase tracking-wide border-b-4 border-[#ffb800] inline-block pb-2">
                Discover Salok
              </h2>
            </div>
          </GsapReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Notices Board */}
            <GsapReveal className="lg:col-span-1 bg-white rounded-xl shadow-2xl border-t-4 border-[#ffb800] overflow-hidden">
              <div className="bg-[#1a2b4c] p-4 text-white flex justify-between items-center">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#ffb800]" /> Notice Board
                </h3>
                <Link href="#" className="text-xs hover:text-[#ffb800] transition-colors">View All</Link>
              </div>
              <div className="divide-y divide-gray-100 p-2">
                {notices.map((notice, idx) => (
                  <div key={idx} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">{notice.date}</span>
                      {notice.isNew && <span className="text-[10px] bg-red-500 text-white font-bold px-2 py-0.5 rounded-full animate-pulse">NEW</span>}
                    </div>
                    <p className="text-gray-800 font-medium group-hover:text-[#007bff] transition-colors line-clamp-2">{notice.title}</p>
                  </div>
                ))}
              </div>
            </GsapReveal>

            {/* Vision & Quick Links */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <GsapReveal className="bg-[#1a2b4c] rounded-xl shadow-xl overflow-hidden relative group">
                <div className="absolute inset-0 opacity-20">
                  <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Campus" />
                </div>
                <div className="relative z-10 p-10 md:p-12 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Empowering Innovators</h3>
                  <p className="text-lg text-gray-300 max-w-xl mb-8">
                    A premier technological university dedicated to advancing knowledge and educating students in science, technology, and beyond.
                  </p>
                  <Link href="/about" className="inline-flex items-center gap-2 bg-[#ffb800] text-[#1a2b4c] px-6 py-3 rounded font-bold hover:bg-white transition-colors">
                    Know More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </GsapReveal>

              {/* Quick Links Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { title: "Admissions", icon: GraduationCap, link: "/admissions" },
                  { title: "Placements", icon: Trophy, link: "/placements" },
                  { title: "Campus Life", icon: Users, link: "/campus-life" },
                  { title: "Global Connect", icon: Globe, link: "#" },
                ].map((item, idx) => (
                  <GsapReveal key={idx}>
                    <Link href={item.link} className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md border-b-4 border-transparent hover:border-[#007bff] hover:shadow-xl transition-all group">
                      <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#007bff] group-hover:text-white transition-colors text-[#1a2b4c]">
                        <item.icon className="w-7 h-7" />
                      </div>
                      <h4 className="font-bold text-gray-800 text-center">{item.title}</h4>
                    </Link>
                  </GsapReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Visual Section */}
        <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <GsapReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ParallaxImage src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" alt="Students walking" height="h-[400px]" />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-[#1a2b4c] mb-4">A Legacy of Excellence</h3>
                <p className="text-gray-600 mb-6 text-lg">
                  Spanning over 250 acres of lush green campus, Salok University provides world-class infrastructure and a vibrant ecosystem for holistic development.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-[#ffb800]/20 text-[#ffb800] flex items-center justify-center">✓</span>
                    NIRF Ranked Top 50 Engineering Institute
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-[#ffb800]/20 text-[#ffb800] flex items-center justify-center">✓</span>
                    100% Placement Assistance
                  </li>
                  <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-8 h-8 rounded-full bg-[#ffb800]/20 text-[#ffb800] flex items-center justify-center">✓</span>
                    State-of-the-art Research Labs
                  </li>
                </ul>
              </div>
            </div>
          </GsapReveal>
        </section>
      </div>

      <Footer />
    </div>
  );
}
