import { useGsapReveal } from "../../hooks/useGsapReveal";

export function GsapReveal({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useGsapReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
