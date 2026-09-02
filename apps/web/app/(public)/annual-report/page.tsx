import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Download, FileText, TrendingUp } from "lucide-react";

export default function AnnualReportPage() {
  const reports = [
    { year: "2025-26", title: "Scaling New Heights", size: "4.2 MB" },
    { year: "2024-25", title: "Decade of Excellence", size: "3.8 MB" },
    { year: "2023-24", title: "Innovation at Core", size: "5.1 MB" },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      <main className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-blue-50 text-[#007bff] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10" />
            </div>
            <h1 className="text-5xl font-extrabold text-[#1a2b4c] mb-6">Annual <span className="text-[#ffb800]">Reports</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A comprehensive overview of our academic, financial, and institutional growth over the years.</p>
          </div>
        </GsapReveal>
        
        <div className="space-y-6">
          {reports.map((report, i) => (
            <GsapReveal key={i}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex justify-between items-center group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                    <FileText className="w-7 h-7 text-gray-400 group-hover:text-[#007bff] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2b4c] mb-1">{report.title}</h3>
                    <p className="text-gray-500 font-medium">Financial Year {report.year} • PDF ({report.size})</p>
                  </div>
                </div>
                <button className="w-12 h-12 rounded-full border-2 border-gray-100 flex items-center justify-center group-hover:border-[#007bff] group-hover:bg-[#007bff] group-hover:text-white transition-all text-gray-400">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </GsapReveal>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
