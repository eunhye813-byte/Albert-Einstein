/* ---------- 그림 설명서 ---------- */
const photon = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
const row = (y, c, name, r, xs = [80, 118, 156, 194, 232, 270]) =>
  ic("light-bulb", 14, y - 26, 48) + txt(TS > 1 ? 54 : 38, y + 38, name, 14) + xs.map(x => photon(x, y, r, c)).join("");
const leap = (y, x) =>
  elec(x, y - 28, 9) +
  `<path d="M298 ${y - 6} L${x + 11} ${y - 25}" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`;
/* 휴대폰에서는 그림 전체가 줄어들므로, 그림 설명서의 글자를 키워 그린다. */
TS = window.innerWidth <= 620 ? 1.35 : 1;
const GUIDE = {
  photo: {
    title: "빛의 색에 따라 결과가 달라요",
    art: svg(
      480,
      370,
      "빨간빛에서는 전자가 나오지 않고, 초록빛에서는 느린 전자가, 파란빛에서는 빠른 전자가, 밝은 파란빛에서는 더 많은 전자가 빛을 받은 쪽에서 튀어나오는 그림",
      `<rect width="480" height="370" fill="#fff8ec"/>` +
        metal(300, 14, 18, 342) +
        row(52, RED, "빨간빛", 6) +
        tag(400, 58, "전자가 안 나와요", "#fde4e4", INK, 14) +
        row(138, GREEN, "초록빛", 9) +
        leap(138, 262) +
        tag(400, 144, "느린 전자", "#ffffff", INK, 14) +
        row(224, BLUE, "파란빛", 12) +
        leap(224, 208) +
        tag(400, 230, "빠른 전자", "#ffffff", INK, 14) +
        row(310, BLUE, "밝은 파란빛", 8, [80, 104, 128, 152, 176, 200, 224, 248, 272]) +
        elec(268, 256, 9) +
        elec(214, 272, 9) +
        elec(160, 288, 9) +
        `<path d="M298 282 L279 259M298 290 L225 274M298 298 L171 289" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>` +
        tag(400, 316, "전자가 더 많이", "#d9f5e6", INK, 14),
    ),
    steps: [
      [
        "빛은 알갱이처럼 움직여요",
        ["빛의 에너지는 알갱이 단위로 전달돼요.", "과학자들은 이 빛 알갱이를 광자라고 불러요."],
      ],
      [
        "전자가 나오려면 문턱을 넘어야 해요",
        [
          "전자가 금속 밖으로 나오려면 정해진 양 이상의 에너지가 필요해요.",
          "이 양을 문턱이라고 불러요.",
          "빛 알갱이 하나의 에너지가 문턱보다 작으면 전자는 나오지 않아요.",
        ],
      ],
      [
        "밝기와 색은 하는 일이 달라요",
        [
          "전자는 빛을 받은 쪽 표면에서 튀어나와요.",
          "빛이 밝아지면 빛 알갱이가 많아져서 튀어나오는 전자의 수가 늘어요.",
          "빛이 파란색 쪽으로 갈수록 전자가 더 빠르게 나와요.",
        ],
      ],
    ],
    cases:
      more(
        "빛의 떨림과 에너지",
        `<div class="lines"><p>빛은 아주 빠르게 떨리면서 나아가요.</p><p>빛이 빠르게 떨릴수록 빛 알갱이 하나의 에너지가 커요.</p><p>빛의 밝기는 떨리는 빠르기가 아니라 빛 알갱이의 수와 관련이 있어요.</p></div><div class="stats"><div class="stat"><span>빨간빛이 1초에 떨리는 횟수</span><b>약 460조 번</b></div><div class="stat"><span>파란빛이 1초에 떨리는 횟수</span><b>약 670조 번</b></div><div class="stat"><span>더 큰 에너지를 가진 알갱이</span><b>파란빛</b></div></div><p class="note">떨림 자체가 에너지는 아니에요. 흡수된 에너지가 열이 되면 금속의 원자가 더 활발하게 떨리는데, 이 떨림은 빛의 떨림과 다른 현상이에요.</p>`,
      ) +
      more(
        "빛 알갱이가 금속판에 닿으면 어떻게 될까요?",
        `<div class="cases">
      <div class="case">${svg(160, 90, "빛 알갱이가 금속판에서 튕겨 나가는 그림", `<rect width="160" height="90" fill="#fff8ec"/>` + metal(122, 8, 14, 74) + `<path d="M20 18 L118 45" stroke="${RED}" stroke-width="3"/><path d="M118 45 L20 72" stroke="${RED}" stroke-width="3" stroke-dasharray="5 5"/>` + photon(20, 18, 7, RED) + photon(20, 72, 7, RED))}<b>튕겨 나가요</b><p>빛 알갱이가 금속 표면에서 반사돼요. 그래서 금속이 반짝여 보여요.</p></div>
      <div class="case">${svg(160, 90, "빛 알갱이가 흡수되어 금속판이 따뜻해지는 그림", `<rect width="160" height="90" fill="#fff8ec"/>` + metal(100, 8, 14, 74) + `<rect x="100" y="8" width="14" height="74" rx="5" fill="#f97316" opacity=".75"/><path d="M20 45 L96 45" stroke="${RED}" stroke-width="3"/><path d="M126 60 q7 -7 0 -14 q-7 -7 0 -14M142 66 q7 -7 0 -14 q-7 -7 0 -14" fill="none" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>` + photon(20, 45, 7, RED))}<b>흡수되어 열이 돼요</b><p>금속 안의 전자가 빛 알갱이의 에너지를 받아요.</p><p>전자는 문턱을 넘지 못해서 금속 안에 남아요.</p><p>전자가 금속의 원자에 에너지를 나눠 줘요.</p><p>원자가 더 활발하게 떨리면서 금속판이 아주 조금 따뜻해져요.</p></div>
      <div class="case">${svg(160, 90, "에너지가 충분한 빛 알갱이가 흡수되어 전자가 튀어나오는 그림", `<rect width="160" height="90" fill="#fff8ec"/>` + metal(122, 8, 14, 74) + `<path d="M20 62 L118 62" stroke="${BLUE}" stroke-width="3"/><path d="M118 42 L70 22" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>` + photon(20, 62, 8, BLUE) + elec(60, 18, 9))}<b>전자가 튀어나와요</b><p>금속 안의 전자가 빛 알갱이의 에너지를 받아요.</p><p>에너지가 문턱보다 크면 전자가 금속 밖으로 튀어나올 수 있어요.</p></div>
    </div><p class="note">금속에서 튀어나오는 것은 전자이고, 금속 표면에서 튕겨 나가는 것은 빛 알갱이예요.</p>`,
      ),
    life: { icon: "camera", text: ["디지털카메라의 센서와 태양전지에서도 빛 알갱이가 전자를 움직여요."] },
    note: "그림은 나트륨처럼 초록빛부터 전자가 나오는 금속을 예로 들었어요. 금속마다 문턱은 달라요.",
  },
  special: {
    title: "빛 시계로 시간이 느려지는 까닭을 볼까요?",
    art: svg(
      320,
      170,
      "멈춘 빛 시계와 움직이는 빛 시계를 비교하는 움직이는 그림",
      bg(320, 170, "gNight") +
        clockPair() +
        txt(55, 26, "멈춘 시계", 13, "#fff") +
        txt(205, 26, "움직이는 시계 →", 13, "#fff") +
        txt(55, 156, "빛의 길이 짧아요", 12, "#fff") +
        txt(205, 156, "빛의 길이 더 길어요", 12, "#fff"),
    ),
    steps: [
      ["빛의 속도는 똑같아요", ["빛은 진공에서 1초에 약 30만 km를 가요.", "빛의 속도는 누가 재도 똑같아요."]],
      [
        "움직이는 시계의 빛은 더 먼 길을 가요",
        [
          "빛 시계는 거울 두 장 사이를 빛이 오가며 시간을 재는 상상 속 시계예요.",
          "속도가 같은 빛이 더 먼 길을 가면 시간이 더 걸려요.",
          "그래서 움직이는 시계는 밖에서 재면 더 느리게 가요.",
        ],
      ],
      [
        "물체의 길이도 달라져요",
        [
          "빠르게 움직이는 물체는 밖에서 재면 움직이는 방향으로 더 짧아져요.",
          "하지만 우주선 안의 사람에게는 모든 것이 평소와 같아요.",
        ],
      ],
    ],
    cases: more("빠르기에 따라 시간이 얼마나 차이 날까요?", COMPARE_TABLE) + NAME_TABLE,
    life: {
      icon: "satellite",
      text: [
        "GPS 위성은 아주 빠르게 움직여요.",
        "속도의 효과만 따지면 위성의 시계는 땅의 시계보다 아주 조금 느려져요.",
      ],
      more: ["속도의 효과만 따지면 위성의 시계는 하루에 약 7마이크로초 느려져요.", "1마이크로초는 100만분의 1초예요."],
    },
  },
  energy: {
    title: "E = mc²을 하나씩 뜯어 볼까요?",
    art: svg(
      480,
      236,
      "E는 m 곱하기 c 곱하기 c이고, 1그램은 약 2500만 킬로와트시와 맞먹는다는 그림",
      `<rect width="480" height="236" fill="#fff8ec"/>` +
        [
          [58, "E", "에너지", "#ffd166"],
          [176, "m", "질량", "#a7d8ff"],
          [294, "c", "빛의 속도", "#ffc9d1"],
          [412, "c", "빛의 속도", "#ffc9d1"],
        ]
          .map(
            b =>
              `<rect x="${b[0] - 48}" y="20" width="96" height="84" rx="14" fill="${b[3]}"/>` +
              txt(b[0], 62, b[1], 34) +
              txt(b[0], 90, b[2], 13),
          )
          .join("") +
        txt(117, 70, "=", 26) +
        txt(235, 70, "×", 26) +
        txt(353, 70, "×", 26) +
        ic("paperclip", 22, 122, 60) +
        txt(TS > 1 ? 40 : 52, 204, "질량 1g", 15) +
        txt(104, 160, "=", 28) +
        ic("high-voltage", 136, 122, 60) +
        txt(166, 204, "약 2,500만 kWh", 15) +
        txt(232, 160, "=", 28) +
        ic("house", 250, 122, 60) +
        txt(382, 142, "집 한 채가", 15) +
        txt(382, 164, "약 7천 년 동안", 15) +
        txt(382, 186, "쓸 전기", 15),
    ),
    steps: [
      [
        "c는 아주 큰 수예요",
        ["빛의 속도는 1초에 약 3억 m예요.", "이 수를 두 번 곱하면 9 뒤에 0이 16개 붙는 수가 돼요."],
      ],
      ["그래서 작은 질량도 큰 에너지와 맞먹어요", ["질량이 아주 작아도 이 큰 수를 곱하면 에너지가 엄청나게 커져요."]],
      [
        "질량을 전부 바꾸기는 어려워요",
        [
          "보통은 물질의 아주 작은 일부만 에너지로 바뀌어요.",
          "원자력 발전에서 우라늄이 쪼개질 때도 약 0.1%의 질량만 에너지로 바뀌어요.",
        ],
      ],
    ],
    cases:
      more(
        "질량이 빛으로 쪼개지는 건가요?",
        `<div class="lines"><p>아니에요. 질량이 그대로 빛으로 쪼개지는 것은 아니에요.</p><p>원자핵이 합쳐지거나 쪼개지면 결과물이 처음보다 조금 가벼워져요.</p><p>줄어든 질량만큼 에너지가 빛과 열로 나와요.</p></div>`,
      ) +
      more(
        "왜 빛의 속도가 식에 들어 있나요?",
        `<div class="lines"><p>빛이 에너지 변환에 쓰이는 것은 아니에요.</p><p>c는 우주에서 정해진 빠르기이고, c²은 질량을 에너지로 바꿔 계산해 주는 수예요.</p><p>돈을 바꿀 때 쓰는 환율과 비슷해요. (이해를 돕는 비유예요.)</p></div>`,
      ) +
      more(
        "핵융합이 무엇인가요?",
        `${svg(
          320,
          150,
          "수소 원자핵 네 개가 합쳐져 헬륨 원자핵이 되는 움직이는 그림",
          bg(320, 150, "gNight") +
            stars(320, 150) +
            [
              [34],
              [34],
              [116],
              [116],
            ]
              .map(
                c =>
                  `<circle r="11" fill="#7fd0ff"><animate attributeName="cx" values="${c[0]};160;160" keyTimes="0;.45;1" dur="4s" repeatCount="indefinite"/><animate attributeName="cy" values="${c[1]};75;75" keyTimes="0;.45;1" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.44;.46;1" dur="4s" repeatCount="indefinite"/></circle>`,
              )
              .join("") +
            `<circle cx="160" cy="75" r="18" fill="#ffd166" opacity="0"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.44;.46;1" dur="4s" repeatCount="indefinite"/></circle>` +
            afterFusion(txt(160, 80, "헬륨", 13)) +
            txt(50, 62, "수소", 12, "#7fd0ff") +
            txt(270, 62, "수소", 12, "#7fd0ff"),
        )}
    <div class="lines"><p>핵융합은 가벼운 원자핵들이 합쳐져 더 무거운 원자핵이 되는 현상이에요.</p><p>태양의 중심은 1,500만 도가 넘어서 수소 원자핵들이 합쳐질 수 있어요.</p><p>수소 원자핵 4개가 헬륨 원자핵 1개가 되면 질량이 약 0.7% 줄어들어요.</p></div>`,
      ),
    life: {
      icon: "sun",
      text: [
        "태양은 1초에 수소 약 6억 톤을 헬륨으로 바꿔요.",
        "이때 약 400만 톤의 질량이 줄어들고, 그만큼이 빛과 열의 에너지가 돼요.",
      ],
    },
    note: "kWh는 전기의 양을 재는 단위예요. 집 한 채는 한 달에 전기 300kWh를 쓴다고 어림했어요.",
  },
  general: {
    title: "일식 때 별의 자리가 달라 보여요",
    art: svg(
      480,
      300,
      "일식 때 코로나가 보이고 별빛이 태양 옆을 지나며 휘어 지구에서 다른 자리에 보이는 움직이는 그림",
      `<rect width="480" height="300" fill="#090d24"/><defs><radialGradient id="gCorona2"><stop offset=".4" stop-color="#ffffff"/><stop offset=".55" stop-color="#e6eeff" stop-opacity=".85"/><stop offset=".78" stop-color="#b9cbff" stop-opacity=".25"/><stop offset="1" stop-color="#b9cbff" stop-opacity="0"/></radialGradient></defs>` +
        stars(480, 300) +
        `<circle cx="240" cy="170" r="90" fill="url(#gCorona2)"/><circle cx="240" cy="170" r="36" fill="#05070f"/><path d="M22 90 H188 Q240 90 277 97 L447 125" fill="none" stroke="#fff" stroke-width="3.5"/><path d="M447 125 L22 56" stroke="#7fd0ff" stroke-width="2.5" stroke-dasharray="7 7"/><g><circle r="6" fill="#ffd166"/><animateMotion dur="4s" repeatCount="indefinite" path="M22 90 H188 Q240 90 277 97 L447 125"/></g>` +
        ic("glowing-star", 6, 74, 32) +
        `<circle cx="22" cy="56" r="10" fill="none" stroke="#7fd0ff" stroke-width="2.5"/>` +
        ic("globe-showing-asia-australia", 438, 106, 36) +
        tag(100, 116, "실제 별의 자리", "#ffffff", INK, 13) +
        tag(140, 40, "지구에서 보이는 자리", "#7fd0ff", INK, 13) +
        tag(442, 164, "지구", "#ffffff", INK, 13) +
        txt(240, 272, "일식", 12, "#fff") +
        txt(240, 292, "휘는 정도를 아주 크게 그린 그림이에요.", 12, "#fff"),
    ),
    steps: [
      [
        "무거운 천체가 공간을 휘게 해요",
        ["태양 같은 천체는 주변의 공간과 시간을 휘게 해요.", "지구는 그 휘어진 곳을 따라 태양 둘레를 돌아요."],
      ],
      [
        "빛도 휘어진 길을 따라가요",
        [
          "별빛은 태양 바로 옆을 지날 때 약 0.0005도 휘어요.",
          "아인슈타인은 1915년에 완성한 이론으로 이 값을 계산했어요.",
        ],
      ],
      [
        "일식 때 별의 자리를 재 보았어요",
        [
          "일식은 달이 태양을 가리는 현상이에요. 지구가 가리는 것이 아니에요.",
          "일식 때는 하늘이 어두워져서 태양 근처의 별이 보여요.",
          "과학자들은 1919년 일식 때 별 사진을 찍어 별의 자리를 비교했어요.",
        ],
      ],
    ],
    cases:
      more(
        "GPS 위성과 땅의 시간은 왜 다를까요?",
        `${svg(480, 255, "지구에서 멀어질수록 중력이 약해지고 위성의 시계가 땅의 시계보다 빠르게 가는 움직이는 그림", gpsScene())}<div class="lines"><p>높은 곳에서는 중력이 더 커지는 것이 아니라 더 약해져요.</p><p>중력이 약한 곳일수록 시간이 조금 더 빠르게 흘러요.</p><p>GPS 위성은 약 2만 km 높이에 있어서 땅보다 중력이 약해요.</p></div>`,
      ) + NAME_TABLE,
    life: {
      icon: "mobile-phone",
      text: [
        "GPS 위성의 시계는 땅의 시계보다 아주 조금 빠르게 가요.",
        "이 차이를 그대로 두면 위치가 하루에 약 11km나 틀어질 수 있어요.",
        "그래서 GPS는 이 차이를 바로잡아요.",
      ],
      more: [
        "중력의 효과만 따지면 위성의 시계는 하루에 약 45마이크로초 빨라져요.",
        "속도의 효과까지 합치면 위성의 시계는 하루에 약 38마이크로초 빨라요.",
        "1마이크로초는 100만분의 1초예요.",
      ],
    },
  },
};
TS = 1;
