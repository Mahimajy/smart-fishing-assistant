require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/predict-fish', async (req, res) => {
    try {
        const { weather, ocean_conditions } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Predict fish density based on these conditions:
        - Weather: ${weather}
        - Ocean Conditions: ${ocean_conditions}`;

        const result = await model.generateContent(prompt);
        const response = result.response.text();

        res.json({ fish_density_prediction: response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));

