import { useState } from "react";

const DAYS = [
  {
    day: "Day 1", label: "D1", author: "Riya Bansal", role: "Frontend",
    gradient: "from-pink-500 to-rose-500", dotColor: "bg-pink-400", border: "border-pink-500/30", glow: "shadow-pink-500/20",
    entries: [
      { icon: "🎨", title: "Home Page Design", desc: "Completed visual language, layout hierarchy & component structure" },
      { icon: "🚀", title: "Code Push", desc: "Successfully pushed home page code to repository" },
      { icon: "🔄", title: "Code Update", desc: "Refined and updated home page implementation" },
    ]
  },
  {
    day: "Day 2", label: "D2", author: "Riya Bansal", role: "Frontend",
    gradient: "from-fuchsia-500 to-pink-500", dotColor: "bg-fuchsia-400", border: "border-fuchsia-500/30", glow: "shadow-fuchsia-500/20",
    entries: [
      { icon: "🖥️", title: "Landing Page Update", desc: "Improved responsiveness, visual flow and overall layout polish" },
    ]
  },
  {
    day: "Day 3", label: "D3", author: "Riya Bansal", role: "Frontend",
    gradient: "from-purple-500 to-fuchsia-500", dotColor: "bg-purple-400", border: "border-purple-500/30", glow: "shadow-purple-500/20",
    entries: [
      { icon: "🔐", title: "Login Authentication UI", desc: "Auth flow design, form validation and error state handling in progress" },
    ]
  },
  {
    day: "Day 4", label: "D4", author: "Both", role: "Full-Stack",
    gradient: "from-violet-500 to-indigo-500", dotColor: "bg-violet-400", border: "border-violet-500/30", glow: "shadow-violet-500/20",
    entries: [
      { icon: "⚙️", title: "Auth Backend (Akshat)", desc: "Login & sign-in authentication backend — actively in development" },
      { icon: "🎓", title: "Dashboard Complete (Riya)", desc: "Home Page + Student Dashboard fully built and integrated" },
    ]
  },
  {
    day: "Day 5", label: "D5", author: "Akshat Srivastava", role: "Backend",
    gradient: "from-blue-500 to-indigo-500", dotColor: "bg-blue-400", border: "border-blue-500/30", glow: "shadow-blue-500/20",
    entries: [
      { icon: "📋", title: "Admission Portal", desc: "Frontend of admission portal — completed and shipped" },
      { icon: "⚙️", title: "Admission Backend", desc: "Backend infrastructure for admission portal in development" },
      { icon: "🛡️", title: "Admin — Admissions", desc: "Admin-side admission portal control panel — done" },
      { icon: "🔗", title: "Full Integration", desc: "All modules integrated end-to-end up to this milestone" },
      { icon: "👩‍🏫", title: "Admin — Faculty", desc: "Admin-side faculty management panel — completed" },
      { icon: "📊", title: "Faculty Dashboard", desc: "Faculty dashboard overview built and codebase optimized" },
      { icon: "🔒", title: "Role-Based Access", desc: "Quiet role system implemented in faculty module — enhanced" },
    ]
  },
];

const ROLES = [
  {
    icon: "👨‍🎓", title: "Student", color: "from-emerald-950/80 to-teal-950/50",
    border: "border-emerald-500/25", badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    accent: "text-emerald-400",
    features: ["Secure login & registration", "Blockchain-verified attendance", "Course & notice access", "Profile management"],
  },
  {
    icon: "👩‍🏫", title: "Teacher", color: "from-blue-950/80 to-indigo-950/50",
    border: "border-blue-500/25", badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    accent: "text-blue-400",
    features: ["Mark student attendance", "Upload course materials", "Manage assigned classes", "Attendance analytics"],
  },
  {
    icon: "🛡️", title: "Admin", color: "from-purple-950/80 to-violet-950/50",
    border: "border-purple-500/25", badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    accent: "text-purple-400",
    features: ["Manage students & teachers", "Approve registrations", "Department & course control", "Monitor system activity"],
  },
];

const TECH = [
  { name: "React", icon: "⚛️", cat: "Frontend", color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20" },
  { name: "Node.js", icon: "🟢", cat: "Backend", color: "text-green-300 bg-green-500/10 border-green-500/20" },
  { name: "MongoDB", icon: "🍃", cat: "Database", color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" },
  { name: "Blockchain", icon: "⛓️", cat: "Attendance", color: "text-violet-300 bg-violet-500/10 border-violet-500/20" },
  { name: "JWT Auth", icon: "🔑", cat: "Security", color: "text-orange-300 bg-orange-500/10 border-orange-500/20" },
  { name: "REST API", icon: "🔌", cat: "Integration", color: "text-pink-300 bg-pink-500/10 border-pink-500/20" },
];

const STATS = [
  { label: "Dev Days", value: "5+", icon: "📅", color: "from-pink-500/20 to-rose-500/10 border-pink-500/25" },
  { label: "Team Size", value: "2", icon: "👥", color: "from-blue-500/20 to-indigo-500/10 border-blue-500/25" },
  { label: "Modules", value: "8+", icon: "🧩", color: "from-violet-500/20 to-purple-500/10 border-violet-500/25" },
  { label: "Blockchain", value: "✓", icon: "⛓️", color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/25" },
];

const TABS = ["overview", "features", "timeline", "team"];

export default function SalokUniversity() {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedDay, setExpandedDay] = useState(4);

  return (
    <div className="min-h-screen bg-[#080b12] text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Grid bg */}
      <div className="fixed inset-0 pointer-events-none opacity-40"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.06) 0%, transparent 50%), linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "100% 100%, 100% 100%, 32px 32px, 32px 32px" }} />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#080b12]/90 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-black text-base shadow-lg shadow-indigo-500/30">S</div>
            <div>
              <div className="font-bold text-sm leading-tight">Salok University</div>
              <div className="text-[10px] text-gray-500 leading-tight">University Portal — Dev Showcase</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] text-emerald-400 font-medium">Active Development</span>
            </div>
            <div className="text-xs text-gray-500 bg-white/5 border border-white/8 rounded-lg px-2.5 py-1">v0.5.0</div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-5 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/8 text-indigo-300 text-xs font-medium mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          Full-Stack · Blockchain-Powered · University Management
        </div>
        <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-[1.1] tracking-tight">
          Digitalizing Academic
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Operations & Trust
          </span>
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto leading-relaxed mb-10">
          A centralized portal for students, teachers & administrators — with{" "}
          <span className="text-indigo-300 font-medium">blockchain-secured attendance</span>{" "}
          that cannot be tampered or forged.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3 max-w-xl mx-auto">
          {STATS.map((s) => (
            <div key={s.label} className={`rounded-2xl border bg-gradient-to-br ${s.color} p-3.5 backdrop-blur`}>
              <div className="text-xl mb-1">{s.icon}</div>
              <div className="text-xl font-black">{s.value}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Nav */}
      <div className="sticky top-[61px] z-40 border-b border-white/8 bg-[#080b12]/95 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-5">
          <div className="flex gap-0.5 py-1.5">
            {TABS.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${activeTab === tab ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/25" : "text-gray-500 hover:text-gray-300 hover:bg-white/4"}`}>
                {{ overview: "🏠 Overview", features: "✨ Features", timeline: "📅 Timeline", team: "👥 Team" }[tab]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-5 py-10">

        {/* ── OVERVIEW ── */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Blockchain banner */}
            <div className="relative overflow-hidden rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-950/70 via-purple-950/40 to-[#080b12]">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-indigo-500/6 blur-3xl pointer-events-none" />
              <div className="relative p-7 flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center flex-shrink-0 text-2xl">⛓️</div>
                <div>
                  <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1">Core Innovation</div>
                  <h3 className="text-lg font-bold text-white mb-2">Blockchain Attendance Integration</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
                    Every attendance record is cryptographically stored on-chain — making it impossible to manipulate. Students, teachers, and admins can verify any record with full transparency.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Tamper-proof", "Transparent", "Cryptographically Signed", "Real-time Verification"].map(t => (
                      <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Roles */}
            <div>
              <div className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-4">User Roles</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {ROLES.map(r => (
                  <div key={r.title} className={`rounded-2xl border ${r.border} bg-gradient-to-br ${r.color} p-5`}>
                    <div className="text-3xl mb-3">{r.icon}</div>
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="font-bold text-sm">{r.title}</h4>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${r.badge}`}>Role</span>
                    </div>
                    <ul className="space-y-1.5">
                      {r.features.map(f => (
                        <li key={f} className="text-xs text-gray-400 flex items-start gap-1.5">
                          <span className={`mt-0.5 ${r.accent}`}>▸</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <div className="text-[11px] text-gray-500 uppercase tracking-widest font-bold mb-4">Tech Stack</div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {TECH.map(t => (
                  <div key={t.name} className={`rounded-xl border p-3 text-center ${t.color}`}>
                    <div className="text-lg mb-1">{t.icon}</div>
                    <div className="text-xs font-bold">{t.name}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{t.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── FEATURES ── */}
        {activeTab === "features" && (
          <div className="space-y-5">
            {[
              { section: "🔐 Authentication & Security", border: "border-orange-500/20", accent: "text-orange-300", bg: "bg-orange-500/5",
                items: [
                  { icon: "🔑", name: "JWT Authentication", desc: "Stateless token-based auth across all roles" },
                  { icon: "🛡️", name: "Role-Based Access Control", desc: "Granular permissions per user type" },
                  { icon: "✅", name: "Admin-Approved Registration", desc: "No unauthorized user onboarding" },
                ]},
              { section: "📚 Academic Management", border: "border-blue-500/20", accent: "text-blue-300", bg: "bg-blue-500/5",
                items: [
                  { icon: "📖", name: "Course Management", desc: "Full CRUD for courses, materials & notices" },
                  { icon: "📋", name: "Admission Portal", desc: "End-to-end application & approval system" },
                  { icon: "🎓", name: "Student Dashboard", desc: "Centralized academic hub for students" },
                ]},
              { section: "⛓️ Blockchain Attendance", border: "border-violet-500/20", accent: "text-violet-300", bg: "bg-violet-500/5",
                items: [
                  { icon: "🔒", name: "Immutable Records", desc: "On-chain storage — zero tampering possible" },
                  { icon: "📊", name: "Analytics Dashboard", desc: "Real-time attendance stats for teachers" },
                  { icon: "🔍", name: "Verified Attendance View", desc: "Blockchain-confirmed data for students" },
                ]},
              { section: "🛡️ Admin Control Panel", border: "border-emerald-500/20", accent: "text-emerald-300", bg: "bg-emerald-500/5",
                items: [
                  { icon: "👩‍🏫", name: "Faculty Management", desc: "Full admin control over faculty accounts" },
                  { icon: "🏫", name: "Department Control", desc: "Manage departments, courses & permissions" },
                  { icon: "📡", name: "System Monitoring", desc: "Activity tracking across the entire platform" },
                ]},
            ].map(sec => (
              <div key={sec.section} className={`rounded-2xl border ${sec.border} ${sec.bg} p-5`}>
                <h4 className={`text-sm font-bold mb-4 ${sec.accent}`}>{sec.section}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {sec.items.map(item => (
                    <div key={item.name} className="flex items-start gap-3 bg-white/3 border border-white/6 rounded-xl p-3.5">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="text-xs font-semibold text-white mb-0.5">{item.name}</div>
                        <div className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TIMELINE ── */}
        {activeTab === "timeline" && (
          <div>
            <div className="text-center mb-9">
              <h3 className="text-xl font-black mb-1">Development Timeline</h3>
              <p className="text-sm text-gray-500">Click any day to expand the progress log</p>
            </div>
            <div className="relative">
              <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />
              <div className="space-y-3 pl-14">
                {DAYS.map((d, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-9 top-4 w-2.5 h-2.5 rounded-full ${d.dotColor} ring-4 ring-[#080b12]`} />
                    <div className={`rounded-2xl border transition-all cursor-pointer ${expandedDay === i ? `border-white/15 bg-white/4` : "border-white/8 bg-white/2 hover:bg-white/3 hover:border-white/12"}`}
                      onClick={() => setExpandedDay(expandedDay === i ? null : i)}>
                      <div className="flex items-center justify-between px-5 py-3.5">
                        <div className="flex items-center gap-3.5">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${d.gradient} flex items-center justify-center text-xs font-black shadow-lg`}>{d.label}</div>
                          <div>
                            <div className="text-sm font-bold text-white">{d.day}</div>
                            <div className="text-[11px] text-gray-500">
                              {d.author === "Both" ? "Riya Bansal · Akshat Srivastava" : d.author}
                              <span className="mx-1.5 text-gray-700">·</span>
                              <span className="text-gray-600">{d.role}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] text-gray-600 hidden sm:block">{d.entries.length} update{d.entries.length > 1 ? "s" : ""}</span>
                          <span className="text-gray-500 transition-transform text-lg" style={{ display: "inline-block", transform: expandedDay === i ? "rotate(90deg)" : "rotate(0deg)" }}>›</span>
                        </div>
                      </div>
                      {expandedDay === i && (
                        <div className="px-5 pb-4 border-t border-white/6 pt-3.5 space-y-2">
                          {d.entries.map((e, j) => (
                            <div key={j} className="flex items-start gap-3 bg-white/3 border border-white/6 rounded-xl px-3.5 py-2.5">
                              <span className="text-base flex-shrink-0 mt-0.5">{e.icon}</span>
                              <div>
                                <div className="text-xs font-semibold text-white">{e.title}</div>
                                <div className="text-[11px] text-gray-400 mt-0.5">{e.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {/* Future */}
                <div className="relative opacity-40">
                  <div className="absolute -left-9 top-4 w-2.5 h-2.5 rounded-full bg-gray-700 ring-4 ring-[#080b12]" />
                  <div className="rounded-2xl border border-dashed border-white/8 bg-transparent px-5 py-3.5 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl border border-dashed border-white/10 flex items-center justify-center text-gray-600 text-xs font-black">D6+</div>
                    <div>
                      <div className="text-sm font-bold text-gray-500">Day 6 & Beyond</div>
                      <div className="text-[11px] text-gray-600">More milestones incoming…</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TEAM ── */}
        {activeTab === "team" && (
          <div className="space-y-7">
            <div className="text-center mb-8">
              <h3 className="text-xl font-black mb-1">Meet the Team</h3>
              <p className="text-sm text-gray-500">The two builders behind Salok University</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {[
                {
                  name: "Riya Bansal", initials: "RB", role: "Frontend Developer",
                  gradient: "from-pink-500 to-rose-500", shadow: "shadow-pink-500/25",
                  badge: "Frontend Lead", badgeCls: "bg-pink-500/15 text-pink-300 border-pink-500/25",
                  border: "border-pink-500/15",
                  contributions: [
                    { icon: "🎨", text: "Home Page — design & implementation" },
                    { icon: "🖥️", text: "Landing Page — all iterations" },
                    { icon: "🔐", text: "Login Authentication UI" },
                    { icon: "🎓", text: "Student Dashboard — complete" },
                    { icon: "📐", text: "Frontend Architecture" },
                  ]
                },
                {
                  name: "Akshat Srivastava", initials: "AS", role: "Backend Developer",
                  gradient: "from-blue-500 to-indigo-500", shadow: "shadow-blue-500/25",
                  badge: "Backend Lead", badgeCls: "bg-blue-500/15 text-blue-300 border-blue-500/25",
                  border: "border-blue-500/15",
                  contributions: [
                    { icon: "⚙️", text: "Auth Backend — login & sign-in" },
                    { icon: "📋", text: "Admission Portal — end-to-end" },
                    { icon: "🛡️", text: "Admin Panel — Admissions" },
                    { icon: "👩‍🏫", text: "Faculty Management System" },
                    { icon: "🔗", text: "Full-stack Integration" },
                    { icon: "🔒", text: "Role-Based Access Control" },
                  ]
                },
              ].map(m => (
                <div key={m.name} className={`rounded-2xl border ${m.border} bg-white/2 p-6 hover:bg-white/3 transition-all`}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center text-lg font-black shadow-xl ${m.shadow} flex-shrink-0`}>{m.initials}</div>
                    <div>
                      <div className="font-bold text-sm">{m.name}</div>
                      <div className="text-xs text-gray-500">{m.role}</div>
                      <span className={`mt-1.5 inline-block text-[10px] px-2 py-0.5 rounded-full border font-bold ${m.badgeCls}`}>{m.badge}</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-3">Key Contributions</div>
                  <div className="space-y-1.5">
                    {m.contributions.map(c => (
                      <div key={c.text} className="flex items-center gap-2.5 text-xs text-gray-300 bg-white/3 border border-white/5 rounded-xl px-3 py-2">
                        <span>{c.icon}</span><span>{c.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto rounded-2xl border border-violet-500/15 bg-violet-950/15 p-5 text-center">
              <div className="text-2xl mb-2">🤝</div>
              <div className="font-bold text-sm text-violet-200 mb-1">Built Together</div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Riya and Akshat work in close sync — frontend and backend co-evolving together to deliver a robust, scalable, blockchain-powered university platform.
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-white/6 py-7 text-center">
        <div className="flex items-center justify-center gap-2 mb-1.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-black">S</div>
          <span className="text-sm font-bold text-gray-400">Salok University Portal</span>
        </div>
        <p className="text-xs text-gray-600">Riya Bansal · Akshat Srivastava · Full-Stack · Blockchain-Powered</p>
      </footer>
    </div>
  );
}
