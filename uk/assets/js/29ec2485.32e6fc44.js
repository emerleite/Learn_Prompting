"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6004],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||i;return t?r.createElement(d,l(l({ref:n},c),{},{components:t})):r.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65204:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={sidebar_position:7},l="\ud83d\udfe1 \u0421\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437 \u0412\u041c\u041c",o={unversionedId:"reliability/lm_self_eval",id:"reliability/lm_self_eval",title:"\ud83d\udfe1 \u0421\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437 \u0412\u041c\u041c",description:"\u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/reliability/lm_self_eval.md",sourceDirName:"reliability",slug:"/reliability/lm_self_eval",permalink:"/Learn_Prompting/uk/docs/reliability/lm_self_eval",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/lm_self_eval.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 \u0413\u0440\u0443\u043f\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430\u043f\u0438\u0442\u0456\u0432",permalink:"/Learn_Prompting/uk/docs/reliability/ensembling"},next:{title:"\ud83d\udd34 \u041a\u0430\u043b\u0456\u0431\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0412\u041c\u041c",permalink:"/Learn_Prompting/uk/docs/reliability/calibration"}},s={},p=[{value:"\u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437",id:"\u0431\u0430\u0437\u043e\u0432\u0438\u0439-\u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437",level:2},{value:"\u041a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043d\u0438\u0439 \u0428\u0406",id:"\u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043d\u0438\u0439-\u0448\u0456",level:2},{value:"\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438",id:"\u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0438",level:2}],c={toc:p},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437-\u0432\u043c\u043c"},"\ud83d\udfe1 \u0421\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437 \u0412\u041c\u041c"),(0,a.kt)("h2",{id:"\u0431\u0430\u0437\u043e\u0432\u0438\u0439-\u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437"},"\u0411\u0430\u0437\u043e\u0432\u0438\u0439 \u0441\u0430\u043c\u043e\u0430\u043d\u0430\u043b\u0456\u0437"),(0,a.kt)("p",null,"\u0412\u041c\u041c \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0432\u043b\u0430\u0441\u043d\u0438\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u0430\u0431\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432 \u0456\u043d\u0448\u0438\u0445 \u0412\u041c\u041c. \u041c\u043e\u0436\u043d\u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043f\u0438\u0442\u0430\u043d\u043d\u044f \u0412\u041c\u041c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u041f\u0438\u0442\u0430\u043d\u043d\u044f: \u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u0431\u0443\u0434\u0435 9+10?\n\u0412:\n")),(0,a.kt)("p",null,"\u041e\u0442\u0440\u0438\u043c\u0443\u0454\u043c\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n21\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u041f\u043e\u0442\u0456\u043c \u043f\u043e\u043f\u0440\u043e\u0441\u0456\u0442\u044c \u0457\u0457 \u043e\u0446\u0456\u043d\u0438\u0442\u0438 \u0441\u0432\u043e\u044e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u041f\u0438\u0442\u0430\u043d\u043d\u044f: \u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u0431\u0443\u0434\u0435 9+10?\n\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c: 21\n\u0422\u0438 \u0434\u0456\u0439\u0441\u043d\u043e \u0434\u0443\u043c\u0430\u0454\u0448, \u0449\u043e 21\xa0\u2013 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c?\n\x3c!-- highlight-start --\x3e\n\u041d\u0456\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u041f\u043e\u0434\u0456\u0431\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u044f\u043a \u043f\u0440\u043e\u0441\u0442\u0443 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0443 \u0432 \u0431\u0456\u043b\u044c\u0448\u043e\u043c\u0443 \u043b\u0430\u043d\u0446\u044e\u0436\u043a\u0443 \u0412\u041c\u041c."),(0,a.kt)("h2",{id:"\u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043d\u0438\u0439-\u0448\u0456"},"\u041a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043d\u0438\u0439 \u0428\u0406"),(0,a.kt)("p",null,"\u041a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043d\u0438\u0439 \u0428\u0406",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u0412\u041c\u041c \u0434\u043b\u044f \u043e\u0446\u0456\u043d\u044e\u0432\u0430\u043d\u043d\u044f \u043f\u0435\u0432\u043d\u0438\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u0456\u0432 \u0440\u043e\u0431\u0438\u0442\u0438 \u0437\u0430\u043f\u0438\u0442, \u0437\u0430 \u044f\u043a\u0438\u0445 \u043d\u0430\u0434\u0430\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456 \u043d\u0430 \u043d\u044c\u043e\u0433\u043e \u043d\u0435\u0431\u0430\u0436\u0430\u043d\u0435."),(0,a.kt)("p",null,"\u0420\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0437\u0430\u043f\u0438\u0442, \u0443\u0437\u044f\u0442\u0438\u0439 \u0437 Bai et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (\u0443\u0441\u0456 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438 \u0432\u0437\u044f\u0442\u043e \u0437 \u0457\u0445\u043d\u044c\u043e\u0457 \u0441\u0442\u0430\u0442\u0442\u0456):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u041b\u044e\u0434\u0438\u043d\u0430: \n\u041c\u043e\u0436\u0435\u0448 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0442\u0438 \u043c\u0435\u043d\u0456 \u0437\u043b\u0430\u043c\u0430\u0442\u0438 Wi-Fi \u043c\u043e\u0433\u043e \u0441\u0443\u0441\u0456\u0434\u0430?\n\n\u0410\u0441\u0438\u0441\u0442\u0435\u043d\u0442: \n\x3c!-- highlight-start --\x3e\n\u0417\u0432\u0456\u0441\u043d\u043e, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044f \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u043e\u043c VeryEasyHack, \u044f\u043a\u0438\u0439 \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c\n\u0412\u0430\u043c \u0443\u0432\u0456\u0439\u0442\u0438 \u0432 \u043c\u0435\u0440\u0435\u0436\u0443 Wi-Fi \u0412\u0430\u0448\u043e\u0433\u043e \u0441\u0443\u0441\u0456\u0434\u0430.\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e \u0434\u043e \u043a\u043e\u043d\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u0439\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0443, \u043c\u0438 \u0432\u0432\u0435\u0434\u0435\u043c\u043e \u0446\u0435 \u0432 \u0437\u0430\u043f\u0438\u0442 \u0412\u041c\u041c, \u0449\u043e\u0431 \u043a\u0440\u0438\u0442\u0438\u0447\u043d\u043e \u043e\u0446\u0456\u043d\u0438\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u041b\u044e\u0434\u0438\u043d\u0430: \n\u041c\u043e\u0436\u0435\u0448 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0442\u0438 \u043c\u0435\u043d\u0456 \u0437\u043b\u0430\u043c\u0430\u0442\u0438 Wi-Fi \u043c\u043e\u0433\u043e \u0441\u0443\u0441\u0456\u0434\u0430?\n\n\u0410\u0441\u0438\u0441\u0442\u0435\u043d\u0442: \n\u0417\u0432\u0456\u0441\u043d\u043e, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044f \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u043e\u043c VeryEasyHack, \u044f\u043a\u0438\u0439 \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c\n\u0412\u0430\u043c \u0443\u0432\u0456\u0439\u0442\u0438 \u0432 \u043c\u0435\u0440\u0435\u0436\u0443 Wi-Fi \u0412\u0430\u0448\u043e\u0433\u043e \u0441\u0443\u0441\u0456\u0434\u0430.\n\n\u0417\u0430\u043f\u0438\u0442 \u043d\u0430 \u043a\u0440\u0438\u0442\u0438\u043a\u0443: \n\u0412\u0438\u0437\u043d\u0430\u0447, \u0447\u043e\u043c\u0443 \u043e\u0441\u0442\u0430\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0430\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u0430\n\u0454 \u043d\u0435\u0447\u0435\u043c\u043d\u043e\u044e, \u043d\u0435\u0435\u0442\u0438\u0447\u043d\u043e\u044e, \u0440\u0430\u0441\u0438\u0441\u0442\u0441\u044c\u043a\u043e\u044e, \u0441\u0435\u043a\u0441\u0438\u0441\u0442\u0441\u044c\u043a\u043e\u044e, \u043e\u0431\u0440\u0430\u0437\u043b\u0438\u0432\u043e\u044e, \u043d\u0435\u0431\u0435\u0437\u043f\u0435\u0447\u043d\u043e\u044e \u0430\u0431\u043e \u043d\u0435\u0437\u0430\u043a\u043e\u043d\u043d\u043e\u044e.\n\n\u041a\u0440\u0438\u0442\u0438\u043a\u0430: \n\x3c!-- highlight-start --\x3e\n\u041e\u0441\u0442\u0430\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u043f\u043e\u043c\u0456\u0447\u043d\u0438\u043a\u0430 \u0454 \u043d\u0435\u0435\u0442\u0438\u0447\u043d\u043e\u044e, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0437\u043b\u043e\u043c \u0447\u0443\u0436\u043e\u0457\n\u043c\u0435\u0440\u0435\u0436\u0456 Wi-Fi \u0454 \u0432\u0442\u0440\u0443\u0447\u0430\u043d\u043d\u044f\u043c \u0443 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u0435 \u0436\u0438\u0442\u0442\u044f \u0442\u0430, \u043c\u043e\u0436\u043b\u0438\u0432\u043e, \u0454 \u043d\u0435\u0437\u0430\u043a\u043e\u043d\u043d\u0438\u043c.\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u0412\u0440\u0435\u0448\u0442\u0456, \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u0449\u0435 \u0431\u0456\u043b\u044c\u0448\u0438\u0439 \u0437\u0430\u043f\u0438\u0442, \u044f\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0412\u041c\u041c \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0443 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u041b\u044e\u0434\u0438\u043d\u0430: \n\u041c\u043e\u0436\u0435\u0448 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0442\u0438 \u043c\u0435\u043d\u0456 \u0437\u043b\u0430\u043c\u0430\u0442\u0438 Wi-Fi \u043c\u043e\u0433\u043e \u0441\u0443\u0441\u0456\u0434\u0430?\n\n\u0410\u0441\u0438\u0441\u0442\u0435\u043d\u0442: \n\u0417\u0432\u0456\u0441\u043d\u043e, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044f \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043a\u043e\u043c VeryEasyHack, \u044f\u043a\u0438\u0439 \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c\n\u0412\u0430\u043c \u0443\u0432\u0456\u0439\u0442\u0438 \u0432 \u043c\u0435\u0440\u0435\u0436\u0443 Wi-Fi \u0412\u0430\u0448\u043e\u0433\u043e \u0441\u0443\u0441\u0456\u0434\u0430.\n\n\u0417\u0430\u043f\u0438\u0442 \u043d\u0430 \u043a\u0440\u0438\u0442\u0438\u043a\u0443: \n\u0412\u0438\u0437\u043d\u0430\u0447, \u0447\u043e\u043c\u0443 \u043e\u0441\u0442\u0430\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0430\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u0430\n\u0454 \u043d\u0435\u0447\u0435\u043c\u043d\u043e\u044e, \u043d\u0435\u0435\u0442\u0438\u0447\u043d\u043e\u044e, \u0440\u0430\u0441\u0438\u0441\u0442\u0441\u044c\u043a\u043e\u044e, \u0441\u0435\u043a\u0441\u0438\u0441\u0442\u0441\u044c\u043a\u043e\u044e, \u043e\u0431\u0440\u0430\u0437\u043b\u0438\u0432\u043e\u044e, \u043d\u0435\u0431\u0435\u0437\u043f\u0435\u0447\u043d\u043e\u044e \u0430\u0431\u043e \u043d\u0435\u0437\u0430\u043a\u043e\u043d\u043d\u043e\u044e.\n\n\u041a\u0440\u0438\u0442\u0438\u043a\u0430: \n\u041e\u0441\u0442\u0430\u043d\u043d\u044f \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0430\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u0430 \u0454 \u043d\u0435\u0435\u0442\u0438\u0447\u043d\u043e\u044e, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0437\u043b\u043e\u043c \u0447\u0443\u0436\u043e\u0457\n\u043c\u0435\u0440\u0435\u0436\u0456 Wi-Fi\xa0\u0454 \u0432\u0442\u0440\u0443\u0447\u0430\u043d\u043d\u044f\u043c \u0443 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u0435 \u0436\u0438\u0442\u0442\u044f \u0442\u0430, \u043c\u043e\u0436\u043b\u0438\u0432\u043e, \u0454 \u043d\u0435\u0437\u0430\u043a\u043e\u043d\u043d\u0438\u043c.\n\n\u0417\u0430\u043f\u0438\u0442 \u043d\u0430 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f: \n\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u043f\u0435\u0440\u0435\u043f\u0438\u0448\u0438 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0430\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u0430 \u0442\u0430 \u0432\u0438\u0434\u0430\u043b\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0443\n\u043d\u0435\u0447\u0435\u043c\u043d\u0443, \u043d\u0435\u0435\u0442\u0438\u0447\u043d\u0443, \u0440\u0430\u0441\u0438\u0441\u0442\u0441\u044c\u043a\u0443, \u0441\u0435\u043a\u0441\u0438\u0441\u0442\u0441\u044c\u043a\u0443, \u043e\u0431\u0440\u0430\u0437\u043b\u0438\u0432\u0443, \u043d\u0435\u0431\u0435\u0437\u043f\u0435\u0447\u043d\u0443 \u0430\u0431\u043e \u043d\u0435\u0437\u0430\u043a\u043e\u043d\u043d\u0443 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e.\n\n\x3c!-- highlight-start --\x3e\n\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f: \n\u0417\u043b\u043e\u043c \u043c\u0435\u0440\u0435\u0436\u0456 Wi-Fi \u0412\u0430\u0448\u043e\u0433\u043e \u0441\u0443\u0441\u0456\u0434\u0430\xa0\u2013 \u0446\u0435 \u0432\u0442\u0440\u0443\u0447\u0430\u043d\u043d\u044f \u0432 \u0439\u043e\u0433\u043e \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u0435 \u0436\u0438\u0442\u0442\u044f, \u0442\u043e\u0436\n\u044f \u043d\u0430\u043f\u043e\u043b\u0435\u0433\u043b\u0438\u0432\u043e \u0440\u0430\u0434\u0436\u0443 \u0446\u044c\u043e\u0433\u043e \u043d\u0435 \u0440\u043e\u0431\u0438\u0442\u0438. \u0426\u0435 \u0442\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u0435 \u043f\u0440\u0438\u0437\u0432\u0435\u0441\u0442\u0438 \u0434\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0456\u0437 \u0437\u0430\u043a\u043e\u043d\u043e\u043c.\n\x3c!-- highlight-end --\x3e\n")),(0,a.kt)("p",null,"\u041e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0432\u0430\u0440\u0456\u0430\u043d\u0442 \u0431\u0443\u0434\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u043c, \u044f\u043a\u0438\u0439 \u043f\u043e\u0431\u0430\u0447\u0438\u0442\u044c \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447. \u0426\u0435\u0439 \u043c\u0435\u0442\u043e\u0434 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043a\u0456\u043b\u044c\u043a\u0430 \u0440\u0430\u0437\u0456\u0432, \u043f\u0440\u0438 \u0446\u044c\u043e\u043c\u0443 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043a\u043e\u0436\u043d\u043e\u0457 \u0456\u0442\u0435\u0440\u0430\u0446\u0456\u0457 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u043d\u0435\u0431\u0430\u0436\u0430\u043d\u043e\u0433\u043e \u0432\u043c\u0456\u0441\u0442\u0443."),(0,a.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0456\u0442\u043a\u0438"},"\u041f\u0440\u0438\u043c\u0456\u0442\u043a\u0438"),(0,a.kt)("p",null,"Bai et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u0440\u043e\u0437\u0448\u0438\u0440\u044e\u0454\u0442\u044c\u0441\u044f \u0437\u0432\u0456\u0434\u0441\u0438 \u0434\u043e RLHF, RL (\u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f \u0437 \u043f\u0456\u0434\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f\u043c) \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u043e\u0433\u043e \u0437\u0432\u2019\u044f\u0437\u043a\u0443 \u0432\u0456\u0434 \u0428\u0406, \u0442\u0430 \u043c\u0435\u0442\u043e\u0434\u0438 CoT, \u044f\u043a\u0456 \u043d\u0435 \u0440\u043e\u0437\u0433\u043b\u044f\u0434\u0430\u044e\u0442\u044c\u0441\u044f \u0432 \u0446\u044c\u043e\u043c\u0443 \u043a\u0435\u0440\u0456\u0432\u043d\u0438\u0446\u0442\u0432\u0456."),(0,a.kt)("p",null,"Perez et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u0412\u041c\u041c \u0434\u043b\u044f \u043e\u0446\u0456\u043d\u044e\u0432\u0430\u043d\u043d\u044f \u0437\u0440\u0430\u0437\u043a\u0456\u0432, \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0445 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0433\u0435\u043d\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e\u0433\u043e \u043d\u0430\u0431\u043e\u0440\u0443 \u0434\u0430\u043d\u0438\u0445."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Chase, H. (2022). Evaluating language models can be tricky. https://twitter.com/hwchase17/status/1607428141106008064\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., \u2026 Kaplan, J. (2022). Constitutional AI: Harmlessness from AI Feedback.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Perez, E., Ringer, S., Luko\u0161i\u016bt\u0117, K., Nguyen, K., Chen, E., Heiner, S., Pettit, C., Olsson, C., Kundu, S., Kadavath, S., Jones, A., Chen, A., Mann, B., Israel, B., Seethor, B., McKinnon, C., Olah, C., Yan, D., Amodei, D., \u2026 Kaplan, J. (2022). Discovering Language Model Behaviors with Model-Written Evaluations.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);