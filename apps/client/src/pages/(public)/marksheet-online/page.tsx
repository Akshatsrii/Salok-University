import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { Link } from "react-router-dom";
import { FileText, Download, ChevronRight, CheckCircle2, AlertCircle, Search, CreditCard, Clock } from "lucide-react";

export default function MarksheetOnlinePage() {
  const steps = [
    { title: "Fill Application Form", desc: "Enter your enrollment details and select the required document type.", icon: FileText },
    { title: "Fee Payment", desc: "Pay the processing fee securely via UPI, NetBanking or Card.", icon: CreditCard },
    { title: "Verification", desc: "University admin verifies your academic records and approves the request.", icon: Clock },
    { title: "Dispatch/Download", desc: "Download digital copy instantly or track postal dispatch of hardcopy.", icon: CheckCircle2 }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#111111] to-[#2a1118] text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-wider uppercase mb-2">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Certificate Applications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Online Marksheet & Certificate Portal
            </h1>
            <p className="text-lg text-white/80 max-w-xl mb-8">
              Apply for your semester marksheets, official transcripts, migration certificates, or duplicate degrees completely online without visiting the university campus.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-primary/30">
                Apply Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2">
                <Search className="w-4 h-4" /> Track Status
              </button>
            </div>
          </div>
          
          {/* Tracker Card widget */}
          <div className="w-full lg:w-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2 border-b border-white/20 pb-3">
              <AlertCircle className="w-5 h-5 text-primary" /> Application Guidelines
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                Keep your scanned ID proof ready.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                Standard processing time is 5-7 working days.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                Tatkal (Urgent) service available with additional fee.
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/20">
              <a href="#" className="flex justify-between items-center text-primary font-bold hover:text-white transition-colors group">
                Download Fee Structure PDF
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-16 w-full">
        
        {/* Available Services Grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">Available Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Semester Marksheet", price: "₹ 150", delivery: "Digital + Post", label: "Most Requested" },
            { title: "Official Transcripts", price: "₹ 500", delivery: "Sealed Envelope", label: "For Higher Studies" },
            { title: "Migration Certificate", price: "₹ 250", delivery: "Digital Only" },
            { title: "Provisional Degree", price: "₹ 300", delivery: "Digital + Post" },
            { title: "Duplicate Degree", price: "₹ 1000", delivery: "Post Only", label: "Requires FIR" },
            { title: "Medium of Instruction", price: "₹ 200", delivery: "Digital Only" }
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:border-primary transition-colors relative overflow-hidden group">
              {service.label && (
                <div className="absolute top-4 right-0 bg-[#eab308] text-black text-[10px] font-black uppercase px-2 py-1 rounded-l shadow-sm">
                  {service.label}
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-4">Delivery Mode: {service.delivery}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="text-xl font-black text-primary">{service.price}</span>
                <button className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors">Select &rarr;</button>
              </div>
            </div>
          ))}
        </div>

        {/* How it Works Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Simple 4-Step Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gray-100">
                    <div className="w-0 h-full bg-primary group-hover:w-full transition-all duration-700"></div>
                  </div>
                )}
                <div className="w-20 h-20 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center mb-4 relative z-10 group-hover:border-primary group-hover:bg-red-50 transition-colors">
                  <step.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-white rounded-full text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
