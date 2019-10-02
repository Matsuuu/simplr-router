!function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,r=t=>"function"==typeof t&&i.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},a={},l={},d=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${d}--\x3e`,c=new RegExp(`${d}|${h}`),p="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],r=document.createTreeWalker(e.content,133,null,!1);let n=0,o=-1,a=0;const{strings:l,values:{length:h}}=t;for(;a<h;){const t=r.nextNode();if(null!==t){if(o++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)m(e[t].name,p)&&i++;for(;i-- >0;){const e=l[a],s=g.exec(e)[2],i=s.toLowerCase()+p,r=t.getAttribute(i);t.removeAttribute(i);const n=r.split(c);this.parts.push({type:"attribute",index:o,name:s,strings:n}),a+=n.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(d)>=0){const i=t.parentNode,r=e.split(c),n=r.length-1;for(let e=0;e<n;e++){let s,n=r[e];if(""===n)s=_();else{const t=g.exec(n);null!==t&&m(t[2],p)&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-p.length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++o})}""===r[n]?(i.insertBefore(_(),t),s.push(t)):t.data=r[n],a+=n}}else if(8===t.nodeType)if(t.data===d){const e=t.parentNode;null!==t.previousSibling&&o!==n||(o++,e.insertBefore(_(),t)),n=o,this.parts.push({type:"node",index:o}),null===t.nextSibling?t.data="":(s.push(t),o--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(d,e+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const m=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},f=t=>-1!==t.index,_=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class y{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,l=i.nextNode();for(;o<s.length;)if(r=s[o],f(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(e.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=e.pop(),l=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=` ${d} `;class S{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],r=t.lastIndexOf("\x3c!--");s=(r>-1||s)&&-1===t.indexOf("--\x3e",r+1);const n=g.exec(t);e+=null===n?t+(s?w:h):t.substr(0,n.index)+n[1]+n[2]+p+n[3]+d}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const v=t=>null===t||!("object"==typeof t||"function"==typeof t),b=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new x(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(v(t)||!b(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class x{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||v(t)&&t===this.value||(this.value=t,r(t)||(this.committer.dirty=!0))}commit(){for(;r(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class A{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(_()),this.endNode=t.appendChild(_())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=_()),t.__insert(this.endNode=_())}insertAfterPart(t){t.__insert(this.startNode=_()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}const t=this.__pendingValue;t!==a&&(v(t)?t!==this.value&&this.__commitText(t):t instanceof S?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):b(t)?this.__commitIterable(t):t===l?(this.value=l,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof y&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const r of t)void 0===(s=e[i])&&(s=new A(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(r),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class N{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=a}}class R extends P{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends x{}let E=!1;try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class C{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;r(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=a,t(this)}if(this.__pendingValue===a)return;const t=this.__pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=k(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const V=new class{handleAttributeExpressions(t,e,s,i){const r=e[0];if("."===r){return new R(t,e.slice(1),s).parts}return"@"===r?[new C(t,e.slice(1),i.eventContext)]:"?"===r?[new N(t,e.slice(1),s)]:new P(t,e,s).parts}handleTextExpression(t){return new A(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(t){let e=F.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},F.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(d);return void 0===(s=e.keyString.get(i))&&(s=new u(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const F=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const M=(t,...e)=>new S(t,e,"html",V),U=133;function $(t,e){const{element:{content:s},parts:i}=t,r=document.createTreeWalker(s,U,null,!1);let n=j(i),o=i[n],a=-1,l=0;const d=[];let h=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(d.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=i[n=j(i,n)]}d.forEach(t=>t.parentNode.removeChild(t))}const L=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,U,null,!1);for(;s.nextNode();)e++;return e},j=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(f(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const q=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const W=t=>e=>{const s=q(e.type,t);let i=F.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},F.set(s,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const n=e.strings.join(d);if(void 0===(r=i.keyString.get(n))){const s=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(s,t),r=new u(e,s),i.keyString.set(n,r)}return i.stringsArray.set(e.strings,r),r},H=["html","svg"],B=new Set,D=(t,e,s)=>{B.add(t);const i=s?s.element:document.createElement("template"),r=e.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,t);const o=document.createElement("style");for(let t=0;t<n;t++){const e=r[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{H.forEach(e=>{const s=F.get(q(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),$(t,s)})})})(t);const a=i.content;s?function(t,e,s=null){const{element:{content:i},parts:r}=t;if(null==s)return void i.appendChild(e);const n=document.createTreeWalker(i,U,null,!1);let o=j(r),a=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===s&&(a=L(e),s.parentNode.insertBefore(e,s));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=j(r,o);return}o=j(r,o)}}}(s,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),$(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const J={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},G=(t,e)=>e!==t&&(e==e||t==t),Y={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:G},K=Promise.resolve(!0),Q=1,X=4,Z=8,tt=16,et=32,st="finalized";class it extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=K,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Y){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(st)||t.finalize(),this[st]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=G){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||J,r="function"==typeof i?i:i.fromAttribute;return r?r(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||J.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|et,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=Y){const i=this.constructor,r=i._attributeNameForProperty(t,s);if(void 0!==r){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Z,null==t?this.removeAttribute(r):this.setAttribute(r,t),this._updateState=this._updateState&~Z}}_attributeToProperty(t,e){if(this._updateState&Z)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||Y;this._updateState=this._updateState|tt,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~tt}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,r=i._classProperties.get(t)||Y;i._valueHasChanged(this[t],e,r.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==r.reflect||this._updateState&tt||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,r))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=this._updateState|X;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&et}get _hasRequestedUpdate(){return this._updateState&X}get hasUpdated(){return this._updateState&Q}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{(t=this.shouldUpdate(e))&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(this._updateState&Q||(this._updateState=this._updateState|Q,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~X}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}it[st]=!0;const rt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const nt=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,r=e.length;i<r;i++){const r=e[i];Array.isArray(r)?t(r,s):s.push(r)}return s}(t);class ot extends it{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){nt(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?rt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof S&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}ot.finalized=!0,ot.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=I.has(e),n=z&&11===e.nodeType&&!!e.host,a=n&&!B.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=I.get(e);void 0===i&&(o(e,e.firstChild),I.set(e,i=new A(Object.assign({templateFactory:O},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:W(i)},s)),a){const t=I.get(l);I.delete(l);const s=t.value instanceof y?t.value.template:void 0;D(i,l,s),o(e,e.firstChild),e.appendChild(l),I.set(e,t)}!r&&n&&window.ShadyCSS.styleElement(e.host)};const at={TOP:"from-top",RIGHT:"from-right",BOTTOM:"from-bottom",LEFT:"from-left"};class lt{constructor(t){const e=this._getStyleSheet();this._addWrapperStyles(e),this._addWrapperAnimations(e,t),this._addAnimationSpeed(e,t),document.adoptedStyleSheets=[e]}static addStyles(t){new lt(t)}_getStyleSheet(){if(document.styleSheets.length<1){let t=document.createElement("style");document.head.appendChild(t)}return console.log(document.styleSheets),document.styleSheets[document.styleSheets.length-1]}_addWrapperStyles(t){t.insertRule(".simplr-router-view-wrapper {display: block;width: 100%;height: 100%;padding: 0;margin: 0;position: absolute;background:#FFF;top: 0;left:0;")}_addWrapperAnimations(t,e){let s="";switch(e.transitionDirection){case at.RIGHT:s=`left: ${window.outerWidth}px`;break;case at.BOTTOM:s=`top: ${window.outerHeight}px;`;break;case at.LEFT:s=`left: -${window.outerWidth}px`;break;case at.TOP:s=`top: -${window.outerHeight}px;`}t.insertRule(`.simplr-router-view-wrapper.${e.transitionDirection} {`+`${s}`+"}")}_addAnimationSpeed(t,e){let s=e.transitionSpeed;t.insertRule(`.simplr-router-view-wrapper { transition: ease-in ${s}s 0s;`)}}const dt={SLOW:1.5,MEDIUM:1,FAST:.5,VERYFAST:.2};class ht{constructor(t,e,s){this.rootView=t,this.activeView=t,this.viewStack=[{view:t.nodeName.toLowerCase(),wrapper:t,path:"/"}],this.body=document.querySelector("body"),this.transitionSpeed=dt.FAST,this.transitionDirection=at.RIGHT,this.useStyles=void 0===s||s,this.transitionInProgress=!1,this.notFoundAction=null,this.forbiddenAction=null,this._loadRoutes(e),this._addNewElementObserver(),this._overrideAnchorActions(document.querySelector("body")),this._overrideReturnAction(),this._createStyles(),this._handleUrlPathing(),console.info("Router initialized")}static init(t,e,s){console.info("Initializing Simplr Router..."),this.Router=new ht(t,e,s)}_addNewElementObserver(){new MutationObserver(t=>{t.map(t=>{null!=t.target&&Array.from(t.target.querySelectorAll("a")).map(e=>{e.dataset.hasOwnProperty("simplrRoute")&&this._overrideAnchorActions(t.target)})})}).observe(document.querySelector("body"),{attributes:!0,childList:!0,subtree:!0})}_handleUrlPathing(){let t=window.location.pathname;"/"!==t&&(window.history.replaceState({},"","/"),window.history.pushState({},"",t),this._transitionToView(this._handleLeadingSlash(t)),document.querySelector("body").click())}_overrideAnchorActions(t){setTimeout(()=>{Array.from(t.querySelectorAll("*")).map(t=>{"A"!==t.nodeName?(t.querySelectorAll("a").forEach(t=>{this._overrideAnchor(t)}),t.shadowRoot&&this._overrideAnchorActions(t.shadowRoot)):this._overrideAnchor(t)})},0)}_overrideAnchor(t){t.dataset.hasOwnProperty("simplrRoute")&&(t.addEventListener("click",e=>{if(e.preventDefault(),this.transitionInProgress)return;let s=this._handleLeadingSlash(t.getAttribute("href"));this._transitionToView(s)&&window.history.pushState(null,"",s)}),t.removeAttribute("data-simplr-route"),t.setAttribute("data-simplr-route-initialized",""))}_overrideReturnAction(){window.history.pushState({},""),window.addEventListener("popstate",()=>{this._navigationPressWasBackwards()?this._handleBackwardsNavigation():this._handleUrlPathing()})}_handleBackwardsNavigation(){if(this.viewStack.length>1){let t=this.viewStack.pop();t.wrapper.classList.add(this.transitionDirection),setTimeout(()=>{t.wrapper.remove()},1e3*this.transitionSpeed)}else window.history.back()}_navigationPressWasBackwards(){return this.viewStack.length>1&&window.location.pathname===this.viewStack[this.viewStack.length-2].path||1===this.viewStack.length&&window.location.pathname===this.viewStack[0].path}_transitionToView(t){let e=this._findViewForRoute(t);if(!e&&null==(e=this._handleNotFoundAction(e)))return!1;if(e.guard&&"function"==typeof e.guard&&!e.guard.call()&&null==(e=this._handleForbiddenAction(e)))return!1;this.transitionInProgress=!0;let s=this._navigateToView(e);return this._updateActiveView(e,s),setTimeout(()=>{this.transitionInProgress=!1},1e3*this.transitionSpeed),!0}_handleNotFoundAction(t){return this.notFoundAction?(this.notFoundAction.call(),null):null==(t=this._getNotFoundRoute())?(console.error("Page not found, and a not-found route has not been set."),null):t}_handleForbiddenAction(t){return this.forbiddenAction?(this.forbiddenAction.call(),null):null==(t=this._getForbiddenRoute())?(console.error("Access to page forbidden, and a forbidden route has not been set."),null):t}_getNotFoundRoute(){let t=null;for(let e=0;e<this.Routes.length;e++){let s=this.Routes[e];if("not-found"===s.path||"/not-found"===s.path){t=s;break}}return t}_getForbiddenRoute(){let t=null;for(let e=0;e<this.Routes.length;e++){let s=this.Routes[e];if("forbidden"===s.path||"/forbidden"===s.path){t=s;break}}return t}_navigateToView(t){let e=document.createElement(t.view);if(t.params)for(let s in t.params)t.params.hasOwnProperty(s)&&e.setAttribute(s,t.params[s]);let s=document.createElement("div");return s.classList.add("simplr-router-view-wrapper"),s.classList.add(this.transitionDirection),s.appendChild(e),this.body.appendChild(s),setTimeout(()=>{s.classList.remove(this.transitionDirection)},10),s}_updateActiveView(t,e){this.activeView=e.querySelector(t.view),this.viewStack=[...this.viewStack,{view:t.view,wrapper:e,path:t.path}]}_findViewForRoute(t){let e=null;for(let s=0;s<this.Routes.length;s++){let i=this.Routes[s];i.path=this._handleLeadingSlash(i.path),i.path===t&&((e=i).path=i.path,e.guard=i.guard)}if(null==e){let s=this._extractUrlParameters(t);for(let i=0;i<this.Routes.length;i++){let r=this.Routes[i];if(r.path=this._handleLeadingSlash(r.path),r.path.includes(":")&&null!=(e=this._parseParameters(r,t,s)))break}}return e}_extractUrlParameters(t){let e=t.match(/\/\d+/g);return(null!=e?[...e]:[]).map(t=>t.substring(1))}_extractRouteParameters(t){let e=t.match(/:\w+/g);return null!=e?[...e]:[]}_parseParameters(t,e,s){let i,r=this._extractRouteParameters(t.path);if(s.length!==r.length)return;let n=this._replaceRouteParamsWithHrefParams(t.path,s,r);if(n===e){let e=this._mapParameters(s,r);i={path:n,view:t.view,params:e,guard:t.guard}}return i}_replaceRouteParamsWithHrefParams(t,e,s){for(let i=0;i<e.length;i++)t=t.replace(s[i],e[i]);return t}_mapParameters(t,e){let s={};for(let i=0;i<t.length;i++)s[e[i].substring(1)]=t[i];return s}_loadRoutes(t){t?(this.Routes=t,console.log(`${this.Routes.length} routes loaded`)):console.error("No routes passed during initialization. \n\nPlease pass routes as the second parameter when initializing SimplrRouter.")}_createStyles(){this.useStyles&&lt.addStyles(this)}_handleLeadingSlash(t){return"/"!==t.substring(0,1)&&(t="/"+t),t}static setTransitionSpeed(t){"number"==typeof t?(this.Router.transitionSpeed=t,this.Router._createStyles()):console.error(`Attempted to set transition speed to ${t}, but ${t} is not a viable speed parameter.`)}static setTransitionDirection(t){Object.values(at).includes(t)?(this.Router.transitionDirection=t,this.Router._createStyles()):console.error(`Attempted to set transition direction to ${t}, but ${t} is not a preset direction.\nPlease use a preset direction spesified in TransitionDirection-object.`)}static setForbiddenAction(t){this.Router.forbiddenAction=t}static setNotFoundAction(t){this.Router.notFoundAction=t}}class ct extends ot{static get properties(){return{route:{type:String},title:{type:String}}}constructor(){super()}render(){return M`
            <a href="${this.route}" data-simplr-route>${this.title}</a>
        `}createRenderRoot(){return this}}customElements.get("simplr-router-link")||customElements.define("simplr-router-link",ct);class pt extends ot{static get properties(){return{lang:{type:String}}}constructor(){super()}render(){return M`
            <p>Foo</p>
            <simplr-router-link route="foo/12" title="Foo 12"></simplr-router-link>
        `}createRenderRoot(){return this}}customElements.get("simplr-foo")||customElements.define("simplr-foo",pt);class ut extends ot{static get properties(){return{lang:{type:String}}}constructor(){super()}render(){return M`
            <p>Frontpage</p>
        `}createRenderRoot(){return this}}customElements.get("simplr-frontpage")||customElements.define("simplr-frontpage",ut);class mt extends ot{static get properties(){return{lang:{type:String},fooId:{type:String}}}constructor(){super(),this.fooId=""}render(){return M`
            <p>Foo with id: ${this.fooId}</p>
            <a href="foo/${this.fooId}/info" data-simplr-route>foo ${this.fooId} info</a>
        `}createRenderRoot(){return this}}customElements.get("simplr-foo-with-id")||customElements.define("simplr-foo-with-id",mt);class ft extends ot{static get properties(){return{lang:{type:String},fooId:{type:String}}}constructor(){super(),this.fooId=""}render(){return M`
            <p>Foo with id: ${this.fooId} INFO</p>
        `}createRenderRoot(){return this}}customElements.get("simplr-foo-with-id-info")||customElements.define("simplr-foo-with-id-info",ft);class _t extends ot{static get properties(){return{lang:{type:String},fooId:{type:String},barId:{type:String}}}constructor(){super(),this.fooId="",this.barId=""}render(){return M`
            <p>Foo with id: ${this.fooId}</p>
            <p>Bar with id: ${this.barId}</p>
        `}createRenderRoot(){return this}}customElements.get("simplr-foo-bar-with-id")||customElements.define("simplr-foo-bar-with-id",_t);class gt extends ot{static get properties(){return{lang:{type:String}}}constructor(){super()}render(){return M`
            <p><b>404</b> Page not found</p>
        `}createRenderRoot(){return this}}customElements.get("simplr-page-not-found")||customElements.define("simplr-page-not-found",gt);var yt=[{path:"",view:"simplr-frontpage"},{path:"foo",view:"simplr-foo"},{path:"foo/:fooId",view:"simplr-foo-with-id",guard:class{static isAuthenticated(){return!1}}.isAuthenticated},{path:"foo/:fooId/info",view:"simplr-foo-with-id-info"},{path:"baz/:bazId",view:"simplr-baz-with-id"},{path:"foo/:fooId/bar/:barId",view:"simplr-foo-bar-with-id"},{path:"foo/:fooId/bar/:barId/info",view:"simplr-foo-bar-with-id"},{path:"not-found",view:"simplr-page-not-found"},{path:"forbidden",view:"simplr-page-not-found"}];customElements.define("simplr-router-index",class extends ot{static get properties(){return{}}constructor(){super()}firstUpdated(t){ht.init(this,yt)}createRenderRoot(){return this}render(){return M`
            <p>Hello world</p>
            <a href="foo" data-simplr-route>foo</a>
            <simplr-router-link route="foo" title="Foo"></simplr-router-link>
            <a href="foo/12" data-simplr-route>foo 12</a>
            <a href="foo/12/info" data-simplr-route>foo 12 info</a>
            <a href="baz" data-simplr-route>baz</a>
            <a href="https://www.google.com/webhp?ie=UTF-8&rct=j">Google</a>
        `}})}]);