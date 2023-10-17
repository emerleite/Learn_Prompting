"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),m=s,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),s=(n(67294),n(3905));const i={sidebar_position:0},o="\ud83d\udfe2 Introduction",a={unversionedId:"basics/intro",id:"basics/intro",title:"\ud83d\udfe2 Introduction",description:"Cet article est con\xe7u pour les personnes ayant peu ou pas d'exp\xe9rience dans les secteurs de Prompt engineering ou m\xeame d'IA. Le public cible ici est tout le monde, des \xe9tudiants aux adultes non exp\xe9riment\xe9s dans ces secteurs. Nous couvrirons les bases de l'IA et pourquoi vous devriez vous soucier du prompt engineering.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/basics/intro.md",sourceDirName:"basics",slug:"/basics/intro",permalink:"/Learn_Prompting/fr/docs/basics/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude03 Basics",permalink:"/Learn_Prompting/fr/docs/category/-basics"},next:{title:"\ud83d\udfe2 Prompting",permalink:"/Learn_Prompting/fr/docs/basics/prompting"}},u={},l=[{value:"Qu\u2019est ce qu\u2019une IA",id:"quest-ce-quune-ia",level:2},{value:"Pourquoi devrais-je m&#39;en soucier ?",id:"pourquoi-devrais-je-men-soucier-",level:2},{value:"Comment d\xe9marrer ?",id:"comment-d\xe9marrer-",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-introduction"},"\ud83d\udfe2 Introduction"),(0,s.kt)("p",null,"Cet article est con\xe7u pour les personnes ayant peu ou pas d'exp\xe9rience dans les secteurs de Prompt engineering ou m\xeame d'IA. Le public cible ici est tout le monde, des \xe9tudiants aux adultes non exp\xe9riment\xe9s dans ces secteurs. Nous couvrirons les bases de l'IA et pourquoi vous devriez vous soucier du prompt engineering."),(0,s.kt)("p",null,"Si vous connaissez d\xe9j\xe0 les bases du prompt engineering/IA, n'h\xe9sitez pas \xe0 passer \xe0 l'article suivant."),(0,s.kt)("h2",{id:"quest-ce-quune-ia"},"Qu\u2019est ce qu\u2019une IA"),(0,s.kt)("p",null,'Pour nos besoins, l\'intelligence artificielle (IA) est un domaine dans lequel les gens ont cr\xe9\xe9 des algorithmes "intelligents" qui "pensent" comme les humains',(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Ces algorithmes peuvent r\xe9diger des\xa0",(0,s.kt)("strong",{parentName:"p"},"dissertations"),", r\xe9soudre\xa0",(0,s.kt)("strong",{parentName:"p"},"probl\xe8mes math\xe9matiques")," et cr\xe9er\xa0de l\u2019",(0,s.kt)("strong",{parentName:"p"},"art"),". Les avanc\xe9es r\xe9centes dans le domaine ont cr\xe9\xe9 des IA si avanc\xe9es qu'elles peuvent r\xe9diger des ",(0,s.kt)("strong",{parentName:"p"},"e-mails de vente")," convaincants, des ",(0,s.kt)("strong",{parentName:"p"},"articles d'actualit\xe9")," et m\xeame\xa0",(0,s.kt)("strong",{parentName:"p"},"gagner des ",(0,s.kt)("a",{parentName:"strong",href:"https://impakter.com/art-made-by-ai-wins-fine-arts-competition/"},"concours d\u2019art"),".")),(0,s.kt)("p",null,"L'IA r\xe9volutionne actuellement de nombreux secteurs, notamment le\xa0",(0,s.kt)("strong",{parentName:"p"},"journalisme"),",\xa0la\xa0",(0,s.kt)("strong",{parentName:"p"},"sant\xe9")," et l'\xa0",(0,s.kt)("strong",{parentName:"p"},"\xe9ducation"),". Vous le verrez probablement bient\xf4t d\xe9ploy\xe9 sur votre lieu de travail/salle de classe si vous ne l'avez pas d\xe9j\xe0 fait. Bien que l'IA soit extr\xeamement utile, elle n\xe9cessite que les humains la dirigent sur ce qu'il faut faire. Souvent, les IA sont comme des enfants de cinq ans tr\xe8s intelligents. Ils peuvent faire beaucoup de choses, mais ils ont besoin d'instructions pr\xe9cises pour bien les faire."),(0,s.kt)("p",null,"\xcatre capable de diriger correctement les IA est une comp\xe9tence tr\xe8s puissante. Alors, comment communiquez avec elles? Les IA abord\xe9es dans ce cours comprennent l'anglais (et d'autres langues), nous pouvons donc g\xe9n\xe9ralement simplement d\xe9crire les t\xe2ches que nous voulons accomplir. Par exemple, nous pouvons dire \xe0 une IA de\xa0",(0,s.kt)("inlineCode",{parentName:"p"},"R\xe9diger un essai sur les avantages de l'IA"),"\xa0et elle dirait",(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\xa0:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Ces derni\xe8res ann\xe9es, l'intelligence artificielle (IA) est devenue un sujet br\xfblant dans le monde de la technologie. Avec son potentiel de r\xe9volutionner de nombreux aspects de nos vies, l'IA devient de plus en plus pertinente \xe0 mesure que la technologie continue de se d\xe9velopper. De ses applications dans les soins de sant\xe9 et les transports \xe0 son utilisation dans l'\xe9ducation et la fabrication, l'IA nous a d\xe9j\xe0 montr\xe9 son immense potentiel au profit de la soci\xe9t\xe9 de multiples fa\xe7ons.\n\nL'avantage le plus \xe9vident de l'IA est sa capacit\xe9 \xe0 automatiser les t\xe2ches banales. Les syst\xe8mes d'IA peuvent \xeatre utilis\xe9s pour automatiser des op\xe9rations \xe0 grande \xe9chelle, telles que l'analyse de donn\xe9es, le service client et m\xeame la production de biens. Cela lib\xe8re le travail humain pour se concentrer sur des t\xe2ches complexes et cr\xe9atives qui n\xe9cessitent plus d'intelligence et d'ing\xe9niosit\xe9 humaines. L'IA peut \xe9galement \xeatre utilis\xe9e pour analyser de grandes quantit\xe9s de donn\xe9es et prendre des d\xe9cisions en une fraction du temps qu'il faudrait \xe0 un humain. Cela peut \xeatre b\xe9n\xe9fique dans des secteurs tels que la finance, o\xf9 l'IA peut d\xe9tecter des tendances sur le march\xe9 boursier et offrir des informations qui passeraient autrement inaper\xe7ues.\n\nL'IA peut \xe9galement \xeatre utilis\xe9e pour faire des pr\xe9dictions et g\xe9n\xe9rer des informations qui peuvent \xeatre utilis\xe9es pour am\xe9liorer l'efficacit\xe9 et la pr\xe9cision. Par exemple, l'IA peut \xeatre utilis\xe9e pour pr\xe9dire les tendances et les pr\xe9f\xe9rences des clients, aidant ainsi les entreprises \xe0 prendre de meilleures d\xe9cisions et \xe0 augmenter leurs profits. L'IA peut \xe9galement \xeatre utilis\xe9e pour identifier les risques et opportunit\xe9s potentiels dans divers secteurs, tels que la finance, la sant\xe9 et la fabrication. Cela peut aider les entreprises \xe0 prendre des d\xe9cisions \xe9clair\xe9es et \xe0 r\xe9duire le risque d'erreurs co\xfbteuses.\n\nEnfin, l'IA peut \xeatre utilis\xe9e pour am\xe9liorer notre compr\xe9hension du monde. L'IA peut \xeatre utilis\xe9e pour analyser de grands ensembles de donn\xe9es et g\xe9n\xe9rer des informations qui peuvent \xeatre utilis\xe9es pour mieux comprendre le monde qui nous entoure. Cela peut \xeatre utilis\xe9 pour nous aider \xe0 mieux comprendre les impacts du changement climatique, \xe0 d\xe9velopper de nouveaux traitements contre les maladies et m\xeame \xe0 pr\xe9voir des \xe9v\xe9nements tels que des tremblements de terre et des inondations.\n\nDans l'ensemble, l'IA a le potentiel de r\xe9volutionner de nombreux aspects de nos vies. De l'automatisation de t\xe2ches banales \xe0 la g\xe9n\xe9ration d'informations et de pr\xe9visions, l'IA peut \xeatre utilis\xe9e pour am\xe9liorer l'efficacit\xe9, la pr\xe9cision et notre compr\xe9hension du monde. \xc0 mesure que la technologie continue de se d\xe9velopper, l'IA deviendra de plus en plus pertinente et son potentiel de b\xe9n\xe9ficier \xe0 la soci\xe9t\xe9 ne fera que cro\xeetre.\n")),(0,s.kt)("h2",{id:"pourquoi-devrais-je-men-soucier-"},"Pourquoi devrais-je m'en soucier ?"),(0,s.kt)("p",null,"L'IA peut \xeatre utilis\xe9e pour automatiser les t\xe2ches auxquelles vous consacrez d'innombrables heures en ce moment. Nous avons mentionn\xe9 plusieurs exemples ci-dessus, mais vous pouvez \xe9galement envisager toute t\xe2che l\xe9g\xe8rement r\xe9p\xe9titive que vous effectuez. Il peut s'agir d'\xe9crire des e-mails, de r\xe9diger des rapports ou m\xeame d'\xe9crire du code. Si vous pouvez d\xe9crire la t\xe2che \xe0 une IA, elle peut probablement le faire pour vous ou au moins vous donner un point de d\xe9part."),(0,s.kt)("h2",{id:"comment-d\xe9marrer-"},"Comment d\xe9marrer ?"),(0,s.kt)("p",null,"Ce cours vous apprendra \xe0 communiquer avec les IA. Lisez le reste de ce chapitre, puis consultez les autres chapitres qui vous int\xe9ressent. En particulier, la section de sollicitation appliqu\xe9e peut \xeatre int\xe9ressante si vous souhaitez voir comment les professionnels utilisent l'IA pour automatiser leur travail. Vous pouvez exp\xe9rimenter des IA \xe0 l'aide de ressources telles que ",(0,s.kt)("a",{parentName:"p",href:"https://beta.openai.com/playground"},"Playground"),", ",(0,s.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/tooling/IDEs/intro"},"d'autres IDE")," ou simplement en utilisant les int\xe9grations\xa0embed\xa0interactives que vous verrez sur ce site."),(0,s.kt)("p",null,"Avant de lire le prochain article, il est important de noter que vous n'avez besoin d'aucune formation technique pour faire du prompt engineering. La plupart sont des essais et des erreurs, et vous pouvez apprendre au fur et \xe0 mesure."),(0,s.kt)("p",null,(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," : Techniquement, ils ne \"pensent\" pas comme les humains, mais c'est une fa\xe7on simple de l'expliquer.\u21a9\n",(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," : Une IA (GPT-3 davinci-003) a en fait \xe9crit ceci.\u21a9"))}d.isMDXComponent=!0}}]);