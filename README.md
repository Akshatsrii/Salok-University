<div align="center">

<img src="https://img.shields.io/badge/Salok%20University-Portal-6366f1?style=for-the-badge&logo=graduation-cap&logoColor=white" alt="Salok University" />

# 🎓 Salok University Portal

### A Full-Stack University Management Platform with Blockchain-Powered Attendance

[![Status](https://img.shields.io/badge/Status-In%20Development-22c55e?style=flat-square)](https://github.com)
[![Version](https://img.shields.io/badge/Version-0.5.0-6366f1?style=flat-square)](https://github.com)
[![Blockchain](https://img.shields.io/badge/Blockchain-Attendance%20Verified-8b5cf6?style=flat-square)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-f59e0b?style=flat-square)](LICENSE)

</div>

---

## 📌 Overview

**Salok University Portal** is a centralized full-stack web platform designed to digitalize and streamline university operations for **Students**, **Teachers**, and **Administrators**. The platform prioritizes **transparency**, **security**, and **scalability** — with blockchain integration ensuring tamper-proof attendance management.

> Built to replace fragmented university processes with a single, unified, role-based digital system.

---

## 🚀 Key Highlights

| Feature | Description |
|---|---|
| 🔗 **Blockchain Attendance** | Attendance records stored on-chain — immutable & verifiable |
| 🛡️ **Role-Based Access** | Distinct dashboards and permissions per user role |
| 📋 **Admission Portal** | End-to-end digital admission and approval system |
| 👩‍🏫 **Faculty Management** | Full admin control with faculty dashboards & analytics |
| 🔐 **Secure Auth** | JWT-based login/registration with admin-approved onboarding |

---

## 👥 User Roles & Features

<details>
<summary><b>👨‍🎓 Student</b></summary>

- Secure login & registration
- View attendance (blockchain verified)
- Access courses, notices, and academic details
- Profile management

</details>

<details>
<summary><b>👩‍🏫 Teacher</b></summary>

- Mark student attendance (recorded on blockchain)
- Upload course materials & notices
- Manage assigned classes
- View attendance analytics

</details>

<details>
<summary><b>🛡️ Admin</b></summary>

- Manage students & teachers
- Approve new registrations
- Control departments, courses, and permissions
- Monitor system-wide activity

</details>

---

## 🔗 Blockchain Integration

```
Student Attendance Marked  →  Signed Transaction  →  Stored On-Chain
        ↑                                                    ↓
  Teacher/Admin Portal  ←←←  Real-time Verification  ←←←  Immutable Record
```

- ✅ Records stored on the blockchain — **cannot be altered or deleted**
- ✅ Prevents data tampering and manipulation
- ✅ Full transparency between students, teachers, and administration
- ✅ Every attendance entry is cryptographically signed
- Try to add the solidity in the attendance tracker.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js |
| **Backend** | Node.js / Express |
| **Database** | MongoDB |
| **Authentication** | JWT (JSON Web Tokens) |
| **Blockchain** | Smart Contracts (Attendance) |
| **API** | RESTful Architecture |

---

## 📁 Project Structure

```
salok-university/
├── client/                  # React frontend
│   ├── src/
│   │   ├── pages/           # Home, Dashboard, Login, Admission
│   │   ├── components/      # Reusable UI components
│   │   └── context/         # Auth & role context
├── server/                  # Node.js backend
│   ├── routes/              # API routes
│   ├── controllers/         # Business logic
│   ├── models/              # MongoDB schemas
│   └── middleware/          # Auth & role middleware
├── blockchain/              # Smart contracts & web3 integration
└── README.md
```

---

## 📅 Development Progress

### ✅ Completed Milestones

---

#### 🗓️ Day 1 — Frontend Foundation *(Riya Bansal)*
- 🎨 Designed and implemented the **Home Page** — visual language, layout, and components
- 🚀 Successfully pushed initial home page code to repository
- 🔄 Updated and refined home page implementation

---

#### 🗓️ Day 2 — Landing Page Polish *(Riya Bansal)*
- 🖥️ Updated the **Landing Page** — improved responsiveness, visual flow, and layout

---

#### 🗓️ Day 3 — Auth UI *(Riya Bansal)*
- 🔐 **Login Authentication UI** in progress — form design, validation, and error states

---

#### 🗓️ Day 4 — Auth Backend + Student Dashboard *(Akshat Srivastava & Riya Bansal)*
- ⚙️ **Auth Backend** development underway — login & sign-in flow *(Akshat)*
- 🎓 **Home Page + Student Dashboard** fully completed and integrated *(Riya)*

---

#### 🗓️ Day 5 — Admission Portal & Faculty System *(Akshat Srivastava)*
- 📋 **Admission Portal** frontend — completed
- ⚙️ Admission Portal **backend** — in development
- 🛡️ **Admin side of Admission Portal** — fully implemented
- 🔗 **All integrations** completed up to this milestone
- 👩‍🏫 **Admin side of Faculty Management** — done
- 📊 **Faculty Dashboard overview** built and codebase optimized
- 🔒 **Role-Based Access Control** implemented and enhanced in faculty module
- other days 
- **Faculty Dashboard is going on.
- ** Faculty Dashboard is done.
-**Role-Based Access Control** implemented and enhanced in student portal
-  ** Faculty Dashboard is Complete.
-  Admission portal connection to all the pages is ongoing.
-  connect is ongoing.
  

---

### 🔄 In Progress

- [ ] Login & sign-in authentication backend (finalization)
- [ ] Admission portal backend completion
- [ ] Blockchain attendance module
- [ ] Teacher dashboard
- [ ] Notice & course material upload system

### 📌 Upcoming

- [ ] Student attendance view (blockchain verified)
- [ ] Analytics dashboard for teachers
- [ ] Department and course management
- [ ] System activity monitoring for admin

---

## ⚙️ Getting Started

### Prerequisites

```bash
node >= 18.x
npm >= 9.x
MongoDB (local or Atlas)
```

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/salok-university.git
cd salok-university

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
```

### Running the Project

```bash
# Start backend server
cd server
npm run dev

# Start frontend (in a new terminal)
cd client
npm start
```

### Environment Variables

Create a `.env` file in the `/server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
BLOCKCHAIN_RPC_URL=your_blockchain_rpc_url
CONTRACT_ADDRESS=your_smart_contract_address
```

---

## 👨‍💻 Team

| Name | Role | Contributions |
|---|---|---|
| **Riya Bansal** | Frontend Developer | Home Page, Landing Page, Login UI, Student Dashboard , Faculty Dashboard |
| **Akshat Srivastava** | Backend Developer | Auth Backend, Admission Portal, Admin Panel, Faculty System, Full Integration |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 Current Work

The work Intergration work is going on.
---

<div align="center">

Made with ❤️ by **Riya Bansal** & **Akshat Srivastava**

*Salok University Portal — Transparent. Secure. Scalable.*

</div>
>>>>>>> f40d02c0a7e7ea152f0d9408021d3208c97b4845
