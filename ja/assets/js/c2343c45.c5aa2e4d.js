"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7857],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},95540:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const a=o.p+"assets/images/lp_embed-3d4525c649f4b3e39a3ca299b4de3a6f.webp",i=o.p+"assets/images/API_key-eef8fce0c0d1f23775584f304a9d4f5b.webp",s={sidebar_position:40},l="\ud83d\udfe2 Learn Prompting Embeds",p={unversionedId:"basics/embeds",id:"basics/embeds",title:"\ud83d\udfe2 Learn Prompting Embeds",description:"- Set up the Learn Prompting Embed",source:"@site/docs/basics/embeds.md",sourceDirName:"basics",slug:"/basics/embeds",permalink:"/Learn_Prompting/ja/docs/basics/embeds",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/embeds.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompt Engineering",permalink:"/Learn_Prompting/ja/docs/basics/prompt_engineering"},next:{title:"\ud83d\udfe2 \u30c1\u30e3\u30c3\u30c8\u30dc\u30c3\u30c8\u306e\u57fa\u672c",permalink:"/Learn_Prompting/ja/docs/basics/chatbot_basics"}},c={},u=[{value:"Get Set Up",id:"get-set-up",level:2},{value:"Get an OpenAI API Key",id:"get-an-openai-api-key",level:3},{value:"Using the Embed",id:"using-the-embed",level:3},{value:"Conclusion",id:"conclusion",level:2}],m=(d="LazyLoadImage",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const h={toc:u},b="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(b,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-learn-prompting-embeds"},"\ud83d\udfe2 Learn Prompting Embeds"),(0,r.kt)("admonition",{type:"takeaways"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Set up the Learn Prompting Embed"),(0,r.kt)("li",{parentName:"ul"},"Run ChatGPT prompts in the course website"))),(0,r.kt)("p",null,"The ChatGPT website is useful, but wouldn't it be nice if you could write and test prompts right on this website? With ",(0,r.kt)("a",{parentName:"p",href:"https://embed.learnprompting.org/"},"Learn Prompting Embeds"),", you can! Read on to see how to set this up. We will include these interactive embeds in the most articles."),(0,r.kt)("h2",{id:"get-set-up"},"Get Set Up"),(0,r.kt)("p",null,"Watch the video tutorial here:"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/sNUKiwd2DWU",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),(0,r.kt)("p",null,"Here is an ",(0,r.kt)("strong",{parentName:"p"},"image")," of what an embed looks like:"),(0,r.kt)("img",{src:a,class:"img-docs",style:{width:"100%"}}),(0,r.kt)("p",null,"You should be able to see an embed that looks just like the image right below this paragraph. If it is not visible, you may need to enable JavaScript or use a different browser. If you still cannot see it, join the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/learn-prompting"},"Discord")," and tell us about your problem."),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNob2NvbGF0ZSwgVmFuaWxsYSwgU3RyYXdiZXJyeSwgTWludCBDaGlwLCBSb2NreSBSb2FkLCBDb29raWUgRG91Z2gsIEJ1dHRlciBQZWNhbiwgTmVhcG9saXRhbiwgQ29mZmVlLCBDb2NvbnV0IiwicHJvbXB0IjoiR2VuZXJhdGUgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiAxMCBpY2UgY3JlYW0gZmxhdm9yczoiLCJtb2RlbCI6ImdwdC0zLjUtdHVyYm8ifQ%3D%3D",style:{width:"100%",height:"320px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("p",null,"Assuming that you can see the embed, click on the ",(0,r.kt)("strong",{parentName:"p"},"Generate")," button. If this is your first time using it, you will be prompted to input an OpenAI API key. An OpenAI API key is just a string of text that the embed uses to link to your OpenAI account."),(0,r.kt)("h3",{id:"get-an-openai-api-key"},"Get an OpenAI API Key"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First, navigate to ",(0,r.kt)("a",{parentName:"li",href:"https://platform.openai.com/account/api-keys"},"https://platform.openai.com/account/api-keys")," "),(0,r.kt)("li",{parentName:"ul"},"Then, sign up for or sign into your OpenAI account. "),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Create new secret key")," button. It will pop up a modal that contains a string of text like this:")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(m,{src:i,class:"img-docs",style:{width:"80%"},mdxType:"LazyLoadImage"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy and paste this key into the embed on this website and click ",(0,r.kt)("strong",{parentName:"li"},"Submit"),". ")),(0,r.kt)("p",null,"You should now be able to use the embeds throughout this site. Note that OpenAI charges you for each prompt you submit through these embeds. If you have recently created a new account, you should have 3 months of free credits. If you have run out of credits, don't worry, since using these models is very cheap. ChatGPT only costs about $0.02 for every seven thousand words you generate",(0,r.kt)("sup",{parentName:"p",id:"fnref-a"},(0,r.kt)("a",{parentName:"sup",href:"#fn-a",className:"footnote-ref"},"a")),"."),(0,r.kt)("h3",{id:"using-the-embed"},"Using the Embed"),(0,r.kt)("p",null,'Let\'s learn how to use the embed. Edit the "Type your prompt here" field. This embed is effectively the same as using ChatGPT, except that you cannot have a full conversation. In this course, the embeds are just used to show examples of prompt engineering techniques.'),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik91dHB1dCBhcHBlYXJzIGhlcmUiLCJwcm9tcHQiOiJUeXBlIHlvdXIgcHJvbXB0IGhlcmUiLCJtb2RlbCI6ImdwdC0zLjUtdHVyYm8ifQ%3D%3D",style:{width:"100%",height:"300px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("p",null,"You can see four pieces of information under the Generate button. The left one, 'gpt-3.5-turbo' is the model (gpt-3.5-turbo is the technical name for ChatGPT). The three numbers are ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/configuration_hyperparameters"},"LLM settings"),", which we will learn about in a few articles. If you would like to make your own embed, click the\nedit this embed button. "),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"These embeds will make it easier for you to learn throughout the course, since you can quickly test your prompts, without clicking into a different tab. However, you do not have to use the embeds if you prefer the ChatGPT interface. Just continue to copy and paste prompts into ChatGPT. If you do intend to use the embeds, write down your API key somewhere, since the OpenAI website only allows you to see it once."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Never tell anyone your API key, since they could charge your account with prompts.")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-a"},"See full pricing information ",(0,r.kt)("a",{parentName:"li",href:"https://openai.com/pricing"},"here"),(0,r.kt)("a",{parentName:"li",href:"#fnref-a",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);