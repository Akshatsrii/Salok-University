// AssignmentCard.jsx
// data shape:
// {
//   title:       string,
//   subject:     string,
//   code:        string,          // e.g. "CS-401"
//   due:         string,          // ISO date "2025-03-15" or display string
//   submitted:   number,          // students who submitted
//   total:       number,          // total students
//   status:      "active" | "grading" | "closed" | "upcoming",
//   type:        "Lab" | "Assignment" | "Quiz" | "Project",
//   marks:       number,          // total marks
// }

const STATUS_MAP = {
  active:   { label: "Active",   color: "#4ade80", bg: "rgba(74,222,128,0.08)",  border: "rgba(74,222,128,0.2)" },
  grading:  { label: "Grading",  color: "#f0b05a", bg: "rgba(240,176,90,0.1)",   border: "rgba(240,176,90,0.25)" },
  closed:   { label: "Closed",   color: "rgba(232,223,200,0.3)", bg: "rgba(232,223,200,0.04)", border: "rgba(232,223,200,0.1)" },
  upcoming: { label: "Upcoming", color: "#82b4e8", bg: "rgba(130,180,232,0.08)", border: "rgba(130,180,232,0.2)" },
};

const TYPE_MAP = {
  Lab:        { color: "#82b4e8", bg: "rgba(130,180,232,0.1)",  border: "rgba(130,180,232,0.2)" },
  Assignment: { color: "#d9943c", bg: "rgba(217,152,60,0.1)",   border: "rgba(217,152,60,0.22)" },
  Quiz:       { color: "#7ec8a0", bg: "rgba(126,200,160,0.1)",  border: "rgba(126,200,160,0.2)" },
  Project:    { color: "#c084fc", bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.2)" },
};

// Compute days until due date
function getDueMeta(dueStr) {
  if (!dueStr) return { label: "No due date", urgent: false, passed: false };
  const due = new Date(dueStr);
  if (isNaN(due)) return { label: dueStr, urgent: false, passed: false }; // display string fallback
  const now = new Date();
  const diff = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
  if (diff < 0)  return { label: "Past due",        urgent: false, passed: true,  days: diff };
  if (diff === 0) return { label: "Due today",       urgent: true,  passed: false, days: 0 };
  if (diff === 1) return { label: "Due tomorrow",    urgent: true,  passed: false, days: 1 };
  if (diff <= 3)  return { label: `Due in ${diff}d`, urgent: true,  passed: false, days: diff };
  return { label: due.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" }), urgent: false, passed: false, days: diff };
}

const AssignmentCard = ({ data, index = 0 }) => {
  const status   = data.status   ?? "active";
  const type     = data.type     ?? "Assignment";
  const submitted = data.submitted ?? 0;
  const total    = data.total    ?? 1;
  const marks    = data.marks    ?? 100;
  const code     = data.code     ?? "";

  const st   = STATUS_MAP[status] || STATUS_MAP.active;
  const tp   = TYPE_MAP[type]     || TYPE_MAP.Assignment;
  const due  = getDueMeta(data.due);
  const pct  = Math.round((submitted / total) * 100);

  // Urgency bar color
  const barColor = due.passed  ? "rgba(217,85,60,0.9)"
                 : due.urgent  ? "#f0b05a"
                 : "var(--ac-amber)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Mulish:wght@300;400;500;600&display=swap');

        :root {
          --ac-surface:   #1a1712;
          --ac-elevated:  #221f16;
          --ac-border:    rgba(217,152,60,0.09);
          --ac-border-hi: rgba(217,152,60,0.22);
          --ac-amber:     #d9943c;
          --ac-amber-dim: rgba(217,152,60,0.12);
          --ac-amber-hi:  #f0b05a;
          --ac-text:      #e8dfc8;
          --ac-text-dim:  rgba(232,223,200,0.48);
          --ac-text-mute: rgba(232,223,200,0.2);
        }

        /* ── Card shell ── */
        .ac-card {
          font-family: 'Mulish', sans-serif;
          background: var(--ac-surface);
          border: 1px solid var(--ac-border);
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
          animation: ac-rise 0.42s ease both;
          animation-delay: calc(var(--i, 0) * 75ms);
        }
        @keyframes ac-rise {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ac-card:hover {
          border-color: var(--ac-border-hi);
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.4),
                      0 0 0 1px rgba(217,152,60,0.1);
        }

        /* Left hover bar */
        .ac-bar {
          position: absolute;
          left: 0; top: 18%; bottom: 18%;
          width: 2.5px;
          border-radius: 0 2px 2px 0;
          background: var(--ac-amber);
          box-shadow: 0 0 10px var(--ac-amber), 0 0 20px rgba(217,152,60,0.25);
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .ac-card:hover .ac-bar { opacity: 1; }

        /* Corner glow */
        .ac-corner-glow {
          position: absolute;
          top: -24px; right: -24px;
          width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(217,152,60,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .ac-card:hover .ac-corner-glow { opacity: 1; }

        /* Top band — urgency-aware color driven by inline style */
        .ac-band {
          height: 3px;
          flex-shrink: 0;
        }

        /* ── Body ── */
        .ac-body {
          padding: 18px 20px 14px;
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        /* Top row: type chip + status badge */
        .ac-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 13px;
        }

        .ac-type-chip {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 5px;
          border: 1px solid;
        }

        .ac-status-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 20px;
          border: 1px solid;
        }
        .ac-status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: currentColor;
          box-shadow: 0 0 5px currentColor;
        }

        /* Title + subject */
        .ac-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--ac-amber-hi);
          letter-spacing: 0.01em;
          line-height: 1.25;
          margin-bottom: 4px;
        }

        .ac-subject-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 14px;
        }
        .ac-subject-code {
          font-family: 'Cormorant Garamond', serif;
          font-size: 11px;
          font-weight: 600;
          color: var(--ac-amber);
          background: var(--ac-amber-dim);
          border: 1px solid var(--ac-border-hi);
          border-radius: 4px;
          padding: 1px 7px;
          letter-spacing: 0.06em;
        }
        .ac-subject-name {
          font-size: 12px;
          font-weight: 300;
          color: var(--ac-text-mute);
          letter-spacing: 0.02em;
        }

        /* Ornamental rule */
        .ac-rule {
          height: 1px;
          background: linear-gradient(90deg, var(--ac-border-hi), transparent);
          margin-bottom: 13px;
          opacity: 0.55;
        }

        /* Meta row: due date + marks */
        .ac-meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }

        .ac-due-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }

        .ac-marks-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-weight: 400;
          color: var(--ac-text-dim);
          background: var(--ac-elevated);
          border: 1px solid var(--ac-border);
          border-radius: 6px;
          padding: 4px 10px;
          letter-spacing: 0.02em;
        }
        .ac-marks-icon { color: var(--ac-amber); opacity: 0.75; }

        /* Submission progress */
        .ac-progress-section { }
        .ac-progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
        }
        .ac-progress-label {
          font-size: 9.5px;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--ac-text-mute);
        }
        .ac-progress-count {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--ac-amber-hi);
        }
        .ac-progress-track {
          height: 3px;
          background: var(--ac-elevated);
          border-radius: 2px;
          overflow: hidden;
        }
        .ac-progress-fill {
          height: 100%;
          border-radius: 2px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── Footer CTA ── */
        .ac-footer {
          padding: 0 20px 18px;
          position: relative;
          z-index: 1;
          display: flex;
          gap: 8px;
        }

        .ac-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 8px;
          font-family: 'Mulish', sans-serif;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.18s ease;
          border: 1px solid;
        }
        .ac-btn:active { transform: scale(0.97); }

        .ac-btn-primary {
          background: var(--ac-amber-dim);
          border-color: var(--ac-border-hi);
          color: var(--ac-amber-hi);
        }
        .ac-btn-primary:hover {
          background: rgba(217,152,60,0.2);
          box-shadow: 0 0 14px rgba(217,152,60,0.15);
        }

        .ac-btn-secondary {
          background: transparent;
          border-color: var(--ac-border);
          color: var(--ac-text-mute);
          flex: 0 0 auto;
          width: 36px;
          padding: 8px;
        }
        .ac-btn-secondary:hover {
          border-color: var(--ac-border-hi);
          color: var(--ac-text-dim);
          background: var(--ac-elevated);
        }

        /* Arrow slide on hover */
        .ac-btn-arrow {
          transition: transform 0.18s ease;
          flex-shrink: 0;
        }
        .ac-btn-primary:hover .ac-btn-arrow { transform: translateX(3px); }
      `}</style>

      <div className="ac-card" style={{ "--i": index }}>
        {/* Hover decorations */}
        <div className="ac-bar" />
        <div className="ac-corner-glow" />

        {/* Top urgency band */}
        <div
          className="ac-band"
          style={{
            background: due.passed
              ? "linear-gradient(90deg, #5a1a10, rgba(217,85,60,0.9) 45%, #f07060 65%, #5a1a10)"
              : due.urgent
              ? "linear-gradient(90deg, #7a5a10, #f0b05a 45%, #f5c878 65%, #7a5a10)"
              : "linear-gradient(90deg, #7a3a0a, #d9943c 45%, #f0b05a 65%, #7a3a0a)",
          }}
        />

        {/* Body */}
        <div className="ac-body">

          {/* Type + Status */}
          <div className="ac-top-row">
            <span
              className="ac-type-chip"
              style={{ color: tp.color, background: tp.bg, borderColor: tp.border }}
            >
              {type}
            </span>
            <span
              className="ac-status-badge"
              style={{ color: st.color, background: st.bg, borderColor: st.border }}
            >
              <span className="ac-status-dot" />
              {st.label}
            </span>
          </div>

          {/* Title */}
          <div className="ac-title">{data.title}</div>

          {/* Subject */}
          <div className="ac-subject-row">
            {code && <span className="ac-subject-code">{code}</span>}
            <span className="ac-subject-name">{data.subject}</span>
          </div>

          {/* Rule */}
          <div className="ac-rule" />

          {/* Meta: due date + marks */}
          <div className="ac-meta-row">
            <div
              className="ac-due-pill"
              style={{
                color:       due.passed ? "#f07060"  : due.urgent ? "#f0b05a"  : "var(--ac-text-dim)",
                background:  due.passed ? "rgba(217,85,60,0.08)" : due.urgent ? "rgba(240,176,90,0.08)" : "var(--ac-elevated)",
                borderColor: due.passed ? "rgba(217,85,60,0.25)" : due.urgent ? "rgba(240,176,90,0.25)" : "var(--ac-border)",
              }}
            >
              <svg viewBox="0 0 12 12" fill="none" width="11" height="11">
                <rect x="1" y="2" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M4 1v2M8 1v2M1 5.5h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                {due.urgent && !due.passed && (
                  <circle cx="8.5" cy="8.5" r="1" fill="currentColor"/>
                )}
              </svg>
              {due.label}
            </div>

            <div className="ac-marks-pill">
              <span className="ac-marks-icon">
                <svg viewBox="0 0 12 12" fill="none" width="11" height="11">
                  <path d="M6 1l1.17 2.37L10 3.8 8 5.74l.47 2.76L6 7.11l-2.47 1.39L4 5.74 2 3.8l2.83-.43L6 1z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round"/>
                </svg>
              </span>
              {marks} Marks
            </div>
          </div>

          {/* Submission progress */}
          <div className="ac-progress-section">
            <div className="ac-progress-header">
              <span className="ac-progress-label">Submissions</span>
              <span className="ac-progress-count">
                {submitted} / {total} &nbsp;·&nbsp; {pct}%
              </span>
            </div>
            <div className="ac-progress-track">
              <div
                className="ac-progress-fill"
                style={{
                  width: `${pct}%`,
                  background: `linear-gradient(90deg, ${barColor}, ${barColor === "var(--ac-amber)" ? "var(--ac-amber-hi)" : barColor})`,
                  boxShadow: `0 0 8px ${barColor}55`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="ac-footer">
          <button className="ac-btn ac-btn-primary">
            <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
              <circle cx="5.5" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="10" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M1 12c0-2.2 2.01-4 4.5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              <path d="M14 12c0-2.2-2.01-4-4.5-4H8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            View Submissions
            <svg className="ac-btn-arrow" viewBox="0 0 12 12" fill="none" width="11" height="11">
              <path d="M2.5 6h7M7 3.5l2.5 2.5L7 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Edit icon button */}
          <button className="ac-btn ac-btn-secondary" title="Edit assignment">
            <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
              <path d="M9.5 2.5l2 2-7 7H2.5v-2l7-7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default AssignmentCard; 