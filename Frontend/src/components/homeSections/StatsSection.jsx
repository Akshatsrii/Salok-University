import { useEffect, useState } from "react";
import "../../styles/stats.css";
import c1 from "../../assets/images/stats/icon-courses.png";
import c2 from "../../assets/images/stats/icon-students.png";
import c3 from "../../assets/images/stats/icon-teachers.png";
import c4 from "../../assets/images/stats/icon-awards.png";

const StatItem = ({ icon, end, label, duration = 3500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const steps = duration / 30; // zyada steps = slow
    const increment = Math.max(1, Math.floor(end / steps));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30); // interval bada = slow

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="stat">
      <img src={icon} alt={label} />
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="stats-section">
      <StatItem icon={c1} end={500} label="Total Courses" duration={3000} />
      <StatItem icon={c2} end={1900} label="Our Students" duration={4000} />
      <StatItem icon={c3} end={750} label="Skilled Lecturers" duration={3500} />
      <StatItem icon={c4} end={30} label="Win Awards" duration={2500} />
    </section>
  );
};

export default StatsSection;
