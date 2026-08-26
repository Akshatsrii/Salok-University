"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
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

  const contactDetails = [
    { icon: MapPin, title: "Main Campus", lines: ["Salok University, Education Valley", "Knowledge Park III, New Delhi 110001"] },
    { icon: Phone, title: "Phone", lines: ["+91 1800-123-4567", "+91 11-2345-6789"] },
    { icon: Mail, title: "Email", lines: ["admissions@salok.edu", "info@salok.edu"] },
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <section className="relative py-24 text-white overflow-hidden" style={{ background: "var(--foreground)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Get in <span style={{ color: "var(--primary)" }}>Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Have questions? Our team is here to help you with admissions, campus tours, and general inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12 animate-reveal">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Contact Information</h2>
              <p className="text-muted">Reach out to us directly or drop by the campus. We're open Monday to Saturday.</p>
            </div>

            <div className="space-y-8">
              {contactDetails.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)", color: "var(--accent)" }}
                  >
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: "var(--foreground)" }}>{c.title}</h3>
                    {c.lines.map((line, j) => (
                      <p key={j} className="text-muted mt-1">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card !rounded-3xl p-8 md:p-10 !shadow-xl animate-reveal" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Send us a message</h3>

            {status === "sent" ? (
              <div
                className="rounded-xl p-6 text-center font-semibold"
                style={{ background: "color-mix(in srgb, var(--success) 8%, transparent)", color: "var(--success)" }}
              >
                Thanks — we've received your message and will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div
                    className="rounded-xl p-3 text-sm font-semibold"
                    style={{ background: "color-mix(in srgb, var(--danger) 8%, transparent)", color: "var(--danger)" }}
                  >
                    Something went wrong sending your message. Please try again.
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label className="label-field">First Name</label>
                    <input className="input-field" placeholder="John" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <label className="label-field">Last Name</label>
                    <input className="input-field" placeholder="Doe" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="label-field">Email Address</label>
                  <input type="email" required className="input-field" placeholder="you@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                </div>

                <div className="space-y-1">
                  <label className="label-field">Message</label>
                  <textarea required rows={4} className="input-field resize-none" placeholder="How can we help you?" value={form.message} onChange={(e) => update("message", e.target.value)} />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full !py-4 gap-2 mt-4">
                  <Send className="w-5 h-5" />
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
