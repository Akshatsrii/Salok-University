import "./QuickLinksCards.css";
import quickLinksData from "./quickLinksData";

const QuickLinksCards = () => {
  return (
    <section className="quick-links-section">
      <div className="quick-links-grid">
        {quickLinksData.map((card, index) => (
          <div className="quick-card" key={index}>
            <span className="corner-badge">⚡</span>

            <h3 className="card-title">{card.title}</h3>
            <hr />

            <ul>
              {card.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link || "#"}
                    className="quick-link"
                  >
                    <span className="arrow">➜</span>
                    <span className="text">{item.text}</span>
                    {item.isNew && <span className="new-tag">NEW</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickLinksCards;
