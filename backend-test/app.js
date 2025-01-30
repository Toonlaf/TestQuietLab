// Basic Express.js server setup
const express = require('express');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// In-memory storage
const tasks = [];

// Example route
app.get('/tasks', (req, res) => {
  // Implement your logic here
});

// Start implementing your routes and logic here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 