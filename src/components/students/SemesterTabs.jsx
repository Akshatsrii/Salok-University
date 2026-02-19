import { useState, useRef } from "react";
import SubjectCard from "./SubjectCard";

const SEMESTER_DATA = {
  1: {
    label: "First",
    subjects: [
      { name: "Introduction to Programming", code: "CS-101", students: 72, time: "9:00 AM", room: "Room 101", credits: 3, progress: 80, status: "completed" },
      { name: "Mathematics I", code: "MTH-101", students: 72, time: "11:00 AM", room: "Room 102", credits: 3, progress: 100, status: "completed" },
      { name: "English Composition", code: "ENG-101", students: 70, time: "1:00 PM", room: "Room 105", credits: 2, progress: 100, status: "completed" },
    ],
  },
  2: {
    label: "Second",
    subjects: [
      { name: "Object-Oriented Programming", code: "CS-202", students: 68, time: "10:00 AM", room: "Lab B", credits: 3, progress: 100, status: "completed" },
      { name: "Mathematics II", code: "MTH-202", students: 65, time: "12:00 PM", room: "Room 102", credits: 3, progress: 100, status: "completed" },
      { name: "Digital Logic Design", code: "EE-201", students: 60, time: "2:00 PM", room: "Room 204", credits: 3, progress: 100, status: "completed" },
    ],
  },
  3: {
    label: "Third",
    subjects: [
      { name: "Data Structures & Algorithms", code: "CS-301", students: 62, time: "9:00 AM", room: "Room 101", credits: 4, progress: 100, status: "completed" },
      { name: "Computer Organisation", code: "CS-302", students: 60, time: "11:00 AM", room: "Room 103", credits: 3, progress: 100, status: "completed" },
      { name: "Discrete Mathematics", code: "MTH-301", students: 58, time: "1:00 PM", room: "Room 202", credits: 3, progress: 100, status: "completed" },
    ],
  },
  4: {
    label: "Fourth",
    subjects: [
      { name: "Operating Systems", code: "CS-401", students: 58, time: "10:00 AM", room: "Room 204", credits: 4, progress: 100, status: "completed" },
      { name: "Database Management", code: "CS-402", students: 55, time: "12:00 PM", room: "Lab A", credits: 3, progress: 100, status: "completed" },
      { name: "Theory of Computation", code: "CS-403", students: 54, time: "2:00 PM", room: "Room 201", credits: 3, progress: 100, status: "completed" },
    ],
  },
  5: {
    label: "Fifth",
    subjects: [
      { name: "Software Engineering", code: "CS-501", students: 52, time: "9:00 AM", room: "Room 301", credits: 3, progress: 100, status: "completed" },
      { name: "Computer Networks", code: "CS-502", students: 50, time: "11:00 AM", room: "Lab C", credits: 4, progress: 100, status: "completed" },
      { name: "Compiler Design", code: "CS-503", students: 48, time: "1:00 PM", room: "Room 203", credits: 3, progress: 100, status: "completed" },
    ],
  },
  6: {
    label: "Sixth",
    subjects: [
      { name: "Artificial Intelligence", code: "CS-601", students: 48, time: "10:00 AM", room: "Lab D", credits: 4, progress: 88, status: "active" },
      { name: "Information Security", code: "CS-602", students: 45, time: "12:00 PM", room: "Room 302", credits: 3, progress: 72, status: "active" },
      { name: "Mobile Application Dev", code: "CS-603", students: 44, time: "2:00 PM", room: "Lab B", credits: 3, progress: 65, status: "active" },
    ],
  },
  7: {
    label: "Seventh",
    subjects: [
      { name: "Cloud Computing", code: "CS-701", students: 40, time: "9:00 AM", room: "Room 401", credits: 3, progress: 20, status: "upcoming" },
      { name: "Machine Learning", code: "CS-702", students: 38, time: "11:00 AM", room: "Lab E", credits: 4, progress: 10, status: "upcoming" },
      { name: "Final Year Project I", code: "CS-703", students: 36, time: "2:00 PM", room: "TBA", credits: 3, progress: 0, status: "upcoming" },
    ],
  },
  8: {
    label: "Eighth",
    subjects: [
      { name: "Distributed Systems", code: "CS-801", students: 34, time: "10:00 AM", room: "Room 402", credits: 3, progress: 0, status: "upcoming" },
      { name: "Research Methods", code: "CS-802", students: 32, time: "12:00 PM", room: "Room 301", credits: 2, progress: 0, status: "upcoming" },
      { name: "Final Year Project II", code: "CS-803", students: 30, time: "2:00 PM", room: "TBA", credits: 6, progress: 0, status: "upcoming" },
    ],
  },
};

const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8];

const SemesterTabs = () => {
  const [active, setActive] = useState(6);
  const [animKey, setAnimKey] = useState(0);
  const tabsRef = useRef(null);

  const handleTab = (sem) => {
    if (sem === active) return;
    setActive(sem);
    setAnimKey((k) => k + 1);
  };

  const semData = SEMESTER_DATA[active];
  const totalStudents = semData.subjects.reduce((a, s) => a + s.students, 0);
  const totalCredits  = semData.subjects.reduce((a, s) => a + s.credits, 0);
  const avgProgress   = Math.round(semData.subjects.reduce((a, s) => a + s.progress, 0) / semData.subjects.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --st-bg:        #000000;
          --st-surface:   #0d0d0d;
          --st-elevated:  #111111;
          --st-border:    rgba(234,88,12,0.08);
          --st-border-hi: rgba(234,88,12,0.22);
          --st-amber:     #ea580c;
          --st-amber-dim: rgba(234,88,12,0.1);
          --st-amber-hi:  #fb923c;
          --st-text:      #f0ece8;
          --st-text-dim:  rgba(240,236,232,0.5);
          --st-text-mute: rgba(240,236,232,0.2);
          --st-green:     #22c55e;
          --st-blue:      #60a5fa;
        }

        .st-root {
          font-family: 'DM Sans', sans-serif;
          color: var(--st-text);
        }

        /* ── Section header ── */
        .st-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 22px;
          animation: st-in 0.38s ease both;
        }
        .st-header-eyebrow {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--st-amber);
          opacity: 0.7;
          margin-bottom: 3px;
          font-family: 'DM Mono', monospace;
        }
        .st-header-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .st-count-chip {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: var(--st-text-mute);
          background: var(--st-elevated);
          border: 1px solid var(--st-border);
          border-radius: 20px;
          padding: 4px 12px;
          margin-bottom: 2px;
          font-family: 'DM Mono', monospace;
        }

        /* ── Tab strip ── */
        .st-tab-strip {
          background: var(--st-surface);
          border: 1px solid var(--st-border);
          border-radius: 14px;
          padding: 6px;
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-bottom: 20px;
          animation: st-in 0.38s ease 0.06s both;
        }

        .st-tab {
          flex: 1;
          min-width: 52px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          padding: 8px 6px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.18s ease;
          position: relative;
        }
        .st-tab:hover:not(.st-tab-active) {
          background: rgba(234,88,12,0.05);
          border-color: var(--st-border);
        }
        .st-tab-active {
          background: var(--st-amber-dim);
          border-color: var(--st-border-hi);
          box-shadow: 0 0 14px rgba(234,88,12,0.12);
        }

        .st-tab-num {
          font-family: 'Playfair Display', serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--st-text-mute);
          line-height: 1;
          transition: color 0.18s ease;
        }
        .st-tab:hover:not(.st-tab-active) .st-tab-num { color: var(--st-text-dim); }
        .st-tab-active .st-tab-num { color: var(--st-amber-hi); }

        .st-tab-label {
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--st-text-mute);
          transition: color 0.18s ease;
          font-family: 'DM Mono', monospace;
        }
        .st-tab:hover:not(.st-tab-active) .st-tab-label { color: var(--st-text-dim); }
        .st-tab-active .st-tab-label { color: var(--st-amber); }

        /* Status dot */
        .st-tab-dot {
          position: absolute;
          top: 6px; right: 6px;
          width: 5px; height: 5px;
          border-radius: 50%;
        }
        .st-dot-active    { background: var(--st-green); box-shadow: 0 0 6px rgba(34,197,94,0.6); }
        .st-dot-upcoming  { background: var(--st-blue);  box-shadow: 0 0 6px rgba(96,165,250,0.6); }
        .st-dot-completed { background: var(--st-amber); box-shadow: 0 0 6px rgba(234,88,12,0.5); }

        /* ── Summary stats bar ── */
        .st-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 22px;
          animation: st-in 0.38s ease 0.10s both;
        }

        .st-stat {
          background: var(--st-surface);
          border: 1px solid var(--st-border);
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: border-color 0.18s ease;
          position: relative;
          overflow: hidden;
        }
        .st-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(234,88,12,0.25), transparent);
        }
        .st-stat:hover { border-color: var(--st-border-hi); }

        .st-stat-icon {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: var(--st-amber-dim);
          border: 1px solid var(--st-border-hi);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--st-amber);
          flex-shrink: 0;
        }
        .st-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--st-amber-hi);
          line-height: 1;
        }
        .st-stat-lbl {
          font-size: 9.5px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--st-text-mute);
          margin-top: 2px;
          font-family: 'DM Mono', monospace;
        }

        /* ── Semester label ── */
        .st-sem-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          animation: st-in 0.32s ease both;
        }
        .st-sem-label-diamond {
          width: 5px; height: 5px;
          background: var(--st-amber);
          transform: rotate(45deg);
          opacity: 0.5;
          flex-shrink: 0;
        }
        .st-sem-label-text {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--st-text-mute);
          white-space: nowrap;
          font-family: 'DM Mono', monospace;
        }
        .st-sem-label-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--st-border-hi), transparent);
        }

        /* ── Card grid ── */
        .st-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
        }
        .st-grid-enter {
          animation: st-grid-in 0.32s ease both;
        }
        @keyframes st-grid-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Empty state */
        .st-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          border: 1px dashed var(--st-border-hi);
          border-radius: 14px;
          background: var(--st-surface);
          color: var(--st-text-mute);
          gap: 10px;
        }
        .st-empty-icon { opacity: 0.3; }
        .st-empty-text {
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.04em;
          font-family: 'DM Sans', sans-serif;
        }

        @keyframes st-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="st-root">

        {/* ── Section header ── */}
        <div className="st-header">
          <div>
            <div className="st-header-eyebrow">Academic Structure</div>
            <div className="st-header-title">Subjects by Semester</div>
          </div>
          <div className="st-count-chip">
            {Object.values(SEMESTER_DATA).reduce((a, s) => a + s.subjects.length, 0)} Total Subjects
          </div>
        </div>

        {/* ── Tab strip ── */}
        <div className="st-tab-strip" ref={tabsRef} role="tablist">
          {SEMESTERS.map((sem) => {
            const sData = SEMESTER_DATA[sem];
            const isActive = active === sem;
            const statuses = sData.subjects.map((s) => s.status);
            const dot =
              statuses.every((s) => s === "completed") ? "completed"
              : statuses.some((s) => s === "active")   ? "active"
              : "upcoming";

            return (
              <button
                key={sem}
                role="tab"
                aria-selected={isActive}
                className={`st-tab${isActive ? " st-tab-active" : ""}`}
                onClick={() => handleTab(sem)}
              >
                <div className={`st-tab-dot st-dot-${dot}`} title={dot.charAt(0).toUpperCase() + dot.slice(1)} />
                <span className="st-tab-num">{sem}</span>
                <span className="st-tab-label">Sem</span>
              </button>
            );
          })}
        </div>

        {/* ── Summary stats ── */}
        <div className="st-stats" key={`stats-${active}`}>
          <div className="st-stat">
            <div className="st-stat-icon">
              <svg viewBox="0 0 16 16" fill="none" width="15" height="15">
                <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5 6h6M5 9h6M5 12h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="st-stat-val">{semData.subjects.length}</div>
              <div className="st-stat-lbl">Subjects</div>
            </div>
          </div>

          <div className="st-stat">
            <div className="st-stat-icon">
              <svg viewBox="0 0 16 16" fill="none" width="15" height="15">
                <circle cx="6" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
                <circle cx="11" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M1 13c0-2.76 2.24-5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M15 13c0-2.76-2.24-5-5-5H8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="st-stat-val">{totalStudents}</div>
              <div className="st-stat-lbl">Students</div>
            </div>
          </div>

          <div className="st-stat">
            <div className="st-stat-icon">
              <svg viewBox="0 0 16 16" fill="none" width="15" height="15">
                <path d="M8 1.5l1.91 3.87L14 6.27l-3 2.93.71 4.14L8 11.27l-3.71 2.07.71-4.14L2 6.27l4.09-.9L8 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="st-stat-val">{totalCredits}</div>
              <div className="st-stat-lbl">Credits</div>
            </div>
          </div>

          <div className="st-stat">
            <div className="st-stat-icon">
              <svg viewBox="0 0 16 16" fill="none" width="15" height="15">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M8 5v3.5l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="st-stat-val">{avgProgress}%</div>
              <div className="st-stat-lbl">Avg Coverage</div>
            </div>
          </div>
        </div>

        {/* ── Semester label ── */}
        <div className="st-sem-label" key={`label-${active}`}>
          <div className="st-sem-label-diamond" />
          <span className="st-sem-label-text">
            {semData.label} Semester · {semData.subjects.length} Subjects
          </span>
          <div className="st-sem-label-line" />
        </div>

        {/* ── Subject grid ── */}
        <div className={`st-grid st-grid-enter`} key={animKey} role="tabpanel">
          {semData.subjects.length > 0 ? (
            semData.subjects.map((sub, i) => (
              <SubjectCard key={`${active}-${i}`} subject={sub} index={i} />
            ))
          ) : (
            <div className="st-empty">
              <svg className="st-empty-icon" viewBox="0 0 40 40" fill="none" width="40" height="40">
                <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13 16h14M13 22h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="st-empty-text">No subjects assigned for this semester.</span>
            </div>
          )}
        </div>

      </div>
    </>
  );
};

export default SemesterTabs;