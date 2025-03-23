const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// ✅ Debugging added
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(`🔹 Login request received: { email: '${email}', password: '${password}' }`);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found in database");
      return res.status(400).json({ message: "User not found" });
    }
    console.log(`✅ User found: ${JSON.stringify(user, null, 2)}`);

    // ✅ Debugging password comparison
    console.log(`🔎 Checking password: Entered: '${password}', Stored Hash: '${user.password}'`);
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      console.log("❌ Password does not match");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("✅ Password matched, generating token");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error("❌ Server error during login:", err);
    res.status(500).json({ message: "Login error" });
  }
});

module.exports = router;
