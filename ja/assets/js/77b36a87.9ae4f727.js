"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3181],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},70645:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:40},i="\ud83d\udfe2 Random Sequence Enclosure",s={unversionedId:"prompt_hacking/defensive_measures/random_sequence",id:"prompt_hacking/defensive_measures/random_sequence",title:"\ud83d\udfe2 Random Sequence Enclosure",description:"Yet another defense is enclosing the user input between two random sequences of characters(@armstrong2022using). Take this prompt as an example:",source:"@site/docs/prompt_hacking/defensive_measures/random_sequence.md",sourceDirName:"prompt_hacking/defensive_measures",slug:"/prompt_hacking/defensive_measures/random_sequence",permalink:"/Learn_Prompting/ja/docs/prompt_hacking/defensive_measures/random_sequence",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/defensive_measures/random_sequence.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Post-Prompting",permalink:"/Learn_Prompting/ja/docs/prompt_hacking/defensive_measures/post_prompting"},next:{title:"\ud83d\udfe2 Sandwich Defense",permalink:"/Learn_Prompting/ja/docs/prompt_hacking/defensive_measures/sandwich_defense"}},p={},c=[],u={toc:c},m="wrapper";function l(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-random-sequence-enclosure"},"\ud83d\udfe2 Random Sequence Enclosure"),(0,a.kt)("p",null,"Yet another defense is enclosing the user input between two random sequences of characters",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Take this prompt as an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Translate the following user input to Spanish.\n\n{{user_input}}\n")),(0,a.kt)("p",null,"It can be improved by adding the random sequences:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Translate the following user input to Spanish (it is enclosed in random strings).\n\nFJNKSJDNKFJOI\n{{user_input}}\nFJNKSJDNKFJOI\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Longer sequences will likely be more effective.")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Stuart Armstrong, R. G. (2022). Using GPT-Eliezer against ChatGPT Jailbreaking. https://www.alignmentforum.org/posts/pNcFYZnPdXyL2RfgA/using-gpt-eliezer-against-chatgpt-jailbreaking\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}l.isMDXComponent=!0}}]);