const fs = require('fs');
let code = fs.readFileSync('build.js', 'utf8');

const cssReplace = `/* Cherry Blossom Petals */
.petal {
  position: fixed;
  z-index: 5;
  pointer-events: none;
  animation: petalFall var(--dur) var(--delay) linear infinite;
}
@keyframes petalFall {
  0%   { opacity: 0; transform: translateY(-10vh) translateX(0) rotate(0deg) scale(var(--scale, 1)); }
  5%   { opacity: 0.95; }
  85%  { opacity: 0.95; }
  100% { opacity: 0; transform: translateY(105vh) translateX(var(--drift)) rotate(720deg) scale(var(--scale, 1)); }
}`;

code = code.replace(/\/\* Petals \*\/[\s\S]*?@keyframes petalFall \{[\s\S]*?\}/, cssReplace);

let newHtml = '<!-- Cherry Blossoms -->\n';
const colors = ['#FFB7C5', '#FFC0CB', '#FF69B4', '#FFE4E1'];

// Generate 8 flowers
for(let i=0; i<8; i++) {
  const left = Math.floor(Math.random() * 95);
  const dur = Math.floor(Math.random() * 8) + 12;
  const delay = Math.floor(Math.random() * 10);
  const drift = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 60) + 20);
  const scale = (Math.random() * 0.6 + 0.8).toFixed(2);
  const color = colors[Math.floor(Math.random() * colors.length)];
  newHtml += `<div class="petal" style="left:${left}%;--dur:${dur}s;--delay:${delay}s;--drift:${drift}px;--scale:${scale};"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M12 2.5C13.5 5 16.5 4.5 16.5 7.5C19.5 7 21.5 9.5 20 12C21.5 14.5 19.5 17 16.5 16.5C16.5 19.5 13.5 19 12 16.5C10.5 19 7.5 19.5 7.5 16.5C4.5 17 2.5 14.5 4 12C2.5 9.5 4.5 7 7.5 7.5C7.5 4.5 10.5 5 12 2.5Z" fill="${color}" stroke="#FF69B4" stroke-width="0.5"/><circle cx="12" cy="12" r="2" fill="#FF1493" fill-opacity="0.8"/></svg></div>\n`;
}

// Generate 20 individual petals
for(let i=0; i<20; i++) {
  const left = Math.floor(Math.random() * 95);
  const dur = Math.floor(Math.random() * 7) + 8;
  const delay = Math.floor(Math.random() * 10);
  const drift = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 80) + 30);
  const scale = (Math.random() * 0.6 + 0.6).toFixed(2);
  const color = colors[Math.floor(Math.random() * colors.length)];
  newHtml += `<div class="petal" style="left:${left}%;--dur:${dur}s;--delay:${delay}s;--drift:${drift}px;--scale:${scale};"><svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22C12 22 8 18 8 12C8 6 12 2 12 2Z" fill="${color}"/></svg></div>\n`;
}

code = code.replace(/<!-- Petals -->[\s\S]*?(?=<div class="main-wrapper">)/, newHtml + '\n');
fs.writeFileSync('build.js', code);
console.log('Injected cherry blossoms into build.js');
