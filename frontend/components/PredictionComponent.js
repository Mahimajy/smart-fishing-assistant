const fetchPrediction = async (inputData) => {
  try {
    const response = await fetch("https://smart-fishing-assistant-4.onrender.com/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: inputData }),
    });
    const result = await response.json();
    console.log("Prediction:", result);
    return result.prediction;
  } catch (error) {
    console.error("Error fetching prediction:", error);
  }
};
