import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { name: "Student", href: "#student", icon: "🎓" },
    { name: "Faculty", href: "#faculty", icon: "👨‍🏫" },
    { name: "Admin", href: "#admin", icon: "⚙️" },
    { name: "Research", href: "#research", icon: "🔬" },
    { name: "Academics", href: "#academics", icon: "📚" },
    { name: "Admission", href: "#admission", icon: "📝" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = menuItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (href) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isDark
          ? "bg-gray-900/95 text-white border-b border-white/10"
          : "bg-white/95 text-gray-900 border-b border-gray-200"
      } backdrop-blur-md ${
        isScrolled ? "shadow-2xl py-2" : "shadow-lg py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo - Left Corner */}
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:blur-lg animate-pulse" />
            <div
              className={`relative px-5 py-2.5 rounded-lg font-bold text-2xl tracking-wider ${
                isDark
                  ? "bg-gray-900 text-orange-500"
                  : "bg-white text-orange-600"
              } border-2 border-orange-500 transform group-hover:scale-105 transition-all duration-300`}
            >
              SALOK
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
            </div>
          </div>

          {/* Center Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2.5 font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                    activeSection === item.href
                      ? "text-orange-500 bg-orange-500/10"
                      : isDark
                      ? "text-gray-200 hover:text-orange-500 hover:bg-white/5"
                      : "text-gray-700 hover:text-orange-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Corner - Theme Toggle, Login & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Enhanced Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`flex p-3 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-12 ${
                isDark
                  ? "bg-gradient-to-br from-yellow-400/20 to-orange-500/20 hover:from-yellow-400/30 hover:to-orange-500/30 text-yellow-300"
                  : "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 text-indigo-600"
              } border ${
                isDark ? "border-yellow-400/30" : "border-indigo-500/30"
              }`}
              aria-label="Toggle theme"
            >
              <span className="text-xl">
                {isDark ? "☀️" : "🌙"}
              </span>
            </button>

            {/* Enhanced Login Button */}
            <button className="hidden lg:block group relative px-6 py-2.5 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 transition-all duration-300 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white flex items-center gap-2">
                Login
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>

            {/* Enhanced Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
                isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
              } ${isMenuOpen ? "rotate-90" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 py-4 border-t border-current/10">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`transform transition-all duration-300 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-3 ${
                    activeSection === item.href
                      ? "bg-orange-500/20 text-orange-500"
                      : isDark
                      ? "text-gray-200 hover:bg-white/5 hover:text-orange-500"
                      : "text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.name}</span>
                  {activeSection === item.href && (
                    <span className="ml-auto text-orange-500">●</span>
                  )}
                </button>
              </li>
            ))}
            
            {/* Mobile Login Button */}
            <li className="pt-2 border-t border-current/10">
              <button className="w-full group relative px-4 py-3 rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 transition-all duration-300 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-white flex items-center justify-center gap-2">
                  Login
                  <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}