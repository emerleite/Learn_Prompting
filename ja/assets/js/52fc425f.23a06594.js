"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7006],{51321:(i,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var o=e(87462),n=(e(67294),e(3905)),a=e(16912),r=e(39145);const s={sidebar_position:0},p="\ud83d\udfe2 Introduction",c={unversionedId:"prompt_hacking/intro",id:"prompt_hacking/intro",title:"\ud83d\udfe2 Introduction",description:"Prompt hacking is a term used to describe a type of attack that exploits the vulnerabilities of %%LLMs|LLM%%, by manipulating their inputs or prompts. Unlike traditional hacking, which typically exploits software vulnerabilities, prompt hacking relies on carefully crafting prompts to deceive the LLM into performing unintended actions.",source:"@site/docs/prompt_hacking/intro.md",sourceDirName:"prompt_hacking",slug:"/prompt_hacking/intro",permalink:"/Learn_Prompting/ja/docs/prompt_hacking/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd13 Prompt Hacking",permalink:"/Learn_Prompting/ja/docs/category/-prompt-hacking"},next:{title:"\ud83d\udfe2 Prompt Injection",permalink:"/Learn_Prompting/ja/docs/prompt_hacking/injection"}},l={},g=[],m={toc:g},k="wrapper";function u(i){let{components:t,...e}=i;return(0,n.kt)(k,(0,o.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-introduction"},"\ud83d\udfe2 Introduction"),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:a.Z,style:{width:"30%"}})),(0,n.kt)("p",null,"Prompt hacking is a term used to describe a type of attack that exploits the vulnerabilities of ",(0,n.kt)("a",{parentName:"p",id:"LLM_0_96_1697556249282","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLMs"),(0,n.kt)(r.u,{anchorId:"LLM_0_96_1697556249282",clickable:!0,mdxType:"Tooltip"}),", by manipulating their inputs or prompts. Unlike traditional hacking, which typically exploits software vulnerabilities, prompt hacking relies on carefully crafting prompts to deceive the LLM into performing unintended actions."),(0,n.kt)("p",null,"We will cover three types of prompt hacking: prompt injection, prompt leaking, and jailbreaking. Prompt injection involves adding malicious or unintended content to a prompt to hijack the language model's output. Prompt leaking and jailbreaking are effectively subsets of this: Prompt leaking involves extracting sensitive or confidential information from the LLM's responses, while jailbreaking involves bypassing safety and moderation features. We will also discuss specific offensive techniques as well as defensive techniques."),(0,n.kt)("p",null,"To protect against prompt hacking, defensive measures must be taken. These include implementing prompt based defenses, regularly monitoring the LLM's behavior and outputs for unusual activity, and using fine tuning or other techniques. Overall, prompt hacking is a growing concern for the security of LLMs, and it is essential to remain vigilant and take proactive steps to protect against these types of attacks."))}u.isMDXComponent=!0},16912:(i,t,e)=>{e.d(t,{Z:()=>o});const o="data:image/webp;base64,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"}}]);