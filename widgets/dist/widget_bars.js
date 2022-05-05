"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Widget=function(){function n(t,e,n,i,r){return[t,e].map(function(t){return(e=t)?e.map(function(t,e){return t.label=n[t.id].label,t.color=n[t.id].color,r?(t.percent=t.perc,t.percent2=t.perc2,t.delay=100*e+"ms"):(t.percent=0,t.percent2=0,t.varClass=""),t}).filter(function(t,e){return!(i&&0<i)||e<i}):null;var e})}function g(n,t){var i,r,a,o,s,l,c=t.list,u=(t.each_value,t.list_index,c.label),p=c.percent&&h(n,t);return{c:function(){i=y("tr"),r=y("td"),a=S(u),o=S("\n                  "),s=y("td"),l=y("div"),p&&p.c(),this.h()},h:function(){r.className="ep-horizontal-bar-list",l.className="graph",N(l,"width",1.4*c.percent+"%"),N(l,"background",c.color),N(l,"transition-delay",c.delay),s.className="ep-horizontal-bar-graph"},m:function(t,e){B(i,t,e),x(r,i),x(a,r),x(o,i),x(s,i),x(l,s),p&&p.m(l,null)},p:function(t,e){c=e.list,e.each_value,e.list_index,t.percents&&u!==(u=c.label)&&(a.data=u),c.percent?p?p.p(t,e):((p=h(n,e)).c(),p.m(l,null)):p&&(p.u(),p.d(),p=null),t.percents&&(N(l,"width",1.4*c.percent+"%"),N(l,"background",c.color),N(l,"transition-delay",c.delay))},u:function(){k(i),p&&p.u()},d:function(){p&&p.d()}}}function l(t,e){var n,i,r=e.list,a=(e.each_value,e.list_index,r.percent2.toString().replace(".",","));return{c:function(){n=S("-"),i=S(a)},m:function(t,e){B(n,t,e),B(i,t,e)},p:function(t,e){r=e.list,e.each_value,e.list_index,t.percents&&a!==(a=r.percent2.toString().replace(".",","))&&(i.data=a)},u:function(){k(n),k(i)},d:o}}function h(t,e){var n,i,r,a=e.list,o=(e.each_value,e.list_index,a.percent.toString().replace(".",",")),s=a.percent2&&l(0,e);return{c:function(){n=y("span"),i=S(o),s&&s.c(),r=S("%")},m:function(t,e){B(n,t,e),x(i,n),s&&s.m(n,null),x(r,n)},p:function(t,e){a=e.list,e.each_value,e.list_index,t.percents&&o!==(o=a.percent.toString().replace(".",","))&&(i.data=o),a.percent2?s?s.p(t,e):((s=l(0,e)).c(),s.m(n,r)):s&&(s.u(),s.d(),s=null)},u:function(){k(n),s&&s.u()},d:function(){s&&s.d()}}}function d(n,t){var i,r,a,o,s,l,c=t.list,u=(t.each_value_1,t.list_index_1,c.label),p=c.percent&&f(n,t);return{c:function(){i=y("tr"),r=y("td"),a=S(u),o=S("\n                     "),s=y("td"),l=y("div"),p&&p.c(),this.h()},h:function(){r.className="ep-horizontal-bar-list",l.className="graph",N(l,"width",1.4*c.percent+"%"),N(l,"background",c.color),N(l,"transition-delay",c.delay),s.className="ep-horizontal-bar-graph"},m:function(t,e){B(i,t,e),x(r,i),x(a,r),x(o,i),x(s,i),x(l,s),p&&p.m(l,null)},p:function(t,e){c=e.list,e.each_value_1,e.list_index_1,t.percents&&u!==(u=c.label)&&(a.data=u),c.percent?p?p.p(t,e):((p=f(n,e)).c(),p.m(l,null)):p&&(p.u(),p.d(),p=null),t.percents&&(N(l,"width",1.4*c.percent+"%"),N(l,"background",c.color),N(l,"transition-delay",c.delay))},u:function(){k(i),p&&p.u()},d:function(){p&&p.d()}}}function c(t,e){var n,i,r=e.list,a=(e.each_value_1,e.list_index_1,r.percent2.toString().replace(".",","));return{c:function(){n=S("-"),i=S(a)},m:function(t,e){B(n,t,e),B(i,t,e)},p:function(t,e){r=e.list,e.each_value_1,e.list_index_1,t.percents&&a!==(a=r.percent2.toString().replace(".",","))&&(i.data=a)},u:function(){k(n),k(i)},d:o}}function f(t,e){var n,i,r,a=e.list,o=(e.each_value_1,e.list_index_1,a.percent.toString().replace(".",",")),s=a.percent2&&c(0,e);return{c:function(){n=y("span"),i=S(o),s&&s.c(),r=S("%")},m:function(t,e){B(n,t,e),x(i,n),s&&s.m(n,null),x(r,n)},p:function(t,e){a=e.list,e.each_value_1,e.list_index_1,t.percents&&o!==(o=a.percent.toString().replace(".",","))&&(i.data=o),a.percent2?s?s.p(t,e):((s=c(0,e)).c(),s.m(n,r)):s&&(s.u(),s.d(),s=null)},u:function(){k(n),s&&s.u()},d:function(){s&&s.d()}}}function v(a,t){for(var o,i,s,r,l,c,u,p=t.title2?t.title2:t.title,e=t.percents[1],h=[],n=0;n<e.length;n+=1)h[n]=d(a,w(w({},t),{each_value_1:e,list:e[n],list_index_1:n}));return{c:function(){o=y("div"),i=y("h3"),s=S(p),r=S("\n         "),l=y("div"),c=y("table"),u=y("tbody");for(var t=0;t<h.length;t+=1)h[t].c();this.h()},h:function(){c.className="ep-horizontal-bar-table",l.className="table-wrapper",o.className="ep-horizontal-bar-table-wrapper",N(o,"max-width",t.bothBranches?"48%":"100%")},m:function(t,e){B(o,t,e),x(i,o),x(s,i),x(r,o),x(l,o),x(c,l),x(u,c);for(var n=0;n<h.length;n+=1)h[n].m(u,null)},p:function(t,e){(t.title2||t.title)&&p!==(p=e.title2?e.title2:e.title)&&(s.data=p);var n=e.percents[1];if(t.percents){for(var i=0;i<n.length;i+=1){var r=w(w({},e),{each_value_1:n,list:n[i],list_index_1:i});h[i]?h[i].p(t,r):(h[i]=d(a,r),h[i].c(),h[i].m(u,null))}for(;i<h.length;i+=1)h[i].u(),h[i].d();h.length=n.length}t.bothBranches&&N(o,"max-width",e.bothBranches?"48%":"100%")},u:function(){k(o);for(var t=0;t<h.length;t+=1)h[t].u()},d:function(){C(h)}}}function z(t,e){var n,i;return{c:function(){n=y("small"),i=S(e.dataSource),this.h()},h:function(){n.className="data-source"},m:function(t,e){B(n,t,e),x(i,n)},p:function(t,e){t.dataSource&&(i.data=e.dataSource)},u:function(){k(n)},d:o}}function t(t){var e,n,i;n=t,(e=this)._handlers=Object.create(null),e._bind=n._bind,e.options=n,e.root=n.root||e,e.store=e.root.store||n.store,this._state=w({init:!1},t.data),this._recompute({figures2:1,figures:1,configList:1,limit:1,init:1},this._state),document.getElementById("svelte-16msz35-style")||((i=y("style")).id="svelte-16msz35-style",i.textContent=".svelte-16msz35.ep-horizontal-bar,.svelte-16msz35 .ep-horizontal-bar{font-family:'open sans condensed';border-bottom:3px solid #ddd;padding-bottom:1em;margin-bottom:1em}.svelte-16msz35.ep-horizontal-bar-wrapper,.svelte-16msz35 .ep-horizontal-bar-wrapper{display:flex;justify-content:space-between}.svelte-16msz35.ep-horizontal-bar-table-wrapper,.svelte-16msz35 .ep-horizontal-bar-table-wrapper{width:100%}.svelte-16msz35.table-wrapper,.svelte-16msz35 .table-wrapper{padding:10px;border:1px solid #efefef;background:#f9f9f9;border-radius:5px;box-shadow:4px 6px 14px -10px #999}.svelte-16msz35.ep-horizontal-bar-table,.svelte-16msz35 .ep-horizontal-bar-table{width:100%;font-family:'open sans condensed';font-size:.8em}.svelte-16msz35.ep-horizontal-bar-table td,.svelte-16msz35 .ep-horizontal-bar-table td{padding:3px 5px;white-space:nowrap;border-bottom:1px solid #ddd}.svelte-16msz35.ep-horizontal-bar-table th,.svelte-16msz35 .ep-horizontal-bar-table th{padding:3px 5px;white-space:nowrap;text-align-last:left;background:#f2f2f2}.svelte-16msz35.ep-horizontal-bar-graph,.svelte-16msz35 .ep-horizontal-bar-graph{width:100%}.svelte-16msz35.ep-horizontal-bar-graph .graph,.svelte-16msz35 .ep-horizontal-bar-graph .graph{height:22px;position:relative;line-height:22px;width:0;transition:all 250ms ease-in-out}.svelte-16msz35.ep-horizontal-bar-graph .graph > span,.svelte-16msz35 .ep-horizontal-bar-graph .graph > span{position:absolute;left:100%;display:inline-block;padding:0 4px}.svelte-16msz35.data-source,.svelte-16msz35 .data-source{display:block;text-align:right;font-size:.8em;color:#999;font-family:sans-serif;padding:.5em}@media(max-width:800px){.svelte-16msz35.ep-horizontal-bar-wrapper,.svelte-16msz35 .ep-horizontal-bar-wrapper{flex-direction:column}.svelte-16msz35.ep-horizontal-bar-table-wrapper,.svelte-16msz35 .ep-horizontal-bar-table-wrapper{max-width:100%!important}}",x(i,document.head));var r=this;t.root||(this._oncreate=[]),this._fragment=function(a,e){for(var o,s,l,i,c,r,u,p,h,d,f,t=e.percents[0],m=[],n=0;n<t.length;n+=1)m[n]=g(a,w(w({},e),{each_value:t,list:t[n],list_index:n}));var _=e.bothBranches&&v(a,e),b=e.dataSource&&z(a,e);return{c:function(){o=y("div"),s=y("div"),l=y("div"),i=y("h3"),c=S(e.title),r=S("\n         "),u=y("div"),p=y("table"),h=y("tbody");for(var t=0;t<m.length;t+=1)m[t].c();d=S("\n      "),_&&_.c(),f=S("\n   "),b&&b.c(),this.h()},h:function(){p.className="ep-horizontal-bar-table",u.className="table-wrapper",l.className="ep-horizontal-bar-table-wrapper",N(l,"max-width",e.bothBranches?"48%":"100%"),s.className="ep-horizontal-bar-wrapper",s.id="ep18-bar-percententuali",o.className="ep-horizontal-bar svelte-16msz35"},m:function(t,e){B(o,t,e),x(s,o),x(l,s),x(i,l),x(c,i),x(r,l),x(u,l),x(p,u),x(h,p);for(var n=0;n<m.length;n+=1)m[n].m(h,null);x(d,s),_&&_.m(s,null),x(f,o),b&&b.m(o,null)},p:function(t,e){t.title&&(c.data=e.title);var n=e.percents[0];if(t.percents){for(var i=0;i<n.length;i+=1){var r=w(w({},e),{each_value:n,list:n[i],list_index:i});m[i]?m[i].p(t,r):(m[i]=g(a,r),m[i].c(),m[i].m(h,null))}for(;i<m.length;i+=1)m[i].u(),m[i].d();m.length=n.length}t.bothBranches&&N(l,"max-width",e.bothBranches?"48%":"100%"),e.bothBranches?_?_.p(t,e):((_=v(a,e)).c(),_.m(s,null)):_&&(_.u(),_.d(),_=null),e.dataSource?b?b.p(t,e):((b=z(a,e)).c(),b.m(o,null)):b&&(b.u(),b.d(),b=null)},u:function(){k(o);for(var t=0;t<m.length;t+=1)m[t].u();_&&_.u(),b&&b.u()},d:function(){C(m),_&&_.d(),b&&b.d()}}}(this,this._state),this.root._oncreate.push(function(){(function(){var t=this;setTimeout(function(){t.initialRendering(),window.parent.postMessage({sentinel:"amp",type:"embed-size",height:document.body.scrollHeight},"*")},0)}).call(r),r.fire("update",{changed:{figures2:1,figures:1,configList:1,limit:1,init:1,bothBranches:1,title:1,percents:1,title2:1,dataSource:1},current:r._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),a(this._oncreate))}function y(t){return document.createElement(t)}function x(t,e){e.appendChild(t)}function w(t,e){for(var n in e)t[n]=e[n];return t}function S(t){return document.createTextNode(t)}function N(t,e,n){t.style.setProperty(e,n)}function B(t,e,n){e.insertBefore(t,n)}function k(t){t.parentNode.removeChild(t)}function C(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}function o(){}function a(t){for(;t&&t.length;)t.shift()()}function e(t){this.destroy=o,this.fire("destroy"),!(this.set=this.get=o)!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}return w(t.prototype,{destroy:e,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(!n)return;for(var i=0;i<n.length;i+=1){var r=n[i];r.__calling||(r.__calling=!0,r.call(this,e),r.__calling=!1)}},observe:function(e,t,n){var i=t.bind(this);n&&!1===n.init||i(this.get()[e],void 0);return this.on(n&&n.defer?"update":"state",function(t){t.changed[e]&&i(t.current[e],t.previous&&t.previous[e])})},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){if(this._set(w({},t)),this.root._lock)return;this.root._lock=!0,a(this.root._beforecreate),a(this.root._oncreate),a(this.root._aftercreate),this.root._lock=!1},teardown:e,_set:function(t){var e=this._state,n={},i=!1;for(var r in t)this._differs(t[r],e[r])&&(n[r]=i=!0);if(!i)return;this._state=w(w({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state);this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e}))},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:function(t,e){return t!=t?e==e:t!==e||t&&"object"===(void 0===t?"undefined":_typeof(t))||"function"==typeof t}}),w(t.prototype,{initialRendering:function(){this.set({init:!0})}}),t.prototype._recompute=function(t,e){t.figures2&&this._differs(e.bothBranches,e.bothBranches=!!e.figures2)&&(t.bothBranches=!0),(t.figures||t.figures2||t.configList||t.limit||t.init)&&this._differs(e.percents,e.percents=n(e.figures,e.figures2,e.configList,e.limit,e.init))&&(t.percents=!0)},t}();