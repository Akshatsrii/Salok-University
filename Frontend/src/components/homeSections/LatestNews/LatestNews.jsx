import latestNewsData from "./latestNewsData";

const LatestNews = () => {
  return (
    <section className="py-[90px] px-[6%] bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      
      {/* HEADING */}
      <h2 className="relative text-center text-[34px] font-bold text-gray-800 mb-12">
        Latest News & Events
        <span className="block w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded mt-3 mx-auto"></span>
      </h2>

      {/* SLIDER */}
      <div className="overflow-hidden">
        <div
          className="
            flex gap-[34px] w-max
            animate-[scrollNews_32s_linear_infinite]
            hover:[animation-play-state:paused]
          "
        >
          {[...latestNewsData, ...latestNewsData].map((item, index) => (
            <div
              key={index}
              className="
                min-w-[320px]
                bg-white
                rounded-[18px]
                overflow-hidden
                shadow-[0_18px_40px_rgba(0,0,0,0.12)]
                transition-all duration-400
                hover:-translate-y-3
                hover:scale-[1.02]
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.2)]
              "
            >
              {/* IMAGE */}
              <div
                className="relative h-[210px] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/35"></div>

                {/* CORNER BADGE */}
                <span
                  className="
                    absolute top-0 left-0 z-10
                    bg-gradient-to-br from-orange-400 to-orange-600
                    text-white
                    px-3 py-2
                    text-sm
                    rounded-br-lg
                    shadow-[0_6px_18px_rgba(0,0,0,0.35)]
                  "
                >
                  ⚡
                </span>
              </div>

              {/* CONTENT */}
              <div className="px-5 pt-[22px] pb-[26px] text-center">
                <h3 className="text-[19px] font-semibold text-gray-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[14.5px] text-gray-600 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes scrollNews {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default LatestNews;
