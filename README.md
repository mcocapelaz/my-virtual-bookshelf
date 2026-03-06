# My Virtual Bookshelf

A full-stack web application for managing and organizing your personal book collection.
Built with React and Express, this project allows users to create, view, update, and delete books from their virtual bookshelf.

---

## Features

* **Book Management**: Add, view, update, and delete books from your collection
* **Responsive Design**: Clean and intuitive user interface built with React
* **Database Integration**: PostgreSQL backend for persistent data storage
* **RESTful API**: Express.js server providing RESTful endpoints
* **CORS Support**: Cross-origin resource sharing enabled for frontend-backend communication
* **Development Tools**: ESLint for code quality and Vite for fast development

---
## What I learned

* Designing a **full-stack architecture** with separate frontend and backend layers
* Building **reusable React components**
* Creating **RESTful APIs with Express**
* Integrating **PostgreSQL** for persistent data storage
* Managing development workflows with **Vite and ESLint**

---

## Tech Stack

### Frontend

* **React 19.2** — UI framework
* **React Router DOM 7.13** — Client-side routing
* **Vite 4.5** — Build tool and dev server
* **SASS/SCSS** — Styling
* **ESLint** — Code linting

### Backend

* **Node.js** — JavaScript runtime
* **Express 4.19** — Web framework
* **PostgreSQL** — Relational database
* **CORS 2.8** — Cross-origin resource sharing
* **dotenv** — Environment variable management
* **Nodemon** — Auto-reload during development

---

## 📁 Project Structure

```
my-virtual-bookshelf/
├── frontend/               # React application
│   ├── src/                # Source files
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── ...
├── backend/                # Express.js server
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── ...
├── css/                    # Shared stylesheets
├── images/                 # Project assets
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint rules
├── pgConnect.json          # PostgreSQL connection config
└── README.md               # This file
```

---

## Getting Started

### Prerequisites

* Node.js (v16 or higher)
* PostgreSQL (v12 or higher)
* npm or yarn package manager

---

## Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mcocapelaz/my-virtual-bookshelf.git
cd my-virtual-bookshelf
```

---

### 2️⃣ Configure Database Connection

Update `pgConnect.json` with your PostgreSQL credentials:

```json
{
  "user": "your_db_user",
  "password": "your_db_password",
  "host": "localhost",
  "port": 5432,
  "database": "bookshelf_db"
}
```

---

### 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 4️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

### 5️⃣ Environment Configuration

Create a `.env` file in the `backend` directory:

```
PORT=5000
NODE_ENV=development
```

---

## Running the Application

### Backend

```bash
cd backend
npm run dev    # Start with nodemon (auto-reload)
# or
npm start      # Start production server
```

The backend server will start at:
[http://localhost:5000](http://localhost:5000)

---

### Frontend

```bash
cd frontend
npm run dev    # Start development server with Vite
```

The frontend will be available at:
[http://localhost:5173](http://localhost:5173)

---

## Building for Production

```bash
cd frontend
npm run build    # Create optimized production build
npm run preview  # Preview production build locally
```

---

## Available Scripts

### Backend Scripts

* `npm start` — Start the production server
* `npm run dev` — Start with nodemon for development

### Frontend Scripts

* `npm run dev` — Start development server
* `npm run build` — Create production build
* `npm run lint` — Run ESLint to check code quality
* `npm run preview` — Preview production build

---

## API Endpoints

The backend provides RESTful API endpoints for book management.
Refer to the backend documentation for detailed endpoint specifications.

---

## Code Quality

The project uses ESLint to maintain code quality and consistency.
Run the linter with:

```bash
cd frontend
npm run lint
```

---

## License

This project is open source and available under the **MIT License**.

---

## Author

**mcocapelaz** — GitHub Profile

---

## Contributing

Contributions are welcome!
Feel free to fork this repository and submit pull requests.


