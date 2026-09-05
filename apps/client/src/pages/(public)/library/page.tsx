import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { BookOpen, Search, Coffee } from "lucide-react";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#fdf7f7]">
      <PublicNavbar />
      
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center w-full">
          <GsapReveal>
            <h1 className="text-5xl font-serif font-bold text-white mb-6">Central <span className="text-accent">Library</span></h1>
            <div className="max-w-2xl mx-auto relative">
              <input type="text" placeholder="Search books, journals, articles..." className="w-full px-6 py-4 rounded-full text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30" />
              <button className="absolute right-2 top-2 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </GsapReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <GsapReveal>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2M+ Volumes</h3>
              <p className="text-gray-600">Physical and digital books covering every discipline.</p>
            </div>
          </GsapReveal>
          <GsapReveal delay={0.1}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Search className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Global Journals</h3>
              <p className="text-gray-600">Free access to IEEE, Nature, Science, and JSTOR.</p>
            </div>
          </GsapReveal>
          <GsapReveal delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7 Reading Rooms</h3>
              <p className="text-gray-600">Quiet zones and collaborative spaces with free coffee.</p>
            </div>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
