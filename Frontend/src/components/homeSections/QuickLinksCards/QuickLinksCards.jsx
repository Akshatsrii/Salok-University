import quickLinksData from "./quickLinksData";

const QuickLinksCards = () => {
  return (
    <section className="py-[70px] px-[6%] bg-gradient-to-b from-white to-slate-100">
      <div className="grid gap-7 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">

        {quickLinksData.map((card, index) => (
          <div
            key={index}
            className="
              relative
              bg-gradient-to-b from-white to-slate-50
              pt-[22px] px-[20px] pb-[24px]
              rounded-[14px]
              shadow-[0_10px_26px_rgba(0,0,0,0.1)]
              border-t-4 border-orange-400
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.16)]
            "
          >
            {/* CORNER BADGE (LEFT TOP) */}
            <span
              className="
                absolute
                -top-2.5 -left-2.5
                bg-gradient-to-br from-orange-400 to-orange-600
                text-white
                px-2.5 py-1.5
                rounded-md
                text-[13px]
                shadow-[0_6px_14px_rgba(0,0,0,0.25)]
              "
            >
              ⚡
            </span>

            {/* TITLE */}
            <h3 className="text-center text-[20px] font-bold text-gray-800 mb-2.5">
              {card.title}
            </h3>

            {/* DIVIDER */}
            <hr className="border-0 border-t border-dashed border-slate-300 mb-3.5" />

            {/* LINKS */}
            <ul className="space-y-2">
              {card.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link || "#"}
                    className="
                      group
                      flex items-center gap-2
                      px-2 py-1.5
                      rounded-md
                      text-gray-700
                      transition-all duration-200
                      hover:bg-orange-400/15
                      hover:text-orange-500
                      hover:translate-x-1
                      active:scale-[0.97]
                    "
                  >
                    {/* ARROW */}
                    <span className="text-orange-400 text-[15px] transition-transform group-hover:translate-x-1">
                      ➜
                    </span>

                    {/* TEXT */}
                    <span className="flex-1 text-[14px]">
                      {item.text}
                    </span>

                    {/* NEW TAG */}
                    {item.isNew && (
                      <span
                        className="
                          ml-auto
                          text-[10px]
                          px-1.5 py-[2px]
                          rounded
                          text-white
                          bg-gradient-to-br from-blue-500 to-blue-600
                          animate-[blink_1.4s_infinite]
                        "
                      >
                        NEW
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0.45; }
          }
        `}
      </style>
    </section>
  );
};

export default QuickLinksCards;
