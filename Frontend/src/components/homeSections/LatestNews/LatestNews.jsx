import "./LatestNews.css";
import latestNewsData from "./latestNewsData";

const LatestNews = () => {
  return (
    <section className="latest-slider-section">
      <h2 className="latest-slider-heading">Latest News & Events</h2>

      <div className="latest-slider">
        <div className="latest-track">
          {[...latestNewsData, ...latestNewsData].map((item, index) => (
            <div className="latest-card" key={index}>
              <div
                className="latest-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span className="corner-badge">⚡</span>
              </div>

              <div className="latest-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
