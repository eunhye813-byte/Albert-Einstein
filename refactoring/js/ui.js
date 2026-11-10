/* ---------- 화면 ---------- */
const $ = (s, r = document) => r.querySelector(s);
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const icon = (n, alt = "") => `<img src="${ICONS[n]}" alt="${alt}">`;
const paras = a => a.map(t => `<p>${t}</p>`).join("");
let frame = null;
const stopLoop = () => {
  if (frame) cancelAnimationFrame(frame);
  frame = null;
};
function loop(draw) {
  stopLoop();
  const run = () => {
    draw();
    frame = requestAnimationFrame(run);
  };
  run();
}
function setupCanvas(id, w, h) {
  const c = $(id);
  c.width = w * 2;
  c.height = h * 2;
  const ctx = c.getContext("2d");
  ctx.scale(2, 2);
  return ctx;
}
const IMG = {};
const imgOf = n => {
  if (!IMG[n]) {
    IMG[n] = new Image();
    IMG[n].src = ICONS[n];
  }
  return IMG[n];
};
function drawIcon(ctx, n, x, y, s, rot = 0, sx = 1) {
  const im = imgOf(n);
  if (!im.complete) return;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rot);
  ctx.scale(sx, 1);
  ctx.drawImage(im, -s / 2, -s / 2, s, s);
  ctx.restore();
}
function nightBg(ctx, w, h) {
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, "#15204a");
  g.addColorStop(1, "#2d3c86");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "rgba(255,255,255,.75)";
  [
    [0.06, 0.12],
    [0.22, 0.85],
    [0.37, 0.08],
    [0.56, 0.9],
    [0.74, 0.1],
    [0.93, 0.8],
    [0.47, 0.5],
  ].forEach(p => {
    ctx.beginPath();
    ctx.arc(p[0] * w, p[1] * h, 1.5, 0, 7);
    ctx.fill();
  });
}
/* 캔버스가 작게 보이면 글자를 키워 그린다. */
const textScale = ctx => Math.min(1.7, Math.max(1, 640 / (ctx.canvas.clientWidth || 640)));
const label = (ctx, t, x, y, size = 15, c = "#fff", align = "center") => {
  ctx.fillStyle = c;
  ctx.font = `${size * textScale(ctx)}px "Do Hyeon", sans-serif`;
  ctx.textAlign = align;
  ctx.fillText(t, x, y);
};

function renderNav() {
  const idea = IDEAS.find(i => i.id === state.idea);
  document.documentElement.style.setProperty("--accent", idea.accent);
  document.documentElement.style.setProperty("--tint", idea.tint);
  $("#ideas").innerHTML = IDEAS.map(
    i =>
      `<button class="idea" type="button" data-i="${i.id}" aria-pressed="${state.idea === i.id}">${icon(i.icon)}<b>${i.name}</b></button>`,
  ).join("");
  $("#methods").innerHTML = METHODS.map(
    m =>
      `<button class="method" type="button" data-m="${m.id}" aria-pressed="${state.method === m.id}">${icon(m.icon)}<span>${m.name}</span></button>`,
  ).join("");
  $("#core").innerHTML = `<h2>${idea.core}</h2><div class="lines">${paras([idea.hint, ...idea.lines])}</div>`;
}
function nextButton() {
  const k = METHODS.findIndex(m => m.id === state.method);
  if (k < METHODS.length - 1)
    return `<button class="next" type="button" data-next="method">다음: ${METHODS[k + 1].name} →</button>`;
  const n = IDEAS[(IDEAS.findIndex(i => i.id === state.idea) + 1) % IDEAS.length];
  return `<button class="next" type="button" data-next="idea">다음 생각: ${n.name} →</button>`;
}
function renderComic() {
  const list = COMIC[state.idea];
  $("#stage").innerHTML =
    `<div class="panels" id="panels" tabindex="0" role="group" aria-label="만화">` +
    list
      .map(
        p =>
          `<article class="panel">${p.art}<div class="talk">${icon(p.who === "하나" ? HANA : EIN)}<div><span class="who">${p.who}</span>${paras(p.say)}</div></div></article>`,
      )
      .join("") +
    `</div><div class="flip"><button class="retry" type="button" data-flip="-1">← 앞 칸</button><span id="flipNow" aria-live="polite"></span><button class="retry" type="button" data-flip="1">다음 칸 →</button></div><p class="note">하나와 아인슈타인의 대화는 이해를 돕기 위해 꾸민 이야기예요. 아인슈타인이 실제로 한 말이 아니에요.</p>` +
    nextButton();
  const panels = $("#panels"),
    flips = document.querySelectorAll("[data-flip]");
  const stride = () => panels.children[1].offsetLeft - panels.children[0].offsetLeft;
  const at = () => Math.round(panels.scrollLeft / stride());
  const showAt = () => {
    const k = at();
    $("#flipNow").textContent = `${k + 1} / ${list.length}`;
    flips[0].disabled = k === 0;
    flips[1].disabled = k === list.length - 1;
  };
  panels.addEventListener("scroll", showAt, { passive: true });
  flips.forEach(b =>
    b.addEventListener("click", () =>
      panels.scrollTo({ left: stride() * (at() + +b.dataset.flip), behavior: reduced ? "auto" : "smooth" }),
    ),
  );
  showAt();
}
function renderGuide() {
  const g = GUIDE[state.idea];
  $("#stage").innerHTML =
    `<div class="sheet"><h3>${g.title}</h3>${g.art}<ol class="steps">${g.steps.map(s => `<li><b>${s[0]}</b>${paras(s[1])}</li>`).join("")}</ol>${g.cases || ""}<div class="life">${icon(g.life.icon)}<div><b>우리 생활에서</b>${paras(g.life.text)}${g.life.more ? more("숫자로 보기", paras(g.life.more)) : ""}</div></div>${g.note ? more("그림 설명 더 보기", `<p class="note">${g.note}</p>`) : ""}</div>` +
    nextButton();
}
function renderQuiz() {
  const list = QUIZ[state.idea];
  const answers = quizState[state.idea] || (quizState[state.idea] = {});
  const done = Object.keys(answers).length;
  const right = list.filter((q, n) => answers[n] === q.a).length;
  const finished = done === list.length;
  $("#stage").innerHTML =
    list
      .map((q, n) => {
        const picked = answers[n];
        const opts = q.o
          .map((o, k) => {
            let cls = "opt";
            if (picked !== undefined && k === q.a) cls += " right";
            if (picked === k && k !== q.a) cls += " wrong";
            return `<button class="${cls}" type="button" data-q="${n}" data-k="${k}"${picked !== undefined ? " disabled" : ""}>${o}</button>`;
          })
          .join("");
        const verdict =
          picked === undefined
            ? ""
            : `<div class="why"><b>${picked === q.a ? "맞았어요!" : "정답을 함께 볼까요?"}</b>${paras(q.why)}</div>`;
        return `<article class="q"><h3>${n + 1}. ${q.q}</h3><div class="opts">${opts}</div>${verdict}</article>`;
      })
      .join("") +
    `<div class="score"><span>${finished ? `${list.length}문제 중 ${right}문제를 맞혔어요.` : `${list.length}문제 중 ${done}문제를 풀었어요.`}</span>${done ? `<button class="retry" type="button" data-retry="1">다시 풀기</button>` : ""}</div>` +
    nextButton();
}
