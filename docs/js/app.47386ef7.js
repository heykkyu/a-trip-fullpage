(function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/production-sub-path/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"111c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TripHeader"},[n("ul",{attrs:{id:"menu"}},[e._l(e.anchors,(function(t){return[n("li",{key:t,attrs:{"data-menuanchor":t}},[n("a",{attrs:{href:"#"+t}},[e._v(" "+e._s(t)+" ")])])]}))],2)])},a=[],o={props:{anchors:Array}},i=o,c=(n("90b8"),n("2877")),l=Object(c["a"])(i,r,a,!1,null,"188bf400",null);t["default"]=l.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("trip-head",{attrs:{anchors:e.options.anchors,page:e.page}}),n("full-page",{attrs:{options:e.options,id:"fullpage"}},[n("div",{staticClass:"section"},[n("trip-page1")],1),n("div",{staticClass:"section"},[n("div",{staticClass:"slide"},[n("h3",[e._v("Slide 2.1")])]),n("div",{staticClass:"slide"},[n("h3",[e._v("Slide 2.2")])]),n("div",{staticClass:"slide"},[n("h3",[e._v("Slide 2.3")])])]),n("div",{staticClass:"section"},[n("h3",[e._v("Section 3")])])])],1)},o=[],i=(n("99af"),{name:"app",components:{TripHead:n("111c").default,TripPage1:n("845f").default},data:function(){return{page:"page1",options:{licenseKey:"YOUR_KEY_HERE",afterLoad:this.afterLoad,scrollOverflow:!0,scrollBar:!1,menu:"#menu",navigation:!0,anchors:["Popular","New","Challenge"],sectionsColor:["#41b883","#ff5f45","#0798ec","#fec401","#1bcee6","#ee1a59","#2c3e4f","#ba5be9","#b4b8ab"]}}},methods:{afterLoad:function(){console.log("After load")},addSection:function(e){e.preventDefault();var t=document.querySelectorAll(".fp-section").length+1,n=document.createElement("div");n.className="section",n.innerHTML="<h3>Section ".concat(t,"</h3>"),document.querySelector("#fullpage").appendChild(n);var r=document.createElement("li");r.setAttribute("data-menuanchor","page"+t),r.innerHTML='<a href="#page'.concat(t,'">Section').concat(t,"</a>");var a=document.querySelector("#menu");a.appendChild(r),this.options.anchors.push("page".concat(t)),this.$refs.fullpage.build()},removeSection:function(){var e=document.querySelector("#fullpage").querySelectorAll(".fp-section"),t=e[e.length-1];t.parentNode.removeChild(t),this.options.anchors.pop();var n=document.querySelectorAll("#menu li"),r=n[n.length-1];r.parentNode.removeChild(r)},toggleNavigation:function(){this.options.navigation=!this.options.navigation},toggleScrollbar:function(){console.log("Changing scrollbar..."),this.options.scrollBar=!this.options.scrollBar}}}),c=i,l=(n("034f"),n("2877")),s=Object(l["a"])(c,a,o,!1,null,null,null),u=s.exports,p=n("a45e"),f=n.n(p);n("a0a0");r["a"].config.productionTip=!1,r["a"].use(f.a),r["a"].create=function(e){return new r["a"](e)}({el:"#app",render:function(e){return e(u)}})},"845f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TripPage1"},[n("div",{staticClass:"slide"},[n("p",[e._v("Where you wanna go?")]),n("video",{attrs:{controls:"controls",loop:"",muted:"","data-autoplay":""},domProps:{muted:!0}},[n("source",{attrs:{src:"/images/main.mp4",type:"video/mp4"}})])])])},a=[],o=(n("a6ab"),n("2877")),i={},c=Object(o["a"])(i,r,a,!1,null,"7b0efc64",null);t["default"]=c.exports},"85ec":function(e,t,n){},"90b8":function(e,t,n){"use strict";var r=n("b0df"),a=n.n(r);a.a},a6ab:function(e,t,n){"use strict";var r=n("b7a2"),a=n.n(r);a.a},b0df:function(e,t,n){},b7a2:function(e,t,n){}});
//# sourceMappingURL=app.47386ef7.js.map