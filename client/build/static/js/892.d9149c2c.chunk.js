"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[892],{6066:function(e,t,s){var a=s(4165),r=s(5861),l=s(4942),n=s(1413),o=s(9439),i=s(1686),d=s(2791),x=s(2388),c=s(2299),m=s.n(c),p=s(184);t.Z=function(){var e=(0,d.useState)({}),t=(0,o.Z)(e,2),s=t[0],c=t[1],u=function(e){c((function(t){return(0,n.Z)((0,n.Z)({},t),{},(0,l.Z)({},e.target.id,e.target.value))}))},f=x.Z.create({baseURL:"https://api.trouvailler.com/api"}),h=(0,d.useState)(!1),b=(0,o.Z)(h,2),g=b[0],j=b[1],v=(0,d.useState)(""),w=(0,o.Z)(v,2),N=w[0],y=w[1],k=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j(!0),t.preventDefault(),"Successfully sent"===N){e.next=17;break}return e.prev=3,y("Sending"),r=(0,n.Z)({},s),e.next=8,f.post("/interests",r);case 8:j(!1),y("Successfully sent"),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0),j(!1),y("Sorry, something happened. Please try again!");case 17:j(!1);case 18:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"interest interestm relative  px-4 sm:px-16 md:px-20 2xl:px-40 py-8 md:py-20",children:[(0,p.jsx)("div",{className:"absolute md:hidden  top-0 left-0 right-0 bottom-0 bg-[#0000009e] z-[10]"}),(0,p.jsxs)("h1",{className:"font-bold relative text-[white] text-lg md:text-2xl z-[100]",children:["Looking for a travel experience that's tailored to your interests and preferences?"," "]}),(0,p.jsx)("h1",{className:"font-normal relative z-[100]  my-2 text-white text-base md:text-xl",children:"Fill out our form to get started, and we'll work with you to create the perfect itinerary."}),(0,p.jsx)("div",{className:"z-[100] relative",children:(0,p.jsxs)("form",{action:"",children:[(0,p.jsxs)("div",{className:"flex my-8 md:my-16 gap-4 md:gap-12 flex-wrap text-white text-sm md:text-base font-normal w-[70%] items-end",children:[(0,p.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4",children:(0,p.jsx)("input",{type:"text",id:"name",onChange:u,autoComplete:"off",className:"interestinp noautofill min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent  focus:ring-[transparent]  ",placeholder:"Name"})}),(0,p.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4",children:(0,p.jsx)("input",{type:"text",id:"phone",autoComplete:"off",onChange:u,className:"interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1   border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  ",placeholder:"Phone"})}),(0,p.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4",children:(0,p.jsx)("input",{type:"text",id:"email",autoComplete:"off",onChange:u,className:"interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  ",placeholder:"E-mail"})}),(0,p.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4",children:(0,p.jsx)("input",{type:"text",id:"destination",autoComplete:"off",onChange:u,className:"interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  ",placeholder:"Destination"})}),(0,p.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4",children:(0,p.jsx)("input",{type:"text",id:"month",autoComplete:"off",onChange:u,className:"interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  ",placeholder:"Preferred month of Travel"})}),(0,p.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4",children:(0,p.jsx)("input",{type:"text",id:"noOfPeople",autoComplete:"off",onChange:u,className:"interestinp min-w-[200px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  ",placeholder:"Estimated number of people"})}),(0,p.jsx)("div",{children:(0,p.jsxs)("select",{name:"",id:"travellingWith",className:" bg-transparent min-w-[200px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent",onChange:u,children:[(0,p.jsx)("option",{disabled:!0,selected:!0,value:"",children:"Travelling with"}),(0,p.jsx)("option",{value:"Couple",children:"Couple"}),(0,p.jsx)("option",{value:"Bachelor",children:"Bachelor"}),(0,p.jsx)("option",{value:"Family",children:"Family"}),(0,p.jsx)("option",{value:"Group",children:"Group"})]})}),(0,p.jsx)("div",{className:"flex text-sm md:text-base flex-col gap-4",children:(0,p.jsx)("textarea",{id:"description",autoComplete:"off",onChange:u,className:"min-w-[300px] sm:min-w-[500px] lg:min-w-[1000px] border-b-[#02c677] border-b-[1px] px-1  border-t-[transparent] border-l-transparent border-r-transparent bg-[transparent] focus:ring-[transparent]  ",placeholder:"Any special or specific expectations from the trip"})}),(0,p.jsx)("div",{children:(0,p.jsxs)("select",{name:"",onChange:u,id:"salaried",className:" bg-transparent min-w-[300px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent",children:[(0,p.jsx)("option",{disabled:!0,selected:!0,value:"",children:"Are you a salaried employee"}),(0,p.jsx)("option",{value:"Yes",children:"Yes"}),(0,p.jsx)("option",{value:"No",children:"No"})]})}),(0,p.jsx)("div",{children:(0,p.jsxs)("select",{onChange:u,name:"",id:"itr",className:" bg-transparent min-w-[300px] sm:min-w-[400px] py-2 text-[#d9d9d9] border-b-[#02c677] focus:ring-[transparent] border-t-[transparent] border-l-transparent border-r-transparent",children:[(0,p.jsx)("option",{disabled:!0,selected:!0,value:"",children:"Are you a business owner who files ITR"}),(0,p.jsx)("option",{value:"Yes",children:"Yes"}),(0,p.jsx)("option",{value:"No",children:"No"})]})})]}),(0,p.jsxs)("div",{className:"flex items-center gap-4",children:[(0,p.jsxs)("button",{className:"bg-[#02c677] px-4 py-2 rounded shadow-md text-white font-normal flex gap-2 items-center",onClick:k,children:["Send ",(0,p.jsx)(i.Z,{style:{fontSize:"18px"}})]}),g&&(0,p.jsx)(m(),{color:"#00d67b"}),""!==N&&(0,p.jsx)("span",{className:"text-white italic",children:N})]})]})})]})}},3315:function(e,t,s){s.r(t);var a=s(1413),r=s(4506),l=(s(3433),s(9439)),n=s(2791),o=s(8914),i=s(1087),d=s(2886),x=s(1478),c=s(9751),m=s(4642),p=(s(3037),s(8688),s(5717)),u=s(8264),f=s(7689),h=s(6066),b=s(3959),g=s(184);t.default=function(e){var t=e.setlocation,s=e.settype,j=n.useRef(null),v=(0,f.s0)(),w=(0,n.useState)("hide"),N=(0,l.Z)(w,2),y=N[0],k=N[1];(0,n.useEffect)((function(){window.addEventListener("load",k("show"))}),[]);var _=(0,o.Z)("/packages?offers=true").data,Z=(0,n.useState)(""),S=(0,l.Z)(Z,2),C=S[0],T=S[1],q=(0,n.useState)(void 0),z=(0,l.Z)(q,2),P=z[0],D=(z[1],(0,n.useState)(void 0)),M=(0,l.Z)(D,2),F=M[0],A=(M[1],(0,n.useState)(void 0)),B=(0,l.Z)(A,2),E=(B[0],B[1],(0,n.useState)(void 0)),L=(0,l.Z)(E,2),Y=(L[0],L[1],(0,n.useState)([])),$=(0,l.Z)(Y,2),H=($[0],$[1],(0,n.useState)("")),G=(0,l.Z)(H,2),I=G[0],R=(G[1],(0,n.useState)("")),U=(0,l.Z)(R,2);U[0],U[1];console.log(C);"/packages?destinations=".concat(C,"&category=").concat(I,"&max=").concat(F||999999,"&min=").concat(P||1);var O=(0,o.Z)("/packages?rating=1&rating=2&rating=3"),W=O.data,X=(O.loading,O.error,O.reFetch,function(e){t(e),v("/sep")}),J=function(e){s(e),v("/sept")},K=function(e){var t=e.split("/upload/"),s=(0,r.Z)(t),a=s[0],l=s.slice(1);return"".concat(a,"/upload/c_fill,w_400/f_auto/q_auto/").concat(l.join("/upload/"))},Q=(0,n.useState)(0),V=(0,l.Z)(Q,2),ee=V[0],te=V[1],se=function(e){te(e.clientX)};return(0,g.jsxs)("div",{className:"w-full animationset ".concat(y," bg-[white] hotelsexplore"),children:[(0,g.jsx)(m.Z,{color:"text-blacky-dark"}),(0,g.jsx)("div",{className:"flex justify-start mb-20 md:hidden card-shadow fixed z-[49] bg-[white] top-[60px] left-0 right-0",children:(0,g.jsxs)("div",{className:" flex gap-4 text-base   font-bold",children:[(0,g.jsx)("span",{className:"px-4 py-2 border-b border-b-[2px] text-[#2f3560]  border-b-[#2f3560] ]",children:"Packages"}),(0,g.jsx)(i.rU,{to:"/hotels",className:"px-4 py-2 cursor-pointer cursor-pointer text-[#2f3560]",children:"Hotels"})]})}),(0,g.jsxs)("div",{className:"mt-[60px] pt-24 sm:pt-28  md:pt-32 px-4 sm:px-16 md:px-20 2xl:px-40  bg-package relative",children:[(0,g.jsxs)("div",{className:"flex flex-col items-center justify-center px-8 md:px-20 lg:px-40 gap-8 sm:pb-4",children:[(0,g.jsxs)("h1",{className:"text-center text-3xl sm:text-4xl text-[#00ff98] font-bold",children:[" ","Discover Your Dream Destination with Us"]}),(0,g.jsx)("p",{className:"text-center text-[white] text-base md:text-lg",children:"Find and Book Your Dream Tour Package Now!"})]}),(0,g.jsx)("div",{className:" flex justify-center relative bottom-[-3rem] sm:bottom-[-5rem]",children:(0,g.jsx)("div",{className:"bg-[white] py-8 border-none rounded-[10px] w-[90%] lg:w-[60%] shadow-search card-shadow-1 ",children:(0,g.jsx)("div",{className:"flex gap-4  justify-center ",children:(0,g.jsxs)("div",{className:"flex w-[90%] lg:w-[70%] flex-col items-start gap-4 ",children:[(0,g.jsx)("h1",{className:"font-bold text-graydust-dark ml-2 text-lg text-left sm:text-xl",children:"Ready to get started !"}),(0,g.jsxs)("div",{className:"flex flex-col items-start sm:items-center sm:flex-row w-full gap-4",children:[(0,g.jsx)("div",{className:"flex items-center w-[100%] sm:w-[70%] md:w-[60%] lg:w-[100%] border border-[2px] rounded-full border-[#00b777] justify-between focus:ring-0 focus:ring-offset-0 bg-[white]  outline-none py-1 sm:py-2 px-4",children:(0,g.jsx)("input",{type:"text",className:"border-0  outline-none w-[100%] h-[100%] text-sm text-graydust-medium focus:ring-0 focus:ring-offset-0",placeholder:"Enter your Destination",id:"destination",name:"destination",onChange:function(e){var t=e.target.value;T(t.toLowerCase()),console.log(C)}})}),(0,g.jsx)("button",{className:"px-8 py-2 bg-[#2f3560] rounded-full text-white font-bold cursor-pointer",onClick:function(){t(C),""!==C.trim()?v("/sep"):alert("Please enter a location to search")},children:"Search"})]})]})})})})]}),(0,g.jsxs)("div",{className:" mt-[6rem] sm:mt-[11rem] pb-8 px-4 sm:px-16 md:px-20 2xl:px-40",children:[(0,g.jsx)("h1",{className:"text-lg sm:text-2xl md:text-3xl font-medium sm:font-bold",children:"Top selling packages"}),(0,g.jsx)("p",{className:"text-sm sm:text-base text-graydust-dark lg:text-lg py-2 sm:py-4",children:"Join the Many Happy Travelers Who Have Experienced Our Top-Selling Tour Packages - Book Yours Now!"}),(0,g.jsx)(p.Z,(0,a.Z)((0,a.Z)({},{dots:!1,arrows:!1,infinite:!1,speed:500,slidesToShow:3.5,rows:2,slidesToScroll:1,autoplay:!1,autoplaySpeed:1e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2.5}},{breakpoint:640,settings:{slidesToShow:1.5}}]}),{},{className:"hello-slick pt-4 sm:pt-8 pb-4",children:W.map((function(e){return(0,g.jsxs)("div",{className:"px-4",onMouseDown:se,onMouseUp:function(t){return function(e,t){var s=e.clientX;Math.abs(ee-s)<5&&v("/list/package/".concat(t))}(t,e._id)},children:[" ",(0,g.jsxs)("div",{className:"w-[100%] sm:w-[80%] sm:w-auto mx-auto sm:mx-0 bg-whiteglow cursor-pointer mb-4 card-shadow rounded pb-4 relative",children:[(0,g.jsxs)("div",{className:"relative",children:[" ",(0,g.jsx)("img",{className:"w-full aspect-video skeleton rounded-lg",src:K(e.images[0]),alt:""}),e.offers&&(0,g.jsx)("span",{className:"text-sm font-bold absolute top-[10px] right-[10px] text-white bg-[red] px-2 py-1 rounded",children:e.offertitle})]}),(0,g.jsxs)("div",{className:"py-3 mx-3",children:[(0,g.jsx)("h3",{className:"text-sm sm:text-xl font-medium sm:font-bold z-50 text-black  card-text-heading",children:e.title}),(0,g.jsx)("span",{className:"font-bold text-sm md:text-base text-[#03965e]",children:e.duration}),(0,g.jsx)("p",{className:"text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal ",children:e.description})]}),(0,g.jsx)("div",{className:"md:py-2 mx-3 ",children:e.offers?(0,g.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,g.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,g.jsxs)("span",{className:"text-sm md:text-lg font-bold sm:font-bold",children:["\u20b9"," ",e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,g.jsx)("strike",{children:(0,g.jsxs)("span",{className:" text-xs text-graydust-dark sm:font-bold",children:["\u20b9"," ",e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})}),(0,g.jsx)("span",{className:"text-xs text-graydust-dark",children:"Per person"})]})," "]}):(0,g.jsxs)("div",{className:"flex justify-start gap-1 items-center",children:[(0,g.jsxs)("span",{className:" text-sm md:text-lg font-bold",children:["\u20b9"," ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})," ",(0,g.jsx)("span",{className:"text-xs text-graydust-dark",children:"Per person"})]})})]},e._id)," "]})}))}))]}),(0,g.jsxs)("div",{className:" flex flex-wrap gap-[4%] lg:gap-[10%] px-4 sm:px-16 md:px-20 2xl:px-40",children:[(0,g.jsxs)("div",{className:"relative w-[90%]  mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer",onClick:function(){return J("honeymoon")},children:[(0,g.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"}),(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520311/site/Honeymoon_iogbop.jpg",className:"w-[100%] rounded-[10px]",alt:""}),(0,g.jsxs)("div",{className:"absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]",children:[(0,g.jsx)("p",{className:"text-[white] text-xs sm:text-sm xl:text-base w-[100%]",children:"Create unforgettable honeymoon memories with our curated packages."}),(0,g.jsx)("span",{className:"text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ",children:"HoneyMoon Packages"})]})]}),(0,g.jsxs)("div",{className:"relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer",onClick:function(){return J("adventure")},children:[(0,g.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"}),(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520331/site/adventure_r19fpm.jpg",className:"w-[100%] rounded-[10px]",alt:""}),(0,g.jsxs)("div",{className:"absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]",children:[(0,g.jsx)("p",{className:"text-[white] text-xs sm:text-sm xl:text-base w-[100%]",children:"Discover premier adventure destinations and break free to celebrate."}),(0,g.jsxs)("span",{className:"text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ",children:["Adventure Travel",(0,g.jsx)("br",{className:"hidden lg:block"})," Packages"]})]})]}),(0,g.jsxs)("div",{className:"relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer",onClick:function(){return J("family")},children:[(0,g.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"}),(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520351/site/family_qstl2o.jpg",className:"w-[100%] rounded-[10px]",alt:""}),(0,g.jsxs)("div",{className:"absolute top-[50%] flex flex-col gap-1 translate-y-[-50%] left-4 lg:left-8 z-[45]  w-[80%] 2xl:w-[50%]",children:[(0,g.jsxs)("p",{className:"text-[white] text-xs sm:text-sm xl:text-base w-[100%]",children:["Experience unforgettable moments with Trouvailler's family travel packages."," "]}),(0,g.jsxs)("span",{className:" text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ",children:["Family Trip",(0,g.jsx)("br",{className:"hidden lg:block"})," Packages"]})]})]}),(0,g.jsxs)("div",{className:"relative w-[90%] mx-auto md:mx-0 md:w-[48%] lg:w-[45%] mb-8 cursor-pointer",onClick:function(){return J("friends")},children:[(0,g.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-[#00000085]"}),(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/w_1000/v1684520357/site/friends_lpwyuz.jpg",className:"w-[100%] rounded-[10px]",alt:""}),(0,g.jsxs)("div",{className:"absolute  flex flex-col gap-1 top-[50%] translate-y-[-50%] left-4 lg:left-8 z-[45] w-[80%] 2xl:w-[50%]",children:[(0,g.jsx)("p",{className:"text-[white] text-xs sm:text-sm xl:text-base w-[100%]",children:"Celebrate in style with Trouvailler's tailored tour packages for your group."}),(0,g.jsxs)("span",{className:" text-lg lg:text-2xl xl:text-3xl font-bold text-[white] ",children:["Friends Travel",(0,g.jsx)("br",{className:"hidden lg:block"})," Packages"]})]})]})]}),(0,g.jsx)("div",{className:"bg-[#f2f2f2] py-2 pb-4 sm:pb-10",children:(0,g.jsxs)("div",{className:"mt-6 sm:mt-[4rem] px-4 sm:px-8 pt-8 sm:pb-8  sm:rounded-[10px] shadow-search sm:mx-4 sm:mx-16 md:mx-20 2xl:mx-40 bg-[white] ",children:[(0,g.jsxs)("div",{className:"flex justify-between items-center",children:[(0,g.jsx)("h1",{className:"text-md sm:text-2xl md:text-3xl font-medium sm:font-bold",children:"Trending discounts on Tour Packages"}),(0,g.jsxs)("div",{className:"flex gap-3 border border-[2px] rounded-full px-2 py-[1px]",children:[(0,g.jsx)("button",{onClick:function(){var e;return null===j||void 0===j||null===(e=j.current)||void 0===e?void 0:e.slickPrev()},children:(0,g.jsx)(d.Z,{sx:{fontSize:15,color:"#03965e"}})}),(0,g.jsx)("button",{onClick:function(){var e;return null===j||void 0===j||null===(e=j.current)||void 0===e?void 0:e.slickNext()},children:(0,g.jsx)(x.Z,{sx:{fontSize:15,color:"#03965e"}})})]})]}),(0,g.jsx)("p",{className:"text-sm sm:text-base text-graydust-dark lg:text-lg py-2 ",children:"Hurry! Grab the Best Deals on Trending Tour Packages - Book Now and Save Big!"}),(0,g.jsx)("div",{className:" pt-8 ",children:(0,g.jsx)(p.Z,(0,a.Z)((0,a.Z)({ref:j},{dots:!1,arrows:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:2,autoplay:!1,autoplaySpeed:3e3,responsive:[{breakpoint:1280,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1.5}}]}),{},{className:"slick-m offerpacks ",children:_.map((function(e,t){return(0,g.jsxs)("div",{className:" w-[91%] ml-3  pb-3 mb-10 card-shadow-1 rounded-md cursor-pointer",onClick:function(){return v("/list/package/".concat(e._id))},children:[(0,g.jsxs)("div",{className:"relative w-full",children:[(0,g.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),(0,g.jsx)("img",{src:K(e.images[0]),alt:"",className:"aspect-video skeleton w-full rounded-md h-auto w-full "}),(0,g.jsx)("div",{className:"absolute opacity-90 bottom-2 w-[96%] z-50 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2",children:(0,g.jsx)("h1",{className:"font-bold text-white  text-sm sm:text-base",children:e.offerdescription})})]}),(0,g.jsxs)("div",{className:"px-2 py-4 flex flex-col items-start",children:[(0,g.jsxs)("div",{className:"flex items-start justify-between w-full ",children:[" ",(0,g.jsx)("span",{className:"w-[70%] text-blacky-medium font-semibold sm:font-bold text-sm md:text-[1rem] card-text-heading ",children:e.title}),(0,g.jsx)("span",{className:"w-[30%] text-[#03965e] flex items-center justify-end  text-right font-bold text-xs",children:e.duration})]}),(0,g.jsx)("p",{className:"text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal",children:e.description}),(0,g.jsx)("h3",{className:"text-2xs px-2 py-[4px] rounded md:text-base mb-0 bg-[red] text-[white]",children:(0,g.jsx)("b",{children:e.offertitle})})]}),(0,g.jsxs)("div",{className:"px-2 flex flex-col",children:[(0,g.jsxs)("div",{className:"flex justify-start items-center gap-2",children:[(0,g.jsxs)("span",{className:"font-bold text-lg sm:text-2xl",children:[e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," ","\u20b9"]}),(0,g.jsx)("strike",{className:"text-xs sm:text-base text-graydust-medium",children:(0,g.jsx)("span",{children:"5,000 \u20b9"})})]}),(0,g.jsx)("span",{className:"text-xs sm:text-sm text-graydust-medium",children:"per person"})]})]},e._id)}))}))})]})}),(0,g.jsx)("div",{className:"px-4 pt-8 sm:pt-20 pb-8 sm:px-16 md:px-20 2xl:px-40",children:(0,g.jsxs)("div",{className:"relative ",children:[(0,g.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded-[20px] rounded bg-[#0000004a]"}),(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/v1684523704/site/internationalmobile_lbdpxh.jpg",className:"block md:hidden rounded-[20px]",alt:""}),(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/f_auto/v1684523647/site/international_intqgj.jpg",className:"hidden md:block rounded-[20px] w-full",alt:""}),(0,g.jsxs)("div",{className:"absolute w-[80%] lg:w-[50%] z-[45] text-[white] flex flex-col items-start gap-2 lg:gap-5 left-[10%] top-[50%] translate-y-[-50%]",children:[(0,g.jsx)("h1",{className:"font-medium sm:font-bold text-lg md:text-2xl lg:text-4xl",children:"International Destinations"}),(0,g.jsx)("p",{className:"text-xs sm:text-base lg:text-lg",children:"Trouvailler has been curated the most wonderful international trips for you. Grab the best deals on international travel packages"}),(0,g.jsxs)("span",{className:"flex gap-1 text-sm sm:text-md lg:text-xl items-center border border-[2px] border-[white] my-2 rounded-full px-2 sm:px-4 sm:py-1 cursor-pointer",onClick:function(){return J("international")},children:[(0,g.jsx)("span",{children:"Explore"})," ",(0,g.jsx)(u.Z,{sx:{fontSize:15}})]})]})]})}),(0,g.jsxs)("div",{className:"mt-8 sm:mt-[2rem] py-2 sm:py-8 rounded-[10px] mb-12 sm:mb-0 mx-4 sm:mx-16 md:mx-20 2xl:mx-40 ",children:[(0,g.jsx)("div",{className:"flex justify-between items-center",children:(0,g.jsx)("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold",children:"Popular Destinations"})}),(0,g.jsx)("p",{className:"text-sm sm:text-base lg:text-lg py-2 sm:py-4 text-graydust-dark",children:"Discover Our Most Popular Destinations and Plan Your Next Adventure Today!"}),(0,g.jsxs)("div",{className:" pt-8 justify-between text-[white] mb-12 font-bold text-xl flex gap-[2%] location-container",children:[(0,g.jsxs)("div",{className:"flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer",onClick:function(){return X("kashmir")},children:[(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520897/site/kashmir_d4vjg6.jpg",alt:""}),(0,g.jsx)("h1",{className:"absolute left-3 bottom-3",children:"Kashmir"})]}),(0,g.jsxs)("div",{className:"flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer",onClick:function(){return X("goa")},children:[(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520904/site/goa_t0lts6.jpg",alt:""}),(0,g.jsx)("h1",{className:"absolute left-3 bottom-3",children:"Goa"})]}),(0,g.jsxs)("div",{className:"flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer",onClick:function(){return X("wayanad")},children:[(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520883/site/wayanad_fh4ade.jpg",alt:""}),(0,g.jsx)("h1",{className:"absolute left-3 bottom-3",children:"Wayanad"})]}),(0,g.jsxs)("div",{className:"flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer",onClick:function(){return X("munnar")},children:[(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520889/site/munnar_rasb7w.jpg",alt:""}),(0,g.jsx)("h1",{className:"absolute left-3 bottom-3",children:"Munnar"})]}),(0,g.jsxs)("div",{className:"flex flex-col gap-2 w-[15%] min-w-[200px] rounded-[10px] overflow-hidden relative cursor-pointer",onClick:function(){return X("mysore")},children:[(0,g.jsx)("img",{src:"https://res.cloudinary.com/difxlqrlc/image/upload/q_auto/w_300/v1684520888/site/mysore_r7wqlx.jpg",alt:""}),(0,g.jsx)("h1",{className:"absolute left-3 bottom-3",children:"Mysore"})]})]})]}),(0,g.jsx)(b.ZP,{offset:200,children:(0,g.jsx)(h.Z,{})}),(0,g.jsx)(c.Z,{})]})}},2886:function(e,t,s){var a=s(4836);t.Z=void 0;var r=a(s(5649)),l=s(184),n=(0,r.default)((0,l.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNewSharp");t.Z=n},8264:function(e,t,s){var a=s(4836);t.Z=void 0;var r=a(s(5649)),l=s(184),n=(0,r.default)((0,l.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");t.Z=n},1478:function(e,t,s){var a=s(4836);t.Z=void 0;var r=a(s(5649)),l=s(184),n=(0,r.default)((0,l.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosSharp");t.Z=n}}]);
//# sourceMappingURL=892.d9149c2c.chunk.js.map