import { useEffect, useState } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="relative bg-gradient-to-br from-[#0a0a0b] via-[#090a0e] to-[#0d0e12] text-slate-300 overflow-hidden">

        {/* TOP ACCENT LINE */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

        {/* GLOW BLOBS */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,159,28,0.08),transparent_70%)] blur-[100px] animate-[float_20s_ease-in-out_infinite]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_70%)] blur-[100px] animate-[float_25s_ease-in-out_infinite_reverse]" />

        {/* MAIN GRID */}
        <div className="relative z-10 max-w-7xl mx-auto px-12 pt-20 grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-black tracking-widest bg-gradient-to-br from-orange-400 to-orange-300 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
              SALOK
            </h3>
            <p className="mt-5 text-[14.5px] leading-[1.9] text-slate-400">
              Salok University is dedicated to providing quality education,
              industry-ready skills, and career-focused learning for students.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-widest uppercase relative mb-6 after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[3px] after:bg-gradient-to-r after:from-orange-400 after:to-orange-300 after:rounded">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Courses", "Testimonials", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative pl-5 text-[14.5px] cursor-pointer transition-all hover:text-orange-400 hover:translate-x-2 before:absolute before:left-0 before:content-['→'] before:text-orange-400 before:opacity-0 hover:before:opacity-100"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-widest uppercase relative mb-6 after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[3px] after:bg-gradient-to-r after:from-orange-400 after:to-orange-300 after:rounded">
              Courses
            </h4>
            <ul className="space-y-4">
              {[
                "Web Development",
                "Data Science",
                "Cyber Security",
                "AI & ML",
                "Cloud Computing",
              ].map((item) => (
                <li
                  key={item}
                  className="relative pl-5 text-[14.5px] cursor-pointer transition-all hover:text-orange-400 hover:translate-x-2 before:absolute before:left-0 before:content-['→'] before:text-orange-400 before:opacity-0 hover:before:opacity-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-widest uppercase relative mb-6 after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[3px] after:bg-gradient-to-r after:from-orange-400 after:to-orange-300 after:rounded">
              Contact Us
            </h4>

            <div className="space-y-4 text-[14.5px] text-slate-400">
              <p><strong className="block text-white">Email</strong>info@salokuniversity.com</p>
              <p><strong className="block text-white">Phone</strong>+91 98765 43210</p>
              <p><strong className="block text-white">Location</strong>India</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative mt-20 border-t border-white/10 bg-black/30 backdrop-blur">
          <div className="max-w-7xl mx-auto px-12 py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-[13.5px] text-slate-400">
            <p>© {new Date().getFullYear()} Salok University. All rights reserved.</p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms", "Support"].map((l) => (
                <span key={l} className="cursor-pointer hover:text-orange-400 transition">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-300 text-white text-xl flex items-center justify-center shadow-lg transition-all z-[1000]
        ${showTop ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
      >
        ↑
      </button>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes float {
            0%,100% { transform: translate(0,0) scale(1); }
            50% { transform: translate(30px,-30px) scale(1.1); }
          }
          @keyframes shimmer {
            0%,100% { filter: brightness(1); }
            50% { filter: brightness(1.2); }
          }
        `}
      </style>
    </>
  );
};

export default Footer;
