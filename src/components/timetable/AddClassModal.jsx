import { useState, useEffect, useRef } from "react";

const SUBJECTS = [
  "Data Structures", "Algorithms", "Operating Systems",
  "Database Management", "Computer Networks", "Software Engineering",
  "Artificial Intelligence", "Machine Learning", "Web Development",
  "Discrete Mathematics", "Linear Algebra", "Digital Electronics",
];

const CLASS_TYPES = [
  { value: "lecture",  label: "Lecture",   icon: "📖", color: "border-blue-500/50   bg-blue-500/10   text-blue-400"   },
  { value: "lab",      label: "Lab",       icon: "🔬", color: "border-green-500/50  bg-green-500/10  text-green-400"  },
  { value: "tutorial", label: "Tutorial",  icon: "✏️", color: "border-purple-500/50 bg-purple-500/10 text-purple-400" },
  { value: "seminar",  label: "Seminar",   icon: "🎤", color: "border-orange-500/50 bg-orange-500/10 text-orange-400" },
];

const ROOMS = ["Room 101", "Room 202", "Room 303", "Lab 1", "Lab 2", "Lab 3", "Seminar Hall", "Auditorium"];
const DURATIONS = ["30 min", "1 hour", "1.5 hours", "2 hours", "2.5 hours", "3 hours"];

const InputWrapper = ({ label, required, error, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
      {label} {required && <span className="text-orange-500">*</span>}
    </label>
    {children}
    {error && (
      <p className="text-red-400 text-xs flex items-center gap-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        {error}
      </p>
    )}
  </div>
);

const inputClass = (hasError) =>
  `w-full px-4 py-2.5 bg-[#222] border rounded-xl text-white text-sm placeholder-gray-600 outline-none transition-all duration-200 ${
    hasError
      ? "border-red-500 focus:border-red-400"
      : "border-[#333] focus:border-orange-500"
  }`;

const AddClassModal = ({ isOpen, onClose, onAdd }) => {
  const [form, setForm] = useState({
    subject: "", customSubject: "", type: "lecture",
    date: "", time: "", duration: "1 hour",
    room: "", instructor: "", notes: "",
  });
  const [errors, setErrors]         = useState({});
  const [subjectMode, setSubjectMode] = useState("select"); // "select" | "custom"
  const [loading, setLoading]       = useState(false);
  const [success, setSuccess]       = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);
  const subjectRef = useRef(null);
  const modalRef   = useRef(null);

  /* reset on open */
  useEffect(() => {
    if (isOpen) {
      setForm({ subject: "", customSubject: "", type: "lecture", date: "", time: "", duration: "1 hour", room: "", instructor: "", notes: "" });
      setErrors({});
      setSuccess(false);
      setLoading(false);
      setSubjectMode("select");
    }
  }, [isOpen]);

  /* close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (subjectRef.current && !subjectRef.current.contains(e.target))
        setSubjectOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* trap Escape key */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: "" }));
  };

  const validate = () => {
    const e = {};
    const subjectVal = subjectMode === "custom" ? form.customSubject : form.subject;
    if (!subjectVal.trim()) e.subject = "Subject is required";
    if (!form.date)         e.date    = "Date is required";
    if (!form.time)         e.time    = "Time is required";
    return e;
  };

  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);

    const payload = {
      ...form,
      subject: subjectMode === "custom" ? form.customSubject : form.subject,
    };
    onAdd?.(payload);
    await new Promise((r) => setTimeout(r, 900));
    onClose();
  };

  if (!isOpen) return null;

  const selectedType = CLASS_TYPES.find((t) => t.value === form.type);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={modalRef}
        className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
        style={{ maxHeight: "90vh" }}
      >
        {/* ── Header ── */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-600/20 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h2 className="text-white font-bold text-base">Add Class</h2>
              <p className="text-gray-500 text-xs">Fill in the details below</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-[#2a2a2a] transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Body ── */}
        <div className="overflow-y-auto px-6 py-5 space-y-5" style={{ maxHeight: "calc(90vh - 140px)" }}>

          {/* Class Type */}
          <InputWrapper label="Class Type">
            <div className="grid grid-cols-4 gap-2">
              {CLASS_TYPES.map((t) => (
                <button
                  key={t.value}
                  onClick={() => set("type", t.value)}
                  className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                    form.type === t.value ? t.color : "border-[#333] bg-[#222] text-gray-500 hover:border-[#444]"
                  }`}
                >
                  <span className="text-lg">{t.icon}</span>
                  {t.label}
                </button>
              ))}
            </div>
          </InputWrapper>

          {/* Subject */}
          <InputWrapper label="Subject" required error={errors.subject}>
            <div className="flex gap-2 mb-2">
              {["select", "custom"].map((m) => (
                <button
                  key={m}
                  onClick={() => { setSubjectMode(m); setErrors((p) => ({ ...p, subject: "" })); }}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition capitalize ${
                    subjectMode === m
                      ? "bg-orange-600 text-white"
                      : "bg-[#222] text-gray-400 hover:bg-[#2a2a2a]"
                  }`}
                >
                  {m === "select" ? "Pick from list" : "Enter manually"}
                </button>
              ))}
            </div>

            {subjectMode === "select" ? (
              <div className="relative" ref={subjectRef}>
                <button
                  onClick={() => setSubjectOpen((o) => !o)}
                  className={`w-full px-4 py-2.5 bg-[#222] border rounded-xl text-sm text-left flex items-center justify-between transition-all duration-200 ${
                    errors.subject ? "border-red-500" : "border-[#333] focus:border-orange-500"
                  } ${form.subject ? "text-white" : "text-gray-600"}`}
                >
                  {form.subject || "Select a subject..."}
                  <svg className={`w-4 h-4 text-gray-500 transition-transform ${subjectOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {subjectOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-[#222] border border-[#333] rounded-xl overflow-hidden shadow-xl max-h-48 overflow-y-auto">
                    {SUBJECTS.map((s) => (
                      <button
                        key={s}
                        onClick={() => { set("subject", s); setSubjectOpen(false); }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-[#2a2a2a] transition ${
                          form.subject === s ? "text-orange-400 bg-orange-500/10" : "text-gray-300"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <input
                placeholder="e.g. Quantum Computing"
                value={form.customSubject}
                onChange={(e) => set("customSubject", e.target.value)}
                className={inputClass(!!errors.subject)}
              />
            )}
          </InputWrapper>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <InputWrapper label="Date" required error={errors.date}>
              <input
                type="date"
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                className={inputClass(!!errors.date) + " [color-scheme:dark]"}
              />
            </InputWrapper>
            <InputWrapper label="Time" required error={errors.time}>
              <input
                type="time"
                value={form.time}
                onChange={(e) => set("time", e.target.value)}
                className={inputClass(!!errors.time) + " [color-scheme:dark]"}
              />
            </InputWrapper>
          </div>

          {/* Duration & Room */}
          <div className="grid grid-cols-2 gap-4">
            <InputWrapper label="Duration">
              <select
                value={form.duration}
                onChange={(e) => set("duration", e.target.value)}
                className={inputClass(false) + " [color-scheme:dark] cursor-pointer"}
              >
                {DURATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </InputWrapper>
            <InputWrapper label="Room">
              <select
                value={form.room}
                onChange={(e) => set("room", e.target.value)}
                className={inputClass(false) + " [color-scheme:dark] cursor-pointer"}
              >
                <option value="">Select room</option>
                {ROOMS.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </InputWrapper>
          </div>

          {/* Instructor */}
          <InputWrapper label="Instructor">
            <input
              placeholder="e.g. Dr. Sharma"
              value={form.instructor}
              onChange={(e) => set("instructor", e.target.value)}
              className={inputClass(false)}
            />
          </InputWrapper>

          {/* Notes */}
          <InputWrapper label="Notes">
            <textarea
              placeholder="Any additional details about the class..."
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              rows={3}
              className={inputClass(false) + " resize-none"}
            />
          </InputWrapper>

          {/* Preview Card */}
          {(form.subject || form.customSubject) && form.date && (
            <div className={`p-4 rounded-xl border ${selectedType.color} space-y-1`}>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-70">Preview</p>
              <p className="text-white font-semibold text-sm">
                {selectedType.icon} {subjectMode === "custom" ? form.customSubject : form.subject}
              </p>
              <p className="text-xs opacity-70">
                {form.date}{form.time && ` at ${form.time}`}{form.duration && ` · ${form.duration}`}
                {form.room && ` · ${form.room}`}
              </p>
              {form.instructor && <p className="text-xs opacity-70">👤 {form.instructor}</p>}
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-[#2a2a2a] bg-[#161616]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm text-gray-400 bg-[#222] hover:bg-[#2a2a2a] hover:text-white transition font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading || success}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-orange-600 hover:bg-orange-700 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-white min-w-[120px] justify-center"
          >
            {success ? (
              <>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Added!
              </>
            ) : loading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Saving...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Class
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClassModal;