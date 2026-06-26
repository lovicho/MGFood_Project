---
name: playwright-antibot-mirror
description: 네이버 스마트스토어, 쿠팡 등 봇 방어가 강력한 이커머스 사이트를 우회하여 HTML 렌더링 소스와 Full 스크린샷을 병렬로 미러링하는 스킬.
---

# Playwright Anti-Bot Mirroring Skill

이 스킬은 단순 `wget`이 차단되는 웹사이트(예: 네이버 스마트스토어, 쿠팡)를 미러링하기 위해 Playwright를 사용합니다.

## 작동 방식 (Operation)
1. 사용자가 타겟 URL 목록을 주면, Playwright 래퍼 스크립트를 작성하여 구동합니다.
2. 봇 탐지 우회를 위해 `User-Agent`를 일반 크롬 브라우저로 스푸핑하고 `headless=True` (또는 필요시 False)로 설정합니다.
3. 무한 리다이렉션이나 로딩 지연을 피하기 위해 `wait_until="domcontentloaded"`와 `timeout=15000` 가드를 사용합니다.
4. 페이지 렌더링 후 `page.screenshot(full_page=True)`와 `page.content()`를 저장합니다.

## 사용 예시 시나리오
- "스마트스토어 주소 5개를 줄 테니 봇 우회해서 스크린샷이랑 HTML 떠줘"
- "이 사이트는 wget이 안 먹히니까 playwright-antibot-mirror 스킬 써서 가져와"

## 실행 지침 (Execution Guide)
에이전트가 이 스킬을 호출받으면 다음 Python 템플릿을 활용하여 미러링을 수행합니다:

```python
from playwright.sync_api import sync_playwright
import time
import os

def mirror_site(url, save_dir):
    os.makedirs(save_dir, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            viewport={"width": 1280, "height": 1080}
        )
        page = context.new_page()
        try:
            page.goto(url, wait_until="domcontentloaded", timeout=15000)
            # 봇 방어 우회를 위한 강제 렌더링 대기
            page.wait_for_timeout(3000)
            
            # 컨텐츠 저장
            html_path = os.path.join(save_dir, "index.html")
            with open(html_path, "w", encoding="utf-8") as f:
                f.write(page.content())
                
            # 스크린샷 저장
            shot_path = os.path.join(save_dir, "screenshot.png")
            page.screenshot(path=shot_path, full_page=True)
            print(f"[Success] {url}")
        except Exception as e:
            print(f"[Error] {url} - {str(e)}")
        finally:
            browser.close()
```
이 템플릿을 `scratch/` 에 저장하고 `run_command`로 실행하세요.
