const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Best Faculty Award",
    year: "2023",
    desc: "Recognised by the university senate for outstanding contributions to teaching excellence and student mentorship.",
    category: "Recognition",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M12 2l2.93 5.93L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.07-1.34L12 2z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    accent: "#d9943c",
    accentDim: "rgba(217,152,60,0.12)",
    accentBorder: "rgba(217,152,60,0.25)",
  },
  {
    id: 2,
    title: "12 Research Papers",
    year: "Published",
    desc: "Peer-reviewed publications in distributed systems, compiler design, and computing education across international journals.",
    category: "Research",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <path d="M4 4h16v16H4V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 4l4-2h8l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#7ec8a0",
    accentDim: "rgba(126,200,160,0.1)",
    accentBorder: "rgba(126,200,160,0.22)",
  },
  {
    id: 3,
    title: "25+ Projects Guided",
    year: "Final Year",
    desc: "Mentored over twenty-five undergraduate final year projects, several of which received departmental distinction.",
    category: "Mentorship",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 20c0-3.866 2.686-7 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M21 20c0-3.866-2.686-7-6-7h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    accent: "#82b4e8",
    accentDim: "rgba(130,180,232,0.1)",
    accentBorder: "rgba(130,180,232,0.22)",
  },
  {
    id: 4,
    title: "University Gold Medal",
    year: "Academic",
    desc: "Awarded the university gold medal for achieving the highest cumulative GPA across the doctoral programme cohort.",
    category: "Academic",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
        <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 4h6l1 4H8L9 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    accent: "#d9943c",
    accentDim: "rgba(217,152,60,0.12)",
    accentBorder: "rgba(217,152,60,0.25)",
  },
];

const AchievementSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400&family=Mulish:wght@300;400;500;600&display=swap');

        :root {
          --as-bg:        #0f0d09;
          --as-surface:   #161410;
          --as-elevated:  #1e1b12;
          --as-border:    rgba(217,152,60,0.09);
          --as-border-hi: rgba(217,152,60,0.2);
          --as-amber:     #d9943c;
          --as-amber-dim: rgba(217,152,60,0.12);
          --as-amber-hi:  #f0b05a;
          --as-text:      #e8dfc8;
          --as-text-dim:  rgba(232,223,200,0.48);
          --as-text-mute: rgba(232,223,200,0.22);
        }

        .as-root {
          font-family: 'Mulish', sans-serif;
          color: var(--as-text);
        }

        /* ── Section header ── */
        .as-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
          animation: as-fade 0.4s ease both;
        }

        .as-header-left {}

        .as-header-eyebrow {
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--as-amber);
          opacity: 0.7;
          margin-bottom: 3px;
        }

        .as-header-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--as-amber-hi);
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .as-header-rule {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .as-rule-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--as-border-hi), transparent);
        }
        .as-diamond {
          width: 5px; height: 5px;
          background: var(--as-amber);
          transform: rotate(45deg);
          opacity: 0.45;
          flex-shrink: 0;
        }

        /* ── Grid ── */
        .as-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        /* ── Card ── */
        .as-card {
          background: var(--as-surface);
          border-radius: 14px;
          border: 1px solid var(--as-border);
          padding: 20px 22px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          animation: as-rise 0.42s ease both;
        }
        .as-card:nth-child(1) { animation-delay: 0.06s; }
        .as-card:nth-child(2) { animation-delay: 0.12s; }
        .as-card:nth-child(3) { animation-delay: 0.18s; }
        .as-card:nth-child(4) { animation-delay: 0.24s; }

        .as-card:hover {
          transform: translateY(-3px);
          border-color: var(--accent-border, var(--as-border-hi));
          box-shadow: 0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px var(--accent-border, var(--as-border-hi));
        }

        @keyframes as-rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes as-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Accent glow blob in top-right corner */
        .as-card-glow {
          position: absolute;
          top: -30px; right: -30px;
          width: 110px; height: 110px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
          transition: opacity 0.22s ease;
        }
        .as-card:hover .as-card-glow { opacity: 1; }

        /* Thin left accent bar */
        .as-card-bar {
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 2.5px;
          border-radius: 0 2px 2px 0;
        }

        /* Card inner */
        .as-card-inner {
          position: relative;
          z-index: 1;
        }

        /* Top row: icon + category */
        .as-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .as-icon-box {
          width: 44px; height: 44px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid;
          transition: box-shadow 0.22s ease;
        }
        .as-card:hover .as-icon-box {
          box-shadow: 0 0 16px var(--accent-color, transparent);
        }

        .as-category-pill {
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid;
        }

        /* Title row */
        .as-card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 3px;
          letter-spacing: 0.01em;
        }

        .as-card-year {
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--as-text-mute);
          margin-bottom: 10px;
        }

        /* Divider */
        .as-card-rule {
          height: 1px;
          background: linear-gradient(90deg, var(--as-border-hi), transparent);
          margin-bottom: 10px;
          opacity: 0.6;
        }

        /* Description */
        .as-card-desc {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.65;
          color: var(--as-text-dim);
        }
      `}</style>

      <div className="as-root">

        {/* Header */}
        <div className="as-header">
          <div className="as-header-left">
            <div className="as-header-eyebrow">Faculty Record</div>
            <div className="as-header-title">Achievements</div>
          </div>
          <div className="as-header-rule">
            <div className="as-diamond" />
            <div className="as-rule-line" />
          </div>
        </div>

        {/* Grid */}
        <div className="as-grid">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="as-card"
              style={{
                "--accent-color": item.accent,
                "--accent-border": item.accentBorder,
              }}
            >
              {/* Glow blob */}
              <div
                className="as-card-glow"
                style={{ background: `radial-gradient(circle, ${item.accentDim} 0%, transparent 70%)` }}
              />

              {/* Left accent bar */}
              <div
                className="as-card-bar"
                style={{
                  background: item.accent,
                  boxShadow: `0 0 10px ${item.accent}`,
                }}
              />

              <div className="as-card-inner">
                {/* Top: icon + category pill */}
                <div className="as-card-top">
                  <div
                    className="as-icon-box"
                    style={{
                      background: item.accentDim,
                      borderColor: item.accentBorder,
                      color: item.accent,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="as-category-pill"
                    style={{
                      background: item.accentDim,
                      borderColor: item.accentBorder,
                      color: item.accent,
                    }}
                  >
                    {item.category}
                  </div>
                </div>

                {/* Title + year */}
                <div className="as-card-title" style={{ color: item.accent }}>
                  {item.title}
                </div>
                <div className="as-card-year">{item.year}</div>

                {/* Divider */}
                <div
                  className="as-card-rule"
                  style={{ background: `linear-gradient(90deg, ${item.accentBorder}, transparent)` }}
                />

                {/* Description */}
                <div className="as-card-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AchievementSection;