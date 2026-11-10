/* ---------- 만화 ---------- */
const COMIC = {
  photo: [
    {
      who: "하나",
      say: ["제가 금속판에 빨간빛을 아주 세게 비췄어요.", "그런데 금속판에서 전자가 하나도 나오지 않아요!"],
      art: svg(
        320,
        170,
        "전구가 금속판에 빨간빛을 비추지만 전자가 나오지 않는 그림",
        bg(320, 170, "gWarm") +
          ic("light-bulb", 22, 52, 66) +
          beam(84, 85, 214, 30, 140, RED, 0.4) +
          metal(214, 24, 18, 122) +
          tag(270, 92, "전자 0개"),
      ),
    },
    {
      who: "아인슈타인",
      say: ["하나야, 이번에는 금속판에 파란빛을 약하게 비춰 보렴.", "그러면 금속판 안에 있던 전자가 튀어나올 거야."],
      art: svg(
        320,
        170,
        "전구가 파란빛을 약하게 비추자 금속판에서 전자가 튀어나오는 그림",
        bg(320, 170, "gSky") +
          ic("light-bulb", 22, 52, 66) +
          beam(84, 85, 214, 50, 120, BLUE, 0.25) +
          metal(214, 18, 18, 112) +
          elec(188, 28) +
          elec(150, 36) +
          elec(188, 140) +
          elec(150, 132) +
          tag(275, 80, "전자 나와요"),
      ),
    },
    {
      who: "아인슈타인",
      say: ["빛은 에너지 알갱이처럼 움직인단다.", "파란빛 알갱이 하나는 빨간빛 알갱이 하나보다 에너지가 더 커."],
      art: svg(
        320,
        170,
        "작은 빨간빛 알갱이와 큰 파란빛 알갱이를 비교한 그림",
        bg(320, 170, "gSky") +
          `<circle cx="90" cy="82" r="20" fill="${RED}"/><circle cx="225" cy="82" r="44" fill="${BLUE}"/>` +
          tag(90, 34, "에너지가 작아요") +
          tag(225, 28, "에너지가 커요") +
          txt(90, 130, "빨간빛 알갱이", 15) +
          txt(225, 150, "파란빛 알갱이", 15),
      ),
    },
    {
      who: "하나",
      say: ["파란빛을 더 밝게 비췄더니 금속판에서 전자가 더 많이 튀어나와요!"],
      art: svg(
        320,
        170,
        "밝은 파란빛을 비추자 금속판의 빛을 받은 쪽에서 전자가 많이 튀어나오는 그림",
        bg(320, 170, "gSky") +
          ic("light-bulb", 22, 52, 66) +
          beam(84, 85, 214, 18, 130, BLUE, 0.5) +
          metal(214, 18, 18, 112) +
          elec(192, 34) +
          elec(164, 58) +
          elec(196, 74) +
          elec(150, 92) +
          elec(186, 108) +
          elec(160, 124) +
          tag(275, 80, "전자 많아요"),
      ),
    },
    {
      who: "아인슈타인",
      say: ["밝은 빛에는 빛 알갱이가 더 많이 들어 있단다.", "빛 알갱이가 많으면 튀어나오는 전자도 많아져."],
      art: svg(
        320,
        170,
        "어두운 빛은 빛 알갱이와 전자가 적고 밝은 빛은 빛 알갱이와 전자가 많은 것을 비교한 그림",
        bg(320, 170, "gWarm") +
          tag(82, 28, "어두운 빛") +
          tag(238, 28, "밝은 빛") +
          [
            [56, 62],
            [108, 88],
            [62, 112],
          ]
            .map(c => `<circle cx="${c[0]}" cy="${c[1]}" r="9" fill="${BLUE}"/>`)
            .join("") +
          [
            [184, 58],
            [214, 52],
            [244, 60],
            [276, 54],
            [194, 86],
            [228, 84],
            [262, 88],
            [184, 114],
            [216, 112],
            [250, 116],
            [282, 112],
          ]
            .map(c => `<circle cx="${c[0]}" cy="${c[1]}" r="9" fill="${BLUE}"/>`)
            .join("") +
          elec(86, 146) +
          elec(196, 146) +
          elec(238, 146) +
          elec(280, 146),
      ),
    },
    {
      who: "하나",
      say: [
        "아, 뽑기 기계와 비슷하네요!",
        "500원을 넣어야 움직이는 기계는 10원짜리 동전을 아무리 많이 넣어도 움직이지 않으니까요.",
      ],
      art: svg(
        320,
        170,
        "10원 동전 여러 개로는 500원 뽑기 기계가 움직이지 않는 비유 그림",
        bg(320, 170, "gWarm") +
          ic("coin", 30, 42, 44) +
          ic("coin", 72, 66, 44) +
          ic("coin", 26, 92, 44) +
          txt(62, 156, "10원 동전 여러 개", 13) +
          `<path d="M130 85 H165" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M158 77 L168 85 L158 93" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><rect x="185" y="18" width="104" height="136" rx="16" fill="#f43f5e"/><circle cx="237" cy="66" r="36" fill="#fff"/><circle cx="224" cy="62" r="10" fill="#ffd166"/><circle cx="248" cy="74" r="10" fill="#60a5fa"/><circle cx="244" cy="50" r="10" fill="#34d399"/>` +
          tag(237, 134, "500원만 돼요"),
      ),
    },
    {
      who: "하나",
      say: ["그런데 전자를 내보내지 못한 빨간빛 알갱이는 어디로 가요?"],
      art: svg(
        320,
        170,
        "빨간빛 알갱이가 금속판을 향해 가는 그림",
        bg(320, 170, "gWarm") +
          ic("light-bulb", 22, 52, 66) +
          [100, 136, 172].map(x => `<circle cx="${x}" cy="85" r="9" fill="${RED}"/>`).join("") +
          metal(214, 24, 18, 122) +
          ic("red-question-mark", 250, 58, 54),
      ),
    },
    {
      who: "아인슈타인",
      say: [
        "일부는 금속판에서 튕겨 나가고, 일부는 금속판에 흡수된단다.",
        "금속 안의 전자가 그 에너지를 받아서 금속의 원자에 나눠 준단다.",
        "그러면 원자가 더 활발하게 떨리면서 금속판이 아주 조금 따뜻해져.",
      ],
      art: svg(
        320,
        170,
        "빨간빛 알갱이의 일부는 금속판에서 튕겨 나가고 일부는 흡수되어 금속판을 따뜻하게 하는 그림",
        bg(320, 170, "gWarm") +
          metal(214, 24, 18, 122) +
          `<rect x="214" y="92" width="18" height="54" rx="5" fill="#f97316" opacity=".8"/><path d="M40 34 L205 58" stroke="${RED}" stroke-width="3"/><path d="M205 58 L60 76" stroke="${RED}" stroke-width="3" stroke-dasharray="6 6"/><path d="M40 118 L205 118" stroke="${RED}" stroke-width="3"/><path d="M246 104 q8 -8 0 -16 q-8 -8 0 -16M262 118 q8 -8 0 -16 q-8 -8 0 -16" fill="none" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>` +
          `<circle cx="40" cy="34" r="8" fill="${RED}"/><circle cx="60" cy="76" r="8" fill="${RED}"/><circle cx="40" cy="118" r="8" fill="${RED}"/>` +
          tag(112, 26, "튕겨 나가요") +
          tag(110, 150, "흡수되어 열이 돼요"),
      ),
    },
  ],
  special: [
    {
      who: "아인슈타인",
      say: [
        "달리는 기차 안에서 누군가 공을 앞으로 던진다고 생각해 보렴.",
        "밖에 있는 사람이 재면 공의 속도에 기차의 속도가 더해진단다.",
      ],
      art: svg(
        320,
        170,
        "달리는 기차 앞으로 공이 날아가는 움직이는 그림",
        bg(320, 170, "gSky") +
          `<rect y="134" width="320" height="36" fill="#c9e7b8"/><path d="M0 150 H320" stroke="#7fa768" stroke-width="5" stroke-dasharray="22 18"><animate attributeName="stroke-dashoffset" from="0" to="40" dur=".35s" repeatCount="indefinite"/></path><g stroke="#7a8fb5" stroke-width="3" stroke-linecap="round"><path d="M4 60 H30"/><path d="M0 84 H22"/><path d="M6 108 H34"/><animate attributeName="opacity" values="1;.3;1" dur=".5s" repeatCount="indefinite"/></g>` +
          ic("bullet-train", 28, 40, 100, 0, true) +
          `<g>${ic("baseball", -15, -15, 30)}<animateMotion dur="1.3s" repeatCount="indefinite" path="M140 84 H300"/></g>` +
          tag(210, 34, "공의 속도 + 기차의 속도"),
      ),
    },
    {
      who: "아인슈타인",
      say: [
        "그런데 빛은 달라.",
        "우주선이 앞으로 빛을 쏘아도, 밖에 있는 사람이 재는 빛의 속도는 똑같아.",
        "빛의 속도는 1초에 약 30만 km란다.",
      ],
      art: svg(
        320,
        170,
        "우주선이 날아가며 앞으로 빛을 쏘는 움직이는 그림",
        bg(320, 170, "gNight") +
          `<g><g fill="#fff"><circle cx="30" cy="30" r="1.8"/><circle cx="110" cy="130" r="1.8"/><circle cx="210" cy="30" r="1.8"/><circle cx="290" cy="140" r="1.8"/><circle cx="350" cy="30" r="1.8"/><circle cx="430" cy="130" r="1.8"/><circle cx="530" cy="30" r="1.8"/><circle cx="610" cy="140" r="1.8"/></g><animateTransform attributeName="transform" type="translate" from="0 0" to="-320 0" dur="2.5s" repeatCount="indefinite"/></g><path d="M118 90 H300" stroke="#ffd166" stroke-width="6" stroke-dasharray="26 14"><animate attributeName="stroke-dashoffset" from="40" to="0" dur=".3s" repeatCount="indefinite"/></path>` +
          ic("rocket", 26, 48, 84, 45) +
          tag(208, 50, "빛의 속도는 똑같아요"),
      ),
    },
    {
      who: "하나",
      say: ["빛의 속도가 변하지 않는다면, 무엇이 달라지는 거예요?"],
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
    },
    {
      who: "아인슈타인",
      say: [
        "이 빛 시계를 보렴. 빛이 거울 사이를 한 번 오가면 시계가 한 번 째깍해.",
        "움직이는 시계의 빛은 더 먼 길을 가야 하니 한 번 오가는 데 시간이 더 걸린단다.",
        "그래서 지구에서 재면 빠른 우주선의 시계는 더 느리게 가.",
      ],
      art: svg(
        320,
        170,
        "빛의 속도의 90%로 나는 우주선의 시간이 지구보다 느리게 흐르는 막대 그림",
        bg(320, 170, "gNight") +
          stars(320, 170) +
          txt(160, 26, "빛의 속도의 90%로 날 때", 14, "#fff") +
          ic("globe-showing-asia-australia", 14, 40, 34) +
          `<rect x="58" y="50" width="244" height="14" rx="7" fill="#2a3566"/><rect x="58" y="50" height="14" rx="7" fill="#7fd0ff" width="0"><animate attributeName="width" values="0;244;244" keyTimes="0;.9;1" dur="6s" repeatCount="indefinite"/></rect>` +
          txt(180, 84, "지구의 시계: 10년", 13, "#7fd0ff") +
          `${ic("rocket", 14, 100, 34, 45)}<rect x="58" y="110" width="244" height="14" rx="7" fill="#2a3566"/><rect x="58" y="110" height="14" rx="7" fill="#ffd166" width="0"><animate attributeName="width" values="0;107;107" keyTimes="0;.9;1" dur="6s" repeatCount="indefinite"/></rect>` +
          txt(180, 144, "우주선의 시계: 약 4.4년", 13, "#ffd166"),
      ),
    },
  ],
  energy: [
    {
      who: "하나",
      say: ["이 종이 클립의 무게는 1g쯤이에요.", "이렇게 작은 클립도 큰 에너지와 맞먹나요?"],
      art: svg(
        320,
        170,
        "1그램쯤 되는 종이 클립",
        bg(320, 170, "gWarm") +
          ic("paperclip", 112, 24, 96) +
          tag(160, 148, "종이 클립 약 1g") +
          ic("red-question-mark", 226, 26, 44),
      ),
    },
    {
      who: "아인슈타인",
      say: ["이 식을 보렴.", "E는 에너지, m은 질량, c는 빛의 속도란다."],
      art: svg(
        320,
        170,
        "E는 m 곱하기 c 곱하기 c라는 식",
        bg(320, 170, "gSky") +
          txt(160, 74, "E = m × c × c", 36, "#be123c") +
          txt(160, 118, "에너지 = 질량 × 빛의 속도 × 빛의 속도", 14),
      ),
    },
    {
      who: "아인슈타인",
      say: [
        "빛의 속도는 아주 큰 수이고, 이 식은 그 수를 두 번 곱한단다.",
        "그래서 1g의 질량은 집 한 채가 약 7천 년 동안 쓸 전기와 맞먹어.",
      ],
      art: svg(
        320,
        170,
        "1그램의 질량이 집 한 채가 약 7천 년 동안 쓸 전기와 맞먹는다는 그림",
        bg(320, 170, "gWarm") +
          ic("paperclip", 22, 38, 72) +
          txt(58, 130, "1g", 18) +
          txt(118, 84, "=", 30) +
          ic("high-voltage", 140, 34, 54) +
          ic("house", 196, 34, 54) +
          ic("house", 250, 34, 54) +
          tag(222, 118, "약 2,500만 kWh", "#be123c", "#ffffff", 15) +
          txt(222, 148, "집 한 채가 약 7천 년 쓸 전기", 13),
      ),
    },
    {
      who: "하나",
      say: ["그러면 질량이 빛으로 쪼개져서 에너지가 되는 거예요?", "빛의 속도는 왜 식에 들어 있어요?"],
      art: svg(
        320,
        170,
        "질량과 에너지 사이의 빛의 속도를 궁금해하는 그림",
        bg(320, 170, "gSky") +
          ic("paperclip", 30, 50, 70) +
          txt(130, 92, "→", 30) +
          ic("high-voltage", 160, 50, 70) +
          ic("red-question-mark", 240, 50, 60),
      ),
    },
    {
      who: "아인슈타인",
      say: [
        "질량이 빛으로 쪼개지는 것은 아니란다. 원자핵이 합쳐지거나 쪼개지면 결과물이 처음보다 조금 가벼워져. 줄어든 질량만큼 에너지가 나오지.",
        "빛의 속도가 에너지를 만드는 것도 아니야. c²은 질량을 에너지로 바꿔 계산해 주는 환율과 비슷하단다.",
      ],
      art: svg(
        320,
        170,
        "질량을 에너지로 계산하는 c 제곱을 환율에 빗댄 그림",
        bg(320, 170, "gWarm") +
          tag(70, 50, "질량", "#a7d8ff", INK, 16) +
          tag(250, 50, "에너지", "#ffd166", INK, 16) +
          `<path d="M108 45 H200" stroke="${INK}" stroke-width="3" stroke-linecap="round"/><path d="M192 37 L204 45 L192 53" fill="none" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>` +
          tag(154, 90, "× c²", "#ffffff", "#be123c", 20) +
          txt(160, 132, "돈을 바꿀 때 쓰는 환율과 비슷해요", 14) +
          txt(160, 152, "(이해를 돕는 비유예요)", 12),
      ),
    },
    {
      who: "아인슈타인",
      say: [
        "태양의 중심에서는 수소 원자핵 4개가 합쳐져 헬륨 원자핵 1개가 돼. 이것이 핵융합이란다.",
        "헬륨은 처음 수소 4개보다 약 0.7% 가벼워. 그 줄어든 질량이 빛과 열의 에너지가 되지.",
        "태양은 1초에 수소 약 6억 톤을 헬륨으로 바꾸고, 이때 약 400만 톤의 질량이 줄어든단다.",
      ],
      art: svg(
        320,
        170,
        "수소 원자핵 네 개가 합쳐져 헬륨 원자핵이 되고 에너지가 나오는 움직이는 핵융합 그림",
        bg(320, 170, "gNight") +
          stars(320, 170) +
          [
            [60, 40],
            [260, 40],
            [60, 130],
            [260, 130],
          ]
            .map(
              c =>
                `<circle r="12" fill="#7fd0ff"><animate attributeName="cx" values="${c[0]};160;160" keyTimes="0;.45;1" dur="4s" repeatCount="indefinite"/><animate attributeName="cy" values="${c[1]};85;85" keyTimes="0;.45;1" dur="4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.44;.46;1" dur="4s" repeatCount="indefinite"/></circle>`,
            )
            .join("") +
          `<circle cx="160" cy="85" r="20" fill="#ffd166" opacity="0"><animate attributeName="opacity" values="0;0;1;1" keyTimes="0;.44;.46;1" dur="4s" repeatCount="indefinite"/></circle><g stroke="#fff4b8" stroke-width="3" stroke-linecap="round" opacity="0"><path d="M160 50 V24M160 120 V146M125 85 H96M195 85 H224M136 60 L116 40M184 60 L204 40M136 110 L116 130M184 110 L204 130"/><animate attributeName="opacity" values="0;0;1;0" keyTimes="0;.46;.6;1" dur="4s" repeatCount="indefinite"/></g>` +
          afterFusion(txt(160, 90, "헬륨", 13)) +
          txt(60, 72, "수소", 12, "#7fd0ff") +
          txt(260, 72, "수소", 12, "#7fd0ff") +
          txt(160, 164, "빛과 열이 나와요", 13, "#fff"),
      ),
    },
  ],
  general: [
    {
      who: "아인슈타인",
      say: [
        "트램펄린에 볼링공을 올리면 천이 움푹 들어가지?",
        "태양 주변의 공간도 이렇게 휘어진단다.",
        "트램펄린은 이해를 돕기 위한 비유야.",
      ],
      art: svg(
        320,
        170,
        "트램펄린 격자가 볼링공 무게로 넓고 깊게 휘어진 비유 그림",
        bg(320, 170, "gSky") + sheet() + ball(160, 106, 24) + tag(160, 160, "볼링공 = 태양"),
      ),
    },
    {
      who: "하나",
      say: ["구슬을 굴리면 구슬이 휘어진 천을 따라 볼링공 둘레를 돌아요.", "지구도 이렇게 태양 둘레를 도는 거예요?"],
      art: svg(
        320,
        170,
        "구슬 지구가 휘어진 천을 따라 볼링공 둘레를 도는 움직이는 그림",
        bg(320, 170, "gSky") +
          sheet() +
          `<path d="${ORBIT}" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="5 6"/>` +
          ball(160, 106, 24) +
          `<g>${ic("globe-showing-asia-australia", -13, -13, 26)}<animateMotion dur="5s" repeatCount="indefinite" path="${ORBIT}"/></g>` +
          tag(160, 160, "구슬 = 지구"),
      ),
    },
    {
      who: "아인슈타인",
      say: [
        "평소에는 햇빛이 너무 밝아서 태양 근처의 별이 보이지 않아.",
        "일식 때는 달이 태양을 가려서 하늘이 어두워지고 별이 보인단다.",
        "과학자들은 1919년 일식 때 태양 근처의 별을 찍어서 별빛이 휘는지 시험했어.",
      ],
      art: svg(
        320,
        170,
        "달이 태양을 가리자 하늘이 어두워지고 코로나와 별이 보이는 움직이는 일식 그림",
        eclipse(160, 72, 24, 320, 170) +
          nightOnly(
            ic("glowing-star", 44, 26, 20) +
              ic("glowing-star", 250, 40, 16) +
              ic("glowing-star", 90, 112, 14) +
              `<path d="M54 36 Q110 34 150 40 L300 74" fill="none" stroke="#fff" stroke-width="1.5" opacity=".85"/>` +
              txt(160, 160, "일식", 11, "#fff"),
          ),
      ),
    },
    {
      who: "아인슈타인",
      say: [
        "중력은 시간에도 영향을 준단다. 높은 곳일수록 지구의 중력이 약해.",
        "그래서 약 2만 km 높이에 있는 GPS 위성의 시계는 땅의 시계보다 조금 빠르게 가.",
        "GPS는 이 차이를 바로잡아서 위치를 정확하게 알려 줘.",
      ],
      art: svg(
        480,
        255,
        "지구에서 멀어질수록 중력이 약해지고 위성의 시계가 땅의 시계보다 빠르게 가는 움직이는 그림",
        gpsScene(),
      ),
    },
  ],
};
