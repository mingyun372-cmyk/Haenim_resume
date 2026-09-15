import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, BookOpen, ChevronRight, ExternalLink, Mail, Menu, X } from 'lucide-react'
import './styles.css'
import './contact.css'
import './home.css'
import './projects.css'
import magicShopTitle from './assets/projects/magic-shop/title.png'
import magicShopScenes from './assets/projects/magic-shop/scenes.jpg'
import magiaKeyArt from './assets/projects/magia/key-art.png'
import magiaDialogue from './assets/projects/magia/dialogue.png'
import unlightTrinity from './assets/projects/glitter/unlight-trinity.png'
import romanticPrincess from './assets/projects/glitter/romantic-princess.jpg'
import projectP from './assets/projects/wemade/project-p.png'
import projectGb from './assets/projects/wemade/project-gb.png'
import dragonaKeyArt from './assets/projects/dragona/key-art.png'
import dragonaQuest from './assets/projects/dragona/quest.png'
import narrativeTablet from './assets/hero/narrative-tablet.png'

const projects = [
  {year:'2020–2024', title:'마술양품점·프로젝트 B', company:'스마일게이트', genre:'SNG · 샌드박스', tags:['시나리오','퀘스트','파트장'], summary:'마술양품점 런칭 직전 합류 후 메인 챕터 6 시나리오 전반과 서브·호감도 스토리를 제작했고, 설정 파트장으로서 전체적인 작업 방향 및 퀄리티 검수를 이끌었습니다.\n이후 샌드박스 장르인 프로젝트 B에 전환배치되어 목축·대장장이 직업 퀘스트를 제작했습니다.', outputs:[{label:'담당 시나리오',text:'메인 중 ',highlight:'1개 챕터 전담'},{label:'제작 퀘스트',text:'메인·서브 통합 ',highlight:'550개+'},{label:'리드 경험',text:'설정 파트장'},{label:'외주 관리',text:'전문 작가 1인 밀착 담당'}], images:[{src:magicShopTitle,alt:'마술양품점 타이틀 화면'},{src:magicShopScenes,alt:'마술양품점 캐릭터 대화 및 호감도 화면'}]},
  {year:'2017–2020', title:'마기아: 카르마 사가', company:'슈퍼애시드', genre:'모바일 액션 RPG', tags:['세계관','메인 퀘스트','연출','파트 리드'], summary:'메인 시나리오 기획자로서 전체 세계관과 캐릭터별 배경을 포괄하는 모든 메인 퀘스트 작성을 전담했습니다.\n더불어 개발 초기부터 런칭까지 전체 기간 동안 콘셉트 설정과 퀘스트 데이터, 아웃게임·인게임 연출까지 시나리오 관련 기획 전반을 총괄했습니다.', outputs:[{label:'프로젝트 참여 범위',text:'개발 초기–정식 출시'},{label:'담당 영역',text:'',highlight:'시나리오 관련 작업 전반 리드'},{label:'최대 텍스트 작업량',text:'약 ',highlight:'370,000자'},{label:'글로벌 서비스',text:'',highlight:'5개 언어',suffix:' 번역 관리'}], images:[{src:magiaKeyArt,alt:'마기아 카르마 사가 캐릭터 키 아트'},{src:magiaDialogue,alt:'마기아 카르마 사가 대화 연출 화면'}]},
  {year:'2014–2016', title:'언라이트 트리니티 · 로맨틱 프린세스', company:'글리터', genre:'캐주얼 TCG · 여성향 연애 시뮬레이션', tags:['외주 디렉팅','콘텐츠','교정·교열'], summary:'언라이트 원작 IP 기반의 다양한 콘텐츠 기획과 검수에 폭넓게 참여했습니다.\n이후 여성향 연애 시뮬레이션 프로젝트를 리드하며 외부 작가 작업 관리와 시나리오 검수, 텍스트 교정·교열 및 더빙 대본 작성까지 다채로운 작업을 수행했습니다.', outputs:[{label:'참여 프로젝트 수',text:'',highlight:'5개',suffix:' (메인 담당 3개)'},{label:'주요 업무',text:'시스템/운영 지원, ',highlight:'텍스트 관리'},{label:'외주 관리',text:'외부 작가 ',highlight:'8인',suffix:' (글 4/그림 4) 담당'},{label:'기타',text:'유저 이벤트, QA, 빌드 업데이트 관리'}], images:[{src:unlightTrinity,alt:'언라이트 트리니티 전투 및 월드 화면'},{src:romanticPrincess,alt:'로맨틱 프린세스 캐릭터 키 아트'}]},
  {year:'2013–2014', title:'프로젝트 P/G/B', company:'위메이드', genre:'캐주얼 모바일', tags:['콘셉트','퀘스트','시스템'], summary:'팀 내에서 동시에 진행되었던 다수 캐주얼 모바일 프로젝트들의 세계관, 캐릭터, 배경, 퀘스트 설정을 전담했으며, 일부 시스템 기획에도 참여했습니다.', outputs:[{label:'참여 프로젝트 수',text:'',highlight:'4개'},{label:'주요 업무',text:'전 프로젝트 ',highlight:'설정 업무 단독 전담'},{label:'프로젝트 장르',text:'캐주얼 모바일'},{label:'기타',text:'사운드, UI, 미니게임 기획 및 관리'}], images:[{src:projectP,alt:'프로젝트 P 강아지 육성 화면'},{src:projectGb,alt:'프로젝트 P/G/B 캐주얼 게임 화면'}]},
  {year:'2011–2012', title:'드라고나 온라인', company:'라이브플렉스', genre:'MMORPG', tags:['시나리오','퀘스트'], summary:'라이브 서비스에 참여하여 신규 지역 대규모 업데이트를 위한 메인 퀘스트 300여 개를 단독으로 제작하고 데이터 관리 업무를 담당했습니다.', outputs:[{label:'프로젝트 참여 범위',text:'라이브 서비스·대규모 업데이트'},{label:'담당 시나리오',text:'신규 업데이트 ',highlight:'50-59레벨',suffix:' 구간'},{label:'제작 퀘스트',text:'메인·서브 통합 ',highlight:'350개+'},{label:'기타',text:'신규 필드 설정 및 BGM 기획'}], images:[{src:dragonaKeyArt,alt:'드라고나 온라인 캐릭터 키 아트'},{src:dragonaQuest,alt:'드라고나 온라인 퀘스트 대화 화면'}]}
]

const projectDescriptions = {
  '마술양품점·프로젝트 B': [
    '마술양품점 [런칭 직전에 합류]하여 라이브에 맞춰 퀘스트 보강 작업을 진행했고, 1년 후에는 [설정 파트장]의 자리를 이어받아 전체적인 작업 방향 및 퀄리티 검수를 이끌었습니다.',
    '실무 부분에서는 메인 챕터 6 시나리오 전반과 다수의 서브·호감도 스토리 퀘스트를 직접 제작했습니다.',
    '이후 샌드박스 장르인 프로젝트 B에 [전환배치]되어 외부 전문 작가의 시나리오 작업을 보조하고 관리하는 한편, 그에 맞춰 목축·대장장이 직업 퀘스트를 제작하기도 했습니다.',
    '정식으로 [파트장이라는 직책]을 맡아 파트원들을 케어하고 스케줄 및 외부 중재를 진행해본 전반적인 경험이 무척 유익한 성장의 기회로 작용했습니다.',
  ],
  '마기아: 카르마 사가': [
    '[메인 시나리오 기획자]로서 전체 세계관과 캐릭터별 배경을 포괄하는 모든 메인 퀘스트 작성을 전담하였습니다.',
    '더불어 [개발 초기부터 런칭]까지 전체 기간 동안 콘셉트 설정과 퀘스트 데이터, 아웃게임·인게임 연출까지 [시나리오 관련 기획 전반]을 총괄하여 스스로 충분히 만족할 수 있는 형태로 세상에 내보이게 되었습니다.',
    '해당 과정 중 1개월 기한 내에 200,000자 이상의 퀘스트 텍스트를 창작하는 기록을 세우면서, 남들보다 [빠른 속도와 높은 퀄리티]로 작업을 진행할 수 있다는 결과를 확인하고 전문성에 대한 자신감을 강화할 수 있었습니다.',
  ],
  '언라이트 트리니티 · 로맨틱 프린세스': [
    'PC 언라이트 원작 IP 기반의 모바일 프로젝트에 합류하여, 원작 [숙련 유저]로서의 지식과 애정을 기반으로 다양한 콘텐츠 기획과 검수에 폭넓게 참여하고 퀄리티를 끌어올렸습니다.',
    '이후 [여성향 연애 시뮬레이션 프로젝트를 리드]하며 외부 작가 작업 관리와 시나리오 검수, 텍스트 교정·교열 및 더빙 대본 작성까지 다채로운 작업을 수행했습니다.',
    '해당 기간에는 본 업무인 설정 기획 작업에는 그다지 참여할 수 없었으나, 대신 기존에 접해보지 못했던 그 외 다양한 분야의 업무들을 접하면서 [기획자로서의 종합적인 역량]을 한층 끌어올릴 수 있었습니다.',
  ],
  '프로젝트 P/G/B': [
    '팀원들이 여러 그룹으로 분할되어 다수의 프로젝트를 동시에 진행하는 환경에서, [유일한 시나리오 기획자]로서 팀 내 [모든 프로젝트의 서로 다른 설정 작업을 단독 전담]하는 중책을 맡았습니다.',
    '해당 과정에서는 상대적으로 기한이 짧고 내용이 수시로 뒤바뀌는 캐주얼 모바일 프로젝트의 기본적인 특성을 익히고, 그에 맞춰 스스로의 작업방식을 한층 [유연하고 효율적인 방향]으로 바꿔나갈 수 있었습니다.',
  ],
  '드라고나 온라인': [
    '안정적인 [라이브 서비스]가 진행되고 있던 시점에서 합류하여, 신규 지역 대규모 업데이트를 위한 메인 퀘스트 300여 개를 단독으로 제작하고 데이터 관리 업무를 담당했습니다.',
    '해당 시기에는 [신입 기획자]로서 게임업계의 [분위기 전반을 파악하고 적응]하는 것을 최우선목표로 삼아 실행하였던 바, 처음부터 곧장 실무에 투입되면서 단숨에 많은 경험을 쌓을 수 있었습니다.',
  ],
}

const renderHighlightedText = text => text.split(/(\[[^\]]+\])/g).map((part,index) =>
  part.startsWith('[') && part.endsWith(']')
    ? <em key={index}>{part.slice(1,-1)}</em>
    : part
)
const skills = [
  ['Narrative Design','세계관과 캐릭터의 서사를 플레이 흐름에 맞춰 구조화합니다.'],
  ['Quest Writing','메인·서브·호감도·이벤트 퀘스트를 설계하고 데이터까지 관리합니다.'],
  ['Concept Direction','캐릭터·배경·몬스터·아이템 콘셉트를 일관된 톤으로 확장합니다.'],
  ['Editorial Quality','출판편집 경력을 바탕으로 텍스트를 빠르고 정확하게 교정·교열합니다.']
]
const career = [
  ['2020.11–2024.01','스마일게이트 엔터테인먼트','부책임 · 시나리오/퀘스트/콘셉트'],
  ['2017.05–2020.02','슈퍼애시드','리드 시나리오 기획 · 시나리오 관련 작업 전반 총괄'],
  ['2014.10–2016.08','글리터','주임 · 시나리오/콘텐츠/시스템'],
  ['2013.02–2014.10','위메이드 엔터테인먼트','전임연구원 · 시나리오/콘셉트'],
  ['2011.08–2012.09','라이브플렉스','사원 · 시나리오/퀘스트 기획']
]

function App(){
 const [menu,setMenu]=useState(false);
 const go=id=>{document.querySelector(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)}
 return <main>
  <header className="nav"><a className="brand" href="#top">Hae-nim<span>.</span>Kang</a><nav className={menu?'open':''}>{['career','projects','skills','contact'].map((id,i)=><button key={id} onClick={()=>go('#'+id)}>{['경력','참여 프로젝트','역량','연락'][i]}</button>)}</nav><button className="menu" aria-label="메뉴" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <section id="top" className="hero"><div className="hero-copy"><div className="eyebrow"><span/> SENIOR GAME NARRATIVE DESIGNER</div><h1>이야기를 쓰고,<br/><em>플레이로 완성합니다.</em></h1><p className="lead">강해님 · 시나리오 / 퀘스트 / 콘셉트 기획</p><p className="intro">RPG부터 SNG까지 다양한 장르에 걸쳐 세계관과 캐릭터를 설계하고<br/>수백 개의 퀘스트를 실제 게임 데이터로 완성해 온 내러티브 주력 기획자입니다.<br/>2008-2009 네이버 게임 파워블로거 경력이 있으며<br/>현재는 각종 고전게임 플레이 실황을 스토리 중심으로 방송하고 있습니다.</p><div className="hero-actions"><button className="primary" onClick={()=>go('#projects')}>참여 프로젝트 보기 <ChevronRight/></button><a className="secondary" href={`${import.meta.env.BASE_URL}resume.html`}>이력서 보기 <ChevronRight/></a></div></div><figure className="hero-visual"><img src={narrativeTablet} alt="태블릿 위에서 디지털 문서를 작성하는 금빛 깃털 펜"/></figure></section>
  <section id="career" className="section"><div className="section-head"><div><span className="kicker">EXPERIENCE</span><h2>경력 타임라인</h2></div><p>종합출판사 편집자로부터 게임 기획자로 전직하여<br/>라이브 MMORPG, 캐주얼 모바일, 액션 RPG, SNG, 샌드박스를 아우르는 다양한 장르를 경험했습니다.</p></div><div className="timeline">{career.map(c=><div key={c[0]}><time>{c[0]}</time><h3>{c[1]}</h3><p>{c[2]}</p></div>)}</div><div className="note"><strong>기반 역량</strong><p>국어국문학 전공 · 출판편집 경력 · 전문 교정/교열 · 일본어 중급 · Unity 플레이 테스트/데이터 입력 경험</p></div></section>
  <section id="projects" className="section projects-overview"><div className="section-head"><div><span className="kicker">PROJECT OVERVIEW</span><h2>참여 프로젝트</h2></div><p>다양한 장르와 개발 단계에 걸쳐<br/>이야기의 기획부터 구현까지의 과정을 담당했습니다.</p></div><div className="stats project-stats"><div><b>10년 9개월</b><span>게임 기획 경력</span></div><div><b>15개</b><span>참여 프로젝트 개수</span></div><div><b>370,000자</b><span>단일 프로젝트 메인 퀘스트 텍스트 분량</span></div><div><b>파트 리드</b><span>설정·시나리오 검수 경험</span></div></div><div className="overview-index">{projects.map((p,i)=><a href={`#project-${i+1}`} key={p.title}><span>0{i+1}</span><b>{p.title}</b><small>{p.year}</small></a>)}</div></section>
  {projects.map((p,i)=><section id={`project-${i+1}`} className="section project-page" key={p.title}><div className="project-page-number">PROJECT 0{i+1}</div><div className="project-page-content"><div className="meta"><span>{p.year}</span><span>{p.company}</span><span>{p.genre}</span></div><h2>{p.title}</h2><div className="project-description">{(projectDescriptions[p.title]??[p.summary]).map((paragraph,index)=><p key={index}>{renderHighlightedText(paragraph)}</p>)}</div><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div><div className={`project-page-proof${p.outputs?' output-cards':''}`}><span>KEY OUTPUT</span>{p.outputs?<div className="output-list">{p.outputs.map(output=><div className="output-card" key={output.label}><strong>{output.label}</strong><p>{output.text}{output.highlight&&<em>{output.highlight}</em>}{output.suffix}</p></div>)}</div>:<b>{p.proof}</b>}</div><div className={`project-media${p.images?' has-images':''}`} aria-label={`${p.title} 관련 이미지 영역`}>{(p.images??[null,null]).map((image,index)=><div key={image?.src??index}>{image?<img src={image.src} alt={image.alt}/>:<span>IMAGE 0{index+1}</span>}</div>)}</div></section>)}
  <section id="skills" className="section dark"><div className="section-head"><div><span className="kicker">CORE STRENGTHS</span><h2>글에서 구현까지</h2></div><p>완성된 문장에 그치지 않고<br/>실제로 사용할 수 있는 규격과 데이터까지 책임집니다.</p></div><div className="skill-grid">{skills.map((s,i)=><article key={s[0]}><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></article>)}</div><blockquote><BookOpen/><p>“다채롭고 풍성한 내용을 깔끔하고 정확한 형태의 텍스트로 정돈합니다.”</p><span>— 작업 원칙</span></blockquote></section>
  <section id="contact" className="contact"><span className="kicker">CONTACT</span><h2>어떤 환경에서든 그에 가장 잘 어울리는<br/>멋지고 흥미로운 세계를 만들어 나가겠습니다.</h2><div className="contact-info"><dl className="contact-column"><div><dt>이름</dt><dd>강해님</dd></div><div><dt>거주지</dt><dd>서울시 은평구</dd></div><div><dt>연락처</dt><dd><a href="tel:01071849283">010-7184-9283</a></dd></div></dl><dl className="contact-column"><div className="education-row"><dt>학력</dt><dd className="education-entry">단국대학교 국어국문학과 졸업 <span>(2005.03–2010.02)</span></dd></div><div><dt>블로그</dt><dd><a href="https://blog.naver.com/spearsun" target="_blank" rel="noreferrer">blog.naver.com/spearsun</a></dd></div></dl></div><div className="contact-links"><a href="mailto:mingyun86@naver.com"><Mail/>mingyun86@naver.com<ArrowUpRight/></a><a href="https://github.com/mingyun372-cmyk/Haenim_resume" target="_blank" rel="noreferrer"><ExternalLink/>GitHub Repository<ArrowUpRight/></a></div></section>
  <footer><span>© 2011-2024 Haenim Kang</span><span>Scenario · Quest · Concept</span></footer>
 </main>
}
createRoot(document.getElementById('root')).render(<App/>)

