import { Coffee, Library, Trophy, Music, Dumbbell, Bus } from "lucide-react";

export default function CampusLifePage() {
  const facilities = [
    { id: "library", title: "Central Library", desc: "24/7 access to over 500,000 books and digital resources.", icon: Library },
    { id: "sports", title: "Sports Complex", desc: "Olympic-size swimming pool, synthetic track, and indoor stadiums.", icon: Trophy },
    { id: "student-center", title: "Student Center", desc: "Cafes, lounges, and collaborative spaces for networking.", icon: Coffee },
    { id: "fitness", title: "Fitness Center", desc: "State-of-the-art gym with professional trainers.", icon: Dumbbell },
    { id: "clubs", title: "Cultural Clubs", desc: "Music, dance, drama, and photography societies.", icon: Music },
    { id: "transport", title: "Transport", desc: "Fleet of AC buses connecting all parts of the city.", icon: Bus },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Hero */}
      <section className="relative py-24 text-white overflow-hidden" style={{ background: "var(--foreground)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Campus <span style={{ color: "var(--primary)" }}>Life</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience a vibrant, diverse, and energetic community that goes beyond classrooms and textbooks.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>World-Class Facilities</h2>
          <p className="text-muted mt-4 text-lg">Everything you need to grow, relax, and create memories.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((fac, i) => (
            <div id={fac.id} key={i} className="card p-8 group animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors"
                style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)", color: "var(--accent)" }}
              >
                <fac.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{fac.title}</h3>
              <p className="text-muted">{fac.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Hostels Section (Adding this for the navbar link to work) */}
      <section id="hostel" className="py-20 border-t" style={{ borderColor: "var(--card-border)", background: "var(--card-bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-reveal">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Hostel & Accommodation</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto mb-10">
              Safe, secure, and comfortable living spaces designed to be your home away from home. Premium AC and Non-AC rooms available with high-speed Wi-Fi and 24/7 dining.
            </p>
            <div className="inline-flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-full px-8 py-4">
              <span className="font-bold text-gray-700">Explore Room Types</span>
              <button className="btn-primary !px-6 !py-2 !rounded-full">View Details</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
