import galleryData from "./galleryData";
import { useState } from "react";

const CollegeGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="relative py-[100px] px-[6%] bg-gradient-to-b from-white via-slate-50 to-slate-100 overflow-hidden">

      {/* DECORATIVE BACKGROUNDS */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(255,159,46,0.08),transparent_70%)] blur-[60px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_70%)] blur-[60px]" />

      {/* HEADING */}
      <div className="relative text-center mb-12">
        <span className="block text-[42px] mb-3 animate-[floatIcon_3s_ease-in-out_infinite]">
          📸
        </span>

        <h2 className="text-[38px] font-extrabold text-gray-800 tracking-[-0.5px]">
          College Gallery
        </h2>

        <span className="block w-[90px] h-[5px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-[0_4px_12px_rgba(255,159,46,0.3)] mt-4 mx-auto" />

        <p className="max-w-xl mx-auto text-gray-500 text-[16px] leading-relaxed mt-6">
          A glimpse into our vibrant campus life, events, and memorable moments.
        </p>
      </div>

      {/* GRID */}
      <div className="relative z-10 grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {galleryData.map((item, index) => (
          <div
            key={index}
            tabIndex={0}
            onClick={() => setActiveImage(item)}
            className="
              group relative overflow-hidden rounded-[18px] bg-white
              shadow-[0_8px_24px_rgba(0,0,0,0.08)]
              transition-all duration-500 cursor-pointer
              hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              focus-visible:outline focus-visible:outline-4 focus-visible:outline-orange-400
            "
          >
            {/* CATEGORY (OPTIONAL) */}
            {item.category && (
              <span className="absolute top-4 left-4 z-20 px-4 py-1 text-xs font-bold uppercase tracking-wide rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg">
                {item.category}
              </span>
            )}

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full h-[280px] object-cover
                transition-transform duration-700
                group-hover:scale-[1.15] group-hover:rotate-[1deg]
              "
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />

            {/* OVERLAY CONTENT */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <div className="text-center translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-white text-[17px] font-bold tracking-wide mb-1 drop-shadow-lg">
                  {item.title}
                </span>
                {item.subtitle && (
                  <p className="text-white/90 text-[13px] font-medium">
                    {item.subtitle}
                  </p>
                )}

                {/* VIEW ICON */}
                <div className="mt-3 w-[50px] h-[50px] rounded-full bg-white/95 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-orange-600 group-hover:scale-110 group-hover:rotate-[5deg] mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-orange-500 group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276a1 1 0 010 1.788L15 16M4 12h11" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[9999] flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-[90%] max-h-[90%] animate-[lightboxZoom_0.3s_ease]">
            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-[90vh] rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full border-2 border-white/30 text-white flex items-center justify-center hover:bg-orange-400 hover:border-orange-400 transition rotate-0 hover:rotate-90"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes floatIcon {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }

          @keyframes lightboxZoom {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
};

export default CollegeGallery;
