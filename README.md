# Bookerly

Bookerly is a full-stack event management platform developed during industrial training.  
It allows users to book events or services while providing admins with secure management capabilities.

---

## Features
- User registration and login
- Admin authentication and protected APIs
- Event / service booking
- Admin summary and user management endpoints
- Responsive modern UI

---

## Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB

---

## Project Structure

```bash
Bookerly/
├── client/                # Next.js frontend
│   ├── app/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   └── README.md
├── server/                # Express backend
│   ├── config/
│   ├── routes/
│   ├── scripts/
│   ├── index.js
│   ├── package.json
│   └── README.md
└── SETUP.md               # Setup guide
```

## Prerequisites

- Node.js 18+ (or compatible LTS)
- npm
- MongoDB Atlas or local MongoDB instance

---

## Setup (Local)

### Backend
```bash
cd server
npm install
npm run dev


3. Create a `.env` file in the `server/` directory with the following values:

```env
PORT=5001
MONGODB_URI=your_mongodb_uri
MONGODB_DB_NAME=bookerly
NODE_ENV=development
```

4. Seed the initial admin user:

```bash
npm run seed
```

### Frontend

cd client
npm install
npm run dev


## Run Locally

Run both servers in separate terminals.

### Start backend

```bash
cd server
npm run dev
```

### Start frontend

```bash
cd client
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend: `http://localhost:5001`

## Seeded Admin Credentials

The backend seed script creates an admin user. By default, your admin login will be:

- Email: `admin@bookerly.com`
- Password: `admin123`

> Change these values in the seed script or database after first login for production use.

## Useful Commands

### Backend

```bash
npm run dev     # Start Express with nodemon
npm start       # Run Express in production mode
npm run seed    # Create initial admin user
```

### Frontend

```bash
npm run dev     # Start Next.js dev server
npm run build   # Build production assets
npm run start   # Start Next.js production server
npm run lint    # Run Next.js lint checks
```

### Recommended `.gitignore`

```
node_modules/
.next/
.DS_Store
npm-debug.log*
yarn-error.log*
client/.env.local
server/.env
.env
```

## Setup
For detailed local development and setup instructions, see ⁠ SETUP.md ⁠.

---





