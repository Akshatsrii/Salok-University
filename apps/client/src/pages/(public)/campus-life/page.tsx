import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function CampusLifePage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      <section className="relative pt-32 pb-24 bg-[#1a2b4c] text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070" className="w-full h-full object-cover" alt="Campus Life" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <GsapReveal>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Campus <span className="text-[#ffb800]">Life</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Experience a vibrant community where academic rigor meets cultural diversity, sports, and lifelong friendships.
            </p>
          </GsapReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Student Clubs", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070" },
            { title: "Sports & Athletics", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070" },
            { title: "Cultural Fests", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070" }
          ].map((item, i) => (
            <GsapReveal key={i}>
              <div className="group relative h-96 rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b4c]/90 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
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
