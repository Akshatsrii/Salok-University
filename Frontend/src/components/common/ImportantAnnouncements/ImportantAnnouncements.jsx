import announcements from "./announcementsData";

const ImportantAnnouncements = () => {
  return (
    <section
      className="
        relative
        flex items-center
        overflow-hidden
        py-3
        bg-gradient-to-br from-[#c96e2d] to-[#d47a38]
        text-white
        shadow-[0_2px_8px_rgba(0,0,0,0.15)]
      "
    >
      {/* TOP SHINE LINE */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* TITLE */}
      <div
        className="
          whitespace-nowrap
          font-bold
          px-6
          text-[14px]
          tracking-wider
          uppercase
          border-r-2 border-white/50
          transition-transform duration-300
          hover:scale-105
        "
      >
        📢 Important Announcements
      </div>

      {/* MARQUEE */}
      <div
        className="
          flex-1
          overflow-hidden
          relative
          [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]
          [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]
        "
      >
        <div
          className="
            flex
            w-max
            items-center
            animate-[scroll-left_30s_linear_infinite]
            hover:[animation-play-state:paused]
          "
        >
          {[...announcements, ...announcements].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="
                relative
                flex items-center gap-2
                mr-12
                px-2 py-1
                rounded-md
                text-[15px]
                font-medium
                transition-all duration-300
                hover:bg-white/15
                hover:-translate-y-[1px]
                after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:w-0
                after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {/* DOT */}
              <span className="text-[20px] opacity-70 animate-[pulse_2s_ease-in-out_infinite]">
                •
              </span>

              {item.text}

              {item.isNew && (
                <span
                  className="
                    ml-2
                    text-[10px]
                    font-bold
                    px-2 py-[2px]
                    rounded-full
                    uppercase tracking-wide
                    bg-gradient-to-br from-[#1e90ff] to-[#4dabf7]
                    shadow-[0_2px_6px_rgba(30,144,255,0.4)]
                    animate-[blink-glow_1.5s_ease-in-out_infinite]
                  "
                >
                  NEW
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          @keyframes pulse {
            0%,100% { opacity: 0.7; }
            50% { opacity: 1; }
          }

          @keyframes blink-glow {
            0%,100% {
              opacity: 1;
              box-shadow: 0 2px 6px rgba(30,144,255,0.4);
            }
            50% {
              opacity: 0.6;
              box-shadow: 0 4px 12px rgba(30,144,255,0.6);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-\\[scroll-left_30s_linear_infinite\\] {
              animation-duration: 50s;
            }
          }
        `}
      </style>
    </section>
  );
};

export default ImportantAnnouncements;
