"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[937],{5937:function(e,t,s){s.r(t);var a=s(3433),l=s(9439),n=s(4506),r=s(2791),i=s(8914),c=s(1087),d=s(5403),o=s(4377),x=s(807),m=s.n(x),p=s(2388),h=s(4642),u=s(9751),b=s(184);t.default=function(e){var t=e.location,s=function(e){var t=e.split("/upload/"),s=(0,n.Z)(t),a=s[0],l=s.slice(1);return"".concat(a,"/upload/c_fill,w_400/f_auto/q_auto/").concat(l.join("/upload/"))},x=(0,r.useState)("hide"),g=(0,l.Z)(x,2),f=g[0],j=g[1];(0,r.useEffect)((function(){window.addEventListener("load",j("show"))}),[]);p.Z.create({baseURL:"https://api.trouvailler.com/api"});var y=(0,r.useState)(t),v=(0,l.Z)(y,2),w=v[0],N=v[1],k=(0,r.useState)(void 0),C=(0,l.Z)(k,2),D=C[0],I=C[1],Z=(0,r.useState)(void 0),S=(0,l.Z)(Z,2),_=S[0],$=S[1],P=(0,r.useState)(void 0),z=(0,l.Z)(P,2),L=z[0],F=z[1],H=(0,r.useState)(void 0),O=(0,l.Z)(H,2),A=O[0],E=O[1],M=(0,r.useState)([]),U=(0,l.Z)(M,2),q=U[0],B=U[1],R=(0,r.useState)(""),G=(0,l.Z)(R,2),J=G[0],K=G[1],Q=(0,r.useState)(""),T=(0,l.Z)(Q,2),V=(T[0],T[1],"/packages?destinations=".concat(w,"&category=").concat(J,"&max=").concat(_||999999,"&min=").concat(D||1)),W=(0,i.Z)(V),X=W.data,Y=W.loading,ee=(W.error,W.reFetch),te=function(){var e=q.toString();console.log("array to string "+e),K(e),console.log(J)},se=function(e){var t=e.target,s=t.value,l=t.checked,n=q.indexOf(e.target.value);l?B((function(e){return[].concat((0,a.Z)(e),[s])})):q.splice(n,1),console.log(q)},ae=function(e){var t=e.target,s=t.value,a=t.checked;console.log(s+" state is"+a),a&&"b1"==s?(F(1),E(1e4)):a&&"b2"==s?(F(1e4),E(2e4)):a&&"b3"==s?(F(2e4),E(4e4)):a&&"b4"==s?(F(4e4),E(5e4)):(I(1),$(999999),F(1),E(999999))};return(0,b.jsxs)("div",{className:"w-full animationset ".concat(f,"  hotelsexplore"),children:[(0,b.jsx)(h.Z,{}),(0,b.jsxs)("div",{className:"mt-[60px] fixed top-[0] flex flex-col lg:fixed top-[60px] w-[100%] z-[49] lg:flex-row lg:gap-20 px-4 sm:px-16 md:px-20 2xl:px-40  gradient-first relative",children:[(0,b.jsx)("div",{className:"flex justify-center lg:justify-start  w-[100%] lg:w-[30%] py-6",children:(0,b.jsxs)("div",{className:"flex items-center w-[80%] md:w-[60%] lg:w-[100%] justify-between focus:ring-0 bg-[white] focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3",children:[(0,b.jsx)("input",{type:"text border-none outline-none w-[80%] h-[100%] text-2xl",placeholder:"Destination",id:"destination",name:"destination",onChange:function(e){var t=e.target.value;N(t.toLowerCase()),console.log(w)}}),(0,b.jsx)(d.Z,{className:"w=[20%] mx-3 cursor-pointer",onClick:te})]})}),(0,b.jsxs)("div",{className:"flex flex-wrap justify-center lg:justify-start w-[100%] lg:w-[70%] items-center mx-auto gap-4 py-4",children:[(0,b.jsxs)(o.Dropdown,{label:"Categories",dismissOnClick:!1,class:" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light px-6 py-1  shadow-sm shadow-[#00b777] rounded-full text-xs",children:[(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"checkbox",className:" accent-evergreen",id:"honeymoon",name:"dom",value:"domestic",onChange:se}),(0,b.jsx)("label",{for:"honeymoon",className:"pl-3 text-base text-blacky-bright",children:" Domestic"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"family",name:"int",value:"international",onChange:se}),(0,b.jsx)("label",{for:"family",className:"pl-3 text-base text-blacky-bright",children:" International"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"friends",name:"hon",value:"honeymoon",onChange:se}),(0,b.jsx)("label",{for:"friends",className:"pl-3 text-base text-blacky-bright",children:" Honeymoon"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"holiday",name:"hol",value:"holiday",onChange:se}),(0,b.jsx)("label",{for:"holiday",className:"pl-3 text-base text-blacky-bright",children:" Holiday"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"holiday",name:"fam",value:"family",onChange:se}),(0,b.jsx)("label",{for:"holiday",className:"pl-3 text-base text-blacky-bright",children:" Family"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"holiday",name:"fri",value:"friends",onChange:se}),(0,b.jsx)("label",{for:"holiday",className:"pl-3 text-base text-blacky-bright",children:" Friends"}),(0,b.jsx)("br",{})]}),(0,b.jsx)(o.Dropdown.Item,{children:(0,b.jsx)("input",{type:"submit",className:"ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none",value:"Apply",onClick:te})})]}),(0,b.jsxs)(o.Dropdown,{label:"Budget",dismissOnClick:!1,class:" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light px-6 py-1  shadow-sm shadow-[#00b777] rounded-full text-xs",children:[(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"radio",className:"accent-evergreen",id:"budget1",name:"budget",value:"b1",onChange:ae}),"   ",(0,b.jsx)("label",{for:"budget1",className:"pl-3 text-base text-blacky-bright",children:" Less than 10,000"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"radio",className:"accent-evergreen",id:"family",name:"budget",value:"b2",onChange:ae}),(0,b.jsx)("label",{for:"family",className:"pl-3 text-base text-blacky-bright",children:" 10,000 - 20,000"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"radio",className:" accent-evergreen",id:"friends",name:"budget",value:"b3",onChange:ae}),(0,b.jsx)("label",{for:"friends",className:"pl-3 text-base text-blacky-bright",children:" 20,000 - 40,000"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("input",{type:"radio",className:" accent-evergreen",id:"holiday",name:"budget",value:"b4",onChange:ae}),(0,b.jsx)("label",{for:"holiday",className:"pl-3 text-base text-blacky-bright",children:" 40,000 - 50,000"}),(0,b.jsx)("br",{})]}),(0,b.jsxs)("div",{className:"flex",children:[(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("label",{for:"min_budget",className:"text-blacky-bright",children:"Min"}),(0,b.jsx)("input",{type:"number",id:"min_budget",name:"min_budget",placeholder:"\u20b91000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){I(void 0),F(e.target.value)}})]})}),(0,b.jsx)("div",{className:"flex items-center",children:(0,b.jsxs)(o.Dropdown.Item,{children:[(0,b.jsx)("label",{for:"max_budget",className:"ml-6 text-blacky-bright",children:"Max"}),(0,b.jsx)("input",{type:"number",id:"max_budget",name:"max_budget",placeholder:"\u20b93000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){$(void 0),E(e.target.value)}})]})})]}),(0,b.jsx)(o.Dropdown.Item,{children:(0,b.jsx)("input",{type:"submit",className:"align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none",value:"Apply",onClick:function(){var e=parseInt(L);I(e,(function(){return ee()}));var t=parseInt(A);$(t,(function(){return ee()}))}})})]})]})]}),(0,b.jsxs)("div",{className:"lg:pt-48 px-4 pb-4 pt-12 sm:px-16 md:px-20 2xl:px-40 flex flex-col gap-4",children:[(0,b.jsxs)("div",{className:"flex gap-2 pt-2 text-sm sm:text-base text-graydust-medium",children:[" ",(0,b.jsx)("span",{children:"Home"}),(0,b.jsx)("span",{children:"/"}),(0,b.jsx)("span",{children:"Packages"}),(0,b.jsx)("span",{children:"/"}),(0,b.jsxs)("span",{className:"text-[black]",children:[" ",w]})]}),(0,b.jsxs)("h1",{className:"text-lg md:text-2xl font-bold ",children:["Search results for ",w]})]}),Y?(0,b.jsx)("div",{className:"loading-div",children:(0,b.jsx)(m(),{color:"#32fca7",loading:Y,size:15})}):(0,b.jsx)("div",{className:"px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]",children:X.map((function(e){return(0,b.jsx)(c.rU,{to:"/list/package/".concat(e._id),className:"pb-16 w-[90%] cursor-pointer mx-auto sm:mx-0 sm:w-[45%] md:w-[31%] mb-4 card-shadow lg:w-[22%] pb-8",children:(0,b.jsxs)("div",{className:" ",children:[(0,b.jsxs)("div",{className:"relative w-full",children:[(0,b.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),(0,b.jsx)("img",{className:"w-[100%] aspect-video skeleton rounded-t-lg",src:s(e.images[0]),alt:""})]}),(0,b.jsxs)("div",{className:"pt-2",children:[(0,b.jsx)("div",{className:"flex justify-between items-center",children:e.offers?(0,b.jsxs)("div",{className:"flex justify-between items-center",children:[" ",(0,b.jsx)("div",{className:"md:py-1 mx-1  flex justify-between items-center",children:(0,b.jsxs)("span",{className:"font-bold",children:[(0,b.jsxs)("span",{className:"text-sm md:text-xl",children:["\xa0",e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," \u20b9"]})," ",(0,b.jsx)("span",{className:"text-[grey] text-xs md:text-base",children:(0,b.jsxs)("strike",{children:[e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," \u20b9 "]})})]})}),"                              ",(0,b.jsx)("span",{className:"mr-1 text-sm bg-[red] text-[white] px-2 py-1 rounded",children:e.offertitle})]}):(0,b.jsxs)("span",{className:"font-bold",children:[(0,b.jsxs)("span",{className:"text-sm md:text-xl",children:["\xa0",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," \u20b9"]})," "]})}),(0,b.jsx)("h3",{className:"text-base md:text-lg font-medium z-[48] text-[black] px-2  ",children:e.title}),(0,b.jsx)("span",{className:"mx-2 font-bold text-graydust-dark text-sm",children:e.location})]})]},e._id)})}))}),(0,b.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=937.c9ac9376.chunk.js.map