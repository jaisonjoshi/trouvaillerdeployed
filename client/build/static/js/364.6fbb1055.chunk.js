"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[364],{3434:function(e,s,t){t.r(s);var a=t(1413),l=t(9439),i=t(2791),c=(t(3037),t(8688),t(5717)),r=t(9751),n=t(4642),x=t(6409),d=t(7689),o=t(8914),m=t(9212),p=t(5700),h=t(9823),f=t(9948),u=t(5521),j=t(4833),g=t(4270),v=t(184);s.default=function(){var e=(0,i.useState)("hide"),s=(0,l.Z)(e,2),t=s[0],N=s[1];(0,i.useEffect)((function(){window.addEventListener("load",N("show"))}),[]);document.querySelector(".hotelNavCon");var b=(0,i.useState)(!1),w=(0,l.Z)(b,2),y=w[0],k=w[1],Z=function(){k(!y)},P=document.querySelectorAll(".nav-box"),O=document.querySelectorAll(".nav-itm");window.addEventListener("scroll",(function(){var e="";P.forEach((function(s){var t=s.offsetTop;s.clientHeight;window.pageYOffset>=t-110&&(e=s.getAttribute("id"))})),O.forEach((function(s){s.classList.remove("active"),s.classList.contains(e)&&s.classList.add("active")}))}));var S=(0,i.useState)([]),C=(0,l.Z)(S,2),z=C[0],M=C[1],A=(0,d.TH)().pathname.split("/")[3],T=(0,o.Z)("/packages/find/".concat(A)),E=T.data;T.loading,T.error;(0,i.useEffect)((function(){M(E)}),[E]),console.log(z);var L="Hi, I would like to book for the package ",$=(0,i.useState)(""),H=(0,l.Z)($,2),W=H[0],_=H[1];(0,i.useEffect)((function(){void 0!=z&&0!==z.length?_("/packages?destinations=".concat(z.location,"&limit=4")):_("/packages?destinations=nolocation&limit=0")}),[z]);var B=(0,o.Z)(W),D=B.data;B.loading;console.log(D);var I=(0,i.useState)(!1),U=(0,l.Z)(I,2),V=U[0],q=U[1],K=function(){var e=document.getElementById("sticky-element");if(e){var s=e.getBoundingClientRect();q(s.top<=0)}};return(0,i.useEffect)((function(){return window.addEventListener("scroll",K),function(){window.removeEventListener("scroll",K)}}),[]),(0,v.jsxs)("div",{className:" animationset ".concat(t," bg-[white] font-body detailviews"),children:[(0,v.jsxs)(g.q,{children:[(0,v.jsx)("title",{children:0!==z.length?z.title:" perfectly packaged"}),(0,v.jsx)("meta",{property:"og:title",content:"hello world"}),(0,v.jsx)("meta",{property:"og:site_name",content:"Trouvailler"}),(0,v.jsx)("meta",{property:"og:description",content:0!==z.length&&z.description}),(0,v.jsx)("meta",{property:"og:image:secure_url",itemprop:"image",content:0!==z.length&&z.images[0]}),(0,v.jsx)("meta",{property:"og:type",content:"website"})]}),(0,v.jsx)(n.Z,{}),(0,v.jsx)(p.Z,{sx:{color:"#fff",opacity:.1,zIndex:function(e){return e.zIndex.drawer+1}},open:y,children:(0,v.jsxs)("div",{className:"w-full relative",children:[(0,v.jsxs)("div",{onClick:function(){k(!1)},className:"cursor-pointer absolute rounded-full p-1 z-[100] top-[-3rem] right-4 sm:right-8 lg:right-14 2xl:right-16 ",children:["                        ",(0,v.jsx)(h.Z,{className:"text-[white] bg-[#0000008c] text-base  rounded"})]}),(0,v.jsx)(c.Z,(0,a.Z)((0,a.Z)({className:"w-[90%] bg-[black] py-8 mx-auto md:w-[90%]"},{dots:!1,arrows:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:640,settings:{slidesToShow:1}}]}),{},{children:z.images&&z.images.map((function(e,s){return(0,v.jsx)("div",{className:"sm:px-8",children:(0,v.jsx)("img",{className:"h-auto  w-full",src:e,alt:"Car in road"},s)})}))}))]})}),(0,v.jsxs)("div",{id:"sticky-element",className:"gradientbg ".concat(V?"add-shadow":""," px-4 sm:px-16 md:px-20 2xl:px-60 bg-[white] relative z-[100] py-4 sm:py-8 sticky top-0 "),children:[(0,v.jsx)("h1",{className:"text-base sm:text-2xl lg:text-2xl  font-medium sm:font-regular text-[white]",children:z.title}),(0,v.jsxs)("div",{className:"flex gap-2 pt-2 text-xs sm:text-base text-[white]",children:[" ",(0,v.jsx)("span",{children:"Home"}),(0,v.jsx)("span",{children:"/"}),(0,v.jsx)("span",{children:"Tour Packages"}),(0,v.jsx)("span",{children:"/"}),(0,v.jsx)("span",{className:"text-[white]",children:z.title})]})]}),(0,v.jsx)("div",{className:"px-0 sm:px-16 md:px-20 2xl:px-60 mt-6 sm:mt-10 ",children:(0,v.jsxs)("div",{className:"w-[100%]   sm:pr-4 sm:pt-4 sm:pb-12 sm:rounded-[10px]  sm:card-shadow flex flex-col xl:flex-row justify-between",children:[(0,v.jsxs)("div",{className:"w-[100%] xl:w-[50%]",children:[z.images&&(0,v.jsxs)("div",{className:"hidden xl:block relative",children:[(0,v.jsx)("span",{className:"absolute text-base text-white top-1 px-2 py-1 rounded right-1 bg-[#000000b0] cursor-pointer",onClick:Z,children:"View more images"}),(0,v.jsx)("img",{src:z.images[0],className:"w-[60%] rounded xl:w-[100%]",alt:""})]}),(0,v.jsxs)("div",{className:"flex flex-col sm:flex-row w-[100%] px-4 sm:px-0 gap-[10px] xl:hidden justify-start",children:[(0,v.jsx)("div",{className:"w-[100%] sm:w-[75%]  ",children:z.images&&(0,v.jsx)("img",{src:z.images[0],className:"h-auto rounded sm:rounded-0  w-[100%] ",alt:"",srcset:""})}),(0,v.jsx)("div",{className:"flex flex-row sm:flex-col gap-[3.333333%] justify-start w-[100%] sm:w-[25%] ",children:z.images&&z.images.slice(1,4).map((function(e,s){return 2!=s?(0,v.jsx)("div",{className:"h-auto sm:h-[31%] w-[31%] sm:w-full relative",children:(0,v.jsx)("img",{src:e,className:"sm:absolute rounded sm:rounded-0 top-0 left-0 w-[100%] h-[100%] object-cover",alt:"",srcset:""})}):(0,v.jsxs)("div",{className:"h-auto sm:h-[31%] w-[31%] sm:w-full relative",onClick:Z,children:[(0,v.jsxs)("div",{className:"absolute top-0 left-0 right-0 bottom-0 rounded bg-[#00000075] flex justify-center items-center",children:[" ",(0,v.jsxs)("span",{className:"text-white text-xs text-center",children:["More",(0,v.jsx)("br",{})," Images"]})]}),(0,v.jsx)("img",{src:e,className:"sm:absolute rounded sm:rounded-0 top-0 left-0 w-[100%] h-[100%] object-cover",alt:"",srcset:""})]})}))})]})]}),(0,v.jsxs)("div",{className:"hidden xl:flex w-[45%] bg-[white] flex  ml-4 px-8 rounded  flex-col justify-start gap-6  pt-4",children:[(0,v.jsxs)("div",{className:" flex flex-col gap-3  items-start",children:[(0,v.jsxs)("div",{className:"text-[black] flex flex-wrap text-xl w-[90%]",children:[(0,v.jsxs)("span",{className:" flex items-center gap-2 mr-8  ",children:[(0,v.jsx)(m.Z,{className:"text-graydust-medium"}),z.duration]}),(0,v.jsxs)("span",{className:" flex items-center gap-2 mr-8",children:[(0,v.jsx)(u.Z,{className:"text-graydust-medium"}),z.location]})]}),z.category&&(0,v.jsxs)("span",{className:" flex items-center gap-2 ",children:[(0,v.jsx)(j.Z,{className:"text-graydust-medium"}),z.category&&z.category.charAt(0).toUpperCase()+z.category.slice(1)]})]}),(0,v.jsx)("p",{className:"text-[17px]  ",children:z.description&&z.description.split(".").slice(0,2).join(". ")+"."}),(0,v.jsxs)("div",{className:"flex pt-4  justify-between items-center",children:[(0,v.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,v.jsx)("span",{className:"font-bold text-base text-graydust-dark",children:"BOOK NOW"}),(0,v.jsx)("a",{href:"https://wa.me/918129177335?text="+L+z.title,children:(0,v.jsxs)("button",{className:"bg-evergreen text-white flex justify-center gap-2 items-center font-bold px-3 py-2 w-full text-base rounded",children:[(0,v.jsx)("span",{children:"WhatsApp Us"})," ",(0,v.jsx)("span",{className:"",children:(0,v.jsx)(x.Z,{})})]})})]}),z.offers?(0,v.jsxs)("div",{className:"text-right",children:[(0,v.jsx)("span",{className:"p-1 bg-[#f8d2d2] font-bold text-[red]",children:z.offertitle}),(0,v.jsx)("p",{className:"mt-2",children:z.offerdescription}),(0,v.jsxs)("span",{children:[(0,v.jsx)("span",{className:"text-2xl ",children:(0,v.jsxs)("b",{children:["\u20b9 ",z.offerprice," "]})}),(0,v.jsxs)("strike",{className:"text-[grey]",children:["\u20b9 ",z.cheapestPrice," "]})]}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"text-sm text-[red]",children:"per person"})]}):(0,v.jsxs)("div",{className:" flex flex-col text-right",children:[(0,v.jsxs)("h1",{className:"font-semibold text-3xl  ",children:["\u20b9 ",z.cheapestPrice&&z.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,v.jsx)("span",{className:"text-graydust-dark text-xs",children:"Per person"})]})]})]})]})}),(0,v.jsx)("div",{className:" px-4 sm:px-16 md:px-20 2xl:px-60  ",children:(0,v.jsxs)("div",{className:"flex flex-col  gap-[5%] ",children:[(0,v.jsx)("div",{className:"flex justify-start flex-col w-[100%]   py-4 sm:rounded-[10px] sm:card-shadow bg-[white]",children:(0,v.jsxs)("div",{className:"xl:px-4",children:[z.description&&(0,v.jsxs)("div",{className:" xl:py-6 nav-box",id:"desc",children:[(0,v.jsx)("h1",{className:"text-xl font-bold mb-4 hidden xl:block",children:"Overview"}),(0,v.jsxs)("div",{className:" flex xl:hidden py-4 sm:py-8 flex-col gap-3  items-start",children:[(0,v.jsxs)("div",{className:"text-[black] flex flex-wrap text-sm lg:text-xl w-[90%]",children:[(0,v.jsxs)("span",{className:" flex items-center gap-2 mr-8  ",children:[(0,v.jsx)(m.Z,{className:"text-graydust-medium text-base lg:text-xl"}),z.duration]}),(0,v.jsxs)("span",{className:" flex items-center gap-2 mr-8",children:[(0,v.jsx)(u.Z,{className:"text-graydust-medium text-base lg:text-xl"}),z.location]})]}),z.category&&(0,v.jsxs)("span",{className:" flex items-center gap-2 text-sm lg:text-xl",children:[(0,v.jsx)(j.Z,{className:"text-base lg:text-xl text-graydust-medium"}),z.category&&z.category.charAt(0).toUpperCase()+z.category.slice(1)]})]}),(0,v.jsxs)("div",{className:"flex sm:py-4 xl:hidden justify-between items-center",children:[(0,v.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,v.jsx)("span",{className:"font-bold text-[10px] sm:text-xs md:text-base text-graydust-dark",children:"BOOK NOW"}),(0,v.jsx)("a",{href:"https://wa.me/918129177335?text="+L+z.title,children:(0,v.jsxs)("button",{className:"bg-evergreen text-white flex justify-center gap-2 items-end sm:items-center font-bold px-3 py-2 w-full text-xs md:text-[18px] rounded",children:[(0,v.jsx)("span",{children:"WhatsApp Us"})," ",(0,v.jsx)("span",{className:"",children:(0,v.jsx)(x.Z,{className:"text-base lg:text-[24px]"})})]})})]}),z.offers?(0,v.jsxs)("div",{className:"text-right",children:[(0,v.jsx)("span",{className:"p-1 bg-[#f8d2d2] font-bold text-[red]",children:z.offertitle}),(0,v.jsx)("p",{className:"mt-2",children:z.offerdescription}),(0,v.jsxs)("span",{children:[(0,v.jsx)("span",{className:"text-2xl ",children:(0,v.jsxs)("b",{children:["\u20b9 ",z.offerprice," "]})}),(0,v.jsxs)("strike",{className:"text-[grey]",children:["\u20b9 ",z.cheapestPrice," "]})]}),(0,v.jsx)("br",{}),(0,v.jsx)("span",{className:"text-sm text-[red]",children:"per person"})]}):(0,v.jsxs)("div",{className:" flex flex-col text-right",children:[(0,v.jsxs)("h1",{className:"font-semibold text-xl sm:text-2xl lg:text-3xl   sm:mb-2",children:["\u20b9 ",z.cheapestPrice&&z.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,v.jsx)("span",{className:"text-graydust-dark text-[10px] sm:text-xs",children:"Per person"})]})]}),(0,v.jsx)("p",{className:" text-[black] text-sm sm:text-base pt-6 sm:pt-0 md:text-lg xl:px-4 ",children:z.description}),0!==z.features.length&&(0,v.jsxs)("div",{className:"pt-3",children:[(0,v.jsx)("h1",{className:"text-[14px] sm:text-xl font-bold mb-2",children:"Inclusions"}),(0,v.jsx)("div",{className:"pl-4",children:(0,v.jsx)("ul",{className:"list-disc px-4 text-sm sm:text-base",children:z.features.map((function(e){return(0,v.jsx)("li",{children:e})}))})})]})]}),z.schedule&&(0,v.jsx)("div",{className:" nav-box",id:"fac",children:0!==z.schedule.length&&(0,v.jsxs)("div",{className:"pt-6 sm:py-6",children:[(0,v.jsx)("h1",{className:"text-lg sm:text-xl font-bold mb-16",children:"Trip Plan"}),(0,v.jsx)("div",{className:"flex flex-col px-4",children:z.schedule&&z.schedule.map((function(e,s){return(0,v.jsxs)("div",{className:"flex flex-col  relative border-l border-l-[#03BA6D] border-l-[2px]  items-start ",children:[(0,v.jsx)("p",{className:"py-8 sm:py-12 pl-8 sm:pl-12 text-sm sm:text-base whitespace-pre-wrap",children:e.dayDesc.trim()[0].toUpperCase()+e.dayDesc.trim().slice(1)}),(0,v.jsx)("div",{className:"absolute w-[25px] sm:w-[30px] h-[25px] sm:h-[30px] rounded-full bg-[#03BA6D] translate-y-[-50%] translate-x-[-50%]"}),(0,v.jsxs)("h1",{className:"absolute top-0 left-8 translate-y-[-50%] text-sm sm:text-base font-semibold",children:["Day ",s+1," - ",e.dayTitle]})]},s)}))})," "]})}),z.activities&&(0,v.jsxs)("div",{className:" nav-box",id:"things",children:[0!==z.activities.length&&(0,v.jsxs)("div",{className:"pt-6 sm:py-6",children:[(0,v.jsx)("h1",{className:"text-base sm:text-xl  font-bold mb-2",children:"Things to do"}),(0,v.jsx)("div",{className:"px-2 text-base sm:text-lg",children:(0,v.jsx)("ul",{className:"list-none flex flex-wrap items-start py-4 gap-6 px-1 sm:px-4",children:z.activities.map((function(e){return(0,v.jsxs)("li",{className:"flex gap-3 items-center border border-evergreen rounded-[5px] font-medium text-sm sm:text-base   px-4 py-1 sm:py-2",children:[(0,v.jsx)("span",{children:(0,v.jsx)(f.Z,{className:"text-[25px] sm:text-[30px]",sx:{color:"#3cb500"}})}),(0,v.jsx)("span",{children:e.trim()[0].toUpperCase()+e.trim().slice(1)})]})}))})})]}),"                               "]}),z.location&&(0,v.jsxs)("div",{className:"pt-6 sm:py-6 nav-box",id:"images",children:[(0,v.jsxs)("div",{className:"flex items-center justify-between pr-[3%]",children:[(0,v.jsx)("span",{className:"text-base sm:text-xl font-bold",children:"Image Gallery"}),z.images.length>1&&(0,v.jsx)("span",{className:"text-[blue] cursor-pointer text-sm sm:text-base font-bold",onClick:Z,children:"View more"})]}),(0,v.jsx)("div",{className:"pt-6 flex",children:(0,v.jsx)("div",{className:"flex flex-wrap gap-[3%]",children:z.images.slice(0,6).map((function(e){return(0,v.jsx)("div",{className:"w-[47%] xl:w-[30%] mb-4",children:(0,v.jsx)("img",{src:e,className:"w-full",alt:""})})}))})})]})]})}),void 0!=D&&0!==D.length&&(0,v.jsxs)("div",{className:"w-[100%] my-20 rounded-[10px]  hidden lg:block bg-[white] ",children:[(0,v.jsx)("div",{className:"h-[70px] flex items-center pt-2",children:(0,v.jsx)("h1",{className:"text-lg font-bold py-2   flex items-center text-[black] mb-2",children:"Similar Packages"})}),(0,v.jsx)("div",{className:"flex flex-col gap-8 xl:gap-16",children:void 0!=D&&0!==D.length&&D.filter((function(e){return e._id!==z._id})).map((function(e){return(0,v.jsxs)("div",{className:"relative",children:[e.offers&&(0,v.jsx)("span",{className:"absolute top-2 right-2 bg-[red] rounded text-[white] px-3 py-1",children:e.offertitle}),(0,v.jsx)("img",{src:e.images[0],className:"rounded",alt:""}),(0,v.jsxs)("div",{className:"flex pt-2",children:[(0,v.jsxs)("div",{className:"w-[60%]",children:[(0,v.jsx)("h1",{className:"text-base  font-bold",children:e.title}),(0,v.jsx)("p",{className:"text-graydust-dark  text-base",children:e.location})]}),(0,v.jsx)("div",{className:"w-[40%] flex flex-col items-end",children:e.offers?(0,v.jsxs)("div",{className:"flex flex-col items-end",children:[(0,v.jsxs)("div",{children:[" ",(0,v.jsx)("strike",{className:"text-[gray]",children:(0,v.jsxs)("span",{className:"text-sm text-[gray] font-bold",children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})}),(0,v.jsxs)("span",{className:"text-lg font-bold",children:["\u20b9 ",e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})]}),(0,v.jsx)("span",{className:"text-sm text-graydust-medium",children:"per person"})," "]}):(0,v.jsxs)("div",{className:"flex flex-col items-end",children:["   ",(0,v.jsxs)("span",{className:"text-lg font-bold",children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,v.jsx)("span",{className:"text-sm text-graydust-medium",children:"per person"})," "]})})]})]})}))})]})]})}),(0,v.jsx)(r.Z,{})]})}},9212:function(e,s,t){var a=t(4836);s.Z=void 0;var l=a(t(5649)),i=t(184),c=(0,l.default)([(0,i.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,i.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");s.Z=c},4833:function(e,s,t){var a=t(4836);s.Z=void 0;var l=a(t(5649)),i=t(184),c=(0,l.default)((0,i.jsx)("path",{d:"M15 7v12.97l-4.21-1.81-.79-.34-.79.34L5 19.97V7h10m4-6H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13l2 1V3c0-1.1-.9-2-2-2zm-4 4H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"}),"BookmarksOutlined");s.Z=c},5521:function(e,s,t){var a=t(4836);s.Z=void 0;var l=a(t(5649)),i=t(184),c=(0,l.default)([(0,i.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"},"0"),(0,i.jsx)("circle",{cx:"12",cy:"9",r:"2.5"},"1")],"LocationOnOutlined");s.Z=c},9948:function(e,s,t){var a=t(4836);s.Z=void 0;var l=a(t(5649)),i=t(184),c=(0,l.default)((0,i.jsx)("path",{d:"M21 4H7V2H5v20h2v-8h14l-2-5 2-5zm-6 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"}),"Tour");s.Z=c},6409:function(e,s,t){var a=t(4836);s.Z=void 0;!function(e,s){if(!s&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=c(s);if(t&&t.has(e))return t.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,t&&t.set(e,a)}(t(2791));var l=a(t(5649)),i=t(184);function c(e){if("function"!==typeof WeakMap)return null;var s=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:s})(e)}var r=(0,l.default)((0,i.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");s.Z=r}}]);
//# sourceMappingURL=364.6fbb1055.chunk.js.map