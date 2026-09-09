import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-white pt-16 pb-8 border-t border-gray-200 overflow-hidden">
      {/* Background Image with heavy white overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000" 
          alt="University Background" 
          className="w-full h-full object-cover opacity-10 grayscale"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Salok University */}
          <div>
            <h3 className="text-[#334155] text-lg font-bold mb-4 relative inline-block">
              Salok University
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#f59e0b]"></span>
            </h3>
            <ul className="space-y-3 text-sm text-[#475569] mt-2">
              <li><Link to="/about" className="hover:text-[#f59e0b] transition-colors">About University</Link></li>
              <li><Link to="/strategic-plan" className="hover:text-[#f59e0b] transition-colors">Strategic Plan</Link></li>
              <li><Link to="/leadership" className="hover:text-[#f59e0b] transition-colors">Our Vice Chancellors</Link></li>
              <li><Link to="/vision-mission" className="hover:text-[#f59e0b] transition-colors">Vision & Mission</Link></li>
              <li><Link to="/campus-map" className="hover:text-[#f59e0b] transition-colors">Campus Map</Link></li>
              <li><Link to="/gallery" className="hover:text-[#f59e0b] transition-colors">Events & Gallery</Link></li>
              <li><Link to="/calendar" className="hover:text-[#f59e0b] transition-colors">Holidays Calendar</Link></li>
              <li><Link to="/contact" className="hover:text-[#f59e0b] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2: Alumni & Other Links */}
          <div>
            <h3 className="text-[#334155] text-lg font-bold mb-4 relative inline-block">
              Alumni
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#f59e0b]"></span>
            </h3>
            <ul className="space-y-3 text-sm text-[#475569] mt-2 mb-8">
              <li><Link to="/alumni" className="hover:text-[#f59e0b] transition-colors">Welcome Alumni</Link></li>
              <li><Link to="/alumni/association" className="hover:text-[#f59e0b] transition-colors">Alumni Association</Link></li>
            </ul>

            <h3 className="text-[#334155] text-lg font-bold mb-4 relative inline-block uppercase text-sm">
              Other Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#f59e0b]"></span>
            </h3>
            <ul className="space-y-3 text-sm text-[#475569] mt-2">
              <li><Link to="/convocation" className="hover:text-[#f59e0b] transition-colors">XIII Convocation</Link></li>
              <li><Link to="/teqip" className="hover:text-[#f59e0b] transition-colors">TEQIP-III</Link></li>
              <li><Link to="/disclosure" className="hover:text-[#f59e0b] transition-colors">Employees Property Disclosure</Link></li>
              <li><Link to="/istem" className="hover:text-[#f59e0b] transition-colors">I-STEM</Link></li>
            </ul>
          </div>

          {/* Column 3: Important Links */}
          <div>
            <h3 className="text-[#334155] text-lg font-bold mb-4 relative inline-block">
              Important Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#f59e0b]"></span>
            </h3>
            <ul className="space-y-3 text-sm text-[#475569] mt-2">
              <li><Link to="/advertisement" className="hover:text-[#f59e0b] transition-colors">Advertisement</Link></li>
              <li><Link to="/recruitment" className="hover:text-[#f59e0b] transition-colors">Recruitment/Establishment</Link></li>
              <li><Link to="/glance" className="hover:text-[#f59e0b] transition-colors">Salok at Glance</Link></li>
              <li><Link to="/governance" className="hover:text-[#f59e0b] transition-colors">Centre For Electronic Governance</Link></li>
              <li><Link to="/admissions" className="hover:text-[#f59e0b] transition-colors">Engineering Admissions</Link></li>
              <li><Link to="/screen-reader" className="hover:text-[#f59e0b] transition-colors">Screen Reader</Link></li>
              <li><Link to="/self-learning" className="hover:text-[#f59e0b] transition-colors">Self Learning</Link></li>
              <li><Link to="/annual-report" className="hover:text-[#f59e0b] transition-colors">Annual Report</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-[#334155] text-lg font-bold mb-4 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-[#f59e0b]"></span>
            </h3>
            
            <div className="space-y-4 text-sm text-[#475569] mt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <span>Salok University,<br/>Knowledge Park, Sector 42,<br/>Institutional Area, India - 110042</span>
              </div>
              
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#334155]">Controller of Examination (Conduct):</span><br/>
                  011-2473931
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#334155]">Dean (Academic):</span> 011-2473015<br/>
                  <span className="font-medium text-[#334155]">Recruitment Cell:</span> 011-2473062
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <span>info@salok.edu.in</span>
              </div>
            </div>

            {/* Social Icons (Using SVG to avoid Lucide import errors) */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#FF0000] hover:text-white transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#E4405F] hover:text-white transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Salok University. All Rights Reserved. Designed & Developed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
