"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[150],{6066:function(e,t,s){var l=s(1686),a=s(184);t.Z=function(){return(0,a.jsxs)("div",{className:"interest  px-4 sm:px-16 md:px-20 2xl:px-40 py-8 md:py-20",children:[(0,a.jsx)("h1",{className:"font-bold text-white text-lg md:text-2xl",children:"Looking for a travel experience that's tailored to your interests and preferences? "}),(0,a.jsx)("h1",{className:"font-normal  my-2 text-white text-base md:text-xl",children:"Fill out our form to get started, and we'll work with you to create the perfect itinerary."}),(0,a.jsx)("div",{children:(0,a.jsxs)("form",{action:"",className:"flex my-8 md:my-16 gap-4 md:gap-12 flex-wrap text-white font-semibold items-end",children:[(0,a.jsxs)("div",{className:"flex text-sm md:text-base flex-col gap-4",children:[(0,a.jsx)("label",{htmlFor:"",children:"Name"}),(0,a.jsx)("input",{type:"text",className:"rounded min-w-[200px] border-[#02c677] border-[1px]  bg-[#25252557] "})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("label",{htmlFor:"",children:"E-mail"}),(0,a.jsx)("input",{type:"email",className:"rounded min-w-[200px] border-[#02c677] border-[1px]  bg-[#25252557]"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("label",{htmlFor:"",children:"Phone"}),(0,a.jsx)("input",{type:"text",className:"rounded min-w-[200px] border-[#02c677] border-[1px]  bg-[#25252557]"})]}),(0,a.jsxs)("button",{className:"bg-[#02c677] px-4 py-2 rounded shadow-md text-black font-normal flex gap-2 items-center",children:["Send ",(0,a.jsx)(l.Z,{style:{fontSize:"18px"}})]})]})})]})}},8370:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var l=s(9439),a=s(2791),r=s(8914),d=s(1087),i=s(807),n=s.n(i),x=s(184),c=function(){var e=(0,r.Z)("/packages?rating=1&rating=2&rating=3&limit=12"),t=e.data,s=e.loading;e.error;return(0,x.jsx)(x.Fragment,{children:s?(0,x.jsx)("div",{className:"loading-div",children:(0,x.jsx)(n(),{color:"#32fca7",loading:s,size:15})}):(0,x.jsx)(x.Fragment,{children:t.map((function(e){return(0,x.jsx)(d.rU,{to:"/list/package/".concat(e._id),className:"flex",children:(0,x.jsxs)("div",{className:"w-[80%] sm:w-auto mx-auto sm:mx-0 bg-whiteglow cursor-pointer card-shadow rounded pb-4 relative",children:[(0,x.jsxs)("div",{className:"relative",children:[(0,x.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),(0,x.jsx)("img",{className:"w-full aspect-video skeleton rounded-t-lg",src:e.images[0],alt:""}),(0,x.jsx)("h3",{className:"text-lg sm:text-lg font-bold z-50 text-whiteglow px-3  absolute bottom-[3px] md:bottom-[10px]",children:e.title})]}),(0,x.jsxs)("div",{className:"py-3 mx-3",children:[(0,x.jsx)("span",{className:"font-bold text-[#03965e]",children:e.duration}),(0,x.jsx)("p",{className:"text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal  ",children:e.description})]}),(0,x.jsx)("div",{className:"py-2 mx-3 ",children:e.offers?(0,x.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,x.jsx)("span",{className:"text-sm text-white bg-[red] px-2 py-1 rounded",children:"15% off"}),(0,x.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,x.jsxs)("span",{className:" text-xl font-bold",children:["\u20b9 ",e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,x.jsx)("strike",{children:(0,x.jsxs)("span",{className:" text-sm text-graydust-dark font-bold",children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})})," ",(0,x.jsx)("span",{className:"text-xs text-graydust-dark",children:"Per person"})]})]}):(0,x.jsxs)("div",{className:"flex flex-col items-start gap-2 ",children:[(0,x.jsx)("span",{className:"text-sm text-white bg-[red] px-2 py-1 invisible rounded",children:"15% off"}),(0,x.jsxs)("div",{className:"flex justify-start gap-1 items-center",children:[(0,x.jsxs)("span",{className:" text-xl font-bold",children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})," ",(0,x.jsx)("span",{className:"text-xs text-graydust-dark",children:"Per person"})]})]})})]},e._id)})}))})})},o=s(7689),m=s(2388),p=function(){var e=(0,o.s0)(),t=(m.Z.create({baseURL:"https://api.trouvailler.com/api"}),(0,r.Z)("/packages?offers=true&limit=4")),s=t.data,l=t.loading,a=(t.error,(0,r.Z)("/hotels?offers=true&limit=4").data);return(0,x.jsx)("div",{children:l?(0,x.jsx)("div",{className:"loading-div",children:(0,x.jsx)(n(),{color:"#32fca7",loading:l,size:15})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"   sm:py-8",children:[(0,x.jsx)("h1",{className:" pb-8 font-medium sm:font-bold text-base text-center  sm:text-left  sm:text-2xl",children:"Offers on Trending Travel Destinations and packages"}),(0,x.jsx)("div",{className:"flex justify-start flex-wrap   gap-[2%] ",children:s.map((function(t,s){return(0,x.jsxs)("div",{className:" mx-auto bg-[white] sm:mx-0 w-[48%] lg:w-[23%] pb-3 mb-10 card-shadow-1 rounded-md cursor-pointer",onClick:function(){return e("/list/package/".concat(t._id))},children:[(0,x.jsxs)("div",{className:"relative w-full",children:[(0,x.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),(0,x.jsx)("img",{src:t.images[0],alt:"",className:"aspect-video skeleton w-full rounded-md h-auto w-full "}),(0,x.jsx)("div",{className:"absolute opacity-90 bottom-2 w-[96%] z-50 left-[50%] translate-x-[-50%] flex flex-col rounded-lg p-2",children:(0,x.jsx)("h1",{className:"font-bold text-white  text-xs sm:text-base",children:t.offerdescription})})]}),(0,x.jsxs)("div",{className:"px-2 py-4 flex flex-col items-start",children:[(0,x.jsxs)("div",{className:"flex items-start justify-between w-full text-sm sm:text-lg",children:[" ",(0,x.jsx)("span",{className:"w-[70%] text-blacky-medium font-semibold sm:font-bold  sm:text-lg card-text ",children:t.title}),(0,x.jsx)("span",{className:"w-[30%] text-[#03965e] flex items-center justify-end text-sm text-right font-bold",children:t.duration})]}),(0,x.jsx)("p",{className:"text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal ",children:t.description}),(0,x.jsx)("h3",{className:"text-xs px-2 py-[4px] rounded md:text-base mb-0 bg-[red] text-[white]",children:(0,x.jsx)("b",{children:t.offertitle})})]}),(0,x.jsxs)("div",{className:"px-2 flex flex-col",children:[(0,x.jsxs)("div",{className:"flex justify-start items-center gap-2",children:[(0,x.jsxs)("span",{className:"font-bold text-lg sm:text-2xl",children:["\u20b9 ",t.offerprice&&t.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,x.jsx)("strike",{className:"text-xs sm:text-base text-graydust-medium",children:(0,x.jsxs)("span",{children:["\u20b9 ",t.cheapestPrice&&t.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," "]})})]}),(0,x.jsx)("span",{className:"text-xs sm:text-sm text-graydust-medium",children:"per person"})]})]},t._id)}))})]}),(0,x.jsxs)("div",{className:"  py-4 sm:py-8",children:[(0,x.jsx)("h1",{className:" pb-8 font-bold text-lg text-center sm:text-left sm:text-2xl",children:"Offers on Hotels, Homestays and properties"}),(0,x.jsx)("div",{className:"flex justify-start flex-wrap   gap-[4%] sm:pb-20",children:a.map((function(t,s){return(0,x.jsx)("div",{className:"  w-[48%] mb-10 md:w-[30%] lg:w-[22%] md:pr-2 sm:px-2 sm:px-4  ",children:(0,x.jsxs)("div",{className:"mb-4 h-[100%] pb-3 card-shadow-1 bg-[white] rounded-lg  cursor-pointer",onClick:function(){return e("/list/hotel/".concat(t._id))},children:[(0,x.jsxs)("div",{className:"relative w-full",children:[(0,x.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),(0,x.jsx)("img",{className:"w-[100%] aspect-video skeleton rounded-t-lg",src:t.images[0],alt:""}),(0,x.jsx)("h3",{className:"hidden sm:block sm:text-base md:text-lg sm:font-bold z-50 text-whiteglow px-1 md:px-3  absolute bottom-[3px] md:bottom-[10px]",children:t.title})]}),(0,x.jsx)("h3",{className:"text-xs z-50 py-1 pt-4 mx-1 md:mx-3 text-[black] font-semibold sm:hidden  card-text ",children:t.title}),(0,x.jsxs)("div",{className:"py-1 sm:py-3 mx-1 md:mx-3 flex flex-col gap-1 items-start",children:[(0,x.jsx)("h3",{className:"text-2xs px-2 py-[2px] rounded md:text-sm mb-0 bg-[red] text-[white]",children:(0,x.jsx)("b",{children:t.offertitle})}),(0,x.jsx)("p",{className:"text-2xs sm:text-xs my-2 md:text-base text-graydust-medium",children:t.offerdescription}),(0,x.jsx)("p",{className:"text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal ",children:t.description})]}),(0,x.jsx)("div",{className:" md:py-2 mx-1 md:mx-2 flex justify-between items-center",children:(0,x.jsxs)("span",{className:" ",children:[(0,x.jsxs)("span",{className:"text-sm font-bold md:text-xl pr-1",children:["\xa0 \u20b9",t.offerprice&&t.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," "]}),(0,x.jsx)("span",{className:"text-[grey] font-bold text-xs md:text-sm",children:(0,x.jsxs)("strike",{children:["\u20b9 ",t.cheapestPrice&&t.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"),"  "]})})]})})]})},s)}))})]})]})})},h=s(1413),f=(s(3037),s(8688),s(5717)),u=(s(9806),function(){var e=(0,a.useRef)(null),t=(0,r.Z)("/reviews"),s=t.data,l=t.loading;t.error;return(0,x.jsx)("div",{className:"reviews",children:l?(0,x.jsx)("div",{className:"loading-div",children:(0,x.jsx)(n(),{color:"#32fca7",loading:l,size:15})}):(0,x.jsxs)("div",{className:"md:w-[90%] mx-auto relative",children:[(0,x.jsx)("button",{className:"button absolute top-[30%] bg-[#a8ffb2] rounded w-[25px] h-[25px] md:w-[40px] md:h-[40px]  flex justify-center items-center font-bold text-lg md:text-2xl  z-[1000000000] left-0",onClick:function(){return e.current.slickPrev()},children:"<"}),(0,x.jsx)("button",{className:"button absolute top-[30%] bg-[#a8ffb2] rounded w-[25px] h-[25px] md:w-[40px] md:h-[40px] flex justify-center items-center font-bold text-lg md:text-2xl z-[1000000000] right-0",onClick:function(){return e.current.slickNext()},children:">       "}),(0,x.jsx)(f.Z,(0,h.Z)((0,h.Z)({},{dots:!1,arrows:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:764,settings:{slidesToShow:1}}]}),{},{ref:e,children:s.map((function(e){return(0,x.jsxs)("div",{className:" p-4 sm:p-10 h-full w-[80%] md: w-full mx-auto flex-col justify-between",children:[(0,x.jsx)("div",{className:"flex justify-center",children:(0,x.jsx)("div",{className:" rounded-full flex justify-center w-[45%] h-[45%] md:w-[30%] md:h-[30%] xl:w-[30%] xl:h[30%] skeleton",children:(0,x.jsx)("img",{className:"w-full object-cover rounded-full w-[100%] h-[100%]",src:e.image})})}),(0,x.jsxs)("div",{className:"flex flex-col justify-between ",children:[(0,x.jsxs)("p",{className:"text-[0.75rem] sm:text-[1rem] card-text my-2 textnormal title-font text-center leading-6",children:[" ",e.reviewnote]}),(0,x.jsxs)("div",{className:" text-center px-2 sm:px-8 pt-8",children:[(0,x.jsxs)("span",{className:"font-normal",children:[e.author,",",e.place]}),(0,x.jsxs)("span",{children:[" ",e.rating]})]})]})]},e._id)}))}))]})})}),j=s(9751),g=s(4642),b=s(2233),w=s.p+"static/media/biddingImg.4dbe6bc2481d21572d6b.webp",N=function(){var e=(0,r.Z)("/packages?rating=1&rating=2&rating=3&limit=12"),t=e.data,s=e.loading;e.error;return(0,x.jsx)(x.Fragment,{children:s?(0,x.jsx)("div",{className:"loading-div",children:(0,x.jsx)(n(),{color:"#32fca7",loading:s,size:15})}):(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f.Z,(0,h.Z)((0,h.Z)({},{dots:!1,arrows:!1,infinite:!1,speed:100,slidesToShow:1.5,rows:2,lazyLoad:"ondemand",slidesToScroll:1,autoplay:!1,autoplaySpeed:1e3}),{},{children:t.map((function(e){return(0,x.jsx)(d.rU,{to:"/list/package/".concat(e._id),className:"flex mb-8",children:(0,x.jsxs)("div",{className:"w-[95%] sm:w-auto mx-auto sm:mx-0 bg-whiteglow cursor-pointer card-shadow rounded pb-4 relative",children:[(0,x.jsxs)("div",{className:"relative",children:[(0,x.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),(0,x.jsx)("img",{className:"w-full aspect-video skeleton rounded-t-lg",src:e.images[0],alt:""}),(0,x.jsx)("h3",{className:"text-sm font-bold z-50 text-whiteglow px-3  absolute bottom-[3px] md:bottom-[10px]",children:e.title}),(0,x.jsx)("span",{className:"font-bold absolute top-0 text-sm text-[white] right-0 bg-[#0000008a] px-2 py-1 rounded",children:e.duration}),e.offers&&(0,x.jsx)("span",{className:"text-2xs text-white bg-[red] px-2 py-1 top-0 shadow-sm left-0 absolute rounded",children:e.offertitle})]}),(0,x.jsx)("div",{className:"py-1 mx-3",children:(0,x.jsx)("p",{className:"text-[0.75rem] sm:text-[0.875rem] card-text my-2 textnormal  ",children:e.description})}),(0,x.jsx)("div",{className:"py-1 mx-3 ",children:e.offers?(0,x.jsx)("div",{className:"flex flex-col items-start gap-2",children:(0,x.jsxs)("div",{className:"flex gap-2 items-end",children:[(0,x.jsxs)("span",{className:" text-base font-bold",children:["\u20b9 ",e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,x.jsx)("strike",{children:(0,x.jsxs)("span",{className:" text-2xs text-graydust-dark font-bold",children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})})," ",(0,x.jsx)("span",{className:"text-2xs text-graydust-dark",children:"Per person"})]})}):(0,x.jsx)("div",{className:"flex flex-col items-start gap-2 ",children:(0,x.jsxs)("div",{className:"flex justify-start gap-1 items-center",children:[(0,x.jsxs)("span",{className:" text-base font-bold",children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})," ",(0,x.jsx)("span",{className:"text-xs text-graydust-dark",children:"Per person"})]})})})]},e._id)})}))}))})})},v=s.p+"static/media/emi.e7f4be6977bbd0177994.png",y=function(){return(0,x.jsxs)("div",{className:"flex flex-col md:flex-row py-12 md:py-0 items-center",children:[(0,x.jsx)("div",{className:"w-[90%] md:w-[60%] flex justify-center",children:(0,x.jsxs)("div",{className:"md:w-[70%]",children:[(0,x.jsx)("h1",{className:"text-3xl md:text-5xl mb-12 font-bold",children:"Travel now Pay Later"}),(0,x.jsx)("h1",{className:"text-[0.90rem] sm:text-[1rem] card-text text-graydust-medium my-2",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sequi inventore eveniet eum accusamus alias asperiores maiores voluptatem magni, voluptates accusantium ea laudantium rem explicabo incidunt ad enim minus sunt?"}),(0,x.jsx)(d.rU,{to:"/emi",children:(0,x.jsx)("button",{className:"text-lg mt-8 px-4 py-2 bg-[#00ffa7] rounded text-white font-semibold",children:"Know more"})})]})}),(0,x.jsx)("div",{className:"w-[100%] md:w-[40%]",children:(0,x.jsx)("img",{src:v,alt:""})})]})},k=s(6066),S=function(){var e=(0,a.useState)("hide"),t=(0,l.Z)(e,2),s=t[0],r=t[1];(0,a.useEffect)((function(){window.addEventListener("load",r("show"))}),[]);return(0,x.jsxs)("div",{className:"animationset ".concat(s),children:[(0,x.jsxs)("div",{className:" w-full h-[100vh] background-header",children:[(0,x.jsx)(g.Z,{color:"text-whiteglow"}),(0,x.jsx)("div",{className:" absolute  top-0 h-[100vh] w-full flex justify-center items-center ",children:(0,x.jsxs)("div",{className:"flex flex-col items-center mt-28",children:[(0,x.jsx)("h1",{className:"text-xl md:text-5xl text-whiteglow font-bold text-center",children:"Discover Your Next Adventure"}),(0,x.jsxs)("h1",{className:" w-full mt-3 title-font text-2xl md:text-5xl text-whiteglow font-extrabold text-center",children:[" with ",(0,x.jsx)("img",{className:"inline w-[30%]",src:b,alt:""})]}),(0,x.jsxs)("p",{className:"text-sm w-[70%] md:w-full  md:text-xl text-whiteglow text-center pb-6 pt-10",children:["Experience the adventure of a lifetime with our handpicked travel packages. ",(0,x.jsx)("br",{}),"Book now and create memories that will last a lifetime!"]}),(0,x.jsxs)(d.rU,{className:"",to:"/packages",children:[" ",(0,x.jsx)("button",{className:"flex justify-center items-center bg-[transparent] shadow-lg border border-[#00A651] rounded-full text-whiteglow w-36 font-bold p-2 my-2 hover:bg-whiteglow duration-500",children:"Explore"})]}),(0,x.jsxs)("div",{className:"rounded-full mt-20 bg-[white] px-2 py-1 flex justify-between shadow-xl w-[80%] md:w-[50%]",children:[(0,x.jsx)("input",{type:"text",placeholder:"Search Destinations ",className:"outline-none rounded border-none text-sm md:text-base focus:ring-[transparent]  focus:border-[transparent]"}),(0,x.jsx)("button",{className:"font-bold text-white bg-[#00c676] text-xs md:text-base py-2 rounded-full px-4 md:px-6",children:"Search"})]})]})})]}),(0,x.jsxs)("div",{className:"flex  bg-[#effef6] flex-col pl-12 pr-12 md:flex-row md:pl-12 xl:pl-52  md:pr-12 lg:pr-20 py-8 sm:py-20",children:[(0,x.jsx)("div",{className:"w-[100%] md:w-[50%] 2xl:w-[40%] flex justify-center items-center",children:(0,x.jsx)("img",{src:w,className:"w-[100%] sm:w-[50%] md:w-[100%] lg:w-[90%]",alt:""})}),(0,x.jsxs)("div",{className:"text-center items-center md:items-start md:text-left flex flex-col justify-center mt-12 md:mt-0 gap-[20px] w-[100%] md:w-[50%] 2xl:w-[60%]",children:[(0,x.jsxs)("h1",{className:"title-font font-extrabold text-3xl md:text-5xl",children:["Bid For ",(0,x.jsx)("span",{className:"text-[#00c676]",children:"Today"})]}),(0,x.jsx)("p",{className:"textnormal text-sm sm:text-base md:text-[18px] leading-8 font-medium title-font md:w-[70%]",children:"Wish you could bid hotel prices for your budget and make your trip more pocket friendly?      Here's an end to your worries because we let you place your bid for today's lowest hotel prices."}),(0,x.jsx)(d.rU,{to:"/what-is-bid",children:(0,x.jsx)("button",{className:"flex justify-center items-center border border-[#00c676] rounded-full md:text-xl text-[#00c676] font-bold shadow-lg  px-8 py-2 my-5 hover:bg-evergreendark duration-500",children:"Know more"})})]})]}),(0,x.jsx)("div",{className:" pt-12 md:pt-4 sm:pt-28 pb-8   px-4 sm:px-16 md:px-20 2xl:px-40",children:(0,x.jsxs)("div",{className:"text-center",children:[(0,x.jsx)("h1",{className:"font-bold text-2xl sm:text-4xl",children:"Trending Destinations"}),(0,x.jsx)("p",{className:" pt-4 textnormal  md:text-lg",children:"Have a plan to go vacation? See trending destinations for your inspiration where to go."})]})}),(0,x.jsx)("div",{className:" hidden sm:grid  px-4 sm:px-16 md:px-20 2xl:px-40  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 auto-rows-[1fr] ",children:(0,x.jsx)(c,{})}),(0,x.jsx)("div",{className:" block sm:hidden   px-4 sm:px-16 md:px-20 2xl:px-40  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 auto-rows-[1fr] ",children:(0,x.jsx)(N,{})}),(0,x.jsx)("div",{className:"p-7 text-center   mb-12",children:(0,x.jsx)(d.rU,{to:"/packages",children:(0,x.jsx)("button",{className:"font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200",children:"More destinations"})})}),(0,x.jsx)("div",{className:"px-4 bg-[#ECF1F0] sm:px-16 md:px-20 2xl:px-40",children:(0,x.jsx)(y,{})}),(0,x.jsxs)("div",{className:"pt-8 sm:pt-20 pb-8 px-4 sm:px-16 md:px-20 2xl:px-40 ",children:[(0,x.jsx)("h1",{className:"text-center font-bold text-blacky-dark text-2xl sm:text-4xl",children:"Special Offers"}),(0,x.jsx)("p",{className:"text-center textnormal py-4 text-sm  sm:text-base md:text-lg font-body",children:"Get ready to explore the world with our unbeatable travel deals!"})]}),(0,x.jsx)("div",{className:"px-4 sm:px-16 md:px-20 2xl:px-40 offer-container ",children:(0,x.jsx)(p,{})}),(0,x.jsx)("div",{className:"px-7 text-center pb-8",children:(0,x.jsx)(d.rU,{to:"/traveloffers",children:(0,x.jsx)("button",{className:"font-medium border-graydust-dark border p-2 rounded-md w-full sm:w-auto px-10 hover:bg-evergreen hover:text-whiteglow hover:border-transparent hover:transition-colors hover:duration-200",children:"View All Offers"})})}),(0,x.jsx)("div",{}),(0,x.jsx)(k.Z,{}),(0,x.jsxs)("div",{className:"bg-[#ECF1F0] pb-12 pt-20",children:[(0,x.jsx)("h1",{className:"font-bold text-2xl sm:text-4xl text-center pt-7 mb-8",children:"What People Say About Us"}),(0,x.jsx)("div",{className:"px-4 sm:px-20",children:(0,x.jsx)(u,{})})]}),(0,x.jsx)(j.Z,{})]})}},1686:function(e,t,s){var l=s(4836);t.Z=void 0;var a=l(s(5649)),r=s(184),d=(0,a.default)((0,r.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.Z=d}}]);
//# sourceMappingURL=150.6201d97e.chunk.js.map