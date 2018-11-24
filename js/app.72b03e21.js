(function(e){function t(t){for(var o,s,r=t[0],l=t[1],c=t[2],u=0,p=[];u<r.length;u++)s=r[u],i[s]&&p.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1819:function(e,t,n){},"1b3b":function(e,t,n){},"35f0":function(e,t,n){"use strict";var o=n("a89d"),i=n.n(o);i.a},"40fd":function(e){e.exports={name:"vue-breakpoint-component",version:"1.1.0",description:"A renderless component for composing CSS breakpoints",author:"Adi Sahar",main:"dist",scripts:{test:'echo "Error: no test specified" && exit 1',build:"node_modules/.bin/webpack --config webpack.config.js",start:"node_modules/.bin/webpack --config webpack.config.js --watch",link:"cd ./docs && npm link %npm_package_name%",unlink:"npm unlink","unlink-docs":"cd ./docs && npm unlink --no-save %npm_package_name%",predocs:"npm install && npm link && npm run link",docs:"npm run serve --prefix ./docs",deploy:"cd ./docs && npm run deploy",prerelease:"npm run build && npm version patch","prerelease-minor":"npm run build && npm version minor","prerelease-major":"npm run build && npm version major",release:"npm publish","release-minor":"npm publish","release-major":"npm publish",postrelease:"git push --follow-tags","postrelease-minor":"git push --follow-tags","postrelease-major":"git push --follow-tags","update-git-remotes":"git remote prune origin"},repository:{type:"git",url:"https://github.com/adi518/vue-breakpoint-component"},bugs:{url:"https://github.com/adi518/vue-breakpoint-component/issues"},license:"MIT",peerDependencies:{vue:"^2.x"},devDependencies:{"@babel/core":"^7.0.0-beta.51","@babel/helper-module-imports":"^7.0.0-beta.54","@babel/plugin-syntax-jsx":"^7.0.0-beta.54","@babel/preset-env":"^7.0.0-beta.54","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-loader":"^8.0.0-beta.4","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-vue-jsx":"^4.0.1","css-loader":"^1.0.0",eslint:"^4.19.1","eslint-config-standard":"^11.0.0","eslint-plugin-import":"^2.12.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.8.0","eslint-plugin-standard":"^3.1.0","markdown-loader":"^4.0.0","node-sass":"^4.9.2","sass-loader":"^7.0.3","url-loader":"^1.0.1","vue-loader":"^15.2.4","vue-style-loader":"^4.1.0","vue-template-compiler":"^2.5.16",webpack:"^4.12.0","webpack-bundle-analyzer":"^2.13.1","webpack-cli":"^3.0.8"},dependencies:{capitalize:"^1.0.0","custom-event-polyfill":"^0.3.0","lodash.debounce":"^4.0.8","lodash.isnumber":"^3.0.3","lodash.kebabcase":"^4.1.1","lodash.merge":"^4.6.1"}}},"44c6":function(e,t,n){"use strict";var o=n("bbed"),i=n.n(o);i.a},"490c":function(e,t,n){"use strict";var o=n("1b3b"),i=n.n(o);i.a},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"_static",function(){return X}),n.d(o,"dynamic",function(){return J}),n.d(o,"router",function(){return Q});n("cadf"),n("551c"),n("097d"),n("db4d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-menu",{attrs:{routes:e.routes,items:"2",exclude:["foo","bar"]}}),n("router-view")],1)},s=[],r=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs"},[n("div",{staticClass:"docs-container docs-container--has-jumbotron js-vh-fix",style:{height:e.demo.model.innerHeightPx}},[n("div",{staticClass:"docs-jumbotron"},[n("img",{staticClass:"docs-vue-logo mb-1",attrs:{src:e.assets.logo}}),n("h1",{staticClass:"docs-h1"},[e._v("Vue Breakpoint")]),n("p",{staticClass:"docs-tagline"},[e._v("\n        "+e._s(e.pkg.description)+"\n      ")]),n("v-breakpoint",{model:{value:e.demo.model,callback:function(t){e.$set(e.demo,"model",t)},expression:"demo.model"}}),n("div",{staticClass:"docs-state text-center mb-3"},[e._v("\n        ( "+e._s(e.normalize(e.demo.model.breakpoint))+" )\n      ")]),n("div",{ref:"emoji",staticClass:"docs-emoji mb-20",on:{mouseover:e.animateEmoji}},[n("span",{style:"font-size: "+e.emojiSize+"; transition: font-size .2s"},[e._v("😸")])]),n("div",{staticClass:"mb-5"},[n("a",{staticClass:"github-button",attrs:{href:e.flags.production&&e.pkg.repository.url,"data-icon":"octicon-star","data-show-count":"true","aria-label":"Star adi518/vue-breakpoint-component on GitHub"}},[e._v("Star")])]),n("p",{staticClass:"docs-credit mb-0"},[e._v("\n        ~ Made with "),n("v-octicon",{staticStyle:{fill:"red",width:"1.3rem",height:"1.3rem"},attrs:{"icon-name":"heart"}}),e._v(" by "),n("a",{staticClass:"docs-anchor--author",attrs:{href:"https://github.com/adi518",target:"_blank"}},[e._v("@adi518")]),e._v(" ~\n      ")],1)],1),n("a",{staticClass:"docs-fixed-anchor docs-c-pointer",attrs:{tabindex:""},on:{click:function(t){e.scrollTo("docs")}}},[e._v("Install, Examples & Documentation")])]),n("div",{ref:"docs",staticClass:"docs-container docs-min-100vh pb-5 vh-for-mobile"},[n("div",{staticClass:"container docs-clearfix",class:e.demo.model.noMatch&&["pl-3","pr-3"]||"p-0"},[n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.readme)}})])]),n("div",{staticClass:"docs-version"},[e._v(e._s(e.pkg.version))]),n("v-git-ribbon",{attrs:{"fill-color":"lightslategrey","octo-color":"#18202a",href:e.pkg.repository.url}})],1)},c=[],d=n("be94"),u=n("40fd"),p=n("eeed"),m=n.n(p),h=n("a788"),f=n.n(h),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",e._b({staticClass:"github-corner"},"a",{href:e.href,target:e.target,ariaLabel:e.ariaLabel},!1),[n("svg",e._b({style:"fill: "+e.fillColor+"; color:"+e.octoColor+"; position: absolute; top: 0; border: 0; right: 0;",attrs:{"aria-hidden":"true",viewBox:"0 0 250 250"}},"svg",{width:e.width,height:e.height},!1),[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{fill:"currentColor",d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"}}),n("path",{staticClass:"octo-body",attrs:{fill:"currentColor",d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"}})])])},v=[],b={name:"VGitRibbon",props:{href:{type:String,required:!0},target:{type:String,default:"_blank"},fillColor:{type:String,default:"#ffffff"},octoColor:{type:String,default:"#151513"},width:{type:String,default:"80"},height:{type:String,default:"80"},ariaLabel:{type:String,default:"View source on Github"}},inheritAttrs:!1},k=b,w=(n("44c6"),n("2877")),y=Object(w["a"])(k,g,v,!1,null,"230c7890",null);y.options.__file="GitRibbon.vue";var x=y.exports,_=n("dc27"),C=Object(d["a"])({},new _["Ctor"](i["default"],{experimental:!0})),j=C.VShowAt,S=C.VHideAt,M=C.VBreakpoint,A=n("c197"),T=n.n(A),q=n("9b6c"),E=n.n(q),z=n("eceb"),V=n.n(z),I={name:"VDocs",components:{VShowAt:j,VHideAt:S,VOcticon:f.a,VGitRibbon:x,VBreakpoint:M},data:function(){return{pkg:u,demo:{model:new _["Model"]},assets:{logo:m.a},flags:{production:!0,development:!1},markdowns:{readme:V.a}}},mounted:function(){window.setTimeout(T.a.highlightAll)},computed:{emojiSize:function(){switch(this.demo.model.breakpoint){case"small":return"4rem";case"medium":return"5rem";case"large":return"6rem";case"xlarge":return"7rem";default:return"3rem"}},emojiElement:function(){return this.getElementByRef("emoji")}},methods:{scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.getElementByRef(e).scrollIntoView(Object(d["a"])({behavior:"smooth",block:"start"},t))},getElementByRef:function(e){var t=this.$refs[e];return t instanceof Element?t:(t=this.$refs[e].el,t instanceof Element?t:void 0)},normalize:function(e){return e?"xlarge"===e?"X-Large":E()(e):"X-Small"},animateEmoji:function(){var e=this;window.requestAnimationFrame(function(){var t=e.emojiElement;t.style.animation="none",t.offsetHeight,t.style.animation=null})}}},B=I,L=(n("9806"),Object(w["a"])(B,l,c,!1,null,null,null));L.options.__file="Docs.vue";var O=L.exports;n("456d"),n("ac6a"),n("5df3"),n("1c4c");function N(e,t){Object.defineProperty(e,"parentNode",{configurable:!0,writable:!1,value:t})}function P(e){Object.defineProperty(e,"parentNode",{configurable:!0,writable:!0,value:null})}var D={directives:{if:{inserted:function(e){console.log(e)}},fragment:{inserted:function(e){var t=document.createDocumentFragment(),n=e.parentNode,o=Array.from(e.childNodes),i=document.createComment("--fragment:head"),a=document.createComment("--fragment:tail");t.appendChild(i),o.forEach(function(e){return t.appendChild(e)}),t.appendChild(a),n.insertBefore(t,e),n.removeChild(e),o.forEach(function(t){return N(t,e)}),e.__hooks__={appendChild:e.appendChild,insertBefore:e.insertBefore,removeChild:e.removeChild},e.appendChild=function(t){var o=n.insertBefore(t,i);return t.parentNode!==e&&N(t,e),o},e.insertBefore=function(t,o){var i=n.insertBefore(t,o);return t.parentNode!==e&&N(t,e),i},e.removeChild=function(e){return P(e),n.removeChild(e)}},unbind:function(e){e.__hooks__&&(Object.keys(e.__hooks__).forEach(function(t){e[t]=e.__hooks__[t]}),delete e.__hooks__)}}},render:function(e){return e("div",{directives:[{name:"fragment"}]},this.$slots.default)}},R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"docs-fragment container"},[n("h1",{staticClass:"docs-h1 mt-20"},[e._v(" Fragment Demo ")]),e._m(0),n("h2",{staticClass:"docs-h2 mt-40"},[e._v(" Static DOM Insertion ")]),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns._static)}}),n("h3",{staticClass:"docs-h2 mt-10"},[e._v("Result")]),n("i",[n("fragment",[e._v("\n      Text node (1).\n      Text node (2).\n    ")])],1),n("fragment",[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"d-inline-flex mt-20",staticStyle:{"background-color":"#f29240",color:"#18202a","border-radius":"0.25rem"}},[n("span",{staticStyle:{"font-size":"1rem",padding:"0.8rem"}},[e._v(" Element node (1) 😸 ")])]),n("div",{staticClass:"d-inline-flex mt-20 ml-10",staticStyle:{"background-color":"#f29240",color:"#18202a","border-radius":"0.25rem"}},[n("span",{staticStyle:{"font-size":"1rem",padding:"0.8rem"}},[e._v(" Element node (2) 😸 ")])])])]),n("h2",{staticClass:"docs-h2 mt-40"},[e._v(" Dynamic DOM Insertion ")]),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.dynamic)}}),n("h3",{staticClass:"docs-h2 mt-10"},[e._v("Result")]),n("p",[e._v("\n    Use the toggle buttons to toggle the addition and removal of different nodes types.\n  ")]),n("div",{staticClass:"docs-buttons d-flex"},[n("button",{class:["docs-button btn btn-primary",{"btn-outline-success":e.flags.text}],on:{click:function(t){e.toggle("text")}}},[e._v(" Toggle Text Node ")]),n("button",{class:["docs-button btn btn-primary",{"btn-outline-success":e.flags.element}],on:{click:function(t){e.toggle("element")}}},[e._v(" Toggle Element Node ")])]),n("div",{class:{"mt-20":e.flags.text}}),n("i",[n("fragment",[e.flags.text?[e._v("\n        Dynamic text node (1).\n        Dynamic text node (2).\n      ")]:e._e()],2)],1),n("fragment",[e.flags.element?[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"d-inline-flex mt-20",staticStyle:{"background-color":"rgb(66, 184, 131)","border-radius":"0.25rem"}},[n("span",{staticStyle:{"font-size":"1rem",padding:"0.8rem"}},[e._v(" Dynamic Element node (1) 😸 ")])]),n("div",{staticClass:"d-inline-flex mt-20 ml-10",staticStyle:{"background-color":"rgb(66, 184, 131)","border-radius":"0.25rem"}},[n("span",{staticStyle:{"font-size":"1rem",padding:"0.8rem"}},[e._v(" Dynamic Element node (2) 😸 ")])])])]:e._e()],2),n("h2",{staticClass:"docs-h2 mt-40"},[e._v(" V-If Directive ")]),n("v-hide-at",{attrs:{large:""}},[n("span",{staticStyle:{"font-size":"2rem"}},[e._v("😸")]),n("span",{staticStyle:{"font-size":"2rem"}},[e._v("😸")])]),n("h2",{staticClass:"docs-h2 mt-40"},[e._v(" With Router-View ")]),n("ul",[n("li",[n("router-link",{attrs:{to:{name:"fragment"}}},[e._v("Default")])],1),n("li",[n("router-link",{attrs:{to:{name:"foo"}}},[e._v("Foo")])],1),n("li",[n("router-link",{attrs:{to:{name:"bar"}}},[e._v("Bar")])],1)]),n("div",{staticClass:"docs-markdown",domProps:{innerHTML:e._s(e.markdowns.router)}}),n("h3",{staticClass:"docs-h2 mt-10"},[e._v("Result")]),n("div",[n("router-view")],1),n("h2",{staticClass:"docs-h2 mt-40"},[e._v(" With Nesting ")]),n("fragment",[n("fragment",[e._v("Foo")])],1),n("footer",{staticClass:"mt-50"})],1)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mt-10"},[e._v("\n    If you enabled the "),n("code",[e._v("experimental")]),e._v(" flag,\n    you should be able to import and use the "),n("code",[e._v("Fragment")]),e._v(" component,\n    which is based on @y-nk hack at "),n("a",{attrs:{href:"https://github.com/y-nk/vue-fragment"}},[e._v("GitHub")]),e._v(".\n  ")])}],F=(n("3846"),n("8785")),G=n("0e54"),$=n.n(G);function W(){var e=Object(F["a"])(["\n<div>\n  <router-view></router-view>\n</div>\n"]);return W=function(){return e},e}function Z(){var e=Object(F["a"])(['\n<fragment>\n  <template v-if="showText">\n    Dynamic text node (1).\n    Dynamic text node (2).\n  </template>  \n  <template v-if="showElement">\n    <div> Element node (1) 😸 </div>\n    <div> Element node (2) 😸 </div>  \n  </template>\n</fragment>\n']);return Z=function(){return e},e}function U(){var e=Object(F["a"])(["\n<fragment>\n  Text node (1).\n  Text node (2).\n  <div> Element node (1) 😸 </div>\n  <div> Element node (2) 😸 </div>\n</fragment>\n"]);return U=function(){return e},e}function Y(e){return"```html".concat(e,"```")}var X=$()(Y(U())),J=$()(Y(Z())),Q=$()(Y(W())),K={components:{Fragment:D,VHideAt:S},data:function(){return{flags:{text:!1,element:!1},markdowns:o}},mounted:function(){window.setTimeout(T.a.highlightAll)},methods:{toggle:function(e){this.flags[e]=!this.flags[e]}}},ee=K,te=(n("bf01"),Object(w["a"])(ee,R,H,!1,null,null,null));te.options.__file="Fragment.vue";te.exports;i["default"].use(r["a"]);var ne=[{path:"/",name:"documentation",component:O}];var oe=new r["a"]({routes:ne}),ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["v-menu","clearfix",e.classes]},[n("div",{class:["token",{"is-open":e.classes["is-open"]}],style:e.computedTokenStyle,on:{"&touchstart":function(t){return e.toggle(t)},click:function(t){return t.stopPropagation(),t.preventDefault(),e.toggle(t)}}}),n("ul",{ref:"menu",class:["menu",{"is-open":e.classes["is-open"]}],style:e.menuStyle,on:{"&touchstart":function(e){}}},[e._l(e.computedRoutes,function(t,o){return n("li",{key:o,style:t.hasNamedParent&&t.level&&{"text-indent":" "+t.level+"rem"}},[t.name?n("router-link",{attrs:{to:{name:t.name}},domProps:{innerHTML:e._s(t.displayName)}}):e._e()],1)}),e._l(e.computedItems,function(t,o){return[e.$slots["item-"+(o+1)]?n("li",{key:"item-"+o},[e._t("item-"+(o+1))],2):e._e()]}),e.$slots["last-child"]?n("li",[e._t("last-child")],2):e._e()],2)])},ae=[],se=(n("96cf"),n("1da1")),re=(n("f751"),n("c5f6"),n("7f7f"),n("6762"),n("2fdb"),n("0db4")),le=n.n(re),ce=n("f95d"),de=n.n(ce),ue=n("eae1"),pe={name:"VMenu",props:{items:{type:String,default:"0"},routes:{type:Array,default:function(){return[]}},exclude:{type:Array,default:function(){return[]}},tokenStyle:{type:Object,default:function(){return{}}},menuStyle:{type:Object,default:function(){return{backgroundColor:"rgba(0, 0, 0, 0.5)"}}}},data:function(){return{flags:{open:!1}}},watch:{"flags.open":function(e){this.emitToggle(e)}},mounted:function(){document.addEventListener("click",this.dismiss),document.addEventListener("touchstart",this.dismiss),window.addEventListener("resize",this.handleResize)},destroyed:function(){document.removeEventListener("click",this.dismiss),document.removeEventListener("touchstart",this.dismiss),window.removeEventListener("resize",this.handleResize)},computed:{classes:function(){return{"is-open":this.flags.open}},computedRoutes:function(){var e=this;return le()(Object(ue["flattenRoutes"])(this.routes),function(t){return e.exclude.includes(t.name||t.path)}).map(function(e){return e.displayName=e.name?de()(e.name):void 0,e})},computedItems:function(){return Array.from(Array(Number(this.items))).map(function(e,t){return t+1})},computedTokenStyle:function(){return Object.assign({},{backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTYuMzIgMTcwLjAyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQyYjg4Mzt9LmNscy0ye2ZpbGw6IzM1NDk1ZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ288L3RpdGxlPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMjAuODMgMCA5OC4xNiAzOS4yNiA3NS40OSAwIDAgMCA5OC4xNiAxNzAuMDIgMTk2LjMyIDAgMTIwLjgzIDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTIwLjgzIDAgOTguMTYgMzkuMjYgNzUuNDkgMCAzOS4yNiAwIDk4LjE2IDEwMi4wMSAxNTcuMDYgMCAxMjAuODMgMCIvPjwvc3ZnPg==)"},this.tokenStyle)}},methods:{toggle:function(e){[!0,!1].includes(e)?this.flags.open=e:this.flags.open=!this.flags.open,this.$emit("toggle",this.flags.open)},dismiss:function(){this.toggle(!1)},emitToggle:function(){var e=Object(se["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=this,e.t1=t?"open":"close",e.next=4,this.getWidth();case 4:e.t2=e.sent,e.t3={width:e.t2},e.t0.$emit.call(e.t0,e.t1,e.t3);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),handleResize:function(){this.emitToggle(this.flags.open)},getWidth:function(){var e=this;return new Promise(function(t){window.requestAnimationFrame(function(){t(e.$refs.menu.getBoundingClientRect().width)})})}}},me=pe,he=(n("35f0"),Object(w["a"])(me,ie,ae,!1,null,"7f358e43",null));he.options.__file="Menu.vue";var fe=he.exports,ge={name:"App",components:{VMenu:fe},data:function(){return{routes:ne}}},ve=ge,be=(n("5c0b"),n("490c"),Object(w["a"])(ve,a,s,!1,null,null,null));be.options.__file="App.vue";var ke=be.exports,we=n("0284"),ye=n.n(we);i["default"].config.productionTip=!1,i["default"].use(ye.a,{id:"UA-48463434-5",router:oe}),new i["default"]({router:oe,render:function(e){return e(ke)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("1819"),i=n.n(o);i.a},"7e6e":function(e,t,n){},9771:function(e,t,n){},9806:function(e,t,n){"use strict";var o=n("9771"),i=n.n(o);i.a},a89d:function(e,t,n){},bbed:function(e,t,n){},bf01:function(e,t,n){"use strict";var o=n("7e6e"),i=n.n(o);i.a},eceb:function(e,t){e.exports='<h2 id="install">Install</h2>\n<pre><code class="language-bash">$ npm install --save vue-breakpoint-component</code></pre>\n<h2 id="usage">Usage</h2>\n<p>To use the component in your templates, simply import and register with your component:</p>\n<h3 id="script">Script</h3>\n<pre><code class="language-js">import { VBreakpoint } from &#39;vue-breakpoint-component&#39;\n\nexport default {\n  components: {\n    VBreakpoint\n  }\n}</code></pre>\n<h3 id="template">Template</h3>\n<pre><code class="language-html">&lt;v-breakpoint&gt;\n  &lt;div slot-scope=&quot;scope&quot;&gt;\n    &lt;span v-if=&quot;scope.isSmall&quot;  style=&quot;font-size: 2rem&quot;&gt;   😸  &lt;/span&gt;\n    &lt;span v-if=&quot;scope.isMedium&quot; style=&quot;font-size: 4rem&quot;&gt;   😸  &lt;/span&gt;\n    &lt;span v-if=&quot;scope.isLarge&quot;  style=&quot;font-size: 6rem&quot;&gt;   😸  &lt;/span&gt;\n    &lt;span v-if=&quot;scope.isXlarge&quot; style=&quot;font-size: 8rem&quot;&gt;   😸  &lt;/span&gt;\n    &lt;span v-if=&quot;scope.noMatch&quot;  style=&quot;font-size: 10rem&quot;&gt;  😸  &lt;/span&gt;\n  &lt;/div&gt;\n&lt;/v-breakpoint&gt;</code></pre>\n<h2 id="global-install">Global Install</h2>\n<p>You can also choose to install the component globally. This will install three components <code>v-breakpoint</code>, <code>v-show-at</code>, <code>v-hide-at</code>.</p>\n<pre><code class="language-js">import Vue from &#39;vue&#39;\n\nimport { Install as VBreakpoint } from &#39;vue-breakpoint-component&#39;\n\nVue.use(VBreakpoint)</code></pre>\n<h2 id="show-at-hide-at-usage">Show-At/Hide-At Usage</h2>\n<p>To use the component in your templates, simply cherry-import and register with your component.</p>\n<h3 id="script">Script</h3>\n<pre><code class="language-js">import { VShowAt } from &#39;vue-breakpoint-component&#39;\n\nexport default {\n  components: { VShowAt }\n}</code></pre>\n<h3 id="template">Template</h3>\n<pre><code class="language-html">&lt;v-show-at small&gt;     😸  &lt;/v-show-at&gt;\n&lt;v-show-at medium&gt;    😺  &lt;/v-show-at&gt;\n&lt;v-show-at large&gt;     😽  &lt;/v-show-at&gt;\n&lt;v-show-at xlarge&gt;    🐱  &lt;/v-show-at&gt;\n&lt;v-show-at no-match&gt;  😿  &lt;/v-show-at&gt; &lt;!-- Aka Bootstrap 4 &quot;xs&quot; --&gt;</code></pre>\n<h2 id="multiple-root-elements-experimental-">Multiple Root Elements (Experimental)</h2>\n<p>Notice you can also show/hide multiple elements using an experimental Fragment-like component hack, described <a href="#experimental-features">here</a>.</p>\n<h3 id="-note">🚧 Note</h3>\n<p>To unlock this feature, you will have to <a href="#configuration">configure</a> the component with the <code>experimental</code> flag.</p>\n<h3 id="template">Template</h3>\n<pre><code class="language-html">&lt;v-show-at small&gt;\n  &lt;span&gt;😸&lt;/span&gt;\n&lt;/v-show-at&gt;</code></pre>\n<h2 id="v-model">V-Model</h2>\n<p>You can also leverage the breakpoint state without composing inside it, using a <code>v-model</code>.</p>\n<h3 id="template">Template</h3>\n<pre><code class="language-html">&lt;v-breakpoint v-model=&quot;model&quot;&gt;&lt;/v-breakpoint&gt;\n&lt;div :style=&quot;style&quot;&gt;&lt;/div&gt;</code></pre>\n<h3 id="script">Script</h3>\n<pre><code class="language-js">import { VBreakpoint, Model } from &#39;vue-breakpoint-component&#39;\n\nexport default {\n  components: {\n    VBreakpoint\n  },\n  data: () =&gt; ({\n    model: new Model()\n  }),\n  computed: {\n    style() {\n      if (this.model.isSmall) {\n        return {\n          width: &#39;1rem&#39;,\n          height: &#39;1rem&#39;\n        }\n      }\n      else if (this.model.isMedium) {\n        return {\n          width: &#39;2rem&#39;,\n          height: &#39;2rem&#39;\n        }\n      }\n      else if (this.model.isLarge) {\n        return {\n          width: &#39;3rem&#39;,\n          height: &#39;3rem&#39;\n        }\n      }\n      else if (this.model.isXlarge) {\n        return {\n          width: &#39;3rem&#39;,\n          height: &#39;3rem&#39;\n        }\n      }\n    }\n  }\n}</code></pre>\n<h2 id="api-props">API Props</h2>\n<pre><code class="language-js">debounceTime: {\n  type: Number,\n  default: 50,\n  description: &#39;Time to wait before invoking resize handler.&#39;\n}</code></pre>\n<h2 id="api-events">API Events</h2>\n<p>The component emits two core events, <code>input</code> and <code>change</code>. The <code>input</code> event is required for <code>v-model</code> usage, but other than that, it&#39;s fairly similar to <code>change</code> event. Each of these events benefit different composition styles.</p>\n<h3 id="payloads">Payloads</h3>\n<h4 id="input-and-change-events-object-">Input and Change Events <code>[Object]</code></h4>\n<p>Each of these events has the same payload. Besides breakpoint state, they also supply some auxiliary state, like <strong>viewport</strong> and current <strong>inner window dimensions</strong> (which are also aliased for convenience). Example:</p>\n<pre><code class="language-js">{\n  breakpoint: &quot;small&quot;\n  isSmall: true\n  isMedium: false\n  isLarge: false\n  noMatch: false\n  iw: 623\n  ih: 1077\n  innerWidth: 623\n  innerHeight: 1077\n  vw: 1920\n  vh: 1200\n  viewportHeight: 1200\n  viewportHeightPx: &#39;1200px&#39;,\n  viewportWidth: 1920,\n  viewportWidthPx: &#39;1920px&#39;\n}</code></pre>\n<h3 id="breakpoint-event-string-">Breakpoint Event <code>[String]</code></h3>\n<pre><code class="language-js">&#39;small&#39; | &#39;medium&#39; | &#39;large&#39; | &#39;xlarge&#39; // Etc&#39;</code></pre>\n<h3 id="breakpoint-namespace-event">Breakpoint-Namespace Event</h3>\n<p>Besides those events, the component also emits a breakpoint-namespace event per breakpoint defined. Thus, you can do something like:</p>\n<pre><code class="language-html">&lt;v-breakpoint @small=&quot;handleSmall&quot;&gt;&lt;/v-breakpoint&gt;\n&lt;v-breakpoint @medium=&quot;handleMedium&quot;&gt;&lt;/v-breakpoint&gt;\n&lt;v-breakpoint @large=&quot;handleLarge&quot;&gt;&lt;/v-breakpoint&gt;\n&lt;v-breakpoint @xlarge=&quot;handleXlarge&quot;&gt;&lt;/v-breakpoint&gt;\n&lt;v-breakpoint @no-match=&quot;handleNoMatch&quot;&gt;&lt;/v-breakpoint&gt; &lt;!-- Aka Bootstrap 4 &quot;xs&quot; --&gt;</code></pre>\n<h2 id="configuration">Configuration</h2>\n<p>The default breakpoints are based on <a href="https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap 4 (Stable)</a>. To customize the component you will have to use the descriptor Constructor. Start off by creating a new component asset, e.g.: <code>VBreakpoint.js</code>. Then, use the following snippet and adjust configuration to your needs.</p>\n<pre><code class="language-js">// &lt;project-root&gt;/src/components/VBreakpoint.js\n\nimport Vue from &#39;vue&#39;\nimport { Ctor } from &#39;vue-breakpoint-component&#39;\n\nexport { Model } from &#39;vue-breakpoint-component&#39;\n\nconst config = {\n  debounceTime: 50,\n  experimental: false,\n  breakpoints: {\n    small: &#39;(min-width: 576px)&#39;,\n    medium: &#39;(min-width: 768px)&#39;,\n    large: &#39;(min-width: 992px)&#39;,\n    xlarge: &#39;(min-width: 1200px)&#39;\n    ...\n  }\n}\n\nconst components = { ...new Ctor(Vue, config) }\n\nexport const VShowAt = components.VShowAt\nexport const VHideAt = components.VHideAt\nexport const VBreakpoint = components.VBreakpoint\n\nexport default VBreakpoint</code></pre>\n<h3 id="usage">Usage</h3>\n<p>Import <strong>locally</strong> and use as you would normally.</p>\n<pre><code class="language-js">// Local imports\nimport { VShowAt, VHideAt, VBreakpoint, Model } from &#39;./VBreakpoint&#39;\n\nexport default {\n  components: {\n    VShowAt,\n    VHideAt,\n    VBreakpoint\n  },\n  data: () =&gt; ({\n    model: new Model()\n  })\n}</code></pre>\n<h3 id="default-breakpoints-bootstrap-4-">Default Breakpoints (Bootstrap 4)</h3>\n<pre><code class="language-css">/**\n* Extra small devices (portrait phones, less than 576px)\n* No media query for &quot;xs&quot; since this is the default in Bootstrap.\n*/\n\n/* Small devices (landscape phones, 576px and up) */\n@media (min-width: 576px) { /* ... */ }\n\n/* Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) { /* ... */ }\n\n/* Large devices (desktops, 992px and up) */\n@media (min-width: 992px) { /* ... */ }\n\n/* Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) { /* ... */ }</code></pre>\n<h3 id="custom-breakpoints">Custom Breakpoints</h3>\n<p>You can define an <strong>infinite</strong> amount of breakpoints. For media-query syntax see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">MDN</a>.</p>\n<h2 id="experimental-features">Experimental Features</h2>\n<h4 id="wrapping-multiple-root-elements-fragment-hack-">Wrapping Multiple Root Elements (Fragment Hack)</h4>\n<p>As you may know, Vue does not support a stateful <code>Fragment</code> component, which allows you to render a component with multiple root elements, overruling the &quot;single root element&quot; principle dictated at the outset of component-based architecture. It was introduced to React during a full re-write. You can learn about it from <a href="https://reactjs.org/docs/fragments.html">React docs</a>. Vue is likely to follow suit in a similar manner (probably with Vue 3). This feature request is currently discussed <a href="https://github.com/vuejs/vue/issues/7088">here</a>. Meanwhile, I decided to hack a Fragment component, which is also incorporated into this component, thanks to Github user <a href="https://github.com/y-nk">y-nk</a>. I elaborated his <a href="https://github.com/y-nk/vue-fragments">solution</a> so it can also show/hide content (using directives like <code>v-show</code> or <code>v-if</code> won&#39;t work here).</p>\n<h4 id="-note">🚧 Note</h4>\n<p>Since this is a hack, it is likely not to be extended into a fully supported feature. Feel free to contribute back though.</p>\n<h2 id="browser-support">Browser Support</h2>\n<p>This component relies on <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia">matchMedia</a> API (IE 10+). For older browsers and IE, you will need a polyfill. There&#39;s <a href="https://github.com/paulirish/matchMedia.js/">@paulirish</a> and <a href="https://github.com/weblinc/media-match">@weblinc</a>. The latter seems more maintained.</p>\n<h2 id="related-links">Related Links</h2>\n<ul>\n<li><a href="http://dpi.lv/">dpi.lv</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using media queries</a></li>\n<li><a href="https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints">Bootstrap 4 responsive breakpoints</a></li>\n<li><a href="https://zellwk.com/blog/responsive-grid-system/">How to build a responsive grid system</a></li>\n</ul>\n<h2 id="support">Support</h2>\n<p>Please open an <a href="https://github.com/adi518/vue-breakpoint-component/issues">issue</a> for support.</p>\n<h2 id="license">License</h2>\n<p>Copyright (c) 2018 <a href="https://github.com/adi518">Adi Sahar</a> by <a href="https://opensource.org/licenses/MIT">MIT</a></p>\n'},eeed:function(e,t,n){e.exports=n.p+"img/logo-gradient.d8b7881e.png"}});
//# sourceMappingURL=app.72b03e21.js.map