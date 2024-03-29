"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Widget=function(){function q(e,r){var t,a,n;return{c:function(){t=U("Fonte: "),a=K("span"),n=U(r.dataSource)},m:function(e,r){X(t,e,r),X(a,e,r),Q(n,a)},p:function(e,r){e.dataSource&&(n.data=r.dataSource)},u:function(){Y(t),Y(a)},d:l}}function G(e,r){var t,a,n;return{c:function(){t=U("Affluenza: "),a=K("span"),n=U(r.influx)},m:function(e,r){X(t,e,r),X(a,e,r),Q(n,a)},p:function(e,r){e.influx&&(n.data=r.influx)},u:function(){Y(t),Y(a)},d:l}}function J(e,r){var t,a,n,i,s,o;return{c:function(){t=U("Sezioni: "),a=K("span"),n=U(r.sectionCurrent),i=U(" su "),s=K("span"),o=U(r.sectionTot)},m:function(e,r){X(t,e,r),X(a,e,r),Q(n,a),X(i,e,r),X(s,e,r),Q(o,s)},p:function(e,r){e.sectionCurrent&&(n.data=r.sectionCurrent),e.sectionTot&&(o.data=r.sectionTot)},u:function(){Y(t),Y(a),Y(i),Y(s)},d:l}}function e(e){var r,t,a,n,i,s,o,l,p,u,f,d,m,w,x,c,h,v,b,k,g,y,_,T,N,z,P,S,j,C,V,B,E,R,D,O,A,F,H,I,L,M,W;t=e,(r=this)._handlers=Object.create(null),r._bind=t._bind,r.options=t,r.root=t.root||r,r.store=r.root.store||t.store,this._state=Z({},e.data),document.getElementById("svelte-1xwkao2-style")||((a=K("style")).id="svelte-1xwkao2-style",a.textContent=".svelte-1xwkao2.referendum-wrapper,.svelte-1xwkao2 .referendum-wrapper{margin:15px auto;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;padding:15px 0 10px}.svelte-1xwkao2.referendum-wrapper h4,.svelte-1xwkao2 .referendum-wrapper h4{font-size:18px;line-height:22px;font-family:'TT Norms Pro Regular', sans-serif;margin-top:0;font-weight:400;text-align:center}.svelte-1xwkao2.referendum-risultati,.svelte-1xwkao2 .referendum-risultati{display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.svelte-1xwkao2.referendum-wrapper .risultati-details,.svelte-1xwkao2 .referendum-wrapper .risultati-details{flex-basis:100%;display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.svelte-1xwkao2.referendum-wrapper .risultati-details,.svelte-1xwkao2 .referendum-wrapper .risultati-details{border-top:1px solid #f2f2f2;padding:10px 0 0;margin:5px 0 0}.svelte-1xwkao2.referendum-risultati h3,.svelte-1xwkao2 .referendum-risultati h3{font-size:80px;font-weight:bold;font-family:'TT Norms Pro Bold', sans-serif;text-transform:uppercase;margin:0;color:#e2e2e2}.svelte-1xwkao2.referendum-risultati h4,.svelte-1xwkao2 .referendum-risultati h4{font-size:13px;font-weight:400;font-family:'TT Norms Pro Regular', sans-serif;text-transform:uppercase;margin:0;flex-basis:100%;text-align:center}.svelte-1xwkao2.referendum-risultati h4 span,.svelte-1xwkao2 .referendum-risultati h4 span{font-weight:bold;font-family:'TT Norms Pro Bold', sans-serif;color:#8E0000}.svelte-1xwkao2.referendum-risultati .bar-wrapper,.svelte-1xwkao2 .referendum-risultati .bar-wrapper{display:flex;flex-wrap:wrap;width:90%;justify-content:center;align-items:center}.svelte-1xwkao2.referendum-risultati .bar-wrapper .bar-yes,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .bar-yes,.svelte-1xwkao2.referendum-risultati .bar-wrapper .bar-no,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .bar-no{display:flex;flex-wrap:wrap;align-items:center;flex-basis:35%;justify-content:center}.svelte-1xwkao2.referendum-risultati .bar-wrapper .bar-yes,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .bar-yes{margin-right:-20px}.svelte-1xwkao2.referendum-risultati .bar-wrapper p,.svelte-1xwkao2 .referendum-risultati .bar-wrapper p{font-size:47px;font-family:'Playfair Display', serif;text-align:center;font-weight:bold;color:#8E0000;margin:auto 15px;line-height:52px}.svelte-1xwkao2.referendum-risultati .bar-wrapper .bar-yes p,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .bar-yes p{margin-right:0}.svelte-1xwkao2.referendum-risultati .bar-wrapper .results,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .results{display:flex;flex-direction:column;justify-content:center}.svelte-1xwkao2.referendum-risultati .bar-wrapper .bar-no p,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .bar-no p{margin-left:0}.svelte-1xwkao2.referendum-wrapper .risultati-details h5 span,.svelte-1xwkao2 .referendum-wrapper .risultati-details h5 span{font-weight:bold;font-family:'TT Norms Pro Bold', sans-serif;color:#8E0000}.svelte-1xwkao2.referendum-wrapper .risultati-details h5,.svelte-1xwkao2 .referendum-wrapper .risultati-details h5{font-size:13px;font-weight:400;font-family:'TT Norms Pro Regular', sans-serif;text-transform:uppercase;margin:0 15px 0 0;border-right:1px solid;padding-right:15px}.svelte-1xwkao2.referendum-wrapper .risultati-details h5:last-child,.svelte-1xwkao2 .referendum-wrapper .risultati-details h5:last-child{padding-right:0;border:0}.svelte-1xwkao2.referendum-wrapper .bar-wrapper h5,.svelte-1xwkao2 .referendum-wrapper .bar-wrapper h5{flex-basis:100%;margin:0 auto;text-align:center;font-size:10px;font-family:'Playfair Display', serif;font-style:italic;font-weight:300}.svelte-1xwkao2.referendum-wrapper .bar-wrapper h2,.svelte-1xwkao2 .referendum-wrapper .bar-wrapper h2{color:#9c9c9c;font-size:26px;line-height:22px;margin:0;flex-basis:26%;font-weight:300;text-align:center;font-family:'TT Norms Pro Thin', sans-serif;text-transform:uppercase;text-decoration:none;padding:10px}.svelte-1xwkao2.referendum-wrapper .bar-wrapper  h2 span,.svelte-1xwkao2 .referendum-wrapper .bar-wrapper  h2 span{font-size:16px;display:block;line-height:22px;margin-top:10px}@media screen and (max-width: 1024px){.svelte-1xwkao2.referendum-risultati .bar-wrapper .bar-yes,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .bar-yes,.svelte-1xwkao2.referendum-risultati .bar-wrapper .bar-no,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .bar-no{flex-basis:50%}.svelte-1xwkao2.referendum-risultati .bar-wrapper .bar-yes,.svelte-1xwkao2 .referendum-risultati .bar-wrapper .bar-yes{margin-right:-20px}.svelte-1xwkao2.referendum-wrapper .bar-wrapper h2,.svelte-1xwkao2 .referendum-wrapper .bar-wrapper h2{order:-2;flex-basis:100%;padding:5px 0}.svelte-1xwkao2.referendum-wrapper .bar-wrapper h5,.svelte-1xwkao2 .referendum-wrapper .bar-wrapper h5{order:-1;margin-bottom:0}}@media screen and (max-width: 768px){.svelte-1xwkao2.referendum-risultati h4,.svelte-1xwkao2 .referendum-risultati h4{font-size:11px}.svelte-1xwkao2.referendum-wrapper .risultati-details h5,.svelte-1xwkao2 .referendum-wrapper .risultati-details h5{border:0}.svelte-1xwkao2.referendum-risultati .bar-wrapper,.svelte-1xwkao2 .referendum-risultati .bar-wrapper{width:calc(100% - 40px);justify-content:space-between}.svelte-1xwkao2.referendum-wrapper .bar-wrapper  h2 span,.svelte-1xwkao2 .referendum-wrapper .bar-wrapper  h2 span{margin-top:5px}.svelte-1xwkao2.referendum-wrapper,.svelte-1xwkao2 .referendum-wrapper{padding-bottom:5px}.svelte-1xwkao2.referendum-risultati .bar-wrapper p,.svelte-1xwkao2 .referendum-risultati .bar-wrapper p{font-size:35px;margin:auto 10px;line-height:37px}.svelte-1xwkao2.referendum-risultati .bar-wrapper h5,.svelte-1xwkao2 .referendum-risultati .bar-wrapper h5{font-size:12px}.svelte-1xwkao2.referendum-risultati h3,.svelte-1xwkao2 .referendum-risultati h3{font-size:40px}.svelte-1xwkao2.referendum-wrapper .risultati-details h5,.svelte-1xwkao2 .referendum-wrapper .risultati-details h5{padding-bottom:5px}}@media screen and (max-width: 450px){.svelte-1xwkao2.referendum-risultati .bar-wrapper p,.svelte-1xwkao2 .referendum-risultati .bar-wrapper p{font-size:22px;margin:auto 10px;line-height:24px}.svelte-1xwkao2.referendum-risultati .bar-wrapper,.svelte-1xwkao2 .referendum-risultati .bar-wrapper{width:100%}.svelte-1xwkao2.referendum-risultati h4,.svelte-1xwkao2 .referendum-risultati h4{font-size:12px;display:none}}@media screen and (max-width: 350px){.svelte-1xwkao2.referendum-risultati h3,.svelte-1xwkao2 .referendum-risultati h3{font-size:25px}}",Q(a,document.head)),this._fragment=(i=(n=this)._state,L=i.dataSource&&q(n,i),M=i.influx&&G(n,i),W=i.sectionTot&&J(n,i),{c:function(){s=K("div"),o=K("div"),l=K("div"),p=K("div"),(u=K("h3")).textContent="SÌ",f=U("\n                "),d=K("div"),m=K("p"),w=U(i.yesPerc),x=U("\n                    "),c=K("h4"),h=U("Voti: "),v=K("span"),b=U(i.yesVotes),k=U("\n            "),(g=K("h2")).innerHTML="Referendum <span>Taglio dei parlamentari</span>",y=U("\n            "),_=K("div"),T=K("div"),N=K("p"),z=U(i.noPerc),P=U("\n                    "),S=K("h4"),j=U("Voti: "),C=K("span"),V=U(i.noVotes),B=U("\n                "),(E=K("h3")).textContent="No",R=U("\n           \n            "),D=K("h5"),L&&L.c(),O=U("\n    "),A=K("div"),F=K("h5"),M&&M.c(),H=U("\n        "),I=K("h5"),W&&W.c(),this.h()},h:function(){d.className="result",p.className="bar-yes",T.className="result",_.className="bar-no",l.className="bar-wrapper",o.className="referendum-risultati referendum-risultati--dsk",A.className="risultati-details",s.className="referendum-wrapper svelte-1xwkao2"},m:function(e,r){X(s,e,r),Q(o,s),Q(l,o),Q(p,l),Q(u,p),Q(f,p),Q(d,p),Q(m,d),Q(w,m),Q(x,d),Q(c,d),Q(h,c),Q(v,c),Q(b,v),Q(k,l),Q(g,l),Q(y,l),Q(_,l),Q(T,_),Q(N,T),Q(z,N),Q(P,T),Q(S,T),Q(j,S),Q(C,S),Q(V,C),Q(B,_),Q(E,_),Q(R,l),Q(D,l),L&&L.m(D,null),Q(O,s),Q(A,s),Q(F,A),M&&M.m(F,null),Q(H,A),Q(I,A),W&&W.m(I,null)},p:function(e,r){e.yesPerc&&(w.data=r.yesPerc),e.yesVotes&&(b.data=r.yesVotes),e.noPerc&&(z.data=r.noPerc),e.noVotes&&(V.data=r.noVotes),r.dataSource?L?L.p(e,r):((L=q(0,r)).c(),L.m(D,null)):L&&(L.u(),L.d(),L=null),r.influx?M?M.p(e,r):((M=G(0,r)).c(),M.m(F,null)):M&&(M.u(),M.d(),M=null),r.sectionTot?W?W.p(e,r):((W=J(0,r)).c(),W.m(I,null)):W&&(W.u(),W.d(),W=null)},u:function(){Y(s),L&&L.u(),M&&M.u(),W&&W.u()},d:function(){L&&L.d(),M&&M.d(),W&&W.d()}}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor))}function K(e){return document.createElement(e)}function Q(e,r){r.appendChild(e)}function U(e){return document.createTextNode(e)}function X(e,r,t){r.insertBefore(e,t)}function Y(e){e.parentNode.removeChild(e)}function l(){}function Z(e,r){for(var t in r)e[t]=r[t];return e}function r(e){this.destroy=l,this.fire("destroy"),!(this.set=this.get=l)!==e&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function t(e){for(;e&&e.length;)e.shift()()}return Z(e.prototype,{destroy:r,get:function(e){return e?this._state[e]:this._state},fire:function(e,r){var t=e in this._handlers&&this._handlers[e].slice();if(!t)return;for(var a=0;a<t.length;a+=1){var n=t[a];n.__calling||(n.__calling=!0,n.call(this,r),n.__calling=!1)}},observe:function(r,e,t){var a=e.bind(this);t&&!1===t.init||a(this.get()[r],void 0);return this.on(t&&t.defer?"update":"state",function(e){e.changed[r]&&a(e.current[r],e.previous&&e.previous[r])})},on:function(e,r){if("teardown"===e)return this.on("destroy",r);var t=this._handlers[e]||(this._handlers[e]=[]);return t.push(r),{cancel:function(){var e=t.indexOf(r);~e&&t.splice(e,1)}}},set:function(e){if(this._set(Z({},e)),this.root._lock)return;this.root._lock=!0,t(this.root._beforecreate),t(this.root._oncreate),t(this.root._aftercreate),this.root._lock=!1},teardown:r,_set:function(e){var r=this._state,t={},a=!1;for(var n in e)this._differs(e[n],r[n])&&(t[n]=a=!0);if(!a)return;this._state=Z(Z({},r),e),this._recompute(t,this._state),this._bind&&this._bind(t,this._state);this._fragment&&(this.fire("state",{changed:t,current:this._state,previous:r}),this._fragment.p(t,this._state),this.fire("update",{changed:t,current:this._state,previous:r}))},_mount:function(e,r){this._fragment[this._fragment.i?"i":"m"](e,r||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:function(e,r){return e!=e?r==r:e!==r||e&&"object"===(void 0===e?"undefined":_typeof(e))||"function"==typeof e}}),e.prototype._recompute=l,e}();