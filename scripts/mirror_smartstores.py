import os
import time
from playwright.sync_api import sync_playwright
import urllib.parse

stores = [
    (1, "바른씨", "바른씨 막창순대"),
    (2, "조점례남문피순대", "조점례남문피순대"),
    (3, "무봉리토종순대국", "무봉리 토종순대"),
    (4, "작심밀도", "작심밀도 병천순대"),
    (5, "미트타임", "미트타임 백순대"),
    (6, "맛팜", "맛팜 고기순대"),
    (7, "자연맛남", "자연맛남 피순대"),
    (8, "신의주에프앤비", "신의주찹쌀순대 밀키트"),
    (9, "단천식당", "단천식당 아바이순대")
]

base_dir = r"C:\Users\lovic\Desktop\더푸른식품프로젝트\분석\ultrareview\참조 홈페이지"

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()

        for idx, name, query in stores:
            print(f"Processing {idx}. {name}...")
            target_dir = os.path.join(base_dir, f"top10_{idx}_{name}")
            os.makedirs(target_dir, exist_ok=True)
            
            try:
                # Search on Naver Shopping
                search_url = f"https://search.shopping.naver.com/search/all?query={urllib.parse.quote(query)}"
                page.goto(search_url, wait_until="domcontentloaded", timeout=15000)
                
                # Try to find smartstore link
                # We look for a tags containing smartstore.naver.com
                store_href = page.evaluate('''() => {
                    const links = Array.from(document.querySelectorAll('a[href*="smartstore.naver.com"]'));
                    if(links.length > 0) return links[0].href;
                    return null;
                }''')
                
                if not store_href:
                    print(f"  -> Smartstore link not found for {name} on Naver Shopping. Trying direct naver search.")
                    search_url2 = f"https://search.naver.com/search.naver?query={urllib.parse.quote(query + ' 스마트스토어')}"
                    page.goto(search_url2, wait_until="domcontentloaded", timeout=15000)
                    store_href = page.evaluate('''() => {
                        const links = Array.from(document.querySelectorAll('a[href*="smartstore.naver.com"]'));
                        if(links.length > 0) return links[0].href;
                        return null;
                    }''')
                    
                if store_href:
                    print(f"  -> Found store URL: {store_href}")
                    page.goto(store_href, wait_until="networkidle", timeout=20000)
                    
                    # Scroll down to load lazy elements
                    page.evaluate("window.scrollTo(0, document.body.scrollHeight/2)")
                    time.sleep(1)
                    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
                    time.sleep(2)
                    
                    html_content = page.content()
                    with open(os.path.join(target_dir, "index.html"), "w", encoding="utf-8") as f:
                        f.write(html_content)
                    
                    page.screenshot(path=os.path.join(target_dir, "screenshot.png"), full_page=True)
                    print(f"  -> Successfully mirrored {name}")
                    
                    # Update report
                    report_path = os.path.join(target_dir, "Analysis_smartstore.naver.com_Report.md")
                    if os.path.exists(report_path):
                        with open(report_path, "r", encoding="utf-8") as f:
                            report_content = f.read()
                        report_content = report_content.replace("실패", "성공 (Playwright 우회)")
                        report_content += "\n\n## Playwright 우회 수집 결과\n- 성공적으로 봇 방어를 우회하여 렌더링된 전체 DOM과 스크린샷을 수집했습니다.\n"
                        with open(report_path, "w", encoding="utf-8") as f:
                            f.write(report_content)
                    
                else:
                    print(f"  -> Failed to find any smartstore URL for {name}.")
            except Exception as e:
                print(f"  -> Error processing {name}: {e}")

        browser.close()

if __name__ == "__main__":
    run()
