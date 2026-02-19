import { useState, useMemo, useEffect } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const EVENT_COLORS = {
  lecture:  { bg: "bg-orange-500/20",  text: "text-orange-300",  dot: "bg-orange-400",  badge: "bg-orange-500/25 text-orange-200" },
  exam:     { bg: "bg-red-600/20",     text: "text-red-300",     dot: "bg-red-400",     badge: "bg-red-600/25 text-red-200"     },
  holiday:  { bg: "bg-amber-500/20",   text: "text-amber-300",   dot: "bg-amber-400",   badge: "bg-amber-500/25 text-amber-200" },
  deadline: { bg: "bg-orange-700/25",  text: "text-orange-200",  dot: "bg-orange-600",  badge: "bg-orange-700/30 text-orange-100"},
  event:    { bg: "bg-yellow-500/15",  text: "text-yellow-300",  dot: "bg-yellow-400",  badge: "bg-yellow-500/20 text-yellow-200"},
};

const INITIAL_EVENTS = [
  { id: 1,  title: "Data Structures Lecture",  date: "2026-02-03", type: "lecture",  time: "9:00 AM",  desc: "Room 201 — Arrays & Linked Lists" },
  { id: 2,  title: "Mid-Term Examination",     date: "2026-02-10", type: "exam",     time: "10:00 AM", desc: "Hall A — All subjects" },
  { id: 3,  title: "University Foundation Day",date: "2026-02-15", type: "holiday",  time: "All Day",  desc: "Campus closed" },
  { id: 4,  title: "Project Submission",       date: "2026-02-18", type: "deadline", time: "11:59 PM", desc: "Submit via portal" },
  { id: 5,  title: "Tech Fest 2026",           date: "2026-02-20", type: "event",    time: "10:00 AM", desc: "Main Auditorium" },
  { id: 6,  title: "OS Lecture",               date: "2026-02-20", type: "lecture",  time: "2:00 PM",  desc: "Room 105 — Process Scheduling" },
  { id: 7,  title: "Assignment Deadline",      date: "2026-02-25", type: "deadline", time: "5:00 PM",  desc: "DBMS Assignment #3" },
  { id: 8,  title: "Guest Lecture — AI/ML",    date: "2026-02-27", type: "event",    time: "11:00 AM", desc: "Seminar Hall" },
  { id: 9,  title: "Network Lab Exam",         date: "2026-02-24", type: "exam",     time: "9:00 AM",  desc: "Lab 3 — Practical" },
  { id: 10, title: "Spring Break Begins",      date: "2026-03-05", type: "holiday",  time: "All Day",  desc: "Campus closed for a week" },
  { id: 11, title: "Algorithms Lecture",       date: "2026-03-10", type: "lecture",  time: "10:00 AM", desc: "Room 202 — Graph Algorithms" },
  { id: 12, title: "End-Term Examination",     date: "2026-03-20", type: "exam",     time: "9:00 AM",  desc: "Hall B — Final exams begin" },
];

const isSameDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth()    === b.getMonth()    &&
  a.getDate()     === b.getDate();

const fmtDate = (d) =>
  `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;

/* ── EventDot ── */
const EventDot = ({ type }) => (
  <span className={`inline-block w-1.5 h-1.5 rounded-full flex-shrink-0 ${EVENT_COLORS[type]?.dot ?? "bg-gray-400"}`} />
);

/* ── EventPill ── */
const EventPill = ({ event, onClick }) => {
  const c = EVENT_COLORS[event.type];
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(event); }}
      className={`w-full text-left text-[10px] px-1.5 py-0.5 rounded truncate font-semibold tracking-wide ${c.bg} ${c.text} hover:brightness-125 transition-all`}
    >
      {event.title}
    </button>
  );
};

/* ── Event Form Modal (Add / Edit) ── */
const EventFormModal = ({ initialDate, event, onSave, onClose }) => {
  const isEdit = !!event;
  const [form, setForm] = useState({
    title: event?.title || "",
    date:  event?.date  || (initialDate ? fmtDate(initialDate) : fmtDate(new Date())),
    type:  event?.type  || "lecture",
    time:  event?.time  || "",
    desc:  event?.desc  || "",
  });
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.title.trim()) { setError("Title zaroori hai!"); return; }
    if (!form.date)          { setError("Date select karo!"); return; }
    onSave({ ...form, title: form.title.trim(), id: event?.id ?? Date.now() });
  };

  const inp = "w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/60 transition-all";

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
      <div onClick={e => e.stopPropagation()} className="relative w-[390px] rounded-2xl border border-orange-500/30 bg-[#0e0e0e] shadow-[0_0_60px_rgba(249,115,22,0.18)] p-6">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-black text-base tracking-tight">
            {isEdit ? "✏️ Event Edit Karo" : "➕ Naya Event Add Karo"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition text-xl leading-none">✕</button>
        </div>

        <div className="space-y-3">
          {/* Title */}
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Title *</label>
            <input
              className={inp}
              placeholder="Event ka naam likhein..."
              value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              autoFocus
            />
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Date *</label>
              <input
                type="date"
                className={inp + " [color-scheme:dark]"}
                value={form.date}
                onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Time</label>
              <input
                className={inp}
                placeholder="9:00 AM"
                value={form.time}
                onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
              />
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">Type *</label>
            <div className="grid grid-cols-3 gap-1.5">
              {Object.keys(EVENT_COLORS).map(t => {
                const c = EVENT_COLORS[t];
                const active = form.type === t;
                return (
                  <button
                    key={t}
                    onClick={() => setForm(f => ({ ...f, type: t }))}
                    className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[11px] font-bold capitalize border transition-all ${
                      active
                        ? `${c.bg} ${c.text} border-orange-500/50`
                        : "bg-[#1a1a1a] text-gray-500 border-white/8 hover:border-white/20"
                    }`}
                  >
                    <EventDot type={t} /> {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Description</label>
            <textarea
              className={inp + " resize-none h-16 leading-relaxed"}
              placeholder="Kuch aur details..."
              value={form.desc}
              onChange={e => setForm(f => ({ ...f, desc: e.target.value }))}
            />
          </div>

          {error && <p className="text-red-400 text-xs font-semibold">⚠️ {error}</p>}

          <div className="flex gap-2 pt-1">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border border-white/10 text-gray-400 text-sm font-semibold hover:bg-white/5 transition-all"
            >Cancel</button>
            <button
              onClick={handleSubmit}
              className="flex-1 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >{isEdit ? "Update Karo" : "Save Karo"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Event View Modal ── */
const EventViewModal = ({ event, onClose, onEdit, onDelete }) => {
  if (!event) return null;
  const c = EVENT_COLORS[event.type];
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div onClick={e => e.stopPropagation()} className="relative w-[340px] rounded-2xl border border-orange-500/30 bg-[#0e0e0e] shadow-[0_0_60px_rgba(249,115,22,0.15)] p-6">
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        <div className="flex items-start justify-between mb-3">
          <span className={`inline-block text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full ${c.badge}`}>
            {event.type}
          </span>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition text-xl leading-none">✕</button>
        </div>

        <h2 className="text-white text-lg font-bold leading-snug mb-3">{event.title}</h2>

        <div className="space-y-2 text-sm mb-5">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-orange-500">📅</span>
            <span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-orange-500">🕐</span>
              <span>{event.time}</span>
            </div>
          )}
          {event.desc && (
            <div className="mt-2 p-3 rounded-xl bg-white/5 border border-white/5 text-gray-300 text-xs leading-relaxed">
              {event.desc}
            </div>
          )}
        </div>

        {confirmDelete ? (
          <div>
            <p className="text-red-400 text-xs font-semibold text-center mb-3">⚠️ Pakka delete karna hai?</p>
            <div className="flex gap-2">
              <button onClick={() => setConfirmDelete(false)} className="flex-1 py-2 rounded-xl border border-white/10 text-gray-400 text-sm font-semibold hover:bg-white/5 transition-all">Nahi</button>
              <button onClick={() => onDelete(event.id)} className="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold transition-all">Haan, Delete</button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => setConfirmDelete(true)} className="flex-1 py-2 rounded-xl border border-red-500/30 text-red-400 text-sm font-semibold hover:bg-red-500/10 transition-all">🗑 Delete</button>
            <button onClick={() => onEdit(event)} className="flex-1 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]">✏️ Edit</button>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Toast ── */
const Toast = ({ toast }) => {
  if (!toast) return null;
  const isDelete = toast.type === "delete";
  return (
    <div className={`fixed bottom-6 right-6 z-[100] px-4 py-3 rounded-xl bg-[#111] border text-sm font-semibold shadow-xl transition-all ${
      isDelete ? "border-red-500/40 text-red-300" : "border-orange-500/40 text-orange-300"
    }`}>
      {toast.msg}
    </div>
  );
};

/* ── Main Component ── */
const CalendarView = () => {
  const today = new Date();

  const [events,       setEvents]       = useState(INITIAL_EVENTS);
  const [viewDate,     setViewDate]     = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDay,  setSelectedDay]  = useState(today);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewModal,    setViewModal]    = useState(null);
  const [formModal,    setFormModal]    = useState(null);
  const [toast,        setToast]        = useState(null);
  const [searchQ,      setSearchQ]      = useState("");

  // Toast helper
  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  const year  = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));
  const goToday   = () => { setViewDate(new Date(today.getFullYear(), today.getMonth(), 1)); setSelectedDay(today); };

  /* CRUD */
  const saveEvent = (data) => {
    if (formModal?.mode === "edit") {
      setEvents(ev => ev.map(e => e.id === data.id ? data : e));
      showToast("✅ Event update ho gaya!");
    } else {
      setEvents(ev => [...ev, data]);
      showToast("✅ Naya event add ho gaya!");
    }
    setFormModal(null);
    setViewModal(null);
  };

  const deleteEvent = (id) => {
    setEvents(ev => ev.filter(e => e.id !== id));
    setViewModal(null);
    showToast("🗑 Event delete ho gaya", "delete");
  };

  const openEdit = (event) => {
    setViewModal(null);
    setFormModal({ mode: "edit", event });
  };

  /* Calendar grid */
  const calendarDays = useMemo(() => {
    const firstDay      = new Date(year, month, 1).getDay();
    const daysInMonth   = new Date(year, month + 1, 0).getDate();
    const daysInPrevMon = new Date(year, month, 0).getDate();
    const cells = [];
    for (let i = firstDay - 1; i >= 0; i--)
      cells.push({ date: new Date(year, month - 1, daysInPrevMon - i), outside: true });
    for (let d = 1; d <= daysInMonth; d++)
      cells.push({ date: new Date(year, month, d), outside: false });
    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d++)
      cells.push({ date: new Date(year, month + 1, d), outside: true });
    return cells;
  }, [year, month]);

  const filteredEvents = useMemo(() =>
    events.filter(e =>
      (activeFilter === "all" || e.type === activeFilter) &&
      (searchQ === "" ||
        e.title.toLowerCase().includes(searchQ.toLowerCase()) ||
        e.desc?.toLowerCase().includes(searchQ.toLowerCase()))
    ), [events, activeFilter, searchQ]);

  const getEventsForDate = (date) =>
    filteredEvents.filter(e => e.date === fmtDate(date));

  const selectedEvents = getEventsForDate(selectedDay);

  const upcomingEvents = useMemo(() => {
    const now = fmtDate(today);
    return [...filteredEvents]
      .filter(e => e.date >= now)
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, 5);
  }, [filteredEvents]);

  const stats = useMemo(() => {
    const counts = {};
    Object.keys(EVENT_COLORS).forEach(t => { counts[t] = events.filter(e => e.type === t).length; });
    return counts;
  }, [events]);

  return (
    <>
      {viewModal && (
        <EventViewModal event={viewModal} onClose={() => setViewModal(null)} onEdit={openEdit} onDelete={deleteEvent} />
      )}
      {formModal && (
        <EventFormModal initialDate={formModal.date} event={formModal.event} onSave={saveEvent} onClose={() => setFormModal(null)} />
      )}
      <Toast toast={toast} />

      <div className="min-h-screen bg-[#080808] text-white font-sans p-4 md:p-6">

        {/* ── Header ── */}
        <div className="flex flex-wrap items-center gap-3 justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <button onClick={prevMonth} className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all flex items-center justify-center text-gray-400 hover:text-orange-400">‹</button>
              <button onClick={nextMonth} className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 transition-all flex items-center justify-center text-gray-400 hover:text-orange-400">›</button>
            </div>
            <h1 className="text-2xl font-black tracking-tight">
              {MONTHS[month]} <span className="text-orange-500">{year}</span>
            </h1>
          </div>

          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-xs">🔍</span>
              <input
                className="bg-[#141414] border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 w-36 transition-all"
                placeholder="Search events..."
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
              />
              {searchQ && (
                <button onClick={() => setSearchQ("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white text-xs">✕</button>
              )}
            </div>
            <button onClick={goToday} className="text-xs px-3 py-2 rounded-lg border border-white/10 text-gray-400 hover:border-orange-500/30 hover:text-orange-400 transition-all">Today</button>
            <button
              onClick={() => setFormModal({ mode: "add", date: selectedDay })}
              className="text-xs px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >＋ Add Event</button>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="flex flex-wrap gap-2 mb-3">
          {Object.entries(stats).map(([type, count]) => {
            const c = EVENT_COLORS[type];
            return (
              <button
                key={type}
                onClick={() => setActiveFilter(activeFilter === type ? "all" : type)}
                className={`flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full font-bold transition-all ${c.bg} ${c.text} hover:brightness-125`}
              >
                <EventDot type={type} />{count} {type}s
              </button>
            );
          })}
          <div className="flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-gray-500 font-bold">
            📋 {events.length} total
          </div>
        </div>

        {/* ── Filter Pills ── */}
        <div className="flex flex-wrap gap-2 mb-5">
          {["all", ...Object.keys(EVENT_COLORS)].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold capitalize tracking-wide transition-all border ${
                activeFilter === f
                  ? "bg-orange-600 border-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]"
                  : "bg-[#141414] border-white/10 text-gray-400 hover:border-orange-500/30 hover:text-orange-400"
              }`}
            >
              {f !== "all" && <EventDot type={f} />}
              {f}
            </button>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row gap-4">
          {/* ── Calendar Grid ── */}
          <div className="flex-1 rounded-2xl border border-white/8 bg-[#0d0d0d] overflow-hidden shadow-xl">
            {/* Day labels */}
            <div className="grid grid-cols-7 border-b border-white/8">
              {DAYS.map((d) => (
                <div key={d} className="py-3 text-center text-[11px] font-bold uppercase tracking-widest text-gray-600">{d}</div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7">
              {calendarDays.map(({ date, outside }, idx) => {
                const dayEvents  = getEventsForDate(date);
                const isToday    = isSameDay(date, today);
                const isSelected = isSameDay(date, selectedDay);
                const isWeekend  = date.getDay() === 0 || date.getDay() === 6;

                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedDay(date)}
                    onDoubleClick={() => !outside && setFormModal({ mode: "add", date })}
                    className={`min-h-[80px] p-1.5 cursor-pointer transition-all border-r border-b border-white/5 relative group ${
                      isSelected ? "bg-orange-500/8" : "hover:bg-white/3"
                    } ${outside ? "opacity-25 pointer-events-none" : ""}`}
                  >
                    {isSelected && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-orange-500 rounded-r" />}

                    <div className="flex items-center justify-between mb-1">
                      {/* Quick add button on hover */}
                      <button
                        onClick={e => { e.stopPropagation(); setFormModal({ mode: "add", date }); }}
                        className="opacity-0 group-hover:opacity-100 text-[11px] text-orange-500 hover:text-orange-300 transition-all font-black"
                      >＋</button>
                      <span className={`text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold transition-all ${
                        isToday
                          ? "bg-orange-600 text-white shadow-[0_0_10px_rgba(249,115,22,0.6)]"
                          : isSelected
                          ? "text-orange-400"
                          : isWeekend
                          ? "text-gray-500"
                          : "text-gray-300"
                      }`}>
                        {date.getDate()}
                      </span>
                    </div>

                    <div className="space-y-0.5">
                      {dayEvents.slice(0, 2).map((ev) => (
                        <EventPill key={ev.id} event={ev} onClick={setViewModal} />
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-[9px] text-orange-400/70 pl-1 font-bold">+{dayEvents.length - 2} more</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="xl:w-64 flex flex-col gap-4">

            {/* Selected day */}
            <div className="rounded-2xl border border-white/8 bg-[#0d0d0d] p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-black text-white tracking-tight">
                  {isSameDay(selectedDay, today)
                    ? <span className="text-orange-500">Today</span>
                    : <>{MONTHS[selectedDay.getMonth()].slice(0,3)} <span className="text-orange-500">{selectedDay.getDate()}</span></>
                  }
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-bold">{selectedEvents.length}</span>
                  <button
                    onClick={() => setFormModal({ mode: "add", date: selectedDay })}
                    className="text-[10px] w-6 h-6 flex items-center justify-center rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold transition-all"
                    title="Add event"
                  >＋</button>
                </div>
              </div>

              {selectedEvents.length === 0 ? (
                <div className="text-center py-5">
                  <div className="text-gray-600 text-xs mb-2">Koi event nahi</div>
                  <button onClick={() => setFormModal({ mode: "add", date: selectedDay })} className="text-[10px] text-orange-500 hover:text-orange-400 font-bold transition-all">+ Add karo</button>
                </div>
              ) : (
                <div className="space-y-2">
                  {selectedEvents.map((ev) => {
                    const c = EVENT_COLORS[ev.type];
                    return (
                      <button key={ev.id} onClick={() => setViewModal(ev)} className={`w-full text-left p-3 rounded-xl border border-white/5 ${c.bg} hover:brightness-125 transition-all group`}>
                        <div className="flex items-start justify-between gap-1">
                          <div className="flex-1 min-w-0">
                            <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 ${c.text}`}>{ev.time}</div>
                            <div className="text-white text-xs font-semibold leading-snug truncate">{ev.title}</div>
                            {ev.desc && <div className="text-gray-500 text-[10px] mt-0.5 leading-relaxed truncate">{ev.desc}</div>}
                          </div>
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all">
                            <button onClick={e => { e.stopPropagation(); openEdit(ev); }} className="text-[11px] hover:text-orange-400 text-gray-500 transition-colors">✏️</button>
                            <button onClick={e => { e.stopPropagation(); deleteEvent(ev.id); }} className="text-[11px] hover:text-red-400 text-gray-500 transition-colors">🗑</button>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Upcoming */}
            <div className="rounded-2xl border border-white/8 bg-[#0d0d0d] p-4 flex-1">
              <h3 className="text-sm font-black mb-3"><span className="text-orange-500">Upcoming</span></h3>
              {upcomingEvents.length === 0 ? (
                <div className="text-center py-6 text-gray-600 text-xs">Koi upcoming event nahi</div>
              ) : (
                <div className="space-y-3">
                  {upcomingEvents.map((ev) => {
                    const c = EVENT_COLORS[ev.type];
                    const d = new Date(ev.date + "T00:00:00");
                    return (
                      <button key={ev.id} onClick={() => setViewModal(ev)} className="w-full text-left flex items-start gap-3 group">
                        <div className={`flex-shrink-0 w-10 text-center rounded-lg py-1 ${c.bg} border border-white/5`}>
                          <div className={`text-[9px] font-bold uppercase tracking-widest ${c.text}`}>{MONTHS[d.getMonth()].slice(0,3)}</div>
                          <div className="text-white text-sm font-black leading-none">{d.getDate()}</div>
                        </div>
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="text-xs font-semibold text-gray-200 group-hover:text-orange-400 transition-colors truncate">{ev.title}</div>
                          <div className="text-[10px] text-gray-600 mt-0.5">{ev.time}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Tip */}
            <div className="rounded-xl border border-white/5 bg-[#0d0d0d] p-3 text-[10px] text-gray-600 leading-relaxed">
              💡 <span className="text-orange-400 font-bold">Double-click</span> kisi bhi date pe event add karne ke liye · <span className="text-orange-400 font-bold">Hover</span> karo ＋ button ke liye
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarView;