/* ---------- 실험실 ---------- */
const wlColor = wl => {
  const stops = [
    [400, 275],
    [450, 230],
    [495, 160],
    [570, 60],
    [590, 35],
    [620, 5],
    [700, 0],
  ];
  const k = stops.findIndex(s => wl <= s[0]);
  const [a, b] = k <= 0 ? [stops[0], stops[0]] : [stops[k - 1], stops[k]];
  const hue = a === b ? a[1] : a[1] + ((b[1] - a[1]) * (wl - a[0])) / (b[0] - a[0]);
  return `hsl(${hue} 95% 62%)`;
};
const wlName = wl =>
  wl < 450
    ? "보라색"
    : wl < 495
      ? "파란색"
      : wl < 570
        ? "초록색"
        : wl < 590
          ? "노란색"
          : wl < 620
            ? "주황색"
            : "빨간색";
const THRESHOLD = 2.3;

function labPhoto() {
  $("#stage").innerHTML =
    `<div class="sheet">
    ${mission(["먼저 밝기를 올려 보세요.", "전자가 나오지 않으면 빛의 색 막대를 오른쪽의 파란색 쪽으로 옮겨 보세요.", "전자가 나오면 밝기를 바꿔서 전자의 수를 비교해 보세요."])}
    <canvas id="c1" aria-label="빛 알갱이가 금속판에 부딪혀 전자가 튀어나오는 실험"></canvas>
    <canvas id="c1h" aria-label="전자가 문턱을 뛰어넘으려는 모습"></canvas>
    <div class="controls">
      <div class="control"><label for="wl">빛의 색<output id="wlOut"></output></label><input id="wl" type="range" min="400" max="700" value="450"><div class="ends"><span>빨간색: 에너지가 작아요</span><span>보라색: 에너지가 커요</span></div></div>
      <div class="control"><label for="br">빛의 밝기<output id="brOut"></output></label><input id="br" type="range" min="10" max="100" value="80"></div>
    </div>
    <p class="result" id="res"></p>
    <p>문턱은 전자가 금속 밖으로 나오는 데 필요한 에너지예요.</p>
    ${more("숫자로 보기", `<div class="stats"><div class="stat"><span>빛 알갱이 하나의 에너지</span><b id="sE"></b></div><div class="stat"><span>전자가 나오는 문턱</span><b>약 ${THRESHOLD}eV</b></div><div class="stat"><span>튀어나오는 전자의 양</span><b id="sN"></b></div></div><p id="vib"></p>`)}
    ${more("더 알아보기", `<p class="note">광택이 있는 금속은 눈에 보이는 빛을 많이 반사해요. 그래서 빛 알갱이가 많이 튕겨 나가게 그렸어요. 실제 비율은 금속과 빛의 색에 따라 달라요. 금속판의 주황색은 따뜻해지는 것을 보여 주려고 과장한 색이에요. 이 실험은 나트륨 금속을 예로 들었어요. eV(전자볼트)는 아주 작은 에너지를 재는 단위예요. 알갱이의 크기와 움직임은 보기 쉽게 그렸어요.</p>`)}</div>` +
    nextButton();
  const ctx = setupCanvas("#c1", 640, 300),
    hctx = setupCanvas("#c1h", 640, 130);
  let hop = 0;
  let photons = [],
    electrons = [],
    bounced = [],
    heat = 0,
    count = 0;
  const wlInput = $("#wl"),
    br = $("#br");
  /* 막대는 오른쪽으로 갈수록 에너지가 커지도록 파장을 거꾸로 읽는다. */
  const wl = {
    get value() {
      return 1100 - +wlInput.value;
    },
  };
  function update() {
    const E = 1240 / +wl.value;
    $("#wlOut").textContent = wlName(+wl.value);
    $("#vib").textContent =
      `이 빛은 1초에 약 ${Math.round(3e5 / +wl.value / 10) * 10}조 번 떨려요. 빛이 빠르게 떨릴수록 빛 알갱이 하나의 에너지가 커요.`;
    $("#brOut").textContent = `${br.value}%`;
    $("#sE").textContent = `약 ${E.toFixed(1)}eV`;
    const level = +br.value >= 67 ? 2 : +br.value >= 34 ? 1 : 0;
    hop = 0;
    $("#sN").textContent = E > THRESHOLD ? ["적어요", "보통이에요", "많아요"][level] : "없어요";
    $("#res").textContent =
      E > THRESHOLD
        ? "빛 알갱이 하나의 에너지가 문턱보다 커서 금속 안의 전자가 튀어나와요. " +
          [
            "빛이 어두우면 빛 알갱이가 적어서 전자도 적게 나와요.",
            "빛을 더 밝게 하면 전자가 더 많이 나와요.",
            "빛이 밝으면 빛 알갱이가 많아서 전자도 많이 나와요.",
          ][level]
        : "빛 알갱이 하나의 에너지가 문턱보다 작아요. 그래서 빛을 밝게 해도 전자가 나오지 않아요. 빛 알갱이의 일부는 튕겨 나가고, 일부는 금속판에 흡수되어 금속판을 아주 조금 따뜻하게 해요.";
    photons = [];
    electrons = [];
    bounced = [];
    heat = 0;
    count = 0;
  }
  function step() {
    const E = 1240 / +wl.value;
    if (Math.random() < (+br.value / 100) * 0.4) photons.push({ ty: 45 + Math.random() * 210, t: 0 });
    photons = photons.filter(p => {
      p.t += 0.025;
      if (p.t >= 1) {
        if (Math.random() < 0.7) bounced.push({ x: 556, y: p.ty, vx: -4, vy: (Math.random() - 0.5) * 4, life: 1 });
        else if (E > THRESHOLD) {
          const v = 1 + 5 * Math.sqrt(E - THRESHOLD);
          const a = Math.PI + (Math.random() - 0.5) * 2.2;
          electrons.push({ x: 556, y: p.ty, vx: Math.cos(a) * v, vy: Math.sin(a) * v });
          count++;
        } else heat = Math.min(1, heat + 0.12);
        return false;
      }
      return true;
    });
    heat *= 0.985;
    bounced = bounced.filter(b => {
      b.x += b.vx;
      b.y += b.vy;
      b.life -= 0.012;
      return b.life > 0;
    });
    electrons = electrons.filter(e => {
      e.x += e.vx;
      e.y += e.vy;
      return e.x > -10 && e.x < 560 && e.y > -10 && e.y < 310;
    });
  }
  function paint() {
    const color = wlColor(+wl.value),
      E = 1240 / +wl.value;
    nightBg(ctx, 640, 300);
    ctx.globalAlpha = 0.18 + (+br.value / 100) * 0.22;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(100, 120);
    ctx.lineTo(560, 30);
    ctx.lineTo(560, 270);
    ctx.lineTo(100, 150);
    ctx.fill();
    ctx.globalAlpha = 1;
    drawIcon(ctx, "light-bulb", 66, 135, 86);
    const m = ctx.createLinearGradient(560, 0, 580, 0);
    m.addColorStop(0, "#c3cedf");
    m.addColorStop(1, "#8f9db5");
    ctx.fillStyle = m;
    ctx.fillRect(560, 26, 20, 248);
    ctx.fillStyle = `rgba(249, 115, 22, ${heat * 0.85})`;
    ctx.fillRect(560, 26, 20, 248);
    ctx.fillStyle = color;
    photons.forEach(p => {
      ctx.beginPath();
      ctx.arc(100 + 460 * p.t, 135 + (p.ty - 135) * p.t, 1.5 + E * 1.5, 0, 7);
      ctx.fill();
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    bounced.forEach(b => {
      ctx.globalAlpha = b.life;
      ctx.beginPath();
      ctx.arc(b.x, b.y, 1.5 + E * 1.5, 0, 7);
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
    electrons.forEach(e => {
      const g = ctx.createRadialGradient(e.x, e.y, 1, e.x, e.y, 8);
      g.addColorStop(0, "#fff3bf");
      g.addColorStop(1, "#f59f00");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(e.x, e.y, 8, 0, 7);
      ctx.fill();
    });
    label(ctx, "금속판", 570, 292);
    const k = textScale(ctx),
      y0 = k > 1.2 ? 196 : 24,
      gap = 26 * k,
      dot = 7 * k,
      tx = 24 + 14 * k;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(24, y0, dot, 0, 7);
    ctx.fill();
    label(ctx, "빛 알갱이", tx, y0 + 5 * k, 15, "#fff", "left");
    ctx.fillStyle = "#ffc533";
    ctx.beginPath();
    ctx.arc(24, y0 + gap, dot, 0, 7);
    ctx.fill();
    label(ctx, "전자", tx, y0 + gap + 5 * k, 15, "#fff", "left");
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(24, y0 + gap * 2, dot - 1, 0, 7);
    ctx.stroke();
    label(ctx, "튕겨 나가는 빛 알갱이", tx, y0 + gap * 2 + 5 * k, 15, "#fff", "left");
    if (heat > 0.2) label(ctx, "따뜻해져요", 560, 24, 15, "#ffb27a");
  }
  function paintHurdle() {
    const E = 1240 / +wl.value,
      peak = (100 * E) / 3.1,
      wall = (100 * THRESHOLD) / 3.1,
      ground = 118,
      t = reduced ? 0.5 : (hop += 0.012) % 1;
    hctx.fillStyle = "#eef3fb";
    hctx.fillRect(0, 0, 640, 130);
    hctx.fillStyle = "#c9d6ea";
    hctx.fillRect(0, ground, 640, 12);
    hctx.fillStyle = "#8f9db5";
    hctx.fillRect(310, ground - wall, 20, wall);
    label(hctx, "문턱", 320, ground - wall - 6, 14, "#1b2340");
    const x = E > THRESHOLD ? 170 + 300 * t : 170 + 120 * Math.sin(Math.PI * t),
      y = ground - 10 - (E > THRESHOLD ? 4 * peak * t * (1 - t) : peak * Math.sin(Math.PI * t));
    const g = hctx.createRadialGradient(x, y, 1, x, y, 10);
    g.addColorStop(0, "#fff3bf");
    g.addColorStop(1, "#f59f00");
    hctx.fillStyle = g;
    hctx.beginPath();
    hctx.arc(x, y, 10, 0, 7);
    hctx.fill();
    label(hctx, E > THRESHOLD ? "전자가 문턱을 넘어요" : "전자가 문턱을 못 넘어요", 20, 26, 15, "#1b2340", "left");
  }
  const onChange = () => {
    update();
    if (reduced) {
      for (let n = 0; n < 240; n++) step();
      paint();
      paintHurdle();
    }
  };
  wlInput.addEventListener("input", onChange);
  br.addEventListener("input", onChange);
  onChange();
  if (!reduced)
    loop(() => {
      step();
      paint();
      paintHurdle();
    });
}

function labSpecial() {
  $("#stage").innerHTML =
    `<div class="sheet">
    ${mission(["우주선의 속도를 바꿔 보세요.", "두 시계에서 빛이 거울 사이를 오가는 횟수를 비교해 보세요."])}
    <canvas id="c2" aria-label="멈춘 빛 시계와 움직이는 빛 시계를 비교하는 실험"></canvas>
    <div class="control"><label for="v">우주선의 속도<output id="vOut"></output></label><input id="v" type="range" min="0" max="99.5" step="0.5" value="90"></div>
    <div class="stats"><div class="stat"><span>우주선의 시계가 느려지는 정도</span><b id="sG"></b></div><div class="stat"><span>지구에서 10년이 지날 때 우주선 시계의 시간</span><b id="sY"></b></div><div class="stat"><span>멈춰 있을 때 100m인 우주선의 길이</span><b id="sL"></b></div></div>
    <p class="result" id="res"></p>
    ${more("실제 물체는 얼마나 차이 날까요?", COMPARE_TABLE)}
    <p class="note">모든 값은 지구에서 잰 값이에요. 우주선은 일정한 속도로 날고 있다고 생각했어요.</p></div>` +
    nextButton();
  const ctx = setupCanvas("#c2", 640, 300);
  const v = $("#v");
  const top = 62,
    bottom = 172,
    oneWay = 55;
  let b = 0.9,
    g = 1,
    p1 = 0,
    p2 = 0,
    sx = 200,
    trail = [];
  const yOf = p => {
    const k = p % 2;
    return bottom - (bottom - top) * (k < 1 ? k : 2 - k);
  };
  const mirrors = x => {
    ctx.fillStyle = "#dfe7f3";
    ctx.fillRect(x - 40, top - 8, 80, 8);
    ctx.fillRect(x - 40, bottom, 80, 8);
  };
  const dot = (x, y) => {
    ctx.fillStyle = "#ffd166";
    ctx.beginPath();
    ctx.arc(x, y, 7, 0, 7);
    ctx.fill();
  };
  function step() {
    p1 += 1 / oneWay;
    p2 += 1 / (oneWay * g);
    sx += 2 * b;
    if (sx > 640) {
      sx = 200;
      trail = [];
    }
    trail.push([sx, yOf(p2)]);
    if (trail.length > 900) trail.shift();
  }
  function paint() {
    nightBg(ctx, 640, 300);
    ctx.fillStyle = "rgba(255,255,255,.2)";
    ctx.fillRect(170, 0, 2, 300);
    label(ctx, "멈춘 시계", 85, 32);
    mirrors(85);
    dot(85, yOf(p1));
    label(ctx, `왕복 ${Math.floor(p1 / 2)}번`, 85, 215, 16, "#7fd0ff");
    drawIcon(ctx, "globe-showing-asia-australia", 85, 258, 50);
    label(ctx, "움직이는 시계", 405, 32);
    ctx.strokeStyle = "#ffd166";
    ctx.lineWidth = 2;
    ctx.beginPath();
    trail.forEach((q, n) => (n ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1])));
    ctx.stroke();
    mirrors(sx);
    dot(sx, yOf(p2));
    label(ctx, `왕복 ${Math.floor(p2 / 2)}번`, 405, 215, 16, "#ffd166");
    const im = imgOf("rocket");
    if (im.complete) {
      ctx.save();
      ctx.translate(sx, 258);
      ctx.scale(1 / g, 1);
      ctx.rotate(Math.PI / 4);
      ctx.drawImage(im, -36, -36, 72, 72);
      ctx.restore();
    }
  }
  function update() {
    b = +v.value / 100;
    g = 1 / Math.sqrt(1 - b * b);
    p1 = 0;
    p2 = 0;
    sx = 200;
    trail = [];
    $("#vOut").textContent = `빛의 속도의 ${v.value}%`;
    $("#sG").textContent = `약 ${g.toFixed(2)}배`;
    $("#sY").textContent = `약 ${(10 / g).toFixed(1)}년`;
    $("#sL").textContent = `약 ${(100 / g).toFixed(1)}m`;
    $("#res").textContent =
      g < 1.05
        ? "지금은 두 시계의 차이가 아주 작아요. 우주선의 속도를 더 올려 보세요."
        : "움직이는 시계의 빛은 비스듬히 더 먼 길을 가요. 그래서 왕복 횟수가 더 적고, 시계가 더 느리게 가요.";
    if (reduced) {
      for (let n = 0; n < 240; n++) step();
      paint();
    }
  }
  v.addEventListener("input", update);
  update();
  if (!reduced)
    loop(() => {
      step();
      paint();
    });
}

const koNum = n => {
  if (n >= 1e8) return `${(n / 1e8).toLocaleString("ko-KR", { maximumFractionDigits: 1 })}억`;
  if (n >= 1e4) return `${(n / 1e4).toLocaleString("ko-KR", { maximumFractionDigits: 1 })}만`;
  return n.toLocaleString("ko-KR", { maximumFractionDigits: 0 });
};
function labEnergy() {
  const things = [
    ["쌀 한 톨", 0.02, "sheaf-of-rice"],
    ["종이 클립", 1, "paperclip"],
    ["100원 동전", 5.42, "coin"],
    ["사과 한 개", 200, "red-apple"],
  ];
  $("#stage").innerHTML =
    `<div class="sheet">
    ${mission(["물건을 고르거나 막대를 움직여서 질량을 바꿔 보세요.", "그 질량 전부와 맞먹는 전기의 양을 집 그림으로 볼 수 있어요."])}
    <div class="things" id="things">${things.map(t => `<button class="thing" type="button" data-g="${t[1]}">${icon(t[2])}${t[0]} (${t[1]}g)</button>`).join("")}</div>
    <div class="control"><label for="m">질량<output id="mOut"></output></label><input id="m" type="range" min="-2" max="3" step="0.01" value="0"></div>
    <p id="houseCap" class="result"></p><div id="houses"></div>
    <p class="result">질량이 작아도 빛의 속도를 두 번 곱하기 때문에 에너지가 아주 커져요.</p>
    ${more("숫자로 보기", `<div class="stats"><div class="stat"><span>질량 전부와 맞먹는 전기</span><b id="sK"></b></div><div class="stat"><span>집 한 채가 그 전기를 쓸 수 있는 기간</span><b id="sH"></b></div><div class="stat"><span>계산에 쓴 식</span><b>E = mc²</b></div></div>`)}
    ${more("더 알아보기", `<p class="note">집 한 채는 한 달에 전기 300kWh를 쓴다고 어림했고, 물건의 무게도 대략적인 값이에요. 사람은 아직 물건의 질량 전부를 전기로 바꾸지 못해요.</p>`)}</div>` +
    nextButton();
  const m = $("#m");
  function show(g) {
    const kWh = g * 2.5e7,
      years = kWh / 3600;
    $("#mOut").textContent = `${g.toLocaleString("ko-KR", { maximumSignificantDigits: 3 })}g`;
    $("#sK").textContent = `약 ${koNum(kWh)} kWh`;
    $("#sH").textContent = `약 ${koNum(Number(years.toPrecision(2)))}년`;
    const unit = 10 ** Math.max(0, Math.ceil(Math.log10(years)) - 1),
      count = years / unit,
      whole = Math.floor(count);
    $("#houseCap").textContent = `집 그림 1개는 ${koNum(unit)}년 동안 쓸 전기예요.`;
    $("#houses").innerHTML =
      Array.from({ length: whole }, () => icon("house")).join("") +
      (count > whole
        ? icon("house").replace("<img", `<img style="opacity:${Math.max(0.2, count - whole).toFixed(2)}"`)
        : "");
    document
      .querySelectorAll("#things .thing")
      .forEach(b => b.setAttribute("aria-pressed", String(Math.abs(+b.dataset.g - g) < 1e-6)));
  }
  m.addEventListener("input", () => show(Number((10 ** +m.value).toPrecision(3))));
  $("#things").addEventListener("click", e => {
    const b = e.target.closest("[data-g]");
    if (!b) return;
    const g = +b.dataset.g;
    m.value = Math.log10(g);
    show(g);
  });
  show(1);
}

function labGeneral() {
  $("#stage").innerHTML =
    `<div class="sheet">
    ${mission(["별의 질량을 늘려 보세요.", "그다음 빛이 별 가까이 지나가게 바꿔 보세요.", "흰 선이 빛의 길이에요. 어떻게 휘는지 보세요."])}
    <canvas id="c4" aria-label="별 주변의 격자가 완만하게 휘고 빛의 길이 휘는 모습"></canvas>
    <div class="controls">
      <div class="control"><label for="mass">별의 질량<output id="massOut"></output></label><input id="mass" type="range" min="0" max="100" value="70"></div>
      <div class="control"><label for="gap">별과 빛 사이의 거리<output id="gapOut"></output></label><input id="gap" type="range" min="60" max="170" value="100"></div>
    </div>
    <p class="result" id="res"></p>
    ${more("더 알아보기", `<p class="note">휘는 정도를 아주 크게 그렸어요. 공간의 휘어짐은 별에서 멀어질수록 서서히 약해져서 넓고 완만하게 그렸어요. 실제 공간은 평평한 천이 아니라 입체예요. 별빛은 태양 바로 옆을 지날 때도 약 0.0005도만 휘어요.</p>`)}</div>` +
    nextButton();
  const ctx = setupCanvas("#c4", 640, 340);
  const mass = $("#mass"),
    gap = $("#gap");
  const cx = 320,
    cy = 225,
    wide = 125;
  let path = [],
    t = 0;
  function warp(x, y, M) {
    const dx = cx - x,
      dy = cy - y,
      r = Math.hypot(dx, dy) || 1;
    const d = Math.min(r * 0.75, M * 0.95 * (r / wide) * Math.exp((-r * r) / (2 * wide * wide)));
    return [x + (dx / r) * d, y + (dy / r) * d];
  }
  function compute() {
    const M = +mass.value,
      b = +gap.value,
      R = 12 + M * 0.16;
    let x = 0,
      y = cy - b,
      vx = 3,
      vy = 0;
    path = [[x, y]];
    while (x < 650 && x > -10 && y > -20 && y < 360) {
      const dx = cx - x,
        dy = cy - y,
        r2 = dx * dx + dy * dy,
        r = Math.sqrt(r2),
        soft = Math.pow(r2 + 4900, 1.5);
      if (r < R) break;
      vx += (2 * M * dx) / soft;
      vy += (2 * M * dy) / soft;
      const s = Math.hypot(vx, vy);
      vx = (vx / s) * 3;
      vy = (vy / s) * 3;
      x += vx;
      y += vy;
      path.push([x, y]);
    }
    const hit = Math.hypot(cx - x, cy - y) < R;
    $("#massOut").textContent = `${M}`;
    $("#gapOut").textContent = `${b}`;
    $("#res").textContent =
      M === 0
        ? "별의 질량이 0이면 빛은 곧게 지나가요."
        : hit
          ? "빛이 별에 닿았어요. 별과 빛 사이의 거리를 늘려 보세요."
          : "별의 질량이 클수록, 빛이 별에 가까이 지날수록 빛의 길이 더 많이 휘어요.";
    t = 0;
  }
  function paint() {
    const M = +mass.value,
      b = +gap.value,
      R = 12 + M * 0.16;
    nightBg(ctx, 640, 340);
    const well = ctx.createRadialGradient(cx, cy, R, cx, cy, wide * 2);
    well.addColorStop(0, `rgba(5, 8, 25, ${(0.75 * M) / 100})`);
    well.addColorStop(1, "rgba(5, 8, 25, 0)");
    ctx.fillStyle = well;
    ctx.fillRect(0, 0, 640, 340);
    ctx.strokeStyle = "#6476bd";
    ctx.lineWidth = 1.2;
    ctx.lineCap = "butt";
    for (let a = 0; a <= 640; a += 40) {
      ctx.beginPath();
      for (let s = 0; s <= 340; s += 8) {
        const p = warp(a, s, M);
        s ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
      }
      ctx.stroke();
    }
    for (let a = 5; a <= 340; a += 40) {
      ctx.beginPath();
      for (let s = 0; s <= 640; s += 8) {
        const p = warp(s, a, M);
        s ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1]);
      }
      ctx.stroke();
    }
    ctx.setLineDash([6, 7]);
    ctx.strokeStyle = "#7fd0ff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, cy - b);
    ctx.lineTo(640, cy - b);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    path.forEach((p, n) => (n ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
    ctx.stroke();
    drawIcon(ctx, "sun", cx, cy, R * 2.6);
    if (path.length) {
      const p = path[Math.min(Math.floor(t), path.length - 1)];
      ctx.fillStyle = "#ffd166";
      ctx.beginPath();
      ctx.arc(p[0], p[1], 6, 0, 7);
      ctx.fill();
    }
    label(ctx, "별이 없을 때 빛이 가는 길", 12, Math.max(26, cy - b - 8), 14, "#7fd0ff", "left");
    t = t >= path.length ? 0 : t + 2;
  }
  const onChange = () => {
    compute();
    if (reduced) {
      t = path.length - 1;
      paint();
    }
  };
  mass.addEventListener("input", onChange);
  gap.addEventListener("input", onChange);
  onChange();
  if (!reduced) loop(paint);
}
