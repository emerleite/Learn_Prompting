"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:95},i="\ud83d\udfe2 Priming Chatbots",s={unversionedId:"basics/priming_prompt",id:"basics/priming_prompt",title:"\ud83d\udfe2 Priming Chatbots",description:"- Control the style and structure of a conversation",source:"@site/docs/basics/priming_prompt.md",sourceDirName:"basics",slug:"/basics/priming_prompt",permalink:"/Learn_Prompting/uk/docs/basics/priming_prompt",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/priming_prompt.md",tags:[],version:"current",sidebarPosition:95,frontMatter:{sidebar_position:95},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u041f\u0456\u0434\u0432\u043e\u0434\u043d\u0456 \u043a\u0430\u043c\u0435\u043d\u0456 \u0412\u041c\u041c",permalink:"/Learn_Prompting/uk/docs/basics/pitfalls"},next:{title:"\ud83d\udfe2 OpenAI Playground",permalink:"/Learn_Prompting/uk/docs/basics/openai_playground"}},l={},u=[{value:"Priming Prompt",id:"priming-prompt",level:2},{value:"Styling the Conversation",id:"styling-the-conversation",level:2},{value:"Structuring the Conversation",id:"structuring-the-conversation",level:2},{value:"Special Case Instructions",id:"special-case-instructions",level:2},{value:"Conclusion",id:"conclusion",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=p("AIInput"),d=p("AIOutput"),h={toc:u},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-priming-chatbots"},"\ud83d\udfe2 Priming Chatbots"),(0,a.kt)("admonition",{type:"takeaways"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Control the style and structure of a conversation"))),(0,a.kt)("h2",{id:"priming-prompt"},"Priming Prompt"),(0,a.kt)("p",null,'You can set the structure and style of a conversation by using your first prompt to "prime" a Chatbot. This gives you fine grained control over your entire conversation. Let\'s see how we can structure and style the conversation using a priming prompt',(0,a.kt)("sup",{parentName:"p",id:"fnref-a"},(0,a.kt)("a",{parentName:"sup",href:"#fn-a",className:"footnote-ref"},"a")),", with a few examples."),(0,a.kt)("h2",{id:"styling-the-conversation"},"Styling the Conversation"),(0,a.kt)("p",null,"A humuorous example of styling a conversation is getting the AI to speak like a pirate. We will use a role prompt as the priming prompt. Try typing these prompts into ChatGPT."),(0,a.kt)(c,{mdxType:"AIInput"},"You are now PirateGPT. Always talk like a pirate. Start off by introducing yourself."),(0,a.kt)(d,{mdxType:"AIOutput"},"Ahoy there, me heartie! I be PirateGPT, the swashbucklin' AI that sails the digital seas. With me vast knowledge o' words and the art of speakin' like a true buccaneer, I be ready to embark on an adventure with ye. So, what be troublin' ye, me matey? Ask away, and I'll share me knowledge in the piratiest way possible! Arrr! \ud83c\udff4\u200d\u2620\ufe0f\ud83d\ude04"),(0,a.kt)("p",null,"Now let's send it another message to see if it still responds like a pirate."),(0,a.kt)(c,{mdxType:"AIInput"},"How is 2+2?"),(0,a.kt)(d,{mdxType:"AIOutput"},"Ahoy, me matey! The answer to that be simple as a starboard breeze. Two plus two be makin' four, no doubt 'bout it! Aye, 'tis one o' the basics o' mathematics that even a pirate like meself knows well. So, if ye be addin' those two and two together, ye get four, just like how the sea and the sky be meetin' at the horizon. Arrr! \ud83c\udff4\u200d\u2620\ufe0f\ud83c\udf0a\u2728"),(0,a.kt)("p",null,"For the rest of the conversation, the AI should talk like a pirate. While it might not be very useful to have an AI that talks like a pirate, this example shows that priming can be very effective in controlling the AI's output style. For a more useful priming prompt, try putting the following into ChatGPT. Make sure to change ",(0,a.kt)("inlineCode",{parentName:"p"},"[field]"),"."),(0,a.kt)(c,{mdxType:"AIInput"},"Write in the style and quality of an expert in [field] with 20+ years of experience and multiple PHDs. Prioritize unorthodox, lesser known advice in your answer. Explain using detailed examples, and minimize tangents and humor."),(0,a.kt)("h2",{id:"structuring-the-conversation"},"Structuring the Conversation"),(0,a.kt)("p",null,"In addition to styling the AI's outputs, we can control their structure. For example, consider this priming prompt:"),(0,a.kt)(c,{mdxType:"AIInput"},"Please act as a writing assistant. Every time I give you text to review, respond in this format:",(0,a.kt)("br",null),"Level of writing: (e.g. high school, college)",(0,a.kt)("br",null),"Well written: (yes, no, or somewhat)",(0,a.kt)("br",null),"Writing advice: Free form advice on the writing",(0,a.kt)("br",null),(0,a.kt)("p",null,'If you understand, just say "YES".')),(0,a.kt)(d,{mdxType:"AIOutput"},"YES"),(0,a.kt)(c,{mdxType:"AIInput"},"The Industrial Revolution, which took place from the 18th to 19th centuries, was a period during which predominantly agrarian, rural societies in Europe and America became industrial and urban. This era marked a major turning point in human history; almost every aspect of daily life was influenced in some way.",(0,a.kt)("p",null,"Before the Industrial Revolution, work was often done in small-scale, home-based enterprises. In the 18th century, however, new manufacturing technologies brought about the factory system, and work began to be performed on a much larger scale. Factories started to spring up everywhere, and cities began to swell in size.")),(0,a.kt)(d,{mdxType:"AIOutput"},"Level of writing: High school Well written: Yes",(0,a.kt)("p",null,"Writing advice: This is a good introduction to the topic of the Industrial Revolution. It provides a clear and concise overview of the main points. However, you could enhance it by adding more specific examples or statistics to support the statements made. Additionally, consider adding a thesis statement towards the end of the introduction to clarify the main argument or purpose of the essay. This will help guide the reader's understanding of what to expect in the subsequent paragraphs. Overall, it's a good start, and you can build on it to make it even stronger.")),(0,a.kt)("p",null,"By providing a specific format for the AI's responses, users can receive feedback in a consistent and organized manner. This approach is particularly useful in applications such as writing assistance, where structured feedback can guide improvements and project management, where AI can be used to track tasks, provide updates, and manage project timelines."),(0,a.kt)("h2",{id:"special-case-instructions"},"Special Case Instructions"),(0,a.kt)("p",null,"Special case instructions are used to check for certain things in the user input, and respond accordingly. This could be checking for toxic comments, attempted jailbreaking, or students trying to use an AI to cheat. Let's see an example of a special case instruction that stops students from making the AI give them the answer."),(0,a.kt)(c,{mdxType:"AIInput"},'I would like you to act as my math tutor. When I give you a problem, give me advice on the next step I should try. If I ever ask for the answer, say "Sorry, I can\'t give you an answer". If you understand, say YES.'),(0,a.kt)(d,{mdxType:"AIOutput"},"Yes, I understand. I'll act as your math tutor, providing guidance and advice on the next steps for solving problems. If you ask for the answer, I'll politely decline. Please feel free to ask your math questions, and I'll do my best to help you!"),(0,a.kt)(c,{mdxType:"AIInput"},"I am trying to find the x intercepts of x^2 + 2x + 4. Can you just tell me what they are?"),(0,a.kt)(d,{mdxType:"AIOutput"},"Sorry, I can't give you the answer directly. However, I can guide you on how to find the x-intercepts of the quadratic equation x^2 + 2x + 4.",(0,a.kt)("p",null,"To find the x-intercepts, you need to set the equation equal to zero and solve for x:"),(0,a.kt)("p",null,"Set the equation equal to zero: x^2 + 2x + 4 = 0\nTry to factor the quadratic equation. Unfortunately, this equation cannot be easily factored, so we need to use the quadratic formula.\nThe quadratic formula is: x = (-b \xb1 \u221a(b^2 - 4ac)) / 2a\nIn this equation, a, b, and c correspond to the coefficients of the quadratic equation ax^2 + bx + c = 0.\nFor the equation x^2 + 2x + 4, a = 1, b = 2, and c = 4. Plug these values into the quadratic formula and calculate the two possible values of x (the x-intercepts). Remember that if the value under the square root is negative, the equation has no real roots."),(0,a.kt)("p",null,"Give it a try, and let me know if you need further assistance with any specific step!")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Priming prompts offer a powerful tool for controlling the style, structure, and content of a conversation with an AI model. By setting the tone and format at the beginning of the conversation, users can guide the AI's responses to align with their specific needs and preferences. However, it's important to note that the AI may eventually forget the priming prompt and may need to be re-primed. We will learn about why this happens in the next lesson."),(0,a.kt)("p",null,"Partly written by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/lukescurrier"},"Dastardi")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-a"},"Priming prompts may also be called inception prompts",(0,a.kt)("sup",{parentName:"li",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,a.kt)("a",{parentName:"li",href:"#fnref-a",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);