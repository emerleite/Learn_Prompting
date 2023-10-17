"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7362],{3905:(e,o,a)=>{a.d(o,{Zo:()=>d,kt:()=>g});var t=a(67294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var o=t.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},d=function(e){var o=l(e.components);return t.createElement(p.Provider,{value:o},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},c=t.forwardRef((function(e,o){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||n;return a?t.createElement(g,i(i({ref:o},d),{},{components:a})):t.createElement(g,i({ref:o},d))}));function g(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3785:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>m,default:()=>v,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var t=a(87462),r=(a(67294),a(3905));const n=a.p+"assets/images/chatbot_from_kb_intents-251bc10434c53c268ea9f0ec6aa1a3fb.webp",i=a.p+"assets/images/chatbot_from_kb_gpt3-57397fbae518c8d8fa24c69127b94d27.webp",s=a.p+"assets/images/chatbot_from_kb_gpt3_organized-051827dc17fc79404dc60e97629a7215.webp",p=a.p+"assets/images/chatbot_from_kb_prompt-be4717543d3483f49f4104743647f762.webp",l=a.p+"assets/images/chatbot_from_kb_login-748a546197820860fd9403bdb4382d8e.webp",d={sidebar_position:40},m="\ud83d\udfe2 Chatbot + Base de Conhecimento",u={unversionedId:"applied_prompting/build_chatbot_from_kb",id:"applied_prompting/build_chatbot_from_kb",title:"\ud83d\udfe2 Chatbot + Base de Conhecimento",description:"Os avan\xe7os recentes em grandes modelos de linguagem (LLMs), como o GPT-3 e o ChatGPT, criaram muito buzz na ind\xfastria de tecnologia. Esses modelos s\xe3o incrivelmente poderosos para gera\xe7\xe3o de conte\xfado, mas tamb\xe9m t\xeam algumas desvantagens, como bias(@nadeem-etal-2021-stereoset) e alucina\xe7\xf5es(@Ji_2022). Uma \xe1rea em que esses LLMs podem ser particularmente \xfateis \xe9 o desenvolvimento de chatbots.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/applied_prompting/build_chatbot_from_kb.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/build_chatbot_from_kb",permalink:"/pt/docs/applied_prompting/build_chatbot_from_kb",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/build_chatbot_from_kb.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Construindo o ChatGPT atrav\xe9s do GPT-3",permalink:"/pt/docs/applied_prompting/build_chatgpt"},next:{title:"\ud83d\ude80 Advanced Applications",permalink:"/pt/docs/category/-advanced-applications"}},c={},g=[{value:"Chatbots Baseados em Inten\xe7\xf5es",id:"chatbots-baseados-em-inten\xe7\xf5es",level:2},{value:"Como o GPT-3 pode ajudar",id:"como-o-gpt-3-pode-ajudar",level:2},{value:"Por que n\xe3o podemos passar toda a base de conhecimento para o GPT-3?",id:"por-que-n\xe3o-podemos-passar-toda-a-base-de-conhecimento-para-o-gpt-3",level:2},{value:"Como um chatbot com GPT-3 poderia funcionar",id:"como-um-chatbot-com-gpt-3-poderia-funcionar",level:2},{value:"Gerando Respostas com o GPT-3",id:"gerando-respostas-com-o-gpt-3",level:2},{value:"Disambiguando perguntas com GPT-3",id:"disambiguando-perguntas-com-gpt-3",level:2},{value:"Problemas ao Gerar Respostas com GPT-3",id:"problemas-ao-gerar-respostas-com-gpt-3",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}],b=(h="LazyLoadImage",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const f={toc:g},k="wrapper";function v(e){let{components:o,...a}=e;return(0,r.kt)(k,(0,t.Z)({},f,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-chatbot--base-de-conhecimento"},"\ud83d\udfe2 Chatbot + Base de Conhecimento"),(0,r.kt)("p",null,"Os avan\xe7os recentes em grandes modelos de linguagem (LLMs), como o ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2005.14165"},"GPT-3")," e o ",(0,r.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"ChatGPT"),", criaram muito buzz na ind\xfastria de tecnologia. Esses modelos s\xe3o incrivelmente poderosos para gera\xe7\xe3o de conte\xfado, mas tamb\xe9m t\xeam algumas desvantagens, como bias",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," e alucina\xe7\xf5es",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". Uma \xe1rea em que esses LLMs podem ser particularmente \xfateis \xe9 o desenvolvimento de chatbots."),(0,r.kt)("h2",{id:"chatbots-baseados-em-inten\xe7\xf5es"},"Chatbots Baseados em Inten\xe7\xf5es"),(0,r.kt)("p",null,'Os chatbots tradicionais s\xe3o geralmente baseados em inten\xe7\xf5es, o que significa que s\xe3o projetados para responder a inten\xe7\xf5es espec\xedficas do usu\xe1rio. Cada inten\xe7\xe3o \xe9 composta por um conjunto de perguntas de amostra e uma resposta associada. Por exemplo, a inten\xe7\xe3o "Tempo" pode incluir perguntas de amostra como "Como est\xe1 o tempo hoje?" ou "Vai chover hoje?" e uma resposta como "Hoje vai ser ensolarado". Quando um usu\xe1rio faz uma pergunta, o chatbot compara a pergunta com a inten\xe7\xe3o e com as perguntas de amostra mais semelhantes, retornando a resposta associada.'),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)("img",{src:n,style:{width:"700px"}}),(0,r.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Como um chatbox tradicional funciona. Imagem produzida pela tradutora (adapta\xe7\xe3o do autor).")),(0,r.kt)("p",null,'No entanto, os chatbots baseados em inten\xe7\xe3o t\xeam seu pr\xf3prio conjunto de problemas. Um problema \xe9 que eles exigem um grande n\xfamero de inten\xe7\xf5es espec\xedficas para fornecer respostas espec\xedficas. Por exemplo, as express\xf5es do usu\xe1rio como "N\xe3o consigo fazer login", "Esqueci minha senha" ou "Erro de login" podem precisar de tr\xeas respostas diferentes e, portanto, tr\xeas inten\xe7\xf5es diferentes, embora sejam todas bastante semelhantes.'),(0,r.kt)("h2",{id:"como-o-gpt-3-pode-ajudar"},"Como o GPT-3 pode ajudar"),(0,r.kt)("p",null,"Aqui \xe9 onde o GPT-3 pode ser especialmente \xfatil. Em vez de ter muitas inten\xe7\xf5es muito espec\xedficas, cada inten\xe7\xe3o pode ser mais ampla e aproveitar um documento de sua ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Knowledge_base"},"Base de Conhecimento"),". Uma Base de Conhecimento (BC) \xe9 informa\xe7\xe3o armazenada como dados estruturados e n\xe3o estruturados, prontos para serem usados para an\xe1lise ou infer\xeancia. Sua BC pode ser composta por uma s\xe9rie de documentos explicando como usar seus produtos."),(0,r.kt)("p",null,'Dessa forma, cada inten\xe7\xe3o est\xe1 associada a um documento em vez de uma lista de perguntas e uma resposta espec\xedfica, por exemplo, uma inten\xe7\xe3o para "problemas de login", uma inten\xe7\xe3o para "como se inscrever", etc. Quando um usu\xe1rio faz uma pergunta sobre login, podemos passar o documento "problemas de login" para o GPT-3 como informa\xe7\xf5es de contexto e gerar uma resposta espec\xedfica para a pergunta do usu\xe1rio.'),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)(b,{src:i,style:{width:"700px"},mdxType:"LazyLoadImage"}),(0,r.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Chatbox com Banco do Conhecimento + GPT-3. Imagem produzida pela tradutora (adapta\xe7\xe3o do autor).")),(0,r.kt)("p",null,'Esta abordagem reduz o n\xfamero de inten\xe7\xf5es que precisam ser gerenciadas e permite respostas que s\xe3o melhor adaptadas a cada pergunta. Al\xe9m disso, se o documento associado \xe0 inten\xe7\xe3o descrever processos diferentes (por exemplo, um processo para "fazer login no site" e outro para "fazer login no aplicativo m\xf3vel"), o GPT-3 pode automaticamente solicitar esclarecimentos ao usu\xe1rio antes de fornecer a resposta final.'),(0,r.kt)("h2",{id:"por-que-n\xe3o-podemos-passar-toda-a-base-de-conhecimento-para-o-gpt-3"},"Por que n\xe3o podemos passar toda a base de conhecimento para o GPT-3?"),(0,r.kt)("p",null,"Hoje, LLMs como o GPT-3 t\xeam um tamanho m\xe1ximo de prompt de cerca de 4.000 tokens (para o modelo ",(0,r.kt)("a",{parentName:"p",href:"https://beta.openai.com/docs/models/gpt-3"},(0,r.kt)("inlineCode",{parentName:"a"},"text-davinci-003")),"), o que \xe9 muito, mas n\xe3o o suficiente para alimentar toda a base de conhecimento em um \xfanico prompt. Os LLMs t\xeam um tamanho m\xe1ximo de prompt por raz\xf5es computacionais, j\xe1 que a gera\xe7\xe3o de texto com eles envolve uma s\xe9rie de c\xe1lculos que aumentam rapidamente \xe0 medida que o tamanho do prompt aumenta."),(0,r.kt)("p",null,"LLMs futuros podem n\xe3o ter essa limita\xe7\xe3o, mantendo as capacidades de gera\xe7\xe3o de texto. No entanto, por enquanto, precisamos projetar uma solu\xe7\xe3o em torno disso."),(0,r.kt)("h2",{id:"como-um-chatbot-com-gpt-3-poderia-funcionar"},"Como um chatbot com GPT-3 poderia funcionar"),(0,r.kt)("p",null,"A sequ\xeancia do chatbot pode ser composta por duas etapas:"),(0,r.kt)("p",null,"1.Primeiro, precisamos selecionar a inten\xe7\xe3o apropriada para a pergunta do usu\xe1rio, ou seja, precisamos recuperar o documento correto de nossa base de conhecimento.\n2. Em seguida, uma vez que temos o documento correto, podemos aproveitar o GPT-3 para gerar uma resposta apropriada para o usu\xe1rio. Ao faz\xea-lo, precisamos criar um prompt adequado."),(0,r.kt)("p",null,"A primeira etapa \xe9 essencialmente resolvida por uma ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Semantic_search"},"busca sem\xe2ntica"),". Podemos usar modelos pr\xe9-treinados da biblioteca ",(0,r.kt)("a",{parentName:"p",href:"https://www.sbert.net/examples/applications/semantic-search/README.html"},"sentence-transformers")," e atribuir facilmente uma pontua\xe7\xe3o para cada documento. O documento com a pontua\xe7\xe3o mais alta \xe9 aquele que ser\xe1 usado para gerar a resposta do chatbot."),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)(b,{src:s,style:{width:"700px"},mdxType:"LazyLoadImage"}),(0,r.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Como um chatbot que usa o GPT-3 poderia funcionar. O GPT-3 poderia ser usado para gerar uma resposta apropriada aproveitando as informa\xe7\xf5es dos documentos da base de conhecimento. Imagem produzida pela tradutora (adapta\xe7\xe3o do autor).")),(0,r.kt)("h2",{id:"gerando-respostas-com-o-gpt-3"},"Gerando Respostas com o GPT-3"),(0,r.kt)("p",null,"Uma vez que temos o documento certo, precisamos criar um prompt adequado para ser usado com o GPT-3 na gera\xe7\xe3o da resposta. Nos experimentos seguintes, sempre usaremos o modelo ",(0,r.kt)("inlineCode",{parentName:"p"},"text-davinci-003")," com uma temperatura de ",(0,r.kt)("inlineCode",{parentName:"p"},"0.7"),"."),(0,r.kt)("p",null,"Para criar o prompt, vamos experimentar usando:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/basics/roles"},(0,r.kt)("strong",{parentName:"a"},"Role-prompting")),": uma t\xe9cnica heur\xedstica que atribui uma fun\xe7\xe3o espec\xedfica para a AI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Informa\xe7\xf5es relevantes da base de conhecimento"),", ou seja, o documento recuperado na etapa de busca sem\xe2ntica."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"As \xfaltimas mensagens trocadas entre o usu\xe1rio e o chatbot"),". Elas s\xe3o \xfateis para mensagens enviadas pelo usu\xe1rio onde todo o contexto n\xe3o \xe9 especificado. Veremos um exemplo disso mais tarde. D\xea uma olhada ",(0,r.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/applied_prompting/build_chatgpt"},"neste exemplo")," para ver como gerenciar conversas com o GPT-3."),(0,r.kt)("li",{parentName:"ul"},"Por \xfaltimo, ",(0,r.kt)("strong",{parentName:"li"},"a pergunta do usu\xe1rio"),".")),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)(b,{src:p,style:{width:"700px"},mdxType:"LazyLoadImage"}),(0,r.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Informa\xe7\xe3o usada para criar o prompt para o GPT-3. Imagem produzida pela tradutora (adapta\xe7\xe3o do autor)")),(0,r.kt)("p",null,"Vamos come\xe7ar nosso prompt usando a t\xe9cnica ",(0,r.kt)("span",{className:"yellow-highlight"},"role-prompting"),"."),(0,r.kt)("pre",null,(0,r.kt)("span",{className:"yellow-highlight"},"Considere que voc\xea \xe9 um chatbot avan\xe7ado chamado SKIPPY, e seu objetivo principal \xe9 ajudar usu\xe1rios da melhor maneira poss\xedvel.")),(0,r.kt)("p",null,"Em seguida, suponha que a etapa de busca sem\xe2ntica extrai o seguinte documento da nossa base de conhecimento. Todos os documentos descrevem como o produto VideoGram funciona, que \xe9 um produto imagin\xe1rio semelhante ao Instagram, mas apenas para v\xeddeos."),(0,r.kt)("div",{style:{textAlign:"left"}},(0,r.kt)(b,{src:l,style:{width:"700px"},mdxType:"LazyLoadImage"}),(0,r.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"A document explaining how login to VideoGram works. Image by the author.")),(0,r.kt)("p",null,"N\xf3s podemos adicionar ",(0,r.kt)("span",{className:"yellow-highlight"},"o seu conte\xfado")," dentro do prompt da seguinte forma:"),(0,r.kt)("pre",null,"Considere que voc\xea \xe9 um chatbot avan\xe7ado chamado SKIPPY, e seu objetivo principal \xe9 ajudar usu\xe1rios da melhor maneira poss\xedvel",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("span",{className:"yellow-highlight"},"IN\xcdCIO DO CONTEXTO",(0,r.kt)("br",null),"Login no VideoGram pelo website:",(0,r.kt)("br",null),"1. Abra o seu navegador e v\xe1 para o site do VideoGram.",(0,r.kt)("br",null),'2. Clique no bot\xe3o "Login" localizado no canto superior direito da p\xe1gina.',(0,r.kt)("br",null),"3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram.",(0,r.kt)("br",null),'4. Depois de inserir suas credenciais, clique no bot\xe3o "Login".',(0,r.kt)("br",null),"5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram.",(0,r.kt)("br",null),"6. Login no VideoGram pelo aplicativo m\xf3vel:",(0,r.kt)("br",null),(0,r.kt)("br",null),"1. Abra o aplicativo VideoGram em seu dispositivo m\xf3vel.",(0,r.kt)("br",null),'2. Na p\xe1gina principal, toque no bot\xe3o "Login" localizado no canto inferior direito.',(0,r.kt)("br",null),"3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram.",(0,r.kt)("br",null),'4. Depois de inserir suas credenciais, toque no bot\xe3o "Login".',(0,r.kt)("br",null),"5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram.",(0,r.kt)("br",null),"FIM DO CONTEXTO",(0,r.kt)("br",null))),(0,r.kt)("p",null,"Por \xfaltimo, precisamos incluir ",(0,r.kt)("span",{className:"yellow-highlight"},"a conversa e a pergunta do usu\xe1rio")," no fim do prompt, como fizemos no \xfaltimo exemplo."),(0,r.kt)("pre",null,"Considere que voc\xea \xe9 um chatbot avan\xe7ado chamado SKIPPY, e seu objetivo principal \xe9 ajudar usu\xe1rios da melhor maneira poss\xedvel",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("span",{className:"yellow-highlight"},"IN\xcdCIO DO CONTEXTO",(0,r.kt)("br",null),"Login no VideoGram pelo website:",(0,r.kt)("br",null),"1. Abra o seu navegador e v\xe1 para o site do VideoGram.",(0,r.kt)("br",null),'2. Clique no bot\xe3o "Login" localizado no canto superior direito da p\xe1gina.',(0,r.kt)("br",null),"3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram.",(0,r.kt)("br",null),'4. Depois de inserir suas credenciais, clique no bot\xe3o "Login".',(0,r.kt)("br",null),"5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram.",(0,r.kt)("br",null),"6. Login no VideoGram pelo aplicativo m\xf3vel:",(0,r.kt)("br",null),(0,r.kt)("br",null),"1. Abra o aplicativo VideoGram em seu dispositivo m\xf3vel.",(0,r.kt)("br",null),'2. Na p\xe1gina principal, toque no bot\xe3o "Login" localizado no canto inferior direito.',(0,r.kt)("br",null),"3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram.",(0,r.kt)("br",null),'4. Depois de inserir suas credenciais, toque no bot\xe3o "Login".',(0,r.kt)("br",null),"5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram.",(0,r.kt)("br",null),"FIM DO CONTEXTO",(0,r.kt)("br",null)),(0,r.kt)("span",{className:"yellow-highlight"},"SKIPPY: Oi, eu sou o Skippy. Como posso te ajudar?",(0,r.kt)("br",null),"USER: Eu n\xe3o consigo encontrar o bot\xe3o de login.",(0,r.kt)("br",null),"SKIPPY:"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"Passando esse prompt para o GPT-3, eu recebi a resposta a seguir:"),(0,r.kt)("pre",null,(0,r.kt)("span",{className:"bluegreen-highlight"},"Ol\xe1, entendo que voc\xea n\xe3o consegue encontrar o bot\xe3o de login. Est\xe1 tentando acessar o VideoGram a partir de um navegador ou de um aplicativo m\xf3vel?")),(0,r.kt)("p",null,"Note que a informa\xe7\xe3o gerada vem da base de conhecimento."),(0,r.kt)("h2",{id:"disambiguando-perguntas-com-gpt-3"},"Disambiguando perguntas com GPT-3"),(0,r.kt)("p",null,"Vamos tentar uma pergunta mais vaga, por exemplo ",(0,r.kt)("span",{className:"yellow-highlight"},"\u201cn\xe3o d\xe1 para fazer login\u201d"),". Abaixo o prompt completo:"),(0,r.kt)("pre",null,"Considere que voc\xea \xe9 um chatbot avan\xe7ado chamado SKIPPY, e seu objetivo principal \xe9 ajudar usu\xe1rios da melhor maneira poss\xedvel",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("span",{className:"yellow-highlight"},"IN\xcdCIO DO CONTEXTO",(0,r.kt)("br",null),"Login no VideoGram pelo website:",(0,r.kt)("br",null),"1. Abra o seu navegador e v\xe1 para o site do VideoGram.",(0,r.kt)("br",null),'2. Clique no bot\xe3o "Login" localizado no canto superior direito da p\xe1gina.',(0,r.kt)("br",null),"3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram.",(0,r.kt)("br",null),'4. Depois de inserir suas credenciais, clique no bot\xe3o "Login".',(0,r.kt)("br",null),"5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram.",(0,r.kt)("br",null),"6. Login no VideoGram pelo aplicativo m\xf3vel:",(0,r.kt)("br",null),(0,r.kt)("br",null),"1. Abra o aplicativo VideoGram em seu dispositivo m\xf3vel.",(0,r.kt)("br",null),'2. Na p\xe1gina principal, toque no bot\xe3o "Login" localizado no canto inferior direito.',(0,r.kt)("br",null),"3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram.",(0,r.kt)("br",null),'4. Depois de inserir suas credenciais, toque no bot\xe3o "Login".',(0,r.kt)("br",null),"5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram.",(0,r.kt)("br",null),"FIM DO CONTEXTO",(0,r.kt)("br",null)),(0,r.kt)("span",{className:"yellow-highlight"},"SKIPPY: Oi, eu sou o Skippy. Como posso te ajudar?",(0,r.kt)("br",null),"USER: N\xe3o d\xe1 pra fazer login.",(0,r.kt)("br",null),"SKIPPY:"),(0,r.kt)("br",null)),(0,r.kt)("p",null,"A primeira resposta que recebi foi a seguinte:"),(0,r.kt)("pre",null,(0,r.kt)("span",{className:"bluegreen-highlight"},'Desculpe por ouvir isso. Voc\xea est\xe1 tentando fazer login no VideoGram? Se sim, aqui est\xe3o algumas instru\xe7\xf5es para ajud\xe1-lo a fazer login. 1. Abra o seu navegador e v\xe1 para o site do VideoGram. 2. Clique no bot\xe3o "Login" localizado no canto superior direito da p\xe1gina. 3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram. 4. Depois de inserir suas credenciais, clique no bot\xe3o "Login". 5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram. ou 1. Abra o aplicativo VideoGram em seu dispositivo m\xf3vel. 2. Na p\xe1gina principal, toque no bot\xe3o "Login" localizado no canto inferior direito. 3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram. 4. Depois de inserir suas credenciais, toque no bot\xe3o "Login". 5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram. Espero que isso te ajude. Se voc\xea ainda tiver alguma d\xfavida, por favor, volte a me perguntar.')),(0,r.kt)("p",null,"Mas podemos continuar com a conversa. O prompt completo foi removido no pr\xf3ximo exemplo a fim de melhorar a visibilidade dessa p\xe1gina."),(0,r.kt)("pre",null,"USER: N\xe3o d\xe1 pra fazer login no celular.",(0,r.kt)("br",null),(0,r.kt)("span",{className:"bluegreen-highlight"},'SKIPPY: Desculpe por ouvir isso. Voc\xea est\xe1 tentando fazer login no VideoGram no celular? Se sim, aqui est\xe1 o procedimento para ajud\xe1-lo a fazer login: 1. Abra o aplicativo VideoGram em seu dispositivo m\xf3vel. 2. Na p\xe1gina principal, toque no bot\xe3o "Login" localizado no canto inferior direito. 3. Na p\xe1gina de login, digite seu nome de usu\xe1rio e senha do VideoGram. 4. Depois de inserir suas credenciais, toque no bot\xe3o "Login". 5. Voc\xea agora dever\xe1 estar conectado \xe0 sua conta do VideoGram. Espero que isso te ajude. Se voc\xea ainda tiver alguma d\xfavida, por favor, volte a me perguntar.')),(0,r.kt)("p",null,"GPT-3 pode gerenciar a desambigua\xe7\xe3o, desde que tenha as informa\xe7\xf5es contextuais corretas."),(0,r.kt)("h2",{id:"problemas-ao-gerar-respostas-com-gpt-3"},"Problemas ao Gerar Respostas com GPT-3"),(0,r.kt)("p",null,"Os exemplos anteriores funcionaram bem. No entanto, h\xe1 v\xe1rias maneiras pelas quais esse chatbot pode falhar."),(0,r.kt)("p",null,'Se perguntarmos "O aplicativo m\xf3vel \xe9 gratuito?" para o GPT-3, passando o documento de login como contexto, muitas vezes obteremos uma resposta como "Sim, o aplicativo m\xf3vel VideoGram \xe9 gratuito para baixar e usar", mesmo que essa informa\xe7\xe3o n\xe3o esteja contida nas informa\xe7\xf5es de contexto. Gerar informa\xe7\xf5es falsas \xe9 muito ruim para chatbots de atendimento ao cliente!'),(0,r.kt)("p",null,"GPT-3 raramente gera informa\xe7\xf5es falsas quando a resposta \xe0 pergunta do usu\xe1rio pode ser encontrada no contexto. Como as perguntas do usu\xe1rio s\xe3o frequentemente textos curtos e amb\xedguos, n\xe3o podemos confiar na etapa de busca sem\xe2ntica para sempre recuperar um documento correto, e portanto, sempre estamos vulner\xe1veis \u200b\u200b\xe0 gera\xe7\xe3o de informa\xe7\xf5es falsas."),(0,r.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,r.kt)("p",null,"GPT-3 \xe9 muito \xfatil para criar chatbots conversacionais e \xe9 capaz de responder a uma s\xe9rie de perguntas espec\xedficas com base nas informa\xe7\xf5es contextuais inseridas no prompt. No entanto, \xe9 dif\xedcil fazer o modelo produzir respostas aproveitando apenas as informa\xe7\xf5es do contexto, j\xe1 que o modelo tende a alucinar (ou seja, gerar novas informa\xe7\xf5es, potencialmente falsas). Gerar informa\xe7\xf5es falsas \xe9 um problema de gravidade diferente dependendo do caso de uso."),(0,r.kt)("p",null,"Escrito por ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/fabio-chiusano-b6a3b311b/"},"Fabio Chiusano"),".\nTraduzido por ",(0,r.kt)("a",{parentName:"p",href:"https://imgabi.com"},"Gabi Fonseca"),"."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Nadeem, M., Bethke, A., & Reddy, S. (2021). StereoSet: Measuring stereotypical bias in pretrained language models. Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), 5356\u20135371. https://doi.org/10.18653/v1/2021.acl-long.416\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Ji, Z., Lee, N., Frieske, R., Yu, T., Su, D., Xu, Y., Ishii, E., Bang, Y., Madotto, A., & Fung, P. (2022). Survey of Hallucination in Natural Language Generation. ACM Computing Surveys. https://doi.org/10.1145/3571730\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}v.isMDXComponent=!0}}]);