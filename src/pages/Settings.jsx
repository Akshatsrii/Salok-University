import { useState, useRef } from "react";

// ── Toggle Switch ─────────────────────────────────────────────────
const Toggle = ({ checked, onChange }) => (
  <>
    <style>{`
      .tgl-track {
        width: 42px; height: 24px;
        background: ${checked ? "linear-gradient(135deg,#c2410c,#ea580c)" : "#111"};
        border: 1px solid ${checked ? "rgba(234,88,12,0.5)" : "#1e1e1e"};
        border-radius: 99px; position: relative; cursor: pointer;
        transition: background 0.25s ease, border-color 0.25s ease;
        flex-shrink: 0;
        box-shadow: ${checked ? "0 0 14px rgba(234,88,12,0.3)" : "none"};
      }
      .tgl-thumb {
        width: 18px; height: 18px; border-radius: 50%;
        background: #fff;
        position: absolute; top: 2px;
        left: ${checked ? "20px" : "2px"};
        transition: left 0.25s cubic-bezier(0.22,1,0.36,1);
        box-shadow: 0 2px 6px rgba(0,0,0,0.5);
      }
    `}</style>
    <div className="tgl-track" onClick={onChange} role="switch" aria-checked={checked}>
      <div className="tgl-thumb" />
    </div>
  </>
);

// ── Select ────────────────────────────────────────────────────────
const Select = ({ value, onChange, options }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{
      background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: "10px",
      color: "#bbb", fontSize: "13px", padding: "8px 12px",
      fontFamily: "'DM Sans', sans-serif", cursor: "pointer", outline: "none",
      appearance: "none", minWidth: "140px",
      transition: "border-color 0.2s",
    }}
  >
    {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
  </select>
);

// ── Range Slider ──────────────────────────────────────────────────
const Slider = ({ value, onChange, min = 0, max = 100 }) => {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <>
      <style>{`
        .sld input[type=range] {
          -webkit-appearance: none; appearance: none;
          width: 100%; height: 4px; border-radius: 99px;
          background: linear-gradient(to right, #ea580c ${pct}%, #1a1a1a ${pct}%);
          outline: none; cursor: pointer;
        }
        .sld input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 16px; height: 16px; border-radius: 50%;
          background: #ea580c; box-shadow: 0 0 10px rgba(234,88,12,0.5);
          border: 2px solid #fff; cursor: pointer;
          transition: transform 0.15s ease;
        }
        .sld input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.25); }
      `}</style>
      <div className="sld" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <input type="range" min={min} max={max} value={value}
          onChange={(e) => onChange(Number(e.target.value))} />
        <span style={{
          color: "#ea580c", fontFamily: "'Playfair Display', serif",
          fontSize: "15px", fontWeight: 700, minWidth: "36px", textAlign: "right",
        }}>{value}</span>
      </div>
    </>
  );
};

// ── Section wrapper ───────────────────────────────────────────────
const Section = ({ title, description, children, index }) => (
  <div style={{
    animation: `sectIn 0.4s cubic-bezier(0.22,1,0.36,1) both`,
    animationDelay: `${index * 80}ms`,
    background: "#0d0d0d",
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "18px", padding: "28px", marginBottom: "14px",
    position: "relative", overflow: "hidden",
  }}>
    {/* top accent line */}
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: "1px",
      background: "linear-gradient(to right, transparent, rgba(234,88,12,0.35), transparent)",
    }} />
    <div style={{ marginBottom: "20px" }}>
      <div style={{
        fontFamily: "'Playfair Display', serif", fontSize: "17px",
        fontWeight: 700, color: "#ffffff", letterSpacing: "-0.2px",
      }}>{title}</div>
      {description && <div style={{
        fontSize: "12px", color: "#3a3838", marginTop: "4px", letterSpacing: "0.3px",
      }}>{description}</div>}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      {children}
    </div>
  </div>
);

// ── Row ───────────────────────────────────────────────────────────
const Row = ({ label, hint, children }) => (
  <div style={{
    display: "flex", alignItems: "center",
    justifyContent: "space-between", gap: "16px", flexWrap: "wrap",
  }}>
    <div>
      <div style={{ fontSize: "14px", color: "#888", fontWeight: 500, letterSpacing: "0.1px" }}>{label}</div>
      {hint && <div style={{ fontSize: "11px", color: "#303030", marginTop: "2px", letterSpacing: "0.3px" }}>{hint}</div>}
    </div>
    <div>{children}</div>
  </div>
);

// ── Divider ───────────────────────────────────────────────────────
const Divider = () => (
  <div style={{
    height: "1px",
    background: "linear-gradient(to right, rgba(234,88,12,0.08), rgba(255,255,255,0.04), transparent)",
  }} />
);

// ── Nav ───────────────────────────────────────────────────────────
const NAV = [
  { id: "appearance",    label: "Appearance",    icon: "🎨" },
  { id: "notifications", label: "Notifications", icon: "🔔" },
  { id: "privacy",       label: "Privacy",       icon: "🔒" },
  { id: "account",       label: "Account",       icon: "⚙️" },
];

// ── Danger Button ─────────────────────────────────────────────────
const DangerBtn = ({ children, onClick }) => (
  <button onClick={onClick} style={{
    background: "rgba(239,68,68,0.07)", border: "1px solid rgba(239,68,68,0.2)",
    borderRadius: "10px", color: "#ef4444", fontSize: "12px",
    padding: "8px 16px", cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.3px", fontWeight: 600,
    transition: "background 0.2s",
  }}
    onMouseEnter={e => e.currentTarget.style.background = "rgba(239,68,68,0.14)"}
    onMouseLeave={e => e.currentTarget.style.background = "rgba(239,68,68,0.07)"}
  >{children}</button>
);

// ── Ghost Button ──────────────────────────────────────────────────
const GhostBtn = ({ children, onClick }) => (
  <button onClick={onClick} style={{
    background: "#0a0a0a", border: "1px solid #1e1e1e",
    borderRadius: "10px", color: "#666", fontSize: "12px",
    padding: "8px 16px", cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.3px",
    transition: "all 0.2s",
  }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(234,88,12,0.3)"; e.currentTarget.style.color = "#ea580c"; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.color = "#666"; }}
  >{children}</button>
);

// ════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════
const Settings = () => {
  const [activeNav, setActiveNav] = useState("appearance");
  const [toast, setToast] = useState(null); // { msg, type }

  // Appearance
  const [theme,    setTheme]    = useState("dark");
  const [fontSize, setFontSize] = useState(14);
  const [density,  setDensity]  = useState("comfortable");

  // Notifications
  const [emailNotif,  setEmailNotif]  = useState(true);
  const [pushNotif,   setPushNotif]   = useState(true);
  const [assignAlert, setAssignAlert] = useState(true);
  const [gradeAlert,  setGradeAlert]  = useState(false);
  const [digestFreq,  setDigestFreq]  = useState("daily");

  // Privacy
  const [showProfile,  setShowProfile]  = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const [dataShare,    setDataShare]    = useState(false);
  const [twoFA,        setTwoFA]        = useState(false);

  // Password
  const [currentPw, setCurrentPw] = useState("");
  const [newPw,     setNewPw]     = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  // ── Helpers ──────────────────────────────────
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2400);
  };

  const handleSave = () => {
    if (activeNav === "account") {
      if (newPw && newPw !== confirmPw) { showToast("Passwords don't match", "error"); return; }
      if (newPw && newPw.length < 6)    { showToast("Password too short (min 6)", "error"); return; }
    }
    showToast("Settings saved successfully");
  };

  const handleDeleteAccount = () => {
    if (window.confirm("Are you sure? This cannot be undone.")) {
      showToast("Account deletion requested", "error");
    }
  };

  const toastColors = {
    success: { bg: "#0d0d0d", border: "rgba(234,88,12,0.35)", icon: "✓", iconColor: "#ea580c" },
    error:   { bg: "#0d0d0d", border: "rgba(239,68,68,0.35)", icon: "✕", iconColor: "#ef4444" },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

        @keyframes sectIn {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes toastIn {
          0%   { opacity:0; transform:translateY(12px) scale(0.95); }
          12%  { opacity:1; transform:translateY(0) scale(1); }
          80%  { opacity:1; }
          100% { opacity:0; }
        }

        .st-root { font-family:'DM Sans',sans-serif; background:#000; min-height:100vh; color:#f0ece8; }

        .st-nav-btn {
          display:flex; align-items:center; gap:10px;
          width:100%; background:none; border:none;
          border-radius:12px; padding:11px 14px;
          font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500;
          cursor:pointer; text-align:left; letter-spacing:0.2px;
          transition: background 0.2s, color 0.2s;
        }
        .st-nav-btn.active {
          background: rgba(234,88,12,0.1);
          color: #ea580c;
          box-shadow: inset 3px 0 0 #ea580c;
        }
        .st-nav-btn.inactive { color:#3a3838; }
        .st-nav-btn.inactive:hover { background:rgba(255,255,255,0.03); color:#777; }

        .st-input {
          width:100%; background:#080808; border:1px solid #1a1a1a;
          border-radius:10px; color:#ccc; font-size:13px;
          padding:9px 13px; font-family:'DM Sans',sans-serif;
          outline:none; transition:border-color 0.2s, box-shadow 0.2s;
          box-sizing:border-box;
        }
        .st-input:focus {
          border-color: rgba(234,88,12,0.45);
          box-shadow: 0 0 0 3px rgba(234,88,12,0.07);
        }
        .st-input::placeholder { color:#2a2a2a; }

        .st-save-btn {
          background: linear-gradient(135deg,#c2410c,#ea580c);
          border:none; border-radius:12px;
          color:#fff; font-family:'DM Sans',sans-serif;
          font-size:13px; font-weight:700;
          padding:11px 32px; cursor:pointer; letter-spacing:0.3px;
          box-shadow: 0 4px 20px rgba(234,88,12,0.25);
          transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
        }
        .st-save-btn:hover {
          transform:translateY(-1px);
          box-shadow:0 8px 30px rgba(234,88,12,0.35);
          opacity:0.92;
        }
        .st-save-btn:active { transform:translateY(0); }

        .st-toast {
          position:fixed; bottom:28px; right:28px; z-index:999;
          border-radius:13px; padding:13px 20px;
          display:flex; align-items:center; gap:10px;
          font-size:13px; font-family:'DM Sans',sans-serif;
          box-shadow:0 16px 48px rgba(0,0,0,0.7);
          animation:toastIn 2.4s ease both;
          pointer-events:none;
        }

        .theme-chip {
          background: #0a0a0a;
          border-radius:10px; font-size:12px; padding:7px 16px; cursor:pointer;
          font-family:'DM Sans',sans-serif; font-weight:500;
          text-transform:capitalize; letter-spacing:0.3px;
          transition:all 0.2s;
        }
      `}</style>

      {/* Toast */}
      {toast && (() => {
        const tc = toastColors[toast.type] || toastColors.success;
        return (
          <div className="st-toast" style={{
            background: tc.bg,
            border: `1px solid ${tc.border}`,
            color: "#bbb",
          }}>
            <span style={{ fontSize: "16px", color: tc.iconColor, fontWeight: 700 }}>{tc.icon}</span>
            {toast.msg}
          </div>
        );
      })()}

      <div className="st-root">
        {/* Page header */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{
            fontFamily: "'Playfair Display', serif", fontSize: "30px",
            fontWeight: 700, color: "#ffffff", letterSpacing: "-0.5px", lineHeight: 1.1,
          }}>
            Settings
          </div>
          <div style={{ fontSize: "13px", color: "#3a3838", marginTop: "6px", letterSpacing: "0.3px" }}>
            Manage your account preferences and configurations
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* ── Sidebar nav ── */}
          <div style={{
            width: "178px", flexShrink: 0,
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "18px", padding: "10px",
            position: "sticky", top: "20px",
          }}>
            {NAV.map((n) => (
              <button
                key={n.id}
                className={`st-nav-btn ${activeNav === n.id ? "active" : "inactive"}`}
                onClick={() => setActiveNav(n.id)}
              >
                <span style={{ fontSize: "15px" }}>{n.icon}</span>
                {n.label}
              </button>
            ))}
          </div>

          {/* ── Panel ── */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {/* ══ APPEARANCE ══ */}
            {activeNav === "appearance" && (
              <>
                <Section title="Theme" description="Choose your preferred color scheme" index={0}>
                  <Row label="Color Mode">
                    <div style={{ display: "flex", gap: "8px" }}>
                      {["dark", "light", "system"].map((t) => (
                        <button key={t} onClick={() => setTheme(t)}
                          className="theme-chip"
                          style={{
                            background: theme === t ? "rgba(234,88,12,0.12)" : "#0a0a0a",
                            border: `1px solid ${theme === t ? "rgba(234,88,12,0.4)" : "#1a1a1a"}`,
                            color: theme === t ? "#ea580c" : "#444",
                          }}>{t}</button>
                      ))}
                    </div>
                  </Row>
                </Section>

                <Section title="Typography & Layout" index={1}>
                  <Row label="Font Size" hint={`Currently ${fontSize}px`}>
                    <div style={{ width: "200px" }}>
                      <Slider value={fontSize} onChange={setFontSize} min={12} max={20} />
                    </div>
                  </Row>
                  <Divider />
                  <Row label="Layout Density">
                    <Select value={density} onChange={setDensity} options={[
                      { value: "compact",     label: "Compact"     },
                      { value: "comfortable", label: "Comfortable" },
                      { value: "spacious",    label: "Spacious"    },
                    ]} />
                  </Row>
                </Section>

                {/* Live font preview */}
                <Section title="Font Preview" description="See how text looks at your chosen size" index={2}>
                  <div style={{
                    background: "rgba(255,255,255,0.02)", borderRadius: "12px",
                    padding: "18px 20px", border: "1px solid rgba(255,255,255,0.04)",
                    fontSize: `${fontSize}px`, color: "#888", lineHeight: 1.6,
                    fontFamily: "'DM Sans',sans-serif", transition: "font-size 0.2s",
                  }}>
                    The quick brown fox jumps over the lazy dog.
                    <span style={{ color: "#ea580c" }}> AaBbCc 0123</span>
                  </div>
                </Section>
              </>
            )}

            {/* ══ NOTIFICATIONS ══ */}
            {activeNav === "notifications" && (
              <>
                <Section title="Channels"
                  description="Choose how you receive notifications" index={0}>
                  <Row label="Email Notifications" hint="Get updates in your inbox">
                    <Toggle checked={emailNotif} onChange={() => setEmailNotif(v => !v)} />
                  </Row>
                  <Divider />
                  <Row label="Push Notifications" hint="Browser or mobile alerts">
                    <Toggle checked={pushNotif} onChange={() => setPushNotif(v => !v)} />
                  </Row>
                </Section>

                <Section title="Triggers"
                  description="Select which events notify you" index={1}>
                  <Row label="Assignment Deadlines">
                    <Toggle checked={assignAlert} onChange={() => setAssignAlert(v => !v)} />
                  </Row>
                  <Divider />
                  <Row label="Grade Updates">
                    <Toggle checked={gradeAlert} onChange={() => setGradeAlert(v => !v)} />
                  </Row>
                  <Divider />
                  <Row label="Digest Frequency" hint="Summary email cadence">
                    <Select value={digestFreq} onChange={setDigestFreq} options={[
                      { value: "realtime", label: "Real-time" },
                      { value: "daily",    label: "Daily"     },
                      { value: "weekly",   label: "Weekly"    },
                      { value: "never",    label: "Never"     },
                    ]} />
                  </Row>
                </Section>

                {/* Active summary */}
                <Section title="Active Alerts" description="Your current notification setup" index={2}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {[
                      { label: "Email",       on: emailNotif  },
                      { label: "Push",        on: pushNotif   },
                      { label: "Assignments", on: assignAlert },
                      { label: "Grades",      on: gradeAlert  },
                    ].map(({ label, on }) => (
                      <span key={label} style={{
                        fontSize: "11px", fontFamily: "'DM Mono',monospace",
                        padding: "4px 12px", borderRadius: "20px",
                        background: on ? "rgba(234,88,12,0.1)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${on ? "rgba(234,88,12,0.28)" : "rgba(255,255,255,0.05)"}`,
                        color: on ? "#ea580c" : "#333",
                      }}>{label}: {on ? "On" : "Off"}</span>
                    ))}
                  </div>
                </Section>
              </>
            )}

            {/* ══ PRIVACY ══ */}
            {activeNav === "privacy" && (
              <>
                <Section title="Visibility"
                  description="Control what others can see about you" index={0}>
                  <Row label="Public Profile" hint="Show your profile to other students">
                    <Toggle checked={showProfile} onChange={() => setShowProfile(v => !v)} />
                  </Row>
                  <Divider />
                  <Row label="Activity Status" hint="Let others see when you're online">
                    <Toggle checked={showActivity} onChange={() => setShowActivity(v => !v)} />
                  </Row>
                </Section>

                <Section title="Security" index={1}>
                  <Row label="Two-Factor Authentication" hint="Add an extra layer of login security">
                    <Toggle checked={twoFA} onChange={() => setTwoFA(v => !v)} />
                  </Row>
                  <Divider />
                  <Row label="Analytics Data Sharing" hint="Help improve the platform anonymously">
                    <Toggle checked={dataShare} onChange={() => setDataShare(v => !v)} />
                  </Row>
                </Section>

                {/* Security score */}
                <Section title="Security Score" description="Based on your current settings" index={2}>
                  {(() => {
                    const score = [twoFA, !dataShare, showProfile].filter(Boolean).length;
                    const pct = Math.round((score / 3) * 100);
                    const color = pct >= 67 ? "#ea580c" : pct >= 34 ? "#f97316" : "#ef4444";
                    return (
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                          <span style={{ fontSize: "13px", color: "#666" }}>Score</span>
                          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "15px", fontWeight: 700, color }}>{pct}%</span>
                        </div>
                        <div style={{ height: "6px", background: "#111", borderRadius: "99px", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg,#7c2d12,${color})`, borderRadius: "99px", transition: "width 0.5s" }} />
                        </div>
                        <div style={{ fontSize: "11px", color: "#2e2e2e", marginTop: "8px" }}>
                          {pct < 67 ? "Enable 2FA to improve your score" : "Good security posture ✓"}
                        </div>
                      </div>
                    );
                  })()}
                </Section>
              </>
            )}

            {/* ══ ACCOUNT ══ */}
            {activeNav === "account" && (
              <>
                <Section title="Change Password" description="Update your login credentials" index={0}>
                  <Row label="Current Password">
                    <input className="st-input" type="password" style={{ width: "220px" }}
                      placeholder="••••••••" value={currentPw}
                      onChange={e => setCurrentPw(e.target.value)} />
                  </Row>
                  <Divider />
                  <Row label="New Password">
                    <input className="st-input" type="password" style={{ width: "220px" }}
                      placeholder="Min 6 characters" value={newPw}
                      onChange={e => setNewPw(e.target.value)} />
                  </Row>
                  <Divider />
                  <Row label="Confirm Password">
                    <input className="st-input" type="password"
                      placeholder="••••••••" value={confirmPw}
                      onChange={e => setConfirmPw(e.target.value)}
                      style={{
                        width: "220px",
                        background: "#080808",
                        border: `1px solid ${confirmPw && confirmPw !== newPw ? "rgba(239,68,68,0.45)" : "#1a1a1a"}`,
                        borderRadius: "10px", color: "#ccc", fontSize: "13px",
                        padding: "9px 13px", fontFamily: "'DM Sans',sans-serif",
                        outline: "none", boxSizing: "border-box",
                      }} />
                  </Row>
                  {confirmPw && confirmPw !== newPw && (
                    <div style={{ fontSize: "11px", color: "#ef4444", fontFamily: "'DM Mono',monospace" }}>
                      Passwords do not match
                    </div>
                  )}
                </Section>

                <Section title="Danger Zone"
                  description="Irreversible actions — proceed with caution" index={1}>
                  <Row label="Export My Data" hint="Download a copy of all your data">
                    <GhostBtn onClick={() => showToast("Export started — check your email")}>Export</GhostBtn>
                  </Row>
                  <Divider />
                  <Row label="Delete Account" hint="Permanently remove your account and data">
                    <DangerBtn onClick={handleDeleteAccount}>Delete Account</DangerBtn>
                  </Row>
                </Section>
              </>
            )}

            {/* ── Save button ── */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
              <button className="st-save-btn" onClick={handleSave}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;