"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2205],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>g});var s=o(67294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,s)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function n(e,a){if(null==e)return{};var o,s,t=function(e,a){if(null==e)return{};var o,s,t={},r=Object.keys(e);for(s=0;s<r.length;s++)o=r[s],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)o=r[s],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=s.createContext({}),m=function(e){var a=s.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},u=function(e){var a=m(e.components);return s.createElement(p.Provider,{value:a},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},d=s.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,p=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),l=m(o),d=t,g=l["".concat(p,".").concat(d)]||l[d]||c[d]||r;return o?s.createElement(g,i(i({ref:a},u),{},{components:o})):s.createElement(g,i({ref:a},u))}));function g(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=d;var n={};for(var p in a)hasOwnProperty.call(a,p)&&(n[p]=a[p]);n.originalType=e,n[l]="string"==typeof e?e:t,i[1]=n;for(var m=2;m<r;m++)i[m]=o[m];return s.createElement.apply(null,i)}return s.createElement.apply(null,o)}d.displayName="MDXCreateElement"},70207:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>m,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var s=o(87462),t=(o(67294),o(3905));const r=o.p+"assets/images/short_content_auto-9b17533cb94c799181be8ee128a081b6.webp",i={sidebar_position:3},n="\ud83d\udfe2 Respondendo Quest\xf5es de Discuss\xe3o",p={unversionedId:"applied_prompting/short_response",id:"applied_prompting/short_response",title:"\ud83d\udfe2 Respondendo Quest\xf5es de Discuss\xe3o",description:"Com a devida orienta\xe7\xe3o, o GPT-3 \xe9 capaz de escrever respostas em formato curto. Para demonstrar isso, estarei examinando a resolu\xe7\xe3o de quest\xf5es de discuss\xe3o, uma tarefa semanal comum em muitos cursos universit\xe1rios. Uma resposta \xe0 uma pergunta de discuss\xe3o geralmente tem entre 100 e 700 palavras. Conte\xfado mais longo pode ser um pouco mais complicado, pois LLMs t\xeam mem\xf3ria limitada e t\xeam dificuldade em entender a imagem global do que est\xe3o escrevendo(@jin2022plot).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/applied_prompting/short_response.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/short_response",permalink:"/pt/docs/applied_prompting/short_response",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/short_response.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Perguntas de M\xfaltipla Escolha",permalink:"/pt/docs/applied_prompting/mc_tutorial"},next:{title:"\ud83d\udfe2 Construindo o ChatGPT atrav\xe9s do GPT-3",permalink:"/pt/docs/applied_prompting/build_chatgpt"}},m={},u=[{value:"Muitas quest\xf5es de discuss\xe3o n\xe3o s\xe3o eficazes para estimular uma boa resposta.",id:"muitas-quest\xf5es-de-discuss\xe3o-n\xe3o-s\xe3o-eficazes-para-estimular-uma-boa-resposta",level:3},{value:"Automatizando a reescrita de prompts",id:"automatizando-a-reescrita-de-prompts",level:3},{value:"Itera\xe7\xe3o",id:"itera\xe7\xe3o",level:3}],l={toc:u},c="wrapper";function d(e){let{components:a,...o}=e;return(0,t.kt)(c,(0,s.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-respondendo-quest\xf5es-de-discuss\xe3o"},"\ud83d\udfe2 Respondendo Quest\xf5es de Discuss\xe3o"),(0,t.kt)("p",null,"Com a devida orienta\xe7\xe3o, o GPT-3 \xe9 capaz de escrever respostas em formato curto. Para demonstrar isso, estarei examinando a ",(0,t.kt)("strong",{parentName:"p"},"resolu\xe7\xe3o de quest\xf5es de discuss\xe3o"),", uma tarefa semanal comum em muitos cursos universit\xe1rios. Uma resposta \xe0 uma pergunta de discuss\xe3o geralmente tem entre 100 e 700 palavras. Conte\xfado mais longo pode ser um pouco mais complicado, pois LLMs t\xeam mem\xf3ria limitada e t\xeam dificuldade em entender a imagem global do que est\xe3o escrevendo",(0,t.kt)("sup",{parentName:"p",id:"fnref-1"},(0,t.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,t.kt)("p",null,"Vamos olhar um exemplo de uma pergunta b\xe1sica de discuss\xe3o:"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("em",{parentName:"p"},'"Quais s\xe3o os problemas ambientais mais urgentes enfrentados pelo nosso planeta hoje, e que medidas os indiv\xedduos podem tomar para ajudar a lidar com esses problemas?"'))),(0,t.kt)("p",null,"N\xf3s podemos tornar essa pergunta em um prompt para o GPT3 ao adicionar ",(0,t.kt)("span",{className:"yellow-highlight"},"Responda o seguinte:"),"."),(0,t.kt)("pre",null,(0,t.kt)("span",{className:"yellow-highlight"},"Responda o seguinte:"),(0,t.kt)("br",null),(0,t.kt)("br",null),'"Quais s\xe3o os problemas ambientais mais urgentes enfrentados pelo nosso planeta hoje, e que medidas os indiv\xedduos podem tomar para ajudar a lidar com esses problemas?'),(0,t.kt)("p",null,"Os resultados gerados com esta instru\xe7\xe3o n\xe3o s\xe3o consistentes e alguns s\xe3o compostos por apenas uma ou duas frases. Uma resposta t\xedpica a uma discuss\xe3o deve ter v\xe1rios par\xe1grafos, por isso esses resultados n\xe3o s\xe3o ideais. Uma boa instru\xe7\xe3o deve fornecer ",(0,t.kt)("strong",{parentName:"p"},"instru\xe7\xf5es espec\xedficas sobre formato e conte\xfado"),". \xc9 necess\xe1rio remover ambiguidades na linguagem para melhorar a consist\xeancia e qualidade dos resultados. Aqui est\xe1 uma instru\xe7\xe3o melhor."),(0,t.kt)("pre",null,(0,t.kt)("span",{className:"yellow-highlight"},"Escreva uma disserta\xe7\xe3o detalhada, incluindo introdu\xe7\xe3o, corpo e conclus\xe3o respondendo \xe0 seguinte pergunta:"),(0,t.kt)("br",null),(0,t.kt)("br",null),"Quais s\xe3o os problemas ambientais mais urgentes enfrentados pelo nosso planeta hoje, e que medidas os indiv\xedduos podem tomar para ajudar a lidar com esses problemas?"),(0,t.kt)("iframe",{src:"https://player.vimeo.com/video/778327269?h=77d739ae72&badge=0&autopause=0&player_id=0&app_id=58479",width:"600",height:"400",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0,title:"example"}),(0,t.kt)("p",null,"O segundo prompt gera respostas mais longas com uma estrutura melhor. O uso da palavra 'disserta\xe7\xe3o' no prompt foi intencional, j\xe1 que o GPT-3 compreende a defini\xe7\xe3o de uma disserta\xe7\xe3o, e \xe9 mais prov\xe1vel que assim gere respostas mais coerentes e estruturadas."),(0,t.kt)("h3",{id:"muitas-quest\xf5es-de-discuss\xe3o-n\xe3o-s\xe3o-eficazes-para-estimular-uma-boa-resposta"},"Muitas quest\xf5es de discuss\xe3o n\xe3o s\xe3o eficazes para estimular uma boa resposta."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("em",{parentName:"p"},'"A Guerra Civil foi um conflito sobre expans\xe3o? Concorda ou discorda e por qu\xea?""'))),(0,t.kt)("p",null,"Aqui est\xe1 uma pergunta real de discuss\xe3o de um curso de hist\xf3ria universit\xe1rio. Ela n\xe3o est\xe1 formulada corretamente e \xe9 muito aberta. ",(0,t.kt)("strong",{parentName:"p"},"Para obter boas respostas de discuss\xe3o, voc\xea precisa reescrever a pergunta em uma prompt bem definida"),". Uma prompt bem definida para a pergunta de discuss\xe3o acima poderia ser:"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("em",{parentName:"p"},'"Explique as causas da Guerra Civil e se a expans\xe3o desempenhou um papel no conflito. Inclua evid\xeancias para apoiar seu argumento."'))),(0,t.kt)("p",null,"Agora podemos adicionar dire\xe7\xf5es de formata\xe7\xe3o e contexto."),(0,t.kt)("pre",null,(0,t.kt)("span",{className:"yellow-highlight"},"Escreva uma resposta detalhada para discuss\xe3o, na estrutura de uma disserta\xe7\xe3o, em resposta ao seguinte prompt:"),(0,t.kt)("br",null),(0,t.kt)("br",null),"Explique as causas da Guerra Civil e se a expans\xe3o desempenhou um papel no conflito. Inclua evid\xeancias para apoiar seu argumento."),(0,t.kt)("h3",{id:"automatizando-a-reescrita-de-prompts"},"Automatizando a reescrita de prompts"),(0,t.kt)("p",null,"O exemplo de reescrita acima foi gerado com o OpenAI ",(0,t.kt)("a",{parentName:"p",href:"https://openai.com/blog/chatgpt/"},"ChatGPT"),"."),(0,t.kt)("div",{style:{textAlign:"left"}},(0,t.kt)("img",{src:r,style:{width:"500px"}})),(0,t.kt)("h3",{id:"itera\xe7\xe3o"},"Itera\xe7\xe3o"),(0,t.kt)("p",null,"Ap\xf3s criar uma prompt efetiva para sua pergunta de discuss\xe3o, agora \xe9 necess\xe1rio refinar os resultados gerados pelo GPT-3. Isso pode envolver ajustar a sa\xedda para cumprir restri\xe7\xf5es como contagem de palavras, ou combinar conceitos de diferentes resultados gerados."),(0,t.kt)("p",null,"Um m\xe9todo simples para iterar \xe9 gerar v\xe1rias sa\xeddas e revis\xe1-las para obter uma compreens\xe3o dos conceitos que o GPT-3 est\xe1 utilizando e a estrutura que ele segue. Depois que as sa\xeddas forem avaliadas, voc\xea pode selecionar as sa\xeddas mais adequadas e combin\xe1-las em uma resposta coesa."),(0,t.kt)("p",null,"Outra maneira de iterar \xe9 come\xe7ar e expandir passo a passo. Isso requer mais de uma prompt: uma prompt inicial para escrever o par\xe1grafo inicial ou algo parecido e, em seguida, outras prompts para expandir o que j\xe1 foi escrito."),(0,t.kt)("p",null,"Aqui est\xe1 uma pergunta potencial de discuss\xe3o filos\xf3fica:"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("em",{parentName:"p"},'"A matem\xe1tica \xe9 inventada ou descoberta? Use um racioc\xednio cuidadoso para explicar sua resposta."'))),(0,t.kt)("p",null,"Adicione a pergunta acima \xe0 um prompt simples como no exemplo abaixo:"),(0,t.kt)("pre",null,(0,t.kt)("span",{className:"yellow-highlight"},"Escreva um par\xe1grafo de introdu\xe7\xe3o respondendo \xe0 seguinte pergunta:"),(0,t.kt)("br",null),(0,t.kt)("br",null),"A matem\xe1tica \xe9 inventada ou descoberta? Use um racioc\xednio cuidadoso para explicar sua resposta."),(0,t.kt)("p",null,"Eu gerei v\xe1rias respostas e encontrei uma que gostei mais."),(0,t.kt)("pre",null,(0,t.kt)("span",{className:"bluegreen-highlight"},"A quest\xe3o se a matem\xe1tica \xe9 inventada ou descoberta tem sido objeto de discuss\xe3o h\xe1 s\xe9culos. Algumas pessoas acreditam que a matem\xe1tica \xe9 uma inven\xe7\xe3o humana que foi criada para nos ajudar a entender o mundo, enquanto outras acreditam que a matem\xe1tica \xe9 uma descoberta que existe independentemente de nossa compreens\xe3o. Este \xe9 um t\xf3pico importante porque nossa resposta tem implica\xe7\xf5es significativas em rela\xe7\xe3o ao que podemos conhecer sobre o mundo e sobre a natureza da matem\xe1tica em si. Neste ensaio, examinarei essa quest\xe3o com um racioc\xednio cuidadoso para oferecer minha resposta.")),(0,t.kt)("p",null,"Esse \xe9 um in\xedcio decente. Ent\xe3o eu vou dar continuidade como outro prompt para expandir o texto."),(0,t.kt)("pre",null,(0,t.kt)("span",{className:"yellow-highlight"},"Eu estou escrevendo uma disserta\xe7\xe3o curta para responder \xe0 seguinte pergunta:"),(0,t.kt)("br",null),(0,t.kt)("br",null),"A matem\xe1tica \xe9 inventada ou descoberta? Use um racioc\xednio cuidadoso para explicar sua resposta.",(0,t.kt)("span",{className:"yellow-highlight"},(0,t.kt)("p",null),"Abaixo \xe9 o que eu tenho at\xe9 agora:"),(0,t.kt)("br",null),(0,t.kt)("br",null),"A quest\xe3o se a matem\xe1tica \xe9 inventada ou descoberta tem sido objeto de discuss\xe3o h\xe1 s\xe9culos. Algumas pessoas acreditam que a matem\xe1tica \xe9 uma inven\xe7\xe3o humana que foi criada para nos ajudar a entender o mundo, enquanto outras acreditam que a matem\xe1tica \xe9 uma descoberta que existe independentemente de nossa compreens\xe3o. Este \xe9 um t\xf3pico importante porque nossa resposta tem implica\xe7\xf5es significativas em rela\xe7\xe3o ao que podemos conhecer sobre o mundo e sobre a natureza da matem\xe1tica em si. Neste ensaio, examinarei essa quest\xe3o com um racioc\xednio cuidadoso para oferecer minha resposta.",(0,t.kt)("p",null),(0,t.kt)("span",{className:"yellow-highlight"},"Escreva o pr\xf3ximo par\xe1grafo para a minha disserta\xe7\xe3o.")),(0,t.kt)("p",null,"Experimente expandir esse prompt com o demo abaixo (voc\xea vai precisar da sua chave OpenAI)"),(0,t.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRlcG9pcyBkZSBleGFtaW5hciBvcyBhcmd1bWVudG9zIGRlIGFtYm9zIG9zIGxhZG9zLCBhY3JlZGl0byBxdWUgYSBtYXRlbcOhdGljYSBmb2kgZGVzY29iZXJ0YSwgbsOjbyBpbnZlbnRhZGEuIElzc28gcG9ycXVlIGEgbWF0ZW3DoXRpY2Egw6kgYmFzZWFkYSBlbSBwcmluY8OtcGlvcyB1bml2ZXJzYWlzIHF1ZSBzw6NvIGluZGVwZW5kZW50ZXMgZGUgbm9zc2EgY29tcHJlZW5zw6NvLiBQb3IgZXhlbXBsbywgYSBsZWkgZGEgZ3JhdmlkYWRlIMOpIHVtYSBsZWkgbWF0ZW3DoXRpY2EgcXVlIGZvaSBkZXNjb2JlcnRhIHBvciBJc2FhYyBOZXd0b24sIG1hcyBxdWUgZXhpc3RpYSBhbnRlcyBkZSBlbGUgZGVzY29icmktbGEuIEFsw6ltIGRpc3NvLCBhIG1hdGVtw6F0aWNhIMOpIHVzYWRhIHBhcmEgZXhwbGljYXIgZmVuw7RtZW5vcyBuYXR1cmFpcywgY29tbyBhIMOzcmJpdGEgZG9zIHBsYW5ldGFzLCBvIHF1ZSBzdWdlcmUgcXVlIGVsYSDDqSBiYXNlYWRhIGVtIHByaW5jw61waW9zIHVuaXZlcnNhaXMuIFBvcnRhbnRvLCBhY3JlZGl0byBxdWUgYSBtYXRlbcOhdGljYSBmb2kgZGVzY29iZXJ0YSwgbsOjbyBpbnZlbnRhZGEuIiwicHJvbXB0IjoiRXUgZXN0b3UgZXNjcmV2ZW5kbyB1bWEgZGlzc2VydGHDp8OjbyBjdXJ0YSBwYXJhIHJlc3BvbmRlciDDoCBzZWd1aW50ZSBwZXJndW50YTpcblxuQSBtYXRlbcOhdGljYSBmb2kgaW52ZW50YWRhIG91IGRlc2NvYmVydGE%2FIFVzZSB1bSByYWNpb2PDrW5pbyBjdWlkYWRvc28gcGFyYSBleHBsaWNhciBzdWEgcmVzcG9zdGEuIFxuXG5BYmFpeG8gw6kgbyBxdWUgZXUgdGVuaG8gYXTDqSBhZ29yYTpcblxuQSBxdWVzdMOjbyBzZSBhIG1hdGVtw6F0aWNhIGZvaSBpbnZlbnRhZGEgb3UgZGVzY29iZXJ0YSB0ZW0gc2lkbyBvYmpldG8gZGUgZGlzY3Vzc8OjbyBow6Egc8OpY3Vsb3MuIEFsZ3VtYXMgcGVzc29hcyBhY3JlZGl0YW0gcXVlIGEgbWF0ZW3DoXRpY2Egw6kgdW1hIGludmVuw6fDo28gaHVtYW5hIHF1ZSBmb2kgY3JpYWRhIHBhcmEgbm9zIGFqdWRhciBhIGVudGVuZGVyIG8gbXVuZG8sIGVucXVhbnRvIG91dHJhcyBhY3JlZGl0YW0gcXVlIGEgbWF0ZW3DoXRpY2Egw6kgdW1hIGRlc2NvYmVydGEgcXVlIGV4aXN0ZSBpbmRlcGVuZGVudGVtZW50ZSBkZSBub3NzYSBjb21wcmVlbnPDo28uIEVzdGUgw6kgdW0gdMOzcGljbyBpbXBvcnRhbnRlIHBvcnF1ZSBub3NzYSByZXNwb3N0YSB0ZW0gaW1wbGljYcOnw7VlcyBzaWduaWZpY2F0aXZhcyBlbSByZWxhw6fDo28gYW8gcXVlIHBvZGVtb3MgY29uaGVjZXIgc29icmUgbyBtdW5kbyBlIHNvYnJlIGEgbmF0dXJlemEgZGEgbWF0ZW3DoXRpY2EgZW0gc2kuIE5lc3RlIHRleHRvLCBleGFtaW5hcmVpIGVzc2EgcXVlc3TDo28gY29tIHVtIHJhY2lvY8OtbmlvIGN1aWRhZG9zbyBwYXJhIG9mZXJlY2VyIG1pbmhhIHJlc3Bvc3RhLiBcblxuRXNjcmV2YSBvIHByw7N4aW1vIHBhcsOhZ3JhZm8gcGFyYSBhIG1pbmhhIGRpc3NlcnRhw6fDo28uIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,t.kt)("br",null),(0,t.kt)("p",null,"Eu gerei algumas expans\xf5es com esse prompt e selecionei uma que eu gostei chegando ao resultado final a seguir:"),(0,t.kt)("pre",null,'A Matem\xe1tica \xe9 uma das mais antigas e mais importantes disciplinas cient\xedficas, sendo frequentemente descrita como "a l\xedngua da ci\xeancia". Esta disciplina tem sido objeto de debates entre matem\xe1ticos e outros pensadores h\xe1 muitos s\xe9culos, particularmente em rela\xe7\xe3o \xe0 quest\xe3o se a matem\xe1tica \xe9 inventada ou descoberta. Apesar de haver argumentos v\xe1lidos de ambos os lados, a minha opini\xe3o \xe9 que a matem\xe1tica \xe9 tanto uma inven\xe7\xe3o como uma descoberta. A matem\xe1tica \xe9 inventada quando as pessoas constroem modelos abstratos matem\xe1ticos para explicar a realidade, enquanto a matem\xe1tica \xe9 descoberta quando os matem\xe1ticos percebem padr\xf5es e rela\xe7\xf5es nos dados existentes. Assim, a matem\xe1tica \xe9 tanto inventada como descoberta.',(0,t.kt)("span",{className:"bluegreen-highlight"},(0,t.kt)("br",null),"Os matem\xe1ticos t\xeam um papel \xfanico em toda a ci\xeancia, usando sua capacidade de perceber padr\xf5es para desenvolver teorias e modelos para explicar o comportamento dos fen\xf4menos. A matem\xe1tica \xe9 especialmente importante na ci\xeancia, pois ajuda a entender o mundo que nos rodeia. Os matem\xe1ticos usam suas habilidades para desenvolver modelos para explicar a realidade, usando uma variedade de ferramentas e t\xe9cnicas. O uso da matem\xe1tica para descobrir padr\xf5es e rela\xe7\xf5es tamb\xe9m \xe9 essencial para a ci\xeancia, pois permite que os cientistas construam hip\xf3teses e fa\xe7am previs\xf5es. Assim, podemos dizer que a matem\xe1tica \xe9 tanto uma inven\xe7\xe3o como uma descoberta.")),(0,t.kt)("p",null,"Ao utilizar prompt de expans\xe3o podemos escrever incrementalmente e iterar a cada passo. Essa abordagem \xe9 \xfatil quando voc\xea precisa ",(0,t.kt)("strong",{parentName:"p"},"produzir respostas de alta qualidade e deseja modificar os passo incrementais ")),(0,t.kt)("p",null,"Escrito por ",(0,t.kt)("a",{parentName:"p",href:"https://twitter.com/jayo782"},"jayo78"),".\nTraduzido por ",(0,t.kt)("a",{parentName:"p",href:"https://imgabi.com"},"gabi fonseca")),(0,t.kt)("div",{className:"footnotes"},(0,t.kt)("hr",{parentName:"div"}),(0,t.kt)("ol",{parentName:"div"},(0,t.kt)("li",{parentName:"ol",id:"fn-1"},"Jin, Y., Kadam, V., & Wanvarie, D. (2022). Plot Writing From Pre-Trained Language Models.\n",(0,t.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);