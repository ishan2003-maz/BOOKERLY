const express = require("express");
const { connectToDatabase } = require("../config/mongodb");

const router = express.Router();

router.get("/summary", async (req, res) => {
  try {
    const { db } = await connectToDatabase();

    const [totalUsers, totalEventBookings, totalServiceBookings, totalAdmins] = await Promise.all([
      db.collection("users").countDocuments(),
      db.collection("eventBookings").countDocuments(),
      db.collection("serviceBookings").countDocuments(),
      db.collection("admins").countDocuments()
    ]);

    res.json({
      totalUsers,
      totalEventBookings,
      totalServiceBookings,
      totalAdmins
    });
  } catch (error) {
    console.error("Admin summary error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const users = await db
      .collection("users")
      .find({}, { projection: { password: 0 } })
      .sort({ createdAt: -1 })
      .toArray();

    res.json(
      users.map((user) => ({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        phone: user.phone || "",
        role: user.role,
        createdAt: user.createdAt
      }))
    );
  } catch (error) {
    console.error("Admin users fetch error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/event-bookings", async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const bookings = await db
      .collection("eventBookings")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    res.json(
      bookings.map((booking) => ({
        id: booking._id.toString(),
        userId: booking.userId?.toString?.() || "",
        userName: booking.userName,
        userEmail: booking.userEmail,
        userPhone: booking.userPhone || "",
        eventName: booking.eventName,
        eventCategory: booking.eventCategory,
        selectedDate: booking.selectedDate,
        selectedTime: booking.selectedTime,
        status: booking.status,
        createdAt: booking.createdAt
      }))
    );
  } catch (error) {
    console.error("Admin event bookings fetch error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/service-bookings", async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const bookings = await db
      .collection("serviceBookings")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    res.json(
      bookings.map((booking) => ({
        id: booking._id.toString(),
        userId: booking.userId?.toString?.() || "",
        userName: booking.userName,
        userEmail: booking.userEmail,
        userPhone: booking.userPhone || "",
        serviceName: booking.serviceName,
        contactNumber: booking.contactNumber,
        selectedDay: booking.selectedDay,
        selectedTime: booking.selectedTime,
        status: booking.status,
        createdAt: booking.createdAt
      }))
    );
  } catch (error) {
    console.error("Admin service bookings fetch error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
