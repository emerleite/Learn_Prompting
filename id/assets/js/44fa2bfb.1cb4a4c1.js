"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6100],{94921:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>m,metadata:()=>s,toc:()=>d});var n=t(87462),i=(t(67294),t(3905));const r=t.p+"assets/images/gold_unimportant-769445c9f0cc0c8b26674203220c4163.webp";var l=t(39145);const m={sidebar_position:7},p="\ud83d\udfe2 Apa yang ada dalam Sebuah Prompt?",s={unversionedId:"intermediate/whats_in_a_prompt",id:"intermediate/whats_in_a_prompt",title:"\ud83d\udfe2 Apa yang ada dalam Sebuah Prompt?",description:"Kami telah mencoba beberapa strategi pengingat yang berbeda di halaman-halaman sebelumnya. Halaman ini akan menawarkan beberapa saran umum tentang apa yang sebenarnya penting dalam sebuah permintaan.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/intermediate/whats_in_a_prompt.md",sourceDirName:"intermediate",slug:"/intermediate/whats_in_a_prompt",permalink:"/Learn_Prompting/id/docs/intermediate/whats_in_a_prompt",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/whats_in_a_prompt.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Revisiting Roles",permalink:"/Learn_Prompting/id/docs/intermediate/revisiting_roles"},next:{title:"\ud83e\uddea Applied Prompting",permalink:"/Learn_Prompting/id/docs/category/-applied-prompting"}},o={},d=[{value:"&quot;Ground Truth Matters Little&quot;",id:"ground-truth-matters-little",level:2},{value:"Labelspace Matters",id:"labelspace-matters",level:2},{value:"Format Matters",id:"format-matters",level:2},{value:"Catatan",id:"catatan",level:2}],b={toc:d},g="wrapper";function k(a){let{components:e,...t}=a;return(0,i.kt)(g,(0,n.Z)({},b,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-apa-yang-ada-dalam-sebuah-prompt"},"\ud83d\udfe2 Apa yang ada dalam Sebuah Prompt?"),(0,i.kt)("p",null,"Kami telah mencoba beberapa strategi pengingat yang berbeda di halaman-halaman sebelumnya. Halaman ini akan menawarkan beberapa saran umum tentang apa yang sebenarnya penting dalam sebuah permintaan."),(0,i.kt)("h2",{id:"ground-truth-matters-little"},'"Ground Truth Matters Little"'),(0,i.kt)("p",null,"Secara mengejutkan, ketika memberikan beberapa contoh ",(0,i.kt)("a",{parentName:"p",id:"exemplars_0_54_1697557859364","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplars"),(0,i.kt)(l.u,{anchorId:"exemplars_0_54_1697557859364",clickable:!0,mdxType:"Tooltip"})," dalam permintaan, jawaban yang sesungguhnya (",(0,i.kt)("a",{parentName:"p",id:"gold_labels_3_46_1697557859364","data-tooltip-html":"The correct labels for a given task.","data-tooltip-place":"top"},"gold"),(0,i.kt)(l.u,{anchorId:"gold_labels_3_46_1697557859364",clickable:!0,mdxType:"Tooltip"}),") dalam contoh tidak penting. Seperti yang ditunjukkan pada gambar di bawah ini, memberikan bels|labels%% acak %%lapada contoh hanya sedikit merusak kinerja",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),'. "Demo" adalah sinonim dengan contoh dalam gambar ini.'),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:r,style:{width:"750px"}})),(0,i.kt)("h2",{id:"labelspace-matters"},"Labelspace Matters"),(0,i.kt)("p",null,"Meskipun label emas dalam contoh-contoh bukanlah hal yang penting,%labelspace|labelspace%%. Bahkan menyediakan label acak dari labelspace membantu LLM memahami labelspace dengan lebih baik, dan meningkatkan hasil. Selain itu, mewakili distribusi labelspace dengan baik pada contoh sangat penting. Daripada secara seragam mengambil sampel dari label pada contoh, lebih baik mengambil sampel sesuai dengan distribusi sebenarnya dari label-label."),(0,i.kt)("h2",{id:"format-matters"},"Format Matters"),(0,i.kt)("p",null,"Mungkin bagian paling penting dari contoh adalah bagaimana mereka diformat. Format ini memberitahu LLM cara mengatur format jawabannya dengan benar sesuai dengan petunjuk."),(0,i.kt)("p",null,"Misalnya, pertimbangkan contoh-contoh berikut. Mereka menggunakan kata-kata kapital sebagai jawaban. Meskipun jawabannya benar-benar salah (2+2 bukan 50), GPT-3 dengan benar menjawab pertanyaan terakhir, dan mengikuti format yang lain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Apa hasil dari 2+2? \nLIMA PULUH\nBerapakah 20+5?\nEMPAT PULUH TIGA\nApakah 12+9?\n// highlight-start\nDUA PULUH SATU\n// highlight-end\n")),(0,i.kt)("h2",{id:"catatan"},"Catatan"),(0,i.kt)("p",null,"Antara 4-8 contoh adalah jumlah yang baik untuk digunakan sebagai permintaan tembakan sedikit",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", tapi seringkali berguna untuk menambahkan sebanyak mungkin."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Min, S., Lyu, X., Holtzman, A., Artetxe, M., Lewis, M., Hajishirzi, H., & Zettlemoyer, L. (2022). Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);