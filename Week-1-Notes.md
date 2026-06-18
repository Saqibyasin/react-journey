# 📘 React Journey — Week 1 Notes (Days 1-7)

## Day 1 — Setup
- Installed Node.js, created app using Vite (`npm create vite@latest`)
- Folder structure: `src/App.jsx`, `main.jsx`, `index.html`
- HMR (Hot Module Replacement) = instant browser updates without refresh

## Day 2 — JSX
- JSX is NOT HTML — Babel compiles it into `React.createElement()`
- Rules:
  - One parent element only (or use `<>...</>` fragment)
  - Use `className` not `class`
  - Self-close all tags `<img />`
  - JS goes inside `{}`
- Cannot write if/else directly in JSX — use ternary `? :` or `&&`

## Day 3 — Components
- A component = JS function that returns JSX
- Must start with Capital Letter (PascalCase)
- Single Responsibility Principle — one component, one job
- Component Tree — App is always the root

## Day 4 — Props
- Props = data passed parent → child only (one-way)
- Props are read-only — never mutate them
- Destructuring: `function Card({ title, description })`
- Default props: `{ title = "Default" }`
- Props are case-sensitive

## Day 5 — useState
- `const [value, setValue] = useState(initialValue)`
- Never mutate state directly — always use setter
- `onClick={handleClick}` (reference) vs `onClick={handleClick()}` (executes immediately — WRONG)
- State Batching: multiple `setCount(count+1)` in one function = same stale value used each time
- Functional update fixes it: `setCount(prev => prev + 1)` always uses latest value

## Day 6 — Practice Project
- Built Theme Toggle + Profile Dashboard + Like Button
- Discovered: State Isolation — same component used twice = two independent states

## Day 7 — Review + Mock Interview
- Rapid fire + mock interview + live debugging practiced

---

## 🔑 Key Interview Lines
1. JSX is compiled by Babel into React.createElement() calls — not HTML
2. Component names are capitalized so React can tell them apart from HTML tags
3. Props make components reusable; they always flow parent → child
4. useState triggers re-renders; normal variables don't
5. State updates are batched — multiple setState calls in one function use the same value from that render
6. Each component instance has its own isolated state, even with identical code
7. && does short-circuit evaluation — renders nothing if false, renders JSX if true

## 🐛 Real Bugs I Fixed This Week
- Prop casing mismatch (isCompleted vs iscompleted)
- return on its own line breaks JSX
- Mutating props directly
- onClick={handleClick()} causes infinite re-render loop
- Nested .git folders causing GitHub submodule errors