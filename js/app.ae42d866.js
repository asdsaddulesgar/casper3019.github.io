(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)o=s[u],n[o]&&d.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var s=a[o];0!==n[s]&&(r=!1)}r&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},o={app:0},n={app:0},i=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-2d0ae91b":"563e443e","chunk-57a2eab5":"5e8382cd"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-57a2eab5":1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise(function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0ae91b":"31d6cfe0","chunk-57a2eab5":"691e436f"}[t]+".css",n=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===n))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],u=c.getAttribute("data-href");if(u===r||u===n)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete o[t],p.parentNode.removeChild(p),a(i)},p.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(p)}).then(function(){o[t]=0}));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,a){r=n[t]=[e,a]});e.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,a[1](i)}n[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),o=a.n(r);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("14c6"),a("08c1"),a("4842"),a("d9fc");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("notifications",{attrs:{group:"foo",position:"bottom right"}}),a("Navbar"),a("div",{staticClass:"container"},[a("router-view")],1),a("b-modal",{attrs:{"no-close-on-backdrop":"",id:"modal-create",title:"Create a new post","ok-only":"","no-stacking":""}},[a("form",[a("div",{staticClass:"form-group"},[a("label",[t._v("Region:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.region,expression:"data.region"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.data,"region",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"euw1"}},[t._v("EUW")]),a("option",{attrs:{value:"eun1"}},[t._v("EUNE")]),a("option",{attrs:{value:"na1"}},[t._v("NA")])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"recipient-name"}},[t._v("Summoner name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text",id:"recipient-name"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Primary position:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.primary,expression:"data.primary"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.data,"primary",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"top",disabled:"top"==t.data.secondary}},[t._v("Top")]),a("option",{attrs:{value:"jungle",disabled:"jungle"==t.data.secondary}},[t._v("Jungle")]),a("option",{attrs:{value:"middle",disabled:"middle"==t.data.secondary}},[t._v("Middle")]),a("option",{attrs:{value:"bottom",disabled:"bottom"==t.data.secondary}},[t._v("Bottom")]),a("option",{attrs:{value:"support",disabled:"support"==t.data.secondary}},[t._v("Support")])])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Secondary position:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.secondary,expression:"data.secondary"}],staticClass:"form-control",attrs:{id:"exampleFormControlSelect1"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.data,"secondary",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"top",disabled:"top"==t.data.primary}},[t._v("Top")]),a("option",{attrs:{value:"jungle",disabled:"jungle"==t.data.primary}},[t._v("Jungle")]),a("option",{attrs:{value:"middle",disabled:"middle"==t.data.primary}},[t._v("Middle")]),a("option",{attrs:{value:"bottom",disabled:"bottom"==t.data.primary}},[t._v("Bottom")]),a("option",{attrs:{value:"support",disabled:"support"==t.data.primary}},[t._v("Support")])])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"message-text"}},[t._v("Bio:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.bio,expression:"data.bio"}],staticClass:"form-control",attrs:{id:"message-text",maxlength:"128"},domProps:{value:t.data.bio},on:{input:function(e){e.target.composing||t.$set(t.data,"bio",e.target.value)}}})])]),a("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.postCreate()}}},[t._v("Next")])])]),a("b-modal",{attrs:{"no-close-on-backdrop":"",id:"modal-verify",title:"Verify your summoner","ok-only":""}},[a("p",[t._v('\n      Open your League of Legends client. Go to settings. Select "Vertification" and enter this code:\n      '),a("span",{staticClass:"badge badge-danger"},[t._v(t._s(t.my.code))]),t._v(" then finally click save. Once verifications gets sent you can click verify below to complete verification.\n    ")]),a("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.postVerify()}}},[t._v("Verify")])])])],1)},n=[],i=(a("7f7f"),a("ac6a"),a("96cf"),a("3b8d")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"success"}},[r("a",{staticClass:"navbar-brand mb-0 h1",attrs:{href:"#"}},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:a("cf05"),width:"30",height:"30",alt:""}}),t._v("\n      LeagueDuoFinder\n    ")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{href:"#",to:"/"}},[t._v("Wall")]),r("b-nav-item",{attrs:{href:"#",to:"/faq"}},[t._v("FAQ")])],1),r("b-navbar-nav",{staticClass:"ml-auto"},[r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-create",modifiers:{"modal-create":!0}}],staticClass:"btn btn-warning my-2 my-sm-0",attrs:{type:"submit"}},[t._v("Create a post")])])],1)],1)],1)},l=[],c={},u=c,d=a("2877"),p=Object(d["a"])(u,s,l,!1,null,null,null),m=p.exports,f={data:function(){return{data:{primary:"",secondary:"",region:"",name:"",bio:""},loading:{create:!1,verify:!1,fetch:!1},my:{code:"",id:""}}},methods:{refresh:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$store.commit("update",[]),t.prev=1,t.next=4,this.$http.get("http://localhost:8080/api/posts");case 4:e=t.sent,e.data.forEach(function(t){"euw1"==t.summoner.region?t.summoner.region="EUW":"eun1"==t.summoner.region?t.summoner.region="EUNE":"na1"==t.summoner.region&&(t.summoner.region="NA")}),this.$store.commit("update",e.data),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](1);case 11:case"end":return t.stop()}},t,this,[[1,9]])}));function e(){return t.apply(this,arguments)}return e}(),postCreate:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(this.data.name&&this.data.region&&this.data.bio&&this.data.primary&&this.data.secondary)){t.next=12;break}return t.prev=1,t.next=4,this.$http.post("http://localhost:8080/api/posts",{name:this.data.name,region:this.data.region,bio:this.data.bio,primary:this.data.primary,secondary:this.data.secondary});case 4:e=t.sent,e.data.error?this.$notify({type:"error",group:"foo",title:"Error:",text:e.data.error}):(this.my.id=e.data.summoner.id,this.my.code=e.data.code,this.$root.$emit("bv::show::modal","modal-verify","#btnShow")),t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](1);case 10:t.next=13;break;case 12:this.$notify({type:"error",group:"foo",title:"Error:",text:"Complete all the fields"});case 13:case"end":return t.stop()}},t,this,[[1,8]])}));function e(){return t.apply(this,arguments)}return e}(),postVerify:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.post("http://localhost:8080/api/posts/check",{id:this.my.id});case 3:e=t.sent,e.data.error?this.$notify({type:"error",group:"foo",title:"Error:",text:e.data.error}):(this.data.name="",this.data.region="",this.data.bio="",this.data.primary="",this.data.secondary="",this.refresh(),this.$root.$emit("bv::hide::modal","modal-verify","#btnShow")),t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}()},components:{Navbar:m}},v=f,h=(a("034f"),Object(d["a"])(v,o,n,!1,null,null,null)),b=h.exports,g=a("8c4f");r["default"].use(g["a"]);var y=new g["a"]({routes:[{path:"/",name:"wall",component:function(){return a.e("chunk-57a2eab5").then(a.bind(null,"6e5b"))}},{path:"/faq",name:"faq",component:function(){return a.e("chunk-2d0ae91b").then(a.bind(null,"0b2e"))}}]}),_=a("2f62");r["default"].use(_["a"]);var w=new _["a"].Store({state:{posts:[]},mutations:{update:function(t,e){t.posts=e}},actions:{}}),x=a("bc3a"),k=a.n(x),C=a("9f7b"),$=a.n(C),j=(a("f9e3"),a("2dd8"),a("ee98")),E=a.n(j);r["default"].prototype.$http=k.a,r["default"].use($.a),r["default"].use(E.a),r["default"].config.productionTip=!1,new r["default"]({router:y,store:w,render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.059ada60.png"}});
//# sourceMappingURL=app.ae42d866.js.map