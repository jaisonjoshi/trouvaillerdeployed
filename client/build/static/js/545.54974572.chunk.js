"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[545],{9309:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(4165),a=r(5861),s=r(4942),o=r(1413),l=r(9439),i=r(1686),d=r(2791),c=r(2388),x=r(2299),p=r.n(x),m=r.p+"static/media/interestimg.0b59bfb1a149eb9b600a.png",u=r.p+"static/media/intimg.9043aaa4e9517777c09d.webp",f=r(184),b=function(){var e=(0,d.useState)({}),t=(0,l.Z)(e,2),r=t[0],x=t[1],b=function(e){x((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,s.Z)({},e.target.id,e.target.value))}))},h=c.Z.create({baseURL:"https://api.trouvailler.com/api/"}),w=(0,d.useState)(!1),v=(0,l.Z)(w,2),g=v[0],j=v[1],y=(0,d.useState)(""),N=(0,l.Z)(y,2),A=N[0],k=N[1],S=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),t.preventDefault(),"Successfully sent"===A){e.next=17;break}return e.prev=3,k("Sending"),a=(0,o.Z)({},r),e.next=8,h.post("/interests",a);case 8:j(!1),k("Successfully sent"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),j(!1),k("Sorry, something happened. Please try again!");case 17:j(!1);case 18:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"  bg-[#c2fbd7] shadow-lg relative  mx-4  sm:mx-16 md:mx-20 2xl:mx-40 my-12 md:my-20 flex flex-col xl:flex-row justify-between",children:[(0,f.jsxs)("div",{className:"w-[100%] xl:w-[50%] 2xl:w-[40%] ",children:[(0,f.jsx)("img",{src:m,className:"w-[100%] hidden xl:block h-full w-full object-cover",alt:""}),(0,f.jsx)("img",{src:u,className:"w-[100%] xl:hidden h-full w-full object-cover rounded-t-[10px]",alt:""})]}),(0,f.jsxs)("div",{className:"py-12 px-4 sm:px-8 md:px-16 w-[100%] xl:w-[60%]",children:[(0,f.jsxs)("h1",{className:"font-bold relative text-[black] text-base sm:text-lg sm:text-xl 2xl:text-2xl z-[100]",children:["Looking for a travel experience that's tailored to your interests and preferences?"," "]}),(0,f.jsx)("h1",{className:"font-normal relative z-[100]  my-2 text-[black] text-[14px] sm:text-base 2xl:text-xl",children:"Fill out our form to get started, and we'll work with you to create the perfect itinerary."}),(0,f.jsx)("div",{className:"z-[100] relative",children:(0,f.jsxs)("form",{action:"",children:[(0,f.jsxs)("div",{className:"flex mt-8 mb-4 md:mt-16 gap-[3%] md:gap-[3%] flex-wrap text-sm md:text-base font-normal w-[100%] items-end",children:[(0,f.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4 w-[47%] sm:w-[30%]",children:(0,f.jsx)("input",{type:"text",id:"name",onChange:b,autoComplete:"off",className:"interestinp noautofill  bg-[white] rounded px-6 border-b-[#02c677] border-none   border-t-[transparent] border-l-transparent border-r-transparent  focus:ring-[transparent]  ",placeholder:"Name"})}),(0,f.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4 w-[47%] sm:w-[30%]",children:(0,f.jsx)("input",{type:"text",id:"phone",autoComplete:"off",onChange:b,className:"interestinp   border-b-[#02c677] border-b-[1px]  bg-[white] rounded px-6 border-b-[#02c677] border-none   border-t-[transparent] border-l-transparent border-r-transparent  focus:ring-[transparent]  ",placeholder:"Phone"})}),(0,f.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4 w-[47%] sm:w-[30%]",children:(0,f.jsx)("input",{type:"text",id:"email",autoComplete:"off",onChange:b,className:"interestinp   border-b-[#02c677] border-b-[1px]   border-t-[transparent] border-l-transparent border-r-transparent focus:ring-[transparent]  bg-[white] rounded px-6 border-b-[#02c677] border-none ",placeholder:"E-mail"})}),(0,f.jsx)("div",{className:"flex text-sm md:text-base flex-col w-[47%] sm:w-[40%] gap-4",children:(0,f.jsx)("input",{type:"text",id:"destination",autoComplete:"off",onChange:b,className:"interestinp   border-b-[#02c677] border-b-[1px] px-6 mt-4 rounded  border-t-[transparent] border-l-transparent border-none border-r-transparent bg-[white] focus:ring-[transparent]  ",placeholder:"Destination"})}),(0,f.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4 w-[97%] mt-4 sm:w-[53%]",children:(0,f.jsx)("input",{type:"text",id:"month",autoComplete:"off",onChange:b,className:"interestinp   border-b-[#02c677] border-b-[1px] px-6 rounded border-none  border-t-[transparent] border-l-transparent border-r-transparent bg-[white] focus:ring-[transparent]  ",placeholder:"Preferred month of Travel"})}),(0,f.jsx)("div",{className:"flex text-sm md:text-base flex-col w-[97%] sm:w-[30%] gap-4",children:(0,f.jsx)("input",{type:"text",id:"noOfPeople",autoComplete:"off",onChange:b,className:"interestinp   border-b-[#02c677] border-b-[1px] px-6  border-t-[transparent] border-l-transparent border-r-transparent bg-[white] mt-4 rounded border-none  focus:ring-[transparent]  ",placeholder:"Number of people"})}),(0,f.jsx)("div",{className:"w-[97%] sm:w-[63%]",children:(0,f.jsxs)("select",{name:"",id:"travellingWith",className:" bg-[white] mt-4   py-2 text-[#858585] border-b-[#02c677] px-6 focus:ring-[transparent] border-t-[transparent] border-none rounded w-[100%] border-l-transparent border-r-transparent",onChange:b,children:[(0,f.jsx)("option",{disabled:!0,selected:!0,value:"",children:"Travelling with"}),(0,f.jsx)("option",{value:"Couple",children:"Couple"}),(0,f.jsx)("option",{value:"Bachelor",children:"Bachelor"}),(0,f.jsx)("option",{value:"Family",children:"Family"}),(0,f.jsx)("option",{value:"Group",children:"Group"})]})}),(0,f.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4 w-[97%] sm:w-[96%]",children:(0,f.jsx)("textarea",{id:"description",autoComplete:"off",onChange:b,className:" border-b-[#02c677] border-b-[1px] px-6  border-t-[transparent] mt-4 rounded py-4 border-l-transparent border-r-transparent bg-[white] border-none focus:ring-[transparent]  ",placeholder:"Any special or specific expectations from the trip"})})]}),(0,f.jsxs)("div",{className:"flex items-center flex-wrap gap-4",children:[(0,f.jsxs)("button",{className:"bg-[#13dd13]  px-4 py-2 rounded shadow-md text-[white] font-medium flex gap-2 items-center",onClick:S,children:["Send ",(0,f.jsx)(i.Z,{style:{fontSize:"18px"}})]}),(0,f.jsx)("img",{src:"data:image/png;base64,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",className:"w-[150px]"}),g&&(0,f.jsx)(p(),{color:"#00d67b"}),""!==A&&(0,f.jsx)("span",{className:"text-black text-sm sm:text-base italic",children:A})]})]})})]})]})}},5349:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(9751),a=r(4642),s=(r.p,r.p,r.p,r(9309)),o=r(184),l=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(a.Z,{color:"text-whiteglow"}),(0,o.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1500/v1684528067/site/emiHeader_lb4mkn.png",className:"hidden w-full md:block"}),(0,o.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684528069/site/emimobile_ks92eu.png",className:"md:hidden w-full"}),(0,o.jsx)("div",{className:"emi-footer",children:(0,o.jsxs)("div",{className:" px-4 sm:px-16 md:px-20 2xl:px-40 py-20",children:[(0,o.jsx)("h1",{className:"font-bold text-white text-lg md:text-4xl",children:"Explore the World with Flexible EMI Payment Options"}),(0,o.jsxs)("p",{className:"text-white text-sm md:text-xl my-12 ",children:[" We understand that travel can be expensive, which is why we offer flexible payment plans to make it more accessible.",(0,o.jsx)("br",{}),"Don't miss out on your dream vacation! Avail our 0% EMI option and pay for your travels in easy instalments over a period of 3 to 15 months."]}),(0,o.jsx)("p",{className:"text-white text-sm md:text-xl my-4",children:"Don't let financial constraints hold you back from experiencing the world - book now and start your adventure today!"})]})}),(0,o.jsxs)("div",{className:"px-4 sm:px-16 md:px-20 2xl:px-40 pt-12 md:pt-20 md:py-20",children:[(0,o.jsx)("h1",{className:"title-font font-bold text-2xl md:text-4xl text-center",children:"Dream, Plan, Travel"}),(0,o.jsxs)("div",{className:"flex flex-row justify-between w-[100%]  my-20 flex-wrap  mx-auto",children:[(0,o.jsxs)("div",{className:"flex grow w-[40%] md:w-[20%] px-4 md:px-16 flex-col gap-6 items-center",children:[(0,o.jsx)("div",{className:"flex justify-center items-center rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-[#76C679]",children:(0,o.jsx)("h1",{className:"text-6xl text-white title-font font-extrabold",children:"1"})}),(0,o.jsx)("div",{children:(0,o.jsx)("h1",{className:"font-bold title-font text-center md:text-xl border-b border-b-[#76C679] border-b-[3px] pb-2 ",children:"SELECT YOUR TRIP"})}),(0,o.jsx)("div",{className:"text-center font-semibold text-[#555454] text-sm md:text-lg ",children:(0,o.jsx)("p",{children:"Choose your trip in our website and complete booking."})})]}),(0,o.jsxs)("div",{className:"flex grow w-[40%] md:w-[20%] px-4 md:px-16 flex-col gap-6 items-center",children:[(0,o.jsx)("div",{className:"flex justify-center items-center rounded-full w-[80px] md:w-[100px] h-[80px] md:h-[100px] bg-[#76C679]",children:(0,o.jsx)("h1",{className:"text-6xl text-white title-font font-extrabold",children:"2"})}),(0,o.jsx)("div",{children:(0,o.jsx)("h1",{className:"font-bold title-font md:text-xl text-center border-b border-b-[#76C679] border-b-[3px] pb-2 ",children:"BOOK @ NO COST EMI"})}),(0,o.jsx)("div",{className:"text-center font-semibold text-[#555454] text-sm md:text-lg ",children:(0,o.jsx)("p",{children:"Book your Holidays at no cost EMI. Just enter your details and you are ready to go on that trip."})})]}),(0,o.jsxs)("div",{className:"flex grow md:w-[20%] px-16 flex-col gap-6 mt-16 md:mt-0 items-center",children:[(0,o.jsx)("div",{className:"flex justify-center items-center rounded-full w-[80px] md:w-[100px] h-[80px] md:h-[100px] bg-[#76C679]",children:(0,o.jsx)("h1",{className:"text-6xl text-white title-font font-extrabold",children:"3"})}),(0,o.jsx)("div",{children:(0,o.jsx)("h1",{className:"font-bold title-font text-center md:text-xl border-b border-b-[#76C679] border-b-[3px] pb-2 ",children:"SPLIT & PAY WHENEVER"})}),(0,o.jsx)("div",{className:"text-center font-semibold text-[#555454] text-sm md:text-lg ",children:(0,o.jsx)("p",{children:"Pay over time ranging from 3 to 12 months."})})]})]})]}),(0,o.jsx)(s.Z,{}),(0,o.jsx)(n.Z,{})]})}},1686:function(e,t,r){var n=r(4836);t.Z=void 0;var a=n(r(5649)),s=r(184),o=(0,a.default)((0,s.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=o},2299:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return s(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(2791)),d=r(8945),c=(0,r(7074).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,r=void 0===t||t,a=e.color,s=void 0===a?"#000000":a,o=e.speedMultiplier,x=void 0===o?1:o,p=e.cssOverride,m=void 0===p?{}:p,u=e.size,f=void 0===u?35:u,b=l(e,["loading","color","speedMultiplier","cssOverride","size"]),h=n({background:"transparent !important",width:(0,d.cssValue)(f),height:(0,d.cssValue)(f),borderRadius:"100%",border:"2px solid",borderTopColor:s,borderBottomColor:"transparent",borderLeftColor:s,borderRightColor:s,display:"inline-block",animation:"".concat(c," ").concat(.75/x,"s 0s infinite linear"),animationFillMode:"both"},m);return r?i.createElement("span",n({style:h},b)):null}},7074:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var s=a.sheet,o="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return s&&s.insertRule(o,0),n}},8945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=545.54974572.chunk.js.map