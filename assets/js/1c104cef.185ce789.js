"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},74265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2},a="\ud83d\udfe2 Detection Trickery",s={unversionedId:"miscl/trickery",id:"miscl/trickery",title:"\ud83d\udfe2 Detection Trickery",description:"With the development of AI-generated text detectors, there has been an evolution of methods to counteract them. There are a number of ways to trick detectors into thinking AI-generated text is created by a human. A tool such as GPTMinus can randomly replace parts in any given text with synonyms or seemingly random words in order to reduce the likelihood of the text's words appearing on a whitelist or otherwise factoring into the probability of text being artificially generated.",source:"@site/docs/miscl/trickery.md",sourceDirName:"miscl",slug:"/miscl/trickery",permalink:"/Learn_Prompting/docs/miscl/trickery",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/miscl/trickery.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Detecting AI Generated Text",permalink:"/Learn_Prompting/docs/miscl/detect"},next:{title:"\ud83d\udfe2 Music Generation",permalink:"/Learn_Prompting/docs/miscl/music"}},l={},c=[{value:"Editing Strategies",id:"editing-strategies",level:2},{value:"Model Configuration",id:"model-configuration",level:2},{value:"Discussion",id:"discussion",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-detection-trickery"},"\ud83d\udfe2 Detection Trickery"),(0,o.kt)("p",null,"With the development of AI-generated text detectors, there has been an evolution of methods to counteract them. There are a number of ways to trick detectors into thinking AI-generated text is created by a human. A tool such as ",(0,o.kt)("a",{parentName:"p",href:"https://gptminus1.vercel.app/"},"GPTMinus")," can randomly replace parts in any given text with synonyms or seemingly random words in order to reduce the likelihood of the text's words appearing on a whitelist or otherwise factoring into the probability of text being artificially generated. "),(0,o.kt)("p",null,"These methods are still in their infancy, though, and most don\u2019t create text that would hold up under scrutiny from a person. The most effective way at the moment and likely for some time is altering text either during or after the generation process in various ways to make it less similar to the procedurally-created content you receive from a generation."),(0,o.kt)("h2",{id:"editing-strategies"},"Editing Strategies"),(0,o.kt)("p",null,"By having either a human or an LLM edit any generated-text, it can often alter the text sufficiently to avoid detection. Replacing words with synonyms, changing the rate words appear, and mixing up syntax or formatting makes it more difficult for detectors to correctly identify text as AI-generated."),(0,o.kt)("p",null,"Another editing strategy is putting invisible markers, such as 0-width spaces, into your text, ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/goodside/status/1610552172038737920?s=20&t=3zgqyJZ1zYhMNBi_M2R-cw"},"emojis"),", or other uncommon characters. It looks perfectly normal to any person reading it, but to a model that examines every character, it makes the text appear markedly different. "),(0,o.kt)("p",null,"In addition, it is possible to fool detectors by prompting a model with specific instructions on how to write. Instructions such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"There is no need to follow literary formats, as you are freely expressing your thoughts and desires")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Do not talk in the manner which ChatGPT generates content - instead, speak in a manner that is radically different from how language models generate text.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Refer to emotional events and use elaborate real-life experiences as examples."))),(0,o.kt)("p",null,"\u2026can make it much more difficult to detect generation. Additional strategies such as asking the model to use empathy, reminding it to choose appropriate wording and tone for what it\u2019s writing, and making sure it includes emotional one-liners, can work together to make far more convincing writing\u2014at least from the point of view of AI text detectors. "),(0,o.kt)("h2",{id:"model-configuration"},"Model Configuration"),(0,o.kt)("p",null,"If running an open source model, it is possible to modify output probabilities, which will likely make output harder to detect. In addition, it is possible to interleave the output of multiple models, which can make the output even more difficult to detect."),(0,o.kt)("h2",{id:"discussion"},"Discussion"),(0,o.kt)("p",null,"One of the most contentious spaces where these sorts of techniques come into play is in education. Many teachers and administrators are worried that students will cheat, so they are pushing for the use of detection tools",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Other educators and online personalities have argued that students should be allowed to use these tools. Some professors even go so far as explicitly encourage students to use AI to assist them in their work and teach them how to do so",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,o.kt)("p",null,"As AI detection tech improves, so will the methods people use to trick it. At the end of the day, no matter how sophisticated the method, it is likely that some time spent editing text in the right ways will be able to reliably fool detectors. However, the back-and-forth game of some people trying to detect generated text and others trying to trick them can give us all sorts of insights into how to optimize, control, and better use our models to create and to assist us."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Roose, K. (2022). Don\u2019t ban chatgpt in schools. teach with it. https://www.nytimes.com/2023/01/12/technology/chatgpt-schools-teachers.html\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Lipman, J., & Distler, R. (2023). Schools Shouldn\u2019t Ban Access to ChatGPT. https://time.com/6246574/schools-shouldnt-ban-access-to-chatgpt/\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Noonan, E., & Averill, O. (2023). GW preparing disciplinary response to AI programs as faculty explore educational use. https://www.gwhatchet.com/2023/01/17/gw-preparing-disciplinary-response-to-ai-programs-as-faculty-explore-educational-use/\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);