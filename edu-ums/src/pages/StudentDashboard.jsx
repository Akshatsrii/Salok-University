import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import "../styles/studentDashboard.css";
import useBlockchain from "../blockchain/useBlockchain";

const StudentDashboard = () => {
  const { user } = useUser();
  const {
    account,
    connectWallet,
    registerStudent,
    markAttendanceStudent
  } = useBlockchain();

  const [roll, setRoll] = useState("");
  const [activeMenu, setActiveMenu] = useState("Home");
  const [showNotifications, setShowNotifications] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock data
  const [studentData, setStudentData] = useState({
    rollNumber: "2024CS001",
    branch: "Computer Science",
    semester: 5,
    section: "A",
    cgpa: 8.5,
    totalClasses: 120,
    attendedClasses: 98,
    attendancePercentage: 81.67,
    pendingFees: 15000,
    totalFees: 75000,
    paidFees: 60000,
    libraryBooks: 2,
    upcomingExams: 3,
    bloodGroup: "O+",
    dateOfBirth: "15/08/2003",
    address: "123 Student Street, Kota, Rajasthan",
    phone: "+91-9876543210",
    parentPhone: "+91-9876543211"
  });

  const [attendanceData] = useState([
    { subject: "Data Structures", total: 45, attended: 42, percentage: 93.33, status: "Good" },
    { subject: "Web Development", total: 40, attended: 35, percentage: 87.50, status: "Good" },
    { subject: "Database Systems", total: 35, attended: 21, percentage: 60.00, status: "Low" },
    { subject: "Computer Networks", total: 42, attended: 38, percentage: 90.48, status: "Good" },
    { subject: "Software Engineering", total: 38, attended: 32, percentage: 84.21, status: "Good" }
  ]);

  const [examSchedule] = useState([
    { subject: "Data Structures", date: "20 Feb 2026", time: "09:00 AM - 12:00 PM", room: "Hall A", type: "Mid-Term" },
    { subject: "Web Development", date: "22 Feb 2026", time: "02:00 PM - 05:00 PM", room: "Hall B", type: "Mid-Term" },
    { subject: "Database Systems", date: "25 Feb 2026", time: "09:00 AM - 12:00 PM", room: "Hall A", type: "Mid-Term" }
  ]);

  const [examResults] = useState([
    { subject: "Data Structures", marks: 85, outOf: 100, grade: "A", semester: 4 },
    { subject: "Operating Systems", marks: 78, outOf: 100, grade: "B+", semester: 4 },
    { subject: "OOP with Java", marks: 92, outOf: 100, grade: "A+", semester: 3 }
  ]);

  const [paymentHistory] = useState([
    { id: "PAY001", description: "Semester 5 Tuition Fee", amount: 25000, date: "05 Jan 2026", status: "Paid", method: "Online" },
    { id: "PAY002", description: "Library Fee", amount: 500, date: "08 Jan 2026", status: "Paid", method: "Cash" },
    { id: "PAY005", description: "Semester 5 Remaining Fee", amount: 15000, date: "Pending", status: "Pending", method: "-" }
  ]);

  const [libraryBooks] = useState([
    { 
      id: "LB001", 
      title: "Clean Code", 
      author: "Robert C. Martin", 
      issueDate: "05 Feb 2026", 
      dueDate: "12 Feb 2026",
      status: "Issued",
      fine: 0,
      coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=200&h=300&fit=crop"
    }
  ]);

  const [availableBooks] = useState([
    { 
      id: "AB001", 
      title: "Introduction to Algorithms", 
      author: "Thomas H. Cormen",
      available: 3,
      coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop"
    },
    { 
      id: "AB002", 
      title: "JavaScript: The Good Parts", 
      author: "Douglas Crockford",
      available: 5,
      coverImage: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=200&h=300&fit=crop"
    }
  ]);

  const [achievements] = useState([
    { title: "Perfect Attendance", description: "100% attendance in November", icon: "🏆", color: "#FFD700", date: "Nov 2025" },
    { title: "Top Performer", description: "Highest scorer in DSA", icon: "⭐", color: "#FFA500", date: "Dec 2025" },
    { title: "Early Bird", description: "Never late to class", icon: "🎯", color: "#FFB347", date: "Ongoing" }
  ]);

  const notifications = [
    { id: 1, text: "Semester fee payment due by 15th Feb", type: "urgent", icon: "💳" },
    { id: 2, text: "Mid-term exams start from 20th Feb", type: "info", icon: "📝" },
    { id: 3, text: "Library book return deadline: 12th Feb", type: "warning", icon: "📚" }
  ];

  const upcomingClasses = [
    { subject: "Data Structures", time: "09:00 AM - 10:00 AM", room: "Lab 301", professor: "Dr. Sharma" },
    { subject: "Web Development", time: "10:15 AM - 11:15 AM", room: "Room 205", professor: "Prof. Verma" }
  ];

  const recentActivities = [
    { action: "Attendance marked", subject: "Data Structures", time: "2 hours ago", icon: "✅" },
    { action: "Assignment submitted", subject: "Web Development", time: "1 day ago", icon: "📤" }
  ];

  const [supportTickets] = useState([
    { id: "TKT001", subject: "Fee Payment Issue", status: "Open", date: "08 Feb 2026", priority: "High" },
    { id: "TKT002", subject: "Library Card Issue", status: "In Progress", date: "06 Feb 2026", priority: "Medium" }
  ]);

  const handleRegister = async () => {
    if (roll.trim() === "") {
      alert("Please enter roll number");
      return;
    }
    setLoading(true);
    try {
      await registerStudent(roll);
      alert("Registration successful!");
    } catch (error) {
      alert("Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAttendance = async () => {
    setLoading(true);
    try {
      await markAttendanceStudent(1);
      alert("Attendance marked!");
      setStudentData(prev => ({
        ...prev,
        attendedClasses: prev.attendedClasses + 1,
        attendancePercentage: ((prev.attendedClasses + 1) / prev.totalClasses * 100).toFixed(2)
      }));
    } catch (error) {
      alert("Failed to mark attendance.");
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Home": return renderHomePage();
      case "My Profile": return renderProfilePage();
      case "Attendance": return renderAttendancePage();
      case "Exams": return renderExamsPage();
      case "Payments": return renderPaymentsPage();
      case "Library": return renderLibraryPage();
      case "Achievements": return renderAchievementsPage();
      case "Support": return renderSupportPage();
      default: return renderHomePage();
    }
  };

  const renderHomePage = () => (
    <>
      <div className="quick-stats">
        <div className="stat-card stat-primary">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h4>Attendance</h4>
            <p className="stat-number">{studentData.attendancePercentage}%</p>
            <span className="stat-change positive">Good standing</span>
          </div>
        </div>
        <div className="stat-card stat-warning">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h4>Pending Fees</h4>
            <p className="stat-number">₹{studentData.pendingFees.toLocaleString()}</p>
            <span className="stat-change">Due: 15th Feb</span>
          </div>
        </div>
        <div className="stat-card stat-info">
          <div className="stat-icon">📚</div>
          <div className="stat-content">
            <h4>Library Books</h4>
            <p className="stat-number">{studentData.libraryBooks}</p>
            <span className="stat-change">Active</span>
          </div>
        </div>
        <div className="stat-card stat-success">
          <div className="stat-icon">📝</div>
          <div className="stat-content">
            <h4>Upcoming Exams</h4>
            <p className="stat-number">{studentData.upcomingExams}</p>
            <span className="stat-change">This month</span>
          </div>
        </div>
      </div>

      <div className="main-grid">
        <div className="left-column">
          <div className="feature-card attendance-card">
            <div className="card-header">
              <div className="card-title-section">
                <div className="card-icon">📊</div>
                <h3>Attendance Management</h3>
              </div>
              <span className="blockchain-badge">🔗 Blockchain</span>
            </div>
            <div className="attendance-visual">
              <div className="circular-progress">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" className="progress-bg" />
                  <circle cx="50" cy="50" r="45" className="progress-fill"
                    style={{ strokeDasharray: `${studentData.attendancePercentage * 2.83} 283` }} />
                </svg>
                <div className="progress-text">
                  <span className="percentage">{studentData.attendancePercentage}%</span>
                  <span className="label">Present</span>
                </div>
              </div>
              <div className="attendance-details">
                <div className="detail-row">
                  <span className="detail-label">Total Classes:</span>
                  <span className="detail-value">{studentData.totalClasses}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Attended:</span>
                  <span className="detail-value success">{studentData.attendedClasses}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Missed:</span>
                  <span className="detail-value danger">{studentData.totalClasses - studentData.attendedClasses}</span>
                </div>
              </div>
            </div>
            <div className="card-actions">
              <input type="text" placeholder="Enter Roll Number" value={roll} onChange={(e) => setRoll(e.target.value)} className="input-field" disabled={!account} />
              <div className="button-group">
                <button className="action-btn register-btn" disabled={!account || loading} onClick={handleRegister}>
                  {loading ? "⏳ Processing..." : "📝 Register"}
                </button>
                <button className="action-btn attendance-btn" disabled={!account || loading} onClick={handleMarkAttendance}>
                  {loading ? "⏳ Marking..." : "✅ Mark Attendance"}
                </button>
              </div>
              {!account && <p className="warning-text">⚠️ Please connect wallet first</p>}
            </div>
          </div>

          <div className="feature-card classes-card">
            <div className="card-header">
              <div className="card-title-section">
                <div className="card-icon">🕐</div>
                <h3>Today's Schedule</h3>
              </div>
              <span className="today-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
            </div>
            <div className="classes-list">
              {upcomingClasses.map((cls, index) => (
                <div key={index} className="class-item">
                  <div className="class-time-badge">{cls.time}</div>
                  <div className="class-details">
                    <h4>{cls.subject}</h4>
                    <p className="class-meta">
                      <span>👨‍🏫 {cls.professor}</span>
                      <span>📍 {cls.room}</span>
                    </p>
                  </div>
                  <button className="join-btn">Join</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="feature-card quick-actions-card">
            <h3 className="card-title">⚡ Quick Actions</h3>
            <div className="actions-grid">
              <div className="action-item gradient1" onClick={() => setActiveMenu("Exams")}>
                <div className="action-icon">📝</div>
                <span>Exams</span>
              </div>
              <div className="action-item gradient2" onClick={() => setActiveMenu("Payments")}>
                <div className="action-icon">💳</div>
                <span>Pay Fees</span>
              </div>
              <div className="action-item gradient3" onClick={() => setActiveMenu("Library")}>
                <div className="action-icon">📚</div>
                <span>Library</span>
              </div>
              <div className="action-item gradient4" onClick={() => setActiveMenu("My Profile")}>
                <div className="action-icon">📄</div>
                <span>Profile</span>
              </div>
            </div>
          </div>

          <div className="feature-card activities-card">
            <div className="card-header">
              <div className="card-title-section">
                <div className="card-icon">📌</div>
                <h3>Recent Activities</h3>
              </div>
            </div>
            <div className="activities-timeline">
              {recentActivities.map((activity, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-icon">{activity.icon}</div>
                  <div className="timeline-content">
                    <p className="timeline-action">{activity.action}</p>
                    <p className="timeline-detail">{activity.subject}</p>
                    <span className="timeline-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderProfilePage = () => (
    <div className="page-container">
      <div className="page-header">
        <h2>My Profile</h2>
        <button className="action-btn edit-btn">✏️ Edit Profile</button>
      </div>
      <div className="profile-grid">
        <div className="profile-card">
          <div className="profile-card-header"><h3>Personal Information</h3></div>
          <div className="profile-photo-section">
            <img src={user?.imageUrl || "https://ui-avatars.com/api/?name=" + user?.fullName} alt="Profile" className="profile-photo" />
            <button className="change-photo-btn">Change Photo</button>
          </div>
          <div className="profile-info-grid">
            <div className="info-item">
              <span className="info-label">Full Name</span>
              <span className="info-value">{user?.fullName || "Student Name"}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Roll Number</span>
              <span className="info-value">{studentData.rollNumber}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{user?.primaryEmailAddress?.emailAddress}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone</span>
              <span className="info-value">{studentData.phone}</span>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-card-header"><h3>Academic Information</h3></div>
          <div className="profile-info-grid">
            <div className="info-item">
              <span className="info-label">Branch</span>
              <span className="info-value">{studentData.branch}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Semester</span>
              <span className="info-value">{studentData.semester}</span>
            </div>
            <div className="info-item">
              <span className="info-label">CGPA</span>
              <span className="info-value cgpa-highlight">{studentData.cgpa}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAttendancePage = () => (
    <div className="page-container">
      <div className="page-header">
        <h2>Attendance Details</h2>
        <div className="header-stats">
          <span className="stat-value">{studentData.attendancePercentage}%</span>
          <span className="stat-label">Overall</span>
        </div>
      </div>
      <div className="attendance-table-card">
        <table className="data-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Total</th>
              <th>Attended</th>
              <th>Percentage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record, index) => (
              <tr key={index}>
                <td className="subject-name">{record.subject}</td>
                <td>{record.total}</td>
                <td>{record.attended}</td>
                <td>
                  <div className="percentage-bar-container">
                    <div className="percentage-bar" style={{ width: `${record.percentage}%` }}></div>
                    <span className="percentage-text">{record.percentage}%</span>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${record.status === 'Good' ? 'status-good' : 'status-low'}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderExamsPage = () => (
    <div className="page-container">
      <div className="page-header">
        <h2>Examination</h2>
        <button className="action-btn primary-btn">📝 Fill Exam Form</button>
      </div>
      <div className="exams-grid">
        <div className="exam-section">
          <h3 className="section-title">📅 Upcoming Exams</h3>
          <div className="exam-cards">
            {examSchedule.map((exam, index) => (
              <div key={index} className="exam-card">
                <div className="exam-type-badge">{exam.type}</div>
                <h4 className="exam-subject">{exam.subject}</h4>
                <div className="exam-details">
                  <div className="exam-detail-item">
                    <span className="detail-icon">📅</span>
                    <span>{exam.date}</span>
                  </div>
                  <div className="exam-detail-item">
                    <span className="detail-icon">🕐</span>
                    <span>{exam.time}</span>
                  </div>
                </div>
                <button className="exam-btn">Download Admit Card</button>
              </div>
            ))}
          </div>
        </div>

        <div className="exam-section">
          <h3 className="section-title">📊 Previous Results</h3>
          <div className="results-table-card">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>Grade</th>
                  <th>Semester</th>
                </tr>
              </thead>
              <tbody>
                {examResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.subject}</td>
                    <td>{result.marks}/{result.outOf}</td>
                    <td><span className="grade-badge">{result.grade}</span></td>
                    <td>Sem {result.semester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentsPage = () => (
    <div className="page-container">
      <div className="page-header">
        <h2>Fee Management</h2>
        <button className="action-btn primary-btn">💳 Pay Now</button>
      </div>
      <div className="payment-summary-cards">
        <div className="payment-summary-card total">
          <div className="summary-icon">💰</div>
          <div className="summary-content">
            <span className="summary-label">Total Fees</span>
            <span className="summary-amount">₹{studentData.totalFees.toLocaleString()}</span>
          </div>
        </div>
        <div className="payment-summary-card paid">
          <div className="summary-icon">✅</div>
          <div className="summary-content">
            <span className="summary-label">Paid</span>
            <span className="summary-amount">₹{studentData.paidFees.toLocaleString()}</span>
          </div>
        </div>
        <div className="payment-summary-card pending">
          <div className="summary-icon">⏳</div>
          <div className="summary-content">
            <span className="summary-label">Pending</span>
            <span className="summary-amount">₹{studentData.pendingFees.toLocaleString()}</span>
          </div>
        </div>
      </div>
      <div className="payment-history-card">
        <h3 className="section-title">Payment History</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td>{payment.id}</td>
                <td>{payment.description}</td>
                <td>₹{payment.amount.toLocaleString()}</td>
                <td>{payment.date}</td>
                <td>
                  <span className={`status-badge ${payment.status === 'Paid' ? 'status-paid' : 'status-pending'}`}>
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderLibraryPage = () => (
    <div className="page-container">
      <div className="page-header">
        <h2>Library Management</h2>
        <input type="text" placeholder="Search books..." className="search-input" />
      </div>
      <div className="library-sections">
        <div className="library-section">
          <h3 className="section-title">📚 My Books</h3>
          <div className="books-grid">
            {libraryBooks.map((book, index) => (
              <div key={index} className="book-card">
                <img src={book.coverImage} alt={book.title} className="book-cover" />
                <div className="book-info">
                  <h4 className="book-title">{book.title}</h4>
                  <p className="book-author">{book.author}</p>
                  <div className="book-dates">
                    <span>Due: {book.dueDate}</span>
                  </div>
                  <button className="book-btn return-btn">Return</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="library-section">
          <h3 className="section-title">📖 Available Books</h3>
          <div className="books-grid">
            {availableBooks.map((book, index) => (
              <div key={index} className="book-card">
                <img src={book.coverImage} alt={book.title} className="book-cover" />
                <div className="book-info">
                  <h4 className="book-title">{book.title}</h4>
                  <p className="book-author">{book.author}</p>
                  <div className="availability-badge">{book.available} available</div>
                  <button className="book-btn issue-btn">Issue</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAchievementsPage = () => (
    <div className="page-container">
      <div className="page-header">
        <h2>My Achievements</h2>
        <span className="achievement-count">🏆 {achievements.length} Achievements</span>
      </div>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card" style={{ borderColor: achievement.color }}>
            <div className="achievement-icon-large" style={{ background: achievement.color }}>
              {achievement.icon}
            </div>
            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
            <div className="achievement-date">
              <span>📅 {achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSupportPage = () => (
    <div className="page-container">
      <div className="page-header">
        <h2>Support & Help</h2>
        <button className="action-btn primary-btn">➕ New Ticket</button>
      </div>
      <div className="support-grid">
        <div className="support-section">
          <h3 className="section-title">🎫 My Tickets</h3>
          <div className="tickets-list">
            {supportTickets.map((ticket, index) => (
              <div key={index} className="ticket-card">
                <div className="ticket-header">
                  <div className="ticket-id">{ticket.id}</div>
                  <span className={`priority-badge priority-${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </div>
                <h4 className="ticket-subject">{ticket.subject}</h4>
                <div className="ticket-meta">
                  <span>📅 {ticket.date}</span>
                  <span className={`ticket-status status-${ticket.status.toLowerCase().replace(' ', '-')}`}>
                    {ticket.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="support-section">
          <h3 className="section-title">📞 Contact</h3>
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h4>Helpline</h4>
              <p className="contact-detail">+91-9599551032</p>
              <p className="contact-time">24/7 Available</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h4>Email</h4>
              <p className="contact-detail">support@university.edu</p>
              <p className="contact-time">24h response</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="portal-container">
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon">🎓</div>
          <h2 className="logo-text">UniPortal</h2>
        </div>
        <div className="profile-box">
          <div className="profile-img-wrapper">
            <img src={user?.imageUrl || "https://ui-avatars.com/api/?name=" + user?.fullName + "&background=FFC107&color=fff"} alt="profile" className="profile-img" />
            <span className="online-indicator"></span>
          </div>
          <h3 className="profile-name">{user?.fullName || "Student Name"}</h3>
          <p className="profile-email">{user?.primaryEmailAddress?.emailAddress || "student@university.edu"}</p>
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-value">{studentData.semester}</span>
              <span className="stat-label">Semester</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{studentData.cgpa}</span>
              <span className="stat-label">CGPA</span>
            </div>
          </div>
        </div>
        <ul className="menu">
          {[
            { icon: "🏠", label: "Home" },
            { icon: "👤", label: "My Profile" },
            { icon: "📊", label: "Attendance" },
            { icon: "📝", label: "Exams" },
            { icon: "💳", label: "Payments" },
            { icon: "📚", label: "Library" },
            { icon: "🏆", label: "Achievements" },
            { icon: "📞", label: "Support" }
          ].map((item) => (
            <li key={item.label} className={activeMenu === item.label ? "active" : ""} onClick={() => setActiveMenu(item.label)}>
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <button className="logout-btn"><span>🚪</span> Logout</button>
        </div>
      </aside>

      <main className="portal-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h2 className="welcome-text">
              {activeMenu === "Home" ? `Welcome, ${user?.firstName || "Student"}! 👋` : activeMenu}
            </h2>
            <p className="header-subtitle">
              {activeMenu === "Home" ? "Here's your academic overview" : `Manage your ${activeMenu.toLowerCase()}`}
            </p>
          </div>
          <div className="header-right">
            <div className="notification-bell" onClick={() => setShowNotifications(!showNotifications)}>
              🔔
              <span className="notification-badge">{notifications.length}</span>
              {showNotifications && (
                <div className="notification-dropdown">
                  <div className="notification-header">
                    <h4>Notifications</h4>
                    <span className="mark-read">Mark all read</span>
                  </div>
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`notification-item ${notif.type}`}>
                      <span className="notif-icon">{notif.icon}</span>
                      <p>{notif.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button onClick={connectWallet} className="wallet-btn">
              {account ? (
                <><span className="wallet-icon">✓</span><span className="wallet-status">Connected</span></>
              ) : (
                <><span className="wallet-icon">🔗</span><span className="wallet-status">Connect Wallet</span></>
              )}
            </button>
          </div>
        </header>

        {account && (
          <div className="wallet-info-banner">
            <span className="wallet-label">Wallet:</span>
            <code className="wallet-address">{account}</code>
            <button className="copy-btn" onClick={() => navigator.clipboard.writeText(account)}>📋</button>
          </div>
        )}

        {renderContent()}

        <div className="footer-banner">
          <div className="banner-content">
            <div className="helpline-section">
              <span className="helpline-icon">📞</span>
              <div>
                <p className="helpline-label">24/7 Helpline</p>
                <p className="helpline-number">+91-9599551032</p>
              </div>
            </div>
            <div className="emergency-section">
              <span className="emergency-icon">🚨</span>
              <div>
                <p className="emergency-label">Emergency</p>
                <p className="emergency-number">+91-9999999999</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;