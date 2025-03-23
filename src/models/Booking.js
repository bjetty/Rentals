const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  rentalId: { type: mongoose.Schema.Types.ObjectId, ref: "Rental", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  guests: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);
