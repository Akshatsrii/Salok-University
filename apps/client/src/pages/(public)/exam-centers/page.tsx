import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { MapPin, Search, Calendar, ChevronRight, FileDown } from "lucide-react";

export default function ExamCentersPage() {
  const centers = [
    { code: "101", name: "Salok Main Campus (Block A)", capacity: 500, streams: "B.Tech, M.Tech", address: "University Road, Sector 3" },
    { code: "102", name: "Salok Main Campus (Block B)", capacity: 400, streams: "BBA, MBA", address: "University Road, Sector 3" },
    { code: "205", name: "Govt. Engineering College", capacity: 800, streams: "All UG", address: "Ajmer Road, West Zone" },
    { code: "304", name: "Maharana Pratap Institute", capacity: 300, streams: "Architecture, Pharmacy", address: "Pratap Nagar" }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111111] to-[#2a1118] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-wider uppercase mb-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Examinations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Exam Centers & Seating</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Locate your designated examination center and download your seating arrangement for the upcoming End Semester Examinations 2026.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-12 w-full">
        
        {/* Search & Alerts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" /> Find Your Center
            </h2>
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Enter Roll Number or College Code..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button className="bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md shadow-primary/20">
                Search
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 font-medium">* Ensure you have downloaded your latest admit card before searching.</p>
          </div>

          <div className="bg-[#111111] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-[50px] -mr-10 -mt-10"></div>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary">
              <Calendar className="w-5 h-5" /> Important Dates
            </h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-sm text-gray-300">Admit Card Release</span>
                <span className="font-bold text-white text-sm bg-white/10 px-2 py-1 rounded">10 Nov 2026</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-sm text-gray-300">Exams Begin</span>
                <span className="font-bold text-white text-sm bg-white/10 px-2 py-1 rounded">25 Nov 2026</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm text-gray-300">Center Change Request</span>
                <span className="font-bold text-rose-400 text-sm">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Center List */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">Approved Examination Centers (Phase-I)</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {centers.map((center, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-primary transition-colors"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="bg-gray-100 text-gray-700 text-xs font-black px-2 py-1 rounded uppercase tracking-widest mb-2 inline-block">Center Code: {center.code}</span>
                  <h3 className="text-xl font-bold text-gray-900">{center.name}</h3>
                </div>
                <div className="bg-primary/10 text-primary p-2 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-bold text-gray-800 w-20">Address:</span> {center.address}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-bold text-gray-800 w-20">Streams:</span> {center.streams}
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-bold text-gray-800 w-20">Capacity:</span> {center.capacity} Students / shift
                </p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-800 text-sm font-bold py-2.5 rounded-lg border border-gray-200 transition-colors flex items-center justify-center gap-2">
                  <FileDown className="w-4 h-4" /> Seating Plan
                </button>
                <button className="flex-1 bg-gray-900 hover:bg-black text-white text-sm font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" /> Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
}
