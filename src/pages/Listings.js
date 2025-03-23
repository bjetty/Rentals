import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Listings.css";

const Listings = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/rentals")
      .then((response) => {
        setRentals(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rentals:", error);
      });
  }, []);

  return (
    <div className="listings-container">
      <h1>Welcome to My Rental Booking Platform</h1>
      <h2>Available Rentals:</h2>
      <div className="rental-grid">
        {rentals.length > 0 ? (
          rentals.map((rental) => (
            <div key={rental._id} className="rental-card">
              <h3>{rental.title}</h3>
              <p>{rental.description}</p>
              <p><strong>Price:</strong> ${rental.price}</p>
              <p><strong>Location:</strong> {rental.location}</p>
              <Link to={`/rental/${rental._id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>Loading rentals...</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
