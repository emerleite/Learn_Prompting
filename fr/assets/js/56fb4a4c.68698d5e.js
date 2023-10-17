"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[f]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:2e3},a="\ud83d\udfe2 Other Approaches",s={unversionedId:"prompt_hacking/defensive_measures/other",id:"prompt_hacking/defensive_measures/other",title:"\ud83d\udfe2 Other Approaches",description:"Although the previous approaches can be very robust, a few other approaches, such as using a different model, including fine tuning, soft prompting, and length restrictions, can also be effective.",source:"@site/docs/prompt_hacking/defensive_measures/other.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/other",permalink:"/Learn_Prompting/fr/docs/prompt_hacking/defensive_measures/other",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/other.md",tags:[],version:"current",sidebarPosition:2e3,frontMatter:{sidebar_position:2e3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Separate LLM Evaluation",permalink:"/Learn_Prompting/fr/docs/prompt_hacking/defensive_measures/llm_eval"},next:{title:"\ud83d\udfe2 Offensive Measures",permalink:"/Learn_Prompting/fr/docs/category/-offensive-measures"}},p={},c=[{value:"Using a Different Model",id:"using-a-different-model",level:2},{value:"Fine Tuning",id:"fine-tuning",level:2},{value:"Soft Prompting",id:"soft-prompting",level:2},{value:"Length Restrictions",id:"length-restrictions",level:2}],l={toc:c},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-other-approaches"},"\ud83d\udfe2 Other Approaches"),(0,i.kt)("p",null,"Although the previous approaches can be very robust, a few other approaches, such as using a different model, including fine tuning, soft prompting, and length restrictions, can also be effective."),(0,i.kt)("h2",{id:"using-a-different-model"},"Using a Different Model"),(0,i.kt)("p",null,"More modern models such as GPT-4 are more robust against prompt injection. Additionally, non-instruction tuned models may be difficult to prompt inject. "),(0,i.kt)("h2",{id:"fine-tuning"},"Fine Tuning"),(0,i.kt)("p",null,"Fine tuning the model is a highly effective defense",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", since at inference time there is no prompt involved, except the user input. This is likely the preferable defense in any high value situation, since it is so robust. However, it requires a large amount of data and may be costly, which is why this defense is not frequently implemented."),(0,i.kt)("h2",{id:"soft-prompting"},"Soft Prompting"),(0,i.kt)("p",null,"Soft prompting might also be effective, since it does not have a clearly defined discrete prompt (other than user input). Soft prompting effectively requires fine tuning, so it has many of the same benefits, but it will likely be cheaper. However, soft prompting is not as well studied as fine tuning, so it is unclear how effective it is."),(0,i.kt)("h2",{id:"length-restrictions"},"Length Restrictions"),(0,i.kt)("p",null,"Finally, including length restrictions on user input",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," or limiting the length of chatbot coversations as Bing does can prevent some attacks such as huge DAN-style prompts or virtualization attacks respectively."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Goodside, R. (2022). GPT-3 Prompt Injection Defenses. https://twitter.com/goodside/status/1578278974526222336?s=20&t=3UMZB7ntYhwAk3QLpKMAbw\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Selvi, J. (2022). Exploring Prompt Injection Attacks. https://research.nccgroup.com/2022/12/05/exploring-prompt-injection-attacks/\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);