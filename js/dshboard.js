// Filter predictions by stock name
document.getElementById("filterInput").addEventListener("input", function () {
  const filterValue = this.value.toLowerCase();
  const rows = document.querySelectorAll("#predictionTable tr");

  rows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(filterValue) ? "" : "none";
  });
});

// Sample prediction data (replace with actual if needed)
const samplePredictions = [
  { date: "2025-08-01", stock: "TCS", prediction: "Bullish", confidence: "85%" },
  { date: "2025-08-02", stock: "Infosys", prediction: "Neutral", confidence: "60%" },
  { date: "2025-08-03", stock: "Reliance", prediction: "Bearish", confidence: "70%" }
];

// Render table
window.addEventListener("load", function () {
  const tableBody = document.getElementById("predictionTable");
  samplePredictions.forEach(pred => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pred.date}</td>
      <td>${pred.stock}</td>
      <td>${pred.prediction}</td>
      <td>${pred.confidence}</td>
    `;
    tableBody.appendChild(row);
  });

  // Load notes from localStorage
  const savedNotes = localStorage.getItem("astroStocksNotes");
  if (savedNotes) {
    document.getElementById("notes").value = savedNotes;
  }

  document.getElementById("clearNotesBtn").addEventListener("click", () => {
    document.getElementById("notes").value = "";
    localStorage.removeItem("astroStocksNotes");
  });

  // Chart placeholder
  const chart = document.getElementById("chartPlaceholder");
  if (chart) {
    chart.innerHTML = "<p>📈 Chart visualization coming soon...</p>";
  }
});

// Save notes to local storage
function saveNotes() {
  const notes = document.getElementById("notes").value;
  localStorage.setItem("astroStocksNotes", notes);
  alert("📝 Notes saved successfully!");
}
