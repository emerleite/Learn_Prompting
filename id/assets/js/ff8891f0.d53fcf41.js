"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6629],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),l=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=l(e.components);return n.createElement(m.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(t),s=r,c=g["".concat(m,".").concat(s)]||g[s]||d[s]||i;return t?n.createElement(c,o(o({ref:a},u),{},{components:t})):n.createElement(c,o({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=s;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p[g]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},15296:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>l,default:()=>f,frontMatter:()=>m,metadata:()=>u,toc:()=>d});var n=t(87462),r=(t(67294),t(3905));const i=t.p+"assets/images/mountains-879e27bb217169838c5ce1f49cebc1a0.webp",o=t.p+"assets/images/mountains_no_trees-36a39df6b44f0e6e24f1238a29c2e034.webp",p=t.p+"assets/images/planets-ba6764aa7046af4d18b4e24ce3caeeed.webp",m={sidebar_position:60},l="\ud83d\udfe2 Menggunakan Bobot",u={unversionedId:"image_prompting/weighted_terms",id:"image_prompting/weighted_terms",title:"\ud83d\udfe2 Menggunakan Bobot",description:"Beberapa model (Stable Diffusion, Midjourney, dll.) memungkinkan Anda memberi bobot pada istilah dalam prompt. Ini dapat digunakan untuk menekankan kata-kata atau frasa tertentu dalam gambar yang dihasilkan. Ini juga dapat digunakan untuk mengurangi penekanan pada kata atau frasa tertentu dalam gambar yang dihasilkan. Mari kita pertimbangkan contoh sederhana",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/image_prompting/weighted_terms.md",sourceDirName:"image_prompting",slug:"/image_prompting/weighted_terms",permalink:"/Learn_Prompting/id/docs/image_prompting/weighted_terms",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/weighted_terms.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Pengulangan",permalink:"/Learn_Prompting/id/docs/image_prompting/repetition"},next:{title:"\ud83d\udfe2 Memperbaiki Hasil yang Cacat",permalink:"/Learn_Prompting/id/docs/image_prompting/fix_deformed_generations"}},g={},d=[{value:"Catatan",id:"catatan",level:2}],s=(c="LazyLoadImage",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const b={toc:d},k="wrapper";function f(e){let{components:a,...t}=e;return(0,r.kt)(k,(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-menggunakan-bobot"},"\ud83d\udfe2 Menggunakan Bobot"),(0,r.kt)("p",null,"Beberapa model (Stable Diffusion, Midjourney, dll.) memungkinkan Anda memberi bobot pada istilah dalam prompt. Ini dapat digunakan untuk menekankan kata-kata atau frasa tertentu dalam gambar yang dihasilkan. Ini juga dapat digunakan untuk mengurangi penekanan pada kata atau frasa tertentu dalam gambar yang dihasilkan. Mari kita pertimbangkan contoh sederhana: berikut:"),(0,r.kt)("h1",{id:"contoh"},"Contoh"),(0,r.kt)("p",null,"Ini adalah beberapa gunung yang dihasilkan oleh Stable Diffusion, dengan prompt ",(0,r.kt)("inlineCode",{parentName:"p"},"mountain"),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i,style:{width:"350px"}})),(0,r.kt)("p",null,"Namun, jika kita ingin pegunungan tanpa pepohonan, kita bisa menggunakan prompt ",(0,r.kt)("inlineCode",{parentName:"p"},"gunung | tree:-10"),". Karena kami memberi bobot negatif yang sangat tinggi pada pohon, mereka tidak muncul di gambar yang dihasilkan."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(s,{src:o,style:{width:"350px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"Kata berbobot dapat digabungkan menjadi permintaan yang lebih rumit, seperti ",(0,r.kt)("inlineCode",{parentName:"p"},"A planet in space:10 | bursting with color red, blue, and purple:4 | aliens:-10 | 4K, high quality")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(s,{src:p,style:{width:"350px"},mdxType:"LazyLoadImage"})),(0,r.kt)("h2",{id:"catatan"},"Catatan"),(0,r.kt)("p",null,"Baca lebih lanjut tentang pembobotan dalam beberapa sumber di akhir bab ini."))}f.isMDXComponent=!0}}]);