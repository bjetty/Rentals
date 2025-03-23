const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const { rentalId, userId, startDate, endDate, guests } = req.body;

    console.log("📥 Booking data received:", req.body); // Debug

    const newBooking = new Booking({
      rentalId,
      userId,
      startDate,
      endDate,
      guests,
    });

    await newBooking.save();

    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (error) {
    console.error("❌ Booking Error:", error);
    res.status(500).json({ message: "Booking failed", error });
  }
});

module.exports = router;
