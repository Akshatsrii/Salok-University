import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { FileCheck, ShieldCheck, Download } from "lucide-react";

export default function DisclosuresPage() {
  const categories = [
    {
      title: "Regulatory Approvals",
      items: ["UGC Approval Letter (2026)", "AICTE Mandatory Disclosure", "NBA Accreditation Report", "NAAC Grade Sheet (A++)"]
    },
    {
      title: "Financial Disclosures",
      items: ["Audited Financial Statements (2025-26)", "Fee Fixation Committee Report", "Research Grants & Utilization"]
    },
    {
      title: "Institutional Policies",
      items: ["Anti-Ragging Policy", "Women Cell & POSH Guidelines", "IT & Data Privacy Policy", "Equal Opportunity Cell Policy"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      <main className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-extrabold text-[#1a2b4c] mb-6 tracking-tight">
              Public <span className="text-green-600">Disclosures</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We believe in complete transparency. Access our mandatory disclosures, approvals, and institutional policies.
            </p>
          </div>
        </GsapReveal>
        
        <div className="space-y-8">
          {categories.map((cat, i) => (
            <GsapReveal key={i}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-100 px-8 py-5 flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-[#1a2b4c]" />
                  <h2 className="text-xl font-bold text-[#1a2b4c]">{cat.title}</h2>
                </div>
                <div className="divide-y divide-gray-100">
                  {cat.items.map((item, j) => (
                    <div key={j} className="px-8 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
                      <span className="text-gray-700 font-medium group-hover:text-[#007bff] transition-colors">{item}</span>
                      <Download className="w-5 h-5 text-gray-400 group-hover:text-[#007bff]" />
                    </div>
                  ))}
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
