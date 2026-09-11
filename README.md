# 🚀 Dev Stack

A responsive React website that lets developers explore popular frontend, backend, database, and tooling technologies — and build their own personal "development stack" by picking the tools they like.

## 📖 About the Project

**Dev Stack** helps developers browse a curated list of technologies (React, Vue, Node.js, PostgreSQL, Docker, and more), see key info like rating, difficulty, and category for each one, and add their favorites to a personal "Your Stack" panel — all with a clean, modern UI and smooth toast notifications.

## 🛠️ Built With

- **React.js** — component-based UI library
- **Vite** — fast dev server and build tool
- **Tailwind CSS** — utility-first styling
- **DaisyUI** — prebuilt Tailwind component styles
- **React-Toastify** — toast notifications
- **React Icons** — icon library
- **JSON** — technology data source

## ✨ Features

1. 🧭 **Responsive Navbar** — a sticky navigation bar with a mobile hamburger menu that adapts smoothly across screen sizes.
2. 🗂️ **Dynamic Technology Cards** — technology data (icon, badge, description, rating, difficulty) is loaded from a JSON file and rendered as cards in a responsive grid.
3. ➕ **Build Your Own Stack** — users can add or remove technologies from a live "Your Stack" sidebar, with duplicate protection and toast feedback for every action.

## 🏃 Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in your terminal.

---

## ❓ React Questions

### 1. What is JSX, and why is it used in React?
JSX lets us write HTML-like markup directly inside JavaScript code. It's used in React because it makes describing what the UI should look like much easier to read and write than calling plain JavaScript functions for every element.

### 2. What is the difference between props and state?
Props are data passed *into* a component from its parent, and the component can't change them itself. State is data a component manages internally, and it can change over time (usually in response to user actions).

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a functional component hold and update its own data. In this project, I used it to store the list of technologies fetched from JSON, the user's selected stack, the loading state while data is being fetched, and whether the mobile menu is open.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs a piece of code after the component renders, which is perfect for side effects like fetching data. I used it to fetch the `technologies.json` file once when the Technologies component first loads, so the cards appear as soon as the data arrives.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React tell items apart when the list changes. Without a unique key, React can't efficiently figure out which items were added, removed, or reordered, which can cause bugs or slow re-renders.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition, instead of always rendering the same thing. For example, in the `StackSidebar` component, if no technologies are selected it shows an empty state message ("Your stack is empty"), and if there are selected technologies it shows the actual list instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data down to a child using props, like `<TechCard tech={tech} />`. For a child to send information back up, the parent passes a function as a prop (like `onAdd`), and the child calls that function — for example `onAdd(tech)` — whenever it needs to notify the parent that something happened.
