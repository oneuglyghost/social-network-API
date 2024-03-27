const express = require("express");
const connect = require("./config/connection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connect();

// Middleware for parsing JSON bodies
app.use(express.json());

// Use the routes for all API routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});