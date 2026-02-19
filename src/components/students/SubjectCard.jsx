const SubjectCard = ({ subject, index = 0 }) => {
  const progress = subject.progress ?? 65;
  const code     = subject.code     ?? "CS-000";
  const room     = subject.room     ?? "TBA";
  const credits  = subject.credits  ?? 3;
  const status   = subject.status   ?? "active";

  const statusMap = {
    active:    { label: "Active",    color: "#22c55e", bg: "rgba(34,197,94,0.08)",   border: "rgba(34,197,94,0.2)"   },
    upcoming:  { label: "Upcoming",  color: "#60a5fa", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.2)"  },
    completed: { label: "Completed", color: "#ea580c", bg: "rgba(234,88,12,0.1)",    border: "rgba(234,88,12,0.25)"  },
  };
  const s = statusMap[status] || statusMap.active;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --sc-bg:        #000000;
          --sc-surface:   #0d0d0d;
          --sc-elevated:  #111111;
          --sc-border:    rgba(234,88,12,0.08);
          --sc-border-hi: rgba(234,88,12,0.22);
          --sc-amber:     #ea580c;
          --sc-amber-dim: rgba(234,88,12,0.1);
          --sc-amber-hi:  #fb923c;
          --sc-text:      #f0ece8;
          --sc-text-dim:  rgba(240,236,232,0.5);
          --sc-text-mute: rgba(240,236,232,0.2);
        }

        /* ── Card shell ── */
        .sc-card {
          font-family: 'DM Sans', sans-serif;
          background: var(--sc-surface);
          border: 1px solid var(--sc-border);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: border-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
          animation: sc-rise 0.42s ease both;
          cursor: default;
        }

        .sc-card { animation-delay: calc(var(--i, 0) * 70ms); }

        @keyframes sc-rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sc-card:hover {
          border-color: var(--sc-border-hi);
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(234,88,12,0.1);
        }

        /* Orange left bar */
        .sc-bar {
          position: absolute;
          left: 0; top: 18%; bottom: 18%;
          width: 2.5px;
          border-radius: 0 2px 2px 0;
          background: linear-gradient(180deg, #c2410c, #ea580c, #c2410c);
          box-shadow: 0 0 10px rgba(234,88,12,0.5), 0 0 20px rgba(234,88,12,0.2);
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .sc-card:hover .sc-bar { opacity: 1; }

        /* Corner glow */
        .sc-glow {
          position: absolute;
          top: -30px; right: -30px;
          width: 110px; height: 110px;
          background: radial-gradient(circle, rgba(234,88,12,0.09) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .sc-card:hover .sc-glow { opacity: 1; }

        /* ── Top band ── */
        .sc-band {
          height: 3px;
          background: linear-gradient(90deg, #7c2d12, #c2410c 35%, #ea580c 55%, #fb923c 65%, #ea580c 75%, #7c2d12);
          flex-shrink: 0;
        }

        /* ── Card body ── */
        .sc-body {
          padding: 18px 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        /* Top row: code chip + status */
        .sc-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .sc-code {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--sc-amber);
          background: var(--sc-amber-dim);
          border: 1px solid var(--sc-border-hi);
          border-radius: 6px;
          padding: 2px 9px;
        }

        .sc-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 20px;
          border: 1px solid;
          font-family: 'DM Mono', monospace;
        }
        .sc-status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 5px currentColor;
        }

        /* Subject name */
        .sc-name {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.25;
          margin-bottom: 14px;
        }

        /* Ornamental rule */
        .sc-rule {
          height: 1px;
          background: linear-gradient(90deg, var(--sc-border-hi), transparent);
          margin-bottom: 13px;
          opacity: 0.6;
        }

        /* Meta pills row */
        .sc-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 16px;
        }

        .sc-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 400;
          color: var(--sc-text-dim);
          background: var(--sc-elevated);
          border: 1px solid var(--sc-border);
          border-radius: 7px;
          padding: 4px 9px;
          letter-spacing: 0.02em;
          transition: border-color 0.18s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .sc-card:hover .sc-pill { border-color: var(--sc-border-hi); }

        .sc-pill-icon {
          color: var(--sc-amber);
          opacity: 0.8;
          flex-shrink: 0;
        }

        /* Progress bar */
        .sc-progress-wrap { margin-bottom: 16px; }
        .sc-progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }
        .sc-progress-label {
          font-size: 9.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--sc-text-mute);
          font-family: 'DM Mono', monospace;
        }
        .sc-progress-pct {
          font-family: 'Playfair Display', serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--sc-amber-hi);
        }
        .sc-progress-track {
          height: 4px;
          background: rgba(255,255,255,0.04);
          border-radius: 99px;
          overflow: hidden;
        }
        .sc-progress-fill {
          height: 100%;
          border-radius: 99px;
          background: linear-gradient(90deg, #7c2d12, #c2410c, #ea580c);
          box-shadow: 0 0 8px rgba(234,88,12,0.35);
          transition: width 1s cubic-bezier(0.4,0,0.2,1);
        }

        /* ── Footer CTA ── */
        .sc-footer {
          padding: 0 20px 18px;
          position: relative;
          z-index: 1;
        }

        .sc-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 9px 16px;
          border-radius: 10px;
          border: 1px solid var(--sc-border-hi);
          background: var(--sc-amber-dim);
          color: var(--sc-amber-hi);
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .sc-cta:hover {
          background: rgba(234,88,12,0.18);
          box-shadow: 0 0 20px rgba(234,88,12,0.15);
          border-color: rgba(234,88,12,0.4);
        }
        .sc-cta:active { transform: scale(0.97); }

        .sc-cta-arrow {
          transition: transform 0.2s ease;
          flex-shrink: 0;
        }
        .sc-cta:hover .sc-cta-arrow { transform: translateX(3px); }
      `}</style>

      <div className="sc-card" style={{ "--i": index }}>
        <div className="sc-bar" />
        <div className="sc-glow" />
        <div className="sc-band" />

        <div className="sc-body">
          {/* Code + status */}
          <div className="sc-top-row">
            <span className="sc-code">{code}</span>
            <span className="sc-status" style={{ color: s.color, background: s.bg, borderColor: s.border }}>
              <span className="sc-status-dot" />
              {s.label}
            </span>
          </div>

          {/* Subject name */}
          <div className="sc-name">{subject.name}</div>

          {/* Rule */}
          <div className="sc-rule" />

          {/* Meta pills */}
          <div className="sc-meta">
            <div className="sc-pill">
              <span className="sc-pill-icon">
                <svg viewBox="0 0 13 13" fill="none" width="11" height="11">
                  <circle cx="4.5" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="9" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1 11c0-1.93 1.57-3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M13 11c0-1.93-1.57-3.5-3.5-3.5H7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </span>
              {subject.students} Students
            </div>

            <div className="sc-pill">
              <span className="sc-pill-icon">
                <svg viewBox="0 0 13 13" fill="none" width="11" height="11">
                  <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M6.5 3.5v3.2l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {subject.time}
            </div>

            <div className="sc-pill">
              <span className="sc-pill-icon">
                <svg viewBox="0 0 13 13" fill="none" width="11" height="11">
                  <path d="M2 11.5V5L6.5 2 11 5v6.5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  <rect x="4.5" y="7.5" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </span>
              {room}
            </div>

            <div className="sc-pill">
              <span className="sc-pill-icon">
                <svg viewBox="0 0 13 13" fill="none" width="11" height="11">
                  <path d="M6.5 1l1.47 2.98L11.5 4.5l-2.5 2.44.59 3.44L6.5 8.77l-3.09 1.6.59-3.43L1.5 4.5l3.53-.52L6.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
              </span>
              {credits} Credits
            </div>
          </div>

          {/* Progress */}
          <div className="sc-progress-wrap">
            <div className="sc-progress-header">
              <span className="sc-progress-label">Syllabus Coverage</span>
              <span className="sc-progress-pct">{progress}%</span>
            </div>
            <div className="sc-progress-track">
              <div className="sc-progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="sc-footer">
          <button className="sc-cta">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <circle cx="5.5" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="10" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M1 12c0-2.2 2.01-4 4.5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              <path d="M14 12c0-2.2-2.01-4-4.5-4H8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            View Students
            <svg className="sc-cta-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SubjectCard;