import { CheckCircle2, Calendar, FileText, IndianRupee, ArrowRight, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function AdmissionsPage() {
  const steps = [
    { title: "Submit Application", desc: "Fill out the online application form and upload required documents.", icon: FileText },
    { title: "Entrance Exam / Interview", desc: "Appear for the university entrance exam or personal interview.", icon: Calendar },
    { title: "Merit List", desc: "Check the merit list published on the university portal.", icon: CheckCircle2 },
    { title: "Fee Payment", desc: "Secure your admission by paying the first semester fee.", icon: IndianRupee },
  ];

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#1a2b4c] text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070" className="w-full h-full object-cover" alt="Admissions" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2b4c] via-[#1a2b4c]/90 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <GsapReveal>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Join <span className="text-[#ffb800]">Salok</span></h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Take the first step towards a transformative educational experience. Applications for Fall 2027 are now open.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions/apply" className="bg-[#ffb800] text-[#1a2b4c] hover:bg-white px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2 text-lg shadow-xl">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold transition-all text-lg">
                Contact Counselor
              </Link>
            </div>
          </GsapReveal>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GsapReveal>
            <h2 className="text-4xl font-bold text-[#1a2b4c] mb-4">Admission Pathways</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the program level that fits your educational journey.</p>
          </GsapReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Undergraduate", desc: "B.Tech, B.Sc, BBA, B.Arch programs for high school graduates.", icon: Users },
            { title: "Postgraduate", desc: "M.Tech, MBA, M.Sc programs for advanced specialization.", icon: GraduationCap },
            { title: "Doctoral (Ph.D.)", desc: "Research programs for aspiring academicians and scientists.", icon: BookOpen },
          ].map((item, i) => (
            <GsapReveal key={i}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all group cursor-pointer">
                <div className="w-14 h-14 bg-[#1a2b4c] text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#1a2b4c] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <div className="text-[#007bff] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Requirements <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GsapReveal>
            <h2 className="text-4xl font-bold text-center text-[#1a2b4c] mb-16">The Admission Process</h2>
          </GsapReveal>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 bg-gray-200"></div>
            
            {steps.map((step, idx) => (
              <GsapReveal key={idx} className="relative z-10 text-center">
                <div className="w-16 h-16 mx-auto bg-white border-4 border-[#ffb800] rounded-full flex items-center justify-center mb-6 shadow-lg text-[#1a2b4c]">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#1a2b4c] mb-3">Step {idx + 1}: {step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BookOpen(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
}
