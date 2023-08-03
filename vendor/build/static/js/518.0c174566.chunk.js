"use strict";(self.webpackChunkvendor_side_app=self.webpackChunkvendor_side_app||[]).push([[518],{9297:function(e,s,t){t.r(s);var a=t(4506),r=t(9439),i=t(3e3),n=t(5104),c=(t(126),t(2382),t(978)),l=t(7689),d=t(1087),o=t(8914),x=t(2791),m=t(7786),h=(t(4377),t(184));s.default=function(){var e=(0,x.useState)(""),s=(0,r.Z)(e,2),t=(s[0],s[1],(0,x.useState)("")),p=(0,r.Z)(t,2),u=(p[0],p[1],(0,x.useState)(void 0)),j=(0,r.Z)(u,2),v=(j[0],j[1],(0,x.useState)(void 0)),f=(0,r.Z)(v,2),N=(f[0],f[1],(0,x.useState)(void 0)),w=(0,r.Z)(N,2),g=(w[0],w[1],(0,x.useState)(void 0)),b=(0,r.Z)(g,2),y=(b[0],b[1],(0,x.useContext)(c.V)),Z=y.user,k=(y.dispatch,(0,x.useState)([])),S=(0,r.Z)(k,2),U=S[0],_=S[1],P=(0,o.Z)("/hotels?vendorid=".concat(Z._id)),z=P.data;P.loading,P.error,P.reFetch;(0,x.useEffect)((function(){_(z)}),[z]);(0,l.s0)();var C=function(e){var s=e.split("/upload/"),t=(0,a.Z)(s),r=t[0],i=t.slice(1);return"".concat(r,"/upload/c_fill,w_400/f_auto/q_auto/").concat(i.join("/upload/"))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(n.Z,{}),(0,h.jsxs)("div",{className:"profile",children:[(0,h.jsxs)("div",{className:"left p-4 sm:p-8",children:[(0,h.jsx)(m.Z,{}),(0,h.jsxs)("div",{className:"profile-container-1",children:[(0,h.jsx)("p",{className:"mb-8",children:"See all bids that you have in your region. Make fast accept the bids inorder to have the customer"}),(0,h.jsx)(d.rU,{to:"/",children:"Go to Bids"})]})]}),(0,h.jsx)("div",{className:"right",children:(0,h.jsxs)("div",{className:"property-con",children:[(0,h.jsxs)("div",{className:"pc-head",children:[(0,h.jsx)("h2",{children:"Your Properties"}),(0,h.jsx)("p",{children:"All your properties are listed here. You can update or delete them. To create a new property please the following button "}),(0,h.jsx)(d.rU,{to:"/vendor/createhotel",children:"New property"}),(0,h.jsx)("div",{})]}),(0,h.jsxs)("div",{className:"pc-body ",children:[U&&0!==U.length&&U.map((function(e){return(0,h.jsx)(d.rU,{to:"/vendor/hotel/".concat(e._id),className:"pb-16 w-[90%] cursor-pointer mx-auto sm:mx-0 sm:w-[45%] md:w-[31%] mb-4 card-shadow lg:w-[22%] pb-8",children:(0,h.jsxs)("div",{className:"shadow-lg ",children:[(0,h.jsxs)("div",{className:"relative w-full",children:[(0,h.jsx)("div",{className:"absolute top-0 left-0 right-0 bottom-0 z-40 rounded bg-gradient-to-b from-transparent via-transparent to-black"}),e.images&&0!==e.images.length&&(0,h.jsx)("img",{className:"w-[100%] aspect-video skeleton rounded-t-lg",src:C(e.images[0]),alt:""})]}),(0,h.jsxs)("div",{className:"pt-2 pb-2",children:[(0,h.jsx)("h3",{className:"text-base md:text-base font-medium z-[48] text-[black] px-2 card-text ",children:e.title}),(0,h.jsx)("span",{className:"mx-2 font-bold text-graydust-dark text-sm",children:e.location}),(0,h.jsx)("div",{className:"flex justify-between items-center",children:e.offers?(0,h.jsxs)("div",{className:"flex justify-between items-center",children:[(0,h.jsx)("div",{className:"md:py-1 mx-1  flex justify-between items-center",children:(0,h.jsxs)("span",{className:"font-bold",children:[(0,h.jsxs)("span",{className:"text-sm md:text-lg",children:["\xa0\u20b9 ",e.offerprice&&e.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," "]})," ",(0,h.jsx)("span",{className:"text-[grey] text-xs md:text-sm",children:(0,h.jsxs)("strike",{children:["\u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"),"  "]})})]})}),"                               ",(0,h.jsx)("span",{className:"mr-1 text-sm bg-[red] text-[white] px-2 py-1 rounded",children:e.offertitle})]}):(0,h.jsxs)("span",{className:"font-bold",children:[(0,h.jsxs)("span",{className:"text-sm md:text-xl",children:["\xa0  \u20b9 ",e.cheapestPrice&&e.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]})," "]})})]})]},e._id)})})),(0,h.jsx)("div",{className:"flex justify-center px-4",children:U&&0==U.length&&(0,h.jsx)("h3",{className:"text-[grey] text-center",children:"You have no any properites till now. Create a new property."})})]})]})})]}),(0,h.jsx)(i.Z,{})]})}},3e3:function(e,s,t){t(2791);var a=t(9806),r=t(1187),i=t(2354),n=t(1087),c=t(184);s.Z=function(){return(0,c.jsx)("div",{id:"footer",children:(0,c.jsxs)("footer",{className:"bg-blacky-light p-4 ",children:[(0,c.jsxs)("div",{className:" flex w-[90%] gap-[1%] flex-wrap xl:w-[60%] mx-auto justify-between py-8 sm:py-12",children:[(0,c.jsxs)("div",{className:"w-[49%] md:w-[30%]",children:[(0,c.jsx)("h2",{className:"text-[white] text-base sm:text-lg pb-4 sm:pb-8",children:"Sitemap"}),(0,c.jsxs)("ul",{className:"flex flex-col gap-[10px]",children:[(0,c.jsx)("li",{className:"text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]",children:(0,c.jsx)(n.rU,{to:"/",children:" Home"})}),(0,c.jsx)("li",{className:"text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]",children:(0,c.jsx)(n.rU,{href:"https://trouvailler.com",children:" trouvailler.com"})}),(0,c.jsx)("li",{className:"text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]",children:(0,c.jsx)(n.rU,{to:"/termandconditions",children:" Terms & conditions"})}),(0,c.jsx)("li",{className:"text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]",children:(0,c.jsx)(n.rU,{to:"/privacypolicy",children:" Privacy Policy"})})]})]}),(0,c.jsxs)("div",{className:"w-[49%] md:w-[30%]",children:[(0,c.jsx)("h2",{className:"text-[white] text-base sm:text-lg pb-4 sm:pb-8",children:"Services"}),(0,c.jsxs)("ul",{className:" flex flex-col gap-[10px] text-xs sm:text-sm",children:[(0,c.jsx)("li",{className:"text-[#e2e2e2]  hover:text-[white]",children:(0,c.jsx)(n.rU,{to:"/vendor",children:" Go to hotels"})}),(0,c.jsx)("li",{className:"text-[#e2e2e2]  hover:text-[white]",children:(0,c.jsx)(n.rU,{to:"/",children:"Bids "})})]})]}),(0,c.jsxs)("div",{className:"w-[100%] md:w-[30%]",children:[(0,c.jsx)("h2",{className:"text-[white] pt-8 md:pt-0 text-base sm:text-lg pb-4 md:pb-8",children:"Connect us"}),(0,c.jsx)("p",{className:"text-[#e2e2e2] text-xs sm:text-sm ",children:"Get in touch with us anytime through our official WhatsApp handle "}),(0,c.jsx)("a",{href:"https://wa.me/918129177335",children:(0,c.jsxs)("button",{className:"bg-evergreen text-sm text-blacky-dark  font-bold rounded px-8 py-3 mt-4 flex items-center",children:[(0,c.jsx)("span",{children:"WhatsApp"})," ",(0,c.jsx)(a.G,{icon:r.VHX,className:"ml-3 text-lg"})]})})]})]}),(0,c.jsxs)("div",{className:"border-t-2 border-graydust-medium flex justify-between items-end align-middle px-0 py-3 sm:py-6 md:pl-6  ml-4 sm:mx-10",children:[(0,c.jsx)("a",{href:"",className:"w-[25%] sm:w-[10%]",children:(0,c.jsx)("img",{src:i,alt:"Trouvailler",className:"sm:w-100 xl:w-3/4"})}),(0,c.jsxs)("div",{className:"flex justify-evenly items-center",children:[(0,c.jsx)(n.rU,{className:"mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline",to:"/termandconditions",children:"Terms and Conditions"}),(0,c.jsx)(n.rU,{className:"mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline",to:"/privacypolicy",children:"Privacy Policy"}),(0,c.jsx)("a",{href:"https://www.facebook.com/travelwithtrouvailler/",children:(0,c.jsx)("div",{className:"bg-evergreen mx-1 w-6 h-6 rounded-full text-center",children:(0,c.jsx)(a.G,{icon:r.AYu})})}),(0,c.jsx)("a",{href:"https://www.youtube.com/@travelwithtrouvailler6162",children:(0,c.jsx)("div",{className:"bg-evergreen mx-1 w-6 h-6 rounded-full text-center",children:(0,c.jsx)(a.G,{icon:r.opf})})}),(0,c.jsx)("a",{href:"https://www.instagram.com/trouvailler_guides/",children:(0,c.jsx)("div",{className:"bg-evergreen mx-1 w-6 h-6 rounded-full text-center",children:(0,c.jsx)(a.G,{icon:r.Zzi})})})]})]}),(0,c.jsxs)("div",{className:"ml-4 text-[gray] sm:hidden",children:[(0,c.jsx)("span",{className:"text-xs",children:"Trouvailler \xa92023"}),(0,c.jsx)(n.rU,{className:"mx-1 underline  text-xs ",to:"/termandconditions",children:"Terms and Conditions"}),(0,c.jsx)(n.rU,{className:"mx-1 underline  text-xs ",to:"/privacypolicy",children:"Privacy Policy"})]})]})})}},5104:function(e,s,t){t.d(s,{Z:function(){return j}});var a=t(4165),r=t(5861),i=t(2791),n=t(978),c=t(2354),l=(t(5717),t(2382),t(6409)),d=t(2093),o=(t(3037),t(1880)),x=(t(8688),t(1087)),m=t(8914),h=t(7689),p=t(2388),u=t(184),j=function(){var e=p.Z.create({baseURL:"https://api.trouvailler.com/api"}),s=(0,h.s0)(),t=(0,i.useContext)(n.V),j=t.user,v=(t.loading,t.error,t.dispatch),f=(0,m.Z)("/user/find/".concat(j._id)).data,N=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(r){var i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),v({type:"LOGOUT"}),t.prev=2,t.next=5,e.get("/auth/logout");case 5:i=t.sent,sessionStorage.removeItem("user"),i&&s("/login"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),v({type:"LOGOUT",payload:{message:"logged out"}});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:"header",children:[(0,u.jsx)("div",{className:"pic1 w-full h-[50vh]"}),(0,u.jsxs)("div",{className:"header-content",children:[(0,u.jsxs)("div",{className:"header-nav",children:[(0,u.jsxs)("div",{className:"prof",children:[(0,u.jsx)("img",{className:"w-[20px] h-[20px] sm:w-[30px] rounded-full sm:h-[30px] ",src:void 0!=f&&f.img}),(0,u.jsx)("button",{className:"mr-4 text-xs sm:text-base",onClick:N,children:"Logout"})]}),(0,u.jsxs)("div",{className:"nav-items",children:[(0,u.jsx)(x.rU,{to:"/",children:(0,u.jsx)("a",{href:"www.trouvailler.com",className:"text-xs sm:text-base",children:"Home"})}),(0,u.jsxs)("span",{className:"header-txt",children:["Explore ",(0,u.jsx)("a",{href:"www.trouvailler.com",children:"trouvailler.com"})]}),(0,u.jsx)("a",{href:"https://www.facebook.com/travelwithtrouvailler/",children:(0,u.jsx)(d.Z,{className:"nav-icon",sx:{fontSize:18}})})," ",(0,u.jsx)("a",{href:"https://wa.me/918129177335",children:(0,u.jsx)(l.Z,{sx:{fontSize:18},className:"nav-icon"})}),(0,u.jsx)("a",{href:"https://www.instagram.com/trouvailler_guides/",children:(0,u.jsx)(o.Z,{sx:{fontSize:18},className:"nav-icon"})})]})]}),(0,u.jsxs)("div",{className:"header-logo",children:[(0,u.jsx)("img",{src:c}),(0,u.jsx)("p",{className:"text-sm sm:text-base",children:"Travel takes us out of our comfort zones and inspires us to see, taste and try new things"})]})]})]})}},7786:function(e,s,t){t(126);var a=t(6409),r=t(4281),i=t(4963),n=t(1087),c=(t(2382),t(978)),l=t(2791),d=t(8914),o=t(184);s.Z=function(){var e=(0,l.useContext)(c.V),s=e.user,t=(e.loading,e.error,e.dispatch,(0,d.Z)("/user/find/".concat(s._id)).data);return(0,o.jsxs)("div",{className:"profile-container",children:[(0,o.jsxs)("div",{className:"img",children:[(0,o.jsx)("img",{src:t.img}),(0,o.jsx)("div",{className:"img-data",children:(0,o.jsx)("h2",{children:t.username})})]}),(0,o.jsxs)("div",{className:"profile-body",children:[(0,o.jsxs)("div",{className:"pd-itm",children:[(0,o.jsx)(a.Z,{className:"icn",sx:{fontSize:18}}),(0,o.jsx)("p",{children:t.phone})]}),(0,o.jsxs)("div",{className:"pd-itm",children:[(0,o.jsx)(r.Z,{sx:{fontSize:18},className:"icn"}),(0,o.jsx)("p",{children:t.email})]}),(0,o.jsx)("div",{className:"pd-itm",children:(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Your user ID : "}),t._id]})}),(0,o.jsx)("div",{className:"pd-itm  flex justify-start",children:(0,o.jsx)("div",{className:"bg-[#c0f6c0] px-4 py-1 rounded shadow-md",children:(0,o.jsxs)(n.rU,{to:"/vendor/updateprofile",children:[" ",(0,o.jsx)(i.Z,{sx:{fontSize:15},className:"icn"}),(0,o.jsx)("span",{className:"text-sm",children:"Edit Profile"})]})})})]})]})}},8914:function(e,s,t){var a=t(4165),r=t(5861),i=t(9439),n=t(2791),c=t(2388);s.Z=function(e){var s=c.Z.create({baseURL:"https://api.trouvailler.com/api"}),t=(0,n.useState)([]),l=(0,i.Z)(t,2),d=l[0],o=l[1],x=(0,n.useState)(!0),m=(0,i.Z)(x,2),h=m[0],p=m[1],u=(0,n.useState)(!1),j=(0,i.Z)(u,2),v=j[0],f=j[1];(0,n.useEffect)((function(){var t=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.prev=1,t.next=4,s.get(e);case 4:r=t.sent,o(r.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),f(t.t0);case 11:p(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var N=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.prev=1,t.next=4,s.get(e);case 4:r=t.sent,o(r.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),f(t.t0);case 11:p(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();return{data:d,loading:h,error:v,reFetch:N}}},126:function(){},2382:function(e,s,t){e.exports=t.p+"static/media/profile.1d714dafbffae01eaa1f.jpg"}}]);
//# sourceMappingURL=518.0c174566.chunk.js.map