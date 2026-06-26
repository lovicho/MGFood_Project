import urllib.request
import urllib.parse
import re

queries = [
    "바른씨 네이버 스마트스토어",
    "조점례남문피순대 네이버 스마트스토어",
    "무봉리 본사 직영 네이버 스마트스토어",
    "작심밀도 네이버 스마트스토어",
    "미트타임 네이버 스마트스토어",
    "맛팜 네이버 스마트스토어",
    "자연맛남 네이버 스마트스토어",
    "신의주 공식 스마트스토어",
    "단천식당 네이버 스마트스토어",
    "도야지식품 공식 홈페이지 momeuro.com"
]

for q in queries:
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(q)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'href="(https?://smartstore\.naver\.com/[^"]+)"', html)
        if not links:
            links = re.findall(r'href="(https?://[^"]+)"', html)
        
        # print the first relevant link
        for link in links:
            if 'naver.com' in link or 'momeuro.com' in link:
                print(f"{q} -> {link}")
                break
        else:
            if links:
                print(f"{q} -> {links[0]}")
    except Exception as e:
        print(f"{q} -> Error {e}")
