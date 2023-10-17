"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1342],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),m=function(e){var a=o.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=m(e.components);return o.createElement(p.Provider,{value:a},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=m(t),d=r,g=l["".concat(p,".").concat(d)]||l[d]||c[d]||n;return t?o.createElement(g,i(i({ref:a},u),{},{components:t})):o.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<n;m++)i[m]=t[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48395:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>m});var o=t(87462),r=(t(67294),t(3905));const n={sidebar_position:3},i="\ud83d\udfe2 *Prompting* de Atua\xe7\xe3o (*Role Prompting*)",s={unversionedId:"basics/roles",id:"basics/roles",title:"\ud83d\udfe2 *Prompting* de Atua\xe7\xe3o (*Role Prompting*)",description:'Uma outra t\xe9cnica de prompt \xe9 atribuir um papel \xe0 uma IA. Por exemplo, seu prompt pode come\xe7ar com: "Voc\xea \xe9 um',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/basics/roles.md",sourceDirName:"basics",slug:"/basics/roles",permalink:"/docs/basics/roles",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/roles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Dando Instru\xe7\xf5es",permalink:"/docs/basics/instructions"},next:{title:"\ud83d\udfe2 Prompt Engineering",permalink:"/docs/basics/prompt_engineering"}},p={},m=[{value:"Observa\xe7\xf5es",id:"observa\xe7\xf5es",level:2},{value:"Examples",id:"examples",level:2}],u={toc:m},l="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(l,(0,o.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-prompting-de-atua\xe7\xe3o-role-prompting"},"\ud83d\udfe2 ",(0,r.kt)("em",{parentName:"h1"},"Prompting")," de Atua\xe7\xe3o (",(0,r.kt)("em",{parentName:"h1"},"Role Prompting"),")"),(0,r.kt)("p",null,"Uma outra t\xe9cnica de ",(0,r.kt)("em",{parentName:"p"},"prompt")," \xe9 atribuir um papel \xe0 uma IA. Por exemplo, seu ",(0,r.kt)("em",{parentName:"p"},"prompt"),' pode come\xe7ar com: "Voc\xea \xe9 um\ndoutor" ou "Voc\xea \xe9 um advogado" e ent\xe3o pedir a IA para responder alguma quest\xe3o m\xe9dica ou legal. Aqui est\xe1 um exemplo:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Voc\xea \xe9 um brilhante matem\xe1tico que pode resolver qualquer problema do mundo. Tente resolver o problema \xe0 seguir:\n\nQuanto \xe9 100*100/400*56?\n\n// highlight-start\nA resposta \xe9 1400.\n// highlight-end\n")),(0,r.kt)("p",null,"A resposta da IA GPT-3 (text-davinci-003) est\xe1 destacada em verde (lembre-se de modificar a temperatura para 0)."),(0,r.kt)("p",null,"Esta \xe9 a resposta correta, mas se a IA tivesse sido simplesmente perguntada com ",(0,r.kt)("inlineCode",{parentName:"p"},"Quanto \xe9 100*100/400*56?"),", ela teria\nrespondido ",(0,r.kt)("inlineCode",{parentName:"p"},"2240")," (incorreto). Note que o ",(0,r.kt)("em",{parentName:"p"},"ChatGPT")," responder\xe1 a pergunta incorreta, mas de uma forma diferente."),(0,r.kt)("p",null,"Quando atribu\xedmos um papel para a IA atuar, n\xf3s estamos lhe dando contexto. Esse contexto ajuda a IA a entender a\npergunta melhor. Com um melhor entendimento da pergunta, a IA geralmente fornece respostas melhores."),(0,r.kt)("h2",{id:"observa\xe7\xf5es"},"Observa\xe7\xf5es"),(0,r.kt)("p",null,"Essa t\xe9cnica n\xe3o \xe9 mais t\xe3o efetiva nas mais modernas IAs, como por exemplo. a GPT-3 (text-davinci-003). No entanto,\no exemplo acima foi feito utilizando-a, logo, podemos ver que ",(0,r.kt)("em",{parentName:"p"},"prompting")," de atua\xe7\xe3o ainda tem sua import\xe2ncia e \xe9 uma\nferramenta efetiva de intera\xe7\xe3o com IAs."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Voc\xea pode encontrar ",(0,r.kt)("em",{parentName:"p"},"prompts")," interessantes (em ingl\xeas) no reposit\xf3rio\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/f/awesome-chatgpt-prompts#prompts"},"Awesome ChatGPT Prompts")," do GitHub. Eles foram pensados para\ninteragir com o ",(0,r.kt)("em",{parentName:"p"},"ChatGPT"),", mais eles podem funcionar com outras IAs e voc\xea tamb\xe9m pode utiliz\xe1-los como inspira\xe7\xe3o para\ncriar seus pr\xf3prios ",(0,r.kt)("em",{parentName:"p"},"prompts"),", vamos ver dois exemplos traduzidos:"),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"aja-como-um-etimologista"},"Aja como um Etimologista"),(0,r.kt)("p",{parentName:"blockquote"},"Eu quero que voc\xea aja como um etimologista. Eu vou lhe dar uma palavra e voc\xea pesquisar\xe1 a origem daquela palavra,\ntra\xe7ando seu passado at\xe9 suas ra\xedzes ancestrais. Voc\xea tamb\xe9m deve fornecer informa\xe7\xe3o de como o significado da palavra\nfoi se modificando ao longo do tempo, quando aplic\xe1vel. Minha primeira solicita\xe7\xe3o \xe9: \"Eu quero tra\xe7ar as origens da\npalavra 'pizza'\".")),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"aja-como-um-lun\xe1tico"},"Aja como um Lun\xe1tico"),(0,r.kt)("p",{parentName:"blockquote"},'Eu quero que voc\xea aja como um lun\xe1tico. As frases do lun\xe1tico s\xe3o sem sentido. As palavras utilizadas pelo lun\xe1tico\ns\xe3o completamente arbitr\xe1rias. O lun\xe1tico n\xe3o faz frases l\xf3gias de maneira alguma. Minha primeira solicita\xe7\xe3o de\nsugest\xf5es \xe9: "Eu preciso de ajuda criando frases lun\xe1ticas para minha nova s\xe9rie chamada Cr\xe2nio Quente, ent\xe3o escreva\n10 frases para mim".')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\ud83d\udea7 Esta p\xe1gina precisa de cita\xe7\xf5es."))}c.isMDXComponent=!0}}]);