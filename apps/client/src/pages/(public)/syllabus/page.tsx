import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronDown, FileText } from "lucide-react";
import { useState } from "react";

export default function SyllabusPage() {
  const [oldSyllabusOpen, setOldSyllabusOpen] = useState(true);
  const [btech2012Open, setBtech2012Open] = useState(false);

  const revisedSyllabusLinks = [
    "Letter reg. balance the number of students admitted in B.Tech. 1st year 2026-27 and onwards",
    "2nd amendment in the office order for MOOCs Courses",
    "Scheme CSE (AI) V & VI Sem. for B.Tech. student admitted from session 2023-24 onwards",
    "Open Elective - Scheme & Syllabus 4th year VII & VIII semester for B.Tech. student admitted from session 2021-22 onwards",
    "Scheme and syllabus CSE (AI) 4th year VII & VIII Sem. for B.Tech. student admitted from session 2021-22 onwards",
    "Scheme and Syllabus AI & DS 4th Year VII & VIII Sem. for B.Tech. student admitted from session 2021-22 onwards",
    "Office order regarding guidelines for MOOCs courses and open electives for M.Tech. program",
    "University guidelines regarding the MOOCS Courses",
    "Notification alongwith Guidelines and Syllabuses for Foundation Courses for the students admitted from 2023-24 onwards",
    "First year part time PG scheme",
    "Non-Engineering Courses scheme & syllabus",
    "Teaching and Examination Scheme I Semester: B. Tech Common to all branches of UG Engineering & Technology (Scheme & Syllabus of First Year B. Tech. effective for Session 2023-24 onwards)",
    "Office order for Bridge course for students admitted for B.Tech. 1st year session 2021-22",
    "syllabus & Guideline for Bridge course for students admitted for B.Tech. 1st year session 2021-22",
    "Bridge course guidelines and syllabus for LEEP students for 2020-21 and onwards",
    "Scheme and syllabus for B.Tech. I year for session 2021-22 onwards",
    "CBCS Gidelines Revised (22.12.2020) 2020-21",
    "Guidelines for new Scheme of U.G. (B.Tech.) courses in Engg. & Technology",
    "Open Elective Scheme and Syllabus 4th year"
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Academic Syllabus</h1>
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Syllabus</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-12 w-full flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar - Navigation */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-8 text-sm">
            
            <ul className="divide-y divide-gray-100">
              <li>
                <a href="#" className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 group-hover:bg-primary"></div>
                  <span className="text-gray-700 group-hover:text-primary leading-tight">
                    Letter reg. balance the number of students admitted in B.Tech. 1st year 2026-27 and onwards
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 group-hover:bg-primary"></div>
                  <span className="text-gray-700 group-hover:text-primary leading-tight">B.Tech 1 Year (NEP 2020)</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 group-hover:bg-primary"></div>
                  <span className="text-gray-700 group-hover:text-primary leading-tight">BBA 1st Year (NEP 2020)</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 group-hover:bg-primary"></div>
                  <span className="text-gray-700 group-hover:text-primary leading-tight">MBA 1st Year (NEP 2020)</span>
                </a>
              </li>

              {/* Accordion for OLD SYLLABUS */}
              <li>
                <button 
                  onClick={() => setOldSyllabusOpen(!oldSyllabusOpen)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors font-bold text-gray-800"
                >
                  <span>OLD SYLLABUS</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${oldSyllabusOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {oldSyllabusOpen && (
                  <ul className="pl-4 divide-y divide-gray-50 border-t border-gray-100 bg-white">
                    {["Non-Engineering", "B.Tech From 2021-2022", "B.Tech 2017-20"].map((item, idx) => (
                      <li key={idx}>
                        <a href="#" className="flex items-start gap-3 p-2 hover:bg-gray-50 transition-colors group">
                          <div className="w-1 h-1 bg-gray-300 rounded-full mt-2 group-hover:bg-primary"></div>
                          <span className="text-gray-600 group-hover:text-primary">{item}</span>
                        </a>
                      </li>
                    ))}
                    
                    {/* Nested Accordion for B.Tech 2012-13 */}
                    <li>
                      <button 
                        onClick={() => setBtech2012Open(!btech2012Open)}
                        className="w-full flex items-center justify-between p-2 hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3 group">
                          <div className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-primary"></div>
                          <span className="text-gray-600 group-hover:text-primary">B.Tech 2012-13</span>
                        </div>
                        <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${btech2012Open ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {btech2012Open && (
                        <ul className="pl-6 pb-2 border-l-2 border-gray-100 ml-3">
                          <li>
                            <a href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 transition-colors group">
                              <span className="text-gray-500 group-hover:text-primary text-xs">• B.Tech (2011-12 and older)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center gap-2 p-1.5 hover:bg-gray-50 transition-colors group">
                              <span className="text-gray-500 group-hover:text-primary text-xs">• B.Tech 2012-13</span>
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>

                    {["BBA", "BCA", "B.Arch.", "M.Tech", "M.Arch", "MBA", "MAM", "MCA"].map((item, idx) => (
                      <li key={idx}>
                        <a href="#" className="flex items-start gap-3 p-2 hover:bg-gray-50 transition-colors group">
                          <div className="w-1 h-1 bg-gray-300 rounded-full mt-2 group-hover:bg-primary"></div>
                          <span className="text-gray-600 group-hover:text-primary">{item}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Right Content - Table & List */}
        <div className="lg:w-3/4 space-y-6">
          
          {/* Table Header Wrapper (Matches screenshot style) */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="p-3 border-r border-white/20 text-center w-10">#</th>
                  <th className="p-3 border-r border-white/20 text-center">SESSION</th>
                  <th className="p-3 border-r border-white/20 text-center">COURSE</th>
                  <th className="p-3 border-r border-white/20 text-center">BRANCH</th>
                  <th className="p-3 border-r border-white/20 text-center">SEMESTER</th>
                  <th className="p-3 border-r border-white/20 text-center">SCHEME</th>
                  <th className="p-3 text-center">SYLLABUS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#112255] text-white">
                  <td className="p-3 border-r border-white/20 text-center">#</td>
                  <td className="p-3 border-r border-white/20 text-center">SESSION</td>
                  <td className="p-3 border-r border-white/20 text-center">COURSE</td>
                  <td className="p-3 border-r border-white/20 text-center">BRANCH</td>
                  <td className="p-3 border-r border-white/20 text-center">SEMESTER</td>
                  <td className="p-3 border-r border-white/20 text-center">SCHEME</td>
                  <td className="p-3 text-center">SYLLABUS</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Yellow Banner */}
          <div className="bg-black text-[#eab308] font-bold text-center py-2 px-4 shadow-sm border-l-4 border-r-4 border-[#eab308]">
            REVISED SYLLABUS FOR UNDERGRADUATE PROGRAMME
          </div>

          {/* Links List */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <ul className="space-y-3">
              {revisedSyllabusLinks.map((link, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 hover:text-primary transition-colors cursor-pointer group">
                  <span className="text-gray-400 mt-0.5 group-hover:text-primary">•</span>
                  <p className="leading-relaxed">
                    {link}
                    <span className="ml-2 inline-flex items-center text-[10px] font-bold text-[#ef4444] animate-pulse">
                      NEW
                      <span className="text-[#eab308] ml-0.5">★</span>
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
