"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1787],{6751:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>g,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var s=o(87462),t=(o(67294),o(3905));const r=o.p+"assets/images/self_consistency-b0397f2f058a64fe8ceceeb2ffc5b0c4.webp";var i=o(39145);const n={sidebar_position:5},m="\ud83d\udfe1 Autoconsist\xeancia",d={unversionedId:"intermediate/self_consistency",id:"intermediate/self_consistency",title:"\ud83d\udfe1 Autoconsist\xeancia",description:"A autoconsist\xeancia(@wang2022selfconsistency)\xe9 uma abordagem que simplesmente pergunta a um modelo a mesma prompt v\xe1rias vezes e leva o resultado da maioria das respostas como resposta final. \xc9 uma continua\xe7\xe3o da abordagem da %%Cadeia de Pensamento (CdP ou CoT:Chain of Thought, em ingl\xeas)|CoT prompting%% e \xe9 ainda mais poderosa quando usada em conjunto.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/intermediate/self_consistency.md",sourceDirName:"intermediate",slug:"/intermediate/self_consistency",permalink:"/Learn_Prompting/docs/intermediate/self_consistency",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/self_consistency.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Cadeia de Pensamento Zero Shot",permalink:"/Learn_Prompting/docs/intermediate/zero_shot_cot"},next:{title:"\ud83d\udfe1 Criando conhecimento (Generated Knowledge)",permalink:"/Learn_Prompting/docs/intermediate/generated_knowledge"}},l={},p=[{value:"Exemplo",id:"exemplo",level:2},{value:"Resultados",id:"resultados",level:2},{value:"Notas",id:"notas",level:2}],u={toc:p},c="wrapper";function g(e){let{components:a,...o}=e;return(0,t.kt)(c,(0,s.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-autoconsist\xeancia"},"\ud83d\udfe1 Autoconsist\xeancia"),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)("img",{src:r,style:{width:"500px"}})),(0,t.kt)("p",null,"A autoconsist\xeancia",(0,t.kt)("sup",{parentName:"p",id:"fnref-1"},(0,t.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\xe9 uma abordagem que simplesmente pergunta a um modelo a mesma prompt v\xe1rias vezes e leva o resultado da maioria das respostas como resposta final. \xc9 uma continua\xe7\xe3o da abordagem da ",(0,t.kt)("a",{parentName:"p",id:"CoT prompting_2_181_1697561283424","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"Cadeia de Pensamento (CdP ou CoT:Chain of Thought, em ingl\xeas)"),(0,t.kt)(i.u,{anchorId:"CoT prompting_2_181_1697561283424",clickable:!0,mdxType:"Tooltip"})," e \xe9 ainda mais poderosa quando usada em conjunto."),(0,t.kt)("h2",{id:"exemplo"},"Exemplo"),(0,t.kt)("p",null,"Vamos considerar um exemplo simples de an\xe1lise de e-mails. Suponha que voc\xea \xe9 uma empresa de software e recebe centenas de e-mails por dia. Voc\xea deseja usar um modelo para classificar os e-mails como importantes ou n\xe3o importantes, para que voc\xea possa priorizar aqueles que possam ter um impacto maior em seus neg\xf3cios."),(0,t.kt)("p",null,"Abaixo um exemplo de um e-mail que voc\xea pode receber:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Ol\xe1,\n\nEu descobri uma grande vulnerabilidade de seguran\xe7a em seu sistema. Embora n\xe3o seja f\xe1cil de usar, \xe9 poss\xedvel acessar todos os dados de seus usu\xe1rios. Eu anexei uma prova do problema. Por favor, corrija esse problema o mais r\xe1pido poss\xedvel.\n\nSauda\xe7\xf5es,\n\nDonny\n")),(0,t.kt)("p",null,"Vamos colocar isso em um prompt:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"Ol\xe1,\n\nEu descobri uma grande vulnerabilidade de seguran\xe7a em seu sistema. Embora n\xe3o seja f\xe1cil de usar, \xe9 poss\xedvel acessar todos os dados de seus usu\xe1rios. Eu anexei uma prova do problema. Por favor, corrija esse problema o mais r\xe1pido poss\xedvel.\n\nSauda\xe7\xf5es,\n\nDonny\n\nClassifique o e-mail acima como IMPORTANTE ou N\xc3O IMPORTANTE em rela\xe7\xe3o \xe0 empresa de software. Vamos pensar passo a passo.\n\n")),(0,t.kt)("p",null,"Now, we will use the above prompt to generate multiple separate completions/chains of thought. Here are a few examples:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nO e-mail acima deve ser classificado como IMPORTANTE em rela\xe7\xe3o \xe0 empresa de software. Ele indica que h\xe1 uma vulnerabilidade de seguran\xe7a em seu sistema, que pode permitir que um invasor acesse todos os dados dos usu\xe1rios. A prova anexada demonstra a veracidade da alega\xe7\xe3o, o que torna essa quest\xe3o uma prioridade para a empresa. Portanto, \xe9 necess\xe1rio que a empresa aja rapidamente para corrigir o problema e proteger os dados dos usu\xe1rios.\n\x3c!-- highlight-end --\x3e\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nO remetente descobriu uma grande vulnerabilidade de seguran\xe7a no sistema, mas n\xe3o forneceu nenhuma prova de conceito e n\xe3o \xe9 f\xe1cil de usar. Eu classificaria este e-mail como N\xc3O IMPORTANTE.\n\x3c!-- highlight-end --\x3e\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nEste e-mail \xe9 IMPORTANTE em rela\xe7\xe3o \xe0 empresa de software, pois relata uma grande vulnerabilidade de seguran\xe7a em seu sistema e inclui uma prova do problema. A empresa deve tomar medidas imediatas para corrigir o problema e proteger os dados de seus usu\xe1rios. Ignorar este e-mail pode levar a graves consequ\xeancias para a empresa e seus clientes\n\x3c!-- highlight-end --\x3e\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nEsse e-mail deve ser considerado IMPORTANTE em rela\xe7\xe3o \xe0 empresa de software, pois menciona uma poss\xedvel vulnerabilidade de seguran\xe7a que pode permitir acesso n\xe3o autorizado aos dados de seus usu\xe1rios. A empresa deve tomar medidas imediatas para investigar e corrigir o problema, a fim de garantir a prote\xe7\xe3o dos dados de seus usu\xe1rios e evitar poss\xedveis viola\xe7\xf5es de seguran\xe7a.\n\x3c!-- highlight-end --\x3e\n")),(0,t.kt)("p",null,"Ao gerar muitas cadeias de pensamento e selecionar a resposta mais frequente (",(0,t.kt)("inlineCode",{parentName:"p"},"IMPORTANTE"),"), podemos obter uma resposta mais consistentemente correta ao utilizar o GPT-3."),(0,t.kt)("h2",{id:"resultados"},"Resultados"),(0,t.kt)("p",null,"A autoconsist\xeancia foi apontada como a abordagem mais eficaz para melhorar os resultados em tarefas de racioc\xednio aritm\xe9tico, senso comum e simb\xf3lico. Mesmo quando o CdP foi considerado ineficaz, a autoconsist\xeancia ainda foi capaz de melhorar os resultados."),(0,t.kt)("h2",{id:"notas"},"Notas"),(0,t.kt)("p",null,"Wang et al. discutem um m\xe9todo mais complexo para selecionar a resposta final, que lida com as probabilidades geradas pelo LLM para cada cadeia de pensamento. No entanto, eles n\xe3o usam esse m\xe9todo em seus experimentos, e a vota\xe7\xe3o majorit\xe1ria parece geralmente ter o mesmo ou melhor desempenho."),(0,t.kt)("div",{className:"footnotes"},(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);