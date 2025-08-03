
// Filter predictions table based on input
document.getElementById("filterInput").addEventListener("input", function () {
  const filterValue = this.value.toLowerCase();
  const rows = document.querySelectorAll("#predictionsTable tbody tr");

  rows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    row.style.display = rowText.includes(filterValue) ? "" : "none";
  });
});

// Save notes to local storage
document.getElementById("saveNotes").addEventListener("click", function () {
  const notes = document.getElementById("notes").value;
  localStorage.setItem("astroStocksNotes", notes);
  alert("Notes saved!");
});

// Load saved notes on page load
window.addEventListener("load", function () {
  const savedNotes = localStorage.getItem("astroStocksNotes");
  if (savedNotes) {
    document.getElementById("notes").value = savedNotes;
  }

  // Render chart placeholder
  const chart = document.getElementById("chartPlaceholder");
  if (chart) {
    chart.innerHTML = "<p>Chart visualization coming soon...</p>";
  }
});

// Download notes
document.getElementById("downloadNotes").addEventListener("click", function () {
  const notes = document.getElementById("notes").value;
  const blob = new Blob([notes], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "AstroStocks_Notes.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
