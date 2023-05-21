"use strict";(self.webpackChunkvendor_side_app=self.webpackChunkvendor_side_app||[]).push([[415],{8604:function(e,t,s){s.r(t);var n=s(4165),r=s(5861),a=s(3433),i=s(4942),l=s(1413),c=s(9439),o=s(2791),d=s(7689),u=(s(1032),s(2388)),h=s(8914),x=s(1640),m=s(5104),f=s(3e3),p=s(2717),v=s(9774),j=s(9407),g=s(5209),b=s(184);t.default=function(){var e=(0,d.TH)().pathname.split("/")[3],t=(0,d.s0)(),s=(0,h.Z)("/hotels/find/".concat(e)).data,w=(0,o.useState)(!1),Z=(0,c.Z)(w,2),N=(Z[0],Z[1],u.Z.create({baseURL:"https://api.trouvailler.com/api"})),y=s.images,k=(0,o.useState)(""),C=(0,c.Z)(k,2),S=C[0],U=C[1],P=(0,o.useState)(!1),L=(0,c.Z)(P,2),D=L[0],R=L[1],F=(0,o.useState)([]),O=(0,c.Z)(F,2),T=O[0],I=O[1],E=(0,o.useState)(""),z=(0,c.Z)(E,2),H=(z[0],z[1]),M=(0,o.useState)({}),V=(0,c.Z)(M,2),_=V[0],A=V[1],G=(0,o.useState)(!1),$=(0,c.Z)(G,2),B=$[0],W=$[1],q=(0,o.useState)(""),Y=(0,c.Z)(q,2),X=Y[0],J=Y[1],K=(0,o.useState)([]),Q=(0,c.Z)(K,2),ee=Q[0],te=Q[1],se=(0,o.useState)(""),ne=(0,c.Z)(se,2),re=ne[0],ae=ne[1],ie=(0,o.useState)(""),le=(0,c.Z)(ie,2),ce=le[0],oe=le[1],de=(0,o.useState)([]),ue=(0,c.Z)(de,2),he=ue[0],xe=ue[1],me=(0,o.useState)(""),fe=(0,c.Z)(me,2),pe=fe[0],ve=fe[1],je=(0,o.useState)([]),ge=(0,c.Z)(je,2),be=ge[0],we=ge[1],Ze=(0,o.useState)(""),Ne=(0,c.Z)(Ze,2),ye=Ne[0],ke=Ne[1],Ce=(0,o.useState)([]),Se=(0,c.Z)(Ce,2),Ue=Se[0],Pe=Se[1];(0,o.useEffect)((function(){0!=s.length&&(J(s.type),te(s.rooms),xe(s.facilities),we(s.features),Pe(s.locations),W(s.offers),B&&(document.querySelector(".offerhotelcheck").checked=!0))}),[s]);var Le=function(e){A((function(t){return(0,l.Z)((0,l.Z)({},t),{},(0,i.Z)({},e.target.id,e.target.value))}))},De=function(){var s=(0,r.Z)((0,n.Z)().mark((function s(a){var i;return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),s.prev=1,""==T){s.next=6;break}return s.next=5,Promise.all(Object.values(T).map(function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var s,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new FormData).append("file",t),s.append("upload_preset","upload"),e.next=5,N.post("https://api.cloudinary.com/v1_1/difxlqrlc/image/upload",s);case 5:return r=e.sent,a=r.data.url,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:y=s.sent;case 6:return i=(0,l.Z)((0,l.Z)({},_),{},{images:y,type:X,offers:B,rooms:ee,facilities:he,features:be,locations:Ue}),s.next=9,N.patch("/hotels/".concat(e),i);case 9:t("/vendor/hotel/".concat(e)),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(1),s.t0.response?(400==s.t0.response.status&&alert("Sorry, no such hotel found."),404==s.t0.response.status&&alert("Sorry, unable to find hotel!")):s.t0.request?alert("Network error! Please try again later"):alert(s.t0.message);case 15:case"end":return s.stop()}}),s,null,[[1,12]])})));return function(e){return s.apply(this,arguments)}}();return(0,b.jsxs)("div",{className:"new-hotel",children:[(0,b.jsx)(m.Z,{}),(0,b.jsxs)("div",{className:"newhotel-body-1",children:[D&&(0,b.jsx)("div",{className:"crop-box-con",children:(0,b.jsx)(v.Z,{photoURL:S,setOpenCrop:R,setPhotoURL:U,setFile:H,imgFiles:T,setImgFiles:I,size:16/9})}),(0,b.jsxs)("h1",{className:"",children:["Update the Hotel : ",s.title]}),(0,b.jsx)("p",{className:"sm:text-sm",children:"Here you can create a new property and publish to the public. Ensure that all the details are correct before submitting the form."}),(0,b.jsxs)("div",{className:"new-hotel-box",children:[(0,b.jsx)("div",{className:"newhotelform-container",children:(0,b.jsxs)("form",{children:[(0,b.jsxs)("div",{className:"form-item-file",children:[(0,b.jsx)("span",{children:"Upload image"}),(0,b.jsxs)("label",{htmlFor:"img-input",children:["  ",(0,b.jsx)(x.Z,{className:"upload-icn"})]}),(0,b.jsx)("input",{type:"file",name:"",id:"img-input",onChange:function(e){var t=e.target.files[0];t&&(H(t),U(URL.createObjectURL(t)),R(!0))}}),(0,b.jsx)("p",{children:"click again to upload next image"})]}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:" Title"}),(0,b.jsx)("input",{type:"text",name:"",id:"title",defaultValue:s.title,onChange:Le})]}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:" Type"}),(0,b.jsxs)(p.Z,{value:X,onChange:function(e){J(e.target.value)},className:"outline-none",children:[(0,b.jsx)(j.Z,{value:"hotel",children:"Hotel"}),(0,b.jsx)(j.Z,{value:"private villa",children:"Private Villa"}),(0,b.jsx)(j.Z,{value:"home stay",children:"Home Stay"}),(0,b.jsx)(j.Z,{value:"resort",children:"Resort"}),(0,b.jsx)(j.Z,{value:"campsite",children:"Campsite"})]})]}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Description"}),(0,b.jsx)("textarea",{type:"text",id:"description",defaultValue:s.description,onChange:Le})]}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Location"}),(0,b.jsx)("input",{type:"text",id:"location",defaultValue:s.location,onChange:function(e){A((function(t){return(0,l.Z)((0,l.Z)({},t),{},(0,i.Z)({},e.target.id,e.target.value.toLowerCase()))}))}})]}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Location tags"}),(0,b.jsx)("textarea",{type:"text",id:"locations",onChange:function(e){var t=e.target;ke(t.value.toLowerCase())}})]}),(0,b.jsx)("div",{className:"room-btn-box",children:(0,b.jsx)("button",{onClick:function(e){e.preventDefault(),Pe((function(e){return[].concat((0,a.Z)(e),[ye])})),document.getElementById("locations").value=" ",ke("")},className:"bg-[#00ff9f] px-4 py-1 rounded",children:"Add location tag"})}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Room types"}),(0,b.jsx)("input",{type:"text",id:"rooms",onChange:function(e){var t=e.target;ae(t.value)}})]}),(0,b.jsx)("div",{className:"room-btn-box",children:(0,b.jsx)("button",{onClick:function(e){e.preventDefault(),te((function(e){return[].concat((0,a.Z)(e),[re])})),document.getElementById("rooms").value=" ",ae("")},className:"bg-[#00ff9f] px-4 py-1 rounded",children:"Add room type"})}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Facilities"}),(0,b.jsx)("input",{type:"text",id:"facilities",onChange:function(e){var t=e.target;oe(t.value)}})]}),(0,b.jsx)("div",{className:"room-btn-box",children:(0,b.jsx)("button",{onClick:function(e){e.preventDefault(),xe((function(e){return[].concat((0,a.Z)(e),[ce])})),document.getElementById("facilities").value=" ",oe("")},className:"bg-[#00ff9f] px-4 py-1 rounded",children:"Add facility"})}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Features"}),(0,b.jsx)("input",{type:"text",id:"features",onChange:function(e){var t=e.target;ve(t.value)}})]}),(0,b.jsx)("div",{className:"room-btn-box",children:(0,b.jsx)("button",{onClick:function(e){e.preventDefault(),we((function(e){return[].concat((0,a.Z)(e),[pe])})),document.getElementById("features").value=" ",ve("")},className:"bg-[#00ff9f] px-4 py-1 rounded",children:"Add feature"})}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Price"}),(0,b.jsx)("input",{type:"number",id:"cheapestPrice",defaultValue:s.cheapestPrice,onChange:Le})]}),(0,b.jsxs)("div",{className:"flex items-center gap-[5px]",children:[(0,b.jsx)("label",{children:"Offer"}),(0,b.jsx)("input",{type:"checkbox",id:"offers",className:"offerhotelcheck",onChange:function(){W(!B)}})]}),B&&(0,b.jsxs)("div",{className:"px-3 my-4 py-4 border border-[#e8e8e8] shadow-lg rounded",children:[(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Offer Title"}),(0,b.jsx)("input",{type:"text",id:"offertitle",defaultValue:s.offertitle,onChange:Le})]}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Offer description"}),(0,b.jsx)("input",{type:"text",id:"offerdescription",defaultValue:s.offerdescription,onChange:Le})]}),(0,b.jsxs)("div",{className:"form-item",children:[(0,b.jsx)("label",{children:"Offer Price"}),(0,b.jsx)("input",{type:"number",id:"offerprice",defaultValue:s.offerprice,onChange:Le})]})]}),(0,b.jsx)("div",{className:"hotel-form-submit",children:(0,b.jsx)("button",{onClick:De,children:"Update Hotel"})})]})}),(0,b.jsxs)("div",{className:"form-test",children:[(0,b.jsx)("h3",{children:"Upload preview"}),(0,b.jsx)("p",{className:"text-sm text-blacky-bright",children:"Here you can see the preview of what you are going to publish. Please verify all the fields are correct before uploading."}),(0,b.jsx)("div",{className:"img-container",children:T&&Object.values(T).map((function(e,t){return(0,b.jsx)("img",{src:e?URL.createObjectURL(e):"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",alt:""},t)}))}),(0,b.jsxs)("div",{className:"package-details",children:[(0,b.jsxs)("div",{className:"package-details-head",children:[(0,b.jsx)("h2",{children:_.title?_.title:s.title}),(0,b.jsx)("span",{children:X})]}),(0,b.jsx)("p",{children:_.location?_.location:s.location}),(0,b.jsx)("p",{children:_.address?_.address:s.address}),(0,b.jsx)("p",{children:_.description?_.description:s.description}),0!=ee.length&&(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{children:"Room Type"}),(0,b.jsx)("div",{className:"roomTypes ",children:ee.map((function(e,t){return(0,b.jsx)("div",{children:(0,b.jsx)(g.Z,{label:e,onDelete:function(t){!function(e,t){e.preventDefault(),te(ee.filter((function(e){return e!==t})))}(t,e)}})})}))})]}),0!=Ue.length&&(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{children:"Location tags"}),(0,b.jsx)("div",{className:"roomTypes flex flex-wrap",children:Ue.map((function(e,t){return(0,b.jsx)(g.Z,{label:e,onDelete:function(t){!function(e,t){e.preventDefault(),Pe(Ue.filter((function(e){return e!==t})))}(t,e)}})}))})]}),0!=be.length&&(0,b.jsxs)("div",{children:[(0,b.jsx)("label",{children:"Features or other attractions"}),(0,b.jsx)("div",{className:"roomTypes",children:be.map((function(e,t){return(0,b.jsx)(g.Z,{label:e,onDelete:function(t){!function(e,t){e.preventDefault(),we(be.filter((function(e){return e!==t})))}(t,e)}})}))})]}),he&&(0,b.jsx)("div",{children:0!=he.length&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h5",{children:"Facilities"}),(0,b.jsx)("div",{className:"flex flex-wrap gap-[10px]",children:he.map((function(e){return(0,b.jsx)(g.Z,{label:e,onDelete:function(t){!function(e,t){e.preventDefault(),xe(he.filter((function(e){return e!==t})))}(t,e)}})}))})," "]})}),(0,b.jsx)("div",{className:"package-details-flex-2",children:(0,b.jsxs)("h3",{children:[_.cheapestPrice?_.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"):s.cheapestPrice&&s.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," \u20b9"]})}),B&&(0,b.jsxs)("div",{className:"offer",children:[(0,b.jsx)("h4",{children:"You are adding an offer for this hotel"}),(0,b.jsxs)("div",{className:"offer-con",children:[(0,b.jsx)("span",{className:"offertitle",children:_.offertitle?_.offertitle:s.offertitle}),(0,b.jsx)("p",{children:_.offerdescription?_.offerdescription:s.offerdescription&&s.offerdescription}),(0,b.jsxs)("span",{children:["Price:",(0,b.jsx)("span",{children:(0,b.jsxs)("b",{children:[_.offerprice?_.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,"):s.offerprice&&s.offerprice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")," \u20b9"]})})]})]})]})]})]})]})]}),(0,b.jsx)(f.Z,{})]})}},3e3:function(e,t,s){s(2791);var n=s(9806),r=s(1187),a=s(2354),i=s(1087),l=s(184);t.Z=function(){return(0,l.jsx)("div",{id:"footer",children:(0,l.jsxs)("footer",{className:"bg-blacky-light p-4 ",children:[(0,l.jsxs)("div",{className:" flex w-[90%] gap-[1%] flex-wrap xl:w-[60%] mx-auto justify-between py-8 sm:py-12",children:[(0,l.jsxs)("div",{className:"w-[49%] md:w-[30%]",children:[(0,l.jsx)("h2",{className:"text-[white] text-base sm:text-lg pb-4 sm:pb-8",children:"Sitemap"}),(0,l.jsxs)("ul",{className:"flex flex-col gap-[10px]",children:[(0,l.jsx)("li",{className:"text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]",children:(0,l.jsx)(i.rU,{to:"/",children:" Home"})}),(0,l.jsx)("li",{className:"text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]",children:(0,l.jsx)(i.rU,{href:"https://trouvailler.com",children:" trouvailler.com"})}),(0,l.jsx)("li",{className:"text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]",children:(0,l.jsx)(i.rU,{to:"/termandconditions",children:" Terms & conditions"})}),(0,l.jsx)("li",{className:"text-[#e2e2e2] text-xs sm:text-sm  hover:text-[white]",children:(0,l.jsx)(i.rU,{to:"/privacypolicy",children:" Privacy Policy"})})]})]}),(0,l.jsxs)("div",{className:"w-[49%] md:w-[30%]",children:[(0,l.jsx)("h2",{className:"text-[white] text-base sm:text-lg pb-4 sm:pb-8",children:"Services"}),(0,l.jsxs)("ul",{className:" flex flex-col gap-[10px] text-xs sm:text-sm",children:[(0,l.jsx)("li",{className:"text-[#e2e2e2]  hover:text-[white]",children:(0,l.jsx)(i.rU,{to:"/vendor",children:" Go to hotels"})}),(0,l.jsx)("li",{className:"text-[#e2e2e2]  hover:text-[white]",children:(0,l.jsx)(i.rU,{to:"/",children:"Bids "})})]})]}),(0,l.jsxs)("div",{className:"w-[100%] md:w-[30%]",children:[(0,l.jsx)("h2",{className:"text-[white] pt-8 md:pt-0 text-base sm:text-lg pb-4 md:pb-8",children:"Connect us"}),(0,l.jsx)("p",{className:"text-[#e2e2e2] text-xs sm:text-sm ",children:"Get in touch with us anytime through our official WhatsApp handle "}),(0,l.jsx)("a",{href:"https://wa.me/918129177335",children:(0,l.jsxs)("button",{className:"bg-evergreen text-sm text-blacky-dark  font-bold rounded px-8 py-3 mt-4 flex items-center",children:[(0,l.jsx)("span",{children:"WhatsApp"})," ",(0,l.jsx)(n.G,{icon:r.VHX,className:"ml-3 text-lg"})]})})]})]}),(0,l.jsxs)("div",{className:"border-t-2 border-graydust-medium flex justify-between items-end align-middle px-0 py-3 sm:py-6 md:pl-6  ml-4 sm:mx-10",children:[(0,l.jsx)("a",{href:"",className:"w-[25%] sm:w-[10%]",children:(0,l.jsx)("img",{src:a,alt:"Trouvailler",className:"sm:w-100 xl:w-3/4"})}),(0,l.jsxs)("div",{className:"flex justify-evenly items-center",children:[(0,l.jsx)(i.rU,{className:"mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline",to:"/termandconditions",children:"Terms and Conditions"}),(0,l.jsx)(i.rU,{className:"mx-4 text-[#e2e2e2] hidden sm:block text-xs text-underline",to:"/privacypolicy",children:"Privacy Policy"}),(0,l.jsx)("a",{href:"https://www.facebook.com/travelwithtrouvailler/",children:(0,l.jsx)("div",{className:"bg-evergreen mx-1 w-6 h-6 rounded-full text-center",children:(0,l.jsx)(n.G,{icon:r.AYu})})}),(0,l.jsx)("a",{href:"https://www.youtube.com/@travelwithtrouvailler6162",children:(0,l.jsx)("div",{className:"bg-evergreen mx-1 w-6 h-6 rounded-full text-center",children:(0,l.jsx)(n.G,{icon:r.opf})})}),(0,l.jsx)("a",{href:"https://www.instagram.com/trouvailler_guides/",children:(0,l.jsx)("div",{className:"bg-evergreen mx-1 w-6 h-6 rounded-full text-center",children:(0,l.jsx)(n.G,{icon:r.Zzi})})})]})]}),(0,l.jsxs)("div",{className:"ml-4 text-[gray] sm:hidden",children:[(0,l.jsx)("span",{className:"text-xs",children:"Trouvailler \xa92023"}),(0,l.jsx)(i.rU,{className:"mx-1 underline  text-xs ",to:"/termandconditions",children:"Terms and Conditions"}),(0,l.jsx)(i.rU,{className:"mx-1 underline  text-xs ",to:"/privacypolicy",children:"Privacy Policy"})]})]})})}},9774:function(e,t,s){s.d(t,{Z:function(){return N}});var n=s(4165),r=s(3433),a=s(5861),i=s(9439),l=s(7893),c=s(4155),o=s(5450),d=s(7248),u=s(6015),h=s(4565),x=s(8473),m=s(7205),f=s(2791),p=s(7005),v=function(e){return new Promise((function(t,s){var n=new Image;n.addEventListener("load",(function(){return t(n)})),n.addEventListener("error",(function(e){return s(e)})),n.setAttribute("crossOrigin","anonymous"),n.src=e}))};function j(e){return e*Math.PI/180}function g(e,t,s){var n=j(s);return{width:Math.abs(Math.cos(n)*e)+Math.abs(Math.sin(n)*t),height:Math.abs(Math.sin(n)*e)+Math.abs(Math.cos(n)*t)}}function b(e,t){return w.apply(this,arguments)}function w(){return w=(0,a.Z)((0,n.Z)().mark((function e(t,s){var r,a,i,l,c,o,d,u,h,x,m=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.length>2&&void 0!==m[2]?m[2]:0,a=m.length>3&&void 0!==m[3]?m[3]:{horizontal:!1,vertical:!1},e.next=4,v(t);case 4:if(i=e.sent,l=document.createElement("canvas"),c=l.getContext("2d")){e.next=9;break}return e.abrupt("return",null);case 9:return o=j(r),d=g(i.width,i.height,r),u=d.width,h=d.height,l.width=u,l.height=h,c.translate(u/2,h/2),c.rotate(o),c.scale(a.horizontal?-1:1,a.vertical?-1:1),c.translate(-i.width/2,-i.height/2),c.drawImage(i,0,0),x=c.getImageData(s.x,s.y,s.width,s.height),l.width=s.width,l.height=s.height,c.putImageData(x,0,0),e.abrupt("return",new Promise((function(e,t){l.toBlob((function(t){t.name="cropped.jpeg",e({file:t,url:URL.createObjectURL(t)})}),"image/jpeg")})));case 23:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var Z=s(184),N=function(e){var t=e.photoURL,s=e.setOpenCrop,v=e.setPhotoURL,j=e.setFile,g=e.imgFiles,w=e.setImgFiles,N=e.size,k=(0,f.useState)({x:0,y:0}),C=(0,i.Z)(k,2),S=C[0],U=C[1],P=(0,f.useState)(1),L=(0,i.Z)(P,2),D=L[0],R=L[1],F=(0,f.useState)(0),O=(0,i.Z)(F,2),T=O[0],I=O[1],E=(0,f.useState)(null),z=(0,i.Z)(E,2),H=z[0],M=z[1],V=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var a,i,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b(t,H,T);case 3:a=e.sent,i=a.file,l=a.url,v(l),j(i),w([].concat((0,r.Z)(g),[i])),s(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(o.Z,{dividers:!0,sx:{background:"#333",position:"relative",height:400,width:"auto",minWidth:{sm:500}},children:(0,Z.jsx)(p.ZP,{image:t,crop:S,zoom:D,rotation:T,aspect:N,onZoomChange:R,onRotationChange:I,onCropChange:U,onCropComplete:function(e,t){M(t)}})}),(0,Z.jsxs)(d.Z,{sx:{flexDirection:"column",mx:3,my:2},children:[(0,Z.jsxs)(u.Z,{sx:{width:"100%",mb:1},children:[(0,Z.jsxs)(u.Z,{children:[(0,Z.jsxs)(h.Z,{children:["Zoom: ",y(D)]}),(0,Z.jsx)(x.ZP,{valueLabelDisplay:"auto",valueLabelFormat:y,min:1,max:3,step:.1,value:D,onChange:function(e,t){return R(t)}})]}),(0,Z.jsxs)(u.Z,{children:[(0,Z.jsxs)(h.Z,{children:["Rotation: ",T+"\xb0"]}),(0,Z.jsx)(x.ZP,{valueLabelDisplay:"auto",min:0,max:360,value:T,onChange:function(e,t){return I(t)}})]})]}),(0,Z.jsxs)(u.Z,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:[(0,Z.jsx)(m.Z,{variant:"outlined",startIcon:(0,Z.jsx)(l.Z,{}),onClick:function(){return s(!1)},children:"Cancel"}),(0,Z.jsx)(m.Z,{variant:"contained",startIcon:(0,Z.jsx)(c.Z,{}),onClick:V,children:"Crop"})]})]})]})},y=function(e){return"".concat(Math.round(100*e),"%")}},5104:function(e,t,s){s.d(t,{Z:function(){return p}});var n=s(4165),r=s(5861),a=s(2791),i=s(978),l=s(2354),c=(s(5717),s(2382),s(6409)),o=s(2093),d=(s(3037),s(1880)),u=(s(8688),s(1087)),h=s(8914),x=s(7689),m=s(2388),f=s(184),p=function(){var e=m.Z.create({baseURL:"https://api.trouvailler.com/api"}),t=(0,x.s0)(),s=(0,a.useContext)(i.V),p=s.user,v=(s.loading,s.error,s.dispatch),j=(0,h.Z)("/user/find/".concat(p._id)).data,g=function(){var s=(0,r.Z)((0,n.Z)().mark((function s(r){var a;return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r.preventDefault(),v({type:"LOGOUT"}),s.prev=2,s.next=5,e.get("/auth/logout");case 5:a=s.sent,sessionStorage.removeItem("user"),a&&t("/login"),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(2),v({type:"LOGOUT",payload:{message:"logged out"}});case 13:case"end":return s.stop()}}),s,null,[[2,10]])})));return function(e){return s.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"header",children:[(0,f.jsx)("div",{className:"pic1 w-full h-[50vh]"}),(0,f.jsxs)("div",{className:"header-content",children:[(0,f.jsxs)("div",{className:"header-nav",children:[(0,f.jsxs)("div",{className:"prof",children:[(0,f.jsx)("img",{className:"w-[20px] h-[20px] sm:w-[30px] rounded-full sm:h-[30px] ",src:void 0!=j&&j.img}),(0,f.jsx)("button",{className:"mr-4 text-xs sm:text-base",onClick:g,children:"Logout"})]}),(0,f.jsxs)("div",{className:"nav-items",children:[(0,f.jsx)(u.rU,{to:"/",children:(0,f.jsx)("a",{href:"www.trouvailler.com",className:"text-xs sm:text-base",children:"Home"})}),(0,f.jsxs)("span",{className:"header-txt",children:["Explore ",(0,f.jsx)("a",{href:"www.trouvailler.com",children:"trouvailler.com"})]}),(0,f.jsx)("a",{href:"https://www.facebook.com/travelwithtrouvailler/",children:(0,f.jsx)(o.Z,{className:"nav-icon",sx:{fontSize:18}})})," ",(0,f.jsx)("a",{href:"https://wa.me/918129177335",children:(0,f.jsx)(c.Z,{sx:{fontSize:18},className:"nav-icon"})}),(0,f.jsx)("a",{href:"https://www.instagram.com/trouvailler_guides/",children:(0,f.jsx)(d.Z,{sx:{fontSize:18},className:"nav-icon"})})]})]}),(0,f.jsxs)("div",{className:"header-logo",children:[(0,f.jsx)("img",{src:l}),(0,f.jsx)("p",{className:"text-sm sm:text-base",children:"Travel takes us out of our comfort zones and inspires us to see, taste and try new things"})]})]})]})}},8914:function(e,t,s){var n=s(4165),r=s(5861),a=s(9439),i=s(2791),l=s(2388);t.Z=function(e){var t=l.Z.create({baseURL:"https://api.trouvailler.com/api"}),s=(0,i.useState)([]),c=(0,a.Z)(s,2),o=c[0],d=c[1],u=(0,i.useState)(!0),h=(0,a.Z)(u,2),x=h[0],m=h[1],f=(0,i.useState)(!1),p=(0,a.Z)(f,2),v=p[0],j=p[1];(0,i.useEffect)((function(){var s=function(){var s=(0,r.Z)((0,n.Z)().mark((function s(){var r;return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return m(!0),s.prev=1,s.next=4,t.get(e);case 4:r=s.sent,d(r.data),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(1),j(s.t0);case 11:m(!1);case 12:case"end":return s.stop()}}),s,null,[[1,8]])})));return function(){return s.apply(this,arguments)}}();s()}),[e]);var g=function(){var s=(0,r.Z)((0,n.Z)().mark((function s(){var r;return(0,n.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return m(!0),s.prev=1,s.next=4,t.get(e);case 4:r=s.sent,d(r.data),s.next=11;break;case 8:s.prev=8,s.t0=s.catch(1),j(s.t0);case 11:m(!1);case 12:case"end":return s.stop()}}),s,null,[[1,8]])})));return function(){return s.apply(this,arguments)}}();return{data:o,loading:x,error:v,reFetch:g}}},1032:function(){},2382:function(e,t,s){e.exports=s.p+"static/media/profile.1d714dafbffae01eaa1f.jpg"}}]);
//# sourceMappingURL=415.31555cf6.chunk.js.map