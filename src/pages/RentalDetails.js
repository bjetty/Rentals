import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RentalDetails.css";

const RentalDetails = () => {
  const { id } = useParams();
  const [rental, setRental] = useState(null);
  const userId = localStorage.getItem("userId");


  // ✅ Booking form state
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/rentals/${id}`)
      .then((response) => setRental(response.data))
      .catch((error) => console.error("Error fetching rental details:", error));
  }, [id]);

  // ✅ Booking form handler
  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/bookings", {
        rentalId: id,
        userId,            // ✅ uses the localStorage value
        startDate,
        endDate,
        guests,
      });
      alert(response.data.message || "Booking successful!");
    } catch (err) {
      alert("Booking failed!");
      console.error("Booking error:", err);
    }
  };

  if (!rental) return <p>Loading rental details...</p>;

  return (
    <div className="rental-details">
      <h2>{rental.title}</h2>
      <p>{rental.description}</p>
      <p><strong>Price:</strong> ${rental.price}</p>
      <p><strong>Location:</strong> {rental.location}</p>

      {/* ✅ Booking form */}
      <h3>Book this Rental</h3>
      <form onSubmit={handleBooking} className="booking-form">
        <label>
          Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </label>
        <label>
          End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </label>
        <label>
          Guests:
          <input type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} required />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default RentalDetails;