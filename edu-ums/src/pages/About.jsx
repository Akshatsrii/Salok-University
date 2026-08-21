import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <main className="about-page">
      {/* Hero Banner Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">About EDUFULOW University</h1>
          <p className="hero-subtitle">
            A premier institution dedicated to excellence in education, research,
            innovation and student success.
          </p>
          <div className="hero-badges">
            <span className="badge">Accredited</span>
            <span className="badge">Top Ranked</span>
            <span className="badge">Global Recognition</span>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="about-intro">
        <div className="about-container">
          <div className="about-left">
            <div className="image-wrapper">
              <img
                src="/pages/cp.jpg"
                alt="Campus"
                className="about-image"
              />
              <div className="image-badge">Est. 1995</div>
            </div>
          </div>

          <div className="about-right">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Leading the Way in Higher Education</h2>
            <p className="section-text">
              EDUFULOW University is committed to shaping the future of students
              through world-class education, advanced learning resources, and 
              an inclusive academic environment. With a skilled faculty team,
              modern labs, library facilities and an innovative learning culture,
              we prepare students to meet global challenges.
            </p>

            <p className="section-text">
              Our mission is to empower individuals with knowledge, skills,
              leadership qualities and a strong sense of responsibility towards
              society. We foster critical thinking, creativity, and ethical
              leadership in all our programs.
            </p>

            <div className="features-list">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Industry-Aligned Curriculum</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>State-of-the-Art Infrastructure</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Global Career Opportunities</span>
              </div>
            </div>

            <a href="/course.html" className="btn primary-btn">
              Explore Courses →
            </a>
          </div>
        </div>
      </section>

      {/* University Stats */}
      <section className="about-stats">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-icon">👨‍🎓</div>
            <h2 className="stat-number">10,000+</h2>
            <p className="stat-label">Students Enrolled</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">📚</div>
            <h2 className="stat-number">150+</h2>
            <p className="stat-label">Courses Offered</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">👩‍🏫</div>
            <h2 className="stat-number">500+</h2>
            <p className="stat-label">Expert Faculty</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🎯</div>
            <h2 className="stat-number">95%</h2>
            <p className="stat-label">Placement Rate</p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vm-header">
          <span className="section-label">Our Foundation</span>
          <h2 className="section-title">Vision & Mission</h2>
          <p className="section-subtitle">Guiding principles that drive our commitment to excellence</p>
        </div>

        <div className="vm-container">
          <div className="vm-card vision-card">
            <div className="vm-icon">🎓</div>
            <h3>Our Vision</h3>
            <p>
              To be a globally recognized institution that excels in education,
              research, creativity, and innovation, producing leaders who shape
              the future of their industries and communities.
            </p>
          </div>

          <div className="vm-card mission-card">
            <div className="vm-icon">🚀</div>
            <h3>Our Mission</h3>
            <p>
              To develop competent professionals through quality education and
              industry-driven learning that leads to societal growth, fostering
              innovation, ethical leadership, and global citizenship.
            </p>
          </div>

          <div className="vm-card values-card">
            <div className="vm-icon">⭐</div>
            <h3>Our Values</h3>
            <p>
              Excellence, Integrity, Innovation, Inclusivity, and Social
              Responsibility form the core of everything we do at EDUFULOW
              University.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="why-container">
          <div className="why-left">
            <span className="section-label">Why EDUFULOW</span>
            <h2 className="section-title">Why Choose Us?</h2>
            <p className="section-text">
              EDUFULOW University stands out as a beacon of academic excellence,
              offering unique advantages that prepare you for success in a
              competitive world.
            </p>

            <div className="why-features">
              <div className="why-item">
                <div className="why-number">01</div>
                <div className="why-content">
                  <h4>Expert Faculty</h4>
                  <p>Learn from industry professionals and PhD scholars with years of experience</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">02</div>
                <div className="why-content">
                  <h4>Modern Infrastructure</h4>
                  <p>Advanced labs, smart classrooms, digital library, and research centers</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">03</div>
                <div className="why-content">
                  <h4>Industry Partnerships</h4>
                  <p>Collaborations with top companies for internships and placements</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">04</div>
                <div className="why-content">
                  <h4>Global Exposure</h4>
                  <p>International exchange programs, study abroad opportunities, and global certifications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-right">
            <div className="achievement-cards">
              <div className="achievement-card">
                <h3>🏆 Ranked #1</h3>
                <p>Top University in the Region</p>
              </div>
              <div className="achievement-card">
                <h3>🌟 A+ Grade</h3>
                <p>NAAC Accreditation</p>
              </div>
              <div className="achievement-card">
                <h3>🌍 50+</h3>
                <p>International Tie-ups</p>
              </div>
              <div className="achievement-card">
                <h3>💼 500+</h3>
                <p>Placement Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="campus-life">
        <div className="campus-header">
          <span className="section-label">Experience EDUFULOW</span>
          <h2 className="section-title">Vibrant Campus Life</h2>
          <p className="section-subtitle">
            Our campus is filled with opportunities for growth, learning, and fun.
            From clubs and events to workshops and recreational activities.
          </p>
        </div>

        <div className="campus-gallery">
          <div className="gallery-item">
            <img src="/pages/it.jpg" alt="IT Lab" />
            <div className="gallery-overlay">
              <h4>Technology Labs</h4>
              <p>State-of-the-art facilities</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/pages/marketing.jpg" alt="Marketing Class" />
            <div className="gallery-overlay">
              <h4>Interactive Learning</h4>
              <p>Modern classrooms</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/pages/finance.jpeg" alt="Finance Department" />
            <div className="gallery-overlay">
              <h4>Research Centers</h4>
              <p>Innovation hubs</p>
            </div>
          </div>
        </div>

        <div className="campus-features">
          <div className="campus-feature">
            <span className="campus-icon">🎭</span>
            <h4>Cultural Events</h4>
            <p>Annual fests, competitions, and celebrations</p>
          </div>
          <div className="campus-feature">
            <span className="campus-icon">⚽</span>
            <h4>Sports Facilities</h4>
            <p>Indoor & outdoor sports complexes</p>
          </div>
          <div className="campus-feature">
            <span className="campus-icon">🔬</span>
            <h4>Research Labs</h4>
            <p>Cutting-edge research opportunities</p>
          </div>
          <div className="campus-feature">
            <span className="campus-icon">🏢</span>
            <h4>Student Clubs</h4>
            <p>50+ clubs for diverse interests</p>
          </div>
        </div>
      </section>

      {/* Accreditation & Recognition */}
      <section className="accreditation">
        <div className="accreditation-content">
          <span className="section-label">Recognized Excellence</span>
          <h2 className="section-title">Accreditations & Rankings</h2>
          
          <div className="accreditation-grid">
            <div className="accred-item">
              <div className="accred-badge">NAAC</div>
              <p>A+ Grade Accredited</p>
            </div>
            <div className="accred-item">
              <div className="accred-badge">UGC</div>
              <p>Approved University</p>
            </div>
            <div className="accred-item">
              <div className="accred-badge">NBA</div>
              <p>Certified Programs</p>
            </div>
            <div className="accred-item">
              <div className="accred-badge">NIRF</div>
              <p>Top 50 Ranked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Join EDUFULOW University?</h2>
            <p className="cta-text">
              Take the first step towards a successful future. Apply now and become
              part of our thriving academic community.
            </p>
          </div>

          <div className="cta-actions">
            <a href="/registration.html" className="btn primary-btn">
              Apply Now →
            </a>
            <a href="/contact.html" className="btn secondary-btn">
              Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;