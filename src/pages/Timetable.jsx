import { useState } from "react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const FULL_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const HOURS = Array.from({ length: 14 }, (_, i) => i + 7); // 7am - 8pm

const INITIAL_EVENTS = [
  { id: 1, day: 0, start: 9, duration: 1.5, title: "Team Standup", type: "meeting", color: "#f97316" },
  { id: 2, day: 0, start: 11, duration: 2, title: "Deep Work", type: "focus", color: "#3b82f6" },
  { id: 3, day: 1, start: 10, duration: 1, title: "Client Call", type: "meeting", color: "#f97316" },
  { id: 4, day: 1, start: 14, duration: 3, title: "Project Sprint", type: "focus", color: "#3b82f6" },
  { id: 5, day: 2, start: 9, duration: 2, title: "Design Review", type: "review", color: "#8b5cf6" },
  { id: 6, day: 2, start: 13, duration: 1, title: "Lunch & Learn", type: "social", color: "#10b981" },
  { id: 7, day: 3, start: 15, duration: 2, title: "Code Review", type: "review", color: "#8b5cf6" },
  { id: 8, day: 4, start: 10, duration: 1.5, title: "Weekly Wrap", type: "meeting", color: "#f97316" },
];

const TYPE_LABELS = { meeting: "Meeting", focus: "Focus", review: "Review", social: "Social" };
const TYPES = ["meeting", "focus", "review", "social"];
const TYPE_COLORS = { meeting: "#f97316", focus: "#3b82f6", review: "#8b5cf6", social: "#10b981" };

const formatHour = (h) => {
  const period = h >= 12 ? "PM" : "AM";
  const display = h > 12 ? h - 12 : h;
  return `${display}:00 ${period}`;
};

const Modal = ({ event, onClose, onSave, onDelete }) => {
  const [form, setForm] = useState(
    event || { title: "", day: 0, start: 9, duration: 1, type: "meeting" }
  );
  const isNew = !event;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="rounded-2xl p-6 w-full max-w-sm shadow-2xl"
        style={{
          background: "#1a1a1a",
          border: "1px solid #2a2a2a",
          animation: "modalIn 0.2s cubic-bezier(.34,1.56,.64,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-bold mb-4" style={{ color: "#f97316", fontFamily: "'DM Serif Display', serif" }}>
          {isNew ? "New Event" : "Edit Event"}
        </h3>

        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-1 block">Title</label>
            <input
              className="w-full rounded-lg px-3 py-2 text-white text-sm outline-none"
              style={{ background: "#252525", border: "1px solid #333" }}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Event title..."
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest mb-1 block">Day</label>
              <select
                className="w-full rounded-lg px-3 py-2 text-white text-sm outline-none"
                style={{ background: "#252525", border: "1px solid #333" }}
                value={form.day}
                onChange={(e) => setForm({ ...form, day: parseInt(e.target.value) })}
              >
                {FULL_DAYS.map((d, i) => <option key={i} value={i}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest mb-1 block">Type</label>
              <select
                className="w-full rounded-lg px-3 py-2 text-white text-sm outline-none"
                style={{ background: "#252525", border: "1px solid #333" }}
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value, color: TYPE_COLORS[e.target.value] })}
              >
                {TYPES.map((t) => <option key={t} value={t}>{TYPE_LABELS[t]}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest mb-1 block">Start Time</label>
              <select
                className="w-full rounded-lg px-3 py-2 text-white text-sm outline-none"
                style={{ background: "#252525", border: "1px solid #333" }}
                value={form.start}
                onChange={(e) => setForm({ ...form, start: parseFloat(e.target.value) })}
              >
                {HOURS.map((h) => <option key={h} value={h}>{formatHour(h)}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 uppercase tracking-widest mb-1 block">Duration (hrs)</label>
              <select
                className="w-full rounded-lg px-3 py-2 text-white text-sm outline-none"
                style={{ background: "#252525", border: "1px solid #333" }}
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: parseFloat(e.target.value) })}
              >
                {[0.5, 1, 1.5, 2, 2.5, 3, 4].map((d) => (
                  <option key={d} value={d}>{d}h</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-5">
          <button
            className="flex-1 py-2 rounded-xl text-sm font-semibold transition-all"
            style={{ background: "#f97316", color: "white" }}
            onClick={() => onSave(form)}
          >
            {isNew ? "Add Event" : "Save"}
          </button>
          {!isNew && (
            <button
              className="py-2 px-4 rounded-xl text-sm font-semibold transition-all"
              style={{ background: "#2a2a2a", color: "#ef4444" }}
              onClick={() => onDelete(event.id)}
            >
              Delete
            </button>
          )}
          <button
            className="py-2 px-4 rounded-xl text-sm font-semibold transition-all"
            style={{ background: "#2a2a2a", color: "#aaa" }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const Timetable = () => {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [modal, setModal] = useState(null); // null | { mode: 'new'|'edit', event? }
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  const CELL_HEIGHT = 64; // px per hour
  const GRID_START = 7; // 7am

  const getWeekDates = () => {
    const now = new Date();
    const day = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - (day === 0 ? 6 : day - 1) + currentWeekOffset * 7);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d;
    });
  };

  const weekDates = getWeekDates();
  const today = new Date();

  const filteredEvents = activeFilter ? events.filter((e) => e.type === activeFilter) : events;

  const handleSave = (form) => {
    if (form.id) {
      setEvents(events.map((e) => (e.id === form.id ? { ...form } : e)));
    } else {
      setEvents([...events, { ...form, id: Date.now(), color: TYPE_COLORS[form.type] }]);
    }
    setModal(null);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
    setModal(null);
  };

  const monthYear = weekDates[0].toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
        @keyframes modalIn { from { opacity:0; transform:scale(0.92) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }
        @keyframes eventSlide { from { opacity:0; transform:translateX(-6px); } to { opacity:1; transform:translateX(0); } }
        .event-block { animation: eventSlide 0.3s ease forwards; }
        .event-block:hover { filter: brightness(1.1); transform: scaleX(1.01); }
        .nav-btn:hover { background: #2a2a2a !important; }
        .filter-pill:hover { opacity: 0.85; }
        .add-btn:hover { background: #ea6a0a !important; transform: scale(1.04); }
      `}</style>

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "1.75rem", color: "#f97316" }}>
            Schedule
          </h1>
          <p className="text-gray-500 text-sm mt-0.5">{monthYear}</p>
        </div>
        <button
          className="add-btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
          style={{ background: "#f97316", color: "white" }}
          onClick={() => setModal({ mode: "new" })}
        >
          <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>+</span> Add Event
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <button
          className="filter-pill px-3 py-1 rounded-full text-xs font-semibold transition-all"
          style={{
            background: !activeFilter ? "#f97316" : "#252525",
            color: !activeFilter ? "white" : "#888",
            border: "1px solid " + (!activeFilter ? "#f97316" : "#333"),
          }}
          onClick={() => setActiveFilter(null)}
        >
          All
        </button>
        {TYPES.map((t) => (
          <button
            key={t}
            className="filter-pill px-3 py-1 rounded-full text-xs font-semibold transition-all"
            style={{
              background: activeFilter === t ? TYPE_COLORS[t] + "22" : "#252525",
              color: activeFilter === t ? TYPE_COLORS[t] : "#888",
              border: "1px solid " + (activeFilter === t ? TYPE_COLORS[t] : "#333"),
            }}
            onClick={() => setActiveFilter(activeFilter === t ? null : t)}
          >
            {TYPE_LABELS[t]}
          </button>
        ))}

        {/* Week navigation */}
        <div className="flex items-center gap-1 ml-auto">
          <button
            className="nav-btn w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 transition-all"
            style={{ background: "#1e1e1e", border: "1px solid #2a2a2a" }}
            onClick={() => setCurrentWeekOffset((o) => o - 1)}
          >
            ‹
          </button>
          <button
            className="nav-btn px-3 h-8 rounded-lg text-xs text-gray-400 transition-all"
            style={{ background: "#1e1e1e", border: "1px solid #2a2a2a" }}
            onClick={() => setCurrentWeekOffset(0)}
          >
            Today
          </button>
          <button
            className="nav-btn w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 transition-all"
            style={{ background: "#1e1e1e", border: "1px solid #2a2a2a" }}
            onClick={() => setCurrentWeekOffset((o) => o + 1)}
          >
            ›
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "#111", border: "1px solid #1f1f1f" }}>
        {/* Day header row */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "52px repeat(7, 1fr)",
            borderBottom: "1px solid #1f1f1f",
          }}
        >
          <div style={{ background: "#111" }} />
          {DAYS.map((d, i) => {
            const date = weekDates[i];
            const isToday =
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear();
            return (
              <div
                key={d}
                className="py-3 text-center"
                style={{ borderLeft: "1px solid #1f1f1f", background: "#111" }}
              >
                <div className="text-xs text-gray-600 uppercase tracking-widest">{d}</div>
                <div
                  className="mx-auto mt-1 w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{
                    background: isToday ? "#f97316" : "transparent",
                    color: isToday ? "white" : "#ccc",
                  }}
                >
                  {date.getDate()}
                </div>
              </div>
            );
          })}
        </div>

        {/* Time grid */}
        <div className="overflow-y-auto" style={{ maxHeight: "520px" }}>
          <div className="relative" style={{ minWidth: 0 }}>
            {/* Hour rows */}
            {HOURS.map((hour) => (
              <div
                key={hour}
                className="grid"
                style={{
                  gridTemplateColumns: "52px repeat(7, 1fr)",
                  height: `${CELL_HEIGHT}px`,
                  borderBottom: "1px solid #181818",
                }}
              >
                <div
                  className="flex items-start justify-end pr-2 pt-1"
                  style={{ color: "#444", fontSize: "10px", fontWeight: 500 }}
                >
                  {hour % 12 || 12}{hour >= 12 ? "p" : "a"}
                </div>
                {DAYS.map((_, dayIdx) => {
                  const isToday =
                    weekDates[dayIdx].getDate() === today.getDate() &&
                    weekDates[dayIdx].getMonth() === today.getMonth() &&
                    weekDates[dayIdx].getFullYear() === today.getFullYear();
                  return (
                    <div
                      key={dayIdx}
                      style={{
                        borderLeft: "1px solid #181818",
                        background: isToday ? "rgba(249,115,22,0.03)" : "transparent",
                        cursor: "pointer",
                        transition: "background 0.15s",
                      }}
                      onClick={() =>
                        setModal({ mode: "new", prefill: { day: dayIdx, start: hour } })
                      }
                      onMouseEnter={(e) => (e.currentTarget.style.background = isToday ? "rgba(249,115,22,0.06)" : "#161616")}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = isToday ? "rgba(249,115,22,0.03)" : "transparent")
                      }
                    />
                  );
                })}
              </div>
            ))}

            {/* Events overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ top: 0, left: "52px", right: 0, display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}
            >
              {Array.from({ length: 7 }, (_, dayIdx) => (
                <div key={dayIdx} className="relative">
                  {filteredEvents
                    .filter((e) => e.day === dayIdx)
                    .map((ev) => {
                      const top = (ev.start - GRID_START) * CELL_HEIGHT;
                      const height = ev.duration * CELL_HEIGHT;
                      return (
                        <div
                          key={ev.id}
                          className="event-block absolute rounded-lg overflow-hidden cursor-pointer pointer-events-auto transition-all"
                          style={{
                            top: `${top + 2}px`,
                            left: "3px",
                            right: "3px",
                            height: `${height - 4}px`,
                            background: ev.color + "22",
                            borderLeft: `3px solid ${ev.color}`,
                            padding: "4px 6px",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setModal({ mode: "edit", event: ev });
                          }}
                          onMouseEnter={() => setHoveredEvent(ev.id)}
                          onMouseLeave={() => setHoveredEvent(null)}
                        >
                          <div
                            className="text-xs font-semibold truncate"
                            style={{ color: ev.color }}
                          >
                            {ev.title}
                          </div>
                          {height > 40 && (
                            <div className="text-xs mt-0.5" style={{ color: ev.color + "99" }}>
                              {formatHour(ev.start)} · {ev.duration}h
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {TYPES.map((t) => {
          const count = events.filter((e) => e.type === t).length;
          const hrs = events.filter((e) => e.type === t).reduce((s, e) => s + e.duration, 0);
          return (
            <div
              key={t}
              className="rounded-xl p-3"
              style={{ background: "#131313", border: "1px solid #1f1f1f" }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full" style={{ background: TYPE_COLORS[t] }} />
                <span className="text-xs text-gray-500">{TYPE_LABELS[t]}</span>
              </div>
              <div className="text-white text-lg font-semibold">{count}</div>
              <div className="text-xs text-gray-600">{hrs}h total</div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modal && (
        <Modal
          event={modal.mode === "edit" ? modal.event : modal.prefill ? { ...{ title: "", type: "meeting", duration: 1 }, ...modal.prefill } : null}
          onClose={() => setModal(null)}
          onSave={handleSave}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Timetable;