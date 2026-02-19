import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

// ── SVG Icons ─────────────────────────────────────────────────────
const Icon = ({ d, size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d)
      ? d.map((p, i) => <path key={i} d={p} />)
      : <path d={d} />}
  </svg>
);

const icons = {
  dashboard: [
    "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    "M9 22V12h6v10",
  ],
  students: ["M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M23 21v-2a4 4 0 0 0-3-3.87", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M16 3.13a4 4 0 0 1 0 7.75"],
  assignments: ["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z", "M14 2v6h6", "M16 13H8", "M16 17H8", "M10 9H8"],
  calendar:   ["M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"],
  classes:    ["M4 19.5A2.5 2.5 0 0 1 6.5 17H20", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"],
  feedback:   ["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"],
  settings:   ["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"],
  logout:     ["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "M16 17l5-5-5-5", "M21 12H9"],
  chevron:    null,
};

// ── Nav groups matching the original structure ────────────────────
const NAV_GROUPS = [
  {
    label: "Main",
    items: [
      { label: "Dashboard",   path: "/profile",     icon: "dashboard",   badge: null    },
      { label: "Students",    path: "/students",    icon: "students",    badge: "128"   },
      { label: "Assignments", path: "/assignments", icon: "assignments", badge: "3 new" },
      { label: "Calendar",    path: "/timetable",   icon: "calendar",    badge: null    },
      { label: "Classes",     path: "/classes",     icon: "classes",     badge: null    },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Feedback", path: "/feedback", icon: "feedback", badge: "12" },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Settings", path: "/settings", icon: "settings", badge: null },
    ],
  },
];

// ── Tooltip (shown when collapsed) ───────────────────────────────
const Tip = ({ label, children, active }) => {
  const [show, setShow] = useState(false);
  if (!active) return children;
  return (
    <div style={{ position: "relative" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      {children}
      {show && (
        <div style={{
          position: "absolute", left: "calc(100% + 10px)", top: "50%",
          transform: "translateY(-50%)",
          background: "#161616", border: "1px solid #252525",
          borderRadius: "8px", padding: "6px 12px",
          fontSize: "12px", color: "#c8c4bc", whiteSpace: "nowrap",
          fontFamily: "'Syne', sans-serif", fontWeight: 500,
          boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
          pointerEvents: "none", zIndex: 200,
          animation: "tipFade 0.14s ease both",
        }}>
          {label}
          {/* arrow */}
          <div style={{
            position: "absolute", right: "100%", top: "50%",
            transform: "translateY(-50%)",
            borderWidth: "5px", borderStyle: "solid",
            borderColor: "transparent #252525 transparent transparent",
          }} />
        </div>
      )}
    </div>
  );
};

// ── Sidebar ───────────────────────────────────────────────────────
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const W = collapsed ? "72px" : "256px";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Syne:wght@400;500;600;700&display=swap');

        @keyframes tipFade {
          from { opacity:0; transform:translateY(-50%) translateX(-4px); }
          to   { opacity:1; transform:translateY(-50%) translateX(0);    }
        }
        @keyframes itemIn {
          from { opacity:0; transform:translateX(-10px); }
          to   { opacity:1; transform:translateX(0);     }
        }

        /* ── root ── */
        .sb2 {
          font-family: 'Syne', sans-serif;
          background: #080808;
          border-right: 1px solid #111;
          min-height: 100vh;
          display: flex; flex-direction: column;
          transition: width 0.32s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }

        /* orange glow top-left */
        .sb2::before {
          content:'';
          position:absolute; top:-60px; left:-60px;
          width:260px; height:260px;
          background:radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%);
          pointer-events:none;
        }
        /* right-edge accent line */
        .sb2::after {
          content:'';
          position:absolute; top:0; right:0;
          width:1px; height:100%;
          background:linear-gradient(to bottom,
            transparent 0%,
            rgba(249,115,22,0.25) 25%,
            rgba(249,115,22,0.1)  65%,
            transparent 100%);
          pointer-events:none;
        }

        /* ── logo area ── */
        .sb2-logo {
          display:flex; align-items:center;
          justify-content:space-between;
          padding: 20px 16px 18px;
          border-bottom:1px solid #111;
          min-height:72px; position:relative; z-index:1;
        }
        .sb2-brand { display:flex; align-items:center; gap:11px; overflow:hidden; }
        .sb2-icon {
          width:38px; height:38px; flex-shrink:0;
          background:linear-gradient(135deg,#ea580c,#f97316);
          border-radius:11px;
          display:flex; align-items:center; justify-content:center;
          font-family:'Playfair Display',serif;
          font-size:18px; font-weight:700; color:#fff;
          box-shadow:0 0 0 2px rgba(249,115,22,0.2), 0 4px 16px rgba(249,115,22,0.25);
        }
        .sb2-wordmark { overflow:hidden; }
        .sb2-title {
          font-family:'Playfair Display',serif;
          font-size:15px; font-weight:700; color:#f0ede8;
          letter-spacing:-0.3px; white-space:nowrap;
          animation: itemIn 0.3s ease both;
        }
        .sb2-title em { color:#f97316; font-style:normal; }
        .sb2-sub {
          font-size:9.5px; color:#333;
          letter-spacing:0.9px; text-transform:uppercase;
          font-weight:600; margin-top:2px; white-space:nowrap;
          animation: itemIn 0.3s 0.05s ease both;
        }

        /* collapse btn */
        .sb2-tog {
          width:28px; height:28px; flex-shrink:0;
          background:#101010; border:1px solid #1c1c1c;
          border-radius:8px; cursor:pointer; color:#3a3a3a;
          display:flex; align-items:center; justify-content:center;
          transition:background .2s,color .2s,border-color .2s;
        }
        .sb2-tog:hover {
          background:rgba(249,115,22,.08);
          color:#f97316; border-color:rgba(249,115,22,.25);
        }
        .sb2-tog svg { transition:transform .32s cubic-bezier(.22,1,.36,1); }

        /* ── user card ── */
        .sb2-user {
          margin:12px 10px 4px;
          background:#0c0c0c; border:1px solid #161616;
          border-radius:14px; padding:13px;
          display:flex; align-items:center; gap:10px;
          position:relative; z-index:1; overflow:hidden;
          transition:padding .32s ease;
        }
        .sb2-user::before {
          content:'';
          position:absolute; inset:0;
          background:radial-gradient(ellipse at 0% 0%,rgba(249,115,22,0.04),transparent 65%);
          pointer-events:none;
        }
        .sb2-uavatar {
          width:36px; height:36px; flex-shrink:0; border-radius:9px;
          background:linear-gradient(135deg,#ea580c,#f97316);
          display:flex; align-items:center; justify-content:center;
          font-family:'Playfair Display',serif;
          font-size:14px; font-weight:700; color:#fff;
          box-shadow:0 0 0 2px rgba(249,115,22,0.18);
        }
        .sb2-uname {
          font-size:13px; font-weight:600; color:#e8e4de;
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
          letter-spacing:0.1px;
        }
        .sb2-uemail {
          font-size:10px; color:#333; margin-top:2px;
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .sb2-udot {
          width:6px; height:6px; border-radius:50%; background:#22c55e;
          box-shadow:0 0 6px rgba(34,197,94,.6); flex-shrink:0; margin-left:auto;
        }

        /* ── nav scroll area ── */
        .sb2-nav {
          flex:1; overflow-y:auto; padding:8px 8px 0;
          position:relative; z-index:1;
          scrollbar-width:none;
        }
        .sb2-nav::-webkit-scrollbar { display:none; }

        /* section label */
        .sb2-group-label {
          font-size:9px; color:#242424;
          text-transform:uppercase; letter-spacing:1.3px; font-weight:700;
          padding:14px 12px 5px; white-space:nowrap; overflow:hidden;
        }

        /* nav link */
        .sb2-link {
          display:flex; align-items:center; gap:11px;
          padding:10px 12px; border-radius:11px; margin-bottom:1px;
          text-decoration:none; cursor:pointer;
          position:relative; overflow:hidden;
          transition:color .2s ease, background .2s ease;
          white-space:nowrap;
        }
        /* left active bar */
        .sb2-bar {
          position:absolute; left:0; top:18%; bottom:18%;
          width:3px; border-radius:0 3px 3px 0;
          background:linear-gradient(to bottom,#ea580c,#f97316);
          opacity:0; transform:scaleY(0);
          transition:opacity .2s,transform .25s cubic-bezier(.22,1,.36,1);
          box-shadow:2px 0 10px rgba(249,115,22,.45);
        }
        /* warm hover glow fill */
        .sb2-link::before {
          content:'';
          position:absolute; inset:0; border-radius:11px;
          background:linear-gradient(90deg,rgba(249,115,22,.11),rgba(249,115,22,.03));
          opacity:0; transition:opacity .2s; pointer-events:none;
        }
        .sb2-link.active { color:#f97316; }
        .sb2-link.active::before { opacity:1; }
        .sb2-link.active .sb2-bar { opacity:1; transform:scaleY(1); }
        .sb2-link.inactive { color:#383838; }
        .sb2-link.inactive:hover { color:#777; background:rgba(255,255,255,.018); }

        .sb2-ico { display:flex; align-items:center; justify-content:center; width:18px; flex-shrink:0; }
        .sb2-lbl { font-size:13px; font-weight:500; letter-spacing:0.15px; flex:1; }

        /* badge */
        .sb2-bdg {
          font-size:9px; font-weight:700;
          background:rgba(249,115,22,.12); border:1px solid rgba(249,115,22,.22);
          color:#f97316; padding:2px 6px; border-radius:20px;
          letter-spacing:0.3px; flex-shrink:0;
        }

        /* ── bottom area ── */
        .sb2-bottom { padding:10px 10px 18px; position:relative; z-index:1; }

        /* logout */
        .sb2-logout {
          display:flex; align-items:center; justify-content:center; gap:9px;
          width:100%; background:rgba(239,68,68,.06);
          border:1px solid rgba(239,68,68,.14); border-radius:12px;
          padding:10px 14px; color:#6b2828; font-size:12px; font-weight:600;
          font-family:'Syne',sans-serif; cursor:pointer; letter-spacing:0.3px;
          transition:background .2s,color .2s,border-color .2s,box-shadow .2s;
          white-space:nowrap; overflow:hidden;
        }
        .sb2-logout:hover {
          background:rgba(239,68,68,.13); color:#ef4444;
          border-color:rgba(239,68,68,.3);
          box-shadow:0 4px 20px rgba(239,68,68,.1);
        }
      `}</style>

      <aside className="sb2" style={{ width: W }}>

        {/* ── Logo ── */}
        <div className="sb2-logo">
          <div className="sb2-brand">
            <div className="sb2-icon">S</div>
            {!collapsed && (
              <div className="sb2-wordmark">
                <div className="sb2-title"><em>Salok</em> University</div>
                <div className="sb2-sub">Admin Portal</div>
              </div>
            )}
          </div>
          <button
            className="sb2-tog"
            onClick={() => setCollapsed(v => !v)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            style={{ marginLeft: collapsed ? "auto" : "0" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ transform: collapsed ? "rotate(180deg)" : "rotate(0deg)" }}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>

        {/* ── User card ── */}
        <Tip label="Admin User · admin@salok.edu" active={collapsed}>
          <div className="sb2-user"
            style={{
              padding: collapsed ? "10px" : "13px",
              justifyContent: collapsed ? "center" : "flex-start",
            }}>
            <div className="sb2-uavatar">A</div>
            {!collapsed && (
              <>
                <div style={{ minWidth: 0 }}>
                  <div className="sb2-uname">Admin User</div>
                  <div className="sb2-uemail">admin@salok.edu</div>
                </div>
                <div className="sb2-udot" title="Online" />
              </>
            )}
          </div>
        </Tip>

        {/* ── Nav ── */}
        <nav className="sb2-nav">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              {!collapsed && (
                <div className="sb2-group-label">{group.label}</div>
              )}
              {group.items.map((item, i) => (
                <Tip key={item.path} label={item.label} active={collapsed}>
                  <NavLink
                    to={item.path}
                    style={{ animationDelay: `${i * 45}ms`, animation: "itemIn .3s ease both" }}
                    className={({ isActive }) =>
                      `sb2-link ${isActive ? "active" : "inactive"}${collapsed ? " justify-center" : ""}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="sb2-bar" />
                        <span className="sb2-ico">
                          <Icon
                            d={icons[item.icon]}
                            size={17}
                          />
                        </span>
                        {!collapsed && (
                          <>
                            <span className="sb2-lbl">{item.label}</span>
                            {item.badge && <span className="sb2-bdg">{item.badge}</span>}
                          </>
                        )}
                      </>
                    )}
                  </NavLink>
                </Tip>
              ))}
            </div>
          ))}
        </nav>

        {/* ── Bottom: Logout ── */}
        <div className="sb2-bottom">
          <Tip label="Logout" active={collapsed}>
            <button className="sb2-logout" onClick={handleLogout}>
              <Icon d={icons.logout} size={15} />
              {!collapsed && "Logout"}
            </button>
          </Tip>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;