import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/faculty.css";

const Faculty = () => {
  const [selectedDept, setSelectedDept] = useState("all");

  const facultyMembers = [
    {
      name: "Dr. Rohan Kumar",
      role: "Professor",
      department: "Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      experience: "12 Years",
      education: "PhD in Computer Science, IIT Delhi",
      publications: "45+ Research Papers",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      email: "rohan.kumar@edufulow.edu"
    },
    {
      name: "Dr. Meera Sharma",
      role: "Associate Professor",
      department: "Management",
      specialization: "Strategic Management & Leadership",
      experience: "10 Years",
      education: "PhD in Management, Harvard Business School",
      publications: "38+ Research Papers",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      email: "meera.sharma@edufulow.edu"
    },
    {
      name: "Prof. Anil Verma",
      role: "Assistant Professor",
      department: "Finance",
      specialization: "Investment Banking & Financial Markets",
      experience: "8 Years",
      education: "PhD in Finance, London School of Economics",
      publications: "30+ Research Papers",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      email: "anil.verma@edufulow.edu"
    },
    {
      name: "Dr. Kavita Rao",
      role: "Professor",
      department: "Computer Science",
      specialization: "Deep Learning & Neural Networks",
      experience: "15 Years",
      education: "PhD in AI, Stanford University",
      publications: "62+ Research Papers",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      email: "kavita.rao@edufulow.edu"
    },
    {
      name: "Dr. Arjun Patel",
      role: "Associate Professor",
      department: "Data Science",
      specialization: "Big Data Analytics & Visualization",
      experience: "11 Years",
      education: "PhD in Data Science, MIT",
      publications: "41+ Research Papers",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      email: "arjun.patel@edufulow.edu"
    },
    {
      name: "Prof. Priya Singh",
      role: "Assistant Professor",
      department: "Marketing",
      specialization: "Digital Marketing & Brand Strategy",
      experience: "7 Years",
      education: "PhD in Marketing, INSEAD",
      publications: "28+ Research Papers",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
      email: "priya.singh@edufulow.edu"
    },
    {
      name: "Dr. Rajesh Malhotra",
      role: "Professor",
      department: "Engineering",
      specialization: "Robotics & Automation",
      experience: "14 Years",
      education: "PhD in Mechanical Engineering, Cambridge",
      publications: "55+ Research Papers",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      email: "rajesh.malhotra@edufulow.edu"
    },
    {
      name: "Dr. Sneha Desai",
      role: "Associate Professor",
      department: "Data Science",
      specialization: "Predictive Analytics & ML",
      experience: "9 Years",
      education: "PhD in Statistics, UC Berkeley",
      publications: "36+ Research Papers",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
      email: "sneha.desai@edufulow.edu"
    },
    {
      name: "Prof. Vikram Chawla",
      role: "Assistant Professor",
      department: "Computer Science",
      specialization: "Cybersecurity & Blockchain",
      experience: "6 Years",
      education: "PhD in Computer Security, Oxford",
      publications: "25+ Research Papers",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
      email: "vikram.chawla@edufulow.edu"
    },
    {
      name: "Dr. Anjali Kapoor",
      role: "Professor",
      department: "Management",
      specialization: "Organizational Behavior & HR",
      experience: "13 Years",
      education: "PhD in HRM, Wharton School",
      publications: "48+ Research Papers",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
      email: "anjali.kapoor@edufulow.edu"
    },
    {
      name: "Dr. Sanjay Gupta",
      role: "Professor",
      department: "Finance",
      specialization: "Corporate Finance & Risk Management",
      experience: "16 Years",
      education: "PhD in Finance, Columbia University",
      publications: "58+ Research Papers",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500&q=80",
      email: "sanjay.gupta@edufulow.edu"
    },
    {
      name: "Prof. Neha Reddy",
      role: "Assistant Professor",
      department: "Arts",
      specialization: "English Literature & Creative Writing",
      experience: "5 Years",
      education: "PhD in English, Yale University",
      publications: "22+ Research Papers",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
      email: "neha.reddy@edufulow.edu"
    },
    {
      name: "Dr. Karan Saxena",
      role: "Associate Professor",
      department: "Engineering",
      specialization: "Electrical Systems & Renewable Energy",
      experience: "10 Years",
      education: "PhD in Electrical Engineering, TU Munich",
      publications: "42+ Research Papers",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=500&q=80",
      email: "karan.saxena@edufulow.edu"
    },
    {
      name: "Dr. Pooja Nair",
      role: "Professor",
      department: "Science",
      specialization: "Biotechnology & Genetic Engineering",
      experience: "14 Years",
      education: "PhD in Biotechnology, Johns Hopkins",
      publications: "51+ Research Papers",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
      email: "pooja.nair@edufulow.edu"
    },
    {
      name: "Prof. Aditya Joshi",
      role: "Assistant Professor",
      department: "Marketing",
      specialization: "Consumer Behavior & Market Research",
      experience: "7 Years",
      education: "PhD in Marketing, Northwestern University",
      publications: "29+ Research Papers",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
      email: "aditya.joshi@edufulow.edu"
    }
  ];

  const departments = [
    { id: "all", name: "All Departments", icon: "📚", count: 15 },
    { id: "Computer Science", name: "Computer Science", icon: "💻", count: 3 },
    { id: "Management", name: "Management", icon: "💼", count: 2 },
    { id: "Finance", name: "Finance", icon: "💰", count: 2 },
    { id: "Data Science", name: "Data Science", icon: "📊", count: 2 },
    { id: "Engineering", name: "Engineering", icon: "⚙️", count: 2 },
    { id: "Marketing", name: "Marketing", icon: "📱", count: 2 },
    { id: "Arts", name: "Arts & Humanities", icon: "🎨", count: 1 },
    { id: "Science", name: "Science", icon: "🔬", count: 1 }
  ];

  const filteredFaculty = selectedDept === "all" 
    ? facultyMembers 
    : facultyMembers.filter(member => member.department === selectedDept);

  return (
    <main className="faculty-page">
      {/* ================= HERO SECTION ================= */}
      <section className="faculty-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Distinguished Faculty</h1>
          <p className="hero-subtitle">
            Meet our highly experienced and qualified faculty members dedicated to
            shaping the future through innovation, research, and excellence in teaching.
          </p>
          <div className="hero-badges">
            <span className="badge">World-Class Educators</span>
            <span className="badge">Research Excellence</span>
            <span className="badge">Industry Experts</span>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="faculty-stats">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-icon">👨‍🏫</div>
            <h2 className="stat-number">500+</h2>
            <p className="stat-label">Faculty Members</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🎓</div>
            <h2 className="stat-number">85%</h2>
            <p className="stat-label">PhD Holders</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">📚</div>
            <h2 className="stat-number">2,000+</h2>
            <p className="stat-label">Research Papers</p>
          </div>
          <div className="stat-box">
            <div className="stat-icon">⏱️</div>
            <h2 className="stat-number">12+ Yrs</h2>
            <p className="stat-label">Avg Experience</p>
          </div>
        </div>
      </section>

      {/* ================= DEPARTMENT FILTER ================= */}
      <section className="dept-filter-section">
        <div className="filter-container">
          <h2 className="filter-title">Browse by Department</h2>
          <div className="dept-tabs">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`dept-tab ${selectedDept === dept.id ? 'active' : ''}`}
                onClick={() => setSelectedDept(dept.id)}
              >
                <span className="tab-icon">{dept.icon}</span>
                <span className="tab-name">{dept.name}</span>
                <span className="tab-count">({dept.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FACULTY GRID ================= */}
      <section className="faculty-grid-section">
        <div className="section-header">
          <h2 className="section-title">
            {selectedDept === "all" ? "All Faculty Members" : `${selectedDept} Department`}
          </h2>
          <p className="faculty-count">{filteredFaculty.length} faculty members</p>
        </div>

        <div className="faculty-grid">
          {filteredFaculty.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <div className="faculty-image-wrapper">
                <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                <div className="faculty-overlay">
                  <div className="overlay-content">
                    <p className="faculty-email">✉️ {faculty.email}</p>
                    <div className="social-links">
                      <button className="social-btn">📧</button>
                      <button className="social-btn">🔗</button>
                      <button className="social-btn">📄</button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="faculty-info">
                <h3 className="faculty-name">{faculty.name}</h3>
                <p className="faculty-role">{faculty.role}</p>
                <p className="faculty-dept">{faculty.department}</p>
                
                <div className="faculty-details">
                  <div className="detail-item">
                    <span className="detail-icon">🎯</span>
                    <span className="detail-text">{faculty.specialization}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📚</span>
                    <span className="detail-text">{faculty.education}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">⏱️</span>
                    <span className="detail-text">{faculty.experience} Experience</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📄</span>
                    <span className="detail-text">{faculty.publications}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACADEMIC DEPARTMENTS ================= */}
      <section className="academic-dept-section">
        <div className="section-header centered">
          <span className="section-label">Academic Excellence</span>
          <h2 className="section-title">Our Academic Departments</h2>
          <p className="section-subtitle">
            Comprehensive programs across multiple disciplines with cutting-edge curriculum
          </p>
        </div>

        <div className="dept-grid">
          <div className="dept-card cs">
            <div className="dept-icon">💻</div>
            <h3>Computer Science & IT</h3>
            <p>
              AI, Machine Learning, Cybersecurity, Cloud Computing, Software Engineering,
              Data Structures, Blockchain, IoT, Web Development & Mobile Apps.
            </p>
            <div className="dept-meta">
              <span>8 Programs</span>
              <span>•</span>
              <span>75+ Faculty</span>
            </div>
          </div>

          <div className="dept-card business">
            <div className="dept-icon">💼</div>
            <h3>Business & Management</h3>
            <p>
              Business Analytics, Strategic Management, Finance, HR, Marketing, 
              Entrepreneurship, Operations Management & Leadership.
            </p>
            <div className="dept-meta">
              <span>6 Programs</span>
              <span>•</span>
              <span>60+ Faculty</span>
            </div>
          </div>

          <div className="dept-card finance">
            <div className="dept-icon">💰</div>
            <h3>Commerce & Finance</h3>
            <p>
              Accounting, Taxation, Economics, Investment Banking, Corporate Finance,
              Financial Planning, Auditing & Risk Management.
            </p>
            <div className="dept-meta">
              <span>5 Programs</span>
              <span>•</span>
              <span>50+ Faculty</span>
            </div>
          </div>

          <div className="dept-card engineering">
            <div className="dept-icon">⚙️</div>
            <h3>Engineering</h3>
            <p>
              Mechanical, Electrical, Civil, Electronics, Robotics, Automation,
              CAD/CAM, Power Systems & Renewable Energy.
            </p>
            <div className="dept-meta">
              <span>10 Programs</span>
              <span>•</span>
              <span>100+ Faculty</span>
            </div>
          </div>

          <div className="dept-card data">
            <div className="dept-icon">📊</div>
            <h3>Data Science & Analytics</h3>
            <p>
              Big Data, Predictive Analytics, Data Visualization, Business Intelligence,
              Statistical Modeling, Python, R & Machine Learning.
            </p>
            <div className="dept-meta">
              <span>4 Programs</span>
              <span>•</span>
              <span>45+ Faculty</span>
            </div>
          </div>

          <div className="dept-card arts">
            <div className="dept-icon">🎨</div>
            <h3>Arts & Humanities</h3>
            <p>
              Psychology, Sociology, English Literature, Journalism,
              Media Studies, Creative Writing & Cultural Research.
            </p>
            <div className="dept-meta">
              <span>7 Programs</span>
              <span>•</span>
              <span>55+ Faculty</span>
            </div>
          </div>

          <div className="dept-card science">
            <div className="dept-icon">🔬</div>
            <h3>Science & Research</h3>
            <p>
              Biotechnology, Genetics, Chemistry, Physics, Environmental Science,
              Pharmaceutical Sciences & Research Methodology.
            </p>
            <div className="dept-meta">
              <span>5 Programs</span>
              <span>•</span>
              <span>48+ Faculty</span>
            </div>
          </div>

          <div className="dept-card law">
            <div className="dept-icon">⚖️</div>
            <h3>Law & Legal Studies</h3>
            <p>
              Corporate Law, Criminal Law, Intellectual Property, International Law,
              Cyber Law, Human Rights & Legal Research.
            </p>
            <div className="dept-meta">
              <span>3 Programs</span>
              <span>•</span>
              <span>35+ Faculty</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="faculty-achievements">
        <div className="achievements-container">
          <div className="section-header centered">
            <span className="section-label">Recognition</span>
            <h2 className="section-title">Faculty Achievements & Recognition</h2>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>500+</h3>
              <p>National & International Awards</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">📚</div>
              <h3>2,000+</h3>
              <p>Research Publications</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🌍</div>
              <h3>100+</h3>
              <p>Global Collaborations</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">💡</div>
              <h3>150+</h3>
              <p>Patents Filed</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">⭐</div>
              <h3>98%</h3>
              <p>Student Satisfaction</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🎓</div>
              <h3>50+</h3>
              <p>PhD Guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY OUR FACULTY ================= */}
      <section className="why-faculty-section">
        <div className="why-faculty-container">
          <div className="why-content">
            <span className="section-label">Excellence</span>
            <h2 className="section-title">Why Our Faculty Stands Out</h2>
            
            <div className="why-features">
              <div className="why-item">
                <div className="why-number">01</div>
                <div className="why-text">
                  <h4>Industry Experience</h4>
                  <p>Faculty with real-world industry experience from top companies</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">02</div>
                <div className="why-text">
                  <h4>Research Leaders</h4>
                  <p>Published researchers contributing to their fields globally</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">03</div>
                <div className="why-text">
                  <h4>Student-Centric Approach</h4>
                  <p>Dedicated mentorship and personalized academic guidance</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-number">04</div>
                <div className="why-text">
                  <h4>Continuous Learning</h4>
                  <p>Regular training and development to stay ahead of trends</p>
                </div>
              </div>
            </div>
          </div>

          <div className="why-image">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800" alt="Faculty Excellence" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="faculty-cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Connect with Our Faculty</h2>
            <p className="cta-text">
              Reach out to department heads for academic support, mentorship,
              project guidance, and research collaboration opportunities.
            </p>
          </div>

          <div className="cta-actions">
            <Link to="/contact" className="btn primary-btn large">
              Contact Faculty →
            </Link>
            <Link to="/courses" className="btn secondary-btn large">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faculty;