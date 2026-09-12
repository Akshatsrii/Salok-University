import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { Calendar, Download, ChevronRight, Filter, Search, FileText } from "lucide-react";

export default function TimetablePage() {
  const timetables = [
    { title: "B.Tech VI Semester (Main/Back) Exam 2026", date: "20 Sep 2026", type: "Theory", new: true },
    { title: "MBA IV Semester (Main) Exam 2026", date: "18 Sep 2026", type: "Theory", new: true },
    { title: "B.Arch II Semester (Back) Exam 2026", date: "15 Sep 2026", type: "Practical", new: false },
    { title: "M.Tech II Semester (Main) Exam 2026", date: "10 Sep 2026", type: "Theory", new: false },
    { title: "BBA VI Semester (Main) Exam 2026", date: "05 Sep 2026", type: "Theory", new: false },
    { title: "MCA IV Semester (Main/Back) Exam 2026", date: "01 Sep 2026", type: "Practical", new: false }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111111] to-[#2a1118] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="flex justify-center items-center gap-2 text-primary text-sm font-bold tracking-wider uppercase mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Examination</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            University Exam Timetable
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Download official theory and practical examination schedules for all affiliated colleges and university departments.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search Course (e.g. B.Tech VI Sem)" 
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-12 pr-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-primary focus:bg-white/20 transition-all"
              />
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-primary/30 shrink-0">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar Filters */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-8">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-primary" /> Filter Schedule
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">Program</label>
                <div className="space-y-2">
                  {["All Programs", "B.Tech", "M.Tech", "B.Arch", "MBA", "MCA", "BBA", "BCA"].map((cat, idx) => (
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
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">Exam Type</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border bg-primary border-primary flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">Both</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-primary"></div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900">Theory</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center group-hover:border-primary"></div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900">Practical</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right List */}
        <div className="lg:w-3/4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            
            <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-bold text-gray-900 text-lg">Latest Timetables</h2>
              <span className="text-xs font-bold text-gray-500">Total: 45 results</span>
            </div>

            <div className="divide-y divide-gray-100">
              {timetables.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0 group-hover:bg-red-50 group-hover:text-primary transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                        {item.title}
                        {item.new && (
                          <span className="bg-[#ef4444] text-white text-[9px] font-black uppercase px-1.5 py-0.5 rounded animate-pulse">New</span>
                        )}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500 font-medium">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Posted: {item.date}</span>
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">{item.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto bg-white border border-gray-200 hover:border-primary hover:bg-red-50 text-gray-900 hover:text-primary font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-center">
              <button className="text-sm font-bold text-primary hover:underline">Load More...</button>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
