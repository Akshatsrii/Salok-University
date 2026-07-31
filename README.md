<div align="center">

# 🎓 Salok University ERP

### AI-Powered Smart Campus Management System

*An AI-powered digital ecosystem for managing admissions, academics, faculty, finance, placements, research, and student life.*

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-green?style=for-the-badge&logo=mongodb)
![Docker](https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

</div>

---

## 📖 Overview

**Salok University ERP** is a full-scale, AI-driven campus management platform built to handle every operational layer of a modern university — from admissions and academics to finance, hostels, placements, and research. Designed with a **FANG-level system architecture**, it's comparable in scope to commercial ERP platforms like **Oracle PeopleSoft Campus Solutions**, **Ellucian Banner**, and **Anthology Student** — while differentiating itself with modern AI integrations and a scalable, cloud-native design.

---

## ✨ Key Highlights

- 🏢 **Multi-tenant architecture** — host multiple universities on one platform with isolated data
- 🎛️ **Role-based dynamic dashboards** — 16 distinct user roles, each with a tailored interface
- ⚡ **Real-time systems** — WebSocket-powered notifications, live attendance, live bus tracking
- 📱 **Offline-first (PWA)** — attendance & timetable access without connectivity
- 🧠 **AI-native** — RAG-based chatbot, predictive analytics, AI proctoring, and more
- 🧩 **Microservices-ready** — modules scale independently (Admissions, Exams, Library, AI, Placements)
- 🔄 **Event-driven workflows** — BullMQ + Redis power emails, report generation, notifications
- 🔐 **Enterprise-grade security** — JWT, RBAC, ABAC, MFA, full audit trails

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, ShadCN UI, React Query, Zustand |
| **Backend** | Node.js, Express.js, TypeScript, MongoDB, Redis, BullMQ, Socket.io |
| **AI / ML** | Gemini / OpenAI, LangChain, RAG, Pinecone / Qdrant, Whisper (voice), OCR, AI Chatbot, Recommendation Engine |
| **DevOps** | Docker, Kubernetes, GitHub Actions, Nginx, Hetzner, Cloudflare |
| **Monitoring** | Centralized logging & observability stack |
| **Integrations** | Google Calendar, Google Meet, Zoom, Stripe, Razorpay, Firebase, Cloudinary, Google Maps |

---

## 🏗️ System Architecture

```
                    ┌─────────────┐
                    │    Users    │
                    └──────┬──────┘
                           │
                 ┌─────────▼─────────┐
                 │  Cloudflare / CDN  │
                 └─────────┬─────────┘
                           │
                 ┌─────────▼─────────┐
                 │  Next.js Frontend  │
                 └─────────┬─────────┘
                           │
                 ┌─────────▼─────────┐
                 │    API Gateway     │
                 └─────────┬─────────┘
                           │
                 ┌─────────▼─────────┐
                 │   Express APIs     │
                 └─────────┬─────────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
       ┌──────▼─────┐┌─────▼──────┐┌────▼─────────┐
       │ Redis Cache ││ MongoDB    ││ BullMQ       │
       │             ││ Cluster    ││ Workers      │
       └─────────────┘└─────┬──────┘└────┬─────────┘
                             │            │
                      ┌──────▼──────┐┌────▼─────────┐
                      │ AI Services  ││ Object       │
                      │ (RAG/OCR/…)  ││ Storage      │
                      └──────┬──────┘└──────────────┘
                             │
                      ┌──────▼──────┐
                      │ Vector DB    │
                      │ (Pinecone/   │
                      │  Qdrant)     │
                      └──────────────┘
```

---

## 👥 User Roles

Super Admin → University Admin → Registrar → Admission Officer → Finance Department → Teacher → Student → Parent → Librarian → Hostel Warden → Placement Officer → Exam Controller → HOD → Department Coordinator → Security Guard → Visitor

Each role gets a **dynamically rendered dashboard** scoped strictly to its permissions (RBAC + ABAC).

---

## 📦 Core Modules

<details>
<summary><strong>1. University Setup</strong> (Super Admin only)</summary>

University creation, logo & domain mapping, departments, faculties, courses, semester system, credits, branches, campus/buildings/rooms/labs, library, hostel, bus routes, fee structure, academic calendar.
</details>

<details>
<summary><strong>2. Admin Dashboard</strong></summary>

Live stats (students, teachers, attendance, fees, placements, buses, hostel occupancy, exam status) + AI insights and charts for admissions, attendance, revenue, placements, and course popularity.
</details>

<details>
<summary><strong>3. Admission Module</strong></summary>

Online application, document uploads (Aadhaar, photo, signature, marksheets, TC, migration certificate), AI-powered OCR & fake document detection, merit list, seat allocation, counselling, fee payment, admission letter, ID card generation, and admission-chance prediction.
</details>

<details>
<summary><strong>4. Student Portal</strong></summary>

Dashboard (attendance, CGPA, fees, timetable, assignments, notes, library, hostel, bus, events, placements); rich student profile (personal/academic/coding profiles); multi-mode attendance (QR, face recognition, GPS, RFID, fingerprint, Bluetooth) with AI proxy-attendance detection; timetable with Google Calendar sync; assignment module with AI plagiarism detection & marks suggestion; AI Tutor (chapter explanations, notes, MCQs, PYQs); and an integrated LeetCode-style coding platform (contests, leaderboard, AI code review, DSA/SQL/system-design sheets).
</details>

<details>
<summary><strong>5. Teacher Portal</strong></summary>

Dashboard for classes, attendance, assignments, research, and performance; content tools (notes, PPTs, lecture recording, quizzes); AI assistant that auto-generates assignments, question papers, MCQs, lab sheets, rubrics, lesson plans, and Bloom's Taxonomy questions.
</details>

<details>
<summary><strong>6. HOD Portal</strong></summary>

Department analytics, faculty performance, research/publications, budget, lab usage, student performance, and NBA/NAAC accreditation reports.
</details>

<details>
<summary><strong>7. Finance Module</strong></summary>

Fees, scholarships, refunds, installments, online payments, GST, invoices, payroll, budgets, expenses, and a financial dashboard.
</details>

<details>
<summary><strong>8. Hostel Module</strong></summary>

Room allocation, mess, complaints, visitor & gate-pass management, laundry, electricity, attendance, and hostel fees.
</details>

<details>
<summary><strong>9. Library Module</strong></summary>

Books & e-books, borrow/return, fines, RFID, AI-powered book recommendations and search.
</details>

<details>
<summary><strong>10. Placement Module</strong></summary>

Company drives, resume builder with ATS scoring, AI resume review, interview chatbot, mock interviews, coding tests, offers, and training.
</details>

<details>
<summary><strong>11. Research Module</strong></summary>

Papers, projects, funding, patents, journals, publications, citations, and Google Scholar sync.
</details>

<details>
<summary><strong>12. Examination Module</strong></summary>

Exam forms, hall tickets, internal/external marks, results, transcripts, grade cards, backlogs, revaluation, digital certificates; AI-generated question papers, difficulty analysis, AI proctoring, cheating detection, and auto-evaluation.
</details>

<details>
<summary><strong>13. Parent Portal</strong></summary>

Attendance, fees, results, teacher feedback, homework, bus tracking, notices, and an AI chatbot.
</details>

<details>
<summary><strong>14. Transport Module</strong></summary>

GPS bus tracking, driver attendance, fuel & maintenance logs, student boarding, and parent notifications.
</details>

<details>
<summary><strong>15. Complaint System</strong></summary>

Student/teacher/anonymous complaints with AI categorization, priority detection, and status tracking.
</details>

<details>
<summary><strong>16. Alumni Portal</strong></summary>

Jobs, networking, mentorship, donations, events, and referrals.
</details>

<details>
<summary><strong>17. Clubs, Events & Communication</strong></summary>

Coding/robotics/sports/music/photography clubs, hackathons; role-scoped notices (SMS/email/WhatsApp/push); group chat, video classes, discussion forums, and live streaming.
</details>

---

## 🧠 AI Features (FANG-Level)

| Feature | Description |
|---|---|
| **AI Academic Advisor** | Suggests subjects, career paths, and electives |
| **AI Chatbot (RAG)** | Answers questions on rules, fees, attendance, library, exams, and more |
| **AI Attendance Predictor** | Flags students at risk of falling below 75% attendance |
| **AI Placement Predictor** | Predicts expected package, missing skills, and eligible companies |
| **AI Risk Detection** | Flags dropout/failure risk and low engagement patterns, under institutional consent & privacy controls |
| **AI Personalized Learning** | Generates study plans, revision plans, and daily goals |
| **AI Resume Builder & Interview Coach** | One-click resumes with ATS scoring; mock voice/technical interviews |
| **AI Research Assistant** | Paper summaries, citations, literature reviews |
| **AI Timetable Optimizer** | Auto-generates conflict-free faculty/room/lab schedules |
| **AI Document Verification** | OCR, face match, forgery & duplicate detection |
| **AI Analytics Dashboard** | Predicts admissions, revenue, placements, dropout, and department growth |

---

## 🔐 Security

JWT authentication · RBAC & ABAC authorization · MFA · Redis-backed rate limiting · encryption at rest & in transit · cloud backups · device tracking · full audit logging.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Akshatsrii/salok-university-erp.git
cd salok-university-erp

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Run the development server
npm run dev
```

---

## 🗺️ Roadmap

- [ ] Core auth & multi-tenant setup
- [ ] Admission + Student Portal MVP
- [ ] Teacher Portal + AI Assistant
- [ ] Finance & Hostel modules
- [ ] AI Chatbot (RAG) integration
- [ ] Real-time attendance & bus tracking
- [ ] Placement & Research modules
- [ ] Full AI analytics suite
- [ ] Kubernetes production deployment

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by **Akshat Srivastava**

</div>
