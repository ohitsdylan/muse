import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/web.url.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.for-each.js";import"core-js/modules/es.array.reduce.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.array.some.js";import"core-js/modules/es.function.name.js";import"core-js/modules/es.object.assign.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.string.match.js";import"core-js/modules/es.string.replace.js";import"core-js/modules/es.string.search.js";import"core-js/modules/es.string.split.js";import"core-js/modules/es.string.starts-with.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.symbol.async-iterator.js";import"core-js/modules/es.symbol.iterator.js";import"core-js/modules/es.symbol.to-string-tag.js";import"core-js/modules/es.json.to-string-tag.js";import"core-js/modules/es.math.to-string-tag.js";import"core-js/modules/es.object.get-prototype-of.js";import{_ as n,a as t,b as r,d as s,e,f as o,S as c,g as a,h as i,s as l,t as u,j as f,k as m,l as p,q as h,n as d,m as v,o as g,p as j,v as $,r as b,z as y,A as w,B as x,C as k,F as E,H as A,E as I,G as D,y as P,V,M as O,i as R,az as B,aA as C,aB as L,ar as q,K as N,L as z,N as H,P as Q,Q as S,W as U,Y as _,as as F,ax as G,$ as K,aa as M,U as W,ab as Y,a9 as J,aC as T,a1 as X,a2 as Z,ah as nn,ai as tn,ae as rn,aO as sn,aP as en,aQ as on,aR as cn}from"./client.bbca0214.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.fill.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.array.index-of.js";import"core-js/modules/es.array.join.js";import"core-js/modules/es.array.splice.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.get-own-property-descriptors.js";import"core-js/modules/es.object.keys.js";import"core-js/modules/es.set.js";import"core-js/modules/es.string.anchor.js";import"core-js/modules/es.array.find.js";import"core-js/modules/es.object.values.js";import"core-js/modules/es.string.pad-start.js";import"core-js/modules/es.reflect.own-keys.js";import{c as an}from"./clickOutside.eb6c57be.js";import"core-js/modules/es.array.flat.js";import"core-js/modules/es.array.unscopables.flat.js";function ln(n){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var e,o=t(n);if(s){var c=t(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return r(this,e)}}function un(n,t,r){var s=n.slice();return s[24]=t[r],s[26]=r,s}function fn(n,t,r){var s=n.slice();return s[28]=t[r],s[26]=r,s}function mn(n){var t,r,s,e,o,c,l=n[28].name+"";function y(){return n[13](n[28],n[26])}return{c:function(){t=a("li"),r=a("a"),s=u(l),e=f(),this.h()},l:function(n){t=m(n,"LI",{class:!0});var o=p(t);r=m(o,"A",{href:!0,class:!0});var c=p(r);s=h(c,l),c.forEach(d),e=v(o),o.forEach(d),this.h()},h:function(){g(r,"href",null),g(r,"class","svelte-6ensgs"),g(t,"class","svelte-6ensgs")},m:function(n,a){j(n,t,a),i(t,r),i(r,s),i(t,e),o||(c=$(r,"click",y),o=!0)},p:function(t,r){n=t,1&r&&l!==(l=n[28].name+"")&&b(s,l)},d:function(n){n&&d(t),o=!1,c()}}}function pn(n){var t,r,s,e,o,c,l,b,V,O,R,B,C,L,q,N,z,H,Q,S,M,W,Y=[dn,hn],J=[];function T(n,t){return n[4]?0:1}return e=T(n),o=J[e]=Y[e](n),O=new U({props:{icon:_,class:"icon is-small"}}),L=new U({props:{icon:F,class:"icon is-small"}}),H=new U({props:{icon:G,class:"icon is-small"}}),{c:function(){t=a("div"),r=a("div"),s=a("div"),o.c(),c=f(),l=a("div"),b=a("div"),V=a("a"),y(O.$$.fragment),R=u("  \n            Play now"),B=f(),C=a("a"),y(L.$$.fragment),q=u("  \n            Play shuffle"),N=f(),z=a("a"),y(H.$$.fragment),Q=u("  \n            Add to queue"),this.h()},l:function(n){t=m(n,"DIV",{class:!0});var e=p(t);r=m(e,"DIV",{class:!0});var a=p(r);s=m(a,"DIV",{class:!0});var i=p(s);o.l(i),i.forEach(d),c=v(a),l=m(a,"DIV",{class:!0,id:!0,role:!0});var u=p(l);b=m(u,"DIV",{class:!0});var f=p(b);V=m(f,"A",{href:!0,class:!0});var g=p(V);w(O.$$.fragment,g),R=h(g,"  \n            Play now"),g.forEach(d),B=v(f),C=m(f,"A",{href:!0,class:!0});var j=p(C);w(L.$$.fragment,j),q=h(j,"  \n            Play shuffle"),j.forEach(d),N=v(f),z=m(f,"A",{href:!0,class:!0});var $=p(z);w(H.$$.fragment,$),Q=h($,"  \n            Add to queue"),$.forEach(d),f.forEach(d),u.forEach(d),a.forEach(d),e.forEach(d),this.h()},h:function(){g(s,"class","dropdown-trigger"),g(V,"href",null),g(V,"class","dropdown-item"),g(C,"href",null),g(C,"class","dropdown-item"),g(z,"href",null),g(z,"class","dropdown-item"),g(b,"class","dropdown-content"),g(l,"class","dropdown-menu"),g(l,"id","dropdown-menu"),g(l,"role","menu"),g(r,"class","dropdown is-right"),x(r,"is-active",n[4]),g(t,"class","column is-narrow")},m:function(o,a){j(o,t,a),i(t,r),i(r,s),J[e].m(s,null),i(r,c),i(r,l),i(l,b),i(b,V),k(O,V,null),i(V,R),i(b,B),i(b,C),k(L,C,null),i(C,q),i(b,N),i(b,z),k(H,z,null),i(z,Q),S=!0,M||(W=[$(s,"click",n[14]),$(V,"click",n[15]),$(C,"click",n[16]),$(z,"click",n[17])],M=!0)},p:function(n,t){var c=e;(e=T(n))===c?J[e].p(n,t):(K(),E(J[c],1,1,function(){J[c]=null}),A(),(o=J[e])?o.p(n,t):(o=J[e]=Y[e](n)).c(),I(o,1),o.m(s,null)),16&t&&x(r,"is-active",n[4])},i:function(n){S||(I(o),I(O.$$.fragment,n),I(L.$$.fragment,n),I(H.$$.fragment,n),S=!0)},o:function(n){E(o),E(O.$$.fragment,n),E(L.$$.fragment,n),E(H.$$.fragment,n),S=!1},d:function(n){n&&d(t),J[e].d(),D(O),D(L),D(H),M=!1,P(W)}}}function hn(n){var t,r,s;return r=new U({props:{icon:M,class:"icon","aria-haspopup":"true","aria-controls":"dropdown-menu"}}),{c:function(){t=a("a"),y(r.$$.fragment),this.h()},l:function(n){t=m(n,"A",{href:!0,class:!0});var s=p(t);w(r.$$.fragment,s),s.forEach(d),this.h()},h:function(){g(t,"href",null),g(t,"class","button")},m:function(n,e){j(n,t,e),k(r,t,null),s=!0},p:W,i:function(n){s||(I(r.$$.fragment,n),s=!0)},o:function(n){E(r.$$.fragment,n),s=!1},d:function(n){n&&d(t),D(r)}}}function dn(n){var t,r,s;return r=new U({props:{icon:Y,class:"icon","aria-haspopup":"true","aria-controls":"dropdown-menu"}}),{c:function(){t=a("a"),y(r.$$.fragment),this.h()},l:function(n){t=m(n,"A",{href:!0,class:!0});var s=p(t);w(r.$$.fragment,s),s.forEach(d),this.h()},h:function(){g(t,"href",null),g(t,"class","button")},m:function(n,e){j(n,t,e),k(r,t,null),s=!0},p:W,i:function(n){s||(I(r.$$.fragment,n),s=!0)},o:function(n){E(r.$$.fragment,n),s=!1},d:function(n){n&&d(t),D(r)}}}function vn(n){var t,r,s,e={ctx:n,current:null,token:null,hasCatch:!0,pending:$n,then:jn,catch:gn,error:27,blocks:[,,,]};return V(r=n[2],e),{c:function(){t=a("div"),e.block.c(),this.h()},l:function(n){t=m(n,"DIV",{class:!0});var r=p(t);e.block.l(r),r.forEach(d),this.h()},h:function(){g(t,"class","list is-hoverable")},m:function(n,r){j(n,t,r),e.block.m(t,e.anchor=null),e.mount=function(){return t},e.anchor=null,s=!0},p:function(t,s){if(n=t,e.ctx=n,4&s&&r!==(r=n[2])&&V(r,e));else{var o=n.slice();o[27]=e.resolved,e.block.p(o,s)}},i:function(n){s||(I(e.block),s=!0)},o:function(n){for(var t=0;t<3;t+=1){var r=e.blocks[t];E(r)}s=!1},d:function(n){n&&d(t),e.block.d(),e.token=null,e=null}}}function gn(n){var t,r,s=n[27].message+"";return{c:function(){t=a("p"),r=u(s),this.h()},l:function(n){t=m(n,"P",{class:!0,style:!0});var e=p(t);r=h(e,s),e.forEach(d),this.h()},h:function(){g(t,"class","list-item"),J(t,"color","red")},m:function(n,s){j(n,t,s),i(t,r)},p:function(n,t){4&t&&s!==(s=n[27].message+"")&&b(r,s)},i:W,o:W,d:function(n){n&&d(t)}}}function jn(n){return{c:W,l:W,m:W,p:W,i:W,o:W,d:W}}function $n(n){var t,r,s,e,o=[yn,bn],c=[];function a(n,t){return n[5]?0:1}return t=a(n),r=c[t]=o[t](n),{c:function(){r.c(),s=N()},l:function(n){r.l(n),s=N()},m:function(n,r){c[t].m(n,r),j(n,s,r),e=!0},p:function(n,e){var i=t;(t=a(n))===i?c[t].p(n,e):(K(),E(c[i],1,1,function(){c[i]=null}),A(),(r=c[t])?r.p(n,e):(r=c[t]=o[t](n)).c(),I(r,1),r.m(s.parentNode,s))},i:function(n){e||(I(r),e=!0)},o:function(n){E(r),e=!1},d:function(n){c[t].d(n),n&&d(s)}}}function bn(n){var t,r,s,e;return s=new U({props:{icon:tn,class:"icon is-24",spin:!0}}),{c:function(){t=a("p"),r=u("Connecting to mopidy     \n          "),y(s.$$.fragment),this.h()},l:function(n){t=m(n,"P",{class:!0});var e=p(t);r=h(e,"Connecting to mopidy     \n          "),w(s.$$.fragment,e),e.forEach(d),this.h()},h:function(){g(t,"class","list-item")},m:function(n,o){j(n,t,o),i(t,r),k(s,t,null),e=!0},p:W,i:function(n){e||(I(s.$$.fragment,n),e=!0)},o:function(n){E(s.$$.fragment,n),e=!1},d:function(n){n&&d(t),D(s)}}}function yn(n){var t,r,s,e;return s=new U({props:{icon:tn,spin:!0,class:"icon"}}),{c:function(){t=a("p"),r=u("Loading sources    \n          "),y(s.$$.fragment),this.h()},l:function(n){t=m(n,"P",{class:!0});var e=p(t);r=h(e,"Loading sources    \n          "),w(s.$$.fragment,e),e.forEach(d),this.h()},h:function(){g(t,"class","list-item")},m:function(n,o){j(n,t,o),i(t,r),k(s,t,null),e=!0},p:W,i:function(n){e||(I(s.$$.fragment,n),e=!0)},o:function(n){E(s.$$.fragment,n),e=!1},d:function(n){n&&d(t),D(s)}}}function wn(n){for(var t,r,s,e,o=n[1],c=[],i=0;i<o.length;i+=1)c[i]=Dn(un(n,o,i));var l=function(n){return E(c[n],1,1,function(){c[n]=null})},u=null;return o.length||(u=xn()),{c:function(){t=a("div");for(var n=0;n<c.length;n+=1)c[n].c();u&&u.c(),this.h()},l:function(n){t=m(n,"DIV",{class:!0});for(var r=p(t),s=0;s<c.length;s+=1)c[s].l(r);u&&u.l(r),r.forEach(d),this.h()},h:function(){g(t,"class","list is-hoverable")},m:function(o,a){j(o,t,a);for(var i=0;i<c.length;i+=1)c[i].m(t,null);u&&u.m(t,null),r=!0,s||(e=[O(an.call(null,t)),$(t,"click_outside",n[20])],s=!0)},p:function(n,r){if(206&r){var s;for(o=n[1],s=0;s<o.length;s+=1){var e=un(n,o,s);c[s]?(c[s].p(e,r),I(c[s],1)):(c[s]=Dn(e),c[s].c(),I(c[s],1),c[s].m(t,null))}for(K(),s=o.length;s<c.length;s+=1)l(s);A(),o.length?u&&(u.d(1),u=null):u||((u=xn()).c(),u.m(t,null))}},i:function(n){if(!r){for(var t=0;t<o.length;t+=1)I(c[t]);r=!0}},o:function(n){c=c.filter(Boolean);for(var t=0;t<c.length;t+=1)E(c[t]);r=!1},d:function(n){n&&d(t),q(c,n),u&&u.d(),s=!1,P(e)}}}function xn(n){var t,r;return{c:function(){t=a("a"),r=u("no results\n      "),this.h()},l:function(n){t=m(n,"A",{href:!0,class:!0});var s=p(t);r=h(s,"no results\n      "),s.forEach(d),this.h()},h:function(){g(t,"href",null),g(t,"class","list-item")},m:function(n,s){j(n,t,s),i(t,r)},d:function(n){n&&d(t)}}}function kn(n){var t,r,s,e,o,c,i=[An,En],l=[];function u(n,t){return n[3]==n[26]?0:1}function f(){return n[19](n[26])}return r=u(n),s=l[r]=i[r](n),{c:function(){t=a("div"),s.c(),this.h()},l:function(n){t=m(n,"DIV",{class:!0});var r=p(t);s.l(r),r.forEach(d),this.h()},h:function(){g(t,"class","column is-narrow")},m:function(n,s){j(n,t,s),l[r].m(t,null),e=!0,o||(c=$(t,"click",f),o=!0)},p:function(e,o){var c=r;(r=u(n=e))===c?l[r].p(n,o):(K(),E(l[c],1,1,function(){l[c]=null}),A(),(s=l[r])?s.p(n,o):(s=l[r]=i[r](n)).c(),I(s,1),s.m(t,null))},i:function(n){e||(I(s),e=!0)},o:function(n){E(s),e=!1},d:function(n){n&&d(t),l[r].d(),o=!1,c()}}}function En(n){var t,r;return t=new U({props:{icon:M,class:"icon","aria-haspopup":"true","aria-controls":"dropdown-menu"}}),{c:function(){y(t.$$.fragment)},l:function(n){w(t.$$.fragment,n)},m:function(n,s){k(t,n,s),r=!0},p:W,i:function(n){r||(I(t.$$.fragment,n),r=!0)},o:function(n){E(t.$$.fragment,n),r=!1},d:function(n){D(t,n)}}}function An(n){var t,r;return t=new U({props:{icon:Y,class:"icon","aria-haspopup":"true","aria-controls":"dropdown-menu"}}),{c:function(){y(t.$$.fragment)},l:function(n){w(t.$$.fragment,n)},m:function(n,s){k(t,n,s),r=!0},p:W,i:function(n){r||(I(t.$$.fragment,n),r=!0)},o:function(n){E(t.$$.fragment,n),r=!1},d:function(n){D(t,n)}}}function In(n){var t,r,s,e,o,c,l,b,x,A,V,O,q,N,z,H,Q,S;return e=new U({props:{icon:_,class:"icon is-small"}}),x=new U({props:{icon:T,class:"icon is-small"}}),N=new U({props:{icon:G,class:"icon is-small"}}),{c:function(){t=a("div"),r=a("div"),s=a("a"),y(e.$$.fragment),o=u(" \n                    Play now"),c=f(),l=a("div"),b=a("a"),y(x.$$.fragment),A=u(" \n                    Play next"),V=f(),O=a("div"),q=a("a"),y(N.$$.fragment),z=u(" \n                    Add to queue"),this.h()},l:function(n){t=m(n,"DIV",{class:!0});var a=p(t);r=m(a,"DIV",{class:!0});var i=p(r);s=m(i,"A",{href:!0,class:!0});var u=p(s);w(e.$$.fragment,u),o=h(u," \n                    Play now"),u.forEach(d),i.forEach(d),c=v(a),l=m(a,"DIV",{class:!0});var f=p(l);b=m(f,"A",{href:!0,class:!0});var g=p(b);w(x.$$.fragment,g),A=h(g," \n                    Play next"),g.forEach(d),f.forEach(d),V=v(a),O=m(a,"DIV",{class:!0});var j=p(O);q=m(j,"A",{href:!0,class:!0});var $=p(q);w(N.$$.fragment,$),z=h($," \n                    Add to queue"),$.forEach(d),j.forEach(d),a.forEach(d),this.h()},h:function(){g(s,"href",null),g(s,"class","dropdown-item"),g(r,"class","list-item"),g(b,"href",null),g(b,"class","dropdown-item"),g(l,"class","list-item"),g(q,"href",null),g(q,"class","dropdown-item"),g(O,"class","list-item"),g(t,"class","list is-hoverable")},m:function(a,u){j(a,t,u),i(t,r),i(r,s),k(e,s,null),i(s,o),i(t,c),i(t,l),i(l,b),k(x,b,null),i(b,A),i(t,V),i(t,O),i(O,q),k(N,q,null),i(q,z),H=!0,Q||(S=[$(s,"click",function(){R(B(n[24].uri))&&B(n[24].uri).apply(this,arguments)}),$(b,"click",function(){R(C(n[24].uri))&&C(n[24].uri).apply(this,arguments)}),$(q,"click",function(){R(L(n[24].uri))&&L(n[24].uri).apply(this,arguments)})],Q=!0)},p:function(t,r){n=t},i:function(n){H||(I(e.$$.fragment,n),I(x.$$.fragment,n),I(N.$$.fragment,n),H=!0)},o:function(n){E(e.$$.fragment,n),E(x.$$.fragment,n),E(N.$$.fragment,n),H=!1},d:function(n){n&&d(t),D(e),D(x),D(N),Q=!1,P(S)}}}function Dn(n){var t,r,s,e,o,c,l,y,w,x,k=n[24].name+"",D=["album","track","artist"].indexOf(n[24].type)>-1;function P(){return n[18](n[24],n[26])}var V=D&&kn(n),O=n[3]==n[26]&&In(n);return{c:function(){t=a("a"),r=a("div"),s=a("div"),e=u(k),o=f(),V&&V.c(),c=f(),O&&O.c(),l=f(),this.h()},l:function(n){t=m(n,"A",{href:!0,class:!0});var a=p(t);r=m(a,"DIV",{class:!0});var i=p(r);s=m(i,"DIV",{class:!0});var u=p(s);e=h(u,k),u.forEach(d),o=v(i),V&&V.l(i),i.forEach(d),c=v(a),O&&O.l(a),l=v(a),a.forEach(d),this.h()},h:function(){g(s,"class","column"),g(r,"class","columns is-mobile"),g(t,"href",null),g(t,"class","list-item")},m:function(n,a){j(n,t,a),i(t,r),i(r,s),i(s,e),i(r,o),V&&V.m(r,null),i(t,c),O&&O.m(t,null),i(t,l),y=!0,w||(x=$(s,"click",P),w=!0)},p:function(s,o){n=s,(!y||2&o)&&k!==(k=n[24].name+"")&&b(e,k),2&o&&(D=["album","track","artist"].indexOf(n[24].type)>-1),D?V?(V.p(n,o),2&o&&I(V,1)):((V=kn(n)).c(),I(V,1),V.m(r,null)):V&&(K(),E(V,1,1,function(){V=null}),A()),n[3]==n[26]?O?(O.p(n,o),8&o&&I(O,1)):((O=In(n)).c(),I(O,1),O.m(t,l)):O&&(K(),E(O,1,1,function(){O=null}),A())},i:function(n){y||(I(V),I(O),y=!0)},o:function(n){E(V),E(O),y=!1},d:function(n){n&&d(t),V&&V.d(),O&&O.d(),w=!1,x()}}}function Pn(n){for(var t,r,s,e,o,c,l,b,y,w,x,k,D,P,V,O,R,B,C,L=n[1].some(Vn)||n[1].some(On),Q=n[0],S=[],U=0;U<Q.length;U+=1)S[U]=mn(fn(n,Q,U));var _=L&&pn(n),F=n[2]&&vn(n),G=n[1].length>0&&wn(n);return{c:function(){t=f(),r=a("h1"),s=u("Browse"),e=f(),o=a("div"),c=a("div"),l=a("nav"),b=a("ul"),y=a("li"),w=a("a"),x=u("Root"),k=f();for(var n=0;n<S.length;n+=1)S[n].c();D=f(),_&&_.c(),P=f(),F&&F.c(),V=f(),G&&G.c(),O=N(),this.h()},l:function(n){z('[data-svelte="svelte-1n5cjn7"]',document.head).forEach(d),t=v(n),r=m(n,"H1",{class:!0});var a=p(r);s=h(a,"Browse"),a.forEach(d),e=v(n),o=m(n,"DIV",{class:!0});var i=p(o);c=m(i,"DIV",{class:!0});var u=p(c);l=m(u,"NAV",{class:!0,"aria-label":!0});var f=p(l);b=m(f,"UL",{class:!0});var g=p(b);y=m(g,"LI",{class:!0});var j=p(y);w=m(j,"A",{href:!0,class:!0});var $=p(w);x=h($,"Root"),$.forEach(d),j.forEach(d),k=v(g);for(var E=0;E<S.length;E+=1)S[E].l(g);g.forEach(d),f.forEach(d),u.forEach(d),D=v(i),_&&_.l(i),i.forEach(d),P=v(n),F&&F.l(n),V=v(n),G&&G.l(n),O=N(),this.h()},h:function(){document.title="Browse",g(r,"class","title"),g(w,"href",null),g(w,"class","svelte-6ensgs"),g(y,"class","svelte-6ensgs"),g(b,"class","svelte-6ensgs"),g(l,"class","breadcrumb svelte-6ensgs"),g(l,"aria-label","breadcrumbs"),g(c,"class","column"),g(o,"class","columns is-mobile")},m:function(a,u){j(a,t,u),j(a,r,u),i(r,s),j(a,e,u),j(a,o,u),i(o,c),i(c,l),i(l,b),i(b,y),i(y,w),i(w,x),i(b,k);for(var f=0;f<S.length;f+=1)S[f].m(b,null);i(o,D),_&&_.m(o,null),j(a,P,u),F&&F.m(a,u),j(a,V,u),G&&G.m(a,u),j(a,O,u),R=!0,B||(C=$(w,"click",n[12]),B=!0)},p:function(n,t){var r=H(t,1)[0];if(69&r){var s;for(Q=n[0],s=0;s<Q.length;s+=1){var e=fn(n,Q,s);S[s]?S[s].p(e,r):(S[s]=mn(e),S[s].c(),S[s].m(b,null))}for(;s<S.length;s+=1)S[s].d(1);S.length=Q.length}2&r&&(L=n[1].some(Vn)||n[1].some(On)),L?_?(_.p(n,r),2&r&&I(_,1)):((_=pn(n)).c(),I(_,1),_.m(o,null)):_&&(K(),E(_,1,1,function(){_=null}),A()),n[2]?F?(F.p(n,r),4&r&&I(F,1)):((F=vn(n)).c(),I(F,1),F.m(V.parentNode,V)):F&&(K(),E(F,1,1,function(){F=null}),A()),n[1].length>0?G?(G.p(n,r),2&r&&I(G,1)):((G=wn(n)).c(),I(G,1),G.m(O.parentNode,O)):G&&(K(),E(G,1,1,function(){G=null}),A())},i:function(n){R||(I(_),I(F),I(G),R=!0)},o:function(n){E(_),E(F),E(G),R=!1},d:function(n){n&&d(t),n&&d(r),n&&d(e),n&&d(o),q(S,n),_&&_.d(),n&&d(P),F&&F.d(n),n&&d(V),G&&G.d(n),n&&d(O),B=!1,C()}}}var Vn=function(n){return["track"].indexOf(n.type)>-1},On=function(n){return"directory"===n.type&&n.uri.indexOf("file://")>-1};function Rn(n,t,r){var s;Q(n,rn,function(n){return r(21,s=n)});var e,o,c,a=[],i=[],l=!1;S(X(Z.mark(function n(){return Z.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r(2,e=u());case 1:case"end":return n.stop()}},n)})));var u=function(){var n=X(Z.mark(function n(){return Z.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,nn();case 3:return n.t1=c=n.sent,(0,n.t0)(5,n.t1),n.t2=r,n.next=8,s.library.browse({uri:null});case 8:n.t3=i=n.sent,(0,n.t2)(1,n.t3);case 10:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),f=function(){var n=X(Z.mark(function n(t,e,c){var l,u;return Z.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(["directory","artist","album"].indexOf(t.type)>-1)){n.next=10;break}return r(3,o=null),n.t0=r,n.next=5,s.library.browse({uri:t.uri});case 5:n.t1=i=n.sent,(0,n.t0)(1,n.t1),"back"===c?(l=a.indexOf(t),u=a.slice(0,l+1),r(0,a=u)):"avance"===c&&r(0,a=[].concat(sn(a),[t])),n.next=11;break;case 10:"track"===t.type&&m(e);case 11:case"end":return n.stop()}},n)}));return function(t,r,s){return n.apply(this,arguments)}}(),m=function(n){r(3,o=o==n?null:n)},p=function(){var n=X(Z.mark(function n(){return Z.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=r,n.next=3,s.library.browse({uri:null});case 3:n.t1=i=n.sent,(0,n.t0)(1,n.t1),r(0,a=[]);case 6:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),h=function(){var n=X(Z.mark(function n(t){var r,e;return Z.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("track"!==t.type){n.next=4;break}return n.abrupt("return",t.uri);case 4:if(!("directory"===t.type&&t.uri.indexOf("file://")>-1)){n.next=12;break}return n.next=7,s.library.browse({uri:t.uri});case 7:return r=n.sent,n.next=10,Promise.all(r.map(function(n){return h(n)}));case 10:return e=n.sent,n.abrupt("return",e.flat(1));case 12:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=X(Z.mark(function n(t){var s;return Z.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(t.map(function(n){return h(n)}));case 2:s=n.sent,en(s.flat(1)),r(4,l=!1);case 5:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=X(Z.mark(function n(t){var s;return Z.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(t.map(function(n){return h(n)}));case 2:s=n.sent,on(null,s.flat(1)),r(4,l=!1);case 5:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=X(Z.mark(function n(t){var r;return Z.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all(t.map(function(n){return h(n)}));case 2:r=n.sent,cn(null,r.flat(1));case 4:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}();return[a,i,e,o,l,c,f,m,p,d,v,g,function(){return r(2,e=p())},function(n,t){return r(2,e=f(n,t,"back"))},function(){return r(4,l=!l)},function(){return d(i)},function(){return v(i)},function(){return g(i)},function(n,t){return r(2,e=f(n,t,"avance"))},function(n){return m(n)},function(){return r(3,o=null)}]}export default(function(t){n(u,c);var r=ln(u);function u(n){var t,c;return s(this,u),t=r.call(this),document.getElementById("svelte-6ensgs-style")||((c=a("style")).id="svelte-6ensgs-style",c.textContent='.breadcrumb.svelte-6ensgs.svelte-6ensgs.svelte-6ensgs{font-size:1rem;white-space:nowrap;margin-bottom:1.5rem}.breadcrumb.svelte-6ensgs a.svelte-6ensgs.svelte-6ensgs{align-items:center;display:flex;justify-content:center;padding:0 0.75em}.breadcrumb.svelte-6ensgs a.svelte-6ensgs.svelte-6ensgs:hover{color:#363636}.breadcrumb.svelte-6ensgs li.svelte-6ensgs.svelte-6ensgs{align-items:center;display:flex}.breadcrumb.svelte-6ensgs li:first-child a.svelte-6ensgs.svelte-6ensgs{padding-left:0}.breadcrumb.svelte-6ensgs li.is-active a.svelte-6ensgs.svelte-6ensgs{color:#363636;cursor:default;pointer-events:none}.breadcrumb.svelte-6ensgs li.svelte-6ensgs+li.svelte-6ensgs::before{color:#b5b5b5;content:"\\0002f"}.breadcrumb.svelte-6ensgs ul.svelte-6ensgs.svelte-6ensgs{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}',i(document.head,c)),e(o(t),n,Rn,Pn,l,{}),t}return u}());