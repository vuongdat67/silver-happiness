const root = document.querySelector("[data-cafe]");

if (root) {
  const canvas = root.querySelector("[data-cafe-canvas]");
  const ctx = canvas.getContext("2d");
  const audio = root.querySelector("[data-cafe-audio]");
  const playButton = root.querySelector("[data-cafe-play]");
  const seek = root.querySelector("[data-cafe-seek]");
  const volume = root.querySelector("[data-cafe-volume]");
  const time = root.querySelector("[data-cafe-time]");
  const status = root.querySelector("[data-cafe-status]");
  const fileInput = root.querySelector("[data-audio-file]");
  const trackTitle = root.querySelector("[data-track-title]");
  const keys = Array.from(root.querySelectorAll("[data-piano-key]"));
  const seasonButtons = Array.from(root.querySelectorAll("[data-season]"));
  const calendar = root.querySelector("[data-calendar]");
  const calendarTitle = root.querySelector("[data-calendar-title]");
  const calendarPrev = root.querySelector("[data-calendar-prev]");
  const calendarNext = root.querySelector("[data-calendar-next]");
  const liveClock = root.querySelector("[data-live-clock]");
  const liveSeconds = root.querySelector("[data-live-seconds]");
  const weekdayLabel = root.querySelector("[data-weekday]");
  const dateLabel = root.querySelector("[data-date-label]");
  const seasonQuote = root.querySelector("[data-season-quote]");
  const moonCanvas = root.querySelector("[data-moon-canvas]");
  const moonIcon = root.querySelector("[data-moon-icon]");
  const moonText = root.querySelector("[data-moon-text]");
  const moonAge = root.querySelector("[data-moon-age]");
  const moonPhases = root.querySelector("[data-moon-phases]");
  const moonFull = root.querySelector("[data-moon-full]");
  const moonNew = root.querySelector("[data-moon-new]");
  const moonProgress = root.querySelector("[data-moon-progress]");
  const zodiacCanvas = root.querySelector("[data-zodiac-canvas]");
  const zodiacYear = root.querySelector("[data-zodiac-year]");
  const zodiacText = root.querySelector("[data-zodiac-text]");
  const zodiacNext = root.querySelector("[data-zodiac-next]");
  const zodiacCycle = root.querySelector("[data-zodiac-cycle]");

  const seasons = {
    spring: {
      name: "Xuân",
      accent: "#f4a7b9",
      accentSoft: "rgba(244, 167, 185, 0.15)",
      bg: "#0d1117",
      text: "#fce4ec",
      muted: "rgba(252, 228, 236, 0.58)",
      glass: "rgba(255, 192, 203, 0.12)",
      border: "rgba(255, 182, 193, 0.2)",
      glow: "rgba(244, 167, 185, 0.25)",
      particle: "sakura",
      quote: "Hoa đào nở, mùa xuân về",
      icon: "🌸",
    },
    summer: {
      name: "Hạ",
      accent: "#4dd9ac",
      accentSoft: "rgba(77, 217, 172, 0.15)",
      bg: "#070d12",
      text: "#e0fff5",
      muted: "rgba(224, 255, 245, 0.52)",
      glass: "rgba(80, 210, 170, 0.10)",
      border: "rgba(100, 220, 180, 0.18)",
      glow: "rgba(77, 217, 172, 0.22)",
      particle: "firefly",
      quote: "Đom đóm lấp lánh đêm hè",
      icon: "🌿",
    },
    autumn: {
      name: "Thu",
      accent: "#d4915c",
      accentSoft: "rgba(212, 145, 92, 0.15)",
      bg: "#0e0a05",
      text: "#fff0e0",
      muted: "rgba(255, 240, 224, 0.52)",
      glass: "rgba(210, 140, 60, 0.11)",
      border: "rgba(210, 140, 60, 0.2)",
      glow: "rgba(212, 145, 92, 0.25)",
      particle: "leaves",
      quote: "Lá vàng rơi, thu sang",
      icon: "🍂",
    },
    winter: {
      name: "Đông",
      accent: "#8ab4e8",
      accentSoft: "rgba(138, 180, 232, 0.13)",
      bg: "#07090f",
      text: "#e8f0ff",
      muted: "rgba(232, 240, 255, 0.5)",
      glass: "rgba(160, 190, 240, 0.10)",
      border: "rgba(150, 180, 230, 0.18)",
      glow: "rgba(138, 180, 232, 0.22)",
      particle: "snow",
      quote: "Tuyết rơi nhẹ, đêm yên lặng",
      icon: "❄️",
    },
  };

  const can = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
  const chi = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
  const animal = ["Khỉ", "Gà", "Chó", "Heo", "Chuột", "Trâu", "Hổ", "Mèo", "Rồng", "Rắn", "Ngựa", "Dê"];
  const animalIcon = ["🐒", "🐓", "🐕", "🐖", "🐀", "🐂", "🐯", "🐈", "🐉", "🐍", "🐴", "🐐"];

  let activeSeason = seasonFromMonth(new Date().getMonth());
  let particles = [];
  let fallbackTick = 0;
  let audioContext;
  let analyser;
  let frequencyData;
  let mediaSource;
  let localObjectUrl;
  let analyserReady = false;
  const today = new Date();
  let calendarView = {
    year: today.getFullYear(),
    month: today.getMonth(),
  };

  function seasonFromMonth(monthIndex) {
    if (monthIndex >= 2 && monthIndex <= 4) return "spring";
    if (monthIndex >= 5 && monthIndex <= 7) return "summer";
    if (monthIndex >= 8 && monthIndex <= 10) return "autumn";
    return "winter";
  }

  function resize() {
    const rect = root.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(rect.width * dpr));
    canvas.height = Math.max(1, Math.floor(rect.height * dpr));
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedParticles();
  }

  function seedParticles() {
    const rect = root.getBoundingClientRect();
    const count = seasons[activeSeason].particle === "firefly" ? 36 : 52;
    particles = Array.from({ length: count }, () => makeParticle(rect, true));
  }

  function makeParticle(rect, randomY = false) {
    return {
      x: Math.random() * rect.width,
      y: randomY ? Math.random() * rect.height : -20,
      size: Math.random() * 6 + 2,
      speedX: (Math.random() - 0.5) * 0.75,
      speedY: Math.random() * 0.8 + 0.25,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.055,
      swing: Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.55 + 0.25,
    };
  }

  function drawParticle(p, rect, frame) {
    const type = seasons[activeSeason].particle;

    if (type === "firefly") {
      p.x += p.speedX * 0.45 + Math.sin(frame * 0.015 + p.phase) * 0.15;
      p.y += Math.cos(frame * 0.018 + p.phase) * 0.25;
      if (p.x < 0 || p.x > rect.width) p.speedX *= -1;
      if (p.y < 0 || p.y > rect.height) p.y = Math.random() * rect.height;
      const pulse = (Math.sin(frame * 0.05 + p.phase) + 1) / 2;
      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
      glow.addColorStop(0, `rgba(140, 255, 190, ${0.2 + pulse * 0.65})`);
      glow.addColorStop(1, "rgba(140, 255, 190, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    p.x += p.speedX + Math.sin(frame * 0.02 + p.phase) * p.swing * 0.16;
    p.y += p.speedY;
    p.rotation += p.spin;
    if (p.y > rect.height + 28) Object.assign(p, makeParticle(rect));

    ctx.save();
    ctx.globalAlpha = p.opacity;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    if (type === "snow") {
      ctx.fillStyle = "rgba(220, 235, 255, 0.9)";
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.48, 0, Math.PI * 2);
      ctx.fill();
    } else if (type === "leaves") {
      ctx.fillStyle = `hsl(${25 + Math.random() * 16}, 78%, 58%)`;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.55, p.size * 1.3, 0.3, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = `hsl(${338 + Math.random() * 22}, 78%, 78%)`;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.68, p.size * 1.15, -0.45, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  function setupAudioAnalyser() {
    if (!audio) return;
    const sourceUrl = new URL(audio.currentSrc || audio.src, window.location.href);
    const isAnalyzable = sourceUrl.origin === window.location.origin || sourceUrl.protocol === "blob:";
    if (!isAnalyzable) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!audioContext) {
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();
      analyser.fftSize = 128;
      frequencyData = new Uint8Array(analyser.frequencyBinCount);
      mediaSource = audioContext.createMediaElementSource(audio);
      mediaSource.connect(analyser);
      analyser.connect(audioContext.destination);
    }
    analyserReady = true;
  }

  function getLevels() {
    if (analyserReady && analyser && frequencyData && !audio.paused) {
      analyser.getByteFrequencyData(frequencyData);
      return keys.map((_, index) => frequencyData[Math.floor((index / keys.length) * frequencyData.length)] / 255);
    }

    fallbackTick += audio.paused ? 0.012 : 0.048;
    return keys.map((_, index) => {
      const value = Math.abs(Math.sin(fallbackTick * (1.3 + index * 0.05) + index * 0.72));
      return audio.paused ? 0 : Math.max(0.04, value * 0.82);
    });
  }

  function renderPiano() {
    const levels = getLevels();
    keys.forEach((key, index) => {
      const value = levels[index] || 0;
      key.style.setProperty("--lift", value.toFixed(3));
      key.style.setProperty("--glow", Math.min(1, value * 1.35).toFixed(3));
    });
  }

  function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";
    return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
  }

  function syncProgress() {
    if (!audio || !seek || !time) return;
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      seek.value = Math.floor((audio.currentTime / audio.duration) * 1000);
      time.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    } else {
      time.textContent = "0:00 / 0:00";
    }
  }

  function updateClock() {
    const now = new Date();
    const weekdays = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");
    if (liveClock) liveClock.textContent = `${h}:${m}`;
    if (liveSeconds) liveSeconds.textContent = `${s}s`;
    if (weekdayLabel) weekdayLabel.textContent = weekdays[now.getDay()];
    if (dateLabel) dateLabel.textContent = `${now.getDate()} tháng ${now.getMonth() + 1}, ${now.getFullYear()}`;
  }

  function buildCalendar() {
    if (!calendar) return;
    const now = new Date();
    const year = calendarView.year;
    const month = calendarView.month;
    const today = now.getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const total = new Date(year, month + 1, 0).getDate();
    const monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
    const labels = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
    if (calendarTitle) calendarTitle.textContent = `${monthNames[month]} ${year}`;
    calendar.replaceChildren();
    labels.forEach((label, index) => {
      const cell = document.createElement("span");
      cell.textContent = label;
      cell.className = index === 0 ? "is-dayname is-sunday" : "is-dayname";
      calendar.append(cell);
    });
    for (let i = 0; i < firstDay; i += 1) {
      const cell = document.createElement("span");
      cell.className = "is-empty";
      calendar.append(cell);
    }
    for (let day = 1; day <= total; day += 1) {
      const cell = document.createElement("span");
      cell.textContent = day;
      const isCurrentMonth = month === now.getMonth() && year === now.getFullYear();
      const classes = [];
      if (day === today && isCurrentMonth) classes.push("is-today");
      if (new Date(year, month, day).getDay() === 0) classes.push("is-sunday");
      cell.className = classes.join(" ");
      calendar.append(cell);
    }
  }

  function moveCalendar(delta) {
    calendarView.month += delta;
    if (calendarView.month < 0) {
      calendarView.month = 11;
      calendarView.year -= 1;
    }
    if (calendarView.month > 11) {
      calendarView.month = 0;
      calendarView.year += 1;
    }
    buildCalendar();
  }

  function getMoonPhase(date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const jd = 367 * y - Math.floor((7 * (y + Math.floor((m + 9) / 12))) / 4) + Math.floor((275 * m) / 9) + d + 1721013.5;
    const ageRaw = (jd - 2451549.5) % 29.53058867;
    const age = ageRaw < 0 ? ageRaw + 29.53058867 : ageRaw;
    const phase = age / 29.53058867;
    const names = [
      [0.033, "Trăng mới", "🌑"],
      [0.166, "Trăng lưỡi liềm đầu", "🌒"],
      [0.283, "Trăng bán nguyệt đầu", "🌓"],
      [0.4, "Trăng khuyết đầu", "🌔"],
      [0.533, "Trăng tròn", "🌕"],
      [0.65, "Trăng khuyết cuối", "🌖"],
      [0.766, "Trăng bán nguyệt cuối", "🌗"],
      [0.883, "Trăng lưỡi liềm cuối", "🌘"],
      [1, "Trăng mới", "🌑"],
    ];
    const match = names.find(([limit]) => phase <= limit);
    return { age, phase, name: match[1], icon: match[2] };
  }

  function drawMoon() {
    if (!moonCanvas) return;
    const moon = getMoonPhase(new Date());
    const moonCtx = moonCanvas.getContext("2d");
    const s = moonCanvas.width;
    const cx = s / 2;
    const cy = s / 2;
    const r = s * 0.32;
    moonCtx.clearRect(0, 0, s, s);

    const glow = moonCtx.createRadialGradient(cx, cy, r * 0.4, cx, cy, r * 1.8);
    glow.addColorStop(0, "rgba(240, 220, 150, 0.22)");
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    moonCtx.fillStyle = glow;
    moonCtx.beginPath();
    moonCtx.arc(cx, cy, r * 1.8, 0, Math.PI * 2);
    moonCtx.fill();

    moonCtx.save();
    moonCtx.beginPath();
    moonCtx.arc(cx, cy, r, 0, Math.PI * 2);
    moonCtx.clip();
    moonCtx.fillStyle = "rgba(240, 225, 160, 0.94)";
    moonCtx.fillRect(0, 0, s, s);
    moonCtx.fillStyle = "rgba(10, 12, 22, 0.93)";
    const shadowX = cx + (moon.phase - 0.5) * r * 2.2;
    moonCtx.beginPath();
    moonCtx.ellipse(shadowX, cy, r * 0.9, r * 1.05, 0, 0, Math.PI * 2);
    moonCtx.fill();
    moonCtx.restore();

    moonCtx.strokeStyle = "rgba(240, 225, 160, 0.35)";
    moonCtx.beginPath();
    moonCtx.arc(cx, cy, r, 0, Math.PI * 2);
    moonCtx.stroke();
    if (moonText) moonText.textContent = moon.name;
    if (moonIcon) moonIcon.textContent = moon.icon;
    if (moonAge) moonAge.textContent = `Tuổi trăng: ${Math.round(moon.age)} ngày`;
    if (moonProgress) moonProgress.style.width = `${moon.phase * 100}%`;
    const daysToFull = moon.phase < 0.5
      ? Math.round((0.5 - moon.phase) * 29.53058867)
      : Math.round((1.5 - moon.phase) * 29.53058867);
    const daysToNew = moon.phase > 0.02
      ? Math.round((1 - moon.phase) * 29.53058867)
      : 0;
    if (moonFull) moonFull.textContent = daysToFull;
    if (moonNew) moonNew.textContent = daysToNew;
    moonPhases?.querySelectorAll("span").forEach((item, index) => {
      const points = [0, 0.25, 0.5, 0.75];
      const distance = Math.abs(moon.phase - points[index]);
      const wrapped = Math.min(distance, 1 - distance);
      item.classList.toggle("is-active", wrapped < 0.13);
    });
  }

  function getCanChi(year) {
    const chiIndex = year % 12;
    return {
      year,
      can: can[year % 10],
      chi: chi[chiIndex],
      animal: animal[chiIndex],
      icon: animalIcon[chiIndex],
      chiIndex,
    };
  }

  function drawZodiac() {
    const now = new Date();
    const displayYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
    const current = getCanChi(displayYear);
    const next = getCanChi(displayYear + 1);
    if (zodiacYear) zodiacYear.textContent = `Năm ${displayYear}`;
    if (zodiacText) zodiacText.textContent = `${current.can} ${current.chi} - ${current.animal}`;
    if (zodiacNext) zodiacNext.textContent = `Năm sau: ${next.can} ${next.chi} – ${next.icon} ${next.animal}`;

    if (zodiacCanvas) {
      const zctx = zodiacCanvas.getContext("2d");
      const s = zodiacCanvas.width;
      zctx.clearRect(0, 0, s, s);
      const bob = Math.sin(fallbackTick) * 4;
      const glow = zctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s * 0.42);
      glow.addColorStop(0, seasons[activeSeason].glow);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      zctx.fillStyle = glow;
      zctx.beginPath();
      zctx.arc(s / 2, s / 2, s * 0.42, 0, Math.PI * 2);
      zctx.fill();
      zctx.fillStyle = seasons[activeSeason].accent;
      zctx.font = "700 34px sans-serif";
      zctx.textAlign = "center";
      zctx.textBaseline = "middle";
      zctx.fillText(current.icon, s / 2, s / 2 + bob);
    }

    if (zodiacCycle && !zodiacCycle.hasChildNodes()) {
      animalIcon.forEach((icon, index) => {
        const item = document.createElement("span");
        item.textContent = icon;
        item.dataset.index = index;
        zodiacCycle.append(item);
      });
    }
    zodiacCycle?.querySelectorAll("span").forEach((item) => {
      item.classList.toggle("is-active", Number(item.dataset.index) === current.chiIndex);
    });
  }

  function setSeason(nextSeason) {
    activeSeason = nextSeason;
    const season = seasons[nextSeason];
    root.style.setProperty("--cafe-accent", season.accent);
    root.style.setProperty("--cafe-text", season.text);
    root.style.setProperty("--cafe-muted", season.muted);
    root.style.setProperty("--season-glass", season.glass);
    root.style.setProperty("--season-border", season.border);
    root.style.setProperty("--season-accent-soft", season.accentSoft);
    root.style.background = `radial-gradient(circle at 30% -10%, ${season.glow}, transparent 36rem), ${season.bg}`;
    seasonButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.season === nextSeason);
    });
    if (seasonQuote) seasonQuote.textContent = `❝ ${season.quote} ❞`;
    seedParticles();
    drawMoon();
    drawZodiac();
  }

  function draw(frame) {
    const rect = root.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    particles.forEach((particle) => drawParticle(particle, rect, frame));
    renderPiano();
    syncProgress();
    drawZodiac();
    requestAnimationFrame(draw);
  }

  playButton.addEventListener("click", async () => {
    try {
      setupAudioAnalyser();
      if (audioContext?.state === "suspended") await audioContext.resume();
      if (audio.paused) {
        await audio.play();
        playButton.textContent = "⏸ pause";
        playButton.setAttribute("aria-pressed", "true");
        status.textContent = analyserReady ? "visualizer theo nhạc" : "đang phát nhạc";
      } else {
        audio.pause();
        playButton.textContent = "▶ play";
        playButton.setAttribute("aria-pressed", "false");
        status.textContent = "piano đang khởi động";
      }
    } catch (error) {
      status.textContent = "Thêm default.mp3 hoặc chọn MP3";
      console.warn("Midnight Cafe audio failed:", error);
    }
  });

  audio.addEventListener("loadedmetadata", () => {
    syncProgress();
    status.textContent = "đã tải nhạc";
  });

  audio.addEventListener("error", () => {
    status.textContent = "Thêm default.mp3 hoặc chọn MP3";
  });

  seek.addEventListener("input", () => {
    if (Number.isFinite(audio.duration)) {
      audio.currentTime = (Number(seek.value) / 1000) * audio.duration;
    }
  });

  volume.addEventListener("input", () => {
    audio.volume = Number(volume.value);
  });

  fileInput?.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (!file) return;
    if (localObjectUrl) URL.revokeObjectURL(localObjectUrl);
    localObjectUrl = URL.createObjectURL(file);
    audio.pause();
    audio.src = localObjectUrl;
    audio.load();
    analyserReady = false;
    if (trackTitle) trackTitle.textContent = file.name.replace(/\.[^.]+$/, "");
    playButton.textContent = "▶ play";
    playButton.setAttribute("aria-pressed", "false");
    status.textContent = "đã chọn nhạc local";
  });

  seasonButtons.forEach((button) => {
    button.addEventListener("click", () => setSeason(button.dataset.season));
  });
  calendarPrev?.addEventListener("click", () => moveCalendar(-1));
  calendarNext?.addEventListener("click", () => moveCalendar(1));

  window.addEventListener("resize", resize);
  audio.volume = Number(volume.value);
  buildCalendar();
  updateClock();
  window.setInterval(updateClock, 1000);
  resize();
  setSeason(activeSeason);
  requestAnimationFrame(draw);
}
