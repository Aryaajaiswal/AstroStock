// const sections = document.querySelectorAll('.fade-in');

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.style.animationPlayState = 'running';
//     }
//   });
// }, {
//   threshold: 0.1
// });

// sections.forEach(sec => {
//   sec.style.animationPlayState = 'paused';
//   observer.observe(sec);
// });
// Smooth scroll on Predict button
document.addEventListener("DOMContentLoaded", function () {
  const predictBtn = document.querySelector(".btn");
  if (predictBtn) {
    predictBtn.addEventListener("click", function (e) {
      predictBtn.classList.add("clicked");
      setTimeout(() => {
        window.location.href = "form.html";
      }, 300);
    });
  }
});

