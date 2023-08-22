"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[997],{4997:function(e,t,a){a.r(t);var s=a(4165),r=a(5861),n=a(4942),l=a(1413),o=a(9439),i=a(2791),c=a(1087),d=a(2388),p=a(7689),u=a(785),m=a(5872),x=a(456),h=a(9823),g=a(8121),f=a(165),y=a(3746),w=a(184);t.default=function(){var e=(0,i.useState)(!0),t=(0,o.Z)(e,2),a=t[0],v=t[1],b=(0,i.useState)(!1),j=(0,o.Z)(b,2),N=j[0],I=j[1],Z=(0,i.useState)(!1),k=(0,o.Z)(Z,2),E=k[0],L=k[1],C=d.Z.create({baseURL:"https://api.trouvailler.com/api"}),S=(0,i.useState)({username:void 0,password:void 0}),U=(0,o.Z)(S,2),O=U[0],_=U[1],F=(0,i.useContext)(u.V),A=(F.user,F.loading),R=F.error,G=F.dispatch,P=(0,p.s0)(),T=function(e){_((function(t){return(0,l.Z)((0,l.Z)({},t),{},(0,n.Z)({},e.target.id,e.target.value))}))},z=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),G({type:"LOGIN_START"}),e.prev=2,e.next=5,C.post("/auth/login",O);case 5:(a=e.sent).data?(G({type:"LOGIN_SUCCESS",payload:a.data.details}),P("/")):G({type:"LOGIN_FAILURE",payload:{message:"Invalid credentials"}}),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),G({type:"LOGIN_FAILURE",payload:{message:" "}}),console.log(e.t0),e.t0.response?(alert("".concat(e.t0.response.data.error,". Please try again!")),G({type:"LOGIN_FAILURE",payload:{message:" "}})):e.t0.request?(alert("Network error! Please try again later."),G({type:"LOGIN_FAILURE",payload:{message:" "}})):(alert(e.t0.message+". Please try again"),G({type:"LOGIN_FAILURE",payload:{message:" "}}));case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G({type:"LOGIN_START"}),e.prev=1,e.next=4,C.post("/auth/googlelogin",t);case 4:(a=e.sent).data?(G({type:"LOGIN_SUCCESS",payload:a.data.details}),P("/")):G({type:"LOGIN_FAILURE",payload:{message:"Invalid credentials"}}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),G({type:"LOGIN_FAILURE",payload:{message:" "}}),e.t0.response?e.t0.response&&405==e.t0.response.status?(alert("The user with this mail id already exists. Please try again with a different account"),G({type:"LOGIN_FAILURE",payload:{message:" "}})):e.t0.response&&403==e.t0.response.status?(alert("Please try again with a different account"),G({type:"LOGIN_FAILURE",payload:{message:" "}})):alert("Please try again with a different account!"):e.t0.request?alert("Network error! Please try again later."):alert(e.t0.message+". Please try again later.");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),M=(0,i.useState)(""),q=(0,o.Z)(M,2),B=q[0],V=q[1],H=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(t){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),C.post("/auth/forgotPassword",{email:B}).then((function(e){"user not exist"==e.data.status&&L(!0),"mail sent"==e.data.status&&v(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=(0,i.useState)(!0),W=(0,o.Z)(J,2),K=W[0],Q=W[1];function X(){var e=document.getElementById("password");"password"===e.type?(e.type="text",Q(!1)):(e.type="password",Q(!0))}return(0,w.jsxs)("div",{children:[N&&(0,w.jsx)("div",{className:"absolute top-0 left-0 w-full h-full bg-[#0000009c] z-[1000000000]",children:(0,w.jsxs)("div",{className:"relative top-[50%] w-[90%] md:w-[70%] lg:w-[50%] 2xl:w-[40%] rounded shadow-lg px-8 lg:px-20 py-8 left-[50%] translate-x-[-50%] bg-[white] translate-y-[-50%] z-[100000000000000000000000]",children:[(0,w.jsxs)("div",{className:"flex justify-between",children:[(0,w.jsx)("h1",{className:"font-medium text-xl",children:"Forgot password"}),(0,w.jsx)("button",{onClick:function(){I(!1),L(!1),v(!0)},children:(0,w.jsx)(h.Z,{})})]}),a&&(0,w.jsxs)("div",{children:[(0,w.jsx)("p",{className:"font-body text-sm md:text-base my-8",children:"Enter the email address associated with your account and we'll send you a link to reset your password"}),(0,w.jsxs)("form",{action:"",onSubmit:H,children:[(0,w.jsx)("input",{type:"email",className:"w-full rounded focus:ring-[transparent]  focus:border-[grey]",onChange:function(e){L(!1),V(e.target.value)}}),E&&(0,w.jsx)("p",{className:"text-sm my-2 text-[red]",children:"This email id is not registered with us. Please try again or sign up if you haven't created an account."}),"          ",(0,w.jsx)("input",{type:"submit",value:"Send link",className:"gradientbg text-white px-4 py-2 rounded mt-6 cursor-pointer"})]}),(0,w.jsxs)("p",{className:"font-body text-sm md:text-base mt-12",children:["Don't have an account? ",(0,w.jsx)(c.rU,{className:"text-[blue]",children:"Sign Up"})]})]}),!a&&(0,w.jsx)("p",{className:"my-12",children:"A mail with password reset link has been successfully sent to your registered mail id. The link will expire in 15 minutes."})]})}),(0,w.jsxs)("div",{className:"relative h-screen w-full",children:[(0,w.jsxs)("div",{className:"flex justify-between px-4 lg:px-20 pt-6 lg:pt-20",children:[(0,w.jsx)("img",{src:g,className:"w-[80px] sm:w-[100px] lg:w-[100px] mb-6",alt:""}),(0,w.jsxs)(c.rU,{to:"/",children:["    ",(0,w.jsx)(h.Z,{className:"cursor-pointer"})]})]}),(0,w.jsxs)("div",{className:" bg-[white] py-4 w-[350px] lg:w-[500px] absolute z-[110] top-[50%] left-[50%] translate-x-[-50%] rounded-[10px] translate-y-[-50%]  mx-auto",children:[(0,w.jsxs)("div",{className:"flex flex-col mx-8 justify-center items-center   ",children:[(0,w.jsx)("h3",{style:{fontSize:"18px"},className:"font-bold title-font text-lg sm:text-xl lg:text-3xl mb-2 lg:mb-4",children:"Welcome Back"}),(0,w.jsx)("p",{className:"font-body mb-4 text-center text-sm lg:text-base",children:"Enter your details to get sign in to your account"})]}),(0,w.jsxs)("div",{className:"flex w-[90%] sm:w-[70%] mx-auto flex-col mt-2 sm:mt-5",children:[(0,w.jsx)("div",{className:"bg-[white]  relative rounded mb-4",children:(0,w.jsx)("input",{type:"text",className:"   sm:p-3 outline-none text-sm sm:text-base rounded  border-transparent bg-[#E8F0FE] w-[100%] focus:ring-[transparent]  focus:border-[transparent] ",id:"email",placeholder:"Enter Email",onChange:T})}),(0,w.jsxs)("div",{className:"bg-[#E8F0FE] relative  rounded mb-4",children:[(0,w.jsx)("input",{type:"password",className:" sm:p-3 outline-none rounded text-sm sm:text-base  border-transparent bg-transparent w-[90%] focus:ring-[transparent]  focus:border-[transparent] ",id:"password",placeholder:"Enter Password",onChange:T}),K?(0,w.jsx)(y.Z,{onClick:X,className:"w-[15px] text-[grey] cursor-pointer"}):(0,w.jsx)(f.Z,{onClick:X,className:"w-[15px] text-[grey] cursor-pointer"})]}),(0,w.jsx)("button",{className:" text-[11px]  text-left pl-2",onClick:function(){return I(!0)},children:"Forgot password?"})]}),(0,w.jsxs)("div",{className:"mx-auto w-[90%] sm:w-[70%] ",children:[(0,w.jsx)("button",{disabled:A,onClick:z,className:" gradientbg text-whiteglow font-semibold w-full rounded-full py-2 mt-4",children:"Login"}),R&&(0,w.jsx)("span",{className:"text-[red] text-xs text-center md:text-base sm:py-2",children:R.message})]}),(0,w.jsx)("p",{className:"text-center text-sm   mt-8 ",children:"- or sign in with -"}),(0,w.jsx)("div",{className:"mx-auto w-[100%] sm:w-[70%] my-4 glogin",children:(0,w.jsx)(m.kZ,{onSuccess:function(e){console.log(e);var t=e.clientId,a=(e.credential,(0,x.Z)(e.credential)),s=(a.email,{});s.username=a.given_name,s.email=a.email;s.phone="add phone number",s.google_id=t,s.img=a.picture,D(s)},shape:"circle",size:"large",onError:function(){console.log("Login failed")},width:"100%",useOneTap:!0})}),(0,w.jsxs)("p",{className:"sm:mx-14 text-center text-sm  mt-8",children:["Don't have an account?",(0,w.jsxs)(c.rU,{className:"text-[blue]",to:"/signup",children:[" ","Sign up here"]})]})]}),(0,w.jsxs)("div",{className:"absolute bottom-0 gap-4 px-4 md:gap-8 flex-wrap right-0 w-full flex  justify-center pb-8 font-body text-sm text-[grey]",children:[(0,w.jsx)("span",{children:"\xa9 Trouvailler Enterprises Private Limited"}),(0,w.jsx)(c.rU,{children:"Return to Home"}),(0,w.jsx)(c.rU,{children:"Terms and Conditions"}),(0,w.jsx)(c.rU,{children:"Privacy policy"})]})]})]})}},9823:function(e,t,a){var s=a(4836);t.Z=void 0;var r=s(a(5649)),n=a(184),l=(0,r.default)((0,n.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=l},165:function(e,t,a){var s=a(4836);t.Z=void 0;var r=s(a(5649)),n=a(184),l=(0,r.default)((0,n.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.Z=l},456:function(e,t,a){function s(e){this.message=e}s.prototype=new Error,s.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new s("'atob' failed: The string to be decoded is not correctly encoded.");for(var a,r,n=0,l=0,o="";r=t.charAt(l++);~r&&(a=n%4?64*a+r:r,n++%4)?o+=String.fromCharCode(255&a>>(-2*n&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return o};function n(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,t){var a=t.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a})))}(t)}catch(e){return r(t)}}function l(e){this.message=e}l.prototype=new Error,l.prototype.name="InvalidTokenError",t.Z=function(e,t){if("string"!=typeof e)throw new l("Invalid token specified");var a=!0===(t=t||{}).header?0:1;try{return JSON.parse(n(e.split(".")[a]))}catch(e){throw new l("Invalid token specified: "+e.message)}}}}]);
//# sourceMappingURL=997.438d5d46.chunk.js.map