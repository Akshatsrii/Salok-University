import { Target, Lightbulb, Users, Globe2, BookOpen, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries in education and research." },
    { icon: Users, title: "Inclusivity", desc: "A diverse community where everyone belongs." },
    { icon: Globe2, title: "Global Impact", desc: "Creating solutions for real-world problems." },
    { icon: ShieldCheck, title: "Integrity", desc: "Upholding the highest ethical standards." },
  ];

  const stats = [
    { value: "350+", label: "Acres Campus" },
    { value: "22k+", label: "Students" },
    { value: "65+", label: "Countries Represented" },
    { value: "1,200+", label: "Expert Faculty" }
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Hero Section */}
      <section className="relative py-24 text-white overflow-hidden" style={{ background: "var(--foreground)" }}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-reveal">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Our <span style={{ color: "var(--primary)" }}>Story</span></h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Founded with a vision to redefine higher education, Salok University is creating leaders who are academically proficient and socially responsible.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-12 animate-reveal">
            <div>
              <div className="flex items-center gap-3 mb-4" style={{ color: "var(--accent)" }}>
                <Target className="w-8 h-8" />
                <h2 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted">
                To provide transformative education that empowers individuals to reach their highest potential, fostering critical thinking, creativity, and a lifelong passion for learning.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4" style={{ color: "var(--primary)" }}>
                <BookOpen className="w-8 h-8" />
                <h2 className="text-3xl font-bold" style={{ color: "var(--foreground)" }}>Our Vision</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted">
                To be a globally recognized institution of excellence, driving innovation and societal progress through cutting-edge research and holistic education.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-reveal" style={{ animationDelay: '0.2s' }}>
            {values.map((v, i) => (
              <div key={i} className="card p-6 text-center md:text-left">
                <div className="mx-auto md:mx-0 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mb-4" style={{ background: "color-mix(in srgb, var(--accent) 10%, transparent)", color: "var(--accent)" }}>
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--foreground)" }}>{v.title}</h3>
                <p className="text-sm text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y" style={{ background: "var(--card-bg)", borderColor: "var(--card-border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl font-extrabold" style={{ color: "var(--foreground)" }}>{stat.value}</div>
                <div className="font-medium text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center animate-reveal">
        <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Be Part of Our Journey</h2>
        <Link href="/register" className="btn-primary !px-10 !py-4 text-lg">
          Apply Now
        </Link>
      </section>
    </div>
  );
}
