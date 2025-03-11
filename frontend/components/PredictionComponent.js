import React, { useState } from "react";

const PredictionComponent = () => {
    const [inputData, setInputData] = useState("");
    const [prediction, setPrediction] = useState("");

    const fetchPrediction = async () => {
        try {
            const response = await fetch("https://smart-fishing-assistant-4.onrender.com/api/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: inputData }),
            });
            const result = await response.json();
            setPrediction(result.prediction);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div>
            <h2>Fishing Prediction</h2>
            <input
                type="text"
                placeholder="Enter data"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={fetchPrediction}>Get Prediction</button>
            {prediction && <p>Prediction: {prediction}</p>}
        </div>
    );
};

export default PredictionComponent;
