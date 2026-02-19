import { useState, useRef } from "react";

/* ─── Font & Global Styles ──────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

    .asgn-root {
      font-family: 'DM Sans', sans-serif;
      background: #000000;
      min-height: 100vh;
      color: #f0ece8;
      padding: 32px 0 60px;
    }

    /* ── Animations ── */
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-12px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.96); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes shake {
      0%,100% { transform: translateX(0); }
      20%     { transform: translateX(-6px); }
      40%     { transform: translateX(6px); }
      60%     { transform: translateX(-4px); }
      80%     { transform: translateX(4px); }
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .asgn-fade-up   { animation: fadeUp 0.45s ease both; }
    .asgn-fade-up-1 { animation: fadeUp 0.45s 0.06s ease both; }
    .asgn-fade-up-2 { animation: fadeUp 0.45s 0.12s ease both; }
    .asgn-card-enter { animation: scaleIn 0.35s cubic-bezier(0.22,1,0.36,1) both; }
    .asgn-shake { animation: shake 0.4s ease; }

    /* ── Layout ── */
    .asgn-inner { max-width: 100%; margin: 0; padding: 0 28px; }

    /* ── Header ── */
    .asgn-header {
      display: flex; align-items: flex-end; justify-content: space-between;
      margin-bottom: 28px; flex-wrap: wrap; gap: 12px;
    }
    .asgn-title {
      font-family: 'Playfair Display', serif;
      font-size: 26px; font-weight: 700; color: #ffffff;
      line-height: 1.2;
    }
    .asgn-title span { color: #ea580c; }
    .asgn-count {
      font-family: 'DM Mono', monospace;
      font-size: 12px; color: #474444;
      background: #0d0d0d;
      border: 1px solid rgba(234,88,12,0.15);
      padding: 4px 12px; border-radius: 20px;
    }

    /* ── Form Panel ── */
    .asgn-form-panel {
      position: relative;
      background: #0d0d0d;
      border: 1px solid rgba(234,88,12,0.2);
      border-radius: 20px;
      padding: 28px;
      margin-bottom: 24px;
      overflow: hidden;
    }
    .asgn-form-panel::before {
      content: '';
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 55% 55% at 95% 5%, rgba(194,65,12,0.12) 0%, transparent 65%),
        radial-gradient(ellipse 35% 45% at 5% 95%, rgba(154,52,18,0.1) 0%, transparent 60%);
      pointer-events: none;
    }
    .asgn-form-grid {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
    }
    @media (max-width: 580px) { .asgn-form-grid { grid-template-columns: 1fr; } }

    .asgn-form-group { display: flex; flex-direction: column; gap: 6px; }
    .asgn-form-group.full { grid-column: 1 / -1; }

    .asgn-label {
      font-size: 10px; font-weight: 700;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: #474444;
    }
    .asgn-label .req { color: #ea580c; margin-left: 2px; }

    .asgn-input, .asgn-textarea {
      background: rgba(255,255,255,0.025);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 10px;
      padding: 10px 14px;
      font-size: 14px;
      color: #f0ece8;
      font-family: 'DM Sans', sans-serif;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
      width: 100%;
    }
    .asgn-input:focus, .asgn-textarea:focus {
      border-color: rgba(234,88,12,0.55);
      background: rgba(234,88,12,0.04);
    }
    .asgn-input.error { border-color: rgba(239,68,68,0.6); }
    .asgn-input::placeholder { color: #3a3838; }
    .asgn-input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.3); cursor: pointer; }
    .asgn-textarea { resize: vertical; min-height: 70px; }
    .asgn-textarea::placeholder { color: #3a3838; }

    .asgn-error-msg {
      font-size: 11px; color: #f87171;
      font-family: 'DM Mono', monospace;
      margin-top: 2px;
    }

    /* Subject dropdown chips */
    .asgn-subject-chips { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 4px; }
    .asgn-chip {
      font-size: 11px; font-family: 'DM Mono', monospace;
      padding: 3px 10px; border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.06);
      color: #575454; background: rgba(255,255,255,0.02);
      cursor: pointer; transition: all 0.18s;
    }
    .asgn-chip:hover { border-color: rgba(234,88,12,0.3); color: #ea580c; }
    .asgn-chip.selected { background: rgba(234,88,12,0.12); border-color: rgba(234,88,12,0.4); color: #ea580c; }

    /* Form footer */
    .asgn-form-footer {
      position: relative;
      display: flex; align-items: center; justify-content: space-between;
      margin-top: 20px; flex-wrap: wrap; gap: 10px;
    }
    .asgn-form-hint { font-size: 11px; color: #3a3838; }
    .asgn-form-hint span { color: #ea580c; }

    .asgn-btn-add {
      background: linear-gradient(135deg, #ea580c, #9a3412);
      border: none; color: #fff;
      padding: 10px 28px;
      border-radius: 10px;
      font-size: 13px; font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
      display: flex; align-items: center; gap: 8px;
    }
    .asgn-btn-add:hover { opacity: 0.88; transform: translateY(-1px); box-shadow: 0 4px 20px rgba(234,88,12,0.25); }
    .asgn-btn-add:active { transform: translateY(0); }

    /* ── Filter Bar ── */
    .asgn-filter-bar {
      display: flex; align-items: center; gap: 10px;
      margin-bottom: 18px; flex-wrap: wrap;
    }
    .asgn-filter-label { font-size: 11px; color: #474444; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }
    .asgn-filter-chip {
      font-size: 11px; font-family: 'DM Mono', monospace;
      padding: 4px 12px; border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.06);
      color: #575454; background: transparent;
      cursor: pointer; transition: all 0.18s;
    }
    .asgn-filter-chip:hover { border-color: rgba(234,88,12,0.25); color: #9a7060; }
    .asgn-filter-chip.active { background: rgba(234,88,12,0.1); border-color: rgba(234,88,12,0.35); color: #ea580c; }

    /* ── Assignment Cards ── */
    .asgn-list { display: flex; flex-direction: column; gap: 12px; }

    .asgn-card {
      position: relative;
      background: #0d0d0d;
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 16px;
      padding: 20px 22px;
      display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
      transition: border-color 0.22s, transform 0.2s;
      overflow: hidden;
    }
    .asgn-card::before {
      content: '';
      position: absolute; left: 0; top: 0; bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #ea580c, #7c2d12);
      border-radius: 3px 0 0 3px;
      opacity: 0;
      transition: opacity 0.22s;
    }
    .asgn-card:hover { border-color: rgba(234,88,12,0.3); transform: translateX(3px); }
    .asgn-card:hover::before { opacity: 1; }

    .asgn-card-left { flex: 1; min-width: 0; }

    .asgn-card-top { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap; }
    .asgn-card-title {
      font-family: 'Playfair Display', serif;
      font-size: 17px; font-weight: 600;
      color: #ffffff; line-height: 1.3;
    }

    .asgn-subject-badge {
      font-size: 10px; font-family: 'DM Mono', monospace; font-weight: 500;
      color: #ea580c;
      background: rgba(234,88,12,0.1);
      border: 1px solid rgba(234,88,12,0.22);
      padding: 2px 9px; border-radius: 20px;
      white-space: nowrap;
    }

    .asgn-due {
      display: inline-flex; align-items: center; gap: 5px;
      font-size: 11px; font-family: 'DM Mono', monospace;
      color: #575454;
      margin-bottom: 8px;
    }
    .asgn-due.overdue { color: #f87171; }
    .asgn-due.soon { color: #fb923c; }

    .asgn-desc {
      font-size: 13px; color: #6b6868;
      line-height: 1.55;
    }

    /* Card actions */
    .asgn-card-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; }

    .asgn-btn-delete {
      background: transparent;
      border: 1px solid rgba(239,68,68,0.18);
      color: #6b4444; padding: 5px 12px;
      border-radius: 7px;
      font-size: 11px; font-weight: 600;
      font-family: 'DM Sans', sans-serif;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    }
    .asgn-btn-delete:hover { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.45); color: #f87171; }

    .asgn-days-badge {
      font-size: 10px; font-family: 'DM Mono', monospace;
      padding: 3px 8px; border-radius: 6px;
      font-weight: 500; white-space: nowrap;
    }
    .asgn-days-badge.ok { background: rgba(234,88,12,0.08); color: #9a6040; }
    .asgn-days-badge.soon { background: rgba(251,146,60,0.1); color: #fb923c; }
    .asgn-days-badge.overdue { background: rgba(239,68,68,0.1); color: #f87171; }

    /* ── Empty State ── */
    .asgn-empty {
      text-align: center;
      padding: 60px 20px;
      background: #0d0d0d;
      border: 1px dashed rgba(234,88,12,0.15);
      border-radius: 16px;
    }
    .asgn-empty-icon {
      font-size: 44px; margin-bottom: 14px; opacity: 0.25;
    }
    .asgn-empty-title { font-family: 'Playfair Display', serif; font-size: 18px; color: #3a3838; margin-bottom: 6px; }
    .asgn-empty-sub { font-size: 13px; color: #2e2c2c; }

    /* ── Delete confirm ── */
    .asgn-confirm-overlay {
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.75);
      display: flex; align-items: center; justify-content: center;
      z-index: 100; animation: fadeUp 0.2s ease both;
    }
    .asgn-confirm-box {
      background: #111;
      border: 1px solid rgba(234,88,12,0.25);
      border-radius: 16px;
      padding: 28px 32px;
      max-width: 360px; width: 90%;
      text-align: center;
      animation: scaleIn 0.25s ease both;
    }
    .asgn-confirm-title { font-family: 'Playfair Display', serif; font-size: 18px; color: #fff; margin-bottom: 8px; }
    .asgn-confirm-sub { font-size: 13px; color: #575454; margin-bottom: 22px; }
    .asgn-confirm-btns { display: flex; gap: 10px; justify-content: center; }
    .asgn-confirm-cancel {
      background: transparent; border: 1px solid rgba(255,255,255,0.08);
      color: #575454; padding: 8px 20px; border-radius: 8px;
      font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif;
      cursor: pointer; transition: all 0.2s;
    }
    .asgn-confirm-cancel:hover { border-color: rgba(255,255,255,0.18); color: #8a8080; }
    .asgn-confirm-delete {
      background: linear-gradient(135deg, #dc2626, #991b1b);
      border: none; color: #fff;
      padding: 8px 20px; border-radius: 8px;
      font-size: 13px; font-weight: 600; font-family: 'DM Sans', sans-serif;
      cursor: pointer; transition: opacity 0.2s;
    }
    .asgn-confirm-delete:hover { opacity: 0.85; }
  `}</style>
);

/* ─── Preset subjects ──────────────────────────── */
const SUBJECTS = ["CS-401", "CS-312", "CS-220", "CS-101", "CS-510"];

/* ─── Helpers ─────────────────────────────────── */
function getDayDiff(dueDateStr) {
  if (!dueDateStr) return null;
  const due  = new Date(dueDateStr);
  const now  = new Date();
  now.setHours(0,0,0,0);
  return Math.ceil((due - now) / (1000 * 60 * 60 * 24));
}

function DueBadge({ dueDate }) {
  const diff = getDayDiff(dueDate);
  if (diff === null) return null;
  if (diff < 0)  return <span className="asgn-days-badge overdue">{Math.abs(diff)}d overdue</span>;
  if (diff === 0) return <span className="asgn-days-badge soon">Due today</span>;
  if (diff <= 3)  return <span className="asgn-days-badge soon">Due in {diff}d</span>;
  return <span className="asgn-days-badge ok">Due in {diff}d</span>;
}

function DueLabel({ dueDate }) {
  const diff = getDayDiff(dueDate);
  let cls = "asgn-due";
  if (diff !== null && diff < 0) cls += " overdue";
  else if (diff !== null && diff <= 3) cls += " soon";
  return (
    <div className={cls}>
      <span>📅</span>
      {new Date(dueDate + "T00:00:00").toLocaleDateString("en-PK", { day:"numeric", month:"short", year:"numeric" })}
    </div>
  );
}

/* ─── Main Component ──────────────────────────── */
const INITIAL_ASSIGNMENTS = [
  { id: 1, title: "Binary Search Tree Implementation", subject: "CS-401", dueDate: "2026-02-25", description: "Implement BST with insert, delete, and traversal methods in C++." },
  { id: 2, title: "Process Scheduling Simulation",      subject: "CS-312", dueDate: "2026-03-01", description: "Simulate Round Robin and FCFS scheduling algorithms." },
];

export default function Assignments() {
  const [assignments, setAssignments] = useState(INITIAL_ASSIGNMENTS);
  const [filter,      setFilter]      = useState("All");
  const [formData,    setFormData]    = useState({ title:"", subject:"", dueDate:"", description:"" });
  const [errors,      setErrors]      = useState({});
  const [confirmId,   setConfirmId]   = useState(null);
  const [shakeForm,   setShakeForm]   = useState(false);
  const formRef = useRef(null);

  /* ── Validate ── */
  function validate() {
    const e = {};
    if (!formData.title.trim())   e.title   = "Title is required";
    if (!formData.subject.trim()) e.subject = "Subject is required";
    if (!formData.dueDate)        e.dueDate = "Due date is required";
    return e;
  }

  /* ── Add ── */
  function handleAdd() {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      setShakeForm(true);
      setTimeout(() => setShakeForm(false), 500);
      return;
    }
    setAssignments([{ id: Date.now(), ...formData }, ...assignments]);
    setFormData({ title:"", subject:"", dueDate:"", description:"" });
    setErrors({});
  }

  /* ── Delete (confirmed) ── */
  function handleDelete(id) { setConfirmId(id); }
  function confirmDelete() {
    setAssignments(assignments.filter(a => a.id !== confirmId));
    setConfirmId(null);
  }

  /* ── Filter ── */
  const allSubjects = ["All", ...Array.from(new Set(assignments.map(a => a.subject)))];
  const visible = filter === "All" ? assignments : assignments.filter(a => a.subject === filter);

  return (
    <div className="asgn-root">
      <FontLoader />
      <div className="asgn-inner">

        {/* ── Header ── */}
        <div className="asgn-header asgn-fade-up">
          <div>
            <div className="asgn-title">Assignment<span> Board</span></div>
          </div>
          <div className="asgn-count">{assignments.length} total</div>
        </div>

        {/* ── Form ── */}
        <div className={`asgn-form-panel asgn-fade-up-1${shakeForm ? " asgn-shake" : ""}`} ref={formRef}>

          {/* Section label */}
          <div style={{ position:"relative", marginBottom:20, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:16, fontWeight:700, color:"#fff" }}>New Assignment</span>
            <div style={{ flex:1, height:1, background:"rgba(234,88,12,0.12)" }} />
          </div>

          <div className="asgn-form-grid">
            {/* Title */}
            <div className="asgn-form-group">
              <label className="asgn-label">Title <span className="req">*</span></label>
              <input
                className={`asgn-input${errors.title ? " error" : ""}`}
                placeholder="e.g. BST Implementation"
                value={formData.title}
                onChange={e => { setFormData({...formData, title:e.target.value}); setErrors({...errors, title:""}); }}
              />
              {errors.title && <span className="asgn-error-msg">{errors.title}</span>}
            </div>

            {/* Due Date */}
            <div className="asgn-form-group">
              <label className="asgn-label">Due Date <span className="req">*</span></label>
              <input
                type="date"
                className={`asgn-input${errors.dueDate ? " error" : ""}`}
                value={formData.dueDate}
                onChange={e => { setFormData({...formData, dueDate:e.target.value}); setErrors({...errors, dueDate:""}); }}
              />
              {errors.dueDate && <span className="asgn-error-msg">{errors.dueDate}</span>}
            </div>

            {/* Subject */}
            <div className="asgn-form-group full">
              <label className="asgn-label">Course / Subject <span className="req">*</span></label>
              <input
                className={`asgn-input${errors.subject ? " error" : ""}`}
                placeholder="e.g. CS-401"
                value={formData.subject}
                onChange={e => { setFormData({...formData, subject:e.target.value}); setErrors({...errors, subject:""}); }}
              />
              {errors.subject && <span className="asgn-error-msg">{errors.subject}</span>}
              <div className="asgn-subject-chips">
                {SUBJECTS.map(s => (
                  <button
                    key={s}
                    className={`asgn-chip${formData.subject === s ? " selected" : ""}`}
                    onClick={() => { setFormData({...formData, subject:s}); setErrors({...errors, subject:""}); }}
                  >{s}</button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="asgn-form-group full">
              <label className="asgn-label">Description <span style={{color:"#3a3838", fontWeight:400, textTransform:"none", letterSpacing:0}}>(optional)</span></label>
              <textarea
                className="asgn-textarea"
                placeholder="Brief instructions or notes for students…"
                value={formData.description}
                onChange={e => setFormData({...formData, description:e.target.value})}
              />
            </div>
          </div>

          <div className="asgn-form-footer">
            <span className="asgn-form-hint"><span>*</span> required fields</span>
            <button className="asgn-btn-add" onClick={handleAdd}>
              <span style={{fontSize:16}}>＋</span> Add Assignment
            </button>
          </div>
        </div>

        {/* ── Filter Bar ── */}
        {assignments.length > 0 && (
          <div className="asgn-filter-bar asgn-fade-up-2">
            <span className="asgn-filter-label">Filter</span>
            {allSubjects.map(s => (
              <button
                key={s}
                className={`asgn-filter-chip${filter === s ? " active" : ""}`}
                onClick={() => setFilter(s)}
              >{s}</button>
            ))}
          </div>
        )}

        {/* ── List ── */}
        <div className="asgn-list">
          {visible.length === 0 && (
            <div className="asgn-empty">
              <div className="asgn-empty-icon">📋</div>
              <div className="asgn-empty-title">No assignments yet</div>
              <div className="asgn-empty-sub">Add one above to get started</div>
            </div>
          )}

          {visible.map((a, i) => {
            const diff = getDayDiff(a.dueDate);
            return (
              <div
                key={a.id}
                className="asgn-card asgn-card-enter"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="asgn-card-left">
                  <div className="asgn-card-top">
                    <span className="asgn-card-title">{a.title}</span>
                    <span className="asgn-subject-badge">{a.subject}</span>
                  </div>
                  {a.dueDate && <DueLabel dueDate={a.dueDate} />}
                  {a.description && <p className="asgn-desc">{a.description}</p>}
                </div>

                <div className="asgn-card-actions">
                  <DueBadge dueDate={a.dueDate} />
                  <button className="asgn-btn-delete" onClick={() => handleDelete(a.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Delete Confirm Modal ── */}
      {confirmId !== null && (
        <div className="asgn-confirm-overlay" onClick={() => setConfirmId(null)}>
          <div className="asgn-confirm-box" onClick={e => e.stopPropagation()}>
            <div className="asgn-confirm-title">Delete Assignment?</div>
            <div className="asgn-confirm-sub">This action cannot be undone.</div>
            <div className="asgn-confirm-btns">
              <button className="asgn-confirm-cancel" onClick={() => setConfirmId(null)}>Cancel</button>
              <button className="asgn-confirm-delete" onClick={confirmDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}