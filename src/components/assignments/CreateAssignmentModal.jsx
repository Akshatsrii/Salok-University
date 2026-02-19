import { useState, useEffect, useRef } from "react";

const SUBJECTS = [
  "Data Structures & Algorithms — CS-401",
  "Operating Systems — CS-401",
  "Artificial Intelligence — CS-601",
  "Information Security — CS-602",
  "Mobile Application Dev — CS-603",
  "Cloud Computing — CS-701",
  "Machine Learning — CS-702",
];

const TYPES    = ["Assignment", "Lab", "Quiz", "Project"];
const STATUSES = ["active", "upcoming"];

const TYPE_COLORS = {
  Assignment: { color: "#d9943c", bg: "rgba(217,152,60,0.12)",   border: "rgba(217,152,60,0.3)" },
  Lab:        { color: "#82b4e8", bg: "rgba(130,180,232,0.1)",   border: "rgba(130,180,232,0.3)" },
  Quiz:       { color: "#7ec8a0", bg: "rgba(126,200,160,0.1)",   border: "rgba(126,200,160,0.3)" },
  Project:    { color: "#c084fc", bg: "rgba(192,132,252,0.08)",  border: "rgba(192,132,252,0.3)" },
};

const EMPTY = { title: "", subject: "", due: "", type: "Assignment", marks: "", status: "active", description: "" };

const CreateAssignmentModal = ({ isOpen, onClose, onAdd }) => {
  const [form, setForm]         = useState(EMPTY);
  const [errors, setErrors]     = useState({});
  const [submitting, setSubmit] = useState(false);
  const [done, setDone]         = useState(false);
  const firstRef                = useRef(null);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setForm(EMPTY);
      setErrors({});
      setDone(false);
      setTimeout(() => firstRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [isOpen, onClose]);

  const set = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim())   e.title   = "Title is required.";
    if (!form.subject.trim()) e.subject = "Select a subject.";
    if (!form.due)            e.due     = "Due date is required.";
    if (form.marks && isNaN(Number(form.marks))) e.marks = "Must be a number.";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmit(true);
    await new Promise((r) => setTimeout(r, 800));
    const payload = {
      ...form,
      marks: form.marks ? Number(form.marks) : 100,
      submitted: 0,
      total: 0,
    };
    onAdd?.(payload);
    setSubmit(false);
    setDone(true);
    setTimeout(() => { setDone(false); onClose(); }, 700);
  };

  if (!isOpen) return null;

  const tc = TYPE_COLORS[form.type] || TYPE_COLORS.Assignment;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Mulish:wght@300;400;500;600&display=swap');

        :root {
          --cm-bg:        #13110c;
          --cm-surface:   #1a1712;
          --cm-elevated:  #221f16;
          --cm-border:    rgba(217,152,60,0.1);
          --cm-border-hi: rgba(217,152,60,0.24);
          --cm-amber:     #d9943c;
          --cm-amber-dim: rgba(217,152,60,0.12);
          --cm-amber-hi:  #f0b05a;
          --cm-text:      #e8dfc8;
          --cm-text-dim:  rgba(232,223,200,0.5);
          --cm-text-mute: rgba(232,223,200,0.22);
          --cm-red:       rgba(217,85,60,0.9);
          --cm-green:     #4ade80;
        }

        /* ── Backdrop ── */
        .cm-backdrop {
          position: fixed; inset: 0;
          background: rgba(5,4,2,0.84);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: cm-fade 0.22s ease both;
          font-family: 'Mulish', sans-serif;
        }
        @keyframes cm-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Panel ── */
        .cm-panel {
          background: var(--cm-surface);
          border: 1px solid var(--cm-border-hi);
          border-radius: 18px;
          width: 100%;
          max-width: 500px;
          max-height: 90dvh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.7),
            0 0 0 1px rgba(217,152,60,0.06),
            inset 0 1px 0 rgba(217,152,60,0.09);
          animation: cm-spring 0.32s cubic-bezier(0.34,1.3,0.64,1) both;
        }
        @keyframes cm-spring {
          from { opacity: 0; transform: translateY(18px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Top band — type-aware color */
        .cm-band {
          height: 4px;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }

        /* Deco rings */
        .cm-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          border: 1px solid var(--cm-border);
        }
        .cm-ring-1 { top:-32px; right:-32px; width:130px; height:130px; }
        .cm-ring-2 { top:-14px; right:-14px; width:70px;  height:70px;  border-color: var(--cm-border-hi); opacity:.6; }

        /* ── Header ── */
        .cm-header {
          padding: 22px 26px 18px;
          border-bottom: 1px solid var(--cm-border);
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }
        .cm-eyebrow {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--cm-amber);
          opacity: 0.65;
          margin-bottom: 3px;
        }
        .cm-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--cm-amber-hi);
          letter-spacing: 0.02em;
          line-height: 1;
        }
        .cm-close {
          width: 30px; height: 30px;
          border-radius: 8px;
          border: 1px solid var(--cm-border);
          background: transparent;
          color: var(--cm-text-mute);
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.16s ease;
          margin-top: 2px; flex-shrink: 0;
        }
        .cm-close:hover {
          background: rgba(217,85,60,0.1);
          border-color: rgba(217,85,60,0.3);
          color: #f07060;
        }

        /* ── Body ── */
        .cm-body {
          flex: 1;
          overflow-y: auto;
          padding: 22px 26px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          scrollbar-width: thin;
          scrollbar-color: var(--cm-border-hi) transparent;
        }
        .cm-body::-webkit-scrollbar { width: 3px; }
        .cm-body::-webkit-scrollbar-thumb { background: var(--cm-border-hi); border-radius: 2px; }

        /* Section label */
        .cm-section {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: -6px;
        }
        .cm-section-diamond {
          width: 4px; height: 4px;
          background: var(--cm-amber);
          transform: rotate(45deg);
          opacity: 0.4; flex-shrink: 0;
        }
        .cm-section-text {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--cm-text-mute);
          white-space: nowrap;
        }
        .cm-section-rule {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, var(--cm-border-hi), transparent);
        }

        /* Field */
        .cm-field { display: flex; flex-direction: column; gap: 5px; }
        .cm-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--cm-text-mute);
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .cm-label-icon { color: var(--cm-amber); opacity: 0.7; }
        .cm-req { color: var(--cm-amber); opacity: 0.7; }

        /* Input / Select / Textarea */
        .cm-input, .cm-select, .cm-textarea {
          width: 100%;
          background: var(--cm-elevated);
          border: 1px solid var(--cm-border);
          border-radius: 9px;
          padding: 10px 14px;
          font-size: 13px;
          font-family: 'Mulish', sans-serif;
          font-weight: 400;
          color: var(--cm-text);
          outline: none;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }
        .cm-input::placeholder, .cm-textarea::placeholder { color: var(--cm-text-mute); }
        .cm-input:hover, .cm-select:hover, .cm-textarea:hover { border-color: var(--cm-border-hi); }
        .cm-input:focus, .cm-select:focus, .cm-textarea:focus {
          border-color: var(--cm-amber);
          background: rgba(217,152,60,0.04);
          box-shadow: 0 0 0 3px rgba(217,152,60,0.08);
        }
        .cm-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'%3E%3Cpath d='M3 4.5l3 3 3-3' stroke='%23d9943c' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 34px;
          cursor: pointer;
        }
        .cm-select option { background: #1a1712; color: #e8dfc8; }
        .cm-textarea { resize: vertical; min-height: 72px; line-height: 1.6; }

        /* Error */
        .cm-error {
          font-size: 10.5px;
          font-weight: 400;
          color: #f07060;
          letter-spacing: 0.02em;
          display: flex; align-items: center; gap: 4px;
        }
        .cm-input.has-error, .cm-select.has-error {
          border-color: rgba(217,85,60,0.5);
          box-shadow: 0 0 0 3px rgba(217,85,60,0.07);
        }

        /* Two-col row */
        .cm-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        /* Type selector chips */
        .cm-type-row {
          display: flex; gap: 7px; flex-wrap: wrap;
        }
        .cm-type-chip {
          padding: 6px 14px;
          border-radius: 7px;
          border: 1px solid var(--cm-border);
          background: transparent;
          font-family: 'Mulish', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--cm-text-mute);
          cursor: pointer;
          transition: all 0.16s ease;
        }
        .cm-type-chip:hover { border-color: var(--cm-border-hi); color: var(--cm-text-dim); }
        .cm-type-chip.selected {
          border-width: 1px;
          font-weight: 700;
        }

        /* ── Footer ── */
        .cm-footer {
          padding: 14px 26px 20px;
          border-top: 1px solid var(--cm-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }
        .cm-hint {
          font-size: 10px; font-weight: 300;
          color: var(--cm-text-mute); letter-spacing: 0.04em;
          display: flex; align-items: center; gap: 5px;
        }
        .cm-kbd {
          font-size: 9.5px; background: var(--cm-elevated);
          border: 1px solid var(--cm-border); border-radius: 4px;
          padding: 1px 5px; color: var(--cm-text-mute);
        }
        .cm-actions { display: flex; gap: 10px; }

        .cm-btn {
          display: flex; align-items: center; justify-content: center;
          gap: 7px; padding: 9px 20px; border-radius: 9px;
          font-family: 'Mulish', sans-serif; font-size: 12.5px;
          font-weight: 600; letter-spacing: 0.04em;
          cursor: pointer; transition: all 0.2s ease; border: 1px solid;
        }
        .cm-btn:active { transform: scale(0.97); }
        .cm-btn-cancel {
          background: transparent; border-color: var(--cm-border);
          color: var(--cm-text-mute);
        }
        .cm-btn-cancel:hover { border-color: var(--cm-border-hi); color: var(--cm-text-dim); }
        .cm-btn-add {
          background: var(--cm-amber-dim); border-color: var(--cm-border-hi);
          color: var(--cm-amber-hi); min-width: 130px;
        }
        .cm-btn-add:hover:not(:disabled) {
          background: rgba(217,152,60,0.2);
          box-shadow: 0 0 18px rgba(217,152,60,0.18);
        }
        .cm-btn-add:disabled { opacity: 0.65; cursor: not-allowed; }

        .cm-spinner {
          width: 13px; height: 13px;
          border: 1.5px solid rgba(217,152,60,0.3);
          border-top-color: var(--cm-amber-hi);
          border-radius: 50%;
          animation: cm-spin 0.7s linear infinite; flex-shrink: 0;
        }
        @keyframes cm-spin { to { transform: rotate(360deg); } }

        .cm-check {
          width: 13px; height: 13px; color: var(--cm-green);
          animation: cm-pop 0.3s cubic-bezier(0.34,1.56,0.64,1) both; flex-shrink: 0;
        }
        @keyframes cm-pop { from { transform: scale(0); } to { transform: scale(1); } }
      `}</style>

      <div
        className="cm-backdrop"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
        aria-label="Create Assignment"
      >
        <div className="cm-panel">
          {/* Type-aware band */}
          <div
            className="cm-band"
            style={{ background: `linear-gradient(90deg, ${tc.border}, ${tc.color} 40%, ${tc.color} 65%, ${tc.border})` }}
          />

          {/* Deco rings */}
          <div className="cm-ring cm-ring-1" />
          <div className="cm-ring cm-ring-2" />

          {/* Header */}
          <div className="cm-header">
            <div>
              <div className="cm-eyebrow">Faculty Portal</div>
              <div className="cm-title">Create Assignment</div>
            </div>
            <button className="cm-close" onClick={onClose} aria-label="Close">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="cm-body">

            {/* — Section: Type — */}
            <div>
              <div className="cm-section" style={{ marginBottom: 10 }}>
                <div className="cm-section-diamond" />
                <span className="cm-section-text">Assignment Type</span>
                <div className="cm-section-rule" />
              </div>
              <div className="cm-type-row">
                {TYPES.map((t) => {
                  const c = TYPE_COLORS[t];
                  const sel = form.type === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      className={`cm-type-chip${sel ? " selected" : ""}`}
                      style={sel ? { color: c.color, background: c.bg, borderColor: c.border } : {}}
                      onClick={() => set("type", t)}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* — Section: Details — */}
            <div>
              <div className="cm-section" style={{ marginBottom: 12 }}>
                <div className="cm-section-diamond" />
                <span className="cm-section-text">Details</span>
                <div className="cm-section-rule" />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Title */}
                <div className="cm-field">
                  <label className="cm-label">
                    <span className="cm-label-icon">
                      <svg viewBox="0 0 13 13" fill="none" width="12" height="12">
                        <rect x="1.5" y="1.5" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M4 5h5M4 7.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    Title <span className="cm-req">*</span>
                  </label>
                  <input
                    ref={firstRef}
                    className={`cm-input${errors.title ? " has-error" : ""}`}
                    placeholder="e.g. Lab Report 3 — Sorting Algorithms"
                    value={form.title}
                    onChange={(e) => set("title", e.target.value)}
                  />
                  {errors.title && <span className="cm-error">⚠ {errors.title}</span>}
                </div>

                {/* Subject */}
                <div className="cm-field">
                  <label className="cm-label">
                    <span className="cm-label-icon">
                      <svg viewBox="0 0 13 13" fill="none" width="12" height="12">
                        <path d="M6.5 1L1 4l5.5 3L12 4 6.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                        <path d="M1 4v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        <path d="M3.5 5.5V9c0 .83 1.34 1.5 3 1.5s3-.67 3-1.5V5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </span>
                    Subject <span className="cm-req">*</span>
                  </label>
                  <select
                    className={`cm-select${errors.subject ? " has-error" : ""}`}
                    value={form.subject}
                    onChange={(e) => set("subject", e.target.value)}
                  >
                    <option value="">— Select a subject —</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.subject && <span className="cm-error">⚠ {errors.subject}</span>}
                </div>

                {/* Due date + Marks */}
                <div className="cm-row-2">
                  <div className="cm-field">
                    <label className="cm-label">
                      <span className="cm-label-icon">
                        <svg viewBox="0 0 13 13" fill="none" width="12" height="12">
                          <rect x="1" y="2" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                          <path d="M4 1v2M9 1v2M1 5.5h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      Due Date <span className="cm-req">*</span>
                    </label>
                    <input
                      type="date"
                      className={`cm-input${errors.due ? " has-error" : ""}`}
                      value={form.due}
                      onChange={(e) => set("due", e.target.value)}
                      style={{ colorScheme: "dark" }}
                    />
                    {errors.due && <span className="cm-error">⚠ {errors.due}</span>}
                  </div>

                  <div className="cm-field">
                    <label className="cm-label">
                      <span className="cm-label-icon">
                        <svg viewBox="0 0 13 13" fill="none" width="12" height="12">
                          <path d="M6.5 1l1.17 2.36L10.5 4l-2 1.95.47 2.76L6.5 7.36 4.03 8.71 4.5 5.95 2.5 4l2.83-.64L6.5 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      Total Marks
                    </label>
                    <input
                      type="number"
                      className={`cm-input${errors.marks ? " has-error" : ""}`}
                      placeholder="100"
                      value={form.marks}
                      onChange={(e) => set("marks", e.target.value)}
                      min="0"
                    />
                    {errors.marks && <span className="cm-error">⚠ {errors.marks}</span>}
                  </div>
                </div>

                {/* Status */}
                <div className="cm-field">
                  <label className="cm-label">
                    <span className="cm-label-icon">
                      <svg viewBox="0 0 13 13" fill="none" width="12" height="12">
                        <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="6.5" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.2"/>
                      </svg>
                    </span>
                    Status
                  </label>
                  <select
                    className="cm-select"
                    value={form.status}
                    onChange={(e) => set("status", e.target.value)}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* — Section: Description — */}
            <div>
              <div className="cm-section" style={{ marginBottom: 12 }}>
                <div className="cm-section-diamond" />
                <span className="cm-section-text">Description</span>
                <div className="cm-section-rule" />
              </div>
              <div className="cm-field">
                <label className="cm-label">
                  <span className="cm-label-icon">
                    <svg viewBox="0 0 13 13" fill="none" width="12" height="12">
                      <rect x="1.5" y="1.5" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M4 5h5M4 7h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </span>
                  Instructions (optional)
                </label>
                <textarea
                  className="cm-textarea"
                  placeholder="Describe the assignment requirements, submission format, or any additional notes…"
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                />
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="cm-footer">
            <span className="cm-hint">
              <span className="cm-kbd">Esc</span> to close
            </span>
            <div className="cm-actions">
              <button className="cm-btn cm-btn-cancel" onClick={onClose}>Discard</button>
              <button
                className="cm-btn cm-btn-add"
                onClick={handleSubmit}
                disabled={submitting || done}
              >
                {submitting && <span className="cm-spinner" />}
                {done && (
                  <svg className="cm-check" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {submitting ? "Creating…" : done ? "Created!" : "Create Assignment"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAssignmentModal;