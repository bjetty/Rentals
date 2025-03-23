const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ Connection Error:", err));

// Rental Model (make sure this matches your existing schema)
const Rental = require("./models/Rental");

// Sample rental listings
const rentals = [
  {
    title: "Oceanview Apartment",
    description: "Spacious 2-bedroom apartment with a stunning ocean view and modern amenities.",
    price: 3500,
    location: "Miami, Florida",
    image: "https://source.unsplash.com/300x200/?apartment,ocean",
    amenities: ["Wi-Fi", "Air Conditioning", "Pool", "Balcony", "Gym"],
    beds: 2,
    baths: 2,
    area: "1,100 sq ft",
  },
  {
    title: "Cozy Mountain Cabin",
    description: "A secluded cabin nestled in the Rocky Mountains, perfect for a weekend escape.",
    price: 2200,
    location: "Aspen, Colorado",
    image: "https://source.unsplash.com/300x200/?cabin,mountain",
    amenities: ["Fireplace", "Hot Tub", "Nature Trails", "Deck"],
    beds: 3,
    baths: 1,
    area: "900 sq ft",
  },
  {
    title: "Modern Downtown Loft",
    description: "An upscale loft in the heart of the city with skyline views and chic interiors.",
    price: 4000,
    location: "New York, New York",
    image: "https://source.unsplash.com/300x200/?loft,city",
    amenities: ["Elevator", "Wi-Fi", "Security", "Washer/Dryer"],
    beds: 1,
    baths: 1,
    area: "800 sq ft",
  },
  {
    title: "Tropical Beach House",
    description: "A vibrant beachfront home just steps from the sand, with a large patio and hammock.",
    price: 5000,
    location: "Maui, Hawaii",
    image: "https://source.unsplash.com/300x200/?beach,house",
    amenities: ["Ocean View", "Outdoor Shower", "Wi-Fi", "BBQ Grill"],
    beds: 4,
    baths: 3,
    area: "1,800 sq ft",
  },
  {
    title: "Suburban Family Home",
    description: "A comfortable and spacious family-friendly home in a quiet neighborhood.",
    price: 2800,
    location: "Plano, Texas",
    image: "https://source.unsplash.com/300x200/?house,suburb",
    amenities: ["Backyard", "Garage", "Wi-Fi", "Pet Friendly", "Park Nearby"],
    beds: 3,
    baths: 2,
    area: "1,400 sq ft",
  }
];

// Insert Data
Rental.insertMany(rentals)
  .then(() => {
    console.log("✅ Rental listings inserted successfully!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("❌ Error inserting rentals:", err);
  });
