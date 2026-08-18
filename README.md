# Salok University Management System

A comprehensive, AI-powered University Management System built with a modern tech stack (Next.js 15, Node.js/Express, MongoDB) using a Monorepo architecture. 

## 🚀 Features

### Core Modules
* **Authentication & Authorization**: Secure JWT-based login with role-based access control (Admin, Teacher, Student).
* **Admissions Portal**: Complete student onboarding workflow, document verification, and fee payment processing.
* **Student Management**: Centralized database for student records, profiles, and academic histories.
* **Self-Portal**: Dashboard for students to view their profile, fees, and academic progress.
* **Attendance System**: Advanced attendance tracking with support for QR code/facial recognition and heatmap visualizations.
* **Timetable Management**: AI-optimized scheduling for classes, labs, and exams with conflict detection and Google Calendar sync.
* **Assignments Module**: End-to-end assignment workflow including creation, submission, AI-assisted grading, and rubric generation.
* **Examination Module**: Comprehensive exam scheduling, hall ticket generation, marks entry, and result processing.
* **Hostel Facility**: Room allocation, mess menu management, and complaints tracking.
* **Transport Module**: Live bus GPS tracking (Socket.io), route management, and fuel/maintenance logs.
* **Placement Cell**: Company drive tracking, student resume builder, mock interview module, and application status tracking.
* **Communication Center**: Multi-channel notice broadcasting (SMS, Email, Push) and AI-categorized complaint queues with audit logs.

### AI & Notification Microservices
* **AI Assistant (Chatbot)**: Conversational AI (RAG with Pinecone & Gemini) to help students with schedules and policies.
* **Resume Analyzer (Placement AI)**: AI-driven ATS scoring and keyword extraction for student resumes.
* **Performance & Package Predictor**: AI models to predict class pass rates, flag at-risk students, and predict expected placement packages.
* **Document AI**: OCR & face match for automated admission document verification.
* **Notification Engine**: Real-time push and email alerts for transport, assignments, and campus notices.

## 🏗️ Architecture (Monorepo)

The project uses a monorepo structure to organize frontend, backend, and microservices:

```
SALOK/
├── apps/
│   ├── web/                    # Next.js 15 Frontend (App Router)
│   ├── server/                 # Express.js Core Backend API
│   ├── ai-service/             # AI Microservices (Chatbot, RAG, etc.)
│   └── notification-service/   # Notification Workers & API
├── .env.example
├── .prettierrc
└── package.json
```

## 💻 Tech Stack
* **Frontend**: Next.js 15, React, Tailwind CSS, Lucide Icons
* **Backend**: Node.js, Express.js, TypeScript
* **Database**: MongoDB (Mongoose ODM)
* **Microservices Architecture**: Separate services for AI and Notifications.

## ⚙️ Getting Started

### Prerequisites
* Node.js (v18+)
* MongoDB instance (Local or Atlas)
* API Keys for AI & Notifications (OpenAI, Twilio, SendGrid)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Akshatsrii/Salok-University.git
   cd Salok-University
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Environment Setup:
   * Copy `.env.example` to `.env` in the root directory.
   * Fill in your MongoDB URI, JWT Secrets, and third-party API keys.

### Running the Project
*(Commands depend on workspace setup (e.g., Turborepo/Yarn Workspaces). Assume standard npm scripts are configured.)*
```bash
npm run dev
```

## 🔒 Roles
* **Student**: Access to self-portal, attendance viewing, assignment submission, timetable, exam results, and AI tools.
* **Teacher**: Access to mark attendance, manage assignments, generate AI rubrics, enter exam marks, and view predictive analytics.
* **Admin**: Full access to admissions, examination scheduling, bulk communications, and overall system management.

---
*Built for Salok University.*
