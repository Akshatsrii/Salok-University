import SemesterTabs from "../components/students/SemesterTabs";

const PAGE_STATS = [
  { value: "128", label: "Total Students", sub: "Across all semesters" },
  { value: "8", label: "Semesters", sub: "Full programme" },
  { value: "24", label: "Subjects", sub: "Programme-wide" },
  { value: "74", label: "Avg Coverage", sub: "Syllabus progress" },
];

const Students = () => {
  return (
    <>
      <style>{`
        :root {
          --amber: #f97316;
          --amber-soft: rgba(249,115,22,0.15);
          --amber-glow: rgba(249,115,22,0.08);
          --border-soft: rgba(249,115,22,0.15);
          --text-dim: rgba(255,255,255,0.6);
          --text-mute: rgba(255,255,255,0.3);
        }

        .st-root {
          color: white;
          background: #0b0b0b;
          min-height: 100%;
          padding: 10px 0;
        }

        .st-inner {
          position: relative;
        }

        /* Header */
        .st-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 30px;
        }

        .st-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--amber);
        }

        .st-subtitle {
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-mute);
          margin-top: 4px;
        }

        .st-session {
          background: #111;
          border: 1px solid var(--border-soft);
          padding: 8px 14px;
          border-radius: 20px;
          font-size: 12px;
          color: var(--text-dim);
          transition: 0.3s ease;
        }

        .st-session:hover {
          border-color: var(--amber);
          box-shadow: 0 0 12px var(--amber-glow);
        }

        /* Stats */
        .st-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 30px;
        }

        .st-card {
          background: #111;
          border: 1px solid var(--border-soft);
          padding: 20px;
          border-radius: 16px;
          transition: all 0.25s ease;
        }

        .st-card:hover {
          border-color: var(--amber);
          box-shadow: 0 0 25px var(--amber-glow);
          transform: translateY(-4px);
        }

        .st-value {
          font-size: 26px;
          font-weight: 700;
          color: var(--amber);
        }

        .st-label {
          font-size: 13px;
          margin-top: 6px;
          color: var(--text-dim);
        }

        .st-sub {
          font-size: 11px;
          margin-top: 2px;
          color: var(--text-mute);
        }

        /* Divider */
        .st-divider {
          margin: 35px 0 25px 0;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .st-line {
          flex: 1;
          height: 1px;
          background: var(--border-soft);
        }

        .st-divider-text {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--text-mute);
        }

        /* Footer */
        .st-footer {
          margin-top: 50px;
          text-align: center;
          font-size: 11px;
          color: var(--text-mute);
          padding-bottom: 10px;
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .st-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .st-stats {
            grid-template-columns: 1fr;
          }

          .st-header {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
          }
        }

      `}</style>

      <div className="st-root">
        <div className="st-inner">

          {/* Header */}
          <div className="st-header">
            <div>
              <div className="st-title">Students & Subjects</div>
              <div className="st-subtitle">
                Salok University · Faculty Portal
              </div>
            </div>

            <div className="st-session">
              ● Spring 2025 — Active Session
            </div>
          </div>

          {/* Stats Cards */}
          <div className="st-stats">
            {PAGE_STATS.map((stat) => (
              <div key={stat.label} className="st-card">
                <div className="st-value">
                  {stat.value}
                  {stat.label === "Avg Coverage" && "%"}
                </div>
                <div className="st-label">{stat.label}</div>
                <div className="st-sub">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="st-divider">
            <div className="st-line"></div>
            <div className="st-divider-text">Semester Browser</div>
            <div className="st-line"></div>
          </div>

          {/* Semester Tabs */}
          <SemesterTabs />

          {/* Footer */}
          <div className="st-footer">
            Salok University · Academic Year 2024–25
          </div>

        </div>
      </div>
    </>
  );
};

export default Students;
