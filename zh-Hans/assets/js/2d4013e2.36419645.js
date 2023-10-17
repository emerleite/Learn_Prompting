"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||o;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76409:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:50},i="\ud83d\udfe2 Sandwich Defense",s={unversionedId:"prompt_hacking/defensive_measures/sandwich_defense",id:"prompt_hacking/defensive_measures/sandwich_defense",title:"\ud83d\udfe2 Sandwich Defense",description:"The sandwich defense involves sandwiching user input between",source:"@site/docs/prompt_hacking/defensive_measures/sandwich_defense.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/sandwich_defense",permalink:"/Learn_Prompting/zh-Hans/docs/prompt_hacking/defensive_measures/sandwich_defense",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/sandwich_defense.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Random Sequence Enclosure",permalink:"/Learn_Prompting/zh-Hans/docs/prompt_hacking/defensive_measures/random_sequence"},next:{title:"\ud83d\udfe2 XML Tagging",permalink:"/Learn_Prompting/zh-Hans/docs/prompt_hacking/defensive_measures/xml_tagging"}},c={},p=[],l={toc:p},d="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-sandwich-defense"},"\ud83d\udfe2 Sandwich Defense"),(0,a.kt)("p",null,"The sandwich defense",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," involves sandwiching user input between\ntwo prompts. Take the following prompt as an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Translate the following to French: {{user_input}}\n")),(0,a.kt)("p",null,"It can be improved with the sandwich defense:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Translate the following to French:\n\n{{user_input}}\n\nRemember, you are translating the above text to French.\n")),(0,a.kt)("p",null,"This defense should be more secure than post-prompting, but is known to be vulnerable to a defined dictionary attack. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/prompt_hacking/offensive_measures/defined_dictionary"},"defined dictionary attack")," for more information."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"We currently credit the discovery of this technique to ",(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/altryne?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"},"Altryne"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);