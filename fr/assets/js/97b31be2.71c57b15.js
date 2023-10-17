"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_position:1},i="\ud83d\udfe2 D\xe9tection de texte g\xe9n\xe9r\xe9 par l'IA",o={unversionedId:"miscl/detect",id:"miscl/detect",title:"\ud83d\udfe2 D\xe9tection de texte g\xe9n\xe9r\xe9 par l'IA",description:"La d\xe9tection de textes g\xe9n\xe9r\xe9s par l'IA est un probl\xe8me important pour les chercheurs et les enseignants en s\xe9curit\xe9, entre autres. Des outils tels que GPTZero, le d\xe9tecteur GPT2 et les d\xe9tecteurs bilingues ont connu un succ\xe8s consid\xe9rable, mais ils peuvent \xeatre tromp\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/miscl/detect.md",sourceDirName:"miscl",slug:"/miscl/detect",permalink:"/Learn_Prompting/fr/docs/miscl/detect",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/miscl/detect.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/Learn_Prompting/fr/docs/category/-miscellaneous"},next:{title:"\ud83d\udfe2 D\xe9tection de tricherie",permalink:"/Learn_Prompting/fr/docs/miscl/trickery"}},l={},u=[{value:"Classificateur de texte OpenAI",id:"classificateur-de-texte-openai",level:2},{value:"La m\xe9thode du filigrane",id:"la-m\xe9thode-du-filigrane",level:2},{value:"<strong>DetectGPT</strong>",id:"detectgpt",level:2},{value:"<strong>Note</strong>",id:"note",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-d\xe9tection-de-texte-g\xe9n\xe9r\xe9-par-lia"},"\ud83d\udfe2 D\xe9tection de texte g\xe9n\xe9r\xe9 par l'IA"),(0,a.kt)("p",null,"La d\xe9tection de textes g\xe9n\xe9r\xe9s par l'IA est un probl\xe8me important pour les chercheurs et les enseignants en s\xe9curit\xe9, entre autres. Des outils tels que ",(0,a.kt)("a",{parentName:"p",href:"https://gptzero.me/"},"GPTZero"),", le ",(0,a.kt)("a",{parentName:"p",href:"https://openai-openai-detector.hf.space/"},"d\xe9tecteur GPT2")," et les ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Hello-SimpleAI/chatgpt-comparison-detection"},"d\xe9tecteurs bilingues")," ont connu un succ\xe8s consid\xe9rable, mais ils peuvent \xeatre tromp\xe9s."),(0,a.kt)("p",null,"OpenAI et d'autres chercheurs",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," s'efforcent d'introduire un filigrane statistique dans le texte qu'ils g\xe9n\xe8rent, mais cela aussi peut \xeatre tromp\xe9 en modifiant de grandes parties du texte."),(0,a.kt)("p",null,"Le probl\xe8me de la d\xe9tection de texte par l'IA sera probablement une course aux armements au fur et \xe0 mesure de l'introduction de nouveaux mod\xe8les et de nouvelles m\xe9thodes de d\xe9tection. De nombreuses entreprises ont d\xe9j\xe0 commenc\xe9 \xe0 construire des solutions qu'elles pr\xe9tendent tr\xe8s efficaces, mais il est difficile de le prouver, d'autant que les mod\xe8les \xe9voluent avec le temps."),(0,a.kt)("p",null,"Cet article pr\xe9sente quelques-unes des m\xe9thodes actuelles de d\xe9tection des textes g\xe9n\xe9r\xe9s par l'IA, et le suivant abordera quelques moyens que les gens ont trouv\xe9s pour les tromper."),(0,a.kt)("h2",{id:"classificateur-de-texte-openai"},"Classificateur de texte OpenAI"),(0,a.kt)("p",null,"Le ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/ai-text-classifier"},"classificateur de texte d'OpenAI")," est une assez bonne tentative de d\xe9tecteur de texte d'IA \xe0 usage g\xe9n\xe9ral. En entra\xeenant le mod\xe8le sur une grande quantit\xe9 de donn\xe9es g\xe9n\xe9r\xe9es par l'IA et de textes \xe9crits par des humains de qualit\xe9 similaire, le d\xe9tecteur est capable de calculer la probabilit\xe9 qu'un texte donn\xe9 ait \xe9t\xe9 cr\xe9\xe9 par un LLM."),(0,a.kt)("p",null,"Il pr\xe9sente un certain nombre de limites : il n'accepte pas les textes de moins de 1000 mots, le texte peut facilement \xeatre modifi\xe9 pour fausser les calculs de probabilit\xe9 et, en raison de son ensemble d'apprentissage ax\xe9 sur les professionnels, il a plus de mal avec les textes cr\xe9\xe9s par des enfants ou des non-anglophones."),(0,a.kt)("p",null,"Actuellement, il ne signale un texte humain comme \xe9tant g\xe9n\xe9r\xe9 par l'IA qu'environ 9 % du temps, et identifie correctement un texte g\xe9n\xe9r\xe9 par l'IA dans environ 26 % des cas. Au fur et \xe0 mesure que le mod\xe8le gagne en puissance et en port\xe9e, ces chiffres s'am\xe9lioreront, mais il se peut que des d\xe9tecteurs plus sp\xe9cifiques soient n\xe9cessaires pour \xe9valuer correctement si un texte est g\xe9n\xe9r\xe9 ou non."),(0,a.kt)("h2",{id:"la-m\xe9thode-du-filigrane"},"La m\xe9thode du filigrane"),(0,a.kt)("p",null,"Une m\xe9thode de d\xe9tection du texte g\xe9n\xe9r\xe9 par l'IA consiste \xe0 introduire un filigrane statistique lors de la g\xe9n\xe9ration du texte. Ces techniques peuvent utiliser une \"liste blanche\" LLM, qui est une m\xe9thode permettant de d\xe9terminer si le texte a \xe9t\xe9 g\xe9n\xe9r\xe9 par un mod\xe8le d'IA sp\xe9cifique. Le filigrane fonctionne en s\xe9lectionnant un ensemble al\xe9atoire de tokens \"verts\" avant la g\xe9n\xe9ration d'un mot, puis en favorisant de mani\xe8re douce l'utilisation des tokens s\xe9lectionn\xe9s pendant l'\xe9chantillonnage. Ces valeurs pond\xe9r\xe9es ont un effet minimal sur la qualit\xe9 des g\xe9n\xe9rations, mais peuvent \xeatre d\xe9tect\xe9es algorithmiquement par un autre LLM",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,a.kt)("p",null,"C'est une id\xe9e fascinante, mais elle exige que les cr\xe9ateurs d'un mod\xe8le mettent en \u0153uvre ce cadre dans leur LLM. Si le filigrane n'est pas int\xe9gr\xe9 dans un mod\xe8le, cette m\xe9thode ne fonctionnera pas."),(0,a.kt)("h2",{id:"detectgpt"},(0,a.kt)("strong",{parentName:"h2"},"DetectGPT")),(0,a.kt)("p",null,"La m\xe9thode ",(0,a.kt)("a",{parentName:"p",href:"https://detectgpt.ericmitchell.ai/"},"DetectGPT"),(0,a.kt)("sup",{parentName:"p",id:"fnref-4"},(0,a.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),' est capable de d\xe9tecter les textes g\xe9n\xe9r\xe9s par l\'IA avec moins de configuration que les concepts pr\xe9c\xe9dents. Les chercheurs ont constat\xe9 que les g\xe9n\xe9rations de texte LLM ont tendance \xe0 "occuper les r\xe9gions \xe0 courbure n\xe9gative de la fonction de probabilit\xe9 logarithmique du mod\xe8le". De ce fait, il est possible de cr\xe9er un syst\xe8me bas\xe9 sur la courbure pour d\xe9terminer si un bloc de texte a \xe9t\xe9 g\xe9n\xe9r\xe9 de mani\xe8re proc\xe9durale.'),(0,a.kt)("p",null,"Il fonctionne en calculant les probabilit\xe9s logarithmiques du mod\xe8le cens\xe9 avoir g\xe9n\xe9r\xe9 le texte et en les comparant \xe0 des alt\xe9rations al\xe9atoires du texte provenant d'un autre mod\xe8le de langage g\xe9n\xe9rique pr\xe9-entra\xeen\xe9. De cette mani\xe8re, DetectGPT est capable d'identifier la probabilit\xe9 que le passage ait \xe9t\xe9 g\xe9n\xe9r\xe9 en utilisant uniquement les courbes de probabilit\xe9 !"),(0,a.kt)("h2",{id:"note"},(0,a.kt)("strong",{parentName:"h2"},"Note")),(0,a.kt)("p",null,"Pour une discussion suppl\xe9mentaire sur le sujet des d\xe9tecteurs et la fa\xe7on dont les gens les trompent, voir ",(0,a.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/miscl/trickery"},"cet article"),"."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Bansal, A., yeh Ping-Chiang, Curry, M., Jain, R., Wigington, C., Manjunatha, V., Dickerson, J. P., & Goldstein, T. (2022). Certified Neural Network Watermarks with Randomized Smoothing.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Gu, C., Huang, C., Zheng, X., Chang, K.-W., & Hsieh, C.-J. (2022). Watermarking Pre-trained Language Models with Backdooring.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Kirchenbauer, J., Geiping, J., Wen, Y., Katz, J., Miers, I., & Goldstein, T. (2023). A Watermark for Large Language Models. https://arxiv.org/abs/2301.10226\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-4"},"Mitchell, E., Lee, Y., Khazatsky, A., Manning, C., & Finn, C. (2023). DetectGPT: Zero-Shot Machine-Generated Text Detection using Probability Curvature. https://doi.org/10.48550/arXiv.2301.11305\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);