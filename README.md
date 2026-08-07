# Salok University ERP

AI-Powered Smart Campus Management System.

## Architecture
- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS, ShadCN UI
- **Backend**: Node.js, Express, MongoDB (Mongoose), Redis, BullMQ
- **AI**: RAG, Pinecone, LangChain, Custom OCR
- **Monorepo**: Turborepo, npm workspaces

## Current Status
- **Day 1**: Monorepo Setup (Turborepo), Apps Shells (web, server, ai-service, notification-service, worker), Shared Packages (ui, types, utils, config, validation), Docker & Nginx config, CI pipeline.
- **Day 2**: Database Connection (Mongoose with retry logic), Environment config, and Core Models (University, User, Department, Course, Branch, Semester, Subject, Student, Teacher).
- **Day 3**: Authentication Core Setup (OTP Auth, JWT verification, Admin/Student/Teacher models, Auth routes).
- **Day 4**: Multi-Tenant Architecture & Auth UI (Role Selection, Super Admin flow, Tenant initialization, NextAuth setup).
- **Day 5**: Public Website Module (Home, About, Academics, Admissions, Campus Life, Placements, Research, Contact pages with responsive components).
- **Day 6**: Admin Portal Dashboard (Statistics grid, Recharts visualizations, AI Insights Panel, Dashboard APIs).
- **Day 7**: Admissions Module (Application Forms, Applicant Tracking, Merit Lists generation, Counselling scheduling).
- **Day 8**: Student Management - Admin Side (Student Directory, Profile views with tabs, Student Creation form, CSV Bulk Import, Reports export).
- **Day 9**: Student Self-Portal (Dashboard Widgets: Attendance, CGPA, Timetable, Assignments, NoticeFeed; Profile: Editable details, Academic info, Resume & Skills).
- **Day 10**: Attendance System (QR/Face capture for Students, Marking Grid for Teachers, Department Overview and Defaulters List for Admins with AI proxy flagging).

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment Variables:
   Copy `.env.example` to `.env` and fill in the values (MongoDB URI, Ports, etc.).

3. Run Development Servers:
   ```bash
   npm run dev
   ```

4. Build for Production:
   ```bash
   npm run build
   ```
