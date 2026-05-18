const express = require("express");
const bcrypt = require("bcryptjs");
const { connectToDatabase } = require("../config/mongodb");

const router = express.Router();

function normalizeEmail(email = "") {
  return email.trim().toLowerCase();
}

function buildAuthPayload(account) {
  return {
    id: account._id.toString(),
    email: account.email,
    name: account.name,
    phone: account.phone || "",
    role: account.role,
    token: `${account.role}-token-${Date.now()}`
  };
}

// User Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const { db } = await connectToDatabase();
    const usersCollection = db.collection("users");
    const normalizedEmail = normalizeEmail(email);

    const user = await usersCollection.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json(buildAuthPayload(user));
  } catch (error) {
    console.error("User login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;

    if (!email || !password || !name || !phone) {
      return res.status(400).json({ message: "Name, email, phone, and password are required" });
    }

    const { db } = await connectToDatabase();
    const usersCollection = db.collection("users");
    const normalizedEmail = normalizeEmail(email);

    const existingUser = await usersCollection.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      email: normalizedEmail,
      password: hashedPassword,
      name,
      phone,
      role: "user",
      createdAt: new Date()
    };

    const result = await usersCollection.insertOne(newUser);

    res.status(201).json({
      message: "User registered successfully",
      ...buildAuthPayload({ ...newUser, _id: result.insertedId })
    });
  } catch (error) {
    console.error("User registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Admin Login
router.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const { db } = await connectToDatabase();
    const adminsCollection = db.collection("admins");
    const normalizedEmail = normalizeEmail(email);

    const admin = await adminsCollection.findOne({ email: normalizedEmail });

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json(buildAuthPayload(admin));
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Admin Registration
router.post("/admin/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "Email, password, and name are required" });
    }

    const { db } = await connectToDatabase();
    const adminsCollection = db.collection("admins");
    const normalizedEmail = normalizeEmail(email);

    const existingAdmin = await adminsCollection.findOne({ email: normalizedEmail });
    if (existingAdmin) {
      return res.status(409).json({ message: "Admin with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await adminsCollection.insertOne({
      email: normalizedEmail,
      password: hashedPassword,
      name,
      role: "admin",
      createdAt: new Date()
    });

    res.status(201).json({
      message: "Admin registered successfully",
      id: result.insertedId.toString()
    });
  } catch (error) {
    console.error("Admin registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
