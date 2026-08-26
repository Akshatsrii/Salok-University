import { Microscope, Code, LineChart, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AcademicsPage() {
  const departments = [
    { name: "School of Engineering & Technology", icon: Code, color: "var(--accent)", programs: ["B.Tech Computer Science", "M.Tech Artificial Intelligence", "B.Tech Civil Engineering", "Ph.D. Data Science"] },
    { name: "School of Sciences", icon: Microscope, color: "var(--secondary-teal)", programs: ["B.Sc Physics", "M.Sc Chemistry", "B.Sc Biotechnology", "Ph.D. Quantum Computing"] },
    { name: "School of Management", icon: LineChart, color: "var(--primary-hover)", programs: ["BBA General", "MBA Finance", "MBA Marketing", "Ph.D. Economics"] },
    { name: "School of Arts & Design", icon: Palette, color: "var(--secondary-plum)", programs: ["B.A. English", "B.Des Product Design", "M.A. Sociology", "Ph.D. Fine Arts"] }
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="relative py-24 text-white overflow-hidden" style={{ background: "var(--foreground)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Academic <span style={{ color: "var(--primary)" }}>Excellence</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover a world of opportunities with over 50 undergraduate, postgraduate, and doctoral programs designed for the future.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>Our Schools & Departments</h2>
          <p className="text-muted mt-4 text-lg">Explore diverse academic disciplines led by world-renowned faculty.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept, i) => (
            <div key={i} className="card p-8 group animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-4 rounded-2xl flex items-center justify-center" 
                  style={{ background: `color-mix(in srgb, ${dept.color} 10%, transparent)`, color: dept.color }}
                >
                  <dept.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold transition-colors" style={{ color: "var(--foreground)" }}>{dept.name}</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {dept.programs.map((prog, j) => (
                  <li key={j} className="flex items-center gap-3 font-medium text-muted">
                    <span className="w-2 h-2 rounded-full" style={{ background: dept.color }}></span>
                    {prog}
                  </li>
                ))}
              </ul>
              <Link href="/admissions" className="inline-flex items-center gap-2 font-bold transition-colors hover:underline" style={{ color: "var(--accent)" }}>
                Explore Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
