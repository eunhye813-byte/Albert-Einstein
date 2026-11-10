/* ---------- 놀라운 생각들: 설명 방법 4가지와 생각 4가지 ---------- */
const METHODS = [
  { id: "comic", name: "만화로 읽기", icon: "open-book" },
  { id: "lab", name: "직접 실험하기", icon: "test-tube" },
  { id: "guide", name: "그림으로 보기", icon: "artist-palette" },
  { id: "quiz", name: "퀴즈 풀기", icon: "red-question-mark" },
];
const IDEAS = [
  {
    id: "photo",
    name: "광전효과",
    icon: "light-bulb",
    hint: "빛이 금속에서 전자를 튀어나오게 해요.",
    accent: "#c2410c",
    tint: "#fff1e6",
    core: "빛은 에너지 알갱이처럼 움직이기도 해요.",
    lines: [
      "금속에 빛을 비추면 금속에서 전자가 튀어나올 수 있어요.",
      "전자는 금속 안에 처음부터 들어 있는 아주아주 작은 알갱이예요.",
      "빛은 전자를 가져오는 것이 아니라 전자에게 에너지를 줘요.",
      "아인슈타인은 빛을 에너지 알갱이로 생각해서 이 현상을 설명했어요.",
      "빛이 밝으면 빛 알갱이가 많아서 전자도 더 많이 튀어나와요.",
    ],
  },
  {
    id: "special",
    name: "특수상대성이론",
    icon: "rocket",
    hint: "아주 빠른 우주선의 시계는 더 느리게 가요.",
    accent: "#1d4ed8",
    tint: "#e8f0ff",
    core: "빛의 속도는 누가 재도 똑같아요.",
    lines: [
      "아인슈타인은 빛의 속도가 변하지 않는다는 사실에서 출발했어요.",
      "빛의 속도가 변하지 않으면, 대신 시간과 길이가 달라져야 해요.",
      "그래서 아주 빠른 우주선의 시계는 밖에서 재면 더 느리게 가요.",
    ],
  },
  {
    id: "energy",
    name: "E = mc²",
    icon: "high-voltage",
    hint: "작은 질량도 큰 에너지와 맞먹어요.",
    accent: "#be123c",
    tint: "#ffe9ee",
    core: "질량과 에너지는 서로 맞먹어요.",
    lines: [
      "질량은 물체에 들어 있는 물질의 양이에요.",
      "아인슈타인은 질량이 에너지로, 에너지가 질량으로 바뀔 수 있다고 밝혔어요.",
      "E = mc²은 질량이 얼마만큼의 에너지와 맞먹는지 알려 주는 식이에요.",
    ],
  },
  {
    id: "general",
    name: "일반상대성이론",
    icon: "ringed-planet",
    hint: "무거운 천체가 공간과 시간을 휘게 해요.",
    accent: "#0f766e",
    tint: "#e0f5f2",
    core: "무거운 천체는 주변의 공간과 시간을 휘게 해요.",
    lines: [
      "아인슈타인은 중력을 휘어진 공간과 시간으로 설명했어요.",
      "지구는 태양이 휘게 한 공간을 따라 태양 둘레를 돌아요.",
      "빛도 무거운 천체 옆을 지날 때 그 휘어진 길을 따라가요.",
    ],
  },
];
const state = { idea: "photo", method: "comic" };
