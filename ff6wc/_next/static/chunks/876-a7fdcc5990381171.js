"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[876],{6851:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7458),a=t(2983),o=t(7465),l=t(516),i=t(1455);let s=(0,l.j)(["inline"],{variants:{scale:{1:["min-w-[16px] min-h-[24px]"],2:["min-w-[32px] min-h-[48px]"],3:["min-w-[48px] min-h-[72px]"],4:["min-w-[64px] min-h-[96px]"],5:["min-w-[80px] min-h-[120px]"]}}}),u=e=>{let{alphaBytes:n,className:t,onClick:o,rgbBytes:l,scale:u=3,variant:c="full"}=e,d=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=d.current;if(!e||!l.length)return;let t=(0,i._)(l,u,16,24);(0,i.J)(t,n,e.getContext("2d",{willReadFrequently:!0}),16*u,24*u)},[n,d,l,u,c]),(0,r.jsx)("canvas",{className:s({className:t,scale:u}),onClick:o,ref:d,width:16*u,height:24*u})},c=e=>fetch(e).then(e=>e.json());function d(e){let{className:n,onClick:t,paletteId:l,poseId:i,scale:s=3,spriteId:d,variant:f="full"}=e,{data:g,error:b}=(0,o.Z)("".concat("https://narshe-qhiizr5utq-uw.a.run.app/","/api/sprite/").concat(d,"/").concat(l,"/").concat(i),c),{alphaBytes:h,rgbBytes:w}=a.useMemo(()=>{if(!g)return{alphaBytes:[],rgbBytes:[]};let{palette:e=[],sprite:n=[]}=g,t=e[0],r=n.map(n=>e[n]).flat();return{alphaBytes:t,rgbBytes:r}},[g]);return(0,r.jsx)(u,{alphaBytes:h,className:n,onClick:t,rgbBytes:w,scale:s,variant:f})}},1455:function(e,n,t){function r(e,n,t,r){let a=[];for(let o=0;o<r;o++)for(let l=0;l<n;l++)for(let i=0;i<t;i++)for(let s=0;s<n;s++)for(let u=0;u<3;u++){let c=u+3*i+o*t*3;a.push(e[c])}return a}function a(e,n,t,r,a){if(!t)return;let o=t.getImageData(0,0,r,a),l=o.data;for(let i=0,s=0;i<l.length&&s<e.length;i+=4,s+=3)l[i+0]=e[s+0],l[i+1]=e[s+1],l[i+2]=e[s+2],e[s+0]==n[0]&&e[s+1]==n[1]&&e[s+2]==n[2]?l[i+3]=0:l[i+3]=255;t.putImageData(o,0,0)}t.d(n,{J:function(){return a},_:function(){return r}})},3231:function(e,n,t){t.d(n,{fI:function(){return g},rc:function(){return A},mF:function(){return u},bX:function(){return r},Du:function(){return o},Sc:function(){return a},Hn:function(){return l},dF:function(){return f},FD:function(){return s},kH:function(){return c},hM:function(){return i},px:function(){return d},dd:function(){return en.dd},l$:function(){return en.l$},BL:function(){return en.BL}});let r=0,a=3,o=17,l=97,i=98,s=99,u=[a,5,7,8,9,10,11,12,13,15,19,16,o],c={value:s,label:"Random"},d={value:i,label:"Random Unique"},f={value:l,label:"None"},g={[s]:c,[i]:d,[l]:f,10:{value:10,label:"Blitz"},6:{value:6,label:"Capture"},14:{value:14,label:"Control"},19:{value:19,label:"Dance"},[r]:{value:r,label:"Fight"},24:{value:24,label:"GP Rain"},26:{value:26,label:"Health"},22:{value:22,label:"Jump"},[o]:{value:o,label:"Leap"},12:{value:12,label:"Lore"},29:{value:29,label:"Magitek"},[a]:{value:a,label:"Morph"},28:{value:28,label:"Possess"},16:{value:16,label:"Rage"},11:{value:11,label:"Runic"},13:{value:13,label:"Sketch"},27:{value:27,label:"Shock"},15:{value:15,label:"Slot"},5:{value:5,label:"Steal"},7:{value:7,label:"SwdTech"},8:{value:8,label:"Throw"},9:{value:9,label:"Tools"},23:{value:23,label:"X Magic"}};(G=O||(O={}))[G.Fire=1]="Fire",G[G.Ice=2]="Ice",G[G.Bolt=4]="Bolt",G[G.Bio=8]="Bio",G[G.Wind=16]="Wind",G[G.Pearl=32]="Pearl",G[G.Earth=64]="Earth",G[G.Water=128]="Water",(L=$||($={}))[L.Dark=1]="Dark",L[L.Zombie=2]="Zombie",L[L.Poison=4]="Poison",L[L.EnableMagitek=8]="EnableMagitek",L[L.Vanish=16]="Vanish",L[L.Imp=32]="Imp",L[L.Petrify=64]="Petrify",L[L.Death=128]="Death",(K=X||(X={}))[K.Condemned=1]="Condemned",K[K.Kneeling=2]="Kneeling",K[K.Blink=4]="Blink",K[K.Mute=8]="Mute",K[K.Berserk=16]="Berserk",K[K.Muddle=32]="Muddle",K[K.HPDrain=64]="HPDrain",K[K.Sleep=128]="Sleep",(q=Q||(Q={}))[q.DanceButFloatForEquip=1]="DanceButFloatForEquip",q[q.Regen=2]="Regen",q[q.Slow=4]="Slow",q[q.Haste=8]="Haste",q[q.Stop=16]="Stop",q[q.Shell=32]="Shell",q[q.Safe=64]="Safe",q[q.Reflect=128]="Reflect",(U=Y||(Y={}))[U.Rage=1]="Rage",U[U.Frozen=2]="Frozen",U[U.ProtectionfromDeath=4]="ProtectionfromDeath",U[U.MorphIntoEsper=8]="MorphIntoEsper",U[U.CastingSpell=16]="CastingSpell",U[U.RemovedfromBattle=32]="RemovedfromBattle",U[U.RandomlyDefendedByInterceptor=64]="RandomlyDefendedByInterceptor",U[U.Float=128]="Float";let b=Array.from(Array(27).keys()),[h,w,m,p,v,x,k,y,D,C,j,N,F,z,M,S,T,B,R,E,H,W,P,I,V,_,Z]=b;(J=ee||(ee={}))[J.terra=0]="terra",J[J.locke=1]="locke",J[J.cyan=2]="cyan",J[J.shadow=3]="shadow",J[J.edgar=4]="edgar",J[J.sabin=5]="sabin",J[J.celes=6]="celes",J[J.strago=7]="strago",J[J.relm=8]="relm",J[J.setzer=9]="setzer",J[J.mog=10]="mog",J[J.gau=11]="gau",J[J.gogo=12]="gogo",J[J.umaro=13]="umaro";let A=[1,9,10,11,16,20,22,24,29,31,32,36];[...A];var G,L,K,q,U,J,O,$,X,Q,Y,ee,en=t(3077)},3077:function(e,n,t){t.d(n,{dd:function(){return o},l$:function(){return i},BL:function(){return s}});class r{value(e){throw Error("must be overridden")}init(){}constructor(...e){this.args=e,this.init()}}class a extends r{constructor(e,n,t){super(e,n,t),this.key=e,this.name=n,this.byte=Math.floor(t/8),this.raw_bit=t,this.bit=t%8}}new a("terra","Terra",736),new a("locke","Locke",737),new a("cyan","Cyan",738),new a("shadow","Shadow",739),new a("edgar","Edgar",740),new a("sabin","Sabin",741),new a("celes","Celes",742),new a("strago","Strago",743),new a("relm","Relm",744),new a("setzer","Setzer",745),new a("mog","Mog",746),new a("gau","Gau",747),new a("gogo","Gogo",748),new a("umaro","Umaro",749),new a("ancientCastle","Ancient Castle",733),new a("barenFalls","Baren Falls",63),new a("burningHouse","Burning House",144),new a("collapsingHouse","Collapsing House",650),new a("darill","Daryl's Tomb",690),new a("doma","Doma Siege",64),new a("nightmare1","Doma Dream Door",216),new a("nightmare2","Doma Dream Awaken",218),new a("nightmare3","Doma Dream Throne",219),new a("ebotsRock","Ebot's Rock",412),new a("esperMountain","Esper Mountain",149),new a("fanaticsTower1","Fanatic's Tower Follower",186),new a("fanaticsTower2","Fanatic's Tower Follower",731),new a("figaroThrone","Figaro Castle Throne",4),new a("figaroCastleEngineRoom","Figaro Castle Engine",198),new a("floatingContinent1","Floating Cont. Arrive",42),new a("floatingContinent2","Floating Cont. Beast",161),new a("floatingContinent3","Floating Cont. Escape",165),new a("gauManor","Gau's Father's House",354),new a("imperialCamp","Imperial Camp",55),new a("atmaWeapon","Kefka's Tower Cell Beast",162),new a("kohligen","Kohlingen Cafe",398),new a("leteRiver","Lete River",599),new a("loneWolf1","Lone Wolf Chase",575),new a("loneWolf2","Lone Wolf Moogle Room",577),new a("magitek1","Magitek Factory Trash",97),new a("magitek2","Magitek Factory Guard",95),new a("magitek3","Magitek Factory Finish",107),new a("mobliz","Mobliz Attack",191),new a("moogleDefense","Moogle Defense",302),new a("mtKoltz","Mt. Kolts",16),new a("mtZozo","Mt. Zozo",210),new a("kefkaAtNarshe","Narshe Battle",70),new a("narsheWeaponShop1","Narshe Weapon Shop",182),new a("narsheWeaponShop2","Narshe Weapon Shop Mines",183),new a("operaHouse","Opera House Disruption",91),new a("owzersMansion","Owzer's Mansion",595),new a("phantomTrain","Phantom Train",402),new a("phoenixCave","Phoenix Cave",215),new a("sealedGate","Sealed Gate",1137),new a("doomGaze","Search The Skies",673),new a("serpentTrench","Serpent Trench",80),new a("chainedCeles","South Figaro Prisoner",29),new a("tunnelArmor","South Figaro Cave",177),new a("tritoch","Tritoch Cliff",670),new a("tzenThief","Tzen Thief",636),new a("umarosCave","Umaro's Cave",126),new a("veldt","Veldt",444),new a("veldtCave","Veldt Cave",409),new a("whelk","Whelk Gate",309),new a("zoneEater","Zone Eater",212),new a("ramuh","Zozo Tower",82),new a("auctionHouse1","Auction House Esper 1",364),new a("auctionHouse2","Auction House Esper 2",365),new a("ancientCastle","Ancient Castle Dragon",287),new a("fanaticsTower","Fanatic's Tower Dragon",289),new a("kefkaTowerMid","Kefka's Tower Dragon G",285),new a("kefkaTowerRight","Kefka's Tower Dragon S",286),new a("mtZozo","Mt. Zozo Dragon",283),new a("narshe","Narshe Dragon",282),new a("operaHouse","Opera House Dragon",284),new a("phoenixCave","Phoenix Cave Dragon",288),new a("iceDragon","iceDragon",144),new a("stormDragon","stormDragon",145),new a("dirtDragon","dirtDragon",146),new a("goldDragon","goldDragon",147),new a("skullDragon","skullDragon",148),new a("blueDragon","blueDragon",149),new a("redDragon","redDragon",150),new a("whiteDragon","whiteDragon",151);let o=["terra","locke","cyan","shadow","edgar","sabin","celes","strago","relm","setzer","mog","gau","gogo","umaro"],l={terra:2,locke:1,cyan:4,shadow:4,edgar:0,sabin:0,celes:0,strago:3,relm:3,setzer:4,mog:5,gau:3,gogo:3,umaro:5},i=o.map(e=>l[e]),s=[1,0,0,3,6,1,0,3]},1808:function(e,n,t){t.d(n,{i:function(){return a}});var r=t(7458);let a=e=>{let{}=e;return(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true",children:(0,r.jsx)("div",{className:"w-full border-y-1 border-t-gray-300 border-b-transparent"})})})}},6191:function(e,n,t){t.d(n,{zx:function(){return l},ZP:function(){return g},Zb:function(){return p},dn:function(){return x},qD:function(){return j},iz:function(){return N.i},$_:function(){return F},h4:function(){return z},p6:function(){return S},II:function(){return B},rU:function(){return c},iR:function(){return E},rs:function(){return I},Hu:function(){return A}});var r=t(7458),a=t(3142);let o=(0,a.j)(["WC-button","text-base","rounded-none","transition-all"],{variants:{disabled:{true:"opacity-40 cursor-not-allowed"},size:{default:["px-4","py-2"],small:["px-2","py-1","text-s"],smallest:["p-0"]},variant:{default:["bg-none","border-white hover:border-primary-300 active:border-primary","focus-visible:outline-2 focus-visible:outline-blue-300"],primary:["bg-blue-700 text-white","hover:bg-blue-800","active:bg-blue-900","border-blue-300 active:border-blue-500","focus-visible:border-blue-300 focus-visible:outline-2"],danger:["bg-red-600 text-white","hover:bg-red-700","active:bg-red-800","border-red-300 active:border-red-600","focus-visible:border-red-300 focus-visible:outline-2"],discord:["bg-discord text-white","hover:bg-blue-800","active:bg-blue-900","border-blue-300 active:border-blue-500","focus-visible:border-blue-300 focus-visible:outline-2"],outline:["text-gray-700","focus-visible:shadow-input-focus focus-visible:border-inputs-focus focus-visible:outline-none","border-inputs-border border-1","bg-transparent","border-2 border-inputs-border","outline-transparent","dark:border-white-500 dark:text-white bg-opacity-100"]}},defaultVariants:{size:"default",variant:"default"}}),l=e=>{let{children:n,className:t,disabled:l,size:i,variant:s,...u}=e;return(0,r.jsx)("button",{...u,className:(0,a.cx)("WC-button",t,o({disabled:l,size:i,variant:s})),disabled:l,children:n})};var i=t(6762),s=t.n(i);let u=(0,a.j)([],{variants:{color:{blue:["text-blue-300"],inherit:["text-inherit"]}},defaultVariants:{color:"blue"}}),c=e=>{let{children:n,className:t,color:a,href:o,target:l}=e,i=o.startsWith("https")?"_blank":void 0;return(0,r.jsx)(s(),{className:u({color:a,className:t}),href:o,target:i,children:n})};var d=t(8553),f=t.n(d);let g=e=>{let{children:n,className:t,href:a,variant:l}=e;return(0,r.jsx)(c,{color:"inherit",className:o({className:"".concat(f().className," ").concat(null!=t?t:""," inline-flex flex-row items-center justify-center gap-2 text-lg font-extrabold"),disabled:!1,variant:l}),href:a,children:n})};var b=t(2983);let h=(0,a.j)(["bg-panel-background dark:bg-slate-900","rounded-none","shadow-[0px_0px_1px_0px_rgba(0,0,0,0.75)]"]),w=(0,a.j)(["flex flex-col gap-4","mb-6","px-4 py-3","bg-panel-background dark:bg-gray-600"," border-panel-border"]),m=(0,a.j)(["px-4 py-2","font-medium"],{variants:{variant:{default:["bg-panel-header-background dark:bg-gray-700"],primary:["bg-blue-700","text-white "]}},defaultVariants:{variant:"default"}}),p=e=>{let{children:n,className:t,contentClassName:o,prependedComponent:l,title:i,variant:s="default",...u}=e;return(0,r.jsx)("div",{className:(0,a.cx)("WC-Card",t,"col-span-6 inline-block h-fit w-full"),children:(0,r.jsxs)("div",{...u,className:(0,a.cx)(h()),children:[(0,r.jsx)("div",{className:m({variant:s}),children:i}),l?(0,r.jsx)(r.Fragment,{children:l}):null,(0,r.jsx)("div",{className:(0,a.cx)(w(),o),children:n})]})})},v=(0,a.j)(["text-sm","max-h-[600px] bg-gray-200 dark:bg-gray-900 p-4","whitespace-pre font-mono break-words box-decoration-clone","overflow-x-auto"]),x=e=>{let{children:n,className:t,...o}=e;return(0,r.jsx)("code",{className:(0,a.cx)(v({className:t})),...o,children:n})};var k=t(3454),y=t.n(k),D=t(7934);let C=(0,a.j)(["max-w-[500px] min-h-[70px] inline-flex"]),j=e=>{let{}=e;return(0,r.jsx)(c,{className:o({className:C(),variant:"discord"}),href:D.Vs,target:"_blank",children:(0,r.jsx)(y(),{alt:"Join our Discord community",src:"/discordwhite.svg",width:155,height:60})})};var N=t(1808);let F=e=>{let{messages:n}=e;return(0,r.jsx)("div",{className:"WC-footer flex flex-col gap-2 w-full justify-center items-center bg-gray-600 text-white text-xs p-3",children:n.map((e,n)=>(0,r.jsx)("div",{className:"text-center",children:e},n))})},z=e=>{let{children:n=null,className:t}=e;return(0,r.jsxs)("div",{className:(0,a.cx)(t,"WC-header relative flex flex-col w-full min-h-fit justify-center items-center text-white text-xs shadow-lg p-4"),children:[(0,r.jsx)("div",{className:"z-20",children:(0,r.jsx)(c,{href:"/",children:(0,r.jsx)(y(),{alt:"Final Fantasy VI: Worlds Collide",src:"/thumbnaillogowhite.png",height:210.4,width:542.4})})}),(0,r.jsx)("div",{className:"WC-hero absolute top-0 bottom-0 left-0 right-0 bg-[url('/hero.png')] opacity-80 brightness-75 bg-no-repeat bg-cover bg-center z-0"})]})},M=(0,a.j)(["text-xs  whitespace-pre-wrap"],{variants:{variant:{success:["text-green-600 dark:text-green-400"],default:["text-slate-500 dark:text-gray-300"]},size:{default:["text-xs"],normal:["text-normal"]}},defaultVariants:{size:"default",variant:"default"}}),S=e=>{let{children:n,size:t,variant:a}=e;return(0,r.jsx)("span",{className:M({size:t,variant:a}),children:n})},T=(0,a.j)("",{variants:{variant:{default:["focus-visible:shadow-input-focus focus-visible:border-inputs-focus focus-visible:outline-none","border-inputs-border border-1","bg-inputs-background dark:bg-transparent","px-2 py-1","text-sm"]},disabled:{true:"select-none opacity-60 text-gray-500 dark:text-gray-200"}},defaultVariants:{variant:"default"}}),B=b.forwardRef((e,n)=>{let{className:t,disabled:o,...l}=e;return(0,r.jsx)("input",{...l,className:(0,a.cx)(T({disabled:o}),t),disabled:o,ref:n})});B.displayName="Input";var R=t(4728);(0,a.j)([],{variants:{variant:{}},defaultVariants:{}});let E=e=>{let{onChange:n,min:t=0,max:a=100,markActiveValues:o=!1,step:l=1,value:i,...s}=e,u="number"==typeof i?{[i]:i}:i?{[i[0]]:i[0],[i[1]]:i[1]}:{},c={[t]:t,[a]:a,...o?u:{}};return(0,r.jsx)(R.Z,{...s,className:"ff6-slider",step:null!=l?l:1,min:t,max:a,marks:c,onChange:n,value:i})};var H=t(3566);let W=(0,a.j)(["relative inline-flex h-3 w-8 items-center border-1","focus-visible:shadow-switch-focus","focus-visible:outline-1 outline-black"],{variants:{checked:{true:"bg-blue-600 border-blue-600 dark:border-gray-600",false:"bg-inputs-background border-inputs-border"}}}),P=(0,a.j)(["inline-block h-4 w-4 transform bg-black transition"],{variants:{checked:{true:"translate-x-4 bg-black",false:"translate-x-0 bg-zinc-400"}}}),I=e=>{let{checked:n,description:t,onChange:a}=e;return(0,r.jsxs)(H.r,{checked:n,onChange:a,className:W({checked:n}),children:[(0,r.jsx)("span",{className:"sr-only",children:t}),(0,r.jsx)("span",{className:P({checked:n})})]})};var V=t(6719);let _=(0,a.j)(["group relative min-w-0 flex-1","overflow-hidden","p-2","border-1 border-transparent","outline-1","outline-blue-500","outline-offset-0","rounded-none","focus:z-10","font-small md:font-medium"],{variants:{selected:{true:"text-gray-900 dark:text-white",false:"text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"}},defaultVariants:{selected:!1}}),Z=(0,a.j)(["absolute inset-x-0 bottom-0 h-0.5"],{variants:{selected:{true:"border-1 border-blue-400",false:"bg-transparent"}},defaultVariants:{selected:!1}}),A=e=>{let{children:n,className:t,selected:a}=e;return(0,r.jsxs)(V.O,{className:_({className:t,selected:a}),children:[(0,r.jsx)("span",{children:n}),(0,r.jsx)("span",{"aria-hidden":"true",className:Z({selected:a})})]})}},7934:function(e,n,t){t.d(n,{FU:function(){return a},Vs:function(){return r},rz:function(){return o}});let r="https://discord.gg/5MPeng5",a="https://forms.gle/99rEUH7MMaifdhkH6",o="https://wiki.ff6worldscollide.com"}}]);