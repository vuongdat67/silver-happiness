---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="../assets/interactive/mkdocs-interactive.css">

<section class="interactive-shell seasonal-dashboard" data-cafe>
  <canvas class="interactive-canvas" data-cafe-canvas aria-hidden="true"></canvas>

  <div class="seasonal-dashboard-inner">
    <header class="seasonal-dashboard-top">
      <div>
        <div class="seasonal-overline" data-weekday>Loading day</div>
        <div class="seasonal-date" data-date-label>Loading date</div>
      </div>
      <div class="seasonal-switcher" aria-label="Season switcher">
        <button class="season-button" type="button" data-season="spring">🌸 Xuân</button>
        <button class="season-button" type="button" data-season="summer">🌿 Hạ</button>
        <button class="season-button" type="button" data-season="autumn">🍂 Thu</button>
        <button class="season-button" type="button" data-season="winter">❄️ Đông</button>
      </div>
    </header>

    <div class="seasonal-dashboard-grid">
      <section class="seasonal-card clock-music-card">
        <div class="live-clock" data-live-clock>--:--</div>
        <div class="clock-seconds" data-live-seconds>--s</div>
        <div class="season-divider"></div>
        <p class="season-quote" data-season-quote>Loading season quote</p>

        <div class="music-strip">
          <div>
            <div class="seasonal-overline">Âm nhạc</div>
            <strong class="track-title" data-track-title>Nhạc mặc định</strong>
            <div class="track-time" data-cafe-time>0:00 / 0:00</div>
          </div>
          <div class="music-actions">
            <label class="cafe-button compact file-button">
              Chọn MP3
              <input data-audio-file type="file" accept="audio/*">
            </label>
            <button class="cafe-button compact" type="button" data-cafe-play aria-pressed="false">▶ play</button>
          </div>
        </div>

        <input class="cafe-seek" data-cafe-seek type="range" min="0" max="1000" value="0" aria-label="Track progress">
        <input class="cafe-volume" data-cafe-volume type="range" min="0" max="1" step="0.01" value="0.2" aria-label="Volume">

        <div class="piano-header">
          <span class="seasonal-overline">Piano visualizer</span>
          <span class="track-status" data-cafe-status>piano is warming up</span>
        </div>
        <div class="piano-visualizer" aria-label="Piano visualizer">
          <span class="piano-bar" data-piano-key></span>
          <span class="piano-bar is-black" data-piano-key></span>
          <span class="piano-bar" data-piano-key></span>
          <span class="piano-bar is-black" data-piano-key></span>
          <span class="piano-bar" data-piano-key></span>
          <span class="piano-bar" data-piano-key></span>
          <span class="piano-bar is-black" data-piano-key></span>
          <span class="piano-bar" data-piano-key></span>
          <span class="piano-bar is-black" data-piano-key></span>
          <span class="piano-bar" data-piano-key></span>
          <span class="piano-bar is-black" data-piano-key></span>
          <span class="piano-bar" data-piano-key></span>
          <span class="piano-bar" data-piano-key></span>
        </div>
      </section>

      <section class="seasonal-card">
        <div class="seasonal-overline">Lịch</div>
        <div class="calendar-control-row">
          <button class="calendar-nav" type="button" data-calendar-prev aria-label="Tháng trước">‹</button>
          <div class="calendar-title" data-calendar-title>Loading month</div>
          <button class="calendar-nav" type="button" data-calendar-next aria-label="Tháng sau">›</button>
        </div>
        <div class="mini-calendar dashboard-calendar" data-calendar></div>
      </section>

      <section class="seasonal-card">
        <div class="seasonal-overline">Pha mặt trăng</div>
        <div class="moon-dashboard-row">
          <canvas class="moon-canvas" width="140" height="140" data-moon-canvas></canvas>
          <div>
            <div class="moon-emoji" data-moon-icon>🌙</div>
            <div class="moon-name" data-moon-text>Loading moon</div>
            <div class="track-time" data-moon-age>Loading age</div>
          </div>
        </div>
        <div class="moon-phase-icons" data-moon-phases>
          <span>🌑<small>Mới</small></span>
          <span>🌓<small>Nửa đầu</small></span>
          <span>🌕<small>Tròn</small></span>
          <span>🌗<small>Nửa cuối</small></span>
        </div>
        <div class="moon-progress"><span data-moon-progress></span></div>
        <div class="moon-countdown">
          <div>
            <strong data-moon-full>--</strong>
            <span>ngày → 🌕</span>
          </div>
          <div>
            <strong data-moon-new>--</strong>
            <span>ngày → 🌑</span>
          </div>
        </div>
      </section>

      <section class="seasonal-card">
        <div class="seasonal-overline">Linh vật năm</div>
        <div class="zodiac-dashboard-row">
          <canvas class="zodiac-canvas" width="144" height="144" data-zodiac-canvas></canvas>
          <div>
            <div class="zodiac-year" data-zodiac-year>Loading year</div>
            <div class="zodiac-name" data-zodiac-text>Loading zodiac</div>
            <div class="track-time" data-zodiac-next>Loading next year</div>
          </div>
        </div>
        <div class="zodiac-cycle" data-zodiac-cycle></div>
      </section>
    </div>
  </div>

  <audio
    data-cafe-audio
    preload="metadata"
    src="../assets/interactive/midnight-cafe/audio/default.mp3">
  </audio>
</section>

<script src="../assets/interactive/midnight-cafe/cafe.js" defer></script>
