import { useState } from "react";

/* ── Icons ─────────────────────────────────────────── */
const Icon = ({ d, d2, size = "4" }) => (
  <svg className={`w-${size} h-${size}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />{d2 && <path d={d2} />}
  </svg>
);

const ICONS = {
  email:    <Icon d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  phone:    <Icon d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  location: <Icon d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" d2="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
  linkedin: <Icon d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" d2="M4 6a2 2 0 100-4 2 2 0 000 4z" />,
  copy:     <Icon d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />,
  check:    <Icon d="M5 13l4 4L19 7" />,
  edit:     <Icon d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
  share:    <Icon d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />,
  star:     <Icon d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  book:     <Icon d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
  users:    <Icon d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
  award:    <Icon d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />,
};

/* ── Profile Data ───────────────────────────────────── */
const PROFILE = {
  name:        "Dr. Riya Sharma",
  role:        "Associate Professor",
  department:  "Computer Science",
  email:       "riya@salok.edu",
  phone:       "+91 98765 43210",
  location:    "Jaipur, Rajasthan",
  linkedin:    "linkedin.com/in/riyasharma",
  avatar:      "RS",
  avatarColor: "from-orange-400 to-orange-700",
  status:      "available",
  rating:      4.8,
  reviews:     124,
  joined:      "Aug 2018",
  stats: [
    { icon: ICONS.book,  label: "Courses",  value: "12"  },
    { icon: ICONS.users, label: "Students", value: "840" },
    { icon: ICONS.award, label: "Awards",   value: "6"   },
  ],
  tags:  ["AI/ML", "Data Structures", "Python", "Research"],
  bio:   "Passionate educator and researcher specializing in Artificial Intelligence and Machine Learning. 6+ years of teaching experience with a focus on practical, industry-aligned learning.",
};

const STATUS = {
  available: { dot: "bg-emerald-500", label: "Available",    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  busy:      { dot: "bg-orange-500",  label: "Busy",         badge: "bg-orange-500/10 text-orange-400 border-orange-500/20"   },
  away:      { dot: "bg-yellow-500",  label: "Away",         badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"   },
  offline:   { dot: "bg-gray-600",    label: "Offline",      badge: "bg-gray-500/10 text-gray-500 border-gray-500/20"         },
};

/* ── Star Rating ────────────────────────────────────── */
const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} className={`w-3 h-3 ${s <= Math.round(rating) ? "text-yellow-400" : "text-gray-700"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ── Copy Button ────────────────────────────────────── */
const CopyBtn = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handle = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handle}
      className="p-1 rounded-md text-gray-700 hover:text-orange-400 hover:bg-orange-500/10 transition-all duration-200"
      title="Copy"
    >
      {copied ? ICONS.check : ICONS.copy}
    </button>
  );
};

/* ── Contact Row ────────────────────────────────────── */
const ContactRow = ({ icon, value, copyable = false, href }) => (
  <div className="flex items-center justify-between gap-2 group">
    <div className="flex items-center gap-2.5 min-w-0">
      <span className="text-gray-600 shrink-0">{icon}</span>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer"
          className="text-gray-400 text-[12.5px] truncate hover:text-orange-400 transition-colors duration-200">
          {value}
        </a>
      ) : (
        <span className="text-gray-400 text-[12.5px] truncate">{value}</span>
      )}
    </div>
    {copyable && <CopyBtn text={value} />}
  </div>
);

/* ── Main ProfileCard ───────────────────────────────── */
const ProfileCard = ({ profile = PROFILE }) => {
  const [expanded, setExpanded] = useState(false);
  const [following, setFollowing] = useState(false);
  const status = STATUS[profile.status] ?? STATUS.available;

  return (
    <div className="relative bg-[#111113] border border-white/[0.07] rounded-2xl overflow-hidden w-full max-w-sm shadow-2xl shadow-black/40">

      {/* ── Top accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent z-10" />

      {/* ── Cover banner ── */}
      <div className="relative h-24 bg-gradient-to-br from-orange-900/40 via-[#1a1008] to-[#0f0f11] overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Glow orb */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-6 right-8 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />

        {/* Action buttons top-right */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button className="p-1.5 rounded-lg bg-white/[0.06] border border-white/[0.09] text-gray-400 hover:text-white hover:bg-white/[0.12] transition-all duration-200">
            {ICONS.share}
          </button>
          <button className="p-1.5 rounded-lg bg-white/[0.06] border border-white/[0.09] text-gray-400 hover:text-white hover:bg-white/[0.12] transition-all duration-200">
            {ICONS.edit}
          </button>
        </div>
      </div>

      {/* ── Avatar ── */}
      <div className="px-5 pb-0">
        <div className="flex items-end justify-between -mt-8 mb-4">
          {/* Avatar */}
          <div className="relative">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${profile.avatarColor} flex items-center justify-center text-white text-xl font-black shadow-xl shadow-orange-900/40 border-2 border-[#111113]`}>
              {profile.avatar}
            </div>
            {/* Status dot */}
            <span className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 ${status.dot} rounded-full border-2 border-[#111113]`} />
          </div>

          {/* Follow button */}
          <button
            onClick={() => setFollowing((f) => !f)}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 active:scale-95
              ${following
                ? "bg-white/[0.05] border-white/[0.09] text-gray-400 hover:border-red-500/40 hover:text-red-400 hover:bg-red-500/5"
                : "bg-orange-600 border-orange-600 text-white hover:bg-orange-500 shadow-lg shadow-orange-900/30"
              }`}
          >
            {following ? "Following ✓" : "Follow"}
          </button>
        </div>

        {/* ── Name + Status ── */}
        <div className="mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-white font-bold text-[17px] leading-tight tracking-[-0.01em]">
              {profile.name}
            </h2>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${status.badge}`}>
              {status.label}
            </span>
          </div>
          <p className="text-orange-400/80 text-[12.5px] font-medium mt-0.5">
            {profile.role} · {profile.department}
          </p>
          <p className="text-gray-600 text-[11px] mt-1">
            Member since {profile.joined}
          </p>
        </div>

        {/* ── Rating ── */}
        <div className="flex items-center gap-2 mb-4">
          <StarRating rating={profile.rating} />
          <span className="text-white text-[12px] font-semibold">{profile.rating}</span>
          <span className="text-gray-600 text-[11px]">({profile.reviews} reviews)</span>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-2.5 flex flex-col items-center gap-1 hover:bg-white/[0.05] transition-colors duration-200">
              <span className="text-orange-400">{stat.icon}</span>
              <span className="text-white text-[14px] font-bold tabular-nums">{stat.value}</span>
              <span className="text-gray-600 text-[10px] uppercase tracking-wide font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Bio ── */}
        <div className="mb-4">
          <p className={`text-gray-400 text-[12.5px] leading-relaxed transition-all duration-300 ${expanded ? "" : "line-clamp-2"}`}>
            {profile.bio}
          </p>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-orange-400 text-[11px] font-semibold mt-1 hover:text-orange-300 transition-colors duration-200"
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        </div>

        {/* ── Tags ── */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {profile.tags.map((tag) => (
            <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.07] text-gray-400 hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-200 cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px bg-white/[0.05] mx-5" />

      {/* ── Contact section ── */}
      <div className="px-5 py-4 space-y-2.5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-3">Contact</p>

        <ContactRow icon={ICONS.email}    value={profile.email}    copyable href={`mailto:${profile.email}`} />
        <ContactRow icon={ICONS.phone}    value={profile.phone}    copyable />
        <ContactRow icon={ICONS.location} value={profile.location} />
        <ContactRow icon={ICONS.linkedin} value={profile.linkedin} href={`https://${profile.linkedin}`} />
      </div>

      {/* ── Footer ── */}
      <div className="px-5 py-3 bg-white/[0.01] border-t border-white/[0.05] flex items-center justify-between">
        <p className="text-gray-700 text-[10.5px]">salok.edu/faculty/riya</p>
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-gray-700 text-[10.5px]">Active now</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;