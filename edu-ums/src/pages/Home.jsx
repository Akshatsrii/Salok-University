import React, { useState } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {

  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 1));

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  };

  const changeMonth = (direction) => {
    setCurrentMonth(prevMonth => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + direction);
      return newMonth;
    });
  };

  const eventDates = [9, 15, 20, 25];
  const days = getDaysInMonth(currentMonth);

  return (
    <div className="homepage">

      {/* ================= HERO SECTION ================= */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Our University</h1>
          <p>Empowering students with knowledge and innovation.</p>
         
          <Link to="/courses">
             <button className="explore-btn">Explore Programs</button>
          </Link>
        </div>
      </header>

      {/* ================= UNIVERSITY PORTALS ================= */}
      <h1 className="section-title">University Portals</h1>

      <div className="portal-grid">

        {/* Student Portal */}
        <div className="portal-card">
          <h2>Student Portal</h2>
          <p>
            Access courses, assignments, grades, and attendance 
            and other activities.
          </p>
          <Link to="/login">
            <button className="yellow-btn">Login</button>
          </Link>
        </div>

        {/* Faculty Portal */}
        <div className="portal-card">
          <h2>Faculty Portal</h2>
          <p>
            Manage courses, student attendance, and grading system 
            of each student.
          </p>
          <Link to="/faculty">
            <button className="yellow-btn">Login</button>
          </Link>
        </div>

        {/* Library Portal */}
        <div className="portal-card">
          <h2>Library Portal</h2>
          <p>
            Search books, access research papers, and borrow 
            resources and explore the books.
          </p>
          <Link to="/library">
            <button className="yellow-btn">Login</button>
          </Link>
        </div>

        {/* Placement Portal */}
        <div className="portal-card">
          <h2>Placement &amp; Career Portal</h2>
          <p>Explore internships and career opportunities.</p>
          <Link to="/courses">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        {/* Administration Portal */}
        <div className="portal-card">
          <h2>Administration Portal</h2>
          <p>Manage student records, admissions and financial details.</p>
          <Link to="/attendance">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        {/* Alumni Portal */}
        <div className="portal-card">
          <h2>Alumni Portal</h2>
          <p>
            Connect with past graduates, mentorship programs 
            and events/workshops.
          </p>
          <Link to="/alumni">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        {/* Health Portal */}
        <div className="portal-card">
          <h2>Health &amp; Wellness Portal</h2>
          <p>
            Book medical appointments and access mental 
            health resources.
          </p>
          <Link to="/contact">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        {/* Hostel Portal */}
        <div className="portal-card">
          <h2>Hostel &amp; Accommodation Portal</h2>
          <p>Manage hostel rooms, maintenance and meal plans.</p>
          <Link to="/transport">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>
      </div>

      {/* ================= LATEST ANNOUNCEMENTS ================= */}
      <h1 className="section-title">Latest Announcements</h1>

      <div className="announcement-list">
        <div className="announcement-card">
          <h2>Mid-Semester Exam Schedule Released</h2>
          <p>
            The exam schedule for the mid-semester exams is now available.
            Click below to view the details.
          </p>
          <p className="date">March 27, 2025</p>
          <button className="yellow-btn">Read More</button>
        </div>

        <div className="announcement-card">
          <h2>Guest Lecture on AI &amp; Machine Learning</h2>
          <p>
            Join us for a guest lecture by industry expert Dr. John Doe on
            March 30, 2025.
          </p>
          <p className="date">March 25, 2025</p>
          <button className="yellow-btn">Register Now</button>
        </div>
      </div>

 {/* ================= LATEST NEWS ================= */}
      <h1 className="section-title">Latest News</h1>

      <div className="news-grid">

        <div className="news-card">
          <img
            src="https://tse2.mm.bing.net/th/id/OIF.MBJjFpaRioh6haU62QLXOg?pid=Api&P=0&h=180"
            alt="AI Lab"
          />
          <h2>AI Lab Inauguration</h2>
          <p>
            A new state-of-the-art Artificial Intelligence Lab was inaugurated.
          </p>
          <p className="date">March 25, 2025</p>
          <button className="yellow-btn">Read More</button>
        </div>

        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
            alt="Scholarship"
          />
          <h2>Scholarship Program for Students</h2>
          <p>
            The university announces a new scholarship program 
            to support students.
          </p>
          <p className="date">March 22, 2025</p>
          <button className="yellow-btn">Read More</button>
        </div>

        <div className="news-card">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80"
            alt="Sports Complex"
          />
          <h2>New Sports Complex Opening</h2>
          <p>
            A brand-new sports complex with modern facilities 
            is set to open this summer.
          </p>
          <p className="date">March 18, 2025</p>
          <button className="yellow-btn">Read More</button>
        </div>

      </div>
 {/* ================= IMPORTANT NOTICES ================= */}
      <section className="notices-section">
        <div className="section-header">
          <span className="section-label">Stay Updated</span>
          <h1 className="section-title">Important Notices</h1>
        </div>

        <div className="notices-container">
          <div className="notice-board">
            <div className="notice-item urgent">
              <div className="notice-badge">Urgent</div>
              <div className="notice-content">
                <h3>🔴 Exam Fee Payment Deadline Extended</h3>
                <p>Last date to pay semester examination fees has been extended to February 20, 2026. Late fees will apply after this date.</p>
                <span className="notice-date">Posted: Feb 8, 2026</span>
              </div>
            </div>

            <div className="notice-item important">
              <div className="notice-badge">Important</div>
              <div className="notice-content">
                <h3>📋 Final Year Project Submission Guidelines</h3>
                <p>All final year students must submit their project reports by March 15, 2026. Guidelines are available on the student portal.</p>
                <span className="notice-date">Posted: Feb 5, 2026</span>
              </div>
            </div>

            <div className="notice-item general">
              <div className="notice-badge">Notice</div>
              <div className="notice-content">
                <h3>🎯 Campus Recruitment Drive - Tech Companies</h3>
                <p>Major tech companies including Google, Microsoft, and Amazon will be visiting campus for recruitment from Feb 22-28, 2026.</p>
                <span className="notice-date">Posted: Feb 3, 2026</span>
              </div>
            </div>

            <div className="notice-item general">
              <div className="notice-badge">Notice</div>
              <div className="notice-content">
                <h3>🌟 Scholarship Applications Open</h3>
                <p>Merit-based scholarship applications for the academic year 2026-27 are now open. Apply before February 28, 2026.</p>
                <span className="notice-date">Posted: Feb 1, 2026</span>
              </div>
            </div>

            <div className="notice-item general">
              <div className="notice-badge">Notice</div>
              <div className="notice-content">
                <h3>📚 Library Timings Extended During Exams</h3>
                <p>The central library will remain open until 11 PM during the examination period (Feb 15 - March 10, 2026).</p>
                <span className="notice-date">Posted: Jan 30, 2026</span>
              </div>
            </div>
          </div>

          <div className="notice-sidebar">
            <div className="download-section">
              <h3>📥 Quick Downloads</h3>
              <button className="download-btn">Academic Calendar 2026</button>
              <button className="download-btn">Exam Schedule</button>
              <button className="download-btn">Fee Structure</button>
              <button className="download-btn">Hostel Rules</button>
            </div>

            <div className="contact-section">
              <h3>📞 Emergency Contacts</h3>
              <div className="contact-item">
                <strong>Campus Security:</strong>
                <p>+91 1234567890</p>
              </div>
              <div className="contact-item">
                <strong>Medical Emergency:</strong>
                <p>+91 0987654321</p>
              </div>
              <div className="contact-item">
                <strong>Admin Office:</strong>
                <p>+91 1122334455</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LATEST ANNOUNCEMENTS ================= */}
      <section className="announcements-section">
        <div className="section-header">
          <span className="section-label">Updates</span>
          <h1 className="section-title">Latest Announcements</h1>
        </div>

        <div className="announcement-list">
          <div className="announcement-card">
            <div className="announcement-icon">📝</div>
            <div className="announcement-content">
              <h2>Mid-Semester Exam Schedule Released</h2>
              <p>
                The exam schedule for the mid-semester exams is now available.
                Click below to view the details and prepare accordingly.
              </p>
              <p className="date">📅 March 27, 2025</p>
              <button className="yellow-btn">Read More →</button>
            </div>
          </div>

          <div className="announcement-card">
            <div className="announcement-icon">🎤</div>
            <div className="announcement-content">
              <h2>Guest Lecture on AI &amp; Machine Learning</h2>
              <p>
                Join us for a guest lecture by industry expert Dr. John Doe on
                March 30, 2025. Limited seats available.
              </p>
              <p className="date">📅 March 25, 2025</p>
              <button className="yellow-btn">Register Now →</button>
            </div>
          </div>

          <div className="announcement-card">
            <div className="announcement-icon">🎓</div>
            <div className="announcement-content">
              <h2>Annual Convocation Ceremony 2026</h2>
              <p>
                The annual convocation ceremony will be held on April 15, 2026. 
                All graduating students must register online.
              </p>
              <p className="date">📅 March 20, 2025</p>
              <button className="yellow-btn">Register →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LATEST NEWS ================= */}
      <section className="news-section">
        <div className="section-header">
          <span className="section-label">Campus Updates</span>
          <h1 className="section-title">Latest News</h1>
        </div>

        <div className="news-grid">

          <div className="news-card">
            <div className="news-image">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
                alt="AI Lab"
              />
              <div className="news-category">Technology</div>
            </div>
            <div className="news-content">
              <h2>AI Lab Inauguration</h2>
              <p>
                A new state-of-the-art Artificial Intelligence Lab was inaugurated
                with advanced GPU systems and research facilities.
              </p>
              <p className="date">📅 March 25, 2025</p>
              <button className="yellow-btn">Read More →</button>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                alt="Scholarship"
              />
              <div className="news-category">Scholarships</div>
            </div>
            <div className="news-content">
              <h2>Scholarship Program for Students</h2>
              <p>
                The university announces a new scholarship program 
                to support meritorious and underprivileged students.
              </p>
              <p className="date">📅 March 22, 2025</p>
              <button className="yellow-btn">Read More →</button>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=80"
                alt="Sports Complex"
              />
              <div className="news-category">Infrastructure</div>
            </div>
            <div className="news-content">
              <h2>New Sports Complex Opening</h2>
              <p>
                A brand-new sports complex with modern facilities 
                is set to open this summer for all students.
              </p>
              <p className="date">📅 March 18, 2025</p>
              <button className="yellow-btn">Read More →</button>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800"
                alt="Workshop"
              />
              <div className="news-category">Events</div>
            </div>
            <div className="news-content">
              <h2>Tech Fest 2026 Announced</h2>
              <p>
                Annual technical festival TechnoVision 2026 will feature hackathons,
                workshops, and competitions with prizes worth ₹10 lakhs.
              </p>
              <p className="date">📅 March 15, 2025</p>
              <button className="yellow-btn">Read More →</button>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
                alt="Placement"
              />
              <div className="news-category">Placements</div>
            </div>
            <div className="news-content">
              <h2>Record Placement Season</h2>
              <p>
                EDUFULOW achieves 95% placement with highest package of ₹45 LPA.
                Top recruiters include Google, Amazon, and Microsoft.
              </p>
              <p className="date">📅 March 12, 2025</p>
              <button className="yellow-btn">Read More →</button>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
                alt="Research"
              />
              <div className="news-category">Research</div>
            </div>
            <div className="news-content">
              <h2>Faculty Research Published in Nature</h2>
              <p>
                Dr. Kavita Rao's groundbreaking AI research has been published
                in Nature journal, bringing global recognition.
              </p>
              <p className="date">📅 March 8, 2025</p>
              <button className="yellow-btn">Read More →</button>
            </div>
          </div>

        </div>
      </section>

      {/* ================= UPCOMING EVENTS ================= */}
      <section className="events-section">
        <div className="section-header">
          <span className="section-label">Calendar</span>
          <h1 className="section-title">Upcoming Events</h1>
        </div>

        <div className="events-container">
          <div className="calendar-box">
            <div className="calendar-header">
              <button className="calendar-nav" onClick={() => changeMonth(-1)}>
                ‹
              </button>
              <h2>{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
              <button className="calendar-nav" onClick={() => changeMonth(1)}>
                ›
              </button>
            </div>

            <table className="calendar">
              <thead>
                <tr>
                  <th>Sun</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.ceil(days.length / 7) }, (_, weekIndex) => (
                  <tr key={weekIndex}>
                    {days.slice(weekIndex * 7, weekIndex * 7 + 7).map((dayObj, dayIndex) => (
                      <td 
                        key={dayIndex} 
                        className={`
                          ${!dayObj.isCurrentMonth ? 'other-month' : ''}
                          ${eventDates.includes(dayObj.day) && dayObj.isCurrentMonth ? 'event-day' : ''}
                          ${dayObj.day === 9 && dayObj.isCurrentMonth ? 'today' : ''}
                        `}
                      >
                        {dayObj.day}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="calendar-legend">
              <div className="legend-item">
                <span className="legend-dot today-dot"></span>
                <span>Today</span>
              </div>
              <div className="legend-item">
                <span className="legend-dot event-dot"></span>
                <span>Events</span>
              </div>
            </div>
          </div>

          <div className="events-list">
            <h3>📅 Upcoming Events</h3>
            
            <div className="event-item">
              <div className="event-date">
                <span className="event-day">15</span>
                <span className="event-month">FEB</span>
              </div>
              <div className="event-details">
                <h4>Annual Cultural Fest</h4>
                <p>3-day cultural extravaganza with performances and competitions</p>
                <span className="event-time">⏰ 9:00 AM onwards</span>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="event-day">20</span>
                <span className="event-month">FEB</span>
              </div>
              <div className="event-details">
                <h4>Industry Expert Talk Series</h4>
                <p>Leadership session by Fortune 500 CEOs</p>
                <span className="event-time">⏰ 3:00 PM - 5:00 PM</span>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="event-day">25</span>
                <span className="event-month">FEB</span>
              </div>
              <div className="event-details">
                <h4>Hackathon 2026</h4>
                <p>24-hour coding competition with exciting prizes</p>
                <span className="event-time">⏰ All Day Event</span>
              </div>
            </div>

            <div className="event-item">
              <div className="event-date">
                <span className="event-day">28</span>
                <span className="event-month">FEB</span>
              </div>
              <div className="event-details">
                <h4>Career Fair 2026</h4>
                <p>Meet 100+ recruiters and explore job opportunities</p>
                <span className="event-time">⏰ 10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
