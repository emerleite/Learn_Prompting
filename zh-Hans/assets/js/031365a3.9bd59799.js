"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6350],{43522:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var n=a(87462),p=(a(67294),a(3905));const i=a.p+"assets/images/chatgpt_interface-c50c2bd2876394ba935fdea8609fc493.webp";var o=a(39145);const r={sidebar_position:1},l="\ud83d\udfe2 \u4f7f\u7528 ChatGPT \u8fdb\u884c\u63d0\u793a",m={unversionedId:"basics/prompting",id:"basics/prompting",title:"\ud83d\udfe2 \u4f7f\u7528 ChatGPT \u8fdb\u884c\u63d0\u793a",description:"- \u8bbe\u7f6e ChatGPT",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/prompting.md",sourceDirName:"basics",slug:"/basics/prompting",permalink:"/Learn_Prompting/zh-Hans/docs/basics/prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/prompting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 AI \u7b80\u4ecb",permalink:"/Learn_Prompting/zh-Hans/docs/basics/intro"},next:{title:"\ud83d\udfe2 \u63d0\u793a\u5de5\u7a0b",permalink:"/Learn_Prompting/zh-Hans/docs/basics/prompt_engineering"}},s={},d=[{value:"\u8bbe\u7f6e ChatGPT",id:"\u8bbe\u7f6e-chatgpt",level:2},{value:"\u5728 ChatGPT \u4e0a\u6d4b\u8bd5\u63d0\u793a",id:"\u5728-chatgpt-\u4e0a\u6d4b\u8bd5\u63d0\u793a",level:2},{value:"1) \u8349\u7684\u989c\u8272",id:"1-\u8349\u7684\u989c\u8272",level:4},{value:"2) \u6458\u8981\u6587\u7ae0",id:"2-\u6458\u8981\u6587\u7ae0",level:4},{value:"3) \u89e3\u51b3\u6570\u5b66\u95ee\u9898",id:"3-\u89e3\u51b3\u6570\u5b66\u95ee\u9898",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.kt)("div",e)},k=c("AIInput"),u=c("AIOutput"),h={toc:d},f="wrapper";function g(t){let{components:e,...a}=t;return(0,p.kt)(f,(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"-\u4f7f\u7528-chatgpt-\u8fdb\u884c\u63d0\u793a"},"\ud83d\udfe2 \u4f7f\u7528 ChatGPT \u8fdb\u884c\u63d0\u793a"),(0,p.kt)("div",{style:{textAlign:"center"}},(0,p.kt)("img",{src:i,className:"img-docs",style:{width:"80%"}})),(0,p.kt)("br",null),(0,p.kt)("admonition",{title:"\u672c\u6587\u8981\u70b9",type:"takeaways"},(0,p.kt)("ul",{parentName:"admonition"},(0,p.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e ChatGPT"),(0,p.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ChatGPT \u5bf9\u6587\u672c\u8fdb\u884c\u6458\u8981\u5e76\u89e3\u51b3\u6570\u5b66\u95ee\u9898"))),(0,p.kt)("p",null,"\u5728\u4e0a\u4e00\u7ae0\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86 AI \u4ee5\u53ca\u4eba\u7c7b\u5982\u4f55\u6307\u5bfc AI \u6765\u6267\u884c\u4efb\u52a1\u3002\u4f7f\u7528\u63d0\u793a\u8bcd(prompt)\u6765\u6307\u5bfc AI \u6267\u884c\u4efb\u52a1\u7684\u8fc7\u7a0b\u79f0\u4e3a\u63d0\u793a\uff08prompting\uff09",(0,p.kt)("sup",{parentName:"p",id:"fnref-1"},(0,p.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,p.kt)("a",{parentName:"p",href:"http://chat.openai.com"},"ChatGPT"),(0,p.kt)("sup",{parentName:"p",id:"fnref-a"},(0,p.kt)("a",{parentName:"sup",href:"#fn-a",className:"footnote-ref"},"a"))," \u6765\u63a2\u7d22\u63d0\u793a\u3002ChatGPT \u662f\u4e00\u4e2a\u975e\u5e38\u53d7\u6b22\u8fce\u7684\u5927\u8bed\u8a00\u6a21\u578b(",(0,p.kt)("a",{parentName:"p",id:"LLM_5_30_1697556600674","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLM"),(0,p.kt)(o.u,{anchorId:"LLM_5_30_1697556600674",clickable:!0,mdxType:"Tooltip"}),")\uff0c\u7531 OpenAI \u5f00\u53d1\uff0c\u5b83\u80fd\u591f\u7406\u89e3\u548c\u751f\u6587\u672c\uff0c\u662f\u76ee\u524d\u662f\u6700\u6613\u7528\u7684\u751f\u6210\u5f0f AI \u4e14\u4f7f\u7528\u5b8c\u5168\u514d\u8d39\u3002"),(0,p.kt)("h2",{id:"\u8bbe\u7f6e-chatgpt"},"\u8bbe\u7f6e ChatGPT"),(0,p.kt)("p",null,"\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\u4ee5\u5f00\u59cb\u4f7f\u7528 ChatGPT:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,p.kt)("a",{parentName:"li",href:"http://chat.openai.com"},"http://chat.openai.com"),"\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u5982\u679c\u60a8\u8fd8\u6ca1\u6709 OpenAI \u8d26\u6237\uff0c\u8bf7\u6309\u7167\u6307\u793a\u6ce8\u518c\u4e00\u4e2a\u65b0\u8d26\u6237\u3002"),(0,p.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u60a8\u521b\u5efa\u7684 OpenAI \u8d26\u6237\u767b\u5f55\u3002")),(0,p.kt)("p",null,"\u8fd9\u4e2a\u89c6\u9891\u5411\u4f60\u5c55\u793a\u4e86\u5982\u4f55\u8bbe\u7f6e ChatGPT."),(0,p.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/FMEzy2jo84c",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}),(0,p.kt)("h2",{id:"\u5728-chatgpt-\u4e0a\u6d4b\u8bd5\u63d0\u793a"},"\u5728 ChatGPT \u4e0a\u6d4b\u8bd5\u63d0\u793a"),(0,p.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u8bbe\u7f6e\u597d\u4e86 ChatGPT\uff0c\u8ba9\u6211\u4eec\u6765\u6d4b\u8bd5\u4e00\u4e9b\u63d0\u793a\u5427\u3002"),(0,p.kt)("h4",{id:"1-\u8349\u7684\u989c\u8272"},"1) \u8349\u7684\u989c\u8272"),(0,p.kt)("p",null,"\u6211\u4eec\u4ece\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u95ee\u9898\u5f00\u59cb\uff1aChatGPT \u80fd\u544a\u8bc9\u6211\u4eec\u8349\u7684\u989c\u8272\u5417\uff1f"),(0,p.kt)(k,{mdxType:"AIInput"},"\u8349\u662f\u4ec0\u4e48\u989c\u8272\uff1f"),(0,p.kt)(u,{mdxType:"AIOutput"},"\u8349\u4e00\u822c\u662f\u7eff\u8272\u7684\u3002"),(0,p.kt)("p",null,"\u786e\u5b9e\u53ef\u4ee5\uff0c\u73b0\u5728\u8ba9\u6211\u4eec\u5c1d\u8bd5\u4e00\u4e2a\u66f4\u5b9e\u7528\u7684\u4f8b\u5b50\u3002"),(0,p.kt)("h4",{id:"2-\u6458\u8981\u6587\u7ae0"},"2) \u6458\u8981\u6587\u7ae0"),(0,p.kt)("p",null,"\u5047\u8bbe\u4f60\u6b63\u5728\u9605\u8bfb\u4e00\u7bc7\u5173\u4e8e\u4f5b\u7f57\u91cc\u8fbe\u5dde\u4e0b\u96ea\u7684\u6587\u7ae0\u3002\u4f60\u60f3\u5feb\u901f\u4e86\u89e3\u6587\u7ae0\u7684\u4e3b\u8981\u5185\u5bb9\uff0c\u6240\u4ee5\u4f60\u5411 AI \u5c55\u793a\u4f60\u6b63\u5728\u9605\u8bfb\u7684\u5185\u5bb9\uff0c\u5e76\u8981\u6c42\u5b83\u8fdb\u884c\u6458\u8981",(0,p.kt)("sup",{parentName:"p",id:"fnref-b"},(0,p.kt)("a",{parentName:"sup",href:"#fn-b",className:"footnote-ref"},"b")),":"),(0,p.kt)(k,{mdxType:"AIInput"},"\u4f5b\u7f57\u91cc\u8fbe\u5dde\u5f88\u5c11\u4e0b\u96ea\uff0c\u7279\u522b\u662f\u4e2d\u90e8\u548c\u5357\u90e8\u5730\u533a\u3002\u9664\u4e86\u8be5\u5dde\u5317\u90e8\u7684\u4e00\u4e9b\u5730\u533a\uff0c\u5927\u90e8\u5206\u4f5b\u7f57\u91cc\u8fbe\u5dde\u7684\u4e3b\u8981\u57ce\u5e02\u4ece\u672a\u8bb0\u5f55\u5230\u53ef\u6d4b\u91cf\u7684\u964d\u96ea\uff0c\u5c3d\u7ba1\u5076\u5c14\u4f1a\u8bb0\u5f55\u5230\u96f6\u661f\u7684\u5fae\u91cf\u964d\u96ea\uff0c\u6216\u8005\u6bcf\u4e2a\u4e16\u7eaa\u89c2\u5bdf\u5230\u51e0\u6b21\u96ea\u82b1\u98d8\u843d\u3002\u6839\u636e\u56fd\u5bb6\u6c14\u8c61\u5c40\u7684\u6570\u636e\u663e\u793a\uff0c\u5728\u4f5b\u7f57\u91cc\u8fbe\u7fa4\u5c9b\u548c\u57fa\u97e6\u65af\u7279\u7fa4\u5c9b\u5730\u533a\uff0c\u81ea\u6b27\u6d32\u6b96\u6c11\u4ee5\u6765\u7684 300 \u591a\u5e74\uff0c\u6ca1\u6709\u53d1\u73b0\u8fc7\u964d\u96ea\u7684\u60c5\u51b5\u3002\u8fc8\u963f\u5bc6\u3001\u52b3\u5fb7\u4ee3\u5c14\u5821\u548c\u68d5\u6988\u6ee9\u5730\u533a\u5728 200 \u591a\u5e74\u7684\u5386\u53f2\u4e2d\u53ea\u6709\u4e00\u6b21\u89c2\u6d4b\u5230\u96ea\u82b1\uff0c\u8fd9\u53d1\u751f\u5728 1977 \u5e74\u7684\u4e00\u6708\u4efd\u3002\u7136\u800c\uff0c\u81ea\u4ece 1977 \u5e74\u4ee5\u6765\uff0c\u8fc8\u963f\u5bc6\u3001\u52b3\u5fb7\u4ee3\u5c14\u5821\u548c\u68d5\u6988\u6ee9\u5730\u533a\u518d\u4e5f\u6ca1\u6709\u89c2\u6d4b\u5230\u96ea\u82b1\u3002",(0,p.kt)("p",null,"\u7528\u4e00\u53e5\u8bdd\u603b\u7ed3\u8fd9\u4e2a\u6bb5\u843d\uff1a")),(0,p.kt)("p",null,"\u4ee5\u4e0b\u662f ChatGPT \u7684\u56de\u590d\uff0c\u5b83\u66f4\u52a0\u7b80\u6d01\uff01"),(0,p.kt)(u,{mdxType:"AIOutput"},"\u4f5b\u7f57\u91cc\u8fbe\u5dde\u5f88\u5c11\u4e0b\u96ea\uff0c\u9664\u4e86\u6781\u5317\u90e8\u5730\u533a\u5916\uff0c\u8fc8\u963f\u5bc6\u3001\u52b3\u5fb7\u4ee3\u5c14\u5821\u548c\u68d5\u6988\u6ee9\u8fd9\u51e0\u4e2a\u4e3b\u8981\u57ce\u5e02\uff0c\u5728\u8fc7\u53bb\u7684 200 \u5e74\u4e2d\u4ec5\u6709\u4e00\u6b21\u8bb0\u5f55\u5230\u96ea\u82b1\u98d8\u843d\u5728\u7a7a\u4e2d\u3002"),(0,p.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,p.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u80fd\u4f1a\u770b\u5230\u8f93\u51fa\u7ed3\u679c\u7684\u7ec6\u5fae\u5dee\u5f02\u3002\u5728\u672c\u8bfe\u7a0b\u4e2d\u7684\u5927\u591a\u6570\u63d0\u793a\u4e2d\u90fd\u4f1a\u51fa\u73b0\u8fd9\u6837\u7684\u60c5\u51b5\u3002\u6211\u4eec\u5c06\u5728\u672c\u6a21\u5757\u7684\u540e\u9762\u5b66\u4e60\u539f\u56e0\u3002")),(0,p.kt)("h4",{id:"3-\u89e3\u51b3\u6570\u5b66\u95ee\u9898"},"3) \u89e3\u51b3\u6570\u5b66\u95ee\u9898"),(0,p.kt)("p",null,"ChatGPT \u8fd8\u53ef\u4ee5\u89e3\u51b3\u6570\u5b66\u95ee\u9898\uff01\u8ba9\u6211\u4eec\u7ed9\u5b83\u4e00\u4e2a\u7b80\u5355\u7684\u95ee\u9898\u6765\u8fdb\u884c\u63d0\u793a\u3002"),(0,p.kt)(k,{mdxType:"AIInput"},"\u5982\u679c\u6211\u6709 20 \u4e2a\u82f9\u679c\uff0c\u5403\u6389 3 \u4e2a\uff0c\u7136\u540e\u518d\u5356\u6389 3 \u4e2a\uff0c\u6211\u8fd8\u5269\u4e0b\u591a\u5c11\u4e2a\u82f9\u679c\uff1f"),(0,p.kt)(u,{mdxType:"AIOutput"},"\u5982\u679c\u4f60\u6709 20 \u4e2a\u82f9\u679c\uff0c\u5403\u6389\u5176\u4e2d 3 \u4e2a\uff0c\u4f60\u5c31\u4f1a\u5269\u4e0b 20 - 3 = 17 \u4e2a\u82f9\u679c\u3002",(0,p.kt)("p",null,"\u5728\u5403\u6389\u4e09\u4e2a\u82f9\u679c\u4e4b\u540e\uff08\u5269\u4e0b 17 \u4e2a\uff09\uff0c\u5982\u679c\u4f60\u518d\u5356\u6389\u4e09\u4e2a\u82f9\u679c\uff0c\u4f60\u5c31\u4f1a\u5269\u4e0b 17 - 3 = 14 \u4e2a\u82f9\u679c\u3002")),(0,p.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,p.kt)("p",null,"\u73b0\u5728\uff0c\u60a8\u5e94\u8be5\u5bf9 ",(0,p.kt)("a",{parentName:"p",id:"prompt_0_8_1697556600674","data-tooltip-html":"A text or other input to a Generatve AI","data-tooltip-place":"top"},"prompt"),(0,p.kt)(o.u,{anchorId:"prompt_0_8_1697556600674",clickable:!0,mdxType:"Tooltip"})," \u662f\u4ec0\u4e48\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 ChatGPT \u8fdb\u884c\u57fa\u672c\u63d0\u793a\u6709\u6240\u4e86\u89e3\u3002"),(0,p.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0c",(0,p.kt)("em",{parentName:"p"},"\u63d0\u793a(prompt)")," \u53ef\u4ee5\u662f\u4e00\u4e2a\u52a8\u8bcd\u6216\u4e00\u4e2a\u540d\u8bcd\u3002\u4f60\u53ef\u4ee5 ",(0,p.kt)("em",{parentName:"p"},"\u63d0\u793a(prompt)")," \u4e00\u4e2a\u6a21\u578b\uff0c\u4e5f\u53ef\u4ee5 ",(0,p.kt)("em",{parentName:"p"},"\u7ed9\u6a21\u578b\u4e00\u4e2a\u63d0\u793a"),"\u3002\u8fd9\u4e24\u4e2a\u77ed\u8bed\u7684\u610f\u601d\u662f\u76f8\u540c\u7684\u3002\u7ed9\u6a21\u578b\u4e00\u4e2a\u63d0\u793a\u7684\u884c\u4e3a\u88ab\u79f0\u4e3a prompting\uff08\u63d0\u793a\uff09\u3002\u6211\u4eec\u5c06\u5728\u4e0b\u4e00\u8bfe\u4e2d\u5b66\u4e60\u66f4\u591a\u5173\u4e8e prompting \u7684\u5185\u5bb9\u3002"),(0,p.kt)("div",{className:"footnotes"},(0,p.kt)("hr",{parentName:"div"}),(0,p.kt)("ol",{parentName:"div"},(0,p.kt)("li",{parentName:"ol",id:"fn-1"},"Shin, T., Razeghi, Y., Logan IV, R. L., Wallace, E., & Singh, S. (2020). AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts. Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP). https://doi.org/10.18653/v1/2020.emnlp-main.346\n",(0,p.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,p.kt)("li",{parentName:"ol",id:"fn-a"},"GPT-4 \u662f OpenAI \u5f00\u53d1\u7684\u53e6\u4e00\u4e2a\u66f4\u9ad8\u7ea7\u7684\u6a21\u578b\uff0c\u4f46\u9700\u8981\u4ed8\u8d39\u3002",(0,p.kt)("a",{parentName:"li",href:"#fnref-a",className:"footnote-backref"},"\u21a9")),(0,p.kt)("li",{parentName:"ol",id:"fn-b"},"\u8fd9\u4e2a\u6bb5\u843d\u6765\u81ea ",(0,p.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Snow_in_Florida"},"https://en.wikipedia.org/wiki/Snow_in_Florida"),(0,p.kt)("a",{parentName:"li",href:"#fnref-b",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);