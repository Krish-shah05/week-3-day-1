// import express
const express = require("express");
const cors = require("cors");

// create app
const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// simple GET API
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Krish" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Riya" }
  ]);
});

// start server
app.listen(PORT, () => {
  console.log("Backend running on http://localhost:5000");
});
