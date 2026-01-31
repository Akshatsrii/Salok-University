import announcements from "./announcementsData";
import "./ImportantAnnouncements.css";

const ImportantAnnouncements = () => {
  return (
    <section className="announcements-wrapper">
      <div className="announcements-title">
        📢 Important Announcements
      </div>

      <div className="announcements-marquee">
        <div className="announcements-track">
          {[...announcements, ...announcements].map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="announcement-item"
            >
              <span className="dot">•</span>
              {item.text}
              {item.isNew && <span className="new-badge">NEW</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantAnnouncements;
