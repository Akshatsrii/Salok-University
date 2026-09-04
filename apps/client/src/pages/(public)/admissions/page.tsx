import { CheckCircle2, Calendar, FileText, IndianRupee, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdmissionsPage() {
  const steps = [
    { title: "Submit Application", desc: "Fill out the online application form and upload required documents.", icon: FileText },
    { title: "Entrance Exam / Interview", desc: "Appear for the university entrance exam or personal interview.", icon: Calendar },
    { title: "Merit List", desc: "Check the merit list published on the university portal.", icon: CheckCircle2 },
    { title: "Fee Payment", desc: "Secure your admission by paying the first semester fee.", icon: IndianRupee },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1a2b4c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Join <span className="text-[#ffb800]">Salok University</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Take the first step towards a transformative educational experience. Applications for Fall 2027 are now open.
          </p>
          <Link 
            href="/register" 
            className="inline-flex items-center gap-2 bg-[#ffb800] hover:bg-[#e6a600] text-[#1a2b4c] font-bold py-4 px-8 rounded-full transition-all hover:scale-105 shadow-xl shadow-[#ffb800]/20"
          >
            Apply Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl font-bold text-[#1a2b4c]">Admission Process</h2>
          <p className="text-gray-500 mt-4 text-lg">A simple, transparent 4-step process to begin your journey.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all text-center group animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-16 h-16 bg-blue-50 text-[#007bff] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2b4c] mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
              
              {/* Connector Line (hidden on mobile) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-100 to-transparent z-[-1]"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-reveal">
            <h2 className="text-3xl font-bold text-[#1a2b4c]">Important Dates</h2>
          </div>
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 animate-reveal">
            <div className="space-y-6">
              {[
                { date: "Oct 15, 2026", event: "Early Bird Applications Open" },
                { date: "Jan 30, 2027", event: "Last Date for UG Applications" },
                { date: "Mar 15, 2027", event: "Entrance Examinations" },
                { date: "Apr 10, 2027", event: "First Merit List Announcement" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <span className="text-lg font-semibold text-[#1a2b4c]">{item.date}</span>
                  <span className="text-gray-600 font-medium">{item.event}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
