# 🍽️ Recipe Buddy Monorepo

This monorepo contains both the **Express/SQlite backend** and the **Angular Recipe Buddy frontend**, structured in a single repo for cohesive development.

## 📁 Repository Structure

```copy
recipe-buddy/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── db/
│   ├── routes/
│   └── services/
└── frontend/
    ├── package.json
    ├── angular.json
    ├── src/
    └── tailwind.config.js
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash copy
git clone https://github.com/Hemu21/recipe-buddy.git
cd recipe-buddy
```

---

### 2. Setup Backend (Express + SQLite)

```bash copy
cd backend
npm install
```

* The DB schema auto-initializes on first run.

#### Run Backend

```bash
npm run dev
```

* ✅ API runs at `http://localhost:3000/recipes`

---

### 3. Setup Frontend (Angular 19 + NgRx + Tailwind)

```bash copy
cd frontend
npm install
```

#### Run Frontend in Dev Mode

```bash
npm run dev
```

* ✅ Open in browser: `http://localhost:4200`
* Ensure backend is running first.

---

## 🌐 Test Deployed Frontend

To view the deployed app live, use this link:

**[Recipe Buddy Live Demo]()**

---

## 🧩 Features Overview

* **Backend**: Express.js + SQLite (via better‑sqlite3), REST API with fully functional CRUD.
* **Frontend**: Angular 19, NgRx Store & Effects, Reactive Forms, Tailwind CSS, modern UI with `@if`/`@for` templating.
* **State Management**: recipes loaded, added, updated, deleted globally.

---

### 📝 Notes

* Make sure ports `3000` (backend) and `4200` (frontend) are free.
* Frontend assumes backend is available at `http://localhost:3000` in development mode.

Let me know if you'd like automated scripts or CI/CD workflows added!
