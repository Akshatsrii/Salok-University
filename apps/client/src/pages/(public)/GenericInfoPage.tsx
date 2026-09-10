import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { Home, ChevronRight, FileText, Download, CheckCircle2 } from "lucide-react";

interface GenericInfoPageProps {
  title: string;
  category: string;
  description: string;
  features: string[];
  documents?: string[];
}

export default function GenericInfoPage({ title, category, description, features, documents = ["Official Notification.pdf", "Guidelines 2026.pdf", "Application Form.pdf"] }: GenericInfoPageProps) {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <PublicNavbar />
      
      {/* Premium Header */}
      <section className="bg-gradient-to-r from-[#1e446d] to-[#2c5f96] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000')] opacity-5 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/70 text-sm mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors"><Home className="w-4 h-4" /></Link>
            <ChevronRight className="w-4 h-4" />
            <span>{category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">{title}</h1>
          <div className="w-20 h-1.5 bg-[#f59e0b] rounded"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full flex flex-col lg:flex-row gap-10">
        
        {/* Left Content */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1e446d] mb-6">Overview & Information</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {description}
            </p>

            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-[#f59e0b]" /> 
              Key Highlights & Procedures
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#fff9f0] border-l-4 border-[#f59e0b] p-6 rounded-r-lg">
              <h4 className="font-bold text-[#b45309] text-lg mb-2">Important Notice</h4>
              <p className="text-gray-700 text-sm">
                Candidates and students are advised to regularly check the official Salok University website for the latest updates. Do not fall for fraudulent communications.
              </p>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3 space-y-8">
          
          {/* Downloads Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">Downloads & Resources</h3>
            <ul className="space-y-3">
              {documents.map((doc, idx) => (
                <li key={idx}>
                  <a href="#" className="flex items-center justify-between p-3 rounded bg-gray-50 hover:bg-[#1e446d] hover:text-white transition-colors group border border-gray-100">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-white flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400 group-hover:text-white/80" />
                      {doc}
                    </span>
                    <Download className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Card */}
          <div className="bg-[#1e446d] rounded-xl p-6 shadow-lg text-white">
            <h3 className="text-lg font-bold mb-4 pb-3 border-b border-white/20">Related Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/academic-calendar" className="hover:text-[#f59e0b] flex items-center gap-2 transition-colors"><ChevronRight className="w-3 h-3" /> Academic Calendar</Link></li>
              <li><Link to="/admissions" className="hover:text-[#f59e0b] flex items-center gap-2 transition-colors"><ChevronRight className="w-3 h-3" /> UD Admission Portal</Link></li>
              <li><Link to="/exam-centers" className="hover:text-[#f59e0b] flex items-center gap-2 transition-colors"><ChevronRight className="w-3 h-3" /> Check Exam Centers</Link></li>
              <li><Link to="/timetable" className="hover:text-[#f59e0b] flex items-center gap-2 transition-colors"><ChevronRight className="w-3 h-3" /> University Time Table</Link></li>
              <li><Link to="/contact" className="hover:text-[#f59e0b] flex items-center gap-2 transition-colors"><ChevronRight className="w-3 h-3" /> Contact Helpdesk</Link></li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
