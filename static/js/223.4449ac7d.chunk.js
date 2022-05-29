"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[223],{2862:function(n,r,t){t.d(r,{r:function(){return f}});var e,a=t(501),u=t(6871),i=t(4237),c=t(168),s=t(1242).ZP.ul(e||(e=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n"]))),o=t(184),f=function(n){var r=n.movies,t=(0,u.TH)();return(0,o.jsx)(s,{children:r.map((function(n){var e=n.original_title,u=n.id,c=n.poster_path;return(0,o.jsx)("li",{children:(0,o.jsxs)(a.rU,{to:"/movies"===t.pathname?"".concat(u):"/movies/".concat(u),state:{from:t},children:[(0,o.jsx)("img",{src:(0,i.X)(c),alt:r.title}),e]})},u)}))})}},1904:function(n,r,t){t.d(r,{Ty:function(){return e},a0:function(){return u},k1:function(){return a}});var e="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",a="https://image.tmdb.org/t/p/w500",u="https://image.tmdb.org/t/p/w185"},3936:function(n,r,t){t.d(r,{i:function(){return s}});var e=t(5861),a=t(885),u=t(7757),i=t.n(u),c=t(2791),s=function(n,r){var t=(0,c.useState)(),u=(0,a.Z)(t,2),s=u[0],o=u[1],f=(0,c.useState)(!1),p=(0,a.Z)(f,2),v=p[0],d=p[1],m=(0,c.useState)(null),l=(0,a.Z)(m,2),h=l[0],g=l[1];return(0,c.useEffect)((function(){var r=function(){var r=(0,e.Z)(i().mark((function r(){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d(!0),r.prev=1,r.next=4,n();case 4:t=r.sent,o(t),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),g(r.t0.message);case 11:return r.prev=11,d(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),r),[s,v,h]};t(3243)},9223:function(n,r,t){t.r(r),t.d(r,{HomePage:function(){return m}});var e,a,u=t(885),i=t(3936),c=t(3243),s=t(2862),o=t(3632),f=t(168),p=t(1242),v=p.ZP.h1(e||(e=(0,f.Z)(["\n  font-size: 30px;\n  margin-bottom: 10px;\n"]))),d=(p.ZP.ul(a||(a=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n"]))),t(184)),m=function(){var n=(0,i.i)((function(){return(0,c.wr)()}),[]),r=(0,u.Z)(n,3),t=r[0],e=r[1],a=r[2];return a?(0,d.jsx)("h1",{children:a}):e?(0,d.jsx)(o.a,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v,{children:"Trending Movie"}),t&&(0,d.jsx)(s.r,{movies:t.results})]})}},3243:function(n,r,t){t.d(r,{Ai:function(){return v},Hx:function(){return p},Mc:function(){return o},wr:function(){return s},y:function(){return f}});var e=t(5861),a=t(7757),u=t.n(a),i=t(4569),c=t.n(i);c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"5e25dc89cc9570e2f881766abec20685"};var s=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day");case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(r));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(r,"/credits"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(r,"/reviews"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),v=function(){var n=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie",{params:{query:r}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},4237:function(n,r,t){t.d(r,{X:function(){return a}});var e=t(1904),a=function(n){return n=n?e.k1+n:e.Ty}}}]);
//# sourceMappingURL=223.4449ac7d.chunk.js.map