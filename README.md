# 🧱 Dev Stack - Technology Explorer

A responsive Technology Explorer website built with React, TypeScript, Tailwind CSS, and DaisyUI. Users can explore different technologies and build their own development stack by adding and removing technologies from their stack.

## 🔗 Live Site

https://assignment-5-b14.netlify.app/

## 📂 GitHub Repository

https://github.com/NooreAlamCoder/assignment-5

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Vite
- Tailwind CSS
- DaisyUI
- React Toastify
- JSON

---

## ✨ Features

- 🔍 **Technology Explorer** — Browse technology cards with category, difficulty, rating, badge, and description.
- 🧰 **Custom Stack Builder** — Add technologies to your personal stack, remove individual items, or clear the entire stack.
- 🔔 **Interactive Feedback** — React Toastify notifications for adding, duplicate attempts, removing technologies, and removing all items.
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop screens.
- 📦 **JSON-Based Data** — Technology information is loaded dynamically from a JSON file instead of being hardcoded inside the component.
- ⏳ **Loading State** — Displays a loading spinner while technology data is being fetched.
- 🎨 **Gradient Brand Theme** — Uses a shared orange → pink → violet gradient across the main brand elements and primary buttons.

---

## 📋 Project Overview

Dev Stack is a Technology Explorer and Stack Builder application designed to help users explore different development technologies and create a personalized technology stack.

The application includes frontend, backend, database, programming language, styling, and DevOps technologies. Users can add technologies to their stack and manage their selections interactively.

---

## 🧩 Main Sections

### 🧭 Navbar

- Responsive sticky navigation bar
- Desktop navigation links
- Mobile hamburger menu
- Sign In and Sign Up actions

### 🎯 Hero Section

- Gradient-highlighted heading
- Project description
- Explore Technologies button
- Learn More button
- Development stack illustration

### 🃏 Technology Explorer

- Technology cards displayed in a responsive grid
- Technology icon
- Badge
- Name
- Description
- Category
- Difficulty
- Rating
- Add to Stack button

### 🧰 Your Stack

- Shows the number of selected technologies
- Empty stack state
- Selected technology list
- Individual remove option
- Remove All functionality

### 🦶 Footer

- Brand information
- Social links
- Product, Company, and Legal links
- Copyright information
- Privacy and Terms links

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to read and allows us to describe the UI structure directly inside the component.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. Props are read-only.

**State** is data managed inside a component. When state changes, React updates the UI.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage component state.

In this project, I used `useState` in the `TechnologySection` component to manage:

- Technology data
- Loading state
- Selected technologies in the stack

Example:

```tsx
const [stack, setStack] = useState<Technology[]>([]);
const [technologies, setTechnologies] = useState<Technology[]>([]);
const [loading, setLoading] = useState(true);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used for side effects such as fetching data from an external source.

In this project, I used `useEffect` to fetch the `technologies.json` file when the Technology section loads and then store the data in state.

Example:

```tsx
useEffect(() => {
  const loadTechnologies = async () => {
    const response = await fetch("/technologies.json");
    const data: Technology[] = await response.json();

    setTechnologies(data);
  };

  loadTechnologies();
}, []);
```

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

React uses the key to understand which items were added, removed, or changed so it can update the UI efficiently.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI depending on a condition.

In this project, I used conditional rendering in the `Your Stack` section.

When the stack is empty, it shows:

**Your stack is empty**

When technologies are selected, it shows the selected technologies instead.

Example:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>
    {stack.map((technology) => (
      // Selected technologies
    ))}
  </div>
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

In this project, `TechnologySection` passes the technology data and an `onAdd` callback to the `TechnologyCard` component.

Example:

```tsx
<TechnologyCard
  technology={technology}
  isAdded={isAdded}
  onAdd={handleAddToStack}
/>
```

The child component can call the `onAdd` callback when the user clicks the Add to Stack button.

This allows the child to send an action back to the parent through a callback function.

---

## 📁 Project Structure

```text
assignment-5/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── technologies.json
│
├── src/
│   ├── assets/
│   ├── Component/
│   │   ├── NavBar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TechnologySection.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── StackSidebar.tsx
│   │   └── Footer.tsx
│   │
│   ├── index.css
│   └── main.tsx
│
├── types/
│   └── technology.ts
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/NooreAlamCoder/assignment-5.git
```

### 2. Go to the project directory

```bash
cd assignment-5
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available on the local development server.

---

## 👨‍💻 Author

**NooreAlamCoder**

GitHub:  
https://github.com/NooreAlamCoder