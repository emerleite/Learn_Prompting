"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=i,u=m["".concat(p,".").concat(f)]||m[f]||h[f]||a;return r?n.createElement(u,o(o({ref:t},c),{},{components:r})):n.createElement(u,o({ref:t},c))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:2},o="\ud83d\udd34 Interpretable Soft Prompts",s={unversionedId:"trainable/discretized",id:"trainable/discretized",title:"\ud83d\udd34 Interpretable Soft Prompts",description:"Soft prompts are a sequence of vectors which",source:"@site/docs/trainable/discretized.md",sourceDirName:"trainable",slug:"/trainable/discretized",permalink:"/Learn_Prompting/si/docs/trainable/discretized",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/discretized.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Soft Prompts",permalink:"/Learn_Prompting/si/docs/trainable/soft_prompting"},next:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/Learn_Prompting/si/docs/category/-miscellaneous"}},p={},l=[{value:"The Waywardness Hypothesis",id:"the-waywardness-hypothesis",level:2},{value:"Interpretability Risks",id:"interpretability-risks",level:2}],c={toc:l},m="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-interpretable-soft-prompts"},"\ud83d\udd34 Interpretable Soft Prompts"),(0,i.kt)("p",null,"Soft prompts are a sequence of vectors which\ndon't correspond to any actual tokens in the vocabulary. This makes it difficult\nto interpret the prompt. However, we can still attempt to do so\nby mapping the vectors to the closest tokens in the vocabulary. However, projected\nsoft prompts are often wayward; they can solve\ntasks well, but get projected to arbitrary tokens in the vocabulary",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("p",null,"For example, if we are training on math questions like GSM8K",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),",\nwe might start with the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"You are a mathematician. Solve this question:"),".\nIf we perform prompt tuning on it, then project that back into tokenspace, we might\nbe left with something nonsensical like ",(0,i.kt)("inlineCode",{parentName:"p"},"A bus is a bus. Do thing here:"),". It is often the\ncase that the soft prompt which maps to this nonsensical prompt can provide better performance on the task!"),(0,i.kt)("h2",{id:"the-waywardness-hypothesis"},"The Waywardness Hypothesis"),(0,i.kt)("p",null,"Khashabi et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," propose this incredible hypothesis. It says\nthat given a task, for any discrete target prompt, there exists a\ncontinuous prompt that projects to it, while performing well on the task."),(0,i.kt)("p",null,"This means that given 1000 different tasks, there exist 1000 different\nperformant soft prompts (one for each task) which map to the same discrete prompt."),(0,i.kt)("h2",{id:"interpretability-risks"},"Interpretability Risks"),(0,i.kt)("p",null,"They use the Waywardness Hypothesis to highlight a number of risks which arise\nwhen interpreting soft prompts. In particular, a soft prompt can be projected to\na discrete prompt which gives a misleading intent."),(0,i.kt)("p",null,"Consider a soft prompt for ranking resumes. When projected into tokenspace, it might\nbe ",(0,i.kt)("inlineCode",{parentName:"p"},"You hiring manager. Rank good resumes:"),". This seems decent, perhaps a bit lacking\nin grammaticality. However, the token ",(0,i.kt)("inlineCode",{parentName:"p"},"good")," might have a similar projection as the token for ",(0,i.kt)("inlineCode",{parentName:"p"},"white"),", and there\ncould exist implicit bias in the prompt. Using a slightly different projection method,\nwe could end up with ",(0,i.kt)("inlineCode",{parentName:"p"},"You hiring manager. Rank white resumes:"),". This is obviously quite\ndifferent, and could have significant implications."),(0,i.kt)("p",null,"Similarly to interpreting a regular discrete prompt, we should be extremely\nconscious of the biases which might be present in the prompt. We must be especially\ncareful with soft prompts, as they are more difficult to interpret."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);