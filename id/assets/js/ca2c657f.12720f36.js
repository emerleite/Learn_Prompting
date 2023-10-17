"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5930],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>f});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),u=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=u(e.components);return t.createElement(p.Provider,{value:a},e.children)},c="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(p,".").concat(d)]||c[d]||l[d]||i;return n?t.createElement(f,o(o({ref:a},m),{},{components:n})):t.createElement(f,o({ref:a},m))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40069:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=n(87462),r=(n(67294),n(3905));const i={sidebar_position:0},o="\ud83d\udfe2 Ringkasan",s={unversionedId:"prompt_hacking/defensive_measures/overview",id:"prompt_hacking/defensive_measures/overview",title:"\ud83d\udfe2 Ringkasan",description:"Mencegah injeksi prompt bisa sangat sulit, dan hanya ada sedikit pertahanan kuat terhadapnya (@crothers2022machine)(@goodside2021gpt). Namun, ada beberapa solusi yang masuk akal. Misalnya, jika aplikasi Anda tidak perlu menghasilkan teks bebas, jangan izinkan keluaran semacam itu. Ada banyak cara berbeda untuk melindungi sebuah prompt. Kita akan membahas beberapa yang paling umum di sini.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/prompt_hacking/defensive_measures/overview.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/overview",permalink:"/Learn_Prompting/id/docs/prompt_hacking/defensive_measures/overview",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Defensive Measures",permalink:"/Learn_Prompting/id/docs/category/-defensive-measures"},next:{title:"\ud83d\udfe2 Penyaringan Kata / Frasa (Filtering)",permalink:"/Learn_Prompting/id/docs/prompt_hacking/defensive_measures/filtering"}},p={},u=[],m={toc:u},c="wrapper";function l(e){let{components:a,...n}=e;return(0,r.kt)(c,(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-ringkasan"},"\ud83d\udfe2 Ringkasan"),(0,r.kt)("p",null,"Mencegah injeksi prompt bisa sangat sulit, dan hanya ada sedikit pertahanan kuat terhadapnya",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Namun, ada beberapa solusi yang masuk akal. Misalnya, jika aplikasi Anda tidak perlu menghasilkan teks bebas, jangan izinkan keluaran semacam itu. Ada banyak cara berbeda untuk melindungi sebuah prompt. Kita akan membahas beberapa yang paling umum di sini."),(0,r.kt)("p",null,"Bab ini mencakup strategi-strategi umum tambahan seperti menyaring kata-kata. Bab ini juga mencakup strategi peningkatan prompt (pertahanan instruksi, pengiriman pasca, cara berbeda untuk melampirkan input pengguna, dan penandaan XML). Akhirnya, kita membahas menggunakan LLM untuk mengevaluasi output dan beberapa pendekatan yang lebih spesifik pada model."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Crothers, E., Japkowicz, N., & Viktor, H. (2022). Machine Generated Text: A Comprehensive Survey of Threat Models and Detection Methods.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Goodside, R. (2022). GPT-3 Prompt Injection Defenses. https://twitter.com/goodside/status/1578278974526222336?s=20&t=3UMZB7ntYhwAk3QLpKMAbw\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}l.isMDXComponent=!0}}]);