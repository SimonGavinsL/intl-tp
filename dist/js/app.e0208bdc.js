(function(e){function t(t){for(var a,s,c=t[0],u=t[1],d=t[2],l=0,i=[];l<c.length;l++)s=c[l],r[s]&&i.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(i.length)i.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},s={app:0},r={app:0},o=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"e6b265e4","chunk-13e2136e":"3433d22c","chunk-1a7e9f64":"5627d327","chunk-31a69de1":"0a6986b8","chunk-64125348":"1ff7198e","chunk-2d225ba9":"897391a2","chunk-692b03cd":"567a8385"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-13e2136e":1,"chunk-31a69de1":1,"chunk-64125348":1,"chunk-692b03cd":1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise(function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-13e2136e":"6c049e1f","chunk-1a7e9f64":"31d6cfe0","chunk-31a69de1":"74da55c7","chunk-64125348":"43a3d185","chunk-2d225ba9":"31d6cfe0","chunk-692b03cd":"6c049e1f"}[e]+".css",r=u.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var d=o[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===a||l===r))return t()}var i=document.getElementsByTagName("style");for(c=0;c<i.length;c++){d=i[c],l=d.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete s[e],f.parentNode.removeChild(f),n(o)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)}).then(function(){s[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=o);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),d=function(t){l.onerror=l.onload=null,clearTimeout(i);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+s+")");o.type=a,o.request=s,n[1](o)}r[e]=void 0}};var i=setTimeout(function(){d({type:"timeout",target:l})},12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"1bae":function(e,t,n){"use strict";var a=n("4d6d"),s=n.n(a);s.a},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(a)},s.resolve=r,e.exports=s,s.id="4678"},"4d6d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("a-layout",{attrs:{id:"components-layout-demo-top-side-2"}},[a("a-layout-header",{staticClass:"header"},[a("div",{staticClass:"logo",staticStyle:{"margin-top":"0"}},[a("img",{staticStyle:{width:"60px",height:"60px"},attrs:{alt:"Tongji logo",src:n("69a0")}})]),a("a-menu",{style:{lineHeight:"64px"},attrs:{theme:"light",mode:"horizontal",defaultSelectedKeys:["home"]}},[a("a-menu-item",{key:"home"},[a("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),a("a-menu-item",{key:"data"},[a("router-link",{attrs:{to:"/data"}},[e._v("Data")])],1),a("a-menu-item",{key:"model"},[a("router-link",{attrs:{to:"/model"}},[e._v("Model")])],1),a("a-menu-item",{key:"cloud"},[a("router-link",{attrs:{to:"/cloud"}},[e._v("Cloud")])],1),a("a-menu-item",{key:"about"},[a("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1)],1),a("br"),a("a-layout",[a("router-view")],1)],1)],1)},r=[],o={data:function(){return{collapsed:!1}}},c=o,u=(n("034f"),n("2877")),d=Object(u["a"])(c,s,r,!1,null,null,null),l=d.exports,i=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"Welcome to International Traffic Safety Data Platform!"}})],1)},b=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"hello"}},[n("h1",[e._v(e._s(e.msg))]),n("a-carousel",{attrs:{autoplay:""}},[n("div",[n("img",{attrs:{alt:"1",src:"https://www.tongji.edu.cn/images/20190518181413.jpg"}})]),n("div",[n("img",{attrs:{alt:"2",src:"https://www.tongji.edu.cn/images/20190513092134.jpg"}})]),n("div",[n("img",{attrs:{alt:"3",src:"https://www.tongji.edu.cn/images/20190513092141.jpg"}})]),n("div",[n("img",{attrs:{alt:"4",src:"https://www.tongji.edu.cn/images/20190505084652.jpg"}})])])],1)},m=[],h={props:{msg:String}},p=h,g=(n("1bae"),Object(u["a"])(p,j,m,!1,null,"78a04125",null)),v=g.exports,k={name:"home",components:{HelloWorld:v}},y=k,w=Object(u["a"])(y,f,b,!1,null,null,null),_=w.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"model"},[n("a-layout",[n("a-layout-sider",{staticStyle:{background:"#fff"},attrs:{width:"200"}},[n("a-menu",{style:{height:"100%",borderRight:0},attrs:{mode:"inline"}},[n("a-menu-item",{key:"browse"},[n("router-link",{attrs:{to:"/model/browse"}},[e._v("Browse")])],1),n("a-menu-item",{key:"model"},[n("router-link",{attrs:{to:"/model/uploadmodel"}},[e._v("Upload Model")])],1),n("a-menu-item",{key:"attach"},[n("router-link",{attrs:{to:"/model/attach"}},[e._v("Upload Attachment")])],1)],1)],1),n("a-layout-content",{style:{background:"#fff",padding:"24px",margin:0,minHeight:"280px"}},[n("router-view")],1)],1)],1)},x=[],O={name:"Model"},S=O,E=Object(u["a"])(S,z,x,!1,null,null,null),C=E.exports;a["a"].use(i["a"]);var P=new i["a"]({routes:[{path:"/",name:"home",component:_},{path:"/data",name:"data",component:function(){return Promise.all([n.e("chunk-1a7e9f64"),n.e("chunk-31a69de1")]).then(n.bind(null,"9352"))}},{path:"/model",component:C,children:[{path:"browse",component:function(){return Promise.all([n.e("chunk-1a7e9f64"),n.e("chunk-64125348")]).then(n.bind(null,"699e"))}},{path:"uploadmodel",component:function(){return n.e("chunk-13e2136e").then(n.bind(null,"7f3f"))}},{path:"attach",component:function(){return n.e("chunk-692b03cd").then(n.bind(null,"887b"))}}]},{path:"/cloud",name:"cloud",component:function(){return n.e("chunk-2d225ba9").then(n.bind(null,"e646"))}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),T=n("2f62");a["a"].use(T["a"]);var A=new T["a"].Store({state:{},mutations:{},actions:{}}),M=n("f23d");n("202f");a["a"].config.productionTip=!1,a["a"].use(M["a"]),new a["a"]({router:P,store:A,render:function(e){return e(l)}}).$mount("#app"),a["a"].prototype.$hostname="http://192.168.123.105:8080/"},"64a9":function(e,t,n){},"69a0":function(e,t,n){e.exports=n.p+"img/Tongji_Univ_logo.39c46a16.png"}});
//# sourceMappingURL=app.e0208bdc.js.map