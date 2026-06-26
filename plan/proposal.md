# 📋 더푸른식품 프리미엄 리브랜딩 및 웹 시안 개선 제안서 (Proposal)

* **세션 ID**: `agtcode-zto-soondae-sample-improve-starbucks-design`
* **대상 파일**:
  1. [d2c_mall.html](file:///C:/Users/lovic/Desktop/더푸른식품프로젝트/샘플페이지/d2c_mall.html)
  2. [premium_brand.html](file:///C:/Users/lovic/Desktop/더푸른식품프로젝트/샘플페이지/premium_brand.html)
  3. [wholesale_b2b.html](file:///C:/Users/lovic/Desktop/더푸른식품프로젝트/샘플페이지/wholesale_b2b.html)

---

## 1. 개요 및 목적
양산형 템플릿 무료 제작을 제안한 광고 대행사(주식회사 단지)의 구식이고 독창성이 부족한 디자인 프레임을 완전히 극복하고, 더푸른식품의 아이덴티티를 **친환경 자연주의 프리미엄 브랜드**로 포지셔닝합니다.
이를 위해 글로벌 커피 리테일 브랜드 **스타벅스(Starbucks)의 공식 디자인 시스템**을 벤치마킹하여, 더푸른식품의 3종 샘플 웹페이지(D2C 쇼핑몰, 브랜드 홍보관, B2B 도매 공급몰)를 고품격 UI/UX로 대폭 개선합니다.

---

## 2. 스타벅스 디자인 시스템 핵심 적용 방안
1. **색상 체계 (Four-tier Green & Warm Cream Canvas)**
   - **배경**: 인공적인 화이트 대신 따뜻한 크림 톤(`#f2f0eb`, `#edebe9`, `#faf6ee`)을 캔버스로 설정하여 수제 순대의 신선함과 신뢰감을 부각.
   - **브랜드 그린**: 메인 헤더/헤드라인에 **Starbucks Green** (`#006241`)과 딥 에스프레소 그린인 **House Green** (`#1E3932`)을 배치.
   - **강조 색상 (CTA)**: 주요 행동 유도 버튼 및 뱃지에는 밝고 에너제틱한 **Green Accent** (`#00754A`) 사용.
   - **골드 터치**: 골드 색상(`#cba258`)은 정기구독 멤버십 뱃지나 프리미엄 도매 파트너십 영역에만 극히 제한적으로 사용하여 세련미 전달.
2. **타이포그래피 (SoDoSans & Lander Serif)**
   - **자간 (Tracking)**: 모든 텍스트에 `-0.01em` 또는 `-0.16px` 자간을 엄격 적용하여 고급스러운 짜임새 연출.
   - **서체 매핑**: 
     - 영문/숫자 및 기본 UI: SoDoSans 대체 서체로 고품격 **Inter** 또는 **Outfit** 매핑.
     - 브랜드 감성 헤드라인: 따뜻한 세리프 서체인 **Georgia** 또는 **Lora**를 일부 활용하여 손글씨 메뉴판/칠판 느낌의 아날로그 감성 가미.
3. **컴포넌트 및 인터랙션**
   - **버튼**: 50px pill button으로 모든 CTA의 디자인 통일. 마우스 호버 시 미세 축소 `scale(0.98)` 및 클릭 시 `scale(0.95)` 마이크로 인터랙션 구현.
   - **카드**: 12px rounded corner 및 그림자 농도를 매우 부드럽고 가볍게(`whisper-soft shadow`) 구성하여 플랫하면서도 고급스러운 볼륨감 유지.
   - **플로팅 CTA**: D2C 몰 및 B2B 페이지 우측 하단에 스타벅스 시그니처인 **플로팅 주문/문의 버튼 (Frap CTA)** 구현.

---

## 3. 페이지별 상세 개선 방향
- **D2C Mall (`d2c_mall.html`)**: 로즈 핑크 테마를 걷어내고, Warm Cream & Green Accent로 리뉴얼. 하단 플로팅 카트/주문 뱃지를 Frap CTA 형태로 변경.
- **Premium Brand (`premium_brand.html`)**: 현재의 자연주의 포레스트 그린 톤을 한층 다듬고, 폰트 자간, 50px pill button, 카드 섀도우를 완벽 정렬.
- **Wholesale B2B (`wholesale_b2b.html`)**: 딱딱한 슬레이트 블루 톤을 스타벅스의 House Green 및 Warm Cream 톤과 매칭시켜 도매 바이어에게 대기업급 브랜드 신뢰감 부여.

---
*작성일: 2026-06-26*
*승인자: ZTO Manager Agent*
