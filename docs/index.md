---
# title: Trang chủ
hide:
  - navigation 
  - toc 
  - footer
  - feedback
comments: false
hide_comment: true
template: posts_list.html
---

<link rel="preload" href="assets/images/avatar1.png" as="image" fetchpriority="high">
<link rel="preload" href="assets/images/avatar2.png" as="image">

<div class="wcowin-header-row">
  <div class="wcowin-header-text">
    <div class="wcowin-header-title">Vuong Dat</div>
    <div class="wcowin-header-subtitle">
      <span class="wcowin-header-subtitle-inner">
        Sinh viên đại học
        <svg width="280" height="18" class="wcowin-header-underline" xmlns="http://www.w3.org/2000/svg">
          <path d="M8,12 Q38,18 68,12 Q98,6 128,12 Q158,18 188,12 Q218,6 248,12 Q278,18 308,12"
            stroke="#6ecbff" stroke-width="5" fill="none"
            stroke-linecap="round" stroke-linejoin="round"
            style="filter: blur(0.2px); opacity: 0.85;" />
        </svg>
      </span>
    </div>
    <div class="wcowin-header-btns">
      <a href="https://github.com/vuongdat67" target="_blank" class="wcowin-header-btn">Github</a>
      <a href="mailto:" class="wcowin-header-btn">Liên hệ</a>
    </div>
  </div>

  <div class="wcowin-header-avatar">
    <div class="flip-glow-ultimate">
      <div class="flip-glow-ultimate-glow"></div>
      <div class="flip-glow-ultimate-imgs">
        <img src="assets/images/avatar1.png" alt="Avatar" class="flip-glow-ultimate-back" loading="eager" fetchpriority="high" width="280" height="280">
        <img src="assets/images/avatar2.png" alt="Avatar Hover" class="flip-glow-ultimate-front" loading="lazy" width="280" height="280">
      </div>
    </div>
  </div>
</div>

<div class="mobile-motto">
  <h1>Theo đuổi hành trình khó khăn để đến với những vì sao ✨</h1>
</div>

<style>
.wcowin-header-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  margin: 48px 0 32px;
  flex-wrap: wrap;
  min-height: 320px;
}

.wcowin-header-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 260px;
  max-width: 420px;
  flex: 1 1 320px;
  padding: 0 8px;
}

.wcowin-header-title {
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 10px rgba(102, 126, 234, 0.2);
}

.wcowin-header-subtitle {
  font-size: 1.7rem;
  font-weight: 600;
  position: relative;
  margin-bottom: 22px;
  line-height: 1.3;
}

.wcowin-header-subtitle-inner {
  color: #666;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.wcowin-header-underline {
  position: absolute;
  left: 0;
  bottom: 0;
  pointer-events: none;
}

.wcowin-header-btns {
  display: flex;
  gap: 18px;
  margin-top: 8px;
}

.wcowin-header-btn {
  padding: 10px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #667eea;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 2px solid #667eea;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
}

.wcowin-header-btn:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.wcowin-header-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  flex: 0 0 280px;
}

.flip-glow-ultimate {
  position: relative;
  width: 280px;
  height: 280px;
}

.flip-glow-ultimate-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #ff9edb, #a2d8ff, #a8ffb0, #fff5a8, #ffb0b0, #ff9edb);
  filter: blur(40px);
  opacity: 0.7;
  animation: glow-rotate 15s linear infinite, glow-pulse 4s ease-in-out infinite;
  z-index: 0;
}

@keyframes glow-rotate {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.6; filter: blur(40px) brightness(1); }
  50% { opacity: 0.8; filter: blur(45px) brightness(1.2); }
}

.flip-glow-ultimate-imgs {
  position: relative;
  width: 280px;
  height: 280px;
  perspective: 1200px;
  z-index: 2;
}

.flip-glow-ultimate-imgs img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backface-visibility: hidden;
  transition: transform 1s cubic-bezier(.4,2,.6,1);
}

.flip-glow-ultimate-back {
  transform: rotateY(0deg);
}

.flip-glow-ultimate-front {
  transform: rotateY(180deg);
}

.flip-glow-ultimate-imgs:hover .flip-glow-ultimate-back {
  transform: rotateY(180deg);
}

.flip-glow-ultimate-imgs:hover .flip-glow-ultimate-front {
  transform: rotateY(0deg);
}

.mobile-motto {
  display: none;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
}

.mobile-motto h1 {
  font-size: 1.6rem;
  color: #666;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  .wcowin-header-subtitle-inner {
    color: #aaa;
  }

  .wcowin-header-btn {
    color: #a2d8ff;
    background: rgba(102, 126, 234, 0.15);
    border-color: #667eea;
  }

  .wcowin-header-btn:hover {
    color: white;
  }

  .flip-glow-ultimate-glow {
    opacity: 0.5;
  }

  .mobile-motto h1 {
    color: #aaa;
  }
}

[data-md-color-scheme="slate"] .wcowin-header-subtitle-inner {
  color: #aaa;
}

[data-md-color-scheme="slate"] .wcowin-header-btn {
  color: #a2d8ff;
  background: rgba(102, 126, 234, 0.15);
  border-color: #667eea;
}

[data-md-color-scheme="slate"] .flip-glow-ultimate-glow {
  opacity: 0.5;
}

/* Responsive */
@media (max-width: 1100px) {
  .wcowin-header-row { gap: 32px; }
  .wcowin-header-title { font-size: 2.5rem; }
  .flip-glow-ultimate, .flip-glow-ultimate-imgs { width: 220px; height: 220px; }
  .flip-glow-ultimate-glow { width: 260px; height: 260px; }
}

@media (max-width: 700px) {
  .wcowin-header-row {
    display: none !important;
  }
  .mobile-motto {
    display: block;
  }
}
</style>

---

<div id="greeting" class="greeting-box">
  <span id="greeting-text">Đang tải...</span>
</div>

<style>
.greeting-box {
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border: 2px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.15);
  transition: all 0.3s ease;
}

.greeting-box:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(102, 126, 234, 0.25);
}

#greeting-text {
  font-size: 1.5rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

[data-md-color-scheme="slate"] .greeting-box {
  background: rgba(102, 126, 234, 0.1);
  border-color: rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .greeting-box { padding: 15px; }
  #greeting-text { font-size: 1.3rem; }
}
</style>

<script>
  function updateGreeting() {
  const el = document.getElementById('greeting-text');
  if (!el) {
    setTimeout(updateGreeting, 100);
    return;
  }

    const hour = new Date().getHours();
    const greetings = [
      [0, 5, "Đêm khuya rồi, hãy nghỉ ngơi nhé", "🌙"],
      [5, 7, "Chào buổi sáng sớm", "🌅"],
      [7, 9, "Chào buổi sáng, chúc bạn ngày mới tốt lành", "☀️"],
      [9, 11, "Buổi sáng tốt lành, tập trung làm việc nhé", "✨"],
      [11, 13, "Trưa rồi, nghỉ ngơi tí nhé", "🍲"],
      [13, 15, "Buổi chiều vui vẻ, tiếp tục phấn đấu", "☕"],
      [15, 18, "Chiều tốt lành, đừng quên uống nước nhé", "🌤️"],
      [18, 20, "Chiều tà rồi, thư giãn chút thôi", "🌆"],
      [20, 22, "Tối tốt lành, tận hưởng thời gian yên tĩnh", "🌃"],
      [22, 24, "Khuya rồi, ngủ sớm nhé", "🌠"]
    ];

  const greeting = greetings.find(([start, end]) => hour >= start && hour < end);
  if (greeting) {
    el.innerHTML = `${greeting[2]} <span style="filter: none; -webkit-text-fill-color: initial;">${greeting[3]}</span>`;
  } else {
    el.innerHTML = 'Xin chào! <span style="filter: none; -webkit-text-fill-color: initial;">👋</span>';
  }
}

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateGreeting);
  } else {
    updateGreeting();
  }
</script>

---

<div class="grid cards" markdown>


-   :material-notebook-edit-outline:{ .lg .middle } __Điều hướng__

    ---
    ![image](https://pic1.zhimg.com/80/v2-b9ae6898d33359da6be815bf60626af2_1440w.webp?source=2c26e567){ class="responsive-image" loading="lazy" align=right width="340" height="226" style="border-radius: 2.5em 1.5em 3em 2em / 2em 2.5em 1.5em 3em;" }


    - [x] Sử dụng {==Mục lục==} để mở bài viết

    - [x] Tìm kiếm {~~~bằng từ khóa~~}

    - [x] 𝐇𝐚𝐯𝐞 𝐚 𝐠𝐨𝐨𝐝 𝐭𝐢𝐦𝐞 !

    === "Chưa có"
        Chưa có

    === "Chưa có"
        Chưa có

</div>

<style>
@media (max-width: 768px) {
  .responsive-image { display: none; }
}
</style>

<div class="grid cards" markdown>


-   :octicons-bookmark-16:{ .lg .middle } __Bài viết đề xuất__

    ---

    - [Tham khảo](./posts/guide/setup/references.md)

    - [Chưa có]()

    - [Chưa có]()

    - [Chưa có]()


-   :simple-materialformkdocs:{ .lg .middle } __Hướng dẫn Mkdocs__

    ---

    - [Hướng dẫn](./posts/guide/demo_mkdocs.md)

    - [Cấu hình](./posts/guide/setup/mkdocs_syntax/configmarkdown.md)

    - [Chưa có]()

    - [Chưa có]()


-   :material-format-font:{ .lg .middle } __Hữu ích / Thú vị__

    ---

    - [CTF](./ctf/index.md)

    - [Chưa có]()

    - [Chưa có]()

    - [Chưa có]()



-   :simple-aboutdotme:{ .lg .middle } __Về tác giả__

    ---

    - [Blog](./posts/index.md)
</div>

<style>
.md-grid { max-width: 1220px; }

body::before {
  --size: 35px;
  --line: color-mix(in hsl, canvasText, transparent 85%);
  content: '';
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: 
    linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size) var(--size);
  mask: linear-gradient(-20deg, transparent 50%, white);
  top: 0;
  pointer-events: none;
  z-index: -1;
}

@media (max-width: 768px) {
  body::before { display: none; }
  .flip-glow-ultimate-glow { animation: none; opacity: 0.4; }
}

.grid.cards { margin: 0 !important; }
.grid.cards > ul { gap: 20px !important; }
.grid.cards > ul > li { 
  padding: 25px !important;
  border-radius: 15px;
  transition: all 0.3s ease;
}
.grid.cards > ul > li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}
</style>

<script defer src="https://cloud.umami.is/script.js" data-website-id="061b4dea-9b7b-4ffa-9071-74cde70f3dfb"></script>
<meta name="algolia-site-verification" content="3CAAB2C27102AD08" />


<!-- <style>
@media only screen and (min-width: 1220px) {
    .md-nav__list {
        display: none;
    }
}
</style> -->