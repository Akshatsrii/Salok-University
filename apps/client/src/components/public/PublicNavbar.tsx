import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone, Mail, MapPin } from "lucide-react";

export function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "Students", href: "/campus-life" },
    { name: "Research", href: "/research" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* Top Bar (like second image) */}
      <div className="hidden lg:flex justify-between items-center bg-white px-8 py-2 text-sm text-gray-600 border-b border-gray-100">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+91 1800-123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>info@salok.edu</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Knowledge City, New Delhi</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="font-semibold hover:text-primary transition-colors">Student Portal</Link>
          <span className="text-gray-300">|</span>
          <Link to="/teacher" className="font-semibold hover:text-primary transition-colors">Staff Portal</Link>
          <Link to="/admissions/apply" className="bg-primary text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-primary-dark transition-colors">Get a Quote</Link>
        </div>
      </div>

      {/* Main Navbar (Crimson background like first image) */}
      <nav className={\ sticky top-0 z-50 transition-all duration-300}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 shadow-lg group-hover:scale-105 transition-transform">
                {/* Placeholder Logo Icon matching reference */}
                <div className="w-full h-full bg-primary rounded-md flex flex-col items-center justify-center text-white font-serif font-bold text-lg leading-none">
                  S<span className="text-[10px] block mt-0.5">U</span>
                </div>
              </div>
              <div>
                <span className="text-white text-xl font-bold block leading-tight font-serif">Salok</span>
                <span className="text-white/80 text-sm font-medium tracking-wide">University</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={\ transition-colors text-sm tracking-wide}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Search Bar matching image 1 */}
              <div className="relative hidden lg:block">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-white/10 text-white placeholder-white/70 border border-white/20 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-accent w-48 transition-all focus:w-64 focus:bg-white/20"
                />
                <Search className="absolute right-3 top-1.5 w-4 h-4 text-white/70" />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-accent focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary-dark absolute top-full left-0 w-full shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-3 text-base font-medium text-white hover:bg-white/10 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
