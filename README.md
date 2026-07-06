<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0095ff&height=200&section=header&text=Mission%202027&fontSize=80&fontColor=ffffff&animation=fadeIn" alt="Mission 2027 Header"/>

# 🎯 Mission 2027: Personal Command Center

**The Ultimate Operating System for Sai Ranadive**

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![Drizzle](https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](#)

<br/>

> *"Zero Distractions. Absolute Focus."*

</div>

---

## 🌌 Overview

**Mission 2027** is a highly personalized, full-stack command center built exclusively to track, manage, and optimize a grueling schedule. This system seamlessly integrates three massive parallel tracks into one unified, real-time interface:

1. 📚 **UPSC CSE 2027 Preparation** (GS & Public Administration Optional)
2. 🎓 **B.Tech CSE Academics** (Sem-V)
3. 🎥 **YouTube & Instagram Content Creation**

With automated scheduling, dynamic streak tracking, micro-topic progression, and a premium **Deep Space Blue** UI, this is not just a to-do list—it is an engine for extreme productivity.

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=24&duration=3000&pause=1000&color=0095FF&center=true&vCenter=true&width=600&lines=Master+the+Schedule;Conquer+the+UPSC;Ace+the+Academics;Grow+the+Audience" alt="Typing SVG" />
</div>

---

## ✨ Core Features

*   ⏱ **Live Dashboard**: Real-time progress bars, 12-hour clock support, and dynamic daily blocks automatically adjusted for weekdays, Saturdays, and Sundays.
*   🧠 **Smart Schedule Engine**: Accommodates college lectures, a strict 6:00 AM to 11:30 PM routine, and a temporary 6:30 PM – 8:00 PM work-from-home internship.
*   🔥 **Streak Mechanics**: Psychological reinforcement via active streaks for UPSC, Academics, and Content. Don't break the chain!
*   📅 **Micro-Topic Syllabus Tracker**: Granular tracking for UPSC subjects (Polity, Economy, History, Pub-Ad) down to the chapter and resource level.
*   🎬 **Content Studio**: A dedicated Kanban board to track shorts, reels, and long-form videos from the `Idea` stage to `Published`.
*   🚀 **Cinematic UI**: Fluid `framer-motion` animations, glassmorphism, and a highly polished dark-mode aesthetic.

---

## 🛠️ Architecture & Tech Stack

This project follows a decoupled **Client-Server architecture** optimized for free-tier deployments.

### 🎨 Frontend (Client)
*   **Framework**: React 18 (Vite)
*   **Language**: TypeScript
*   **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid)
*   **State Management**: Zustand
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Date Utils**: date-fns

### ⚙️ Backend (Server)
*   **Runtime**: Node.js
*   **Framework**: Express.js
*   **Language**: TypeScript
*   **ORM**: Drizzle ORM
*   **Database**: Neon Serverless Postgres
*   **Auth**: JWT (JSON Web Tokens)

---

## 💻 Local Development Setup

Want to spin this up on your local machine? Follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/SAI-RANDIVE/UPSC.git
cd UPSC
```

### 2. Setup the Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
DATABASE_URL=postgresql://<YOUR_NEON_POSTGRES_URL>
JWT_SECRET=super_secret_mission2027_key
```
Run the Database Migrations and Seeding:
```bash
npm run db:push
npm run db:seed
```
Start the backend server:
```bash
npm run dev
```

### 3. Setup the Frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The app will be running at `http://localhost:5173`.

---

## 🚀 Deployment Guide (Free Tier)

This application is configured to run flawlessly on Render (Backend) and Netlify (Frontend).

### Deploying the Backend on [Render](https://render.com/)
1. Create a New **Web Service** on Render and connect this repository.
2. Set the **Root Directory** to `backend`.
3. Build Command: `npm install`
4. Start Command: `npm run start`
5. Add your Environment Variables (`DATABASE_URL` and `JWT_SECRET`).
6. Deploy and copy your generated Render URL (e.g., `https://mission2027-api.onrender.com`).

### Deploying the Frontend on [Netlify](https://netlify.com/)
1. Create a **New Site** from an existing project and connect this repository.
2. Set the **Base directory** to `frontend`.
3. Build command: `npm run build`
4. Publish directory: `frontend/dist`
5. Add an Environment Variable: 
   * `VITE_API_URL` = `[YOUR_RENDER_BACKEND_URL]`
6. Deploy!

---

## 🗺️ Roadmap / Phase 2
- [ ] **AI-Rescheduling**: Integrate a cron-job to automatically shift missed study blocks to buffer days.
- [ ] **Analytics Module**: Hook up Recharts to visualize weekly productivity hours versus targets.
- [ ] **Mobile Optimization**: Further refine the UI for one-handed usage during commutes.
- [ ] **Real Backend Wiring**: Replace the existing Zustand frontend state mock with complete CRUD API calls to the newly minted Express/Postgres backend.

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0095ff&height=100&section=footer" width="100%"/>
  <p><b>Built with discipline & caffeine for Mission 2027.</b></p>
</div>
