# 👥 User Management System

[LIVE DEMO](https://user-management-system-7osn.vercel.app/users)

This is a **CRUD application** built using **React** and **Vite**. It provides the ability to manage user data with a modern, clean interface and efficient state management.

---

## 🌟 Key Features

- ✅ **User List**: View and manage users in a simple, responsive DataGrid.
- ➕ **Create User**: Add new users with real-time form validation.
- ✏️ **Edit User**: Update user information easily.
- ❌ **Delete User**: Remove users with a confirmation prompt.
- ✔️ **Form Validation**: Validate user data (name, email, phone) using React Hook Form and Zod.
- 🎯 **Notifications**: Get instant feedback with toast notifications (success/error).
- 🔬 **Unit Tests**: Thorough testing of components and API logic.
- ⚡ **Optimized Architecture**: FSD-style project structure for easy extensibility.

---

## 🛠️ Tech Stack

- **Vite**: A fast next-gen build tool for faster development.
- **React**: A popular UI library for building components.
- **Redux Toolkit**: State management made easy with Redux.
- **RTK Query**: Simplifies data fetching, caching, and synchronization.
- **React Hook Form + Zod**: Efficient form handling and validation.
- **Material UI**: Modern component library for styled, responsive UI.
- **Vitest + React Testing Library**: Testing framework to ensure quality and reliability.
- **JSONPlaceholder**: Mock API to simulate user data interactions.

---

## 🌳 Project Structure

```
src/
├── main/        # Core app setup: Redux store, theme, routing
├── models/   # Core business entities (user)
│   └── user/
│       └── model/  # User-related logic (API, types, etc.)
├── modules/   # Feature-specific components (UserForm, buttons, etc.)
├── pages/      # Page components (views)
├── components/    # Reusable UI components (e.g., UserTable)
├── shared/     # Shared utilities (hooks, middleware)
└── test/       # Tests, mock data, and test utilities
```

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/dyarechuk/UserManagementSystem.git
cd user-manager
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### ✅ Running Tests

```bash
npm run test
```

## 📡 API
The app uses the JSONPlaceholder API to fetch user data. Since it’s a mock API:

- POST, PUT, DELETE requests will not persist data.

- All updates happen optimistically on the client-side cache.