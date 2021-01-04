import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/web.url.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.for-each.js";import"core-js/modules/es.array.reduce.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.array.some.js";import"core-js/modules/es.function.name.js";import"core-js/modules/es.object.assign.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.string.match.js";import"core-js/modules/es.string.replace.js";import"core-js/modules/es.string.search.js";import"core-js/modules/es.string.split.js";import"core-js/modules/es.string.starts-with.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.symbol.async-iterator.js";import"core-js/modules/es.symbol.iterator.js";import"core-js/modules/es.symbol.to-string-tag.js";import"core-js/modules/es.json.to-string-tag.js";import"core-js/modules/es.math.to-string-tag.js";import"core-js/modules/es.object.get-prototype-of.js";import{_ as n,a as t,b as s,d as r,e as o,f as e,S as c,g as a,h as i,s as l,j as u,k as f,l as m,m as d,n as p,o as h,p as v,t as g,q as j,r as y,u as k,v as b,i as w,w as $,x as E,y as x,z as I,A as D,B as V,C as P,D as A,E as R,F as z,G as N,H as T,I as C,J as G,K as _,L as M,M as S,N as U,O as B,P as F,Q as q,R as H,T as O,U as J,V as K,W as L,X as Q,Y as W,Z as X,$ as Y,a0 as Z,a1 as nn,a2 as tn,a3 as sn,a4 as rn,a5 as on,a6 as en,a7 as cn,a8 as an,a9 as ln,aa as un,ab as fn,ac as mn,ad as dn,ae as pn,af as hn}from"./client.bbca0214.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.fill.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.join.js";import"core-js/modules/es.array.splice.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.set.js";import"core-js/modules/es.string.anchor.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.values.js";import"core-js/modules/es.string.pad-start.js";import"core-js/modules/es.reflect.own-keys.js";import{f as vn}from"./index.19581df7.js";import{c as gn}from"./clickOutside.eb6c57be.js";function jn(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var o,e=t(n);if(r){var c=t(this).constructor;o=Reflect.construct(e,arguments,c)}else o=e.apply(this,arguments);return s(this,o)}}function yn(n,t,s){var r=n.slice();return r[21]=t[s],r[23]=s,r}function kn(n){var t,s;function r(n,t){return n[7]?wn:bn}var o=r(n),e=o(n),c=n[9].track&&$n(n);return{c:function(){t=a("div"),e.c(),s=u(),c&&c.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var r=m(t);e.l(r),s=d(r),c&&c.l(r),r.forEach(p),this.h()},h:function(){h(t,"class","card")},m:function(n,r){v(n,t,r),e.m(t,null),i(t,s),c&&c.m(t,null)},p:function(n,a){o===(o=r(n))&&e?e.p(n,a):(e.d(1),(e=o(n))&&(e.c(),e.m(t,s))),n[9].track?c?c.p(n,a):((c=$n(n)).c(),c.m(t,null)):c&&(c.d(1),c=null)},d:function(n){n&&p(t),e.d(),c&&c.d()}}}function bn(n){var t,s,r;return{c:function(){t=a("div"),s=a("figure"),r=a("img"),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var o=m(t);s=f(o,"FIGURE",{class:!0});var e=m(s);r=f(e,"IMG",{src:!0,alt:!0,width:!0,height:!0}),e.forEach(p),o.forEach(p),this.h()},h:function(){r.src!=="/muse/icon.svg"&&h(r,"src","/muse/icon.svg"),h(r,"alt","Placeholder"),h(r,"width","240"),h(r,"height","240"),h(s,"class","image is-1by1"),h(t,"class","card-image has-text-centered")},m:function(n,o){v(n,t,o),i(t,s),i(s,r)},p:J,d:function(n){n&&p(t)}}}function wn(n){var t,s,r,o;return{c:function(){t=a("div"),s=a("figure"),r=a("img"),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var o=m(t);s=f(o,"FIGURE",{class:!0});var e=m(s);r=f(e,"IMG",{src:!0,width:!0,height:!0,alt:!0}),e.forEach(p),o.forEach(p),this.h()},h:function(){r.src!==(o=n[7])&&h(r,"src",o),h(r,"width","240"),h(r,"height","240"),h(r,"alt","Album"),h(s,"class","image"),h(t,"class","card-image has-text-centered")},m:function(n,o){v(n,t,o),i(t,s),i(s,r)},p:function(n,t){128&t&&r.src!==(o=n[7])&&h(r,"src",o)},d:function(n){n&&p(t)}}}function $n(n){var t,s,r,o,e,c,l,k=n[9].track.name+"",b=n[9].track.artists&&En(n),w=n[0]&&n[1]&&xn(n);return{c:function(){t=a("div"),s=a("div"),r=a("div"),o=a("p"),e=g(k),c=u(),b&&b.c(),l=u(),w&&w.c(),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var a=m(t);s=f(a,"DIV",{class:!0});var i=m(s);r=f(i,"DIV",{class:!0});var u=m(r);o=f(u,"P",{class:!0});var h=m(o);e=j(h,k),h.forEach(p),c=d(u),b&&b.l(u),u.forEach(p),i.forEach(p),l=d(a),w&&w.l(a),a.forEach(p),this.h()},h:function(){h(o,"class","title is-4"),h(r,"class","media-content"),h(s,"class","media"),h(t,"class","card-content")},m:function(n,a){v(n,t,a),i(t,s),i(s,r),i(r,o),i(o,e),i(r,c),b&&b.m(r,null),i(t,l),w&&w.m(t,null)},p:function(n,s){512&s&&k!==(k=n[9].track.name+"")&&y(e,k),n[9].track.artists?b?b.p(n,s):((b=En(n)).c(),b.m(r,null)):b&&(b.d(1),b=null),n[0]&&n[1]?w?w.p(n,s):((w=xn(n)).c(),w.m(t,null)):w&&(w.d(1),w=null)},d:function(n){n&&p(t),b&&b.d(),w&&w.d()}}}function En(n){var t,s,r=n[9].track.artists[0].name+"";return{c:function(){t=a("p"),s=g(r),this.h()},l:function(n){t=f(n,"P",{class:!0});var o=m(t);s=j(o,r),o.forEach(p),this.h()},h:function(){h(t,"class","subtitle is-6")},m:function(n,r){v(n,t,r),i(t,s)},p:function(n,t){512&t&&r!==(r=n[9].track.artists[0].name+"")&&y(s,r)},d:function(n){n&&p(t)}}}function xn(n){var t,s,r,o,e,c,l,I,D,V,P,A,R,z,N=E(n[0])+"",T=E(n[1])+"";return{c:function(){t=a("div"),s=a("div"),r=a("div"),o=g(N),e=g(" "),c=u(),l=a("div"),I=a("input"),D=u(),V=a("div"),P=g(" "),A=g(T),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var a=m(t);s=f(a,"DIV",{class:!0});var i=m(s);r=f(i,"DIV",{class:!0});var u=m(r);o=j(u,N),e=j(u," "),u.forEach(p),c=d(i),l=f(i,"DIV",{class:!0});var h=m(l);I=f(h,"INPUT",{type:!0,min:!0,max:!0,class:!0}),h.forEach(p),D=d(i),V=f(i,"DIV",{class:!0});var v=m(V);P=j(v," "),A=j(v,T),v.forEach(p),i.forEach(p),a.forEach(p),this.h()},h:function(){h(r,"class","column is-narrow"),h(I,"type","range"),h(I,"min","0"),h(I,"max","100"),h(I,"class","slider svelte-1iz48mk"),h(l,"class","column"),h(V,"class","column is-narrow"),h(s,"class","columns is-mobile is-gapless"),h(t,"class","content")},m:function(a,u){v(a,t,u),i(t,s),i(s,r),i(r,o),i(r,e),i(s,c),i(s,l),i(l,I),k(I,n[6]),i(s,D),i(s,V),i(V,P),i(V,A),R||(z=[b(I,"change",n[15]),b(I,"input",n[15]),b(I,"change",function(){w($(n[6]))&&$(n[6]).apply(this,arguments)})],R=!0)},p:function(t,s){n=t,1&s&&N!==(N=E(n[0])+"")&&y(o,N),64&s&&k(I,n[6]),2&s&&T!==(T=E(n[1])+"")&&y(A,T)},d:function(n){n&&p(t),R=!1,x(z)}}}function In(n){var t;function s(n,t){return n[5]?Pn:n[8]&&1==n[8]._webSocket.readyState?Vn:Dn}var r=s(n),o=r(n);return{c:function(){o.c(),t=_()},l:function(n){o.l(n),t=_()},m:function(n,s){o.m(n,s),v(n,t,s)},p:function(n,e){r===(r=s(n))&&o?o.p(n,e):(o.d(1),(o=r(n))&&(o.c(),o.m(t.parentNode,t)))},d:function(n){o.d(n),n&&p(t)}}}function Dn(n){var t,s;return{c:function(){t=a("p"),s=g("not connected to mopidy"),this.h()},l:function(n){t=f(n,"P",{class:!0});var r=m(t);s=j(r,"not connected to mopidy"),r.forEach(p),this.h()},h:function(){h(t,"class","list-item")},m:function(n,r){v(n,t,r),i(t,s)},p:J,d:function(n){n&&p(t)}}}function Vn(n){var t,s;return{c:function(){t=a("p"),s=g("loading songs..."),this.h()},l:function(n){t=f(n,"P",{class:!0});var r=m(t);s=j(r,"loading songs..."),r.forEach(p),this.h()},h:function(){h(t,"class","list-item")},m:function(n,r){v(n,t,r),i(t,s)},p:J,d:function(n){n&&p(t)}}}function Pn(n){var t,s,r={ctx:n,current:null,token:null,hasCatch:!0,pending:zn,then:Rn,catch:An,error:24};return K(s=n[5],r),{c:function(){t=_(),r.block.c()},l:function(n){t=_(),r.block.l(n)},m:function(n,s){v(n,t,s),r.block.m(n,r.anchor=s),r.mount=function(){return t.parentNode},r.anchor=t},p:function(t,o){if(n=t,r.ctx=n,32&o&&s!==(s=n[5])&&K(s,r));else{var e=n.slice();e[24]=r.resolved,r.block.p(e,o)}},d:function(n){n&&p(t),r.block.d(n),r.token=null,r=null}}}function An(n){var t,s,r,o=n[24].message+"";return{c:function(){t=a("p"),s=g(o),r=u(),this.h()},l:function(n){t=f(n,"P",{class:!0,style:!0});var e=m(t);s=j(e,o),e.forEach(p),r=d(n),this.h()},h:function(){h(t,"class","list-item"),ln(t,"color","red")},m:function(n,o){v(n,t,o),i(t,s),v(n,r,o)},p:function(n,t){32&t&&o!==(o=n[24].message+"")&&y(s,o)},d:function(n){n&&p(t),n&&p(r)}}}function Rn(n){var t,s,r;return{c:function(){t=a("p"),s=g("no tracks playing"),r=u(),this.h()},l:function(n){t=f(n,"P",{class:!0});var o=m(t);s=j(o,"no tracks playing"),o.forEach(p),r=d(n),this.h()},h:function(){h(t,"class","list-item")},m:function(n,o){v(n,t,o),i(t,s),v(n,r,o)},p:J,d:function(n){n&&p(t),n&&p(r)}}}function zn(n){var t,s,r;return{c:function(){t=a("p"),s=g("loading songs..."),r=u(),this.h()},l:function(n){t=f(n,"P",{class:!0});var o=m(t);s=j(o,"loading songs..."),o.forEach(p),r=d(n),this.h()},h:function(){h(t,"class","list-item")},m:function(n,o){v(n,t,o),i(t,s),v(n,r,o)},p:J,d:function(n){n&&p(t),n&&p(r)}}}function Nn(n){var t,s,r;return s=new L({props:{icon:Q,spin:"playing"==n[10],class:"icon is-small"}}),{c:function(){t=g(" "),I(s.$$.fragment)},l:function(n){t=j(n," "),D(s.$$.fragment,n)},m:function(n,o){v(n,t,o),P(s,n,o),r=!0},p:function(n,t){var r={};1024&t&&(r.spin="playing"==n[10]),s.$set(r)},i:function(n){r||(R(s.$$.fragment,n),r=!0)},o:function(n){z(s.$$.fragment,n),r=!1},d:function(n){n&&p(t),N(s,n)}}}function Tn(n){var t,s;return t=new L({props:{icon:un,class:"icon","aria-haspopup":"true","aria-controls":"dropdown-menu"}}),{c:function(){I(t.$$.fragment)},l:function(n){D(t.$$.fragment,n)},m:function(n,r){P(t,n,r),s=!0},p:J,i:function(n){s||(R(t.$$.fragment,n),s=!0)},o:function(n){z(t.$$.fragment,n),s=!1},d:function(n){N(t,n)}}}function Cn(n){var t,s;return t=new L({props:{icon:fn,class:"icon","aria-haspopup":"true","aria-controls":"dropdown-menu"}}),{c:function(){I(t.$$.fragment)},l:function(n){D(t.$$.fragment,n)},m:function(n,r){P(t,n,r),s=!0},p:J,i:function(n){s||(R(t.$$.fragment,n),s=!0)},o:function(n){z(t.$$.fragment,n),s=!1},d:function(n){N(t,n)}}}function Gn(n,t){var s,r,o,e,c,l,k,$,E,_,M,S,U,B,F,q,H,O,K,Q,Z,nn,tn,sn,rn,on,en=t[21].track.name+"",cn=J,an=t[23]===t[9].index&&Nn(t),ln=[Cn,Tn],un=[];function fn(n,t){return n[4]==n[21].tlid?0:1}function mn(){for(var n,s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(n=t)[16].apply(n,[t[23]].concat(r))}function dn(){for(var n,s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(n=t)[17].apply(n,[t[23]].concat(r))}function pn(){return t[18](t[23])}return _=fn(t),M=un[_]=ln[_](t),q=new L({props:{icon:W,class:"icon is-small"}}),Q=new L({props:{icon:X,class:"icon is-small"}}),{key:n,first:null,c:function(){s=a("a"),r=a("div"),o=a("div"),e=g(en),c=u(),an&&an.c(),l=u(),k=a("div"),$=a("div"),E=a("div"),M.c(),S=u(),U=a("div"),B=a("div"),F=a("a"),I(q.$$.fragment),H=g(" \n                  Play"),O=u(),K=a("a"),I(Q.$$.fragment),Z=g(" \n                  Remove track"),nn=u(),this.h()},l:function(n){s=f(n,"A",{class:!0,href:!0,draggable:!0,ondragover:!0});var t=m(s);r=f(t,"DIV",{class:!0});var a=m(r);o=f(a,"DIV",{class:!0});var i=m(o);e=j(i,en),c=d(i),an&&an.l(i),i.forEach(p),l=d(a),k=f(a,"DIV",{class:!0});var u=m(k);$=f(u,"DIV",{class:!0});var h=m($);E=f(h,"DIV",{class:!0});var v=m(E);M.l(v),v.forEach(p),S=d(h),U=f(h,"DIV",{class:!0,id:!0,role:!0});var g=m(U);B=f(g,"DIV",{class:!0});var y=m(B);F=f(y,"A",{href:!0,class:!0});var b=m(F);D(q.$$.fragment,b),H=j(b," \n                  Play"),b.forEach(p),O=d(y),K=f(y,"A",{href:!0,class:!0});var w=m(K);D(Q.$$.fragment,w),Z=j(w," \n                  Remove track"),w.forEach(p),y.forEach(p),g.forEach(p),h.forEach(p),u.forEach(p),a.forEach(p),nn=d(t),t.forEach(p),this.h()},h:function(){h(o,"class","column"),h(E,"class","dropdown-trigger"),h(F,"href",null),h(F,"class","dropdown-item"),h(K,"href",null),h(K,"class","dropdown-item"),h(B,"class","dropdown-content"),h(U,"class","dropdown-menu"),h(U,"id","dropdown-menu"),h(U,"role","menu"),h($,"class","dropdown is-right is-up"),V($,"is-active",t[4]==t[21].tlid),h(k,"class","column is-narrow"),h(r,"class","columns is-mobile"),h(s,"class","list-item"),h(s,"href",null),h(s,"draggable",!0),h(s,"ondragover","return false"),V(s,"is-active",t[3]===t[23]),this.first=s},m:function(n,a){v(n,s,a),i(s,r),i(r,o),i(o,e),i(o,c),an&&an.m(o,null),i(r,l),i(r,k),i(k,$),i($,E),un[_].m(E,null),i($,S),i($,U),i(U,B),i(B,F),P(q,F,null),i(F,H),i(B,O),i(B,K),P(Q,K,null),i(K,Z),i(s,nn),sn=!0,rn||(on=[b(o,"click",function(){w(t[14](t[21].tlid))&&t[14](t[21].tlid).apply(this,arguments)}),b(E,"click",function(){w(t[14](t[21].tlid))&&t[14](t[21].tlid).apply(this,arguments)}),b(F,"click",function(){w(t[11](t[21]))&&t[11](t[21]).apply(this,arguments)}),b(K,"click",function(){w(t[12](t[21]))&&t[12](t[21]).apply(this,arguments)}),b(s,"dragstart",mn),b(s,"drop",A(dn)),b(s,"dragenter",pn)],rn=!0)},p:function(n,r){t=n,(!sn||4&r)&&en!==(en=t[21].track.name+"")&&y(e,en),t[23]===t[9].index?an?(an.p(t,r),516&r&&R(an,1)):((an=Nn(t)).c(),R(an,1),an.m(o,null)):an&&(Y(),z(an,1,1,function(){an=null}),T());var c=_;(_=fn(t))===c?un[_].p(t,r):(Y(),z(un[c],1,1,function(){un[c]=null}),T(),(M=un[_])?M.p(t,r):(M=un[_]=ln[_](t)).c(),R(M,1),M.m(E,null)),20&r&&V($,"is-active",t[4]==t[21].tlid),12&r&&V(s,"is-active",t[3]===t[23])},r:function(){tn=s.getBoundingClientRect()},f:function(){C(s),cn()},a:function(){cn(),cn=G(s,tn,vn,{duration:300})},i:function(n){sn||(R(an),R(M),R(q.$$.fragment,n),R(Q.$$.fragment,n),sn=!0)},o:function(n){z(an),z(M),z(q.$$.fragment,n),z(Q.$$.fragment,n),sn=!1},d:function(n){n&&p(s),an&&an.d(),un[_].d(),N(q),N(Q),rn=!1,x(on)}}}function _n(n){for(var t,s,r,o,e,c,l,y,k,w,$,E,I,D,V=[],P=new Map,A=n[9]&&kn(n),N=n[2],C=function(n){return n[21].tlid},G=0;G<N.length;G+=1){var _=yn(n,N,G),F=C(_);P.set(F,V[G]=Gn(F,_))}var q=null;return N.length||(q=In(n)),{c:function(){t=u(),s=a("h1"),r=g("Now playing"),o=u(),A&&A.c(),e=u(),c=a("div");for(var n=0;n<V.length;n+=1)V[n].c();q&&q.c(),l=u(),y=a("div"),k=a("div"),w=a("a"),$=g("Version - 0.0.24-b709e95"),this.h()},l:function(n){M('[data-svelte="svelte-1546q17"]',document.head).forEach(p),t=d(n),s=f(n,"H1",{class:!0});var a=m(s);r=j(a,"Now playing"),a.forEach(p),o=d(n),A&&A.l(n),e=d(n),c=f(n,"DIV",{class:!0});for(var i=m(c),u=0;u<V.length;u+=1)V[u].l(i);q&&q.l(i),i.forEach(p),l=d(n),y=f(n,"DIV",{class:!0});var h=m(y);k=f(h,"DIV",{class:!0});var v=m(k);w=f(v,"A",{href:!0});var g=m(w);$=j(g,"Version - 0.0.24-b709e95"),g.forEach(p),v.forEach(p),h.forEach(p),this.h()},h:function(){document.title="Now Playing",h(s,"class","title"),h(c,"class","list is-hoverable"),h(w,"href","https://github.com/cristianpb/muse"),h(k,"class","column has-text-centered"),h(y,"class","columns")},m:function(a,u){v(a,t,u),v(a,s,u),i(s,r),v(a,o,u),A&&A.m(a,u),v(a,e,u),v(a,c,u);for(var f=0;f<V.length;f+=1)V[f].m(c,null);q&&q.m(c,null),v(a,l,u),v(a,y,u),i(y,k),i(k,w),i(w,$),E=!0,I||(D=[S(gn.call(null,c)),b(c,"click_outside",n[19])],I=!0)},p:function(n,t){var s=U(t,1)[0];if(n[9]?A?A.p(n,s):((A=kn(n)).c(),A.m(e.parentNode,e)):A&&(A.d(1),A=null),32572&s){N=n[2],Y();for(var r=0;r<V.length;r+=1)V[r].r();V=B(V,s,C,1,n,N,P,c,Z,Gn,null,yn);for(var o=0;o<V.length;o+=1)V[o].a();T(),!N.length&&q?q.p(n,s):N.length?q&&(q.d(1),q=null):((q=In(n)).c(),q.m(c,null))}},i:function(n){if(!E){for(var t=0;t<N.length;t+=1)R(V[t]);E=!0}},o:function(n){for(var t=0;t<V.length;t+=1)z(V[t]);E=!1},d:function(n){n&&p(t),n&&p(s),n&&p(o),A&&A.d(n),n&&p(e),n&&p(c);for(var r=0;r<V.length;r+=1)V[r].d();q&&q.d(),n&&p(l),n&&p(y),I=!1,x(D)}}}function Mn(n,t,s){var r,o,e,c,a,i,l;F(n,mn,function(n){return s(0,o=n)}),F(n,dn,function(n){return s(1,e=n)}),F(n,rn,function(n){return s(7,c=n)}),F(n,pn,function(n){return s(8,a=n)}),F(n,H,function(n){return s(9,i=n)}),F(n,hn,function(n){return s(10,l=n)});var u,f,m=[],d=!1;q(nn(tn.mark(function n(){return tn.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:s(5,f=p());case 1:case"end":return n.stop()}},n)}))),H.subscribe(function(){var n=nn(tn.mark(function n(t){return tn.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||!t.track){n.next=8;break}return n.t0=sn,n.t1=rn,n.next=5,on(t.track);case 5:n.t2=c=n.sent,n.t3=c,(0,n.t0)(n.t1,n.t2,n.t3);case 8:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}());var p=function(){var n=nn(tn.mark(function n(){return tn.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=s,n.next=3,en();case 3:n.t1=m=n.sent,(0,n.t0)(2,n.t1);case 5:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),h=function(){var n=nn(tn.mark(function n(t){var r;return tn.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.tracklist.remove({criteria:{uri:[t.track.uri]}});case 2:r=n.sent,s(4,u=null),r.length>0&&s(2,m=m.filter(function(n){return n.track.uri!=r[0].track.uri}));case 5:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}();function v(n,t){n.dataTransfer.dropEffect="move";var r=parseInt(n.dataTransfer.getData("text/plain")),o=m;r<t?(o.splice(t+1,0,o[r]),o.splice(r,1),a.tracklist.move({start:r,end:r+1,to_position:t})):(o.splice(t,0,o[r]),o.splice(r+1,1),a.tracklist.move({start:t,end:r,to_position:t+1})),s(2,m=o),r===i.index&&sn(H,i.index=t,i),s(3,d=null)}return n.$$.update=function(){3&n.$$.dirty&&s(6,r=O(o,e))},[o,e,m,d,u,f,r,c,a,i,l,function(n){cn(n),s(4,u=null)},h,v,function(n){s(4,u=u===n?null:n)},function(){r=an(this.value),s(6,r),s(0,o),s(1,e)},function(n,t){return function(n,t){n.dataTransfer.effectAllowed="move",n.dataTransfer.dropEffect="move";var s=t;n.dataTransfer.setData("text/plain",s)}(t,n)},function(n,t){return v(t,n)},function(n){return s(3,d=n)},function(){return s(4,u=null)}]}export default(function(t){n(u,c);var s=jn(u);function u(n){var t,c;return r(this,u),t=s.call(this),document.getElementById("svelte-1iz48mk-style")||((c=a("style")).id="svelte-1iz48mk-style",c.textContent=".slider.svelte-1iz48mk{-webkit-appearance:none;width:100%;height:5px;border-radius:5px;background:#d3d3d3;outline:none;opacity:0.7;-webkit-transition:.2s;transition:opacity .2s}.slider.svelte-1iz48mk::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:10%;background:#DA9C20;cursor:pointer}.slider.svelte-1iz48mk::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#DA9C20;cursor:pointer}",i(document.head,c)),o(e(t),n,Mn,_n,l,{}),t}return u}());
