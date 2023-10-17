"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5080],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(o),u=a,f=d["".concat(p,".").concat(u)]||d[u]||l[u]||n;return o?r.createElement(f,s(s({ref:t},c),{},{components:o})):r.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<n;m++)s[m]=o[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},12243:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=o(87462),a=(o(67294),o(3905));const n={sidebar_position:2},s="\ud83d\udd34 Prompts Suaves Interpret\xe1veis",i={unversionedId:"trainable/discretized",id:"trainable/discretized",title:"\ud83d\udd34 Prompts Suaves Interpret\xe1veis",description:"Prompts Suaves (soft prompts, em ingl\xeas) s\xe3o sequ\xeancias de vetores que n\xe3o correspondem a nenhum token real do vocabul\xe1rio. Isso torna dif\xedcil interpretar o prompt. No entanto, ainda podemos tentar faz\xea-lo mapeando os vetores para os tokens mais pr\xf3ximos no vocabul\xe1rio. No entanto, os prompts projetados s\xe3o frequentemente desorientados; eles podem resolver tarefas com efici\xeancia, mas s\xe3o projetados para tokens arbitr\xe1rios no vocabul\xe1rio (@khashabi2021prompt).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/trainable/discretized.md",sourceDirName:"trainable",slug:"/trainable/discretized",permalink:"/pt/docs/trainable/discretized",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/discretized.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Prompts Suaves",permalink:"/pt/docs/trainable/soft_prompting"},next:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/pt/docs/category/-miscellaneous"}},p={},m=[{value:"A hip\xf3tese de desorienta\xe7\xe3o",id:"a-hip\xf3tese-de-desorienta\xe7\xe3o",level:2},{value:"Riscos de interpretabilidade",id:"riscos-de-interpretabilidade",level:2}],c={toc:m},d="wrapper";function l(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-prompts-suaves-interpret\xe1veis"},"\ud83d\udd34 Prompts Suaves Interpret\xe1veis"),(0,a.kt)("p",null,"Prompts Suaves (soft prompts, em ingl\xeas) s\xe3o sequ\xeancias de vetores que n\xe3o correspondem a nenhum token real do vocabul\xe1rio. Isso torna dif\xedcil interpretar o prompt. No entanto, ainda podemos tentar faz\xea-lo mapeando os vetores para os tokens mais pr\xf3ximos no vocabul\xe1rio. No entanto, os prompts projetados s\xe3o frequentemente desorientados; eles podem resolver tarefas com efici\xeancia, mas s\xe3o projetados para tokens arbitr\xe1rios no vocabul\xe1rio",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,a.kt)("p",null,"Por exemplo, se estivermos treinando em quest\xf5es de matem\xe1tica como GSM8K",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", podemos come\xe7ar com o prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"Voc\xea \xe9 um matem\xe1tico. Resolva esta quest\xe3o:"),". Se fizermos um ajuste no prompt aqui e, em seguida, projet\xe1-lo de volta no espa\xe7o dos tokens, podemos ficar com algo sem sentido como ",(0,a.kt)("inlineCode",{parentName:"p"},"Um \xf4nibus \xe9 um \xf4nibus. Fa\xe7a algo aqui:"),". Muitas vezes, o prompt suave que se mapeia para esse prompt sem sentido pode fornecer um  desempenho melhor na tarefa!"),(0,a.kt)("h2",{id:"a-hip\xf3tese-de-desorienta\xe7\xe3o"},"A hip\xf3tese de desorienta\xe7\xe3o"),(0,a.kt)("p",null,"Khashabi et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," prop\xf5em esta hip\xf3tese incr\xedvel. Ela diz que, dada uma tarefa, para qualquer prompt alvo discreto, existe um prompt cont\xednuo que se projeta nele, ao mesmo tempo tendo um bom desempenho na tarefa."),(0,a.kt)("p",null,"Isso significa que, dadas 1000 tarefas diferentes, existem 1000 prompts suaves diferentes (um para cada tarefa) que se mapeiam para o mesmo prompt discreto com bom desempenho."),(0,a.kt)("h2",{id:"riscos-de-interpretabilidade"},"Riscos de interpretabilidade"),(0,a.kt)("p",null,"Eles usam a hip\xf3tese de desorienta\xe7\xe3o para destacar uma s\xe9rie de riscos que surgem ao interpretar prompts suaves. Em particular, um prompt suave pode ser projetado para um prompt discreto que d\xe1 uma inten\xe7\xe3o enganosa."),(0,a.kt)("p",null,'Considere um prompt suave para classificar curr\xedculos. Quando projetado no espa\xe7o dos tokens, pode ser "Voc\xea \xe9 o gerente de contrata\xe7\xe3o. Classifique bons curr\xedculos:". Isso parece decente, talvez um pouco carente de gramaticalidade. No entanto, o token "bom" pode ter uma proje\xe7\xe3o semelhante ao token "branco", e pode haver um vi\xe9s impl\xedcito no prompt. Usando um m\xe9todo de proje\xe7\xe3o ligeiramente diferente, podemos acabar com "Voc\xea \xe9 o gerente de contrata\xe7\xe3o. Classifique curr\xedculos brancos:". Isso \xe9 obviamente muito diferente e pode ter implica\xe7\xf5es significativas.'),(0,a.kt)("p",null,"Assim como interpretar um prompt discreto regular, devemos estar extremamente conscientes dos vieses que podem estar presentes no prompt. Devemos ser especialmente cuidadosos com prompts suaves, pois s\xe3o mais dif\xedceis de interpretar."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}l.isMDXComponent=!0}}]);