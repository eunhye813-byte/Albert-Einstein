/* ---------- 그림 도구 ---------- */
const more = (title, body) =>
  `<details class="more"><summary>${title}</summary><div class="more-in">${body}</div></details>`;
const mission = steps =>
  `<div class="mission"><b>해 보기</b><ol>${steps.map(t => `<li>${t}</li>`).join("")}</ol></div>`;
const INK = "#1b2340";
const ic = (n, x, y, s, rot = 0, flip = false) => {
  const c = `<image href="${ICONS[n]}" x="${x}" y="${y}" width="${s}" height="${s}"/>`;
  const t = [];
  if (rot) t.push(`rotate(${rot} ${x + s / 2} ${y + s / 2})`);
  if (flip) t.push(`translate(${2 * x + s} 0) scale(-1 1)`);
  return t.length ? `<g transform="${t.join(" ")}">${c}</g>` : c;
};
let TS = 1;
const txt = (x, y, t, size = 14, fill = INK) =>
  `<text x="${x}" y="${y}" font-size="${size * TS}" fill="${fill}" text-anchor="middle" font-family="'Pretendard Variable', Pretendard, sans-serif" font-weight="700">${t}</text>`;
const tag = (x, y, t, bg = "#ffffff", fill = INK, size = 13) => {
  const s = size * TS,
    w = [...t].length * s * 0.86 + 18;
  return (
    `<rect x="${x - w / 2}" y="${y - s - 3}" width="${w}" height="${s + 11}" rx="${(s + 11) / 2}" fill="${bg}"/>` +
    txt(x, y, t, size, fill)
  );
};
const svg = (w, h, label, s) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${s}</svg>`;
const bg = (w, h, id) => `<rect width="${w}" height="${h}" fill="url(#${id})"/>`;
const stars = (w, h) =>
  [
    [0.08, 0.16],
    [0.3, 0.1],
    [0.52, 0.2],
    [0.72, 0.08],
    [0.92, 0.2],
    [0.16, 0.84],
    [0.62, 0.92],
    [0.88, 0.78],
    [0.42, 0.72],
  ]
    .map(p => `<circle cx="${p[0] * w}" cy="${p[1] * h}" r="1.6" fill="#fff" opacity=".8"/>`)
    .join("");
const metal = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="url(#gMetal)"/>`;
const elec = (x, y, r = 8) => `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#gE)"/>`;
const beam = (x1, y1, x2, y2a, y2b, c, o = 0.3) =>
  `<path d="M${x1} ${y1} L${x2} ${y2a} V${y2b}Z" fill="${c}" opacity="${o}"/>`;
const ball = (x, y, r) =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="url(#gBall)"/><g fill="#1b1538"><circle cx="${x - r * 0.12}" cy="${y - r * 0.42}" r="${r * 0.1}"/><circle cx="${x + r * 0.18}" cy="${y - r * 0.46}" r="${r * 0.1}"/><circle cx="${x + r * 0.04}" cy="${y - r * 0.18}" r="${r * 0.1}"/></g>`;
/* 트램펄린: 가운데가 넓고 완만하게 꺼진 천을 격자로 그린다. */
const sheetXY = (x, y) => {
  const r2 = x * x + y * y;
  return [160 + x, 58 + y * 0.42 + 66 * Math.exp(-r2 / 7200)];
};
const sheet = () => {
  const lines = [];
  for (let a = -130; a <= 130; a += 26) {
    const u = [],
      v = [];
    for (let b = -104; b <= 104; b += 8)
      u.push(
        sheetXY(a, b)
          .map(n => n.toFixed(1))
          .join(","),
      );
    for (let b = -130; b <= 130; b += 8)
      v.push(
        sheetXY(b, a * 0.8)
          .map(n => n.toFixed(1))
          .join(","),
      );
    lines.push(`<polyline points="${u.join(" ")}"/><polyline points="${v.join(" ")}"/>`);
  }
  return `<g fill="none" stroke="#2f7fc1" stroke-width="1.3">${lines.join("")}</g>`;
};
const ORBIT = "M62 76 A98 41 0 1 0 258 76 A98 41 0 1 0 62 76";
/* 빛 시계 한 쌍: 빛의 속도의 60%라서 움직이는 시계는 한 번 오가는 데 1.25배 걸린다. */
const clockPair =
  () => `<g fill="#dfe7f3"><rect x="24" y="38" width="62" height="7" rx="3"/><rect x="24" y="128" width="62" height="7" rx="3"/></g>
  <circle cx="55" r="7" fill="#ffd166"><animate attributeName="cy" values="128;45;128" dur="2s" repeatCount="indefinite"/></circle>
  <path d="M55 128 V45" stroke="#ffd166" stroke-width="2" stroke-dasharray="4 5"/>
  <path d="M135 128 L202 45 L270 128" fill="none" stroke="#ffd166" stroke-width="2" stroke-dasharray="4 5"/>
  <g><g fill="#dfe7f3"><rect x="-31" y="38" width="62" height="7" rx="3"/><rect x="-31" y="128" width="62" height="7" rx="3"/></g><animateTransform attributeName="transform" type="translate" from="135 0" to="270 0" dur="2.5s" repeatCount="indefinite"/></g>
  <circle r="7" fill="#ffd166"><animateMotion dur="2.5s" repeatCount="indefinite" path="M135 128 L202 45 L270 128"/></circle>`;
/* 일식: 달이 태양을 가리면 하늘이 어두워지고 별과 코로나가 보인다. */
const eclipse = (cx, cy, r, w, h) => {
  const kt = "0;.3;.42;.6;.72;1",
    dur = "9s";
  return `<defs><radialGradient id="gCorona"><stop offset=".42" stop-color="#ffffff"/><stop offset=".55" stop-color="#e6eeff" stop-opacity=".85"/><stop offset=".78" stop-color="#b9cbff" stop-opacity=".25"/><stop offset="1" stop-color="#b9cbff" stop-opacity="0"/></radialGradient></defs>
  <rect width="${w}" height="${h}" fill="#090d24"/>
  <rect width="${w}" height="${h}" fill="#7cc4f5"><animate attributeName="opacity" values="1;1;0;0;1;1" keyTimes="${kt}" dur="${dur}" repeatCount="indefinite"/></rect>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff4b8"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 2.5}" fill="url(#gCorona)" opacity="0"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="${kt}" dur="${dur}" repeatCount="indefinite"/></circle>
  <circle cy="${cy}" r="${r * 1.02}" fill="#05070f"><animate attributeName="cx" values="${cx - r * 3.4};${cx - r * 0.7};${cx};${cx};${cx + r * 0.7};${cx + r * 3.4}" keyTimes="${kt}" dur="${dur}" repeatCount="indefinite"/></circle>`;
};
const afterFusion = inner =>
  `<g opacity="0">${inner}<animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.44;.46;1" dur="4s" repeatCount="indefinite"/></g>`;
const nightOnly = inner =>
  `<g opacity="0">${inner}<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.3;.42;.6;.72;1" dur="9s" repeatCount="indefinite"/></g>`;
/* GPS: 위로 갈수록 중력이 약해지는 모습과 시간 차이를 함께 그린다. 차이는 크게 과장했다. */
const gpsScene = () => `${bg(480, 255, "gNight")}${stars(480, 255)}
  <circle cx="120" cy="330" r="130" fill="#3b82f6"/>
  <g fill="none" stroke="#ffd166"><circle cx="120" cy="330" r="165" stroke-width="5" opacity=".75"/><circle cx="120" cy="330" r="205" stroke-width="3.5" opacity=".5"/><circle cx="120" cy="330" r="255" stroke-width="2" opacity=".3"/></g>
  <circle cx="120" cy="330" r="315" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="4 6"/>
  ${ic("mobile-phone", 100, 165, 40)}
  <g>${ic("satellite", -24, -24, 48)}<animateMotion dur="10s" repeatCount="indefinite" path="M30 28 A315 315 0 0 1 345 110 A315 315 0 0 0 30 28"/></g>
  ${tag(48, 140, "땅: 중력 강함", "#ffd166", INK, 13)}
  ${tag(400, 30, "약 2만 km 높이", "#ffffff", INK, 13)}${tag(400, 60, "중력 약함", "#ffd166", INK, 13)}
  <rect x="196" y="122" width="274" height="124" rx="12" fill="#0f1738" opacity=".95"/>
  ${txt(333, 144, "시간이 흐르는 빠르기 (크게 과장)", 13, "#fff")}
  <rect x="208" y="170" width="250" height="13" rx="6" fill="#2a3566"/><rect x="208" y="170" height="13" rx="6" fill="#7fd0ff" width="0"><animate attributeName="width" values="0;250;250" keyTimes="0;.92;1" dur="5.5s" repeatCount="indefinite"/></rect>
  <rect x="208" y="214" width="250" height="13" rx="6" fill="#2a3566"/><rect x="208" y="214" height="13" rx="6" fill="#ffd166" width="0"><animate attributeName="width" values="0;250;250" keyTimes="0;.68;1" dur="5.5s" repeatCount="indefinite"/></rect>
  ${txt(245, 164, "땅의 시계", 13, "#7fd0ff")}${txt(250, 208, "위성의 시계", 13, "#ffd166")}`;
const COMPARE_TABLE = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>움직이는 것</th><th>빠르기</th><th>지구의 시계로 1년 동안 덜 가는 시간</th></tr></thead><tbody>
  <tr><td>자동차</td><td>시속 100km</td><td>약 0.00000014초</td></tr>
  <tr><td>여객기</td><td>시속 900km</td><td>약 0.00001초</td></tr>
  <tr><td>GPS 위성</td><td>시속 약 1만 4천 km</td><td>약 0.0026초</td></tr>
  <tr><td>우주선 (상상)</td><td>빛의 속도의 90%</td><td>약 206일</td></tr>
  <tr><td>우주선 (상상)</td><td>빛의 속도의 99%</td><td>약 314일</td></tr>
</tbody></table></div><p class="note">특수상대성이론의 식으로 계산한 값이고, 속도의 효과만 따졌어요. 빛의 속도는 시속 약 10억 8천만 km예요.</p>`;
const NAME_TABLE = more(
  "두 이론은 무엇이 다를까요?",
  `<div class="tbl-wrap"><table class="tbl"><thead><tr><th></th><th>특수상대성이론</th><th>일반상대성이론</th></tr></thead><tbody>
  <tr><td>발표</td><td>1905년</td><td>1915~1916년</td></tr>
  <tr><td>다루는 것</td><td>중력이 없고 일정하게 움직이는 경우</td><td>중력까지 포함한 더 넓은 경우</td></tr>
  <tr><td>이름의 뜻</td><td>"특수"는 범위가 좁은 특별한 경우라는 뜻이에요.</td><td>"일반"은 더 넓게 두루 적용된다는 뜻이에요.</td></tr>
  <tr><td>핵심 내용</td><td>빛의 속도는 같고, 시간과 길이가 달라져요.</td><td>무거운 천체가 공간과 시간을 휘게 해요.</td></tr>
</tbody></table></div><p class="note">"상대성"은 시간과 길이를 재는 값이 누가 어떻게 움직이며 재는지에 따라 달라진다는 뜻이에요.</p>`,
);

const RED = "#ef4444",
  BLUE = "#2563eb",
  GREEN = "#10b981";
