(function(e){function t(t){for(var r,i,l=t[0],c=t[1],s=t[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"111c":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TripHeader"},[n("span",{staticClass:"site-title"},[e._v(" hey.trip ")]),n("ul",{attrs:{id:"menu"}},[e._l(e.anchors,(function(t){return[n("li",{key:t,attrs:{"data-menuanchor":t}},[n("a",{attrs:{href:"#"+t}},[e._v(" "+e._s(t)+" ")])])]}))],2)])},a=[],o={props:{anchors:Array}},i=o,l=(n("2542"),n("2877")),c=Object(l["a"])(i,r,a,!1,null,"7afb00bc",null);t["default"]=c.exports},"17f5":function(e,t,n){"use strict";var r=n("4ed6"),a=n.n(r);a.a},"22f1":function(e,t,n){},2542:function(e,t,n){"use strict";var r=n("22f1"),a=n.n(r);a.a},"47db":function(e,t,n){e.exports=n.p+"media/trip-thumbnail.5c54717f.mp4"},"4ed6":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("b69e");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("trip-head",{attrs:{anchors:e.options.anchors,page:e.page}}),n("full-page",{ref:"fullpage",attrs:{options:e.options,id:"fullpage"}},[n("div",{staticClass:"section"},[n("trip-page1")],1),n("div",{staticClass:"section"},[n("trip-page2")],1),n("div",{staticClass:"section"},[n("trip-page3")],1)])],1)},o=[],i=(n("99af"),{name:"app",components:{TripHead:n("111c").default,TripPage1:n("845f").default,TripPage2:n("bc2e").default,TripPage3:n("9667").default},data:function(){return{page:"page1",options:{licenseKey:"YOUR_KEY_HERE",afterLoad:this.afterLoad,scrollOverflow:!0,scrollBar:!1,menu:"#menu",navigation:!0,anchors:["hey.trip","recommend","challenge"],slidesNavigation:!0,slidesNavPosition:"bottom"}}},methods:{afterLoad:function(){console.log("After load")},addSection:function(e){e.preventDefault();var t=document.querySelectorAll(".fp-section").length+1,n=document.createElement("div");n.className="section",n.innerHTML="<h3>Section ".concat(t,"</h3>"),document.querySelector("#fullpage").appendChild(n);var r=document.createElement("li");r.setAttribute("data-menuanchor","page"+t),r.innerHTML='<a href="#page'.concat(t,'">Section').concat(t,"</a>");var a=document.querySelector("#menu");a.appendChild(r),this.options.anchors.push("page".concat(t)),this.$refs.fullpage.build()},removeSection:function(){var e=document.querySelector("#fullpage").querySelectorAll(".fp-section"),t=e[e.length-1];t.parentNode.removeChild(t),this.options.anchors.pop();var n=document.querySelectorAll("#menu li"),r=n[n.length-1];r.parentNode.removeChild(r)},toggleNavigation:function(){this.options.navigation=!this.options.navigation},toggleScrollbar:function(){console.log("Changing scrollbar..."),this.options.scrollBar=!this.options.scrollBar}}}),l=i,c=n("2877"),s=Object(c["a"])(l,a,o,!1,null,null,null),u=s.exports,p=n("a45e"),f=n.n(p);n("a0a0");r["a"].config.productionTip=!1,r["a"].use(f.a),r["a"].create=function(e){return new r["a"](e)}({el:"#app",render:function(e){return e(u)}})},"845f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"TripPage1"},[r("p",[e._v("Where you wanna go?")]),r("video",{attrs:{id:"myVideo",loop:"",muted:"",preload:"",autoplay:""},domProps:{muted:!0}},[r("source",{attrs:{src:n("47db"),type:"video/mp4"}})])])},a=[],o=(n("8f59"),n("2877")),i={},l=Object(o["a"])(i,r,a,!1,null,"9eef6778",null);t["default"]=l.exports},"8f59":function(e,t,n){"use strict";var r=n("db86"),a=n.n(r);a.a},9667:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TripPage3"},[n("p",{ref:"example",attrs:{contenteditable:"",spellcheck:"false"},domProps:{innerHTML:e._s(e.example)},on:{click:function(t){e.example="type here!"}}})])},a=[],o={data:function(){return{example:"how about type what you wanna do?"}}},i=o,l=n("2877"),c=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=c.exports},b69e:function(e,t,n){},bc2e:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TripPage2"},e._l(e.list,(function(t){return n("div",{key:t},[n("div",{staticClass:"slide"},[n("p",{staticClass:"city-title"},[e._v(e._s(t))]),n("img",{attrs:{src:e.publicPath+"images/"+t+".jpg"}})])])})),0)},a=[],o={data:function(){return{publicPath:"/",list:["Paris","Arizona","Budapest","Chicago"]}},props:[]},i=o,l=(n("17f5"),n("2877")),c=Object(l["a"])(i,r,a,!1,null,"734566a7",null);t["default"]=c.exports},db86:function(e,t,n){}});
//# sourceMappingURL=app.f8f2612f.js.map