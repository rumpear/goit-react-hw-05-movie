"use strict";(self.webpackChunkgoit_react_hw_05_movie=self.webpackChunkgoit_react_hw_05_movie||[]).push([[278],{1904:function(n,t,r){r.d(t,{Ty:function(){return e},a0:function(){return i},k1:function(){return a}});var e="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",a="https://image.tmdb.org/t/p/w500",i="https://image.tmdb.org/t/p/w185"},3936:function(n,t,r){r.d(t,{i:function(){return s}});var e=r(5861),a=r(885),i=r(7757),u=r.n(i),c=r(2791),s=function(n,t){var r=(0,c.useState)(),i=(0,a.Z)(r,2),s=i[0],o=i[1],p=(0,c.useState)(!1),f=(0,a.Z)(p,2),d=f[0],v=f[1],l=(0,c.useState)(null),h=(0,a.Z)(l,2),m=h[0],x=h[1];return(0,c.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,n();case 4:r=t.sent,o(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),x(t.t0.message);case 11:return t.prev=11,v(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),t),[s,d,m]};r(3243)},5278:function(n,t,r){r.r(t),r.d(t,{Reviews:function(){return Z}});var e,a,i,u,c=r(885),s=r(6871),o=r(3936),p=r(3243),f=r(1904),d=r(168),v=r(1242),l=v.ZP.ul(e||(e=(0,d.Z)(["\n  margin-top: 10px;\n  /* display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: 15px; */\n"]))),h=v.ZP.li(a||(a=(0,d.Z)(["\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n  display: grid;\n  margin-bottom: 10px;\n  :last-child {\n    margin-bottom: 0;\n  }\n"]))),m=v.ZP.img(i||(i=(0,d.Z)(["\n  width: 80px;\n  margin-right: 10px;\n"]))),x=v.ZP.div(u||(u=(0,d.Z)(["\n  display: flex;\n  margin-top: 10px;\n  justify-content: flex-end;\n  /* justify-content: center;\n  align-items: center; */\n"]))),g=r(184),w=function(n){var t=n.reviews;return(0,g.jsx)(g.Fragment,{children:t.length?(0,g.jsx)(l,{children:t.map((function(n){var t,r=n.author,e=n.author_details,a=n.content,i=n.id;return(0,g.jsxs)(h,{children:[(0,g.jsx)("p",{children:a}),(0,g.jsxs)(x,{children:[(0,g.jsx)(m,{src:(t=e.avatar_path,t?t.includes("https")?t.slice(1):f.a0+t:f.Ty),alt:e.username}),(0,g.jsx)("p",{children:r})]})]},i)}))}):(0,g.jsx)("p",{children:"Nothing to show"})})},y=r(3632),Z=function(){var n=(0,s.UO)().movieId,t=(0,o.i)((function(){return(0,p.Hx)(n)}),[n]),r=(0,c.Z)(t,3),e=r[0],a=r[1],i=r[2];return a?(0,g.jsx)(y.a,{}):i?(0,g.jsx)("h1",{children:i}):(0,g.jsx)(g.Fragment,{children:e&&(0,g.jsx)(w,{reviews:e.results})})}},3243:function(n,t,r){r.d(t,{Ai:function(){return d},Hx:function(){return f},Mc:function(){return o},wr:function(){return s},y:function(){return p}});var e=r(5861),a=r(7757),i=r.n(a),u=r(4569),c=r.n(u);c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"5e25dc89cc9570e2f881766abec20685"};var s=function(){var n=(0,e.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(i().mark((function n(t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie",{params:{query:t}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=278.6087c41a.chunk.js.map