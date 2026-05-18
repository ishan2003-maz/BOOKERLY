##⁠This setup guide is intended for local development and training purposes.

# Bookerly - Full Stack Setup Guide

Project structure:
```
Bookerly/
├── server/              # Backend (Express.js + MongoDB)
└── client/              # Frontend (Next.js)
```

---

## Step 1: Configure Backend Server

### 1.1 Update MongoDB Connection

Edit `server/.env`:

```env
PORT=5001
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB_NAME=bookerly
NODE_ENV=development
```

Replace with your **MongoDB Atlas** credentials.

### 1.2 Install Server Dependencies

```bash
cd server
npm install
```

### 1.3 Seed Admin User

```bash
npm run seed
```

Expected output:
```
✅ Admin created successfully!
─────────────────────────────────────
Admin ID: ...
Email: admin@bookerly.com
Password: admin123
─────────────────────────────────────
```

### 1.4 Start Backend Server

```bash
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:5001
📝 Available endpoints:
   - POST /api/auth/login
   - POST /api/auth/register
   - POST /api/auth/admin/login
   - POST /api/auth/admin/register
   - GET /api/health
```

---

## Step 2: Configure Frontend

### 2.1 Update Client Environment Variables

Edit `client/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

### 2.2 Install Client Dependencies

```bash
cd client
npm install
```

### 2.3 Start Frontend Development Server

In a new terminal:

```bash
cd client
npm run dev
```

You should see:
```
> next dev
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
```

---

## Step 3: Test the Application

### Test Login

1. Open: `http://localhost:3000/components/registration`
2. Create a user account
3. Open: `http://localhost:3000/components/login`
4. Log in with that user account
5. You should be redirected to the homepage

### Test Admin Login

1. Open: `http://localhost:3000/components/admin/adminlogin`
2. Login with:
   - **Email**: `admin@bookerly.com`
   - **Password**: `admin123`
3. You should be redirected to the admin dashboard

### Verify Database Connection

1. Open **MongoDB Compass**
2. Connect with your MongoDB URI
3. Navigate to: `bookerly` → `users` and `admins` collections
4. You should see your registered user and the seeded admin

### Check Server Health

Visit: `http://localhost:5001/api/health`

Should return:
```json
{ "status": "Server is running" }
```

---

## Running Both Servers (Recommended Setup)

Open **two terminal windows/tabs**:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

Both servers will run simultaneously:
- Backend: `http://localhost:5001`
- Frontend: `http://localhost:3000`

---

## Server Structure

```
server/
├── config/
│   └── mongodb.js       # MongoDB connection pooling
├── routes/
│   └── auth.js          # Authentication endpoints
├── scripts/
│   └── seed-admin.js    # Initialize admin user
├── index.js             # Express app setup
├── package.json
├── .env                 # Environment config
└── README.md
```

---

## Adding More Endpoints

To add new API endpoints:

1. Create a new file in `server/routes/`
2. Define your endpoints using Express
3. Import in `server/index.js`
4. Update client to call the new endpoint

Example:

**server/routes/users.js:**
```javascript
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const { db } = await connectToDatabase();
  const users = await db.collection("users").find({}).toArray();
  res.json(users);
});

module.exports = router;
```

**server/index.js:**
```javascript
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);
```

---

## Troubleshooting

### ❌ "Cannot find module 'express'"
```bash
cd server
npm install
```

### ❌ "MONGODB_URI not defined"
- Check `server/.env` file exists
- Verify `MONGODB_URI` is set correctly
- Restart server after editing `.env`

### ❌ "Connection refused on port 5001"
- Is backend server running?
- Check: `npm run dev` in server directory

### ❌ "404 on API call from frontend"
- Is backend server running on port 5001?
- Check `NEXT_PUBLIC_API_URL` in `client/.env.local`
- Verify MongoDB connection is working

---

## Next Steps

1. ✅ Create admin user
2. ✅ Test login functionality
3. Add endpoints for:
   - User management
   - Events management
   - Services management
   - Feedback management
4. Connect admin dashboard to real data

Need help with anything? Let me know! 🚀
