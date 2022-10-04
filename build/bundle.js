var app=function(){"use strict";function e(){}const t=e=>e;function n(e,t){for(const n in t)e[n]=t[n];return e}function r(e){return e()}function s(){return Object.create(null)}function a(e){e.forEach(r)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l;function c(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function u(e,t,n){e.$$.on_destroy.push(c(t,n))}function d(e,t,n,r){if(e){const s=h(e,t,n,r);return e[0](s)}}function h(e,t,r,s){return e[1]&&s?n(r.ctx.slice(),e[1](s(t))):r.ctx}function p(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}function m(e,t,n,r,s,a){if(s){const o=h(t,n,r,a);e.p(o,s)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function g(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function v(e,t){const n={};t=new Set(t);for(const r in e)t.has(r)||"$"===r[0]||(n[r]=e[r]);return n}function y(e,t,n){return e.set(n),t}const _="undefined"!=typeof window;let b=_?()=>window.performance.now():()=>Date.now(),w=_?e=>requestAnimationFrame(e):e;const S=new Set;function A(e){S.forEach((t=>{t.c(e)||(S.delete(t),t.f())})),0!==S.size&&w(A)}function I(e,t){e.appendChild(t)}function T(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function D(e){const t=O("style");return function(e,t){I(e.head||e,t),t.sheet}(T(e),t),t.sheet}function k(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode.removeChild(e)}function E(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function C(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function M(){return $(" ")}function N(){return $("")}function P(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function L(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:L(e,r,t[r])}function q(e,t,n){t in e?e[t]="boolean"==typeof e[t]&&""===n||n:L(e,t,n)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function W(e,t){e.value=null==t?"":t}function F(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function B(e,t){for(let n=0;n<e.options.length;n+=1){const r=e.options[n];if(r.__value===t)return void(r.selected=!0)}e.selectedIndex=-1}let K;function j(){if(void 0===K){K=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){K=!0}}return K}function J(e,t,n){e.classList[n?"add":"remove"](t)}function H(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,r,t),s}const z=new Map;let V,G=0;function Y(e,t,n,r,s,a,o,i=0){const l=16.666/r;let c="{\n";for(let e=0;e<=1;e+=l){const r=t+(n-t)*a(e);c+=100*e+`%{${o(r,1-r)}}\n`}const u=c+`100% {${o(n,1-n)}}\n}`,d=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${i}`,h=T(e),{stylesheet:p,rules:m}=z.get(h)||function(e,t){const n={stylesheet:D(t),rules:{}};return z.set(e,n),n}(h,e);m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const f=e.style.animation||"";return e.style.animation=`${f?`${f}, `:""}${d} ${r}ms linear ${s}ms 1 both`,G+=1,d}function X(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),s=n.length-r.length;s&&(e.style.animation=r.join(", "),G-=s,G||w((()=>{G||(z.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&R(t)})),z.clear())})))}function Z(e){V=e}function Q(){if(!V)throw new Error("Function called outside component initialization");return V}function ee(e){Q().$$.on_mount.push(e)}function te(){const e=Q();return(t,n,{cancelable:r=!1}={})=>{const s=e.$$.callbacks[t];if(s){const a=H(t,n,{cancelable:r});return s.slice().forEach((t=>{t.call(e,a)})),!a.defaultPrevented}return!0}}function ne(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const re=[],se=[],ae=[],oe=[],ie=Promise.resolve();let le=!1;function ce(){le||(le=!0,ie.then(ge))}function ue(){return ce(),ie}function de(e){ae.push(e)}function he(e){oe.push(e)}const pe=new Set;let me,fe=0;function ge(){const e=V;do{for(;fe<re.length;){const e=re[fe];fe++,Z(e),ve(e.$$)}for(Z(null),re.length=0,fe=0;se.length;)se.pop()();for(let e=0;e<ae.length;e+=1){const t=ae[e];pe.has(t)||(pe.add(t),t())}ae.length=0}while(re.length);for(;oe.length;)oe.pop()();le=!1,pe.clear(),Z(e)}function ve(e){if(null!==e.fragment){e.update(),a(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}function ye(e,t,n){e.dispatchEvent(H(`${t?"intro":"outro"}${n}`))}const _e=new Set;let be;function we(){be={r:0,c:[],p:be}}function Se(){be.r||a(be.c),be=be.p}function Ae(e,t){e&&e.i&&(_e.delete(e),e.i(t))}function Ie(e,t,n,r){if(e&&e.o){if(_e.has(e))return;_e.add(e),be.c.push((()=>{_e.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}const Te={duration:0};function De(n,r,s,i){let l=r(n,s),c=i?0:1,u=null,d=null,h=null;function p(){h&&X(n,h)}function m(e,t){const n=e.b-c;return t*=Math.abs(n),{a:c,b:e.b,d:n,duration:t,start:e.start,end:e.start+t,group:e.group}}function f(r){const{delay:s=0,duration:o=300,easing:i=t,tick:f=e,css:g}=l||Te,v={start:b()+s,b:r};r||(v.group=be,be.r+=1),u||d?d=v:(g&&(p(),h=Y(n,c,r,o,s,i,g)),r&&f(0,1),u=m(v,o),de((()=>ye(n,r,"start"))),function(e){let t;0===S.size&&w(A),new Promise((n=>{S.add(t={c:e,f:n})}))}((e=>{if(d&&e>d.start&&(u=m(d,o),d=null,ye(n,u.b,"start"),g&&(p(),h=Y(n,c,u.b,u.duration,0,i,l.css))),u)if(e>=u.end)f(c=u.b,1-c),ye(n,u.b,"end"),d||(u.b?p():--u.group.r||a(u.group.c)),u=null;else if(e>=u.start){const t=e-u.start;c=u.a+u.d*i(t/u.duration),f(c,1-c)}return!(!u&&!d)})))}return{run(e){o(l)?(me||(me=Promise.resolve(),me.then((()=>{me=null}))),me).then((()=>{l=l(),f(e)})):f(e)},end(){p(),u=d=null}}}function ke(e,t){Ie(e,1,1,(()=>{t.delete(e.key)}))}function Re(e,t){const n={},r={},s={$$scope:1};let a=e.length;for(;a--;){const o=e[a],i=t[a];if(i){for(const e in o)e in i||(r[e]=1);for(const e in i)s[e]||(n[e]=i[e],s[e]=1);e[a]=i}else for(const e in o)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function Ee(e){return"object"==typeof e&&null!==e?e:{}}function Oe(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function Ce(e){e&&e.c()}function $e(e,t,n,s){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=e.$$;i&&i.m(t,n),s||de((()=>{const t=l.map(r).filter(o);c?c.push(...t):a(t),e.$$.on_mount=[]})),u.forEach(de)}function Me(e,t){const n=e.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(t,n,r,o,i,l,c,u=[-1]){const d=V;Z(t);const h=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(h.root);let p=!1;if(h.ctx=r?r(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&i(h.ctx[e],h.ctx[e]=s)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](s),p&&function(e,t){-1===e.$$.dirty[0]&&(re.push(e),ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],h.update(),p=!0,a(h.before_update),h.fragment=!!o&&o(h.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);h.fragment&&h.fragment.l(e),e.forEach(R)}else h.fragment&&h.fragment.c();n.intro&&Ae(t.$$.fragment),$e(t,n.target,n.anchor,n.customElement),ge()}Z(d)}class Pe{$destroy(){Me(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Le=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},xe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const s=e[t],a=t+1<e.length,o=a?e[t+1]:0,i=t+2<e.length,l=i?e[t+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;i||(h=64,a||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Le(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&a)}else if(s>239&&s<365){const a=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&a)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const i=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==a||null==o||null==i)throw Error();const l=s<<2|a>>4;if(r.push(l),64!==o){const e=a<<4&240|o>>2;if(r.push(e),64!==i){const e=o<<6&192|i;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},qe=function(e){return function(e){const t=Le(e);return xe.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ue{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function We(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Fe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Be.prototype.create)}}class Be{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?function(e,t){return e.replace(Ke,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new Fe(r,o,n)}}const Ke=/\{\$([^}]+)}/g;function je(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],a=t[s];if(Je(n)&&Je(a)){if(!je(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Je(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function He(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class ze{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ve),void 0===r.error&&(r.error=Ve),void 0===r.complete&&(r.complete=Ve);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ve(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ge(e){return e&&e._delegate?e._delegate:e}class Ye{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Xe="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ze{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ue;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:Xe})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Xe?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Xe:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Qe{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ze(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var et;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(et||(et={}));const tt={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},nt=et.INFO,rt={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},st=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=rt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class at{constructor(e){this.name=e,this._logLevel=nt,this._logHandler=st,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in et))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?tt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...e),this._logHandler(this,et.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...e),this._logHandler(this,et.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,et.INFO,...e),this._logHandler(this,et.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,et.WARN,...e),this._logHandler(this,et.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...e),this._logHandler(this,et.ERROR,...e)}}let ot,it;const lt=new WeakMap,ct=new WeakMap,ut=new WeakMap,dt=new WeakMap,ht=new WeakMap;let pt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ct.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ut.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function mt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(it||(it=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(vt(this),t),gt(lt.get(this))}:function(...t){return gt(e.apply(vt(this),t))}:function(t,...n){const r=e.call(vt(this),t,...n);return ut.set(r,t.sort?t.sort():[t]),gt(r)}}function ft(e){return"function"==typeof e?mt(e):(e instanceof IDBTransaction&&function(e){if(ct.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)}));ct.set(e,t)}(e),t=e,(ot||(ot=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,pt):e);var t}function gt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{t(gt(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&lt.set(t,e)})).catch((()=>{})),ht.set(t,e),t}(e);if(dt.has(e))return dt.get(e);const t=ft(e);return t!==e&&(dt.set(e,t),ht.set(t,e)),t}const vt=e=>ht.get(e);const yt=["get","getKey","getAll","getAllKeys","count"],_t=["put","add","delete","clear"],bt=new Map;function wt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(bt.get(t))return bt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=_t.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!yt.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,s?"readwrite":"readonly");let o=a.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&a.done]))[0]};return bt.set(t,a),a}pt=(e=>({...e,get:(t,n,r)=>wt(t,n)||e.get(t,n,r),has:(t,n)=>!!wt(t,n)||e.has(t,n)}))(pt);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class St{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const At="@firebase/app",It="0.7.33",Tt=new at("@firebase/app"),Dt="[DEFAULT]",kt={[At]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Rt=new Map,Et=new Map;function Ot(e,t){try{e.container.addComponent(t)}catch(n){Tt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ct(e){const t=e.name;if(Et.has(t))return Tt.debug(`There were multiple attempts to register component ${t}.`),!1;Et.set(t,e);for(const t of Rt.values())Ot(t,e);return!0}function $t(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Mt=new Be("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Nt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ye("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mt.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Pt="9.10.0";function Lt(e,t,n){var r;let s=null!==(r=kt[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const e=[`Unable to register library "${s}" with version "${t}":`];return a&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Tt.warn(e.join(" "))}Ct(new Ye(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const xt="firebase-heartbeat-store";let qt=null;function Ut(){return qt||(qt=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const o=indexedDB.open(e,t),i=gt(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(gt(o.result),e.oldVersion,e.newVersion,gt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),i.then((e=>{a&&e.addEventListener("close",(()=>a())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),i}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(xt)}}).catch((e=>{throw Mt.create("idb-open",{originalErrorMessage:e.message})}))),qt}async function Wt(e,t){var n;try{const n=(await Ut()).transaction(xt,"readwrite"),r=n.objectStore(xt);return await r.put(t,Ft(e)),n.done}catch(e){if(e instanceof Fe)Tt.warn(e.message);else{const t=Mt.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Tt.warn(t.message)}}}function Ft(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Kt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Kt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Jt(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=qe(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Kt(){return(new Date).toISOString().substring(0,10)}class jt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await Ut()).transaction(xt).objectStore(xt).get(Ft(e))}catch(e){if(e instanceof Fe)Tt.warn(e.message);else{const n=Mt.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Tt.warn(n.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Wt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Jt(e){return qe(JSON.stringify({version:2,heartbeats:e})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Ht;Ht="",Ct(new Ye("platform-logger",(e=>new St(e)),"PRIVATE")),Ct(new Ye("heartbeat",(e=>new Bt(e)),"PRIVATE")),Lt(At,It,Ht),Lt(At,It,"esm2017"),Lt("fire-js","");function zt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}function Vt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Lt("firebase","9.10.0","app");const Gt=Vt,Yt=new Be("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Xt=new at("@firebase/auth");function Zt(e,...t){Xt.logLevel<=et.ERROR&&Xt.error(`Auth (9.10.0): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Qt(e,...t){throw tn(e,...t)}function en(e,...t){return tn(e,...t)}function tn(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Yt.create(e,...t)}function nn(e,t,...n){if(!e)throw tn(t,...n)}function rn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zt(t),new Error(t)}function sn(e,t){e||rn(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const an=new Map;function on(e){sn(e instanceof Function,"Expected a class definition");let t=an.get(e);return t?(sn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,an.set(e,t),t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ln(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function cn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function un(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==cn()&&"https:"!==cn()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class dn{constructor(e,t){this.shortDelay=e,this.longDelay=t,sn(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return un()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hn(e,t){sn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const mn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},fn=new dn(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function gn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function vn(e,t,n,r,s={}){return yn(e,s,(async()=>{let s={},a={};r&&("GET"===t?a=r:s={body:JSON.stringify(r)});const o=He(Object.assign({key:e.config.apiKey},a)).slice(1),i=await e._getAdditionalHeaders();return i["Content-Type"]="application/json",e.languageCode&&(i["X-Firebase-Locale"]=e.languageCode),pn.fetch()(bn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:i,referrerPolicy:"no-referrer"},s))}))}async function yn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},mn),t);try{const t=new wn(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Sn(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const t=s.ok?a.errorMessage:a.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Sn(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw Sn(e,"email-already-in-use",a);if("USER_DISABLED"===n)throw Sn(e,"user-disabled",a);const i=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const r=Object.assign(Object.assign({},Gt()),{[t]:n});return new Be("auth","Firebase",r).create(t,{appName:e.name})}(e,i,o);Qt(e,i)}}catch(t){if(t instanceof Fe)throw t;Qt(e,"network-request-failed")}}async function _n(e,t,n,r,s={}){const a=await vn(e,t,n,r,s);return"mfaPendingCredential"in a&&Qt(e,"multi-factor-auth-required",{_serverResponse:a}),a}function bn(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?hn(e.config,s):`${e.config.apiScheme}://${s}`}class wn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(en(this.auth,"network-request-failed"))),fn.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=en(e,t,r);return s.customData._tokenResponse=n,s}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function An(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function In(e){return 1e3*Number(e)}function Tn(e){var t;const[n,r,s]=e.split(".");if(void 0===n||void 0===r||void 0===s)return Zt("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return xe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}(r);return e?JSON.parse(e):(Zt("Failed to decode base64 JWT payload"),null)}catch(e){return Zt("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Dn(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Fe&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class kn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=An(this.lastLoginAt),this.creationTime=An(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function En(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Dn(e,async function(e,t){return vn(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));nn(null==s?void 0:s.users.length,n,"internal-error");const a=s.users[0];e._notifyReloadListener(a);const o=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,n=zt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const i=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&a.passwordHash||(null==i?void 0:i.length)),h=!!u&&d,p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:i,metadata:new Rn(a.createdAt,a.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class On{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){nn(e.idToken,"internal-error"),nn(void 0!==e.idToken,"internal-error"),nn(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Tn(e);return nn(t,"internal-error"),nn(void 0!==t.exp,"internal-error"),nn(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return nn(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){const n=await yn(e,{},(async()=>{const n=He({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=bn(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",pn.fetch()(a,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,a=new On;return n&&(nn("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(nn("string"==typeof r,"internal-error",{appName:e}),a.accessToken=r),s&&(nn("number"==typeof s,"internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new On,this.toJSON())}_performRefresh(){return rn("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Cn(e,t){nn("string"==typeof e||void 0===e,"internal-error",{appName:t})}class $n{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=zt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Dn(this,this.stsTokenManager.getToken(this.auth,e));return nn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ge(e),r=await n.getIdToken(t),s=Tn(r);nn(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const a="object"==typeof s.firebase?s.firebase:void 0,o=null==a?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:An(In(s.auth_time)),issuedAtTime:An(In(s.iat)),expirationTime:An(In(s.exp)),signInProvider:o||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ge(e);await En(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(nn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){nn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await En(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dn(this,async function(e,t){return vn(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,a,o,i,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(a=t.photoURL)&&void 0!==a?a:void 0,m=null!==(o=t.tenantId)&&void 0!==o?o:void 0,f=null!==(i=t._redirectEventId)&&void 0!==i?i:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:S}=t;nn(y&&S,e,"internal-error");const A=On.fromJSON(this.name,S);nn("string"==typeof y,e,"internal-error"),Cn(u,e.name),Cn(d,e.name),nn("boolean"==typeof _,e,"internal-error"),nn("boolean"==typeof b,e,"internal-error"),Cn(h,e.name),Cn(p,e.name),Cn(m,e.name),Cn(f,e.name),Cn(g,e.name),Cn(v,e.name);const I=new $n({uid:y,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:h,tenantId:m,stsTokenManager:A,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),f&&(I._redirectEventId=f),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new On;r.updateFromServerResponse(t);const s=new $n({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await En(s),s}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Mn.type="NONE";const Nn=Mn;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Pn(e,t,n){return`firebase:${e}:${t}:${n}`}class Ln{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Pn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Pn("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ln(on(Nn),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||on(Nn);const a=Pn(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(a);if(t){const r=$n._fromJSON(e,t);n!==s&&(o=r),s=n;break}}catch(e){}const i=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&i.length?(s=i[0],o&&await s._set(a,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(a)}catch(e){}}))),new Ln(s,e,n)):new Ln(s,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Fn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(qn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Kn(t))return"Blackberry";if(jn(t))return"Webos";if(Un(t))return"Safari";if((t.includes("chrome/")||Wn(t))&&!t.includes("edge/"))return"Chrome";if(Bn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function qn(e=We()){return/firefox\//i.test(e)}function Un(e=We()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wn(e=We()){return/crios\//i.test(e)}function Fn(e=We()){return/iemobile/i.test(e)}function Bn(e=We()){return/android/i.test(e)}function Kn(e=We()){return/blackberry/i.test(e)}function jn(e=We()){return/webos/i.test(e)}function Jn(e=We()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Hn(){return function(){const e=We();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function zn(e=We()){return Jn(e)||Bn(e)||jn(e)||Kn(e)||/windows phone/i.test(e)||Fn(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Vn(e,t=[]){let n;switch(e){case"Browser":n=xn(We());break;case"Worker":n=`${xn(We())}-${e}`;break;default:n=e}return`${n}/JsCore/9.10.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yn{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zn(this),this.idTokenSubscription=new Zn(this),this.beforeStateQueue=new Gn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=on(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,a=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==a||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return nn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await En(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ge(e):null;return t&&nn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&nn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(on(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Be("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&on(e)||this._popupRedirectResolver;nn(t,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[on(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return nn(a,this,"internal-error"),a.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return nn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Xn(e){return Ge(e)}class Zn{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new ze(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return nn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,t){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function er(e,t){return _n(e,"POST","/v1/accounts:signInWithIdp",gn(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tr extends Qn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=zt(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new tr(n,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){return er(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,er(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,er(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=He(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rr extends nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sr extends rr{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch(e){return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com",sr.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ar extends rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ar.credential(t,n)}catch(e){return null}}}ar.GOOGLE_SIGN_IN_METHOD="google.com",ar.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class or extends rr{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch(e){return null}}}or.GITHUB_SIGN_IN_METHOD="github.com",or.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ir extends rr{constructor(){super("twitter.com")}static credential(e,t){return tr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ir.credential(t,n)}catch(e){return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com",ir.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await $n._fromIdTokenResponse(e,n,r),a=cr(n);return new lr({user:s,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=cr(n);return new lr({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function cr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ur extends Fe{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ur.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ur(e,t,n,r)}}function dr(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ur._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function hr(e,t){const n=Xn(e),r=await
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t){return _n(e,"POST","/v1/accounts:signInWithCustomToken",gn(e,t))}(n,{token:t,returnSecureToken:!0}),s=await lr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}const pr="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mr{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fr extends mr{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=We();return Un(e)||Jn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=zn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Hn()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fr.type="LOCAL";const gr=fr;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vr extends mr{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vr.type="SESSION";const yr=vr;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class _r{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _r(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,a=this.handlersMap[r];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(a).map((async e=>e(t.origin,s))),i=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:i})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function br(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */_r.receivers=[];class wr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise(((o,i)=>{const l=br("",20);r.port1.start();const c=setTimeout((()=>{i(new Error("unsupported_event"))}),n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{i(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),i(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Sr(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ar(){return void 0!==Sr().WorkerGlobalScope&&"function"==typeof Sr().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ir="firebaseLocalStorageDb",Tr="firebaseLocalStorage",Dr="fbase_key";class kr{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Rr(e,t){return e.transaction([Tr],t?"readwrite":"readonly").objectStore(Tr)}function Er(){const e=indexedDB.open(Ir,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Tr,{keyPath:Dr})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Tr)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ir);return new kr(e).toPromise()}(),t(await Er()))}))}))}async function Or(e,t,n){const r=Rr(e,!0).put({[Dr]:t,value:n});return new kr(r).toPromise()}function Cr(e,t){const n=Rr(e,!0).delete(t);return new kr(n).toPromise()}class $r{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Er()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ar()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_r._getInstance(Ar()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new wr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Er();return await Or(e,pr,"1"),await Cr(e,pr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Or(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Rr(e,!1).get(t),r=await new kr(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Cr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Rr(e,!1).getAll();return new kr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}$r.type="LOCAL";const Mr=$r;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nr(e){return new Promise(((t,n)=>{const r=document.createElement("script");var s,a;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=en("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(a=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==a?a:document).appendChild(r)}))}new dn(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Pr extends Qn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,t){return er(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lr(e){
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return async function(e,t,n=!1){const r="signIn",s=await dr(e,r,t),a=await lr._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(a.user),a}(e.auth,new Pr(e),e.bypassAuthState)}function xr(e){const{auth:t,user:n}=e;return nn(n,t,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t,n=!1){var r;const{auth:s}=e,a="reauthenticate";try{const r=await Dn(e,dr(s,a,t,e),n);nn(r.idToken,s,"internal-error");const o=Tn(r.idToken);nn(o,s,"internal-error");const{sub:i}=o;return nn(e.uid===i,s,"user-mismatch"),lr._forOperation(e,a,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&Qt(s,"user-mismatch"),e}}(n,new Pr(e),e.bypassAuthState)}async function qr(e){const{auth:t,user:n}=e;return nn(n,t,"internal-error"),async function(e,t,n=!1){const r=await Dn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return lr._forOperation(e,"link",r)}(n,new Pr(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ur{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:a,type:o}=e;if(a)return void this.reject(a);const i={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(i))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lr;case"linkViaPopup":case"linkViaRedirect":return qr;case"reauthViaPopup":case"reauthViaRedirect":return xr;default:Qt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Wr=new dn(2e3,1e4);class Fr extends Ur{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return nn(e,this.auth,"internal-error"),e}async onExecution(){sn(1===this.filter.length,"Popup operations only handle one event");const e=br();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(en(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Wr.get())};e()}}Fr.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Br="pendingRedirect",Kr=new Map;class jr extends Ur{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Pn(Br,e.config.apiKey,e.name)}(t),r=function(e){return on(e._redirectPersistence)}(e);if(!await r._isAvailable())return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Jr(e,t){Kr.set(e._key(),t)}async function Hr(e,t,n=!1){const r=Xn(e),s=
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e,t){return t?on(t):(nn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),a=new jr(r,s,n),o=await a.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gr(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Gr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(en(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vr(e))}saveEventToCache(e){this.cachedEventUids.add(Vr(e)),this.lastProcessedEventTime=Date.now()}}function Vr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Gr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Yr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xr=/^https?/;async function Zr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return vn(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Qr(e))return}catch(e){}Qt(e,"unauthorized-domain")}function Qr(e){const t=ln(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Xr.test(n))return!1;if(Yr.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const es=new dn(3e4,6e4);function ts(){const e=Sr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function ns(e){return new Promise(((t,n)=>{var r,s,a;function o(){ts(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ts(),n(en(e,"network-request-failed"))},timeout:es.get()})}if(null===(s=null===(r=Sr().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Sr().gapi)||void 0===a?void 0:a.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Sr()[t]=()=>{gapi.load?o():n(en(e,"network-request-failed"))},Nr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw rs=null,e}))}let rs=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ss=new dn(5e3,15e3),as={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},os=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function is(e){const t=e.config;nn(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?hn(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Pt},s=os.get(e.config.apiHost);s&&(r.eid=s);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${He(r).slice(1)}`}async function ls(e){const t=await function(e){return rs=rs||ns(e),rs}(e),n=Sr().gapi;return nn(n,e,"internal-error"),t.open({where:document.body,url:is(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:as,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=en(e,"network-request-failed"),a=Sr().setTimeout((()=>{r(s)}),ss.get());function o(){Sr().clearTimeout(a),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const cs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class us{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ds(e,t,n,r=500,s=600){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let i="";const l=Object.assign(Object.assign({},cs),{width:r.toString(),height:s.toString(),top:a,left:o}),c=We().toLowerCase();n&&(i=Wn(c)?"_blank":n),qn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=We()){var t;return Jn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==i)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t||"",i),new us(null);const d=window.open(t||"",i,u);nn(d,e,"popup-blocked");try{d.focus()}catch(e){}return new us(d)}const hs="__/auth/handler",ps="emulator/auth/handler";function ms(e,t,n,r,s,a){nn(e.config.authDomain,e,"auth-domain-config-required"),nn(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Pt,eventId:s};if(t instanceof nr){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))o[e]=t}if(t instanceof rr){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const i=o;for(const e of Object.keys(i))void 0===i[e]&&delete i[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${hs}`;return hn(e,ps)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${He(i).slice(1)}`}const fs="webStorageSupport";const gs=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yr,this._completeRedirectFn=Hr,this._overrideRedirectResult=Jr}async _openPopup(e,t,n,r){var s;sn(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return ds(e,ms(e,t,n,ln(),r),br())}async _openRedirect(e,t,n,r){var s;return await this._originValidation(e),s=ms(e,t,n,ln(),r),Sr().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(sn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ls(e),n=new zr(e);return t.register("authEvent",(t=>{nn(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fs,{type:fs},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),Qt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return zn()||Un()||Jn()}};var vs,ys="@firebase/auth",_s="0.20.7";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class bs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){nn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function ws(e=function(e="[DEFAULT]"){const t=Rt.get(e);if(!t)throw Mt.create("no-app",{appName:e});return t}()){const t=$t(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=$t(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(je(n.getOptions(),null!=t?t:{}))return e;Qt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:gs,persistence:[Mr,gr,yr]})}vs="Browser",Ct(new Ye("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:a}=n.options;return((e,n)=>{nn(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),nn(!(null==a?void 0:a.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:a,clientPlatform:vs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vn(vs)},o=new Yn(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(on);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ct(new Ye("auth-internal",(e=>(e=>new bs(e))(Xn(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(ys,_s,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(vs)),Lt(ys,_s,"esm2017");const Ss=[];function As(e,t){return{subscribe:Is(e,t).subscribe}}function Is(t,n=e){let r;const s=new Set;function a(e){if(i(t,e)&&(t=e,r)){const e=!Ss.length;for(const e of s)e[1](),Ss.push(e,t);if(e){for(let e=0;e<Ss.length;e+=2)Ss[e][0](Ss[e+1]);Ss.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(o,i=e){const l=[o,i];return s.add(l),1===s.size&&(r=n(a)||e),o(t),()=>{s.delete(l),0===s.size&&(r(),r=null)}}}}function Ts(t,n,r){const s=!Array.isArray(t),i=s?[t]:t,l=n.length<2;return As(r,(t=>{let r=!1;const u=[];let d=0,h=e;const p=()=>{if(d)return;h();const r=n(s?u[0]:u,t);l?t(r):h=o(r)?r:e},m=i.map(((e,t)=>c(e,(e=>{u[t]=e,d&=~(1<<t),r&&p()}),(()=>{d|=1<<t}))));return r=!0,p(),function(){a(m),h()}}))}function Ds(e){let t,r,s;const a=[e[2]];var o=e[0];function i(e){let t={};for(let e=0;e<a.length;e+=1)t=n(t,a[e]);return{props:t}}return o&&(t=new o(i()),t.$on("routeEvent",e[7])),{c(){t&&Ce(t.$$.fragment),r=N()},m(e,n){t&&$e(t,e,n),k(e,r,n),s=!0},p(e,n){const s=4&n?Re(a,[Ee(e[2])]):{};if(o!==(o=e[0])){if(t){we();const e=t;Ie(e.$$.fragment,1,0,(()=>{Me(e,1)})),Se()}o?(t=new o(i()),t.$on("routeEvent",e[7]),Ce(t.$$.fragment),Ae(t.$$.fragment,1),$e(t,r.parentNode,r)):t=null}else o&&t.$set(s)},i(e){s||(t&&Ae(t.$$.fragment,e),s=!0)},o(e){t&&Ie(t.$$.fragment,e),s=!1},d(e){e&&R(r),t&&Me(t,e)}}}function ks(e){let t,r,s;const a=[{params:e[1]},e[2]];var o=e[0];function i(e){let t={};for(let e=0;e<a.length;e+=1)t=n(t,a[e]);return{props:t}}return o&&(t=new o(i()),t.$on("routeEvent",e[6])),{c(){t&&Ce(t.$$.fragment),r=N()},m(e,n){t&&$e(t,e,n),k(e,r,n),s=!0},p(e,n){const s=6&n?Re(a,[2&n&&{params:e[1]},4&n&&Ee(e[2])]):{};if(o!==(o=e[0])){if(t){we();const e=t;Ie(e.$$.fragment,1,0,(()=>{Me(e,1)})),Se()}o?(t=new o(i()),t.$on("routeEvent",e[6]),Ce(t.$$.fragment),Ae(t.$$.fragment,1),$e(t,r.parentNode,r)):t=null}else o&&t.$set(s)},i(e){s||(t&&Ae(t.$$.fragment,e),s=!0)},o(e){t&&Ie(t.$$.fragment,e),s=!1},d(e){e&&R(r),t&&Me(t,e)}}}function Rs(e){let t,n,r,s;const a=[ks,Ds],o=[];function i(e,t){return e[1]?0:1}return t=i(e),n=o[t]=a[t](e),{c(){n.c(),r=N()},m(e,n){o[t].m(e,n),k(e,r,n),s=!0},p(e,[s]){let l=t;t=i(e),t===l?o[t].p(e,s):(we(),Ie(o[l],1,1,(()=>{o[l]=null})),Se(),n=o[t],n?n.p(e,s):(n=o[t]=a[t](e),n.c()),Ae(n,1),n.m(r.parentNode,r))},i(e){s||(Ae(n),s=!0)},o(e){Ie(n),s=!1},d(e){o[t].d(e),e&&R(r)}}}function Es(){const e=window.location.href.indexOf("#/");let t=e>-1?window.location.href.substr(e+1):"/";const n=t.indexOf("?");let r="";return n>-1&&(r=t.substr(n+1),t=t.substr(0,n)),{location:t,querystring:r}}const Os=As(null,(function(e){e(Es());const t=()=>{e(Es())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}));Ts(Os,(e=>e.location)),Ts(Os,(e=>e.querystring));const Cs=Is(void 0);async function $s(e){if(!e||e.length<1||"/"!=e.charAt(0)&&0!==e.indexOf("#/"))throw Error("Invalid parameter location");await ue(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=("#"==e.charAt(0)?"":"#")+e}function Ms(e,t,n){let{routes:r={}}=t,{prefix:s=""}=t,{restoreScrollState:a=!1}=t;class o{constructor(e,t){if(!t||"function"!=typeof t&&("object"!=typeof t||!0!==t._sveltesparouter))throw Error("Invalid component object");if(!e||"string"==typeof e&&(e.length<1||"/"!=e.charAt(0)&&"*"!=e.charAt(0))||"object"==typeof e&&!(e instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:r}=function(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,r,s,a,o=[],i="",l=e.split("/");for(l[0]||l.shift();s=l.shift();)"*"===(n=s[0])?(o.push("wild"),i+="/(.*)"):":"===n?(r=s.indexOf("?",1),a=s.indexOf(".",1),o.push(s.substring(1,~r?r:~a?a:s.length)),i+=~r&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(i+=(~r?"?":"")+"\\"+s.substring(a))):i+="/"+s;return{keys:o,pattern:new RegExp("^"+i+(t?"(?=$|/)":"/?$"),"i")}}(e);this.path=e,"object"==typeof t&&!0===t._sveltesparouter?(this.component=t.component,this.conditions=t.conditions||[],this.userData=t.userData,this.props=t.props||{}):(this.component=()=>Promise.resolve(t),this.conditions=[],this.props={}),this._pattern=n,this._keys=r}match(e){if(s)if("string"==typeof s){if(!e.startsWith(s))return null;e=e.substr(s.length)||"/"}else if(s instanceof RegExp){const t=e.match(s);if(!t||!t[0])return null;e=e.substr(t[0].length)||"/"}const t=this._pattern.exec(e);if(null===t)return null;if(!1===this._keys)return t;const n={};let r=0;for(;r<this._keys.length;){try{n[this._keys[r]]=decodeURIComponent(t[r+1]||"")||null}catch(e){n[this._keys[r]]=null}r++}return n}async checkConditions(e){for(let t=0;t<this.conditions.length;t++)if(!await this.conditions[t](e))return!1;return!0}}const i=[];r instanceof Map?r.forEach(((e,t)=>{i.push(new o(t,e))})):Object.keys(r).forEach((e=>{i.push(new o(e,r[e]))}));let l=null,c=null,u={};const d=te();async function h(e,t){await ue(),d(e,t)}let p=null,m=null;var f;a&&(m=e=>{p=e.state&&(e.state.__svelte_spa_router_scrollY||e.state.__svelte_spa_router_scrollX)?e.state:null},window.addEventListener("popstate",m),f=()=>{var e;(e=p)?window.scrollTo(e.__svelte_spa_router_scrollX,e.__svelte_spa_router_scrollY):window.scrollTo(0,0)},Q().$$.after_update.push(f));let g=null,v=null;const y=Os.subscribe((async e=>{g=e;let t=0;for(;t<i.length;){const r=i[t].match(e.location);if(!r){t++;continue}const s={route:i[t].path,location:e.location,querystring:e.querystring,userData:i[t].userData,params:r&&"object"==typeof r&&Object.keys(r).length?r:null};if(!await i[t].checkConditions(s))return n(0,l=null),v=null,void h("conditionsFailed",s);h("routeLoading",Object.assign({},s));const a=i[t].component;if(v!=a){a.loading?(n(0,l=a.loading),v=a,n(1,c=a.loadingParams),n(2,u={}),h("routeLoaded",Object.assign({},s,{component:l,name:l.name,params:c}))):(n(0,l=null),v=null);const t=await a();if(e!=g)return;n(0,l=t&&t.default||t),v=a}return r&&"object"==typeof r&&Object.keys(r).length?n(1,c=r):n(1,c=null),n(2,u=i[t].props),void h("routeLoaded",Object.assign({},s,{component:l,name:l.name,params:c})).then((()=>{Cs.set(c)}))}n(0,l=null),v=null,Cs.set(void 0)}));return function(e){Q().$$.on_destroy.push(e)}((()=>{y(),m&&window.removeEventListener("popstate",m)})),e.$$set=e=>{"routes"in e&&n(3,r=e.routes),"prefix"in e&&n(4,s=e.prefix),"restoreScrollState"in e&&n(5,a=e.restoreScrollState)},e.$$.update=()=>{32&e.$$.dirty&&(history.scrollRestoration=a?"manual":"auto")},[l,c,u,r,s,a,function(t){ne.call(this,e,t)},function(t){ne.call(this,e,t)}]}class Ns extends Pe{constructor(e){super(),Ne(this,e,Ms,Rs,i,{routes:3,prefix:4,restoreScrollState:5})}}let Ps=Is(""),Ls=Is(null),xs=Is(null),qs=Is(!1),Us=Is(null),Ws=Is(null);function Fs(t){let n,r,s,o,i,c,u,d,h,p,m,f,g,v,y,_,b,w,S,A;return{c(){var e,t;n=O("body"),r=O("div"),s=O("div"),o=O("div"),i=O("img"),u=M(),d=O("p"),d.textContent="아이디",h=M(),p=O("input"),m=M(),f=O("p"),f.textContent="비밀번호",g=M(),v=O("input"),y=M(),_=O("button"),_.textContent="로 그 인",b=M(),w=O("p"),w.innerHTML='<a href="#" class="svelte-olrjfd"><b class="svelte-olrjfd">Bitcotop </b></a>© 2022 Blockchain Payment Gateway',e=i.src,t=c="https://acornbit.com/res/img/common/logo.png",l||(l=document.createElement("a")),l.href=t,e!==l.href&&L(i,"src","https://acornbit.com/res/img/common/logo.png"),L(i,"alt","Logo"),L(i,"class","svelte-olrjfd"),L(d,"class","label svelte-olrjfd"),L(p,"type","text"),L(p,"class","svelte-olrjfd"),L(f,"class","label svelte-olrjfd"),L(f,"id","pw"),L(v,"type","password"),L(v,"class","svelte-olrjfd"),L(_,"class","btn-login svelte-olrjfd"),L(_,"id","login_btn"),L(o,"class","form-container svelte-olrjfd"),L(w,"class","svelte-olrjfd"),L(s,"class","colm-form svelte-olrjfd"),L(r,"class","row svelte-olrjfd"),L(n,"class","svelte-olrjfd")},m(e,a){k(e,n,a),I(n,r),I(r,s),I(s,o),I(o,i),I(o,u),I(o,d),I(o,h),I(o,p),W(p,t[0]),I(o,m),I(o,f),I(o,g),I(o,v),W(v,t[1]),I(o,y),I(o,_),I(s,b),I(s,w),S||(A=[P(p,"input",t[3]),P(v,"input",t[4]),P(_,"click",t[2])],S=!0)},p(e,[t]){1&t&&p.value!==e[0]&&W(p,e[0]),2&t&&v.value!==e[1]&&W(v,e[1])},i:e,o:e,d(e){e&&R(n),S=!1,a(A)}}}function Bs(e,t,n){let r,s,a;u(e,Us,(e=>n(7,r=e))),u(e,Ws,(e=>n(8,s=e))),u(e,Ps,(e=>n(9,a=e)));let o="",i="";return y(Ws,s=function(e,t={}){"object"!=typeof t&&(t={name:t});const n=Object.assign({name:Dt,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Mt.create("bad-app-name",{appName:String(r)});const s=Rt.get(r);if(s){if(je(e,s.options)&&je(n,s.config))return s;throw Mt.create("duplicate-app",{appName:r})}const a=new Qe(r);for(const e of Et.values())a.addComponent(e);const o=new Nt(e,n,a);return Rt.set(r,o),o}({apiKey:"AIzaSyBYl6RKvLA2XR1bJUODf4BZqkznyYemGz0",appId:"1:211358723588:web:15c4c5744414417f8ecf51",messagingSenderId:"211358723588",projectId:"dofamin",authDomain:"dofamin.firebaseapp.com",storageBucket:"dofamin.appspot.com",measurementId:"G-R1LXW33BQY"}),s),ee((async()=>{!function(e,t,n,r){Ge(e).onAuthStateChanged(t,n,r)}(ws(s),(e=>null==e?console.log("로그인 안된 상태"):(console.log("로그인 된 상태"),y(Us,r=e,r),r.uid,e.getIdTokenResult().then((e=>null==e?console.log("엑세스토큰 만료상태"):(console.log("엑세스토큰 활성상태"),r))))))})),[o,i,async function(){const e=ws(s);await fetch("https://dofamin.appspot.com/auth/sign-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({loginId:o,loginPw:i})}).then((e=>e.json())).then((t=>{console.log(t.token),t.token,hr(e,t.token).then((e=>{y(Us,r=e.user,r),r.uid,console.log(r),$s("/Dashboard"),y(Ps,a="로그아웃",a)})).catch((e=>{const t=e.code,n=e.message;console.log(t,n)}))}))},function(){o=this.value,n(0,o)},function(){i=this.value,n(1,i)}]}class Ks extends Pe{constructor(e){super(),Ne(this,e,Bs,Fs,i,{})}}function js(t){let n;return{c(){n=O("div"),n.innerHTML="<h1>대시보드</h1>  \n    <h2>서비스 준비 중 입니다.</h2>",L(n,"class","svelte-1j5gpfr")},m(e,t){k(e,n,t)},p:e,i:e,o:e,d(e){e&&R(n)}}}class Js extends Pe{constructor(e){super(),Ne(this,e,null,js,i,{})}}function Hs(e,t,n){const r=e.slice();return r[23]=t[n],r}const zs=e=>({item:16&e}),Vs=e=>({item:e[23].data});function Gs(e,t){let n,r,s;const a=t[14].default,o=d(a,t,t[13],Vs),i=o||function(e){let t;return{c(){t=$("Missing template")},m(e,n){k(e,t,n)},d(e){e&&R(t)}}}();return{key:e,first:null,c(){n=O("svelte-virtual-list-row"),i&&i.c(),r=M(),q(n,"class","svelte-1tqh76q"),this.first=n},m(e,t){k(e,n,t),i&&i.m(n,null),I(n,r),s=!0},p(e,n){t=e,o&&o.p&&(!s||8208&n)&&m(o,a,t,t[13],s?p(a,t[13],n,zs):f(t[13]),Vs)},i(e){s||(Ae(i,e),s=!0)},o(e){Ie(i,e),s=!1},d(e){e&&R(n),i&&i.d(e)}}}function Ys(e){let t,n,r,s,a,o,i=[],l=new Map,c=e[4];const u=e=>e[23].index;for(let t=0;t<c.length;t+=1){let n=Hs(e,c,t),r=u(n);l.set(r,i[t]=Gs(r,n))}return{c(){t=O("svelte-virtual-list-viewport"),n=O("svelte-virtual-list-contents");for(let e=0;e<i.length;e+=1)i[e].c();F(n,"padding-top",e[5]+"px"),F(n,"padding-bottom",e[6]+"px"),q(n,"class","svelte-1tqh76q"),F(t,"height",e[0]),q(t,"class","svelte-1tqh76q"),de((()=>e[17].call(t)))},m(l,c){k(l,t,c),I(t,n);for(let e=0;e<i.length;e+=1)i[e].m(n,null);e[15](n),e[16](t),r=function(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=O("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=j();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=P(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=P(n.contentWindow,"resize",t)}),I(e,n),()=>{(r||s&&n.contentWindow)&&s(),R(n)}}(t,e[17].bind(t)),s=!0,a||(o=P(t,"scroll",e[7]),a=!0)},p(e,[r]){8208&r&&(c=e[4],we(),i=function(e,t,n,r,s,a,o,i,l,c,u,d){let h=e.length,p=a.length,m=h;const f={};for(;m--;)f[e[m].key]=m;const g=[],v=new Map,y=new Map;for(m=p;m--;){const e=d(s,a,m),i=n(e);let l=o.get(i);l?r&&l.p(e,t):(l=c(i,e),l.c()),v.set(i,g[m]=l),i in f&&y.set(i,Math.abs(m-f[i]))}const _=new Set,b=new Set;function w(e){Ae(e,1),e.m(i,u),o.set(e.key,e),u=e.first,p--}for(;h&&p;){const t=g[p-1],n=e[h-1],r=t.key,s=n.key;t===n?(u=t.first,h--,p--):v.has(s)?!o.has(r)||_.has(r)?w(t):b.has(s)?h--:y.get(r)>y.get(s)?(b.add(r),w(t)):(_.add(s),h--):(l(n,o),h--)}for(;h--;){const t=e[h];v.has(t.key)||l(t,o)}for(;p;)w(g[p-1]);return g}(i,r,u,1,e,c,l,n,ke,Gs,null,Hs),Se()),(!s||32&r)&&F(n,"padding-top",e[5]+"px"),(!s||64&r)&&F(n,"padding-bottom",e[6]+"px"),(!s||1&r)&&F(t,"height",e[0])},i(e){if(!s){for(let e=0;e<c.length;e+=1)Ae(i[e]);s=!0}},o(e){for(let e=0;e<i.length;e+=1)Ie(i[e]);s=!1},d(n){n&&R(t);for(let e=0;e<i.length;e+=1)i[e].d();e[15](null),e[16](null),r(),a=!1,o()}}}function Xs(e,t,n){let r,s,a,o,i,l,{$$slots:c={},$$scope:u}=t,{items:d}=t,{height:h="100%"}=t,{itemHeight:p}=t,{start:m=0}=t,{end:f=0}=t,g=[],v=0,y=0,_=0;return ee((()=>{r=a.getElementsByTagName("svelte-virtual-list-row"),n(12,i=!0)})),e.$$set=e=>{"items"in e&&n(10,d=e.items),"height"in e&&n(0,h=e.height),"itemHeight"in e&&n(11,p=e.itemHeight),"start"in e&&n(8,m=e.start),"end"in e&&n(9,f=e.end),"$$scope"in e&&n(13,u=e.$$scope)},e.$$.update=()=>{1792&e.$$.dirty&&n(4,o=d.slice(m,f).map(((e,t)=>({index:t+m,data:e})))),7170&e.$$.dirty&&i&&async function(e,t,a){const{scrollTop:o}=s;await ue();let i=y-o,c=m;for(;i<t&&c<e.length;){let e=r[c-m];e||(n(9,f=c+1),await ue(),e=r[c-m]),i+=g[c]=a||e.offsetHeight,c+=1}n(9,f=c);const u=e.length-f;l=(y+i)/f,n(6,_=u*l),g.length=e.length}(d,v,p)},[h,v,s,a,o,y,_,async function(){const{scrollTop:e}=s,t=m;for(let e=0;e<r.length;e+=1)g[m+e]=p||r[e].offsetHeight;let a=0,o=0;for(;a<d.length;){const t=g[a]||l;if(o+t>e){n(8,m=a),n(5,y=o);break}o+=t,a+=1}for(;a<d.length&&(o+=g[a]||l,a+=1,!(o>e+v)););n(9,f=a);const i=d.length-f;for(l=o/f;a<d.length;)g[a++]=l;if(n(6,_=i*l),m<t){await ue();let n=0,a=0;for(let e=m;e<t;e+=1)r[e-m]&&(n+=g[e],a+=p||r[e-m].offsetHeight);const o=a-n;s.scrollTo(0,e+o)}},m,f,d,p,i,u,c,function(e){se[e?"unshift":"push"]((()=>{a=e,n(3,a)}))},function(e){se[e?"unshift":"push"]((()=>{s=e,n(2,s)}))},function(){v=this.offsetHeight,n(1,v)}]}class Zs extends Pe{constructor(e){super(),Ne(this,e,Xs,Ys,i,{items:10,height:0,itemHeight:11,start:8,end:9})}}function Qs(e){let t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))t=e.map(Qs).filter(Boolean).join(" ");else for(let n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function ea(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function ta(e){const t=e-1;return t*t*t+1}function na(e,{delay:t=0,duration:n=400,easing:r=ta,x:s=0,y:a=0,opacity:o=0}={}){const i=getComputedStyle(e),l=+i.opacity,c="none"===i.transform?"":i.transform,u=l*(1-o);return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*s}px, ${(1-e)*a}px);\n\t\t\topacity: ${l-u*t}`}}function ra(e){let t,r,s,a,o;const i=e[19].default,l=d(i,e,e[18],null),c=l||function(e){let t,n,r,s;const a=[oa,aa],o=[];function i(e,t){return e[1]?0:1}return t=i(e),n=o[t]=a[t](e),{c(){n.c(),r=N()},m(e,n){o[t].m(e,n),k(e,r,n),s=!0},p(e,s){let l=t;t=i(e),t===l?o[t].p(e,s):(we(),Ie(o[l],1,1,(()=>{o[l]=null})),Se(),n=o[t],n?n.p(e,s):(n=o[t]=a[t](e),n.c()),Ae(n,1),n.m(r.parentNode,r))},i(e){s||(Ae(n),s=!0)},o(e){Ie(n),s=!1},d(e){o[t].d(e),e&&R(r)}}}(e);let u=[e[9],{class:e[7]},{disabled:e[2]},{value:e[5]},{"aria-label":r=e[8]||e[6]},{style:e[4]}],h={};for(let e=0;e<u.length;e+=1)h=n(h,u[e]);return{c(){t=O("button"),c&&c.c(),x(t,h)},m(n,r){k(n,t,r),c&&c.m(t,null),t.autofocus&&t.focus(),e[23](t),s=!0,a||(o=P(t,"click",e[21]),a=!0)},p(e,n){l?l.p&&(!s||262144&n)&&m(l,i,e,e[18],s?p(i,e[18],n,null):f(e[18]),null):c&&c.p&&(!s||262146&n)&&c.p(e,s?n:-1),x(t,h=Re(u,[512&n&&e[9],(!s||128&n)&&{class:e[7]},(!s||4&n)&&{disabled:e[2]},(!s||32&n)&&{value:e[5]},(!s||320&n&&r!==(r=e[8]||e[6]))&&{"aria-label":r},(!s||16&n)&&{style:e[4]}]))},i(e){s||(Ae(c,e),s=!0)},o(e){Ie(c,e),s=!1},d(n){n&&R(t),c&&c.d(n),e[23](null),a=!1,o()}}}function sa(e){let t,r,s,a,o,i,l;const c=[la,ia],u=[];function d(e,t){return e[1]?0:1}r=d(e),s=u[r]=c[r](e);let h=[e[9],{class:e[7]},{disabled:e[2]},{href:e[3]},{"aria-label":a=e[8]||e[6]},{style:e[4]}],p={};for(let e=0;e<h.length;e+=1)p=n(p,h[e]);return{c(){t=O("a"),s.c(),x(t,p)},m(n,s){k(n,t,s),u[r].m(t,null),e[22](t),o=!0,i||(l=P(t,"click",e[20]),i=!0)},p(e,n){let i=r;r=d(e),r===i?u[r].p(e,n):(we(),Ie(u[i],1,1,(()=>{u[i]=null})),Se(),s=u[r],s?s.p(e,n):(s=u[r]=c[r](e),s.c()),Ae(s,1),s.m(t,null)),x(t,p=Re(h,[512&n&&e[9],(!o||128&n)&&{class:e[7]},(!o||4&n)&&{disabled:e[2]},(!o||8&n)&&{href:e[3]},(!o||320&n&&a!==(a=e[8]||e[6]))&&{"aria-label":a},(!o||16&n)&&{style:e[4]}]))},i(e){o||(Ae(s),o=!0)},o(e){Ie(s),o=!1},d(n){n&&R(t),u[r].d(),e[22](null),i=!1,l()}}}function aa(e){let t;const n=e[19].default,r=d(n,e,e[18],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,s){r&&r.p&&(!t||262144&s)&&m(r,n,e,e[18],t?p(n,e[18],s,null):f(e[18]),null)},i(e){t||(Ae(r,e),t=!0)},o(e){Ie(r,e),t=!1},d(e){r&&r.d(e)}}}function oa(t){let n;return{c(){n=$(t[1])},m(e,t){k(e,n,t)},p(e,t){2&t&&U(n,e[1])},i:e,o:e,d(e){e&&R(n)}}}function ia(e){let t;const n=e[19].default,r=d(n,e,e[18],null);return{c(){r&&r.c()},m(e,n){r&&r.m(e,n),t=!0},p(e,s){r&&r.p&&(!t||262144&s)&&m(r,n,e,e[18],t?p(n,e[18],s,null):f(e[18]),null)},i(e){t||(Ae(r,e),t=!0)},o(e){Ie(r,e),t=!1},d(e){r&&r.d(e)}}}function la(t){let n;return{c(){n=$(t[1])},m(e,t){k(e,n,t)},p(e,t){2&t&&U(n,e[1])},i:e,o:e,d(e){e&&R(n)}}}function ca(e){let t,n,r,s;const a=[sa,ra],o=[];function i(e,t){return e[3]?0:1}return t=i(e),n=o[t]=a[t](e),{c(){n.c(),r=N()},m(e,n){o[t].m(e,n),k(e,r,n),s=!0},p(e,[s]){let l=t;t=i(e),t===l?o[t].p(e,s):(we(),Ie(o[l],1,1,(()=>{o[l]=null})),Se(),n=o[t],n?n.p(e,s):(n=o[t]=a[t](e),n.c()),Ae(n,1),n.m(r.parentNode,r))},i(e){s||(Ae(n),s=!0)},o(e){Ie(n),s=!1},d(e){o[t].d(e),e&&R(r)}}}function ua(e,t,r){let s,a,o;const i=["class","active","block","children","close","color","disabled","href","inner","outline","size","style","value","white"];let l=v(t,i),{$$slots:c={},$$scope:u}=t,{class:d=""}=t,{active:h=!1}=t,{block:p=!1}=t,{children:m}=t,{close:f=!1}=t,{color:y="secondary"}=t,{disabled:_=!1}=t,{href:b=""}=t,{inner:w}=t,{outline:S=!1}=t,{size:A=null}=t,{style:I=""}=t,{value:T=""}=t,{white:D=!1}=t;return e.$$set=e=>{r(24,t=n(n({},t),g(e))),r(9,l=v(t,i)),"class"in e&&r(10,d=e.class),"active"in e&&r(11,h=e.active),"block"in e&&r(12,p=e.block),"children"in e&&r(1,m=e.children),"close"in e&&r(13,f=e.close),"color"in e&&r(14,y=e.color),"disabled"in e&&r(2,_=e.disabled),"href"in e&&r(3,b=e.href),"inner"in e&&r(0,w=e.inner),"outline"in e&&r(15,S=e.outline),"size"in e&&r(16,A=e.size),"style"in e&&r(4,I=e.style),"value"in e&&r(5,T=e.value),"white"in e&&r(17,D=e.white),"$$scope"in e&&r(18,u=e.$$scope)},e.$$.update=()=>{r(8,s=t["aria-label"]),261120&e.$$.dirty&&r(7,a=function(...e){return e.map(Qs).filter(Boolean).join(" ")}(d,f?"btn-close":"btn",f||`btn${S?"-outline":""}-${y}`,!!A&&`btn-${A}`,!!p&&"d-block w-100",{active:h,"btn-close-white":f&&D})),8192&e.$$.dirty&&r(6,o=f?"Close":null)},t=g(t),[w,m,_,b,I,T,o,a,s,l,d,h,p,f,y,S,A,D,u,c,function(t){ne.call(this,e,t)},function(t){ne.call(this,e,t)},function(e){se[e?"unshift":"push"]((()=>{w=e,r(0,w)}))},function(e){se[e?"unshift":"push"]((()=>{w=e,r(0,w)}))}]}class da extends Pe{constructor(e){super(),Ne(this,e,ua,ca,i,{class:10,active:11,block:12,children:1,close:13,color:14,disabled:2,href:3,inner:0,outline:15,size:16,style:4,value:5,white:17})}}function ha(e,t){const n=function(e){return e%4==0&&e%100!=0||e%400==0}(e)?29:28;return[31,n,31,30,31,30,31,31,30,31,30,31][t]}function pa(e,t){let n="";if(e)for(const r of t)n+="string"==typeof r?r:r.toString(e);return n}function ma(e,t){const n=ha(e,t),r=[];for(let s=0;s<n;s++)r.push({year:e,month:t,number:s+1});return r}function fa(e,t,n){const r=e.slice();return r[29]=t[n],r[31]=n,r}function ga(e,t,n){const r=e.slice();return r[32]=t[n],r}function va(e,t,n){const r=e.slice();return r[29]=t[n],r[36]=n,r}function ya(e,t,n){const r=e.slice();return r[37]=t[n],r}function _a(e,t,n){const r=e.slice();return r[37]=t[n],r}function ba(e,t,n){const r=e.slice();return r[42]=t[n],r[36]=n,r}function wa(e,t,n){const r=e.slice();return r[42]=t[n],r[36]=n,r}function Sa(e){let t,n,r,s=e[42]+"";return{c(){t=O("option"),n=$(s),t.disabled=r=new Date(e[8],e[36],ha(e[8],e[36]),23,59,59,999)<e[1]||new Date(e[8],e[36])>e[2],t.__value=e[36],t.value=t.__value},m(e,r){k(e,t,r),I(t,n)},p(e,a){16&a[0]&&s!==(s=e[42]+"")&&U(n,s),294&a[0]&&r!==(r=new Date(e[8],e[36],ha(e[8],e[36]),23,59,59,999)<e[1]||new Date(e[8],e[36])>e[2])&&(t.disabled=r)},d(e){e&&R(t)}}}function Aa(e){let t,n,r,s=e[42]+"";return{c(){t=O("option"),n=$(s),t.__value=e[36],t.value=t.__value,t.selected=r=e[36]===e[7]},m(e,r){k(e,t,r),I(t,n)},p(e,a){16&a[0]&&s!==(s=e[42]+"")&&U(n,s),128&a[0]&&r!==(r=e[36]===e[7])&&(t.selected=r)},d(e){e&&R(t)}}}function Ia(e){let t,n,r,s=e[37]+"";return{c(){t=O("option"),n=$(s),t.__value=r=e[37],t.value=t.__value},m(e,r){k(e,t,r),I(t,n)},p(e,a){32&a[0]&&s!==(s=e[37]+"")&&U(n,s),32&a[0]&&r!==(r=e[37])&&(t.__value=r,t.value=t.__value)},d(e){e&&R(t)}}}function Ta(e){let t,n,r,s,a=e[37]+"";return{c(){t=O("option"),n=$(a),t.__value=r=e[37],t.value=t.__value,t.selected=s=e[37]===e[3].getFullYear()},m(e,r){k(e,t,r),I(t,n)},p(e,o){32&o[0]&&a!==(a=e[37]+"")&&U(n,a),32&o[0]&&r!==(r=e[37])&&(t.__value=r,t.value=t.__value),40&o[0]&&s!==(s=e[37]===e[3].getFullYear())&&(t.selected=s)},d(e){e&&R(t)}}}function Da(e){let t,n,r=e[4].weekdays[e[4].weekStartsOn+e[36]-7]+"";return{c(){t=O("div"),n=$(r),L(t,"class","header-cell svelte-1218iwi")},m(e,r){k(e,t,r),I(t,n)},p(e,t){16&t[0]&&r!==(r=e[4].weekdays[e[4].weekStartsOn+e[36]-7]+"")&&U(n,r)},d(e){e&&R(t)}}}function ka(e){let t,n,r=e[4].weekdays[e[4].weekStartsOn+e[36]]+"";return{c(){t=O("div"),n=$(r),L(t,"class","header-cell svelte-1218iwi")},m(e,r){k(e,t,r),I(t,n)},p(e,t){16&t[0]&&r!==(r=e[4].weekdays[e[4].weekStartsOn+e[36]]+"")&&U(n,r)},d(e){e&&R(t)}}}function Ra(e){let t;function n(e,t){return e[36]+e[4].weekStartsOn<7?ka:Da}let r=n(e),s=r(e);return{c(){s.c(),t=N()},m(e,n){s.m(e,n),k(e,t,n)},p(e,a){r===(r=n(e))&&s?s.p(e,a):(s.d(1),s=r(e),s&&(s.c(),s.m(t.parentNode,t)))},d(e){s.d(e),e&&R(t)}}}function Ea(e){let t,n,r,s,a,o=e[32].number+"";function i(){return e[22](e[32])}return{c(){t=O("div"),n=O("span"),r=$(o),L(n,"class","svelte-1218iwi"),L(t,"class","cell svelte-1218iwi"),J(t,"disabled",!Na(e[32],e[1],e[2])),J(t,"selected",e[32].year===e[0]?.getFullYear()&&e[32].month===e[0]?.getMonth()&&e[32].number===e[0].getDate()),J(t,"other-month",e[32].month!==e[7])},m(e,o){k(e,t,o),I(t,n),I(n,r),s||(a=P(t,"click",i),s=!0)},p(n,s){e=n,64&s[0]&&o!==(o=e[32].number+"")&&U(r,o),70&s[0]&&J(t,"disabled",!Na(e[32],e[1],e[2])),65&s[0]&&J(t,"selected",e[32].year===e[0]?.getFullYear()&&e[32].month===e[0]?.getMonth()&&e[32].number===e[0].getDate()),192&s[0]&&J(t,"other-month",e[32].month!==e[7])},d(e){e&&R(t),s=!1,a()}}}function Oa(e){let t,n,r=e[6].slice(7*e[31],7*e[31]+7),s=[];for(let t=0;t<r.length;t+=1)s[t]=Ea(ga(e,r,t));return{c(){t=O("div");for(let e=0;e<s.length;e+=1)s[e].c();n=M(),L(t,"class","week svelte-1218iwi")},m(e,r){k(e,t,r);for(let e=0;e<s.length;e+=1)s[e].m(t,null);I(t,n)},p(e,a){if(2247&a[0]){let o;for(r=e[6].slice(7*e[31],7*e[31]+7),o=0;o<r.length;o+=1){const i=ga(e,r,o);s[o]?s[o].p(i,a):(s[o]=Ea(i),s[o].c(),s[o].m(t,n))}for(;o<s.length;o+=1)s[o].d(1);s.length=r.length}},d(e){e&&R(t),E(s,e)}}}function Ca(t){let n,r,s,o,i,l,c,u,d,h,p,m,f,g,v,y,_,b,w,S,A,T,D,$,N,x,q,U=t[4].months,W=[];for(let e=0;e<U.length;e+=1)W[e]=Sa(wa(t,U,e));let F=t[4].months,K=[];for(let e=0;e<F.length;e+=1)K[e]=Aa(ba(t,F,e));let j=t[5],J=[];for(let e=0;e<j.length;e+=1)J[e]=Ia(_a(t,j,e));let H=t[5],z=[];for(let e=0;e<H.length;e+=1)z[e]=Ta(ya(t,H,e));let V=Array(7),G=[];for(let e=0;e<V.length;e+=1)G[e]=Ra(va(t,V,e));let Y=Array(6),X=[];for(let e=0;e<Y.length;e+=1)X[e]=Oa(fa(t,Y,e));return{c(){n=O("div"),r=O("div"),s=O("div"),o=O("div"),o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-1218iwi"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" transform="rotate(180, 12, 12)"></path></svg>',i=M(),l=O("div"),c=O("select");for(let e=0;e<W.length;e+=1)W[e].c();u=M(),d=O("select");for(let e=0;e<K.length;e+=1)K[e].c();h=M(),p=C("svg"),m=C("path"),f=M(),g=O("div"),v=O("select");for(let e=0;e<J.length;e+=1)J[e].c();y=M(),_=O("select");for(let e=0;e<z.length;e+=1)z[e].c();b=M(),w=C("svg"),S=C("path"),A=M(),T=O("div"),T.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-1218iwi"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"></path></svg>',D=M(),$=O("div");for(let e=0;e<G.length;e+=1)G[e].c();N=M();for(let e=0;e<X.length;e+=1)X[e].c();L(o,"class","page-button svelte-1218iwi"),L(o,"tabindex","-1"),L(c,"class","svelte-1218iwi"),L(d,"class","dummy-select svelte-1218iwi"),L(d,"tabindex","-1"),L(m,"d","M6 0l12 12-12 12z"),L(m,"transform","rotate(90, 12, 12)"),L(p,"xmlns","http://www.w3.org/2000/svg"),L(p,"width","24"),L(p,"height","24"),L(p,"viewBox","0 0 24 24"),L(p,"class","svelte-1218iwi"),L(l,"class","dropdown month svelte-1218iwi"),L(v,"class","svelte-1218iwi"),L(_,"class","dummy-select svelte-1218iwi"),L(_,"tabindex","-1"),L(S,"d","M6 0l12 12-12 12z"),L(S,"transform","rotate(90, 12, 12)"),L(w,"xmlns","http://www.w3.org/2000/svg"),L(w,"width","24"),L(w,"height","24"),L(w,"viewBox","0 0 24 24"),L(w,"class","svelte-1218iwi"),L(g,"class","dropdown year svelte-1218iwi"),L(T,"class","page-button svelte-1218iwi"),L(T,"tabindex","-1"),L(s,"class","top svelte-1218iwi"),L($,"class","header svelte-1218iwi"),L(r,"class","tab-container svelte-1218iwi"),L(r,"tabindex","-1"),L(n,"class","date-time-picker svelte-1218iwi"),L(n,"tabindex","0")},m(e,a){k(e,n,a),I(n,r),I(r,s),I(s,o),I(s,i),I(s,l),I(l,c);for(let e=0;e<W.length;e+=1)W[e].m(c,null);B(c,t[7]),I(l,u),I(l,d);for(let e=0;e<K.length;e+=1)K[e].m(d,null);I(l,h),I(l,p),I(p,m),I(s,f),I(s,g),I(g,v);for(let e=0;e<J.length;e+=1)J[e].m(v,null);B(v,t[8]),I(g,y),I(g,_);for(let e=0;e<z.length;e+=1)z[e].m(_,null);I(g,b),I(g,w),I(w,S),I(s,A),I(s,T),I(r,D),I(r,$);for(let e=0;e<G.length;e+=1)G[e].m($,null);I(r,N);for(let e=0;e<X.length;e+=1)X[e].m(r,null);x||(q=[P(o,"click",t[18]),P(c,"keydown",t[13]),P(c,"input",t[19]),P(v,"input",t[20]),P(v,"keydown",t[12]),P(T,"click",t[21]),P(n,"focusout",t[17]),P(n,"keydown",t[14])],x=!0)},p(e,t){if(278&t[0]){let n;for(U=e[4].months,n=0;n<U.length;n+=1){const r=wa(e,U,n);W[n]?W[n].p(r,t):(W[n]=Sa(r),W[n].c(),W[n].m(c,null))}for(;n<W.length;n+=1)W[n].d(1);W.length=U.length}if(128&t[0]&&B(c,e[7]),144&t[0]){let n;for(F=e[4].months,n=0;n<F.length;n+=1){const r=ba(e,F,n);K[n]?K[n].p(r,t):(K[n]=Aa(r),K[n].c(),K[n].m(d,null))}for(;n<K.length;n+=1)K[n].d(1);K.length=F.length}if(32&t[0]){let n;for(j=e[5],n=0;n<j.length;n+=1){const r=_a(e,j,n);J[n]?J[n].p(r,t):(J[n]=Ia(r),J[n].c(),J[n].m(v,null))}for(;n<J.length;n+=1)J[n].d(1);J.length=j.length}if(288&t[0]&&B(v,e[8]),40&t[0]){let n;for(H=e[5],n=0;n<H.length;n+=1){const r=ya(e,H,n);z[n]?z[n].p(r,t):(z[n]=Ta(r),z[n].c(),z[n].m(_,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=H.length}if(16&t[0]){let n;for(V=Array(7),n=0;n<V.length;n+=1){const r=va(e,V,n);G[n]?G[n].p(r,t):(G[n]=Ra(r),G[n].c(),G[n].m($,null))}for(;n<G.length;n+=1)G[n].d(1);G.length=V.length}if(2247&t[0]){let n;for(Y=Array(6),n=0;n<Y.length;n+=1){const s=fa(e,Y,n);X[n]?X[n].p(s,t):(X[n]=Oa(s),X[n].c(),X[n].m(r,null))}for(;n<X.length;n+=1)X[n].d(1);X.length=Y.length}},i:e,o:e,d(e){e&&R(n),E(W,e),E(K,e),E(J,e),E(z,e),E(G,e),E(X,e),x=!1,a(q)}}}function $a(e){return new Date(e.getTime())}function Ma(e,t,n){return $a(e>n?n:e<t?t:e)}function Na(e,t,n){const r=new Date(e.year,e.month,e.number),s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=new Date(n.getFullYear(),n.getMonth(),n.getDate());return r>=s&&r<=a}function Pa(e,t,n){let r,s,a,o;const i=te();let{value:l=null}=t;function c(e){e.getTime()!==l?.getTime()&&(n(3,h=Ma(e,p,m)),n(0,l=$a(h)))}function u(e){n(3,h=Ma(e,p,m)),!y&&l&&c(h)}const d=new Date;let h=$a(l||d),{min:p=new Date(d.getFullYear()-20,0,1)}=t,{max:m=new Date(d.getFullYear(),11,31,23,59,59,999)}=t,f=g(p,m);function g(e,t){let n=[];for(let r=e.getFullYear();r<=t.getFullYear();r++)n.push(r);return n}let{locale:v={}}=t,{browseWithoutSelecting:y=!1}=t;function _(e){h.setFullYear(e),n(3,h),u(h)}function b(e){let t=h.getFullYear();12===e?(e=0,t++):-1===e&&(e=11,t--);const n=ha(t,e),r=Math.min(h.getDate(),n);u(new Date(t,e,r,h.getHours(),h.getMinutes(),h.getSeconds(),h.getMilliseconds()))}function w(e){Na(e,p,m)&&(h.setFullYear(0),h.setMonth(0),h.setDate(1),h.setFullYear(e.year),h.setMonth(e.month),h.setDate(e.number),c(h),i("select"))}function S(e){if(e.shiftKey&&"ArrowUp"===e.key)_(h.getFullYear()-1);else if(e.shiftKey&&"ArrowDown"===e.key)_(h.getFullYear()+1);else if(e.shiftKey&&"ArrowLeft"===e.key)b(h.getMonth()-1);else{if(!e.shiftKey||"ArrowRight"!==e.key)return!1;b(h.getMonth()+1)}return e.preventDefault(),!0}return e.$$set=e=>{"value"in e&&n(0,l=e.value),"min"in e&&n(1,p=e.min),"max"in e&&n(2,m=e.max),"locale"in e&&n(15,v=e.locale),"browseWithoutSelecting"in e&&n(16,y=e.browseWithoutSelecting)},e.$$.update=()=>{7&e.$$.dirty[0]&&(l&&l>m?c(m):l&&l<p&&c(p)),6&e.$$.dirty[0]&&n(5,f=g(p,m)),32768&e.$$.dirty[0]&&n(4,r=function(e={}){const t={weekdays:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekStartsOn:1};return"number"==typeof e.weekStartsOn&&(t.weekStartsOn=e.weekStartsOn),e.months&&(t.months=e.months),e.weekdays&&(t.weekdays=e.weekdays),t}(v)),8&e.$$.dirty[0]&&n(8,s=h.getFullYear()),8&e.$$.dirty[0]&&n(7,a=h.getMonth()),24&e.$$.dirty[0]&&n(6,o=function(e,t){const n=e.getFullYear(),r=e.getMonth();let s=[];const a=(new Date(n,r,1).getDay()-t+7)%7;if(a>0){let e=r-1,t=n;-1===e&&(e=11,t=n-1),s=ma(t,e).slice(-a)}s=s.concat(ma(n,r));let o=r+1,i=n;12===o&&(o=0,i=n+1);const l=42-s.length;return s=s.concat(ma(i,o).slice(0,l)),s}(h,r.weekStartsOn))},[l,p,m,h,r,f,o,a,s,_,b,w,function(e){if(e.shiftKey||e.altKey)S(e);else{if("ArrowUp"===e.key)_(h.getFullYear()-1);else if("ArrowDown"===e.key)_(h.getFullYear()+1);else if("ArrowLeft"===e.key)b(h.getMonth()-1);else{if("ArrowRight"!==e.key)return void S(e);b(h.getMonth()+1)}e.preventDefault()}},function(e){if(e.shiftKey||e.altKey)S(e);else{if("ArrowUp"===e.key)b(h.getMonth()-1);else if("ArrowDown"===e.key)b(h.getMonth()+1);else if("ArrowLeft"===e.key)b(h.getFullYear()-1);else{if("ArrowRight"!==e.key)return void S(e);b(h.getFullYear()+1)}e.preventDefault()}},function(e){let t=e.shiftKey||e.altKey;if("SELECT"!==e.target?.tagName)if(t)S(e);else{if("ArrowUp"===e.key)h.setDate(h.getDate()-7),c(h);else if("ArrowDown"===e.key)h.setDate(h.getDate()+7),c(h);else if("ArrowLeft"===e.key)h.setDate(h.getDate()-1),c(h);else if("ArrowRight"===e.key)h.setDate(h.getDate()+1),c(h);else{if("Enter"!==e.key)return;c(h),i("select")}e.preventDefault()}},v,y,function(t){ne.call(this,e,t)},()=>b(h.getMonth()-1),e=>b(parseInt(e.currentTarget.value)),e=>_(parseInt(e.currentTarget.value)),()=>b(h.getMonth()+1),e=>w(e)]}class La extends Pe{constructor(e){super(),Ne(this,e,Pa,Ca,i,{value:0,min:1,max:2,locale:15,browseWithoutSelecting:16},null,[-1,-1])}}function xa(e,t,n){let r="",s=!0,a=(n=n||new Date(2020,0,1,0,0,0,0)).getFullYear(),o=n.getMonth(),i=n.getDate(),l=n.getHours(),c=n.getMinutes(),u=n.getSeconds();const d=n.getMilliseconds();function h(t,n,r){const a=e.match(t);if(a?.[0]){e=e.slice(a[0].length);const t=parseInt(a[0]);return t>r||t<n?(s=!1,null):t}return s=!1,null}function p(t){if("string"==typeof t)!function(t){for(let n=0;n<t.length;n++){if(!e.startsWith(t[n]))return s=!1,void(0===e.length&&(r=t.slice(n)));e=e.slice(1)}}(t);else if("yyyy"===t.id){const e=h(/^[0-9]{4}/,0,9999);null!==e&&(a=e)}else if("MM"===t.id){const e=h(/^[0-9]{2}/,1,12);null!==e&&(o=e-1)}else if("dd"===t.id){const e=h(/^[0-9]{2}/,1,31);null!==e&&(i=e)}else if("HH"===t.id){const e=h(/^[0-9]{2}/,0,23);null!==e&&(l=e)}else if("mm"===t.id){const e=h(/^[0-9]{2}/,0,59);null!==e&&(c=e)}else if("ss"===t.id){const e=h(/^[0-9]{2}/,0,59);null!==e&&(u=e)}}for(const e of t)if(p(e),!s)break;const m=ha(a,o);return i>m&&(s=!1),{date:s?new Date(a,o,i,l,c,u,d):null,missingPunctuation:r}}function qa(e){return("0"+e.toString()).slice(-2)}const Ua=[{id:"yyyy",toString:e=>e.getFullYear().toString()},{id:"MM",toString:e=>qa(e.getMonth()+1)},{id:"dd",toString:e=>qa(e.getDate())},{id:"HH",toString:e=>qa(e.getHours())},{id:"mm",toString:e=>qa(e.getMinutes())},{id:"ss",toString:e=>qa(e.getSeconds())}];function Wa(e){for(const t of Ua)if(e.startsWith(t.id))return t}function Fa(e){const t=[];for(;e.length>0;){const n=Wa(e);n?(t.push(n),e=e.slice(n.id.length)):"string"==typeof t[t.length-1]?(t[t.length-1]+=e[0],e=e.slice(1)):(t.push(e[0]),e=e.slice(1))}return t}function Ba(e){let t,n,r,s,a;function o(t){e[24](t)}let i={min:e[3],max:e[4],locale:e[7],browseWithoutSelecting:e[8]};return void 0!==e[9]&&(i.value=e[9]),n=new La({props:i}),se.push((()=>Oe(n,"value",o))),n.$on("focusout",e[13]),n.$on("select",e[15]),{c(){t=O("div"),Ce(n.$$.fragment),L(t,"class","picker svelte-1bsxr9h"),J(t,"visible",e[2])},m(e,r){k(e,t,r),$e(n,t,null),a=!0},p(s,o){e=s;const i={};8&o&&(i.min=e[3]),16&o&&(i.max=e[4]),128&o&&(i.locale=e[7]),256&o&&(i.browseWithoutSelecting=e[8]),!r&&512&o&&(r=!0,i.value=e[9],he((()=>r=!1))),n.$set(i),(!a||4&o)&&J(t,"visible",e[2])},i(e){a||(Ae(n.$$.fragment,e),de((()=>{s||(s=De(t,na,{duration:80,easing:ea,y:-5},!0)),s.run(1)})),a=!0)},o(e){Ie(n.$$.fragment,e),s||(s=De(t,na,{duration:80,easing:ea,y:-5},!1)),s.run(0),a=!1},d(e){e&&R(t),Me(n),e&&s&&s.end()}}}function Ka(e){let t,n,r,s,o,i,l=e[2]&&!e[6]&&Ba(e);return{c(){t=O("div"),n=O("input"),r=M(),l&&l.c(),L(n,"type","text"),L(n,"placeholder",e[5]),n.disabled=e[6],L(n,"class","svelte-1bsxr9h"),J(n,"invalid",!e[1]),L(t,"class","date-time-field svelte-1bsxr9h")},m(a,c){k(a,t,c),I(t,n),W(n,e[0]),I(t,r),l&&l.m(t,null),s=!0,o||(i=[P(n,"input",e[21]),P(n,"focus",e[22]),P(n,"mousedown",e[23]),P(n,"input",e[12]),P(t,"focusout",e[13]),P(t,"keydown",e[14])],o=!0)},p(e,[r]){(!s||32&r)&&L(n,"placeholder",e[5]),(!s||64&r)&&(n.disabled=e[6]),1&r&&n.value!==e[0]&&W(n,e[0]),(!s||2&r)&&J(n,"invalid",!e[1]),e[2]&&!e[6]?l?(l.p(e,r),68&r&&Ae(l,1)):(l=Ba(e),l.c(),Ae(l,1),l.m(t,null)):l&&(we(),Ie(l,1,1,(()=>{l=null})),Se())},i(e){s||(Ae(l),s=!0)},o(e){Ie(l),s=!1},d(e){e&&R(t),l&&l.d(),o=!1,a(i)}}}function ja(e,t,n){let r,s;const a=te(),o=new Date,i=Is(null);u(e,i,(e=>n(25,s=e)));const l={subscribe:i.subscribe,set:e=>{null===e?(i.set(null),n(16,c=e)):e.getTime()!==s?.getTime()&&(i.set(e),n(16,c=e))}};u(e,l,(e=>n(9,r=e)));let{value:c=null}=t,{min:d=new Date(o.getFullYear()-20,0,1)}=t,{max:h=new Date(o.getFullYear(),11,31,23,59,59,999)}=t,{placeholder:p="2020-12-31 23:00:00"}=t,{valid:m=!0}=t,{disabled:f=!1}=t,{format:g="yyyy-MM-dd HH:mm:ss"}=t,v=Fa(g),{locale:y={}}=t;let{text:_=pa(r,v)}=t,b=[_,_];let{visible:w=!1}=t,{closeOnSelection:S=!1}=t,{browseWithoutSelecting:A=!1}=t;return e.$$set=e=>{"value"in e&&n(16,c=e.value),"min"in e&&n(3,d=e.min),"max"in e&&n(4,h=e.max),"placeholder"in e&&n(5,p=e.placeholder),"valid"in e&&n(1,m=e.valid),"disabled"in e&&n(6,f=e.disabled),"format"in e&&n(17,g=e.format),"locale"in e&&n(7,y=e.locale),"text"in e&&n(0,_=e.text),"visible"in e&&n(2,w=e.visible),"closeOnSelection"in e&&n(18,S=e.closeOnSelection),"browseWithoutSelecting"in e&&n(8,A=e.browseWithoutSelecting)},e.$$.update=()=>{65536&e.$$.dirty&&l.set(c),131072&e.$$.dirty&&n(19,v=Fa(g)),524800&e.$$.dirty&&function(e,t){n(0,_=pa(e,t))}(r,v),1048577&e.$$.dirty&&n(20,b=[b[1],_]),524289&e.$$.dirty&&function(e,t){if(e.length){const s=xa(e,t,r);null!==s.date?(n(1,m=!0),l.set(s.date)):n(1,m=!1)}else n(1,m=!0),c&&(n(16,c=null),l.set(null))}(_,v)},[_,m,w,d,h,p,f,y,A,r,i,l,function(e){if(e instanceof InputEvent&&"insertText"===e.inputType&&"string"==typeof e.data&&_===b[0]+e.data){let t=xa(b[0],v,r);""===t.missingPunctuation||t.missingPunctuation.startsWith(e.data)||n(0,_=b[0]+t.missingPunctuation+e.data)}},function(e){e?.currentTarget instanceof HTMLElement&&e.relatedTarget&&e.relatedTarget instanceof Node&&e.currentTarget.contains(e.relatedTarget)||n(2,w=!1)},function(e){"Escape"===e.key&&w?(n(2,w=!1),e.preventDefault(),e.stopPropagation()):"Enter"===e.key&&(n(2,w=!w),e.preventDefault())},function(e){a("select",e.detail),S&&n(2,w=!1)},c,g,S,v,b,function(){_=this.value,n(0,_)},()=>n(2,w=!0),()=>n(2,w=!0),function(e){r=e,l.set(r)}]}class Ja extends Pe{constructor(e){super(),Ne(this,e,ja,Ka,i,{value:16,min:3,max:4,placeholder:5,valid:1,disabled:6,format:17,locale:7,text:0,visible:2,closeOnSelection:18,browseWithoutSelecting:8})}}const Ha=Is([]),za=Is(50),Va=Is("break-word"),Ga=Is([]),Ya=Is({});function Xa(t){let n,r,s,a,o,i;return{c(){n=O("div"),r=$(t[0]),s=M(),a=O("div"),L(a,"class","resizer svelte-tj22z3"),L(n,"class","SvelTableCell svelte-tj22z3"),L(n,"colid",t[1]),L(n,"rowid",t[2]),F(n,"min-width",t[6]+Za+"px"),F(n,"width",t[7][t[1]]+Za+"px"),F(n,"overflow-wrap",t[8])},m(e,l){k(e,n,l),I(n,r),I(n,s),I(n,a),o||(i=P(a,"mousedown",t[9]),o=!0)},p(e,[t]){1&t&&U(r,e[0]),2&t&&L(n,"colid",e[1]),4&t&&L(n,"rowid",e[2]),64&t&&F(n,"min-width",e[6]+Za+"px"),130&t&&F(n,"width",e[7][e[1]]+Za+"px"),256&t&&F(n,"overflow-wrap",e[8])},i:e,o:e,d(e){e&&R(n),o=!1,i()}}}let Za=18;function Qa(e,t,n){let r,s,a;u(e,za,(e=>n(6,r=e))),u(e,Ha,(e=>n(7,s=e))),u(e,Va,(e=>n(8,a=e)));let{displayText:o=""}=t,{colID:i=0}=t,{rowID:l=0}=t,c=!1,d=0,h=0;return e.$$set=e=>{"displayText"in e&&n(0,o=e.displayText),"colID"in e&&n(1,i=e.colID),"rowID"in e&&n(2,l=e.rowID)},[o,i,l,c,d,h,r,s,a,e=>{e.preventDefault(),n(3,c=!0),n(4,d=s[i]),n(5,h=e.pageX),window.addEventListener("mousemove",(e=>{c&&y(Ha,s[i]=d+(e.pageX-h),s)})),window.addEventListener("mouseup",(()=>{n(3,c=!1),localStorage.setItem("localColumnWidth",JSON.stringify(s)),window.removeEventListener("mousemove",(e=>{c&&y(Ha,s[i]=d+(e.pageX-h),s)}))}))}]}class eo extends Pe{constructor(e){super(),Ne(this,e,Qa,Xa,i,{displayText:0,colID:1,rowID:2})}}function to(e,t,n){const r=e.slice();return r[2]=t[n],r[4]=n,r}function no(e){let t,n;return t=new eo({props:{displayText:e[2],colID:e[4]}}),{c(){Ce(t.$$.fragment)},m(e,r){$e(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.displayText=e[2]),t.$set(r)},i(e){n||(Ae(t.$$.fragment,e),n=!0)},o(e){Ie(t.$$.fragment,e),n=!1},d(e){Me(t,e)}}}function ro(e){let t,n,r,s;return t=new da({props:{$$slots:{default:[so]},$$scope:{ctx:e}}}),t.$on("click",io),r=new da({props:{$$slots:{default:[ao]},$$scope:{ctx:e}}}),r.$on("click",lo),{c(){Ce(t.$$.fragment),n=M(),Ce(r.$$.fragment)},m(e,a){$e(t,e,a),k(e,n,a),$e(r,e,a),s=!0},p(e,n){const s={};32&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s);const a={};32&n&&(a.$$scope={dirty:n,ctx:e}),r.$set(a)},i(e){s||(Ae(t.$$.fragment,e),Ae(r.$$.fragment,e),s=!0)},o(e){Ie(t.$$.fragment,e),Ie(r.$$.fragment,e),s=!1},d(e){Me(t,e),e&&R(n),Me(r,e)}}}function so(e){let t;return{c(){t=$("승인")},m(e,n){k(e,t,n)},d(e){e&&R(t)}}}function ao(e){let t;return{c(){t=$("거절")},m(e,n){k(e,t,n)},d(e){e&&R(t)}}}function oo(e){let t,n,r,s=Object.values(e[0]),a=[];for(let t=0;t<s.length;t+=1)a[t]=no(to(e,s,t));const o=e=>Ie(a[e],1,1,(()=>{a[e]=null}));let i=!e[1]&&ro(e);return{c(){t=O("div");for(let e=0;e<a.length;e+=1)a[e].c();n=M(),i&&i.c(),L(t,"class","SvelTableRow svelte-ubae29")},m(e,s){k(e,t,s);for(let e=0;e<a.length;e+=1)a[e].m(t,null);I(t,n),i&&i.m(t,null),r=!0},p(e,[r]){if(1&r){let i;for(s=Object.values(e[0]),i=0;i<s.length;i+=1){const o=to(e,s,i);a[i]?(a[i].p(o,r),Ae(a[i],1)):(a[i]=no(o),a[i].c(),Ae(a[i],1),a[i].m(t,n))}for(we(),i=s.length;i<a.length;i+=1)o(i);Se()}e[1]?i&&(we(),Ie(i,1,1,(()=>{i=null})),Se()):i?(i.p(e,r),2&r&&Ae(i,1)):(i=ro(e),i.c(),Ae(i,1),i.m(t,null))},i(e){if(!r){for(let e=0;e<s.length;e+=1)Ae(a[e]);Ae(i),r=!0}},o(e){a=a.filter(Boolean);for(let e=0;e<a.length;e+=1)Ie(a[e]);Ie(i),r=!1},d(e){e&&R(t),E(a,e),i&&i.d()}}}function io(){alert("승인 처리 하시겠습니까?")}function lo(){alert("거절 처리 하시겠습니까?")}function co(e,t,n){let r;u(e,qs,(e=>n(1,r=e)));let{rowData:s={}}=t;return e.$$set=e=>{"rowData"in e&&n(0,s=e.rowData)},[s,r]}class uo extends Pe{constructor(e){super(),Ne(this,e,co,oo,i,{rowData:0})}}function ho(t){let n,r,s,o,i,l,c,u;return{c(){n=O("div"),r=$(t[0]),s=M(),o=$(t[1]),i=M(),l=O("div"),L(l,"class","resizer svelte-yifgdz"),L(n,"class","SvelTableHeading svelte-yifgdz"),L(n,"colid",t[2]),F(n,"min-width",t[7]+po+"px"),F(n,"width",t[8][t[2]]+po+"px"),F(n,"overflow-wrap",t[9])},m(e,a){k(e,n,a),I(n,r),I(n,s),I(n,o),I(n,i),I(n,l),c||(u=[P(l,"mousedown",t[11]),P(n,"click",t[12])],c=!0)},p(e,[t]){1&t&&U(r,e[0]),2&t&&U(o,e[1]),4&t&&L(n,"colid",e[2]),128&t&&F(n,"min-width",e[7]+po+"px"),260&t&&F(n,"width",e[8][e[2]]+po+"px"),512&t&&F(n,"overflow-wrap",e[9])},i:e,o:e,d(e){e&&R(n),c=!1,a(u)}}}let po=22;function mo(e,t,n){let r,s,a;u(e,za,(e=>n(7,r=e))),u(e,Ha,(e=>n(8,s=e))),u(e,Va,(e=>n(9,a=e)));let{displayText:o=""}=t,{arrow:i=""}=t,{colID:l=0}=t,{isSortedAtoZ:c}=t;const d=te();let h=!1,p=0,m=0;return e.$$set=e=>{"displayText"in e&&n(0,o=e.displayText),"arrow"in e&&n(1,i=e.arrow),"colID"in e&&n(2,l=e.colID),"isSortedAtoZ"in e&&n(3,c=e.isSortedAtoZ)},[o,i,l,c,h,p,m,r,s,a,d,e=>{e.preventDefault(),n(4,h=!0),n(5,p=s[l]),n(6,m=e.pageX),window.addEventListener("mousemove",(e=>{h&&y(Ha,s[l]=p+(e.pageX-m),s)})),window.addEventListener("mouseup",(()=>{n(4,h=!1),localStorage.setItem("localColumnWidth",JSON.stringify(s)),window.removeEventListener("mousemove",(e=>{h&&y(Ha,s[l]=p+(e.pageX-m),s)}))}))},()=>d("sortBy",{displayText:o,isAtoZSort:c})]}class fo extends Pe{constructor(e){super(),Ne(this,e,mo,ho,i,{displayText:0,arrow:1,colID:2,isSortedAtoZ:3})}}function go(e,t,n){const r=e.slice();return r[27]=t[n],r[29]=n,r}function vo(e,t,n){const r=e.slice();return r[30]=t[n],r[29]=n,r}function yo(e){let t,n,r;function s(t){e[19](t)}let a={displayText:e[30],arrow:e[2][e[29]],colID:e[29]};return void 0!==e[1]&&(a.isSortedAtoZ=e[1]),t=new fo({props:a}),se.push((()=>Oe(t,"isSortedAtoZ",s))),t.$on("sortBy",(function(...t){return e[20](e[29],...t)})),{c(){Ce(t.$$.fragment)},m(e,n){$e(t,e,n),r=!0},p(r,s){e=r;const a={};4&s[0]&&(a.arrow=e[2][e[29]]),!n&&2&s[0]&&(n=!0,a.isSortedAtoZ=e[1],he((()=>n=!1))),t.$set(a)},i(e){r||(Ae(t.$$.fragment,e),r=!0)},o(e){Ie(t.$$.fragment,e),r=!1},d(e){Me(t,e)}}}function _o(e){let t,n,r;function s(...t){return e[21](e[27],...t)}return{c(){t=O("input"),L(t,"type","text"),F(t,"width",e[7][e[29]]+10+"px"),F(t,"min-width",e[8]+10+"px"),F(t,"margin-right","10px"),L(t,"placeholder","Filter")},m(e,a){k(e,t,a),n||(r=P(t,"input",s),n=!0)},p(n,r){e=n,128&r[0]&&F(t,"width",e[7][e[29]]+10+"px"),256&r[0]&&F(t,"min-width",e[8]+10+"px")},d(e){e&&R(t),n=!1,r()}}}function bo(e){let t,n;return t=new uo({props:{rowData:e[26]}}),{c(){Ce(t.$$.fragment)},m(e,r){$e(t,e,r),n=!0},p(e,n){const r={};67108864&n[0]&&(r.rowData=e[26]),t.$set(r)},i(e){n||(Ae(t.$$.fragment,e),n=!0)},o(e){Ie(t.$$.fragment,e),n=!1},d(e){Me(t,e)}}}function wo(e){let t,n,r,s,o,i,l,c,u,d,h,p,m,f,g,v,y,_,b,w,S,A,T,D,C;function N(t){e[16](t)}let x={};function q(t){e[17](t)}void 0!==e[4]&&(x.value=e[4]),o=new Ja({props:x}),se.push((()=>Oe(o,"value",N)));let U={};void 0!==e[5]&&(U.value=e[5]),d=new Ja({props:U}),se.push((()=>Oe(d,"value",q)));let F=e[9],B=[];for(let t=0;t<F.length;t+=1)B[t]=yo(vo(e,F,t));const K=e=>Ie(B[e],1,1,(()=>{B[e]=null}));let j=e[9],J=[];for(let t=0;t<j.length;t+=1)J[t]=_o(go(e,j,t));return A=new Zs({props:{height:e[6]+"px",items:e[0],$$slots:{default:[bo,({item:e})=>({26:e}),({item:e})=>[e?67108864:0]]},$$scope:{ctx:e}}}),{c(){t=O("div"),n=O("div"),r=O("div"),s=$("시작일\n\t\t\t"),Ce(o.$$.fragment),l=M(),c=O("div"),u=$("종료일\n\t\t\t"),Ce(d.$$.fragment),p=M(),m=O("div"),f=$("키워드 검색\n\t\t\t"),g=O("input"),v=M(),y=O("div");for(let e=0;e<B.length;e+=1)B[e].c();_=M(),b=O("div");for(let e=0;e<J.length;e+=1)J[e].c();w=M(),S=O("div"),Ce(A.$$.fragment),L(g,"type","text"),L(g,"placeholder","Search"),L(m,"id","search"),L(m,"class","svelte-krhkn5"),L(n,"class","date_searchform svelte-krhkn5"),L(y,"class","HeadingContainer svelte-krhkn5"),L(b,"class","SearchFilterContainer svelte-krhkn5"),L(S,"class","DataContainer svelte-krhkn5"),L(t,"class","SvelTableContainer svelte-krhkn5")},m(a,i){k(a,t,i),I(t,n),I(n,r),I(r,s),$e(o,r,null),I(n,l),I(n,c),I(c,u),$e(d,c,null),I(n,p),I(n,m),I(m,f),I(m,g),W(g,e[3]),I(t,v),I(t,y);for(let e=0;e<B.length;e+=1)B[e].m(y,null);I(t,_),I(t,b);for(let e=0;e<J.length;e+=1)J[e].m(b,null);I(t,w),I(t,S),$e(A,S,null),T=!0,D||(C=[P(g,"input",e[18]),P(g,"input",e[10])],D=!0)},p(e,t){const n={};!i&&16&t[0]&&(i=!0,n.value=e[4],he((()=>i=!1))),o.$set(n);const r={};if(!h&&32&t[0]&&(h=!0,r.value=e[5],he((()=>h=!1))),d.$set(r),8&t[0]&&g.value!==e[3]&&W(g,e[3]),4614&t[0]){let n;for(F=e[9],n=0;n<F.length;n+=1){const r=vo(e,F,n);B[n]?(B[n].p(r,t),Ae(B[n],1)):(B[n]=yo(r),B[n].c(),Ae(B[n],1),B[n].m(y,null))}for(we(),n=F.length;n<B.length;n+=1)K(n);Se()}if(2944&t[0]){let n;for(j=e[9],n=0;n<j.length;n+=1){const r=go(e,j,n);J[n]?J[n].p(r,t):(J[n]=_o(r),J[n].c(),J[n].m(b,null))}for(;n<J.length;n+=1)J[n].d(1);J.length=j.length}const s={};64&t[0]&&(s.height=e[6]+"px"),1&t[0]&&(s.items=e[0]),67108864&t[0]|2&t[1]&&(s.$$scope={dirty:t,ctx:e}),A.$set(s)},i(e){if(!T){Ae(o.$$.fragment,e),Ae(d.$$.fragment,e);for(let e=0;e<F.length;e+=1)Ae(B[e]);Ae(A.$$.fragment,e),T=!0}},o(e){Ie(o.$$.fragment,e),Ie(d.$$.fragment,e),B=B.filter(Boolean);for(let e=0;e<B.length;e+=1)Ie(B[e]);Ie(A.$$.fragment,e),T=!1},d(e){e&&R(t),Me(o),Me(d),E(B,e),E(J,e),Me(A),D=!1,a(C)}}}let So=21.1;function Ao(e,t,n){let r,s,a,o,i;u(e,Ya,(e=>n(25,s=e))),u(e,Ga,(e=>n(0,a=e))),u(e,Ha,(e=>n(7,o=e))),u(e,za,(e=>n(8,i=e)));let{dataSet:l=[]}=t,c=[],d={},h=!1,p=[],m="",f={};const g=Object.keys(l[0]);let v=new Date,y=new Date;ee((()=>{c=[...l],Ga.set(c);for(let e=0;e<g.length;e+=1)p.push("");let e=g.map((()=>100));localStorage.getItem("localColumnWidth")&&(e=JSON.parse(localStorage.getItem("localColumnWidth"))),Ha.set(e)}));let{numRows:_=30}=t,b=_*So;function w(e){Ga.set([...l]),d[m]||(d[m]=a.filter((e=>{for(let t in e)if(e[t].toString().includes(m.toString().toLowerCase()))return e}))),Ga.set(d[m])}function S(e,t){w();const{value:n}=e.target;f[t]=n;const r=a.filter((e=>{for(let t in f)if(!e[t].toString().toLowerCase().includes(f[t].toLowerCase()))return!1;return!0}));Ga.set(r)}function A(e,t){let r=t;const o={};for(let e=0;e<g.length;e+=1)n(2,p[e]="",p);const i=a,{displayText:c,isAtoZSort:u}=e.detail;if(s[c])if(1===s[c].count)i.reverse(),n(2,p[r]="🔽",p),o[c]={sortBool:!0,count:2},Ya.set(o),Ga.set(i);else{Ya.set({});const e=[...l];Ga.set(e),n(2,p[r]="",p)}else o[c]={sortBool:!0,count:1},Ya.set(o),i.sort((function(e,t){if("number"==typeof e[c])return n(2,p[r]="🔼",p),e[c]-t[c];const s=e[c].toLowerCase(),a=t[c].toLowerCase();return s>a?(n(2,p[r]="🔼",p),1):s<a?-1:0})),Ga.set(i)}return e.$$set=e=>{"dataSet"in e&&n(13,l=e.dataSet),"numRows"in e&&n(14,_=e.numRows)},e.$$.update=()=>{1&e.$$.dirty[0]&&n(15,r=a.length),49152&e.$$.dirty[0]&&n(6,b=r&&r<=_?r*So:_*So)},[a,h,p,m,v,y,b,o,i,g,w,S,A,l,_,r,function(e){v=e,n(4,v)},function(e){y=e,n(5,y)},function(){m=this.value,n(3,m)},function(e){h=e,n(1,h)},(e,t)=>A(t,e),(e,t)=>S(t,e)]}class Io extends Pe{constructor(e){super(),Ne(this,e,Ao,wo,i,{dataSet:13,numRows:14},null,[-1,-1])}}function To(t){let n,r,s,a,o;return a=new Io({props:{dataSet:t[0]}}),{c(){n=O("div"),n.innerHTML='<h1 class="svelte-dvqd7f">입금 관리</h1>',r=M(),s=O("main"),Ce(a.$$.fragment),L(s,"class","svelte-dvqd7f")},m(e,t){k(e,n,t),k(e,r,t),k(e,s,t),$e(a,s,null),o=!0},p:e,i(e){o||(Ae(a.$$.fragment,e),o=!0)},o(e){Ie(a.$$.fragment,e),o=!1},d(e){e&&R(n),e&&R(r),e&&R(s),Me(a)}}}function Do(e,t,n){let r;u(e,qs,(e=>n(1,r=e))),y(qs,r=!0,r);return[[{req_date:"Mar 7, 2023",address:"P.O. Box 666, 1009 Dolor Street",symbol:"malesuada",amount:13.2,USDT:"approval",close_date:"Dec 19, 2022",KRW:"Ronan Neal"},{req_date:"Sep 18, 2023",address:"Ap #830-441 At Rd.",symbol:"at",amount:19.2,USDT:"",close_date:"Feb 7, 2022",KRW:"Madonna Lucas"},{req_date:"Jan 3, 2022",address:"P.O. Box 907, 9142 Vel, St.",symbol:"sed",amount:18.2,USDT:"approval",close_date:"Oct 2, 2023",KRW:"Yoko Hart"},{req_date:"Aug 1, 2022",address:"Ap #462-5984 Felis Rd.",symbol:"pellentesque.",amount:11.2,USDT:"",close_date:"Jun 6, 2023",KRW:"Jack Rivera"},{req_date:"Mar 23, 2023",address:"363-3252 Lectus. Street",symbol:"Quisque",amount:14.2,USDT:"",close_date:"Apr 2, 2022",KRW:"Briar Lyons"},{req_date:"Sep 1, 2022",address:"116-4775 Hendrerit Rd.",symbol:"ut",amount:21.2,USDT:"",close_date:"Jun 17, 2023",KRW:"Germaine Oneal"},{req_date:"Jan 30, 2023",address:"Ap #845-5160 Dolor. St.",symbol:"eget,",amount:22.2,USDT:"",close_date:"Mar 11, 2022",KRW:"Jackson Carver"},{req_date:"Sep 9, 2023",address:"Ap #193-7463 Egestas Rd.",symbol:"diam.",amount:20.2,USDT:"approval",close_date:"Feb 2, 2023",KRW:"Zeus Spence"},{req_date:"Nov 15, 2021",address:"727 Sem. Rd.",symbol:"a",amount:15.2,USDT:"approval",close_date:"Jun 4, 2023",KRW:"Julian Holland"},{req_date:"Jul 6, 2023",address:"9045 Quisque St.",symbol:"consectetuer",amount:2.2,USDT:"",close_date:"Feb 17, 2022",KRW:"Brandon Calderon"},{req_date:"Aug 5, 2022",address:"286-4023 Luctus Rd.",symbol:"ullamcorper",amount:4.2,USDT:"approval",close_date:"Aug 27, 2022",KRW:"Callie Thomas"},{req_date:"Dec 2, 2021",address:"Ap #453-5869 Donec Ave",symbol:"odio.",amount:15.2,USDT:"",close_date:"Sep 9, 2022",KRW:"Forrest Booth"},{req_date:"Jun 24, 2022",address:"Ap #284-4457 Libero Av.",symbol:"amet",amount:.2,USDT:"",close_date:"Jun 19, 2022",KRW:"Isaac Ellison"},{req_date:"Feb 23, 2022",address:"Ap #105-3711 Amet, Rd.",symbol:"ligula.",amount:21.2,USDT:"approval",close_date:"Feb 4, 2022",KRW:"Leo Yates"},{req_date:"Dec 5, 2022",address:"P.O. Box 894, 9877 Lacinia Ave",symbol:"arcu.",amount:16.2,USDT:"",close_date:"Dec 25, 2022",KRW:"Ginger Padilla"},{req_date:"Nov 27, 2021",address:"6309 Duis Ave",symbol:"purus.",amount:23.2,USDT:"approval",close_date:"Sep 7, 2022",KRW:"Alexander Colon"},{req_date:"Jun 17, 2023",address:"Ap #766-9622 Interdum St.",symbol:"Aenean",amount:4.2,USDT:"",close_date:"Jan 26, 2023",KRW:"Vanna Dejesus"},{req_date:"Apr 12, 2023",address:"P.O. Box 276, 6215 Id Rd.",symbol:"Aliquam",amount:5.2,USDT:"approval",close_date:"May 19, 2023",KRW:"Gray Torres"},{req_date:"Jul 14, 2022",address:"P.O. Box 882, 3533 Vel, Road",symbol:"diam.",amount:25.2,USDT:"approval",close_date:"Oct 13, 2021",KRW:"Anne Small"},{req_date:"Jan 12, 2023",address:"2748 A Avenue",symbol:"urna",amount:11.2,USDT:"approval",close_date:"Apr 9, 2022",KRW:"Erica Weiss"},{req_date:"Feb 11, 2023",address:"Ap #846-6513 Rutrum Avenue",symbol:"aliquet.",amount:26.2,USDT:"",close_date:"May 26, 2022",KRW:"Debra Rowland"},{req_date:"Apr 9, 2023",address:"432-9464 Nunc Ave",symbol:"conubia",amount:1.2,USDT:"",close_date:"Dec 16, 2021",KRW:"Lael Lamb"},{req_date:"Oct 27, 2021",address:"P.O. Box 449, 9198 Nisi St.",symbol:"urna.",amount:6.2,USDT:"",close_date:"Jun 14, 2022",KRW:"Emery Joseph"},{req_date:"Apr 16, 2022",address:"P.O. Box 113, 8246 Auctor, Av.",symbol:"Duis",amount:27.2,USDT:"",close_date:"Nov 17, 2022",KRW:"Laurel Huber"},{req_date:"Jun 10, 2023",address:"2042 Donec Street",symbol:"enim.",amount:27.2,USDT:"approval",close_date:"Jun 26, 2022",KRW:"Wynne Oneil"},{req_date:"May 24, 2023",address:"295-9932 Quisque Rd.",symbol:"Nulla",amount:23.2,USDT:"",close_date:"Dec 9, 2022",KRW:"Fallon Elliott"},{req_date:"Jun 23, 2022",address:"Ap #905-7223 Augue Avenue",symbol:"a",amount:21.2,USDT:"approval",close_date:"Sep 4, 2023",KRW:"Mona Parsons"},{req_date:"Feb 5, 2023",address:"6291 Non Rd.",symbol:"dolor.",amount:2.2,USDT:"approval",close_date:"Aug 15, 2023",KRW:"Philip Alvarez"},{req_date:"Dec 24, 2022",address:"Ap #453-1169 Diam Avenue",symbol:"fringilla",amount:7.2,USDT:"",close_date:"Dec 23, 2022",KRW:"Arden Christensen"},{req_date:"Mar 26, 2022",address:"Ap #892-9051 Dis Road",symbol:"Duis",amount:27.2,USDT:"approval",close_date:"Feb 17, 2022",KRW:"Ashton Hicks"},{req_date:"Jan 6, 2022",address:"Ap #497-2868 Orci. Street",symbol:"justo",amount:19.2,USDT:"approval",close_date:"Jun 12, 2023",KRW:"Plato Hurst"},{req_date:"Jan 20, 2023",address:"801-9677 Ipsum Road",symbol:"nunc",amount:5.2,USDT:"",close_date:"May 17, 2022",KRW:"Drew Shaffer"},{req_date:"May 13, 2023",address:"7307 Purus, Road",symbol:"metus.",amount:10.2,USDT:"",close_date:"Oct 13, 2021",KRW:"Chaney Lang"},{req_date:"Feb 7, 2023",address:"Ap #600-8160 Eleifend St.",symbol:"scelerisque,",amount:28.2,USDT:"approval",close_date:"Sep 7, 2022",KRW:"Colt Hartman"},{req_date:"Sep 4, 2023",address:"5958 Sapien, Road",symbol:"tempor",amount:2.2,USDT:"approval",close_date:"Jan 26, 2023",KRW:"Connor Simon"},{req_date:"Oct 14, 2021",address:"P.O. Box 600, 7721 Proin Ave",symbol:"nulla.",amount:26.2,USDT:"",close_date:"Sep 15, 2023",KRW:"Zephr Acosta"},{req_date:"Aug 23, 2023",address:"155-4446 Magna Rd.",symbol:"Mauris",amount:16.2,USDT:"approval",close_date:"Dec 20, 2021",KRW:"Jeanette Gross"},{req_date:"May 31, 2023",address:"Ap #677-5025 Elementum, Avenue",symbol:"Donec",amount:3.2,USDT:"approval",close_date:"Oct 20, 2022",KRW:"Brenden Rich"},{req_date:"Jun 26, 2023",address:"707-849 Tellus. St.",symbol:"Cras",amount:7.2,USDT:"",close_date:"Sep 19, 2023",KRW:"Camilla Morrison"},{req_date:"Sep 14, 2023",address:"325-867 Euismod St.",symbol:"natoque",amount:13.2,USDT:"approval",close_date:"Oct 25, 2022",KRW:"Ryan Craig"},{req_date:"Aug 9, 2022",address:"1929 Rutrum St.",symbol:"dictum",amount:8.2,USDT:"",close_date:"May 22, 2023",KRW:"Hector Bond"},{req_date:"Aug 9, 2023",address:"Ap #425-7679 Euismod Road",symbol:"ac",amount:24.2,USDT:"",close_date:"Nov 1, 2021",KRW:"Lance Daniel"},{req_date:"Dec 23, 2022",address:"8101 Enim Av.",symbol:"quis",amount:4.2,USDT:"approval",close_date:"Sep 25, 2022",KRW:"Cherokee Wiley"},{req_date:"Aug 16, 2022",address:"171-2466 Dictum Ave",symbol:"Praesent",amount:22.2,USDT:"approval",close_date:"Aug 20, 2023",KRW:"Cairo Hickman"},{req_date:"May 24, 2022",address:"1620 Arcu Rd.",symbol:"accumsan",amount:28.2,USDT:"",close_date:"Jan 16, 2022",KRW:"Ivan Ashley"},{req_date:"May 29, 2023",address:"Ap #503-7813 Et, Ave",symbol:"feugiat",amount:17.2,USDT:"approval",close_date:"Mar 2, 2022",KRW:"Levi Larsen"},{req_date:"Nov 27, 2022",address:"894-3035 Tellus Street",symbol:"ante.",amount:20.2,USDT:"approval",close_date:"Jun 20, 2022",KRW:"Alfreda Winters"},{req_date:"Nov 3, 2021",address:"2778 Id, St.",symbol:"urna,",amount:19.2,USDT:"",close_date:"Jun 2, 2023",KRW:"Leo Ward"},{req_date:"Nov 19, 2022",address:"744-2132 Odio. Street",symbol:"non,",amount:26.2,USDT:"",close_date:"Sep 1, 2022",KRW:"Wang Owens"},{req_date:"Aug 1, 2023",address:"402-6693 Dolor. St.",symbol:"vulputate",amount:7.2,USDT:"approval",close_date:"May 24, 2022",KRW:"Sonya Mayo"},{req_date:"Jan 25, 2022",address:"491-5564 Etiam Rd.",symbol:"mauris.",amount:21.2,USDT:"approval",close_date:"Oct 26, 2022",KRW:"Amery Huber"},{req_date:"Apr 30, 2022",address:"502-5101 Ut, Rd.",symbol:"tellus",amount:20.2,USDT:"",close_date:"Feb 11, 2022",KRW:"Christen Gallagher"},{req_date:"Jul 27, 2022",address:"Ap #556-419 Hendrerit. Road",symbol:"tristique",amount:9.2,USDT:"",close_date:"Jan 31, 2022",KRW:"Abra Cunningham"},{req_date:"Aug 2, 2023",address:"P.O. Box 844, 3898 Turpis St.",symbol:"ipsum",amount:10.2,USDT:"",close_date:"May 22, 2023",KRW:"Colby Christensen"},{req_date:"Oct 2, 2022",address:"765 Dictum Road",symbol:"lorem",amount:3.2,USDT:"approval",close_date:"Oct 8, 2022",KRW:"Indira Hancock"},{req_date:"Dec 7, 2022",address:"2434 Eleifend, Rd.",symbol:"Duis",amount:15.2,USDT:"",close_date:"Sep 17, 2022",KRW:"Caryn Sanders"},{req_date:"Jun 7, 2023",address:"Ap #414-5601 Urna Street",symbol:"neque",amount:27.2,USDT:"",close_date:"Dec 22, 2022",KRW:"Avye Colon"},{req_date:"Mar 1, 2022",address:"276-7493 Quisque Ave",symbol:"Nunc",amount:26.2,USDT:"approval",close_date:"Jan 3, 2023",KRW:"Ramona Eaton"},{req_date:"Aug 15, 2022",address:"499-7264 A, Street",symbol:"Nulla",amount:9.2,USDT:"",close_date:"May 10, 2022",KRW:"Gavin Ochoa"},{req_date:"Aug 17, 2022",address:"752-4166 Parturient Av.",symbol:"lectus",amount:.2,USDT:"",close_date:"May 1, 2022",KRW:"Neil Burch"},{req_date:"Apr 30, 2022",address:"6768 Laoreet Rd.",symbol:"mi",amount:8.2,USDT:"",close_date:"Oct 24, 2021",KRW:"Valentine Lloyd"},{req_date:"Sep 6, 2022",address:"2947 Mus. St.",symbol:"Mauris",amount:2.2,USDT:"",close_date:"Sep 14, 2022",KRW:"Basil Baxter"},{req_date:"Aug 29, 2022",address:"P.O. Box 230, 6878 Quis, Street",symbol:"elementum",amount:25.2,USDT:"approval",close_date:"Jan 11, 2022",KRW:"Noah David"},{req_date:"Feb 22, 2023",address:"Ap #337-4443 Libero. Rd.",symbol:"enim.",amount:27.2,USDT:"",close_date:"Dec 19, 2022",KRW:"Calvin Norton"},{req_date:"Nov 3, 2021",address:"Ap #577-736 At, Rd.",symbol:"amet,",amount:10.2,USDT:"",close_date:"Sep 21, 2022",KRW:"Lacota Rich"},{req_date:"Jul 31, 2022",address:"Ap #980-6427 Lorem, Avenue",symbol:"lorem,",amount:24.2,USDT:"approval",close_date:"Jun 25, 2023",KRW:"Kylie Carver"},{req_date:"Jan 7, 2023",address:"176-6706 Lacus Rd.",symbol:"augue",amount:4.2,USDT:"approval",close_date:"Dec 23, 2021",KRW:"Tiger Harvey"},{req_date:"Mar 4, 2022",address:"8502 Donec Road",symbol:"elit,",amount:18.2,USDT:"approval",close_date:"Feb 15, 2023",KRW:"Jade Wynn"},{req_date:"Dec 14, 2022",address:"Ap #214-1338 Imperdiet Rd.",symbol:"Duis",amount:20.2,USDT:"approval",close_date:"Jul 2, 2023",KRW:"Bruce Holder"},{req_date:"Jun 4, 2023",address:"Ap #477-1725 Aliquet. Rd.",symbol:"semper",amount:26.2,USDT:"approval",close_date:"Jan 28, 2023",KRW:"Valentine Baird"},{req_date:"Dec 24, 2022",address:"486-3150 Mauris. Rd.",symbol:"odio,",amount:19.2,USDT:"approval",close_date:"Aug 18, 2023",KRW:"Steel Farrell"},{req_date:"Jan 16, 2023",address:"476-9396 Arcu. Av.",symbol:"nulla",amount:13.2,USDT:"approval",close_date:"Sep 13, 2023",KRW:"Alexandra Hendricks"},{req_date:"Mar 2, 2022",address:"456-9860 Blandit St.",symbol:"arcu",amount:29.2,USDT:"approval",close_date:"Mar 6, 2022",KRW:"Cruz Gallagher"},{req_date:"Aug 21, 2022",address:"436-6411 Imperdiet Ave",symbol:"diam.",amount:1.2,USDT:"approval",close_date:"Dec 25, 2021",KRW:"Dorothy Abbott"},{req_date:"May 29, 2023",address:"397-5368 Nulla. St.",symbol:"dui",amount:4.2,USDT:"approval",close_date:"Nov 10, 2022",KRW:"Francesca Patrick"},{req_date:"Nov 3, 2021",address:"Ap #297-3791 Quis, Rd.",symbol:"sit",amount:23.2,USDT:"approval",close_date:"Oct 6, 2021",KRW:"Madison Leonard"},{req_date:"Jul 26, 2022",address:"P.O. Box 354, 1238 Pellentesque Ave",symbol:"iaculis",amount:11.2,USDT:"",close_date:"Oct 3, 2023",KRW:"Elaine Hutchinson"},{req_date:"Aug 4, 2022",address:"158-4571 Ante St.",symbol:"tincidunt.",amount:22.2,USDT:"approval",close_date:"Sep 23, 2022",KRW:"Mira Roach"},{req_date:"Jun 23, 2022",address:"654-2372 Auctor. Rd.",symbol:"non,",amount:17.2,USDT:"",close_date:"Feb 22, 2023",KRW:"Kimberley Bruce"},{req_date:"Jun 13, 2022",address:"Ap #312-1069 In, Av.",symbol:"enim,",amount:15.2,USDT:"",close_date:"Sep 19, 2023",KRW:"Noelle Simmons"},{req_date:"Aug 23, 2023",address:"P.O. Box 960, 3560 Ligula. St.",symbol:"vitae,",amount:4.2,USDT:"approval",close_date:"May 3, 2022",KRW:"Shad Mason"},{req_date:"Feb 12, 2022",address:"P.O. Box 354, 839 Tincidunt, Avenue",symbol:"sit",amount:6.2,USDT:"",close_date:"Apr 5, 2023",KRW:"Laurel Watkins"},{req_date:"Apr 7, 2023",address:"7283 Ultrices. Avenue",symbol:"Cras",amount:17.2,USDT:"approval",close_date:"Jan 18, 2023",KRW:"Lionel Fuentes"},{req_date:"Jul 22, 2023",address:"5795 A, Av.",symbol:"Donec",amount:14.2,USDT:"",close_date:"Jun 9, 2023",KRW:"Flynn Webb"},{req_date:"Mar 8, 2022",address:"886-7726 Cursus Ave",symbol:"pede",amount:4.2,USDT:"approval",close_date:"Apr 29, 2022",KRW:"Dennis Stephenson"},{req_date:"Nov 2, 2021",address:"Ap #276-1313 Non Avenue",symbol:"convallis,",amount:22.2,USDT:"approval",close_date:"Dec 31, 2021",KRW:"Darius Cobb"},{req_date:"Mar 2, 2022",address:"Ap #826-8218 Sed Street",symbol:"urna",amount:3.2,USDT:"approval",close_date:"Dec 1, 2021",KRW:"Nita Mercado"},{req_date:"Dec 2, 2022",address:"952-5311 Gravida Street",symbol:"ut,",amount:6.2,USDT:"approval",close_date:"Jul 22, 2022",KRW:"Meghan Richardson"},{req_date:"Mar 27, 2022",address:"Ap #740-8505 A Ave",symbol:"lorem",amount:1.2,USDT:"approval",close_date:"Jun 17, 2022",KRW:"Bernard Owen"},{req_date:"Jan 3, 2022",address:"P.O. Box 540, 7458 Nisi Avenue",symbol:"aliquam",amount:13.2,USDT:"",close_date:"Oct 10, 2021",KRW:"Margaret Oliver"},{req_date:"Dec 22, 2022",address:"Ap #505-5041 Libero Rd.",symbol:"in",amount:7.2,USDT:"approval",close_date:"Nov 1, 2022",KRW:"Gretchen Rojas"},{req_date:"Apr 6, 2023",address:"5970 Ultrices Ave",symbol:"malesuada",amount:6.2,USDT:"",close_date:"Oct 8, 2022",KRW:"Chase English"},{req_date:"Jun 11, 2023",address:"337-8634 Ac Street",symbol:"Donec",amount:9.2,USDT:"",close_date:"Aug 13, 2023",KRW:"Odette Crawford"},{req_date:"Sep 18, 2022",address:"968-7021 Sit Rd.",symbol:"dictum",amount:28.2,USDT:"approval",close_date:"Dec 5, 2021",KRW:"Patrick West"},{req_date:"Jan 23, 2023",address:"1975 Ut St.",symbol:"ultricies",amount:17.2,USDT:"",close_date:"Dec 30, 2022",KRW:"Hanna Finch"},{req_date:"Oct 7, 2021",address:"215-1768 Curabitur Avenue",symbol:"tempus",amount:9.2,USDT:"approval",close_date:"Feb 3, 2022",KRW:"Ian Barron"},{req_date:"Nov 13, 2021",address:"368-6262 Neque Avenue",symbol:"diam.",amount:25.2,USDT:"approval",close_date:"Apr 16, 2023",KRW:"Iris Morales"},{req_date:"Jun 4, 2023",address:"247-4368 Aliquam, Street",symbol:"vulputate,",amount:17.2,USDT:"approval",close_date:"Aug 30, 2023",KRW:"Zoe Joseph"},{req_date:"Nov 30, 2021",address:"P.O. Box 838, 8685 Lorem, Rd.",symbol:"mattis.",amount:24.2,USDT:"approval",close_date:"May 27, 2022",KRW:"Nina Goodwin"},{req_date:"Feb 8, 2023",address:"Ap #291-7294 Eu St.",symbol:"non",amount:5.2,USDT:"approval",close_date:"Jan 22, 2022",KRW:"Hector Patel"}]]}class ko extends Pe{constructor(e){super(),Ne(this,e,Do,To,i,{})}}function Ro(t){let n,r,s,a,o;return a=new Io({props:{dataSet:t[0]}}),{c(){n=O("div"),n.innerHTML='<h1 class="svelte-dvqd7f">출금 관리</h1>',r=M(),s=O("main"),Ce(a.$$.fragment),L(s,"class","svelte-dvqd7f")},m(e,t){k(e,n,t),k(e,r,t),k(e,s,t),$e(a,s,null),o=!0},p:e,i(e){o||(Ae(a.$$.fragment,e),o=!0)},o(e){Ie(a.$$.fragment,e),o=!1},d(e){e&&R(n),e&&R(r),e&&R(s),Me(a)}}}function Eo(e,t,n){let r;u(e,qs,(e=>n(1,r=e))),y(qs,r=!1,r);return[[{req_date:"Mar 7, 2023",address:"P.O. Box 666, 1009 Dolor Street",symbol:"malesuada",amount:13.2,state:"approval",close_date:"Dec 19, 2022",manager:"Ronan Neal"},{req_date:"Sep 18, 2023",address:"Ap #830-441 At Rd.",symbol:"at",amount:19.2,state:"",close_date:"Feb 7, 2022",manager:"Madonna Lucas"},{req_date:"Jan 3, 2022",address:"P.O. Box 907, 9142 Vel, St.",symbol:"sed",amount:18.2,state:"approval",close_date:"Oct 2, 2023",manager:"Yoko Hart"},{req_date:"Aug 1, 2022",address:"Ap #462-5984 Felis Rd.",symbol:"pellentesque.",amount:11.2,state:"",close_date:"Jun 6, 2023",manager:"Jack Rivera"},{req_date:"Mar 23, 2023",address:"363-3252 Lectus. Street",symbol:"Quisque",amount:14.2,state:"",close_date:"Apr 2, 2022",manager:"Briar Lyons"},{req_date:"Sep 1, 2022",address:"116-4775 Hendrerit Rd.",symbol:"ut",amount:21.2,state:"",close_date:"Jun 17, 2023",manager:"Germaine Oneal"},{req_date:"Jan 30, 2023",address:"Ap #845-5160 Dolor. St.",symbol:"eget,",amount:22.2,state:"",close_date:"Mar 11, 2022",manager:"Jackson Carver"},{req_date:"Sep 9, 2023",address:"Ap #193-7463 Egestas Rd.",symbol:"diam.",amount:20.2,state:"approval",close_date:"Feb 2, 2023",manager:"Zeus Spence"},{req_date:"Nov 15, 2021",address:"727 Sem. Rd.",symbol:"a",amount:15.2,state:"approval",close_date:"Jun 4, 2023",manager:"Julian Holland"},{req_date:"Jul 6, 2023",address:"9045 Quisque St.",symbol:"consectetuer",amount:2.2,state:"",close_date:"Feb 17, 2022",manager:"Brandon Calderon"},{req_date:"Aug 5, 2022",address:"286-4023 Luctus Rd.",symbol:"ullamcorper",amount:4.2,state:"approval",close_date:"Aug 27, 2022",manager:"Callie Thomas"},{req_date:"Dec 2, 2021",address:"Ap #453-5869 Donec Ave",symbol:"odio.",amount:15.2,state:"",close_date:"Sep 9, 2022",manager:"Forrest Booth"},{req_date:"Jun 24, 2022",address:"Ap #284-4457 Libero Av.",symbol:"amet",amount:.2,state:"",close_date:"Jun 19, 2022",manager:"Isaac Ellison"},{req_date:"Feb 23, 2022",address:"Ap #105-3711 Amet, Rd.",symbol:"ligula.",amount:21.2,state:"approval",close_date:"Feb 4, 2022",manager:"Leo Yates"},{req_date:"Dec 5, 2022",address:"P.O. Box 894, 9877 Lacinia Ave",symbol:"arcu.",amount:16.2,state:"",close_date:"Dec 25, 2022",manager:"Ginger Padilla"},{req_date:"Nov 27, 2021",address:"6309 Duis Ave",symbol:"purus.",amount:23.2,state:"approval",close_date:"Sep 7, 2022",manager:"Alexander Colon"},{req_date:"Jun 17, 2023",address:"Ap #766-9622 Interdum St.",symbol:"Aenean",amount:4.2,state:"",close_date:"Jan 26, 2023",manager:"Vanna Dejesus"},{req_date:"Apr 12, 2023",address:"P.O. Box 276, 6215 Id Rd.",symbol:"Aliquam",amount:5.2,state:"approval",close_date:"May 19, 2023",manager:"Gray Torres"},{req_date:"Jul 14, 2022",address:"P.O. Box 882, 3533 Vel, Road",symbol:"diam.",amount:25.2,state:"approval",close_date:"Oct 13, 2021",manager:"Anne Small"},{req_date:"Jan 12, 2023",address:"2748 A Avenue",symbol:"urna",amount:11.2,state:"approval",close_date:"Apr 9, 2022",manager:"Erica Weiss"},{req_date:"Feb 11, 2023",address:"Ap #846-6513 Rutrum Avenue",symbol:"aliquet.",amount:26.2,state:"",close_date:"May 26, 2022",manager:"Debra Rowland"},{req_date:"Apr 9, 2023",address:"432-9464 Nunc Ave",symbol:"conubia",amount:1.2,state:"",close_date:"Dec 16, 2021",manager:"Lael Lamb"},{req_date:"Oct 27, 2021",address:"P.O. Box 449, 9198 Nisi St.",symbol:"urna.",amount:6.2,state:"",close_date:"Jun 14, 2022",manager:"Emery Joseph"},{req_date:"Apr 16, 2022",address:"P.O. Box 113, 8246 Auctor, Av.",symbol:"Duis",amount:27.2,state:"",close_date:"Nov 17, 2022",manager:"Laurel Huber"},{req_date:"Jun 10, 2023",address:"2042 Donec Street",symbol:"enim.",amount:27.2,state:"approval",close_date:"Jun 26, 2022",manager:"Wynne Oneil"},{req_date:"May 24, 2023",address:"295-9932 Quisque Rd.",symbol:"Nulla",amount:23.2,state:"",close_date:"Dec 9, 2022",manager:"Fallon Elliott"},{req_date:"Jun 23, 2022",address:"Ap #905-7223 Augue Avenue",symbol:"a",amount:21.2,state:"approval",close_date:"Sep 4, 2023",manager:"Mona Parsons"},{req_date:"Feb 5, 2023",address:"6291 Non Rd.",symbol:"dolor.",amount:2.2,state:"approval",close_date:"Aug 15, 2023",manager:"Philip Alvarez"},{req_date:"Dec 24, 2022",address:"Ap #453-1169 Diam Avenue",symbol:"fringilla",amount:7.2,state:"",close_date:"Dec 23, 2022",manager:"Arden Christensen"},{req_date:"Mar 26, 2022",address:"Ap #892-9051 Dis Road",symbol:"Duis",amount:27.2,state:"approval",close_date:"Feb 17, 2022",manager:"Ashton Hicks"},{req_date:"Jan 6, 2022",address:"Ap #497-2868 Orci. Street",symbol:"justo",amount:19.2,state:"approval",close_date:"Jun 12, 2023",manager:"Plato Hurst"},{req_date:"Jan 20, 2023",address:"801-9677 Ipsum Road",symbol:"nunc",amount:5.2,state:"",close_date:"May 17, 2022",manager:"Drew Shaffer"},{req_date:"May 13, 2023",address:"7307 Purus, Road",symbol:"metus.",amount:10.2,state:"",close_date:"Oct 13, 2021",manager:"Chaney Lang"},{req_date:"Feb 7, 2023",address:"Ap #600-8160 Eleifend St.",symbol:"scelerisque,",amount:28.2,state:"approval",close_date:"Sep 7, 2022",manager:"Colt Hartman"},{req_date:"Sep 4, 2023",address:"5958 Sapien, Road",symbol:"tempor",amount:2.2,state:"approval",close_date:"Jan 26, 2023",manager:"Connor Simon"},{req_date:"Oct 14, 2021",address:"P.O. Box 600, 7721 Proin Ave",symbol:"nulla.",amount:26.2,state:"",close_date:"Sep 15, 2023",manager:"Zephr Acosta"},{req_date:"Aug 23, 2023",address:"155-4446 Magna Rd.",symbol:"Mauris",amount:16.2,state:"approval",close_date:"Dec 20, 2021",manager:"Jeanette Gross"},{req_date:"May 31, 2023",address:"Ap #677-5025 Elementum, Avenue",symbol:"Donec",amount:3.2,state:"approval",close_date:"Oct 20, 2022",manager:"Brenden Rich"},{req_date:"Jun 26, 2023",address:"707-849 Tellus. St.",symbol:"Cras",amount:7.2,state:"",close_date:"Sep 19, 2023",manager:"Camilla Morrison"},{req_date:"Sep 14, 2023",address:"325-867 Euismod St.",symbol:"natoque",amount:13.2,state:"approval",close_date:"Oct 25, 2022",manager:"Ryan Craig"},{req_date:"Aug 9, 2022",address:"1929 Rutrum St.",symbol:"dictum",amount:8.2,state:"",close_date:"May 22, 2023",manager:"Hector Bond"},{req_date:"Aug 9, 2023",address:"Ap #425-7679 Euismod Road",symbol:"ac",amount:24.2,state:"",close_date:"Nov 1, 2021",manager:"Lance Daniel"},{req_date:"Dec 23, 2022",address:"8101 Enim Av.",symbol:"quis",amount:4.2,state:"approval",close_date:"Sep 25, 2022",manager:"Cherokee Wiley"},{req_date:"Aug 16, 2022",address:"171-2466 Dictum Ave",symbol:"Praesent",amount:22.2,state:"approval",close_date:"Aug 20, 2023",manager:"Cairo Hickman"},{req_date:"May 24, 2022",address:"1620 Arcu Rd.",symbol:"accumsan",amount:28.2,state:"",close_date:"Jan 16, 2022",manager:"Ivan Ashley"},{req_date:"May 29, 2023",address:"Ap #503-7813 Et, Ave",symbol:"feugiat",amount:17.2,state:"approval",close_date:"Mar 2, 2022",manager:"Levi Larsen"},{req_date:"Nov 27, 2022",address:"894-3035 Tellus Street",symbol:"ante.",amount:20.2,state:"approval",close_date:"Jun 20, 2022",manager:"Alfreda Winters"},{req_date:"Nov 3, 2021",address:"2778 Id, St.",symbol:"urna,",amount:19.2,state:"",close_date:"Jun 2, 2023",manager:"Leo Ward"},{req_date:"Nov 19, 2022",address:"744-2132 Odio. Street",symbol:"non,",amount:26.2,state:"",close_date:"Sep 1, 2022",manager:"Wang Owens"},{req_date:"Aug 1, 2023",address:"402-6693 Dolor. St.",symbol:"vulputate",amount:7.2,state:"approval",close_date:"May 24, 2022",manager:"Sonya Mayo"},{req_date:"Jan 25, 2022",address:"491-5564 Etiam Rd.",symbol:"mauris.",amount:21.2,state:"approval",close_date:"Oct 26, 2022",manager:"Amery Huber"},{req_date:"Apr 30, 2022",address:"502-5101 Ut, Rd.",symbol:"tellus",amount:20.2,state:"",close_date:"Feb 11, 2022",manager:"Christen Gallagher"},{req_date:"Jul 27, 2022",address:"Ap #556-419 Hendrerit. Road",symbol:"tristique",amount:9.2,state:"",close_date:"Jan 31, 2022",manager:"Abra Cunningham"},{req_date:"Aug 2, 2023",address:"P.O. Box 844, 3898 Turpis St.",symbol:"ipsum",amount:10.2,state:"",close_date:"May 22, 2023",manager:"Colby Christensen"},{req_date:"Oct 2, 2022",address:"765 Dictum Road",symbol:"lorem",amount:3.2,state:"approval",close_date:"Oct 8, 2022",manager:"Indira Hancock"},{req_date:"Dec 7, 2022",address:"2434 Eleifend, Rd.",symbol:"Duis",amount:15.2,state:"",close_date:"Sep 17, 2022",manager:"Caryn Sanders"},{req_date:"Jun 7, 2023",address:"Ap #414-5601 Urna Street",symbol:"neque",amount:27.2,state:"",close_date:"Dec 22, 2022",manager:"Avye Colon"},{req_date:"Mar 1, 2022",address:"276-7493 Quisque Ave",symbol:"Nunc",amount:26.2,state:"approval",close_date:"Jan 3, 2023",manager:"Ramona Eaton"},{req_date:"Aug 15, 2022",address:"499-7264 A, Street",symbol:"Nulla",amount:9.2,state:"",close_date:"May 10, 2022",manager:"Gavin Ochoa"},{req_date:"Aug 17, 2022",address:"752-4166 Parturient Av.",symbol:"lectus",amount:.2,state:"",close_date:"May 1, 2022",manager:"Neil Burch"},{req_date:"Apr 30, 2022",address:"6768 Laoreet Rd.",symbol:"mi",amount:8.2,state:"",close_date:"Oct 24, 2021",manager:"Valentine Lloyd"},{req_date:"Sep 6, 2022",address:"2947 Mus. St.",symbol:"Mauris",amount:2.2,state:"",close_date:"Sep 14, 2022",manager:"Basil Baxter"},{req_date:"Aug 29, 2022",address:"P.O. Box 230, 6878 Quis, Street",symbol:"elementum",amount:25.2,state:"approval",close_date:"Jan 11, 2022",manager:"Noah David"},{req_date:"Feb 22, 2023",address:"Ap #337-4443 Libero. Rd.",symbol:"enim.",amount:27.2,state:"",close_date:"Dec 19, 2022",manager:"Calvin Norton"},{req_date:"Nov 3, 2021",address:"Ap #577-736 At, Rd.",symbol:"amet,",amount:10.2,state:"",close_date:"Sep 21, 2022",manager:"Lacota Rich"},{req_date:"Jul 31, 2022",address:"Ap #980-6427 Lorem, Avenue",symbol:"lorem,",amount:24.2,state:"approval",close_date:"Jun 25, 2023",manager:"Kylie Carver"},{req_date:"Jan 7, 2023",address:"176-6706 Lacus Rd.",symbol:"augue",amount:4.2,state:"approval",close_date:"Dec 23, 2021",manager:"Tiger Harvey"},{req_date:"Mar 4, 2022",address:"8502 Donec Road",symbol:"elit,",amount:18.2,state:"approval",close_date:"Feb 15, 2023",manager:"Jade Wynn"},{req_date:"Dec 14, 2022",address:"Ap #214-1338 Imperdiet Rd.",symbol:"Duis",amount:20.2,state:"approval",close_date:"Jul 2, 2023",manager:"Bruce Holder"},{req_date:"Jun 4, 2023",address:"Ap #477-1725 Aliquet. Rd.",symbol:"semper",amount:26.2,state:"approval",close_date:"Jan 28, 2023",manager:"Valentine Baird"},{req_date:"Dec 24, 2022",address:"486-3150 Mauris. Rd.",symbol:"odio,",amount:19.2,state:"approval",close_date:"Aug 18, 2023",manager:"Steel Farrell"},{req_date:"Jan 16, 2023",address:"476-9396 Arcu. Av.",symbol:"nulla",amount:13.2,state:"approval",close_date:"Sep 13, 2023",manager:"Alexandra Hendricks"},{req_date:"Mar 2, 2022",address:"456-9860 Blandit St.",symbol:"arcu",amount:29.2,state:"approval",close_date:"Mar 6, 2022",manager:"Cruz Gallagher"},{req_date:"Aug 21, 2022",address:"436-6411 Imperdiet Ave",symbol:"diam.",amount:1.2,state:"approval",close_date:"Dec 25, 2021",manager:"Dorothy Abbott"},{req_date:"May 29, 2023",address:"397-5368 Nulla. St.",symbol:"dui",amount:4.2,state:"approval",close_date:"Nov 10, 2022",manager:"Francesca Patrick"},{req_date:"Nov 3, 2021",address:"Ap #297-3791 Quis, Rd.",symbol:"sit",amount:23.2,state:"approval",close_date:"Oct 6, 2021",manager:"Madison Leonard"},{req_date:"Jul 26, 2022",address:"P.O. Box 354, 1238 Pellentesque Ave",symbol:"iaculis",amount:11.2,state:"",close_date:"Oct 3, 2023",manager:"Elaine Hutchinson"},{req_date:"Aug 4, 2022",address:"158-4571 Ante St.",symbol:"tincidunt.",amount:22.2,state:"approval",close_date:"Sep 23, 2022",manager:"Mira Roach"},{req_date:"Jun 23, 2022",address:"654-2372 Auctor. Rd.",symbol:"non,",amount:17.2,state:"",close_date:"Feb 22, 2023",manager:"Kimberley Bruce"},{req_date:"Jun 13, 2022",address:"Ap #312-1069 In, Av.",symbol:"enim,",amount:15.2,state:"",close_date:"Sep 19, 2023",manager:"Noelle Simmons"},{req_date:"Aug 23, 2023",address:"P.O. Box 960, 3560 Ligula. St.",symbol:"vitae,",amount:4.2,state:"approval",close_date:"May 3, 2022",manager:"Shad Mason"},{req_date:"Feb 12, 2022",address:"P.O. Box 354, 839 Tincidunt, Avenue",symbol:"sit",amount:6.2,state:"",close_date:"Apr 5, 2023",manager:"Laurel Watkins"},{req_date:"Apr 7, 2023",address:"7283 Ultrices. Avenue",symbol:"Cras",amount:17.2,state:"approval",close_date:"Jan 18, 2023",manager:"Lionel Fuentes"},{req_date:"Jul 22, 2023",address:"5795 A, Av.",symbol:"Donec",amount:14.2,state:"",close_date:"Jun 9, 2023",manager:"Flynn Webb"},{req_date:"Mar 8, 2022",address:"886-7726 Cursus Ave",symbol:"pede",amount:4.2,state:"approval",close_date:"Apr 29, 2022",manager:"Dennis Stephenson"},{req_date:"Nov 2, 2021",address:"Ap #276-1313 Non Avenue",symbol:"convallis,",amount:22.2,state:"approval",close_date:"Dec 31, 2021",manager:"Darius Cobb"},{req_date:"Mar 2, 2022",address:"Ap #826-8218 Sed Street",symbol:"urna",amount:3.2,state:"approval",close_date:"Dec 1, 2021",manager:"Nita Mercado"},{req_date:"Dec 2, 2022",address:"952-5311 Gravida Street",symbol:"ut,",amount:6.2,state:"approval",close_date:"Jul 22, 2022",manager:"Meghan Richardson"},{req_date:"Mar 27, 2022",address:"Ap #740-8505 A Ave",symbol:"lorem",amount:1.2,state:"approval",close_date:"Jun 17, 2022",manager:"Bernard Owen"},{req_date:"Jan 3, 2022",address:"P.O. Box 540, 7458 Nisi Avenue",symbol:"aliquam",amount:13.2,state:"",close_date:"Oct 10, 2021",manager:"Margaret Oliver"},{req_date:"Dec 22, 2022",address:"Ap #505-5041 Libero Rd.",symbol:"in",amount:7.2,state:"approval",close_date:"Nov 1, 2022",manager:"Gretchen Rojas"},{req_date:"Apr 6, 2023",address:"5970 Ultrices Ave",symbol:"malesuada",amount:6.2,state:"",close_date:"Oct 8, 2022",manager:"Chase English"},{req_date:"Jun 11, 2023",address:"337-8634 Ac Street",symbol:"Donec",amount:9.2,state:"",close_date:"Aug 13, 2023",manager:"Odette Crawford"},{req_date:"Sep 18, 2022",address:"968-7021 Sit Rd.",symbol:"dictum",amount:28.2,state:"approval",close_date:"Dec 5, 2021",manager:"Patrick West"},{req_date:"Jan 23, 2023",address:"1975 Ut St.",symbol:"ultricies",amount:17.2,state:"",close_date:"Dec 30, 2022",manager:"Hanna Finch"},{req_date:"Oct 7, 2021",address:"215-1768 Curabitur Avenue",symbol:"tempus",amount:9.2,state:"approval",close_date:"Feb 3, 2022",manager:"Ian Barron"},{req_date:"Nov 13, 2021",address:"368-6262 Neque Avenue",symbol:"diam.",amount:25.2,state:"approval",close_date:"Apr 16, 2023",manager:"Iris Morales"},{req_date:"Jun 4, 2023",address:"247-4368 Aliquam, Street",symbol:"vulputate,",amount:17.2,state:"approval",close_date:"Aug 30, 2023",manager:"Zoe Joseph"},{req_date:"Nov 30, 2021",address:"P.O. Box 838, 8685 Lorem, Rd.",symbol:"mattis.",amount:24.2,state:"approval",close_date:"May 27, 2022",manager:"Nina Goodwin"},{req_date:"Feb 8, 2023",address:"Ap #291-7294 Eu St.",symbol:"non",amount:5.2,state:"approval",close_date:"Jan 22, 2022",manager:"Hector Patel"}]]}class Oo extends Pe{constructor(e){super(),Ne(this,e,Eo,Ro,i,{})}}function Co(e){let t,n,r,s;return{c(){t=O("button"),n=$(e[0]),L(t,"class","btn default svelte-1gxfmmu")},m(a,o){k(a,t,o),I(t,n),r||(s=P(t,"click",e[2]),r=!0)},p(e,t){1&t&&U(n,e[0])},d(e){e&&R(t),r=!1,s()}}}function $o(t){let n;return{c(){n=O("div"),L(n,"class","svelte-1gxfmmu")},m(e,t){k(e,n,t)},p:e,d(e){e&&R(n)}}}function Mo(e){let t,n,r,s,o,i,l,c,u,d,h,p,m,f,g;function v(e,t){return""==e[0]?$o:Co}let y=v(e),_=y(e);return p=new Ns({props:{routes:e[1]}}),{c(){t=O("header"),n=O("h1"),n.textContent="BPG ADMIN",r=M(),s=O("ul"),_.c(),o=M(),i=O("button"),i.textContent="대시보드",l=M(),c=O("button"),c.textContent="입금 관리",u=M(),d=O("button"),d.textContent="출금 관리",h=M(),Ce(p.$$.fragment),L(n,"class","svelte-1gxfmmu"),L(i,"class","btn default svelte-1gxfmmu"),L(c,"class","btn default svelte-1gxfmmu"),L(d,"class","btn default svelte-1gxfmmu"),L(s,"class","svelte-1gxfmmu"),L(t,"class","svelte-1gxfmmu")},m(a,v){k(a,t,v),I(t,n),I(t,r),I(t,s),_.m(s,null),I(s,o),I(s,i),I(s,l),I(s,c),I(s,u),I(s,d),k(a,h,v),$e(p,a,v),m=!0,f||(g=[P(i,"click",e[3]),P(c,"click",e[4]),P(d,"click",e[5])],f=!0)},p(e,[t]){y===(y=v(e))&&_?_.p(e,t):(_.d(1),_=y(e),_&&(_.c(),_.m(s,o)))},i(e){m||(Ae(p.$$.fragment,e),m=!0)},o(e){Ie(p.$$.fragment,e),m=!1},d(e){e&&R(t),_.d(),e&&R(h),Me(p,e),f=!1,a(g)}}}function No(e,t,n){let r,s,a;u(e,Ls,(e=>n(6,r=e))),u(e,xs,(e=>n(7,s=e))),u(e,Ps,(e=>n(0,a=e)));const o=async()=>{!function(e){Ge(e).signOut()}(ws(s)),y(Ls,r=null,r)};return[a,{"/":Ks,"/DepositManagement":ko,"/WithdrawalManagement":Oo,"/Dashboard":Js},function(){null!=r?(console.log("비로그인 상태"),$s("/")):(console.log("로그아웃 직후",a),y(Ps,a="",a),console.log("로그인 상태"),o(),$s("/"))},function(){$s("/Dashboard")},function(){$s("/DepositManagement")},function(){$s("/WithdrawalManagement")}]}return new class extends Pe{constructor(e){super(),Ne(this,e,No,Mo,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
