import { PublicNavbar } from "@/components/public/PublicNavbar";
import { Footer } from "@/components/public/Footer";
import { GsapReveal } from "@/components/shared/GsapReveal";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fdf7f7]">
      <PublicNavbar />
      
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <GsapReveal>
            <h1 className="text-5xl font-serif font-bold mb-6">Get In <span className="text-accent">Touch</span></h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">We are here to answer your questions and help you with your journey.</p>
          </GsapReveal>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <GsapReveal>
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold font-serif text-primary mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
                </div>
                <button type="button" className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </GsapReveal>

          <GsapReveal direction="right">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold font-serif text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Main Campus</h4>
                      <p className="text-gray-600 mt-1">Knowledge City, Sector 42<br/>New Delhi, ND 110042</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Phone</h4>
                      <p className="text-gray-600 mt-1">+91 1800-123-4567<br/>Mon-Fri, 9am - 5pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <p className="text-gray-600 mt-1">admissions@salok.edu<br/>info@salok.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GsapReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
