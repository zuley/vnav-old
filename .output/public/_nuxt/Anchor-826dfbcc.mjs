import{_ as u,d,w as p,u as v,o,c as s,a as m,F as f,r as h,t as y}from"./entry-ca1b192b.mjs";const N=d({async setup(_,{expose:a}){a();let e,t;const n={NavList:([e,t]=p(()=>v()),e=await e,t(),e),handleNav:r=>{const i=document.querySelector(`#${r.slug}`);window.scrollTo({top:i.offsetTop-20,behavior:"smooth"})}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),x={class:"m-anchor"},w=["onClick"];function C(_,a,e,t,c,l){return o(),s("div",x,[m("ul",null,[(o(!0),s(f,null,h(t.NavList,n=>(o(),s("li",{onClick:r=>t.handleNav(n)},y(n.name),9,w))),256))])])}var k=u(N,[["render",C]]);export{k as default};
