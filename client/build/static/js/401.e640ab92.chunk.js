"use strict";(self.webpackChunktravel_app=self.webpackChunktravel_app||[]).push([[401],{8401:function(e,s,c){c.r(s),c.d(s,{default:function(){return r}});c(2791);var a=c(4642),t=c(8914),i=c(1087),l=c(184),A=function(e){var s=e.item;return(0,l.jsx)(i.rU,{className:"w-[30%]",to:"/list/package/".concat(s._id),children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{className:"h-60 sm:h-72 object-cover w-full rounded-lg",src:s.images[0],alt:""}),(0,l.jsxs)("div",{className:"p-5",children:[(0,l.jsx)("h3",{className:"text-xl font-bold text-blacky-medium",children:s.title}),(0,l.jsx)("p",{className:"text-sm text-justify text-blacky-light",children:s.description})]}),(0,l.jsxs)("div",{className:"px-5 flex",children:[(0,l.jsx)("p",{className:"text-lg text-blacky-light font-bold",children:s.duration}),(0,l.jsx)("img",{src:c(1338),alt:"",className:"pl-5 h-6"}),(0,l.jsx)("img",{src:c(1338),alt:"",className:"h-6"})]}),(0,l.jsxs)("div",{className:"p-5 flex justify-between",children:[(0,l.jsxs)("p",{className:"text-evergreen text-xl font-bold",children:["\u20b9",s.cheapestPrice&&s.cheapestPrice.toString().replace(/(\d)(?=(\d\d)+\d$)/g,"$1,")]}),(0,l.jsx)("button",{className:"bg-evergreen text-blacky-light font-semibold rounded-md w-32 h-10",children:"Whats app"})]})]},s._id)})},n=function(){var e=(0,t.Z)("/packages"),s=e.data,c=e.loading;e.error;return(0,l.jsx)("div",{className:"package-card",children:c?"Loading":(0,l.jsx)(l.Fragment,{children:s.map((function(e){return(0,l.jsx)(A,{item:e},e._id)}))})})},d=c(9751),r=function(){return(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(a.Z,{}),(0,l.jsx)("div",{className:"h:50"}),(0,l.jsx)("div",{classname:"",children:(0,l.jsx)("h",{children:"Destinations"})}),(0,l.jsx)("div",{className:"grid  sm:grid-cols-2 md:grid-cols-3 gap-30 m-11",children:(0,l.jsx)(n,{})}),(0,l.jsx)(d.Z,{})]})}},1338:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABNCAYAAAAW92IAAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARySURBVHgB7Zu7ThtbGIWXx0CBMPJ5gjMpwCWkO13GHUJcHF7gQJcueYPgLh1Jly7wBMEGIVLFdOnidNhN5g0ycYkRZP3WNjHEWLAvMxOPP2nkC4K999rX/9+LHGIiCIJioVDY9jxv6fr6OuBXRfUIEZ+Q34d8rXW73cbp6WmIGMjBMWtra0Eul3vNJ3jM71GMBl8Ojo6O9uEQZwLoNnwI4eXl5fOTk5MmHJCHAzY2NvbY8Pd8fJhT5LR5USqV0Gq1zmAZqyNAzfOPFnr9PpqdTqfcaDQiWMKaANL4+fn5z3y7DLdYFcGDJaTn4b7xwrIqywpW1gDOeVnsthETsrZwTShyTfgEQ4ynQKVSWb66uvqKBGC55ePj4wYMMJ4CrIS14fhYZJuFIUYCrK+vb/PFR0LIbsPzRgUGGAnACrxEwpjWQVuA1dVVWfHjWPVHokZBAE20BZiamjIaejbhSTGAJtoCUPlnSAkMnLTroi0AC018+PdhZ2jXRUsA7v0+fsfyaaC4tbX1LzTQEoDhqY+UwfPIP9DAWiyQNOwUrRE5NgLoMhEAGvAMECJlzMzMfIcG2tEgQ+AfSNFOUK/XtdpichBykqTUQWWQtTA5CFlPUOrCunyDJtoCcN9tICVwTdqHJkYZoc3Nzc/qlidJQs7/J9DEaBvkKDhAwrADqjDAOCfI3UC2Hx/JYNT7go2c4A4SwrT3BeO0eLvdDpmilkDkP8QIhX/HjPAbGGLlKMyMzC5f4jwXhGz8K1jAigCHh4cRRXjOtyHcE7KsMixhLRiiCP2KhXBHU8qQsmAJq9GgEuEp376DZWTO22684MwgIZcm6ubGhxmh7DSmV2D34dwiYyBEk9vcQT6f35c1Bo5wLkAfubyQ/L2k01VG+W4o3TNJ8ednEme46vFUIdlllWGeMGFCMlhZBMUgJfQ/R8Smk0u4u1bYKkNLAGWC3FR2OB9DkqM2nJ4i7Nzc3PIIw2XEciQGkS2zprNzPFgAZYMTM4IEIY/JBkdKjDOp7KhKShmzs7M+9/6AH5+pRj+mrJDP24uLi9pDvcYPEoBJD2n4Luylwfvm6N4QHnCU+rCD/O3qQ0bfSAFWVlb86enpDw6dn06RkdftdndGjYZ7BRALDLOt4gDz8XcTckqU7xNhqACq8WJ7TZMHwISIt8flYY7zPwSQYc97Nmm8j/Ei4kh4enck3MoHyCo8po0Xem2TNg5+eUuAQqGwh/FsfB+fW/ktd+nNFEjS8xs3gx7jmxHALWMPGWHQY9wTQI62Kbjji41Bd6mnvvgfGaPvMc5x7hc5J34ge0SdTueJxwNCgGzSizQ9E6PxGFDxOBeWkFHY+b7H1d9HdlmSXcBHdilm3SmaeQEmXuGJAMg4EwGQcSYCIB5nV1ppigA1ZBT5nweJBt8io1CAav78/DxaXFz8yQ8ryBbVWq122PMKt9vtL6VSSTLEAbJBtV6v78qbG7N0q9VqLCwsnEmMjDGNEOWylM/O4K3x0LtByRNifO4F+0TD/Ia/AH15s9YfwZ8DAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=401.e640ab92.chunk.js.map