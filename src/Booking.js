const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  rentalId: { type: mongoose.Schema.Types.ObjectId, ref: "Rental", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  startDate: Date,
  endDate: Date,
  guests: Number,
});

module.exports = mongoose.model("Booking", bookingSchema);