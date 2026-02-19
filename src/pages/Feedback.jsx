import { useState, useMemo } from "react";

const feedbacks = [
  { id: 1, name: "Aman Sharma",  avatar: "AS", rating: 5, comment: "Absolutely fantastic teaching style. The way complex topics are broken down into digestible pieces is remarkable. I went from struggling to confident in just a few weeks.", subject: "Mathematics", date: "2025-02-10" },
  { id: 2, name: "Priya Patel",  avatar: "PP", rating: 4, comment: "Very clear explanations and well-structured lessons. Would love even more practice examples, but overall a truly excellent course.", subject: "Science", date: "2025-02-08" },
  { id: 3, name: "Rohan Mehta",  avatar: "RM", rating: 5, comment: "Best teacher I've had. Responds quickly, explains patiently, and makes every session feel personalized. Highly recommend!", subject: "English", date: "2025-02-05" },
  { id: 4, name: "Sneha Iyer",   avatar: "SI", rating: 3, comment: "Good content overall, but some sessions felt a bit rushed. A slower pace for difficult topics would greatly improve the experience.", subject: "History", date: "2025-01-30" },
  { id: 5, name: "Dev Kapoor",   avatar: "DK", rating: 5, comment: "Incredible depth of knowledge paired with genuine passion for teaching. Every class leaves me inspired and eager to learn more.", subject: "Computer Science", date: "2025-01-28" },
  { id: 6, name: "Anita Rao",    avatar: "AR", rating: 4, comment: "Engaging and thorough. The supplementary materials provided alongside each lesson are a great bonus that other teachers don't offer.", subject: "Mathematics", date: "2025-01-22" },
];

const RATING_FILTERS = [0, 5, 4, 3, 2, 1];

function StarRating({ rating, max = 5, size = "sm" }) {
  const sz = size === "lg" ? "w-5 h-5" : "w-3.5 h-3.5";
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${sz} transition-colors`}
          fill={i < rating ? "#ea580c" : "none"}
          stroke={i < rating ? "#ea580c" : "#2a2a2a"}
          strokeWidth="1.5">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AvatarCircle({ initials }) {
  return (
    <div style={{
      width: 40, height: 40, borderRadius: "12px", flexShrink: 0,
      background: "linear-gradient(135deg, #7c2d12, #c2410c, #ea580c)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "#fff", fontSize: "12px", fontWeight: 700,
      border: "1px solid rgba(234,88,12,0.35)",
      boxShadow: "0 0 12px rgba(234,88,12,0.15)",
      fontFamily: "'DM Mono', monospace",
    }}>
      {initials}
    </div>
  );
}

function StatCard({ label, value, sub, accent }) {
  return (
    <div style={{
      background: "#0d0d0d",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "16px", padding: "18px 20px",
      display: "flex", flexDirection: "column", gap: "4px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(to right, transparent, rgba(234,88,12,0.3), transparent)",
      }} />
      <span style={{ fontSize: "10px", color: "#3a3838", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Sans',sans-serif" }}>{label}</span>
      <span style={{ fontSize: "26px", fontWeight: 700, fontFamily: "'Playfair Display',serif", color: accent === "orange" ? "#ea580c" : accent === "white" ? "#ffffff" : accent === "green" ? "#22c55e" : "#ea580c", lineHeight: 1, tabularNums: true }}>{value}</span>
      {sub && <span style={{ fontSize: "11px", color: "#2e2e2e", fontFamily: "'DM Sans',sans-serif" }}>{sub}</span>}
    </div>
  );
}

function RatingBar({ star, count, total }) {
  const pct = total > 0 ? (count / total) * 100 : 0;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "11px" }}>
      <span style={{ color: "#474444", width: "10px", textAlign: "right", fontFamily: "'DM Mono',monospace" }}>{star}</span>
      <svg viewBox="0 0 20 20" fill="#ea580c" style={{ width: 11, height: 11, flexShrink: 0 }}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <div style={{ flex: 1, height: "5px", background: "#111", borderRadius: "99px", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${pct}%`,
          background: "linear-gradient(to right, #7c2d12, #ea580c)",
          borderRadius: "99px",
          transition: "width 0.7s cubic-bezier(0.22,1,0.36,1)",
        }} />
      </div>
      <span style={{ color: "#3a3838", width: "14px", textAlign: "right", fontFamily: "'DM Mono',monospace" }}>{count}</span>
    </div>
  );
}

function FeedbackCard({ feedback, index }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = feedback.comment.length > 120;
  const displayComment = isLong && !expanded
    ? feedback.comment.slice(0, 120) + "…"
    : feedback.comment;

  const formattedDate = new Date(feedback.date).toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric",
  });

  return (
    <div style={{
      animationDelay: `${index * 80}ms`,
      animation: "fadeUp 0.4s ease both",
      background: "#0d0d0d",
      border: "1px solid rgba(255,255,255,0.05)",
      borderRadius: "18px",
      padding: "20px",
      display: "flex", flexDirection: "column", gap: "16px",
      transition: "border-color 0.22s, transform 0.2s",
      position: "relative", overflow: "hidden",
      cursor: "default",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(234,88,12,0.28)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(to right, transparent, rgba(234,88,12,0.25), transparent)",
      }} />

      {/* Top row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <AvatarCircle initials={feedback.avatar} />
          <div>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#f0ece8", fontFamily: "'Playfair Display',serif" }}>{feedback.name}</p>
            <p style={{ fontSize: "11px", color: "#3a3838", marginTop: "2px", fontFamily: "'DM Mono',monospace" }}>{formattedDate}</p>
          </div>
        </div>
        <span style={{
          fontSize: "10px", fontWeight: 600, fontFamily: "'DM Mono',monospace",
          color: "#ea580c",
          background: "rgba(234,88,12,0.1)",
          border: "1px solid rgba(234,88,12,0.22)",
          padding: "3px 10px", borderRadius: "20px",
          whiteSpace: "nowrap", flexShrink: 0,
        }}>
          {feedback.subject}
        </span>
      </div>

      {/* Stars */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StarRating rating={feedback.rating} />
        <span style={{ fontSize: "11px", fontWeight: 700, color: "#c8c0b8", fontFamily: "'DM Mono',monospace" }}>{feedback.rating}.0</span>
        <span style={{ fontSize: "11px", color: "#2e2e2e" }}>/ 5</span>
      </div>

      {/* Comment */}
      <div>
        <p style={{ fontSize: "13px", color: "#6b6868", lineHeight: 1.6, fontFamily: "'DM Sans',sans-serif" }}>
          {displayComment}
        </p>
        {isLong && (
          <button onClick={() => setExpanded(v => !v)} style={{
            background: "none", border: "none", padding: 0, cursor: "pointer",
            fontSize: "11px", color: "#ea580c", marginTop: "4px",
            fontFamily: "'DM Sans',sans-serif", fontWeight: 600,
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#c2410c"}
            onMouseLeave={e => e.currentTarget.style.color = "#ea580c"}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Progress dot bar */}
      <div style={{ display: "flex", alignItems: "center", gap: "4px", paddingTop: "8px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{
            height: "4px", borderRadius: "99px",
            background: i < feedback.rating ? "#ea580c" : "#151515",
            width: i < feedback.rating ? "20px" : "8px",
            transition: "all 0.3s",
          }} />
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   MAIN
   ════════════════════════════════════════════════ */
const Feedback = () => {
  const [ratingFilter, setRatingFilter] = useState(0);
  const [search, setSearch] = useState("");

  const avgRating = useMemo(() => {
    const sum = feedbacks.reduce((a, f) => a + f.rating, 0);
    return (sum / feedbacks.length).toFixed(1);
  }, []);

  const ratingCounts = useMemo(() => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    feedbacks.forEach((f) => counts[f.rating]++);
    return counts;
  }, []);

  const filtered = useMemo(() => {
    let result = feedbacks;
    if (ratingFilter > 0) result = result.filter((f) => f.rating === ratingFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.comment.toLowerCase().includes(q) ||
        f.subject.toLowerCase().includes(q)
      );
    }
    return result;
  }, [ratingFilter, search]);

  const fiveStarPct = Math.round((ratingCounts[5] / feedbacks.length) * 100);

  return (
    <div style={{ background: "#000", minHeight: "100vh", padding: "28px 0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fb-search-input {
          width:100%; background:rgba(255,255,255,0.02);
          border:1px solid rgba(255,255,255,0.06);
          border-radius:12px; padding:10px 10px 10px 38px;
          font-size:13px; color:#c8c0b8;
          font-family:'DM Sans',sans-serif; outline:none;
          transition:border-color 0.2s, box-shadow 0.2s;
        }
        .fb-search-input:focus {
          border-color:rgba(234,88,12,0.4);
          box-shadow:0 0 0 3px rgba(234,88,12,0.07);
        }
        .fb-search-input::placeholder { color:#252525; }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: "28px", animation: "fadeUp 0.4s ease both" }}>
        <h1 style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: "28px", fontWeight: 700, color: "#ffffff",
          letterSpacing: "-0.5px", lineHeight: 1.1,
        }}>
          Student Feedback<span style={{ color: "#ea580c" }}>.</span>
        </h1>
        <p style={{ color: "#3a3838", fontSize: "13px", marginTop: "6px", fontFamily: "'DM Sans',sans-serif" }}>
          What your students are saying
        </p>
      </div>

      {/* Stats */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4,1fr)",
        gap: "12px", marginBottom: "20px",
        animation: "fadeUp 0.4s 0.06s ease both",
      }}>
        <StatCard label="Avg Rating"    value={avgRating}         sub={`from ${feedbacks.length} reviews`} accent="orange" />
        <StatCard label="Total Reviews" value={feedbacks.length}  sub="all time"                           accent="white"  />
        <StatCard label="5-Star"        value={`${fiveStarPct}%`} sub={`${ratingCounts[5]} reviews`}       accent="green"  />
        <StatCard label="Avg Sentiment" value="Positive"          sub="based on ratings"                   accent="orange" />
      </div>

      {/* Breakdown + Filters */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 2fr",
        gap: "14px", marginBottom: "20px",
        animation: "fadeUp 0.4s 0.12s ease both",
      }}>
        {/* Breakdown */}
        <div style={{
          background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "16px", padding: "20px",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: "linear-gradient(to right, transparent, rgba(234,88,12,0.25), transparent)",
          }} />
          <p style={{ fontSize: "10px", color: "#3a3838", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "14px", fontFamily: "'DM Sans',sans-serif" }}>
            Rating Breakdown
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[5, 4, 3, 2, 1].map(star => (
              <RatingBar key={star} star={star} count={ratingCounts[star]} total={feedbacks.length} />
            ))}
          </div>
        </div>

        {/* Search + filter */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", justifyContent: "space-between" }}>
          {/* Search */}
          <div style={{ position: "relative" }}>
            <svg style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: 15, height: 15, color: "#2e2e2e", pointerEvents: "none" }}
              viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input type="text" className="fb-search-input"
              placeholder="Search by name, subject, or comment…"
              value={search} onChange={e => setSearch(e.target.value)} />
          </div>

          {/* Star filter */}
          <div>
            <p style={{ fontSize: "10px", color: "#3a3838", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "10px", fontFamily: "'DM Sans',sans-serif" }}>
              Filter by Stars
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {RATING_FILTERS.map(r => {
                const isActive = ratingFilter === r && r > 0;
                const isAll    = r === 0 && ratingFilter === 0;
                return (
                  <button key={r} onClick={() => setRatingFilter(r === ratingFilter ? 0 : r)}
                    style={{
                      display: "flex", alignItems: "center", gap: "5px",
                      padding: "6px 14px", borderRadius: "10px",
                      fontSize: "11px", fontWeight: 600, cursor: "pointer",
                      fontFamily: "'DM Mono',sans-serif",
                      border: isActive || isAll
                        ? "1px solid rgba(234,88,12,0.45)"
                        : "1px solid rgba(255,255,255,0.05)",
                      background: isActive || isAll
                        ? "rgba(234,88,12,0.12)"
                        : "rgba(255,255,255,0.02)",
                      color: isActive || isAll ? "#ea580c" : "#3a3838",
                      transition: "all 0.18s",
                    }}
                    onMouseEnter={e => { if (!isActive && !isAll) { e.currentTarget.style.color = "#7a7878"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}}
                    onMouseLeave={e => { if (!isActive && !isAll) { e.currentTarget.style.color = "#3a3838"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}}
                  >
                    {r === 0 ? "All" : (
                      <>
                        {r}
                        <svg viewBox="0 0 20 20" fill="#ea580c" style={{ width: 11, height: 11 }}>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result count */}
          <p style={{ fontSize: "11px", color: "#2e2e2e", fontFamily: "'DM Mono',monospace" }}>
            Showing{" "}
            <span style={{ color: "#6b6868", fontWeight: 600 }}>{filtered.length}</span>
            {" "}of {feedbacks.length} reviews
          </p>
        </div>
      </div>

      {/* Cards grid */}
      {filtered.length === 0 ? (
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", padding: "80px 20px", textAlign: "center",
          animation: "fadeUp 0.4s ease both",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: "16px",
            background: "#0d0d0d", border: "1px dashed rgba(234,88,12,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: "16px", fontSize: "22px",
          }}>💬</div>
          <p style={{ color: "#3a3838", fontSize: "14px", fontFamily: "'Playfair Display',serif" }}>No feedback matches your filters</p>
          <button onClick={() => { setRatingFilter(0); setSearch(""); }}
            style={{
              marginTop: "12px", fontSize: "12px", color: "#ea580c",
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif", fontWeight: 600,
              textDecoration: "underline", textUnderlineOffset: "3px",
            }}>Clear filters</button>
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
        }}>
          {filtered.map((f, i) => (
            <FeedbackCard key={f.id} feedback={f} index={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feedback;