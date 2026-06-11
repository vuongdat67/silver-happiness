---
hide:
  - navigation
  - toc
---

<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Seasonal Dashboard</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap');

* { box-sizing:border-box; margin:0; padding:0; }

:root {
  --bg:#0d1117; --surface:rgba(255,182,193,0.07); --glass:rgba(255,192,203,0.12);
  --border:rgba(255,182,193,0.2); --accent:#f4a7b9; --accent-soft:rgba(244,167,185,0.15);
  --text:#fce4ec; --text-muted:rgba(252,228,236,0.55); --glow:rgba(244,167,185,0.25);
}

html, body { height:100%; }

body {
  min-height:100vh;
  background:var(--bg);
  position:relative;
  overflow-x:hidden;
  font-family:'DM Sans',sans-serif;
  color:var(--text);
  transition:background 1.2s ease;
}

@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

.glow { position:absolute; border-radius:50%; pointer-events:none; transition:background 1.2s ease; filter:blur(60px); z-index:0; }
.glow-1 { top:-100px; left:30%; width:500px; height:500px; background:radial-gradient(circle,var(--glow) 0%,transparent 70%); }
.glow-2 { bottom:-80px; right:10%; width:350px; height:350px; background:radial-gradient(circle,var(--glow) 0%,transparent 70%); filter:blur(50px); }

#particles { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; z-index:0; display:block; }

.container { position:relative; z-index:1; max-width:960px; margin:0 auto; padding:28px 18px; }

/* Top bar */
.topbar { display:flex; justify-content:space-between; align-items:center; margin-bottom:22px; flex-wrap:wrap; gap:10px; }
.weekday { font-size:10px; color:var(--text-muted); letter-spacing:0.12em; text-transform:uppercase; margin-bottom:2px; }
.datestr { font-size:13px; color:var(--text); font-weight:500; }

.season-badges { display:flex; gap:5px; flex-wrap:wrap; }
.season-badge {
  background:transparent; border:1px solid var(--border); border-radius:8px; padding:3px 10px;
  cursor:pointer; font-size:11px; color:var(--text-muted); font-family:'DM Sans',sans-serif;
  font-weight:400; transition:all 0.2s;
}
.season-badge.active { background:var(--accent-soft); border-color:var(--accent); color:var(--accent); font-weight:600; }

/* Grid layout */
.grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px; }
@media (max-width:640px) { .grid-2 { grid-template-columns:1fr; } }

.card {
  background:var(--glass); border:1px solid var(--border); border-radius:20px;
  padding:22px 20px; backdrop-filter:blur(16px); transition:all 1s ease;
}

/* Clock card */
.clock-card { display:flex; flex-direction:column; gap:14px; }
.clock { text-align:center; font-family:'Space Mono',monospace; font-size:40px; font-weight:700;
  color:var(--text); letter-spacing:0.05em; line-height:1; text-shadow:0 0 30px var(--glow); }
.clock .colon { color:var(--accent); animation:blink 1s infinite; }
.clock-seconds { font-family:'Space Mono',monospace; font-size:12px; color:var(--text-muted); margin-top:3px; text-align:center; }

.divider { height:1px; background:linear-gradient(to right,transparent,var(--border),transparent); }
.divider.spaced { margin:12px 0; }

.quote { text-align:center; font-size:10px; color:var(--text-muted); font-style:italic; letter-spacing:0.05em; }

/* Piano */
.piano-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:7px; flex-wrap:wrap; gap:6px; }
.piano-header span { font-size:9px; color:var(--text-muted); letter-spacing:0.1em; }

/* Music source tabs */
.music-tabs { display:flex; gap:4px; }
.music-tab {
  background:transparent; border:1px solid var(--border); border-radius:6px; padding:2px 8px;
  cursor:pointer; color:var(--text-muted); font-size:9px; font-family:'DM Sans',sans-serif; transition:all 0.2s;
}
.music-tab.active { background:var(--accent-soft); border-color:var(--accent); color:var(--accent); }

.music-panel { margin-bottom:8px; }
.music-hint { font-size:9px; color:var(--text-muted); margin-bottom:6px; line-height:1.5; }

.file-input-label {
  display:inline-block; font-size:10px; color:var(--text-muted); border:1px dashed var(--border);
  border-radius:8px; padding:6px 10px; cursor:pointer; transition:all 0.2s;
}
.file-input-label:hover { border-color:var(--accent); color:var(--accent); }
#fileInput { display:none; }

.playlist { max-height:84px; overflow-y:auto; margin:8px 0; display:flex; flex-direction:column; gap:2px; }
.playlist-item { font-size:10px; color:var(--text-muted); padding:4px 8px; border-radius:6px; cursor:pointer;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis; transition:all 0.15s; }
.playlist-item:hover { background:var(--surface); }
.playlist-item.active { background:var(--accent-soft); color:var(--accent); }

.player-controls { display:flex; align-items:center; gap:8px; margin-bottom:8px; }
.player-btn {
  background:transparent; border:1px solid var(--border); border-radius:6px; min-width:28px; height:24px;
  color:var(--text-muted); cursor:pointer; font-size:11px; transition:all 0.2s; flex-shrink:0;
}
.player-btn:hover { border-color:var(--accent); color:var(--accent); }
.player-btn.playing { background:var(--accent-soft); color:var(--accent); border-color:var(--accent); }
.now-playing { font-size:10px; color:var(--text-muted); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1; }

.url-input-row { display:flex; gap:6px; margin-bottom:8px; }
.url-input {
  flex:1; min-width:0; background:var(--surface); border:1px solid var(--border); border-radius:6px;
  padding:5px 8px; color:var(--text); font-size:10px; font-family:'DM Sans',sans-serif;
}
.url-input::placeholder { color:var(--text-muted); }
.url-load-btn {
  background:var(--accent-soft); border:1px solid var(--accent); border-radius:6px; padding:5px 10px;
  color:var(--accent); cursor:pointer; font-size:10px; font-family:'DM Sans',sans-serif; flex-shrink:0;
}

#ytPlayerWrap { margin-bottom:8px; }
#ytPlayerWrap iframe, #spotifyEmbed iframe { border-radius:8px; display:block; }

.embed-textarea {
  width:100%; min-height:70px; background:var(--surface); border:1px solid var(--border); border-radius:6px;
  padding:6px 8px; color:var(--text); font-size:10px; font-family:'Space Mono',monospace; resize:vertical; margin-bottom:6px;
  box-sizing:border-box;
}
.embed-textarea::placeholder { color:var(--text-muted); }
#customEmbedContainer iframe, #customEmbedContainer embed, #customEmbedContainer object { border-radius:8px; max-width:100%; }

.piano { display:flex; align-items:flex-end; gap:2px; height:60px; padding:0 4px; }
.piano-key { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:flex-end; }
.piano-bar { width:100%; height:4px; border-radius:3px 3px 0 0; transition:height 0.05s; opacity:0.6;
  background:linear-gradient(to top,var(--accent),var(--accent-soft)); }
.piano-key.black .piano-bar { background:var(--accent); opacity:0.9; }
.piano-base { width:100%; height:26px; background:rgba(255,255,255,0.06); border:1px solid var(--border); border-top:none; border-radius:0 0 3px 3px; }
.piano-key.black .piano-base { background:#111; }

.section-label { font-size:9px; color:var(--text-muted); letter-spacing:0.12em; margin-bottom:14px; text-transform:uppercase; }

/* Calendar */
.cal-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
.cal-nav { background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:18px; padding:2px 6px; transition:color 0.2s; }
.cal-nav:hover { color:var(--accent); }
.cal-title { color:var(--text); font-size:12px; font-weight:500; letter-spacing:0.08em; }
.cal-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:4px; }
.cal-dayname { text-align:center; font-size:9px; color:var(--text-muted); padding:4px 0; }
.cal-cell { text-align:center; font-size:11px; padding:6px 0; border-radius:8px; cursor:default; transition:background 0.15s; }
.cal-cell.sun { color:var(--accent); }
.cal-cell.today { background:var(--accent); color:var(--bg); font-weight:700; box-shadow:0 0 10px var(--glow); }
.cal-cell:not(.today):not(.empty):hover { background:var(--accent-soft); }
.cal-cell.empty { color:transparent; }

/* Moon */
.moon-row { display:flex; align-items:center; gap:16px; margin-bottom:14px; }
.moon-canvas { display:block; }
.moon-icon { font-size:16px; margin-bottom:2px; }
.moon-name { font-size:12px; color:var(--text); font-weight:500; }
.moon-age { font-size:10px; color:var(--text-muted); margin-top:2px; }
.phases-row { display:flex; justify-content:space-between; margin-bottom:5px; }
.phase-item { text-align:center; opacity:0.35; transition:opacity 0.3s; }
.phase-item.active { opacity:1; }
.phase-icon { font-size:13px; }
.phase-label { font-size:8px; color:var(--text-muted); }
.progress-track { height:4px; border-radius:2px; background:var(--surface); border:1px solid var(--border); overflow:hidden; }
.progress-fill { height:100%; background:linear-gradient(to right,var(--accent-soft),var(--accent)); border-radius:2px; transition:width 0.5s ease; box-shadow:0 0 8px var(--glow); }
.countdown { display:flex; gap:8px; margin-top:14px; }
.countdown-item { flex:1; background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:8px 10px; text-align:center; }
.countdown-num { font-size:16px; font-weight:700; color:var(--accent); font-family:'Space Mono',monospace; }
.countdown-label { font-size:9px; color:var(--text-muted); }

/* Zodiac */
.zodiac-row { display:flex; align-items:center; gap:12px; }
.zodiac-canvas { display:block; }
.zodiac-year-label { font-size:10px; color:var(--text-muted); letter-spacing:0.1em; margin-bottom:3px; }
.zodiac-canchi { font-size:18px; color:var(--text); font-weight:600; }
.zodiac-animal { font-size:12px; color:var(--accent); margin-top:2px; }
.next-year-row { display:flex; align-items:center; justify-content:space-between; }
.next-year-label { font-size:9px; color:var(--text-muted); letter-spacing:0.08em; }
.next-year-value { font-size:11px; color:var(--text-muted); margin-top:1px; }
.next-year-badge { font-size:9px; color:var(--accent); border:1px solid var(--border); border-radius:6px; padding:3px 8px; }
.animal-cycle { display:flex; gap:3px; flex-wrap:wrap; margin-top:12px; }
.animal-cycle-item { font-size:14px; opacity:0.28; transform:scale(1); transition:all 0.3s; }
.animal-cycle-item.active { opacity:1; transform:scale(1.3); filter:drop-shadow(0 0 6px var(--glow)); }

/* Notes */
.notes-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:14px; }
@media (max-width:640px) { .notes-grid { grid-template-columns:1fr; } }
.note-card { background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:12px 14px; backdrop-filter:blur(12px); cursor:pointer; transition:all 0.2s; }
.note-card:hover { background:var(--accent-soft); border-color:var(--accent); box-shadow:0 0 20px var(--glow); }
.note-icon { font-size:18px; margin-bottom:5px; }
.note-label { font-size:9px; color:var(--text-muted); letter-spacing:0.08em; margin-bottom:2px; }
.note-value { font-size:12px; color:var(--text); font-weight:500; }

.footer { text-align:center; font-size:9px; color:var(--text-muted); letter-spacing:0.1em; padding-bottom:8px; }
</style>
</head>
<body>

<div class="glow glow-1"></div>
<div class="glow glow-2"></div>
<canvas id="particles"></canvas>

<div class="container">

  <div class="topbar">
    <div>
      <div class="weekday" id="weekday"></div>
      <div class="datestr" id="dateStr"></div>
    </div>
    <div class="season-badges" id="seasonBadges"></div>
  </div>

  <div class="grid-2">
    <div class="card clock-card">
      <div id="clockContainer"></div>
      <div class="divider"></div>
      <div class="quote" id="quote"></div>
      <div>
        <div class="piano-header">
          <span>MUSIC VISUALIZER</span>
          <div class="music-tabs">
            <button class="music-tab active" data-src="file">📁 File</button>
            <button class="music-tab" data-src="youtube">▶ YouTube</button>
            <button class="music-tab" data-src="spotify">🎧 Spotify</button>
            <button class="music-tab" data-src="embed">🔗 Embed khác</button>
          </div>
        </div>

        <div class="music-panel" id="panelFile">
          <label class="file-input-label" for="fileInput">+ Chọn file nhạc (mp3, mp4, m4a...)</label>
          <input type="file" id="fileInput" accept="audio/*,video/*" multiple>
          <div class="playlist" id="playlist"></div>
          <div class="player-controls">
            <button class="player-btn" id="prevBtn">⏮</button>
            <button class="player-btn" id="filePlayBtn">▶</button>
            <button class="player-btn" id="nextBtn">⏭</button>
            <span class="now-playing" id="nowPlaying">Chưa chọn file</span>
          </div>
          <audio id="audioEl" style="display:none"></audio>
        </div>

        <div class="music-panel" id="panelYoutube" style="display:none">
          <div class="url-input-row">
            <input type="text" class="url-input" id="ytInput" placeholder="Link YouTube (video hoặc playlist)">
            <button class="url-load-btn" id="ytLoadBtn">Tải</button>
          </div>
          <div id="ytPlayerWrap"><div id="ytPlayer"></div></div>
          <div class="player-controls">
            <button class="player-btn" id="ytPrevBtn">⏮</button>
            <button class="player-btn" id="ytPlayBtn">▶</button>
            <button class="player-btn" id="ytNextBtn">⏭</button>
          </div>
        </div>

        <div class="music-panel" id="panelSpotify" style="display:none">
          <div class="music-hint">Spotify embed chỉ phát qua player riêng của Spotify, không kết nối được với visualizer (giới hạn của Spotify, không cho JS đọc dữ liệu audio).</div>
          <div class="url-input-row">
            <input type="text" class="url-input" id="spotifyInput" placeholder="Link Spotify (track/album/playlist)">
            <button class="url-load-btn" id="spotifyLoadBtn">Tải</button>
          </div>
          <div id="spotifyEmbed"></div>
        </div>

        <div class="music-panel" id="panelEmbed" style="display:none">
          <div class="music-hint">
            Dán nguyên đoạn mã embed lấy từ nút "Chia sẻ → Embed" của nền tảng (NhacCuaTui, Zing MP3, SoundCloud, TikTok...).
            Visualizer sẽ không phản ứng theo nhạc (giới hạn chung, không nền tảng nào cho JS ngoài đọc audio stream).
            Chỉ dán mã từ nguồn bạn tin tưởng — đoạn mã sẽ được chạy trực tiếp trên trang.
          </div>
          <textarea class="embed-textarea" id="customEmbedInput" placeholder='Ví dụ: <iframe src="https://www.nct.vn/iframe/..." ...></iframe>'></textarea>
          <button class="url-load-btn" id="customEmbedBtn">Hiển thị</button>
          <div id="customEmbedContainer" style="margin-top:8px"></div>
        </div>

        <div class="piano" id="piano"></div>
      </div>
    </div>

    <div class="card">
      <div class="section-label">Lịch</div>
      <div id="calendar"></div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="section-label">Pha Mặt Trăng</div>
      <div id="moonCard"></div>
    </div>
    <div class="card">
      <div class="section-label">Linh Vật Năm</div>
      <div id="zodiacCard"></div>
    </div>
  </div>

  <div class="notes-grid" id="notes"></div>

  <div class="footer">vuongdat67 · midnight cafe · seasonal edition</div>
</div>

<script>
// ─── Seasonal Config ───────────────────────────────────────────────────────
const SEASONS = {
  spring: {
    name:"Xuân", months:[1,2,3], emoji:"🌸", quote:"Hoa đào nở, mùa xuân về", particles:"sakura",
    palette:{ bg:"#0d1117", surface:"rgba(255,182,193,0.07)", glass:"rgba(255,192,203,0.12)",
      border:"rgba(255,182,193,0.2)", accent:"#f4a7b9", accentSoft:"rgba(244,167,185,0.15)",
      text:"#fce4ec", textMuted:"rgba(252,228,236,0.55)", glow:"rgba(244,167,185,0.25)" }
  },
  summer: {
    name:"Hạ", months:[4,5,6], emoji:"🌿", quote:"Đom đóm lấp lánh đêm hè", particles:"firefly",
    palette:{ bg:"#070d12", surface:"rgba(100,220,180,0.06)", glass:"rgba(80,210,170,0.10)",
      border:"rgba(100,220,180,0.18)", accent:"#4dd9ac", accentSoft:"rgba(77,217,172,0.15)",
      text:"#e0fff5", textMuted:"rgba(224,255,245,0.5)", glow:"rgba(77,217,172,0.22)" }
  },
  autumn: {
    name:"Thu", months:[7,8,9], emoji:"🍂", quote:"Lá vàng rơi, thu sang", particles:"leaves",
    palette:{ bg:"#0e0a05", surface:"rgba(210,140,60,0.07)", glass:"rgba(210,140,60,0.11)",
      border:"rgba(210,140,60,0.2)", accent:"#d4915c", accentSoft:"rgba(212,145,92,0.15)",
      text:"#fff0e0", textMuted:"rgba(255,240,224,0.5)", glow:"rgba(212,145,92,0.25)" }
  },
  winter: {
    name:"Đông", months:[10,11,12], emoji:"❄️", quote:"Tuyết rơi nhẹ, đêm yên lặng", particles:"snow",
    palette:{ bg:"#07090f", surface:"rgba(150,180,230,0.06)", glass:"rgba(160,190,240,0.10)",
      border:"rgba(150,180,230,0.18)", accent:"#8ab4e8", accentSoft:"rgba(138,180,232,0.13)",
      text:"#e8f0ff", textMuted:"rgba(232,240,255,0.48)", glow:"rgba(138,180,232,0.22)" }
  },
};

function getSeason(month) {
  for (const [key,s] of Object.entries(SEASONS)) {
    if (s.months.includes(month)) return { key, ...s };
  }
  return { key:"spring", ...SEASONS.spring };
}

// ─── Zodiac / Can Chi ───────────────────────────────────────────────────────
const CAN = ["Canh","Tân","Nhâm","Quý","Giáp","Ất","Bính","Đinh","Mậu","Kỷ"];
const CHI = ["Thân","Dậu","Tuất","Hợi","Tý","Sửu","Dần","Mão","Thìn","Tỵ","Ngọ","Mùi"];
const CHI_ANIMAL = {
  Thân:"🐒 Khỉ", Dậu:"🐓 Gà", Tuất:"🐕 Chó", Hợi:"🐗 Heo",
  Tý:"🐀 Chuột", Sửu:"🐂 Trâu", Dần:"🐯 Hổ", Mão:"🐇 Mèo",
  Thìn:"🐉 Rồng", Tỵ:"🐍 Rắn", Ngọ:"🐴 Ngựa", Mùi:"🐑 Dê",
};
const CHI_EN = {
  Thân:"monkey", Dậu:"rooster", Tuất:"dog", Hợi:"pig",
  Tý:"rat", Sửu:"ox", Dần:"tiger", Mão:"cat",
  Thìn:"dragon", Tỵ:"snake", Ngọ:"horse", Mùi:"goat",
};
const ANIMAL_EMOJI = {
  snake:"🐍", horse:"🐴", goat:"🐑", monkey:"🐒",
  rooster:"🐓", dog:"🐕", pig:"🐗", rat:"🐀",
  ox:"🐂", tiger:"🐯", cat:"🐇", dragon:"🐉",
};

function getCanChi(year) {
  const can = CAN[year % 10];
  const chi = CHI[year % 12];
  return { can, chi, animal: CHI_ANIMAL[chi], animalKey: CHI_EN[chi] };
}

// ─── Moon Phase Calc ────────────────────────────────────────────────────────
function getMoonPhase(date) {
  const y = date.getFullYear(), m = date.getMonth()+1, d = date.getDate();
  let jd = 367*y - Math.floor(7*(y+Math.floor((m+9)/12))/4) + Math.floor(275*m/9) + d + 1721013.5;
  const daysSinceNew = (jd - 2451549.5) % 29.53058867;
  const age = daysSinceNew < 0 ? daysSinceNew + 29.53058867 : daysSinceNew;
  const phase = age / 29.53058867;

  let name, icon;
  if      (phase < 0.033) { name="Trăng mới"; icon="🌑"; }
  else if (phase < 0.166) { name="Trăng lưỡi liềm đầu"; icon="🌒"; }
  else if (phase < 0.283) { name="Trăng bán nguyệt đầu"; icon="🌓"; }
  else if (phase < 0.400) { name="Trăng khuyết đầu"; icon="🌔"; }
  else if (phase < 0.533) { name="Trăng tròn"; icon="🌕"; }
  else if (phase < 0.650) { name="Trăng khuyết cuối"; icon="🌖"; }
  else if (phase < 0.766) { name="Trăng bán nguyệt cuối"; icon="🌗"; }
  else if (phase < 0.883) { name="Trăng lưỡi liềm cuối"; icon="🌘"; }
  else                    { name="Trăng mới"; icon="🌑"; }

  return { phase, age: Math.round(age), name, icon };
}

// ─── CSS var helper ─────────────────────────────────────────────────────────
function getCSSVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

// ─── Moon canvas ────────────────────────────────────────────────────────────
function drawMoon(canvas, phase, size) {
  const s = size * 2;
  canvas.width = s; canvas.height = s;
  canvas.style.width = size+"px"; canvas.style.height = size+"px";
  const ctx = canvas.getContext("2d");
  const cx = s/2, cy = s/2, r = s*0.38;

  ctx.clearRect(0,0,s,s);

  const grd = ctx.createRadialGradient(cx,cy,r*0.6,cx,cy,r*1.5);
  grd.addColorStop(0, "rgba(240,220,150,0.15)");
  grd.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = grd;
  ctx.beginPath(); ctx.arc(cx,cy,r*1.5,0,Math.PI*2); ctx.fill();

  ctx.save();
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.clip();

  ctx.fillStyle = "rgba(240,225,160,0.92)";
  ctx.fillRect(0,0,s,s);

  if (phase < 0.48 || phase > 0.52) {
    const t = phase <= 0.5 ? phase*2 : (1-phase)*2;
    const shadowX = cx + r * (1 - t*2) * (phase < 0.5 ? 1 : -1) * 0.95;
    ctx.beginPath();
    ctx.ellipse(shadowX, cy, r * Math.max(0.03, Math.abs(1 - t*2)), r, 0, 0, Math.PI*2);
    if (phase < 0.25 || phase > 0.75) {
      ctx.fillStyle = "rgba(15,15,25,0.96)";
      ctx.fill();
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
      ctx.fillStyle = "rgba(15,15,25,0.96)";
      if (phase < 0.25) { ctx.arc(cx,cy,r, Math.PI/2, -Math.PI/2); }
      else              { ctx.arc(cx,cy,r, -Math.PI/2, Math.PI/2); }
      ctx.fill();
    } else {
      ctx.fillStyle = "rgba(15,15,25,0.96)";
      ctx.beginPath();
      if (phase < 0.5) {
        ctx.arc(cx,cy,r,-Math.PI/2,Math.PI/2);
        ctx.ellipse(shadowX,cy, r*(1-t*1.6),r,0,Math.PI/2,-Math.PI/2,true);
      } else {
        ctx.arc(cx,cy,r,Math.PI/2,-Math.PI/2);
        ctx.ellipse(shadowX,cy, r*(t*2-1)*0.9,r,0,-Math.PI/2,Math.PI/2,true);
      }
      ctx.fill();
    }
  }

  [[0.3,0.4,0.06,"rgba(200,180,100,0.25)"],[0.6,0.3,0.04,"rgba(200,180,100,0.2)"],
   [0.45,0.65,0.03,"rgba(200,180,100,0.18)"],[0.2,0.6,0.025,"rgba(200,180,100,0.15)"]
  ].forEach(([fx,fy,fr,fc]) => {
    ctx.beginPath(); ctx.arc(s*fx,s*fy,r*fr,0,Math.PI*2);
    ctx.fillStyle=fc; ctx.fill();
  });

  ctx.restore();
  ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2);
  ctx.strokeStyle="rgba(240,225,160,0.3)"; ctx.lineWidth=1; ctx.stroke();
}

// ─── Zodiac mascot canvas (animated) ───────────────────────────────────────
let mascotAnimId = null;
function startZodiacMascot(canvas, animalKey, glowColor, size) {
  if (mascotAnimId) cancelAnimationFrame(mascotAnimId);
  const s = size * 2;
  canvas.width = s; canvas.height = s;
  canvas.style.width = size+"px"; canvas.style.height = size+"px";
  const ctx = canvas.getContext("2d");
  const glow = glowColor.replace("0.25","0.18").replace("0.22","0.18").replace("0.28","0.18");
  let frame = 0;

  function draw() {
    frame++;
    const bob = Math.sin(frame * 0.04) * 4;
    ctx.clearRect(0,0,s,s);
    const cx = s/2, cy = s/2 + bob;

    const grd = ctx.createRadialGradient(cx,cy,0,cx,cy,s*0.42);
    grd.addColorStop(0, glow);
    grd.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle = grd;
    ctx.beginPath(); ctx.arc(cx,cy,s*0.42,0,Math.PI*2); ctx.fill();

    ctx.save();
    ctx.font = `${s*0.52}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const sc = 1 + Math.sin(frame*0.05)*0.03;
    ctx.translate(cx,cy);
    ctx.scale(sc,sc);
    ctx.fillText(ANIMAL_EMOJI[animalKey] || "🐉", 0, 0);
    ctx.restore();

    mascotAnimId = requestAnimationFrame(draw);
  }
  draw();
}

// ─── Particle Canvas ────────────────────────────────────────────────────────
let particleAnimId = null;
function createParticle(canvas, type) {
  const base = { x: Math.random()*canvas.width, y:-20, opacity: Math.random()*0.7+0.3, life:0 };
  switch(type) {
    case "sakura": return { ...base,
      size: Math.random()*8+4, speedX:(Math.random()-0.5)*1.2, speedY:Math.random()*1.2+0.4,
      rotation:Math.random()*Math.PI*2, rotSpeed:(Math.random()-0.5)*0.05,
      color:`hsl(${340+Math.random()*20},80%,${75+Math.random()*15}%)`,
      swing:Math.random()*2, swingOffset:Math.random()*Math.PI*2 };
    case "firefly": return { ...base,
      x:Math.random()*canvas.width, y:Math.random()*canvas.height,
      size:Math.random()*3+1.5, speedX:(Math.random()-0.5)*0.6, speedY:(Math.random()-0.5)*0.6,
      pulseSpeed:Math.random()*0.03+0.01, pulseOffset:Math.random()*Math.PI*2,
      color:`hsl(${150+Math.random()*30},100%,65%)` };
    case "leaves": return { ...base,
      size:Math.random()*10+5, speedX:(Math.random()-0.5)*1.5, speedY:Math.random()*1.0+0.3,
      rotation:Math.random()*Math.PI*2, rotSpeed:(Math.random()-0.5)*0.04,
      color:`hsl(${25+Math.random()*20},${75+Math.random()*20}%,${45+Math.random()*20}%)`,
      swing:Math.random()*1.5, swingOffset:Math.random()*Math.PI*2 };
    case "snow": return { ...base,
      size:Math.random()*4+1, speedX:(Math.random()-0.5)*0.5, speedY:Math.random()*0.8+0.2,
      color:`rgba(200,220,255,${0.5+Math.random()*0.4})` };
    default: return base;
  }
}

function startParticles(canvas, type) {
  if (particleAnimId) cancelAnimationFrame(particleAnimId);
  const ctx = canvas.getContext("2d");
  if (canvas.width === 0 || canvas.height === 0) {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  const count = type==="firefly" ? 35 : 50;
  const particles = Array.from({length:count}, () => {
    const p = createParticle(canvas, type);
    p.y = Math.random()*canvas.height;
    return p;
  });
  let frame = 0;

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    frame++;
    particles.forEach((p,i) => {
      p.life++;
      if (type==="sakura"||type==="leaves") {
        p.x += p.speedX + Math.sin(frame*0.02+p.swingOffset)*p.swing*0.3;
        p.y += p.speedY; p.rotation += p.rotSpeed;
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity * Math.max(0, 1-p.y/canvas.height);
        ctx.fillStyle = p.color;
        if (type==="sakura") {
          ctx.beginPath();
          for (let j=0;j<5;j++){
            const a=(j*Math.PI*2)/5-Math.PI/2;
            const x1=Math.cos(a)*p.size, y1=Math.sin(a)*p.size;
            const x2=Math.cos(a+Math.PI/5)*p.size*0.4, y2=Math.sin(a+Math.PI/5)*p.size*0.4;
            if(j===0)ctx.moveTo(x1,y1); else ctx.quadraticCurveTo(x2,y2,x1,y1);
          }
          ctx.closePath(); ctx.fill();
        } else {
          ctx.beginPath(); ctx.ellipse(0,0,p.size*0.5,p.size,0,0,Math.PI*2); ctx.fill();
        }
        ctx.restore();
        if(p.y>canvas.height+20) particles[i]=createParticle(canvas,type);
      } else if (type==="firefly") {
        p.x+=p.speedX; p.y+=p.speedY;
        const pulse=Math.sin(frame*p.pulseSpeed+p.pulseOffset);
        const glow=(pulse+1)*0.5;
        ctx.save();
        const gr=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size*4);
        gr.addColorStop(0,`hsla(${150+Math.random()*5},100%,70%,${0.8*glow})`);
        gr.addColorStop(1,"rgba(0,0,0,0)");
        ctx.fillStyle=gr; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*4,0,Math.PI*2); ctx.fill();
        ctx.globalAlpha=0.9*glow; ctx.fillStyle="white";
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size*0.5,0,Math.PI*2); ctx.fill();
        ctx.restore();
        if(p.x<0||p.x>canvas.width) p.speedX*=-1;
        if(p.y<0||p.y>canvas.height) p.speedY*=-1;
      } else if (type==="snow") {
        p.x += p.speedX+Math.sin(frame*0.01+i)*0.3; p.y+=p.speedY;
        ctx.save(); ctx.globalAlpha=p.opacity; ctx.fillStyle=p.color;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();
        if(p.size>2.5){
          ctx.strokeStyle="rgba(230,240,255,0.6)"; ctx.lineWidth=0.5;
          for(let j=0;j<3;j++){
            const a=(j*Math.PI)/3;
            ctx.beginPath(); ctx.moveTo(p.x-Math.cos(a)*p.size*2,p.y-Math.sin(a)*p.size*2);
            ctx.lineTo(p.x+Math.cos(a)*p.size*2,p.y+Math.sin(a)*p.size*2); ctx.stroke();
          }
        }
        ctx.restore();
        if(p.y>canvas.height+10) particles[i]=createParticle(canvas,type);
      }
    });
    particleAnimId=requestAnimationFrame(draw);
  }
  draw();
}

// ─── Mini Calendar ──────────────────────────────────────────────────────────
function renderCalendar(container, today) {
  let viewing = { year: today.year, month: today.month };
  const monthNames=["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"];
  const dayNames=["CN","T2","T3","T4","T5","T6","T7"];
  const daysInMonth = (y,m) => new Date(y,m,0).getDate();
  const firstDay = (y,m) => new Date(y,m-1,1).getDay();

  function render() {
    const days = daysInMonth(viewing.year, viewing.month);
    const offset = firstDay(viewing.year, viewing.month);
    const cells = Array(offset).fill(null).concat(Array.from({length:days},(_,i)=>i+1));
    while(cells.length%7!==0) cells.push(null);

    const isToday = d => d===today.day && viewing.month===today.month && viewing.year===today.year;

    let html = `<div class="cal-header">
      <button class="cal-nav" data-act="prev">‹</button>
      <span class="cal-title">${monthNames[viewing.month-1]} ${viewing.year}</span>
      <button class="cal-nav" data-act="next">›</button>
    </div>
    <div class="cal-grid">`;
    dayNames.forEach(d => { html += `<div class="cal-dayname">${d}</div>`; });
    cells.forEach((d,i) => {
      if (d===null) { html += `<div class="cal-cell empty"></div>`; return; }
      const cls = ["cal-cell"];
      if (isToday(d)) cls.push("today");
      else if (i%7===0) cls.push("sun");
      html += `<div class="${cls.join(" ")}">${d}</div>`;
    });
    html += `</div>`;
    container.innerHTML = html;

    container.querySelector('[data-act="prev"]').addEventListener("click", () => {
      viewing = viewing.month===1 ? {year:viewing.year-1,month:12} : {...viewing,month:viewing.month-1};
      render();
    });
    container.querySelector('[data-act="next"]').addEventListener("click", () => {
      viewing = viewing.month===12 ? {year:viewing.year+1,month:1} : {...viewing,month:viewing.month+1};
      render();
    });
  }
  render();
}

// ─── Live Clock ─────────────────────────────────────────────────────────────
function startClock(el) {
  function update() {
    const t = new Date();
    const h=String(t.getHours()).padStart(2,"0");
    const m=String(t.getMinutes()).padStart(2,"0");
    const s=String(t.getSeconds()).padStart(2,"0");
    el.innerHTML = `<div class="clock">${h}<span class="colon">:</span>${m}</div><div class="clock-seconds">${s}s</div>`;
  }
  update();
  setInterval(update, 1000);
}

// ─── Season Badges ──────────────────────────────────────────────────────────
function renderSeasonBadges(container, activeKey) {
  container.innerHTML = Object.keys(SEASONS).map(k => `
    <button class="season-badge ${k===activeKey?'active':''}" data-season="${k}" title="${SEASONS[k].name}">
      ${SEASONS[k].emoji} ${SEASONS[k].name}
    </button>
  `).join("");
  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => applySeason(btn.dataset.season));
  });
}

// ─── Piano Visualizer ───────────────────────────────────────────────────────
const PIANO_KEYS = 13;
const BLACK_PATTERN = [0,1,0,1,0,0,1,0,1,0,1,0,0];
let pianoPlaying = false;

function renderPianoKeys(container) {
  container.innerHTML = "";
  for (let i=0;i<PIANO_KEYS;i++) {
    const key = document.createElement("div");
    key.className = "piano-key" + (BLACK_PATTERN[i]===1 ? " black" : "");
    key.innerHTML = `<div class="piano-bar" style="height:4px"></div><div class="piano-base"></div>`;
    container.appendChild(key);
  }
}

// ─── Music state ────────────────────────────────────────────────────────────
let currentMusicSource = "none"; // "none" | "file" | "youtube"
let audioCtx = null, analyser = null, audioFreqData = null;
let playlist = [];
let currentTrack = -1;
let ytPlayer = null, ytApiPromise = null;

function startPiano(container) {
  const bars = container.querySelectorAll(".piano-bar");
  let frame = 0;
  let heights = Array(PIANO_KEYS).fill(0);

  function animate() {
    if (pianoPlaying) {
      frame++;
      if (currentMusicSource === "file" && analyser) {
        analyser.getByteFrequencyData(audioFreqData);
        const bins = audioFreqData.length;
        heights = heights.map((h,i) => {
          const idx = Math.min(bins-1, Math.floor((i/PIANO_KEYS) * bins));
          const v = (audioFreqData[idx] / 255) * 50;
          return h + (v - h) * 0.35;
        });
      } else {
        heights = heights.map((h,i) => {
          const t = Math.abs(Math.sin(frame*0.04+i*0.7+Math.sin(frame*0.02+i)))*38+2;
          return h + (t-h)*0.15;
        });
      }
    } else {
      heights = Array(PIANO_KEYS).fill(0);
    }
    bars.forEach((bar,i) => {
      const h = Math.max(4, heights[i]);
      bar.style.height = h+"px";
      bar.style.boxShadow = h>10 ? "0 -4px 12px var(--glow)" : "none";
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ─── Music controls (File / YouTube / Spotify) ─────────────────────────────
function setupMusicControls() {
  const audioEl = document.getElementById("audioEl");
  const fileInput = document.getElementById("fileInput");
  const playlistEl = document.getElementById("playlist");
  const nowPlaying = document.getElementById("nowPlaying");
  const filePlayBtn = document.getElementById("filePlayBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // -- File source --------------------------------------------------------
  function setupAudioGraph() {
    if (audioCtx) return;
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const sourceNode = audioCtx.createMediaElementSource(audioEl);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      sourceNode.connect(analyser);
      analyser.connect(audioCtx.destination);
      audioFreqData = new Uint8Array(analyser.frequencyBinCount);
    } catch (e) {
      console.warn("Web Audio API không khả dụng:", e);
    }
  }

  function renderPlaylist() {
    playlistEl.innerHTML = playlist.map((t,i) =>
      `<div class="playlist-item ${i===currentTrack?'active':''}" data-i="${i}">${t.name}</div>`
    ).join("");
    playlistEl.querySelectorAll(".playlist-item").forEach(item => {
      item.addEventListener("click", () => loadTrack(+item.dataset.i, true));
    });
  }

  function updateFilePlayBtn() {
    const playing = currentMusicSource === "file" && pianoPlaying;
    filePlayBtn.textContent = playing ? "⏸" : "▶";
    filePlayBtn.classList.toggle("playing", playing);
  }

  function loadTrack(i, autoplay) {
    if (i < 0 || i >= playlist.length) return;
    currentTrack = i;
    audioEl.src = playlist[i].url;
    nowPlaying.textContent = playlist[i].name;
    renderPlaylist();
    setupAudioGraph();
    currentMusicSource = "file";
    if (autoplay !== false) {
      if (audioCtx) audioCtx.resume();
      audioEl.play().catch(()=>{});
      pianoPlaying = true;
    }
    updateFilePlayBtn();
  }

  fileInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    playlist = files.map(f => ({ name: f.name, url: URL.createObjectURL(f) }));
    currentTrack = -1;
    renderPlaylist();
    loadTrack(0, true);
  });

  filePlayBtn.addEventListener("click", () => {
    if (currentTrack === -1) return;
    if (audioEl.paused) {
      if (audioCtx) audioCtx.resume();
      audioEl.play().catch(()=>{});
      pianoPlaying = true;
    } else {
      audioEl.pause();
      pianoPlaying = false;
    }
    currentMusicSource = "file";
    updateFilePlayBtn();
  });

  prevBtn.addEventListener("click", () => loadTrack(currentTrack-1, true));
  nextBtn.addEventListener("click", () => loadTrack(currentTrack+1, true));

  audioEl.addEventListener("ended", () => {
    if (currentTrack < playlist.length-1) loadTrack(currentTrack+1, true);
    else { pianoPlaying = false; updateFilePlayBtn(); }
  });

  // -- YouTube source -------------------------------------------------------
  function loadYouTubeAPI() {
    if (ytApiPromise) return ytApiPromise;
    ytApiPromise = new Promise((resolve) => {
      if (window.YT && window.YT.Player) { resolve(); return; }
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => resolve();
    });
    return ytApiPromise;
  }

  function parseYouTube(url) {
    const videoMatch = url.match(/(?:v=|youtu\.be\/|\/embed\/)([\w-]{11})/);
    const listMatch = url.match(/[?&]list=([\w-]+)/);
    return { videoId: videoMatch ? videoMatch[1] : null, listId: listMatch ? listMatch[1] : null };
  }

  function updateYtPlayBtn() {
    const playing = currentMusicSource === "youtube" && pianoPlaying;
    document.getElementById("ytPlayBtn").textContent = playing ? "⏸" : "▶";
    document.getElementById("ytPlayBtn").classList.toggle("playing", playing);
  }

  document.getElementById("ytLoadBtn").addEventListener("click", async () => {
    const url = document.getElementById("ytInput").value.trim();
    if (!url) return;
    const { videoId, listId } = parseYouTube(url);
    if (!videoId && !listId) { alert("Link YouTube không hợp lệ."); return; }

    // pause file source if playing
    audioEl.pause();
    currentMusicSource = "youtube";

    await loadYouTubeAPI();
    if (ytPlayer) {
      if (listId) ytPlayer.loadPlaylist({ list: listId });
      else ytPlayer.loadVideoById(videoId);
      return;
    }
    ytPlayer = new YT.Player('ytPlayer', {
      height: '113', width: '200',
      videoId: videoId || undefined,
      playerVars: listId ? { listType: 'playlist', list: listId, autoplay: 1 } : { autoplay: 1 },
      events: {
        onStateChange: (e) => {
          pianoPlaying = currentMusicSource === "youtube" && e.data === YT.PlayerState.PLAYING;
          updateYtPlayBtn();
        }
      }
    });
  });

  document.getElementById("ytPlayBtn").addEventListener("click", () => {
    if (!ytPlayer) return;
    currentMusicSource = "youtube";
    if (ytPlayer.getPlayerState() === YT.PlayerState.PLAYING) ytPlayer.pauseVideo();
    else ytPlayer.playVideo();
  });
  document.getElementById("ytPrevBtn").addEventListener("click", () => ytPlayer && ytPlayer.previousVideo && ytPlayer.previousVideo());
  document.getElementById("ytNextBtn").addEventListener("click", () => ytPlayer && ytPlayer.nextVideo && ytPlayer.nextVideo());

  // -- Spotify source --------------------------------------------------------
  document.getElementById("spotifyLoadBtn").addEventListener("click", () => {
    const url = document.getElementById("spotifyInput").value.trim();
    const m = url.match(/open\.spotify\.com\/(track|album|playlist|artist|episode|show)\/([a-zA-Z0-9]+)/);
    if (!m) { alert("Link Spotify không hợp lệ."); return; }
    const [, type, id] = m;
    const height = (type === "track" || type === "episode") ? 152 : 352;
    document.getElementById("spotifyEmbed").innerHTML =
      `<iframe src="https://open.spotify.com/embed/${type}/${id}" width="100%" height="${height}" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  });

  // -- Custom embed (NhacCuaTui, Zing MP3, SoundCloud, TikTok...) -----------
  function renderCustomEmbed(html) {
    const container = document.getElementById("customEmbedContainer");
    container.innerHTML = "";
    const template = document.createElement("template");
    template.innerHTML = html;
    Array.from(template.content.childNodes).forEach(node => {
      if (node.nodeType === 1 && node.tagName === "SCRIPT") {
        const script = document.createElement("script");
        if (node.src) script.src = node.src;
        else script.textContent = node.textContent;
        container.appendChild(script);
      } else {
        container.appendChild(node.cloneNode(true));
      }
    });
  }

  document.getElementById("customEmbedBtn").addEventListener("click", () => {
    const code = document.getElementById("customEmbedInput").value.trim();
    if (!code) return;
    if (!/<(iframe|embed|object|blockquote)/i.test(code)) {
      alert("Đoạn mã cần chứa thẻ <iframe>/<embed>/<blockquote> lấy từ nút Chia sẻ → Embed của nền tảng.");
      return;
    }
    renderCustomEmbed(code);
  });

  // -- Tab switching ----------------------------------------------------------
  const panels = { file:"panelFile", youtube:"panelYoutube", spotify:"panelSpotify", embed:"panelEmbed" };
  document.querySelectorAll(".music-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".music-tab").forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      Object.values(panels).forEach(id => document.getElementById(id).style.display="none");
      document.getElementById(panels[tab.dataset.src]).style.display="block";

      if (tab.dataset.src !== "file") audioEl.pause();
      if (tab.dataset.src !== "youtube" && ytPlayer && ytPlayer.pauseVideo) ytPlayer.pauseVideo();

      pianoPlaying = false;
      currentMusicSource = tab.dataset.src;
      updateFilePlayBtn();
      if (document.getElementById("ytPlayBtn")) updateYtPlayBtn();
    });
  });
}


function renderMoonCard(container, today) {
  const date = new Date(today.year, today.month-1, today.day);
  const moon = getMoonPhase(date);

  const daysToFull = moon.phase < 0.5 ? Math.round((0.5 - moon.phase) * 29.53) : Math.round((1.5 - moon.phase) * 29.53);
  const daysToNew  = moon.phase > 0   ? Math.round((1.0 - moon.phase) * 29.53) : 0;

  const phases = [
    { icon:"🌑",label:"Mới",p:0 },
    { icon:"🌓",label:"Nửa đầu",p:0.25 },
    { icon:"🌕",label:"Tròn",p:0.5 },
    { icon:"🌗",label:"Nửa cuối",p:0.75 },
  ];

  container.innerHTML = `
    <div class="moon-row">
      <canvas class="moon-canvas"></canvas>
      <div>
        <div class="moon-icon">${moon.icon}</div>
        <div class="moon-name">${moon.name}</div>
        <div class="moon-age">Tuổi trăng: ${moon.age} ngày</div>
      </div>
    </div>
    <div class="phases-row">
      ${phases.map(ph => `
        <div class="phase-item ${Math.abs(moon.phase-ph.p)<0.12?'active':''}">
          <div class="phase-icon">${ph.icon}</div>
          <div class="phase-label">${ph.label}</div>
        </div>`).join("")}
    </div>
    <div class="progress-track"><div class="progress-fill" style="width:${moon.phase*100}%"></div></div>
    <div class="countdown">
      <div class="countdown-item">
        <div class="countdown-num">${daysToFull}</div>
        <div class="countdown-label">ngày → 🌕</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-num">${daysToNew}</div>
        <div class="countdown-label">ngày → 🌑</div>
      </div>
    </div>
  `;

  drawMoon(container.querySelector(".moon-canvas"), moon.phase, 70);
}

// ─── Zodiac Card ─────────────────────────────────────────────────────────────
function renderZodiacCard(container, today) {
  const { can, chi, animal, animalKey } = getCanChi(today.year);
  const { can:nextCan, chi:nextChi, animal:nextAnimal } = getCanChi(today.year+1);

  const isBeforeTet = today.month === 1;
  const displayYear = isBeforeTet ? today.year - 1 : today.year;
  const displayCc = isBeforeTet ? getCanChi(displayYear) : { can, chi, animal, animalKey };

  const animalsHtml = Object.entries(CHI_ANIMAL).map(([ch,ani]) => {
    const active = ch === displayCc.chi;
    return `<div class="animal-cycle-item ${active?'active':''}" title="${ch} — ${ani}">${ani.split(" ")[0]}</div>`;
  }).join("");

  container.innerHTML = `
    <div class="zodiac-row">
      <canvas class="zodiac-canvas"></canvas>
      <div>
        <div class="zodiac-year-label">NĂM ${displayYear}</div>
        <div class="zodiac-canchi">${displayCc.can} ${displayCc.chi}</div>
        <div class="zodiac-animal">${displayCc.animal}</div>
      </div>
    </div>
    <div class="divider spaced"></div>
    <div class="next-year-row">
      <div>
        <div class="next-year-label">NĂM SAU</div>
        <div class="next-year-value">${nextCan} ${nextChi} — ${nextAnimal}</div>
      </div>
      <div class="next-year-badge">${today.year+1}</div>
    </div>
    <div class="animal-cycle">${animalsHtml}</div>
  `;

  startZodiacMascot(container.querySelector(".zodiac-canvas"), displayCc.animalKey, getCSSVar("--glow"), 72);
}

// ─── Quick Notes ────────────────────────────────────────────────────────────
function renderNotes(container, season) {
  const notes = [
    { icon:"🎯", label:"Hôm nay", value:"CTF Lab #3" },
    { icon:"☕", label:"Cà phê", value:"2 ly" },
    { icon:"🌙", label:"Mood", value:`${season.emoji} ${season.name}` },
  ];
  container.innerHTML = notes.map(n => `
    <div class="note-card">
      <div class="note-icon">${n.icon}</div>
      <div class="note-label">${n.label}</div>
      <div class="note-value">${n.value}</div>
    </div>
  `).join("");
}

// ─── Season switching ───────────────────────────────────────────────────────
function applySeason(key) {
  const season = SEASONS[key];
  const root = document.documentElement.style;
  root.setProperty("--bg", season.palette.bg);
  root.setProperty("--surface", season.palette.surface);
  root.setProperty("--glass", season.palette.glass);
  root.setProperty("--border", season.palette.border);
  root.setProperty("--accent", season.palette.accent);
  root.setProperty("--accent-soft", season.palette.accentSoft);
  root.setProperty("--text", season.palette.text);
  root.setProperty("--text-muted", season.palette.textMuted);
  root.setProperty("--glow", season.palette.glow);

  document.getElementById("quote").textContent = `❝ ${season.quote} ❞`;
  startParticles(document.getElementById("particles"), season.particles);
  renderSeasonBadges(document.getElementById("seasonBadges"), key);
  renderNotes(document.getElementById("notes"), season);
  renderZodiacCard(document.getElementById("zodiacCard"), window.__today);
}

// ─── Init ───────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const today = { year: now.getFullYear(), month: now.getMonth()+1, day: now.getDate() };
  window.__today = today;

  const weekdays=["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"];
  document.getElementById("weekday").textContent = weekdays[now.getDay()];
  document.getElementById("dateStr").textContent = `${today.day} tháng ${today.month}, ${today.year}`;

  startClock(document.getElementById("clockContainer"));
  renderCalendar(document.getElementById("calendar"), today);
  renderMoonCard(document.getElementById("moonCard"), today);

  renderPianoKeys(document.getElementById("piano"));
  startPiano(document.getElementById("piano"));
  setupMusicControls();

  const particleCanvas = document.getElementById("particles");
  function resizeParticles() {
    particleCanvas.width = particleCanvas.offsetWidth;
    particleCanvas.height = particleCanvas.offsetHeight;
  }
  resizeParticles();
  window.addEventListener("resize", resizeParticles);

  const autoSeason = getSeason(today.month);
  applySeason(autoSeason.key);
});
</script>
</body>
</html>
