"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[552],{1552:function(e,t,s){s.r(t);s(3433);var a=s(9439),l=s(4506),n=s(2791),r=s(8914),i=s(1087),d=s(5403),c=s(4377),o=s(807),x=s.n(o),m=s(2388),p=s(4642),u=s(9751),h=s(184);t.default=function(e){var t=e.location,s=function(e){var t=e.split("/upload/"),s=(0,l.Z)(t),a=s[0],n=s.slice(1);return"".concat(a,"/upload/c_fill,w_400/f_auto/q_auto/").concat(n.join("/upload/"))},o=(0,n.useState)("hide"),b=(0,a.Z)(o,2),g=b[0],f=b[1];(0,n.useEffect)((function(){window.addEventListener("load",f("show"))}),[]);m.Z.create({baseURL:"https://api.trouvailler.com/api"});var j=(0,n.useState)(t),v=(0,a.Z)(j,2),w=v[0],y=v[1],N=(0,n.useState)(""),k=(0,a.Z)(N,2),Z=(k[0],k[1],(0,n.useState)(void 0)),_=(0,a.Z)(Z,2),C=_[0],S=_[1],D=(0,n.useState)([]),I=(0,a.Z)(D,2),$=(I[0],I[1],(0,n.useState)(void 0)),z=(0,a.Z)($,2),H=z[0],L=z[1],P=(0,n.useState)(void 0),E=(0,a.Z)(P,2),M=E[0],U=E[1],q=(0,n.useState)(void 0),A=(0,a.Z)(q,2),B=A[0],F=A[1],O="/hotels?destinations=".concat(w,"&max=").concat(H||999999,"&min=").concat(C||1),R=(0,r.Z)(O),G=R.data,J=R.loading,K=(R.error,R.reFetch),Q=function(e){var t=e.target,s=t.value,a=t.checked;console.log(s+" state is"+a),a&&"b1"==s?(U(1),F(1e4)):a&&"b2"==s?(U(1e4),F(2e4)):a&&"b3"==s?(U(2e4),F(4e4)):a&&"b4"==s?(U(4e4),F(5e4)):(S(1),L(999999),U(1),F(999999)),console.log("min value is "+C+" max val is "+H)};return(0,h.jsxs)("div",{className:"w-full animationset ".concat(g,"  hotelsexplore"),children:[(0,h.jsx)(p.Z,{}),(0,h.jsxs)("div",{className:"mt-[60px] fixed top-[0] flex flex-col lg:fixed top-[60px] w-[100%] z-[49] lg:flex-row lg:gap-20 px-4 sm:px-16 md:px-20 2xl:px-40  gradient-first relative",children:[(0,h.jsx)("div",{className:"flex justify-center lg:justify-start  w-[100%] lg:w-[30%] py-6",children:(0,h.jsxs)("div",{className:"flex items-center w-[80%] md:w-[60%] lg:w-[100%] justify-between focus:ring-0 bg-[white] focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3",children:[(0,h.jsx)("input",{type:"text border-none outline-none w-[80%] h-[100%] text-2xl",placeholder:"Destination",id:"destination",name:"destination",onChange:function(e){var t=e.target.value;y(t.toLowerCase()),console.log(w)}}),(0,h.jsx)(d.Z,{className:"w=[20%] mx-3 cursor-pointer",onClick:function(){K()}})]})}),(0,h.jsx)("div",{className:"flex flex-wrap justify-center lg:justify-start w-[100%] lg:w-[70%] items-center mx-auto gap-4 py-4",children:(0,h.jsxs)(c.Dropdown,{label:"Budget",dismissOnClick:!1,class:" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light px-6 py-1  shadow-sm shadow-[#00b777] rounded-full text-xs",children:[(0,h.jsxs)(c.Dropdown.Item,{children:[(0,h.jsx)("input",{type:"radio",className:"accent-evergreen",id:"budget1",name:"budget",value:"b1",onChange:Q}),"   ",(0,h.jsx)("label",{for:"budget1",className:"pl-3 text-base text-blacky-bright",children:" Less than 10,000"}),(0,h.jsx)("br",{})]}),(0,h.jsxs)(c.Dropdown.Item,{children:[(0,h.jsx)("input",{type:"radio",className:"accent-evergreen",id:"family",name:"budget",value:"b2",onChange:Q}),(0,h.jsx)("label",{for:"family",className:"pl-3 text-base text-blacky-bright",children:" 10,000 - 20,000"}),(0,h.jsx)("br",{})]}),(0,h.jsxs)(c.Dropdown.Item,{children:[(0,h.jsx)("input",{type:"radio",className:" accent-evergreen",id:"friends",name:"budget",value:"b3",onChange:Q}),(0,h.jsx)("label",{for:"friends",className:"pl-3 text-base text-blacky-bright",children:" 20,000 - 40,000"}),(0,h.jsx)("br",{})]}),(0,h.jsxs)(c.Dropdown.Item,{children:[(0,h.jsx)("input",{type:"radio",className:" accent-evergreen",id:"holiday",name:"budget",value:"b4",onChange:Q}),(0,h.jsx)("label",{for:"holiday",className:"pl-3 text-base text-blacky-bright",children:" 40,000 - 50,000"}),(0,h.jsx)("br",{})]}),(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsx)("div",{className:"flex items-center",children:(0,h.jsxs)(c.Dropdown.Item,{children:[(0,h.jsx)("label",{for:"min_budget",className:"text-blacky-bright",children:"Min"}),(0,h.jsx)("input",{type:"number",id:"min_budget",name:"min_budget",placeholder:"\u20b91000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){S(void 0),U(e.target.value)}})]})}),(0,h.jsx)("div",{className:"flex items-center",children:(0,h.jsxs)(c.Dropdown.Item,{children:[(0,h.jsx)("label",{for:"max_budget",className:"ml-6 text-blacky-bright",children:"Max"}),(0,h.jsx)("input",{type:"number",id:"max_budget",name:"max_budget",placeholder:"\u20b93000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){L(void 0),F(e.target.value)}})]})})]}),(0,h.jsx)(c.Dropdown.Item,{children:(0,h.jsx)("input",{type:"submit",className:"align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none",value:"Apply",onClick:function(){var e=parseInt(M);S(e,(function(){return K()}));var t=parseInt(B);L(t,(function(){return K()}))}})})]})})]}),(0,h.jsxs)("div",{className:"lg:pt-48 px-4 pb-4 pt-12 sm:px-16 md:px-20 2xl:px-40 flex flex-col gap-4",children:[(0,h.jsxs)("div",{className:"flex gap-2 pt-2 text-sm sm:text-base text-graydust-medium",children:[" ",(0,h.jsx)("span",{children:"Home"}),(0,h.jsx)("span",{children:"/"}),(0,h.jsx)("span",{children:"Hotels"}),(0,h.jsx)("span",{children:"/"}),(0,h.jsxs)("span",{className:"text-[black]",children:["Hotels in ",w]})]}),(0,h.jsxs)("h1",{className:"text-2xl font-bold ",children:["Search results for Hotels in ",w]})]}),J?(0,h.jsx)("div",{className:"loading-div",children:(0,h.jsx)(x(),{color:"#32fca7",loading:J,size:15})}):(0,h.jsx)("div",{className:"px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]",children:G.map((function(e){return(0,h.jsx)(i.rU,{to:"/list/hotel/".concat(e._id),className:"pb-16 w-[90%] cursor-pointer mx-auto sm:mx-0 sm:w-[45%] md:w-[31%] mb-4 card-shadow lg:w-[22%] pb-8",children:(0,h.jsxs)("div",{className:" ",children:[(0,h.jsxs)("div",{className:"relative w-full",children:[(0,h.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),(0,h.jsx)("img",{className:"w-[100%] aspect-video skeleton rounded-t-lg",src:s(e.images[0]),alt:""})]}),(0,h.jsx)("h3",{className:"text-base md:text-lg pt-2 font-medium z-[48] text-[black] px-2  ",children:e.title}),(0,h.jsx)("p",{className:"mx-2 font-bold text-graydust-dark text-sm",children:e.location}),(0,h.jsx)("p",{className:"text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal",children:e.description}),(0,h.jsx)("div",{className:"pt-2",children:(0,h.jsx)("div",{className:"flex justify-between items-center",children:e.offers?(0,h.jsxs)("div",{className:"flex justify-between items-center",children:[(0,h.jsx)("div",{className:"md:py-1 mx-1  flex justify-between items-center",children:(0,h.jsxs)("span",{className:"font-bold",children:[(0,h.jsxs)("span",{className:"text-base md:text-xl",children:["\xa0 \u20b9 ",e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," "]})," ",(0,h.jsx)("span",{className:"text-[grey] text-2xs md:text-base",children:(0,h.jsxs)("strike",{children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"),"  "]})})]})}),"                              ",(0,h.jsx)("span",{className:"mr-1 text-2xs bg-[red] text-[white] px-2 py-1 rounded",children:e.offertitle})]}):(0,h.jsxs)("span",{className:"font-bold",children:[(0,h.jsxs)("span",{className:"text-base md:text-xl",children:["\xa0 \u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," "]})," "]})})})]},e._id)})}))}),(0,h.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=552.b2b79d05.chunk.js.map