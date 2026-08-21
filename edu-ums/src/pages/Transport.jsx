import React from "react";
import "../styles/transport.css";

const Transport = () => {
  return (
    <main className="transport-page">

      {/* ================= TRANSPORT HEADER ================= */}
      <section className="transport-header">
        <h1>Transport & Hostel Services</h1>
        <p>
          Safe transportation and comfortable hostel facilities
          for students and staff.
        </p>
      </section>

      {/* ================= TRANSPORT TABLE ================= */}
      <section className="transport-table-section">
        <h2>Bus Routes</h2>

        <table className="transport-table">
          <thead>
            <tr>
              <th>Route</th>
              <th>Bus Number</th>
              <th>Pick-up Time</th>
              <th>Drop Time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Chandigarh to Campus</td>
              <td>BUS–09</td>
              <td>7:30 AM</td>
              <td>4:30 PM</td>
            </tr>

            <tr>
              <td>Panchkula to Campus</td>
              <td>BUS–14</td>
              <td>7:45 AM</td>
              <td>4:45 PM</td>
            </tr>

            <tr>
              <td>Mohali to Campus</td>
              <td>BUS–05</td>
              <td>7:40 AM</td>
              <td>4:40 PM</td>
            </tr>

            <tr>
              <td>Kharar to Campus</td>
              <td>BUS–21</td>
              <td>7:35 AM</td>
              <td>4:35 PM</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* ================= BUS SAFETY ================= */}
      <section className="bus-safety-section">
        <h2>Bus Safety Guidelines</h2>

        <ul className="safety-list">
          <li>Follow the instructions given by transport staff.</li>
          <li>Do not stand near the bus door while travelling.</li>
          <li>Arrive 5 minutes early at the pick-up point.</li>
          <li>Seat belts must be used when available.</li>
        </ul>
      </section>

      {/* ================= HOSTEL SECTION ================= */}
      <section className="hostel-section">
        <h2>Hostel & Accommodation Portal</h2>
        <p>
          Comfortable and secure hostel facilities available for
          both boys and girls with modern amenities.
        </p>

        {/* Room Types */}
        <div className="hostel-room-grid">

          <div className="hostel-room-card">
            <h3>Single Sharing Room</h3>
            <p>Private room with attached washroom and study desk.</p>
            <span>₹ 80,000 / Year</span>
          </div>

          <div className="hostel-room-card">
            <h3>Double Sharing Room</h3>
            <p>Shared room with two beds, storage and WiFi access.</p>
            <span>₹ 60,000 / Year</span>
          </div>

          <div className="hostel-room-card">
            <h3>Triple Sharing Room</h3>
            <p>Affordable option with 3 beds and common facilities.</p>
            <span>₹ 45,000 / Year</span>
          </div>

        </div>

        {/* Hostel Facilities */}
        <div className="hostel-facilities">
          <h3>Facilities Provided</h3>
          <ul>
            <li>24/7 Security & CCTV Surveillance</li>
            <li>High-Speed WiFi</li>
            <li>Mess Facility (Veg & Non-Veg)</li>
            <li>Laundry & Housekeeping</li>
            <li>Recreation Room & Gym</li>
          </ul>
        </div>

        {/* Hostel Rules */}
        <div className="hostel-rules">
          <h3>Hostel Rules</h3>
          <ul>
            <li>Maintain discipline and cleanliness.</li>
            <li>Entry after 9:30 PM requires prior permission.</li>
            <li>No outside guests allowed without approval.</li>
            <li>Damage to property will result in penalty.</li>
          </ul>
        </div>

        {/* Warden Contact */}
        <div className="warden-contact">
          <h3>Hostel Warden Contact</h3>
          <p>Mr. Rajesh Kumar</p>
          <p>Phone: +91 9876543210</p>
          <p>Email: hostel@university.edu</p>
        </div>

      </section>

    </main>
  );
};

export default Transport;
