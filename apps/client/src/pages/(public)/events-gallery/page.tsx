import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function EventsGalleryPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      <section className="relative pt-32 pb-24 bg-[#1a2b4c] text-white flex items-center min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GsapReveal>
            <h1 className="text-5xl font-extrabold mb-4">Events <span className="text-[#ffb800]">Gallery</span></h1>
            <p className="text-xl text-gray-300">Visual memories from our flagship university events.</p>
          </GsapReveal>
        </div>
      </section>
      <Footer />
    </div>
  );
}
