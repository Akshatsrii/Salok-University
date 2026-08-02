# Salok University ERP

AI-Powered Smart Campus Management System.

## Architecture
- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, Redis, BullMQ
- **AI**: RAG, Pinecone, LangChain, Custom OCR
- **Monorepo**: Turborepo, npm workspaces

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment Variables:
   Copy `.env.example` to `.env` and fill in the values.

3. Run Development Servers:
   ```bash
   npm run dev
   ```

4. Build for Production:
   ```bash
   npm run build
   ```
