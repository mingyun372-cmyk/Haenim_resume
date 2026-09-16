from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Image, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Hae-nim-Kang-Resume.pdf"
PUBLIC = ROOT / "public" / "downloads" / "Hae-nim-Kang-Resume.pdf"
PHOTO = ROOT / "src" / "assets" / "profile" / "haenim-kang.png"

pdfmetrics.registerFont(TTFont("Malgun", r"C:\Windows\Fonts\malgun.ttf"))
pdfmetrics.registerFont(TTFont("MalgunBold", r"C:\Windows\Fonts\malgunbd.ttf"))

ACCENT = colors.HexColor("#087B8F")
INK = colors.HexColor("#202522")
MUTED = colors.HexColor("#5E6964")
LINE = colors.HexColor("#CFD9D5")
PALE = colors.HexColor("#F2F6F4")

styles = getSampleStyleSheet()
base = ParagraphStyle("Base", fontName="Malgun", fontSize=9, leading=15, textColor=INK)
small = ParagraphStyle("Small", parent=base, fontSize=7.5, leading=11, textColor=MUTED)
name = ParagraphStyle("Name", parent=base, fontName="MalgunBold", fontSize=29, leading=34, spaceAfter=4)
en_name = ParagraphStyle("EnglishName", parent=base, fontName="MalgunBold", fontSize=10, leading=14, textColor=MUTED)
role = ParagraphStyle("Role", parent=base, fontName="MalgunBold", fontSize=12, leading=18, spaceBefore=10, spaceAfter=7)
section = ParagraphStyle("Section", parent=base, fontName="MalgunBold", fontSize=9, leading=13, textColor=ACCENT, spaceBefore=8, spaceAfter=10)
company = ParagraphStyle("Company", parent=base, fontName="MalgunBold", fontSize=12, leading=16)
accent_small = ParagraphStyle("AccentSmall", parent=small, fontName="MalgunBold", textColor=ACCENT)
bullet = ParagraphStyle("Bullet", parent=base, fontSize=8.3, leading=13, leftIndent=10, firstLineIndent=-8, bulletIndent=0)

highlights = [
    ("10년 9개월", "게임 기획 경력"),
    ("15개·7개", "참여 프로젝트 개수·출시 프로젝트 개수"),
    ("370,000자", "단일 프로젝트 메인 퀘스트 텍스트 분량"),
    ("파트 리드", "설정·시나리오 검수 경험"),
]

strengths = [
    ("내러티브 설계", "세계관·캐릭터·메인 및 서브 시나리오 기획"),
    ("퀘스트 구현", "퀘스트 작성부터 데이터 입력과 관리까지 수행"),
    ("콘셉트 기획", "캐릭터·배경·몬스터·아이템 디자인 설정"),
    ("편집 품질", "출판편집 실무를 바탕으로 한 전문 교정·교열"),
    ("개발 협업", "Unity 플레이 테스트·데이터 입력·일부 UI 작업"),
    ("도구와 언어", "Microsoft Office·Photoshop·한글·일본어 중급"),
]

experience = [
    ("2020.11–2024.01", "스마일게이트 엔터테인먼트", "부책임 · 시나리오/퀘스트/콘셉트 기획", ["마술양품점 설정 파트장으로 작업 방향 설정·관리 및 파트원 케어", "메인 챕터 6 전체 시나리오와 퀘스트 325개 작성", "프로젝트 B 대장장이·목축 직업 퀘스트 150여 개 작성"]),
    ("2017.05–2020.02", "슈퍼애시드", "리드 시나리오 기획 · 시나리오 관련 작업 전반 총괄", ["마기아: 카르마 사가 기본 세계관과 캐릭터별 시나리오 설정", "메인 퀘스트 전체 약 370,000자 및 일부 서브 퀘스트 작성", "퀘스트 연출·데이터와 캐릭터·배경·몬스터 콘셉트 작업 리드"]),
    ("2014.10–2016.08", "글리터", "주임 · 시나리오/콘셉트/콘텐츠/시스템 기획", ["언라이트 트리니티 원작 IP 기반 콘텐츠와 퀘스트 설정 검수", "로맨틱 프린세스 시나리오·일러스트 외주 작업 관리", "프로젝트 텍스트 교정·교열과 사운드·튜토리얼·데이터 관리"]),
    ("2013.02–2014.10", "위메이드 엔터테인먼트", "전임연구원 · 시나리오/콘셉트/콘텐츠/시스템 기획", ["동시 개발된 다수 캐주얼 모바일 프로젝트의 시나리오와 콘셉트 전담", "세계관·캐릭터·배경·퀘스트 설정과 데이터 관리", "일부 콘텐츠·시스템 기획 및 신규 프로젝트 아이디어 제안"]),
    ("2011.08–2012.09", "라이브플렉스", "사원 · 시나리오/퀘스트 기획", ["드라고나 온라인 라이브 서비스 퀘스트 작성과 데이터 관리", "신규 지역 업데이트용 메인 퀘스트 300여 개 단독 제작", "캐릭터·몬스터·아이템·필드·던전 배경 시나리오 설정"]),
    ("2010.05–2011.04", "생각의나무", "출판편집자 · 편집1팀", ["다양한 분야의 서적 10여 권 편집·교정·교열 담당"]),
]


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 13 * mm, 192 * mm, 13 * mm)
    canvas.setFont("Malgun", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 8 * mm, "Hae-nim Kang · Senior Game Narrative Designer")
    canvas.drawRightString(192 * mm, 8 * mm, str(doc.page))
    canvas.restoreState()


def p(text, style=base):
    return Paragraph(text, style)


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(OUTPUT), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=16*mm, bottomMargin=18*mm, title="강해님 이력서", author="강해님")
    story = []

    intro = [p("SENIOR GAME NARRATIVE DESIGNER", section), p("강해님", name), p("Hae-nim Kang", en_name), p("시나리오 · 퀘스트 · 콘셉트 기획", role), p("RPG부터 SNG와 샌드박스까지 다양한 장르에서 세계관과 캐릭터를 설계하고, 퀘스트를 실제 게임 데이터로 구현해 온 내러티브 기획자입니다.", base), Spacer(1, 8), p("mingyun86@naver.com  ·  010-7184-9283  ·  blog.naver.com/spearsun  ·  서울시 은평구", small)]
    photo = Image(str(PHOTO), width=36*mm, height=42*mm)
    hero = Table([[intro, photo]], colWidths=[132*mm, 38*mm], hAlign="LEFT")
    hero.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"MIDDLE"),("ALIGN",(1,0),(1,0),"RIGHT"),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),0),("TOPPADDING",(0,0),(-1,-1),0),("BOTTOMPADDING",(0,0),(-1,-1),0)]))
    story += [hero, Spacer(1, 15), p("KEY HIGHLIGHTS", section)]
    cells = [[[p(v, ParagraphStyle("Metric", parent=base, fontName="MalgunBold", fontSize=14, leading=18)), Spacer(1, 14), p(label, small)] for v,label in highlights]]
    metrics = Table(cells, colWidths=[43.5*mm]*4, rowHeights=[32*mm])
    metrics.setStyle(TableStyle([("BACKGROUND",(0,0),(-1,-1),colors.white),("BOX",(0,0),(-1,-1),0.5,LINE),("INNERGRID",(0,0),(-1,-1),0.5,LINE),("VALIGN",(0,0),(-1,-1),"TOP"),("LEFTPADDING",(0,0),(-1,-1),7),("RIGHTPADDING",(0,0),(-1,-1),7),("TOPPADDING",(0,0),(-1,-1),8)]))
    story += [metrics, Spacer(1, 18), p("CORE STRENGTHS", section)]
    strength_rows = []
    for i in range(0, len(strengths), 2):
        row=[]
        for title, desc in strengths[i:i+2]: row.append(Table([[p(title, ParagraphStyle("SName",parent=base,fontName="MalgunBold",fontSize=9)),p(desc,small)]],colWidths=[30*mm,55*mm],style=[("VALIGN",(0,0),(-1,-1),"TOP"),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),4)]))
        strength_rows.append(row)
    st = Table(strength_rows,colWidths=[87*mm,87*mm])
    st.setStyle(TableStyle([("LINEABOVE",(0,0),(-1,-1),0.35,LINE),("VALIGN",(0,0),(-1,-1),"TOP"),("TOPPADDING",(0,0),(-1,-1),7),("BOTTOMPADDING",(0,0),(-1,-1),7),("LEFTPADDING",(0,0),(-1,-1),0)]))
    story += [st, PageBreak(), p("PROFESSIONAL EXPERIENCE", section)]

    for period, company_name, job, bullets in experience:
        details=[p(company_name,company),p(job,accent_small),Spacer(1,5)]+[p("• "+b,bullet) for b in bullets]
        row=Table([[p(period,small),details]],colWidths=[35*mm,139*mm])
        row.setStyle(TableStyle([("VALIGN",(0,0),(-1,-1),"TOP"),("LINEABOVE",(0,0),(-1,0),0.45,LINE),("LEFTPADDING",(0,0),(-1,-1),0),("RIGHTPADDING",(0,0),(-1,-1),4),("TOPPADDING",(0,0),(-1,-1),9),("BOTTOMPADDING",(0,0),(-1,-1),9)]))
        story.append(KeepTogether(row))

    story += [Spacer(1, 18), p("EDUCATION", section), p("<b>단국대학교</b>  인문학부 국어국문학과 졸업 · 2005.03–2010.02", base), Spacer(1, 16), p("ADDITIONAL EXPERIENCE", section), p("• 2008–2009 네이버 게임리뷰 부문 파워블로거<br/>• 자작 판타지소설 집필 · 단행본 18–20권 분량<br/>• 일본어판 SRPG 타이틀 2종 완전공략 작성", base)]
    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
    PUBLIC.write_bytes(OUTPUT.read_bytes())


if __name__ == "__main__":
    build()

