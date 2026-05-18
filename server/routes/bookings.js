const express = require("express");
const { ObjectId } = require("mongodb");
const { connectToDatabase } = require("../config/mongodb");

const router = express.Router();

function normalizeText(value = "") {
  return String(value).trim();
}

async function findUserById(db, userId) {
  if (!userId || !ObjectId.isValid(userId)) {
    return null;
  }

  return db.collection("users").findOne({ _id: new ObjectId(userId) });
}

router.post("/events", async (req, res) => {
  try {
    const { userId, eventName, eventCategory, selectedDate, selectedTime } = req.body;

    if (!userId || !eventName || !selectedDate || !selectedTime) {
      return res.status(400).json({
        message: "User, event name, date, and time are required."
      });
    }

    const { db } = await connectToDatabase();
    const user = await findUserById(db, userId);

    if (!user) {
      return res.status(404).json({ message: "Logged in user was not found." });
    }

    const booking = {
      userId: user._id,
      userName: user.name,
      userEmail: user.email,
      userPhone: user.phone || "",
      eventName: normalizeText(eventName),
      eventCategory: normalizeText(eventCategory) || "Event",
      selectedDate: normalizeText(selectedDate),
      selectedTime: normalizeText(selectedTime),
      status: "confirmed",
      createdAt: new Date()
    };

    const result = await db.collection("eventBookings").insertOne(booking);

    res.status(201).json({
      message: "Event booking created successfully.",
      bookingId: result.insertedId.toString()
    });
  } catch (error) {
    console.error("Event booking error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/services", async (req, res) => {
  try {
    const { userId, serviceName, clientNumber, selectedDay, selectedTime } = req.body;

    if (!userId || !serviceName || !clientNumber || !selectedDay || !selectedTime) {
      return res.status(400).json({
        message: "User, service name, phone number, day, and time are required."
      });
    }

    const { db } = await connectToDatabase();
    const user = await findUserById(db, userId);

    if (!user) {
      return res.status(404).json({ message: "Logged in user was not found." });
    }

    const booking = {
      userId: user._id,
      userName: user.name,
      userEmail: user.email,
      userPhone: user.phone || "",
      serviceName: normalizeText(serviceName),
      contactNumber: normalizeText(clientNumber),
      selectedDay: normalizeText(selectedDay),
      selectedTime: normalizeText(selectedTime),
      status: "requested",
      createdAt: new Date()
    };

    const result = await db.collection("serviceBookings").insertOne(booking);

    res.status(201).json({
      message: "Service booking created successfully.",
      bookingId: result.insertedId.toString()
    });
  } catch (error) {
    console.error("Service booking error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/history/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId || !ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "A valid user ID is required." });
    }

    const { db } = await connectToDatabase();
    const objectUserId = new ObjectId(userId);

    const [eventBookings, serviceBookings] = await Promise.all([
      db
        .collection("eventBookings")
        .find({ userId: objectUserId })
        .sort({ createdAt: -1 })
        .toArray(),
      db
        .collection("serviceBookings")
        .find({ userId: objectUserId })
        .sort({ createdAt: -1 })
        .toArray()
    ]);

    const history = [
      ...eventBookings.map((booking) => ({
        id: booking._id.toString(),
        bookingType: "event",
        title: booking.eventName,
        category: booking.eventCategory,
        scheduleLabel: `${booking.selectedDate} at ${booking.selectedTime}`,
        contactNumber: booking.userPhone || "",
        status: booking.status,
        createdAt: booking.createdAt
      })),
      ...serviceBookings.map((booking) => ({
        id: booking._id.toString(),
        bookingType: "service",
        title: booking.serviceName,
        category: "Service",
        scheduleLabel: `${booking.selectedDay} at ${booking.selectedTime}`,
        contactNumber: booking.contactNumber || booking.userPhone || "",
        status: booking.status,
        createdAt: booking.createdAt
      }))
    ].sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt));

    res.json(history);
  } catch (error) {
    console.error("Booking history fetch error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
