/*! For license information please see 83.2b234927.chunk.js.LICENSE.txt */
(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[83],{1552:function(e,t,s){"use strict";s.r(t);s(3433);var a=s(9439),l=s(2791),n=s(8914),r=s(1087),i=s(5403),d=s(4377),c=s(807),o=s.n(c),x=s(2388),m=s(4642),p=s(9751),u=s(184);t.default=function(e){var t=e.location,s=(0,l.useState)("hide"),c=(0,a.Z)(s,2),h=c[0],f=c[1];(0,l.useEffect)((function(){window.addEventListener("load",f("show"))}),[]);x.Z.create({baseURL:"https://api.trouvailler.com/api"});var g=(0,l.useState)(t),b=(0,a.Z)(g,2),j=b[0],v=b[1],y=(0,l.useState)(""),w=(0,a.Z)(y,2),N=(w[0],w[1],(0,l.useState)(void 0)),k=(0,a.Z)(N,2),S=k[0],C=k[1],Z=(0,l.useState)([]),_=(0,a.Z)(Z,2),D=(_[0],_[1],(0,l.useState)(void 0)),I=(0,a.Z)(D,2),z=I[0],$=I[1],L=(0,l.useState)(void 0),P=(0,a.Z)(L,2),H=P[0],A=P[1],M=(0,l.useState)(void 0),O=(0,a.Z)(M,2),E=O[0],U=O[1],B="/hotels?destinations=".concat(j,"&max=").concat(z||999999,"&min=").concat(S||1),F=(0,n.Z)(B),R=F.data,q=F.loading,G=(F.error,F.reFetch),J=function(e){var t=e.target,s=t.value,a=t.checked;console.log(s+" state is"+a),a&&"b1"==s?(A(1),U(1e4)):a&&"b2"==s?(A(1e4),U(2e4)):a&&"b3"==s?(A(2e4),U(4e4)):a&&"b4"==s?(A(4e4),U(5e4)):(C(1),$(999999),A(1),U(999999)),console.log("min value is "+S+" max val is "+z)};return(0,u.jsxs)("div",{className:"w-full animationset ".concat(h,"  hotelsexplore"),children:[(0,u.jsx)(m.Z,{}),(0,u.jsxs)("div",{className:"mt-[60px] fixed top-[0] flex flex-col lg:fixed top-[60px] w-[100%] z-[49] lg:flex-row lg:gap-20 px-4 sm:px-16 md:px-20 2xl:px-40  gradient-first relative",children:[(0,u.jsx)("div",{className:"flex justify-center lg:justify-start  w-[100%] lg:w-[30%] py-6",children:(0,u.jsxs)("div",{className:"flex items-center w-[80%] md:w-[60%] lg:w-[100%] justify-between focus:ring-0 bg-[white] focus:ring-offset-0 focus:border-graydust-medium outline-none shadow-sm shadow-gray-500 rounded-2xl text-xs py-2 pl-3",children:[(0,u.jsx)("input",{type:"text border-none outline-none w-[80%] h-[100%] text-2xl",placeholder:"Destination",id:"destination",name:"destination",onChange:function(e){var t=e.target.value;v(t.toLowerCase()),console.log(j)}}),(0,u.jsx)(i.Z,{className:"w=[20%] mx-3 cursor-pointer",onClick:function(){G()}})]})}),(0,u.jsx)("div",{className:"flex flex-wrap justify-center lg:justify-start w-[100%] lg:w-[70%] items-center mx-auto gap-4 py-4",children:(0,u.jsxs)(d.Dropdown,{label:"Budget",dismissOnClick:!1,class:" flex md:justify-center bg-[white] sm:justify-start items-center text-blacky-light px-6 py-1  shadow-sm shadow-[#00b777] rounded-full text-xs",children:[(0,u.jsxs)(d.Dropdown.Item,{children:[(0,u.jsx)("input",{type:"radio",className:"accent-evergreen",id:"budget1",name:"budget",value:"b1",onChange:J}),"   ",(0,u.jsx)("label",{for:"budget1",className:"pl-3 text-base text-blacky-bright",children:" Less than 10,000"}),(0,u.jsx)("br",{})]}),(0,u.jsxs)(d.Dropdown.Item,{children:[(0,u.jsx)("input",{type:"radio",className:"accent-evergreen",id:"family",name:"budget",value:"b2",onChange:J}),(0,u.jsx)("label",{for:"family",className:"pl-3 text-base text-blacky-bright",children:" 10,000 - 20,000"}),(0,u.jsx)("br",{})]}),(0,u.jsxs)(d.Dropdown.Item,{children:[(0,u.jsx)("input",{type:"radio",className:" accent-evergreen",id:"friends",name:"budget",value:"b3",onChange:J}),(0,u.jsx)("label",{for:"friends",className:"pl-3 text-base text-blacky-bright",children:" 20,000 - 40,000"}),(0,u.jsx)("br",{})]}),(0,u.jsxs)(d.Dropdown.Item,{children:[(0,u.jsx)("input",{type:"radio",className:" accent-evergreen",id:"holiday",name:"budget",value:"b4",onChange:J}),(0,u.jsx)("label",{for:"holiday",className:"pl-3 text-base text-blacky-bright",children:" 40,000 - 50,000"}),(0,u.jsx)("br",{})]}),(0,u.jsxs)("div",{className:"flex",children:[(0,u.jsx)("div",{className:"flex items-center",children:(0,u.jsxs)(d.Dropdown.Item,{children:[(0,u.jsx)("label",{for:"min_budget",className:"text-blacky-bright",children:"Min"}),(0,u.jsx)("input",{type:"number",id:"min_budget",name:"min_budget",placeholder:"\u20b91000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){C(void 0),A(e.target.value)}})]})}),(0,u.jsx)("div",{className:"flex items-center",children:(0,u.jsxs)(d.Dropdown.Item,{children:[(0,u.jsx)("label",{for:"max_budget",className:"ml-6 text-blacky-bright",children:"Max"}),(0,u.jsx)("input",{type:"number",id:"max_budget",name:"max_budget",placeholder:"\u20b93000",className:"ml-2 pl-3 outline-none border text-graydust-medium w-24 h-10 rounded-xl",onChange:function(e){$(void 0),U(e.target.value)}})]})})]}),(0,u.jsx)(d.Dropdown.Item,{children:(0,u.jsx)("input",{type:"submit",className:"align-middle ml-3 my-5 rounded-md border border-blacky-bright text-blacky-light w-20 h-8 hover:bg-evergreen hover:text-blacky-dark duration-500 hover:border-none",value:"Apply",onClick:function(){var e=parseInt(H);C(e,(function(){return G()}));var t=parseInt(E);$(t,(function(){return G()}))}})})]})})]}),(0,u.jsxs)("div",{className:"lg:pt-48 px-4 pb-4 pt-12 sm:px-16 md:px-20 2xl:px-40 flex flex-col gap-4",children:[(0,u.jsxs)("div",{className:"flex gap-2 pt-2 text-sm sm:text-base text-graydust-medium",children:[" ",(0,u.jsx)("span",{children:"Home"}),(0,u.jsx)("span",{children:"/"}),(0,u.jsx)("span",{children:"Hotels"}),(0,u.jsx)("span",{children:"/"}),(0,u.jsxs)("span",{className:"text-[black]",children:["Hotels in ",j]})]}),(0,u.jsxs)("h1",{className:"text-2xl font-bold ",children:["Search results for Hotels in ",j]})]}),q?(0,u.jsx)("div",{className:"loading-div",children:(0,u.jsx)(o(),{color:"#32fca7",loading:q,size:15})}):(0,u.jsx)("div",{className:"px-4 py-8 sm:px-16 md:px-20 2xl:px-40 flex  flex-wrap md:gap-[10%] sm:gap-[8%] md:gap-[3%] lg:gap-[2%]",children:R.map((function(e){return(0,u.jsx)(r.rU,{to:"/list/hotel/".concat(e._id),className:"pb-16 w-[90%] cursor-pointer mx-auto sm:mx-0 sm:w-[45%] md:w-[31%] mb-4 card-shadow lg:w-[22%] pb-8",children:(0,u.jsxs)("div",{className:" ",children:[(0,u.jsxs)("div",{className:"relative w-full",children:[(0,u.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),(0,u.jsx)("img",{className:"w-[100%] aspect-video skeleton rounded-t-lg",src:e.images[0],alt:""})]}),(0,u.jsx)("h3",{className:"text-base md:text-lg pt-2 font-medium z-[48] text-[black] px-2  ",children:e.title}),(0,u.jsx)("p",{className:"mx-2 font-bold text-graydust-dark text-sm",children:e.location}),(0,u.jsx)("p",{className:"text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal",children:e.description}),(0,u.jsx)("div",{className:"pt-2",children:(0,u.jsx)("div",{className:"flex justify-between items-center",children:e.offers?(0,u.jsxs)("div",{className:"flex justify-between items-center",children:[(0,u.jsx)("div",{className:"md:py-1 mx-1  flex justify-between items-center",children:(0,u.jsxs)("span",{className:"font-bold",children:[(0,u.jsxs)("span",{className:"text-base md:text-xl",children:["\xa0 \u20b9 ",e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," "]})," ",(0,u.jsx)("span",{className:"text-[grey] text-2xs md:text-base",children:(0,u.jsxs)("strike",{children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"),"  "]})})]})}),"                              ",(0,u.jsx)("span",{className:"mr-1 text-2xs bg-[red] text-[white] px-2 py-1 rounded",children:e.offertitle})]}):(0,u.jsxs)("span",{className:"font-bold",children:[(0,u.jsxs)("span",{className:"text-base md:text-xl",children:["\xa0 \u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," "]})," "]})})})]},e._id)})}))}),(0,u.jsx)(p.Z,{})]})}},5403:function(e,t,s){"use strict";var a=s(4836);t.Z=void 0;var l=a(s(5649)),n=s(184),r=(0,l.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=r},1694:function(e,t){var s;!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e.push(s);else if(Array.isArray(s)){if(s.length){var r=l.apply(null,s);r&&e.push(r)}}else if("object"===n){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var i in s)a.call(s,i)&&s[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(s=function(){return l}.apply(t,[]))||(e.exports=s)}()}}]);
//# sourceMappingURL=83.2b234927.chunk.js.map