require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/bookings");
const adminRoutes = require("./routes/admin");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ message: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Available endpoints:`);
  console.log(`   - POST /api/auth/login`);
  console.log(`   - POST /api/auth/register`);
  console.log(`   - POST /api/auth/admin/login`);
  console.log(`   - POST /api/auth/admin/register`);
  console.log(`   - POST /api/bookings/events`);
  console.log(`   - POST /api/bookings/services`);
  console.log(`   - GET /api/admin/summary`);
  console.log(`   - GET /api/admin/users`);
  console.log(`   - GET /api/admin/event-bookings`);
  console.log(`   - GET /api/admin/service-bookings`);
  console.log(`   - GET /api/health\n`);
});
