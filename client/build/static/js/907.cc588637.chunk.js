"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[907],{5854:function(e,t,s){s.r(t);var r=s(4165),a=s(5861),n=s(4942),o=s(1413),c=s(9439),i=s(2791),l=(s(3037),s(8688),s(5717),s(9751)),d=s(4642),p=s(8914),u=(s(1061),s(7689)),f=s(2388),x=(s(5086),s(184));t.default=function(){var e=JSON.parse(window.sessionStorage.getItem("user")),t=f.Z.create({baseURL:"https://api.trouvailler.com/api"}),s=(0,u.s0)(),m=(0,p.Z)("/user/find/".concat(e._id)),h=m.data;m.loading,m.error;console.log(h);var v=(0,i.useState)({password:void 0}),w=(0,c.Z)(v,2),g=w[0],j=w[1],b=function(){var n=(0,a.Z)((0,r.Z)().mark((function a(n){var o;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.next=3,t.patch("/user/".concat(e._id),g);case 3:o=r.sent,console.log(o),o.data?s("/login"):o.status(404).json({error:"Error"});case 6:case"end":return r.stop()}}),a)})));return function(e){return n.apply(this,arguments)}}();return(0,x.jsxs)("div",{children:[(0,x.jsx)(d.Z,{}),(0,x.jsx)("div",{className:"mt-20 md:mt-32 flex items-center justify-center px-8 py-8",children:(0,x.jsx)("div",{className:"flex flex-col justify-center items-start  gap-[30px] user-con",children:(0,x.jsxs)("div",{className:"w-[100%] flex flex-col gap-[10px] items-start",children:[(0,x.jsx)("h2",{className:"text-xl pb-12",children:"Update Password"}),(0,x.jsxs)("form",{action:"",className:"flex flex-col gap-[10px] items-start text-sm",children:[(0,x.jsx)("label",{children:"Type your new password"}),(0,x.jsx)("input",{className:"border-none rounded outline-none",type:"password",placeholder:"New Password",id:"password",onChange:function(e){j((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,n.Z)({},e.target.id,e.target.value))})),console.log("entered password"+g)}}),(0,x.jsx)("button",{className:"flex justify-center items-center bg-evergreen text-blacky-medium w-36  rounded-md p-2 my-5 hover:bg-whiteglow duration-500",onClick:b,children:"Update"})]})]})})}),(0,x.jsx)(l.Z,{})]})}},5086:function(){},1061:function(e,t,s){e.exports=s.p+"static/media/avatar.9e66268f4f32f01b9a52.png"}}]);
//# sourceMappingURL=907.cc588637.chunk.js.map