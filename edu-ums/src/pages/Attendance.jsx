import React from "react";
import "../styles/attendance.css";

const Attendance = () => {
  return (
    <main className="attendance-page">

      {/* ================= HEADER ================= */}
      <section className="attendance-header">
        <h1>Administration Portal</h1>
        <p>Manage students, admissions, records, fees and announcements.</p>
      </section>

      {/* ================= STATS ================= */}
      <section className="admin-stats-section">
        <div className="admin-stat-card">
          <h2>1200+</h2>
          <p>Total Students</p>
        </div>

        <div className="admin-stat-card">
          <h2>85+</h2>
          <p>Faculty Members</p>
        </div>

        <div className="admin-stat-card">
          <h2>25</h2>
          <p>Courses Offered</p>
        </div>

        <div className="admin-stat-card">
          <h2>₹ 45L</h2>
          <p>Fees Collected</p>
        </div>
      </section>

      {/* ================= STUDENT RECORDS ================= */}
      <section className="attendance-table-section">
        <h2>Student Records</h2>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Roll No</th>
              <th>Course</th>
              <th>Year</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Akshat Srivastava</td>
              <td>IT202301</td>
              <td>B.Tech IT</td>
              <td>3rd Year</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>Riya Sharma</td>
              <td>IT202315</td>
              <td>B.Tech CSE</td>
              <td>2nd Year</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>Arjun Patel</td>
              <td>IT202278</td>
              <td>B.Tech IT</td>
              <td>4th Year</td>
              <td>Graduating</td>
            </tr>

            <tr>
              <td>Kavita Rao</td>
              <td>MBA202212</td>
              <td>MBA</td>
              <td>1st Year</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ================= RECENT ADMISSIONS ================= */}
      <section className="admin-admissions-section">
        <h2>Recent Admissions</h2>

        <ul>
          <li>🎓 50 new students admitted to B.Tech IT</li>
          <li>📘 30 students enrolled in MBA Program</li>
          <li>📊 20 students joined Data Science Specialization</li>
        </ul>
      </section>

      {/* ================= FEE MANAGEMENT ================= */}
      <section className="admin-fee-section">
        <h2>Fee Management</h2>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Total Fees</th>
              <th>Paid</th>
              <th>Balance</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Akshat Srivastava</td>
              <td>B.Tech IT</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,00,000</td>
              <td>₹ 20,000</td>
            </tr>

            <tr>
              <td>Riya Sharma</td>
              <td>B.Tech CSE</td>
              <td>₹ 1,20,000</td>
              <td>₹ 1,20,000</td>
              <td>₹ 0</td>
            </tr>

            <tr>
              <td>Kavita Rao</td>
              <td>MBA</td>
              <td>₹ 1,50,000</td>
              <td>₹ 1,20,000</td>
              <td>₹ 30,000</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ================= ANNOUNCEMENTS ================= */}
      <section className="admin-announcement-section">
        <h2>Administrative Announcements</h2>

        <ul>
          <li>📢 Semester Registration Deadline: March 30, 2025</li>
          <li>📅 Annual Sports Meet Scheduled for April 15, 2025</li>
          <li>💻 New ERP System Launch Next Month</li>
        </ul>
      </section>

    </main>
  );
};

export default Attendance;
