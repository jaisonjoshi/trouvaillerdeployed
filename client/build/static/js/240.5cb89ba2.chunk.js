"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[240],{7528:function(e,t,s){var a=s(4506),l=(s(2791),s(1087)),n=s(184);t.Z=function(e){var t=e.item;return(0,n.jsx)(l.rU,{to:"/list/package/".concat(t._id),className:"flex",children:(0,n.jsxs)("div",{className:"w-[100%] sm:w-[80%] sm:w-auto mx-auto sm:mx-0 package-card bg-whiteglow mb-4 sm:mb-0 ml-2 mr-4  sm:mr-0 cursor-pointer card-shadow rounded pb-4 relative",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:"imagegradient absolute top-0  w-[95%] left-[2.5%]  bottom-0 z-[100] rounded "}),0!==t.images.length&&(0,n.jsx)("img",{className:"w-[95%] shadow-lg mx-auto my-1 sm:my-4 aspect-video skeleton rounded-lg",src:function(e){var t=e.split("/upload/"),s=(0,a.Z)(t),l=s[0],n=s.slice(1);return"".concat(l,"/upload/c_fill,w_400/f_auto/q_auto/").concat(n.join("/upload/"))}(t.images[0]),alt:""}),(0,n.jsx)("h3",{className:"absolute  font-bold z-[102] text-[white] bottom-0 px-3 sm:px-4 mb-2 sm:mb-0 text-lg  card-title-font-size",children:t.title})]}),(0,n.jsx)("div",{className:"py-1 mx-3",children:(0,n.jsx)("p",{className:"text-[0.75rem] sm:text-[0.975rem] card-text my-1 text-[#151a12]  ",children:t.description})}),(0,n.jsxs)("div",{className:"pt-2 sm:pt-0 sm:py-4 mx-3 flex items-center justify-between",children:[(0,n.jsx)("span",{className:"font-bold text-[white] px-4 sm:px-6 shadow-lg py-1 rounded-full bg-[#626262] text-[10px] md:text-[14px] ",children:t.duration}),t.offers?(0,n.jsx)("div",{className:"flex flex-col items-start gap-2",children:(0,n.jsxs)("div",{className:"flex gap-2 text-right items-center",children:[(0,n.jsx)("span",{className:"text-sm text-white bg-[red] px-2 py-1 rounded",children:"15% off"}),(0,n.jsxs)("span",{className:" text-base sm:text-xl font-bold",children:["\u20b9 ",t.offerprice&&t.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,n.jsx)("strike",{children:(0,n.jsxs)("span",{className:" text-sm text-graydust-dark font-bold",children:["\u20b9 ",t.cheapestPrice&&t.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})}),(0,n.jsx)("br",{})," ",(0,n.jsx)("span",{className:"text-[10px] md:text-xs text-graydust-dark",children:"Per person"})]})}):(0,n.jsx)("div",{className:"flex flex-col items-start gap-2 ",children:(0,n.jsxs)("div",{className:"flex flex-col justify-start  items-end text-right",children:[(0,n.jsxs)("span",{className:" text-base md:text-xl font-bold",children:["\u20b9 ",t.cheapestPrice&&t.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})," ",(0,n.jsx)("span",{className:"text-[10px] md:text-xs text-graydust-dark",children:"Per person"})]})})]})]},t._id)})}},5937:function(e,t,s){s.r(t);var a=s(1413),l=s(3433),n=s(9439),r=(s(4506),s(2791)),i=s(8914),o=s(7689),c=s(4377),d=s(807),x=s.n(d),m=s(2388),p=s(4642),u=s(9751),h=s(7528),b=s(6555),g=s(1656),f=s(5397),j=s(1133),y=s(184);t.default=function(){var e=(0,o.TH)().pathname.split("/")[2],t=(0,r.useState)("hide"),s=(0,n.Z)(t,2),d=s[0],v=s[1];(0,r.useEffect)((function(){window.addEventListener("load",v("show"))}),[]);var w=m.Z.create({baseURL:"https://api.trouvailler.com/api/"}),N=(0,r.useState)(e),k=(0,n.Z)(N,2),Z=k[0],C=k[1],I=(0,r.useState)(void 0),S=(0,n.Z)(I,2),D=S[0],_=S[1],P=(0,r.useState)(void 0),O=(0,n.Z)(P,2),z=O[0],$=O[1],M=(0,r.useState)(void 0),L=(0,n.Z)(M,2),E=L[0],F=L[1],H=(0,r.useState)(void 0),T=(0,n.Z)(H,2),A=T[0],R=T[1],U=(0,r.useState)([]),q=(0,n.Z)(U,2),B=q[0],V=q[1],G=(0,r.useState)(""),J=(0,n.Z)(G,2),K=J[0],Q=J[1],W=(0,r.useState)(""),X=(0,n.Z)(W,2),Y=(X[0],X[1],(0,r.useState)(1)),ee=(0,n.Z)(Y,2),te=ee[0],se=ee[1],ae="/packages?page=".concat(te,"&limit=").concat(2,"&destinations=").concat(Z,"&category=").concat(K,"&max=").concat(z||999999,"&min=").concat(D||1),le=(0,i.Z)(ae),ne=le.data,re=le.loading,ie=(le.error,le.reFetch),oe=function(e){var t=e.target,s=t.value,a=t.checked,n=B.indexOf(e.target.value);a?V((function(e){return[].concat((0,l.Z)(e),[s])})):B.splice(n,1),console.log(B)},ce=function(e){var t=e.target,s=t.value,a=t.checked;console.log(s+" state is"+a),a&&"b1"==s?(F(1),R(1e4)):a&&"b2"==s?(F(1e4),R(2e4)):a&&"b3"==s?(F(2e4),R(4e4)):a&&"b4"==s?(F(4e4),R(5e4)):(_(1),$(999999),F(1),R(999999))},de=(0,r.useState)(""),xe=(0,n.Z)(de,2),me=xe[0],pe=xe[1],ue=(0,r.useState)(!1),he=(0,n.Z)(ue,2),be=he[0],ge=he[1],fe=(0,r.useState)([{locations:["loading"]}]),je=(0,n.Z)(fe,2),ye=je[0],ve=je[1];(0,r.useEffect)((function(){!1!==be&&w.get("/packlocations").then((function(e){ve(e.data)}))}),[be]);return(0,y.jsxs)("div",{className:"w-full animationset ".concat(d,"  hotelsexplore"),children:[(0,y.jsx)(p.Z,{}),(0,y.jsxs)("div",{className:" sm:mt-2  top-[0] flex flex-col shadow-lg sticky z-[103] w-[100%] z-[49] sm:flex-row lg:gap-20 px-4 sm:px-16 md:px-20 2xl:px-40  gradientbg relative",children:[(0,y.jsx)("div",{className:"flex justify-start  w-[100%] lg:w-[30%] py-3 lg:py-6",children:(0,y.jsx)("div",{className:"flex items-center w-[100%] sm:w-[90%] lg:w-[60%] lg:w-[100%] justify-between focus:ring-0 bg-[white] focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3",children:(0,y.jsx)(b.Z,{open:be,onOpen:function(){me&&ge(!0)},onClose:function(){return ge(!1)},inputValue:me,onInputChange:function(e,t,s){pe(t),t||ge(!1)},disablePortal:!0,id:"combo-box-demo",options:ye[0].locations,onChange:function(e,t){C(t.toLowerCase()),console.log(Z)},sx:{width:"100%","& .MuiOutlinedInput-root":{border:"none",outline:"none",borderRadius:"0",padding:"0"},"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{border:"none",outline:"none"}},renderInput:function(e){return(0,y.jsx)(g.Z,(0,a.Z)((0,a.Z)({},e),{},{placeholder:"Select a location"}))}})})}),(0,y.jsxs)("div",{className:"flex flex-wrap justify-start w-[100%] lg:w-[70%] items-center mx-auto gap-4 sm:pt-2 pb-2 lg:py-4",children:[(0,y.jsxs)(c.Dropdown,{label:"Categories",dismissOnClick:!1,class:" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light md:px-6 sm:py-1  shadow-sm shadow-[#00b777] rounded-full text-small",children:[(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"checkbox",className:" accent-evergreen",id:"honeymoon",name:"dom",value:"domestic",onChange:oe}),(0,y.jsx)("label",{for:"honeymoon",className:"pl-3 text-blacky-bright",children:" Domestic"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"family",name:"int",value:"international",onChange:oe}),(0,y.jsx)("label",{for:"family",className:"pl-3  text-blacky-bright",children:" International"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"friends",name:"hon",value:"honeymoon",onChange:oe}),(0,y.jsx)("label",{for:"friends",className:"pl-3  text-blacky-bright",children:" Honeymoon"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"holiday",name:"hol",value:"holiday",onChange:oe}),(0,y.jsx)("label",{for:"holiday",className:"pl-3 text-blacky-bright",children:" Holiday"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"holiday",name:"fam",value:"family",onChange:oe}),(0,y.jsx)("label",{for:"holiday",className:"pl-3 text-blacky-bright",children:" Family"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"checkbox",className:"accent-evergreen",id:"holiday",name:"fri",value:"friends",onChange:oe}),(0,y.jsx)("label",{for:"holiday",className:"pl-3  text-blacky-bright",children:" Friends"}),(0,y.jsx)("br",{})]}),(0,y.jsx)(c.Dropdown.Item,{children:(0,y.jsx)("input",{type:"submit",className:"ml-3 my-2 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none",value:"Apply",onClick:function(){var e=B.toString();console.log("array to string "+e),Q(e),console.log(K)}})})]}),(0,y.jsxs)(c.Dropdown,{label:"Budget",dismissOnClick:!1,class:" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light md:px-6 sm:py-1  shadow-sm shadow-[#00b777] rounded-full text-small ",children:[(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"radio",className:"accent-evergreen",id:"budget1",name:"budget",value:"b1",onChange:ce}),"   ",(0,y.jsx)("label",{for:"budget1",className:"pl-3  text-blacky-bright",children:" Less than 10,000"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"radio",className:"accent-evergreen",id:"family",name:"budget",value:"b2",onChange:ce}),(0,y.jsx)("label",{for:"family",className:"pl-3  text-blacky-bright",children:" 10,000 - 20,000"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"radio",className:" accent-evergreen",id:"friends",name:"budget",value:"b3",onChange:ce}),(0,y.jsx)("label",{for:"friends",className:"pl-3  text-blacky-bright",children:" 20,000 - 40,000"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("input",{type:"radio",className:" accent-evergreen",id:"holiday",name:"budget",value:"b4",onChange:ce}),(0,y.jsx)("label",{for:"holiday",className:"pl-3  text-blacky-bright",children:" 40,000 - 50,000"}),(0,y.jsx)("br",{})]}),(0,y.jsxs)("div",{className:"flex",children:[(0,y.jsx)("div",{className:"flex items-center",children:(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("label",{for:"min_budget",className:"text-blacky-bright",children:"Min"}),(0,y.jsx)("input",{type:"number",id:"min_budget",name:"min_budget",placeholder:"\u20b91000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){_(void 0),F(e.target.value)}})]})}),(0,y.jsx)("div",{className:"flex items-center",children:(0,y.jsxs)(c.Dropdown.Item,{children:[(0,y.jsx)("label",{for:"max_budget",className:"ml-6 text-blacky-bright",children:"Max"}),(0,y.jsx)("input",{type:"number",id:"max_budget",name:"max_budget",placeholder:"\u20b93000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){$(void 0),R(e.target.value)}})]})})]}),(0,y.jsx)(c.Dropdown.Item,{children:(0,y.jsx)("input",{type:"submit",className:"align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none",value:"Apply",onClick:function(){var e=parseInt(E);_(e,(function(){return ie()}));var t=parseInt(A);$(t,(function(){return ie()}))}})})]})]})]}),(0,y.jsx)("div",{className:"lg:pt-48 px-4 pb-4 pt-12 sm:px-16 md:px-20 2xl:px-40 flex flex-col gap-4",children:(0,y.jsxs)("h1",{className:"text-lg md:text-2xl font-bold ",children:["Search results for ",Z]})}),re?(0,y.jsx)("div",{className:"loading-div",children:(0,y.jsx)(x(),{color:"#32fca7",loading:re,size:15})}):(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]",children:ne.map((function(e){return(0,y.jsx)("div",{className:"w-[100%] sm:w-[49%] lg:w-[32%] 2xl:w-[23%] mb-2 sm:mb-4",children:(0,y.jsx)(h.Z,{item:e})})}))}),(0,y.jsxs)("div",{className:"flex justify-center py-16 gap-8",children:[te>1&&(0,y.jsxs)("button",{onClick:function(){te>1&&(window.scrollTo(0,0),se(te-1))},className:"border border-[#02c677] w-[180px] flex justify-center py-2 rounded shadow-md text-[black]  font-medium flex gap-2 items-center",children:[(0,y.jsx)(j.Z,{}),"  Previous Page "]}),2==ne.length&&(0,y.jsxs)("button",{onClick:function(){window.scrollTo(0,0),se(te+1)},className:"border border-[#02c677] w-[180px] flex justify-center  py-2 rounded shadow-md text-[black] font-medium flex gap-2 items-center",children:["Next Page ",(0,y.jsx)(f.Z,{})]}),"  "]})]}),(0,y.jsx)(u.Z,{})]})}}}]);
//# sourceMappingURL=240.5cb89ba2.chunk.js.map