document.addEventListener('DOMContentLoaded', async () => {
  const loggedInUser = localStorage.getItem('loggedInUser');
  const authLink = document.getElementById('authLink');

  // Check login status
  if (!loggedInUser) {
    authLink.innerHTML = '<a href="login.html">Login</a>';
    alert('You must be logged in to view predictions.');
    window.location.href = 'login.html';
    return;
  } else {
    authLink.innerHTML = '<a href="#" onclick="logout()">Logout</a>';
  }

  // Load prediction data from localStorage
  const predictionData = JSON.parse(localStorage.getItem('predictionData'));

  // Fetch predictions.json
  let jsonData;
  try {
    const response = await fetch('data/predictions.json');
    jsonData = await response.json();
  } catch (error) {
    console.error('Error fetching predictions.json:', error);
    jsonData = { zodiacInsights: {}, planetaryInfluences: [], expertTips: [], stockPredictions: {} };
  }

  // Populate prediction result
  if (predictionData) {
    document.getElementById('name').textContent = predictionData.name || 'N/A';
    document.getElementById('dob').textContent = predictionData.dob || 'N/A';
    document.getElementById('zodiac').textContent = predictionData.zodiac || 'N/A';
    document.getElementById('stock').textContent = predictionData.stock || 'N/A';
    
    // Zodiac insight
    document.getElementById('zodiacInsight').textContent = jsonData.zodiacInsights[predictionData.zodiac] || 'Today’s energy aligns with financial growth.';
    
    // Stock prediction and confidence
    const stockPrediction = jsonData.stockPredictions[predictionData.stock] || { prediction: 'Hold', confidence: 70 };
    document.getElementById('prediction').textContent = `${stockPrediction.prediction} 📈`;
    document.getElementById('confidence').textContent = `${stockPrediction.confidence}%`;

    // Planetary influences
    const planetaryList = document.getElementById('planetaryList');
    planetaryList.innerHTML = jsonData.planetaryInfluences
      .slice(0, 2) // Show 2 random influences for brevity
      .map(p => `<li>${p.alignment} - ${p.description}</li>`)
      .join('');

    // Expert tip (random selection)
    const randomTip = jsonData.expertTips[Math.floor(Math.random() * jsonData.expertTips.length)];
    document.getElementById('expertTip').textContent = randomTip;
  } else {
    document.getElementById('name').textContent = 'N/A';
    document.getElementById('dob').textContent = 'N/A';
    document.getElementById('zodiac').textContent = 'N/A';
    document.getElementById('stock').textContent = 'N/A';
    document.getElementById('zodiacInsight').textContent = 'No prediction data available. Please submit a prediction.';
    document.getElementById('planetaryList').innerHTML = '<li>No planetary influences available.</li>';
    document.getElementById('expertTip').textContent = 'Submit a prediction to receive tailored insights.';
  }
});

// Logout function
function logout() {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('predictionData');
  alert('Logged out successfully!');
  window.location.href = 'login.html';
}