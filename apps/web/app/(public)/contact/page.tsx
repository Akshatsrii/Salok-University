import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fffdf5]">
      {/* Hero */}
      <section className="relative py-24 bg-[#1a2b4c] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Get in <span className="text-[#ffb800]">Touch</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Our team is here to help you with admissions, campus tours, and general inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12 animate-reveal">
            <div>
              <h2 className="text-3xl font-bold text-[#1a2b4c] mb-6">Contact Information</h2>
              <p className="text-gray-500">Reach out to us directly or drop by the campus. We're open Monday to Saturday.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-[#007bff] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2b4c] text-lg">Main Campus</h3>
                  <p className="text-gray-500 mt-1">Salok University, Education Valley<br/>Knowledge Park III, New Delhi 110001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-[#007bff] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2b4c] text-lg">Phone</h3>
                  <p className="text-gray-500 mt-1">+91 1800-123-4567<br/>+91 11-2345-6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-[#007bff] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2b4c] text-lg">Email</h3>
                  <p className="text-gray-500 mt-1">admissions@salok.edu<br/>info@salok.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 animate-reveal" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-[#1a2b4c] mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">First Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:bg-white focus:border-[#007bff] transition-all" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:bg-white focus:border-[#007bff] transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:bg-white focus:border-[#007bff] transition-all" placeholder="you@example.com" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 outline-none focus:bg-white focus:border-[#007bff] transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-[#ffb800] hover:bg-[#e6a600] text-[#1a2b4c] font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4 shadow-md shadow-[#ffb800]/20">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
