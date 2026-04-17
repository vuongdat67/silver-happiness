---
hide:
  - toc
---

<style>
.hero-section { text-align: center; padding: 60px 20px; }
.hero-title { font-size: 3em; font-weight: 700; margin-bottom: 20px; background: linear-gradient(45deg, var(--md-primary-fg-color), var(--md-accent-fg-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-subtitle { font-size: 1.3em; opacity: 0.8; margin-bottom: 40px; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin: 50px auto; max-width: 1200px; padding: 0 20px; }
.feature-card { padding: 30px; background: var(--md-code-bg-color); border-radius: 8px; border: 1px solid var(--md-default-fg-color--lightest); transition: transform 0.3s, box-shadow 0.3s; }
.feature-card:hover { transform: translateY(-5px); box-shadow: 0 5px 20px rgba(0,0,0,0.1); }
.feature-icon { font-size: 2.5em; margin-bottom: 15px; }
.feature-title { font-size: 1.3em; font-weight: 600; margin-bottom: 10px; }
.feature-desc { opacity: 0.8; line-height: 1.6; }
.music-player { max-width: 400px; margin: 40px auto; padding: 20px; background: var(--md-code-bg-color); border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.player-title { text-align: center; font-weight: 600; margin-bottom: 15px; font-size: 1.1em; }
.player-controls { display: flex; justify-content: center; align-items: center; gap: 15px; margin: 20px 0; }
.player-btn { width: 50px; height: 50px; border-radius: 50%; border: none; background: var(--md-primary-fg-color); color: white; cursor: pointer; font-size: 1.2em; display: flex; align-items: center; justify-content: center; transition: transform 0.2s, opacity 0.2s; }
.player-btn:hover { transform: scale(1.1); opacity: 0.9; }
.player-btn.play-btn { width: 60px; height: 60px; font-size: 1.5em; }
.volume-control { display: flex; align-items: center; gap: 10px; margin-top: 15px; }
.volume-slider { flex: 1; }
.track-info { text-align: center; margin: 15px 0; font-size: 0.9em; opacity: 0.7; }
.playlist { margin-top: 20px; max-height: 200px; overflow-y: auto; }
.playlist-item { padding: 10px; margin: 5px 0; background: var(--md-default-bg-color); border-radius: 4px; cursor: pointer; transition: background 0.2s; display: flex; justify-content: space-between; align-items: center; }
.playlist-item:hover { background: var(--md-accent-fg-color--transparent); }
.playlist-item.active { background: var(--md-primary-fg-color); color: white; }
.stats-section { max-width: 800px; margin: 60px auto; padding: 0 20px; }
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; text-align: center; }
.stat-box { padding: 25px; background: var(--md-code-bg-color); border-radius: 8px; }
.stat-number { font-size: 2.5em; font-weight: 700; color: var(--md-primary-fg-color); }
.stat-label { opacity: 0.7; margin-top: 5px; }
</style>

<div class="hero-section">
  <h1 class="hero-title">Welcome to My Knowledge Base</h1>
  <p class="hero-subtitle">Cybersecurity • Networking • Development</p>
</div>

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">🔐</div>
    <div class="feature-title">Security Research</div>
    <div class="feature-desc">CTF write-ups, vulnerability analysis, và security best practices</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🌐</div>
    <div class="feature-title">Network Engineering</div>
    <div class="feature-desc">VLSM calculator, routing protocols, và network troubleshooting</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">💻</div>
    <div class="feature-title">Code & Development</div>
    <div class="feature-desc">C++ projects, cryptography implementations, và system programming</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🛠️</div>
    <div class="feature-title">Tools & Utilities</div>
    <div class="feature-desc">Online tools, code runners, và automation scripts</div>
  </div>
</div>

<div class="music-player">
  <div class="player-title">🎵 Study Music</div>
  
  <div class="track-info" id="trackInfo">Select a track to play</div>
  
  <div class="player-controls">
    <button class="player-btn" onclick="previousTrack()" title="Previous">⏮</button>
    <button class="player-btn play-btn" id="playBtn" onclick="togglePlay()" title="Play">▶</button>
    <button class="player-btn" onclick="nextTrack()" title="Next">⏭</button>
  </div>
  
  <div class="volume-control">
    <span>🔊</span>
    <input type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="50" oninput="updateVolume()">
    <span id="volumeValue">50%</span>
  </div>
  
  <div class="playlist" id="playlist"></div>
  
  <audio id="audioPlayer"></audio>
</div>

<div class="stats-section">
  <h2 style="text-align: center; margin-bottom: 30px;">Quick Stats</h2>
  <div class="stats-grid">
    <div class="stat-box">
      <div class="stat-number">50+</div>
      <div class="stat-label">Write-ups</div>
    </div>
    <div class="stat-box">
      <div class="stat-number">20+</div>
      <div class="stat-label">Projects</div>
    </div>
    <div class="stat-box">
      <div class="stat-number">100+</div>
      <div class="stat-label">Code Snippets</div>
    </div>
    <div class="stat-box">
      <div class="stat-number">∞</div>
      <div class="stat-label">Learning</div>
    </div>
  </div>
</div>

<script>
// Playlist - có thể thay bằng link nhạc thật
const tracks = [
  { title: 'Lo-fi Study Beat 1', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { title: 'Lo-fi Study Beat 2', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { title: 'Lo-fi Study Beat 3', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { title: 'Chill Coding Music', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' }
];

let currentTrack = 0;
let isPlaying = false;
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const trackInfo = document.getElementById('trackInfo');
const playlist = document.getElementById('playlist');

// Initialize playlist
function initPlaylist() {
  tracks.forEach((track, index) => {
    const item = document.createElement('div');
    item.className = 'playlist-item';
    item.innerHTML = `<span>${track.title}</span><span>${Math.floor(Math.random() * 3 + 2)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}</span>`;
    item.onclick = () => playTrack(index);
    playlist.appendChild(item);
  });
}

function playTrack(index) {
  currentTrack = index;
  audio.src = tracks[index].url;
  trackInfo.textContent = `Now Playing: ${tracks[index].title}`;
  
  // Update playlist UI
  document.querySelectorAll('.playlist-item').forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
  
  audio.play();
  isPlaying = true;
  playBtn.textContent = '⏸';
}

function togglePlay() {
  if (!audio.src) {
    playTrack(0);
    return;
  }
  
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = '▶';
  } else {
    audio.play();
    playBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
}

function previousTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  playTrack(currentTrack);
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  playTrack(currentTrack);
}

function updateVolume() {
  const volume = document.getElementById('volumeSlider').value;
  audio.volume = volume / 100;
  document.getElementById('volumeValue').textContent = volume + '%';
}

// Auto next track
audio.addEventListener('ended', nextTrack);

// Initialize
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    initPlaylist();
    updateVolume();
  });
}
</script>

---

<div style="text-align: center; padding: 40px 20px; opacity: 0.7;">
  <p><em>"The only way to learn a new programming language is by writing programs in it."</em></p>
  <p>— Dennis Ritchie</p>
</div>