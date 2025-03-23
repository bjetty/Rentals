import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Listings from "./pages/Listings";
import RentalDetails from "./pages/RentalDetails"; // New Page for Rentals
import ChangePassword from "./pages/ChangePassword";
import MyBookings from "./pages/MyBookings";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rental/:id" element={<RentalDetails />} />
        <Route path="/change-password" element={<ChangePassword />} /> {/* 👈 Add this */}
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </Router>
  );
}

export default App;
