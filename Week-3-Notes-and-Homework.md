# 📘 React Journey — Week 3 Notes (Days 15-20)

## Day 15 — Lifting State Up
- When MULTIPLE components need the same data, that data lives in their CLOSEST SHARED PARENT, passed DOWN as props
- Passing a STATE SETTER FUNCTION as a prop (not just data) gives a child the ABILITY to trigger changes in the parent's state, without the child owning that state itself
- Sibling components NEVER communicate directly — they only appear connected because they share the same parent. One sibling triggers a change → parent's state updates → parent passes new state down to the OTHER sibling
- Use this pattern specifically when 2+ components need to share/sync data. If only ONE component needs something, keep it local — don't lift unnecessarily

## Day 16 — useRef
- `useRef` stores a value OR references a real DOM element, WITHOUT triggering re-renders
- Access/update via `.current` — never directly on the ref object
- `.focus()`, `.scrollIntoView()`, etc. are native DOM methods — they bypass React's render cycle entirely (no virtual DOM diffing involved)
- **Common trap:** displaying a ref's value in JSX won't visually update unless something ELSE causes a re-render — refs are "invisible" to React's render system
- Rule of thumb: useState for anything SHOWN on screen; useRef for direct DOM access or background tracking that doesn't need display

## Day 17 — Custom Hooks
- A custom hook is a regular function following the `use` naming convention, optionally using OTHER React hooks inside it
- It's GENUINELY required to follow hook rules ONLY if it actually calls real hooks (`useState`, `useEffect`) internally — that's when React's "Rules of Hooks" apply
- A function with NO real hooks inside (pure logic, like validation) is technically just a regular reusable function — could be called from ANYWHERE, even outside React entirely
- Extracting duplicate logic into ONE function/hook means updating business rules in ONE place instead of risking inconsistency across multiple files

## Day 18 — Context API
- Solves **prop drilling** — passing data through components that don't need it, just to reach a deeply nested one that does
- 3-step pattern: `createContext()` (once, its own file) → `<Context.Provider value={...}>` (broadcasts data) → `useContext(Context)` (any nested component connects directly)
- `value` is what's ACTUALLY shared — without it, `useContext()` returns `undefined`
- ANY component nested ANYWHERE inside a Provider can access its data, regardless of nesting depth — not just direct children
- Context works ALONGSIDE `useState`, NOT as a replacement — useState still creates/manages the data, Context just distributes it

## Day 19-20 — Notes App (Applied Practice)
- `.filter()` — keeps items that PASS a test, removes the rest (opposite use-case from `.map()`'s "transform everything")
- Two different uses of `.filter()` in the same app:
  - **Deletion** — `setNotes(notes.filter(note => note.id !== id))` — PERMANENTLY changes state
  - **Search** — `notes.filter(note => note.text.includes(search))` — calculates a NEW variable for DISPLAY only, doesn't touch the real state
- `.toLowerCase()` on both sides of a comparison = case-insensitive search
- An empty search string matches EVERYTHING (`"".includes()` is always true) — this is WHY "no search yet" and "show all" naturally look the same, no special-case logic needed
- Passing a value through `onClick` requires an arrow function wrapper: `onClick={() => handleDelete(note.id)}` — NOT `onClick={handleDelete(note.id)}` (which would call it immediately during render)

---

## 🔑 Master Interview Lines — Week 3

1. *"I lift state up when two or more components need to share or sync the same data — passing a setter function as a prop gives a child the ability to trigger parent state changes without owning that state."*
2. *"useRef changes don't trigger re-renders because they bypass React's state system entirely — useful for direct DOM access like auto-focusing an input, without unnecessary re-renders."*
3. *"A custom hook genuinely needs hook treatment only when it calls other hooks internally — otherwise it's functionally a regular reusable function following a naming convention."*
4. *"Context API solves prop drilling. It works alongside useState, not as a replacement — useState manages the data, Context distributes it to deeply nested components without manually passing props through every level."*
5. *"I use filter for two different purposes — permanently removing an item from state, or calculating a temporary filtered view for display, like a search feature, without touching the underlying data."*

---

## 🐛 Real Bugs Debugged This Week
1. Nested git repository issue — recurred but caught and fixed independently this time (Day 19, no warning even needed)
2. `useState` called OUTSIDE the component function entirely
3. `Date.now` missing parentheses — stored function reference instead of calling it
4. Unnecessary nested object (`name: {name}` instead of `name: name`)
5. Arrow function written with `=` instead of `=>`
6. Forgetting explicit `return` inside `.map()`'s curly-brace function body (recurring pattern, caught fast)
7. Calling `handleClick` without parentheses inside an already-running click handler (`{handleClick}` vs `handleClick()`)
8. Displaying the wrong property name (`note.filteredNotes` instead of `note.noteText`) — confusing a variable's NAME with an object's PROPERTY

---

## 🪵 Applied to Real Projects This Week
- **TrunkX (CFT Calculator)**: useRef auto-focus on diameter input; Custom hook `useLogValidation` eliminating duplicate validation logic (tracked since Day 9!)
- **Dental Clinic**: First working piece built — `AppointmentsContext` connecting `PatientBooking` and `AdminDashboard` as true siblings sharing data
- **Notes App**: Fully complete — add, delete, search, no-results handling

---

# 📝 HOMEWORK — Complete Before Day 21 Review

## Part A — Coding Tasks (build these, don't just think about them)

**Task 1 — Edit functionality for Notes App**
Add an "Edit" button to each note that lets you change its text. (Hint: you'll need a way to track WHICH note is currently being edited — think about what new piece of state might help, and how it relates to conditional rendering from Day 9.)

**Task 2 — Counter using useRef (trap awareness)**
Build a counter where clicking a button increments a `useRef` value (NOT useState) and displays it in a `<p>`. Click the button 5 times. What do you OBSERVE on screen? Does it match what you learned about refs and re-renders? Explain why.

**Task 3 — Context API mini-challenge**
In your Dental Clinic, add a THIRD component (e.g., `WaitingRoomDisplay.jsx`) that ALSO uses `useContext(AppointmentsContext)` to show just the COUNT of appointments (e.g., "3 patients waiting"). Don't pass anything as a prop — prove it works purely through Context.

---

## Part B — Bug Spotting (find the bugs WITHOUT running the code first — reason through it)

**Bug Hunt 1:**
```jsx
function useCounter() {
  const [count, setCount] = useState(0)
  return count
}

function App() {
  const count = useCounter()
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
```

**Bug Hunt 2:**
```jsx
const NotesContext = createContext()

function App() {
  const [notes, setNotes] = useState([])
  return (
    <NotesContext.Provider>
      <NotesList />
    </NotesContext.Provider>
  )
}

function NotesList() {
  const { notes } = useContext(NotesContext)
  return <ul>{notes.map(n => <li>{n.text}</li>)}</ul>
}
```

**Bug Hunt 3:**
```jsx
function handleDelete(id) {
  setNotes(notes.filter((note) => note.id = id))
}
```

---

## Part C — Conceptual Questions (write short answers, no code)

1. Explain to a non-technical friend (in plain English, no jargon) what "prop drilling" means and why it's annoying.
2. You're given a component that uses `useRef` to store a previous form value. Your teammate asks "why didn't you just use useState for this?" — what's your answer?
3. True or False, with reasoning: "Once I add Context API to my app, I should move ALL my state into Context for consistency."

---

*Bring your answers/code tomorrow for Day 21's review and mock interview. Good luck!*
