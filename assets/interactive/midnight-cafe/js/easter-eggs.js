// Easter Eggs & Interactive Ambient Features

document.addEventListener('DOMContentLoaded', () => {
  initWeatherWindow();
  initPoppableBeans();
  initVinylScratch();
  initTypewriter();
});

// --- 1. Interactive Weather Window ---
function initWeatherWindow() {
  const windowScene = document.querySelector('.window-scene');
  if (!windowScene) return;

  const states = ['rain', 'storm', 'snow', 'clear'];
  let currentStateIndex = 0;

  windowScene.addEventListener('click', () => {
    // Remove previous state class
    windowScene.classList.remove(`weather-${states[currentStateIndex]}`);
    
    // Increment state
    currentStateIndex = (currentStateIndex + 1) % states.length;
    const newState = states[currentStateIndex];
    
    // Add new state class
    windowScene.classList.add(`weather-${newState}`);

    // Optional: play sound effect
    playWeatherSound(newState);
  });
}

function playWeatherSound(state) {
  // We can synthesize a simple sound using Web Audio API or use existing ones
  const ctx = window.audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();

  if (state === 'storm') {
    // Thunder rumble effect
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(40, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 1.5);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(50, ctx.currentTime + 1.5);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.0);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 2.0);
  } else if (state === 'clear') {
    // Gentle chime
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 1.5);
  }
}

// --- 2. Poppable Coffee Beans ---
function initPoppableBeans() {
  const beans = document.querySelectorAll('.bean');
  
  beans.forEach(bean => {
    bean.addEventListener('click', (e) => {
      if (bean.classList.contains('popped')) return;

      bean.classList.add('popped');
      playPopSound();

      // Reset after animation so it can fall and be popped again later
      setTimeout(() => {
        bean.classList.remove('popped');
      }, 2000);
    });
  });
}

function playPopSound() {
  const ctx = window.audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(600, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
  
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start();
  osc.stop(ctx.currentTime + 0.1);
}

// --- 3. Vinyl Scratch ---
function initVinylScratch() {
  const dialCenter = document.querySelector('.dial-center');
  if (!dialCenter) return;

  let isDragging = false;
  let startY = 0;
  let lastY = 0;

  dialCenter.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    lastY = e.clientY;
    dialCenter.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      dialCenter.style.cursor = 'grab';
      // Reset playback rate
      const audioEl = document.getElementById('track');
      if (audioEl) {
        audioEl.playbackRate = 1.0;
      }
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaY = e.clientY - lastY;
    lastY = e.clientY;

    if (Math.abs(deltaY) > 2) {
      // Create a scratch sound occasionally
      if (Math.random() > 0.7) {
        playScratchSound();
      }

      // Adjust playback rate briefly if audio exists
      const audioEl = document.getElementById('track');
      if (audioEl && !audioEl.paused) {
        // Bend pitch slightly based on drag direction
        const newRate = 1.0 + (deltaY * -0.01); 
        audioEl.playbackRate = Math.max(0.5, Math.min(newRate, 2.0));
      }
    }
  });
}

function playScratchSound() {
  const ctx = window.audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();

  const bufferSize = ctx.sampleRate * 0.1; // 100ms
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1; // White noise
  }

  const noiseSource = ctx.createBufferSource();
  noiseSource.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1000 + Math.random() * 2000;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

  noiseSource.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noiseSource.start();
}

// --- 4. Typewriter Effect for Nostalgic Mode ---
const typewriterPhrases = [
  "The city lights look exactly the same, but the city feels so empty.",
  "There is a specific kind of quiet that only happens at 3 AM when you are the only one remembering.",
  "I played this song so many times I forgot how it ends.",
  "Sometimes I wonder if you look at the rain and remember me too.",
  "We were a beautiful tragedy playing in slow motion.",
  "I kept the polaroid, even though the colors are fading.",
  "Every corner of this street still echoes with a laugh that isn't there.",
  "It's funny how a simple melody can hold the weight of an entire year."
];
let typewriterTimer;
let isTypewriterRunning = false;

function initTypewriter() {
  const el = document.getElementById('typewriterText');
  if (!el) return;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        if (document.body.classList.contains('nostalgic-mode')) {
          window.startTypewriter();
        } else {
          window.stopTypewriter();
        }
      }
    });
  });
  observer.observe(document.body, { attributes: true });

  if (document.body.classList.contains('nostalgic-mode')) {
    window.startTypewriter();
  }
}

window.startTypewriter = function() {
  const el = document.getElementById('typewriterText');
  if (!el) return;
  if (isTypewriterRunning) return;
  isTypewriterRunning = true;
  el.textContent = "TEST";
  
  if (typewriterTimer) clearTimeout(typewriterTimer);
  
  let phraseIndex = Math.floor(Math.random() * typewriterPhrases.length);
  let charIndex = 0;
  let isDeleting = false;
  let currentText = '';

  function type() {
    if (!isTypewriterRunning) return;
    
    const fullText = typewriterPhrases[phraseIndex];
    
    if (isDeleting) {
      currentText = fullText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      currentText = fullText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    el.textContent = currentText + '|';

    // Play clack sound if we actually typed a character
    if (currentText.length > 0 || isDeleting) {
      playTypewriterClack();
    }

    let typeSpeed = Math.random() * 50 + 100;
    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && currentText === fullText) {
      typeSpeed = 3000; // Pause at end
      isDeleting = true;
    } else if (isDeleting && currentText === '') {
      isDeleting = false;
      phraseIndex = Math.floor(Math.random() * typewriterPhrases.length);
      typeSpeed = 1000; // Pause before next
    }

    typewriterTimer = setTimeout(type, typeSpeed);
  }

  type();
}

function playTypewriterClack() {
  const ctx = window.audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(300 + Math.random() * 100, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.03);
  
  gain.gain.setValueAtTime(0.05, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start();
  osc.stop(ctx.currentTime + 0.03);
}

window.stopTypewriter = function() {
  isTypewriterRunning = false;
  if (typewriterTimer) clearTimeout(typewriterTimer);
  const el = document.getElementById('typewriterText');
  if (el) el.textContent = '';
}
