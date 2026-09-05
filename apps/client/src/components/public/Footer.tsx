import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-20 pb-10 border-t border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                <div className="w-full h-full bg-primary rounded flex flex-col items-center justify-center text-white font-serif font-bold leading-none">
                  S<span className="text-[8px] block mt-0.5">U</span>
                </div>
              </div>
              <div>
                <span className="text-white text-xl font-bold block leading-tight font-serif">Salok</span>
                <span className="text-white/80 text-sm font-medium tracking-wide">University</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Empowering minds, transforming futures. Join us in our mission to create global leaders through excellence in education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors text-sm">About University</Link></li>
              <li><Link to="/admissions" className="text-white/70 hover:text-accent transition-colors text-sm">Admissions</Link></li>
              <li><Link to="/academics" className="text-white/70 hover:text-accent transition-colors text-sm">Academics</Link></li>
              <li><Link to="/research" className="text-white/70 hover:text-accent transition-colors text-sm">Research</Link></li>
              <li><Link to="/campus-life" className="text-white/70 hover:text-accent transition-colors text-sm">Student Life</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/library" className="text-white/70 hover:text-accent transition-colors text-sm">Library Catalogue</Link></li>
              <li><Link to="/login" className="text-white/70 hover:text-accent transition-colors text-sm">Student Portal</Link></li>
              <li><Link to="/teacher" className="text-white/70 hover:text-accent transition-colors text-sm">Staff Portal</Link></li>
              <li><Link to="/alumni" className="text-white/70 hover:text-accent transition-colors text-sm">Alumni Network</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-serif">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Knowledge City, Sector 42,<br/>New Delhi - 110042</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>admissions@salok.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Salok University. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/disclosures" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/disclosures" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
