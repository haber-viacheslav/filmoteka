function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},o={},r=t.parcelRequired76b;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired76b=r),r.register("jhtdw",(function(t,n){e(t.exports,"app",(function(){return i})),r("gKkQl");const i=(0,r("ix4Jr").initializeApp)({apiKey:"AIzaSyD7a39CtgzeuIx1kkpFRZ7MvO1bdmoGCT4",authDomain:"filmoteka-c3a99.firebaseapp.com",databaseURL:"https://filmoteka-c3a99-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-c3a99",storageBucket:"filmoteka-c3a99.appspot.com",messagingSenderId:"412361816258",appId:"1:412361816258:web:1c806438765e9ded7b235b",measurementId:"G-SJPWP9Q9CH"})})),r.register("gKkQl",(function(t,n){e(t.exports,"initializeApp",(function(){return r("ix4Jr").initializeApp})),e(t.exports,"registerVersion",(function(){return r("ix4Jr").registerVersion}));r("ix4Jr");
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
(0,r("ix4Jr").registerVersion)("firebase","9.15.0","app")})),r.register("ix4Jr",(function(t,n){e(t.exports,"_registerComponent",(function(){return v})),e(t.exports,"_getProvider",(function(){return y})),e(t.exports,"SDK_VERSION",(function(){return I})),e(t.exports,"initializeApp",(function(){return _})),e(t.exports,"getApp",(function(){return x})),e(t.exports,"registerVersion",(function(){return E}));var i=r("4a6xH"),o=r("7vF8m"),s=r("ffjl9"),a=r("cCiiD");s=r("ffjl9");
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
class c{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const l="@firebase/app",d="0.9.0",u=new(0,o.Logger)("@firebase/app"),h="[DEFAULT]",f={[l]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,m=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e){const t=e.name;if(m.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;m.set(t,e);for(const t of p.values())g(t,e);return!0}function y(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const b={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},w=new(0,s.ErrorFactory)("app","Firebase",b);
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
class C{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}}
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
 */const I="9.15.0";function _(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const o=Object.assign({name:h,automaticDataCollectionEnabled:!1},t),r=o.name;if("string"!=typeof r||!r)throw w.create("bad-app-name",{appName:String(r)});if(n||(n=(0,s.getDefaultAppConfig)()),!n)throw w.create("no-options");const a=p.get(r);if(a){if((0,s.deepEqual)(n,a.options)&&(0,s.deepEqual)(o,a.config))return a;throw w.create("duplicate-app",{appName:r})}const c=new(0,i.ComponentContainer)(r);for(const e of m.values())c.addComponent(e);const l=new C(n,o,c);return p.set(r,l),l}function x(e=h){const t=p.get(e);if(!t&&e===h)return _();if(!t)throw w.create("no-app",{appName:e});return t}function E(e,t,n){var o;let r=null!==(o=f[e])&&void 0!==o?o:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}v(new(0,i.Component)(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
const k="firebase-heartbeat-store";let N=null;function S(){return N||(N=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(k)}}).catch((e=>{throw w.create("idb-open",{originalErrorMessage:e.message})}))),N}async function O(e,t){try{const n=(await S()).transaction(k,"readwrite"),i=n.objectStore(k);return await i.put(t,T(e)),n.done}catch(e){if(e instanceof s.FirebaseError)u.warn(e.message);else{const t=w.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function T(e){return`${e.name}!${e.options.appId}`}
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
 */class A{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=D();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=D(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),R(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),R(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function D(){return(new Date).toISOString().substring(0,10)}class L{async runIndexedDBEnvironmentCheck(){return!!(0,s.isIndexedDBAvailable)()&&(0,s.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await S()).transaction(k).objectStore(k).get(T(e))}catch(e){if(e instanceof s.FirebaseError)u.warn(e.message);else{const t=w.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return O(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function R(e){return(0,s.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var P;P="",v(new(0,i.Component)("platform-logger",(e=>new c(e)),"PRIVATE")),v(new(0,i.Component)("heartbeat",(e=>new A(e)),"PRIVATE")),E(l,d,P),E(l,d,"esm2017"),E("fire-js","")})),r.register("4a6xH",(function(t,n){e(t.exports,"Component",(function(){return o})),e(t.exports,"ComponentContainer",(function(){return c}));var i=r("ffjl9");class o{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
 */const s="[DEFAULT]";
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
 */class a{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(i,o);const r=this.instances.get(i);return r&&e(r,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===s?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}})),r.register("ffjl9",(function(n,i){e(n.exports,"assert",(function(){return l})),e(n.exports,"assertionError",(function(){return d})),e(n.exports,"base64",(function(){return h})),e(n.exports,"base64Encode",(function(){return f})),e(n.exports,"base64urlEncodeWithoutPadding",(function(){return p})),e(n.exports,"base64Decode",(function(){return m})),e(n.exports,"deepCopy",(function(){return g})),e(n.exports,"getUA",(function(){return y})),e(n.exports,"isMobileCordova",(function(){return b})),e(n.exports,"isBrowserExtension",(function(){return w})),e(n.exports,"isReactNative",(function(){return C})),e(n.exports,"isIE",(function(){return I})),e(n.exports,"isNodeSdk",(function(){return _})),e(n.exports,"isIndexedDBAvailable",(function(){return x})),e(n.exports,"validateIndexedDBOpenable",(function(){return E})),e(n.exports,"getDefaultEmulatorHost",(function(){return S})),e(n.exports,"getDefaultEmulatorHostnameAndPort",(function(){return O})),e(n.exports,"getDefaultAppConfig",(function(){return T})),e(n.exports,"getExperimentalSetting",(function(){return A})),e(n.exports,"Deferred",(function(){return D})),e(n.exports,"createMockUserToken",(function(){return L})),e(n.exports,"FirebaseError",(function(){return R})),e(n.exports,"ErrorFactory",(function(){return P})),e(n.exports,"jsonEval",(function(){return U})),e(n.exports,"stringify",(function(){return H})),e(n.exports,"isValidFormat",(function(){return F})),e(n.exports,"isAdmin",(function(){return j})),e(n.exports,"contains",(function(){return z})),e(n.exports,"safeGet",(function(){return B})),e(n.exports,"isEmpty",(function(){return Y})),e(n.exports,"map",(function(){return V})),e(n.exports,"deepEqual",(function(){return X})),e(n.exports,"querystring",(function(){return $})),e(n.exports,"querystringDecode",(function(){return K})),e(n.exports,"extractQuerystring",(function(){return G})),e(n.exports,"Sha1",(function(){return J})),e(n.exports,"createSubscribe",(function(){return Q})),e(n.exports,"errorPrefix",(function(){return te})),e(n.exports,"stringToByteArray",(function(){return ne})),e(n.exports,"stringLength",(function(){return ie})),e(n.exports,"getModularInstance",(function(){return oe}));var o=r("4TNnu");
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
 */const s=!1,a=!1,c="${JSCORE_VERSION}",l=function(e,t){if(!e)throw d(t)},d=function(e){return new Error("Firebase Database ("+c+") INTERNAL ASSERT FAILED: "+e)},u=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++i)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const o=e[t],r=t+1<e.length,s=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=o>>2,d=(3&o)<<4|s>>4;let u=(15&s)<<2|c>>6,h=63&c;a||(h=64,r||(u=64)),i.push(n[l],n[d],n[u],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(u(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const o=e[n++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const r=e[n++];t[i++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],s=e[n++];t[i++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==r||null==s||null==a)throw Error();const c=o<<2|r>>4;if(i.push(c),64!==s){const e=r<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},f=function(e){const t=u(e);return h.encodeByteArray(t,!0)},p=function(e){return f(e).replace(/\./g,"")},m=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function g(e){return v(void 0,e)}function v(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=v(e[n],t[n]));return e}
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
function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function w(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function C(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function I(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return!0===s||!0===a}function x(){try{return"object"==typeof indexedDB}catch(e){return!1}}function E(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
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
const k=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,N=()=>{try{return k()||(()=>{if(void 0===o||void 0===o.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&m(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},S=e=>{var t,n;return null===(n=null===(t=N())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},O=e=>{const t=S(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},T=()=>{var e;return null===(e=N())||void 0===e?void 0:e.config},A=e=>{var t;return null===(t=N())||void 0===t?void 0:t[`_${e}`]};
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
class D{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */function L(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[p(JSON.stringify({alg:"none",type:"JWT"})),p(JSON.stringify(r)),""].join(".")}
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
 */class R extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,R.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],r=o?function(e,t){return e.replace(M,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(o,n):"Error",s=`${this.serviceName}: ${r} (${i}).`;return new R(i,s,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const M=/\{\$([^}]+)}/g;
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
 */function U(e){return JSON.parse(e)}function H(e){return JSON.stringify(e)}
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
 */const W=function(e){let t={},n={},i={},o="";try{const r=e.split(".");t=U(m(r[0])||""),n=U(m(r[1])||""),o=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:o}},F=function(e){const t=W(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},j=function(e){const t=W(e).claims;return"object"==typeof t&&!0===t.admin};
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
function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Y(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t,n){const i={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(i[o]=t.call(n,e[o],o,e));return i}function X(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const o of n){if(!i.includes(o))return!1;const n=e[o],r=t[o];if(q(n)&&q(r)){if(!X(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function q(e){return null!==e&&"object"==typeof e}
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
function $(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function K(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function G(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class J{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,o,r=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^s&(a^c),o=1518500249):(i=s^a^c,o=1859775393):e<60?(i=s&a|c&(s|a),o=2400959708):(i=s^a^c,o=3395469782);const t=(r<<5|r>>>27)+i+l+o+n[e]&4294967295;l=c,c=a,a=4294967295&(s<<30|s>>>2),s=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const o=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(o[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}else for(;i<t;)if(o[r]=e[i],++r,++i,r===this.blockSize){this.compress_(o),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function Q(e,t){const n=new Z(e,t);return n.subscribe.bind(n)}class Z{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=ee),void 0===i.error&&(i.error=ee),void 0===i.complete&&(i.complete=ee);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ee(){}
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
 */function te(e,t){return`${e} failed: ${t} argument `}
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
const ne=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o>=55296&&o<=56319){const t=o-55296;i++,l(i<e.length,"Surrogate pair missing trail surrogate.");o=65536+(t<<10)+(e.charCodeAt(i)-56320)}o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):o<65536?(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},ie=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
function oe(e){return e&&e._delegate?e._delegate:e}})),r.register("4TNnu",(function(e,t){var n,i,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var c,l=[],d=!1,u=-1;function h(){d&&c&&(d=!1,c.length?l=c.concat(l):u=-1,l.length&&f())}function f(){if(!d){var e=a(h);d=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,d=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||d||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}})),r.register("7vF8m",(function(t,n){e(t.exports,"LogLevel",(function(){return o})),e(t.exports,"Logger",(function(){return d})),e(t.exports,"setLogLevel",(function(){return u})),e(t.exports,"setUserLogHandler",(function(){return h}));
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
const i=[];var o,r;(r=o||(o={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const s={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},a=o.INFO,c={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),o=c[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${i}]  ${e.name}:`,...n)};class d{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}constructor(e){this.name=e,this._logLevel=a,this._logHandler=l,this._userLogHandler=null,i.push(this)}}function u(e){i.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const s=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:o[n].toLowerCase(),message:s,args:r,type:t.name})}}}})),r.register("cCiiD",(function(t,n){e(t.exports,"openDB",(function(){return o}));var i=r("ekHjI");i=r("ekHjI");function o(e,t,{blocked:n,upgrade:o,blocking:r,terminated:s}={}){const a=indexedDB.open(e,t),c=(0,i.w)(a);return o&&a.addEventListener("upgradeneeded",(e=>{o((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),c}const s=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function l(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(c.get(t))return c.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,o=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!s.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,o?"readwrite":"readonly");let s=r.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[n](...t),o&&r.done]))[0]};return c.set(t,r),r}(0,i.r)((e=>({...e,get:(t,n,i)=>l(t,n)||e.get(t,n,i),has:(t,n)=>!!l(t,n)||e.has(t,n)})))})),r.register("ekHjI",(function(t,n){e(t.exports,"w",(function(){return p})),e(t.exports,"r",(function(){return u}));let i,o;const r=new WeakMap,s=new WeakMap,a=new WeakMap,c=new WeakMap,l=new WeakMap;let d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||a.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function u(e){d=e(d)}function h(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),p(r.get(this))}:function(...t){return p(e.apply(m(this),t))}:function(t,...n){const i=e.call(m(this),t,...n);return a.set(i,t.sort?t.sort():[t]),p(i)}}function f(e){return"function"==typeof e?h(e):(e instanceof IDBTransaction&&function(e){if(s.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",r),e.removeEventListener("abort",r)},o=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",r),e.addEventListener("abort",r)}));s.set(e,t)}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,d):e);var t}function p(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",r)},o=()=>{t(p(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&r.set(t,e)})).catch((()=>{})),l.set(t,e),t}(e);if(c.has(e))return c.get(e);const t=f(e);return t!==e&&(c.set(e,t),l.set(t,e)),t}const m=e=>l.get(e)})),r.register("eyjy7",(function(t,n){e(t.exports,"getAuth",(function(){return r("2YDLC").n})),e(t.exports,"signOut",(function(){return r("2YDLC").y})),e(t.exports,"GoogleAuthProvider",(function(){return r("2YDLC").Q})),e(t.exports,"signInWithPopup",(function(){return r("2YDLC").c})),e(t.exports,"onAuthStateChanged",(function(){return r("2YDLC").v})),r("1iO0g")})),r.register("1iO0g",(function(t,n){e(t.exports,"GoogleAuthProvider",(function(){return r("2YDLC").Q})),e(t.exports,"getAuth",(function(){return r("2YDLC").n})),e(t.exports,"onAuthStateChanged",(function(){return r("2YDLC").v})),e(t.exports,"signInWithPopup",(function(){return r("2YDLC").c})),e(t.exports,"signOut",(function(){return r("2YDLC").y})),r("ffjl9"),r("ix4Jr"),r("7vF8m"),r("4a6xH");r("2YDLC")})),r.register("2YDLC",(function(t,n){e(t.exports,"Q",(function(){return Oe})),e(t.exports,"v",(function(){return We})),e(t.exports,"y",(function(){return Fe})),e(t.exports,"c",(function(){return wt})),e(t.exports,"n",(function(){return nn}));var i=r("ffjl9"),o=r("ix4Jr"),s=r("7vF8m"),a=r("l73V3"),c=r("4a6xH");function l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,u=new(0,i.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),h=new(0,s.Logger)("@firebase/auth");function f(e,...t){h.logLevel<=s.LogLevel.ERROR&&h.error(`Auth (${o.SDK_VERSION}): ${e}`,...t)}
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
 */function p(e,...t){throw y(e,...t)}function m(e,...t){return y(e,...t)}function g(e,t,n){const o=Object.assign(Object.assign({},d()),{[t]:n});return new(0,i.ErrorFactory)("auth","Firebase",o).create(t,{appName:e.name})}function v(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&p(e,"argument-error"),g(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function y(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return u.create(e,...t)}function b(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function C(e,t){e||w(t)}
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
 */const I=new Map;function _(e){C(e instanceof Function,"Expected a class definition");let t=I.get(e);return t?(C(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,I.set(e,t),t)}
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
function x(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class N{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(E()||(0,i.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,C(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.isMobileCordova)()||(0,i.isReactNative)()}}
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
 */function S(e,t){C(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},A=new N(3e4,6e4);
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
 */function D(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,o,r={}){return R(e,r,(async()=>{let r={},s={};o&&("GET"===t?s=o:r={body:JSON.stringify(o)});const a=(0,i.querystring)(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),O.fetch()(M(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},r))}))}async function R(e,t,n){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},T),t);try{const t=new U(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw H(e,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const t=i.ok?r.errorMessage:r.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw H(e,"user-disabled",r);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw g(e,a,s);p(e,a)}}catch(t){if(t instanceof i.FirebaseError)throw t;p(e,"network-request-failed")}}async function P(e,t,n,i,o={}){const r=await L(e,t,n,i,o);return"mfaPendingCredential"in r&&p(e,"multi-factor-auth-required",{_serverResponse:r}),r}function M(e,t,n,i){const o=`${t}${n}?${i}`;return e.config.emulator?S(e.config,o):`${e.config.apiScheme}://${o}`}class U{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(m(this.auth,"network-request-failed"))),A.get())}))}}function H(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=m(e,t,i);return o.customData._tokenResponse=n,o}
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
function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function F(e){return 1e3*Number(e)}function j(e){const[t,n,o]=e.split(".");if(void 0===t||void 0===n||void 0===o)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.base64Decode)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(e){return f("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function z(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof i.FirebaseError&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class B{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class Y{_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function V(e){var t;const n=e.auth,i=await e.getIdToken(),o=await z(e,async function(e,t){return L(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));b(null==o?void 0:o.users.length,n,"internal-error");const r=o.users[0];e._notifyReloadListener(r);const s=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=(0,a.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(l=e.providerData,d=s,[...l.filter((e=>!d.some((t=>t.providerId===e.providerId)))),...d]);var l,d;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==c?void 0:c.length)),f=!!u&&h,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new Y(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
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
class X{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(void 0!==e.idToken,"internal-error"),b(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=j(e);return b(t,"internal-error"),b(void 0!==t.exp,"internal-error"),b(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:o,expiresIn:r}=await
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
async function(e,t){const n=await R(e,{},(async()=>{const n=(0,i.querystring)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:r}=e.config,s=M(e,o,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,o,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:o}=t,r=new X;return n&&(b("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(b("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),o&&(b("number"==typeof o,"internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new X,this.toJSON())}_performRefresh(){return w("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function q(e,t){b("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ${async getIdToken(e){const t=await z(this,this.stsTokenManager.getToken(this.auth,e));return b(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=(0,i.getModularInstance)(e),o=await n.getIdToken(t),r=j(o);b(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:o,authTime:W(F(r.auth_time)),issuedAtTime:W(F(r.iat)),expirationTime:W(F(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=(0,i.getModularInstance)(e);await V(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new $(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await V(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await z(this,async function(e,t){return L(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,o,r,s,a,c,l;const d=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:C,providerData:I,stsTokenManager:_}=t;b(y&&_,e,"internal-error");const x=X.fromJSON(this.name,_);b("string"==typeof y,e,"internal-error"),q(d,e.name),q(u,e.name),b("boolean"==typeof w,e,"internal-error"),b("boolean"==typeof C,e,"internal-error"),q(h,e.name),q(f,e.name),q(p,e.name),q(m,e.name),q(g,e.name),q(v,e.name);const E=new $({uid:y,auth:e,email:u,emailVerified:w,displayName:d,isAnonymous:C,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:x,createdAt:g,lastLoginAt:v});return I&&Array.isArray(I)&&(E.providerData=I.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new X;i.updateFromServerResponse(t);const o=new $({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await V(o),o}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,o=(0,a.__rest)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Y(o.createdAt||void 0,o.lastLoginAt||void 0)}}
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
 */class K{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}K.type="NONE";const G=K;
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
 */function J(e,t,n){return`firebase:${e}:${t}:${n}`}class Q{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Q(_(G),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=i[0]||_(G);const r=J(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(r);if(t){const i=$._fromJSON(e,t);n!==o&&(s=i),o=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(r,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(r)}catch(e){}}))),new Q(o,e,n)):new Q(o,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=J(this.userKey,i.apiKey,o),this.fullPersistenceKey=J("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Z(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ie(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ee(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(re(t))return"Blackberry";if(se(t))return"Webos";if(te(t))return"Safari";if((t.includes("chrome/")||ne(t))&&!t.includes("edge/"))return"Chrome";if(oe(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ee(e=(0,i.getUA)()){return/firefox\//i.test(e)}function te(e=(0,i.getUA)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ne(e=(0,i.getUA)()){return/crios\//i.test(e)}function ie(e=(0,i.getUA)()){return/iemobile/i.test(e)}function oe(e=(0,i.getUA)()){return/android/i.test(e)}function re(e=(0,i.getUA)()){return/blackberry/i.test(e)}function se(e=(0,i.getUA)()){return/webos/i.test(e)}function ae(e=(0,i.getUA)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ce(e=(0,i.getUA)()){return ae(e)||oe(e)||se(e)||re(e)||/windows phone/i.test(e)||ie(e)}
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
function le(e,t=[]){let n;switch(e){case"Browser":n=Z((0,i.getUA)());break;case"Worker":n=`${Z((0,i.getUA)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.SDK_VERSION}/${r}`}
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
 */class de{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class ue{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Q.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);n&&n!==r||!(null==s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await V(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.getModularInstance)(e):null;return t&&b(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new(0,i.ErrorFactory)("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;b(t,this,"argument-error"),this.redirectPersistenceManager=await Q.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const o="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return b(r,this,"internal-error"),r.then((()=>o(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fe(this),this.idTokenSubscription=new fe(this),this.beforeStateQueue=new de(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function he(e){return(0,i.getModularInstance)(e)}class fe{get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.createSubscribe)((e=>this.observer=e))}}function pe(e,t,n){const i=he(e);b(i._canInitEmulator,i,"emulator-config-failed"),b(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!!(null==n?void 0:n.disableWarnings),r=me(t),{host:s,port:a}=function(e){const t=me(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const e=o[1];return{host:e,port:ge(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:ge(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${s}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function me(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ge(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ve{toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function ye(e,t){return L(e,"POST","/v1/accounts:update",t)}
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
class be extends ve{static _fromEmailAndPassword(e,t){return new be(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new be(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",D(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return ye(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",D(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
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
 */async function we(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",D(e,t))}
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
 */class Ce extends ve{static _fromParams(e){const t=new Ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,o=(0,a.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Ce(n,i);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){return we(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,we(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,we(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.querystring)(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Ie={USER_NOT_FOUND:"user-not-found"};
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
class _e extends ve{static _fromVerification(e,t){return new _e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",D(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ie)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}=e;return n||t||i||o?new _e({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class xe{static parseLink(e){const t=function(e){const t=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).link,n=t?(0,i.querystringDecode)((0,i.extractQuerystring)(t)).deep_link_id:null,o=(0,i.querystringDecode)((0,i.extractQuerystring)(e)).deep_link_id;return(o?(0,i.querystringDecode)((0,i.extractQuerystring)(o)).link:null)||o||n||t||e}(e);try{return new xe(t)}catch(e){return null}}constructor(e){var t,n,o,r,s,a;const c=(0,i.querystringDecode)((0,i.extractQuerystring)(e)),l=null!==(t=c.apiKey)&&void 0!==t?t:null,d=null!==(n=c.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=c.mode)&&void 0!==o?o:null);b(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=null!==(r=c.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}}
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
class Ee{static credential(e,t){return be._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=xe.parseLink(t);return b(n,"argument-error"),be._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Ee.PROVIDER_ID}}Ee.PROVIDER_ID="password",Ee.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ee.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ke{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Ne extends ke{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class Se extends Ne{static credential(e){return Ce._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Se.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Se.FACEBOOK_SIGN_IN_METHOD="facebook.com",Se.PROVIDER_ID="facebook.com";
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
class Oe extends Ne{static credential(e,t){return Ce._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Oe.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Oe.GOOGLE_SIGN_IN_METHOD="google.com",Oe.PROVIDER_ID="google.com";
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
class Te extends Ne{static credential(e){return Ce._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Te.GITHUB_SIGN_IN_METHOD="github.com",Te.PROVIDER_ID="github.com";
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
class Ae extends Ne{static credential(e,t){return Ce._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ae.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}Ae.TWITTER_SIGN_IN_METHOD="twitter.com",Ae.PROVIDER_ID="twitter.com";
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
class De{static async _fromIdTokenResponse(e,t,n,i=!1){const o=await $._fromIdTokenResponse(e,n,i),r=Le(n);return new De({user:o,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Le(n);return new De({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Le(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Re extends i.FirebaseError{static _fromErrorAndOperation(e,t,n,i){return new Re(e,t,n,i)}constructor(e,t,n,i){var o;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Re.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Pe(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Re._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function Me(e,t,n=!1){const i=await z(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return De._forOperation(e,"link",i)}
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
async function Ue(e,t,n=!1){const{auth:i}=e,o="reauthenticate";try{const r=await z(e,Pe(i,o,t,e),n);b(r.idToken,i,"internal-error");const s=j(r.idToken);b(s,i,"internal-error");const{sub:a}=s;return b(e.uid===a,i,"user-mismatch"),De._forOperation(e,o,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&p(i,"user-mismatch"),e}}
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
 */async function He(e,t,n=!1){const i="signIn",o=await Pe(e,i,t),r=await De._fromIdTokenResponse(e,i,o);return n||await e._updateCurrentUser(r.user),r}function We(e,t,n,o){return(0,i.getModularInstance)(e).onAuthStateChanged(t,n,o)}function Fe(e){return(0,i.getModularInstance)(e).signOut()}new WeakMap;const je="__sak";
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
 */class ze{_isAvailable(){try{return this.storage?(this.storage.setItem(je,"1"),this.storage.removeItem(je),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class Be extends ze{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const o=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);(0,i.isIE)()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=(0,i.getUA)();return te(e)||ae(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ce(),this._shouldAllowMigration=!0}}Be.type="LOCAL";const Ye=Be;
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
 */class Ve extends ze{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ve.type="SESSION";const Xe=Ve;
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
class qe{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qe(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:o}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(r).map((async e=>e(t.origin,o))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function $e(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */qe.receivers=[];class Ke{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,r;return new Promise(((s,a)=>{const c=$e("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(l),clearTimeout(o),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function Ge(){return window}
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
function Je(){return void 0!==Ge().WorkerGlobalScope&&"function"==typeof Ge().importScripts}
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
const Qe="firebaseLocalStorageDb",Ze="firebaseLocalStorage",et="fbase_key";class tt{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function nt(e,t){return e.transaction([Ze],t?"readwrite":"readonly").objectStore(Ze)}function it(){const e=indexedDB.open(Qe,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ze,{keyPath:et})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ze)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Qe);return new tt(e).toPromise()}(),t(await it()))}))}))}async function ot(e,t,n){const i=nt(e,!0).put({[et]:t,value:n});return new tt(i).toPromise()}function rt(e,t){const n=nt(e,!0).delete(t);return new tt(n).toPromise()}class st{async _openDb(){return this.db||(this.db=await it()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Je()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qe._getInstance(Je()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ke(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await it();return await ot(e,je,"1"),await rt(e,je),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ot(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=nt(e,!1).get(t),i=await new tt(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>rt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=nt(e,!1).getAll();return new tt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:o}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}st.type="LOCAL";const at=st;
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
 */function ct(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var o,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=m("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(o=document.getElementsByTagName("head"))||void 0===o?void 0:o[0])&&void 0!==r?r:document).appendChild(i)}))}function lt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
lt("rcb"),new N(3e4,6e4);
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
const dt="recaptcha";async function ut(e,t,n){var i;const o=await n.verify();try{let r;if(b("string"==typeof o,e,"argument-error"),b(n.type===dt,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){b("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",D(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{b("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;b(n,e,"missing-multi-factor-info");const s=await function(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",D(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",D(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:o});return t}}finally{n._reset()}}
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
class ht{verifyPhoneNumber(e,t){return ut(this.auth,e,(0,i.getModularInstance)(t))}static credential(e,t){return _e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ht.credentialFromTaggedObject(t)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?_e._fromTokenResponse(t,n):null}constructor(e){this.providerId=ht.PROVIDER_ID,this.auth=he(e)}}
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
function ft(e,t){return t?_(t):(b(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */ht.PROVIDER_ID="phone",ht.PHONE_SIGN_IN_METHOD="phone";class pt extends ve{_getIdTokenResponse(e){return we(e,this._buildIdpRequest())}_linkToIdToken(e,t){return we(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return we(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function mt(e){return He(e.auth,new pt(e),e.bypassAuthState)}function gt(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Ue(n,new pt(e),e.bypassAuthState)}async function vt(e){const{auth:t,user:n}=e;return b(n,t,"internal-error"),Me(n,new pt(e),e.bypassAuthState)}
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
 */class yt{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:o,error:r,type:s}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mt;case"linkViaPopup":case"linkViaRedirect":return vt;case"reauthViaPopup":case"reauthViaRedirect":return gt;default:p(this.auth,"internal-error")}}resolve(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){C(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,o=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const bt=new N(2e3,1e4);async function wt(e,t,n){const i=he(e);v(e,t,ke);const o=ft(i,n);return new Ct(i,"signInViaPopup",t,o).executeNotNull()}class Ct extends yt{async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){C(1===this.filter.length,"Popup operations only handle one event");const e=$e();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ct.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,bt.get())};e()}constructor(e,t,n,i,o){super(e,t,i,o),this.provider=n,this.authWindow=null,this.pollId=null,Ct.currentPopupAction&&Ct.currentPopupAction.cancel(),Ct.currentPopupAction=this}}Ct.currentPopupAction=null;
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
const It=new Map;class _t extends yt{async execute(){let e=It.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=kt(t),i=Et(e);if(!await i._isAvailable())return!1;const o="true"===await i._get(n);return await i._remove(n),o}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}It.set(this.auth._key(),e)}return this.bypassAuthState||It.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function xt(e,t){It.set(e._key(),t)}function Et(e){return _(e._redirectPersistence)}function kt(e){return J("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function Nt(e,t,n=!1){const i=he(e),o=ft(i,t),r=new _t(i,o,n),s=await r.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}class St{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tt(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Tt(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(m(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ot(e))}saveEventToCache(e){this.cachedEventUids.add(Ot(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ot(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Tt({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const At=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dt=/^https?/;async function Lt(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return L(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Rt(e))return}catch(e){}p(e,"unauthorized-domain")}function Rt(e){const t=x(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===i}if(!Dt.test(n))return!1;if(At.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */const Pt=new N(3e4,6e4);function Mt(){const e=Ge().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Ut=null;function Ht(e){return Ut=Ut||function(e){return new Promise(((t,n)=>{var i,o,r;function s(){Mt(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Mt(),n(m(e,"network-request-failed"))},timeout:Pt.get()})}if(null===(o=null===(i=Ge().gapi)||void 0===i?void 0:i.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=Ge().gapi)||void 0===r?void 0:r.load)){const t=lt("iframefcb");return Ge()[t]=()=>{gapi.load?s():n(m(e,"network-request-failed"))},ct(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}s()}})).catch((e=>{throw Ut=null,e}))}(e),Ut}
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
 */const Wt=new N(5e3,15e3),Ft={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jt=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zt(e){const t=e.config;b(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?S(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:o.SDK_VERSION},s=jt.get(e.config.apiHost);s&&(r.eid=s);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.querystring)(r).slice(1)}`}
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
const Bt={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Yt{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Vt(e,t,n,o=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Bt),{width:o.toString(),height:r.toString(),top:s,left:a}),d=(0,i.getUA)().toLowerCase();n&&(c=ne(d)?"_blank":n),ee(d)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=(0,i.getUA)()){var t;return ae(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(d)&&"_self"!==c)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",c),new Yt(null);const h=window.open(t||"",c,u);b(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Yt(h)}const Xt="__/auth/handler",qt="emulator/auth/handler";function $t(e,t,n,r,s,a){b(e.config.authDomain,e,"auth-domain-config-required"),b(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:o.SDK_VERSION,eventId:s};if(t instanceof ke){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.isEmpty)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ne){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const e of Object.keys(l))void 0===l[e]&&delete l[e];return`${function({config:e}){return e.emulator?S(e,qt):`https://${e.authDomain}/${Xt}`}
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
 */(e)}?${(0,i.querystring)(l).slice(1)}`}const Kt="webStorageSupport";const Gt=class{async _openPopup(e,t,n,i){var o;C(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");return Vt(e,$t(e,t,n,x(),i),$e())}async _openRedirect(e,t,n,i){var o;return await this._originValidation(e),o=$t(e,t,n,x(),i),Ge().location.href=o,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(C(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Ht(e),n=Ge().gapi;return b(n,e,"internal-error"),t.open({where:document.body,url:zt(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ft,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const o=m(e,"network-request-failed"),r=Ge().setTimeout((()=>{i(o)}),Wt.get());function s(){Ge().clearTimeout(r),n(t)}t.ping(s).then(s,(()=>{i(o)}))}))))}(e),n=new St(e);return t.register("authEvent",(t=>{b(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kt,{type:Kt},(n=>{var i;const o=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[Kt];void 0!==o&&t(!!o),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Lt(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ce()||te()||ae()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xe,this._completeRedirectFn=Nt,this._overrideRedirectResult=xt}};var Jt="@firebase/auth",Qt="0.21.0";
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
class Zt{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const en=(0,i.getExperimentalSetting)("authIdTokenMaxAge")||300;let tn=null;function nn(e=(0,o.getApp)()){const t=(0,o._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=(0,o._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),o=n.getOptions();if((0,i.deepEqual)(o,null!=t?t:{}))return e;p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Gt,persistence:[at,Ye,Xe]}),r=(0,i.getExperimentalSetting)("authTokenSyncURL");if(r){const e=(s=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>en)return;const i=null==t?void 0:t.token;tn!==i&&(tn=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){(0,i.getModularInstance)(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,o){(0,i.getModularInstance)(e).onIdTokenChanged(t,n,o)}(n,(t=>e(t)))}var s;const a=(0,i.getDefaultEmulatorHost)("auth");return a&&pe(n,`http://${a}`),n}var on;on="Browser",(0,o._registerComponent)(new(0,c.Component)("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:r}=n.options;return((e,n)=>{b(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),b(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:o,authDomain:r,clientPlatform:on,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:le(on)},s=new ue(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(_);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),(0,o._registerComponent)(new(0,c.Component)("auth-internal",(e=>{const t=he(e.getProvider("auth").getImmediate());return new Zt(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.registerVersion)(Jt,Qt,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(on)),(0,o.registerVersion)(Jt,Qt,"esm2017")})),r.register("l73V3",(function(t,n){e(t.exports,"__rest",(function(){return i}));function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}Object.create;Object.create})),r.register("dkKs9",(function(t,n){e(t.exports,"refs",(function(){return i}));const i={btnOpenRef:document.querySelector("[data-modal-open]"),btnOpenUserRef:document.querySelector("[data-modal-open-user]"),btnCloseRef:document.querySelector("[data-main-modal-close]"),btnCloseUserRef:document.querySelector("[data-user-modal-close]"),body:document.querySelector("body"),teamModal:document.querySelector("[data-team-modal]"),headerUserLink:document.querySelector(".menu__link-js"),form:document.querySelector(".form"),searchError:document.querySelector(".form__text-error"),pagRef:document.querySelector(".pagination"),currentPage:document.querySelector("#curr"),nextPage:document.querySelector("#next"),prevPage:document.querySelector("#prev"),firstPage:document.querySelector("#first-page"),lastPage:document.querySelector("#last-page"),beforeCurPageContainer:document.querySelector(".before-cur-page"),afterCurPageContainer:document.querySelector(".after-cur-page"),themeBtnRef:document.querySelector(".theme-btn"),lightIconRef:document.querySelector(".theme-light"),darkIconRef:document.querySelector(".theme-dark"),filmList:document.querySelector(".films__list"),btnScrollTopRef:document.querySelector(".btn__up"),btnScrollDownRef:document.querySelector(".btn__down"),footerRef:document.querySelector(".footer"),btnWatch:document.querySelector(".btn__watched"),btnQueue:document.querySelector(".btn__queue")}})),r.register("d1BSM",(function(t,n){e(t.exports,"notifySuccessMessage",(function(){return o})),e(t.exports,"notifyInfoMessage",(function(){return s}));var i=r("iQIUW");const o=e=>i.Notify.success(`${e}`,{opacity:.8,position:"center-top",timeout:500,cssAnimationDuration:1500,backOverlayColor:"rgba(255,85,73,0.2)",cssAnimationStyle:"zoom"}),s=e=>i.Notify.info(`${e}`,{opacity:1,position:"center-top",timeout:500,background:"#0c09db",backOverlay:!0,cssAnimationDuration:1e3,backOverlayColor:"rgba(0, 153, 255, 0.313)",cssAnimationStyle:"zoom"})})),r.register("iQIUW",(function(e,n){var i,o;i=void 0!==t?t:"undefined"!=typeof window?window:e.exports,o=function(e){if(void 0===e&&void 0===e.document)return!1;var t,n="Success",i="Failure",o="Warning",r="Info",s={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},a=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},c=function(t){return t||(t="head"),null!==e.document[t]||(a('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},l=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t&&"[object Object]"===Object.prototype.toString.call(n[i])?e[i]=l(e[i],n[i]):e[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return e},d=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},u=0,h=function(a,d,h,p){if(!c("body"))return!1;t||f.Notify.init({});var m=l(!0,t,{});if("object"==typeof h&&!Array.isArray(h)||"object"==typeof p&&!Array.isArray(p)){var g={};"object"==typeof h?g=h:"object"==typeof p&&(g=p),t=l(!0,t,g)}var v,y,b=t[a.toLocaleLowerCase("en")];u++,"string"!=typeof d&&(d="Notiflix "+a),t.plainText&&(v=d,(y=e.document.createElement("div")).innerHTML=v,d=y.textContent||y.innerText||""),!t.plainText&&d.length>t.messageMaxLength&&(t=l(!0,t,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>t.messageMaxLength&&(d=d.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var w=e.document.getElementById(s.wrapID)||e.document.createElement("div");if(w.id=s.wrapID,w.style.width=t.width,w.style.zIndex=t.zindex,w.style.opacity=t.opacity,"center-center"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.top=t.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===t.position?(w.style.left=t.distance,w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===t.position?(w.style.right=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.left="auto"):"left-top"===t.position?(w.style.left=t.distance,w.style.top=t.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===t.position?(w.style.left=t.distance,w.style.bottom=t.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=t.distance,w.style.top=t.distance,w.style.left="auto",w.style.bottom="auto"),t.backOverlay){var C=e.document.getElementById(s.overlayID)||e.document.createElement("div");C.id=s.overlayID,C.style.width="100%",C.style.height="100%",C.style.position="fixed",C.style.zIndex=t.zindex-1,C.style.left=0,C.style.top=0,C.style.right=0,C.style.bottom=0,C.style.background=b.backOverlayColor||t.backOverlayColor,C.className=t.cssAnimation?"nx-with-animation":"",C.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(s.overlayID)||e.document.body.appendChild(C)}e.document.getElementById(s.wrapID)||e.document.body.appendChild(w);var I=e.document.createElement("div");I.id=t.ID+"-"+u,I.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof h?"nx-with-close-button":"")+" "+("function"==typeof h?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),I.style.fontSize=t.fontSize,I.style.color=b.textColor,I.style.background=b.background,I.style.borderRadius=t.borderRadius,I.style.pointerEvents="all",t.rtl&&(I.setAttribute("dir","rtl"),I.classList.add("nx-rtl-on")),I.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(I.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof h&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)I.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(t.closeButton?_:"");else{var x="";a===n?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':a===i?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':a===o?x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':a===r&&(x='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),I.innerHTML=x+'<span class="nx-message nx-with-icon">'+d+"</span>"+(t.closeButton?_:"")}else I.innerHTML='<span class="nx-message">'+d+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var E=e.document.getElementById(s.wrapID);E.insertBefore(I,E.firstChild)}else e.document.getElementById(s.wrapID).appendChild(I);var k=e.document.getElementById(I.id);if(k){var N,S,O=function(){k.classList.add("nx-remove");var t=e.document.getElementById(s.overlayID);t&&w.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(N)},T=function(){if(k&&null!==k.parentNode&&k.parentNode.removeChild(k),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var t=e.document.getElementById(s.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(S)};if(t.closeButton&&"function"!=typeof h&&e.document.getElementById(I.id).querySelector("span.nx-close-button").addEventListener("click",(function(){O();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof h||t.clickToClose)&&k.addEventListener("click",(function(){"function"==typeof h&&h(),O();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof h){var A=function(){N=setTimeout((function(){O()}),t.timeout),S=setTimeout((function(){T()}),t.timeout+t.cssAnimationDuration)};A(),t.pauseOnHover&&(k.addEventListener("mouseenter",(function(){k.classList.add("nx-paused"),clearTimeout(N),clearTimeout(S)})),k.addEventListener("mouseleave",(function(){k.classList.remove("nx-paused"),A()})))}}if(t.showOnlyTheLastOne&&u>0)for(var D=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+u+"])"),L=0;L<D.length;L++){var R=D[L];null!==R.parentNode&&R.parentNode.removeChild(R)}t=l(!0,t,m)},f={Notify:{init:function(n){t=l(!0,s,n),function(t,n){if(!c("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}}(d,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return a("You have to initialize the Notify module before call Merge function."),!1;t=l(!0,t,e)},success:function(e,t,i){h(n,e,t,i)},failure:function(e,t,n){h(i,e,t,n)},warning:function(e,t,n){h(o,e,t,n)},info:function(e,t,n){h(r,e,t,n)}}};return"object"==typeof e.Notiflix?l(!0,e.Notiflix,{Notify:f.Notify}):{Notify:f.Notify}},"function"==typeof define&&define.amd?define([],(function(){return o(i)})):"object"==typeof e.exports?e.exports=o(i):i.Notiflix=o(i)})),r.register("70ns7",(function(e,t){var n=r("dkKs9");n.refs.btnScrollTopRef.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),n.refs.btnScrollDownRef.addEventListener("click",(()=>{var e;e=n.refs.footerRef,window.scroll({left:0,top:e.offsetTop,behavior:"smooth"})})),window.addEventListener("scroll",(function(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e<t&&(n.refs.btnScrollTopRef.classList.add("btn__up--hidden"),n.refs.btnScrollDownRef.classList.remove("btn__up--hidden"));e>t&&(n.refs.btnScrollTopRef.classList.remove("btn__up--hidden"),n.refs.btnScrollDownRef.classList.add("btn__up--hidden"))})),n.refs.btnScrollTopRef.classList.add("btn__up--hidden"),n.refs.btnScrollDownRef.classList.add("btn__up--hidden")})),r.register("1WryC",(function(e,t){var n=r("dkKs9");function i(){const e="true"===n.refs.themeBtnRef.getAttribute("data-current")||!1;n.refs.themeBtnRef.setAttribute("data-current",!e),localStorage.setItem("light",JSON.stringify(e)),"false"===localStorage.getItem("light")?(document.body.classList.add("dark-theme"),n.refs.lightIconRef.classList.remove("is-hidden"),n.refs.darkIconRef.classList.add("is-hidden")):(document.body.classList.remove("dark-theme"),n.refs.darkIconRef.classList.remove("is-hidden"),n.refs.lightIconRef.classList.add("is-hidden"))}n.refs.themeBtnRef.addEventListener("click",i),"false"===localStorage.getItem("light")&&i()})),r.register("e7qNI",(function(e,t){var n=r("dkKs9"),i=r("cpWzL");function o(e){e.target.classList.contains("backdrop")&&(a(),l())}function s(e){i.teamGallery.on("shown.simplelightbox",l)&&i.teamGallery.on("closed.simplelightbox",c),"Escape"===e.code&&(a(),l())}function a(){n.refs.teamModal.classList.toggle("is-hidden"),n.refs.body.classList.toggle("no-scroll")}function c(){n.refs.teamModal.addEventListener("click",o),n.refs.body.addEventListener("keydown",s)}function l(){n.refs.body.removeEventListener("keydown",s),n.refs.teamModal.removeEventListener("click",o)}n.refs.btnOpenRef.addEventListener("click",(function(){a(),c()})),n.refs.btnCloseRef.addEventListener("click",(function(){a(),l()}))})),r.register("cpWzL",(function(t,i){e(t.exports,"teamGallery",(function(){return o}));const o=new(n(r("fZKcF")))(".team-modal__link",{sourceAttr:"href",captionsData:"alt",rel:"nofollow",fileExt:"webp|jpg",loop:!0,captionDelay:300,animationSpeed:300,animationSlide:!0,alertError:!0})})),r.register("fZKcF",(function(e,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=s(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw r}}}}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var d=function(){function e(t,n){var i=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"defaultOptions",{sourceAttr:"href",overlay:!0,overlayOpacity:.7,spinner:!0,nav:!0,navText:["&lsaquo;","&rsaquo;"],captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionClass:"",close:!0,closeText:"&times;",swipeClose:!0,showCounter:!0,fileExt:"png|jpg|jpeg|gif|webp",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,rel:!1,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,scaleImageToRatio:!1,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1,history:!0,throttleInterval:0,doubleTapZoom:2,maxZoom:10,htmlClass:"has-lightbox",rtl:!1,fixedClass:"sl-fixed",fadeSpeed:300,uniqueImages:!0,focus:!0,scrollZoom:!0,scrollZoomFactor:.5}),l(this,"transitionPrefix",void 0),l(this,"isPassiveEventsSupported",void 0),l(this,"transitionCapable",!1),l(this,"isTouchDevice","ontouchstart"in window),l(this,"isAppleDevice",/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)),l(this,"initialLocationHash",void 0),l(this,"pushStateSupport","pushState"in history),l(this,"isOpen",!1),l(this,"isAnimating",!1),l(this,"isClosing",!1),l(this,"isFadeIn",!1),l(this,"urlChangedOnce",!1),l(this,"hashReseted",!1),l(this,"historyHasChanges",!1),l(this,"historyUpdateTimeout",null),l(this,"currentImage",void 0),l(this,"eventNamespace","simplelightbox"),l(this,"domNodes",{}),l(this,"loadedImages",[]),l(this,"initialImageIndex",0),l(this,"currentImageIndex",0),l(this,"initialSelector",null),l(this,"globalScrollbarWidth",0),l(this,"controlCoordinates",{swipeDiff:0,swipeYDiff:0,swipeStart:0,swipeEnd:0,swipeYStart:0,swipeYEnd:0,mousedown:!1,imageLeft:0,zoomed:!1,containerHeight:0,containerWidth:0,containerOffsetX:0,containerOffsetY:0,imgHeight:0,imgWidth:0,capture:!1,initialOffsetX:0,initialOffsetY:0,initialPointerOffsetX:0,initialPointerOffsetY:0,initialPointerOffsetX2:0,initialPointerOffsetY2:0,initialScale:1,initialPinchDistance:0,pointerOffsetX:0,pointerOffsetY:0,pointerOffsetX2:0,pointerOffsetY2:0,targetOffsetX:0,targetOffsetY:0,targetScale:0,pinchOffsetX:0,pinchOffsetY:0,limitOffsetX:0,limitOffsetY:0,scaleDifference:0,targetPinchDistance:0,touchCount:0,doubleTapped:!1,touchmoveCount:0}),this.options=Object.assign(this.defaultOptions,n),this.isPassiveEventsSupported=this.checkPassiveEventsSupport(),"string"==typeof t?(this.initialSelector=t,this.elements=Array.from(document.querySelectorAll(t))):this.elements=void 0!==t.length&&t.length>0?Array.from(t):[t],this.relatedElements=[],this.transitionPrefix=this.calculateTransitionPrefix(),this.transitionCapable=!1!==this.transitionPrefix,this.initialLocationHash=this.hash,this.options.rel&&(this.elements=this.getRelated(this.options.rel)),this.options.uniqueImages){var o=[];this.elements=Array.from(this.elements).filter((function(e){var t=e.getAttribute(i.options.sourceAttr);return-1===o.indexOf(t)&&(o.push(t),!0)}))}this.createDomNodes(),this.options.close&&this.domNodes.wrapper.appendChild(this.domNodes.closeButton),this.options.nav&&this.domNodes.wrapper.appendChild(this.domNodes.navigation),this.options.spinner&&this.domNodes.wrapper.appendChild(this.domNodes.spinner),this.addEventListener(this.elements,"click."+this.eventNamespace,(function(e){if(i.isValidLink(e.currentTarget)){if(e.preventDefault(),i.isAnimating)return!1;i.initialImageIndex=i.elements.indexOf(e.currentTarget),i.openImage(e.currentTarget)}})),this.options.docClose&&this.addEventListener(this.domNodes.wrapper,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],(function(e){i.isOpen&&e.target===e.currentTarget&&i.close()})),this.options.disableRightClick&&this.addEventListener(document.body,"contextmenu."+this.eventNamespace,(function(e){e.target.parentElement.classList.contains("sl-image")&&e.preventDefault()})),this.options.enableKeyboard&&this.addEventListener(document.body,"keyup."+this.eventNamespace,this.throttle((function(e){if(i.controlCoordinates.swipeDiff=0,i.isAnimating&&"Escape"===e.key)return i.currentImage.setAttribute("src",""),i.isAnimating=!1,i.close();i.isOpen&&(e.preventDefault(),"Escape"===e.key&&i.close(),!i.isAnimating&&["ArrowLeft","ArrowRight"].indexOf(e.key)>-1&&i.loadImage("ArrowRight"===e.key?1:-1))}),this.options.throttleInterval)),this.addEvents()}var t,n,s;return t=e,n=[{key:"checkPassiveEventsSupport",value:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}catch(e){}return e}},{key:"generateQuerySelector",value:function(e){var t=e.tagName,n=e.id,i=e.className,o=e.parentNode;if("HTML"===t)return"HTML";var r=t;if(r+=""!==n?"#".concat(n):"",i)for(var s=i.split(/\s/),a=0;a<s.length;a++)r+=".".concat(s[a]);for(var c=1,l=e;l.previousElementSibling;l=l.previousElementSibling)c+=1;return r+=":nth-child(".concat(c,")"),"".concat(this.generateQuerySelector(o)," > ").concat(r)}},{key:"createDomNodes",value:function(){if(this.domNodes.overlay=document.createElement("div"),this.domNodes.overlay.classList.add("sl-overlay"),this.domNodes.overlay.dataset.opacityTarget=this.options.overlayOpacity,this.domNodes.closeButton=document.createElement("button"),this.domNodes.closeButton.classList.add("sl-close"),this.domNodes.closeButton.innerHTML=this.options.closeText,this.domNodes.spinner=document.createElement("div"),this.domNodes.spinner.classList.add("sl-spinner"),this.domNodes.spinner.innerHTML="<div></div>",this.domNodes.navigation=document.createElement("div"),this.domNodes.navigation.classList.add("sl-navigation"),this.domNodes.navigation.innerHTML='<button class="sl-prev">'.concat(this.options.navText[0],'</button><button class="sl-next">').concat(this.options.navText[1],"</button>"),this.domNodes.counter=document.createElement("div"),this.domNodes.counter.classList.add("sl-counter"),this.domNodes.counter.innerHTML='<span class="sl-current"></span>/<span class="sl-total"></span>',this.domNodes.caption=document.createElement("div"),this.domNodes.caption.classList.add("sl-caption","pos-"+this.options.captionPosition),this.options.captionClass){var e,t=this.options.captionClass.split(/[\s,]+/);(e=this.domNodes.caption.classList).add.apply(e,r(t))}this.domNodes.image=document.createElement("div"),this.domNodes.image.classList.add("sl-image"),this.domNodes.wrapper=document.createElement("div"),this.domNodes.wrapper.classList.add("sl-wrapper"),this.domNodes.wrapper.setAttribute("tabindex",-1),this.domNodes.wrapper.setAttribute("role","dialog"),this.domNodes.wrapper.setAttribute("aria-hidden",!1),this.options.className&&this.domNodes.wrapper.classList.add(this.options.className),this.options.rtl&&this.domNodes.wrapper.classList.add("sl-dir-rtl")}},{key:"throttle",value:function(e,t){var n;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){return n=!1}),t))}}},{key:"isValidLink",value:function(e){return!this.options.fileExt||e.getAttribute(this.options.sourceAttr)&&new RegExp("("+this.options.fileExt+")$","i").test(e.getAttribute(this.options.sourceAttr))}},{key:"calculateTransitionPrefix",value:function(){var e=(document.body||document.documentElement).style;return"transition"in e?"":"WebkitTransition"in e?"-webkit-":"MozTransition"in e?"-moz-":"OTransition"in e&&"-o"}},{key:"getScrollbarWidth",value:function(){var e,t=document.createElement("div");return t.classList.add("sl-scrollbar-measure"),document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e}},{key:"toggleScrollbar",value:function(e){var t=0,n=[].slice.call(document.querySelectorAll("."+this.options.fixedClass));if("hide"===e){var i=window.innerWidth;if(!i){var o=document.documentElement.getBoundingClientRect();i=o.right-Math.abs(o.left)}if(document.body.clientWidth<i||this.isAppleDevice){var r=parseInt(document.body.style.paddingRight||0,10);t=this.getScrollbarWidth(),document.body.dataset.originalPaddingRight=r,(t>0||0==t&&this.isAppleDevice)&&(document.body.classList.add("hidden-scroll"),document.body.style.paddingRight=r+t+"px",n.forEach((function(e){var n=e.style.paddingRight,i=window.getComputedStyle(e)["padding-right"];e.dataset.originalPaddingRight=n,e.style.paddingRight="".concat(parseFloat(i)+t,"px")})))}}else document.body.classList.remove("hidden-scroll"),document.body.style.paddingRight=document.body.dataset.originalPaddingRight,n.forEach((function(e){var t=e.dataset.originalPaddingRight;void 0!==t&&(e.style.paddingRight=t)}));return t}},{key:"close",value:function(){var e=this;if(!this.isOpen||this.isAnimating||this.isClosing)return!1;this.isClosing=!0;var t=this.relatedElements[this.currentImageIndex];for(var n in t.dispatchEvent(new Event("close.simplelightbox")),this.options.history&&(this.historyHasChanges=!1,this.hashReseted||this.resetHash()),this.removeEventListener(document,"focusin."+this.eventNamespace),this.fadeOut(this.domNodes.overlay,this.options.fadeSpeed),this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"),this.options.fadeSpeed,(function(){e.options.disableScroll&&e.toggleScrollbar("show"),e.options.htmlClass&&""!==e.options.htmlClass&&document.querySelector("html").classList.remove(e.options.htmlClass),document.body.removeChild(e.domNodes.wrapper),document.body.removeChild(e.domNodes.overlay),e.domNodes.additionalHtml=null,t.dispatchEvent(new Event("closed.simplelightbox")),e.isClosing=!1})),this.currentImage=null,this.isOpen=!1,this.isAnimating=!1,this.controlCoordinates)this.controlCoordinates[n]=0;this.controlCoordinates.mousedown=!1,this.controlCoordinates.zoomed=!1,this.controlCoordinates.capture=!1,this.controlCoordinates.initialScale=this.minMax(1,1,this.options.maxZoom),this.controlCoordinates.doubleTapped=!1}},{key:"hash",get:function(){return window.location.hash.substring(1)}},{key:"preload",value:function(){var e=this,t=this.currentImageIndex,n=this.relatedElements.length,i=t+1<0?n-1:t+1>=n-1?0:t+1,o=t-1<0?n-1:t-1>=n-1?0:t-1,r=new Image,s=new Image;r.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===e.loadedImages.indexOf(i)&&e.loadedImages.push(i),e.relatedElements[t].dispatchEvent(new Event("nextImageLoaded."+e.eventNamespace))})),r.setAttribute("src",this.relatedElements[i].getAttribute(this.options.sourceAttr)),s.addEventListener("load",(function(n){var i=n.target.getAttribute("src");-1===e.loadedImages.indexOf(i)&&e.loadedImages.push(i),e.relatedElements[t].dispatchEvent(new Event("prevImageLoaded."+e.eventNamespace))})),s.setAttribute("src",this.relatedElements[o].getAttribute(this.options.sourceAttr))}},{key:"loadImage",value:function(e){var t=this,n=e;this.options.rtl&&(e=-e),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change."+this.eventNamespace)),this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1===e?"next":"prev")+"."+this.eventNamespace));var i=this.currentImageIndex+e;if(this.isAnimating||(i<0||i>=this.relatedElements.length)&&!1===this.options.loop)return!1;this.currentImageIndex=i<0?this.relatedElements.length-1:i>this.relatedElements.length-1?0:i,this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.options.animationSlide&&this.slide(this.options.animationSpeed/1e3,-100*n-this.controlCoordinates.swipeDiff+"px"),this.fadeOut(this.domNodes.image,this.options.fadeSpeed,(function(){t.isAnimating=!0,t.isClosing?t.isAnimating=!1:setTimeout((function(){var e=t.relatedElements[t.currentImageIndex];t.currentImage.setAttribute("src",e.getAttribute(t.options.sourceAttr)),-1===t.loadedImages.indexOf(e.getAttribute(t.options.sourceAttr))&&t.show(t.domNodes.spinner),t.domNodes.image.contains(t.domNodes.caption)&&t.domNodes.image.removeChild(t.domNodes.caption),t.adjustImage(n),t.options.preloading&&t.preload()}),100)}))}},{key:"adjustImage",value:function(e){var t=this;if(!this.currentImage)return!1;var n=new Image,i=window.innerWidth*this.options.widthRatio,o=window.innerHeight*this.options.heightRatio;n.setAttribute("src",this.currentImage.getAttribute("src")),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,this.zoomPanElement(0,0,1),n.addEventListener("error",(function(n){t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("error."+t.eventNamespace)),t.isAnimating=!1,t.isOpen=!0,t.domNodes.spinner.style.display="none";var i=1===e||-1===e;if(t.initialImageIndex===t.currentImageIndex&&i)return t.close();t.options.alertError&&alert(t.options.alertErrorMessage),t.loadImage(i?e:1)})),n.addEventListener("load",(function(n){void 0!==e&&(t.relatedElements[t.currentImageIndex].dispatchEvent(new Event("changed."+t.eventNamespace)),t.relatedElements[t.currentImageIndex].dispatchEvent(new Event((1===e?"nextDone":"prevDone")+"."+t.eventNamespace))),t.options.history&&t.updateURL(),-1===t.loadedImages.indexOf(t.currentImage.getAttribute("src"))&&t.loadedImages.push(t.currentImage.getAttribute("src"));var r,s,a=n.target.width,c=n.target.height;if(t.options.scaleImageToRatio||a>i||c>o){var l=a/c>i/o?a/i:c/o;a/=l,c/=l}t.domNodes.image.style.top=(window.innerHeight-c)/2+"px",t.domNodes.image.style.left=(window.innerWidth-a-t.globalScrollbarWidth)/2+"px",t.domNodes.image.style.width=a+"px",t.domNodes.image.style.height=c+"px",t.domNodes.spinner.style.display="none",t.options.focus&&t.forceFocus(),t.fadeIn(t.currentImage,t.options.fadeSpeed,(function(){t.options.focus&&t.domNodes.wrapper.focus()})),t.isOpen=!0,"string"==typeof t.options.captionSelector?r="self"===t.options.captionSelector?t.relatedElements[t.currentImageIndex]:document.querySelector(t.generateQuerySelector(t.relatedElements[t.currentImageIndex])+" "+t.options.captionSelector):"function"==typeof t.options.captionSelector&&(r=t.options.captionSelector(t.relatedElements[t.currentImageIndex])),t.options.captions&&r&&(s="data"===t.options.captionType?r.dataset[t.options.captionsData]:"text"===t.options.captionType?r.innerHTML:r.getAttribute(t.options.captionsData)),t.options.loop?1===t.relatedElements.length?t.hide(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):t.show(t.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")):(0===t.currentImageIndex&&t.hide(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex>=t.relatedElements.length-1&&t.hide(t.domNodes.navigation.querySelector(".sl-next")),t.currentImageIndex>0&&t.show(t.domNodes.navigation.querySelector(".sl-prev")),t.currentImageIndex<t.relatedElements.length-1&&t.show(t.domNodes.navigation.querySelector(".sl-next"))),1===e||-1===e?(t.options.animationSlide&&(t.slide(0,100*e+"px"),setTimeout((function(){t.slide(t.options.animationSpeed/1e3,"0px")}),50)),t.fadeIn(t.domNodes.image,t.options.fadeSpeed,(function(){t.isAnimating=!1,t.setCaption(s,a)}))):(t.isAnimating=!1,t.setCaption(s,a)),t.options.additionalHtml&&!t.domNodes.additionalHtml&&(t.domNodes.additionalHtml=document.createElement("div"),t.domNodes.additionalHtml.classList.add("sl-additional-html"),t.domNodes.additionalHtml.innerHTML=t.options.additionalHtml,t.domNodes.image.appendChild(t.domNodes.additionalHtml))}))}},{key:"zoomPanElement",value:function(e,t,n){this.currentImage.style[this.transitionPrefix+"transform"]="translate("+e+","+t+") scale("+n+")"}},{key:"minMax",value:function(e,t,n){return e<t?t:e>n?n:e}},{key:"setZoomData",value:function(e,t,n){this.currentImage.dataset.scale=e,this.currentImage.dataset.translateX=t,this.currentImage.dataset.translateY=n}},{key:"hashchangeHandler",value:function(){this.isOpen&&this.hash===this.initialLocationHash&&(this.hashReseted=!0,this.close())}},{key:"addEvents",value:function(){var e=this;if(this.addEventListener(window,"resize."+this.eventNamespace,(function(t){e.isOpen&&e.adjustImage()})),this.addEventListener(this.domNodes.closeButton,["click."+this.eventNamespace,"touchstart."+this.eventNamespace],this.close.bind(this)),this.options.history&&setTimeout((function(){e.addEventListener(window,"hashchange."+e.eventNamespace,(function(t){e.isOpen&&e.hashchangeHandler()}))}),40),this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace,(function(t){if(!t.currentTarget.tagName.match(/button/i))return!0;t.preventDefault(),e.controlCoordinates.swipeDiff=0,e.loadImage(t.currentTarget.classList.contains("sl-next")?1:-1)})),this.options.scrollZoom){var t=1;this.addEventListener(this.domNodes.image,["mousewheel","DOMMouseScroll"],(function(n){if(e.controlCoordinates.mousedown||e.isAnimating||e.isClosing||!e.isOpen)return!0;0==e.controlCoordinates.containerHeight&&(e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)),n.preventDefault();var i=n.delta||n.wheelDelta;void 0===i&&(i=n.detail),i=Math.max(-1,Math.min(1,i)),t+=i*e.options.scrollZoomFactor*t,t=Math.max(1,Math.min(e.options.maxZoom,t)),e.controlCoordinates.targetScale=t;var o=document.documentElement.scrollTop||document.body.scrollTop;e.controlCoordinates.pinchOffsetX=n.pageX,e.controlCoordinates.pinchOffsetY=n.pageY-o||0,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1?(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)):(1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.setZoomData(e.controlCoordinates.targetScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}))}this.addEventListener(this.domNodes.image,["touchstart."+this.eventNamespace,"mousedown."+this.eventNamespace],(function(t){if("A"===t.target.tagName&&"touchstart"===t.type)return!0;if("mousedown"===t.type)t.preventDefault(),e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.capture=!0;else{if(e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,1===e.controlCoordinates.touchCount){if(e.controlCoordinates.doubleTapped)return e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&e.currentImage.classList.remove("sl-transition")}),200),!1;e.controlCoordinates.doubleTapped=!0,setTimeout((function(){e.controlCoordinates.doubleTapped=!1}),300),e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY)}else 2===e.controlCoordinates.touchCount&&(e.controlCoordinates.initialPointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.initialPointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.initialOffsetX=parseFloat(e.currentImage.dataset.translateX),e.controlCoordinates.initialOffsetY=parseFloat(e.currentImage.dataset.translateY),e.controlCoordinates.pinchOffsetX=(e.controlCoordinates.initialPointerOffsetX+e.controlCoordinates.initialPointerOffsetX2)/2,e.controlCoordinates.pinchOffsetY=(e.controlCoordinates.initialPointerOffsetY+e.controlCoordinates.initialPointerOffsetY2)/2,e.controlCoordinates.initialPinchDistance=Math.sqrt((e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)*(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialPointerOffsetX2)+(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)*(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialPointerOffsetY2)));e.controlCoordinates.capture=!0}return!!e.controlCoordinates.mousedown||(e.transitionCapable&&(e.controlCoordinates.imageLeft=parseInt(e.domNodes.image.style.left,10)),e.controlCoordinates.mousedown=!0,e.controlCoordinates.swipeDiff=0,e.controlCoordinates.swipeYDiff=0,e.controlCoordinates.swipeStart=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYStart=t.pageY||t.touches[0].pageY,!1)})),this.addEventListener(this.domNodes.image,["touchmove."+this.eventNamespace,"mousemove."+this.eventNamespace,"MSPointerMove"],(function(t){if(!e.controlCoordinates.mousedown)return!0;if("touchmove"===t.type){if(!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.touches[0].clientX,e.controlCoordinates.pointerOffsetY=t.touches[0].clientY,e.controlCoordinates.touchCount=t.touches.length,e.controlCoordinates.touchmoveCount++,e.controlCoordinates.touchCount>1?(e.controlCoordinates.pointerOffsetX2=t.touches[1].clientX,e.controlCoordinates.pointerOffsetY2=t.touches[1].clientY,e.controlCoordinates.targetPinchDistance=Math.sqrt((e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)*(e.controlCoordinates.pointerOffsetX-e.controlCoordinates.pointerOffsetX2)+(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)*(e.controlCoordinates.pointerOffsetY-e.controlCoordinates.pointerOffsetY2)),null===e.controlCoordinates.initialPinchDistance&&(e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance),Math.abs(e.controlCoordinates.initialPinchDistance-e.controlCoordinates.targetPinchDistance)>=1&&(e.controlCoordinates.targetScale=e.minMax(e.controlCoordinates.targetPinchDistance/e.controlCoordinates.initialPinchDistance*e.controlCoordinates.initialScale,1,e.options.maxZoom),e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.scaleDifference=e.controlCoordinates.targetScale-e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.initialOffsetX-(e.controlCoordinates.pinchOffsetX-e.controlCoordinates.containerOffsetX-e.controlCoordinates.containerWidth/2-e.controlCoordinates.initialOffsetX)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.initialOffsetY-(e.controlCoordinates.pinchOffsetY-e.controlCoordinates.containerOffsetY-e.controlCoordinates.containerHeight/2-e.controlCoordinates.initialOffsetY)/(e.controlCoordinates.targetScale-e.controlCoordinates.scaleDifference)*e.controlCoordinates.scaleDifference,-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale),e.controlCoordinates.targetScale>1&&(e.controlCoordinates.zoomed=!0,(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=e.controlCoordinates.targetPinchDistance,e.controlCoordinates.initialScale=e.controlCoordinates.targetScale,e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY)):(e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale))}if("mousemove"===t.type&&e.controlCoordinates.mousedown){if("touchmove"==t.type)return!0;if(t.preventDefault(),!1===e.controlCoordinates.capture)return!1;e.controlCoordinates.pointerOffsetX=t.clientX,e.controlCoordinates.pointerOffsetY=t.clientY,e.controlCoordinates.targetScale=e.controlCoordinates.initialScale,e.controlCoordinates.limitOffsetX=(e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale-e.controlCoordinates.containerWidth)/2,e.controlCoordinates.limitOffsetY=(e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale-e.controlCoordinates.containerHeight)/2,e.controlCoordinates.targetOffsetX=e.controlCoordinates.imgWidth*e.controlCoordinates.targetScale<=e.controlCoordinates.containerWidth?0:e.minMax(e.controlCoordinates.pointerOffsetX-(e.controlCoordinates.initialPointerOffsetX-e.controlCoordinates.initialOffsetX),-1*e.controlCoordinates.limitOffsetX,e.controlCoordinates.limitOffsetX),e.controlCoordinates.targetOffsetY=e.controlCoordinates.imgHeight*e.controlCoordinates.targetScale<=e.controlCoordinates.containerHeight?0:e.minMax(e.controlCoordinates.pointerOffsetY-(e.controlCoordinates.initialPointerOffsetY-e.controlCoordinates.initialOffsetY),-1*e.controlCoordinates.limitOffsetY,e.controlCoordinates.limitOffsetY),Math.abs(e.controlCoordinates.targetOffsetX)===Math.abs(e.controlCoordinates.limitOffsetX)&&(e.controlCoordinates.initialOffsetX=e.controlCoordinates.targetOffsetX,e.controlCoordinates.initialPointerOffsetX=e.controlCoordinates.pointerOffsetX),Math.abs(e.controlCoordinates.targetOffsetY)===Math.abs(e.controlCoordinates.limitOffsetY)&&(e.controlCoordinates.initialOffsetY=e.controlCoordinates.targetOffsetY,e.controlCoordinates.initialPointerOffsetY=e.controlCoordinates.pointerOffsetY),e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),e.zoomPanElement(e.controlCoordinates.targetOffsetX+"px",e.controlCoordinates.targetOffsetY+"px",e.controlCoordinates.targetScale)}e.controlCoordinates.zoomed||(e.controlCoordinates.swipeEnd=t.pageX||t.touches[0].pageX,e.controlCoordinates.swipeYEnd=t.pageY||t.touches[0].pageY,e.controlCoordinates.swipeDiff=e.controlCoordinates.swipeStart-e.controlCoordinates.swipeEnd,e.controlCoordinates.swipeYDiff=e.controlCoordinates.swipeYStart-e.controlCoordinates.swipeYEnd,e.options.animationSlide&&e.slide(0,-e.controlCoordinates.swipeDiff+"px"))})),this.addEventListener(this.domNodes.image,["touchend."+this.eventNamespace,"mouseup."+this.eventNamespace,"touchcancel."+this.eventNamespace,"mouseleave."+this.eventNamespace,"pointerup","pointercancel","MSPointerUp","MSPointerCancel"],(function(t){if(e.isTouchDevice&&"touchend"===t.type&&(e.controlCoordinates.touchCount=t.touches.length,0===e.controlCoordinates.touchCount?(e.currentImage&&e.setZoomData(e.controlCoordinates.initialScale,e.controlCoordinates.targetOffsetX,e.controlCoordinates.targetOffsetY),1===e.controlCoordinates.initialScale&&(e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)),e.controlCoordinates.initialPinchDistance=null,e.controlCoordinates.capture=!1):1===e.controlCoordinates.touchCount?(e.controlCoordinates.initialPointerOffsetX=t.touches[0].clientX,e.controlCoordinates.initialPointerOffsetY=t.touches[0].clientY):e.controlCoordinates.touchCount>1&&(e.controlCoordinates.initialPinchDistance=null)),e.controlCoordinates.mousedown){e.controlCoordinates.mousedown=!1;var n=!0;e.options.loop||(0===e.currentImageIndex&&e.controlCoordinates.swipeDiff<0&&(n=!1),e.currentImageIndex>=e.relatedElements.length-1&&e.controlCoordinates.swipeDiff>0&&(n=!1)),Math.abs(e.controlCoordinates.swipeDiff)>e.options.swipeTolerance&&n?e.loadImage(e.controlCoordinates.swipeDiff>0?1:-1):e.options.animationSlide&&e.slide(e.options.animationSpeed/1e3,"0px"),e.options.swipeClose&&Math.abs(e.controlCoordinates.swipeYDiff)>50&&Math.abs(e.controlCoordinates.swipeDiff)<e.options.swipeTolerance&&e.close()}})),this.addEventListener(this.domNodes.image,["dblclick"],(function(t){if(!e.isTouchDevice)return e.controlCoordinates.initialPointerOffsetX=t.clientX,e.controlCoordinates.initialPointerOffsetY=t.clientY,e.controlCoordinates.containerHeight=e.getDimensions(e.domNodes.image).height,e.controlCoordinates.containerWidth=e.getDimensions(e.domNodes.image).width,e.controlCoordinates.imgHeight=e.getDimensions(e.currentImage).height,e.controlCoordinates.imgWidth=e.getDimensions(e.currentImage).width,e.controlCoordinates.containerOffsetX=e.domNodes.image.offsetLeft,e.controlCoordinates.containerOffsetY=e.domNodes.image.offsetTop,e.currentImage.classList.add("sl-transition"),e.controlCoordinates.zoomed?(e.controlCoordinates.initialScale=1,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),e.controlCoordinates.zoomed=!1,"none"===e.domNodes.caption.style.display&&e.fadeIn(e.domNodes.caption,e.options.fadeSpeed)):(e.controlCoordinates.initialScale=e.options.doubleTapZoom,e.setZoomData(e.controlCoordinates.initialScale,0,0),e.zoomPanElement("0px","0px",e.controlCoordinates.initialScale),(!e.domNodes.caption.style.opacity||e.domNodes.caption.style.opacity>0)&&"none"!==e.domNodes.caption.style.display&&e.fadeOut(e.domNodes.caption,e.options.fadeSpeed),e.controlCoordinates.zoomed=!0),setTimeout((function(){e.currentImage&&(e.currentImage.classList.remove("sl-transition"),e.currentImage.style[e.transitionPrefix+"transform-origin"]=null)}),200),e.controlCoordinates.capture=!0,!1}))}},{key:"getDimensions",value:function(e){var t=window.getComputedStyle(e),n=e.offsetHeight,i=e.offsetWidth,o=parseFloat(t.borderTopWidth);return{height:n-parseFloat(t.borderBottomWidth)-o-parseFloat(t.paddingTop)-parseFloat(t.paddingBottom),width:i-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)-parseFloat(t.paddingLeft)-parseFloat(t.paddingRight)}}},{key:"updateHash",value:function(){var e="pid="+(this.currentImageIndex+1),t=window.location.href.split("#")[0]+"#"+e;this.hashReseted=!1,this.pushStateSupport?window.history[this.historyHasChanges?"replaceState":"pushState"]("",document.title,t):this.historyHasChanges?window.location.replace(t):window.location.hash=e,this.historyHasChanges||(this.urlChangedOnce=!0),this.historyHasChanges=!0}},{key:"resetHash",value:function(){this.hashReseted=!0,this.urlChangedOnce?history.back():this.pushStateSupport?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",clearTimeout(this.historyUpdateTimeout)}},{key:"updateURL",value:function(){clearTimeout(this.historyUpdateTimeout),this.historyHasChanges?this.historyUpdateTimeout=setTimeout(this.updateHash.bind(this),800):this.updateHash()}},{key:"setCaption",value:function(e,t){var n=this;this.options.captions&&e&&""!==e&&void 0!==e&&(this.hide(this.domNodes.caption),this.domNodes.caption.style.width=t+"px",this.domNodes.caption.innerHTML=e,this.domNodes.image.appendChild(this.domNodes.caption),setTimeout((function(){n.fadeIn(n.domNodes.caption,n.options.fadeSpeed)}),this.options.captionDelay))}},{key:"slide",value:function(e,t){if(!this.transitionCapable)return this.domNodes.image.style.left=t;this.domNodes.image.style[this.transitionPrefix+"transform"]="translateX("+t+")",this.domNodes.image.style[this.transitionPrefix+"transition"]=this.transitionPrefix+"transform "+e+"s linear"}},{key:"getRelated",value:function(e){return e&&!1!==e&&"nofollow"!==e?Array.from(this.elements).filter((function(t){return t.getAttribute("rel")===e})):this.elements}},{key:"openImage",value:function(e){var t=this;e.dispatchEvent(new Event("show."+this.eventNamespace)),this.globalScrollbarWidth=this.getScrollbarWidth(),this.options.disableScroll&&(this.toggleScrollbar("hide"),this.globalScrollbarWidth=0),this.options.htmlClass&&""!==this.options.htmlClass&&document.querySelector("html").classList.add(this.options.htmlClass),document.body.appendChild(this.domNodes.wrapper),this.domNodes.wrapper.appendChild(this.domNodes.image),this.options.overlay&&document.body.appendChild(this.domNodes.overlay),this.relatedElements=this.getRelated(e.rel),this.options.showCounter&&(1==this.relatedElements.length&&this.domNodes.wrapper.contains(this.domNodes.counter)?this.domNodes.wrapper.removeChild(this.domNodes.counter):this.relatedElements.length>1&&!this.domNodes.wrapper.contains(this.domNodes.counter)&&this.domNodes.wrapper.appendChild(this.domNodes.counter)),this.isAnimating=!0,this.currentImageIndex=this.relatedElements.indexOf(e);var n=e.getAttribute(this.options.sourceAttr);this.currentImage=document.createElement("img"),this.currentImage.style.display="none",this.currentImage.setAttribute("src",n),this.currentImage.dataset.scale=1,this.currentImage.dataset.translateX=0,this.currentImage.dataset.translateY=0,-1===this.loadedImages.indexOf(n)&&this.loadedImages.push(n),this.domNodes.image.innerHTML="",this.domNodes.image.setAttribute("style",""),this.domNodes.image.appendChild(this.currentImage),this.fadeIn(this.domNodes.overlay,this.options.fadeSpeed),this.fadeIn([this.domNodes.counter,this.domNodes.navigation,this.domNodes.closeButton],this.options.fadeSpeed),this.show(this.domNodes.spinner),this.domNodes.counter.querySelector(".sl-current").innerHTML=this.currentImageIndex+1,this.domNodes.counter.querySelector(".sl-total").innerHTML=this.relatedElements.length,this.adjustImage(),this.options.preloading&&this.preload(),setTimeout((function(){e.dispatchEvent(new Event("shown."+t.eventNamespace))}),this.options.animationSpeed)}},{key:"forceFocus",value:function(){var e=this;this.removeEventListener(document,"focusin."+this.eventNamespace),this.addEventListener(document,"focusin."+this.eventNamespace,(function(t){document===t.target||e.domNodes.wrapper===t.target||e.domNodes.wrapper.contains(t.target)||e.domNodes.wrapper.focus()}))}},{key:"addEventListener",value:function(e,t,n,r){e=this.wrap(e),t=this.wrap(t);var s,a=o(e);try{for(a.s();!(s=a.n()).done;){var c=s.value;c.namespaces||(c.namespaces={});var l,d=o(t);try{for(d.s();!(l=d.n()).done;){var u=l.value,h=r||!1;["touchstart","touchmove","mousewheel","DOMMouseScroll"].indexOf(u.split(".")[0])>=0&&this.isPassiveEventsSupported&&("object"===i(h)?h.passive=!0:h={passive:!0}),c.namespaces[u]=n,c.addEventListener(u.split(".")[0],n,h)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){a.e(e)}finally{a.f()}}},{key:"removeEventListener",value:function(e,t){e=this.wrap(e),t=this.wrap(t);var n,i=o(e);try{for(i.s();!(n=i.n()).done;){var r,s=n.value,a=o(t);try{for(a.s();!(r=a.n()).done;){var c=r.value;s.namespaces&&s.namespaces[c]&&(s.removeEventListener(c.split(".")[0],s.namespaces[c]),delete s.namespaces[c])}}catch(e){a.e(e)}finally{a.f()}}}catch(e){i.e(e)}finally{i.f()}}},{key:"fadeOut",value:function(e,t,n){var i,r=this,s=o(e=this.wrap(e));try{for(s.s();!(i=s.n()).done;){var a=i.value;a.style.opacity=parseFloat(a)||window.getComputedStyle(a).getPropertyValue("opacity")}}catch(e){s.e(e)}finally{s.f()}this.isFadeIn=!1;var c=16.66666/(t||this.options.fadeSpeed);!function t(){var i=parseFloat(e[0].style.opacity);if((i-=c)<0){var s,a=o(e);try{for(a.s();!(s=a.n()).done;){var l=s.value;l.style.display="none",l.style.opacity=1}}catch(e){a.e(e)}finally{a.f()}n&&n.call(r,e)}else{var d,u=o(e);try{for(u.s();!(d=u.n()).done;)d.value.style.opacity=i}catch(e){u.e(e)}finally{u.f()}requestAnimationFrame(t)}}()}},{key:"fadeIn",value:function(e,t,n,i){var r,s=this,a=o(e=this.wrap(e));try{for(a.s();!(r=a.n()).done;){var c=r.value;c.style.opacity=0,c.style.display=i||"block"}}catch(e){a.e(e)}finally{a.f()}this.isFadeIn=!0;var l=parseFloat(e[0].dataset.opacityTarget||1),d=16.66666*l/(t||this.options.fadeSpeed);!function t(){var i=parseFloat(e[0].style.opacity);if((i+=d)>l){var r,a=o(e);try{for(a.s();!(r=a.n()).done;)r.value.style.opacity=l}catch(e){a.e(e)}finally{a.f()}n&&n.call(s,e)}else{var c,u=o(e);try{for(u.s();!(c=u.n()).done;)c.value.style.opacity=i}catch(e){u.e(e)}finally{u.f()}if(!s.isFadeIn)return;requestAnimationFrame(t)}}()}},{key:"hide",value:function(e){var t,n=o(e=this.wrap(e));try{for(n.s();!(t=n.n()).done;){var i=t.value;"none"!=i.style.display&&(i.dataset.initialDisplay=i.style.display),i.style.display="none"}}catch(e){n.e(e)}finally{n.f()}}},{key:"show",value:function(e,t){var n,i=o(e=this.wrap(e));try{for(i.s();!(n=i.n()).done;){var r=n.value;r.style.display=r.dataset.initialDisplay||t||"block"}}catch(e){i.e(e)}finally{i.f()}}},{key:"wrap",value:function(e){return"function"==typeof e[Symbol.iterator]&&"string"!=typeof e?e:[e]}},{key:"on",value:function(e,t){e=this.wrap(e);var n,i=o(this.elements);try{for(i.s();!(n=i.n()).done;){var r=n.value;r.fullyNamespacedEvents||(r.fullyNamespacedEvents={});var s,a=o(e);try{for(a.s();!(s=a.n()).done;){var c=s.value;r.fullyNamespacedEvents[c]=t,r.addEventListener(c,t)}}catch(e){a.e(e)}finally{a.f()}}}catch(e){i.e(e)}finally{i.f()}return this}},{key:"off",value:function(e){e=this.wrap(e);var t,n=o(this.elements);try{for(n.s();!(t=n.n()).done;){var i,r=t.value,s=o(e);try{for(s.s();!(i=s.n()).done;){var a=i.value;void 0!==r.fullyNamespacedEvents&&a in r.fullyNamespacedEvents&&r.removeEventListener(a,r.fullyNamespacedEvents[a])}}catch(e){s.e(e)}finally{s.f()}}}catch(e){n.e(e)}finally{n.f()}return this}},{key:"open",value:function(e){e=e||this.elements[0],"undefined"!=typeof jQuery&&e instanceof jQuery&&(e=e.get(0)),this.initialImageIndex=this.elements.indexOf(e),this.initialImageIndex>-1&&this.openImage(e)}},{key:"next",value:function(){this.loadImage(1)}},{key:"prev",value:function(){this.loadImage(-1)}},{key:"getLighboxData",value:function(){return{currentImageIndex:this.currentImageIndex,currentImage:this.currentImage,globalScrollbarWidth:this.globalScrollbarWidth}}},{key:"destroy",value:function(){this.off(["close."+this.eventNamespace,"closed."+this.eventNamespace,"nextImageLoaded."+this.eventNamespace,"prevImageLoaded."+this.eventNamespace,"change."+this.eventNamespace,"nextDone."+this.eventNamespace,"prevDone."+this.eventNamespace,"error."+this.eventNamespace,"changed."+this.eventNamespace,"next."+this.eventNamespace,"prev."+this.eventNamespace,"show."+this.eventNamespace,"shown."+this.eventNamespace]),this.removeEventListener(this.elements,"click."+this.eventNamespace),this.removeEventListener(document,"focusin."+this.eventNamespace),this.removeEventListener(document.body,"contextmenu."+this.eventNamespace),this.removeEventListener(document.body,"keyup."+this.eventNamespace),this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"),"click."+this.eventNamespace),this.removeEventListener(this.domNodes.closeButton,"click."+this.eventNamespace),this.removeEventListener(window,"resize."+this.eventNamespace),this.removeEventListener(window,"hashchange."+this.eventNamespace),this.close(),this.isOpen&&(document.body.removeChild(this.domNodes.wrapper),document.body.removeChild(this.domNodes.overlay)),this.elements=null}},{key:"refresh",value:function(){if(!this.initialSelector)throw"refreshing only works when you initialize using a selector!";var e=this.options,t=this.initialSelector;return this.destroy(),this.constructor(t,e),this}}],n&&c(t.prototype,n),s&&c(t,s),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=d;e.exports.default=u,t.SimpleLightbox=d}));
//# sourceMappingURL=index.7af5fa9c.js.map
