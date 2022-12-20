var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={},o=e.parcelRequired76b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequired76b=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}}));var r,s,a,l=r={};function c(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function h(e){if(s===setTimeout)return setTimeout(e,0);if((s===c||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:c}catch(e){s=c}try{a="function"==typeof clearTimeout?clearTimeout:u}catch(e){a=u}}();var d,f=[],p=!1,m=-1;function g(){p&&d&&(p=!1,d.length?f=d.concat(f):m=-1,f.length&&y())}function y(){if(!p){var e=h(g);p=!0;for(var t=f.length;t;){for(d=f,f=[];++m<t;)d&&d[m].run();m=-1,t=f.length}d=null,p=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===u||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function v(){}l.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new _(e,t)),1!==f.length||p||h(y)},_.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=v,l.addListener=v,l.once=v,l.off=v,l.removeListener=v,l.removeAllListeners=v,l.emit=v,l.prependListener=v,l.prependOnceListener=v,l.listeners=function(e){return[]},l.binding=function(e){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw new Error("process.chdir is not supported")},l.umask=function(){return 0};
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
const w=!1,b=!1,C="${JSCORE_VERSION}",I=function(e,t){if(!e)throw E(t)},E=function(e){return new Error("Firebase Database ("+C+") INTERNAL ASSERT FAILED: "+e)},k=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++i)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const o=e[t],r=t+1<e.length,s=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=o>>2,u=(3&o)<<4|s>>4;let h=(15&s)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(k(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const r=e[n++];t[i++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==r||null==s||null==a)throw Error();const l=o<<2|r>>4;if(i.push(l),64!==s){const e=r<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},x=function(e){const t=k(e);return T.encodeByteArray(t,!0)},S=function(e){return x(e).replace(/\./g,"")},N=function(e){try{return T.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function O(e){return R(void 0,e)}function R(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=R(e[n],t[n]));return e}
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
const B=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,j=()=>{try{return B()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&N(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},q=e=>{var t,n;return null===(n=null===(t=j())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},W=e=>{const t=q(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},z=e=>{var t;return null===(t=j())||void 0===t?void 0:t[`_${e}`]};
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
class H{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function $(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[S(JSON.stringify({alg:"none",type:"JWT"})),S(JSON.stringify(r)),""].join(".")}
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
 */class Y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],r=o?function(e,t){return e.replace(X,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${r} (${i}).`;return new Y(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const X=/\{\$([^}]+)}/g;
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
 */const J=function(e){let t={},n={},i={},o="";try{const r=e.split(".");t=K(N(r[0])||""),n=K(N(r[1])||""),o=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:o}},Q=function(e){const t=J(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Z=function(e){const t=J(e).claims;return"object"==typeof t&&!0===t.admin};
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
function ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function te(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ne(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ie(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function oe(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const n=e[o],r=t[o];if(re(n)&&re(r)){if(!oe(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function re(e){return null!==e&&"object"==typeof e}
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
 */class ce{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,o,r=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^s&(a^l),o=1518500249):(i=s^a^l,o=1859775393):e<60?(i=s&a|l&(s|a),o=2400959708):(i=s^a^l,o=3395469782);const t=(r<<5|r>>>27)+i+c+o+n[e]&4294967295;c=l,l=a,a=4294967295&(s<<30|s>>>2),s=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const o=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(o[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}else for(;i<t;)if(o[r]=e[i],++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function ue(e,t){const n=new he(e,t);return n.subscribe.bind(n)}class he{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=de),void 0===i.error&&(i.error=de),void 0===i.complete&&(i.complete=de);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function de(){}
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
const pe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const t=o-55296;i++,I(i<e.length,"Surrogate pair missing trail surrogate.");o=65536+(t<<10)+(e.charCodeAt(i)-56320)}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},me=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function ge(e){return e&&e._delegate?e._delegate:e}class ye{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
 */const _e="[DEFAULT]";
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
 */class ve{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new H;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:_e})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=_e){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=_e){return this.instances.has(e)}getOptions(e=_e){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const r=this.instances.get(i);return r&&e(r,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===_e?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=_e){return this.component?this.component.multipleInstances?e:_e:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class we{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ve(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const be=[];var Ce,Ie;(Ie=Ce||(Ce={}))[Ie.DEBUG=0]="DEBUG",Ie[Ie.VERBOSE=1]="VERBOSE",Ie[Ie.INFO=2]="INFO",Ie[Ie.WARN=3]="WARN",Ie[Ie.ERROR=4]="ERROR",Ie[Ie.SILENT=5]="SILENT";const Ee={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},ke=Ce.INFO,Te={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},xe=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),o=Te[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${i}]  ${e.name}:`,...n)};class Se{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ee[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ke,this._logHandler=xe,this._userLogHandler=null,be.push(this)}}let Ne,Oe;const Re=new WeakMap,Pe=new WeakMap,Ae=new WeakMap,Le=new WeakMap,De=new WeakMap;let Me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Pe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ae.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Oe||(Oe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(je(this),t),Be(Re.get(this))}:function(...t){return Be(e.apply(je(this),t))}:function(t,...n){const i=e.call(je(this),t,...n);return Ae.set(i,t.sort?t.sort():[t]),Be(i)}}function Ue(e){return"function"==typeof e?Fe(e):(e instanceof IDBTransaction&&function(e){if(Pe.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));Pe.set(e,t)}(e),t=e,(Ne||(Ne=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Me):e);var t}function Be(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(Be(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Re.set(t,e)})).catch((()=>{})),De.set(t,e),t}(e);if(Le.has(e))return Le.get(e);const t=Ue(e);return t!==e&&(Le.set(e,t),De.set(t,e)),t}const je=e=>De.get(e);function qe(e,t,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const s=indexedDB.open(e,t),a=Be(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(Be(s.result),e.oldVersion,e.newVersion,Be(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((e=>{r&&e.addEventListener("close",(()=>r())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const We=["get","getKey","getAll","getAllKeys","count"],ze=["put","add","delete","clear"],He=new Map;function $e(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(He.get(t))return He.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=ze.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!We.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let s=r.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&r.done]))[0]};return He.set(t,r),r}Me=(e=>({...e,get:(t,n,i)=>$e(t,n)||e.get(t,n,i),has:(t,n)=>!!$e(t,n)||e.has(t,n)}))(Me);
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
class Ye{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ve="@firebase/app",Xe="0.9.0",Ke=new Se("@firebase/app"),Ge="[DEFAULT]",Je={[Ve]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Qe=new Map,Ze=new Map;function et(e,t){try{e.container.addComponent(t)}catch(n){Ke.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tt(e){const t=e.name;if(Ze.has(t))return Ke.debug(`There were multiple attempts to register component ${t}.`),!1;Ze.set(t,e);for(const t of Qe.values())et(t,e);return!0}function nt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
class ot{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ye("app",(()=>this),"PUBLIC"))}}
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
 */const rt="9.15.0";function st(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Ge,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw it.create("bad-app-name",{appName:String(o)});var r;if(n||(n=null===(r=j())||void 0===r?void 0:r.config),!n)throw it.create("no-options");const s=Qe.get(o);if(s){if(oe(n,s.options)&&oe(i,s.config))return s;throw it.create("duplicate-app",{appName:o})}const a=new we(o);for(const e of Ze.values())a.addComponent(e);const l=new ot(n,i,a);return Qe.set(o,l),l}function at(e=Ge){const t=Qe.get(e);if(!t&&e===Ge)return st();if(!t)throw it.create("no-app",{appName:e});return t}function lt(e,t,n){var i;let o=null!==(i=Je[e])&&void 0!==i?i:e;n&&(o+=`-${n}`);const r=o.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const e=[`Unable to register library "${o}" with version "${t}":`];return r&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),r&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ke.warn(e.join(" "))}tt(new ye(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
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
const ct="firebase-heartbeat-store";let ut=null;function ht(){return ut||(ut=qe("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(ct)}}).catch((e=>{throw it.create("idb-open",{originalErrorMessage:e.message})}))),ut}async function dt(e,t){try{const n=(await ht()).transaction(ct,"readwrite"),i=n.objectStore(ct);return await i.put(t,ft(e)),n.done}catch(e){if(e instanceof Y)Ke.warn(e.message);else{const t=it.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}function ft(e){return`${e.name}!${e.options.appId}`}
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
 */class pt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=mt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=mt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),yt(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),yt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=S(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new gt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function mt(){return(new Date).toISOString().substring(0,10)}class gt{async runIndexedDBEnvironmentCheck(){return!!U()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await ht()).transaction(ct).objectStore(ct).get(ft(e))}catch(e){if(e instanceof Y)Ke.warn(e.message);else{const t=it.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return dt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return dt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function yt(e){return S(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var _t;_t="",tt(new ye("platform-logger",(e=>new Ye(e)),"PRIVATE")),tt(new ye("heartbeat",(e=>new pt(e)),"PRIVATE")),lt(Ve,Xe,_t),lt(Ve,Xe,"esm2017"),lt("fire-js","");
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
lt("firebase","9.15.0","app");const vt=st({apiKey:"AIzaSyD7a39CtgzeuIx1kkpFRZ7MvO1bdmoGCT4",authDomain:"filmoteka-c3a99.firebaseapp.com",databaseURL:"https://filmoteka-c3a99-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-c3a99",storageBucket:"filmoteka-c3a99.appspot.com",messagingSenderId:"412361816258",appId:"1:412361816258:web:1c806438765e9ded7b235b",measurementId:"G-SJPWP9Q9CH"});function wt(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}Object.create;Object.create;function bt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ct=bt,It=new V("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Et=new Se("@firebase/auth");function kt(e,...t){Et.logLevel<=Ce.ERROR&&Et.error(`Auth (${rt}): ${e}`,...t)}
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
 */function Tt(e,...t){throw Ot(e,...t)}function xt(e,...t){return Ot(e,...t)}function St(e,t,n){const i=Object.assign(Object.assign({},Ct()),{[t]:n});return new V("auth","Firebase",i).create(t,{appName:e.name})}function Nt(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Tt(e,"argument-error"),St(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ot(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return It.create(e,...t)}function Rt(e,t,...n){if(!e)throw Ot(t,...n)}function Pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw kt(t),new Error(t)}function At(e,t){e||Pt(t)}
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
 */const Lt=new Map;function Dt(e){At(e instanceof Function,"Expected a class definition");let t=Lt.get(e);return t?(At(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lt.set(e,t),t)}
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
function Mt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ft(){return"http:"===Ut()||"https:"===Ut()}function Ut(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Bt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ft()||L()||"connection"in navigator))||navigator.onLine}
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
class jt{get(){return Bt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=A()||D()}}
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
 */function qt(e,t){At(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Wt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const zt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ht=new jt(3e4,6e4);
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
 */function $t(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Yt(e,t,n,i,o={}){return Vt(e,o,(async()=>{let o={},r={};i&&("GET"===t?r=i:o={body:JSON.stringify(i)});const s=se(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Wt.fetch()(Kt(e,e.config.apiHost,n,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},o))}))}async function Vt(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},zt),t);try{const t=new Gt(e),o=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw Jt(e,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const t=o.ok?r.errorMessage:r.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Jt(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Jt(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw Jt(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw St(e,a,s);Tt(e,a)}}catch(t){if(t instanceof Y)throw t;Tt(e,"network-request-failed")}}async function Xt(e,t,n,i,o={}){const r=await Yt(e,t,n,i,o);return"mfaPendingCredential"in r&&Tt(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Kt(e,t,n,i){const o=`${t}${n}?${i}`;return e.config.emulator?qt(e.config,o):`${e.config.apiScheme}://${o}`}class Gt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(xt(this.auth,"network-request-failed"))),Ht.get())}))}}function Jt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=xt(e,t,i);return o.customData._tokenResponse=n,o}
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
function Qt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Zt(e){return 1e3*Number(e)}function en(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return kt("JWT malformed, contained fewer than 3 sections"),null;try{const e=N(n);return e?JSON.parse(e):(kt("Failed to decode base64 JWT payload"),null)}catch(e){return kt("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function tn(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Y&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class nn{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class on{_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function rn(e){var t;const n=e.auth,i=await e.getIdToken(),o=await tn(e,async function(e,t){return Yt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Rt(null==o?void 0:o.users.length,n,"internal-error");const r=o.users[0];e._notifyReloadListener(r);const s=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=wt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new on(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class sn{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Rt(e.idToken,"internal-error"),Rt(void 0!==e.idToken,"internal-error"),Rt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=en(e);return Rt(t,"internal-error"),Rt(void 0!==t.exp,"internal-error"),Rt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Rt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:o}=await
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
async function(e,t){const n=await Vt(e,{},(async()=>{const n=se({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,r=Kt(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Wt.fetch()(r,{method:"POST",headers:s,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:o}=t,r=new sn;return n&&(Rt("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(Rt("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),o&&(Rt("number"==typeof o,"internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return Pt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function an(e,t){Rt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ln{async getIdToken(e){const t=await tn(this,this.stsTokenManager.getToken(this.auth,e));return Rt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ge(e),i=await n.getIdToken(t),o=en(i);Rt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const r="object"==typeof o.firebase?o.firebase:void 0,s=null==r?void 0:r.sign_in_provider;return{claims:o,token:i,authTime:Qt(Zt(o.auth_time)),issuedAtTime:Qt(Zt(o.iat)),expirationTime:Qt(Zt(o.exp)),signInProvider:s||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ge(e);await rn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Rt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Rt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await rn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tn(this,async function(e,t){return Yt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,o,r,s,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:C}=t;Rt(_&&C,e,"internal-error");const I=sn.fromJSON(this.name,C);Rt("string"==typeof _,e,"internal-error"),an(u,e.name),an(h,e.name),Rt("boolean"==typeof v,e,"internal-error"),Rt("boolean"==typeof w,e,"internal-error"),an(d,e.name),an(f,e.name),an(p,e.name),an(m,e.name),an(g,e.name),an(y,e.name);const E=new ln({uid:_,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new sn;i.updateFromServerResponse(t);const o=new ln({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await rn(o),o}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,o=wt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new on(o.createdAt||void 0,o.lastLoginAt||void 0)}}
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
 */class cn{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}cn.type="NONE";const un=cn;
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
 */function hn(e,t,n){return`firebase:${e}:${t}:${n}`}class dn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new dn(Dt(un),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=i[0]||Dt(un);const r=hn(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(r);if(t){const i=ln._fromJSON(e,t);n!==o&&(s=i),o=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(r,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(r)}catch(e){}}))),new dn(o,e,n)):new dn(o,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=hn(this.userKey,i.apiKey,o),this.fullPersistenceKey=hn("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function fn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vn(t))return"Blackberry";if(wn(t))return"Webos";if(mn(t))return"Safari";if((t.includes("chrome/")||gn(t))&&!t.includes("edge/"))return"Chrome";if(_n(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function pn(e=P()){return/firefox\//i.test(e)}function mn(e=P()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gn(e=P()){return/crios\//i.test(e)}function yn(e=P()){return/iemobile/i.test(e)}function _n(e=P()){return/android/i.test(e)}function vn(e=P()){return/blackberry/i.test(e)}function wn(e=P()){return/webos/i.test(e)}function bn(e=P()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Cn(){return M()&&10===document.documentMode}function In(e=P()){return bn(e)||_n(e)||wn(e)||vn(e)||/windows phone/i.test(e)||yn(e)}
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
function En(e,t=[]){let n;switch(e){case"Browser":n=fn(P());break;case"Worker":n=`${fn(P())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${rt}/${i}`}
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
 */class kn{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Tn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null==s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Rt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rn(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ge(e):null;return t&&Rt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Rt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Dt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new V("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;Rt(t,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const o="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return Rt(r,this,"internal-error"),r.then((()=>o(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Rt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=En(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sn(this),this.idTokenSubscription=new Sn(this),this.beforeStateQueue=new kn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=It,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function xn(e){return ge(e)}class Sn{get next(){return Rt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=ue((e=>this.observer=e))}}function Nn(e,t,n){const i=xn(e);Rt(i._canInitEmulator,i,"emulator-config-failed"),Rt(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!!(null==n?void 0:n.disableWarnings),r=On(t),{host:s,port:a}=function(e){const t=On(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const e=o[1];return{host:e,port:Rn(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Rn(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function On(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Rn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Pn{toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function An(e,t){return Yt(e,"POST","/v1/accounts:update",t)}
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
class Ln extends Pn{static _fromEmailAndPassword(e,t){return new Ln(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ln(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Xt(e,"POST","/v1/accounts:signInWithPassword",$t(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Xt(e,"POST","/v1/accounts:signInWithEmailLink",$t(e,t))}(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return An(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Xt(e,"POST","/v1/accounts:signInWithEmailLink",$t(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function Dn(e,t){return Xt(e,"POST","/v1/accounts:signInWithIdp",$t(e,t))}
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
 */class Mn extends Pn{static _fromParams(e){const t=new Mn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,o=wt(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Mn(n,i);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){return Dn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Dn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=se(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Fn={USER_NOT_FOUND:"user-not-found"};
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
class Un extends Pn{static _fromVerification(e,t){return new Un({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Un({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Xt(e,"POST","/v1/accounts:signInWithPhoneNumber",$t(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Xt(e,"POST","/v1/accounts:signInWithPhoneNumber",$t(e,t));if(n.temporaryProof)throw Jt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Xt(e,"POST","/v1/accounts:signInWithPhoneNumber",$t(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Fn)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}=e;return n||t||i||o?new Un({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Bn{static parseLink(e){const t=function(e){const t=ae(le(e)).link,n=t?ae(le(t)).deep_link_id:null,i=ae(le(e)).deep_link_id;return(i?ae(le(i)).link:null)||i||n||t||e}(e);try{return new Bn(t)}catch(e){return null}}constructor(e){var t,n,i,o,r,s;const a=ae(le(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Rt(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(o=a.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}}
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
class jn{static credential(e,t){return Ln._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Bn.parseLink(t);return Rt(n,"argument-error"),Ln._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=jn.PROVIDER_ID}}jn.PROVIDER_ID="password",jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class qn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Wn extends qn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class zn extends Wn{static credential(e){return Mn._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com",zn.PROVIDER_ID="facebook.com";
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
class Hn extends Wn{static credential(e,t){return Mn._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Hn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Hn.GOOGLE_SIGN_IN_METHOD="google.com",Hn.PROVIDER_ID="google.com";
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
class $n extends Wn{static credential(e){return Mn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}$n.GITHUB_SIGN_IN_METHOD="github.com",$n.PROVIDER_ID="github.com";
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
class Yn extends Wn{static credential(e,t){return Mn._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Yn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com",Yn.PROVIDER_ID="twitter.com";
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
class Vn{static async _fromIdTokenResponse(e,t,n,i=!1){const o=await ln._fromIdTokenResponse(e,n,i),r=Xn(n);return new Vn({user:o,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Xn(n);return new Vn({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Xn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Kn extends Y{static _fromErrorAndOperation(e,t,n,i){return new Kn(e,t,n,i)}constructor(e,t,n,i){var o;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Kn.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Gn(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Kn._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function Jn(e,t,n=!1){const i=await tn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vn._forOperation(e,"link",i)}
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
async function Qn(e,t,n=!1){const{auth:i}=e,o="reauthenticate";try{const r=await tn(e,Gn(i,o,t,e),n);Rt(r.idToken,i,"internal-error");const s=en(r.idToken);Rt(s,i,"internal-error");const{sub:a}=s;return Rt(e.uid===a,i,"user-mismatch"),Vn._forOperation(e,o,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Tt(i,"user-mismatch"),e}}
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
 */async function Zn(e,t,n=!1){const i="signIn",o=await Gn(e,i,t),r=await Vn._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(r.user),r}function ei(e){return ge(e).signOut()}new WeakMap;const ti="__sak";
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
 */class ni{_isAvailable(){try{return this.storage?(this.storage.setItem(ti,"1"),this.storage.removeItem(ti),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class ii extends ni{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},o=this.storage.getItem(n);Cn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=P();return mn(e)||bn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=In(),this._shouldAllowMigration=!0}}ii.type="LOCAL";const oi=ii;
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
 */class ri extends ni{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}ri.type="SESSION";const si=ri;
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
class ai{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ai(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:o}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(r).map((async e=>e(t.origin,o))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function li(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */ai.receivers=[];class ci{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,r;return new Promise(((s,a)=>{const l=li("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(c),clearTimeout(o),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function ui(){return window}
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
function hi(){return void 0!==ui().WorkerGlobalScope&&"function"==typeof ui().importScripts}
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
const di="firebaseLocalStorageDb",fi="firebaseLocalStorage",pi="fbase_key";class mi{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function gi(e,t){return e.transaction([fi],t?"readwrite":"readonly").objectStore(fi)}function yi(){const e=indexedDB.open(di,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(fi,{keyPath:pi})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(fi)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(di);return new mi(e).toPromise()}(),t(await yi()))}))}))}async function _i(e,t,n){const i=gi(e,!0).put({[pi]:t,value:n});return new mi(i).toPromise()}function vi(e,t){const n=gi(e,!0).delete(t);return new mi(n).toPromise()}class wi{async _openDb(){return this.db||(this.db=await yi()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hi()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ai._getInstance(hi()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ci(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yi();return await _i(e,ti,"1"),await vi(e,ti),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>_i(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=gi(e,!1).get(t),i=await new mi(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>vi(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=gi(e,!1).getAll();return new mi(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}wi.type="LOCAL";const bi=wi;
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
 */function Ci(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var o,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=xt("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(o=document.getElementsByTagName("head"))||void 0===o?void 0:o[0])&&void 0!==r?r:document).appendChild(i)}))}function Ii(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Ii("rcb"),new jt(3e4,6e4);
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
const Ei="recaptcha";async function ki(e,t,n){var i;const o=await n.verify();try{let r;if(Rt("string"==typeof o,e,"argument-error"),Rt(n.type===Ei,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){Rt("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return Yt(e,"POST","/v2/accounts/mfaEnrollment:start",$t(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{Rt("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;Rt(n,e,"missing-multi-factor-info");const s=await function(e,t){return Yt(e,"POST","/v2/accounts/mfaSignIn:start",$t(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Yt(e,"POST","/v1/accounts:sendVerificationCode",$t(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
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
class Ti{verifyPhoneNumber(e,t){return ki(this.auth,e,ge(t))}static credential(e,t){return Un._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ti.credentialFromTaggedObject(t)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Un._fromTokenResponse(t,n):null}constructor(e){this.providerId=Ti.PROVIDER_ID,this.auth=xn(e)}}
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
function xi(e,t){return t?Dt(t):(Rt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ti.PROVIDER_ID="phone",Ti.PHONE_SIGN_IN_METHOD="phone";class Si extends Pn{_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Ni(e){return Zn(e.auth,new Si(e),e.bypassAuthState)}function Oi(e){const{auth:t,user:n}=e;return Rt(n,t,"internal-error"),Qn(n,new Si(e),e.bypassAuthState)}async function Ri(e){const{auth:t,user:n}=e;return Rt(n,t,"internal-error"),Jn(n,new Si(e),e.bypassAuthState)}
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
 */class Pi{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:o,error:r,type:s}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ni;case"linkViaPopup":case"linkViaRedirect":return Ri;case"reauthViaPopup":case"reauthViaRedirect":return Oi;default:Tt(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Ai=new jt(2e3,1e4);async function Li(e,t,n){const i=xn(e);Nt(e,t,qn);const o=xi(i,n);return new Di(i,"signInViaPopup",t,o).executeNotNull()}class Di extends Pi{async executeNotNull(){const e=await this.execute();return Rt(e,this.auth,"internal-error"),e}async onExecution(){At(1===this.filter.length,"Popup operations only handle one event");const e=li();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(xt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ai.get())};e()}constructor(e,t,n,i,o){super(e,t,i,o),this.provider=n,this.authWindow=null,this.pollId=null,Di.currentPopupAction&&Di.currentPopupAction.cancel(),Di.currentPopupAction=this}}Di.currentPopupAction=null;
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
const Mi=new Map;class Fi extends Pi{async execute(){let e=Mi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ji(t),i=Bi(e);if(!await i._isAvailable())return!1;const o="true"===await i._get(n);return await i._remove(n),o}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Ui(e,t){Mi.set(e._key(),t)}function Bi(e){return Dt(e._redirectPersistence)}function ji(e){return hn("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function qi(e,t,n=!1){const i=xn(e),o=xi(i,t),r=new Fi(i,o,n),s=await r.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class Wi{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hi(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Hi(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(zi(e))}saveEventToCache(e){this.cachedEventUids.add(zi(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function zi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Hi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const $i=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yi=/^https?/;async function Vi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Yt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Xi(e))return}catch(e){}Tt(e,"unauthorized-domain")}function Xi(e){const t=Mt(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===i}if(!Yi.test(n))return!1;if($i.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */const Ki=new jt(3e4,6e4);function Gi(){const e=ui().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ji=null;function Qi(e){return Ji=Ji||function(e){return new Promise(((t,n)=>{var i,o,r;function s(){Gi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Gi(),n(xt(e,"network-request-failed"))},timeout:Ki.get()})}if(null===(o=null===(i=ui().gapi)||void 0===i?void 0:i.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=ui().gapi)||void 0===r?void 0:r.load)){const t=Ii("iframefcb");return ui()[t]=()=>{gapi.load?s():n(xt(e,"network-request-failed"))},Ci(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Ji=null,e}))}(e),Ji}
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
 */const Zi=new jt(5e3,15e3),eo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},to=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function no(e){const t=e.config;Rt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:rt},o=to.get(e.config.apiHost);o&&(i.eid=o);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${se(i).slice(1)}`}
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
const io={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class oo{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function ro(e,t,n,i=500,o=600){const r=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},io),{width:i.toString(),height:o.toString(),top:r,left:s}),c=P().toLowerCase();n&&(a=gn(c)?"_blank":n),pn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=P()){var t;return bn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new oo(null);const h=window.open(t||"",a,u);Rt(h,e,"popup-blocked");try{h.focus()}catch(e){}return new oo(h)}const so="__/auth/handler",ao="emulator/auth/handler";function lo(e,t,n,i,o,r){Rt(e.config.authDomain,e,"auth-domain-config-required"),Rt(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:rt,eventId:o};if(t instanceof qn){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",ne(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))s[e]=t}if(t instanceof Wn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?qt(e,ao):`https://${e.authDomain}/${so}`}
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
 */(e)}?${se(a).slice(1)}`}const co="webStorageSupport";const uo=class{async _openPopup(e,t,n,i){var o;At(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");return ro(e,lo(e,t,n,Mt(),i),li())}async _openRedirect(e,t,n,i){var o;return await this._originValidation(e),o=lo(e,t,n,Mt(),i),ui().location.href=o,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(At(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Qi(e),n=ui().gapi;return Rt(n,e,"internal-error"),t.open({where:document.body,url:no(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eo,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const o=xt(e,"network-request-failed"),r=ui().setTimeout((()=>{i(o)}),Zi.get());function s(){ui().clearTimeout(r),n(t)}t.ping(s).then(s,(()=>{i(o)}))}))))}(e),n=new Wi(e);return t.register("authEvent",(t=>{Rt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(co,{type:co},(n=>{var i;const o=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[co];void 0!==o&&t(!!o),Tt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return In()||mn()||bn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=si,this._completeRedirectFn=qi,this._overrideRedirectResult=Ui}};var ho="@firebase/auth",fo="0.21.0";
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
class po{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Rt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const mo=z("authIdTokenMaxAge")||300;let go=null;function yo(e=at()){const t=nt(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=nt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(oe(n.getOptions(),null!=t?t:{}))return e;Tt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:uo,persistence:[bi,oi,si]}),i=z("authTokenSyncURL");if(i){const e=(o=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>mo)return;const i=null==t?void 0:t.token;go!==i&&(go=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){ge(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){ge(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var o;const r=q("auth");return r&&Nn(n,`http://${r}`),n}var _o;_o="Browser",tt(new ye("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:r}=n.options;return((e,n)=>{Rt(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),Rt(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:o,authDomain:r,clientPlatform:_o,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:En(_o)},s=new Tn(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Dt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),tt(new ye("auth-internal",(e=>{const t=xn(e.getProvider("auth").getImmediate());return new po(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),lt(ho,fo,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(_o)),lt(ho,fo,"esm2017");const vo={btnOpenRef:document.querySelector("[data-modal-open]"),btnOpenUserRef:document.querySelector("[data-modal-open-user]"),btnCloseRef:document.querySelector("[data-main-modal-close]"),btnCloseUserRef:document.querySelector("[data-user-modal-close]"),body:document.querySelector("body"),teamModal:document.querySelector("[data-team-modal]"),headerUserLink:document.querySelector(".menu__link-js"),form:document.querySelector(".form"),searchError:document.querySelector(".form__text-error"),pagRef:document.querySelector(".pagination"),currentPage:document.querySelector("#curr"),nextPage:document.querySelector("#next"),prevPage:document.querySelector("#prev"),firstPage:document.querySelector("#first-page"),lastPage:document.querySelector("#last-page"),beforeCurPageContainer:document.querySelector(".before-cur-page"),afterCurPageContainer:document.querySelector(".after-cur-page"),themeBtnRef:document.querySelector(".theme-btn"),lightIconRef:document.querySelector(".theme-light"),darkIconRef:document.querySelector(".theme-dark"),filmList:document.querySelector(".films__list"),btnScrollTopRef:document.querySelector(".btn__up"),btnScrollDownRef:document.querySelector(".btn__down"),footerRef:document.querySelector(".footer"),btnWatch:document.querySelector(".btn__watched"),btnQueue:document.querySelector(".btn__queue")};function wo(e,t,n){let i=null,o=e;e.length>2?(i=!0,o=e.slice(0,2)):i=!1;let r=o.map((e=>t.find((t=>t.id===e)))).map((e=>e.name)).join(", ");i&&(r+=", Other");return{date:n.slice(0,4),genresOfCurrentFilm:r}}var bo=class{createFilmCardsMarkup(e,t){return e.map((({poster_path:e,title:n,genre_ids:i,release_date:o,id:r})=>{const s=wo(i,t,o),{date:a,genresOfCurrentFilm:l}=s;return` <li class="film">\n        <div class="film__thumb">\n          <img data-id='${r}' class="film__img" src="https://image.tmdb.org/t/p/w500/${e}" alt="${n}" />\n        </div>\n        <div class="film__wrap">\n          <h2 class="film__title">${n}</h2>\n          <p class="film__genres">${l} | ${a}</p>\n        </div>\n      </li>`})).join("")}createModalFilmDetails({poster_path:e,title:t,fixedGenres:n,vote_count:i,fixedVote:o,fixedPopularity:r,overview:s},a){return`\n        <div class="film__modal">\n        \n      <button class="film-modal__close">X</button>\n    \n          <div class="film-modal__thumb">\n          <img\n            class="film-modal__img"\n            src="https://image.tmdb.org/t/p/w500/${e}"\n            alt="${t}"\n          />\n          </div>\n    \n          <div class="film-modal__text-wrap">\n          <h2 class="film-modal__title">${t}</h2>\n    \n          <ul class="film-modal__list-characteristic">\n            <li class="film-modal__item-characteristic">\n              <p class="film-modal__characteristic-text">\n                <span class="characteristic__name characteristic__name--vote"\n                  >Vote / Votes</span\n                ><span class="characteristic__value characteristic__value--vote">\n                <span class="characteristic__vote">${o}</span> / \n                <span class="characteristic__vote characteristic__vote--count">${i}</span>\n                </span>\n              </p>\n            </li>\n            <li class="film-modal__item-characteristic">\n              <p class="film-modal__characteristic-text">\n                <span class="characteristic__name characteristic__name--popularity"\n                  >Popularity</span\n                ><span class="characteristic__value">${r}</span>\n              </p>\n            </li>\n            <li class="film-modal__item-characteristic">\n              <p class="film-modal__characteristic-text">\n                <span class="characteristic__name characteristic__name--title"\n                  >Original Title</span\n                ><span class="characteristic__value">${t}</span>\n              </p>\n            </li>\n            <li class="film-modal__item-characteristic">\n              <p class="film-modal__characteristic-text">\n                <span class="characteristic__name characteristic__name--genre"\n                  >Genre</span\n                ><span class="characteristic__value">${n}</span>\n              </p>\n            </li>\n          </ul>\n    \n          <h3 class="film-modal__about-film-title">About</h3>\n          <p class="film-modal__about-film-text"> ${s}\n          </p>\n    \n          <button class="film-modal__trailer" data-id="${a} aria-lable="youtube"><span class="film-modal__sumbol">&#9658;</span></button>\n    \n          <div class="film-modal__wrap-btn flex">\n            <button class="film-modal__btn film-modal__btn--watched">\n              add to Watched\n            </button>\n            <button class="film-modal__btn film-modal__btn--queue">\n              add to queue\n            </button>\n          </div>\n         </div>\n        </div>\n    `}createModalFilmTrailer(e){return`\n    <iframe class='film-modal__iframe' src="https://www.youtube.com/embed/${e}" frameborder="0"></iframe>\n`}createModalWithoutFilmTrailer(){return"<div class=\"empty\"><p class='empty__text'>Sorry, but this film don't have trailer :(</p></div>\n    "}renderMarkup({selector:e,innerHtml:t=!1,innerHTMLMarkup:n="",insAdHtmltype:i="beforeend",createMarkypFunc:o}){const r=document.querySelector(e);t&&(r.innerHTML=n),r.insertAdjacentHTML(i,o)}constructor(){}},Co={};Object.defineProperty(Co,"__esModule",{value:!0}),Co.default=function(e,t){var n=Io.default(e,t,"get");return Eo.default(e,n)};var Io=ko(o("fExtF")),Eo=ko(o("iaRLo"));function ko(e){return e&&e.__esModule?e:{default:e}}var To={};Object.defineProperty(To,"__esModule",{value:!0}),To.default=function(e,t,n){So.default(e,t),t.set(e,n)};var xo,So=(xo=o("7K24o"))&&xo.__esModule?xo:{default:xo};var No={};Object.defineProperty(No,"__esModule",{value:!0}),No.default=function(e,t,n){var i=Oo.default(e,t,"set");return Ro.default(e,i,n),n};var Oo=Po(o("fExtF")),Ro=Po(o("3LGG3"));function Po(e){return e&&e.__esModule?e:{default:e}}var Ao,Lo,Do,Mo,Fo={};function Uo(e,t){return function(){return e.apply(t,arguments)}}Ao=Fo,Lo="default",Do=function(){return pr},Mo=function(e){return pr=e},Object.defineProperty(Ao,Lo,{get:Do,set:Mo,enumerable:!0,configurable:!0});const{toString:Bo}=Object.prototype,{getPrototypeOf:jo}=Object,qo=(Wo=Object.create(null),e=>{const t=Bo.call(e);return Wo[t]||(Wo[t]=t.slice(8,-1).toLowerCase())});var Wo;const zo=e=>(e=e.toLowerCase(),t=>qo(t)===e),Ho=e=>t=>typeof t===e,{isArray:$o}=Array,Yo=Ho("undefined");const Vo=zo("ArrayBuffer");const Xo=Ho("string"),Ko=Ho("function"),Go=Ho("number"),Jo=e=>null!==e&&"object"==typeof e,Qo=e=>{if("object"!==qo(e))return!1;const t=jo(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},Zo=zo("Date"),er=zo("File"),tr=zo("Blob"),nr=zo("FileList"),ir=zo("URLSearchParams");function or(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,o;if("object"!=typeof e&&(e=[e]),$o(e))for(i=0,o=e.length;i<o;i++)t.call(null,e[i],i,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),r=o.length;let s;for(i=0;i<r;i++)s=o[i],t.call(null,e[s],s,e)}}function rr(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,o=n.length;for(;o-- >0;)if(i=n[o],t===i.toLowerCase())return i;return null}const sr="undefined"==typeof self?void 0===e?void 0:e:self,ar=e=>!Yo(e)&&e!==sr;const lr=(cr="undefined"!=typeof Uint8Array&&jo(Uint8Array),e=>cr&&e instanceof cr);var cr;const ur=zo("HTMLFormElement"),hr=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),dr=zo("RegExp"),fr=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};or(n,((n,o)=>{!1!==t(n,o,e)&&(i[o]=n)})),Object.defineProperties(e,i)};var pr={isArray:$o,isArrayBuffer:Vo,isBuffer:function(e){return null!==e&&!Yo(e)&&null!==e.constructor&&!Yo(e.constructor)&&Ko(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||Bo.call(e)===t||Ko(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Vo(e.buffer),t},isString:Xo,isNumber:Go,isBoolean:e=>!0===e||!1===e,isObject:Jo,isPlainObject:Qo,isUndefined:Yo,isDate:Zo,isFile:er,isBlob:tr,isRegExp:dr,isFunction:Ko,isStream:e=>Jo(e)&&Ko(e.pipe),isURLSearchParams:ir,isTypedArray:lr,isFileList:nr,forEach:or,merge:function e(){const{caseless:t}=ar(this)&&this||{},n={},i=(i,o)=>{const r=t&&rr(n,o)||o;Qo(n[r])&&Qo(i)?n[r]=e(n[r],i):Qo(i)?n[r]=e({},i):$o(i)?n[r]=i.slice():n[r]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&or(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(or(t,((t,i)=>{n&&Ko(t)?e[i]=Uo(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let o,r,s;const a={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),r=o.length;r-- >0;)s=o[r],i&&!i(s,e,t)||a[s]||(t[s]=e[s],a[s]=!0);e=!1!==n&&jo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:qo,kindOfTest:zo,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if($o(e))return e;let t=e.length;if(!Go(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:ur,hasOwnProperty:hr,hasOwnProp:hr,reduceDescriptors:fr,freezeMethods:e=>{fr(e,((t,n)=>{if(Ko(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];Ko(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return $o(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:rr,global:sr,isContextDefined:ar,toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(Jo(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const o=$o(e)?[]:{};return or(e,((e,t)=>{const r=n(e,i+1);!Yo(r)&&(o[t]=r)})),t[i]=void 0,o}}return e};return n(e,0)}};function mr(e,t,n,i,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o)}Fo.default.inherits(mr,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Fo.default.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const gr=mr.prototype,yr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{yr[e]={value:e}})),Object.defineProperties(mr,yr),Object.defineProperty(gr,"isAxiosError",{value:!0}),mr.from=(e,t,n,i,o,r)=>{const s=Object.create(gr);return Fo.default.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),mr.call(s,e.message,t,n,i,o),s.cause=e,s.name=e.name,r&&Object.assign(s,r),s};var _r,vr,wr,br=mr,Cr=t("object"==typeof self?self.FormData:window.FormData);vr=function(e){var t,n,i=Rr(e),o=i[0],r=i[1],s=new xr(function(e,t,n){return 3*(t+n)/4-n}(0,o,r)),a=0,l=r>0?o-4:o;for(n=0;n<l;n+=4)t=Tr[e.charCodeAt(n)]<<18|Tr[e.charCodeAt(n+1)]<<12|Tr[e.charCodeAt(n+2)]<<6|Tr[e.charCodeAt(n+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=255&t;2===r&&(t=Tr[e.charCodeAt(n)]<<2|Tr[e.charCodeAt(n+1)]>>4,s[a++]=255&t);1===r&&(t=Tr[e.charCodeAt(n)]<<10|Tr[e.charCodeAt(n+1)]<<4|Tr[e.charCodeAt(n+2)]>>2,s[a++]=t>>8&255,s[a++]=255&t);return s},wr=function(e){for(var t,n=e.length,i=n%3,o=[],r=16383,s=0,a=n-i;s<a;s+=r)o.push(Pr(e,s,s+r>a?a:s+r));1===i?(t=e[n-1],o.push(kr[t>>2]+kr[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],o.push(kr[t>>10]+kr[t>>4&63]+kr[t<<2&63]+"="));return o.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var Ir,Er,kr=[],Tr=[],xr="undefined"!=typeof Uint8Array?Uint8Array:Array,Sr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Nr=0,Or=Sr.length;Nr<Or;++Nr)kr[Nr]=Sr[Nr],Tr[Sr.charCodeAt(Nr)]=Nr;function Rr(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Pr(e,t,n){for(var i,o,r=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),r.push(kr[(o=i)>>18&63]+kr[o>>12&63]+kr[o>>6&63]+kr[63&o]);return r.join("")}Tr["-".charCodeAt(0)]=62,Tr["_".charCodeAt(0)]=63,Ir=function(e,t,n,i,o){var r,s,a=8*o-i-1,l=(1<<a)-1,c=l>>1,u=-7,h=n?o-1:0,d=n?-1:1,f=e[t+h];for(h+=d,r=f&(1<<-u)-1,f>>=-u,u+=a;u>0;r=256*r+e[t+h],h+=d,u-=8);for(s=r&(1<<-u)-1,r>>=-u,u+=i;u>0;s=256*s+e[t+h],h+=d,u-=8);if(0===r)r=1-c;else{if(r===l)return s?NaN:1/0*(f?-1:1);s+=Math.pow(2,i),r-=c}return(f?-1:1)*s*Math.pow(2,r-i)},Er=function(e,t,n,i,o,r){var s,a,l,c=8*r-o-1,u=(1<<c)-1,h=u>>1,d=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:r-1,p=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),(t+=s+h>=1?d/l:d*Math.pow(2,1-h))*l>=2&&(s++,l/=2),s+h>=u?(a=0,s=u):s+h>=1?(a=(t*l-1)*Math.pow(2,o),s+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;e[n+f]=255&a,f+=p,a/=256,o-=8);for(s=s<<o|a,c+=o;c>0;e[n+f]=255&s,f+=p,s/=256,c-=8);e[n+f-p]|=128*m};const Ar="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;_r=Mr;const Lr=2147483647;function Dr(e){if(e>Lr)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Mr.prototype),t}function Mr(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return Br(e)}return Fr(e,t,n)}function Fr(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Mr.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|zr(e,t);let i=Dr(n);const o=i.write(e,t);o!==n&&(i=i.slice(0,o));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Is(e,Uint8Array)){const t=new Uint8Array(e);return qr(t.buffer,t.byteOffset,t.byteLength)}return jr(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Is(e,ArrayBuffer)||e&&Is(e.buffer,ArrayBuffer))return qr(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Is(e,SharedArrayBuffer)||e&&Is(e.buffer,SharedArrayBuffer)))return qr(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return Mr.from(i,t,n);const o=function(e){if(Mr.isBuffer(e)){const t=0|Wr(e.length),n=Dr(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Es(e.length)?Dr(0):jr(e);if("Buffer"===e.type&&Array.isArray(e.data))return jr(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Mr.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Ur(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function Br(e){return Ur(e),Dr(e<0?0:0|Wr(e))}function jr(e){const t=e.length<0?0:0|Wr(e.length),n=Dr(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function qr(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,Mr.prototype),i}function Wr(e){if(e>=Lr)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Lr.toString(16)+" bytes");return 0|e}function zr(e,t){if(Mr.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Is(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let o=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ws(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return bs(e).length;default:if(o)return i?-1:ws(e).length;t=(""+t).toLowerCase(),o=!0}}function Hr(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return os(this,t,n);case"utf8":case"utf-8":return es(this,t,n);case"ascii":return ns(this,t,n);case"latin1":case"binary":return is(this,t,n);case"base64":return Zr(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rs(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function $r(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function Yr(e,t,n,i,o){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Es(n=+n)&&(n=o?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof t&&(t=Mr.from(t,i)),Mr.isBuffer(t))return 0===t.length?-1:Vr(e,t,n,i,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):Vr(e,[t],n,i,o);throw new TypeError("val must be string, number or Buffer")}function Vr(e,t,n,i,o){let r,s=1,a=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;s=2,a/=2,l/=2,n/=2}function c(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}if(o){let i=-1;for(r=n;r<a;r++)if(c(e,r)===c(t,-1===i?0:r-i)){if(-1===i&&(i=r),r-i+1===l)return i*s}else-1!==i&&(r-=r-i),i=-1}else for(n+l>a&&(n=a-l),r=n;r>=0;r--){let n=!0;for(let i=0;i<l;i++)if(c(e,r+i)!==c(t,i)){n=!1;break}if(n)return r}return-1}function Xr(e,t,n,i){n=Number(n)||0;const o=e.length-n;i?(i=Number(i))>o&&(i=o):i=o;const r=t.length;let s;for(i>r/2&&(i=r/2),s=0;s<i;++s){const i=parseInt(t.substr(2*s,2),16);if(Es(i))return s;e[n+s]=i}return s}function Kr(e,t,n,i){return Cs(ws(t,e.length-n),e,n,i)}function Gr(e,t,n,i){return Cs(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function Jr(e,t,n,i){return Cs(bs(t),e,n,i)}function Qr(e,t,n,i){return Cs(function(e,t){let n,i,o;const r=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=e.charCodeAt(s),i=n>>8,o=n%256,r.push(o),r.push(i);return r}(t,e.length-n),e,n,i)}function Zr(e,t,n){return 0===t&&n===e.length?wr(e):wr(e.slice(t,n))}function es(e,t,n){n=Math.min(e.length,n);const i=[];let o=t;for(;o<n;){const t=e[o];let r=null,s=t>239?4:t>223?3:t>191?2:1;if(o+s<=n){let n,i,a,l;switch(s){case 1:t<128&&(r=t);break;case 2:n=e[o+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(r=l));break;case 3:n=e[o+1],i=e[o+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(r=l));break;case 4:n=e[o+1],i=e[o+2],a=e[o+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,l>65535&&l<1114112&&(r=l))}}null===r?(r=65533,s=1):r>65535&&(r-=65536,i.push(r>>>10&1023|55296),r=56320|1023&r),i.push(r),o+=s}return function(e){const t=e.length;if(t<=ts)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=ts));return n}(i)}Mr.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Mr.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Mr.prototype,"parent",{enumerable:!0,get:function(){if(Mr.isBuffer(this))return this.buffer}}),Object.defineProperty(Mr.prototype,"offset",{enumerable:!0,get:function(){if(Mr.isBuffer(this))return this.byteOffset}}),Mr.poolSize=8192,Mr.from=function(e,t,n){return Fr(e,t,n)},Object.setPrototypeOf(Mr.prototype,Uint8Array.prototype),Object.setPrototypeOf(Mr,Uint8Array),Mr.alloc=function(e,t,n){return function(e,t,n){return Ur(e),e<=0?Dr(e):void 0!==t?"string"==typeof n?Dr(e).fill(t,n):Dr(e).fill(t):Dr(e)}(e,t,n)},Mr.allocUnsafe=function(e){return Br(e)},Mr.allocUnsafeSlow=function(e){return Br(e)},Mr.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Mr.prototype},Mr.compare=function(e,t){if(Is(e,Uint8Array)&&(e=Mr.from(e,e.offset,e.byteLength)),Is(t,Uint8Array)&&(t=Mr.from(t,t.offset,t.byteLength)),!Mr.isBuffer(e)||!Mr.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let o=0,r=Math.min(n,i);o<r;++o)if(e[o]!==t[o]){n=e[o],i=t[o];break}return n<i?-1:i<n?1:0},Mr.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Mr.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Mr.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=Mr.allocUnsafe(t);let o=0;for(n=0;n<e.length;++n){let t=e[n];if(Is(t,Uint8Array))o+t.length>i.length?(Mr.isBuffer(t)||(t=Mr.from(t)),t.copy(i,o)):Uint8Array.prototype.set.call(i,t,o);else{if(!Mr.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,o)}o+=t.length}return i},Mr.byteLength=zr,Mr.prototype._isBuffer=!0,Mr.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)$r(this,t,t+1);return this},Mr.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)$r(this,t,t+3),$r(this,t+1,t+2);return this},Mr.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)$r(this,t,t+7),$r(this,t+1,t+6),$r(this,t+2,t+5),$r(this,t+3,t+4);return this},Mr.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?es(this,0,e):Hr.apply(this,arguments)},Mr.prototype.toLocaleString=Mr.prototype.toString,Mr.prototype.equals=function(e){if(!Mr.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Mr.compare(this,e)},Mr.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},Ar&&(Mr.prototype[Ar]=Mr.prototype.inspect),Mr.prototype.compare=function(e,t,n,i,o){if(Is(e,Uint8Array)&&(e=Mr.from(e,e.offset,e.byteLength)),!Mr.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),t<0||n>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&t>=n)return 0;if(i>=o)return-1;if(t>=n)return 1;if(this===e)return 0;let r=(o>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const a=Math.min(r,s),l=this.slice(i,o),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){r=l[e],s=c[e];break}return r<s?-1:s<r?1:0},Mr.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Mr.prototype.indexOf=function(e,t,n){return Yr(this,e,t,n,!0)},Mr.prototype.lastIndexOf=function(e,t,n){return Yr(this,e,t,n,!1)},Mr.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const o=this.length-t;if((void 0===n||n>o)&&(n=o),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let r=!1;for(;;)switch(i){case"hex":return Xr(this,e,t,n);case"utf8":case"utf-8":return Kr(this,e,t,n);case"ascii":case"latin1":case"binary":return Gr(this,e,t,n);case"base64":return Jr(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Qr(this,e,t,n);default:if(r)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),r=!0}},Mr.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const ts=4096;function ns(e,t,n){let i="";n=Math.min(e.length,n);for(let o=t;o<n;++o)i+=String.fromCharCode(127&e[o]);return i}function is(e,t,n){let i="";n=Math.min(e.length,n);for(let o=t;o<n;++o)i+=String.fromCharCode(e[o]);return i}function os(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let o="";for(let i=t;i<n;++i)o+=ks[e[i]];return o}function rs(e,t,n){const i=e.slice(t,n);let o="";for(let e=0;e<i.length-1;e+=2)o+=String.fromCharCode(i[e]+256*i[e+1]);return o}function ss(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function as(e,t,n,i,o,r){if(!Mr.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<r)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function ls(e,t,n,i,o){gs(t,i,o,e,n,7);let r=Number(t&BigInt(4294967295));e[n++]=r,r>>=8,e[n++]=r,r>>=8,e[n++]=r,r>>=8,e[n++]=r;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function cs(e,t,n,i,o){gs(t,i,o,e,n,7);let r=Number(t&BigInt(4294967295));e[n+7]=r,r>>=8,e[n+6]=r,r>>=8,e[n+5]=r,r>>=8,e[n+4]=r;let s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=s,s>>=8,e[n+2]=s,s>>=8,e[n+1]=s,s>>=8,e[n]=s,n+8}function us(e,t,n,i,o,r){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function hs(e,t,n,i,o){return t=+t,n>>>=0,o||us(e,0,n,4),Er(e,t,n,i,23,4),n+4}function ds(e,t,n,i,o){return t=+t,n>>>=0,o||us(e,0,n,8),Er(e,t,n,i,52,8),n+8}Mr.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,Mr.prototype),i},Mr.prototype.readUintLE=Mr.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ss(e,t,this.length);let i=this[e],o=1,r=0;for(;++r<t&&(o*=256);)i+=this[e+r]*o;return i},Mr.prototype.readUintBE=Mr.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ss(e,t,this.length);let i=this[e+--t],o=1;for(;t>0&&(o*=256);)i+=this[e+--t]*o;return i},Mr.prototype.readUint8=Mr.prototype.readUInt8=function(e,t){return e>>>=0,t||ss(e,1,this.length),this[e]},Mr.prototype.readUint16LE=Mr.prototype.readUInt16LE=function(e,t){return e>>>=0,t||ss(e,2,this.length),this[e]|this[e+1]<<8},Mr.prototype.readUint16BE=Mr.prototype.readUInt16BE=function(e,t){return e>>>=0,t||ss(e,2,this.length),this[e]<<8|this[e+1]},Mr.prototype.readUint32LE=Mr.prototype.readUInt32LE=function(e,t){return e>>>=0,t||ss(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Mr.prototype.readUint32BE=Mr.prototype.readUInt32BE=function(e,t){return e>>>=0,t||ss(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Mr.prototype.readBigUInt64LE=Ts((function(e){ys(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||_s(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,o=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(o)<<BigInt(32))})),Mr.prototype.readBigUInt64BE=Ts((function(e){ys(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||_s(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],o=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(o)})),Mr.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||ss(e,t,this.length);let i=this[e],o=1,r=0;for(;++r<t&&(o*=256);)i+=this[e+r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},Mr.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||ss(e,t,this.length);let i=t,o=1,r=this[e+--i];for(;i>0&&(o*=256);)r+=this[e+--i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*t)),r},Mr.prototype.readInt8=function(e,t){return e>>>=0,t||ss(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Mr.prototype.readInt16LE=function(e,t){e>>>=0,t||ss(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Mr.prototype.readInt16BE=function(e,t){e>>>=0,t||ss(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Mr.prototype.readInt32LE=function(e,t){return e>>>=0,t||ss(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Mr.prototype.readInt32BE=function(e,t){return e>>>=0,t||ss(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Mr.prototype.readBigInt64LE=Ts((function(e){ys(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||_s(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Mr.prototype.readBigInt64BE=Ts((function(e){ys(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||_s(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Mr.prototype.readFloatLE=function(e,t){return e>>>=0,t||ss(e,4,this.length),Ir(this,e,!0,23,4)},Mr.prototype.readFloatBE=function(e,t){return e>>>=0,t||ss(e,4,this.length),Ir(this,e,!1,23,4)},Mr.prototype.readDoubleLE=function(e,t){return e>>>=0,t||ss(e,8,this.length),Ir(this,e,!0,52,8)},Mr.prototype.readDoubleBE=function(e,t){return e>>>=0,t||ss(e,8,this.length),Ir(this,e,!1,52,8)},Mr.prototype.writeUintLE=Mr.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){as(this,e,t,n,Math.pow(2,8*n)-1,0)}let o=1,r=0;for(this[t]=255&e;++r<n&&(o*=256);)this[t+r]=e/o&255;return t+n},Mr.prototype.writeUintBE=Mr.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){as(this,e,t,n,Math.pow(2,8*n)-1,0)}let o=n-1,r=1;for(this[t+o]=255&e;--o>=0&&(r*=256);)this[t+o]=e/r&255;return t+n},Mr.prototype.writeUint8=Mr.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,1,255,0),this[t]=255&e,t+1},Mr.prototype.writeUint16LE=Mr.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Mr.prototype.writeUint16BE=Mr.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Mr.prototype.writeUint32LE=Mr.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Mr.prototype.writeUint32BE=Mr.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Mr.prototype.writeBigUInt64LE=Ts((function(e,t=0){return ls(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Mr.prototype.writeBigUInt64BE=Ts((function(e,t=0){return cs(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Mr.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);as(this,e,t,n,i-1,-i)}let o=0,r=1,s=0;for(this[t]=255&e;++o<n&&(r*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/r>>0)-s&255;return t+n},Mr.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);as(this,e,t,n,i-1,-i)}let o=n-1,r=1,s=0;for(this[t+o]=255&e;--o>=0&&(r*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/r>>0)-s&255;return t+n},Mr.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Mr.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Mr.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Mr.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Mr.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||as(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Mr.prototype.writeBigInt64LE=Ts((function(e,t=0){return ls(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Mr.prototype.writeBigInt64BE=Ts((function(e,t=0){return cs(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Mr.prototype.writeFloatLE=function(e,t,n){return hs(this,e,t,!0,n)},Mr.prototype.writeFloatBE=function(e,t,n){return hs(this,e,t,!1,n)},Mr.prototype.writeDoubleLE=function(e,t,n){return ds(this,e,t,!0,n)},Mr.prototype.writeDoubleBE=function(e,t,n){return ds(this,e,t,!1,n)},Mr.prototype.copy=function(e,t,n,i){if(!Mr.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const o=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),o},Mr.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!Mr.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let o;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(o=t;o<n;++o)this[o]=e;else{const r=Mr.isBuffer(e)?e:Mr.from(e,i),s=r.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<n-t;++o)this[o+t]=r[o%s]}return this};const fs={};function ps(e,t,n){fs[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function ms(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function gs(e,t,n,i,o,r){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let o;throw o=r>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(r+1)}${i}`:`>= -(2${i} ** ${8*(r+1)-1}${i}) and < 2 ** ${8*(r+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new fs.ERR_OUT_OF_RANGE("value",o,e)}!function(e,t,n){ys(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||_s(t,e.length-(n+1))}(i,o,r)}function ys(e,t){if("number"!=typeof e)throw new fs.ERR_INVALID_ARG_TYPE(t,"number",e)}function _s(e,t,n){if(Math.floor(e)!==e)throw ys(e,n),new fs.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new fs.ERR_BUFFER_OUT_OF_BOUNDS;throw new fs.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}ps("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),ps("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),ps("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,o=n;return Number.isInteger(n)&&Math.abs(n)>2**32?o=ms(String(n)):"bigint"==typeof n&&(o=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(o=ms(o)),o+="n"),i+=` It must be ${t}. Received ${o}`,i}),RangeError);const vs=/[^+/0-9A-Za-z-_]/g;function ws(e,t){let n;t=t||1/0;const i=e.length;let o=null;const r=[];for(let s=0;s<i;++s){if(n=e.charCodeAt(s),n>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&r.push(239,191,189);continue}if(s+1===i){(t-=3)>-1&&r.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&r.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&r.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;r.push(n)}else if(n<2048){if((t-=2)<0)break;r.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;r.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;r.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return r}function bs(e){return vr(function(e){if((e=(e=e.split("=")[0]).trim().replace(vs,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Cs(e,t,n,i){let o;for(o=0;o<i&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function Is(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Es(e){return e!=e}const ks=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let o=0;o<16;++o)t[i+o]=e[n]+e[o]}return t}();function Ts(e){return"undefined"==typeof BigInt?xs:e}function xs(){throw new Error("BigInt not supported")}var Ss=_r;function Ns(e){return Fo.default.isPlainObject(e)||Fo.default.isArray(e)}function Os(e){return Fo.default.endsWith(e,"[]")?e.slice(0,-2):e}function Rs(e,t,n){return e?e.concat(t).map((function(e,t){return e=Os(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const Ps=Fo.default.toFlatObject(Fo.default,{},null,(function(e){return/^is[A-Z]/.test(e)}));var As=function(e,t,n){if(!Fo.default.isObject(e))throw new TypeError("target must be an object");t=t||new(Cr||FormData);const i=(n=Fo.default.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Fo.default.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,r=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((l=t)&&Fo.default.isFunction(l.append)&&"FormData"===l[Symbol.toStringTag]&&l[Symbol.iterator]);var l;if(!Fo.default.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(Fo.default.isDate(e))return e.toISOString();if(!a&&Fo.default.isBlob(e))throw new br("Blob is not supported. Use a Buffer instead.");return Fo.default.isArrayBuffer(e)||Fo.default.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Ss.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(Fo.default.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(Fo.default.isArray(e)&&function(e){return Fo.default.isArray(e)&&!e.some(Ns)}(e)||Fo.default.isFileList(e)||Fo.default.endsWith(n,"[]")&&(a=Fo.default.toArray(e)))return n=Os(n),a.forEach((function(e,i){!Fo.default.isUndefined(e)&&null!==e&&t.append(!0===s?Rs([n],i,r):null===s?n:n+"[]",c(e))})),!1;return!!Ns(e)||(t.append(Rs(o,n,r),c(e)),!1)}const h=[],d=Object.assign(Ps,{defaultVisitor:u,convertValue:c,isVisitable:Ns});if(!Fo.default.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!Fo.default.isUndefined(n)){if(-1!==h.indexOf(n))throw Error("Circular reference detected in "+i.join("."));h.push(n),Fo.default.forEach(n,(function(n,r){!0===(!(Fo.default.isUndefined(n)||null===n)&&o.call(t,n,Fo.default.isString(r)?r.trim():r,i,d))&&e(n,i?i.concat(r):[r])})),h.pop()}}(e),t};function Ls(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ds(e,t){this._pairs=[],e&&As(e,this,t)}const Ms=Ds.prototype;Ms.append=function(e,t){this._pairs.push([e,t])},Ms.toString=function(e){const t=e?function(t){return e.call(this,t,Ls)}:Ls;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Fs=Ds;function Us(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Bs(e,t,n){if(!t)return e;const i=n&&n.encode||Us,o=n&&n.serialize;let r;if(r=o?o(t,n):Fo.default.isURLSearchParams(t)?t.toString():new Fs(t,n).toString(i),r){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}var js=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Fo.default.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},qs={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ws="undefined"!=typeof URLSearchParams?URLSearchParams:Fs,zs=FormData;const Hs=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})();var $s={isBrowser:!0,classes:{URLSearchParams:Ws,FormData:zs,Blob:Blob},isStandardBrowserEnv:Hs,protocols:["http","https","file","blob","url","data"]};function Ys(e,t){return As(e,new $s.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return $s.isNode&&Fo.default.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var Vs=function(e){function t(e,n,i,o){let r=e[o++];const s=Number.isFinite(+r),a=o>=e.length;if(r=!r&&Fo.default.isArray(i)?i.length:r,a)return Fo.default.hasOwnProp(i,r)?i[r]=[i[r],n]:i[r]=n,!s;i[r]&&Fo.default.isObject(i[r])||(i[r]=[]);return t(e,n,i[r],o)&&Fo.default.isArray(i[r])&&(i[r]=function(e){const t={},n=Object.keys(e);let i;const o=n.length;let r;for(i=0;i<o;i++)r=n[i],t[r]=e[r];return t}(i[r])),!s}if(Fo.default.isFormData(e)&&Fo.default.isFunction(e.entries)){const n={};return Fo.default.forEachEntry(e,((e,i)=>{t(function(e){return Fo.default.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const Xs={"Content-Type":void 0};const Ks={transitional:qs,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=Fo.default.isObject(e);o&&Fo.default.isHTMLForm(e)&&(e=new FormData(e));if(Fo.default.isFormData(e))return i&&i?JSON.stringify(Vs(e)):e;if(Fo.default.isArrayBuffer(e)||Fo.default.isBuffer(e)||Fo.default.isStream(e)||Fo.default.isFile(e)||Fo.default.isBlob(e))return e;if(Fo.default.isArrayBufferView(e))return e.buffer;if(Fo.default.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let r;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Ys(e,this.formSerializer).toString();if((r=Fo.default.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return As(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),function(e,t,n){if(Fo.default.isString(e))try{return(t||JSON.parse)(e),Fo.default.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Ks.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&Fo.default.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw br.from(e,br.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$s.classes.FormData,Blob:$s.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Fo.default.forEach(["delete","get","head"],(function(e){Ks.headers[e]={}})),Fo.default.forEach(["post","put","patch"],(function(e){Ks.headers[e]=Fo.default.merge(Xs)}));var Gs=Ks;const Js=Fo.default.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Qs=e=>{const t={};let n,i,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),i=e.substring(o+1).trim(),!n||t[n]&&Js[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const Zs=Symbol("internals");function ea(e){return e&&String(e).trim().toLowerCase()}function ta(e){return!1===e||null==e?e:Fo.default.isArray(e)?e.map(ta):String(e)}function na(e,t,n,i){return Fo.default.isFunction(i)?i.call(this,t,n):Fo.default.isString(t)?Fo.default.isString(i)?-1!==t.indexOf(i):Fo.default.isRegExp(i)?i.test(t):void 0:void 0}let ia=Symbol.iterator,oa=Symbol.toStringTag;class ra{set(e,t,n){const i=this;function o(e,t,n){const o=ea(t);if(!o)throw new Error("header name must be a non-empty string");const r=Fo.default.findKey(i,o);(!r||void 0===i[r]||!0===n||void 0===n&&!1!==i[r])&&(i[r||t]=ta(e))}const r=(e,t)=>Fo.default.forEach(e,((e,n)=>o(e,n,t)));return Fo.default.isPlainObject(e)||e instanceof this.constructor?r(e,t):Fo.default.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?r(Qs(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ea(e)){const n=Fo.default.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(Fo.default.isFunction(t))return t.call(this,e,n);if(Fo.default.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ea(e)){const n=Fo.default.findKey(this,e);return!(!n||t&&!na(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function o(e){if(e=ea(e)){const o=Fo.default.findKey(n,e);!o||t&&!na(0,n[o],o,t)||(delete n[o],i=!0)}}return Fo.default.isArray(e)?e.forEach(o):o(e),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return Fo.default.forEach(this,((i,o)=>{const r=Fo.default.findKey(n,o);if(r)return t[r]=ta(i),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=ta(i),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Fo.default.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&Fo.default.isArray(n)?n.join(", "):n)})),t}[ia](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[oa](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[Zs]=this[Zs]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=ea(e);t[i]||(!function(e,t){const n=Fo.default.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,o){return this[i].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[i]=!0)}return Fo.default.isArray(e)?e.forEach(i):i(e),this}constructor(e){e&&this.set(e)}}ra.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),Fo.default.freezeMethods(ra.prototype),Fo.default.freezeMethods(ra);var sa=ra;function aa(e,t){const n=this||Gs,i=t||n,o=sa.from(i.headers);let r=i.data;return Fo.default.forEach(e,(function(e){r=e.call(n,r,o.normalize(),t?t.status:void 0)})),o.normalize(),r}function la(e){return!(!e||!e.__CANCEL__)}function ca(e,t,n){br.call(this,null==e?"canceled":e,br.ERR_CANCELED,t,n),this.name="CanceledError"}Fo.default.inherits(ca,br,{__CANCEL__:!0});var ua=ca;function ha(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new br("Request failed with status code "+n.status,[br.ERR_BAD_REQUEST,br.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var da=$s.isStandardBrowserEnv?{write:function(e,t,n,i,o,r){const s=[];s.push(e+"="+encodeURIComponent(t)),Fo.default.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),Fo.default.isString(i)&&s.push("path="+i),Fo.default.isString(o)&&s.push("domain="+o),!0===r&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function fa(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function pa(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?fa(e,t):t}var ma=$s.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=Fo.default.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ga(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var ya=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let o,r=0,s=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=i[s];o||(o=l),n[r]=a,i[r]=l;let u=s,h=0;for(;u!==r;)h+=n[u++],u%=e;if(r=(r+1)%e,r===s&&(s=(s+1)%e),l-o<t)return;const d=c&&l-c;return d?Math.round(1e3*h/d):void 0}};function _a(e,t){let n=0;const i=ya(50,250);return o=>{const r=o.loaded,s=o.lengthComputable?o.total:void 0,a=r-n,l=i(a);n=r;const c={loaded:r,total:s,progress:s?r/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&r<=s?(s-r)/l:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}var va="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const o=sa.from(e.headers).normalize(),r=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}Fo.default.isFormData(i)&&$s.isStandardBrowserEnv&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const c=pa(e.baseURL,e.url);function u(){if(!l)return;const i=sa.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());ha((function(e){t(e),a()}),(function(e){n(e),a()}),{data:r&&"text"!==r&&"json"!==r?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:i,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),Bs(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new br("Request aborted",br.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new br("Network Error",br.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||qs;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new br(t,i.clarifyTimeoutError?br.ETIMEDOUT:br.ECONNABORTED,e,l)),l=null},$s.isStandardBrowserEnv){const t=(e.withCredentials||ma(c))&&e.xsrfCookieName&&da.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===i&&o.setContentType(null),"setRequestHeader"in l&&Fo.default.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),Fo.default.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),r&&"json"!==r&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",_a(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",_a(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new ua(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const h=ga(c);h&&-1===$s.protocols.indexOf(h)?n(new br("Unsupported protocol "+h+":",br.ERR_BAD_REQUEST,e)):l.send(i||null)}))};const wa={http:null,xhr:va};Fo.default.forEach(wa,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var ba={getAdapter:e=>{e=Fo.default.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let o=0;o<t&&(n=e[o],!(i=Fo.default.isString(n)?wa[n.toLowerCase()]:n));o++);if(!i){if(!1===i)throw new br(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Fo.default.hasOwnProp(wa,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!Fo.default.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:wa};function Ca(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ua}function Ia(e){Ca(e),e.headers=sa.from(e.headers),e.data=aa.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ba.getAdapter(e.adapter||Gs.adapter)(e).then((function(t){return Ca(e),t.data=aa.call(e,e.transformResponse,t),t.headers=sa.from(t.headers),t}),(function(t){return la(t)||(Ca(e),t&&t.response&&(t.response.data=aa.call(e,e.transformResponse,t.response),t.response.headers=sa.from(t.response.headers))),Promise.reject(t)}))}const Ea=e=>e instanceof sa?e.toJSON():e;function ka(e,t){t=t||{};const n={};function i(e,t,n){return Fo.default.isPlainObject(e)&&Fo.default.isPlainObject(t)?Fo.default.merge.call({caseless:n},e,t):Fo.default.isPlainObject(t)?Fo.default.merge({},t):Fo.default.isArray(t)?t.slice():t}function o(e,t,n){return Fo.default.isUndefined(t)?Fo.default.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function r(e,t){if(!Fo.default.isUndefined(t))return i(void 0,t)}function s(e,t){return Fo.default.isUndefined(t)?Fo.default.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,o,r){return r in t?i(n,o):r in e?i(void 0,n):void 0}const l={url:r,method:r,data:r,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Ea(e),Ea(t),!0)};return Fo.default.forEach(Object.keys(e).concat(Object.keys(t)),(function(i){const r=l[i]||o,s=r(e[i],t[i],i);Fo.default.isUndefined(s)&&r!==a||(n[i]=s)})),n}const Ta="1.2.0",xa={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{xa[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Sa={};xa.transitional=function(e,t,n){function i(e,t){return"[Axios v1.2.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,r)=>{if(!1===e)throw new br(i(o," has been removed"+(t?" in "+t:"")),br.ERR_DEPRECATED);return t&&!Sa[o]&&(Sa[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,r)}};var Na={assertOptions:function(e,t,n){if("object"!=typeof e)throw new br("options must be an object",br.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let o=i.length;for(;o-- >0;){const r=i[o],s=t[r];if(s){const t=e[r],n=void 0===t||s(t,r,e);if(!0!==n)throw new br("option "+r+" must be "+n,br.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new br("Unknown option "+r,br.ERR_BAD_OPTION)}},validators:xa};const Oa=Na.validators;class Ra{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ka(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:o}=t;let r;void 0!==n&&Na.assertOptions(n,{silentJSONParsing:Oa.transitional(Oa.boolean),forcedJSONParsing:Oa.transitional(Oa.boolean),clarifyTimeoutError:Oa.transitional(Oa.boolean)},!1),void 0!==i&&Na.assertOptions(i,{encode:Oa.function,serialize:Oa.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),r=o&&Fo.default.merge(o.common,o[t.method]),r&&Fo.default.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=sa.concat(r,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[Ia.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);h<u;)c=c.then(e[h++],e[h++]);return c}u=s.length;let d=t;for(h=0;h<u;){const e=s[h++],t=s[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{c=Ia.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=l.length;h<u;)c=c.then(l[h++],l[h++]);return c}getUri(e){return Bs(pa((e=ka(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new js,response:new js}}}Fo.default.forEach(["delete","get","head","options"],(function(e){Ra.prototype[e]=function(t,n){return this.request(ka(n||{},{method:e,url:t,data:(n||{}).data}))}})),Fo.default.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,o){return this.request(ka(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}Ra.prototype[e]=t(),Ra.prototype[e+"Form"]=t(!0)}));var Pa=Ra;class Aa{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Aa((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,o){n.reason||(n.reason=new ua(e,i,o),t(n.reason))}))}}var La=Aa;const Da=function e(t){const n=new Pa(t),i=Uo(Pa.prototype.request,n);return Fo.default.extend(i,Pa.prototype,n,{allOwnKeys:!0}),Fo.default.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(ka(t,n))},i}(Gs);Da.Axios=Pa,Da.CanceledError=ua,Da.CancelToken=La,Da.isCancel=la,Da.VERSION=Ta,Da.toFormData=As,Da.AxiosError=br,Da.Cancel=Da.CanceledError,Da.all=function(e){return Promise.all(e)},Da.spread=function(e){return function(t){return e.apply(null,t)}},Da.isAxiosError=function(e){return Fo.default.isObject(e)&&!0===e.isAxiosError},Da.AxiosHeaders=sa,Da.formToJSON=e=>Vs(Fo.default.isHTMLForm(e)?new FormData(e):e),Da.default=Da;var Ma=Da;const{Axios:Fa,AxiosError:Ua,CanceledError:Ba,isCancel:ja,CancelToken:qa,VERSION:Wa,all:za,Cancel:Ha,isAxiosError:$a,spread:Ya,toFormData:Va,AxiosHeaders:Xa,formToJSON:Ka}=Ma;var Ga=new WeakMap,Ja=new WeakMap;var Qa=class{async fetchWithAllFilmsData({mediaType:e,timeWindow:n}){return await Ma.get(`trending/${e}/${n}?api_key=${t(Co)(this,Ga)}&page=${this.page}`,this.config)}async getAllFilmsData({mediaType:e="movie",timeWindow:n="day"}){try{const i=await this.fetchWithAllFilmsData({mediaType:e,timeWindow:n});return t(No)(this,Ja,i.data.total_pages),i}catch(e){console.log(e)}}async fetchWithCurrentFilm({mediaType:e,id:n}){return await Ma.get(`${e}/${n}?api_key=${t(Co)(this,Ga)} `,this.config)}async getCurrentFilm({mediaType:e="movie",id:t}){try{return await this.fetchWithCurrentFilm({mediaType:e,id:t})}catch(e){console.log(e)}}async fetchFilmTrailerById({mediaType:e,id:n}){return await Ma.get(`${e}/${n}/videos?api_key=${t(Co)(this,Ga)} `,this.config)}async getFilmTrailerById({mediaType:e="movie",id:t}){try{return await this.fetchFilmTrailerById({mediaType:e,id:t})}catch(e){console.log(e)}}async fetchWithSearchFilmData({mediaType:e,lang:n,page:i,include_adult:o}){return await Ma.get(`search/${e}?api_key=${t(Co)(this,Ga)}&language=${n}&query=${this.query}&page=${i}&include_adult=${o}`,this.config)}async fetchGenresList({mediaType:e,genreType:n,page:i}){return await Ma.get(`genre/${e}/${n}?api_key=${t(Co)(this,Ga)}&page=${i}`,this.config)}async getGenresList({mediaType:e="movie",genreType:t="list",page:n="1"}){try{return await this.fetchGenresList({mediaType:e,genreType:t,page:n})}catch(e){console.log(e)}}async getSearchFilmsData({mediaType:e="movie",lang:t="en-US",page:n=1,include_adult:i=!1}){try{return await this.fetchWithSearchFilmData({mediaType:e,lang:t,page:n,include_adult:i})}catch(e){console.log(e)}}incrementPage({step:e=1}){this.page+=e}get actualPage(){return this.page}set actualPage(e){this.page=e}get actualQuery(){return this.query}set actualQuery(e){return this.query=e.trim()}get totalPages(){return t(Co)(this,Ja)}set totalPages(e){t(No)(this,Ja,e)}constructor(e={baseURL:"https://api.themoviedb.org/3/"}){t(To)(this,Ga,{writable:!0,value:void 0}),t(To)(this,Ja,{writable:!0,value:void 0}),this.query="",this.config=e,t(No)(this,Ga,"76cbb606f190fc237086ec33f1fd98a3"),this.page=1,t(No)(this,Ja,null)}},Za={};function el(e){const t=e.find((e=>"Trailer"===e.type));return void 0===t?e[0]:t}Za=function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var l=void 0;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}};t[s][0].call(u.exports,(function(e){return o(t[s][1][e]||e)}),u,u.exports,e,t,n,i)}return n[s].exports}for(var r=void 0,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n=function(e,t){var n=i('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return r.appendChild(e)}));var s=o(r,"IMG"),a=o(r,"VIDEO"),l=o(r,"IFRAME");return!0===s&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(i(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),s=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&s()}));var a={element:function(){return n},visible:function(){return r(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:s};return a}},{}]},{},[1])(1);const tl=new Qa,nl=new bo;async function il(e){const t=e.currentTarget.dataset.id,n=(await tl.getFilmTrailerById({id:t})).data.results;if(0===n.length){const s=Za.create(nl.createModalWithoutFilmTrailer());function i(e){"Escape"===e.code&&s.close()}return s.show(),void document.addEventListener("keydown",i,{once:!0})}const o=el(n),r=Za.create(nl.createModalFilmTrailer(o.key));function i(e){"Escape"===e.code&&r.close()}r.show(),document.addEventListener("keydown",i,{once:!0})}function ol({poster_path:e,title:t,vote_average:n,vote_count:i,popularity:o,genres:r,overview:s}){const a=r[0].name,l=Number.isInteger(n)?String(n):n.toFixed(1),c=l.includes(".0")?l.replace(".0",""):l,u=Number.isInteger(o)?String(o):o.toFixed(1);return{poster_path:e,title:t,fixedGenres:a,vote_count:i,fixedVote:c,fixedPopularity:u.includes(".0")?u.replace(".0",""):u,overview:s}}const rl=new Qa,sl=new bo;let al="";const ll="@firebase/database",cl="0.14.0";
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
 */let ul="";
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
class hl{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),G(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:K(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class dl{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ee(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const fl=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new hl(t)}}catch(e){}return new dl},pl=fl("localStorage"),ml=fl("sessionStorage"),gl=new Se("@firebase/database"),yl=function(){let e=1;return function(){return e++}}(),_l=function(e){const t=pe(e),n=new ce;n.update(t);const i=n.digest();return T.encodeByteArray(i)},vl=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=vl.apply(null,i):t+="object"==typeof i?G(i):i,t+=" "}return t};let wl=null,bl=!0;const Cl=function(e,t){I(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(gl.logLevel=Ce.VERBOSE,wl=gl.log.bind(gl),t&&ml.set("logging_enabled",!0)):"function"==typeof e?wl=e:(wl=null,ml.remove("logging_enabled"))},Il=function(...e){if(!0===bl&&(bl=!1,null===wl&&!0===ml.get("logging_enabled")&&Cl(!0)),wl){const t=vl.apply(null,e);wl(t)}},El=function(e){return function(...t){Il(e,...t)}},kl=function(...e){const t="FIREBASE INTERNAL ERROR: "+vl(...e);gl.error(t)},Tl=function(...e){const t=`FIREBASE FATAL ERROR: ${vl(...e)}`;throw gl.error(t),new Error(t)},xl=function(...e){const t="FIREBASE WARNING: "+vl(...e);gl.warn(t)},Sl=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Nl="[MIN_NAME]",Ol="[MAX_NAME]",Rl=function(e,t){if(e===t)return 0;if(e===Nl||t===Ol)return-1;if(t===Nl||e===Ol)return 1;{const n=Bl(e),i=Bl(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Pl=function(e,t){return e===t?0:e<t?-1:1},Al=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+G(t))},Ll=function(e){if("object"!=typeof e||null===e)return G(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=G(t[i]),n+=":",n+=Ll(e[t[i]]);return n+="}",n},Dl=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let o=0;o<n;o+=t)o+t>n?i.push(e.substring(o,n)):i.push(e.substring(o,o+t));return i};function Ml(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Fl=function(e){I(!Sl(e),"Invalid JSON number");const t=1023;let n,i,o,r,s;0===e?(i=0,o=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,o=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,o=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(s=11;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Ul=new RegExp("^-?(0*)\\d{1,10}$"),Bl=function(e){if(Ul.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},jl=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw xl("Exception was thrown by user callback.",t),e}),Math.floor(0))}},ql=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class Wl{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){xl(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class zl{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Il("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xl(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Hl{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Hl.OWNER="owner";
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
const $l="5",Yl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Vl="ac",Xl="websocket",Kl="long_polling";
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
class Gl{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pl.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,i,o=!1,r="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=o,this.persistenceKey=r,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pl.get("host:"+e)||this._host}}function Jl(e,t,n){let i;if(I("string"==typeof t,"typeof type must == string"),I("object"==typeof n,"typeof params must == object"),t===Xl)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Kl)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const o=[];return Ml(n,((e,t)=>{o.push(e+"="+t)})),i+o.join("&")}
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
 */class Ql{incrementCounter(e,t=1){ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return O(this.counters_)}constructor(){this.counters_={}}}
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
 */const Zl={},ec={};function tc(e){const t=e.toString();return Zl[t]||(Zl[t]=new Ql),Zl[t]}
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
class nc{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&jl((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */const ic="start";class oc{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new nc(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(F()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new rc(((...e)=>{const[t,n,i,o,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ic)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[ic]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=$l,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Vl]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Yl.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oc.forceAllow_=!0}static forceDisallow(){oc.forceDisallow_=!0}static isAvailable(){return!F()&&(!!oc.forceAllow_||!(oc.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=G(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=x(t),i=Dl(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(F())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=G(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,i,o,r,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=o,this.transportSessionId=r,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=El(e),this.stats_=tc(t),this.urlFn=e=>(this.appCheckToken&&(e[Vl]=this.appCheckToken),Jl(t,Kl,e))}}class rc{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Il("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){F()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Il("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,F())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=yl(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=rc.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Il("frame writing exception"),e.stack&&Il(e.stack),Il(e)}}}}
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
 */let sc=null;"undefined"!=typeof MozWebSocket?sc=MozWebSocket:"undefined"!=typeof WebSocket&&(sc=WebSocket);class ac{static connectionURL_(e,t,n,i,o){const r={};return r.v=$l,!F()&&"undefined"!=typeof location&&location.hostname&&Yl.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[Vl]=i),o&&(r.p=o),Jl(e,Xl,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pl.set("previous_websocket_failure",!0);try{let e;if(F()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${$l}/${ul}/${r.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new sc(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){ac.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==sc&&!ac.forceDisallow_}static previouslyFailed(){return pl.isInMemoryStorage||!0===pl.get("previous_websocket_failure")}markConnectionHealthy(){pl.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=K(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=G(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Dl(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,i,o,r,s){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=El(this.connId),this.stats_=tc(t),this.connURL=ac.connectionURL_(t,r,s,i,n),this.nodeAdmin=t.nodeAdmin}}ac.responsesRequiredToBeHealthy=2,ac.healthyTimeout=3e4;
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
class lc{static get ALL_TRANSPORTS(){return[oc,ac]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ac&&ac.isAvailable();let n=t&&!ac.previouslyFailed();if(e.webSocketOnly&&(t||xl("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[ac];else{const e=this.transports_=[];for(const t of lc.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);lc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}lc.globalTransportInitialized_=!1;class cc{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ql((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Al("t",e),n=Al("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Al("t",e),n=Al("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Al("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?kl("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$l!==n&&xl("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ql((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ql((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pl.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,i,o,r,s,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=o,this.onMessage_=r,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=El("c:"+this.id+":"),this.transportManager_=new lc(t),this.log_("Connection created"),this.start_()}}
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
 */class uc{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class hc{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){I(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class dc extends hc{static getInstance(){return new dc}getInitialEvent(e){return I("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||A()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class fc{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function pc(){return new fc("")}function mc(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function gc(e){return e.pieces_.length-e.pieceNum_}function yc(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new fc(e.pieces_,t)}function _c(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function vc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function wc(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new fc(t,0)}function bc(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof fc)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new fc(n,0)}function Cc(e){return e.pieceNum_>=e.pieces_.length}function Ic(e,t){const n=mc(e),i=mc(t);if(null===n)return t;if(n===i)return Ic(yc(e),yc(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ec(e,t){if(gc(e)!==gc(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function kc(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(gc(e)>gc(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Tc{constructor(e,t){this.errorPrefix_=t,this.parts_=vc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=me(this.parts_[e]);xc(this)}}function xc(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Sc(e))}function Sc(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Nc extends hc{static getInstance(){return new Nc}getInitialEvent(e){return I("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */const Oc=1e3;class Rc extends uc{sendRequest(e,t,n){const i=++this.requestNumber_,o={r:i,a:e,b:t};this.log_(G(o)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new H,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const o=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+o),this.listens.has(r)||this.listens.set(r,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(r).has(o),"listen() called twice for same path/queryId.");const s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(o,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const o={p:n};e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(o=>{const r=o.d,s=o.s;Rc.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",o),"ok"!==s&&this.removeListen_(n,i),e.onComplete&&e.onComplete(s,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ee(e,"w")){const n=te(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();xl(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Z(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Q(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const o={p:e};i&&(o.q=n,o.t=i),this.sendRequest("n",o)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const o={p:t,d:n};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,o){this.initConnection_();const r={p:t,d:n};void 0!==o&&(r.h=o),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+G(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):kl("Unrecognized action received from server: "+G(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Oc),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Rc.nextConnectionId_++,o=this.lastSessionId;let r=!1,s=null;const a=function(){s?s.close():(r=!0,n())},l=function(e){I(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?Il("getToken() completed but was canceled"):(Il("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,s=new cc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{xl(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),o))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&xl(e),a())}}}interrupt(e){Il("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Il("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ne(this.interruptReasons_)&&(this.reconnectDelay_=Oc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ll(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new fc(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Il("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Il("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";F()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ul.replace(/\./g,"-")]=1,A()?e["framework.cordova"]=1:D()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=dc.getInstance().currentlyOnline();return ne(this.interruptReasons_)&&e}constructor(e,t,n,i,o,r,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=o,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=Rc.nextPersistentConnectionId_++,this.log_=El("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oc,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!F())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nc.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&dc.getInstance().on("online",this.onOnline_,this)}}Rc.nextPersistentConnectionId_=0,Rc.nextConnectionId_=0;
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
class Pc{static Wrap(e,t){return new Pc(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class Ac{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Pc(Nl,e),i=new Pc(Nl,t);return 0!==this.compare(n,i)}minPost(){return Pc.MIN}}
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
 */let Lc;class Dc extends Ac{static get __EMPTY_NODE(){return Lc}static set __EMPTY_NODE(e){Lc=e}compare(e,t){return Rl(e.name,t.name)}isDefinedOn(e){throw E("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Pc.MIN}maxPost(){return new Pc(Ol,Lc)}makePost(e,t){return I("string"==typeof e,"KeyIndex indexValue must always be a string."),new Pc(e,Lc)}toString(){return".key"}}const Mc=new Dc;
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
 */class Fc{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,i,o=null){this.isReverse_=i,this.resultGenerator_=o,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Uc{copy(e,t,n,i,o){return new Uc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=o?o:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const o=n(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===o?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bc.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Bc.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Uc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Uc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,i,o){this.key=e,this.value=t,this.color=null!=n?n:Uc.RED,this.left=null!=i?i:Bc.EMPTY_NODE,this.right=null!=o?o:Bc.EMPTY_NODE}}Uc.RED=!0,Uc.BLACK=!1;class Bc{insert(e,t){return new Bc(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Uc.BLACK,null,null))}remove(e){return new Bc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Uc.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fc(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Bc.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function jc(e,t){return Rl(e.name,t.name)}function qc(e,t){return Rl(e,t)}
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
 */let Wc;Bc.EMPTY_NODE=new class{copy(e,t,n,i,o){return this}insert(e,t,n){return new Uc(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const zc=function(e){return"number"==typeof e?"number:"+Fl(e):"string:"+e},Hc=function(e){if(e.isLeafNode()){const t=e.val();I("string"==typeof t||"number"==typeof t||"object"==typeof t&&ee(t,".sv"),"Priority must be a string or number.")}else I(e===Wc||e.isEmpty(),"priority of unexpected type.");I(e===Wc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let $c,Yc,Vc;class Xc{static set __childrenNodeConstructor(e){$c=e}static get __childrenNodeConstructor(){return $c}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Xc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Cc(e)?this:".priority"===mc(e)?this.priorityNode_:Xc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Xc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=mc(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(I(".priority"!==n||1===gc(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Xc.__childrenNodeConstructor.EMPTY_NODE.updateChild(yc(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Fl(this.value_):this.value_,this.lazyHash_=_l(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xc.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Xc.VALUE_TYPE_ORDER.indexOf(t),o=Xc.VALUE_TYPE_ORDER.indexOf(n);return I(i>=0,"Unknown leaf type: "+t),I(o>=0,"Unknown leaf type: "+n),i===o?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Xc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Hc(this.priorityNode_)}}Xc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Kc=new class extends Ac{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),o=n.compareTo(i);return 0===o?Rl(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Pc.MIN}maxPost(){return new Pc(Ol,new Xc("[PRIORITY-POST]",Vc))}makePost(e,t){const n=Yc(e);return new Pc(t,new Xc("[PRIORITY-POST]",n))}toString(){return".priority"}},Gc=Math.log(2);
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
 */class Jc{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Gc,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}}const Qc=function(e,t,n,i){e.sort(t);const o=function(t,i){const r=i-t;let s,a;if(0===r)return null;if(1===r)return s=e[t],a=n?n(s):s,new Uc(a,s.node,Uc.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=o(t,l),u=o(l+1,i);return s=e[l],a=n?n(s):s,new Uc(a,s.node,Uc.BLACK,c,u)}},r=function(t){let i=null,r=null,s=e.length;const a=function(t,i){const r=s-t,a=s;s-=t;const c=o(r+1,a),u=e[r],h=n?n(u):u;l(new Uc(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Uc.BLACK):(a(i,Uc.BLACK),a(i,Uc.RED))}return r}(new Jc(e.length));return new Bc(i||t,r)};
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
 */let Zc;const eu={};class tu{static get Default(){return I(eu&&Kc,"ChildrenNode.ts has not been loaded"),Zc=Zc||new tu({".priority":eu},{".priority":Kc}),Zc}get(e){const t=te(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Bc?t:null}hasIndex(e){return ee(this.indexSet_,e.toString())}addIndex(e,t){I(e!==Mc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const o=t.getIterator(Pc.Wrap);let r,s=o.getNext();for(;s;)i=i||e.isDefinedOn(s.node),n.push(s),s=o.getNext();r=i?Qc(n,e.getCompare()):eu;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new tu(c,l)}addToIndexes(e,t){const n=ie(this.indexes_,((n,i)=>{const o=te(this.indexSet_,i);if(I(o,"Missing index implementation for "+i),n===eu){if(o.isDefinedOn(e.node)){const n=[],i=t.getIterator(Pc.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Qc(n,o.getCompare())}return eu}{const i=t.get(e.name);let o=n;return i&&(o=o.remove(new Pc(e.name,i))),o.insert(e,e.node)}}));return new tu(n,this.indexSet_)}removeFromIndexes(e,t){const n=ie(this.indexes_,(n=>{if(n===eu)return n;{const i=t.get(e.name);return i?n.remove(new Pc(e.name,i)):n}}));return new tu(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let nu;class iu{static get EMPTY_NODE(){return nu||(nu=new iu(new Bc(qc),null,tu.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nu}updatePriority(e){return this.children_.isEmpty()?this:new iu(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?nu:t}}getChild(e){const t=mc(e);return null===t?this:this.getImmediateChild(t).getChild(yc(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Pc(e,t);let i,o;t.isEmpty()?(i=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?nu:this.priorityNode_;return new iu(i,r,o)}}updateChild(e,t){const n=mc(e);if(null===n)return t;{I(".priority"!==mc(e)||1===gc(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(yc(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,o=!0;if(this.forEachChild(Kc,((r,s)=>{t[r]=s.val(e),n++,o&&iu.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):o=!1})),!e&&o&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+zc(this.getPriority().val())+":"),this.forEachChild(Kc,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":_l(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Pc(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Pc(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Pc(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Pc.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Pc.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ou?-1:0}withIndex(e){if(e===Mc||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new iu(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Mc||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Kc),n=t.getIterator(Kc);let i=e.getNext(),o=n.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=e.getNext(),o=n.getNext()}return null===i&&null===o}return!1}return!1}}resolveIndex_(e){return e===Mc?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Hc(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}iu.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ou=new class extends iu{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return iu.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Bc(qc),iu.EMPTY_NODE,tu.Default)}};Object.defineProperties(Pc,{MIN:{value:new Pc(Nl,iu.EMPTY_NODE)},MAX:{value:new Pc(Ol,ou)}}),Dc.__EMPTY_NODE=iu.EMPTY_NODE,Xc.__childrenNodeConstructor=iu,Wc=ou,function(e){Vc=e}(ou);function ru(e,t=null){if(null===e)return iu.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),I(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Xc(e,ru(t))}if(e instanceof Array){let n=iu.EMPTY_NODE;return Ml(e,((t,i)=>{if(ee(e,t)&&"."!==t.substring(0,1)){const e=ru(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ru(t))}{const n=[];let i=!1;if(Ml(e,((e,t)=>{if("."!==e.substring(0,1)){const o=ru(t);o.isEmpty()||(i=i||!o.getPriority().isEmpty(),n.push(new Pc(e,o)))}})),0===n.length)return iu.EMPTY_NODE;const o=Qc(n,jc,(e=>e.name),qc);if(i){const e=Qc(n,Kc.getCompare());return new iu(o,ru(t),new tu({".priority":e},{".priority":Kc}))}return new iu(o,ru(t),tu.Default)}}!function(e){Yc=e}(ru);
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
class su extends Ac{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),o=n.compareTo(i);return 0===o?Rl(e.name,t.name):o}makePost(e,t){const n=ru(e),i=iu.EMPTY_NODE.updateChild(this.indexPath_,n);return new Pc(t,i)}maxPost(){const e=iu.EMPTY_NODE.updateChild(this.indexPath_,ou);return new Pc(Ol,e)}toString(){return vc(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,I(!Cc(e)&&".priority"!==mc(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const au=new class extends Ac{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Rl(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Pc.MIN}maxPost(){return Pc.MAX}makePost(e,t){const n=ru(e);return new Pc(t,n)}toString(){return".value"}};
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
 */function lu(e){return{type:"value",snapshotNode:e}}function cu(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function uu(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function hu(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class du{updateChild(e,t,n,i,o,r){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(t);return s.getChild(i).equals(n.getChild(i))&&s.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(uu(t,s)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?r.trackChildChange(cu(t,n)):r.trackChildChange(hu(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Kc,((e,i)=>{t.hasChild(e)||n.trackChildChange(uu(e,i))})),t.isLeafNode()||t.forEachChild(Kc,((t,i)=>{if(e.hasChild(t)){const o=e.getImmediateChild(t);o.equals(i)||n.trackChildChange(hu(t,i,o))}else n.trackChildChange(cu(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?iu.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}constructor(e){this.index_=e}}
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
 */class fu{getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,o,r){return this.matches(new Pc(t,n))||(n=iu.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,o,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=iu.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(iu.EMPTY_NODE);const o=this;return t.forEachChild(Kc,((e,t)=>{o.matches(new Pc(e,t))||(i=i.updateImmediateChild(e,iu.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}constructor(e){this.indexedFilter_=new du(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fu.getStartPost_(e),this.endPost_=fu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
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
 */class pu{updateChild(e,t,n,i,o,r){return this.rangedFilter_.matches(new Pc(t,n))||(n=iu.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,o,r):this.fullLimitUpdateChild_(e,t,n,o,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=iu.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=iu.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(iu.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,iu.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,o){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const s=e;I(s.numChildren()===this.limit_,"");const a=new Pc(t,n),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(s.hasChild(t)){const e=s.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||s.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:r(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=o&&o.trackChildChange(hu(t,n,e)),s.updateImmediateChild(t,n);{null!=o&&o.trackChildChange(uu(t,e));const n=s.updateImmediateChild(t,iu.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=o&&o.trackChildChange(cu(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&r(l,a)>=0?(null!=o&&(o.trackChildChange(uu(l.name,l.node)),o.trackChildChange(cu(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(l.name,iu.EMPTY_NODE)):e}constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new fu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}}
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
 */class mu{hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Nl}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ol}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Kc}copy(){const e=new mu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Kc}}function gu(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Kc?n="$priority":e.index_===au?n="$value":e.index_===Mc?n="$key":(I(e.index_ instanceof su,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=G(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=G(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+G(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=G(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+G(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function yu(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Kc&&(t.i=e.index_.toString()),t}
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
 */class _u extends uc{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const r=_u.getListenId_(e,n),s={};this.listens_[r]=s;const a=gu(e._queryParams);this.restRequest_(o+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(o,a,!1,n),te(this.listens_,r)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=_u.getListenId_(e,t);delete this.listens_[n]}get(e){const t=gu(e._queryParams),n=e._path.toString(),i=new H;return this.restRequest_(n+".json",t,((e,t)=>{let o=t;404===e&&(o=null,e=null),null===e?(this.onDataUpdate_(n,o,!1,null),i.resolve(o)):i.reject(new Error(o))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,o])=>{i&&i.accessToken&&(t.auth=i.accessToken),o&&o.token&&(t.ac=o.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+se(t);this.log_("Sending REST request for "+r);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+r+" received. status:",s.status,"response:",s.responseText);let e=null;if(s.status>=200&&s.status<300){try{e=K(s.responseText)}catch(e){xl("Failed to parse JSON response for "+r+": "+s.responseText)}n(null,e)}else 401!==s.status&&404!==s.status&&xl("Got unsuccessful REST response for "+r+" Status: "+s.status),n(s.status);n=null}},s.open("GET",r,!0),s.send()}))}constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=El("p:rest:"),this.listens_={}}}
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
 */class vu{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=iu.EMPTY_NODE}}
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
 */function wu(){return{value:null,children:new Map}}function bu(e,t,n){if(Cc(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=mc(t);e.children.has(i)||e.children.set(i,wu());bu(e.children.get(i),t=yc(t),n)}}function Cu(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{Cu(i,new fc(t.toString()+"/"+e),n)}))}class Iu{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ml(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class Eu{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ml(e,((e,i)=>{i>0&&ee(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),ql(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Iu(e);const n=1e4+2e4*Math.random();ql(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var ku,Tu;function xu(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Tu=ku||(ku={}))[Tu.OVERWRITE=0]="OVERWRITE",Tu[Tu.MERGE=1]="MERGE",Tu[Tu.ACK_USER_WRITE=2]="ACK_USER_WRITE",Tu[Tu.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Su{operationForChild(e){if(Cc(this.path)){if(null!=this.affectedTree.value)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new fc(e));return new Su(pc(),t,this.revert)}}return I(mc(this.path)===e,"operationForChild called for unrelated child."),new Su(yc(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=ku.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
 */class Nu{operationForChild(e){return Cc(this.path)?new Nu(this.source,pc()):new Nu(this.source,yc(this.path))}constructor(e,t){this.source=e,this.path=t,this.type=ku.LISTEN_COMPLETE}}
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
 */class Ou{operationForChild(e){return Cc(this.path)?new Ou(this.source,pc(),this.snap.getImmediateChild(e)):new Ou(this.source,yc(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=ku.OVERWRITE}}
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
 */class Ru{operationForChild(e){if(Cc(this.path)){const t=this.children.subtree(new fc(e));return t.isEmpty()?null:t.value?new Ou(this.source,pc(),t.value):new Ru(this.source,pc(),t)}return I(mc(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ru(this.source,yc(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=ku.MERGE}}
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
 */class Pu{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Cc(e))return this.isFullyInitialized()&&!this.filtered_;const t=mc(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */class Au{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lu(e,t,n,i,o,r){const s=i.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw E("Should only compare child_ events.");const i=new Pc(t.childName,t.snapshotNode),o=new Pc(n.childName,n.snapshotNode);return e.index_.compare(i,o)}
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
 */(e,t,n))),s.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);o.forEach((o=>{o.respondsTo(n.type)&&t.push(o.createEvent(i,e.query_))}))}))}function Du(e,t){return{eventCache:e,serverCache:t}}function Mu(e,t,n,i){return Du(new Pu(t,n,i),e.serverCache)}function Fu(e,t,n,i){return Du(e.eventCache,new Pu(t,n,i))}function Uu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Bu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let ju;class qu{static fromObject(e){let t=new qu(null);return Ml(e,((e,n)=>{t=t.set(new fc(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:pc(),value:this.value};if(Cc(e))return null;{const n=mc(e),i=this.children.get(n);if(null!==i){const o=i.findRootMostMatchingPathAndValue(yc(e),t);if(null!=o){return{path:bc(new fc(n),o.path),value:o.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Cc(e))return this;{const t=mc(e),n=this.children.get(t);return null!==n?n.subtree(yc(e)):new qu(null)}}set(e,t){if(Cc(e))return new qu(t,this.children);{const n=mc(e),i=(this.children.get(n)||new qu(null)).set(yc(e),t),o=this.children.insert(n,i);return new qu(this.value,o)}}remove(e){if(Cc(e))return this.children.isEmpty()?new qu(null):new qu(null,this.children);{const t=mc(e),n=this.children.get(t);if(n){const i=n.remove(yc(e));let o;return o=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&o.isEmpty()?new qu(null):new qu(this.value,o)}return this}}get(e){if(Cc(e))return this.value;{const t=mc(e),n=this.children.get(t);return n?n.get(yc(e)):null}}setTree(e,t){if(Cc(e))return t;{const n=mc(e),i=(this.children.get(n)||new qu(null)).setTree(yc(e),t);let o;return o=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new qu(this.value,o)}}fold(e){return this.fold_(pc(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,o)=>{n[i]=o.fold_(bc(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,pc(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Cc(e))return null;{const i=mc(e),o=this.children.get(i);return o?o.findOnPath_(yc(e),bc(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,pc(),t)}foreachOnPath_(e,t,n){if(Cc(e))return this;{this.value&&n(t,this.value);const i=mc(e),o=this.children.get(i);return o?o.foreachOnPath_(yc(e),bc(t,i),n):new qu(null)}}foreach(e){this.foreach_(pc(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(bc(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(ju||(ju=new Bc(Pl)),ju))()){this.value=e,this.children=t}}
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
 */class Wu{static empty(){return new Wu(new qu(null))}constructor(e){this.writeTree_=e}}function zu(e,t,n){if(Cc(t))return new Wu(new qu(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const o=i.path;let r=i.value;const s=Ic(o,t);return r=r.updateChild(s,n),new Wu(e.writeTree_.set(o,r))}{const i=new qu(n),o=e.writeTree_.setTree(t,i);return new Wu(o)}}}function Hu(e,t,n){let i=e;return Ml(n,((e,n)=>{i=zu(i,bc(t,e),n)})),i}function $u(e,t){if(Cc(t))return Wu.empty();{const n=e.writeTree_.setTree(t,new qu(null));return new Wu(n)}}function Yu(e,t){return null!=Vu(e,t)}function Vu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ic(n.path,t)):null}function Xu(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Kc,((e,n)=>{t.push(new Pc(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Pc(e,n.value))})),t}function Ku(e,t){if(Cc(t))return e;{const n=Vu(e,t);return new Wu(null!=n?new qu(n):e.writeTree_.subtree(t))}}function Gu(e){return e.writeTree_.isEmpty()}function Ju(e,t){return Qu(pc(),e.writeTree_,t)}function Qu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,o)=>{".priority"===t?(I(null!==o.value,"Priority writes must always be leaf nodes"),i=o.value):n=Qu(bc(e,t),o,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(bc(e,".priority"),i)),n}}
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
 */function Zu(e,t){return dh(t,e)}function eh(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));I(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let o=i.visible,r=!1,s=e.allWrites.length-1;for(;o&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&th(t,i.path)?o=!1:kc(i.path,t.path)&&(r=!0)),s--}if(o){if(r)return function(e){e.visibleWrites=ih(e.allWrites,nh,pc()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=$u(e.visibleWrites,i.path);else{Ml(i.children,(t=>{e.visibleWrites=$u(e.visibleWrites,bc(i.path,t))}))}return!0}return!1}function th(e,t){if(e.snap)return kc(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&kc(bc(e.path,n),t))return!0;return!1}function nh(e){return e.visible}function ih(e,t,n){let i=Wu.empty();for(let o=0;o<e.length;++o){const r=e[o];if(t(r)){const e=r.path;let t;if(r.snap)kc(n,e)?(t=Ic(n,e),i=zu(i,t,r.snap)):kc(e,n)&&(t=Ic(e,n),i=zu(i,pc(),r.snap.getChild(t)));else{if(!r.children)throw E("WriteRecord should have .snap or .children");if(kc(n,e))t=Ic(n,e),i=Hu(i,t,r.children);else if(kc(e,n))if(t=Ic(e,n),Cc(t))i=Hu(i,pc(),r.children);else{const e=te(r.children,mc(t));if(e){const n=e.getChild(yc(t));i=zu(i,pc(),n)}}}}}return i}function oh(e,t,n,i,o){if(i||o){const r=Ku(e.visibleWrites,t);if(!o&&Gu(r))return n;if(o||null!=n||Yu(r,pc())){const r=function(e){return(e.visible||o)&&(!i||!~i.indexOf(e.writeId))&&(kc(e.path,t)||kc(t,e.path))};return Ju(ih(e.allWrites,r,t),n||iu.EMPTY_NODE)}return null}{const i=Vu(e.visibleWrites,t);if(null!=i)return i;{const i=Ku(e.visibleWrites,t);if(Gu(i))return n;if(null!=n||Yu(i,pc())){return Ju(i,n||iu.EMPTY_NODE)}return null}}}function rh(e,t,n,i){return oh(e.writeTree,e.treePath,t,n,i)}function sh(e,t){return function(e,t,n){let i=iu.EMPTY_NODE;const o=Vu(e.visibleWrites,t);if(o)return o.isLeafNode()||o.forEachChild(Kc,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const o=Ku(e.visibleWrites,t);return n.forEachChild(Kc,((e,t)=>{const n=Ju(Ku(o,new fc(e)),t);i=i.updateImmediateChild(e,n)})),Xu(o).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Xu(Ku(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function ah(e,t,n,i){return function(e,t,n,i,o){I(i||o,"Either existingEventSnap or existingServerSnap must exist");const r=bc(t,n);if(Yu(e.visibleWrites,r))return null;{const t=Ku(e.visibleWrites,r);return Gu(t)?o.getChild(n):Ju(t,o.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function lh(e,t){return function(e,t){return Vu(e.visibleWrites,t)}(e.writeTree,bc(e.treePath,t))}function ch(e,t,n,i,o,r){return function(e,t,n,i,o,r,s){let a;const l=Ku(e.visibleWrites,t),c=Vu(l,pc());if(null!=c)a=c;else{if(null==n)return[];a=Ju(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=r?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s);let l=n.getNext();for(;l&&e.length<o;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,o,r)}function uh(e,t,n){return function(e,t,n,i){const o=bc(t,n),r=Vu(e.visibleWrites,o);if(null!=r)return r;if(i.isCompleteForChild(n))return Ju(Ku(e.visibleWrites,o),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function hh(e,t){return dh(bc(e.treePath,t),e.writeTree)}function dh(e,t){return{treePath:e,writeTree:t}}
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
 */class fh{trackChildChange(e){const t=e.type,n=e.childName;I("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),I(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const o=i.type;if("child_added"===t&&"child_removed"===o)this.changeMap.set(n,hu(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===o)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===o)this.changeMap.set(n,uu(n,i.oldSnap));else if("child_changed"===t&&"child_added"===o)this.changeMap.set(n,cu(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==o)throw E("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,hu(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const ph=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class mh{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Pu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uh(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Bu(this.viewCache_),o=ch(this.writes_,i,t,1,n,e);return 0===o.length?null:o[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function gh(e,t,n,i,o){const r=new fh;let s,a;if(n.type===ku.OVERWRITE){const l=n;l.source.fromUser?s=vh(e,t,l.path,l.snap,i,o,r):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Cc(l.path),s=_h(e,t,l.path,l.snap,i,o,a,r))}else if(n.type===ku.MERGE){const l=n;l.source.fromUser?s=function(e,t,n,i,o,r,s){let a=t;return i.foreach(((i,l)=>{const c=bc(n,i);wh(t,mc(c))&&(a=vh(e,a,c,l,o,r,s))})),i.foreach(((i,l)=>{const c=bc(n,i);wh(t,mc(c))||(a=vh(e,a,c,l,o,r,s))})),a}(e,t,l.path,l.children,i,o,r):(I(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),s=Ch(e,t,l.path,l.children,i,o,a,r))}else if(n.type===ku.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,i,o,r){let s;if(null!=lh(i,n))return t;{const a=new mh(i,t,o),l=t.eventCache.getNode();let c;if(Cc(n)||".priority"===mc(n)){let n;if(t.serverCache.isFullyInitialized())n=rh(i,Bu(t));else{const e=t.serverCache.getNode();I(e instanceof iu,"serverChildren would be complete if leaf node"),n=sh(i,e)}c=e.filter.updateFullNode(l,n,r)}else{const o=mc(n);let u=uh(i,o,t.serverCache);null==u&&t.serverCache.isCompleteForChild(o)&&(u=l.getImmediateChild(o)),c=null!=u?e.filter.updateChild(l,o,u,yc(n),a,r):t.eventCache.getNode().hasChild(o)?e.filter.updateChild(l,o,iu.EMPTY_NODE,yc(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=rh(i,Bu(t)),s.isLeafNode()&&(c=e.filter.updateFullNode(c,s,r)))}return s=t.serverCache.isFullyInitialized()||null!=lh(i,pc()),Mu(t,c,s,e.filter.filtersNodes())}}
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
 */(e,t,a.path,i,o,r):function(e,t,n,i,o,r,s){if(null!=lh(o,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Cc(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _h(e,t,n,l.getNode().getChild(n),o,r,a,s);if(Cc(n)){let i=new qu(null);return l.getNode().forEachChild(Mc,((e,t)=>{i=i.set(new fc(e),t)})),Ch(e,t,n,i,o,r,a,s)}return t}{let c=new qu(null);return i.foreach(((e,t)=>{const i=bc(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Ch(e,t,n,c,o,r,a,s)}}(e,t,a.path,a.affectedTree,i,o,r)}else{if(n.type!==ku.LISTEN_COMPLETE)throw E("Unknown operation type: "+n.type);s=function(e,t,n,i,o){const r=t.serverCache,s=Fu(t,r.getNode(),r.isFullyInitialized()||Cc(n),r.isFiltered());return yh(e,s,n,i,ph,o)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Uu(e);(n.length>0||!e.eventCache.isFullyInitialized()||o&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(lu(Uu(t)))}}(t,s,l),{viewCache:s,changes:l}}function yh(e,t,n,i,o,r){const s=t.eventCache;if(null!=lh(i,n))return t;{let a,l;if(Cc(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Bu(t),o=sh(i,n instanceof iu?n:iu.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),o,r)}else{const n=rh(i,Bu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=mc(n);if(".priority"===c){I(1===gc(n),"Can't have a priority with additional path components");const o=s.getNode();l=t.serverCache.getNode();const r=ah(i,n,o,l);a=null!=r?e.filter.updatePriority(o,r):s.getNode()}else{const u=yc(n);let h;if(s.isCompleteForChild(c)){l=t.serverCache.getNode();const e=ah(i,n,s.getNode(),l);h=null!=e?s.getNode().getImmediateChild(c).updateChild(u,e):s.getNode().getImmediateChild(c)}else h=uh(i,c,t.serverCache);a=null!=h?e.filter.updateChild(s.getNode(),c,h,u,o,r):s.getNode()}}return Mu(t,a,s.isFullyInitialized()||Cc(n),e.filter.filtersNodes())}}function _h(e,t,n,i,o,r,s,a){const l=t.serverCache;let c;const u=s?e.filter:e.filter.getIndexedFilter();if(Cc(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=mc(n);if(!l.isCompleteForPath(n)&&gc(n)>1)return t;const o=yc(n),r=l.getNode().getImmediateChild(e).updateChild(o,i);c=".priority"===e?u.updatePriority(l.getNode(),r):u.updateChild(l.getNode(),e,r,o,ph,null)}const h=Fu(t,c,l.isFullyInitialized()||Cc(n),u.filtersNodes());return yh(e,h,n,o,new mh(o,h,r),a)}function vh(e,t,n,i,o,r,s){const a=t.eventCache;let l,c;const u=new mh(o,t,r);if(Cc(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,s),l=Mu(t,c,!0,e.filter.filtersNodes());else{const o=mc(n);if(".priority"===o)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Mu(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=yc(n),c=a.getNode().getImmediateChild(o);let h;if(Cc(r))h=i;else{const e=u.getCompleteChild(o);h=null!=e?".priority"===_c(r)&&e.getChild(wc(r)).isEmpty()?e:e.updateChild(r,i):iu.EMPTY_NODE}if(c.equals(h))l=t;else{l=Mu(t,e.filter.updateChild(a.getNode(),o,h,r,u,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function wh(e,t){return e.eventCache.isCompleteForChild(t)}function bh(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Ch(e,t,n,i,o,r,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Cc(n)?i:new qu(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=bh(0,t.serverCache.getNode().getImmediateChild(n),i);c=_h(e,c,new fc(n),l,o,r,s,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!l){const l=bh(0,t.serverCache.getNode().getImmediateChild(n),i);c=_h(e,c,new fc(n),l,o,r,s,a)}})),c}class Ih{get query(){return this.query_}constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new du(n.getIndex()),o=(r=n).loadsAllData()?new du(r.getIndex()):r.hasLimit()?new pu(r):new fu(r);var r;this.processor_=function(e){return{filter:e}}(o);const s=t.serverCache,a=t.eventCache,l=i.updateFullNode(iu.EMPTY_NODE,s.getNode(),null),c=o.updateFullNode(iu.EMPTY_NODE,a.getNode(),null),u=new Pu(l,s.isFullyInitialized(),i.filtersNodes()),h=new Pu(c,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=Du(h,u),this.eventGenerator_=new Au(this.query_)}}function Eh(e,t){const n=Bu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Cc(t)&&!n.getImmediateChild(mc(t)).isEmpty())?n.getChild(t):null}function kh(e){return 0===e.eventRegistrations_.length}function Th(e,t,n){const i=[];if(n){I(null==t,"A cancel should cancel all event registrations.");const o=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,o);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const o=e.eventRegistrations_[i];if(o.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(o)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function xh(e,t,n,i){t.type===ku.MERGE&&null!==t.source.queryId&&(I(Bu(e.viewCache_),"We should always have a full cache before handling merges"),I(Uu(e.viewCache_),"Missing event cache, even though we have a server cache"));const o=e.viewCache_,r=gh(e.processor_,o,t,n,i);var s,a;return s=e.processor_,a=r.viewCache,I(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),I(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),I(r.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Sh(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Sh(e,t,n,i){const o=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const o=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Lu(e,o,"child_removed",t,i,n),Lu(e,o,"child_added",t,i,n),Lu(e,o,"child_moved",r,i,n),Lu(e,o,"child_changed",t,i,n),Lu(e,o,"value",t,i,n),o}(e.eventGenerator_,t,n,o)}
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
 */let Nh,Oh;class Rh{constructor(){this.views=new Map}}function Ph(e,t,n,i){const o=t.source.queryId;if(null!==o){const r=e.views.get(o);return I(null!=r,"SyncTree gave us an op for an invalid query."),xh(r,t,n,i)}{let o=[];for(const r of e.views.values())o=o.concat(xh(r,t,n,i));return o}}function Ah(e,t,n,i,o){const r=t._queryIdentifier,s=e.views.get(r);if(!s){let e=rh(n,o?i:null),r=!1;e?r=!0:i instanceof iu?(e=sh(n,i),r=!1):(e=iu.EMPTY_NODE,r=!1);const s=Du(new Pu(e,r,!1),new Pu(i,o,!1));return new Ih(t,s)}return s}function Lh(e,t,n,i,o,r){const s=Ah(e,t,i,o,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),function(e,t){e.eventRegistrations_.push(t)}(s,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Kc,((e,t)=>{i.push(cu(e,t))}));return n.isFullyInitialized()&&i.push(lu(n.getNode())),Sh(e,i,n.getNode(),t)}(s,n)}function Dh(e,t,n,i){const o=t._queryIdentifier,r=[];let s=[];const a=jh(e);if("default"===o)for(const[t,o]of e.views.entries())s=s.concat(Th(o,n,i)),kh(o)&&(e.views.delete(t),o.query._queryParams.loadsAllData()||r.push(o.query));else{const t=e.views.get(o);t&&(s=s.concat(Th(t,n,i)),kh(t)&&(e.views.delete(o),t.query._queryParams.loadsAllData()||r.push(t.query)))}return a&&!jh(e)&&r.push(new(I(Nh,"Reference.ts has not been loaded"),Nh)(t._repo,t._path)),{removed:r,events:s}}function Mh(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Fh(e,t){let n=null;for(const i of e.views.values())n=n||Eh(i,t);return n}function Uh(e,t){if(t._queryParams.loadsAllData())return qh(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Bh(e,t){return null!=Uh(e,t)}function jh(e){return null!=qh(e)}function qh(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let Wh=1;class zh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qu(null),this.pendingWriteTree_={visibleWrites:Wu.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hh(e,t,n,i,o){return function(e,t,n,i,o){I(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===o&&(o=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:o}),o&&(e.visibleWrites=zu(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,o),o?Jh(e,new Ou({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function $h(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(eh(e.pendingWriteTree_,t)){let t=new qu(null);return null!=i.snap?t=t.set(pc(),!0):Ml(i.children,(e=>{t=t.set(new fc(e),!0)})),Jh(e,new Su(i.path,t,n))}return[]}function Yh(e,t,n){return Jh(e,new Ou({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Vh(e,t,n,i,o=!1){const r=t._path,s=e.syncPointTree_.get(r);let a=[];if(s&&("default"===t._queryIdentifier||Bh(s,t))){const l=Dh(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!o){const n=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),o=e.syncPointTree_.findOnPath(r,((e,t)=>jh(t)));if(n&&!o){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&jh(t)){return[qh(t)]}{let e=[];return t&&(e=Mh(t)),Ml(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],o=i.query,r=ed(e,i);e.listenProvider_.startListening(sd(o),td(e,o),r.hashFn,r.onComplete)}}}if(!o&&c.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(sd(t),n)}else c.forEach((t=>{const n=e.queryToTagMap.get(nd(t));e.listenProvider_.stopListening(sd(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=nd(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,c)}return a}function Xh(e,t,n,i){const o=id(e,i);if(null!=o){const i=od(o),r=i.path,s=i.queryId,a=Ic(r,t);return rd(e,r,new Ou(xu(s),a,n))}return[]}function Kh(e,t,n,i=!1){const o=t._path;let r=null,s=!1;e.syncPointTree_.foreachOnPath(o,((e,t)=>{const n=Ic(e,o);r=r||Fh(t,n),s=s||jh(t)}));let a,l=e.syncPointTree_.get(o);if(l?(s=s||jh(l),r=r||Fh(l,pc())):(l=new Rh,e.syncPointTree_=e.syncPointTree_.set(o,l)),null!=r)a=!0;else{a=!1,r=iu.EMPTY_NODE;e.syncPointTree_.subtree(o).foreachChild(((e,t)=>{const n=Fh(t,pc());n&&(r=r.updateImmediateChild(e,n))}))}const c=Bh(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=nd(t);I(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Wh++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=Lh(l,t,n,Zu(e.pendingWriteTree_,o),r,a);if(!c&&!s&&!i){const n=Uh(l,t);u=u.concat(function(e,t,n){const i=t._path,o=td(e,t),r=ed(e,n),s=e.listenProvider_.startListening(sd(t),o,r.hashFn,r.onComplete),a=e.syncPointTree_.subtree(i);if(o)I(!jh(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Cc(e)&&t&&jh(t))return[qh(t).query];{let e=[];return t&&(e=e.concat(Mh(t).map((e=>e.query)))),Ml(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(sd(i),td(e,i))}}return s}
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
 */(e,t,n))}return u}function Gh(e,t,n){const i=e.pendingWriteTree_,o=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Fh(n,Ic(e,t));if(i)return i}));return oh(i,t,o,n,!0)}function Jh(e,t){return Qh(t,e.syncPointTree_,null,Zu(e.pendingWriteTree_,pc()))}function Qh(e,t,n,i){if(Cc(e.path))return Zh(e,t,n,i);{const o=t.get(pc());null==n&&null!=o&&(n=Fh(o,pc()));let r=[];const s=mc(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=hh(i,s);r=r.concat(Qh(a,l,e,t))}return o&&(r=r.concat(Ph(o,e,i,n))),r}}function Zh(e,t,n,i){const o=t.get(pc());null==n&&null!=o&&(n=Fh(o,pc()));let r=[];return t.children.inorderTraversal(((t,o)=>{const s=n?n.getImmediateChild(t):null,a=hh(i,t),l=e.operationForChild(t);l&&(r=r.concat(Zh(l,o,s,a)))})),o&&(r=r.concat(Ph(o,e,i,n))),r}function ed(e,t){const n=t.query,i=td(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||iu.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=id(e,n);if(i){const n=od(i),o=n.path,r=n.queryId,s=Ic(o,t);return rd(e,o,new Nu(xu(r),s))}return[]}(e,n._path,i):function(e,t){return Jh(e,new Nu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Vh(e,n,null,i)}}}}function td(e,t){const n=nd(t);return e.queryToTagMap.get(n)}function nd(e){return e._path.toString()+"$"+e._queryIdentifier}function id(e,t){return e.tagToQueryMap.get(t)}function od(e){const t=e.indexOf("$");return I(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new fc(e.substr(0,t))}}function rd(e,t,n){const i=e.syncPointTree_.get(t);I(i,"Missing sync point for query tag that we're tracking");return Ph(i,n,Zu(e.pendingWriteTree_,t),null)}function sd(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(I(Oh,"Reference.ts has not been loaded"),Oh)(e._repo,e._path):e}class ad{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ad(t)}node(){return this.node_}constructor(e){this.node_=e}}class ld{getImmediateChild(e){const t=bc(this.path_,e);return new ld(this.syncTree_,t)}node(){return Gh(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const cd=function(e,t,n){return e&&"object"==typeof e?(I(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?ud(e[".sv"],t,n):"object"==typeof e[".sv"]?hd(e[".sv"],t):void I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ud=function(e,t,n){if("timestamp"===e)return n.timestamp;I(!1,"Unexpected server value: "+e)},hd=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&I(!1,"Unexpected increment value: "+i);const o=t.node();if(I(null!=o,"Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const r=o.getValue();return"number"!=typeof r?i:r+i},dd=function(e,t,n,i){return pd(t,new ld(n,e),i)},fd=function(e,t,n){return pd(e,new ad(t),n)};function pd(e,t,n){const i=e.getPriority().val(),o=cd(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=cd(i.getValue(),t,n);return r!==i.getValue()||o!==i.getPriority().val()?new Xc(r,ru(o)):e}{const i=e;return r=i,o!==i.getPriority().val()&&(r=r.updatePriority(new Xc(o))),i.forEachChild(Kc,((e,i)=>{const o=pd(i,t.getImmediateChild(e),n);o!==i&&(r=r.updateImmediateChild(e,o))})),r}}
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
 */class md{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function gd(e,t){let n=t instanceof fc?t:new fc(t),i=e,o=mc(n);for(;null!==o;){const e=te(i.node.children,o)||{children:{},childCount:0};i=new md(o,i,e),n=yc(n),o=mc(n)}return i}function yd(e){return e.node.value}function _d(e,t){e.node.value=t,Id(e)}function vd(e){return e.node.childCount>0}function wd(e,t){Ml(e.node.children,((n,i)=>{t(new md(n,e,i))}))}function bd(e,t,n,i){n&&!i&&t(e),wd(e,(e=>{bd(e,t,!0,i)})),n&&i&&t(e)}function Cd(e){return new fc(null===e.parent?e.name:Cd(e.parent)+"/"+e.name)}function Id(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===yd(e)&&!vd(e)}(n),o=ee(e.node.children,t);i&&o?(delete e.node.children[t],e.node.childCount--,Id(e)):i||o||(e.node.children[t]=n.node,e.node.childCount++,Id(e))}
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
 */(e.parent,e.name,e)}const Ed=/[\[\].#$\/\u0000-\u001F\u007F]/,kd=/[\[\].#$\u0000-\u001F\u007F]/,Td=10485760,xd=function(e){return"string"==typeof e&&0!==e.length&&!Ed.test(e)},Sd=function(e){return"string"==typeof e&&0!==e.length&&!kd.test(e)},Nd=function(e,t,n,i){i&&void 0===t||Od(fe(e,"value"),t,n)},Od=function(e,t,n){const i=n instanceof fc?new Tc(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Sc(i));if("function"==typeof t)throw new Error(e+"contains a function "+Sc(i)+" with contents = "+t.toString());if(Sl(t))throw new Error(e+"contains "+t.toString()+" "+Sc(i));if("string"==typeof t&&t.length>3495253.3333333335&&me(t)>Td)throw new Error(e+"contains a string greater than "+Td+" utf8 bytes "+Sc(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,o=!1;if(Ml(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(o=!0,!xd(t)))throw new Error(e+" contains an invalid key ("+t+") "+Sc(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=i).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=me(a),xc(s),Od(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=me(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&o)throw new Error(e+' contains ".value" child '+Sc(i)+" in addition to actual children.")}},Rd=function(e,t,n,i){if(!(i&&void 0===n||Sd(n)))throw new Error(fe(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Pd=function(e,t){if(".info"===mc(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ad=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!xd(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Sd(e)}(n))throw new Error(fe(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Ld{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Dd(e,t){let n=null;for(let i=0;i<t.length;i++){const o=t[i],r=o.getPath();null===n||Ec(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(o)}n&&e.eventLists_.push(n)}function Md(e,t,n){Dd(e,n),Ud(e,(e=>Ec(e,t)))}function Fd(e,t,n){Dd(e,n),Ud(e,(e=>kc(e,t)||kc(t,e)))}function Ud(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const o=e.eventLists_[i];if(o){t(o.path)?(Bd(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Bd(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();wl&&Il("event: "+n.toString()),jl(i)}}}
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
 */const jd="repo_interrupt";class qd{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ld,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wu(),this.transactionQueueTree_=new md,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function Wd(e,t,n){if(e.stats_=tc(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new _u(e.repoInfo_,((t,n,i,o)=>{$d(e,t,n,i,o)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Yd(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{G(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Rc(e.repoInfo_,t,((t,n,i,o)=>{$d(e,t,n,i,o)}),(t=>{Yd(e,t)}),(t=>{!function(e,t){Ml(t,((t,n)=>{Vd(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ec[n]||(ec[n]=t()),ec[n]}(e.repoInfo_,(()=>new Eu(e.stats_,e.server_))),e.infoData_=new vu,e.infoSyncTree_=new zh({startListening:(t,n,i,o)=>{let r=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(r=Yh(e.infoSyncTree_,t._path,s),setTimeout((()=>{o("ok")}),0)),r},stopListening:()=>{}}),Vd(e,"connected",!1),e.serverSyncTree_=new zh({startListening:(t,n,i,o)=>(e.server_.listen(t,i,n,((n,i)=>{const r=o(n,i);Fd(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function zd(e){const t=e.infoData_.getNode(new fc(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Hd(e){return(t=(t={timestamp:zd(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function $d(e,t,n,i,o){e.dataUpdateCount++;const r=new fc(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(o)if(i){const t=ie(n,(e=>ru(e)));s=function(e,t,n,i){const o=id(e,i);if(o){const i=od(o),r=i.path,s=i.queryId,a=Ic(r,t),l=qu.fromObject(n);return rd(e,r,new Ru(xu(s),a,l))}return[]}(e.serverSyncTree_,r,t,o)}else{const t=ru(n);s=Xh(e.serverSyncTree_,r,t,o)}else if(i){const t=ie(n,(e=>ru(e)));s=function(e,t,n){const i=qu.fromObject(n);return Jh(e,new Ru({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=ru(n);s=Yh(e.serverSyncTree_,r,t)}let a=r;s.length>0&&(a=nf(e,r)),Fd(e.eventQueue_,a,s)}function Yd(e,t){Vd(e,"connected",t),!1===t&&function(e){Qd(e,"onDisconnectEvents");const t=Hd(e),n=wu();Cu(e.onDisconnect_,pc(),((i,o)=>{const r=dd(i,o,e.serverSyncTree_,t);bu(n,i,r)}));let i=[];Cu(n,pc(),((t,n)=>{i=i.concat(Yh(e.serverSyncTree_,t,n));const o=lf(e,t);nf(e,o)})),e.onDisconnect_=wu(),Fd(e.eventQueue_,pc(),i)}(e)}function Vd(e,t,n){const i=new fc("/.info/"+t),o=ru(n);e.infoData_.updateSnapshot(i,o);const r=Yh(e.infoSyncTree_,i,o);Fd(e.eventQueue_,i,r)}function Xd(e){return e.nextWriteId_++}function Kd(e,t,n,i,o){Qd(e,"set",{path:t.toString(),value:n,priority:i});const r=Hd(e),s=ru(n,i),a=Gh(e.serverSyncTree_,t),l=fd(s,a,r),c=Xd(e),u=Hh(e.serverSyncTree_,t,l,c,!0);Dd(e.eventQueue_,u),e.server_.put(t.toString(),s.val(!0),((n,i)=>{const r="ok"===n;r||xl("set at "+t+" failed: "+n);const s=$h(e.serverSyncTree_,c,!r);Fd(e.eventQueue_,t,s),Zd(e,o,n,i)}));const h=lf(e,t);nf(e,h),Fd(e.eventQueue_,h,[])}function Gd(e,t,n){let i;i=".info"===mc(t._path)?Vh(e.infoSyncTree_,t,n):Vh(e.serverSyncTree_,t,n),Md(e.eventQueue_,t._path,i)}function Jd(e){e.persistentConnection_&&e.persistentConnection_.interrupt(jd)}function Qd(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Il(n,...t)}function Zd(e,t,n,i){t&&jl((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let o=e;i&&(o+=": "+i);const r=new Error(o);r.code=e,t(r)}}))}function ef(e,t,n){return Gh(e.serverSyncTree_,t,n)||iu.EMPTY_NODE}function tf(e,t=e.transactionQueueTree_){if(t||af(e,t),yd(t)){const n=rf(e,t);I(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),o=ef(e,t,i);let r=o;const s=o.hash();for(let e=0;e<n.length;e++){const i=n[e];I(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const o=Ic(t,i.path);r=r.updateChild(o,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Qd(e,"transaction put response",{path:l.toString(),status:i});let o=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,o=o.concat($h(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();af(e,gd(e.transactionQueueTree_,t)),tf(e,e.transactionQueueTree_),Fd(e.eventQueue_,t,o);for(let e=0;e<i.length;e++)jl(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{xl("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}nf(e,t)}}),s)}(e,Cd(t),n)}else vd(t)&&wd(t,(t=>{tf(e,t)}))}function nf(e,t){const n=of(e,t),i=Cd(n);return function(e,t,n){if(0===t.length)return;const i=[];let o=[];const r=t.filter((e=>0===e.status)),s=r.map((e=>e.currentWriteId));for(let r=0;r<t.length;r++){const l=t[r],c=Ic(n,l.path);let u,h=!1;if(I(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,o=o.concat($h(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",o=o.concat($h(e.serverSyncTree_,l.currentWriteId,!0));else{const n=ef(e,l.path,s);l.currentInputSnapshot=n;const i=t[r].update(n.val());if(void 0!==i){Od("transaction failed: Data returned ",i,l.path);let t=ru(i);"object"==typeof i&&null!=i&&ee(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=l.currentWriteId,a=Hd(e),c=fd(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Xd(e),s.splice(s.indexOf(r),1),o=o.concat(Hh(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),o=o.concat($h(e.serverSyncTree_,r,!0))}else h=!0,u="nodata",o=o.concat($h(e.serverSyncTree_,l.currentWriteId,!0))}Fd(e.eventQueue_,n,o),o=[],h&&(t[r].status=2,a=t[r].unwatcher,setTimeout(a,Math.floor(0)),t[r].onComplete&&("nodata"===u?i.push((()=>t[r].onComplete(null,!1,t[r].currentInputSnapshot))):i.push((()=>t[r].onComplete(new Error(u),!1,null)))))}var a;af(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)jl(i[e]);tf(e,e.transactionQueueTree_)}(e,rf(e,n),i),i}function of(e,t){let n,i=e.transactionQueueTree_;for(n=mc(t);null!==n&&void 0===yd(i);)i=gd(i,n),n=mc(t=yc(t));return i}function rf(e,t){const n=[];return sf(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function sf(e,t,n){const i=yd(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);wd(t,(t=>{sf(e,t,n)}))}function af(e,t){const n=yd(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,_d(t,n.length>0?n:void 0)}wd(t,(t=>{af(e,t)}))}function lf(e,t){const n=Cd(of(e,t)),i=gd(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{cf(e,t)})),cf(e,i),bd(i,(t=>{cf(e,t)})),n}function cf(e,t){const n=yd(t);if(n){const i=[];let o=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(I(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(I(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),o=o.concat($h(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?_d(t,void 0):n.length=r+1,Fd(e.eventQueue_,Cd(t),o);for(let e=0;e<i.length;e++)jl(i[e])}}
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
 */const uf=function(e,t){const n=hf(e),i=n.namespace;"firebase.com"===n.domain&&Tl(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Tl("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&xl("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const o="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Gl(n.host,n.secure,i,o,t,"",i!==n.subdomain),path:new fc(n.pathString)}},hf=function(e){let t="",n="",i="",o="",r="",s=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(o=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xl(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:s,scheme:a,pathString:o,namespace:r}},df="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ff=function(){let e=0;const t=[];return function(n){const i=n===e;let o;e=n;const r=new Array(8);for(o=7;o>=0;o--)r[o]=df.charAt(n%64),n=Math.floor(n/64);I(0===n,"Cannot push at time == 0");let s=r.join("");if(i){for(o=11;o>=0&&63===t[o];o--)t[o]=0;t[o]++}else for(o=0;o<12;o++)t[o]=Math.floor(64*Math.random());for(o=0;o<12;o++)s+=df.charAt(t[o]);return I(20===s.length,"nextPushId: Length should be 20."),s}}();
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
class pf{getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+G(this.snapshot.exportVal())}constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}}class mf{getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}}
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
 */class gf{onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}}
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
class yf{get key(){return Cc(this._path)?null:_c(this._path)}get ref(){return new _f(this._repo,this._path)}get _queryIdentifier(){const e=yu(this._queryParams),t=Ll(e);return"{}"===t?"default":t}get _queryObject(){return yu(this._queryParams)}isEqual(e){if(!((e=ge(e))instanceof yf))return!1;const t=this._repo===e._repo,n=Ec(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}}class _f extends yf{get parent(){const e=wc(this._path);return null===e?null:new _f(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new mu,!1)}}class vf{get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new fc(e),n=bf(this.ref,e);return new vf(this._node.getChild(t),n,Kc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new vf(n,bf(this.ref,t),Kc))))}hasChild(e){const t=new fc(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}constructor(e,t,n){this._node=e,this.ref=t,this._index=n}}function wf(e,t){return(e=ge(e))._checkNotDeleted("ref"),void 0!==t?bf(e._root,t):e._root}function bf(e,t){var n,i,o,r;return null===mc((e=ge(e))._path)?(n="child",i="path",r=!1,(o=t)&&(o=o.replace(/^\/*\.info(\/|$)/,"/")),Rd(n,i,o,r)):Rd("child","path",t,!1),new _f(e._repo,bc(e._path,t))}function Cf(e,t){e=ge(e),Pd("push",e._path),Nd("push",t,e._path,!0);const n=zd(e._repo),i=ff(n),o=bf(e,i),r=bf(e,i);let s;return s=null!=t?If(r,t).then((()=>r)):Promise.resolve(r),o.then=s.then.bind(s),o.catch=s.then.bind(s,void 0),o}function If(e,t){e=ge(e),Pd("set",e._path),Nd("set",t,e._path,!1);const n=new H;return Kd(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class Ef{respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new pf("value",this,new vf(e.snapshotNode,new _f(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new mf(this,e,t):null}matches(e){return e instanceof Ef&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}constructor(e){this.callbackContext=e}}class kf{respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new mf(this,e,t):null}createEvent(e,t){I(null!=e.childName,"Child events should have a childName.");const n=bf(new _f(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new pf(e.type,this,new vf(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof kf&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}constructor(e,t){this.eventType=e,this.callbackContext=t}}function Tf(e,t,n,i,o){let r;if("object"==typeof i&&(r=void 0,o=i),"function"==typeof i&&(r=i),o&&o.onlyOnce){const t=n,i=(n,i)=>{Gd(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const s=new gf(n,r||void 0),a="value"===t?new Ef(s):new kf(t,s);return function(e,t,n){let i;i=".info"===mc(t._path)?Kh(e.infoSyncTree_,t,n):Kh(e.serverSyncTree_,t,n),Md(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>Gd(e._repo,e,a)}function xf(e,t,n,i){return Tf(e,"value",t,n,i)}!function(e){I(!Nh,"__referenceConstructor has already been defined"),Nh=e}(_f),function(e){I(!Oh,"__referenceConstructor has already been defined"),Oh=e}(_f);
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
const Sf={};let Nf=!1;function Of(e,t,n,i,o){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Tl("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Il("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,l,c=uf(s,o),u=c.repoInfo;void 0!==r&&r.env&&(l=r.env.FIREBASE_DATABASE_EMULATOR_HOST),l?(a=!0,s=`http://${l}?ns=${u.namespace}`,c=uf(s,o),u=c.repoInfo):a=!c.repoInfo.secure;const h=o&&a?new Hl(Hl.OWNER):new zl(e.name,e.options,t);Ad("Invalid Firebase Database URL",c),Cc(c.path)||Tl("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let o=Sf[t.name];o||(o={},Sf[t.name]=o);let r=o[e.toURLString()];r&&Tl("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new qd(e,Nf,n,i),o[e.toURLString()]=r,r}(u,e,h,new Wl(e.name,n));return new Rf(d,e)}class Rf{get _repo(){return this._instanceStarted||(Wd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _f(this._repo,pc())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Sf[t];n&&n[e.key]===e||Tl(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Jd(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Tl("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}Rc.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Rc.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){ul=rt,tt(new ye("database",((e,{instanceIdentifier:t})=>Of(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),lt(ll,cl,e),lt(ll,cl,"esm2017")}
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
 */();const Pf=function(e=at(),t){const n=nt(e,"database").getImmediate({identifier:t}),i=W("database");return i&&function(e,t,n,i={}){e=ge(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Tl("Cannot call useEmulator() after instance has already been initialized.");const o=e._repoInternal;let r;if(o.repoInfo_.nodeAdmin)i.mockUserToken&&Tl('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Hl(Hl.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:$(i.mockUserToken,e.app.options.projectId);r=new Hl(t)}!function(e,t,n,i){e.repoInfo_=new Gl(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}(o,t,n,r)}(n,...i),n}(vt);function Af({uid:e,email:t,displayName:n}){If(wf(Pf,`users/${e}/userData`),{username:n,email:t}),console.log("add")}function Lf({id:e,currentFilmId:t,reference:n}){If(Cf(wf(Pf,`users/${e}/${n}`)),{currentFilmId:t})}function Df(e){e.preventDefault();const t=Ff().uid;console.log(t),Lf({id:t,currentFilmId:al,reference:"userQueue"})}function Mf(e){const t=Ff().uid;e.preventDefault(),Lf({id:t,currentFilmId:al,reference:"userWatched"})}function Ff(){const e=yo(vt).currentUser;if(null!==e)return console.log("get user"),console.log(e),e;console.log("no user")}function Uf(e){const t=Ff().uid;xf(wf(Pf,`users/${t}/${e}`),(e=>{const t=e.val();console.log(t)}))}var Bf,jf,qf={};Bf=void 0!==e?e:"undefined"!=typeof window?window:qf,jf=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",o="Warning",r="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=c(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},u=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},h=0,d=function(a,u,d,p){if(!l("body"))return!1;t||f.Notify.init({});var m=c(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof d?g=d:"object"==typeof p&&(g=p),t=c(!0,t,g)}var y,_,v=t[a.toLocaleLowerCase("en")];h++,"string"!=typeof u&&(u="Notiflix "+a),t.plainText&&(y=u,(_=e.document.createElement("div")).innerHTML=y,u=_.textContent||_.innerText||""),!t.plainText&&u.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),u='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),u.length>t.messageMaxLength&&(u=u.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(v.fontAwesomeIconColor=v.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(s.wrapID)||e.document.createElement("div");if(w.id=s.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var b=e.document.getElementById(s.overlayID)||e.document.createElement("div");b.id=s.overlayID,b.style.width="100%",b.style.height="100%",b.style.position="fixed",b.style.zIndex=t.zindex-1,b.style.left=0,b.style.top=0,b.style.right=0,b.style.bottom=0,b.style.background=v.backOverlayColor||t.backOverlayColor,b.className=t.cssAnimation?"nx-with-animation":"",b.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(s.overlayID)||e.document.body.appendChild(b)}e.document.getElementById(s.wrapID)||e.document.body.appendChild(w);var C=e.document.createElement("div");C.id=t.ID+"-"+h,C.className=t.className+" "+v.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),C.style.fontSize=t.fontSize,C.style.color=v.textColor,C.style.background=v.background,C.style.borderRadius=t.borderRadius,C.style.pointerEvents="all",t.rtl&&(C.setAttribute("dir","rtl"),C.classList.add("nx-rtl-on")),C.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(C.style.animationDuration=t.cssAnimationDuration+"ms");var I="";if(t.closeButton&&"function"!=typeof d&&(I='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+v.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)C.innerHTML='<i style="color:'+v.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+v.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?I:"");else{var E="";a===n?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===o?E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===r&&(E='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+v.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),C.innerHTML=E+'<span class="nx-message nx-with-icon">'+u+"</span>"+(t.closeButton?I:"")}else C.innerHTML='<span class="nx-message">'+u+"</span>"+(t.closeButton?I:"");if("left-bottom"===t.position||"right-bottom"===t.position){var k=e.document.getElementById(s.wrapID);k.insertBefore(C,k.firstChild)}else e.document.getElementById(s.wrapID).appendChild(C);var T=e.document.getElementById(C.id);if(T){var x,S,N=function(){T.classList.add("nx-remove");var t=e.document.getElementById(s.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(x)},O=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(s.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(S)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(C.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var e=setTimeout((function(){O(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof d&&d(),N();var e=setTimeout((function(){O(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var R=function(){x=setTimeout((function(){N()}),t.timeout),S=setTimeout((function(){O()}),t.timeout+t.cssAnimationDuration)};R(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(x),clearTimeout(S)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),R()})))}}if(t.showOnlyTheLastOne&&h>0)for(var P=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+h+"])"),A=0;A<P.length;A++){var L=P[A];null!==L.parentNode&&L.parentNode.removeChild(L)}t=c(!0,t,m)},f={Notify:{init:function(n){t=c(!0,s,n),function(t,n){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(u,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,i){d(n,e,t,i)},failure:function(e,t,n){d(i,e,t,n)},warning:function(e,t,n){d(o,e,t,n)},info:function(e,t,n){d(r,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return jf(Bf)})):"object"==typeof qf?qf=jf(Bf):Bf.Notiflix=jf(Bf);const Wf=e=>qf.Notify.info(`${e}`,{opacity:1,position:"center-top",timeout:500,background:"#0c09db",backOverlay:!0,cssAnimationDuration:1e3,backOverlayColor:"rgba(0, 153, 255, 0.313)",cssAnimationStyle:"zoom"}),zf=yo();function Hf(e){e?($f({addMessage:!1}),Kf()):$f({addMessage:!0})}function $f({addMessage:e}){if(!e){return setTimeout((()=>{vo.searchError.classList.add("is-hidden")}),3e3)}return vo.searchError.classList.remove("is-hidden")}document.querySelector(".menu__link-js").addEventListener("click",(async function(){console.log("working");const e=new Hn;Li(zf,e).then((e=>{const t=Hn.credentialFromResult(e).accessToken;console.log(t);const n=e.user;if(console.log(n),Af(n),n){const e=document.querySelector(".menu__list");console.log(e);const t='<li class="menu__item">\n            <a\n              href="./index.html"\n              target="_self"\n              class="menu__link menu__link--current"\n              >HOME</a\n            >\n          </li>\n          <li class="menu__item">\n            <a href="./user-page.html" target="_self" class="menu__link"\n              >MY LIBRARY</a\n            >\n          </li>\n          <li class="menu__item">\n            <a target="_self" class="menu__link menu__logout">LOG OUT</a>\n          </li>';e.innerHTML=t,i="You are in!",qf.Notify.success(`${i}`,{opacity:.8,position:"center-top",timeout:500,cssAnimationDuration:1500,backOverlayColor:"rgba(255,85,73,0.2)",cssAnimationStyle:"zoom"}),function(){const e=document.querySelector(".menu__logout");function t(){ei(yo()).then((()=>{Wf("You loged out!"),location.reload()})).catch((e=>{console.error(e)}))}console.log(e),e.addEventListener("click",t)}()}var i})).catch((e=>{console.error(e);const t=e.code;console.error(t);const n=e.message;console.error(n);const i=e.customData.email;console.error(i);const o=Hn.credentialFromError(e);console.error(o)}))}));const Yf=new bo,Vf=new Qa({baseURL:"https://api.themoviedb.org/3/"});function Xf(e){e.preventDefault();const t=e.currentTarget.elements.search_user.value.trim();Vf.actualQuery=t,Hf(t),Vf.incrementPage({step:1})}async function Kf(){const e=await Vf.getSearchFilmsData({}),t=(await Vf.getGenresList({})).data.genres;if(!e.data.results.length)return $f({addMessage:!0});const n=Yf.createFilmCardsMarkup(e.data.results,t);Yf.renderMarkup({selector:".films__list",innerHtml:!0,innerHTMLMarkup:"",insAdHtmltype:"beforeend",createMarkypFunc:n})}console.log(),window.location.href.includes("user-page")?vo.form.removeEventListener("submit",Xf):vo.form.addEventListener("submit",Xf);var Gf={};!function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof Gf?Gf=t(e):e.Notiflix=t(e)}(void 0!==e?e:"undefined"!=typeof window?window:Gf,(function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",i="Hourglass",o="Circle",r="Arrows",s="Dots",a="Pulse",l="Custom",c="Notiflix",u={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},h=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(h('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},f=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=f(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},p=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},m=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},g=function(c,m,g,_,v){if(!d("body"))return!1;t||y.Loading.init({});var w=f(!0,t,{});if("object"==typeof m&&!Array.isArray(m)||"object"==typeof g&&!Array.isArray(g)){var b={};"object"==typeof m?b=m:"object"==typeof g&&(b=g),t=f(!0,t,b)}var C,I,E="";if("string"==typeof m&&m.length>0&&(E=m),_){var k="";(E=E.length>t.messageMaxLength?p(E).toString().substring(0,t.messageMaxLength)+"...":p(E).toString()).length>0&&(k='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+E+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var T="";if(c===n)C=t.svgSize,I=t.svgColor,C||(C="60px"),I||(I="#32c682"),T='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+I+'" width="'+C+'" height="'+C+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===i)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===o)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===r)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===a)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===l&&null!==t.customSvgCode&&null===t.customSvgUrl)T=t.customSvgCode||"";else if(c===l&&null!==t.customSvgUrl&&null===t.customSvgCode)T='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===l&&(null===t.customSvgUrl||null===t.customSvgCode))return h('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;T=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var x=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),S=e.innerWidth,N=x>=S?S-40+"px":x+"px",O='<div style="width:'+N+"; height:"+N+';" class="'+t.className+"-icon"+(E.length>0?" nx-with-message":"")+'">'+T+"</div>",R=e.document.createElement("div");if(R.id=u.ID,R.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),R.style.zIndex=t.zindex,R.style.background=t.backgroundColor,R.style.animationDuration=t.cssAnimationDuration+"ms",R.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.alignItems="center",R.style.justifyContent="center",t.rtl&&(R.setAttribute("dir","rtl"),R.classList.add("nx-rtl-on")),R.innerHTML=O+k,!e.document.getElementById(R.id))if(e.document.body.appendChild(R),t.clickToClose)e.document.getElementById(R.id).addEventListener("click",(function(){R.classList.add("nx-remove");var e=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(e))}),t.cssAnimationDuration)}))}else if(e.document.getElementById(u.ID))var P=e.document.getElementById(u.ID),A=setTimeout((function(){P.classList.add("nx-remove");var e=setTimeout((function(){null!==P.parentNode&&(P.parentNode.removeChild(P),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(A)}),v);t=f(!0,t,w)},y={Loading:{init:function(n){t=f(!0,u,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(m,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return h("You have to initialize the Loading module before call Merge function."),!1;t=f(!0,t,e)},standard:function(e,t){g(n,e,t,!0,0)},hourglass:function(e,t){g(i,e,t,!0,0)},circle:function(e,t){g(o,e,t,!0,0)},arrows:function(e,t){g(r,e,t,!0,0)},dots:function(e,t){g(s,e,t,!0,0)},pulse:function(e,t){g(a,e,t,!0,0)},custom:function(e,t){g(l,e,t,!0,0)},notiflix:function(e,t){g(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),g(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var i=e.document.getElementById(u.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?p(n).substring(0,t.messageMaxLength)+"...":p(n);var o=i.getElementsByTagName("p")[0];if(o)o.innerHTML=n;else{var r=e.document.createElement("p");r.id=t.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=t.messageColor,r.style.fontSize=t.messageFontSize,r.innerHTML=n,i.appendChild(r)}}else h("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?f(!0,e.Notiflix,{Loading:y.Loading}):{Loading:y.Loading}}));var Jf=class{enabled({timeDelay:e=20,delayAfterStop:t=400}){Gf.Loading.arrows(this.label,this.options),this.percentageLoading(e,t)}disabled(e){Gf.Loading.change("Ready!"),clearInterval(this.intervalId),Gf.Loading.remove(e)}percentageLoading(e,t){let n=0;this.intervalId=setInterval((()=>{Gf.Loading.change(`${this.label} ${n+=1}%`),100===n&&(Gf.Loading.change("Ready!"),this.disabled(t))}),e)}constructor({label:e="Loading",options:t={backgroundColor:"rgba(0,0,0,0.8)",svgColor:"#FF6B08"}}){this.label=e,this.options=t,this.intervalId=null}};const Qf=new Jf({options:{backgroundColor:"#000000",svgColor:"#FF6B08"}});new Jf({});function Zf(e,t){let n="",i="";e>=5&&(n+="<div class=\"numb numb--first-page\" data-numb-id='1'>1</div>"),4===e||5===e?n+=`<div class="numb dots" data-numb-id='${e-3}'>${e-3}</div>`:e>=6&&(n+='<div class="dots">...</div>'),e>=3&&(n+=`<div class="numb" data-numb-id='${e-2}'>${e-2}</div>`),e>=2&&(n+=`<div class="numb" data-numb-id='${e-1}'>${e-1}</div>`),e<=t-1&&(i+=`<div class="numb" data-numb-id='${e+1}'>${e+1}</div>`),e<=t-2&&(i+=`<div class="numb" data-numb-id='${e+2}'>${e+2}</div>`),e===t-3||e===t-4?i+=`<div class="numb dots" data-numb-id='${e+3}'>${e+3}</div>`:e<=t-5&&(i+='<div class="dots">...</div>'),e<=t-4&&(i+=`<div class="numb numb--last-page" data-numb-id='${t}'>${t}</div>`),vo.beforeCurPageContainer.innerHTML=n,vo.afterCurPageContainer.innerHTML=i}async function ep(){const e=(await _p.getGenresList({})).data.genres,t=await _p.getAllFilmsData({}),n=vp.createFilmCardsMarkup(t.data.results,e);vp.renderMarkup({selector:".films__list",innerHtml:!0,createMarkypFunc:n}),Zf(_p.actualPage,_p.totalPages)}function tp(){const e="true"===vo.themeBtnRef.getAttribute("data-current")||!1;vo.themeBtnRef.setAttribute("data-current",!e),localStorage.setItem("light",JSON.stringify(e)),"false"===localStorage.getItem("light")?(document.body.classList.add("dark-theme"),vo.lightIconRef.classList.remove("is-hidden"),vo.darkIconRef.classList.add("is-hidden")):(document.body.classList.remove("dark-theme"),vo.darkIconRef.classList.remove("is-hidden"),vo.lightIconRef.classList.add("is-hidden"))}vo.btnScrollTopRef.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),vo.btnScrollDownRef.addEventListener("click",(()=>{!function(e){window.scroll({left:0,top:e.offsetTop,behavior:"smooth"})}(vo.footerRef)})),window.addEventListener("scroll",(function(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e<t&&(vo.btnScrollTopRef.classList.add("btn__up--hidden"),vo.btnScrollDownRef.classList.remove("btn__up--hidden"));e>t&&(vo.btnScrollTopRef.classList.remove("btn__up--hidden"),vo.btnScrollDownRef.classList.add("btn__up--hidden"))})),vo.btnScrollTopRef.classList.add("btn__up--hidden"),vo.btnScrollDownRef.classList.add("btn__up--hidden"),vo.themeBtnRef.addEventListener("click",tp),"false"===localStorage.getItem("light")&&tp();var np={};
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.11.0
*/function ip(e){return ip="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ip(e)}function op(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=sp(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw r}}}}function rp(e){return function(e){if(Array.isArray(e))return ap(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||sp(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function sp(e,t){if(e){if("string"==typeof e)return ap(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ap(e,t):void 0}}function ap(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function lp(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function cp(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(np,"__esModule",{value:!0}),np.default=void 0;var up=function(){function e(t,n){var i=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),cp(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5}),cp(this,"transitionPrefix",void 0),cp(this,"isPassiveEventsSupported",void 0),cp(this,"transitionCapable",!1),cp(this,"isTouchDevice","ontouchstart"in window),cp(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),cp(this,"initialLocationHash",void 0),cp(this,"pushStateSupport","pushState"in history),cp(this,"isOpen",!1),cp(this,"isAnimating",!1),cp(this,"isClosing",!1),cp(this,"isFadeIn",!1),cp(this,"urlChangedOnce",!1),cp(this,"hashReseted",!1),cp(this,"historyHasChanges",!1),cp(this,"historyUpdateTimeout",null),cp(this,"currentImage",void 0),cp(this,"eventNamespace","simplelightbox"),cp(this,"domNodes",{}),cp(this,"loadedImages",[]),cp(this,"initialImageIndex",0),cp(this,"currentImageIndex",0),cp(this,"initialSelector",null),cp(this,"globalScrollbarWidth",0),cp(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,n),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof t?(this.initialSelector=t,this.elements=Array.from(document.querySelectorAll(t))):this.elements=void 0!==t.length&&t.length>0?Array.from(t):[t],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var o=[];this.elements=Array.from(this.elements).filter((function(e){var t=e.getAttribute(i.options.sourceAttr);return-1===o.indexOf(t)&&(o.push(t),!0)}))}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,(function(e){if(i.isValidLink(e.currentTarget)){if(e.preventDefault(),i.isAnimating)return!1;i.initialImageIndex=i.elements.indexOf(e.currentTarget),i.openImage(e.currentTarget)}})),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],(function(e){i.isOpen&&e.target===e.currentTarget&&i.close()})),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,(function(e){e.target.parentElement.classList.contains("sl-image")&&e.preventDefault()})),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle((function(e){if(i.controlCoordinates.swipeDiff=0,i.isAnimating&&"Escape"===e.key)return i.currentImage.setAttribute("src",""),i.isAnimating=!1,i.close();i.isOpen&&(e.preventDefault(),"Escape"===e.key&&i.close(),!i.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(e.key)>-1&&i.loadImage("ArrowRight"===e.key?1:-1))}),this.options.throttleInterval)),this.addEvents()}var t,n,i;return t=e,n=[{key:"checkPassiveEventsSupport",value:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}},{key:"generateQuerySelector",value:function(e){var t=e.tagName,n=e.id,i=e.className,o=e.parentNode;if("HTML"===t)return"HTML";var r=t;if(r+=""!==n?"#".concat(n):"",i)for(var s=i.split(/\s/),a=0;a<s.length;a++)r+=".".concat(s[a]);for(var l=1,c=e;c.previousElementSibling;c=c.previousElementSibling)l+=1;return r+=":nth-child(".concat(l,")"),"".concat(this.generateQuerySelector(o)," > ").concat(r)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var e,t=this.options.captionClass.split(/[\s,]+/);(e=this.domNodes.caption.classList).add.apply(e,rp(t))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(e,t){var n;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),t))}}},{key:"isValidLink",value:function(e){return!this.options.fileExt||e.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")$","i").test(e.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var e=(document.body||document.documentElement).style;return"transition"in e?"":"WebkitTransition"in e?"-webkit-":"MozTransition"in e?"-moz-":"OTransition"in e&&"-o"}},{key:"getScrollbarWidth",value:function(){var e,t=document.createElement("div");return t.classList.add("sl-scrollbar-measure"),document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e}},{key:"toggleScrollbar",value:function(e){var t=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===e){var i=window.innerWidth;if(!i){var o=document.documentElement.getBoundingClientRect();i=o.right-Math.abs(o.left)}if(document.body.clientWidth<i||this.isAppleDevice){var r=parseInt(document.body.style.paddingRight||0,10);t=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=r,(t>0||0==t&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=r+t+"px",n.forEach((function(e){var n=e.style.paddingRight,i=window.getComputedStyle(e)["padding-right"];e.dataset.originalPaddingRight=n,e.style.paddingRight="".concat(parseFloat(i)+t,"px")})))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight,n.forEach((function(e){var t=e.dataset.originalPaddingRight;void 0!==t&&(e.style.paddingRight=t)}));return t}},{key:"close",value:function(){var e=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var t=this.relatedElements[this.currentImageIndex];for(var n in t.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,(function(){e.options.disableScroll&&e.toggleScrollbar("show"),e.options.htmlClass&&""!==e.options.htmlClass&&document.querySelector("html").classList.remove(e.options.htmlClass),document.body.removeChild(e.domNodes.wrapper),document.body.removeChild(e.domNodes.overlay),e.domNodes.additionalHtml=null,t.dispatchEvent(new Event("closed.simplelightbox")),e.isClosing=!1})),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var e=this,t=this.currentImageIndex,n=this.relatedElements.length,i=t+1<0?n-1:t+1>=n-1?0:t+1,o=t-1<0?n-1:t-1>=n-1?0:t-1,r=new Image,s=new Image;r.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===e.loadedImages.indexOf(i)&&e.loadedImages.push(i),e.relatedElements[t].dispatchEvent(new Event("nextImageLoaded."+e.eventNamespace))})),r.setAttribute("src",this.relatedElements[i].getAttribute(this.options.sourceAttr)),s.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===e.loadedImages.indexOf(i)&&e.loadedImages.push(i),e.relatedElements[t].dispatchEvent(new Event("prevImageLoaded."+e.eventNamespace))})),s.setAttribute("src",this.relatedElements[o].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(e){var t=this,n=e;this.options.rtl&&(e=-e),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===e?"next":"prev")+"."+this.eventNamespace));var i=this.currentImageIndex+e;if(this.isAnimating||(i<0||i>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=i<0?this.relatedElements.length-1:i>this.relatedElements.length-1?0:i,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,(function(){t.isAnimating=!0,t.isClosing?t.isAnimating=!1:setTimeout((function(){var e=t.relatedElements[t.currentImageIndex];t.currentImage.setAttribute("src",e.getAttribute(t.options.sourceAttr)),-1===t.loadedImages.indexOf(e.getAttribute(t.options.sourceAttr))&&t.show(t.domNodes.spinner),t.domNodes.image.contains(t.domNodes.caption)&&t.domNodes.image.removeChild(t.domNodes.caption),t.adjustImage(n),t.options.preloading&&t.preload()}),100)}))}},{key:"adjustImage",value:function(e){var t=this;if(!this.currentImage)return!1;var n=new Image,i=window.innerWidth*this.options.widthRatio,o=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",(function(n){t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("error."+t.eventNamespace)),t.isAnimating=!1,t.isOpen=!0,t.domNodes.spinner.style.display="none";var i=1===e||-1===e;if(t.initialImageIndex===t.currentImageIndex&&i)return t.close();t.options.alertError&&alert(t.options.alertErrorMessage),t.loadImage(i?e:1)})),n.addEventListener("load",(function(n){void 0!==e&&(t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("changed."+t.eventNamespace)),t.relatedElements[t.currentImageIndex].dispatchEvent(new Event((1===e?"nextDone":"prevDone")+"."+t.eventNamespace))),t.options.history&&t.updateURL(),-1===t.loadedImages.indexOf(t.currentImage.getAttribute("src"))&&t.loadedImages.push(t.currentImage.getAttribute("src"));var r,s,a=n.target.width,l=n.target.height;if(t.options.scaleImageToRatio||a>i||l>o){var c=a/l>i/o?a/i:l/o;a/=c,l/=c}t.domNodes.image.style.top=(window.innerHeight-l)/2+"px",t.domNodes.image.style.left=(window.innerWidth-a-t.globalScrollbarWidth)/2+"px",t.domNodes.image.style.width=a+"px",t.domNodes.image.style.height=l+"px",t.domNodes.spinner.style.display="none",t.options.focus&&t.forceFocus(),t.fadeIn(t.currentImage,t.options.fadeSpeed,(function(){t.options.focus&&t.domNodes.wrapper.focus()})),t.isOpen=!0,"string"==typeof t.options.captionSelector?r="self"===t.options.captionSelector?t.relatedElements[t.currentImageIndex]:document.querySelector(t.generateQuerySelector(t.relatedElements[t.currentImageIndex])+" "+t.options.captionSelector):"function"==typeof t.options.captionSelector&&(r=t.options.captionSelector(t.relatedElements[t.currentImageIndex])),t.options.captions&&r&&(s="data"===t.options.captionType?r.dataset[t.options.captionsData]:"text"===t.options.captionType?r.innerHTML:r.getAttribute(t.options.captionsData)),t.options.loop?1===t.relatedElements.length?t.hide(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):t.show(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===t.currentImageIndex&&t.hide(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex>=t.relatedElements.length-1&&t.hide(t.domNodes.navigation.querySelector(".sl-next")),t.currentImageIndex>0&&t.show(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex<t.relatedElements.length-1&&t.show(t.domNodes.navigation.querySelector(".sl-next"))),1===e||-1===e?(t.options.animationSlide&&(t.slide(0,100*e+"px"),setTimeout((function(){t.slide(t.options.animationSpeed/1e3,"0px")}),50)),t.fadeIn(t.domNodes.image,t.options.fadeSpeed,(function(){t.isAnimating=!1,t.setCaption(s,a)}))):(t.isAnimating=!1,t.setCaption(s,a)),t.options.additionalHtml&&!t.domNodes.additionalHtml&&(t.domNodes.additionalHtml=document.createElement("div"),t.domNodes.additionalHtml.classList.add("sl-additional-html"),t.domNodes.additionalHtml.innerHTML=t.options.additionalHtml,t.domNodes.image.appendChild(t.domNodes.additionalHtml))}))}},{key:"zoomPanElement",value:function(e,t,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+e+","+t+") scale("+n+")"}},{key:"minMax",value:function(e,t,n){return e<t?t:e>n?n:e}},{key:"setZoomData",value:function(e,t,n){this.currentImage.dataset.scale=e,this.currentImage.dataset.translateX=t,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var e=this;if(this.addEventListener(window,"resize."+this.eventNamespace,(function(t){e.isOpen&&e.adjustImage()})),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout((function(){e.addEventListener(window,"hashchange."+e.eventNamespace,(function(t){e.isOpen&&e.hashchangeHandler()}))}),40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,(function(t){if(!t.currentTarget.tagName.match(/button/i))return!0;t.preventDefault(),e.controlCoordinates.swipeDiff=0,e.loadImage(t.currentTarget.classList.contains("sl-next")?1:-1)})),this.options.scrollZoom){var t=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],(function(n){if(e.controlCoordinates.mousedown||e.isAnimating||e.isClosing||!e.isOpen)return!0;0==e.controlCoordinates.containerHeight&&(e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)),n.preventDefault();var i=n.delta||n.wheelDelta;void 0===i&&(i=n.detail),i=Math.max(-1,Math.min(1,i)),t+=i*e.options.scrollZoomFactor*t,t=Math.max(1,Math.min(e.options.maxZoom,t)),e.controlCoordinates.targetScale=t;var o=document.documentElement.scrollTop||document.body.scrollTop;e.controlCoordinates.pinchOffsetX=n.pageX,e.controlCoordinates.pinchOffsetY=n.pageY-o||0,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1?(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)):(1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.setZoomData(e.controlCoordinates.targetScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}))}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],(function(t){if("A"===t.target.tagName&&"touchstart"===t.type)return!0;if("mousedown"===t.type)t.preventDefault(),e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.capture=!0;else{if(e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,1===e.controlCoordinates.touchCount){if(e.controlCoordinates.doubleTapped)return e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&e.currentImage.classList.remove("sl-transition")}),200),!1;e.controlCoordinates.doubleTapped=!0,setTimeout((function(){e.controlCoordinates.doubleTapped=!1}),300),e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)}else 2===e.controlCoordinates.touchCount&&(e.controlCoordinates.initialPointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.initialPointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.pinchOffsetX=(e.controlCoordinates.initialPointerOffsetX+e.controlCoordinates.initialPointerOffsetX2)/2,e.controlCoordinates.pinchOffsetY=(e.controlCoordinates.initialPointerOffsetY+e.controlCoordinates.initialPointerOffsetY2)/2,e.controlCoordinates.initialPinchDistance=Math.sqrt((e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)*(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)+(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)*(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)));e.controlCoordinates.capture=!0}return!!e.controlCoordinates.mousedown||(e.transitionCapable&&(e.controlCoordinates.imageLeft=parseInt(e.domNodes.image.style.left,10)),e.controlCoordinates.mousedown=!0,e.controlCoordinates.swipeDiff=0,e.controlCoordinates.swipeYDiff=0,e.controlCoordinates.swipeStart=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYStart=t.pageY||t.touches[0].pageY,!1)})),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],(function(t){if(!e.controlCoordinates.mousedown)return!0;if("touchmove"===t.type){if(!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.touches[0].clientX,e.controlCoordinates.pointerOffsetY=t.touches[0].clientY,e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.touchmoveCount++,e.controlCoordinates.touchCount>1?(e.controlCoordinates.pointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.pointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.targetPinchDistance=Math.sqrt((e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)*(e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)+(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)*(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)),null===e.controlCoordinates.initialPinchDistance&&(e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance),Math.abs(e.controlCoordinates.initialPinchDistance-e.controlCoordinates.targetPinchDistance)>=1&&(e.controlCoordinates.targetScale=e.minMax(e.controlCoordinates.targetPinchDistance/e.controlCoordinates.initialPinchDistance*e.controlCoordinates.initialScale,1,e.options.maxZoom),e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1&&(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY)):(e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale))}if("mousemove"===t.type&&e.controlCoordinates.mousedown){if("touchmove"==t.type)return!0;if(t.preventDefault(),!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.clientX,e.controlCoordinates.pointerOffsetY=t.clientY,e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}e.controlCoordinates.zoomed||(e.controlCoordinates.swipeEnd=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYEnd=t.pageY||t.touches[0].pageY,e.controlCoordinates.swipeDiff=e.controlCoordinates.swipeStart-e.controlCoordinates.swipeEnd,e.controlCoordinates.swipeYDiff=e.controlCoordinates.swipeYStart-e.controlCoordinates.swipeYEnd,e.options.animationSlide&&e.slide(0,-e.controlCoordinates.swipeDiff+"px"))})),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],(function(t){if(e.isTouchDevice&&"touchend"===t.type&&(e.controlCoordinates.touchCount=t.touches.length,0===e.controlCoordinates.touchCount?(e.currentImage&&e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1):1===e.controlCoordinates.touchCount?(e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY):e.controlCoordinates.touchCount>1&&(e.controlCoordinates.initialPinchDistance=null)),e.controlCoordinates.mousedown){e.controlCoordinates.mousedown=!1;var n=!0;e.options.loop||(0===e.currentImageIndex&&e.controlCoordinates.swipeDiff<0&&(n=!1),e.currentImageIndex>=e.relatedElements.length-1&&e.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(e.controlCoordinates.swipeDiff)>e.options.swipeTolerance&&n?e.loadImage(e.controlCoordinates.swipeDiff>0?1:-1):e.options.animationSlide&&e.slide(e.options.animationSpeed/1e3,"0px"),e.options.swipeClose&&Math.abs(e.controlCoordinates.swipeYDiff)>50&&Math.abs(e.controlCoordinates.swipeDiff)<e.options.swipeTolerance&&e.close()}})),this.addEventListener(this.domNodes.image,["dblclick"],(function(t){if(!e.isTouchDevice)return e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&(e.currentImage.classList.remove("sl-transition"),e.currentImage.style[e.transitionPrefix+"transform-origin"]=null)}),200),e.controlCoordinates.capture=!0,!1}))}},{key:"getDimensions",value:function(e){var t=window.getComputedStyle(e),n=e.offsetHeight,i=e.offsetWidth,o=parseFloat(t.borderTopWidth);return{height:n-parseFloat(t.borderBottomWidth)-o-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),width:i-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)}}},{key:"updateHash",value:function(){var e="pid="+(this.currentImageIndex+1),t=window.location.href.split("#")[0]+"#"+e;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,t):this.historyHasChanges?window.location.replace(t):window.location.hash=e,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(e,t){var n=this;this.options.captions&&e&&""!==e&&void 0!==e&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=t+"px",this.domNodes.caption.innerHTML=e,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout((function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)}),this.options.captionDelay))}},{key:"slide",value:function(e,t){if(!this.transitionCapable)return this.domNodes.image.style.left=t;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+t+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+e+"s linear"}},{key:"getRelated",value:function(e){return e&&!1!==e&&"nofollow"!==e?Array.from(this.elements).filter((function(t){return t.getAttribute("rel")===e})):this.elements}},{key:"openImage",value:function(e){var t=this;e.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(e.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(e);var n=e.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout((function(){e.dispatchEvent(new Event("shown."+t.eventNamespace))}),this.options.animationSpeed)}},{key:"forceFocus",value:function(){var e=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,(function(t){document===t.target||e.domNodes.wrapper===t.target||e.domNodes.wrapper.contains(t.target)||e.domNodes.wrapper.focus()}))}},{key:"addEventListener",value:function(e,t,n,i){e=this.wrap(e),t=this.wrap(t);var o,r=op(e);try{for(r.s();!(o=r.n()).done;){var s=o.value;s.namespaces||(s.namespaces={});var a,l=op(t);try{for(l.s();!(a=l.n()).done;){var c=a.value,u=i||!1;["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(c.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===ip(u)?u.passive=!0:u={passive:!0}),s.namespaces[c]=n,s.addEventListener(c.split(".")[0],n,u)}}catch(e){l.e(e)}finally{l.f()}}}catch(e){r.e(e)}finally{r.f()}}},{key:"removeEventListener",value:function(e,t){e=this.wrap(e),t=this.wrap(t);var n,i=op(e);try{for(i.s();!(n=i.n()).done;){var o,r=n.value,s=op(t);try{for(s.s();!(o=s.n()).done;){var a=o.value;r.namespaces&&r.namespaces[a]&&(r.removeEventListener(a.split(".")[0],r.namespaces[a]),delete r.namespaces[a])}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}}},{key:"fadeOut",value:function(e,t,n){var i,o=this,r=op(e=this.wrap(e));try{for(r.s();!(i=r.n()).done;){var s=i.value;s.style.opacity=parseFloat(s)||window.getComputedStyle(s).getPropertyValue("opacity")}}catch(e){r.e(e)}finally{r.f()}this.isFadeIn=!1;var a=16.66666/(t||this.options.fadeSpeed);!function t(){var i=parseFloat(e[0].style.opacity);if((i-=a)<0){var r,s=op(e);try{for(s.s();!(r=s.n()).done;){var l=r.value;l.style.display="none",l.style.opacity=1}}catch(e){s.e(e)}finally{s.f()}n&&n.call(o,e)}else{var c,u=op(e);try{for(u.s();!(c=u.n()).done;)c.value.style.opacity=i}catch(e){u.e(e)}finally{u.f()}requestAnimationFrame(t)}}()}},{key:"fadeIn",value:function(e,t,n,i){var o,r=this,s=op(e=this.wrap(e));try{for(s.s();!(o=s.n()).done;){var a=o.value;a.style.opacity=0,a.style.display=i||"block"}}catch(e){s.e(e)}finally{s.f()}this.isFadeIn=!0;var l=parseFloat(e[0].dataset.opacityTarget||1),c=16.66666*l/(t||this.options.fadeSpeed);!function t(){var i=parseFloat(e[0].style.opacity);if((i+=c)>l){var o,s=op(e);try{for(s.s();!(o=s.n()).done;)o.value.style.opacity=l}catch(e){s.e(e)}finally{s.f()}n&&n.call(r,e)}else{var a,u=op(e);try{for(u.s();!(a=u.n()).done;)a.value.style.opacity=i}catch(e){u.e(e)}finally{u.f()}if(!r.isFadeIn)return;requestAnimationFrame(t)}}()}},{key:"hide",value:function(e){var t,n=op(e=this.wrap(e));try{for(n.s();!(t=n.n()).done;){var i=t.value;"none"!=i.style.display&&(i.dataset.initialDisplay=i.style.display),i.style.display="none"}}catch(e){n.e(e)}finally{n.f()}}},{key:"show",value:function(e,t){var n,i=op(e=this.wrap(e));try{for(i.s();!(n=i.n()).done;){var o=n.value;o.style.display=o.dataset.initialDisplay||t||"block"}}catch(e){i.e(e)}finally{i.f()}}},{key:"wrap",value:function(e){return"function"==typeof e[Symbol.iterator]&&"string"!=typeof e?e:[e]}},{key:"on",value:function(e,t){e=this.wrap(e);var n,i=op(this.elements);try{for(i.s();!(n=i.n()).done;){var o=n.value;o.fullyNamespacedEvents||(o.fullyNamespacedEvents={});var r,s=op(e);try{for(s.s();!(r=s.n()).done;){var a=r.value;o.fullyNamespacedEvents[a]=t,o.addEventListener(a,t)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){i.e(e)}finally{i.f()}return this}},{key:"off",value:function(e){e=this.wrap(e);var t,n=op(this.elements);try{for(n.s();!(t=n.n()).done;){var i,o=t.value,r=op(e);try{for(r.s();!(i=r.n()).done;){var s=i.value;void 0!==o.fullyNamespacedEvents&&s in o.fullyNamespacedEvents&&o.removeEventListener(s,o.fullyNamespacedEvents[s])}}catch(e){r.e(e)}finally{r.f()}}}catch(e){n.e(e)}finally{n.f()}return this}},{key:"open",value:function(e){e=e||this.elements[0],"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get(0)),this.initialImageIndex=this.elements.indexOf(e),this.initialImageIndex>-1&&this.openImage(e)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var e=this.options,t=this.initialSelector;return this.destroy(),this.constructor(t,e),this}}],n&&lp(t.prototype,n),i&&lp(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),hp=up;np.default=hp,e.SimpleLightbox=up;const dp=new(t(np))(".team-modal__link",{sourceAttr:"href",captionsData:"alt",rel:"nofollow",fileExt:"webp|jpg",loop:!0,captionDelay:300,animationSpeed:300,animationSlide:!0,alertError:!0});function fp(e){e.target.classList.contains("backdrop")&&(mp(),yp())}function pp(e){dp.on("shown.simplelightbox",yp)&&dp.on("closed.simplelightbox",gp),"Escape"===e.code&&(mp(),yp())}function mp(){vo.teamModal.classList.toggle("is-hidden"),vo.body.classList.toggle("no-scroll")}function gp(){vo.teamModal.addEventListener("click",fp),vo.body.addEventListener("keydown",pp)}function yp(){vo.body.removeEventListener("keydown",pp),vo.teamModal.removeEventListener("click",fp)}vo.btnOpenRef.addEventListener("click",(function(){mp(),gp()})),vo.btnCloseRef.addEventListener("click",(function(){mp(),yp()})),vo.headerUserLink.addEventListener("click",(function(){vo.form.removeEventListener("submit",Xf)}));const _p=new Qa,vp=new bo;Qf.enabled({timeDelay:20}),function({delayAfterStop:e=400}){document.addEventListener("DOMContentLoaded",(()=>{console.log("ready"),Qf.disabled(e)}))}({delayAfterStop:400}),ep(),vo.filmList.addEventListener("click",(async function e(t){if(!t.target.classList.contains("film__img"))return;document.body.style.overflow="hidden",t.currentTarget.removeEventListener("click",e);const n=t.target.dataset.id,i=ol((await rl.getCurrentFilm({id:n})).data),o=Za.create(sl.createModalFilmDetails(i,n),{onShow:e=>{e.element().querySelector(".film-modal__close").onclick=e.close},onClose:n=>{document.body.style.overflow="visible",t.target.closest(".films__list").addEventListener("click",e)}});o.show();const r=document.querySelector(".film-modal__btn--queue"),s=document.querySelector(".film-modal__btn--watched");al=n,r.addEventListener("click",Df),s.addEventListener("click",Mf),Uf("userQueue"),document.addEventListener("keydown",(function(e){if("Escape"!==e.code)return;o.close()}),{once:!0}),document.querySelector(".film-modal__trailer").addEventListener("click",il)})),vo.pagRef.addEventListener("click",(function(e){const t=vo.currentPage,n=vo.nextPage,i=vo.prevPage;if(e.target.dataset.numbId&&(_p.actualPage=Number(e.target.dataset.numbId)),"prev"===e.target.dataset.id){if(1===_p.actualPage)return;_p.actualPage-=1}if("next"===e.target.dataset.id){if(_p.actualPage===_p.totalPages)return;_p.actualPage+=1}_p.actualPage===_p.totalPages?n.classList.add("disabled"):n.classList.contains("disabled")&&n.classList.remove("disabled"),1===_p.actualPage?i.classList.add("disabled"):i.classList.remove("disabled"),ep(),t.innerHTML=_p.actualPage}));
//# sourceMappingURL=index.1d003076.js.map
