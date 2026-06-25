# 🍌 나노바나나 AI 이미지 생성 프롬프트 명세서 (Soondae Brand Assets)

본 문서는 순대 온오프라인 판매 브랜드의 프리미엄 쇼핑몰 구축에 필요한 고품질 시각 자산(Visual Assets)을 이미지 생성 AI(Stable Diffusion, Midjourney 등)를 통해 구현하기 위한 고정밀 프롬프트 명세서입니다.

---

## 1. 프레임워크 및 파라미터 표준 가이드
- **Midjourney v6**: `--ar 16:9` (가로형 배너/히어로), `--ar 4:3` / `--ar 1:1` (제품 카드/상세페이지)
- **Style Parameters**: `studio lighting`, `8k resolution`, `photorealistic`, `food styling`, `depth of field`
- **Avoid Words (Negative Prompts)**: `blurry`, `low quality`, `cgi`, `drawing`, `deformed`, `unrealistic texture`

---

## 2. 시각 자산별 고정밀 프롬프트 (High-Precision Prompts)

### 2.1 프리미엄 순대 플레이팅 (Gourmet Soondae Plating)
- **목적**: 쇼핑몰 메인 히어로 배너 및 대표 제품 카드 이미지
- **비주얼 컨셉**: 고급 전통 한식 다이닝 스타일, 정갈하고 먹음직스러운 텍스처 강조
- **프롬프트**:
  ```text
  A close-up, high-angle shot of premium Korean Soondae (blood sausage) elegantly sliced and arranged on a traditional dark gray ceramic plate. Steam gently rising from the hot Soondae, showing a rich texture of sticky rice, vegetables, and glass noodles inside. Next to the plate are small bowls of coarse sea salt mixed with red pepper flakes and clean savory shrimp sauce. Background is a dark wooden table with elegant lighting, shallow depth of field, professional food styling, warm color tones, shot on 85mm lens, f/2.8, photorealistic, 8k resolution. --ar 16:9 --style raw --v 6.0
  ```

### 2.2 보글보글 끓어오르는 모둠 순대국 (Assorted Soondae Soup)
- **목적**: 식사용 패키지 및 밀키트 상세페이지 배너
- **비주얼 컨셉**: 뚝배기에서 끓고 있는 역동적인 국밥 비주얼, 푸짐한 내용물
- **프롬프트**:
  ```text
  A steaming hot bowl of Korean Soondae-guk (blood sausage soup) boiling vigorously in a black stone earthenware pot (Ttukbaegi). Rich, milky white bone broth bubbling, filled with plump Soondae slices, soft pork meat, and green scallions on top. Visible steam rising naturally. A side of spicy red seasoning paste (Dadaegi), sliced green chili peppers, and a bowl of warm white rice in a stainless steel bowl next to it. Traditional Korean restaurant background, cozy atmosphere, warm overhead spot lighting, macro food photography, hyper-detailed texture of the broth, 8k, photorealistic. --ar 4:3 --v 6.0
  ```

### 2.3 캐주얼 분식 순대 꼬치 & 볶음 (Street Style Soondae Skewers)
- **목적**: MZ세대 타겟 온오프라인 홍보 및 사이드 메뉴 카드
- **비주얼 컨셉**: 매콤하고 쫀득한 길거리 음식 특유의 활기차고 강렬한 색감
- **프롬프트**:
  ```text
  A delicious street-food style Korean spicy stir-fried Soondae (Soondae-bokkeum) served on a rustic round iron skillet. Glazed with glossy, red spicy gochujang sauce, mixed with flat glass noodles, green perilla leaves, and crunchy cabbage, sprinkled with golden sesame seeds. Golden light, vibrant red colors, steam rising, shallow depth of field, appetizing texture, close-up shot, appetizing food styling, high resolution photograph. --ar 1:1 --v 6.0
  ```

### 2.4 HACCP 인증 위생 자동화 공장 (HACCP Clean Room Factory)
- **목적**: ODM 제조 협약에 기반한 신뢰도 홍보용 백그라운드 이미지
- **비주얼 컨셉**: 완벽히 위생적인 스테인리스 설비, 자동화된 현대식 스마트 공장
- **프롬프트**:
  ```text
  A modern, high-tech food manufacturing clean room inside a HACCP-certified Korean food factory. Shiny, spotless stainless steel conveyor belts and steam boilers processing packaged food. Automated machinery operating under bright, clean white LED lighting. Professional technicians wearing clean white protective suits, hairnets, and masks observing the quality control monitors. Extremely clean, sterile, state-of-the-art facility, industrial interior photography, light gray and metallic blue color scheme, wide-angle lens, 8k resolution. --ar 16:9 --v 6.0
  ```

### 2.5 친환경 크라프트 패키징 Mockup (Eco-Friendly Soondae Packaging)
- **목적**: B2C 온라인 유통용 패키지 시안 제안 및 브랜드 가치 홍보
- **비주얼 컨셉**: 미니멀하고 깨끗한 친환경 지포백 형태의 냉장/냉동 파우치 패키지
- **프롬프트**:
  ```text
  A mockup of a minimal, eco-friendly kraft paper stand-up pouch packaging for frozen Soondae. The pouch has a neat, clean transparent window in the center showing the vacuum-sealed Soondae inside. On the kraft paper is a simple modern green and brown brand logo that reads '더푸른 순대' (The Pureun Soondae) in elegant Korean typography with a HACCP certification mark. Standing upright on a clean stone kitchen countertop with fresh herbs and garlic in the background, soft natural morning window light, high-end commercial product shot. --ar 4:3 --style raw --v 6.0
  ```
