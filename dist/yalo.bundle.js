/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

// UNUSED EXPORTS: MotionCarousel

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),n=new WeakMap;class s{constructor(t,n,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let e=this.o;const s=this.t;if(css_tag_t&&void 0===e){const t=void 0!==s&&1===s.length;t&&(e=n.get(s)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(s,e))}return e}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",void 0,e),r=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s(o,t,e)},i=(e,n)=>{css_tag_t?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n)}))},S=css_tag_t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window.trustedTypes,reactive_element_r=reactive_element_e?reactive_element_e.emptyScript:"",h=window.reactiveElementPolyfillSupport,reactive_element_o={toAttribute(t,i){switch(i){case Boolean:t=t?reactive_element_r:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},reactive_element_n=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_o,reflect:!1,hasChanged:reactive_element_n};class a extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S(i))}else void 0!==i&&s.push(S(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e,r;const h=this.constructor._$Ep(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:reactive_element_o.toAttribute)(i,s.type);this._$El=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$El=null}}_$AK(t,i){var s,e;const r=this.constructor,h=r._$Ev.get(t);if(void 0!==h&&this._$El!==h){const t=r.getPropertyOptions(h),n=t.converter,l=null!==(e=null!==(s=null==n?void 0:n.fromAttribute)&&void 0!==s?s:"function"==typeof n?n:null)&&void 0!==e?e:reactive_element_o.fromAttribute;this._$El=h,this[h]=l(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||reactive_element_n)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}a.finalized=!0,a.elementProperties=new Map,a.elementStyles=[],a.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:a}),(null!==(reactive_element_s=globalThis.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:globalThis.reactiveElementVersions=[]).push("1.3.3");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=globalThis.trustedTypes,lit_html_s=lit_html_i?lit_html_i.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_e=`lit$${(Math.random()+"").slice(9)}$`,lit_html_o="?"+lit_html_e,lit_html_n=`<${lit_html_o}>`,lit_html_l=document,lit_html_h=(t="")=>lit_html_l.createComment(t),lit_html_r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,lit_html_a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),y=p(2),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(lit_html_h(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l},A=lit_html_l.createTreeWalker(lit_html_l,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=lit_html_a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===lit_html_a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+lit_html_n:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+lit_html_e+y):s+lit_html_e+(-2===p?(l.push(void 0),i):y)}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==lit_html_s?lit_html_s.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(lit_html_e)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(lit_html_e),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:lit_html_S})}else c.push({type:6,index:r})}for(const i of t)l.removeAttribute(i)}if(g.test(l.tagName)){const t=l.textContent.split(lit_html_e),s=t.length-1;if(s>0){l.textContent=lit_html_i?lit_html_i.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],lit_html_h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],lit_html_h())}}}else if(8===l.nodeType)if(l.data===lit_html_o)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=l.data.indexOf(lit_html_e,t+1));)c.push({type:7,index:r}),t+=lit_html_e.length-1}r++}}static createElement(t,i){const s=lit_html_l.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=lit_html_r(i)?void 0:i._$litDirective$;return(null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_l).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r]}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),lit_html_r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t)}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==w&&lit_html_r(this._$AH)?this._$AA.nextSibling.data=t:this.k(lit_html_l.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(lit_html_h()),this.M(lit_html_h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class lit_html_S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!lit_html_r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!lit_html_r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.C(t)}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends lit_html_S{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===w?void 0:t}}const k=lit_html_i?lit_html_i.emptyScript:"";class H extends lit_html_S{constructor(){super(...arguments),this.type=4}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends lit_html_S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const R={L:"$lit$",P:lit_html_e,V:lit_html_o,I:1,N:C,R:V,j:u,D:P,H:N,F:lit_html_S,O:H,W:I,B:M,Z:L},z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(lit_html_t=globalThis.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:globalThis.litHtmlVersions=[]).push("2.2.6");
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends a{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=x(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return b}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.2.1");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/lit/html.js

//# sourceMappingURL=html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directive.js

//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directive-helpers.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:directive_helpers_i}=R,directive_helpers_t=o=>null===o||"object"!=typeof o&&"function"!=typeof o,directive_helpers_n={HTML:1,SVG:2},directive_helpers_v=(o,i)=>{var t,n;return void 0===i?void 0!==(null===(t=o)||void 0===t?void 0:t._$litType$):(null===(n=o)||void 0===n?void 0:n._$litType$)===i},directive_helpers_l=o=>{var i;return void 0!==(null===(i=o)||void 0===i?void 0:i._$litDirective$)},directive_helpers_d=o=>{var i;return null===(i=o)||void 0===i?void 0:i._$litDirective$},directive_helpers_r=o=>void 0===o.strings,directive_helpers_e=()=>document.createComment(""),directive_helpers_u=(o,t,n)=>{var v;const l=o._$AA.parentNode,d=void 0===t?o._$AB:t._$AA;if(void 0===n){const t=l.insertBefore(directive_helpers_e(),d),v=l.insertBefore(directive_helpers_e(),d);n=new directive_helpers_i(t,v,o,o.options)}else{const i=n._$AB.nextSibling,t=n._$AM,r=t!==o;if(r){let i;null===(v=n._$AQ)||void 0===v||v.call(n,o),n._$AM=o,void 0!==n._$AP&&(i=o._$AU)!==t._$AU&&n._$AP(i)}if(i!==d||r){let o=n._$AA;for(;o!==i;){const i=o.nextSibling;l.insertBefore(o,d),o=i}}}return n},directive_helpers_c=(o,i,t=o)=>(o._$AI(i,t),o),directive_helpers_f={},directive_helpers_s=(o,i=directive_helpers_f)=>o._$AH=i,directive_helpers_a=o=>o._$AH,directive_helpers_m=o=>{var i;null===(i=o._$AP)||void 0===i||i.call(o,!1,!0);let t=o._$AA;const n=o._$AB.nextSibling;for(;t!==n;){const o=t.nextSibling;t.remove(),t=o}},directive_helpers_p=o=>{o._$AR()};
//# sourceMappingURL=directive-helpers.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/async-directive.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const async_directive_e=(i,t)=>{var s,o;const n=i._$AN;if(void 0===n)return!1;for(const i of n)null===(o=(s=i)._$AO)||void 0===o||o.call(s,t,!1),async_directive_e(i,t);return!0},async_directive_o=i=>{let t,s;do{if(void 0===(t=i._$AM))break;s=t._$AN,s.delete(i),i=t}while(0===(null==s?void 0:s.size))},async_directive_n=i=>{for(let t;t=i._$AM;i=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(i))break;s.add(i),async_directive_l(t)}};function async_directive_r(i){void 0!==this._$AN?(async_directive_o(this),this._$AM=i,async_directive_n(this)):this._$AM=i}function async_directive_h(i,t=!1,s=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)async_directive_e(n[i],!1),async_directive_o(n[i]);else null!=n&&(async_directive_e(n,!1),async_directive_o(n));else async_directive_e(this,i)}const async_directive_l=i=>{var t,e,o,n;i.type==directive_t.CHILD&&(null!==(t=(o=i)._$AP)&&void 0!==t||(o._$AP=async_directive_h),null!==(e=(n=i)._$AQ)&&void 0!==e||(n._$AQ=async_directive_r))};class async_directive_d extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,s){super._$AT(i,t,s),async_directive_n(this),this.isConnected=i._$AU}_$AO(i,t=!0){var s,n;i!==this.isConnected&&(this.isConnected=i,i?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(async_directive_e(this,i),async_directive_o(this))}setValue(t){if(directive_helpers_r(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}
//# sourceMappingURL=async-directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit/async-directive.js

//# sourceMappingURL=async-directive.js.map

;// CONCATENATED MODULE: ./node_modules/@lit-labs/motion/animate-controller.js
const animate_controller_i=new WeakMap;class animate_controller_t{constructor(t,s){this.startPaused=!1,this.disabled=!1,this.clients=new Set,this.pendingComplete=!1,this.host=t,this.defaultOptions=s.defaultOptions||{},this.startPaused=!!s.startPaused,this.disabled=!!s.disabled,this.onComplete=s.onComplete,animate_controller_i.set(this.host,this)}async add(i){var t,s;this.clients.add(i),this.startPaused&&(null===(t=i.webAnimation)||void 0===t||t.pause()),this.pendingComplete=!0,await i.finished,this.pendingComplete&&!this.isAnimating&&(this.pendingComplete=!1,null===(s=this.onComplete)||void 0===s||s.call(this))}remove(i){this.clients.delete(i)}pause(){this.clients.forEach((i=>{var t;return null===(t=i.webAnimation)||void 0===t?void 0:t.pause()}))}play(){this.clients.forEach((i=>{var t;return null===(t=i.webAnimation)||void 0===t?void 0:t.play()}))}cancel(){this.clients.forEach((i=>{var t;return null===(t=i.webAnimation)||void 0===t?void 0:t.cancel()})),this.clients.clear()}finish(){this.clients.forEach((i=>{var t;return null===(t=i.webAnimation)||void 0===t?void 0:t.finish()})),this.clients.clear()}togglePlay(){this.isPlaying?this.pause():this.play()}get isAnimating(){return this.clients.size>0}get isPlaying(){return Array.from(this.clients).some((i=>{var t;return"running"===(null===(t=i.webAnimation)||void 0===t?void 0:t.playState)}))}async finished(){await Promise.all(Array.from(this.clients).map((i=>i.finished)))}}
//# sourceMappingURL=animate-controller.js.map

;// CONCATENATED MODULE: ./node_modules/@lit-labs/motion/animate.js
let animate_h=0;const animate_r=new Map,animate_n=new WeakSet,animate_a=()=>new Promise((t=>requestAnimationFrame(t))),animate_l=[{transform:"translateY(100%) scale(0)",opacity:0}],animate_c=[{transform:"translateY(-100%) scale(0)",opacity:0}],animate_d=[{transform:"translateX(-100%) scale(0)",opacity:0}],animate_u=[{transform:"translateX(100%) scale(0)",opacity:0}],animate_v=[{}],animate_f=[{opacity:0}],animate_m=(/* unused pure expression or super */ null && (animate_f)),animate_p=[{opacity:0},{opacity:1}],animate_y=[{opacity:0},{opacity:.25,offset:.75},{opacity:1}],animate_g=(t,i)=>{const s=t-i;return 0===s?void 0:s},animate_w=(t,i)=>{const s=t/i;return 1===s?void 0:s},animate_A={left:(t,i)=>{const s=animate_g(t,i);return{value:s,transform:s&&`translateX(${s}px)`}},top:(t,i)=>{const s=animate_g(t,i);return{value:s,transform:s&&`translateY(${s}px)`}},width:(t,i)=>{const s=animate_w(t,i);return{value:s,transform:s&&`scaleX(${s})`}},height:(t,i)=>{const s=animate_w(t,i);return{value:s,transform:s&&`scaleY(${s})`}}},animate_b={duration:333,easing:"ease-in-out"},j=["left","top","width","height","opacity","color","background"],animate_x=new WeakMap;class animate_S extends async_directive_d{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===directive_t.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;null===(t=this.resolveFinished)||void 0===t||t.call(this),this.finished=new Promise((t=>{this.h=t}))}async resolveFinished(){var t;null===(t=this.h)||void 0===t||t.call(this),this.h=void 0}render(i){return w}getController(){return animate_controller_i.get(this.l)}isDisabled(){var t;return this.options.disabled||(null===(t=this.getController())||void 0===t?void 0:t.disabled)}update(t,[i]){var s;const e=void 0===this.l;return e&&(this.l=null===(s=t.options)||void 0===s?void 0:s.host,this.l.addController(this),this.element=t.element,animate_x.set(this.element,this)),this.optionsOrCallback=i,(e||"function"!=typeof i)&&this.u(i),this.render(i)}u(t){var i,s;t=null!=t?t:{};const e=this.getController();void 0!==e&&((t={...e.defaultOptions,...t}).keyframeOptions={...e.defaultOptions.keyframeOptions,...t.keyframeOptions}),null!==(i=(s=t).properties)&&void 0!==i||(s.properties=j),this.options=t}v(){const t={},i=this.element.getBoundingClientRect(),s=getComputedStyle(this.element);return this.options.properties.forEach((e=>{var o;const h=null!==(o=i[e])&&void 0!==o?o:animate_A[e]?void 0:s[e],r=Number(h);t[e]=isNaN(r)?h+"":r})),t}p(){let t,i=!0;return this.options.guard&&(t=this.options.guard(),i=((t,i)=>{if(Array.isArray(t)){if(Array.isArray(i)&&i.length===t.length&&t.every(((t,s)=>t===i[s])))return!1}else if(i===t)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&i&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;"function"==typeof this.optionsOrCallback&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=null!==(t=this.t)&&void 0!==t?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await animate_a;const i=this.A(),s=this._(this.options.keyframeOptions,i),e=this.v();if(void 0!==this.g){const{from:s,to:o}=this.j(this.g,e,i);this.log("measured",[this.g,e,s,o]),t=this.calculateKeyframes(s,o)}else{const s=animate_r.get(this.options.inId);if(s){animate_r.delete(this.options.inId);const{from:o,to:n}=this.j(s,e,i);t=this.calculateKeyframes(o,n),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,animate_h++,t.forEach((t=>t.zIndex=animate_h))}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,s)}resetStyles(){var t;void 0!==this.S&&(this.element.setAttribute("style",null!==(t=this.S)&&void 0!==t?t:""),this.S=void 0)}commitStyles(){var t,i;this.S=this.element.getAttribute("style"),null===(t=this.webAnimation)||void 0===t||t.commitStyles(),null===(i=this.webAnimation)||void 0===i||i.cancel()}reconnected(){}async disconnected(){var t;if(!this.o)return;if(void 0!==this.options.id&&animate_r.set(this.options.id,this.g),void 0===this.options.out)return;if(this.prepare(),await animate_a(),null===(t=this.t)||void 0===t?void 0:t.isConnected){const t=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,t),this.options.stabilizeOut){const t=this.v();this.log("stabilizing out");const i=this.g.left-t.left,s=this.g.top-t.top;!("static"===getComputedStyle(this.element).position)||0===i&&0===s||(this.element.style.position="relative"),0!==i&&(this.element.style.left=i+"px"),0!==s&&(this.element.style.top=s+"px")}}const i=this._(this.options.keyframeOptions);await this.animate(this.options.out,i),this.element.remove()}prepare(){this.createFinished()}start(){var t,i;null===(i=(t=this.options).onStart)||void 0===i||i.call(t,this)}didFinish(t){var i,s;t&&(null===(s=(i=this.options).onComplete)||void 0===s||s.call(i,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}A(){const t=[];for(let i=this.element.parentNode;i;i=null==i?void 0:i.parentNode){const s=animate_x.get(i);s&&!s.isDisabled()&&s&&t.push(s)}return t}get isHostRendered(){const t=animate_n.has(this.l);return t||this.l.updateComplete.then((()=>{animate_n.add(this.l)})),t}_(t,i=this.A()){const s={...animate_b};return i.forEach((t=>Object.assign(s,t.options.keyframeOptions))),Object.assign(s,t),s}j(t,i,s){t={...t},i={...i};const e=s.map((t=>t.animatingProperties)).filter((t=>void 0!==t));let o=1,h=1;return void 0!==e&&(e.forEach((t=>{t.width&&(o/=t.width),t.height&&(h/=t.height)})),void 0!==t.left&&void 0!==i.left&&(t.left=o*t.left,i.left=o*i.left),void 0!==t.top&&void 0!==i.top&&(t.top=h*t.top,i.top=h*i.top)),{from:t,to:i}}calculateKeyframes(t,i,s=!1){var e;const o={},h={};let r=!1;const n={};for(const s in i){const a=t[s],l=i[s];if(s in animate_A){const t=animate_A[s];if(void 0===a||void 0===l)continue;const i=t(a,l);void 0!==i.transform&&(n[s]=i.value,r=!0,o.transform=`${null!==(e=o.transform)&&void 0!==e?e:""} ${i.transform}`)}else a!==l&&void 0!==a&&void 0!==l&&(r=!0,o[s]=a,h[s]=l)}return o.transformOrigin=h.transformOrigin=s?"center center":"top left",this.animatingProperties=n,r?[o,h]:void 0}async animate(t,i=this.options.keyframeOptions){this.start(),this.frames=t;let s=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),void 0!==t)){this.log("animate",[t,i]),s=!0,this.webAnimation=this.element.animate(t,i);const e=this.getController();null==e||e.add(this);try{await this.webAnimation.finished}catch(t){}null==e||e.remove(this)}return this.didFinish(s),s}isAnimating(){var t,i;return"running"===(null===(t=this.webAnimation)||void 0===t?void 0:t.playState)||(null===(i=this.webAnimation)||void 0===i?void 0:i.pending)}log(t,i){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,i)}}const animate_$=directive_e(animate_S);
//# sourceMappingURL=animate.js.map

;// CONCATENATED MODULE: ./node_modules/@lit-labs/motion/position.js
const position_r=["top","right","bottom","left"];class position_e extends async_directive_d{constructor(t){if(super(t),t.type!==directive_t.ELEMENT)throw Error("The `position` directive must be used in attribute position.")}render(i,o){return w}update(t,[i,o]){var s;return void 0===this.l&&(this.l=null===(s=t.options)||void 0===s?void 0:s.host,this.l.addController(this)),this.$=t.element,this.k=i,this.F=null!=o?o:["left","top","width","height"],this.render(i,o)}hostUpdated(){this.O()}O(){var t,i;const o="function"==typeof this.k?this.k():null===(t=this.k)||void 0===t?void 0:t.value,s=o.offsetParent;if(void 0===o||!s)return;const e=o.getBoundingClientRect(),h=s.getBoundingClientRect();null===(i=this.F)||void 0===i||i.forEach((t=>{const i=position_r.includes(t)?e[t]-h[t]:e[t];this.$.style[t]=i+"px"}))}}const position_h=directive_e(position_e);
//# sourceMappingURL=position.js.map

;// CONCATENATED MODULE: ./node_modules/@lit-labs/motion/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/style-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const style_map_i=directive_e(class extends directive_i{constructor(t){var e;if(super(t),t.type!==directive_t.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ct){this.ct=new Set;for(const t in r)this.ct.add(t);return this.render(r)}this.ct.forEach((t=>{null==r[t]&&(this.ct.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in r){const e=r[t];null!=e&&(this.ct.add(t),t.includes("-")?s.setProperty(t,e):s[t]=e)}return b}});
//# sourceMappingURL=style-map.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/style-map.js

//# sourceMappingURL=style-map.js.map

;// CONCATENATED MODULE: ./js/styles.js
/* playground-fold */


const styles = r`
  :host {
    display: inline-block;
    overflow: hidden;
    position: relative;
    /* Defaults */
    width: 200px;
    height: 200px;
    border-radius: 4px;
    background: gainsboro;
    cursor: pointer;
  }

  .fit {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .selected {
    top: -100%;
  }

  ::slotted(*) {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  .bar {
    position: absolute;
    bottom: 8px;
    width: calc(100% - 16px);
    left: 8px;
    height: 8px;
    background: rgba(200, 200, 200, 0.5);
    border-radius: 8px;
    pointer-events: none;
  }

  .indicator {
    position: relative;
    /* display: inline-block; */
    height: 100%;
    width: 8px;
    border-radius: 8px;
    background: #eee;
  }`;
/* playground-fold-end */

;// CONCATENATED MODULE: ./js/motion-carousel.js
/* playground-fold */





class MotionCarousel extends lit_element_s {
  static properties = {
    selected: { type: Number },
  };
  static styles = styles;

  constructor() {
    super();
    this.selected = 0;
  }

  get selectedSlot() {
    return (this.__selectedSlot ??=
      this.renderRoot?.querySelector('slot[name="selected"]') ?? null);
  }

  get previousSlot() {
    return (this.__previousSlot ??=
      this.renderRoot?.querySelector('slot[name="previous"]') ?? null);
  }

  left = 0;
  selectedInternal = 0;

  get maxSelected() {
    return this.childElementCount - 1;
  }

  hasValidSelected() {
    return this.selected >= 0 && this.selected <= this.maxSelected;
  }

  render() {
    const p = this.selectedInternal;
    const s = (this.selectedInternal = this.hasValidSelected()
      ? this.selected
      : this.selectedInternal);
    const shouldMove = this.hasUpdated && s !== p;
    const atStart = p === 0;
    const toStart = s === 0;
    const atEnd = p === this.maxSelected;
    const toEnd = s == this.maxSelected;
    const shouldAdvance =
      shouldMove && (atEnd ? toStart : atStart ? !toEnd : s > p);
    const delta = (shouldMove ? Number(shouldAdvance) || -1 : 0) * 100;
    this.left -= delta;
    const animateLeft = `${this.left}%`;
    const selectedLeft = `${-this.left}%`;
    const previousLeft = `${-this.left - delta}%`;
    const w = 100 / this.childElementCount;
    const indicatorLeft = `${w * s}%`;
    const indicatorWidth = `${w}%`;
    return $`
      <div
        class="fit"
        ${animate_$()}
        @click=${this.clickHandler}
        style=${style_map_i({ left: animateLeft })}
      >
        <div
          class="fit"
          style=${shouldMove ? style_map_i({ left: previousLeft }) : b}
        >
          <slot name="previous"></slot>
        </div>
        <div
          class="fit selected"
          style=${shouldMove ? style_map_i({ left: selectedLeft }) : b}
        >
          <slot name="selected"></slot>
        </div>
      </div>
      <div class="bar">
        <div
          class="indicator"
          ${animate_$()}
          style=${style_map_i({
            left: indicatorLeft,
            width: indicatorWidth,
          })}
        ></div>
      </div>
    `;
  }

  previous = -1;
  async updated(changedProperties) {
    if (
      (changedProperties.has("selected") || this.previous === -1) &&
      this.hasValidSelected()
    ) {
      this.updateSlots();
      this.previous = this.selected;
    }
  }

  updateSlots() {
    // unset old slot state
    this.selectedSlot.assignedElements()[0]?.removeAttribute("slot");
    this.previousSlot.assignedElements()[0]?.removeAttribute("slot");
    // set slots
    this.children[this.previous]?.setAttribute("slot", "previous");
    this.children[this.selected]?.setAttribute("slot", "selected");
  }

  clickHandler(e) {
    const i = this.selected + (Number(!e.shiftKey) || -1);
    this.selected = i > this.maxSelected ? 0 : i < 0 ? this.maxSelected : i;
    const change = new CustomEvent("change", {
      detail: this.selected,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(change);
  }
}
customElements.define("motion-carousel", MotionCarousel);
/* playground-fold-end */

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
// extracted by mini-css-extract-plugin

})();

/******/ })()
;