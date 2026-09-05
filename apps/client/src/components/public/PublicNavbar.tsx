import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Shield } from "lucide-react";

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
    { name: "Examination", href: "/academics" },
    { name: "Students", href: "/campus-life" },
    { name: "Academics", href: "/research" },
  ];

  return (
    <nav className={`${isScrolled ? "bg-[#8a1538] shadow-2xl py-3" : "bg-[#8a1538] py-5"} sticky top-0 z-50 transition-all duration-300 border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo (Shield Style like reference) */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-12 flex items-center justify-center">
              <Shield className="w-12 h-12 text-white absolute inset-0 drop-shadow-md" fill="white" />
              <div className="relative z-10 flex flex-col items-center justify-center text-[#8a1538] font-serif font-black leading-none mt-1">
                <span className="text-xl">A</span>
                <span className="text-[10px]">B</span>
              </div>
            </div>
            <div className="ml-2 border-l border-white/30 pl-3">
              <span className="text-white text-lg font-bold block leading-tight font-serif">Andorra la Vella</span>
              <span className="text-white/90 text-sm font-medium tracking-wide">University</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${location.pathname === link.href ? "text-white font-bold" : "text-white/80 hover:text-white font-medium"} transition-colors text-sm`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Search Bar matching image 1 (White rounded input) */}
            <div className="relative ml-4">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-white text-gray-900 placeholder-gray-500 rounded-lg py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-accent w-48 shadow-inner"
              />
              <Search className="absolute right-3 top-2 w-4 h-4 text-gray-500" />
            </div>

            {/* Hamburger for desktop extra menu */}
            <button className="text-white ml-2 hover:text-accent transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden bg-[#6b0f2a] absolute top-full left-0 w-full shadow-2xl border-t border-white/10">
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
  );
}
