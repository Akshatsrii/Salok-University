import { Link } from "react-router-dom";
import { GraduationCap, Building2, Trophy, Users, BookOpen, ChevronRight, Shield, MapPin, Phone, Mail, Clock, Bell, FileText, Lightbulb, Download, Settings, HeartHandshake, Eye, Target, Zap } from "lucide-react";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function PageHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent w-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-[60%]">
            <GsapReveal>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1]">
                Welcome to <br/>
                <span className="text-[#ffcc00]">Salok University</span>
              </h1>
              <p className="text-white/90 text-sm md:text-lg mb-10 max-w-xl leading-relaxed drop-shadow-md">
                A premier institution dedicated to academic excellence, innovative research, and holistic development. Shaping the leaders of tomorrow in a state-of-the-art campus.
              </p>
              <div className="flex gap-4">
                <Link to="/admissions" className="bg-[#ffcc00] text-[#8a1538] px-8 py-3 rounded font-black hover:bg-white transition-all shadow-lg text-sm inline-block tracking-wide uppercase">
                  Admissions Open
                </Link>
                <Link to="/about" className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded font-bold hover:bg-white/30 transition-all shadow-lg text-sm inline-block tracking-wide uppercase">
                  Discover Salok
                </Link>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      {/* 2. QUICK IMPORTANT LINKS (Inspired by Image 1) */}
      <section className="py-12 bg-white relative -mt-10 z-20 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-2xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Important Links</h2>
          <div className="w-16 h-1 bg-[#8a1538] mx-auto mt-2 rounded"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-8">
          {[
            { icon: Building2, label: 'University Dept', color: 'text-indigo-600', bg: 'bg-indigo-50' },
            { icon: BookOpen, label: 'Research', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { icon: FileText, label: 'RTI', color: 'text-amber-600', bg: 'bg-amber-50' },
            { icon: Download, label: 'Downloads', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: HeartHandshake, label: 'Support System', color: 'text-purple-600', bg: 'bg-purple-50' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-xl hover:shadow-lg transition-all cursor-pointer group bg-white">
              <div className={`${item.bg} w-16 h-16 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <span className="text-sm font-bold text-gray-700 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STATS STRIP (Inspired by Image 1 bottom) */}
      <section className="bg-[#1e293b] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700">
            <div className="flex flex-col items-center justify-center">
              <Building2 className="w-8 h-8 text-gray-400 mb-3" />
              <div className="text-sm font-medium text-gray-400 mb-1">Affiliated Colleges</div>
              <div className="text-4xl font-black text-white">158</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <GraduationCap className="w-8 h-8 text-gray-400 mb-3" />
              <div className="text-sm font-medium text-gray-400 mb-1">Total Courses</div>
              <div className="text-4xl font-black text-white">74</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Users className="w-8 h-8 text-gray-400 mb-3" />
              <div className="text-sm font-medium text-gray-400 mb-1">Total Students</div>
              <div className="text-4xl font-black text-white">1.5 Lac+</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Trophy className="w-8 h-8 text-gray-400 mb-3" />
              <div className="text-sm font-medium text-gray-400 mb-1">Total Faculties</div>
              <div className="text-4xl font-black text-white">7,253</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION / ABOUT SALOK (Inspired by Image 3) */}
      <section className="py-20 bg-[#0f172a] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-10">
              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Building2 className="w-6 h-6 text-[#ffcc00]" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Salok University</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Established to enhance technical and holistic education in the state. We affiliate over 158 colleges and provide world-class infrastructure.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Eye className="w-6 h-6 text-[#ffcc00]" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">To achieve academic excellence by imparting in-depth knowledge to students, facilitating research activities, and catering to ever-changing industrial demands.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="shrink-0 w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Target className="w-6 h-6 text-[#ffcc00]" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-2">Our Mission</h3>
                  <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc pl-4">
                    <li>Provide quality engineering and management education.</li>
                    <li>Offer state-of-the-art education and facilities.</li>
                    <li>Establish strong industry-institute interaction.</li>
                    <li>Promote research-based projects and develop centers of excellence.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Photo Collage */}
            <div className="lg:w-1/2 relative h-[500px] w-full">
               <div className="absolute top-0 right-10 w-64 h-48 border-4 border-white shadow-2xl rounded transform rotate-3 hover:rotate-0 transition-transform z-10 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" className="w-full h-full object-cover" />
               </div>
               <div className="absolute top-32 left-0 w-72 h-56 border-4 border-white shadow-2xl rounded transform -rotate-3 hover:rotate-0 transition-transform z-20 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800" className="w-full h-full object-cover" />
               </div>
               <div className="absolute bottom-0 right-0 w-80 h-48 border-4 border-white shadow-2xl rounded transform -rotate-2 hover:rotate-0 transition-transform z-30 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800" className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NOTICE BOARDS & GRID LINKS (Exact Replica of RTU Layout) */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            
            {/* COLUMN 1 */}
            <div className="space-y-6">
              <div className="bg-[#f5f6f8] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f59e0b] border-r-transparent"></div>
                <Zap className="absolute top-1.5 left-1.5 w-4 h-4 text-white z-10" />
                <div className="p-5 pt-8">
                  <h3 className="text-center font-medium text-gray-800 border-b border-dashed border-gray-300 pb-3 mb-4 text-lg">Admission</h3>
                  <ul className="space-y-3 text-[13px] text-gray-600">
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> <Link to="/academic-calendar" className="hover:underline">Academic Calendar</Link></li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> UD Admission</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> CAM-2023</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer">
                      <span className="text-gray-400 mt-1">➦</span> 
                      <span>PhD Admission Process 2026-27 <br/><span className="text-[9px] font-bold text-green-500 bg-green-50 px-1 border border-green-200 rounded animate-pulse">NEW</span></span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Syllabus</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#f5f6f8] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f59e0b] border-r-transparent"></div>
                <Zap className="absolute top-1.5 left-1.5 w-4 h-4 text-white z-10" />
                <div className="p-5 pt-8">
                  <h3 className="text-center font-medium text-gray-800 border-b border-dashed border-gray-300 pb-3 mb-4 text-lg">Circulars</h3>
                  <ul className="space-y-3 text-[13px] text-gray-600">
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> RTI Information</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Circulars</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> BOM/AC/FC Minutes</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> RUSA Minutes</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Download form no. 16</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> TEQIP-III</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Central Library</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-6">
              <div className="bg-[#f5f6f8] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f59e0b] border-r-transparent"></div>
                <Zap className="absolute top-1.5 left-1.5 w-4 h-4 text-white z-10" />
                <div className="p-5 pt-8">
                  <h3 className="text-center font-medium text-gray-800 border-b border-dashed border-gray-300 pb-3 mb-4 text-lg leading-tight">Application for Mark sheet/Certificate</h3>
                  <ul className="space-y-3 text-[13px] text-gray-600">
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Online Process</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Offline Process</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400 mt-1">➦</span> <span>Online Application for Various Academic Certificates</span></li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#f5f6f8] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f59e0b] border-r-transparent"></div>
                <Zap className="absolute top-1.5 left-1.5 w-4 h-4 text-white z-10" />
                <div className="p-5 pt-8">
                  <h3 className="text-center font-medium text-gray-800 border-b border-dashed border-gray-300 pb-3 mb-4 text-lg">Examination</h3>
                  <ul className="space-y-3 text-[13px] text-gray-600">
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Exam Centers</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Time Table</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Notices</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Copy View Notice</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> XV Convocation-2026 <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span></li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Mercy Chance <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div className="space-y-6">
              <div className="bg-[#f5f6f8] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f59e0b] border-r-transparent"></div>
                <Zap className="absolute top-1.5 left-1.5 w-4 h-4 text-white z-10" />
                <div className="p-5 pt-8">
                  <h3 className="text-center font-medium text-gray-800 border-b border-dashed border-gray-300 pb-3 mb-4 text-lg">Important Links</h3>
                  <ul className="space-y-3 text-[13px] text-gray-600">
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Thought lab <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span></li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Results Page UTD <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span></li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> e-Samadhan portal</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Affiliated Colleges</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#f5f6f8] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f59e0b] border-r-transparent"></div>
                <Zap className="absolute top-1.5 left-1.5 w-4 h-4 text-white z-10" />
                <div className="p-5 pt-8">
                  <h3 className="text-center font-medium text-gray-800 border-b border-dashed border-gray-300 pb-3 mb-4 text-lg leading-tight">Student Support Services</h3>
                  <ul className="space-y-3 text-[13px] text-gray-600">
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Expert Faculty Lecture</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Dean Student Welfare</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Programs Offered</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Register Complaints</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> SC/ST/OBC Cell (Grievances)</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Student Credentials</li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Training & Placement <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span></li>
                    <li className="flex items-start gap-2 hover:text-[#f59e0b] cursor-pointer"><span className="text-gray-400">➦</span> Mahila utpeedan samiti <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* COLUMN 4 (TALL) */}
            <div className="h-full">
              <div className="bg-[#fff9f0] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full border border-[#fef3c7]">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#f59e0b] border-r-transparent"></div>
                <Zap className="absolute top-1.5 left-1.5 w-4 h-4 text-white z-10" />
                <div className="p-5 pt-8 flex flex-col h-full">
                  <h3 className="text-center font-medium text-gray-800 border-b border-dashed border-gray-300 pb-3 mb-4 text-lg">Recent News</h3>
                  <div className="space-y-6 text-[13px] text-gray-600 overflow-y-auto custom-scrollbar flex-1 pr-2 relative">
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gray-300 rounded-full"></div>
                    <div className="absolute right-0 top-1/4 h-1/3 w-1 bg-gray-500 rounded-full"></div>
                    
                    <p className="pb-4 border-b border-gray-200">
                      Determine the interim fee structure for the 2026-27 academic session for non-aided private technical educational institutions that are functional during that session.
                      <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span>
                    </p>
                    <p className="pb-4 border-b border-gray-200">
                      Notice for Last Date Extension (Additional Mercy/ Mercy chance Special Exam., 2025-26)
                      <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span>
                    </p>
                    <p className="pb-4 border-b border-gray-200">
                      Important Advisory for the Students of Salok University. Precaution against fraud related to re-evaluation, back papers, increase in marks, and examination results
                      <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse mt-1 inline-block">NEW</span>
                    </p>
                    <p className="pb-4 border-b border-gray-200">
                      Industrial Consultancy Cell reconstitution
                      <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span>
                    </p>
                    <p className="pb-2">
                      List of Conveners for various Board of Studies(BoS)
                      <span className="text-[9px] font-bold text-green-500 ml-1 border border-green-200 rounded animate-pulse">NEW</span>
                      <br/><a href="#" className="font-bold text-gray-800 mt-2 inline-block">More..</a>
                    </p>
                  </div>
                  <div className="h-1 bg-[#4b5563] mt-2 rounded"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. IMAGE GALLERY (Inspired by Image 4) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Campus Gallery</h2>
            <div className="w-16 h-1 bg-[#8a1538] mx-auto mt-4 rounded"></div>
            <p className="text-gray-500 mt-4">Collection of images and events all together</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Infrastructure', count: 21, img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800' },
              { title: 'Press Release', count: 32, img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800' },
              { title: 'Events', count: 45, img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800' },
              { title: 'Seminars', count: 18, img: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800' },
            ].map((item, idx) => (
              <div key={idx} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-4xl font-black mb-1">{item.count}</span>
                  <span className="font-bold tracking-wider">{item.title}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#d97706] text-white text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1 hover:bg-[#b45309] transition-colors">
                    <Eye className="w-3 h-3" /> View More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT & LOCATION MAP */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us On Campus</h2>
            <div className="w-16 h-1 bg-[#8a1538] mx-auto mt-2 rounded mb-4"></div>
            <p className="text-gray-500 max-w-2xl mx-auto">We're located in the heart of the educational hub. Drop by for a campus tour or contact our administrative office for any queries.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
            <div className="lg:w-1/3 bg-[#0f172a] text-white p-10">
              <h3 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-4">Contact Info</h3>
              
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
              </div>
            </div>
            
            <div className="lg:w-2/3 min-h-[400px] relative bg-gray-200">
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

      {/* 8. BIG CALL TO ACTION */}
      <section className="relative h-[300px] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#8a1538]/90 mix-blend-multiply"></div>
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
