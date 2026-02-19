import { useState } from "react";

const StarRating = ({ rating, max = 5 }) => {
  return (
    <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <svg
            key={i}
            width="13"
            height="13"
            viewBox="0 0 24 24"
            style={{ flexShrink: 0 }}
          >
            {partial ? (
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#2a2a2a" />
                </linearGradient>
              </defs>
            ) : null}
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={
                filled
                  ? "#f97316"
                  : partial
                  ? `url(#half-${i})`
                  : "#2a2a2a"
              }
              stroke={filled || partial ? "#f97316" : "#444"}
              strokeWidth="1.5"
            />
          </svg>
        );
      })}
    </div>
  );
};

const FeedbackCard = ({
  feedback = {
    name: "Alexandra Monroe",
    role: "Product Designer",
    avatar: null,
    rating: 4.5,
    comment:
      "Absolutely transformed our workflow. The attention to detail here is remarkable — every interaction feels intentional and considered.",
    date: "Feb 2025",
    verified: true,
    helpful: 24,
    category: "UX Design",
  },
}) => {
  const [helpfulCount, setHelpfulCount] = useState(feedback.helpful ?? 0);
  const [hasVoted, setHasVoted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const COMMENT_LIMIT = 120;
  const isLong = feedback.comment?.length > COMMENT_LIMIT;
  const displayComment =
    isLong && !isExpanded
      ? feedback.comment.slice(0, COMMENT_LIMIT).trimEnd() + "…"
      : feedback.comment;

  const initials = feedback.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleHelpful = () => {
    if (hasVoted) return;
    setHelpfulCount((c) => c + 1);
    setHasVoted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .fc-card {
          font-family: 'DM Sans', sans-serif;
          background: #111;
          border: 1px solid #1e1e1e;
          border-radius: 16px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          max-width: 420px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }

        .fc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, rgba(249,115,22,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .fc-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(249,115,22,0.15);
          border-color: rgba(249,115,22,0.2);
        }

        .fc-quote-mark {
          font-family: 'Playfair Display', serif;
          font-size: 72px;
          line-height: 0.6;
          color: rgba(249,115,22,0.15);
          position: absolute;
          top: 22px;
          right: 24px;
          user-select: none;
          pointer-events: none;
        }

        .fc-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f97316, #c2410c);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 15px;
          font-weight: 600;
          color: white;
          flex-shrink: 0;
          letter-spacing: 0.5px;
          box-shadow: 0 0 0 2px rgba(249,115,22,0.25);
        }

        .fc-name {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 600;
          color: #f5f5f0;
          line-height: 1.2;
          letter-spacing: -0.2px;
        }

        .fc-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 3px;
          flex-wrap: wrap;
        }

        .fc-role {
          font-size: 12px;
          color: #555;
          font-weight: 400;
          letter-spacing: 0.2px;
        }

        .fc-badge {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          background: rgba(249,115,22,0.1);
          border: 1px solid rgba(249,115,22,0.2);
          color: #f97316;
          font-size: 10px;
          font-weight: 500;
          padding: 2px 7px;
          border-radius: 20px;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        .fc-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(249,115,22,0.15), transparent);
          margin: 18px 0;
        }

        .fc-comment {
          font-size: 14px;
          line-height: 1.75;
          color: #888;
          font-weight: 300;
          letter-spacing: 0.1px;
        }

        .fc-expand-btn {
          background: none;
          border: none;
          color: #f97316;
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          padding: 0;
          margin-left: 4px;
          letter-spacing: 0.2px;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .fc-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
        }

        .fc-rating-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .fc-rating-num {
          font-family: 'Playfair Display', serif;
          font-size: 13px;
          font-weight: 600;
          color: #f97316;
          letter-spacing: -0.3px;
        }

        .fc-date {
          font-size: 11px;
          color: #3a3a3a;
          letter-spacing: 0.3px;
        }

        .fc-helpful-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          background: none;
          border: 1px solid #222;
          border-radius: 20px;
          padding: 5px 11px;
          color: #555;
          font-size: 11px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.2px;
        }

        .fc-helpful-btn:hover:not(:disabled) {
          border-color: rgba(249,115,22,0.3);
          color: #f97316;
          background: rgba(249,115,22,0.05);
        }

        .fc-helpful-btn.voted {
          border-color: rgba(249,115,22,0.3);
          color: #f97316;
          background: rgba(249,115,22,0.08);
          cursor: default;
        }

        .fc-category-tag {
          position: absolute;
          top: 0;
          left: 28px;
          background: rgba(249,115,22,0.08);
          border: 1px solid rgba(249,115,22,0.15);
          border-top: none;
          border-radius: 0 0 8px 8px;
          padding: 3px 10px;
          font-size: 10px;
          color: rgba(249,115,22,0.6);
          letter-spacing: 0.8px;
          text-transform: uppercase;
          font-weight: 500;
        }
      `}</style>

      <div className="fc-card">
        {/* Category tag */}
        {feedback.category && (
          <div className="fc-category-tag">{feedback.category}</div>
        )}

        {/* Decorative quote mark */}
        <div className="fc-quote-mark">"</div>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "13px", marginTop: feedback.category ? "12px" : "0" }}>
          <div className="fc-avatar">
            {feedback.avatar ? (
              <img
                src={feedback.avatar}
                alt={feedback.name}
                style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
              />
            ) : (
              initials
            )}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="fc-name">{feedback.name}</div>
            <div className="fc-meta">
              {feedback.role && <span className="fc-role">{feedback.role}</span>}
              {feedback.verified && (
                <span className="fc-badge">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="fc-divider" />

        {/* Comment */}
        <p className="fc-comment">
          {displayComment}
          {isLong && (
            <button className="fc-expand-btn" onClick={() => setIsExpanded((v) => !v)}>
              {isExpanded ? "show less" : "read more"}
            </button>
          )}
        </p>

        {/* Footer */}
        <div className="fc-footer">
          <div>
            <div className="fc-rating-row">
              <StarRating rating={feedback.rating} />
              <span className="fc-rating-num">{feedback.rating}/5</span>
            </div>
            {feedback.date && <div className="fc-date" style={{ marginTop: "5px" }}>{feedback.date}</div>}
          </div>

          <button
            className={`fc-helpful-btn ${hasVoted ? "voted" : ""}`}
            onClick={handleHelpful}
            disabled={hasVoted}
            title={hasVoted ? "Thanks for your vote!" : "Mark as helpful"}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
              <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
            {helpfulCount > 0 ? `${helpfulCount} helpful` : "Helpful"}
          </button>
        </div>
      </div>
    </>
  );
};

export default FeedbackCard;