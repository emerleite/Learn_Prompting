"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(99973);const i=r.p+"assets/images/special_pyramids-50f3bca3db5e95b3ae5ebb75ab00da47.webp",s={sidebar_position:5},p="\ud83d\udfe2 Quality Boosters",l={unversionedId:"image_prompting/quality_boosters",id:"image_prompting/quality_boosters",title:"\ud83d\udfe2 Quality Boosters",description:"Quality boosters(@oppenlaender2022taxonomy) are terms added to a prompt to improve",source:"@site/docs/image_prompting/quality_boosters.md",sourceDirName:"image_prompting",slug:"/image_prompting/quality_boosters",permalink:"/Learn_Prompting/de/docs/image_prompting/quality_boosters",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/quality_boosters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Style Modifiers",permalink:"/Learn_Prompting/de/docs/image_prompting/style_modifiers"},next:{title:"\ud83d\udfe2 Repetition",permalink:"/Learn_Prompting/de/docs/image_prompting/repetition"}},m={},d=[{value:"Notes",id:"notes",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=c("AIInput"),f=c("LazyLoadImage"),g={toc:d},y="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-quality-boosters"},"\ud83d\udfe2 Quality Boosters"),(0,o.kt)("p",null,"Quality boosters",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' are terms added to a prompt to improve\ncertain non-style-specific qualities of the generated image. For example "amazing", "beautiful", and "good quality" are all quality boosters that can be used to improve the quality of the generated image.'),(0,o.kt)("h1",{id:"example"},"Example"),(0,o.kt)("p",null,"Recall from the other page the pyramids generated with DALLE, and the prompt ",(0,o.kt)("inlineCode",{parentName:"p"},"pyramid"),"."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{className:"img-docs",src:a.Z,style:{width:"750px"}})),(0,o.kt)("p",null,"Now take at pyramids generated with this prompt:"),(0,o.kt)(u,{mdxType:"AIInput"},"A beautiful, majestic, incredible pyramid, 4K"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(f,{className:"img-docs",src:i,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"These are much more scenic and impressive! "),(0,o.kt)("p",null,"Here is a list of a number of quality boosters: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"High resolution, 2K, 4K, 8K, clear, good lighting, detailed, extremely detailed, sharp focus, intricate, beautiful, realistic+++, complementary colors, high quality, hyper detailed, masterpiece, best quality, artstation, stunning\n")),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Similar to the note on the previous page, our working definition of quality boosters differs from Oppenlaender et al.",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This being said, it is\nsometimes difficult to exactly distinguish between quality boosters and style modifiers."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0},99973:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pyramids-dbd24886538cd0b91495876e2ad5f70f.webp"}}]);