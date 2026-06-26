---
name: korean-corporate-osint-scraper
description: 한국 기업(특히 비상장/중소기업)의 재무/공시 정보를 DART, NICE평가정보, 사람인, KED 등의 출처에서 종합적으로 검색하고 구조화하는 스킬.
---

# Korean Corporate OSINT Scraper Skill

이 스킬은 한국 내 기업들(특히 개인사업자나 비외감 중소기업)의 재무 데이터(매출액, 영업이익) 및 공시 정보를 수집합니다.

## 작동 방식 (Operation)
1. **DART 검증:** 파이썬 스크립트를 사용하여 금융감독원 DART(`https://dart.fss.or.kr/dsab001/search.ax`)에 폼 데이터를 POST 요청하여 감사보고서/공시 자료 유무를 1차 스캔합니다.
2. **웹 OSINT 하이브리드 수집:** DART에 없는 경우, `search_web` 도구(또는 DuckDuckGo/Tavily)를 활용하여 `"[기업명]" 매출 OR 영업이익` 쿼리로 잡코리아, 사람인, NICE비즈인포의 추정 데이터를 크롤링합니다.
3. **정규화:** 수집된 비정형 텍스트를 파싱하여 마크다운 테이블(기업명 | 추정 매출 | 추정 영업이익 | 비고)로 반환합니다.

## DART 스캔 템플릿
에이전트는 다음 템플릿을 응용하여 DART 조회를 우선 수행합니다.
```python
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

def check_dart(company_name):
    url = "https://dart.fss.or.kr/dsab001/search.ax"
    data = urllib.parse.urlencode({"textCrpNm": company_name}).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        if "검색된 자료가 없습니다" in html:
            return False
        return True
    except:
        return False
```

이 스킬이 호출되면 에이전트는 DART API 및 Web Search를 병행하여 재무 현황을 도출해야 합니다.
