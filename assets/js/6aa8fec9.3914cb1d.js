"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7522],{38842:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>c,default:()=>I,frontMatter:()=>r,metadata:()=>d,toc:()=>n});var o=t(87462),s=(t(67294),t(3905));const i=t.p+"assets/images/math-79b401d521d572664f685639576a3aec.webp";var l=t(39145);const r={sidebar_position:70},c="\ud83d\udfe1 Matem\xe1tica",d={unversionedId:"reliability/math",id:"reliability/math",title:"\ud83d\udfe1 Matem\xe1tica",description:"Durante este curso, vimos muitos m\xe9todos de prompt diferentes que podem ser usados \u200b\u200bpara melhorar a habilidade matem\xe1tica de um %%LLM|LLM%%. Uma abordagem recente, MathPrompter(@imani2023mathprompter), une alguns desses m\xe9todos: (%%Cadeia de Pensamento|CoT prompting%%, %%PAL|PAL%%, etc.) em uma \xfanica t\xe9cnica. A ideia principal \xe9 dividir uma quest\xe3o matem\xe1tica em termos alg\xe9bricos e, em seguida, usar c\xf3digo Python para resolv\xea-la de maneiras diferentes.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/reliability/math.md",sourceDirName:"reliability",slug:"/reliability/math",permalink:"/docs/reliability/math",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/math.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 Calibrandos LLMs",permalink:"/docs/reliability/calibration"},next:{title:"\ud83d\uddbc\ufe0f Image Prompting",permalink:"/docs/category/\ufe0f-image-prompting"}},m={},n=[{value:"Passo 1: Gerar o modelo alg\xe9brico",id:"passo-1-gerar-o-modelo-alg\xe9brico",level:2},{value:"Passo 2: Prompts Matem\xe1ticos",id:"passo-2-prompts-matem\xe1ticos",level:2},{value:"2a: Declara\xe7\xe3o Alg\xe9brica",id:"2a-declara\xe7\xe3o-alg\xe9brica",level:3},{value:"2b: C\xf3digo em Python",id:"2b-c\xf3digo-em-python",level:3},{value:"Gera\xe7\xe3o de Respostas",id:"gera\xe7\xe3o-de-respostas",level:3},{value:"Passo 4: Auto-Consist\xeancia",id:"passo-4-auto-consist\xeancia",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}],g={toc:n},p="wrapper";function I(e){let{components:a,...t}=e;return(0,s.kt)(p,(0,o.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-matem\xe1tica"},"\ud83d\udfe1 Matem\xe1tica"),(0,s.kt)("p",null,"Durante este curso, vimos muitos m\xe9todos de prompt diferentes que podem ser usados \u200b\u200bpara melhorar a habilidade matem\xe1tica de um ",(0,s.kt)("a",{parentName:"p",id:"LLM_0_129_1697567641028","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,s.kt)(l.u,{anchorId:"LLM_0_129_1697567641028",clickable:!0,mdxType:"Tooltip"}),". Uma abordagem recente, MathPrompter",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", une alguns desses m\xe9todos: (",(0,s.kt)("a",{parentName:"p",id:"CoT prompting_5_30_1697567641028","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"Cadeia de Pensamento"),(0,s.kt)(l.u,{anchorId:"CoT prompting_5_30_1697567641028",clickable:!0,mdxType:"Tooltip"}),", ",(0,s.kt)("a",{parentName:"p",id:"PAL_8_2_1697567641028","data-tooltip-html":"A method that uses code as intermediate reasoning<br>see <a href='https://learnprompting.org/docs/advanced_applications/pal'>PAL</a>","data-tooltip-place":"top"},"PAL"),(0,s.kt)(l.u,{anchorId:"PAL_8_2_1697567641028",clickable:!0,mdxType:"Tooltip"}),", etc.) em uma \xfanica t\xe9cnica. A ideia principal \xe9 dividir uma quest\xe3o matem\xe1tica em termos alg\xe9bricos e, em seguida, usar c\xf3digo Python para resolv\xea-la de maneiras diferentes."),(0,s.kt)("div",{style:{textAlign:"center"}},(0,s.kt)("img",{src:i,style:{width:"500px"}})),(0,s.kt)("p",null,"O MathPrompter possui ",(0,s.kt)("strong",{parentName:"p"},"quatro")," etapas. Explicaremos as etapas usando o seguinte exemplo. O exemplo \xe9 retirado diretamente do artigo."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"P: Em um restaurante, cada refei\xe7\xe3o para adultos custa R$5 e as crian\xe7as comem de gra\xe7a. Se um grupo de 15\npessoas entrasse e 8 fossem crian\xe7as, quanto isso custaria para o grupo comer?\n")),(0,s.kt)("h2",{id:"passo-1-gerar-o-modelo-alg\xe9brico"},"Passo 1: Gerar o modelo alg\xe9brico"),(0,s.kt)("p",null,"A primeira etapa \xe9 atribuir uma vari\xe1vel a cada n\xfamero na pergunta. Isso ajuda porque permite uma tradu\xe7\xe3o mais f\xe1cil da pergunta para uma quest\xe3o matem\xe1tica abstrata, bem como para o c\xf3digo de programa\xe7\xe3o."),(0,s.kt)("p",null,"Isso pode ser feito por meio de poucos prompts com exemplo:"),(0,s.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik1BOiBFbSB1bSByZXN0YXVyYW50ZSwgY2FkYSByZWZlacOnw6NvIHBhcmEgYWR1bHRvcyBjdXN0YSAkQSBlIGFzIGNyaWFuw6dhcyBjb21lbSBkZSBncmHDp2EuIFNlIHVtIGdydXBvIGRlIEIgcGVzc29hcyBlbnRyYXIgZSBDIGZvcmVtIGNyaWFuw6dhcywgcXVhbnRvIGlzc28gY3VzdGFyaWEgcGFyYSBvIGdydXBvIGNvbWVyP1xuXG5NQVBFQU1FTlRPOiB7QTogNSwgQjogMTUsIEM6IDh9IiwicHJvbXB0IjoiUDogVW0gem9vbMOzZ2ljbyBjb2JyYSBSJDEyIHBvciBpbmdyZXNzbyBwYXJhIGFkdWx0b3MgZSBwZXJtaXRlIHF1ZSBhcyBjcmlhbsOnYXMgY29tIG1lbm9zIGRlIDUgYW5vcyBlbnRyZW0gZGUgZ3Jhw6dhLiBVbWEgZmFtw61saWEgZGUgNCBhZHVsdG9zIGUgMiBjcmlhbsOnYXMgY29tIG1lbm9zIGRlIDUgYW5vcyB2aXNpdGFtIG8gem9vbMOzZ2ljby4gUXVhbCDDqSBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3DrWxpYSBlbnRyYXI%2FXG5NQTogRW0gdW0gem9vbMOzZ2ljbywgY2FkYSBpbmdyZXNzbyBwYXJhIGFkdWx0b3MgY3VzdGEgJEEgZSBhcyBjcmlhbsOnYXMgY29tIG1lbm9zIGRlIDUgYW5vcyBwb2RlbSBlbnRyYXIgZGUgZ3Jhw6dhLiBTZSB1bWEgZmFtw61saWEgZGUgQiBhZHVsdG9zIGUgQyBjcmlhbsOnYXMgY29tIG1lbm9zIGRlIDUgYW5vcyB2aXNpdGFyIG8gem9vbMOzZ2ljbywgcXVhbCDDqSBvIGN1c3RvIHRvdGFsIHBhcmEgYSBmYW3DrWxpYSBlbnRyYXI%2FXG5NQVBFQU1FTlRPOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cblA6IFVtYSBsb2phIHZlbmRlIHNhcGF0b3MgYSAkNjAgcG9yIHBhciBlIG1laWFzIGEgJDggcG9yIHBhci4gU2UgdW0gY2xpZW50ZSBjb21wcmFyIDIgcGFyZXMgZGUgc2FwYXRvcyBlIDMgcGFyZXMgZGUgbWVpYXMsIHF1YWwgw6kgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FXG5NQTogRW0gdW1hIGxvamEsIG9zIHNhcGF0b3MgY3VzdGFtICRBIHBvciBwYXIgZSBhcyBtZWlhcyBjdXN0YW0gJEIgcG9yIHBhci4gU2UgdW0gY2xpZW50ZSBjb21wcmFyIEMgcGFyZXMgZGUgc2FwYXRvcyBlIEQgcGFyZXMgZGUgbWVpYXMsIHF1YWwgw6kgbyBjdXN0byB0b3RhbCBkYSBjb21wcmE%2FXG5NQVBFQU1FTlRPOiB7QTogNjAsIEI6IDgsIEM6IDIsIEQ6IDN9XG5cblA6IEVtIHVtIHJlc3RhdXJhbnRlLCBjYWRhIHJlZmVpw6fDo28gcGFyYSBhZHVsdG9zIGN1c3RhICQ1IGUgYXMgY3JpYW7Dp2FzIGNvbWVtIGRlIGdyYcOnYS4gU2UgdW0gZ3J1cG8gZGUgMTUgcGVzc29hcyBlbnRyYXNzZSBlIDggZm9zc2VtIGNyaWFuw6dhcywgcXVhbnRvIGlzc28gY3VzdGFyaWEgcGFyYSBvIGdydXBvIGNvbWVyPyIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.kt)("h2",{id:"passo-2-prompts-matem\xe1ticos"},"Passo 2: Prompts Matem\xe1ticos"),(0,s.kt)("p",null,"O objetivo deste passo \xe9 formular o problema como uma declara\xe7\xe3o alg\xe9brica e como c\xf3digo Python. Este passo tem dois prompts simult\xe2neos, que ajudam a dar representa\xe7\xf5es diversas do problema."),(0,s.kt)("h3",{id:"2a-declara\xe7\xe3o-alg\xe9brica"},"2a: Declara\xe7\xe3o Alg\xe9brica"),(0,s.kt)("p",null,'Podemos fazer o prompt de poucas amostras (few-shot) para que o LLM represente o problema matem\xe1tico como uma declara\xe7\xe3o alg\xe9brica. Isso \xe9 feito pedindo ao LLM para gerar o formato da resposta, come\xe7ando com "Resposta =".'),(0,s.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlJlc3Bvc3RhID0gQSAqIEIgLSBBICogQyIsInByb21wdCI6IlA6IEVtIHVtIHpvb2zDs2dpY28sIGNhZGEgaW5ncmVzc28gZGUgYWR1bHRvIGN1c3RhICQgQSBlIGNyaWFuw6dhcyBtZW5vcmVzIGRlIDUgYW5vcyBwb2RlbSBlbnRyYXIgZGUgZ3Jhw6dhLiBTZSB1bWEgZmFtw61saWEgZGUgQiBhZHVsdG9zIGUgQyBjcmlhbsOnYXMgbWVub3JlcyBkZSA1IGFub3MgdmlzaXRhciBvIHpvb2zDs2dpY28sIHF1YWwgw6kgbyBjdXN0byB0b3RhbCBwYXJhIGEgZmFtw61saWEgZW50cmFyP1xuTWFwZWFtZW50bzoge0E6IDEyLCBCOiA0LCBDOiAyfVxuXG5Fc2NyZXZhIHVtYSBlcXVhw6fDo28gbWF0ZW3DoXRpY2EgZSBnZXJlIG8gZm9ybWF0byBkZSByZXNwb3N0YSBjb21lw6dhbmRvIGNvbSAnUmVzcG9zdGEgPSdcblJlc3Bvc3RhID0gQSAqIEJcblxuUDogRW0gdW1hIGxvamEsIG9zIHNhcGF0b3MgY3VzdGFtICQgQSBwb3IgcGFyIGUgYXMgbWVpYXMgY3VzdGFtICQgQiBwb3IgcGFyLiBTZSB1bSBjbGllbnRlIGNvbXByYSBDIHBhcmVzIGRlIHNhcGF0b3MgZSBEIHBhcmVzIGRlIG1laWFzLCBxdWFsIMOpIG8gY3VzdG8gdG90YWwgZGEgY29tcHJhP01hcGVhbWVudG86IHtBOiA2MCwgQjogOCwgQzogMiwgRDogM31cblxuRXNjcmV2YSB1bWEgZXF1YcOnw6NvIG1hdGVtw6F0aWNhIGUgZ2VyZSBvIGZvcm1hdG8gZGUgcmVzcG9zdGFcbmNvbWXDp2FuZG8gY29tICdSZXNwb3N0YSA9J1xuXG5SZXNwb3N0YSA9IEEgKiBDICsgQiAqIERcblxuUDogRW0gdW0gcmVzdGF1cmFudGUsIGNhZGEgcmVmZWnDp8OjbyBwYXJhIGFkdWx0byBjdXN0YSAkIEEgZSBhcyBjcmlhbsOnYXMgY29tZW0gZGUgZ3Jhw6dhLiBTZSB1bSBncnVwbyBkZSBCIHBlc3NvYXMgZW50cm91IGUgQyBlcmFtIGNyaWFuw6dhcywgcXVhbnRvIGN1c3RhcmlhIHBhcmEgbyBncnVwbyBjb21lcj9cbk1hcGVhbWVudG86IHtBOiA1LCBCOiAxNSwgQzogOH1cblxuRXNjcmV2YSB1bWEgZXF1YcOnw6NvIG1hdGVtw6F0aWNhIGUgZ2VyZSBvIGZvcm1hdG8gZGUgcmVzcG9zdGEgY29tZcOnYW5kbyBjb20gJ1Jlc3Bvc3RhID0nIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.kt)("h3",{id:"2b-c\xf3digo-em-python"},"2b: C\xf3digo em Python"),(0,s.kt)("p",null,"Tamb\xe9m podemos pedir ao ",(0,s.kt)("a",{parentName:"p",id:"LLM_0_24_1697567641028","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,s.kt)(l.u,{anchorId:"LLM_0_24_1697567641028",clickable:!0,mdxType:"Tooltip"})," que gere c\xf3digo Python que resolva o problema. Isso \xe9 feito pedindo ao LLM para gerar uma fun\xe7\xe3o Python."),(0,s.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6ImRlZiBjdXN0b19yZXN0YXVyYW50ZShBLCBCLCBDKTpcbiAgcmV0dXJuIEEgKiAoQiAtIEMpIiwicHJvbXB0IjoiUXQ6IEVtIHVtIHpvb2zDs2dpY28sIGNhZGEgaW5ncmVzc28gYWR1bHRvIGN1c3RhICQgQSBlIGNyaWFuw6dhcyBtZW5vcmVzIGRlIDUgYW5vcyBwb2RlbSBlbnRyYXIgZGUgZ3Jhw6dhLiBTZSB1bWEgZmFtw61saWEgZGUgQiBhZHVsdG9zIGUgQyBjcmlhbsOnYXMgbWVub3JlcyBkZSA1IGFub3MgdmlzaXRhciBvIHpvb2zDs2dpY28sIHF1YWwgw6kgbyBjdXN0byB0b3RhbCBwYXJhIGEgZmFtw61saWEgZW50cmFyP1xuXG5NYXBlYW1lbnRvOiB7QTogMTIsIEI6IDQsIEM6IDJ9XG5cbkVzY3JldmEgdW1hIGZ1bsOnw6NvIFB5dGhvbiBxdWUgcmV0b3JuZSBhIHJlc3Bvc3RhLlxuXG5kZWYgY3VzdG9fem9vKEEsIEIsIEMpOlxuICByZXR1cm4gQSAqIEJcblxuXG5RdDogRW0gdW1hIGxvamEsIHNhcGF0b3MgY3VzdGFtICQgQSBwb3IgcGFyIGUgbWVpYXMgY3VzdGFtICQgQiBwb3IgcGFyLiBTZSB1bSBjbGllbnRlIGNvbXByYXIgQyBwYXJlcyBkZSBzYXBhdG9zIGUgRCBwYXJlcyBkZSBtZWlhcywgcXVhbCDDqSBvIGN1c3RvIHRvdGFsIGRhIGNvbXByYT9cblxuRXNjcmV2YSB1bWEgZnVuw6fDo28gUHl0aG9uIHF1ZSByZXRvcm5lIGEgcmVzcG9zdGEuXG5cbmRlZiBjdXN0b19sb2phKEEsIEIsIEMsIEQpOlxuICByZXR1cm4gKEEgKiBDKSArIChCICogRClcblxuXG5RdDogRW0gdW0gcmVzdGF1cmFudGUsIGNhZGEgcmVmZWnDp8OjbyBhZHVsdGEgY3VzdGEgJCBBIGUgY3JpYW7Dp2FzIGNvbWVtIGRlIGdyYcOnYS4gU2UgdW0gZ3J1cG8gZGUgQiBwZXNzb2FzIGVudHJvdSBlIEMgZXJhbSBjcmlhbsOnYXMsIHF1YW50byBjdXN0YXJpYSBwYXJhIG8gZ3J1cG8gY29tZXI%2FXG5cbkVzY3JldmEgdW1hIGZ1bsOnw6NvIFB5dGhvbiBxdWUgcmV0b3JuZSBhIHJlc3Bvc3RhLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,s.kt)("h3",{id:"gera\xe7\xe3o-de-respostas"},"Gera\xe7\xe3o de Respostas"),(0,s.kt)("p",null,"Agora, podemos usar o Mapeamento que geramos anteriormente para preencher automaticamente as vari\xe1veis."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Mapeamento: {A: 5, B: 15, C: 8}\n")),(0,s.kt)("p",null,"Alg\xe9brico:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Answer = 5 * 15 - 5 * 8\n")),(0,s.kt)("p",null,"C\xf3digo em Python:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def custo_restaurante(A=5, B=15, C=8):\n  return A * (B - C)\n")),(0,s.kt)("p",null,"Podemos avaliar ambos usando Python."),(0,s.kt)("p",null,"Alg\xe9brico:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'>>> eval("5 * 15 - 5 * 8")\n35\n')),(0,s.kt)("p",null,"C\xf3digo em Python:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},">>> custo_restaurante()\n35\n")),(0,s.kt)("h2",{id:"passo-4-auto-consist\xeancia"},"Passo 4: Auto-Consist\xeancia"),(0,s.kt)("p",null,"Finalmente, vamos aproveitar a ",(0,s.kt)("a",{parentName:"p",id:"self_consistency_0_31_1697567641028","data-tooltip-html":"Generating multiple chains of thought and taking the majority answer.<br>See <a href='https://learnprompting.org/docs/intermediate/self_consistency'>Self Consistency</a>","data-tooltip-place":"top"},"Auto-Consist\xeancia"),(0,s.kt)(l.u,{anchorId:"self_consistency_0_31_1697567641028",clickable:!0,mdxType:"Tooltip"})," para executar o processo acima v\xe1rias vezes (~5), e ent\xe3o tomar a resposta da maioria."),(0,s.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,s.kt)("p",null,"O MathPrompter relata 92,5% de precis\xe3o no conjunto de dados MultiArith",(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". O sucesso dessa t\xe9cnica \xe9 um \xf3timo exemplo de como ",(0,s.kt)("strong",{parentName:"p"},"voc\xea"),", como um engenheiro de prompts, pode combinar m\xe9todos que aprendeu ao longo deste curso e combin\xe1-los para lidar com problemas maiores."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"Imani, S., Du, L., & Shrivastava, H. (2023). MathPrompter: Mathematical Reasoning using Large Language Models.\n",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-2"},"Roy, S., & Roth, D. (2015). Solving General Arithmetic Word Problems. Proceedings of the 2015 Conference on Empirical Methods in Natural Language Processing, 1743\u20131752. https://doi.org/10.18653/v1/D15-1202\n",(0,s.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}I.isMDXComponent=!0}}]);