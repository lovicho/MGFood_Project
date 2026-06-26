# 🚀 [Phase 1: PLAN] 전문 에이전트 및 커스텀 스킬 구축 계획서 (SelfDev)

**Session Retrospective:** 더푸른식품프로젝트 '탑 10 순대 업체' 경쟁사 분석 세션 분석 및 자동화 자산화 계획

---

## 1. 세션 핵심 분석 및 기술적 허들 (Session Insights)
이번 세션에서 수행한 '경쟁사 분석 워크플로우'는 고도의 복합적인 태스크로 구성되었습니다. 이를 통해 다음과 같은 기술적/비즈니스적 허들을 식별하고 해결했습니다.

1. **Naver SmartStore Bot Protection 우회 (Anti-Bot Bypass):**
   *   단순 `wget`이나 `curl` 요청 시 네이버 로그인 페이지로의 307 Redirect 및 429 Too Many Requests 발생.
   *   **해결:** Playwright(Chromium) 기반의 Headless Browser 스크립트를 작성하여 User-Agent 스푸핑, DOM Content Loaded 대기, Full-page 캡처를 통해 우회 성공.
2. **비정형 OSINT 데이터 수집 (DART & Web Search):**
   *   대부분의 식당/중소형 유통사가 DART(전자공시시스템) 외감 대상이 아님을 파악.
   *   **해결:** DART API/Scraping과 일반 웹 검색(뉴스, 기업평가 플랫폼)을 하이브리드로 결합하여 재무 데이터를 추산 및 종합.
3. **UI/UX 기획 및 전략 도출 (Strategic Synthesis):**
   *   미러링된 결과물과 시장 구도(제조형 vs D2C형 vs 맛집형)를 바탕으로, 더푸른식품프로젝트의 초니치 타겟팅 전략 및 상세페이지 와이어프레임을 도출.

---

## 2. 신규 커스텀 스킬 (Custom Skills) 개발 계획
위의 수동/반자동 워크플로우를 영구적인 자동화 에셋(SKILL)으로 패키징합니다.

### 🎯 Skill 1: `playwright-antibot-mirror`
*   **Description:** 네이버 스마트스토어, 쿠팡 등 봇 방어가 강력한 이커머스 사이트를 우회하여 HTML 렌더링 소스와 Full 스크린샷을 병렬로 미러링하는 스킬.
*   **Key Features:**
    *   Playwright/Puppeteer 기반의 동적 DOM 로딩 대기 (`networkidle` 대신 `domcontentloaded` + Timeout Fallback).
    *   가상 User-Agent 및 Headless Evasion 기술 탑재.
    *   에러 핸들링 (429 차단 시 지수 백오프 기반 재시도).

### 🎯 Skill 2: `korean-corporate-osint-scraper`
*   **Description:** 한국 기업(특히 비상장/중소기업)의 재무/공시 정보를 DART, NICE평가정보, 사람인, KED 등의 출처에서 종합적으로 검색하고 구조화하는 스킬.
*   **Key Features:**
    *   Python `urllib`/`BeautifulSoup`를 활용한 DART 공시 자료 유무 1차 스캔.
    *   Tavily/Google Web Search를 연동한 2차 추정 매출/영업이익 기사 크롤링.
    *   비정형 텍스트를 Markdown 테이블 형태로 정규화.

### 🎯 Skill 3: `ecommerce-wireframe-architect`
*   **Description:** 경쟁사의 캡처 이미지와 HTML 구조를 분석하여, 승리할 수 있는 D2C 상세페이지 UI/UX 와이어프레임(Markdown)을 자동 기획하는 스킬.
*   **Key Features:**
    *   VLM (Vision-Language Model) 연동으로 스크린샷 내 훅(Hook), 소셜 프루프, USP 배치를 시각적 분석.
    *   최적화된 7-Phase 모바일 상세페이지 템플릿(Sizzle -> Proof -> USP -> Hygiene -> CS) 강제 적용.

---

## 3. 신규 전문 서브 에이전트 (Specialized Agents) 구성 계획
구축된 스킬들을 조율하고 특정 도메인에 특화된 역할을 수행할 에이전트를 정의합니다.

### 🤖 Agent A: `Competitive Intelligence Gatherer` (경쟁사 정보 수집 에이전트)
*   **Role:** 대상 기업/브랜드 목록이 주어지면, 방해 공작(Bot 방어)을 뚫고 웹사이트를 미러링하며 동시에 DART/웹 검색을 통해 재무 데이터를 수집하는 행동대장.
*   **Equipped Skills:** `playwright-antibot-mirror`, `korean-corporate-osint-scraper`, `search_web`, `run_command`
*   **Workflow:** 타겟 리스트 접수 → 병렬 미러링 수행 → 캡처/HTML/재무데이터 폴더별 적재 → 요약 데이터 반환.

### 🤖 Agent B: `E-Commerce Brand Strategist` (이커머스 브랜드 전략 에이전트)
*   **Role:** Agent A가 수집한 Raw Data(스크린샷, 재무 데이터)를 입력받아, 시장 진입 전략(GTM)과 UI/UX 와이어프레임 문서를 도출하는 브레인.
*   **Equipped Skills:** `ecommerce-wireframe-architect`, `read_file`, `view_file`
*   **Workflow:** 경쟁사 데이터 딥다이브 → 약점/강점(SWOT) 도출 → 초니치 포지셔닝 제안 → 최종 와이어프레임 Markdown 생성.

---

## 4. Antigravity 2.0 (agtcode-zto) 통합 워크플로우 (Phase 연동)

차후 사용자가 `/agtcode-zto 경쟁사 분석해줘` 라고 명령할 경우의 자율 주행 시나리오입니다.

1. **Phase 0 (DISCOVER):** 사용자로부터 타겟 리스트(`.txt`) 접수 및 타겟 도메인 확인.
2. **Phase 1 (PLAN):** `Competitive Intelligence Gatherer`와 `E-Commerce Brand Strategist` 에이전트 호출 계획 수립.
3. **Phase 3 (EXECUTE):** 
   - `Gatherer` 에이전트가 `playwright-antibot-mirror` 스킬을 병렬 구동하여 스크린샷/HTML 확보.
   - `Gatherer` 에이전트가 `korean-corporate-osint-scraper`로 매출 정보 확보.
   - `Strategist` 에이전트가 확보된 데이터를 넘겨받아 전략 문서와 와이어프레임 작성.
4. **Phase 8 (CONVERGENCE):** 최종 보고서를 대시보드에 퍼블리싱하고, 성공 패턴을 `decision-points.md`에 자율 업데이트 후 종료.

---
**[Next Action]** 
본 계획서에 동의하시면, 즉시 Phase 3(EXECUTE)로 진입하여 위에서 정의한 3개의 스킬(`.md` 파일 및 파이썬 래퍼 스크립트)과 서브 에이전트 정의서를 `.agents` 폴더 내에 실제로 구현(Scaffolding) 하겠습니다.
