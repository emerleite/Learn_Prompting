"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5854],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>g});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=o.createContext({}),p=function(e){var a=o.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},l=function(e){var a=p(e.components);return o.createElement(m.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},c=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),c=r,g=d["".concat(m,".").concat(c)]||d[c]||u[c]||n;return t?o.createElement(g,s(s({ref:a},l),{},{components:t})):o.createElement(g,s({ref:a},l))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,s=new Array(n);s[0]=c;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<n;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65985:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>p,default:()=>h,frontMatter:()=>m,metadata:()=>l,toc:()=>u});var o=t(87462),r=(t(67294),t(3905));const n=t.p+"assets/images/diverse-0ab146f81878dd7e054e5bded7db3b37.webp",s=t.p+"assets/images/AMA_Prompting-82d1d480a007110fcf5b84142f46c596.webp",i=t.p+"assets/images/AMA_multiprompting-229dcc478cbe448d80ef73af7bc8e586.webp",m={sidebar_position:5},p="\ud83d\udfe1 Montagem de prompts / M\xe9todos de ensamblagem",l={unversionedId:"reliability/ensembling",id:"reliability/ensembling",title:"\ud83d\udfe1 Montagem de prompts / M\xe9todos de ensamblagem",description:'"Montagem de prompts" ou "M\xe9todos de ensamblagem" (ou ensembling prompt, em ingl\xeas) \xe9 o conceito de usar v\xe1rios prompts diferentes para tentar responder a mesma pergunta. Existem muitas abordagens diferentes para isso.',source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/reliability/ensembling.md",sourceDirName:"reliability",slug:"/reliability/ensembling",permalink:"/Learn_Prompting/docs/reliability/ensembling",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/ensembling.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Removendo bias",permalink:"/Learn_Prompting/docs/reliability/debiasing"},next:{title:"\ud83d\udfe1 Autoavalia\xe7\xe3o LLM",permalink:"/Learn_Prompting/docs/reliability/lm_self_eval"}},d={},u=[{value:"DiVeRSe",id:"diverse",level:2},{value:"Prompts do tipo DiVeRSe",id:"prompts-do-tipo-diverse",level:3},{value:"Verificador de Vota\xe7\xe3o",id:"verificador-de-vota\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:4},{value:"Prompts do tipo &quot;Me Pergunte Qualquer Coisa&quot; - Ask Me Anything (AMA)",id:"prompts-do-tipo-me-pergunte-qualquer-coisa---ask-me-anything-ama",level:2},{value:"Prompts M\xfaltiplos",id:"prompts-m\xfaltiplos",level:3},{value:"Agrega\xe7\xe3o de respostas",id:"agrega\xe7\xe3o-de-respostas",level:3},{value:"Resultados",id:"resultados",level:3},{value:"Takeaways",id:"takeaways",level:2}],c=(g="LazyLoadImage",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var g;const f={toc:u},k="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(k,(0,o.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-montagem-de-prompts--m\xe9todos-de-ensamblagem"},"\ud83d\udfe1 Montagem de prompts / M\xe9todos de ensamblagem"),(0,r.kt)("p",null,'"Montagem de prompts" ou "M\xe9todos de ensamblagem" (ou ensembling prompt, em ingl\xeas) \xe9 o conceito de usar v\xe1rios prompts diferentes para tentar responder a mesma pergunta. Existem muitas abordagens diferentes para isso.'),(0,r.kt)("h2",{id:"diverse"},"DiVeRSe"),(0,r.kt)("p",null,"DiVeRSe",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' ("',(0,r.kt)("strong",{parentName:"p"},"Di"),"verse ",(0,r.kt)("strong",{parentName:"p"},"Ve"),"rifier on ",(0,r.kt)("strong",{parentName:"p"},"R"),"easoning ",(0,r.kt)("strong",{parentName:"p"},"S"),"t",(0,r.kt)("strong",{parentName:"p"},"e"),'ps", ou "Verificador Diversificado em Etapas de Racioc\xednio") \xe9 um m\xe9todo que melhora a confiabilidade das respostas de tr\xeas maneiras. Isso \xe9 feito 1) usando v\xe1rios prompts para gerar conclus\xf5es diversificadas, 2) usando um verificador para distinguir boas respostas das ruins e 3) usando um verificador para verificar a corre\xe7\xe3o das etapas de racioc\xednio.'),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:n,style:{width:"750px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"DiVeRSe (Li et al.)"),(0,r.kt)("h3",{id:"prompts-do-tipo-diverse"},"Prompts do tipo DiVeRSe"),(0,r.kt)("p",null,"O DiVeRSe usa 5 prompts diferentes para um determinado input. Para construir cada prompt, eles amostram aleatoriamente alguns exemplos do conjunto de treinamento. Aqui est\xe1 um exemplo de um prompt com poucas amostras (k = 2), com exemplos retirados do ","[GSM8K benchmark]"," (",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl"},"https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl"),")",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Na pr\xe1tica, o DiVeRSe usa 5 exemplos em prompts para este benchmark."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Q: Nat\xe1lia vendeu clipes para 48 de seus amigos em abril e, em seguida, vendeu a metade disso em maio. Quantos clipes Nat\xe1lia vendeu no total, em abril e maio?\nA: Nat\xe1lia vendeu 48/2 = 24 clipes em maio.\nNat\xe1lia vendeu 48 + 24 = 72 clipes no total, em abril e maio.\n#### 72\nQ: Weng ganha US$ 12 por hora para trabalhar como bab\xe1. Ontem ela s\xf3 trabalhou 50 minutos como bab\xe1. Quanto ela ganhou?\nA: Weng ganha 12/60 = R$ 0,2 por minuto.\nTrabalhando 50 minutos, ela ganhou 0,2 x 50 = R$ 10.\n#### 10\nQ: Betty est\xe1 economizando dinheiro para uma nova carteira que custa R$ 100. Betty tem apenas metade do dinheiro que precisa. Seus pais decidiram dar-lhe R$ 15 para esse prop\xf3sito e seus av\xf3s o dobro do que seus pais. Qual a quantia Betty ainda precisa para comprar a carteira?\nA:\n")),(0,r.kt)("p",null,"Depois de gerar 5 prompts diferentes como acima, o DiVeRSe amostra 20 caminhos de racioc\xednio para cada um (temperatura = 0,5). Aqui est\xe3o alguns exemplos de completamento do prompt acima. Note que as respostas nem sempre s\xe3o corretas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nBetty tem 0.5*100 = R$50.\nEnt\xe3o ela ganha mais 15 = R$65.\nEm seguida ela ganha 2*15 = R$90.\nEla ainda precisa de 100-90 = R$10 a mais.\n#### 10\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nA: Betty tem 0.5*100 = R$500.\nEnt\xe3o ela ganha 15 a mais = R$650.\nEm seguida ela ganha 2*15 = R$900.\nEla ainda precisa de 100-90 = R$1000 a mais.\n#### 1000\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("p",null,"Nesse ponto, o DiVeRSe gerou 1000 completamentos diferentes."),(0,r.kt)("h3",{id:"verificador-de-vota\xe7\xe3o"},"Verificador de Vota\xe7\xe3o"),(0,r.kt)("p",null,"Agora, n\xf3s poder\xedamos simplesmente pegar a resposta majorit\xe1ria, como o Self-Consistency",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," faz."),(0,r.kt)("p",null,"No entanto, o DiVeRSe prop\xf5e um m\xe9todo muito mais complicado, que eles chamam de ",(0,r.kt)("em",{parentName:"p"},"verificador de vota\xe7\xe3o"),"."),(0,r.kt)("p",null,'Na hora dos testes, usar o verificador de vota\xe7\xe3o \xe9 um processo de duas etapas. Primeiro, o verificador (uma rede neural) atribui uma pontua\xe7\xe3o de 0 a 1 para cada completamento, com base na probabilidade de ser correto. Depois, a parte da "vota\xe7\xe3o" soma todas as pontua\xe7\xf5es de diferentes respostas e fornece a resposta final.'),(0,r.kt)("h4",{id:"exemplo"},"Exemplo"),(0,r.kt)("p",null,"Aqui est\xe1 um pequeno exemplo. Digamos que temos os seguintes completamentos para o prompt ",(0,r.kt)("inlineCode",{parentName:"p"},"Qual \xe9 a soma de dois mais dois?"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n4\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\ndois + 2 = 5\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nEu acho que 2+2 = 6\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\ndois mais dois = 4\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n\xc9 5\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("p",null,"O verificador ler\xe1 cada completamento e atribuir\xe1 uma pontua\xe7\xe3o a ele. Por exemplo, pode atribuir\nas pontua\xe7\xf5es: 0,9, 0,1, 0,2, 0,8, 0,3, respectivamente. Ent\xe3o, a parte da vota\xe7\xe3o somar\xe1 as pontua\xe7\xf5es de cada\nresposta."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pontua\xe7\xe3o(4) = 0.9 + 0.8 = 1.7\npontua\xe7\xe3o(5) = 0.1 + 0.3 = 0.4\npontua\xe7\xe3o(6) = 0.2\n")),(0,r.kt)("p",null,"A resposta final \xe9 4, j\xe1 que ela teve a pontua\xe7\xe3o maior."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mas como o verificador \xe9 treinado?")),(0,r.kt)("p",null,"O verificador \xe9 treinando com uma fun\xe7\xe3o um pouco compleza, que eu n\xe3o vou abordar aqui. Leia a se\xe7\xe3o 3.3 desse artigo para mais informa\xe7\xf5es",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("h2",{id:"prompts-do-tipo-me-pergunte-qualquer-coisa---ask-me-anything-ama"},'Prompts do tipo "Me Pergunte Qualquer Coisa" - Ask Me Anything (AMA)'),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(c,{src:s,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"Perguntas do tipo AMA",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," \xe9 uma abordagem semelhante \xe0 DiVeRSe. No entanto, tanto seu passo de m\xfaltiplos prompts quanto seu passo de agrega\xe7\xe3o de respostas diferem significativamente. A ideia principal do AMA \xe9 usar um LLM para gerar m\xfaltiplos prompts, em vez de usar apenas prompts com poucos exemplos."),(0,r.kt)("h3",{id:"prompts-m\xfaltiplos"},"Prompts M\xfaltiplos"),(0,r.kt)("p",null,"A abordagem AMA mostra que voc\xea pode tomar uma pergunta e reformat\xe1-la de v\xe1rias maneiras para criar prompts diferentes. Por exemplo, digamos que voc\xea est\xe1 coletando um monte de sites para obter informa\xe7\xf5es sobre animais e deseja gravar apenas os que vivem na Am\xe9rica do Norte. Vamos construir um prompt para determinar isso."),(0,r.kt)("p",null,"Dado o seguinte trecho da Wikipedia:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"O urso Kermode, \xe0s vezes chamado de urso esp\xedrito (Ursus americanus kermodei), \xe9 uma subesp\xe9cie do urso negro americano e vive nas regi\xf5es da Costa Central e Norte da Col\xfambia Brit\xe2nica, Canad\xe1.\n")),(0,r.kt)("p",null,"Voc\xea pode formatar essa tarefa em um prompt assim:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"A seguinte afirma\xe7\xe3o \xe9 Verdadeira ou Falsa dado o contexto?\n\nContexto: O urso Kermode, \xe0s vezes chamado de urso esp\xedrito (Ursus americanus kermodei), \xe9 uma subesp\xe9cie do urso negro americano e vive nas regi\xf5es da Costa Central e Norte da Col\xfambia Brit\xe2nica, Canad\xe1.\nAfirma\xe7\xe3o: Este animal vive na Am\xe9rica do Norte\nResposta:\n")),(0,r.kt)("p",null,"Esta \xe9 uma forma um pouco estranha de formular. Por que n\xe3o usar o seguinte prompt, que \xe9 bem mais simples?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Contexto: O urso Kermode, \xe0s vezes chamado de urso esp\xedrito (Ursus americanus kermodei), \xe9 uma subesp\xe9cie do urso-preto americano e vive nas regi\xf5es da Costa Central e Norte da Col\xfambia Brit\xe2nica, Canad\xe1.\nPergunta: Esse animal vive na Am\xe9rica do Norte?\n")),(0,r.kt)("p",null,"Bem, ao formular a quest\xe3o desta forma especial, podemos gerar prompts diferentes.\nNosso primeiro passo aqui ser\xe1 transformar a afirma\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"Esse animal vive na Am\xe9rica do Norte")," e reformat\xe1-la em diferentes perguntas, que basicamente est\xe3o perguntando a mesma coisa. Para isso, passaremos a afirma\xe7\xe3o por prompts como os da imagem abaixo."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(c,{src:i,style:{width:"800px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"Isso pode gerar:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"O animal estava vivendo na Am\xe9rica do Norte?"),(0,r.kt)("li",{parentName:"ol"},"O animal vive na Am\xe9rica do Norte?"),(0,r.kt)("li",{parentName:"ol"},"Onde o animal vive?")),(0,r.kt)("p",null,"A ideia por tr\xe1s disso \xe9 criar diferentes ",(0,r.kt)("em",{parentName:"p"},"vis\xf5es")," da tarefa. Ent\xe3o, aplicamos cada uma ao contexto dado da seguinte forma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Contexto: O urso Kermode, \xe0s vezes chamado de urso esp\xedrito (Ursus americanus kermodei), \xe9 uma subesp\xe9cie do urso-preto americano e vive nas regi\xf5es da Costa Central e Norte da Col\xfambia Brit\xe2nica, Canad\xe1.\nPergunta: O animal estava vivendo na Am\xe9rica do Norte?\n")),(0,r.kt)("p",null,"Ent\xe3o, podemos gerar respostas para cada uma:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Sim, ele estava")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Sim, ele faz")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Am\xe9rica do Norte"))),(0,r.kt)("p",null,"Estas s\xe3o ",(0,r.kt)("em",{parentName:"p"},"respostas intermedi\xe1rias"),". Precisamos mape\xe1-las para etiquetas de tarefa (por exemplo, Sim ou N\xe3o)."),(0,r.kt)("p",null,"Podemos fazer isso passando as respostas intermedi\xe1rias por um prompt como o seguinte:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Selecione a categoria correta.\n\n"Categorias":\n- Sim, Am\xe9rica do Norte\n- N\xe3o, n\xe3o na Am\xe9rica do Norte\n\n"Sim, ele estava" se encaixa na categoria:\n')),(0,r.kt)("p",null,"Agora podemos obter nossas respostas de sa\xedda."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Sim, Am\xe9rica do Norte")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Sim, Am\xe9rica do Norte")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Sim, Am\xe9rica do Norte"))),(0,r.kt)("p",null,"Aqui, todos concordam, ent\xe3o podemos pegar a primeira resposta. No entanto, se eles discordassem, poder\xedamos usar o passo de agrega\xe7\xe3o do AMA para obter uma resposta final."),(0,r.kt)("h3",{id:"agrega\xe7\xe3o-de-respostas"},"Agrega\xe7\xe3o de respostas"),(0,r.kt)("p",null,"A AMA usa uma estrat\xe9gia muito complicada para agregar respostas (mais do que a DiVeRSe) em vez de simplesmente considerar a resposta da maioria. Para entender por que a resposta da maioria pode ser uma escolha ruim, considere duas das perguntas que geramos antes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"O animal vivia na Am\xe9rica do Norte?"),(0,r.kt)("li",{parentName:"ol"},"O animal vive na Am\xe9rica do Norte?")),(0,r.kt)("p",null,"Eles s\xe3o extremamente similares, portanto provavelmente gerar\xe3o o mesmo resultado. Como as perguntas s\xe3o t\xe3o semelhantes, elas afetar\xe3o de forma significativa o resultado final. Para lidar com isso, a AMA conta com supervis\xe3o fraca e matem\xe1tica complexa para estimar as depend\xeancias entre os diferentes prompts que cria e, em seguida, usa isso para ponder\xe1-los adequadamente."),(0,r.kt)("p",null,"Portanto, para as tr\xeas perguntas que geramos, ela pode atribuir pesos de 25%, 25% e 50%, j\xe1 que as primeiras duas s\xe3o t\xe3o semelhantes."),(0,r.kt)("p",null,"Embora a estrat\xe9gia de agrega\xe7\xe3o da AMA seja poderosa, ela \xe9 t\xe3o complicada que n\xe3o a abordarei aqui. Leia a se\xe7\xe3o 3.4 do artigo para obter mais detalhes",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"."),(0,r.kt)("h3",{id:"resultados"},"Resultados"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Com essa estrat\xe9gia de prompting, a AMA \xe9 capaz de usar o GPT-J-6B",(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))," para superar a performance do GPT-3.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A AMA \xe9 melhor em perguntas em que o contexto dado cont\xe9m a resposta."))),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("p",null,"M\xe9todos de ensamblagem s\xe3o muito poderosos. Eles podem ser usados \u200b\u200bpara melhorar o desempenho de qualquer modelo e tamb\xe9m podem ser usados \u200b\u200bpara melhorar o desempenho de um modelo em uma tarefa espec\xedfica."),(0,r.kt)("p",null,"Na pr\xe1tica, a vota\xe7\xe3o da maioria deve ser a sua estrat\xe9gia principal."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Li, Y., Lin, Z., Zhang, S., Fu, Q., Chen, B., Lou, J.-G., & Chen, W. (2022). On the Advance of Making Language Models Better Reasoners.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Mitchell, E., Noh, J. J., Li, S., Armstrong, W. S., Agarwal, A., Liu, P., Finn, C., & Manning, C. D. (2022). Enhancing Self-Consistency and Performance of Pre-Trained Language Models through Natural Language Inference.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"Arora, S., Narayan, A., Chen, M. F., Orr, L., Guha, N., Bhatia, K., Chami, I., Sala, F., & R\xe9, C. (2022). Ask Me Anything: A simple strategy for prompting language models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},"Wang, B., & Komatsuzaki, A. (2021). GPT-J-6B: A 6 Billion Parameter Autoregressive Language Model. https://github.com/kingoflolz/mesh-transformer-jax. https://github.com/kingoflolz/mesh-transformer-jax\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);