app.post("/api/predict", (req, res) => {
    const { temperature, windSpeed } = req.body;
    // Example prediction logic (replace with real model)
    const prediction = temperature > 20 && windSpeed < 15 ? "Good Fishing Conditions" : "Not Ideal";
    res.json({ message: prediction });
});
