const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// GET API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Krish" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Riya" }
  ]);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
