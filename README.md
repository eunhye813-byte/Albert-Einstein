# 알베르트 아인슈타인 소개 페이지

초등학교 3학년 여학생에게 아인슈타인을 소개하는 HTML 페이지를 만들기 위한 자료입니다.

## 파일

| 파일 | 내용 |
| --- | --- |
| `README.md` | 페이지에 넣을 내용과 자료 확인 메모 |
| `index.html` | 모든 내용을 담은 전체 소개 페이지 |
| `amazing-ideas-samples.html` | "놀라운 생각들"만 담은 이전 페이지 |

## 페이지 기획

- **읽는 사람:** 초등학교 3학년 여학생
- **글 수준:** "놀라운 생각들"은 문장을 5학년 수준으로 씁니다. 그 외 내용은 3학년 수준으로 씁니다. 페이지에는 학년을 표시하지 않습니다.
- **최종 버전:** "놀라운 생각들" 페이지는 비교 끝에 더 이해하기 쉬운 2차 버전(`3770a3b`)으로 정했습니다. 과학 지식을 4학년 수준으로 줄인 버전(`3214148`)은 쓰지 않으므로, eV, kWh, 마이크로초 같은 용어와 수치가 페이지에 남아 있습니다.
- **말투:** 친근한 존댓말, 주어가 분명한 짧은 문장, 한 줄에 한 문장
- **어려운 말:** 일상에 빗대어 먼저 설명하고, 용어는 그다음에 소개
- **전하고 싶은 메시지:** 궁금해하는 마음이 큰 발견으로 이어질 수 있어요.
- **화면:** 모바일 화면 하나를 PC에서도 씁니다. PC에서는 폭 600px의 한 단을 가운데에 보여 줍니다.
- **더 알아보기:** 이야기와 직접 해 보는 활동은 펼쳐 두고, 정확한 수치와 긴 보충 설명은 지우지 않고 접어 둡니다. 궁금증이 생기는 내용은 질문을 제목으로 씁니다.
- **장 나누기:** `index.html`은 위쪽 메뉴로 7개 장을 하나씩 보여 줍니다. 장마다 주소가 있어서 뒤로 가기로 이전 장에 돌아갈 수 있습니다.
- **만화:** 칸을 세로로 쌓지 않고 옆으로 넘겨 봅니다.

| 순서 | 섹션 | 핵심 내용 |
| --- | --- | --- |
| 1 | 맨 위 소개 | 제목, 한 줄 소개, 태어난 날, 세상을 떠난 날, 직업, 큰 상 |
| 2 | 아인슈타인은 누구일까요? | 소개, 혀를 내민 사진 이야기, 연표 |
| 3 | 어린 시절 | 나침반, 바이올린, 늦은 말, 돌려 보는 나침반 |
| 4 | 학교와 첫 직장 | 입학시험, 특허청, 기적의 해 |
| 5 | 놀라운 생각들 | 광전효과, 특수상대성이론, E = mc², 일반상대성이론 (만화, 실험, 그림, 퀴즈) |
| 6 | 세계적인 과학자가 되다 | 일식 관측, 노벨상 |
| 7 | 진짜일까요? | 소문을 누르면 사실을 보여 주는 카드 |
| 8 | 바버라에게 보낸 편지 | 수학이 어려운 학생에게 보낸 답장 |

위쪽에는 섹션으로 이동하는 메뉴를 고정합니다. 혀를 내민 사진은 저작권을 확인하지 않아 실제 사진 대신 일러스트로 나타냅니다.

## 한눈에 보는 정보

| 항목 | 내용 |
| --- | --- |
| 이름 | 알베르트 아인슈타인 (Albert Einstein) |
| 태어난 날 | 1879년 3월 14일, 독일 울름 |
| 세상을 떠난 날 | 1955년 4월 18일, 미국 프린스턴 (76세) |
| 하는 일 | 이론물리학자 |
| 큰 상 | 1921년 노벨 물리학상 |

## 연표

| 연도 | 있었던 일 |
| --- | --- |
| 1879 | 독일 울름에서 태어남 |
| 4~6세 무렵 | 아버지에게 나침반을 선물 받음 (자료마다 나이가 다름) |
| 6세 무렵 | 어머니의 권유로 바이올린을 시작함 |
| 13세 무렵 | 모차르트의 바이올린 소나타를 만나 음악을 좋아하게 됨 |
| 16세 무렵 | 취리히 공과대학 입학시험에 응시했으나 불합격 |
| 1905 | 스위스 베른의 특허청에서 일하며 중요한 논문들을 발표함 |
| 1915 | 일반상대성이론을 완성함 |
| 1919 | 일식 관측 결과가 발표되어 세계적으로 유명해짐 |
| 1921 | 노벨 물리학상 수상자로 기록됨 |
| 1933 | 나치가 권력을 잡은 해에 미국으로 건너감 |
| 1951 | 72번째 생일에 메롱 사진이 찍힘 |
| 1955 | 프린스턴에서 세상을 떠남 |

## 페이지에 넣을 글

### 어린 시절

**나침반:** 어린 아인슈타인이 아파서 누워 있을 때 아버지가 나침반을 주었어요. 나침반을 아무리 돌려도 바늘은 늘 같은 쪽을 가리켰지요. 아인슈타인은 이 일을 무척 신기해했고, 나중에 물리학에 관심을 갖게 된 계기로 꼽았어요.

**바이올린:** 여섯 살쯤 어머니의 권유로 바이올린을 시작했어요. 처음에는 귀찮은 숙제처럼 느꼈지만, 열세 살쯤 모차르트의 곡을 만나면서 달라졌어요. 그 뒤로 평생 바이올린을 연주했답니다.

**늦은 말:** 말을 늦게 시작해서 부모님이 걱정했다고 전해져요. 몇 살에 말을 시작했는지는 자료마다 달라서, 나이는 적지 않아요.

### 학교와 첫 직장

열여섯 살쯤 스위스 취리히에 있는 공과대학 입학시험을 봤어요. 보통 학생들보다 어린 나이였지요. 수학은 잘 봤지만 다른 과목 성적이 부족해서 떨어졌어요.

스물여섯 살이던 1905년에는 스위스 베른의 특허청에서 일하고 있었어요. 특허청은 새로운 발명품을 심사하는 곳이에요. 이 해에 세상을 바꾼 논문들을 잇따라 발표해서, 1905년은 '기적의 해'라고 불려요.

### 놀라운 생각들

이 부분은 `index.html`에 5학년 수준의 문장으로 자세히 담았어요. 페이지는 먼저 생각 하나를 고른 뒤, 네 가지 방법 중 하나로 알아보는 순서입니다.

**설명 방법**

| 방법 | 내용 |
| --- | --- |
| 만화로 읽기 | 하나와 아인슈타인의 대화로 읽는 만화 (꾸민 대화임을 페이지에 표시) |
| 직접 실험하기 | 빛의 색, 우주선의 속도, 질량, 별의 질량을 바꿔 보는 도구 |
| 그림으로 보기 | 원리 그림과 세 단계 설명, 우리 생활 속 예 |
| 퀴즈 풀기 | 생각마다 3문제를 풀고 이유 확인 |

**광전효과: 빛은 에너지 알갱이처럼 움직이기도 해요.**

- 금속에 빛을 비추면 금속에서 전자가 튀어나올 수 있어요. 전자는 금속 안에 처음부터 들어 있는 아주아주 작은 알갱이예요. 빛은 전자를 가져오는 것이 아니라 전자에게 에너지를 줘요.
- 전자가 금속 밖으로 나오려면 정해진 양 이상의 에너지가 필요해요. 이 양을 문턱이라고 불러요. 빛 알갱이 하나의 에너지가 문턱보다 작으면 전자는 나오지 않아요.
- 전자는 빛을 받은 쪽 표면에서 튀어나와요.
- 금속판에 닿은 빛 알갱이의 일부는 튕겨 나가고(반사), 일부는 흡수돼요. 광택이 있는 금속은 눈에 보이는 빛을 많이 반사해요. 금속 안의 전자가 그 에너지를 받아요. 에너지가 문턱보다 크면 전자가 튀어나올 수 있어요. 문턱을 넘지 못한 전자는 금속의 원자에 에너지를 나눠 주고, 원자가 더 활발하게 떨리면서 금속판이 아주 조금 따뜻해져요.
- 금속에서 튀어나오는 것은 전자이고, 금속 표면에서 튕겨 나가는 것은 빛 알갱이예요.
- 빛이 밝아지면 빛 알갱이가 많아져서 튀어나오는 전자의 수가 늘어요. 빛이 파란색 쪽으로 갈수록 전자가 더 빠르게 나와요.
- 빛은 아주 빠르게 떨리면서 나아가요. 빛이 빠르게 떨릴수록 빛 알갱이 하나의 에너지가 커요. 빨간빛(650nm)은 1초에 약 460조 번, 파란빛(450nm)은 약 670조 번 떨려요.
- 떨림 자체가 에너지는 아니에요. 빛의 밝기는 떨리는 빠르기가 아니라 빛 알갱이의 수와 관련이 있어요. 금속의 원자가 열로 떨리는 것은 빛의 떨림과 다른 현상이에요.
- **비유:** 500원을 넣어야 움직이는 뽑기 기계는 10원짜리 동전을 아무리 많이 넣어도 움직이지 않아요.
- **예로 든 금속:** 나트륨 (문턱 약 2.3eV, 초록빛부터 전자가 나옴)
- **우리 생활에서:** 디지털카메라의 센서와 태양전지에서도 빛 알갱이가 전자를 움직여요.

**특수상대성이론: 빛의 속도는 누가 재도 똑같아요.**

- 빛은 진공에서 1초에 약 30만 km를 가요.
- 빛의 속도가 변하지 않으면, 대신 시간과 길이가 달라져야 해요.
- 지구에서 재면 아주 빠른 우주선의 시계는 더 느리게 가고, 우주선은 움직이는 방향으로 더 짧아져요. 우주선 안의 사람에게는 모든 것이 평소와 같아요.
- 빛 시계는 거울 두 장 사이를 빛이 오가는 상상 속 시계예요. 움직이는 시계의 빛은 비스듬히 더 먼 길을 가므로 한 번 오가는 데 시간이 더 걸려요.
- **예:** 우주선이 빛의 속도의 90%로 날면 우주선의 시계는 약 2.3배 느리게 가요.
- **지구의 시계로 1년 동안 덜 가는 시간:** 자동차(시속 100km) 약 0.00000014초, 여객기(시속 900km) 약 0.00001초, GPS 위성(시속 약 1만 4천 km) 약 0.0026초, 빛의 속도의 90% 약 206일, 99% 약 314일.
- **우리 생활에서:** GPS 위성의 시계는 속도의 효과만 따지면 하루에 약 7마이크로초 느려져요.

**E = mc²: 질량과 에너지는 서로 맞먹어요.**

- E는 에너지, m은 질량, c는 빛의 속도예요. c²은 c × c를 뜻해요.
- 빛의 속도는 1초에 약 3억 m예요. 이 큰 수를 두 번 곱하므로 작은 질량도 큰 에너지와 맞먹어요.
- 질량 1g 전부는 약 2,500만 kWh의 전기와 맞먹어요. 한 달에 300kWh를 쓰는 집이 약 7천 년 동안 쓸 수 있는 양이에요.
- 사람은 아직 물건의 질량 전부를 전기로 바꾸지 못해요. 원자력 발전에서 우라늄이 쪼개질 때도 약 0.1%의 질량만 에너지로 바뀌어요.
- 질량이 그대로 빛으로 쪼개지는 것은 아니에요. 원자핵이 합쳐지거나 쪼개지면 결과물이 처음보다 조금 가벼워지고, 줄어든 질량만큼 에너지가 빛과 열로 나와요.
- 빛이 에너지 변환에 쓰이는 것은 아니에요. c²은 질량을 에너지로 바꿔 계산해 주는 수예요. **비유:** 돈을 바꿀 때 쓰는 환율과 비슷해요.
- **핵융합:** 가벼운 원자핵들이 합쳐져 더 무거운 원자핵이 되는 현상이에요. 태양 중심(1,500만 도 이상)에서는 수소 원자핵 4개가 헬륨 원자핵 1개가 되고, 질량이 약 0.7% 줄어들어요.
- **우리 생활에서:** 태양은 1초에 수소 약 6억 톤을 헬륨으로 바꿔요. 이때 약 400만 톤의 질량이 줄어들고, 그만큼이 빛과 열의 에너지가 돼요.

**일반상대성이론: 무거운 천체는 주변의 공간과 시간을 휘게 해요.**

- 아인슈타인은 중력을 휘어진 공간과 시간으로 설명했어요. 지구는 그 휘어진 곳을 따라 태양 둘레를 돌아요.
- 별빛은 태양 바로 옆을 지날 때 약 0.0005도 휘어요. 과학자들은 1919년 일식 때 별 사진을 찍어 별의 자리를 비교했어요.
- 일식은 달이 태양을 가리는 현상이에요. 지구가 가리는 것이 아니에요. 일식 때는 하늘이 어두워져서 태양 근처의 별이 보여요.
- 높은 곳에서는 중력이 더 커지는 것이 아니라 더 약해져요. 중력이 약한 곳일수록 시간이 조금 더 빠르게 흘러요.
- **이름의 차이:** 특수상대성이론(1905년)은 중력이 없고 일정하게 움직이는 경우를 다뤄서 범위가 좁아요. 일반상대성이론(1915~1916년)은 중력까지 포함해 더 넓게 적용돼요. "상대성"은 시간과 길이를 재는 값이 누가 어떻게 움직이며 재는지에 따라 달라진다는 뜻이에요.
- **비유:** 트램펄린에 볼링공을 올리면 천이 움푹 들어가요. 실제 공간은 평평한 천이 아니라 입체예요.
- **우리 생활에서:** GPS 위성의 시계는 중력의 효과만 따지면 하루에 약 45마이크로초 빨라져요. 속도의 효과까지 합치면 하루에 약 38마이크로초 빨라서, GPS는 이 차이를 바로잡아요.

### 세계적인 과학자가 되다

아인슈타인은 태양 옆을 지나는 별빛이 살짝 휜다고 예측했어요. 하지만 낮에는 햇빛이 너무 밝아서 별을 볼 수 없지요. 그래서 과학자들은 달이 태양을 가리는 일식을 기다렸어요.

1919년 5월 29일, 영국 과학자들이 아프리카 근처의 프린시페섬과 브라질 소브라우로 가서 사진을 찍었어요. 결과는 아인슈타인의 예측을 뒷받침했고, 그는 곧 세계에서 가장 유명한 과학자가 되었어요.

그 뒤 1921년 노벨 물리학상을 받았어요. 상의 이유는 유명한 상대성이론이 아니라, 이론물리학에 기여한 공로와 특히 광전효과 법칙의 발견이었어요.

### 메롱 사진 이야기

아인슈타인이 혀를 쏙 내민 사진을 본 적 있나요? 1951년 3월 14일, 72번째 생일 파티를 마치고 차에 탔을 때 찍힌 사진이에요. 사진기자들이 저녁 내내 포즈를 부탁하자 장난스럽게 혀를 내밀었다고 해요. 사진사의 이름은 아서 사스예요.

### 진짜일까요?

| 소문 | 사실 |
| --- | --- |
| 아인슈타인은 수학을 못해서 낙제했다 | 아니에요. 본인도 열다섯 살이 되기 전에 미적분을 익혔다고 말하며 부인했어요. |
| 입학시험에 떨어진 적이 없다 | 떨어진 적이 있어요. 다만 수학 때문이 아니라 다른 과목 때문이었어요. |
| 상대성이론으로 노벨상을 받았다 | 아니에요. 공식 수상 이유에서 특히 강조된 것은 광전효과 법칙의 발견이에요. |

### 바버라에게 보낸 편지

1943년 1월, 미국 워싱턴 D.C.에 사는 바버라라는 여학생이 아인슈타인에게 편지를 보냈어요. 아인슈타인은 며칠 뒤인 1월 7일에 이렇게 답장했어요.

> "수학이 어렵다고 걱정하지 마세요. 내가 겪는 어려움이 훨씬 더 크다고 장담할 수 있어요."
>
> 원문: "Do not worry about your difficulties in mathematics; I can assure you that mine are still greater."

## 자료 확인 메모

**자료에 따라 내용이 다른 부분**

- 나침반을 받은 나이는 자료마다 4~6세로 다릅니다.
- 말을 시작한 나이도 자료마다 달라서 페이지 글에서 뺐습니다.
- 일반상대성이론 완성 시기는 대부분 1915년이지만 1916년으로 적은 자료도 있습니다.
- "그만 찍어요!"라고 외쳤다는 메롱 사진 일화는 전설로 소개되어 뺐습니다.
- 수학 낙제설의 출처와 시험 과목별 세부 내용은 품질이 낮은 자료도 섞여 있어, 전기나 ETH 기록으로 다시 확인하면 더 좋습니다.
- 1919년 일식 관측의 정확성에 대해서는 1970년대 이후 의문을 제기한 과학자와 역사학자들도 있습니다. 어린이용 글에서는 "뒷받침했다"고만 적었습니다.
- 바버라 편지의 원문은 학술 논문에서 인용한 문장이며, 원본 편지와는 대조하지 못했습니다. 한국어는 직접 번역한 문장입니다.
- 태양의 질량 변화는 약 400만 톤으로 적는 자료가 많지만, 약 550만 톤으로 적은 자료도 있습니다.
- 우라늄(약 0.1%)과 나트륨(약 2.3eV) 수치의 출처는 주로 시험 대비 사이트와 과학 포럼입니다. 나트륨은 다른 값을 적은 자료도 있습니다.

**반사와 흡수 확인 결과**

- 광택이 있는 금속이 눈에 보이는 빛을 대부분 반사하고 나머지를 흡수한다는 내용, 흡수된 에너지가 전자를 거쳐 금속의 열이 된다는 내용은 자료와 맞습니다.
- 자료는 레이저 가공 논문과 재료 광학 강의 자료, 과학 해설 페이지입니다. 전자를 내보내지 못한 빛만 따로 다룬 자료는 찾지 못했고, 금속의 일반적인 반사와 흡수 설명을 적용했습니다.
- 흡수된 에너지 대부분이 열이 된다는 표현은 그대로 확인한 자료가 없어 페이지와 README에 쓰지 않았습니다.
- 원자가 더 활발하게 떨린다는 표현은 자료의 격자 진동 설명을 쉽게 풀어 쓴 것입니다.
- "튕겨 나가요"는 쉽게 풀어 쓴 표현입니다. 자료에 따르면 빛의 반사는 금속의 자유 전자가 빛에 흔들리며 같은 진동수의 빛을 다시 내보내는 현상입니다.
- 실험 도구의 반사 비율(70%)과 금속판의 주황색은 보기 쉽게 정한 값이고 실제 측정값이 아닙니다. 페이지에도 이 점을 적었습니다.

**직접 계산했거나 어림한 값**

- 빠르기별로 덜 가는 시간은 특수상대성이론의 식으로 계산했고, 속도의 효과만 따졌습니다.
- 태양의 수소 약 6억 톤은 가장 흔한 값이며, 7억 톤으로 적은 자료도 있습니다. "c²은 환율과 비슷하다"는 이해를 돕기 위해 만든 비유입니다.
- 빛이 1초에 떨리는 횟수는 빛의 속도를 파장으로 나눠 계산했습니다. 빛 알갱이의 에너지가 진동수에 비례한다는 관계(E = hf)는 자료로 확인했습니다. 이 식은 플랑크의 관계를 아인슈타인이 빛에 적용한 것입니다.
- 1g = 약 2,500만 kWh는 E = mc²으로 계산했고, 약 7천 년은 한 달 300kWh를 쓰는 집을 기준으로 어림했습니다.
- 빛의 속도의 90%일 때 약 2.3배는 특수상대성이론의 식으로 계산했습니다.
- 약 0.0005도는 자료의 약 1.75각초를 도 단위로 바꾼 값입니다.
- 실험 도구의 물건 무게(쌀 한 톨 0.02g, 클립 1g, 100원 동전 5.42g, 사과 200g)는 자료로 확인하지 않은 대략적인 값입니다.

**직접 확인하지 못해 뺀 내용**

유대인 혈통, 루스벨트 대통령에게 보낸 편지와 원자폭탄의 관계, 마리 퀴리에게 보낸 편지, 밀레바 마리치의 삶과 가족 이야기는 이번 검색으로 확인하지 못했습니다. 페이지에 넣으려면 추가 조사가 필요합니다.

## 참고 자료

- [Albert Einstein – Facts (NobelPrize.org)](https://www.nobelprize.org/prizes/physics/1921/einstein/facts)
- [Was Albert Einstein really a bad student who failed math? (SBS)](https://www.sbs.com.au/news/article/was-albert-einstein-really-a-bad-student-who-failed-math/152sh8433)
- [Did Einstein Really Fail Math Class? (WorldAtlas)](https://www.worldatlas.com/articles/did-einstein-really-fail-math-class.html)
- [Albert Einstein facts (Biography.com)](https://www.biography.com/scientists/albert-einstein-facts)
- [Albert Einstein early life (Ducksters)](https://ducksters.com/biography/scientists/albert_einstein/early-life.php)
- [What Was Albert Einstein's Childhood Like? (Science Insights)](https://scienceinsights.org/what-was-albert-einsteins-childhood-like/)
- [Einstein tongue photo (History.com)](https://www.history.com/articles/einstein-tongue-photo)
- [Arthur Sasse (Wikipedia)](https://en.wikipedia.org/wiki/Arthur_Sasse)
- [From graduation to the "miracle year" (Britannica)](https://www.britannica.com/biography/Albert-Einstein/From-graduation-to-the-miracle-year-of-scientific-theories)
- [Five papers that shook the world (Physics World)](https://physicsworld.com/a/five-papers-that-shook-the-world/)
- [Max Born, Albert Einstein and Hermann Minkowski's Space-Time Formalism (arXiv)](https://arxiv.org/pdf/1210.6929)
- [The 1919 Solar Eclipse (AMNH)](https://amnh.org/explore/ology/ology-cards/176-general-theory-of-relativity)
- [Einstein, Eddington and the 1919 eclipse (The Irish Times)](https://www.irishtimes.com/news/science/einstein-eddington-and-the-1919-eclipse-1.3900692)
- [Dyson & Eddington Provide the First Experimental Proof of General Relativity (History of Information)](https://historyofinformation.com/detail.php?entryid=2015)
- [The Satellite Clock (Penn State)](https://courses.ems.psu.edu/geog862/node/1714)
- [GPS and Relativity (Tech for Space)](https://www.techforspace.com/missions/galileo/gps-and-relativity/)
- [Is the Sun Losing Mass? (Brian Koberlein)](https://briankoberlein.com/blog/is-the-sun-losing-mass/)
- [Mass converted to energy in fission of U-235 (Physics Forums)](https://www.physicsforums.com/threads/mass-converted-to-energy-in-fission-of-u-235.59850)
- [The work function of sodium is 2.3 eV (Vedantu)](https://www.vedantu.com/jee-main/the-work-function-of-sodium-is-23-ev-the-physics-question-answer)

- [Light in Slices: How to Enable Precise Laser Processing? (arXiv)](https://arxiv.org/pdf/2509.22665)
- [Laser Material Processing 강의 자료 (University of Diyala)](https://engineering.uodiyala.edu.iq/uploads/Departments2021/Material%20Engineerings/Lectures/4/Laser%20Material%20Processing/pdf1%20(3).pdf)
- [The Science Behind Metal-Laser Absorption (MachineMFG)](https://machinemfg.com/metal-laser-absorption)
- [Optical Constants of Metals (SciencePedia)](https://www.bohrium.com/en/sciencepedia/feynman/keyword/optical_constants_of_metals)
- [The photoelectric effect (Britannica)](https://www.britannica.com/science/radiation/The-photoelectric-effect)

- [Photoelectric effect 전문가 답변 (PhysLink)](https://www.physlink.com/education/askexperts/ae24.cfm)

- [Quantum efficiency and thermal emittance of metal photocathodes (arXiv)](https://www.arxiv.org/abs/1202.0152)

- [Solar core (Wikipedia)](https://en.wikipedia.org/wiki/Solar_core)
- [Online Astronomy eText: The Sun](https://cseligman.com/text/sun/suncore.htm)
- [Special and General relativity: Who invented those terms? (Physics Forums)](https://www.physicsforums.com/threads/special-and-general-relativity-who-invented-those-terms.753370/)

## 그림 출처

페이지의 일러스트는 [Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji)를 사용했습니다. (© Microsoft Corporation, [MIT License](https://github.com/microsoft/fluentui-emoji/blob/main/LICENSE)) 아인슈타인을 나타내는 그림은 실제 초상이 아닙니다.
