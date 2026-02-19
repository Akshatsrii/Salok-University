import { useState } from "react";

/* ── Spinner ───────────────────────────────────────── */
const Spinner = () => (
  <svg
    className="w-4 h-4 animate-spin"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12" cy="12" r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v8H4z"
    />
  </svg>
);

/* ── Ripple ────────────────────────────────────────── */
const useRipple = () => {
  const [ripples, setRipples] = useState([]);

  const trigger = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  return { ripples, trigger };
};

/* ── Variant styles ────────────────────────────────── */
const VARIANTS = {
  primary: {
    base:     "bg-orange-600 text-white border border-orange-600 shadow-lg shadow-orange-900/30",
    hover:    "hover:bg-orange-500 hover:border-orange-500 hover:shadow-orange-800/40",
    active:   "active:bg-orange-700 active:shadow-none",
    disabled: "disabled:bg-orange-900/40 disabled:border-orange-900/30 disabled:text-orange-200/40",
    ripple:   "bg-white/20",
  },
  secondary: {
    base:     "bg-white/[0.06] text-gray-200 border border-white/[0.09]",
    hover:    "hover:bg-white/[0.10] hover:border-white/[0.15] hover:text-white",
    active:   "active:bg-white/[0.04]",
    disabled: "disabled:bg-white/[0.02] disabled:text-gray-600 disabled:border-white/[0.04]",
    ripple:   "bg-white/10",
  },
  danger: {
    base:     "bg-red-600/90 text-white border border-red-600 shadow-lg shadow-red-900/30",
    hover:    "hover:bg-red-500 hover:border-red-500",
    active:   "active:bg-red-700 active:shadow-none",
    disabled: "disabled:bg-red-900/40 disabled:border-red-900/30 disabled:text-red-200/40",
    ripple:   "bg-white/20",
  },
  ghost: {
    base:     "bg-transparent text-gray-400 border border-transparent",
    hover:    "hover:bg-white/[0.06] hover:text-white hover:border-white/[0.08]",
    active:   "active:bg-white/[0.04]",
    disabled: "disabled:text-gray-700",
    ripple:   "bg-white/10",
  },
  success: {
    base:     "bg-emerald-600 text-white border border-emerald-600 shadow-lg shadow-emerald-900/30",
    hover:    "hover:bg-emerald-500 hover:border-emerald-500",
    active:   "active:bg-emerald-700 active:shadow-none",
    disabled: "disabled:bg-emerald-900/40 disabled:border-emerald-900/30 disabled:text-emerald-200/40",
    ripple:   "bg-white/20",
  },
};

/* ── Size styles ───────────────────────────────────── */
const SIZES = {
  xs:  "h-7  px-2.5 text-[11px] gap-1.5 rounded-lg",
  sm:  "h-8  px-3   text-xs     gap-1.5 rounded-[9px]",
  md:  "h-10 px-4   text-sm     gap-2   rounded-xl",
  lg:  "h-11 px-5   text-[15px] gap-2   rounded-xl",
  xl:  "h-13 px-6   text-base   gap-2.5 rounded-2xl",
};

/* ── Button ────────────────────────────────────────── */
const Button = ({
  children,
  onClick,
  className     = "",
  variant       = "primary",
  size          = "md",
  loading       = false,
  disabled      = false,
  leftIcon      = null,
  rightIcon     = null,
  fullWidth     = false,
  pill          = false,
}) => {
  const { ripples, trigger } = useRipple();
  const v = VARIANTS[variant] ?? VARIANTS.primary;
  const s = SIZES[size]       ?? SIZES.md;
  const isDisabled = disabled || loading;

  const handleClick = (e) => {
    if (isDisabled) return;
    trigger(e);
    onClick?.(e);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`
        relative inline-flex items-center justify-center font-semibold
        overflow-hidden select-none outline-none
        transition-all duration-200 ease-out
        focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111]
        active:scale-[0.97]
        ${v.base} ${v.hover} ${v.active} ${v.disabled}
        ${s}
        ${fullWidth ? "w-full" : ""}
        ${pill ? "!rounded-full" : ""}
        ${isDisabled ? "cursor-not-allowed pointer-events-none" : "cursor-pointer"}
        ${className}
      `}
    >
      {/* Ripple effects */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className={`absolute rounded-full ${v.ripple} animate-ping`}
          style={{
            left:      r.x - 10,
            top:       r.y - 10,
            width:     20,
            height:    20,
            animationDuration: "0.6s",
            animationIterationCount: 1,
          }}
        />
      ))}

      {/* Loading spinner / left icon */}
      {loading ? (
        <Spinner />
      ) : leftIcon ? (
        <span className="shrink-0">{leftIcon}</span>
      ) : null}

      {/* Label */}
      {children && (
        <span className={`transition-opacity duration-200 ${loading ? "opacity-50" : "opacity-100"}`}>
          {children}
        </span>
      )}

      {/* Right icon */}
      {!loading && rightIcon && (
        <span className="shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;


/* ══════════════════════════════════════════════════════
   USAGE EXAMPLES  —  delete this before shipping
   ══════════════════════════════════════════════════════ */
export const ButtonShowcase = () => {
  const [loading, setLoading] = useState(false);

  const PlusIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
  const ArrowIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
  const TrashIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-10 space-y-10">

      {/* Variants */}
      <div>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Variants</p>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">   Primary   </Button>
          <Button variant="secondary"> Secondary </Button>
          <Button variant="danger">   Danger    </Button>
          <Button variant="ghost">    Ghost     </Button>
          <Button variant="success">  Success   </Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Sizes</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </div>
      </div>

      {/* With icons */}
      <div>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">With Icons</p>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<PlusIcon />}>Add Student</Button>
          <Button rightIcon={<ArrowIcon />} variant="secondary">Continue</Button>
          <Button leftIcon={<TrashIcon />} variant="danger">Delete</Button>
          <Button leftIcon={<PlusIcon />} variant="ghost">Ghost Action</Button>
        </div>
      </div>

      {/* Loading */}
      <div>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Loading State</p>
        <div className="flex flex-wrap gap-3">
          <Button loading={loading} onClick={handleLoad}>
            {loading ? "Saving..." : "Click to Load"}
          </Button>
          <Button loading variant="secondary">Processing</Button>
          <Button loading variant="danger">Deleting</Button>
        </div>
      </div>

      {/* Disabled */}
      <div>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Disabled</p>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Primary</Button>
          <Button disabled variant="secondary">Secondary</Button>
          <Button disabled variant="danger">Danger</Button>
        </div>
      </div>

      {/* Pill + Full width */}
      <div>
        <p className="text-gray-600 text-xs uppercase tracking-widest mb-4 font-semibold">Pill & Full Width</p>
        <div className="space-y-3 max-w-sm">
          <div className="flex gap-3">
            <Button pill>Pill Primary</Button>
            <Button pill variant="secondary">Pill Ghost</Button>
          </div>
          <Button fullWidth>Full Width Button</Button>
          <Button fullWidth variant="secondary" leftIcon={<PlusIcon />}>
            Full Width with Icon
          </Button>
        </div>
      </div>

    </div>
  );
};