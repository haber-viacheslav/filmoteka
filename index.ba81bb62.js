var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={},r=e.parcelRequired76b;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequired76b=r),r.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),r.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),r.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),r.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var o,s,a,l=o={};function c(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function u(e){if(s===setTimeout)return setTimeout(e,0);if((s===c||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:c}catch(e){s=c}try{a="function"==typeof clearTimeout?clearTimeout:h}catch(e){a=h}}();var d,f=[],p=!1,m=-1;function g(){p&&d&&(p=!1,d.length?f=d.concat(f):m=-1,f.length&&_())}function _(){if(!p){var e=u(g);p=!0;for(var t=f.length;t;){for(d=f,f=[];++m<t;)d&&d[m].run();m=-1,t=f.length}d=null,p=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===h||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function v(){}l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new y(e,t)),1!==f.length||p||u(_)},y.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=v,l.addListener=v,l.once=v,l.off=v,l.removeListener=v,l.removeAllListeners=v,l.emit=v,l.prependListener=v,l.prependOnceListener=v,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};
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
const w=!1,b=!1,C="${JSCORE_VERSION}",I=function(e,t){if(!e)throw E(t)},E=function(e){return new Error("Firebase Database ("+C+") INTERNAL ASSERT FAILED: "+e)},T=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,s=o?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,h=(3&r)<<4|s>>4;let u=(15&s)<<2|l>>6,d=63&l;a||(d=64,o||(u=64)),i.push(n[c],n[h],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(T(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==s||null==a)throw Error();const l=r<<2|o>>4;if(i.push(l),64!==s){const e=o<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},S=function(e){const t=T(e);return k.encodeByteArray(t,!0)},N=function(e){return S(e).replace(/\./g,"")},O=function(e){try{return k.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
 */
function x(e){return R(void 0,e)}function R(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=R(e[n],t[n]));return e}
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
function P(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function A(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(P())}function L(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function D(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function M(){const e=P();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function F(){return!0===w||!0===b}function U(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
 */
const B=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,j=()=>{try{return B()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&O(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},q=e=>{var t,n;return null===(n=null===(t=j())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},H=e=>{const t=q(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},W=e=>{var t;return null===(t=j())||void 0===t?void 0:t[`_${e}`]};
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
class z{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function $(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[N(JSON.stringify({alg:"none",type:"JWT"})),N(JSON.stringify(o)),""].join(".")}
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
 */class Y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(X,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new Y(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const X=/\{\$([^}]+)}/g;
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
 */function K(e){return JSON.parse(e)}function G(e){return JSON.stringify(e)}
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
 */const J=function(e){let t={},n={},i={},r="";try{const o=e.split(".");t=K(O(o[0])||""),n=K(O(o[1])||""),r=o[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},Q=function(e){const t=J(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Z=function(e){const t=J(e).claims;return"object"==typeof t&&!0===t.admin};
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
function ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function te(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ne(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ie(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function re(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(oe(n)&&oe(o)){if(!re(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function oe(e){return null!==e&&"object"==typeof e}
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
 */
function se(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ae(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function le(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class ce{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^s&(a^l),r=1518500249):(i=s^a^l,r=1859775393):e<60?(i=s&a|l&(s|a),r=2400959708):(i=s^a^l,r=3395469782);const t=(o<<5|o>>>27)+i+c+r+n[e]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=o,o=t}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(0===o)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function he(e,t){const n=new ue(e,t);return n.subscribe.bind(n)}class ue{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=de),void 0===i.error&&(i.error=de),void 0===i.complete&&(i.complete=de);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function de(){}
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
 */function fe(e,t){return`${e} failed: ${t} argument `}
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
const pe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,I(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},me=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function ge(e){return e&&e._delegate?e._delegate:e}class _e{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
 */const ye="[DEFAULT]";
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
 */class ve{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new z;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ye?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class we{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ve(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const be=[];var Ce,Ie;(Ie=Ce||(Ce={}))[Ie.DEBUG=0]="DEBUG",Ie[Ie.VERBOSE=1]="VERBOSE",Ie[Ie.INFO=2]="INFO",Ie[Ie.WARN=3]="WARN",Ie[Ie.ERROR=4]="ERROR",Ie[Ie.SILENT=5]="SILENT";const Ee={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Te=Ce.INFO,ke={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},Se=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ke[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Ne{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ee[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Te,this._logHandler=Se,this._userLogHandler=null,be.push(this)}}let Oe,xe;const Re=new WeakMap,Pe=new WeakMap,Ae=new WeakMap,Le=new WeakMap,De=new WeakMap;let Me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Pe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ae.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(xe||(xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(je(this),t),Be(Re.get(this))}:function(...t){return Be(e.apply(je(this),t))}:function(t,...n){const i=e.call(je(this),t,...n);return Ae.set(i,t.sort?t.sort():[t]),Be(i)}}function Ue(e){return"function"==typeof e?Fe(e):(e instanceof IDBTransaction&&function(e){if(Pe.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));Pe.set(e,t)}(e),t=e,(Oe||(Oe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Me):e);var t}function Be(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(Be(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&Re.set(t,e)})).catch((()=>{})),De.set(t,e),t}(e);if(Le.has(e))return Le.get(e);const t=Ue(e);return t!==e&&(Le.set(e,t),De.set(t,e)),t}const je=e=>De.get(e);function qe(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const s=indexedDB.open(e,t),a=Be(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(Be(s.result),e.oldVersion,e.newVersion,Be(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const He=["get","getKey","getAll","getAllKeys","count"],We=["put","add","delete","clear"],ze=new Map;function $e(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ze.get(t))return ze.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=We.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!He.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let s=o.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),r&&o.done]))[0]};return ze.set(t,o),o}Me=(e=>({...e,get:(t,n,i)=>$e(t,n)||e.get(t,n,i),has:(t,n)=>!!$e(t,n)||e.has(t,n)}))(Me);
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
class Ye{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ve="@firebase/app",Xe="0.9.0",Ke=new Ne("@firebase/app"),Ge="[DEFAULT]",Je={[Ve]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Qe=new Map,Ze=new Map;function et(e,t){try{e.container.addComponent(t)}catch(n){Ke.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tt(e){const t=e.name;if(Ze.has(t))return Ke.debug(`There were multiple attempts to register component ${t}.`),!1;Ze.set(t,e);for(const t of Qe.values())et(t,e);return!0}function nt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const it=new V("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class rt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new _e("app",(()=>this),"PUBLIC"))}}
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
 */const ot="9.15.0";function st(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Ge,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw it.create("bad-app-name",{appName:String(r)});var o;if(n||(n=null===(o=j())||void 0===o?void 0:o.config),!n)throw it.create("no-options");const s=Qe.get(r);if(s){if(re(n,s.options)&&re(i,s.config))return s;throw it.create("duplicate-app",{appName:r})}const a=new we(r);for(const e of Ze.values())a.addComponent(e);const l=new rt(n,i,a);return Qe.set(r,l),l}function at(e=Ge){const t=Qe.get(e);if(!t&&e===Ge)return st();if(!t)throw it.create("no-app",{appName:e});return t}function lt(e,t,n){var i;let r=null!==(i=Je[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ke.warn(e.join(" "))}tt(new _e(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
const ct="firebase-heartbeat-store";let ht=null;function ut(){return ht||(ht=qe("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ct)}}).catch((e=>{throw it.create("idb-open",{originalErrorMessage:e.message})}))),ht}async function dt(e,t){try{const n=(await ut()).transaction(ct,"readwrite"),i=n.objectStore(ct);return await i.put(t,ft(e)),n.done}catch(e){if(e instanceof Y)Ke.warn(e.message);else{const t=it.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}function ft(e){return`${e.name}!${e.options.appId}`}
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
 */class pt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=mt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=mt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),_t(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_t(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=N(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function mt(){return(new Date).toISOString().substring(0,10)}class gt{async runIndexedDBEnvironmentCheck(){return!!U()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ut()).transaction(ct).objectStore(ct).get(ft(e))}catch(e){if(e instanceof Y)Ke.warn(e.message);else{const t=it.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return dt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return dt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function _t(e){return N(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var yt;yt="",tt(new _e("platform-logger",(e=>new Ye(e)),"PRIVATE")),tt(new _e("heartbeat",(e=>new pt(e)),"PRIVATE")),lt(Ve,Xe,yt),lt(Ve,Xe,"esm2017"),lt("fire-js","");
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
lt("firebase","9.15.0","app");const vt="@firebase/database",wt="0.14.0";
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
 */let bt="";
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
class Ct{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),G(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:K(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class It{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ee(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const Et=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ct(t)}}catch(e){}return new It},Tt=Et("localStorage"),kt=Et("sessionStorage"),St=new Ne("@firebase/database"),Nt=function(){let e=1;return function(){return e++}}(),Ot=function(e){const t=pe(e),n=new ce;n.update(t);const i=n.digest();return k.encodeByteArray(i)},xt=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=xt.apply(null,i):t+="object"==typeof i?G(i):i,t+=" "}return t};let Rt=null,Pt=!0;const At=function(e,t){I(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(St.logLevel=Ce.VERBOSE,Rt=St.log.bind(St),t&&kt.set("logging_enabled",!0)):"function"==typeof e?Rt=e:(Rt=null,kt.remove("logging_enabled"))},Lt=function(...e){if(!0===Pt&&(Pt=!1,null===Rt&&!0===kt.get("logging_enabled")&&At(!0)),Rt){const t=xt.apply(null,e);Rt(t)}},Dt=function(e){return function(...t){Lt(e,...t)}},Mt=function(...e){const t="FIREBASE INTERNAL ERROR: "+xt(...e);St.error(t)},Ft=function(...e){const t=`FIREBASE FATAL ERROR: ${xt(...e)}`;throw St.error(t),new Error(t)},Ut=function(...e){const t="FIREBASE WARNING: "+xt(...e);St.warn(t)},Bt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},jt="[MIN_NAME]",qt="[MAX_NAME]",Ht=function(e,t){if(e===t)return 0;if(e===jt||t===qt)return-1;if(t===jt||e===qt)return 1;{const n=Gt(e),i=Gt(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Wt=function(e,t){return e===t?0:e<t?-1:1},zt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+G(t))},$t=function(e){if("object"!=typeof e||null===e)return G(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=G(t[i]),n+=":",n+=$t(e[t[i]]);return n+="}",n},Yt=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Vt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Xt=function(e){I(!Bt(e),"Invalid JSON number");const t=1023;let n,i,r,o,s;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,r=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Kt=new RegExp("^-?(0*)\\d{1,10}$"),Gt=function(e){if(Kt.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Jt=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Ut("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Qt=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class Zt{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class en{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class tn{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}tn.OWNER="owner";
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
const nn="5",rn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,on="ac",sn="websocket",an="long_polling";
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
class ln{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Tt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,r=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Tt.get("host:"+e)||this._host}}function cn(e,t,n){let i;if(I("string"==typeof t,"typeof type must == string"),I("object"==typeof n,"typeof params must == object"),t===sn)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==an)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return Vt(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
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
 */class hn{incrementCounter(e,t=1){ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return x(this.counters_)}constructor(){this.counters_={}}}
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
 */const un={},dn={};function fn(e){const t=e.toString();return un[t]||(un[t]=new hn),un[t]}
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
class pn{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Jt((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */const mn="start";class gn{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new pn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(F()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new _n(((...e)=>{const[t,n,i,r,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===mn)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[mn]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=nn,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[on]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&rn.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gn.forceAllow_=!0}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){return!F()&&(!!gn.forceAllow_||!(gn.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=G(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=S(t),i=Yt(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(F())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=G(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,r,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Dt(e),this.stats_=fn(t),this.urlFn=e=>(this.appCheckToken&&(e[on]=this.appCheckToken),cn(t,an,e))}}class _n{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Lt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){F()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,F())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Nt(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=_n.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Lt("frame writing exception"),e.stack&&Lt(e.stack),Lt(e)}}}}
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
 */let yn=null;"undefined"!=typeof MozWebSocket?yn=MozWebSocket:"undefined"!=typeof WebSocket&&(yn=WebSocket);class vn{static connectionURL_(e,t,n,i,r){const o={};return o.v=nn,!F()&&"undefined"!=typeof location&&location.hostname&&rn.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),i&&(o[on]=i),r&&(o.p=r),cn(e,sn,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Tt.set("previous_websocket_failure",!0);try{let e;if(F()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${nn}/${bt}/${o.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new yn(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==yn&&!vn.forceDisallow_}static previouslyFailed(){return Tt.isInMemoryStorage||!0===Tt.get("previous_websocket_failure")}markConnectionHealthy(){Tt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=K(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=G(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Yt(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,r,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Dt(this.connId),this.stats_=fn(t),this.connURL=vn.connectionURL_(t,o,s,i,n),this.nodeAdmin=t.nodeAdmin}}vn.responsesRequiredToBeHealthy=2,vn.healthyTimeout=3e4;
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
class wn{static get ALL_TRANSPORTS(){return[gn,vn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=vn&&vn.isAvailable();let n=t&&!vn.previouslyFailed();if(e.webSocketOnly&&(t||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[vn];else{const e=this.transports_=[];for(const t of wn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}wn.globalTransportInitialized_=!1;class bn{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zt("t",e),n=zt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zt("t",e),n=zt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zt("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Mt("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),nn!==n&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Qt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Tt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,r,o,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Dt("c:"+this.id+":"),this.transportManager_=new wn(t),this.log_("Connection created"),this.start_()}}
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
 */class Cn{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class In{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){I(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class En extends In{static getInstance(){return new En}getInitialEvent(e){return I("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||A()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class Tn{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function kn(){return new Tn("")}function Sn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Nn(e){return e.pieces_.length-e.pieceNum_}function On(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Tn(e.pieces_,t)}function xn(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Rn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Pn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Tn(t,0)}function An(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Tn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Tn(n,0)}function Ln(e){return e.pieceNum_>=e.pieces_.length}function Dn(e,t){const n=Sn(e),i=Sn(t);if(null===n)return t;if(n===i)return Dn(On(e),On(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Mn(e,t){if(Nn(e)!==Nn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Fn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Nn(e)>Nn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Un{constructor(e,t){this.errorPrefix_=t,this.parts_=Rn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=me(this.parts_[e]);Bn(this)}}function Bn(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+jn(e))}function jn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class qn extends In{static getInstance(){return new qn}getInitialEvent(e){return I("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */const Hn=1e3;class Wn extends Cn{sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(G(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new z,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const o=r.d,s=r.s;Wn.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ee(e,"w")){const n=te(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Z(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Q(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const o={p:t,d:n};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+G(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Mt("Unrecognized action received from server: "+G(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Hn),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wn.nextConnectionId_++,r=this.lastSessionId;let o=!1,s=null;const a=function(){s?s.close():(o=!0,n())},l=function(e){I(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Lt("getToken() completed but was canceled"):(Lt("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,s=new bn(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ut(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Ut(e),a())}}}interrupt(e){Lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ne(this.interruptReasons_)&&(this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>$t(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Tn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Lt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Lt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";F()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+bt.replace(/\./g,"-")]=1,A()?e["framework.cordova"]=1:D()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=En.getInstance().currentlyOnline();return ne(this.interruptReasons_)&&e}constructor(e,t,n,i,r,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Wn.nextPersistentConnectionId_++,this.log_=Dt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hn,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!F())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&En.getInstance().on("online",this.onOnline_,this)}}Wn.nextPersistentConnectionId_=0,Wn.nextConnectionId_=0;
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
class zn{static Wrap(e,t){return new zn(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class $n{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new zn(jt,e),i=new zn(jt,t);return 0!==this.compare(n,i)}minPost(){return zn.MIN}}
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
 */let Yn;class Vn extends $n{static get __EMPTY_NODE(){return Yn}static set __EMPTY_NODE(e){Yn=e}compare(e,t){return Ht(e.name,t.name)}isDefinedOn(e){throw E("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return zn.MIN}maxPost(){return new zn(qt,Yn)}makePost(e,t){return I("string"==typeof e,"KeyIndex indexValue must always be a string."),new zn(e,Yn)}toString(){return".key"}}const Xn=new Vn;
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
 */class Kn{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Gn{copy(e,t,n,i,r){return new Gn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Jn.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Jn.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Gn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Gn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Gn.RED,this.left=null!=i?i:Jn.EMPTY_NODE,this.right=null!=r?r:Jn.EMPTY_NODE}}Gn.RED=!0,Gn.BLACK=!1;class Jn{insert(e,t){return new Jn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Gn.BLACK,null,null))}remove(e){return new Jn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Gn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Kn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Kn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Kn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Kn(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Jn.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function Qn(e,t){return Ht(e.name,t.name)}function Zn(e,t){return Ht(e,t)}
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
 */let ei;Jn.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Gn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const ti=function(e){return"number"==typeof e?"number:"+Xt(e):"string:"+e},ni=function(e){if(e.isLeafNode()){const t=e.val();I("string"==typeof t||"number"==typeof t||"object"==typeof t&&ee(t,".sv"),"Priority must be a string or number.")}else I(e===ei||e.isEmpty(),"priority of unexpected type.");I(e===ei||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let ii,ri,oi;class si{static set __childrenNodeConstructor(e){ii=e}static get __childrenNodeConstructor(){return ii}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new si(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:si.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ln(e)?this:".priority"===Sn(e)?this.priorityNode_:si.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:si.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Sn(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(I(".priority"!==n||1===Nn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,si.__childrenNodeConstructor.EMPTY_NODE.updateChild(On(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ti(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Xt(this.value_):this.value_,this.lazyHash_=Ot(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===si.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof si.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=si.VALUE_TYPE_ORDER.indexOf(t),r=si.VALUE_TYPE_ORDER.indexOf(n);return I(i>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=si.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ni(this.priorityNode_)}}si.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ai=new class extends $n{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Ht(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return zn.MIN}maxPost(){return new zn(qt,new si("[PRIORITY-POST]",oi))}makePost(e,t){const n=ri(e);return new zn(t,new si("[PRIORITY-POST]",n))}toString(){return".priority"}},li=Math.log(2);
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
 */class ci{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/li,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const hi=function(e,t,n,i){e.sort(t);const r=function(t,i){const o=i-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Gn(a,s.node,Gn.BLACK,null,null);{const l=parseInt(o/2,10)+t,c=r(t,l),h=r(l+1,i);return s=e[l],a=n?n(s):s,new Gn(a,s.node,Gn.BLACK,c,h)}},o=function(t){let i=null,o=null,s=e.length;const a=function(t,i){const o=s-t,a=s;s-=t;const c=r(o+1,a),h=e[o],u=n?n(h):h;l(new Gn(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(o=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Gn.BLACK):(a(i,Gn.BLACK),a(i,Gn.RED))}return o}(new ci(e.length));return new Jn(i||t,o)};
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
 */let ui;const di={};class fi{static get Default(){return I(di&&ai,"ChildrenNode.ts has not been loaded"),ui=ui||new fi({".priority":di},{".priority":ai}),ui}get(e){const t=te(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Jn?t:null}hasIndex(e){return ee(this.indexSet_,e.toString())}addIndex(e,t){I(e!==Xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(zn.Wrap);let o,s=r.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=r.getNext();o=i?hi(n,e.getCompare()):di;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=o,new fi(c,l)}addToIndexes(e,t){const n=ie(this.indexes_,((n,i)=>{const r=te(this.indexSet_,i);if(I(r,"Missing index implementation for "+i),n===di){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(zn.Wrap);let o=i.getNext();for(;o;)o.name!==e.name&&n.push(o),o=i.getNext();return n.push(e),hi(n,r.getCompare())}return di}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new zn(e.name,i))),r.insert(e,e.node)}}));return new fi(n,this.indexSet_)}removeFromIndexes(e,t){const n=ie(this.indexes_,(n=>{if(n===di)return n;{const i=t.get(e.name);return i?n.remove(new zn(e.name,i)):n}}));return new fi(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let pi;class mi{static get EMPTY_NODE(){return pi||(pi=new mi(new Jn(Zn),null,fi.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pi}updatePriority(e){return this.children_.isEmpty()?this:new mi(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?pi:t}}getChild(e){const t=Sn(e);return null===t?this:this.getImmediateChild(t).getChild(On(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new zn(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const o=i.isEmpty()?pi:this.priorityNode_;return new mi(i,o,r)}}updateChild(e,t){const n=Sn(e);if(null===n)return t;{I(".priority"!==Sn(e)||1===Nn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(On(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ai,((o,s)=>{t[o]=s.val(e),n++,r&&mi.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+ti(this.getPriority().val())+":"),this.forEachChild(ai,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Ot(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new zn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new zn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new zn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,zn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,zn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gi?-1:0}withIndex(e){if(e===Xn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new mi(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ai),n=t.getIterator(ai);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Xn?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ni(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}mi.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const gi=new class extends mi{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return mi.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Jn(Zn),mi.EMPTY_NODE,fi.Default)}};Object.defineProperties(zn,{MIN:{value:new zn(jt,mi.EMPTY_NODE)},MAX:{value:new zn(qt,gi)}}),Vn.__EMPTY_NODE=mi.EMPTY_NODE,si.__childrenNodeConstructor=mi,ei=gi,function(e){oi=e}(gi);function _i(e,t=null){if(null===e)return mi.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),I(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new si(e,_i(t))}if(e instanceof Array){let n=mi.EMPTY_NODE;return Vt(e,((t,i)=>{if(ee(e,t)&&"."!==t.substring(0,1)){const e=_i(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(_i(t))}{const n=[];let i=!1;if(Vt(e,((e,t)=>{if("."!==e.substring(0,1)){const r=_i(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new zn(e,r)))}})),0===n.length)return mi.EMPTY_NODE;const r=hi(n,Qn,(e=>e.name),Zn);if(i){const e=hi(n,ai.getCompare());return new mi(r,_i(t),new fi({".priority":e},{".priority":ai}))}return new mi(r,_i(t),fi.Default)}}!function(e){ri=e}(_i);
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
class yi extends $n{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Ht(e.name,t.name):r}makePost(e,t){const n=_i(e),i=mi.EMPTY_NODE.updateChild(this.indexPath_,n);return new zn(t,i)}maxPost(){const e=mi.EMPTY_NODE.updateChild(this.indexPath_,gi);return new zn(qt,e)}toString(){return Rn(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,I(!Ln(e)&&".priority"!==Sn(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const vi=new class extends $n{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Ht(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return zn.MIN}maxPost(){return zn.MAX}makePost(e,t){const n=_i(e);return new zn(t,n)}toString(){return".value"}};
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
 */function wi(e){return{type:"value",snapshotNode:e}}function bi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ci(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ii(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Ei{updateChild(e,t,n,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(t);return s.getChild(i).equals(n.getChild(i))&&s.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Ci(t,s)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(bi(t,n)):o.trackChildChange(Ii(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ai,((e,i)=>{t.hasChild(e)||n.trackChildChange(Ci(e,i))})),t.isLeafNode()||t.forEachChild(ai,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Ii(t,i,r))}else n.trackChildChange(bi(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?mi.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
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
 */class Ti{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,o){return this.matches(new zn(t,n))||(n=mi.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=mi.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(mi.EMPTY_NODE);const r=this;return t.forEachChild(ai,((e,t)=>{r.matches(new zn(e,t))||(i=i.updateImmediateChild(e,mi.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new Ei(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ti.getStartPost_(e),this.endPost_=Ti.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
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
 */class ki{updateChild(e,t,n,i,r,o){return this.rangedFilter_.matches(new zn(t,n))||(n=mi.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,o):this.fullLimitUpdateChild_(e,t,n,r,o)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=mi.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=mi.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(mi.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,mi.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const s=e;I(s.numChildren()===this.limit_,"");const a=new zn(t,n),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(s.hasChild(t)){const e=s.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||s.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:o(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(Ii(t,n,e)),s.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Ci(t,e));const n=s.updateImmediateChild(t,mi.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(bi(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&o(l,a)>=0?(null!=r&&(r.trackChildChange(Ci(l.name,l.node)),r.trackChildChange(bi(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(l.name,mi.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Ti(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
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
 */class Si{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jt}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ai}copy(){const e=new Si;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ai}}function Ni(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ai?n="$priority":e.index_===vi?n="$value":e.index_===Xn?n="$key":(I(e.index_ instanceof yi,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=G(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=G(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+G(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=G(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+G(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Oi(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ai&&(t.i=e.index_.toString()),t}
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
 */class xi extends Cn{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=xi.getListenId_(e,n),s={};this.listens_[o]=s;const a=Ni(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),te(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=xi.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ni(e._queryParams),n=e._path.toString(),i=new z;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+se(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=K(s.responseText)}catch(e){Ut("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&Ut("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Dt("p:rest:"),this.listens_={}}}
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
 */class Ri{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=mi.EMPTY_NODE}}
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
 */function Pi(){return{value:null,children:new Map}}function Ai(e,t,n){if(Ln(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Sn(t);e.children.has(i)||e.children.set(i,Pi());Ai(e.children.get(i),t=On(t),n)}}function Li(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{Li(i,new Tn(t.toString()+"/"+e),n)}))}class Di{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Vt(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class Mi{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Vt(e,((e,i)=>{i>0&&ee(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Qt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Di(e);const n=1e4+2e4*Math.random();Qt(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var Fi,Ui;function Bi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Ui=Fi||(Fi={}))[Ui.OVERWRITE=0]="OVERWRITE",Ui[Ui.MERGE=1]="MERGE",Ui[Ui.ACK_USER_WRITE=2]="ACK_USER_WRITE",Ui[Ui.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class ji{operationForChild(e){if(Ln(this.path)){if(null!=this.affectedTree.value)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Tn(e));return new ji(kn(),t,this.revert)}}return I(Sn(this.path)===e,"operationForChild called for unrelated child."),new ji(On(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Fi.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
 */class qi{operationForChild(e){return Ln(this.path)?new qi(this.source,kn()):new qi(this.source,On(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=Fi.LISTEN_COMPLETE}}
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
 */class Hi{operationForChild(e){return Ln(this.path)?new Hi(this.source,kn(),this.snap.getImmediateChild(e)):new Hi(this.source,On(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Fi.OVERWRITE}}
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
 */class Wi{operationForChild(e){if(Ln(this.path)){const t=this.children.subtree(new Tn(e));return t.isEmpty()?null:t.value?new Hi(this.source,kn(),t.value):new Wi(this.source,kn(),t)}return I(Sn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wi(this.source,On(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Fi.MERGE}}
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
 */class zi{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ln(e))return this.isFullyInitialized()&&!this.filtered_;const t=Sn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */class $i{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yi(e,t,n,i,r,o){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw E("Should only compare child_ events.");const i=new zn(t.childName,t.snapshotNode),r=new zn(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Vi(e,t){return{eventCache:e,serverCache:t}}function Xi(e,t,n,i){return Vi(new zi(t,n,i),e.serverCache)}function Ki(e,t,n,i){return Vi(e.eventCache,new zi(t,n,i))}function Gi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ji(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Qi;class Zi{static fromObject(e){let t=new Zi(null);return Vt(e,((e,n)=>{t=t.set(new Tn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:kn(),value:this.value};if(Ln(e))return null;{const n=Sn(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(On(e),t);if(null!=r){return{path:An(new Tn(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ln(e))return this;{const t=Sn(e),n=this.children.get(t);return null!==n?n.subtree(On(e)):new Zi(null)}}set(e,t){if(Ln(e))return new Zi(t,this.children);{const n=Sn(e),i=(this.children.get(n)||new Zi(null)).set(On(e),t),r=this.children.insert(n,i);return new Zi(this.value,r)}}remove(e){if(Ln(e))return this.children.isEmpty()?new Zi(null):new Zi(null,this.children);{const t=Sn(e),n=this.children.get(t);if(n){const i=n.remove(On(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Zi(null):new Zi(this.value,r)}return this}}get(e){if(Ln(e))return this.value;{const t=Sn(e),n=this.children.get(t);return n?n.get(On(e)):null}}setTree(e,t){if(Ln(e))return t;{const n=Sn(e),i=(this.children.get(n)||new Zi(null)).setTree(On(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Zi(this.value,r)}}fold(e){return this.fold_(kn(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(An(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,kn(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ln(e))return null;{const i=Sn(e),r=this.children.get(i);return r?r.findOnPath_(On(e),An(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,kn(),t)}foreachOnPath_(e,t,n){if(Ln(e))return this;{this.value&&n(t,this.value);const i=Sn(e),r=this.children.get(i);return r?r.foreachOnPath_(On(e),An(t,i),n):new Zi(null)}}foreach(e){this.foreach_(kn(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(An(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Qi||(Qi=new Jn(Wt)),Qi))()){this.value=e,this.children=t}}
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
 */class er{static empty(){return new er(new Zi(null))}constructor(e){this.writeTree_=e}}function tr(e,t,n){if(Ln(t))return new er(new Zi(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let o=i.value;const s=Dn(r,t);return o=o.updateChild(s,n),new er(e.writeTree_.set(r,o))}{const i=new Zi(n),r=e.writeTree_.setTree(t,i);return new er(r)}}}function nr(e,t,n){let i=e;return Vt(n,((e,n)=>{i=tr(i,An(t,e),n)})),i}function ir(e,t){if(Ln(t))return er.empty();{const n=e.writeTree_.setTree(t,new Zi(null));return new er(n)}}function rr(e,t){return null!=or(e,t)}function or(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Dn(n.path,t)):null}function sr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ai,((e,n)=>{t.push(new zn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new zn(e,n.value))})),t}function ar(e,t){if(Ln(t))return e;{const n=or(e,t);return new er(null!=n?new Zi(n):e.writeTree_.subtree(t))}}function lr(e){return e.writeTree_.isEmpty()}function cr(e,t){return hr(kn(),e.writeTree_,t)}function hr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(I(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=hr(An(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(An(e,".priority"),i)),n}}
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
 */function ur(e,t){return Er(t,e)}function dr(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));I(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,s=e.allWrites.length-1;for(;r&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&fr(t,i.path)?r=!1:Fn(i.path,t.path)&&(o=!0)),s--}if(r){if(o)return function(e){e.visibleWrites=mr(e.allWrites,pr,kn()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=ir(e.visibleWrites,i.path);else{Vt(i.children,(t=>{e.visibleWrites=ir(e.visibleWrites,An(i.path,t))}))}return!0}return!1}function fr(e,t){if(e.snap)return Fn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Fn(An(e.path,n),t))return!0;return!1}function pr(e){return e.visible}function mr(e,t,n){let i=er.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Fn(n,e)?(t=Dn(n,e),i=tr(i,t,o.snap)):Fn(e,n)&&(t=Dn(e,n),i=tr(i,kn(),o.snap.getChild(t)));else{if(!o.children)throw E("WriteRecord should have .snap or .children");if(Fn(n,e))t=Dn(n,e),i=nr(i,t,o.children);else if(Fn(e,n))if(t=Dn(e,n),Ln(t))i=nr(i,kn(),o.children);else{const e=te(o.children,Sn(t));if(e){const n=e.getChild(On(t));i=tr(i,kn(),n)}}}}}return i}function gr(e,t,n,i,r){if(i||r){const o=ar(e.visibleWrites,t);if(!r&&lr(o))return n;if(r||null!=n||rr(o,kn())){const o=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Fn(e.path,t)||Fn(t,e.path))};return cr(mr(e.allWrites,o,t),n||mi.EMPTY_NODE)}return null}{const i=or(e.visibleWrites,t);if(null!=i)return i;{const i=ar(e.visibleWrites,t);if(lr(i))return n;if(null!=n||rr(i,kn())){return cr(i,n||mi.EMPTY_NODE)}return null}}}function _r(e,t,n,i){return gr(e.writeTree,e.treePath,t,n,i)}function yr(e,t){return function(e,t,n){let i=mi.EMPTY_NODE;const r=or(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ai,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=ar(e.visibleWrites,t);return n.forEachChild(ai,((e,t)=>{const n=cr(ar(r,new Tn(e)),t);i=i.updateImmediateChild(e,n)})),sr(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return sr(ar(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function vr(e,t,n,i){return function(e,t,n,i,r){I(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=An(t,n);if(rr(e.visibleWrites,o))return null;{const t=ar(e.visibleWrites,o);return lr(t)?r.getChild(n):cr(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function wr(e,t){return function(e,t){return or(e.visibleWrites,t)}(e.writeTree,An(e.treePath,t))}function br(e,t,n,i,r,o){return function(e,t,n,i,r,o,s){let a;const l=ar(e.visibleWrites,t),c=or(l,kn());if(null!=c)a=c;else{if(null==n)return[];a=cr(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,o)}function Cr(e,t,n){return function(e,t,n,i){const r=An(t,n),o=or(e.visibleWrites,r);if(null!=o)return o;if(i.isCompleteForChild(n))return cr(ar(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ir(e,t){return Er(An(e.treePath,t),e.writeTree)}function Er(e,t){return{treePath:e,writeTree:t}}
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
 */class Tr{trackChildChange(e){const t=e.type,n=e.childName;I("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),I(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Ii(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Ci(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,bi(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw E("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ii(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const kr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Sr{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new zi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ji(this.viewCache_),r=br(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function Nr(e,t,n,i,r){const o=new Tr;let s,a;if(n.type===Fi.OVERWRITE){const l=n;l.source.fromUser?s=Rr(e,t,l.path,l.snap,i,r,o):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ln(l.path),s=xr(e,t,l.path,l.snap,i,r,a,o))}else if(n.type===Fi.MERGE){const l=n;l.source.fromUser?s=function(e,t,n,i,r,o,s){let a=t;return i.foreach(((i,l)=>{const c=An(n,i);Pr(t,Sn(c))&&(a=Rr(e,a,c,l,r,o,s))})),i.foreach(((i,l)=>{const c=An(n,i);Pr(t,Sn(c))||(a=Rr(e,a,c,l,r,o,s))})),a}(e,t,l.path,l.children,i,r,o):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),s=Lr(e,t,l.path,l.children,i,r,a,o))}else if(n.type===Fi.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,r,o){let s;if(null!=wr(i,n))return t;{const a=new Sr(i,t,r),l=t.eventCache.getNode();let c;if(Ln(n)||".priority"===Sn(n)){let n;if(t.serverCache.isFullyInitialized())n=_r(i,Ji(t));else{const e=t.serverCache.getNode();I(e instanceof mi,"serverChildren would be complete if leaf node"),n=yr(i,e)}c=e.filter.updateFullNode(l,n,o)}else{const r=Sn(n);let h=Cr(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?e.filter.updateChild(l,r,h,On(n),a,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,mi.EMPTY_NODE,On(n),a,o):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=_r(i,Ji(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=wr(i,kn()),Xi(t,c,s,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,r,o):function(e,t,n,i,r,o,s){if(null!=wr(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Ln(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xr(e,t,n,l.getNode().getChild(n),r,o,a,s);if(Ln(n)){let i=new Zi(null);return l.getNode().forEachChild(Xn,((e,t)=>{i=i.set(new Tn(e),t)})),Lr(e,t,n,i,r,o,a,s)}return t}{let c=new Zi(null);return i.foreach(((e,t)=>{const i=An(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Lr(e,t,n,c,r,o,a,s)}}(e,t,a.path,a.affectedTree,i,r,o)}else{if(n.type!==Fi.LISTEN_COMPLETE)throw E("Unknown operation type: "+n.type);s=function(e,t,n,i,r){const o=t.serverCache,s=Ki(t,o.getNode(),o.isFullyInitialized()||Ln(n),o.isFiltered());return Or(e,s,n,i,kr,r)}(e,t,n.path,i,o)}const l=o.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Gi(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(wi(Gi(t)))}}(t,s,l),{viewCache:s,changes:l}}function Or(e,t,n,i,r,o){const s=t.eventCache;if(null!=wr(i,n))return t;{let a,l;if(Ln(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ji(t),r=yr(i,n instanceof mi?n:mi.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=_r(i,Ji(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const c=Sn(n);if(".priority"===c){I(1===Nn(n),"Can't have a priority with additional path components");const r=s.getNode();l=t.serverCache.getNode();const o=vr(i,n,r,l);a=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{const h=On(n);let u;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const e=vr(i,n,s.getNode(),l);u=null!=e?s.getNode().getImmediateChild(c).updateChild(h,e):s.getNode().getImmediateChild(c)}else u=Cr(i,c,t.serverCache);a=null!=u?e.filter.updateChild(s.getNode(),c,u,h,r,o):s.getNode()}}return Xi(t,a,s.isFullyInitialized()||Ln(n),e.filter.filtersNodes())}}function xr(e,t,n,i,r,o,s,a){const l=t.serverCache;let c;const h=s?e.filter:e.filter.getIndexedFilter();if(Ln(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Sn(n);if(!l.isCompleteForPath(n)&&Nn(n)>1)return t;const r=On(n),o=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),o):h.updateChild(l.getNode(),e,o,r,kr,null)}const u=Ki(t,c,l.isFullyInitialized()||Ln(n),h.filtersNodes());return Or(e,u,n,r,new Sr(r,u,o),a)}function Rr(e,t,n,i,r,o,s){const a=t.eventCache;let l,c;const h=new Sr(r,t,o);if(Ln(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,s),l=Xi(t,c,!0,e.filter.filtersNodes());else{const r=Sn(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Xi(t,c,a.isFullyInitialized(),a.isFiltered());else{const o=On(n),c=a.getNode().getImmediateChild(r);let u;if(Ln(o))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===xn(o)&&e.getChild(Pn(o)).isEmpty()?e:e.updateChild(o,i):mi.EMPTY_NODE}if(c.equals(u))l=t;else{l=Xi(t,e.filter.updateChild(a.getNode(),r,u,o,h,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Pr(e,t){return e.eventCache.isCompleteForChild(t)}function Ar(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Lr(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Ln(n)?i:new Zi(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Ar(0,t.serverCache.getNode().getImmediateChild(n),i);c=xr(e,c,new Tn(n),l,r,o,s,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!l){const l=Ar(0,t.serverCache.getNode().getImmediateChild(n),i);c=xr(e,c,new Tn(n),l,r,o,s,a)}})),c}class Dr{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ei(n.getIndex()),r=(o=n).loadsAllData()?new Ei(o.getIndex()):o.hasLimit()?new ki(o):new Ti(o);var o;this.processor_=function(e){return{filter:e}}(r);const s=t.serverCache,a=t.eventCache,l=i.updateFullNode(mi.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(mi.EMPTY_NODE,a.getNode(),null),h=new zi(l,s.isFullyInitialized(),i.filtersNodes()),u=new zi(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vi(u,h),this.eventGenerator_=new $i(this.query_)}}function Mr(e,t){const n=Ji(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ln(t)&&!n.getImmediateChild(Sn(t)).isEmpty())?n.getChild(t):null}function Fr(e){return 0===e.eventRegistrations_.length}function Ur(e,t,n){const i=[];if(n){I(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Br(e,t,n,i){t.type===Fi.MERGE&&null!==t.source.queryId&&(I(Ji(e.viewCache_),"We should always have a full cache before handling merges"),I(Gi(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=Nr(e.processor_,r,t,n,i);var s,a;return s=e.processor_,a=o.viewCache,I(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),I(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),I(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,jr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function jr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],o=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Yi(e,r,"child_removed",t,i,n),Yi(e,r,"child_added",t,i,n),Yi(e,r,"child_moved",o,i,n),Yi(e,r,"child_changed",t,i,n),Yi(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let qr,Hr;class Wr{constructor(){this.views=new Map}}function zr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return I(null!=o,"SyncTree gave us an op for an invalid query."),Br(o,t,n,i)}{let r=[];for(const o of e.views.values())r=r.concat(Br(o,t,n,i));return r}}function $r(e,t,n,i,r){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=_r(n,r?i:null),o=!1;e?o=!0:i instanceof mi?(e=yr(n,i),o=!1):(e=mi.EMPTY_NODE,o=!1);const s=Vi(new zi(e,o,!1),new zi(i,r,!1));return new Dr(t,s)}return s}function Yr(e,t,n,i,r,o){const s=$r(e,t,i,r,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),function(e,t){e.eventRegistrations_.push(t)}(s,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(ai,((e,t)=>{i.push(bi(e,t))}));return n.isFullyInitialized()&&i.push(wi(n.getNode())),jr(e,i,n.getNode(),t)}(s,n)}function Vr(e,t,n,i){const r=t._queryIdentifier,o=[];let s=[];const a=Qr(e);if("default"===r)for(const[t,r]of e.views.entries())s=s.concat(Ur(r,n,i)),Fr(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||o.push(r.query));else{const t=e.views.get(r);t&&(s=s.concat(Ur(t,n,i)),Fr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||o.push(t.query)))}return a&&!Qr(e)&&o.push(new(I(qr,"Reference.ts has not been loaded"),qr)(t._repo,t._path)),{removed:o,events:s}}function Xr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Kr(e,t){let n=null;for(const i of e.views.values())n=n||Mr(i,t);return n}function Gr(e,t){if(t._queryParams.loadsAllData())return Zr(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Jr(e,t){return null!=Gr(e,t)}function Qr(e){return null!=Zr(e)}function Zr(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let eo=1;class to{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Zi(null),this.pendingWriteTree_={visibleWrites:er.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function no(e,t,n,i,r){return function(e,t,n,i,r){I(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=tr(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?co(e,new Hi({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function io(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(dr(e.pendingWriteTree_,t)){let t=new Zi(null);return null!=i.snap?t=t.set(kn(),!0):Vt(i.children,(e=>{t=t.set(new Tn(e),!0)})),co(e,new ji(i.path,t,n))}return[]}function ro(e,t,n){return co(e,new Hi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function oo(e,t,n,i,r=!1){const o=t._path,s=e.syncPointTree_.get(o);let a=[];if(s&&("default"===t._queryIdentifier||Jr(s,t))){const l=Vr(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(o));const c=l.removed;if(a=l.events,!r){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(o,((e,t)=>Qr(t)));if(n&&!r){const t=e.syncPointTree_.subtree(o);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Qr(t)){return[Zr(t)]}{let e=[];return t&&(e=Xr(t)),Vt(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,o=fo(e,i);e.listenProvider_.startListening(vo(r),po(e,r),o.hashFn,o.onComplete)}}}if(!r&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(vo(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(mo(t));e.listenProvider_.stopListening(vo(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=mo(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function so(e,t,n,i){const r=go(e,i);if(null!=r){const i=_o(r),o=i.path,s=i.queryId,a=Dn(o,t);return yo(e,o,new Hi(Bi(s),a,n))}return[]}function ao(e,t,n,i=!1){const r=t._path;let o=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Dn(e,r);o=o||Kr(t,n),s=s||Qr(t)}));let a,l=e.syncPointTree_.get(r);if(l?(s=s||Qr(l),o=o||Kr(l,kn())):(l=new Wr,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=o)a=!0;else{a=!1,o=mi.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Kr(t,kn());n&&(o=o.updateImmediateChild(e,n))}))}const c=Jr(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=mo(t);I(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=eo++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let h=Yr(l,t,n,ur(e.pendingWriteTree_,r),o,a);if(!c&&!s&&!i){const n=Gr(l,t);h=h.concat(function(e,t,n){const i=t._path,r=po(e,t),o=fo(e,n),s=e.listenProvider_.startListening(vo(t),r,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(i);if(r)I(!Qr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Ln(e)&&t&&Qr(t))return[Zr(t).query];{let e=[];return t&&(e=e.concat(Xr(t).map((e=>e.query)))),Vt(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(vo(i),po(e,i))}}return s}
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
 */(e,t,n))}return h}function lo(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Kr(n,Dn(e,t));if(i)return i}));return gr(i,t,r,n,!0)}function co(e,t){return ho(t,e.syncPointTree_,null,ur(e.pendingWriteTree_,kn()))}function ho(e,t,n,i){if(Ln(e.path))return uo(e,t,n,i);{const r=t.get(kn());null==n&&null!=r&&(n=Kr(r,kn()));let o=[];const s=Sn(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=Ir(i,s);o=o.concat(ho(a,l,e,t))}return r&&(o=o.concat(zr(r,e,i,n))),o}}function uo(e,t,n,i){const r=t.get(kn());null==n&&null!=r&&(n=Kr(r,kn()));let o=[];return t.children.inorderTraversal(((t,r)=>{const s=n?n.getImmediateChild(t):null,a=Ir(i,t),l=e.operationForChild(t);l&&(o=o.concat(uo(l,r,s,a)))})),r&&(o=o.concat(zr(r,e,i,n))),o}function fo(e,t){const n=t.query,i=po(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||mi.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=go(e,n);if(i){const n=_o(i),r=n.path,o=n.queryId,s=Dn(r,t);return yo(e,r,new qi(Bi(o),s))}return[]}(e,n._path,i):function(e,t){return co(e,new qi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return oo(e,n,null,i)}}}}function po(e,t){const n=mo(t);return e.queryToTagMap.get(n)}function mo(e){return e._path.toString()+"$"+e._queryIdentifier}function go(e,t){return e.tagToQueryMap.get(t)}function _o(e){const t=e.indexOf("$");return I(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Tn(e.substr(0,t))}}function yo(e,t,n){const i=e.syncPointTree_.get(t);I(i,"Missing sync point for query tag that we're tracking");return zr(i,n,ur(e.pendingWriteTree_,t),null)}function vo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(I(Hr,"Reference.ts has not been loaded"),Hr)(e._repo,e._path):e}class wo{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wo(t)}node(){return this.node_}constructor(e){this.node_=e}}class bo{getImmediateChild(e){const t=An(this.path_,e);return new bo(this.syncTree_,t)}node(){return lo(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Co=function(e,t,n){return e&&"object"==typeof e?(I(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Io(e[".sv"],t,n):"object"==typeof e[".sv"]?Eo(e[".sv"],t):void I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Io=function(e,t,n){if("timestamp"===e)return n.timestamp;I(!1,"Unexpected server value: "+e)},Eo=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&I(!1,"Unexpected increment value: "+i);const r=t.node();if(I(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return"number"!=typeof o?i:o+i},To=function(e,t,n,i){return So(t,new bo(n,e),i)},ko=function(e,t,n){return So(e,new wo(t),n)};function So(e,t,n){const i=e.getPriority().val(),r=Co(i,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const i=e,o=Co(i.getValue(),t,n);return o!==i.getValue()||r!==i.getPriority().val()?new si(o,_i(r)):e}{const i=e;return o=i,r!==i.getPriority().val()&&(o=o.updatePriority(new si(r))),i.forEachChild(ai,((e,i)=>{const r=So(i,t.getImmediateChild(e),n);r!==i&&(o=o.updateImmediateChild(e,r))})),o}}
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
 */class No{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Oo(e,t){let n=t instanceof Tn?t:new Tn(t),i=e,r=Sn(n);for(;null!==r;){const e=te(i.node.children,r)||{children:{},childCount:0};i=new No(r,i,e),n=On(n),r=Sn(n)}return i}function xo(e){return e.node.value}function Ro(e,t){e.node.value=t,Mo(e)}function Po(e){return e.node.childCount>0}function Ao(e,t){Vt(e.node.children,((n,i)=>{t(new No(n,e,i))}))}function Lo(e,t,n,i){n&&!i&&t(e),Ao(e,(e=>{Lo(e,t,!0,i)})),n&&i&&t(e)}function Do(e){return new Tn(null===e.parent?e.name:Do(e.parent)+"/"+e.name)}function Mo(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===xo(e)&&!Po(e)}(n),r=ee(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Mo(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Mo(e))}
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
 */(e.parent,e.name,e)}const Fo=/[\[\].#$\/\u0000-\u001F\u007F]/,Uo=/[\[\].#$\u0000-\u001F\u007F]/,Bo=10485760,jo=function(e){return"string"==typeof e&&0!==e.length&&!Fo.test(e)},qo=function(e){return"string"==typeof e&&0!==e.length&&!Uo.test(e)},Ho=function(e,t,n){const i=n instanceof Tn?new Un(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+jn(i));if("function"==typeof t)throw new Error(e+"contains a function "+jn(i)+" with contents = "+t.toString());if(Bt(t))throw new Error(e+"contains "+t.toString()+" "+jn(i));if("string"==typeof t&&t.length>3495253.3333333335&&me(t)>Bo)throw new Error(e+"contains a string greater than "+Bo+" utf8 bytes "+jn(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Vt(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!jo(t)))throw new Error(e+" contains an invalid key ("+t+") "+jn(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=me(a),Bn(s),Ho(e,o,i),function(e){const t=e.parts_.pop();e.byteLength_-=me(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+jn(i)+" in addition to actual children.")}},Wo=function(e,t,n,i){if(!(i&&void 0===n||qo(n)))throw new Error(fe(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},zo=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!jo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),qo(e)}(n))throw new Error(fe(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class $o{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],o=r.getPath();null===n||Mn(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function Vo(e,t,n){Yo(e,n),Ko(e,(e=>Mn(e,t)))}function Xo(e,t,n){Yo(e,n),Ko(e,(e=>Fn(e,t)||Fn(t,e)))}function Ko(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Go(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Go(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Rt&&Lt("event: "+n.toString()),Jt(i)}}}
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
 */const Jo="repo_interrupt";class Qo{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $o,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pi(),this.transactionQueueTree_=new No,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Zo(e,t,n){if(e.stats_=fn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new xi(e.repoInfo_,((t,n,i,r)=>{ns(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>is(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{G(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Wn(e.repoInfo_,t,((t,n,i,r)=>{ns(e,t,n,i,r)}),(t=>{is(e,t)}),(t=>{!function(e,t){Vt(t,((t,n)=>{rs(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return dn[n]||(dn[n]=t()),dn[n]}(e.repoInfo_,(()=>new Mi(e.stats_,e.server_))),e.infoData_=new Ri,e.infoSyncTree_=new to({startListening:(t,n,i,r)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=ro(e.infoSyncTree_,t._path,s),setTimeout((()=>{r("ok")}),0)),o},stopListening:()=>{}}),rs(e,"connected",!1),e.serverSyncTree_=new to({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const o=r(n,i);Xo(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function es(e){const t=e.infoData_.getNode(new Tn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function ts(e){return(t=(t={timestamp:es(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function ns(e,t,n,i,r){e.dataUpdateCount++;const o=new Tn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(r)if(i){const t=ie(n,(e=>_i(e)));s=function(e,t,n,i){const r=go(e,i);if(r){const i=_o(r),o=i.path,s=i.queryId,a=Dn(o,t),l=Zi.fromObject(n);return yo(e,o,new Wi(Bi(s),a,l))}return[]}(e.serverSyncTree_,o,t,r)}else{const t=_i(n);s=so(e.serverSyncTree_,o,t,r)}else if(i){const t=ie(n,(e=>_i(e)));s=function(e,t,n){const i=Zi.fromObject(n);return co(e,new Wi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,t)}else{const t=_i(n);s=ro(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=us(e,o)),Xo(e.eventQueue_,a,s)}function is(e,t){rs(e,"connected",t),!1===t&&function(e){ls(e,"onDisconnectEvents");const t=ts(e),n=Pi();Li(e.onDisconnect_,kn(),((i,r)=>{const o=To(i,r,e.serverSyncTree_,t);Ai(n,i,o)}));let i=[];Li(n,kn(),((t,n)=>{i=i.concat(ro(e.serverSyncTree_,t,n));const r=gs(e,t);us(e,r)})),e.onDisconnect_=Pi(),Xo(e.eventQueue_,kn(),i)}(e)}function rs(e,t,n){const i=new Tn("/.info/"+t),r=_i(n);e.infoData_.updateSnapshot(i,r);const o=ro(e.infoSyncTree_,i,r);Xo(e.eventQueue_,i,o)}function os(e){return e.nextWriteId_++}function ss(e,t,n){let i;i=".info"===Sn(t._path)?oo(e.infoSyncTree_,t,n):oo(e.serverSyncTree_,t,n),Vo(e.eventQueue_,t._path,i)}function as(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Jo)}function ls(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Lt(n,...t)}function cs(e,t,n){return lo(e.serverSyncTree_,t,n)||mi.EMPTY_NODE}function hs(e,t=e.transactionQueueTree_){if(t||ms(e,t),xo(t)){const n=fs(e,t);I(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=cs(e,t,i);let o=r;const s=r.hash();for(let e=0;e<n.length;e++){const i=n[e];I(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Dn(t,i.path);o=o.updateChild(r,i.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{ls(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(io(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ms(e,Oo(e.transactionQueueTree_,t)),hs(e,e.transactionQueueTree_),Xo(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Jt(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ut("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}us(e,t)}}),s)}(e,Do(t),n)}else Po(t)&&Ao(t,(t=>{hs(e,t)}))}function us(e,t){const n=ds(e,t),i=Do(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter((e=>0===e.status)),s=o.map((e=>e.currentWriteId));for(let o=0;o<t.length;o++){const l=t[o],c=Dn(n,l.path);let h,u=!1;if(I(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(io(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",r=r.concat(io(e.serverSyncTree_,l.currentWriteId,!0));else{const n=cs(e,l.path,s);l.currentInputSnapshot=n;const i=t[o].update(n.val());if(void 0!==i){Ho("transaction failed: Data returned ",i,l.path);let t=_i(i);"object"==typeof i&&null!=i&&ee(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=ts(e),c=ko(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=os(e),s.splice(s.indexOf(o),1),r=r.concat(no(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(io(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(io(e.serverSyncTree_,l.currentWriteId,!0))}Xo(e.eventQueue_,n,r),r=[],u&&(t[o].status=2,a=t[o].unwatcher,setTimeout(a,Math.floor(0)),t[o].onComplete&&("nodata"===h?i.push((()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot))):i.push((()=>t[o].onComplete(new Error(h),!1,null)))))}var a;ms(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Jt(i[e]);hs(e,e.transactionQueueTree_)}(e,fs(e,n),i),i}function ds(e,t){let n,i=e.transactionQueueTree_;for(n=Sn(t);null!==n&&void 0===xo(i);)i=Oo(i,n),n=Sn(t=On(t));return i}function fs(e,t){const n=[];return ps(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ps(e,t,n){const i=xo(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Ao(t,(t=>{ps(e,t,n)}))}function ms(e,t){const n=xo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ro(t,n.length>0?n:void 0)}Ao(t,(t=>{ms(e,t)}))}function gs(e,t){const n=Do(ds(e,t)),i=Oo(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{_s(e,t)})),_s(e,i),Lo(i,(t=>{_s(e,t)})),n}function _s(e,t){const n=xo(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(I(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(I(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(io(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Ro(t,void 0):n.length=o+1,Xo(e.eventQueue_,Do(t),r);for(let e=0;e<i.length;e++)Jt(i[e])}}
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
 */const ys=function(e,t){const n=vs(e),i=n.namespace;"firebase.com"===n.domain&&Ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ln(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Tn(n.pathString)}},vs=function(e){let t="",n="",i="",r="",o="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ut(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=i}"ns"in d&&(o=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:s,scheme:a,pathString:r,namespace:o}},ws="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
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
class bs{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+G(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class Cs{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
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
 */class Is{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
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
class Es{get key(){return Ln(this._path)?null:xn(this._path)}get ref(){return new Ts(this._repo,this._path)}get _queryIdentifier(){const e=Oi(this._queryParams),t=$t(e);return"{}"===t?"default":t}get _queryObject(){return Oi(this._queryParams)}isEqual(e){if(!((e=ge(e))instanceof Es))return!1;const t=this._repo===e._repo,n=Mn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class Ts extends Es{get parent(){const e=Pn(this._path);return null===e?null:new Ts(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Si,!1)}}class ks{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Tn(e),n=Ns(this.ref,e);return new ks(this._node.getChild(t),n,ai)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new ks(n,Ns(this.ref,t),ai))))}hasChild(e){const t=new Tn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function Ss(e,t){return(e=ge(e))._checkNotDeleted("ref"),void 0!==t?Ns(e._root,t):e._root}function Ns(e,t){var n,i,r,o;return null===Sn((e=ge(e))._path)?(n="child",i="path",o=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Wo(n,i,r,o)):Wo("child","path",t,!1),new Ts(e._repo,An(e._path,t))}class Os{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new bs("value",this,new ks(e.snapshotNode,new Ts(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Cs(this,e,t):null}matches(e){return e instanceof Os&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}class xs{respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Cs(this,e,t):null}createEvent(e,t){I(null!=e.childName,"Child events should have a childName.");const n=Ns(new Ts(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new bs(e.type,this,new ks(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xs&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}constructor(e,t){this.eventType=e,this.callbackContext=t}}function Rs(e,t,n,i,r){let o;if("object"==typeof i&&(o=void 0,r=i),"function"==typeof i&&(o=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{ss(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const s=new Is(n,o||void 0),a="value"===t?new Os(s):new xs(t,s);return function(e,t,n){let i;i=".info"===Sn(t._path)?ao(e.infoSyncTree_,t,n):ao(e.serverSyncTree_,t,n),Vo(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>ss(e._repo,e,a)}function Ps(e,t,n,i){return Rs(e,"value",t,n,i)}!function(e){I(!qr,"__referenceConstructor has already been defined"),qr=e}(Ts),function(e){I(!Hr,"__referenceConstructor has already been defined"),Hr=e}(Ts);
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
const As={};let Ls=!1;function Ds(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Lt("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,l,c=ys(s,r),h=c.repoInfo;void 0!==o&&o.env&&(l=o.env.FIREBASE_DATABASE_EMULATOR_HOST),l?(a=!0,s=`http://${l}?ns=${h.namespace}`,c=ys(s,r),h=c.repoInfo):a=!c.repoInfo.secure;const u=r&&a?new tn(tn.OWNER):new en(e.name,e.options,t);zo("Invalid Firebase Database URL",c),Ln(c.path)||Ft("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=As[t.name];r||(r={},As[t.name]=r);let o=r[e.toURLString()];o&&Ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Qo(e,Ls,n,i),r[e.toURLString()]=o,o}(h,e,u,new Zt(e.name,n));return new Ms(d,e)}class Ms{get _repo(){return this._instanceStarted||(Zo(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ts(this._repo,kn())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=As[t];n&&n[e.key]===e||Ft(`Database ${t}(${e.repoInfo_}) has already been deleted.`),as(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ft("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Wn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Wn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){bt=ot,tt(new _e("database",((e,{instanceIdentifier:t})=>Ds(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),lt(vt,wt,e),lt(vt,wt,"esm2017")}
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
 */();st({apiKey:"AIzaSyD7a39CtgzeuIx1kkpFRZ7MvO1bdmoGCT4",authDomain:"filmoteka-c3a99.firebaseapp.com",databaseURL:"https://filmoteka-c3a99-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-c3a99",storageBucket:"filmoteka-c3a99.appspot.com",messagingSenderId:"412361816258",appId:"1:412361816258:web:1c806438765e9ded7b235b",measurementId:"G-SJPWP9Q9CH"});Ps(Ss(function(e=at(),t){const n=nt(e,"database").getImmediate({identifier:t}),i=H("database");return i&&function(e,t,n,i={}){e=ge(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Ft("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&Ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new tn(tn.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:$(i.mockUserToken,e.app.options.projectId);o=new tn(t)}!function(e,t,n,i){e.repoInfo_=new ln(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(r,t,n,o)}(n,...i),n}(),"users/"),(e=>{e.val()}));function Fs(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Us(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bs=Us,js=new V("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),qs=new Ne("@firebase/auth");function Hs(e,...t){qs.logLevel<=Ce.ERROR&&qs.error(`Auth (${ot}): ${e}`,...t)}
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
 */function Ws(e,...t){throw Vs(e,...t)}function zs(e,...t){return Vs(e,...t)}function $s(e,t,n){const i=Object.assign(Object.assign({},Bs()),{[t]:n});return new V("auth","Firebase",i).create(t,{appName:e.name})}function Ys(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Ws(e,"argument-error"),$s(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vs(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return js.create(e,...t)}function Xs(e,t,...n){if(!e)throw Vs(t,...n)}function Ks(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Hs(t),new Error(t)}function Gs(e,t){e||Ks(t)}
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
 */const Js=new Map;function Qs(e){Gs(e instanceof Function,"Expected a class definition");let t=Js.get(e);return t?(Gs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Js.set(e,t),t)}
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
function Zs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ea(){return"http:"===ta()||"https:"===ta()}function ta(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function na(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ea()||L()||"connection"in navigator))||navigator.onLine}
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
class ia{get(){return na()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Gs(t>e,"Short delay should be less than long delay!"),this.isMobile=A()||D()}}
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
 */function ra(e,t){Gs(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class oa{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ks("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ks("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ks("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const sa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},aa=new ia(3e4,6e4);
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
 */function la(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ca(e,t,n,i,r={}){return ha(e,r,(async()=>{let r={},o={};i&&("GET"===t?o=i:r={body:JSON.stringify(i)});const s=se(Object.assign({key:e.config.apiKey},o)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),oa.fetch()(da(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function ha(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},sa),t);try{const t=new fa(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pa(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw pa(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw pa(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw pa(e,"user-disabled",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw $s(e,a,s);Ws(e,a)}}catch(t){if(t instanceof Y)throw t;Ws(e,"network-request-failed")}}async function ua(e,t,n,i,r={}){const o=await ca(e,t,n,i,r);return"mfaPendingCredential"in o&&Ws(e,"multi-factor-auth-required",{_serverResponse:o}),o}function da(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?ra(e.config,r):`${e.config.apiScheme}://${r}`}class fa{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(zs(this.auth,"network-request-failed"))),aa.get())}))}}function pa(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=zs(e,t,i);return r.customData._tokenResponse=n,r}
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
function ma(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ga(e){return 1e3*Number(e)}function _a(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Hs("JWT malformed, contained fewer than 3 sections"),null;try{const e=O(n);return e?JSON.parse(e):(Hs("Failed to decode base64 JWT payload"),null)}catch(e){return Hs("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function ya(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Y&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class va{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class wa{_initializeTime(){this.lastSignInTime=ma(this.lastLoginAt),this.creationTime=ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function ba(e){var t;const n=e.auth,i=await e.getIdToken(),r=await ya(e,async function(e,t){return ca(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Xs(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Fs(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const h=e.isAnonymous,u=!(e.email&&o.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new wa(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Ca{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Xs(e.idToken,"internal-error"),Xs(void 0!==e.idToken,"internal-error"),Xs(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=_a(e);return Xs(t,"internal-error"),Xs(void 0!==t.exp,"internal-error"),Xs(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Xs(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(e,t){const n=await ha(e,{},(async()=>{const n=se({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=da(e,i,"/v1/token",`key=${r}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",oa.fetch()(o,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new Ca;return n&&(Xs("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(Xs("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(Xs("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ca,this.toJSON())}_performRefresh(){return Ks("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function Ia(e,t){Xs("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ea{async getIdToken(e){const t=await ya(this,this.stsTokenManager.getToken(this.auth,e));return Xs(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ge(e),i=await n.getIdToken(t),r=_a(i);Xs(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,s=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:ma(ga(r.auth_time)),issuedAtTime:ma(ga(r.iat)),expirationTime:ma(ga(r.exp)),signInProvider:s||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ge(e);await ba(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Xs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ea(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Xs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ba(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ya(this,async function(e,t){return ca(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,s,a,l,c;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:C}=t;Xs(y&&C,e,"internal-error");const I=Ca.fromJSON(this.name,C);Xs("string"==typeof y,e,"internal-error"),Ia(h,e.name),Ia(u,e.name),Xs("boolean"==typeof v,e,"internal-error"),Xs("boolean"==typeof w,e,"internal-error"),Ia(d,e.name),Ia(f,e.name),Ia(p,e.name),Ia(m,e.name),Ia(g,e.name),Ia(_,e.name);const E=new Ea({uid:y,auth:e,email:u,emailVerified:v,displayName:h,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:_});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ca;i.updateFromServerResponse(t);const r=new Ea({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ba(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Fs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new va(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new wa(r.createdAt||void 0,r.lastLoginAt||void 0)}}
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
 */class Ta{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Ta.type="NONE";const ka=Ta;
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
 */function Sa(e,t,n){return`firebase:${e}:${t}:${n}`}class Na{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ea._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Na(Qs(ka),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Qs(ka);const o=Sa(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(o);if(t){const i=Ea._fromJSON(e,t);n!==r&&(s=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],s&&await r._set(o,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new Na(r,e,n)):new Na(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Sa(this.userKey,i.apiKey,r),this.fullPersistenceKey=Sa("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Oa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Aa(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xa(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Da(t))return"Blackberry";if(Ma(t))return"Webos";if(Ra(t))return"Safari";if((t.includes("chrome/")||Pa(t))&&!t.includes("edge/"))return"Chrome";if(La(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function xa(e=P()){return/firefox\//i.test(e)}function Ra(e=P()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pa(e=P()){return/crios\//i.test(e)}function Aa(e=P()){return/iemobile/i.test(e)}function La(e=P()){return/android/i.test(e)}function Da(e=P()){return/blackberry/i.test(e)}function Ma(e=P()){return/webos/i.test(e)}function Fa(e=P()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ua(){return M()&&10===document.documentMode}function Ba(e=P()){return Fa(e)||La(e)||Ma(e)||Da(e)||/windows phone/i.test(e)||Aa(e)}
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
function ja(e,t=[]){let n;switch(e){case"Browser":n=Oa(P());break;case"Worker":n=`${Oa(P())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ot}/${i}`}
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
 */class qa{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Ha{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qs(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Na.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==o||!(null==s?void 0:s.user)||(i=s.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Xs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ba(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ge(e):null;return t&&Xs(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Xs(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Qs(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new V("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qs(e)||this._popupRedirectResolver;Xs(t,this,"argument-error"),this.redirectPersistenceManager=await Na.create(this,[Qs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Xs(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Xs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ja(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new za(this),this.idTokenSubscription=new za(this),this.beforeStateQueue=new qa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=js,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Wa(e){return ge(e)}class za{get next(){return Xs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=he((e=>this.observer=e))}}function $a(e,t,n){const i=Wa(e);Xs(i._canInitEmulator,i,"emulator-config-failed"),Xs(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),o=Ya(t),{host:s,port:a}=function(e){const t=Ya(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Va(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Va(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${o}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ya(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Va(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Xa{toJSON(){return Ks("not implemented")}_getIdTokenResponse(e){return Ks("not implemented")}_linkToIdToken(e,t){return Ks("not implemented")}_getReauthenticationResolver(e){return Ks("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Ka(e,t){return ca(e,"POST","/v1/accounts:update",t)}
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
class Ga extends Xa{static _fromEmailAndPassword(e,t){return new Ga(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ga(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return ua(e,"POST","/v1/accounts:signInWithPassword",la(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return ua(e,"POST","/v1/accounts:signInWithEmailLink",la(e,t))}(e,{email:this._email,oobCode:this._password});default:Ws(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ka(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ua(e,"POST","/v1/accounts:signInWithEmailLink",la(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ws(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function Ja(e,t){return ua(e,"POST","/v1/accounts:signInWithIdp",la(e,t))}
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
 */class Qa extends Xa{static _fromParams(e){const t=new Qa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ws("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Fs(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Qa(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return Ja(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ja(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ja(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=se(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Za={USER_NOT_FOUND:"user-not-found"};
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
class el extends Xa{static _fromVerification(e,t){return new el({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new el({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ua(e,"POST","/v1/accounts:signInWithPhoneNumber",la(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ua(e,"POST","/v1/accounts:signInWithPhoneNumber",la(e,t));if(n.temporaryProof)throw pa(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ua(e,"POST","/v1/accounts:signInWithPhoneNumber",la(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Za)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new el({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class tl{static parseLink(e){const t=function(e){const t=ae(le(e)).link,n=t?ae(le(t)).deep_link_id:null,i=ae(le(e)).deep_link_id;return(i?ae(le(i)).link:null)||i||n||t||e}(e);try{return new tl(t)}catch(e){return null}}constructor(e){var t,n,i,r,o,s;const a=ae(le(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Xs(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=a.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
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
class nl{static credential(e,t){return Ga._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=tl.parseLink(t);return Xs(n,"argument-error"),Ga._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=nl.PROVIDER_ID}}nl.PROVIDER_ID="password",nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password",nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class il{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class rl extends il{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class ol extends rl{static credential(e){return Qa._fromParams({providerId:ol.PROVIDER_ID,signInMethod:ol.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ol.credentialFromTaggedObject(e)}static credentialFromError(e){return ol.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ol.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}ol.FACEBOOK_SIGN_IN_METHOD="facebook.com",ol.PROVIDER_ID="facebook.com";
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
class sl extends rl{static credential(e,t){return Qa._fromParams({providerId:sl.PROVIDER_ID,signInMethod:sl.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sl.credentialFromTaggedObject(e)}static credentialFromError(e){return sl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return sl.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}sl.GOOGLE_SIGN_IN_METHOD="google.com",sl.PROVIDER_ID="google.com";
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
class al extends rl{static credential(e){return Qa._fromParams({providerId:al.PROVIDER_ID,signInMethod:al.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return al.credentialFromTaggedObject(e)}static credentialFromError(e){return al.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return al.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}al.GITHUB_SIGN_IN_METHOD="github.com",al.PROVIDER_ID="github.com";
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
class ll extends rl{static credential(e,t){return Qa._fromParams({providerId:ll.PROVIDER_ID,signInMethod:ll.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ll.credentialFromTaggedObject(e)}static credentialFromError(e){return ll.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ll.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}ll.TWITTER_SIGN_IN_METHOD="twitter.com",ll.PROVIDER_ID="twitter.com";
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
class cl{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Ea._fromIdTokenResponse(e,n,i),o=hl(n);return new cl({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=hl(n);return new cl({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function hl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class ul extends Y{static _fromErrorAndOperation(e,t,n,i){return new ul(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ul.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function dl(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ul._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function fl(e,t,n=!1){const i=await ya(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return cl._forOperation(e,"link",i)}
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
async function pl(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const o=await ya(e,dl(i,r,t,e),n);Xs(o.idToken,i,"internal-error");const s=_a(o.idToken);Xs(s,i,"internal-error");const{sub:a}=s;return Xs(e.uid===a,i,"user-mismatch"),cl._forOperation(e,r,o)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ws(i,"user-mismatch"),e}}
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
 */async function ml(e,t,n=!1){const i="signIn",r=await dl(e,i,t),o=await cl._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}function gl(e){return ge(e).signOut()}new WeakMap;const _l="__sak";
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
 */class yl{_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class vl extends yl{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ua()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=P();return Ra(e)||Fa(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ba(),this._shouldAllowMigration=!0}}vl.type="LOCAL";const wl=vl;
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
 */class bl extends yl{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}bl.type="SESSION";const Cl=bl;
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
class Il{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Il(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(o).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function El(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Il.receivers=[];class Tl{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((s,a)=>{const l=El("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function kl(){return window}
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
function Sl(){return void 0!==kl().WorkerGlobalScope&&"function"==typeof kl().importScripts}
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
const Nl="firebaseLocalStorageDb",Ol="firebaseLocalStorage",xl="fbase_key";class Rl{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Pl(e,t){return e.transaction([Ol],t?"readwrite":"readonly").objectStore(Ol)}function Al(){const e=indexedDB.open(Nl,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ol,{keyPath:xl})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ol)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Nl);return new Rl(e).toPromise()}(),t(await Al()))}))}))}async function Ll(e,t,n){const i=Pl(e,!0).put({[xl]:t,value:n});return new Rl(i).toPromise()}function Dl(e,t){const n=Pl(e,!0).delete(t);return new Rl(n).toPromise()}class Ml{async _openDb(){return this.db||(this.db=await Al()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Il._getInstance(Sl()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Tl(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Al();return await Ll(e,_l,"1"),await Dl(e,_l),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ll(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Pl(e,!1).get(t),i=await new Rl(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Dl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Pl(e,!1).getAll();return new Rl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Ml.type="LOCAL";const Fl=Ml;
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
 */function Ul(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=zs("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function Bl(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Bl("rcb"),new ia(3e4,6e4);
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
const jl="recaptcha";async function ql(e,t,n){var i;const r=await n.verify();try{let o;if(Xs("string"==typeof r,e,"argument-error"),Xs(n.type===jl,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){Xs("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return ca(e,"POST","/v2/accounts/mfaEnrollment:start",la(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Xs("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;Xs(n,e,"missing-multi-factor-info");const s=await function(e,t){return ca(e,"POST","/v2/accounts/mfaSignIn:start",la(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ca(e,"POST","/v1/accounts:sendVerificationCode",la(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class Hl{verifyPhoneNumber(e,t){return ql(this.auth,e,ge(t))}static credential(e,t){return el._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Hl.credentialFromTaggedObject(t)}static credentialFromError(e){return Hl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?el._fromTokenResponse(t,n):null}constructor(e){this.providerId=Hl.PROVIDER_ID,this.auth=Wa(e)}}
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
function Wl(e,t){return t?Qs(t):(Xs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Hl.PROVIDER_ID="phone",Hl.PHONE_SIGN_IN_METHOD="phone";class zl extends Xa{_getIdTokenResponse(e){return Ja(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ja(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ja(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function $l(e){return ml(e.auth,new zl(e),e.bypassAuthState)}function Yl(e){const{auth:t,user:n}=e;return Xs(n,t,"internal-error"),pl(n,new zl(e),e.bypassAuthState)}async function Vl(e){const{auth:t,user:n}=e;return Xs(n,t,"internal-error"),fl(n,new zl(e),e.bypassAuthState)}
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
 */class Xl{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $l;case"linkViaPopup":case"linkViaRedirect":return Vl;case"reauthViaPopup":case"reauthViaRedirect":return Yl;default:Ws(this.auth,"internal-error")}}resolve(e){Gs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Kl=new ia(2e3,1e4);async function Gl(e,t,n){const i=Wa(e);Ys(e,t,il);const r=Wl(i,n);return new Jl(i,"signInViaPopup",t,r).executeNotNull()}class Jl extends Xl{async executeNotNull(){const e=await this.execute();return Xs(e,this.auth,"internal-error"),e}async onExecution(){Gs(1===this.filter.length,"Popup operations only handle one event");const e=El();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(zs(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(zs(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(zs(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Kl.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Jl.currentPopupAction&&Jl.currentPopupAction.cancel(),Jl.currentPopupAction=this}}Jl.currentPopupAction=null;
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
const Ql=new Map;class Zl extends Xl{async execute(){let e=Ql.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=nc(t),i=tc(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ql.set(this.auth._key(),e)}return this.bypassAuthState||Ql.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function ec(e,t){Ql.set(e._key(),t)}function tc(e){return Qs(e._redirectPersistence)}function nc(e){return Sa("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function ic(e,t,n=!1){const i=Wa(e),r=Wl(i,t),o=new Zl(i,r,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class rc{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sc(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!sc(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(zs(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(oc(e))}saveEventToCache(e){this.cachedEventUids.add(oc(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function oc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function sc({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const ac=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lc=/^https?/;async function cc(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ca(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(hc(e))return}catch(e){}Ws(e,"unauthorized-domain")}function hc(e){const t=Zs(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!lc.test(n))return!1;if(ac.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const uc=new ia(3e4,6e4);function dc(){const e=kl().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let fc=null;function pc(e){return fc=fc||function(e){return new Promise(((t,n)=>{var i,r,o;function s(){dc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dc(),n(zs(e,"network-request-failed"))},timeout:uc.get()})}if(null===(r=null===(i=kl().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=kl().gapi)||void 0===o?void 0:o.load)){const t=Bl("iframefcb");return kl()[t]=()=>{gapi.load?s():n(zs(e,"network-request-failed"))},Ul(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw fc=null,e}))}(e),fc}
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
 */const mc=new ia(5e3,15e3),gc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_c=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yc(e){const t=e.config;Xs(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ra(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:ot},r=_c.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${se(i).slice(1)}`}
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
const vc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class wc{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function bc(e,t,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vc),{width:i.toString(),height:r.toString(),top:o,left:s}),c=P().toLowerCase();n&&(a=Pa(c)?"_blank":n),xa(c)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=P()){var t;return Fa(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new wc(null);const u=window.open(t||"",a,h);Xs(u,e,"popup-blocked");try{u.focus()}catch(e){}return new wc(u)}const Cc="__/auth/handler",Ic="emulator/auth/handler";function Ec(e,t,n,i,r,o){Xs(e.config.authDomain,e,"auth-domain-config-required"),Xs(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:ot,eventId:r};if(t instanceof il){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",ne(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))s[e]=t}if(t instanceof rl){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?ra(e,Ic):`https://${e.authDomain}/${Cc}`}
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
 */(e)}?${se(a).slice(1)}`}const Tc="webStorageSupport";const kc=class{async _openPopup(e,t,n,i){var r;Gs(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return bc(e,Ec(e,t,n,Zs(),i),El())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Ec(e,t,n,Zs(),i),kl().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Gs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await pc(e),n=kl().gapi;return Xs(n,e,"internal-error"),t.open({where:document.body,url:yc(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gc,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=zs(e,"network-request-failed"),o=kl().setTimeout((()=>{i(r)}),mc.get());function s(){kl().clearTimeout(o),n(t)}t.ping(s).then(s,(()=>{i(r)}))}))))}(e),n=new rc(e);return t.register("authEvent",(t=>{Xs(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Tc,{type:Tc},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[Tc];void 0!==r&&t(!!r),Ws(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ba()||Ra()||Fa()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cl,this._completeRedirectFn=ic,this._overrideRedirectResult=ec}};var Sc="@firebase/auth",Nc="0.21.0";
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
class Oc{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Xs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const xc=W("authIdTokenMaxAge")||300;let Rc=null;function Pc(e=at()){const t=nt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=nt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(re(n.getOptions(),null!=t?t:{}))return e;Ws(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:kc,persistence:[Fl,wl,Cl]}),i=W("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>xc)return;const i=null==t?void 0:t.token;Rc!==i&&(Rc=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){ge(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){ge(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const o=q("auth");return o&&$a(n,`http://${o}`),n}var Ac;Ac="Browser",tt(new _e("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((e,n)=>{Xs(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Xs(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:o,clientPlatform:Ac,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ja(Ac)},s=new Ha(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Qs);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),tt(new _e("auth-internal",(e=>{const t=Wa(e.getProvider("auth").getImmediate());return new Oc(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),lt(Sc,Nc,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ac)),lt(Sc,Nc,"esm2017");st({apiKey:"AIzaSyD7a39CtgzeuIx1kkpFRZ7MvO1bdmoGCT4",authDomain:"filmoteka-c3a99.firebaseapp.com",databaseURL:"https://filmoteka-c3a99-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-c3a99",storageBucket:"filmoteka-c3a99.appspot.com",messagingSenderId:"412361816258",appId:"1:412361816258:web:1c806438765e9ded7b235b",measurementId:"G-SJPWP9Q9CH"});document.querySelector(".menu__link-js").addEventListener("click",(async function(){console.log("working");const e=new sl;Gl(Pc(),e).then((e=>{const t=sl.credentialFromResult(e).accessToken;console.log(t);const n=e.user;if(console.log(n),n){const e=document.querySelector(".menu__list");console.log(e);const t='<li class="menu__item">\n            <a\n              href="./index.html"\n              target="_self"\n              class="menu__link menu__link--current"\n              >HOME</a\n            >\n          </li>\n          <li class="menu__item">\n            <a href="./user-page.html" target="_self" class="menu__link"\n              >MY LIBRARY</a\n            >\n          </li>\n          <li class="menu__item">\n            <a target="_self" class="menu__link menu__logout">LOG OUT</a>\n          </li>';e.innerHTML=t,alert("You are in!"),function(){const e=document.querySelector(".menu__logout");function t(){gl(Pc()).then((()=>{alert("You loged out!"),location.reload()})).catch((e=>{console.error(e)}))}console.log(e),e.addEventListener("click",t)}()}})).catch((e=>{console.error(e);const t=e.code;console.error(t);const n=e.message;console.error(n);const i=e.customData.email;console.error(i);const r=sl.credentialFromError(e);console.error(r)}))}));var Lc={};Object.defineProperty(Lc,"__esModule",{value:!0}),Lc.default=function(e,t){var n=Dc.default(e,t,"get");return Mc.default(e,n)};var Dc=Fc(r("fExtF")),Mc=Fc(r("iaRLo"));function Fc(e){return e&&e.__esModule?e:{default:e}}var Uc={};Object.defineProperty(Uc,"__esModule",{value:!0}),Uc.default=function(e,t,n){jc.default(e,t),t.set(e,n)};var Bc,jc=(Bc=r("7K24o"))&&Bc.__esModule?Bc:{default:Bc};var qc={};Object.defineProperty(qc,"__esModule",{value:!0}),qc.default=function(e,t,n){var i=Hc.default(e,t,"set");return Wc.default(e,i,n),n};var Hc=zc(r("fExtF")),Wc=zc(r("3LGG3"));function zc(e){return e&&e.__esModule?e:{default:e}}var $c,Yc,Vc,Xc,Kc={};function Gc(e,t){return function(){return e.apply(t,arguments)}}$c=Kc,Yc="default",Vc=function(){return kh},Xc=function(e){return kh=e},Object.defineProperty($c,Yc,{get:Vc,set:Xc,enumerable:!0,configurable:!0});const{toString:Jc}=Object.prototype,{getPrototypeOf:Qc}=Object,Zc=(eh=Object.create(null),e=>{const t=Jc.call(e);return eh[t]||(eh[t]=t.slice(8,-1).toLowerCase())});var eh;const th=e=>(e=e.toLowerCase(),t=>Zc(t)===e),nh=e=>t=>typeof t===e,{isArray:ih}=Array,rh=nh("undefined");const oh=th("ArrayBuffer");const sh=nh("string"),ah=nh("function"),lh=nh("number"),ch=e=>null!==e&&"object"==typeof e,hh=e=>{if("object"!==Zc(e))return!1;const t=Qc(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},uh=th("Date"),dh=th("File"),fh=th("Blob"),ph=th("FileList"),mh=th("URLSearchParams");function gh(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),ih(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),o=r.length;let s;for(i=0;i<o;i++)s=r[i],t.call(null,e[s],s,e)}}function _h(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const yh="undefined"==typeof self?void 0===e?void 0:e:self,vh=e=>!rh(e)&&e!==yh;const wh=(bh="undefined"!=typeof Uint8Array&&Qc(Uint8Array),e=>bh&&e instanceof bh);var bh;const Ch=th("HTMLFormElement"),Ih=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Eh=th("RegExp"),Th=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};gh(n,((n,r)=>{!1!==t(n,r,e)&&(i[r]=n)})),Object.defineProperties(e,i)};var kh={isArray:ih,isArrayBuffer:oh,isBuffer:function(e){return null!==e&&!rh(e)&&null!==e.constructor&&!rh(e.constructor)&&ah(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||Jc.call(e)===t||ah(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&oh(e.buffer),t},isString:sh,isNumber:lh,isBoolean:e=>!0===e||!1===e,isObject:ch,isPlainObject:hh,isUndefined:rh,isDate:uh,isFile:dh,isBlob:fh,isRegExp:Eh,isFunction:ah,isStream:e=>ch(e)&&ah(e.pipe),isURLSearchParams:mh,isTypedArray:wh,isFileList:ph,forEach:gh,merge:function e(){const{caseless:t}=vh(this)&&this||{},n={},i=(i,r)=>{const o=t&&_h(n,r)||r;hh(n[o])&&hh(i)?n[o]=e(n[o],i):hh(i)?n[o]=e({},i):ih(i)?n[o]=i.slice():n[o]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&gh(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(gh(t,((t,i)=>{n&&ah(t)?e[i]=Gc(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,o,s;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),o=r.length;o-- >0;)s=r[o],i&&!i(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&Qc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Zc,kindOfTest:th,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(ih(e))return e;let t=e.length;if(!lh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:Ch,hasOwnProperty:Ih,hasOwnProp:Ih,reduceDescriptors:Th,freezeMethods:e=>{Th(e,((t,n)=>{if(ah(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];ah(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return ih(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:_h,global:yh,isContextDefined:vh,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(ch(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=ih(e)?[]:{};return gh(e,((e,t)=>{const o=n(e,i+1);!rh(o)&&(r[t]=o)})),t[i]=void 0,r}}return e};return n(e,0)}};function Sh(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}Kc.default.inherits(Sh,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Kc.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Nh=Sh.prototype,Oh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Oh[e]={value:e}})),Object.defineProperties(Sh,Oh),Object.defineProperty(Nh,"isAxiosError",{value:!0}),Sh.from=(e,t,n,i,r,o)=>{const s=Object.create(Nh);return Kc.default.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Sh.call(s,e.message,t,n,i,r),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};var xh,Rh,Ph,Ah=Sh,Lh=t("object"==typeof self?self.FormData:window.FormData);Rh=function(e){var t,n,i=Wh(e),r=i[0],o=i[1],s=new Bh(function(e,t,n){return 3*(t+n)/4-n}(0,r,o)),a=0,l=o>0?r-4:r;for(n=0;n<l;n+=4)t=Uh[e.charCodeAt(n)]<<18|Uh[e.charCodeAt(n+1)]<<12|Uh[e.charCodeAt(n+2)]<<6|Uh[e.charCodeAt(n+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===o&&(t=Uh[e.charCodeAt(n)]<<2|Uh[e.charCodeAt(n+1)]>>4,s[a++]=255&t);1===o&&(t=Uh[e.charCodeAt(n)]<<10|Uh[e.charCodeAt(n+1)]<<4|Uh[e.charCodeAt(n+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},Ph=function(e){for(var t,n=e.length,i=n%3,r=[],o=16383,s=0,a=n-i;s<a;s+=o)r.push(zh(e,s,s+o>a?a:s+o));1===i?(t=e[n-1],r.push(Fh[t>>2]+Fh[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(Fh[t>>10]+Fh[t>>4&63]+Fh[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Dh,Mh,Fh=[],Uh=[],Bh="undefined"!=typeof Uint8Array?Uint8Array:Array,jh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qh=0,Hh=jh.length;qh<Hh;++qh)Fh[qh]=jh[qh],Uh[jh.charCodeAt(qh)]=qh;function Wh(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function zh(e,t,n){for(var i,r,o=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(Fh[(r=i)>>18&63]+Fh[r>>12&63]+Fh[r>>6&63]+Fh[63&r]);return o.join("")}Uh["-".charCodeAt(0)]=62,Uh["_".charCodeAt(0)]=63,Dh=function(e,t,n,i,r){var o,s,a=8*r-i-1,l=(1<<a)-1,c=l>>1,h=-7,u=n?r-1:0,d=n?-1:1,f=e[t+u];for(u+=d,o=f&(1<<-h)-1,f>>=-h,h+=a;h>0;o=256*o+e[t+u],u+=d,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=i;h>0;s=256*s+e[t+u],u+=d,h-=8);if(0===o)o=1-c;else{if(o===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),o-=c}return(f?-1:1)*s*Math.pow(2,o-i)},Mh=function(e,t,n,i,r,o){var s,a,l,c=8*o-r-1,h=(1<<c)-1,u=h>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:o-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=h):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+u>=1?d/l:d*Math.pow(2,1-u))*l>=2&&(s++,l/=2),s+u>=h?(a=0,s=h):s+u>=1?(a=(t*l-1)*Math.pow(2,r),s+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,r),s=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;e[n+f]=255&s,f+=p,s/=256,c-=8);e[n+f-p]|=128*m};const $h="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;xh=Xh;const Yh=2147483647;function Vh(e){if(e>Yh)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Xh.prototype),t}function Xh(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Jh(e)}return Kh(e,t,n)}function Kh(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Xh.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|tu(e,t);let i=Vh(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Du(e,Uint8Array)){const t=new Uint8Array(e);return Zh(t.buffer,t.byteOffset,t.byteLength)}return Qh(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Du(e,ArrayBuffer)||e&&Du(e.buffer,ArrayBuffer))return Zh(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Du(e,SharedArrayBuffer)||e&&Du(e.buffer,SharedArrayBuffer)))return Zh(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return Xh.from(i,t,n);const r=function(e){if(Xh.isBuffer(e)){const t=0|eu(e.length),n=Vh(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Mu(e.length)?Vh(0):Qh(e);if("Buffer"===e.type&&Array.isArray(e.data))return Qh(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Xh.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Gh(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Jh(e){return Gh(e),Vh(e<0?0:0|eu(e))}function Qh(e){const t=e.length<0?0:0|eu(e.length),n=Vh(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function Zh(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,Xh.prototype),i}function eu(e){if(e>=Yh)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Yh.toString(16)+" bytes");return 0|e}function tu(e,t){if(Xh.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Du(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Pu(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Au(e).length;default:if(r)return i?-1:Pu(e).length;t=(""+t).toLowerCase(),r=!0}}function nu(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return gu(this,t,n);case"utf8":case"utf-8":return du(this,t,n);case"ascii":return pu(this,t,n);case"latin1":case"binary":return mu(this,t,n);case"base64":return uu(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _u(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function iu(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function ru(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Mu(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=Xh.from(t,i)),Xh.isBuffer(t))return 0===t.length?-1:ou(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):ou(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function ou(e,t,n,i,r){let o,s=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(r){let i=-1;for(o=n;o<a;o++)if(c(e,o)===c(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===l)return i*s}else-1!==i&&(o-=o-i),i=-1}else for(n+l>a&&(n=a-l),o=n;o>=0;o--){let n=!0;for(let i=0;i<l;i++)if(c(e,o+i)!==c(t,i)){n=!1;break}if(n)return o}return-1}function su(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=t.length;let s;for(i>o/2&&(i=o/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(Mu(i))return s;e[n+s]=i}return s}function au(e,t,n,i){return Lu(Pu(t,e.length-n),e,n,i)}function lu(e,t,n,i){return Lu(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function cu(e,t,n,i){return Lu(Au(t),e,n,i)}function hu(e,t,n,i){return Lu(function(e,t){let n,i,r;const o=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function uu(e,t,n){return 0===t&&n===e.length?Ph(e):Ph(e.slice(t,n))}function du(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let o=null,s=t>239?4:t>223?3:t>191?2:1;if(r+s<=n){let n,i,a,l;switch(s){case 1:t<128&&(o=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(o=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(o=l));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(o=l))}}null===o?(o=65533,s=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=s}return function(e){const t=e.length;if(t<=fu)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=fu));return n}(i)}Xh.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Xh.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Xh.prototype,"parent",{enumerable:!0,get:function(){if(Xh.isBuffer(this))return this.buffer}}),Object.defineProperty(Xh.prototype,"offset",{enumerable:!0,get:function(){if(Xh.isBuffer(this))return this.byteOffset}}),Xh.poolSize=8192,Xh.from=function(e,t,n){return Kh(e,t,n)},Object.setPrototypeOf(Xh.prototype,Uint8Array.prototype),Object.setPrototypeOf(Xh,Uint8Array),Xh.alloc=function(e,t,n){return function(e,t,n){return Gh(e),e<=0?Vh(e):void 0!==t?"string"==typeof n?Vh(e).fill(t,n):Vh(e).fill(t):Vh(e)}(e,t,n)},Xh.allocUnsafe=function(e){return Jh(e)},Xh.allocUnsafeSlow=function(e){return Jh(e)},Xh.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Xh.prototype},Xh.compare=function(e,t){if(Du(e,Uint8Array)&&(e=Xh.from(e,e.offset,e.byteLength)),Du(t,Uint8Array)&&(t=Xh.from(t,t.offset,t.byteLength)),!Xh.isBuffer(e)||!Xh.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},Xh.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Xh.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Xh.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=Xh.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Du(t,Uint8Array))r+t.length>i.length?(Xh.isBuffer(t)||(t=Xh.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!Xh.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},Xh.byteLength=tu,Xh.prototype._isBuffer=!0,Xh.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)iu(this,t,t+1);return this},Xh.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)iu(this,t,t+3),iu(this,t+1,t+2);return this},Xh.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)iu(this,t,t+7),iu(this,t+1,t+6),iu(this,t+2,t+5),iu(this,t+3,t+4);return this},Xh.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?du(this,0,e):nu.apply(this,arguments)},Xh.prototype.toLocaleString=Xh.prototype.toString,Xh.prototype.equals=function(e){if(!Xh.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Xh.compare(this,e)},Xh.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},$h&&(Xh.prototype[$h]=Xh.prototype.inspect),Xh.prototype.compare=function(e,t,n,i,r){if(Du(e,Uint8Array)&&(e=Xh.from(e,e.offset,e.byteLength)),!Xh.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(o,s),l=this.slice(i,r),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){o=l[e],s=c[e];break}return o<s?-1:s<o?1:0},Xh.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Xh.prototype.indexOf=function(e,t,n){return ru(this,e,t,n,!0)},Xh.prototype.lastIndexOf=function(e,t,n){return ru(this,e,t,n,!1)},Xh.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return su(this,e,t,n);case"utf8":case"utf-8":return au(this,e,t,n);case"ascii":case"latin1":case"binary":return lu(this,e,t,n);case"base64":return cu(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return hu(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},Xh.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const fu=4096;function pu(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function mu(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function gu(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=Fu[e[i]];return r}function _u(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function yu(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function vu(e,t,n,i,r,o){if(!Xh.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function wu(e,t,n,i,r){Nu(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function bu(e,t,n,i,r){Nu(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function Cu(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function Iu(e,t,n,i,r){return t=+t,n>>>=0,r||Cu(e,0,n,4),Mh(e,t,n,i,23,4),n+4}function Eu(e,t,n,i,r){return t=+t,n>>>=0,r||Cu(e,0,n,8),Mh(e,t,n,i,52,8),n+8}Xh.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,Xh.prototype),i},Xh.prototype.readUintLE=Xh.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||yu(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return i},Xh.prototype.readUintBE=Xh.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||yu(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},Xh.prototype.readUint8=Xh.prototype.readUInt8=function(e,t){return e>>>=0,t||yu(e,1,this.length),this[e]},Xh.prototype.readUint16LE=Xh.prototype.readUInt16LE=function(e,t){return e>>>=0,t||yu(e,2,this.length),this[e]|this[e+1]<<8},Xh.prototype.readUint16BE=Xh.prototype.readUInt16BE=function(e,t){return e>>>=0,t||yu(e,2,this.length),this[e]<<8|this[e+1]},Xh.prototype.readUint32LE=Xh.prototype.readUInt32LE=function(e,t){return e>>>=0,t||yu(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Xh.prototype.readUint32BE=Xh.prototype.readUInt32BE=function(e,t){return e>>>=0,t||yu(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Xh.prototype.readBigUInt64LE=Uu((function(e){Ou(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||xu(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),Xh.prototype.readBigUInt64BE=Uu((function(e){Ou(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||xu(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),Xh.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||yu(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},Xh.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||yu(e,t,this.length);let i=t,r=1,o=this[e+--i];for(;i>0&&(r*=256);)o+=this[e+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*t)),o},Xh.prototype.readInt8=function(e,t){return e>>>=0,t||yu(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Xh.prototype.readInt16LE=function(e,t){e>>>=0,t||yu(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Xh.prototype.readInt16BE=function(e,t){e>>>=0,t||yu(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Xh.prototype.readInt32LE=function(e,t){return e>>>=0,t||yu(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Xh.prototype.readInt32BE=function(e,t){return e>>>=0,t||yu(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Xh.prototype.readBigInt64LE=Uu((function(e){Ou(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||xu(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Xh.prototype.readBigInt64BE=Uu((function(e){Ou(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||xu(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Xh.prototype.readFloatLE=function(e,t){return e>>>=0,t||yu(e,4,this.length),Dh(this,e,!0,23,4)},Xh.prototype.readFloatBE=function(e,t){return e>>>=0,t||yu(e,4,this.length),Dh(this,e,!1,23,4)},Xh.prototype.readDoubleLE=function(e,t){return e>>>=0,t||yu(e,8,this.length),Dh(this,e,!0,52,8)},Xh.prototype.readDoubleBE=function(e,t){return e>>>=0,t||yu(e,8,this.length),Dh(this,e,!1,52,8)},Xh.prototype.writeUintLE=Xh.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){vu(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},Xh.prototype.writeUintBE=Xh.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){vu(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},Xh.prototype.writeUint8=Xh.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,1,255,0),this[t]=255&e,t+1},Xh.prototype.writeUint16LE=Xh.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Xh.prototype.writeUint16BE=Xh.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Xh.prototype.writeUint32LE=Xh.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Xh.prototype.writeUint32BE=Xh.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Xh.prototype.writeBigUInt64LE=Uu((function(e,t=0){return wu(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Xh.prototype.writeBigUInt64BE=Uu((function(e,t=0){return bu(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Xh.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);vu(this,e,t,n,i-1,-i)}let r=0,o=1,s=0;for(this[t]=255&e;++r<n&&(o*=256);)e<0&&0===s&&0!==this[t+r-1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},Xh.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);vu(this,e,t,n,i-1,-i)}let r=n-1,o=1,s=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===s&&0!==this[t+r+1]&&(s=1),this[t+r]=(e/o>>0)-s&255;return t+n},Xh.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Xh.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Xh.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Xh.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Xh.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||vu(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Xh.prototype.writeBigInt64LE=Uu((function(e,t=0){return wu(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Xh.prototype.writeBigInt64BE=Uu((function(e,t=0){return bu(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Xh.prototype.writeFloatLE=function(e,t,n){return Iu(this,e,t,!0,n)},Xh.prototype.writeFloatBE=function(e,t,n){return Iu(this,e,t,!1,n)},Xh.prototype.writeDoubleLE=function(e,t,n){return Eu(this,e,t,!0,n)},Xh.prototype.writeDoubleBE=function(e,t,n){return Eu(this,e,t,!1,n)},Xh.prototype.copy=function(e,t,n,i){if(!Xh.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},Xh.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Xh.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const o=Xh.isBuffer(e)?e:Xh.from(e,i),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=o[r%s]}return this};const Tu={};function ku(e,t,n){Tu[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function Su(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function Nu(e,t,n,i,r,o){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new Tu.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){Ou(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||xu(t,e.length-(n+1))}(i,r,o)}function Ou(e,t){if("number"!=typeof e)throw new Tu.ERR_INVALID_ARG_TYPE(t,"number",e)}function xu(e,t,n){if(Math.floor(e)!==e)throw Ou(e,n),new Tu.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new Tu.ERR_BUFFER_OUT_OF_BOUNDS;throw new Tu.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}ku("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),ku("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),ku("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=Su(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=Su(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const Ru=/[^+/0-9A-Za-z-_]/g;function Pu(e,t){let n;t=t||1/0;const i=e.length;let r=null;const o=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Au(e){return Rh(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ru,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Lu(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Du(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Mu(e){return e!=e}const Fu=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function Uu(e){return"undefined"==typeof BigInt?Bu:e}function Bu(){throw new Error("BigInt not supported")}var ju=xh;function qu(e){return Kc.default.isPlainObject(e)||Kc.default.isArray(e)}function Hu(e){return Kc.default.endsWith(e,"[]")?e.slice(0,-2):e}function Wu(e,t,n){return e?e.concat(t).map((function(e,t){return e=Hu(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const zu=Kc.default.toFlatObject(Kc.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var $u=function(e,t,n){if(!Kc.default.isObject(e))throw new TypeError("target must be an object");t=t||new(Lh||FormData);const i=(n=Kc.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Kc.default.isUndefined(t[e])}))).metaTokens,r=n.visitor||h,o=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((l=t)&&Kc.default.isFunction(l.append)&&"FormData"===l[Symbol.toStringTag]&&l[Symbol.iterator]);var l;if(!Kc.default.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(Kc.default.isDate(e))return e.toISOString();if(!a&&Kc.default.isBlob(e))throw new Ah("Blob is not supported. Use a Buffer instead.");return Kc.default.isArrayBuffer(e)||Kc.default.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):ju.from(e):e}function h(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(Kc.default.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(Kc.default.isArray(e)&&function(e){return Kc.default.isArray(e)&&!e.some(qu)}(e)||Kc.default.isFileList(e)||Kc.default.endsWith(n,"[]")&&(a=Kc.default.toArray(e)))return n=Hu(n),a.forEach((function(e,i){!Kc.default.isUndefined(e)&&null!==e&&t.append(!0===s?Wu([n],i,o):null===s?n:n+"[]",c(e))})),!1;return!!qu(e)||(t.append(Wu(r,n,o),c(e)),!1)}const u=[],d=Object.assign(zu,{defaultVisitor:h,convertValue:c,isVisitable:qu});if(!Kc.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!Kc.default.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),Kc.default.forEach(n,(function(n,o){!0===(!(Kc.default.isUndefined(n)||null===n)&&r.call(t,n,Kc.default.isString(o)?o.trim():o,i,d))&&e(n,i?i.concat(o):[o])})),u.pop()}}(e),t};function Yu(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Vu(e,t){this._pairs=[],e&&$u(e,this,t)}const Xu=Vu.prototype;Xu.append=function(e,t){this._pairs.push([e,t])},Xu.toString=function(e){const t=e?function(t){return e.call(this,t,Yu)}:Yu;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Ku=Vu;function Gu(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ju(e,t,n){if(!t)return e;const i=n&&n.encode||Gu,r=n&&n.serialize;let o;if(o=r?r(t,n):Kc.default.isURLSearchParams(t)?t.toString():new Ku(t,n).toString(i),o){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}var Qu=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Kc.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},Zu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ed="undefined"!=typeof URLSearchParams?URLSearchParams:Ku,td=FormData;const nd=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})();var id={isBrowser:!0,classes:{URLSearchParams:ed,FormData:td,Blob:Blob},isStandardBrowserEnv:nd,protocols:["http","https","file","blob","url","data"]};function rd(e,t){return $u(e,new id.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return id.isNode&&Kc.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var od=function(e){function t(e,n,i,r){let o=e[r++];const s=Number.isFinite(+o),a=r>=e.length;if(o=!o&&Kc.default.isArray(i)?i.length:o,a)return Kc.default.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s;i[o]&&Kc.default.isObject(i[o])||(i[o]=[]);return t(e,n,i[o],r)&&Kc.default.isArray(i[o])&&(i[o]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let o;for(i=0;i<r;i++)o=n[i],t[o]=e[o];return t}(i[o])),!s}if(Kc.default.isFormData(e)&&Kc.default.isFunction(e.entries)){const n={};return Kc.default.forEachEntry(e,((e,i)=>{t(function(e){return Kc.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const sd={"Content-Type":void 0};const ad={transitional:Zu,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=Kc.default.isObject(e);r&&Kc.default.isHTMLForm(e)&&(e=new FormData(e));if(Kc.default.isFormData(e))return i&&i?JSON.stringify(od(e)):e;if(Kc.default.isArrayBuffer(e)||Kc.default.isBuffer(e)||Kc.default.isStream(e)||Kc.default.isFile(e)||Kc.default.isBlob(e))return e;if(Kc.default.isArrayBufferView(e))return e.buffer;if(Kc.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return rd(e,this.formSerializer).toString();if((o=Kc.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return $u(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(Kc.default.isString(e))try{return(t||JSON.parse)(e),Kc.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ad.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&Kc.default.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw Ah.from(e,Ah.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:id.classes.FormData,Blob:id.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Kc.default.forEach(["delete","get","head"],(function(e){ad.headers[e]={}})),Kc.default.forEach(["post","put","patch"],(function(e){ad.headers[e]=Kc.default.merge(sd)}));var ld=ad;const cd=Kc.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var hd=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&cd[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const ud=Symbol("internals");function dd(e){return e&&String(e).trim().toLowerCase()}function fd(e){return!1===e||null==e?e:Kc.default.isArray(e)?e.map(fd):String(e)}function pd(e,t,n,i){return Kc.default.isFunction(i)?i.call(this,t,n):Kc.default.isString(t)?Kc.default.isString(i)?-1!==t.indexOf(i):Kc.default.isRegExp(i)?i.test(t):void 0:void 0}let md=Symbol.iterator,gd=Symbol.toStringTag;class _d{set(e,t,n){const i=this;function r(e,t,n){const r=dd(t);if(!r)throw new Error("header name must be a non-empty string");const o=Kc.default.findKey(i,r);(!o||void 0===i[o]||!0===n||void 0===n&&!1!==i[o])&&(i[o||t]=fd(e))}const o=(e,t)=>Kc.default.forEach(e,((e,n)=>r(e,n,t)));return Kc.default.isPlainObject(e)||e instanceof this.constructor?o(e,t):Kc.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?o(hd(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=dd(e)){const n=Kc.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(Kc.default.isFunction(t))return t.call(this,e,n);if(Kc.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=dd(e)){const n=Kc.default.findKey(this,e);return!(!n||t&&!pd(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=dd(e)){const r=Kc.default.findKey(n,e);!r||t&&!pd(0,n[r],r,t)||(delete n[r],i=!0)}}return Kc.default.isArray(e)?e.forEach(r):r(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return Kc.default.forEach(this,((i,r)=>{const o=Kc.default.findKey(n,r);if(o)return t[o]=fd(i),void delete t[r];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();s!==r&&delete t[r],t[s]=fd(i),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Kc.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&Kc.default.isArray(n)?n.join(", "):n)})),t}[md](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[gd](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ud]=this[ud]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=dd(e);t[i]||(!function(e,t){const n=Kc.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return Kc.default.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}_d.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),Kc.default.freezeMethods(_d.prototype),Kc.default.freezeMethods(_d);var yd=_d;function vd(e,t){const n=this||ld,i=t||n,r=yd.from(i.headers);let o=i.data;return Kc.default.forEach(e,(function(e){o=e.call(n,o,r.normalize(),t?t.status:void 0)})),r.normalize(),o}function wd(e){return!(!e||!e.__CANCEL__)}function bd(e,t,n){Ah.call(this,null==e?"canceled":e,Ah.ERR_CANCELED,t,n),this.name="CanceledError"}Kc.default.inherits(bd,Ah,{__CANCEL__:!0});var Cd=bd;function Id(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new Ah("Request failed with status code "+n.status,[Ah.ERR_BAD_REQUEST,Ah.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Ed=id.isStandardBrowserEnv?{write:function(e,t,n,i,r,o){const s=[];s.push(e+"="+encodeURIComponent(t)),Kc.default.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),Kc.default.isString(i)&&s.push("path="+i),Kc.default.isString(r)&&s.push("domain="+r),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Td(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function kd(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?Td(e,t):t}var Sd=id.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=Kc.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Nd(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Od=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,o=0,s=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[s];r||(r=l),n[o]=a,i[o]=l;let h=s,u=0;for(;h!==o;)u+=n[h++],h%=e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-r<t)return;const d=c&&l-c;return d?Math.round(1e3*u/d):void 0}};function xd(e,t){let n=0;const i=Od(50,250);return r=>{const o=r.loaded,s=r.lengthComputable?r.total:void 0,a=o-n,l=i(a);n=o;const c={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&o<=s?(s-o)/l:void 0,event:r};c[t?"download":"upload"]=!0,e(c)}}var Rd="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=yd.from(e.headers).normalize(),o=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}Kc.default.isFormData(i)&&id.isStandardBrowserEnv&&r.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const c=kd(e.baseURL,e.url);function h(){if(!l)return;const i=yd.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());Id((function(e){t(e),a()}),(function(e){n(e),a()}),{data:o&&"text"!==o&&"json"!==o?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),Ju(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(h)},l.onabort=function(){l&&(n(new Ah("Request aborted",Ah.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new Ah("Network Error",Ah.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||Zu;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Ah(t,i.clarifyTimeoutError?Ah.ETIMEDOUT:Ah.ECONNABORTED,e,l)),l=null},id.isStandardBrowserEnv){const t=(e.withCredentials||Sd(c))&&e.xsrfCookieName&&Ed.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in l&&Kc.default.forEach(r.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),Kc.default.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&"json"!==o&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",xd(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",xd(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new Cd(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const u=Nd(c);u&&-1===id.protocols.indexOf(u)?n(new Ah("Unsupported protocol "+u+":",Ah.ERR_BAD_REQUEST,e)):l.send(i||null)}))};const Pd={http:null,xhr:Rd};Kc.default.forEach(Pd,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Ad={getAdapter:e=>{e=Kc.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=Kc.default.isString(n)?Pd[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new Ah(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Kc.default.hasOwnProp(Pd,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!Kc.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Pd};function Ld(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Cd}function Dd(e){Ld(e),e.headers=yd.from(e.headers),e.data=vd.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Ad.getAdapter(e.adapter||ld.adapter)(e).then((function(t){return Ld(e),t.data=vd.call(e,e.transformResponse,t),t.headers=yd.from(t.headers),t}),(function(t){return wd(t)||(Ld(e),t&&t.response&&(t.response.data=vd.call(e,e.transformResponse,t.response),t.response.headers=yd.from(t.response.headers))),Promise.reject(t)}))}const Md=e=>e instanceof yd?e.toJSON():e;function Fd(e,t){t=t||{};const n={};function i(e,t,n){return Kc.default.isPlainObject(e)&&Kc.default.isPlainObject(t)?Kc.default.merge.call({caseless:n},e,t):Kc.default.isPlainObject(t)?Kc.default.merge({},t):Kc.default.isArray(t)?t.slice():t}function r(e,t,n){return Kc.default.isUndefined(t)?Kc.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function o(e,t){if(!Kc.default.isUndefined(t))return i(void 0,t)}function s(e,t){return Kc.default.isUndefined(t)?Kc.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,o){return o in t?i(n,r):o in e?i(void 0,n):void 0}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>r(Md(e),Md(t),!0)};return Kc.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const o=l[i]||r,s=o(e[i],t[i],i);Kc.default.isUndefined(s)&&o!==a||(n[i]=s)})),n}const Ud="1.2.0",Bd={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Bd[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const jd={};Bd.transitional=function(e,t,n){function i(e,t){return"[Axios v1.2.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,o)=>{if(!1===e)throw new Ah(i(r," has been removed"+(t?" in "+t:"")),Ah.ERR_DEPRECATED);return t&&!jd[r]&&(jd[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,o)}};var qd={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Ah("options must be an object",Ah.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const o=i[r],s=t[o];if(s){const t=e[o],n=void 0===t||s(t,o,e);if(!0!==n)throw new Ah("option "+o+" must be "+n,Ah.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Ah("Unknown option "+o,Ah.ERR_BAD_OPTION)}},validators:Bd};const Hd=qd.validators;class Wd{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Fd(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;let o;void 0!==n&&qd.assertOptions(n,{silentJSONParsing:Hd.transitional(Hd.boolean),forcedJSONParsing:Hd.transitional(Hd.boolean),clarifyTimeoutError:Hd.transitional(Hd.boolean)},!1),void 0!==i&&qd.assertOptions(i,{encode:Hd.function,serialize:Hd.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),o=r&&Kc.default.merge(r.common,r[t.method]),o&&Kc.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=yd.concat(o,r);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let h,u=0;if(!a){const e=[Dd.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,l),h=e.length,c=Promise.resolve(t);u<h;)c=c.then(e[u++],e[u++]);return c}h=s.length;let d=t;for(u=0;u<h;){const e=s[u++],t=s[u++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=Dd.call(this,d)}catch(e){return Promise.reject(e)}for(u=0,h=l.length;u<h;)c=c.then(l[u++],l[u++]);return c}getUri(e){return Ju(kd((e=Fd(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new Qu,response:new Qu}}}Kc.default.forEach(["delete","get","head","options"],(function(e){Wd.prototype[e]=function(t,n){return this.request(Fd(n||{},{method:e,url:t,data:(n||{}).data}))}})),Kc.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(Fd(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Wd.prototype[e]=t(),Wd.prototype[e+"Form"]=t(!0)}));var zd=Wd;class $d{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new $d((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new Cd(e,i,r),t(n.reason))}))}}var Yd=$d;const Vd=function e(t){const n=new zd(t),i=Gc(zd.prototype.request,n);return Kc.default.extend(i,zd.prototype,n,{allOwnKeys:!0}),Kc.default.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(Fd(t,n))},i}(ld);Vd.Axios=zd,Vd.CanceledError=Cd,Vd.CancelToken=Yd,Vd.isCancel=wd,Vd.VERSION=Ud,Vd.toFormData=$u,Vd.AxiosError=Ah,Vd.Cancel=Vd.CanceledError,Vd.all=function(e){return Promise.all(e)},Vd.spread=function(e){return function(t){return e.apply(null,t)}},Vd.isAxiosError=function(e){return Kc.default.isObject(e)&&!0===e.isAxiosError},Vd.AxiosHeaders=yd,Vd.formToJSON=e=>od(Kc.default.isHTMLForm(e)?new FormData(e):e),Vd.default=Vd;var Xd=Vd;const{Axios:Kd,AxiosError:Gd,CanceledError:Jd,isCancel:Qd,CancelToken:Zd,VERSION:ef,all:tf,Cancel:nf,isAxiosError:rf,spread:of,toFormData:sf,AxiosHeaders:af,formToJSON:lf}=Xd;var cf=new WeakMap,hf=new WeakMap;var uf=class{async fetchWithAllFilmsData({mediaType:e,timeWindow:n}){return await Xd.get(`trending/${e}/${n}?api_key=${t(Lc)(this,cf)}&page=${this.page}`,this.config)}async getAllFilmsData({mediaType:e="movie",timeWindow:n="day"}){try{const i=await this.fetchWithAllFilmsData({mediaType:e,timeWindow:n});return t(qc)(this,hf,i.data.total_pages),i}catch(e){console.log(e)}}async fetchWithCurrentFilm({mediaType:e,id:n}){return await Xd.get(`${e}/${n}?api_key=${t(Lc)(this,cf)} `,this.config)}async getCurrentFilm({mediaType:e="movie",id:t}){try{return await this.fetchWithCurrentFilm({mediaType:e,id:t})}catch(e){console.log(e)}}async fetchFilmTrailerById({mediaType:e,id:n}){return await Xd.get(`${e}/${n}/videos?api_key=${t(Lc)(this,cf)} `,this.config)}async getFilmTrailerById({mediaType:e="movie",id:t}){try{return await this.fetchFilmTrailerById({mediaType:e,id:t})}catch(e){console.log(e)}}async fetchWithSearchFilmData({mediaType:e,lang:n,page:i,include_adult:r}){return await Xd.get(`search/${e}?api_key=${t(Lc)(this,cf)}&language=${n}&query=${this.query}&page=${i}&include_adult=${r}`,this.config)}async fetchGenresList({mediaType:e,genreType:n,page:i}){return await Xd.get(`genre/${e}/${n}?api_key=${t(Lc)(this,cf)}&page=${i}`,this.config)}async getGenresList({mediaType:e="movie",genreType:t="list",page:n="1"}){try{return await this.fetchGenresList({mediaType:e,genreType:t,page:n})}catch(e){console.log(e)}}async getSearchFilmsData({mediaType:e="movie",lang:t="en-US",page:n=1,include_adult:i=!1}){try{return await this.fetchWithSearchFilmData({mediaType:e,lang:t,page:n,include_adult:i})}catch(e){console.log(e)}}incrementPage({step:e=1}){this.page+=e}get actualPage(){return this.page}set actualPage(e){this.page=e}get actualQuery(){return this.query}set actualQuery(e){return this.query=e.trim()}get totalPages(){return t(Lc)(this,hf)}set totalPages(e){t(qc)(this,hf,e)}constructor(e={baseURL:"https://api.themoviedb.org/3/"}){t(Uc)(this,cf,{writable:!0,value:void 0}),t(Uc)(this,hf,{writable:!0,value:void 0}),this.query="",this.config=e,t(qc)(this,cf,"76cbb606f190fc237086ec33f1fd98a3"),this.page=1,t(qc)(this,hf,null)}};const df={btnOpenRef:document.querySelector("[data-modal-open]"),btnOpenUserRef:document.querySelector("[data-modal-open-user]"),btnCloseRef:document.querySelector("[data-main-modal-close]"),btnCloseUserRef:document.querySelector("[data-user-modal-close]"),body:document.querySelector("body"),teamModal:document.querySelector("[data-team-modal]"),headerUserLink:document.querySelector(".menu__link-js"),form:document.querySelector(".form"),searchError:document.querySelector(".form__text-error"),pagRef:document.querySelector(".pagination"),currentPage:document.querySelector("#curr"),nextPage:document.querySelector("#next"),prevPage:document.querySelector("#prev"),firstPage:document.querySelector("#first-page"),lastPage:document.querySelector("#last-page"),beforeCurPageContainer:document.querySelector(".before-cur-page"),afterCurPageContainer:document.querySelector(".after-cur-page"),themeBtnRef:document.querySelector(".theme-btn"),lightIconRef:document.querySelector(".theme-light"),darkIconRef:document.querySelector(".theme-dark"),filmList:document.querySelector(".films__list"),btnScrollTopRef:document.querySelector(".btn__up"),btnScrollDownRef:document.querySelector(".btn__down"),footerRef:document.querySelector(".footer")};function ff(e,t,n){let i=null,r=e;e.length>2?(i=!0,r=e.slice(0,2)):i=!1;let o=r.map((e=>t.find((t=>t.id===e)))).map((e=>e.name)).join(", ");i&&(o+=", Other");return{date:n.slice(0,4),genresOfCurrentFilm:o}}var pf=class{createFilmCardsMarkup(e,t){return e.map((({poster_path:e,title:n,genre_ids:i,release_date:r,id:o})=>{const s=ff(i,t,r),{date:a,genresOfCurrentFilm:l}=s;return` <li class="film">\n        <div class="film__thumb">\n          <img data-id='${o}' class="film__img" src="https://image.tmdb.org/t/p/w500/${e}" alt="${n}" />\n        </div>\n        <div class="film__wrap">\n          <h2 class="film__title">${n}</h2>\n          <p class="film__genres">${l} | ${a}</p>\n        </div>\n      </li>`})).join("")}createModalFilmDetails({poster_path:e,title:t,fixedGenres:n,vote_count:i,fixedVote:r,fixedPopularity:o,overview:s},a){return`\n        <div class="film__modal">\n        \n      <button class="film-modal__close">X</button>\n    \n          <div class="film-modal__thumb">\n          <img\n            class="film-modal__img"\n            src="https://image.tmdb.org/t/p/w500/${e}"\n            alt="${t}"\n          />\n          </div>\n    \n          <div class="film-modal__text-wrap">\n          <h2 class="film-modal__title">${t}</h2>\n    \n          <ul class="film-modal__list-characteristic">\n            <li class="film-modal__item-characteristic">\n              <p class="film-modal__characteristic-text">\n                <span class="characteristic__name characteristic__name--vote"\n                  >Vote / Votes</span\n                ><span class="characteristic__value characteristic__value--vote">\n                <span class="characteristic__vote">${r}</span> / \n                <span class="characteristic__vote characteristic__vote--count">${i}</span>\n                </span>\n              </p>\n            </li>\n            <li class="film-modal__item-characteristic">\n              <p class="film-modal__characteristic-text">\n                <span class="characteristic__name characteristic__name--popularity"\n                  >Popularity</span\n                ><span class="characteristic__value">${o}</span>\n              </p>\n            </li>\n            <li class="film-modal__item-characteristic">\n              <p class="film-modal__characteristic-text">\n                <span class="characteristic__name characteristic__name--title"\n                  >Original Title</span\n                ><span class="characteristic__value">${t}</span>\n              </p>\n            </li>\n            <li class="film-modal__item-characteristic">\n              <p class="film-modal__characteristic-text">\n                <span class="characteristic__name characteristic__name--genre"\n                  >Genre</span\n                ><span class="characteristic__value">${n}</span>\n              </p>\n            </li>\n          </ul>\n    \n          <h3 class="film-modal__about-film-title">About</h3>\n          <p class="film-modal__about-film-text"> ${s}\n          </p>\n    \n          <button class="film-modal__trailer" data-id="${a} aria-lable="youtube"><span class="film-modal__sumbol">&#9658;</span></button>\n    \n          <div class="film-modal__wrap-btn flex">\n            <button class="film-modal__btn film-modal__btn--watched">\n              add to Watched\n            </button>\n            <button class="film-modal__btn film-modal__btn--queue">\n              add to queue\n            </button>\n          </div>\n         </div>\n        </div>\n    `}createModalFilmTrailer(e){return`\n    <iframe class='film-modal__iframe' src="https://www.youtube.com/embed/${e}" frameborder="0"></iframe>\n`}createModalWithoutFilmTrailer(){return"<div class=\"empty\"><p class='empty__text'>Sorry, but this film don't have trailer :(</p></div>\n    "}renderMarkup({selector:e,innerHtml:t=!1,innerHTMLMarkup:n="",insAdHtmltype:i="beforeend",createMarkypFunc:r}){const o=document.querySelector(e);t&&(o.innerHTML=n),o.insertAdjacentHTML(i,r)}constructor(){}};function mf(e){e?(gf({addMessage:!1}),wf()):gf({addMessage:!0})}function gf({addMessage:e}){if(!e){return setTimeout((()=>{df.searchError.classList.add("is-hidden")}),3e3)}return df.searchError.classList.remove("is-hidden")}const _f=new pf,yf=new uf({baseURL:"https://api.themoviedb.org/3/"});function vf(e){e.preventDefault();const t=e.currentTarget.elements.search_user.value.trim();yf.actualQuery=t,mf(t),yf.incrementPage({step:1})}async function wf(){const e=await yf.getSearchFilmsData({}),t=(await yf.getGenresList({})).data.genres;if(!e.data.results.length)return gf({addMessage:!0});const n=_f.createFilmCardsMarkup(e.data.results,t);_f.renderMarkup({selector:".films__list",innerHtml:!0,innerHTMLMarkup:"",insAdHtmltype:"beforeend",createMarkypFunc:n})}df.form.addEventListener("submit",vf);var bf,Cf,If={};bf=void 0!==e?e:"undefined"!=typeof window?window:If,Cf=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",r="Circle",o="Arrows",s="Dots",a="Pulse",l="Custom",c="Notiflix",h={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},u=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(u('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},f=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=f(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},p=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},m=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},g=function(c,m,g,y,v){if(!d("body"))return!1;t||_.Loading.init({});var w=f(!0,t,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var b={};"object"==typeof m?b=m:"object"==typeof g&&(b=g),t=f(!0,t,b)}var C,I,E="";if("string"==typeof m&&m.length>0&&(E=m),y){var T="";(E=E.length>t.messageMaxLength?p(E).toString().substring(0,t.messageMaxLength)+"...":p(E).toString()).length>0&&(T='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+E+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var k="";if(c===n)C=t.svgSize,I=t.svgColor,C||(C="60px"),I||(I="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+I+'" width="'+C+'" height="'+C+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===r)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===o)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)k=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)k=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)k='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return u('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;k=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var S=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),N=e.innerWidth,O=S>=N?N-40+"px":S+"px",x='<div style="width:'+O+"; height:"+O+';" class="'+t.className+"-icon"+(E.length>0?" nx-with-message":"")+'">'+k+"</div>",R=e.document.createElement("div");R.id=h.ID,R.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=t.zindex,R.style.background=t.backgroundColor,R.style.animationDuration=t.cssAnimationDuration+"ms",R.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",t.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=x+T,e.document.getElementById(R.id)||(e.document.body.appendChild(R),t.clickToClose&&e.document.getElementById(R.id).addEventListener("click",(function(){R.classList.add("nx-remove");var e=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(h.ID))var P=e.document.getElementById(h.ID),A=setTimeout((function(){P.classList.add("nx-remove");var e=setTimeout((function(){null!==P.parentNode&&(P.parentNode.removeChild(P),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(A)}),v);t=f(!0,t,w)},_={Loading:{init:function(n){t=f(!0,h,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(m,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return u("You have to initialize the Loading module before call Merge function."),!1;t=f(!0,t,e)},standard:function(e,t){g(n,e,t,!0,0)},hourglass:function(e,t){g(i,e,t,!0,0)},circle:function(e,t){g(r,e,t,!0,0)},arrows:function(e,t){g(o,e,t,!0,0)},dots:function(e,t){g(s,e,t,!0,0)},pulse:function(e,t){g(a,e,t,!0,0)},custom:function(e,t){g(l,e,t,!0,0)},notiflix:function(e,t){g(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),g(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(h.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?p(n).substring(0,t.messageMaxLength)+"...":p(n);var r=i.getElementsByTagName("p")[0];if(r)r.innerHTML=n;else{var o=e.document.createElement("p");o.id=t.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=t.messageColor,o.style.fontSize=t.messageFontSize,o.innerHTML=n,i.appendChild(o)}}else u("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?f(!0,e.Notiflix,{Loading:_.Loading}):{Loading:_.Loading}},"function"==typeof define&&define.amd?define([],(function(){return Cf(bf)})):"object"==typeof If?If=Cf(bf):bf.Notiflix=Cf(bf);var Ef=class{enabled({timeDelay:e=20,delayAfterStop:t=400}){If.Loading.arrows(this.label,this.options),this.percentageLoading(e,t)}disabled(e){If.Loading.change("Ready!"),clearInterval(this.intervalId),If.Loading.remove(e)}percentageLoading(e,t){let n=0;this.intervalId=setInterval((()=>{If.Loading.change(`${this.label} ${n+=1}%`),100===n&&(If.Loading.change("Ready!"),this.disabled(t))}),e)}constructor({label:e="Loading",options:t={backgroundColor:"rgba(0,0,0,0.8)",svgColor:"#FF6B08"}}){this.label=e,this.options=t,this.intervalId=null}};const Tf=new Ef({options:{backgroundColor:"#000000",svgColor:"#FF6B08"}});new Ef({});function kf(e,t){let n="",i="";e>=5&&(n+="<div class=\"numb numb--first-page\" data-numb-id='1'>1</div>"),4===e||5===e?n+=`<div class="numb dots" data-numb-id='${e-3}'>${e-3}</div>`:e>=6&&(n+='<div class="dots">...</div>'),e>=3&&(n+=`<div class="numb" data-numb-id='${e-2}'>${e-2}</div>`),e>=2&&(n+=`<div class="numb" data-numb-id='${e-1}'>${e-1}</div>`),e<=t-1&&(i+=`<div class="numb" data-numb-id='${e+1}'>${e+1}</div>`),e<=t-2&&(i+=`<div class="numb" data-numb-id='${e+2}'>${e+2}</div>`),e===t-3||e===t-4?i+=`<div class="numb dots" data-numb-id='${e+3}'>${e+3}</div>`:e<=t-5&&(i+='<div class="dots">...</div>'),e<=t-4&&(i+=`<div class="numb numb--last-page" data-numb-id='${t}'>${t}</div>`),df.beforeCurPageContainer.innerHTML=n,df.afterCurPageContainer.innerHTML=i}async function Sf(){const e=(await Jf.getGenresList({})).data.genres,t=await Jf.getAllFilmsData({}),n=Qf.createFilmCardsMarkup(t.data.results,e);Qf.renderMarkup({selector:".films__list",innerHtml:!0,createMarkypFunc:n}),kf(Jf.actualPage,Jf.totalPages)}var Nf={};function Of(e){const t=e.find((e=>"Trailer"===e.type));return void 0===t?e[0]:t}Nf=function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var l=void 0;if(!a&&l)return l(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[s]={exports:{}};t[s][0].call(h.exports,(function(e){return r(t[s][1][e]||e)}),h,h.exports,e,t,n,i)}return n[s].exports}for(var o=void 0,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var s=r(o,"IMG"),a=r(o,"VIDEO"),l=r(o,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return o(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1);const xf=new uf,Rf=new pf;async function Pf(e){const t=e.currentTarget.dataset.id,n=(await xf.getFilmTrailerById({id:t})).data.results;if(0===n.length){const s=Nf.create(Rf.createModalWithoutFilmTrailer());function i(e){"Escape"===e.code&&s.close()}return s.show(),void document.addEventListener("keydown",i,{once:!0})}const r=Of(n),o=Nf.create(Rf.createModalFilmTrailer(r.key));function i(e){"Escape"===e.code&&o.close()}o.show(),document.addEventListener("keydown",i,{once:!0})}function Af({poster_path:e,title:t,vote_average:n,vote_count:i,popularity:r,genres:o,overview:s}){const a=o[0].name,l=Number.isInteger(n)?String(n):n.toFixed(1),c=l.includes(".0")?l.replace(".0",""):l,h=Number.isInteger(r)?String(r):r.toFixed(1);return{poster_path:e,title:t,fixedGenres:a,vote_count:i,fixedVote:c,fixedPopularity:h.includes(".0")?h.replace(".0",""):h,overview:s}}const Lf=new uf,Df=new pf;function Mf(){const e="true"===df.themeBtnRef.getAttribute("data-current")||!1;df.themeBtnRef.setAttribute("data-current",!e),localStorage.setItem("light",JSON.stringify(e)),"false"===localStorage.getItem("light")?(document.body.classList.add("dark-theme"),df.lightIconRef.classList.remove("is-hidden"),df.darkIconRef.classList.add("is-hidden")):(document.body.classList.remove("dark-theme"),df.darkIconRef.classList.remove("is-hidden"),df.lightIconRef.classList.add("is-hidden"))}df.btnScrollTopRef.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),df.btnScrollDownRef.addEventListener("click",(()=>{!function(e){window.scroll({left:0,top:e.offsetTop,behavior:"smooth"})}(df.footerRef)})),window.addEventListener("scroll",(function(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e<t&&(df.btnScrollTopRef.classList.add("btn__up--hidden"),df.btnScrollDownRef.classList.remove("btn__up--hidden"));e>t&&(df.btnScrollTopRef.classList.remove("btn__up--hidden"),df.btnScrollDownRef.classList.add("btn__up--hidden"))})),df.btnScrollTopRef.classList.add("btn__up--hidden"),df.btnScrollDownRef.classList.add("btn__up--hidden"),df.themeBtnRef.addEventListener("click",Mf),"false"===localStorage.getItem("light")&&Mf();var Ff={};
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.11.0
*/function Uf(e){return Uf="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uf(e)}function Bf(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=qf(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function jf(e){return function(e){if(Array.isArray(e))return Hf(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||qf(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qf(e,t){if(e){if("string"==typeof e)return Hf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Hf(e,t):void 0}}function Hf(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function Wf(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function zf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(Ff,"__esModule",{value:!0}),Ff.default=void 0;var $f=function(){function e(t,n){var i=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),zf(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5}),zf(this,"transitionPrefix",void 0),zf(this,"isPassiveEventsSupported",void 0),zf(this,"transitionCapable",!1),zf(this,"isTouchDevice","ontouchstart"in window),zf(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),zf(this,"initialLocationHash",void 0),zf(this,"pushStateSupport","pushState"in history),zf(this,"isOpen",!1),zf(this,"isAnimating",!1),zf(this,"isClosing",!1),zf(this,"isFadeIn",!1),zf(this,"urlChangedOnce",!1),zf(this,"hashReseted",!1),zf(this,"historyHasChanges",!1),zf(this,"historyUpdateTimeout",null),zf(this,"currentImage",void 0),zf(this,"eventNamespace","simplelightbox"),zf(this,"domNodes",{}),zf(this,"loadedImages",[]),zf(this,"initialImageIndex",0),zf(this,"currentImageIndex",0),zf(this,"initialSelector",null),zf(this,"globalScrollbarWidth",0),zf(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,n),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof t?(this.initialSelector=t,this.elements=Array.from(document.querySelectorAll(t))):this.elements=void 0!==t.length&&t.length>0?Array.from(t):[t],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var r=[];this.elements=Array.from(this.elements).filter((function(e){var t=e.getAttribute(i.options.sourceAttr);return-1===r.indexOf(t)&&(r.push(t),!0)}))}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,(function(e){if(i.isValidLink(e.currentTarget)){if(e.preventDefault(),i.isAnimating)return!1;i.initialImageIndex=i.elements.indexOf(e.currentTarget),i.openImage(e.currentTarget)}})),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],(function(e){i.isOpen&&e.target===e.currentTarget&&i.close()})),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,(function(e){e.target.parentElement.classList.contains("sl-image")&&e.preventDefault()})),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle((function(e){if(i.controlCoordinates.swipeDiff=0,i.isAnimating&&"Escape"===e.key)return i.currentImage.setAttribute("src",""),i.isAnimating=!1,i.close();i.isOpen&&(e.preventDefault(),"Escape"===e.key&&i.close(),!i.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(e.key)>-1&&i.loadImage("ArrowRight"===e.key?1:-1))}),this.options.throttleInterval)),this.addEvents()}var t,n,i;return t=e,n=[{key:"checkPassiveEventsSupport",value:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}},{key:"generateQuerySelector",value:function(e){var t=e.tagName,n=e.id,i=e.className,r=e.parentNode;if("HTML"===t)return"HTML";var o=t;if(o+=""!==n?"#".concat(n):"",i)for(var s=i.split(/\s/),a=0;a<s.length;a++)o+=".".concat(s[a]);for(var l=1,c=e;c.previousElementSibling;c=c.previousElementSibling)l+=1;return o+=":nth-child(".concat(l,")"),"".concat(this.generateQuerySelector(r)," > ").concat(o)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var e,t=this.options.captionClass.split(/[\s,]+/);(e=this.domNodes.caption.classList).add.apply(e,jf(t))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(e,t){var n;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),t))}}},{key:"isValidLink",value:function(e){return!this.options.fileExt||e.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")$","i").test(e.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var e=(document.body||document.documentElement).style;return"transition"in e?"":"WebkitTransition"in e?"-webkit-":"MozTransition"in e?"-moz-":"OTransition"in e&&"-o"}},{key:"getScrollbarWidth",value:function(){var e,t=document.createElement("div");return t.classList.add("sl-scrollbar-measure"),document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e}},{key:"toggleScrollbar",value:function(e){var t=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===e){var i=window.innerWidth;if(!i){var r=document.documentElement.getBoundingClientRect();i=r.right-Math.abs(r.left)}if(document.body.clientWidth<i||this.isAppleDevice){var o=parseInt(document.body.style.paddingRight||0,10);t=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=o,(t>0||0==t&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=o+t+"px",n.forEach((function(e){var n=e.style.paddingRight,i=window.getComputedStyle(e)["padding-right"];e.dataset.originalPaddingRight=n,e.style.paddingRight="".concat(parseFloat(i)+t,"px")})))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight,n.forEach((function(e){var t=e.dataset.originalPaddingRight;void 0!==t&&(e.style.paddingRight=t)}));return t}},{key:"close",value:function(){var e=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var t=this.relatedElements[this.currentImageIndex];for(var n in t.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,(function(){e.options.disableScroll&&e.toggleScrollbar("show"),e.options.htmlClass&&""!==e.options.htmlClass&&document.querySelector("html").classList.remove(e.options.htmlClass),document.body.removeChild(e.domNodes.wrapper),document.body.removeChild(e.domNodes.overlay),e.domNodes.additionalHtml=null,t.dispatchEvent(new Event("closed.simplelightbox")),e.isClosing=!1})),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var e=this,t=this.currentImageIndex,n=this.relatedElements.length,i=t+1<0?n-1:t+1>=n-1?0:t+1,r=t-1<0?n-1:t-1>=n-1?0:t-1,o=new Image,s=new Image;o.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===e.loadedImages.indexOf(i)&&e.loadedImages.push(i),e.relatedElements[t].dispatchEvent(new Event("nextImageLoaded."+e.eventNamespace))})),o.setAttribute("src",this.relatedElements[i].getAttribute(this.options.sourceAttr)),s.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===e.loadedImages.indexOf(i)&&e.loadedImages.push(i),e.relatedElements[t].dispatchEvent(new Event("prevImageLoaded."+e.eventNamespace))})),s.setAttribute("src",this.relatedElements[r].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(e){var t=this,n=e;this.options.rtl&&(e=-e),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===e?"next":"prev")+"."+this.eventNamespace));var i=this.currentImageIndex+e;if(this.isAnimating||(i<0||i>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=i<0?this.relatedElements.length-1:i>this.relatedElements.length-1?0:i,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,(function(){t.isAnimating=!0,t.isClosing?t.isAnimating=!1:setTimeout((function(){var e=t.relatedElements[t.currentImageIndex];t.currentImage.setAttribute("src",e.getAttribute(t.options.sourceAttr)),-1===t.loadedImages.indexOf(e.getAttribute(t.options.sourceAttr))&&t.show(t.domNodes.spinner),t.domNodes.image.contains(t.domNodes.caption)&&t.domNodes.image.removeChild(t.domNodes.caption),t.adjustImage(n),t.options.preloading&&t.preload()}),100)}))}},{key:"adjustImage",value:function(e){var t=this;if(!this.currentImage)return!1;var n=new Image,i=window.innerWidth*this.options.widthRatio,r=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",(function(n){t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("error."+t.eventNamespace)),t.isAnimating=!1,t.isOpen=!0,t.domNodes.spinner.style.display="none";var i=1===e||-1===e;if(t.initialImageIndex===t.currentImageIndex&&i)return t.close();t.options.alertError&&alert(t.options.alertErrorMessage),t.loadImage(i?e:1)})),n.addEventListener("load",(function(n){void 0!==e&&(t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("changed."+t.eventNamespace)),t.relatedElements[t.currentImageIndex].dispatchEvent(new Event((1===e?"nextDone":"prevDone")+"."+t.eventNamespace))),t.options.history&&t.updateURL(),-1===t.loadedImages.indexOf(t.currentImage.getAttribute("src"))&&t.loadedImages.push(t.currentImage.getAttribute("src"));var o,s,a=n.target.width,l=n.target.height;if(t.options.scaleImageToRatio||a>i||l>r){var c=a/l>i/r?a/i:l/r;a/=c,l/=c}t.domNodes.image.style.top=(window.innerHeight-l)/2+"px",t.domNodes.image.style.left=(window.innerWidth-a-t.globalScrollbarWidth)/2+"px",t.domNodes.image.style.width=a+"px",t.domNodes.image.style.height=l+"px",t.domNodes.spinner.style.display="none",t.options.focus&&t.forceFocus(),t.fadeIn(t.currentImage,t.options.fadeSpeed,(function(){t.options.focus&&t.domNodes.wrapper.focus()})),t.isOpen=!0,"string"==typeof t.options.captionSelector?o="self"===t.options.captionSelector?t.relatedElements[t.currentImageIndex]:document.querySelector(t.generateQuerySelector(t.relatedElements[t.currentImageIndex])+" "+t.options.captionSelector):"function"==typeof t.options.captionSelector&&(o=t.options.captionSelector(t.relatedElements[t.currentImageIndex])),t.options.captions&&o&&(s="data"===t.options.captionType?o.dataset[t.options.captionsData]:"text"===t.options.captionType?o.innerHTML:o.getAttribute(t.options.captionsData)),t.options.loop?1===t.relatedElements.length?t.hide(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):t.show(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===t.currentImageIndex&&t.hide(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex>=t.relatedElements.length-1&&t.hide(t.domNodes.navigation.querySelector(".sl-next")),t.currentImageIndex>0&&t.show(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex<t.relatedElements.length-1&&t.show(t.domNodes.navigation.querySelector(".sl-next"))),1===e||-1===e?(t.options.animationSlide&&(t.slide(0,100*e+"px"),setTimeout((function(){t.slide(t.options.animationSpeed/1e3,"0px")}),50)),t.fadeIn(t.domNodes.image,t.options.fadeSpeed,(function(){t.isAnimating=!1,t.setCaption(s,a)}))):(t.isAnimating=!1,t.setCaption(s,a)),t.options.additionalHtml&&!t.domNodes.additionalHtml&&(t.domNodes.additionalHtml=document.createElement("div"),t.domNodes.additionalHtml.classList.add("sl-additional-html"),t.domNodes.additionalHtml.innerHTML=t.options.additionalHtml,t.domNodes.image.appendChild(t.domNodes.additionalHtml))}))}},{key:"zoomPanElement",value:function(e,t,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+e+","+t+") scale("+n+")"}},{key:"minMax",value:function(e,t,n){return e<t?t:e>n?n:e}},{key:"setZoomData",value:function(e,t,n){this.currentImage.dataset.scale=e,this.currentImage.dataset.translateX=t,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var e=this;if(this.addEventListener(window,"resize."+this.eventNamespace,(function(t){e.isOpen&&e.adjustImage()})),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout((function(){e.addEventListener(window,"hashchange."+e.eventNamespace,(function(t){e.isOpen&&e.hashchangeHandler()}))}),40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,(function(t){if(!t.currentTarget.tagName.match(/button/i))return!0;t.preventDefault(),e.controlCoordinates.swipeDiff=0,e.loadImage(t.currentTarget.classList.contains("sl-next")?1:-1)})),this.options.scrollZoom){var t=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],(function(n){if(e.controlCoordinates.mousedown||e.isAnimating||e.isClosing||!e.isOpen)return!0;0==e.controlCoordinates.containerHeight&&(e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)),n.preventDefault();var i=n.delta||n.wheelDelta;void 0===i&&(i=n.detail),i=Math.max(-1,Math.min(1,i)),t+=i*e.options.scrollZoomFactor*t,t=Math.max(1,Math.min(e.options.maxZoom,t)),e.controlCoordinates.targetScale=t;var r=document.documentElement.scrollTop||document.body.scrollTop;e.controlCoordinates.pinchOffsetX=n.pageX,e.controlCoordinates.pinchOffsetY=n.pageY-r||0,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1?(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)):(1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.setZoomData(e.controlCoordinates.targetScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}))}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],(function(t){if("A"===t.target.tagName&&"touchstart"===t.type)return!0;if("mousedown"===t.type)t.preventDefault(),e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.capture=!0;else{if(e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,1===e.controlCoordinates.touchCount){if(e.controlCoordinates.doubleTapped)return e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&e.currentImage.classList.remove("sl-transition")}),200),!1;e.controlCoordinates.doubleTapped=!0,setTimeout((function(){e.controlCoordinates.doubleTapped=!1}),300),e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)}else 2===e.controlCoordinates.touchCount&&(e.controlCoordinates.initialPointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.initialPointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.pinchOffsetX=(e.controlCoordinates.initialPointerOffsetX+e.controlCoordinates.initialPointerOffsetX2)/2,e.controlCoordinates.pinchOffsetY=(e.controlCoordinates.initialPointerOffsetY+e.controlCoordinates.initialPointerOffsetY2)/2,e.controlCoordinates.initialPinchDistance=Math.sqrt((e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)*(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)+(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)*(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)));e.controlCoordinates.capture=!0}return!!e.controlCoordinates.mousedown||(e.transitionCapable&&(e.controlCoordinates.imageLeft=parseInt(e.domNodes.image.style.left,10)),e.controlCoordinates.mousedown=!0,e.controlCoordinates.swipeDiff=0,e.controlCoordinates.swipeYDiff=0,e.controlCoordinates.swipeStart=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYStart=t.pageY||t.touches[0].pageY,!1)})),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],(function(t){if(!e.controlCoordinates.mousedown)return!0;if("touchmove"===t.type){if(!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.touches[0].clientX,e.controlCoordinates.pointerOffsetY=t.touches[0].clientY,e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.touchmoveCount++,e.controlCoordinates.touchCount>1?(e.controlCoordinates.pointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.pointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.targetPinchDistance=Math.sqrt((e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)*(e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)+(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)*(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)),null===e.controlCoordinates.initialPinchDistance&&(e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance),Math.abs(e.controlCoordinates.initialPinchDistance-e.controlCoordinates.targetPinchDistance)>=1&&(e.controlCoordinates.targetScale=e.minMax(e.controlCoordinates.targetPinchDistance/e.controlCoordinates.initialPinchDistance*e.controlCoordinates.initialScale,1,e.options.maxZoom),e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1&&(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY)):(e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale))}if("mousemove"===t.type&&e.controlCoordinates.mousedown){if("touchmove"==t.type)return!0;if(t.preventDefault(),!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.clientX,e.controlCoordinates.pointerOffsetY=t.clientY,e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}e.controlCoordinates.zoomed||(e.controlCoordinates.swipeEnd=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYEnd=t.pageY||t.touches[0].pageY,e.controlCoordinates.swipeDiff=e.controlCoordinates.swipeStart-e.controlCoordinates.swipeEnd,e.controlCoordinates.swipeYDiff=e.controlCoordinates.swipeYStart-e.controlCoordinates.swipeYEnd,e.options.animationSlide&&e.slide(0,-e.controlCoordinates.swipeDiff+"px"))})),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],(function(t){if(e.isTouchDevice&&"touchend"===t.type&&(e.controlCoordinates.touchCount=t.touches.length,0===e.controlCoordinates.touchCount?(e.currentImage&&e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1):1===e.controlCoordinates.touchCount?(e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY):e.controlCoordinates.touchCount>1&&(e.controlCoordinates.initialPinchDistance=null)),e.controlCoordinates.mousedown){e.controlCoordinates.mousedown=!1;var n=!0;e.options.loop||(0===e.currentImageIndex&&e.controlCoordinates.swipeDiff<0&&(n=!1),e.currentImageIndex>=e.relatedElements.length-1&&e.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(e.controlCoordinates.swipeDiff)>e.options.swipeTolerance&&n?e.loadImage(e.controlCoordinates.swipeDiff>0?1:-1):e.options.animationSlide&&e.slide(e.options.animationSpeed/1e3,"0px"),e.options.swipeClose&&Math.abs(e.controlCoordinates.swipeYDiff)>50&&Math.abs(e.controlCoordinates.swipeDiff)<e.options.swipeTolerance&&e.close()}})),this.addEventListener(this.domNodes.image,["dblclick"],(function(t){if(!e.isTouchDevice)return e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&(e.currentImage.classList.remove("sl-transition"),e.currentImage.style[e.transitionPrefix+"transform-origin"]=null)}),200),e.controlCoordinates.capture=!0,!1}))}},{key:"getDimensions",value:function(e){var t=window.getComputedStyle(e),n=e.offsetHeight,i=e.offsetWidth,r=parseFloat(t.borderTopWidth);return{height:n-parseFloat(t.borderBottomWidth)-r-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),width:i-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)}}},{key:"updateHash",value:function(){var e="pid="+(this.currentImageIndex+1),t=window.location.href.split("#")[0]+"#"+e;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,t):this.historyHasChanges?window.location.replace(t):window.location.hash=e,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(e,t){var n=this;this.options.captions&&e&&""!==e&&void 0!==e&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=t+"px",this.domNodes.caption.innerHTML=e,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout((function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)}),this.options.captionDelay))}},{key:"slide",value:function(e,t){if(!this.transitionCapable)return this.domNodes.image.style.left=t;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+t+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+e+"s linear"}},{key:"getRelated",value:function(e){return e&&!1!==e&&"nofollow"!==e?Array.from(this.elements).filter((function(t){return t.getAttribute("rel")===e})):this.elements}},{key:"openImage",value:function(e){var t=this;e.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(e.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(e);var n=e.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout((function(){e.dispatchEvent(new Event("shown."+t.eventNamespace))}),this.options.animationSpeed)}},{key:"forceFocus",value:function(){var e=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,(function(t){document===t.target||e.domNodes.wrapper===t.target||e.domNodes.wrapper.contains(t.target)||e.domNodes.wrapper.focus()}))}},{key:"addEventListener",value:function(e,t,n,i){e=this.wrap(e),t=this.wrap(t);var r,o=Bf(e);try{for(o.s();!(r=o.n()).done;){var s=r.value;s.namespaces||(s.namespaces={});var a,l=Bf(t);try{for(l.s();!(a=l.n()).done;){var c=a.value,h=i||!1;["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(c.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===Uf(h)?h.passive=!0:h={passive:!0}),s.namespaces[c]=n,s.addEventListener(c.split(".")[0],n,h)}}catch(e){l.e(e)}finally{l.f()}}}catch(e){o.e(e)}finally{o.f()}}},{key:"removeEventListener",value:function(e,t){e=this.wrap(e),t=this.wrap(t);var n,i=Bf(e);try{for(i.s();!(n=i.n()).done;){var r,o=n.value,s=Bf(t);try{for(s.s();!(r=s.n()).done;){var a=r.value;o.namespaces&&o.namespaces[a]&&(o.removeEventListener(a.split(".")[0],o.namespaces[a]),delete o.namespaces[a])}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}}},{key:"fadeOut",value:function(e,t,n){var i,r=this,o=Bf(e=this.wrap(e));try{for(o.s();!(i=o.n()).done;){var s=i.value;s.style.opacity=parseFloat(s)||window.getComputedStyle(s).getPropertyValue("opacity")}}catch(e){o.e(e)}finally{o.f()}this.isFadeIn=!1;var a=16.66666/(t||this.options.fadeSpeed);!function t(){var i=parseFloat(e[0].style.opacity);if((i-=a)<0){var o,s=Bf(e);try{for(s.s();!(o=s.n()).done;){var l=o.value;l.style.display="none",l.style.opacity=1}}catch(e){s.e(e)}finally{s.f()}n&&n.call(r,e)}else{var c,h=Bf(e);try{for(h.s();!(c=h.n()).done;)c.value.style.opacity=i}catch(e){h.e(e)}finally{h.f()}requestAnimationFrame(t)}}()}},{key:"fadeIn",value:function(e,t,n,i){var r,o=this,s=Bf(e=this.wrap(e));try{for(s.s();!(r=s.n()).done;){var a=r.value;a.style.opacity=0,a.style.display=i||"block"}}catch(e){s.e(e)}finally{s.f()}this.isFadeIn=!0;var l=parseFloat(e[0].dataset.opacityTarget||1),c=16.66666*l/(t||this.options.fadeSpeed);!function t(){var i=parseFloat(e[0].style.opacity);if((i+=c)>l){var r,s=Bf(e);try{for(s.s();!(r=s.n()).done;)r.value.style.opacity=l}catch(e){s.e(e)}finally{s.f()}n&&n.call(o,e)}else{var a,h=Bf(e);try{for(h.s();!(a=h.n()).done;)a.value.style.opacity=i}catch(e){h.e(e)}finally{h.f()}if(!o.isFadeIn)return;requestAnimationFrame(t)}}()}},{key:"hide",value:function(e){var t,n=Bf(e=this.wrap(e));try{for(n.s();!(t=n.n()).done;){var i=t.value;"none"!=i.style.display&&(i.dataset.initialDisplay=i.style.display),i.style.display="none"}}catch(e){n.e(e)}finally{n.f()}}},{key:"show",value:function(e,t){var n,i=Bf(e=this.wrap(e));try{for(i.s();!(n=i.n()).done;){var r=n.value;r.style.display=r.dataset.initialDisplay||t||"block"}}catch(e){i.e(e)}finally{i.f()}}},{key:"wrap",value:function(e){return"function"==typeof e[Symbol.iterator]&&"string"!=typeof e?e:[e]}},{key:"on",value:function(e,t){e=this.wrap(e);var n,i=Bf(this.elements);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.fullyNamespacedEvents||(r.fullyNamespacedEvents={});var o,s=Bf(e);try{for(s.s();!(o=s.n()).done;){var a=o.value;r.fullyNamespacedEvents[a]=t,r.addEventListener(a,t)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}return this}},{key:"off",value:function(e){e=this.wrap(e);var t,n=Bf(this.elements);try{for(n.s();!(t=n.n()).done;){var i,r=t.value,o=Bf(e);try{for(o.s();!(i=o.n()).done;){var s=i.value;void 0!==r.fullyNamespacedEvents&&s in r.fullyNamespacedEvents&&r.removeEventListener(s,r.fullyNamespacedEvents[s])}}catch(e){o.e(e)}finally{o.f()}}}catch(e){n.e(e)}finally{n.f()}return this}},{key:"open",value:function(e){e=e||this.elements[0],"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get(0)),this.initialImageIndex=this.elements.indexOf(e),this.initialImageIndex>-1&&this.openImage(e)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var e=this.options,t=this.initialSelector;return this.destroy(),this.constructor(t,e),this}}],n&&Wf(t.prototype,n),i&&Wf(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),Yf=$f;Ff.default=Yf,e.SimpleLightbox=$f;new(t(Ff))(".team-modal__list a",{sourceAttr:"href",uniqueImages:!0,captionsData:"alt",rel:"nofollow",loop:!0,captionDelay:300,animationSpeed:300,animationSlide:!0}),new(t(Ff))(".social__items a",{sourceAttr:"href",uniqueImages:!0,captionsData:"alt",loop:!0,rel:!0,captionDelay:300,animationSpeed:300,animationSlide:!0});function Vf(){df.teamModal.classList.toggle("is-hidden"),df.body.classList.toggle("no-scroll")}function Xf(){Vf(),df.teamModal.addEventListener("click",Kf),df.body.addEventListener("keydown",Gf)}function Kf(e){e.target.classList.contains("backdrop")&&(Vf(),df.body.removeEventListener("keydown",Gf),df.teamModal.removeEventListener("click",Kf))}function Gf(e){df.teamModal.classList.contains("is-hidden")||"Escape"===e.code&&(Vf(),df.body.removeEventListener("keydown",Gf),df.teamModal.removeEventListener("click",Kf))}df.btnOpenRef.addEventListener("click",Xf),df.btnCloseRef.addEventListener("click",Xf),df.btnOpenUserRef.addEventListener("click",Xf),df.btnCloseUserRef.addEventListener("click",Xf),df.headerUserLink.addEventListener("click",(function(){df.form.removeEventListener("submit",vf)}));const Jf=new uf,Qf=new pf;Tf.enabled({timeDelay:20}),function({delayAfterStop:e=400}){document.addEventListener("DOMContentLoaded",(()=>{console.log("ready"),Tf.disabled(e)}))}({delayAfterStop:400}),Sf(),df.filmList.addEventListener("click",(async function e(t){if(!t.target.classList.contains("film__img"))return;document.body.style.overflow="hidden",t.currentTarget.removeEventListener("click",e);const n=t.target.dataset.id,i=Af((await Lf.getCurrentFilm({id:n})).data),r=Nf.create(Df.createModalFilmDetails(i,n),{onShow:e=>{e.element().querySelector(".film-modal__close").onclick=e.close},onClose:n=>{document.body.style.overflow="visible",t.target.closest(".films__list").addEventListener("click",e)}});r.show(),document.addEventListener("keydown",(function(e){if("Escape"!==e.code)return;r.close()}),{once:!0}),document.querySelector(".film-modal__trailer").addEventListener("click",Pf)})),df.pagRef.addEventListener("click",(function(e){const t=df.currentPage,n=df.nextPage,i=df.prevPage;if(e.target.dataset.numbId&&(Jf.actualPage=Number(e.target.dataset.numbId)),"prev"===e.target.dataset.id){if(1===Jf.actualPage)return;Jf.actualPage-=1}if("next"===e.target.dataset.id){if(Jf.actualPage===Jf.totalPages)return;Jf.actualPage+=1}Jf.actualPage===Jf.totalPages?n.classList.add("disabled"):n.classList.contains("disabled")&&n.classList.remove("disabled"),1===Jf.actualPage?i.classList.add("disabled"):i.classList.remove("disabled"),Sf(),t.innerHTML=Jf.actualPage}));
//# sourceMappingURL=index.ba81bb62.js.map
