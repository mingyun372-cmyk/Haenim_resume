import React from 'react'
import { createRoot } from 'react-dom/client'
import { Download, ExternalLink, Mail, Phone } from 'lucide-react'
import './resume.css'
import profilePhoto from './assets/profile/haenim-kang.png'
import smilegateImage from './assets/resume/experience/smilegate.png'
import superacidImage from './assets/resume/experience/superacid.png'
import glitterImage from './assets/resume/experience/glitter.png'
import wemadeImage from './assets/resume/experience/wemade.png'
import liveplexImage from './assets/resume/experience/liveplex.png'
import thinkingTreeImage from './assets/resume/experience/thinking-tree.png'

const highlights = [
  ['10년 9개월', '게임 기획 경력'],
  ['15개', '참여 프로젝트 개수'],
  ['370,000자', '단일 프로젝트 메인 퀘스트 텍스트 분량'],
  ['파트 리드', '설정·시나리오 검수 경험'],
]

const strengths = [
  ['내러티브 설계', '세계관·캐릭터·메인 및 서브 시나리오 기획'],
  ['퀘스트 구현', '퀘스트 작성부터 데이터 입력과 관리까지 수행'],
  ['콘셉트 기획', '캐릭터·배경·몬스터·아이템 디자인 설정'],
  ['편집 품질', '출판편집 실무를 바탕으로 한 전문 교정·교열'],
  ['개발 협업', 'Unity 플레이 테스트·데이터 입력·일부 UI 작업'],
  ['도구와 언어', 'Microsoft Office·Photoshop·한글·일본어 중급'],
]

const experience = [
  { period:'2020.11–2024.01', company:'스마일게이트 엔터테인먼트', role:'부책임 · 시나리오/퀘스트/콘셉트 기획', bullets:['마술양품점 설정 파트장으로 작업 방향 설정·관리 및 파트원 케어','메인 챕터 6 전체 시나리오와 퀘스트 325개 작성','프로젝트 B 대장장이·목축 직업 퀘스트 150여 개 작성'], image:smilegateImage, imageAlt:'마술양품점 타이틀 화면' },
  { period:'2017.05–2020.02', company:'슈퍼애시드', role:'리드 시나리오 기획 · 시나리오 관련 작업 전반 총괄', bullets:['마기아: 카르마 사가 기본 세계관과 캐릭터별 시나리오 설정','메인 퀘스트 전체 약 370,000자 및 일부 서브 퀘스트 작성','퀘스트 연출·데이터와 캐릭터·배경·몬스터 콘셉트 작업 리드'], image:superacidImage, imageAlt:'마기아 카르마 사가 타이틀 로고' },
  { period:'2014.10–2016.08', company:'글리터', role:'주임 · 시나리오/콘셉트/콘텐츠/시스템 기획', bullets:['언라이트 트리니티 원작 IP 기반 콘텐츠와 퀘스트 설정 검수','로맨틱 프린세스 시나리오·일러스트 외주 작업 관리','프로젝트 텍스트 교정·교열과 사운드·튜토리얼·데이터 관리'], image:glitterImage, imageAlt:'로맨틱 프린세스 캐릭터 키 아트' },
  { period:'2013.02–2014.10', company:'위메이드 엔터테인먼트', role:'전임연구원 · 시나리오/콘셉트/콘텐츠/시스템 기획', bullets:['동시 개발된 다수 캐주얼 모바일 프로젝트의 시나리오와 콘셉트 전담','세계관·캐릭터·배경·퀘스트 설정과 데이터 관리','일부 콘텐츠·시스템 기획 및 신규 프로젝트 아이디어 제안'], image:wemadeImage, imageAlt:'위메이드 캐주얼 모바일 프로젝트 화면' },
  { period:'2011.08–2012.09', company:'라이브플렉스', role:'사원 · 시나리오/퀘스트 기획', bullets:['드라고나 온라인 라이브 서비스 퀘스트 작성과 데이터 관리','신규 지역 업데이트용 메인 퀘스트 300여 개 단독 제작','캐릭터·몬스터·아이템·필드·던전 배경 시나리오 설정'], image:liveplexImage, imageAlt:'드라고나 온라인 타이틀 로고' },
  { period:'2010.05–2011.04', company:'생각의나무', role:'출판편집자 · 편집1팀', bullets:['다양한 분야의 서적 10여 권 편집·교정·교열 담당'], image:thinkingTreeImage, imageAlt:'생각의나무 출판사 로고' },
]

function Resume(){
 const base=import.meta.env.BASE_URL
 return <main className="resume-page">
  <nav className="resume-nav"><span>Hae-nim<span>.</span>Kang</span></nav>
  <header className="resume-hero"><div className="resume-hero-grid"><div className="resume-hero-copy"><p className="resume-kicker">SENIOR GAME NARRATIVE DESIGNER</p><h1>강해님 <small>Hae-nim Kang</small></h1><p className="resume-role">시나리오 · 퀘스트 · 콘셉트 기획</p><p className="resume-summary">RPG부터 SNG와 샌드박스까지 다양한 장르에서 세계관과 캐릭터를 설계하고, 퀘스트를 실제 게임 데이터로 구현해 온 내러티브 기획자입니다.</p><div className="resume-contact"><a href="mailto:mingyun86@naver.com"><Mail/>mingyun86@naver.com</a><a href="tel:01071849283"><Phone/>010-7184-9283</a><a href="https://blog.naver.com/spearsun" target="_blank" rel="noreferrer"><ExternalLink/>Naver Blog</a><span>서울시 은평구</span></div></div><figure className="resume-photo"><img src={profilePhoto} alt="강해님 프로필 사진"/></figure></div><div className="resume-actions"><a href={base}>포트폴리오 보기 <ExternalLink/></a><a href={`${base}downloads/Hae-nim-Kang-Resume.pdf`} download>이력서 PDF로 다운로드 <Download/></a></div></header>
  <section className="resume-section"><h2>KEY HIGHLIGHTS</h2><div className="highlight-grid">{highlights.map(([value,label])=><article key={label}><strong>{value}</strong><p>{label}</p></article>)}</div></section>
  <section className="resume-section"><h2>CORE STRENGTHS</h2><div className="strength-list">{strengths.map(([name,detail])=><article key={name}><h3>{name}</h3><p>{detail}</p></article>)}</div></section>
  <section className="resume-section"><h2>PROFESSIONAL EXPERIENCE</h2><div className="experience-list">{experience.map(item=><article key={item.period}><time>{item.period}</time><div><h3>{item.company}</h3><p className="experience-role">{item.role}</p><ul>{item.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul></div><figure className="experience-image-slot"><img src={item.image} alt={item.imageAlt}/></figure></article>)}</div></section>
  <section className="resume-section resume-bottom"><div><h2>EDUCATION</h2><h3>단국대학교</h3><p>인문학부 국어국문학과 졸업 · 2005.03–2010.02</p></div><div><h2>ADDITIONAL EXPERIENCE</h2><ul><li>2008–2009 네이버 게임리뷰 부문 파워블로거</li><li>자작 판타지소설 집필 · 단행본 18–20권 분량</li><li>일본어판 SRPG 타이틀 2종 완전공략 작성</li></ul></div></section>
  <footer className="resume-footer"><span>© 2011-2024 Haenim Kang</span></footer>
 </main>
}
createRoot(document.getElementById('resume-root')).render(<Resume/>)

