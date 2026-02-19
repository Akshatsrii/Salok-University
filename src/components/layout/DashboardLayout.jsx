/**
 * DashboardLayout.jsx  — v3 FIXED
 *
 * WHY PROFILE EDIT WAS BROKEN BEFORE:
 * The modal had its own local useState for name/email/role.
 * When "Save" was clicked, the parent's setProfile was called BUT
 * the modal didn't close properly and stale closures kept old values.
 *
 * THE FIX (3 rules):
 *  1. profile state ONLY lives in DashboardLayout (single source of truth)
 *  2. ProfileModal receives current profile as initial values, has its OWN
 *     local draft state, and on Save calls onSave(draft) which calls setProfile
 *  3. Modal unmounts after save — so next open always reads fresh profile
 */

import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

/* ══════════════════════════════════════
   CONFIG
══════════════════════════════════════ */
const NAV_GROUPS = [
  {
    label: "Main",
    items: [
      { to: "/",            label: "Dashboard",   badge: null    },
      { to: "/students",    label: "Students",    badge: "128"   },
      { to: "/assignments", label: "Assignments", badge: "3 new" },
      { to: "/calendar",    label: "Calendar",    badge: null    },
      { to: "/classes",     label: "Classes",     badge: null    },
    ],
  },
  {
    label: "Insights",
    items: [{ to: "/feedback", label: "Feedback", badge: "12" }],
  },
  {
    label: "System",
    items: [{ to: "/settings", label: "Settings", badge: null }],
  },
];

const PAGE_META = {
  "/":            { title: "Dashboard",   crumbs: ["Home","Dashboard"]   },
  "/students":    { title: "Students",    crumbs: ["Home","Students"]    },
  "/assignments": { title: "Assignments", crumbs: ["Home","Assignments"] },
  "/calendar":    { title: "Calendar",    crumbs: ["Home","Calendar"]    },
  "/feedback":    { title: "Feedback",    crumbs: ["Home","Feedback"]    },
  "/classes":     { title: "Classes",     crumbs: ["Home","Classes"]     },
  "/settings":    { title: "Settings",    crumbs: ["Home","Settings"]    },
};

const NOTIFS = [
  { id:1, title:"New student enrolled",       desc:"Riya Sharma joined Sem 3", time:"2m ago",  unread:true  },
  { id:2, title:"Mid-term results published",  desc:"Check the results portal", time:"1h ago",  unread:true  },
  { id:3, title:"Tech Fest schedule updated",  desc:"Main Auditorium — Feb 20", time:"3h ago",  unread:false },
  { id:4, title:"Assignment deadline today",   desc:"DBMS Assignment #3",       time:"5h ago",  unread:false },
];

/* ══════════════════════════════════════
   TINY HELPERS
══════════════════════════════════════ */
const initials = (name = "") =>
  (name || "A").trim().split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();

/* ══════════════════════════════════════
   SVG ICON SYSTEM
══════════════════════════════════════ */
const paths = {
  home:    ["M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"],
  students:["M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"],
  assign:  ["M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z","M14 2v6h6","M16 13H8","M16 17H8","M10 9H8"],
  calendar:["M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"],
  classes: ["M4 19.5A2.5 2.5 0 016.5 17H20","M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"],
  feedback:["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"],
  settings:["M12 15a3 3 0 100-6 3 3 0 000 6z","M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"],
  bell:    ["M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"],
  search:  ["M21 21l-4.35-4.35","M11 19a8 8 0 100-16 8 8 0 000 16z"],
  chevron: ["M19 9l-7 7-7-7"],
  menu:    ["M4 6h16M4 12h16M4 18h16"],
  logout:  ["M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4","M16 17l5-5-5-5","M21 12H9"],
  edit:    ["M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7","M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"],
  x:       ["M18 6L6 18","M6 6l12 12"],
  check:   ["M20 6L9 17l-5-5"],
  collapse:["M11 19l-7-7 7-7m8 14l-7-7 7-7"],
};

const navIcon = {
  Dashboard:   paths.home,
  Students:    paths.students,
  Assignments: paths.assign,
  Calendar:    paths.calendar,
  Classes:     paths.classes,
  Feedback:    paths.feedback,
  Settings:    paths.settings,
};

function Ic({ p, size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round">
      {[].concat(p).map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/* ══════════════════════════════════════
   GLOBAL STYLES
══════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Syne:wght@400;500;600;700&display=swap');

@keyframes kSlide { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
@keyframes kFade  { from{opacity:0;transform:translateY(14px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
@keyframes kDrop  { from{opacity:0;transform:translateY(-6px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
@keyframes kTip   { from{opacity:0;transform:translateY(-50%) translateX(-4px)} to{opacity:1;transform:translateY(-50%) translateX(0)} }
@keyframes kPulse { 0%,100%{box-shadow:0 0 6px rgba(249,115,22,.4)} 50%{box-shadow:0 0 14px rgba(249,115,22,.85)} }
@keyframes kShim  { from{background-position:-200% center} to{background-position:200% center} }
@keyframes kOver  { from{opacity:0} to{opacity:1} }

*,:before,:after{box-sizing:border-box}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:#1e1e1e;border-radius:4px}

/* nav link */
.nlk{display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:12px;margin-bottom:2px;text-decoration:none;position:relative;overflow:hidden;transition:color .2s,background .2s;white-space:nowrap;font-family:'Syne',sans-serif;font-size:13px;font-weight:500;letter-spacing:.1px}
.nlk::before{content:'';position:absolute;inset:0;border-radius:12px;background:linear-gradient(90deg,rgba(249,115,22,.12),rgba(249,115,22,.03));opacity:0;transition:opacity .2s;pointer-events:none}
.nlk.on{color:#f97316!important}
.nlk.on::before{opacity:1}
.nlk.on .nbar{opacity:1!important;transform:scaleY(1)!important}
.nlk.off{color:#383838}
.nlk.off:hover{color:#777;background:rgba(255,255,255,.025)}
.nbar{position:absolute;left:0;top:18%;bottom:18%;width:3px;border-radius:0 3px 3px 0;background:linear-gradient(to bottom,#ea580c,#f97316);opacity:0;transform:scaleY(0);transition:opacity .2s,transform .28s cubic-bezier(.22,1,.36,1);box-shadow:2px 0 12px rgba(249,115,22,.45)}

/* modal input */
.minp{width:100%;background:#0f0f0f;border:1px solid #222;border-radius:10px;color:#e8e4de;font-size:14px;padding:11px 14px;font-family:'Syne',sans-serif;outline:none;transition:border-color .2s,box-shadow .2s}
.minp:focus{border-color:rgba(249,115,22,.5);box-shadow:0 0 0 3px rgba(249,115,22,.1)}

/* interactive hovers */
.huc:hover{border-color:rgba(249,115,22,.25)!important;box-shadow:0 0 0 1px rgba(249,115,22,.1)!important}
.hlo:hover{background:rgba(239,68,68,.13)!important;color:#ef4444!important;border-color:rgba(239,68,68,.3)!important}
.hcb:hover{background:rgba(249,115,22,.08)!important;color:#f97316!important;border-color:rgba(249,115,22,.25)!important}
.hhb:hover{background:#111!important;color:#777!important}
.hpb:hover{background:#0e0e0e!important;border-color:#252525!important}
.hdi:hover{background:rgba(255,255,255,.03)!important;color:#888!important}
.hdo:hover{background:rgba(249,115,22,.08)!important;color:#f97316!important}
.hdr:hover{background:rgba(239,68,68,.08)!important;color:#ef4444!important}
.hni:hover{background:rgba(255,255,255,.025)!important}
.hbs:hover{transform:translateY(-1px)!important;box-shadow:0 8px 28px rgba(249,115,22,.45)!important}
.hbx:hover{background:#1a1a1a!important;color:#888!important}
.hsw:focus-within{border-color:rgba(249,115,22,.3)!important}
`;

/* ══════════════════════════════════════
   TOOLTIP
══════════════════════════════════════ */
const Tip = ({ text, active, children }) => {
  const [vis, setVis] = useState(false);
  if (!active) return children;
  return (
    <div style={{ position:"relative" }}
      onMouseEnter={() => setVis(true)}
      onMouseLeave={() => setVis(false)}>
      {children}
      {vis && (
        <div style={{
          position:"absolute", left:"calc(100% + 10px)", top:"50%",
          transform:"translateY(-50%)",
          background:"#161616", border:"1px solid #252525",
          borderRadius:8, padding:"5px 11px",
          fontSize:12, color:"#c8c4bc", whiteSpace:"nowrap",
          fontFamily:"'Syne',sans-serif", fontWeight:500,
          boxShadow:"0 8px 32px rgba(0,0,0,.7)",
          pointerEvents:"none", zIndex:9999,
          animation:"kTip .14s ease both",
        }}>
          {text}
          <div style={{ position:"absolute", right:"100%", top:"50%", transform:"translateY(-50%)", borderWidth:5, borderStyle:"solid", borderColor:"transparent #252525 transparent transparent" }} />
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════
   PROFILE MODAL
   ★ KEY DESIGN:
   - own draft state (name/email/role)
   - initialised from props once on mount
   - Save → calls onSave(draft) → parent setProfile → done
   - modal unmounts → next open always fresh
══════════════════════════════════════ */
const ProfileModal = ({ currentProfile, onSave, onClose }) => {
  // Local draft — completely independent from parent state
  const [name,  setName]  = useState(currentProfile.name  || "");
  const [email, setEmail] = useState(currentProfile.email || "");
  const [role,  setRole]  = useState(currentProfile.role  || "");
  const [saved, setSaved] = useState(false);

  const valid = name.trim() !== "" && email.trim() !== "";

  const handleSave = () => {
    if (!valid) return;
    const updated = { name: name.trim(), email: email.trim(), role: role.trim() };
    onSave(updated);   // ← THIS is what updates the parent & re-renders sidebar/navbar
    setSaved(true);
    setTimeout(onClose, 950);   // close after brief "Saved!" flash
  };

  const prev = initials(name || "A");

  return (
    <div
      onClick={onClose}
      style={{
        position:"fixed", inset:0, zIndex:99999,
        background:"rgba(0,0,0,.88)", backdropFilter:"blur(10px)",
        display:"flex", alignItems:"center", justifyContent:"center",
        padding:20, animation:"kOver .18s ease both",
      }}>
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background:"#0b0b0b", border:"1px solid #1e1e1e",
          borderRadius:22, padding:32, width:"100%", maxWidth:440,
          position:"relative", overflow:"hidden",
          boxShadow:"0 40px 100px rgba(0,0,0,.95)",
          animation:"kFade .25s cubic-bezier(.22,1,.36,1) both",
          fontFamily:"'Syne',sans-serif",
        }}>

        {/* decorative glow */}
        <div style={{ position:"absolute",top:-80,left:-80,width:220,height:220,background:"radial-gradient(circle,rgba(249,115,22,.1),transparent 70%)",pointerEvents:"none",borderRadius:"50%" }}/>
        <div style={{ position:"absolute",top:0,right:0,width:1,height:"100%",background:"linear-gradient(to bottom,transparent,rgba(249,115,22,.18),transparent)",pointerEvents:"none" }}/>

        {/* header */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:26 }}>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:24, fontWeight:700, color:"#f0ede8", letterSpacing:"-0.4px" }}>Edit Profile</div>
            <div style={{ fontSize:12, color:"#383838", marginTop:4 }}>Changes update everywhere instantly</div>
          </div>
          <button className="hbx" onClick={onClose} style={{ width:32,height:32,background:"#111",border:"1px solid #222",borderRadius:9,cursor:"pointer",color:"#444",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s,color .2s",flexShrink:0 }}>
            <Ic p={paths.x} size={13}/>
          </button>
        </div>

        {/* live preview card */}
        <div style={{ display:"flex",alignItems:"center",gap:16,background:"#080808",border:"1px solid #181818",borderRadius:14,padding:16,marginBottom:24,position:"relative",overflow:"hidden" }}>
          <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse at 0% 50%,rgba(249,115,22,.07),transparent 60%)",pointerEvents:"none" }}/>
          <div style={{ width:52,height:52,borderRadius:13,flexShrink:0,background:"linear-gradient(135deg,#ea580c,#f97316)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700,color:"#fff",boxShadow:"0 0 0 3px rgba(249,115,22,.2),0 8px 24px rgba(249,115,22,.3)" }}>
            {prev}
          </div>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontFamily:"'Playfair Display',serif",fontSize:16,fontWeight:700,color:name?"#f0ede8":"#2e2e2e",letterSpacing:"-0.2px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>{name || "Your Name"}</div>
            <div style={{ fontSize:11,color:email?"#383838":"#252525",marginTop:3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>{email || "your@email.com"}</div>
            {role && <span style={{ display:"inline-block",marginTop:6,fontSize:10,background:"rgba(249,115,22,.1)",border:"1px solid rgba(249,115,22,.2)",color:"#f97316",padding:"2px 8px",borderRadius:20,fontWeight:700,letterSpacing:"0.4px" }}>{role}</span>}
          </div>
        </div>

        {/* fields */}
        <div style={{ display:"flex", flexDirection:"column", gap:14, marginBottom:26 }}>
          {[
            { label:"Full Name",     val:name,  set:setName,  type:"text",  ph:"e.g. Admin User",       req:true  },
            { label:"Email Address", val:email, set:setEmail, type:"email", ph:"e.g. admin@salok.edu",  req:true  },
            { label:"Role / Title",  val:role,  set:setRole,  type:"text",  ph:"e.g. Administrator",    req:false },
          ].map(f => (
            <div key={f.label}>
              <div style={{ display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#444",letterSpacing:"0.6px",textTransform:"uppercase",fontWeight:700,marginBottom:7 }}>
                {f.label}{f.req && <span style={{ color:"#f97316",fontSize:14,lineHeight:1 }}>*</span>}
              </div>
              <input
                className="minp"
                type={f.type}
                value={f.val}
                placeholder={f.ph}
                autoComplete="off"
                onChange={e => f.set(e.target.value)}   // ★ controlled input
              />
            </div>
          ))}
        </div>

        {/* buttons */}
        <div style={{ display:"flex", gap:10 }}>
          <button onClick={onClose} style={{ flex:1,background:"#0e0e0e",border:"1px solid #1e1e1e",borderRadius:12,color:"#555",fontSize:13,padding:"11px 0",cursor:"pointer",fontFamily:"'Syne',sans-serif",fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center",gap:7,transition:"color .2s" }}
            onMouseEnter={e => e.currentTarget.style.color="#888"}
            onMouseLeave={e => e.currentTarget.style.color="#555"}>
            <Ic p={paths.x} size={13}/> Cancel
          </button>
          <button
            className={valid && !saved ? "hbs" : ""}
            onClick={handleSave}
            disabled={!valid || saved}
            style={{
              flex:2, border:"none", borderRadius:12,
              background: saved ? "linear-gradient(135deg,#16a34a,#22c55e)"
                        : valid ? "linear-gradient(135deg,#ea580c,#f97316)"
                                : "#1a1a1a",
              color: valid ? "#fff" : "#333",
              fontSize:13, padding:"11px 0",
              cursor: valid && !saved ? "pointer" : "default",
              fontFamily:"'Syne',sans-serif", fontWeight:700,
              display:"flex", alignItems:"center", justifyContent:"center", gap:7,
              boxShadow: saved ? "0 4px 20px rgba(34,197,94,.3)"
                        : valid ? "0 4px 20px rgba(249,115,22,.3)" : "none",
              transition:"background .3s,box-shadow .3s,transform .15s",
            }}>
            {saved
              ? <><Ic p={paths.check} size={14}/> Saved!</>
              : <><Ic p={paths.edit}  size={13}/> Save Changes</>}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════
   AVATAR BUBBLE
══════════════════════════════════════ */
const Avatar = ({ name, size = 36, radius = 9 }) => (
  <div style={{
    width:size, height:size, borderRadius:radius, flexShrink:0,
    background:"linear-gradient(135deg,#ea580c,#f97316)",
    display:"flex", alignItems:"center", justifyContent:"center",
    fontFamily:"'Playfair Display',serif",
    fontSize: Math.round(size * 0.38), fontWeight:700, color:"#fff",
    boxShadow:"0 0 0 2px rgba(249,115,22,.2)",
  }}>
    {initials(name)}
  </div>
);

/* ══════════════════════════════════════
   SIDEBAR
══════════════════════════════════════ */
const Sidebar = ({ collapsed, onToggle, profile, onEdit }) => (
  <aside style={{
    fontFamily:"'Syne',sans-serif",
    background:"#080808", borderRight:"1px solid #111",
    width: collapsed ? 72 : 248,
    minHeight:"100vh", display:"flex", flexDirection:"column",
    transition:"width .32s cubic-bezier(.22,1,.36,1)",
    position:"relative", overflow:"hidden", flexShrink:0,
  }}>
    <div style={{ position:"absolute",top:-60,left:-60,width:260,height:260,background:"radial-gradient(circle,rgba(249,115,22,.07),transparent 70%)",pointerEvents:"none" }}/>
    <div style={{ position:"absolute",top:0,right:0,width:1,height:"100%",background:"linear-gradient(to bottom,transparent,rgba(249,115,22,.25) 25%,rgba(249,115,22,.1) 65%,transparent)",pointerEvents:"none" }}/>

    {/* logo */}
    <div style={{ display:"flex",alignItems:"center",justifyContent:collapsed?"center":"space-between",padding:"20px 14px 18px",borderBottom:"1px solid #111",minHeight:70,position:"relative",zIndex:1 }}>
      <div style={{ display:"flex",alignItems:"center",gap:10,overflow:"hidden" }}>
        <div style={{ width:36,height:36,flexShrink:0,background:"linear-gradient(135deg,#ea580c,#f97316)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Playfair Display',serif",fontSize:17,fontWeight:700,color:"#fff",boxShadow:"0 0 0 2px rgba(249,115,22,.2),0 4px 16px rgba(249,115,22,.25)" }}>S</div>
        {!collapsed && (
          <div style={{ overflow:"hidden",animation:"kSlide .3s ease both" }}>
            <div style={{ fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:"#f0ede8",whiteSpace:"nowrap" }}><span style={{ color:"#f97316" }}>Salok</span> University</div>
            <div style={{ fontSize:9.5,color:"#2e2e2e",letterSpacing:"0.9px",textTransform:"uppercase",fontWeight:600,marginTop:2 }}>Admin Portal</div>
          </div>
        )}
      </div>
      {!collapsed && (
        <button className="hcb" onClick={onToggle} style={{ width:28,height:28,background:"#101010",border:"1px solid #1c1c1c",borderRadius:8,cursor:"pointer",color:"#3a3a3a",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s,color .2s,border-color .2s" }}>
          <Ic p={paths.collapse} size={13}/>
        </button>
      )}
    </div>

    {/* user card — click to edit */}
    <Tip text={`${profile.name} · ${profile.role || "Admin"}`} active={collapsed}>
      <div className="huc" onClick={onEdit} style={{ margin:"12px 10px 4px",background:"#0c0c0c",border:"1px solid #161616",borderRadius:14,padding:collapsed?10:13,display:"flex",alignItems:"center",justifyContent:collapsed?"center":"flex-start",gap:10,position:"relative",zIndex:1,overflow:"hidden",cursor:"pointer",transition:"border-color .2s,box-shadow .2s" }}>
        <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse at 0% 0%,rgba(249,115,22,.04),transparent 65%)",pointerEvents:"none" }}/>
        <Avatar name={profile.name} size={36} radius={9}/>
        {!collapsed && (
          <>
            <div style={{ minWidth:0,flex:1 }}>
              <div style={{ fontSize:13,fontWeight:600,color:"#e8e4de",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>{profile.name}</div>
              <div style={{ fontSize:10,color:"#333",marginTop:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>{profile.email}</div>
            </div>
            <Ic p={paths.edit} size={13}/>
            <div style={{ width:6,height:6,borderRadius:"50%",background:"#22c55e",flexShrink:0,boxShadow:"0 0 6px rgba(34,197,94,.6)",animation:"kPulse 2s ease infinite" }}/>
          </>
        )}
      </div>
    </Tip>

    {/* semester chip */}
    {!collapsed && (
      <div style={{ margin:"6px 10px 2px",background:"rgba(249,115,22,.05)",border:"1px solid rgba(249,115,22,.1)",borderRadius:10,padding:"7px 12px",display:"flex",alignItems:"center",gap:8,zIndex:1,position:"relative" }}>
        <div style={{ width:6,height:6,borderRadius:"50%",background:"#f97316",boxShadow:"0 0 6px rgba(249,115,22,.5)",animation:"kPulse 2s ease infinite" }}/>
        <div style={{ fontSize:11,color:"#484848",fontWeight:500,letterSpacing:"0.3px",whiteSpace:"nowrap" }}>Active · Spring 2025</div>
      </div>
    )}

    {/* nav */}
    <nav style={{ flex:1,padding:"8px 8px 0",overflowY:"auto",overflowX:"hidden",position:"relative",zIndex:1,scrollbarWidth:"none" }}>
      {NAV_GROUPS.map(g => (
        <div key={g.label}>
          {!collapsed && (
            <div style={{ fontSize:9,color:"#242424",textTransform:"uppercase",letterSpacing:"1.3px",fontWeight:700,padding:"12px 12px 5px",whiteSpace:"nowrap" }}>{g.label}</div>
          )}
          {g.items.map((item, i) => (
            <Tip key={item.to} text={item.label} active={collapsed}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                style={{ animationDelay:`${i*45}ms`, animation:"kSlide .3s ease both" }}
                className={({ isActive }) => `nlk ${isActive ? "on" : "off"}${collapsed ? " justify-center" : ""}`}
              >
                {({ isActive }) => (
                  <>
                    <div className="nbar"/>
                    <span style={{ display:"flex",alignItems:"center",justifyContent:"center",width:18,flexShrink:0,color:isActive?"#f97316":"currentColor" }}>
                      <Ic p={navIcon[item.label]} size={17}/>
                    </span>
                    {!collapsed && (
                      <>
                        <span style={{ flex:1 }}>{item.label}</span>
                        {item.badge && <span style={{ fontSize:9,fontWeight:700,background:"rgba(249,115,22,.12)",border:"1px solid rgba(249,115,22,.22)",color:"#f97316",padding:"2px 6px",borderRadius:20,letterSpacing:"0.3px",flexShrink:0 }}>{item.badge}</span>}
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

    {/* expand btn when collapsed */}
    {collapsed && (
      <div style={{ padding:"8px 8px 10px",zIndex:1,position:"relative" }}>
        <Tip text="Expand" active>
          <button className="hcb" onClick={onToggle} style={{ width:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:10,background:"#101010",border:"1px solid #1c1c1c",borderRadius:11,cursor:"pointer",color:"#3a3a3a",transition:"background .2s,color .2s,border-color .2s" }}>
            <Ic p={paths.collapse} size={13}/>
          </button>
        </Tip>
      </div>
    )}

    {/* logout */}
    <div style={{ padding:"8px 10px 18px",zIndex:1,position:"relative" }}>
      <Tip text="Logout" active={collapsed}>
        <NavLink to="/login" className="hlo" onClick={() => localStorage.removeItem("token")} style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:9,background:"rgba(239,68,68,.06)",border:"1px solid rgba(239,68,68,.14)",borderRadius:12,padding:"10px 14px",color:"#6b2828",fontSize:12,fontWeight:600,fontFamily:"'Syne',sans-serif",cursor:"pointer",letterSpacing:"0.3px",textDecoration:"none",transition:"background .2s,color .2s,border-color .2s",whiteSpace:"nowrap",overflow:"hidden" }}>
          <Ic p={paths.logout} size={14}/>{!collapsed && " Logout"}
        </NavLink>
      </Tip>
    </div>
  </aside>
);

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
const Navbar = ({ onMenu, title, crumbs, profile, onEdit }) => {
  const [nOpen, setNOpen] = useState(false);
  const [pOpen, setPOpen] = useState(false);
  const [q, setQ] = useState("");
  const nRef = useRef(null);
  const pRef = useRef(null);
  const unread = NOTIFS.filter(n => n.unread).length;

  useEffect(() => {
    const h = e => {
      if (nRef.current && !nRef.current.contains(e.target)) setNOpen(false);
      if (pRef.current && !pRef.current.contains(e.target)) setPOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const D = { position:"absolute",right:0,top:"calc(100% + 8px)",background:"#0d0d0d",border:"1px solid #1a1a1a",borderRadius:16,boxShadow:"0 24px 60px rgba(0,0,0,.9)",zIndex:500,overflow:"hidden",animation:"kDrop .18s ease both",fontFamily:"'Syne',sans-serif" };

  return (
    <header style={{ height:66,background:"#080808",borderBottom:"1px solid #111",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",flexShrink:0,gap:16,fontFamily:"'Syne',sans-serif",position:"relative" }}>
      <div style={{ position:"absolute",bottom:0,left:0,right:0,height:1,background:"linear-gradient(to right,transparent,rgba(249,115,22,.18),transparent)" }}/>

      {/* left */}
      <div style={{ display:"flex",alignItems:"center",gap:12,minWidth:0 }}>
        <button className="hhb" onClick={onMenu} style={{ padding:8,borderRadius:10,background:"none",border:"1px solid #1a1a1a",color:"#444",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s,color .2s" }}>
          <Ic p={paths.menu} size={19}/>
        </button>
        <div style={{ minWidth:0 }}>
          <h1 style={{ fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,color:"#f0ede8",letterSpacing:"-0.3px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis" }}>{title}</h1>
          <div style={{ display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#2d2d2d",marginTop:1 }}>
            {crumbs.map((c, i) => (
              <span key={i} style={{ display:"flex",alignItems:"center",gap:4 }}>
                {i > 0 && <span style={{ color:"#1a1a1a" }}>/</span>}
                <span style={{ color:i===crumbs.length-1?"rgba(249,115,22,.7)":"#2d2d2d" }}>{c}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* right */}
      <div style={{ display:"flex",alignItems:"center",gap:6,flexShrink:0 }}>

        {/* search */}
        <div className="hsw" style={{ display:"flex",alignItems:"center",gap:8,background:"#0e0e0e",border:"1px solid #1a1a1a",borderRadius:11,padding:"8px 12px",width:180,transition:"border-color .2s" }}>
          <span style={{ color:"#333",flexShrink:0 }}><Ic p={paths.search} size={14}/></span>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search…" style={{ background:"none",border:"none",outline:"none",color:"#ccc",fontSize:12,width:"100%",fontFamily:"'Syne',sans-serif" }}/>
          {q && <button onClick={()=>setQ("")} style={{ background:"none",border:"none",color:"#444",cursor:"pointer",fontSize:11 }}>✕</button>}
        </div>

        {/* bell */}
        <div style={{ position:"relative" }} ref={nRef}>
          <button className="hhb" onClick={()=>{setNOpen(o=>!o);setPOpen(false)}} style={{ position:"relative",padding:9,borderRadius:11,background:"none",border:"1px solid #1a1a1a",color:"#444",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background .2s,color .2s" }}>
            <Ic p={paths.bell} size={19}/>
            {unread>0 && <span style={{ position:"absolute",top:7,right:7,width:7,height:7,borderRadius:"50%",background:"#f97316",boxShadow:"0 0 0 2px #080808,0 0 8px rgba(249,115,22,.6)" }}/>}
          </button>
          {nOpen && (
            <div style={{ ...D, width:300 }}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px",borderBottom:"1px solid #161616" }}>
                <span style={{ fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:"#f0ede8" }}>Notifications</span>
                {unread>0 && <span style={{ fontSize:10,background:"rgba(249,115,22,.15)",border:"1px solid rgba(249,115,22,.25)",color:"#f97316",padding:"2px 8px",borderRadius:20,fontWeight:700 }}>{unread} new</span>}
              </div>
              <div style={{ maxHeight:260,overflowY:"auto" }}>
                {NOTIFS.map((n, i) => (
                  <div key={n.id} className="hni" style={{ display:"flex",alignItems:"flex-start",gap:12,padding:"12px 16px",cursor:"pointer",borderBottom:i<NOTIFS.length-1?"1px solid #141414":"none",background:n.unread?"rgba(249,115,22,.025)":"none",transition:"background .15s" }}>
                    <div style={{ width:7,height:7,borderRadius:"50%",background:n.unread?"#f97316":"transparent",flexShrink:0,marginTop:5,boxShadow:n.unread?"0 0 6px rgba(249,115,22,.5)":"none" }}/>
                    <div style={{ flex:1,minWidth:0 }}>
                      <div style={{ fontSize:12,color:"#ccc",fontWeight:500 }}>{n.title}</div>
                      <div style={{ fontSize:11,color:"#383838",marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{n.desc}</div>
                      <div style={{ fontSize:10,color:"#272727",marginTop:4 }}>{n.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding:"12px 16px",borderTop:"1px solid #161616",textAlign:"center" }}>
                <button style={{ background:"none",border:"none",color:"#f97316",fontSize:11,cursor:"pointer",fontFamily:"'Syne',sans-serif",fontWeight:600 }}>View all →</button>
              </div>
            </div>
          )}
        </div>

        {/* profile dropdown */}
        <div style={{ position:"relative" }} ref={pRef}>
          <button className="hpb" onClick={()=>{setPOpen(o=>!o);setNOpen(false)}} style={{ display:"flex",alignItems:"center",gap:8,padding:"6px 10px 6px 6px",borderRadius:11,background:"none",border:"1px solid #1a1a1a",cursor:"pointer",transition:"background .2s,border-color .2s" }}>
            <Avatar name={profile.name} size={32} radius={9}/>
            <div style={{ textAlign:"left",lineHeight:1.2 }}>
              <div style={{ fontSize:12,fontWeight:600,color:"#e8e4de",whiteSpace:"nowrap" }}>{profile.name}</div>
              <div style={{ fontSize:10,color:"#333",whiteSpace:"nowrap" }}>{profile.role || "Admin"}</div>
            </div>
            <span style={{ color:"#333",marginLeft:2 }}><Ic p={paths.chevron} size={13}/></span>
          </button>

          {pOpen && (
            <div style={{ ...D, width:224 }}>
              <div style={{ padding:"14px 16px",borderBottom:"1px solid #161616" }}>
                <div style={{ fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:"#f0ede8" }}>{profile.name}</div>
                <div style={{ fontSize:11,color:"#333",marginTop:3 }}>{profile.email}</div>
                {profile.role && <span style={{ display:"inline-block",marginTop:8,fontSize:10,background:"rgba(249,115,22,.12)",border:"1px solid rgba(249,115,22,.2)",color:"#f97316",padding:"2px 8px",borderRadius:20,fontWeight:700 }}>{profile.role}</span>}
              </div>
              <div style={{ padding:6 }}>
                {["My Profile","Notifications","Settings"].map(l => (
                  <button key={l} className="hdi" style={{ width:"100%",display:"flex",alignItems:"center",gap:10,padding:"9px 12px",borderRadius:9,background:"none",border:"none",color:"#484848",fontSize:12,cursor:"pointer",fontFamily:"'Syne',sans-serif",fontWeight:500,transition:"background .15s,color .15s" }}>{l}</button>
                ))}
                {/* Edit Profile button */}
                <button className="hdo" onClick={()=>{setPOpen(false);onEdit()}} style={{ width:"100%",display:"flex",alignItems:"center",gap:10,padding:"9px 12px",borderRadius:9,background:"none",border:"none",color:"rgba(249,115,22,.75)",fontSize:12,cursor:"pointer",fontFamily:"'Syne',sans-serif",fontWeight:600,transition:"background .15s,color .15s" }}>
                  <Ic p={paths.edit} size={13}/> Edit Profile
                </button>
              </div>
              <div style={{ padding:6,borderTop:"1px solid #161616" }}>
                <button className="hdr" onClick={()=>{localStorage.removeItem("token");window.location.href="/login"}} style={{ width:"100%",display:"flex",alignItems:"center",gap:10,padding:"9px 12px",borderRadius:9,background:"none",border:"none",color:"#6b2828",fontSize:12,cursor:"pointer",fontFamily:"'Syne',sans-serif",fontWeight:600,transition:"background .15s,color .15s" }}>
                  <Ic p={paths.logout} size={13}/> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

/* ══════════════════════════════════════
   PROGRESS BAR
══════════════════════════════════════ */
const ProgressBar = ({ on }) => (
  <div style={{ height:2,background:"#0e0e0e",overflow:"hidden",flexShrink:0 }}>
    <div style={{ height:"100%",background:"linear-gradient(90deg,#ea580c,#f97316,#ea580c)",backgroundSize:"200% 100%",width:on?"100%":"0%",opacity:on?1:0,transition:on?"width .4s ease":"opacity .3s ease",animation:on?"kShim 1.2s ease infinite":"none" }}/>
  </div>
);

/* ══════════════════════════════════════
   DASHBOARD LAYOUT  ← root component
══════════════════════════════════════ */
const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ★ SINGLE SOURCE OF TRUTH for profile
  const [profile, setProfile] = useState({
    name:  "Admin User",
    email: "admin@salok.edu",
    role:  "Administrator",
  });

  const [editOpen,  setEditOpen]  = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const prev = useRef(location.pathname);

  useEffect(() => {
    if (prev.current !== location.pathname) {
      setLoading(true);
      const t = setTimeout(() => setLoading(false), 400);
      prev.current = location.pathname;
      return () => clearTimeout(t);
    }
  }, [location.pathname]);

  const meta = PAGE_META[location.pathname] ?? { title:"Page", crumbs:["Home"] };

  // ★ onSave: direct setProfile call — React re-renders Sidebar & Navbar instantly
  const handleSaveProfile = (updated) => {
    setProfile(updated);
    // editOpen stays true during the "Saved!" animation;
    // ProfileModal itself calls onClose after timeout
  };

  return (
    <>
      <style>{CSS}</style>

      {/* ★ Modal at root — high z-index, unmounts on close */}
      {editOpen && (
        <ProfileModal
          currentProfile={profile}          // fresh each open
          onSave={handleSaveProfile}         // updates parent state
          onClose={() => setEditOpen(false)} // unmounts modal
        />
      )}

      <div style={{ display:"flex",background:"#080808",color:"#e8e4de",minHeight:"100vh",overflow:"hidden",fontFamily:"'Syne',sans-serif" }}>

        <Sidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed(c => !c)}
          profile={profile}                      // ★ live
          onEdit={() => setEditOpen(true)}
        />

        <div style={{ flex:1,display:"flex",flexDirection:"column",minWidth:0 }}>

          <Navbar
            onMenu={() => {}}
            title={meta.title}
            crumbs={meta.crumbs}
            profile={profile}                    // ★ live
            onEdit={() => setEditOpen(true)}
          />

          <ProgressBar on={loading}/>

          <main style={{ flex:1,overflowY:"auto",background:"#0a0a0a",position:"relative" }}>
            {/* noise grain */}
            <div style={{ pointerEvents:"none",position:"fixed",inset:0,opacity:.018,mixBlendMode:"overlay",backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,backgroundRepeat:"repeat",backgroundSize:"128px" }}/>
            {/* ambient glows */}
            <div style={{ pointerEvents:"none",position:"fixed",top:-120,right:-120,width:400,height:400,background:"radial-gradient(circle,rgba(249,115,22,.05),transparent 70%)",borderRadius:"50%" }}/>
            <div style={{ pointerEvents:"none",position:"fixed",bottom:-80,left:60,width:300,height:300,background:"radial-gradient(circle,rgba(249,115,22,.03),transparent 70%)",borderRadius:"50%" }}/>

            <div style={{ position:"relative",minHeight:"100%",opacity:loading?0:1,transition:"opacity .3s ease" }}>
              <div style={{ padding:24,maxWidth:1600,margin:"0 auto" }}>
                <Outlet/>
              </div>
            </div>
          </main>

          <footer style={{ height:36,background:"#080808",borderTop:"1px solid #111",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",flexShrink:0 }}>
            <span style={{ fontSize:11,color:"#242424" }}>© {new Date().getFullYear()} Salok University · All rights reserved</span>
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <span style={{ width:6,height:6,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 6px rgba(34,197,94,.5)",display:"inline-block" }}/>
              <span style={{ fontSize:11,color:"#242424" }}>v1.0.0</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;