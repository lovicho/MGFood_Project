# 📝 더푸른식품 프리미엄 리브랜딩 실행 작업 목록 (Tasks)

본 문서는 스타벅스 디자인 시스템 기반으로 더푸른식품 샘플 시안 3종을 리팩토링하기 위한 상세 작업 명세서입니다.

---

## 1. Task 1: D2C 쇼핑몰 시안 개선 (`d2c_mall.html`)
- [ ] **디자인 토큰 주입**: `<style>` 블록 상단에 `oklch()` 기반 스타벅스 디자인 토큰 선언.
- [ ] **캔버스 색상 전환**: 기본 배경색을 `#fafafa`에서 `var(--sb-bg-cream)` (oklch)으로 변경.
- [ ] **브랜드 컬러 oklch 리팩토링**: 기존 핑크/레드 테마 잔재를 스타벅스 그린 Accent (`var(--sb-green-accent)`) 및 Starbucks Green (`var(--sb-green-primary)`)로 변경.
- [ ] **타이포그래피 및 자간 조정**: 전역 자간 `letter-spacing: -0.01em` 적용. 폰트 구성에 특정 폰트의 단일 의존 대신 Outfit/Noto Sans pairings 가이드 반영.
- [ ] **인터랙션 및 스프링 트랜지션**: 버튼 호버 시 `cubic-bezier(0.34, 1.56, 0.64, 1)` 스프링 트랜지션 효과 적용.
- [ ] **이모지 아이콘의 SVG 대체**: 🛒 이모지를 인라인 SVG 아이콘으로 대체하고, 별점(⭐) 이모지들을 채워진 별 모양 SVG 아이콘 세트로 교체하여 Emoji-Free 규격 충족.
- [ ] **scrollIntoView 제거**: 밀키트 주문 버튼의 `scrollIntoView` 호출을 `window.scrollTo`를 이용한 부드러운 스크롤 함수로 대체.

---

## 2. Task 2: 브랜드관 시안 개선 (`premium_brand.html`)
- [ ] **디자인 토큰 매핑**: 기존 포레스트 그린 테마를 oklch 기반 `--sb-green-house` 및 `--sb-green-primary` 토큰으로 재매핑.
- [ ] **브랜드 헤드라인 Lora/Georgia 적용**: 주요 감성 글귀 및 섹션 타이틀에 Lora/Georgia 페어링 정밀 적용.
- [ ] **스태거드 페이드인 애니메이션**: 페이지 로드 시 섹션 및 카드가 아래에서 위로 부드럽게 솟아오르는 CSS staggered fade-in 애니메이션 주입.
- [ ] **버튼 반경 및 카드 리디자인**: 버튼을 50px pill button으로 다듬고, 카드가 스프링 호버 모션을 띄도록 CSS 수정.

---

## 3. Task 3: B2B 도매몰 시안 개선 (`wholesale_b2b.html`)
- [ ] **디자인 토큰 주입**: oklch 기반 스타벅스 디자인 토큰셋 정의.
- [ ] **테마 색상 리팩토링**: B2B 사이트 톤앤매너를 Starbucks House Green (`oklch`) 및 Green Accent (`oklch`)로 전면 개정하여 바이어 신뢰감 증폭.
- [ ] **계산기 카드 리뉴얼**: 마진율 계산기 카드를 `sb-card` 스타일로 12px rounded corner 및 스프링 호버 모션 적용. 마진율 표시의 대비를 강조하여 시인성 개선.
- [ ] **SVG 아이콘 적용**: 실시간 문의 버튼 및 전화 상담 등 모든 이모지를 SVG 아이콘으로 대체.

---

## 4. Task 4: 통합 검증 및 시각 검수 (Verify & Quality Gate)
- [ ] **스펙 검증 스크립트 실행**: `node C:\Users\lovic\Agtcode_Zto_For_Antigravity_V2\scripts\zto-spec-validator.js --check`
- [ ] **디자인 오디터 린트 실행**: `python C:\Users\lovic\Agtcode_Zto_For_Antigravity_V2\scripts\zto-design-auditor.py 샘플페이지/`를 구동하여 100점 만점 획득 여부 검증.
- [ ] **SEO/GEO/AEO 린트 실행**: `node C:\Users\lovic\Agtcode_Zto_For_Antigravity_V2\scripts\zto-seo-geo-aeo-validator.js`를 기동하여 100% Discoverability 통과 여부 검증.
