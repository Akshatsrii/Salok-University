import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { FlaskConical, Network, Lightbulb, Users } from "lucide-react";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <PublicNavbar />
      
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <GsapReveal>
            <h1 className="text-6xl font-serif font-bold text-white mb-6">Pioneering <span className="text-accent">Research</span></h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">Pushing the boundaries of human knowledge and solving global challenges.</p>
          </GsapReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <GsapReveal>
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <FlaskConical className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold font-serif text-primary mb-4">Labs & Facilities</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our 50+ cutting-edge laboratories are equipped with next-generation technology, open to students and faculty 24/7 for groundbreaking experiments.
              </p>
            </div>
          </GsapReveal>
          <GsapReveal delay={0.2}>
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <Network className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold font-serif text-primary mb-4">Global Network</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Collaborate with researchers from MIT, Oxford, and Stanford. We fund over $50M annually in cross-border research initiatives.
              </p>
            </div>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
