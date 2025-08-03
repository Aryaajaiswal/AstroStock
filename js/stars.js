const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

class BackgroundStar {
  constructor() {
    this.x = randomBetween(0, width);
    this.y = randomBetween(0, height);
    this.radius = randomBetween(0.5, 1.5);
    this.alpha = randomBetween(0.3, 0.8);
    this.twinkleSpeed = randomBetween(0.02, 0.05);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.fill();
  }
  update() {
    this.alpha += Math.sin(Date.now() * this.twinkleSpeed) * 0.02;
    if (this.alpha < 0.3) this.alpha = 0.3;
    if (this.alpha > 0.8) this.alpha = 0.8;
    this.draw();
  }
}

class ShootingStar {
  constructor() {
    this.x = randomBetween(0, width);
    this.y = randomBetween(-100, height * 0.4);
    this.len = randomBetween(80, 150);
    this.speed = randomBetween(5, 10);
    this.angle = randomBetween(Math.PI / 6, Math.PI / 3);
    this.alpha = 1;
    this.fade = randomBetween(0.015, 0.03);
    // Randomly select color: mostly orange, sometimes white or gold
    const colorChoice = Math.random();
    this.color = colorChoice < 0.7 ? 'rgba(255, 165, 0, ' : colorChoice < 0.85 ? 'rgba(255, 255, 255, ' : 'rgba(255, 215, 0, ';
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(this.alpha, 0);
    ctx.strokeStyle = `${this.color}${this.alpha})`;
    ctx.shadowColor = this.color.includes('255, 165, 0') ? '#ff4500' : this.color.includes('255, 255, 255') ? '#ffffff' : '#ffd700';
    ctx.shadowBlur = 20;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - Math.cos(this.angle) * this.len, this.y - Math.sin(this.angle) * this.len);
    ctx.stroke();
    // Draw fading trail
    ctx.beginPath();
    ctx.moveTo(this.x - Math.cos(this.angle) * this.len, this.y - Math.sin(this.angle) * this.len);
    ctx.lineTo(this.x - Math.cos(this.angle) * this.len * 1.5, this.y - Math.sin(this.angle) * this.len * 1.5);
    ctx.strokeStyle = `${this.color}${this.alpha * 0.5})`;
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }
  update() {
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    this.alpha -= this.fade;
    this.draw();
  }
}

const backgroundStars = [];
const numBackgroundStars = Math.floor(width * height / 5000); // Scale with screen size
const shootingStars = [];

for (let i = 0; i < numBackgroundStars; i++) {
  backgroundStars.push(new BackgroundStar());
}

function spawnStar() {
  if (shootingStars.length < 3 && Math.random() < 0.025) {
    shootingStars.push(new ShootingStar());
  }
}

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, width, height);
  backgroundStars.forEach(star => star.update());
  shootingStars.forEach((star, i) => {
    star.update();
    if (star.alpha <= 0 || star.x > width || star.y > height) {
      shootingStars.splice(i, 1);
    }
  });
  spawnStar();
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  backgroundStars.length = 0;
  for (let i = 0; i < Math.floor(width * height / 5000); i++) {
    backgroundStars.push(new BackgroundStar());
  }
});

animate();