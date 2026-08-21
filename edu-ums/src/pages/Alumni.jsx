import React from "react";
import "../styles/alumni.css";

const Alumni = () => {
  const alumniMembers = [
    {
      name: "Rahul Singh",
      role: "Software Engineer – Google",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Pooja Gupta",
      role: "Data Analyst – Amazon",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Aarav Mehta",
      role: "AI Engineer – Meta",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Sneha Kapoor",
      role: "Product Manager – Microsoft",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Vikram Rao",
      role: "Cybersecurity Expert – IBM",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Ananya Sharma",
      role: "UX Designer – Adobe",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <main className="alumni-page">

      {/* ===== Header ===== */}
      <section className="alumni-header">
        <h1>Our Global Alumni Network</h1>
        <p>
          Meet our successful graduates who are making an impact
          across top multinational companies and startups worldwide.
        </p>
      </section>

      {/* ===== Stats ===== */}
      <section className="alumni-stats">
        <div className="stat-card">
          <h2>10,000+</h2>
          <p>Alumni Worldwide</p>
        </div>
        <div className="stat-card">
          <h2>50+</h2>
          <p>Countries</p>
        </div>
        <div className="stat-card">
          <h2>300+</h2>
          <p>Top Companies</p>
        </div>
        <div className="stat-card">
          <h2>95%</h2>
          <p>Placement Rate</p>
        </div>
      </section>

      {/* ===== Alumni Grid ===== */}
      <section className="alumni-grid-section">
        <div className="alumni-grid">
          {alumniMembers.map((alumni, index) => (
            <div key={index} className="alumni-card">
              <img src={alumni.image} alt={alumni.name} />
              <h3>{alumni.name}</h3>
              <p>{alumni.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="alumni-testimonials">
        <h2>Alumni Testimonials</h2>
        <div className="testimonial-box">
          <p>
            “The university provided me with the skills and mentorship
            needed to succeed in the tech industry.”
          </p>
          <span>— Rahul Singh, Google</span>
        </div>
        <div className="testimonial-box">
          <p>
            “The strong academic foundation and practical exposure
            helped me build my career confidently.”
          </p>
          <span>— Pooja Gupta, Amazon</span>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="alumni-cta">
        <h2>Join Our Alumni Network</h2>
        <p>Stay connected, mentor students, and attend alumni events.</p>
        <button className="alumni-btn">Register Now</button>
      </section>

    </main>
  );
};

export default Alumni;
