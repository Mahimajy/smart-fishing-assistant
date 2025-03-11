const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Smart Fishing Assistant API is running!");
});

app.listen(PORT, () => {
  console.log(`Smart Fishing Assistant API is running on port ${PORT}`);
});

