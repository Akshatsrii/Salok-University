import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";

/* ── Icons ─────────────────────────────────────────── */
const CloseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);
const WarningIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
const InfoIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const SuccessIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const DangerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/* ── Variant config ────────────────────────────────── */
const VARIANTS = {
  default: {
    icon:        null,
    iconWrapper: "",
    accent:      "from-transparent via-white/[0.04] to-transparent",
    badge:       "",
  },
  info: {
    icon:        <InfoIcon />,
    iconWrapper: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    accent:      "from-transparent via-blue-500/20 to-transparent",
    badge:       "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  success: {
    icon:        <SuccessIcon />,
    iconWrapper: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    accent:      "from-transparent via-emerald-500/20 to-transparent",
    badge:       "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  warning: {
    icon:        <WarningIcon />,
    iconWrapper: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    accent:      "from-transparent via-orange-500/20 to-transparent",
    badge:       "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  danger: {
    icon:        <DangerIcon />,
    iconWrapper: "bg-red-500/10 border-red-500/20 text-red-400",
    accent:      "from-transparent via-red-500/20 to-transparent",
    badge:       "bg-red-500/10 text-red-400 border-red-500/20",
  },
};

/* ── Size config ───────────────────────────────────── */
const SIZES = {
  xs:   "max-w-xs",
  sm:   "max-w-sm",
  md:   "max-w-md",
  lg:   "max-w-lg",
  xl:   "max-w-xl",
  "2xl":"max-w-2xl",
  full: "max-w-[95vw] max-h-[95vh]",
};

/* ══════════════════════════════════════════════════════
   SUB-COMPONENTS
   ══════════════════════════════════════════════════════ */

/* ── Modal Header ──────────────────────────────────── */
export const ModalHeader = ({ title, subtitle, variant = "default", badge, onClose }) => {
  const v = VARIANTS[variant] ?? VARIANTS.default;
  return (
    <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-white/[0.06]">
      <div className="flex items-center gap-3 min-w-0">
        {v.icon && (
          <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${v.iconWrapper}`}>
            {v.icon}
          </div>
        )}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-white font-bold text-[15px] leading-tight truncate">{title}</h2>
            {badge && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${v.badge || "bg-white/[0.06] text-gray-400 border-white/[0.08]"}`}>
                {badge}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-gray-500 text-[12px] mt-0.5 truncate">{subtitle}</p>
          )}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-gray-600 hover:text-white hover:bg-white/[0.07] transition-all duration-200 shrink-0 mt-0.5"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

/* ── Modal Body ────────────────────────────────────── */
export const ModalBody = ({ children, className = "" }) => (
  <div className={`px-6 py-5 overflow-y-auto flex-1 ${className}`}>
    {children}
  </div>
);

/* ── Modal Footer ──────────────────────────────────── */
export const ModalFooter = ({ children, align = "right" }) => {
  const alignClass = {
    left:    "justify-start",
    center:  "justify-center",
    right:   "justify-end",
    between: "justify-between",
  }[align] ?? "justify-end";

  return (
    <div className={`flex flex-wrap items-center gap-3 px-6 py-4 border-t border-white/[0.06] bg-white/[0.01] ${alignClass}`}>
      {children}
    </div>
  );
};

/* ── Confirm Modal ─────────────────────────────────── */
export const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title        = "Are you sure?",
  description  = "This action cannot be undone.",
  confirmLabel = "Confirm",
  cancelLabel  = "Cancel",
  variant      = "danger",
  loading      = false,
}) => {
  const v = VARIANTS[variant] ?? VARIANTS.danger;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm" variant={variant}>
      <ModalHeader title={title} variant={variant} onClose={onClose} />
      <ModalBody>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </ModalBody>
      <ModalFooter align="right">
        <button
          onClick={onClose}
          disabled={loading}
          className="px-4 py-2 text-sm font-medium text-gray-400 bg-white/[0.05] hover:bg-white/[0.09] hover:text-white rounded-xl border border-white/[0.07] transition-all duration-200 disabled:opacity-40"
        >
          {cancelLabel}
        </button>
        <button
          onClick={onConfirm}
          disabled={loading}
          className={`px-4 py-2 text-sm font-semibold rounded-xl border transition-all duration-200 disabled:opacity-50 flex items-center gap-2
            ${variant === "danger"
              ? "bg-red-600 hover:bg-red-500 border-red-600 text-white shadow-lg shadow-red-900/30"
              : variant === "warning"
              ? "bg-orange-600 hover:bg-orange-500 border-orange-600 text-white shadow-lg shadow-orange-900/30"
              : "bg-emerald-600 hover:bg-emerald-500 border-emerald-600 text-white shadow-lg shadow-emerald-900/30"
            }`}
        >
          {loading && (
            <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          )}
          {confirmLabel}
        </button>
      </ModalFooter>
    </Modal>
  );
};

/* ══════════════════════════════════════════════════════
   MAIN MODAL
   ══════════════════════════════════════════════════════ */
const Modal = ({
  isOpen,
  onClose,
  children,
  className       = "",
  size            = "md",
  variant         = "default",
  closeOnBackdrop = true,
  closeOnEsc      = true,
  showCloseBtn    = false,
  centered        = true,
  scrollable      = true,
  loading         = false,
}) => {
  const [visible,   setVisible]   = useState(false);
  const [animating, setAnimating] = useState(false);
  const overlayRef  = useRef(null);
  const contentRef  = useRef(null);
  const v = VARIANTS[variant] ?? VARIANTS.default;

  /* ── Open/close animation ── */
  useEffect(() => {
    if (isOpen) {
      setAnimating(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);
      const t = setTimeout(() => setAnimating(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  /* ── Lock body scroll ── */
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  /* ── Escape key ── */
  const handleKeyDown = useCallback((e) => {
    if (closeOnEsc && e.key === "Escape") onClose?.();
  }, [closeOnEsc, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  /* ── Focus trap ── */
  useEffect(() => {
    if (isOpen && contentRef.current) {
      const focusable = contentRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length) focusable[0].focus();
    }
  }, [isOpen, animating]);

  /* ── Backdrop click ── */
  const handleBackdropClick = (e) => {
    if (closeOnBackdrop && e.target === overlayRef.current) onClose?.();
  };

  if (!animating && !isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      className={`
        fixed inset-0 z-[999] flex px-4
        ${centered ? "items-center" : "items-start pt-16"}
        justify-center
        transition-all duration-300
        ${visible ? "bg-black/70 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"}
      `}
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      {/* Modal panel */}
      <div
        ref={contentRef}
        className={`
          relative w-full ${SIZES[size] ?? SIZES.md}
          bg-[#111113] border border-white/[0.08]
          rounded-2xl shadow-2xl shadow-black/60
          flex flex-col overflow-hidden
          transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          ${visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-[0.96]"
          }
          ${scrollable ? "max-h-[90vh]" : ""}
          ${className}
        `}
      >
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${v.accent} z-10`} />

        {/* Ambient glow */}
        {variant !== "default" && (
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 blur-3xl opacity-20 pointer-events-none rounded-full"
            style={{
              background:
                variant === "info"    ? "#3b82f6" :
                variant === "success" ? "#10b981" :
                variant === "warning" ? "#f97316" : "#ef4444",
            }}
          />
        )}

        {/* Standalone close button */}
        {showCloseBtn && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-1.5 rounded-lg text-gray-600 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        )}

        {/* Loading overlay */}
        {loading && (
          <div className="absolute inset-0 z-30 bg-[#111113]/80 backdrop-blur-sm flex items-center justify-center rounded-2xl">
            <div className="flex flex-col items-center gap-3">
              <svg className="w-7 h-7 animate-spin text-orange-500" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <p className="text-gray-500 text-xs font-medium">Loading...</p>
            </div>
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;


/* ══════════════════════════════════════════════════════
   SHOWCASE  —  delete before shipping
   ══════════════════════════════════════════════════════ */
export const ModalShowcase = () => {
  const [open,    setOpen]    = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setOpen(null); }, 2000);
  };

  const variants = ["default", "info", "success", "warning", "danger"];

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-10 flex flex-wrap gap-4 items-start">

      {/* Variant modals */}
      {variants.map((v) => (
        <button
          key={v}
          onClick={() => setOpen(v)}
          className="px-4 py-2 rounded-xl bg-white/[0.06] border border-white/[0.09] text-gray-300 text-sm font-medium hover:bg-white/[0.10] transition capitalize"
        >
          {v} modal
        </button>
      ))}

      <button
        onClick={() => setOpen("confirm")}
        className="px-4 py-2 rounded-xl bg-red-600/20 border border-red-500/30 text-red-400 text-sm font-medium hover:bg-red-600/30 transition"
      >
        Confirm modal
      </button>

      <button
        onClick={() => setOpen("loading")}
        className="px-4 py-2 rounded-xl bg-orange-600/20 border border-orange-500/30 text-orange-400 text-sm font-medium hover:bg-orange-600/30 transition"
      >
        Loading modal
      </button>

      {/* Default / Variant modals */}
      {variants.map((v) => (
        <Modal key={v} isOpen={open === v} onClose={() => setOpen(null)} variant={v} size="md">
          <ModalHeader
            title={`${v.charAt(0).toUpperCase() + v.slice(1)} Modal`}
            subtitle="This is the subtitle of the modal"
            variant={v}
            badge="New"
            onClose={() => setOpen(null)}
          />
          <ModalBody>
            <p className="text-gray-400 text-sm leading-relaxed">
              This is a <strong className="text-white">{v}</strong> modal variant. It comes with a matching accent line, icon, badge, and ambient glow effect at the top. The backdrop blurs smoothly and the panel animates in with a spring easing.
            </p>
          </ModalBody>
          <ModalFooter align="right">
            <button onClick={() => setOpen(null)} className="px-4 py-2 text-sm text-gray-400 bg-white/[0.05] hover:bg-white/[0.09] rounded-xl border border-white/[0.07] transition">
              Cancel
            </button>
            <button onClick={() => setOpen(null)} className="px-4 py-2 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-xl border border-orange-600 transition shadow-lg shadow-orange-900/30">
              Confirm
            </button>
          </ModalFooter>
        </Modal>
      ))}

      {/* Confirm modal */}
      <ConfirmModal
        isOpen={open === "confirm"}
        onClose={() => setOpen(null)}
        onConfirm={handleConfirm}
        loading={loading}
        title="Delete Student Record"
        description="This will permanently remove the student and all associated data. This action cannot be undone."
        confirmLabel="Yes, Delete"
        cancelLabel="Keep it"
        variant="danger"
      />

      {/* Loading modal */}
      <Modal isOpen={open === "loading"} onClose={() => setOpen(null)} size="sm" loading>
        <ModalHeader title="Processing" subtitle="Please wait..." onClose={() => setOpen(null)} />
        <ModalBody>
          <p className="text-gray-500 text-sm">Uploading student records to the server...</p>
        </ModalBody>
      </Modal>
    </div>
  );
};