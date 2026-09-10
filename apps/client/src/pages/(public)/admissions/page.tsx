import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { Home, ChevronRight, Phone } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <PublicNavbar />
      
      {/* Breadcrumb Bar */}
      <section className="bg-[#4285f4] text-white py-3 px-4 sm:px-8 border-b border-[#3367d6]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link to="/" className="hover:text-white/80 transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4 text-white/70" />
          <span className="font-medium">Admission UTD Salok University</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-12 w-full">
        
        <div className="bg-white rounded-lg p-6 md:p-10 min-h-[400px]">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-100">
            Office order and Notifications
          </h2>

          <div className="space-y-8 max-w-3xl">
            
            {/* Hostel Enquiry Numbers */}
            <div className="bg-gray-50 border-l-4 border-[#f59e0b] p-6 rounded-r-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#f59e0b]" /> 
                Hostel Enquiry Numbers
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                  <p className="text-gray-600 font-medium mb-1">Boys Hostel Enquiry Number</p>
                  <p className="text-xl font-bold text-[#1e446d] tracking-wide">0744 247 3994</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                  <p className="text-gray-600 font-medium mb-1">Girls Hostel Enquiry Number</p>
                  <p className="text-xl font-bold text-[#1e446d] tracking-wide">0744 247 3863</p>
                </div>
              </div>
            </div>

            {/* Links List */}
            <div className="pt-4 pl-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full border-2 border-gray-400"></span>
                  <a href="#" className="text-lg text-gray-700 hover:text-[#1e446d] hover:underline font-medium transition-colors">
                    Admission Link
                  </a>
                  <span className="text-[10px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 border border-purple-200 px-1.5 py-0.5 rounded animate-pulse shadow-sm">
                    NEW
                  </span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
