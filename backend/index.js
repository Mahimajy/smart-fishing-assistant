const express = require("express");
const cors = require("cors");

const app = express(); // ✅ Initialize app first

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "API is working!" });
});

// Example Prediction Route
app.post("/api/predict", (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(400).json({ error: "No data provided" });
  }
  // Simulated prediction
  res.json({ prediction: "Prediction result here!" });
});

// ✅ Fix: Define port properly
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


