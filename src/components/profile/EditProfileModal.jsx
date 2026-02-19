import { useState, useEffect, useRef } from "react";

const FIELDS = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Dr. Riya Sharma",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "degree",
    label: "Degree",
    type: "text",
    placeholder: "Ph.D in Computer Science",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <path d="M7 1L1 4.5l6 3.5 6-3.5L7 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M1 4.5V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M4 6V10c0 1.1 1.34 2 3 2s3-.9 3-2V6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "post",
    label: "Designation",
    type: "text",
    placeholder: "Associate Professor",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 3V2a2 2 0 0 1 4 0v1" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1 7h12" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    name: "department",
    label: "Department",
    type: "text",
    placeholder: "Computer Engineering",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <path d="M2 12V5.5l5-3.5 5 3.5V12" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <rect x="4.5" y="8" width="5" height="4" rx="0.8" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    name: "experience",
    label: "Experience",
    type: "text",
    placeholder: "8 Years",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7 4v3.5l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "riya@salokuniversity.edu",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+91 9876543210",
    icon: (
      <svg viewBox="0 0 14 14" fill="none" width="13" height="13">
        <path d="M4.5 1.5h5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="7" cy="10.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
];

// Group fields into sections
const SECTIONS = [
  { title: "Identity", fields: ["name", "degree", "post"] },
  { title: "Affiliation", fields: ["department", "experience"] },
  { title: "Contact", fields: ["email", "phone"] },
];

const EditProfileModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "Dr. Riya Sharma",
    degree: "Ph.D in Computer Science",
    post: "Associate Professor",
    department: "Computer Engineering",
    experience: "8 Years",
    email: "riya@salokuniversity.edu",
    phone: "+91 9876543210",
  });

  const [focused, setFocused] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const firstInputRef = useRef(null);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Focus first input on open
  useEffect(() => {
    if (isOpen) {
      setSaved(false);
      setTimeout(() => firstInputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 900)); // simulate API call
    setSaving(false);
    setSaved(true);
    setTimeout(() => { setSaved(false); onClose(); }, 800);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Mulish:wght@300;400;500;600&display=swap');

        :root {
          --m-bg:        #13110c;
          --m-surface:   #1a1712;
          --m-elevated:  #221f16;
          --m-border:    rgba(217,152,60,0.1);
          --m-border-hi: rgba(217,152,60,0.22);
          --m-amber:     #d9943c;
          --m-amber-dim: rgba(217,152,60,0.12);
          --m-amber-hi:  #f0b05a;
          --m-text:      #e8dfc8;
          --m-text-dim:  rgba(232,223,200,0.48);
          --m-text-mute: rgba(232,223,200,0.22);
          --m-green:     #4ade80;
        }

        /* ── Backdrop ── */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5,4,2,0.82);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: backdrop-in 0.25s ease both;
        }
        @keyframes backdrop-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* ── Modal panel ── */
        .modal-panel {
          font-family: 'Mulish', sans-serif;
          background: var(--m-surface);
          border: 1px solid var(--m-border-hi);
          border-radius: 18px;
          width: 100%;
          max-width: 520px;
          max-height: 90dvh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow:
            0 32px 80px rgba(0,0,0,0.7),
            0 0 0 1px rgba(217,152,60,0.06),
            inset 0 1px 0 rgba(217,152,60,0.08);
          animation: modal-in 0.32s cubic-bezier(0.34,1.3,0.64,1) both;
          position: relative;
        }
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Top amber band */
        .modal-band {
          height: 4px;
          background: linear-gradient(90deg, #8b4a10, var(--m-amber) 40%, var(--m-amber-hi) 65%, #8b4a10);
          flex-shrink: 0;
        }

        /* Corner deco rings */
        .modal-ring {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          border: 1px solid var(--m-border);
        }
        .modal-ring-1 { top: -30px; right: -30px; width: 120px; height: 120px; }
        .modal-ring-2 { top: -14px; right: -14px; width: 65px; height: 65px; border-color: var(--m-border-hi); opacity: 0.6; }

        /* ── Header ── */
        .modal-header {
          padding: 22px 26px 18px;
          border-bottom: 1px solid var(--m-border);
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
          z-index: 1;
        }

        .modal-header-left {}
        .modal-eyebrow {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--m-amber);
          opacity: 0.65;
          margin-bottom: 3px;
        }
        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--m-amber-hi);
          letter-spacing: 0.02em;
          line-height: 1;
        }

        /* Close button */
        .modal-close {
          width: 30px; height: 30px;
          border-radius: 8px;
          border: 1px solid var(--m-border);
          background: transparent;
          color: var(--m-text-mute);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.18s ease;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .modal-close:hover {
          background: rgba(217,85,60,0.1);
          border-color: rgba(217,85,60,0.3);
          color: #f07060;
        }

        /* ── Scrollable body ── */
        .modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 22px 26px;
          scrollbar-width: thin;
          scrollbar-color: var(--m-border-hi) transparent;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .modal-body::-webkit-scrollbar { width: 3px; }
        .modal-body::-webkit-scrollbar-thumb { background: var(--m-border-hi); border-radius: 2px; }

        /* ── Section ── */
        .modal-section {}
        .modal-section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        .modal-section-text {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--m-text-mute);
          white-space: nowrap;
        }
        .modal-section-rule {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--m-border-hi), transparent);
        }
        .modal-section-diamond {
          width: 4px; height: 4px;
          background: var(--m-amber);
          transform: rotate(45deg);
          opacity: 0.4;
          flex-shrink: 0;
        }

        .modal-fields {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* ── Field ── */
        .modal-field {}
        .modal-field-label {
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--m-text-mute);
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .modal-field-label-icon {
          color: var(--m-amber);
          opacity: 0.7;
        }

        .modal-input-wrap {
          position: relative;
        }
        .modal-input {
          width: 100%;
          background: var(--m-elevated);
          border: 1px solid var(--m-border);
          border-radius: 9px;
          padding: 10px 14px;
          font-size: 13px;
          font-family: 'Mulish', sans-serif;
          font-weight: 400;
          color: var(--m-text);
          outline: none;
          transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
        }
        .modal-input::placeholder { color: var(--m-text-mute); }
        .modal-input:hover { border-color: var(--m-border-hi); }
        .modal-input:focus {
          border-color: var(--m-amber);
          background: rgba(217,152,60,0.04);
          box-shadow: 0 0 0 3px rgba(217,152,60,0.08);
        }

        /* ── Footer ── */
        .modal-footer {
          padding: 16px 26px 20px;
          border-top: 1px solid var(--m-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          background: var(--m-surface);
        }

        .modal-footer-hint {
          font-size: 10.5px;
          font-weight: 300;
          color: var(--m-text-mute);
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .modal-kbd {
          font-size: 9.5px;
          background: var(--m-elevated);
          border: 1px solid var(--m-border);
          border-radius: 4px;
          padding: 1px 5px;
          color: var(--m-text-mute);
        }

        .modal-footer-actions {
          display: flex;
          gap: 10px;
        }

        .modal-btn {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 20px;
          border-radius: 9px;
          font-family: 'Mulish', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid;
        }
        .modal-btn:active { transform: scale(0.97); }

        .modal-btn-cancel {
          background: transparent;
          border-color: var(--m-border);
          color: var(--m-text-mute);
        }
        .modal-btn-cancel:hover {
          border-color: var(--m-border-hi);
          color: var(--m-text-dim);
          background: rgba(255,255,255,0.02);
        }

        .modal-btn-save {
          background: var(--m-amber-dim);
          border-color: var(--m-border-hi);
          color: var(--m-amber-hi);
          min-width: 120px;
          justify-content: center;
        }
        .modal-btn-save:hover:not(:disabled) {
          background: rgba(217,152,60,0.2);
          box-shadow: 0 0 18px rgba(217,152,60,0.18);
        }
        .modal-btn-save:disabled { opacity: 0.7; cursor: not-allowed; }

        /* Spinner */
        .modal-spinner {
          width: 13px; height: 13px;
          border: 1.5px solid rgba(217,152,60,0.3);
          border-top-color: var(--m-amber-hi);
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Saved checkmark */
        .modal-check {
          width: 13px; height: 13px;
          color: var(--m-green);
          animation: check-pop 0.3s cubic-bezier(0.34,1.56,0.64,1) both;
          flex-shrink: 0;
        }
        @keyframes check-pop {
          from { transform: scale(0); }
          to   { transform: scale(1); }
        }
      `}</style>

      <div
        className="modal-backdrop"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
        aria-label="Edit Profile"
      >
        <div className="modal-panel">
          {/* Amber band */}
          <div className="modal-band" />

          {/* Decorative rings */}
          <div className="modal-ring modal-ring-1" />
          <div className="modal-ring modal-ring-2" />

          {/* Header */}
          <div className="modal-header">
            <div className="modal-header-left">
              <div className="modal-eyebrow">Faculty Portal</div>
              <div className="modal-title">Edit Profile</div>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Scrollable body */}
          <div className="modal-body">
            {SECTIONS.map((section, si) => (
              <div key={section.title} className="modal-section">
                {/* Section label */}
                <div className="modal-section-label">
                  <div className="modal-section-diamond" />
                  <span className="modal-section-text">{section.title}</span>
                  <div className="modal-section-rule" />
                </div>

                <div className="modal-fields">
                  {section.fields.map((fieldName, fi) => {
                    const field = FIELDS.find((f) => f.name === fieldName);
                    if (!field) return null;
                    const isFirst = si === 0 && fi === 0;
                    return (
                      <div key={field.name} className="modal-field">
                        <label className="modal-field-label">
                          <span className="modal-field-label-icon">{field.icon}</span>
                          {field.label}
                        </label>
                        <div className="modal-input-wrap">
                          <input
                            ref={isFirst ? firstInputRef : null}
                            type={field.type}
                            name={field.name}
                            value={formData[field.name]}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            onFocus={() => setFocused(field.name)}
                            onBlur={() => setFocused(null)}
                            className="modal-input"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="modal-footer">
            <span className="modal-footer-hint">
              <span className="modal-kbd">Esc</span> to close
            </span>
            <div className="modal-footer-actions">
              <button className="modal-btn modal-btn-cancel" onClick={onClose}>
                Discard
              </button>
              <button
                className="modal-btn modal-btn-save"
                onClick={handleSave}
                disabled={saving || saved}
              >
                {saving && <span className="modal-spinner" />}
                {saved && (
                  <svg className="modal-check" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {saving ? "Saving…" : saved ? "Saved!" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;