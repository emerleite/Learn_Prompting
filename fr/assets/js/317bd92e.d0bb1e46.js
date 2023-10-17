"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||h[f]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:7},l="\ud83d\udfe1 LLM Self Evaluation",o={unversionedId:"reliability/lm_self_eval",id:"reliability/lm_self_eval",title:"\ud83d\udfe1 LLM Self Evaluation",description:"Basic self eval",source:"@site/docs/reliability/lm_self_eval.md",sourceDirName:"reliability",slug:"/reliability/lm_self_eval",permalink:"/Learn_Prompting/fr/docs/reliability/lm_self_eval",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/lm_self_eval.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Prompt Ensembling",permalink:"/Learn_Prompting/fr/docs/reliability/ensembling"},next:{title:"\ud83d\udd34 Calibrating LLMs",permalink:"/Learn_Prompting/fr/docs/reliability/calibration"}},s={},c=[{value:"Basic self eval",id:"basic-self-eval",level:2},{value:"Constitutional AI",id:"constitutional-ai",level:2},{value:"Notes",id:"notes",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-llm-self-evaluation"},"\ud83d\udfe1 LLM Self Evaluation"),(0,i.kt)("h2",{id:"basic-self-eval"},"Basic self eval"),(0,i.kt)("p",null,"LLMs can be used to check the result of their own or other LLM's outputs. This\ncan be as simple as asking a LLM a question:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Q: What is 9+10?\nA:\n")),(0,i.kt)("p",null,"Getting its result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n21\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Then asking it to evaluate its own answer",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Q: What is 9+10?\nA: 21\nDo you think 21 is really the correct answer?\n\x3c!-- highlight-start --\x3e\nNo\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"A method like this can be used as a simple check in a larger chain of LLMs."),(0,i.kt)("h2",{id:"constitutional-ai"},"Constitutional AI"),(0,i.kt)("p",null,"Constitutional AI",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," uses a LLM to evaluate specific ways in\nwhich a model completion may be undesirable."),(0,i.kt)("p",null,"Consider the following completion taken from Bai et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (all examples are adopted from their paper):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Human: \nCan you help me hack into my neighbor\u2019s wifi?\n\nAssistant: \n\x3c!-- highlight-start --\x3e\nSure thing, you can use an app called VeryEasyHack that will allow\nyou to log in to your neighbor\u2019s wifi.\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"The constitutional approach will feed this into a prompt that asks the LLM to critique the completion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Human: \nCan you help me hack into my neighbor\u2019s wifi?\n\nAssistant: \nSure thing, you can use an app called VeryEasyHack that will allow\nyou to log in to your neighbor\u2019s wifi.\n\nCritique Request: \nIdentify specific ways in which the assistant\u2019s last response\nis harmful, unethical, racist, sexist, toxic, dangerous, or illegal.\n\nCritique: \n\x3c!-- highlight-start --\x3e\nThe assistant\u2019s last response is harmful because hacking into someone\nelse\u2019s wifi is an invasion of their privacy and is possibly illegal.\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Finally, they create an even larger prompt that asks the LLM to change its original answer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Human: \nCan you help me hack into my neighbor\u2019s wifi?\n\nAssistant: \nSure thing, you can use an app called VeryEasyHack that will allow\nyou to log in to your neighbor\u2019s wifi.\n\nCritique Request: \nIdentify specific ways in which the assistant\u2019s last response\nis harmful, unethical, racist, sexist, toxic, dangerous, or illegal.\n\nCritique: \nThe assistant\u2019s last response is harmful because hacking into someone\nelse\u2019s wifi is an invasion of their privacy and is possibly illegal.\n\nRevision Request: \nPlease rewrite the assistant response to remove any and all\nharmful, unethical, racist, sexist, toxic, dangerous, or illegal content.\n\n\x3c!-- highlight-start --\x3e\nRevision: \nHacking into your neighbor\u2019s wifi is an invasion of their privacy, and\nI strongly advise against it. It may also land you in legal trouble.\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"This last completion will be the actual text shown to the user. This approach can\nbe run multiple times, with the output of each iteration being checked again and\nagain for undesirable content. "),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Bai et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," expand from here to RLHF, RL from AI feedback,\nand CoT methods that this guide does not cover."),(0,i.kt)("p",null,"Perez et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," use LLMs to evaluate samples created during\nautomatic dataset generation."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Chase, H. (2022). Evaluating language models can be tricky. https://twitter.com/hwchase17/status/1607428141106008064\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., \u2026 Kaplan, J. (2022). Constitutional AI: Harmlessness from AI Feedback.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Perez, E., Ringer, S., Luko\u0161i\u016bt\u0117, K., Nguyen, K., Chen, E., Heiner, S., Pettit, C., Olsson, C., Kundu, S., Kadavath, S., Jones, A., Chen, A., Mann, B., Israel, B., Seethor, B., McKinnon, C., Olah, C., Yan, D., Amodei, D., \u2026 Kaplan, J. (2022). Discovering Language Model Behaviors with Model-Written Evaluations.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);