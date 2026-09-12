import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { FileText, Download, Filter, Search, ChevronRight, BellRing } from "lucide-react";

export default function CircularsPage() {
  const circulars = [
    { id: "CIR-2026-104", date: "05 Sep 2026", title: "Declaration of Holiday on account of Janmashtami", category: "Administrative", isNew: true },
    { id: "CIR-2026-103", date: "02 Sep 2026", title: "Revised Guidelines for Ph.D. Course Work 2026", category: "Academic", isNew: true },
    { id: "CIR-2026-102", date: "28 Aug 2026", title: "Constitution of Anti-Ragging Committee for Academic Year 2026-27", category: "Notices", isNew: false },
    { id: "CIR-2026-101", date: "20 Aug 2026", title: "Schedule for Internal Assessment and Mid-Term Examinations", category: "Examination", isNew: false },
    { id: "CIR-2026-100", date: "15 Aug 2026", title: "Flag Hoisting Ceremony on Independence Day", category: "Events", isNew: false },
    { id: "CIR-2026-099", date: "10 Aug 2026", title: "Submission of Annual Performance Appraisal Reports (APAR)", category: "Faculty", isNew: false },
    { id: "CIR-2026-098", date: "01 Aug 2026", title: "Renewal of Medical Insurance Policy for University Employees", category: "Administrative", isNew: false },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <PublicNavbar />

      {/* Premium Header */}
      <section className="bg-gradient-to-r from-[#111111] to-[#2a1118] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-wider uppercase mb-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Circulars</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 flex items-center gap-3">
              Official Circulars
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              Stay updated with the latest administrative, academic, and examination circulars issued by Salok University.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse">
              <BellRing className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/70 font-bold uppercase">Latest Update</p>
              <p className="font-bold text-sm">Janmashtami Holiday Declared</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-12 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar - Filters */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-primary" /> Filter Circulars
            </h3>

            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Search</label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <input type="text" placeholder="Keywords or Ref ID" className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">Category</label>
                <div className="space-y-2">
                  {["All Categories", "Administrative", "Academic", "Examination", "Notices", "Events", "Faculty"].map((cat, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${idx === 0 ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'}`}>
                        {idx === 0 && <div className="w-2 h-2 bg-white rounded-sm"></div>}
                      </div>
                      <span className={`text-sm ${idx === 0 ? 'font-bold text-gray-900' : 'text-gray-600 group-hover:text-gray-900'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Year</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary">
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                  <option>Archive</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Circulars List */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            
            {/* Header row */}
            <div className="bg-gray-50 p-4 border-b border-gray-200 grid grid-cols-12 gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <div className="col-span-2 text-center">Date</div>
              <div className="col-span-1 text-center">Ref ID</div>
              <div className="col-span-7 pl-4">Title / Subject</div>
              <div className="col-span-2 text-center">Action</div>
            </div>

            {/* List */}
            <div className="divide-y divide-gray-100">
              {circulars.map((circ, idx) => (
                <div key={idx} className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors group">
                  
                  {/* Date */}
                  <div className="col-span-2 text-center">
                    <span className="block text-2xl font-black text-gray-900 leading-none">{circ.date.split(" ")[0]}</span>
                    <span className="text-xs font-bold text-primary uppercase">{circ.date.split(" ")[1]} {circ.date.split(" ")[2]}</span>
                  </div>
                  
                  {/* ID */}
                  <div className="col-span-1 text-center">
                    <span className="text-[10px] font-mono font-bold bg-gray-200 text-gray-600 py-1 px-2 rounded">{circ.id.split("-")[2]}</span>
                  </div>

                  {/* Title */}
                  <div className="col-span-7 pl-4">
                    <h3 className="font-bold text-gray-800 text-sm group-hover:text-primary transition-colors flex items-center gap-2">
                      {circ.title}
                      {circ.isNew && (
                        <span className="bg-[#ef4444] text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded animate-pulse">New</span>
                      )}
                    </h3>
                    <span className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                      <FileText className="w-3 h-3" /> {circ.category}
                    </span>
                  </div>

                  {/* Action */}
                  <div className="col-span-2 flex justify-center">
                    <button className="flex items-center gap-2 bg-gray-900 hover:bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg transition-colors">
                      <Download className="w-3.5 h-3.5" /> <span className="hidden xl:inline">PDF</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-gray-50 text-sm">
              <span className="text-gray-500">Showing 1 to 7 of 45 circulars</span>
              <div className="flex gap-1">
                <button className="w-8 h-8 rounded border border-gray-300 bg-white flex items-center justify-center text-gray-400 cursor-not-allowed">
                  &lt;
                </button>
                <button className="w-8 h-8 rounded border border-primary bg-primary text-white font-bold flex items-center justify-center">
                  1
                </button>
                <button className="w-8 h-8 rounded border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700">
                  2
                </button>
                <button className="w-8 h-8 rounded border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700">
                  3
                </button>
                <button className="w-8 h-8 rounded border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-700">
                  &gt;
                </button>
              </div>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
