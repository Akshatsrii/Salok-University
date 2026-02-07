import { useEffect, useState } from "react";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
import hero5 from "../../assets/images/hero5.jpg";
import hero6 from "../../assets/images/hero6.jpg";
import hero7 from "../../assets/images/hero7.jpg";
import hero8 from "../../assets/images/hero8.jpg";

const images = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* SLIDES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`
            absolute inset-0
            bg-cover bg-center
            transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Online Education <span className="text-orange-400">Academy</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Empowering students with modern learning
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="
                px-8 py-4
                bg-gradient-to-r from-orange-400 to-orange-500
                text-black font-bold
                rounded-xl
                hover:-translate-y-1
                hover:shadow-[0_12px_40px_rgba(255,165,0,0.5)]
                transition
              "
            >
              Our Courses
            </button>

            <button
              className="
                px-8 py-4
                border-2 border-white
                text-white font-semibold
                rounded-xl
                hover:bg-white hover:text-black
                transition
              "
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
