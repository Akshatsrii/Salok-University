import { Construction } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <Construction className="w-24 h-24 mb-8" style={{ color: "var(--primary)" }} />
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Association</h1>
      <p className="text-lg text-gray-500 max-w-2xl mb-8">
        Our comprehensive alumni portal is currently under development. Stay tuned!
      </p>
      <Link href="/" className="btn-primary">
        Return to Homepage
      </Link>
    </div>
  );
}
