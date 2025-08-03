document.getElementById('predictionForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const zodiac = document.getElementById('zodiac').value;
  const stock = document.getElementById('stock').value.toUpperCase();

  if (!name || !dob || !zodiac || !stock) {
    alert('Please fill in all fields');
    return;
  }

  // Save data or use for prediction logic
  const inputData = {
    name,
    dob,
    zodiac,
    stock
  };

  // Example: store in localStorage or pass to backend
  localStorage.setItem('astroInput', JSON.stringify(inputData));

  // Redirect to results page
  window.location.href = 'result_page.html';
});

