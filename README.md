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
