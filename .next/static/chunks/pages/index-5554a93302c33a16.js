(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1826)}])},1826:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ee},default:function(){return et}});var s,l,r=n(5893);n(5666);var a=n(7294),i=n(8276),o=n(1163),c=n.n(o);let d=(0,a.createContext)(void 0),x={"en-US":"English","fr-FR":"Fran\xe7ais","de-DE":"Deutsch"},u=()=>{let e=(0,a.useContext)(d);if(void 0===e)throw Error("useLanguage must be used within a LanguageManager");return e};var m=e=>{let{children:t}=e,[n,s]=(0,a.useState)("en-US");return(0,a.useEffect)(()=>{let e=c().locale;s(e||"en-US")},[]),(0,r.jsx)(d.Provider,{value:{selectedLanguage:n,changeLanguage:e=>{s(e),c().push("/",void 0,{locale:e})}},children:t})};function f(e){let{onSelect:t}=e,{t:n}=(0,i.$G)(),{selectedLanguage:s}=u(),l=[{key:"conversation.Passport",title:n("conversation.Passport.title"),prompt:n("conversation.Passport.prompt")},{key:"conversation.Address",title:n("conversation.Address.title"),prompt:n("conversation.Address.prompt")},{key:"conversation.Permit",title:n("conversation.Permit.title"),prompt:n("conversation.Permit.prompt",{language:x[s]})},{key:"conversation.Taxes",title:n("conversation.Taxes.title"),prompt:n("conversation.Taxes.prompt")}];return(0,r.jsx)("div",{className:"xxs:mt-10 md:mt-0 w-full overflow-x-auto justify-center xxs:hidden md:flex",children:l.map(e=>(0,r.jsx)("button",{className:"bg-[#009934] border-2 border-[#000000] mr-3 px-3 py-1 last:mr-0 text-black rounded",onClick:()=>t(e.prompt),style:{color:"#ffffff"},children:e.title},e.key))})}var p=n(9417),h=n(2489);function g(e){let{message:t}=e;return(0,r.jsxs)("div",{className:"text-xl text-[#009934] font-bold xxs:h-full md:h-auto flex-1 md:mb-5 md:mt-0 xxs:mt-12 xxs:mb-[148px] flex justify-center items-center overflow-y-auto ",children:[(0,r.jsx)(h.G,{icon:p.y1i,style:{color:"black",fontSize:"35px",paddingRight:"12px"}}),(0,r.jsx)("div",{className:"h-full flex items-center",children:t})]})}function b(e){let{userCall:t,userSpeak:n,userStopSpeaking:s,listening:l,isCalling:a,endCall:o,isChatbotSpeaking:c}=e,{t:d}=(0,i.$G)();return a?(0,r.jsxs)("div",{className:"flex justify-center flex-col items-center absolute bottom-7 md:relative lg:bottom-0",children:[l?(0,r.jsx)("button",{className:"py-4",onClick:s,children:(0,r.jsxs)("span",{className:"relative flex h-[50px] w-[50px]",children:[(0,r.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009934] "}),(0,r.jsx)("span",{className:"relative inline-flex rounded-full h-[50px] w-[50px] bg-[#fc4189] opacity-15 justify-center items-center",children:(0,r.jsx)(h.G,{icon:p.pL1,style:{color:"white",fontSize:"20px"}})})]})}):(0,r.jsx)("button",{className:"py-4 ".concat(c?"pointer-events-none":""),onClick:n,children:(0,r.jsxs)("span",{className:"relative flex h-[50px] w-[50px]",children:[(0,r.jsx)("span",{className:"absolute inline-flex h-full w-full rounded-full bg-gray-300"}),(0,r.jsx)("span",{className:"relative inline-flex rounded-full h-[50px] w-[50px] opacity-15 justify-center items-center ".concat(c?"bg-gray-400":"bg-[#009934]"),children:(0,r.jsx)(h.G,{icon:c?p.EkX:p.UOM,style:{color:"white",fontSize:"20px"}})})]})}),(0,r.jsx)("button",{className:"cursor-pointer outline-none w-[120px] h-[50px] md:text-base text-white bg-[#009934] rounded-full border-none border-r-5 shadow md:mb-10",onClick:o,children:d("call.hangUp")})]}):(0,r.jsx)("button",{className:"cursor-pointer outline-none  md:text-base text-white bg-[#009934] rounded-full border-none border-r-5 shadow md:mb-10",onClick:t,children:(0,r.jsx)("div",{className:"w-[120px] h-[50px] flex justify-center items-center",children:d("call.call")})})}var v=n(2515);async function j(e){var t,n;null===(t=i.ag)||void 0===t||t.init();let s=e.map(e=>({role:"ChatGPT"===e.sender?"assistant":"user",content:e.message})),r={role:"system",content:null===(n=i.ag)||void 0===n?void 0:n.t("bob.systemMessage")},a=[r,...s];try{let e=await fetch("/api/chat/message",{method:l.POST,body:JSON.stringify(a)});if(!e.ok)throw Error("Network response was not ok");let t=await e.json(),{choices:n}=t;return n[0].message.content}catch(e){console.error("Error:",e)}}(s=l||(l={})).GET="GET",s.POST="POST",s.PUT="PUT",s.DELETE="DELETE";let y=(0,a.createContext)(void 0),w=()=>{let e=(0,a.useContext)(y);if(void 0===e)throw Error("useCallManager must be used within a CallManager");return e};var N=e=>{let{children:t}=e,n=(0,a.useRef)(!1),s=(0,a.useRef)(!1),l=[{command:["*"],callback:e=>_(e)}],[o,c]=(0,a.useState)(s.current),[d,x]=(0,a.useState)(n.current),{transcript:m,resetTranscript:f,listening:p}=(0,v.x6)({commands:l}),{t:h}=(0,i.$G)(),[g,b]=(0,a.useState)(),[w,N]=(0,a.useState)(),{selectedLanguage:k}=u(),S=h("bob.introduction"),C=[{message:S,sender:"ChatGPT"}],[P,E]=(0,a.useState)(C);(0,a.useEffect)(()=>{b(window.speechSynthesis),N(localStorage)},[]),(0,a.useEffect)(()=>{O()},[S,k]);let D=e=>{if(s.current||!g||!n.current)return;if(!v.ZP.browserSupportsSpeechRecognition()){g.speak(new SpeechSynthesisUtterance(h("bob.browserNotSupportSpeechRecognitionMessage")));return}let t=new SpeechSynthesisUtterance(e);t.lang=k,t.onstart=G,t.onend=T,g.speak(t)},G=()=>{s.current=!0,c(!0),v.ZP.stopListening()},T=()=>{n.current&&v.ZP.startListening({language:k}),s.current=!1,c(!1)},_=async e=>{if(!e)return;let t=[...P,{message:e,direction:"outgoing",sender:"user"}];E(t),n.current||(n.current=!0,x(n.current)),s.current&&(null==g||g.cancel(),s.current=!1,c(!1));let l=await j(t);E([...t,{message:l,sender:"ChatGPT"}]),D(l)},Z=()=>{E(C)},L=()=>{if(w&&P.length>1){let e=w.getItem("callHistory")?JSON.parse(w.getItem("callHistory")):[],t=[...e,{messages:P,date:new Date}];null==w||w.setItem("callHistory",JSON.stringify(t))}},F=()=>{v.ZP.stopListening(),Z(),n.current=!1,x(n.current),s.current&&(null==g||g.cancel(),s.current=!1,c(!1)),v.ZP.abortListening()},O=()=>{F(),L()};return(0,r.jsx)(y.Provider,{value:{userCall:()=>{if(n.current=!0,x(n.current),!v.ZP.browserSupportsSpeechRecognition()){E([...P,{message:h("bob.browserNotSupportSpeechRecognitionMessage"),sender:"ChatGPT"}]),n.current=!1,x(n.current);return}let e=h("bob.firstMessage"),t=[...P,{message:e,sender:"assistant"}];E(t),D(e)},userSpeak:()=>{v.ZP.startListening({language:k}),""!==m&&f()},userStopSpeaking:()=>{v.ZP.stopListening()},listening:p,isCalling:d,endCall:O,handleSend:_,messages:P,isChatbotSpeaking:o},children:t})};function k(){let{userCall:e,userSpeak:t,userStopSpeaking:n,listening:s,isCalling:l,endCall:a,handleSend:i,messages:o,isChatbotSpeaking:c}=w();return(0,r.jsxs)("div",{className:"flex lg:flex-row lg:items-center lg:justify-center xxs:h-full flex-col items-center justify-end overflow-auto",children:[(0,r.jsx)("div",{className:"lg:bg-[url(../public/assets/Bob.gif)] bg-cover lg:h-[500px] lg:w-[500px] w-full bg-no-repeat bg-contain bg-center xxs:bg-[url(../public/assets/Bob.gif)] xxs:bg-cover xxs:h-[1000px] xxs:pt-30"}),(0,r.jsxs)("div",{className:"flex justify-center flex-col items-center lg:w-[calc(100%-600px)] w-full xxs:h-full z-10 xxs:pt-8",children:[(0,r.jsx)(g,{message:o[o.length-1].message}),(0,r.jsxs)("div",{className:"mb-8 flex justify-center flex-col items-center",children:[(0,r.jsx)(b,{userCall:e,userSpeak:t,userStopSpeaking:n,listening:s,isCalling:l,endCall:a,isChatbotSpeaking:c}),(0,r.jsx)(f,{onSelect:i})]})]})]})}var S=n(2729),C=n(2891),P=n(4048),E=n(1150);function D(){let e=(0,S._)(["\n  .ant-dropdown-menu-title-content {\n    padding-left: 8px;\n  }\n"]);return D=function(){return e},e}function G(){let e=(0,S._)(["\n  .ant-space {\n    gap: 0;\n  }\n"]);return G=function(){return e},e}let T=(0,E.ZP)(C.Z)(D()),_=(0,E.ZP)(P.default)(G()),Z=[{label:"English",icon:"\uD83C\uDDFA\uD83C\uDDF8",key:"en-US"},{type:"divider"},{label:"Fran\xe7ais",icon:"\uD83C\uDDEB\uD83C\uDDF7",key:"fr-FR"},{type:"divider"},{label:"Deutsch",icon:"\uD83C\uDDE9\uD83C\uDDEA",key:"de-DE"}];var L=function(){let{selectedLanguage:e,changeLanguage:t}=u(),n=null==Z?void 0:Z.find(t=>(null==t?void 0:t.key)===e),s=n.label,l=n.icon;return(0,r.jsx)(T,{menu:{items:Z,onClick:e=>{let{key:n}=e;t(n)}},className:"hover:text-black",children:(0,r.jsx)("a",{onClick:e=>e.preventDefault(),children:(0,r.jsxs)(_,{children:[(0,r.jsx)("div",{className:"text-[20px]",children:l}),(0,r.jsx)("div",{className:"xxs:hidden md:block",children:s}),(0,r.jsx)(h.G,{className:"xxs:hidden md:block",icon:p.ptq,style:{paddingRight:"10px"}})]})})})},F=n(4331),O=n(5400),R=n.n(O),z=n(6697),H=n(2386);function I(){let e=(0,S._)(["\n  .ant-modal-content {\n    padding: 0;\n    height: 100vh;\n  }\n  .ant-modal-header {\n    padding: 16px;\n    height: 56px;\n    margin: 0;\n    display: flex;\n    @media (mix-width: 640px) {\n      justify-content: center;\n    }\n  }\n  .ant-modal-title {\n    width: 100%;\n  }\n  .ant-modal-body {\n    height: calc(100% - 56px);\n  }\n  .ant-layout-has-sider {\n    height: 100%;\n  }\n  .ant-menu-item-selected,\n  .ant-menu-item:hover {\n    background: rgba(52, 53, 65);\n    color: white !important;\n  }\n  .ant-layout-sider-children {\n    overflow-y: auto;\n  }\n"]);return I=function(){return e},e}let{Sider:U}=F.default,M=(0,E.ZP)(z.Z)(I());function A(){var e;let[t,n]=(0,a.useState)(!1),{t:s}=(0,i.$G)(),[l,o]=(0,a.useState)([]),[c,d]=(0,a.useState)(""),[x,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=localStorage.getItem("callHistory")?JSON.parse(localStorage.getItem("callHistory")):[];o(e),u(!1)},[t]),(0,a.useEffect)(()=>{var e;d(null===(e=l[l.length-1])||void 0===e?void 0:e.date)},[l]);let m=e=>{d(e),u(!0)},f=l.map(e=>({key:e.date,label:e.date})),g=(0,r.jsx)("div",{"data-testid":"history-modal-close-button-".concat(t),children:(0,r.jsx)(h.G,{icon:p.YIN,style:{fontSize:"18px",color:"black"}})}),b=(0,r.jsx)("div",{className:"h-full flex justify-center items-center ",children:s("callHistory.modal.noHistoryMessage")});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(R(),{type:"link",className:"text-black hover:!text-black mr-3",onClick:()=>n(!0),children:[(0,r.jsx)("div",{className:"xxs:hidden md:block",children:s("callHistory")}),(0,r.jsx)("div",{className:"xxs:block md:hidden",children:(0,r.jsx)(h.G,{icon:p.j1w,style:{fontSize:"18px"}})})]}),(0,r.jsx)(M,{title:x?(0,r.jsxs)("div",{className:"flex w-full",children:[(0,r.jsx)("div",{className:"flex-1 md:opacity-0",children:(0,r.jsx)(h.G,{icon:p.EyR,style:{fontSize:"18px"},onClick:()=>{u(!1)}})}),(0,r.jsx)("div",{className:"flex-1 flex justify-center",children:s("callHistory.modal.title")}),(0,r.jsx)("div",{className:"flex-1",children:""})]}):(0,r.jsx)("div",{className:"justify-center flex",children:s("callHistory.modal.title")}),centered:!0,open:t,onOk:()=>n(!1),onCancel:()=>n(!1),className:"rounded-lg xxs:!w-full xxs:max-w-none md:!w-[calc(100%-100px)] overflow-y-auto",footer:null,closeIcon:g,children:(0,r.jsxs)(F.default,{hasSider:!0,className:"flex rounded-lg",children:[(0,r.jsx)(U,{className:"!bg-gray-900 md:block md:!grow-0 md:!shrink-0 md:!basis-[200px] md:max-w-[200px] md:w-[200px] ".concat(x?"xxs:hidden":"xxs:block xxs:!w-full xxs:!max-w-none xxs:!flex-initial"),children:(0,r.jsx)(H.default,{items:f,onClick:e=>m(e.key),selectedKeys:[c],className:"!bg-gray-900  text-white",itemProp:""})}),(0,r.jsx)(F.default,{className:"w-full md:block ".concat(x?"xxs:block":"xxs:hidden"),children:(0,r.jsx)("div",{className:"bg-white md:h-full overflow-y-auto",children:c&&l.length>0?null===(e=l.find(e=>e.date===c))||void 0===e?void 0:e.messages.map((e,t)=>(0,r.jsx)("div",{className:"p-4 justify-center text-base md:gap-6 md:py-6 m-auto ".concat("user"!==e.sender?"bg-gray-50":"bg-[rgba(217,217,227,.8)]"),children:(0,r.jsx)("div",{className:"flex text-base mx-auto md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl",children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"w-9 h-9 flex justify-center items-center ".concat("user"!==e.sender?"bg-[#009934]":" bg-[#ffffff]"),children:"user"===e.sender?(0,r.jsx)(h.G,{icon:p.ILF,style:{color:"white",fontSize:"18px"}}):(0,r.jsx)(h.G,{icon:p.VE0,style:{color:"white",fontSize:"18px"}})}),(0,r.jsx)("div",{className:"ml-7 w-fit",children:e.message})]})})},t)):b})})]})})]})}function $(){return(0,r.jsx)("div",{className:"mx-1",children:(0,r.jsx)("div",{className:"bg-[url(../public/assets/flag.png)] lg:h-[100px] lg:w-[100px] xxs:h-0 w-full bg-no-repeat bg-contain bg-center"})})}var J=n(1825),B=n(6590),X=n(4288);function q(){let e=(0,S._)(["\n  .ant-drawer-body {\n    padding: 0;\n    background-color: rgb(17 24 39);\n  }\n  .ant-drawer-header {\n    background-color: rgb(17 24 39);\n  }\n  .ant-drawer-title {\n    display: flex;\n    justify-content: center;\n  }\n  .ant-drawer-close {\n    color: white;\n  }\n  .ant-list-item {\n    display: flex;\n    justify-content: center;\n  }\n"]);return q=function(){return e},e}let K=(0,E.ZP)(J.Z)(q());function V(){let[e,t]=(0,a.useState)(!1),{t:n}=(0,i.$G)(),{selectedLanguage:s}=u(),{handleSend:l}=w(),o=[{key:"conversation.Passport",title:n("conversation.Passport.title"),prompt:n("conversation.Passport.prompt")},{key:"conversation.Address",title:n("conversation.Address.title"),prompt:n("conversation.Address.prompt")},{key:"conversation.Permit",title:n("conversation.Permit.title"),prompt:n("conversation.Permit.prompt",{language:x[s]})},{key:"conversation.Taxes",title:n("conversation.Taxes.title"),prompt:n("conversation.Taxes.prompt")}];return(0,r.jsxs)("div",{className:"flex mt-1 justify-center md:hidden items-center",children:[(0,r.jsx)(R(),{type:"primary",onClick:()=>t(!0),children:(0,r.jsx)(h.G,{icon:X.vto,style:{color:"black",fontSize:"18px"}})}),(0,r.jsx)(K,{title:(0,r.jsx)("div",{className:"text-white",children:n("conversation.idea")}),placement:"bottom",height:"50%",onClose:()=>t(!1),visible:e,children:(0,r.jsx)(B.Z,{dataSource:o,renderItem:e=>(0,r.jsx)(B.Z.Item,{className:"h-[50px] text-white bg-gray-500 my-1 mx-4 rounded-lg",children:(0,r.jsxs)(R(),{className:"text-white text-base",type:"link",onClick:()=>{l(e.prompt),t(!1)},children:[e.title,(0,r.jsx)("div",{style:{color:"#FF0000"},children:e.title})," "]})})})})]})}let{Header:Y,Content:Q}=F.default;function W(){return(0,r.jsx)(a.Fragment,{children:(0,r.jsx)(F.default,{className:"h-screen w-screen bg-[#ffffff] lg:p-10 p-5 pt-0 lg:pr-15 ",children:(0,r.jsx)(m,{children:(0,r.jsxs)(N,{children:[(0,r.jsxs)(Y,{className:"flex bg-[#ffffff] items-center h-12 flex-row px-0 justify-between",children:[(0,r.jsx)($,{}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(V,{}),(0,r.jsx)(A,{}),(0,r.jsx)(L,{})]})]}),(0,r.jsx)(Q,{children:(0,r.jsx)(k,{})})]})})})})}var ee=!0;function et(){return(0,r.jsx)(W,{})}}},function(e){e.O(0,[976,503,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);