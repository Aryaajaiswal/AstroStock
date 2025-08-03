window.onload = function () {
  const data = JSON.parse(localStorage.getItem("astroInput")) || { stock: "XYZ", zodiac: "Libra" };

  // Stock Chart (Fake values for now)
  const stockCtx = document.getElementById("stockChart").getContext("2d");
  new Chart(stockCtx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [{
        label: `${data.stock} Price`,
        data: [120, 125, 123, 130, 128],
        borderColor: "#4fc3f7",
        backgroundColor: "rgba(79,195,247,0.2)",
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: false }
      }
    }
  });

  // Astrology Chart
  const zodiacEnergy = {
    Aries: 60, Taurus: 70, Gemini: 50, Cancer: 80, Leo: 90,
    Virgo: 75, Libra: 85, Scorpio: 60, Sagittarius: 70,
    Capricorn: 65, Aquarius: 55, Pisces: 78
  };

  const zodiacCtx = document.getElementById("zodiacChart").getContext("2d");
  new Chart(zodiacCtx, {
    type: "bar",
    data: {
      labels: Object.keys(zodiacEnergy),
      datasets: [{
        label: "Zodiac Energy",
        data: Object.values(zodiacEnergy),
        backgroundColor: "#ba68c8"
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });
};

function goBack() {
  window.location.href = "dashboard.html";
}
