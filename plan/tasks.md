# 📝 더푸른식품 프리미엄 리브랜딩 실행 작업 목록 (Tasks)

본 문서는 스타벅스 디자인 시스템 기반으로 더푸른식품 샘플 시안 3종을 리팩토링하기 위한 상세 작업 명세서입니다.

---

## 1. Task 1: D2C 쇼핑몰 시안 개선 (`d2c_mall.html`)
- [ ] **디자인 토큰 주입**: `<style>` 블록 상단에 `:root` 스타벅스 디자인 토큰 선언.
- [ ] **캔버스 색상 전환**: 기본 배경색을 `#fafafa`에서 `#f2f0eb` (Warm Cream)으로 변경.
- [ ] **브랜드 컬러 리팩토링**: 로즈 핑크 테마 색상(`--rose: #f43f5e`, `--rose-dark: #be123c`)을 스타벅스 그린 Accent (`#00754a`) 및 Starbucks Green (`#006241`)로 변경.
- [ ] **타이포그래피 미세 조정**: 자간 `letter-spacing: -0.01em` 전역 적용. 영문 폰트 목록에 `Outfit`과 `Inter` 추가.
- [ ] **Pill Button 리뉴얼**: 모든 구매 및 상세 보기 버튼의 border-radius를 `50px`로 일괄 수정하고, 호버 및 active 트랜지션 (`scale(0.95)`) 추가.
- [ ] **Frap Floating CTA 구현**: 기존 하단 모바일 바 대신 또는 모바일 화면 우측 하단에 고정된 Green Accent 톤의 둥근 플로팅 주문/장바구니 뱃지 (`frap-cta`) 구현.

---

## 2. Task 2: 브랜드관 시안 개선 (`premium_brand.html`)
- [ ] **디자인 토큰 매핑**: 기존 포레스트 그린 테마를 정의된 `--sb-green-house` 및 `--sb-green-primary` 토큰으로 재매핑.
- [ ] **브랜드 헤드라인 Serif 적용**: 주요 인트로 스토리 및 섹션 타이틀에 세리프 서체인 `Georgia` 및 `Lora`를 추가로 지정하여 고풍스러운 칠판 아날로그 감성 전달.
- [ ] **자간 및 디테일 조정**: 전역 자간 `-0.01em` 적용.
- [ ] **버튼 반경 및 카드 리디자인**: 모든 버튼을 50px pill button으로 다듬고, 카드 컴포넌트에 `12px` 반경 및 `whisper-soft shadow` 적용.

---

## 3. Task 3: B2B 도매몰 시안 개선 (`wholesale_b2b.html`)
- [ ] **디자인 토큰 주입**: 스타벅스 디자인 토큰셋 정의.
- [ ] **테마 색상 리팩토링**: 기존 슬레이트 블루(`--slate-dark: #0f172a`) 및 민트(`--mint: #10b981`) 위주의 B2B 사이트 톤앤매너를 Starbucks House Green (`#1e3932`) 및 Green Accent (`#00754a`)로 전면 개정하여 프리미엄 식품 유통망 신뢰감 증폭.
- [ ] **계산기 카드 리뉴얼**: 실시간 마진율 계산기 카드를 `sb-card` 스타일로 12px rounded corner 및 whisper-soft shadow를 입혀 더 깔끔하고 인지하기 쉬운 UI로 다듬음.
- [ ] **플로팅 CTA 배치**: 우측 하단에 실시간 납품/샘플 문의 플로팅 CTA 버튼 생성.

---

## 4. Task 4: 통합 검증 및 시각 검수 (Verify & Quality Gate)
- [ ] **스펙 검증 스크립트 실행**: `node C:\Users\lovic\Agtcode_Zto_For_Antigravity_V2\scripts\zto-spec-validator.js --check`
- [ ] **비주얼 QA 및 모바일 렌더링 확인**: Chrome DevTools 또는 Puppeteer를 사용하여 3개 HTML 페이지가 모바일 해상도(375px~412px) 및 데스크톱에서 깨짐 없이 렌더링되는지 확인.
