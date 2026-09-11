import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { Home, ChevronRight, FileText, Download, Link as LinkIcon } from "lucide-react";

export default function PhdAdmissionPage() {
  const syllabusLinks = [
    "Chemical Engineering",
    "Research Methodology",
    "Environmental Engineering",
    "Transportation Engineering",
    "Structural Engineering",
    "Geotechnical Engineering",
    "High performance computing system",
    "Power System",
    "Power Electronics and Electric Drives",
    "Control and Instrumentation",
    "Database Management System",
    "Software Engineering",
    "Finance Management",
    "Human Resource",
    "Marketing Management",
    "Banking",
    "General Management"
  ];

  const admissionDetails = [
    { title: "To Apply for Stage-2 PhD Admission (Through RTU DAT-2026)", linkText: "Click here" },
    { title: "Schedule of PhD Admission for Session 2026-27 (updated on 08.09.2026)", linkText: "View" },
    { title: "Provisional List of Candidates Selected under Stage- I PhD Admissions 2026-27", linkText: "Click here" },
    { title: "Provisional list of Research Centers and vacant seats for the Session 2026-27 (After PhD Admissions under Stage-1)", linkText: "Click here" },
    { title: "Provisional List of Eligible Candidates for appearing in Interview on 24.08.2026 under Stage-I", linkText: "Click here" },
    { title: "Information Booklet - PhD Admission Process 2026-27", linkText: "View" },
    { title: "ADVERTISEMENT PhD Admission Process 2026-2027", linkText: "View" }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <PublicNavbar />
      
      {/* Premium Header - Black/Red Theme */}
      <section className="bg-gradient-to-r from-[#111111] to-[#2a1118] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-primary/20 rounded-full blur-[80px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">PhD Admission 2026</h1>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">PhD Admission 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-12 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar - Syllabus Links */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-8">
            <div className="bg-[#1a1a1a] p-4 border-t-4 border-primary">
              <h3 className="text-white font-bold text-lg leading-tight">
                Syllabus Links (For Stage 2 PhD Admission through RTU DAT-2026)
              </h3>
            </div>
            <ul className="divide-y divide-gray-100 max-h-[800px] overflow-y-auto">
              {syllabusLinks.map((subject, idx) => (
                <li key={idx}>
                  <a href="#" className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 group-hover:bg-primary"></div>
                    <span className="text-sm text-gray-700 group-hover:text-primary">{subject}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Content - Table & Poster */}
        <div className="lg:w-3/4 space-y-8">
          
          {/* Details Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#111111] text-white">
                  <th className="p-4 font-bold border-b-2 border-primary w-4/5 text-center">DETAIL</th>
                  <th className="p-4 font-bold border-b-2 border-primary w-1/5 text-center">VIEW/DOWNLOAD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {admissionDetails.map((row, idx) => (
                  <tr key={idx} className="bg-[#facc15] hover:bg-[#eab308] transition-colors">
                    <td className="p-4 text-black font-semibold border-r border-black/10 text-sm md:text-base">
                      {row.title}
                    </td>
                    <td className="p-4 text-center">
                      <a href="#" className="inline-flex items-center gap-1 text-[#1e3a8a] hover:text-black font-bold text-sm transition-colors">
                        {row.linkText === 'View' ? <FileText className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
                        {row.linkText}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Info Poster Replica (CSS Based) */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
            
            <div className="text-center mb-10 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1e3a8a] mb-4">Ph.D. Admissions</h2>
              <h1 className="text-6xl md:text-8xl font-black text-[#ea580c] tracking-tight">2026-27</h1>
            </div>

            <div className="bg-white border-2 border-[#1e3a8a] rounded-lg p-6 mb-8 relative z-10 shadow-sm flex items-center gap-6">
              <div className="bg-[#1e3a8a] text-white p-4 rounded-lg flex-shrink-0">
                <FileText className="w-10 h-10" />
              </div>
              <div>
                <p className="text-xl font-bold text-[#1e3a8a] mb-1">Under Stage-II, candidates from</p>
                <p className="text-lg text-gray-700">Engineering, Management Studies and Computer Applications may apply.</p>
              </div>
            </div>

            <div className="bg-white border-2 border-primary rounded-lg p-6 mb-8 relative z-10 shadow-sm flex items-center justify-center gap-4">
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">
                Last Date to Apply: <span className="text-primary font-black">05.09.2026</span>
              </h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 relative z-10">
              <p className="text-gray-800 text-lg leading-relaxed text-center font-medium">
                Eligible and interested Ph.D. aspirants are advised to complete their application within the stipulated deadline and regularly visit the official university website for detailed information regarding <span className="text-[#1e3a8a] font-bold">eligibility, available seats, examination schedule, syllabus</span> and <span className="text-[#1e3a8a] font-bold">guidelines</span>.
              </p>
            </div>
            
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
