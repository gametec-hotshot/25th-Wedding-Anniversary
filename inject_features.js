const fs = require('fs');
let code = fs.readFileSync('build.js', 'utf8');

// 1. Shimmer CSS update
code = code.replace(/\.shimmer \{[\s\S]*?@keyframes shimmer \{[\s\S]*?\}/, `:root { --mx: 50%; --my: 50%; }
.shimmer {
  background: linear-gradient(110deg, #A67B27 20%, #FFF5D1 40%, #D4AF37 50%, #FFF5D1 60%, #A67B27 80%);
  background-size: 250% 250%;
  background-position: var(--mx) var(--my);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: background-position 0.1s ease-out;
}`);

// 2. Storybook Entrance Animations CSS
const entranceCss = `
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
`;

code = code.replace(/\.card \{[\s\S]*?@keyframes cardIn \{[\s\S]*?\}/, entranceCss);

// Remove old timer animation
code = code.replace(/animation: timerIn 1s ease-out 1s both;/g, '');
code = code.replace(/@keyframes timerIn \{[\s\S]*?\}/g, '');

// 3. Inject anim-item classes into HTML
code = code.replace('<p class="verse">', '<p class="verse anim-item delay-1">');
code = code.replace('<p class="verse-ref">', '<p class="verse-ref anim-item delay-1">');
code = code.replace('<div class="cross-icon">', '<div class="cross-icon anim-item delay-2">');
code = code.replace('<p class="invite-text">You are', '<p class="invite-text anim-item delay-3">You are');
code = code.replace('<p class="invite-text">celebrate', '<p class="invite-text anim-item delay-3">celebrate');
code = code.replace('<h2 class="anniversary-title shimmer">', '<h2 class="anniversary-title shimmer anim-item delay-4">');
code = code.replace('<h1 class="names shimmer">', '<h1 class="names shimmer anim-item delay-5">');

const oldSection = `<p class="detail">Renewal of vows on 20th May 2026</p>
    <p class="detail">at 6:30 PM</p>
    <p class="detail">St. Thomas Church, New Colony, Nagpur, 440001</p>

    <div class="divider">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#C5A059"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </div>

    <p class="detail">Thereafter to a reception at</p>
    <p class="detail detail-bold">7:30 PM</p>
    <p class="detail">St. Thomas Church Community Hall,</p>
    <p class="detail">New Colony, near Mangalwari Corporation Office,</p>
    <p class="detail">Chhaoni, Nagpur, 440001</p>

    <div class="divider">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#C5A059"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </div>

    <p class="detail">Best wishes from</p>
    <p class="detail">Gauravi, Saamarthya, Anugraha, Arpit and Sukare Family</p>

    <div class="timer-row">`;

const newSection = `<p class="detail anim-item delay-6">Renewal of vows on 20th May 2026</p>
    <p class="detail anim-item delay-6">at 6:30 PM</p>
    <p class="detail anim-item delay-6">St. Thomas Church, New Colony, Nagpur, 440001</p>

    <div class="divider anim-item delay-6">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#C5A059"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </div>

    <p class="detail anim-item delay-7">Thereafter to a reception at</p>
    <p class="detail detail-bold anim-item delay-7">7:30 PM</p>
    <p class="detail anim-item delay-7">St. Thomas Church Community Hall,</p>
    <p class="detail anim-item delay-7">New Colony, near Mangalwari Corporation Office,</p>
    <p class="detail anim-item delay-7">Chhaoni, Nagpur, 440001</p>

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

    <div class="timer-row anim-item delay-9">`;
code = code.replace(oldSection, newSection);

const scriptTag = `
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
`;
code = code.replace('<script>', scriptTag);

fs.writeFileSync('build.js', code);
console.log('Premium features injected into build.js');
