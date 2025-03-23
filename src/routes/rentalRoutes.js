const express = require("express");
const router = express.Router();
const Rental = require("../models/Rental"); // Make sure this model exists

// ✅ GET all rentals
router.get("/", async (req, res) => {
    try {
        const rentals = await Rental.find();
        res.json(rentals);
    } catch (err) {
        console.error("Error retrieving rentals:", err);
        res.status(500).json({ message: "Error retrieving rentals" });
    }
});

// ✅ GET rental by ID
router.get("/:id", async (req, res) => {
    try {
        const rental = await Rental.findById(req.params.id);
        if (!rental) return res.status(404).json({ message: "Rental not found" });
        res.json(rental);
    } catch (err) {
        console.error("Error retrieving rental:", err);
        res.status(500).json({ message: "Server error" });
    }
});

// POST route to add a rental
router.post("/", async (req, res) => {
    try {
        const { title, description, price, location, imageUrl } = req.body;
        const newRental = new Rental({ title, description, price, location, imageUrl });
        await newRental.save();
        res.status(201).json(newRental);
    } catch (err) {
        res.status(500).json({ message: "Error adding rental", error: err });
    }
});

module.exports = router;
