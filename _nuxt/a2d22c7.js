(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,5,8,9,10],{395:function(t,e,r){var content=r(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("1244ed88",content,!0,{sourceMap:!1})},397:function(t,e,r){var content=r(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("b23e7ab8",content,!0,{sourceMap:!1})},398:function(t,e,r){"use strict";(function(t){r.d(e,"c",(function(){return l})),r.d(e,"b",(function(){return f})),r.d(e,"a",(function(){return v})),r.d(e,"d",(function(){return m}));var n=r(29),o=(r(12),r(34),r(35),r(10),r(13),r(3),r(47),r(39),r(40),r(412));function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}function l(data){return Object(o.createHash)("sha256").update(data).digest()}function f(e,r){try{var n;n=44===r.length?t.from(r,"base64"):t.from(r,"hex");var o,d=c(e);try{for(d.s();!(o=d.n()).done;){var f=o.value,v=t.from(f.data,"hex");switch(f.position){case"left":n=l(t.concat([v,n]));break;case"right":n=l(t.concat([n,v]))}}}catch(t){d.e(t)}finally{d.f()}return n.toString("hex")}catch(t){return console.log(t),""}}function v(e,r){try{for(var n=t.from(r,"hex"),o=t.from(e[0].prevBlockHash,"hex"),c=l(t.concat([o,n])),i=1;i<e.length;i++){var d=t.from(e[i].merkleRoot,"hex");c=l(t.concat([c,d]))}return c.toString("hex")}catch(t){return console.log(t),""}}function m(t){try{t="string"!=typeof t?JSON.stringify(t):t,t=JSON.parse(t)}catch(t){return!1}return"object"===Object(n.a)(t)&&null!==t}}).call(this,r(389).Buffer)},404:function(t,e,r){"use strict";r.r(e);var n=r(7).default.extend({props:{title:{type:String,default:""},subtitle:{type:String,default:""},px:{type:String,default:"3.5rem"},py:{type:String,default:"2.5rem"}}}),o=(r(410),r(51)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"demo-card shadow-purple rounded-lg",style:{"padding-left":t.px,"padding-right":t.px,"padding-top":t.py,"padding-bottom":t.py}},[t.title||t.subtitle?r("div",{staticClass:"mb-5 mt-3 mt-md-0"},[t.title?r("h1",{class:{"mb-3":!!t.subtitle}},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.subtitle?r("p",[t._v("\n      "+t._s(t.subtitle)+"\n    ")]):t._e()]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"5a313724",null);e.default=component.exports},405:function(t,e,r){"use strict";r(395)},406:function(t,e,r){var n=r(52)(!1);n.push([t.i,".font-h1[data-v-3ca42c7c],h1[data-v-3ca42c7c]{font-weight:700;font-size:3rem;line-height:4rem}.font-h2[data-v-3ca42c7c],h2[data-v-3ca42c7c]{font-weight:700;font-size:2.25rem;line-height:3rem}.font-h3[data-v-3ca42c7c],h3[data-v-3ca42c7c]{font-weight:700;font-size:1.5rem;line-height:2.25rem}.font-h4[data-v-3ca42c7c],h4[data-v-3ca42c7c]{font-weight:700;font-size:1.25rem;line-height:2rem}.font-h5[data-v-3ca42c7c],h5[data-v-3ca42c7c]{font-weight:700;font-size:1rem;line-height:1.5rem}.font-h6[data-v-3ca42c7c],h6[data-v-3ca42c7c]{font-weight:700;font-size:.875rem;line-height:1.25rem}.font-body[data-v-3ca42c7c],a[data-v-3ca42c7c]{font-weight:400;font-size:1rem;line-height:1.625rem}.font-body.-bold[data-v-3ca42c7c],a.-bold[data-v-3ca42c7c]{font-weight:700}.font-body-big[data-v-3ca42c7c]{font-weight:400;font-size:1.125rem;line-height:1.875rem}.font-body-big.-bold[data-v-3ca42c7c]{font-weight:700}.custom-textarea__top label[data-v-3ca42c7c],.font-label[data-v-3ca42c7c]{font-weight:400;font-size:1rem;line-height:1rem;color:#adb5bd}.font-description[data-v-3ca42c7c]{font-weight:400;font-size:.875rem;line-height:1.15rem}h1[data-v-3ca42c7c]{color:#4600bf}h2[data-v-3ca42c7c]{color:#ff00d4}h3[data-v-3ca42c7c],h4[data-v-3ca42c7c],h5[data-v-3ca42c7c],h6[data-v-3ca42c7c]{color:#041147}a[data-v-3ca42c7c]{font-weight:700;color:#4600bf}.custom-textarea[data-v-3ca42c7c]{height:100%;background:transparent;position:relative}.custom-textarea__top[data-v-3ca42c7c]{position:absolute;padding:.75rem 1.125rem 0;width:100%;display:flex;justify-content:space-between;align-items:center}.custom-textarea__top label[data-v-3ca42c7c]{margin-bottom:0}.custom-textarea__input[data-v-3ca42c7c]{padding-top:1.75rem}.custom-textarea[data-v-3ca42c7c] ::-webkit-scrollbar{width:4px}.custom-textarea[data-v-3ca42c7c] ::-webkit-scrollbar-track{border-radius:0}.custom-textarea[data-v-3ca42c7c] ::-webkit-scrollbar-thumb{background:#4600bf;border-radius:0}",""]),t.exports=n},407:function(t,e,r){"use strict";r.r(e);var n=r(7).default.extend({props:{id:{type:String,default:"",required:!0},value:{type:String,default:""},height:{type:String,default:"100px"},label:{type:String,default:"Enter data"},placeholder:{type:String,default:""},noResize:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}}}),o=(r(405),r(51)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"custom-textarea"},[r("div",{staticClass:"custom-textarea__top"},[r("label",{class:t.disabled?"bg-transparent":"bg-white",attrs:{for:t.id}},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),t._t("after-label")],2),t._v(" "),r("b-form-textarea",{staticClass:"custom-textarea__input",style:{height:t.height},attrs:{id:t.id,value:t.value,"no-resize":t.noResize,disabled:t.disabled,placeholder:t.placeholder},on:{input:function(e){return t.$emit("input",e)}}})],1)}),[],!1,null,"3ca42c7c",null);e.default=component.exports},409:function(t,e,r){"use strict";r.d(e,"c",(function(){return n.c})),r.d(e,"b",(function(){return n.b})),r.d(e,"a",(function(){return n.a})),r.d(e,"d",(function(){return n.d}));var n=r(398)},410:function(t,e,r){"use strict";r(397)},411:function(t,e,r){var n=r(52)(!1);n.push([t.i,".demo-card[data-v-5a313724]{background-color:#fff}@media (max-width:575px){.demo-card[data-v-5a313724]{padding:.75rem .75rem 1.5rem!important}}",""]),t.exports=n},413:function(t,e,r){var content=r(436);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("05ab0d4d",content,!0,{sourceMap:!1})},416:function(t,e,r){var content=r(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("5354b715",content,!0,{sourceMap:!1})},417:function(t,e,r){"use strict";(function(t){var n=r(0),o=r(18),c=(r(60),r(12),r(34),r(35),r(4),r(3),r(2),r(5),r(6),r(7)),d=r(426),l=r.n(d),f=r(475),v=r(409),m=r(407);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.default.extend({components:{CustomTextarea:m.default},data:function(){return{data:"",document:null,isRawData:!1,hash:"",tag:"",responseData:{id:"",tag:"",createdAt:"",hash:""},error:"",loading:!1}},methods:{hashData:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.hash="",!t.isRawData||!t.data){e.next=7;break}try{r=Object(v.c)(l.a.stringify(l.a.parse(t.data)))}catch(e){r=Object(v.c)(t.data)}t.hash=r.toString("hex"),e.next=11;break;case 7:if(t.isRawData||!t.document){e.next=11;break}return e.next=10,t.hashDocument();case 10:t.hash=e.sent;case 11:if(!t.verifyInputs()){e.next=17;break}return t.error="",e.next=15,t.sendToAuthtrail();case 15:e.next=18;break;case 17:t.error="Incorrect input data";case 18:t.loading=!1;case 19:case"end":return e.stop()}}),e)})))()},setDocument:function(t){this.document=t.target.files&&t.target.files[0]?t.target.files[0]:null},hashDocument:function(){var e=this;return new Promise((function(r){if(!(e.document&&e.document instanceof Blob))return r("");var n=new FileReader;n.onload=function(){if(n.result){var e=t.from(n.result),o=Object(v.c)(e);return r(o.toString("hex"))}},n.readAsArrayBuffer(e.document)}))},sendToAuthtrail:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/data",{data:t.hash,changeType:0,tag:t.tag},{headers:{"x-api-key":"be8c251d-8b56-4c77-ad9c-fd04a8e44818"}});case 3:r=e.sent,t.responseData=y(y({},r.data),{},{document:t.document,verified:!0}),t.$emit("updated",t.responseData),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.error="Tag already exists";case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},verifyInputs:function(){return this.hash&&this.tag},generateTag:function(){this.tag=Object(f.v4)()}}})}).call(this,r(389).Buffer)},435:function(t,e,r){"use strict";r(413)},436:function(t,e,r){var n=r(52)(!1);n.push([t.i,".link-card[data-v-5f59b87e]{text-align:center;display:block;margin-top:3rem}.link-card h4[data-v-5f59b87e]{color:#ff00d4;margin-bottom:.75rem;margin-top:.75rem}.link-card p[data-v-5f59b87e]{color:#161618;font-weight:400;margin-bottom:0}.link-card .demo-card[data-v-5f59b87e]{border:2px solid transparent;transition:border-color .15s ease-in-out}.link-card.tight[data-v-5f59b87e]{max-width:620px;margin-left:auto;margin-right:auto}.link-card[data-v-5f59b87e]:active,.link-card[data-v-5f59b87e]:focus,.link-card[data-v-5f59b87e]:hover{text-decoration:none}.link-card:active .demo-card[data-v-5f59b87e],.link-card:focus .demo-card[data-v-5f59b87e],.link-card:hover .demo-card[data-v-5f59b87e]{border-color:rgba(70,0,191,.1)}@media (min-width:576px){.link-card[data-v-5f59b87e]{margin-top:6rem}.link-card h4[data-v-5f59b87e]{margin-top:0}}",""]),t.exports=n},437:function(t,e){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);t.exports=function(){return r(n),n}}else{var o=new Array(16);t.exports=function(){for(var t,i=0;i<16;i++)0==(3&i)&&(t=4294967296*Math.random()),o[i]=t>>>((3&i)<<3)&255;return o}}},438:function(t,e){for(var r=[],i=0;i<256;++i)r[i]=(i+256).toString(16).substr(1);t.exports=function(t,e){var i=e||0,n=r;return[n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],"-",n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]],n[t[i++]]].join("")}},439:function(t,e){},440:function(t,e){},443:function(t,e){},444:function(t,e){},446:function(t,e){},447:function(t,e){},448:function(t,e){},449:function(t,e){},450:function(t,e){},452:function(t,e){},454:function(t,e,r){"use strict";r(416)},455:function(t,e,r){var n=r(52)(!1);n.push([t.i,".integrity-overview .integrity-overview-card[data-v-18e02058]{max-width:620px;margin:0 auto 2rem}.integrity-overview .label[data-v-18e02058]{color:#adb5bd;display:block;font-size:.875rem;line-height:1}.integrity-overview p[data-v-18e02058]{display:flex;align-items:center;margin-bottom:1.5rem;word-break:break-word;word-wrap:break-word}",""]),t.exports=n},473:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(404),c=n.default.extend({components:{CustomCard:o.default},props:{title:{type:String,default:""},subtitle:{type:String,default:""},to:{type:String,default:"",required:!0},tight:{type:Boolean,default:!1}}}),d=(r(435),r(51)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.to?r("nuxt-link",{staticClass:"link-card",class:{tight:t.tight},attrs:{to:t.to}},[r("custom-card",{attrs:{px:"2rem"}},[r("h4",{},[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.subtitle))])])],1):t._e()}),[],!1,null,"5f59b87e",null);e.default=component.exports},474:function(t,e,r){"use strict";r.r(e);var n=r(7),o=r(404),c=n.default.extend({components:{CustomCard:o.default},props:{data:{type:Object,default:function(){return{id:"",tag:"",hash:"",txid:"",verified:!0,createdAt:""}},required:!0},verify:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){return{clipboardText:"Copy to clipboard"}},methods:{copyToClipboard:function(text){var t=this;this.clipboardText="Copied!",setTimeout((function(){t.clipboardText="Copy to clipboard"}),5e3),navigator.clipboard.writeText(text)}}}),d=(r(454),r(51)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"integrity-overview"},[r("custom-card",{staticClass:"integrity-overview-card",attrs:{px:"2rem",py:"1rem"}},[r("div",{staticClass:"text-center my-3"},[t.data.verified?[r("b-img",{staticClass:"mb-3",attrs:{src:"/img/at-checkmark.svg",width:"36",height:"31",fluid:""}}),t._v(" "),r("h4",{staticClass:"text-primary mb-4"},[t._v(t._s(t.title||"Integrity confirmed"))])]:[r("b-img",{staticClass:"mb-3",attrs:{src:"/img/at-close.svg",width:"36",height:"31",fluid:""}}),t._v(" "),r("h4",{staticClass:"text-primary mb-4"},[t._v(t._s(t.title||"Integrity compromised"))])]],2),t._v(" "),!t.verify&&t.data.id?r("p",[r("span",[r("span",{staticClass:"label"},[t._v("ID")]),t._v(" "),r("span",[t._v(t._s(t.data.id))])])]):t._e(),t._v(" "),t.data.tag?r("p",[r("span",[r("span",{staticClass:"label"},[t._v("Tag")]),t._v(" "),r("span",[t._v(t._s(t.data.tag))])]),t._v(" "),r("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.ds500",modifiers:{ds500:!0}}],staticClass:"btn-clipboard ml-1",attrs:{variant:"outline-primary",title:t.clipboardText},on:{click:function(e){return t.copyToClipboard(t.data.tag)}}},[r("b-icon",{attrs:{icon:"files"}})],1)],1):t._e(),t._v(" "),!t.verify&&t.data.hash?r("p",[r("span",[r("span",{staticClass:"label"},[t._v("Hash")]),t._v(" "),r("span",[t._v(t._s(t.data.hash))])])]):t._e(),t._v(" "),t.verify?r("p",[r("span",[r("span",{staticClass:"label"},[t._v("Transaction ID")]),t._v(" "),t.data.txid?r("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.ds500",modifiers:{ds500:!0}}],attrs:{href:"https://moonbase.moonscan.io/tx/"+t.data.txid,target:"_blank",title:"Open transaction"}},[t._v("\n          "+t._s(t.data.txid)+"\n        ")]):r("span",[t._v("\n          Not yet anchored\n          "),r("b-spinner",{staticClass:"ml-1",staticStyle:{"margin-bottom":"2px"},attrs:{variant:"primary",small:""}})],1)])]):t._e(),t._v(" "),t.data.createdAt?r("p",[r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom.ds500",modifiers:{bottom:!0,ds500:!0}}],staticClass:"label d-inline-block",attrs:{title:t.data.createdAt}},[t._v("\n        @ "+t._s(t._f("formatDate")(t.data.createdAt))+"\n      ")])]):t._e()])],1)}),[],!1,null,"18e02058",null);e.default=component.exports},475:function(t,e,r){var n=r(476),o=r(477),c=o;c.v1=n,c.v4=o,t.exports=c},476:function(t,e,r){var n,o,c=r(437),d=r(438),l=0,f=0;t.exports=function(t,e,r){var i=e&&r||0,b=e||[],v=(t=t||{}).node||n,m=void 0!==t.clockseq?t.clockseq:o;if(null==v||null==m){var h=c();null==v&&(v=n=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==m&&(m=o=16383&(h[6]<<8|h[7]))}var y=void 0!==t.msecs?t.msecs:(new Date).getTime(),_=void 0!==t.nsecs?t.nsecs:f+1,dt=y-l+(_-f)/1e4;if(dt<0&&void 0===t.clockseq&&(m=m+1&16383),(dt<0||y>l)&&void 0===t.nsecs&&(_=0),_>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");l=y,f=_,o=m;var x=(1e4*(268435455&(y+=122192928e5))+_)%4294967296;b[i++]=x>>>24&255,b[i++]=x>>>16&255,b[i++]=x>>>8&255,b[i++]=255&x;var w=y/4294967296*1e4&268435455;b[i++]=w>>>8&255,b[i++]=255&w,b[i++]=w>>>24&15|16,b[i++]=w>>>16&255,b[i++]=m>>>8|128,b[i++]=255&m;for(var k=0;k<6;++k)b[i+k]=v[k];return e||d(b)}},477:function(t,e,r){var n=r(437),o=r(438);t.exports=function(t,e,r){var i=e&&r||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var c=(t=t||{}).random||(t.rng||n)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,e)for(var d=0;d<16;++d)e[i+d]=c[d];return e||o(c)}},596:function(t,e,r){"use strict";r.r(e);var n=r(417).a,o=r(51),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",{staticClass:"mb-075"},[r("b-col",{staticClass:"mb-2 mb-md-0",attrs:{cols:"12",md:"6"}},[r("custom-textarea",{attrs:{id:"tag",label:"Enter tag (a unique data identifier)",placeholder:"e.g. my-own-unique-tag","no-resize":"",disabled:!!t.responseData.createdAt},model:{value:t.tag,callback:function(e){t.tag=e},expression:"tag"}})],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("div",{staticClass:"font-description px-md-4 mb-2"},[r("p",{staticClass:"mb-0"},[t._v("\n          Data tag is a unique marker that identifies a specific data entry. When checking for authenticity, a tag is used to locate the annexed data and verify its authenticity.\n        ")]),t._v(" "),r("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.generateTag()}}},[t._v("Generate random tag")])])])],1),t._v(" "),r("b-row",[r("b-col",{staticClass:"mb-2 mb-md-0",attrs:{cols:"12",md:"6"}},[t.isRawData?r("custom-textarea",{attrs:{id:"data-area",label:"Enter data",height:"250px",disabled:!!t.responseData.createdAt},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}):r("div",{staticClass:"file-dropbox",class:{"not-allowed":!!t.responseData.createdAt}},[r("input",{staticClass:"input-file",class:{"not-allowed":!!t.responseData.createdAt},attrs:{type:"file",disabled:!!t.responseData.createdAt},on:{change:t.setDocument}}),t._v(" "),r("div",{staticClass:"text-center"},[r("img",{attrs:{src:"/img/document-attach.png"}}),t._v(" "),t.document&&t.document.name?r("p",{staticClass:"file-dropbox-text"},[t._v("\n            "+t._s(t.document.name)+"\n          ")]):r("p",{staticClass:"file-dropbox-text"},[r("span",[t._v("Add document")]),t._v(" "),r("br"),t._v(" or drop here\n          ")])])])],1),t._v(" "),r("b-col",{attrs:{md:"6"}},[r("div",{staticClass:"font-description px-md-4 mb-2"},[r("p",{staticClass:"mb-0"},[t._v("\n          Choose documents or raw data that need blockchain-backed integrity.  Once integrity is guaranteed, trusted data info can be downloaded or shared.\n        ")]),t._v(" "),r("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.isRawData=!t.isRawData}}},[t._v("Add raw data")]),t._v(" "),r("p",{staticClass:"mb-0 mt-4 text-gray"},[t._v("\n          Authtrail allows non-demo users to update and add versions to existing data by connecting entries through advanced data mapping and processing logic.\n        ")]),t._v(" "),r("a",{staticClass:"text-gray font-weight-bold text-underline",attrs:{href:"#"}},[t._v("Send inquiry for customized Authtrail solution.")])])])],1),t._v(" "),r("b-row",{staticClass:"mt-5"},[r("b-col",[t.responseData.createdAt?t._e():r("div",{staticClass:"text-center"},[r("b-button",{attrs:{variant:"primary",disabled:t.loading},on:{click:t.hashData}},[t._v("\n          Add integrity to your data\n          "),t.loading?r("b-spinner",{staticClass:"btn-spinner",attrs:{small:""}}):t._e()],1)],1),t._v(" "),t.error?r("div",{staticClass:"text-center text-warning mt-075"},[t._v("\n        "+t._s(t.error)+"\n      ")]):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports},843:function(t,e,r){"use strict";r.r(e);r(13);var n=r(7),o=r(404),c=r(473),d=r(596),l=r(474),f=n.default.extend({components:{CustomCard:o.default,LinkCard:c.default,CreateData:d.default,IntegrityOverview:l.default},data:function(){return{responseData:{createdAt:""}}},methods:{clearData:function(){this.responseData={createdAt:""}},downloadData:function(){var text="Tag: ".concat(this.responseData.tag,"\n");text+="Hash: ".concat(this.responseData.hash,"\n"),text+="Date: ".concat(new Date(this.responseData.createdAt).toISOString(),"\n"),this.responseData.document&&(text+="Filename: ".concat(this.responseData.document.name));var t="data-".concat(this.responseData.tag,".txt"),link=document.createElement("a");if(link.setAttribute("target","_blank"),void 0!==Blob){var e=new Blob([text],{type:"text/plain"});link.setAttribute("href",URL.createObjectURL(e))}else link.setAttribute("href","data:text/plain,"+encodeURIComponent(text));link.setAttribute("download",t),document.body.appendChild(link),link.click(),document.body.removeChild(link)}}}),v=r(51),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition-group",{attrs:{name:"fade"}},[t.responseData.createdAt?[r("integrity-overview",{key:"overview",attrs:{data:t.responseData,title:"Integrity guaranteed"}}),t._v(" "),r("div",{key:"actions",staticClass:"text-center"},[r("b-button",{staticClass:"m-2",attrs:{variant:"primary",size:"sm"},on:{click:function(e){return t.downloadData()}}},[t._v("\n          Download trusted data\n        ")]),t._v(" "),r("b-button",{staticClass:"m-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(e){return t.clearData()}}},[t._v("\n          Add integrity to more data\n        ")])],1)]:r("custom-card",{key:"form",staticClass:"transition-absolute",attrs:{title:"Add integrity",subtitle:"Equip your data with integrity by hashing and anchoring it on blockchain."}},[r("create-data",{on:{updated:function(e){t.responseData=e}}})],1)],2),t._v(" "),r("link-card",{attrs:{to:"/verify",title:t.responseData.createdAt?"Next, verify your data":"Want to verify data integrity instead?",subtitle:"Check data for authenticity and verify it against blockchain records.",tight:!!t.responseData.createdAt}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);