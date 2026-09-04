import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 inline-block border-b-2" style={{ color: "var(--foreground)", borderColor: "var(--primary)" }}>Salok University</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-[var(--primary)] transition-colors">About STU</Link></li>
              <li><Link href="/strategic-plan" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Strategic Plan</Link></li>
              <li><Link href="/vision-mission" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Vision & Mission</Link></li>
              <li><Link href="/events-gallery" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Events & Gallery</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 inline-block border-b-2" style={{ color: "var(--foreground)", borderColor: "var(--primary)" }}>Alumni</h3>
            <ul className="space-y-3">
              <li><Link href="/alumni" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Welcome Alumni</Link></li>
              <li><Link href="/alumni-association" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Alumni Association</Link></li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-6 pb-2 inline-block border-b-2" style={{ color: "var(--foreground)", borderColor: "var(--primary)" }}>Other Links</h3>
            <ul className="space-y-3">
              <li><Link href="/convocation" className="text-gray-600 hover:text-[var(--primary)] transition-colors">STU Convocation</Link></li>
              <li><Link href="/disclosures" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Public Disclosures</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 inline-block border-b-2" style={{ color: "var(--foreground)", borderColor: "var(--primary)" }}>Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/advertisement" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Advertisement</Link></li>
              <li><Link href="/recruitment" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Recruitment/Establishment</Link></li>
              <li><Link href="/admissions" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Admissions (UG/PG)</Link></li>
              <li><Link href="/library" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Central Library</Link></li>
              <li><Link href="/annual-report" className="text-gray-600 hover:text-[var(--primary)] transition-colors">Annual Report</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 inline-block border-b-2" style={{ color: "var(--foreground)", borderColor: "var(--primary)" }}>Contact</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 mt-1" style={{ color: "var(--primary)" }} />
                <span>Salok Technical University,<br/>Knowledge Park, New Delhi - 110001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: "var(--primary)" }} />
                <span>Controller of Examination:<br/>011-2473931</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0" style={{ color: "var(--primary)" }} />
                <span>Dean (Academic): 011-2473015</span>
              </li>
            </ul>
            
            <div className="flex gap-3 mt-6">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors text-gray-500">
                <span>FB</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors text-gray-500">
                <span>TW</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors text-gray-500">
                <span>YT</span>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary)] hover:text-white transition-colors text-gray-500">
                <span>IN</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Orange Bar */}
      <div className="py-4 text-center text-sm font-medium" style={{ background: "var(--primary)", color: "var(--foreground)" }}>
        <p>Copyright &copy; {new Date().getFullYear()} Salok Technical University. All rights reserved.</p>
      </div>
    </footer>
  );
};

