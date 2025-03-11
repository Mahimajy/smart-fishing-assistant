const express = require("express");
const cors = require("cors");

const app = express(); // ✅ Initialize app BEFORE using middleware

app.use(cors()); // ✅ Now it's safe to use
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
  // Simulate prediction
  res.json({ prediction: "Prediction result here!" });
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(port, () => { ... });
  console.log(`Server running on port ${PORT}`);
});

// Start the server
app.listen(port, () => { ... });
  console.log(`Server running on port ${port}`);
});

