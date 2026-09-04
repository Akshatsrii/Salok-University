import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { FloatingBook3D } from "@/components/three/FloatingBook";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* 3D Hero Section */}
      <section className="relative h-screen bg-[#1a2b4c] text-white flex items-center overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full z-0">
          <FloatingBook3D />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <GsapReveal className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
              Knowledge<br/>Beyond<br/><span className="text-[#ffb800]">Boundaries</span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Salok University has been at the forefront of educational innovation since 1995, building leaders who shape the world.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* History Parallax */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <GsapReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1a2b4c] mb-6">Our Legacy</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From a modest campus with just 500 students, Salok has grown into a globally recognized institution with over 20,000 brilliant minds. Our dedication to research, entrepreneurship, and holistic development remains the cornerstone of our philosophy.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="border-l-4 border-[#ffb800] pl-6">
                <div className="text-4xl font-bold text-[#1a2b4c]">25+</div>
                <div className="text-sm text-gray-500 font-bold tracking-wider uppercase mt-2">Years of Excellence</div>
              </div>
              <div className="border-l-4 border-[#ffb800] pl-6">
                <div className="text-4xl font-bold text-[#1a2b4c]">150+</div>
                <div className="text-sm text-gray-500 font-bold tracking-wider uppercase mt-2">Global Partnerships</div>
              </div>
            </div>
          </GsapReveal>
          
          <div className="relative h-full w-full min-h-[500px]">
            <ParallaxImage src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070" alt="Historic Campus Building" height="h-[600px]" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
