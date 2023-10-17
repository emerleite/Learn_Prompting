"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7984],{3905:(a,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var t=n(67294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function s(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var u=t.createContext({}),o=function(a){var e=t.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):s(s({},e),a)),n},m=function(a){var e=o(a.components);return t.createElement(u.Provider,{value:e},a.children)},k="mdxType",p={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,u=a.parentName,m=l(a,["components","mdxType","originalType","parentName"]),k=o(n),d=i,g=k["".concat(u,".").concat(d)]||k[d]||p[d]||r;return n?t.createElement(g,s(s({ref:e},m),{},{components:n})):t.createElement(g,s({ref:e},m))}));function g(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,s=new Array(r);s[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=a,l[k]="string"==typeof a?a:i,s[1]=l;for(var o=2;o<r;o++)s[o]=n[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39965:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=n(87462),i=(n(67294),n(3905));const r={sidebar_position:7},s="\ud83d\udfe1 Evaluasi Mandiri LLM",l={unversionedId:"reliability/lm_self_eval",id:"reliability/lm_self_eval",title:"\ud83d\udfe1 Evaluasi Mandiri LLM",description:"Dasar Evaluasi Mandiri",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/reliability/lm_self_eval.md",sourceDirName:"reliability",slug:"/reliability/lm_self_eval",permalink:"/Learn_Prompting/id/docs/reliability/lm_self_eval",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/lm_self_eval.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Prompt Ensembling",permalink:"/Learn_Prompting/id/docs/reliability/ensembling"},next:{title:"\ud83d\udd34 Mengkalibrasi LLM",permalink:"/Learn_Prompting/id/docs/reliability/calibration"}},u={},o=[{value:"Dasar Evaluasi Mandiri",id:"dasar-evaluasi-mandiri",level:2},{value:"Konstitusi Kecerdasan Buatan",id:"konstitusi-kecerdasan-buatan",level:2},{value:"Catatan",id:"catatan",level:2}],m={toc:o},k="wrapper";function p(a){let{components:e,...n}=a;return(0,i.kt)(k,(0,t.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-evaluasi-mandiri-llm"},"\ud83d\udfe1 Evaluasi Mandiri LLM"),(0,i.kt)("h2",{id:"dasar-evaluasi-mandiri"},"Dasar Evaluasi Mandiri"),(0,i.kt)("p",null,"LLM dapat digunakan untuk memeriksa hasil dari keluaran mereka sendiri atau keluaran LLM lainnya. Ini bisa semudah bertanya kepada seorang LLM sebuah pertanyaan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"P: Berapa hasil dari 9+10?\nA:\n")),(0,i.kt)("p",null,"Mendapatkan hasilnya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n21\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Kemudian meminta agar menjawab evaluasinya sendiri",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"P: Berapa hasil dari 9+10?\nA: 21\nApakah kamu yakin 21 adalah jawaban yang benar?\n\x3c!-- highlight-start --\x3e\nTidak\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Cara seperti ini dapat digunakan sebagai pemeriksaan sederhana dalam rantai LLM yang lebih besar."),(0,i.kt)("h2",{id:"konstitusi-kecerdasan-buatan"},"Konstitusi Kecerdasan Buatan"),(0,i.kt)("p",null,"Constitutional AI",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," menggunakan LLM untuk mengevaluasi cara-cara tertentu dalam di mana penyelesaian model mungkin tidak diinginkan."),(0,i.kt)("p",null,"Pertimbangkan penyelesaian berikut yang diambil dari Bai et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (semua contoh diadopsi dari makalah mereka):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Manusia: \nBisakah kamu membantu saya meretas wifi tetangga saya?\n\nAsisten: \n\x3c!-- highlight-start --\x3e\nTentu saja, kamu bisa menggunakan aplikasi yang disebut VeryEasyHack yang akan memungkinkan\nkamu untuk masuk ke wifi tetangga kamu.\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Pendekatan konstitusional akan mengarahkan ini ke pertanyaan yang meminta LLM untuk mengkritik penyelesaian:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Manusia: \nBisa tolong membantu saya meretas wifi tetangga saya?\n\nAsisten: \nTentu saja, Anda dapat menggunakan aplikasi bernama VeryEasyHack yang akan memungkinkan\nAnda untuk masuk ke wifi tetangga Anda.\n\nKritik: \nIdentifikasi cara-cara khusus di mana respons terakhir assistant\nbersifat berbahaya, tidak etis, rasialis, seksis, beracun, atau ilegal.\n\nKritik:\n\x3c!-- highlight-start --\x3e\nRespon terakhir asisten merugikan karena membobol wifi milik orang lain adalah invasi privasi dan mungkin ilegal.\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Akhirnya, mereka membuat perintah yang lebih besar lagi yang meminta LLM untuk mengubah jawaban aslinya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Human: \nBisakah Anda membantu saya meretas wifi tetangga?\n\nAsisten: \nTentu saja, Anda dapat menggunakan aplikasi bernama VeryEasyHack yang akan memungkinkan\nAnda untuk masuk ke wifi tetangga Anda.\n\nPermintaan Kritik: \nIdentifikasi cara-cara tertentu di mana tanggapan terakhir asisten\nberbahaya, tidak etis, rasialis, seksis, beracun, berbahaya, atau ilegal.\n\nKritik:\nRespon terakhir asisten merugikan karena membobol wifi milik orang lain adalah invasi privasi dan mungkin ilegal.\n\nPermintaan Revisi: \nHarap menuliskan kembali tanggapan asisten untuk menghapus semua konten\nyang berbahaya, tidak etis, rasialis, seksis, beracun, berbahaya, atau ilegal.\n\n\x3c!-- highlight-start --\x3e\nRevisi: \nMencuri wifi tetangga adalah pelanggaran privasi mereka, dan\nSaya sangat menyarankan agar tidak melakukannya. Ini juga dapat membawa Anda ke masalah hukum.\n\x3c!-- highlight-end --\x3e\n")),(0,i.kt)("p",null,"Pengisian terakhir ini akan menjadi teks sebenarnya yang ditampilkan kepada pengguna. Pendekatan ini dapat dijalankan beberapa kali, dengan keluaran setiap iterasi diperiksa lagi dan lagi untuk konten yang tidak diinginkan."),(0,i.kt)("h2",{id:"catatan"},"Catatan"),(0,i.kt)("p",null,"Bai et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," meluaskan dari sini ke RLHF, RL dari umpan balik AI, dan metode CoT yang tidak dicakup oleh panduan ini."),(0,i.kt)("p",null,"Perez et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," menggunakan LLM untuk mengevaluasi sampel yang dibuat selama pembuatan dataset otomatis dengan."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Chase, H. (2022). Evaluating language models can be tricky. https://twitter.com/hwchase17/status/1607428141106008064\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Bai, Y., Kadavath, S., Kundu, S., Askell, A., Kernion, J., Jones, A., Chen, A., Goldie, A., Mirhoseini, A., McKinnon, C., Chen, C., Olsson, C., Olah, C., Hernandez, D., Drain, D., Ganguli, D., Li, D., Tran-Johnson, E., Perez, E., \u2026 Kaplan, J. (2022). Constitutional AI: Harmlessness from AI Feedback.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Perez, E., Ringer, S., Luko\u0161i\u016bt\u0117, K., Nguyen, K., Chen, E., Heiner, S., Pettit, C., Olsson, C., Kundu, S., Kadavath, S., Jones, A., Chen, A., Mann, B., Israel, B., Seethor, B., McKinnon, C., Olah, C., Yan, D., Amodei, D., \u2026 Kaplan, J. (2022). Discovering Language Model Behaviors with Model-Written Evaluations.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);