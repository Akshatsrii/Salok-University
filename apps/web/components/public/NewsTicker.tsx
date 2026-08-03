export const NewsTicker = () => {
  const news = [
    "Admissions open for Fall 2026",
    "Salok University awarded 'A++' Grade by NAAC",
    "New AI & Robotics Lab inaugurated",
    "Campus Placement drive starts next week",
  ];

  return (
    <div className="bg-red-600 text-white flex overflow-hidden whitespace-nowrap">
      <div className="bg-red-700 px-6 py-2 font-bold z-10 shadow-[2px_0_10px_rgba(0,0,0,0.5)] uppercase text-sm tracking-wider flex-shrink-0">
        Latest Updates
      </div>
      <div className="flex items-center px-4 animate-[marquee_20s_linear_infinite]">
        {news.map((item, idx) => (
          <span key={idx} className="mx-8 flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-4 opacity-50"></span>
            {item}
          </span>
        ))}
        {/* Duplicate for seamless scrolling */}
        {news.map((item, idx) => (
          <span key={`dup-${idx}`} className="mx-8 flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-4 opacity-50"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
