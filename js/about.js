// about.js

document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learnMore');
  const exploreBtn = document.getElementById('explore');

  learnMoreBtn.addEventListener('click', () => {
    alert("AstroStocks is where the stars meet stocks! Stay tuned for more features.");
  });

  exploreBtn.addEventListener('click', () => {
    window.location.href = 'form.html'; // or wherever the user should go
  });
});
