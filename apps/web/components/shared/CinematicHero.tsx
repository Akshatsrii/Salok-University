import { Play } from "lucide-react";

export const CinematicHero = () => {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 transform origin-center animate-pulse-slow"
      >
        <source src="https://cdn.pixabay.com/video/2019/11/20/29329-375549048_large.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 drop-shadow-2xl">
          Salok <span className="text-[var(--primary)]">University</span>
        </h1>
        <p className="text-xl md:text-3xl max-w-3xl mx-auto font-light tracking-wide mb-10 text-gray-200">
          The Future of Education Begins Here.
        </p>
        <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition flex items-center gap-3 mx-auto">
          <Play className="w-5 h-5" /> Watch Campus Tour
        </button>
      </div>
    </div>
  );
};
