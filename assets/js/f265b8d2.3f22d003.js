"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1630],{8142:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(87462),r=(t(67294),t(3905)),n=t(39145);const i={sidebar_position:1},s="\ud83d\udfe2 Introdu\xe7\xe3o",l={unversionedId:"reliability/intro",id:"reliability/intro",title:"\ud83d\udfe2 Introdu\xe7\xe3o",description:"Este cap\xedtulo aborda como tornar os resultados de prompt podem ser mais confi\xe1veis e como implementar verifica\xe7\xf5es para garantir que essas sa\xeddas sejam confi\xe1veis.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/reliability/intro.md",sourceDirName:"reliability",slug:"/reliability/intro",permalink:"/Learn_Prompting/docs/reliability/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f Reliability",permalink:"/Learn_Prompting/docs/category/\ufe0f-reliability"},next:{title:"\ud83d\udfe2 Removendo bias",permalink:"/Learn_Prompting/docs/reliability/debiasing"}},m={},p=[],d={toc:p},c="wrapper";function f(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-introdu\xe7\xe3o"},"\ud83d\udfe2 Introdu\xe7\xe3o"),(0,r.kt)("p",null,"Este cap\xedtulo aborda como tornar os resultados de prompt podem ser mais confi\xe1veis e como implementar verifica\xe7\xf5es para garantir que essas sa\xeddas sejam confi\xe1veis."),(0,r.kt)("p",null,"At\xe9 certo ponto, a maioria dos t\xe9cnicas abordadas anteriormente t\xeam a ver com a melhoria da precis\xe3o da sa\xedda e, portanto, da confiabilidade, especialmente da autoconsist\xeancia",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". No entanto, existem outras t\xe9cnicas que podem ser usadas para melhorar a confiabilidade, al\xe9m de estrat\xe9gias de engenharia de prompt b\xe1sicas."),(0,r.kt)("p",null,"Os modelos de linguagem comuns (",(0,r.kt)("a",{parentName:"p",id:"LLM_0_32_1697561283482","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLMs"),(0,r.kt)(n.u,{anchorId:"LLM_0_32_1697561283482",clickable:!0,mdxType:"Tooltip"}),") foram considerados mais confi\xe1veis do que esper\xe1vamos na interpreta\xe7\xe3o do que uma prompt est\xe1 tentando dizer, mesmo quando ela cont\xe9m erros de ortografia, frases mal formuladas ou at\xe9 mesmo informa\xe7\xf5es enganosas",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Apesar dessa capacidade, ainda apresentam v\xe1rios problemas, incluindo alucina\xe7\xf5es",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),", explica\xe7\xf5es falhas com m\xe9todos de prompt Cadeia de Pensamento (CdP)",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," e vieses m\xfaltiplos, incluindo vi\xe9s de r\xf3tulo majorit\xe1rio, vi\xe9s de recenticidade e vi\xe9s de token comum",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),". Al\xe9m disso, a t\xe9cnica de CdP sem o uso de amostras pode ser particularmente tendenciosa ao lidar com t\xf3picos sens\xedveis",(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),"."),(0,r.kt)("p",null,"Solu\xe7\xf5es comuns para alguns desses problemas incluem calibradores para remover os vi\xe9s ",(0,r.kt)("em",{parentName:"p"},"a priori"),", verificadores para avaliar as conclus\xf5es, bem como promover a diversidade nas conclus\xf5es."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Webson, A., Loo, A. M., Yu, Q., & Pavlick, E. (2023). Are Language Models Worse than Humans at Following Prompts? It\u2019s Complicated. arXiv:2301.07085v1 [Cs.CL].\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},"Shaikh, O., Zhang, H., Held, W., Bernstein, M., & Yang, D. (2022). On Second Thought, Let\u2019s Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);