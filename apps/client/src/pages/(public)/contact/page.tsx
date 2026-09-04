import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("\/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("sent");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#fffdf5]">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#1a2b4c] text-white flex items-center overflow-hidden min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
          <GsapReveal>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Get in <span className="text-[#ffb800]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Have questions about admissions, programs, or campus life? Our team is here to help you navigate your journey.
            </p>
          </GsapReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-[#1a2b4c] text-white p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#ffb800] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-8">Contact Info</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#ffb800]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Campus Address</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">Salok University, Education Valley,<br/>Knowledge City, Sector 42,<br/>New Delhi - 110042</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#ffb800]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone Numbers</h4>
                    <p className="text-gray-300 text-sm">Admissions: +91 1800-123-4567<br/>General: +91 11-2345-6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#ffb800]" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Support</h4>
                    <p className="text-gray-300 text-sm">admissions@salok.edu<br/>info@salok.edu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-12 lg:p-16">
            <h3 className="text-3xl font-bold text-[#1a2b4c] mb-2">Send us a Message</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

            {status === "sent" ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h4>
                <p className="text-green-600 mb-6">Thank you for reaching out. We have received your inquiry.</p>
                <button onClick={() => { setStatus("idle"); setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" }) }} className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition-colors">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                    <input required type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007bff] focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                    <input required type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007bff] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007bff] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <select value={form.subject} onChange={(e) => update("subject", e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007bff] focus:border-transparent outline-none transition-all bg-white">
                      <option value="" disabled>Select a topic</option>
                      <option value="Admissions">Admissions Query</option>
                      <option value="Campus Visit">Schedule Campus Visit</option>
                      <option value="Fees & Scholarships">Fees & Scholarships</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea required value={form.message} onChange={(e) => update("message", e.target.value)} rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#007bff] focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm font-bold">An error occurred while sending your message. Please try again.</p>
                )}

                <button disabled={status === "sending"} type="submit" className="w-full md:w-auto bg-[#007bff] hover:bg-blue-700 disabled:bg-blue-300 text-white px-10 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 shadow-lg">
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative mt-20">
        {/* Placeholder for real Google Maps iframe */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <p className="text-gray-500 font-bold flex items-center gap-2"><MapPin /> Interactive Campus Map Embedded Here</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
