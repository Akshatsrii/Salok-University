"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Building2, Users, Newspaper, Award, GraduationCap, ChevronRight, Download, Link as LinkIcon, Briefcase } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Reusable scroll reveal component
const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function HomePage() {
  const notices = [
    { title: "Admission", links: ["Academic Calendar", "UG Admission", "PG Admission", "Ph.D. Admission Process 2026-27", "Syllabus"] },
    { title: "Certificates", links: ["Online Process", "Offline Process", "Apply for Migration", "Duplicate Marksheet"] },
    { title: "Important Links", links: ["AICTE Guidelines", "UGC Portal", "e-Samadhan", "Affiliated Colleges", "NIRF Data"] },
    { title: "Circulars", links: ["RTI Information", "Official Circulars", "BOM/AC/FC Minutes", "RUSA Minutes", "Central Library"] },
    { title: "Examination", links: ["Exam Centers", "Time Table", "Notices", "Copy View Notice", "XV Convocation - 2026"] },
    { title: "Student Support", links: ["Expert Faculty Lecture", "Dean Student Welfare", "Programs Offered", "Register Complaints", "Training & Placement"] },
  ];

  const events = [
    { title: "AI Research Center Inauguration", date: "April 2026", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" },
    { title: "Global Tech Symposium", date: "March 2026", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600" },
    { title: "International Yoga Day", date: "June 2026", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" },
  ];

  const stats = [
    { num: "350+", label: "Acres Infrastructure", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" },
    { num: "500+", label: "Press Releases", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=600" },
    { num: "120+", label: "Annual Events", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600" },
    { num: "85+", label: "Seminars & Workshops", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      
      {/* 1. Hero Banner with Slanted Overlays */}
      <section className="relative h-[600px] overflow-hidden flex items-center bg-gray-100">
        <Image 
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920" 
          alt="Campus" 
          fill 
          className="object-cover absolute inset-0 opacity-40"
          priority
        />
        {/* Slanted Yellow Overlay (like the reference) */}
        <div className="absolute right-[-10%] top-0 bottom-0 w-2/3 bg-[var(--primary)] -skew-x-12 opacity-90 border-l-[20px] border-white shadow-2xl z-10" />
        <div className="absolute right-10 top-20 bottom-20 w-1/4 bg-[var(--foreground)] -skew-x-12 opacity-95 z-20 hidden md:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-white/95 backdrop-blur-sm p-10 rounded-tr-3xl rounded-bl-3xl shadow-2xl border-l-8 border-[var(--primary)]"
          >
            <div className="w-20 h-20 mb-6 bg-[var(--foreground)] rounded-full flex items-center justify-center text-white">
              <GraduationCap className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--foreground)] leading-tight mb-4">
              Salok Technical <br />
              <span style={{ color: "var(--primary)" }}>University</span>
            </h1>
            <h2 className="text-2xl font-semibold text-muted mb-6">World Class Infrastructure & Education</h2>
            <Link href="/admissions" className="inline-flex items-center gap-2 bg-[var(--primary)] text-[var(--foreground)] px-8 py-3 rounded-full font-bold hover:bg-[var(--primary-hover)] transition-all">
              <LinkIcon className="w-5 h-5" />
              www.salok.edu.in
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Scrolling Marquee (Notices) */}
      <div className="bg-[var(--foreground)] text-white py-3 overflow-hidden border-b-4 border-[var(--primary)]">
        <div className="whitespace-nowrap animate-marquee inline-block font-semibold">
          <span className="mx-4 text-[var(--primary)]">★</span> Internal Sliding and Direct Admission Date Extension Order
          <span className="mx-4 text-[var(--primary)]">★</span> Revised UG & PG Admission Schedule
          <span className="mx-4 text-[var(--primary)]">★</span> Salok Regulations for Massive Open Online Course (MOOCs) in accordance with NEP-2020
          <span className="mx-4 text-[var(--primary)]">★</span> Ph.D. Admission Process 2026-27 Started
          <span className="mx-4 text-[var(--primary)]">★</span> Internal Sliding and Direct Admission Date Extension Order
          <span className="mx-4 text-[var(--primary)]">★</span> Revised UG & PG Admission Schedule
        </div>
      </div>

      {/* 3. Notice Boards / Quick Links Grid (Like the cards with orange ribbons) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="card h-full relative overflow-hidden group hover:border-[var(--primary)] transition-all shadow-md">
                {/* Top Left Ribbon */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-[var(--primary)] rounded-br-3xl flex items-center justify-center text-[var(--foreground)] z-10 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                
                <div className="p-6 pt-8 text-center border-b border-gray-100">
                  <h3 className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{notice.title}</h3>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-4">
                    {notice.links.map((link, j) => (
                      <li key={j}>
                        <Link href="#" className="flex items-start gap-3 text-sm text-gray-700 hover:text-[var(--accent)] transition-colors group/link">
                          <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-gray-400 group-hover/link:text-[var(--primary)] transition-colors" />
                          <span className="font-medium">{link}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. Welcome Section (Blue Bar) */}
      <section className="py-16 text-center text-white" style={{ background: "var(--foreground)" }}>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Salok Technical University</h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed px-4">
            University currently affiliates about 68 Engineering Colleges, 03 B.Arch, 16 MCA Colleges, 39 MBA Colleges, 31 M.Tech Colleges, 01 M.Arch and 01 Hotel Management and Catering Institute.
          </p>
        </Reveal>
      </section>

      {/* 5. Latest Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <h2 className="text-4xl font-bold inline-block relative pb-4" style={{ color: "var(--foreground)" }}>
              Latest Events
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-[var(--primary)] rounded-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--foreground)] rotate-45" />
              </div>
            </h2>
            <p className="text-muted mt-6 text-lg">Stay updated with the latest events held at university</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="card overflow-hidden group hover:shadow-xl transition-shadow bg-white">
                  <div className="relative h-64 overflow-hidden">
                    {/* Ribbon */}
                    <div className="absolute top-0 left-0 w-12 h-12 bg-[var(--primary)] rounded-br-3xl flex items-center justify-center text-[var(--foreground)] z-10">
                      <Zap className="w-5 h-5" />
                    </div>
                    <Image 
                      src={event.img} 
                      alt={event.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2 line-clamp-1" style={{ color: "var(--foreground)" }}>{event.title}</h3>
                    <div className="w-full h-px bg-gray-200 my-4 relative border-t border-dashed"></div>
                    <p className="text-muted text-sm">{event.title} following COVID-19 guidelines - {event.date}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Vision & Mission (Dark Split layout) */}
      <section className="text-white" style={{ background: "var(--foreground)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <Reveal className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">Salok Technical University</h3>
                  <p className="text-gray-300">STU was established in 2006 by the Government to enhance technical education in the state.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0 bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">Our Vision</h3>
                  <p className="text-gray-300">To achieve academic excellence in Engineering by imparting in-depth knowledge to the students, facilitating research activities and cater to the ever changing industrial demands, global and societal needs.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0 bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">Our Mission</h3>
                  <ul className="space-y-3 text-gray-300 list-disc list-inside">
                    <li>To provide quality engineering education to the students.</li>
                    <li>To offer state of arts education in engineering.</li>
                    <li>To establish industry institute interaction to make students ready.</li>
                    <li>To promote research based projects/activities.</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Collage */}
            <Reveal delay={0.2} className="relative h-[600px] hidden lg:block">
              <div className="absolute top-0 right-0 w-3/4 h-64 border-8 border-white rounded-xl overflow-hidden shadow-2xl z-10 transform translate-x-4">
                <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" alt="Students" fill className="object-cover" />
              </div>
              <div className="absolute bottom-20 left-0 w-4/5 h-80 border-8 border-white rounded-xl overflow-hidden shadow-2xl z-20">
                <Image src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800" alt="Building" fill className="object-cover" />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 7. Stats Photo Cards */}
      <section className="py-1">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="relative h-72 group overflow-hidden">
              <Image src={stat.img} alt={stat.label} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[var(--foreground)]/70 group-hover:bg-[var(--foreground)]/60 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <div className="text-5xl font-bold mb-2 text-white drop-shadow-md">{stat.num}</div>
                <div className="text-lg font-semibold flex items-center gap-2 mb-6">
                  <Building2 className="w-5 h-5 text-[var(--primary)]" />
                  {stat.label}
                </div>
                <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--foreground)] px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <LinkIcon className="w-4 h-4" /> View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
