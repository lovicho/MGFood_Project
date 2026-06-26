import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

companies = [
    ("바른씨", "바른씨"),
    ("조점례남문피순대", "조점례남문피순대"),
    ("무봉리토종순대국", "무봉리"),
    ("작심밀도", "모두에프앤비"),
    ("미트타임", "미트타임"),
    ("맛팜", "맛팜"),
    ("자연맛남", "자연맛남"),
    ("신의주에프앤비", "신의주에프앤비"),
    ("단천식당", "단천식당"),
    ("도야지식품", "도야지식품"),
    ("마크원", "마크원")
]

for label, search_name in companies:
    try:
        url = f"https://dart.fss.or.kr/dsab001/search.ax"
        data = urllib.parse.urlencode({"textCrpNm": search_name}).encode('utf-8')
        req = urllib.request.Request(url, data=data, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        
        if "검색된 자료가 없습니다" in html or "결과가 없습니다" in html:
            print(f"{label} ({search_name}): No results on DART.")
        else:
            print(f"{label} ({search_name}): Found results on DART!")
            # Extract some info if found
            soup = BeautifulSoup(html, 'html.parser')
            table = soup.find('table')
            if table:
                rows = table.find_all('tr')
                for row in rows[:3]: # print first 3 rows
                    print("  ", row.text.strip().replace('\n', ' '))
    except Exception as e:
        print(f"{label} ({search_name}): Error {e}")
