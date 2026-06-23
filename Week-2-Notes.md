# 📘 React Journey — Week 2 Notes (Days 8-13)

## Day 8 — Lists & Keys
- `.map()` transforms an array into an array of JSX elements (returns a NEW array, same length)
- `key` gives React a stable identity for list items — used internally, NEVER passed as an actual usable prop to the component
- Index-as-key is risky for DYNAMIC lists (add/remove/reorder) — causes state/data to get mixed up between items when positions shift
- `Math.random()` as key is even worse — changes on EVERY render, destroys performance and resets state unnecessarily
- Curly braces `{}` after arrow function = needs explicit `return`; no braces (or `()`) = implicit return
- Parent owns the data + `.map()` logic; child component renders ONE item (Single Responsibility)

## Day 9 — Conditional Rendering
- **Ternary `? :`** — for two outcomes (show A or B)
- **`&&`** — for show-something-or-nothing (no "else" case)
- **The `0` trap**: `{count && <p>...</p>}` renders literal `0` if count is 0 (React DOES render 0 and "" as visible text). Fix: `count > 0 &&`
- React renders `false`, `null`, `undefined` as NOTHING — but `0` and `""` ARE rendered as visible content
- **if/else before return** — cleaner for complex/multiple conditions
- A reusable component should validate its OWN props defensively — don't rely on the parent to always pass clean data

## Day 10 — Forms & Controlled Inputs
- **Controlled input** = React state controls the input's value, not the browser (`value={state}` + `onChange`)
- `e.target.value` is ALWAYS a string, even for `type="number"` — must convert with `Number()` before math
- `e.preventDefault()` stops form refresh that would wipe all React state
- Spread operator on arrays: `[...array, newItem]` — adds without losing existing items
- Selective state reset — clear ONE field (e.g. diameter), keep another (e.g. length) based on real use case
- `useState("")` not `useState(" ")` — a space is NOT the same as truly empty (affects placeholder visibility + future typing)
- Don't use a value as BOTH a placeholder text source AND initial state — these are different jobs (`placeholder` attribute vs `value`/state)

## Day 11 — useEffect
- `useEffect` runs code in response to RENDERS, not just clicks — for syncing with things OUTSIDE React (APIs, timers, storage)
- **No dependency array** → runs every render
- **`[]`** → runs once on mount
- **`[dependency]`** → runs only when that specific value changes
- **INFINITE LOOP DANGER**: calling a state setter inside useEffect with no/wrong dependency array → state change triggers re-render → effect runs again → setState again → forever → "Maximum update depth exceeded"
- **StrictMode** (development only) double-invokes effects to help catch missing cleanup bugs early, before they hit production
- `useEffect(async () => {...})` is ILLEGAL — async functions return Promises, which conflicts with what useEffect expects (nothing, or a cleanup function). Fix: define a separate async function INSIDE useEffect, then call it.

## Day 12 — Fetch API
- `fetch()` returns a Promise; `.then()` chains and `async/await` are FUNCTIONALLY IDENTICAL — just different syntax styles
- `await` pauses execution until a Promise resolves — without it, you get a pending Promise object, not real data
- **CRITICAL**: `fetch()` does NOT throw an error for 404/500 — only for network-level failures (no internet, DNS failure). Must MANUALLY check `response.ok` and `throw` yourself
- Standard 3-state pattern: `loading`, `error`, `data` — essential for any real API-driven UI
- `finally` block runs regardless of success/failure — correct place for `setLoading(false)`
- `try { } catch(err) { } finally { }` — the standard async error-handling shape

## Day 13 — Recipe Finder (Fetch + Forms Combined)
- Fetch can be triggered by a BUTTON CLICK (`onClick={handleSearch}`), not just `useEffect` on mount
- Some APIs return `null` instead of an empty array for "no results" — defensive code: `data.meals || []`
- Validation checks should happen BEFORE the expensive operation (fetch), not after — saves wasted network calls
- Old/stale state does NOT clear itself — must explicitly `setMeals([])` when starting a new search or resetting
- Distinguishing "haven't searched yet" vs "searched, found zero results" requires a SEPARATE boolean flag (e.g. `searched`) — both look like blank screens otherwise
- `finally` gets SKIPPED if you `return` early before reaching it — must place state resets carefully relative to early returns

---

## 🔑 Master Interview Lines — Week 2

1. *"Key gives React a stable identity for list items — without it, state can get mixed up between items when the list changes. I avoid index or Math.random() for dynamic lists, using a real ID from the data instead."*
2. *"React renders false, null, and undefined as nothing — but 0 and empty string still render as visible content. This is why `count && <jsx>` is a common bug — I use `count > 0 &&` instead."*
3. *"I trigger fetch from a click handler when the action is user-initiated, and reserve useEffect for fetching on mount or when a dependency changes."*
4. *"fetch only rejects on network failure, not HTTP error codes like 404 — I always manually check response.ok and throw an error myself if needed."*
5. *"An effect with no dependency array that calls setState creates an infinite loop — I always think carefully about what should be in the dependency array."*
6. *".then() and async/await do the same thing — async/await is just more readable, especially for multi-step async logic."*
7. *"I distinguish 'no results' from 'no search yet' using a separate state flag, since the UI would otherwise look identical in both cases."*

---

## 🐛 Real Bugs Debugged This Week (Interview Stories)

1. `onClick={fn()}` executing immediately during render instead of on click (Day 13)
2. Missing `await` before `.json()` — silently got a pending Promise instead of data (Day 13)
3. Wrong property casing (`idmeal` vs `idMeal`, `iscompleted` vs `isCompleted`) — silent `undefined` bugs
4. 404 response silently "succeeding" because fetch doesn't throw on HTTP errors — fixed with `response.ok` check (Day 12)
5. Caused and fixed a REAL infinite loop crash ("Maximum update depth exceeded") by understanding setState + useEffect dependency arrays (Day 11)
6. Stale state lingering after clearing a search — old results stayed visible until explicit `setMeals([])` (Day 13)
7. `loading` stuck permanently `true` because an early `return` skipped the `finally` block (Day 13)
8. Reused one state variable (`text`) for two different purposes (search query AND fetched data) — overwrote search input with API data (Day 13)

---

## 🪵 Applied to Real Projects This Week
- **Log CFT Calculator**: Stage 3 complete — dynamic form, length-stays-same/diameter-clears pattern, full validation
- **Recipe Finder**: Complete — search, fetch, loading/error/no-results states, RecipeCard component

---

*Use this to revise before Day 14's mock interview. Focus especially on the "Master Interview Lines" section — practice saying these out loud, not just reading them.*
