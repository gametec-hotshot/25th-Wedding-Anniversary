const fs = require('fs');

const bgB64 = fs.readFileSync('bg.b64', 'utf8').trim();
const gvB64 = fs.readFileSync('gv.b64', 'utf8').trim();
const loraB64 = fs.readFileSync('lora.b64', 'utf8').trim();
const liB64 = fs.readFileSync('li.b64', 'utf8').trim();
const b1B64 = fs.readFileSync('b1.b64', 'utf8').trim();
const b2B64 = fs.readFileSync('b2.b64', 'utf8').trim();

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>25th Wedding Anniversary - Lata & Vinay</title>
<style>
@font-face {
  font-family: 'Great Vibes';
  font-style: normal;
  font-weight: 400;
  src: url(data:font/woff2;base64,${gvB64}) format('woff2');
}
@font-face {
  font-family: 'Lora';
  font-style: normal;
  font-weight: 400;
  src: url(data:font/woff2;base64,${loraB64}) format('woff2');
}
@font-face {
  font-family: 'Lora';
  font-style: italic;
  font-weight: 400;
  src: url(data:font/woff2;base64,${liB64}) format('woff2');
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

body {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Lora', Georgia, serif;
  color: #4A4A4A;
  background: #FDF6EE;
}

.bg-layer {
  position: fixed;
  inset: -30px;
  z-index: 0;
  background: url('data:image/png;base64,${bgB64}') center/cover no-repeat;
  animation: windSway 14s ease-in-out infinite alternate;
  transform-origin: center top;
}

@keyframes windSway {
  0% { transform: scale(1.04) rotate(-0.5deg); }
  50% { transform: scale(1.04) rotate(0.6deg); }
  100% { transform: scale(1.04) rotate(-0.5deg); }
}

.bg-overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
  background: radial-gradient(ellipse at center, rgba(253,246,238,0.25) 0%, rgba(253,246,238,0.55) 100%);
}

.main-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
}


.card {
  background: rgba(255,250,245,0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(212,175,55,0.3);
  border-radius: 24px;
  padding: 48px 36px;
  max-width: 560px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(139,69,19,0.08), 0 0 0 1px rgba(212,175,55,0.1);
  animation: cardFadeIn 1s ease-out backwards;
}
@keyframes cardFadeIn {
  from { opacity: 0; transform: translateY(30px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.anim-item { opacity: 0; animation: itemFadeIn 0.8s ease-out forwards; }
@keyframes itemFadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
.delay-1 { animation-delay: 0.5s; }
.delay-2 { animation-delay: 0.8s; }
.delay-3 { animation-delay: 1.1s; }
.delay-4 { animation-delay: 1.5s; }
.delay-5 { animation-delay: 1.9s; }
.delay-6 { animation-delay: 2.3s; }
.delay-7 { animation-delay: 2.7s; }
.delay-8 { animation-delay: 3.1s; }
.delay-9 { animation-delay: 3.5s; }

.calendar-btn-container { margin-top: 32px; }
.calendar-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: linear-gradient(135deg, #D4AF37 0%, #A67B27 100%);
  color: #FFF; text-decoration: none; padding: 12px 24px;
  border-radius: 30px; font-family: 'Lora', Georgia, serif;
  font-weight: 700; font-size: 14px; letter-spacing: 0.5px;
  box-shadow: 0 4px 12px rgba(166,123,39,0.3); transition: all 0.3s ease;
}
.calendar-btn:hover {
  transform: translateY(-2px); box-shadow: 0 6px 16px rgba(166,123,39,0.4);
  background: linear-gradient(135deg, #E6C555 0%, #B88B2E 100%);
}

.location-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding: 8px 16px;
  background: rgba(212,175,55,0.1);
  border: 1px solid rgba(212,175,55,0.4);
  border-radius: 20px;
  color: #A67B27;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}
.location-btn:hover {
  background: rgba(212,175,55,0.2);
  transform: translateY(-1px);
}
.location-btn svg { color: #A67B27; }


  to { opacity: 1; transform: translateY(0) scale(1); }
}

.verse { font-style: italic; font-size: 15px; color: #6B5B4A; letter-spacing: 0.3px; margin-bottom: 4px; }
.verse-ref { font-size: 13px; color: #8B7B6A; margin-bottom: 28px; }

.cross-icon { margin-bottom: 28px; }
.cross-icon svg { filter: drop-shadow(0 1px 2px rgba(139,69,19,0.15)); }

.invite-text { font-size: 16px; color: #5A4A3A; margin-bottom: 6px; line-height: 1.6; }

.anniversary-title {
  font-family: 'Great Vibes', cursive;
  font-size: 44px;
  color: #A67B27;
  margin: 16px 0 8px;
  line-height: 1.2;
  text-shadow: 0 1px 3px rgba(166,123,39,0.15);
}

.names {
  font-family: 'Great Vibes', cursive;
  font-size: 62px;
  color: #A67B27;
  margin: 8px 0 24px;
  line-height: 1.15;
  text-shadow: 0 2px 6px rgba(166,123,39,0.18);
}

.detail { font-size: 15px; color: #5A4A3A; margin-bottom: 5px; line-height: 1.6; }
.detail-bold { font-weight: 700; }

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 20px 0;
}
.divider::before, .divider::after {
  content: '';
  height: 1px;
  width: 60px;
  background: linear-gradient(90deg, transparent, #C5A059, transparent);
}
.divider svg { flex-shrink: 0; }

.timer-row {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
  
}

  to { opacity: 1; transform: translateY(0); }
}

.timer-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timer-num {
  width: 56px; height: 56px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,245,238,0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212,175,55,0.35);
  border-radius: 50%;
  font-size: 22px;
  font-weight: 700;
  color: #A67B27;
  box-shadow: 0 2px 8px rgba(166,123,39,0.1);
  font-family: 'Lora', Georgia, serif;
}
.timer-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(139,69,19,0.55);
  margin-top: 8px;
}


/* Cherry Blossom Petals */
.petal {
  position: fixed;
  z-index: 20;
  pointer-events: none;
  animation: petalFall var(--dur) var(--delay) linear infinite;
}
@keyframes petalFall {
  0%   { opacity: 0; transform: translateY(-10vh) translateX(0) rotate(0deg) scale(var(--scale, 1)); }
  5%   { opacity: 0.45; }
  85%  { opacity: 0.45; }
  100% { opacity: 0; transform: translateY(105vh) translateX(var(--drift)) rotate(720deg) scale(var(--scale, 1)); }
}
  10%  { opacity: 0.7; }
  90%  { opacity: 0.5; }
  100% { opacity: 0; transform: translateY(105vh) translateX(var(--drift)) rotate(720deg); }
}

/* Shimmer on gold text */
:root { --mx: 50%; --my: 50%; }
.shimmer {
  background: linear-gradient(110deg, #A67B27 20%, #FFF5D1 40%, #D4AF37 50%, #FFF5D1 60%, #A67B27 80%);
  background-size: 250% 250%;
  background-position: var(--mx) var(--my);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: background-position 0.1s ease-out;
}
  50% { background-position: 0% center; }
}

@media (max-width: 600px) {
  .card { padding: 36px 22px; }
  .anniversary-title { font-size: 34px; }
  .names { font-size: 48px; }
  .timer-num { width: 48px; height: 48px; font-size: 18px; }
}
</style>
</head>
<body>

<div class="bg-layer"></div>
<div class="bg-overlay"></div>


<!-- Cherry Blossoms -->
<div class="petal" style="left:82%;--dur:17s;--delay:7s;--drift:73px;--scale:1.39;"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="#FFB7C5" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>
<div class="petal" style="left:8%;--dur:18s;--delay:3s;--drift:50px;--scale:1.01;"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="#FFB7C5" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>
<div class="petal" style="left:19%;--dur:12s;--delay:0s;--drift:-76px;--scale:0.96;"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="#FFE4E1" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>
<div class="petal" style="left:80%;--dur:17s;--delay:1s;--drift:-40px;--scale:1.11;"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="#FFC0CB" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>
<div class="petal" style="left:77%;--dur:12s;--delay:6s;--drift:-42px;--scale:0.85;"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="#FF69B4" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>
<div class="petal" style="left:76%;--dur:13s;--delay:4s;--drift:51px;--scale:1.36;"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="#FFB7C5" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>
<div class="petal" style="left:56%;--dur:14s;--delay:8s;--drift:-31px;--scale:1.21;"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="#FFC0CB" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>
<div class="petal" style="left:13%;--dur:17s;--delay:5s;--drift:-26px;--scale:1.30;"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="#FFE4E1" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>
<div class="petal" style="left:76%;--dur:14s;--delay:4s;--drift:-66px;--scale:1.01;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:50%;--dur:13s;--delay:9s;--drift:93px;--scale:1.00;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:39%;--dur:11s;--delay:3s;--drift:-100px;--scale:0.74;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:37%;--dur:12s;--delay:5s;--drift:-63px;--scale:0.77;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:54%;--dur:10s;--delay:9s;--drift:86px;--scale:0.86;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFE4E1"/></svg></div>
<div class="petal" style="left:9%;--dur:9s;--delay:5s;--drift:48px;--scale:0.98;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFE4E1"/></svg></div>
<div class="petal" style="left:25%;--dur:14s;--delay:6s;--drift:82px;--scale:0.63;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFE4E1"/></svg></div>
<div class="petal" style="left:29%;--dur:13s;--delay:2s;--drift:87px;--scale:0.66;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFB7C5"/></svg></div>
<div class="petal" style="left:49%;--dur:11s;--delay:3s;--drift:38px;--scale:0.72;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:41%;--dur:14s;--delay:4s;--drift:-97px;--scale:1.01;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFE4E1"/></svg></div>
<div class="petal" style="left:5%;--dur:9s;--delay:1s;--drift:-62px;--scale:1.19;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:52%;--dur:10s;--delay:9s;--drift:-57px;--scale:0.61;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:94%;--dur:13s;--delay:1s;--drift:65px;--scale:0.66;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFC0CB"/></svg></div>
<div class="petal" style="left:75%;--dur:11s;--delay:5s;--drift:41px;--scale:0.79;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFC0CB"/></svg></div>
<div class="petal" style="left:28%;--dur:12s;--delay:0s;--drift:-100px;--scale:0.85;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:6%;--dur:11s;--delay:5s;--drift:-105px;--scale:0.89;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FF69B4"/></svg></div>
<div class="petal" style="left:91%;--dur:10s;--delay:4s;--drift:-84px;--scale:0.74;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFC0CB"/></svg></div>
<div class="petal" style="left:11%;--dur:13s;--delay:2s;--drift:-76px;--scale:1.14;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFC0CB"/></svg></div>
<div class="petal" style="left:14%;--dur:8s;--delay:4s;--drift:-80px;--scale:0.75;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFE4E1"/></svg></div>
<div class="petal" style="left:32%;--dur:9s;--delay:0s;--drift:-43px;--scale:0.96;"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="#FFE4E1"/></svg></div>

<div class="main-wrapper">
  <div class="card">
    <p class="verse anim-item delay-1">&ldquo;Let love and faithfulness never leave you&rdquo;</p>
    <p class="verse-ref anim-item delay-1">(Proverbs 3:3)</p>

    <div class="cross-icon anim-item delay-2">
      <svg width="36" height="54" viewBox="0 0 64 96" fill="none">
        <path d="M29 4C29 2.34 30.34 1 32 1C33.66 1 35 2.34 35 4V29H56C57.66 29 59 30.34 59 32C59 33.66 57.66 35 56 35H35V92C35 93.66 33.66 95 32 95C30.34 95 29 93.66 29 92V35H8C6.34 35 5 33.66 5 32C5 30.34 6.34 29 8 29H29V4Z" fill="#C5A059" stroke="#8B4513" stroke-width="0.5"/>
      </svg>
    </div>

    <p class="invite-text anim-item delay-3">You are cordially invited to</p>
    <p class="invite-text anim-item delay-3">celebrate our parents&rsquo;</p>

    <h2 class="anniversary-title shimmer anim-item delay-4">25th Wedding Anniversary</h2>
    <h1 class="names shimmer anim-item delay-5">Lata &amp; Vinay</h1>

    <p class="detail anim-item delay-6">Renewal of vows on 20th May 2026</p>
    <p class="detail anim-item delay-6">at 6:30 PM</p>
    <p class="detail anim-item delay-6">St. Thomas Church, New Colony, Nagpur, 440001</p>
    <a href="https://maps.app.goo.gl/dmNWUNpB2gDC8hx49" target="_blank" class="location-btn anim-item delay-6">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
      View on Map
    </a>

    <div class="divider anim-item delay-6">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#C5A059"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </div>

    <p class="detail anim-item delay-7">Thereafter to a reception at</p>
    <p class="detail detail-bold anim-item delay-7">7:30 PM</p>
    <p class="detail anim-item delay-7">St. Thomas Church Community Hall,</p>
    <p class="detail anim-item delay-7">New Colony, near Mangalwari Corporation Office,</p>
    <p class="detail anim-item delay-7">Chhaoni, Nagpur, 440001</p>
    <a href="https://maps.app.goo.gl/dmNWUNpB2gDC8hx49" target="_blank" class="location-btn anim-item delay-7">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
      View on Map
    </a>

    <div class="divider anim-item delay-7">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#C5A059"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </div>

    <p class="detail anim-item delay-8">Best wishes from</p>
    <p class="detail anim-item delay-8">Gauravi, Saamarthya, Anugraha, Arpit and Sukare Family</p>

    <div class="calendar-btn-container anim-item delay-9">
      <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Lata+%26+Vinay%27s+25th+Wedding+Anniversary&dates=20260520T130000Z/20260520T170000Z&details=Join+us+for+the+renewal+of+vows+and+reception.&location=St.+Thomas+Church,+New+Colony,+Nagpur,+440001" target="_blank" class="calendar-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        Add to Calendar
      </a>
    </div>

    <div class="timer-row anim-item delay-9">
      <div class="timer-item"><div class="timer-num" id="days">--</div><span class="timer-label">Days</span></div>
      <div class="timer-item"><div class="timer-num" id="hours">--</div><span class="timer-label">Hrs</span></div>
      <div class="timer-item"><div class="timer-num" id="mins">--</div><span class="timer-label">Mins</span></div>
      <div class="timer-item"><div class="timer-num" id="secs">--</div><span class="timer-label">Secs</span></div>
    </div>
  </div>
</div>


<script>
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--mx', x + '%');
  document.documentElement.style.setProperty('--my', y + '%');
});
window.addEventListener('deviceorientation', (e) => {
  if (e.gamma === null || e.beta === null) return;
  let x = (e.gamma + 90) / 1.8;
  let y = (e.beta + 90) / 1.8;
  x = Math.max(0, Math.min(100, x));
  y = Math.max(0, Math.min(100, y));
  document.documentElement.style.setProperty('--mx', x + '%');
  document.documentElement.style.setProperty('--my', y + '%');
});
</script>
<script>

(function(){
  var target = new Date("2026-05-20T18:30:00").getTime();
  function update(){
    var now = Date.now(), diff = target - now;
    if(diff < 0) diff = 0;
    document.getElementById("days").textContent = String(Math.floor(diff/86400000)).padStart(2,"0");
    document.getElementById("hours").textContent = String(Math.floor((diff%86400000)/3600000)).padStart(2,"0");
    document.getElementById("mins").textContent = String(Math.floor((diff%3600000)/60000)).padStart(2,"0");
    document.getElementById("secs").textContent = String(Math.floor((diff%60000)/1000)).padStart(2,"0");
  }
  update();
  setInterval(update, 1000);
})();
</script>
</body>
</html>`;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Built index.html: ' + Math.round(html.length / 1024) + ' KB');
