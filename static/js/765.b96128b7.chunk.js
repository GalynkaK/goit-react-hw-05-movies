"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{765:function(e,r,t){t.r(r);var a=t(861),n=t(433),s=t(439),c=t(757),u=t.n(c),i=t(791),o=t(87),p=t(689),l=t(402),f=t(329),v=t(31),m=t(184);r.default=function(){var e=(0,i.useState)(!0),r=(0,s.Z)(e,2),t=r[0],c=r[1],h=(0,i.useState)([]),g=(0,s.Z)(h,2),d=g[0],x=g[1],b=(0,o.lr)({page:1}),w=(0,s.Z)(b,2),k=w[0],j=w[1],N=(0,p.TH)(),Z=(0,i.useMemo)((function(){return Object.fromEntries((0,n.Z)(k))}),[k]),y=Number(Z.page||1),C=(0,i.useState)(0),P=(0,s.Z)(C,2),_=P[0],M=P[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,f.Df)(y);case 4:r=e.sent,x(r.results),M(r.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.message);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:"mainTitle",children:"Trending movies:"}),(0,m.jsx)("ul",{className:"listMovies",children:t?(0,m.jsx)("div",{className:"loading",children:(0,m.jsx)(l.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",style:{margin:"0 auto"},className:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}):d.map((function(e){var r=e.title,t=e.id,a=e.poster_path;return(0,m.jsx)("li",{className:"movieItem",children:(0,m.jsxs)(o.rU,{to:"/movies/".concat(t),state:{from:N},children:[(0,m.jsx)("img",{className:"poster",src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"/src/img/noMovieImg.jpg",alt:r}),(0,m.jsx)("p",{className:"title",children:r})]})},t)}))}),(0,m.jsx)(v.Z,{totalPages:_,setSearchParams:j,params:Z,currentPage:Number((null===Z||void 0===Z?void 0:Z.page)-1)||0})]})}},31:function(e,r,t){t.d(r,{Z:function(){return i}});var a=t(683),n=t(48),s=t.n(n),c=t(61),u=t(184);var i=function(e){var r=e.totalPages,t=e.setSearchParams,n=e.params,i=e.currentPage;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)(s(),{breakLabel:"...",previousLabel:(0,u.jsx)(c.u1R,{}),nextLabel:(0,u.jsx)(c.hjJ,{}),onPageChange:function(e){t((0,a.Z)((0,a.Z)({},n),{},{page:e.selected+1}))},pageRangeDisplayed:4,marginPagesDisplayed:2,pageCount:r,renderOnZeroPageCount:null,forcePage:i,containerClassName:"container",activeClassName:"selected",pageClassName:"page",breakClassName:"break",previousClassName:"previous",nextClassName:"next",disabledClassName:"disabled"})})})}},329:function(e,r,t){t.d(r,{Df:function(){return u},M1:function(){return o},TP:function(){return i},qF:function(){return l},tx:function(){return p}});var a=t(861),n=t(757),s=t.n(n),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7c406e0461b4f259f1eed9475dcfb501",language:"en-US"}}),u=function(){var e=(0,a.Z)(s().mark((function e(r){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,c.get("/trending/movie/week",{params:{page:r}});case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)(s().mark((function e(r){var t,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r),e.prev=1,e.next=4,c.get(t);case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,a.Z)(s().mark((function e(r){var t,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r,"/credits"),e.prev=1,e.next=4,c.get(t);case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(s().mark((function e(r){var t,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/movie/".concat(r,"/reviews"),e.prev=1,e.next=4,c.get(t);case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(r,t){var a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.prev=1,e.next=4,c.get("/search/movie",{params:{query:r,page:t}});case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=765.b96128b7.chunk.js.map