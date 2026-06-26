import os
import time
from playwright.sync_api import sync_playwright
import urllib.parse

base_dir = r"C:\Users\lovic\Desktop\더푸른식품프로젝트\분석\ultrareview\참조 홈페이지"

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = context.new_page()

        # 3. 무봉리토종순대국 (moobongrimall.com)
        name3 = "무봉리토종순대국"
        print(f"Processing 3. {name3}...")
        target_dir3 = os.path.join(base_dir, f"top10_3_{name3}")
        os.makedirs(target_dir3, exist_ok=True)
        try:
            url3 = "https://www.moobongrimall.com/"
            page.goto(url3, wait_until="networkidle", timeout=20000)
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            time.sleep(2)
            with open(os.path.join(target_dir3, "index.html"), "w", encoding="utf-8") as f:
                f.write(page.content())
            page.screenshot(path=os.path.join(target_dir3, "screenshot.png"), full_page=True)
            print(f"  -> Successfully mirrored {name3} (moobongrimall.com)")
            
            report_path = os.path.join(target_dir3, "Analysis_moobongrimall.com_Report.md")
            with open(report_path, "w", encoding="utf-8") as f:
                f.write(f"# Analysis Report for moobongrimall.com\n\n공식몰(moobongrimall.com) 추적 후 미러링을 성공적으로 완료했습니다.")
        except Exception as e:
            print(f"  -> Error processing {name3}: {e}")

        # 9. 단천식당 (Naver Place Search)
        name9 = "단천식당"
        print(f"Processing 9. {name9}...")
        target_dir9 = os.path.join(base_dir, f"top10_9_{name9}")
        os.makedirs(target_dir9, exist_ok=True)
        try:
            # Since no smartstore exists, we capture the Naver Place/Search results page as alternative
            url9 = f"https://search.naver.com/search.naver?query={urllib.parse.quote('단천식당 속초')}"
            page.goto(url9, wait_until="networkidle", timeout=20000)
            time.sleep(2)
            with open(os.path.join(target_dir9, "index.html"), "w", encoding="utf-8") as f:
                f.write(page.content())
            page.screenshot(path=os.path.join(target_dir9, "screenshot.png"), full_page=True)
            print(f"  -> Successfully mirrored {name9} (Naver Search/Place)")
            
            report_path = os.path.join(target_dir9, "Analysis_dancheon_Report.md")
            with open(report_path, "w", encoding="utf-8") as f:
                f.write(f"# Analysis Report for 단천식당\n\n온라인 쇼핑몰(스마트스토어 등)을 운영하지 않아 현장(속초 아바이마을) 중심인 점을 확인 후, 대안으로 네이버 검색/플레이스 정보를 미러링했습니다.")
        except Exception as e:
            print(f"  -> Error processing {name9}: {e}")

        browser.close()

if __name__ == "__main__":
    run()
