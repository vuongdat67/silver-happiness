document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 60; // Just enough for ambiance without clutter

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
      // Randomize initial Y so they cover the screen initially
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 200;
      this.size = Math.random() * 2 + 0.5;
      this.speedY = -(Math.random() * 0.4 + 0.1); // Slow upward float
      this.speedX = (Math.random() - 0.5) * 0.3; // Slight horizontal drift
      this.baseOpacity = Math.random() * 0.3 + 0.05;
      this.opacity = this.baseOpacity;
      this.pulseSpeed = Math.random() * 0.03 + 0.01;
      this.pulseTime = Math.random() * Math.PI * 2;
      
      // Warm, nostalgic colors (pale gold, soft amber)
      const r = Math.floor(Math.random() * 55) + 200; // 200-255
      const g = Math.floor(Math.random() * 55) + 160; // 160-215
      const b = Math.floor(Math.random() * 50) + 100; // 100-150
      this.color = `${r}, ${g}, ${b}`;
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.01) * 0.2 + this.speedX; // Wavy motion
      
      this.pulseTime += this.pulseSpeed;
      this.opacity = this.baseOpacity + Math.sin(this.pulseTime) * 0.1;
      if (this.opacity < 0) this.opacity = 0;

      // Wrap around to bottom when floating past top
      if (this.y < -20) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let p of particles) {
      p.update();
      p.draw();
    }
    
    requestAnimationFrame(animate);
  }

  // Use IntersectionObserver or reduced motion media query to pause if needed?
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!reducedMotionQuery.matches) {
    animate();
  }
});
