"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2719],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(o,".").concat(c)]||m[c]||k[c]||p;return n?r.createElement(g,l(l({ref:e},s),{},{components:n})):r.createElement(g,l({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,l=new Array(p);l[0]=c;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[m]="string"==typeof t?t:a,l[1]=i;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56120:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const p={sidebar_position:1},l="\u306f\u3058\u3081\u306b",i={unversionedId:"intro",id:"intro",title:"\u306f\u3058\u3081\u306b",description:"\u521d\u5fc3\u8005\u5bfe\u5fdc\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u8b1b\u5ea7\u3078\u3088\u3046\u3053\u305d!",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Learn_Prompting/ja/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/Learn_Prompting/ja/docs/category/-basics"}},o={},u=[{value:"\u672c\u8b1b\u5ea7\u306e\u7cbe\u795e\u3068\u30d5\u30a3\u30ed\u30bd\u30d5\u30a3\u30fc",id:"\u672c\u8b1b\u5ea7\u306e\u7cbe\u795e\u3068\u30d5\u30a3\u30ed\u30bd\u30d5\u30a3\u30fc",level:2},{value:"\u672c\u8b1b\u5ea7\u306e\u6559\u3048\u65b9\u306e\u30a2\u30d7\u30ed\u30fc\u30c1",id:"\u672c\u8b1b\u5ea7\u306e\u6559\u3048\u65b9\u306e\u30a2\u30d7\u30ed\u30fc\u30c1",level:2},{value:"\u672c\u8b1b\u5ea7\u306e\u8aad\u307f\u65b9",id:"\u672c\u8b1b\u5ea7\u306e\u8aad\u307f\u65b9",level:2},{value:"\u96e3\u6613\u5ea6\u8a55\u4fa1\u30bf\u30b0",id:"\u96e3\u6613\u5ea6\u8a55\u4fa1\u30bf\u30b0",level:3},{value:"\u7ae0",id:"\u7ae0",level:2},{value:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af",id:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af",level:2}],s={toc:u},m="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u306f\u3058\u3081\u306b"},"\u306f\u3058\u3081\u306b"),(0,a.kt)("p",null,"\u521d\u5fc3\u8005\u5bfe\u5fdc\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u8b1b\u5ea7\u3078\u3088\u3046\u3053\u305d!"),(0,a.kt)("p",null,"\u30d7\u30ed\u30f3\u30d7\u30c8\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\uff08PE\uff09\u3068\u306f\u3001",(0,a.kt)("strong",{parentName:"p"},"AI\u3068\u52b9\u679c\u7684\u306b\u3084\u308a\u305f\u3044\u30bf\u30b9\u30af\u3084\u884c\u52d5\u3092\u3069\u3046\u4e0a\u624b\u304f\u4f1d\u3048\u3001\n\u671b\u307e\u3057\u3044\u7d50\u679c\u3092\u5f97\u308b\u305f\u3081"),"\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u3059\u3002\u4eba\u5de5\u77e5\u80fd\uff08AI\uff09\u304c\u6025\u901f\u306b\u9032\u6b69\u3057\u7d9a\u3051\u308b\u4e2d\u3001\nPE\u306e\u7fd2\u5f97\u306f\u307e\u3059\u307e\u3059\u8cb4\u91cd\u3067\u9700\u8981\u306e\u9ad8\u3044\u30b9\u30ad\u30eb\u306b\u306a\u3063\u3066\u3044\u3063\u3066\u307e\u3059\u3002\u672c\u8b1b\u5ea7\u3067\u306f\u3001\nPE\u306e\u5fdc\u7528\u6280\u8853\u306b\u7126\u70b9\u3092\u5f53\u3066\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30b9\u306f",(0,a.kt)("strong",{parentName:"p"},"\u521d\u5fc3\u8005"),"\u306b\u5408\u308f\u305b\u305f\u5185\u5bb9\u306b\u306a\u3063\u3066\u304a\u308a\u3001AI\u3084PE\u306b\u521d\u3081\u3066\u89e6\u308c\u308b\u65b9\u306b\u306f\u4e01\u5ea6\u3044\u3044\u30b9\u30bf\u30fc\u30c8\u5730\u70b9\u3067\u3059\u3002\n\u521d\u5fc3\u8005\u3067\u306a\u304f\u3066\u3082\u3053\u306e\u30b3\u30fc\u30b9\u306e\u4e2d\u306b\u8cb4\u91cd\u306a\u77e5\u8b58\u3092\u898b\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u672c\u8b1b\u5ea7\u306f\u3001PE\u306e\u30b3\u30fc\u30b9\u3068\u3057\u3066\u306f\n",(0,a.kt)("strong",{parentName:"p"},"\u6700\u3082\u5305\u62ec\u7684\u306a\u3082\u306e"),"\u3067\u3001AI\u306e\u5165\u9580\u304b\u3089\u9ad8\u5ea6\u306aPE\u30c6\u30af\u30cb\u30c3\u30af\u307e\u3067\u5e45\u5e83\u3044\u5185\u5bb9\u3068\u306a\u3063\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"\u672c\u8b1b\u5ea7\u306e\u7cbe\u795e\u3068\u30d5\u30a3\u30ed\u30bd\u30d5\u30a3\u30fc"},"\u672c\u8b1b\u5ea7\u306e\u7cbe\u795e\u3068\u30d5\u30a3\u30ed\u30bd\u30d5\u30a3\u30fc"),(0,a.kt)("p",null,"\u672c\u8b1b\u5ea7\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u3067\u3042\u308a\u3001\u69d8\u3005\u306a\u7814\u7a76\u8005\u3001\u7ffb\u8a33\u8005\u3001\u30db\u30d3\u30a4\u30b9\u30c8\u306a\u3069\u591a\u69d8\u306a\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u3063\u3066\u69cb\u7bc9\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u6211\u3005\u306f\u3001AI\u306f\u8ab0\u3082\u304c\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3082\u306e\u3067\u3042\u308b\u3079\u304d\u3067\u3042\u308a\u3001\u660e\u78ba\u304b\u3064\u5ba2\u89b3\u7684\u306b\u8aac\u660e\u3055\u308c\u308b\u3079\u304d\u3067\u3042\u308b\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002\n\u305d\u306e\u305f\u3081\u3001\u306a\u308b\u3079\u304f\u904e\u5ea6\u306a\u5c02\u9580\u7528\u8a9e\u3092\u6392\u9664\u3057\u3001\u5305\u62ec\u7684\u3067\u504f\u308a\u306e\u306a\u3044\u8b1b\u5ea7\u3092\u5236\u4f5c\u3059\u308b\u3088\u3046\u5fc3\u304c\u3051\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u672c\u8b1b\u5ea7\u306f\u69d8\u3005\u306a\u65b9\u3005\u304b\u3089\u9ad8\u304f\u8a55\u4fa1\u3092\u5f97\u3089\u308c\u3066\u3044\u307e\u3059\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u3053\u3061\u3089\u306e\u8b1b\u5ea7\u306f",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Prompt_engineering#cite_ref-15"},"Wikipedia"),"\n\u3067\u3082\u5f15\u7528\u3055\u308c\u3001",(0,a.kt)("a",{parentName:"li",href:"https://learning.oreilly.com/live-events/prompt-engineering-for-generating-ai-art-and-text/0636920084340/0636920084339/"},"O'REILLY"),"\u3001Scale AI\u3001\u3084OpenAI\u306a\u3069\u306e\u69d8\u3005\u306a\u5927\u4f01\u696d\u3067\u3082\u6d3b\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u305d\u306e\u4ed6\u306b\u3082\u69d8\u3005\u306a\u52d5\u753b\u3084\u30ac\u30a4\u30c9\u3067\u3082\u3053\u306e\u8b1b\u5ea7\u304c\u5f15\u7528\u3055\u308c\u305f\u308a\u7d39\u4ecb\u3055\u308c\u305f\u308a\u3057\u3066\u307e\u3059\u3002",(0,a.kt)("em",{parentName:"li"},"\uff08\u3053\u3061\u3089\u306f\u5916\u56fd\u8a9e\u306e\u5185\u5bb9\u306b\u306a\u308a\u307e\u3059\uff09"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/GPqSoiOP3w8?t=274"},"How To Become a Prompt Engineer | 5 Best ChatGPT Prompts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learnwithhasan.com/prompt-engineering-guide/"},"Prompt Engineering Ultimate Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=EYjG6i53-xk"},"This Will Make You Better than 99% ChatGPT Users")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/yR4hNBNS6yc?t=743"},"This ChatGPT Skill will earn you $10B (also, AI reads your mind!) | ML News")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/pZsJbYIFCCw?t=208"},"What is Prompting? Talking with AI Models...")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/4kp7oVTu9Ck?t=495"},"300.000$ por un trabajo que puedes APRENDER GRATIS \u25b6 Curso OPEN SOURCE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=q5wuHUmGFMw"},"Colabora con el proyecto opensource Learn Prompting sobre Prompt Engineering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/f8PGV3T9w38?t=549"},"This Bizarre Skill Makes You RICH With ChatGPT")))),(0,a.kt)("li",{parentName:"ul"},"\u6211\u3005\u306fPE\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u3001\uff13\uff18\u4e07\u4eba\u306e\u30e6\u30fc\u30b6\u30fc\u3068\n\u4e8c\u5343\u4eba\u4ee5\u4e0a\u306e",(0,a.kt)("a",{parentName:"li",href:"ttps://discord.gg/learn-prompting"},"\u30c7\u30a3\u30b9\u30b3\u30fc\u30c9"),"\u30e1\u30f3\u30d0\u30fc\u306a\u3069\u3082\u542b\u3081\u3001\n\u30b5\u30dd\u30fc\u30c8\u3067\u304d\u308b\u3053\u3068\u3092\u5e38\u306b\u5149\u6804\u306b\u601d\u3063\u3066\u304a\u308a\u307e\u3059\u3002")),(0,a.kt)("h2",{id:"\u672c\u8b1b\u5ea7\u306e\u6559\u3048\u65b9\u306e\u30a2\u30d7\u30ed\u30fc\u30c1"},"\u672c\u8b1b\u5ea7\u306e\u6559\u3048\u65b9\u306e\u30a2\u30d7\u30ed\u30fc\u30c1"),(0,a.kt)("p",null,"\u6211\u3005\u304cPE\u3092\u6559\u3048\u308b\u306e\u306b\u5f53\u305f\u3063\u3066\u4e0b\u8a18\u306e\u539f\u5247\u3092\u5143\u306b\u3057\u3066\u30a2\u30d7\u30ed\u30fc\u30c1\u3057\u3066\u304a\u308a\u307e\u3059\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u901f\u7684\u306a\u6539\u5584")," - PE\u306f\u307b\u307c\u6bce\u65e5\u65b0\u3057\u3044\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u516c\u958b\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\n\u3053\u306e\u30b3\u30fc\u30b9\u3082\u65b0\u3057\u3044\u6280\u8853\u306b\u95a2\u3059\u308b\u77ed\u3044\u8a18\u4e8b\u3092\u983b\u7e41\u306b\u66f4\u65b0\u3057\u3066\u3044\u304d\u307e\u3059\u3002\n\u3042\u306a\u305f\u304c\u8208\u5473\u306e\u3042\u308b\u5185\u5bb9\u3084\u3082\u3063\u3068\u805e\u304d\u305f\u3044\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u662f\u975e\u6559\u3048\u3066\u304f\u3060\u3055\u3044!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b9f\u7528\u6027\u3092\u91cd\u8996\u3059\u308b")," - \u6211\u3005\u306f\u6700\u901f\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u3048\u308b\u5b9f\u7528\u53ef\u80fd\u306b\u3067\u304d\u308b\u3088\u3046\u306b\u69d8\u3005\u306a\u6280\u8853\u3084\n\u30c6\u30af\u30cb\u30c3\u30af\u306b\u7126\u70b9\u3092\u5f53\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u3059\u3050\u306b\u4f7f\u3048\u308b\u4f8b")," - \u5b66\u7fd2\u3057\u305f\u5185\u5bb9\u3092\u3059\u3050\u306b\u3067\u3082\u4f7f\u3048\u308b\u3088\u3046\u306b\u3001\u672c\u8b1b\u5ea7\u3067\u306f\u660e\u78ba\u306b\u5b9f\u7528\u7684\u306a\u30c6\u30af\u30cb\u30c3\u30af\u3092\n\u3054\u7d39\u4ecb\u3057\u3066\u3044\u304d\u307e\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5354\u8abf\u5b66\u7fd2")," - \u6211\u3005\u306f\u304a\u4e92\u3044\u304b\u3089\u5b66\u3076\u3053\u3068\u3092\u5f37\u304f\u4fe1\u3058\u3066\u3044\u307e\u3059\u3002\n\u4f55\u304b\u7406\u89e3\u3067\u304d\u306a\u3044\u3053\u3068\u3084\u8aa4\u308a\u3092\u898b\u3064\u3051\u305f\u5834\u5408\u306f\u3001GitHub\u306e\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue"),"\n\u3092\u4f5c\u6210\u3057\u3066\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002\u3042\u306a\u305f\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u306f\u3001\u3053\u306e\u30b3\u30fc\u30b9\u3092\u6539\u5584\u3059\u308b\u306e\u306b\u5f79\u7acb\u3061\u307e\u3059\u3002"),(0,a.kt)("p",null,":::\u7686\u69d8\u304b\u3089\u306e\u3054\u5354\u529b\n\u3053\u3061\u3089\u306e\u672c\u8b1b\u5ea7\u306f\u73fe\u5728\u958b\u767a\u4e2d\u3067\u3042\u308a\u3001\u5e38\u306b\u5b66\u7fd2\u4f53\u9a13\u3092\u6539\u5584\u3059\u308b\u3088\u3046\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5897\u3084\u3057\u3066\u3044\u307e\u3059\u3002\n\u4f55\u304b\u3054\u610f\u898b\u3084\u3054\u611f\u60f3\u304c\u3042\u308c\u3070\u3001\u305c\u3072\u304a\u805e\u304b\u305b\u304f\u3060\u3055\u3044\uff01\n:::"),(0,a.kt)("h2",{id:"\u672c\u8b1b\u5ea7\u306e\u8aad\u307f\u65b9"},"\u672c\u8b1b\u5ea7\u306e\u8aad\u307f\u65b9"),(0,a.kt)("p",null,"\u3053\u3061\u3089\u306e\u8b1b\u5ea7\u306f\u3059\u3079\u3066\u306e\u7ae0\u3092\u9806\u756a\u306b\u8aad\u3080\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u8208\u5473\u306e\u3042\u308b\u3068\u3053\u308d\u304b\u3089\u8aad\u3093\u3067\u3044\u3063\u3066\u304f\u3060\u3055\u3044\uff01\n\u5168\u304f\u306e\u521d\u5fc3\u8005\u306e\u65b9\u3067AI\u3001\u6a5f\u68b0\u5b66\u7fd2\u3084\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u57fa\u790e\u304c\u306a\u3044\u65b9\u306f\u3001\n\u300c",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/-basics"},"\u57fa\u790e\u7de8"),"\u300d\u3068\n\u300c",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/intro"},"\u306f\u3058\u3081\u306b"),"\u300d\n\u304b\u3089\u304a\u8aad\u307f\u3044\u305f\u3060\u304f\u3068\u304a\u3059\u3059\u3081\u3067\u3059\u3002\u65e2\u306b\u4e0a\u8a18\u306e\u77e5\u8b58\u304c\u3042\u308b\u65b9\u306f\n\u300c",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/%EF%B8%8F-intermediate"},"\u4e2d\u7d1a\u7de8"),"\u300d\n\u304b\u3089\u304a\u8aad\u307f\u3044\u305f\u3060\u304f\u3068\u3001\u3088\u308a\u52b9\u679c\u7684\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"),(0,a.kt)("h3",{id:"\u96e3\u6613\u5ea6\u8a55\u4fa1\u30bf\u30b0"},"\u96e3\u6613\u5ea6\u8a55\u4fa1\u30bf\u30b0"),(0,a.kt)("p",null,"\u672c\u8b1b\u5ea7\u306e\u8a18\u4e8b\u306f\u96e3\u6613\u5ea6\u5225\u306b\u8a55\u4fa1\u3055\u308c\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u30e9\u30d9\u30eb\u304c\u8cbc\u3089\u308c\u3066\u3044\u307e\u3059\u3002\u81ea\u5206\u306e\u30b9\u30ad\u30eb\u3084\n\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306e\u77e5\u8b58\u3092\u5143\u306b\u3042\u3063\u305f\u30bf\u30b0\u3067\u672c\u8b1b\u5ea7\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("p",null,"\ud83d\udfe2 \u521d\u5fc3\u8005\u5411\u3051: \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u4e0d\u8981"),(0,a.kt)("p",null,"\ud83d\udfe1 \u521d\u7d1a: \u7c21\u5358\u306a\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u304c\u5fc5\u8981\u3060\u304c\u3001\u5c02\u9580\u77e5\u8b58\u306f\u4e0d\u8981\u3002"),(0,a.kt)("p",null,"\ud83d\udd34 \u4e2d\u7d1a: \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u304c\u5fc5\u8981\u3067\u3001\u5b9f\u88c5\u306b\u306f\u5c02\u9580\u77e5\u8b58\u304c\u5fc5\u8981\uff08\u4f8b\uff1a\u30ed\u30b0\u30d7\u30ed\u30d6\u306e\u8a08\u7b97\uff09\u3002"),(0,a.kt)("p",null,"\ud83d\udfe3 \u4e0a\u7d1a: \u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u304c\u5fc5\u8981\u3067\u3001\u5b9f\u88c5\u306b\u306f\u5c02\u9580\u77e5\u8b58\u304c\u5fc5\u8981\uff08\u4f8b\uff1a\u5f37\u5316\u5b66\u7fd2\u30a2\u30d7\u30ed\u30fc\u30c1\uff09\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\ud83d\udd34\ud83d\udfe3 \u306e\u30bf\u30b0\u306f\u5c02\u9580\u77e5\u8b58\u304c\u306a\u304f\u3066\u3082\u7406\u89e3\u3067\u304d\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3042\u308a\u307e\u3059\u304c\u3001\u5b9f\u969b\u306b\u5b9f\u88c5\u6642\u306b\u5f79\u306b\u7acb\u3064\u5185\u5bb9\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"\u7ae0"},"\u7ae0"),(0,a.kt)("p",null,"\u3053\u3053\u3067\u306f\u3001\u5404\u7ae0\u306e\u6982\u8981\u3092\u7c21\u5358\u306b\u3054\u7d39\u4ecb\u3057\u307e\u3059:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u57fa\u790e\u7de8"),": PE\u306e\u5165\u9580\u3068\u7c21\u5358\u306aPE\u306e\u6280\u8853"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u57fa\u790e\u5b9f\u88c5\u7de8"),": \u7c21\u5358\u3067\u5b9f\u7528\u7684\u306aPE"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e2d\u7d1a\u7de8"),": \u7814\u7a76\u3092\u5143\u306b\u3001\u5c11\u3005\u8907\u96d1\u306aPE\u306e\u30c6\u30af\u30cb\u30c3\u30af"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30a2\u30d7\u30e9\u30a4\u30c9\u30d7\u30ed\u30f3\u30d7\u30c8"),": \u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30e1\u30f3\u30d0\u30fc\u306b\u3088\u3063\u3066\u66f8\u304b\u308c\u305fPE\u30d7\u30ed\u30bb\u30b9\u306e\u5b8c\u5168\u306a\u30a6\u30a9\u30fc\u30af\u30b9\u30eb\u30fc"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9ad8\u5ea6\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3"),": PE \u306e\u975e\u5e38\u306b\u5f37\u529b\u3067\u3088\u308a\u9ad8\u5ea6\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u7d39\u4ecb\u3057\u307e\u3059"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4fe1\u983c\u6027"),": LLM\u3092\u3088\u308a\u4fe1\u983c\u6027\u306e\u9ad8\u3044\u3082\u306e\u306b\u3059\u308b\u306b\u306f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u753b\u50cf"),": DALLE\u3084Stable Diffusion\u306e\u3088\u3046\u306a\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u753b\u50cf\u3078\u306e\u30e2\u30c7\u30eb\u306b\u5bfe\u5fdc\u3057\u305fPE!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30d7\u30ed\u30f3\u30d7\u30c8\u30fb\u30a4\u30f3\u30b8\u30a7\u30af\u30b7\u30e7\u30f3"),": \u30cf\u30c3\u30ad\u30f3\u30b0\u3001\u305f\u3060\u3057PE\u7528"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30c4\u30fc\u30ea\u30f3\u30b0"),": \u69d8\u3005\u306aPE\u30c4\u30fc\u30eb\u3068IDE"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u30d7\u30ed\u30f3\u30d7\u30c8\u306e\u30c1\u30e5\u30fc\u30cb\u30f3\u30b0"),": \u30b0\u30e9\u30b8\u30a8\u30f3\u30c8\u3067\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u5fae\u8abf\u6574\u3059\u308b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u305d\u306e\u4ed6"),": PE\u306b\u95a2\u3059\u308b\u69d8\u3005\u306a\u30c8\u30d4\u30c3\u30af\u3084\u30c6\u30af\u30cb\u30c3\u30af\u3092\u3054\u7d39\u4ecb"),(0,a.kt)("h2",{id:"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af"},"\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af"),(0,a.kt)("p",null,"\u3053\u306e\u30b3\u30fc\u30b9\u3067\u6700\u3082\u91cd\u8981\u306a\u306e\u306f\u3001\u3042\u306a\u305f\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3067\u3059!"),(0,a.kt)("p",null,"\u3082\u3057\u8cea\u554f\u3001\u30b3\u30e1\u30f3\u30c8\u3001\u63d0\u6848\u306a\u3069\u304c\u3042\u308a\u307e\u3057\u305f\u3089:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue"),"** \u3092\u4f5c\u6210\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com")," \u307e\u3067\u30e1\u30fc\u30eb\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/discord"},"Discord"),"\u306e\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30fc\u306b\u3054\u53c2\u52a0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/learn_prompting"},"Twitter"),"\u3067\u30d5\u30a9\u30ed\u30fc\u3059\u308b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/consulting"},"\u30b3\u30f3\u30b5\u30eb\u30bf\u30f3\u30c8\u52df\u96c6"),"\u3082\u884c\u306a\u3063\u3066\u304a\u308a\u307e\u3059\u3002")),(0,a.kt)("p",null,"\u308f\u305a\u304b\u306a\u611f\u60f3\u3067\u3082\u3001\u3068\u3066\u3082\u53c2\u8003\u306b\u306a\u308a\u307e\u3059!"))}k.isMDXComponent=!0}}]);