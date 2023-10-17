"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1758],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return o.createElement(l.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||n;return t?o.createElement(g,i(i({ref:a},m),{},{components:t})):o.createElement(g,i({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<n;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75389:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=t(87462),r=(t(67294),t(3905));const n=t.p+"assets/images/chain_of_thought_example-ad98abdca61405f66417751bdb3fba05.webp",i=t.p+"assets/images/prompted_palm-f378b4af8aff82ed8a0fdcd33e934b7b.webp",s={sidebar_position:3,locale:"pt-br",style:"chicago"},l="\ud83d\udfe2 Prompting com Cadeia de Pensamento",p={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 Prompting com Cadeia de Pensamento",description:"Prompting com Cadeia de Pensamento (CdP) (@wei2022chain) \xe9 um m\xe9todo de prompting recente, que encoraja o LLM (Grande Modelo de Linguagem) a explicar o seu racioc\xednio. A imagem abaixo (@wei2022chain) mostra um prompt few shot padr\xe3o (esquerda) comparado ao prompt com Cadeia de Pensamento (direita).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/Learn_Prompting/pt/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"pt-br",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/Learn_Prompting/pt/docs/category/\ufe0f-intermediate"},next:{title:"\ud83d\udfe2 Cadeia de Pensamento Zero Shot",permalink:"/Learn_Prompting/pt/docs/intermediate/zero_shot_cot"}},m={},d=[{value:"Exemplo",id:"exemplo",level:2},{value:"Incorreto",id:"incorreto",level:4},{value:"Correto",id:"correto",level:4},{value:"Resultados",id:"resultados",level:2},{value:"Limita\xe7\xf5es",id:"limita\xe7\xf5es",level:2},{value:"Observa\xe7\xf5es",id:"observa\xe7\xf5es",level:2}],c=(u="LazyLoadImage",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const g={toc:d},b="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(b,(0,o.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-prompting-com-cadeia-de-pensamento"},"\ud83d\udfe2 Prompting com Cadeia de Pensamento"),(0,r.kt)("p",null,"Prompting com Cadeia de Pensamento (CdP)",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \xe9 um m\xe9todo de ",(0,r.kt)("em",{parentName:"p"},"prompting")," recente, que encoraja o ",(0,r.kt)("em",{parentName:"p"},"LLM")," (Grande Modelo de Linguagem) a explicar o seu racioc\xednio. A imagem abaixo",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," mostra um ",(0,r.kt)("em",{parentName:"p"},"prompt few shot")," padr\xe3o (esquerda) comparado ao ",(0,r.kt)("em",{parentName:"p"},"prompt com Cadeia de Pensamento")," (direita)."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:n,style:{width:"750px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"Prompt comum x Cadeia de Pensamento (Wei et al.) [em ing\xeas]"),(0,r.kt)("p",null,"A principal ideia da Cadeia de Pensamento (CdP) \xe9 mostrar ao ",(0,r.kt)("em",{parentName:"p"},"LLM")," alguns exemplares ",(0,r.kt)("em",{parentName:"p"},"few shot")," em que o processo de racioc\xednio \xe9 explicado, fazendo com que o ",(0,r.kt)("em",{parentName:"p"},"LLM")," fa\xe7a o mesmo quando der uma resposta ao ",(0,r.kt)("em",{parentName:"p"},"prompt"),". A explica\xe7\xe3o do racioc\xednio frequentemente produz resultados mais apurados."),(0,r.kt)("h2",{id:"exemplo"},"Exemplo"),(0,r.kt)("p",null,"Aqui est\xe3o algumas demonstra\xe7\xf5es. A primeira mostra o GPT-3 (davinci-003) falhando ao resolver um problema simples. A segunda, por sua vez, mostra o GPT-3 (davinci-003)\nobtendo \xeaxito na resolu\xe7\xe3o do mesmo problema, com o uso da t\xe9cnica de Cadeia de Pensamento (CdP)."),(0,r.kt)("h4",{id:"incorreto"},"Incorreto"),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9ww6fDo28gMS4iLCJwcm9tcHQiOiJDb25zaWRlcmFuZG8gYXMgb3DDp8O1ZXMgYWJhaXhvLCBxdWFsIMOpIGEgZm9ybWEgbWFpcyByw6FwaWRhIGRlIGNoZWdhciBhbyB0cmFiYWxobz9cblxuT3DDp8OjbyAxOiBwZWd1ZSB1bSDDtG5pYnVzIGRlIDEwMDAgbWludXRvcywgZGVwb2lzIHVtIHRyZW0gZGUgbWVpYSBob3JhIGUsIGZpbmFsbWVudGUsIHVtIHBhc3NlaW8gZGUgYmljaWNsZXRhIGRlIDEwIG1pbnV0b3MuXG5cbk9ww6fDo28gMjogcGVndWUgdW0gw7RuaWJ1cyBkZSA4MDAgbWludXRvcywgZGVwb2lzIHVtYSBob3JhIGRlIHRyZW0gZSwgZmluYWxtZW50ZSwgdW0gcGFzc2VpbyBkZSBiaWNpY2xldGEgZGUgMzAgbWludXRvcy4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("h4",{id:"correto"},"Correto"),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkEgb3DDp8OjbyAxIGxldmFyw6EgMTAwMCszMCsxMCA9IDEwNDAgbWludXRvcy5cbkEgb3DDp8OjbyAyIGxldmFyw6EgODAwKzYwKzMwID0gODkwIG1pbnV0b3MuXG5Db21vIGEgb3DDp8OjbyAyIGxldmEgODkwIG1pbnV0b3MgZSBhIG9ww6fDo28gMSBsZXZhIDEuMDQwIG1pbnV0b3MsIGEgb3DDp8OjbyAyIMOpIG1haXMgcsOhcGlkYS4iLCJwcm9tcHQiOiJDb25zaWRlcmFuZG8gYXMgb3DDp8O1ZXMgYWJhaXhvLCBxdWFsIMOpIGEgZm9ybWEgbWFpcyByw6FwaWRhIGRlIGNoZWdhciBhbyB0cmFiYWxobz9cblxuT3DDp8OjbyAxOiBwZWd1ZSB1bSDDtG5pYnVzIGRlIDEwIG1pbnV0b3MsIGRlcG9pcyB1bSDDtG5pYnVzIGRlIDQwIG1pbnV0b3MgZSwgZmluYWxtZW50ZSwgdW0gdHJlbSBkZSAxMCBtaW51dG9zLlxuXG5PcMOnw6NvIDI6IHBlZ3VlIHVtIHRyZW0gZGUgOTAgbWludXRvcywgZGVwb2lzIHVtIHBhc3NlaW8gZGUgYmljaWNsZXRhIGRlIDQ1IG1pbnV0b3MgZSwgZmluYWxtZW50ZSwgdW0gw7RuaWJ1cyBkZSAxMCBtaW51dG9zLlxuXG5BIG9ww6fDo28gMSBsZXZhcsOhIDEwKzQwKzEwPTYwIG1pbnV0b3MuIEEgb3DDp8OjbyAyIGxldmFyw6EgOTArNDUrMTA9MTQ1IG1pbnV0b3MuXG5Db21vIGEgb3DDp8OjbyAxIGxldmEgNjAgbWludXRvcyBlIGEgb3DDp8OjbyAyIGxldmEgMTQ1IG1pbnV0b3MsIGEgb3DDp8OjbyAxIMOpIG1haXMgcsOhcGlkYS5cblxuQ29uc2lkZXJhbmRvIGFzIG9ww6fDtWVzIGFiYWl4bywgcXVhbCDDqSBhIGZvcm1hIG1haXMgcsOhcGlkYSBkZSBzZSBjaGVnYXIgYW8gdHJhYmFsaG8%2FXG5cbk9ww6fDo28gMTogcGVndWUgdW0gw7RuaWJ1cyBkZSAxMDAwIG1pbnV0b3MsIGRlcG9pcyB1bSB0cmVtIGRlIG1laWEgaG9yYSBlLCBmaW5hbG1lbnRlLCB1bSBwYXNzZWlvIGRlIGJpY2ljbGV0YSBkZSAxMCBtaW51dG9zLlxuXG5PcMOnw6NvIDI6IHBlZ3VlIHVtIMO0bmlidXMgZGUgODAwIG1pbnV0b3MsIGRlcG9pcyB1bWEgaG9yYSBkZSB0cmVtIGUsIGZpbmFsbWVudGUsIHVtIHBhc3NlaW8gZGUgYmljaWNsZXRhIGRlIDMwIG1pbnV0b3MuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("h2",{id:"resultados"},"Resultados"),(0,r.kt)("p",null,"A Cadeia de Pensamento (CdP) mostrou ser efetiva em melhorar os resultados em tarefas de aritm\xe9tica, senso comum e racic\xednio simb\xf3lico",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nEm particular, ",(0,r.kt)("em",{parentName:"p"},"prompted")," PaLM 540B",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," atinge 57% de precis\xe3o na resolu\xe7\xe3o dos problemas de matem\xe1tica da cole\xe7\xe3o de dados GSM8K",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," (Estado da Arte, na \xe9poca)."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(c,{src:i,style:{width:"300px"},mdxType:"LazyLoadImage"})),(0,r.kt)("div",{style:{textAlign:"center"}},"Compara\xe7\xe3o de modelos no benchmark GSM8K (Wei et al.) [em ingl\xeas]"),(0,r.kt)("h2",{id:"limita\xe7\xf5es"},"Limita\xe7\xf5es"),(0,r.kt)("p",null,'\xc9 importante ressaltar que, de acordo com Wei et al., "A t\xe9cnica de Cadeia de Pensamento (CdP) s\xf3 produz ganhos no desempenho quando usada em modelos de ~100B de par\xe2metros". Modelos menores escrevem cadeias de pensamentos il\xf3gicas, o que leva a uma piora na precis\xe3o quando comparado ao ',(0,r.kt)("em",{parentName:"p"},"prompt")," padr\xe3o. Comumente, as melhoras obtidas nos ",(0,r.kt)("em",{parentName:"p"},"prompts")," usando a t\xe9cnica de CdP s\xe3o proporcionais ao tamanho do modelo."),(0,r.kt)("h2",{id:"observa\xe7\xf5es"},"Observa\xe7\xf5es"),(0,r.kt)("p",null,"Nenhum modelo de linguagem foi ~ferido~ (leia-se: tunelado) no processo de escrita deste cap\xedtulo \ud83d\ude0a."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);