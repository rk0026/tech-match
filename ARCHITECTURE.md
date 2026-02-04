# Architecture & Development Guide

## 🏗 System Architecture
TechMatch follows a modern, full-stack Next.js architecture designed for high performance and developer experience.

### 1. Data Layer (`src/data`)
Controlled by the `Job` interface. Data is mocked currently but structured to be easily replaced by a Prisma/SQL layer.

### 2. Backend API (`src/app/api`)
- Uses Next.js native Route Handlers.
- Implements simple but effective string-distance matching for tech stacks.
- **Endpoint**: `/api/jobs` ensures efficient data delivery to the client.

### 3. Frontend Integration
- **Client Components**: Used for interactive searching and real-time filtering updates.
- **Design System**: Built on Tailwind CSS `@theme` variables for a central "Source of Truth" in styling.

## 🎨 Design Principles
- **Glassmorphism**: Using `backdrop-filter` and transparency for a futuristic feel.
- **Dark Mode First**: Optimized for engineers working in low-light environments.
- **Performance**: Static exports enabled with `next.config.ts`.

## 🚢 Deployment
Configured for GitHub Pages via `.github/workflows/deploy.yml`. 
*Note: Because this demo uses API routes, static export (`next build`) will only work for the frontend if migrated to a standalone backend (like Go) or hosted on Vercel/Node environment.*
