# 📋 더푸른식품 프리미엄 리브랜딩 및 웹 시안 개선 제안서 (Proposal)

* **세션 ID**: `agtcode-zto-soondae-sample-improve-starbucks-design`
* **대상 파일**:
  1. [d2c_mall.html](file:///C:/Users/lovic/Desktop/더푸른식품프로젝트/샘플페이지/d2c_mall.html)
  2. [premium_brand.html](file:///C:/Users/lovic/Desktop/더푸른식품프로젝트/샘플페이지/premium_brand.html)
  3. [wholesale_b2b.html](file:///C:/Users/lovic/Desktop/더푸른식품프로젝트/샘플페이지/wholesale_b2b.html)

---

## 1. 개요 및 목적
양산형 템플릿 무료 제작을 제안한 광고 대행사(주식회사 단지)의 구식이고 독창성이 부족한 디자인 프레임을 완전히 극복하고, 더푸른식품의 아이덴티티를 **친환경 자연주의 프리미엄 브랜드**로 포지셔닝합니다.
기존의 스타벅스 디자인 시스템 벤치마킹을 기반으로, `getdesignmd유사사이트들.txt` 분석을 통해 도출한 최첨단 UI 디자인 플랫폼(DesignMD.ai, Subframe, Motiff)의 디테일 설계를 추가 주입하여 프리미엄 톤앤매너와 기술적 무결성을 극대화합니다.

---

## 2. 추가 디자인 시스템 및 기술적 개선 방안
1. **색상 체계의 현대화 (Oklch Color Model)**
   - 기존 HEX 및 RGB 체계를 CSS 신 표준인 `oklch()`로 전면 보완 또는 적용하여, 디바이스의 영역에 관계없이 인간의 눈에 가장 자연스러운 자연주의 그린/골드/크림 배색을 구현하고 안구 피로도를 최소화.
   - Pure Black/White Glare Hazard (눈부심 현상)를 방지하기 위해 `#ffffff`와 `#000000` 직접 조합을 지양하고 `oklch()` 조율 값을 적용.
2. **마이크로 스프링 인터랙션 & 스태거드 페이드인 애니메이션**
   - Subframe 및 Motiff UI 벤치마킹: 카드가 로드될 때 부드러운 스태거드 페이드인 효과를 주입하고, 버튼 호버 시 `cubic-bezier(0.34, 1.56, 0.64, 1)`의 스프링 역학을 반영한 트랜지션을 사용하여 입체감 부여.
3. **디자인 오딧 규격 (Zero-Slop, Emoji-Free)의 완벽 준수**
   - UI 아이콘으로 사용된 🛒 등의 일반 이모지들을 제거하고, 순수 인라인 SVG 벡터 아이콘으로 100% 대체하여 비주얼 전문성 강화 및 `zto-design-auditor.py` 경고 차단.
   - 레이아웃 흔들림(Layout Shift) 방지를 위해 `scrollIntoView` 사용을 지양하고 `window.scrollTo`를 사용하는 부드러운 스크롤 함수로 대체.
   - 폰트 시스템 가이드를 고도화하여 특정 폰트(`Inter`)의 단순 하드코딩 남발을 보완하고 다변화된 Expressive pairing 설계.

---

## 3. 페이지별 상세 개선 방향
- **D2C Mall (`d2c_mall.html`)**: Warm Cream & Green Accent를 oklch 기반으로 보정. 이모지(장바구니 🛒, 별점 ⭐)를 SVG 아이콘 및 채워진 별 SVG로 완전 교체. `scrollIntoView` 제거 및 스프링 트랜지션 주입.
- **Premium Brand (`premium_brand.html`)**: 자연주의 타이틀에 Expressive Georgia/Lora 페어링을 정밀화하고, 로드 시 스태거드 페이드인 애니메이션과 카드 컴포넌트에 스프링 트랜지션 보강.
- **Wholesale B2B (`wholesale_b2b.html`)**: B2B 도매 바이어 신뢰를 위한 계산기 카드 레이아웃 정밀화, 마진율 강조를 위한 oklch 골드/그린 매칭 강화, 플로팅 상담 문의 이모지를 SVG 아이콘으로 대체.

---
*작성일: 2026-06-26*
*승인자: ZTO Manager Agent*
