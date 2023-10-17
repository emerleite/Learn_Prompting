"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8584],{34328:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(87462),i=(t(67294),t(3905)),o=t(39145);const r={sidebar_position:1},s="\ud83d\udfe2 Introducci\xf3n",l={unversionedId:"reliability/intro",id:"reliability/intro",title:"\ud83d\udfe2 Introducci\xf3n",description:"Este cap\xedtulo cubre c\xf3mo hacer que las completaciones sean m\xe1s confiables, as\xed como c\xf3mo implementar verificaciones para asegurar que las salidas sean confiables.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/reliability/intro.md",sourceDirName:"reliability",slug:"/reliability/intro",permalink:"/Learn_Prompting/es/docs/reliability/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f Reliability",permalink:"/Learn_Prompting/es/docs/category/\ufe0f-reliability"},next:{title:"\ud83d\udfe2 Eliminaci\xf3n de sesgos",permalink:"/Learn_Prompting/es/docs/reliability/debiasing"}},p={},c=[],m={toc:c},d="wrapper";function u(e){let{components:a,...t}=e;return(0,i.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-introducci\xf3n"},"\ud83d\udfe2 Introducci\xf3n"),(0,i.kt)("p",null,"Este cap\xedtulo cubre c\xf3mo hacer que las completaciones sean m\xe1s confiables, as\xed como c\xf3mo implementar verificaciones para asegurar que las salidas sean confiables."),(0,i.kt)("p",null,"Hasta cierto punto, la mayor\xeda de las t\xe9cnicas anteriores cubiertas tienen que ver con mejorar la precisi\xf3n de las completaciones y, por lo tanto, la confiabilidad, en particular la autoconsistencia",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Sin embargo, hay una serie de otras t\xe9cnicas que se pueden utilizar para mejorar la confiabilidad, m\xe1s all\xe1 de las estrategias b\xe1sicas de generaci\xf3n de entradas."),(0,i.kt)("p",null,"Los ",(0,i.kt)("a",{parentName:"p",id:"LLM_0_4_1697555897706","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLMs"),(0,i.kt)(o.u,{anchorId:"LLM_0_4_1697555897706",clickable:!0,mdxType:"Tooltip"})," exhiben diversos problemas, incluyendo alucinaciones",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", explicaciones defectuosas con los m\xe9todos de generaci\xf3n de entradas ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_5_70_1697555897706","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,i.kt)(o.u,{anchorId:"CoT prompting_5_70_1697555897706",clickable:!0,mdxType:"Tooltip"}),(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", y m\xfaltiples sesgos, incluyendo sesgo de la etiqueta mayoritaria, sesgo de recencia y sesgo de token com\xfan",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". Adem\xe1s, la generaci\xf3n de entradas de cero disparo CoT puede ser particularmente sesgada al tratar temas sensibles",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"."),(0,i.kt)("p",null,"Las soluciones comunes para algunos de estos problemas incluyen calibradores para eliminar los sesgos ",(0,i.kt)("em",{parentName:"p"},"a priori"),", y verificadores para puntuar las completaciones, as\xed como promover la diversidad en las completaciones."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},"Shaikh, O., Zhang, H., Held, W., Bernstein, M., & Yang, D. (2022). On Second Thought, Let\u2019s Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);