import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, BookOpen, ChevronRight, ExternalLink, Mail, Menu, X } from 'lucide-react'
import './styles.css'
import './contact.css'
import './home.css'
import './projects.css'

const projects = [
  {year:'2020–2024', title:'마술양품점·프로젝트 B', company:'스마일게이트', genre:'SNG · 샌드박스', tags:['시나리오','퀘스트','파트장'], summary:'마술양품점 런칭 직전 합류 후 메인 챕터 6 시나리오 전반과 서브·호감도 스토리를 제작했고, 설정 파트장으로서 전체적인 작업 방향 및 퀄리티 검수를 이끌었습니다.\n이후 샌드박스 장르인 프로젝트 B에 전환배치되어 목축·대장장이 직업 퀘스트를 제작했습니다.', proof:'챕터 6 메인 시나리오 · 기존 설정 보강 · 직업 퀘스트'},
  {year:'2017–2020', title:'마기아: 카르마 사가', company:'슈퍼애시드', genre:'모바일 액션 RPG', tags:['세계관','메인 퀘스트','연출','파트 리드'], summary:'메인 시나리오 기획자로서 전체 세계관과 캐릭터별 배경을 포괄하는 모든 메인 퀘스트 작성을 전담했습니다.\n더불어 개발 초기부터 런칭까지 전체 기간 동안 콘셉트 설정과 퀘스트 데이터, 아웃게임·인게임 연출까지 시나리오 관련 기획 전반을 총괄했습니다.', proof:'메인 퀘스트 약 370,000자 · 5개 언어 서비스 · 메인 퀘스트 음성 더빙'},
  {year:'2014–2016', title:'언라이트 트리니티 · 로맨틱 프린세스', company:'글리터', genre:'캐주얼 TCG · 여성향 연애 시뮬레이션', tags:['외주 디렉팅','콘텐츠','교정·교열'], summary:'언라이트 원작 IP 기반의 다양한 콘텐츠 기획과 검수에 폭넓게 참여했습니다.\n이후 여성향 연애 시뮬레이션 프로젝트를 리드하며 외부 작가 작업 관리와 시나리오 검수, 텍스트 교정·교열 및 더빙 대본 작성까지 다채로운 작업을 수행했습니다.', proof:'원작 IP 반영 콘텐츠 · 캐릭터 가이드 · 텍스트 교정 교열'},
  {year:'2013–2014', title:'프로젝트 P/G/B', company:'위메이드', genre:'캐주얼 모바일', tags:['콘셉트','퀘스트','시스템'], summary:'팀 내에서 동시에 진행되었던 다수 캐주얼 모바일 프로젝트들의 세계관, 캐릭터, 배경, 퀘스트 설정을 전담했으며, 일부 시스템 기획에도 참여했습니다.', proof:'다장르 모바일 기획'},
  {year:'2011–2012', title:'드라고나 온라인', company:'라이브플렉스', genre:'MMORPG', tags:['시나리오','퀘스트'], summary:'라이브 서비스에 참여하여 신규 지역 대규모 업데이트를 위한 메인 퀘스트 300여 개를 단독으로 제작하고 데이터 관리 업무를 담당했습니다.', proof:'50-59레벨 퀘스트 300여 개'}
]
const skills = [
  ['Narrative Design','세계관과 캐릭터의 서사를 플레이 흐름에 맞춰 구조화합니다.'],
  ['Quest Writing','메인·서브·호감도·이벤트 퀘스트를 설계하고 데이터까지 관리합니다.'],
  ['Concept Direction','캐릭터·배경·몬스터·아이템 콘셉트를 일관된 톤으로 확장합니다.'],
  ['Editorial Quality','출판편집 경력을 바탕으로 텍스트를 빠르고 정확하게 교정·교열합니다.']
]
const career = [
  ['2020.11–2024.01','스마일게이트 엔터테인먼트','부책임 · 시나리오/퀘스트/콘셉트'],
  ['2017.05–2020.02','슈퍼애시드','리드 시나리오 기획'],
  ['2014.10–2016.08','글리터','주임 · 시나리오/콘텐츠/시스템'],
  ['2013.02–2014.10','위메이드 엔터테인먼트','전임연구원 · 시나리오/콘셉트'],
  ['2011.08–2012.09','라이브플렉스','시나리오/퀘스트 기획']
]

function App(){
 const [menu,setMenu]=useState(false);
 const go=id=>{document.querySelector(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)}
 return <main>
  <header className="nav"><a className="brand" href="#top">Hae-nim<span>.</span>Kang</a><nav className={menu?'open':''}>{['projects','skills','career','contact'].map((id,i)=><button key={id} onClick={()=>go('#'+id)}>{['참여 프로젝트','역량','경력','연락'][i]}</button>)}</nav><button className="menu" aria-label="메뉴" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <section id="top" className="hero"><div className="eyebrow"><span/> SENIOR GAME NARRATIVE DESIGNER</div><h1>이야기를 쓰고,<br/><em>플레이로 완성합니다.</em></h1><p className="lead">강해님 · 시나리오 / 퀘스트 / 콘셉트 기획</p><p className="intro">RPG부터 SNG까지 다양한 장르에 걸쳐 세계관과 캐릭터를 설계하고<br/>수백 개의 퀘스트를 실제 게임 데이터로 완성해 온 내러티브 주력 기획자입니다.<br/>2008-2009 네이버 게임 파워블로거 경력이 있으며<br/>현재는 각종 고전게임 플레이 실황을 스토리 중심으로 방송하고 있습니다.</p><div className="hero-actions"><button className="primary" onClick={()=>go('#projects')}>참여 프로젝트 보기 <ChevronRight/></button></div></section>
  <section id="projects" className="section projects-overview"><div className="section-head"><div><span className="kicker">PROJECT OVERVIEW</span><h2>참여 프로젝트</h2></div><p>다양한 장르와 개발 단계에 걸쳐<br/>이야기의 기획부터 구현까지의 과정을 담당했습니다.</p></div><div className="stats project-stats"><div><b>10년 9개월</b><span>게임 기획 경력</span></div><div><b>15개</b><span>참여 프로젝트 개수</span></div><div><b>370,000자</b><span>단일 프로젝트 메인 퀘스트 텍스트 분량</span></div><div><b>파트 리드</b><span>설정·시나리오 검수 경험</span></div></div><div className="overview-index">{projects.map((p,i)=><a href={`#project-${i+1}`} key={p.title}><span>0{i+1}</span><b>{p.title}</b><small>{p.year}</small></a>)}</div></section>
  {projects.map((p,i)=><section id={`project-${i+1}`} className="section project-page" key={p.title}><div className="project-page-number">PROJECT 0{i+1}</div><div className="project-page-content"><div className="meta"><span>{p.year}</span><span>{p.company}</span><span>{p.genre}</span></div><h2>{p.title}</h2><p>{p.summary}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-page-proof"><span>KEY OUTPUT</span><b>{p.proof}</b></div><div className="project-media" aria-label={`${p.title} 관련 이미지 영역`}><div><span>IMAGE 01</span></div><div><span>IMAGE 02</span></div></div></section>)}
  <section id="skills" className="section dark"><div className="section-head"><div><span className="kicker">CORE STRENGTHS</span><h2>글에서 구현까지</h2></div><p>완성된 문장에 그치지 않고<br/>실제로 사용할 수 있는 규격과 데이터까지 책임집니다.</p></div><div className="skill-grid">{skills.map((s,i)=><article key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div><blockquote><BookOpen/><p>“다채롭고 풍성한 내용을 깔끔하고 정확한 형태의 텍스트로 정돈합니다.”</p><span>— 작업 원칙</span></blockquote></section>
  <section id="career" className="section"><div className="section-head"><div><span className="kicker">EXPERIENCE</span><h2>경력 타임라인</h2></div><p>종합출판사 편집자로부터 게임 기획자로 전직하여<br/>라이브 MMORPG, 캐주얼 모바일, 액션 RPG, SNG, 샌드박스를 아우르는 다양한 장르를 경험했습니다.</p></div><div className="timeline">{career.map(c=><div key={c[0]}><time>{c[0]}</time><h3>{c[1]}</h3><p>{c[2]}</p></div>)}</div><div className="note"><strong>기반 역량</strong><p>국어국문학 전공 · 출판편집 경력 · 전문 교정/교열 · 일본어 중급 · Unity 플레이 테스트/데이터 입력 경험</p></div></section>
  <section id="contact" className="contact"><span className="kicker">CONTACT</span><h2>어떤 환경에서든 그에 가장 잘 어울리는<br/>멋지고 흥미로운 세계를 만들어 나가겠습니다.</h2><div className="contact-info"><dl className="contact-column"><div><dt>이름</dt><dd>강해님</dd></div><div><dt>거주지</dt><dd>서울시 은평구</dd></div><div><dt>전화</dt><dd><a href="tel:01071849283">010-7184-9283</a></dd></div></dl><dl className="contact-column"><div><dt>학력</dt><dd>단국대학교 국어국문학과 졸업</dd></div><div><dt>블로그</dt><dd><a href="https://blog.naver.com/spearsun" target="_blank" rel="noreferrer">blog.naver.com/spearsun</a></dd></div></dl></div><div className="contact-links"><a href="mailto:mingyun86@naver.com"><Mail/>mingyun86@naver.com<ArrowUpRight/></a><a href="https://github.com/mingyun372-cmyk/Haenim_resume" target="_blank" rel="noreferrer"><ExternalLink/>GitHub Repository<ArrowUpRight/></a></div></section>
  <footer><span>© 2011-2024 Haenim Kang</span><span>Scenario · Quest · Concept</span></footer>
 </main>
}
createRoot(document.getElementById('root')).render(<App/>)

