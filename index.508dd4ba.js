!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired76b;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired76b=o),o.register("iFsN9",(function(t,n){e(t.exports,"app",(function(){return r})),o("fkNhc");var r=(0,o("MjY8E").initializeApp)({apiKey:"AIzaSyD7a39CtgzeuIx1kkpFRZ7MvO1bdmoGCT4",authDomain:"filmoteka-c3a99.firebaseapp.com",databaseURL:"https://filmoteka-c3a99-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-c3a99",storageBucket:"filmoteka-c3a99.appspot.com",messagingSenderId:"412361816258",appId:"1:412361816258:web:1c806438765e9ded7b235b",measurementId:"G-SJPWP9Q9CH"})})),o.register("fkNhc",(function(t,n){e(t.exports,"initializeApp",(function(){return o("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return o("MjY8E").registerVersion}));o("MjY8E");
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
(0,o("MjY8E").registerVersion)("firebase","9.15.0","app")})),o.register("MjY8E",(function(n,r){e(n.exports,"_registerComponent",(function(){return E})),e(n.exports,"_getProvider",(function(){return O})),e(n.exports,"SDK_VERSION",(function(){return A})),e(n.exports,"initializeApp",(function(){return D})),e(n.exports,"getApp",(function(){return P})),e(n.exports,"registerVersion",(function(){return L}));var i=o("bpxeT"),a=o("8MBJY"),s=o("a2hTj"),c=o("hKHmD"),u=o("8nrFW"),l=o("2TvXO"),d=o("6ExWU"),f=o("kZfxc"),p=o("2xDiJ"),h=o("ajgRO"),v=(p=o("2xDiJ"),function(){"use strict";function e(n){t(a)(this,e),this.container=n}return t(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var m,g,y="@firebase/app",b="0.9.0",k=new(0,f.Logger)("@firebase/app"),x="[DEFAULT]",w=(m={},t(c)(m,y,"fire-core"),t(c)(m,"@firebase/app-compat","fire-core-compat"),t(c)(m,"@firebase/analytics","fire-analytics"),t(c)(m,"@firebase/analytics-compat","fire-analytics-compat"),t(c)(m,"@firebase/app-check","fire-app-check"),t(c)(m,"@firebase/app-check-compat","fire-app-check-compat"),t(c)(m,"@firebase/auth","fire-auth"),t(c)(m,"@firebase/auth-compat","fire-auth-compat"),t(c)(m,"@firebase/database","fire-rtdb"),t(c)(m,"@firebase/database-compat","fire-rtdb-compat"),t(c)(m,"@firebase/functions","fire-fn"),t(c)(m,"@firebase/functions-compat","fire-fn-compat"),t(c)(m,"@firebase/installations","fire-iid"),t(c)(m,"@firebase/installations-compat","fire-iid-compat"),t(c)(m,"@firebase/messaging","fire-fcm"),t(c)(m,"@firebase/messaging-compat","fire-fcm-compat"),t(c)(m,"@firebase/performance","fire-perf"),t(c)(m,"@firebase/performance-compat","fire-perf-compat"),t(c)(m,"@firebase/remote-config","fire-rc"),t(c)(m,"@firebase/remote-config-compat","fire-rc-compat"),t(c)(m,"@firebase/storage","fire-gcs"),t(c)(m,"@firebase/storage-compat","fire-gcs-compat"),t(c)(m,"@firebase/firestore","fire-fst"),t(c)(m,"@firebase/firestore-compat","fire-fst-compat"),t(c)(m,"fire-js","fire-js"),t(c)(m,"firebase","fire-js-all"),m),I=new Map,C=new Map;function _(e,t){try{e.container.addComponent(t)}catch(n){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function E(e){var t=e.name;if(C.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;C.set(t,e);var n=!0,r=!1,i=void 0;try{for(var o,a=I.values()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){_(o.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!0}function O(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var S=(g={},t(c)(g,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(c)(g,"bad-app-name","Illegal App name: '{$appName}"),t(c)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(c)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),t(c)(g,"no-options","Need to provide options, when not being deployed to hosting via source."),t(c)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(c)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(c)(g,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t(c)(g,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t(c)(g,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t(c)(g,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),g),N=new(0,p.ErrorFactory)("app","Firebase",S),T=function(){"use strict";function e(n,r,i){var o=this;t(a)(this,e),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,d.Component)("app",(function(){return o}),"PUBLIC"))}return t(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw N.create("app-deleted",{appName:this._name})}}]),e}(),A="9.15.0";function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:x,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw N.create("bad-app-name",{appName:String(o)});if(n||(n=(0,p.getDefaultAppConfig)()),!n)throw N.create("no-options");var a=I.get(o);if(a){if((0,p.deepEqual)(n,a.options)&&(0,p.deepEqual)(i,a.config))return a;throw N.create("duplicate-app",{appName:o})}var s=new(0,d.ComponentContainer)(o),c=!0,u=!1,l=void 0;try{for(var f,h=C.values()[Symbol.iterator]();!(c=(f=h.next()).done);c=!0){var v=f.value;s.addComponent(v)}}catch(e){u=!0,l=e}finally{try{c||null==h.return||h.return()}finally{if(u)throw l}}var m=new T(n,i,s);return I.set(o,m),m}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=I.get(e);if(!t&&e===x)return D();if(!t)throw N.create("no-app",{appName:e});return t}function L(e,t,n){var r,i=null!==(r=w[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}E(new(0,d.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
var R="firebase-heartbeat-store",M=null;function j(){return M||(M=(0,h.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(R)}}).catch((function(e){throw N.create("idb-open",{originalErrorMessage:e.message})}))),M}function U(e){return W.apply(this,arguments)}function W(){return(W=t(i)(t(l).mark((function e(n){var r,i;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:return r=e.sent,e.abrupt("return",r.transaction(R).objectStore(R).get(H(n)));case 7:e.prev=7,e.t0=e.catch(0),e.t0 instanceof p.FirebaseError?k.warn(e.t0.message):(i=N.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(i.message));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function F(e,t){return z.apply(this,arguments)}function z(){return(z=t(i)(t(l).mark((function e(n,r){var i,o,a,s;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j();case 3:return i=e.sent,o=i.transaction(R,"readwrite"),a=o.objectStore(R),e.next=8,a.put(r,H(n));case 8:return e.abrupt("return",o.done);case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof p.FirebaseError?k.warn(e.t0.message):(s=N.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(s.message));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function H(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var B=function(){"use strict";function e(n){var r=this;t(a)(this,e),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new X(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return t(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),o=Y(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==o&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r,i,o,a,s;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(r=Y(),i=q(e._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:o})),e._heartbeatsCache.lastSentHeartbeatDate=r,!(a.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=a,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),n)})))()}}]),e}();function Y(){return(new Date).toISOString().substring(0,10)}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,c=function(e,i){var o=i.value,a=n.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),G(n)>t)return a.dates.pop(),"break"}else if(n.push({agent:o.agent,dates:[o.date]}),G(n)>t)return n.pop(),"break";r=r.slice(1)},u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var l=c(u,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}return{heartbeatsToSend:n,unsentEntries:r}}var V,X=function(){"use strict";function e(n){t(a)(this,e),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,p.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,U(e.app);case 9:return r=t.sent,t.abrupt("return",r||{heartbeats:[]});case 11:case"end":return t.stop()}}),n)})))()}},{key:"overwrite",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,n.read();case 10:return o=t.sent,t.abrupt("return",F(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),r)})))()}},{key:"add",value:function(e){var n=this;return t(i)(t(l).mark((function r(){var i,o;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return o=r.sent,r.abrupt("return",F(n.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t(u)(o.heartbeats).concat(t(u)(e.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),e}();function G(e){return(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */V="",E(new(0,d.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),E(new(0,d.Component)("heartbeat",(function(e){return new B(e)}),"PRIVATE")),L(y,b,V),L(y,b,"esm2017"),L("fire-js","")})),o.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function s(e){n(a,i,o,s,c,"next",e)}function c(e){n(a,i,o,s,c,"throw",e)}s(void 0)}))}}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),o.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||a.default(e)||i.default()};var n=s(o("kMC0W")),r=s(o("7AJDX")),i=s(o("8CtQK")),a=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new S(r||[]);return o._invoke=function(e,t,n){var r=d;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return T()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=_(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?h:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};c(b,o,(function(){return this}));var k=Object.getPrototypeOf,x=k&&k(k(N([])));x&&x!==n&&r.call(x,o)&&(b=x);var w=y.prototype=m.prototype=Object.create(b);function I(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function n(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}}function _(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:t,done:!0}}return g.prototype=y,c(w,"constructor",y),c(y,"constructor",g),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},I(C.prototype),c(C.prototype,a,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new C(u(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(w),c(w,s,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),o.register("6ExWU",(function(n,r){e(n.exports,"Component",(function(){return f})),e(n.exports,"ComponentContainer",(function(){return v}));var i=o("bpxeT"),a=o("8MBJY"),s=o("a2hTj"),c=o("1t1Wn"),u=o("8nrFW"),l=o("2TvXO"),d=o("2xDiJ"),f=function(){"use strict";function e(n,r,i){t(a)(this,e),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),p="[DEFAULT]",h=function(){"use strict";function e(n,r){t(a)(this,e),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,d.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:p})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=t(c)(o.value,2),u=s[0],l=s[1],d=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:d});l.resolve(f)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(i)(t(l).mark((function n(){var r;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(e.instances.values()),n.next=3,Promise.all(t(u)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(u)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:r}),a=!0,s=!1,u=void 0;try{for(var l,d=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(l=d.next()).done);a=!0){var f=t(c)(l.value,2),p=f[0],h=f[1],v=this.normalizeInstanceIdentifier(p);i===v&&h.resolve(o)}}catch(e){s=!0,u=e}finally{try{a||null==d.return||d.return()}finally{if(s)throw u}}return o}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,o=void 0;try{for(var a,s=n[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var c=a.value;try{c(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===p?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.component?this.component.multipleInstances?e:p:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(n){t(a)(this,e),this.name=n,this.providers=new Map}return t(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),o.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||a.default(e,t)||i.default()};var n=s(o("8slrw")),r=s(o("7AJDX")),i=s(o("ifqQW")),a=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("2xDiJ",(function(r,i){e(r.exports,"assert",(function(){return g})),e(r.exports,"assertionError",(function(){return y})),e(r.exports,"base64",(function(){return k})),e(r.exports,"base64Encode",(function(){return x})),e(r.exports,"base64urlEncodeWithoutPadding",(function(){return w})),e(r.exports,"base64Decode",(function(){return I})),e(r.exports,"deepCopy",(function(){return C})),e(r.exports,"getUA",(function(){return E})),e(r.exports,"isMobileCordova",(function(){return O})),e(r.exports,"isBrowserExtension",(function(){return S})),e(r.exports,"isReactNative",(function(){return N})),e(r.exports,"isIE",(function(){return T})),e(r.exports,"isNodeSdk",(function(){return A})),e(r.exports,"isIndexedDBAvailable",(function(){return D})),e(r.exports,"validateIndexedDBOpenable",(function(){return P})),e(r.exports,"getDefaultEmulatorHost",(function(){return M})),e(r.exports,"getDefaultEmulatorHostnameAndPort",(function(){return j})),e(r.exports,"getDefaultAppConfig",(function(){return U})),e(r.exports,"getExperimentalSetting",(function(){return W})),e(r.exports,"Deferred",(function(){return F})),e(r.exports,"createMockUserToken",(function(){return z})),e(r.exports,"FirebaseError",(function(){return H})),e(r.exports,"ErrorFactory",(function(){return B})),e(r.exports,"jsonEval",(function(){return V})),e(r.exports,"stringify",(function(){return X})),e(r.exports,"isValidFormat",(function(){return K})),e(r.exports,"isAdmin",(function(){return J})),e(r.exports,"contains",(function(){return Z})),e(r.exports,"safeGet",(function(){return Q})),e(r.exports,"isEmpty",(function(){return $})),e(r.exports,"map",(function(){return ee})),e(r.exports,"deepEqual",(function(){return te})),e(r.exports,"querystring",(function(){return re})),e(r.exports,"querystringDecode",(function(){return ie})),e(r.exports,"extractQuerystring",(function(){return oe})),e(r.exports,"Sha1",(function(){return ae})),e(r.exports,"createSubscribe",(function(){return se})),e(r.exports,"errorPrefix",(function(){return le})),e(r.exports,"stringToByteArray",(function(){return de})),e(r.exports,"stringLength",(function(){return fe})),e(r.exports,"getModularInstance",(function(){return pe}));var a=o("ds8z5"),s=o("8MBJY"),c=o("a2hTj"),u=o("eYQtU"),l=o("1t1Wn"),d=(o("8nrFW"),o("4c7YB")),f=o("2MbLg"),p=o("6qd2L"),h=!1,v=!1,m="${JSCORE_VERSION}",g=function(e,t){if(!e)throw y(t)},y=function(e){return new Error("Firebase Database ("+m+") INTERNAL ASSERT FAILED: "+e)},b=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},k={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,l=o>>2,d=(3&o)<<4|s>>4,f=(15&s)<<2|u>>6,p=63&u;c||(p=64,a||(f=64)),r.push(n[l],n[d],n[f],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{var s=e[n++],c=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&c)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,c=++i<e.length?n[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==c)throw Error();var u=o<<2|a>>4;if(r.push(u),64!==s){var l=a<<4&240|s>>2;if(r.push(l),64!==c){var d=s<<6&192|c;r.push(d)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},x=function(e){var t=b(e);return k.encodeByteArray(t,!0)},w=function(e){return x(e).replace(/\./g,"")},I=function(e){try{return k.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function C(e){return _(void 0,e)}function _(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=_(e[n],t[n]));return e}
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
function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function O(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function S(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function N(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){var e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){return!0===h||!0===v}function D(){try{return"object"==typeof indexedDB}catch(e){return!1}}function P(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
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
var L=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},R=function(){try{return L()||function(){if(void 0!==p&&void 0!==p.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&I(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},M=function(e){var t,n;return null===(n=null===(t=R())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},j=function(e){var t=M(e);if(t){var n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error("Invalid host ".concat(t," with no separate hostname and port!"));var r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]}},U=function(){var e;return null===(e=R())||void 0===e?void 0:e.config},W=function(e){var t;return null===(t=R())||void 0===t?void 0:t["_".concat(e)]},F=function(){"use strict";function e(){var n=this;t(s)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return t(c)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),e}();
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
function z(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var o=Object.assign({iss:"https://securetoken.google.com/".concat(n),aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[w(JSON.stringify({alg:"none",type:"JWT"})),w(JSON.stringify(o)),""].join(".")}
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
 */var H=function(e){"use strict";t(u)(r,e);var n=t(f)(r);function r(e,i,o){var c;return t(s)(this,r),(c=n.call(this,i)).code=e,c.customData=o,c.name="FirebaseError",Object.setPrototypeOf(t(a)(c),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(a)(c),B.prototype.create),c}return r}(t(d)(Error)),B=function(){"use strict";function e(n,r,i){t(s)(this,e),this.service=n,this.serviceName=r,this.errors=i}return t(c)(e,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?Y(a,i):"Error",c="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),u=new H(o,c,i);return u}}]),e}();function Y(e,t){return e.replace(q,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var q=/\{\$([^}]+)}/g;
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
 */function V(e){return JSON.parse(e)}function X(e){return JSON.stringify(e)}
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
 */var G=function(e){var t={},n={},r={},i="";try{var o=e.split(".");t=V(I(o[0])||""),n=V(I(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},K=function(e){var t=G(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},J=function(e){var t=G(e).claims;return"object"==typeof t&&!0===t.admin};
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
function Z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Q(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function $(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ee(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function te(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,c=n[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var u=s.value;if(!r.includes(u))return!1;var l=e[u],d=t[u];if(ne(l)&&ne(d)){if(!te(l,d))return!1}else if(l!==d)return!1}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}var f=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{f||null==m.return||m.return()}finally{if(p)throw h}}return!0}function ne(e){return null!==e&&"object"==typeof e}
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
function re(e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=function(e,r){var i=t(l)(r.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){n.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},c=Object.entries(e)[Symbol.iterator]();!(r=(a=c.next()).done);r=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n.length?"&"+n.join("&"):""}function ie(e){var n={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var r=t(l)(e.split("="),2),i=r[0],o=r[1];n[decodeURIComponent(i)]=decodeURIComponent(o)}})),n}function oe(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var ae=function(){"use strict";function e(){t(s)(this,e),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return t(c)(e,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var o=16;o<80;o++){var a=n[o-3]^n[o-8]^n[o-14]^n[o-16];n[o]=4294967295&(a<<1|a>>>31)}for(var s,c,u=this.chain_[0],l=this.chain_[1],d=this.chain_[2],f=this.chain_[3],p=this.chain_[4],h=0;h<80;h++){h<40?h<20?(s=f^l&(d^f),c=1518500249):(s=l^d^f,c=1859775393):h<60?(s=l&d|f&(l|d),c=2400959708):(s=l^d^f,c=3395469782);var v=(u<<5|u>>>27)+s+p+c+n[h]&4294967295;p=f,f=d,d=4294967295&(l<<30|l>>>2),l=u,u=v}this.chain_[0]=this.chain_[0]+u&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+d&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[r]=this.chain_[i]>>o&255,++r;return e}}]),e}();function se(e,t){var n=new ce(e,t);return n.subscribe.bind(n)}var ce=function(){"use strict";function e(n,r){var i=this;t(s)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return t(c)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=ue),void 0===r.error&&(r.error=ue),void 0===r.complete&&(r.complete=ue);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function ue(){}
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
 */function le(e,t){return"".concat(e," failed: ").concat(t," argument ")}
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
var de=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var o=i-55296;r++,g(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},fe=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function pe(e){return e&&e._delegate?e._delegate:e}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n}})),o.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),o.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return c(e)};var n=s(o("ge8co")),r=s(o("cZGw3")),i=s(o("fVNic")),a=s(o("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){var t="function"==typeof Map?new Map:void 0;return c=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return n.default(e,arguments,i.default(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a.default(o,e)},c(e)}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return a.apply(null,arguments)};var n,r=(n=o("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,n){return(a=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&r.default(o,n.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,o=r.default(e);if(t){var a=r.default(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i.default(this,n)}};var n=a(o("aTHs7")),r=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(o("ds8z5")),r=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,d=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&p())}function p(){if(!l){var e=s(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("kZfxc",(function(n,r){e(n.exports,"LogLevel",(function(){return i})),e(n.exports,"Logger",(function(){return g})),e(n.exports,"setLogLevel",(function(){return y})),e(n.exports,"setUserLogHandler",(function(){return b}));var i,a,s=o("8MBJY"),c=o("a2hTj"),u=o("hKHmD"),l=o("8nrFW"),d=[];(a=i||(i={}))[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT";var f,p={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},h=i.INFO,v=(f={},t(u)(f,i.DEBUG,"log"),t(u)(f,i.VERBOSE,"log"),t(u)(f,i.INFO,"info"),t(u)(f,i.WARN,"warn"),t(u)(f,i.ERROR,"error"),f),m=function(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];var a;if(!(n<e.logLevel)){var s=(new Date).toISOString(),c=v[n];if(!c)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(a=console)[c].apply(a,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},g=function(){"use strict";function e(n){t(s)(this,e),this.name=n,this._logLevel=h,this._logHandler=m,this._userLogHandler=null,d.push(this)}return t(c)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?p[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(t(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(t(l)(n)))}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(t(l)(n)))}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(t(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(t(l)(n)))}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(t(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(t(l)(n)))}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(t(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(t(l)(n)))}}]),e}();function y(e){d.forEach((function(t){t.setLogLevel(e)}))}function b(e,t){var n=!0,r=!1,o=void 0;try{for(var a,s=d[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var c=a.value,u=null;t&&t.level&&(u=p[t.level]),c.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];var s=o.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=u?u:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}catch(e){r=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}}})),o.register("ajgRO",(function(n,r){e(n.exports,"openDB",(function(){return l}));var i=o("bpxeT"),a=o("dDDEV"),s=o("8nrFW"),c=o("2TvXO"),u=o("kKOTz");u=o("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,o=n.blocking,a=n.terminated,s=indexedDB.open(e,t),c=(0,u.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,u.w)(s.result),e.oldVersion,e.newVersion,(0,u.w)(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),c.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),c}var d=["get","getKey","getAll","getAllKeys","count"],f=["put","add","delete","clear"],p=new Map;function h(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(p.get(n))return p.get(n);var r=n.replace(/FromIndex$/,""),o=n!==r,a=f.includes(r);if(r in(o?IDBIndex:IDBObjectStore).prototype&&(a||d.includes(r))){var u,l=(u=t(i)(t(c).mark((function e(n){var i,u,l,d,f,p,h=arguments;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=h.length,u=new Array(i>1?i-1:0),l=1;l<i;l++)u[l-1]=h[l];return f=this.transaction(n,a?"readwrite":"readonly"),p=f.store,o&&(p=p.index(u.shift())),e.next=7,Promise.all([(d=p)[r].apply(d,t(s)(u)),a&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)});return p.set(n,l),l}}}(0,u.r)((function(e){return t(a)({},e,{get:function(t,n,r){return h(t,n)||e.get(t,n,r)},has:function(t,n){return!!h(t,n)||e.has(t,n)}})}))})),o.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=o("hKHmD"))&&n.__esModule?n:{default:n}})),o.register("kKOTz",(function(n,r){e(n.exports,"w",(function(){return g})),e(n.exports,"r",(function(){return h}));var i,a,s=o("8nrFW");var c=new WeakMap,u=new WeakMap,l=new WeakMap,d=new WeakMap,f=new WeakMap;var p={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function h(e){p=e(p)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(y(this),n),g(c.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(e.apply(y(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var a,c=(a=e).call.apply(a,[y(this),n].concat(t(s)(i)));return l.set(c,n.sort?n.sort():[n]),g(c)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!u.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),r()},o=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));u.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,p):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(g(t.result)),r()},o=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&c.set(e,t)})).catch((function(){})),f.set(n,t),n;var t,n;if(d.has(e))return d.get(e);var r=m(e);return r!==e&&(d.set(e,r),f.set(r,e)),r}var y=function(e){return f.get(e)}})),o.register("gQOBw",(function(t,n){e(t.exports,"getAuth",(function(){return o("ax7qk").n})),e(t.exports,"signOut",(function(){return o("ax7qk").y})),e(t.exports,"GoogleAuthProvider",(function(){return o("ax7qk").Q})),e(t.exports,"signInWithPopup",(function(){return o("ax7qk").c})),e(t.exports,"onAuthStateChanged",(function(){return o("ax7qk").v})),o("eMcUM")})),o.register("eMcUM",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return o("ax7qk").Q})),e(t.exports,"getAuth",(function(){return o("ax7qk").n})),e(t.exports,"onAuthStateChanged",(function(){return o("ax7qk").v})),e(t.exports,"signInWithPopup",(function(){return o("ax7qk").c})),e(t.exports,"signOut",(function(){return o("ax7qk").y})),o("2xDiJ"),o("MjY8E"),o("kZfxc"),o("6ExWU");o("ax7qk")})),o.register("ax7qk",(function(n,r){e(n.exports,"Q",(function(){return xt})),e(n.exports,"v",(function(){return Mt})),e(n.exports,"y",(function(){return jt})),e(n.exports,"c",(function(){return Nn})),e(n.exports,"n",(function(){return Er}));var i=o("ds8z5"),a=o("bpxeT"),s=o("8MBJY"),c=o("a2hTj"),u=o("hKHmD"),l=o("jh8P3"),d=o("fVNic"),f=o("eYQtU"),p=o("1t1Wn"),h=o("8nrFW"),v=o("2MbLg"),m=o("2TvXO"),g=o("2xDiJ"),y=o("MjY8E"),b=o("kZfxc"),k=o("4tSb9"),x=o("6ExWU");function w(){return t(u)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var I=w,C=new(0,g.ErrorFactory)("auth","Firebase",w()),_=new(0,b.Logger)("@firebase/auth");function E(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;_.logLevel<=b.LogLevel.ERROR&&(o=_).error.apply(o,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(t(h)(r)))}
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
 */function O(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw A.apply(void 0,[e].concat(t(h)(r)))}function S(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return A.apply(void 0,[e].concat(t(h)(r)))}function N(e,n,r){var i=Object.assign(Object.assign({},I()),t(u)({},n,r));return new(0,g.ErrorFactory)("auth","Firebase",i).create(n,{appName:e.name})}function T(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&O(e,"argument-error"),N(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function A(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o;if("string"!=typeof e){var a,s=r[0],c=t(h)(r.slice(1));return c[0]&&(c[0].appName=e.name),(a=e._errorFactory).create.apply(a,[s].concat(t(h)(c)))}return(o=C).create.apply(o,[e].concat(t(h)(r)))}function D(e,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];if(!e)throw A.apply(void 0,[n].concat(t(h)(i)))}function P(e){var t="INTERNAL ASSERTION FAILED: "+e;throw E(t),new Error(t)}function L(e,t){e||P(t)}
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
 */var R=new Map;function M(e){L(e instanceof Function,"Expected a class definition");var t=R.get(e);return t?(L(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,R.set(e,t),t)}
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
 */function j(e,t){var n=(0,y._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return r;O(r,"already-initialized")}return n.initialize({options:t})}
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
function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function W(){return"http:"===F()||"https:"===F()}function F(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var z=function(){"use strict";function e(n,r){t(s)(this,e),this.shortDelay=n,this.longDelay=r,L(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return t(c)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(W()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
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
 */function H(e,t){L(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var B,Y=function(){"use strict";function e(){t(s)(this,e)}return t(c)(e,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void P("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void P("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void P("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),q=(B={},t(u)(B,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(u)(B,"MISSING_CUSTOM_TOKEN","internal-error"),t(u)(B,"INVALID_IDENTIFIER","invalid-email"),t(u)(B,"MISSING_CONTINUE_URI","internal-error"),t(u)(B,"INVALID_PASSWORD","wrong-password"),t(u)(B,"MISSING_PASSWORD","internal-error"),t(u)(B,"EMAIL_EXISTS","email-already-in-use"),t(u)(B,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(u)(B,"INVALID_IDP_RESPONSE","invalid-credential"),t(u)(B,"INVALID_PENDING_TOKEN","invalid-credential"),t(u)(B,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(u)(B,"MISSING_REQ_TYPE","internal-error"),t(u)(B,"EMAIL_NOT_FOUND","user-not-found"),t(u)(B,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(u)(B,"EXPIRED_OOB_CODE","expired-action-code"),t(u)(B,"INVALID_OOB_CODE","invalid-action-code"),t(u)(B,"MISSING_OOB_CODE","internal-error"),t(u)(B,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(u)(B,"INVALID_ID_TOKEN","invalid-user-token"),t(u)(B,"TOKEN_EXPIRED","user-token-expired"),t(u)(B,"USER_NOT_FOUND","user-token-expired"),t(u)(B,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(u)(B,"INVALID_CODE","invalid-verification-code"),t(u)(B,"INVALID_SESSION_INFO","invalid-verification-id"),t(u)(B,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(u)(B,"MISSING_SESSION_INFO","missing-verification-id"),t(u)(B,"SESSION_EXPIRED","code-expired"),t(u)(B,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(u)(B,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(u)(B,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(u)(B,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(u)(B,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(u)(B,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(u)(B,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(u)(B,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(u)(B,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(u)(B,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(u)(B,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),B),V=new z(3e4,6e4);function X(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function G(e,t,n,r){return K.apply(this,arguments)}function K(){return K=t(a)(t(m).mark((function e(n,r,i,o){var s,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",J(n,s,t(a)(t(m).mark((function e(){var a,s,c,u;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===r?s=o:a={body:JSON.stringify(o)}),c=(0,g.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(u=e.sent)["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",Y.fetch()(ee(n,n.config.apiHost,i,c),Object.assign({method:r,headers:u,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function J(e,t,n){return Z.apply(this,arguments)}function Z(){return(Z=t(a)(t(m).mark((function e(n,r,i){var o,a,s,c,u,l,d,f,h;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n._canInitEmulator=!1,o=Object.assign(Object.assign({},q),r),e.prev=2,a=new te(n),e.next=6,Promise.race([i(),a.promise]);case 6:return s=e.sent,a.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw ne(n,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(u=s.ok?c.errorMessage:c.error.message,l=t(p)(u.split(" : "),2),d=l[0],f=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==d){e.next=23;break}throw ne(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==d){e.next=27;break}throw ne(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==d){e.next=29;break}throw ne(n,"user-disabled",c);case 29:if(h=o[d]||d.toLowerCase().replace(/[_\s]+/g,"-"),!f){e.next=34;break}throw N(n,h,f);case 34:O(n,h);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g.FirebaseError)){e.next=41;break}throw e.t0;case 41:O(n,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Q(e,t,n,r){return $.apply(this,arguments)}function $(){return $=t(a)(t(m).mark((function e(n,r,i,o){var a,s,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,G(n,r,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&O(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}function ee(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?H(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var te=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(S(n.auth,"network-request-failed"))}),V.get())}))}return t(c)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function ne(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=S(e,t,r);return i.customData._tokenResponse=n,i}function re(e,t){return ie.apply(this,arguments)}function ie(){return(ie=
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
t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e,t){return ae.apply(this,arguments)}function ae(){return(ae=t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */function se(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ce(){return ce=t(a)(t(m).mark((function e(n){var r,i,o,a,s,c,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],i=(0,g.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return o=e.sent,D((a=le(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:se(ue(a.auth_time)),issuedAtTime:se(ue(a.iat)),expirationTime:se(ue(a.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}function ue(e){return 1e3*Number(e)}function le(e){var n=t(p)(e.split("."),3),r=n[0],i=n[1],o=n[2];if(void 0===r||void 0===i||void 0===o)return E("JWT malformed, contained fewer than 3 sections"),null;try{var a=(0,g.base64Decode)(i);return a?JSON.parse(a):(E("Failed to decode base64 JWT payload"),null)}catch(e){return E("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function de(e,t){return fe.apply(this,arguments)}function fe(){return fe=
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
t(a)(t(m).mark((function e(n,r){var i=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&pe(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),fe.apply(this,arguments)}function pe(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var he=function(){"use strict";function e(n){t(s)(this,e),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(c)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(e),r=this;this.timerId=setTimeout(t(a)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),e)}))),n)}}},{key:"iteration",value:function(){var e=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.user.getIdToken(!0);case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)&&e.schedule(!0),t.abrupt("return");case 9:e.schedule();case 10:case"end":return t.stop()}}),n,null,[[0,5]])})))()}}]),e}(),ve=function(){"use strict";function e(n,r){t(s)(this,e),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return t(c)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=se(this.lastLoginAt),this.creationTime=se(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
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
 */function me(e){return ge.apply(this,arguments)}function ge(){return(ge=
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
t(a)(t(m).mark((function e(n){var r,i,o,a,s,c,u,l,d,f,p;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return o=e.sent,e.next=7,de(n,oe(i,{idToken:o}));case 7:D(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],n._notifyReloadListener(s),c=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?ke(s.providerUserInfo):[],u=be(n.providerData,c),l=n.isAnonymous,d=!(n.email&&s.passwordHash||(null==u?void 0:u.length)),f=!!l&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new ve(s.createdAt,s.lastLoginAt),isAnonymous:f},Object.assign(n,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(){return(ye=t(a)(t(m).mark((function e(n){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,g.getModularInstance)(n),e.next=3,me(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e,n){var r=e.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return t(h)(r).concat(t(h)(n))}function ke(e){return e.map((function(e){var t=e.providerId,n=(0,k.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function xe(e,t){return we.apply(this,arguments)}function we(){return(we=
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
t(a)(t(m).mark((function e(n,r){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(n,{},t(a)(t(m).mark((function e(){var i,o,a,s,c,u;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),o=n.config,a=o.tokenApiHost,s=o.apiKey,c=ee(n,a,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(u=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Y.fetch()(c,{method:"POST",headers:u,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var Ie=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(c)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){D(e.idToken,"internal-error"),D(void 0!==e.idToken,"internal-error"),D(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,D(n=le(t),"internal-error"),D(void 0!==n.exp,"internal-error"),D(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(D(!r.accessToken||r.refreshToken,e,"user-token-expired"),n||!r.accessToken||r.isExpired){t.next=3;break}return t.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){t.next=7;break}return t.next=6,r.refresh(e,r.refreshToken);case 6:return t.abrupt("return",r.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,n){var r=this;return t(a)(t(m).mark((function i(){var o,a,s,c;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xe(e,n);case 2:o=t.sent,a=o.accessToken,s=o.refreshToken,c=o.expiresIn,r.updateTokensAndExpiration(a,s,Number(c));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return P("not implemented")}}],[{key:"fromJSON",value:function(t,n){var r=n.refreshToken,i=n.accessToken,o=n.expirationTime,a=new e;return r&&(D("string"==typeof r,"internal-error",{appName:t}),a.refreshToken=r),i&&(D("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(D("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
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
 */function Ce(e,t){D("string"==typeof e||void 0===e,"internal-error",{appName:t})}var _e=function(){"use strict";function e(n){t(s)(this,e);var r=n.uid,i=n.auth,o=n.stsTokenManager,a=(0,k.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?t(h)(a.providerData):[],this.metadata=new ve(a.createdAt||void 0,a.lastLoginAt||void 0)}return t(c)(e,[{key:"getIdToken",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(n,n.stsTokenManager.getToken(n.auth,e));case 2:if(D(i=t.sent,n.auth,"internal-error"),n.accessToken===i){t.next=9;break}return n.accessToken=i,t.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ce.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ye.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(m).mark((function i(){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!1,e.idToken&&e.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(e),o=!0),!n){t.next=5;break}return t.next=5,me(r);case 5:return t.next=7,r.auth._persistUserIfCurrent(r);case 7:o&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(a)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return r=t.sent,t.next=5,de(e,re(e.auth,{idToken:r}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,n){var r,i,o,a,s,c,u,l,d=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(o=n.phoneNumber)&&void 0!==o?o:void 0,h=null!==(a=n.photoURL)&&void 0!==a?a:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(c=n._redirectEventId)&&void 0!==c?c:void 0,g=null!==(u=n.createdAt)&&void 0!==u?u:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,b=n.uid,k=n.emailVerified,x=n.isAnonymous,w=n.providerData,I=n.stsTokenManager;D(b&&I,t,"internal-error");var C=Ie.fromJSON(this.name,I);D("string"==typeof b,t,"internal-error"),Ce(d,t.name),Ce(f,t.name),D("boolean"==typeof k,t,"internal-error"),D("boolean"==typeof x,t,"internal-error"),Ce(p,t.name),Ce(h,t.name),Ce(v,t.name),Ce(m,t.name),Ce(g,t.name),Ce(y,t.name);var _=new e({uid:b,auth:t,email:f,emailVerified:k,displayName:d,isAnonymous:x,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:C,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(_.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(_._redirectEventId=m),_}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(a)(t(m).mark((function o(){var a,s;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new Ie).updateFromServerResponse(r),s=new e({uid:r.localId,auth:n,stsTokenManager:a,isAnonymous:i}),t.next=5,me(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),o)})))()}}]),e}(),Ee=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(c)(e,[{key:"_isAvailable",value:function(){return t(a)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,n){var r=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.storage[e]=n;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete n.storage[e];case 1:case"end":return t.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
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
 */Ee.type="NONE";var Oe=Ee;
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
 */function Se(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ne=function(){"use strict";function e(n,r,i){t(s)(this,e),this.persistence=n,this.auth=r,this.userKey=i;var o=this.auth,a=o.config,c=o.name;this.fullUserKey=Se(this.userKey,a.apiKey,c),this.fullPersistenceKey=Se("persistence",a.apiKey,c),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(c)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(a)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return r=t.sent,t.abrupt("return",r?_e._fromJSON(e.auth,r):null);case 4:case"end":return t.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,n.getCurrentUser();case 4:return i=t.sent,t.next=7,n.removeCurrentUser();case 7:if(n.persistence=e,!i){t.next=10;break}return t.abrupt("return",n.setCurrentUser(i));case 10:case"end":return t.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(a)(t(m).mark((function o(){var s,c,u,l,d,f,p,h,v,g,y,b,k;return t(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r.length){o.next=2;break}return o.abrupt("return",new e(M(Oe),n,i));case 2:return o.next=4,Promise.all(r.map(function(){var e=t(a)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),c=s[0]||M(Oe),u=Se(i,n.config.apiKey,n.name),l=null,d=!0,f=!1,p=void 0,o.prev=9,h=r[Symbol.iterator]();case 11:if(d=(v=h.next()).done){o.next=29;break}return g=v.value,o.prev=13,o.next=16,g._get(u);case 16:if(!(y=o.sent)){o.next=22;break}return b=_e._fromJSON(n,y),g!==c&&(l=b),c=g,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:d=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),f=!0,p=o.t1;case 35:o.prev=35,o.prev=36,d||null==h.return||h.return();case 38:if(o.prev=38,!f){o.next=41;break}throw p;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new e(c,n,i));case 46:if(c=k[0],!l){o.next=50;break}return o.next=50,c._set(u,l.toJSON());case 50:return o.next=52,Promise.all(r.map(function(){var e=t(a)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return o.abrupt("return",new e(c,n,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
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
 */function Te(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Le(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ae(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Me(t))return"Blackberry";if(je(t))return"Webos";if(De(t))return"Safari";if((t.includes("chrome/")||Pe(t))&&!t.includes("edge/"))return"Chrome";if(Re(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function We(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Fe(){return(0,g.isIE)()&&10===document.documentMode}function ze(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(e)||Re(e)||je(e)||Me(e)||/windows phone/i.test(e)||Le(e)}
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
function He(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Te((0,g.getUA)());break;case"Worker":t="".concat(Te((0,g.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(y.SDK_VERSION,"/").concat(r)}
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
 */var Be=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.queue=[]}return t(c)(e,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i,o,a,s,c,u,l,d,f,p,h,v,g;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.auth.currentUser!==e){t.next=2;break}return t.abrupt("return");case 2:i=[],t.prev=3,o=!0,a=!1,s=void 0,t.prev=5,c=n.queue[Symbol.iterator]();case 7:if(o=(u=c.next()).done){t.next=15;break}return l=u.value,t.next=11,l(e);case 11:l.onAbort&&i.push(l.onAbort);case 12:o=!0,t.next=7;break;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(5),a=!0,s=t.t0;case 21:t.prev=21,t.prev=22,o||null==c.return||c.return();case 24:if(t.prev=24,!a){t.next=27;break}throw s;case 27:return t.finish(24);case 28:return t.finish(21);case 29:t.next=52;break;case 31:for(t.prev=31,t.t1=t.catch(3),i.reverse(),d=!0,f=!1,p=void 0,t.prev=35,h=i[Symbol.iterator]();!(d=(v=h.next()).done);d=!0){g=v.value;try{g()}catch(e){}}t.next=43;break;case 39:t.prev=39,t.t2=t.catch(35),f=!0,p=t.t2;case 43:t.prev=43,t.prev=44,d||null==h.return||h.return();case 46:if(t.prev=46,!f){t.next=49;break}throw p;case 49:return t.finish(46);case 50:return t.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===t.t1||void 0===t.t1?void 0:t.t1.message});case 52:case"end":return t.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),e}(),Ye=function(){"use strict";function e(n,r,i){t(s)(this,e),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ve(this),this.idTokenSubscription=new Ve(this),this.beforeStateQueue=new Be(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=C,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return t(c)(e,[{key:"_initializeWithPersistence",value:function(e,n){n&&(this._popupRedirectResolver=M(n));var r=this;return this._initializationPromise=this.queue(t(a)(t(m).mark((function i(){var o,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Ne.create(r,e);case 5:if(r.persistenceManager=t.sent,!r._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(o=r._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,r._popupRedirectResolver._initialize(r);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(a=r.currentUser)||void 0===a?void 0:a.uid)||null,!r._deleted){t.next=21;break}return t.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(a)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(r=t.sent,e.currentUser||r){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!r||e.currentUser.uid!==r.uid){t.next=12;break}return e._currentUser._assign(r),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(r,!0);case 14:case"end":return t.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i,o,a,s,c,u,l;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,n.assertedPersistence.getCurrentUser();case 3:if(o=t.sent,a=o,s=!1,!e||!n.config.authDomain){t.next=15;break}return t.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,u=null==a?void 0:a._redirectEventId,t.next=13,n.tryRedirectSignIn(e);case 13:l=t.sent,c&&c!==u||!(null==l?void 0:l.user)||(a=l.user,s=!0);case 15:if(a){t.next=17;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 17:if(a._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,n.beforeStateQueue.runMiddleware(a);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),a=o,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(t.t0)}));case 28:if(!a){t.next=32;break}return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 32:return t.abrupt("return",n.directlySetCurrentUser(null));case 33:return D(n._popupRedirectResolver,n,"argument-error"),t.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==a._redirectEventId){t.next=38;break}return t.abrupt("return",n.directlySetCurrentUser(a));case 38:return t.abrupt("return",n.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return t.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,n._popupRedirectResolver._completeRedirectFn(n,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,n._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var n=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,me(e);case 3:t.next=9;break;case 5:if(t.prev=5,t.t0=t.catch(0),"auth/network-request-failed"===(null===t.t0||void 0===t.t0?void 0:t.t0.code)){t.next=9;break}return t.abrupt("return",n.directlySetCurrentUser(null));case 9:return t.abrupt("return",n.directlySetCurrentUser(e));case 10:case"end":return t.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?(0,g.getModularInstance)(e):null)&&D(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),t.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return t.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&D(r.tenantId===e.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",r.queue(t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.directlySetCurrentUser(e);case 2:r.notifyAuthListeners();case 3:case"end":return t.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),n)})))()}},{key:"setPersistence",value:function(e){var n=this;return this.queue(t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(M(e));case 2:case"end":return t.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,n){var r=this;return t(a)(t(m).mark((function i(){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return o=t.sent,t.abrupt("return",null===e?o.removeCurrentUser():o.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.redirectPersistenceManager){t.next=9;break}return D(i=e&&M(e)||n._popupRedirectResolver,n,"argument-error"),t.next=5,Ne.create(n,[M(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=t.sent,t.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=t.sent;case 9:return t.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return t.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i,o;return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(t(a)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(o=n.redirectUser)||void 0===o?void 0:o._redirectEventId)!==e){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(e){var n=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",n.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return D(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var n=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.currentUser&&n.currentUser!==e&&n._currentUser._stopProactiveRefresh(),e&&n.isProactiveRefreshEnabled&&e._startProactiveRefresh(),n.currentUser=e,!e){t.next=8;break}return t.next=6,n.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=He(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(a)(t(m).mark((function n(){var r,i,o;return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t(u)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),n.next=5,null===(r=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(o=n.sent)&&(i["X-Firebase-Client"]=o),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),e}();
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
 */function qe(e){return(0,g.getModularInstance)(e)}var Ve=function(){"use strict";function e(n){var r=this;t(s)(this,e),this.auth=n,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return r.observer=e}))}return t(c)(e,[{key:"next",get:function(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();function Xe(e,n,r){var i=qe(e);D(i._canInitEmulator,i,"emulator-config-failed"),D(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var o=!!(null==r?void 0:r.disableWarnings),a=Ge(n),s=function(e){var n=Ge(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){var a=o[1];return{host:a,port:Ke(i.substr(a.length+1))}}var s=t(p)(i.split(":"),2);return{host:s[0],port:Ke(s[1])}}(n),c=s.host,u=s.port,l=null===u?"":":".concat(u);i.config.emulator={url:"".concat(a,"//").concat(c).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ge(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ke(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Je=function(){"use strict";function e(n,r){t(s)(this,e),this.providerId=n,this.signInMethod=r}return t(c)(e,[{key:"toJSON",value:function(){return P("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return P("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return P("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return P("not implemented")}}]),e}();function Ze(e,t){return Qe.apply(this,arguments)}function Qe(){return(Qe=t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $e(e,t){return et.apply(this,arguments)}function et(){return(et=
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
t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:signInWithPassword",X(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function tt(e,t){return nt.apply(this,arguments)}function nt(){return(nt=
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
t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:signInWithEmailLink",X(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function rt(e,t){return it.apply(this,arguments)}function it(){return(it=t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:signInWithEmailLink",X(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var ot=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i,o){var a,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,r),(a=n.call(this,"password",o))._email=e,a._password=i,a._tenantId=c,a}return t(c)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var n=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",$e(e,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",tt(e,{email:n._email,oobCode:n._password}));case 5:O(e,"internal-error");case 6:case"end":return t.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(e,n){var r=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Ze(e,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",rt(e,{idToken:n,email:r._email,oobCode:r._password}));case 5:O(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(Je);function at(e,t){return st.apply(this,arguments)}function st(){return(st=
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
t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:signInWithIdp",X(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var ct=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(c)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return at(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,at(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,at(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):O("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,o=(0,k.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var a=new r(n,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),r}(Je);function ut(e,t){return lt.apply(this,arguments)}function lt(){return(lt=
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
t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",G(n,"POST","/v1/accounts:sendVerificationCode",X(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dt(){return(dt=t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Q(n,"POST","/v1/accounts:signInWithPhoneNumber",X(n,r)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ft(){return(ft=t(a)(t(m).mark((function e(n,r){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(n,"POST","/v1/accounts:signInWithPhoneNumber",X(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw ne(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var pt=t(u)({},"USER_NOT_FOUND","user-not-found");function ht(){return(ht=t(a)(t(m).mark((function e(n,r){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Q(n,"POST","/v1/accounts:signInWithPhoneNumber",X(n,i),pt));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var vt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone","phone")).params=e,i}return t(c)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return dt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ft.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return ht.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return n||t||i||o?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}]),r}(Je);
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
 */var mt=function(){"use strict";function e(n){var r,i,o,a,c,u;t(s)(this,e);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(n)),d=null!==(r=l.apiKey)&&void 0!==r?r:null,f=null!==(i=l.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=l.mode)&&void 0!==o?o:null);D(d&&f&&p,"argument-error"),this.apiKey=d,this.operation=p,this.code=f,this.continueUrl=null!==(a=l.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(c=l.languageCode)&&void 0!==c?c:null,this.tenantId=null!==(u=l.tenantId)&&void 0!==u?u:null}return t(c)(e,null,[{key:"parseLink",value:function(t){var n=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,n=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,r=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(r?(0,g.querystringDecode)((0,g.extractQuerystring)(r)).link:null)||r||n||t||e}(t);try{return new e(n)}catch(e){return null}}}]),e}();
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
var gt=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(c)(e,null,[{key:"credential",value:function(e,t){return ot._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=mt.parseLink(t);return D(n,"argument-error"),ot._fromEmailAndCode(e,n.code,n.tenantId)}}]),e}();gt.PROVIDER_ID="password",gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var yt=function(){"use strict";function e(n){t(s)(this,e),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return t(c)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),bt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(c)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(h)(this.scopes)}}]),r}(yt),kt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"facebook.com")}return t(c)(r,null,[{key:"credential",value:function(e){return ct._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(bt);
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
 */kt.FACEBOOK_SIGN_IN_METHOD="facebook.com",kt.PROVIDER_ID="facebook.com";
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
var xt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e;return t(s)(this,r),(e=n.call(this,"google.com")).addScope("profile"),e}return t(c)(r,null,[{key:"credential",value:function(e,t){return ct._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(bt);xt.GOOGLE_SIGN_IN_METHOD="google.com",xt.PROVIDER_ID="google.com";
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
var wt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"github.com")}return t(c)(r,null,[{key:"credential",value:function(e){return ct._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(bt);wt.GITHUB_SIGN_IN_METHOD="github.com",wt.PROVIDER_ID="github.com";
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
var It=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,"twitter.com")}return t(c)(r,null,[{key:"credential",value:function(e,t){return ct._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(bt);It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";
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
var Ct=function(){"use strict";function e(n){t(s)(this,e),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return t(c)(e,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(a)(t(m).mark((function a(){var s,c,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_e._fromIdTokenResponse(n,i,o);case 2:return s=t.sent,c=_t(i),u=new e({user:s,providerId:c,_tokenResponse:i,operationType:r}),t.abrupt("return",u);case 6:case"end":return t.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return t(a)(t(m).mark((function o(){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(i,!0);case 2:return a=_t(i),t.abrupt("return",new e({user:n,providerId:a,_tokenResponse:i,operationType:r}));case 4:case"end":return t.stop()}}),o)})))()}}]),e}();function _t(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Et=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,o,a,c){var u,l;return t(s)(this,r),(u=n.call(this,o.code,o.message)).operationType=a,u.user=c,Object.setPrototypeOf(t(i)(u),r.prototype),u.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:o.customData._serverResponse,operationType:a},u}return t(c)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(g.FirebaseError);function Ot(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Et._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function St(e,t){return Nt.apply(this,arguments)}function Nt(){return Nt=t(a)(t(m).mark((function e(n,r){var i,o,a=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=de,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",Ct._forOperation(n,"link",o));case 14:case"end":return e.stop()}}),e)}))),Nt.apply(this,arguments)}function Tt(e,t){return At.apply(this,arguments)}function At(){return At=
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
t(a)(t(m).mark((function e(n,r){var i,o,a,s,c,u,l=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],o=n.auth,a="reauthenticate",e.prev=3,e.next=6,de(n,Ot(o,a,r,n),i);case 6:return D((s=e.sent).idToken,o,"internal-error"),D(c=le(s.idToken),o,"internal-error"),u=c.sub,D(n.uid===u,o,"user-mismatch"),e.abrupt("return",Ct._forOperation(n,a,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&O(o,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])}))),At.apply(this,arguments)}function Dt(e,t){return Pt.apply(this,arguments)}function Pt(){return Pt=
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
t(a)(t(m).mark((function e(n,r){var i,o,a,s,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o="signIn",e.next=4,Ot(n,o,r);case 4:return a=e.sent,e.next=7,Ct._fromIdTokenResponse(n,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),Pt.apply(this,arguments)}function Lt(e,t,n,r){return(0,g.getModularInstance)(e).onIdTokenChanged(t,n,r)}function Rt(e,t,n){return(0,g.getModularInstance)(e).beforeAuthStateChanged(t,n)}function Mt(e,t,n,r){return(0,g.getModularInstance)(e).onAuthStateChanged(t,n,r)}function jt(e){return(0,g.getModularInstance)(e).signOut()}
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
function Ut(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:start",X(e,t))}new WeakMap;var Wt="__sak",Ft=function(){"use strict";function e(n,r){t(s)(this,e),this.storageRetriever=n,this.type=r}return t(c)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Wt,"1"),this.storage.removeItem(Wt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
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
 */var zt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){var e,i;return t(s)(this,r),(e=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,n){return e.onStorageEvent(t,n)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(De(i=(0,g.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=ze(),e._shouldAllowMigration=!0,e}return t(c)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),c=this.localCache[a];s!==c&&e(a,c,s)}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var o=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},a=this.storage.getItem(r);Fe()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,n){var i=this,o=this;return t(a)(t(m).mark((function a(){return t(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(d)(r.prototype),"_set",i).call(o,e,n);case 2:o.localCache[e]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(e){var n=this,i=this;return t(a)(t(m).mark((function o(){var a;return t(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(d)(r.prototype),"_get",n).call(i,e);case 2:return a=o.sent,i.localCache[e]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(e){var n=this,i=this;return t(a)(t(m).mark((function o(){return t(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(d)(r.prototype),"_remove",n).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return o.stop()}}),o)})))()}}]),r}(Ft);zt.type="LOCAL";var Ht=zt,Bt=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(){return t(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(c)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(Ft);
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
 */Bt.type="SESSION";var Yt=Bt;
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
 */function qt(e){return Promise.all(e.map((n=t(a)(t(m).mark((function e(n){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var Vt=function(){"use strict";function e(n){t(s)(this,e),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(c)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i,o,s,c,u,l,d,f;return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=(i=e).data,s=o.eventId,c=o.eventType,u=o.data,null==(l=n.handlersMap[c])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:c}),d=Array.from(l).map(function(){var e=t(a)(t(m).mark((function e(n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,u));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),r.next=9,qt(d);case 9:f=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:c,response:f});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var n=this.receivers.find((function(e){return e.isListeningto(t)}));if(n)return n;var r=new e(t);return this.receivers.push(r),r}}]),e}();
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
function Xt(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Vt.receivers=[];var Gt=function(){"use strict";function e(n){t(s)(this,e),this.target=n,this.handlers=new Set}return t(c)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(a)(t(m).mark((function o(){var a,s,c;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,o){var u=Xt("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),r);c={messageChannel:a,onMessage:function(e){var n=e;if(n.data.eventId===u)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(n.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(c),a.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:u,data:n},[a.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return t.stop()}}),o)})))()}}]),e}();
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
 */function Kt(){return window}
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
function Jt(){return void 0!==Kt().WorkerGlobalScope&&"function"==typeof Kt().importScripts}function Zt(){return Qt.apply(this,arguments)}function Qt(){return(Qt=t(a)(t(m).mark((function e(){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
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
var $t="firebaseLocalStorageDb",en="firebaseLocalStorage",tn="fbase_key",nn=function(){"use strict";function e(n){t(s)(this,e),this.request=n}return t(c)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),e}();function rn(e,t){return e.transaction([en],t?"readwrite":"readonly").objectStore(en)}function on(){var e=indexedDB.deleteDatabase($t);return new nn(e).toPromise()}function an(){var e=indexedDB.open($t,1);return new Promise((function(n,r){e.addEventListener("error",(function(){r(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(en,{keyPath:tn})}catch(e){r(e)}})),e.addEventListener("success",t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(en)){t.next=12;break}return i.close(),t.next=5,on();case 5:return t.t0=n,t.next=8,an();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),r)}))))}))}function sn(e,t,n){return cn.apply(this,arguments)}function cn(){return(cn=t(a)(t(m).mark((function e(n,r,i){var o,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=rn(n,!0).put((o={},t(u)(o,tn,r),t(u)(o,"value",i),o)),e.abrupt("return",new nn(a).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function un(e,t){return ln.apply(this,arguments)}function ln(){return(ln=t(a)(t(m).mark((function e(n,r){var i,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=rn(n,!1).get(r),e.next=3,new nn(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dn(e,t){var n=rn(e,!0).delete(t);return new nn(n).toPromise()}var fn=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(c)(e,[{key:"_openDb",value:function(){var e=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,an();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),n)})))()}},{key:"_withRetries",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,n._openDb();case 5:return o=t.sent,t.next=8,e(o);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Jt()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.receiver=Vt._getInstance(Jt()?self:null),e.receiver._subscribe("keyChanged",function(){var n=t(a)(t(m).mark((function n(r,i){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return o=t.sent,t.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return t.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(a)(t(m).mark((function e(n,r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var e=this;return t(a)(t(m).mark((function n(){var r,i,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Zt();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Gt(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(o=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(r=o[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(e){var n=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,n.sender._send("keyChanged",{key:e},n.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(a)(t(m).mark((function e(){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,an();case 5:return n=e.sent,e.next=8,sn(n,Wt,"1");case 8:return e.next=10,dn(n,Wt);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var n=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,n.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,n){var r=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(t(a)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return sn(t,e,n)}));case 2:return r.localCache[e]=n,t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return un(t,e)}));case 2:return i=t.sent,n.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),r)})))()}},{key:"_remove",value:function(e){var n=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return dn(t,e)}));case 2:return delete n.localCache[e],t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var e=this;return t(a)(t(m).mark((function n(){var r,i,o,a,s,c,u,l,d,f,p,h,v,g,y,b,k;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=rn(e,!1).getAll();return new nn(t).toPromise()}));case 2:if(r=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,c=void 0,t.prev=10,u=r[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)d=l.value,f=d.fbase_key,p=d.value,o.add(f),JSON.stringify(e.localCache[f])!==JSON.stringify(p)&&(e.notifyListeners(f,p),i.push(f));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,c=t.t0;case 18:t.prev=18,t.prev=19,a||null==u.return||u.return();case 21:if(t.prev=21,!s){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(h=!0,v=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(h=(b=y.next()).done);h=!0)k=b.value,e.localCache[k]&&!o.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,g=t.t1;case 35:t.prev=35,t.prev=36,h||null==y.return||y.return();case 38:if(t.prev=38,!v){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,o=void 0;if(n)try{for(var a,s=Array.from(n)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();fn.type="LOCAL";var pn=fn;
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
 */function hn(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:start",X(e,t))}function vn(e){return new Promise((function(t,n){var r,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=S("internal-error");t.customData=e,n(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(o)}))}function mn(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
mn("rcb"),new z(3e4,6e4);var gn="recaptcha";
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
 */function yn(e,t,n){return bn.apply(this,arguments)}function bn(){return(bn=t(a)(t(m).mark((function e(n,r,i){var o,a,s,c,u,l,d,f;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,D("string"==typeof a,n,"argument-error"),D(i.type===gn,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return D("enroll"===c.type,n,"internal-error"),e.next=15,Ut(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return u=e.sent,e.abrupt("return",u.phoneSessionInfo.sessionInfo);case 19:return D("signin"===c.type,n,"internal-error"),D(l=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,hn(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:a}});case 24:return d=e.sent,e.abrupt("return",d.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ut(n,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return f=e.sent.sessionInfo,e.abrupt("return",f);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var kn=function(){"use strict";function e(n){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=qe(n)}return t(c)(e,[{key:"verifyPhoneNumber",value:function(e,t){return yn(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return vt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var n=t;return e.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?vt._fromTokenResponse(n,r):null}}]),e}();
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
function xn(e,t){return t?M(t):(D(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */kn.PROVIDER_ID="phone",kn.PHONE_SIGN_IN_METHOD="phone";var wn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"custom","custom")).params=e,i}return t(c)(r,[{key:"_getIdTokenResponse",value:function(e){return at(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return at(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return at(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(Je);function In(e){return Dt(e.auth,new wn(e),e.bypassAuthState)}function Cn(e){var t=e.auth,n=e.user;return D(n,t,"internal-error"),Tt(n,new wn(e),e.bypassAuthState)}function _n(e){return En.apply(this,arguments)}function En(){return(En=t(a)(t(m).mark((function e(n){var r,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,D(i=n.user,r,"internal-error"),e.abrupt("return",St(i,new wn(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
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
 */var On=function(){"use strict";function e(n,r,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=n,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return t(c)(e,[{key:"execute",value:function(){var e,n=this;return new Promise((e=t(a)(t(m).mark((function e(r,i){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,n){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i,o,a,s,c,u,l;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,o=e.sessionId,a=e.postBody,s=e.tenantId,c=e.error,u=e.type,!c){t.next=4;break}return n.reject(c),t.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:n.user,bypassAuthState:n.bypassAuthState},t.prev=5,t.t0=n,t.next=9,n.getIdpTask(u)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),n.reject(t.t2);case 16:case"end":return t.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return In;case"linkViaPopup":case"linkViaRedirect":return _n;case"reauthViaPopup":case"reauthViaRedirect":return Cn;default:O(this.auth,"internal-error")}}},{key:"resolve",value:function(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){L(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Sn=new z(2e3,1e4);
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
 */function Nn(e,t,n){return Tn.apply(this,arguments)}function Tn(){return(Tn=t(a)(t(m).mark((function e(n,r,i){var o,a,s;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=qe(n),T(n,r,yt),a=xn(o,i),s=new An(o,"signInViaPopup",r,a),e.abrupt("return",s.executeNotNull());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var An=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,o,a,c,u){var l;return t(s)(this,r),(l=n.call(this,e,o,c,u)).provider=a,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=t(i)(l),l}return t(c)(r,[{key:"executeNotNull",value:function(){var e=this;return t(a)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return D(r=t.sent,e.auth,"internal-error"),t.abrupt("return",r);case 5:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){var e=this;return t(a)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(1===e.filter.length,"Popup operations only handle one event"),r=Xt(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],r);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=r,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(S(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(S(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(S(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Sn.get())};t()}}]),r}(On);An.currentPopupAction=null;
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
var Dn=new Map,Pn=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,r),(o=n.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return t(c)(r,[{key:"execute",value:function(){var e=this,n=this;return t(a)(t(m).mark((function i(){var o,a;return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=Dn.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Ln(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(l)(t(d)(r.prototype),"execute",e).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:Dn.set(n.auth._key(),o);case 21:return n.bypassAuthState||Dn.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var n=this,i=this,o=function(){return t(l)(t(d)(r.prototype),"onAuthEvent",n)};return t(a)(t(m).mark((function n(){var r;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",o().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(r=t.sent)){t.next=16;break}return i.user=r,t.abrupt("return",o().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),n)})))()}},{key:"onExecution",value:function(){return t(a)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),r}(On);function Ln(e,t){return Rn.apply(this,arguments)}function Rn(){return(Rn=t(a)(t(m).mark((function e(n,r){var i,o,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Un(r),o=jn(n),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mn(e,t){Dn.set(e._key(),t)}function jn(e){return M(e._redirectPersistence)}function Un(e){return Se("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Wn(e,t){return Fn.apply(this,arguments)}function Fn(){return Fn=t(a)(t(m).mark((function e(n,r){var i,o,a,s,c,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],o=qe(n),a=xn(o,r),s=new Pn(o,a,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,o._persistUserIfCurrent(c.user);case 11:return e.next=13,o._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),Fn.apply(this,arguments)}
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
var zn=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(c)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bn(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!Bn(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(S(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hn(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Hn(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Hn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Bn(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function Yn(e){return qn.apply(this,arguments)}function qn(){return qn=
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
t(a)(t(m).mark((function e(n){var r,i=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",G(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),e)}))),qn.apply(this,arguments)}
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
 */var Vn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xn=/^https?/;function Gn(){return(Gn=t(a)(t(m).mark((function e(n){var r,i,o,a,s,c,u;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Yn(n);case 4:r=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(u=c.value,e.prev=10,!Kn(u)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:O(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Kn(e){var t=U(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!Xn.test(r))return!1;if(Vn.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
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
 */var Jn=new z(3e4,6e4);function Zn(){var e=Kt().___jsl,n=!0,r=!1,i=void 0;if(null==e?void 0:e.H)try{for(var o,a=Object.keys(e.H)[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var s=o.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(h)(e.H[s].L),e.CP)for(var c=0;c<e.CP.length;c++)e.CP[c]=null}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}var Qn=null;function $n(e){return Qn=Qn||function(e){return new Promise((function(t,n){var r,i,o;function a(){Zn(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Zn(),n(S(e,"network-request-failed"))},timeout:Jn.get()})}if(null===(i=null===(r=Kt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Kt().gapi)||void 0===o?void 0:o.load)){var s=mn("iframefcb");return Kt()[s]=function(){gapi.load?a():n(S(e,"network-request-failed"))},vn("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}a()}})).catch((function(e){throw Qn=null,e}))}(e),Qn}
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
 */var er=new z(5e3,15e3),tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rr(e){var t=e.config;D(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?H(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:y.SDK_VERSION},i=nr.get(e.config.apiHost);i&&(r.eid=i);var o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),"".concat(n,"?").concat((0,g.querystring)(r).slice(1))}function ir(e){return or.apply(this,arguments)}function or(){return or=t(a)(t(m).mark((function e(n){var r,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$n(n);case 2:return r=e.sent,D(i=Kt().gapi,n,"internal-error"),e.abrupt("return",r.open({where:document.body,url:rr(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tr,dontclear:!0},(function(e){return new Promise((r=t(a)(t(m).mark((function r(i,o){var a,s,c;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){Kt().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:a=S(n,"network-request-failed"),s=Kt().setTimeout((function(){o(a)}),er.get()),e.ping(c).then(c,(function(){o(a)}));case 7:case"end":return t.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return e.stop()}}),e)}))),or.apply(this,arguments)}
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
 */var ar={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sr="_blank",cr="http://localhost",ur=function(){"use strict";function e(n){t(s)(this,e),this.window=n,this.associatedEvent=null}return t(c)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function lr(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),c="",u=Object.assign(Object.assign({},ar),{width:i.toString(),height:o.toString(),top:a,left:s}),l=(0,g.getUA)().toLowerCase();r&&(c=Pe(l)?sr:r),Ae(l)&&(n=n||cr,u.scrollbars="yes");var d=Object.entries(u).reduce((function(e,n){var r=t(p)(n,2),i=r[0],o=r[1];return"".concat(e).concat(i,"=").concat(o,",")}),"");if(We(l)&&"_self"!==c)return dr(n||"",c),new ur(null);var f=window.open(n||"",c,d);D(f,e,"popup-blocked");try{f.focus()}catch(e){}return new ur(f)}function dr(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var fr="__/auth/handler",pr="emulator/auth/handler";function hr(e,n,r,i,o,a){D(e.config.authDomain,e,"auth-domain-config-required"),D(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:y.SDK_VERSION,eventId:o};if(n instanceof yt){n.setDefaultLanguage(e.languageCode),s.providerId=n.providerId||"",(0,g.isEmpty)(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var c=!0,u=!1,l=void 0;try{for(var d,f=Object.entries(a||{})[Symbol.iterator]();!(c=(d=f.next()).done);c=!0){var h=t(p)(d.value,2),v=h[0],m=h[1];s[v]=m}}catch(e){u=!0,l=e}finally{try{c||null==f.return||f.return()}finally{if(u)throw l}}}if(n instanceof bt){var b=n.getScopes().filter((function(e){return""!==e}));b.length>0&&(s.scopes=b.join(","))}e.tenantId&&(s.tid=e.tenantId);var k,x,w=s,I=!0,C=!1,_=void 0;try{for(var E,O=Object.keys(w)[Symbol.iterator]();!(I=(E=O.next()).done);I=!0){var S=E.value;void 0===w[S]&&delete w[S]}}catch(e){C=!0,_=e}finally{try{I||null==O.return||O.return()}finally{if(C)throw _}}return"".concat((k=e,x=k.config,x.emulator?H(x,pr):"https://".concat(x.authDomain,"/").concat(fr)),"?").concat((0,g.querystring)(w).slice(1))}
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
var vr="webStorageSupport",mr=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yt,this._completeRedirectFn=Wn,this._overrideRedirectResult=Mn}return t(c)(e,[{key:"_openPopup",value:function(e,n,r,i){var o=this;return t(a)(t(m).mark((function a(){var s,c;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return L(null===(s=o.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=hr(e,n,r,U(),i),t.abrupt("return",lr(e,c,Xt()));case 4:case"end":return t.stop()}}),a)})))()}},{key:"_openRedirect",value:function(e,n,r,i){var o=this;return t(a)(t(m).mark((function a(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o._originValidation(e);case 2:return a=hr(e,n,r,U(),i),Kt().location.href=a,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,o=r.promise;return i?Promise.resolve(i):(L(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[n]={promise:a},a.catch((function(){delete t.eventManagers[n]})),a}},{key:"initAndGetManager",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ir(e);case 2:return i=t.sent,o=new zn(e),i.register("authEvent",(function(t){return D(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:o.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[e._key()]={manager:o},n.iframes[e._key()]=i,t.abrupt("return",o);case 8:case"end":return t.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(vr,{type:vr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[vr];void 0!==i&&t(!!i),O(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Gn.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return ze()||De()||Ue()}}]),e}(),gr=mr,yr=function(e){"use strict";t(f)(r,e);var n=t(v)(r);function r(e){var i;return t(s)(this,r),(i=n.call(this,"phone")).credential=e,i}return t(c)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return G(e,"POST","/v2/accounts/mfaEnrollment:finalize",X(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return G(e,"POST","/v2/accounts/mfaSignIn:finalize",X(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(function(){"use strict";function e(n){t(s)(this,e),this.factorId=n}return t(c)(e,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return P("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(s)(this,e)}return t(c)(e,null,[{key:"assertion",value:function(e){return yr._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var br="@firebase/auth",kr="0.21.0",xr=function(){"use strict";function e(n){t(s)(this,e),this.auth=n,this.internalListeners=new Map}return t(c)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var n=this;return t(a)(t(m).mark((function r(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.assertAuthConfigured(),t.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,n.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
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
var wr,Ir=(0,g.getExperimentalSetting)("authIdTokenMaxAge")||300,Cr=null,_r=function(e){return n=t(a)(t(m).mark((function n(r){var i,o,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r,!t.t0){t.next=5;break}return t.next=4,r.getIdTokenResult();case 4:t.t0=t.sent;case 5:if(i=t.t0,!((o=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&o>Ir)){t.next=9;break}return t.abrupt("return");case 9:if(a=null==i?void 0:i.token,Cr!==a){t.next=12;break}return t.abrupt("return");case 12:return Cr=a,t.next=15,fetch(e,{method:a?"POST":"DELETE",headers:a?{Authorization:"Bearer ".concat(a)}:{}});case 15:case"end":return t.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function Er(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getApp)(),t=(0,y._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=j(e,{popupRedirectResolver:gr,persistence:[pn,Ht,Yt]}),r=(0,g.getExperimentalSetting)("authTokenSyncURL");if(r){var i=_r(r);Rt(n,i,(function(){return i(n.currentUser)})),Lt(n,(function(e){return i(e)}))}var o=(0,g.getDefaultEmulatorHost)("auth");return o&&Xe(n,"http://".concat(o)),n}wr="Browser",(0,y._registerComponent)(new(0,x.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=r.options,a=o.apiKey,s=o.authDomain;return function(e,t){D(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),D(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:a,authDomain:s,clientPlatform:wr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:He(wr)},i=new Ye(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(M);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,y._registerComponent)(new(0,x.Component)("auth-internal",(function(e){var t=qe(e.getProvider("auth").getImmediate());return new xr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,y.registerVersion)(br,kr,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(wr)),(0,y.registerVersion)(br,kr,"esm2017")})),o.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=o("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(n||e):o.value}})(e,t,n)}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=o("fVNic"))&&n.__esModule?n:{default:n}})),o.register("4tSb9",(function(t,n){e(t.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),o.register("jxf8A",(function(t,n){e(t.exports,"refs",(function(){return r}));var r={btnOpenRef:document.querySelector("[data-modal-open]"),btnOpenUserRef:document.querySelector("[data-modal-open-user]"),btnCloseRef:document.querySelector("[data-main-modal-close]"),btnCloseUserRef:document.querySelector("[data-user-modal-close]"),body:document.querySelector("body"),teamModal:document.querySelector("[data-team-modal]"),headerUserLink:document.querySelector(".menu__link-js"),form:document.querySelector(".form"),searchError:document.querySelector(".form__text-error"),pagRef:document.querySelector(".pagination"),currentPage:document.querySelector("#curr"),nextPage:document.querySelector("#next"),prevPage:document.querySelector("#prev"),firstPage:document.querySelector("#first-page"),lastPage:document.querySelector("#last-page"),beforeCurPageContainer:document.querySelector(".before-cur-page"),afterCurPageContainer:document.querySelector(".after-cur-page"),themeBtnRef:document.querySelector(".theme-btn"),lightIconRef:document.querySelector(".theme-light"),darkIconRef:document.querySelector(".theme-dark"),filmList:document.querySelector(".films__list"),btnScrollTopRef:document.querySelector(".btn__up"),btnScrollDownRef:document.querySelector(".btn__down"),footerRef:document.querySelector(".footer"),btnWatch:document.querySelector(".btn__watched"),btnQueue:document.querySelector(".btn__queue")}})),o.register("dtYBq",(function(t,n){e(t.exports,"notifySuccessMessage",(function(){return i})),e(t.exports,"notifyInfoMessage",(function(){return a}));var r=o("h6c0i"),i=function(e){return r.Notify.success("".concat(e),{opacity:.8,position:"center-top",timeout:500,cssAnimationDuration:1500,backOverlayColor:"rgba(255,85,73,0.2)",cssAnimationStyle:"zoom"})},a=function(e){return r.Notify.info("".concat(e),{opacity:1,position:"center-top",timeout:500,background:"#0c09db",backOverlay:!0,cssAnimationDuration:1e3,backOverlayColor:"rgba(0, 153, 255, 0.313)",cssAnimationStyle:"zoom"})}})),o.register("h6c0i",(function(e,t){var r,i;r=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",o="Info",a={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},u=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=u(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,f=function(s,l,f,h){if(!c("body"))return!1;t||p.Notify.init({});var v=u(!0,t,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof h&&!Array.isArray(h)){var m={};"object"==typeof f?m=f:"object"==typeof h&&(m=h),t=u(!0,t,m)}var g,y,b=t[s.toLocaleLowerCase("en")];d++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(g=l,(y=e.document.createElement("div")).innerHTML=g,l=y.textContent||y.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=u(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var k=e.document.getElementById(a.wrapID)||e.document.createElement("div");if(k.id=a.wrapID,k.style.width=t.width,k.style.zIndex=t.zindex,k.style.opacity=t.opacity,"center-center"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.margin="auto",k.classList.add("nx-flex-center-center"),k.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.justifyContent="center",k.style.alignItems="center",k.style.pointerEvents="none"):"center-top"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.top=t.distance,k.style.bottom="auto",k.style.margin="auto"):"center-bottom"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.margin="auto"):"right-bottom"===t.position?(k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.left="auto"):"left-top"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right="auto",k.style.bottom="auto"):"left-bottom"===t.position?(k.style.left=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.right="auto"):(k.style.right=t.distance,k.style.top=t.distance,k.style.left="auto",k.style.bottom="auto"),t.backOverlay){var x=e.document.getElementById(a.overlayID)||e.document.createElement("div");x.id=a.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=t.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=b.backOverlayColor||t.backOverlayColor,x.className=t.cssAnimation?"nx-with-animation":"",x.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(a.overlayID)||e.document.body.appendChild(x)}e.document.getElementById(a.wrapID)||e.document.body.appendChild(k);var w=e.document.createElement("div");w.id=t.ID+"-"+d,w.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),w.style.fontSize=t.fontSize,w.style.color=b.textColor,w.style.background=b.background,w.style.borderRadius=t.borderRadius,w.style.pointerEvents="all",t.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(w.style.animationDuration=t.cssAnimationDuration+"ms");var I="";if(t.closeButton&&"function"!=typeof f&&(I='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)w.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?I:"");else{var C="";s===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===o&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),w.innerHTML=C+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?I:"")}else w.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?I:"");if("left-bottom"===t.position||"right-bottom"===t.position){var _=e.document.getElementById(a.wrapID);_.insertBefore(w,_.firstChild)}else e.document.getElementById(a.wrapID).appendChild(w);var E=e.document.getElementById(w.id);if(E){var O,S,N=function(){E.classList.add("nx-remove");var t=e.document.getElementById(a.overlayID);t&&k.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(O)},T=function(){if(E&&null!==E.parentNode&&E.parentNode.removeChild(E),k.childElementCount<=0&&null!==k.parentNode){k.parentNode.removeChild(k);var t=e.document.getElementById(a.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(S)};if(t.closeButton&&"function"!=typeof f&&e.document.getElementById(w.id).querySelector("span.nx-close-button").addEventListener("click",(function(){N();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof f||t.clickToClose)&&E.addEventListener("click",(function(){"function"==typeof f&&f(),N();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof f){var A=function(){O=setTimeout((function(){N()}),t.timeout),S=setTimeout((function(){T()}),t.timeout+t.cssAnimationDuration)};A(),t.pauseOnHover&&(E.addEventListener("mouseenter",(function(){E.classList.add("nx-paused"),clearTimeout(O),clearTimeout(S)})),E.addEventListener("mouseleave",(function(){E.classList.remove("nx-paused"),A()})))}}if(t.showOnlyTheLastOne&&d>0)for(var D=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+d+"])"),P=0;P<D.length;P++){var L=D[P];null!==L.parentNode&&L.parentNode.removeChild(L)}t=u(!0,t,v)},p={Notify:{init:function(n){t=u(!0,a,n),function(t,n){if(!c("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=u(!0,t,e)},success:function(e,t,r){f(n,e,t,r)},failure:function(e,t,n){f(r,e,t,n)},warning:function(e,t,n){f(i,e,t,n)},info:function(e,t,n){f(o,e,t,n)}}};return"object"==typeof e.Notiflix?u(!0,e.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),o.register("eZZGH",(function(e,t){var n=o("jxf8A");n.refs.btnScrollTopRef.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),n.refs.btnScrollDownRef.addEventListener("click",(function(){var e;e=n.refs.footerRef,window.scroll({left:0,top:e.offsetTop,behavior:"smooth"})})),window.addEventListener("scroll",(function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;e<t&&(n.refs.btnScrollTopRef.classList.add("btn__up--hidden"),n.refs.btnScrollDownRef.classList.remove("btn__up--hidden"));e>t&&(n.refs.btnScrollTopRef.classList.remove("btn__up--hidden"),n.refs.btnScrollDownRef.classList.add("btn__up--hidden"))})),n.refs.btnScrollTopRef.classList.add("btn__up--hidden"),n.refs.btnScrollDownRef.classList.add("btn__up--hidden")})),o.register("aar0g",(function(e,t){var n=o("jxf8A");function r(){var e="true"===n.refs.themeBtnRef.getAttribute("data-current")||!1;n.refs.themeBtnRef.setAttribute("data-current",!e),localStorage.setItem("light",JSON.stringify(e)),"false"===localStorage.getItem("light")?(document.body.classList.add("dark-theme"),n.refs.lightIconRef.classList.remove("is-hidden"),n.refs.darkIconRef.classList.add("is-hidden")):(document.body.classList.remove("dark-theme"),n.refs.darkIconRef.classList.remove("is-hidden"),n.refs.lightIconRef.classList.add("is-hidden"))}n.refs.themeBtnRef.addEventListener("click",r),"false"===localStorage.getItem("light")&&r()})),o.register("aZ2bT",(function(e,t){var n=o("jxf8A"),r=o("4U4zz");function i(e){e.target.classList.contains("backdrop")&&(s(),u())}function a(e){r.teamGallery.on("shown.simplelightbox",u)&&r.teamGallery.on("closed.simplelightbox",c),"Escape"===e.code&&(s(),u())}function s(){n.refs.teamModal.classList.toggle("is-hidden"),n.refs.body.classList.toggle("no-scroll")}function c(){n.refs.teamModal.addEventListener("click",i),n.refs.body.addEventListener("keydown",a)}function u(){n.refs.body.removeEventListener("keydown",a),n.refs.teamModal.removeEventListener("click",i)}n.refs.btnOpenRef.addEventListener("click",(function(){s(),c()})),n.refs.btnCloseRef.addEventListener("click",(function(){s(),u()}))})),o.register("4U4zz",(function(n,r){e(n.exports,"teamGallery",(function(){return i}));var i=new(t(o("5IjG7")))(".team-modal__link",{sourceAttr:"href",captionsData:"alt",rel:"nofollow",fileExt:"webp|jpg",loop:!0,captionDelay:300,animationSpeed:300,animationSlide:!0,alertError:!0})})),o.register("5IjG7",(function(e,t){
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.de
	Available for use under the MIT License
	Version 2.11.0
*/
"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw o}}}}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var l=function(){function e(t,n){var r=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5}),u(this,"transitionPrefix",void 0),u(this,"isPassiveEventsSupported",void 0),u(this,"transitionCapable",!1),u(this,"isTouchDevice","ontouchstart"in window),u(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),u(this,"initialLocationHash",void 0),u(this,"pushStateSupport","pushState"in history),u(this,"isOpen",!1),u(this,"isAnimating",!1),u(this,"isClosing",!1),u(this,"isFadeIn",!1),u(this,"urlChangedOnce",!1),u(this,"hashReseted",!1),u(this,"historyHasChanges",!1),u(this,"historyUpdateTimeout",null),u(this,"currentImage",void 0),u(this,"eventNamespace","simplelightbox"),u(this,"domNodes",{}),u(this,"loadedImages",[]),u(this,"initialImageIndex",0),u(this,"currentImageIndex",0),u(this,"initialSelector",null),u(this,"globalScrollbarWidth",0),u(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,n),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof t?(this.initialSelector=t,this.elements=Array.from(document.querySelectorAll(t))):this.elements=void 0!==t.length&&t.length>0?Array.from(t):[t],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var i=[];this.elements=Array.from(this.elements).filter((function(e){var t=e.getAttribute(r.options.sourceAttr);return-1===i.indexOf(t)&&(i.push(t),!0)}))}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,(function(e){if(r.isValidLink(e.currentTarget)){if(e.preventDefault(),r.isAnimating)return!1;r.initialImageIndex=r.elements.indexOf(e.currentTarget),r.openImage(e.currentTarget)}})),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],(function(e){r.isOpen&&e.target===e.currentTarget&&r.close()})),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,(function(e){e.target.parentElement.classList.contains("sl-image")&&e.preventDefault()})),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle((function(e){if(r.controlCoordinates.swipeDiff=0,r.isAnimating&&"Escape"===e.key)return r.currentImage.setAttribute("src",""),r.isAnimating=!1,r.close();r.isOpen&&(e.preventDefault(),"Escape"===e.key&&r.close(),!r.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(e.key)>-1&&r.loadImage("ArrowRight"===e.key?1:-1))}),this.options.throttleInterval)),this.addEvents()}var t,n,a;return t=e,n=[{key:"checkPassiveEventsSupport",value:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}},{key:"generateQuerySelector",value:function(e){var t=e.tagName,n=e.id,r=e.className,i=e.parentNode;if("HTML"===t)return"HTML";var o=t;if(o+=""!==n?"#".concat(n):"",r)for(var a=r.split(/\s/),s=0;s<a.length;s++)o+=".".concat(a[s]);for(var c=1,u=e;u.previousElementSibling;u=u.previousElementSibling)c+=1;return o+=":nth-child(".concat(c,")"),"".concat(this.generateQuerySelector(i)," > ").concat(o)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var e,t=this.options.captionClass.split(/[\s,]+/);(e=this.domNodes.caption.classList).add.apply(e,o(t))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(e,t){var n;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),t))}}},{key:"isValidLink",value:function(e){return!this.options.fileExt||e.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")$","i").test(e.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var e=(document.body||document.documentElement).style;return"transition"in e?"":"WebkitTransition"in e?"-webkit-":"MozTransition"in e?"-moz-":"OTransition"in e&&"-o"}},{key:"getScrollbarWidth",value:function(){var e,t=document.createElement("div");return t.classList.add("sl-scrollbar-measure"),document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e}},{key:"toggleScrollbar",value:function(e){var t=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===e){var r=window.innerWidth;if(!r){var i=document.documentElement.getBoundingClientRect();r=i.right-Math.abs(i.left)}if(document.body.clientWidth<r||this.isAppleDevice){var o=parseInt(document.body.style.paddingRight||0,10);t=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=o,(t>0||0==t&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=o+t+"px",n.forEach((function(e){var n=e.style.paddingRight,r=window.getComputedStyle(e)["padding-right"];e.dataset.originalPaddingRight=n,e.style.paddingRight="".concat(parseFloat(r)+t,"px")})))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight,n.forEach((function(e){var t=e.dataset.originalPaddingRight;void 0!==t&&(e.style.paddingRight=t)}));return t}},{key:"close",value:function(){var e=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var t=this.relatedElements[this.currentImageIndex];for(var n in t.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,(function(){e.options.disableScroll&&e.toggleScrollbar("show"),e.options.htmlClass&&""!==e.options.htmlClass&&document.querySelector("html").classList.remove(e.options.htmlClass),document.body.removeChild(e.domNodes.wrapper),document.body.removeChild(e.domNodes.overlay),e.domNodes.additionalHtml=null,t.dispatchEvent(new Event("closed.simplelightbox")),e.isClosing=!1})),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var e=this,t=this.currentImageIndex,n=this.relatedElements.length,r=t+1<0?n-1:t+1>=n-1?0:t+1,i=t-1<0?n-1:t-1>=n-1?0:t-1,o=new Image,a=new Image;o.addEventListener("load",(function(n){var r=n.target.getAttribute("src");-1===e.loadedImages.indexOf(r)&&e.loadedImages.push(r),e.relatedElements[t].dispatchEvent(new Event("nextImageLoaded."+e.eventNamespace))})),o.setAttribute("src",this.relatedElements[r].getAttribute(this.options.sourceAttr)),a.addEventListener("load",(function(n){var r=n.target.getAttribute("src");-1===e.loadedImages.indexOf(r)&&e.loadedImages.push(r),e.relatedElements[t].dispatchEvent(new Event("prevImageLoaded."+e.eventNamespace))})),a.setAttribute("src",this.relatedElements[i].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(e){var t=this,n=e;this.options.rtl&&(e=-e),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===e?"next":"prev")+"."+this.eventNamespace));var r=this.currentImageIndex+e;if(this.isAnimating||(r<0||r>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=r<0?this.relatedElements.length-1:r>this.relatedElements.length-1?0:r,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,(function(){t.isAnimating=!0,t.isClosing?t.isAnimating=!1:setTimeout((function(){var e=t.relatedElements[t.currentImageIndex];t.currentImage.setAttribute("src",e.getAttribute(t.options.sourceAttr)),-1===t.loadedImages.indexOf(e.getAttribute(t.options.sourceAttr))&&t.show(t.domNodes.spinner),t.domNodes.image.contains(t.domNodes.caption)&&t.domNodes.image.removeChild(t.domNodes.caption),t.adjustImage(n),t.options.preloading&&t.preload()}),100)}))}},{key:"adjustImage",value:function(e){var t=this;if(!this.currentImage)return!1;var n=new Image,r=window.innerWidth*this.options.widthRatio,i=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",(function(n){t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("error."+t.eventNamespace)),t.isAnimating=!1,t.isOpen=!0,t.domNodes.spinner.style.display="none";var r=1===e||-1===e;if(t.initialImageIndex===t.currentImageIndex&&r)return t.close();t.options.alertError&&alert(t.options.alertErrorMessage),t.loadImage(r?e:1)})),n.addEventListener("load",(function(n){void 0!==e&&(t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("changed."+t.eventNamespace)),t.relatedElements[t.currentImageIndex].dispatchEvent(new Event((1===e?"nextDone":"prevDone")+"."+t.eventNamespace))),t.options.history&&t.updateURL(),-1===t.loadedImages.indexOf(t.currentImage.getAttribute("src"))&&t.loadedImages.push(t.currentImage.getAttribute("src"));var o,a,s=n.target.width,c=n.target.height;if(t.options.scaleImageToRatio||s>r||c>i){var u=s/c>r/i?s/r:c/i;s/=u,c/=u}t.domNodes.image.style.top=(window.innerHeight-c)/2+"px",t.domNodes.image.style.left=(window.innerWidth-s-t.globalScrollbarWidth)/2+"px",t.domNodes.image.style.width=s+"px",t.domNodes.image.style.height=c+"px",t.domNodes.spinner.style.display="none",t.options.focus&&t.forceFocus(),t.fadeIn(t.currentImage,t.options.fadeSpeed,(function(){t.options.focus&&t.domNodes.wrapper.focus()})),t.isOpen=!0,"string"==typeof t.options.captionSelector?o="self"===t.options.captionSelector?t.relatedElements[t.currentImageIndex]:document.querySelector(t.generateQuerySelector(t.relatedElements[t.currentImageIndex])+" "+t.options.captionSelector):"function"==typeof t.options.captionSelector&&(o=t.options.captionSelector(t.relatedElements[t.currentImageIndex])),t.options.captions&&o&&(a="data"===t.options.captionType?o.dataset[t.options.captionsData]:"text"===t.options.captionType?o.innerHTML:o.getAttribute(t.options.captionsData)),t.options.loop?1===t.relatedElements.length?t.hide(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):t.show(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===t.currentImageIndex&&t.hide(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex>=t.relatedElements.length-1&&t.hide(t.domNodes.navigation.querySelector(".sl-next")),t.currentImageIndex>0&&t.show(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex<t.relatedElements.length-1&&t.show(t.domNodes.navigation.querySelector(".sl-next"))),1===e||-1===e?(t.options.animationSlide&&(t.slide(0,100*e+"px"),setTimeout((function(){t.slide(t.options.animationSpeed/1e3,"0px")}),50)),t.fadeIn(t.domNodes.image,t.options.fadeSpeed,(function(){t.isAnimating=!1,t.setCaption(a,s)}))):(t.isAnimating=!1,t.setCaption(a,s)),t.options.additionalHtml&&!t.domNodes.additionalHtml&&(t.domNodes.additionalHtml=document.createElement("div"),t.domNodes.additionalHtml.classList.add("sl-additional-html"),t.domNodes.additionalHtml.innerHTML=t.options.additionalHtml,t.domNodes.image.appendChild(t.domNodes.additionalHtml))}))}},{key:"zoomPanElement",value:function(e,t,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+e+","+t+") scale("+n+")"}},{key:"minMax",value:function(e,t,n){return e<t?t:e>n?n:e}},{key:"setZoomData",value:function(e,t,n){this.currentImage.dataset.scale=e,this.currentImage.dataset.translateX=t,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var e=this;if(this.addEventListener(window,"resize."+this.eventNamespace,(function(t){e.isOpen&&e.adjustImage()})),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout((function(){e.addEventListener(window,"hashchange."+e.eventNamespace,(function(t){e.isOpen&&e.hashchangeHandler()}))}),40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,(function(t){if(!t.currentTarget.tagName.match(/button/i))return!0;t.preventDefault(),e.controlCoordinates.swipeDiff=0,e.loadImage(t.currentTarget.classList.contains("sl-next")?1:-1)})),this.options.scrollZoom){var t=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],(function(n){if(e.controlCoordinates.mousedown||e.isAnimating||e.isClosing||!e.isOpen)return!0;0==e.controlCoordinates.containerHeight&&(e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)),n.preventDefault();var r=n.delta||n.wheelDelta;void 0===r&&(r=n.detail),r=Math.max(-1,Math.min(1,r)),t+=r*e.options.scrollZoomFactor*t,t=Math.max(1,Math.min(e.options.maxZoom,t)),e.controlCoordinates.targetScale=t;var i=document.documentElement.scrollTop||document.body.scrollTop;e.controlCoordinates.pinchOffsetX=n.pageX,e.controlCoordinates.pinchOffsetY=n.pageY-i||0,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1?(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)):(1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.setZoomData(e.controlCoordinates.targetScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}))}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],(function(t){if("A"===t.target.tagName&&"touchstart"===t.type)return!0;if("mousedown"===t.type)t.preventDefault(),e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.capture=!0;else{if(e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,1===e.controlCoordinates.touchCount){if(e.controlCoordinates.doubleTapped)return e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&e.currentImage.classList.remove("sl-transition")}),200),!1;e.controlCoordinates.doubleTapped=!0,setTimeout((function(){e.controlCoordinates.doubleTapped=!1}),300),e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)}else 2===e.controlCoordinates.touchCount&&(e.controlCoordinates.initialPointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.initialPointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.pinchOffsetX=(e.controlCoordinates.initialPointerOffsetX+e.controlCoordinates.initialPointerOffsetX2)/2,e.controlCoordinates.pinchOffsetY=(e.controlCoordinates.initialPointerOffsetY+e.controlCoordinates.initialPointerOffsetY2)/2,e.controlCoordinates.initialPinchDistance=Math.sqrt((e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)*(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)+(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)*(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)));e.controlCoordinates.capture=!0}return!!e.controlCoordinates.mousedown||(e.transitionCapable&&(e.controlCoordinates.imageLeft=parseInt(e.domNodes.image.style.left,10)),e.controlCoordinates.mousedown=!0,e.controlCoordinates.swipeDiff=0,e.controlCoordinates.swipeYDiff=0,e.controlCoordinates.swipeStart=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYStart=t.pageY||t.touches[0].pageY,!1)})),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],(function(t){if(!e.controlCoordinates.mousedown)return!0;if("touchmove"===t.type){if(!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.touches[0].clientX,e.controlCoordinates.pointerOffsetY=t.touches[0].clientY,e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.touchmoveCount++,e.controlCoordinates.touchCount>1?(e.controlCoordinates.pointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.pointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.targetPinchDistance=Math.sqrt((e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)*(e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)+(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)*(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)),null===e.controlCoordinates.initialPinchDistance&&(e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance),Math.abs(e.controlCoordinates.initialPinchDistance-e.controlCoordinates.targetPinchDistance)>=1&&(e.controlCoordinates.targetScale=e.minMax(e.controlCoordinates.targetPinchDistance/e.controlCoordinates.initialPinchDistance*e.controlCoordinates.initialScale,1,e.options.maxZoom),e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1&&(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY)):(e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale))}if("mousemove"===t.type&&e.controlCoordinates.mousedown){if("touchmove"==t.type)return!0;if(t.preventDefault(),!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.clientX,e.controlCoordinates.pointerOffsetY=t.clientY,e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}e.controlCoordinates.zoomed||(e.controlCoordinates.swipeEnd=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYEnd=t.pageY||t.touches[0].pageY,e.controlCoordinates.swipeDiff=e.controlCoordinates.swipeStart-e.controlCoordinates.swipeEnd,e.controlCoordinates.swipeYDiff=e.controlCoordinates.swipeYStart-e.controlCoordinates.swipeYEnd,e.options.animationSlide&&e.slide(0,-e.controlCoordinates.swipeDiff+"px"))})),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],(function(t){if(e.isTouchDevice&&"touchend"===t.type&&(e.controlCoordinates.touchCount=t.touches.length,0===e.controlCoordinates.touchCount?(e.currentImage&&e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1):1===e.controlCoordinates.touchCount?(e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY):e.controlCoordinates.touchCount>1&&(e.controlCoordinates.initialPinchDistance=null)),e.controlCoordinates.mousedown){e.controlCoordinates.mousedown=!1;var n=!0;e.options.loop||(0===e.currentImageIndex&&e.controlCoordinates.swipeDiff<0&&(n=!1),e.currentImageIndex>=e.relatedElements.length-1&&e.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(e.controlCoordinates.swipeDiff)>e.options.swipeTolerance&&n?e.loadImage(e.controlCoordinates.swipeDiff>0?1:-1):e.options.animationSlide&&e.slide(e.options.animationSpeed/1e3,"0px"),e.options.swipeClose&&Math.abs(e.controlCoordinates.swipeYDiff)>50&&Math.abs(e.controlCoordinates.swipeDiff)<e.options.swipeTolerance&&e.close()}})),this.addEventListener(this.domNodes.image,["dblclick"],(function(t){if(!e.isTouchDevice)return e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&(e.currentImage.classList.remove("sl-transition"),e.currentImage.style[e.transitionPrefix+"transform-origin"]=null)}),200),e.controlCoordinates.capture=!0,!1}))}},{key:"getDimensions",value:function(e){var t=window.getComputedStyle(e),n=e.offsetHeight,r=e.offsetWidth,i=parseFloat(t.borderTopWidth);return{height:n-parseFloat(t.borderBottomWidth)-i-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),width:r-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)}}},{key:"updateHash",value:function(){var e="pid="+(this.currentImageIndex+1),t=window.location.href.split("#")[0]+"#"+e;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,t):this.historyHasChanges?window.location.replace(t):window.location.hash=e,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(e,t){var n=this;this.options.captions&&e&&""!==e&&void 0!==e&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=t+"px",this.domNodes.caption.innerHTML=e,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout((function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)}),this.options.captionDelay))}},{key:"slide",value:function(e,t){if(!this.transitionCapable)return this.domNodes.image.style.left=t;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+t+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+e+"s linear"}},{key:"getRelated",value:function(e){return e&&!1!==e&&"nofollow"!==e?Array.from(this.elements).filter((function(t){return t.getAttribute("rel")===e})):this.elements}},{key:"openImage",value:function(e){var t=this;e.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(e.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(e);var n=e.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout((function(){e.dispatchEvent(new Event("shown."+t.eventNamespace))}),this.options.animationSpeed)}},{key:"forceFocus",value:function(){var e=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,(function(t){document===t.target||e.domNodes.wrapper===t.target||e.domNodes.wrapper.contains(t.target)||e.domNodes.wrapper.focus()}))}},{key:"addEventListener",value:function(e,t,n,o){e=this.wrap(e),t=this.wrap(t);var a,s=i(e);try{for(s.s();!(a=s.n()).done;){var c=a.value;c.namespaces||(c.namespaces={});var u,l=i(t);try{for(l.s();!(u=l.n()).done;){var d=u.value,f=o||!1;["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(d.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===r(f)?f.passive=!0:f={passive:!0}),c.namespaces[d]=n,c.addEventListener(d.split(".")[0],n,f)}}catch(e){l.e(e)}finally{l.f()}}}catch(e){s.e(e)}finally{s.f()}}},{key:"removeEventListener",value:function(e,t){e=this.wrap(e),t=this.wrap(t);var n,r=i(e);try{for(r.s();!(n=r.n()).done;){var o,a=n.value,s=i(t);try{for(s.s();!(o=s.n()).done;){var c=o.value;a.namespaces&&a.namespaces[c]&&(a.removeEventListener(c.split(".")[0],a.namespaces[c]),delete a.namespaces[c])}}catch(e){s.e(e)}finally{s.f()}}}catch(e){r.e(e)}finally{r.f()}}},{key:"fadeOut",value:function(e,t,n){var r,o=this,a=i(e=this.wrap(e));try{for(a.s();!(r=a.n()).done;){var s=r.value;s.style.opacity=parseFloat(s)||window.getComputedStyle(s).getPropertyValue("opacity")}}catch(e){a.e(e)}finally{a.f()}this.isFadeIn=!1;var c=16.66666/(t||this.options.fadeSpeed);!function t(){var r=parseFloat(e[0].style.opacity);if((r-=c)<0){var a,s=i(e);try{for(s.s();!(a=s.n()).done;){var u=a.value;u.style.display="none",u.style.opacity=1}}catch(e){s.e(e)}finally{s.f()}n&&n.call(o,e)}else{var l,d=i(e);try{for(d.s();!(l=d.n()).done;)l.value.style.opacity=r}catch(e){d.e(e)}finally{d.f()}requestAnimationFrame(t)}}()}},{key:"fadeIn",value:function(e,t,n,r){var o,a=this,s=i(e=this.wrap(e));try{for(s.s();!(o=s.n()).done;){var c=o.value;c.style.opacity=0,c.style.display=r||"block"}}catch(e){s.e(e)}finally{s.f()}this.isFadeIn=!0;var u=parseFloat(e[0].dataset.opacityTarget||1),l=16.66666*u/(t||this.options.fadeSpeed);!function t(){var r=parseFloat(e[0].style.opacity);if((r+=l)>u){var o,s=i(e);try{for(s.s();!(o=s.n()).done;)o.value.style.opacity=u}catch(e){s.e(e)}finally{s.f()}n&&n.call(a,e)}else{var c,d=i(e);try{for(d.s();!(c=d.n()).done;)c.value.style.opacity=r}catch(e){d.e(e)}finally{d.f()}if(!a.isFadeIn)return;requestAnimationFrame(t)}}()}},{key:"hide",value:function(e){var t,n=i(e=this.wrap(e));try{for(n.s();!(t=n.n()).done;){var r=t.value;"none"!=r.style.display&&(r.dataset.initialDisplay=r.style.display),r.style.display="none"}}catch(e){n.e(e)}finally{n.f()}}},{key:"show",value:function(e,t){var n,r=i(e=this.wrap(e));try{for(r.s();!(n=r.n()).done;){var o=n.value;o.style.display=o.dataset.initialDisplay||t||"block"}}catch(e){r.e(e)}finally{r.f()}}},{key:"wrap",value:function(e){return"function"==typeof e[Symbol.iterator]&&"string"!=typeof e?e:[e]}},{key:"on",value:function(e,t){e=this.wrap(e);var n,r=i(this.elements);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.fullyNamespacedEvents||(o.fullyNamespacedEvents={});var a,s=i(e);try{for(s.s();!(a=s.n()).done;){var c=a.value;o.fullyNamespacedEvents[c]=t,o.addEventListener(c,t)}}catch(e){s.e(e)}finally{s.f()}}}catch(e){r.e(e)}finally{r.f()}return this}},{key:"off",value:function(e){e=this.wrap(e);var t,n=i(this.elements);try{for(n.s();!(t=n.n()).done;){var r,o=t.value,a=i(e);try{for(a.s();!(r=a.n()).done;){var s=r.value;void 0!==o.fullyNamespacedEvents&&s in o.fullyNamespacedEvents&&o.removeEventListener(s,o.fullyNamespacedEvents[s])}}catch(e){a.e(e)}finally{a.f()}}}catch(e){n.e(e)}finally{n.f()}return this}},{key:"open",value:function(e){e=e||this.elements[0],"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get(0)),this.initialImageIndex=this.elements.indexOf(e),this.initialImageIndex>-1&&this.openImage(e)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var e=this.options,t=this.initialSelector;return this.destroy(),this.constructor(t,e),this}}],n&&c(t.prototype,n),a&&c(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),d=l;e.exports.default=d,n.SimpleLightbox=l}))}();
//# sourceMappingURL=index.508dd4ba.js.map
