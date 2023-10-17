"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4316],{3905:(l,c,e)=>{e.d(c,{Zo:()=>g,kt:()=>n});var b=e(67294);function G(l,c,e){return c in l?Object.defineProperty(l,c,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[c]=e,l}function Z(l,c){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(l);c&&(b=b.filter((function(c){return Object.getOwnPropertyDescriptor(l,c).enumerable}))),e.push.apply(e,b)}return e}function I(l){for(var c=1;c<arguments.length;c++){var e=null!=arguments[c]?arguments[c]:{};c%2?Z(Object(e),!0).forEach((function(c){G(l,c,e[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):Z(Object(e)).forEach((function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(e,c))}))}return l}function a(l,c){if(null==l)return{};var e,b,G=function(l,c){if(null==l)return{};var e,b,G={},Z=Object.keys(l);for(b=0;b<Z.length;b++)e=Z[b],c.indexOf(e)>=0||(G[e]=l[e]);return G}(l,c);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(l);for(b=0;b<Z.length;b++)e=Z[b],c.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(l,e)&&(G[e]=l[e])}return G}var m=b.createContext({}),i=function(l){var c=b.useContext(m),e=c;return l&&(e="function"==typeof l?l(c):I(I({},c),l)),e},g=function(l){var c=i(l.components);return b.createElement(m.Provider,{value:c},l.children)},d="mdxType",o={inlineCode:"code",wrapper:function(l){var c=l.children;return b.createElement(b.Fragment,{},c)}},B=b.forwardRef((function(l,c){var e=l.components,G=l.mdxType,Z=l.originalType,m=l.parentName,g=a(l,["components","mdxType","originalType","parentName"]),d=i(e),B=G,n=d["".concat(m,".").concat(B)]||d[B]||o[B]||Z;return e?b.createElement(n,I(I({ref:c},g),{},{components:e})):b.createElement(n,I({ref:c},g))}));function n(l,c){var e=arguments,G=c&&c.mdxType;if("string"==typeof l||G){var Z=e.length,I=new Array(Z);I[0]=B;var a={};for(var m in c)hasOwnProperty.call(c,m)&&(a[m]=c[m]);a.originalType=l,a[d]="string"==typeof l?l:G,I[1]=a;for(var i=2;i<Z;i++)I[i]=e[i];return b.createElement.apply(null,I)}return b.createElement.apply(null,e)}B.displayName="MDXCreateElement"},68756:(l,c,e)=>{e.r(c),e.d(c,{assets:()=>m,contentTitle:()=>I,default:()=>o,frontMatter:()=>Z,metadata:()=>a,toc:()=>i});var b=e(87462),G=(e(67294),e(3905));const Z={sidebar_position:10},I="\ud83d\udfe2 Escribir un correo electr\xf3nico",a={unversionedId:"basic_applications/writing_emails",id:"basic_applications/writing_emails",title:"\ud83d\udfe2 Escribir un correo electr\xf3nico",description:"Escribir correos electr\xf3nicos puede ser una tarea que consume mucho tiempo, especialmente cuando necesitas leer primero un correo electr\xf3nico que recibiste. Esta secci\xf3n cubrir\xe1 casos de uso que van desde un simple correo electr\xf3nico para informarle a tu jefe que est\xe1s enfermo hoy, hasta correos electr\xf3nicos m\xe1s complejos para clientes potenciales sin relaci\xf3n previa.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basic_applications/writing_emails.md",sourceDirName:"basic_applications",slug:"/basic_applications/writing_emails",permalink:"/Learn_Prompting/es/docs/basic_applications/writing_emails",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/writing_emails.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Estructuraci\xf3n de Datos",permalink:"/Learn_Prompting/es/docs/basic_applications/table_generation"},next:{title:"\ud83d\udfe2 Blogs",permalink:"/Learn_Prompting/es/docs/basic_applications/blog_generation"}},m={},i=[{value:"Correo electr\xf3nico b\xe1sico de ausencia por enfermedad",id:"correo-electr\xf3nico-b\xe1sico-de-ausencia-por-enfermedad",level:2},{value:"Modificadores de estilo / Instrucciones",id:"modificadores-de-estilo--instrucciones",level:2},{value:"Respondiendo a un Correo Electr\xf3nico",id:"respondiendo-a-un-correo-electr\xf3nico",level:2},{value:"Correos electr\xf3nicos fr\xedos o de prospecci\xf3n",id:"correos-electr\xf3nicos-fr\xedos-o-de-prospecci\xf3n",level:2},{value:"Utilizando informaci\xf3n no estructurada",id:"utilizando-informaci\xf3n-no-estructurada",level:3},{value:"Conclusi\xf3n",id:"conclusi\xf3n",level:2},{value:"M\xe1s",id:"m\xe1s",level:2}],g={toc:i},d="wrapper";function o(l){let{components:c,...e}=l;return(0,G.kt)(d,(0,b.Z)({},g,e,{components:c,mdxType:"MDXLayout"}),(0,G.kt)("h1",{id:"-escribir-un-correo-electr\xf3nico"},"\ud83d\udfe2 Escribir un correo electr\xf3nico"),(0,G.kt)("p",null,"Escribir correos electr\xf3nicos puede ser una tarea que consume mucho tiempo, especialmente cuando necesitas leer primero un correo electr\xf3nico que recibiste. Esta secci\xf3n cubrir\xe1 casos de uso que van desde un simple correo electr\xf3nico para informarle a tu jefe que est\xe1s enfermo hoy, hasta correos electr\xf3nicos m\xe1s complejos para clientes potenciales sin relaci\xf3n previa."),(0,G.kt)("h2",{id:"correo-electr\xf3nico-b\xe1sico-de-ausencia-por-enfermedad"},"Correo electr\xf3nico b\xe1sico de ausencia por enfermedad"),(0,G.kt)("p",null,"Imagina que un d\xeda te despiertas enfermo/a y no puedes ir a trabajar (o simplemente no quieres \ud83d\ude08). Aqu\xed hay una gu\xeda simple que te ayuda a escribir un correo electr\xf3nico a tu jefe para informarle que est\xe1s enfermo/a."),(0,G.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkFzdW50bzogRnVlcmEgZGUgbGEgb2ZpY2luYSAtIEVuZmVybW9cblxuRXN0aW1hZG8gSm9obixcblxuTGUgZXNjcmlibyBwYXJhIGluZm9ybWFybGUgcXVlIGVzdGFyw6kgZnVlcmEgZGUgbGEgb2ZpY2luYSBob3kgZGViaWRvIGEgdW5hIGVuZmVybWVkYWQuIExhbWVudG8gY3VhbHF1aWVyIGluY29udmVuaWVudGUgcXVlIGVzdG8gcHVlZGEgY2F1c2FyLlxuXG5NZSBhc2VndXJhcsOpIGRlIG1hbnRlbmVybG8gaW5mb3JtYWRvIHNvYnJlIG1pIHByb2dyZXNvIHkgcmVncmVzYXLDqSBhIGxhIG9maWNpbmEgdGFuIHByb250byBjb21vIG1lIHNpZW50YSBtZWpvci5cblxuR3JhY2lhcyBwb3Igc3UgY29tcHJlbnNpw7NuXG5cbkF0ZW50YW1lbnRlLFxuTWFyaW8iLCJwcm9tcHQiOiJNaSBOb21icmU6IE1hcmlvXG5Ob21icmUgZGVsIEplZmU6IEpvaG5cblxuRXNjcmliZSB1biBjb3JyZW8gZWxlY3Ryw7NuaWNvIGEgbWkgamVmZSBkaWNpZW5kbyBxdWUgZXN0YXLDqSBmdWVyYSBkZSBsYSBvZmljaW5hIGhveSB5YSBxdWUgZXN0b3kgZW5mZXJtby4gIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("p",null,"Este correo electr\xf3nico funciona, pero es bastante aburrido. \xa1Vamos a darle un poco de sabor!"),(0,G.kt)("h2",{id:"modificadores-de-estilo--instrucciones"},"Modificadores de estilo / Instrucciones"),(0,G.kt)("p",null,'Es muy f\xe1cil modificar el estilo del correo electr\xf3nico. Por ejemplo, puedes pedirle al AI que sea "humor\xedstico" o darle la instrucci\xf3n de "Incluir una raz\xf3n divertida".'),(0,G.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJNaSBOb21icmU6IE1hcmlvXG5Ob21icmUgZGVsIEplZmU6IEpvaG5cblxuRXNjcmliZSB1biBjb3JyZW8gZWxlY3Ryw7NuaWNvIGRpdmVydGlkbyBwZXJvIHByb2Zlc2lvbmFsIGEgbWkgamVmZSBkaWNpZW5kbyBxdWUgZXN0YXLDqSBmdWVyYSBkZSBsYSBvZmljaW5hIGhveSB5YSBxdWUgZXN0b3kgZW5mZXJtby9hLiBcblPDqSBjb25jaXNvL2EgeSBncmFjaW9zby9hLiBJbmNsdXllIHVuYSByYXrDs24gZGl2ZXJ0aWRhOiIsIm91dHB1dCI6IkVzdGltYWRvIEpvaG4sXG5cbkxlIGVzY3JpYm8gcGFyYSBpbmZvcm1hcmxlIHF1ZSBlc3RhcsOpIGZ1ZXJhIGRlIGxhIG9maWNpbmEgaG95LiBTw6kgcXVlIHNlIHN1cG9uZSBxdWUgZGVibyB0cmFiYWphciwgcGVybyBubyBwdWRlIHJlc2lzdGlyIGVsIGNhbnRvIGRlIHNpcmVuYSBkZSBsYSB0aWVuZGEgbG9jYWwgZGUgZG9uYXMuIEVzdG95IHNlZ3Vyby9hIGRlIHF1ZSBsbyBlbnRlbmRlcsOhLlxuXG5Wb2x2ZXLDqSBhIGxhIG9maWNpbmEgbWHDsWFuYSB5IGNvbXBlbnNhcsOpIGVsIHRpZW1wby5cblxuR3JhY2lhcyxcbk1hcmlvIiwibWF4VG9rZW5zIjoyNTYsImJveFJvd3MiOjEwLCJ0ZW1wZXJhdHVyZSI6MC43LCJ0b3BQIjoxfQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("br",null),(0,G.kt)("p",null,"Aqu\xed hay otro ejemplo que es m\xe1s serio/profesional."),(0,G.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJNaSBOb21icmU6IE1hcmlvXG5Ob21icmUgZGVsIEplZmU6IEpvaG5cblxuRXNjcmliZSB1biBjb3JyZW8gZWxlY3Ryw7NuaWNvICoqc2VyaW8qKiwgcHJvZmVzaW9uYWwgYSBtaSBqZWZlIGRpY2llbmRvIHF1ZSBlc3RhcsOpIGZ1ZXJhIGRlIGxhIG9maWNpbmEgaG95IHlhIHF1ZSBlc3RveSBlbmZlcm1vL2EuIFxuU8OpIGNvbmNpc286Iiwib3V0cHV0IjoiQXN1bnRvOiBGdWVyYSBkZSBsYSBvZmljaW5hIC0gRW5mZXJtby9hXG5cbkVzdGltYWRvIEpvaG4sXG5cbkxlIGVzY3JpYm8gcGFyYSBpbmZvcm1hcmxlIHF1ZSBlc3RhcsOpIGZ1ZXJhIGRlIGxhIG9maWNpbmEgaG95IGRlYmlkbyBhIHVuYSBlbmZlcm1lZGFkLiBNZSBkaXNjdWxwbyBwb3IgY3VhbHF1aWVyIGluY29udmVuaWVudGUgcXVlIGVzdG8gcHVlZGEgY2F1c2FyLlxuXG5HcmFjaWFzIHBvciBzdSBjb21wcmVuc2nDs24uXG5cbkF0ZW50YW1lbnRlLFxuTWFyaW8iLCJtYXhUb2tlbnMiOjI1NiwiYm94Um93cyI6OCwidGVtcGVyYXR1cmUiOjAsInRvcFAiOjB9",style:{width:"100%",height:"400px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("br",null),(0,G.kt)("h2",{id:"respondiendo-a-un-correo-electr\xf3nico"},"Respondiendo a un Correo Electr\xf3nico"),(0,G.kt)("p",null,"Imagina que recibes un correo electr\xf3nico largo de tu jefe con mucha informaci\xf3n. Necesitas responder al correo electr\xf3nico, pero no tienes tiempo para leer todo el contenido. Puedes utilizar una herramienta de inteligencia artificial para pedirle que ",(0,G.kt)("inlineCode",{parentName:"p"},"Genere un resumen de esto y una lista de tareas a realizar"),"."),(0,G.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJFc3RpbWFkbyBNYXJpbyxcblxuRXNwZXJvIHF1ZSB0ZSBlbmN1ZW50cmVzIGJpZW4uIFRlIGVzY3JpYm8gcGFyYSBwcm9wb3JjaW9uYXJ0ZSBhbGd1bmFzIGFjdHVhbGl6YWNpb25lcyBzb2JyZSBudWVzdHJhIGVtcHJlc2EgeSBzb2xpY2l0YXIgdHUgYXl1ZGEgcGFyYSBhYm9yZGFyIHVuIHByb2JsZW1hIGNvbiBsYSBpbnRlcmZheiBkZSB1c3VhcmlvIChVSSkgZGVsIHNvZnR3YXJlIGVuIGVsIHF1ZSBoYXMgZXN0YWRvIHRyYWJhamFuZG8uXG5cbkNvbW8gc2FiZXMsIG51ZXN0cmEgZW1wcmVzYSBzZSBoYSBlc3RhZG8gZW5mb2NhbmRvIGVuIGJyaW5kYXIgdW5hIGV4cGVyaWVuY2lhIGFtaWdhYmxlIHBhcmEgbnVlc3Ryb3MgY2xpZW50ZXMsIHkgaGVtb3MgaWRlbnRpZmljYWRvIGFsZ3Vub3MgcHJvYmxlbWFzIGNvbiBsYSBpbnRlcmZheiBkZSB1c3VhcmlvIGRlbCBzb2Z0d2FyZS4gRXNwZWPDrWZpY2FtZW50ZSwgaGVtb3MgcmVjaWJpZG8gY29tZW50YXJpb3MgZGUgbnVlc3Ryb3MgdXN1YXJpb3MgZGUgcXVlIHRpZW5lbiBkaWZpY3VsdGFkZXMgcGFyYSBhY2NlZGVyIGEgY2llcnRhcyBmdW5jaW9uZXMsIHkgcXVlIGxhIGludGVyZmF6IGRlIHVzdWFyaW8gbm8gZXMgbG8gc3VmaWNpZW50ZW1lbnRlIGludHVpdGl2YS5cblxuTmVjZXNpdGFtb3Mgc3UgYXl1ZGEgcGFyYSBhYm9yZGFyIGVzdG9zIHByb2JsZW1hcyB5IHJlYWxpemFyIG1lam9yYXMgZW4gbGEgaW50ZXJmYXogZGUgdXN1YXJpbyBkZWwgc29mdHdhcmUuIEVzdG8gcHVlZGUgaW1wbGljYXIgcmVhbGl6YXIgY2FtYmlvcyBlbiBsYSBkaXNwb3NpY2nDs24sIGRpc2XDsW8gbyBmdW5jaW9uYWxpZGFkIGRlIGxhIGludGVyZmF6IGRlIHVzdWFyaW8uIENyZWVtb3MgcXVlIHN1IGV4cGVyaWVuY2lhIGVuIGRlc2Fycm9sbG8gZGUgc29mdHdhcmUgeSBzdSBmYW1pbGlhcmlkYWQgY29uIGVsIHNvZnR3YXJlIGxvIGNvbnZpZXJ0ZW4gZW4gbGEgcGVyc29uYSBpZGVhbCBwYXJhIGF5dWRhcm5vcyBjb24gZXN0YSB0YXJlYS5cblxuU2kgbmVjZXNpdGEgYWxnw7puIHJlY3Vyc28gYWRpY2lvbmFsIG8gc29wb3J0ZSBwYXJhIGNvbXBsZXRhciBlc3RhIHRhcmVhLCBubyBkdWRlIGVuIGhhY8Opcm1lbG8gc2FiZXIuIEFkZW3DoXMsIGFncmFkZWNlcsOtYSBzaSBwdWRpZXJhIHByb3BvcmNpb25hcm1lIHVuIHBsYXpvIGVzdGltYWRvIHBhcmEgY3VhbmRvIGVzcGVyYSBxdWUgc2UgY29tcGxldGVuIGVzdGFzIG1vZGlmaWNhY2lvbmVzLlxuXG5TaSB0aWVuZSBhbGd1bmEgcHJlZ3VudGEgbyBuZWNlc2l0YSBtw6FzIGFjbGFyYWNpb25lcywgbm8gZHVkZSBlbiBwb25lcnNlIGVuIGNvbnRhY3RvIGNvbm1pZ28uXG5cbkdyYWNpYXMgcG9yIHN1IGFyZHVvIHRyYWJham8geSBkZWRpY2FjacOzbiBhIG51ZXN0cmEgZW1wcmVzYS4gRXNwZXJvIHJlY2liaXIgcHJvbnRvIG5vdGljaWFzIHN1eWFzLlxuXG5TYWx1ZG9zIGNvcmRpYWxlc1xuSm9oblxuXG5HZW5lcmFyIHVuIHJlc3VtZW4gZGUgZXN0byB5IHVuYSBsaXN0YSBkZSB0YXJlYXMgcGVuZGllbnRlcy4iLCJvdXRwdXQiOiJSZXN1bWVuOiBKb2huIGVzdMOhIHNvbGljaXRhbmRvIGxhIGF5dWRhIGRlIE1hcmlvIHBhcmEgYWJvcmRhciBwcm9ibGVtYXMgZGUgaW50ZXJmYXogZGUgdXN1YXJpbyBjb24gZWwgc29mdHdhcmUgZW4gZWwgcXVlIE1hcmlvIGhhIGVzdGFkbyB0cmFiYWphbmRvLiBMb3MgcHJvYmxlbWFzIGludm9sdWNyYW4gZGlmaWN1bHRhZGVzIHBhcmEgYWNjZWRlciBhIGNpZXJ0YXMgZnVuY2lvbmVzIHkgbGEgaW50ZXJmYXogZGUgdXN1YXJpbyBubyBlcyBsbyBzdWZpY2llbnRlbWVudGUgaW50dWl0aXZhLiBMYSBleHBlcmllbmNpYSBkZSBNYXJpbyBlbiBlbCBkZXNhcnJvbGxvIGRlIHNvZnR3YXJlIHkgc3UgZmFtaWxpYXJpZGFkIGNvbiBlbCBzb2Z0d2FyZSBsbyBjb252aWVydGVuIGVuIGxhIHBlcnNvbmEgaWRlYWwgcGFyYSBheXVkYXIgY29uIGVzdGEgdGFyZWEuXG5cbkVsZW1lbnRvcyBkZSBBY2Npw7NuOlxuLSBSZWFsaXphciBjYW1iaW9zIGVuIGVsIGRpc2XDsW8sIGxhIGRpc3Bvc2ljacOzbiBvIGxhIGZ1bmNpb25hbGlkYWQgZGUgbGEgaW50ZXJmYXogZGUgdXN1YXJpbyAoVUkpLlxuLSBTb2xpY2l0YXIgcmVjdXJzb3MgbyBhcG95byBhZGljaW9uYWwgc2kgZXMgbmVjZXNhcmlvLlxuLSBQcm9wb3JjaW9uYXIgdW5hIGzDrW5lYSBkZSB0aWVtcG8gZXN0aW1hZGEgcGFyYSBsYSBmaW5hbGl6YWNpw7NuIGRlIGxhcyBtb2RpZmljYWNpb25lcy4iLCJtYXhUb2tlbnMiOjI1NiwiYm94Um93cyI6MTgsInRlbXBlcmF0dXJlIjowLCJ0b3BQIjowfQ%3D%3D",style:{width:"100%",height:"900px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("br",null),"Luego puedes usar este resumen para escribir un correo electr\xf3nico de respuesta.",(0,G.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJSZXN1bWVuOiBKb2huIGVzdMOhIHNvbGljaXRhbmRvIGxhIGF5dWRhIGRlIE1hcmlvIHBhcmEgYWJvcmRhciBsb3MgcHJvYmxlbWFzIGRlIGxhIGludGVyZmF6IGRlIHVzdWFyaW8gZGVsIHNvZnR3YXJlIGVuIGVsIHF1ZSBNYXJpbyBoYSBlc3RhZG8gdHJhYmFqYW5kby4gTG9zIHByb2JsZW1hcyBpbXBsaWNhbiBkaWZpY3VsdGFkIHBhcmEgYWNjZWRlciBhIGNpZXJ0YXMgY2FyYWN0ZXLDrXN0aWNhcyB5IGxhIGludGVyZmF6IGRlIHVzdWFyaW8gbm8gZXMgbG8gc3VmaWNpZW50ZW1lbnRlIGludHVpdGl2YS4gTGEgZXhwZXJpZW5jaWEgZGUgTWFyaW8gZW4gZGVzYXJyb2xsbyBkZSBzb2Z0d2FyZSB5IHN1IGZhbWlsaWFyaWRhZCBjb24gZWwgc29mdHdhcmUgbG8gY29udmllcnRlbiBlbiBsYSBwZXJzb25hIGlkZWFsIHBhcmEgYXl1ZGFyIGVuIGVzdGEgdGFyZWEuXG5cbkVsZW1lbnRvcyBkZSBBY2Npw7NuOlxuLSBSZWFsaXphciBjYW1iaW9zIGVuIGxhIGVzdHJ1Y3R1cmEsIGRpc2XDsW8gbyBmdW5jaW9uYWxpZGFkIGRlIGxhIGludGVyZmF6IGRlIHVzdWFyaW8gKFVJKVxuLSBTb2xpY2l0YXIgcmVjdXJzb3MgbyBhcG95byBhZGljaW9uYWwgc2kgZXMgbmVjZXNhcmlvLlxuLSBQcm9wb3JjaW9uZSB1bmEgZXN0aW1hY2nDs24gZGUgdGllbXBvIHBhcmEgbGEgZmluYWxpemFjacOzbiBkZSBsYXMgbW9kaWZpY2FjaW9uZXMuXG5cbkVzY3JpYmlyIHVuIGNvcnJlbyBlbGVjdHLDs25pY28gZGUgcmVzcHVlc3RhIGRlIE1hcmlvIHV0aWxpemFuZG8gZWwgcmVzdW1lbiBkZWwgY29ycmVvIGVsZWN0csOzbmljbyBhbnRlcmlvcjoiLCJvdXRwdXQiOiJFc3RpbWFkbyBKb2huLFxuXG5HcmFjaWFzIHBvciBjb211bmljYXJzZSBjb25taWdvIHNvYnJlIGxvcyBwcm9ibGVtYXMgZGUgaW50ZXJmYXogZGUgdXN1YXJpbyBlbiBlbCBzb2Z0d2FyZSBlbiBlbCBxdWUgaGUgZXN0YWRvIHRyYWJhamFuZG8uIEVudGllbmRvIGxhIGltcG9ydGFuY2lhIGRlIGFzZWd1cmFyc2UgZGUgcXVlIGxhIGludGVyZmF6IGRlIHVzdWFyaW8gc2VhIGludHVpdGl2YSB5IGbDoWNpbCBkZSB1c2FyLCB5IGVzdG95IGZlbGl6IGRlIGF5dWRhci5cblxuQ29tZW56YXLDqSBhIHJlYWxpemFyIGNhbWJpb3MgZW4gbGEgZGlzcG9zaWNpw7NuLCBkaXNlw7FvIHkgZnVuY2lvbmFsaWRhZCBkZSBsYSBpbnRlcmZheiBkZSB1c3VhcmlvIHBhcmEgYWJvcmRhciBsb3MgcHJvYmxlbWFzIHF1ZSBoYXMgbWVuY2lvbmFkby4gU2kgbmVjZXNpdG8gcmVjdXJzb3MgbyBzb3BvcnRlIGFkaWNpb25hbCwgdGUgbG8gaGFyw6kgc2FiZXIuIFRhbWJpw6luIHByb3BvcmNpb25hcsOpIHVuYSBlc3RpbWFjacOzbiBkZWwgdGllbXBvIHBhcmEgY29tcGxldGFyIGxhcyBtb2RpZmljYWNpb25lcy5cblxuUG9yIGZhdm9yLCBow6FnYW5tZSBzYWJlciBzaSB0aWVuZW4gYWxndW5hIHByZWd1bnRhIG8gaW5xdWlldHVkLlxuXG5BdGVudGFtZW50ZSxcbk1hcmlvIiwibWF4VG9rZW5zIjoyNTYsImJveFJvd3MiOjE4LCJ0ZW1wZXJhdHVyZSI6MCwidG9wUCI6MH0%3D",style:{width:"100%",height:"900px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("br",null),"Nota que a menudo puedes combinar estos dos pasos en uno solo. Puedes pedirle al AI que genere directamente un correo electr\xf3nico de respuesta a partir del correo electr\xf3nico que recibiste.",(0,G.kt)("h2",{id:"correos-electr\xf3nicos-fr\xedos-o-de-prospecci\xf3n"},"Correos electr\xf3nicos fr\xedos o de prospecci\xf3n"),(0,G.kt)("p",null,"Los correos electr\xf3nicos fr\xedos son correos electr\xf3nicos enviados a personas que no conoces. Es dif\xedcil obtener una respuesta de los correos electr\xf3nicos fr\xedos, por lo que puede ser \xfatil enviar muchos correos electr\xf3nicos personalizados. Veamos c\xf3mo hacerlo con GPT-3",(0,G.kt)("sup",{parentName:"p",id:"fnref-1"},(0,G.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,G.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJOb21icmUgZGUgQ29tcGHDscOtYTogQmFyayBJbmNcbk1pIE5vbWJyZTogTWlrZVxuRXNjcmliYSB1biBjb3JyZW8gZWxlY3Ryw7NuaWNvIGRlIHByb3NwZWNjacOzbiBmcsOtby4iLCJvdXRwdXQiOiJFc3RpbWFkbyBKb2huLFxuXG5Fc3RveSBlc2NyaWJpZW5kbyBwYXJhIGluZm9ybWFybGVzIHF1ZSBlc3RhcsOpIGZ1ZXJhIGRlIGxhIG9maWNpbmEgaG95LiBTw6kgcXVlIHNlIHN1cG9uZSBxdWUgZGVibyBlc3RhciB0cmFiYWphbmRvLCBwZXJvIHNpbXBsZW1lbnRlIG5vIHB1ZGUgcmVzaXN0aXIgbGEgdGVudGFjacOzbiBkZSBsYSBsbGFtYWRhIGRlIGxhIHNpcmVuYSBkZSBsYSB0aWVuZGEgbG9jYWwgZGUgZG9uYXMuIEVzdG95IHNlZ3VybyBkZSBxdWUgbG8gZW50aWVuZGVuLlxuXG5Fc3RhcsOpIGRlIHJlZ3Jlc28gZW4gbGEgb2ZpY2luYSBtYcOxYW5hIHkgY29tcGVuc2Fyw6kgZWwgdGllbXBvIHBlcmRpZG8uXG5cbkdyYWNpYXMsXG5aYWNoIiwibWF4VG9rZW5zIjoyNTYsImJveFJvd3MiOjEwLCJ0ZW1wZXJhdHVyZSI6MCwidG9wUCI6MH0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("p",null,"Esto es interesante, pero podemos hacerlo mejor. A\xf1adamos m\xe1s informaci\xf3n a la indicaci\xf3n."),(0,G.kt)("h3",{id:"utilizando-informaci\xf3n-no-estructurada"},"Utilizando informaci\xf3n no estructurada"),(0,G.kt)("p",null,"Imag\xednese que tiene el perfil de LinkedIn de la persona a la que le va a enviar el correo electr\xf3nico. Puede agregar esa informaci\xf3n a la plantilla para hacer el correo electr\xf3nico m\xe1s personalizado. Usaremos el ",(0,G.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/snpranav/"},"perfil de LinkedIn del fundador de Strive")," como ejemplo. Copiaremos informaci\xf3n de su perfil y la agregaremos a la plantilla."),(0,G.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMiLCJwcm9tcHQiOiJQcmFuYXYgU2hpa2FycHVyICAxc3QgZGVncmVlIGNvbm5lY3Rpb24xc3RcbkRldmVsb3BlciBBZHZvY2F0ZS4gUHJvYmxlbSBTb2x2ZXIuIFByZXZpb3VzbHk6IENvLWZvdW5kZXIgU3RyaXZlLCBJbnRlbCBJU0VGIEFsdW1cblxuRXhwZXJpZW5jZUV4cGVyaWVuY2VcblRoYWxlcyBDbG91ZCBTZWN1cml0eSBsb2dvXG5EZXZlbG9wZXIgQWR2b2NhdGVEZXZlbG9wZXIgQWR2b2NhdGVcblRoYWxlcyBDbG91ZCBTZWN1cml0eVRoYWxlcyBDbG91ZCBTZWN1cml0eVxuQXByIDIwMjIgLSBQcmVzZW50IMK3IDEgeXJBcHIgMjAyMiAtIFByZXNlbnQgwrcgMSB5clxuLSBFeGVjdXRlZCBnby10by1tYXJrZXQgYW5kIGJvb3N0ZWQgZGV2ZWxvcGVyIGVuZ2FnZW1lbnQgZm9yIFRoYWxlc%2BKAmXMgbmV3IGRhdGEgZW5jcnlwdGlvbiBwcm9kdWN0IGxhdW5jaC5cbi0gU3BlYXJoZWFkZWQgZGV2ZWxvcGVyIGFkb3B0aW9uIG9mIHByb2R1Y3QgYXQgdGhlIFJTQSBjb25mZXJlbmNlIDIwMjIgYW5kIEt1YmVDb24gMjAyMi5cbi0gUHJlc2VudGVkIGEgdGFsayBhdCBIYXNoaUNvcnDigJlzIGFubnVhbCBjb25mZXJlbmNlIC0gSGFzaGlDb25mIDIwMjIgaW4gTEEgLSBhYm91dCDigJxTZWN1cmluZyBBbnkgRGF0YSBTb3VyY2XigJ0uLSBFeGVjdXRlZCBnby10by1tYXJrZXQgYW5kIGJvb3N0ZWQgZGV2ZWxvcGVyIGVuZ2FnZW1lbnQgZm9yIFRoYWxlc%2BKAmXMgbmV3IGRhdGEgZW5jcnlwdGlvbiBwcm9kdWN0IGxhdW5jaC4gLSBTcGVhcmhlYWRlZCBkZXZlbG9wZXIgYWRvcHRpb24gb2YgcHJvZHVjdCBhdCB0aGUgUlNBIGNvbmZlcmVuY2UgMjAyMiBhbmQgS3ViZUNvbiAyMDIyLiAtIFByZXNlbnRlZCBhIHRhbGsgYXQgSGFzaGlDb3Jw4oCZcyBhbm51YWwgY29uZmVyZW5jZSAtIEhhc2hpQ29uZiAyMDIyIGluIExBIC0gYWJvdXQg4oCcU2VjdXJpbmcgQW55IERhdGEgU291cmNl4oCdLuKApnNlZSBtb3JlXG5Ta2lsbHM6IERhdGEgRW5jcnlwdGlvbiBTdGFuZGFyZCAoREVTKSDCtyBDcnlwdG9ncmFwaHkgwrcgQ3liZXJzZWN1cml0eSDCtyBDb250ZW50IENyZWF0aW9uIMK3IEF6dXJlIEt1YmVybmV0ZXMgU2VydmljZSAoQUtTKSDCtyBHb29nbGUgS3ViZXJuZXRlcyBFbmdpbmUgKEdLRSlTa2lsbHM6IERhdGEgRW5jcnlwdGlvbiBTdGFuZGFyZCAoREVTKSDCtyBDcnlwdG9ncmFwaHkgwrcgQ3liZXJzZWN1cml0eSDCtyBDb250ZW50IENyZWF0aW9uIMK3IEF6dXJlIEt1YmVybmV0ZXMgU2VydmljZSAoQUtTKSDCtyBHb29nbGUgS3ViZXJuZXRlcyBFbmdpbmUgKEdLRSlcblN0YXJ0dXAgU2hlbGwgbG9nb1xuRGlyZWN0b3Igb2YgRm91bmRlciBSZXNvdXJjZXNEaXJlY3RvciBvZiBGb3VuZGVyIFJlc291cmNlc1xuU3RhcnR1cCBTaGVsbFN0YXJ0dXAgU2hlbGxcbkZlYiAyMDIyIC0gUHJlc2VudCDCtyAxIHlyIDIgbW9zRmViIDIwMjIgLSBQcmVzZW50IMK3IDEgeXIgMiBtb3NcbkNvbGxlZ2UgUGFyaywgTWFyeWxhbmQsIFVuaXRlZCBTdGF0ZXNDb2xsZWdlIFBhcmssIE1hcnlsYW5kLCBVbml0ZWQgU3RhdGVzXG4tIENsb3NlZCBwYXJ0bmVyc2hpcHMgb2YgZm91bmRlciByZXNvdXJjZXMgd2l0aCB2YXJpb3VzIHRlY2ggY29tcGFuaWVzIGxpa2UgVmVyY2VsLCBNb25nb0RCLCBldGMuXG4tIFNvdXJjZWQgb3ZlciAkNTAsMDAwIG9mIGNyZWRpdHMgYW5kIHJlc291cmNlcyBmb3IgZm91bmRlcnMgYXQgU3RhcnR1cCBTaGVsbCBpbiB0aGUgc3BhbiBvZiAzIG1vbnRocy4tIENsb3NlZCBwYXJ0bmVyc2hpcHMgb2YgZm91bmRlciByZXNvdXJjZXMgd2l0aCB2YXJpb3VzIHRlY2ggY29tcGFuaWVzIGxpa2UgVmVyY2VsLCBNb25nb0RCLCBldGMuIC0gU291cmNlZCBvdmVyICQ1MCwwMDAgb2YgY3JlZGl0cyBhbmQgcmVzb3VyY2VzIGZvciBmb3VuZGVycyBhdCBTdGFydHVwIFNoZWxsIGluIHRoZSBzcGFuIG9mIDMgbW9udGhzLlxuU2tpbGxzOiBTdHJhdGVnaWMgUGFydG5lcnNoaXBzU2tpbGxzOiBTdHJhdGVnaWMgUGFydG5lcnNoaXBzXG5TdHJpdmUgTmV0d29yayBsb2dvXG5Dby1Gb3VuZGVyQ28tRm91bmRlclxuU3RyaXZlU3RyaXZlXG5EZWMgMjAyMCAtIE5vdiAyMDIxIMK3IDEgeXJEZWMgMjAyMCAtIE5vdiAyMDIxIMK3IDEgeXJcbi0gRm91bmRlZCBJbmRpYSdzIGZpcnN0IGNvaG9ydC1iYXNlZCBsZWFybmluZyBwbGF0Zm9ybSBmb3IgcGFzc2lvbi1yZWxhdGVkIGNvdXJzZXMuIEhhZCA3SysgbW9udGhseSBhY3RpdmUgdXNlcnMuXG4tIEJ1aWx0IHRoZSBsZWFybmluZyBwbGF0Zm9ybSBmcm9tIHRoZSBncm91bmQgdXAgYW5kIG1hbmFnZWQgdHJhZmZpYyB0byB0aGUgd2Vic2l0ZSBhdCBzY2FsZSBhbmQgb3ZlcnNhdyB0aGUgc2FsZXMgYW5kIG1hcmtldGluZyBleGVjdXRpb24uXG4tIE5lZ290aWF0ZWQgd2l0aCAxMDBYLlZDIGFuZCBQZW9wbGUgR3JvdXAgdG8gcmFpc2UgJDUwSyBzZWVkIGZ1bmRpbmcgZm9yIFN0cml2ZS4tIEZvdW5kZWQgSW5kaWEncyBmaXJzdCBjb2hvcnQtYmFzZWQgbGVhcm5pbmcgcGxhdGZvcm0gZm9yIHBhc3Npb24tcmVsYXRlZCBjb3Vyc2VzLiBIYWQgN0srIG1vbnRobHkgYWN0aXZlIHVzZXJzLiAtIEJ1aWx0IHRoZSBsZWFybmluZyBwbGF0Zm9ybSBmcm9tIHRoZSBncm91bmQgdXAgYW5kIG1hbmFnZWQgdHJhZmZpYyB0byB0aGUgd2Vic2l0ZSBhdCBzY2FsZSBhbmQgb3ZlcnNhdyB0aGUgc2FsZXMgYW5kIG1hcmtldGluZyBleGVjdXRpb24uIC0gTmVnb3RpYXRlZCB3aXRoIDEwMFguVkMgYW5kIFBlb3BsZSBHcm91cCB0byByYWlzZSAkNTBLIHNlZWQgZnVuZGluZyBmb3IgU3RyaXZlLuKApnNlZSBtb3JlXG5Ta2lsbHM6IEdvIChQcm9ncmFtbWluZyBMYW5ndWFnZSkgwrcgUHl0aG9uIChQcm9ncmFtbWluZyBMYW5ndWFnZSkgwrcgUHJvZHVjdCBNYW5hZ2VtZW50IMK3IFByb2R1Y3QgTWFya2V0aW5nIMK3IE5leHQuanMgwrcgQW1hem9uIEVLU1xuXG5FZHVjYXRpb25FZHVjYXRpb25cblVuaXZlcnNpdHkgb2YgTWFyeWxhbmQgbG9nb1xuVW5pdmVyc2l0eSBvZiBNYXJ5bGFuZFVuaXZlcnNpdHkgb2YgTWFyeWxhbmRcblVuZGVyZ3JhZHVhdGUsIE1hdGhlbWF0aWNzIGFuZCBDb21wdXRlciBTY2llbmNlVW5kZXJncmFkdWF0ZSwgTWF0aGVtYXRpY3MgYW5kIENvbXB1dGVyIFNjaWVuY2VcbkF1ZyAyMDE5IC0gTWF5IDIwMjNBdWcgMjAxOSAtIE1heSAyMDIzXG5BY3Rpdml0aWVzIGFuZCBzb2NpZXRpZXM6IERpcmVjdG9yIG9mIEZvdW5kZXIgUmVzb3VyY2VzIGF0IFN0YXJ0dXAgU2hlbGxBY3Rpdml0aWVzIGFuZCBzb2NpZXRpZXM6IERpcmVjdG9yIG9mIEZvdW5kZXIgUmVzb3VyY2VzIGF0IFN0YXJ0dXAgU2hlbGxcbkV4cGxvcmluZyB0aGUgYmVhdXR5IG9mIG1hdGhlbWF0aWNzIHdpdGggdGhlIHByYWN0aWNhbGl0eSBvZiBjb21wdXRlciBzY2llbmNlXG5cbldyaXRlIGEgY29sZCBvdXRyZWFjaCBlbWFpbCB0byB0aGlzIGZvdW5kZXIsIHBpdGNoaW5nIGhpbSBvdXIgcHJvZHVjdCwgTmlnaHRmYWxsLCB3aGljaCBpcyBhIG5lby1DUk0uIE15IG5hbWUgaXMgTWF4LiBNYWtlIHRoZSBlbWFpbCBmb3JtYWwsIHlldCBhcHByb2FjaGFibGUuIE1lbnRpb24gcmVsZXZhbnQgZGV0YWlscyBmcm9tIGhpcyBMaW5rZWRJbiBpbmZvcm1hdGlvbiBhYm92ZSB0byBoZWxwIHBpdGNoIHRoZSBwcm9kdWN0LlByYW5hdiBTaGlrYXJwdXIgIDFzdCBkZWdyZWUgY29ubmVjdGlvbjFzdFxuRGV2ZWxvcGVyIEFkdm9jYXRlLiBQcm9ibGVtIFNvbHZlci4gUHJldmlvdXNseTogQ28tZm91bmRlciBTdHJpdmUsIEludGVsIElTRUYgQWx1bVxuXG5FeHBlcmllbmNlRXhwZXJpZW5jZVxuVGhhbGVzIENsb3VkIFNlY3VyaXR5IGxvZ29cbkRldmVsb3BlciBBZHZvY2F0ZURldmVsb3BlciBBZHZvY2F0ZVxuVGhhbGVzIENsb3VkIFNlY3VyaXR5VGhhbGVzIENsb3VkIFNlY3VyaXR5XG5BcHIgMjAyMiAtIFByZXNlbnQgwrcgMSB5ckFwciAyMDIyIC0gUHJlc2VudCDCtyAxIHlyXG4tIEV4ZWN1dGVkIGdvLXRvLW1hcmtldCBhbmQgYm9vc3RlZCBkZXZlbG9wZXIgZW5nYWdlbWVudCBmb3IgVGhhbGVz4oCZcyBuZXcgZGF0YSBlbmNyeXB0aW9uIHByb2R1Y3QgbGF1bmNoLlxuLSBTcGVhcmhlYWRlZCBkZXZlbG9wZXIgYWRvcHRpb24gb2YgcHJvZHVjdCBhdCB0aGUgUlNBIGNvbmZlcmVuY2UgMjAyMiBhbmQgS3ViZUNvbiAyMDIyLlxuLSBQcmVzZW50ZWQgYSB0YWxrIGF0IEhhc2hpQ29ycOKAmXMgYW5udWFsIGNvbmZlcmVuY2UgLSBIYXNoaUNvbmYgMjAyMiBpbiBMQSAtIGFib3V0IOKAnFNlY3VyaW5nIEFueSBEYXRhIFNvdXJjZeKAnS4tIEV4ZWN1dGVkIGdvLXRvLW1hcmtldCBhbmQgYm9vc3RlZCBkZXZlbG9wZXIgZW5nYWdlbWVudCBmb3IgVGhhbGVz4oCZcyBuZXcgZGF0YSBlbmNyeXB0aW9uIHByb2R1Y3QgbGF1bmNoLiAtIFNwZWFyaGVhZGVkIGRldmVsb3BlciBhZG9wdGlvbiBvZiBwcm9kdWN0IGF0IHRoZSBSU0EgY29uZmVyZW5jZSAyMDIyIGFuZCBLdWJlQ29uIDIwMjIuIC0gUHJlc2VudGVkIGEgdGFsayBhdCBIYXNoaUNvcnDigJlzIGFubnVhbCBjb25mZXJlbmNlIC0gSGFzaGlDb25mIDIwMjIgaW4gTEEgLSBhYm91dCDigJxTZWN1cmluZyBBbnkgRGF0YSBTb3VyY2XigJ0u4oCmc2VlIG1vcmVcblNraWxsczogRGF0YSBFbmNyeXB0aW9uIFN0YW5kYXJkIChERVMpIMK3IENyeXB0b2dyYXBoeSDCtyBDeWJlcnNlY3VyaXR5IMK3IENvbnRlbnQgQ3JlYXRpb24gwrcgQXp1cmUgS3ViZXJuZXRlcyBTZXJ2aWNlIChBS1MpIMK3IEdvb2dsZSBLdWJlcm5ldGVzIEVuZ2luZSAoR0tFKVNraWxsczogRGF0YSBFbmNyeXB0aW9uIFN0YW5kYXJkIChERVMpIMK3IENyeXB0b2dyYXBoeSDCtyBDeWJlcnNlY3VyaXR5IMK3IENvbnRlbnQgQ3JlYXRpb24gwrcgQXp1cmUgS3ViZXJuZXRlcyBTZXJ2aWNlIChBS1MpIMK3IEdvb2dsZSBLdWJlcm5ldGVzIEVuZ2luZSAoR0tFKVxuU3RhcnR1cCBTaGVsbCBsb2dvXG5EaXJlY3RvciBvZiBGb3VuZGVyIFJlc291cmNlc0RpcmVjdG9yIG9mIEZvdW5kZXIgUmVzb3VyY2VzXG5TdGFydHVwIFNoZWxsU3RhcnR1cCBTaGVsbFxuRmViIDIwMjIgLSBQcmVzZW50IMK3IDEgeXIgMiBtb3NGZWIgMjAyMiAtIFByZXNlbnQgwrcgMSB5ciAyIG1vc1xuQ29sbGVnZSBQYXJrLCBNYXJ5bGFuZCwgVW5pdGVkIFN0YXRlc0NvbGxlZ2UgUGFyaywgTWFyeWxhbmQsIFVuaXRlZCBTdGF0ZXNcbi0gQ2xvc2VkIHBhcnRuZXJzaGlwcyBvZiBmb3VuZGVyIHJlc291cmNlcyB3aXRoIHZhcmlvdXMgdGVjaCBjb21wYW5pZXMgbGlrZSBWZXJjZWwsIE1vbmdvREIsIGV0Yy5cbi0gU291cmNlZCBvdmVyICQ1MCwwMDAgb2YgY3JlZGl0cyBhbmQgcmVzb3VyY2VzIGZvciBmb3VuZGVycyBhdCBTdGFydHVwIFNoZWxsIGluIHRoZSBzcGFuIG9mIDMgbW9udGhzLi0gQ2xvc2VkIHBhcnRuZXJzaGlwcyBvZiBmb3VuZGVyIHJlc291cmNlcyB3aXRoIHZhcmlvdXMgdGVjaCBjb21wYW5pZXMgbGlrZSBWZXJjZWwsIE1vbmdvREIsIGV0Yy4gLSBTb3VyY2VkIG92ZXIgJDUwLDAwMCBvZiBjcmVkaXRzIGFuZCByZXNvdXJjZXMgZm9yIGZvdW5kZXJzIGF0IFN0YXJ0dXAgU2hlbGwgaW4gdGhlIHNwYW4gb2YgMyBtb250aHMuXG5Ta2lsbHM6IFN0cmF0ZWdpYyBQYXJ0bmVyc2hpcHNTa2lsbHM6IFN0cmF0ZWdpYyBQYXJ0bmVyc2hpcHNcblN0cml2ZSBOZXR3b3JrIGxvZ29cbkNvLUZvdW5kZXJDby1Gb3VuZGVyXG5TdHJpdmVTdHJpdmVcbkRlYyAyMDIwIC0gTm92IDIwMjEgwrcgMSB5ckRlYyAyMDIwIC0gTm92IDIwMjEgwrcgMSB5clxuLSBGb3VuZGVkIEluZGlhJ3MgZmlyc3QgY29ob3J0LWJhc2VkIGxlYXJuaW5nIHBsYXRmb3JtIGZvciBwYXNzaW9uLXJlbGF0ZWQgY291cnNlcy4gSGFkIDdLKyBtb250aGx5IGFjdGl2ZSB1c2Vycy5cbi0gQnVpbHQgdGhlIGxlYXJuaW5nIHBsYXRmb3JtIGZyb20gdGhlIGdyb3VuZCB1cCBhbmQgbWFuYWdlZCB0cmFmZmljIHRvIHRoZSB3ZWJzaXRlIGF0IHNjYWxlIGFuZCBvdmVyc2F3IHRoZSBzYWxlcyBhbmQgbWFya2V0aW5nIGV4ZWN1dGlvbi5cbi0gTmVnb3RpYXRlZCB3aXRoIDEwMFguVkMgYW5kIFBlb3BsZSBHcm91cCB0byByYWlzZSAkNTBLIHNlZWQgZnVuZGluZyBmb3IgU3RyaXZlLi0gRm91bmRlZCBJbmRpYSdzIGZpcnN0IGNvaG9ydC1iYXNlZCBsZWFybmluZyBwbGF0Zm9ybSBmb3IgcGFzc2lvbi1yZWxhdGVkIGNvdXJzZXMuIEhhZCA3SysgbW9udGhseSBhY3RpdmUgdXNlcnMuIC0gQnVpbHQgdGhlIGxlYXJuaW5nIHBsYXRmb3JtIGZyb20gdGhlIGdyb3VuZCB1cCBhbmQgbWFuYWdlZCB0cmFmZmljIHRvIHRoZSB3ZWJzaXRlIGF0IHNjYWxlIGFuZCBvdmVyc2F3IHRoZSBzYWxlcyBhbmQgbWFya2V0aW5nIGV4ZWN1dGlvbi4gLSBOZWdvdGlhdGVkIHdpdGggMTAwWC5WQyBhbmQgUGVvcGxlIEdyb3VwIHRvIHJhaXNlICQ1MEsgc2VlZCBmdW5kaW5nIGZvciBTdHJpdmUu4oCmc2VlIG1vcmVcblNraWxsczogR28gKFByb2dyYW1taW5nIExhbmd1YWdlKSDCtyBQeXRob24gKFByb2dyYW1taW5nIExhbmd1YWdlKSDCtyBQcm9kdWN0IE1hbmFnZW1lbnQgwrcgUHJvZHVjdCBNYXJrZXRpbmcgwrcgTmV4dC5qcyDCtyBBbWF6b24gRUtTXG5cbkVkdWNhdGlvbkVkdWNhdGlvblxuVW5pdmVyc2l0eSBvZiBNYXJ5bGFuZCBsb2dvXG5Vbml2ZXJzaXR5IG9mIE1hcnlsYW5kVW5pdmVyc2l0eSBvZiBNYXJ5bGFuZFxuVW5kZXJncmFkdWF0ZSwgTWF0aGVtYXRpY3MgYW5kIENvbXB1dGVyIFNjaWVuY2VVbmRlcmdyYWR1YXRlLCBNYXRoZW1hdGljcyBhbmQgQ29tcHV0ZXIgU2NpZW5jZVxuQXVnIDIwMTkgLSBNYXkgMjAyM0F1ZyAyMDE5IC0gTWF5IDIwMjNcbkFjdGl2aXRpZXMgYW5kIHNvY2lldGllczogRGlyZWN0b3Igb2YgRm91bmRlciBSZXNvdXJjZXMgYXQgU3RhcnR1cCBTaGVsbEFjdGl2aXRpZXMgYW5kIHNvY2lldGllczogRGlyZWN0b3Igb2YgRm91bmRlciBSZXNvdXJjZXMgYXQgU3RhcnR1cCBTaGVsbFxuRXhwbG9yaW5nIHRoZSBiZWF1dHkgb2YgbWF0aGVtYXRpY3Mgd2l0aCB0aGUgcHJhY3RpY2FsaXR5IG9mIGNvbXB1dGVyIHNjaWVuY2VcblxuV3JpdGUgYSBjb2xkIG91dHJlYWNoIGVtYWlsIHRvIHRoaXMgZm91bmRlciwgcGl0Y2hpbmcgaGltIG91ciBwcm9kdWN0LCBOaWdodGZhbGwsIHdoaWNoIGlzIGEgbmVvLUNSTS4gTXkgbmFtZSBpcyBNYXguIE1ha2UgdGhlIGVtYWlsIGZvcm1hbCwgeWV0IGFwcHJvYWNoYWJsZS4gTWVudGlvbiByZWxldmFudCBkZXRhaWxzIGZyb20gaGlzIExpbmtlZEluIGluZm9ybWF0aW9uIGFib3ZlIHRvIGhlbHAgcGl0Y2ggdGhlIHByb2R1Y3QuIiwib3V0cHV0IjoiRXN0aW1hZG8gUHJhbmF2LFxuXG5NaSBub21icmUgZXMgTWF4IHkgbWUgY29tdW5pY28gY29uIHVzdGVkIHBvcnF1ZSBjcmVvIHF1ZSBudWVzdHJvIHByb2R1Y3RvLCBOaWdodGZhbGwsIHBvZHLDrWEgc2VyIHBlcmZlY3RvIHBhcmEgdXN0ZWQuIENvbW8gY29mdW5kYWRvciBkZSBTdHJpdmUgeSBEaXJlY3RvciBkZSBSZWN1cnNvcyBwYXJhIEZ1bmRhZG9yZXMgZW4gU3RhcnR1cCBTaGVsbCwgZXN0b3kgc2VndXJvIGRlIHF1ZSB1c3RlZCBjb21wcmVuZGUgbGEgaW1wb3J0YW5jaWEgZGUgY29udGFyIGNvbiB1biBDUk0gY29uZmlhYmxlIHBhcmEgYXl1ZGFyIGEgYWRtaW5pc3RyYXIgbGFzIHJlbGFjaW9uZXMgY29uIGxvcyBjbGllbnRlcy5cblxuTmlnaHRmYWxsIGVzIHVuIG5lby1DUk0gcXVlIGF5dWRhIGEgZnVuZGFkb3JlcyB5IGVtcHJlbmRlZG9yZXMgY29tbyB1c3RlZCBhIGdlc3Rpb25hciBmw6FjaWxtZW50ZSBsYXMgcmVsYWNpb25lcyBjb24gbG9zIGNsaWVudGVzIHkgcmVhbGl6YXIgdW4gc2VndWltaWVudG8gZGUgbG9zIGRhdG9zIGRlIGxvcyBtaXNtb3MuIE51ZXN0cm8gcHJvZHVjdG8gZXN0w6EgZGlzZcOxYWRvIHBhcmEgc2VyIGbDoWNpbCBkZSB1c2FyIGUgaW50dWl0aXZvLCBkZSBtb2RvIHF1ZSBwdWVkYSBjZW50cmFyc2UgZW4gaGFjZXIgY3JlY2VyIHN1IG5lZ29jaW8gc2luIHByZW9jdXBhcnNlIHBvciBsb3MgZGV0YWxsZXMgdMOpY25pY29zLlxuXG5DcmVvIHF1ZSBOaWdodGZhbGwgc2Vyw61hIHVuIGdyYW4gYWN0aXZvIHBhcmEgc3UgbmVnb2Npby4gU2kgZXN0w6EgaW50ZXJlc2FkbywgbWUgZW5jYW50YXLDrWEgcHJvZ3JhbWFyIHVuYSBsbGFtYWRhIHBhcmEgaGFibGFyIG3DoXMuXG5cblNhbHVkb3MsXG5NYXgiLCJtYXhUb2tlbnMiOjI1NiwiYm94Um93cyI6MzksInRlbXBlcmF0dXJlIjowLCJ0b3BQIjowfQ%3D%3D",style:{width:"100%",height:"1950px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("p",null,'Es muy \xfatil que los LLM puedan eliminar el desorden de toda la informaci\xf3n que copiamos de LinkedIn. Este proceso de contacto en fr\xedo tambi\xe9n se puede automatizar a mayor escala "raspando" (Scraping) LinkedIn para obtener informaci\xf3n relevante.'),(0,G.kt)("h2",{id:"conclusi\xf3n"},"Conclusi\xf3n"),(0,G.kt)("p",null,"\xa1Los LLM pueden ayudar a escribir correos electr\xf3nicos! Aseg\xfarese de leer lo que escriben antes de enviarlo. \ud83d\ude09"),(0,G.kt)("h2",{id:"m\xe1s"},"M\xe1s"),(0,G.kt)("ul",null,(0,G.kt)("li",{parentName:"ul"},(0,G.kt)("a",{parentName:"li",href:"https://zapier.com/blog/use-openai-gpt-3-to-write-emails/"},"Zapier"))),(0,G.kt)("div",{className:"footnotes"},(0,G.kt)("hr",{parentName:"div"}),(0,G.kt)("ol",{parentName:"div"},(0,G.kt)("li",{parentName:"ol",id:"fn-1"},"Bonta, A. (2022). How to use OpenAI\u2019s ChatGPT to write the perfect cold email. https://www.streak.com/post/how-to-use-ai-to-write-perfect-cold-emails\n",(0,G.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}o.isMDXComponent=!0}}]);