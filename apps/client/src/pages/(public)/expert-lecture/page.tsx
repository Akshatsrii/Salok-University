import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { Mic2, Calendar, MapPin, ChevronRight, Users, PlayCircle, FileText } from "lucide-react";

export default function ExpertLecturePage() {
  const lectures = [
    {
      title: "The Future of Generative AI in Software Development",
      speaker: "Dr. Arvind Krishna",
      designation: "Principal AI Scientist, Google Research",
      date: "15 Oct 2026",
      time: "10:30 AM - 12:30 PM",
      venue: "Main Auditorium, Block A",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&h=300&fit=crop",
      status: "Upcoming"
    },
    {
      title: "Sustainable Architecture: Building for Tomorrow",
      speaker: "Ar. Sarah Jenkins",
      designation: "Lead Architect, EcoDesign Studio",
      date: "05 Nov 2026",
      time: "02:00 PM - 04:00 PM",
      venue: "Seminar Hall, Department of Architecture",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&fit=crop",
      status: "Upcoming"
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      speaker: "Prof. Michael Chen",
      designation: "Professor of Cryptography, MIT",
      date: "12 Sep 2026",
      time: "11:00 AM - 01:00 PM",
      venue: "Virtual (Zoom)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&fit=crop",
      status: "Past"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-[#111111] text-white py-20 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000" 
            alt="Lecture Hall" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-wider uppercase mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Student Support</span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                Expert <span className="text-primary">Faculty</span><br/> Lectures
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Gain industry insights, learn about cutting-edge research, and interact with global experts through our distinguished lecture series.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-primary/30 flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> View Schedule
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" /> Watch Recordings
                </button>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                <Mic2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-3xl font-black text-white mb-1">50+</h3>
                <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Expert Speakers</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-3xl font-black text-white mb-1">10k+</h3>
                <p className="text-xs text-white/60 font-bold uppercase tracking-wider">Attendees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lecture List */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full">
        
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">Upcoming & Past Lectures</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full"></div>
          </div>
          <div className="hidden sm:flex gap-2">
            <button className="bg-gray-900 text-white px-4 py-2 rounded font-bold text-sm">All</button>
            <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 rounded font-bold text-sm transition-colors">Upcoming</button>
            <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 rounded font-bold text-sm transition-colors">Past Recordings</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {lectures.map((lecture, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col">
              
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                    lecture.status === 'Upcoming' 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-gray-900 text-white'
                  }`}>
                    {lecture.status}
                  </span>
                </div>
                <img 
                  src={lecture.image} 
                  alt={lecture.speaker} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-lg leading-tight">{lecture.speaker}</h4>
                  <p className="text-white/80 text-xs">{lecture.designation}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                  {lecture.title}
                </h3>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-primary flex-shrink-0">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{lecture.date}</p>
                      <p className="text-xs">{lecture.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <p className="font-medium">{lecture.venue}</p>
                  </div>
                </div>

                {lecture.status === 'Upcoming' ? (
                  <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-xl transition-colors">
                    Register Now
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                      <PlayCircle className="w-4 h-4" /> Watch
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                      <FileText className="w-4 h-4" /> Slides
                    </button>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
}
