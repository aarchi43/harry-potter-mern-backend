const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const characterRoutes = require('./routes/characterRoutes');

// Environment variables configuration
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB Atlas database
connectDB();

// Base route for testing
app.get("/", (req, res) => {
    res.json({ message: "Harry Potter Character API is running" });
});

// Character routes
app.use('/api/characters', characterRoutes);

// Define PORT and start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});