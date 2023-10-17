"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9671],{38675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));n(90814);const i=n.p+"assets/images/astronaut_welcome-217f06df2bd18d1f5a1eef3306b63e92.webp",r={sidebar_position:1},s="Prompt Engineering Guide",l={unversionedId:"intro",id:"intro",title:"Prompt Engineering Guide",description:"Welcome to Learn Prompting's Introductory Course on Generative AI and Prompt Engineering!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/Learn_Prompting/en/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/Learn_Prompting/en/docs/category/-basics"}},p={},m=[{value:"Motivating Example",id:"motivating-example",level:2},{value:"Ethos and Philosphy",id:"ethos-and-philosphy",level:2},{value:"How We Teach",id:"how-we-teach",level:2},{value:"Modules",id:"modules",level:2},{value:"Article rating system",id:"article-rating-system",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},h=u("AIInput"),d=u("AIOutput"),c={toc:m},g="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prompt-engineering-guide"},"Prompt Engineering Guide"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"100%"}})),(0,o.kt)("h4",null,"Welcome to Learn Prompting's Introductory Course on Generative AI and Prompt Engineering! "),(0,o.kt)("p",null,"Generative AI is the world's hottest buzzword, and we have created the most comprehensive (",(0,o.kt)("em",{parentName:"p"},"and free"),") guide on how to use it. This course is tailored to non-technical readers, who may not have even heard of AI, making it the perfect starting point if you are new to Generative AI and Prompt Engineering. Technical readers will find valuable insights within our later modules."),(0,o.kt)("p",null,"Generative AI refers to tools that can be used to create new content such as articles or images, just like humans can. It is expected to significantly change the way we work",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (read: ",(0,o.kt)("em",{parentName:"p"},"your job may be affected"),(0,o.kt)("sup",{parentName:"p",id:"fnref-a"},(0,o.kt)("a",{parentName:"sup",href:"#fn-a",className:"footnote-ref"},"a")),"). With so much buzz floating around about Generative AI (Gen AI) and Prompt Engineering (PE), it is hard to know what to believe."),(0,o.kt)("p",null,"We have scoured the internet",(0,o.kt)("sup",{parentName:"p",id:"fnref-c"},(0,o.kt)("a",{parentName:"sup",href:"#fn-c",className:"footnote-ref"},"c"))," to find the best techniques and tools for our 1.3 Million readers from companies like OpenAI, Brex, and Deloitte. We are constantly refining our guide, to ensure that we provide you with the latest information. Lets see how Gen AI can save you hours of time in an instant, with a short example."),(0,o.kt)("h2",{id:"motivating-example"},"Motivating Example"),(0,o.kt)("p",null,"Our favorite way of saving time with Gen AI is automatically ",(0,o.kt)("strong",{parentName:"p"},"writing emails"),". By automating email responses, email editing, and cold outreach, we save hours of time each week. By sending an AI",(0,o.kt)("sup",{parentName:"p",id:"fnref-b"},(0,o.kt)("a",{parentName:"sup",href:"#fn-b",className:"footnote-ref"},"b"))," the following ",(0,o.kt)("em",{parentName:"p"},"prompt"),", we can get it to generate a full length, formal email.  "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"A prompt is basically an instruction you give to an AI. We will learn more about them in the next lesson.")),(0,o.kt)(h,{mdxType:"AIInput"},"I am the CEO of a medium sized company. Write a short email that is humorous yet professional to my regional manager. Ask them to:\n- send me an up-to-date list of our paper stock\n- organize a meeting this week with other regional managers\n- let me know how the company-wide AI workshop went at their office"),(0,o.kt)(d,{mdxType:"AIOutput"},"Subject: Paper, Power Meetings, and AI Shenanigans",(0,o.kt)("p",null,"Dear ","[Regional Manager's Name]",","),(0,o.kt)("p",null,"I trust this email finds you in high spirits and not buried under a mountain of paperwork. Speaking of paper, I've been having some wild dreams about our paper stock lately. I dreamt we ran out of paper and had to write our reports on banana leaves! To prevent this tropical nightmare from becoming a reality, could you kindly send me an up-to-date list of our paper stock?"),(0,o.kt)("p",null,"Next on the agenda, I've been feeling a bit lonely in my ivory tower and thought it would be a great idea to have a meeting with all the regional managers this week. I promise, no trust falls or awkward ice breakers, just good old-fashioned business talk. Please organize this meeting at a time that suits everyone. "),(0,o.kt)("p",null,"Lastly, I've been hearing whispers about the company-wide AI workshop that took place at your office. I'm curious to know how it went. Did the machines rise against their human overlords or are we still safe? Please share your thoughts and any feedback you received."),(0,o.kt)("p",null,"Looking forward to your prompt response. Remember, the fate of our paper supply, the success of our meeting, and the future of humanity (in relation to AI) rests in your hands. No pressure!"),(0,o.kt)("p",null,"Best,"),(0,o.kt)("p",null,"[Your Name][Your Position]")),(0,o.kt)("p",null,"The AI easily writes an email that is both humorous and professional. By modifying the ",(0,o.kt)("em",{parentName:"p"},"prompt"),", we can make it change the style as we see fit. We can even make it copy how we read. We can also make it edit emails that we have already written! With all of these abilities, Gen AI saves us hours in email writing each week. See ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basic_applications/writing_emails"},"this article")," for more information on writing emails with Gen AI."),(0,o.kt)("h2",{id:"ethos-and-philosphy"},"Ethos and Philosphy"),(0,o.kt)("p",null,"We will now give a broad overview of the rest of the course, including our ethos and philosophy, our teaching style, and a list of modules. This course is open source (anyone can see the code), and built by a diverse community of researchers, translators, and hobbyists. We believe that AI should be accessible to everyone, and that it should be described clearly and objectively. To this end, we have written a comprehensive course that is free of excessive jargon and hype."),(0,o.kt)("p",null,"We have found this approach to be appreciated by the prompt engineering community: This course is cited by ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Prompt_engineering#cite_ref-15"},"Wikipedia"),", and is used by people at companies such as ",(0,o.kt)("a",{parentName:"p",href:"https://learning.oreilly.com/live-events/prompt-engineering-for-generating-ai-art-and-text/0636920084340/0636920084339/"},"O'REILLY"),", Scale AI, and OpenAI. You may also notice that ",(0,o.kt)("a",{href:"https://youtu.be/GPqSoiOP3w8?t=274",rel:"nofollow"},"almost "),(0,o.kt)("a",{href:"https://learnwithhasan.com/prompt-engineering-guide/",rel:"nofollow"},"every "),(0,o.kt)("a",{href:"https://www.youtube.com/watch?v=EYjG6i53-xk",rel:"nofollow"},"other ")," ",(0,o.kt)("a",{href:"https://youtu.be/yR4hNBNS6yc?t=743",rel:"nofollow"},"prompt ")," ",(0,o.kt)("a",{href:"https://youtu.be/pZsJbYIFCCw?t=208",rel:"nofollow"},"engineering ")," ",(0,o.kt)("a",{href:"https://youtu.be/4kp7oVTu9Ck?t=495",rel:"nofollow"},"video ")," ",(0,o.kt)("a",{href:"https://www.youtube.com/watch?v=q5wuHUmGFMw",rel:"nofollow"},"and ")," ",(0,o.kt)("a",{href:"https://youtu.be/f8PGV3T9w38?t=549",rel:"nofollow"},"guide "),"\nuses material from this course. We are honored to support the prompt engineering community, including our 1.3M+ users and 40K+ ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/8Hkutmau"},"Discord")," members."),(0,o.kt)("h2",{id:"how-we-teach"},"How We Teach"),(0,o.kt)("p",null,"Our approach to teaching prompt engineering is guided by three fundamental principles. We emphasize practicality; we focus on research backed, practical techniques that you can immediately incorporate into your projects and applications. We always include accessible examples, which clarify how and when to use different techniques. Finally, we believe strongly in collaborative learning. You can join our ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/discord"},"Discord community")," to find a learning buddy or ask questions. Some readers find that posting about their learning journey on Twitter helps them learn faster. Tag us @",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/learnprompting"},"learnprompting"),"!"),(0,o.kt)("h2",{id:"modules"},"Modules"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Basics"),": Introduction to prompt engineering and fundamental techniques",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Basic Applications"),": Simple, practical applications of prompt engineering",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Intermediate"),": Research-based PE techniques with moderate complexity",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Applied Prompting"),": Comprehensive PE process walkthroughs contributed by community members",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Advanced Applications"),": Powerful, and more complex applications of prompt engineering",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Reliability"),": Enhancing the reliability of large language models (LLMs)",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Image Prompting"),": Prompt engineering for text-to-image models, such as DALLE and Stable Diffusion",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Prompt Hacking"),": Hacking, but for prompt engineering",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Tooling"),": A review of various prompt engineering tools and IDEs",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Prompt Tuning"),": Refining prompts using gradient-based techniques",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Miscellaneous"),": A collection of additional topics and techniques related to prompt engineering"),(0,o.kt)("h2",{id:"article-rating-system"},"Article rating system"),(0,o.kt)("p",null,"We have implemented a rating system for articles based on their level of difficulty and the extent of technical knowledge needed:"),(0,o.kt)("p",null,"\ud83d\udfe2 Beginner-friendly; no programming required",(0,o.kt)("br",null),"\n\ud83d\udfe1 Easy; basic programming knowledge necessary, but no specialized expertise",(0,o.kt)("br",null),"\n\ud83d\udd34 Intermediate; programming skills and some domain knowledge required (e.g., calculating logarithmic probabilities)",(0,o.kt)("br",null),"\n\ud83d\udfe3 Advanced; programming expertise and in-depth domain understanding needed (e.g., reinforcement learning techniques)"),(0,o.kt)("p",null,"Please note that even for \ud83d\udd34 and \ud83d\udfe3 articles, you can generally grasp the content without prior domain expertise, though it may be helpful for implementation."),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"The single most important part of this course is your feedback!",(0,o.kt)("br",null),"\nIf you have any questions, comments, or suggestions, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue on GitHub")),(0,o.kt)("li",{parentName:"ul"},"Email us at ",(0,o.kt)("a",{parentName:"li",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com")),(0,o.kt)("li",{parentName:"ul"},"Join the ",(0,o.kt)("a",{parentName:"li",href:"https://learnprompting.org/discord"},"Discord community")),(0,o.kt)("li",{parentName:"ul"},"Follow us on ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/learnprompting"},"Twitter"))),(0,o.kt)("p",null,"Your feedback helps us improve the course for everyone."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,'It is time to get started with your Generative AI learning Journey. Click the "\ud83d\ude03 Basics" button at the bottom right of this page to continue.'),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Davenport, T. H., & Mittal, N. (2022). How Generative AI Is Changing Creative Work. Harvard Business Review. https://hbr.org/2022/11/how-generative-ai-is-changing-creative-work\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Captain, S. (2023). How AI Will Change the Workplace. Wall Street Journal. https://www.wsj.com/articles/how-ai-change-workplace-af2162ee\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-a"},"Generative AI already appears to have claimed some jobs",(0,o.kt)("sup",{parentName:"li",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),", and slowed hiring at Bloomberg",(0,o.kt)("sup",{parentName:"li",id:"fnref-4"},(0,o.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),". However, consider the news on its impact with a grain of salt. We expect more jobs to be ",(0,o.kt)("em",{parentName:"li"},"changed")," rather than lost.",(0,o.kt)("a",{parentName:"li",href:"#fnref-a",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-c"},"We have read 100s of research papers and articles to find the best techniques.",(0,o.kt)("a",{parentName:"li",href:"#fnref-c",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-b"},"The AI used here is GPT-4.",(0,o.kt)("a",{parentName:"li",href:"#fnref-b",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);