"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9321],{3905:(l,e,c)=>{c.d(e,{Zo:()=>g,kt:()=>s});var b=c(67294);function G(l,e,c){return e in l?Object.defineProperty(l,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[e]=c,l}function d(l,e){var c=Object.keys(l);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(l);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),c.push.apply(c,b)}return c}function a(l){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?d(Object(c),!0).forEach((function(e){G(l,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(c)):d(Object(c)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(c,e))}))}return l}function I(l,e){if(null==l)return{};var c,b,G=function(l,e){if(null==l)return{};var c,b,G={},d=Object.keys(l);for(b=0;b<d.length;b++)c=d[b],e.indexOf(c)>=0||(G[c]=l[c]);return G}(l,e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(b=0;b<d.length;b++)c=d[b],e.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(l,c)&&(G[c]=l[c])}return G}var Z=b.createContext({}),i=function(l){var e=b.useContext(Z),c=e;return l&&(c="function"==typeof l?l(e):a(a({},e),l)),c},g=function(l){var e=i(l.components);return b.createElement(Z.Provider,{value:e},l.children)},n="mdxType",t={inlineCode:"code",wrapper:function(l){var e=l.children;return b.createElement(b.Fragment,{},e)}},o=b.forwardRef((function(l,e){var c=l.components,G=l.mdxType,d=l.originalType,Z=l.parentName,g=I(l,["components","mdxType","originalType","parentName"]),n=i(c),o=G,s=n["".concat(Z,".").concat(o)]||n[o]||t[o]||d;return c?b.createElement(s,a(a({ref:e},g),{},{components:c})):b.createElement(s,a({ref:e},g))}));function s(l,e){var c=arguments,G=e&&e.mdxType;if("string"==typeof l||G){var d=c.length,a=new Array(d);a[0]=o;var I={};for(var Z in e)hasOwnProperty.call(e,Z)&&(I[Z]=e[Z]);I.originalType=l,I[n]="string"==typeof l?l:G,a[1]=I;for(var i=2;i<d;i++)a[i]=c[i];return b.createElement.apply(null,a)}return b.createElement.apply(null,c)}o.displayName="MDXCreateElement"},74249:(l,e,c)=>{c.r(e),c.d(e,{assets:()=>Z,contentTitle:()=>a,default:()=>t,frontMatter:()=>d,metadata:()=>I,toc:()=>i});var b=c(87462),G=(c(67294),c(3905));const d={sidebar_position:10},a="\ud83d\udfe2\xa0\xc9crire un e-mail",I={unversionedId:"basic_applications/writing_emails",id:"basic_applications/writing_emails",title:"\ud83d\udfe2\xa0\xc9crire un e-mail",description:"R\xe9diger des e-mails peut \xeatre une t\xe2che chronophage, surtout lorsque vous devez d'abord lire l'e-mail que vous avez re\xe7u. Cette section couvrira des cas d'utilisation, allant d'un simple e-mail informant votre patron que vous \xeates malade aujourd'hui, \xe0 des e-mails plus complexes pour les clients potentiels.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/basic_applications/writing_emails.md",sourceDirName:"basic_applications",slug:"/basic_applications/writing_emails",permalink:"/Learn_Prompting/fr/docs/basic_applications/writing_emails",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/writing_emails.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Structuration de Donn\xe9es",permalink:"/Learn_Prompting/fr/docs/basic_applications/table_generation"},next:{title:"\ud83d\udfe2 Blogs",permalink:"/Learn_Prompting/fr/docs/basic_applications/blog_generation"}},Z={},i=[{value:"E-mail de base pour un jour de maladie",id:"e-mail-de-base-pour-un-jour-de-maladie",level:2},{value:"Modificateurs/instructions de style",id:"modificateursinstructions-de-style",level:2},{value:"R\xe9pondre \xe0 un Email",id:"r\xe9pondre-\xe0-un-email",level:2},{value:"Emails Froids",id:"emails-froids",level:2},{value:"Using unstructured information",id:"using-unstructured-information",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"More",id:"more",level:2}],g={toc:i},n="wrapper";function t(l){let{components:e,...c}=l;return(0,G.kt)(n,(0,b.Z)({},g,c,{components:e,mdxType:"MDXLayout"}),(0,G.kt)("h1",{id:"\xe9crire-un-e-mail"},"\ud83d\udfe2\xa0\xc9crire un e-mail"),(0,G.kt)("p",null,"R\xe9diger des e-mails peut \xeatre une t\xe2che chronophage, surtout lorsque vous devez d'abord lire l'e-mail que vous avez re\xe7u. Cette section couvrira des cas d'utilisation, allant d'un simple e-mail informant votre patron que vous \xeates malade aujourd'hui, \xe0 des e-mails plus complexes pour les clients potentiels."),(0,G.kt)("h2",{id:"e-mail-de-base-pour-un-jour-de-maladie"},"E-mail de base pour un jour de maladie"),(0,G.kt)("p",null,"Imaginez que vous vous r\xe9veillez malade un jour et que vous ne pouvez pas aller travailler (ou que vous ne voulez tout simplement pas \ud83d\ude08). Voici un prompt simple qui \xe9crit un e-mail \xe0 votre patron pour lui dire que vous \xeates malade."),(0,G.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9iamV0IDogQWJzZW5jZSAtIE1hbGFkaWVcblxuQ2hlciBKb2huLFxuXG5KZSB2b3VzIMOpY3JpcyBwb3VyIHZvdXMgaW5mb3JtZXIgcXVlIGplIHNlcmFpIGFic2VudCBhdWpvdXJkJ2h1aSBlbiByYWlzb24gZGUgbWEgbWFsYWRpZS4gSmUgbSdleGN1c2UgcG91ciB0b3V0IGluY29udsOpbmllbnQgcXVlIGNlbGEgcG91cnJhaXQgY2F1c2VyLlxuXG5KZSB2YWlzIHZvdXMgdGVuaXIgYXUgY291cmFudCBkZSBtZXMgcHJvZ3LDqHMgZXQgamUgc2VyYWkgZGUgcmV0b3VyIGF1IGJ1cmVhdSBkw6hzIHF1ZSBqZSBtZSBzZW50aXJhaSBtaWV1eC5cblxuTWVyY2kgcG91ciB2b3RyZSBjb21wcsOpaGVuc2lvbi5cblxuQ29yZGlhbGVtZW50LFxuXG5NYXJpbyIsInByb21wdCI6Ik1vbiBOb20gOiBNYXJpb1xuTm9tIGR1IHBhdHJvbiA6IEpvaG5cblxuw4ljcmlyZSB1biBjb3VycmllbCDDoCBtb24gcGF0cm9uIGluZGlxdWFudCBxdWUgamUgc2VyYWkgYWJzZW50IGF1am91cmQnaHVpIGNhciBqZSBzdWlzIG1hbGFkZS4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("p",null,"Cet e-mail fonctionne, mais il est assez ennuyeux. \xc9gayons-le un peu !"),(0,G.kt)("h2",{id:"modificateursinstructions-de-style"},"Modificateurs/instructions de style"),(0,G.kt)("p",null,"Il est tr\xe8s facile de modifier le style de l'e-mail. Par exemple, vous pouvez demander \xe0 l'IA d'\xeatre \"humoristique\" ou lui donner l'instruction d'inclure \"une raison dr\xf4le\"."),(0,G.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiQ2hlciBKb2huLFxuXG5KZSB2b3VzIMOpY3JpcyBwb3VyIHZvdXMgaW5mb3JtZXIgcXVlIGplIHNlcmFpIGFic2VudCBkdSBidXJlYXUgYXVqb3VyZCdodWkuIEplIHNhaXMgcXVlIGplIHN1aXMgY2Vuc8OpIHRyYXZhaWxsZXIsIG1haXMgamUgbidhaSBwYXMgcHUgcsOpc2lzdGVyIMOgIGwnYXBwZWwgZGUgbGEgc2lyw6huZSBkZSBsYSBib3VsYW5nZXJpZSBsb2NhbGUuIEplIHN1aXMgc8O7ciBxdWUgdm91cyBjb21wcmVuZXouXG5cbkplIHNlcmFpIGRlIHJldG91ciBhdSBidXJlYXUgZGVtYWluIGV0IGplIHJhdHRyYXBlcmFpIGxlIHRlbXBzIHBlcmR1LlxuXG5NZXJjaSxcbk1hcmlvIiwicHJvbXB0IjoiTW9uIG5vbTogTWFyaW9cbk5vbSBkdSBwYXRyb24gOiBKb2huXG5cbsOJY3JpdmV6IHVuIGUtbWFpbCBodW1vcmlzdGlxdWUgbWFpcyBwcm9mZXNzaW9ubmVsIMOgIG1vbiBwYXRyb24gcG91ciBsdWkgZGlyZSBxdWUgamUgc2VyYWkgYWJzZW50IGR1IGJ1cmVhdSBhdWpvdXJkJ2h1aSBjYXIgamUgc3VpcyBtYWxhZGUuIFxuU295ZXogY29uY2lzIGV0IGRyw7RsZS4gSW5jbHVleiB1bmUgcmFpc29uIGFtdXNhbnRlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("p",null,"Voici un autre exemple qui est plus s\xe9rieux/professionnel."),(0,G.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9iamV0IDogQWJzZW5jZSAtIE1hbGFkZVxuXG5DaGVyIEpvaG4sXG5cbkplIHZvdXMgaW5mb3JtZSBxdWUgamUgc2VyYWkgYWJzZW50IGR1IGJ1cmVhdSBhdWpvdXJkJ2h1aSBlbiByYWlzb24gZGUgbWEgbWFsYWRpZS4gSmUgdm91cyBwcmllIGRlIG0nZXhjdXNlciBwb3VyIHRvdXRlIGfDqm5lIG9jY2FzaW9ubsOpZS5cblxuTWVyY2kgZGUgdm90cmUgY29tcHLDqWhlbnNpb24uXG5cbkNvcmRpYWxlbWVudCxcbk1hcmlvIiwicHJvbXB0IjoiTW9uIG5vbSA6IE1hcmlvXG5Ob20gZGUgbW9uIHBhdHJvbiA6IEpvaG5cblxuUsOpZGlnZXogdW4gZS1tYWlsIHPDqXJpZXV4IGV0IHByb2Zlc3Npb25uZWwgw6AgbW9uIHBhdHJvbiBpbmRpcXVhbnQgcXVlIGplIHNlcmFpIGFic2VudCBkdSBidXJlYXUgYXVqb3VyZCdodWkgY2FyIGplIHN1aXMgbWFsYWRlLlxuU29pcyBjb25jaXMgOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("h2",{id:"r\xe9pondre-\xe0-un-email"},"R\xe9pondre \xe0 un Email"),(0,G.kt)("p",null,"Imaginez que vous recevez un long email de votre patron avec beaucoup d'informations. Vous devez r\xe9pondre \xe0 l'email, mais vous n'avez pas le temps de tout lire. Vous pouvez ins\xe9rer l'email dans une IA et lui demander de ",(0,G.kt)("inlineCode",{parentName:"p"},"g\xe9n\xe9rer un r\xe9sum\xe9 de ceci et une liste des \xe9l\xe9ments d'action"),"."),(0,G.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlLDqXN1bcOpIDogSm9obiBkZW1hbmRlIGwnYWlkZSBkZSBNYXJpbyBwb3VyIHLDqXNvdWRyZSBsZXMgcHJvYmzDqG1lcyBkJ2ludGVyZmFjZSB1dGlsaXNhdGV1ciBkdSBsb2dpY2llbCBzdXIgbGVxdWVsIE1hcmlvIHRyYXZhaWxsZS4gTGVzIHByb2Jsw6htZXMgY29uY2VybmVudCBsYSBkaWZmaWN1bHTDqSBkJ2FjY8OpZGVyIMOgIGNlcnRhaW5lcyBmb25jdGlvbm5hbGl0w6lzIGV0IGwnaW50ZXJmYWNlIHV0aWxpc2F0ZXVyIHF1aSBuJ2VzdCBwYXMgYXNzZXogaW50dWl0aXZlLiBMJ2V4cGVydGlzZSBkZSBNYXJpbyBlbiBkw6l2ZWxvcHBlbWVudCBkZSBsb2dpY2llbHMgZXQgc2EgZmFtaWxpYXJpdMOpIGF2ZWMgbGUgbG9naWNpZWwgZm9udCBkZSBsdWkgbGEgcGVyc29ubmUgaWTDqWFsZSBwb3VyIGFpZGVyIMOgIHLDqXNvdWRyZSBjZSBwcm9ibMOobWUuXG5cblTDomNoZXMgw6AgYWNjb21wbGlyOlxuLSBBcHBvcnRlciBkZXMgbW9kaWZpY2F0aW9ucyDDoCBsYSBkaXNwb3NpdGlvbiwgYXUgZGVzaWduIG91IMOgIGxhIGZvbmN0aW9ubmFsaXTDqSBkZSBsJ2ludGVyZmFjZSB1dGlsaXNhdGV1clxuLSBEZW1hbmRlciBkZXMgcmVzc291cmNlcyBvdSB1biBzb3V0aWVuIHN1cHBsw6ltZW50YWlyZSBzaSBuw6ljZXNzYWlyZVxuLSBGb3VybmlyIHVuIGNhbGVuZHJpZXIgZXN0aW3DqSBwb3VyIGxhIGZpbiBkZXMgbW9kaWZpY2F0aW9ucyIsInByb21wdCI6IkNoZXIgTWFyaW8sXG5cbkonZXNww6hyZSBxdWUgdHUgdmFzIGJpZW4uIEplIHQnw6ljcmlzIHBvdXIgdGUgZG9ubmVyIGRlcyBtaXNlcyDDoCBqb3VyIHN1ciBub3RyZSBlbnRyZXByaXNlIGV0IHRlIGRlbWFuZGVyIHRvbiBhaWRlIHBvdXIgcsOpc291ZHJlIHVuIHByb2Jsw6htZSBhdmVjIGwnaW50ZXJmYWNlIHV0aWxpc2F0ZXVyIChVSSkgZHUgbG9naWNpZWwgc3VyIGxlcXVlbCB0dSB0cmF2YWlsbGVzLlxuXG5Db21tZSB0dSBsZSBzYWlzLCBub3RyZSBlbnRyZXByaXNlIHNlIGNvbmNlbnRyZSBzdXIgbGEgZm91cm5pdHVyZSBkJ3VuZSBleHDDqXJpZW5jZSBjb252aXZpYWxlIMOgIG5vcyBjbGllbnRzIGV0IG5vdXMgYXZvbnMgaWRlbnRpZmnDqSBkZXMgcHJvYmzDqG1lcyBhdmVjIGwnaW50ZXJmYWNlIHV0aWxpc2F0ZXVyIGR1IGxvZ2ljaWVsLiBFbiBwYXJ0aWN1bGllciwgbm91cyBhdm9ucyByZcOndSBkZXMgY29tbWVudGFpcmVzIGRlIG5vcyB1dGlsaXNhdGV1cnMgaW5kaXF1YW50IHF1J2lscyBvbnQgZHUgbWFsIMOgIGFjY8OpZGVyIMOgIGNlcnRhaW5lcyBmb25jdGlvbm5hbGl0w6lzIGV0IHF1ZSBsJ2ludGVyZmFjZSB1dGlsaXNhdGV1ciBuJ2VzdCBwYXMgYXNzZXogaW50dWl0aXZlLlxuXG5Ob3VzIGF2b25zIGJlc29pbiBkZSB0b24gYWlkZSBwb3VyIHLDqXNvdWRyZSBjZXMgcHJvYmzDqG1lcyBldCBhbcOpbGlvcmVyIGwnaW50ZXJmYWNlIHV0aWxpc2F0ZXVyIGR1IGxvZ2ljaWVsLiBDZWxhIHBldXQgaW1wbGlxdWVyIGRlcyBtb2RpZmljYXRpb25zIMOgIGxhIGRpc3Bvc2l0aW9uLCBhdSBkZXNpZ24gb3Ugw6AgbGEgZm9uY3Rpb25uYWxpdMOpIGRlIGwnaW50ZXJmYWNlIHV0aWxpc2F0ZXVyLiBOb3VzIHBlbnNvbnMgcXVlIHRvbiBleHBlcnRpc2UgZW4gZMOpdmVsb3BwZW1lbnQgZGUgbG9naWNpZWxzIGV0IHRhIGZhbWlsaWFyaXTDqSBhdmVjIGxlIGxvZ2ljaWVsIGZlcm9udCBkZSB0b2kgbGEgcGVyc29ubmUgaWTDqWFsZSBwb3VyIG5vdXMgYWlkZXIgZGFucyBjZXR0ZSB0w6JjaGUuXG5cblNpIHR1IGFzIGJlc29pbiBkZSByZXNzb3VyY2VzIG91IGRlIHNvdXRpZW4gc3VwcGzDqW1lbnRhaXJlcyBwb3VyIG1lbmVyIMOgIGJpZW4gY2V0dGUgdMOiY2hlLCBuJ2jDqXNpdGUgcGFzIMOgIG1lIGxlIGZhaXJlIHNhdm9pci4gRGUgcGx1cywgaidhcHByw6ljaWVyYWlzIHNpIHR1IHBvdXZhaXMgbWUgZm91cm5pciB1biBjYWxlbmRyaWVyIGVzdGltw6kgcG91ciBxdWFuZCB0dSBwcsOpdm9pcyBxdWUgY2VzIG1vZGlmaWNhdGlvbnMgc2Vyb250IHRlcm1pbsOpZXMuXG5cblNpIHR1IGFzIGRlcyBxdWVzdGlvbnMgb3UgYmVzb2luIGRlIHBsdXMgZGUgY2xhcmlmaWNhdGlvbiwgbidow6lzaXRlIHBhcyDDoCBtZSBjb250YWN0ZXIuXG5cbk1lcmNpIHBvdXIgdG9uIHRyYXZhaWwgYWNoYXJuw6kgZXQgdGEgZMOpdm90aW9uIGVudmVycyBub3RyZSBlbnRyZXByaXNlLiBKJ2F0dGVuZHMgYXZlYyBpbXBhdGllbmNlIGRlIHRlcyBub3V2ZWxsZXMgYmllbnTDtHQuXG5cbkNvcmRpYWxlbWVudCxcbkpvaG5cblxuR8OpbsOpcmVyIHVuIHLDqXN1bcOpIGRlIGNlY2kgZXQgdW5lIGxpc3RlIGRlIHTDomNoZXMgw6AgYWNjb21wbGlyLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("br",null),"Vous pouvez ensuite utiliser ce r\xe9sum\xe9 pour \xe9crire un e-mail de r\xe9ponse.",(0,G.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNoZXIgSm9obixcblxuSmUgdm91cyByZW1lcmNpZSBkZSBtZSBjb250YWN0ZXIgYXUgc3VqZXQgZGVzIHByb2Jsw6htZXMgZCdpbnRlcmZhY2UgdXRpbGlzYXRldXIgYXZlYyBsZSBsb2dpY2llbCBzdXIgbGVxdWVsIGplIHRyYXZhaWxsZS4gSmUgY29tcHJlbmRzIGwnaW1wb3J0YW5jZSBkZSB2ZWlsbGVyIMOgIGNlIHF1ZSBsJ2ludGVyZmFjZSB1dGlsaXNhdGV1ciBzb2l0IGludHVpdGl2ZSBldCBmYWNpbGUgw6AgdXRpbGlzZXIsIGV0IGplIHN1aXMgaGV1cmV1eCBkZSB2b3VzIGFpZGVyLlxuXG5KZSBjb21tZW5jZXJhaSDDoCBhcHBvcnRlciBkZXMgbW9kaWZpY2F0aW9ucyDDoCBsYSBtaXNlIGVuIHBhZ2UsIGF1IGRlc2lnbiBldCDDoCBsYSBmb25jdGlvbm5hbGl0w6kgZGUgbCdpbnRlcmZhY2UgdXRpbGlzYXRldXIgcG91ciByw6lzb3VkcmUgbGVzIHByb2Jsw6htZXMgcXVlIHZvdXMgYXZleiBtZW50aW9ubsOpcy4gU2kgaidhaSBiZXNvaW4gZGUgcmVzc291cmNlcyBvdSBkZSBzb3V0aWVuIHN1cHBsw6ltZW50YWlyZXMsIGplIHZvdXMgZmVyYWkgc2F2b2lyLiBKZSBmb3VybmlyYWkgw6lnYWxlbWVudCB1bmUgZXN0aW1hdGlvbiBkdSBkw6lsYWkgZGUgcsOpYWxpc2F0aW9uIGRlcyBtb2RpZmljYXRpb25zLlxuXG5OJ2jDqXNpdGV6IHBhcyDDoCBtZSBjb250YWN0ZXIgc2kgdm91cyBhdmV6IGRlcyBxdWVzdGlvbnMgb3UgZGVzIHByw6lvY2N1cGF0aW9ucy5cblxuQ29yZGlhbGVtZW50LFxuTWFyaW8iLCJwcm9tcHQiOiJSw6lzdW3DqSA6IEpvaG4gZGVtYW5kZSBsJ2FpZGUgZGUgTWFyaW8gcG91ciByw6lzb3VkcmUgbGVzIHByb2Jsw6htZXMgZCdpbnRlcmZhY2UgdXRpbGlzYXRldXIgZHUgbG9naWNpZWwgc3VyIGxlcXVlbCBNYXJpbyB0cmF2YWlsbGUuIExlcyBwcm9ibMOobWVzIGNvbmNlcm5lbnQgbGEgZGlmZmljdWx0w6kgZCdhY2PDqWRlciDDoCBjZXJ0YWluZXMgZm9uY3Rpb25uYWxpdMOpcyBldCBsJ2ludGVyZmFjZSB1dGlsaXNhdGV1ciBxdWkgbidlc3QgcGFzIGFzc2V6IGludHVpdGl2ZS4gTCdleHBlcnRpc2UgZGUgTWFyaW8gZW4gZMOpdmVsb3BwZW1lbnQgZGUgbG9naWNpZWxzIGV0IHNhIGZhbWlsaWFyaXTDqSBhdmVjIGxlIGxvZ2ljaWVsIGZvbnQgZGUgbHVpIGxhIHBlcnNvbm5lIGlkw6lhbGUgcG91ciBhaWRlciDDoCByw6lzb3VkcmUgY2UgcHJvYmzDqG1lLlxuXG5Uw6JjaGVzIMOgIGFjY29tcGxpcjpcbi0gQXBwb3J0ZXIgZGVzIG1vZGlmaWNhdGlvbnMgw6AgbGEgZGlzcG9zaXRpb24sIGF1IGRlc2lnbiBvdSDDoCBsYSBmb25jdGlvbm5hbGl0w6kgZGUgbCdpbnRlcmZhY2UgdXRpbGlzYXRldXJcbi0gRGVtYW5kZXIgZGVzIHJlc3NvdXJjZXMgb3UgdW4gc291dGllbiBzdXBwbMOpbWVudGFpcmUgc2kgbsOpY2Vzc2FpcmVcbi0gRm91cm5pciB1biBjYWxlbmRyaWVyIGVzdGltw6kgcG91ciBsYSBmaW4gZGVzIG1vZGlmaWNhdGlvbnNcblxuUsOpZGlnZXogdW5lIHLDqXBvbnNlIHBhciBjb3VycmllciDDqWxlY3Ryb25pcXVlIGRlIE1hcmlvIGVuIHV0aWxpc2FudCBsZSByw6lzdW3DqSBjaS1kZXNzdXMgOiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("br",null),"Notez que vous pouvez souvent combiner ces deux \xe9tapes en une seule. Vous pouvez demander \xe0 l'IA de g\xe9n\xe9rer directement un e-mail de r\xe9ponse \xe0 partir de l'e-mail que vous avez re\xe7u.",(0,G.kt)("h2",{id:"emails-froids"},"Emails Froids"),(0,G.kt)("p",null,"Les emails froids sont des emails envoy\xe9s \xe0 des personnes que vous ne connaissez pas. Il est difficile d'obtenir une r\xe9ponse \xe0 partir de ces emails, donc il peut \xeatre utile d'envoyer beaucoup d'e-mails personnalis\xe9s. Voyons comment faire cela avec GPT-3",(0,G.kt)("sup",{parentName:"p",id:"fnref-1"},(0,G.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,G.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9iamV0IDogVW4gQ1JNIG1vZGVybmUgcG91ciBhaWRlciB2b3RyZSBlbnRyZXByaXNlIMOgIHNlIGTDqXZlbG9wcGVyXG5cbkNoZXIgUHJhbmF2LFxuXG5KZSBtJ2FwcGVsbGUgTWF4IGV0IGplIHN1aXMgbGUgZm9uZGF0ZXVyIGRlIE5pZ2h0ZmFsbCwgdW4gbsOpby1DUk0gcXVpIGFpZGUgbGVzIGVudHJlcHJpc2VzIMOgIHJhdGlvbmFsaXNlciBsZXVyIGdlc3Rpb24gZGUgbGEgcmVsYXRpb24gY2xpZW50LlxuXG5Ob3VzIGNvbXByZW5vbnMgcXVlIGxhIGdlc3Rpb24gZGVzIHJlbGF0aW9ucyBhdmVjIGxlcyBjbGllbnRzIHBldXQgw6p0cmUgdW4gZMOpZmksIHN1cnRvdXQgbG9yc3F1ZSB2b3RyZSBlbnRyZXByaXNlIHNlIGTDqXZlbG9wcGUuIEMnZXN0IHBvdXJxdW9pIG5vdXMgYXZvbnMgY3LDqcOpIE5pZ2h0ZmFsbCwgdW4gQ1JNIG1vZGVybmUgcXVpIHZvdXMgYWlkZSDDoCByZXN0ZXIgb3JnYW5pc8OpIGV0IGNvbm5lY3TDqSBhdmVjIHZvcyBjbGllbnRzLlxuXG5OaWdodGZhbGwgb2ZmcmUgdW5lIGdhbW1lIGRlIGZvbmN0aW9ubmFsaXTDqXMsIHkgY29tcHJpcyBsYSBzZWdtZW50YXRpb24gYXV0b21hdGlzw6llIGRlcyBjbGllbnRzLCBkZXMgcGFyY291cnMgY2xpZW50cyBwZXJzb25uYWxpc8OpcyBldCBkZXMgYW5hbHlzZXMgZW4gdGVtcHMgcsOpZWwuIE5vdXMgZm91cm5pc3NvbnMgw6lnYWxlbWVudCB1biBzdXBwb3J0IGNsaWVudCAyNC83IHBvdXIgdm91cyBhc3N1cmVyIHF1ZSB2b3VzIHRpcmV6IGxlIG1laWxsZXVyIHBhcnRpIGRlIG5vdHJlIHByb2R1aXQuXG5cbkonYWltZXJhaXMgZGlzY3V0ZXIgZGUgbGEgZmHDp29uIGRvbnQgTmlnaHRmYWxsIHBldXQgYWlkZXIgdm90cmUgZW50cmVwcmlzZSDDoCBzZSBkw6l2ZWxvcHBlci4gU2VyaWV6LXZvdXMgZGlzcG9uaWJsZSBwb3VyIHVuIGFwcGVsIMOgIHVuIG1vbWVudCBkb25uw6kgY2V0dGUgc2VtYWluZSA%2FXG5cbkonYXR0ZW5kcyBhdmVjIGltcGF0aWVuY2UgZGUgdm9zIG5vdXZlbGxlcy5cblxuQ29yZGlhbGVtZW50LFxuTWF4IiwicHJvbXB0IjoiTm9tIGRlIGwnZW50cmVwcmlzZSA6IE5pZ2h0ZmFsbFxuTW9uIG5vbSA6IE1heFxuUsOpZGlnZXogdW4gZS1tYWlsIGRlIHByb3NwZWN0aW9uIMOgIGNlIGZvbmRhdGV1ciwgbm9tbcOpIFByYW5hdiwgcG91ciBsdWkgcHLDqXNlbnRlciBub3RyZSBwcm9kdWl0LCBxdWkgZXN0IHVuIG7DqW8tQ1JNLiBSZW5kZXogbCdlLW1haWwgZm9ybWVsLCBtYWlzIGFjY2Vzc2libGUuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("p",null,"This is neat, but we can do better. Let's add some more information to the prompt."),(0,G.kt)("h3",{id:"using-unstructured-information"},"Using unstructured information"),(0,G.kt)("p",null,"Say you have the linkedin profile of the person you are sending the email to. You can add that information to the prompt to make the email more personalized. Let's use the ",(0,G.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/snpranav/"},"founder of Strive's LinkedIn")," as an example. We'll copy a bunch of information from his profile and add it to the prompt."),(0,G.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkNoZXIgUHJhbmF2LFxuXG5KZSBtJ2FwcGVsbGUgTWF4IGV0IGplIHZvdXMgY29udGFjdGUgcGFyY2UgcXVlIGplIHBlbnNlIHF1ZSBub3RyZSBwcm9kdWl0LCBOaWdodGZhbGwsIHBvdXJyYWl0IHZvdXMgY29udmVuaXIuIEVuIHRhbnQgcXVlIGNvLWZvbmRhdGV1ciBkZSBTdHJpdmUgZXQgRGlyZWN0ZXVyIGRlcyBSZXNzb3VyY2VzIHBvdXIgbGVzIEZvbmRhdGV1cnMgY2hleiBTdGFydHVwIFNoZWxsLCBqZSBzdWlzIHPDu3IgcXVlIHZvdXMgY29tcHJlbmV6IGwnaW1wb3J0YW5jZSBkJ2F2b2lyIHVuIENSTSBmaWFibGUgcG91ciBnw6lyZXIgbGVzIHJlbGF0aW9ucyBhdmVjIGxlcyBjbGllbnRzLlxuXG5OaWdodGZhbGwgZXN0IHVuIG7DqW8tQ1JNIHF1aSBhaWRlIGxlcyBmb25kYXRldXJzIGV0IGxlcyBlbnRyZXByZW5ldXJzIGNvbW1lIHZvdXMgw6AgZ8OpcmVyIGZhY2lsZW1lbnQgbGVzIHJlbGF0aW9ucyBhdmVjIGxlcyBjbGllbnRzIGV0IMOgIHN1aXZyZSBsZXMgZG9ubsOpZXMgZGVzIGNsaWVudHMuIE5vdHJlIHByb2R1aXQgZXN0IGNvbsOndSBwb3VyIMOqdHJlIGNvbnZpdmlhbCBldCBpbnR1aXRpZiwgYWZpbiBxdWUgdm91cyBwdWlzc2lleiB2b3VzIGNvbmNlbnRyZXIgc3VyIGxlIGTDqXZlbG9wcGVtZW50IGRlIHZvdHJlIGVudHJlcHJpc2Ugc2FucyB2b3VzIHNvdWNpZXIgZGVzIGTDqXRhaWxzIHRlY2huaXF1ZXMuXG5cbkplIHBlbnNlIHF1ZSB2b3VzIHRyb3V2ZXJpZXogTmlnaHRmYWxsIHRyw6hzIHV0aWxlIHBvdXIgdm90cmUgZW50cmVwcmlzZS4gU2kgdm91cyDDqnRlcyBpbnTDqXJlc3PDqSwgaidhaW1lcmFpcyBwbGFuaWZpZXIgdW4gYXBwZWwgcG91ciBlbiBkaXNjdXRlciBkYXZhbnRhZ2UuXG5cbkNvcmRpYWxlbWVudCxcbk1heCIsInByb21wdCI6IlByYW5hdiBTaGlrYXJwdXIgIDFlciBkZWdyw6kgZGUgY29ubmV4aW9uMWVyXG5Ew6lmZW5zZXVyIGR1IGTDqXZlbG9wcGVtZW50LiBSw6lzb2x2ZXVyIGRlIHByb2Jsw6htZXMuIFByw6ljw6lkZW1tZW50IDogQ28tZm9uZGF0ZXVyIGRlIFN0cml2ZSwgYW5jaWVuIGQnSW50ZWwgSVNFRlxuXG5FeHDDqXJpZW5jZUV4cMOpcmllbmNlXG5Mb2dvIGRlIFRoYWxlcyBDbG91ZCBTZWN1cml0eVxuRMOpZmVuc2V1ciBkdSBkw6l2ZWxvcHBlbWVudETDqWZlbnNldXIgZHUgZMOpdmVsb3BwZW1lbnRcblRoYWxlcyBDbG91ZCBTZWN1cml0eVRoYWxlcyBDbG91ZCBTZWN1cml0eVxuQXZyIDIwMjIgLSBQcsOpc2VudCDigKIgMSBhbkF2ciAyMDIyIC0gUHLDqXNlbnQg4oCiIDEgYW5cbi0gRXjDqWN1dGlvbiBkZSBsYSBtaXNlIHN1ciBsZSBtYXJjaMOpIGV0IHN0aW11bGF0aW9uIGRlIGwnZW5nYWdlbWVudCBkZXMgZMOpdmVsb3BwZXVycyBwb3VyIGxlIGxhbmNlbWVudCBkdSBub3V2ZWF1IHByb2R1aXQgZGUgY2hpZmZyZW1lbnQgZGUgZG9ubsOpZXMgZGUgVGhhbGVzLlxuLSBQaWxvdGFnZSBkZSBsJ2Fkb3B0aW9uIGR1IHByb2R1aXQgcGFyIGxlcyBkw6l2ZWxvcHBldXJzIGxvcnMgZGUgbGEgY29uZsOpcmVuY2UgUlNBIDIwMjIgZXQgZGUgS3ViZUNvbiAyMDIyLlxuLSBQcsOpc2VudGF0aW9uIGQndW5lIGNvbmbDqXJlbmNlIGxvcnMgZGUgbGEgY29uZsOpcmVuY2UgYW5udWVsbGUgZGUgSGFzaGlDb3JwIC0gSGFzaGlDb25mIDIwMjIgw6AgTG9zIEFuZ2VsZXMgLSBzdXIgXCJMYSBzw6ljdXJpc2F0aW9uIGRlIHRvdXRlIHNvdXJjZSBkZSBkb25uw6llc1wiLlxuQ29tcMOpdGVuY2VzIDogTm9ybWUgZGUgY2hpZmZyZW1lbnQgZGUgZG9ubsOpZXMgKERFUykg4oCiIENyeXB0b2dyYXBoaWUg4oCiIEN5YmVyc8OpY3VyaXTDqSDigKIgQ3LDqWF0aW9uIGRlIGNvbnRlbnUg4oCiIFNlcnZpY2UgS3ViZXJuZXRlcyBBenVyZSAoQUtTKSDigKIgTW90ZXVyIEt1YmVybmV0ZXMgR29vZ2xlIChHS0UpXG5cbkxvZ28gZGUgU3RhcnR1cCBTaGVsbFxuRGlyZWN0ZXVyIGRlcyByZXNzb3VyY2VzIHBvdXIgbGVzIGZvbmRhdGV1cnNEaXJlY3RldXIgZGVzIHJlc3NvdXJjZXMgcG91ciBsZXMgZm9uZGF0ZXVyc1xuU3RhcnR1cCBTaGVsbFN0YXJ0dXAgU2hlbGxcbkbDqXYgMjAyMiAtIFByw6lzZW50IOKAoiAxIGFuIDIgbW9pc0bDqXYgMjAyMiAtIFByw6lzZW50IOKAoiAxIGFuIDIgbW9pc1xuQ29sbGVnZSBQYXJrLCBNYXJ5bGFuZCwgw4l0YXRzLVVuaXNDb2xsZWdlIFBhcmssIE1hcnlsYW5kLCDDiXRhdHMtVW5pc1xuLSBDb25jbHVzaW9uIGRlIHBhcnRlbmFyaWF0cyBkZSByZXNzb3VyY2VzIHBvdXIgbGVzIGZvbmRhdGV1cnMgYXZlYyBkaXZlcnNlcyBlbnRyZXByaXNlcyB0ZWNobm9sb2dpcXVlcyBjb21tZSBWZXJjZWwsIE1vbmdvREIsIGV0Yy5cbi0gU291cmNpbmcgZGUgcGx1cyBkZSA1MCAwMDAgZG9sbGFycyBkZSBjcsOpZGl0cyBldCBkZSByZXNzb3VyY2VzIHBvdXIgbGVzIGZvbmRhdGV1cnMgZGUgU3RhcnR1cCBTaGVsbCBlbiBsJ2VzcGFjZSBkZSAzIG1vaXMuXG5Db21ww6l0ZW5jZXMgOiBQYXJ0ZW5hcmlhdHMgc3RyYXTDqWdpcXVlc1xuXG5Mb2dvIGR1IHLDqXNlYXUgU3RyaXZlXG5Dby1Gb25kYXRldXJDby1Gb25kYXRldXJcblN0cml2ZVN0cml2ZVxuRMOpYyAyMDIwIC0gTm92IDIwMjEg4oCiIDEgYW5Ew6ljIDIwMjAgLSBOb3YgMjAyMSDigKIgMSBhblxuLSBGb25kYXRpb24gZGUgbGEgcHJlbWnDqHJlIHBsYXRlZm9ybWUgZCdhcHByZW50aXNzYWdlIGJhc8OpZSBzdXIgZGVzIGNvaG9ydGVzIGVuIEluZGUgcG91ciBkZXMgY291cnMgbGnDqXMgw6AgbGEgcGFzc2lvbi4gQXZhaXQgcGx1cyBkZSA3SyB1dGlsaXNhdGV1cnMgYWN0aWZzIHBhciBtb2lzLlxuLSBDb25zdHJ1Y3Rpb24gZGUgbGEgcGxhdGVmb3JtZSBkJ2FwcHJlbnRpc3NhZ2Ugw6AgcGFydGlyIGRlIHrDqXJvIGV0IGdlc3Rpb24gZHUgdHJhZmljIHZlcnMgbGUgc2l0ZSB3ZWIgw6AgZ3JhbmRlIMOpY2hlbGxlIGV0IHN1cGVydmlzaW9uIGRlIGwnZXjDqWN1dGlvbiBkZXMgdmVudGVzIGV0IGR1IG1hcmtldGluZy5cbi0gTsOpZ29jaWF0aW9uIGF2ZWMgMTAwWC5WQyBldCBQZW9wbGUgR3JvdXAgcG91ciBsZXZlciA1MEsgZG9sbGFycyBkZSBmaW5hbmNlbWVudCBpbml0aWFsIHBvdXIgU3RyaXZlLlxuQ29tcMOpdGVuY2VzIDogR28gKExhbmdhZ2UgZGUgcHJvZ3JhbW1hdGlvbikg4oCiIFB5dGhvbiAoTGFuZ2FnZSBkZSBwcm9ncmFtbWF0aW9uKSDigKIgR2VzdGlvbiBkZSBwcm9kdWl0IOKAoiBNYXJrZXRpbmcgZGUgcHJvZHVpdCDigKIgTmV4dC5qcyDigKIgQW1hem9uIEVLU1xuXG7DiWR1Y2F0aW9uw4lkdWNhdGlvblxuTG9nbyBkZSBsJ1VuaXZlcnNpdMOpIGR1IE1hcnlsYW5kXG5Vbml2ZXJzaXTDqSBkdSBNYXJ5bGFuZFVuaXZlcnNpdMOpIGR1IE1hcnlsYW5kXG5MaWNlbmNlLCBNYXRow6ltYXRpcXVlcyBldCBJbmZvcm1hdGlxdWVMaWNlbmNlLCBNYXRow6ltYXRpcXVlcyBldCBJbmZvcm1hdGlxdWVcbkFvw7t0IDIwMTkgLSBNYWkgMjAyM0Fvw7t0IDIwMTkgLSBNYWkgMjAyM1xuQWN0aXZpdMOpcyBldCBzb2Npw6l0w6lzIDogRGlyZWN0ZXVyIGRlcyByZXNzb3VyY2VzIHBvdXIgbGVzIGZvbmRhdGV1cnMgw6AgU3RhcnR1cCBTaGVsbFxuRXhwbG9yYXRpb24gZGUgbGEgYmVhdXTDqSBkZXMgbWF0aMOpbWF0aXF1ZXMgYXZlYyBsYSBwcmF0aWNpdMOpIGRlIGwnaW5mb3JtYXRpcXVlXG5cblLDqWRpZ2V6IHVuIGUtbWFpbCBkZSBwcm9zcGVjdGlvbiDDoCBjZSBmb25kYXRldXIsIGVuIGx1aSBwcsOpc2VudGFudCBub3RyZSBwcm9kdWl0LCBOaWdodGZhbGwsIHF1aSBlc3QgdW4gbsOpby1DUk0uIE1vbiBub20gZXN0IE1heC4gUmVuZGV6IGwnZS1tYWlsIGZvcm1lbCwgbWFpcyBhY2Nlc3NpYmxlLiBNZW50aW9ubmV6IGxlcyBkw6l0YWlscyBwZXJ0aW5lbnRzIGRlIHNlcyBpbmZvcm1hdGlvbnMgTGlua2VkSW4gY2ktZGVzc3VzIHBvdXIgYWlkZXIgw6AgcHLDqXNlbnRlciBsZSBwcm9kdWl0LiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,G.kt)("p",null,"It is super useful that LLMs can cut through the clutter of all the information we copied from LinkedIn. This cold outreach process can also be automated at a larger scale by scraping LinkedIn for relevant information."),(0,G.kt)("h2",{id:"conclusion"},"Conclusion"),(0,G.kt)("p",null,"LLMs can help you write emails! Make sure you read what they write before sending it \ud83d\ude09"),(0,G.kt)("h2",{id:"more"},"More"),(0,G.kt)("ul",null,(0,G.kt)("li",{parentName:"ul"},(0,G.kt)("a",{parentName:"li",href:"https://zapier.com/blog/use-openai-gpt-3-to-write-emails/"},"Zapier"))),(0,G.kt)("div",{className:"footnotes"},(0,G.kt)("hr",{parentName:"div"}),(0,G.kt)("ol",{parentName:"div"},(0,G.kt)("li",{parentName:"ol",id:"fn-1"},"Bonta, A. (2022). How to use OpenAI\u2019s ChatGPT to write the perfect cold email. https://www.streak.com/post/how-to-use-ai-to-write-perfect-cold-emails\n",(0,G.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}t.isMDXComponent=!0}}]);