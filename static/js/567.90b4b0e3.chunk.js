"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[567],{567:function(e,t,r){r.r(t);var n=r(861),a=r(439),s=r(757),c=r.n(s),u=r(791),i=r(689),o=r(87),p=r(402),l=r(329),h=r(31),v=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],f=(0,u.useState)(!0),g=(0,a.Z)(f,2),d=g[0],m=g[1],x=(0,u.useState)(null),w=(0,a.Z)(x,2),b=w[0],j=w[1],k=(0,u.useState)(0),y=(0,a.Z)(k,2),P=y[0],S=y[1],Z=(0,u.useState)(0),_=(0,a.Z)(Z,2),C=_[0],N=_[1],q=(0,i.TH)(),L=new URLSearchParams(q.search),R=Number(L.get("page"))||1,U=L.get("query")||"",F=(0,u.useState)(U),D=(0,a.Z)(F,2),T=D[0],J=D[1];(0,u.useEffect)((function(){if(U){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,l.qF)(U,R);case 4:t=e.sent,r=t.results,n=t.total_pages,s(r),j(null),S(n||0),N(R-1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),j("An error occurred. Please try again later.");case 16:return e.prev=16,m(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();e()}}),[U,R]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:"Search movies:"}),(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value.trim();if(""!==t){var r=new URLSearchParams;r.set("query",t),r.set("page",1),window.location.search=r.toString(),e.target.reset()}else e.target.reset()},children:[(0,v.jsx)("input",{value:T,onChange:function(e){J(e.target.value)},name:"search",type:"text",placeholder:"Type here"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]})]}),(0,v.jsx)("ul",{children:d?(0,v.jsx)("div",{children:(0,v.jsx)(p.Yt,{visible:!0,height:80,width:80})}):r.length>0?r.map((function(e){var t=e.title,r=e.id,n=e.poster_path;return(0,v.jsx)("li",{children:(0,v.jsxs)(o.rU,{to:"/movies/".concat(r),children:[t,n&&(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n),alt:t})]})},r)})):(0,v.jsx)("p",{children:b||"No movies with this title were found. Try entering another title."})}),(0,v.jsx)(h.Z,{totalPages:P,setSearchParams:function(e){var t=new URLSearchParams;t.set("query",U),t.set("page",String(e+1)),window.location.search=t.toString()},params:{query:U,page:R},currentPage:C})]})}},31:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(683),a=r(48),s=r.n(a),c={container:"Paginator_container__F4trY",selected:"Paginator_selected__vwJOK","pagination-button":"Paginator_pagination-button__6KJNt"},u=r(61),i=r(184);var o=function(e){var t=e.totalPages,r=e.setSearchParams,a=e.params,o=e.currentPage;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(s(),{breakLabel:"...",previousLabel:(0,i.jsx)(u.u1R,{}),nextLabel:(0,i.jsx)(u.hjJ,{}),onPageChange:function(e){r((0,n.Z)((0,n.Z)({},a),{},{page:e.selected+1}))},pageRangeDisplayed:4,marginPagesDisplayed:2,pageCount:t-1,renderOnZeroPageCount:null,forcePage:o,containerClassName:c.container,activeClassName:c.selected,pageClassName:c["pagination-button"],breakClassName:c.break,previousClassName:c.previous,nextClassName:c.next,disabledClassName:c.disabled})})})}},329:function(e,t,r){r.d(t,{Df:function(){return u},M1:function(){return o},TP:function(){return i},qF:function(){return l},tx:function(){return p}});var n=r(861),a=r(757),s=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"7c406e0461b4f259f1eed9475dcfb501",language:"en-US"}}),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,c.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,c.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/search/movie",e.prev=1,e.next=4,c.get("/search/movie",{params:{query:t,page:r}});case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=567.90b4b0e3.chunk.js.map