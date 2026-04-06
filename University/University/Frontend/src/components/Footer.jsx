import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Academics", href: "#academics" },
    { name: "Admissions", href: "#admissions" },
    { name: "Research", href: "#research" },
    { name: "Campus Life", href: "#campus" },
  ];

  const programs = [
    { name: "Engineering", href: "#engineering" },
    { name: "Computer Science", href: "#cs" },
    { name: "Business Administration", href: "#business" },
    { name: "Arts & Humanities", href: "#arts" },
    { name: "Sciences", href: "#sciences" },
    { name: "Law", href: "#law" },
  ];

  const resources = [
    { name: "Library", href: "#library" },
    { name: "E-Learning Portal", href: "#elearning" },
    { name: "Career Services", href: "#career" },
    { name: "Student Portal", href: "#portal" },
    { name: "Alumni Network", href: "#alumni" },
    { name: "Placements", href: "#placements" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: "📘", href: "#", color: "hover:text-blue-500" },
    { name: "Twitter", icon: "🐦", href: "#", color: "hover:text-sky-400" },
    { name: "Instagram", icon: "📷", href: "#", color: "hover:text-pink-500" },
    { name: "LinkedIn", icon: "💼", href: "#", color: "hover:text-blue-600" },
    { name: "YouTube", icon: "▶️", href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-400 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="group relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative px-4 py-2 bg-black rounded-lg border-2 border-orange-500">
                  <h2 className="text-orange-500 font-bold text-3xl tracking-wider">SALOK</h2>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
                Empowering minds, shaping futures. Quality education with career-focused learning 
                and world-class facilities for holistic development.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <span className="text-xl">📧</span>
                  Subscribe to Newsletter
                </h4>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-500 transition-colors text-white placeholder-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                  >
                    {subscribed ? "✓ Subscribed!" : "Subscribe"}
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color} hover:border-current`}
                      aria-label={social.name}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-orange-500">▸</span>
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-orange-500">▸</span>
                Programs
              </h3>
              <ul className="space-y-2.5">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a
                      href={program.href}
                      className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      <span>{program.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-orange-500">▸</span>
                Resources
              </h3>
              <ul className="space-y-2.5">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <a
                      href={resource.href}
                      className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      <span>{resource.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <a href="mailto:info@salokuniversity.com" className="hover:text-orange-500 transition-colors duration-300">
                    info@salokuniversity.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a href="tel:+919876543210" className="hover:text-orange-500 transition-colors duration-300">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="hover:text-orange-500 transition-colors duration-300">
                    Kota, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2026 <span className="text-orange-500 font-semibold">Salok University</span>. All rights reserved.
              </p>
              
              <div className="flex gap-6 text-sm">
                <a href="#privacy" className="hover:text-orange-500 transition-colors duration-300">
                  Privacy Policy
                </a>
                <span className="text-gray-700">|</span>
                <a href="#terms" className="hover:text-orange-500 transition-colors duration-300">
                  Terms of Service
                </a>
                <span className="text-gray-700">|</span>
                <a href="#sitemap" className="hover:text-orange-500 transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Back to top"
        >
          <span className="text-xl transform group-hover:-translate-y-1 transition-transform duration-300">↑</span>
        </button>
      </div>
    </footer>
  );
}