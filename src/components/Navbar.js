import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Rental Booking</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/my-bookings">My Bookings</Link></li> {/* 👈 Add this line */}
      </ul>
    </nav>
  );
};

export default Navbar;
