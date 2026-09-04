import { TrendingUp, Users, Briefcase, Award } from "lucide-react";

export default function PlacementsPage() {
  const stats = [
    { label: "Highest Package", value: "₹1.2 Cr", icon: TrendingUp },
    { label: "Average Package", value: "₹15.5 LPA", icon: Award },
    { label: "Total Recruiters", value: "500+", icon: Briefcase },
    { label: "Students Placed", value: "98%", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1a2b4c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Career <span className="text-[#ffb800]">Placements</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Our dedicated placement cell works year-round to ensure our students get placed in top global companies with competitive packages.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300 animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-16 h-16 mx-auto bg-blue-50 text-[#007bff] rounded-full flex items-center justify-center mb-6">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-extrabold text-[#1a2b4c] mb-2">{stat.value}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center animate-reveal">
          <h2 className="text-3xl font-bold text-[#1a2b4c]">Our Top Recruiters</h2>
        </div>
        
        {/* Infinite scrolling marquee simulation using Tailwind */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <li key={i} className="text-3xl font-bold text-gray-300 mx-12 tracking-widest uppercase">
                COMPANY {i}
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <li key={`clone-${i}`} className="text-3xl font-bold text-gray-300 mx-12 tracking-widest uppercase">
                COMPANY {i}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
