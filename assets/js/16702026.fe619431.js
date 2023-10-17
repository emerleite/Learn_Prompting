"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),l=d(r),f=o,g=l["".concat(p,".").concat(f)]||l[f]||c[f]||i;return r?n.createElement(g,a(a({ref:t},m),{},{components:r})):n.createElement(g,a({ref:t},m))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i=r.p+"assets/images/good_pitt-ab97efa681b66b1af571472dcca1bf06.webp",a=r.p+"assets/images/bad_pitt-0a78738e39d116b1ec1c7e74b498b032.webp",s={sidebar_position:90},p="\ud83d\udfe2 Fix Deformed Generations",d={unversionedId:"image_prompting/fix_deformed_generations",id:"image_prompting/fix_deformed_generations",title:"\ud83d\udfe2 Fix Deformed Generations",description:"Deformed generations, particularly on human body parts (e.g. hands, feet), are a common issue with many models. This can be dealt with to some extent with good negative prompts(@blake2022with). The following example is adapted from this Reddit post.",source:"@site/docs/image_prompting/fix_deformed_generations.md",sourceDirName:"image_prompting",slug:"/image_prompting/fix_deformed_generations",permalink:"/Learn_Prompting/docs/image_prompting/fix_deformed_generations",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/fix_deformed_generations.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Weighted Terms",permalink:"/Learn_Prompting/docs/image_prompting/weighted_terms"},next:{title:"\ud83d\udfe2 Shot type",permalink:"/Learn_Prompting/docs/image_prompting/shot_type"}},m={},l=[{value:"Example",id:"example",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},f=c("AIInput"),g=c("LazyLoadImage"),u={toc:l},h="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-fix-deformed-generations"},"\ud83d\udfe2 Fix Deformed Generations"),(0,o.kt)("p",null,"Deformed generations, particularly on human body parts (e.g. hands, feet), are a common issue with many models. This can be dealt with to some extent with good negative prompts",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". The following example is adapted from ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/"},"this Reddit post"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Using Stable Diffusion v1.5 and the following prompt, we generate a nice image of Brad Pitt, except for his hands of course!"),(0,o.kt)(f,{mdxType:"AIInput"},"studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:a,className:"img-docs",style:{width:"250px"}})),(0,o.kt)("p",null,"Using a robust negative prompt, we can generate much more convincing hands."),(0,o.kt)(f,{mdxType:"AIInput"},"studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6 | disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(g,{src:i,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"Using a similar negative prompt can help with other body parts as well. Unfortunately, this technique is not consistent, so you may need to attempt multiple generations\nbefore getting a good result.\nIn the future, this type of prompting should be unnecessary since models will improve.\nHowever, currently it is a very useful technique."),(0,o.kt)("h1",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Improved models such as ",(0,o.kt)("a",{parentName:"p",href:"https://civitai.com/models/3666/protogen-x34-official-release"},"Protogen")," are often better with hands, feet, etc."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Blake. (2022). With the right prompt, Stable Diffusion 2.0 can do hands. https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);