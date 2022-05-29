"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[773],{2862:function(t,n,r){r.d(n,{r:function(){return f}});var e,a=r(501),u=r(6871),c=r(4237),i=r(168),s=r(1242).ZP.ul(e||(e=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n"]))),o=r(184),f=function(t){var n=t.movies,r=(0,u.TH)();return(0,o.jsx)(s,{children:n.map((function(t){var e=t.original_title,u=t.id,i=t.poster_path;return(0,o.jsx)("li",{children:(0,o.jsxs)(a.rU,{to:"/movies"===r.pathname?"".concat(u):"/movies/".concat(u),state:{from:r},children:[(0,o.jsx)("img",{src:(0,c.X)(i),alt:n.title}),e]})},u)}))})}},1904:function(t,n,r){r.d(n,{Ty:function(){return e},a0:function(){return u},k1:function(){return a}});var e="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",a="https://image.tmdb.org/t/p/w500",u="https://image.tmdb.org/t/p/w185"},773:function(t,n,r){r.r(n),r.d(n,{MoviesPage:function(){return m}});var e=r(5861),a=r(885),u=r(7757),c=r.n(u),i=r(2791),s=r(501),o=r(3243),f=r(3632),p=r(184),v=function(t){var n=t.onSearch,r=t.query,e=(0,i.useState)(""),u=(0,a.Z)(e,2),c=u[0],s=u[1];return(0,i.useEffect)((function(){r&&s(r)}),[r]),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{action:"",children:[(0,p.jsx)("input",{name:"search",type:"text",value:c,onChange:function(t){return s(t.target.value.trim())}}),(0,p.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),n({query:c})},children:"Search"})]})})},h=r(2862),m=function(){var t=(0,s.lr)(),n=(0,a.Z)(t,2),r=n[0],u=n[1],m=(0,i.useState)([]),d=(0,a.Z)(m,2),l=d[0],x=d[1],g=(0,i.useState)(!1),w=(0,a.Z)(g,2),y=w[0],k=w[1],b=(0,i.useState)(null),j=(0,a.Z)(b,2),Z=j[0],_=j[1],S=r.get("query");return(0,i.useEffect)((function(){if(S){var t=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.prev=1,t.next=4,(0,o.Ai)(S);case 4:n=t.sent,r=n.results,x(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),_(t.t0.message);case 12:return t.prev=12,k(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[S,r]),Z?(0,p.jsx)("h2",{children:Z}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{onSearch:u,query:S}),y?(0,p.jsx)(f.a,{}):l&&(0,p.jsx)(h.r,{movies:l})]})}},3243:function(t,n,r){r.d(n,{Ai:function(){return v},Hx:function(){return p},Mc:function(){return o},wr:function(){return s},y:function(){return f}});var e=r(5861),a=r(7757),u=r.n(a),c=r(4569),i=r.n(c);i().defaults.baseURL="https://api.themoviedb.org/3",i().defaults.params={api_key:"5e25dc89cc9570e2f881766abec20685"};var s=function(){var t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/search/movie",{params:{query:n}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},4237:function(t,n,r){r.d(n,{X:function(){return a}});var e=r(1904),a=function(t){return t=t?e.k1+t:e.Ty}}}]);
//# sourceMappingURL=773.89bb0613.chunk.js.map