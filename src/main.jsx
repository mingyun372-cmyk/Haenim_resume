import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, BookOpen, ChevronRight, ExternalLink, Mail, Menu, X } from 'lucide-react'
import './styles.css'
import './contact.css'

const projects = [
  {year:'2020–2024', title:'마술양품점 · 프로젝트 B', company:'스마일게이트', genre:'SNG · 샌드박스', tags:['시나리오','퀘스트','파트 리드'], summary:'마술양품점 런칭 직전 합류 후 서브·호감도 스토리와 메인 챕터 6을 담당하고, 설정 파트장으로 서브 스토리 검수를 이끌었습니다. 이후 샌드박스 프로젝트의 목축·대장장이 직업 퀘스트를 제작했습니다.', proof:'메인 챕터 6 · NPC 호감도 · 직업 퀘스트'},
  {year:'2017–2020', title:'마기아: 카르마 사가', company:'슈퍼애시드', genre:'모바일 액션 RPG', tags:['세계관','메인 퀘스트','연출'], summary:'메인 시나리오 기획자로 전체 세계관, 캐릭터별 배경, 모든 메인 퀘스트 텍스트를 전담했습니다. 콘셉트 설정과 퀘스트 데이터, 아웃게임·인게임 연출까지 총괄했습니다.', proof:'메인 퀘스트 약 370,000자 · 5개 언어 서비스'},
  {year:'2015–2016', title:'로맨틱 프린세스', company:'글리터', genre:'여성향 연애 시뮬레이션', tags:['외주 디렉팅','콘텐츠','교정·교열'], summary:'외부 작가 작업 관리와 시나리오 검수, 텍스트 교정·교열을 담당했습니다. 신규 캐릭터 가이드와 아이템 콘셉트, 튜토리얼·시네마 시스템, 더빙 대본까지 폭넓게 수행했습니다.', proof:'외주 관리 · 캐릭터 가이드 · 부분 보이스 대본'},
  {year:'2012–2014', title:'드라고나 · 프로젝트 P/G/B', company:'라이브플렉스 · 위메이드', genre:'MMORPG · 캐주얼 모바일', tags:['퀘스트','콘셉트','시스템'], summary:'드라고나 50–59레벨 업데이트의 메인 퀘스트 300여 개를 단독 제작·관리했습니다. 이후 모바일 프로젝트들의 세계관, 캐릭터, 배경, 퀘스트와 시스템 기획을 맡았습니다.', proof:'업데이트 퀘스트 300여 개 · 다장르 모바일 기획'}
]
const skills = [
  ['Narrative Design','세계관과 캐릭터의 서사를 플레이 흐름에 맞춰 구조화합니다.'],
  ['Quest Writing','메인·서브·호감도·이벤트 퀘스트를 설계하고 데이터까지 관리합니다.'],
  ['Concept Direction','캐릭터·배경·몬스터·아이템 콘셉트를 일관된 톤으로 확장합니다.'],
  ['Editorial Quality','출판편집 경력을 바탕으로 대량 텍스트를 빠르고 정확하게 교정·교열합니다.']
]
const career = [
  ['2020.11–2024.01','스마일게이트 엔터테인먼트','부책임 · 시나리오/퀘스트/콘셉트'],
  ['2017.05–2020.02','슈퍼애시드','리드 시나리오 기획'],
  ['2014.10–2016.08','글리터','주임 · 시나리오/콘텐츠/시스템'],
  ['2013.02–2014.10','위메이드 엔터테인먼트','전임연구원 · 시나리오/콘셉트'],
  ['2011.08–2012.09','라이브플렉스','시나리오/퀘스트 기획']
]

function App(){
 const [menu,setMenu]=useState(false); const [filter,setFilter]=useState('전체'); const filters=['전체','시나리오','퀘스트','파트 리드','콘텐츠'];
 const visible=filter==='전체'?projects:projects.filter(p=>p.tags.includes(filter));
 const go=id=>{document.querySelector(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)}
 return <main>
  <header className="nav"><a className="brand" href="#top">HAENIM<span>.</span></a><nav className={menu?'open':''}>{['projects','skills','career','contact'].map((id,i)=><button key={id} onClick={()=>go('#'+id)}>{['프로젝트','역량','경력','연락'][i]}</button>)}</nav><button className="menu" aria-label="메뉴" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <section id="top" className="hero"><div className="eyebrow"><span/> SENIOR GAME SCENARIO WRITER</div><h1>이야기를 쓰고,<br/><em>플레이로 완성합니다.</em></h1><p className="lead">강해님 · 시나리오 / 퀘스트 / 콘셉트 기획</p><p className="intro">RPG부터 SNG까지, 세계관과 캐릭터를 설계하고 수백 개의 퀘스트를 실제 게임 데이터로 완성해 온 내러티브 기획자입니다.</p><div className="hero-actions"><button className="primary" onClick={()=>go('#projects')}>대표 프로젝트 보기 <ChevronRight/></button><a className="secondary" href="mailto:mingyun86@naver.com">이메일 보내기 <ArrowUpRight/></a></div><div className="stats"><div><b>10년 9개월</b><span>게임 기획 경력</span></div><div><b>370,000자</b><span>단일 프로젝트 메인 퀘스트</span></div><div><b>파트 리드</b><span>설정·시나리오 검수 경험</span></div></div></section>
  <section id="projects" className="section"><div className="section-head"><div><span className="kicker">SELECTED WORK</span><h2>대표 프로젝트</h2></div><p>역할, 산출물, 규모가 한눈에 보이도록 핵심 작업만 선별했습니다.</p></div><div className="filters">{filters.map(f=><button className={filter===f?'active':''} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><div className="project-list">{visible.map((p,i)=><article className="project" key={p.title}><div className="project-index">0{i+1}</div><div className="project-main"><div className="meta"><span>{p.year}</span><span>{p.company}</span><span>{p.genre}</span></div><h3>{p.title}</h3><p>{p.summary}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="proof"><span>KEY OUTPUT</span><b>{p.proof}</b></div></article>)}</div></section>
  <section id="skills" className="section dark"><div className="section-head"><div><span className="kicker">CORE STRENGTHS</span><h2>글에서 구현까지</h2></div><p>완성된 문장뿐 아니라 팀이 실제로 사용할 수 있는 규격과 데이터까지 책임집니다.</p></div><div className="skill-grid">{skills.map((s,i)=><article key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div><blockquote><BookOpen/><p>“다채롭고 풍성한 내용을 깔끔하고 정확한 형태의 텍스트로 정돈합니다.”</p><span>— 작업 원칙</span></blockquote></section>
  <section id="career" className="section"><div className="section-head"><div><span className="kicker">EXPERIENCE</span><h2>경력 타임라인</h2></div><p>출판편집에서 시작해 라이브 MMORPG, 캐주얼 모바일, 액션 RPG, SNG까지 경험했습니다.</p></div><div className="timeline">{career.map(c=><div key={c[0]}><time>{c[0]}</time><h3>{c[1]}</h3><p>{c[2]}</p></div>)}</div><div className="note"><strong>기반 역량</strong><p>국어국문학 전공 · 출판편집 경력 · 전문 교정/교열 · 일본어 중급 · Unity 플레이 테스트/데이터 입력 경험</p></div></section>
  <section id="contact" className="contact"><span className="kicker">CONTACT</span><h2>어떤 환경에서든 그에 가장 잘 어울리는<br/>멋지고 흥미로운 세계를 만들어 나가겠습니다.</h2><div className="contact-info"><dl className="contact-column"><div><dt>이름</dt><dd>강해님</dd></div><div><dt>거주지</dt><dd>서울시 은평구</dd></div><div><dt>전화</dt><dd><a href="tel:01071849283">010-7184-9283</a></dd></div></dl><dl className="contact-column"><div><dt>학력</dt><dd>단국대학교 국어국문학과 졸업</dd></div><div><dt>블로그</dt><dd><a href="https://blog.naver.com/spearsun" target="_blank" rel="noreferrer">blog.naver.com/spearsun</a></dd></div></dl></div><div className="contact-links"><a href="mailto:mingyun86@naver.com"><Mail/>mingyun86@naver.com<ArrowUpRight/></a><a href="https://github.com/mingyun372-cmyk/Haenim_resume" target="_blank" rel="noreferrer"><ExternalLink/>GitHub Repository<ArrowUpRight/></a></div></section>
  <footer><span>© 2024 Haenim Kang</span><span>Scenario · Quest · Concept</span></footer>
 </main>
}
createRoot(document.getElementById('root')).render(<App/>)

