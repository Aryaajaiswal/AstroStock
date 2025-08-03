// Example of setting values dynamically from data (you can integrate actual JSON or backend here)
document.addEventListener("DOMContentLoaded", () => {
  const resultData = {
    prediction: "Buy 📈",
    confidence: "82%",
    zodiac: "Leo",
    zodiacInsight: "Leadership and courage guide your investment decisions today.",
    planetaryList: [
      "Venus trine Pluto - Positive transformations in wealth",
      "Mars sextile Neptune - Intuition in trading pays off"
    ],
    expertTip: "Trust the stars but verify with market analysis!"
  };

  document.getElementById("prediction").textContent = resultData.prediction;
  document.getElementById("confidence").textContent = resultData.confidence;
  document.getElementById("zodiac").textContent = resultData.zodiac;
  document.getElementById("zodiacInsight").textContent = resultData.zodiacInsight;

  const planetaryList = document.getElementById("planetaryList");
  planetaryList.innerHTML = "";
  resultData.planetaryList.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    planetaryList.appendChild(li);
  });

  document.getElementById("expertTip").textContent = resultData.expertTip;
});
