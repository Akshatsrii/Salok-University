import { useState, useEffect, useRef } from "react";

/* ─── Google Fonts ─────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body { background: #000000; }

    .profile-root {
      font-family: 'DM Sans', sans-serif;
      background: #000000;
      min-height: 100vh;
      color: #f0ece8;
      padding: 32px 0 60px;
    }

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes shimmer {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    @keyframes progressFill {
      from { width: 0%; }
      to   { width: var(--target-width); }
    }
    @keyframes pulse-ring {
      0%   { box-shadow: 0 0 0 0 rgba(194,65,12,0.5); }
      70%  { box-shadow: 0 0 0 12px rgba(194,65,12,0); }
      100% { box-shadow: 0 0 0 0 rgba(194,65,12,0); }
    }

    .fade-up { animation: fadeUp 0.5s ease both; }
    .fade-up-1 { animation: fadeUp 0.5s 0.05s ease both; }
    .fade-up-2 { animation: fadeUp 0.5s 0.12s ease both; }
    .fade-up-3 { animation: fadeUp 0.5s 0.20s ease both; }
    .fade-up-4 { animation: fadeUp 0.5s 0.28s ease both; }
    .fade-up-5 { animation: fadeUp 0.5s 0.36s ease both; }

    /* ── Layout ── */
    .profile-inner { max-width: 100%; margin: 0; padding: 0 28px; }

    /* ── Hero ── */
    .hero {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      padding: 48px 40px 36px;
      margin-bottom: 24px;
      background: #0d0d0d;
      border: 1px solid rgba(194,65,12,0.25);
    }
    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 65% 65% at 90% 5%, rgba(194,65,12,0.18) 0%, transparent 70%),
        radial-gradient(ellipse 40% 50% at 5% 90%, rgba(154,52,18,0.14) 0%, transparent 65%);
      pointer-events: none;
    }
    .hero-grid-bg {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(194,65,12,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(194,65,12,0.06) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
    }
    .hero-content { position: relative; display: flex; align-items: flex-start; gap: 32px; flex-wrap: wrap; }

    /* Avatar */
    .avatar-wrap {
      flex-shrink: 0;
      position: relative;
    }
    .avatar {
      width: 96px; height: 96px;
      border-radius: 50%;
      background: linear-gradient(135deg, #7c2d12, #c2410c, #ea580c);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Playfair Display', serif;
      font-size: 32px; font-weight: 700;
      color: #fff;
      border: 3px solid rgba(234,88,12,0.6);
      animation: pulse-ring 3s ease-in-out infinite;
    }
    .avatar-badge {
      position: absolute; bottom: 4px; right: 4px;
      width: 16px; height: 16px;
      background: #16a34a; border-radius: 50%;
      border: 2px solid #0d0d0d;
    }

    /* Hero Text */
    .hero-text { flex: 1; min-width: 200px; }
    .hero-name {
      font-family: 'Playfair Display', serif;
      font-size: 28px; font-weight: 700;
      color: #ffffff;
      line-height: 1.2;
      margin-bottom: 6px;
    }
    .hero-role {
      font-size: 13px;
      color: #ea580c;
      font-weight: 500;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 8px;
      font-family: 'DM Mono', monospace;
    }
    .hero-dept {
      font-size: 14px; color: #6b6560;
      display: flex; align-items: center; gap: 6px;
    }
    .hero-dept::before { content: ''; display: inline-block; width: 18px; height: 1px; background: #6b6560; }

    /* Edit button */
    .btn-edit {
      margin-top: auto;
      background: transparent;
      border: 1px solid rgba(234,88,12,0.55);
      color: #ea580c;
      padding: 8px 20px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
      align-self: flex-start;
    }
    .btn-edit:hover { background: rgba(234,88,12,0.12); border-color: #ea580c; }
    .btn-edit.active { background: rgba(234,88,12,0.18); }

    /* ── Stats ── */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      margin-bottom: 24px;
    }
    @media (max-width: 600px) { .stats-grid { grid-template-columns: repeat(2,1fr); } }

    .stat-card {
      background: #0d0d0d;
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 14px;
      padding: 20px 16px;
      text-align: center;
      transition: border-color 0.2s, transform 0.2s;
      cursor: default;
    }
    .stat-card:hover { border-color: rgba(234,88,12,0.45); transform: translateY(-2px); }
    .stat-value {
      font-family: 'Playfair Display', serif;
      font-size: 30px; font-weight: 700;
      background: linear-gradient(135deg, #ea580c, #c2410c);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
      margin-bottom: 6px;
    }
    .stat-label { font-size: 11px; color: #525050; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }

    /* ── Panel ── */
    .panel {
      background: #0d0d0d;
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 20px;
      overflow: hidden;
    }

    /* ── Tabs ── */
    .tabs {
      display: flex;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      padding: 0 28px;
      gap: 4px;
    }
    .tab-btn {
      background: none; border: none;
      padding: 16px 20px 14px;
      font-size: 13px; font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      color: #474444;
      cursor: pointer;
      position: relative;
      transition: color 0.2s;
      letter-spacing: 0.02em;
    }
    .tab-btn.active { color: #ea580c; }
    .tab-btn.active::after {
      content: '';
      position: absolute;
      bottom: -1px; left: 0; right: 0;
      height: 2px;
      background: #ea580c;
      border-radius: 2px 2px 0 0;
    }
    .tab-btn:hover:not(.active) { color: #8a8080; }

    /* ── Tab Content ── */
    .tab-content { padding: 32px 28px; }

    /* ── Field Groups ── */
    .field-group { margin-bottom: 32px; }
    .field-group:last-child { margin-bottom: 0; }
    .group-title {
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #3d3a3a;
      margin-bottom: 16px;
      display: flex; align-items: center; gap: 10px;
    }
    .group-title::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.04); }

    .fields-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    @media (max-width: 560px) { .fields-grid { grid-template-columns: 1fr; } }

    .field-card {
      background: rgba(255,255,255,0.018);
      border: 1px solid rgba(255,255,255,0.045);
      border-radius: 12px;
      padding: 14px 16px;
      transition: border-color 0.2s;
    }
    .field-card:hover { border-color: rgba(234,88,12,0.28); }
    .field-label { font-size: 10px; color: #474444; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 6px; }
    .field-value {
      font-size: 14px; color: #b8b0a8;
      font-family: 'DM Mono', monospace;
      font-weight: 400;
      word-break: break-all;
    }
    .field-input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      font-size: 14px;
      color: #f0ece8;
      font-family: 'DM Mono', monospace;
      border-bottom: 1px solid rgba(234,88,12,0.45);
      padding-bottom: 2px;
      transition: border-color 0.2s;
    }
    .field-input:focus { border-color: #ea580c; }

    /* ── Action Buttons ── */
    .action-row {
      display: flex; gap: 10px; justify-content: flex-end;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid rgba(255,255,255,0.04);
    }
    .btn-discard {
      background: transparent; border: 1px solid rgba(255,255,255,0.08);
      color: #575454; padding: 9px 20px; border-radius: 8px;
      font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif;
      cursor: pointer; transition: all 0.2s;
    }
    .btn-discard:hover { border-color: rgba(255,255,255,0.18); color: #7a7878; }
    .btn-save {
      background: linear-gradient(135deg, #ea580c, #9a3412);
      border: none; color: #fff;
      padding: 9px 24px; border-radius: 8px;
      font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif;
      cursor: pointer; transition: opacity 0.2s, transform 0.15s;
    }
    .btn-save:hover { opacity: 0.88; transform: translateY(-1px); }

    /* ── Courses ── */
    .course-list { display: flex; flex-direction: column; gap: 14px; }
    .course-card {
      background: rgba(255,255,255,0.018);
      border: 1px solid rgba(255,255,255,0.045);
      border-radius: 14px;
      padding: 20px 22px;
      transition: border-color 0.25s, transform 0.2s;
    }
    .course-card:hover { border-color: rgba(234,88,12,0.4); transform: translateX(4px); }
    .course-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .course-code {
      font-family: 'DM Mono', monospace;
      font-size: 11px; font-weight: 500;
      color: #ea580c;
      background: rgba(234,88,12,0.1);
      border: 1px solid rgba(234,88,12,0.25);
      padding: 3px 10px; border-radius: 20px;
    }
    .course-pct {
      font-family: 'Playfair Display', serif;
      font-size: 22px; font-weight: 700;
      color: #ea580c;
    }
    .course-name { font-size: 15px; font-weight: 500; color: #a09898; margin-bottom: 12px; }
    .progress-track {
      height: 6px; background: rgba(255,255,255,0.05);
      border-radius: 99px; overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      border-radius: 99px;
      background: linear-gradient(90deg, #7c2d12, #c2410c, #ea580c);
      animation: progressFill 1s cubic-bezier(0.22,1,0.36,1) both;
    }

    /* ── Saved toast ── */
    .toast {
      position: fixed;
      bottom: 28px; right: 28px;
      background: #ea580c;
      color: #fff;
      font-family: 'DM Sans', sans-serif;
      font-size: 13px; font-weight: 600;
      padding: 10px 20px;
      border-radius: 10px;
      animation: fadeUp 0.3s ease both;
      z-index: 1000;
    }
  `}</style>
);

/* ─── Data ─────────────────────────────────────── */
const STATS = [
  { label: "Students",    value: "128"  },
  { label: "Courses",     value: "6"    },
  { label: "Assignments", value: "34"   },
  { label: "Avg. Rating", value: "4.8"  },
];

const COURSES = [
  { code: "CS-401", name: "Data Structures",   progress: 72 },
  { code: "CS-312", name: "Operating Systems", progress: 55 },
  { code: "CS-220", name: "Object-Oriented Programming", progress: 88 },
];

const INITIAL_PROFILE = {
  fullName:    "Dr. Ayesha Farooq",
  employeeId:  "SU-FAC-2847",
  department:  "Computer Science",
  designation: "Associate Professor",
  email:       "a.farooq@salok.edu.pk",
  phone:       "+92 300 123 4567",
  office:      "Block C, Room 14",
  joined:      "September 2018",
};

function getInitials(name) {
  return name.split(" ").filter(Boolean).slice(-2).map(n => n[0]).join("").toUpperCase();
}

/* ─── Component ─────────────────────────────────── */
export default function Profile() {
  const [activeTab, setActiveTab]     = useState("info");
  const [editing,   setEditing]       = useState(false);
  const [profileData, setProfileData] = useState(INITIAL_PROFILE);
  const [draft,     setDraft]         = useState(INITIAL_PROFILE);
  const [toast,     setToast]         = useState(false);

  /* Start editing — clone to draft */
  function handleEdit() {
    if (editing) {
      setDraft(profileData); // cancel
      setEditing(false);
    } else {
      setDraft({ ...profileData });
      setEditing(true);
    }
  }

  function handleSave() {
    setProfileData({ ...draft });
    setEditing(false);
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  }

  function handleDiscard() {
    setDraft(profileData);
    setEditing(false);
  }

  const personalFields = [
    { key: "fullName",    label: "Full Name"    },
    { key: "employeeId",  label: "Employee ID"  },
    { key: "department",  label: "Department"   },
    { key: "designation", label: "Designation"  },
  ];
  const contactFields = [
    { key: "email",  label: "Email"   },
    { key: "phone",  label: "Phone"   },
    { key: "office", label: "Office"  },
    { key: "joined", label: "Joined"  },
  ];

  return (
    <div className="profile-root">
      <FontLoader />
      <div className="profile-inner">

        {/* ── Hero ── */}
        <div className="hero fade-up">
          <div className="hero-grid-bg" />
          <div className="hero-content">
            <div className="avatar-wrap">
              <div className="avatar">{getInitials(profileData.fullName)}</div>
              <div className="avatar-badge" title="Active" />
            </div>
            <div className="hero-text">
              <div className="hero-name">{profileData.fullName}</div>
              <div className="hero-role">{profileData.designation} · {profileData.employeeId}</div>
              <div className="hero-dept">Department of {profileData.department}</div>
            </div>
            <button className={`btn-edit${editing ? " active" : ""}`} onClick={handleEdit}>
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div className={`stat-card fade-up-${i + 1}`} key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Main Panel ── */}
        <div className="panel fade-up-3">

          {/* Tabs */}
          <div className="tabs">
            <button className={`tab-btn${activeTab === "info" ? " active" : ""}`} onClick={() => setActiveTab("info")}>
              Personal Info
            </button>
            <button className={`tab-btn${activeTab === "courses" ? " active" : ""}`} onClick={() => setActiveTab("courses")}>
              Courses
            </button>
          </div>

          {/* ── INFO TAB ── */}
          {activeTab === "info" && (
            <div className="tab-content">
              <FieldGroup title="Personal Details" fields={personalFields} editing={editing} draft={draft} setDraft={setDraft} />
              <FieldGroup title="Contact & Location" fields={contactFields} editing={editing} draft={draft} setDraft={setDraft} />

              {editing && (
                <div className="action-row">
                  <button className="btn-discard" onClick={handleDiscard}>Discard</button>
                  <button className="btn-save" onClick={handleSave}>Save Changes</button>
                </div>
              )}
            </div>
          )}

          {/* ── COURSES TAB ── */}
          {activeTab === "courses" && (
            <div className="tab-content">
              <div className="course-list">
                {COURSES.map((c) => (
                  <div className="course-card" key={c.code}>
                    <div className="course-header">
                      <span className="course-code">{c.code}</span>
                      <span className="course-pct">{c.progress}%</span>
                    </div>
                    <div className="course-name">{c.name}</div>
                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{ "--target-width": `${c.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {toast && <div className="toast">✓ Profile saved</div>}
    </div>
  );
}

/* ─── FieldGroup Sub-component ─────────────────── */
function FieldGroup({ title, fields, editing, draft, setDraft }) {
  return (
    <div className="field-group">
      <div className="group-title">{title}</div>
      <div className="fields-grid">
        {fields.map((f) => (
          <div className="field-card" key={f.key}>
            <div className="field-label">{f.label}</div>
            {editing ? (
              <input
                className="field-input"
                value={draft[f.key]}
                onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
              />
            ) : (
              <div className="field-value">{draft[f.key]}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}