import { Coffee, Library, Trophy, Music, Dumbbell, Bus } from "lucide-react";

export default function CampusLifePage() {
  const facilities = [
    { title: "Central Library", desc: "24/7 access to over 500,000 books and digital resources.", icon: Library },
    { title: "Sports Complex", desc: "Olympic-size swimming pool, synthetic track, and indoor stadiums.", icon: Trophy },
    { title: "Student Center", desc: "Cafes, lounges, and collaborative spaces for networking.", icon: Coffee },
    { title: "Fitness Center", desc: "State-of-the-art gym with professional trainers.", icon: Dumbbell },
    { title: "Cultural Clubs", desc: "Music, dance, drama, and photography societies.", icon: Music },
    { title: "Transport", desc: "Fleet of AC buses connecting all parts of the city.", icon: Bus },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1a2b4c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Campus <span className="text-[#ffb800]">Life</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience a vibrant, diverse, and energetic community that goes beyond classrooms and textbooks.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl font-bold text-[#1a2b4c]">World-Class Facilities</h2>
          <p className="text-gray-500 mt-4 text-lg">Everything you need to grow, relax, and create memories.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((fac, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 bg-gray-50 text-[#007bff] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                <fac.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2b4c] mb-3">{fac.title}</h3>
              <p className="text-gray-500">{fac.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
