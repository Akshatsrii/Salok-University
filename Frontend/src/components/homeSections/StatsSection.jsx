import { useEffect, useState } from "react";
import c1 from "../../assets/images/stats/icon-courses.png";
import c2 from "../../assets/images/stats/icon-students.png";
import c3 from "../../assets/images/stats/icon-teachers.png";
import c4 from "../../assets/images/stats/icon-awards.png";

const StatItem = ({ icon, end, label, duration = 3500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const steps = duration / 30;
    const increment = Math.max(1, Math.floor(end / steps));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg px-8 py-10 hover:-translate-y-2 transition duration-300">
      <img src={icon} alt={label} className="w-16 mb-4" />

      <h2 className="text-4xl font-bold text-orange-500 mb-1">
        {count}+
      </h2>

      <p className="text-gray-700 font-medium text-center">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <StatItem
          icon={c1}
          end={500}
          label="Total Courses"
          duration={3000}
        />

        <StatItem
          icon={c2}
          end={1900}
          label="Our Students"
          duration={4000}
        />

        <StatItem
          icon={c3}
          end={750}
          label="Skilled Lecturers"
          duration={3500}
        />

        <StatItem
          icon={c4}
          end={30}
          label="Win Awards"
          duration={2500}
        />

      </div>
    </section>
  );
};

export default StatsSection;
