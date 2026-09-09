import { Link } from "react-router-dom";
import { ChevronRight, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#8a1538] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4 w-full md:w-1/3">
            <div className="relative w-16 h-20 flex items-center justify-center">
              <Shield className="w-20 h-20 text-white absolute inset-0 drop-shadow-md" fill="white" />
              <div className="relative z-10 flex flex-col items-center justify-center text-[#8a1538] font-serif font-black leading-none mt-1">
                <span className="text-3xl">S</span>
                <span className="text-sm">U</span>
              </div>
            </div>
            <div className="ml-2">
              <span className="text-white text-2xl font-bold block leading-tight font-serif">Salok</span>
              <span className="text-white/90 text-lg font-medium tracking-wide">University</span>
            </div>
          </div>

          {/* Address & Contact Section */}
          <div className="w-full md:w-1/3 space-y-6">
            <div>
              <p className="text-sm text-white/90 leading-relaxed max-w-xs">
                Knowledge Park, Sector 42,<br/>
                Institutional Area, India - 110042
              </p>
              <button className="flex items-center gap-1 text-xs font-bold mt-2 hover:text-[#ffcc00] transition-colors">
                Directions <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            
            <div>
              <p className="text-sm text-white/90 leading-relaxed max-w-xs">
                University Office : +91 1800 123 4567<br/>
                Email : info@salok.edu.in
              </p>
              <button className="flex items-center gap-1 text-xs font-bold mt-2 hover:text-[#ffcc00] transition-colors">
                Contact Us <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/3">
            <ul className="space-y-4 flex flex-col items-start md:items-end w-full pr-0 md:pr-12">
              <li><Link to="/about" className="text-sm font-bold hover:text-[#ffcc00] transition-colors">About</Link></li>
              <li><Link to="/admissions" className="text-sm font-bold hover:text-[#ffcc00] transition-colors">Admissions</Link></li>
              <li><Link to="/academics" className="text-sm font-bold hover:text-[#ffcc00] transition-colors">Academics</Link></li>
              <li><Link to="/contact" className="text-sm font-bold hover:text-[#ffcc00] transition-colors">Office</Link></li>
              <li><Link to="/admissions" className="text-sm font-bold hover:text-[#ffcc00] transition-colors">Scholarship</Link></li>
              <li><Link to="/research" className="text-sm font-bold hover:text-[#ffcc00] transition-colors">Achievements</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
