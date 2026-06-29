# 🚀 Kaif's Developer Journey — Progress Tracker

> Started: Day 1 React Series
> Goal: Job-ready Frontend Developer → Full Stack Developer

---

## 📅 React Daily Curriculum

| Day | Topic | Status | Notes |
|-----|-------|--------|-------|
| 01 | Setup with Vite, first component | ✅ Done | HMR understood |
| 02 | JSX rules, className, fragments, expressions | ✅ Done | |
| 03 | Components, single responsibility | ✅ Done | |
| 04 | Props, destructuring, default props | ✅ Done | |
| 05 | useState, batching, functional updates | ✅ Done | Solved the batching trap |
| 06 | Practice: Theme Toggle + Profile Dashboard | ✅ Done | Discovered state isolation |
| 07 | Week 1 Review + Mock Interview | ✅ Done | 8/10 rapid fire |
| 08 | Lists & Keys | ✅ Done | Found index-as-key bug live |
| 09 | Conditional Rendering | ✅ Done | Fixed `count && ...` falsy trap |
| 10 | Forms & Controlled Inputs | ✅ Done | Built dynamic Add Log feature |
| 11 | useEffect | ✅ Done | Caused + fixed real infinite loop crash |
| 12 | Fetch API in React | ✅ Done | Found silent 404 bug, fixed with response.ok |
| 13 | Recipe Finder (Fetch + Forms combined) | ✅ Done | Full search/loading/error/no-results states |
| 14 | Week 2 Review + Mock Interview | ✅ Done | 9/10 rapid fire, all 5 bugs found in live debug |
| 15 | Lifting State Up | ✅ Done | Refactored Recipe Finder into SearchBar + ResultsList |
| 16 | useRef | ✅ Done | Auto-focus diameter input after Add Log |
| 17 | Custom Hooks | ⏳ Next | Will fix duplicate validation logic |
| 18 | Context API | ⬜ Pending | |
| 19-20 | Notes App (Practice Project) | ⬜ Pending | |
| 21 | Week 3 Review + Mock Interview | ⬜ Pending | |
| 22-24 | React Router | ⬜ Pending | |
| 25-28 | Movie Search App | ⬜ Pending | |
| 29-35 | Tailwind CSS + Best Practices | ⬜ Pending | |
| 36-42 | TypeScript, React Query, Portfolio, Deploy | ⬜ Pending | |

---

## 🪵 Project 1 — Log CFT Calculator (PRIMARY)
*Real tool for father's timber business*

| Stage | Status | Details |
|-------|--------|---------|
| Stage 1 — Static list + CFT math | ✅ Done | `L × D² / 2304` formula |
| Stage 2 — Validation | ✅ Done | Catches 0/negative values |
| Stage 3 — Dynamic form | ✅ Done | Length once, diameter per log, auto-clear |
| Stage 3.5 — useRef auto-focus | ✅ Done | Diameter input auto-focuses after Add Log |
| Stage 4 — Persistence (localStorage) | ⬜ Pending | ~Day 18+ |
| Stage 5 — Custom hook refactor | ⏳ Next | Fix duplicate validation (Day 17) |
| Stage 6 — Tailwind polish | ⬜ Pending | Day 29-30 |
| Stage 7 — PDF Bill generation | ⬜ Pending | After core curriculum |
| Stage 8 — Multi-page (Router) | ⬜ Pending | Day 22-24 |
| Stage 9 — Full Stack (DB + Auth) | ⬜ Pending | Backend phase |

**Repo:** Saqibyasin/log-cft-calculator (separate from React-Series)

**Known issue tracked since Day 9:** Validation logic duplicated in `LogItem.jsx` and `App.jsx`'s `.reduce()` — fix scheduled Day 17.

---

## 🦷 Project 2 — Dental Clinic Booking System (PRIMARY)
*Full-stack SaaS-level portfolio project — patient booking + admin dashboard*

| Stage | Status | Details |
|-------|--------|---------|
| Planning — full vision locked | ✅ Done | Home page, booking, admin dashboard, billing, reports |
| Stage 1 — Appointment booking form | ⬜ Starting soon | Forms + lifting state (current skill level) |
| Stage 2 — Component separation | ⬜ Pending | Day 15 pattern applied |
| Stage 3 — Custom hooks | ⬜ Pending | Day 17 |
| Stage 4 — Context API (patient↔admin) | ⬜ Pending | Day 18 |
| Stage 5 — Multi-page routing (Home/Booking/Admin) | ⬜ Pending | Day 22-24 |
| Stage 6 — Tailwind polish | ⬜ Pending | Day 29-30 |
| Stage 7 — Patient records, billing, PDF invoices | ⬜ Pending | Backend phase |
| Stage 8 — JWT admin auth | ⬜ Pending | Backend phase |
| Stage 9 — Full deployment (Vercel/Render/Neon) | ⬜ Pending | Backend phase |

---

## 📚 Project 3 — Reading Room / Library Membership (CASUAL — no fixed schedule)
*Seat assignment + payment/dues tracking for a paid study hall*

| Feature | Status |
|---------|--------|
| Planning | ✅ Done — seat map + dues tracking concept locked |
| Build | ⬜ Not started — touch casually whenever |

---

## 🎯 Curriculum Projects (Frontend Phase)

| Project | Status |
|---------|--------|
| Days 1-4 Mini Project — Portfolio Preview | ✅ Done |
| Day 6 Practice — Theme Toggle Dashboard | ✅ Done |
| Recipe Finder (Day 13, replaced GitHub Profile Finder) | ✅ Done |
| Notes App (Day 19-20) | ⬜ Pending |
| Movie Search App (Day 25-27) | ⬜ Pending |
| Personal Portfolio Website (Day 39-41) | ⬜ Pending |

---

## 💡 Future Projects (Saved, Not Active Yet)
1. **Kashmir Shared Taxi Finder** — ride posting, passenger matching, chat, fare splitting, ratings. Flagged as advanced (needs real-time/WebSockets) — best as capstone after backend phase.
2. **Kashmir Orchard Management System** — tree records, spray schedules, weather API, yield prediction (good fit given ML background), expense tracking.

---

## 🔑 Key Concepts Mastered So Far
- JSX rules, Babel compilation
- Components, Single Responsibility Principle
- Props, destructuring, default props, one-way data flow
- useState, batching, functional updates, state isolation
- Lists, keys (stable ID vs index vs Math.random risks)
- Conditional rendering patterns + falsy value traps
- Controlled inputs, spread operator, selective state reset
- useEffect, dependency arrays, infinite loop danger, StrictMode
- Fetch API, async/await, response.ok, loading/error/no-results states
- Lifting State Up, passing functions as props, indirect sibling communication
- useRef, DOM access without re-renders, ref-vs-state display trap

## 🐛 Real Bugs Debugged (Interview Stories)
1. Git nested submodule issue (multiple `.git` folders) — happened TWICE, fully internalized fix
2. Prop casing mismatches causing silent `undefined`
3. `count && <p>` rendering literal "0" bug
4. Index-as-key causing state mixup in dynamic lists
5. Infinite loop crash from setState inside useEffect with no dependency array
6. `useState({placeholder})` — confusing value vs placeholder
7. `onClick={fn()}` executing immediately instead of on click (recurring pattern, now recognized fast)
8. Missing `await` before `.json()` — silent pending Promise
9. Silent 404 "succeeding" because fetch doesn't throw on HTTP errors — fixed with response.ok
10. Stale state lingering after empty search — needed explicit reset
11. Ambiguous "no results" vs "haven't searched" — solved with separate boolean flag

---

## 📈 Streak
**Days completed: 16/42** (React core curriculum) — **38% through core curriculum**
**Current streak: 🔥 16 days**
**Real projects in active development: 2 (CFT Calculator, Dental Clinic)**

---

## 🔮 Projection — By Day 36 (20 days from now)

Based on current pace, here's the realistic picture:

### Curriculum
- Days 17-36 would cover: Custom Hooks, Context API, Notes App, full React Router + Movie Search App, and well into Tailwind CSS styling
- You'd be styling-capable — meaning CFT Calculator, Dental Clinic, and Recipe Finder would all visually transform from plain to genuinely polished

### Log CFT Calculator
- Custom hook refactor done (clean, no duplicate logic)
- Multi-page (separate calculator/history views) via Router
- Tailwind-polished, professional looking
- Realistically Stage 6-7 complete — PDF bill generation likely next up

### Dental Clinic
- Multi-page structure live (Home, Booking, Admin views)
- Context API connecting patient/admin views
- Tailwind-polished
- Backend/auth/database still pending (Phase 2, ~Day 43+)

### Portfolio Strength
- 3 genuinely distinct, working, good-looking frontend projects (CFT Calculator, Dental Clinic, Recipe Finder) + Notes App + well into Movie Search App
- Resume-ready frontend section would look substantially stronger than today

---

*Last updated: Day 16*
