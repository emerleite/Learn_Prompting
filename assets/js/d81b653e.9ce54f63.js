"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2982],{87826:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=t(87462),i=(t(67294),t(3905)),s=t(39145);const n={sidebar_position:3},r="\ud83d\udfe2 Removendo bias",l={unversionedId:"reliability/debiasing",id:"reliability/debiasing",title:"\ud83d\udfe2 Removendo bias",description:"Esta p\xe1gina aborda algumas t\xe9cnicas simples para removerrespostas tendenciosas em seus prompts.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/reliability/debiasing.md",sourceDirName:"reliability",slug:"/reliability/debiasing",permalink:"/docs/reliability/debiasing",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/debiasing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Introdu\xe7\xe3o",permalink:"/docs/reliability/intro"},next:{title:"\ud83d\udfe1 Montagem de prompts / M\xe9todos de ensamblagem",permalink:"/docs/reliability/ensembling"}},m={},d=[{value:"Desbiasando Prompts",id:"desbiasando-prompts",level:2},{value:"Distribui\xe7\xe3o",id:"distribui\xe7\xe3o",level:3},{value:"Pior:",id:"pior",level:4},{value:"Melhor:",id:"melhor",level:4},{value:"Ordem",id:"ordem",level:3},{value:"Melhor:",id:"melhor-1",level:4},{value:"Removendo Bias em Instru\xe7\xf5es",id:"removendo-bias-em-instru\xe7\xf5es",level:2},{value:"Notas",id:"notas",level:2}],p={toc:d},u="wrapper";function c(e){let{components:a,...t}=e;return(0,i.kt)(u,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-removendo-bias"},"\ud83d\udfe2 Removendo bias"),(0,i.kt)("p",null,"Esta p\xe1gina aborda algumas t\xe9cnicas simples para removerrespostas tendenciosas em seus prompts."),(0,i.kt)("h2",{id:"desbiasando-prompts"},"Desbiasando Prompts"),(0,i.kt)("p",null,"Dependendo de sua distribui\xe7\xe3o e ordem dentro do prompt, os ",(0,i.kt)("a",{parentName:"p",id:"exemplars_0_60_1697567660076","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplares"),(0,i.kt)(s.u,{anchorId:"exemplars_0_60_1697567660076",clickable:!0,mdxType:"Tooltip"})," podem influenciar os resultados da LLM",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Isso \xe9 discutido em parte na p\xe1gina ",(0,i.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/intermediate/whats_in_a_prompt"},"O que est\xe1 dentro de um prompt"),"."),(0,i.kt)("h3",{id:"distribui\xe7\xe3o"},"Distribui\xe7\xe3o"),(0,i.kt)("p",null,"Quando discutimos a distribui\xe7\xe3o de exemplares dentro de um prompt, estamos nos referindo a quantos exemplares de diferentes classes est\xe3o presentes. Por exemplo, se voc\xea estiver realizando uma an\xe1lise bin\xe1ria de ",(0,i.kt)("a",{parentName:"p",id:"sentiment analysis_0_213_1697567660076","data-tooltip-html":"Sentiment analysis is the task of classifying text into positive, negative, or other sentiments.","data-tooltip-place":"top"},"sentimento"),(0,i.kt)(s.u,{anchorId:"sentiment analysis_0_213_1697567660076",clickable:!0,mdxType:"Tooltip"})," em tweets, e voc\xea fornecer 3 tweets positivos e 1 tweet negativo como exemplares, ent\xe3o voc\xea ter\xe1 uma distribui\xe7\xe3o de 3:1. Como a distribui\xe7\xe3o est\xe1 desequilibrada para os tweets positivos, o modelo estar\xe1 inclinado a prever tweets positivos."),(0,i.kt)("h4",{id:"pior"},"Pior:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "Que lindo dia!"\nA: positivo\n\nQ: Tweet: "Eu amo bolsos em jeans"\nA: positivo\n\nQ: Tweet: "Eu amo Hotpockets"\nA: positivo\n\nQ: Tweet: "Eu odeio essa classe"\nA: negativo\n')),(0,i.kt)("h4",{id:"melhor"},"Melhor:"),(0,i.kt)("p",null,"Ter uma distribui\xe7\xe3o de exemplares uniforme \xe9 uma op\xe7\xe3o melhor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "Que lindo dia!"\nA: positivo\n\nQ: Tweet: "Eu amo bolsos em jeans"\nA: positivo\n\nQ: Tweet: "Eu n\xe3o gosto de pizza"\nA: negativo\n\nQ: Tweet: "Eu odeio essa classe"\nA: negativo\n')),(0,i.kt)("h3",{id:"ordem"},"Ordem"),(0,i.kt)("p",null,"A ordem dos exemplares tamb\xe9m pode causar um vi\xe9s. Por exemplo, um prompt que tenha exemplares aleatoriamente ordenados geralmente ter\xe1 um desempenho melhor do que o prompt acima, que cont\xe9m tweets positivos em primeiro lugar, seguido de tweets negativos."),(0,i.kt)("h4",{id:"melhor-1"},"Melhor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'Q: Tweet: "Eu odeio essa classe"\nA: negativo\n\nQ: Tweet: "Que lindo dia!"\nA: positivo\n\nQ: Tweet: "Eu n\xe3o gosto de pizza"\nA: negativo\n\nQ: Tweet: "Eu amo bolsos em jeans"\nA: positivo\n')),(0,i.kt)("h2",{id:"removendo-bias-em-instru\xe7\xf5es"},"Removendo Bias em Instru\xe7\xf5es"),(0,i.kt)("p",null,"Podemos explicitamente solicitar ao GPT-3 que seja isento de vi\xe9s, incluindo uma instru\xe7\xe3o para faz\xea-lo no prompt. Em particular, Si et al.",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," usam a seguinte instru\xe7\xe3o ao experimentar com o BBQ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", um benchmark de vi\xe9s."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Devemos tratar as pessoas de diferentes estatutos socioecon\xf4micos, orienta\xe7\xf5es sexuais, religi\xf5es, ra\xe7as, apar\xeancias f\xedsicas, nacionalidades, identidades de g\xeanero, defici\xeancias e idades de maneira igual. Quando n\xe3o temos informa\xe7\xf5es suficientes, devemos escolher a op\xe7\xe3o desconhecida, em vez de fazer suposi\xe7\xf5es com base em nossos estere\xf3tipos.\n")),(0,i.kt)("h2",{id:"notas"},"Notas"),(0,i.kt)("p",null,"Veja mais sobre como remover bias na se\xe7\xe3o de Calibra\xe7\xe3o."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Si, C., Gan, Z., Yang, Z., Wang, S., Wang, J., Boyd-Graber, J., & Wang, L. (2022). Prompting GPT-3 To Be Reliable.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P. M., & Bowman, S. R. (2021). BBQ: A Hand-Built Bias Benchmark for Question Answering.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);