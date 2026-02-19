import { useState } from "react";

/* ── Variant styles ────────────────────────────────── */
const VARIANTS = {
  default: {
    base:   "bg-[#111113] border-white/[0.07]",
    hover:  "",
    glow:   "",
  },
  elevated: {
    base:   "bg-[#141416] border-white/[0.08] shadow-2xl shadow-black/40",
    hover:  "",
    glow:   "",
  },
  glass: {
    base:   "bg-white/[0.03] border-white/[0.08] backdrop-blur-xl",
    hover:  "",
    glow:   "",
  },
  orange: {
    base:   "bg-orange-500/[0.05] border-orange-500/20",
    hover:  "hover:border-orange-500/40 hover:bg-orange-500/[0.08]",
    glow:   "shadow-orange-900/20",
  },
  success: {
    base:   "bg-emerald-500/[0.05] border-emerald-500/20",
    hover:  "hover:border-emerald-500/40 hover:bg-emerald-500/[0.08]",
    glow:   "shadow-emerald-900/20",
  },
  danger: {
    base:   "bg-red-500/[0.05] border-red-500/20",
    hover:  "hover:border-red-500/40 hover:bg-red-500/[0.08]",
    glow:   "shadow-red-900/20",
  },
  info: {
    base:   "bg-blue-500/[0.05] border-blue-500/20",
    hover:  "hover:border-blue-500/40 hover:bg-blue-500/[0.08]",
    glow:   "shadow-blue-900/20",
  },
};

/* ── Size styles ───────────────────────────────────── */
const SIZES = {
  sm:  "p-3   rounded-xl",
  md:  "p-5   rounded-2xl",
  lg:  "p-6   rounded-2xl",
  xl:  "p-8   rounded-3xl",
};

/* ── Card Header ───────────────────────────────────── */
export const CardHeader = ({ title, subtitle, icon, action, divider = true }) => (
  <div className={`flex items-start justify-between gap-4 ${divider ? "pb-4 mb-4 border-b border-white/[0.06]" : "mb-3"}`}>
    <div className="flex items-center gap-3 min-w-0">
      {icon && (
        <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        {title && (
          <h3 className="text-white font-semibold text-[14px] leading-tight truncate">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="text-gray-500 text-[11.5px] mt-0.5 truncate">
            {subtitle}
          </p>
        )}
      </div>
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

/* ── Card Footer ───────────────────────────────────── */
export const CardFooter = ({ children, divider = true }) => (
  <div className={`${divider ? "pt-4 mt-4 border-t border-white/[0.06]" : "mt-3"} flex items-center justify-between gap-3`}>
    {children}
  </div>
);

/* ── Card Badge ────────────────────────────────────── */
export const CardBadge = ({ label, color = "orange" }) => {
  const colors = {
    orange:  "bg-orange-500/15 text-orange-400 border-orange-500/20",
    green:   "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    red:     "bg-red-500/15 text-red-400 border-red-500/20",
    blue:    "bg-blue-500/15 text-blue-400 border-blue-500/20",
    gray:    "bg-white/[0.06] text-gray-400 border-white/[0.08]",
  };
  return (
    <span className={`inline-flex items-center text-[10.5px] font-semibold px-2 py-0.5 rounded-md border ${colors[color] ?? colors.gray}`}>
      {label}
    </span>
  );
};

/* ── Card Stat ─────────────────────────────────────── */
export const CardStat = ({ label, value, change, changeType = "up" }) => (
  <div>
    <p className="text-gray-500 text-[11px] uppercase tracking-wider font-semibold mb-1">{label}</p>
    <p className="text-white text-2xl font-bold tracking-tight">{value}</p>
    {change && (
      <p className={`text-[11px] font-medium mt-1 flex items-center gap-1 ${changeType === "up" ? "text-emerald-400" : "text-red-400"}`}>
        <span>{changeType === "up" ? "↑" : "↓"}</span>
        {change}
      </p>
    )}
  </div>
);

/* ── Card Skeleton ─────────────────────────────────── */
export const CardSkeleton = ({ lines = 3, size = "md" }) => (
  <Card size={size}>
    <div className="animate-pulse space-y-3">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-white/[0.06] rounded-xl" />
        <div className="space-y-1.5 flex-1">
          <div className="h-3 bg-white/[0.06] rounded-full w-2/3" />
          <div className="h-2.5 bg-white/[0.04] rounded-full w-1/2" />
        </div>
      </div>
      <div className="h-px bg-white/[0.05]" />
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-2.5 bg-white/[0.05] rounded-full"
          style={{ width: `${85 - i * 12}%` }}
        />
      ))}
    </div>
  </Card>
);

/* ── Main Card ─────────────────────────────────────── */
const Card = ({
  children,
  className    = "",
  variant      = "default",
  size         = "md",
  hoverable    = false,
  clickable    = false,
  onClick,
  loading      = false,
  noPadding    = false,
  topAccent    = false,
  accentColor  = "orange",
}) => {
  const [pressed, setPressed] = useState(false);
  const v = VARIANTS[variant] ?? VARIANTS.default;
  const s = SIZES[size]       ?? SIZES.md;

  const accentColors = {
    orange:  "from-orange-500/60 via-orange-400/30 to-transparent",
    green:   "from-emerald-500/60 via-emerald-400/30 to-transparent",
    red:     "from-red-500/60 via-red-400/30 to-transparent",
    blue:    "from-blue-500/60 via-blue-400/30 to-transparent",
  };

  const isInteractive = hoverable || clickable || !!onClick;

  return (
    <div
      onClick={onClick}
      onMouseDown={() => clickable && setPressed(true)}
      onMouseUp={()   => clickable && setPressed(false)}
      onMouseLeave={()=> clickable && setPressed(false)}
      className={`
        relative border overflow-hidden
        transition-all duration-200 ease-out
        ${v.base}
        ${v.glow ? `shadow-xl ${v.glow}` : ""}
        ${noPadding ? s.replace(/p-\S+\s?/, "") : s}
        ${isInteractive ? `${v.hover} cursor-pointer` : ""}
        ${hoverable    ? "hover:-translate-y-0.5 hover:shadow-xl" : ""}
        ${clickable    ? "active:scale-[0.99]" : ""}
        ${pressed      ? "scale-[0.99]" : ""}
        ${className}
      `}
    >
      {/* Top accent line */}
      {topAccent && (
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${accentColors[accentColor] ?? accentColors.orange}`} />
      )}

      {/* Ambient corner glow for colored variants */}
      {["orange","success","danger","info"].includes(variant) && (
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30 pointer-events-none"
          style={{
            background:
              variant === "orange"  ? "#f97316" :
              variant === "success" ? "#10b981" :
              variant === "danger"  ? "#ef4444" : "#3b82f6",
          }}
        />
      )}

      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 bg-[#111113]/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-[inherit]">
          <svg className="w-5 h-5 animate-spin text-orange-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path  className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className={`relative z-[1] ${noPadding ? "" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;


/* ══════════════════════════════════════════════════════
   USAGE SHOWCASE  —  delete before shipping
   ══════════════════════════════════════════════════════ */
export const CardShowcase = () => {
  const StarIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
  const UsersIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-10 space-y-10">

      {/* Variants */}
      <section>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Variants</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["default","elevated","glass","orange","success","danger","info"].map((v) => (
            <Card key={v} variant={v} topAccent>
              <p className="text-white text-xs font-semibold capitalize mb-1">{v}</p>
              <p className="text-gray-500 text-[11px]">Card variant example</p>
            </Card>
          ))}
        </div>
      </section>

      {/* With Header + Footer + Badge */}
      <section>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Header · Footer · Badge</p>
        <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
          <Card variant="elevated" topAccent hoverable>
            <CardHeader
              title="Total Students"
              subtitle="Current semester"
              icon={<UsersIcon />}
              action={<CardBadge label="Active" color="green" />}
            />
            <CardStat label="Enrolled" value="1,284" change="+12% this month" changeType="up" />
            <CardFooter>
              <span className="text-gray-600 text-xs">Last updated today</span>
              <CardBadge label="Sem 5" color="blue" />
            </CardFooter>
          </Card>

          <Card variant="orange" topAccent hoverable>
            <CardHeader
              title="Feedback Score"
              subtitle="Average rating"
              icon={<StarIcon />}
              action={<CardBadge label="New" color="orange" />}
            />
            <CardStat label="Rating" value="4.7 / 5" change="+0.3 vs last sem" changeType="up" />
            <CardFooter>
              <span className="text-gray-600 text-xs">Based on 320 reviews</span>
              <CardBadge label="Verified" color="green" />
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Sizes</p>
        <div className="flex flex-wrap gap-4 items-start">
          {["sm","md","lg","xl"].map((s) => (
            <Card key={s} size={s} variant="elevated" className="w-36">
              <p className="text-white text-xs font-semibold capitalize">Size: {s}</p>
              <p className="text-gray-600 text-[10px] mt-0.5">Padding varies</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Loading + Skeleton */}
      <section>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Loading States</p>
        <div className="grid md:grid-cols-2 gap-4 max-w-xl">
          <Card loading variant="elevated">
            <CardHeader title="Loading Card" subtitle="Data is fetching..." />
            <p className="text-gray-500 text-sm">Content hidden behind overlay</p>
          </Card>
          <CardSkeleton lines={3} />
        </div>
      </section>

      {/* Clickable */}
      <section>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Clickable / Hoverable</p>
        <div className="flex flex-wrap gap-4">
          <Card clickable hoverable variant="elevated" topAccent onClick={() => alert("Clicked!")} className="w-44">
            <p className="text-white text-sm font-semibold">Click Me</p>
            <p className="text-gray-600 text-xs mt-1">Ripple + scale</p>
          </Card>
          <Card hoverable variant="glass" topAccent className="w-44">
            <p className="text-white text-sm font-semibold">Hover Me</p>
            <p className="text-gray-600 text-xs mt-1">Lifts on hover</p>
          </Card>
        </div>
      </section>

    </div>
  );
};