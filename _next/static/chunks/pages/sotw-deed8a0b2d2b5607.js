(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{3443:function(e,t,n){var r=n(4616);e.exports=function(e){var t=e.length;return t?e[r(0,t-1)]:void 0}},3060:function(e,t,n){var r=n(3443),s=n(3477);e.exports=function(e){return r(s(e))}},5807:function(e,t,n){var r=n(3443),s=n(3060),a=n(5589);e.exports=function(e){return(a(e)?r:s)(e)}},6966:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sotw",function(){return n(1652)}])},8425:function(e,t,n){"use strict";n.d(t,{t:function(){return c}});var r=n(7458),s=n(6191),a=n(2122),i=n(7934),l=n(863);let c=e=>(0,r.jsxs)("div",{children:[(0,r.jsx)(s.h4,{className:"flex"}),(0,r.jsxs)("div",{className:".WC-nav flex flex-wrap justify-center items-center gap-4 p-5 bg-zinc-800",children:[(0,r.jsx)(l.r,{}),(0,r.jsx)(s.qD,{}),(0,r.jsxs)(s.ZP,{className:"w-fit min-h-[70px]",href:i.rz,variant:"primary",children:[(0,r.jsx)(a.LsQ,{size:"36"}),"Wiki"]})]})]})},87:function(e,t,n){"use strict";n.d(t,{$_:function(){return l},So:function(){return c},xK:function(){return o}});var r=n(7458),s=n(6191);let a="Final Fantasy VI: Worlds Collide is an unofficial fan project not affiliated in any way with Square Enix",i=(0,r.jsxs)(r.Fragment,{children:["This site is protected by reCAPTCHA and the Google",(0,r.jsx)(s.rU,{href:"https://policies.google.com/privacy",children:"\xa0Privacy Policy\xa0"}),"and",(0,r.jsx)(s.rU,{href:"https://policies.google.com/terms",children:"\xa0Terms of Service\xa0"}),"apply"]}),l=e=>{let{}=e;return(0,r.jsx)(s.$_,{messages:["Created by AtmaTek and maintained by the community",a,i]})},c=e=>{let{}=e,t=(0,r.jsxs)("span",{children:["Thanks to\xa0",(0,r.jsx)(s.rU,{href:"https://github.com/emberling",children:"emberling"}),"\xa0for the support!"]});return(0,r.jsx)(s.$_,{messages:[t,a]})},o=()=>(0,r.jsx)(s.$_,{messages:[a]})},863:function(e,t,n){"use strict";n.d(t,{r:function(){return j}});var r=n(7458),s=n(6191),a=n(516),i=n(5807),l=n.n(i),c=n(3231),o=n(6851),u=n(7371);let f=()=>(0,u.ZP)(["/api/sprite/random"],async()=>{let e=await fetch("".concat("https://narshe-qhiizr5utq-uw.a.run.app/","/api/sprite/random")),t=await e.json();return t}),x=e=>{let{paletteId:t,poseId:n,spriteId:s}=e,{data:a}=f(),{palette_id:i,pose_id:l,sprite_id:c}=null!=a?a:{},u=null!=s?s:c,x=null!=t?t:i,d=null!=n?n:l,m=Number.isFinite(u)&&Number.isFinite(x)&&Number.isFinite(d);return m?(0,r.jsx)(o.Z,{paletteId:x,poseId:d,spriteId:u,scale:2,variant:"half"}):(0,r.jsx)("span",{className:"min-w-[32px] min-h-[48px]"})},d=Array.from(Array(22)).map((e,t)=>t),m=[...c.l$,...c.BL],h=()=>{let e=l()(d),t=m[e];return(0,r.jsx)(x,{spriteId:e,paletteId:t})},p=(0,a.j)(["w-fit max-w-[500px] min-h-[70px] inline-flex"]),j=e=>{let{}=e;return(0,r.jsxs)(s.ZP,{className:p(),href:"/sotw",variant:"primary",children:[(0,r.jsx)(h,{}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:"Seed of the Week"})})]})}},9330:function(e,t,n){"use strict";n.d(t,{q:function(){return x}});var r=n(7458),s=n(6191),a=n(7934),i=n(516),l=n(8749),c=n.n(l),o=n(8425),u=n(87);let f=e=>{let{sotw:t,sotwId:n}=e,{seed_id:a,seed:l}=t;return(0,r.jsxs)("div",{className:(0,i.cx)("flex flex-col gap-3 items-center border-1 p-4 mt-8 card-fancy-gradient"),children:[(0,r.jsxs)("h2",{className:"px-4 text-2xl font-mono",children:["SotW ",n]}),(0,r.jsx)("h2",{className:"text-3xl px-4 font-mono font-bold",children:t.name}),(0,r.jsxs)("p",{className:"text-sm px-4",children:["Submitted by ",t.submitter]}),(0,r.jsx)("p",{className:"text-base px-2",children:t.description}),(0,r.jsx)(s.rU,{href:a?"/seed/".concat(a):l,children:(0,r.jsx)(s.zx,{className:"w-fit uppercase font-mono font-semibold",variant:"primary",children:"Play Seed"})})]})},x=e=>{let{head:t,id:n,sotw:l}=e;return(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(o.t,{}),(0,r.jsx)("main",{className:(0,i.cx)(c().className,"flex flex-col w-full py-4 px-10 h-fit text-center items-center"),children:(0,r.jsxs)("div",{className:"flex flex-col gap-4 max-w-[900px]",children:[(0,r.jsx)("h1",{className:"text-3xl md:text-5xl",children:"Seed of the Week"}),(0,r.jsxs)("p",{className:"text-sm md:text-base",children:["Seed of the Week (SotW) is a casual weekly race and used as a showcase of different flagsets submitted by the by community. To submit your own flagset for Seed of the Week, use the\xa0",(0,r.jsx)(s.rU,{href:a.FU,children:"form found here"})]}),(0,r.jsxs)("p",{className:"text-sm md:text-base",children:["Join the\xa0",(0,r.jsx)(s.rU,{href:a.Vs,children:"Discord server"}),"\xa0to join the community and submit your times for SotW!"]}),(0,r.jsx)(f,{sotwId:n,sotw:l})]})}),(0,r.jsx)(u.$_,{})]})}},1652:function(e,t,n){"use strict";n.r(t);var r=n(7458),s=n(916),a=n.n(s),i=n(2983),l=n(5106),c=n.n(l),o=n(9330);let u=()=>{let[e,t]=(0,i.useState)(null),[n,s]=(0,i.useState)("");return((0,i.useEffect)(()=>{fetch("".concat("https://narshe-qhiizr5utq-uw.a.run.app/","/sotws")).then(e=>e.json()).then(e=>{let n=Object.keys(e),r=a()(n,e=>Number.parseInt(e),"desc"),i=r[0];s(i),t(e[i])})},[]),e)?(0,r.jsx)(o.q,{sotw:e,head:(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"FF6WC - Seed of the Week"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),id:n}):(0,r.jsx)("p",{children:"Loading..."})};t.default=u},8749:function(e){e.exports={style:{fontFamily:"'__Open_Sans_b71d59', '__Open_Sans_Fallback_b71d59'",fontStyle:"normal"},className:"__className_b71d59"}},5106:function(e,t,n){e.exports=n(5978)},4582:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(2983),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(s),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function c(e){return function(t){return r.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var n,s=e.attr,a=e.size,c=e.title,o=l(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,o,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,function(e){return t(e)}):t(s)}}},function(e){e.O(0,[433,136,876,774,888,179],function(){return e(e.s=6966)}),_N_E=e.O()}]);