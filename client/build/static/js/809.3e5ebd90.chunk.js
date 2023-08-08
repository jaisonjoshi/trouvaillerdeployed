"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[809],{225:function(e,t,s){var a=s(4506),l=(s(2791),s(7689)),n=s(184);t.Z=function(e){var t=e.itm,s=(e.k,(0,l.s0)());return(0,n.jsxs)("div",{className:"mb-4 w-full h-[100%] pb-3 card-shadow-1 rounded-lg  cursor-pointer",onClick:function(){return s("/list/hotel/".concat(t._id))},children:[(0,n.jsxs)("div",{className:"relative w-full",children:[(0,n.jsx)("div",{className:"imagegradient absolute hidden sm:block top-0  w-[100%] bottom-0 z-[100] rounded "}),t.images&&0!==t.images.length&&(0,n.jsx)("img",{className:"w-[100%] aspect-video skeleton rounded-t-lg ",src:function(e){var t=e.split("/upload/"),s=(0,a.Z)(t),l=s[0],n=s.slice(1);return"".concat(l,"/upload/c_fill,w_400/f_auto/q_auto/").concat(n.join("/upload/"))}(t.images[0]),alt:""}),(0,n.jsx)("h3",{className:"hidden sm:block  sm:text-base md:text-xl sm:font-bold z-[101] text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]",children:t.title})]}),(0,n.jsx)("h3",{className:"text-base z-50 pt-5  mx-2 md:mx-3 text-[black] font-semibold sm:hidden  card-text-heading ",children:t.title}),(0,n.jsxs)("div",{className:"py-1 sm:py-3 mx-2 md:mx-3 flex flex-col gap-1 items-start",children:[t.offer&&(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-2xs px-1 py-[1px] rounded md:text-base mb-0 bg-[red] text-[white]",children:(0,n.jsx)("b",{children:t.offertitle})}),(0,n.jsx)("p",{className:"text-2xs sm:text-xs md:text-base text-graydust-medium",children:t.offerdescription})]}),(0,n.jsx)("div",{className:"py-1 ",children:(0,n.jsx)("p",{className:"text-[0.85rem] sm:text-[0.975rem] card-text-hotel  my-1 text-[#151a12]  ",children:t.description})})]}),t.offers?(0,n.jsx)("div",{className:"flex flex-col items-start gap-2 mx-2 md:mx-3 ",children:(0,n.jsxs)("div",{className:"flex gap-2 text-right itmes-center",children:[(0,n.jsx)("span",{className:"text-sm text-white bg-[red] px-2 py-1 rounded",children:"15% off"}),(0,n.jsxs)("span",{className:" text-base sm:text-xl font-bold",children:["\u20b9 ",t.offerprice&&t.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,n.jsx)("strike",{children:(0,n.jsxs)("span",{className:" text-sm text-graydust-dark font-bold",children:["\u20b9 ",t.cheapestPrice&&t.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})}),(0,n.jsx)("br",{})," ",(0,n.jsx)("span",{className:"text-[10px] md:text-xs text-graydust-dark",children:"Per person"})]})}):(0,n.jsx)("div",{className:"flex flex-col itms-start gap-2 mx-2 md:mx-3 ",children:(0,n.jsxs)("div",{className:"flex flex-col justify-start  items-start text-left",children:[(0,n.jsxs)("span",{className:" text-lg md:text-xl font-bold",children:["\u20b9 ",t.cheapestPrice&&t.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})," ",(0,n.jsx)("span",{className:"text-[10px] md:text-xs text-graydust-dark",children:"Per night"})]})})]})}},1552:function(e,t,s){s.r(t);var a=s(1413),l=(s(3433),s(9439)),n=(s(4506),s(2791)),i=s(8914),d=s(7689),r=s(4377),o=s(807),c=s.n(o),x=s(2388),m=s(4642),u=s(9751),p=s(225),h=s(6555),f=s(1656),g=s(5397),b=s(1133),j=s(184);t.default=function(){var e=(0,d.TH)().pathname.split("/")[2],t=(0,n.useState)("hide"),s=(0,l.Z)(t,2),o=s[0],v=s[1];(0,n.useEffect)((function(){window.addEventListener("load",v("show"))}),[]);var w=x.Z.create({baseURL:"https://api.trouvailler.com/api/"}),y=(0,n.useState)(e),N=(0,l.Z)(y,2),k=N[0],Z=N[1],C=(0,n.useState)(""),S=(0,l.Z)(C,2),I=(S[0],S[1],(0,n.useState)(void 0)),_=(0,l.Z)(I,2),P=_[0],D=_[1],z=(0,n.useState)([]),O=(0,l.Z)(z,2),$=(O[0],O[1],(0,n.useState)(void 0)),M=(0,l.Z)($,2),L=M[0],E=M[1],T=(0,n.useState)(void 0),H=(0,l.Z)(T,2),R=H[0],q=H[1],A=(0,n.useState)(void 0),B=(0,l.Z)(A,2),F=B[0],U=B[1],V=(0,n.useState)(1),G=(0,l.Z)(V,2),J=G[0],K=G[1],Q="/hotels?page=".concat(J,"&limit=").concat(2,"&destinations=").concat(k,"&max=").concat(L||999999,"&min=").concat(P||1),W=(0,i.Z)(Q),X=W.data,Y=W.loading,ee=(W.error,W.reFetch),te=function(e){var t=e.target,s=t.value,a=t.checked;console.log(s+" state is"+a),a&&"b1"==s?(q(1),U(1e4)):a&&"b2"==s?(q(1e4),U(2e4)):a&&"b3"==s?(q(2e4),U(4e4)):a&&"b4"==s?(q(4e4),U(5e4)):(D(1),E(999999),q(1),U(999999)),console.log("min value is "+P+" max val is "+L)},se=(0,n.useState)(""),ae=(0,l.Z)(se,2),le=ae[0],ne=ae[1],ie=(0,n.useState)(!1),de=(0,l.Z)(ie,2),re=de[0],oe=de[1],ce=(0,n.useState)([{locations:["loading"]}]),xe=(0,l.Z)(ce,2),me=xe[0],ue=xe[1];return(0,n.useEffect)((function(){!1!==re&&w.get("/locations").then((function(e){ue(e.data)}))}),[re]),(0,j.jsxs)("div",{className:"w-full animationset ".concat(o,"  hotelsexplore"),children:[(0,j.jsx)(m.Z,{}),(0,j.jsxs)("div",{className:" sm:mt-2  top-[0] flex flex-col shadow-lg sticky z-[103] w-[100%] z-[49] sm:flex-row lg:gap-20 px-4 sm:px-16 md:px-20 2xl:px-40  gradientbg relative",children:[(0,j.jsx)("div",{className:"flex justify-start  w-[100%] lg:w-[30%] py-3 lg:py-6",children:(0,j.jsx)("div",{className:"flex items-center w-[100%] sm:w-[90%] lg:w-[60%] lg:w-[100%] justify-between focus:ring-0 bg-[white] focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3",children:(0,j.jsx)(h.Z,{open:re,onOpen:function(){le&&oe(!0)},onClose:function(){return oe(!1)},inputValue:le,onInputChange:function(e,t,s){ne(t),t||oe(!1)},disablePortal:!0,id:"combo-box-demo",options:me[0].locations,onChange:function(e,t){Z(t.toLowerCase()),console.log(k)},sx:{width:"100%","& .MuiOutlinedInput-root":{border:"none",outline:"none",borderRadius:"0",padding:"0"},"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"none",outline:"none"}},renderInput:function(e){return(0,j.jsx)(f.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Select a location"}))}})})}),(0,j.jsx)("div",{className:"flex flex-wrap justify-start w-[100%] lg:w-[70%] items-center mx-auto gap-4 sm:pt-2 pb-2 lg:py-4",children:(0,j.jsxs)(r.Dropdown,{label:"Budget",dismissOnClick:!1,class:" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light md:px-6 sm:py-1  shadow-sm shadow-[#00b777] rounded-full text-small",children:[(0,j.jsxs)(r.Dropdown.Item,{children:[(0,j.jsx)("input",{type:"radio",className:"accent-evergreen",id:"budget1",name:"budget",value:"b1",onChange:te}),"   ",(0,j.jsx)("label",{for:"budget1",className:"pl-3  text-blacky-bright",children:" Less than 10,000"}),(0,j.jsx)("br",{})]}),(0,j.jsxs)(r.Dropdown.Item,{children:[(0,j.jsx)("input",{type:"radio",className:"accent-evergreen",id:"family",name:"budget",value:"b2",onChange:te}),(0,j.jsx)("label",{for:"family",className:"pl-3  text-blacky-bright",children:" 10,000 - 20,000"}),(0,j.jsx)("br",{})]}),(0,j.jsxs)(r.Dropdown.Item,{children:[(0,j.jsx)("input",{type:"radio",className:" accent-evergreen",id:"friends",name:"budget",value:"b3",onChange:te}),(0,j.jsx)("label",{for:"friends",className:"pl-3  text-blacky-bright",children:" 20,000 - 40,000"}),(0,j.jsx)("br",{})]}),(0,j.jsxs)(r.Dropdown.Item,{children:[(0,j.jsx)("input",{type:"radio",className:" accent-evergreen",id:"holiday",name:"budget",value:"b4",onChange:te}),(0,j.jsx)("label",{for:"holiday",className:"pl-3  text-blacky-bright",children:" 40,000 - 50,000"}),(0,j.jsx)("br",{})]}),(0,j.jsxs)("div",{className:"flex",children:[(0,j.jsx)("div",{className:"flex items-center",children:(0,j.jsxs)(r.Dropdown.Item,{children:[(0,j.jsx)("label",{for:"min_budget",className:"text-blacky-bright",children:"Min"}),(0,j.jsx)("input",{type:"number",id:"min_budget",name:"min_budget",placeholder:"\u20b91000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){D(void 0),q(e.target.value)}})]})}),(0,j.jsx)("div",{className:"flex items-center",children:(0,j.jsxs)(r.Dropdown.Item,{children:[(0,j.jsx)("label",{for:"max_budget",className:"ml-6 text-blacky-bright",children:"Max"}),(0,j.jsx)("input",{type:"number",id:"max_budget",name:"max_budget",placeholder:"\u20b93000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){E(void 0),U(e.target.value)}})]})})]}),(0,j.jsx)(r.Dropdown.Item,{children:(0,j.jsx)("input",{type:"submit",className:"align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none",value:"Apply",onClick:function(){var e=parseInt(R);D(e,(function(){return ee()}));var t=parseInt(F);E(t,(function(){return ee()}))}})})]})})]}),(0,j.jsx)("div",{className:" px-4 sm:pb-4 pt-8 sm:pt-12 sm:px-16 md:px-20 2xl:px-40 flex flex-col gap-4",children:(0,j.jsxs)("h1",{className:"text-lg sm:text-2xl font-bold ",children:["Search results for Hotels in ",k]})}),Y?(0,j.jsx)("div",{className:"loading-div",children:(0,j.jsx)(c(),{color:"#32fca7",loading:Y,size:15})}):(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]",children:X.map((function(e,t){return(0,j.jsx)("div",{className:"w-[95%] mx-auto sm:mx-0 sm:w-[49%] lg:w-[32%] 2xl:w-[23%] mb-2 sm:mb-4",children:(0,j.jsx)(p.Z,{itm:e,k:t})})}))}),(0,j.jsxs)("div",{className:"flex justify-center py-16 gap-8",children:[J>1&&(0,j.jsxs)("button",{onClick:function(){J>1&&(window.scrollTo(0,0),K(J-1))},className:"border border-[#02c677] w-[180px] flex justify-center py-2 rounded shadow-md text-[black]  font-medium flex gap-2 items-center",children:[(0,j.jsx)(b.Z,{}),"  Previous Page "]}),2==X.length&&(0,j.jsxs)("button",{onClick:function(){window.scrollTo(0,0),K(J+1)},className:"border border-[#02c677] w-[180px] flex justify-center  py-2 rounded shadow-md text-[black] font-medium flex gap-2 items-center",children:["Next Page ",(0,j.jsx)(g.Z,{})]}),"  "]})]}),(0,j.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=809.3e5ebd90.chunk.js.map