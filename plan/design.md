# ZTO Design: 더푸른식품 제안용 프리미엄 랜딩페이지 3종 디자인 사양

## 1. 공통 디자인 시스템 (Shared Design System)
- **Typography**: Inter (영문) + Outfit (헤더) + Noto Sans KR (국문) Google Fonts 로드.
- **Glassmorphism**: `backdrop-filter: blur(12px) saturate(180%); border: 1px solid rgba(255, 255, 255, 0.12);`
- **Micro-Animations**: CSS Hover Transitions (`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`) 및 keyframe fade-in-up 애니메이션 적용.
- **Responsive System**: Mobile Breakpoint (768px) 이하에서 Mobile-First CSS Media Query 최적화 적용.

## 2. 시안별 시각 사양 (Visual Specification)

### 2.1 시안 1: 프리미엄 D2C 브랜드관 (`premium_brand.html`)
- **Theme Palette**:
  - Primary: `#064e3b` (Forest Green - 신선한 자연주의)
  - Secondary: `#fdfbf7` (Warm Ivory - 고풍스럽고 따뜻한 백그라운드)
  - Accent: `#b45309` (Amber Gold - 프리미엄 제품 가치)
- **주요 UI 패턴**:
  - Full-Screen Visual Hero Section (신선한 순대 및 야채 이미지 가상 묘사).
  - Clean HACCP & ODM Process Timeline (가로 스크롤 및 페이드 효과).
  - B2C 상품 소개 모던 카드 그리드.

### 2.2 시안 2: B2B 전국 대량 도매 제안관 (`wholesale_b2b.html`)
- **Theme Palette**:
  - Primary: `#0f172a` (Slate Navy - 비즈니스 전문성과 신뢰)
  - Secondary: `#ffffff` (Pure White)
  - Accent: `#10b981` (Emerald Mint - 단가 혁신 및 위생)
- **주요 UI 패턴**:
  - B2B 마크업 전용 샘플 신청 모달 폼.
  - ODM 원가 절감 비교 표 및 비주얼 차트 (CSS Flexbox).
  - 마진율 시뮬레이터 (JS 기반 실시간 슬라이더 및 계산 컴포넌트).

### 2.3 시안 3: MZ 타겟 간편 쇼핑몰 (`d2c_mall.html`)
- **Theme Palette**:
  - Primary: `#f43f5e` (Rose Pink - 젊고 에너제틱한 식감)
  - Secondary: `#fffbeb` (Honey Yellow - 풍부하고 맛있는 간편식)
  - Background: `#fafafa` (Cool White)
- **주요 UI 패턴**:
  - Mobile-First Bottom Nav 및 Floating Action Button (FAB).
  - 정기구독 서비스 패키지 선택 UI.
  - 터치 스와이프 대응 고객 생생 리뷰 카로셀 (CSS Grid & JS Control).

