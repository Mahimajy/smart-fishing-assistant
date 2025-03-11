import { useState } from "react";

export default function FishingPrediction() {
    const [data, setData] = useState({ temperature: "", windSpeed: "" });
    const [result, setResult] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://smart-fishing-assistant-4.onrender.com/api/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        const prediction = await response.json();
        setResult(prediction);
    }

    return (
        <div>
            <h1>Smart Fishing Assistant</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Temperature (°C)"
                    value={data.temperature}
                    onChange={(e) => setData({ ...data, temperature: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Wind Speed (km/h)"
                    value={data.windSpeed}
                    onChange={(e) => setData({ ...data, windSpeed: e.target.value })}
                />
                <button type="submit">Predict</button>
            </form>
            {result && <p>Prediction: {result.message}</p>}
        </div>
    );
}
