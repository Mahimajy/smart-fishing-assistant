const cors = require("cors");
app.use(cors());
const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

// Middleware
app.use(express.json());

// Define Routes
app.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

app.get("/api/data", (req, res) => {
  res.json({ message: "This is sample data!" });
});

app.get("/api/predict", (req, res) => {
  res.json({ message: "Prediction result here!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

