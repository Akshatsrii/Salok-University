import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Building2, Award, Globe, History } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fdf7f7]">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdf7f7] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <GsapReveal>
            <h1 className="text-6xl font-serif font-bold text-white mb-6">Our <span className="text-accent">Legacy</span></h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">A century of excellence, shaping the minds that shape the world.</p>
          </GsapReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <GsapReveal direction="left">
            <h2 className="text-4xl font-bold font-serif text-primary mb-6">Tradition Meets Innovation</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Founded in 1924, Salok University began with a simple mission: to provide education that empowers. Today, we are a global powerhouse of research and academic excellence, spanning over 500 acres of lush green campus.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="border-l-4 border-primary pl-4">
                <div className="text-3xl font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-gray-500 font-medium">Years of History</div>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <div className="text-3xl font-bold text-primary mb-1">50,000</div>
                <div className="text-sm text-gray-500 font-medium">Alumni Worldwide</div>
              </div>
            </div>
          </GsapReveal>
          <GsapReveal direction="right">
            <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1000" className="rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500" />
          </GsapReveal>
        </div>
      </section>
      
      {/* Pillars */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <GsapReveal>
            <h2 className="text-center text-4xl font-serif font-bold mb-16">Pillars of Excellence</h2>
          </GsapReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Global Perspective", desc: "Collaborations with 100+ international institutions." },
              { icon: Award, title: "Academic Rigor", desc: "Ranked #1 in national educational frameworks." },
              { icon: History, title: "Rich Heritage", desc: "A campus that blends historic architecture with modern facilities." }
            ].map((col, i) => (
              <GsapReveal key={i} delay={i * 0.2}>
                <div className="bg-primary-dark p-8 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                  <col.icon className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{col.title}</h3>
                  <p className="text-white/70">{col.desc}</p>
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
