const express = require('express');
const { readItems } = require('./files'); // Import readItems from files.js

const app = express();
const PORT = 3000;

// GET endpoint to read all items (users)
app.get('/api/users', async (req, res) => {
  try {
    const users = await readItems(); // Fetch users from data file
    res.json(users); // Send user data as JSON response
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "An error occurred while fetching users." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
