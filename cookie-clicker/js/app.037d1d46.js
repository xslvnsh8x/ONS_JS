(function(e){function t(t){for(var r,c,i=t[0],s=t[1],u=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00f2":function(e,t,n){"use strict";n("1930")},1930:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainWrapper",attrs:{id:"app"}},[n("MainHeader"),n("MainContent"),n("MainFooter",{attrs:{author:"Stanislav Zavialov",year:"2021"}})],1)},a=[],c=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__wrapper center"},[n("h1",[e._v("My awesome cookie clicker!")])])])}],s={name:"MainHeader"},u=s,l=(n("9e85"),n("2877")),f=Object(l["a"])(u,c,i,!1,null,"10361902",null),p=f.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("small",{staticClass:"footer__small center"},[n("span",[e._v("© "+e._s(e.author))]),n("span",[e._v(e._s(e.year))])])])},d=[],v={name:"mainFooter",props:{author:String,year:String}},h=v,m=(n("a7e6"),Object(l["a"])(h,_,d,!1,null,"2f92f7ca",null)),b=m.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main"},[n("Cookie")],1)},C=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cookie"},[n("div",{staticClass:"cookie__counter"},[n("h2",{staticClass:"cookie__counter-heading"},[e._v(" You clicked "),n("span",{staticClass:"cookie__counter-num"},[e._v(e._s(e.counter))]),e._v(" times! ")])]),n("div",{staticClass:"cookie__clicker"},[n("div",{staticClass:"cookie__clicker-bg",on:{click:function(t){e.counter++}}})]),n("div",{staticClass:"cookie__goals"},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.counter>=10&&e.counter<20,expression:"counter >= 10 && counter < 20"}],staticClass:"cookie__goals-text"},[e._v("Congrats! You're a beginner cookie-clicker! =) ")]),n("p",{directives:[{name:"show",rawName:"v-show",value:e.counter>=20,expression:"counter >= 20"}],staticClass:"cookie__goals-text"},[e._v("Congrats! You're a pro cookie-clicker! =) ")])])])},y=[],w={name:"Cookie",data:function(){return{counter:0}}},O=w,x=(n("00f2"),Object(l["a"])(O,g,y,!1,null,"354f16c6",null)),j=x.exports,M={name:"MainContent",components:{Cookie:j},data:function(){return{show:!0}}},S=M,P=(n("73f8"),Object(l["a"])(S,k,C,!1,null,"7675782c",null)),$=P.exports,E={name:"App",components:{MainContent:$,MainFooter:b,MainHeader:p}},F=E,H=(n("5c0b"),Object(l["a"])(F,o,a,!1,null,null,null)),T=H.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(T)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"73f8":function(e,t,n){"use strict";n("d169")},"9c0c":function(e,t,n){},"9e85":function(e,t,n){"use strict";n("f254")},a7e6:function(e,t,n){"use strict";n("e3db")},d169:function(e,t,n){},e3db:function(e,t,n){},f254:function(e,t,n){}});
//# sourceMappingURL=app.037d1d46.js.map