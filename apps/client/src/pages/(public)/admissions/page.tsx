import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <PublicNavbar />
      
      <section className="bg-primary-dark text-white py-24">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <GsapReveal>
              <h1 className="text-5xl font-serif font-bold mb-6">Begin Your <span className="text-accent">Journey</span></h1>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Join a community of scholars, creators, and innovators. Admissions for the Fall 2026 intake are now open.
              </p>
              <Link to="/admissions/apply" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded font-bold hover:bg-white transition-colors">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Link>
            </GsapReveal>
          </div>
          <div className="md:w-1/2 w-full">
            <GsapReveal direction="right">
              <div className="bg-white rounded-2xl p-8 text-primary shadow-2xl relative">
                <div className="absolute -top-4 -right-4 bg-accent text-primary font-bold px-4 py-1 rounded-full shadow-lg">New</div>
                <h3 className="text-2xl font-bold mb-6">Important Dates</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Application Deadline", date: "August 15, 2026" },
                    { label: "Entrance Examination", date: "September 02, 2026" },
                    { label: "Merit List Publication", date: "September 15, 2026" },
                    { label: "Classes Commence", date: "October 01, 2026" }
                  ].map((item, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-primary font-bold">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GsapReveal>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <GsapReveal>
          <h2 className="text-4xl font-serif font-bold text-primary mb-16">How to Apply</h2>
        </GsapReveal>
        <div className="grid md:grid-cols-4 gap-8">
          {["Create an Account", "Fill Application Form", "Upload Documents", "Pay Application Fee"].map((step, i) => (
            <GsapReveal key={i} delay={i*0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-primary/10 relative">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-lg">
                  {i+1}
                </div>
                <h4 className="mt-6 text-lg font-bold text-primary">{step}</h4>
              </div>
            </GsapReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
