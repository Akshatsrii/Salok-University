import React, { useState } from "react";
import "../styles/courses.css";

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Courses", icon: "📚" },
    { id: "engineering", name: "Engineering", icon: "⚙️" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "technology", name: "Technology", icon: "💻" },
    { id: "science", name: "Science", icon: "🔬" },
    { id: "arts", name: "Arts & Humanities", icon: "🎨" }
  ];

  const courses = [
    {
      id: 1,
      title: "B.Tech in Computer Science",
      category: "engineering",
      duration: "4 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      description: "Comprehensive program covering programming, AI, machine learning, data structures, and software engineering.",
      features: ["100% Placement", "Industry Projects", "Expert Faculty"],
      rating: 4.8,
      students: "2,500+"
    },
    {
      id: 2,
      title: "BCA (Computer Applications)",
      category: "technology",
      duration: "3 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      description: "Learn software development, cloud computing, web technologies, and mobile app development.",
      features: ["Practical Learning", "Live Projects", "Internships"],
      rating: 4.7,
      students: "1,800+"
    },
    {
      id: 3,
      title: "MCA (Master of Computer Applications)",
      category: "technology",
      duration: "2 Years",
      level: "Postgraduate",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
      description: "Advanced programming, cybersecurity, AI/ML, blockchain, and full-stack development.",
      features: ["Research Focus", "Industry Tie-ups", "High ROI"],
      rating: 4.9,
      students: "950+"
    },
    {
      id: 4,
      title: "MBA in Marketing",
      category: "business",
      duration: "2 Years",
      level: "Postgraduate",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      description: "Leadership program focusing on digital marketing, brand management, and consumer analytics.",
      features: ["Global Exposure", "Live Case Studies", "Top Placements"],
      rating: 4.8,
      students: "1,200+"
    },
    {
      id: 5,
      title: "BBA in Marketing",
      category: "business",
      duration: "3 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      description: "Business fundamentals, marketing strategies, advertising, and entrepreneurship skills.",
      features: ["Skill Development", "Industry Visits", "Networking"],
      rating: 4.6,
      students: "2,100+"
    },
    {
      id: 6,
      title: "B.Com (Finance)",
      category: "business",
      duration: "3 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800",
      description: "Accounting, taxation, investment banking, financial analysis, and portfolio management.",
      features: ["CA Foundation", "Banking Focus", "Placement Support"],
      rating: 4.7,
      students: "1,600+"
    },
    {
      id: 7,
      title: "M.Com (Finance)",
      category: "business",
      duration: "2 Years",
      level: "Postgraduate",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
      description: "Advanced financial systems, corporate finance, financial modeling, and risk management.",
      features: ["Research Projects", "CFA Prep", "Expert Mentors"],
      rating: 4.8,
      students: "850+"
    },
    {
      id: 8,
      title: "B.Tech in Mechanical Engineering",
      category: "engineering",
      duration: "4 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      description: "Thermodynamics, mechanics, robotics, CAD/CAM, and manufacturing processes.",
      features: ["Modern Labs", "Industrial Training", "Core Jobs"],
      rating: 4.7,
      students: "1,900+"
    },
    {
      id: 9,
      title: "B.Tech in Electrical Engineering",
      category: "engineering",
      duration: "4 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
      description: "Power systems, electronics, control systems, renewable energy, and automation.",
      features: ["GATE Coaching", "Power Projects", "Government Jobs"],
      rating: 4.6,
      students: "1,500+"
    },
    {
      id: 10,
      title: "B.Tech in Civil Engineering",
      category: "engineering",
      duration: "4 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
      description: "Structural design, construction management, urban planning, and environmental engineering.",
      features: ["Site Visits", "AutoCAD Training", "PSU Preparation"],
      rating: 4.5,
      students: "1,400+"
    },
    {
      id: 11,
      title: "B.Sc in Data Science",
      category: "science",
      duration: "3 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      description: "Statistics, machine learning, data visualization, big data analytics, and Python programming.",
      features: ["Hands-on Projects", "Industry Tools", "High Demand"],
      rating: 4.9,
      students: "1,100+"
    },
    {
      id: 12,
      title: "B.Sc in Biotechnology",
      category: "science",
      duration: "3 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
      description: "Genetic engineering, molecular biology, bioinformatics, and pharmaceutical sciences.",
      features: ["Research Labs", "PhD Pathway", "Innovation Focus"],
      rating: 4.6,
      students: "800+"
    },
    {
      id: 13,
      title: "BA in English Literature",
      category: "arts",
      duration: "3 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
      description: "Literary analysis, creative writing, linguistics, communication skills, and cultural studies.",
      features: ["Creative Writing", "Publishing Internships", "Media Skills"],
      rating: 4.5,
      students: "950+"
    },
    {
      id: 14,
      title: "BFA in Graphic Design",
      category: "arts",
      duration: "4 Years",
      level: "Undergraduate",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
      description: "Visual design, typography, branding, UI/UX, Adobe Creative Suite, and portfolio building.",
      features: ["Industry Software", "Portfolio Projects", "Freelance Ready"],
      rating: 4.7,
      students: "700+"
    },
    {
      id: 15,
      title: "MBA in Finance",
      category: "business",
      duration: "2 Years",
      level: "Postgraduate",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      description: "Corporate finance, investment banking, financial markets, derivatives, and wealth management.",
      features: ["Bloomberg Terminal", "Live Trading", "Bank Placements"],
      rating: 4.9,
      students: "1,300+"
    }
  ];

  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <main className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Explore Our Courses</h1>
          <p className="hero-subtitle">
            Discover world-class programs designed to prepare you for tomorrow's challenges.
            Choose from 150+ courses across multiple disciplines.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>150+</strong>
              <span>Courses</span>
            </div>
            <div className="hero-stat">
              <strong>10k+</strong>
              <span>Students</span>
            </div>
            <div className="hero-stat">
              <strong>95%</strong>
              <span>Placement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter-section">
        <div className="filter-container">
          <h2 className="filter-title">Browse by Category</h2>
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span className="tab-name">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="featured-container">
          <div className="section-header">
            <span className="section-label">Popular Programs</span>
            <h2 className="section-title">Top Categories</h2>
          </div>

          <div className="category-grid">
            <div className="category-card engineering">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" alt="Engineering" />
              </div>
              <div className="category-content">
                <div className="category-icon">⚙️</div>
                <h3>Engineering</h3>
                <p>Cutting-edge programs in CS, Mechanical, Electrical, and Civil Engineering</p>
                <div className="category-meta">
                  <span>5 Programs</span>
                  <span>•</span>
                  <span>8,300+ Students</span>
                </div>
              </div>
            </div>

            <div className="category-card business">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800" alt="Business" />
              </div>
              <div className="category-content">
                <div className="category-icon">💼</div>
                <h3>Business & Management</h3>
                <p>MBA, BBA, and Commerce programs for future business leaders</p>
                <div className="category-meta">
                  <span>5 Programs</span>
                  <span>•</span>
                  <span>7,050+ Students</span>
                </div>
              </div>
            </div>

            <div className="category-card technology">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800" alt="Technology" />
              </div>
              <div className="category-content">
                <div className="category-icon">💻</div>
                <h3>Technology & IT</h3>
                <p>BCA, MCA, and Data Science for tech enthusiasts</p>
                <div className="category-meta">
                  <span>3 Programs</span>
                  <span>•</span>
                  <span>3,850+ Students</span>
                </div>
              </div>
            </div>

            <div className="category-card science">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800" alt="Science" />
              </div>
              <div className="category-content">
                <div className="category-icon">🔬</div>
                <h3>Science & Research</h3>
                <p>Data Science and Biotechnology programs with research focus</p>
                <div className="category-meta">
                  <span>2 Programs</span>
                  <span>•</span>
                  <span>1,900+ Students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-grid-section">
        <div className="courses-container">
          <div className="section-header">
            <h2 className="section-title">
              {activeCategory === "all" ? "All Courses" : categories.find(c => c.id === activeCategory)?.name}
            </h2>
            <p className="courses-count">{filteredCourses.length} courses available</p>
          </div>

          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-badge">{course.level}</div>
                  <div className="course-rating">
                    <span className="star">⭐</span>
                    <span className="rating-value">{course.rating}</span>
                  </div>
                </div>

                <div className="course-body">
                  <div className="course-meta">
                    <span className="duration">📅 {course.duration}</span>
                    <span className="students">👥 {course.students}</span>
                  </div>

                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>

                  <div className="course-features">
                    {course.features.map((feature, index) => (
                      <span key={index} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>
                </div>

                <div className="course-footer">
                  <a href="/registration.html" className="btn primary-btn">
                    Apply Now
                  </a>
                  <button className="btn-icon">
                    <span>ℹ️</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="why-courses-section">
        <div className="why-courses-container">
          <div className="section-header centered">
            <span className="section-label">Benefits</span>
            <h2 className="section-title">Why Choose EDUFULOW Courses?</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Industry-Aligned Curriculum</h3>
              <p>Courses designed with input from top companies and industry experts</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">👨‍🏫</div>
              <h3>Expert Faculty</h3>
              <p>Learn from PhDs, industry professionals, and experienced educators</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💼</div>
              <h3>100% Placement Support</h3>
              <p>Dedicated placement cell with 500+ hiring partners</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🔬</div>
              <h3>Modern Infrastructure</h3>
              <p>State-of-the-art labs, libraries, and learning facilities</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🌍</div>
              <h3>Global Exposure</h3>
              <p>International exchange programs and study abroad opportunities</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">📜</div>
              <h3>Recognized Degrees</h3>
              <p>UGC approved and NAAC A+ accredited programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Journey?</h2>
            <p className="cta-text">
              Join 10,000+ students who are building their future with EDUFULOW University.
              Apply today and get started with your dream course.
            </p>
          </div>

          <div className="cta-actions">
            <a href="/registration.html" className="btn primary-btn large">
              Apply Now →
            </a>
            <a href="/contact.html" className="btn secondary-btn large">
              Talk to Counselor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Courses;