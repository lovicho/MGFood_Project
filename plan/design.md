# 🎨 더푸른식품 프리미엄 리브랜딩 디자인 명세서 (Design Spec)

본 명세서는 스타벅스의 UI 디자인 언어를 더푸른식품 웹 시안 3종에 일관되게 주입하기 위해 정의한 CSS 토큰 및 가이드라인입니다.

---

## 1. CSS 디자인 토큰 (Design Tokens)

모든 스타일 파일 및 `<style>` 블록에 아래의 커스텀 속성을 선언하고 활용합니다.

```css
:root {
    /* 스타벅스 기반 oklch 4-tier Green System */
    --sb-green-primary: oklch(35% 0.12 150);   /* Starbucks Green (헤드라인, 메인 브랜드 신호) */
    --sb-green-accent: oklch(42% 0.14 148);    /* Green Accent (주요 채워진 CTA, 버튼 호버) */
    --sb-green-house: oklch(22% 0.05 145);     /* House Green (딥 에스프레소 그린 - 헤더/푸터 배경) */
    --sb-green-uplift: oklch(30% 0.08 145);    /* Uplift Green (보조 액센트) */
    --sb-green-light: oklch(90% 0.06 150);     /* Light Green (배경 워시, 폼 성공 상태) */

    /* 골드 스페셜 (멤버십 및 프리미엄 도매 파트너 전용) */
    --sb-gold: oklch(72% 0.13 85);             /* Rewards Gold */
    --sb-gold-light: oklch(82% 0.10 82);
    --sb-gold-lightest: oklch(97% 0.01 80);

    /* 캔버스 및 피치 배경 (Warm-neutral surfaces) */
    --sb-bg-cream: oklch(95% 0.01 75);         /* Neutral Warm (기본 페이지 배경) */
    --sb-bg-ceramic: oklch(92% 0.01 70);       /* Ceramic (보조 영역, 그리드 구분) */
    --sb-bg-white: oklch(100% 0 0);            /* Pure White (카드 내부, 입력 폼 배경) */
    --sb-bg-dark-section: oklch(22% 0.05 145); /* House Green Section */

    /* 텍스트 & 중립 톤 (안구 피로도 경감 87% Alpha Black) */
    --sb-text-black: rgba(0, 0, 0, 0.87);     /* 기본 본문/제목 */
    --sb-text-muted: rgba(0, 0, 0, 0.58);     /* 부제목, 메타데이터 */
    --sb-text-white: rgba(255, 255, 255, 1.0); /* 어두운 배경 위 텍스트 */
    --sb-text-white-soft: rgba(255, 255, 255, 0.70);

    /* 의미 및 상태 */
    --sb-semantic-error: #c82014;
    --sb-semantic-error-tint: rgba(200, 32, 20, 0.05);

    /* 레이아웃 & 반지름 */
    --sb-radius-pill: 50px;       /* 버튼 전용 */
    --sb-radius-card: 12px;       /* 제품 카드, 콘텐츠 블록 */
    --sb-radius-modal: 16px;

    /* 그림자 효과 (Whisper-soft shadows) */
    --sb-shadow-ambient: 0px 0px .5px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.24);
    --sb-shadow-lift: 0 4px 6px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.10);
    --sb-shadow-frap: 0 4px 10px rgba(0, 98, 65, 0.2), 0 12px 20px rgba(0, 0, 0, 0.15);

    /* 스프링 역학 마이크로 애니메이션 트랜지션 */
    --sb-transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 2. 타이포그래피 및 기타 기술 표준 (Typography & Tech Rules)

- **영문/기본 서체**: `Outfit`, `Inter`, `system-ui`, `-apple-system`, `sans-serif`
- **국문 서체**: `'Noto Sans KR'`, `sans-serif`
- **감성 타이틀 서체 (Serif)**: `Georgia`, `'Times New Roman'`, `'Lora'`, `serif`
- **자간 설정**:
  ```css
  body, button, input, select {
      letter-spacing: -0.01em; /* -0.16px 상당의 스타벅스식 타이트 트래킹 */
  }
  ```

---

## 3. 핵심 컴포넌트 마크업 및 스타일 가이드

### 3.1 50px 필 버튼 (Pill Button)
```html
<button class="sb-btn sb-btn-filled">Explore Menu</button>
<button class="sb-btn sb-btn-outlined">Learn More</button>
```
```css
.sb-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    font-weight: 600;
    padding: 0.75rem 1.75rem;
    border-radius: var(--sb-radius-pill);
    cursor: pointer;
    transition: var(--sb-transition);
    border: 1px solid transparent;
}
.sb-btn-filled {
    background-color: var(--sb-green-accent);
    color: var(--sb-bg-white);
}
.sb-btn-filled:hover {
    background-color: var(--sb-green-primary);
    transform: scale(0.98);
}
.sb-btn-filled:active {
    transform: scale(0.95);
}
.sb-btn-outlined {
    background-color: transparent;
    color: var(--sb-green-accent);
    border-color: var(--sb-green-accent);
}
.sb-btn-outlined:hover {
    background-color: var(--sb-green-light);
    color: var(--sb-green-primary);
    border-color: var(--sb-green-primary);
    transform: scale(0.98);
}
```

### 3.2 플로팅 프랩 CTA (Floating Frap CTA)
모바일 쇼핑 및 실시간 상담 신청을 극대화하기 위해 우측 하단에 상시 노출되는 플로팅 버튼.
```html
<div class="frap-cta">
    <a href="#consultation" aria-label="실시간 상담 및 샘플 신청">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
    </a>
</div>
```
```css
.frap-cta {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 999;
}
.frap-cta a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background-color: var(--sb-green-accent);
    color: var(--sb-bg-white);
    border-radius: 50%;
    box-shadow: var(--sb-shadow-frap);
    transition: var(--sb-transition);
    text-decoration: none;
}
.frap-cta a:hover {
    background-color: var(--sb-green-primary);
    transform: scale(1.05);
}
.frap-cta a:active {
    transform: scale(0.95);
}
```

### 3.3 12px 라운디드 카드 (Rounded Card)
```css
.sb-card {
    background-color: var(--sb-bg-white);
    border-radius: var(--sb-radius-card);
    box-shadow: var(--sb-shadow-ambient);
    padding: 1.5rem;
    transition: var(--sb-transition);
}
.sb-card:hover {
    box-shadow: var(--sb-shadow-lift);
    transform: translateY(-2px);
}
```

### 3.4 레이아웃 흔들림(Layout Shift) 방지 스크롤 헬퍼
`scrollIntoView` 대신 아래와 같은 부드러운 스크롤 함수를 작성하여 UX를 극대화합니다.
```javascript
function smoothScrollTo(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}
```

### 3.5 AI 슬롭 방지용 인라인 SVG 아이콘 활용 규격
이모지(🛒, ✉, 👤 등)를 UI용 아이콘으로 직접 노출하는 것을 전면 금지하며, 아래와 같은 인라인 SVG 아이콘을 사용해야 합니다.
```html
<!-- 장바구니 SVG 예시 -->
<svg class="sb-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
```

### 3.6 눈부심 방지(Glare Hazard Defense) 규칙
- 본문 텍스트에는 순블랙(`#000000`)을 피하고, 87% Alpha Black인 `rgba(0, 0, 0, 0.87)` 또는 Oklch 기반의 조율된 어두운 색을 사용합니다.
- 배경에는 순화이트(`#ffffff`)와 순블랙(`#000000`)이 직접 충돌하여 눈부심(Glare)을 유발하지 않도록, `var(--sb-bg-cream)` 및 보조 캔버스 레이어를 활용하여 가독성을 높입니다.

