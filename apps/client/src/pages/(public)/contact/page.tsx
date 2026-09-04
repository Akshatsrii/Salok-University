import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("${import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1'}/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ firstName: "", lastName: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="bg-[#1a2b4c] text-white py-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1577563908411-50cb98976cfe?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GsapReveal>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Let's <span className="text-[#ffb800]">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
              Have questions about admissions, programs, or partnerships? We'd love to hear from you.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <GsapReveal>
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#1a2b4c] mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center shrink-0 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2b4c] mb-1">Main Campus</h4>
                      <p className="text-gray-600">Salok Technical University,<br/>Knowledge Park, New Delhi - 110001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center shrink-0 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2b4c] mb-1">Phone Numbers</h4>
                      <p className="text-gray-600">Admissions: +91 11-2473931<br/>General Enquiry: +91 11-2473015</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center shrink-0 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1a2b4c] mb-1">Email Addresses</h4>
                      <p className="text-gray-600">Admissions: admissions@salok.edu<br/>Support: helpdesk@salok.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GsapReveal>

          {/* Contact Form */}
          <GsapReveal>
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1a2b4c] mb-6">Send us a message</h3>
              
              {status === "sent" ? (
                <div className="bg-green-50 text-green-700 p-8 rounded-2xl border border-green-100 flex flex-col items-center text-center">
                  <CheckCircle2 className="w-12 h-12 mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button onClick={() => setStatus("idle")} className="mt-6 text-green-700 font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">First Name</label>
                      <input 
                        type="text" 
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all" 
                        placeholder="John" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Last Name</label>
                      <input 
                        type="text" 
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all" 
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all" 
                      placeholder="john@example.com" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message *</label>
                    <textarea 
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#007bff]/20 focus:border-[#007bff] transition-all resize-none" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === "sending"}
                    className="w-full bg-[#ffb800] hover:bg-[#e6a600] text-[#1a2b4c] font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group shadow-md shadow-[#ffb800]/20"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    {status !== "sending" && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

