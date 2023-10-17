"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7319],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,o(o({ref:e},c),{},{components:n})):a.createElement(g,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19640:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:0},o="\ud83d\udfe2 Structuring Data",l={unversionedId:"basic_applications/table_generation",id:"basic_applications/table_generation",title:"\ud83d\udfe2 Structuring Data",description:"One simple and exciting use case for LLMs is organizing data into tables. Perhaps you have a bunch of news articles or business reports, and you would like all of the important points to be summarized in a table that you can then put into a spreadsheet or database. Chat bots like ChatGPT can help you do this.",source:"@site/docs/basic_applications/table_generation.md",sourceDirName:"basic_applications",slug:"/basic_applications/table_generation",permalink:"/en/docs/basic_applications/table_generation",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/table_generation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introduction",permalink:"/en/docs/basic_applications/introduction"},next:{title:"\ud83d\udfe2 Writing An Email",permalink:"/en/docs/basic_applications/writing_emails"}},p={},s=[],c={toc:s},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-structuring-data"},"\ud83d\udfe2 Structuring Data"),(0,r.kt)("p",null,"One simple and exciting use case for LLMs is organizing data into tables. Perhaps you have a bunch of news articles or business reports, and you would like all of the important points to be summarized in a table that you can then put into a spreadsheet or database. Chat bots like ChatGPT can help you do this."),(0,r.kt)("p",null,"We can extract information from the following report by appending ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate a table containing this information:")," to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"In a recent business report presentation, the CEO of Zana Corp. highlighted their remarkable growth in the past fiscal year. She shared that the company experienced a 15% increase in revenue, reaching $50 million, with a 12% profit margin ($6 million in net profit). The report also showcased a 20% growth in their customer base, now totaling 100,000 customers. Additionally, the company's operating expenses went up by 10%, amounting to $10 million, while the employee headcount increased by 25%, resulting in a current workforce of 500 employees. \n\nGenerate a table containing this information:\n")),(0,r.kt)("p",null,"ChatGPT will output a table like the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Revenue"),(0,r.kt)("td",{parentName:"tr",align:null},"$50 million")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Profit Margin"),(0,r.kt)("td",{parentName:"tr",align:null},"12%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Net Profit"),(0,r.kt)("td",{parentName:"tr",align:null},"$6 million")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customer Base"),(0,r.kt)("td",{parentName:"tr",align:null},"100,000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Expenses"),(0,r.kt)("td",{parentName:"tr",align:null},"$10 million")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Employee Headcount"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Revenue Increase"),(0,r.kt)("td",{parentName:"tr",align:null},"15%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customer Increase"),(0,r.kt)("td",{parentName:"tr",align:null},"20%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Expenses Increase"),(0,r.kt)("td",{parentName:"tr",align:null},"10%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Employee Headcount Increase"),(0,r.kt)("td",{parentName:"tr",align:null},"25%")))),(0,r.kt)("p",null,"You can then copy and paste it into a spreadsheet like Excel/Sheets or even documents and powerpoints."))}m.isMDXComponent=!0}}]);