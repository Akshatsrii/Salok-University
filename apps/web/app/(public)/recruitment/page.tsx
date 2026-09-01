import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Briefcase, ChevronRight, FileText } from "lucide-react";

export default function RecruitmentPage() {
  const jobs = [
    { title: "Assistant Professor (Computer Science)", type: "Full Time", loc: "Main Campus", deadline: "Oct 30, 2026" },
    { title: "Research Scholar (AI Lab)", type: "Contract", loc: "Innovation Center", deadline: "Nov 15, 2026" },
    { title: "System Administrator", type: "Full Time", loc: "IT Dept", deadline: "Oct 20, 2026" },
    { title: "Librarian", type: "Full Time", loc: "Central Library", deadline: "Oct 25, 2026" },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      <main className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <GsapReveal>
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-amber-50 text-[#ffb800] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Briefcase className="w-10 h-10" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#1a2b4c] mb-6 tracking-tight">
              Join Our <span className="text-[#ffb800]">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are always looking for passionate educators, researchers, and professionals to join the Salok family.
            </p>
          </div>
        </GsapReveal>
        
        <GsapReveal>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-[#1a2b4c] p-6 text-white flex justify-between items-center">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#ffb800]" /> Current Openings
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {jobs.map((job, i) => (
                <div key={i} className="p-6 md:p-8 hover:bg-gray-50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group cursor-pointer">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a2b4c] group-hover:text-[#007bff] transition-colors mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 font-medium">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">{job.type}</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full">{job.loc}</span>
                      <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full">Deadline: {job.deadline}</span>
                    </div>
                  </div>
                  <button className="shrink-0 bg-white border-2 border-gray-200 p-3 rounded-xl group-hover:border-[#007bff] group-hover:bg-[#007bff] group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </GsapReveal>
      </main>

      <Footer />
    </div>
  );
}
