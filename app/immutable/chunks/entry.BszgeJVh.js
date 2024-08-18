var e,t;import{n,s as r,B as o}from"./scheduler.CpGingrp.js";function a(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function s({href:e}){return e.split("#")[0]}new URL("sveltekit-internal://");const l=["href","pathname","search","toString","toJSON"];function i(e,t,n){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(e,r){if("get"===r||"getAll"===r||"has"===r)return t=>(n(t),e[r](t));t();const o=Reflect.get(e,r);return"function"==typeof o?o.bind(e):o}}),enumerable:!0,configurable:!0});for(const o of l)Object.defineProperty(r,o,{get:()=>(t(),e[o]),enumerable:!0,configurable:!0});return r}const u="/__data.json",c=".html__data.json";const d=window.fetch;window.fetch=(e,t)=>("GET"!==(e instanceof Request?e.method:(null==t?void 0:t.method)||"GET")&&f.delete(h(e)),d(e,t));const f=new Map;function p(e,t){const n=h(e,t),r=document.querySelector(n);if(null==r?void 0:r.textContent){let{body:e,...t}=JSON.parse(r.textContent);const o=r.getAttribute("data-ttl");o&&f.set(n,{body:e,init:t,ttl:1e3*Number(o)});return null!==r.getAttribute("data-b64")&&(e=function(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}(e)),Promise.resolve(new Response(e,t))}return window.fetch(e,t)}function h(e,t){let n=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if((null==t?void 0:t.headers)||(null==t?void 0:t.body)){const e=[];t.headers&&e.push([...new Headers(t.headers)].join(",")),t.body&&("string"==typeof t.body||ArrayBuffer.isView(t.body))&&e.push(t.body),n+=`[data-hash="${function(...e){let t=5381;for(const n of e)if("string"==typeof n){let e=n.length;for(;e;)t=33*t^n.charCodeAt(--e)}else{if(!ArrayBuffer.isView(n))throw new TypeError("value must be a string or TypedArray");{const e=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=e.length;for(;r;)t=33*t^e[--r]}}return(t>>>0).toString(36)}(...e)}"]`}return n}const m=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function v(e){const t=[];var n;return{pattern:"/"===e?/^\/$/:new RegExp(`^${(n=e,n.slice(1).split("/").filter(g)).map((e=>{const n=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(e);if(n)return t.push({name:n[1],matcher:n[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const r=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(e);if(r)return t.push({name:r[1],matcher:r[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!e)return;const o=e.split(/\[(.+?)\](?!\])/);return"/"+o.map(((e,n)=>{if(n%2){if(e.startsWith("x+"))return y(String.fromCharCode(parseInt(e.slice(2),16)));if(e.startsWith("u+"))return y(String.fromCharCode(...e.slice(2).split("-").map((e=>parseInt(e,16)))));const r=m.exec(e),[,a,s,l,i]=r;return t.push({name:l,matcher:i,optional:!!a,rest:!!s,chained:!!s&&(1===n&&""===o[0])}),s?"(.*?)":a?"([^/]*)?":"([^/]+?)"}return y(e)})).join("")})).join("")}/?$`),params:t}}function g(e){return!/^\([^)]+\)$/.test(e)}function y(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function w({nodes:e,server_loads:t,dictionary:n,matchers:r}){const o=new Set(t);return Object.entries(n).map((([t,[n,o,l]])=>{const{pattern:i,params:u}=v(t),c={id:t,exec:e=>{const t=i.exec(e);if(t)return function(e,t,n){const r={},o=e.slice(1),a=o.filter((e=>void 0!==e));let s=0;for(let l=0;l<t.length;l+=1){const e=t[l];let i=o[l-s];if(e.chained&&e.rest&&s&&(i=o.slice(l-s,l+1).filter((e=>e)).join("/"),s=0),void 0!==i)if(e.matcher&&!n[e.matcher](i)){if(!e.optional||!e.chained)return;s++}else{r[e.name]=i;const n=t[l+1],u=o[l+1];n&&!n.rest&&n.optional&&u&&e.chained&&(s=0),n||u||Object.keys(r).length!==a.length||(s=0)}else e.rest&&(r[e.name]="")}if(!s)return r}(t,u,r)},errors:[1,...l||[]].map((t=>e[t])),layouts:[0,...o||[]].map(s),leaf:a(n)};return c.errors.length=c.layouts.length=Math.max(c.errors.length,c.layouts.length),c}));function a(t){const n=t<0;return n&&(t=~t),[n,e[t]]}function s(t){return void 0===t?t:[o.has(t),e[t]]}}function b(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function k(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const E=[];function S(e,t){return{subscribe:_(e,t).subscribe}}function _(e,t=n){let o;const a=new Set;function s(t){if(r(e,t)&&(e=t,o)){const t=!E.length;for(const n of a)n[1](),E.push(n,e);if(t){for(let e=0;e<E.length;e+=2)E[e][0](E[e+1]);E.length=0}}}function l(t){s(t(e))}return{set:s,update:l,subscribe:function(r,i=n){const u=[r,i];return a.add(u),1===a.size&&(o=t(s,l)||n),r(e),()=>{a.delete(u),0===a.size&&o&&(o(),o=null)}}}}const R=(null==(e=globalThis.__sveltekit_lhrz2s)?void 0:e.base)??"/my-static-site",A=(null==(t=globalThis.__sveltekit_lhrz2s)?void 0:t.assets)??R,x="sveltekit:snapshot",P="sveltekit:scroll",L="sveltekit:states",U="sveltekit:pageurl",j="sveltekit:history",O="sveltekit:navigation",T={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},$=location.origin;function I(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const e=document.getElementsByTagName("base");t=e.length?e[0].href:document.URL}return new URL(e,t)}function C(){return{x:pageXOffset,y:pageYOffset}}function N(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const D={...T,"":T.hover};function V(e){let t=e.assignedSlot??e.parentNode;return 11===(null==t?void 0:t.nodeType)&&(t=t.host),t}function B(e,t){for(;e&&e!==t;){if("A"===e.nodeName.toUpperCase()&&e.hasAttribute("href"))return e;e=V(e)}}function q(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target;return{url:n,external:!n||!!r||W(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),target:r,download:(null==n?void 0:n.origin)===$&&e.hasAttribute("download")}}function F(e){let t=null,n=null,r=null,o=null,a=null,s=null,l=e;for(;l&&l!==document.documentElement;)null===r&&(r=N(l,"preload-code")),null===o&&(o=N(l,"preload-data")),null===t&&(t=N(l,"keepfocus")),null===n&&(n=N(l,"noscroll")),null===a&&(a=N(l,"reload")),null===s&&(s=N(l,"replacestate")),l=V(l);function i(e){switch(e){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:D[r??"off"],preload_data:D[o??"off"],keepfocus:i(t),noscroll:i(n),reload:i(a),replace_state:i(s)}}function M(e){const t=_(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}function J(){const{set:e,subscribe:t}=_(!1);let n;return{subscribe:t,check:async function(){clearTimeout(n);try{const t=await fetch(`${A}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!t.ok)return!1;const r="1723970513870"!==(await t.json()).version;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}}}function W(e,t){return e.origin!==$||!e.pathname.startsWith(t)}const z=-1,G=-2,H=-3,K=-4,X=-5,Y=-6;const Q=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);class Z{constructor(e,t){this.status=e,this.body="string"==typeof t?{message:t}:t||{message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ee{constructor(e,t){this.status=e,this.location=t}}class te extends Error{constructor(e,t,n){super(n),this.status=e,this.text=t}}const ne="x-sveltekit-invalidated",re="x-sveltekit-trailing-slash";function oe(e){return e instanceof Z||e instanceof te?e.status:500}const ae=b(P)??{},se=b(x)??{},le={url:M({}),page:M({}),navigating:_(null),updated:J()};function ie(e){ae[e]=C()}function ue(e){return location.href=e.href,new Promise((()=>{}))}function ce(){}let de,fe,pe,he,me,ve;const ge=[],ye=[];let we=null;const be=[],ke=[];let Ee,Se,_e,Re,Ae,xe=[],Pe={branch:[],error:null,url:null},Le=!1,Ue=!1,je=!0,Oe=!1,Te=!1,$e=!1,Ie=!1;const Ce=new Set;async function Ne(e,t,n){var r,o;document.URL!==location.href&&(location.href=location.href),ve=e,de=w(e),he=document.documentElement,me=t,fe=e.nodes[0],pe=e.nodes[1],fe(),pe(),Se=null==(r=history.state)?void 0:r[j],_e=null==(o=history.state)?void 0:o[O],Se||(Se=_e=Date.now(),history.replaceState({...history.state,[j]:Se,[O]:_e},""));const a=ae[Se];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await async function(e,{status:t=200,error:n,node_ids:r,params:o,route:a,data:s,form:l}){Le=!0;const i=new URL(location.href);let u;({params:o={},route:a={id:null}}=Qe(i,!1)||{});try{const e=r.map((async(t,n)=>{const r=s[n];return(null==r?void 0:r.uses)&&(r.uses=st(r.uses)),We({loader:ve.nodes[t],url:i,params:o,route:a,parent:async()=>{const t={};for(let r=0;r<n;r+=1)Object.assign(t,(await e[r]).data);return t},server_data_node:Ge(r)})})),c=await Promise.all(e),d=de.find((({id:e})=>e===a.id));if(d){const e=d.layouts;for(let t=0;t<e.length;t++)e[t]||c.splice(t,0,void 0)}u=Je({url:i,params:o,branch:c,status:t,error:n,form:l,route:d??null})}catch(c){if(c instanceof ee)return void(await ue(new URL(c.location,location.href)));u=await Ye({status:oe(c),error:await rt(c,{url:i,params:o,route:a}),url:i,route:a})}u.props.page&&(u.props.page.state={});Me(u,e,!0)}(me,n):ot(location.href,{replaceState:!0}),function(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",(e=>{let t=!1;if(Be(),!Oe){const e=lt(Pe,void 0,null,"leave"),n={...e.navigation,cancel:()=>{t=!0,e.reject(new Error("navigation cancelled"))}};be.forEach((e=>e(n)))}t?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"})),addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&Be()})),(null==(e=navigator.connection)?void 0:e.saveData)||function(){let e;function t(e){r(e.composedPath()[0],1)}he.addEventListener("mousemove",(t=>{const n=t.target;clearTimeout(e),e=setTimeout((()=>{r(n,2)}),20)})),he.addEventListener("mousedown",t),he.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver((e=>{for(const t of e)t.isIntersecting&&(Fe(t.target.href),n.unobserve(t.target))}),{threshold:0});function r(e,t){const n=B(e,he);if(!n)return;const{url:r,external:o,download:a}=q(n,R);if(o||a)return;const s=F(n);if(!s.reload)if(t<=s.preload_data){const e=Qe(r,!1);e&&async function(e){if(e.id!==(null==we?void 0:we.id)){const t={};Ce.add(t),we={id:e.id,token:t,promise:Ke({...e,preload:t}).then((e=>(Ce.delete(t),"loaded"===e.type&&e.state.error&&(we=null),e)))}}we.promise}(e)}else t<=s.preload_code&&Fe(r.pathname)}function o(){n.disconnect();for(const e of he.querySelectorAll("a")){const{url:t,external:r,download:o}=q(e,R);if(r||o)continue;const a=F(e);a.reload||(a.preload_code===T.viewport&&n.observe(e),a.preload_code===T.eager&&Fe(t.pathname))}}xe.push(o),o()}();he.addEventListener("click",(async e=>{var n;if(e.button||1!==e.which)return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const r=B(e.composedPath()[0],he);if(!r)return;const{url:o,external:a,target:l,download:i}=q(r,R);if(!o)return;if("_parent"===l||"_top"===l){if(window.parent!==window)return}else if(l&&"_self"!==l)return;const u=F(r);if(!(r instanceof SVGAElement)&&o.protocol!==location.protocol&&"https:"!==o.protocol&&"http:"!==o.protocol)return;if(i)return;if(a||u.reload)return void(et({url:o,type:"link"})?Oe=!0:e.preventDefault());const[c,d]=o.href.split("#");if(void 0!==d&&c===s(location)){const[,a]=Pe.url.href.split("#");if(a===d)return e.preventDefault(),void(""===d||"top"===d&&null===r.ownerDocument.getElementById("top")?window.scrollTo({top:0}):null==(n=r.ownerDocument.getElementById(d))||n.scrollIntoView());if(Te=!0,ie(Se),t(o),!u.replace_state)return;Te=!1}e.preventDefault(),await new Promise((e=>{requestAnimationFrame((()=>{setTimeout(e,0)})),setTimeout(e,100)})),tt({type:"link",url:o,keepfocus:u.keepfocus,noscroll:u.noscroll,replace_state:u.replace_state??o.href===location.href})})),he.addEventListener("submit",(e=>{if(e.defaultPrevented)return;const t=HTMLFormElement.prototype.cloneNode.call(e.target),n=e.submitter;if("get"!==((null==n?void 0:n.formMethod)||t.method))return;const r=new URL((null==n?void 0:n.hasAttribute("formaction"))&&(null==n?void 0:n.formAction)||t.action);if(W(r,R))return;const o=e.target,a=F(o);if(a.reload)return;e.preventDefault(),e.stopPropagation();const s=new FormData(o),l=null==n?void 0:n.getAttribute("name");l&&s.append(l,(null==n?void 0:n.getAttribute("value"))??""),r.search=new URLSearchParams(s).toString(),tt({type:"form",url:r,keepfocus:a.keepfocus,noscroll:a.noscroll,replace_state:a.replace_state??r.href===location.href})})),addEventListener("popstate",(async e=>{var n;if(null==(n=e.state)?void 0:n[j]){const n=e.state[j];if(Ae={},n===Se)return;const r=ae[n],o=e.state[L]??{},a=new URL(e.state[U]??location.href),l=e.state[O],i=s(location)===s(Pe.url);if(l===_e&&($e||i))return t(a),ae[Se]=C(),r&&scrollTo(r.x,r.y),o!==Re.state&&(Re={...Re,state:o},Ee.$set({page:Re})),void(Se=n);const u=n-Se;await tt({type:"popstate",url:a,popped:{state:o,scroll:r,delta:u},accept:()=>{Se=n,_e=l},block:()=>{history.go(-u)},nav_token:Ae})}else if(!Te){t(new URL(location.href))}})),addEventListener("hashchange",(()=>{Te&&(Te=!1,history.replaceState({...history.state,[j]:++Se,[O]:_e},"",location.href))}));for(const n of document.querySelectorAll("link"))"icon"===n.rel&&(n.href=n.href);function t(e){Pe.url=e,le.page.set({...Re,url:e}),le.page.notify()}addEventListener("pageshow",(e=>{e.persisted&&le.navigating.set(null)}))}()}function De(e){ye.some((e=>null==e?void 0:e.snapshot))&&(se[e]=ye.map((e=>{var t;return null==(t=null==e?void 0:e.snapshot)?void 0:t.capture()})))}function Ve(e){var t;null==(t=se[e])||t.forEach(((e,t)=>{var n,r;null==(r=null==(n=ye[t])?void 0:n.snapshot)||r.restore(e)}))}function Be(){ie(Se),k(P,ae),De(_e),k(x,se)}async function qe(e,t,n,r){return tt({type:"goto",url:I(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ie=!0)}})}async function Fe(e){const t=de.find((t=>t.exec(Ze(e))));t&&await Promise.all([...t.layouts,t.leaf].map((e=>null==e?void 0:e[1]())))}function Me(e,t,n){var r;Pe=e.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),Re=e.props.page,Ee=new ve.root({target:t,props:{...e.props,stores:le,components:ye},hydrate:n}),Ve(_e);const a={from:null,to:{params:Pe.params,route:{id:(null==(r=Pe.route)?void 0:r.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};xe.forEach((e=>e(a))),Ue=!0}function Je({url:e,params:t,branch:n,status:r,error:o,route:a,form:s}){let l="never";if(!R||e.pathname!==R&&e.pathname!==R+"/")for(const m of n)void 0!==(null==m?void 0:m.slash)&&(l=m.slash);else l="always";var i,u;e.pathname=(i=e.pathname,u=l,"/"===i||"ignore"===u?i:"never"===u?i.endsWith("/")?i.slice(0,-1):i:"always"!==u||i.endsWith("/")?i:i+"/"),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:o,route:a},props:{constructors:(d=n,d.filter((e=>null!=e))).map((e=>e.node.component)),page:Re}};var d;void 0!==s&&(c.props.form=s);let f={},p=!Re,h=0;for(let m=0;m<Math.max(n.length,Pe.branch.length);m+=1){const e=n[m],t=Pe.branch[m];(null==e?void 0:e.data)!==(null==t?void 0:t.data)&&(p=!0),e&&(f={...f,...e.data},p&&(c.props[`data_${h}`]=f),h+=1)}return(!Pe.url||e.href!==Pe.url.href||Pe.error!==o||void 0!==s&&s!==Re.form||p)&&(c.props.page={error:o,params:t,route:{id:(null==a?void 0:a.id)??null},state:{},status:r,url:new URL(e),form:s??null,data:p?f:Re.data}),c}async function We({loader:e,parent:t,url:n,params:r,route:o,server_data_node:a}){var s,l,u;let c=null,d=!0;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},v=await e();if(null==(s=v.universal)?void 0:s.load){let e=function(...e){for(const t of e){const{href:e}=new URL(t,n);m.dependencies.add(e)}};const s={route:new Proxy(o,{get:(e,t)=>(d&&(m.route=!0),e[t])}),params:new Proxy(r,{get:(e,t)=>(d&&m.params.add(t),e[t])}),data:(null==a?void 0:a.data)??null,url:i(n,(()=>{d&&(m.url=!0)}),(e=>{d&&m.search_params.add(e)})),async fetch(t,r){let o;t instanceof Request?(o=t.url,r={body:"GET"===t.method||"HEAD"===t.method?void 0:await t.blob(),cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy,signal:t.signal,...r}):o=t;const a=new URL(o,n);return d&&e(a.href),a.origin===n.origin&&(o=a.href.slice(n.origin.length)),Ue?function(e,t,n){if(f.size>0){const t=h(e,n),r=f.get(t);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(null==n?void 0:n.cache))return new Response(r.body,r.init);f.delete(t)}}return window.fetch(t,n)}(o,a.href,r):p(o,r)},setHeaders:()=>{},depends:e,parent:()=>(d&&(m.parent=!0),t()),untrack(e){d=!1;try{return e()}finally{d=!0}}};c=await v.universal.load.call(null,s)??null}return{node:v,loader:e,server:a,universal:(null==(l=v.universal)?void 0:l.load)?{type:"data",data:c,uses:m}:null,data:c??(null==a?void 0:a.data)??null,slash:(null==(u=v.universal)?void 0:u.trailingSlash)??(null==a?void 0:a.slash)}}function ze(e,t,n,r,o,a){if(Ie)return!0;if(!o)return!1;if(o.parent&&e)return!0;if(o.route&&t)return!0;if(o.url&&n)return!0;for(const s of o.search_params)if(r.has(s))return!0;for(const s of o.params)if(a[s]!==Pe.params[s])return!0;for(const s of o.dependencies)if(ge.some((e=>e(new URL(s)))))return!0;return!1}function Ge(e,t){return"data"===(null==e?void 0:e.type)?e:"skip"===(null==e?void 0:e.type)?t??null:null}function He({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Re,constructors:[]}}}async function Ke({id:e,invalidating:t,url:n,params:r,route:o,preload:a}){if((null==we?void 0:we.id)===e)return Ce.delete(we.token),we.promise;const{errors:s,layouts:l,leaf:i}=o,u=[...l,i];s.forEach((e=>null==e?void 0:e().catch((()=>{})))),u.forEach((e=>null==e?void 0:e[1]().catch((()=>{}))));let c=null;const d=!!Pe.url&&e!==Pe.url.pathname+Pe.url.search,f=!!Pe.route&&o.id!==Pe.route.id,p=function(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const o=e.searchParams.getAll(r),a=t.searchParams.getAll(r);o.every((e=>a.includes(e)))&&a.every((e=>o.includes(e)))&&n.delete(r)}return n}(Pe.url,n);let h=!1;const m=u.map(((e,t)=>{var n;const o=Pe.branch[t],a=!!(null==e?void 0:e[0])&&((null==o?void 0:o.loader)!==e[1]||ze(h,f,d,p,null==(n=o.server)?void 0:n.uses,r));return a&&(h=!0),a}));if(m.some(Boolean)){try{c=await at(n,m)}catch(b){const t=await rt(b,{url:n,params:r,route:{id:e}});return Ce.has(a)?He({error:t,url:n,params:r,route:o}):Ye({status:oe(b),error:t,url:n,route:o})}if("redirect"===c.type)return c}const v=null==c?void 0:c.nodes;let g=!1;const y=u.map((async(e,t)=>{var a;if(!e)return;const s=Pe.branch[t],l=null==v?void 0:v[t];if(!(l&&"skip"!==l.type||e[1]!==(null==s?void 0:s.loader)||ze(g,f,d,p,null==(a=s.universal)?void 0:a.uses,r)))return s;if(g=!0,"error"===(null==l?void 0:l.type))throw l;return We({loader:e[1],url:n,params:r,route:o,parent:async()=>{var e;const n={};for(let r=0;r<t;r+=1)Object.assign(n,null==(e=await y[r])?void 0:e.data);return n},server_data_node:Ge(void 0===l&&e[0]?{type:"skip"}:l??null,e[0]?null==s?void 0:s.server:void 0)})}));for(const E of y)E.catch((()=>{}));const w=[];for(let E=0;E<u.length;E+=1)if(u[E])try{w.push(await y[E])}catch(k){if(k instanceof ee)return{type:"redirect",location:k.location};if(Ce.has(a))return He({error:await rt(k,{params:r,url:n,route:{id:o.id}}),url:n,params:r,route:o});let e,t=oe(k);if(null==v?void 0:v.includes(k))t=k.status??t,e=k.error;else if(k instanceof Z)e=k.body;else{if(await le.updated.check())return await ue(n);e=await rt(k,{params:r,url:n,route:{id:o.id}})}const l=await Xe(E,w,s);return l?Je({url:n,params:r,branch:w.slice(0,l.idx).concat(l.node),status:t,error:e,route:o}):await nt(n,{id:o.id},e,t)}else w.push(void 0);return Je({url:n,params:r,branch:w,status:200,error:null,route:o,form:t?void 0:null})}async function Xe(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ye({status:e,error:t,url:n,route:r}){const o={};let a=null;if(0===ve.server_loads[0])try{const e=await at(n,[!0]);if("data"!==e.type||e.nodes[0]&&"data"!==e.nodes[0].type)throw 0;a=e.nodes[0]??null}catch{(n.origin!==$||n.pathname!==location.pathname||Le)&&await ue(n)}return Je({url:n,params:o,branch:[await We({loader:fe,url:n,params:o,route:r,parent:()=>Promise.resolve({}),server_data_node:Ge(a)}),{node:await pe(),loader:pe,universal:null,server:null,data:null}],status:e,error:t,route:null})}function Qe(e,t){if(!e)return;if(W(e,R))return;let n;try{n=ve.hooks.reroute({url:new URL(e)})??e.pathname}catch(o){return}const r=Ze(n);for(const s of de){const n=s.exec(r);if(n){return{id:e.pathname+e.search,invalidating:t,route:s,params:a(n),url:e}}}}function Ze(e){return function(e){return e.split("%25").map(decodeURI).join("%25")}(e.slice(R.length)||"/")}function et({url:e,type:t,intent:n,delta:r}){let o=!1;const a=lt(Pe,n,e,t);void 0!==r&&(a.navigation.delta=r);const s={...a.navigation,cancel:()=>{o=!0,a.reject(new Error("navigation cancelled"))}};return Oe||be.forEach((e=>e(s))),o?null:a}async function tt({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:l={},redirect_count:i=0,nav_token:u={},accept:c=ce,block:d=ce}){const f=Qe(t,!1),p=et({url:t,type:e,delta:null==n?void 0:n.delta,intent:f});if(!p)return void d();const h=Se,m=_e;c(),Oe=!0,Ue&&le.navigating.set(p.navigation),Ae=u;let v=f&&await Ke(f);if(!v){if(W(t,R))return await ue(t);v=await nt(t,{id:null},await rt(new te(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(null==f?void 0:f.url)||t,Ae!==u)return p.reject(new Error("navigation aborted")),!1;if("redirect"===v.type){if(!(i>=20))return qe(new URL(v.location,t).href,{},i+1,u),!1;v=await Ye({status:500,error:await rt(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}})}else if(v.props.page.status>=400){await le.updated.check()&&await ue(t)}if(ge.length=0,Ie=!1,ie(h),De(m),v.props.page.url.pathname!==t.pathname&&(t.pathname=v.props.page.url.pathname),l=n?n.state:l,!n){const e=s?0:1,n={[j]:Se+=e,[O]:_e+=e,[L]:l};(s?history.replaceState:history.pushState).call(history,n,"",t),s||function(e,t){let n=e+1;for(;ae[n];)delete ae[n],n+=1;for(n=t+1;se[n];)delete se[n],n+=1}(Se,_e)}if(we=null,v.props.page.state=l,Ue){Pe=v.state,v.props.page&&(v.props.page.url=t);const e=(await Promise.all(ke.map((e=>e(p.navigation))))).filter((e=>"function"==typeof e));if(e.length>0){let t=function(){xe=xe.filter((t=>!e.includes(t)))};e.push(t),xe.push(...e)}Ee.$set(v.props),$e=!0}else Me(v,me,!1);const{activeElement:g}=document;await o();const y=n?n.scroll:a?C():null;if(je){const e=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));y?scrollTo(y.x,y.y):e?e.scrollIntoView():scrollTo(0,0)}const w=document.activeElement!==g&&document.activeElement!==document.body;r||w||function(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),null!==t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex");const n=getSelection();if(n&&"None"!==n.type){const e=[];for(let t=0;t<n.rangeCount;t+=1)e.push(n.getRangeAt(t));setTimeout((()=>{if(n.rangeCount===e.length){for(let t=0;t<n.rangeCount;t+=1){const r=e[t],o=n.getRangeAt(t);if(r.commonAncestorContainer!==o.commonAncestorContainer||r.startContainer!==o.startContainer||r.endContainer!==o.endContainer||r.startOffset!==o.startOffset||r.endOffset!==o.endOffset)return}n.removeAllRanges()}}))}}}(),je=!0,v.props.page&&(Re=v.props.page),Oe=!1,"popstate"===e&&Ve(_e),p.fulfil(void 0),xe.forEach((e=>e(p.navigation))),le.navigating.set(null)}async function nt(e,t,n,r){return e.origin!==$||e.pathname!==location.pathname||Le?await ue(e):await Ye({status:r,error:n,url:e,route:t})}function rt(e,t){if(e instanceof Z)return e.body;const n=oe(e),r=function(e){return e instanceof te?e.text:"Internal Error"}(e);return ve.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function ot(e,t={}){return(e=I(e)).origin!==$?Promise.reject(new Error("goto: invalid URL")):qe(e,t,0)}async function at(e,t){var n;const r=new URL(e);var o;r.pathname=(o=e.pathname).endsWith(".html")?o.replace(/\.html$/,c):o.replace(/\/$/,"")+u,e.pathname.endsWith("/")&&r.searchParams.append(re,"1"),r.searchParams.append(ne,t.map((e=>e?"1":"0")).join(""));const a=await d(r.href);if(!a.ok){let e;throw(null==(n=a.headers.get("content-type"))?void 0:n.includes("application/json"))?e=await a.json():404===a.status?e="Not Found":500===a.status&&(e="Internal Error"),new Z(a.status,e)}return new Promise((async e=>{var t;const n=new Map,r=a.body.getReader(),o=new TextDecoder;function s(e){return function(e,t){if("number"==typeof e)return o(e,!0);if(!Array.isArray(e)||0===e.length)throw new Error("Invalid input");const n=e,r=Array(n.length);function o(e,a=!1){if(e===z)return;if(e===H)return NaN;if(e===K)return 1/0;if(e===X)return-1/0;if(e===Y)return-0;if(a)throw new Error("Invalid input");if(e in r)return r[e];const s=n[e];if(s&&"object"==typeof s)if(Array.isArray(s))if("string"==typeof s[0]){const n=s[0],a=null==t?void 0:t[n];if(a)return r[e]=a(o(s[1]));switch(n){case"Date":r[e]=new Date(s[1]);break;case"Set":const t=new Set;r[e]=t;for(let e=1;e<s.length;e+=1)t.add(o(s[e]));break;case"Map":const a=new Map;r[e]=a;for(let e=1;e<s.length;e+=2)a.set(o(s[e]),o(s[e+1]));break;case"RegExp":r[e]=new RegExp(s[1],s[2]);break;case"Object":r[e]=Object(s[1]);break;case"BigInt":r[e]=BigInt(s[1]);break;case"null":const l=Object.create(null);r[e]=l;for(let e=1;e<s.length;e+=2)l[s[e]]=o(s[e+1]);break;default:throw new Error(`Unknown type ${n}`)}}else{const t=new Array(s.length);r[e]=t;for(let e=0;e<s.length;e+=1){const n=s[e];n!==G&&(t[e]=o(n))}}else{const t={};r[e]=t;for(const e in s){const n=s[e];t[e]=o(n)}}else r[e]=s;return r[e]}return o(0)}(e,{Promise:e=>new Promise(((t,r)=>{n.set(e,{fulfil:t,reject:r})}))})}let l="";for(;;){const{done:a,value:i}=await r.read();if(a&&!l)break;for(l+=!i&&l?"\n":o.decode(i,{stream:!0});;){const r=l.indexOf("\n");if(-1===r)break;const o=JSON.parse(l.slice(0,r));if(l=l.slice(r+1),"redirect"===o.type)return e(o);if("data"===o.type)null==(t=o.nodes)||t.forEach((e=>{"data"===(null==e?void 0:e.type)&&(e.uses=st(e.uses),e.data=s(e.data))})),e(o);else if("chunk"===o.type){const{id:e,data:t,error:r}=o,a=n.get(e);n.delete(e),r?a.reject(s(r)):a.fulfil(s(t))}}}}))}function st(e){return{dependencies:new Set((null==e?void 0:e.dependencies)??[]),params:new Set((null==e?void 0:e.params)??[]),parent:!!(null==e?void 0:e.parent),route:!!(null==e?void 0:e.route),url:!!(null==e?void 0:e.url),search_params:new Set((null==e?void 0:e.search_params)??[])}}function lt(e,t,n,r){var o,a;let s,l;const i=new Promise(((e,t)=>{s=e,l=t}));i.catch((()=>{}));return{navigation:{from:{params:e.params,route:{id:(null==(o=e.route)?void 0:o.id)??null},url:e.url},to:n&&{params:(null==t?void 0:t.params)??null,route:{id:(null==(a=null==t?void 0:t.route)?void 0:a.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:s,reject:l}}export{Ne as a,R as b,ot as g,S as r,le as s,_ as w};
