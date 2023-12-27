import{L as ut}from"./Student-3f1ef265.js";import{v as n,g as lt,H as dt,L as ct,d as V}from"./app-37deda0f.js";import{S as ft}from"./sweetalert2.all-13d6cd33.js";import{_ as ht}from"./_plugin-vue_export-helper-c27b6911.js";/*! vue-countdown v2.0.0 | (c) 2018-present Chen Fengyuan | MIT */const O=1e3,B=60*O,A=60*B,Ee=24*A,be="abort",ye="end",_e="progress",we="start",ge="visibilitychange";var mt=n.defineComponent({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:e=>e>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:e=>e>=0},transform:{type:Function,default:e=>e}},emits:[be,ye,_e,we],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/Ee)},hours(){return Math.floor(this.totalMilliseconds%Ee/A)},minutes(){return Math.floor(this.totalMilliseconds%A/B)},seconds(){return Math.floor(this.totalMilliseconds%B/O)},milliseconds(){return Math.floor(this.totalMilliseconds%O)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/A)},totalMinutes(){return Math.floor(this.totalMilliseconds/B)},totalSeconds(){return Math.floor(this.totalMilliseconds/O)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(ge,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(ge,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit(we),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const e=Math.min(this.totalMilliseconds,this.interval);if(e>0){let t,r;const i=s=>{t||(t=s),r||(r=s);const a=s-t;a>=e||a+(s-r)/2>=e?this.progress():this.requestId=requestAnimationFrame(i),r=s};this.requestId=requestAnimationFrame(i)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit(_e,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(be))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(ye))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return n.h(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}}),le={exports:{}},ze=function(t,r){return function(){for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];return t.apply(r,s)}},pt=ze,w=Object.prototype.toString;function de(e){return Array.isArray(e)}function oe(e){return typeof e>"u"}function vt(e){return e!==null&&!oe(e)&&e.constructor!==null&&!oe(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function We(e){return w.call(e)==="[object ArrayBuffer]"}function Et(e){return w.call(e)==="[object FormData]"}function bt(e){var t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&We(e.buffer),t}function yt(e){return typeof e=="string"}function _t(e){return typeof e=="number"}function Xe(e){return e!==null&&typeof e=="object"}function D(e){if(w.call(e)!=="[object Object]")return!1;var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function wt(e){return w.call(e)==="[object Date]"}function gt(e){return w.call(e)==="[object File]"}function Nt(e){return w.call(e)==="[object Blob]"}function Ye(e){return w.call(e)==="[object Function]"}function kt(e){return Xe(e)&&Ye(e.pipe)}function Ct(e){return w.call(e)==="[object URLSearchParams]"}function St(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function xt(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ce(e,t){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),de(e))for(var r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function ue(){var e={};function t(s,a){D(e[a])&&D(s)?e[a]=ue(e[a],s):D(s)?e[a]=ue({},s):de(s)?e[a]=s.slice():e[a]=s}for(var r=0,i=arguments.length;r<i;r++)ce(arguments[r],t);return e}function Rt(e,t,r){return ce(t,function(s,a){r&&typeof s=="function"?e[a]=pt(s,r):e[a]=s}),e}function qt(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var v={isArray:de,isArrayBuffer:We,isBuffer:vt,isFormData:Et,isArrayBufferView:bt,isString:yt,isNumber:_t,isObject:Xe,isPlainObject:D,isUndefined:oe,isDate:wt,isFile:gt,isBlob:Nt,isFunction:Ye,isStream:kt,isURLSearchParams:Ct,isStandardBrowserEnv:xt,forEach:ce,merge:ue,extend:Rt,trim:St,stripBOM:qt},C=v;function Ne(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ke=function(t,r,i){if(!r)return t;var s;if(i)s=i(r);else if(C.isURLSearchParams(r))s=r.toString();else{var a=[];C.forEach(r,function(d,u){d===null||typeof d>"u"||(C.isArray(d)?u=u+"[]":d=[d],C.forEach(d,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),a.push(Ne(u)+"="+Ne(l))}))}),s=a.join("&")}if(s){var c=t.indexOf("#");c!==-1&&(t=t.slice(0,c)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t},Vt=v;function P(){this.handlers=[]}P.prototype.use=function(t,r,i){return this.handlers.push({fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};P.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)};P.prototype.forEach=function(t){Vt.forEach(this.handlers,function(i){i!==null&&t(i)})};var Mt=P,Tt=v,Ot=function(t,r){Tt.forEach(t,function(s,a){a!==r&&a.toUpperCase()===r.toUpperCase()&&(t[r]=s,delete t[a])})},Qe=function(t,r,i,s,a){return t.config=r,i&&(t.code=i),t.request=s,t.response=a,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t},F,ke;function Ge(){if(ke)return F;ke=1;var e=Qe;return F=function(r,i,s,a,c){var o=new Error(r);return e(o,i,s,a,c)},F}var $,Ce;function Bt(){if(Ce)return $;Ce=1;var e=Ge();return $=function(r,i,s){var a=s.config.validateStatus;!s.status||!a||a(s.status)?r(s):i(e("Request failed with status code "+s.status,s.config,null,s.request,s))},$}var J,Se;function At(){if(Se)return J;Se=1;var e=v;return J=e.isStandardBrowserEnv()?function(){return{write:function(i,s,a,c,o,d){var u=[];u.push(i+"="+encodeURIComponent(s)),e.isNumber(a)&&u.push("expires="+new Date(a).toGMTString()),e.isString(c)&&u.push("path="+c),e.isString(o)&&u.push("domain="+o),d===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(i){var s=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),J}var z,xe;function Dt(){return xe||(xe=1,z=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}),z}var W,Re;function Lt(){return Re||(Re=1,W=function(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t}),W}var X,qe;function Pt(){if(qe)return X;qe=1;var e=Dt(),t=Lt();return X=function(i,s){return i&&!e(s)?t(i,s):s},X}var Y,Ve;function Ut(){if(Ve)return Y;Ve=1;var e=v,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return Y=function(i){var s={},a,c,o;return i&&e.forEach(i.split(`
`),function(u){if(o=u.indexOf(":"),a=e.trim(u.substr(0,o)).toLowerCase(),c=e.trim(u.substr(o+1)),a){if(s[a]&&t.indexOf(a)>=0)return;a==="set-cookie"?s[a]=(s[a]?s[a]:[]).concat([c]):s[a]=s[a]?s[a]+", "+c:c}}),s},Y}var K,Me;function jt(){if(Me)return K;Me=1;var e=v;return K=e.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),s;function a(c){var o=c;return r&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return s=a(window.location.href),function(o){var d=e.isString(o)?a(o):o;return d.protocol===s.protocol&&d.host===s.host}}():function(){return function(){return!0}}(),K}var Q,Te;function U(){if(Te)return Q;Te=1;function e(t){this.message=t}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,Q=e,Q}var G,Oe;function Be(){if(Oe)return G;Oe=1;var e=v,t=Bt(),r=At(),i=Ke,s=Pt(),a=Ut(),c=jt(),o=Ge(),d=j(),u=U();return G=function(l){return new Promise(function(m,b){var x=l.data,R=l.headers,q=l.responseType,N;function he(){l.cancelToken&&l.cancelToken.unsubscribe(N),l.signal&&l.signal.removeEventListener("abort",N)}e.isFormData(x)&&delete R["Content-Type"];var h=new XMLHttpRequest;if(l.auth){var st=l.auth.username||"",at=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";R.Authorization="Basic "+btoa(st+":"+at)}var me=s(l.baseURL,l.url);h.open(l.method.toUpperCase(),i(me,l.params,l.paramsSerializer),!0),h.timeout=l.timeout;function pe(){if(h){var y="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,k=!q||q==="text"||q==="json"?h.responseText:h.response,g={data:k,status:h.status,statusText:h.statusText,headers:y,config:l,request:h};t(function(H){m(H),he()},function(H){b(H),he()},g),h=null}}if("onloadend"in h?h.onloadend=pe:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(pe)},h.onabort=function(){h&&(b(o("Request aborted",l,"ECONNABORTED",h)),h=null)},h.onerror=function(){b(o("Network Error",l,null,h)),h=null},h.ontimeout=function(){var k=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",g=l.transitional||d.transitional;l.timeoutErrorMessage&&(k=l.timeoutErrorMessage),b(o(k,l,g.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},e.isStandardBrowserEnv()){var ve=(l.withCredentials||c(me))&&l.xsrfCookieName?r.read(l.xsrfCookieName):void 0;ve&&(R[l.xsrfHeaderName]=ve)}"setRequestHeader"in h&&e.forEach(R,function(k,g){typeof x>"u"&&g.toLowerCase()==="content-type"?delete R[g]:h.setRequestHeader(g,k)}),e.isUndefined(l.withCredentials)||(h.withCredentials=!!l.withCredentials),q&&q!=="json"&&(h.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&h.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(N=function(y){h&&(b(!y||y&&y.type?new u("canceled"):y),h.abort(),h=null)},l.cancelToken&&l.cancelToken.subscribe(N),l.signal&&(l.signal.aborted?N():l.signal.addEventListener("abort",N))),x||(x=null),h.send(x)})},G}var Z,Ae;function j(){if(Ae)return Z;Ae=1;var e=v,t=Ot,r=Qe,i={"Content-Type":"application/x-www-form-urlencoded"};function s(d,u){!e.isUndefined(d)&&e.isUndefined(d["Content-Type"])&&(d["Content-Type"]=u)}function a(){var d;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(d=Be()),d}function c(d,u,f){if(e.isString(d))try{return(u||JSON.parse)(d),e.trim(d)}catch(l){if(l.name!=="SyntaxError")throw l}return(f||JSON.stringify)(d)}var o={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:a(),transformRequest:[function(u,f){return t(f,"Accept"),t(f,"Content-Type"),e.isFormData(u)||e.isArrayBuffer(u)||e.isBuffer(u)||e.isStream(u)||e.isFile(u)||e.isBlob(u)?u:e.isArrayBufferView(u)?u.buffer:e.isURLSearchParams(u)?(s(f,"application/x-www-form-urlencoded;charset=utf-8"),u.toString()):e.isObject(u)||f&&f["Content-Type"]==="application/json"?(s(f,"application/json"),c(u)):u}],transformResponse:[function(u){var f=this.transitional||o.transitional,l=f&&f.silentJSONParsing,p=f&&f.forcedJSONParsing,m=!l&&this.responseType==="json";if(m||p&&e.isString(u)&&u.length)try{return JSON.parse(u)}catch(b){if(m)throw b.name==="SyntaxError"?r(b,this,"E_JSON_PARSE"):b}return u}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(u){return u>=200&&u<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};return e.forEach(["delete","get","head"],function(u){o.headers[u]={}}),e.forEach(["post","put","patch"],function(u){o.headers[u]=e.merge(i)}),Z=o,Z}var It=v,Ht=j(),Ft=function(t,r,i){var s=this||Ht;return It.forEach(i,function(c){t=c.call(s,t,r)}),t},ee,De;function Ze(){return De||(De=1,ee=function(t){return!!(t&&t.__CANCEL__)}),ee}var Le=v,te=Ft,$t=Ze(),Jt=j(),zt=U();function re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new zt("canceled")}var Wt=function(t){re(t),t.headers=t.headers||{},t.data=te.call(t,t.data,t.headers,t.transformRequest),t.headers=Le.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),Le.forEach(["delete","get","head","post","put","patch","common"],function(s){delete t.headers[s]});var r=t.adapter||Jt.adapter;return r(t).then(function(s){return re(t),s.data=te.call(t,s.data,s.headers,t.transformResponse),s},function(s){return $t(s)||(re(t),s&&s.response&&(s.response.data=te.call(t,s.response.data,s.response.headers,t.transformResponse))),Promise.reject(s)})},E=v,et=function(t,r){r=r||{};var i={};function s(f,l){return E.isPlainObject(f)&&E.isPlainObject(l)?E.merge(f,l):E.isPlainObject(l)?E.merge({},l):E.isArray(l)?l.slice():l}function a(f){if(E.isUndefined(r[f])){if(!E.isUndefined(t[f]))return s(void 0,t[f])}else return s(t[f],r[f])}function c(f){if(!E.isUndefined(r[f]))return s(void 0,r[f])}function o(f){if(E.isUndefined(r[f])){if(!E.isUndefined(t[f]))return s(void 0,t[f])}else return s(void 0,r[f])}function d(f){if(f in r)return s(t[f],r[f]);if(f in t)return s(void 0,t[f])}var u={url:c,method:c,data:c,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:d};return E.forEach(Object.keys(t).concat(Object.keys(r)),function(l){var p=u[l]||a,m=p(l);E.isUndefined(m)&&p!==d||(i[l]=m)}),i},ne,Pe;function tt(){return Pe||(Pe=1,ne={version:"0.25.0"}),ne}var Xt=tt().version,fe={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){fe[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});var Ue={};fe.transitional=function(t,r,i){function s(a,c){return"[Axios v"+Xt+"] Transitional option '"+a+"'"+c+(i?". "+i:"")}return function(a,c,o){if(t===!1)throw new Error(s(c," has been removed"+(r?" in "+r:"")));return r&&!Ue[c]&&(Ue[c]=!0,console.warn(s(c," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(a,c,o):!0}};function Yt(e,t,r){if(typeof e!="object")throw new TypeError("options must be an object");for(var i=Object.keys(e),s=i.length;s-- >0;){var a=i[s],c=t[a];if(c){var o=e[a],d=o===void 0||c(o,a,e);if(d!==!0)throw new TypeError("option "+a+" must be "+d);continue}if(r!==!0)throw Error("Unknown option "+a)}}var Kt={assertOptions:Yt,validators:fe},rt=v,Qt=Ke,je=Mt,Ie=Wt,I=et,nt=Kt,S=nt.validators;function M(e){this.defaults=e,this.interceptors={request:new je,response:new je}}M.prototype.request=function(t,r){if(typeof t=="string"?(r=r||{},r.url=t):r=t||{},!r.url)throw new Error("Provided config url is not valid");r=I(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var i=r.transitional;i!==void 0&&nt.assertOptions(i,{silentJSONParsing:S.transitional(S.boolean),forcedJSONParsing:S.transitional(S.boolean),clarifyTimeoutError:S.transitional(S.boolean)},!1);var s=[],a=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(a=a&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});var c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});var o;if(!a){var d=[Ie,void 0];for(Array.prototype.unshift.apply(d,s),d=d.concat(c),o=Promise.resolve(r);d.length;)o=o.then(d.shift(),d.shift());return o}for(var u=r;s.length;){var f=s.shift(),l=s.shift();try{u=f(u)}catch(p){l(p);break}}try{o=Ie(u)}catch(p){return Promise.reject(p)}for(;c.length;)o=o.then(c.shift(),c.shift());return o};M.prototype.getUri=function(t){if(!t.url)throw new Error("Provided config url is not valid");return t=I(this.defaults,t),Qt(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")};rt.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(r,i){return this.request(I(i||{},{method:t,url:r,data:(i||{}).data}))}});rt.forEach(["post","put","patch"],function(t){M.prototype[t]=function(r,i,s){return this.request(I(s||{},{method:t,url:r,data:i}))}});var Gt=M,ie,He;function Zt(){if(He)return ie;He=1;var e=U();function t(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(c){i=c});var s=this;this.promise.then(function(a){if(s._listeners){var c,o=s._listeners.length;for(c=0;c<o;c++)s._listeners[c](a);s._listeners=null}}),this.promise.then=function(a){var c,o=new Promise(function(d){s.subscribe(d),c=d}).then(a);return o.cancel=function(){s.unsubscribe(c)},o},r(function(c){s.reason||(s.reason=new e(c),i(s.reason))})}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},t.prototype.unsubscribe=function(i){if(this._listeners){var s=this._listeners.indexOf(i);s!==-1&&this._listeners.splice(s,1)}},t.source=function(){var i,s=new t(function(c){i=c});return{token:s,cancel:i}},ie=t,ie}var se,Fe;function er(){return Fe||(Fe=1,se=function(t){return function(i){return t.apply(null,i)}}),se}var ae,$e;function tr(){if($e)return ae;$e=1;var e=v;return ae=function(r){return e.isObject(r)&&r.isAxiosError===!0},ae}var Je=v,rr=ze,L=Gt,nr=et,ir=j();function it(e){var t=new L(e),r=rr(L.prototype.request,t);return Je.extend(r,L.prototype,t),Je.extend(r,t),r.create=function(s){return it(nr(e,s))},r}var _=it(ir);_.Axios=L;_.Cancel=U();_.CancelToken=Zt();_.isCancel=Ze();_.VERSION=tt().version;_.all=function(t){return Promise.all(t)};_.spread=er();_.isAxiosError=tr();le.exports=_;le.exports.default=_;var sr=le.exports,ar=sr;const T=lt(ar),or={layout:ut,components:{Head:dt,Link:ct,VueCountdown:mt},props:{id:Number,page:Number,exam_group:Object,all_questions:Array,question_answered:Number,question_active:Object,answer_order:Array,duration:Object},setup(e){let t=["A","B","C","D","E"];const r=n.ref(0),i=n.ref(e.duration.duration),s=()=>{i.value=i.value-1e3,r.value=r.value+1,i.value>0&&r.value%10==1&&T.put(`/student/exam-duration/update/${e.duration.id}`,{duration:i.value})},a=()=>{T.put(`/student/exam-duration/update/${e.duration.id}`,{duration:i.value}),V.Inertia.get(`/student/exam/${e.id}/${e.page-1}`)},c=()=>{T.put(`/student/exam-duration/update/${e.duration.id}`,{duration:i.value}),V.Inertia.get(`/student/exam/${e.id}/${e.page+1}`)},o=p=>{T.put(`/student/exam-duration/update/${e.duration.id}`,{duration:i.value}),V.Inertia.get(`/student/exam/${e.id}/${p+1}`)},d=(p,m,b)=>{V.Inertia.post("/student/exam-answer",{exam_id:p,exam_session_id:e.exam_group.exam_session.id,question_id:m,answer:b,duration:i.value})},u=n.ref(!1),f=n.ref(!1);return{options:t,duration:i,handleChangeDuration:s,prevPage:a,nextPage:c,clickQuestion:o,submitAnswer:d,showModalEndExam:u,showModalEndTimeExam:f,endExam:()=>{V.Inertia.post("/student/exam-end",{exam_group_id:e.exam_group.id,exam_id:e.exam_group.exam.id,exam_session_id:e.exam_group.exam_session.id}),ft.fire({title:"Success!",text:"Ujian Selesai!.",icon:"success",showConfirmButton:!1,timer:4e3})}}}},ur={class:"row my-5"},lr={class:"col-md-7"},dr={class:"card border-0 shadow"},cr={class:"card-header"},fr={class:"d-flex justify-content-between"},hr={class:"mb-0"},mr=n.createTextVNode("Soal No. "),pr={class:"fw-bold"},vr={class:"badge bg-info p-2"},Er=n.createElementVNode("i",{class:"fa fa-clock"},null,-1),br={class:"card-body"},yr={key:0},_r=["innerHTML"],wr={width:"50",style:{padding:"10px"}},gr={key:0,class:"btn btn-info btn-sm w-100 shdaow"},Nr=["onClick"],kr={style:{padding:"10px"}},Cr=["innerHTML"],Sr={key:1},xr=n.createElementVNode("div",{class:"alert alert-danger border-0 shadow"},[n.createElementVNode("i",{class:"fa fa-exclamation-triangle"}),n.createTextVNode(" Soal Tidak Ditemukan!. ")],-1),Rr=[xr],qr={class:"card-footer"},Vr={class:"d-flex justify-content-between"},Mr={class:"text-start"},Tr={class:"text-end"},Or={class:"col-md-5"},Br={class:"card border-0 shadow"},Ar={class:"card-header text-center"},Dr={class:"badge bg-success p-2"},Lr={class:"card-body",style:{height:"330px","overflow-y":"auto"}},Pr={width:"20%",style:{width:"20%",float:"left"}},Ur={style:{padding:"5px"}},jr=["onClick"],Ir=["onClick"],Hr=["onClick"],Fr={class:"card-footer"},$r={class:"modal-dialog"},Jr={class:"modal-content"},zr=n.createElementVNode("div",{class:"modal-header"},[n.createElementVNode("h5",{class:"modal-title"},"Akhiri Ujian ?")],-1),Wr=n.createElementVNode("div",{class:"modal-body"}," Setelah mengakhiri ujian, Anda tidak dapat kembali ke ujian ini lagi. Yakin akan mengakhiri ujian? ",-1),Xr={class:"modal-footer"},Yr={class:"modal-dialog"},Kr={class:"modal-content"},Qr=n.createElementVNode("div",{class:"modal-header"},[n.createElementVNode("h5",{class:"modal-title"},"Waktu Habis !")],-1),Gr=n.createElementVNode("div",{class:"modal-body"},[n.createTextVNode(" Waktu ujian sudah berakhir!. Klik "),n.createElementVNode("strong",{class:"fw-bold"},"Ya"),n.createTextVNode(" untuk mengakhiri ujian. ")],-1),Zr={class:"modal-footer"};function en(e,t,r,i,s,a){const c=n.resolveComponent("Head"),o=n.resolveComponent("VueCountdown");return n.openBlock(),n.createElementBlock(n.Fragment,null,[n.createVNode(c,null,{default:n.withCtx(()=>[n.createElementVNode("title",null,"Ujian Dengan Nomor Soal : "+n.toDisplayString(r.page)+" - Aplikasi Ujian Online",1)]),_:1}),n.createElementVNode("div",ur,[n.createElementVNode("div",lr,[n.createElementVNode("div",dr,[n.createElementVNode("div",cr,[n.createElementVNode("div",fr,[n.createElementVNode("div",null,[n.createElementVNode("h5",hr,[mr,n.createElementVNode("strong",pr,n.toDisplayString(r.page),1)])]),n.createElementVNode("div",null,[n.createVNode(o,{time:i.duration,onProgress:i.handleChangeDuration,onEnd:t[0]||(t[0]=d=>i.showModalEndTimeExam=!0)},{default:n.withCtx(({hours:d,minutes:u,seconds:f})=>[n.createElementVNode("span",vr,[Er,n.createTextVNode(" "+n.toDisplayString(d)+" jam, "+n.toDisplayString(u)+" menit, "+n.toDisplayString(f)+" detik.",1)])]),_:1},8,["time","onProgress"])])])]),n.createElementVNode("div",br,[r.question_active!==null?(n.openBlock(),n.createElementBlock("div",yr,[n.createElementVNode("div",null,[n.createElementVNode("p",{innerHTML:r.question_active.question.question_bank.question},null,8,_r)]),n.createElementVNode("table",null,[n.createElementVNode("tbody",null,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(r.answer_order,(d,u)=>(n.openBlock(),n.createElementBlock("tr",{key:u},[n.createElementVNode("td",wr,[d==r.question_active.answer?(n.openBlock(),n.createElementBlock("button",gr,n.toDisplayString(i.options[u]),1)):(n.openBlock(),n.createElementBlock("button",{key:1,onClick:n.withModifiers(f=>i.submitAnswer(r.question_active.question.exam.id,r.question_active.question.id,d),["prevent"]),class:"btn btn-outline-info btn-sm w-100 shdaow"},n.toDisplayString(i.options[u]),9,Nr))]),n.createElementVNode("td",kr,[n.createElementVNode("p",{innerHTML:r.question_active.question.question_bank["option_"+d]},null,8,Cr)])]))),128))])])])):(n.openBlock(),n.createElementBlock("div",Sr,Rr))]),n.createElementVNode("div",qr,[n.createElementVNode("div",Vr,[n.createElementVNode("div",Mr,[r.page>1?(n.openBlock(),n.createElementBlock("button",{key:0,onClick:t[1]||(t[1]=n.withModifiers((...d)=>i.prevPage&&i.prevPage(...d),["prevent"])),type:"button",class:"btn btn-gray-400 btn-sm btn-block mb-2"},"Sebelumnya")):n.createCommentVNode("",!0)]),n.createElementVNode("div",Tr,[r.page<Object.keys(r.all_questions).length?(n.openBlock(),n.createElementBlock("button",{key:0,onClick:t[2]||(t[2]=n.withModifiers((...d)=>i.nextPage&&i.nextPage(...d),["prevent"])),type:"button",class:"btn btn-gray-400 btn-sm"},"Selanjutnya")):n.createCommentVNode("",!0)])])])])]),n.createElementVNode("div",Or,[n.createElementVNode("div",Br,[n.createElementVNode("div",Ar,[n.createElementVNode("div",Dr,n.toDisplayString(r.question_answered)+" dikerjakan",1)]),n.createElementVNode("div",Lr,[(n.openBlock(!0),n.createElementBlock(n.Fragment,null,n.renderList(r.all_questions,(d,u)=>(n.openBlock(),n.createElementBlock("div",{key:u},[n.createElementVNode("div",Pr,[n.createElementVNode("div",Ur,[u+1==r.page?(n.openBlock(),n.createElementBlock("button",{key:0,onClick:n.withModifiers(f=>i.clickQuestion(u),["prevent"]),class:"btn btn-info btn-sm w-100"},n.toDisplayString(u+1),9,jr)):n.createCommentVNode("",!0),u+1!=r.page&&d.answer==0?(n.openBlock(),n.createElementBlock("button",{key:1,onClick:n.withModifiers(f=>i.clickQuestion(u),["prevent"]),class:"btn btn-outline-info btn-sm w-100"},n.toDisplayString(u+1),9,Ir)):n.createCommentVNode("",!0),u+1!=r.page&&d.answer!=0?(n.openBlock(),n.createElementBlock("button",{key:2,onClick:n.withModifiers(f=>i.clickQuestion(u),["prevent"]),class:"btn btn-success btn-sm w-100"},n.toDisplayString(u+1),9,Hr)):n.createCommentVNode("",!0)])])]))),128))]),n.createElementVNode("div",Fr,[n.createElementVNode("button",{onClick:t[3]||(t[3]=d=>i.showModalEndExam=!0),class:"btn btn-danger btn-md border-0 shadow w-100"},"Akhiri Ujian")])])])]),i.showModalEndExam?(n.openBlock(),n.createElementBlock("div",{key:0,class:n.normalizeClass(["modal fade",{show:i.showModalEndExam}]),tabindex:"-1","aria-hidden":"true",style:{display:"block"},role:"dialog"},[n.createElementVNode("div",$r,[n.createElementVNode("div",Jr,[zr,Wr,n.createElementVNode("div",Xr,[n.createElementVNode("button",{onClick:t[4]||(t[4]=n.withModifiers((...d)=>i.endExam&&i.endExam(...d),["prevent"])),type:"button",class:"btn btn-primary"},"Ya, Akhiri"),n.createElementVNode("button",{onClick:t[5]||(t[5]=n.withModifiers(d=>i.showModalEndExam=!1,["prevent"])),type:"button",class:"btn btn-secondary"},"Tutup")])])])],2)):n.createCommentVNode("",!0),i.showModalEndTimeExam?(n.openBlock(),n.createElementBlock("div",{key:1,class:n.normalizeClass(["modal fade",{show:i.showModalEndTimeExam}]),"data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true",style:{display:"block"},role:"dialog"},[n.createElementVNode("div",Yr,[n.createElementVNode("div",Kr,[Qr,Gr,n.createElementVNode("div",Zr,[n.createElementVNode("button",{onClick:t[6]||(t[6]=n.withModifiers((...d)=>i.endExam&&i.endExam(...d),["prevent"])),type:"button",class:"btn btn-primary"},"Ya")])])])],2)):n.createCommentVNode("",!0)],64)}const an=ht(or,[["render",en]]);export{an as default};