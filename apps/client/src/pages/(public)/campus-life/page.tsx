import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-[#fdf7f7]">
      <PublicNavbar />
      
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <GsapReveal>
            <h1 className="text-6xl font-serif font-bold text-white mb-6 border-l-4 border-accent pl-6">Vibrant <br/>Campus Life</h1>
          </GsapReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Hostel & Dining", "Sports Complex", "Student Clubs", "Cultural Fests", "Tech Symposiums", "Wellness Center"].map((item, i) => (
            <GsapReveal key={i} delay={i*0.1}>
              <div className="group relative h-64 overflow-hidden rounded-xl cursor-pointer">
                <img src={`https://source.unsplash.com/random/800x600/?university,${item.split(' ')[0]}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
                <div className="absolute inset-0 p-6 flex items-end">
                  <h3 className="text-2xl font-bold text-white">{item}</h3>
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
