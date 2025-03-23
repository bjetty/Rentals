import React, { useEffect, useState } from "react";
import axios from "axios";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.id) return;

    axios.get(`http://localhost:5000/api/bookings/user/${user.id}`)
      .then(res => setBookings(res.data))
      .catch(err => console.error("Error fetching bookings:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <strong>Rental:</strong> {booking.rental?.title || booking.rental} <br />
              <strong>From:</strong> {new Date(booking.startDate).toDateString()}<br />
              <strong>To:</strong> {new Date(booking.endDate).toDateString()}<br />
              <strong>Guests:</strong> {booking.guests}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
