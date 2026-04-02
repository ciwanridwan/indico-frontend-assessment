## 👥 User Management Dashboard
A modern, responsive User Management UI built with React, TanStack Query (React Query), and Material UI. This project demonstrates full CRUD integration with a REST API, featuring client-side searching, pagination, and robust state management.

## 🚀 Features
* Data Fetching: Efficiently fetches user data from JSONPlaceholder API using useQuery.
* Create User: Functional "Add User" modal with validation and loading states.
* Delete User: Instant UI updates using manual cache manipulation (setQueryData).
* Search: Real-time client-side filtering by user name.
* Pagination: Built-in Material UI pagination for large datasets.
* UX/UI: Loading spinners, error handling, and responsive design via Material UI.

## 🛠️ Tech Stack
* Frontend: React (Vite)
* State Management: TanStack Query v5 (React Query)
* UI Framework: Material UI (MUI)
* HTTP Client: Axios
* Icons: MUI Icons

## 📂 Project Architecture
The project follows a modular structure to separate concerns:
```bash
src/
├── api/             # API configuration and Axios instance
├── components/      # UI Components (Table, Form, Dashboard)
├── hooks/           # Custom React Query hooks (useUsers)
├── App.js           # Main application entry and Provider setup
└── main.js          # Rendering and Global Styles
```

# ⚙️ Installation & Setup
## 1. Clone Repository
```bash
git clone https://github.com/ciwanridwan/indico-frontend-assessment
cd indico-frontend-assessment
```
## 2. Install Depedency 
```bash
npm install
```

## 3. Run Development Server
```bash
npm run dev
```

