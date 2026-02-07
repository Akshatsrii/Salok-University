import { useEffect, useRef } from "react";
import s1 from "../../assets/images/testimonials/student-1.jpg";
import s2 from "../../assets/images/testimonials/student-2.jpg";
import s3 from "../../assets/images/testimonials/student-3.jpg";
import s4 from "../../assets/images/testimonials/student-4.jpg";

const TestimonialSection = () => {
  const trackRef = useRef(null);
  const speed = 0.6;

  useEffect(() => {
    const track = trackRef.current;
    let x = 0;
    let paused = false;

    const pause = () => (paused = true);
    const resume = () => (paused = false);

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    const animate = () => {
      if (!paused) {
        x -= speed;
        if (Math.abs(x) >= track.scrollWidth / 2) x = 0;
        track.style.transform = `translateX(${x}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const data = [
    { img: s1, name: "Ananya Gupta", role: "Student", text: "This course helped me gain confidence and clarity. The structure was very easy to follow." },
    { img: s2, name: "Rohit Sharma", role: "Student", text: "Amazing mentorship and guidance. I was able to crack my interviews with ease guidance." },
    { img: s3, name: "Pooja Mehta", role: "Student", text: "One of the best learning experiences I have ever had. Highly recommended students." },
    { img: s4, name: "Rahul Verma", role: "Student", text: "Structured roadmap and great support. Helped me stay consistent and confident students." },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden text-center">

      {/* subtle radial background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,159,28,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,183,3,0.04)_0%,transparent_50%)]" />

      {/* heading */}
      <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-500 font-extrabold tracking-[5px] text-5xl mb-4">
        TESTIMONIALS
      </span>

      <h2 className="relative max-w-xl mx-auto text-gray-900 text-[22px] font-normal leading-relaxed mb-16">
        What Our Students <span className="text-orange-500 font-semibold">Say’s</span>
      </h2>

      {/* slider */}
      <div className="relative overflow-hidden
        [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]
      ">
        <div
          ref={trackRef}
          className="flex w-max gap-7 px-6 will-change-transform"
        >
          {[...data, ...data].map((item, i) => (
            <div
              key={i}
              tabIndex={0}
              className="
                relative w-[320px] flex-shrink-0 bg-white
                rounded-[24px] px-7 py-9 text-left
                border border-black/5
                shadow-[0_4px_6px_rgba(0,0,0,0.02),0_12px_24px_rgba(0,0,0,0.06),0_24px_48px_rgba(0,0,0,0.04)]
                transition-all duration-400
                hover:-translate-y-3 hover:scale-[1.02]
                hover:shadow-[0_32px_64px_rgba(255,159,28,0.12)]
                focus-within:outline focus-within:outline-2 focus-within:outline-orange-400
              "
            >
              {/* star badge */}
              <div className="absolute top-5 right-5 bg-gradient-to-br from-orange-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                ⭐
              </div>

              {/* stars */}
              <div className="text-yellow-400 text-sm tracking-widest mb-4">
                ★★★★★
              </div>

              {/* text */}
              <p className="relative text-gray-700 text-[15px] leading-[1.75] mb-7">
                <span className="absolute -top-6 -left-2 text-6xl text-orange-400/10 font-serif">“</span>
                {item.text}
              </p>

              {/* user */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-400/30 transition group-hover:scale-105"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <span className="text-sm text-orange-500 font-semibold">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
