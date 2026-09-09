import { Link } from "react-router-dom";
import { GraduationCap, Building2, Trophy, Users, BookOpen, ChevronRight, ArrowRight, Shield, MapPin, Phone, Mail, Clock, Bell } from "lucide-react";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function PageHome() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <PublicNavbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000" 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent w-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-[55%]">
            <GsapReveal>
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-[1.1]">
                The Best Place to <br/>
                <span className="border-b-4 border-[#ffcc00] inline-block pb-2">Chase Your Dreams</span>
              </h1>
              <p className="text-white/90 text-sm md:text-base mb-8 max-w-lg leading-relaxed drop-shadow-md">
                Salok University is a premier institution dedicated to academic excellence. Our sprawling green campus provides the perfect environment for focused learning and holistic development, shaping the leaders of tomorrow.
              </p>
              <div>
                <Link to="/admissions" className="bg-[#ffcc00] text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-white transition-all shadow-lg text-sm inline-block">
                  Explore Admissions
                </Link>
              </div>
            </GsapReveal>
          </div>

          <div className="lg:w-[45%] relative h-[500px] hidden lg:block">
            <GsapReveal className="absolute top-10 right-16 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-[#ffcc00] flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-white font-medium text-sm">Graduation</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">405.240</div>
                <p className="text-white/70 text-[10px] leading-tight">Salok University produces the best graduates across the globe.</p>
              </div>
            </GsapReveal>

            <GsapReveal className="absolute top-44 -right-4 z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-[#ffcc00] flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-white font-medium text-sm">Company Relation</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">7.400</div>
                <p className="text-white/70 text-[10px] leading-tight">We maintain robust relationships with top-tier industrial partners.</p>
              </div>
            </GsapReveal>

            <GsapReveal className="absolute bottom-16 right-24 z-30">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl w-64 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-[#ffcc00] flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-gray-900" />
                  </div>
                  <span className="text-white font-medium text-sm">Achievement</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">29.085</div>
                <p className="text-white/70 text-[10px] leading-tight">Total institutional and student achievements secured to date.</p>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="bg-[#8a1538] text-white py-6 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex items-center justify-center gap-4">
              <Users className="w-8 h-8 text-white opacity-80" />
              <div className="text-left">
                <div className="text-lg font-bold">12,000+ Students</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <BookOpen className="w-8 h-8 text-white opacity-80" />
              <div className="text-left">
                <div className="text-lg font-bold">150+ Degree Programs</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Trophy className="w-8 h-8 text-white opacity-80" />
              <div className="text-left">
                <div className="text-lg font-bold">NAAC A++ Accredited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: LATEST NOTICES & UPDATES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Bell className="w-8 h-8 text-[#8a1538]" /> Notice Board
            </h2>
            <div className="space-y-4">
              {[
                { date: '12 Sep 2026', title: 'Admissions 2026-27 Merit List Phase II declared.', tag: 'Admissions' },
                { date: '10 Sep 2026', title: 'Mid-semester examination schedule for B.Tech released.', tag: 'Exams' },
                { date: '05 Sep 2026', title: 'Annual Tech Fest "Aarohan" dates announced.', tag: 'Events' },
              ].map((notice, i) => (
                <div key={i} className="p-4 border-l-4 border-[#8a1538] bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="text-xs font-bold text-[#8a1538] uppercase tracking-wider">{notice.tag}</span>
                  <p className="font-bold text-gray-900 mt-1">{notice.title}</p>
                  <p className="text-xs text-gray-500 mt-2">{notice.date}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm font-bold text-[#8a1538] hover:underline flex items-center gap-1">
              View All Notices <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="md:w-2/3">
             <div className="bg-[#8a1538] rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row relative h-full">
              <div className="md:w-1/2 p-10 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold mb-4">
                  <span className="border-b-4 border-[#ffcc00] pb-1">Campus Life</span> at Salok
                </h2>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Experience a vibrant campus life with state-of-the-art facilities, extensive library resources, and dedicated spaces for innovation and research. Join our thriving student community.
                </p>
                <button className="w-fit bg-[#ffcc00] text-gray-900 px-6 py-2 rounded font-bold shadow-lg text-sm hover:bg-white transition-colors">
                  Take Virtual Tour
                </button>
              </div>
              <div className="md:w-1/2 relative min-h-[250px]">
                <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUOTE GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl flex items-end p-10 group">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-[#8a1538]/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            
            <div className="relative z-10 w-full">
              <GsapReveal>
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded flex items-center justify-center bg-white">
                      <Shield className="w-6 h-6 text-[#8a1538]" fill="#8a1538" />
                   </div>
                   <div className="text-white leading-tight">
                     <span className="font-bold text-sm block">Salok</span>
                     <span className="text-xs">University</span>
                   </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white leading-snug">
                  "Striving for success without hard work is like trying to harvest when you haven't planted."
                </h3>
              </GsapReveal>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl flex items-end p-10 group">
            <img src="https://images.unsplash.com/photo-1577416412292-747c6607f055?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="relative z-10 w-full">
              <GsapReveal delay={0.2}>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white leading-snug">
                  Comfortable Classroom for Quality Study
                </h3>
                <div className="flex gap-1 mt-4">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white/50"></div>
                  <div className="w-2 h-2 rounded-full bg-white/50"></div>
                </div>
              </GsapReveal>
            </div>
          </div>

        </div>
      </section>

      {/* NEW: CONTACT & LOCATION MAP */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us On Campus</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We're located in the heart of the educational hub. Drop by for a campus tour or contact our administrative office for any queries.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            <div className="lg:w-1/3 bg-[#8a1538] text-white p-10">
              <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#ffcc00] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Campus Address</p>
                    <p className="text-white/80 text-sm leading-relaxed">Salok University Knowledge Park, Sector 42, Institutional Area, India - 110042</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#ffcc00] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Phone Enquiries</p>
                    <p className="text-white/80 text-sm">+91 1800 123 4567<br/>+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#ffcc00] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Email Connect</p>
                    <p className="text-white/80 text-sm">admissions@salok.edu.in<br/>info@salok.edu.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#ffcc00] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-1">Working Hours</p>
                    <p className="text-white/80 text-sm">Mon - Sat: 09:00 AM - 05:00 PM<br/>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 min-h-[400px] relative bg-gray-200">
              {/* Fallback Map Image or Iframe embedding Google Maps */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5647565406086!2d77.1264!3d28.6128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzQ2LjEiTiA3N8KwMDcnMzUuMCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false} 
                loading="lazy"
                title="Salok University Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR COURSES */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-sans font-bold text-gray-900 mb-2">Our Popular Courses</h2>
            </div>
            <Link to="/academics" className="bg-[#8a1538] text-white px-5 py-2 text-sm font-bold hover:bg-[#6b0f2a] transition-colors rounded">
              All Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
                <div className="absolute top-4 left-4 bg-[#8a1538] text-white text-xs font-bold px-3 py-1">Engineering</div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Computer Science & AI</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">Leading-edge B.Tech program focused on artificial intelligence and modern computing architectures.</p>
              </div>
            </div>

            <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
                <div className="absolute top-4 left-4 bg-[#8a1538] text-white text-xs font-bold px-3 py-1">Management</div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">MBA - Business Strategy</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">Develop global leadership and business management skills with top industry connections.</p>
              </div>
            </div>

            <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Course" />
                <div className="absolute top-4 left-4 bg-[#8a1538] text-white text-xs font-bold px-3 py-1">Medical</div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Bachelor of Medicine (MBBS)</h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">State-of-the-art medical college with attached 1000-bed hospital for practical training.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BIG CALL TO ACTION */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#8a1538]/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <GsapReveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-[1.3] max-w-4xl mx-auto drop-shadow-lg tracking-wide mb-8">
              Join Salok University Today and Shape Your Future
            </h2>
            <Link to="/admissions" className="bg-[#ffcc00] text-gray-900 px-10 py-4 rounded-full font-black text-lg hover:bg-white transition-colors shadow-2xl">
              Apply Now
            </Link>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
