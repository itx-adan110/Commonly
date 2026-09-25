const categories=[
  ['Design & Creative','Logos, branding, UI/UX and visual design','✦'],['Development & Tech','Websites, apps, automation and code','⌘'],['Writing & Translation','Copy, articles, localization and editing','Aa'],['Marketing','SEO, social media, ads and growth','↗'],['Video & Animation','Editing, motion graphics and explainers','▶'],['Business','Research, consulting and virtual assistance','▣'],['Music & Audio','Production, voice-over and sound','♫'],['AI Services','AI workflows, agents and creative production','AI']
];
const services=[
 {id:1,title:'I will design a clean, memorable logo for your brand',seller:'Maya Studio',verified:true,rating:4.9,reviews:184,price:25,delivery:3,category:'Design & Creative',tag:'Logo Design',icon:'✦',bio:'Brand identity designer focused on clear, practical visual systems.'},
 {id:2,title:'I will build a responsive modern landing page',seller:'DevCraft',verified:true,rating:5,reviews:96,price:80,delivery:5,category:'Development & Tech',tag:'Web Development',icon:'⌘',bio:'Frontend developer creating fast, accessible and responsive websites.'},
 {id:3,title:'I will edit short-form videos for Reels and Shorts',seller:'FrameLab',verified:false,rating:4.8,reviews:72,price:35,delivery:2,category:'Video & Animation',tag:'Video Editing',icon:'▶',bio:'Short-form editor specializing in clean pacing, captions and social formats.'},
 {id:4,title:'I will write SEO-friendly website copy that converts',seller:'North Copy',verified:true,rating:4.9,reviews:61,price:30,delivery:3,category:'Writing & Translation',tag:'Copywriting',icon:'Aa',bio:'Conversion-focused writer for websites, landing pages and product copy.'},
 {id:5,title:'I will create a practical social media content plan',seller:'Growth House',verified:false,rating:4.8,reviews:48,price:45,delivery:4,category:'Marketing',tag:'Social Media',icon:'↗',bio:'Marketing strategist helping small brands build repeatable content systems.'},
 {id:6,title:'I will automate your repetitive business workflow',seller:'FlowWorks',verified:true,rating:5,reviews:37,price:70,delivery:6,category:'AI Services',tag:'Automation',icon:'AI',bio:'Automation specialist building simple workflows that reduce repetitive work.'},
 {id:7,title:'I will design a polished mobile app UI kit',seller:'Form & Flow',verified:true,rating:4.9,reviews:113,price:120,delivery:7,category:'Design & Creative',tag:'UI/UX Design',icon:'◫',bio:'Product designer focused on useful interfaces and scalable component systems.'},
 {id:8,title:'I will fix HTML CSS JavaScript bugs on your website',seller:'CodePatch',verified:true,rating:4.9,reviews:88,price:40,delivery:2,category:'Development & Tech',tag:'Bug Fixing',icon:'</>',bio:'Frontend problem solver for responsive layouts, interactions and browser bugs.'}
];
const projects=[
 {id:1,title:'Need a designer for a complete startup brand identity',client:'Northstar Labs',verified:true,budget:'$500–800',min:500,max:800,proposals:12,time:'3 days ago',category:'Design & Creative',skills:['Branding','Logo Design','Figma'],deadline:'2 weeks',desc:'Create a compact brand identity including logo, color direction, typography and basic usage guidance.'},
 {id:2,title:'Build a fast responsive website for a local business',client:'Oak & Co.',verified:true,budget:'$800–1,200',min:800,max:1200,proposals:18,time:'5 hours ago',category:'Development & Tech',skills:['HTML','CSS','JavaScript','Responsive'],deadline:'3 weeks',desc:'Build a clean five-page business website with responsive layouts, contact form UI and basic SEO structure.'},
 {id:3,title:'Short-form video editor for a growing creator',client:'Creator Studio',verified:false,budget:'$300–500',min:300,max:500,proposals:9,time:'1 day ago',category:'Video & Animation',skills:['Premiere Pro','CapCut','Shorts'],deadline:'Ongoing',desc:'Edit a weekly batch of vertical videos with strong pacing, captions and platform-ready exports.'},
 {id:4,title:'SEO content writer for a technology publication',client:'Signal Media',verified:true,budget:'$400–700',min:400,max:700,proposals:15,time:'2 days ago',category:'Writing & Translation',skills:['SEO','Writing','Research'],deadline:'10 days',desc:'Write well-researched technology articles following a consistent editorial and SEO brief.'},
 {id:5,title:'Set up an automated lead collection workflow',client:'Vertex Digital',verified:true,budget:'$250–450',min:250,max:450,proposals:7,time:'4 days ago',category:'AI Services',skills:['Automation','APIs','Forms'],deadline:'1 week',desc:'Connect a lead form to a simple automated workflow with notifications and organized records.'}
];
const state={page:'home',role:'freelancer',query:'',category:'All',sort:'relevance',budget:'all',delivery:'all',selected:null,mobile:false,savedServices:new Set(),savedProjects:new Set(),dash:'overview'};
const SUPABASE_URL='https://iormqzywjypdbzooqvbd.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_8OrWi_W0O1S8HRBXD-oSBQ_FHasVOde';
const sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
let authUser=null;
const app=document.getElementById('app'),toast=document.getElementById('toast'),modalRoot=document.getElementById('modal-root');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const money=n=>`$${Number(n).toLocaleString()}`;
function notify(m){toast.textContent=m;toast.classList.add('show');clearTimeout(notify.t);notify.t=setTimeout(()=>toast.classList.remove('show'),2200)}
function go(page,item=null){state.page=page;state.selected=item;state.mobile=false;window.scrollTo({top:0,behavior:'smooth'});render()}
function iconMark(){return `<span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>`}
