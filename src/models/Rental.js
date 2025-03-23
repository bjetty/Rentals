const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    location: String
}, { timestamps: true });

module.exports = mongoose.model("Rental", RentalSchema);
