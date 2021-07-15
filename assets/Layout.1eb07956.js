var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&r(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&r(e,a,t[a]);return e},i=(e,l)=>t(e,a(l));import{e as u,g as c,h as d,i as v,j as h,k as p,l as g,m,r as b,o as f,a as k,w as y,n as x,d as w,t as L,p as C,q as N,s as T,v as S,x as $,y as H,b as z,F as M,z as B,A,B as P,f as O,C as I,D as R,E,G as j,H as _,I as D,J as W,K as F,L as U,M as G,u as q,N as V,O as Y,P as X,Q as J,T as K,R as Q,S as Z,U as ee,V as te,W as ae,X as le,Y as ne}from"./app.4a16188e.js";import{_ as oe}from"./Navbar.f105cb9d.js";import{_ as re}from"./Footer.2257d4bc.js";var se=u({name:"NavLink",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=c(),a=m(),{item:l}=d(e),n=v((()=>h(l.value.link))),o=v((()=>p(l.value.link)||g(l.value.link))),r=v((()=>{if(!o.value)return l.value.target?l.value.target:n.value?"_blank":void 0})),s=v((()=>"_blank"===r.value)),i=v((()=>!n.value&&!o.value&&!s.value)),u=v((()=>{if(!o.value)return l.value.rel?l.value.rel:s.value?"noopener noreferrer":void 0})),b=v((()=>l.value.ariaLabel||l.value.text)),f=v((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===l.value.link)):"/"!==l.value.link})),k=v((()=>!!f.value&&t.path.startsWith(l.value.link)));return{isActive:v((()=>!!i.value&&(l.value.activeMatch?new RegExp(l.value.activeMatch).test(t.path):k.value))),isBlankTarget:s,isRouterLink:i,linkRel:u,linkTarget:r,linkAriaLabel:b}}});se.render=function(e,t,a,l,n,o){const r=b("RouterLink"),s=b("OutboundLink");return e.isRouterLink?(f(),k(r,C({key:0,class:["nav-link",{"router-link-active":e.isActive}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:y((()=>[x(e.$slots,"before"),w(" "+L(e.item.text)+" ",1),x(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):(f(),k("a",C({key:1,class:"nav-link external",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[x(e.$slots,"before"),w(" "+L(e.item.text)+" ",1),e.isBlankTarget?(f(),k(s,{key:0})):N("",!0),x(e.$slots,"after")],16,["href","rel","target","aria-label"]))};var ie=u({name:"Home",components:{NavLink:se},setup(){const e=T(),t=S(),a=v((()=>e.value.heroImage?$(e.value.heroImage):null)),l=v((()=>null===e.value.heroText?null:e.value.heroText||t.value.title||"Hello")),n=v((()=>e.value.heroAlt||l.value||"hero")),o=v((()=>null===e.value.tagline?null:e.value.tagline||t.value.description||"Welcome to your VuePress site")),r=v((()=>H(e.value.actions)?e.value.actions.map((({text:e,link:t,type:a="primary"})=>({text:e,link:t,type:a}))):[])),s=v((()=>H(e.value.features)?e.value.features:[])),i=v((()=>e.value.footer)),u=v((()=>e.value.footerHtml));return{heroImage:a,heroAlt:n,heroText:l,tagline:o,actions:r,features:s,footer:i,footerHtml:u}}});const ue={class:"hero"},ce={key:1,id:"main-title"},de={key:2,class:"description"},ve={key:3,class:"actions"},he={key:0,class:"features"},pe={class:"theme-default-content custom"};ie.render=function(e,t,a,l,n,o){const r=b("NavLink"),s=b("Content");return f(),k("main",{class:"home","aria-labelledby":e.heroText?"main-title":void 0},[z("header",ue,[e.heroImage?(f(),k("img",{key:0,src:e.heroImage,alt:e.heroAlt},null,8,["src","alt"])):N("",!0),e.heroText?(f(),k("h1",ce,L(e.heroText),1)):N("",!0),e.tagline?(f(),k("p",de,L(e.tagline),1)):N("",!0),e.actions.length?(f(),k("p",ve,[(f(!0),k(M,null,B(e.actions,(e=>(f(),k(r,{key:e.text,class:["action-button",[e.type]],item:e},null,8,["class","item"])))),128))])):N("",!0)]),e.features.length?(f(),k("div",he,[(f(!0),k(M,null,B(e.features,(e=>(f(),k("div",{key:e.title,class:"feature"},[z("h2",null,L(e.title),1),z("p",null,L(e.details),1)])))),128))])):N("",!0),z("div",pe,[z(s)]),e.footer?(f(),k(M,{key:1},[e.footerHtml?(f(),k("div",{key:0,class:"footer",innerHTML:e.footer},null,8,["innerHTML"])):(f(),k("div",{key:1,class:"footer",textContent:L(e.footer)},null,8,["textContent"]))],64)):N("",!0)],8,["aria-labelledby"])};const ge=e=>!h(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,me={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},be=()=>{const e=O(),t=I(),a=T();return v((()=>{var l,n;if(!(null==(n=null!=(l=a.value.editLink)?l:e.value.editLink)||n))return null;const{repo:o,docsRepo:r=o,docsBranch:s="main",docsDir:i="",editLinkText:u}=e.value;if(!r)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:a,filePathRelative:l,editLinkPattern:n})=>{const o=ge(e);let r;return n?r=n:null!==o&&(r=me[o]),r?r.replace(/:repo/,h(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,A(`${P(a)}/${l}`)):null})({docsRepo:r,docsBranch:s,docsDir:i,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))};var fe=u({name:"PageMeta",components:{NavLink:se},setup:()=>({themeLocale:O(),editNavLink:be(),lastUpdated:(()=>{const e=S(),t=O(),a=I(),l=T();return v((()=>{var n,o,r,s;return(null==(o=null!=(n=l.value.lastUpdated)?n:t.value.lastUpdated)||o)&&(null==(r=a.value.git)?void 0:r.updatedTime)?new Date(null==(s=a.value.git)?void 0:s.updatedTime).toLocaleString(e.value.lang):null}))})(),contributors:(()=>{const e=O(),t=I(),a=T();return v((()=>{var l,n,o,r;return null!=(n=null!=(l=a.value.contributors)?l:e.value.contributors)&&!n||null==(r=null==(o=t.value.git)?void 0:o.contributors)?null:r}))})()})});const ke={class:"page-meta"},ye={key:0,class:"meta-item edit-link"},xe={key:1,class:"meta-item last-updated"},we={class:"meta-item-label"},Le={class:"meta-item-info"},Ce={key:2,class:"meta-item contributors"},Ne={class:"meta-item-label"},Te={class:"meta-item-info"},Se=w(", ");fe.render=function(e,t,a,l,n,o){const r=b("NavLink");return f(),k("footer",ke,[e.editNavLink?(f(),k("div",ye,[z(r,{class:"meta-item-label",item:e.editNavLink},null,8,["item"])])):N("",!0),e.lastUpdated?(f(),k("div",xe,[z("span",we,L(e.themeLocale.lastUpdatedText)+": ",1),z("span",Le,L(e.lastUpdated),1)])):N("",!0),e.contributors&&e.contributors.length?(f(),k("div",Ce,[z("span",Ne,L(e.themeLocale.contributorsText)+": ",1),z("span",Te,[(f(!0),k(M,null,B(e.contributors,((t,a)=>(f(),k(M,{key:a},[z("span",{class:"contributor",title:`email: ${t.email}`},L(t.name),9,["title"]),a!==e.contributors.length-1?(f(),k(M,{key:0},[Se],64)):N("",!0)],64)))),128))])])):N("",!0)])};const $e=e=>!1===e?null:E(e)?j(e):!!_(e)&&e,He=(e,t,a)=>{const l=e.findIndex((e=>e.link===t));if(-1!==l){const t=e[l+a];return(null==t?void 0:t.link)?t:null}for(const n of e)if(n.children){const e=He(n.children,t,a);if(e)return e}return null};var ze=u({name:"PageNav",components:{NavLink:se},setup(){const e=T(),t=R(),a=c();return{prevNavLink:v((()=>{const l=$e(e.value.prev);return!1!==l?l:He(t.value,a.path,-1)})),nextNavLink:v((()=>{const l=$e(e.value.next);return!1!==l?l:He(t.value,a.path,1)}))}}});const Me={key:0,class:"page-nav"},Be={class:"inner"},Ae={key:0,class:"prev"},Pe=w(" ← "),Oe={key:1,class:"next"},Ie=w(" → ");ze.render=function(e,t,a,l,n,o){const r=b("NavLink");return e.prevNavLink||e.nextNavLink?(f(),k("nav",Me,[z("p",Be,[e.prevNavLink?(f(),k("span",Ae,[Pe,z(r,{item:e.prevNavLink},null,8,["item"])])):N("",!0),e.nextNavLink?(f(),k("span",Oe,[z(r,{item:e.nextNavLink},null,8,["item"]),Ie])):N("",!0)])])):N("",!0)};const Re=u({name:"Page",components:{PageMeta:fe,PageNav:ze}}),Ee={class:"page"},je={class:"theme-default-content"};Re.render=function(e,t,a,l,n,o){const r=b("Content"),s=b("PageMeta"),i=b("PageNav");return f(),k("main",Ee,[x(e.$slots,"top"),z("div",je,[z(r)]),z(s),z(i),x(e.$slots,"bottom")])};var _e=u({name:"DropdownLink",components:{NavLink:se},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=d(e),a=v((()=>t.value.ariaLabel||t.value.text)),l=D(!1),n=c();W((()=>n.path),(()=>{l.value=!1}));return{open:l,dropdownAriaLabel:a,handleDropdown:e=>{const t=0===e.detail;l.value=!!t&&!l.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});const De={class:"title"},We=z("span",{class:"arrow down"},null,-1),Fe={class:"title"},Ue={class:"nav-dropdown"},Ge={class:"dropdown-subtitle"},qe={key:1},Ve={class:"dropdown-subitem-wrapper"};_e.render=function(e,t,a,l,n,o){const r=b("NavLink");return f(),k("div",{class:["dropdown-wrapper",{open:e.open}]},[z("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[z("span",De,L(e.item.text),1),We],8,["aria-label"]),z("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[2]||(t[2]=t=>e.open=!e.open)},[z("span",Fe,L(e.item.text),1),z("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),F(z("ul",Ue,[(f(!0),k(M,null,B(e.item.children,((t,a)=>(f(),k("li",{key:t.link||a,class:"dropdown-item"},[t.children?(f(),k(M,{key:0},[z("h4",Ge,[t.link?(f(),k(r,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):(f(),k("span",qe,L(t.text),1))]),z("ul",Ve,[(f(!0),k(M,null,B(t.children,(a=>(f(),k("li",{key:a.link,class:"dropdown-subitem"},[z(r,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):(f(),k(r,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[U,e.open]])],2)};const Ye=e=>E(e)?j(e):e.children?i(s({},e),{children:e.children.map(Ye)}):e;var Xe=u({name:"NavbarLinks",components:{NavLink:se,DropdownLink:_e},setup(){const e=(()=>{const e=O();return v((()=>(e.value.navbar||[]).map(Ye)))})(),t=(()=>{const e=G(),t=q(),a=S(),l=O();return v((()=>{var n,o;const r=Object.keys(a.value.locales);if(r.length<2)return[];const s=e.currentRoute.value.path,i=e.currentRoute.value.fullPath;return[{text:null!=(n=l.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(o=l.value.selectLanguageAriaLabel)?o:"unkown language",children:r.map((n=>{var o,r,u,c,d,v;const h=null!=(r=null==(o=a.value.locales)?void 0:o[n])?r:{},p=null!=(c=null==(u=l.value.locales)?void 0:u[n])?c:{},g=`${h.lang}`,m=null!=(d=p.selectLanguageName)?d:g;let b;if(g===a.value.lang)b=i;else{const a=s.replace(t.value,n);b=e.getRoutes().some((e=>e.path===a))?a:null!=(v=p.home)?v:n}return{text:m,link:b}}))}]}))})(),a=(()=>{const e=O(),t=v((()=>e.value.repo)),a=v((()=>t.value?ge(t.value):null)),l=v((()=>t.value&&!h(t.value)?`https://github.com/${t.value}`:t.value)),n=v((()=>l.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return v((()=>l.value&&n.value?[{text:n.value,link:l.value}]:[]))})();return{navbarLinks:v((()=>[...e.value,...t.value,...a.value]))}}});const Je={key:0,class:"navbar-links"};Xe.render=function(e,t,a,l,n,o){const r=b("DropdownLink"),s=b("NavLink");return e.navbarLinks.length?(f(),k("nav",Je,[(f(!0),k(M,null,B(e.navbarLinks,(e=>(f(),k("div",{key:e.text,class:"navbar-links-item"},[e.children?(f(),k(r,{key:0,item:e},null,8,["item"])):(f(),k(s,{key:1,item:e},null,8,["item"]))])))),128))])):N("",!0)};const Ke={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Qe=z("path",{d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z",fill:"currentColor"},null,-1),Ze=z("path",{d:"M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z",fill:"currentColor"},null,-1),et=z("path",{d:"M2 15.005h5v2H2z",fill:"currentColor"},null,-1),tt=z("path",{d:"M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),at=z("path",{d:"M15 25.005h2v5h-2z",fill:"currentColor"},null,-1),lt=z("path",{d:"M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z",fill:"currentColor"},null,-1),nt=z("path",{d:"M25 15.005h5v2h-5z",fill:"currentColor"},null,-1),ot=z("path",{d:"M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z",fill:"currentColor"},null,-1),rt=z("path",{d:"M15 2.005h2v5h-2z",fill:"currentColor"},null,-1),st={class:"icon",focusable:"false",viewBox:"0 0 32 32"},it=z("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1);var ut=u({setup(e){const t=V(),a=()=>{t.value=!t.value};return(e,l)=>(f(),k("button",{class:"toggle-dark-button",onClick:a},[F((f(),k("svg",Ke,[Qe,Ze,et,tt,at,lt,nt,ot,rt],512)),[[U,!Y(t)]]),F((f(),k("svg",st,[it],512)),[[U,Y(t)]])]))}}),ct=u({name:"ToggleSidebarButton",emits:["toggle"]});const dt=z("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[z("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"})],-1);ct.render=function(e,t,a,l,n,o){return f(),k("div",{class:"toggle-sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[dt])};var vt=u({emits:["toggle-sidebar"],setup(e){const t=q(),a=S(),l=O(),n=D(null),o=D(null),r=v((()=>l.value.home||t.value)),s=v((()=>l.value.logo)),i=v((()=>a.value.title)),u=D(0),c=v((()=>u.value?{maxWidth:u.value+"px"}:{})),d=v((()=>l.value.darkMode));function h(e,t){var a,l,n;const o=null==(n=null==(l=null==(a=null==e?void 0:e.ownerDocument)?void 0:a.defaultView)?void 0:l.getComputedStyle(e,null))?void 0:n[t],r=Number.parseInt(o,10);return Number.isNaN(r)?0:r}return X((()=>{const e=h(n.value,"paddingLeft")+h(n.value,"paddingRight"),t=()=>{var t;window.innerWidth<=719?u.value=0:u.value=n.value.offsetWidth-e-((null==(t=o.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),(e,t)=>{const a=b("RouterLink"),l=b("NavbarSearch");return f(),k("header",{ref:n,class:"navbar"},[z(ct,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle-sidebar"))}),z("span",{ref:o},[z(a,{to:Y(r)},{default:y((()=>[Y(s)?(f(),k("img",{key:0,class:"logo",src:Y($)(Y(s)),alt:Y(i)},null,8,["src","alt"])):N("",!0),Y(i)?(f(),k("span",{key:1,class:["site-name",{"can-hide":Y(s)}]},L(Y(i)),3)):N("",!0)])),_:1},8,["to"])],512),z("div",{class:"navbar-links-wrapper",style:Y(c)},[x(e.$slots,"before"),z(Xe,{class:"can-hide"}),x(e.$slots,"after"),Y(d)?(f(),k(ut,{key:0})):N("",!0),z(l)],4)],512)}}});const ht=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),pt=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||ht(e.path)===ht(t)))(e,t.link)||!!t.children&&t.children.some((t=>pt(e,t))),gt=(e,t)=>e.link?J(se,i(s({},t),{item:e})):J("p",t,e.text),mt=(e,t)=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?J("ul",{class:{"sidebar-sub-items":t>0}},e.children.map((e=>J("li",J(bt,{item:e,depth:t+1}))))):null},bt=({item:e,depth:t=0})=>{const a=c(),l=pt(a,e);return[gt(e,{class:{"sidebar-heading":0===t,"sidebar-item":!0,active:l}}),mt(e,t)]};bt.displayName="SidebarChild",bt.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};var ft=u({name:"Sidebar",components:{NavbarLinks:Xe,SidebarChild:bt},setup:()=>({sidebarItems:R()})});const kt={class:"sidebar"},yt={class:"sidebar-links"};ft.render=function(e,t,a,l,n,o){const r=b("NavbarLinks"),s=b("SidebarChild");return f(),k("aside",kt,[z(r),x(e.$slots,"top"),z("ul",yt,[(f(!0),k(M,null,B(e.sidebarItems,(e=>(f(),k(s,{key:e.link||e.text,item:e},null,8,["item"])))),128))]),x(e.$slots,"bottom")])};var xt=u({name:"Layout",components:{Home:ie,Page:Re,Navbar:vt,Sidebar:ft,Transition:K},setup(){const e=I(),t=T(),a=O(),l=v((()=>!1!==t.value.navbar&&!1!==a.value.navbar)),n=R(),o=D(!1),r=e=>{o.value="boolean"==typeof e?e:!o.value},s={x:0,y:0},i=v((()=>[{"no-navbar":!l.value,"no-sidebar":!n.value.length,"sidebar-open":o.value},t.value.pageClass]));let u;X((()=>{const e=G();u=e.afterEach((()=>{r(!1)}))})),Q((()=>{u()}));const c=Z(),d=c.resolve,h=c.pending;return{frontmatter:t,page:e,containerClass:i,shouldShowNavbar:l,toggleSidebar:r,onTouchStart:e=>{s.x=e.changedTouches[0].clientX,s.y=e.changedTouches[0].clientY},onTouchEnd:e=>{const t=e.changedTouches[0].clientX-s.x,a=e.changedTouches[0].clientY-s.y;Math.abs(t)>Math.abs(a)&&Math.abs(t)>40&&(t>0&&s.x<=80?r(!0):r(!1))},onBeforeEnter:d,onBeforeLeave:h}}});xt.render=function(e,t,a,l,n,o){const r=b("Navbar"),s=b("Sidebar"),i=b("Home"),u=b("Page");return f(),k("div",{class:["theme-container",e.containerClass],onTouchstart:t[2]||(t[2]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchend:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[e.shouldShowNavbar?(f(),k(r,{key:0,onToggleSidebar:e.toggleSidebar},{before:y((()=>[x(e.$slots,"navbar-before")])),after:y((()=>[x(e.$slots,"navbar-after")])),_:1},8,["onToggleSidebar"])):N("",!0),z("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=t=>e.toggleSidebar(!1))}),z(s,null,{top:y((()=>[x(e.$slots,"sidebar-top")])),bottom:y((()=>[x(e.$slots,"sidebar-bottom")])),_:1}),e.frontmatter.home?(f(),k(i,{key:1})):(f(),k(K,{key:2,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e.onBeforeEnter,onBeforeLeave:e.onBeforeLeave},{default:y((()=>[z(u,{key:e.page.path},{top:y((()=>[x(e.$slots,"page-top")])),bottom:y((()=>[x(e.$slots,"page-bottom")])),_:1})])),_:1},8,["onBeforeEnter","onBeforeLeave"]))],34)};const wt={2:.45,3:.35,4:.25,5:.2,6:.2},Lt={2:"red-400",3:"green-400",4:"blue-400",5:"gray-400",6:"gray-300"},Ct={props:["headings","activeHeading"],setup(e){const t=ae({}),a=d(t);return i(s({},a),{levelColor:e=>Lt[e],levelSize:e=>wt[e],dotStyle:e=>({width:`${wt[e]}rem`,height:`${wt[e]}rem`,left:-wt[e]/2+"rem"})})}},Nt=le();ee("data-v-c28348e0");const Tt={class:"headings-container"},St={class:"\n        max-w-max\n        m-2\n        pl-7\n        xl:pl-16\n        2xl:pl-20\n        py-4\n        opacity-50\n        hover:opacity-100\n        transition-all\n        duration-300\n      "},$t={class:"px-3 py-2 hover:bg-gray-100 rounded"};te();const Ht=Nt(((e,t,a,l,n,o)=>(f(),k("div",Tt,[z("ul",St,[(f(!0),k(M,null,B(a.headings,(e=>(f(),k("li",{key:e.id,class:"flex justify-start items-center relative"},[z("span",{class:["opacity-0 absolute -left-7 text-xs",`text-${l.levelColor(e.level)}`]},L(`H${e.level}`),3),z("div",{class:["\n            dot-icon\n            absolute\n            ring-4\n            opacity-0\n            ring-opacity-50\n            rounded-full\n          ",`bg-${l.levelColor(e.level)} ring-${l.levelColor(e.level)}`],style:l.dotStyle(e.level)},null,6),z("a",{href:`#${e.id}`,class:["border-l border-dashed border-gray-400 text-sm",{"text-gray-400 dfont-light":e.id!==a.activeHeading,"text-gray-900 font-bold":e.id===a.activeHeading}]},[z("p",$t,L(e.text),1)],10,["href"])])))),128))])]))));Ct.render=Ht,Ct.__scopeId="data-v-c28348e0";const zt={2:.45,3:.35,4:.25,5:.2,6:.2},Mt={2:"red-400",3:"green-400",4:"blue-400",5:"gray-400",6:"gray-300"},Bt={props:["headings","activeHeading"],setup(e){const t=ae({}),a=d(t);return i(s({},a),{levelColor:e=>Mt[e],levelSize:e=>zt[e],dotStyle:e=>({width:`${zt[e]}rem`,height:`${zt[e]}rem`,left:-zt[e]/2+"rem"})})}},At=le();ee("data-v-6eed9461");const Pt={class:"\n      headings-container\n      px-2\n      space-y-2\n      transition-all\n      duration-300\n    "};te();const Ot=At(((e,t,a,l,n,o)=>(f(),k("div",Pt,[(f(!0),k(M,null,B(a.headings,(e=>(f(),k("a",{key:e.id,class:["\n        max-w-max\n        p-2\n        flex\n        justify-start\n        items-center\n        hover:bg-gray-200\n        rounded\n        space-x-2\n      ",{"bg-gray-200":e.id===a.activeHeading}],style:{"margin-left":5*e.level+"px"},href:`#${e.id}`},[z("span",{class:["text-xs",`text-${l.levelColor(e.level)}`]},L(`H${e.level}`),3),z("span",{class:["text-sm",{"text-gray-600 font-light":e.id!==a.activeHeading,"text-gray-900 font-bold":e.id===a.activeHeading}]},L(e.text),3)],14,["href"])))),128))]))));Bt.render=Ot,Bt.__scopeId="data-v-6eed9461";const It={H2:2,H3:3,H4:4,H5:5,H6:6},Rt={components:{Layout:xt,Navbar:oe,Catalog:Ct,SideBar:Bt,Footer:re},setup(e){const t=ae({showCatalog:!0,showSidebar:!1,catalogWidth:0,activeHeading:"",headings:[],toggleSidebar:()=>{}}),a=D(null);X((()=>{const e=document.getElementsByClassName("theme-default-content")[0],l=e.querySelectorAll("h2, h3, h4, h5, h6"),n=Array.from(l);l.forEach((e=>{t.headings.push({level:It[e.nodeName],id:e.id,text:e.textContent.slice(1).trim()||e.id})}));const o=()=>{t.catalogWidth=(document.documentElement.clientWidth-e.offsetWidth)/2};o();let r=null;window.onresize=()=>{r&&clearTimeout(r),r=setTimeout((()=>{o(),r=null}),300)};const s=n[n.length-1],i=()=>{if(0===n.length)return;const e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;if(e>=s.offsetTop)t.activeHeading=s.id;else{const a=n.find((t=>{if(t.offsetTop&&e<=t.offsetTop)return!0}));if(!a)return;t.activeHeading=a.id}};i();let u=null;window.onscroll=()=>{u&&clearTimeout(u),u=setTimeout((()=>{i(),u=null}),300)},t.toggleSidebar=()=>{t.showSidebar=!t.showSidebar,t.showSidebar&&ne((()=>{console.log(a),a.value.focus()}))}}));const l=d(t);return i(s({},l),{sidebarContainer:a})}},Et={class:"min-h-screen flex flex-col"},jt=z("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 16 16"},[z("path",{"fill-rule":"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})],-1),_t=z("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 16 16"},[z("path",{"fill-rule":"evenodd",d:"M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})],-1),Dt={class:"relative flex-grow"},Wt={ref:"sidebarContainer",tabindex:"0",class:"\n          sidebar-container\n          fixed\n          inset-y-0\n          left-0\n          z-20\n          lg:hidden\n          opacity-10\n          hover:opacity-95\n        "};Rt.render=function(e,t,a,l,n,o){const r=b("Navbar"),s=b("Layout",!0),i=b("Catalog"),u=b("SideBar"),c=b("Footer");return f(),k("div",Et,[z(r,{class:"sticky top-0 z-30 bg-white","navbar-type":"classification"},{left:y((()=>[z("button",{class:["\n            catelog-btn\n            p-2\n            select-none\n            text-sm\n            font-bold\n            hover:text-gray-900\n            rounded-md\n            lg:hidden\n          ",{"text-gray-400 hover:bg-gray-100":!e.showSidebar,"text-gray-900 bg-gray-100 hover:bg-gray-200":e.showSidebar}],onClick:t[1]||(t[1]=(...t)=>e.toggleSidebar&&e.toggleSidebar(...t))},[jt],2)])),right:y((()=>[z("button",{class:["\n            p-2\n            select-none\n            text-sm\n            font-bold\n            hover:text-gray-900\n            rounded-md\n            hidden\n            lg:block\n          ",{"text-gray-400 hover:bg-gray-100":!e.showCatalog,"text-gray-900 bg-gray-100 hover:bg-gray-200":e.showCatalog}],onClick:t[2]||(t[2]=t=>e.showCatalog=!e.showCatalog)},[_t],2)])),_:1}),z("div",Dt,[z(s),F(z("div",{class:"catalog-container absolute top-0 right-0 h-full hidden lg:block",style:{width:`${e.catalogWidth}px`}},[z(i,{class:"sticky top-36",headings:e.headings,activeHeading:e.activeHeading},null,8,["headings","activeHeading"])],4),[[U,e.showCatalog]]),F(z("div",Wt,[z(u,{headings:e.headings,activeHeading:e.activeHeading,class:"py-20"},null,8,["headings","activeHeading"])],512),[[U,e.showSidebar]])]),z(c)])};export default Rt;
