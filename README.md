# TechMatch - Engineer-First Job Platform

TechMatch is a high-end job matching platform built for software engineers, focusing on technical depth and direct impacts.

## 🚀 Quick Start (WSL Desktop)

### Prerequisites
- Node.js v20+
- npm v10+

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## 🛠 Tech Stack
- **Frontend**: Next.js 15 (App Router), Tailwind CSS
- **Backend**: Next.js API Routes (Serverless ready)
- **Styling**: Glassmorphism Design System
- **Environment**: Developed and tested on Windows WSL2 (Ubuntu)

## 📁 Project Structure
- `src/app/api`: Backend logic and job data endpoints.
- `src/app/page.tsx`: Dynamic landing page with tech-stack filtering.
- `src/data`: Mock database and job interfaces.
- `src/app/globals.css`: Premium design tokens and glassmorphism utilities.

## 📡 API Reference
- `GET /api/jobs`: Fetch all jobs.
- `GET /api/jobs?q=rust`: Filter jobs by stack, role, or company.

---
Developed using the **BMAD-Method**.
