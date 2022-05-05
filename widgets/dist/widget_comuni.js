"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Widget=function(){var e={goToDetail:function(e){e&&(location.href=e)}};function p(o,n){for(var a,i,r,s,l,c,p,d,u=n.regione,y=(n.each_value,n.regione_index,u.ente.name),e=u.formattedFigures,m=[],t=0;t<e.length;t+=1)m[t]=f(o,k(k({},n),{each_value_1:e,lista:e[t],index:t}));var h=u.sezioni&&v(o,n);return{c:function(){a=P("div"),i=P("div"),r=P("h3"),s=L(y),l=L("\n                     "),c=P("div");for(var e=0;e<m.length;e+=1)m[e].c();p=L("\n                  "),h&&h.c(),this.h()},h:function(){var e,t;r.className="ep-comuni-title",E(r,"border-bottom","3px solid #ddd"),c.className="list-wrapper",i.className="flex-wrapper",e="click",t=g,a.addEventListener(e,t,!1),a.className=d="ep-comuni-box "+(u.url?"clickable":""),a._svelte={component:o,each_value:n.each_value,regione_index:n.regione_index}},m:function(e,t){B(a,e,t),D(i,a),D(r,i),D(s,r),D(l,i),D(c,i);for(var n=0;n<m.length;n+=1)m[n].m(c,null);D(p,a),h&&h.m(a,null)},p:function(e,t){u=t.regione,t.each_value,t.regione_index,e.regioni&&y!==(y=u.ente.name)&&(s.data=y);var n=u.formattedFigures;if(e.regioni||e.limit){for(var i=0;i<n.length;i+=1){var r=k(k({},t),{each_value_1:n,lista:n[i],index:i});m[i]?m[i].p(e,r):(m[i]=f(o,r),m[i].c(),m[i].m(c,null))}for(;i<m.length;i+=1)m[i].u(),m[i].d();m.length=n.length}u.sezioni?h?h.p(e,t):((h=v(o,t)).c(),h.m(a,null)):h&&(h.u(),h.d(),h=null),e.regioni&&d!==(d="ep-comuni-box "+(u.url?"clickable":""))&&(a.className=d),a._svelte.each_value=t.each_value,a._svelte.regione_index=t.regione_index},u:function(){C(a);for(var e=0;e<m.length;e+=1)m[e].u();h&&h.u()},d:function(){var e,t;x(m),h&&h.d(),e="click",t=g,a.removeEventListener(e,t,!1)}}}function f(n,e){e.regione,e.each_value,e.regione_index;var i,r,o,a,s,l,c,p,d,u,y,m,h,f,v,g,k=e.lista,x=(e.each_value_1,e.index),b=k.perc,w=k.name,_=k.surname,z=k.coalizione,N=k.perc2&&T(n,e),S=x<e.limit-1&&j(n,e);return{c:function(){i=P("div"),r=P("div"),o=L("\n                           "),a=P("div"),s=L(b),N&&N.c(),l=L("%"),c=L("\n                           "),p=P("h4"),d=L(w),u=L(" "),y=L(_),m=L("\n                           "),h=P("h5"),f=L(z),v=L("\n                        "),S&&S.c(),g=document.createComment(""),this.h()},h:function(){r.className="img-wrapper",E(r,"background-image","url("+k.picture+")"),E(r,"color",k.color),a.className="perc",i.className="list"},m:function(e,t){B(i,e,t),D(r,i),D(o,i),D(a,i),D(s,a),N&&N.m(a,null),D(l,a),D(c,i),D(p,i),D(d,p),D(u,p),D(y,p),D(m,i),D(h,i),D(f,h),B(v,e,t),S&&S.m(e,t),B(g,e,t)},p:function(e,t){t.regione,t.each_value,t.regione_index,k=t.lista,t.each_value_1,x=t.index,e.regioni&&(E(r,"background-image","url("+k.picture+")"),E(r,"color",k.color)),e.regioni&&b!==(b=k.perc)&&(s.data=b),k.perc2?N?N.p(e,t):((N=T(n,t)).c(),N.m(a,l)):N&&(N.u(),N.d(),N=null),e.regioni&&w!==(w=k.name)&&(d.data=w),e.regioni&&_!==(_=k.surname)&&(y.data=_),e.regioni&&z!==(z=k.coalizione)&&(f.data=z),x<t.limit-1?S||((S=j(n,t)).c(),S.m(g.parentNode,g)):S&&(S.u(),S.d(),S=null)},u:function(){C(i),N&&N.u(),C(v),S&&S.u(),C(g)},d:function(){N&&N.d(),S&&S.d()}}}function T(e,t){t.regione,t.each_value,t.regione_index;var n,i,r=t.lista,o=(t.each_value_1,t.index,r.perc2);return{c:function(){n=L("-"),i=L(o)},m:function(e,t){B(n,e,t),B(i,e,t)},p:function(e,t){t.regione,t.each_value,t.regione_index,r=t.lista,t.each_value_1,t.index,e.regioni&&o!==(o=r.perc2)&&(i.data=o)},u:function(){C(n),C(i)},d:u}}function j(e,t){var n;t.regione,t.each_value,t.regione_index,t.lista,t.each_value_1,t.index;return{c:function(){n=P("span"),this.h()},h:function(){n.className="data-display-separator"},m:function(e,t){B(n,e,t)},p:function(e,t){t.regione,t.each_value,t.regione_index,t.lista,t.each_value_1,t.index},u:function(){C(n)},d:u}}function v(e,t){var n,i,r,o,a,s=t.regione,l=(t.each_value,t.regione_index,s.sezioni.corrente),c=s.sezioni.totali;return{c:function(){n=P("small"),i=L("Sezioni "),r=L(l),o=L(" su "),a=L(c),this.h()},h:function(){n.className="data-source"},m:function(e,t){B(n,e,t),D(i,n),D(r,n),D(o,n),D(a,n)},p:function(e,t){s=t.regione,t.each_value,t.regione_index,e.regioni&&l!==(l=s.sezioni.corrente)&&(r.data=l),e.regioni&&c!==(c=s.sezioni.totali)&&(a.data=c)},u:function(){C(n)},d:u}}function d(e,t){var n,i;return{c:function(){n=P("small"),i=L(t.dataSource),this.h()},h:function(){n.className="data-source"},m:function(e,t){B(n,e,t),D(i,n)},p:function(e,t){e.dataSource&&(i.data=t.dataSource)},u:function(){C(n)},d:u}}function g(e){var t=this._svelte.component,n=this._svelte.each_value[this._svelte.regione_index];t.goToDetail(n.url)}function t(e){var t,n,i;n=e,(t=this)._handlers=Object.create(null),t._bind=n._bind,t.options=n,t.root=n.root||t,t.store=t.root.store||n.store,this.refs={},this._state=k({},e.data),this._recompute({entiData:1,configList:1,limit:1,imagePath:1},this._state),document.getElementById("svelte-1yn0kyr-style")||((i=P("style")).id="svelte-1yn0kyr-style",i.textContent=".svelte-1yn0kyr.ep-comuni-wrapper,.svelte-1yn0kyr .ep-comuni-wrapper{visibility:hidden;max-height:300px}.svelte-1yn0kyr.ep-comuni-wrapper.slick-initialized,.svelte-1yn0kyr .ep-comuni-wrapper.slick-initialized{visibility:visible;max-height:inherit}.svelte-1yn0kyr.ep-comuni,.svelte-1yn0kyr .ep-comuni{font-family:'Playfair Display', serif;position:relative;border-bottom:3px solid #ddd;padding-bottom:1em;margin-bottom:1em}.svelte-1yn0kyr.ep-more-lists,.svelte-1yn0kyr .ep-more-lists{display:flex;justify-content:space-between;flex-wrap:wrap;position:relative}.svelte-1yn0kyr.data-display,.svelte-1yn0kyr .data-display{display:flex;justify-content:space-evenly;flex-direction:column;position:relative;padding:.5em .3em}.svelte-1yn0kyr.data-display-separator,.svelte-1yn0kyr .data-display-separator{width:2px;height:2em;top:3px;background:#ddd;position:relative;align-self:center}.svelte-1yn0kyr.ep-comuni-wrapper .slick-slide,.svelte-1yn0kyr .ep-comuni-wrapper .slick-slide{margin:0 10px;border:1px solid #ddd;min-height:220px}.svelte-1yn0kyr.ep-comuni-wrapper .slick-arrow,.svelte-1yn0kyr .ep-comuni-wrapper .slick-arrow{position:absolute;top:50%;border:0;box-shadow:none;cursor:pointer;z-index:1;background:rgba(0,0,0, 0.5);width:25px}.svelte-1yn0kyr.ep-comuni-wrapper .slick-next,.svelte-1yn0kyr .ep-comuni-wrapper .slick-next{right:0}.svelte-1yn0kyr.ep-comuni-wrapper .slick-prev,.svelte-1yn0kyr .ep-comuni-wrapper .slick-prev{left:0}.svelte-1yn0kyr.ep-comuni-wrapper .slick-prev:after,.svelte-1yn0kyr .ep-comuni-wrapper .slick-prev:after{content:\"\\00AB\";color:white;font-size:25px}.svelte-1yn0kyr.ep-comuni-wrapper .slick-next:before,.svelte-1yn0kyr .ep-comuni-wrapper .slick-next:before{content:\"\\00BB\";color:white;font-size:25px}.svelte-1yn0kyr.ep-comuni-wrapper .slick-arrow.slick-disabled,.svelte-1yn0kyr .ep-comuni-wrapper .slick-arrow.slick-disabled{display:none}.svelte-1yn0kyr.percent-wrapper,.svelte-1yn0kyr .percent-wrapper{text-align:center}.svelte-1yn0kyr.logo-wrapper,.svelte-1yn0kyr .logo-wrapper{display:flex;justify-content:center;padding:.2em}.svelte-1yn0kyr.coalition-logo,.svelte-1yn0kyr .coalition-logo{width:35px;height:35px;background-color:#efefef;display:inline-block;border-radius:50%;margin:4px;border:1px solid #ddd;background-size:cover;background-position:center;background-repeat:no-repeat}h3.svelte-1yn0kyr.ep-coalition-title,.svelte-1yn0kyr h3.ep-coalition-title{text-align:center;margin:0;padding:.4em;background:#ddd;font-size:1em;text-transform:uppercase;background:#efefef}.svelte-1yn0kyr.ep-horizontal-bar-table,.svelte-1yn0kyr .ep-horizontal-bar-table{width:100%;font-size:.8em;box-sizing:border-box;padding:.5em .2em}.svelte-1yn0kyr.ep-horizontal-bar-table td,.svelte-1yn0kyr .ep-horizontal-bar-table td{border-bottom:1px solid #ddd;padding:.1em}.svelte-1yn0kyr.ep-horizontal-bar-graph,.svelte-1yn0kyr .ep-horizontal-bar-graph{position:relative}.svelte-1yn0kyr.graph,.svelte-1yn0kyr .graph{height:12px;overflow:visible}.svelte-1yn0kyr.graph > span,.svelte-1yn0kyr .graph > span{position:absolute;right:0}.svelte-1yn0kyr.ep-horizontal-bar-list,.svelte-1yn0kyr .ep-horizontal-bar-list{width:1%;white-space:nowrap;text-align:right}.svelte-1yn0kyr.percent,.svelte-1yn0kyr .percent{font-size:1.8em;text-align:center;line-height:1}.svelte-1yn0kyr.percent small,.svelte-1yn0kyr .percent small{display:block;font-size:.4em;line-height:1;color:#999}.svelte-1yn0kyr.data-source,.svelte-1yn0kyr .data-source{display:block;text-align:right;font-size:.8em;color:#999;font-family:'TT Norms Pro Regular', sans-serif;padding:.5em}@media screen and (max-width:610px){.svelte-1yn0kyr.coalition-logo,.svelte-1yn0kyr .coalition-logo{idth:30px;height:30px}.svelte-1yn0kyr.bar-wrapper,.svelte-1yn0kyr .bar-wrapper{display:none}}@media(max-width:700px){.svelte-1yn0kyr.data-display,.svelte-1yn0kyr .data-display{flex-direction:column}.svelte-1yn0kyr.data-display-separator,.svelte-1yn0kyr .data-display-separator{display:none}}.svelte-1yn0kyr.ep-comuni,.svelte-1yn0kyr .ep-comuni{font-family:'Playfair Display', serif;position:relative;border-bottom:3px solid #ddd;padding-bottom:1em;margin-bottom:1em}.svelte-1yn0kyr.ep-comuni-wrapper,.svelte-1yn0kyr .ep-comuni-wrapper,.svelte-1yn0kyr.ep-more-lists,.svelte-1yn0kyr .ep-more-lists{display:flex;justify-content:space-between;flex-wrap:wrap;position:relative}.svelte-1yn0kyr.ep-comuni-mobile-nav,.svelte-1yn0kyr .ep-comuni-mobile-nav{display:none}.svelte-1yn0kyr.ep-comuni-box,.svelte-1yn0kyr .ep-comuni-box{box-sizing:border-box;background:#f9f9f9}.svelte-1yn0kyr.clickable,.svelte-1yn0kyr .clickable{cursor:pointer}.svelte-1yn0kyr.data-display-separator,.svelte-1yn0kyr .data-display-separator{width:2px;height:8em;top:3px;background:#ddd;position:relative;align-self:center}h3.svelte-1yn0kyr.ep-comuni-title,.svelte-1yn0kyr h3.ep-comuni-title{text-align:center;margin:0;padding:.4em;background:#ddd;font-size:20px;text-transform:uppercase;font-weight:bold;font-family:'TT Norms Pro Bold', sans-serif;background:#efefef}.svelte-1yn0kyr.ep-comuni-title a,.svelte-1yn0kyr .ep-comuni-title a{color:inherit}.svelte-1yn0kyr.data-source,.svelte-1yn0kyr .data-source{display:block;text-align:right;font-size:.8em;color:#999;font-family:'TT Norms Pro Regular', sans-serif;padding:.5em}.svelte-1yn0kyr.list-wrapper,.svelte-1yn0kyr .list-wrapper{display:flex;justify-content:space-around;text-align:center;padding:.2em 0}.svelte-1yn0kyr.list,.svelte-1yn0kyr .list{text-align:center;padding:0 10px;min-height:180px;width:50%}.svelte-1yn0kyr.list h4,.svelte-1yn0kyr .list h4,.svelte-1yn0kyr.list h5,.svelte-1yn0kyr .list h5{margin:0;font-family:'TT Norms Pro Regular', sans-serif;font-size:17px}.svelte-1yn0kyr.list h5,.svelte-1yn0kyr .list h5{color:#999;font-size:16px}.svelte-1yn0kyr.list .perc,.svelte-1yn0kyr .list .perc{font-size:20px;color:#8E0000;font-weight:bold;margin-bottom:10px}.svelte-1yn0kyr.img-wrapper,.svelte-1yn0kyr .img-wrapper{background-color:#ddd;width:70px;height:70px;border-radius:50%;margin:.5em auto;border:5px solid;box-shadow:-5px -7px 7px -6px #444 inset;background-position:center;background-size:cover}@media screen and (max-width:1024px){.svelte-1yn0kyr.ep-comuni-wrapper .slick-arrow,.svelte-1yn0kyr .ep-comuni-wrapper .slick-arrow{display:none !important}}@media screen and (max-width:820px){.svelte-1yn0kyr.ep-comuni-box,.svelte-1yn0kyr .ep-comuni-box{flex:0 1 48%;min-width:48%}}@media screen and (max-width:610px){.svelte-1yn0kyr.ep-comuni-wrapper,.svelte-1yn0kyr .ep-comuni-wrapper{flex-wrap:nowrap;overflow:auto}.svelte-1yn0kyr.ep-comuni-box,.svelte-1yn0kyr .ep-comuni-box{min-width:47%}.svelte-1yn0kyr.coalition-logo,.svelte-1yn0kyr .coalition-logo{idth:30px;height:30px}.svelte-1yn0kyr.bar-wrapper,.svelte-1yn0kyr .bar-wrapper{display:none}}@media(max-width:700px){.svelte-1yn0kyr.data-display-separator,.svelte-1yn0kyr .data-display-separator{display:none}.svelte-1yn0kyr.ep-comuni-wrapper,.svelte-1yn0kyr .ep-comuni-wrapper{flex-direction:column}}",D(i,document.head));var r=this;e.root||(this._oncreate=[]),this._fragment=function(o,e){for(var a,s,i,t=e.regioni,l=[],n=0;n<t.length;n+=1)l[n]=p(o,k(k({},e),{each_value:t,regione:t[n],regione_index:n}));var c=e.dataSource&&d(o,e);return{c:function(){a=P("div"),s=P("div");for(var e=0;e<l.length;e+=1)l[e].c();i=L(" \n   "),c&&c.c(),this.h()},h:function(){s.className="ep-comuni-wrapper",a.className="ep-comuni svelte-1yn0kyr"},m:function(e,t){B(a,e,t),D(s,a);for(var n=0;n<l.length;n+=1)l[n].m(s,null);o.refs.wrapper=s,D(i,a),c&&c.m(a,null)},p:function(e,t){var n=t.regioni;if(e.regioni||e.limit){for(var i=0;i<n.length;i+=1){var r=k(k({},t),{each_value:n,regione:n[i],regione_index:i});l[i]?l[i].p(e,r):(l[i]=p(o,r),l[i].c(),l[i].m(s,null))}for(;i<l.length;i+=1)l[i].u(),l[i].d();l.length=n.length}t.dataSource?c?c.p(e,t):((c=d(o,t)).c(),c.m(a,null)):c&&(c.u(),c.d(),c=null)},u:function(){C(a);for(var e=0;e<l.length;e+=1)l[e].u();c&&c.u()},d:function(){x(l),o.refs.wrapper===s&&(o.refs.wrapper=null),c&&c.d()}}}(this,this._state),this.root._oncreate.push(function(){(function(){window.parent.postMessage({sentinel:"amp",type:"embed-size",height:document.body.scrollHeight},"*")}).call(r),r.fire("update",{changed:{entiData:1,configList:1,limit:1,imagePath:1,regioni:1,dataSource:1},current:r._state})}),e.target&&(this._fragment.c(),this._mount(e.target,e.anchor),o(this._oncreate))}function P(e){return document.createElement(e)}function D(e,t){t.appendChild(e)}function k(e,t){for(var n in t)e[n]=t[n];return e}function L(e){return document.createTextNode(e)}function B(e,t,n){t.insertBefore(e,n)}function C(e){e.parentNode.removeChild(e)}function x(e){for(var t=0;t<e.length;t+=1)e[t]&&e[t].d()}function E(e,t,n){e.style.setProperty(t,n)}function u(){}function o(e){for(;e&&e.length;)e.shift()()}function n(e){this.destroy=u,this.fire("destroy"),!(this.set=this.get=u)!==e&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}return head.load(["https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"],function(){var e;if($("head").append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">'),768<=$(window).width()&&$(".ep-comuni-wrapper:not(.slick-initialized)").css("visibility","hidden"),null!=$("comuni").attr("data-show")){var t=parseInt($("comuni").attr("data-show"));e="number"==typeof t?3<=t?3:t:3}$(".ep-comuni-wrapper").slick({dots:!1,infinite:!(t<=2),speed:300,slidesToShow:e,slidesToScroll:e,variableWidth:t<=2,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1}}]}),768<=$(window).width()&&($(".ep-comuni-wrapper.slick-initialized").css("visibility","visible"),2==t?$(".ep-comuni-wrapper .slick-slide").css("max-width","350px"):1==t&&$(".ep-comuni-wrapper .slick-slide").css("width","21%")),$(window).width()<=768&&1==t&&$(".ep-comuni-wrapper .slick-slide").css("width","91vw"),$(window).width(),$(".ep-comuni-wrapper .slick-arrow").html("")}),k(t.prototype,{destroy:n,get:function(e){return e?this._state[e]:this._state},fire:function(e,t){var n=e in this._handlers&&this._handlers[e].slice();if(!n)return;for(var i=0;i<n.length;i+=1){var r=n[i];r.__calling||(r.__calling=!0,r.call(this,t),r.__calling=!1)}},observe:function(t,e,n){var i=e.bind(this);n&&!1===n.init||i(this.get()[t],void 0);return this.on(n&&n.defer?"update":"state",function(e){e.changed[t]&&i(e.current[t],e.previous&&e.previous[t])})},on:function(e,t){if("teardown"===e)return this.on("destroy",t);var n=this._handlers[e]||(this._handlers[e]=[]);return n.push(t),{cancel:function(){var e=n.indexOf(t);~e&&n.splice(e,1)}}},set:function(e){if(this._set(k({},e)),this.root._lock)return;this.root._lock=!0,o(this.root._beforecreate),o(this.root._oncreate),o(this.root._aftercreate),this.root._lock=!1},teardown:n,_set:function(e){var t=this._state,n={},i=!1;for(var r in e)this._differs(e[r],t[r])&&(n[r]=i=!0);if(!i)return;this._state=k(k({},t),e),this._recompute(n,this._state),this._bind&&this._bind(n,this._state);this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:t}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:t}))},_mount:function(e,t){this._fragment[this._fragment.i?"i":"m"](e,t||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:function(e,t){return e!=e?t==t:e!==t||e&&"object"===(void 0===e?"undefined":_typeof(e))||"function"==typeof e}}),k(t.prototype,e),t.prototype._recompute=function(e,t){var n,i,r,o;(e.entiData||e.configList||e.limit||e.imagePath)&&this._differs(t.regioni,t.regioni=(n=t.entiData,i=t.configList,r=t.limit,o=t.imagePath,n.map(function(e){return e.formattedFigures=e.liste.filter(function(e,t){return t<r}).map(function(e){if(e.name=null!=e.candidato?e.candidato.name:e.name,e.surname=null!=e.candidato?e.candidato.surname:e.surname,e.slug=null!=e.candidato?e.candidato.slug:e.slug,e.perc=e.percentuale.toString().replace(".",","),e.perc2=e.percent2?e.percent2.toString().replace(".",","):null,"'"==e.surname.slice(-1)){var t=e.surname.slice(0,e.surname.length-1);e.picture=o+t.toLowerCase().replace(" ","%20")+".jpg"}else e.picture=o+e.surname.toLowerCase().replace(" ","%20")+".jpg";return e.color=e.color?e.color:i[e.slug]?i[e.slug].color:"#fff",e.coalizione=i[e.slug]?i[e.slug].label:"",e}),e})))&&(e.regioni=!0)},t}();