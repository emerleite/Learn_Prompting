"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6236],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17725:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:2},i="\ud83d\udd34 Soft Prompts Interpretables",s={unversionedId:"trainable/discretized",id:"trainable/discretized",title:"\ud83d\udd34 Soft Prompts Interpretables",description:"Los soft prompts son una secuencia de vectores que no corresponden a ning\xfan token real del vocabulario. Esto dificulta la interpretaci\xf3n del prompt. Sin embargo, a\xfan podemos intentar hacerlo mapeando los vectores a los tokens m\xe1s cercanos en el vocabulario. Sin embargo, los soft prompts proyectados suelen ser desviados; pueden resolver tareas bien, pero proyectarse a tokens arbitrarios en el vocabulario(@khashabi2021prompt).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/trainable/discretized.md",sourceDirName:"trainable",slug:"/trainable/discretized",permalink:"/Learn_Prompting/es/docs/trainable/discretized",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/discretized.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Soft Prompts",permalink:"/Learn_Prompting/es/docs/trainable/soft_prompting"},next:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/Learn_Prompting/es/docs/category/-miscellaneous"}},p={},l=[{value:"La hip\xf3tesis de desviaci\xf3n",id:"la-hip\xf3tesis-de-desviaci\xf3n",level:2},{value:"Riesgos de interpretaci\xf3n",id:"riesgos-de-interpretaci\xf3n",level:2}],c={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-soft-prompts-interpretables"},"\ud83d\udd34 Soft Prompts Interpretables"),(0,a.kt)("p",null,"Los soft prompts son una secuencia de vectores que no corresponden a ning\xfan token real del vocabulario. Esto dificulta la interpretaci\xf3n del prompt. Sin embargo, a\xfan podemos intentar hacerlo mapeando los vectores a los tokens m\xe1s cercanos en el vocabulario. Sin embargo, los soft prompts proyectados suelen ser desviados; pueden resolver tareas bien, pero proyectarse a tokens arbitrarios en el vocabulario",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.kt)("p",null,"Por ejemplo, si estamos entrenando en preguntas de matem\xe1ticas como GSM8K",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", podr\xedamos comenzar con el prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"Eres un matem\xe1tico. Resuelve esta pregunta:"),". Si hacemos ajuste de prompt en \xe9l, luego lo proyectamos de regreso al espacio de tokens, podr\xedamos quedarnos con algo sin sentido como ",(0,a.kt)("inlineCode",{parentName:"p"},"Un autob\xfas es un autob\xfas. Hacer cosa aqu\xed:"),". A menudo, el prompt suave que se asigna a este prompt sin sentido puede proporcionar un mejor rendimiento en la tarea."),(0,a.kt)("h2",{id:"la-hip\xf3tesis-de-desviaci\xf3n"},"La hip\xf3tesis de desviaci\xf3n"),(0,a.kt)("p",null,"Khashabi et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," proponen esta incre\xedble hip\xf3tesis. Dice que dado una tarea, para cualquier prompt objetivo discreto, existe un prompt continuo que se proyecta en \xe9l, mientras se desempe\xf1a bien en la tarea."),(0,a.kt)("p",null,"Esto significa que dado 1000 tareas diferentes, existen 1000 soft prompts diferentes y efectivos (uno para cada tarea) que se asignan al mismo prompt discreto."),(0,a.kt)("h2",{id:"riesgos-de-interpretaci\xf3n"},"Riesgos de interpretaci\xf3n"),(0,a.kt)("p",null,"Utilizan la hip\xf3tesis de desviaci\xf3n para resaltar una serie de riesgos que surgen al interpretar los soft prompts. En particular, un soft prompt puede ser proyectado en un prompt discreto que da una intenci\xf3n enga\xf1osa."),(0,a.kt)("p",null,"Considera un soft prompt para clasificar curr\xedculums. Cuando se proyecta en el espacio de tokens, podr\xeda ser ",(0,a.kt)("inlineCode",{parentName:"p"},"Eres gerente de contrataci\xf3n. Clasifica buenos curr\xedculums:"),". Esto parece decente, quiz\xe1s un poco deficiente en gramaticalidad. Sin embargo, el token ",(0,a.kt)("inlineCode",{parentName:"p"},"buenos")," podr\xeda tener una proyecci\xf3n similar al token para ",(0,a.kt)("inlineCode",{parentName:"p"},"blanco"),", y podr\xeda existir un sesgo impl\xedcito en el prompt. Usando un m\xe9todo de proyecci\xf3n ligeramente diferente, podr\xedamos terminar con ",(0,a.kt)("inlineCode",{parentName:"p"},"Eres gerente de contrataci\xf3n. Clasifica curr\xedculums blancos:"),". Esto es obviamente bastante diferente y podr\xeda tener implicaciones significativas."),(0,a.kt)("p",null,"Al igual que al interpretar un prompt discreto regular, debemos ser extremadamente conscientes de los sesgos que pueden estar presentes en el prompt. Debemos ser especialmente cuidadosos con los soft prompts, ya que son m\xe1s dif\xedciles de interpretar."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);