"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3714],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(o),d=r,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return o?n.createElement(g,i(i({ref:t},u),{},{components:o})):n.createElement(g,i({ref:t},u))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},35241:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(87462),r=(o(67294),o(3905));const a={sidebar_position:50},i="Prompt Engineering Tools",l={unversionedId:"tooling/tools",id:"tooling/tools",title:"Prompt Engineering Tools",description:"This section contains a list of non-IDE tools that are useful for prompting.",source:"@site/docs/tooling/tools.md",sourceDirName:"tooling",slug:"/tooling/tools",permalink:"/Learn_Prompting/pt/docs/tooling/tools",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/tooling/tools.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd28 Tooling",permalink:"/Learn_Prompting/pt/docs/category/-tooling"},next:{title:"Prompt Engineering IDEs",permalink:"/Learn_Prompting/pt/docs/category/prompt-engineering-ides"}},p={},s=[{value:"Prompt Development, Testing, and Chaining",id:"prompt-development-testing-and-chaining",level:2},{value:"LangChain",id:"langchain",level:3},{value:"PromptAppGPT",id:"promptappgpt",level:3},{value:"Prompt-generator-for-ChatGPT",id:"prompt-generator-for-chatgpt",level:3},{value:"Dust.tt",id:"dusttt",level:3},{value:"OpenPrompt(@ding2021openprompt)",id:"openpromptding2021openprompt",level:3},{value:"BetterPrompt",id:"betterprompt",level:3},{value:"Prompt Engine",id:"prompt-engine",level:3},{value:"Promptify",id:"promptify",level:3},{value:"PromptFlow",id:"promptflow",level:3},{value:"TextBox(@tang2022textbox)",id:"textboxtang2022textbox",level:3},{value:"ThoughtSource",id:"thoughtsource",level:3},{value:"Misc.",id:"misc",level:2},{value:"GPT Index(@Liu_GPT_Index_2022)",id:"gpt-indexliu_gpt_index_2022",level:3},{value:"Deforum",id:"deforum",level:3},{value:"Visual Prompt Builder",id:"visual-prompt-builder",level:3},{value:"Interactive Composition Explorer",id:"interactive-composition-explorer",level:3},{value:"PTPT - Prompt To Plain Text",id:"ptpt---prompt-to-plain-text",level:3},{value:"Orquesta AI Prompts",id:"orquesta-ai-prompts",level:3},{value:"Other",id:"other",level:3}],u={toc:s},m="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prompt-engineering-tools"},"Prompt Engineering Tools"),(0,r.kt)("p",null,"This section contains a list of non-IDE tools that are useful for prompting."),(0,r.kt)("h2",{id:"prompt-development-testing-and-chaining"},"Prompt Development, Testing, and Chaining"),(0,r.kt)("h3",{id:"langchain"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/hwchase17/langchain/"},"LangChain")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Large language models (LLMs) are emerging as a transformative technology, enabling developers to build applications that they previously could not. But using these LLMs in isolation is often not enough to create a truly powerful app - the real power comes when you can combine them with other sources of computation or knowledge.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This library is aimed at assisting in the development of those types of applications.")),(0,r.kt)("h3",{id:"promptappgpt"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/mleoking/PromptAppGPT"},"PromptAppGPT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PromptAppGPT is a low-code prompt-based rapid app development framework. PromptAppGPT contains features such as low-code prompt-based development, GPT text generation, DALLE image generation, online prompt editer+compiler+runer, automatic user interface generation, support for plug-in extensions, etc. PromptAppGPT aims to enable natural language app development based on GPT.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PromptAppGPT provides multi-task conditional triggering, result verification, and failure retry capabilities, allowing manual generation tasks that would otherwise require multiple steps to be automated. At the same time, users no longer need to memorise and enter the tedious prompt mantra themselves, and can easily complete tasks by entering only the core necessary information for the task.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PromptAppGPT significantly lowers the barrier to GPT application development, allowing anyone to develop AutoGPT-like applications with a few lines of low code.")),(0,r.kt)("h3",{id:"prompt-generator-for-chatgpt"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/rubend18/Prompt-generator-for-ChatGPT"},"Prompt-generator-for-ChatGPT")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The "Prompt generator for ChatGPT" application is a desktop tool designed to help users generate character-specific prompts for ChatGPT, a chatbot model developed by OpenAI.')),(0,r.kt)("h3",{id:"dusttt"},(0,r.kt)("a",{parentName:"h3",href:"https://dust.tt"},"Dust.tt")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Dust platform helps build large language model applications as a series of prompted calls\nto external models. It provides an easy to use graphical UI to build chains of prompts, as well as a set of standard blocks and a custom programming language to parse and process language model outputs.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It provides a series of features to make development of applications faster,\neasier and more robust:"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"running multiple completions in parallel"),(0,r.kt)("li",{parentName:"ul"},"inspecting execution outputs"),(0,r.kt)("li",{parentName:"ul"},"versioning prompt chains "),(0,r.kt)("li",{parentName:"ul"},"custom programming language to process data and text"),(0,r.kt)("li",{parentName:"ul"},"API integration for various models and external services"))),(0,r.kt)("h3",{id:"openpromptding2021openprompt"},(0,r.kt)("a",{parentName:"h3",href:"https://thunlp.github.io/OpenPrompt/"},"OpenPrompt"),(0,r.kt)("sup",{parentName:"h3",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Prompt-learning is the latest paradigm to adapt pre-trained language models (PLMs) to downstream NLP tasks, which modifies the input text with a textual template and directly uses PLMs to conduct pre-trained tasks. OpenPrompt is a library built upon PyTorch and provides a standard, flexible and extensible framework to deploy the prompt-learning pipeline. OpenPrompt supports loading PLMs directly from huggingface transformers. In the future, we will also support PLMs implemented by other libraries.")),(0,r.kt)("h3",{id:"betterprompt"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/stjordanis/betterprompt"},"BetterPrompt")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a1 Test suite for LLM prompts before pushing them to PROD \u26a1")),(0,r.kt)("h3",{id:"prompt-engine"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/microsoft/prompt-engine"},"Prompt Engine")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NPM utility library for creating and maintaining prompts for Large Language Models (LLMs).")),(0,r.kt)("h3",{id:"promptify"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/promptslab/Promptify"},"Promptify")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Relying solely on LLMs is often insufficient to build applications & tools. To unlock their full potential, it's necessary to integrate LLMs with other sources of computation or knowledge and get the pipeline ready for production.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This library is aimed at assisting in developing a pipeline for using LLMs APIs in production, solving NLP Tasks such as NER, Classification, Question, Answering, Summarization, Text2Graph etc. and providing powerful agents for building chat agents for different tasks.")),(0,r.kt)("h3",{id:"promptflow"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/InsuranceToolkits/promptflow"},"PromptFlow")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PromptFlow is a free, open-source, low-code tool that allows users to integrate LLMs, prompts, Python functions, and conditional logic to create flowcharts. It includes nodes for:")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OpenAI API Calls (any model, including Whisper speech-to-text)\nAnthropic Claude Calls, Arbitrary Python Code blocks, and Long + Short term history management\nDatabase Queries, PostgresML integration, and Text Embeddings\nHTTP Requests, SerpAPI Google Searches, and ElevenLabs Speech Synthesis\nDocumentation can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.promptflow.org/en/latest/index.html"},"here"))),(0,r.kt)("h3",{id:"textboxtang2022textbox"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/RUCAIBox/TextBox"},"TextBox"),(0,r.kt)("sup",{parentName:"h3",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TextBox 2.0 is an up-to-date text generation library based on Python and PyTorch focusing on building a unified and standardized pipeline for applying pre-trained language models to text generation:")),(0,r.kt)("h3",{id:"thoughtsource"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/OpenBioLink/ThoughtSource"},"ThoughtSource")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"ThoughtSource is a central, open resource and community centered on data and tools for chain-of-thought reasoning in large language models (Wei 2022). Our long-term goal is to enable trustworthy and robust reasoning in advanced AI systems for driving scientific research and medical practice."')),(0,r.kt)("h2",{id:"misc"},"Misc."),(0,r.kt)("h3",{id:"gpt-indexliu_gpt_index_2022"},(0,r.kt)("a",{parentName:"h3",href:"https://gpt-index.readthedocs.io/en/latest/"},"GPT Index"),(0,r.kt)("sup",{parentName:"h3",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"GPT Index is a project consisting of a set of data structures designed to make it easier to use large external knowledge bases with LLMs")),(0,r.kt)("h3",{id:"deforum"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/HelixNGC7293/DeforumStableDiffusionLocal"},"Deforum")),(0,r.kt)("p",null,"AI animated videos"),(0,r.kt)("h3",{id:"visual-prompt-builder"},(0,r.kt)("a",{parentName:"h3",href:"https://tools.saxifrage.xyz/prompt"},"Visual Prompt Builder")),(0,r.kt)("p",null,"Build prompts, visually"),(0,r.kt)("h3",{id:"interactive-composition-explorer"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/oughtinc/ice"},"Interactive Composition Explorer")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ICE is a Python library and trace visualizer for language model programs.")),(0,r.kt)("h3",{id:"ptpt---prompt-to-plain-text"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/LeslieLeung/PTPT"},"PTPT - Prompt To Plain Text")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"PTPT is an command-line tool that allows you to easily convert plain text files using pre-defined prompts with the help of ChatGPT. With PTPT, you can effortlessly create and share prompt formats, making collaboration and customization a breeze. Plus, by subscribing, you gain access to even more prompts to enhance your experience. If you're interested in prompt engineering, you can use PTPT to develop and share your prompts.")),(0,r.kt)("h3",{id:"orquesta-ai-prompts"},(0,r.kt)("a",{parentName:"h3",href:"https://orquesta.cloud/platform/ai-llm-prompts"},"Orquesta AI Prompts")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Low-code collaboration platform for AI Prompts")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full prompt lifecycle management (from ideation to feedback collection)"),(0,r.kt)("li",{parentName:"ul"},"Enterprise-grade features and security"),(0,r.kt)("li",{parentName:"ul"},"Support for public, private, and custom LLMs"),(0,r.kt)("li",{parentName:"ul"},"Prompts based on custom context and business rules. Evaluations on the Edge"),(0,r.kt)("li",{parentName:"ul"},"Real-time logging and collection of performance and prompt economics")),(0,r.kt)("h3",{id:"other"},"Other"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gpttools.com"},"https://gpttools.com")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Ding, N., Hu, S., Zhao, W., Chen, Y., Liu, Z., Zheng, H.-T., & Sun, M. (2021). OpenPrompt: An Open-source Framework for Prompt-learning. arXiv Preprint arXiv:2111.01998.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Tang, T., Junyi, L., Chen, Z., Hu, Y., Yu, Z., Dai, W., Dong, Z., Cheng, X., Wang, Y., Zhao, W., Nie, J., & Wen, J.-R. (2022). TextBox 2.0: A Text Generation Library with Pre-trained Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Liu, J. (2022). GPT Index. https://doi.org/10.5281/zenodo.1234\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);