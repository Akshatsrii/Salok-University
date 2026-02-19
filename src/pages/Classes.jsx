import { useState, useMemo } from "react";

/* ── Icons ─────────────────────────────────────────── */
const Icon = ({ d, d2, size = "4" }) => (
  <svg className={`w-${size} h-${size}`} fill="none" stroke="currentColor"
    viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />{d2 && <path d={d2} />}
  </svg>
);
const ICONS = {
  plus:     <Icon d="M12 4v16m8-8H4" />,
  search:   <Icon d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  filter:   <Icon d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />,
  grid:     <Icon d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />,
  list:     <Icon d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
  students: <Icon d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  clock:    <Icon d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  calendar: <Icon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  book:     <Icon d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
  edit:     <Icon d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
  trash:    <Icon d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />,
  dots:     <Icon d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />,
  arrow:    <Icon d="M17 8l4 4m0 0l-4 4m4-4H3" />,
  chart:    <Icon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  check:    <Icon d="M5 13l4 4L19 7" />,
  close:    <Icon d="M6 18L18 6M6 6l12 12" />,
};

/* ── Data ───────────────────────────────────────────── */
const CLASSES = [
  {
    id: 1, code: "CS-201", name: "Data Structures & Algorithms",
    instructor: "Dr. Riya Sharma",   emoji: "🧠", theme: "orange",
    students: 128, credits: 4, classes: 36, completion: 72,
    semester: 5, schedule: "Mon · Wed · Fri", time: "9:00 – 10:00 AM",
    room: "Room 201", status: "active", tags: ["Arrays","Graphs","DP"],
    nextClass: "Tomorrow, 9 AM",
  },
  {
    id: 2, code: "CS-301", name: "Operating Systems",
    instructor: "Prof. Arjun Mehta",  emoji: "💻", theme: "orange",
    students: 96,  credits: 3, classes: 28, completion: 45,
    semester: 5, schedule: "Tue · Thu", time: "11:00 AM – 12:30 PM",
    room: "Room 105", status: "active", tags: ["Processes","Memory"],
    nextClass: "Today, 11 AM",
  },
  {
    id: 3, code: "CS-302", name: "Database Management",
    instructor: "Dr. Priya Nair",    emoji: "🗄️", theme: "orange",
    students: 110, credits: 4, classes: 32, completion: 88,
    semester: 5, schedule: "Mon · Wed", time: "2:00 – 3:00 PM",
    room: "Lab 3", status: "active", tags: ["SQL","NoSQL"],
    nextClass: "Mon, 2 PM",
  },
  {
    id: 4, code: "CS-401", name: "Machine Learning",
    instructor: "Dr. Riya Sharma",   emoji: "🤖", theme: "orange",
    students: 64,  credits: 4, classes: 30, completion: 20,
    semester: 7, schedule: "Friday", time: "10:00 AM – 1:00 PM",
    room: "Seminar Hall", status: "upcoming", tags: ["Python","Neural Nets"],
    nextClass: "Fri, 10 AM",
  },
  {
    id: 5, code: "CS-303", name: "Computer Networks",
    instructor: "Prof. Suresh Kumar", emoji: "🌐", theme: "orange",
    students: 88,  credits: 3, classes: 24, completion: 100,
    semester: 5, schedule: "Tue · Thu", time: "3:00 – 4:00 PM",
    room: "Room 303", status: "completed", tags: ["TCP/IP","HTTP"],
    nextClass: "—",
  },
  {
    id: 6, code: "MATH-201", name: "Discrete Mathematics",
    instructor: "Dr. Kavita Joshi",  emoji: "📐", theme: "orange",
    students: 140, credits: 3, classes: 30, completion: 60,
    semester: 3, schedule: "Mon · Wed · Fri", time: "8:00 – 9:00 AM",
    room: "Room 102", status: "active", tags: ["Logic","Sets","Graphs"],
    nextClass: "Tomorrow, 8 AM",
  },
];

/* ── Single unified black + dark-orange theme ── */
const THEMES = {
  orange: {
    accent:   "via-orange-600/50",
    glow:     "bg-orange-700/20",
    glow2:    "bg-orange-600/10",
    gradient: "from-orange-950/50 via-[#110a00] to-[#000000]",
    icon:     "bg-orange-500/10 border-orange-500/20 text-orange-500",
    badge:    "bg-orange-500/10 text-orange-500 border-orange-500/20",
    text:     "text-orange-500",
    progress: "from-orange-700 to-orange-500",
    border:   "hover:border-orange-600/40",
    shadow:   "shadow-orange-950/40",
  },
};

const STATUS_CONFIG = {
  active:    { dot: "bg-emerald-500 animate-pulse", label: "Active",    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  upcoming:  { dot: "bg-orange-500",                label: "Upcoming",  badge: "bg-orange-500/10 text-orange-500 border-orange-500/20"   },
  completed: { dot: "bg-zinc-600",                  label: "Completed", badge: "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"         },
};

const SUMMARY_STATS = [
  { icon: ICONS.book,     label: "Total Classes",    value: "6",   sub: "This semester"    },
  { icon: ICONS.students, label: "Total Students",   value: "626", sub: "Across all classes"},
  { icon: ICONS.check,    label: "Completed",        value: "1",   sub: "1 remaining"      },
  { icon: ICONS.chart,    label: "Avg Completion",   value: "63%", sub: "+8% vs last sem"  },
];

/* ── Progress Bar ───────────────────────────────────── */
const ProgressBar = ({ value, theme }) => (
  <div className="w-full bg-white/[0.05] rounded-full h-1.5 overflow-hidden">
    <div
      className={`h-full rounded-full bg-gradient-to-r ${theme.progress} transition-all duration-700`}
      style={{ width: `${Math.min(100, value)}%` }}
    />
  </div>
);

/* ── Add Class Modal ────────────────────────────────── */
const AddClassModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: "", code: "", instructor: "", room: "", schedule: "", time: "", credits: "", semester: "" });
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-[#0d0d0d] border border-orange-500/15 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent" />
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]">
          <div>
            <h3 className="text-white font-bold text-sm">Add New Class</h3>
            <p className="text-zinc-600 text-xs mt-0.5">Fill in the class details below</p>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-zinc-600 hover:text-white hover:bg-white/[0.07] transition">{ICONS.close}</button>
        </div>
        <div className="px-6 py-5 space-y-3 max-h-[60vh] overflow-y-auto">
          {[
            { key: "name",       placeholder: "Class name",          label: "Subject Name *" },
            { key: "code",       placeholder: "e.g. CS-201",         label: "Subject Code *" },
            { key: "instructor", placeholder: "e.g. Dr. Riya Sharma",label: "Instructor"     },
            { key: "room",       placeholder: "e.g. Room 201",       label: "Room / Venue"   },
            { key: "schedule",   placeholder: "e.g. Mon · Wed · Fri",label: "Schedule"       },
            { key: "time",       placeholder: "e.g. 9:00 – 10:00 AM",label: "Time"           },
          ].map(({ key, placeholder, label }) => (
            <div key={key}>
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 mb-1 block">{label}</label>
              <input
                value={form[key]} onChange={e => set(key, e.target.value)}
                placeholder={placeholder}
                className="w-full px-3 py-2.5 bg-white/[0.03] border border-white/[0.06] focus:border-orange-600/50 rounded-xl text-white text-sm placeholder-zinc-700 outline-none transition"
              />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-3">
            {[
              { key: "credits",  label: "Credits",  placeholder: "e.g. 4" },
              { key: "semester", label: "Semester", placeholder: "e.g. 5" },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 mb-1 block">{label}</label>
                <input
                  value={form[key]} onChange={e => set(key, e.target.value)}
                  placeholder={placeholder}
                  className="w-full px-3 py-2.5 bg-white/[0.03] border border-white/[0.06] focus:border-orange-600/50 rounded-xl text-white text-sm placeholder-zinc-700 outline-none transition"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.05] bg-white/[0.01]">
          <button onClick={onClose} className="px-4 py-2 text-sm text-zinc-500 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] rounded-xl transition">Cancel</button>
          <button onClick={onClose} className="px-5 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 border border-orange-600 rounded-xl shadow-lg shadow-orange-950/40 transition active:scale-95">Add Class</button>
        </div>
      </div>
    </div>
  );
};

/* ── Class Card (Grid) ──────────────────────────────── */
const ClassCard = ({ cls, onEdit, onDelete }) => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = THEMES.orange;
  const s = STATUS_CONFIG[cls.status] ?? STATUS_CONFIG.active;
  const completionColor = cls.completion >= 80 ? "text-emerald-400" : cls.completion >= 50 ? "text-orange-500" : "text-red-500";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setMenuOpen(false); }}
      className={`relative bg-[#0d0d0d] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 ${t.border} ${hovered ? `shadow-xl ${t.shadow} -translate-y-0.5` : ""}`}
    >
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${t.accent} to-transparent z-10`} />

      {/* Cover */}
      <div className={`relative h-20 bg-gradient-to-br ${t.gradient} overflow-hidden`}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(234,88,12,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(234,88,12,0.3) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className={`absolute -top-4 -left-4 w-24 h-24 ${t.glow} rounded-full blur-2xl`} />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center text-lg ${t.icon}`}>{cls.emoji}</div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${t.badge}`}>{cls.code}</span>
        </div>

        {/* Menu */}
        <div className="absolute top-2 right-2">
          <button onClick={() => setMenuOpen(o => !o)} className="p-1.5 rounded-lg bg-black/40 border border-white/[0.08] text-zinc-500 hover:text-white transition">{ICONS.dots}</button>
          {menuOpen && (
            <div className="absolute right-0 top-8 w-36 bg-[#111] border border-white/[0.08] rounded-xl shadow-xl z-20 overflow-hidden">
              <button onClick={() => { onEdit(cls); setMenuOpen(false); }} className="w-full flex items-center gap-2 px-3 py-2.5 text-xs text-zinc-400 hover:bg-white/[0.05] hover:text-white transition">
                <span className="text-zinc-600">{ICONS.edit}</span> Edit Class
              </button>
              <button onClick={() => { onDelete(cls.id); setMenuOpen(false); }} className="w-full flex items-center gap-2 px-3 py-2.5 text-xs text-red-500 hover:bg-red-500/10 transition">
                <span>{ICONS.trash}</span> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="px-4 pt-4 pb-3 space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-white font-bold text-[13.5px] leading-snug tracking-tight">{cls.name}</h3>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border shrink-0 ${t.badge}`}>Sem {cls.semester}</span>
          </div>
          <p className={`text-[11.5px] font-medium mt-0.5 ${t.text} opacity-80`}>{cls.instructor}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { icon: ICONS.students, val: cls.students, lbl: "Students" },
            { icon: ICONS.book,     val: cls.credits,  lbl: "Credits"  },
            { icon: ICONS.calendar, val: cls.classes,  lbl: "Classes"  },
          ].map(({ icon, val, lbl }) => (
            <div key={lbl} className="bg-white/[0.02] border border-white/[0.04] rounded-xl px-2 py-2 flex flex-col items-center gap-0.5">
              <span className={`${t.text} opacity-70`}>{icon}</span>
              <span className="text-white text-[13px] font-bold tabular-nums">{val}</span>
              <span className="text-zinc-700 text-[9px] uppercase tracking-wide font-semibold">{lbl}</span>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-zinc-600 text-[10.5px] font-semibold uppercase tracking-wide">Completion</span>
            <span className={`text-[11px] font-bold tabular-nums ${completionColor}`}>{cls.completion}%</span>
          </div>
          <ProgressBar value={cls.completion} theme={t} />
        </div>

        {/* Schedule + Room */}
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-zinc-600 text-[11px]">
            <span className="text-zinc-700">{ICONS.calendar}</span> {cls.schedule} · {cls.time}
          </div>
          <div className="flex items-center gap-1.5 text-zinc-600 text-[11px]">
            <span className="text-zinc-700">{ICONS.book}</span> {cls.room}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {cls.tags.map(tag => (
            <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-lg bg-orange-500/5 border border-orange-500/15 text-zinc-500">{tag}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-white/[0.04] bg-white/[0.01] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
          <span className="text-zinc-600 text-[11px] font-medium">{s.label}</span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="text-zinc-700">{ICONS.clock}</span>
          <span className="text-zinc-600">{cls.nextClass}</span>
        </div>
      </div>
    </div>
  );
};

/* ── Class Row (List) ───────────────────────────────── */
const ClassRow = ({ cls, onEdit, onDelete }) => {
  const t = THEMES.orange;
  const s = STATUS_CONFIG[cls.status] ?? STATUS_CONFIG.active;
  return (
    <div className={`group flex items-center gap-4 px-5 py-3.5 bg-[#0d0d0d] border border-white/[0.05] rounded-xl hover:border-orange-600/25 transition-all duration-200`}>
      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg shrink-0 ${t.icon}`}>{cls.emoji}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold text-[13px] truncate">{cls.name}</span>
          <span className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded-md border shrink-0 ${t.badge}`}>{cls.code}</span>
        </div>
        <p className={`text-[11px] ${t.text} opacity-70 truncate`}>{cls.instructor} · {cls.room}</p>
      </div>
      <div className="hidden md:flex items-center gap-1.5 shrink-0">
        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
        <span className={`text-[10.5px] font-semibold px-2 py-0.5 rounded-full border ${s.badge}`}>{s.label}</span>
      </div>
      <div className="hidden lg:flex items-center gap-4 text-[11.5px] text-zinc-600 shrink-0">
        <span className="flex items-center gap-1"><span className="text-zinc-700">{ICONS.students}</span>{cls.students}</span>
        <span className="flex items-center gap-1"><span className="text-zinc-700">{ICONS.clock}</span>{cls.schedule}</span>
      </div>
      <div className="hidden xl:flex items-center gap-2 w-24 shrink-0">
        <ProgressBar value={cls.completion} theme={t} />
        <span className="text-[11px] text-zinc-600 tabular-nums">{cls.completion}%</span>
      </div>
      <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition">
        <button onClick={() => onEdit(cls)} className="p-1.5 rounded-lg text-zinc-600 hover:text-orange-500 hover:bg-orange-500/10 transition">{ICONS.edit}</button>
        <button onClick={() => onDelete(cls.id)} className="p-1.5 rounded-lg text-zinc-600 hover:text-red-500 hover:bg-red-500/10 transition">{ICONS.trash}</button>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════════ */
const Classes = () => {
  const [classes,    setClasses]    = useState(CLASSES);
  const [search,     setSearch]     = useState("");
  const [filter,     setFilter]     = useState("all");
  const [viewMode,   setViewMode]   = useState("grid");
  const [modalOpen,  setModalOpen]  = useState(false);

  const filtered = useMemo(() => {
    return classes.filter(c => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.code.toLowerCase().includes(search.toLowerCase()) ||
        c.instructor.toLowerCase().includes(search.toLowerCase());
      const matchFilter = filter === "all" || c.status === filter;
      return matchSearch && matchFilter;
    });
  }, [classes, search, filter]);

  const handleDelete = (id) => setClasses(p => p.filter(c => c.id !== id));
  const handleEdit   = (cls) => console.log("Edit:", cls);

  return (
    <div className="space-y-6">

      {/* ── Page Header ── */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-white font-bold text-2xl tracking-tight">Classes</h1>
          <p className="text-zinc-600 text-sm mt-0.5">Manage and track all your classes</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-500 border border-orange-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-orange-950/40 transition-all duration-200 active:scale-95"
        >
          {ICONS.plus}
          Add Class
        </button>
      </div>

      {/* ── Summary Stats ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {SUMMARY_STATS.map((stat) => (
          <div key={stat.label} className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl px-4 py-4 flex items-center gap-3 hover:border-orange-600/25 transition-all duration-200">
            <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
              {stat.icon}
            </div>
            <div className="min-w-0">
              <p className="text-white font-bold text-lg leading-tight tabular-nums">{stat.value}</p>
              <p className="text-zinc-600 text-[10.5px] font-semibold truncate">{stat.label}</p>
              <p className="text-zinc-700 text-[10px] truncate">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Search */}
        <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] focus-within:border-orange-600/45 rounded-xl px-3 py-2.5 w-full sm:w-64 transition-all duration-200">
          <span className="text-zinc-700 shrink-0">{ICONS.search}</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search classes..."
            className="bg-transparent text-sm text-white placeholder-zinc-700 outline-none w-full"
          />
          {search && <button onClick={() => setSearch("")} className="text-zinc-700 hover:text-white transition text-xs">{ICONS.close}</button>}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Status filter */}
          {["all","active","upcoming","completed"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize transition-all duration-200 border ${
                filter === f
                  ? "bg-orange-600 border-orange-600 text-white shadow-lg shadow-orange-950/40"
                  : "bg-white/[0.03] border-white/[0.06] text-zinc-600 hover:text-white hover:bg-white/[0.07]"
              }`}
            >
              {f}
            </button>
          ))}

          {/* View toggle */}
          <div className="flex items-center bg-white/[0.03] border border-white/[0.06] rounded-xl p-1 gap-0.5">
            {[{ mode: "grid", icon: ICONS.grid }, { mode: "list", icon: ICONS.list }].map(({ mode, icon }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`p-1.5 rounded-lg transition-all duration-200 ${viewMode === mode ? "bg-orange-600 text-white" : "text-zinc-600 hover:text-white"}`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Results count ── */}
      <div className="flex items-center justify-between">
        <p className="text-zinc-700 text-xs font-medium">
          Showing <span className="text-white font-semibold">{filtered.length}</span> of <span className="text-white font-semibold">{classes.length}</span> classes
        </p>
        {search && (
          <button onClick={() => setSearch("")} className="text-orange-500 text-xs hover:text-orange-400 transition">Clear search</button>
        )}
      </div>

      {/* ── Content ── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-white/[0.02] border border-orange-500/15 rounded-2xl flex items-center justify-center text-3xl mb-4">📚</div>
          <p className="text-white font-semibold text-sm">No classes found</p>
          <p className="text-zinc-700 text-xs mt-1">Try adjusting your search or filter</p>
          <button onClick={() => { setSearch(""); setFilter("all"); }} className="mt-4 px-4 py-2 text-xs text-orange-500 bg-orange-500/10 border border-orange-500/20 rounded-xl hover:bg-orange-500/20 transition">
            Reset filters
          </button>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(cls => (
            <ClassCard key={cls.id} cls={cls} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(cls => (
            <ClassRow key={cls.id} cls={cls} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      )}

      {/* ── Add Modal ── */}
      <AddClassModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Classes;