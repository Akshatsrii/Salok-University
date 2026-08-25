import { Microscope, Code, LineChart, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AcademicsPage() {
  const departments = [
    { name: "School of Engineering & Technology", icon: Code, color: "blue", programs: ["B.Tech Computer Science", "M.Tech Artificial Intelligence", "B.Tech Civil Engineering", "Ph.D. Data Science"] },
    { name: "School of Sciences", icon: Microscope, color: "emerald", programs: ["B.Sc Physics", "M.Sc Chemistry", "B.Sc Biotechnology", "Ph.D. Quantum Computing"] },
    { name: "School of Management", icon: LineChart, color: "amber", programs: ["BBA General", "MBA Finance", "MBA Marketing", "Ph.D. Economics"] },
    { name: "School of Arts & Design", icon: Palette, color: "purple", programs: ["B.A. English", "B.Des Product Design", "M.A. Sociology", "Ph.D. Fine Arts"] }
  ];

  const colorMap: Record<string, string> = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
  };

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1a2b4c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Academic <span className="text-[#ffb800]">Excellence</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover a world of opportunities with over 50 undergraduate, postgraduate, and doctoral programs designed for the future.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl font-bold text-[#1a2b4c]">Our Schools & Departments</h2>
          <p className="text-gray-500 mt-4 text-lg">Explore diverse academic disciplines led by world-renowned faculty.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {departments.map((dept, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${colorMap[dept.color]}`}>
                  <dept.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2b4c] group-hover:text-[#007bff] transition-colors">{dept.name}</h3>
              </div>
              <ul className="space-y-3 mb-8">
                {dept.programs.map((prog, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-600 font-medium">
                    <span className={`w-2 h-2 rounded-full ${colorMap[dept.color].split(' ')[1]}`}></span>
                    {prog}
                  </li>
                ))}
              </ul>
              <Link href="/admissions" className="inline-flex items-center gap-2 font-bold text-[#007bff] hover:text-blue-800 transition-colors">
                Explore Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
