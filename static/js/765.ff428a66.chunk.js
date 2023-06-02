"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{765:function(e,t,r){r.r(t);var n=r(861),a=r(433),s=r(439),c=r(757),i=r.n(c),u=r(791),o=r(87),p=r(689),l=r(402),f=r(329),v=r(31),m=r(184);t.default=function(){var e=(0,u.useState)(!0),t=(0,s.Z)(e,2),r=t[0],c=t[1],g=(0,u.useState)([]),h=(0,s.Z)(g,2),d=h[0],x=h[1],b=(0,o.lr)({page:1}),w=(0,s.Z)(b,2),k=w[0],j=w[1],N=(0,p.TH)(),Z=(0,u.useMemo)((function(){return Object.fromEntries((0,a.Z)(k))}),[k]),_=Number(Z.page||1),P=(0,u.useState)(0),y=(0,s.Z)(P,2),C=y[0],M=y[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,f.Df)(_);case 4:t=e.sent,x(t.results),M(t.total_pages),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.message);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{className:"mainTitle",children:"Trending movies:"}),(0,m.jsx)("ul",{className:"listMovies",children:r?(0,m.jsx)("div",{className:"loading",children:(0,m.jsx)(l.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",style:{margin:"0 auto"},className:"MagnifyingGlass-wrapper",glassColor:"#c0efff",color:"#e15b64"})}):d.map((function(e){var t=e.title,r=e.id,n=e.poster_path;return(0,m.jsx)("li",{className:"movieItem",children:(0,m.jsxs)(o.rU,{to:"/movies/".concat(r),state:{from:N},children:[(0,m.jsx)("img",{className:"poster",src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"/src/img/noMovieImg.jpg",alt:t}),(0,m.jsx)("p",{className:"title",children:t})]})},r)}))}),(0,m.jsx)(v.Z,{totalPages:C,setSearchParams:j,params:Z,currentPage:Number((null===Z||void 0===Z?void 0:Z.page)-1)||0})]})}},31:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(683),a=r(48),s=r.n(a),c={container:"Paginator_container__F4trY",selected:"Paginator_selected__vwJOK","pagination-button":"Paginator_pagination-button__6KJNt"},i=r(61),u=r(184);var o=function(e){var t=e.totalPages,r=e.setSearchParams,a=e.params,o=e.currentPage;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)(s(),{breakLabel:"...",previousLabel:(0,u.jsx)(i.u1R,{}),nextLabel:(0,u.jsx)(i.hjJ,{}),onPageChange:function(e){r((0,n.Z)((0,n.Z)({},a),{},{page:e.selected+1}))},pageRangeDisplayed:4,marginPagesDisplayed:2,pageCount:t-1,renderOnZeroPageCount:null,forcePage:o,containerClassName:c.container,activeClassName:c.selected,pageClassName:c["pagination-button"],breakClassName:c.break,previousClassName:c.previous,nextClassName:c.next,disabledClassName:c.disabled})})})}},329:function(e,t,r){r.d(t,{Df:function(){return i},M1:function(){return o},TP:function(){return u},qF:function(){return l},tx:function(){return p}});var n=r(861),a=r(757),s=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7c406e0461b4f259f1eed9475dcfb501",language:"en-US"}}),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,c.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.prev=1,e.next=4,c.get("/search/movie",{params:{query:t,page:r}});case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=765.ff428a66.chunk.js.map