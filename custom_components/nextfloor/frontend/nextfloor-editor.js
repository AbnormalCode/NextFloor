/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var M={ca:"6e08c894e522",cs:"6f8031965f91",da:"0fe66a82bf2a",es:"b20874014798",fi:"9a17bc084f56",fr:"2fdd3059e5ff",hu:"27ba348531dc",it:"82db78ed4e83",nb:"c5ea24fb9ef6",nl:"c8995700d6b4",pl:"5d4103759db7",pt:"70124c5b1ac6",ro:"e3cb5f449f0f",sk:"320611594db0",sl:"8071691ceda3",sv:"905cd49b8f0a",tr:"7c83ce1c3372",zh:"5012cca4201d"};var zo=globalThis,Po=zo.ShadowRoot&&(zo.ShadyCSS===void 0||zo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ks=Symbol(),yc=new WeakMap,pr=class{constructor(e,n,r){if(this._$cssResult$=!0,r!==ks)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(Po&&e===void 0){let r=n!==void 0&&n.length===1;r&&(e=yc.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&yc.set(n,e))}return e}toString(){return this.cssText}},wc=t=>new pr(typeof t=="string"?t:t+"",void 0,ks),de=(t,...e)=>{let n=t.length===1?t[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new pr(n,t,ks)},vc=(t,e)=>{if(Po)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let r=document.createElement("style"),o=zo.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,t.appendChild(r)}},xs=Po?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(let r of e.cssRules)n+=r.cssText;return wc(n)})(t):t;var{is:Y_,defineProperty:X_,getOwnPropertyDescriptor:J_,getOwnPropertyNames:Q_,getOwnPropertySymbols:eb,getPrototypeOf:tb}=Object,Do=globalThis,kc=Do.trustedTypes,nb=kc?kc.emptyScript:"",rb=Do.reactiveElementPolyfillSupport,fr=(t,e)=>t,$s={toAttribute(t,e){switch(e){case Boolean:t=t?nb:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},$c=(t,e)=>!Y_(t,e),xc={attribute:!0,type:String,converter:$s,reflect:!1,useDefault:!1,hasChanged:$c};Symbol.metadata??=Symbol("metadata"),Do.litPropertyMetadata??=new WeakMap;var yt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=xc){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,n);o!==void 0&&X_(this.prototype,e,o)}}static getPropertyDescriptor(e,n,r){let{get:o,set:i}=J_(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xc}static _$Ei(){if(this.hasOwnProperty(fr("elementProperties")))return;let e=tb(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fr("properties"))){let n=this.properties,r=[...Q_(n),...eb(n)];for(let o of r)this.createProperty(o,n[o])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[n,r]of this.elementProperties){let o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)n.unshift(xs(o))}else e!==void 0&&n.push(xs(e));return n}static _$Eu(e,n){let r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let r of n.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vc(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,r){this._$AK(e,r)}_$ET(e,n){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:$s).toAttribute(n,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,n){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:$s;this._$Em=o;let a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,n,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??$c)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(n=void 0),this._$AL.set(e,n)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},yt[fr("elementProperties")]=new Map,yt[fr("finalized")]=new Map,rb?.({ReactiveElement:yt}),(Do.reactiveElementVersions??=[]).push("2.1.2");var Ms=globalThis,Sc=t=>t,Io=Ms.trustedTypes,Mc=Io?Io.createPolicy("lit-html",{createHTML:t=>t}):void 0,Rs="$lit$",wt=`lit$${Math.random().toFixed(9).slice(2)}$`,Es="?"+wt,ob=`<${Es}>`,qt=document,gr=()=>qt.createComment(""),_r=t=>t===null||typeof t!="object"&&typeof t!="function",As=Array.isArray,zc=t=>As(t)||typeof t?.[Symbol.iterator]=="function",Ss=`[ 	
\f\r]`,mr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rc=/-->/g,Ec=/>/g,jt=RegExp(`>|${Ss}(?:([^\\s"'>=/]+)(${Ss}*=${Ss}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ac=/'/g,Fc=/"/g,Pc=/^(?:script|style|textarea|title)$/i,Fs=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),m=Fs(1),A=Fs(2),Nx=Fs(3),vt=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Tc=new WeakMap,Zt=qt.createTreeWalker(qt,129);function Dc(t,e){if(!As(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mc!==void 0?Mc.createHTML(e):e}var Ic=(t,e)=>{let n=t.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=mr;for(let a=0;a<n;a++){let l=t[a],c,u,d=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===mr?u[1]==="!--"?s=Rc:u[1]!==void 0?s=Ec:u[2]!==void 0?(Pc.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=jt):u[3]!==void 0&&(s=jt):s===jt?u[0]===">"?(s=o??mr,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?jt:u[3]==='"'?Fc:Ac):s===Fc||s===Ac?s=jt:s===Rc||s===Ec?s=mr:(s=jt,o=void 0);let h=s===jt&&t[a+1].startsWith("/>")?" ":"";i+=s===mr?l+ob:d>=0?(r.push(c),l.slice(0,d)+Rs+l.slice(d)+wt+h):l+wt+(d===-2?a:h)}return[Dc(t,i+(t[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},br=class t{constructor({strings:e,_$litType$:n},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=Ic(e,n);if(this.el=t.createElement(c,r),Zt.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Zt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Rs)){let p=u[s++],h=o.getAttribute(d).split(wt),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:f[2],strings:h,ctor:f[1]==="."?Lo:f[1]==="?"?Ho:f[1]==="@"?Co:Xt}),o.removeAttribute(d)}else d.startsWith(wt)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(Pc.test(o.tagName)){let d=o.textContent.split(wt),p=d.length-1;if(p>0){o.textContent=Io?Io.emptyScript:"";for(let h=0;h<p;h++)o.append(d[h],gr()),Zt.nextNode(),l.push({type:2,index:++i});o.append(d[p],gr())}}}else if(o.nodeType===8)if(o.data===Es)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(wt,d+1))!==-1;)l.push({type:7,index:i}),d+=wt.length-1}i++}}static createElement(e,n){let r=qt.createElement("template");return r.innerHTML=e,r}};function Yt(t,e,n=t,r){if(e===vt)return e;let o=r!==void 0?n._$Co?.[r]:n._$Cl,i=_r(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(e=Yt(t,o._$AS(t,e.values),o,r)),e}var Oo=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:r}=this._$AD,o=(e?.creationScope??qt).importNode(n,!0);Zt.currentNode=o;let i=Zt.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new wn(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Wo(i,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(i=Zt.nextNode(),s++)}return Zt.currentNode=qt,o}p(e){let n=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,n),n+=r.strings.length-2):r._$AI(e[n])),n++}},wn=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Yt(this,e,n),_r(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==vt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):zc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&_r(this._$AH)?this._$AA.nextSibling.data=e:this.T(qt.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=br.createElement(Dc(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{let i=new Oo(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(e){let n=Tc.get(e.strings);return n===void 0&&Tc.set(e.strings,n=new br(e)),n}k(e){As(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,o=0;for(let i of e)o===n.length?n.push(r=new t(this.O(gr()),this.O(gr()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let r=Sc(e).nextSibling;Sc(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Xt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,n=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=Yt(this,e,n,0),s=!_r(e)||e!==this._$AH&&e!==vt,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Yt(this,a[r+l],n,l),c===vt&&(c=this._$AH[l]),s||=!_r(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Lo=class extends Xt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},Ho=class extends Xt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Co=class extends Xt{constructor(e,n,r,o,i){super(e,n,r,o,i),this.type=5}_$AI(e,n=this){if((e=Yt(this,e,n,0)??g)===vt)return;let r=this._$AH,o=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Wo=class{constructor(e,n,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Yt(this,e)}},Oc={M:Rs,P:wt,A:Es,C:1,L:Ic,R:Oo,D:zc,V:Yt,I:wn,H:Xt,N:Ho,U:Co,B:Lo,F:Wo},ib=Ms.litHtmlPolyfillSupport;ib?.(br,wn),(Ms.litHtmlVersions??=[]).push("3.3.3");var Lc=(t,e,n)=>{let r=n?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=n?.renderBefore??null;r._$litPart$=o=new wn(e.insertBefore(gr(),i),i,void 0,n??{})}return o._$AI(t),o};var Ts=globalThis,se=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lc(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return vt}};se._$litElement$=!0,se.finalized=!0,Ts.litElementHydrateSupport?.({LitElement:se});var sb=Ts.litElementPolyfillSupport;sb?.({LitElement:se});(Ts.litElementVersions??=[]).push("4.2.2");var ot=(t,e,n={})=>t.callWS({type:`nextfloor/${e}`,...n});async function No(t,e){return(await ot(t,"image/get",{image_id:e})).data}async function zt(t,e,n){await ot(t,"image/set",{image_id:e,data:n})}async function Hc(t){return(await ot(t,"history/list")).snapshots}async function Cc(t,e){return(await ot(t,"history/snapshot",e?{name:e}:{})).id}async function Wc(t,e){return(await ot(t,"history/get",{snapshot_id:e})).building}async function Nc(t,e){await ot(t,"history/delete",{snapshot_id:e})}async function Vc(t,e){return(await ot(t,"history/restore",{snapshot_id:e})).revision}var yr=(t,e)=>ot(t,"packs/import",{pack:e});async function Bc(t,e){await ot(t,"packs/remove",{pack_id:e})}var Kc=t=>ot(t,"backup/export"),Gc=(t,e,n)=>ot(t,"backup/import",{building:e,packs:n});var Ps=t=>t.slice(0,t.indexOf(".")),ab={light:"light",switch:"switch",input_boolean:"switch",valve:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",event:"sensor",scene:"scene",script:"script"},Q=t=>ab[Ps(t)]??null,Ds=["light","cover","climate","media","switch","fan","lock","binary","sensor","scene","script"];var Uc=new Set(["light","switch","fan"]),Pt=t=>t!==null&&t!=="scene"&&t!=="script",Dt=t=>!t||t.state==="unavailable"||t.state==="unknown"&&!t.entity_id.startsWith("event.");function G(t,e,n){let r=String(t?.states[e]?.attributes.friendly_name??t?.entities?.[e]?.name??e);if(!n||r.length<=n.length+1||!r.toLowerCase().startsWith(`${n.toLowerCase()} `))return r;let o=r.slice(n.length+1);return o[0].toUpperCase()+o.slice(1)}var jc=t=>!!t&&t.entity_id.startsWith("sensor.")&&t.attributes.device_class==="enum";var Zc=t=>Math.min(1,Math.max(0,t));function lb(t){let e=Zc((t-2200)/4300),n=[1,.66,.26],r=[.78,.9,1];return[0,1,2].map(o=>n[o]+(r[o]-n[o])*e)}function zs(t,e){if(!t||t.state!=="on")return null;let n=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:t.attributes,r=typeof n.brightness=="number"?.2+.8*Math.sqrt(Zc(n.brightness/255)):1,o=n.rgb_color;return o&&!["color_temp","brightness","onoff"].includes(String(n.color_mode))?{color:[o[0]/255,o[1]/255,o[2]/255],level:r}:typeof n.color_temp_kelvin=="number"?{color:lb(n.color_temp_kelvin),level:r}:{color:[1,.71,.28],level:r}}function qc(t,e,n){let r=zs(t,n);if(r)return r;for(let o of e){let i=zs(o);if(i)return{color:i.color,level:i.level*.6}}return null}function Vo(t,e,n=null){if(t==="light"&&n==="floor")return 1.95;if(t==="light"&&n==="table")return 1.25;if(t==="light"&&n==="wall")return 1.95;switch(t){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Qc=[],Bo=new Map,cb=0,fe=(t,e)=>`pack:${t}:${e}`,kt=t=>t.startsWith("pack:");function Is(t){Qc=t,Bo=new Map;for(let e of t)for(let n of e.items)Bo.set(fe(e.id,n.id),n);cb+=1}var vr=()=>Qc;var ub={};function U(t){if(!kt(t))return;let e=Bo.get(t);if(e)return e;let[,n,...r]=t.split(":"),o=ub[n];return o?Bo.get(fe(o,r.join(":"))):void 0}var db=.22;function Yc(t,e,n,r){let o=Math.min(db,n/3);if(r<=o*2.4||Math.abs(r-n)<1e-6)return e*(r/n)+(t-e)*(r/n);let i=e*(r/n),s=t-e;return s<=o?i+s:s>=n-o?i+r-(n-s):i+o+(s-o)*(r-2*o)/(n-2*o)}function wr(t,e,n,r,o){return[Yc(t*r,n*r,r,o)/o,Yc(e*r,n*r,r,o)/o]}var Xc=new WeakMap;function Jt(t,e,n,r){let[o,i,s]=t.size;if(t.vehicle||t.stretch||Math.abs(e-o)<1e-4&&Math.abs(n-i)<1e-4&&Math.abs(r-s)<1e-4)return t.parts;let a=`${e.toFixed(4)}|${n.toFixed(4)}|${r.toFixed(4)}`,l=Xc.get(t),c=l?.get(a);if(c)return c;let u=t.parts.map(d=>{if(d.shape==="sweep")return d;let[p,h]=wr(d.x-d.w/2,d.x+d.w/2,-.5,o,e),[f,_]=wr(d.z-d.d/2,d.z+d.d/2,-.5,i,n),[b,w]=wr(d.y,d.y+d.h,0,s,r);if(d.rot)return{...d,x:(p+h)/2,z:(f+_)/2,w:d.w*o/e,d:d.d*i/n,y:b,h:w-b};let v={...d,x:(p+h)/2,z:(f+_)/2,w:h-p,d:_-f,y:b,h:w-b};if(d.shape==="loft"){let[y,x,k,S]=[d.tx??d.x,d.tz??d.z,d.tw??d.w,d.td??d.d],[$,E]=wr(y-k/2,y+k/2,-.5,o,e),[T,P]=wr(x-S/2,x+S/2,-.5,i,n);Object.assign(v,{tx:($+E)/2,tz:(T+P)/2,tw:E-$,td:P-T})}return v});return l||Xc.set(t,l=new Map),l.size>32&&l.clear(),l.set(a,u),u}var Os=t=>!!t?.parts.some(e=>e.move);var eu=t=>U(t)?.parts.find(e=>e.screen),Jc=.06;function tu(t){let e=U(t);if(!e)return!1;let[n,r,o]=e.size;return e.parts.filter(i=>i.screen).some(i=>{let[s,a]=[i.w*n,i.d*r,i.h*o].sort((l,c)=>c-l);return a>=Jc&&s>=Jc})}function dt(t){return it[t]??U(t)?.size??[.6,.6,.8]}function It(t){let e=U(t);return lu.has(t)||!!e?.electric||!!e?.light||!!e?.climate}var nu=t=>!!U(t)?.parts.some(e=>e.picture),vn=t=>!!U(t)?.climate;function ru(t,e){return t.name[e.split("-")[0]]??t.name.en??Object.values(t.name)[0]??t.id}var hb={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace (older)",fitness:"Fitness (older)",fahrzeuge:"Vehicles",ikea:"IKEA sizes",treppen:"Stairs & railings",ausbau:"Architecture & fit-out",werkstatt:"Garage & workshop",a_wohnzimmer:"Living room",a_schlafzimmer:"Bedroom",a_kueche:"Kitchen",a_bad:"Bathroom",a_kinderzimmer:"Kids' room",a_buero:"Office & gaming",a_fitness:"Fitness",a_haustiere:"Pets",a_garten:"Garden & patio",a_kino:"Home cinema & hi-fi",a_smart:"Smart home & tech",a_haustechnik:"Utility & building services",a_saison:"Season & decoration",a_smart2:"Smart home 2",a_haustechnik2:"Building services 2",a_wellness:"Wellness",a_garten2:"Garden 2",a_kueche2:"Kitchen 2",a_fahrzeuge2:"Vehicles 2",a_aussenkueche:"Outdoor kitchen & terrace",a_werkstatt2:"Workshop 2",a_japandi:"Japandi & Scandi",a_loft:"Loft & industrial",a_gruen:"Indoor greenery",a_musik:"Music & studio",a_bilder:"Pictures & frames"};function ou(t,e){if(e.split("-")[0]==="de")return t.name;let n=/^nextfloor\.(.+)$/.exec(t.id)?.[1];return n&&hb[n]||t.name}function Se(t,e){return e.mount_y!=null?e.mount_y:fb(t,e)+(pb(e)?0:su(t,e.x,e.z))}var pb=t=>t.type==="led_strip"||U(t.type)?.mount==="ceiling";function fb(t,e){if(e.type==="lamp_wall")return iu;if(e.type==="led_strip")return Math.max(0,ht(t,e.x,e.z)-.04-Math.max(.02,e.h));let n=U(e.type);if(!n)return Ko(e);switch(n.mount){case"surface":return au(t,e.x,e.z);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,Go(t,e)-e.h);default:return 0}}function Ls(t){if(t==="plant")return"plant";let e=U(t);return e?e.household?e.household:/monstera|plant|herb_garden|flower_pots|bonsai|ficus|cactus|kaktus/.test(e.id)?"plant":null:null}var cu=["turn","slide","top"],uu=["always","active","no_power","never"],du=1.3,Uo=(t,e=new Date().toISOString().slice(0,10))=>!!t.due&&t.due<=e;var hu=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],pu=["brick","round","wide","steel"],jo=["navigate","more_info","service","fire_dom_event"];function Zo(t,e,n){return t?e?!!n.lock_plan:!!t.locked:!1}var fu=["rain","snow","fog","clouds","lightning","sky"],mu=["rain","snow","clouds","lightning","sky"],gu=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],Hs={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Cs(t){return t==="hedge"||t==="fence"||t==="pergola"}var _u=["x","-x","z","-z"];function mb(t,e,n){let r=t.slope??0;if(!r||t.type==="pool")return 0;let o=t.slope_dir??"x",i=(c,u)=>o==="x"?c:o==="-x"?-c:o==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of t.points){let d=i(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,n)-s)/(a-s)));return r*l}function gb(t,e,n,r){return bu(t)+(e.offset??0)+Hs[e.type]-mb(e,n,r)}function bu(t){return t.elevation>.3?0:-.2}function yu(t,e,n){let r=(t.outdoor??[]).filter(i=>!Cs(i.type)&&i.type!=="pool"&&W([e,n],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?gb(t,o,e,n):bu(t)}var wu=t=>t.cut??t.type==="pool",vu=["supply","return","hot","cold"],ku=60,qo=t=>`pipe:${t}`,xu=30,$u={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Su=["wood","oak","tiles","carpet","stone","concrete"],Mu={type:"none",pitch:35,overhang:.4},Yo="#d6cfc2",Xo="#e8e3da",Ru={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Mu}};function Ot(){return{version:1,floors:[],settings:{...Ru},energy:{...$u},presence:[]}}function Ke(t,e,n){return{id:t,name:e,elevation:n,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var _b=2.75;function Eu(t,e){if(e!=null&&Number.isFinite(e))return Math.round(e*_b*100)/100;let n=t.reduce((r,o)=>!r||o.elevation>r.elevation?o:r,null);return n?Math.round((n.elevation+n.height+.25)*100)/100:0}function Au(t,e,n){let r=t.rooms.flatMap(a=>a.points.map(l=>l[0])),o=t.rooms.flatMap(a=>a.points.map(l=>l[1])),i=r.length?Math.ceil(Math.max(...r))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return e.map((a,l)=>{let c=i+l%3*4.5,u=s+Math.floor(l/3)*3.5;return{id:n(),name:a.name,area_id:a.area_id,points:[[c,u],[c+4,u],[c+4,u+3],[c,u+3]],floor_material:"wood"}})}function Fu(t,e,n,r){let o=t.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[a,l]=e,c=t.x-a*(t.w/2)*i+l*(t.d/2)*s,u=t.z-a*(t.w/2)*s-l*(t.d/2)*i,d=n[0]-c,p=n[1]-u,h=w=>Math.max(.1,Math.round(w/r)*r),f=h((d*i+p*s)*a),_=h((-d*s+p*i)*l),b=w=>Math.round(w*1e3)/1e3;return{x:b(c+a*(f/2)*i-l*(_/2)*s),z:b(u+a*(f/2)*s+l*(_/2)*i),w:b(f),d:b(_)}}var Jo=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],Tu={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},Ge=["meter","inverter","home_battery","wallbox","grid_point"],zu=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),iu=1.75;function Qo(t){return Ws.has(t.type)||["stairwell","parking"].includes(t.type)?!1:U(t.type)?.mount!=="ceiling"}function he(t){return zu.has(t)||!!U(t)?.light}var bb=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Pu(t,e,n,r=0){let o=pe(t.points),i=o.x1-o.x0-2*r,s=o.z1-o.z0-2*r,a=[];for(let l=0;l<e;l++)for(let c=0;c<n;c++){let u=[Math.round((o.x0+r+i/n*(c+.5))*1e3)/1e3,Math.round((o.z0+r+s/e*(l+.5))*1e3)/1e3];W(u,t.points)&&a.push(u)}return a}function kn(t,e,n){let r=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[n];return[r(t[0]+o*e),r(t[1]+i*e)]}function Ko(t){switch(t.type){case"home_battery":return t.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-t.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Ws=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","ceiling_fan"]);function Du(t,e){return t.filter(n=>n.elevation<e.elevation).flatMap(n=>n.rooms.filter(r=>r.points.length>=3&&r.ceiling!=null&&r.ceiling>n.height+.005&&n.elevation+r.ceiling>e.elevation+.05)).map(n=>n.points)}var Ns=t=>t?.floor_offset&&Number.isFinite(t.floor_offset)?t.floor_offset:0;function su(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&o.floor_offset&&W([e,n],o.points));return Ns(r)}function ht(t,e,n){let r=t.rooms.find(o=>o.points.length>=3&&W([e,n],o.points));return r?.ceiling!=null&&r.ceiling>0?r.ceiling:t.height}var Go=(t,e)=>e.ceiling_y!=null&&e.ceiling_y>0?e.ceiling_y:ht(t,e.x,e.z);function au(t,e,n){let r=0;for(let o of t.furniture)!(bb.has(o.type)||U(o.type)?.surface)||!W([e,n],kr(o))||(r=Math.max(r,o.h));return r}var lu=new Set([...zu,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),it={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],ceiling_fan:[1.32,1.32,.32],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Vs=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Bs=["standard","bars","glass_wall"],ei=new Set(["interior","front"]);function xt(t,e){return t.type==="door"?t.style&&Vs.includes(t.style)?t.style:e?"front":"interior":t.style&&Bs.includes(t.style)?t.style:"standard"}function Iu(t,e,n,r){if(e!=="sidelight"&&e!=="sidelights")return null;let o=e==="sidelights",i=t-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),a=(i-s)/(o?2:1),l=r.sidelight_width??a,c=o?r.sidelight_width2??r.sidelight_width??a:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let u=i-.5;if(l+c>u){let p=Math.max(0,u)/(l+c);l*=p,c*=p}return o?{panels:[[.02,.02+l],[t-.02-c,t-.02]],x0:.02+l,x1:t-.02-c}:(n?!!r.sidelight_hinge:!r.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:t-.02}:{panels:[[t-.02-l,t-.02]],x0:.02,x1:t-.02-l}}function Ks(t){return t==="front"||t==="front_glass"||t==="sidelight"||t==="sidelights"}var xn={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},lift_slide:{type:"window",leaves:1,width:2.4,sill:0,height:2.15,opens:"slide"},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function $n(t){if(t.type==="garage")return"garage";if(t.type==="window"&&t.style==="glass_wall")return"glass_wall";if(t.type==="window"&&t.opens==="slide"&&t.sill<.1)return"lift_slide";let e=t.leaves===2;return t.type==="door"?!e&&t.style&&Ks(t.style)?"front":e?"door_double":"door":t.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Ie(t){t.energy={...$u,...t.energy??{}},t.presence=t.presence??[],t.version=1,t.settings={...Ru,...t.settings,roof:{...Mu,...t.settings?.roof??{}}};for(let e of t.settings.roof.sections??[])Array.isArray(e.overhang_sides)&&(e.overhang_sides=null);t.floors.forEach((e,n)=>{let r=Ke(e.id,e.name??`Floor ${n+1}`,e.elevation??n*2.8);for(let o of Object.keys(r))e[o]===void 0&&(e[o]=r[o])});for(let e of t.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,name:r.name??"",area_id:r.area_id??null,floor_material:r.floor_material??"wood",panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=e.placements.filter(r=>r.entity_id.startsWith("light."));if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let i=r[o.mount??"ceiling"],[s,a,l]=it[i],c=`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,54),u=c,d=1;for(;e.furniture.some(p=>p.id===u);)u=`${c}_${d++}`;e.furniture.push({id:u,type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null,animations_enabled:o.animations_enabled,effect_animations:structuredClone(o.effect_animations)})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,type:["door","window","garage"].includes(r.type)?r.type:"door",edge:Number.isInteger(r.edge)?r.edge:0,offset:Number.isFinite(r.offset)?r.offset:.5,width:Number.isFinite(r.width)&&r.width>0?r.width:r.type==="garage"?2.5:r.type==="window"?1.2:.9,height:Number.isFinite(r.height)&&r.height>0?r.height:r.type==="window"?1.3:r.type==="garage"?2.1:2.05,sill:Number.isFinite(r.sill)?r.sill:r.type==="window"?.9:0,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return yb(t),t}function yb(t){let e=(r,o,i=new Set)=>{for(let s of r)(typeof s.id!="string"||!s.id||i.has(s.id))&&(s.id=I(o)),i.add(s.id)};e(t.floors,"floor");let n=new Set;for(let r of t.floors){for(let o of r.rooms)(typeof o.id!="string"||!o.id)&&(o.id=I("room"));e(r.openings,"op",n),e(r.furniture,"furn"),e(r.outdoor,"out")}}function I(t){return`${t}_${Math.random().toString(36).slice(2,10)}`}function _e(t){let e=0;for(let n=0;n<t.length;n++){let[r,o]=t[n],[i,s]=t[(n+1)%t.length];e+=r*s-i*o}return e/2}function Me(t){return Math.abs(_e(t))}function ve(t){let e=_e(t);if(Math.abs(e)<1e-9){let o=t.length||1;return[t.reduce((i,s)=>i+s[0],0)/o,t.reduce((i,s)=>i+s[1],0)/o]}let n=0,r=0;for(let o=0;o<t.length;o++){let[i,s]=t[o],[a,l]=t[(o+1)%t.length],c=i*l-a*s;n+=(i+a)*c,r+=(s+l)*c}return[n/(6*e),r/(6*e)]}function Sn(t){if(t.length!==4)return!1;for(let e=0;e<4;e++){let[n,r]=t[e],[o,i]=t[(e+1)%4];if(Math.abs(n-o)>1e-6&&Math.abs(r-i)>1e-6)return!1}return!0}function pe(t){let e=1/0,n=1/0,r=-1/0,o=-1/0;for(let[i,s]of t)e=Math.min(e,i),n=Math.min(n,s),r=Math.max(r,i),o=Math.max(o,s);return{x0:e,z0:n,x1:r,z1:o}}function kr(t){let e=t.rotation*Math.PI/180,n=Math.cos(e),r=Math.sin(e),o=t.w/2,i=t.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[t.x+s*n-a*r,t.z+s*r+a*n])}function W(t,e){let n=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[a,l]=e[o];s>t[1]!=l>t[1]&&t[0]<(a-i)*(t[1]-s)/(l-s)+i&&(n=!n)}return n}var ti={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",ceiling_fan:"fan",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"},Ou=6;var Gs=t=>t.trim().replace(/^\/local\/www\//i,"/local/"),Us=t=>/^(https:\/\/|\/local\/|\/hacsfiles\/)\S+\.m?js(\?\S*)?$/i.test(t.trim());var vb=globalThis,Hu=vb.__nextfloorPluginStore??={plugins:new Map,listeners:new Set},ni=Hu.plugins,Lu=Hu.listeners;var kb=5;function Cu(t,e){t.errors.length<kb&&t.errors.push(e instanceof Error?e.message:String(e))}function ri(t){return Lu.add(t),()=>Lu.delete(t)}var js=()=>[...ni.values()].map(t=>t.status),Wu=()=>[...ni.values()].flatMap(t=>Object.keys(t.plugin.lightAnimations??{}));function*oi(t,e){for(let{plugin:n,status:r}of ni.values())for(let o of n.devices??[]){let i=!1;try{i=o.match(t,e)}catch(s){Cu(r,s)}i&&(yield{device:o,status:r})}}function ii(t,e){for(let{device:n}of oi(t,e))return n.kind??"sensor";return null}function Nu(t,e){let n=t.states[e];if(!n)return null;let r=xb({hass:t,entityId:e,state:n})?.icon?.trim();return r&&/^mdi:[a-z0-9-]+$/i.test(r)?r:null}function xb(t,e){let n=null;for(let{device:r,status:o}of oi(t.entityId,t.state))if(r.marker)try{let i=r.marker({...t,settings:Zs(r.settings,e?.[o.id])});if(!i)continue;n={...n??{}},typeof i.icon=="string"&&i.icon&&(n.icon=i.icon),typeof i.text=="string"&&(n.text=i.text.slice(0,60)),typeof i.active=="boolean"&&(n.active=i.active)}catch(i){Cu(o,i)}return n}function xr(t,e){return t?typeof t=="string"?t:t[e]??t[e.split("-")[0]]??t.en??Object.values(t)[0]??"":""}function Vu(t,e){let n=[];for(let{device:r,status:o}of oi(t,e))r.settings?.length&&n.push({pluginId:o.id,name:o.name,settings:r.settings});return n}function Zs(t,e){let n={};for(let r of t??[]){let o=e?.[r.key],i=r.type==="number"?typeof o=="number"&&Number.isFinite(o):r.type==="boolean"?typeof o=="boolean":r.type==="entity"?typeof o=="string"&&/^([a-z_]+\.\w+)?$/.test(o)&&(!r.domains?.length||o===""||r.domains.includes(o.split(".")[0])):r.type==="text"?typeof o=="string"&&o.length<=Math.min(120,r.maxLength??120):typeof o=="string"&&(r.options??[]).some(([s])=>s===o);n[r.key]=i?o:r.default}return n}function Bu(t,e){let n=t.showWhen;return!n||typeof n.key=="string"&&[n.value].flat().includes(String(e[n.key]))}function Ku(t,e){for(let{device:n}of oi(t,e))if(n.floorWedge)return!0;return!1}function Gu(t){let e=[];for(let{plugin:n,status:r}of ni.values()){let o=new Set,i=[];for(let s of n.textures??[])if(!(!s.settings?.length||!s.surfaces?.some(a=>t.includes(a))))for(let a of s.settings)o.has(a.key)||(o.add(a.key),i.push(a));i.length&&e.push({pluginId:r.id,name:r.name,settings:i})}return e}var $b=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Sb=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Mb=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Rb=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Lt(t,e){let n=t.entities?.[e];return n&&(n.area_id||(n.device_id?t.devices?.[n.device_id]?.area_id:null))||null}var ju=(t,e)=>{let n=t.entities?.[e];return!!(n?.hidden||n?.entity_category)},Ue=(t,e)=>Q(e)??ii(e,t.states[e]);function Uu(t,e){let n=t.states[e];if(!n||ju(t,e))return!1;if(ii(e,n)!==null)return!0;let r=Q(e);if(!r)return!1;let o=n.attributes.device_class;return e.startsWith("event.")?!o||o==="button"||o==="doorbell":r==="sensor"?o?$b.has(o):Sb.has(String(n.attributes.unit_of_measurement??"")):r==="binary"?o?Mb.has(o):!!t.entities?.[e]?.area_id:!0}function Eb(t,e){let n=t.states[e];return Q(e)!=="sensor"||!n?.attributes.unit_of_measurement||ju(t,e)||Rb.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Dt(n)}var ai=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power",qs=null;ri(()=>qs=null);function Ys(t,e){let n=t.get(e);return n||t.set(e,n=[]),n}function Ab(t){let e=new Map,n=new Map,r=new Map,o=new Map,i=[],s=u=>{(Uu(t,u)||Eb(t,u))&&Pt(Ue(t,u))&&i.push(u)};for(let[u,d]of Object.entries(t.entities??{})){let p=d.device_id;p&&d.area_id&&(o.get(p)??o.set(p,new Set).get(p)).add(d.area_id),p&&ai(t,u)&&Ys(n,p).push(u),p&&!d.hidden&&!d.entity_category&&(r.get(p)??r.set(p,new Set).get(p)).add(Ps(u));let h=Lt(t,u);h===null?s(u):Uu(t,u)&&Ys(e,h).push(u)}if(t.entities)for(let u of Object.keys(t.states))t.entities[u]||s(u);let a=Ds.indexOf("binary")-.5,l=u=>{let d=Q(u),p=d?Ds.indexOf(d):a;return p>a&&ii(u,t.states[u])!==null?a:p};i.sort((u,d)=>l(u)-l(d)||G(t,u).localeCompare(G(t,d)));for(let[u,d]of e){let p=t.areas?.[u]?.name;d.sort((h,f)=>l(h)-l(f)||G(t,h,p).localeCompare(G(t,f,p)))}let c=new Set;for(let[u,d]of o)d.size>1&&c.add(u);return{entities:t.entities,devices:t.devices,states:t.states,stateCount:Object.keys(t.states).length,byArea:e,powerByDevice:n,withoutArea:i,domainsByDevice:r,hubs:c}}function Mn(t){let e=qs;return e&&e.entities===t.entities&&e.devices===t.devices&&(e.states===t.states||(e.states=t.states,Object.keys(t.states).length===e.stateCount))?e:qs=Ab(t)}function ke(t,e){let n=si(t,e.area_id);return e.sub_areas?.length?[...new Set([...n,...e.sub_areas.flatMap(r=>si(t,r))])]:n}function si(t,e){return!e||!t.entities?[]:Mn(t).byArea.get(e)??[]}function Zu(t,e){if(!t.entities)return[];let n=[];for(let[r,o]of Mn(t).byArea){let i=o.filter(s=>Pt(Ue(t,s)));r!==e&&i.length>0&&n.push({areaId:r,name:t.areas?.[r]?.name??r,ids:i})}return n.sort((r,o)=>r.name.localeCompare(o.name))}var qu=t=>t.entities?Mn(t).withoutArea:[],Xs=(t,e)=>!!t.entities&&Mn(t).hubs.has(e),li=(t,e)=>t.entities?Mn(t).powerByDevice.get(e)??[]:[];function Rn(t,e){let n=new Map;for(let o of e)Ys(n,t.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...n.values()].map(o=>{let i=o.find(s=>!t.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var ci=(t,e)=>Rn(t,e).map(n=>n.primary),Js={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Fb=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Tb=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],zb=new RegExp(`(${Tb.join("|")})`,"i");function Qs(t,e){let n=t.entities?.[e]?.device_id,r=n&&!Xs(t,n)?Mn(t).domainsByDevice.get(n):void 0;return r&&[...r].some(o=>Fb.has(o))?!1:!zb.test(`${e} ${t.states[e]?.attributes.friendly_name??""}`)}function Yu(t,e,n,r){let o=n.climate?.[r];if(o==="none")return[];if(o)return[o].flat().filter(c=>t.states[c]);let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>W([c.x,c.z],n.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!W([c.x,c.z],n.points)).map(c=>c.entity_id));return[...new Set([...ke(t,n).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&t.states[c]?.attributes.device_class===Js[r]&&Qs(t,c))}var Pb=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Db=new Set(["garage","gate"]),Ib=new Set(["window","opening"]);function $r(t,e,n=!1){let r=new Map;return t.forEach((o,i)=>{let s=n&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var Xu=(t,e)=>t==="none"?null:t??e??null,En=t=>t&&t!=="none"?t:null;function Ju(t,e,n){let r=t.leaves===2;return{cover:Xu(t.cover,e),contact:t.sensor==="handle"&&t.contact==null?null:Xu(t.contact,n),tilt:t.tilt==="none"?null:t.tilt,contact2:r?En(t.contact2):null,tilt2:r?En(t.tilt2):null,position:En(t.position),positionInverted:!!t.position_inverted,tiltAngle:En(t.tilt_angle),tiltMax:t.tilt_max??null,tiltOffset:t.tilt_offset??null,tiltInvert:!!t.tilt_invert,shut:!!t.shut,angled:t.type==="door"&&!!t.open_angle,lock:t.type==="door"?En(t.lock):null,cover2:t.type==="garage"?null:En(t.cover2)}}function Sr(t,e){let n=new Map;for(let r of e){for(let o of r.rooms){let i=r.openings.filter(_=>_.room_id===o.id).sort((_,b)=>_.edge-b.edge||_.offset-b.offset);if(i.length===0)continue;let s=ke(t,o),a=_=>t.states[_]?.attributes.device_class,l=_=>s.filter(b=>Q(b)==="binary"&&_(a(b)??"")),c=_=>i.filter(b=>b.type===_),u=$r(c("window"),s.filter(_=>Q(_)==="cover"&&Pb.has(a(_))),!0),d=$r(c("window"),l(_=>Ib.has(_))),p=$r(c("door"),l(_=>_==="door")),h=$r(c("garage"),s.filter(_=>Q(_)==="cover"&&Db.has(a(_)??""))),f=$r(c("garage"),l(_=>_==="garage_door"));for(let _ of i){let b=_.type==="window"?u:_.type==="garage"?h:null,w=_.type==="window"?d:_.type==="garage"?f:p;n.set(_.id,Ju(_,b?.get(_.id),w.get(_.id)))}}for(let o of r.openings)!n.has(o.id)&&!r.rooms.some(i=>i.id===o.room_id)&&n.set(o.id,Ju(o,void 0,void 0))}return n}var Ob=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ea(t){if(!t||Dt(t))return null;let e=t.attributes.window_state;for(let n of[typeof e=="string"?e:"",t.state]){let r=n.trim(),o=r&&Ob.find(([i])=>i.test(r));if(o)return o[1]}return null}var Qu=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,ed=/(kühl|fridge|gefrier|freezer)/i,td=/(spülmaschine|geschirrspül|dishwasher)/i,Lb=/(kochfeld|herd|induktion|cooktop)/i,Hb={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:Qu,tv_wall:Qu,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:ed,fridge_smart:ed,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:td,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Lb,sink:td,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},nd={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,ceiling_fan:/(ventilator|fan)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},rd=new Set(["tv_board","tv_wall"]);var An=t=>rd.has(t)||!!eu(t),ui=t=>!!U(t)?.electric&&/speaker|multiroom|soundbar/.test(t.split(":").pop()??t),Rr=t=>An(t)||t==="desk"||t==="fridge_smart",Cb=t=>!!t&&t!=="none";function Wb(t,e){if(ai(t,e))return e;let n=t.entities?.[e]?.device_id;return n?li(t,n).find(r=>r!==e)??null:null}var Nb=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&W([e,n],r.points));function Mr(t,e,n,r){return t.find(o=>e?.test(n(o)))??(r?t[0]??null:null)}function je(t,e){let n=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power,i.fan_entity]),...r.placements.map(i=>i.entity_id)].filter(Cb));for(let i of r.furniture){let s=i.type in nd,a=vn(i.type),l=s?nd[i.type]:Hb[i.type];if(!l&&!a&&!ui(i.type)&&i.entity==null&&i.power==null)continue;let c=Nb(r,i.x,i.z),u=(c?ci(t,ke(t,c)):[]).filter(b=>!o.has(b)),d=b=>`${b} ${G(t,b)}`,p=b=>u.filter(w=>Q(w)===b),h=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(i.type==="ceiling_fan"){let b=(c?ke(t,c):[]).filter(v=>!o.has(v)),w=new Set(b.filter(v=>Q(v)==="fan").map(v=>t.entities?.[v]?.device_id).filter(Boolean));h=b.find(v=>Q(v)==="light"&&w.has(t.entities?.[v]?.device_id))??Mr(p("light"),l,d,!1)}else if(s)h=Mr(p("light"),l,d,!0);else if(i.type==="robot_vacuum"){let b=c?.area_id??null;h=Object.keys(t.entities??{}).find(w=>w.startsWith("vacuum.")&&!o.has(w)&&Lt(t,w)===b)??null}else if(i.type==="radiator"||a)h=Mr(p("climate"),l,d,!0);else if(An(i.type)){let b=p("media");h=b.find(w=>t.states[w]?.attributes.device_class==="tv")??Mr(b,l,d,rd.has(i.type))}else if(ui(i.type)){let b=p("media").filter(w=>t.states[w]?.attributes.device_class!=="tv");h=Mr(b,l,d,!1)??(b.length===1?b[0]:null)}else l&&(h=u.find(b=>["switch","media","fan"].includes(Q(b)??"")&&l.test(d(b)))??null);h&&o.add(h)}let f=i.power==="none"?null:i.power??null;i.power==null&&(f=h?Wb(t,h):null,!f&&l&&c&&!s&&(f=ke(t,c).find(b=>ai(t,b)&&!o.has(b)&&l.test(d(b)))??null),f&&o.add(f));let _=null;if(i.type==="ceiling_fan"&&(_=i.fan_entity==="none"?null:i.fan_entity??null,i.fan_entity==null)){let b=(c?ke(t,c):[]).filter(v=>Q(v)==="fan"&&!o.has(v)),w=h?t.entities?.[h]?.device_id:void 0;_=(w?b.find(v=>t.entities?.[v]?.device_id===w):void 0)??b[0]??null,_&&o.add(_)}(h||f||_)&&n.set(i.id,{entity:h,power:f,...i.type==="ceiling_fan"?{fan:_}:{}})}}return n}var od=t=>t==="fridge"||t==="fridge_smart"||/(fridge|freezer|kuehl|gefrier|chest_freezer)/.test(t.slice(t.lastIndexOf(":")+1));function id(t,e,n=[]){let r=[];for(let o of e){let i=(a,l)=>o.rooms.some(c=>c.points.length>=3&&W([a,l],c.points)),s=je(t,[o]);r.push(...o.placements.filter(a=>a.outside||!i(a.x,a.z)).map(a=>a.entity_id)),r.push(...o.furniture.filter(a=>!i(a.x,a.z)).flatMap(a=>[s.get(a.id)?.entity,s.get(a.id)?.power]));for(let a of o.outdoor??[])a.area_id&&r.push(...ci(t,si(t,a.area_id))),r.push(a.pump_entity,a.temp_entity)}return[...new Set(r.filter(o=>!!o&&!!t.states[o]&&!n.includes(o)))]}function Vb(t,e){return Math.min(...e.map((n,r)=>{let o=e[(r+1)%e.length],[i,s]=[o[0]-n[0],o[1]-n[1]],a=Math.min(1,Math.max(0,((t[0]-n[0])*i+(t[1]-n[1])*s)/(i*i+s*s||1)));return Math.hypot(t[0]-n[0]-i*a,t[1]-n[1]-s*a)}))}function ad(t,e,n=[]){let r=t.points;if(r.length<3||e.length===0)return[];let o=r.map(w=>w[0]),i=r.map(w=>w[1]),[s,a,l,c]=[Math.min(...o),Math.max(...o),Math.min(...i),Math.max(...i)],u=Math.min(a-s,c-l),d=Math.max(.1,Math.min(.25,u/8)),p=Math.min(.35,u/5),h=Math.min(.7,u/4),f=ve(r),_=[];for(let w=s+d/2;w<a;w+=d)for(let v=l+d/2;v<c;v+=d){let y=[w,v];if(!W(y,r))continue;let x=Vb(y,r);x>=p&&_.push({at:y,wallDistance:x})}_.length===0&&_.push({at:f,wallDistance:0});let b=[...n];return e.map(w=>{let v=Q(w)==="light",y=_[0].at,x=-1/0;for(let{at:S,wallDistance:$}of _){let E=b.length?Math.min(...b.map(z=>Math.hypot(S[0]-z[0],S[1]-z[1]))):3,T=Math.hypot(S[0]-f[0],S[1]-f[1]),P=Math.min(E,3)*2;T<h&&!v&&(P-=10),P-=v?T*.35:$*1.2,P>x+1e-9&&(x=P,y=S)}let k=[Math.round(y[0]*100)/100,Math.round(y[1]*100)/100];return b.push(k),{entity_id:w,x:k[0],z:k[1],y:null,mount:null}})}var sd=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function ld(t,e,n){if(n==="none")return null;if(n)return n;let r=e?t.entities?.[e]?.device_id:null;return!r||!t.entities?null:Object.values(t.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(sd.test(i.translation_key??"")||sd.test(i.entity_id.split(".")[1])))?.entity_id??null}var K=(t,e)=>[t[0]-e[0],t[1]-e[1]],pt=(t,e)=>[t[0]+e[0],t[1]+e[1]],st=(t,e)=>[t[0]*e,t[1]*e],Z=(t,e)=>t[0]*e[0]+t[1]*e[1],be=(t,e)=>t[0]*e[1]-t[1]*e[0],ye=t=>Math.hypot(t[0],t[1]),Oe=t=>{let e=ye(t)||1;return[t[0]/e,t[1]/e]},ta=t=>[-t[1],t[0]],na=t=>[t[1],-t[0]];var Bb=.05,Kb=.2,Gb=.6,Ub=.6,cd=.05;function dd(t){let e=[];return t.forEach((n,r)=>{let o=n.points;if(o.length<3)return;let i=_e(o)>=0;o.forEach((s,a)=>{let l=o[(a+1)%o.length],c=ye(K(l,s));if(c<.05)return;let u=[(l[0]-s[0])/c,(l[1]-s[1])/c],d=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let p=[-u[1],u[0]],[h,f]=[Z(s,u),Z(l,u)],_=o.map(b=>Z(b,p));e.push({room:r,index:a,dir:u,normal:p,offset:Z(s,p),outside:Z(d,p)>0?1:-1,from:Math.min(h,f),to:Math.max(h,f),reach:[Math.min(..._),Math.max(..._)]})})}),e}function ud(t,e){return t.outside===1?t.reach[0]<e-cd:t.reach[1]>e+cd}function hd(t,e,n,r,o=Bb){if(t.room===e.room||Math.abs(be(t.dir,e.dir))>o||t.outside===e.outside)return null;let i=(e.offset-t.offset)*t.outside;return i>n||i<-r||Math.abs(i)<1e-4||i<0&&(!ud(t,e.offset)||!ud(e,t.offset))||Math.min(t.to,e.to)-Math.max(t.from,e.from)<Kb?null:i}var ra=t=>Math.round(t*1e3)/1e3;function pd(t,e=.6,n=Ub){let r=dd(t),o=r.map((b,w)=>w),i=b=>o[b]===b?b:o[b]=i(o[b]),s=[],a=new Set,l=[];for(let b=0;b<r.length;b++)for(let w=b+1;w<r.length;w++){let v=hd(r[b],r[w],e,n);v!==null&&l.push([b,w,v])}l.sort((b,w)=>Math.abs(b[2])-Math.abs(w[2]));let c=new Map(r.map((b,w)=>[w,[w]])),u=(b,w)=>b.some(v=>w.some(y=>r[v].room===r[y].room&&Math.abs(r[v].offset-r[y].offset)>=.002));for(let[b,w,v]of l){let[y,x]=[i(b),i(w)];if(y!==x){if(u(c.get(y),c.get(x)))continue;o[y]=x,c.set(x,[...c.get(x),...c.get(y)]),c.delete(y)}s.push(ra(v)),a.add(b).add(w)}let d=new Map(r.map((b,w)=>[`${b.room}:${b.index}`,w]));for(let b=a.size>0;b;)b=!1,r.forEach((w,v)=>{let y=d.get(`${w.room}:${(w.index+1)%t[w.room].points.length}`);if(y===void 0||y===v)return;let x=r[y];!(Math.abs(be(w.dir,x.dir))<1e-6&&Math.abs(w.offset-x.offset)<.002&&w.outside===x.outside)||a.has(v)===a.has(y)||(a.add(v).add(y),b=!0)});r.forEach((b,w)=>{let v=d.get(`${b.room}:${(b.index+1)%t[b.room].points.length}`);if(v===void 0||v===w||!a.has(w)||!a.has(v))return;let y=r[v];Math.abs(be(b.dir,y.dir))<1e-6&&Math.abs(b.offset-y.offset)<.002&&b.outside===y.outside&&(o[i(w)]=i(v))});let p=()=>t.map(b=>({...b,points:b.points.map(w=>[w[0],w[1]])}));if(s.length===0)return{rooms:p(),gaps:s};let h=new Map;for(let b of a)h.set(i(b),[...h.get(i(b))??[],b]);let f=t.map(b=>b.points.map(()=>new Map));for(let[b,w]of h){let v=new Map(w.map(x=>[`${r[x].room}:${Math.round(r[x].offset*500)}`,r[x].offset])),y=[...v.values()].reduce((x,k)=>x+k,0)/v.size;for(let x of w){let k=r[x],S=[k.normal[0]*(y-k.offset),k.normal[1]*(y-k.offset)];f[k.room][k.index].set(b,S),f[k.room][(k.index+1)%t[k.room].points.length].set(b,S)}}return{rooms:t.map((b,w)=>({...b,points:b.points.map((v,y)=>{let x=[...f[w][y].values()].reduce((k,S)=>[k[0]+S[0],k[1]+S[1]],[v[0],v[1]]);return[ra(x[0]),ra(x[1])]})})),gaps:s}}function fd(t){let e=t.filter(n=>n>.04).sort((n,r)=>n-r);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}function md(t,e=Gb,n=.01){let r=dd(t),o=[];for(let i=0;i<r.length;i++)for(let s=i+1;s<r.length;s++){let[a,l]=[r[i],r[s]],c=hd(a,l,e,0,.02);c===null||c<n||o.push({a:{room:a.room,edge:a.index},b:{room:l.room,edge:l.index},dir:a.dir,normal:a.normal,offsetA:a.offset,offsetB:l.offset,gap:c,from:Math.max(a.from,l.from),to:Math.min(a.to,l.to)})}return o.sort((i,s)=>i.gap-s.gap)}var gd=[.06,.15,.3],jb=.6,Zb=200,Er=(t,e)=>t[0]*e[1]-t[1]*e[0],Fn=(t,e)=>[t[0]-e[0],t[1]-e[1]];function qb(t){let e=0;for(let n=0;n<t.length;n++)e+=Er(t[n],t[(n+1)%t.length]);return e/2}function Yb(t,e,n,r,o){let i=[],s=Fn(e,t),a=Math.hypot(s[0],s[1]);if(a<1e-9)return i;let l=d=>{let p=((d[0]-t[0])*s[0]+(d[1]-t[1])*s[1])/(a*a),h=[t[0]+s[0]*p,t[1]+s[1]*p];return{t:p,dist:Math.hypot(d[0]-h[0],d[1]-h[1])}};for(let d of[n,r]){let{t:p,dist:h}=l(d);h<=o&&p*a>o&&(1-p)*a>o&&i.push(p)}let c=Fn(r,n),u=Er(s,c);if(Math.abs(u)>1e-9){let d=Er(Fn(n,t),c)/u,p=Er(Fn(n,t),s)/u;d*a>o&&(1-d)*a>o&&p>=0&&p<=1&&i.push(d)}return i}function Xb(t,e){let n=[],r=s=>{let a=n.findIndex(l=>Math.hypot(l[0]-s[0],l[1]-s[1])<=e);return a>=0?a:(n.push(s),n.length-1)},o=new Map,i=(s,a)=>{s!==a&&((o.get(s)??o.set(s,new Set).get(s)).add(a),(o.get(a)??o.set(a,new Set).get(a)).add(s))};t.forEach(([s,a],l)=>{let c=new Set([0,1]);t.forEach(([d,p],h)=>{if(l!==h)for(let f of Yb(s,a,d,p,e))c.add(Math.round(f*1e6)/1e6)});let u=[...c].sort((d,p)=>d-p).map(d=>[s[0]+(a[0]-s[0])*d,s[1]+(a[1]-s[1])*d]);for(let d=0;d+1<u.length;d++)i(r(u[d]),r(u[d+1]))});for(let s=!0;s;){s=!1;for(let[a,l]of o)if(l.size<2){for(let c of l)o.get(c)?.delete(a);o.delete(a),s=!0}}return{points:n,next:o}}function Jb(t){let e=(o,i)=>Math.atan2(t.points[i][1]-t.points[o][1],t.points[i][0]-t.points[o][0]),n=new Set,r=[];for(let[o,i]of t.next)for(let s of i){if(n.has(`${o}>${s}`))continue;let a=[],l=o,c=s,u=!0;for(;!n.has(`${l}>${c}`);){if(n.add(`${l}>${c}`),a.push(l),a.length>2e3){u=!1;break}let d=e(c,l),p=-1,h=1/0;for(let f of t.next.get(c)??[]){if(f===l&&(t.next.get(c)?.size??0)>1)continue;let _=d-e(c,f);for(;_<=1e-9;)_+=2*Math.PI;_<h&&(h=_,p=f)}if(p<0){u=!1;break}l=c,c=p}u&&a.length>=3&&r.push(a.map(d=>t.points[d]))}return r}function Qb(t){return t.filter((n,r)=>{let o=t[(r-1+t.length)%t.length],i=t[(r+1)%t.length];return Math.abs(Er(Fn(n,o),Fn(i,n)))>.001}).map(([n,r])=>[Math.round(n*1e3)/1e3,Math.round(r*1e3)/1e3])}function ey(t){let e=t.map(r=>r[1]),n=(Math.min(...e)+Math.max(...e))/2;for(let r of[0,.13,-.13,.31,-.31]){let o=[];for(let a=0;a<t.length;a++){let[l,c]=t[a],[u,d]=t[(a+1)%t.length];c>n+r!=d>n+r&&o.push(l+(n+r-c)/(d-c)*(u-l))}o.sort((a,l)=>a-l);let i=null,s=0;for(let a=0;a+1<o.length;a+=2)o[a+1]-o[a]>s&&([s,i]=[o[a+1]-o[a],[(o[a]+o[a+1])/2,n+r]]);if(i&&W(i,t))return i}return null}function oa(t){for(let e of gd){let n=bd(t,e,!1);if(n.length)return n}return[]}function _d(t){for(let e of gd){let n=bd(t,e,!0);if(n.length)return n.length}return 0}function bd(t,e,n){let r=[];for(let i of t.walls??[])r.push([i.a,i.b]);for(let i of t.rooms)i.points.forEach((s,a)=>r.push([s,i.points[(a+1)%i.points.length]]));if(!t.walls?.length)return[];let o=[];for(let i of Jb(Xb(r,e))){if(qb(i)<jb)continue;let s=Qb(i);if(s.length<3||s.length>Zb)continue;let a=ey(s);!a||t.rooms.some(c=>c.points.length>=3&&W(a,c.points))!==n||o.push(s)}return o}var ty=.25,yd=t=>Math.round(t*1e3)/1e3,wd=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&W([e,n],r.points));function sa(t,e,n,r,o){let i=wd(t,e,n);if(!i)return[r,o];let s=(a,l)=>W([a,l],i.points);return s(r,o)?[r,o]:s(r,n)?[r,n]:s(e,o)?[e,o]:[e,n]}function ny(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Z(K(i,n),r))<.02&&Math.abs(Z(K(a,n),r))<.02}))}var ia=(t,e)=>Math.abs((t-e+540)%360-180);function Ar(t,e,n,r=ty){let o=wd(t,e.x,e.z);if(!o)return null;let i=o.points,s=_e(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=ye(K(u,l));if(d<.3)return;let p=[(u[0]-l[0])/d,(u[1]-l[1])/d],h=[-p[1]*s,p[0]*s],f=Z(K([e.x,e.z],l),p);if(f<0||f>d)return;let _=ny(t,o,l,h)?n/2:0,b=Z(K([e.x,e.z],l),h)-_,w=Math.atan2(-h[0],h[1])*180/Math.PI,y=[{rotation:w,extent:e.d/2},{rotation:w+90,extent:e.w/2},{rotation:w-90,extent:e.w/2}].reduce((k,S)=>ia(e.rotation,S.rotation)<ia(e.rotation,k.rotation)?S:k);if(ia(e.rotation,y.rotation)>50)return;let x=b-y.extent;Math.abs(x)>r||a&&Math.abs(x)>=Math.abs(a.gap)||(a={x:yd(e.x-h[0]*x),z:yd(e.z-h[1]*x),rotation:(Math.round(y.rotation)%360+360)%360,gap:x})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var Tn=Math.PI/180,at=t=>Math.tan(Math.min(80,Math.max(0,t))*Tn);function Tr(t){return{x0:Math.min(t.x0,t.x1),x1:Math.max(t.x0,t.x1),z0:Math.min(t.z0,t.z1),z1:Math.max(t.z0,t.z1)}}function vd(t){if(!t.rotation)return null;let e=t.rotation*Tn;return{cx:(t.x0+t.x1)/2,cz:(t.z0+t.z1)/2,c:Math.cos(e),sn:Math.sin(e)}}function kd(t,e){let n=vd(t);if(!n)return e;let[r,o]=[e[0]-n.cx,e[1]-n.cz];return[n.cx+r*n.c-o*n.sn,n.cz+r*n.sn+o*n.c]}function aa(t,e,n){let r=vd(t);if(!r)return[e,n];let[o,i]=[e-r.cx,n-r.cz];return[r.cx+o*r.c+i*r.sn,r.cz-o*r.sn+i*r.c]}function zr(t,e=0){let{x0:n,x1:r,z0:o,z1:i}=Tr(t);return[[n-e,o-e],[r+e,o-e],[r+e,i+e],[n-e,i+e]].map(s=>kd(t,s))}function Re(t){let{x0:e,x1:n,z0:r,z1:o}=Tr(t),i=s=>kd(t,s);return t.axis==="x"?{u0:e,u1:n,w:o-r,at:(s,a)=>i([s,t.flip?o-a:r+a])}:{u0:r,u1:o,w:n-e,at:(s,a)=>i([t.flip?n-a:e+a,s])}}function Pr(t,e,n){let{x0:r,x1:o,z0:i,z1:s}=Tr(t),[a,l]=aa(t,e,n);return t.axis==="x"?[a,t.flip?s-l:l-i]:[l,t.flip?o-a:a-r]}var Fr=Math.tan(30*Tn);function Dr(t,e,n,r,o){let i=Math.min(t*.3,r>1e-6?2.4/r:t*.3),s=Math.min(t*.3,o>1e-6?2.4/o:t*.3),a=e+i*r,l=n+s*o,c=Math.min(t-s,Math.max(i,(l-a+Fr*(t-s+i))/(2*Fr))),u=a+(c-i)*Fr;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:p=>p<=i?e+p*r:p<=c?a+(p-i)*Fr:p<=t-s?l+(t-s-p)*Fr:n+(t-p)*o}}function Le(t){let e=Re(t).w,[n,r]=[t.eave_a,t.eave_b],[o,i]=[at(t.pitch_a),at(t.pitch_b)];switch(t.shape){case"flat":case"parapet":return{vr:e/2,rh:n,y:()=>n};case"pent":return{vr:e,rh:n+e*o,y:s=>n+s*o};case"mansard":{let s=Dr(e,n,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-n+e*i)/(o+i))):e/2;return{vr:s,rh:n+s*o,y:a=>a<=s?n+a*o:r+(e-a)*i}}}}var Qt=t=>Le(t).rh;function xd(t){let e=t.heightEnd!==void 0;return{...t,a:t.b,b:t.a,left:t.right,right:t.left,roomLeft:t.roomRight,roomRight:t.roomLeft,height:e?t.heightEnd:t.height,heightEnd:e?t.height:void 0,...t.bottom?{bottom:[t.bottom[1],t.bottom[0]]}:{}}}function ry(t,e){let n=t.map(r=>({...r}));for(let r of e){let o=n.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):n.push({...r})}return n}function oy(t,e,n){if(t.a===e.b)return!1;let r=Oe(K(n[t.b],n[t.a])),o=Oe(K(n[e.b],n[e.a]));return Math.abs(be(r,o))>1e-6||Z(r,o)<=0||t.free||e.free||t.heightEnd!==void 0||e.heightEnd!==void 0?!1:t.height===e.height&&t.exterior===e.exterior&&!!t.between==!!e.between&&t.roomLeft===e.roomLeft&&t.roomRight===e.roomRight&&Math.abs(t.left-e.left)<=1e-9&&Math.abs(t.right-e.right)<=1e-9}function $d(t,e,n=new Set){let r=t.slice();for(;;){let o=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||n.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:xd(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:xd(r[a[1]]);if(!oy(l,c,e))continue;let u={...l,b:c.b,sources:ry(l.sources,c.sources)};i=[...r.filter((d,p)=>p!==a[0]&&p!==a[1]),u];break}if(!i)return r;r=i}}function Sd(t,e){let n=new Map;t.forEach((o,i)=>{let s=Oe(K(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:st(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)n.set(l,[...n.get(l)??[],c])});let r=new Map;for(let[o,i]of n){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)r.set(l.key,{left:pt(s,st(ta(l.d),l.left)),right:pt(s,st(na(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=pt(s,st(ta(l.d),l.left)),p=pt(s,st(na(u.d),u.right)),h=be(l.d,u.d);if(Math.abs(h)<1e-4)return;let f=pt(d,st(l.d,be(K(p,d),u.d)/h));ye(K(f,s))>a||(r.get(l.key).left=f,r.get(u.key).right=f)})}return r}function Md(t,e){let n=t.filter((r,o)=>ye(K(r,t[(o+1)%t.length]))>e);for(;;){if(n.length<=3)return n;let r=n.findIndex((o,i)=>{let s=n[(i+n.length-1)%n.length],a=n[(i+1)%n.length],[l,c]=[K(o,s),K(a,o)];return Math.abs(be(Oe(l),Oe(c)))<1e-7&&Z(l,c)>0});if(r===-1)return n;n=n.filter((o,i)=>i!==r)}}function iy(t){let e=[];return{points:e,idOf(n){let r=e.findIndex(o=>Math.abs(o[0]-n[0])<=t&&Math.abs(o[1]-n[1])<=t);return r>=0?r:(e.push([n[0],n[1]]),e.length-1)}}}function sy(t,e){let n=[];for(let r of t){let o=r.points;if(o.length<3||Math.abs(_e(o))<1e-6)continue;let i=_e(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&n.push(i?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return n}function Rd(t,e,n){let r=[];for(let o of t){let[i,s]=[e[o.u],e[o.v]],a=K(s,i),l=ye(a),c=st(a,1/l),u=e.map((p,h)=>({id:h,rel:K(p,i)})).filter(({id:p,rel:h})=>p!==o.u&&p!==o.v&&Z(h,c)>n&&Z(h,c)<l-n&&Math.abs(be(c,h))<=n).map(({id:p,rel:h})=>({t:Z(h,c),id:p})).sort((p,h)=>p.t-h.t),d=[{t:0,id:o.u},...u,{t:l,id:o.v}];for(let p=0;p+1<d.length;p++){let[h,f]=[d[p],d[p+1]];r.push({u:h.id,v:f.id,room:o.room,edge:o.edge,t0:o.forward?h.t:l-f.t,t1:o.forward?f.t:l-h.t,forward:o.forward})}}return r}var di=t=>({room_id:t.room,edge:t.edge,t0:t.t0,t1:t.t1});function ay(t,e){let n=new Map(t.map(a=>[a.id,a])),r=new Map;for(let a of e){let l=`${a.room}:${a.edge}`;r.set(l,[...r.get(l)??[],a.t0].sort((c,u)=>c-u))}let o=a=>{let l=n.get(a.room)?.wall_heights?.[a.edge];return Array.isArray(l)?l[(r.get(`${a.room}:${a.edge}`)??[]).indexOf(a.t0)]??null:l},i=a=>{let l=n.get(a.room),[c,u]=[l?.wall_heights?.[a.edge],l?.wall_slopes?.[a.edge]];if(!l||typeof c!="number"||typeof u!="number"||c<=0||u<=0)return null;let[d,p]=[l.points[a.edge],l.points[(a.edge+1)%l.points.length]];return{from:c,to:u,length:Math.hypot(p[0]-d[0],p[1]-d[1])}},s=a=>{let l=i(a);if(!l||l.length<1e-9){let u=o(a);return typeof u=="number"&&u>0?[u,u]:[null,null]}let c=u=>l.from+(l.to-l.from)*u/l.length;return a.forward?[c(a.t0),c(a.t1)]:[c(a.t1),c(a.t0)]};return{heightsOf(a){let[l,c]=[1/0,1/0];for(let d of a){let[p,h]=s(d),[f,_]=d===a[0]?[p,h]:[h,p];f!==null&&(l=Math.min(l,f)),_!==null&&(c=Math.min(c,_))}let u=a.map(d=>n.get(d.room)?.ceiling);if(u.every(d=>typeof d=="number"&&d>0)){let d=Math.max(...u);l===1/0&&(l=d),c===1/0&&(c=d)}return{...l<1/0?{a:l}:{},...c<1/0?{b:c}:{}}},thicknessOf(a){let l=a.map(c=>{let u=n.get(c.room)?.wall_thickness?.[c.edge];return Array.isArray(u)?u[(r.get(`${c.room}:${c.edge}`)??[]).indexOf(c.t0)]:u}).filter(c=>typeof c=="number"&&c>0);return l.length?Math.max(...l):void 0},hasNoWall:a=>a.some(l=>o(l)===0)}}function ly(t){let e=typeof t.bottom=="number"&&t.bottom>0?t.bottom:0,n=typeof t.bottom_end=="number"&&t.bottom_end>=0?t.bottom_end:e;return e>0||n>0?{bottom:[e,n]}:{}}function ca(t){let e=n=>Math.round(n*1e6)/1e6;return t.a===void 0||t.b===void 0?t.a!==void 0?{height:e(t.a)}:t.b!==void 0?{height:e(t.b)}:{}:Math.abs(t.a-t.b)<1e-6?{height:e(t.a)}:{height:e(t.a),heightEnd:e(t.b)}}function cy(t,e,n,r,o){let i=new Map;for(let l of t){if(o.has(l))continue;let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],u=l.find(p=>p!==c&&p.u===c.v&&p.v===c.u&&p.room!==c.room);for(let p of l)p!==c&&p!==u&&p.room!==c.room&&r.push(`overlap:${c.room}:${p.room}`);let d=u?[c,u]:[c];if(e.hasNoWall(d)){u&&a.push([c.room,u.room]);continue}if(u){let p=e.thicknessOf(d)??n.interior;s.push({a:c.u,b:c.v,left:p/2,right:p/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(di),...ca(e.heightsOf(d))})}else s.push({a:c.u,b:c.v,left:0,right:e.thicknessOf(d)??n.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[di(c)],...ca(e.heightsOf(d))})}return{drafts:s,open:a}}function uy(t,e){let n=i=>Oe(K(e[i.b],e[i.a])),r=t.filter(i=>!i.exterior&&!i.free),o=new Map;for(let i of r){if(o.has(i))continue;let s=[i];o.set(i,s);for(let a=0;a<s.length;a++){let l=s[a];for(let c of r){if(o.has(c))continue;(c.a===l.a||c.a===l.b||c.b===l.a||c.b===l.b)&&Math.abs(be(n(l),n(c)))<1e-6&&(s.push(c),o.set(c,s))}}}for(let i of new Set(o.values())){let s=n(i[0]),a=new Map;for(let u of i)for(let d of[u.a,u.b])a.set(d,(a.get(d)??0)+1);let l=new Set;for(let[u,d]of a)if(d===1)for(let p of t){if(!p.exterior||p.free||p.a!==u&&p.b!==u)continue;let h=n(p);Math.abs(be(s,h))>1e-6||l.add(Z(s,h)>0?"left":"right")}if(l.size!==1)continue;let c=[...l][0];for(let u of i){let d=u.left+u.right,p=Z(n(u),s)>0,h=c==="left"===p;[u.left,u.right]=h?[0,d]:[d,0]}}}var dy=(t,e)=>{let n=i=>Math.round(i*100),[r,o]=t[0]<e[0]||t[0]===e[0]&&t[1]<=e[1]?[t,e]:[e,t];return`w_${n(r[0])}_${n(r[1])}_${n(o[0])}_${n(o[1])}`},la=(t,e,n,r)=>{let[o,i]=[t.points[e],t.points[(e+1)%t.points.length]],s=Oe(K(i,o)),a=(r-Z(o,n))/Z(s,n);return[o[0]+s[0]*a,o[1]+s[1]*a]};function ua(t,e,n,r,o,i){return t.filter(s=>{if(s.room!==n.id||s.edge!==r)return!1;let[a,l]=[Z(e[s.u],o.dir),Z(e[s.v],o.dir)];return Math.min(a,l)>=o.from-i&&Math.max(a,l)<=o.to+i})}function hy(t,e,n,r,o){for(let s of o)for(let a of[s.from,s.to])for(let l of[s.a,s.b])e.idOf(la(r[l.room],l.edge,s.dir,a));let i=Rd(t,e.points,n);for(let s=0;s<6&&o.length;s++){let a=e.points.length;for(let l of o){let[c,u]=[r[l.a.room],r[l.b.room]],d=(f,_)=>ua(i,e.points,f,_,l,n).flatMap(b=>[Z(e.points[b.u],l.dir),Z(e.points[b.v],l.dir)]),[p,h]=[d(c,l.a.edge),d(u,l.b.edge)];for(let f of p)f>l.from+n&&f<l.to-n&&e.idOf(la(u,l.b.edge,l.dir,f));for(let f of h)f>l.from+n&&f<l.to-n&&e.idOf(la(c,l.a.edge,l.dir,f))}if(e.points.length===a)break;i=Rd(t,e.points,n)}return i}function Ed(t,e,n){let[r,o]=[t.points[e],t.points[(e+1)%t.points.length]];return Math.abs(be(Oe(K(o,r)),K(n,r)))}function py(t,e,n,r,o,i,s){let a=[],l=[];for(let c of t){let[u,d]=[e[c.a.room],e[c.b.room]],p=ua(n,r,u,c.a.edge,c,i).filter(f=>!s.has(f)),h=ua(n,r,d,c.b.edge,c,i).filter(f=>!s.has(f));for(let f of p){let _=[Z(r[f.u],c.dir),Z(r[f.v],c.dir)].sort((v,y)=>v-y),b=h.find(v=>{let y=[Z(r[v.u],c.dir),Z(r[v.v],c.dir)].sort((x,k)=>x-k);return!s.has(v)&&Math.abs(y[0]-_[0])<=i&&Math.abs(y[1]-_[1])<=i});if(!b)continue;if(s.add(f),s.add(b),o.hasNoWall([f,b])){l.push([f.room,b.room]);continue}let w=(Ed(d,c.b.edge,r[f.u])+Ed(d,c.b.edge,r[f.v]))/2;a.push({a:f.u,b:f.v,left:0,right:w,exterior:!1,between:!0,roomLeft:f.room,roomRight:b.room,sources:[di(f),di(b)],...ca(o.heightsOf([f,b]))})}}return{drafts:a,open:l}}function xe(t){return{exterior:t.wall_exterior,interior:t.wall_interior,...t.rooms_as_drawn?{asDrawn:!0}:{}}}function we(t,e,n=[]){let r=e.eps??.005,o=[],i=iy(r),s=sy(t,i),a=n.filter(k=>Math.hypot(k.b[0]-k.a[0],k.b[1]-k.a[1])>.05),l=a.map(k=>[i.idOf(k.a),i.idOf(k.b)]),c=new Set;for(let k of t){let S=k.points;S.length<3||(k.wall_splits??[]).forEach(($,E)=>{if(!$||E>=S.length)return;let T=S[E],P=K(S[(E+1)%S.length],T),z=ye(P);for(let H of $)H>r&&H<z-r&&c.add(i.idOf(pt(T,st(P,H/z))))})}let u=e.asDrawn?md(t):[],d=hy(s,i,r,t,u),p=ay(t,d),h=new Set,f=u.length?py(u,t,d,i.points,p,r,h):{drafts:[],open:[]},{drafts:_,open:b}=cy(d,p,e,o,h);uy(_,i.points),_.push(...f.drafts),b.push(...f.open);let w=_;a.forEach((k,S)=>{let[$,E]=l[S];if($===E)return;let T=[(k.a[0]+k.b[0])/2,(k.a[1]+k.b[1])/2],P=t.find(H=>H.points.length>=3&&W(T,H.points))?.id??null,z=(k.thickness??e.interior)/2;w.push({free:k.id,a:$,b:E,left:z,right:z,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:typeof k.height=="number"&&k.height>0?k.height:void 0,...typeof k.height=="number"&&k.height>0&&typeof k.height_end=="number"&&k.height_end>0&&Math.abs(k.height_end-k.height)>1e-6?{heightEnd:k.height_end}:{},...ly(k)})});let v=$d(w,i.points,c),y=Sd(v,i.points);return{walls:v.map((k,S)=>{let[$,E]=[i.points[k.a],i.points[k.b]],[T,P]=[y.get(`${S}:a`),y.get(`${S}:b`)],z=Md([T.right,P.left,E,P.right,T.left,$],1e-6);return{id:dy($,E),a:[$[0],$[1]],b:[E[0],E[1]],left:k.left,right:k.right,exterior:k.exterior,roomLeft:k.roomLeft,roomRight:k.roomRight,sources:k.sources,footprint:z,...k.free?{free:k.free}:{},...k.height!==void 0?{height:k.height}:{},...k.heightEnd!==void 0?{heightEnd:k.heightEnd}:{},...k.bottom?{bottom:k.bottom}:{},...k.between?{between:!0}:{}}}),warnings:[...new Set(o)],open:b}}function $t(t,e,n){let r=t.points[e];return pt(r,st(Oe(K(t.points[(e+1)%t.points.length],r)),n))}function He(t,e,n){if(t.wall){let o=n.find(a=>a.id===t.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=Oe(K(o.b,o.a));return{room:{id:t.room_id,name:"",area_id:null,points:[o.a,o.b,pt(o.a,[-i[1],i[0]])]},edge:0}}let r=e.find(o=>o.id===t.room_id);return r&&t.edge<r.points.length?{room:r,edge:t.edge}:null}var Ad=(t,e)=>Z(K(e,t.a),Oe(K(t.b,t.a)));function Ht(t,e,n){if(!e.wall)return fy(t,n.room,n.edge,e.offset);let r=t.find(o=>o.free===e.wall);return r?{wall:r,s:Ad(r,$t(n.room,0,e.offset))}:null}function fy(t,e,n,r){for(let o of t)if(o.sources.some(s=>s.room_id===e.id&&s.edge===n&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:o,s:Ad(o,$t(e,n,r))};return null}function Fd(t,e){let n=t.points.map(h=>h[0]),r=t.points.map(h=>h[1]);if(t.points.length!==4||new Set(n.map(h=>h.toFixed(3))).size!==2||new Set(r.map(h=>h.toFixed(3))).size!==2)return null;let[o,i,s,a]=[Math.min(...n),Math.max(...n),Math.min(...r),Math.max(...r)],l=h=>Math.max(0,...e.filter(f=>!f.between&&(f.roomLeft===t.id||f.roomRight===t.id)&&h(f)).map(f=>f.roomLeft===t.id?f.left:f.right)),c=(h,f)=>Math.abs(h-f)<.001,u=(h,f,_)=>c(h.a[f],_)&&c(h.b[f],_),d=i-o-l(h=>u(h,0,o))-l(h=>u(h,0,i)),p=a-s-l(h=>u(h,1,s))-l(h=>u(h,1,a));return[Math.round(d*1e3)/1e3,Math.round(p*1e3)/1e3]}var Td=([t,e])=>{let n=Math.hypot(t,e)||1;return[t/n,e/n]};function my(t){return t.reduce((e,n,r)=>e+(n[0]*t[(r+1)%t.length][1]-t[(r+1)%t.length][0]*n[1]),0)/2}function zd(t,e){let n=t.length;if(n<3||Math.abs(e)<1e-9)return t.map(([o,i])=>[o,i]);let r=my(t)>=0?1:-1;return t.map((o,i)=>{let s=t[(i+n-1)%n],a=t[(i+1)%n],[l,c]=Td([o[0]-s[0],o[1]-s[1]]),[u,d]=Td([a[0]-o[0],a[1]-o[1]]),p=[c*r,-l*r],h=[d*r,-u*r],f=[p[0]+h[0],p[1]+h[1]],_=Math.hypot(f[0],f[1]);if(_<1e-6)return[o[0]+p[0]*e,o[1]+p[1]*e];let b=(f[0]*p[0]+f[1]*p[1])/_,w=Math.min(4,1/Math.max(.25,b));return[o[0]+f[0]/_*e*w,o[1]+f[1]/_*e*w]})}function Ct(t){let e=t.map(r=>r[0]),n=t.map(r=>r[1]);return{x0:Math.min(...e),z0:Math.min(...n),x1:Math.max(...e),z1:Math.max(...n)}}function gy(t){let e=([i,s])=>`${Math.round(i*1e3)}:${Math.round(s*1e3)}`,n=new Map;for(let i of t)for(let s of[i.a,i.b])n.set(e(s),[...n.get(e(s))??[],i]);let r=new Set,o=null;for(let i of t){if(r.has(i))continue;r.add(i);let s=[i.a,i.b],a=i.b;for(;;){let c=(n.get(e(a))??[]).find(u=>!r.has(u));if(!c||(r.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!o||Math.abs(Me(s))>Math.abs(Me(o)))&&(o=s)}return o}function da(t,e,n,r){let o=we(t,{exterior:n,interior:r},e).walls.filter(a=>a.exterior&&!a.free),i=o.length?gy(o.map(a=>({a:a.a,b:a.b}))):null;if(!i)return null;let s=i.filter((a,l)=>{let c=i[(l+i.length-1)%i.length],u=i[(l+1)%i.length];return Math.abs((a[0]-c[0])*(u[1]-a[1])-(a[1]-c[1])*(u[0]-a[0]))>1e-6});return s.length>=3?zd(s,n):null}function en(t,e){let n=Re(t),r=Le(t),o=n.w,[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=(w,v)=>[w,v,r.y(v)],u=c(a,-i),d=c(l,-i),p=c(l,o+s),h=c(a,o+s),[f,_]=[at(t.pitch_a),at(t.pitch_b)],b=w=>[w,r.vr,r.rh];if(t.ends&&(t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip")){let w=(n.u1-n.u0)/2,v=Math.min(w,Math.min(r.vr,o-r.vr)||o/2),y=Math.min(r.y(0),r.y(o)),x=y+(r.rh-y)*Math.min(.9,Math.max(.2,t.halfhip??.55)),k=f>1e-6?Math.min(r.vr,(x-t.eave_a)/f):r.vr,S=_>1e-6?Math.max(r.vr,o-(x-t.eave_b)/_):r.vr,$=Math.min(w-.1,(r.rh-x)/Math.max(.2,f)),E=[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]],T=[[0,r.y(0)],[k,x],[S,x],[o,r.y(o)]],P=(V,ce,Be)=>{if(V==="hip")return{upA:[],upB:[],ridge:b(ce===a?n.u0+v*Be:n.u1-v*Be),profile:null};if(V==="halfhip"){let Ro=b(ce===a?n.u0+$:n.u1-$);return{upA:[[ce,k,x]],upB:[[ce,S,x]],ridge:Ro,profile:T}}return{upA:[],upB:[],ridge:b(ce),profile:E}},z=P(t.ends[0],a,1),H=P(t.ends[1],l,1),N=[[u,d,...H.upA,H.ridge,z.ridge,...[...z.upA].reverse()],[z.ridge,H.ridge,...[...H.upB].reverse(),p,h,...z.upB]],B=[[z.ridge,H.ridge]];for(let[V,ce,Be]of[[z,u,h],[H,d,p]])V.profile===null?(N.push(V===z?[h,u,V.ridge]:[d,p,V.ridge]),B.push([ce,V.ridge],[Be,V.ridge])):V.upA.length&&(N.push(V===z?[V.upB[0],V.upA[0],V.ridge]:[V.upA[0],V.upB[0],V.ridge]),B.push([V.upA[0],V.ridge],[V.upB[0],V.ridge]));let J=V=>V.profile===null?[]:V.upA.length?[V.upA[0],V.upB[0]]:[V.ridge],ee=[u,d,...J(H),p,h,...[...J(z)].reverse()];return{faces:N,rim:ee,ridges:B,gable:E,endProfiles:[z.profile,H.profile]}}switch(t.shape){case"pent":return{faces:[[u,d,p,h]],rim:[u,d,p,h],ridges:[[p,h]],gable:[[0,r.y(0)],[o,r.y(o)]]};case"hip":case"pyramid":{let w=(n.u1-n.u0)/2,v=t.shape==="pyramid"?w:Math.min(w,Math.min(r.vr,o-r.vr)||o/2),y=b(n.u0+v),x=b(n.u1-v);return t.shape==="pyramid"?{faces:[[u,d,y],[d,p,y],[p,h,y],[h,u,y]],rim:[u,d,p,h],ridges:[[u,y],[h,y],[d,y],[p,y]],gable:null}:{faces:[[u,d,x,y],[y,x,p,h],[h,u,y],[d,p,x]],rim:[u,d,p,h],ridges:[[y,x],[u,y],[h,y],[d,x],[p,x]],gable:null}}case"halfhip":{let w=Math.min(r.y(0),r.y(o)),v=w+(r.rh-w)*Math.min(.9,Math.max(.2,t.halfhip??.55)),y=f>1e-6?Math.min(r.vr,(v-t.eave_a)/f):r.vr,x=_>1e-6?Math.max(r.vr,o-(v-t.eave_b)/_):r.vr,k=Math.min((n.u1-n.u0)/2-.1,(r.rh-v)/Math.max(.2,f)),S=b(n.u0+k),$=b(n.u1-k),E=[a,y,v],T=[a,x,v],P=[l,y,v],z=[l,x,v];return{faces:[[u,d,P,$,S,E],[S,$,z,p,h,T],[T,E,S],[P,z,$]],rim:[u,d,P,z,p,h,T,E],ridges:[[S,$],[E,S],[T,S],[P,$],[z,$]],gable:[[0,r.y(0)],[y,v],[x,v],[o,r.y(o)]]}}case"mansard":{let w=Dr(o,t.eave_a,t.eave_b,f,_),v=[a,w.vla,w.yla],y=[l,w.vla,w.yla],x=[a,o-w.vlb,w.ylb],k=[l,o-w.vlb,w.ylb],S=[a,w.vr,w.rh],$=[l,w.vr,w.rh];return{faces:[[u,d,y,v],[v,y,$,S],[S,$,k,x],[x,k,p,h]],rim:[u,d,y,$,k,p,h,x,S,v],ridges:[[S,$],[v,y],[x,k]],gable:[[0,r.y(0)],[w.vla,w.yla],[w.vr,w.rh],[o-w.vlb,w.ylb],[o,r.y(o)]]}}default:{let w=b(a),v=b(l);return{faces:[[u,d,v,w],[w,v,p,h]],rim:[u,d,v,p,h,w],ridges:[[w,v]],gable:[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]]}}}}function Ir(t,e,n){let r=null;for(let o of t.faces){if(!W([e,n],o.map(([p,h])=>[p,h])))continue;let[i,s]=o,a=o.slice(2).find(p=>Math.abs((s[0]-i[0])*(p[1]-i[1])-(s[1]-i[1])*(p[0]-i[0]))>1e-9);if(!a)continue;let l=[s[0]-i[0],s[2]-i[2],s[1]-i[1]],c=[a[0]-i[0],a[2]-i[2],a[1]-i[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let d=i[2]-(u[0]*(e-i[0])+u[2]*(n-i[1]))/u[1];r=r===null?d:Math.min(r,d)}return r}function Or(t,e,n){let r=Re(e),o=t.floors.flatMap(d=>d.rooms.filter(p=>p.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(p=>o.some(h=>W(p,h.points))),s=.35,a=[.15,.5,.85].map(d=>r.u0+(r.u1-r.u0)*d),l=[.15,.5,.85].map(d=>r.w*d),c=d=>d?0:n,u=(d,p)=>{let h=e.overhang_sides?.[d];return typeof h=="number"&&Number.isFinite(h)?Math.min(2,Math.max(0,h)):p};return{a:u("a",c(i(a.map(d=>r.at(d,-s))))),b:u("b",c(i(a.map(d=>r.at(d,r.w+s))))),u0:u("u0",c(i(l.map(d=>r.at(r.u0-s,d))))),u1:u("u1",c(i(l.map(d=>r.at(r.u1+s,d)))))}}var hi=t=>Math.abs((t.x1-t.x0)*(t.z1-t.z0)),Pd=t=>t.shape==="flat"||t.shape==="parapet",tn=t=>Math.round(t*100)/100;function pi(t,e){let[n,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return t.filter(i=>{if(i===e||i.dormer||i.open||Pd(i)||hi(i)<hi(e)*1.5)return!1;let s=Tr(i);return n>=s.x0&&n<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((i,s)=>i===null||hi(s)<hi(i)?s:i,null)}function ha(t,e,n,r){let o=Re(t),i=Le(t),s=2,a=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(r??(o.u0+o.u1)/2)-s/2)),[l,c]=e==="a"?[t.eave_a,t.pitch_a]:[t.eave_b,t.pitch_b],u=l+1.4,d=u+s/2*Math.tan(35*Tn),p=Math.max(.8,Math.min(o.w/2-.2,(d-l)/Math.max(.15,Math.tan(Math.min(80,c)*Tn)))),[h,f]=e==="a"?[0,p]:[o.w-p,o.w],_=o.at(a,h),b=o.at(a+s,f);return{id:n,x0:tn(Math.min(_[0],b[0])),z0:tn(Math.min(_[1],b[1])),x1:tn(Math.max(_[0],b[0])),z1:tn(Math.max(_[1],b[1])),shape:"gable",axis:t.axis==="x"?"z":"x",eave_a:tn(u),eave_b:tn(u),pitch_a:35,pitch_b:35,base:tn(i.y(e==="a"?0:o.w)),overhang:.15,dormer:!0}}function by(t,e){let n=en(t,{u0:0,u1:0,a:0,b:0}),r=Le(t);return o=>{let[i,s]=e.at(o,e.w/2),[a,l]=Pr(t,i,s);return Ir(n,a,l)??r.y(l)}}function pa(t,e){if(Pd(e))return e;let n=Re(e),r=Le(e).rh,o=by(t,n),i=o(n.u0)<=o(n.u1),[s,a]=i?[n.u0,n.u1]:[n.u1,n.u0],l=i?1:-1,c=a;for(let p=.5;p<Math.abs(a-s);p+=.05)if(o(s+l*p)>=r-.02){c=s+l*p;break}if(Math.abs(c-a)<.05)return e;let u={...e},d=a===n.u1;return e.axis==="x"?u[d?"x1":"x0"]=c:u[d?"z1":"z0"]=c,u}var fa=.14,Dd=t=>t.shape==="flat"||t.shape==="parapet";function ma(t,e){return!t.open&&Math.min(t.base,t.eave_a,t.eave_b)<e-.05}function Lr(t,e,n){let r=Math.max(0,t.settings.roof.overhang??0),o=1e-6,i=[];for(let s of t.settings.roof.sections??[]){if(s.open)continue;let[a,l,c,u]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],[d,p]=aa(s,e,n);if(d<a-o||d>l+o||p<c-o||p>u+o||s.points&&s.points.length>=3&&!W([e,n],s.points))continue;let[h,f]=Pr(s,e,n),_=Math.max(0,s.overhang??r),b=Dd(s)?null:Ir(en(s,{u0:_,u1:_,a:_,b:_}),h,f);i.push((b??Le(s).y(f))-fa)}return i.length?Math.max(...i):null}function ga(t,e,n){let r=[],o=e+n+fa;for(let i of t.settings.roof.sections??[]){if(i.open||Dd(i)||i.shape==="mansard")continue;let s=Re(i),a=Le(i),[l,c]=[at(i.pitch_a),at(i.pitch_b)],u=[];l>1e-6&&u.push((o-i.eave_a)/l),i.shape==="gable"&&c>1e-6&&u.push(s.w-(o-i.eave_b)/c);for(let d of u)d<=.01||d>=s.w-.01||i.shape==="gable"&&Math.abs(a.y(d)-o)>1e-6||r.push([s.at(s.u0,d),s.at(s.u1,d)])}return r}function _a(t,e,n,r,o){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([e+(r-e)*a,n+(o-n)*l]);let s=t.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>W(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function ba(t,e){let n=t.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation),r=n.filter(l=>l.elevation<e.base-.05),{x0:o,z0:i,x1:s,z1:a}=e;if(o!==void 0&&i!==void 0&&s!==void 0&&a!==void 0){let l=[];for(let u of[.2,.5,.8])for(let d of[.2,.5,.8])l.push([o+(s-o)*u,i+(a-i)*d]);let c=r.findLast(u=>u.rooms.some(d=>d.points.length>=3&&l.some(p=>W(p,d.points))));if(c)return c}return r.at(-1)??n[0]}var St=t=>Math.round(t*1e3)/1e3;function Hr(t,e=n=>`roof_${n+1}`){let n=t.settings.roof?.pitch??35,r=t.settings.wall_exterior,o=t.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=(l,c)=>l.some(u=>W(c,u.points));for(let l of o){let c=l.rooms.filter(b=>b.points.length>=3),u=[...new Set(c.flatMap(b=>b.points.map(w=>St(w[0]))))].sort((b,w)=>b-w),d=[...new Set(c.flatMap(b=>b.points.map(w=>St(w[1]))))].sort((b,w)=>b-w),p=d.slice(0,-1).map((b,w)=>u.slice(0,-1).map((v,y)=>{let x=[(u[y]+u[y+1])/2,(d[w]+d[w+1])/2];return a(c,x)&&!a(s,x)})),h=p.map(b=>b.map(()=>!1)),f=(b,w)=>p[w][b]&&!h[w][b],_=(b,w,v,y)=>{let k=c.filter(S=>{for(let $=v;$<=y;$++)for(let E=b;E<=w;E++)if(p[$][E]&&W([(u[E]+u[E+1])/2,(d[$]+d[$+1])/2],S.points))return!0;return!1}).map(S=>typeof S.ceiling=="number"&&S.ceiling>0?S.ceiling:l.height);return l.elevation+(k.length?Math.max(...k):l.height)};for(let b=0;b<p.length;b++)for(let w=0;w<(p[b]?.length??0);w++){if(!f(w,b))continue;let v=w;for(;v+1<p[b].length&&f(v+1,b);)v++;let y=b;for(;y+1<p.length&&Array.from({length:v-w+1},(T,P)=>f(w+P,y+1)).every(Boolean);)y++;for(let T=b;T<=y;T++)for(let P=w;P<=v;P++)h[T][P]=!0;let[x,k]=[u[w]-r,u[v+1]+r],[S,$]=[d[b]-r,d[y+1]+r];if(Math.min(k-x,$-S)<.8)continue;let E=_(w,v,b,y);i.push({id:e(i.length),x0:St(x),z0:St(S),x1:St(k),z1:St($),shape:"gable",axis:k-x>=$-S?"x":"z",eave_a:St(E),eave_b:St(E),pitch_a:n,pitch_b:n,base:St(E),overhang:null})}s.push(...c)}return i}var Fe=Math.PI/180,Ze=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],nn=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],zn=t=>Math.hypot(t[0],t[1],t[2]),rn=t=>{let e=zn(t)||1;return[t[0]/e,t[1]/e,t[2]/e]},Id=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]],qe=t=>Math.round(t*100)/100,Cr=([t,e],n)=>(Math.atan2(t,-e)/Fe-n+720)%360;var Ld=.25;function Hd(t,e,n,r,o,i,s){let a=o-n>=i-r,l=a?o-n:i-r;return{key:`${t}:top`,section:e,side:"top",flat:!0,o:[n,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-r:o-n,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Cd(t,e){let n=rn(Id(t,e));return n[1]<0?[-n[0],-n[1],-n[2]]:n}var Wd=t=>{let e=rn([-t[0],0,-t[2]]);return[e[0],e[2]]};function Mt(t,e,n,r,o,i,s,a){let l=rn(Ze(o,r)),c=rn(Ze(i,r));return{key:t,section:e,side:n,flat:!1,o:r,eu:l,es:c,n:Cd(l,c),lu:zn(Ze(o,r)),ls:zn(Ze(i,r)),pitch:s,span:a,facing:Wd(c)}}function Od(t,e,n,r,o,i){let s=zn(Ze(o,r));if(s<.3)return null;let a=rn(Ze(o,r)),l=Ze(i,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=zn(u);if(d<.3)return null;let p=rn(u),h=f=>{let _=Math.min(1,Math.max(0,f/d));return[c*_,s-(s-c)*_]};return{key:t,section:e,side:n,flat:!1,o:r,eu:a,es:p,n:Cd(a,p),lu:s,ls:d,pitch:Math.atan2(p[1],Math.hypot(p[0],p[2]))/Fe,span:h,facing:Wd(p)}}function yy(t,e){let n=Re(t),r=Le(t),o=(v,y,x)=>{let[k,S]=n.at(v,y);return[k,x,S]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=l-a,u=r.y(-i),d=r.y(n.w+s);if(t.shape==="flat"||t.shape==="parapet"){let[v,y]=[n.at(a,-i),n.at(l,n.w+s)];return[Hd(t.id,t.id,Math.min(v[0],y[0]),Math.min(v[1],y[1]),Math.max(v[0],y[0]),Math.max(v[1],y[1]),t.eave_a+Ld)]}if(t.shape==="pent")return[Mt(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,n.w+s,d),t.pitch_a,()=>[0,c])];if(t.shape==="mansard")return wy(t,n,a,l,i,s);let p=t.shape==="hip"||t.shape==="pyramid",h=(n.u1-n.u0)/2,f=t.shape==="pyramid"?h:p?Math.min(h,Math.min(r.vr,n.w-r.vr)||n.w/2):0,_=p?n.u0+f-a:0,b=p?l-(n.u1-f):0,w=[];if(r.vr>.3){let v=Math.hypot(r.vr+i,r.rh-u);w.push(Mt(`${t.id}:a`,t.id,"a",o(a,-i,u),o(l,-i,u),o(a,r.vr,r.rh),t.pitch_a,y=>[_*(y/v),c-b*(y/v)]))}if(n.w-r.vr>.3){let v=Math.hypot(n.w+s-r.vr,r.rh-d);w.push(Mt(`${t.id}:b`,t.id,"b",o(l,n.w+s,d),o(a,n.w+s,d),o(l,r.vr,r.rh),t.pitch_b,y=>[b*(y/v),c-_*(y/v)]))}if(p){let v=Od(`${t.id}:c`,t.id,"c",o(a,n.w+s,d),o(a,-i,u),o(n.u0+f,r.vr,r.rh)),y=Od(`${t.id}:d`,t.id,"d",o(l,-i,u),o(l,n.w+s,d),o(n.u1-f,r.vr,r.rh));w.push(...[v,y].filter(x=>x!==null))}return w}function wy(t,e,n,r,o,i){let s=Dr(e.w,t.eave_a,t.eave_b,at(t.pitch_a),at(t.pitch_b)),a=(f,_)=>{let[b,w]=e.at(f,_);return[b,s.y(_),w]},l=r-n,c=()=>[0,l],u=(f,_)=>Math.atan2(f,_)/Fe,d=[],[p,h]=[e.w+i,e.w-s.vlb];return s.vla+o>.3&&d.push(Mt(`${t.id}:a`,t.id,"a",a(n,-o),a(r,-o),a(n,s.vla),t.pitch_a,c)),s.vr-s.vla>.3&&d.push(Mt(`${t.id}:au`,t.id,"a",a(n,s.vla),a(r,s.vla),a(n,s.vr),u(s.rh-s.yla,s.vr-s.vla),c)),s.vlb+i>.3&&d.push(Mt(`${t.id}:b`,t.id,"b",a(r,p),a(n,p),a(r,h),t.pitch_b,c)),h-s.vr>.3&&d.push(Mt(`${t.id}:bu`,t.id,"b",a(r,h),a(n,h),a(r,s.vr),u(s.rh-s.ylb,h-s.vr),c)),d}function ya(t){return t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>r.elevation-n.elevation)[0]??null}function Y(t){let e=t.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>yy(y,Or(t,y,y.overhang??e.overhang)));let n=ya(t);if(!n)return[];let r=n.rooms.flatMap(y=>y.points.map(x=>x[0])),o=n.rooms.flatMap(y=>y.points.map(x=>x[1])),i=t.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-i,Math.max(...r)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],u=n.elevation+n.height;if(e.type==="flat")return[Hd("main",null,s,l,a,c,u+Ld)];let d=a-s>=c-l,p=e.ridge==="short"?!d:d,h=(p?c-l:a-s)/2,f=h*Math.tan(e.pitch*Fe),_=(y,x,k)=>p?[y,u+k,(l+c)/2+x]:[(s+a)/2+x,u+k,y],[b,w]=p?[s,a]:[l,c],v=()=>[0,w-b];return[Mt("main:a",null,"a",_(b,-h,0),_(w,-h,0),_(b,0,f),e.pitch,v),Mt("main:b",null,"b",_(b,h,0),_(w,h,0),_(b,0,f),e.pitch,v)]}function Ye(t,e){let n=[];for(let r of t.floors.filter(o=>!e||o.id===e)){let{walls:o}=we(r.rooms,xe(t.settings),r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],d=Math.min(r.height,i.height??r.height,i.heightEnd??1/0),p=(h,f,_,b)=>n.push({key:h,section:null,side:"top",flat:!1,o:f,eu:_,es:[0,1,0],n:b,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[b[0],b[2]],wall:{floorId:r.id}});p(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+u*i.right],[s/l,0,a/l],[c,0,u]),i.free&&p(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-u*i.left],[-s/l,0,-a/l],[-c,0,-u])}}return n}var Ce="ground";function fi(t){let e=t.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>n.elevation-r.elevation);return e.find(n=>n.elevation>-.5)??e[0]??t.floors[0]??null}function mi(t,e){let n=(e.rotation??0)*Fe,r=[Math.cos(n),0,Math.sin(n)],o=[-Math.sin(n),0,Math.cos(n)],i=fi(t),s=r[0]*e.u+o[0]*e.v,a=r[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:yu(i,s,a)):e.base??0;return{key:Ce,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function Ee(t,e,n=Y(t)){return e.face===Ce?mi(t,e):e.face.startsWith("wall:")?Ye(t,e.face.split(":")[1]).find(r=>r.key===e.face)??null:n.find(r=>r.key===e.face)??null}var gi=1.13,Nr=1.72,Xe=.025,lt=.07;function on(t){let e=t.module_w||gi,n=t.module_h||Nr;return t.portrait===!1?[n,e]:[e,n]}function Vr(t){return t.layout?.length?t.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,t.rows)},()=>Math.max(1,t.cols))}function wa(t,e){return t.flat?Math.min(45,Math.max(0,e.tilt??15))*Fe:t.wall?Math.min(90,Math.max(0,e.tilt??0))*Fe:Math.min(45,Math.max(0,e.tilt??0))*Fe}function Br(t,e){let[,n]=on(e),r=wa(t,e);return t.wall?n*Math.cos(r)+Xe:!t.flat&&r<.001?n+Xe:t.flat&&e.rack==="ew"?n*Math.cos(r)+.08:n*Math.cos(r)+Math.max(.3,2*n*Math.sin(r))}function Pn(t,e){let[n,r]=on(e),o=Vr(e),i=Math.max(1,...o);return[i*n+(i-1)*Xe,(o.length-1)*Br(t,e)+r*Math.cos(wa(t,e))]}var vy=t=>t.flat&&!t.unbounded&&!t.wall;function Nd(t,e){if(!vy(t)||!e.rotation)return null;let n=e.rotation*Fe,[r,o]=Pn(t,e);return{cos:Math.cos(n),sin:Math.sin(n),u:e.u+r/2,s:e.v+o/2}}function Je(t,e,n=!1){let[r,o]=on(e),i=wa(t,e),s=o*Math.cos(i),a=Br(t,e),l=Vr(e),c=Math.max(1,...l),u=new Set(e.skip??[]),d=Nd(t,e),p=(b,w)=>d?[d.u+(b-d.u)*d.cos-(w-d.s)*d.sin,d.s+(b-d.u)*d.sin+(w-d.s)*d.cos]:[b,w],h=(b,w,v)=>{let[y,x]=p(b,w);return[0,1,2].map(k=>t.o[k]+t.eu[k]*y+t.es[k]*x+t.n[k]*v)},f=(b,w)=>{let[v,y]=p(b,w);if(t.unbounded)return!0;if(y<-1e-6||y>t.ls+1e-6)return!1;let[x,k]=t.span(y);return v>=x-1e-6&&v<=k+1e-6},_=[];return l.forEach((b,w)=>{let v=e.align==="right"?c-b:e.align==="center"?(c-b)/2:0;for(let y=0;y<b;y++){let x=`${w}:${y}`,k=u.has(x);if(k&&!n)continue;let S=e.u+(y+v)*(r+Xe),$=S+r,E=e.v+w*a,T=E+(t.flat||t.wall||i>.001?s:o);if([[S,E],[$,E],[$,T],[S,T]].every(([P,z])=>f(P,z)))if(t.wall&&i>.001){let P=lt+o*Math.sin(i),[z,H]=e.flip?[P,lt]:[lt,P],N=[h(S,E,z),h($,E,z),h($,T,H),h(S,T,H)],B=e.flip?E:T;_.push({corners:N,posts:[S+.05,$-.05].map(J=>[h(J,B,0),h(J,B,P)]),cell:x,skipped:k})}else if(!t.flat&&i>.001){let P=lt+o*Math.sin(i),z=[h(S,E,lt),h($,E,lt),h($,T,P),h(S,T,P)];_.push({corners:z,posts:[S+.05,$-.05].map(H=>[h(H,T,0),h(H,T,P)]),cell:x,skipped:k})}else if(!t.flat)_.push({corners:[h(S,E,lt),h($,E,lt),h($,T,lt),h(S,T,lt)],posts:[],cell:x,skipped:k});else{let z=.15+o*Math.sin(i),H=e.rack==="ew"&&w%2===1?!e.flip:!!e.flip,[N,B]=H?[T,E]:[E,T],J=[h(S,N,.15),h($,N,.15),h($,B,z),h(S,B,z)],ee=[S+.05,$-.05].flatMap(V=>[[h(V,N,0),h(V,N,.15)],[h(V,B,0),h(V,B,z)]]);_.push({corners:J,posts:ee,cell:x,skipped:k})}}}),_}function ft(t,e){if(t.unbounded)return{u:e.u,v:e.v};let[n,r]=Pn(t,e),o=Nd(t,e);if(o){let[s,a]=[(n*Math.abs(o.cos)+r*Math.abs(o.sin))/2,(n*Math.abs(o.sin)+r*Math.abs(o.cos))/2],l=(d,p,h)=>Math.floor(Math.max(p,Math.min(d,h-p))*100+1e-6)/100,[c,u]=[e.u+n/2,e.v+r/2];return{u:Math.round((l(c,s,t.lu)-n/2)*100)/100,v:Math.round((l(u,a,t.ls)-r/2)*100)/100}}let i=s=>Math.floor(s*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,t.lu-n))),v:i(Math.min(Math.max(0,e.v),Math.max(0,t.ls-r)))}}function Kr(t,e){let[n,r]=Pn(t,e),[o,i]=[e.u+n/2,e.v+r/2];return[t.o[0]+t.eu[0]*o+t.es[0]*i,t.o[2]+t.eu[2]*o+t.es[2]*i]}var _i=.78,Gr=1.18,sn=t=>({id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:t.w||_i,module_h:t.h||Gr,tilt:0});function va(t,e){let n=Je(t,sn(e))[0];if(!n)return null;let r=t.flat?-.03:.05,o=i=>[i[0]-t.n[0]*r,i[1]-t.n[1]*r,i[2]-t.n[2]*r];return n.corners.map(o)}var Wr={brick:{w:.5,d:.5,h:1},round:{w:.4,d:.4,h:1},wide:{w:1,d:.5,h:1},steel:{w:.2,d:.2,h:1.2}};function an(t){let e=t.shape??"brick",n=Wr[e]??Wr.brick;return{shape:e,w:t.w||n.w,d:t.d||n.d,h:t.h||n.h}}function Rt(t,e){let{w:n,d:r}=an(t),o=e&&!e.flat?Math.cos(e.pitch*Fe):1;return{id:t.id,face:t.face,u:t.u,v:t.v,rows:1,cols:1,portrait:!0,module_w:n,module_h:r/Math.max(.2,o),tilt:0}}function ka(t,e){let n=Rt(e,t),[r,o]=[n.module_w,n.module_h],i=(u,d)=>[t.o[0]+t.eu[0]*u+t.es[0]*d,t.o[1]+t.eu[1]*u+t.es[1]*d,t.o[2]+t.eu[2]*u+t.es[2]*d],[s,a]=[i(e.u+r/2,e.v),i(e.u+r/2,e.v+o)],l=i(e.u+r/2,e.v+o/2),c=u=>{let d=Math.hypot(u[0],u[2])||1;return[u[0]/d,u[2]/d]};return{center:[l[0],l[2]],along:c(t.eu),across:c(t.es),low:Math.min(s[1],a[1]),high:Math.max(s[1],a[1])}}function xa(t,e){let[n]=on(e);return qe((t.lu-(e.cols*n+(e.cols-1)*Xe))/2)}var Ur=.4;function Dn(t,e){let n={id:e,face:t.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:t.flat?15:null,flip:!1,entity:null,look:"black"},[r]=on(n),[o,i]=t.span(t.ls/2);for(n.cols=Math.max(1,Math.floor((i-o-2*Ur+Xe)/(r+Xe))),n.rows=Math.max(1,Math.min(4,Math.floor((t.ls-2*Ur)/Br(t,n))));n.cols>1&&Je(t,{...n,u:xa(t,n),v:Ur}).length<n.rows*n.cols;)n.cols--;return n.u=xa(t,n),n.v=Ur,n}function bi(t,e){let n={...e,face:t.key,tilt:t.flat?e.tilt??15:null,rotation:null,flip:!1};return n.u=xa(t,n),n.v=Ur,{...n,...ft(t,n)}}function $a(t,e,n){let r=t.settings.north??0,o=a=>a.lu*(1.3+Math.cos((Cr(a.facing,r)-180)*Math.PI/180)),i=Ye(t,n).sort((a,l)=>o(l)-o(a))[0];if(!i)return null;let s={...Dn(i,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((i.lu-.8+Xe)/(Nr+Xe))),s.u=qe((i.lu-(s.cols*Nr+(s.cols-1)*Xe))/2),s.v=qe(Math.max(0,i.ls-gi-.3)),s}function jr(t,e){let n=t.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),r=n.length?Math.max(...n.map(i=>i[0]))+3:0,o=n.length?Math.min(...n.map(i=>i[1])):0;return{id:e,face:Ce,u:qe(r),v:qe(o),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(t.settings.north??0)||0,look:"black",entity:null}}function Zr(t,e,n){let r=mi(t,e),[o,i]=Pn(r,e),[s,a]=[e.u+o/2,e.v+i/2],l=[r.eu[0]*s+r.es[0]*a,r.eu[2]*s+r.es[2]*a],c=n*Fe,u=l[0]*Math.cos(c)+l[1]*Math.sin(c)-o/2,d=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-i/2;return{u:qe(u),v:qe(d),rotation:(Math.round(n)%360+360)%360}}function qr(t,e){let[n,r]=t.span(t.ls/2);return{id:e,face:t.key,u:qe((n+r-_i)/2),v:qe(Math.max(0,Math.min(t.ls-Gr,t.ls*.45-Gr/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function Yr(t,e){let n=Wr.brick,[r,o]=t.span(t.ls*.8),i=Rt({id:e,face:t.key,u:0,v:0},t).module_h;return{id:e,face:t.key,u:qe((r+o-n.w)/2),v:qe(Math.max(0,Math.min(t.ls-i,t.ls*.8-i/2))),shape:"brick",w:null,d:null,h:null}}function In(t,e){let[n,r]=[e[0]-t.o[0],e[1]-t.o[2]],[o,i,s,a]=[t.eu[0],t.eu[2],t.es[0],t.es[2]],l=o*a-i*s;if(Math.abs(l)<1e-9)return null;let c=(n*a-r*s)/l,u=(o*r-i*n)/l;if(u<0||u>t.ls)return null;let[d,p]=t.span(u);return c>=d&&c<=p?{u:c,s:u}:null}function Sa(t,e){let n=null;for(let r of t){if(r.wall){let[s,a]=[e[0]-r.o[0],e[1]-r.o[2]],l=s*r.eu[0]+a*r.eu[2],c=s*r.n[0]+a*r.n[2],u=l>=0&&l<=r.lu;if(u&&c>=-.05&&c<=.35)return{face:r,u:l,s:Number.NaN};u&&c>.35&&c<=.8&&!n&&(n={face:r,u:l,s:Number.NaN,y:-1/0});continue}let o=In(r,e);if(!o)continue;let i=r.o[1]+r.es[1]*o.s;(!n||i>n.y)&&(n={face:r,...o,y:i})}return n&&{face:n.face,u:n.u,s:n.s}}function yi(t,e,n){let r=nn(n,t.n);if(Math.abs(r)<1e-6)return null;let o=nn(Ze(t.o,e),t.n)/r;if(o<=0)return null;let i=Ze([e[0]+n[0]*o,e[1]+n[1]*o,e[2]+n[2]*o],t.o);return{t:o,u:nn(i,t.eu),s:nn(i,t.es)}}function Ma(t,e,n){if(t.unbounded)return!0;if(n<0||n>t.ls)return!1;let[r,o]=t.span(n);return e>=r&&e<=o}function Ra(t,e,n,r){return Je(t,e).some(i=>{let s=i.corners.map(c=>{let u=Ze(c,t.o);return[nn(u,t.eu),nn(u,t.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return n>=Math.min(...a)-.05&&n<=Math.max(...a)+.05&&r>=Math.min(...l)-.05&&r<=Math.max(...l)+.05})}var ky=["n","ne","e","se","s","sw","w","nw"],Ea=(t,e)=>ky[Math.round(Cr(t.facing,e)/45)%8];function Xr(t,e){let n=r=>{if(r.flat)return r.lu*r.ls*.8;let o=Math.cos((Cr(r.facing,e)-180)*Math.PI/180);return r.lu*r.ls*(1.2+o)};return[...t].sort((r,o)=>n(o)-n(r))[0]??null}var Gd=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Vd={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},Bd=t=>typeof t=="string"?t:t[0],wi=t=>typeof t=="string"?it[t]:t[1],On=.05,xy=.02,Kd=t=>Math.round(t*1e3)/1e3;function $y(t,e,n,r){switch(e){case"back":return{x:t.x0+n,z:t.z0+r,turn:0};case"right":return{x:t.x1-r,z:t.z0+n,turn:90};case"front":return{x:t.x1-n,z:t.z1-r,turn:180};case"left":return{x:t.x0+r,z:t.z1-n,turn:270}}}function Ud(t,e,n){let r=pe(t.points),o=r.x1-r.x0,i=r.z1-r.z0,s=[],a=(l,c,u,d,[p,h,f])=>{s.push({id:n(),type:l,x:Kd(c),z:Kd(u),rotation:d,w:p,d:h,h:f,variant:null,entity:null,power:null})};for(let[l,c,u]of Vd[e].rows){let d=l==="back"||l==="front"?o:i,p=0,h=[];for(let _ of u){if(p+wi(_)[0]>d-.1)break;h.push(_),p+=wi(_)[0]}let f=c==="start"?On:c==="end"?d-p-On:(d-p)/2;for(let _ of h){let b=wi(_),w=$y(r,l,f+b[0]/2,b[1]/2+xy);a(Bd(_),w.x,w.z,w.turn,b),f+=b[0]}}for(let[l,c,u,d]of Vd[e].spots){let p=wi(l),h=(b,w,v)=>Math.min(v,Math.max(w,b)),f=h(r.x0+o*c,r.x0+p[0]/2+On,r.x1-p[0]/2-On),_=h(r.z0+i*u,r.z0+p[1]/2+On,r.z1-p[1]/2-On);a(Bd(l),f,_,d,p)}return s}var Sy=30*Math.PI/180,jd=.05;function Aa(t){let e=t.points.length;return t.points.map((n,r)=>{let o=t.points[(r+1)%e];return Math.hypot(o[0]-n[0],o[1]-n[1])})}function Jr(t){return Aa(t).reduce((e,n)=>e+n,0)}function My(t,e){let n=Aa(t),r=0;for(let o=0;o<e&&o<n.length;o++)r+=n[o];return r}function Ry(t,e){let n=t.points.length,[r,o,i]=[t.points[e],t.points[(e+1)%n],t.points[(e+2)%n]],s=[o[0]-r[0],o[1]-r[1]],a=[i[0]-o[0],i[1]-o[1]],[l,c]=[Math.hypot(s[0],s[1]),Math.hypot(a[0],a[1])];return l<1e-9||c<1e-9?0:Math.acos(Math.max(-1,Math.min(1,(s[0]*a[0]+s[1]*a[1])/(l*c))))}function Fa(t,e,n){let r=Aa(t),o=r.length,i=r.reduce((h,f)=>h+f,0);if(o<3||!(i>0)||!(n>0))return null;let s=Math.min(n,i),a=(e%i+i)%i,l=0,c=0;for(;l<o-1&&a>=c+r[l];)c+=r[l],l++;let u=a-c,d=s,p=[];for(let h=0;h<=o&&d>1e-9;h++){let f=r[l]-u,_=Math.min(d,f);_>1e-9&&p.push({edge:l,t0:u,t1:u+_}),d-=_,u=0;let b=(l+1)%o;if(d>1e-9&&Ry(t,l)>Sy)break;l=b}for(;p.length>1&&p[0].t1-p[0].t0<jd;)p.shift();for(;p.length>1&&p[p.length-1].t1-p[p.length-1].t0<jd;)p.pop();return p.length?p.map(h=>({edge:h.edge,offset:(h.t0+h.t1)/2,width:h.t1-h.t0})):null}function Ln(t,e){let n=e[0];return n?{from:My(t,n.edge)+n.offset-n.width/2,width:e.reduce((r,o)=>r+o.width,0)}:null}function Wt(t,e){return e.front?t.filter(n=>n.front===e.front):[e]}function Ta(t,e){let n=t.points.length,r=1/0,o=0,i=0;for(let s=0;s<n;s++){let a=t.points[s],l=t.points[(s+1)%n],c=l[0]-a[0],u=l[1]-a[1],d=Math.hypot(c,u);if(d<1e-6)continue;let p=Math.max(0,Math.min(d,((e[0]-a[0])*c+(e[1]-a[1])*u)/d)),h=Math.hypot(e[0]-(a[0]+c*p/d),e[1]-(a[1]+u*p/d));h<r&&(r=h,o=i+p),i+=d}return o}function Qr(t,e,n,r,o,i=()=>I("opening")){let s=Fa(e,r,o);if(!s)return null;let a=Wt(t,n),l=new Set(a.map(h=>h.id)),c=s.length>1?a[0].front??`front-${a[0].id}`:null,u=s.map((h,f)=>({...n,id:f===0?a[0].id:i(),edge:h.edge,offset:h.offset,width:h.width,front:c})),d=[],p=!1;for(let h of t){if(!l.has(h.id)){d.push(h);continue}p||(d.push(...u),p=!0)}return d}var Da=globalThis,za=Da.__nextfloorBuiltin?.de??{},Pa=Da.__nextfloorBuiltin?.en??{};Da.__nextfloorBuiltin??={de:za,en:Pa};var Ey=()=>typeof M=="object"&&M||{},Ay=globalThis,Fy=Ay.__nextfloorTexts??=new Map;function Ty(t){let e=t.toLowerCase().split("-")[0];return e!=="de"&&e!=="en"&&e in Ey()?e:void 0}function Zd(t){let e=Ty(t),n=e===void 0?void 0:Fy.get(e);return n instanceof Promise?void 0:n}function vi(t,e){return Zd(t)?.[e]}function Ae(t,e,n={}){let r=t?.language??navigator.language,o=r.startsWith("de"),i=(o?void 0:Zd(r)?.[e])??(o?za:Pa)[e]??Pa[e]??za[e]??e;for(let[s,a]of Object.entries(n))i=i.replace(`{${s}}`,String(a));return i}function q(t,e,n=2){return e.toLocaleString(t?.language??void 0,{maximumFractionDigits:n})}var Qe=de`
  :host {
    --nf-text: var(--primary-text-color, #e1e1e1);
    --nf-muted: var(--secondary-text-color, #9b9b9b);
    --nf-accent: var(--primary-color, #03a9f4);
    --nf-accent-text: var(--text-primary-color, #ffffff);
    --nf-surface: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    --nf-bg: var(--primary-background-color, #111111);
    --nf-bg2: var(--secondary-background-color, #1c1c1c);
    /* floating bars and cards over the 3D view: the card colour, a little see-through */
    --nf-chrome: color-mix(in srgb, var(--nf-surface) var(--nf-chrome-mix, 84%), transparent);
    --nf-chrome-solid: var(--nf-surface);
    --nf-line: var(--divider-color, rgba(255, 255, 255, 0.12));
    /* quiet fills for buttons and fields, and the tonal accent of an active control */
    --nf-fill: color-mix(in srgb, var(--nf-text) 7%, transparent);
    --nf-fill-strong: color-mix(in srgb, var(--nf-text) 13%, transparent);
    --nf-tonal: color-mix(in srgb, var(--nf-accent) 20%, transparent);
    --nf-soft: var(--info-color, #4a90e2);
    --nf-warm: var(--state-light-active-color, #ffa726);
    --nf-danger: var(--error-color, #db4437);
    --nf-good: var(--success-color, #43a047);
    --nf-radius: var(--ha-card-border-radius, 12px);
    --nf-shadow: var(--ha-card-box-shadow, 0 1px 2px rgba(0, 0, 0, 0.18), 0 6px 20px rgba(0, 0, 0, 0.2));
    --nf-font: var(--primary-font-family, Roboto, "Noto Sans", system-ui, -apple-system, "Segoe UI", sans-serif);
    --nf-title-font: var(--nf-font);
    font-family: var(--nf-font);
    color: var(--nf-text);
  }
`,QS=de`
  :host([readable]) {
    --secondary-text-color: var(--primary-text-color, #e1e1e1);
    --divider-color: color-mix(in srgb, var(--primary-text-color, #e1e1e1) 40%, transparent);
    --nf-chrome-mix: 97%;
  }
  :host([readable]) nf-room-panel,
  :host([readable]) .nf-nav,
  :host([readable]) .nf-overlay {
    zoom: 1.2;
  }
`,mt=de`
  /* a group of switches: one rounded pill, the active one tinted with the accent */
  .nf-seg {
    display: inline-flex;
    padding: 4px;
    gap: 2px;
    border-radius: 999px;
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(10px);
  }
  .nf-seg button,
  .nf-chip {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--nf-muted);
    padding: 7px 14px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 36px;
    transition:
      background 0.15s,
      color 0.15s;
  }
  .nf-seg button:hover:not(:disabled),
  .nf-chip:hover {
    background: var(--nf-fill);
    color: var(--nf-text);
  }
  /* on a small stage (a small window, a zoomed browser, a dashboard column) the switches at the bottom take less room */
  @container nf ((max-width: 1360px) or (max-height: 640px)) {
    :is(.nf-overlay, .nf-card-controls) .nf-seg {
      padding: 3px;
    }
    :is(.nf-overlay, .nf-card-controls) :is(.nf-seg button, .nf-chip) {
      font-size: 12.5px;
      padding: 5px 10px;
    }
  }
  .nf-time-slider {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
  }
  .nf-time-slider input {
    width: 160px;
    accent-color: var(--nf-accent);
  }
  .nf-seg button[aria-pressed="true"],
  .nf-chip[aria-pressed="true"] {
    background: color-mix(in srgb, var(--nf-accent) 24%, var(--nf-chrome-solid));
    color: var(--nf-accent);
    font-weight: 600;
  }
  .nf-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  /* a single pill, like the chips of the Mushroom cards */
  .nf-chip {
    background: var(--nf-chrome);
    color: var(--nf-text);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(10px);
  }

  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--nf-accent);
    outline-offset: 2px;
  }
  /* the round icon badge every row and card starts with */
  .nf-ico {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--nf-tonal);
    color: var(--nf-accent);
    --mdc-icon-size: 20px;
  }
  .nf-ico.nf-warm {
    background: color-mix(in srgb, var(--nf-warm) 22%, transparent);
    color: var(--nf-warm);
  }
  .nf-ico.nf-off {
    background: var(--nf-fill);
    color: var(--nf-muted);
  }
  .nf-btn {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: var(--nf-fill);
    color: var(--nf-text);
    border-radius: var(--nf-radius);
    padding: 7px 14px;
    cursor: pointer;
    min-height: 36px;
    transition: background 0.15s;
  }
  .nf-btn:hover {
    background: var(--nf-fill-strong);
  }
  .nf-btn.nf-danger {
    color: var(--nf-danger);
  }
  .nf-btn.nf-primary {
    background: var(--nf-accent);
    color: var(--nf-accent-text);
  }
  .nf-btn.nf-primary:hover {
    background: color-mix(in srgb, var(--nf-accent) 88%, var(--nf-text));
  }
  .nf-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-field input,
  .nf-field select,
  .nf-field textarea {
    font: inherit;
    font-size: 14px;
    color: var(--nf-text);
    background: var(--nf-fill);
    border: none;
    border-bottom: 1px solid var(--nf-line);
    border-radius: 10px 10px 4px 4px;
    padding: 8px 10px;
    min-width: 0;
  }
  .nf-field input:focus,
  .nf-field select:focus,
  .nf-field textarea:focus {
    border-bottom-color: var(--nf-accent);
  }
  .nf-field input[type="range"] {
    padding: 0;
    accent-color: var(--nf-accent);
  }
  .nf-field select option {
    background: var(--nf-chrome-solid);
    color: var(--nf-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .nf-seg button,
    .nf-chip,
    .nf-btn {
      min-height: 40px;
    }
  }
`;var me=t=>/^(sensor|input_number|number)\./.test(t),ki=t=>/^(binary_sensor|input_boolean)\./.test(t);function Hn(t,e){if(!me(e))return!1;let n=t?.states[e]?.attributes;return n?.device_class==="power"||n?.unit_of_measurement==="W"||n?.unit_of_measurement==="kW"}function zy(t,e){let n=t?.entities?.[e],r=n?.area_id??(n?.device_id?t?.devices?.[n.device_id]?.area_id:null);return r?t?.areas?.[r]?.name:void 0}function C(t,e){return Object.keys(t?.states??{}).filter(e).map(n=>{let r=zy(t,n);return{id:n,label:r?`${G(t,n)} \xB7 ${r}`:G(t,n)}}).sort((n,r)=>n.label.localeCompare(r.label))}function xi(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}var $i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},eo=t=>(...e)=>({_$litDirective$:t,values:e}),Cn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,r){this._$Ct=e,this._$AM=n,this._$Ci=r}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};var to=class extends Cn{constructor(e){if(super(e),this.it=g,e.type!==$i.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===vt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let n=[e];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};to.directiveName="unsafeHTML",to.resultType=1;var qd=eo(to);var Yd=40,Ia=class extends se{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return n.every(l=>a.includes(l))},o=this.fixed.filter(s=>!e||r(s)),i=e?this.options.filter(r):this.options;return[...o,...i.slice(0,Yd)]}get leftOut(){let e=this._query.trim().toLowerCase(),n=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(o=>n.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,r-Yd)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let n=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(n.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&n[this._cursor]&&this.choose(n[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,n=this._open?this.hits:[];return m`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${r=>{this._query=r.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?m`<ul class="list" role="listbox">
            ${n.length?g:m`<li class="empty">–</li>`}
            ${n.map((r,o)=>m`<li
                role="option"
                aria-selected=${r.id===this.value}
                class="${o===this._cursor?"cursor":""} ${r.id===this.value?"chosen":""}"
                @mousedown=${i=>i.preventDefault()}
                @click=${()=>this.choose(r.id)}
              >
                <span>${r.label}</span>${r.id.includes(".")?m`<small>${r.id}</small>`:g}
              </li>`)}
            ${this.leftOut>0?m`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:g}
          </ul>`:g}
    </div>`}static styles=[Qe,de`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--nf-text);
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--nf-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--nf-muted);
      }
      input:focus {
        outline: 2px solid var(--nf-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        box-shadow: var(--nf-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--nf-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--nf-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--nf-accent);
      }
      li.empty {
        color: var(--nf-muted);
        cursor: default;
      }
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",Ia);var ln=t=>t.target.value,Oa=t=>Number.parseFloat(t.replace(",",".")),ae=t=>Math.round(t*1e3)/1e3,Xd=t=>t.wide?"nf-field nf-wide":"nf-field";function F(t,e,n,r,o=.01,i){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${o}
      min=${i??g}
      .value=${String(ae(n))}
      ?disabled=${!t.admin}
      @change=${s=>{let a=Oa(ln(s));Number.isFinite(a)&&r(a)}}
    />
  </label>`}function j(t,e,n,r,o={}){return m`<label class=${Xd(o)} title=${o.title??g}
    >${e}
    <input type="text" .value=${n} placeholder=${o.placeholder??g} maxlength=${o.maxlength??g} ?disabled=${!t.admin} @change=${i=>r(ln(i).trim())} />
  </label>`}function O(t,e,n,r,o,i={}){return m`<label class=${Xd(i)} title=${i.title??g}
    >${e}
    <select ?disabled=${!t.admin} @change=${s=>o(ln(s))}>
      ${r.map(([s,a])=>m`<option value=${s} ?selected=${s===n}>${a}</option>`)}
    </select>
  </label>`}function L(t,e,n,r,o={}){return m`<label class="nf-check ${o.wide===!1?"":"nf-wide"}" title=${o.title??g}
    ><input type="checkbox" .checked=${n} ?disabled=${!t.admin} @change=${i=>r(i.target.checked)} />
    ${e}</label
  >`}function We(t,e,n,r,o){return m`<label class="nf-field"
    >${e}
    <span class="nf-color-row"
      ><input type="color" .value=${n??r} ?disabled=${!t.admin} @change=${i=>o(i.target.value)} />
      ${n?m`<button type="button" class="nf-link" ?disabled=${!t.admin} @click=${()=>o(null)}>${t.t("wall_paint_default")}</button>`:g}</span
    ></label
  >`}function D(t,e,n,r,o,i){let s=r===void 0?null:r?t.t("entity_auto",{name:G(t.hass,r)}):t.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:t.t("entity_none")}];return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${o}
      .fixed=${a}
      .value=${n??(s!==null?"__auto":"none")}
      .placeholder=${t.t("entity_search")}
      ?disabled=${!t.admin}
      @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function Wn(t,e,n){return n?(n.startsWith("mdi:")?n:`mdi:${n}`).replace(/[^a-z0-9:-]/gi,""):t.hass?Nu(t.hass,e):null}function Nt(t,e,n){let r=e?(e.startsWith("mdi:")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return m`<label class="nf-field nf-wide" title=${t.t("marker_icon_hint")}
    >${t.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!t.admin} @change=${o=>n(ln(o).trim().replace(/^mdi:/,"")||null)} />
      ${r?qd(`<ha-icon icon="${r}"></ha-icon>`):g}
    </span>
  </label>`}function Nn(t,e,n){return m`<label class="nf-field nf-wide" title=${t.t("marker_show_hint")}
    >${t.t("marker_show")}
    <select ?disabled=${!t.admin} @change=${r=>n(ln(r)||null)}>
      <option value="" ?selected=${!e}>${t.t("marker_show_auto")}</option>
      ${uu.map(r=>m`<option value=${r} ?selected=${r===e}>${t.t(`marker_show_${r}`)}</option>`)}
    </select>
  </label>`}function Vn(t,e,n){let r=e??{},o=i=>s=>{let a={...r,[i]:Math.round(Math.max(-5,Math.min(5,s))*100)/100};n(a.x||a.z||a.y?a:null)};return m`<details class="nf-wide nf-pin-shift" ?open=${!!e}>
    <summary>${t.t("pin_shift")}</summary>
    <div class="nf-form">
      ${F(t,"\u2194 x",r.x??0,o("x"),.05)} ${F(t,"\u2195 z",r.z??0,o("z"),.05)} ${F(t,t.t("pin_shift_up"),r.y??0,o("y"),.05)}
      ${e?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n(null)}>${t.t("height_auto")}</button>`:g}
      <p class="nf-sub nf-wide">${t.t("pin_shift_hint")}</p>
    </div>
  </details>`}var X=(...t)=>m`<div class="nf-actions">${t}</div>`,R=(t,e="")=>m`<p class="nf-sub ${e}">${t}</p>`;function cn(t,e,n,r={}){let o=r.lowest??10;return m`<label class="nf-field" title=${t.t(r.hint??"glow_scale_hint")}
    >${t.t(r.label??"glow_scale")}
    <input
      type="number"
      min=${o}
      max="150"
      step="5"
      .value=${String(Math.round((e??1)*100))}
      ?disabled=${!t.admin}
      @change=${i=>{let s=Number(ln(i)),a=Math.min(150,Math.max(o,ln(i).trim()===""||Number.isNaN(s)?100:s))/100;n(Math.abs(a-1)<.001?null:a)}}
    />
  </label>`}function Jd(t,e,n){let r=t.find(l=>l.person===e),o="sensor"in n?n.sensor&&n.sensor!=="none"?n.sensor:null:r?.sensor??null,i="room"in n?n.room||null:r?.room??null,s=t.filter(l=>l.person!==e);if(!o&&!i)return s;let a=i?{person:e,sensor:o,room:i}:{person:e,sensor:o};return r?t.map(l=>l.person===e?a:l):[...s,a]}function Qd(t,e){let n=e.slice(e.indexOf(".")+1),r=o=>o.id.includes(n)&&/(area|room|raum|bermuda|espresense)/.test(o.id);return[...t.filter(r),...t.filter(o=>!r(o))]}function eh(t){let e=t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:"";return`start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${e} }`}function th(t){let e=t.trim();if(!e)return{ok:!0,value:null};try{let n=JSON.parse(e);return n&&typeof n=="object"&&!Array.isArray(n)?{ok:!0,value:n}:{ok:!1}}catch{return{ok:!1}}}function Si(t,e,n){let r=[...t],[o]=r.splice(e,1);return r.splice(Math.max(0,Math.min(r.length,e+n)),0,o),r}var Vt=(t,e)=>t.filter((n,r)=>r!==e),no=(t,e,n)=>t.map((r,o)=>o===e?{...r,...n}:r),gt=t=>t.length>0?t:void 0;var Py=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],Dy=40,Iy=20,Oy=30,Ly=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],La={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},ro=(t,e,n,r=!1)=>m`<button class="nf-pin" title=${t} ?disabled=${r} @click=${n}>${e}</button>`;function Hy(t){let e=t.doc.settings.favorites??[],n=a=>t.change(l=>l.settings.favorites=gt(a)),r=t.doc.floors,o=t.doc.settings.favorite_floors??{},i=C(t.hass,a=>Py.includes(a.split(".")[0])&&!e.includes(a)),s=(a,l)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${G(t.hass,a)}</span></span>
    ${r.length>1?m`<select title=${t.t("favorite_floor")} .value=${o[a]??""} @change=${c=>{let u=c.target.value,d={...o};u?d[a]=u:delete d[a],t.change(p=>p.settings.favorite_floors=Object.keys(d).length?d:void 0)}}>
          <option value="">${t.t("favorite_all_floors")}</option>
          ${r.map(c=>m`<option value=${c.id} ?selected=${o[a]===c.id}>${c.name}</option>`)}
        </select>`:g}
    ${ro(t.t("move_up"),"\u2191",()=>n(Si(e,l,-1)),l===0)}
    ${ro(t.t("move_down"),"\u2193",()=>n(Si(e,l,1)),l===e.length-1)}
    ${ro(t.t("delete"),"\u2715",()=>n(Vt(e,l)))}
  </div>`;return m`<summary>${t.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:g}</summary>
    ${R(t.t("favorites_hint"))} ${e.map(s)}
    ${e.length<Dy?m`<div class="nf-form">${D(t,t.t("favorites_add"),null,void 0,i,a=>a&&a!=="none"&&!e.includes(a)&&n([...e,a]))}</div>`:g}`}function Cy(t,e){let n=t.doc.settings.outside_hidden??[],r=s=>t.change(a=>a.settings.outside_hidden=gt(s)),o=new Set(t.hass?id(t.hass,t.doc.floors):[]),i=C(t.hass,s=>!n.includes(s)&&o.has(s));return m`${e?Wy(t,e):g}
    <h4>${t.t("outside_hidden")}${n.length>0?m` <span class="nf-lib-count">${n.length}</span>`:g}</h4>
    ${R(t.t("outside_hidden_hint"))}
    ${n.map((s,a)=>m`<div class="nf-row nf-dev-row"><span class="nf-dev-name"><span>${G(t.hass,s)}</span></span>${ro(t.t("delete"),"\u2715",()=>r(Vt(n,a)))}</div>`)}
    <div class="nf-form">${D(t,t.t("outside_hidden_add"),null,void 0,i,s=>s&&s!=="none"&&!n.includes(s)&&r([...n,s]))}</div>`}function Wy(t,e){let n=t.doc.settings.outside_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.outside_view=o)};return m`${R(t.t("outside_view_hint"))}
    ${X(m`<button class="nf-btn" @click=${r}>${t.t("outside_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.outside_view=null)}>${t.t("outside_view_reset")}</button>`:g)}`}function Ny(t){let e=t.doc.settings.own_alerts??[],n=c=>t.change(u=>u.settings.own_alerts=gt(c)),r=(c,u)=>n(no(e,c,u)),o=[["",t.t("own_alert_house")],...t.doc.floors.flatMap(c=>c.rooms.map(u=>[u.id,`${u.name} \xB7 ${c.name}`]))],i=(c,u)=>m`<div class="nf-form nf-own-button">
    ${D(t,t.t("own_alert_entity"),c.entity||null,void 0,C(t.hass,()=>!0),d=>r(u,{entity:d&&d!=="none"?d:""}))}
    ${j(t,t.t("own_alert_state"),c.state??"",d=>r(u,{state:d||null}),{placeholder:t.hass?.states[c.entity]?.state??"on \xB7 <20 \xB7 >80"})}
    ${j(t,t.t("own_alert_text"),c.text,d=>r(u,{text:d||t.t("own_alert_new")}),{wide:!0,maxlength:120})}
    ${O(t,t.t("room"),c.room_id??"",o,d=>r(u,{room_id:d||null}),{wide:!0})}
    ${We(t,t.t("own_alert_color"),c.color??null,"#ffb547",d=>r(u,{color:d}))}
    ${O(t,t.t("own_alert_tap"),c.tap??"",[["",t.t("own_alert_tap_info")],["toggle",t.t("own_alert_tap_toggle")],["room",t.t("own_alert_tap_room")]],d=>r(u,{tap:d||null}))}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Vt(e,u))}>${t.t("delete")}</button></div>
  </div>`,s=t.doc.settings,a=[1,2,3,4,5,6,8,10,12].map(c=>[String(c),String(c)]),l=m`<div class="nf-form">
    ${O(t,t.t("alerts_max"),String(s.alerts_max??3),a,c=>t.change(u=>u.settings.alerts_max=Number(c)===3?void 0:Number(c)))}
    ${O(t,t.t("alerts_rows"),String(s.alerts_rows??1),[["1","1"],["2","2"]],c=>t.change(u=>u.settings.alerts_rows=c==="2"?2:void 0))}
    ${R(t.t("alerts_bar_hint"),"nf-wide")}
  </div>`;return m`<h4>⚠ ${t.t("own_alerts")}</h4>
    ${l} ${R(t.t("own_alerts_hint"))} ${e.map(i)}
    ${e.length<40?X(m`<button class="nf-btn" @click=${()=>n([...e,{id:I("alert"),entity:"",state:null,text:t.t("own_alert_new")}])}>+ ${t.t("own_alert_add")}</button>`):g}`}function Vy(t){let e=t.doc.settings.circuits??[],n=a=>t.change(l=>l.settings.circuits=gt(a)),r=(a,l)=>n(no(e,a,l)),o=t.doc.floors.flatMap(a=>a.rooms.map(l=>({id:l.id,label:t.doc.floors.length>1?`${l.name} \xB7 ${a.name}`:l.name}))),i=a=>o.find(l=>l.id===a)?.label??a,s=(a,l)=>m`<div class="nf-form nf-own-button">
    ${j(t,t.t("circuit_name"),a.name,c=>r(l,{name:c||t.t("circuit_new")}),{wide:!0,maxlength:80})}
    <div class="nf-wide">${a.rooms.map(c=>m`<span class="nf-chip">${i(c)} <button class="nf-btn nf-field-btn" title=${t.t("delete")} @click=${()=>r(l,{rooms:a.rooms.filter(u=>u!==c)})}>✕</button></span>`)}</div>
    ${O(t,t.t("circuit_add_room"),"",[["","\u2013"],...o.filter(c=>!a.rooms.includes(c.id)).map(c=>[c.id,c.label])],c=>c&&r(l,{rooms:[...a.rooms,c]}),{wide:!0})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Vt(e,l))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>🔌 ${t.t("circuits")}</h4>
    ${R(t.t("circuits_hint"))} ${e.map(s)}
    ${e.length<120?X(m`<button class="nf-btn" @click=${()=>n([...e,{id:I("circuit"),name:t.t("circuit_new"),rooms:[]}])}>+ ${t.t("circuit_add")}</button>`):g}`}function By(t){let e=t.doc.settings.calendars??[],n=a=>t.change(l=>l.settings.calendars=gt(a)),r=C(t.hass,a=>a.startsWith("calendar.")&&!e.includes(a)),o=(a,l)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${G(t.hass,a)}</span></span>
    ${ro(t.t("delete"),"\u2715",()=>n(Vt(e,l)))}
  </div>`,i=t.t,s=t.doc.settings.today_days??1;return m`<h4>📅 ${i("today_calendars")}</h4>
    ${R(i("today_calendars_hint"))} ${e.map(o)}
    ${e.length<12?m`<div class="nf-form">${D(t,i("favorites_add"),null,void 0,r,a=>a&&a!=="none"&&!e.includes(a)&&n([...e,a]))}</div>`:g}
    ${e.length?m`<div class="nf-form">
          ${O(t,i("today_days"),String(s),[1,2,3,5,7].map(a=>[String(a),i(a===1?"today_days_one":"today_days_n",{n:a})]),a=>t.change(l=>l.settings.today_days=Number(a)>1?Number(a):void 0))}
        </div>`:g}
    ${Ky(t)}`}function Ky(t){let e=t.t,n=t.doc.settings.forecast??null,r=o=>t.change(i=>i.settings.forecast=o??void 0);return m`<h4>🌦 ${e("forecast")}</h4>
    ${R(e("forecast_hint"))}
    <div class="nf-form">
      ${O(t,e("forecast_days"),n?String(n.days):"0",[0,3,5,7].map(o=>[String(o),o?e("today_days_n",{n:o}):e("forecast_off")]),o=>r(Number(o)>0?{days:Number(o),corner:n?.corner??"top_right"}:null))}
      ${n?O(t,e("forecast_corner"),n.corner,[["top_right",e("clock_top_right")],["top_left",e("clock_top_left")]],o=>r({...n,corner:o==="top_left"?"top_left":"top_right"})):g}
    </div>`}function Gy(t){let e=t.doc.settings.media_presets??[],n=s=>t.change(a=>a.settings.media_presets=gt(s)),r=(s,a)=>n(no(e,s,a)),o=[...new Set(t.doc.floors.flatMap(s=>[...s.placements.map(a=>a.entity_id),...s.furniture.map(a=>a.entity??"")]).filter(s=>s.startsWith("media_player.")))],i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${j(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||"Radio"}),{maxlength:60})}
    ${j(t,t.t("preset_type"),s.type,l=>r(a,{type:l||"music"}),{title:t.t("preset_type_hint")})}
    ${j(t,t.t("preset_content"),s.content,l=>r(a,{content:l}),{wide:!0,title:t.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    ${o.length>1?m`<div class="nf-sub nf-wide">${t.t("preset_speakers")}</div>
          ${o.map(l=>L(t,G(t.hass,l),!!s.speakers?.includes(l),c=>r(a,{speakers:gt(c?[...s.speakers??[],l]:(s.speakers??[]).filter(u=>u!==l))}),{wide:!1}))}`:g}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>n(Vt(e,a))}>${t.t("delete")}</button></div>
  </div>`;return m`<h4>${t.t("presets")}</h4>
    ${R(t.t("presets_hint"))}
    <datalist id="nf-preset-types">${Ly.map(s=>m`<option value=${s}></option>`)}</datalist>
    ${e.map(i)}
    ${e.length<Oy?X(m`<button class="nf-btn" @click=${()=>n([...e,{id:I("preset"),label:"Radio",type:"music",content:""}])}>+ ${t.t("preset_add")}</button>`):g}`}function Ha(t,e,n){let r=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',o=i=>{let s=i.target;s.setCustomValidity("");let a=th(s.value);if(a.ok)return n(a.value);s.setCustomValidity(t.t("own_data_bad")),s.reportValidity()};return m`<label class="nf-field nf-wide" title=${t.t("own_data_hint")}
    >${t.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${r} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${o}></textarea>
  </label>`}function Uy(t){let e=t.doc.settings.buttons??[],n=s=>t.change(a=>a.settings.buttons=gt(s)),r=(s,a)=>n(no(e,s,a)),o=jo.map(s=>[s,t.t(`own_action_${s}`)]),i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${j(t,t.t("own_button_label"),s.label,l=>r(a,{label:l||t.t("own_button_new")}),{maxlength:60})}
    ${O(t,t.t("own_button_action"),s.action,o,l=>r(a,{action:l}))} ${Nt(t,s.icon??null,l=>r(a,{icon:l}))}
    ${s.action!=="fire_dom_event"?j(t,t.t(`own_target_${s.action}`),s.target??"",l=>r(a,{target:l||null}),{wide:!0,placeholder:La[s.action]}):g}
    ${s.action==="service"||s.action==="fire_dom_event"?Ha(t,s,l=>r(a,{data:l})):g}
    ${D(t,t.t("own_button_state"),s.state_entity??null,void 0,C(t.hass,l=>/^(switch|light|input_boolean|binary_sensor|fan|cover|media_player|climate|lock|person|device_tracker)\./.test(l)),l=>r(a,{state_entity:l&&l!=="none"?l:null}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>n(Si(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>n(Vt(e,a))}>${t.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${t.t("own_buttons")}</h4>
    ${R(t.t("own_buttons_hint"))} ${e.map(i)}
    ${e.length<Iy?X(m`<button class="nf-btn" @click=${()=>n([...e,{id:I("btn"),label:t.t("own_button_new"),action:"navigate",target:null}])}>+ ${t.t("own_button_add")}</button>`):g}`}function jy(t){let e=t.doc.settings.room_facts_off??[],n=["sun","comfort","air","circuits"].map(r=>L(t,t.t(`room_fact_${r}`),!e.includes(r),o=>t.change(i=>i.settings.room_facts_off=gt(o?e.filter(s=>s!==r):[...e,r]))));return m`<h4>${t.t("room_facts")}</h4><div class="nf-form">${n}</div>`}function nh(t){return m`<details class="nf-section">${Hy(t)} ${Uy(t)} ${Ny(t)} ${Vy(t)} ${By(t)} ${Gy(t)} ${jy(t)}</details>`}function rh(t,e){return m`<details class="nf-section">
    <summary>🌳 ${t.t("outside_area")}</summary>
    ${Cy(t,e)}
  </details>`}function oh(t,e){let n=t.doc.settings.start_view??null,r=()=>{let o=e();o&&t.change(i=>i.settings.start_view=o)};return m`<details class="nf-section">
    <summary>${t.t("start_view")}</summary>
    ${R(t.t("start_view_hint"))}
    ${X(m`<button class="nf-btn nf-primary" @click=${r}>${t.t("start_view_set")}</button>`,n?m`<button class="nf-btn" @click=${()=>t.change(o=>o.settings.start_view=null)}>${t.t("start_view_reset")}</button>`:g)}
    ${n?m`${R(t.t("start_view_saved"))} ${R(t.t("start_view_card"))}<code class="nf-code">${eh(n)}</code>`:g}
  </details>`}function ih(t){let e=t.doc.presence.map(l=>l.person),n=[...new Set([...Object.keys(t.hass?.states??{}).filter(l=>l.startsWith("person.")).sort(),...e])],r=C(t.hass,me),o=t.doc.floors.flatMap(l=>l.rooms.map(c=>({id:c.id,label:t.doc.floors.length>1?`${l.name} \xB7 ${c.name}`:c.name}))),i=(l,c)=>t.replace({...structuredClone(t.doc),presence:Jd(t.doc.presence,l,c)}),s=l=>{let c=t.doc.presence.find(d=>d.person===l),u=!l.startsWith("person.");return m`${D(t,`${G(t.hass,l)} \xB7 ${t.t("presence_sensor")}`,c?.sensor??null,void 0,Qd(r,l),d=>i(l,{sensor:d}))}
      <label class="nf-field">${t.t("presence_room")}
        <select ?disabled=${!t.admin} .value=${c?.room??""} @change=${d=>i(l,{room:d.target.value||null})}>
          <option value="">${t.t("presence_room_none")}</option>
          ${o.map(d=>m`<option value=${d.id} ?selected=${c?.room===d.id}>${d.label}</option>`)}
        </select>
      </label>
      ${u?m`<button class="nf-btn" ?disabled=${!t.admin} @click=${()=>t.replace({...structuredClone(t.doc),presence:t.doc.presence.filter(d=>d.person!==l)})}>${t.t("delete")}</button>`:g}`},a=C(t.hass,l=>/^(input_boolean|binary_sensor|device_tracker)\./.test(l)&&!n.includes(l));return m`<details class="nf-section">
    <summary>${t.t("presence")}</summary>
    <div class="nf-form">${L(t,t.t("presence_overview"),!!t.doc.settings.presence_overview,l=>t.change(c=>{c.settings.presence_overview=l}))}</div>
    ${R(t.t("presence_overview_hint"))}
    <div class="nf-form">${n.length>0?n.map(s):m`<p class="nf-sub nf-wide">${t.t("no_persons")}</p>`}</div>
    <div class="nf-form">${D(t,t.t("presence_add"),null,void 0,a,l=>l&&l!=="none"&&t.replace({...structuredClone(t.doc),presence:[...t.doc.presence,{person:l,sensor:null}]}))}</div>
    ${R(t.t("presence_hint"))}
  </details>`}function sh(t,e){return m`<details class="nf-section">
    <summary>${t.t("ble")}</summary>
    ${R(t.t("ble_hint"))}
    <nf-ble-locate .host=${t} .doc=${e}></nf-ble-locate>
  </details>`}var{I:W2}=Oc;var ah=t=>t.strings===void 0;var oo=(t,e)=>{let n=t._$AN;if(n===void 0)return!1;for(let r of n)r._$AO?.(e,!1),oo(r,e);return!0},Mi=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while(n?.size===0)},lh=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Yy(e)}};function Zy(t){this._$AN!==void 0?(Mi(this),this._$AM=t,lh(this)):this._$AM=t}function qy(t,e=!1,n=0){let r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(r))for(let i=n;i<r.length;i++)oo(r[i],!1),Mi(r[i]);else r!=null&&(oo(r,!1),Mi(r));else oo(this,t)}var Yy=t=>{t.type==$i.CHILD&&(t._$AP??=qy,t._$AQ??=Zy)},Ri=class extends Cn{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,r){super._$AT(e,n,r),lh(this),this.isConnected=e._$AU}_$AO(e,n=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),n&&(oo(this,e),Mi(this))}setValue(e){if(ah(this._$Ct))this._$Ct._$AI(e,this);else{let n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};var Ca=new WeakMap,ch=eo(class extends Ri{render(t){return g}update(t,[e]){let n=e!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),g}rt(t){if(this.G!==void 0)if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,n=Ca.get(e);n===void 0&&(n=new WeakMap,Ca.set(e,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Ca.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var uh=t=>t.trim().toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9_-]+/g,"_").replace(/^_+|_+$/g,"").slice(0,40);function dh(t){let e=t.t,n=t.doc.settings.card_templates??{},r=Object.keys(n),o=a=>t.change(l=>{l.settings.card_templates=Object.keys(a).length?a:void 0});t.loadCardEditor?.();let i=a=>{t.hass?.callService("nextfloor","reload_screens",a?{template:a}:{})},s=a=>{let l=uh(a.value);!l||l in n||r.length>=20||(a.value="",o({...n,[l]:{}}))};return m`<details class="nf-section">
    <summary>${e("card_templates")}${r.length?m` <span class="nf-lib-count">${r.length}</span>`:g}</summary>
    ${R(e("card_templates_hint"))}
    ${r.map(a=>m`<details class="nf-section">
        <summary>${a}</summary>
        <nextfloor-card-editor
          .hass=${t.hass}
          ${ch(l=>l&&l.setConfig({type:"custom:nextfloor-card",...n[a]}))}
          @config-changed=${l=>{l.stopPropagation();let{type:c,template:u,...d}=l.detail.config;o({...n,[a]:d})}}
        ></nextfloor-card-editor>
        ${t.admin?m`<div class="nf-actions">
              <button class="nf-btn" @click=${()=>i(a)}>${e("template_reload")}</button>
              <button class="nf-btn nf-danger" @click=${()=>o(Object.fromEntries(Object.entries(n).filter(([l])=>l!==a)))}>${e("delete")}</button>
            </div>`:g}
        ${R(e("template_use",{name:a}))}
      </details>`)}
    ${t.admin?m`<div class="nf-form">
            <label class="nf-field nf-wide">${e("template_name")}<input type="text" maxlength="40" placeholder="kitchen_tablet" @keydown=${a=>a.key==="Enter"&&s(a.target)} /></label>
          </div>
          <div class="nf-actions">
            <button class="nf-btn" @click=${a=>s(a.target.closest("details")?.querySelector("input[type=text]")??document.createElement("input"))}>${e("template_add")}</button>
            <button class="nf-btn" @click=${()=>i()}>${e("template_reload_all")}</button>
          </div>`:g}
  </details>`}var Ei=.05,Xy=(t,e)=>t.length===e.length&&t.every((n,r)=>Math.abs(n[0]-e[r][0])<.001&&Math.abs(n[1]-e[r][1])<.001),un=t=>new Map(t.map(e=>[e.id,e]));function Jy(t,e,n,r){let o=e.name,[i,s]=[un(t.rooms),un(e.rooms)];for(let h of e.rooms){let f=i.get(h.id);f?(f.name!==h.name&&n.push({kind:"room_renamed",floor:o,name:h.name,detail:f.name}),Xy(f.points,h.points)||n.push({kind:"room_reshaped",floor:o,name:h.name,detail:Math.round((Me(h.points)-Me(f.points))*10)/10})):n.push({kind:"room_added",floor:o,name:h.name})}for(let h of t.rooms)s.has(h.id)||n.push({kind:"room_removed",floor:o,name:h.name});let[a,l]=[un(t.openings),un(e.openings)];for(let h of e.openings)a.has(h.id)||n.push({kind:"opening_added",floor:o,name:h.type,detail:r(h.room_id)});for(let h of t.openings)l.has(h.id)||n.push({kind:"opening_removed",floor:o,name:h.type,detail:r(h.room_id)});let[c,u]=[un(t.furniture),un(e.furniture)];for(let h of e.furniture){let f=c.get(h.id);f?(Math.hypot(h.x-f.x,h.z-f.z)>Ei||Math.abs(h.rotation-f.rotation)>1||Math.abs(h.w-f.w)>Ei||Math.abs(h.d-f.d)>Ei)&&n.push({kind:"furniture_moved",floor:o,name:h.name||h.type}):n.push({kind:"furniture_added",floor:o,name:h.name||h.type})}for(let h of t.furniture)u.has(h.id)||n.push({kind:"furniture_removed",floor:o,name:h.name||h.type});let[d,p]=[new Map(t.placements.map(h=>[h.entity_id,h])),new Map(e.placements.map(h=>[h.entity_id,h]))];for(let h of e.placements){let f=d.get(h.entity_id);f?Math.hypot(h.x-f.x,h.z-f.z)>Ei&&n.push({kind:"device_moved",floor:o,name:h.entity_id}):n.push({kind:"device_added",floor:o,name:h.entity_id})}for(let h of t.placements)p.has(h.entity_id)||n.push({kind:"device_removed",floor:o,name:h.entity_id})}function hh(t,e){let n=[],r=un(t.floors),o=new Map([...t.floors,...e.floors].flatMap(a=>a.rooms.map(l=>[l.id,l.name]))),i=a=>o.get(a)??"";for(let a of e.floors){let l=r.get(a.id);l?Jy(l,a,n,i):n.push({kind:"floor_added",floor:a.name,name:a.name})}let s=new Set(e.floors.map(a=>a.id));for(let a of t.floors)s.has(a.id)||n.push({kind:"floor_removed",floor:a.name,name:a.name});return n}var dn=(t,e)=>t.getUint16(e,!0),io=(t,e)=>t.getUint32(e,!0);function ph(t){let e=new DataView(t.buffer,t.byteOffset,t.byteLength),n=-1;for(let a=t.length-22;a>=Math.max(0,t.length-65557);a--)if(io(e,a)===101010256){n=a;break}if(n<0)throw new Error("not_zip");let r=dn(e,n+10),o=io(e,n+16),i=[],s=new TextDecoder;for(let a=0;a<r;a++){if(io(e,o)!==33639248)throw new Error("not_zip");let l=dn(e,o+10),c=io(e,o+20),u=dn(e,o+28),d=dn(e,o+30),p=dn(e,o+32),h=io(e,o+42),f=s.decode(t.subarray(o+46,o+46+u)),_=h+30+dn(e,h+26)+dn(e,h+28);i.push({name:f,method:l,compressedSize:c,offset:_}),o+=46+u+d+p}return i}async function fh(t,e){let n=t.subarray(e.offset,e.offset+e.compressedSize);if(e.method===0)return n;if(e.method!==8)throw new Error("zip_method");let r=new Blob([n.slice()]).stream().pipeThrough(new DecompressionStream("deflate-raw"));return new Uint8Array(await new Response(r).arrayBuffer())}var Qy={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"},e0=t=>t.replace(/&(#x?[0-9a-f]+|\w+);/gi,(e,n)=>n[0]==="#"?String.fromCodePoint(Number.parseInt(n.slice(n[1]==="x"?2:1),n[1]==="x"?16:10)):Qy[n]??e);function t0(t){let e={};for(let n of t.matchAll(/([\w:.-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g))e[n[1]]=e0(n[2]??n[3]);return e}function n0(t){let e=[],n=null;for(let r of t.matchAll(/<(\/?)(level|room|point|wall|doorOrWindow|pieceOfFurniture)\b([^>]*?)(\/?)>/g)){let[,o,i,s,a]=r;if(o){i==="room"&&(n=null);continue}let l=t0(s);if(i==="point"){n&&n.points.push([Number(l.x)/100,Number(l.y)/100]);continue}let c={name:i,attrs:l,...i==="room"?{points:[]}:{}};e.push(c),i==="room"&&!a&&(n=c)}return e}var oe=(t,e,n)=>Number.isFinite(Number(t[e]))&&t[e]!==void 0?Number(t[e]):n,Te=t=>Math.round(t*1e3)/1e3;function mh(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.max(0,Math.min(i,((t[0]-e[0])*r+(t[1]-e[1])*o)/i)),a=[e[0]+r*s/i,e[1]+o*s/i];return{dist:Math.hypot(t[0]-a[0],t[1]-a[1]),along:s,length:i}}function r0(t){let e=`${t.name??""} ${t.catalogId??""}`.toLowerCase();return/garage|sectional|rolltor/.test(e)?"garage":/door|tür|tuer|porte|puerta|deur|haustür/.test(e)&&!/window|fenster/.test(e)?"door":"window"}function o0(t,e){let n=t.length,r=t.map((o,i)=>{let s=t[(i+1)%n],[a,l]=[s[0]-o[0],s[1]-o[1]],c=Math.hypot(a,l)||1e-9,u=[a/c,l/c],d=[(o[0]+s[0])/2,(o[1]+s[1])/2],p=[0,0];for(let h of e){let[f,_]=[h.b[0]-h.a[0],h.b[1]-h.a[1]],b=Math.hypot(f,_)||1e-9;if(Math.abs((u[0]*_-u[1]*f)/b)>.05)continue;let w=(h.a[0]-d[0])*-u[1]+(h.a[1]-d[1])*u[0],v=((d[0]-h.a[0])*f+(d[1]-h.a[1])*_)/b;if(!(Math.abs(w)>h.thickness/2+.06||v<-.05||v>b+.05)){p=[-u[1]*w,u[0]*w];break}}return{p:[o[0]+p[0],o[1]+p[1]],dir:u}});return r.map((o,i)=>{let s=r[(i-1+n)%n],a=s.dir[0]*o.dir[1]-s.dir[1]*o.dir[0];if(Math.abs(a)<1e-6)return o.p;let l=((o.p[0]-s.p[0])*o.dir[1]-(o.p[1]-s.p[1])*o.dir[0])/a;return[s.p[0]+s.dir[0]*l,s.p[1]+s.dir[1]*l]})}function i0(t){let e=Ot(),n={floors:0,rooms:0,openings:0,walls:0,furniture:0},r=t.filter(l=>l.name==="level"),o=r.length?r.map(l=>l.attrs.id??""):[""],i=t.filter(l=>l.name==="wall"),s=i.length?Math.max(...i.map(l=>oe(l.attrs,"height",250)))/100:2.5;return(r.length?[...r].sort((l,c)=>oe(l.attrs,"elevation",0)-oe(c.attrs,"elevation",0)||oe(l.attrs,"elevationIndex",0)-oe(c.attrs,"elevationIndex",0)):[{name:"level",attrs:{id:""}}]).forEach((l,c)=>{let u=l.attrs.id??"",d=b=>r.length?(b.attrs.level??o[0])===u:!0,p=Ke(I("floor"),l.attrs.name||(c===0?"Erdgeschoss":`Etage ${c+1}`),Te(oe(l.attrs,"elevation",0)/100));p.height=Te(oe(l.attrs,"height",s*100)/100);let h=i.filter(d).map(b=>({a:[oe(b.attrs,"xStart",0)/100,oe(b.attrs,"yStart",0)/100],b:[oe(b.attrs,"xEnd",0)/100,oe(b.attrs,"yEnd",0)/100],thickness:oe(b.attrs,"thickness",10)/100})),f=t.filter(b=>b.name==="room"&&d(b)&&(b.points?.length??0)>=3).map((b,w)=>({id:I("room"),name:b.attrs.name||`Raum ${w+1}`,area_id:null,points:o0(b.points,h).map(([v,y])=>[Te(v),Te(y)]),floor_material:"wood",panel:[]}));p.rooms=f;for(let b of t.filter(w=>w.name==="doorOrWindow"&&d(w))){let w=[oe(b.attrs,"x",0)/100,oe(b.attrs,"y",0)/100],v=Math.max(.6,oe(b.attrs,"depth",30)/100+.3),y=null;for(let P of f)P.points.forEach((z,H)=>{let N=mh(w,z,P.points[(H+1)%P.points.length]);N.dist<=v&&(!y||N.dist<y.dist)&&(y={room:P,edge:H,...N})});if(!y)continue;let{room:x,edge:k,along:S,length:$}=y,E=r0(b.attrs),T=Math.min($,Math.max(.3,oe(b.attrs,"width",90)/100));p.openings.push({id:I("op"),room_id:x.id,edge:k,offset:Te(Math.min($-T/2,Math.max(T/2,S))),width:Te(T),type:E,sill:E==="window"?Te(oe(b.attrs,"elevation",90)/100):0,height:Te(oe(b.attrs,"height",E==="window"?130:205)/100),hinge:"left",leaves:T>1.4?2:1,swing:"in",cover:null,contact:null,contact2:null,tilt:null})}let _=[];for(let b of i.filter(d)){let w=[oe(b.attrs,"xStart",0)/100,oe(b.attrs,"yStart",0)/100],v=[oe(b.attrs,"xEnd",0)/100,oe(b.attrs,"yEnd",0)/100];if(Math.hypot(v[0]-w[0],v[1]-w[1])<.1)continue;let y=Math.max(.15,oe(b.attrs,"thickness",10)/100),x=T=>f.some(P=>P.points.some((z,H)=>mh(T,z,P.points[(H+1)%P.points.length]).dist<y)),k=Math.hypot(v[0]-w[0],v[1]-w[1]),S=Math.max(12,Math.ceil(k/.1)),$=T=>[w[0]+(v[0]-w[0])*T/S,w[1]+(v[1]-w[1])*T/S],E=Array.from({length:S+1},(T,P)=>!x($(P)));for(let T=0;T<=S;){if(!E[T]){T++;continue}let P=T;for(;P+1<=S&&E[P+1];)P++;let[z,H]=[$(Math.max(0,T-1)),$(Math.min(S,P+1))];Math.hypot(H[0]-z[0],H[1]-z[1])>=.3&&_.push({id:I("wall"),a:[Te(z[0]),Te(z[1])],b:[Te(H[0]),Te(H[1])],thickness:Te(oe(b.attrs,"thickness",10)/100),height:b.attrs.height?Te(oe(b.attrs,"height",250)/100):null}),T=P+1}}p.walls=_,n.rooms+=f.length,n.openings+=p.openings.length,n.walls+=_.length,(f.length||_.length)&&e.floors.push(p)}),n.floors=e.floors.length,n.furniture=t.filter(l=>l.name==="pieceOfFurniture").length,{building:Ie(e),report:n}}async function gh(t){let e=ph(t).find(o=>o.name==="Home.xml");if(!e)throw new Error("sh3d_no_xml");let n=new TextDecoder().decode(await fh(t,e)),r=i0(n0(n));if(r.report.rooms===0&&r.report.walls===0)throw new Error("sh3d_empty");return r}function s0(t){let e=t.split(/\r?\n/),n=[];for(let r=0;r+1<e.length;r+=2){let o=Number(e[r].trim());Number.isFinite(o)&&n.push([o,e[r+1].trim()])}return n}function a0(t){let e=t.findIndex(([r,o])=>r===9&&o==="$INSUNITS"),n=e>=0?Number(t[e+1]?.[1]):NaN;return{1:.0254,2:.3048,4:.001,5:.01,6:1}[n]??null}function l0(t){let e=s0(t),n=a0(e),r=e.findIndex(([s,a],l)=>s===2&&a==="ENTITIES"&&e[l-1]?.[1]==="SECTION"),o=[];if(r<0)return{shapes:o,unit:n};let i=r+1;for(;i<e.length&&!(e[i][0]===0&&e[i][1]==="ENDSEC");){let[s,a]=e[i];if(s!==0){i++;continue}let l=i+1;for(;l<e.length&&e[l][0]!==0;)l++;let c=e.slice(i+1,l);if(a==="LINE"){let u=p=>Number(c.find(([h])=>h===p)?.[1]??NaN),d=[[u(10),u(20)],[u(11),u(21)]];d.every(([p,h])=>Number.isFinite(p)&&Number.isFinite(h))&&o.push({points:d,closed:!1})}else if(a==="LWPOLYLINE"){let u=c.filter(([f])=>f===10).map(([,f])=>Number(f)),d=c.filter(([f])=>f===20).map(([,f])=>Number(f)),p=Number(c.find(([f])=>f===70)?.[1]??0),h=u.map((f,_)=>[f,d[_]]).filter(([f,_])=>Number.isFinite(f)&&Number.isFinite(_));h.length>=2&&o.push({points:h,closed:(p&1)===1})}i=l}return{shapes:o,unit:n}}var _h=t=>Math.round(t*1e3)/1e3;function bh(t){let{shapes:e,unit:n}=l0(t);if(!e.length)throw new Error("dxf_empty");let r=e.flatMap(h=>h.points),o=Math.max(Math.max(...r.map(h=>h[0]))-Math.min(...r.map(h=>h[0])),Math.max(...r.map(h=>h[1]))-Math.min(...r.map(h=>h[1]))),i=n??(o>2e3?.001:o>200?.01:1),s=Math.min(...r.map(h=>h[0])),a=Math.max(...r.map(h=>h[1])),l=([h,f])=>[_h((h-s)*i),_h((a-f)*i)],c=Ke(I("floor"),"Erdgeschoss",0),u=[],d=[];for(let h of e){let f=h.points.map(l);if(h.closed&&f.length>=3)u.push({id:I("room"),name:`Raum ${u.length+1}`,area_id:null,points:f,floor_material:"wood",panel:[]});else for(let _=0;_+1<f.length;_++)Math.hypot(f[_+1][0]-f[_][0],f[_+1][1]-f[_][1])>.05&&d.push({id:I("wall"),a:f[_],b:f[_+1]})}c.rooms=u,c.walls=d;let p=Ot();return p.floors=[c],{building:Ie(p),report:{floors:1,rooms:u.length,openings:0,walls:d.length,furniture:0}}}var et=t=>Math.round(t*100)/100;function c0(t,e){let n=t.category;return typeof n=="string"?n:n&&typeof n=="object"?Object.keys(n)[0]??e:e}function u0(t,e){let n=t,r=n?.transform,o=n?.dimensions;if(!n||!Array.isArray(r)||r.length<16||!Array.isArray(o)||o.length<3)return null;let i=a=>Number(a),s=Math.hypot(i(r[0]),i(r[2]));return![...r.slice(0,16),...o.slice(0,3)].every(a=>Number.isFinite(i(a)))||s<1e-6?null:{centre:[i(r[12]),i(r[13]),i(r[14])],dir:[i(r[0])/s,i(r[2])/s],size:[i(o[0]),i(o[1]),i(o[2])],kind:c0(n,e)}}var Bn=(t,e,n)=>(Array.isArray(t[e])?t[e]:[]).map(r=>u0(r,n)).filter(r=>!!r);function d0(t){if(t.length<3)return null;let e=t.map(l=>{let c=l.size[0]/2;return[[l.centre[0]-l.dir[0]*c,l.centre[2]-l.dir[1]*c],[l.centre[0]+l.dir[0]*c,l.centre[2]+l.dir[1]*c]]}),n=(l,c)=>Math.hypot(l[0]-c[0],l[1]-c[1]),r=.4,o=new Set([0]),i=[e[0][0]],s=[0],a=e[0][1];for(;o.size<t.length;){let l=null;for(let d=0;d<t.length;d++)if(!o.has(d))for(let p of[!1,!0]){let h=n(a,e[d][p?1:0]);h<=r&&(!l||h<l.d)&&(l={i:d,flip:p,d:h})}if(!l)break;let[c,u]=l.flip?[e[l.i][1],e[l.i][0]]:[e[l.i][0],e[l.i][1]];i.push([(a[0]+c[0])/2,(a[1]+c[1])/2]),s.push(l.i),o.add(l.i),a=u}return o.size<t.length||n(a,i[0])>r?null:(i[0]=[(a[0]+i[0][0])/2,(a[1]+i[0][1])/2],{points:i,edgeWall:s})}function yh(t){let e=[],n=[];for(let a of t){let l=a.size[0]/2;for(let c of[-1,1])e.push(a.centre[0]+c*a.dir[0]*l),n.push(a.centre[2]+c*a.dir[1]*l)}let[r,o,i,s]=[Math.min(...e),Math.max(...e),Math.min(...n),Math.max(...n)];return[[r,i],[o,i],[o,s],[r,s]]}function h0(t,e,n){let[r,o]=[n[0]-e[0],n[1]-e[1]],i=Math.hypot(r,o)||1e-9,s=Math.min(i,Math.max(0,((t[0]-e[0])*r+(t[1]-e[1])*o)/i));return{dist:Math.hypot(t[0]-(e[0]+r/i*s),t[1]-(e[1]+o/i*s)),along:s,length:i}}var p0={sofa:"sofa",bed:"bed",table:"table",chair:"chair",bathtub:"bathtub",toilet:"wc",sink:"sink",refrigerator:"fridge",stove:"stove",oven:"stove",dishwasher:"dishwasher",washerDryer:"washer",storage:"tall_cabinet",television:"tv_board"};function wh(t){let e=t;return!e||typeof e!="object"||"floors"in e||"settings"in e?!1:(Array.isArray(e.rooms)?e.rooms:[e]).some(r=>r&&Array.isArray(r.walls)&&Bn(r,"walls","wall").length>0)}function vh(t){let e=t,r=(Array.isArray(e.rooms)?e.rooms:[e]).filter(b=>b&&typeof b=="object").map(b=>({walls:Bn(b,"walls","wall"),doors:[...Bn(b,"doors","door"),...Bn(b,"openings","opening")],windows:Bn(b,"windows","window"),objects:Bn(b,"objects","object")})).filter(b=>b.walls.length);if(!r.length)throw new Error("roomplan_empty");let o=r.flatMap(b=>b.walls),i=Math.min(...o.map(b=>b.centre[1]-b.size[1]/2)),s=r.map(b=>d0(b.walls)),a=r.flatMap((b,w)=>s[w]?.points??yh(b.walls)),[l,c]=[Math.min(...a.map(b=>b[0]))-.5,Math.min(...a.map(b=>b[1]))-.5],u=([b,w])=>[et(b-l),et(w-c)],d=Ke(I("floor"),"Erdgeschoss",0);d.height=et(Math.max(2.2,Math.min(4,Math.max(...o.map(b=>b.size[1])))));let p=[],h=[];r.forEach((b,w)=>{let y=(s[w]?.points??yh(b.walls)).map(u),x={id:I("room"),name:`Raum ${w+1}`,area_id:null,points:y,floor_material:"wood",panel:[]};p.push(x);for(let k of[...b.doors.map(S=>({v:S,window:!1})),...b.windows.map(S=>({v:S,window:!0}))]){let S=[k.v.centre[0]-l,k.v.centre[2]-c],$=null;if(y.forEach((z,H)=>{let N=h0(S,z,y[(H+1)%y.length]);N.dist<=.6&&(!$||N.dist<$.dist)&&($={edge:H,...N})}),!$)continue;let E=$,T=Math.min(E.length,Math.max(.3,k.v.size[0])),P=k.v.kind==="opening";d.openings.push({id:I("op"),room_id:x.id,edge:E.edge,offset:et(Math.min(E.length-T/2,Math.max(T/2,E.along))),width:et(T),type:k.window?"window":"door",sill:k.window?et(Math.max(0,k.v.centre[1]-k.v.size[1]/2-i)):0,height:et(k.v.size[1]),hinge:"left",leaves:T>1.4?2:1,swing:"in",...P?{style:"passage"}:{},cover:null,contact:null,contact2:null,tilt:null})}for(let k of b.objects){let S=p0[k.kind];if(!S)continue;let[$,E,T]=[k.size[0],k.size[2],k.size[1]];$<.1||E<.1||h.push({id:I("f"),type:S,x:et(k.centre[0]-l),z:et(k.centre[2]-c),rotation:Math.round((Math.atan2(k.dir[1],k.dir[0])*180/Math.PI+360)%360),w:et($),d:et(E),h:et(T),variant:null,entity:null,power:null})}}),d.rooms=p,d.furniture=h;let f=Ot();f.floors=[d];let _=r.reduce((b,w)=>b+w.objects.length,0)-h.length;return{building:Ie(f),report:{floors:1,rooms:p.length,openings:d.openings.length,walls:0,furniture:_}}}var so=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)&&"ref"in t;function f0(t){let e=0,n=()=>{for(;t[e]===" ";)e++;let o=t[e];if(o==="("){e++;let l=[];for(;e<t.length&&t[e]!==")";){for(l.push(n());t[e]===" ";)e++;t[e]===","&&e++}return e++,l}if(o==="'"){let l="";for(e++;e<t.length;)if(t[e]==="'"&&t[e+1]==="'")l+="'",e+=2;else if(t[e]==="'"){e++;break}else l+=t[e++];return m0(l)}if(o==="#"){let l=/^#(\d+)/.exec(t.slice(e));return e+=l[0].length,{ref:Number(l[1])}}if(o==="$"||o==="*")return e++,null;let i=/^[^,()]+/.exec(t.slice(e)),s=i?i[0].trim():"";if(e+=i?i[0].length:1,t[e]==="(")return n();let a=Number(s);return Number.isFinite(a)&&s!==""?a:s},r=[];for(;e<t.length;){for(r.push(n());t[e]===" ";)e++;if(t[e]===",")e++;else break}return r}function m0(t){return t.replace(/\\X2\\([0-9A-Fa-f]+)\\X0\\/g,(e,n)=>String.fromCharCode(...(n.match(/.{4}/g)??[]).map(r=>parseInt(r,16)))).replace(/\\S\\(.)/g,(e,n)=>String.fromCharCode(n.charCodeAt(0)+128))}function g0(t){let e=new Map,n=t.slice(Math.max(0,t.indexOf("DATA;")));for(let r of n.matchAll(/#(\d+)\s*=\s*([A-Z0-9_]+)\s*\(([\s\S]*?)\)\s*;(?=\s*(?:#|ENDSEC))/g))e.set(Number(r[1]),{type:r[2],args:f0(r[3])});return e}var kh={x:0,y:0,z:0,c:1,s:0},xh=(t,e)=>({x:t.x+t.c*e.x-t.s*e.y,y:t.y+t.s*e.x+t.c*e.y,z:t.z+e.z,c:t.c*e.c-t.s*e.s,s:t.s*e.c+t.c*e.s});function $h(t){let e=g0(t);if(!e.size)throw new Error("ifc_empty");let n=$=>so($)?e.get($.ref):void 0,r=$=>typeof $=="number"?$:NaN,o=$=>(n($)?.args[0]??[]).map(E=>r(E)),i=[...e.values()].find($=>$.type==="IFCSIUNIT"&&$.args[1]===".LENGTHUNIT."),s=i?{".MILLI.":.001,".CENTI.":.01,".DECI.":.1}[String(i.args[2])]??1:1,a=$=>{let E=n($);if(!E)return kh;let[T=0,P=0,z=0]=o(E.args[0]),H=n(E.type==="IFCAXIS2PLACEMENT3D"?E.args[2]:E.args[1]),[N=1,B=0]=(H?.args[0]??[]).map(ee=>r(ee)),J=Math.hypot(N,B)||1;return{x:T||0,y:P||0,z:z||0,c:N/J,s:B/J}},l=($,E=0)=>{let T=n($);return!T||T.type!=="IFCLOCALPLACEMENT"||E>30?kh:xh(l(T.args[0],E+1),a(T.args[1]))},c=$=>{for(let E of n($)?.args[2]??[])for(let T of n(E)?.args[3]??[]){let P=n(T);if(P?.type!=="IFCEXTRUDEDAREASOLID")continue;let z=n(P.args[0]),H=xh(a(P.args[1]),a(z?.args[2])),N=[];if(z?.type==="IFCRECTANGLEPROFILEDEF"){let[B,J]=[r(z.args[3])/2,r(z.args[4])/2];N=[[-B,-J],[B,-J],[B,J],[-B,J]]}else if(z?.type==="IFCARBITRARYCLOSEDPROFILEDEF"){let B=n(z.args[2]);B?.type==="IFCPOLYLINE"&&(N=(B.args[0]??[]).map(J=>o(J)))}if(N=N.filter(B=>Number.isFinite(B[0])&&Number.isFinite(B[1])),N.length>3&&Math.hypot(N[0][0]-N[N.length-1][0],N[0][1]-N[N.length-1][1])<1e-6&&N.pop(),N.length>=3)return N.map(([B,J])=>[H.x+H.c*B-H.s*J,H.y+H.s*B+H.c*J])}return null},u=new Map;for(let[,$]of e){if($.type==="IFCRELAGGREGATES"&&so($.args[4]))for(let E of $.args[5]??[])so(E)&&u.set(E.ref,$.args[4].ref);if($.type==="IFCRELCONTAINEDINSPATIALSTRUCTURE"&&so($.args[5]))for(let E of $.args[4]??[])so(E)&&u.set(E.ref,$.args[5].ref)}let d=[...e].filter(([,$])=>$.type==="IFCBUILDINGSTOREY").map(([$,E])=>({id:$,name:String(E.args[7]||E.args[2]||"")||null,elevation:r(E.args[9])*s}));d.sort(($,E)=>($.elevation||0)-(E.elevation||0));let p=[];for(let[$,E]of e){if(E.type!=="IFCSPACE")continue;let T=c(E.args[6]);if(!T)continue;let P=l(E.args[5]),z=T.map(([N,B])=>[(P.x+P.c*N-P.s*B)*s,(P.y+P.s*N+P.c*B)*s]),H=String(E.args[7]||E.args[2]||"")||`Raum ${p.length+1}`;p.push({storey:u.get($)??null,name:H,ring:z})}if(!p.length)throw new Error("ifc_empty");let h=[];for(let[$,E]of e){if(E.type!=="IFCDOOR"&&E.type!=="IFCWINDOW")continue;let[T,P]=[r(E.args[8])*s,r(E.args[9])*s];if(!(P>.2&&P<12&&T>.2&&T<8))continue;let z=l(E.args[5]),H=P/s/2;h.push({storey:u.get($)??null,window:E.type==="IFCWINDOW",at:[(z.x+z.c*H)*s,(z.y+z.s*H)*s],width:P,height:T,z:z.z*s})}let f=p.flatMap($=>$.ring),_=Math.min(...f.map($=>$[0])),b=Math.max(...f.map($=>$[1])),w=$=>Math.round($*1e3)/1e3,v=[],y=new Map;if(d.filter($=>p.some(E=>E.storey===$.id)).forEach(($,E)=>{let T=Ke(I("floor"),$.name??`Etage ${E+1}`,Number.isFinite($.elevation)?w($.elevation):E*2.8);v.push(T),y.set($.id,T)}),p.some($=>$.storey===null||!y.has($.storey))){let $=Ke(I("floor"),v.length?"Weitere R\xE4ume":"Erdgeschoss",v.length?v[v.length-1].elevation+2.8:0);v.push($),y.set(null,$)}v.forEach(($,E)=>{let T=v[E+1];T&&T.elevation-$.elevation>1.8&&($.height=w(T.elevation-$.elevation-.2))});for(let $ of p)y.get($.storey!==null&&y.has($.storey)?$.storey:null).rooms.push({id:I("room"),name:$.name,area_id:null,points:$.ring.map(([T,P])=>[w(T-_),w(b-P)]),floor_material:"wood",panel:[]});let k=0;for(let $ of h){let E=y.get($.storey!==null&&y.has($.storey)?$.storey:null);if(!E)continue;let T=[$.at[0]-_,b-$.at[1]],P=null;for(let N of E.rooms)N.points.forEach((B,J)=>{let ee=N.points[(J+1)%N.points.length],V=Math.hypot(ee[0]-B[0],ee[1]-B[1]);if(V<$.width)return;let ce=((T[0]-B[0])*(ee[0]-B[0])+(T[1]-B[1])*(ee[1]-B[1]))/V;if(ce<0||ce>V)return;let Be=Math.abs((T[0]-B[0])*(ee[1]-B[1])-(T[1]-B[1])*(ee[0]-B[0]))/V;Be<=.6&&(!P||Be<P.dist)&&(P={room:N.id,edge:J,along:ce,length:V,dist:Be})});let z=P;if(!z)continue;let H=Math.max(0,w($.z-E.elevation));E.openings.push({id:I("op"),room_id:z.room,edge:z.edge,offset:w(Math.min(z.length-$.width/2,Math.max($.width/2,z.along))),width:w($.width),type:$.window?"window":"door",sill:$.window?H:0,height:w($.height),hinge:"left",leaves:$.width>1.4?2:1,swing:"in",cover:null,contact:null,contact2:null,tilt:null}),k++}let S=Ot();return S.floors=v,{building:Ie(S),report:{floors:v.length,rooms:p.length,openings:k,walls:0,furniture:0}}}var Mh="nextfloor",_0="alarm_control_panel|automation|binary_sensor|button|calendar|camera|climate|conversation|cover|date|datetime|device_tracker|event|fan|group|humidifier|image|input_boolean|input_button|input_datetime|input_number|input_select|input_text|lawn_mower|light|lock|media_player|notify|number|person|remote|scene|script|select|sensor|siren|stt|sun|switch|text|time|timer|todo|tts|update|vacuum|valve|water_heater|weather|zone",Sh=new RegExp(`^(?:${_0})\\.[a-z0-9_]+$`),b0=/^[0-9a-f]{32}$/,y0=new Set(["area_id","ha_floor"]),w0=new Set(["sub_areas"]),v0=new Set(["tap","show_when","pictures","moods"]);function Wa(t){if(typeof t=="string")return Sh.test(t)||b0.test(t)?null:t;if(Array.isArray(t))return t.map(e=>Wa(e)).filter(e=>e!==null);if(t&&typeof t=="object"){let e={};for(let[n,r]of Object.entries(t))Sh.test(n)||v0.has(n)||(y0.has(n)||w0.has(n)?e[n]=null:e[n]=Wa(r));return e}return t}var k0=["wall_exterior","wall_interior","wall_paint_outside","wall_paint_inside","grid","north","roof","weather_effects","rain_warning","sun_patches","lock_plan","rooms_as_drawn","start_view","units","motion_markers_active","room_double_tap"];function Rh(t){let e=structuredClone(t),n={};for(let o of k0)e.settings?.[o]!==void 0&&(n[o]=e.settings[o]);let r=e.settings?.backdrop;r&&(r.color||r.dim!=null)&&(n.backdrop={color:r.color??null,dim:r.dim??null}),e.settings=n,e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null,consumption:null,gas:null,water:null},e.presence=[];for(let o of e.floors){o.background=null,o.placements=[],o.power_entity=null,o.ha_floor=null;for(let i of o.rooms)Object.assign(i,{area_id:null,sub_areas:null,panel:[],hidden:[],no_state:[]});o.furniture.forEach(i=>{Object.assign(i,{entity:null,power:null}),delete i.effect_animations,i.picture&&!(i.picture.startsWith("image:")||i.picture.startsWith("https://"))&&(i.picture=null)}),o.openings.forEach(i=>Object.assign(i,{cover:null,contact:null,tilt:null}))}return Wa(e)}function Eh(t,e){return{format:Mh,version:1,exported_at:new Date().toISOString(),building:e?Rh(t):structuredClone(t)}}var x0=t=>!!t&&(t.version===1||t.version===void 0)&&Array.isArray(t.floors)&&t.floors.every(e=>!!e&&typeof e=="object"),$0="https://therealmrbk.github.io/NextFloor/preview/?shared&noshowcase";function Ah(t,e,n,r,o=$0){let i=new Set(t.floors.flatMap(c=>c.furniture.map(u=>u.type)).filter(c=>c.startsWith("pack:")).map(c=>c.split(":")[1])),s={building:Rh(t),packs:e.filter(c=>!c.builtin&&i.has(c.id))},a=JSON.stringify(s).replace(/</g,"\\u003c"),l=c=>c.replace(/[&<>"]/g,u=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[u]);return`<!doctype html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${l(n)}</title>
<style>html,body{margin:0;height:100%;background:#111;color:#ddd;font-family:system-ui,sans-serif}iframe{border:0;width:100%;height:100%;display:block}noscript p{padding:2em}</style></head>
<body><iframe id="nf" src="${l(o)}" allow="fullscreen" title="${l(n)}"></iframe>
<noscript><p>${l(r)}</p></noscript>
<script id="nf-plan" type="application/json">${a}<\/script>
<script>
const data = JSON.parse(document.getElementById("nf-plan").textContent);
const frame = document.getElementById("nf");
addEventListener("message", (e) => {
  if (e.source === frame.contentWindow && e.data && e.data.type === "nextfloor-share-ready") frame.contentWindow.postMessage({ type: "nextfloor-share", building: data.building, packs: data.packs }, "*");
});
<\/script></body></html>
`}function Fh(t){let e;try{e=JSON.parse(t)}catch{throw new Error("not_json")}let n=e,r=n?.format===Mh?n.building:e;if(!x0(r))throw new Error("not_plan");return r.floors.forEach(o=>o.background=null),Ie(r)}var S0=t=>!/^https?:\/\//.test(t)&&!t.startsWith("camera:");function Th(t){let e=new Set;for(let n of t.floors){n.background?.image_id&&e.add(n.background.image_id);let r=n.furniture.flatMap(o=>o.pictures??[]);for(let{image:o}of r)o&&S0(o)&&e.add(o)}return[...e]}function zh(t,e,n="application/json"){let r=document.createElement("a"),o=URL.createObjectURL(new Blob([e],{type:n}));Object.assign(r,{href:o,download:t}),r.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}var M0={api:{listHistory:Hc,restoreSnapshot:Vc,takeSnapshot:Cc,getSnapshot:Wc,deleteSnapshot:Nc,fetchBackup:Kc,restoreBackup:Gc,fetchImage:No,storeImage:zt},alert:t=>alert(t),confirm:t=>confirm(t),prompt:t=>prompt(t),download:zh,today:()=>new Date().toISOString().slice(0,10)},R0=t=>String(t?.message??t),Ai=class{host;deps;history=null;busy=!1;compare=null;constructor(e,n=M0){this.host=e,this.deps=n}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:n,t:r}=this.host;!n||!this.deps.confirm(r("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(n,e.id),this.host.say(r("backup_restored")),await this.loadHistory())}async saveVersion(){let{hass:e,t:n}=this.host,r=e?this.deps.prompt?.(n("version_name_prompt"))?.trim():null;!e||!r||(await this.deps.api.takeSnapshot(e,r.slice(0,60)),this.host.say(n("version_saved",{name:r})),await this.loadHistory())}async compareWith(e){let{hass:n}=this.host,r=this.deps.api.getSnapshot;if(!n||!r)return;if(this.compare?.snapshot.id===e.id)return this.compare=null,this.host.refresh();let o=Ie(await r(n,e.id));this.compare={snapshot:e,entries:hh(o,this.host.doc)},this.host.refresh()}async deleteVersion(e){let{hass:n,t:r}=this.host,o=this.deps.api.deleteSnapshot;!n||!o||!this.deps.confirm(r("version_delete_confirm",{name:e.name??this.timeOf(e)}))||(await o(n,e.id),this.compare?.snapshot.id===e.id&&(this.compare=null),await this.loadHistory())}exportShareView(){let e=this.host.t,n=Ah(this.host.doc,vr(),e("share_view_title"),e("share_view_needs_js"));this.deps.download(`nextfloor-${e("share_view_file")}-${this.deps.today()}.html`,n,"text/html"),this.host.say(e("share_view_done"))}exportPlan(e){let n=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${n}-${this.deps.today()}.json`,JSON.stringify(Eh(this.host.doc,e),null,2))}async importPlan(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o,i=r("backup_import_confirm");try{if(/\.sh3d$/i.test(e.name)){let s=await gh(new Uint8Array(await e.arrayBuffer()));o=s.building,i=`${r("import_sh3d_found",{...s.report})}

${i}`}else if(/\.ifc$/i.test(e.name)){let s=$h(await e.text());o=s.building,i=`${r("import_ifc_found",{floors:s.report.floors,rooms:s.report.rooms,openings:s.report.openings})}

${i}`}else if(/\.dxf$/i.test(e.name)){let s=bh(await e.text());o=s.building,i=`${r("import_dxf_found",{rooms:s.report.rooms,walls:s.report.walls})}

${i}`}else{let s=await e.text(),a=null;try{a=JSON.parse(s)}catch{}if(wh(a)){let l=vh(a);o=l.building,i=`${r("import_roomplan_found",{rooms:l.report.rooms,openings:l.report.openings,skipped:l.report.furniture})}

${i}`}else o=Fh(s)}}catch(s){let a=s.message,l={not_json:"import_error_not_json",not_plan:"import_error_not_plan",not_zip:"import_error_sh3d",sh3d_no_xml:"import_error_sh3d",sh3d_empty:"import_error_sh3d_empty",dxf_empty:"import_error_dxf_empty",ifc_empty:"import_error_ifc_empty",roomplan_empty:"import_error_roomplan_empty"};this.deps.alert(l[a]?r(l[a]):r("backup_import_error",{error:a}));return}this.deps.confirm(i)&&(await this.deps.api.takeSnapshot(n).catch(()=>{}),this.host.adopt(o),this.host.say(r("backup_imported")))}async exportFull(){let{hass:e,t:n}=this.host;if(e){this.busy=!0,this.host.refresh();try{let r=await this.deps.api.fetchBackup(e),o={};for(let i of Th(r.building))await this.deps.api.fetchImage(e,i).then(s=>o[i]=s,()=>{});this.deps.download(`nextfloor-${n("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...r,exported_at:new Date().toISOString(),images:o}))}catch(r){this.deps.alert(n("backup_import_error",{error:R0(r)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:n,t:r}=this.host;if(!e||!n)return;let o;try{o=JSON.parse(await e.text())}catch{this.deps.alert(r("import_error_not_json"));return}if(o?.format!=="nextfloor-backup"||!o.building){this.deps.alert(r("backup_full_not_backup"));return}if(this.deps.confirm(r("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let i=await this.deps.api.restoreBackup(n,o.building,o.packs??[]),s=0;for(let[l,c]of Object.entries(o.images??{}))await this.deps.api.storeImage(n,l,c).then(()=>s++,()=>{});this.host.adopt(Ie(i.building)),this.host.packsChanged();let a=i.skipped.length>0?` ${r("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(r("backup_full_restored",{packs:i.packs,pictures:s})+a)}catch(i){let{code:s,message:a}=i??{};this.deps.alert(r("backup_import_error",{error:a??s??String(i)}))}finally{this.busy=!1,this.host.refresh()}}}};function tt(t,e){if(!kt(e))return Ae(t,`furn_${e}`);let n=U(e);return n?nt(n,e,t?.language??navigator.language):Ae(t,"pack_missing_item")}function nt(t,e,n){return t.name[n.split("-")[0]]??vi(n,e)??ru(t,n)}function Ne(t,e){return vi(e,`packname:${t.id}`)??ou(t,e)}function Ph(t,e){return t.name[e.split("-")[0]]??vi(e,`color:${t.id}`)??t.name.en??Object.values(t.name)[0]}var Dh=(t,e,n="application/json,.json")=>m`<label class="nf-btn nf-upload"
  >${t}<input
    type="file"
    accept=${n}
    @change=${r=>{let o=r.target,i=o.files?.[0];o.value="",e(i)}}
  />
</label>`,E0={added:"\uFF0B",removed:"\u2212",renamed:"\u270E",reshaped:"\u2922",moved:"\u2194"};function A0(t,e){let n=t.t;if(!e.length)return m`<p class="nf-sub nf-diff">${n("version_same")}</p>`;let r=i=>i.kind.startsWith("furniture")?tt(t.hass,i.name)||i.name:i.kind.startsWith("device")?String(t.hass?.states[i.name]?.attributes.friendly_name??i.name):i.kind.startsWith("opening")?n(i.name==="door"?"opening_door":i.name==="garage"?"opening_garage":"opening_window"):i.name,o=[...new Set(e.map(i=>i.floor))];return m`<div class="nf-diff">
    ${R(n("version_diff_n",{n:e.length}))}
    ${o.map(i=>m`<h4 class="nf-check-floor">${i}</h4>
        <ul class="nf-diff-list">
          ${e.filter(s=>s.floor===i).map(s=>{let a=s.kind.slice(s.kind.indexOf("_")+1),l=typeof s.detail=="number"?`${s.detail>0?"+":""}${q(t.hass,s.detail,1)}`:s.detail??"";return m`<li><span aria-hidden="true">${E0[a]??"\u2022"}</span> ${n(`diff_${s.kind}`,{name:r(s),detail:l})}</li>`})}
        </ul>`)}
  </div>`}function Ih(t,e){let n=t.t,r=e.history,o=r===null?R(n("loading")):r.length===0?R(n("backup_none")):m`<div class="nf-room-list">
            ${r.map(i=>m`<div class="nf-row nf-dev-row">
                  <span>${i.name?m`<b>📌 ${i.name}</b> · `:g}${e.timeOf(i)} <span class="nf-muted">· ${n("backup_summary",{rooms:i.rooms,furniture:i.furniture})}</span></span>
                  <span class="nf-version-actions">
                    <button class="nf-link" aria-pressed=${e.compare?.snapshot.id===i.id} @click=${()=>{e.compareWith(i)}}>${n("version_compare")}</button>
                    <button class="nf-link" @click=${()=>e.restorePoint(i)}>${n("backup_restore")}</button>
                    ${i.name?m`<button class="nf-link" title=${n("delete")} @click=${()=>{e.deleteVersion(i)}}>✕</button>`:g}
                  </span>
                </div>
                ${e.compare?.snapshot.id===i.id?A0(t,e.compare.entries):g}`)}
          </div>`;return m`<details class="nf-section" @toggle=${i=>i.target.open&&void e.loadHistory()}>
    <summary>${n("backup")}</summary>
    <h4 class="nf-lib-head">${n("backup_history")}</h4>
    ${X(m`<button class="nf-btn" title=${n("version_save_hint")} @click=${()=>{e.saveVersion()}}>📌 ${n("version_save")}</button>`)}
    ${o}
    <h4 class="nf-lib-head">${n("backup_file")}</h4>
    ${X(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${n("backup_export")}</button>`,m`<button class="nf-btn" title=${n("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${n("backup_export_share")}</button>`,m`<button class="nf-btn" title=${n("share_view_hint")} @click=${()=>e.exportShareView()}>🔗 ${n("share_view")}</button>`,Dh(n("backup_import"),i=>{e.importPlan(i)},"application/json,.json,.sh3d,.dxf,.ifc"))}
    ${R(n("backup_hint"))} ${R(n("import_other_hint"))}
    <h4 class="nf-lib-head">${n("backup_full")}</h4>
    ${X(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":n("backup_full_export")}</button>`,Dh(n("backup_full_import"),i=>{e.importFull(i)}))}
    ${R(n("backup_full_hint"))}
  </details>`}function Oh(t,e){return e&&t.states[e]?e:Object.keys(t.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}var Lh=["body","wood","fabric","white","metal","dark"],Hh={body:"#172238",wood:"#19233c",fabric:"#1a2644",white:"#1d2946",metal:"#2a3a60",dark:"#0b111f"};var F0=["neon","blueprint","day","own","real"],Ch=["dark","light","lines","background","glass"],T0={dark:"#2a2622",light:"#8c8378",lines:"#e0a060",background:"#1c1e22",glass:""},Wh=t=>T0[t]||"#9fc4e0";var rR=["auto",...F0];var hn=(t,e,n)=>Math.min(n,Math.max(e,t)),z0=t=>(Math.round(t)%360+360)%360,Na=(t,e)=>z0(t+e);function Nh(t,e,n){return n?[...new Set([...t,e])]:t.filter(r=>r!==e)}function Vh(t,e,n){let r=t.t,o=s=>()=>n(Na(e,s)),i=A`<svg class="nf-compass-dial" viewBox="-50 -50 100 100" role="img" aria-label=${r("compass_title")}>
    <circle r="46" class="nf-compass-ring" />
    <path d="M0 -50l3 6h-6z" class="nf-compass-up" />
    <g transform="rotate(${e})">
      <path d="M0 -38L8 0H-8z" class="nf-compass-n" />
      <path d="M0 38L8 0H-8z" class="nf-compass-s" />
      <text y="-27" class="nf-compass-label">${r("compass_n_short")}</text>
      <text y="36" class="nf-compass-label nf-compass-label-s">${r("compass_s_short")}</text>
    </g>
  </svg>`;return m`<div class="nf-compass nf-wide">
    ${i}
    <div class="nf-compass-side">
      <b>${r("compass_title")}</b>
      ${F(t,r("north"),e,s=>n(Na(s,0)),1)}
      <div class="nf-actions">
        <button class="nf-btn" ?disabled=${!t.admin} title=${r("compass_swap_hint")} @click=${o(180)}>⇅ ${r("compass_swap")}</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(-90)}>↺ 90°</button>
        <button class="nf-btn" ?disabled=${!t.admin} @click=${o(90)}>↻ 90°</button>
      </div>
      <span class="nf-sub">${r("compass_hint")}</span>
    </div>
  </div>`}var P0="https://tile.openstreetmap.org/{z}/{x}/{y}.png";var D0=40075016686e-3,Va=Math.PI/180,ao=18,lo=.5,I0=160;function O0(t,e,n){let r=2**n,o=(e+180)/360*r,i=(1-Math.log(Math.tan(t*Va)+1/Math.cos(t*Va))/Math.PI)/2*r;return[o,i]}var L0=(t,e)=>D0*Math.cos(t*Va)/2**e;function Bh(t,e,n,r=I0){let[o,i]=O0(t,e,n),s=L0(t,n),a=r/s,l=2**n-1,c=[];for(let u=Math.floor(i-a);u<=Math.floor(i+a);u++)for(let d=Math.floor(o-a);d<=Math.floor(o+a);d++){if(u<0||u>l)continue;let p=(d%(l+1)+l+1)%(l+1);c.push({x:p,y:u,z:n,east:(d-o)*s,north:-(u-i)*s,size:s})}return c}function Kh(t,e){return t.replace("{z}",String(e.z)).replace("{x}",String(e.x)).replace("{y}",String(e.y)).replace("{s}","abc"[(e.x+e.y)%3])}var Gh=t=>t.url&&t.url.startsWith("https://")?t.url:P0;var Fi=t=>!!t&&t.on===!0&&Number.isFinite(t.lat)&&Number.isFinite(t.lon),Uh=t=>({x:t.x??0,z:t.z??0,opacity:t.opacity??lo,zoom:t.zoom??ao});function H0(t){let e=[],n=[];for(let o of t.floors){for(let i of o.rooms)for(let[s,a]of i.points)e.push(s),n.push(a);for(let i of o.outdoor??[])for(let[s,a]of i.points)e.push(s),n.push(a)}if(!e.length)return[0,0];let r=o=>Math.round((Math.min(...o)+Math.max(...o))/2*100)/100;return[r(e),r(n)]}function jh(t,e){let[n,r]=H0(t);return{on:!0,lat:e?.lat??0,lon:e?.lon??0,x:n,z:r,opacity:lo,zoom:ao,url:null}}function Zh(t,e,n){let r=o=>Math.round(o*100)/100;return{...t,x:r((t.x??0)+e),z:r((t.z??0)+n)}}function qh(t){let e=t.trim();return e===""?null:/^https:\/\/\S+$/.test(e)&&["{z}","{x}","{y}"].every(n=>e.includes(n))?e:void 0}var C0=["15","16","17","18","19"],W0=["1","5","20"],Ti="5";function Yh(t,e,n){let r=t.t,o=e.settings.map??null,i=t.hass?.config,s=Fi(o),a=u=>{if(!u)return n(o?{...o,on:!1}:null);n(o?{...o,on:!0}:jh(e,{lat:i?.latitude,lon:i?.longitude}))},l=u=>o&&n({...o,...u}),c=(u,d)=>()=>o&&n(Zh(o,u*Number(Ti),d*Number(Ti)));return m`<div class="nf-map-settings nf-wide">
    ${L(t,r("map_on"),s,a,{title:r("map_hint")})}
    ${o&&o.on?m`<div class="nf-form">
          ${F(t,r("map_lat"),o.lat,u=>l({lat:Math.max(-85,Math.min(85,u))}),1e-4)}
          ${F(t,r("map_lon"),o.lon,u=>l({lon:Math.max(-180,Math.min(180,u))}),1e-4)}
          ${i?.latitude!==void 0&&i.longitude!==void 0?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>l({lat:i.latitude,lon:i.longitude})}>${r("map_use_ha")}</button>`:g}
          ${F(t,r("map_opacity"),Math.round((o.opacity??lo)*100),u=>l({opacity:Math.max(5,Math.min(100,u))/100}),5,5)}
          ${O(t,r("map_zoom"),String(o.zoom??ao),C0.map(u=>[u,u==="15"?`${u} \xB7 ${r("map_zoom_coarse")}`:u==="19"?`${u} \xB7 ${r("map_zoom_fine")}`:u]),u=>l({zoom:Number(u)}))}
          <div class="nf-wide nf-map-move">
            <span class="nf-sub">${r("map_move")}</span>
            <div class="nf-map-arrows">
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,-1)}>▲</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(-1,0)}>◀</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(1,0)}>▶</button>
              <button class="nf-btn" ?disabled=${!t.admin} title=${r("map_move")} @click=${c(0,1)}>▼</button>
            </div>
            ${O(t,r("map_step"),Ti,W0.map(u=>[u,`${u} m`]),u=>Ti=u,{wide:!1})}
          </div>
          ${j(t,r("map_url"),o.url??"",u=>{let d=qh(u);d!==void 0&&l({url:d})},{wide:!0,placeholder:"https://\u2026/{z}/{x}/{y}.png",maxlength:300})}
          ${R(r("map_hint"),"nf-wide")}
        </div>`:g}
  </div>`}var N0=["none","flat","gable","custom"];function V0(t,e,n){let r=t.t,o=!!e,i=s=>n({color:null,image:null,dim:.35,...e??{},...s});return m`<div class="nf-sub nf-wide">${r("backdrop")}</div>
    ${L(t,r("backdrop"),o,s=>n(s?{color:"#101828",image:null,dim:.35}:null))}
    ${o?m`<label class="nf-field"
            >${r("backdrop_color")}
            <input type="color" .value=${e?.color??"#101828"} ?disabled=${!t.admin} @change=${s=>i({color:s.target.value})}
          /></label>
          ${F(t,r("backdrop_dim"),Math.round((e?.dim??.35)*100),s=>i({dim:hn(s,0,80)/100}),5,0)}
          ${j(t,r("backdrop_image"),e?.image??"",s=>i({image:s||null}),{wide:!0,placeholder:"/local/hintergrund.jpg"})}
          ${R(r("backdrop_hint"),"nf-wide")}`:g}`}function B0(t,e,n,r){let o=t.t,i=(a,l=n)=>Object.fromEntries(Object.entries(l).filter(([c,u])=>a.includes(c)&&u)),s=C(t.hass,a=>!e.includes(a)&&/^(sensor|binary_sensor|alarm_control_panel|weather|input_|counter|lock|climate|person|sun)\b/.test(a));return m`<div class="nf-sub nf-wide">${o("status_entities")}</div>
    ${e.length?e.map(a=>m`${j(t,`${o("status_name")} \xB7 ${G(t.hass,a)}`,n[a]??"",l=>r(e,i(e,{...n,[a]:l.slice(0,60)})),{placeholder:G(t.hass,a),maxlength:60})}
            ${t.admin?m`<div class="nf-actions" style="align-self:end"><button class="nf-btn nf-field-btn" title=${o("delete")} aria-label=${`${o("delete")}: ${G(t.hass,a)}`} @click=${()=>r(e.filter(l=>l!==a),i(e.filter(l=>l!==a)))}>×</button></div>`:g}`):g}
    ${e.length<12?D(t,o("status_add"),null,void 0,s,a=>a&&a!=="none"&&r([...e,a],n)):g}
    ${R(o("status_entities_hint"),"nf-wide")}`}function Xh(t,e){let n=t.t,r=t.doc.settings,o=c=>t.replace({...structuredClone(t.doc),settings:{...structuredClone(t.doc.settings),...c}}),i=c=>o({roof:{...r.roof,...c}}),s=N0.map(c=>[c,n(`roof_${c}`)]),a=r.weather_effects??mu,l=r.roof.type==="gable";return m`<details class="nf-section">
    <summary>${n("settings")}</summary>
    <div class="nf-form">
      ${F(t,n("wall_exterior"),r.wall_exterior,c=>o({wall_exterior:hn(c,.02,1)}),.01,.02)}
      ${F(t,n("wall_interior"),r.wall_interior,c=>o({wall_interior:hn(c,.02,1)}),.01,.02)}
      ${L(t,n("rooms_as_drawn"),!!r.rooms_as_drawn,c=>o({rooms_as_drawn:c||void 0}),{title:n("rooms_as_drawn_hint")})}
      ${R(n("rooms_as_drawn_hint"),"nf-wide")}
      ${We(t,n("wall_paint_outside"),r.wall_paint_outside,Yo,c=>o({wall_paint_outside:c}))}
      ${We(t,n("wall_paint_inside"),r.wall_paint_inside,Xo,c=>o({wall_paint_inside:c}))}
      ${R(n("wall_paint_hint"),"nf-wide")}
      ${Lh.map(c=>We(t,n(`furn_color_${c}`),r.furniture_colors?.[c],Hh[c],u=>{let d={...r.furniture_colors,[c]:u};u||delete d[c],o({furniture_colors:Object.keys(d).length?d:null})}))}
      ${R(n("furn_color_hint"),"nf-wide")}
      ${Ch.map(c=>We(t,n(`own_look_${c}`),r.own_look?.[c],Wh(c),u=>{let d={...r.own_look,[c]:u??void 0};u||delete d[c],o({own_look:Object.keys(d).length?d:null})}))}
      ${R(n("own_look_hint"),"nf-wide")}
      ${F(t,n("grid"),r.grid,c=>o({grid:hn(c,.01,1)}),.01,.01)}
      ${O(t,n("units"),r.units==="imperial"?"imperial":"metric",[["metric",n("units_metric")],["imperial",n("units_imperial")]],c=>o({units:c==="imperial"?"imperial":null}),{title:n("units_hint")})}
      ${Vh(t,r.north,c=>o({north:c}))}
      ${Yh(t,t.doc,c=>o({map:c}))}
      ${O(t,n("roof"),r.roof.type,s,c=>c==="custom"?e.useRoofSections():i({type:c}),{wide:!0})}
      ${l?O(t,n("roof_ridge"),r.roof.ridge==="short"?"short":"long",[["long",n("roof_ridge_long")],["short",n("roof_ridge_short")]],c=>i({ridge:c==="short"?"short":null}),{wide:!0}):g}
      ${l?F(t,n("roof_pitch"),r.roof.pitch,c=>i({pitch:hn(c,5,60)}),1,5):g}
      ${r.roof.type!=="none"?F(t,n("roof_overhang"),r.roof.overhang,c=>i({overhang:hn(c,0,2)}),.05,0):g}
      ${t.hass?D(t,n("weather_entity"),r.weather_entity??null,Oh(t.hass,null),C(t.hass,c=>c.startsWith("weather.")),c=>o({weather_entity:c})):g}
      <div class="nf-sub nf-wide">${n("weather_effects")}</div>
      ${fu.map(c=>L(t,n(`weather_effect_${c}`),a.includes(c),u=>o({weather_effects:Nh(a,c,u)}),{wide:!1}))}
      ${L(t,n("rain_warning"),r.rain_warning!==!1,c=>o({rain_warning:c}))}
      ${t.hass&&r.rain_warning!==!1?D(t,n("rain_sensor"),r.rain_sensor??null,void 0,C(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({rain_sensor:c==="none"?null:c})):g}
      ${t.hass&&r.rain_warning!==!1&&r.rain_sensor&&r.rain_sensor!=="none"?L(t,n("rain_sensor_inverted"),!!r.rain_sensor_inverted,c=>o({rain_sensor_inverted:c||void 0}),{title:n("rain_sensor_inverted_hint")}):g}
      ${t.hass?D(t,n("outage_sensor"),r.outage_sensor??null,void 0,C(t.hass,c=>/^(binary_sensor|sensor)\./.test(c)),c=>o({outage_sensor:c==="none"?null:c})):g}
      ${R(n("outage_hint"),"nf-wide")}
      ${L(t,n("contact_warning"),!!r.contact_warning,c=>o({contact_warning:c||void 0}),{title:n("contact_warning_hint")})}
      ${L(t,n("night_lock_warning"),!!r.night_lock_warning,c=>o({night_lock_warning:c||void 0}),{title:n("night_lock_warning_hint")})}
      ${O(t,n("room_double_tap"),r.room_double_tap??"area",[["area",n("room_double_tap_area")],["plan",n("room_double_tap_plan")],["off",n("room_double_tap_off")]],c=>o({room_double_tap:c==="plan"||c==="off"?c:null}),{title:n("room_double_tap_hint")})}
      ${L(t,n("motion_markers_active"),!!r.motion_markers_active,c=>o({motion_markers_active:c||void 0}),{title:n("motion_markers_active_hint")})}
      ${t.hass?B0(t,r.status_entities??[],r.status_names??{},(c,u)=>o({status_entities:c.length?c:null,status_names:Object.keys(u).length?u:null})):g}
      ${t.hass?D(t,n("announce_tts"),r.announce_tts??null,void 0,C(t.hass,c=>c.startsWith("tts.")),c=>o({announce_tts:c==="none"?null:c})):g}
      <label class="nf-field nf-wide"
        >${n("announce_phrases")}
        <textarea
          rows="4"
          ?disabled=${!t.admin}
          .value=${(r.announce_phrases??[]).join(`
`)}
          placeholder=${[1,2,3,4,5].map(c=>n(`announce_phrase_${c}`)).join(`
`)}
          @change=${c=>{let u=c.target.value.split(`
`).map(d=>d.trim().slice(0,200)).filter(Boolean).slice(0,30);o({announce_phrases:u.length?u:null})}}
        ></textarea>
      </label>
      ${R(n("announce_phrases_hint"),"nf-wide")}
      ${L(t,n("sun_patches"),r.sun_patches!==!1,c=>o({sun_patches:c}),{title:n("sun_patches_hint")})}
      ${L(t,n("sun_arc"),r.sun_arc===!0,c=>o({sun_arc:c}),{title:n("sun_arc_hint")})}
      ${V0(t,r.backdrop??null,c=>o({backdrop:c}))}
    </div>
    ${R(`${n("north_hint")} ${n("weather_entity_hint")}`)}
  </details>`}var co=t=>t&&t!=="none"?t:null,uo=(t,e)=>{e&&!t.includes(e)&&t.push(e)},Ba=t=>new Map(t.floors.flatMap(e=>e.furniture.filter(n=>n.type==="meter").map(n=>[n.id,n])));function pn(t,e){if(!t.energy.advanced||e.type!=="meter"||!e.parent_meter)return null;let n=Ba(t),r=new Set([e.id]);for(let o=n.get(e.parent_meter);o;o=n.get(o.parent_meter??"")){if(r.has(o.id))return null;r.add(o.id)}return n.has(e.parent_meter)?e.parent_meter:null}function Kn(t){return new Set([...Ba(t).values()].filter(e=>pn(t,e)).map(e=>e.id))}function ho(t,e){return!t.energy.advanced||!e.parent_meter?null:Kn(t).has(e.parent_meter)?e.parent_meter:null}function Jh(t,e,n){if(n.type!=="meter"||n.id===e.id)return!1;let r=Ba(t),o=new Set;for(let i=n;i&&!o.has(i.id);i=r.get(i.parent_meter??"")){if(i.id===e.id)return!1;o.add(i.id)}return!0}function Pi(t,e=n=>co(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of t.floors.flatMap(o=>o.furniture)){let o=e(r),i=r.type==="meter"?pn(t,r):null;if(i)(n.subMeters??=[]).push({id:r.id,parent:i,power:o,invert:!!r.meter_invert,floors:r.meter_floors??[],solar:[],batteries:[]});else if(r.type==="meter")n.grid??=o,n.gridExport??=co(r.export);else if(r.type==="inverter")uo(n.solar,o);else if(r.type==="home_battery"){let s=co(r.charge);uo(n.battery,o),uo(n.charge,s),uo(n.soc,co(r.soc)),(o||s)&&n.batteries.push({power:o,charge:s})}}for(let r of n.subMeters?t.floors.flatMap(o=>o.furniture):[]){let o=r.type==="inverter"||r.type==="home_battery"?n.subMeters?.find(a=>a.id===ho(t,r)):void 0,i=o?e(r):null;o&&r.type==="inverter"&&uo(o.solar,i);let s=co(r.charge);o&&r.type==="home_battery"&&(i||s)&&o.batteries.push({power:i,charge:s})}return n}function K0(t){for(let e of t.floors){let n=e.furniture.find(r=>r.type==="meter"&&!pn(t,r));if(n)return{floor_id:e.id,x:n.x,z:n.z}}return t.energy.meter}var G0=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,U0=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function zi(t,e,n="power"){let r=e?t.entities?.[e]?.device_id:void 0;if(!e||!r)return null;let o=Object.keys(t.states).filter(a=>a.startsWith("sensor.")&&t.entities?.[a]?.device_id===r&&t.states[a]?.attributes.device_class===n);if(o.length<=1)return o[0]??null;let i=o.filter(a=>!G0.test(a)),s=e.replace(/^sensor\./,"").replace(U0,"");return i.find(a=>s&&a.includes(s))??i[0]??o[0]}function Qh(t,e){let n={},r=(o,i)=>{i&&!n[o]&&(n[o]=i)};for(let o of e.energy_sources??[])if(o.type==="grid")r("grid",zi(t,o.flow_from?.[0]?.stat_energy_from??o.flow_to?.[0]?.stat_energy_to));else if(o.type==="solar")r("solar",zi(t,o.stat_energy_from));else if(o.type==="battery"){let i=o.stat_energy_from??o.stat_energy_to;r("battery",zi(t,i)),r("battery_soc",zi(t,i,"battery"))}return n}function $e(t,e=!1){let n=t?Number(t.state):NaN;if(!Number.isFinite(n))return null;let r={kW:1e3,MW:1e6}[String(t.attributes.unit_of_measurement??"W")]??1;return e?-n*r:n*r}var j0=(t,e)=>e.startsWith("sensor.")&&t.states[e]?.attributes.device_class==="power";function ep(t,e){if(j0(t,e))return e;let n=t.entities?.[e]?.device_id;if(!n)return null;let r=Xs(t,n),o=r?Lt(t,e):null,i=li(t,n).filter(s=>s!==e);return(r?i.find(s=>o!==null&&Lt(t,s)===o):i[0])??null}var tp=t=>{let e=t.filter(n=>n!==null);return e.length?e.reduce((n,r)=>n+r,0):null};function Z0(t,e,n){let r=e.grid??n.grid,o=r?$e(t.states[r],e.grid_invert):null;if(!e.grid&&n.gridExport){let i=Math.max(0,$e(t.states[n.gridExport])??0);return Math.max(0,o??0)-i}return o}function q0(t,e,n){return e.solar?$e(t.states[e.solar],!!e.solar_invert):n.solar.length?tp(n.solar.map(r=>$e(t.states[r],!!e.solar_invert))):null}function Ka(t,e,n){return e.charge?(e.power?Math.max(0,$e(t.states[e.power])??0):0)-Math.max(0,$e(t.states[e.charge])??0):e.power?$e(t.states[e.power],n):null}function Y0(t,e,n){return e.battery?$e(t.states[e.battery],e.battery_invert):tp(n.batteries.map(r=>Ka(t,r,e.battery_invert)))}function Ga(t,e,n,r=Pi(e)){let o=e.energy,i=Z0(t,o,r),s=q0(t,o,r),a=Y0(t,o,r),l=(o.battery_soc?[o.battery_soc]:r.soc).map(f=>Number(t.states[f]?.state)).filter(Number.isFinite),c=l.length?l.reduce((f,_)=>f+_,0)/l.length:null,u=o.tariff?t.states[o.tariff]:void 0,d=Number(u?.state),p=o.consumption?$e(t.states[o.consumption]):null;p===null&&(i!==null||s!==null||a!==null)&&(p=(i??0)+Math.max(0,s??0)+(a??0)),p===null&&n.length>0&&(p=n.reduce((f,_)=>f+_.power,0));let h={grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:p===null?null:Math.max(0,p)};return r.subMeters?{...h,...X0(t,r,h.consumption,o.battery_invert,n,!!o.solar_invert)}:h}function X0(t,e,n,r,o,i=!1){let s=e.subMeters??[],a=new Map;for(let h of s)for(let f of h.floors)a.has(f)||a.set(f,h.id);let l=new Set([e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...s.flatMap(h=>[h.power,...h.solar,...h.batteries.flatMap(f=>[f.power,f.charge])])]),c=h=>o.filter(f=>a.get(f.floorId)===h&&!l.has(f.powerEntity)).reduce((f,_)=>f+_.power,0),u=new Map(s.map(h=>[h.id,h.power?$e(t.states[h.power],h.invert):null])),d=s.map(h=>{let f=u.get(h.id)??null,_=h.solar.reduce((y,x)=>y+Math.max(0,$e(t.states[x],i)??0),0),b=h.batteries.reduce((y,x)=>y+(Ka(t,x,r)??0),0),w=s.filter(y=>y.parent===h.id).reduce((y,x)=>y+(u.get(x.id)??0),0),v=f===null?null:Math.max(0,f+_+b-w);return{id:h.id,parent:h.parent,power:f,solar:_,battery:b,use:v,unmetered:v===null?null:Math.max(0,v-c(h.id))}}),p=d.reduce((h,f)=>h+(f.use??0),0);return{subMeters:d,rest:n===null?null:Math.max(0,n-p)}}function J0(t,e,n){let r=t.b[0]-t.a[0],o=t.b[1]-t.a[1],i=Math.hypot(r,o)||1,s=Math.min(1,Math.max(0,((e.x-t.a[0])*r+(e.z-t.a[1])*o)/(i*i))),a=t.a[0]+r*s,l=t.a[1]+o*s,c=o/i*(a-n.x)+-r/i*(l-n.z)<0?-1:1;return{x:a,z:l,nx:c*o/i,nz:-c*r/i,distance:Math.hypot(e.x-a,e.z-l)}}function np(t){let e=K0(t),n=e?t.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!n)return null;let r=xe(t.settings),o=we(n.rooms,r,n.walls??[]).walls.filter(c=>c.exterior),i=n.rooms.flatMap(c=>c.points);if(o.length===0||i.length===0)return null;let s={x:i.reduce((c,u)=>c+u[0],0)/i.length,z:i.reduce((c,u)=>c+u[1],0)/i.length},a=o.map(c=>J0(c,e,s)).reduce((c,u)=>u.distance<c.distance?u:c),l=r.exterior/2+3;return{floorId:n.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function rp(t,e){let n=t.floors.flatMap(f=>f.furniture.map(_=>({floor:f,item:_}))),r=f=>n.filter(_=>_.item.type===f),o=f=>!!xi(f.item,e),i=f=>({kind:"device",...f}),[s,a,l,c,u]=[t.settings.roof.solar??[],r("meter"),r("inverter"),r("home_battery"),r("grid_point")],d=!!t.energy.grid||a.some(o),p=!!t.energy.solar||l.length>0&&l.every(o),h=!!t.energy.battery||c.every(f=>o(f)&&f.item.soc&&f.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:d?"ok":"todo",label:d?"chk_meter":"chk_meter_sensor",target:i(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:p?"ok":"todo",label:p?"chk_inverter":"chk_inverter_sensor",target:i(l.find(f=>!o(f))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:h?"ok":"todo",label:h?"chk_battery":"chk_battery_sensor",target:i(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},u.length>0?{state:"ok",label:"chk_grid",target:i(u[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}function Gn(t,e){let n=[];for(let r of t.floors)for(let o of r.furniture)o.type===e&&n.push({id:o.id,floorId:r.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return n}function Q0(t){if(!t?.rooms.length)return null;let e=0,n=0,r=0;for(let o of t.rooms)for(let[i,s]of o.points)e+=i,n+=s,r++;return r?{floorId:t.id,x:e/r,z:n/r,y:1}:null}function ew(t){let e=Kn(t);return Gn(t,"meter").find(n=>!e.has(n.id))??Gn(t,"inverter")[0]??Q0(fi(t))}function tw(t,e){let n=Gn(t,"grid_point")[0];if(n)return n;let r=t.floors.find(a=>a.id===e.floorId);if(!r?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let a of r.rooms)for(let[l,c]of a.points)o=Math.min(o,l),i=Math.max(i,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}function nw(t,e){let n=new Set((t.settings.roof.strings??[]).filter(r=>r.inverter&&(t.settings.roof.solar??[]).some(o=>o.string===r.id)).map(r=>r.inverter));return Gn(t,"inverter").filter(r=>!e.has(r.id)&&n.has(r.id))}function op(t){let e=[],n=ew(t);if(!n)return e;let r=new Set(t.floors.flatMap(a=>a.furniture).filter(a=>ho(t,a)).map(a=>a.id)),o=Gn(t,"inverter").find(a=>!r.has(a.id));for(let a of t.settings.roof.solar??[])e.push({key:`solar:${a.id}`,kind:"solar",id:a.id});Gn(t,"home_battery").some(a=>!r.has(a.id))&&e.push({key:"battery",kind:"battery",id:null});let i=a=>a.floorId!==n.floorId||a.x!==n.x||a.z!==n.z,s=nw(t,r);if(s.length>1)for(let a of s)i(a)&&e.push({key:`inverter:${a.id}`,kind:"inverter",id:a.id});else o&&i(o)&&e.push({key:"inverter",kind:"inverter",id:null});tw(t,n)&&e.push({key:"grid",kind:"grid",id:null});for(let a of t.floors.flatMap(l=>l.furniture))r.has(a.id)&&(a.type==="inverter"?e.push({key:`inverter:${a.id}`,kind:"inverter",id:a.id}):a.type==="home_battery"&&e.push({key:`battery:${a.id}`,kind:"battery",id:a.id}));for(let a of Kn(t))e.push({key:`meter:${a}`,kind:"meter",id:a});return e}var Ua=(t,e)=>t.energy.routes?.find(n=>n.key===e&&n.points.length>0);var rw={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},ip=t=>t.hass?je(t.hass,t.doc.floors):new Map,ow=Ge,sp=(t,e)=>e.name||t.t(`furn_${e.type}`);function ap(t,e){let n=rp(t.doc,ip(t)),r=n.filter(o=>o.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${t.t("chk_title")} <span class="nf-sub">${r}/${n.length}</span></h3>
    ${R(t.t("chk_hint"))}
    ${n.map(o=>m`<button class="nf-chk nf-chk-${o.state}" ?disabled=${!t.admin&&o.state!=="ok"} @click=${()=>e.follow(o.target)}>
        <span>${rw[o.state]}</span>${t.t(o.label)}
      </button>`)}
  </section>`}function lp(t,e){let n=t.doc.floors.flatMap(r=>r.furniture.filter(o=>ow.includes(o.type)).map(o=>({floor:r,item:o})));return m`<section>
    <h3>⚡ ${t.t("energy_devices")}</h3>
    ${R(t.t("energy_devices_hint"))}
    ${n.length>0?m`<div class="nf-room-list">
          ${n.map(({floor:r,item:o})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(r,o)}><span>${sp(t,o)} · ${r.name}</span></button>
            </div>`)}
        </div>`:g}
    <div class="nf-actions">
      ${Ge.map(r=>m`<button class="nf-btn" ?disabled=${!t.admin||!t.floor} @click=${()=>e.addDevice(r)}>+ ${t.t(`furn_${r}`)}</button>`)}
    </div>
  </section>`}var Di=(t,e,n)=>m`<p class="nf-sub nf-pack-error">${t.t(e)} <button class="nf-btn" ?disabled=${!t.admin} @click=${n}>${t.t("energy_sign_flip")}</button></p>`;function cp(t,e){let{energy:n}=t.doc,r=(x,k)=>t.hass?.states[x]?.attributes[k],o=C(t.hass,x=>Hn(t.hass,x)),i=C(t.hass,x=>me(x)&&r(x,"device_class")==="battery"),s=C(t.hass,x=>me(x)&&(r(x,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(r(x,"unit_of_measurement")??""))),a=ip(t),l=Pi(t.doc,x=>xi(x,a)),c=x=>t.replace({...structuredClone(t.doc),energy:{...t.doc.energy,...x}}),u=C(t.hass,x=>me(x)&&["gas","water","volume_flow_rate"].includes(r(x,"device_class")??"")),d=x=>k=>c({[x]:k==="none"?null:k}),p=t.hass?Ga(t.hass,t.doc,[],l):null,h=!!p&&(p.solar??0)<20,f=h&&p.grid!==null&&p.grid<-50,_=h&&p.battery!==null&&p.battery<-50&&(p.grid??0)<=0,b=!!p&&!h&&p.battery!==null&&p.battery>50&&p.grid!==null&&p.grid<-50&&-p.grid>=p.battery*.8,v=(t.hass?(n.solar?[n.solar]:l.solar).map(x=>$e(t.hass.states[x],!!n.solar_invert)??0).reduce((x,k)=>x+k,0):0)<-50,y=(x,k)=>L(t,t.t("energy_invert"),x,S=>c(k(S)));return m`<section>
    <h3>⚖ ${t.t("energy_balance")}</h3>
    ${R(t.t("energy_balance_hint"))}
    ${f?Di(t,"energy_sign_grid",()=>c({grid_invert:!n.grid_invert})):g}
    ${_?Di(t,"energy_sign_battery",()=>c({battery_invert:!n.battery_invert})):g}
    ${v?Di(t,"energy_sign_solar",()=>c({solar_invert:!n.solar_invert})):g}
    ${b?Di(t,"energy_sign_battery_day",()=>c({battery_invert:!n.battery_invert})):g}
    <div class="nf-form">
      ${D(t,t.t("energy_grid"),n.grid,l.grid,o,d("grid"))}
      ${y(n.grid_invert,x=>({grid_invert:x}))}
      ${D(t,t.t("energy_solar_sensor"),n.solar,l.solar[0]??null,o,d("solar"))}
      ${y(!!n.solar_invert,x=>({solar_invert:x}))}
      ${D(t,t.t("energy_battery_sensor"),n.battery,l.battery[0]??null,o,d("battery"))}
      ${y(n.battery_invert,x=>({battery_invert:x}))}
      ${D(t,t.t("energy_battery_soc"),n.battery_soc,l.soc[0]??null,i,d("battery_soc"))}
      ${D(t,t.t("energy_consumption_sensor"),n.consumption,null,o,d("consumption"))}
      ${D(t,t.t("energy_tariff_sensor"),n.tariff,void 0,s,d("tariff"))}
      ${D(t,t.t("energy_gas"),n.gas??null,void 0,u,d("gas"))}
      ${D(t,t.t("energy_water"),n.water??null,void 0,u,d("water"))}
      ${R(t.t("energy_meters_hint"),"nf-wide")}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!t.admin||!t.hass} @click=${()=>e.importPrefs()}>${t.t("energy_import_prefs")}</button></div>
    ${e.note?R(e.note):g} ${R(t.t("energy_hint"))}
  </section>
  <section>
    <h3>⚙ ${t.t("energy_advanced")}</h3>
    ${R(t.t("energy_advanced_hint"))}
    <div class="nf-form">
      ${L(t,t.t("energy_advanced_on"),!!n.advanced,x=>c({advanced:x}))}
      ${n.advanced?L(t,t.t("energy_show_unmetered"),!!n.show_unmetered,x=>c({show_unmetered:x})):g}
    </div>
    ${n.advanced?R(t.t("energy_show_unmetered_hint")):g}
  </section>`}var up=t=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${t.t("feature_name_energy")}</b></div>
  ${R(t.t("feature_text_energy"))}
</section>`;function dp(t){let e=(n,r,o)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${n}" target="_blank" rel="noopener">${r} ${t.t(o)}</a>`;return m`<section class="nf-help">
    <h3>${t.t("help_title")}</h3>
    ${R(t.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}function iw(t,e){let n=t.t,r=t.doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.id),o=r?sp(t,r):"";switch(e.kind){case"solar":{let i=t.doc.settings.roof.solar??[],s=i.findIndex(a=>a.id===e.id);return n("route_conn_solar",{name:i[s]?.name||`${n("solar_field")} ${s+1}`})}case"battery":return e.id?n("route_conn_device",{name:o}):n("route_conn_battery");case"inverter":return e.id?n("route_conn_device",{name:o}):n("route_conn_inverter");case"grid":return n("route_conn_grid");case"meter":return n("route_conn_meter",{name:o})}}function hp(t,e){let n=op(t.doc);if(!n.length)return g;let r=t.t,o=e.draft;return m`<section>
    <h3>〰 ${r("energy_routes")}</h3>
    ${R(r("energy_routes_hint"))}
    <div class="nf-room-list">
      ${n.map(i=>{let s=Ua(t.doc,i.key),a=o?.key===i.key;return m`<div class="nf-row nf-route-row">
          <span class="nf-dev-name"><span>${iw(t,i)} · ${s?r("route_points",{n:s.points.length}):r("route_none")}</span></span>
          ${a?m`<p class="nf-sub nf-wide">${r("route_drawing",{n:o.points.length})}</p>
                <div class="nf-actions nf-wide">
                  <button class="nf-btn" ?disabled=${!o.points.length} @click=${()=>e.undoPoint()}>↶ ${r("route_undo")}</button>
                  <button class="nf-btn nf-primary" @click=${()=>e.finish()}>${r("route_done")}</button>
                  <button class="nf-btn" @click=${()=>e.cancel()}>${r("cancel")}</button>
                </div>`:m`<div class="nf-actions">
                <button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.start(i.key)}>✎ ${r(s?"route_redraw":"route_draw")}</button>
                ${s?m`<button class="nf-btn" ?disabled=${!t.admin||!!o} @click=${()=>e.clear(i.key)}>⨉</button>`:g}
              </div>
              ${s?L(t,r("route_cable"),!!s.cable,l=>e.setCable(i.key,l),{title:r("route_cable_hint")}):g}`}
        </div>`})}
    </div>
  </section>`}function pp(t,e,n){let r=t.t,o=t.doc.energy.pipes??[],i=n.draft,s=C(t.hass,l=>/^(switch|climate|valve|binary_sensor|sensor|input_boolean|number)\./.test(l)),a=vu.map(l=>[l,r(`pipe_kind_${l}`)]);return m`<section>
    <h3>🔥 ${r("pipes_title")}</h3>
    ${R(r("pipes_hint"))}
    ${R(r("pipes_branch_hint"))}
    <div class="nf-room-list">
      ${o.map(l=>{let c=qo(l.id),u=Ua(t.doc,c),d=i?.key===c;return m`<div class="nf-form nf-route-row">
          ${j(t,r("pipe_name"),l.name,p=>e.update(l.id,{name:p}),{maxlength:60})}
          ${O(t,r("pipe_kind"),l.kind,a,p=>e.update(l.id,{kind:p}))}
          ${D(t,r("pipe_entity"),l.entity??null,void 0,s,p=>e.update(l.id,{entity:p&&p!=="none"?p:null}))}
          ${d?m`<p class="nf-sub nf-wide">${r("route_drawing",{n:i.points.length})}</p>
                <div class="nf-actions nf-wide">
                  <button class="nf-btn" ?disabled=${!i.points.length} @click=${()=>n.undoPoint()}>↶ ${r("route_undo")}</button>
                  <button class="nf-btn nf-primary" @click=${()=>n.finish()}>${r("route_done")}</button>
                  <button class="nf-btn" @click=${()=>n.cancel()}>${r("cancel")}</button>
                </div>`:m`<div class="nf-actions nf-wide">
                <span class="nf-sub">${u?r("route_points",{n:u.points.length}):r("route_none")}</span>
                <button class="nf-btn" ?disabled=${!t.admin||!!i} @click=${()=>n.start(c)}>✎ ${r(u?"route_redraw":"route_draw")}</button>
                <button class="nf-btn nf-danger" ?disabled=${!t.admin||!!i} @click=${()=>e.remove(l.id)}>${r("delete")}</button>
              </div>`}
        </div>`})}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!t.admin||o.length>=ku||!!i} @click=${()=>e.add()}>+ ${r("pipe_add")}</button></div>
  </section>`}var ct=(t,e)=>e.map(n=>t.toScreen(n).join(",")).join(" ");function Ii(t,e,n,r,o,i){let[[s,a],[l,c]]=[t.toScreen(e),t.toScreen(n)];if(Math.hypot(l-s,c-a)<=36)return g;let[u,d]=[(s+l)/2,(a+c)/2];return A`<g data-plus=${`${r}:${o}:${i}`} class="nf-mid"><circle cx=${u} cy=${d} r="14" class="nf-hit" /><circle cx=${u} cy=${d} r="6" /><path d="M${u-3} ${d}h6M${u} ${d-3}v6" /></g>`}var fp=(t,e)=>A`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r="6" />`,sw=(t,e,n)=>A`<g class="nf-vertex" data-roof-vertex=${n}>${fp(...t.toScreen(e))}</g>`,aw=(t,e,n)=>A`<g class="nf-vertex" data-roof-corner=${n}>${fp(...t.toScreen(e))}</g>`;function lw(t,e,n,r){let{t:o,hass:i}=t.host,s=n.dormer?o("roof_dormer"):n.open?o("roof_open_short"):o(`roof_shape_${n.shape}`);return`${e.isFixed(n)?"\u{1F512} ":""}${r+1} \xB7 ${s} \xB7 ${q(i,Qt(n),1)} m`}function ja(t,e){let n=t.host.doc.settings.roof,r=n.type==="custom"?n.sections??[]:[],o=t.host.admin,i=(s,a)=>{let l=s.id===e.sectionId,c=Re(s),u=(s.shape==="flat"||s.shape==="parapet")&&s.points&&s.points.length>=3?s.points:null,d=pi(r,s),p=d?Re(pa(d,s)):c,h=u??[p.at(p.u0,0),p.at(p.u1,0),p.at(p.u1,p.w),p.at(p.u0,p.w)],_=((s.shape==="flat"||s.shape==="parapet"?null:en(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([H,N])=>{let[B,J]=t.toScreen(c.at(H[0],H[1])),[ee,V]=t.toScreen(c.at(N[0],N[1]));return A`<line x1=${B} y1=${J} x2=${ee} y2=${V} />`}),[b,w]=t.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),v=l&&o&&!e.isFixed(s),y=[[0,0],[1,0],[1,1],[0,1]],x=s.shape==="flat"||s.shape==="parapet",[k,S,$,E]=[Math.min(s.x0,s.x1),Math.max(s.x0,s.x1),Math.min(s.z0,s.z1),Math.max(s.z0,s.z1)],T=u??(s.rotation?zr(s):[[k,$],[S,$],[S,E],[k,E]]),P=v&&x?T.map((H,N)=>Ii(t,H,T[(N+1)%T.length],"roof",s.id,N)):g,z=v?A`${P}${u?u.map((H,N)=>sw(t,H,`${s.id}:${N}`)):y.map(([H,N])=>aw(t,[H?S:k,N?E:$],`${s.id}:${H}:${N}`))}`:g;return A`<g data-roof=${s.id} class=${`nf-roof-sec${l?" nf-roof-sel":""}`}>
        <polygon points=${ct(t,h)} />
        <g class="nf-roof-ridge">${_}</g>
        <text x=${b} y=${w-14}>${lw(t,e,s,a)}</text>
      </g>${z}`};return A`<g class="nf-roof-layer">${r.map(i)}</g>`}function cw(t,e,n,r,o){let i=r*Math.PI/180,[s,a]=t.toScreen(n),[l,c]=t.toScreen([n[0]+Math.sin(i)*o,n[1]-Math.cos(i)*o]);return A`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${a} x2=${l} y2=${c} />
    <circle cx=${l} cy=${c} r="16" class="nf-hit" />
    <circle cx=${l} cy=${c} r="8" />
    <path d="M${l-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function mp(t,e){let{doc:n,admin:r}=t.host,o=n.settings.roof.solar??[];if(o.length===0)return g;let i=Y(n),s=a=>{let l=Ee(n,a,i);if(!l||l.wall&&l.wall.floorId!==t.floorId)return g;let c=a.id===e.solarId,u=g;if(c&&l.unbounded&&r&&!a.locked){let h=Kr(l,a),f=Math.max(...Je(l,a,!0).flatMap(_=>_.corners.map(b=>Math.hypot(b[0]-h[0],b[2]-h[1]))));u=cw(t,a.id,h,a.rotation??0,.9+f*.5)}let d=h=>{let f;if(l.wall){let _=Math.max(.3,...h.corners.map(y=>(y[0]-l.o[0])*l.n[0]+(y[2]-l.o[2])*l.n[2])),[b,w]=[h.corners[0],h.corners[1]],v=y=>[y[0]+l.n[0]*_,y[2]+l.n[2]*_];f=[[b[0],b[2]],v(b),v(w),[w[0],w[2]]]}else f=h.corners.map(_=>[_[0],_[2]]);return A`<polygon data-cell=${h.cell} class=${h.skipped?"nf-solar-off":""} points=${ct(t,f)} />`},p=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return A`<g data-solar=${a.id} class=${p}>${Je(l,a,c).map(d)}</g>${u}`};return A`<g class="nf-solar-layer">${o.map(s)}</g>`}function gp(t,e){let n=t.host.doc.settings.roof.windows??[];if(n.length===0)return g;let r=new Map(Y(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face),a=s?va(s,i):null;return a?A`<g data-roofwin=${i.id} class=${`nf-roofwin${i.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${ct(t,a.map(l=>[l[0],l[2]]))} /></g>`:g};return A`<g class="nf-roofwin-layer">${n.map(o)}</g>`}var uw={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function _p(t,e,n){if(!e)return g;let r=e.furniture.filter(i=>Ge.includes(i.type)),o=i=>{let[s,a]=t.toScreen([i.x,i.z]),l=i.id===n,c=t.host.t(`furn_${i.type}`);return A`<g data-energy-device=${i.id} class=${`nf-energy-marker${l?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${a} r="17" />
      <text x=${s} y=${a+6} class="nf-energy-icon">${uw[i.type]??"\u26A1"}</text>
      ${l?A`<text x=${s} y=${a+32} class="nf-energy-name">${c}</text>`:g}
      <title>${c}</title>
    </g>`};return A`<g class="nf-energy-markers">${r.map(o)}</g>`}function bp(t,e){let{doc:n,hass:r}=t.host;if(!(n.settings.roof.sections??[]).some(s=>ma(s,e.elevation+e.height)))return g;let i=[1.5,2].flatMap(s=>ga({settings:n.settings},e.elevation,s).map(([a,l])=>{let[c,u]=t.toScreen(a),[d,p]=t.toScreen(l);return A`<line class="nf-headroom" x1=${c} y1=${u} x2=${d} y2=${p} />
        <text class="nf-headroom-label" x=${(c+d)/2} y=${(u+p)/2-4}>${q(r,s,1)} m</text>`}));return A`${i}`}function yp(t,e,n,r){if(!e)return g;let o=(i,s)=>{let a=[];return i.forEach((l,c)=>{if(l.floor_id!==e.id)return;let[u,d]=t.toScreen([l.x,l.z]),p=i[c+1];if(p?.floor_id===e.id){let[f,_]=t.toScreen([p.x,p.z]);a.push(A`<line x1=${u} y1=${d} x2=${f} y2=${_} />`)}let h=p&&p.floor_id!==e.id||c>0&&i[c-1].floor_id!==e.id;a.push(A`<circle cx=${u} cy=${d} r=${h?7:4} class=${h?"nf-route-riser":""} />`),s&&a.push(A`<text x=${u+8} y=${d-8}>${c+1}</text>`)}),A`<g class=${`nf-route${s?" nf-route-drawing":""}`}>${a}</g>`};return A`<g class="nf-routes">${n.filter(i=>i.key!==r?.key).map(i=>o(i.points,!1))}${r?o(r.points,!0):g}</g>`}function wp(t,e){let n=t.host.doc.settings.roof.chimneys??[];if(n.length===0)return g;let r=new Map(Y(t.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face);if(!s)return g;let{shape:a,w:l,d:c}=an(i),{center:u,along:d,across:p}=ka(s,i),h=a==="round"||a==="steel"?Array.from({length:16},(f,_)=>[u[0]+Math.cos(_/16*2*Math.PI)*Math.min(l,c)/2,u[1]+Math.sin(_/16*2*Math.PI)*Math.min(l,c)/2]):[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,_])=>[u[0]+d[0]*l*f/2+p[0]*c*_/2,u[1]+d[1]*l*f/2+p[1]*c*_/2]);return A`<g data-chimney=${i.id} class=${`nf-chimney${i.id===e.chimneyId?" nf-roofwin-sel":""}`}><polygon points=${ct(t,h)} /></g>`};return A`<g class="nf-roofwin-layer">${n.map(o)}</g>`}function dw(t,e,n){let[r,o]=[t+n/2,e-30];return A`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${r} y1=${e} x2=${r} y2=${o} />
    <circle cx=${r} cy=${o} r="16" class="nf-hit" />
    <circle cx=${r} cy=${o} r="8" />
    <path d="M${r-4} ${o-1}a4 4 0 1 1 2 3.5" />
  </g>`}function hw(t,e){let n=e.level?.length?e.level:e.ruler;if(!n?.length)return g;let r=n.map(o=>t.toScreen(o));return A`<g class="nf-bg-ruler">
    ${r.length===2?A`<line x1=${r[0][0]} y1=${r[0][1]} x2=${r[1][0]} y2=${r[1][1]} />`:g}
    ${r.map(([o,i])=>A`<circle cx=${o} cy=${i} r="6" />`)}
  </g>`}function vp(t,e,n){let r=n?.background,o=e.picture(r?.image_id);if(!r||!o)return g;let[i,s]=t.toScreen([r.x,r.z]),a=r.width*t.scale,l=a*o.aspect,c=e.handlesShown;return A`<g transform="rotate(${r.rotation??0} ${i+a/2} ${s+l/2})">
    <image href=${o.url} x=${i} y=${s} width=${a} height=${l} opacity=${r.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?A`<rect class="nf-bg-frame" x=${i} y=${s} width=${a} height=${l} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+a} cy=${s+l} r="9" />
        ${dw(i,s,a)}`:g}
  </g>${hw(t,e)}`}var pw="strict-origin-when-cross-origin",Za=new Map,kp=new Map,Oi=new Map;function fw(t){let e=Za.get(t);return e||(e=fetch(t,{referrerPolicy:pw,mode:"cors",credentials:"omit"}).then(async n=>n.ok&&(n.headers.get("content-type")??"").startsWith("image/")?await n.blob():null).catch(()=>null).then(n=>(n||setTimeout(()=>Za.delete(t),6e4),n)),Za.set(t,e)),e}function xp(t,e){let n=kp.get(t);if(n)return n;let r=Oi.get(t);return r||(r=new Set,Oi.set(t,r),fw(t).then(o=>{o&&kp.set(t,URL.createObjectURL(o));let i=Oi.get(t)??new Set;if(Oi.delete(t),o)for(let s of i)s()})),r.add(e),null}function $p(t,e){let n=e.map;if(!Fi(n))return g;let r=Uh(n),o=Gh(n),[i,s]=t.toScreen([r.x,r.z]),a=t.scale;return A`<g class="nf-map" opacity=${r.opacity} pointer-events="none" transform="translate(${i} ${s}) rotate(${e.north??0})">
    ${Bh(n.lat,n.lon,r.zoom).map(l=>({tile:l,href:xp(Kh(o,l),t.redraw)})).filter(l=>l.href).map(({tile:l,href:c})=>A`<image href=${c} x=${l.east*a} y=${-l.north*a} width=${l.size*a+.6} height=${l.size*a+.6} preserveAspectRatio="none" />`)}
  </g>`}var qa=t=>Math.round(t*1e3)/1e3,Ya=(t,e)=>t.width*e,Un=(t,e)=>[t.x+t.width/2,t.z+Ya(t,e)/2];function Sp(t,e,n){let[r,o]=[t[0]-e[0],t[1]-e[1]];return[e[0]+r*Math.cos(n)-o*Math.sin(n),e[1]+r*Math.sin(n)+o*Math.cos(n)]}var Mp=t=>((t+180)%360+360)%360-180;function Rp(t,e,n){return{x:qa(t[0]-e/2),z:qa(t[1]-n/2)}}function Ep(t,e,n,r){if(Math.hypot(r[0]-n[0],r[1]-n[1])<.05)return null;let o=Math.atan2(r[1]-n[1],r[0]-n[0]),i=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(i)<1e-4)return null;let s=Sp(Un(t,e),n,i),a=Math.round(Mp((t.rotation??0)+i*180/Math.PI)*100)/100;return{...t,rotation:a,...Rp(s,t.width,Ya(t,e))}}function Ap(t,e,n,r,o){let i=Math.hypot(r[0]-n[0],r[1]-n[1]);if(!(o>0)||i<1e-4)return null;let s=o/i,[a,l]=Un(t,e),c=[n[0]+s*(a-n[0]),n[1]+s*(l-n[1])],u=t.width*s;return{...t,width:qa(u),...Rp(c,u,Ya(t,e)*s)}}function Fp(t,e,n){let r=Sp(n,Un(t,e),-(t.rotation??0)*Math.PI/180);return[r[0]-t.x,r[1]-t.z]}function Tp(t,e,n,r){let o=t+(n-e)*180/Math.PI;return Mp(r?Math.round(o/15)*15:Math.round(o*10)/10)}var mw=2048;async function jn(t){let e=await createImageBitmap(t),n=Math.min(1,mw/Math.max(e.width,e.height)),r=document.createElement("canvas");return r.width=Math.round(e.width*n),r.height=Math.round(e.height*n),r.getContext("2d").drawImage(e,0,0,r.width,r.height),{data:r.toDataURL("image/jpeg",.85),aspect:r.height/r.width}}var Li=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:n,api:r}=this.deps;if(n.hass){this.loading.add(e);try{let o=await r.fetchImage(n.hass,e),i=await this.aspectOf(o);this.pictures={...this.pictures,[e]:{url:o,aspect:i}},this.deps.refresh()}catch{}}}async aspectOf(e){let n=new Image;return n.src=e,await n.decode(),n.naturalHeight/n.naturalWidth}async upload(e){let{host:n,api:r}=this.deps;if(!e||!n.hass)return;let{data:o,aspect:i}=await this.deps.readPicture(e),s=I("img");await r.storeImage(n.hass,s,o),this.pictures={...this.pictures,[s]:{url:o,aspect:i}};let a=n.floor?.rooms??[],l=a.length>0?pe(a.flatMap(u=>u.points)):null,c={image_id:s,x:l?l.x0:0,z:l?l.z0:0,width:l?Math.max(4,Math.round((l.x1-l.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((n,r)=>Object.assign(r,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let n=[...this.levelPoints??[],e];if(n.length<2){this.level=n;return}this.level=null,this.straighten(n[0],n[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,n){let r=this.deps.host.floor?.background,o=this.picture(r?.image_id),i=r&&o?Ep(r,o.aspect,e,n):null;i&&this.setBackground(i)}applyRuler(){let e=this.deps.host.floor?.background,n=this.picture(e?.image_id),r=this.rulerPoints;if(!e||!n||!r||r.length<2)return;let o=Ap(e,n.aspect,r[0],r[1],this.rulerMetres);o&&(this.setBackground(o),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var zp=.1,Xa=(t,e,n)=>m`<button class="nf-btn nf-wide ${t?"nf-primary":""}" aria-pressed=${t} @click=${n}>${e}</button>`;function gw(t,e){let n=e.ruler;if(!n)return g;if(n.length<2)return R(t.t(n.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let r=Math.hypot(n[1][0]-n[0][0],n[1][1]-n[0][1]),o=()=>e.applyRuler();return m`${R(t.t("bg_ruler_length_hint",{m:q(t.hass,r,2)}),"nf-wide")}
    <label class="nf-field"
      >${t.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${e.rulerLength?String(e.rulerLength):""}
        @input=${i=>e.rulerLength=Oa(i.target.value)||0}
        @keydown=${i=>i.key==="Enter"&&o()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${o}>${t.t("bg_ruler_apply")}</button>`}function _w(t,e){if(!t.admin)return g;let n=t.t,r=e.level;return m`${Xa(e.edit,n(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${R(n(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${Xa(!!r,`\u{1F4D0} ${n(r?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${r?R(n(r.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):g}
    ${Xa(!!e.ruler,`\u{1F4CF} ${n(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${gw(t,e)}`}function Pp(t,e,n){let r=n.background,o=t.t,i=s=>r&&e.setBackground({...r,...s});return m`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
    <summary>${o("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${o("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${s=>{let a=s.target,l=a.files?.[0];a.value="",e.upload(l)}}
        />
      </label>
      ${r?m`${F(t,o("x"),r.x,s=>i({x:s}))} ${F(t,o("z"),r.z,s=>i({z:s}))}
          ${F(t,o("background_width"),r.width,s=>i({width:Math.max(zp,s)}),.01,zp)}
          ${F(t,o("background_rotation"),r.rotation??0,s=>i({rotation:Math.round(s*10)/10}),.5)}
          ${_w(t,e)}
          <label class="nf-field"
            >${o("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(ae(r.opacity))} @change=${s=>i({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${o("background_remove")}</button>`:g}
    </div>
  </details>`}var Op=1e-4;function Lp(t){return t.reduce((e,n,r)=>e+be(n,t[(r+1)%t.length]),0)/2}var Hp=t=>Lp(t)>=0?[...t]:[...t].reverse();var bw=(t,e,n=Op)=>ye(K(t,e))<n,yw=t=>t.map((e,n)=>[e,t[(n+1)%t.length]]);function ww(t,e,n){let r=K(n,e),o=Z(r,r),i=o?Math.max(0,Math.min(1,Z(K(t,e),r)/o)):0;return ye(K(t,[e[0]+r[0]*i,e[1]+r[1]*i]))}function vw(t,e,n=.03){return t.every(r=>W(r,e)||yw(e).some(([o,i])=>ww(r,o,i)<=n))}function Dp(t){let e=Hp(t);return e.every((n,r)=>be(K(n,e[(r-1+e.length)%e.length]),K(e[(r+1)%e.length],n))>=-Op)}function Ip(t,e){let n=[...t],r=Hp(e);for(let o=0;o<r.length&&n.length;o++){let i=r[o],s=r[(o+1)%r.length],a=c=>be(K(s,i),K(c,i)),l=n;n=[],l.forEach((c,u)=>{let d=l[(u+1)%l.length],[p,h]=[a(c),a(d)];if(p>=0&&n.push(c),p>=0!=h>=0){let f=p/(p-h);n.push([c[0]+(d[0]-c[0])*f,c[1]+(d[1]-c[1])*f])}})}return n.filter((o,i)=>!bw(o,n[(i+1)%n.length]))}function Cp(t,e){if(vw(t,e))return[...t];let n=Dp(t)?Ip(e,t):Dp(e)?Ip(t,e):null;return n&&n.length>=3&&Math.abs(Lp(n))>=.01?n:null}var Ja=["straight","quarter","l","half","u","spiral"],Qa=["solid","stringer","mono","cantilever"],el=["none","left","right","both"],tl=["headroom","full","none"],_t={shape:"straight",turn:"right",build:"solid",risers:!0,steps:null,run_width:null,down:!1,rail:"none",opening:"headroom",landing_after:null},nl={straight:[1,3.2],quarter:[2.2,2.6],l:[2.2,2.8],half:[2,2.6],u:[2.2,2.6],spiral:[1.6,1.6]},Kp=2,Gp=40;var Hi=(t,e)=>typeof e=="string"&&t.includes(e);function go(t){let e=t.stair??{},n=typeof e.steps=="number"&&Number.isFinite(e.steps)?Math.round(Math.min(Gp,Math.max(Kp,e.steps))):null,r=typeof e.run_width=="number"&&Number.isFinite(e.run_width)&&e.run_width>.2?e.run_width:null;return{shape:Hi(Ja,e.shape)?e.shape:_t.shape,turn:e.turn==="left"?"left":"right",build:Hi(Qa,e.build)?e.build:_t.build,risers:e.risers!==!1,steps:n,run_width:r,down:e.down===!0,rail:Hi(el,e.rail)?e.rail:_t.rail,opening:Hi(tl,e.opening)?e.opening:_t.opening,landing_after:typeof e.landing_after=="number"&&Number.isFinite(e.landing_after)?Math.max(1,Math.round(e.landing_after)):null}}var fo=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n],Wp=(t,e)=>Math.abs(t[0]-e[0])<1e-6&&Math.abs(t[1]-e[1])<1e-6;function Up(t){let e=[];for(let n of t)(!e.length||!Wp(e[e.length-1],n))&&e.push(n);for(;e.length>1&&Wp(e[0],e[e.length-1]);)e.pop();return e}function mo(t,e,n=!1){return{poly:Up([...t,...[...e].reverse()]),landing:n,left:t,right:e}}function po(t,e,n,r,o){let i=[];for(let s=0;s<o;s++){let[a,l]=[s/o,(s+1)/o];i.push(mo([fo(t,n,a),fo(t,n,l)],[fo(e,r,a),fo(e,r,l)]))}return i}function Np(t,e){let n=e;for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return fo(t[r],t[r+1],o?Math.min(1,n/o):0);n-=o}return t[t.length-1]}function kw(t,e,n){let r=[Np(t,e)],o=0;for(let i=0;i+1<t.length;i++)o+=Math.hypot(t[i+1][0]-t[i][0],t[i+1][1]-t[i][1]),o>e+1e-6&&o<n-1e-6&&r.push(t[i+1]);return r.push(Np(t,n)),r}var xw=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Vp(t,e,n,r,o){let i=xw(t),s=[];for(let a=0;a<o;a++){let l=Up([...a===0?[e]:[],n,...a===o-1?[r]:[]]);s.push(mo(kw(t,i*a/o,i*(a+1)/o),l.length?l:[n]))}return s}function Ci(t,e,n){if(t<=0)return[0,0];if(e<=.001)return[0,t];if(n<=.001)return[t,0];let r=Math.min(t,Math.max(0,Math.round(t*e/(e+n))));return[r,t-r]}function Bp(t,e){if(t.landing_after==null)return null;let n=Math.min(e-1,Math.max(1,Math.round(t.landing_after)))-1;return[n,e-1-n]}function $w(t,e,n,r){let[o,i,s,a]=[-e/2,e/2,-n/2,n/2];switch(t.shape){case"quarter":case"l":{let l=Math.min(t.run_width??Math.min(1,Math.min(e,n)/2),Math.min(e,n)-.05),c=[o+l,s+l],u=[[o,s+l],[o,s],[o+l,s]],d=t.shape==="l"?1:Math.min(r,r>=8?3:2),[p,h]=t.shape==="l"?Bp(t,r)??Ci(r-d,n-l,e-l):Ci(r-d,n-l,e-l),f=po([o,a],[o+l,a],[o,s+l],c,p),_=t.shape==="l"?[mo(u,[c],!0)]:Vp(u,c,c,c,d),b=po([o+l,s],c,[i,s],[i,s+l],h);return{treads:[...f,..._,...b],flight:l,column:0}}case"half":case"u":{let l=Math.min(t.run_width??Math.min(1.1,(e-.1)/2),(e-.02)/2),c=s+l,u=[[o,c],[o,s],[i,s],[i,c]],[d,p]=[[o+l,c],[i-l,c]],h=t.shape==="u"?1:Math.min(r,r>=12?6:r>=8?4:2),[f,_]=t.shape==="u"?Bp(t,r)??Ci(r-h,n-l,n-l):Ci(r-h,n-l,n-l),b=po([o,a],[o+l,a],[o,c],d,f),w=t.shape==="u"?[mo(u,[d,p],!0)]:Vp(u,d,[0,c],p,h),v=po([i,c],p,[i,a],[i-l,a],_);return{treads:[...b,...w,...v],flight:l,column:0}}case"spiral":{let l=Math.min(e,n)/2,c=Math.min(.08,l*.12),u=Math.min(.75,Math.max(.3,.22/(l*.6))),d=(h,f)=>[Math.cos(f)*h,Math.sin(f)*h],p=[];for(let h=0;h<r;h++){let[f,_]=[Math.PI+u*h,Math.PI+u*(h+1)],b=[0,.5,1].map(w=>d(l,f+(_-f)*w));p.push(mo(b,[d(c,f),d(c,_)]))}return{treads:p,flight:l-c,column:c}}default:return{treads:po([o,a],[i,a],[o,s],[i,s],r),flight:e,column:0}}}var Sw=(t,e)=>t.steps??Math.min(Gp,Math.max(Kp,Math.round(Math.abs(e)/.18)));function fn(t,e,n,r){let o=Sw(t,r),i=Math.abs(r)/o,s=$w(t,Math.max(.3,e),Math.max(.3,n),o),a=c=>[-c[0],c[1]];return{treads:s.treads.map((c,u)=>{let d=t.down?-i*(u+1):i*(u+1);return t.turn==="right"?{...c,top:d}:{poly:c.poly.map(a).reverse(),top:d,landing:c.landing,left:c.right.map(a),right:c.left.map(a)}}),rise:i,steps:o,column:s.column,flight:s.flight}}function Wi(t){let e=t.poly.reduce((n,r)=>[n[0]+r[0],n[1]+r[1]],[0,0]);return[e[0]/t.poly.length,e[1]/t.poly.length]}var te=t=>Math.round(t*1e3)/1e3,Mw=(t,e)=>((t+e)%360+360)%360;function jp(t,e){return{id:I("wall"),a:[te(t[0]),te(t[1])],b:[te(e[0]),te(e[1])],thickness:null}}function Ni(t,e,n,r){let o=Math.hypot(e[0]-t[0],e[1]-t[1]);if(r==="center"||o<1e-9)return[t,e];let i=(r==="left"?1:-1)*n/2/o,s=[(e[1]-t[1])*i,-(e[0]-t[0])*i];return[[t[0]+s[0],t[1]+s[1]],[e[0]+s[0],e[1]+s[1]]]}function _o(t,e){return t.axis?Ni(t.a,t.b,t.thickness??e,t.axis==="left"?"right":"left"):[t.a,t.b]}var Vi=(t,e,n,r)=>Ni(t,e,n.thickness??r,n.axis??"center");function Zp(t,e){let n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1])||1,r=Math.max(.1,e)/n;return[te(t.a[0]+(t.b[0]-t.a[0])*r),te(t.a[1]+(t.b[1]-t.a[1])*r)]}var qp=(t,e)=>({height:t>=e-.005?null:Math.max(.05,t)});function Yp(t,e){return{id:I("hole"),type:"stairwell",x:te((t[0]+e[0])/2),z:te((t[1]+e[1])/2),w:te(e[0]-t[0]),d:te(e[1]-t[1]),h:.02,rotation:0,variant:null}}var Xp=t=>({id:I("outdoor"),type:"lawn",points:t.map(([e,n])=>[te(e),te(n)])});function Jp(t,e,n){t.points.splice(e+1,0,[te(n[0]),te(n[1])])}function Qp(t,e){return t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),!0)}var ef=t=>({...t,id:I("outdoor"),points:t.points.map(([e,n])=>[te(e+.5),te(n+.5)])});function rl(t,e,n,r){let[o,i,s]=dt(t),a=e.floors.filter(u=>u.elevation>n.elevation).sort((u,d)=>u.elevation-d.elevation)[0],l=t==="stairs"?te(a?a.elevation-n.elevation:n.height+.25):s,c={id:I("furniture"),type:t,x:te(r[0]),z:te(r[1]),rotation:0,w:o,d:i,h:l,variant:null};return t==="stairs"&&(c.stair={..._t}),c}var tf=t=>({...structuredClone(t),id:I("furniture"),x:te(t.x+.3),z:te(t.z+.3)}),nf=(t,e)=>Mw(t,e);function rf(t){let[e,n,r]=dt("parking");return{id:I("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,te(t.w+.5)),d:Math.max(n,te(t.d+.4)),h:r,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}}}function of(t,e){let[n,r,o]=dt(e);return{id:I("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:o,variant:null,entity:t.entity_id,name:t.name??null,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.locked?{locked:!0}:{}}}var sf=(t,e)=>({entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,animations_enabled:t.animations_enabled,effect_animations:structuredClone(t.effect_animations),...t.name?{name:t.name}:{}});function af(t,e){for(let n of t.floors)n.placements=n.placements.filter(r=>r.entity_id!==e),n.furniture=n.furniture.filter(r=>!(he(r.type)&&r.entity===e))}function ol(t,e,n,r){let o=new Set(r);for(let s of t.floors)s.placements=s.placements.filter(a=>!o.has(a.entity_id)),s.furniture=s.furniture.filter(a=>!(he(a.type)&&a.entity&&o.has(a.entity)));let i=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>he(s.type)).map(s=>[s.x,s.z])];for(let s of ad(n,r,i)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[a,l,c]=it.lamp_ceiling;e.furniture.push({id:I("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:a,d:l,h:c,variant:null,entity:s.entity_id,power:null})}}function lf(t){let[e,n]=ve(t.points);return[te(e),te(n)]}function cf(t,e,n,r){let o=Math.min(n,t)/2,i=r>0?Math.round(e/r)*r:e;return te(Math.min(t-o,Math.max(o,i)))}function uf(t,e){let n=xn[e],r=$n(t)===e?{}:{width:n.width};return{type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:n.style??null,opens:n.opens??null,...r}}function df(t,e,n){let r=pe(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:e==="w"?s=o+Math.max(.1,n):a=i+Math.max(.1,n),[[o,i],[s,i],[s,a],[o,a]].map(([l,c])=>[te(l),te(c)])}function hf(t){return t.furniture.map((e,n)=>({item:e,index:n,base:Se(t,e)})).sort((e,n)=>e.base-n.base||e.index-n.index).map(e=>e.item)}function pf(t,e,n,r){let o=null;for(let i of t){let[s,a]=[n(i.a),n(i.b)],l=(a[0]-s[0])**2+(a[1]-s[1])**2,c=l<1e-9?0:Math.min(1,Math.max(0,((e[0]-s[0])*(a[0]-s[0])+(e[1]-s[1])*(a[1]-s[1]))/l)),u=Math.hypot(e[0]-(s[0]+(a[0]-s[0])*c),e[1]-(s[1]+(a[1]-s[1])*c));u<=r&&(!o||u<o.d)&&(o={id:i.id,d:u})}return o?.id??null}function Bi(t,e,n){if(!t.admin)return g;let r=n.edit?.key===e;return m`<button class="nf-btn" aria-pressed=${r} title=${t.t("arc_hint")} @click=${()=>n.setEdit(r?null:{key:e,bulge:.5,error:null})}>
    ◠ ${t.t("arc")}
  </button>`}function Ki(t,e,n){let r=n.edit;if(!t.admin||r?.key!==e)return g;let o=t.t;return m`<span class="nf-wide nf-split-row" title=${o("arc_bulge_hint")}
      >${F(t,o("arc_bulge"),r.bulge,i=>n.setEdit({...r,bulge:i,error:null}),.05)}
      <button class="nf-btn nf-primary" ?disabled=${Math.abs(r.bulge)<.01} @click=${()=>n.apply(r)}>${o("arc_apply")}</button></span
    >
    ${r.error?m`<p class="nf-sub nf-wide nf-notice">${r.error}</p>`:g}`}var Gi=(t,e,n)=>Math.min(e,Math.max(t,ae(n)));function il(t,e,n){let r=t.t,o=l=>n.update(l),i=pe(e.points),s=gu.map(l=>[l,r(`out_${l}`)]),a=_u.map(l=>[l,r(`slope_${l.replace("-","n")}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("outdoor")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${O(t,r("outdoor_type"),e.type,s,l=>o({type:l}),{wide:!0})}
      ${O(t,r("area"),e.area_id??"",[["",r("no_area")],...Object.values(t.hass?.areas??{}).sort((l,c)=>l.name.localeCompare(c.name)).map(l=>[l.area_id,l.name])],l=>o({area_id:l||null}),{wide:!0,title:r("outdoor_area_hint")})}
      ${e.type==="pool"||e.type==="wild"||e.type==="bed"?m`${D(t,r("pool_temp"),e.temp_entity??null,void 0,C(t.hass,l=>l.startsWith("sensor.")&&t.hass?.states[l]?.attributes.device_class==="temperature"),l=>o({temp_entity:l&&l!=="none"?l:null}))}
          ${D(t,r("pool_pump"),e.pump_entity??null,void 0,C(t.hass,l=>/^(switch|fan|valve|input_boolean|binary_sensor)\./.test(l)),l=>o({pump_entity:l&&l!=="none"?l:null}))}`:g}
      ${Sn(e.points)?m`${F(t,r("x"),i.x0,l=>n.setRectangle("x",l))} ${F(t,r("z"),i.z0,l=>n.setRectangle("z",l))}
          ${F(t,r("width"),i.x1-i.x0,l=>n.setRectangle("w",l),.01,.1)} ${F(t,r("depth"),i.z1-i.z0,l=>n.setRectangle("d",l),.01,.1)}`:g}
      ${Cs(e.type)?F(t,r("outdoor_height"),e.height??Hs[e.type],l=>o({height:Gi(.1,6,l)}),.05,.1):g}
      ${F(t,r("outdoor_offset"),e.offset??0,l=>o({offset:Gi(-10,10,l)||null}),.05)}
      ${e.type!=="pool"?m`${F(t,r("outdoor_slope"),e.slope??0,l=>o({slope:Gi(0,20,l)||null}),.05,0)}
          ${O(t,r("outdoor_slope_dir"),e.slope_dir??"x",a,l=>o({slope_dir:l}))}`:g}
      ${F(t,r("outdoor_opacity"),Math.round((e.opacity??1)*100),l=>o({opacity:l>=100||!(l>0)?null:Math.max(10,Math.min(95,l))/100}),5,10)}
      ${L(t,r("outdoor_outline"),e.outline!==!1,l=>o({outline:l?void 0:!1}),{title:r("outdoor_outline_hint")})}
      ${e.type==="fence"||e.type==="pergola"?L(t,r("outdoor_open"),!!e.open,l=>o({open:l||void 0}),{title:r("outdoor_open_hint")}):g}
      ${e.type==="pergola"?L(t,r("outdoor_bracing"),!!e.bracing,l=>o({bracing:l||void 0})):g}
      ${L(t,r("outdoor_cut"),wu(e),l=>o({cut:l===(e.type==="pool")?void 0:l}),{title:r("outdoor_cut_hint")})}
    </div>
    ${e.type==="fence"?Rw(t,e,o):g}
    ${t.admin?m`<div class="nf-actions">
            ${e.points.map((l,c)=>m`<button class="nf-chip" title=${r("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>n.removeCorner(c)}>${c+1} ×</button>`)}
          </div>
          ${R(r("outdoor_corners_hint"))}`:g}
    ${e.slope?R(r("outdoor_slope_hint")):g} ${R(r("outdoor_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}function Rw(t,e,n){let r=t.t,o=e.gates??[],i=h=>n({gates:h.length?h:void 0}),s=e.points.map((h,f)=>[String(f),`${f+1} \u2192 ${(f+1)%e.points.length+1}`]),a=h=>{let[f,_]=[e.points[h],e.points[(h+1)%e.points.length]];return f&&_?Math.hypot(_[0]-f[0],_[1]-f[1]):0},l=(h,f)=>i(o.map((_,b)=>b===h?{..._,...f}:_)),c=C(t.hass,h=>/^(cover|switch|input_boolean|lock)\./.test(h)),u=C(t.hass,h=>h.startsWith("binary_sensor.")),d=[["single",r("gate_single")],["double",r("gate_double")],["sliding",r("gate_sliding")]],p=()=>{let f=a(0);i([...o,{id:I("gate"),edge:0,offset:ae(f/2),width:Math.min(1.2,Math.max(.5,ae(f*.4))),kind:"single"}])};return m`<h4 class="nf-lib-head">${r("fence_gates")}</h4>
    ${o.map((h,f)=>m`<div class="nf-form">
        ${O(t,r("gate_edge"),String(h.edge),s,_=>l(f,{edge:Number(_)}))}
        ${O(t,r("gate_kind"),h.kind,d,_=>l(f,{kind:_,width:_==="single"&&h.width>1.6?1:h.width}))}
        ${F(t,r("gate_offset"),h.offset,_=>l(f,{offset:Math.max(0,Math.min(a(h.edge),ae(_)))}),.05,0)}
        ${F(t,r("gate_width"),h.width,_=>l(f,{width:Math.max(.3,Math.min(12,ae(_)))}),.05,.3)}
        ${D(t,r("gate_entity"),h.entity??null,void 0,c,_=>l(f,{entity:_&&_!=="none"?_:null}))}
        ${D(t,r("gate_contact"),h.contact??null,void 0,u,_=>l(f,{contact:_&&_!=="none"?_:null}))}
        ${t.admin?m`<button class="nf-btn nf-danger nf-wide" @click=${()=>i(o.filter((_,b)=>b!==f))}>${r("delete")}</button>`:g}
      </div>`)}
    ${t.admin&&o.length<20?m`<button class="nf-btn" @click=${p}>${r("gate_add")}</button>`:g}
    ${R(r("fence_gates_hint"))}`}var Ew=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],Aw={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"};function ff(t,e,n){let r=t.t,{draft:o}=e,i=d=>q(t.hass,d,2),[s,a]=[o[0],o[o.length-1]],l=s&&o.length>1?Math.hypot(a[0]-s[0],a[1]-s[1]):0,c=d=>{let p=Aw[d.key];p?(d.preventDefault(),n.step(p)):d.key==="Enter"&&n.close()},u=s?m`${R(r("measure_from",{x:i(s[0]),z:i(s[1])}))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${r("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(e.length)} @input=${d=>n.setLength(Number.parseFloat(d.target.value.replace(",","."))||0)} @keydown=${c} />
          </label>
          <div class="nf-arrows nf-wide">${Ew.map(([d,p])=>m`<button class="nf-btn nf-arrow-${d}" title=${r(`dir_${d}`)} @click=${()=>n.step(d)}>${p}</button>`)}</div>
        </div>
        ${o.length>1?m`<ol class="nf-measure-list">${o.slice(1).map((d,p)=>m`<li>${i(Math.hypot(d[0]-o[p][0],d[1]-o[p][1]))} m</li>`)}</ol>`:g}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${o.length<3} @click=${()=>n.close()}>${r("measure_close")}</button>
          <button class="nf-btn" ?disabled=${o.length<2} @click=${()=>n.undo()}>${r("measure_undo")}</button>
        </div>
        ${o.length>=3?R(r("measure_gap",{gap:i(l)})):g}`:R(r("measure_start"));return m`<section>
    <h3>${r("measure")}</h3>
    ${u}
    <h4 class="nf-lib-head">${r("rect_by_size")}</h4>
    <div class="nf-form">
      ${F(t,r("width"),e.rectSize[0],d=>n.setRectSize([Math.max(.1,d),e.rectSize[1]]),.01,.1)}
      ${F(t,r("depth"),e.rectSize[1],d=>n.setRectSize([e.rectSize[0],Math.max(.1,d)]),.01,.1)}
      <button class="nf-btn nf-wide" @click=${()=>n.addRectangle()}>${r("rect_add")}</button>
    </div>
    ${R(r("measure_hint"))}
  </section>`}function sl(t,e,n){let r=t.t,o=t.floor?.height??2.5,i=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);return m`<section>
    <div class="nf-h3row"><h3>${r("free_wall")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${F(t,r("wall_length"),i,s=>n.update({b:Zp(e,s)}),.01,.1)}
      ${F(t,r("wall_thickness"),e.thickness??t.doc.settings.wall_interior,s=>n.update({thickness:Gi(.02,1,s)}),.01,.02)}
      ${O(t,r("wall_side"),e.axis??"center",["center","left","right"].map(s=>[s,r(`wall_side_${s}`)]),s=>n.update({axis:s==="center"?null:s}),{title:r("wall_axis_hint")})}
      ${F(t,r("wall_height"),e.height??o,s=>n.update(qp(s,o)),.05,.05)}
      ${L(t,r("free_wall_slope"),e.height_end!=null,s=>n.update(s?{height:e.height??o,height_end:Math.max(.2,(e.height??o)/2)}:{height_end:null}),{title:r("free_wall_slope_hint")})}
      ${e.height_end!=null?F(t,r("free_wall_height_end"),e.height_end,s=>n.update({height_end:Math.max(.05,s)}),.05,.05):g}
      ${L(t,r("free_wall_hang"),e.bottom!=null,s=>n.update(s?{bottom:Math.round((e.height??o)*.6*20)/20,bottom_end:null}:{bottom:null,bottom_end:null}),{title:r("free_wall_hang_hint")})}
      ${e.bottom!=null?m`${F(t,r("free_wall_bottom"),e.bottom,s=>n.update({bottom:Math.max(0,s)}),.05,.05)}
          ${L(t,r("free_wall_bottom_slope"),e.bottom_end!=null,s=>n.update({bottom_end:s?Math.max(0,(e.bottom??0)-.5):null}))}
          ${e.bottom_end!=null?F(t,r("free_wall_bottom_end"),e.bottom_end,s=>n.update({bottom_end:Math.max(0,s)}),.05,.05):g}`:g}
    </div>
    ${t.admin?m`<div class="nf-actions">${Bi(t,`wall:${e.id}`,n.arc)}<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>n.join()}>${r("wall_join")}</button><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
    ${n.note?R(n.note):g}
    <div class="nf-form">${Ki(t,`wall:${e.id}`,n.arc)}</div>
    ${R(r("free_wall_hint"))}
  </section>`}var Bt=t=>Math.round(t*1e3)/1e3,Fw=2.4;function mf(t,e,n){let r=_a(t,e[0],e[1],n[0],n[1]),o=r===null,i=Math.min(...t.floors.map(l=>l.elevation)),s=Bt(r??i+Fw),a=o?6:t.settings.roof.pitch||35;return{id:I("roof"),x0:Bt(e[0]),z0:Bt(e[1]),x1:Bt(n[0]),z1:Bt(n[1]),shape:o?"pent":"gable",axis:n[0]-e[0]>=n[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}}}function gf(t){let e=n=>Bt(n+1);return{...structuredClone(t),id:I("roof"),x0:e(t.x0),x1:e(t.x1),z0:e(t.z0),z1:e(t.z1)}}var _f=(t,e)=>t.findIndex(n=>n.id===e)+1;function al(t){return t.points&&t.points.length>=3?t.points.map(([e,n])=>[e,n]):t.rotation?zr(t):[[t.x0,t.z0],[t.x1,t.z0],[t.x1,t.z1],[t.x0,t.z1]]}function bf(t,e,n){let r=al(t);r.splice(e+1,0,[Bt(n[0]),Bt(n[1])]),t.points=r,Object.assign(t,Ct(r))}function yf(t,e){return!t.points||t.points.length<=3||e<0||e>=t.points.length?!1:(t.points.splice(e,1),Object.assign(t,Ct(t.points)),!0)}var Ui=t=>Math.round(t*1e3)/1e3;function ji(t,e,n){let r=a=>a.thickness??e,o=new Map,i=a=>{let l=o.get(a.id);return l||o.set(a.id,l={a:[a.a[0],a.a[1]],b:[a.b[0],a.b[1]]}),l};for(let a of t){let l=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(l<.05)continue;let c=[(a.b[0]-a.a[0])/l,(a.b[1]-a.a[1])/l];for(let u of["a","b"]){let d=a[u],p=u==="a"?[-c[0],-c[1]]:c,h=null;for(let f of t){if(f.id===a.id)continue;let _=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1]);if(_<.05)continue;let b=[(f.b[0]-f.a[0])/_,(f.b[1]-f.a[1])/_],w=p[0]*b[1]-p[1]*b[0];if(Math.abs(w)<.3)continue;let[v,y]=[f.a[0]-d[0],f.a[1]-d[1]],x=(v*b[1]-y*b[0])/w,k=(v*p[1]-y*p[0])/w;if(Math.abs(x)>r(f)/2/Math.abs(w)+.12)continue;let S=r(a)/2/Math.abs(w)+.12;if(k<-S||k>_+S)continue;let $=k<S||k>_-S,E=[d[0]+p[0]*x,d[1]+p[1]*x],T=$?0:r(f)/2/Math.abs(w),P=[Ui(E[0]-p[0]*T),Ui(E[1]-p[1]*T)],z=Math.hypot(P[0]-d[0],P[1]-d[1]);(!h||z<h.off-1e-6||Math.abs(z-h.off)<=1e-6&&$&&!h.corner)&&(h={to:P,off:z,corner:$,partner:f.id})}!h||h.off<.0015||n&&a.id!==n&&!(h.corner&&h.partner===n)||(i(a)[u]=h.to)}}let s=[];for(let a of t){let l=o.get(a.id);if(!l||Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1])<.1)continue;let c=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]),u=((a.a[0]-l.a[0])*(a.b[0]-a.a[0])+(a.a[1]-l.a[1])*(a.b[1]-a.a[1]))/c;s.push({id:a.id,a:l.a,b:l.b,startMoved:Ui(u)})}return s}function Zi(t,e){for(let n of e){let r=(t.walls??[]).find(o=>o.id===n.id);if(r&&(r.a=n.a,r.b=n.b,n.startMoved))for(let o of t.openings)o.wall===n.id&&(o.offset=Math.max(0,Ui(o.offset+n.startMoved)))}return e.length}var Tw={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Kt=t=>Tw[t];function qi(t,e){let n=new Set;for(let r of t?.placements??[])W([r.x,r.z],e.points)&&n.add(r.entity_id);for(let r of t?.furniture??[])he(r.type)&&r.entity&&W([r.x,r.z],e.points)&&n.add(r.entity);return n}function wf(t,e){let n=new Map;for(let r of t.floors){let o=[...r.placements.map(i=>[i.entity_id,i.x,i.z]),...r.furniture.filter(i=>he(i.type)&&i.entity).map(i=>[i.entity,i.x,i.z])];for(let[i,s,a]of o){let l=r.rooms.find(c=>W([s,a],c.points));l&&l.id!==e.id&&n.set(i,l.name)}}return n}var vf=(t,e)=>(t??[]).includes(e)?(t??[]).filter(n=>n!==e):[...t??[],e];function Yi(t,...e){let n=t.trim().toLowerCase();return!n||e.some(r=>(r??"").toLowerCase().includes(n))}function kf(t,e){return t.map(n=>({o:n,r:e(n.id)})).sort((n,r)=>n.r-r.r).map(({o:n})=>n)}function xf(t,e){let n=e,r=0;return{taken:t.map(i=>{let s=i.ids.slice(0,Math.max(0,n));return n-=s.length,r+=i.ids.length-s.length,[...s]}),left:r}}var ll=50;function cl(t,e,n,r,o,i,s){let a=e.includes(n);return m`<button class="nf-pin ${a?"nf-pin-on":""}" aria-pressed=${a} title=${t.t(a?i[0]:i[1])} @click=${()=>s.patchRoom({[r]:vf(e,n)})}>${a?o[0]:o[1]}</button>`}function zw(t,e,n,r,o,i){let[s,a,l]=[e.hidden??[],e.no_state??[],e.panel??[]];return(c,u=!1,d=o)=>{let p=n.has(c),h=p?void 0:r.get(c),f=s.includes(c),_=Wn(t,c);return m`<div class="nf-row nf-dev-row ${u?"nf-dev-extra":""} ${f?"nf-dev-hidden":""}">
      <button class="nf-dev-name ${p?"":"nf-muted"}" ?disabled=${!p} @click=${()=>i.select(c)}>
        ${_?m`<ha-icon class="nf-dev-icon" style="--mdc-icon-size:16px" .icon=${_}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Kt((t.hass?Ue(t.hass,c):Q(c))??"sensor")} /></svg>`}
        <span>${G(t.hass,c,d)}${h?m`<small class="nf-muted"> · ${t.t("devices_placed_in",{room:h})}</small>`:g}</span>
      </button>
      ${t.admin?cl(t,s,c,"hidden",["\u{1F648}","\u{1F441}"],["panel_unhide","panel_hide"],i):g}
      ${t.admin&&!f?cl(t,a,c,"no_state",["\u2205","Aa"],["panel_state_show","panel_state_hide"],i):g}
      ${t.admin&&!p?cl(t,l,c,"panel",["\u2605","\u2606"],["panel_unpin","panel_pin"],i):g}
      ${t.admin?p?m`<button class="nf-link" @click=${()=>i.remove(c)}>${t.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>i.place([c])}>${t.t("devices_place")}</button>`:g}
    </div>`}}function Pw(t,e,n,r,o){let{hass:i}=t;if(!i)return m``;let s=u=>u>0?R(t.t("devices_narrow",{n:u})):g,a=R(t.t("devices_none")),l=e.deviceQuery;if(o==="other"){let u=Zu(i,n.area_id).map(f=>({...f,ids:f.ids.filter(_=>Yi(l,`${G(i,_,f.name)} ${_} ${f.name}`))})),{taken:d,left:p}=xf(u,ll),h=u.map((f,_)=>d[_].length>0?m`<div class="nf-dev-area">${f.name}</div>${d[_].map(b=>r(b,!1,f.name))}`:g);return d.some(f=>f.length>0)?m`<div class="nf-room-list">${h}</div>${s(p)}`:a}let c=qu(i).filter(u=>Yi(l,`${G(i,u)} ${u} `));return c.length>0?m`<div class="nf-room-list">${c.slice(0,ll).map(u=>r(u))}</div>${s(c.length-Math.min(c.length,ll))}`:a}function Dw(t,e,n,r,o,i,s){let{hass:a}=t,l=a?ke(a,n).filter(w=>Pt(Ue(a,w))):[];if(!n.area_id)return R(t.t("devices_none_area"));if(l.length===0)return R(t.t("devices_none"));let c=a?Rn(a,l):[],u=c.map(w=>w.primary).filter(w=>!o.has(w)),d=e.deviceQuery,p=(t.floor?.placements??[]).filter(w=>Q(w.entity_id)==="light"&&(w.mount??"ceiling")==="ceiling"&&W([w.x,w.z],n.points)).length,h=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${d} @input=${w=>e.deviceQuery=w.target.value} />`,f=w=>Yi(d,G(a,w,i),w),_=w=>{let v=w.others.filter(f),y=e.isUnfolded(w.primary)||!!d.trim()&&v.length>0;return!f(w.primary)&&v.length===0?g:m`${r(w.primary)}
      ${w.others.length>0?m`<button class="nf-more" @click=${()=>e.toggleUnfolded(w.primary)}>${y?t.t("devices_less"):t.t("devices_more",{n:w.others.length})}</button>`:g}
      ${y?(d.trim()?v:w.others).map(x=>r(x,!0)):g}`},b=()=>s.confirm(t.t("devices_place_all_confirm",{n:u.length}))&&s.place(u);return m`${t.admin&&p>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>s.spreadLights(n)}>${t.t("lights_spread")}</button>`:g}
    ${l.length>8?h:g}
    <div class="nf-room-list">${c.map(_)}</div>
    ${t.admin&&u.length>1?m`<button class="nf-link nf-place-all" @click=${b}>${t.t("devices_place_all_n",{n:u.length})}</button>`:g}
    ${R(t.t("devices_hint"))}`}function ul(t,e,n,r){let{hass:o}=t,i=n.area_id?o?.areas?.[n.area_id]?.name:void 0,s=qi(t.floor,n),a=zw(t,n,s,wf(t.doc,n),i,r),l=t.admin?e.deviceSource:"area",c=o?Rn(o,ke(o,n).filter(p=>Pt(Ue(o,p)))).length:0,u=[["area",`${t.t("devices_src_area")}${c>0?` (${c})`:""}`],["other",t.t("devices_src_other")],["none",t.t("devices_src_none")]],d=m`<input class="nf-search" type="search" placeholder=${t.t("devices_search")} .value=${e.deviceQuery} @input=${p=>e.deviceQuery=p.target.value} />`;return m`<section>
    <h3>${t.t("devices")}</h3>
    ${R(t.t("devices_panel_hint"))}
    ${t.admin?m`<div class="nf-seg nf-dev-source">${u.map(([p,h])=>m`<button aria-pressed=${l===p} @click=${()=>e.deviceSource=p}>${h}</button>`)}</div>`:g}
    ${l!=="area"?m`${d}${Pw(t,e,n,a,l)}`:Dw(t,e,n,a,s,i,r)}
  </section>`}function $f(t,e,n){let{hass:r}=t;if(!r)return g;let o=!!e.climate&&Object.values(e.climate).some(a=>a!=null),i=(a,l)=>{let c={...e.climate??{},[a]:l};n({climate:Object.values(c).every(u=>u==null)?null:c})},s=(a,l)=>{let c=Yu(r,t.floor??null,{...e,climate:null},a),u=C(r,b=>me(b)&&r.states[b]?.attributes.device_class===Js[a]),d=kf(u,b=>(Lt(r,b)===e.area_id?0:1)+(Qs(r,b)?0:2)),p=[e.climate?.[a]??null].flat(),h=b=>{let w=b.filter(v=>!!v&&v!=="none");i(a,b[0]==="none"?"none":w.length>1?w:w[0]??null)},_=p[0]&&p[0]!=="none"?[...p,null]:p;return _.map((b,w)=>D(t,w?t.t("climate_more"):l,b,w?void 0:c[0]??null,d,v=>h(_.map((y,x)=>x===w?v:y))))};return m`<details class="nf-points" ?open=${o}>
    <summary>${t.t("climate")}</summary>
    <div class="nf-form">${s("temperature",t.t("climate_temperature"))} ${s("humidity",t.t("climate_humidity"))} ${s("co2",t.t("climate_co2"))}</div>
    ${R(t.t("climate_hint"))}
  </details>`}var dl="metric",Mf=t=>{dl=t==="imperial"?"imperial":"metric"};var Sf=.3048;function ge(t,e,n=2,r=dl){if(r==="metric")return`${q(t,e,n)} m`;let o=e<0?"\u2212":"",i=Math.round(Math.abs(e)/.0254*2),s=Math.floor(i/24),a=i-s*24,l=`${Math.floor(a/2)}${a%2?"\xBD":""}`;return s?`${o}${s}\u2032 ${l}\u2033`:`${o}${l}\u2033`}function ze(t,e,n=dl){return n==="metric"?`${q(t,e,1)} m\xB2`:`${q(t,e/(Sf*Sf),0)} ft\xB2`}var Iw=.15,Ow=(t,e)=>Math.abs((t-e+540)%360-180);function Lw(t,e,n,r){return t.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Z(K(i,n),r))<.02&&Math.abs(Z(K(a,n),r))<.02}))}function pl(t,e,n,r){let o=e.points,[i,s]=[o[n],o[(n+1)%o.length]],a=ye(K(s,i)),l=_e(o)>=0?1:-1,c=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[-c[1]*l||0,c[0]*l||0],d=c[0]*u[1]-c[1]*u[0]>0,p=e.wall_heights?.[n],h=e.ceiling??t.height,f=typeof p=="number"?p:Array.isArray(p)?Math.max(...p.map(w=>w??h)):h,_=e.wall_slopes?.[n],b=typeof _=="number"&&typeof p=="number"?_:f;return{origin:d?i:s,along:d?c:[-c[0],-c[1]],normal:u,length:a,face:Lw(t,e,i,u)?r/2:0,heightLeft:d?f:b,heightRight:d?b:f}}function hl(t,e){let n=K(e,t.origin);return{u:Z(n,t.along),depth:Z(n,t.normal)-t.face}}function Hw(t,e){let n=t.rooms.find(s=>s.id===e.room_id);if(!n||e.wall)return null;let[r,o]=[n.points[e.edge],n.points[(e.edge+1)%n.points.length]];if(!r||!o)return null;let i=ye(K(o,r))||1;return[r[0]+(o[0]-r[0])*e.offset/i,r[1]+(o[1]-r[1])*e.offset/i]}var Rf=t=>U(t.type)?.mount==="wall"||t.type==="lamp_wall"||t.mount_y!=null;function Ef(t,e,n){let r=[];for(let i of t.openings){let s=Hw(t,i);if(!s)continue;let{u:a,depth:l}=hl(n,s);Math.abs(l+n.face)>.3||a<-.01||a>n.length+.01||r.push({id:i.id,kind:"opening",type:i.type,x0:a-i.width/2,x1:a+i.width/2,y0:i.sill,y1:i.sill+i.height,lifts:i.type==="window"})}let o=Math.atan2(-n.normal[0],n.normal[1])*180/Math.PI;for(let i of t.furniture){if(!W([i.x,i.z],e.points)||Ow(i.rotation,o)>20)continue;let{u:s,depth:a}=hl(n,[i.x,i.z]);if(a-i.d/2>Iw||s<0||s>n.length)continue;let l=Se(t,i);r.push({id:i.id,kind:"furniture",type:i.type,x0:s-i.w/2,x1:s+i.w/2,y0:l,y1:l+i.h,lifts:Rf(i)})}return r.sort((i,s)=>+(i.kind==="furniture")-+(s.kind==="furniture")||i.x0-s.x0)}var bo=t=>Math.round(t*1e3)/1e3;function Af(t,e,n,r){let o=hl(t,[e.x,e.z]).depth,i=Math.min(t.length-e.w/2,Math.max(e.w/2,n+e.w/2)),s=[t.origin[0]+t.along[0]*i+t.normal[0]*(o+t.face),t.origin[1]+t.along[1]*i+t.normal[1]*(o+t.face)];return{x:bo(s[0]),z:bo(s[1]),...r!==null&&Rf(e)?{mount_y:bo(Math.max(0,r))}:{}}}function Ff(t,e,n,r,o){let[i]=[e.points[n.edge]],s=Math.min(t.length-n.width/2,Math.max(n.width/2,r+n.width/2)),a=ye(K(i,t.origin))<1e-6?s:t.length-s;return{offset:bo(a),...o!==null&&n.type==="window"?{sill:bo(Math.max(0,o))}:{}}}var Tf=.01,zf=t=>Math.round(t/Tf)*Tf,fl=class extends se{static properties={host:{attribute:!1},doc:{attribute:!1},roomId:{},edge:{type:Number},_sel:{state:!0},_drag:{state:!0}};constructor(){super(),this._sel=null,this._drag=null}get room(){return this.host.floor?.rooms.find(e=>e.id===this.roomId)}frame(){let e=this.room;return e&&this.host.floor?pl(this.host.floor,e,this.edge,this.host.doc.settings.wall_interior):null}boxes(){let e=this.room,n=this.frame();return e&&n&&this.host.floor?Ef(this.host.floor,e,n):[]}place(e,n,r){let o=this.room,i=this.frame();!o||!i||this.host.change((s,a)=>{if(e.kind==="furniture"){let l=a.furniture.find(c=>c.id===e.id);l&&Object.assign(l,Af(i,l,n,e.lifts?r:null))}else{let l=a.openings.find(u=>u.id===e.id),c=a.rooms.find(u=>u.id===l?.room_id);l&&c&&Object.assign(l,Ff(c.id===o.id?i:pl(a,c,l.edge,this.host.doc.settings.wall_interior),c,l,n,e.lifts?r:null))}})}toWall(e){let r=this.renderRoot.querySelector("svg").getScreenCTM()?.inverse();if(!r)return[0,0];let o=new DOMPoint(e.clientX,e.clientY).matrixTransform(r);return[o.x,-o.y]}down(e,n){if(this._sel=n.id,!this.host.admin)return;e.currentTarget.setPointerCapture(e.pointerId);let[r,o]=this.toWall(e);this._drag={id:n.id,x0:n.x0,y0:n.y0,startU:r,startY:o,fromX:n.x0,fromY:n.y0}}move(e,n){let r=this._drag;if(!r||r.id!==n.id)return;let[o,i]=this.toWall(e),s=this.frame(),a=n.x1-n.x0,l=Math.min((s?.length??0)-a,Math.max(0,zf(r.fromX+o-r.startU))),c=n.lifts?Math.max(0,zf(r.fromY+i-r.startY)):r.fromY;this._drag={...r,x0:l,y0:c}}up(e){let n=this._drag;this._drag=null,!(!n||n.id!==e.id||Math.abs(n.x0-n.fromX)<1e-6&&Math.abs(n.y0-n.fromY)<1e-6)&&this.place(e,n.x0,n.y0)}nameOf(e){if(e.kind==="furniture")return this.host.floor?.furniture.find(o=>o.id===e.id)?.name||tt(this.host.hass,e.type);let n=this.host.floor?.openings.find(r=>r.id===e.id);return n?this.host.t(`preset_${$n(n)}`):e.type}updated(e){(e.has("edge")||e.has("roomId"))&&(this._sel=null)}render(){let e=this.host.t,n=this.room,r=this.frame();if(!n||!r)return g;let o=n.points.length,i=h=>ge(this.host.hass,h),s=this.boxes().map(h=>this._drag?.id===h.id?{...h,x1:this._drag.x0+(h.x1-h.x0),y1:this._drag.y0+(h.y1-h.y0),x0:this._drag.x0,y0:this._drag.y0}:h),a=Math.max(r.heightLeft,r.heightRight,...s.map(h=>h.y1)),l=.35,c=`${-l} ${-(a+l)} ${r.length+2*l} ${a+2*l+.25}`,u=s.find(h=>h.id===this._sel)??null,d=h=>{let f=Math.min(.14,Math.max(.07,(h.x1-h.x0)/7));return A`<text x=${(h.x0+h.x1)/2} y=${-(h.y0+h.y1)/2} font-size=${f} text-anchor="middle" dominant-baseline="middle">${this.nameOf(h)}</text>`},p=u?A`<g class="dim">
          <line x1="0" x2=${u.x0} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${u.x0/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(u.x0)}</text>
          <line x1=${u.x1} x2=${r.length} y1=${-(u.y0+u.y1)/2} y2=${-(u.y0+u.y1)/2} />
          <text x=${(u.x1+r.length)/2} y=${-(u.y0+u.y1)/2-.06} text-anchor="middle" font-size="0.11">${i(r.length-u.x1)}</text>
          ${u.y0>.005?A`<line x1=${(u.x0+u.x1)/2} x2=${(u.x0+u.x1)/2} y1="0" y2=${-u.y0} /><text x=${(u.x0+u.x1)/2+.05} y=${-u.y0/2} font-size="0.11">${i(u.y0)}</text>`:g}
        </g>`:g;return m`<div class="backdrop" @click=${h=>h.target===h.currentTarget&&this.close()}>
      <div class="sheet" role="dialog" aria-label=${e("wall_view")}>
        <header>
          <b>${e("wall_view")} · ${n.name||e("room")} · ${e("wall_n",{a:this.edge+1,b:(this.edge+1)%o+1})}</b>
          <span class="muted">${i(r.length)}</span>
          <span class="grow"></span>
          <button aria-label=${e("wall_view_prev")} title=${e("wall_view_prev")} @click=${()=>this.edge=(this.edge-1+o)%o}>‹</button>
          <button aria-label=${e("wall_view_next")} title=${e("wall_view_next")} @click=${()=>this.edge=(this.edge+1)%o}>›</button>
          <button aria-label=${e("close")} @click=${()=>this.close()}>✕</button>
        </header>
        <svg viewBox=${c} preserveAspectRatio="xMidYMid meet" @pointerdown=${h=>h.target===h.currentTarget&&(this._sel=null)}>
          <polygon class="wall" points=${`0,0 ${r.length},0 ${r.length},${-r.heightRight} 0,${-r.heightLeft}`} />
          <line class="floor" x1=${-l} x2=${r.length+l} y1="0" y2="0" />
          ${s.map(h=>A`<g class="box ${h.kind} ${h.type} ${h.id===this._sel?"sel":""} ${this.host.admin?"movable":""}"
              @pointerdown=${f=>this.down(f,h)}
              @pointermove=${f=>this.move(f,h)}
              @pointerup=${()=>this.up(h)}
              @pointercancel=${()=>this._drag=null}>
              <rect x=${h.x0} y=${-h.y1} width=${Math.max(.01,h.x1-h.x0)} height=${Math.max(.01,h.y1-h.y0)} rx="0.02" />
              ${d(h)}
            </g>`)}
          ${p}
        </svg>
        <footer>
          ${u?m`<b>${this.nameOf(u)}</b>
                <label
                  >${e("wall_view_left")}
                  <input type="number" step="0.01" min="0" .value=${u.x0.toFixed(2)} ?disabled=${!this.host.admin} @change=${h=>this.place(u,Number(h.target.value),u.y0)}
                /></label>
                ${u.lifts?m`<label
                      >${e(u.kind==="opening"?"sill":"wall_view_height")}
                      <input type="number" step="0.01" min="0" .value=${u.y0.toFixed(2)} ?disabled=${!this.host.admin} @change=${h=>this.place(u,u.x0,Number(h.target.value))}
                    /></label>`:g}`:m`<span class="muted">${e("wall_view_hint")}</span>`}
        </footer>
      </div>
    </div>`}close(){this.dispatchEvent(new CustomEvent("close"))}static styles=de`
    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 30;
      display: grid;
      place-items: center;
      background: rgba(0, 0, 0, 0.45);
    }
    .sheet {
      width: min(1100px, calc(100vw - 32px));
      max-height: calc(100vh - 32px);
      max-height: calc(100dvh - 32px);
      display: flex;
      flex-direction: column;
      border-radius: 20px;
      background: var(--nf-bg2, #1b2030);
      color: var(--nf-text, #e8eeff);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
      overflow: hidden;
    }
    header,
    footer {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 16px;
      flex-wrap: wrap;
    }
    header button {
      min-width: 36px;
      height: 36px;
      border: 0;
      border-radius: 50%;
      background: rgba(127, 127, 127, 0.16);
      color: inherit;
      font: inherit;
      font-size: 18px;
      cursor: pointer;
    }
    .grow {
      flex: 1;
    }
    .muted {
      color: var(--nf-muted, #9aa5bd);
      font-size: 13px;
    }
    svg {
      width: 100%;
      height: min(60vh, 560px);
      touch-action: none;
      user-select: none;
    }
    .wall {
      fill: rgba(127, 140, 170, 0.12);
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.015;
    }
    .floor {
      stroke: var(--nf-muted, #9aa5bd);
      stroke-width: 0.02;
    }
    .box rect {
      fill: rgba(91, 124, 255, 0.28);
      stroke: #8aa2ff;
      stroke-width: 0.012;
    }
    .box.opening rect {
      fill: rgba(10, 14, 24, 0.85);
      stroke: var(--nf-muted, #9aa5bd);
    }
    .box.window rect {
      fill: rgba(55, 224, 255, 0.16);
    }
    .box.sel rect {
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.025;
    }
    .box.movable {
      cursor: grab;
    }
    .box text {
      fill: var(--nf-text, #e8eeff);
      pointer-events: none;
    }
    .dim line {
      stroke: var(--nf-accent, #37e0ff);
      stroke-width: 0.01;
      stroke-dasharray: 0.04 0.03;
    }
    .dim text {
      fill: var(--nf-accent, #37e0ff);
    }
    footer label {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--nf-muted, #9aa5bd);
    }
    footer input {
      width: 80px;
      padding: 6px 8px;
      border-radius: 10px;
      border: 1px solid rgba(127, 127, 127, 0.35);
      background: rgba(0, 0, 0, 0.2);
      color: inherit;
      font: inherit;
    }
  `};customElements.get("nf-wall-view")||customElements.define("nf-wall-view",fl);function Cw(t,e){let n=new Set([...Object.keys(t),...Object.keys(e)]);if(n.size===0)return 1/0;let r=0;for(let o of n)r+=Math.min(Math.abs((t[o]??-100)-(e[o]??-100)),40)**2;return Math.sqrt(r/n.size)}function Pf(t,e){if(Object.keys(e).length===0)return{room:null,distance:1/0,margin:0};let n=new Map;for(let s of t){let a=Cw(s.rssi,e);a<(n.get(s.room)??1/0)&&n.set(s.room,a)}let r=[...n].sort((s,a)=>s[1]-a[1]);if(r.length===0)return{room:null,distance:1/0,margin:0};let[o,i]=r[0];return i>18?{room:null,distance:i,margin:0}:{room:o,distance:i,margin:r.length>1?r[1][1]-i:18}}var Ww=t=>{let e=[...t].sort((r,o)=>r-o),n=e.length>>1;return e.length%2?e[n]:(e[n-1]+e[n])/2};function Nw(t){let e={},n=new Set(t.flatMap(r=>Object.keys(r)));for(let r of n){let o=t.filter(i=>r in i).map(i=>i[r]);o.length*2>t.length&&(e[r]=Math.round(Ww(o)*10)/10)}return e}function Df(t,e,n=3){let r=e.filter(s=>Object.keys(s).length>0);if(r.length===0)return[];let o=Math.max(1,Math.min(n,Math.floor(r.length/3))),i=[];for(let s=0;s<o;s++){let a=r.slice(Math.floor(s*r.length/o),Math.floor((s+1)*r.length/o)),l=Nw(a);Object.keys(l).length>0&&i.push({room:t,rssi:l})}return i}var If=(t,e,n)=>[...t.filter(r=>r.room!==e),...n],Of=t=>Math.max(0,Math.min(1,(t+95)/50));var Vw=1500,gl=class extends se{static properties={host:{attribute:!1},doc:{attribute:!1},_found:{state:!0},_pick:{state:!0},_name:{state:!0},_tag:{state:!0},_room:{state:!0},_scan:{state:!0},_samples:{state:!0},_error:{state:!0}};timer=0;recordStarted=0;constructor(){super(),this._found=null,this._pick="",this._name="",this._tag=null,this._room="",this._scan=null,this._samples=null,this._error=""}createRenderRoot(){return this}get tags(){return this.host.doc.settings.ble?.tags??[]}get rooms(){let e=this.host.doc.floors;return e.flatMap(n=>n.rooms.map(r=>({id:r.id,label:e.length>1?`${n.name} \xB7 ${r.name}`:r.name})))}connectedCallback(){super.connectedCallback(),this.loadDevices(),this._tag&&this.restartPolling()}disconnectedCallback(){super.disconnectedCallback(),window.clearInterval(this.timer)}updated(e){e.has("_tag")&&this.restartPolling()}async loadDevices(){try{this._found=await this.host.hass.callWS({type:"nextfloor/ble/devices"})}catch(e){this._error=String(e?.message??e)}}restartPolling(){if(window.clearInterval(this.timer),this._scan=null,this._samples=null,!this._tag)return;let e=()=>{this.pollOnce()};e(),this.timer=window.setInterval(e,Vw)}async pollOnce(){let e=this.tags.find(n=>n.id===this._tag);if(!(!e||!this.host.hass))try{let n=await this.host.hass.callWS({type:"nextfloor/ble/scan",...e.entity?{entity:e.entity}:{address:e.address}});if(this._tag!==e.id)return;this._scan=n,this._error="",this._samples&&(this._samples=[...this._samples,Object.fromEntries(Object.entries(n.readings).map(([r,o])=>[r,o.rssi]))],Date.now()-this.recordStarted>=30*1e3&&this.finishRecording(e,n))}catch(n){this._error=String(n?.message??n)}}reading(){return Object.fromEntries(Object.entries(this._scan?.readings??{}).map(([e,n])=>[e,n.rssi]))}startRecording(){this._room&&(this.recordStarted=Date.now(),this._samples=[])}finishRecording(e,n){let r=this._samples??[];this._samples=null;let o=Df(this._room,r);if(o.length===0)return;let i=Object.fromEntries(Object.entries(n.readings).map(([s,a])=>[s,a.name]));this.update2(e.id,s=>{s.prints=If(s.prints,this._room,o),s.scanners={...s.scanners??{},...i}})}update2(e,n){this.host.change(r=>{let o=r.settings.ble?.tags.find(i=>i.id===e);o&&n(o)})}addTag(){let e=this._pick;if(!e)return;let n=e.startsWith("device_tracker."),r=this._found?.devices.find(s=>s.address===e),o=this._name.trim()||r?.name||this.host.hass?.states[e]?.attributes.friendly_name||e,i={id:I("ble"),name:String(o).slice(0,60),prints:[],...n?{entity:e}:{address:e}};this.host.change(s=>{s.settings.ble={tags:[...s.settings.ble?.tags??[],i]}}),this._tag=i.id,this._pick="",this._name=""}removeTag(e){this.host.change(n=>{let r=(n.settings.ble?.tags??[]).filter(o=>o.id!==e);n.settings.ble=r.length?{tags:r}:null}),this._tag===e&&(this._tag=null)}bars(e){let n=this.host.t,r=this._scan,o=Object.entries(r?.readings??{}).sort((i,s)=>s[1].rssi-i[1].rssi);return m`<div class="nf-ble-bars">
      ${o.length===0?m`<p class="nf-sub">${r&&!r.available?n("ble_unavailable"):r?.address===null&&e.entity?n("ble_no_address"):n("ble_none_heard")}</p>`:o.map(([i,s])=>m`<div class="nf-ble-row" title=${i}>
            <span class="nf-ble-name">${s.name}</span>
            <span class="nf-ble-track"><span class="nf-ble-fill" style="width:${Math.round(Of(s.rssi)*100)}%"></span></span>
            <span class="nf-ble-db">${Math.round(s.rssi)}</span>
          </div>`)}
      ${o.length===1?m`<p class="nf-sub">${n("ble_one_scanner")}</p>`:g}
    </div>`}learn(e){let n=this.host.t,r=this.rooms,o=Pf(e.prints,this.reading()),i=c=>r.find(u=>u.id===c)?.label??null,s=c=>e.prints.filter(u=>u.room===c).length,a=this._samples!==null,l=a?Math.max(0,30-Math.round((Date.now()-this.recordStarted)/1e3)):0;return m`${this.bars(e)}
      <p class="nf-ble-now"><b>${n("ble_now")}:</b> ${o.room?i(o.room):n("ble_unknown")}</p>
      <div class="nf-form">
        <label class="nf-field nf-wide">${n("ble_learn_room")}
          <select ?disabled=${a} .value=${this._room} @change=${c=>this._room=c.target.value}>
            <option value="">–</option>
            ${r.map(c=>m`<option value=${c.id} ?selected=${this._room===c.id}>${c.label}${s(c.id)?` \u2713 ${s(c.id)}`:""}</option>`)}
          </select>
        </label>
      </div>
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!this._room||a||Object.keys(this._scan?.readings??{}).length===0} @click=${()=>this.startRecording()}>
          ${a?n("ble_recording",{s:l}):n("ble_record",{s:30})}
        </button>
        ${this._room&&s(this._room)?m`<button class="nf-btn" ?disabled=${a} @click=${()=>this.update2(e.id,c=>c.prints=c.prints.filter(u=>u.room!==this._room))}>${n("ble_forget_room")}</button>`:g}
      </div>
      <p class="nf-sub">${n("ble_learn_hint")}</p>`}render(){let e=this.host.t,n=this.tags,r=new Set(n.flatMap(l=>[l.address??"",l.entity??""])),o=Object.entries(this.host.hass?.states??{}).filter(([l,c])=>l.startsWith("device_tracker.")&&typeof c.attributes.current_address=="string"&&!r.has(l)).map(([l,c])=>[l,String(c.attributes.friendly_name??l)]),i=(this._found?.devices??[]).filter(l=>!r.has(l.address)),s=this._found?.scanners.length??0,a=n.find(l=>l.id===this._tag)??null;return m`
      ${this._found&&!this._found.available?m`<p class="nf-sub">${e("ble_unavailable")}</p>`:m`<p class="nf-sub">${e("ble_scanners",{n:s})}</p>`}
      ${this._error?m`<p class="nf-sub">${this._error}</p>`:g}
      ${n.map(l=>m`<div class="nf-row nf-dev-row">
          <span class="nf-dev-name"><span>${l.name}</span><small>${l.entity??l.address} · ${e("ble_spots",{n:l.prints.length})}</small></span>
          <button class="nf-btn" @click=${()=>this._tag=this._tag===l.id?null:l.id}>${this._tag===l.id?e("ble_close"):e("ble_learn")}</button>
          <button class="nf-btn" title=${e("delete")} @click=${()=>this.removeTag(l.id)}>✕</button>
        </div>`)}
      ${a?m`<div class="nf-ble-learn">${this.learn(a)}<p class="nf-sub">${e("ble_sensor_hint",{name:a.name})}</p></div>`:g}
      <div class="nf-form">
        <label class="nf-field nf-wide">${e("ble_add")}
          <select .value=${this._pick} @change=${l=>this._pick=l.target.value}>
            <option value="">–</option>
            ${o.length?m`<optgroup label=${e("ble_trackers")}>${o.map(([l,c])=>m`<option value=${l}>${c}</option>`)}</optgroup>`:g}
            <optgroup label=${e("ble_devices")}>${i.map(l=>m`<option value=${l.address}>${l.named?l.name:l.address} · ${l.address} · ${l.rssi} dBm</option>`)}</optgroup>
          </select>
        </label>
        <label class="nf-field nf-wide">${e("ble_name")}
          <input type="text" maxlength="60" .value=${this._name} @input=${l=>this._name=l.target.value} />
        </label>
      </div>
      <div class="nf-actions">
        <button class="nf-btn" @click=${()=>{this.loadDevices()}}>${e("ble_refresh")}</button>
        <button class="nf-btn nf-primary" ?disabled=${!this._pick||n.length>=10} @click=${()=>this.addTag()}>${e("ble_add_button")}</button>
      </div>`}};customElements.get("nf-ble-locate")||customElements.define("nf-ble-locate",gl);var Bw=new URL(import.meta.url),Kw=new URL("./nextfloor-3d.js?v=437fb91c2b0e",Bw).href,Lf;function mn(){return Lf??=import(Kw),Lf}var Hf=["lights","seating","tables","storage","beds","kitchen","appliances","bath","media","office","tech","climate","energy","garden","plants","kids","fitness","pets","workshop","music","season","pictures","vehicles","building","decor"],Gw={sofa:"seating",armchair:"seating",stool:"seating",chair:"seating",bench:"seating",corner_bench:"seating",bar_stool:"seating",office_chair:"office",coffee_table:"tables",table:"tables",table_round:"tables",desk:"office",worktop:"kitchen",tv_board:"media",tv_wall:"media",sideboard:"storage",shelf:"storage",tall_cabinet:"storage",wardrobe:"storage",dresser:"storage",nightstand:"beds",coat_rack:"storage",plant:"plants",rug:"decor",kitchen:"kitchen",kitchen_wall:"kitchen",kitchen_tall:"kitchen",island:"kitchen",sink:"kitchen",stove:"kitchen",dishwasher:"appliances",fridge:"appliances",washer:"appliances",dryer:"appliances",robot_vacuum:"appliances",bed:"beds",bunk_bed:"beds",bathtub:"bath",shower:"bath",wc:"bath",washbasin:"bath",radiator:"climate",stairs:"building",parking:"vehicles",ceiling_fan:"lights"},Uw=[[/xmas|advent|window_star|candle_arch|reindeer|pumpkin|easter|snowman|gift_pile|lights_outdoor/,"season"],[/^frame_|^canvas$|^poster$|picture_ledge/,"pictures"],[/piano|drum_kit|guitar|synth|mic_stand|vinyl|easel|studio_monitor|mixing_desk/,"music"],[/lamp|pendant|light_pillar|light_bars|mood_spot|ceiling_panel|garden_spots|wall_light|light_cove|niche_led|shelf_led|monitor_light|workshop_light|painting_light|cabinet_light|moon_light|torch|lantern|ceiling_fan_light/,"lights"],[/cat_|dog_|pet_|litter|scratch|hamster|rabbit|bird_cage|small_animal|aquarium|terrarium/,"pets"],[/stairs|steps|landing|rail_|column|pilaster|beam|chimney|glass_wall|sliding_wall|half_wall|platform|niche_shelf|window_seat|divider_slats|gallery/,"building"],[/tree|shrub|conifer|hedge|brush|monstera|plant|herb_garden|herb_planter|flower|raised_bed|greenhouse|ficus|cactus|bonsai|living_wall|vertical_garden/,"plants"],[/kids|toy|teepee|(^|_)play_|rocking_horse|ball_pit|house_bed|cot\b|^cot|crib|changing_table|baby|loft_bed|star_projector|moon_light/,"kids"],[/treadmill|fitness|power_rack|rowing|rower|spin_bike|dumbbell|punching|yoga|elliptical|gym|exercise|wall_bars|bike_trainer|kettlebell|weight_bench|massage_chair/,"fitness"],[/heat_pump|boiler|buffer_tank|manifold|ventilation|radiator|towel_heater|thermostat|air_purifier|humidifier|dehumidifier|tower_fan|ceiling_fan|hot_water|water_softener|water_pump|fireplace|wood_stove|patio_heater|sauna|oil_|expansion_vessel|water_tank|infrared|cold_bath/,"climate"],[/wallbox|inverter|battery|solar|meter|fuse_box|grid/,"energy"],[/workbench|tool_|compressor|drill|tyre|paint_cabinet|heavy_shelf|shelf_rack|garage_opener|workshop|bike_stand|bike_holder|bike_rack|lawn_mower|mower|welder|ev_bike_charger|tool_chest|parts_cabinet/,"workshop"],[/speaker|subwoofer|soundbar|receiver|turntable|record|game_console|multiroom|hifi|cinema|acoustic|bass_trap|popcorn|projector|projection|screen|display_|smart_display|media|tv|arcade|star_ceiling|av_/,"media"],[/desk|office|filing|whiteboard|monitor|bookcase|phone_booth|sim_cockpit|chair_gaming|gaming/,"office"],[/server|nas|router|wifi|access_point|network|printer|filament|tower_pc|smoke_detector|siren|baby_monitor|sunrise_clock|light_switch|socket|co_detector|presence_|water_leak|air_quality|doorbell/,"tech"],[/grill|lounge|lounger|parasol|pergola|hot_tub|fire_bowl|torch|lantern|play_tower|garden|trampoline|sprinkler|valve|rain_barrel|outdoor|hammock|(^|_)pool|swing|bin_box|^bin_|mailbox|rotary_line|kamado|pizza_oven|fire_pit|sandbox|wood_pile|bird_house|cistern|pond|water_feature|beach_chair/,"garden"],[/vanity_\d|vanity_double|double_vanity|basin|bath|shower|toilet|bidet|towel|mirror_cabinet|mirror_round|mirror_80|mirror_led|whirlpool|washer_under|laundry|urinal|wt_\d|handtuch|seife|wc/,"bath"],[/fridge|freezer|dishwasher|washer|dryer|microwave|coffee_machine|kettle|toaster|mixer|oven|steam|vacuum|ironing|drying_rack|trash|water_cooler|drip_tray|espresso|air_fryer|water_bar|thermo_cooker/,"appliances"],[/base_|drawer_|sink|hob|cooker|hood|pantry|kitchen|island|breakfast_bar|wall_\d|wall_glass|wall_corner|row_|spice|cabinet_light|trolley|bar_cart|utility_sink/,"kitchen"],[/bed|boxspring|futon|nightstand|canopy|mattress/,"beds"],[/sofa|chair|armchair|stool|bench|pouf|bean_bag|recliner|wingback|chaise|seat|ektorp|poang|cosy_corner|swing_bench|hanging_chair|nook|floor_cushion|tatami/,"seating"],[/table|dining|coffee_|side_round|lack_|^console$|bekant|alex/,"tables"],[/wardrobe|closet|clothes_rail|chest|dresser|shelf|cabinet|sideboard|lowboard|highboard|kallax|billy|ivar|pax|besta|cube_|coat_stand|shoe_bench|divider|display_cabinet|wall_unit|malm_chest|locker/,"storage"]];function jw(t){if(t.vehicle)return"vehicles";if(t.climate)return"climate";if(!t.type.startsWith("pack:"))return t.lamp?"lights":Gw[t.type]??"decor";let e=Uw.find(([n])=>n.test(t.id));return e?e[1]:t.lamp?"lights":"decor"}var Cf=[[/k(u|ü)che|kitchen|kochen/,["kitchen","appliances","tables","seating","storage","plants","decor"]],[/wohn|living|lounge|salon/,["seating","tables","storage","media","plants","decor","climate","tech"]],[/\bess|dining/,["tables","seating","storage","plants","decor","media"]],[/schlaf|bed|gast|guest/,["beds","storage","seating","tables","decor","plants","climate","media"]],[/kind|kids|child|baby|spiel|play|nursery/,["kids","beds","storage","seating","tables","decor"]],[/bad|bath|wc|toilet|dusch|shower|sauna/,["bath","appliances","storage","climate","plants"]],[/b(u|ü)ro|office|arbeit|study|work/,["office","tech","storage","seating","tables","plants"]],[/kino|cinema|media|game|gaming|hifi/,["media","seating","tables","storage","office"]],[/fitness|gym|sport|training/,["fitness","media","storage","climate"]],[/garage|carport|stellplatz|parking/,["vehicles","workshop","energy","storage","garden"]],[/werkstatt|workshop|hobby|keller|cellar|basement|lager|storage/,["workshop","storage","appliances","energy","climate","fitness","tech"]],[/hauswirtschaft|hwr|utility|laundry|wasch|technik|heiz|boiler/,["appliances","climate","energy","storage","tech","bath"]],[/flur|diele|hall|entr|eingang|corridor|treppe|stair/,["storage","seating","decor","plants","building"]],[/garten|garden|terrass|terrace|balkon|balcony|patio|hof|yard|pool/,["garden","plants","seating","tables","pets","kids"]]];function _l(t){let e=(t??"").toLowerCase(),n=Cf.find(([r])=>r.test(e));return n?new Set(["lights",...n[1]]):null}function bl(t){let e=(t??"").toLowerCase();return Cf.find(([n])=>n.test(e))?.[1][0]??null}var Wf=t=>t==="garden"||t==="plants"||t==="vehicles",Nf=/_(\d+(?:x\d+)?)$/;function Vf(t){let e=new Map;for(let n of t){let r=jw(n),o=n.type.startsWith("pack:")&&!n.vehicle?n.id.replace(Nf,""):n.id,i=`${n.source}:${o}`,s=e.get(i);s&&s.category===r?s.entries.push(n):e.set(s?`${i}:${n.id}`:i,{key:s?`${i}:${n.id}`:i,category:r,entries:[n]})}for(let n of e.values())n.entries.sort((r,o)=>r.size[0]-o.size[0]||r.size[1]-o.size[1]);return[...e.values()]}function Bf(t,e){let n=o=>Math.round(o*100);return e.some(o=>o!==t&&n(o.size[0])===n(t.size[0]))?Nf.exec(t.id)?.[1]??`${n(t.size[0])}\xD7${n(t.size[2])}`:`${n(t.size[0])}`}function Kf(t,e,n=12){return[e,...t.filter(r=>r!==e)].slice(0,n)}var Gf=t=>t.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),""),Uf=t=>Gf(t).split(/\s+/).filter(Boolean),jf=(t,e)=>{let n=Gf(e);return t.every(r=>n.includes(r))};function Zf(){let e=navigator.deviceMemory??8,n=navigator.hardwareConcurrency||8;return e<=3||n<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var qf=112,Zw="nextfloor-thumbs";function qw(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619);return(e>>>0).toString(36)}function yl(t){let e=U(t);return`${t}|${e?qw(JSON.stringify(e)):"b"}|${qf}`}function Yw(){return new Promise(t=>{try{let e=indexedDB.open(Zw,1);e.onupgradeneeded=()=>e.result.createObjectStore("thumbs"),e.onsuccess=()=>t(e.result),e.onerror=()=>t(null)}catch{t(null)}})}var wl=class{enabled=!Zf();memory=new Map;waiting=new Map;queue=[];db=null;running=!1;packs=[];cached(e){return this.memory.get(yl(e))}get(e){let n=yl(e),r=this.memory.get(n);return r?Promise.resolve(r):new Promise(o=>{let i=this.waiting.get(n);if(i)return void i.push(o);this.waiting.set(n,[o]),this.lookUp(e,n)})}settle(e,n){n&&this.memory.set(e,n);for(let r of this.waiting.get(e)??[])r(n);this.waiting.delete(e)}async lookUp(e,n){this.db??=Yw();let r=await this.db,o=r?await new Promise(i=>{try{let s=r.transaction("thumbs").objectStore("thumbs").get(n);s.onsuccess=()=>i(typeof s.result=="string"?s.result:null),s.onerror=()=>i(null)}catch{i(null)}}):null;if(o)return this.settle(n,o);this.queue.push(e),this.pump()}pump(){if(this.running)return;let e=this.queue.shift();if(!e)return;this.running=!0;let n=window.requestIdleCallback;(o=>n?n(o,{timeout:300}):setTimeout(o,16))(async()=>{let o=yl(e),i=null;try{let[s,a,l]=dt(e);i=(await mn()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:ti[e]??null},qf,[...this.packs]),this.keep(o,i)}catch{i=null}this.settle(o,i),this.running=!1,this.pump()})}async keep(e,n){let r=await this.db;try{r?.transaction("thumbs","readwrite").objectStore("thumbs").put(n,e)}catch{}}},Gt=new wl,yo=null,Xw=t=>{for(let e of t)e.isIntersecting&&e.target.visible()},vl=class extends se{static properties={type:{},_url:{state:!0}};static styles=de`
    :host {
      display: block;
      aspect-ratio: 4 / 3;
      border-radius: 10px;
      background: rgba(127, 127, 127, 0.08);
      overflow: hidden;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `;constructor(){super(),this.type="",this._url=null}connectedCallback(){super.connectedCallback(),Gt.enabled&&(this._url=Gt.cached(this.type)??null,!this._url&&(yo??=new IntersectionObserver(Xw,{rootMargin:"120px"}),yo.observe(this)))}disconnectedCallback(){super.disconnectedCallback(),yo?.unobserve(this)}updated(e){e.has("type")&&e.get("type")!==void 0&&(this._url=Gt.cached(this.type)??null,!this._url&&Gt.enabled&&yo?.observe(this))}visible(){yo?.unobserve(this);let e=this.type;Gt.get(e).then(n=>{this.type===e&&(this._url=n)})}render(){return this._url?m`<img src=${this._url} alt="" />`:g}};customElements.get("nf-thumb")||customElements.define("nf-thumb",vl);var Yf="nextfloor.library2",Jw={language:"en"},Xi=class{onChange;text="";saved;shown=null;picked=new Map;constructor(e){this.onChange=e,this.saved={folded:{},favourites:[],recent:[],flags:["room"]};try{let n=localStorage.getItem(Yf);n&&(this.saved={...this.saved,...JSON.parse(n)})}catch{}}store(e){this.saved={...this.saved,...e},this.onChange();try{localStorage.setItem(Yf,JSON.stringify(this.saved))}catch{}}get query(){return this.text}set query(e){this.text=e,this.onChange()}isOpen(e,n){return this.saved.folded[e]??n}toggle(e,n){this.store({folded:{...this.saved.folded,[e]:!this.isOpen(e,n)}})}has(e){return this.saved.flags.includes(e)}flip(e){this.store({flags:this.has(e)?this.saved.flags.filter(n=>n!==e):[...this.saved.flags,e]})}get favourites(){return this.saved.favourites}isFavourite(e){return this.saved.favourites.includes(e)}toggleFavourite(e){this.store({favourites:this.isFavourite(e)?this.saved.favourites.filter(n=>n!==e):[e,...this.saved.favourites]})}get recent(){return this.saved.recent}used(e){this.store({recent:Kf(this.saved.recent,e)})}pickedOf(e){let n=this.picked.get(e.key);return e.entries.find(r=>r.type===n)??e.entries[0]}pick(e,n){this.picked.set(e.key,n),this.onChange()}get preview(){return this.shown}hidePreview(){this.shown=null,this.onChange()}async showPreview(e,n,r){let o=n.getBoundingClientRect(),i={left:Math.max(8,o.left-196),top:Math.max(8,Math.min(window.innerHeight-200,o.top+o.height/2-95))};this.shown={type:e,url:null,...i},this.onChange();try{let[s,a,l]=dt(e),c=(await mn()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:ti[e]??null},180,[...r]);this.shown?.type===e&&(this.shown={type:e,url:c,...i})}catch{this.shown=null}this.onChange()}};function Qw(t,e){let n=t.hass?.language??"en",o=[...[...new Set(Object.values(Tu).flat())].map(a=>({type:a,source:"builtin",id:a,size:it[a],lamp:he(a),electric:It(a)})),...e.flatMap(a=>a.items.map(l=>({type:fe(a.id,l.id),source:a.id,id:l.id,size:l.size,lamp:!!l.light,electric:!!l.electric,vehicle:!!l.vehicle,climate:!!l.climate})))],i=new Map(e.map(a=>[a.id,Ne(a,n)])),s=new Map(e.flatMap(a=>a.items.map(l=>[fe(a.id,l.id),l])));return Vf(o).map(a=>{let l=a.entries[0],c=s.get(l.type),u=c?nt(c,l.type,n):t.t(`furn_${l.type}`),d=a.entries.length>1&&u.replace(/\s*\(?\d+([.,]\d+)?\s*(cm|x\s*\d+|×\s*\d+)?\)?\s*$/i,"").trim()||u,p=a.entries.map(h=>{let f=s.get(h.type);return f?[...Object.values(f.name),nt(f,h.type,n)].join(" "):Ae(Jw,`furn_${h.type}`)}).join(" ");return{card:a,label:d,search:`${p} ${t.t(`lib_cat_${a.category}`)}`,from:i.get(l.source)??"NextFloor"}})}var ev=(t,e)=>jf(e,`${t.label} ${t.search} ${t.from} ${t.card.entries.map(n=>n.id.replace(/_/g," ")).join(" ")}`),tv=t=>t.lamp?"light":t.electric?"switch":null;function nv(t,e,n,r){let o=t.t,i=e.pickedOf(n.card),[s,a]=i.size,l=tv(i),c=p=>{e.showPreview(i.type,p.currentTarget,r.packs)},u=()=>{e.used(i.type),r.add(i.type)},d=e.isFavourite(i.type);return m`<div class="nf-card">
    <button
      class="nf-card-main"
      title=${l?o(l==="light"?"lib_badge_light":"lib_badge_electric"):n.label}
      @click=${u}
      @mouseenter=${c}
      @focus=${c}
      @mouseleave=${()=>e.hidePreview()}
      @blur=${()=>e.hidePreview()}
    >
      ${Gt.enabled?m`<nf-thumb .type=${i.type}></nf-thumb>`:g}
      <span class="nf-card-name"
        >${n.label}${l?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Kt(l)} /></svg>`:g}</span
      >
      <span class="nf-card-meta">${Math.round(s*100)} × ${Math.round(a*100)} cm · ${n.from}</span>
    </button>
    <button class="nf-card-star" aria-pressed=${d} title=${o(d?"lib_fav_remove":"lib_fav_add")} @click=${()=>e.toggleFavourite(i.type)}>${d?"\u2605":"\u2606"}</button>
    ${n.card.entries.length>1?m`<div class="nf-card-sizes" role="group" aria-label=${o("lib_sizes")}>
          ${n.card.entries.map(p=>m`<button class="nf-size" aria-pressed=${p===i} @click=${()=>e.pick(n.card,p.type)}>${Bf(p,n.card.entries)}</button>`)}
        </div>`:g}
  </div>`}function Jf(t,e,n,r){return m`<div class="nf-cards">${n.map(o=>nv(t,e,o,r))}</div>`}function kl(t,e,n,r,o,i,s){if(o.length===0)return g;let a=e.isOpen(n,s);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${a} @click=${()=>e.toggle(n,s)}>
      <span class="nf-lib-caret">${a?"\u25BE":"\u25B8"}</span>${r} <span class="nf-lib-count">${o.length}</span>
    </button>
    ${a?Jf(t,e,o,i):g}`}function Xf(t,e){return t.flatMap(n=>{let r=e.find(o=>o.card.entries.some(i=>i.type===n));return r?[{...r,card:{...r.card,key:`one:${n}`,entries:r.card.entries.filter(o=>o.type===n)}}]:[]})}function rv(t){let e=bl(t),n=_l(t),r=o=>o===e?0:n?.has(o)?1:2;return[...Hf].sort((o,i)=>r(o)-r(i))}function Qf(t,e,n,r){let o=t.t;Gt.packs=r.packs;let i=Qw(t,r.packs),s=Uf(e.query),a=_l(n),l=!!a&&e.has("room")&&s.length===0,c=i.filter(p=>{let h=p.card.entries[0];return l&&!a.has(p.card.category)||e.has("linkable")&&!h.lamp&&!h.electric||e.has("lit")&&!h.lamp||e.has("outdoor")&&!Wf(p.card.category)?!1:s.length===0||ev(p,s)}),u=(p,h)=>m`<button class="nf-chip nf-lib-chip" aria-pressed=${e.has(p)} @click=${()=>e.flip(p)}>${h}</button>`,d=s.length>0;return m`<section>
      <h3>${o("furniture_add")}</h3>
      <p class="nf-sub">${n?o("furniture_into",{room:n}):o("furniture_pick_room")}</p>
      <button class="nf-btn nf-lib-studio" title=${o("studio_hint")} @click=${()=>r.studio()}>🛠️ ${o("studio_new")}</button>
      <input
        class="nf-search"
        type="search"
        placeholder=${o("furniture_search")}
        .value=${e.query}
        @input=${p=>e.query=p.target.value}
        @keydown=${p=>p.key==="Escape"&&(e.query="")}
      />
      <div class="nf-lib-chips">
        ${a?u("room",o("lib_for_room",{room:n??""})):g} ${u("linkable",`\u26A1 ${o("lib_linkable")}`)} ${u("lit",`\u{1F4A1} ${o("lib_lit")}`)}
        ${u("outdoor",`\u{1F333} ${o("lib_outdoor")}`)}
      </div>
      ${d&&c.length===0?m`<p class="nf-sub">${o("furniture_search_none")}</p>`:g}
      ${d?Jf(t,e,c,r):m`${kl(t,e,"favourites",`\u2605 ${o("lib_favourites")}`,Xf(e.favourites,i),r,!0)}
          ${kl(t,e,"recent",`\u{1F558} ${o("lib_recent")}`,Xf(e.recent.slice(0,6),i),r,!1)}
          ${rv(n).map(p=>kl(t,e,p,o(`lib_cat_${p}`),c.filter(h=>h.card.category===p),r,p===(bl(n)??"lights")))}
          ${l?m`<button class="nf-btn nf-lib-all" @click=${()=>e.flip("room")}>${o("lib_all_rooms")}</button>`:g}`}
    </section>`}function em(t,e){return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
    ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
    <b>${tt(t.hass,e.type)}</b>
  </div>`:g}function xl(t,e,n,r=24){let o=Math.hypot(e[0]-t[0],e[1]-t[1]);if(o<1e-6||Math.abs(n)<1e-4)return[];let i=Math.max(-o*2,Math.min(o*2,n)),s=[(e[0]-t[0])/o,(e[1]-t[1])/o],a=[s[1],-s[0]],l=o*o/4/(2*Math.abs(i))+Math.abs(i)/2,c=2*Math.atan(2*Math.abs(i)/o),u=Math.max(2,Math.min(r,Math.ceil(2*c/Math.PI*180/11.25))),d=[a[0]*Math.sign(i),a[1]*Math.sign(i)],p=[(t[0]+e[0])/2,(t[1]+e[1])/2],h=[p[0]-d[0]*(l-Math.abs(i)),p[1]-d[1]*(l-Math.abs(i))],f=[];for(let _=1;_<u;_++){let b=-c+2*c*_/u;f.push([h[0]+l*(d[0]*Math.cos(b)+s[0]*Math.sin(b)),h[1]+l*(d[1]*Math.cos(b)+s[1]*Math.sin(b))])}return f}var $l=t=>t.reduce((e,n,r)=>r?e+Math.hypot(n[0]-t[r-1][0],n[1]-t[r-1][1]):e,0);function Sl(t,e){let n=Math.max(0,e);for(let r=0;r+1<t.length;r++){let o=Math.hypot(t[r+1][0]-t[r][0],t[r+1][1]-t[r][1]);if(n<=o||r+2===t.length)return{piece:r,offset:Math.min(n,o)};n-=o}return{piece:0,offset:0}}var Pe=t=>Math.round(t*1e3)/1e3,Ml=t=>t.map(([e,n])=>[Pe(e),Pe(n)]);function Ji(t,e){return{id:I("room"),name:e,area_id:null,points:Ml(t),floor_material:"wood"}}function tm(t){return{...structuredClone(t),id:I("room"),points:Ml(t.points.map(([e,n])=>[e+.5,n+.5]))}}function nm(t,e){let n=t.rooms.find(r=>r.id===e);t.rooms=t.rooms.filter(r=>r.id!==e),t.openings=t.openings.filter(r=>r.room_id!==e||r.wall),n&&(t.placements=t.placements.filter(r=>!W([r.x,r.z],n.points)))}function rm(t,e,n){let r=t.rooms.find(s=>s.id===e);if(!r||r.points.length<=3)return!1;let o=(n-1+r.points.length)%r.points.length;r.points.splice(n,1),r.wall_heights?.splice(n,1),r.wall_slopes?.splice(n,1),r.wall_thickness?.splice(n,1);let i=s=>s.room_id===e&&!s.wall;return t.openings=t.openings.filter(s=>!(i(s)&&(s.edge===n||s.edge===o))).map(s=>i(s)&&s.edge>n?{...s,edge:s.edge-1}:s),!0}function om(t,e,n){if(!Number.isFinite(n))return null;let r=pe(t.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[n,n+(s-o)]:e==="z"?[i,a]=[n,n+(a-i)]:n>.05&&(e==="w"?s=o+n:a=i+n),Ml([[o,i],[s,i],[s,a],[o,a]])}function im(t,e,n,r){return!Number.isFinite(r)||e<0||e>=t.points.length?null:t.points.map((o,i)=>i===e?n===0?[Pe(r),o[1]]:[o[0],Pe(r)]:[o[0],o[1]])}var ov=/^(Raum|Room) \d+$/;function Rl(t,e,n){let r=e?n[e]:void 0,o=!t.name||ov.test(t.name)||Object.values(n).some(i=>i.name===t.name);return{area_id:e||null,...r&&o?{name:r.name}:{}}}function sm(t,e){let n=e.filter(l=>Q(l.entity_id)==="light"&&(l.mount??"ceiling")==="ceiling"&&W([l.x,l.z],t.points));if(n.length<2)return[];let r=pe(t.points),[o,i]=[r.x1-r.x0,r.z1-r.z0],s=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,i)))),a=Math.ceil(n.length/s);return n.map((l,c)=>{let u=Math.floor(c/s),d=u===a-1?n.length-s*(a-1):s,p=c-u*s;return{entityId:l.entity_id,x:Pe(r.x0+o/d*(p+.5)),z:Pe(r.z0+i/a*(u+.5))}})}function El(t,e,n,r){let o=t.rooms.find(u=>u.id===e);if(!o)return;let i=o.points[n],s=o.points[(n+1)%o.points.length];o.points.splice(n+1,0,r);let[a,l]=[o.wall_heights?.[n],o.wall_slopes?.[n]];if(typeof a=="number"&&typeof l=="number"&&o.wall_slopes){let u=Math.hypot(s[0]-i[0],s[1]-i[1]),d=Pe(a+(l-a)*Math.min(1,Math.hypot(r[0]-i[0],r[1]-i[1])/(u||1)));o.wall_slopes.splice(n,1,d,l),o.wall_heights.splice(n+1,0,d)}else o.wall_heights?.splice(n+1,0,o.wall_heights[n]??null),o.wall_slopes?.splice(n+1,0,null);o.wall_thickness?.splice(n+1,0,o.wall_thickness[n]??null);let c=Math.hypot(r[0]-i[0],r[1]-i[1]);for(let u of t.openings)u.room_id!==e||u.wall||(u.edge>n?u.edge+=1:u.edge===n&&u.offset>c&&(u.edge=n+1,u.offset=Pe(u.offset-c)))}var iv=22.5;function am(t,e,n){let r=Math.min(Math.abs(e),t*2),o=t*(1+8/3*(r/Math.max(1e-6,t))**2),i=4*Math.atan(2*r/Math.max(1e-6,t))*180/Math.PI,s=Math.max(2,Math.ceil(i/iv));if(n<=0)return 24;let a=Math.floor(o/(n+.1));return a>=s?a:0}function sv(t,e,n,r){let o=$l(n);t.forEach((i,s)=>{let{piece:a,offset:l}=Sl(n,e[s]*o),c=Math.hypot(n[a+1][0]-n[a][0],n[a+1][1]-n[a][1]);i.edge=r+a,i.offset=Pe(c>i.width?Math.min(c-i.width/2,Math.max(i.width/2,l)):c/2)})}function lm(t,e,n,r){let o=t.rooms.find(v=>v.id===e);if(!o||n<0||n>=o.points.length||Math.abs(r)<.01)return!1;let i=o.points[n],s=o.points[(n+1)%o.points.length],a=Math.hypot(s[0]-i[0],s[1]-i[1]);if(a<.2)return!1;let[l,c]=[(s[0]-i[0])/a,(s[1]-i[1])/a],u=[(i[0]+s[0])/2+c*.02,(i[1]+s[1])/2-l*.02],p=W(u,o.points)?-r:r,h=(v,y)=>t.openings.filter(x=>x.room_id===v.id&&!x.wall&&x.edge===y),f=t.rooms.flatMap(v=>v.points.map((y,x)=>{let k=v.points[(x+1)%v.points.length],S=($,E)=>Math.abs($[0]-E[0])<.001&&Math.abs($[1]-E[1])<.001;return S(y,i)&&S(k,s)?[v,x,!1]:S(y,s)&&S(k,i)?[v,x,!0]:null}).filter(y=>!!y)),_=Math.max(0,...f.flatMap(([v,y])=>h(v,y).map(x=>x.width))),b=am(a,r,_);if(!b)return!1;let w=xl(i,s,p,b).map(([v,y])=>[Pe(v),Pe(y)]);if(!w.length)return!1;for(let[v,y,x]of f){let k=x?[...w].reverse():w,S=h(v,y),$=v.points[y],E=S.map(T=>Math.min(1,Math.max(0,T.offset/a)));for(let T of S)T.edge=-1;k.forEach((T,P)=>El(t,v.id,y+P,T)),v.wall_splits?.splice(y+1,0,...k.map(()=>null)),v.wall_splits?.[y]&&(v.wall_splits[y]=null),sv(S,E,[$,...k,v.points[(y+k.length+1)%v.points.length]],y)}return!0}function cm(t,e,n){let r=t.walls??[],o=r.findIndex(f=>f.id===e);if(o<0||Math.abs(n)<.01)return[];let i=r[o],s=Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1]),a=t.openings.filter(f=>f.wall===e),l=Math.max(0,...a.map(f=>f.width)),c=am(s,n,l);if(!c)return[];let u=xl(i.a,i.b,n,c).map(([f,_])=>[Pe(f),Pe(_)]);if(!u.length)return[];let d=[i.a,...u,i.b],p=d.slice(1).map((f,_)=>({...i,id:_===0?i.id:I("wall"),a:d[_],b:f}));r.splice(o,1,...p),t.walls=r;let h=$l(d);for(let f of a){let{piece:_,offset:b}=Sl(d,f.offset/s*h),w=Math.hypot(d[_+1][0]-d[_][0],d[_+1][1]-d[_][1]);f.wall=p[_].id,f.offset=Pe(w>f.width?Math.min(w-f.width/2,Math.max(f.width/2,b)):w/2)}return p.map(f=>f.id)}var Zn=t=>Math.round(t*1e3)/1e3;function Qi(t,e,n){return[Math.round((e[0]-t[0])/n)*n,Math.round((e[1]-t[1])/n)*n]}var gn=(t,e)=>e?.01:t,qn=(t,e,n=5)=>Math.hypot(t[0]-e[0],t[1]-e[1])>=n;function um(t,e,n){return n?Math.abs(e[0]-t[0])>Math.abs(e[1]-t[1])?[e[0],t[1]]:[t[0],e[1]]:e}var rt=(t,e)=>[Zn(t[0]+e[0]),Zn(t[1]+e[1])];function Al(t,e,n,r){return[Zn(Math.round((t[0]+n[0]-e[0])/r)*r),Zn(Math.round((t[1]+n[1]-e[1])/r)*r)]}function Fl(t,e,n){let r=Math.atan2(-(e[0]-t[0]),e[1]-t[1])*180/Math.PI;return(Math.round(r/n)*n%360+360)%360}function dm(t,e,n){let r=Math.atan2(e[0]-t[0],-(e[1]-t[1]))*180/Math.PI;return Math.round(r/n)*n}function hm(t,e,n){let r=Sn([...t]),o=t[e],i=[Zn(n[0]),Zn(n[1])];return t.map((s,a)=>a===e?i:r?[Math.abs(s[0]-o[0])<1e-6?i[0]:s[0],Math.abs(s[1]-o[1])<1e-6?i[1]:s[1]]:[s[0],s[1]])}var es=t=>Math.round(t*1e3)/1e3,pm=(t,e)=>Math.hypot(t[0]-e[0],t[1]-e[1]);function av(t,e,n){let r=null,o=n;for(let i of t){let s=pm(i,e);s<o&&([r,o]=[i,s])}return r}function lv(t,e,n){let r=null,o=n.reach;for(let i of t)n.skip&&i.id===n.skip.roomId||i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],[c,u]=[l[0]-s[0],l[1]-s[1]],d=c*c+u*u;if(d<1e-9)return;let p=((e[0]-s[0])*c+(e[1]-s[1])*u)/d;if(p<=0||p>=1)return;let h=[s[0]+p*c,s[1]+p*u],f=pm(h,e),_=(b,w,v)=>Math.min(Math.max(b,Math.min(w,v)),Math.max(w,v));Math.abs(u)<1e-9&&(h[0]=_(Math.round(h[0]/n.grid)*n.grid,s[0],l[0])),Math.abs(c)<1e-9&&(h[1]=_(Math.round(h[1]/n.grid)*n.grid,s[1],l[1])),f<o&&([r,o]=[h,f])});return r}function cv(t,e,n){let r=[es(Math.round(e[0]/n.grid)*n.grid),es(Math.round(e[1]/n.grid)*n.grid)],o={},[i,s]=[n.reach,n.reach];for(let a of t)Math.abs(a[0]-e[0])<i&&(i=Math.abs(a[0]-e[0]),r[0]=a[0],o.x=a[0]),Math.abs(a[1]-e[1])<s&&(s=Math.abs(a[1]-e[1]),r[1]=a[1],o.z=a[1]);return{point:r,guides:o}}function fm(t,e){let n=e.rooms.flatMap(i=>i.points.filter((s,a)=>!(e.skip&&i.id===e.skip.roomId&&(e.skip.index===void 0||e.skip.index===a)))),r=av(n,t,e.reach);if(r)return{point:[r[0],r[1]],guides:{point:r}};let o=lv(e.rooms,t,e);return o?{point:[es(o[0]),es(o[1])],guides:{point:o}}:cv(n,t,e)}var ts=(t,e)=>ge(t.host.hass,e);function uv(t,e){let[n,r]=[t.toScreen(e.start),t.toScreen(e.end)];if(e.kind==="freewall"){let s=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return A`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${n[0]} y1=${n[1]} x2=${r[0]} y2=${r[1]} />
      <text class="nf-dim" x=${(n[0]+r[0])/2} y=${(n[1]+r[1])/2-10}>${ts(t,s)}</text>
    </g>`}let[o,i]=[Math.abs(e.end[0]-e.start[0]),Math.abs(e.end[1]-e.start[1])];return A`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(n[0],r[0])} y=${Math.min(n[1],r[1])} width=${Math.abs(r[0]-n[0])} height=${Math.abs(r[1]-n[1])} />
    <text class="nf-dim" x=${(n[0]+r[0])/2} y=${Math.min(n[1],r[1])-8}>${ts(t,o)} × ${ts(t,i)}</text>
  </g>`}function dv(t,e,n,r){let o=[...e,...n?[n]:[]].map(u=>t.toScreen(u)),i=e.length>=3,s=r?e.slice(1).map((u,d)=>{let[p,h]=[t.toScreen(e[d]),t.toScreen(u)];return A`<text class="nf-dim" x=${(p[0]+h[0])/2} y=${(p[1]+h[1])/2-6}>${ts(t,Math.hypot(u[0]-e[d][0],u[1]-e[d][1]))}</text>`}):g,a=e.map((u,d)=>{let[p,h]=t.toScreen(u),f=d===0&&i;return A`<circle class=${f?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${p} cy=${h} r=${f?9:5} />`}),[l,c]=n?t.toScreen(n):[0,0];return A`<g pointer-events="none">
    ${o.length>1?A`<polyline class="nf-draft" points=${o.map(u=>u.join(",")).join(" ")} />`:g}
    ${s}${a}
    ${n?A`<circle class="nf-cursor" cx=${l} cy=${c} r="4" />`:g}
  </g>`}function mm(t,e,n){let r=e.x!==void 0?t.toScreen([e.x,0])[0]:null,o=e.z!==void 0?t.toScreen([0,e.z])[1]:null,[i,s]=e.point?t.toScreen(e.point):[0,0];return A`<g pointer-events="none">
    ${r!==null?A`<line class="nf-guide" x1=${r} y1="0" x2=${r} y2=${n.h} />`:g}
    ${o!==null?A`<line class="nf-guide" x1="0" y1=${o} x2=${n.w} y2=${o} />`:g}
    ${e.point?A`<circle class="nf-snap" cx=${i} cy=${s} r="9" />`:g}
  </g>`}function gm(t,e,n,r,o){return e?uv(t,e):n!=="polygon"&&n!=="measure"?g:dv(t,r,o,n==="measure")}var le=(t,e,n,r,o="")=>A`<rect class=${o} x=${Math.min(t,n)} y=${Math.min(e,r)} width=${Math.abs(n-t)} height=${Math.abs(r-e)} />`,re=(t,e,n,r,o="")=>A`<line class=${o} x1=${t} y1=${e} x2=${n} y2=${r} />`,bm=(t,e="")=>A`<polygon class=${e} points=${t.map(n=>n.join(",")).join(" ")} />`,ie=(t,e,n,r="")=>A`<circle class=${r} cx=${t} cy=${e} r=${n} />`,Tl=(t,e,n,r,o="")=>A`<ellipse class=${o} cx=${t} cy=${e} rx=${n} ry=${r} />`;function zl(t,e,n){let r=[];for(let o=1;o<n;o++){let i=-t/2+t/n*o;r.push(re(i,e/2,i,e/2-Math.min(.12,e*.3)))}return r}function _m(t,e,n,r){let o=Math.min(.24,e*.28),i=r?Math.min(.2,t*.12):0,s=[le(-t/2,-e/2,t/2,-e/2+o,"nf-sym-fill")];r&&s.push(le(-t/2,-e/2,-t/2+i,e/2,"nf-sym-fill"),le(t/2-i,-e/2,t/2,e/2,"nf-sym-fill"));let a=t-2*i;for(let l=1;l<n;l++){let c=-t/2+i+a/n*l;s.push(re(c,-e/2+o,c,e/2-.02))}return s}function ym(t,e,n,r){if(t==="stairs"&&r?.stair)return hv(r,e,n);switch(t){case"sofa":return _m(e,n,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return _m(e,n,1,!0);case"bench":return[le(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill")];case"corner_bench":{let o=Math.min(.5,n*.4);return[le(-e/2,-n/2,e/2,-n/2+.08,"nf-sym-fill"),le(-e/2,-n/2,-e/2+.08,n/2,"nf-sym-fill"),re(-e/2+o,-n/2+o,e/2,-n/2+o),re(-e/2+o,-n/2+o,-e/2+o,n/2)]}case"chair":return[le(-e/2,-n/2,e/2,-n/2+.06,"nf-sym-fill")];case"office_chair":return[ie(0,.03,Math.min(e,n)*.36),le(-e*.35,-n/2+.02,e*.35,-n/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[ie(0,0,Math.min(e,n)*.42)];case"stool":return[le(-e/2+.04,-n/2+.04,e/2-.04,n/2-.04)];case"table":case"coffee_table":case"desk":{let o=[le(-e/2+.05,-n/2+.05,e/2-.05,n/2-.05)];return t==="desk"&&o.push(re(-.3,-n/2+.1,.3,-n/2+.1,"nf-sym-strong")),o}case"bed":case"bunk_bed":{let o=e>1.2?2:1,i=(e-.2)/o,s=[le(-e/2,-n/2,e/2,-n/2+.07,"nf-sym-fill"),re(-e/2,-n/2+(n-.1)*.36,e/2,-n/2+(n-.1)*.36)];for(let a=0;a<o;a++)s.push(le(-e/2+.13+i*a,-n/2+.12,-e/2+.07+i*(a+1),-n/2+.12+Math.min(.4,n*.18)));return s}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return zl(e,n,t==="nightstand"||t==="tall_cabinet"||t==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[le(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),...zl(e,n,Math.max(2,Math.round(e/.5)))];case"island":return[re(-e/2,n/2-.3,e/2,n/2-.3)];case"fridge":return[re(-e/2+.06,n/2-.04,e/2-.06,n/2-.04,"nf-sym-strong")];case"stove":{let o=Math.min(e,n)*.14;return[ie(-e*.22,-n*.2,o),ie(e*.22,-n*.2,o*.8),ie(-e*.22,n*.2,o*.8),ie(e*.22,n*.2,o)]}case"sink":{let o=Math.min(.5,e-.2);return[le(-o/2,-n/2+.1,o/2,n/2-.08),ie(0,-n/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[re(-e/2+.08,n/2-.05,e/2-.08,n/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[ie(0,.05,Math.min(e,n)*.3),re(-e/2,-n/2+.1,e/2,-n/2+.1)];case"bathtub":return[le(-e/2+.07,-n/2+.07,e/2-.07,n/2-.07),ie(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[re(-e/2,-n/2,e/2,n/2),re(e/2,-n/2,-e/2,n/2),ie(0,0,.04)];case"wc":return[le(-e/2,-n/2,e/2,-n/2+Math.min(.18,n*.3),"nf-sym-fill"),Tl(0,n*.1,e*.36,n*.3)];case"washbasin":return[Tl(0,.03,e*.34,n*.3)];case"tv_board":return[re(-Math.min(e*.4,.72),-n/2+.14,Math.min(e*.4,.72),-n/2+.14,"nf-sym-strong"),...zl(e,n,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[re(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[ie(0,0,Math.min(e,n)*.45,"nf-sym-fill"),ie(0,0,Math.min(e,n)*1.4)];case"lamp_bollard":case"lamp_garden":return[ie(0,0,Math.min(e,n)*.5,"nf-sym-fill"),ie(0,0,Math.min(e,n)*1.6)];case"parking":return[le(-e/2+.08,-n/2+.08,e/2-.08,n/2-.08),re(-e*.15,n/2-.5,0,n/2-.22,"nf-sym-strong"),re(0,n/2-.22,e*.15,n/2-.5,"nf-sym-strong")];case"robot_vacuum":return[le(-e*.45,-n/2,e*.45,-n/2+n*.3,"nf-sym-fill"),ie(0,n*.14,Math.min(e,n)*.47)];case"radiator":{let o=[],i=Math.max(3,Math.round(e/.1));for(let s=1;s<i;s++)o.push(re(-e/2+e/i*s,-n/2,-e/2+e/i*s,n/2));return o}case"lamp_panel":return[le(-e/2+.03,-n/2+.03,e/2-.03,n/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let o=Math.min(e,n)/2,i=[ie(0,0,o*.9,"nf-sym-fill"),ie(0,0,o*.3)];if(t==="lamp_ceiling"||t==="lamp_pendant")for(let s=0;s<8;s++){let a=s/8*Math.PI*2;i.push(re(Math.cos(a)*o*1.05,Math.sin(a)*o*1.05,Math.cos(a)*o*1.35,Math.sin(a)*o*1.35))}return i}case"ceiling_fan":{let o=Math.min(e,n)/2,i=[ie(0,0,.11,"nf-sym-fill")];for(let s=0;s<5;s++){let a=s/5*Math.PI*2;i.push(re(Math.cos(a)*.12,Math.sin(a)*.12,Math.cos(a)*o*.97,Math.sin(a)*o*.97,"nf-sym-strong"))}return[...i,ie(0,0,o)]}case"lamp_wall":return[le(-e/2,-n/2,e/2,-n/2+.03,"nf-sym-fill"),Tl(0,.01,e*.4,n*.4)];case"led_strip":return[re(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[ie(0,0,Math.min(e,n)*.46),ie(0,0,Math.min(e,n)*.25)];case"rug":return[le(-e/2+.1,-n/2+.1,e/2-.1,n/2-.1)];case"stairs":{let o=Math.max(3,Math.round(n/.26)),i=[];for(let s=1;s<o;s++)i.push(re(-e/2,n/2-n/o*s,e/2,n/2-n/o*s));return i.push(re(0,n/2-.1,0,-n/2+.25,"nf-sym-strong"),re(-.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong"),re(.15,-n/2+.45,0,-n/2+.25,"nf-sym-strong")),i}default:{let o=U(t);return o?pv(o,e,n):g}}}function hv(t,e,n){let r=go(t),o=fn(r,e,n,t.h),i=r.down?"nf-sym-dash":"",s=o.treads.map(l=>bm(l.poly,l.landing?`nf-sym-fill ${i}`:i));o.column>0&&s.push(ie(0,0,o.column,"nf-sym-fill"));let a=o.treads.map(Wi);for(let l=1;l<a.length;l++)s.push(re(a[l-1][0],a[l-1][1],a[l][0],a[l][1],"nf-sym-strong"));if(a.length&&s.unshift(ie(a[0][0],a[0][1],.05,"nf-sym-fill")),a.length>=2){let[l,c]=[a[a.length-2],a[a.length-1]],u=Math.hypot(c[0]-l[0],c[1]-l[1])||1,[d,p]=[(c[0]-l[0])/u,(c[1]-l[1])/u],h=Math.min(.2,o.flight*.3);for(let f of[-1,1])s.push(re(c[0],c[1],c[0]-d*h+p*h*.6*f,c[1]-p*h-d*h*.6*f,"nf-sym-strong"))}return s}function pv(t,e,n){return t.symbol?.length?t.symbol.map(r=>r.shape==="rect"?le((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n,r.fill?"nf-sym-fill":""):r.shape==="circle"?ie(r.x*e,r.z*n,r.r*Math.min(e,n)):re(r.x1*e,r.z1*n,r.x2*e,r.z2*n)):Jt(t,e,n,t.size[2]).filter(r=>r.shape==="sweep"||r.w<.98||r.d<.98).map(r=>r.shape==="sweep"&&r.stations?.length?bm([...r.stations.map(o=>[(r.x+o[3]/2)*e,o[0]*n]),...[...r.stations].reverse().map(o=>[(r.x-o[3]/2)*e,o[0]*n])]):r.shape==="cyl"&&(r.axis??"y")==="y"?ie(r.x*e,r.z*n,Math.min(r.w*e,r.d*n)/2):le((r.x-r.w/2)*e,(r.z-r.d/2)*n,(r.x+r.w/2)*e,(r.z+r.d/2)*n))}var Pl=Math.PI/180,vm=(t,e,n,r)=>{let[o,i]=r,s=A`<path d="M${o-4} ${i-1}a4 4 0 1 1 2 3.5" />`,a=A`<line x1=${n[0]} y1=${n[1]} x2=${o} y2=${i} /><circle cx=${o} cy=${i} r="16" class="nf-hit" /><circle cx=${o} cy=${i} r="8" />${s}`;return t==="data-rotate"?A`<g class="nf-rotate" data-rotate=${e}>${a}</g>`:A`<g class="nf-rotate" data-aim=${e}>${a}</g>`};function fv(t,e){let n=e.rotation*Pl;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>{let[i,s]=t.toScreen([e.x+r*e.w*Math.cos(n)/2-o*e.d*Math.sin(n)/2,e.z+r*e.w*Math.sin(n)/2+o*e.d*Math.cos(n)/2]);return A`<g class="nf-resize" data-resize=${`${e.id}:${r}:${o}`}><circle cx=${i} cy=${s} r="14" class="nf-hit" /><rect x=${i-5} y=${s-5} width="10" height="10" rx="2" /></g>`})}var wm=new WeakMap;function mv(t,e){let n=wm.get(e);if(n&&n.states===t.states)return n.links;let r=je(t,[e]);return wm.set(e,{states:t.states,links:r}),r}function gv(t,e,n){if(!t||!he(n.type))return!1;let r=mv(t,e).get(n.id)?.entity;return!!qc(r?t.states[r]:void 0,(n.extra_lights??[]).map(o=>t.states[o]))}function km(t,e,n){let{host:r,scale:o}=t,i=s=>{let a=s.id===n,l=a&&r.admin&&!s.locked,[c,u]=t.toScreen([s.x,s.z]),d=s.rotation*Pl,p=Math.min(s.w,s.d)*o>44,h=gv(r.hass,e,s),f=Ge.includes(s.type),_=`nf-furn${a?" nf-furn-sel":""}${h?" nf-furn-lit":""}${f?" nf-energy-item":""}`,b=s.d/2+Math.max(.3,26/o),w=t.toScreen([s.x-Math.sin(d)*b,s.z+Math.cos(d)*b]),v=t.toScreen([s.x-Math.sin(d)*(s.d/2),s.z+Math.cos(d)*(s.d/2)]),[y,x]=t.toScreen([s.x+Math.sin(d)*(s.d/2+18/o),s.z-Math.cos(d)*(s.d/2+18/o)]);return A`<g data-furniture=${s.id} class=${_}>
        <g transform="translate(${c} ${u}) rotate(${s.rotation}) scale(${s.mirror?-o:o} ${o})">
          <rect class="nf-furn-body" x=${-s.w/2} y=${-s.d/2} width=${s.w} height=${s.d} />
          <g class="nf-furn-sym">${ym(s.type,s.w,s.d,s)}</g>
          <line class="nf-furn-front" x1=${-s.w/2} y1=${s.d/2} x2=${s.w/2} y2=${s.d/2} />
        </g>
        ${p?A`<text x=${c} y=${u+4}>${tt(r.hass,s.type)}</text>`:g}
      </g>
      ${l?fv(t,s):g}
      ${a?A`<text class="nf-dim" x=${y} y=${x+4}>${ge(r.hass,s.w)} × ${ge(r.hass,s.d)}</text>`:g}
      ${a&&s.locked?A`<text class="nf-lock" x=${w[0]} y=${w[1]+5}>🔒</text>`:g}
      ${l?vm("data-rotate",s.id,v,w):g}`};return A`<g>${hf(e).map(i)}</g>`}function xm(t,e,n){let{host:r}=t,o=i=>{let s=Q(i.entity_id)??(r.hass?Ue(r.hass,i.entity_id):null);if(!s)return g;let[a,l]=t.toScreen([i.x,i.z]),c=r.hass?.states[i.entity_id]?.state==="on",u=i.entity_id===n,d=(i.rotation??0)*Pl,p=u&&r.admin&&!i.locked&&Ku(i.entity_id,r.hass?.states[i.entity_id]),h=[a-Math.sin(d)*46,l+Math.cos(d)*46],f=Wn(r,i.entity_id,i.icon);return A`${p?vm("data-aim",i.entity_id,[a,l],h):g}<g data-device=${i.entity_id} class=${`nf-device${c?" nf-device-on":""}${u?" nf-device-sel":""}`} transform="translate(${a} ${l})">
        <title>${G(r.hass,i.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        ${f?A`<foreignObject class="nf-device-icon" x="-8" y="-8" width="16" height="16"><ha-icon icon=${f}></ha-icon></foreignObject>`:A`<path d=${Kt(s)} transform="translate(-7.2 -7.2) scale(0.6)" />`}
      </g>
      ${u&&i.locked?A`<text class="nf-lock" x=${a+16} y=${l-12}>🔒</text>`:g}`};return A`<g>${e.placements.map(o)}</g>`}function $m(t,e,n){return A`${(e.notes??[]).map(r=>{let[o,i]=t.toScreen([r.x,r.z]);return A`<g data-note=${r.id} class=${`nf-note${Uo(r)?" nf-note-due":""}${r.id===n?" nf-note-sel":""}`} transform="translate(${o} ${i})">
      <title>${r.text}</title>
      <rect x="-11" y="-11" width="22" height="22" rx="4" /><text y="5" text-anchor="middle">✎</text>
    </g>`})}`}var ns=(t,e,n=6)=>A`<circle cx=${t} cy=${e} r="16" class="nf-hit" /><circle cx=${t} cy=${e} r=${n} />`;function Sm(t,e){let{scale:n}=t,r=n>=90?.1:n>=30?.5:1,o=n>=20?1:5,i=t.toWorld(0,0),s=t.toWorld(e.w,e.h),a=[],l=(d,p)=>{for(let h=Math.ceil(i[0]/d)*d;h<=s[0];h+=d){let f=t.toScreen([h,0])[0];a.push(A`<line class=${p} x1=${f} y1="0" x2=${f} y2=${e.h} />`)}for(let h=Math.ceil(i[1]/d)*d;h<=s[1];h+=d){let f=t.toScreen([0,h])[1];a.push(A`<line class=${p} x1="0" y1=${f} x2=${e.w} y2=${f} />`)}};r<o&&l(r,"nf-grid-minor"),l(o,"nf-grid-major");let[c,u]=t.toScreen([0,0]);return a.push(A`<circle class="nf-origin" cx=${c} cy=${u} r="3" />`),A`<g pointer-events="none">${a}</g>`}function Mm(t){let e=t.host.doc.floors,n=e.findIndex(i=>i.id===t.floorId),r=n>0?e[n-1]:void 0;if(!r)return g;let o=Du(e,e[n]);return A`<g pointer-events="none">${r.rooms.map(i=>A`<polygon class="nf-ghost" points=${ct(t,i.points)} />`)}${o.map(i=>A`<polygon class="nf-void" points=${ct(t,i)} />`)}</g>`}function Rm(t,e){let n=t.host.floor?.height??2.5;return A`<g pointer-events="none">${e.map(r=>{let o=r.height!==void 0&&r.height<n-.01;return A`<polygon class=${`nf-wall${r.exterior?" nf-wall-ext":""}${o?" nf-wall-low":""}`} points=${ct(t,r.footprint)} />`})}</g>`}function Em(t,e,n){let r=o=>{let[i,s]=t.toScreen(ve(o.points)),a=pe(o.points),l=Math.min(a.x1-a.x0,a.z1-a.z0)*t.scale>40;return A`<g data-outdoor=${o.id} class=${`nf-out nf-out-${o.type}${o.id===n?" nf-out-sel":""}`}>
      <polygon points=${ct(t,o.points)} />
      ${l?A`<text x=${i} y=${s+4}>${t.host.t(`out_${o.type}`)}</text>`:g}
    </g>`};return A`<g>${e.outdoor.map(r)}</g>`}function Am(t,e,n){let{host:r}=t;if(!e||!r.admin||n!=="select"||r.doc.settings.lock_plan)return g;let o=e.points;return A`${o.map((i,s)=>Ii(t,i,o[(s+1)%o.length],"out",e.id,s))}${o.map((i,s)=>A`<g class="nf-vertex" data-out-vertex=${`${e.id}:${s}`}>${ns(...t.toScreen(i))}</g>`)}`}function Fm(t,e,n,r){let o=e.rooms.find(s=>s.id===n),i=o&&r!==null&&r<o.points.length?[t.toScreen(o.points[r]),t.toScreen(o.points[(r+1)%o.points.length])]:null;return A`<g>${e.rooms.map(s=>A`<polygon data-room=${s.id} class=${s.id===n?"nf-room nf-room-sel":"nf-room"} points=${ct(t,s.points)} />`)}</g>
    ${i?A`<line class="nf-edge-hi" pointer-events="none" x1=${i[0][0]} y1=${i[0][1]} x2=${i[1][0]} y2=${i[1][1]} />`:g}
    <g pointer-events="none">${e.rooms.map(s=>{let[a,l]=t.toScreen(ve(s.points));return A`<text class="nf-room-name" x=${a} y=${l-2}>${s.name}</text>
        <text class="nf-room-area" x=${a} y=${l+14}>${ze(t.host.hass,Me(s.points))}</text>`})}</g>`}function Tm(t,e){let n=t.host.doc.energy?.meter;if(!n||n.floor_id!==e.id)return g;let[r,o]=t.toScreen([n.x,n.z]);return A`<g class="nf-meter" transform="translate(${r} ${o})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`}function zm(t,e,n){let{host:r}=t,o=i=>{let[s,a]=[t.toScreen(i.a),t.toScreen(i.b)],[l,c]=_o(i,r.doc.settings.wall_interior).map(p=>t.toScreen(p)),u=i.id===n,d=u&&r.admin&&!Zo(i,!0,r.doc.settings);return A`<g data-free-wall=${i.id} class=${`nf-free-wall${u?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
        <line class="nf-free-wall-line" x1=${l[0]} y1=${l[1]} x2=${c[0]} y2=${c[1]} />
      </g>
      ${d?A`<g class="nf-vertex" data-wall-end=${`${i.id}:a`}>${ns(l[0],l[1])}</g><g class="nf-vertex" data-wall-end=${`${i.id}:b`}>${ns(c[0],c[1])}</g>`:g}`};return A`<g>${(e.walls??[]).map(o)}</g>`}function Pm(t,e){let n=e.points,r=(e.wall_splits??[]).flatMap((o,i)=>{if(!o||i>=n.length)return[];let[s,a]=[n[i],n[(i+1)%n.length]],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,[c,u]=[(a[0]-s[0])/l,(a[1]-s[1])/l];return o.map(d=>{let[p,h]=t.toScreen([s[0]+c*d,s[1]+u*d]);return A`<line class="nf-split-mark" x1=${p-u*7} y1=${h+c*7} x2=${p+u*7} y2=${h-c*7} />`})});return A`${r}`}function Dm(t,e,n){let r=e.points,[o,i]=t.toScreen(ve(r)),s=(l,c,u)=>{let[[d,p],[h,f]]=[t.toScreen(l),t.toScreen(c)],[_,b]=[(d+h)/2,(p+f)/2],w=Math.hypot(h-d,f-p),[v,y]=[-(f-p),h-d],x=Math.hypot(v,y)||1;return[v,y]=[v/x,y/x],v*(_-o)+y*(b-i)<0&&([v,y]=[-v,-y]),A`${w>50?A`<text class="nf-dim" x=${_+v*16} y=${b+y*16+4}>${ge(t.host.hass,Math.hypot(c[0]-l[0],c[1]-l[1]))}</text>`:g}
      ${w>36?A`<g data-mid=${u} class="nf-mid"><circle cx=${_} cy=${b} r="14" class="nf-hit" /><circle cx=${_} cy=${b} r="6" /><path d="M${_-3} ${b}h6M${_} ${b-3}v6" /></g>`:g}`},a=(l,c)=>{let[u,d]=t.toScreen(l);return A`<g data-vertex=${c} class=${c===n?"nf-vertex nf-vertex-sel":"nf-vertex"}>${ns(u,d)}</g><text class="nf-vertex-no" x=${u+9} y=${d-9}>${c+1}</text>`};return A`<g>${r.map((l,c)=>s(l,r[(c+1)%r.length],c))}${r.map(a)}</g>`}function Im(t,e){let n=e.rooms.flatMap(r=>{if(r.points.length<3)return[];let[o,i]=ve(r.points);return r.points.map((s,a)=>{let l=r.points[(a+1)%r.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(c<.4)return g;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],d=Math.hypot(o-u[0],i-u[1])||1,p=Math.min(.35,d/2),h=[u[0]+(o-u[0])/d*p,u[1]+(i-u[1])/d*p],[f,_]=t.toScreen(h),b=Math.atan2(l[1]-s[1],l[0]-s[0])*180/Math.PI;return b>90&&(b-=180),b<-90&&(b+=180),A`<text class="nf-dim" x=${f} y=${_} transform=${`rotate(${b.toFixed(1)} ${f} ${_})`} text-anchor="middle" dominant-baseline="middle">${ge(t.host.hass,c)}</text>`})});return A`<g pointer-events="none">${n}</g>`}function Om(t,e,n){let r=t.t;return m`<section>
    <h3>✎ ${r("note")}</h3>
    <div class="nf-form">
      <label class="nf-field nf-wide"
        >${r("note_text")}
        <textarea rows="4" maxlength="500" .value=${e.text} ?disabled=${!t.admin} placeholder=${r("note_placeholder")} @change=${o=>n.patch({text:o.target.value.trim()})}></textarea>
      </label>
      <label class="nf-field"
        >${r("note_due")}
        <input type="date" .value=${e.due??""} ?disabled=${!t.admin} @change=${o=>n.patch({due:o.target.value||null})} />
      </label>
      ${Uo(e)?m`<p class="nf-sub nf-warn nf-wide">${r("note_is_due")}</p>`:R(r("note_due_hint"),"nf-wide")}
      ${F(t,r("note_repeat"),e.repeat_months??0,o=>n.patch({repeat_months:o>=1?Math.min(120,Math.round(o)):null}),1,0)}
      ${e.last_done?m`<p class="nf-sub nf-wide">${r("note_last_done",{d:e.last_done})}</p>`:g}
      ${R(r("note_repeat_hint"),"nf-wide")}
      ${F(t,r("x"),e.x,o=>n.patch({x:o}))} ${F(t,r("z"),e.z,o=>n.patch({z:o}))}
      ${F(t,r("note_height"),e.y??du,o=>n.patch({y:Math.max(0,Math.min(20,Math.round(o*100)/100))}),.1,0)}
      ${R(r("note_height_hint"),"nf-wide")}
      ${_v(t,e,n)}
    </div>
    ${X(m`<button class="nf-btn nf-danger" ?disabled=${!t.admin} @click=${()=>n.remove()}>${r("delete")}</button>`)}
  </section>`}function _v(t,e,n){let r=t.t,o=!!e.photo?.startsWith("image:"),i=async s=>{let a=s.target,l=a.files?.[0];if(a.value="",!l||!t.hass)return;let{data:c}=await jn(l),u=I("img");await zt(t.hass,u,c),n.patch({photo:`image:${u}`})};return m`${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(o?"picture_replace":"note_photo_upload")}<input type="file" accept="image/*" hidden @change=${i} /></label>`:g}
    ${o?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.patch({photo:null})}>${r("delete")}</button></p>`:j(t,r("picture_url"),e.photo??"",s=>n.patch({photo:s.trim()||null}),{wide:!0,placeholder:"/local/valve.jpg"})}
    ${R(r("note_photo_hint"),"nf-wide")}`}function bv(t,e,n,r){let o=He(e,n.rooms,n.walls??[]);if(!o)return null;let{room:i,edge:s}=o,a=Ht(r,e,o),l=$t(i,s,e.offset-e.width/2),c=$t(i,s,e.offset+e.width/2),u=[(c[0]-l[0])/(e.width||1),(c[1]-l[1])/(e.width||1)],d=_e(i.points)>=0?1:-1,p=[-u[1]*d,u[0]*d],h=[.06,.06];return a&&(h=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]),{room:i,edge:s,p0:l,p1:c,inward:p,direction:d,across:h,exterior:a?.wall.exterior??!1,at:(f,_)=>t.toScreen([f[0]+p[0]*_,f[1]+p[1]*_])}}var Et=(t,e,n="")=>A`<line class=${n} x1=${t[0]} y1=${t[1]} x2=${e[0]} y2=${e[1]} />`;function yv(t,e){let n=t.across[0]-.04,r=t.across[0]+Math.min(2,e.height),[o,i,s,a]=[t.at(t.p0,n),t.at(t.p1,n),t.at(t.p0,r),t.at(t.p1,r)];return A`${Et(o,i)}<path class="nf-open-track" d="M${o[0]} ${o[1]}L${s[0]} ${s[1]}M${i[0]} ${i[1]}L${a[0]} ${a[1]}" />`}function wv(t,e,n){let r=n.swing==="out",o=r?-e.across[1]:e.across[0],i=(e.across[0]-e.across[1])/2,s=n.hinge==="left"==e.direction>0,a=xt(n,e.exterior),l=n.leaves===2,[c,u]=[e.p0,e.p1],d=[],p=Iu(n.width,a,s,n);if(p){let v=y=>y<=.02?e.p0:y>=n.width-.02?e.p1:$t(e.room,e.edge,n.offset-n.width/2+y);[c,u]=[v(p.x0),v(p.x1)],d=p.panels.map(([y,x])=>[v(y),v(x)])}let h=[(c[0]+u[0])/2,(c[1]+u[1])/2],f=(l?.5:1)*Math.hypot(u[0]-c[0],u[1]-c[1]),_=d.map(([v,y])=>A`${Et(e.at(v,i+.035),e.at(y,i+.035),"nf-open-pane")}${Et(e.at(v,i-.035),e.at(y,i-.035),"nf-open-pane")}`),b=(v,y)=>{let[x,k]=e.at(v,o),[S,$]=e.at(y,o),E=e.at(v,o+(r?-f:f)),T=f*t.scale,P=(E[0]-x)*($-k)-(E[1]-k)*(S-x)>0?1:0;return A`<path d="M${x} ${k}L${E[0]} ${E[1]}A${T} ${T} 0 0 ${P} ${S} ${$}" />`},w;return a==="passage"?w=Et(e.at(e.p0,i),e.at(e.p1,i),"nf-open-passage"):a==="sliding"?w=Et(e.at(c,o),e.at(u,o)):l?w=A`${b(c,h)}${b(u,h)}`:w=s?b(c,u):b(u,c),A`${_}${w}`}function vv(t,e){let n=(t.across[0]-t.across[1])/2;if(e.opens==="slide"){let o=e.leaves===2?4:2,i=a=>[t.p0[0]+(t.p1[0]-t.p0[0])*a,t.p0[1]+(t.p1[1]-t.p0[1])*a],s=Array.from({length:o},(a,l)=>{let c=e.leaves===2?l===1||l===2?.035:-.035:l===0?.035:-.035;return Et(t.at(i(Math.max(0,l/o-.03)),n+c),t.at(i(Math.min(1,(l+1)/o+.03)),n+c))});return A`${s}`}let r=e.leaves===2?Et(t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],t.across[0]),t.at([(t.p0[0]+t.p1[0])/2,(t.p0[1]+t.p1[1])/2],-t.across[1])):g;return A`${Et(t.at(t.p0,n+.035),t.at(t.p1,n+.035))}${Et(t.at(t.p0,n-.035),t.at(t.p1,n-.035))}${r}`}function Lm(t,e,n,r){let o=e.openings.find(s=>s.id===r)?.front??null,i=s=>{let a=bv(t,s,e,n);if(!a)return g;let l=[a.at(a.p0,a.across[0]+.01),a.at(a.p1,a.across[0]+.01),a.at(a.p1,-a.across[1]-.01),a.at(a.p0,-a.across[1]-.01)],c=s.type==="door"&&Ks(xt(s,a.exterior)),u=s.id===r||!!s.front&&s.front===o,d=`nf-open nf-open-${s.type}${c?" nf-open-front":""}${u?" nf-open-sel":""}`,p=s.type==="garage"?yv(a,s):s.type==="door"?wv(t,a,s):vv(a,s);return A`<g data-opening=${s.id} class=${d}><polygon class="nf-open-gap" points=${l.map(h=>h.join(",")).join(" ")} />${p}</g>`};return A`<g>${e.openings.map(i)}</g>`}var Hm=t=>Math.round(t*1e3)/1e3,Cm=t=>Math.round(t*100)/100;function Yn(t,e){let n=[...t??[]].slice(0,e);for(;n.length<e;)n.push(null);return n}var rs=t=>t.every(e=>e===null);function wo(t,e){let[n,r]=[t.points[e],t.points[(e+1)%t.points.length]];return Math.hypot(r[0]-n[0],r[1]-n[1])}function Dl(t,e,n){let r=Yn(t.wall_heights,t.points.length);r[e]=n,t.wall_heights=rs(r)?void 0:r,os(t,e,null)}function os(t,e,n){if(n===null&&!t.wall_slopes)return;let r=Yn(t.wall_slopes,t.points.length);r[e]=n,t.wall_slopes=rs(r)?void 0:r}function Wm(t,e,n,r){let[o,i]=[n,r].map(a=>Math.min(30,Math.max(.05,Hm(a)))),s=Yn(t.wall_heights,t.points.length);s[e]=o,t.wall_heights=s,os(t,e,i)}function Nm(t,e,n){let r=t.wall_heights?.[e];os(t,e,null),typeof r=="number"&&r>=n-.005&&Dl(t,e,null)}function Vm(t,e,n,r,o){let i=Yn(t.wall_heights,t.points.length),s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[n]=r,i[e]=a.every(l=>l===a[0])?a[0]:a,t.wall_heights=rs(i)?void 0:i,os(t,e,null)}function Bm(t,e,n,r){let o=wo(t,e),i=n===void 0?0:r[n],s=n===void 0?o:r[n+1]??o;if(s-i<.4)return!1;let a=Cm((i+s)/2),l=Yn(t.wall_splits,t.points.length);l[e]=[...l[e]??[],a].sort((u,d)=>u-d),t.wall_splits=l;let c=t.wall_heights?.[e];return Array.isArray(c)&&c.splice((n??0)+1,0,c[n??0]??null),!0}function Km(t,e,n,r,o){let i=wo(t,e),s=o.filter(u=>Math.abs(u-n)>.001&&u>0),a=Math.max(.1,Math.min(i-.1,Cm(r)));s.some(u=>Math.abs(u-a)<.1)&&(a=n);let l=t.wall_splits?.[e];if(!l)return;let c=l.findIndex(u=>Math.abs(u-n)<.001);c>=0&&(l[c]=a),l.sort((u,d)=>u-d)}function Gm(t,e,n,r){let o=t.wall_splits;if(!o?.[e])return;let i=o[e].filter(a=>Math.abs(a-n)>.001);o[e]=i.length>0?i:null,o.every(a=>!a)&&(t.wall_splits=void 0);let s=t.wall_heights?.[e];Array.isArray(s)&&(s.splice(r,1),s.every(a=>a===s[0])&&(t.wall_heights[e]=s[0]??null))}function Um(t,e,n,r,o=1){let i=Yn(t.wall_thickness,t.points.length);if(r===void 0||o<2)i[e]=n;else{let s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[r]=n,i[e]=a.every(l=>l===a[0])?a[0]:a}t.wall_thickness=rs(i)?void 0:i}function jm(t,e){let n=Math.min(1.5,Math.max(.02,Hm(t)));return Math.abs(n-e)<5e-4?null:n}var Zm=.005,qm=(t,e)=>`room:${t.id}:${e}`;function Ym(t,e,n){let r=t.t,o=e.ceiling??t.floor.height,i=e.points.length,{wall_exterior:s,wall_interior:a}=t.doc.settings,l=c=>{let u=e.wall_heights?.[c]??null,d=n.partsOf(e,c);return(d.length>1?d.map((h,f)=>f):[void 0]).map(h=>{let f=Array.isArray(u)?u[h??0]??null:u,_=e.wall_thickness?.[c]??null,b=Array.isArray(_)?_[h??0]??null:_,w=h===void 0?wo(e,c):(d[h+1]??wo(e,c))-d[h],v=z=>n.setHeight(e,c,h,z),y=n.isOuter(e,c)?s:a,x=`${r("wall_n",{a:c+1,b:(c+1)%i+1})}${h===void 0?"":` \xB7 ${r("wall_part",{n:h+1})}`}`,k=h!==void 0&&h>0&&(e.wall_splits?.[c]??[]).some(z=>Math.abs(z-d[h])<.001),S=e.wall_slopes?.[c],$=h===void 0&&typeof S=="number"&&typeof u=="number",E=f??o,T=()=>n.light(c),P=()=>n.light(null);return m`<div class="nf-edge-height${c===n.lit?" nf-edge-on":""}${f!==null?" nf-edge-low":""}" @mouseenter=${T} @mouseleave=${P} @focusin=${T} @focusout=${P}>
        <span><b>${x}</b><br /><span class="nf-muted">${ge(t.hass,w)}</span></span>
        ${f===0?m`<span class="nf-muted">${r("wall_none")}</span>`:$?m`<span class="nf-wide nf-split-row" title=${r("wall_slope_hint")}
                >${F(t,r("wall_slope_start"),u,z=>n.setSlope(e,c,z,S),.05,.05)}
                ${F(t,r("wall_slope_end"),S,z=>n.setSlope(e,c,u,z),.05,.05)}</span
              >`:F(t,r("wall_height"),E,z=>v(z>=o-Zm?null:Math.max(.05,z)),.05,.05)}
        ${t.admin&&$?m`<button class="nf-btn" title=${r("wall_slope_off")} @click=${()=>n.clearSlope(e,c)}>▭</button>`:g}
        ${t.admin&&f!==null&&!$?m`<button class="nf-btn" title=${r("wall_height_full")} @click=${()=>v(null)}>↥</button>`:g}
        ${t.admin&&h===void 0&&f!==0&&!$?m`<button class="nf-btn" title=${r("wall_slope_hint")} @click=${()=>n.setSlope(e,c,E,E>=o-Zm?E+1:o)}>∠ ${r("wall_slope")}</button>`:g}
        ${t.admin&&f!==0?m`<button class="nf-btn" title=${r("wall_none_hint")} @click=${()=>v(0)}>${r("wall_none")}</button>`:g}
        ${t.admin&&w>=.4?m`<button class="nf-btn" title=${r("wall_split_hint")} @click=${()=>n.cut(e,c,h)}>✂</button>`:g}
        ${h===void 0&&w>=.4?Bi(t,qm(e,c),n.arc):g}
        ${(h===void 0||h===0)&&f!==0?m`<button class="nf-btn" title=${r("wall_view_hint")} @click=${()=>n.openWall(e,c)}>▣ ${r("wall_view")}</button>`:g}
        ${f!==0?m`<span class="nf-wide nf-split-row" title=${r("wall_thickness_hint")}
              >${F(t,r("edge_thickness"),b??y,z=>n.setThickness(e,c,jm(z,y),h,d.length),.01,.02)}
              ${t.admin&&b!=null?m`<button class="nf-btn" title=${r("wall_thickness_reset")} @click=${()=>n.setThickness(e,c,null,h,d.length)}>↺</button>`:g}</span
            >`:g}
        ${h===void 0?Ki(t,qm(e,c),n.arc):g}
        ${k?m`<span class="nf-wide nf-split-row"
              >${F(t,r("wall_split_at"),d[h],z=>n.moveCut(e,c,d[h],z),.05,.1)}
              ${t.admin?m`<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>n.join(e,c,d[h],h)}>⨉</button>`:g}</span
            >`:g}
      </div>`})};return m`<div class="nf-edge-box">
    <h4>${r("wall_heights")}</h4>
    ${e.points.flatMap((c,u)=>l(u))} ${R(r("room_wall_hint"))}
  </div>`}function Xm(t,e,n){let r=e.color_entity&&e.color_entity!=="none"?e.color_entity:n;return r?t.states[r]:void 0}var Il=["none","rainbow","pulse","flicker"];function is(t,e,n,r){let o=e.effect_animations??{},i=Wu(),s=c=>Il.includes(c)||i.includes(c),a=[...new Set([...Object.keys(o),...Array.isArray(n)?n.filter(c=>typeof c=="string"):[]])],l=(c,u,d,p=!1)=>{let h=Object.prototype.hasOwnProperty.call(o,c),f=Array.from(c).length,_=p&&h?"light_effect_exists":u!==""&&(f<1||f>255)?"light_effect_name_limit":u!==""&&!h&&Object.keys(o).length>=100?"light_effect_count_limit":void 0;if(d.setCustomValidity?.(_?t.t(_):""),_){let w=d.closest?.("details")?.querySelector("[data-effect-feedback]");return w&&(w.textContent=t.t(_)),d.reportValidity?.(),p||(d.value=h?o[c]:""),!1}let b={...o};return u===""?delete b[c]:Object.defineProperty(b,c,{value:u,enumerable:!0,configurable:!0,writable:!0}),r({effect_animations:b}),!0};return m`<details class="nf-wide">
    <summary>${t.t("light_effects")}</summary>
    <p class="nf-sub">${t.t("light_effects_hint")}</p>
    <label class="nf-check"><input type="checkbox" .checked=${e.animations_enabled!==!1} ?disabled=${!t.admin}
      @change=${c=>r({animations_enabled:c.target.checked})} />${t.t("light_effects_enabled")}</label>
    ${a.map(c=>m`<label class="nf-field nf-wide">${c}
      <select ?disabled=${!t.admin} @change=${u=>{let d=u.target;l(c,d.value,d)}}>
        <option value="" ?selected=${!Object.prototype.hasOwnProperty.call(o,c)}>${t.t("light_effect_unmapped")}</option>
        ${Object.prototype.hasOwnProperty.call(o,c)&&!s(o[c])?m`<option selected value=${o[c]}>${o[c]} (${t.t("light_effect_unmapped")})</option>`:g}
        ${Il.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${t.t(`light_animation_${u}`)}</option>`)}
        ${i.map(u=>m`<option value=${u} ?selected=${Object.prototype.hasOwnProperty.call(o,c)&&o[c]===u}>${u} (${t.t("plugin")})</option>`)}
      </select></label>`)}
    <label class="nf-field nf-wide">${t.t("light_effect_add")}<input type="text" ?disabled=${!t.admin} placeholder="Regenbogen"
      @input=${c=>c.target.setCustomValidity("")}
      @change=${c=>{let u=c.target;l(u.value,"none",u,!0)&&(u.value="")}} /></label>
    <p class="nf-sub" data-effect-feedback role="status" aria-live="polite">${t.t("light_effect_name_limit")} ${t.t("light_effect_count_limit")}</p>
  </details>`}function ss(t,e,n,r){let o=t.hass?.language??"en";return e.map(({pluginId:i,name:s,settings:a})=>{let l=Zs(a,n?.[i]),c=(d,p)=>r({...n??{},[i]:{...n?.[i]??{},[d]:p}}),u=a.filter(d=>Bu(d,l)).map(d=>{let p=xr(d.label,o),h=d.hint?xr(d.hint,o):void 0;if(d.type==="boolean")return L(t,p,l[d.key]===!0,_=>c(d.key,_),{title:h});if(d.type==="select"){let _=(d.options??[]).map(([b,w])=>[b,xr(w,o)]);return O(t,p,String(l[d.key]),_,b=>c(d.key,b),{wide:!0,title:h})}if(d.type==="entity"){let _=C(t.hass,b=>!d.domains?.length||d.domains.includes(b.split(".")[0]));return D(t,p,String(l[d.key])||null,void 0,_,b=>c(d.key,b&&b!=="none"?b:""))}if(d.type==="text"){let _=Math.min(120,d.maxLength??120);return j(t,p,String(l[d.key]),b=>c(d.key,b.slice(0,_)),{wide:!0,title:h,maxlength:_,placeholder:d.placeholder?xr(d.placeholder,o):void 0})}let f=_=>Math.min(d.max??1/0,Math.max(d.min??-1/0,_));return F(t,p,Number(l[d.key]),_=>c(d.key,f(_)),d.step??1,d.min)});return m`<h4 class="nf-lib-head nf-wide">🔌 ${s}</h4>${u}`})}var kv=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;function xv(t,e,n){let r=Q(e),o=t.hass?.language??"en",i=[...Jo.map(a=>({type:a,label:t.t(`furn_${a}`)})),...n.flatMap(a=>a.items.map(l=>({type:fe(a.id,l.id),label:`${nt(l,fe(a.id,l.id),o)} \xB7 ${Ne(a,o)}`})))],s=a=>r==="light"?he(a):r==="climate"?a==="radiator"||vn(a):e.startsWith("vacuum.")?a==="robot_vacuum"||kt(a)&&a.endsWith(":robot_vacuum"):r==="media"?Rr(a)||It(a)&&kv.test(a):It(a)&&!he(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}function $v(t,e,n){if(!t.admin)return g;let r=xv(t,e.entity_id,n.packs);return r.length===0?g:m`<label class="nf-field nf-wide" title=${t.t("as_furniture_hint")}
    >${t.t("as_furniture")}
    <select @change=${o=>o.target.value&&n.asFurniture(e,o.target.value)}>
      <option value="" selected>${t.t("as_furniture_pick")}</option>
      ${r.map(o=>m`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`}function Sv(t,e,n){return ss(t,Vu(e.entity_id,t.hass?.states[e.entity_id]),e.plugin,r=>n({plugin:r}))}function Ol(t,e,n){let r=t.t,o=Q(e.entity_id)??(t.hass?Ue(t.hass,e.entity_id):null),i=o==="light",s=e.mount??"ceiling",a=o?Vo(o,t.floor?ht(t.floor,e.x,e.z):2.5,i?s:null):1,l=p=>n.update(p),c=Wn(t,e.entity_id,e.icon),u=p=>l({mount:p,y:null}),d=["ceiling","floor","table","wall"].map(p=>[p,r(`lamp_${p}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("device")}</h3>${n.lockButton}</div>
    <p class="nf-dev-title">
      ${c?m`<ha-icon class="nf-dev-icon" .icon=${c}></ha-icon>`:m`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${o?Kt(o):""} /></svg>`}
      ${G(t.hass,e.entity_id)}
    </p>
    <div class="nf-form">
      ${i?m`${O(t,r("lamp_mount"),s,d,u,{wide:!0})}${cn(t,e.glow_scale,p=>l({glow_scale:p}))}`:g}
      ${i?is(t,e,t.hass?.states[e.entity_id]?.attributes.effect_list,l):g}
      ${e.entity_id.startsWith("media_player.")?cn(t,e.sound_rings,p=>l({sound_rings:p}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):g}
      ${F(t,r("x"),e.x,p=>l({x:p}))} ${F(t,r("z"),e.z,p=>l({z:p}))}
      ${F(t,r("marker_height"),e.y??a,p=>l({y:Math.max(0,p)}),.05,0)}
      ${F(t,r("rotation"),e.rotation??0,p=>l({rotation:(p%360+360)%360}),1)}
      ${i?L(t,r("device_simple"),!!e.simple,p=>l({simple:p||void 0}),{title:r("device_simple_hint")}):g}
      ${o&&Uc.has(o)?L(t,r("device_confirm"),!!e.confirm,p=>l({confirm:p}),{title:r("device_confirm_hint")}):g}
      ${L(t,r("device_outside"),!!e.outside,p=>l({outside:p||void 0}),{title:r("device_outside_hint")})}
      ${Nn(t,e.marker??null,p=>l({marker:p}))}
      ${Vn(t,e.pin_offset,p=>l({pin_offset:p}))}
      ${j(t,r("device_name"),e.name??"",p=>l({name:p||null}),{wide:!0,maxlength:60,title:r("device_name_hint"),placeholder:G(t.hass,e.entity_id)})}
      ${e.name?L(t,r("show_name"),!!e.show_name,p=>l({show_name:p||void 0})):g}
      ${Nt(t,e.icon,p=>l({icon:p}))}
      ${Sv(t,e,l)}
    </div>
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn" @click=${()=>n.centre()}>${r("device_centre")}</button>
          ${e.y!==null?m`<button class="nf-btn" @click=${()=>l({y:null})}>${r("height_auto")}</button>`:g}
          ${$v(t,e,n)}
          <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("devices_remove")}</button>
        </div>`:g}
  </section>`}var vo=t=>Number(t);function as(t){if(Array.isArray(t)){let[i,s]=[vo(t[0]),vo(t[1])];return Number.isFinite(i)&&Number.isFinite(s)?[i,s]:null}if(!t||typeof t!="object")return null;let{x:e,y:n}=t,[r,o]=[vo(e),vo(n)];return Number.isFinite(r)&&Number.isFinite(o)?[r,o]:null}function eg(t){return t?as(t.charger)??as(t.charger_position):null}function ls(t){for(let[e,n]of Object.entries(t.states))if(e.startsWith("camera.")&&(as(n.attributes?.vacuum_position)??eg(n.attributes)))return e;return null}var Ll=(t,e)=>e?[t[0],-t[1]]:t;var tg=5e-4,ng=2,Mv=1.5;function Hl(t,e){let n=e?t.states[e]?.attributes:void 0;return{at:n?as(n.vacuum_position):null,dock:eg(n)}}function rg(t,e,n=!1){let r=Math.hypot(e.plan[0]-t.plan[0],e.plan[1]-t.plan[1]),o=Math.hypot(e.grid[0]-t.grid[0],e.grid[1]-t.grid[1]);if(!(o>1e-6)||!(r>=Mv))return{cal:null,reason:"close"};let i=r/o;return i>=tg&&i<=ng?{cal:{a:t.plan,ga:t.grid,b:e.plan,gb:e.grid,mirror:n}}:{cal:null,reason:"scale"}}function og(t,e){let n=e?t.states[e]?.attributes?.rooms:void 0;if(!n||typeof n!="object")return[];let r=[];for(let o of Object.values(n)){if(!o||typeof o!="object")continue;let i=o,s=typeof i.name=="string"?i.name.trim():"",a=[i.x0,i.y0,i.x1,i.y1].map(vo);!s||!a.every(Number.isFinite)||r.push({name:s,center:[(a[0]+a[2])/2,(a[1]+a[3])/2]})}return r}var Jm=t=>t.toLocaleLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/[^\p{L}\p{N}]+/gu,"");function Rv(t){let e=t.length,[n,r]=t.reduce((h,f)=>[h[0]+f.seen[0]/e,h[1]+f.seen[1]/e],[0,0]),[o,i]=t.reduce((h,f)=>[h[0]+f.plan[0]/e,h[1]+f.plan[1]/e],[0,0]),[s,a,l]=[0,0,0];for(let h of t){let[f,_]=[h.seen[0]-n,h.seen[1]-r],[b,w]=[h.plan[0]-o,h.plan[1]-i];s+=f*b+_*w,a+=f*w-_*b,l+=f*f+_*_}if(!(l>1e-9))return null;let[c,u]=[s/l,a/l],d=h=>{let[f,_]=[h[0]-n,h[1]-r];return[o+c*f-u*_,i+u*f+c*_]},p=Math.sqrt(t.reduce((h,f)=>h+Math.hypot(d(f.seen)[0]-f.plan[0],d(f.seen)[1]-f.plan[1])**2,0)/e);return{map:d,scale:Math.hypot(c,u),rms:p}}function ig(t,e,n=!1){let r=new Map(e.map(_=>[Jm(_.name),_])),o=[],i=new Set;for(let _ of t){let b=Jm(_.name),w=r.get(b);if(!w||i.has(b)||_.points.length<3)continue;i.add(b);let v=_.points.map(x=>x[0]),y=_.points.map(x=>x[1]);o.push({name:_.name,plan:[(Math.min(...v)+Math.max(...v))/2,(Math.min(...y)+Math.max(...y))/2],grid:w.center})}let s=o.map(_=>_.name);if(o.length<2)return{cal:null,reason:"rooms",matched:s};let l=(o.length>=3?[!1,!0]:[n]).flatMap(_=>{let b=Rv(o.map(w=>({plan:w.plan,seen:Ll(w.grid,_)})));return b?[{mirror:_,...b}]:[]}).sort((_,b)=>_.rms-b.rms)[0];if(!l)return{cal:null,reason:"rooms",matched:s};if(!(l.scale>=tg&&l.scale<=ng))return{cal:null,reason:"scale",matched:s};let c=Math.max(...o.map(_=>Math.hypot(_.plan[0]-o[0].plan[0],_.plan[1]-o[0].plan[1])));if(!(l.rms<=Math.max(1,c/4)))return{cal:null,reason:"fit",matched:s};let[u,d,p]=[0,1,-1];for(let _=0;_<o.length;_++)for(let b=_+1;b<o.length;b++){let w=Math.hypot(o[_].grid[0]-o[b].grid[0],o[_].grid[1]-o[b].grid[1]);w>p&&([u,d,p]=[_,b,w])}let[h,f]=[o[u].grid,o[d].grid];return{cal:{a:l.map(Ll(h,l.mirror)),ga:h,b:l.map(Ll(f,l.mirror)),gb:f,mirror:l.mirror},matched:s,rms:l.rms}}function sg(t,e){let[n,r]=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],o=(e.turn??0)*Math.PI/180,[i,s,a]=[Math.cos(o),Math.sin(o),e.grow??1],[l,c]=e.move??[0,0],u=d=>{let[p,h]=[(d[0]-n)*a,(d[1]-r)*a];return[Qm(n+p*i-h*s+l),Qm(r+p*s+h*i+c)]};return{...t,a:u(t.a),b:u(t.b)}}var Qm=t=>Math.round(t*1e3)/1e3;var Ev=/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./,bt=t=>t==="none"?null:t;function Cl(t,e,n){let r=t.t,o=C(t.hass,l=>Ev.test(l)),i=!!e.state_entity&&e.state_entity!=="none",s=i&&!!e.state_entity2&&e.state_entity2!=="none",a=[["left_right",r("furn_state_left_right")],["top_bottom",r("furn_state_top_bottom")]];return m`${D(t,r("furn_state_entity"),e.state_entity??null,void 0,o,l=>n.update({state_entity:bt(l)}))}
    ${i?D(t,r("furn_state_entity2"),e.state_entity2??null,void 0,o,l=>n.update({state_entity2:bt(l)})):g}
    ${s?O(t,r("furn_state_split"),e.state_split==="top_bottom"?"top_bottom":"left_right",a,l=>n.update({state_split:l})):g}
    ${R(r("furn_state_hint"),"nf-wide")}`}function Av(t,e){let r=An(t.type)&&(!kt(t.type)||tu(t.type));return he(t.type)?{accept:o=>/^(light|switch|input_boolean)\./.test(o),label:"furn_entity_light"}:t.type==="radiator"||vn(t.type)?{accept:o=>o.startsWith("climate."),label:"furn_entity_climate"}:r?{accept:o=>/^(media_player|switch|input_boolean|light)\./.test(o),label:"furn_entity_tv"}:t.type==="robot_vacuum"?{accept:o=>o.startsWith("vacuum."),label:"furn_entity_vacuum"}:/:(robot_mower|mower_dock)$/.test(t.type)?{accept:o=>o.startsWith("lawn_mower."),label:"furn_entity_mower"}:/:(sprinkler|valve_box)$/.test(t.type)?{accept:o=>/^(valve|switch|input_boolean)\./.test(o),label:"furn_entity_water"}:{accept:o=>/^(switch|media_player|fan|input_boolean|climate|vacuum|cover|valve)\./.test(o)||jc(e?.states[o]),label:"furn_entity"}}function cs(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.furniture)i.id===e.id&&(i[n==="fan"?"fan_entity":n]=null);return je(t.hass,r).get(e.id)?.[n]??null}var Fv=t=>t==="meter"?"energy_grid":t==="inverter"?"energy_solar_sensor":t==="home_battery"?"energy_battery_sensor":"furn_power",ut=(...t)=>m`<div class="nf-form nf-links">${t}</div>`;async function Tv(t){let e=t.hass?ls(t.hass):null;if(!t.hass||!e)return{at:null,dock:null};let n=()=>{let o=t.hass?.states[e]?.attributes??{};return`${String(o.render_count??"")}|${JSON.stringify(o.vacuum_position??null)}`},r=n();try{await t.hass.fetchWithAuth?.(`/api/camera_proxy/${e}`)}catch{}for(let o=0;o<8&&n()===r;o++)await new Promise(i=>setTimeout(i,100));return Hl(t.hass,e)}function zv(t,e){let n=t.t,r=l=>t.change(c=>{c.settings.vacuum_map=sg(e,l)}),o=(l,c,u)=>m`<button class="nf-btn" title=${c} aria-label=${c} ?disabled=${!t.admin} @click=${()=>r(u)}>${l}</button>`,[i,s,a]=[n("robot_cal_nudge_move"),n("robot_cal_nudge_turn"),n("robot_cal_nudge_grow")];return m`${R(n("robot_cal_nudge"),"nf-wide")}
    <div class="nf-wide" style="display:flex;flex-wrap:wrap;gap:6px">
      ${o("\u2190",i,{move:[-.1,0]})}${o("\u2192",i,{move:[.1,0]})}${o("\u2191",i,{move:[0,-.1]})}${o("\u2193",i,{move:[0,.1]})}
      ${o("\u27F2",s,{turn:-1})}${o("\u27F3",s,{turn:1})}${o("\u2212",a,{grow:.99})}${o("+",a,{grow:1.01})}
    </div>`}function Pv(t,e){let n=t.t,r=t.doc.settings.vacuum_map??null,o=t.hass?Hl(t.hass,ls(t.hass)):{at:null,dock:null},i=r?Math.hypot(r.gb[0]-r.ga[0],r.gb[1]-r.ga[1]):0,s=r&&i>0?Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])/i:0,a=()=>{t.pickPoint(p=>{p&&Tv(t).then(h=>{if(!h.at||!h.dock)return;let f={plan:[e.x,e.z],grid:h.dock},_=rg(f,{plan:p,grid:h.at},r?.mirror??!1);_.cal&&t.change(b=>{b.settings.vacuum_map=_.cal})})})},l=t.hass?ls(t.hass):null,c=t.hass?og(t.hass,l):[],u=t.doc.floors.find(p=>p.furniture.some(h=>h.id===e.id)),d=()=>{if(!u)return;let p=ig(u.rooms,c,r?.mirror??!1);if(p.cal){let h=p.cal;t.change(f=>{f.settings.vacuum_map=h})}else alert(n(p.reason==="rooms"?"robot_cal_rooms_none":"robot_cal_rooms_bad",{n:p.matched.length}))};return ut(R(o.at&&o.dock?r?n("robot_cal_done",{m:s.toFixed(2)}):n("robot_cal_none"):n("robot_cal_need"),"nf-wide"),c.length>=2?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!u} @click=${d}>${n("robot_cal_rooms",{n:c.length})}</button>`:g,m`<button class="nf-btn nf-wide" ?disabled=${!t.admin||!o.at||!o.dock} @click=${a}>${n("robot_cal_do")}</button>`,r?L(t,n("robot_cal_mirror"),!!r.mirror,p=>t.change(h=>{h.settings.vacuum_map={...r,mirror:p}})):g,r?zv(t,r):g,r?m`<button class="nf-btn nf-wide" ?disabled=${!t.admin} @click=${()=>t.change(p=>{p.settings.vacuum_map=null})}>${n("robot_cal_forget")}</button>`:g,R(n("robot_cal_hint"),"nf-wide"))}function Dv(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=Kn(o),s=o.floors.flatMap(a=>a.furniture.filter(l=>i.has(l.id)).map(l=>[l.id,`${l.name||r("furn_meter")} \xB7 ${a.name}`]));return ut(O(t,r("meter_parent"),ho(o,e)??"",[["",r("meter_main")],...s],a=>n.update({parent_meter:a||null}),{wide:!0}),R(r("meter_device_hint"),"nf-wide"))}function Iv(t,e,n){let r=t.t,o=t.doc;if(!o.energy.advanced)return g;let i=o.floors.flatMap(c=>c.furniture.filter(u=>Jh(o,e,u)).map(u=>[u.id,`${u.name||r("furn_meter")} \xB7 ${c.name}`])),s=!!pn(o,e),a=e.meter_floors??[],l=(c,u)=>n.update({meter_floors:u?[...a.filter(d=>d!==c),c]:a.filter(d=>d!==c)});return ut(O(t,r("meter_parent"),s?e.parent_meter:"",[["",r("meter_parent_none")],...i],c=>n.update({parent_meter:c||null}),{wide:!0}),s?L(t,r("energy_invert"),!!e.meter_invert,c=>n.update({meter_invert:c})):g,s?m`<div class="nf-sub nf-wide">${r("meter_floors")}</div>${o.floors.map(c=>L(t,c.name,a.includes(c.id),u=>l(c.id,u)))}`:g,R(r("meter_sub_hint"),"nf-wide"))}function ag(t,e,n,r){let o=t.t,i=n==="mail"?s=>/^(binary_sensor|sensor|input_boolean)\./.test(s):s=>/^(sensor|binary_sensor|calendar)\./.test(s);return m`<div class="nf-form nf-links">
    ${D(t,o(`care_entity_${n}`),e.care_entity??null,void 0,C(t.hass,i),s=>r.update({care_entity:bt(s)}))}
    ${n==="plant"?F(t,o("care_thirsty_below"),e.thirsty_below??20,s=>r.update({thirsty_below:Math.min(90,Math.max(1,Math.round(s)))}),1,1):g}
    ${R(o(`care_hint_${n}`),"nf-wide")}
  </div>`}function lg(t,e,n){let r=t.t;return m`<div class="nf-form nf-links">
    ${D(t,r("furn_cover_entity"),e.cover_entity??null,void 0,C(t.hass,o=>o.startsWith("cover.")),o=>n.update({cover_entity:bt(o)}))}
    ${L(t,r("furn_cover_inverted"),!!e.cover_inverted,o=>n.update({cover_inverted:o||void 0}),{title:r("furn_cover_inverted_hint")})}
    ${R(r("furn_cover_hint"),"nf-wide")}
  </div>`}function cg(t,e,n,r){let o=t.t,i=/socket/.test(e.type),s=C(t.hass,c=>/^(light|switch|input_boolean|fan)\./.test(c)),a=e.gang_entities??[],l=c=>u=>{let d=Array.from({length:n},(p,h)=>a[h]??null);d[c]=bt(u),r.update({gang_entities:d})};return m`<div class="nf-form nf-links">
    ${Array.from({length:n},(c,u)=>D(t,n===1?o(i?"gang_socket_one":"gang_switch_one"):o(i?"gang_socket":"gang_switch",{n:u+1}),a[u]??null,void 0,s,l(u)))}
    ${R(o(i?"gang_socket_hint":"gang_switch_hint"),"nf-wide")}
  </div>`}function Ov(t,e,n){let r=t.t,o=C(t.hass,i=>{let s=t.hass?.states[i]?.attributes;return i.startsWith("sensor.")&&(s?.device_class==="temperature"||s?.unit_of_measurement==="\xB0C"||s?.unit_of_measurement==="\xB0F")});return ut(D(t,r("fridge_temp"),e.temp_entity??null,void 0,o,i=>n.update({temp_entity:bt(i)})),D(t,r("freezer_temp"),e.temp_entity2??null,void 0,o,i=>n.update({temp_entity2:bt(i)})),R(r("fridge_temp_hint"),"nf-wide"))}function Wl(t,e,n){let r=t.t,o=C(t.hass,u=>{let d=t.hass?.states[u]?.attributes;return u.startsWith("sensor.")&&(d?.device_class==="temperature"||d?.unit_of_measurement==="\xB0C"||d?.unit_of_measurement==="\xB0F")}),i=e.temps??[],s=(u,d)=>{let p=[...i];p[u]={label:p[u]?.label??"",entity:p[u]?.entity??"",...d};let h=p.filter(f=>f.entity&&f.entity!=="none");n.update({temps:p.some(f=>f.entity===""&&f.label)?p:h.length?h:void 0})},a=u=>{let d=i.filter((p,h)=>h!==u);n.update({temps:d.length?d:void 0})},l=Math.min(Ou,i.length+1),c=Array.from({length:l},(u,d)=>m`${j(t,r("temp_label",{n:d+1}),i[d]?.label??"",p=>s(d,{label:p}),{maxlength:40,placeholder:r("temp_label_example")})}
      ${D(t,r("temp_sensor",{n:d+1}),i[d]?.entity??null,void 0,o,p=>bt(p)?s(d,{entity:p}):a(d))}`);return ut(D(t,r("device_temp"),e.temp_entity??null,void 0,o,u=>n.update({temp_entity:bt(u)})),R(r("device_temp_hint"),"nf-wide"),m`${c}${R(r("device_temps_hint"),"nf-wide")}`)}function Lv(t,e,n){let r=t.t,o=e.extra_lights??[],i=C(t.hass,l=>l.startsWith("light.")&&l!==e.entity&&l!==e.color_entity),s=l=>c=>{let u=[...o];c&&c!=="none"?u[l]=c:u.splice(l,1),n.update({extra_lights:u.filter(Boolean).length?u.filter(Boolean):void 0})},a=Math.min(4,o.length+1);return m`${Array.from({length:a},(l,c)=>D(t,r("lamp_extra_light",{n:c+2}),o[c]??null,void 0,i,s(c)))}${R(r("lamp_extra_hint"),"nf-wide")}`}function ug(t,e,n){let{hass:r}=t;if(!r)return g;let o=t.t,i=he(e.type),s=Av(e,r),a=C(r,f=>Hn(r,f)),l=f=>_=>n.update({[f]:bt(_)}),c=f=>C(r,f),u=(t.doc.settings.roof.strings??[]).filter(f=>f.inverter===e.id).map(f=>f.name),d=!!e.entity&&e.entity!=="none",p=e.type==="fridge_smart"?c(f=>f.startsWith("binary_sensor.")):[],h=e.type==="ceiling_fan"?"fan_hint":i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":An(e.type)?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint";return m`${ut(e.type==="grid_point"?R(o("grid_point_hint"),"nf-wide"):D(t,o(s.label),e.entity??null,cs(t,e,"entity"),c(s.accept),f=>n.update({entity:f})),e.type==="ceiling_fan"?D(t,o("furn_fan_entity"),e.fan_entity??null,cs(t,e,"fan"),c(f=>f.startsWith("fan.")),f=>n.update({fan_entity:f})):g,!i&&!Ge.includes(e.type)&&!Rr(e.type)?Cl(t,e,n):g,i&&d?m`${D(t,o("furn_color_entity"),e.color_entity??null,void 0,c(f=>f.startsWith("light.")&&f!==e.entity),l("color_entity"))}${R(o("furn_color_entity_hint"),"nf-wide")}`:g,i&&d?Lv(t,e,n):g,i?cn(t,e.glow_scale,f=>n.update({glow_scale:f})):g,i?is(t,e,Xm(r,e,e.entity&&e.entity!=="none"?e.entity:cs(t,e,"entity"))?.attributes.effect_list,n.update):g,Rr(e.type)?cn(t,e.ambilight,f=>n.update({ambilight:f}),{label:"ambilight",hint:"ambilight_hint",lowest:0}):g,An(e.type)||ui(e.type)?cn(t,e.sound_rings,f=>n.update({sound_rings:f}),{label:"sound_rings",hint:"sound_rings_hint",lowest:0}):g,e.type==="grid_point"?g:D(t,o(pn(t.doc,e)?"meter_sub_power":Fv(e.type)),e.power??null,cs(t,e,"power"),a,f=>n.update({power:f})))}
    ${od(e.type)?Ov(t,e,n):i||e.type==="grid_point"?g:Wl(t,e,n)}
    ${e.type==="meter"?Iv(t,e,n):g}
    ${e.type==="inverter"||e.type==="home_battery"?Dv(t,e,n):g}
    ${e.type==="meter"&&!pn(t.doc,e)?ut(D(t,o("furn_export"),e.export??null,void 0,a,l("export")),R(o("furn_export_hint"),"nf-wide")):g}
    ${e.type==="inverter"&&(t.doc.settings.roof.solar??[]).length>0?R(u.length>0?o("inverter_strings",{names:u.join(", ")}):o("inverter_strings_none"),"nf-wide"):g}
    ${e.type==="home_battery"?ut(D(t,o("furn_soc"),e.soc??null,void 0,c(f=>me(f)&&(r.states[f]?.attributes.device_class==="battery"||r.states[f]?.attributes.unit_of_measurement==="%")),l("soc")),D(t,o("furn_charge"),e.charge??null,void 0,a,l("charge")),R(o("furn_charge_hint"),"nf-wide")):g}
    ${e.type==="wallbox"?ut(D(t,o("furn_wallbox_status"),e.status??null,void 0,c(f=>ki(f)||me(f)),l("status"))):g}
    ${!i||e.entity?m`${L(t,o("device_confirm"),!!e.confirm,f=>n.update({confirm:f}),{title:o("device_confirm_hint")})}
        <div class="nf-form">${Nn(t,e.marker??null,f=>n.update({marker:f}))}${Nt(t,e.icon,f=>n.update({icon:f}))}${i?g:Vn(t,e.pin_offset,f=>n.update({pin_offset:f}))}</div>`:g}
    ${e.type==="robot_vacuum"?ut(D(t,o("furn_robot_room"),e.room_sensor??null,ld(r,je(r,t.doc.floors).get(e.id)?.entity??null,null),c(me),f=>n.update({room_sensor:f}))):g}
    ${e.type==="robot_vacuum"&&d?Pv(t,e):g}
    ${e.type==="fridge_smart"?m`${ut(D(t,o("furn_door_left"),e.door_left??null,void 0,p,f=>n.update({door_left:f})),D(t,o("furn_door_right"),e.door_right??null,void 0,p,f=>n.update({door_right:f})))}
        ${R(o("fridge_hint"))}`:g}
    ${R(o(h))}`}var Hv=/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./,Cv=/^(sensor|input_select|select|input_text)\./,Wv=/^(device_tracker|sensor|binary_sensor|lock|climate)\./,Nv=(t,e)=>t.flatMap(n=>n.items.filter(r=>r.vehicle).map(r=>({id:fe(n.id,r.id),label:`${nt(r,fe(n.id,r.id),e)} \xB7 ${Ne(n,e)}`})));function dg(t,e){return e.startsWith("device_tracker.")?t.hass?.states[e]?.attributes.source_type==="router"?2:0:1}function hg(t,e,n,r){return m`<select ?disabled=${!t.admin} @change=${o=>r(o.target.value||null)}>
    <option value="" ?selected=${!n}>${t.t("parking_vehicle_none")}</option>
    ${e.map(o=>m`<option value=${o.id} ?selected=${o.id===n}>${o.label}</option>`)}
  </select>`}function Vv(t,e,n,r){let o=t.t,i=e.type_entity?t.hass?.states[e.type_entity]:void 0,s=Array.isArray(i?.attributes.options)?i.attributes.options:[],a=e.types??[],l=u=>r.update({types:u}),c=(u,d)=>l(a.map((p,h)=>h===u?{...p,...d}:p));return m`<div class="nf-wide">
    <div class="nf-sub">${o("parking_types")}</div>
    ${a.map((u,d)=>m`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${o("parking_type_state")} .value=${u.state} ?disabled=${!t.admin} @change=${p=>c(d,{state:p.target.value})} />
        ${hg(t,n,u.vehicle,p=>c(d,{vehicle:p??""}))}
        <button class="nf-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>l(a.filter((p,h)=>h!==d))}>✕</button>
      </div>`)}
    <datalist id="nf-parking-states">${s.map(u=>m`<option value=${u}></option>`)}</datalist>
    ${t.admin?m`<button class="nf-btn" @click=${()=>l([...a,{state:s[a.length]??"",vehicle:n[0]?.id??""}])}>${o("parking_add_type")}</button>`:g}
  </div>`}function pg(t,e,n,r){let o=t.t,i=Nv(n,t.hass?.language??"en"),s=C(t.hass,f=>Hv.test(f)).sort((f,_)=>dg(t,f.id)-dg(t,_.id)),a=C(t.hass,f=>Cv.test(f)),l=e.car??{},c=t.floor,u=c?.rooms.find(f=>f.points.length>=3&&W([e.x,e.z],f.points)),d=e.vehicle?U(e.vehicle):void 0,p=d?d.size[2]*(e.scale??1):0,h=!!u&&!!c&&p>c.height+1e-6;return m`<div class="nf-form nf-links">
      ${D(t,o("parking_entity"),e.entity??null,void 0,s,f=>r.update({entity:f==="none"?null:f}))}
      <label class="nf-field nf-wide">${o("parking_vehicle")} ${hg(t,i,e.vehicle??null,f=>r.update({vehicle:f}))}</label>
      ${i.length>0?g:R(o("parking_no_pack"),"nf-wide")}
      ${F(t,o("parking_scale"),Math.round((e.scale??1)*100),f=>r.update({scale:Math.min(150,Math.max(30,f))/100}),5,30)}
      ${D(t,o("parking_type_entity"),e.type_entity??null,void 0,a,f=>r.update({type_entity:f==="none"?null:f}))}
      ${e.type_entity?Vv(t,e,i,r):g}
    </div>
    ${h?m`<p class="nf-sub nf-warn">${o("parking_too_tall",{car:q(t.hass,p,2),room:q(t.hass,c.height,2)})}</p>`:g}
    ${R(o("parking_hint"))}
    ${t.hass?m`${D(t,o("live_car_device"),l.device??null,null,C(t.hass,f=>Wv.test(f)),f=>r.update({car:{...l,device:f}}))}
        ${R(o("live_car_device_hint"),"nf-wide")}
        ${D(t,o("live_car_departure_entity"),l.departure??null,void 0,C(t.hass,f=>/^(sensor|input_datetime|time|datetime)\./.test(f)),f=>r.update({car:{...l,departure:f==="none"?null:f}}))}`:g}`}var fg=.12;function Bv(t,e,n,r,o){switch(t.type){case"tv_board":{let i=Math.min(e*.8,1.45);return{x0:-i/2+.02,x1:i/2-.02,y0:r+.12,y1:r+.08+i*.56,z:-n/2+.165}}case"tv_wall":{let i=1.3-r/2;return{x0:-e/2+.02,x1:e/2-.02,y0:i+.02,y1:i+r-.02,z:n/2+.003}}case"desk":return{x0:-.28,x1:.28,y0:r+.1,y1:r+.4,z:-n/2+.115};case"fridge_smart":{let i=o?Se(o,t):0;return{x0:.06,x1:e/2-.06,y0:i+r*.52+.01,y1:i+r*.86-.01,z:n/2+.006}}case"radiator":return{x0:-e/2+.02,x1:e/2-.02,y0:fg+.02,y1:fg+r-.02,z:n/2+.004};case"washer":case"dryer":{let i=(r-.14)/2+.04,s=Math.min(e*.36,(r-.2)*.42)*.8;return{x0:-s,x1:s,y0:i-s,y1:i+s,z:n/2-.004}}case"dishwasher":return{x0:-e/2+.06,x1:e/2-.06,y0:r-.16,y1:r-.08,z:n/2-.004};default:return null}}function Kv(t,e){let[n,r,o]=[Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h)],i=U(t.type),s=i&&Jt(i,n,r,o).find(c=>c.screen);if(s){let c=e?Se(e,t):0,[u,d]=[(s.x-s.w/2)*n,(s.x+s.w/2)*n],p=Math.min(.02,(d-u)*.05);return{x0:u+p,x1:d-p,y0:c+s.y*o+p,y1:c+(s.y+s.h)*o-p,z:(s.z+s.d/2)*r}}let a=e&&t.type!=="fridge_smart"?Se(e,t)-Ko(t):0,l=Bv(t,n,r,o,e);return l&&{...l,y0:l.y0+a,y1:l.y1+a}}function mg(t,e){let n=Kv(t,e);return n&&t.mirror?{...n,x0:-n.x1,x1:-n.x0}:n}function gg(t,e){let[n,r,o]=[Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h)],i=U(t.type),s=i&&Jt(i,n,r,o).find(d=>d.picture);if(!s)return null;let a=e?Se(e,t):0,[l,c]=[(s.x-s.w/2)*n,(s.x+s.w/2)*n],u={x0:l,x1:c,y0:a+s.y*o,y1:a+(s.y+s.h)*o,z:(s.z+s.d/2)*r};return t.mirror?{...u,x0:-u.x1,x1:-u.x0}:u}function _g(t,e){let n=[],r=(l,c)=>{c&&n.push({name:l,x:(c.x0+c.x1)/2,y:(c.y0+c.y1)/2,z:c.z,width:c.x1-c.x0,height:c.y1-c.y0,rotation:0})};r("screen",mg(t,e)),r("picture",gg(t,e));let o=U(t.type);if(!o)return n;let[i,s,a]=[Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h)];for(let l of Jt(o,i,s,a)){if(!l.texture||l.shape!=="box"||l.move||n.some(d=>d.name===l.texture))continue;let c=(l.rot??0)*Math.PI/180,u=t.mirror?-1:1;n.push({name:l.texture,x:u*(l.x*i-l.d*s/2*Math.sin(c)),y:Se(e,t)+(l.y+l.h/2)*a,z:l.z*s+l.d*s/2*Math.cos(c),width:l.w*i,height:l.h*a,rotation:u*(l.rot??0)})}return n}function bg(t,e){let r=fn(t,e.w,e.d,e.h).treads.findIndex(o=>o.landing);return r>=0?r+1:1}function Gv(t){let e=fn(go(t),t.w,t.d,t.h),n=e.treads.map(Wi),r=0;for(let i=1;i<n.length;i++)r+=Math.hypot(n[i][0]-n[i-1][0],n[i][1]-n[i-1][1]);let o=n.length>1?r/(n.length-1):0;return{rise:e.rise,going:o,measure:2*e.rise+o,steps:e.steps}}function Uv(t){let[e,n]=nl[t],r=fn({..._t,shape:t},e,n,2.8),o=26/Math.max(e,n);return m`<svg viewBox="-14 -14 28 28" width="28" height="28" aria-hidden="true">
    ${r.treads.map(i=>A`<polygon points=${i.poly.map(([s,a])=>`${s*o},${a*o}`).join(" ")} fill=${i.landing?"currentColor":"none"} fill-opacity="0.25" stroke="currentColor" stroke-width="0.8" />`)}
  </svg>`}function yg(t,e,n){let r=t.t,o=go(e),i=f=>n.update({stair:{...o,...f}}),s=o.shape!=="straight",a=f=>{let[_,b]=nl[f];n.update({stair:{...o,shape:f,run_width:null},w:_,d:b})},l=t.floor?t.doc.floors.filter(f=>f.elevation<t.floor.elevation).sort((f,_)=>_.elevation-f.elevation)[0]:void 0,c=t.floor?t.doc.floors.filter(f=>f.elevation>t.floor.elevation).sort((f,_)=>f.elevation-_.elevation)[0]:void 0,u=f=>{let _=f?l&&t.floor?t.floor.elevation-l.elevation:null:c&&t.floor?c.elevation-t.floor.elevation:null;n.update({stair:{...o,down:f},..._?{h:Math.round(_*1e3)/1e3}:{}})},d=Gv(e),p=f=>q(t.hass,f*100,1),h=d.measure>=.59&&d.measure<=.65&&d.rise<=.21;return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${r("stair_shape")}</span>
      <div class="nf-swatches nf-stair-shapes" role="radiogroup" aria-label=${r("stair_shape")}>
        ${Ja.map(f=>m`<button type="button" class="nf-btn nf-stair-shape" role="radio" aria-checked=${f===o.shape} title=${r(`stair_shape_${f}`)} ?disabled=${!t.admin} @click=${()=>a(f)}>
            ${Uv(f)}<span>${r(`stair_shape_${f}`)}</span>
          </button>`)}
      </div>
    </div>
    ${s?O(t,r("stair_turn"),o.turn,[["left",r("stair_turn_left")],["right",r("stair_turn_right")]],f=>i({turn:f})):""}
    ${O(t,r("stair_build"),o.build,Qa.map(f=>[f,r(`stair_build_${f}`)]),f=>i({build:f}))}
    ${o.build!=="solid"?L(t,r("stair_risers"),o.risers,f=>i({risers:f}),{wide:!1}):""}
    ${F(t,r("stair_steps"),o.steps??d.steps,f=>i({steps:Math.round(Math.min(40,Math.max(2,f)))}),1,2)}
    ${o.steps!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({steps:null})}>${r("height_auto")}</button>`:""}
    ${s&&o.shape!=="spiral"?m`${F(t,r("stair_run_width"),o.run_width??fn(o,e.w,e.d,e.h).flight,f=>i({run_width:Math.max(.4,f)}),.01,.4)}
        ${o.run_width!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({run_width:null})}>${r("height_auto")}</button>`:""}`:""}
    ${o.shape==="l"||o.shape==="u"?m`${F(t,r("stair_landing_after"),o.landing_after??bg(o,e),f=>i({landing_after:Math.round(Math.min(d.steps-1,Math.max(1,f)))}),1,1)}
        ${o.landing_after!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>i({landing_after:null})}>${r("height_auto")}</button>`:""}
        ${R(r("stair_landing_hint",{h:p((o.landing_after??bg(o,e))*Math.abs(e.h)/d.steps)}),"nf-wide")}`:""}
    ${O(t,r("stair_rail"),o.rail,el.map(f=>[f,r(`stair_rail_${f}`)]),f=>i({rail:f}))}
    ${L(t,r("stair_down"),o.down,u,{title:r("stair_down_hint")})}
    ${O(t,r("stair_opening"),o.opening,tl.map(f=>[f,r(`stair_opening_${f}`)]),f=>i({opening:f}),{wide:!0,title:r("stair_opening_hint")})}
    <p class="nf-sub nf-wide ${h?"":"nf-pack-error"}">
      ${r("stair_measures",{steps:d.steps,rise:p(d.rise),going:p(d.going),measure:p(d.measure)})} ${h?"\u2713":`\u2013 ${r("stair_uncomfortable")}`}
    </p>
    ${R(r(o.down?"stair_down_note":o.opening==="headroom"?"stair_up_note":"stair_up_note_plain"),"nf-wide")}
  </div>`}var jv=new Set(["parking","stairwell","rug","grid_point"]),Zv=new Set(["floor_opening","stairs","chimney"]),qv={inverter:{label:"furn_model",values:["","slim","hybrid"],text:t=>`inverter_${t||"std"}`},home_battery:{label:"furn_model",values:["","wall","cube"],text:t=>`battery_${t||"std"}`},lamp_pendant:{label:"pendant_shape",values:["","globe","cone","drum"],text:t=>`pendant_${t||"shade"}`},sofa:{label:"sofa_shape",values:["","l","u"],text:t=>`sofa_${t||"straight"}`}};function Yv(t,e,n,r){let o=t.hass?.language??"en",i=n.some(s=>e.type.startsWith(`pack:${s.id}:`));return m`<label class="nf-field nf-wide"
    >${t.t("furniture_type")}
    <select ?disabled=${!t.admin} @change=${s=>r.update({type:s.target.value})}>
      ${Jo.map(s=>m`<option value=${s} ?selected=${s===e.type}>${t.t(`furn_${s}`)}</option>`)}
      ${n.map(s=>m`<optgroup label=${Ne(s,t.hass?.language??"de")}>
          ${s.items.map(a=>m`<option value=${fe(s.id,a.id)} ?selected=${fe(s.id,a.id)===e.type}>${nt(a,fe(s.id,a.id),o)}</option>`)}
        </optgroup>`)}
      ${e.type.startsWith("pack:")&&!i?m`<option value=${e.type} selected>${tt(t.hass,e.type)}</option>`:g}
    </select>
  </label>`}function Xv(t,e,n){let r=U(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!r?.length)return g;let o=t.hass?.language??"en",i=r.find(a=>a.id===e.variant)??r[0],s=a=>Ph(a,o);return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${t.t("paint_colour")}: ${s(i)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${t.t("paint_colour")}>
        ${r.map((a,l)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${a.id===i.id} title=${s(a)} style=${`--sw:${a.hex}`} ?disabled=${!t.admin} @click=${()=>n.update({variant:l===0?null:a.id})}></button>`)}
      </div>
    </div>
  </div>`}function Jv(t,e,n){let r=qv[e.type];if(!r)return g;let o=r.values.map(i=>[i,t.t(r.text(i))]);return m`<div class="nf-form">${O(t,t.t(r.label),e.variant??"",o,i=>n.update({variant:i||null,...e.type==="sofa"&&i&&e.d<1.4?{d:1.7,w:Math.max(e.w,i==="u"?3:2.4)}:{}}),{wide:!0})}</div>`}function Qv(t,e,n){let r=t.t(`furn_${e.type}`),o=r===`furn_${e.type}`?"":r;return m`<label class="nf-field nf-wide"
      >${t.t("furn_name")}
      <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t.admin} placeholder=${o} @change=${i=>n.update({name:i.target.value.trim()||null})} />
    </label>
    ${e.name?L(t,t.t("show_name"),!!e.show_name,i=>n.update({show_name:i||void 0})):g}`}function ek(t,e,n){let r=t.t,o=s=>n.update(s),i=t.floor;return m`${F(t,r("x"),e.x,s=>o({x:s}))} ${F(t,r("z"),e.z,s=>o({z:s}))}
    ${F(t,r("width"),e.w,s=>o({w:Math.max(.05,s)}),.01,.05)} ${F(t,r("depth"),e.d,s=>o({d:Math.max(.05,s)}),.01,.05)}
    ${F(t,r("height_m"),e.h,s=>o({h:Math.max(.005,s)}),.01,0)}
    ${F(t,r("rotation"),e.rotation,s=>o({rotation:(s%360+360)%360}),1)}
    ${F(t,r("tilt_x"),e.tilt_x??0,s=>o({tilt_x:Math.max(-90,Math.min(90,Math.round(s)))||null}),1,-90)}
    ${F(t,r("tilt_z"),e.tilt_z??0,s=>o({tilt_z:Math.max(-90,Math.min(90,Math.round(s)))||null}),1,-90)}
    ${he(e.type)?g:L(t,r("furn_mirror"),!!e.mirror,s=>o({mirror:s}),{wide:!1,title:r("furn_mirror_hint")})}
    ${e.type==="led_strip"?m`${F(t,r("strip_tilt"),e.tilt??0,s=>o({tilt:Math.max(-90,Math.min(90,Math.round(s)))}),5)}
        ${e.upright?g:F(t,r("strip_rise"),e.rise??0,s=>o({rise:Math.max(-80,Math.min(80,Math.round(s)))}),5)}
        ${L(t,r("strip_upright"),!!e.upright,s=>o({upright:s}),{wide:!1,title:r("strip_upright_hint")})}`:g}
    ${Qo(e)&&i?m`${F(t,r("mount_height"),e.mount_y??Se(i,e),s=>o({mount_y:Math.max(0,s)}),.01,0)}
        ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({mount_y:null})}>${r("height_auto")}</button>`:g}`:g}
    ${tk(e)&&i?m`${F(t,r("ceiling_here"),Go(i,e),s=>o({ceiling_y:Math.abs(s-ht(i,e.x,e.z))<.005?null:Math.max(.5,s)}),.01,.5)}
        ${e.ceiling_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>o({ceiling_y:null})}>${r("height_auto")}</button>`:g}
        ${wg(t,e)!==null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${r("ceiling_slope_hint")} @click=${()=>o({ceiling_y:wg(t,e)})}>📐 ${r("ceiling_slope")}</button>`:g}
        ${R(r("ceiling_here_hint"),"nf-wide")}`:g}`}function wg(t,e){let n=t.floor;if(!n)return null;let r=Lr(t.doc,e.x,e.z);if(r===null)return null;let o=Math.round((r-n.elevation)*1e3)/1e3;return o>.5&&o<ht(n,e.x,e.z)-.02?o:null}var tk=t=>Ws.has(t.type)||U(t.type)?.mount==="ceiling";function nk(t,e,n){if(e.type==="stairs"&&e.stair)return g;if(e.type==="stairs")return m`${R(t.t("stairs_hint"))}${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-primary" title=${t.t("stair_upgrade_hint")} @click=${()=>n.update({stair:{..._t}})}>${t.t("stair_upgrade")}</button></div>`:g}`;if(e.type!=="stairwell")return g;let r=t.floor&&!t.floor.rooms.some(o=>o.points.length>=3&&Cp(kr(e),o.points));return m`${R(t.t("stairwell_hint"))}${r?m`<p class="nf-sub nf-pack-error">${t.t("stairwell_outside")}</p>`:g}`}function rk(t,e,n){if(!t.admin)return g;let r=t.t,o=!!e.entity&&e.entity!=="none"&&e.type!=="parking",i=t.doc.floors.filter(s=>s.id!==t.floor?.id);return m`<div class="nf-actions">
    <button class="nf-btn" @click=${()=>n.rotate(-90)}>${r("rotate_left")}</button>
    <button class="nf-btn" @click=${()=>n.rotate(90)}>${r("rotate_right")}</button>
    ${o?m`<button class="nf-btn" title=${r("as_device_hint")} @click=${()=>n.toDevice(e)}>${r("as_device")}</button>`:g}
    <button class="nf-btn" @click=${()=>n.duplicate()}>${r("duplicate")}</button>
    <button class="nf-btn" title=${r("furn_task_hint")} @click=${()=>n.addTask()}>✎ ${r("furn_task")}</button>
    <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button>
  </div>
  ${i.length?m`<div class="nf-form">${O(t,r("furn_to_floor"),"",[["","\u2013"],...i.map(s=>[s.id,s.name])],s=>s&&n.toFloor(s),{wide:!0,title:r("furn_to_floor_hint")})}</div>`:g}`}function ok(t,e,n){let r=e.tap??null,o=[["",t.t("furn_tap_default")],...jo.map(s=>[s,t.t(`own_action_${s}`)])],i=s=>n.update({tap:{action:r?.action??"navigate",target:r?.target??null,data:r?.data??null,...s}});return m`<div class="nf-form">
    ${O(t,t.t("furn_tap"),r?.action??"",o,s=>s?i({action:s}):n.update({tap:null}),{wide:!0,title:t.t("furn_tap_hint")})}
    ${r&&r.action!=="fire_dom_event"?j(t,t.t(`own_target_${r.action}`),r.target??"",s=>i({target:s||null}),{wide:!0,placeholder:La[r.action]}):g}
    ${r&&(r.action==="service"||r.action==="fire_dom_event")?Ha(t,r,s=>i({data:s})):g}
    ${r&&!It(e.type)&&!U(e.type)?.gangs?m`${Nn(t,e.marker??null,s=>n.update({marker:s}))}${Nt(t,e.icon,s=>n.update({icon:s}))}${Vn(t,e.pin_offset,s=>n.update({pin_offset:s}))}`:g}
  </div>`}function ik(t,e,n){let r=t.t,o=e.picture??"",i=o.startsWith("image:"),s=async l=>{let c=l.target,u=c.files?.[0];if(c.value="",!u||!t.hass)return;let{data:d}=await jn(u),p=I("img");await zt(t.hass,p,d),n.update({picture:`image:${p}`})},a=C(t.hass,l=>/^(image|camera|media_player)\./.test(l));return m`<div class="nf-form nf-links">
    ${t.admin?m`<label class="nf-btn nf-wide nf-upload">📷 ${r(i?"picture_replace":"picture_upload")}<input type="file" accept="image/*" hidden @change=${s} /></label>`:g}
    ${i?m`<p class="nf-sub nf-wide">${r("picture_stored")} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>n.update({picture:null})}>${r("delete")}</button></p>`:m`${j(t,r("picture_url"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?"":o,l=>n.update({picture:l||null}),{wide:!0,placeholder:"/local/holiday.jpg"})}
        ${D(t,r("picture_entity"),/^[a-z_]+\.[a-z0-9_]+$/.test(o)?o:null,void 0,a,l=>n.update({picture:l&&l!=="none"?l:null}))}`}
    ${F(t,r("picture_border"),e.picture_border??0,l=>n.update({picture_border:Math.max(0,Math.min(40,Math.round(l)))||null}),1,0)}
    ${O(t,r("picture_fit"),e.picture_fit??"cover",[["cover",r("picture_fit_cover")],["contain",r("picture_fit_contain")]],l=>n.update({picture_fit:l==="contain"?"contain":null}))}
    ${R(r("picture_hint"),"nf-wide")}
  </div>`}var sk=/^(input_boolean|input_select|switch|binary_sensor|sensor|calendar|schedule|sun|person|device_tracker|input_text|select)\./;function ak(t,e,n){let r=t.t,o=e.show_when??null,i=s=>n.update({show_when:{entity:o?.entity??"",state:o?.state??null,invert:o?.invert||void 0,...s}});return m`<div class="nf-form">
    ${D(t,r("furn_show_when"),o?.entity||null,void 0,C(t.hass,s=>sk.test(s)),s=>s&&s!=="none"?i({entity:s}):n.update({show_when:null}))}
    ${o?.entity?m`${j(t,r("furn_show_when_state"),o.state??"",s=>i({state:s||null}),{wide:!0,placeholder:t.hass?.states[o.entity]?.state??"on"})}
        ${L(t,r("furn_show_when_invert"),!!o.invert,s=>i({invert:s||void 0}))}`:g}
    ${R(r("furn_show_when_hint"),"nf-wide")}
  </div>`}function lk(t,e,n){if(!t.floor)return g;let r=Gu(_g(e,t.floor).map(o=>o.name));return r.length?m`<div class="nf-form">${ss(t,r,e.plugin,o=>n.update({plugin:o}))}</div>`:g}function ko(t,e,n){let r=U(e.type)?.gangs??0,o=r?cg(t,e,r,n):It(e.type)?ug(t,e,n):jv.has(e.type)?g:m`<div class="nf-form nf-links">${Cl(t,e,n)}</div>${Zv.has(e.type)?g:Wl(t,e,n)}`;return m`<section>
    <div class="nf-h3row"><h3>${e.name||t.t("furniture")}</h3>${n.lockButton}</div>
    <div class="nf-form">${Qv(t,e,n)} ${Yv(t,e,n.packs,n)} ${ek(t,e,n)}</div>
    ${nk(t,e,n)} ${e.type==="stairs"&&e.stair?yg(t,e,n):g} ${Jv(t,e,n)} ${Xv(t,e,n)}
    ${o} ${e.type.endsWith(":sprinkler")?m`<div class="nf-form">${F(t,t.t("spray_reach"),e.spray??3,i=>n.update({spray:Math.min(15,Math.max(.5,i))}),.5,.5)}${R(t.t("spray_hint"),"nf-wide")}</div>`:g}
    ${nu(e.type)?ik(t,e,n):g} ${lk(t,e,n)}
    ${U(e.type)?.pet?m`<div class="nf-form nf-links">${D(t,t.t("pet_room_sensor"),e.room_sensor??null,void 0,C(t.hass,i=>/^(sensor|device_tracker|input_select|select)\./.test(i)),i=>n.update({room_sensor:i&&i!=="none"?i:null}))}${R(t.t("pet_room_hint"),"nf-wide")}</div>`:g}
    ${Ls(e.type)?ag(t,e,Ls(e.type),n):g} ${Os(U(e.type))?lg(t,e,n):g} ${e.type==="parking"?pg(t,e,n.packs,n):g}
    ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&t.admin?m`<section>${R(t.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>n.toSpot(e)}>🅿 ${t.t("vehicle_to_spot")}</button></div></section>`:g}
    ${t.admin?ok(t,e,n):g} ${ak(t,e,n)} ${rk(t,e,n)}
  </section>`}var ck=new Set(["cover","switch","button","input_button","input_boolean","script"]),uk=["door","window","opening","garage_door"],dk=/griff|handle|fenster|window|drehgriff/i;function hk(t){let e=[null,15,30,45,60,90,120,180];return t&&!e.includes(t)&&e.push(t),e.sort((n,r)=>(n??0)-(r??0))}function pk(t){let{hass:e}=t,n=i=>e?.states[i],r=i=>n(i)?.attributes.device_class,o=i=>i.startsWith("binary_sensor.")&&uk.includes(r(i)??"");return{covers:C(e,i=>i.startsWith("cover.")),drives:C(e,i=>ck.has(i.slice(0,i.indexOf(".")))),positions:C(e,i=>/^(sensor|number|input_number)\./.test(i)&&Number.isFinite(Number(n(i)?.state))),contacts:C(e,i=>o(i)||me(i)&&ea(n(i))!==null),plainContacts:C(e,o),handles:C(e,i=>i.startsWith("binary_sensor.")?typeof n(i)?.attributes.window_state=="string":me(i)&&(ea(n(i))!==null||dk.test(`${i} ${G(e,i)}`))),numbers:C(e,me),locks:C(e,i=>i.startsWith("lock."))}}function Vl(t,e,n){if(!t.hass)return null;let r=structuredClone(t.doc.floors);for(let o of r)for(let i of o.openings)i.id===e.id&&(i[n]=null);return Sr(t.hass,r).get(e.id)?.[n]??null}var At=t=>t==="none"?null:t;function fk(t,e,n){let r=e.type==="door"?Vs:Bs,o=xt({type:e.type,style:null},n.isExterior(e)),i=e.style&&r.includes(e.style)?e.style:"",s=[["",t.t("style_auto",{style:t.t(`style_${o}`)})],...r.map(a=>[a,t.t(`style_${a}`)])];return O(t,t.t("opening_style"),i,s,a=>n.update({style:a||null}),{wide:!0})}function Nl(t,e,n,r,o){return m`<label class="nf-field"
    >${t.t(r)}
    <input
      type="number"
      step="0.05"
      min="0.1"
      max="3"
      placeholder=${t.t("sidelight_auto")}
      .value=${e[n]==null?"":String(e[n])}
      ?disabled=${!t.admin}
      @change=${i=>{let s=Number(i.target.value);o.update({[n]:Number.isFinite(s)&&s>0?Math.min(3,Math.max(.1,Math.round(s*100)/100)):null})}}
    />
  </label>`}function mk(t,e,n){if(e.type!=="door")return g;let r=xt(e,n.isExterior(e));return r==="sidelight"?m`${L(t,t.t("sidelight_hinge"),!!e.sidelight_hinge,o=>n.update({sidelight_hinge:o}),{wide:!1,title:t.t("sidelight_hinge_hint")})}
      ${Nl(t,e,"sidelight_width","sidelight_width",n)}`:r==="sidelights"?m`${Nl(t,e,"sidelight_width","sidelight_width_left",n)} ${Nl(t,e,"sidelight_width2","sidelight_width_right",n)}`:g}function gk(t,e,n){return e.type!=="window"||xt(e,n.isExterior(e))!=="glass_wall"?g:m`<label class="nf-field"
      >${t.t("glass_panes")}
      <input
        type="number"
        step="1"
        min="0"
        max="40"
        placeholder=${t.t("glass_panes_auto")}
        .value=${e.panes==null?"":String(e.panes)}
        ?disabled=${!t.admin}
        @change=${r=>{let o=r.target.value.trim(),i=Number(o);n.update({panes:o===""||!Number.isFinite(i)?null:Math.min(40,Math.max(0,Math.round(i)))})}}
      />
    </label>
    ${R(t.t("glass_panes_hint"),"nf-wide")}`}function vg(t,e,n,r,o){let i=n===1,s=t.t,a=i?e.tilt:e.tilt2??null,l=i?e.contact:e.contact2,c=(i?e.sensor:e.sensor2)??(a&&a!=="none"?"contact_tilt":"contact"),u=["contact","handle","contact_tilt"].map(f=>[f,s(`sensor_kind_${f}`)]),d=f=>{let _=f==="contact_tilt"?{}:i?{tilt:null}:{tilt2:null};r.update({...i?{sensor:f}:{sensor2:f},..._})},p=f=>r.update(i?{contact:f}:{contact2:At(f)}),h=e.tilt_angle&&e.tilt_angle!=="none";return m`${O(t,s("sensor_kind"),c,u,d,{wide:!0})}
    ${c==="handle"?D(t,s("handle_entity"),l,void 0,o.handles,f=>p(f==="none"?i?"none":null:f)):D(t,s("contact_entity"),l,i?Vl(t,e,"contact"):void 0,o.plainContacts,p)}
    ${c==="contact_tilt"?D(t,s("tilt_entity"),a,void 0,o.contacts,f=>r.update(i?{tilt:At(f)}:{tilt2:At(f)})):g}
    ${i?m`${D(t,s("tilt_angle_entity"),e.tilt_angle??null,void 0,o.numbers,f=>r.update({tilt_angle:At(f)}))}
        ${h?m`${F(t,s("tilt_angle_max"),e.tilt_max??15,f=>r.update({tilt_max:Math.min(90,Math.max(1,f))}),1,1)}
            ${F(t,s("tilt_angle_offset"),e.tilt_offset??0,f=>r.update({tilt_offset:f}),.5)}
            ${L(t,s("tilt_angle_invert"),!!e.tilt_invert,f=>r.update({tilt_invert:f}))}`:g}`:g}`}function _k(t,e,n,r){let o=t.t,i=e.type==="window",s=Vl(t,e,"cover"),a=e.cover!=="none"&&(e.cover||s);return m`${D(t,o(i?"cover_entity":"door_cover"),e.cover,s,i?r.covers:r.drives,l=>n.update({cover:l}))}
    ${a?m`${D(t,o("cover_position_entity"),e.position??null,void 0,r.positions,l=>n.update({position:At(l)}))}
        ${e.position?L(t,o("cover_position_invert"),!!e.position_inverted,l=>n.update({position_inverted:l})):g}
        ${L(t,o("device_confirm"),!!e.confirm,l=>n.update({confirm:l}),{title:o("cover_confirm_hint")})}
        ${i?m`${O(t,o("blind_kind"),e.blind??"roller",[["roller",o("blind_roller")],["venetian",o("blind_venetian")],["inside",o("blind_inside")]],l=>n.update({blind:l==="roller"?null:l}))}
            ${D(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:At(l)}))}`:g}
        ${!i&&e.type!=="garage"?D(t,o("cover2_entity"),e.cover2??null,void 0,r.covers,l=>n.update({cover2:At(l)})):g}
        ${F(t,o("cover_my"),e.my_position??0,l=>n.update({my_position:l>0?Math.min(100,Math.round(l)):null}),5,0)}
        ${R(o("blind_hint"),"nf-wide")}`:g}`}function bk(t,e,n,r){let o=t.t,i=e.leaves===2;return m`${D(t,o(i?"contact_main":"contact_entity"),e.contact,Vl(t,e,"contact"),r.contacts,s=>n.update({contact:s}))}
    ${i&&e.type!=="garage"?D(t,o("contact_second"),e.contact2,void 0,r.contacts,s=>n.update({contact2:At(s)})):g}
    ${e.type==="door"?L(t,o("door_shut"),!!e.shut,s=>n.update({shut:s}),{title:o("door_shut_hint")}):g}
    ${e.type==="door"&&e.style!=="sliding"&&e.style!=="passage"?O(t,o("door_angle"),String(e.open_angle??""),hk(e.open_angle).map(s=>[String(s??""),s?`${s}\xB0`:o("door_angle_default")]),s=>n.update({open_angle:s?Number(s):null}),{title:o("door_angle_hint")}):g}
    ${e.type==="door"?m`${D(t,o("opening_lock"),e.lock??null,void 0,r.locks,s=>n.update({lock:At(s)}))}${R(o("opening_lock_hint"),"nf-wide")}`:g}`}function Bl(t,e,n){let r=t.t,o=pk(t),i=$n(e),[s,a,l]=[e.type==="window",e.type==="garage",e.type==="door"],c=h=>n.update(h),u=Object.keys(xn).map(h=>m`<button class="nf-chip" aria-pressed=${h===i} @click=${()=>n.setPreset(e,h)}>${r(`preset_${h}`)}</button>`),d=[["left",r("hinge_left")],["right",r("hinge_right")]],p=[["",r("opening_mark_open")],["closed",r("opening_mark_closed")]];return m`<section>
    <div class="nf-h3row"><h3>${r(`preset_${i}`)}</h3>${n.lockButton}</div>
    ${t.admin?m`<div class="nf-presets" role="group" aria-label=${r("opening_type")}>${u}</div>`:g}
    ${t.admin&&!a?m`<div class="nf-actions">
          <button class="nf-btn" title=${r("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${r(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${l?m`<button class="nf-btn" title=${r("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${r("flip_swing")}</button>`:g}
        </div>`:g}
    <div class="nf-form">
      ${F(t,r("width"),e.width,h=>c({width:Math.max(.3,h)}),.01,.3)}
      ${F(t,r("opening_position"),e.offset,h=>c({offset:Math.max(0,h)}),.01,0)}
      ${s||l&&!a?F(t,r("sill"),e.sill,h=>c({sill:Math.max(0,h)}),.01,0):g}
      ${F(t,r("opening_height"),e.height,h=>c({height:Math.max(.3,h)}),.01,.3)}
      ${a?g:fk(t,e,n)} ${mk(t,e,n)} ${gk(t,e,n)}
      ${s&&e.style!=="glass_wall"?O(t,r("window_opens"),e.opens??"turn",cu.map(h=>[h,r(`window_opens_${h}`)]),h=>c({opens:h==="turn"?null:h}),{wide:!0,title:r("window_opens_hint")}):g}
      ${O(t,r("opening_mark"),e.mark==="closed"?"closed":"",p,h=>c({mark:h==="closed"?"closed":null}),{wide:!0,title:r("opening_mark_hint")})}
      ${a?g:O(t,r(e.leaves===2?"main_leaf":"hinge"),e.hinge,d,h=>c({hinge:h}),{wide:!0})}
      ${s?O(t,r("sill_boards"),e.sill_boards??"auto",[["auto",r("sill_boards_auto")],["none",r("sill_boards_none")],["inside",r("sill_boards_inside")],["outside",r("sill_boards_outside")]],h=>c({sill_boards:h==="auto"?null:h}),{wide:!0}):g}
      ${s?L(t,r("opening_rain_warning"),e.rain_warning!==!1,h=>c({rain_warning:h?void 0:!1}),{wide:!0}):g}
      ${s&&n.isBelowGround?.(e)?L(t,r("opening_light_well"),e.light_well!==!1,h=>c({light_well:h?null:!1}),{wide:!0}):g}
      ${_k(t,e,n,o)}
      ${s?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_main")}</h4>`:g}${vg(t,e,1,n,o)}
          ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_second")}</h4>${vg(t,e,2,n,o)}`:g}`:bk(t,e,n,o)}
    </div>
    ${R(r(s?"opening_hint":a?"garage_hint":"door_hint"))}
    ${t.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>n.remove()}>${r("delete")}</button></div>`:g}
  </section>`}function Xn(t){let e=t.roof.floorsTopDown();return e.length<2?g:m`<div class="nf-seg nf-dev-source">${e.map(n=>m`<button aria-pressed=${n.id===t.floorId} @click=${()=>t.setFloorId(n.id)}>${n.name}</button>`)}</div>`}function Jn(t,e,n){return t.admin?m`<button class="nf-btn nf-fix" aria-pressed=${e} title=${t.t("fix_hint")} @click=${n}>${e?`\u{1F512} ${t.t("unfix")}`:`\u{1F513} ${t.t("fix")}`}</button>`:g}function Qn(t,e,n,r){return m`<div class="nf-seg nf-dev-source">${e.map(([o,i])=>m`<button aria-pressed=${o===n} ?disabled=${!t.admin} @click=${()=>r(o)}>${i}</button>`)}</div>`}function Ft(t,e){let{t:n,doc:r,hass:o}=t,i=n(`compass_${Ea(e,r.settings.north??0)}`);if(e.key===Ce)return n("solar_ground");if(e.wall){let l=r.floors.find(c=>c.id===e.wall.floorId);return`${n("solar_wall")} ${l?.name??""} \xB7 ${i} \xB7 ${q(o,e.lu,1)} m`}let s=r.settings.roof.sections??[],a=e.section?n("solar_section",{n:s.findIndex(l=>l.id===e.section)+1}):n("solar_main");return e.flat?`${a} \xB7 ${n("solar_flat")}`:`${a} \xB7 ${i} \xB7 ${Math.round(e.pitch)}\xB0`}var Kl=(t,e)=>m`<div class="nf-h3row"><h3>${t}</h3>${e}</div>`,Gl=(t,e)=>m`<button class="nf-btn nf-back" @click=${e}>‹ ${t}</button>`,_n=(t,e)=>n=>Math.max(t,Math.min(e,ae(n)));function yk(t,e){let{host:n,roof:r}=t,o=n.t,i=y=>r.patchSection(y),s=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",l=e.axis==="x"?[o("roof_side_top"),o("roof_side_bottom")]:[o("roof_side_left"),o("roof_side_right")],[c,u]=e.flip?[l[1],l[0]]:l,d=!!n.doc.settings.lock_plan,p=(y,x,k,S=.05,$=0)=>F(n,y,x,E=>k(Math.max($,ae(E))),S,$),h=[...n.doc.floors].filter(y=>y.rooms.length>0).sort((y,x)=>x.elevation-y.elevation),f=ba(n.doc,e)?.id,_=y=>{let x=n.doc.floors.find($=>$.id===y);if(!x)return;let k=ae(x.elevation+x.height),S=k-e.base;i({base:k,eave_a:ae(e.eave_a+S),eave_b:ae(e.eave_b+S)})},b=d?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${o("lock_plan_hint")} @click=${()=>t.toggleLockPlan()}>🔒 ${o("plan_locked")}</button>`:Jn(n,!!e.locked,()=>i({locked:!e.locked})),w=hu.map(y=>[y,o(`roof_shape_${y}`)]),v=(y,x)=>m`<button class="nf-btn" title=${o("roof_dormer_hint")} @click=${()=>r.addDormer(y)}>+ ${o("roof_dormer")} ${x}</button>`;return m`${Gl(o("roof_sections"),()=>r.sectionId=null)}
    <section>
      ${Xn(t)}
      ${Kl(`${e.dormer?o("roof_dormer"):o("roof_section")} ${_f(n.doc.settings.roof.sections??[],e.id)}`,n.admin?b:g)}
      ${O(n,o("roof_shape"),e.shape,w,y=>i({shape:y,...y==="gable"||y==="hip"||y==="halfhip"?{}:{ends:null}}),{wide:!0})}
      ${e.shape==="gable"||e.shape==="hip"||e.shape==="halfhip"?$k(n,e,i):g}
      ${s?g:Qn(n,[["x",o("roof_axis_x")],["z",o("roof_axis_z")]],e.axis,y=>i({axis:y}))}
      ${L(n,o("roof_open"),!!e.open,y=>i({open:y}),{title:o("roof_open_hint")})}
      <div class="nf-form">
        ${s?p(o("roof_height"),e.eave_a,y=>i({eave_a:y,eave_b:y})):m`${p(`${o("roof_eave")} ${a?"":c}`,e.eave_a,y=>i({eave_a:y}))}
            ${a?g:p(`${o("roof_eave")} ${u}`,e.eave_b,y=>i({eave_b:y}))}
            ${p(`${o("roof_pitch_short")} ${a?"":c}`,e.pitch_a,y=>i({pitch_a:Math.min(75,y)}),1)}
            ${a?g:p(`${o("roof_pitch_short")} ${u}`,e.pitch_b,y=>i({pitch_b:Math.min(75,y)}),1)}`}
        ${p(o("roof_base"),e.base,y=>i({base:y}))}
        ${e.points?.length?g:F(n,o("roof_rotation"),e.rotation??0,y=>i({rotation:(Math.round(y)%360+540)%360-180||null}),1)}
        ${O(n,o("roof_on_floor"),f??"",h.map(y=>[y.id,y.name]),_,{title:o("roof_on_floor_hint")})}
        ${R(o("roof_base_hint"),"nf-wide")}
        ${p(o("roof_overhang"),e.overhang??n.doc.settings.roof.overhang,y=>i({overhang:Math.min(2,y)}))}
      </div>
      <details class="nf-section" ?open=${!!e.overhang_sides}>
        <summary>${o("roof_overhang_sides")}</summary>
        <div class="nf-form">
          ${["a","b","u0","u1"].map(y=>p(o(`roof_overhang_${y}`),Or(n.doc,e,e.overhang??n.doc.settings.roof.overhang)[y],x=>i({overhang_sides:{...e.overhang_sides??{},[y]:Math.min(2,Math.max(0,x))}})))}
          ${n.admin&&e.overhang_sides?m`<button class="nf-btn" @click=${()=>i({overhang_sides:null})}>${o("roof_overhang_auto")}</button>`:g}
        </div>
        ${R(o("roof_overhang_sides_hint"))}
      </details>
      ${s&&n.admin?m`${X(m`<button class="nf-btn" title=${o("roof_outline_hint")} @click=${()=>r.takeOutline()}>${o("roof_outline")}</button>`,e.points?m`<button class="nf-btn" @click=${()=>i({points:null})}>${o("roof_rect")}</button>`:g)}
          ${e.points?X(...e.points.map((y,x)=>m`<button class="nf-chip" title=${o("delete_point")} ?disabled=${(e.points?.length??0)<=3} @click=${()=>r.removeCorner(x)}>${x+1} ×</button>`)):g}
          ${R(o(e.points?"roof_points_hint":"roof_outline_hint"))}`:g}
      ${R(`${o("roof_ridge_height")}: ${ge(n.hass,Qt(e))} \xB7 ${o("roof_section_hint")}`)}
      ${n.admin?X(s?g:m`<button class="nf-btn" title=${o("roof_swap_hint")} @click=${()=>i({flip:!e.flip})}>⇅ ${o("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?m`${v("a",c)}${a?g:v("b",u)}`:g,m`<button class="nf-btn" @click=${()=>r.duplicateSection()}>${o("duplicate")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeSection()}>${o("delete")}</button>`):g}
    </section>`}function wk(t,e){let{host:n,roof:r}=t,o=n.t,i=Y(n.doc),s=p=>r.patchWindow(p),a=C(n.hass,p=>p.startsWith("cover.")),l=C(n.hass,p=>ki(p)||me(p)),c=(p,h,f,_)=>D(n,o(p),h??null,void 0,f,b=>s({[_]:b==="none"?null:b})),u=p=>{let h=i.find(f=>f.key===p);h&&s({...qr(h,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},d=(n.doc.settings.roof.windows??[]).findIndex(p=>p.id===e.id)+1;return m`${Gl(o("roof_sections"),()=>r.windowId=null)}
    <section>
      ${Kl(`\u{1FA9F} ${o("roof_window")} ${d}`,Jn(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("solar_face"),e.face,i.map(p=>[p.key,Ft(n,p)]),u,{wide:!0})}
        ${F(n,o("width"),e.w??.78,p=>s({w:_n(.3,4)(p)}),.01,.3)}
        ${F(n,o("height_m"),e.h??1.18,p=>s({h:_n(.3,4)(p)}),.01,.3)}
        ${F(n,o("solar_u"),e.u,p=>s({u:ae(p)}),.05)} ${F(n,o("solar_v"),e.v,p=>s({v:ae(p)}),.05)}
        ${c("cover_entity",e.cover,a,"cover")} ${c("contact_entity",e.contact,l,"contact")}
        ${c("roof_window_tilt",e.tilt,l,"tilt")} ${c("roof_window_motor",e.window,a,"window")}
        ${j(n,o("roof_window_name"),e.name??"",p=>s({name:p||null}),{wide:!0,maxlength:64})}
      </div>
      ${R(o("roof_window_motor_hint"))} ${R(o("roof_window_hint"))}
      ${n.admin?X(m`<button class="nf-btn nf-danger" @click=${()=>r.removeWindow()}>${o("delete")}</button>`):g}
    </section>`}function vk(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.windows??[],o=new Map(Y(e.doc).map(s=>[s.key,s])),i=s=>{n.windowId=s,n.sectionId=null};return m`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${R(e.t(o.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("roof_window")} ${a+1} · ${l?Ft(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${X(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function kk(t,e){let{host:n,roof:r}=t,o=n.t,i=Y(n.doc),s=d=>r.patchChimney(d),a=an(e),l=d=>{let p=i.find(h=>h.key===d);p&&s({...Yr(p,e.id),shape:e.shape,w:e.w,d:e.d,h:e.h,name:e.name})},c=a.shape==="round"||a.shape==="steel",u=(n.doc.settings.roof.chimneys??[]).findIndex(d=>d.id===e.id)+1;return m`${Gl(o("roof_sections"),()=>r.chimneyId=null)}
    <section>
      ${Kl(`\u{1F9F1} ${o("chimney")} ${u}`,Jn(n,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(n,o("chimney_shape"),a.shape,pu.map(d=>[d,o(`chimney_${d}`)]),d=>s({shape:d,w:null,d:null,h:null}),{wide:!0})}
        ${O(n,o("solar_face"),e.face,i.map(d=>[d.key,Ft(n,d)]),l,{wide:!0})}
        ${c?F(n,o("chimney_diameter"),a.w,d=>s({w:_n(.1,3)(d),d:_n(.1,3)(d)}),.01,.1):m`${F(n,o("width"),a.w,d=>s({w:_n(.1,3)(d)}),.01,.1)} ${F(n,o("chimney_depth"),a.d,d=>s({d:_n(.1,3)(d)}),.01,.1)}`}
        ${F(n,o("chimney_height"),a.h,d=>s({h:_n(.2,5)(d)}),.05,.2)}
        ${F(n,o("solar_u"),e.u,d=>s({u:ae(d)}),.05)} ${F(n,o("solar_v"),e.v,d=>s({v:ae(d)}),.05)}
        ${j(n,o("roof_window_name"),e.name??"",d=>s({name:d||null}),{wide:!0,maxlength:64})}
      </div>
      ${R(o("chimney_hint"))}
      ${n.admin?X(m`<button class="nf-btn nf-danger" @click=${()=>r.removeChimney()}>${o("delete")}</button>`):g}
    </section>`}function xk(t){let{host:e,roof:n}=t,r=e.doc.settings.roof.chimneys??[],o=new Map(Y(e.doc).map(s=>[s.key,s])),i=s=>{n.chimneyId=s,n.sectionId=null};return m`<section>
    <h3>🧱 ${e.t("chimneys")}</h3>
    ${o.size>0?g:R(e.t("solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("chimney")} ${a+1} · ${e.t(`chimney_${an(s).shape}`)} · ${l?Ft(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${X(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>n.addChimney()}>+ ${e.t("chimney")}</button>`)}
  </section>`}function $k(t,e,n){let r=t.t,o=e.shape,[i,s]=e.ends??[o,o],a=["gable","hip","halfhip"].map(u=>[u,r(`roof_shape_${u}`)]),l=u=>n({ends:u[0]===o&&u[1]===o?null:u}),c=i==="halfhip"||s==="halfhip";return m`<div class="nf-form">
    ${O(t,r("roof_end_start"),i,a,u=>l([u,s]))}
    ${O(t,r("roof_end_end"),s,a,u=>l([i,u]))}
    ${c?m`<label class="nf-field nf-wide" title=${r("roof_halfhip_hint")}
          >${r("roof_halfhip")} · ${Math.round((e.halfhip??.55)*100)} %
          <input type="range" min="20" max="90" step="5" .value=${String(Math.round((e.halfhip??.55)*100))} ?disabled=${!t.admin} @change=${u=>n({halfhip:Number(u.target.value)/100})} />
        </label>`:g}
  </div>`}function kg(t){let{host:e,roof:n}=t,r=e.doc.settings.roof,o=r.type==="custom";if(n.window)return wk(t,n.window);if(n.chimney)return kk(t,n.chimney);if(o&&n.section)return yk(t,n.section);let i=o?r.sections??[]:[],s=e.t,a=o?0:Hr(e.doc).length,l=(c,u)=>`${u+1} \xB7 ${c.dormer?s("roof_dormer"):s(`roof_shape_${c.shape}`)} \xB7 ${q(e.hass,Math.abs(c.x1-c.x0),1)} \xD7 ${q(e.hass,Math.abs(c.z1-c.z0),1)} m \xB7 ${s("roof_ridge_height")} ${q(e.hass,Qt(c),1)} m`;return m`<section>
      ${Xn(t)}
      <h3>${s("roof_sections")}</h3>
      ${R(s("roof_sections_hint"))}
      ${o?m`<div class="nf-room-list">${i.map((c,u)=>m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>n.sectionId=c.id}><span>${l(c,u)}</span></button></div>`)}</div>
          ${X(m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.useSections(!0)}>${s("roof_sections_regen")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(c=>c.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:m`${a>1?R(s("roof_parts_hint",{n:a})):g}${X(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>n.useSections()}>${s("roof_sections_start")}</button>`)}`}
    </section>
    ${vk(t)} ${xk(t)}`}var Ul=40,xg=60;function jl(t){let e=new Set((t.solar??[]).map(n=>n.string).filter(Boolean));t.strings=(t.strings??[]).filter(n=>e.has(n.id))}function $g(t,e,n,r){let o=t.solar?.find(i=>i.id===e);if(o){if(n==="new"){let i=t.strings??[],s={id:r.id,name:r.name(i.length+1),entity:o.entity??null,inverter:null};t.strings=[...i,s],o.string=s.id}else o.string=n;jl(t)}}function Sg(t,e){let n=new Set(t??[]);return n.delete(e)||n.add(e),n.size>0?[...n].sort():null}function Mg(t){let e=t.split(/[,;\s]+/).map(r=>Number.parseInt(r,10)).filter(r=>Number.isFinite(r)&&r>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min(xg,e[0])),layout:null,skip:null}:{layout:e.slice(0,Ul).map(r=>Math.min(xg,r)),rows:Math.min(Ul,e.length),cols:Math.max(1,...e),skip:null}}function Rg(t,e){let n=Math.max(1,Math.min(Ul,Math.round(e))),r=t.layout;return r?.length?{rows:n,layout:Array.from({length:n},(o,i)=>r[i]??r[r.length-1])}:{rows:n}}var Eg=t=>t.layout?.length?t.layout.join(", "):String(t.cols),Sk=["portrait","look","name","string","entity","module_w","module_h","wp"];function Mk(t){let e={};for(let n of Sk)e[n]=t[n];return e}function Ag(t,e,n){let r=Mk(e);if(n===Ce)return{...jr(t,e.id),...r,rows:e.rows,cols:e.cols};let o=Y(t).find(s=>s.key===n);if(o)return bi(o,{...e,...r});let i=Ye(t).find(s=>s.key===n);return i?bi(i,{...e,...r,rows:1}):null}var Fg=400;function Zl(t,e){let n=t?Je(t,e).length:0;return{modules:n,kwp:n*(e.wp??Fg)/1e3}}function Tg(t){let{host:e,roof:n}=t,r=e.t,o=e.doc.settings.roof.solar??[],i=e.doc.settings.roof.strings??[],s=Y(e.doc),a=new Map(o.map(u=>[u.id,Ee(e.doc,u,s)])),l=(u,d)=>{let p=a.get(u.id),h=Zl(p,u),f=r("solar_summary",{n:h.modules,kwp:q(e.hass,h.kwp,1)});return m`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>n.selectField(u.id)}>
        <span>${u.name||`${r("solar_field")} ${d+1}`} · ${p?Ft(e,p):r("solar_face_gone")} · ${f}</span>
      </button>
    </div>`},c=u=>{let d=o.filter(_=>_.string===u.id),p=d.map(_=>Zl(a.get(_.id),_)),h=p.reduce((_,b)=>_+b.modules,0),f=p.reduce((_,b)=>_+b.kwp,0);return m`<p class="nf-sub">🔗 <b>${u.name}</b> · ${r("solar_string_sum",{fields:d.length,n:h,kwp:q(e.hass,f,1)})}</p>`};return m`<section>
    ${Xn(t)}
    <h3>☀ ${r("solar_fields")}</h3>
    ${R(r(s.length>0?"solar_hint":"solar_no_roof"))}
    ${o.length>0?m`<div class="nf-room-list">${o.map(l)}</div>`:g}
    ${X(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>n.addField()}>+ ${r("solar_add")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>n.addGroundField()}>+ ${r("solar_add_ground")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin||!t.floorId} @click=${()=>n.addWallField()}>+ ${r("solar_add_wall")}</button>`)}
    ${i.length>0?m`<h4 class="nf-lib-head">${r("solar_strings")}</h4>${i.map(c)}`:g}
  </section>`}function Rk(t,e){let{host:n,roof:r}=t,o=n.t,i=C(n.hass,p=>Hn(n.hass,p)),s=n.doc.settings.roof.strings??[],a=s.find(p=>p.id===e.string),l=[["",o("solar_string_none")],...s.map(p=>[p.id,p.name]),["new",`+ ${o("solar_string_new")}`]],c=O(n,o("solar_string"),e.string??"",l,p=>r.setString(p===""?null:p),{wide:!0});if(!a)return m`${c}${D(n,o("solar_entity"),e.entity??null,void 0,i,p=>r.patchField({entity:p==="none"?null:p}))}`;let u=n.hass?je(n.hass,n.doc.floors):null,d=n.doc.floors.flatMap(p=>p.furniture.filter(h=>h.type==="inverter").map(h=>({item:h,floor:p}))).map(({item:p,floor:h},f)=>{let _=u?.get(p.id)?.entity,b=p.name?.trim()||(_?G(n.hass,_):"");return[p.id,`${b||`${o("furn_inverter")} ${f+1}`} \xB7 ${h.name}`]});return m`${c}
    ${j(n,o("solar_string_name"),a.name,p=>r.patchString({name:p||a.name}),{wide:!0})}
    ${D(n,o("solar_string_entity"),a.entity??null,void 0,i,p=>r.patchString({entity:p==="none"?null:p}))}
    ${O(n,o("solar_string_inverter"),a.inverter??"",[["",o(d.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...d],p=>r.patchString({inverter:p||null}),{wide:!0})}`}function zg(t,e){let{host:n,roof:r}=t,o=n.t,i=k=>r.patchField(k),s=Y(n.doc),a=Ee(n.doc,e,s),l=e.face===Ce,c=Vr(e),u=Zl(a,e),d=c.reduce((k,S)=>k+S,0)-(e.skip?.length??0),p=(n.doc.settings.roof.solar??[]).findIndex(k=>k.id===e.id)+1,h=[...a?[]:[["",o("solar_face_gone")]],...s.map(k=>[k.key,Ft(n,k)]),[Ce,o("solar_ground")],...Ye(n.doc).map(k=>[k.key,Ft(n,k)])],f=k=>{let S=Ag(n.doc,e,k);S&&i(S)},_=(k,S,$=ae)=>E=>Math.max(k,Math.min(S,$(E))),b=k=>i(Zr(n.doc,e,k)),w=k=>i({rotation:(Math.round(k)%360+360)%360||null}),v=a?.wall?"solar_flip_wall":"solar_flip",y=(k,S,$)=>F(n,o(S),e[k]??$,E=>i({[k]:_(.3,3)(E)}),.01,.3),x=!!e.layout?.length&&new Set(e.layout).size>1;return m`<button class="nf-btn nf-back" @click=${()=>r.solarId=null}>‹ ${o("solar_fields")}</button>
    <section>
      ${Xn(t)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${o("solar_field")} ${p}`}</h3>
        ${Jn(n,!!e.locked,()=>i({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${j(n,o("solar_name"),e.name??"",k=>i({name:k||null}),{wide:!0,placeholder:o("solar_name_hint")})}
        ${O(n,o("solar_face"),a?e.face:"",h,f,{wide:!0})}
        ${F(n,o("solar_rows"),c.length,k=>i(Rg(e,k)),1,1)}
        <label class="nf-field" title=${o("solar_cols_hint")}
          >${o("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!n.admin}
            .value=${Eg(e)}
            @change=${k=>{let S=Mg(k.target.value);S&&i(S)}}
          />
        </label>
      </div>
      ${R(`${a&&!a.unbounded?`${o("solar_face_size",{w:q(n.hass,a.lu,1),h:q(n.hass,a.ls,1)})} \xB7 `:""}${o("solar_cols_hint")}`)}
      ${x?Qn(n,["left","center","right"].map(k=>[k,o(`solar_align_${k}`)]),e.align??"left",k=>i({align:k})):g}
      ${Qn(n,[[!0,o("solar_portrait")],[!1,o("solar_landscape")]],e.portrait!==!1,k=>i({portrait:k}))}
      ${Qn(n,[["black",o("solar_look_black")],["blue",o("solar_look_blue")]],e.look==="blue"?"blue":"black",k=>i({look:k}))}
      <div class="nf-form">
        ${y("module_w","solar_module_w",1.13)} ${y("module_h","solar_module_h",1.72)}
        ${F(n,o("solar_wp"),e.wp??Fg,k=>i({wp:_(50,1500,Math.round)(k)}),5,50)}
      </div>
      ${X(m`<button class="nf-btn" aria-pressed=${r.picking} ?disabled=${!n.admin} @click=${()=>r.picking=!r.picking}>${r.picking?"\u2713 ":""}${o("solar_pick")}</button>`,e.skip?.length?m`<button class="nf-btn" ?disabled=${!n.admin} @click=${()=>i({skip:null})}>${o("solar_pick_all")}</button>`:g)}
      ${r.picking?R(o("solar_pick_hint")):g}
      <div class="nf-form">
        ${l?m`${F(n,o("solar_base"),e.base??0,k=>i({base:k>.001?Math.min(60,ae(k)):null}),.05,0)}
            ${F(n,o("solar_rotation"),e.rotation??0,b,5)}
            ${X(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)-15)}>↺ 15°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>b((e.rotation??0)+15)}>↻ 15°</button>`)}`:m`${F(n,o("solar_u"),e.u,k=>i({u:ae(k)}),.05)} ${F(n,o(a?.wall?"solar_v_wall":"solar_v"),e.v,k=>i({v:ae(k)}),.05)}`}
        ${a?.flat&&!l?F(n,o("solar_rotation"),e.rotation??0,w,5):g}
        ${a?.wall?F(n,o("solar_tilt_wall"),e.tilt??0,k=>i({tilt:_(0,90,Math.round)(k)}),5,0):g}
        ${a?.flat?F(n,o("solar_tilt"),e.tilt??15,k=>i({tilt:_(0,45,Math.round)(k)}),1,0):g}
        ${a?.flat&&!a.unbounded?L(n,o("solar_rack_ew"),e.rack==="ew",k=>i({rack:k?"ew":null}),{title:o("solar_rack_ew_hint")}):g}
        ${a&&!a.flat&&!a.wall?F(n,o("solar_rack_tilt"),e.tilt??0,k=>i({tilt:_(0,45,Math.round)(k)||null}),1,0):g}
        ${a?.wall||a?.flat?L(n,o(v),!!e.flip,k=>i({flip:k})):g}
      </div>
      ${a?.flat&&!l?X(m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>w((e.rotation??0)-90)}>↺ 90°</button>`,m`<button class="nf-chip" ?disabled=${!n.admin} @click=${()=>w((e.rotation??0)+90)}>↻ 90°</button>`):g}
      <p class="nf-sub">
        ${o("solar_summary",{n:u.modules,kwp:q(n.hass,u.kwp,1)})}${u.modules<d?m` · <b>${o("solar_partial",{n:u.modules,total:d})}</b>`:g}
      </p>
      <h4 class="nf-lib-head">🔗 ${o("solar_string")}</h4>
      <div class="nf-form">${Rk(t,e)}</div>
      ${R(o("solar_string_hint"))} ${R(o("solar_form_hint"))}
      ${n.admin?X(m`<button class="nf-btn" ?disabled=${!a} @click=${()=>a&&i({...Dn(a,e.id),portrait:e.portrait})}>${o("solar_fit")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeField()}>${o("delete")}</button>`):g}
    </section>`}var Pg=t=>Math.round(t*1e3)/1e3,us=class{ctx;sectionSel=null;windowSel=null;chimneySel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get chimneyId(){return this.chimneySel}set chimneyId(e){this.chimneySel=e,e&&(this.windowSel=null),this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get chimney(){return this.chimneySel?this.settings.chimneys?.find(e=>e.id===this.chimneySel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let n=(this.settings.sections??[]).length>0;e&&n&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(r=>{r.settings.roof.type="custom",(e||!n)&&(r.settings.roof.sections=Hr(r,()=>I("roof")))}),this.sectionId=null)}addSection(e,n){if(!this.admin)return;let r=mf(this.doc,e,n);this.ctx.host.change(o=>{o.settings.roof.type="custom",o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:n,wall_interior:r}=this.doc.settings,o=da(e.rooms,e.walls??[],n,r);if(!o)return;let i=o.map(([s,a])=>[Pg(s),Pg(a)]);this.patchSection({shape:"flat",points:i,...Ct(i)})}addDormer(e){let n=this.section;if(!n||!this.admin)return;let r=ha(n,e,I("roof"));this.ctx.host.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}patchSection(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeCorner(e){let n=this.sectionSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===n);o&&yf(o,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.sections=(n.settings.roof.sections??[]).filter(r=>r.id!==e)),this.sectionId=null)}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let n=gf(e);this.ctx.host.change(r=>r.settings.roof.sections=[...r.settings.roof.sections??[],n]),this.sectionId=n.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,n=Xr(Y(this.doc).filter(o=>!o.flat),e)??Y(this.doc)[0];if(!n)return;let r=qr(n,I("rwin"));this.ctx.host.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],r]),this.windowSel=r.id,this.sectionId=null}patchWindow(e){let n=this.windowSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.windows?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=Y(r).find(s=>s.key===o.face);i&&Object.assign(o,ft(i,sn(o)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.windows=(n.settings.roof.windows??[]).filter(r=>r.id!==e)),this.windowId=null)}addChimney(){if(!this.admin)return;let e=Y(this.doc),n=e.find(o=>!o.flat)??e[0];if(!n)return;let r=Yr(n,I("chim"));this.ctx.host.change(o=>o.settings.roof.chimneys=[...o.settings.roof.chimneys??[],r]),this.chimneySel=r.id,this.windowSel=null,this.sectionId=null}patchChimney(e){let n=this.chimneySel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.chimneys?.find(s=>s.id===n);if(!o)return;Object.assign(o,e);let i=Y(r).find(s=>s.key===o.face);i&&Object.assign(o,ft(i,Rt(o,i)))})}removeChimney(){let e=this.chimneySel;!e||!this.admin||(this.ctx.host.change(n=>n.settings.roof.chimneys=(n.settings.roof.chimneys??[]).filter(r=>r.id!==e)),this.chimneyId=null)}addField(){if(!this.admin)return;let e=Y(this.doc),n=new Set((this.settings.solar??[]).map(i=>i.face)),r=this.doc.settings.north??0,o=Xr(e.filter(i=>!n.has(i.key)),r)??Xr(e,r);o&&(this.appendField(Dn(o,I("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,n=this.admin&&e?$a(this.doc,I("pv"),e):null;n&&this.appendField(n)}addGroundField(){this.admin&&this.appendField(jr(this.doc,I("pv")))}appendField(e){this.ctx.host.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let n=this.settings.solar?.find(r=>r.id===e);n?.face.startsWith("wall:")&&this.ctx.setFloorId(n.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((n,r)=>{Object.assign(n,e);let o=Ee(r,n);o&&Object.assign(n,ft(o,n))})}toggleCell(e){this.editField(n=>n.skip=Sg(n.skip,e))}editField(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.solar?.find(i=>i.id===n);o&&e(o,r)})}setString(e){let n=this.fieldSel;!n||!this.admin||this.ctx.host.change(r=>$g(r.settings.roof,n,e,{id:I("str"),name:o=>this.ctx.host.t("solar_string_n",{n:o})}))}patchString(e){let n=this.field?.string;!n||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.strings?.find(i=>i.id===n);o&&Object.assign(o,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(n=>{n.settings.roof.solar=(n.settings.roof.solar??[]).filter(r=>r.id!==e),jl(n.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,n)=>n.elevation-e.elevation)}};var Dg=(t,e)=>t.floors.flatMap(n=>n.furniture).find(n=>n.type===e),Ek=t=>!t||t==="none";async function Ig(t){let e;try{e=await t.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let n=Qh(t.hass,e),r=0,o=(i,s,a)=>{if(!a)return;let l=Dg(t.doc(),i);!l&&t.canAdd()&&(t.addDevice(i),l=Dg(t.doc(),i)),!(!l||!Ek(l[s]))&&(t.setField(l.id,s,a),r++)};return o("meter","power",n.grid),o("inverter","power",n.solar),o("home_battery","power",n.battery),o("home_battery","soc",n.battery_soc),{kind:"done",filled:r}}var Ak=/garage|carport/,Fk=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,Tk=/flur|diele|eingang|hall|entr|lobby/,Og=.25,er=t=>Math.round(t*1e3)/1e3;function zk(t,e,n){let r=e.rooms.filter(u=>u.points.length>=3),o=u=>r.find(d=>u.test(n.roomLabel(d).toLowerCase())),i=r.find(u=>e.furniture.some(d=>d.type==="parking"&&W([d.x,d.z],u.points))),s=o(Ak)??i,a=o(Fk),l=t==="wallbox"?s:t==="meter"?a??o(Tk)??s:a??s,c=[...r].sort((u,d)=>Math.abs(_e(d.points))-Math.abs(_e(u.points)))[0];return l??n.selected??c}function Pk(t,e){let[n,r]=ve(t.points),o=t.points.some((s,a)=>!e.has(a)),i=null;return t.points.forEach((s,a)=>{if(o&&e.has(a))return;let l=t.points[(a+1)%t.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(i&&c<=i.length)return;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],d=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(n-u[0])*d[0]+(r-u[1])*d[1]<0&&(d=[0-d[0],0-d[1]]),i={mid:u,inward:d,length:c}}),i}function Lg(t,e,n,r){let[o,i,s]=dt(t),a={id:I("furniture"),type:t,rotation:0,w:o,d:i,h:s,variant:null};if(t==="grid_point"){let h=np(e),[f,_]=h?[h.x,h.z]:r.fallback;return{...a,x:er(f),z:er(_)}}let l=zk(t,n,r),[c,u]=l?ve(l.points):r.fallback;if(l){let h=new Set(n.openings.filter(_=>_.room_id===l.id).map(_=>_.edge)),f=Pk(l,h);f&&([c,u]=[f.mid[0]+f.inward[0]*(i/2+Og),f.mid[1]+f.inward[1]*(i/2+Og)])}let d={...a,x:er(c),z:er(u)},p=l?Ar({...n,furniture:[...n.furniture,d]},d,e.settings.wall_interior):null;return p?{...d,x:er(p.x),z:er(p.z),rotation:p.rotation}:d}var ds=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let n=this.undoStack.pop();return n===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(n))}redo(e){let n=this.redoStack.pop();return n===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(n))}};var ql=t=>Math.round(t*1e3)/1e3,tr="unmovable",hs="no change";function Hg(t,e,n,r){let o=i=>[ql(i[0]+n),ql(i[1]+r)];switch(e.kind){case"device":return t.placements.some(i=>i.entity_id===e.id)?{apply(i){let s=i.placements.find(a=>a.entity_id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}}:tr;case"furniture":return{apply(i){let s=i.furniture.find(a=>a.id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}};case"wall":return{apply(i){let s=(i.walls??[]).find(a=>a.id===e.id);s&&([s.a,s.b]=[o(s.a),o(s.b)])}};case"outdoor":return{apply(i){let s=i.outdoor.find(a=>a.id===e.id);s&&(s.points=s.points.map(o))}};case"opening":{let i=t.openings.find(_=>_.id===e.id),s=i?He(i,t.rooms,t.walls??[]):null;if(!i||!s)return tr;let a=s.room.points[s.edge],l=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,u=(n*(l[0]-a[0])+r*(l[1]-a[1]))/c;if(Math.abs(u)<1e-9)return hs;let d=Wt(t.openings,i),p=!i.wall&&d.length>1?Ln(s.room,d):null;if(p){let _=Math.max(0,Math.min(Jr(s.room)-p.width,p.from+u));return Math.abs(_-p.from)<1e-9?hs:{apply(b){let w=b.openings.find(y=>y.id===e.id),v=w?Qr(b.openings,s.room,w,_,p.width):null;v&&(b.openings=v)}}}let h=Math.min(i.width,c)/2,f=ql(Math.min(c-h,Math.max(h,i.offset+u)));return{apply(_){let b=_.openings.find(w=>w.id===e.id);b&&(b.offset=f)}}}case"room":{let i=t.rooms.find(a=>a.id===e.id);if(!i)return tr;let s=new Set(t.placements.filter(a=>W([a.x,a.z],i.points)).map(a=>a.entity_id));return{apply(a){let l=a.rooms.find(c=>c.id===e.id);if(l){if(e.corner!==null&&e.corner<l.points.length){l.points[e.corner]=o(l.points[e.corner]);return}l.points=l.points.map(o);for(let c of a.placements)s.has(c.entity_id)&&([c.x,c.z]=o([c.x,c.z]))}}}}}}var ps=t=>Math.round(t*1e3)/1e3,Yl=t=>(t+90)%360;function Cg(t,e,n){let r=o=>[o.x,o.z]=e([o.x,o.z]);for(let o of t.rooms)o.points=o.points.map(e);for(let o of t.furniture)r(o),n&&(o.rotation=Yl(o.rotation));for(let o of t.placements)r(o),n&&(o.rotation=Yl(o.rotation??0));for(let o of t.outdoor)o.points=o.points.map(e);for(let o of t.walls??[])[o.a,o.b]=[e(o.a),e(o.b)];t.background&&(r(t.background),n&&(t.background.rotation=Yl(t.background.rotation??0)))}function Dk(t,e){for(let r of t.settings.roof.sections??[]){let o=[e([r.x0,r.z0]),e([r.x1,r.z0]),e([r.x1,r.z1]),e([r.x0,r.z1])],[i,s]=[o.map(a=>a[0]),o.map(a=>a[1])];[r.x0,r.x1,r.z0,r.z1]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],r.points&&(r.points=r.points.map(e))}let n=t.energy.meter;n&&([n.x,n.z]=e([n.x,n.z]))}function Wg(t,e,n,r){if(e.allFloors){for(let o of t.floors)Cg(o,n,r);Dk(t,n)}else{let o=t.floors.find(i=>i.id===e.floorId);o&&Cg(o,n,r)}}function Ng(t,e,n,r){Wg(t,e,([o,i])=>[ps(o+n),ps(i+r)],!1)}function Ik(t,e){let r=(e.allFloors?t.floors:t.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(a=>a.points));if(r.length===0)return null;let[o,i]=[r.map(s=>s[0]),r.map(s=>s[1])];return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...i)+Math.max(...i))/2]}function Vg(t,e){let n=Ik(t,e);if(!n)return!1;let[r,o]=n;return Wg(t,e,([i,s])=>[ps(r-(s-o)),ps(o+(i-r))],!0),!0}var fs=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,n){this.ids[e]=n,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,n,r){let o=this.ids.room,i={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};i[e]=n,e==="room"?i.room=n:e!=="outdoor"&&e!=="wall"&&(i.room=o),e==="device"&&n&&(i.room=r.roomOfDevice(n)??i.room),e==="opening"&&n&&(i.room=r.roomOfOpening(n)??i.room),(e!=="room"||n!==o)&&(this.cornerSel=null),this.edgeSel=null,this.ids=i,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let n=this.ids[e];if(n)return{kind:e,id:n}}return null}};var ms=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;query="";source="area";unfolded=new Set;copyChoice=null;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get floorCopy(){return this.copyChoice}set floorCopy(e){this.copyChoice=e,this.onChange()}imageChoiceNow={furniture:!0,dimensions:!0,names:!0};get imageChoice(){return this.imageChoiceNow}set imageChoice(e){this.imageChoiceNow=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}get deviceQuery(){return this.query}set deviceQuery(e){this.query=e,this.onChange()}get deviceSource(){return this.source}set deviceSource(e){this.source=e,this.query="",this.onChange()}isUnfolded(e){return this.unfolded.has(e)}toggleUnfolded(e){let n=new Set(this.unfolded);n.delete(e)||n.add(e),this.unfolded=n,this.onChange()}};var Ok=/garage|carport|keller|cellar|basement|technik|heizung|heizraum|boiler|utility|werkstatt|schuppen|shed|dachboden|attic/i,xo=t=>t.living??!Ok.test(t.name),Lk=.1,Bg=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function Xl(t,e,n,r,o=Lk){if(n.points.length<3)return{roomId:n.id,floor:0,living:0,low:0};let i=Bg(n.points),s=r.filter(f=>{let _=Bg(f.footprint);return _.x1>=i.x0&&_.x0<=i.x1&&_.z1>=i.z0&&_.z0<=i.z1}),a=e.elevation+(n.ceiling!=null&&n.ceiling>0?n.ceiling:e.height),l=(t.settings.roof?.sections??[]).some(f=>!f.open),c=Ns(n),u=0,d=0,p=0;for(let f=i.x0+o/2;f<i.x1;f+=o)for(let _=i.z0+o/2;_<i.z1;_+=o){if(!W([f,_],n.points)||s.some(v=>W([f,_],v.footprint)))continue;let b=l?Lr(t,f,_):null,w=Math.min(a,b??1/0)-e.elevation-c;w>=2?u++:w>=1?d++:p++}let h=o*o;return{roomId:n.id,floor:(u+d+p)*h,living:xo(n)?(u+d/2)*h:0,low:(d+p)*h}}var Kg=new WeakMap;function bn(t,e){if(e.layer)return[];let n=Kg.get(e);if(n&&n.roof===t.settings.roof)return n.areas;let r=Hk(t,e);return Kg.set(e,{roof:t.settings.roof,areas:r}),r}function Hk(t,e){let n=we(e.rooms,xe(t.settings),e.walls??[]).walls;return e.rooms.map(r=>Xl(t,e,r,n))}var nr=t=>t.reduce((e,n)=>({floor:e.floor+n.floor,living:e.living+n.living,low:e.low+n.low}),{floor:0,living:0,low:0});function Gg(t,e,n){let r=t.floors.length,o=e?.name??(r===0?n.first:n.next(r));return{...Ke(I("floor"),o,Eu(t.floors,e?.level)),ha_floor:e?.floor_id??null}}function Jl(t,e){let n=t.findIndex(o=>o.elevation>e.elevation),r=n<0?t.length:n;return[...t.slice(0,r),e,...t.slice(r)]}function Ug(t,e,n){let r=t.findIndex(s=>s.id===e),o=r+n;if(r<0||o<0||o>=t.length)return[...t];let i=[...t];return[i[r],i[o]]=[i[o],i[r]],i}function jg(t,e){let n=new Set(t.floors.map(r=>r.ha_floor));return Object.values(e??{}).filter(r=>!n.has(r.floor_id)).sort((r,o)=>(r.level??99)-(o.level??99)||r.name.localeCompare(o.name))}function rr(t,e,n){if(!e.ha_floor)return[];let r=new Set(t.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(n??{}).filter(o=>o.floor_id===e.ha_floor&&!r.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}function Zg(t,e,n){return Object.values(n??{}).filter(r=>r.floor_id===e.ha_floor||!t.floors.some(o=>o.ha_floor===r.floor_id))}function qg(t,e,n,r,o=I){let i=structuredClone(e),s=t.floors.reduce((u,d)=>Math.max(u,d.elevation+d.height),e.elevation+e.height),a=new Map,l=new Map;i.id=o("floor"),i.name=n,i.elevation=Math.round(s*1e3)/1e3,i.ha_floor=null,i.start_view=null,i.rooms=i.rooms.map(u=>{let d=o("room");return a.set(u.id,d),{...u,id:d,area_id:null}}),i.walls=(i.walls??[]).map(u=>{let d=o("wall");return l.set(u.id,d),{...u,id:d}}),i.openings=i.openings.filter(u=>a.has(u.room_id)).map(u=>({...u,id:o("opening"),room_id:a.get(u.room_id),wall:u.wall?l.get(u.wall)??null:u.wall}));let c=new Set(["meter","inverter","home_battery","wallbox","grid_point"]);return i.furniture=r.furniture?i.furniture.filter(u=>!c.has(u.type)).map(u=>Vk({...u,id:o("furniture")})):[],i.placements=r.devices?i.placements:[],i.outdoor=r.outdoor?i.outdoor.map(u=>({...u,id:o("outdoor")})):[],i}var Ck=["entity","power","fan_entity","room_sensor"],Wk=["door_left","door_right","soc","charge","export","status","temp_entity","temp_entity2","state_entity","state_entity2","color_entity","care_entity","cover_entity","type_entity","parent_meter","car","tap"],Nk=["gang_entities","pictures","types","meter_floors","show_when","extra_lights"];function Vk(t){let e={...t};for(let n of Ck)(n==="entity"||n==="power"||e[n]!=null)&&(e[n]="none");for(let n of Wk)e[n]!=null&&(e[n]=null);for(let n of Nk)delete e[n];return e}function Yg(t,e,n,r){let o=t.floors.find(l=>l.id===e),i=t.floors.find(l=>l.id===r);if(!o||!i||o===i)return!1;let s=o.furniture.findIndex(l=>l.id===n);if(s<0)return!1;let[a]=o.furniture.splice(s,1);return i.furniture.push(a),!0}function Bk(t,e,n,r){if(e.layer||!e.rooms.length)return g;let o=t.t,i=nr(bn(t.doc,e)).living,s=nr(t.doc.floors.flatMap(a=>bn(t.doc,a))).living;return m`<p class="nf-sub nf-wide" title=${o("living_area_hint")}>
      ${o(t.doc.floors.length>1?"living_area_floor_house":"living_area_floor",{floor:ze(t.hass,i),house:ze(t.hass,s)})}
    </p>
    <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("print_plan_hint")} @click=${()=>n.print()}>🖨️ ${o("print_plan")}</button></div>
    ${Kk(t,n,r)}`}function Kk(t,e,n){let r=t.t,o=n.imageChoice,i=s=>n.imageChoice={...o,...s};return m`${L(t,r("image_furniture"),o.furniture,s=>i({furniture:s}))}
    ${L(t,r("image_dimensions"),o.dimensions,s=>i({dimensions:s}))}
    ${L(t,r("image_names"),o.names,s=>i({names:s}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" title=${r("image_export_hint")} @click=${()=>e.exportImage(o,!1)}>🖼 ${r("image_export")}</button>
      ${t.doc.floors.length>1?m`<button class="nf-btn" @click=${()=>e.exportImage(o,!0)}>🖼 ${r("image_export_all")}</button>`:g}
    </div>`}function Gk(t,e,n,r){let o=jg(t.doc,t.hass?.floors),i=()=>o.length>0?e.floorMenu=!e.floorMenu:n.addFloor(null);return m`<div class="nf-floor-list">
      ${[...t.doc.floors].reverse().map(s=>m`<button class="nf-chip" aria-pressed=${s.id===r} @click=${()=>n.openFloor(s.id)}>${s.name}</button>`)}
      ${t.admin?m`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${i}>+ ${t.t("add_floor")}</button>`:g}
    </div>
    ${t.admin&&e.floorMenu?m`<div class="nf-floor-menu">
          ${R(t.t("floor_from_ha"))}
          ${o.map(s=>m`<button class="nf-btn" @click=${()=>n.addFloor(s)}>${s.name}${s.level!=null?m` <span class="nf-sub">· ${t.t("level",{n:s.level})}</span>`:g}</button>`)}
          <button class="nf-btn" @click=${()=>n.addFloor(null)}>${t.t("floor_empty")}</button>
        </div>`:g}`}function Uk(t,e,n,r){let o=(i,s,a)=>m`<input type="number" step="0.05" .value=${String(s)} aria-label=${i} @change=${l=>a(Number(l.target.value)||0)} />`;return m`<div class="nf-field nf-wide nf-shift" title=${t.t("floor_shift_hint")}>
    <span>${t.t("floor_shift")}</span>
    ${o("X",e.shiftX,i=>e.shiftX=i)} ${o("Z",e.shiftZ,i=>e.shiftZ=i)}
    <button class="nf-btn" ?disabled=${!e.shiftX&&!e.shiftZ} @click=${()=>n.shift()}>${t.t("floor_shift_apply")}</button>
    <button class="nf-btn" title=${t.t("floor_turn_hint")} @click=${()=>n.turn()}>${t.t("floor_turn")}</button>
    <button class="nf-btn" title=${t.t("floor_start_view_hint")} @click=${()=>n.rememberView()}>${t.t("floor_start_view")}</button>
    ${r.start_view?m`<button class="nf-btn" title=${t.t("floor_start_view_reset")} @click=${()=>t.change((i,s)=>s.start_view=null)}>↺</button>`:g}
    <label class="nf-check nf-wide" title=${t.t("floor_shift_all_hint")}
      ><input type="checkbox" .checked=${e.shiftAll} @change=${i=>e.shiftAll=i.target.checked} />
      ${t.t("floor_shift_all")}</label
    >
  </div>`}function jk(t,e,n,r){let o=t.t,i=s=>e.floorCopy={...r,...s};return m`<div class="nf-form nf-wide nf-copy-floor">
    ${R(o("floor_copy_hint"),"nf-wide")}
    ${L(t,o("floor_copy_furniture"),r.furniture,s=>i({furniture:s}))}
    ${L(t,o("floor_copy_devices"),r.devices,s=>i({devices:s}),{title:o("floor_copy_devices_hint")})}
    ${L(t,o("floor_copy_outdoor"),r.outdoor,s=>i({outdoor:s}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" @click=${()=>n.duplicateFloor(r)}>${o("floor_copy_make")}</button>
      <button class="nf-btn" @click=${()=>e.floorCopy=null}>${o("cancel")}</button>
    </div>
  </div>`}function Zk(t,e,n,r){let o=t.t,i=c=>t.change((u,d)=>Object.assign(d,c)),s=Zg(t.doc,r,t.hass?.floors),a=rr(t.doc,r,t.hass?.areas),l=[["",o("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return m`<div class="nf-form">
    ${j(t,o("floor_name"),r.name,c=>i({name:c}),{wide:!0})}
    ${F(t,o("elevation"),r.elevation,c=>i({elevation:c}))}
    ${t.admin?Uk(t,e,n,r):g}
    ${F(t,o("height"),r.height,c=>i({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(t.hass?.floors??{}).length>0?O(t,o("ha_floor"),r.ha_floor??"",l,c=>i({ha_floor:c||null}),{wide:!0}):g}
    ${L(t,o("floor_layer"),!!r.layer,c=>i({layer:c||void 0}),{title:o("floor_layer_hint")})}
    ${D(t,o("floor_power"),r.power_entity??null,void 0,C(t.hass,c=>c.startsWith("sensor.")&&t.hass?.states[c]?.attributes.device_class==="power"),c=>i({power_entity:c&&c!=="none"?c:null}))}
    ${r.power_entity?R(o("floor_power_hint"),"nf-wide"):g}
    ${r.layer?g:We(t,o("wall_paint_floor"),r.wall_paint_outside,t.doc.settings.wall_paint_outside??Yo,c=>i({wall_paint_outside:c}))}
    ${Bk(t,r,n,e)}
    ${t.admin&&a.length>0?m`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${o("area_rooms_hint")} @click=${()=>n.addAreaRooms(r)}>${o("area_rooms",{n:a.length})}</button></div>`:g}
    ${t.admin?m`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>n.moveFloor(1)}>${o("move_up")}</button>
            <button class="nf-btn" @click=${()=>n.moveFloor(-1)}>${o("move_down")}</button>
            <button class="nf-btn" @click=${()=>e.floorCopy=e.floorCopy?null:{furniture:!0,devices:!1,outdoor:!1}}>${o("floor_copy")}</button>
            <button class="nf-btn nf-danger" @click=${()=>n.deleteFloor()}>${o("delete_floor")}</button>
          </div>
          ${e.floorCopy?jk(t,e,n,e.floorCopy):g}
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("gaps_hint")} ?disabled=${r.rooms.length<2} @click=${()=>n.closeGaps()}>${o("gaps_close")}</button>
            <button class="nf-btn" title=${o("rooms_from_walls_hint")} ?disabled=${!r.walls?.length} @click=${()=>n.roomsFromWalls()}>${o("rooms_from_walls")}</button></div>
          ${e.notice?m`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:g}`:g}
  </div>`}function Xg(t,e,n,r,o){return m`<section>
    <h3>${t.t("floors")}</h3>
    ${Gk(t,e,n,o)} ${r?Zk(t,e,n,r):g}
  </section>`}var Jg=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function Qg(t,e){let n=pe(t.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((n.z1-n.z0)/1.2)),cols:Math.max(1,Math.round((n.x1-n.x0)/1.2)),entity:e[0]??null}}function gs(t,e){let[n,r,o]=it[e.type];return Pu(t,e.rows,e.cols).map(([i,s])=>({id:I("furniture"),type:e.type,x:i,z:s,rotation:0,w:n,d:r,h:o,variant:null,entity:e.entity??"none",power:null}))}var Ql=t=>Math.max(1,Math.min(12,Math.round(t)));var qk=globalThis.__nfAnnounced??new Set;globalThis.__nfAnnounced=qk;var e_=/^(media_player|assist_satellite)\./;function Yk(t,e){return e?Object.values(t.entities??{}).filter(n=>!n.hidden&&(n.area_id??(n.device_id?t.devices?.[n.device_id]?.area_id:null))===e).map(n=>n.entity_id):[]}function t_(t,e){let n=t.states[e];return!n||n.state==="unavailable"?!1:e.startsWith("notify.")?t.entities?.[e]?.platform==="alexa_devices"&&e.endsWith("_announce"):n.state==="off"||n.state==="unknown"?!1:n.attributes.device_class!=="tv"}function n_(t,e,n){if(n.announce_speaker==="none")return null;if(n.announce_speaker)return n.announce_speaker;if(e&&n.points.length>=3){let i=[...e.placements.filter(s=>e_.test(s.entity_id)).map(s=>({id:s.entity_id,x:s.x,z:s.z})),...e.furniture.filter(s=>s.entity&&e_.test(s.entity)).map(s=>({id:s.entity,x:s.x,z:s.z}))].find(s=>W([s.x,s.z],n.points)&&t_(t,s.id));if(i)return i.id}let r=Yk(t,n.area_id);for(let o of["assist_satellite.","notify.","media_player."]){let i=r.filter(s=>s.startsWith(o)&&t_(t,s)).sort()[0];if(i)return i}return null}function r_(t,e,n){return e.rooms.length===0?g:m`<section>
    <h3>${t.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(r=>m`<button class="nf-row" @click=${()=>n.select(r.id)}>
          <span>${r.name}</span><span class="nf-muted">${ze(t.hass,Me(r.points))}</span>
        </button>`)}
    </div>
  </section>`}function Xk(t,e,n,r){let o=e.spots,i=c=>e.spots={...o,...c},s=gs(n,o).length,a=C(t.hass,c=>/^(light|switch|input_boolean)\./.test(c)),l=Jg.map(c=>[c,t.t(`furn_${c}`)]);return m`<div class="nf-form nf-spot-form">
    ${O(t,t.t("spots_type"),o.type,l,c=>i({type:c}),{wide:!0})}
    ${F(t,t.t("spots_cols"),o.cols,c=>i({cols:Ql(c)}),1,1)}
    ${F(t,t.t("spots_rows"),o.rows,c=>i({rows:Ql(c)}),1,1)}
    ${D(t,t.t("furn_entity_light"),o.entity,void 0,a,c=>i({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>r.placeSpots()}>${t.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${t.t("cancel")}</button>
    </div>
    ${R(t.t("spots_hint"),"nf-wide")}
  </div>`}function Jk(t,e,n,r){return m`<details class="nf-points" ?open=${!n}>
    <summary>${t.t("points")} (${e.points.length})</summary>
    ${e.points.map((o,i)=>m`<div class="nf-point ${i===r.corner?"nf-point-sel":""}">
        <span class="nf-muted">${i+1}</span>
        ${F(t,t.t("x"),o[0],s=>r.setCorner(i,0,s))} ${F(t,t.t("z"),o[1],s=>r.setCorner(i,1,s))}
        ${t.admin?m`<button class="nf-btn" title=${t.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>r.removeCorner(i)}>×</button>`:g}
      </div>`)}
  </details>`}function Qk(t,e,n){let r=t.floor,o=r?Xl(t.doc,r,e,n):void 0;if(!o||o.floor<=0)return g;let i=t.t;return xo(e)?m`<p class="nf-sub nf-wide" title=${i("living_area_hint")}>
    ${o.low>.05?i("living_area_low",{living:ze(t.hass,o.living),floor:ze(t.hass,o.floor),low:ze(t.hass,o.low)}):i("living_area",{living:ze(t.hass,o.living)})}
  </p>`:m`<p class="nf-sub nf-wide">${i("living_area_none",{floor:ze(t.hass,o.floor)})}</p>`}function ex(t,e,n,r){let o=t.t,i=s=>r.patch({ceiling:Math.abs(s-n.height)<.005?null:Math.min(20,Math.max(1,Math.round(s*1e3)/1e3))});return m`${F(t,o("room_ceiling"),e.ceiling??n.height,i,.01,1)}
    ${e.ceiling!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({ceiling:null})}>${o("height_auto")}</button>`:g}
    ${R(o("room_ceiling_tip"),"nf-wide")}
    ${e.ceiling!=null&&e.ceiling>n.height+.005?m`<p class="nf-sub nf-wide">${o("room_ceiling_through",{ceiling:q(t.hass,e.ceiling,2),floor:q(t.hass,n.height,2)})}</p>`:g}`}function tx(t,e,n,r){let o=t.t;if(!t.hass)return m``;let i=n_(t.hass,n,{...e,announce_speaker:null}),s=C(t.hass,c=>/^(media_player|assist_satellite)\./.test(c)||c.startsWith("notify.")&&c.endsWith("_announce")),a=e.announce_quiet??null,l=(c,u)=>{if(!u)return r.patch({announce_quiet:null});r.patch({announce_quiet:{from:a?.from??"20:00",to:a?.to??"07:00",[c]:u}})};return m`${D(t,o("room_announce_speaker"),e.announce_speaker??null,i,s,c=>r.patch({announce_speaker:c}))}
    <div class="nf-field nf-wide nf-quiet-time">
      ${o("room_announce_quiet")}
      <span>
        <input type="time" .value=${a?.from??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 1`} @change=${c=>l("from",c.target.value)} />
        –
        <input type="time" .value=${a?.to??""} ?disabled=${!t.admin} aria-label=${`${o("room_announce_quiet")} 2`} @change=${c=>l("to",c.target.value)} />
        ${a?m`<button class="nf-btn nf-field-btn" ?disabled=${!t.admin} @click=${()=>r.patch({announce_quiet:null})}>×</button>`:g}
      </span>
    </div>
    ${R(o("room_announce_hint"),"nf-wide")}`}function ec(t,e,n,r){let o=t.t,i=Sn(n.points),s=pe(n.points),a=Object.values(t.hass?.areas??{}).sort((h,f)=>h.name.localeCompare(f.name)),l=[["",o("no_area")],...a.map(h=>[h.area_id,h.name])],c=t.floor?we(t.floor.rooms,xe(t.doc.settings),t.floor.walls??[]).walls:[],u=t.floor?Fd(n,c):null,d=Su.map(h=>[h,o(`mat_${h}`)]),p=h=>m`<button class="nf-btn" @click=${()=>r.applyPackage(h)}><b>${o(`pkg_${h}`)}</b><span>${o(`pkg_${h}_desc`)}</span></button>`;return m`<section>
    <div class="nf-h3row"><h3>${o("room")}</h3>${r.lockButton}</div>
    <div class="nf-form">
      ${j(t,o("room_name"),n.name,h=>r.patch({name:h}),{wide:!0})}
      ${O(t,o("area"),n.area_id??"",l,h=>r.setArea(h),{wide:!0})}
      ${(n.sub_areas??[]).map(h=>m`<span class="nf-chip nf-wide">${t.hass?.areas?.[h]?.name??h} <button class="nf-btn nf-field-btn" ?disabled=${!t.admin} title=${o("delete")} @click=${()=>r.patch({sub_areas:(n.sub_areas??[]).filter(f=>f!==h).length?(n.sub_areas??[]).filter(f=>f!==h):null})}>✕</button></span>`)}
      ${n.area_id?O(t,o("sub_area_add"),"",l.filter(([h])=>h!==n.area_id&&!(n.sub_areas??[]).includes(h)),h=>h&&r.patch({sub_areas:[...n.sub_areas??[],h]}),{wide:!0,title:o("sub_area_hint")}):g}
      ${O(t,o("material"),n.floor_material,d,h=>r.patch({floor_material:h}),{wide:!0})}
      ${We(t,o("wall_paint_room"),n.wall_paint,t.doc.settings.wall_paint_inside??Xo,h=>r.patch({wall_paint:h}))}
      ${t.floor?ex(t,n,t.floor,r):g}
      ${F(t,o("room_floor_offset"),n.floor_offset??0,h=>r.patch({floor_offset:Math.abs(h)<.005?null:Math.max(-2,Math.min(2,Math.round(h*1e3)/1e3))}),.01)}
      ${R(o("room_floor_offset_hint"),"nf-wide")}
      ${D(t,o("room_clean"),n.clean_entity??null,void 0,C(t.hass,h=>/^(script|button|input_button)\./.test(h)),h=>r.patch({clean_entity:h&&h!=="none"?h:null}))}
      ${n.clean_entity?g:R(o("room_clean_hint"),"nf-wide")}
      ${D(t,o("floor_heating"),n.floor_heating??null,void 0,C(t.hass,h=>/^(climate|switch|valve|binary_sensor|input_boolean)\./.test(h)),h=>r.patch({floor_heating:h&&h!=="none"?h:null}))}
      ${n.floor_heating?R(o("floor_heating_hint"),"nf-wide"):g}
      ${tx(t,n,t.floor??null,r)}
      ${u?m`<p class="nf-sub nf-wide" title=${o("room_inner_hint")}>${o("room_inner",{w:ge(t.hass,u[0]),d:ge(t.hass,u[1])})}</p>`:g}
      ${Qk(t,n,c)}
      ${L(t,o("room_living"),xo(n),h=>r.patch({living:h===xo({name:n.name,living:null})?null:h}),{title:o("living_area_hint")})}
      ${i?m`${F(t,o("x"),s.x0,h=>r.setRect("x",h))} ${F(t,o("z"),s.z0,h=>r.setRect("z",h))}
          ${F(t,o("width"),s.x1-s.x0,h=>r.setRect("w",h),.01,.05)}
          ${F(t,o("depth"),s.z1-s.z0,h=>r.setRect("d",h),.01,.05)}`:g}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${o("room_start_view_hint")} ?disabled=${!t.admin} @click=${()=>r.rememberView()}>${o("room_start_view")}</button>
      ${n.start_view?m`<button class="nf-btn" title=${o("room_start_view_reset")} ?disabled=${!t.admin} @click=${()=>r.patch({start_view:null})}>↺</button>`:g}
    </div>
    ${r.wallHeights} ${r.climate} ${Jk(t,n,i,r)}
    ${t.admin?m`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${o("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>r.openSpots()}>${o("spots_place")}</button>
          <button class="nf-btn" @click=${()=>r.duplicate()}>${o("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>r.remove()}>${o("delete")}</button>
        </div>`:g}
    ${e.spots?Xk(t,e,n,r):g}
    ${e.packages?m`<div class="nf-packages">${Gd.map(p)}${R(o("pkg_hint"))}</div>`:g}
  </section>`}var o_=de`
  :host {
    display: block;
    height: 100%;
  }
  .nf-editor {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    height: 100%;
    min-height: 0;
  }
  .nf-editor:has(> .nf-side-strip) {
    grid-template-columns: minmax(0, 1fr) 52px;
  }
  .nf-side-strip {
    padding: 10px 6px;
    gap: 8px;
    align-items: center;
  }
  .nf-strip-btn {
    width: 40px;
    height: 40px;
    border: 1px solid var(--nf-line);
    border-radius: 12px;
    background: var(--nf-chrome);
    color: var(--nf-text);
    font-size: 18px;
    cursor: pointer;
  }
  .nf-strip-hot {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
  }
  .nf-side-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(340px, 60%);
    z-index: 6;
    box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
  }
  .nf-pin-row {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }
  .nf-3d-size {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--nf-muted);
    font-size: 12px;
  }
  .nf-3d-size input {
    width: 58px;
    padding: 4px 6px;
    font: inherit;
    color: var(--nf-text);
    background: var(--nf-chrome-solid);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
  }
  .nf-3d-select {
    font: inherit;
    color: var(--nf-text);
    background: var(--nf-chrome-solid);
    border: 1px solid var(--nf-line);
    border-radius: 999px;
    padding: 4px 10px;
  }
  .nf-editor.nf-narrow {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(360px, 62vh) auto;
    height: auto;
  }
  .nf-main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto 1fr;
    min-height: 0;
    min-width: 0;
  }
  /* a row of tools wider than the plan scrolls inside its pill instead of pushing the plan over the side bar (#67) */
  .nf-toolbar .nf-seg {
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .nf-toolbar .nf-seg > button {
    flex: none;
  }
  .nf-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    padding: 10px 12px;
  }
  /* phones: the tools as one dropdown instead of a row of eleven buttons */
  .nf-tool-select {
    font: inherit;
    padding: 8px 10px;
    border-radius: 10px;
    border: 1px solid var(--nf-line);
    background: var(--nf-bg2);
    color: var(--nf-text);
  }
  .nf-warn {
    color: var(--nf-warm);
    font-size: 12.5px;
  }
  .nf-picture-group {
    display: grid;
    gap: 6px;
    margin: 6px 0 10px;
    padding: 8px;
    border: 1px solid var(--nf-line);
    border-radius: 10px;
  }
  .nf-picture-group > select {
    min-width: 0;
  }
  .nf-picture-row {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 6px;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--nf-line) 40%, transparent);
  }
  .nf-picture-row input[type="url"] {
    grid-column: 1 / -1;
    min-width: 0;
  }
  .nf-picture-row > .nf-sub,
  .nf-picture-row > .nf-picture-camera {
    grid-column: 1 / -1;
  }
  .nf-picture-row.nf-rule-hit {
    outline: 1px solid var(--nf-accent);
  }
  .nf-rule-now {
    grid-column: 1 / -1;
  }
  .nf-rule-hit {
    color: var(--nf-accent);
  }
  .nf-picture-reuse {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .nf-picture-reuse-btn {
    padding: 2px;
    border: 1px solid var(--nf-line);
    border-radius: 6px;
    background: var(--nf-chrome-solid);
    cursor: pointer;
  }
  .nf-picture-reuse-btn img {
    display: block;
    height: 28px;
    max-width: 60px;
    object-fit: contain;
  }
  .nf-picture-reuse-btn:hover {
    border-color: var(--nf-accent);
  }
  .nf-picture-thumb {
    max-height: 60px;
    max-width: 100%;
    border-radius: 6px;
    justify-self: start;
  }
  .nf-picture-pick {
    justify-self: start;
  }
  .nf-parking-row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin: 4px 0;
  }
  .nf-parking-row input,
  .nf-parking-row select {
    flex: 1;
    min-width: 0;
  }
  .nf-stage-pair {
    display: flex;
    min-height: 0;
    min-width: 0;
  }
  .nf-stage-pair > .nf-canvas-wrap {
    flex: 1 1 var(--nf-split, 55%);
    min-width: 0;
  }
  .nf-split > .nf-canvas-wrap {
    flex: 0 0 var(--nf-split, 55%);
  }
  .nf-split-handle {
    flex: 0 0 8px;
    cursor: col-resize;
    background: var(--nf-line);
    touch-action: none;
  }
  .nf-split-handle:hover {
    background: var(--nf-accent);
  }
  .nf-editor-3d {
    position: relative;
    flex: 1 1 0;
    min-width: 240px;
    min-height: 0;
    border-left: 1px solid var(--nf-line);
    container-type: size;
    container-name: nf;
  }
  .nf-editor-3d nf-view3d {
    display: block;
    height: 100%;
  }
  .nf-3d-walls {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 3;
  }
  .nf-3d-bar {
    position: absolute;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    max-width: calc(100% - 24px);
    padding: 6px 8px 6px 14px;
    border-radius: 999px;
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    font-size: 13px;
  }
  .nf-danger-chip {
    color: var(--nf-danger, #ff6b7a);
  }
  .nf-narrow .nf-stage-pair.nf-split {
    flex-direction: column;
  }
  .nf-narrow .nf-split > .nf-canvas-wrap {
    flex: 1 1 auto;
  }
  .nf-narrow .nf-editor-3d {
    flex: 0 0 42%;
    min-width: 0;
    border-left: none;
    border-top: 1px solid var(--nf-line);
  }
  .nf-canvas-wrap {
    position: relative;
    min-height: 0;
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 35%, var(--nf-bg2), var(--nf-bg) 75%);
  }
  svg.nf-plan {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    cursor: default;
  }
  svg.nf-tool-rect,
  svg.nf-tool-polygon {
    cursor: crosshair;
  }
  .nf-grid-minor {
    stroke: color-mix(in srgb, var(--nf-accent) 5%, transparent);
    stroke-width: 1;
  }
  .nf-grid-major {
    stroke: color-mix(in srgb, var(--nf-soft) 16%, transparent);
    stroke-width: 1;
  }
  .nf-origin {
    fill: color-mix(in srgb, var(--nf-soft) 50%, transparent);
  }
  .nf-ghost {
    fill: none;
    stroke: rgba(138, 155, 184, 0.35);
    stroke-dasharray: 4 4;
  }
  .nf-void {
    fill: rgba(138, 155, 184, 0.12);
    stroke: rgba(138, 155, 184, 0.55);
    stroke-dasharray: 2 3;
  }
  .nf-wall {
    fill: #1b2a47;
  }
  .nf-wall-ext {
    fill: #22345a;
  }
  .nf-room {
    fill: color-mix(in srgb, var(--nf-accent) 5%, transparent);
    stroke: color-mix(in srgb, var(--nf-accent) 75%, transparent);
    stroke-width: 1.5;
    stroke-linejoin: round;
    cursor: pointer;
  }
  .nf-room:hover {
    fill: color-mix(in srgb, var(--nf-accent) 9%, transparent);
  }
  .nf-room-sel {
    fill: color-mix(in srgb, var(--nf-accent) 14%, transparent);
    stroke: var(--nf-accent);
    stroke-width: 2.5;
  }
  .nf-room-name {
    fill: var(--nf-text);
    font: 600 13px var(--nf-title-font);
    text-anchor: middle;
  }
  .nf-room-area {
    fill: var(--nf-muted);
    font: 500 11.5px var(--nf-font);
    text-anchor: middle;
    font-variant-numeric: tabular-nums;
  }
  .nf-dim {
    fill: var(--nf-accent);
    font: 600 11.5px var(--nf-font);
    text-anchor: middle;
    font-variant-numeric: tabular-nums;
    paint-order: stroke;
    stroke: var(--nf-bg);
    stroke-width: 3px;
  }
  .nf-vertex circle:not(.nf-hit) {
    fill: var(--nf-bg);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-vertex-sel circle:not(.nf-hit) {
    fill: var(--nf-accent);
  }
  .nf-vertex,
  .nf-mid {
    cursor: grab;
  }
  .nf-hit {
    fill: transparent;
  }
  .nf-mid circle:not(.nf-hit) {
    fill: color-mix(in srgb, var(--nf-soft) 35%, transparent);
    stroke: var(--nf-soft);
  }
  .nf-mid path {
    stroke: var(--nf-text);
    stroke-width: 1.5;
  }
  .nf-draft {
    fill: rgba(255, 181, 71, 0.08);
    stroke: var(--nf-warm);
    stroke-width: 2;
    stroke-dasharray: 6 4;
  }
  polyline.nf-draft {
    fill: none;
  }
  .nf-draft-pt {
    fill: var(--nf-warm);
  }
  .nf-draft-first {
    fill: transparent;
    stroke: var(--nf-warm);
    stroke-width: 2;
  }
  .nf-cursor {
    fill: var(--nf-warm);
  }
  .nf-guide {
    stroke: rgba(255, 95, 210, 0.55);
    stroke-dasharray: 3 5;
  }
  .nf-snap {
    fill: none;
    stroke: #ff5fd2;
    stroke-width: 2;
  }
  .nf-dim {
    font: 600 10px var(--nf-font);
    fill: var(--nf-text);
    paint-order: stroke;
    stroke: rgba(10, 16, 32, 0.85);
    stroke-width: 3px;
  }
  .nf-note rect {
    fill: #ffe58a;
    stroke: #8a6d00;
    stroke-width: 1;
  }
  .nf-note text {
    fill: #3a2e00;
    font: 700 13px var(--nf-font);
    pointer-events: none;
  }
  .nf-note-due rect {
    fill: #ffa726;
  }
  .nf-note-sel rect {
    stroke: var(--nf-accent, #03a9f4);
    stroke-width: 3;
  }
  .nf-note {
    cursor: pointer;
  }
  .nf-keys-open {
    position: absolute;
    right: 12px;
    bottom: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid var(--nf-line);
    background: var(--nf-chrome, rgba(20, 28, 48, 0.8));
    color: var(--nf-text);
    font: 700 15px var(--nf-font);
    cursor: pointer;
  }
  .nf-keys {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(0, 0, 0, 0.35);
    z-index: 20;
  }
  .nf-keys-card {
    max-width: min(520px, 92%);
    max-height: 85%;
    overflow: auto;
    padding: 14px 18px;
    border-radius: 14px;
    background: var(--nf-surface, #1c1c1c);
    box-shadow: var(--nf-shadow);
  }
  .nf-keys dl {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 6px 14px;
    margin: 8px 0 0;
    font-size: 13px;
  }
  .nf-keys dt {
    white-space: nowrap;
  }
  .nf-keys dd {
    margin: 0;
    color: var(--nf-muted);
  }
  .nf-keys kbd {
    display: inline-block;
    padding: 1px 6px;
    border-radius: 5px;
    border: 1px solid var(--nf-line);
    font: 600 12px var(--nf-font);
  }
  .nf-tour {
    position: absolute;
    left: 16px;
    bottom: 36px;
    max-width: 340px;
    padding: 12px 16px;
    border-radius: 14px;
    background: var(--nf-surface, #1c1c1c);
    border: 1px solid var(--nf-accent, #03a9f4);
    box-shadow: var(--nf-shadow);
    z-index: 15;
  }
  .nf-tour h3 {
    margin: 2px 0 6px;
  }
  .nf-tour p {
    margin: 0 0 10px;
    font-size: 13px;
    line-height: 1.45;
  }
  .nf-tour-step {
    font-size: 11px;
    color: var(--nf-muted);
  }
  .nf-hint {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 8px;
    margin: 0;
    font-size: 12px;
    color: var(--nf-muted);
    pointer-events: none;
  }
  .nf-side {
    border-left: 1px solid var(--nf-line);
    background: var(--nf-chrome-solid);
    overflow-y: auto;
    padding: 12px 14px 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-height: 0;
  }
  .nf-narrow .nf-side {
    border-left: none;
    border-top: 1px solid var(--nf-line);
  }
  h3,
  summary {
    margin: 0 0 8px;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--nf-muted);
    font-weight: 600;
  }
  summary {
    cursor: pointer;
    margin: 0;
  }
  details[open] > summary {
    margin-bottom: 8px;
  }
  .nf-floor-list,
  .nf-compass {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 14px;
    padding: 10px 12px;
    border: 1px solid var(--nf-line);
    border-radius: 12px;
  }
  .nf-compass-dial {
    width: 96px;
    height: 96px;
    flex: none;
  }
  .nf-compass-ring {
    fill: none;
    stroke: var(--nf-line);
    stroke-width: 1.5;
  }
  .nf-compass-up {
    fill: var(--nf-soft);
  }
  .nf-compass-n {
    fill: var(--nf-accent);
  }
  .nf-compass-s {
    fill: color-mix(in srgb, var(--nf-soft) 55%, transparent);
  }
  .nf-compass-label {
    fill: var(--nf-text);
    font-size: 12px;
    font-weight: 700;
    text-anchor: middle;
  }
  .nf-compass-label-s {
    fill: var(--nf-soft);
  }
  .nf-map-settings {
    display: grid;
    gap: 8px;
  }
  .nf-map-move {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
  }
  .nf-map-arrows {
    display: flex;
    gap: 6px;
  }
  .nf-compass-side {
    display: grid;
    gap: 6px;
    flex: 1 1 200px;
  }
  .nf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .nf-floor-list .nf-chip {
    box-shadow: none;
    border: 1px solid var(--nf-line);
  }
  .nf-version-actions {
    display: inline-flex;
    gap: 8px;
    white-space: nowrap;
  }
  .nf-diff {
    margin: 2px 0 10px 8px;
    padding-left: 8px;
    border-left: 2px solid color-mix(in srgb, var(--nf-soft, #8a9bb8) 35%, transparent);
  }
  .nf-diff-list {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0.9em;
    line-height: 1.5;
  }
  .nf-check-open {
    width: 100%;
    margin: 0 0 8px;
  }
  .nf-check-floor {
    margin: 10px 0 4px;
    font-size: 0.85em;
    color: var(--nf-muted, #8d9bbd);
  }
  .nf-check-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 6px;
  }
  .nf-check-list li {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 8px;
    align-items: center;
    padding: 6px 8px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--nf-soft, #8a9bb8) 10%, transparent);
  }
  .nf-check-names {
    grid-column: 1 / -1;
    font-size: 0.85em;
  }
  .nf-check-names ul {
    list-style: none;
    margin: 6px 0;
    padding: 0;
    display: grid;
    gap: 4px;
  }
  .nf-check-names li {
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 2px 0;
    background: none;
  }
  .nf-check-all {
    margin: 6px 0 2px;
  }
  .nf-check-names .nf-check-name {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nf-check-names .nf-check-ignore {
    flex: none;
    margin-left: auto;
  }
  .nf-check-names li small {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--nf-muted, #8d9bbd);
  }
  .nf-check-text {
    font-size: 0.9em;
    line-height: 1.3;
  }
  .nf-check-ok {
    font-size: 1em;
  }
  .nf-studio-view {
    display: block;
    width: 100%;
    max-height: 200px;
    margin: 6px 0 10px;
    background: color-mix(in srgb, var(--nf-soft, #8a9bb8) 10%, transparent);
    border-radius: 8px;
  }
  .nf-studio-glow {
    filter: drop-shadow(0 0 4px rgba(255, 214, 120, 0.8));
  }
  .nf-lib-studio {
    width: 100%;
    margin: 4px 0 8px;
  }
  .nf-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
  }
  .nf-wide {
    grid-column: 1 / -1;
  }
  .nf-room-list {
    display: grid;
    gap: 2px;
  }
  .nf-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    font: inherit;
    color: var(--nf-text);
    background: none;
    border: none;
    border-bottom: 1px solid var(--nf-line);
    padding: 9px 2px;
    cursor: pointer;
    text-align: left;
  }
  .nf-row:hover {
    color: var(--nf-accent);
  }
  .nf-check {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--nf-muted);
  }
  .nf-check input {
    accent-color: var(--nf-accent);
  }
  .nf-meter rect {
    fill: #2a2a10;
    stroke: #ffc633;
    stroke-width: 1.5;
  }
  .nf-meter path {
    fill: #ffc633;
  }
  .nf-packages {
    display: grid;
    gap: 6px;
    margin-top: 10px;
  }
  .nf-packages .nf-btn {
    display: grid;
    text-align: left;
    gap: 2px;
  }
  .nf-packages .nf-btn span {
    font-weight: 400;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-arrows {
    display: grid;
    grid-template-columns: repeat(3, 52px);
    grid-template-areas: ". up ." "left . right" ". down .";
    gap: 6px;
    justify-content: center;
  }
  .nf-arrows .nf-btn {
    font-size: 20px;
    padding: 6px 0;
  }
  .nf-arrow-up {
    grid-area: up;
  }
  .nf-arrow-left {
    grid-area: left;
  }
  .nf-arrow-right {
    grid-area: right;
  }
  .nf-arrow-down {
    grid-area: down;
  }
  .nf-measure-list {
    margin: 8px 0;
    padding-left: 22px;
    color: var(--nf-muted);
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }
  .nf-library {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
    gap: 6px;
    margin-top: 8px;
  }
  .nf-library .nf-btn {
    font-weight: 500;
    font-size: 13px;
  }
  /* the library cards: a picture, the name, size and source, a star, and size chips for a model in several sizes */
  .nf-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(86px, 1fr));
    gap: 8px;
    margin-top: 8px;
  }
  .nf-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    background: var(--nf-chrome);
    box-shadow: 0 0 0 1px var(--nf-line);
  }
  .nf-card-main {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 6px 6px 8px;
    border: 0;
    border-radius: 14px;
    background: none;
    color: var(--nf-text);
    font: inherit;
    text-align: left;
    cursor: pointer;
  }
  .nf-card-main:hover,
  .nf-card-main:focus-visible {
    background: rgba(127, 127, 127, 0.1);
    outline: none;
  }
  .nf-card-name {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.25;
    overflow-wrap: anywhere;
    hyphens: auto;
  }
  .nf-card-meta {
    font-size: 11px;
    color: var(--nf-muted);
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .nf-card-star {
    position: absolute;
    top: 3px;
    right: 3px;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.25);
    color: var(--nf-muted);
    font-size: 15px;
    line-height: 1;
    cursor: pointer;
  }
  .nf-card-star[aria-pressed="true"] {
    color: var(--nf-warm, #ffb547);
  }
  .nf-card-sizes {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 0 6px 8px;
  }
  .nf-size {
    min-width: 34px;
    padding: 3px 6px;
    border: 1px solid var(--nf-line);
    border-radius: 999px;
    background: none;
    color: var(--nf-muted);
    font: inherit;
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }
  .nf-size[aria-pressed="true"] {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
  }
  .nf-lib-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }
  .nf-lib-chip {
    min-height: 30px;
    padding: 4px 10px;
    font-size: 12px;
    box-shadow: 0 0 0 1px var(--nf-line);
  }
  .nf-lib-chip[aria-pressed="true"] {
    color: var(--nf-accent);
    box-shadow: 0 0 0 1px var(--nf-accent);
  }
  .nf-lib-all {
    width: 100%;
    margin-top: 12px;
  }
  /* the background picture while it is edited: a dashed frame and a corner handle */
  .nf-bg-frame {
    fill: none;
    stroke: var(--nf-accent);
    stroke-width: 1.5;
    stroke-dasharray: 6 4;
    pointer-events: none;
  }
  .nf-bg-handle {
    fill: var(--nf-accent);
    stroke: #041018;
    stroke-width: 2;
    cursor: nwse-resize;
  }
  .nf-furn-body {
    fill: color-mix(in srgb, var(--nf-soft) 10%, transparent);
    stroke: color-mix(in srgb, var(--nf-soft) 55%, transparent);
    stroke-width: 1.2;
    vector-effect: non-scaling-stroke;
    cursor: grab;
  }
  .nf-furn-sym * {
    fill: none;
    stroke: rgba(150, 175, 255, 0.55);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
    pointer-events: none;
  }
  .nf-furn-sym .nf-sym-fill {
    fill: color-mix(in srgb, var(--nf-soft) 28%, transparent);
  }
  .nf-furn-sym .nf-sym-dash {
    stroke-dasharray: 6 4;
  }
  .nf-furn-sym .nf-sym-strong {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-out polygon {
    fill: color-mix(in srgb, var(--nf-soft) 6%, transparent);
    stroke: color-mix(in srgb, var(--nf-soft) 40%, transparent);
    stroke-width: 1;
    stroke-dasharray: 4 3;
    cursor: grab;
  }
  .nf-out-lawn polygon,
  .nf-out-bed polygon,
  .nf-out-wild polygon,
  .nf-out-hedge polygon {
    fill: rgba(61, 224, 160, 0.1);
    stroke: rgba(61, 224, 160, 0.5);
  }
  .nf-out-pool polygon {
    fill: color-mix(in srgb, var(--nf-accent) 18%, transparent);
    stroke: var(--nf-accent);
  }
  .nf-out-terrace polygon {
    fill: rgba(150, 130, 255, 0.12);
  }
  .nf-free-wall {
    cursor: grab;
  }
  .nf-vertex-no {
    fill: var(--nf-accent);
    font-size: 11px;
    font-weight: 700;
    pointer-events: none;
  }
  .nf-edge-box {
    margin: 12px 0;
    padding: 10px 12px;
    border: 1px solid color-mix(in srgb, var(--nf-accent) 45%, transparent);
    border-radius: 12px;
    background: color-mix(in srgb, var(--nf-accent) 6%, transparent);
  }
  .nf-edge-box h4 {
    margin: 0 0 4px;
    color: var(--nf-accent);
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
     a split point gets a line of its own below */
  .nf-edge-height {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: end;
    padding: 4px 6px;
    margin: 0 -6px;
    border-radius: 8px;
  }
  .nf-edge-height > span:first-child {
    flex: 1 1 84px;
    min-width: 84px;
  }
  .nf-ble-bars {
    display: grid;
    gap: 6px;
    margin: 10px 0;
  }
  .nf-ble-row {
    display: grid;
    grid-template-columns: minmax(80px, 1fr) 2fr 36px;
    align-items: center;
    gap: 8px;
    font-size: 12px;
  }
  .nf-ble-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--nf-text);
  }
  .nf-ble-track {
    height: 8px;
    border-radius: 4px;
    background: rgba(127, 127, 127, 0.25);
    overflow: hidden;
  }
  .nf-ble-fill {
    display: block;
    height: 100%;
    border-radius: 4px;
    background: var(--nf-accent, #00e5ff);
    transition: width 0.4s ease-out;
  }
  .nf-ble-db {
    text-align: right;
    font-variant-numeric: tabular-nums;
    color: var(--nf-muted);
  }
  .nf-ble-now {
    margin: 4px 0 10px;
    color: var(--nf-text);
  }
  .nf-ble-learn {
    margin: 8px 0 14px;
    padding: 10px 12px;
    border: 1px solid var(--nf-border, rgba(127, 127, 127, 0.3));
    border-radius: 10px;
  }
  .nf-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .nf-chips .nf-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    cursor: default;
    color: var(--nf-text);
  }
  .nf-chip-x {
    border: 0;
    background: none;
    color: var(--nf-muted);
    font: inherit;
    font-size: 16px;
    line-height: 1;
    padding: 0 2px;
    cursor: pointer;
  }
  .nf-quiet-time > span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .nf-quiet-time input {
    flex: 1 1 0;
  }
  .nf-edge-height > .nf-field {
    flex: 1 1 90px;
    min-width: 0;
  }
  .nf-edge-height > .nf-muted {
    flex: 1 1 90px;
    align-self: center;
  }
  .nf-edge-height > .nf-btn {
    flex: 0 0 auto;
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;
  }
  .nf-edge-height > .nf-split-row {
    flex: 1 1 100%;
    display: flex;
    gap: 6px;
    align-items: end;
  }
  .nf-edge-height > .nf-split-row > .nf-field {
    flex: 1;
  }
  .nf-edge-on {
    background: color-mix(in srgb, var(--nf-accent) 14%, transparent);
  }
  .nf-edge-low b {
    color: var(--nf-accent);
  }
  .nf-wall-low {
    opacity: 0.55;
  }
  .nf-dev-source {
    display: flex;
    margin: 8px 0;
  }
  .nf-dev-source button {
    flex: 1 1 0;
    min-width: 0;
    padding: 6px 4px;
    font-size: 12px;
    line-height: 1.2;
    white-space: normal;
    text-align: center;
    border-radius: 10px;
  }
  .nf-place-all {
    margin: 10px 0 0;
  }
  .nf-roof-sec polygon {
    fill: color-mix(in srgb, #ffb547 10%, transparent);
    stroke: #ffb547;
    stroke-width: 2;
    stroke-dasharray: 8 6;
    cursor: move;
  }
  .nf-roof-sel polygon {
    fill: color-mix(in srgb, var(--nf-accent) 14%, transparent);
    stroke: var(--nf-accent);
    stroke-dasharray: none;
  }
  /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
  .nf-roofwin polygon {
    fill: color-mix(in srgb, #2b6b8f 70%, transparent);
    stroke: #e3e9f5;
    stroke-width: 2;
    cursor: move;
  }
  .nf-chimney polygon {
    fill: color-mix(in srgb, #7a4a4a 75%, transparent);
    stroke: #e3e9f5;
    stroke-width: 2;
    cursor: move;
  }
  .nf-roofwin-sel polygon {
    stroke: #ffd75a;
  }
  .nf-tool-energy .nf-roof-layer {
    opacity: 0.45;
  }
  .nf-tool-energy .nf-energy-item {
    pointer-events: auto;
  }
  .nf-swatches {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 4px;
  }
  .nf-stair-shapes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .nf-stair-shape {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 6px 4px;
    font-size: 11px;
    line-height: 1.2;
    text-align: center;
  }
  .nf-stair-shape[aria-checked="true"] {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
    box-shadow: 0 0 0 1px var(--nf-accent) inset;
  }
  .nf-swatch {
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
    border: 2px solid var(--nf-line);
    background: var(--sw);
    cursor: pointer;
  }
  .nf-swatch[aria-checked="true"] {
    border-color: var(--nf-text);
    outline: 2px solid var(--nf-accent);
    outline-offset: 2px;
  }
  .nf-energy-marker {
    cursor: move;
  }
  .nf-checklist .nf-chk {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin: 2px 0;
    padding: 6px 8px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
  }
  .nf-checklist .nf-chk:hover {
    background: rgba(127, 127, 127, 0.12);
  }
  .nf-checklist .nf-chk span {
    width: 18px;
    text-align: center;
    font-weight: 700;
  }
  .nf-chk-ok span {
    color: #59ff8c;
  }
  .nf-chk-todo span {
    color: #ffc633;
  }
  .nf-chk-opt {
    opacity: 0.75;
  }
  .nf-teaser-on {
    border-color: rgba(89, 255, 140, 0.5);
  }
  .nf-teaser {
    margin-top: 12px;
    padding: 12px;
    border-radius: 14px;
    border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
    background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
  }
  .nf-teaser-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .nf-teaser-soon {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--nf-chrome-solid);
    background: #ffd75a;
    border-radius: 999px;
    padding: 2px 8px;
    white-space: nowrap;
  }
  .nf-teaser img {
    display: block;
    width: 100%;
    border-radius: 10px;
    border: 1px solid color-mix(in srgb, var(--nf-accent) 40%, transparent);
  }
  .nf-teaser ul {
    margin: 8px 0 4px;
    padding-left: 18px;
    font-size: 13px;
  }
  /* the roof and energy tools say what can be moved there (everything else is locked) */
  .nf-tool-note {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    max-width: calc(100% - 24px);
    padding: 5px 12px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--nf-chrome-solid) 85%, transparent);
    border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
    color: #ffe7a3;
    font-size: 12px;
    text-align: center;
    pointer-events: none;
  }
  .nf-route line {
    stroke: var(--nf-warm);
    stroke-width: 2;
    stroke-dasharray: 6 4;
    opacity: 0.7;
  }
  .nf-route circle {
    fill: var(--nf-warm);
    opacity: 0.8;
  }
  .nf-route circle.nf-route-riser {
    fill: none;
    stroke: var(--nf-warm);
    stroke-width: 2;
  }
  .nf-route-drawing line {
    stroke: var(--nf-accent);
    stroke-dasharray: none;
    opacity: 1;
  }
  .nf-route-drawing circle {
    fill: var(--nf-accent);
    opacity: 1;
  }
  .nf-route-drawing circle.nf-route-riser {
    fill: none;
    stroke: var(--nf-accent);
  }
  .nf-route text {
    fill: var(--nf-text);
    font-size: 11px;
    pointer-events: none;
  }
  .nf-routes {
    pointer-events: none;
  }
  .nf-energy-marker circle {
    fill: color-mix(in srgb, var(--nf-chrome-solid) 80%, transparent);
    stroke: #ffd75a;
    stroke-width: 2;
  }
  .nf-energy-marker-sel circle {
    stroke: var(--nf-accent);
    stroke-width: 3;
    fill: color-mix(in srgb, var(--nf-accent) 25%, var(--nf-chrome-solid));
  }
  .nf-energy-marker text {
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-energy-icon {
    font-size: 17px;
  }
  .nf-energy-name {
    font-size: 11px;
    font-weight: 700;
    fill: #ffd75a;
    paint-order: stroke;
    stroke: rgba(0, 0, 0, 0.65);
    stroke-width: 3px;
  }
  .nf-solar polygon {
    fill: color-mix(in srgb, #1b3a8f 75%, transparent);
    stroke: #9fb8ff;
    stroke-width: 1.5;
    cursor: move;
  }
  .nf-solar-sel polygon {
    fill: color-mix(in srgb, #1b3a8f 80%, transparent);
    stroke: #ffd75a;
    stroke-width: 2;
  }
  .nf-solar polygon.nf-solar-off {
    fill: transparent;
    stroke-dasharray: 4 4;
    stroke-width: 1.5;
  }
  .nf-solar-pick polygon {
    cursor: pointer;
  }
  .nf-roof-ridge line {
    stroke: #ffb547;
    stroke-width: 2.5;
    pointer-events: none;
  }
  .nf-roof-sel .nf-roof-ridge line {
    stroke: var(--nf-accent);
  }
  .nf-roof-sec text {
    fill: #ffd28a;
    font-size: 12px;
    font-weight: 700;
    text-anchor: middle;
    paint-order: stroke;
    stroke: rgba(0, 0, 0, 0.6);
    stroke-width: 3px;
    pointer-events: none;
  }
  .nf-tool-energy .nf-room,
  .nf-tool-energy [data-furniture],
  .nf-tool-energy [data-device],
  .nf-tool-energy [data-opening],
  .nf-tool-energy [data-free-wall],
  .nf-tool-energy [data-outdoor],
  .nf-tool-energy .nf-roof-layer,
  .nf-tool-roof .nf-room,
  .nf-tool-roof [data-furniture],
  .nf-tool-roof [data-device],
  .nf-tool-roof [data-opening],
  .nf-tool-roof [data-free-wall],
  .nf-tool-roof [data-outdoor] {
    pointer-events: none;
  }
  .nf-dev-area {
    margin: 10px 0 2px;
    color: var(--nf-muted);
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .nf-h3row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .nf-h3row h3 {
    margin-bottom: 0;
  }
  .nf-fix {
    min-height: 30px;
    padding: 4px 10px;
    font-size: 13px;
  }
  .nf-fix[aria-pressed="true"] {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
  }
  .nf-lock {
    font-size: 13px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-hint-fixed {
    color: var(--nf-accent);
  }
  .nf-ctx {
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    min-width: 170px;
    padding: 4px;
    border: 1px solid var(--nf-line);
    border-radius: 10px;
    background: var(--nf-panel, #111a2e);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  }
  .nf-ctx button {
    padding: 8px 12px;
    border: none;
    border-radius: 7px;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
  }
  .nf-ctx button:hover:not(:disabled) {
    background: color-mix(in srgb, var(--nf-accent) 16%, transparent);
  }
  .nf-ctx button:disabled {
    opacity: 0.45;
    cursor: default;
  }
  .nf-ctx-danger {
    color: var(--nf-danger, #ff6b7a) !important;
  }
  .nf-edge-hi {
    stroke: var(--nf-accent);
    stroke-width: 6;
    stroke-linecap: round;
    filter: drop-shadow(0 0 6px var(--nf-accent));
  }
  .nf-free-wall .nf-hit {
    stroke: transparent;
    stroke-width: 18;
  }
  .nf-free-wall-line {
    stroke: transparent;
    stroke-width: 1;
  }
  .nf-free-wall-sel .nf-free-wall-line {
    stroke: var(--nf-accent);
    stroke-width: 2;
    stroke-dasharray: 6 4;
  }
  .nf-draft-wall {
    stroke-width: 4;
  }
  .nf-open-passage {
    stroke-dasharray: 4 4;
  }
  .nf-out-sel polygon {
    stroke: var(--nf-accent);
    stroke-width: 2;
    stroke-dasharray: none;
  }
  .nf-out text {
    fill: var(--nf-muted);
    font-size: 11px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-furn-lit .nf-furn-body {
    fill: rgba(255, 181, 71, 0.35);
    stroke: var(--nf-warm);
  }
  .nf-rotate {
    cursor: grab;
  }
  .nf-preview {
    position: fixed;
    z-index: 20;
    width: 180px;
    padding: 8px 8px 10px;
    border-radius: 16px;
    background: var(--nf-bg2);
    box-shadow: var(--nf-shadow), 0 0 0 1px var(--nf-line);
    text-align: center;
    pointer-events: none;
    animation: nf-pop 120ms ease-out;
  }
  @keyframes nf-pop {
    from {
      opacity: 0;
      transform: translateX(8px);
    }
  }
  .nf-preview img,
  .nf-preview-wait {
    display: block;
    width: 164px;
    height: 164px;
  }
  .nf-preview-wait {
    margin: 0 auto;
    border-radius: 12px;
    background: rgba(127, 127, 127, 0.1);
  }
  .nf-preview b {
    display: block;
    margin-top: 2px;
    font-size: 13px;
    color: #e8eeff;
  }
  .nf-lib-badge {
    margin-left: 4px;
    color: var(--nf-accent);
    vertical-align: -2px;
  }
  .nf-pin {
    border: 0;
    background: none;
    padding: 2px 6px;
    font-size: 17px;
    line-height: 1;
    color: var(--nf-muted);
    cursor: pointer;
  }
  .nf-pin-on {
    color: var(--nf-warm);
  }
  .nf-back {
    margin-bottom: 12px;
  }
  .nf-presets {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }
  .nf-resize {
    cursor: nwse-resize;
  }
  .nf-resize rect {
    fill: var(--nf-accent);
    stroke: var(--nf-chrome-solid);
    stroke-width: 1.5;
  }
  .nf-code {
    display: block;
    font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
    padding: 6px 8px;
    border-radius: 8px;
    background: rgba(127, 127, 127, 0.12);
    user-select: all;
    word-break: break-all;
  }
  .nf-shift {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .nf-shift input {
    width: 5.5em;
  }
  .nf-headroom {
    stroke: rgba(255, 214, 90, 0.55);
    stroke-width: 1;
    stroke-dasharray: 6 4;
    pointer-events: none;
  }
  .nf-headroom-label {
    font-size: 10px;
    fill: rgba(255, 214, 90, 0.75);
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-split-mark {
    stroke: color-mix(in srgb, var(--nf-accent) 90%, transparent);
    stroke-width: 2;
    pointer-events: none;
  }
  .nf-floor-menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 8px 0;
    padding: 10px;
    border-radius: 12px;
    background: rgba(127, 127, 127, 0.1);
    max-width: 100%;
    box-sizing: border-box;
  }
  .nf-icon-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nf-icon-row input {
    flex: 1;
    min-width: 0;
  }
  .nf-icon-row ha-icon {
    --mdc-icon-size: 22px;
    color: var(--nf-accent);
  }
  .nf-floor-menu .nf-btn {
    text-align: left;
    width: 100%;
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .nf-rotate line {
    stroke: var(--nf-accent);
    stroke-dasharray: 3 3;
  }
  .nf-rotate circle:not(.nf-hit) {
    fill: var(--nf-chrome-solid);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-rotate path {
    fill: none;
    stroke: var(--nf-accent);
    stroke-width: 1.5;
    stroke-linecap: round;
  }
  .nf-lib-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 6px 0;
    border: 0;
    background: none;
    font: inherit;
    cursor: pointer;
    text-align: left;
  }
  .nf-lib-toggle:hover {
    color: var(--nf-text);
  }
  .nf-lib-caret {
    width: 12px;
    color: var(--nf-accent);
  }
  .nf-lib-count {
    margin-left: auto;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
    opacity: 0.7;
  }
  .nf-lib-head {
    margin: 10px 0 0;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--nf-muted);
  }
  .nf-furn-front {
    stroke: var(--nf-accent);
    stroke-width: 2.5;
    vector-effect: non-scaling-stroke;
    opacity: 0.8;
    pointer-events: none;
  }
  .nf-furn text {
    fill: var(--nf-muted);
    font-size: 11px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-furn-sel .nf-furn-body {
    fill: color-mix(in srgb, var(--nf-accent) 16%, transparent);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open {
    cursor: grab;
  }
  .nf-open-gap {
    fill: var(--nf-chrome-solid);
    stroke: none;
  }
  .nf-open path,
  .nf-open line {
    fill: none;
    stroke-width: 1.6;
    stroke-linecap: round;
  }
  .nf-open-door path {
    stroke: var(--nf-warm);
    stroke-dasharray: 3 3;
  }
  .nf-open-front path,
  .nf-open-door line {
    stroke: var(--nf-warm);
    stroke-width: 3;
    stroke-dasharray: none;
  }
  .nf-open-door line.nf-open-pane {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open-garage line {
    stroke: var(--nf-warm);
    stroke-width: 3;
  }
  .nf-open-track {
    stroke: var(--nf-warm);
    stroke-dasharray: 4 4;
    opacity: 0.6;
  }
  .nf-open-window line {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open-sel .nf-open-gap {
    fill: color-mix(in srgb, var(--nf-accent) 25%, transparent);
  }
  .nf-open-sel path,
  .nf-open-sel line {
    stroke-width: 2.4;
  }
  .nf-bg-rotate {
    cursor: grab;
  }
  .nf-bg-ruler line {
    stroke: #ffb020;
    stroke-width: 2.5;
    stroke-dasharray: 6 4;
  }
  .nf-bg-ruler circle {
    fill: #ffb020;
    stroke: #1a1000;
    stroke-width: 1.5;
  }
  .nf-own-button {
    padding: 10px 0;
    border-top: 1px solid var(--nf-line);
  }
  .nf-own-button textarea {
    font: 12px/1.4 ui-monospace, monospace;
    width: 100%;
    box-sizing: border-box;
    padding: 6px 8px;
    color: var(--nf-text);
    background: color-mix(in srgb, var(--nf-text) 4%, transparent);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
  }
  .nf-search {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: var(--nf-panel, #0d1424);
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    font-size: 14px;
    color: var(--nf-text);
    background: color-mix(in srgb, var(--nf-text) 4%, transparent);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
    padding: 7px 9px;
    margin: 2px 0 6px;
  }
  .nf-more {
    font: inherit;
    font-size: 12px;
    color: var(--nf-muted);
    background: none;
    border: none;
    text-align: left;
    padding: 2px 26px 8px;
    cursor: pointer;
  }
  .nf-more:hover {
    color: var(--nf-accent);
  }
  .nf-dev-hidden .nf-dev-name {
    opacity: 0.45;
    text-decoration: line-through;
  }
  .nf-dev-extra {
    padding-left: 18px;
    font-size: 13px;
  }
  .nf-dev-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 8px;
    font-weight: 600;
  }
  .nf-notice {
    color: var(--nf-accent);
  }
  .nf-device-sel circle:not(.nf-hit) {
    stroke: var(--nf-accent);
    stroke-width: 3;
  }
  .nf-dev-row {
    align-items: center;
    cursor: default;
  }
  .nf-dev-row:hover {
    color: var(--nf-text);
  }
  .nf-dev-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .nf-dev-name:disabled {
    cursor: default;
  }
  .nf-dev-name span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nf-dev-name svg {
    flex: none;
  }
  .nf-color-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nf-color-row input[type="color"] {
    width: 48px;
    height: 32px;
    padding: 0;
    border: none;
    background: none;
  }
  .nf-link {
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    color: var(--nf-accent);
    background: none;
    border: none;
    padding: 4px 2px;
    cursor: pointer;
    white-space: nowrap;
  }
  .nf-wide-btn {
    width: 100%;
    margin-bottom: 6px;
  }
  .nf-device {
    cursor: grab;
  }
  .nf-wedge path,
  .nf-wedge circle:not(.nf-hit) {
    fill: color-mix(in srgb, var(--nf-accent) 12%, transparent);
    stroke: color-mix(in srgb, var(--nf-accent) 45%, transparent);
    stroke-width: 1;
    pointer-events: none;
  }
  .nf-wedge-sel path,
  .nf-wedge-sel > circle {
    fill: color-mix(in srgb, var(--nf-accent) 20%, transparent);
    stroke: var(--nf-accent);
  }
  .nf-wedge .nf-rotate circle {
    pointer-events: auto;
  }
  .nf-device circle:not(.nf-hit) {
    fill: #111a2e;
    stroke: var(--nf-soft);
    stroke-width: 1.5;
    vector-effect: non-scaling-stroke;
  }
  .nf-device path {
    fill: none;
    stroke: var(--nf-text);
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .nf-device-on circle:not(.nf-hit) {
    fill: var(--nf-warm);
    stroke: var(--nf-warm);
  }
  .nf-device-on path {
    stroke: #2a1a00;
  }
  .nf-device-icon {
    pointer-events: none;
    overflow: visible;
  }
  .nf-device-icon ha-icon {
    display: block;
    --mdc-icon-size: 16px;
    color: var(--nf-text);
  }
  .nf-device-on .nf-device-icon ha-icon {
    color: #2a1a00;
  }
  .nf-dev-icon {
    --mdc-icon-size: 18px;
    flex: none;
  }
  .nf-muted {
    color: var(--nf-muted);
    font-variant-numeric: tabular-nums;
  }
  .nf-points {
    margin: 12px 0;
  }
  .nf-point {
    display: grid;
    grid-template-columns: 18px 1fr 1fr auto;
    gap: 6px;
    align-items: end;
    padding: 4px 0;
  }
  .nf-point-sel .nf-muted {
    color: var(--nf-accent);
  }
  .nf-point .nf-btn {
    min-height: 34px;
    padding: 4px 10px;
  }
  .nf-upload {
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  .nf-upload input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }
  .nf-sub {
    margin: 8px 0 0;
    font-size: 12.5px;
    color: var(--nf-muted);
  }
  .nf-note {
    margin: 0;
    font-size: 12.5px;
    color: var(--nf-warm);
  }
`;var i_=["cabinet","shelf","lamp","device"],yn="own_studio";var nx={cabinet:{w:120,d:45,h:80,doors:2,drawers:1,shelves:2,base:"plinth",handle:"bar",back:!0,lamp:"floor",display:!1,mount:"floor",body:"white",front:"wood"},shelf:{w:80,d:35,h:180,doors:0,drawers:0,shelves:4,base:"none",handle:"none",back:!0,lamp:"floor",display:!1,mount:"floor",body:"wood",front:"wood"},lamp:{w:40,d:40,h:160,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!1,mount:"floor",body:"metal",front:"white"},device:{w:60,d:60,h:85,doors:0,drawers:0,shelves:0,base:"none",handle:"none",back:!1,lamp:"floor",display:!0,mount:"floor",body:"white",front:"dark"}},tc=(t,e)=>({kind:t,name:e,...nx[t]}),s_=(t,e)=>({...tc(e,t.name),body:t.body,front:t.front}),or=(t,e,n)=>Math.min(n,Math.max(e,Number.isFinite(t)?t:e)),ir=t=>Math.round(t*1e4)/1e4;function nc(t){return{...t,name:t.name.trim().slice(0,60),w:or(Math.round(t.w),5,400),d:or(Math.round(t.d),2,200),h:or(Math.round(t.h),2,300),doors:or(Math.round(t.doors),0,6),drawers:or(Math.round(t.drawers),0,6),shelves:or(Math.round(t.shelves),0,12)}}function ue(t,e,n,r,o,i,s,a,l={}){let[c,u,d]=t,p=(x,k,S)=>{let $=Math.max(-S,x-k/2),E=Math.min(S,x+k/2);return E-$<1e-4?[Math.max(-S,Math.min(S,x)),.001*S*2]:[($+E)/2,E-$]},[h,f]=p(e,r,c/2),[_,b]=p(n,o,u/2),w=Math.max(0,Math.min(d*.999,i)),v=Math.max(d*.001,Math.min(d-w,s)),y=x=>ir(Math.max(.001,Math.min(1,x)));return{shape:"box",x:ir(h/c),z:ir(_/u),w:y(f/c),d:y(b/u),y:ir(w/d),h:y(v/d),color:a,...l}}function a_(t,e,n){let[r,o,i]=t;if(e==="legs"){let s=Math.min(.1,i*.25),a=Math.min(.04,r/6,o/6);for(let[l,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.push(ue(t,l*(r/2-a),c*(o/2-a),a,a,0,s,"metal"));return s}if(e==="plinth"){let s=Math.min(.08,i*.2);return n.push(ue(t,0,-.02,r-.02,o-.04,0,s,"dark")),s}return 0}function rx(t,e){let[n,r,o]=e,i=[],s=a_(e,t.base,i),a=t.doors+t.drawers>0,l=t.handle==="none"||!a?0:Math.min(.025,r*.08),c=a?Math.min(.02,r*.1):0,u=r-c-l,d=-r/2+u/2,p=o-s;if(!a){let v=Math.min(.018,n/10,p/10);i.push(ue(e,-n/2+v/2,0,v,r,s,p,t.body,{edges:!0})),i.push(ue(e,n/2-v/2,0,v,r,s,p,t.body,{edges:!0})),i.push(ue(e,0,-r/2+.005,n-2*v,.01,s,p,t.body));for(let y=0;y<=t.shelves+1;y++)i.push(ue(e,0,.005,n-2*v,r-.01,s+(p-v)*y/(t.shelves+1),v,t.front,{edges:"faint"}));return i}i.push(ue(e,0,d,n,u,s,p,t.body,{edges:!0}));let h=.004,f=-r/2+u+c/2,_=t.doors>0?Math.min(.18,Math.max(.08,(p-.3)/Math.max(1,t.drawers))):p/t.drawers,b=s+(t.drawers>0?_*t.drawers:0),w=(v,y,x)=>{if(t.handle==="none")return;let k=r/2-l/2;t.handle==="knob"?i.push(ue(e,v,k,.025,l,y-.0125,.025,"metal")):x?i.push(ue(e,v,k,.015,l,y-.08,.16,"metal")):i.push(ue(e,v,k,Math.min(.16,n*.4),l,y-.0075,.015,"metal"))};for(let v=0;v<t.drawers;v++){let y=s+_*v;i.push(ue(e,0,f,n-2*h,c,y+h,_-2*h,t.front,{edges:"faint"})),w(0,y+_*(t.drawers===1&&t.doors===0?.5:.7),!1)}if(t.doors>0){let v=n/t.doors,y=o-b;for(let x=0;x<t.doors;x++){let k=-n/2+v*(x+.5);i.push(ue(e,k,f,v-2*h,c,b+h,y-2*h,t.front,{edges:"faint"}));let S=t.doors===1||x%2===0?1:-1,$=b+y*(o>1.2?.45:.8);w(k+S*(v/2-.04),Math.min($,o-.1),!0)}}return i}function ox(t,e){let[n,r,o]=e,i=Math.min(.02,n/10,o/10),s=[ue(e,-n/2+i/2,0,i,r,0,o,t.body,{edges:!0}),ue(e,n/2-i/2,0,i,r,0,o,t.body,{edges:!0})];t.back&&s.push(ue(e,0,-r/2+.005,n-2*i,.01,0,o,t.body));let a=t.shelves+2;for(let l=0;l<a;l++)s.push(ue(e,0,t.back?.005:0,n-2*i,t.back?r-.01:r,(o-i)*l/(a-1),i,t.front,{edges:!0}));return s}function ix(t,e){let[n,r,o]=e,i=Math.min(n,r),s=(l,c,u,d,p,h,f={})=>({...ue(e,l,c,u,u,d,p,h,f),shape:"cyl"}),a=(l,c,u)=>({...ue(e,0,0,i,i,l,c,t.front,{glow:!0,edges:"faint"}),shape:"loft",tw:ir(Math.min(1,i*u/n)),td:ir(Math.min(1,i*u/r))});switch(t.lamp){case"pendant":{let l=Math.min(.3,o*.4);return[s(0,0,Math.min(.12,i),o-.03,.03,t.body),s(0,0,Math.min(.01,i/4),l,o-l-.03,"dark"),a(0,l,.35)]}case"wall":{let l=Math.min(.02,r*.2);return[ue(e,0,-r/2+l/2,Math.min(.1,n),l,o*.3,o*.4,t.body),ue(e,0,0,Math.min(.02,n),r-l,o*.45,Math.min(.02,o*.1),t.body),a(o*.15,o*.7,.7)]}default:{let l=Math.min(t.lamp==="table"?.25:.35,o*.4);return[s(0,0,i*.6,0,Math.min(.03,o*.05),t.body,{edges:!0}),s(0,0,Math.min(.03,i/6),.02,o-l-.02,t.body),a(o-l,l,.7)]}}}function sx(t,e){let[n,r,o]=e,i=[],s=t.mount==="floor"?a_(e,t.base,i):0,a=t.display?Math.min(.01,r*.1):0;if(i.push(ue(e,0,-a/2,n,r-a,s,o-s,t.body,{edges:!0})),t.display){let l=Math.min(.02,n*.08,(o-s)*.08);i.push(ue(e,0,r/2-a/2,n-2*l,a,s+l,o-s-2*l,t.front,{screen:!0}))}return i}function _s(t,e,n){let r=nc(t),o=[r.w/100,r.d/100,r.h/100],i=r.name||e,s=n==="en"?{en:i}:{[n.slice(0,5)]:i,en:i},a={id:e,name:s,size:o,parts:[],recipe:r};switch(r.kind){case"cabinet":a.parts=rx(r,o),a.surface=!0;break;case"shelf":a.parts=ox(r,o);break;case"lamp":a.parts=ix(r,o),a.light=r.lamp,a.mount=r.lamp==="pendant"?"ceiling":r.lamp==="wall"?"wall":r.lamp==="table"?"surface":"floor",r.lamp==="wall"&&(a.wall_y=1.6);break;case"device":a.parts=sx(r,o),a.electric=!0,a.mount=r.mount,r.mount==="wall"&&(a.wall_y=1.2);break}return a}function l_(t,e){let n=t.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"_").replace(/^_+|_+$/g,"").slice(0,32)||"piece",r=/^[a-z0-9]/.test(n)?n:`p${n}`;if(!e.includes(r))return r;for(let o=2;;o++)if(!e.includes(`${r}_${o}`))return`${r}_${o}`}var c_=["white","wood","body","metal","dark","glass","accent"],ax={white:"#dfe6f2",wood:"#8a6a4a",body:"#3a4a6a",metal:"#9aa7bf",dark:"#1e2638",glass:"#7fd0e8",accent:"#37e0ff",fabric:"#4b5d8c",cushion:"#6a7fb3"},d_=t=>ax[t]??t;function lx(t){let e=_s(t,"preview","en"),[n,,r]=e.size,o=180/Math.max(n,r),[i,s]=[n*o,r*o],a=[...e.parts].sort((l,c)=>l.z+l.d/2-(c.z+c.d/2));return m`<svg class="nf-studio-view" viewBox="-4 -4 ${i+8} ${s+8}" role="img" aria-hidden="true">
    ${a.map(l=>{let c=l.w*i,u=l.h*s,d=(l.x+.5)*i-c/2,p=s-(l.y+l.h)*s,h=l.shape==="cyl"?Math.min(c,u)/2:l.shape==="loft"?3:1;return A`<rect x=${d} y=${p} width=${Math.max(.6,c)} height=${Math.max(.6,u)} rx=${h} fill=${l.screen?"#0b1020":d_(l.color)} stroke="rgba(10,16,32,0.55)" stroke-width="0.8" class=${l.glow?"nf-studio-glow":""} />`})}
  </svg>`}function u_(t,e,n,r){let o=t.t,i=!c_.includes(n),s=[...c_.map(a=>[a,o(a==="body"?"studio_color_plan":`studio_color_${a}`)]),["own",o("studio_color_own")]];return m`${O(t,e,i?"own":n,s,a=>r(a==="own"?d_(n):a))}
  ${i?We(t,o("studio_color_own"),n,"#8a6a4a",a=>r(a??"wood")):g}`}function h_(t,e,n){let r=t.t,o=e.recipe,i=c=>n.change(nc({...o,...c})),s=(c,u,d)=>F(t,r(c),u,p=>i({[d]:p}),1,1),a=(c,u,d)=>F(t,r(c),u,p=>i({[d]:p}),1,0),l=()=>{switch(o.kind){case"cabinet":return m`${a("studio_doors",o.doors,"doors")} ${a("studio_drawers",o.drawers,"drawers")}
          ${o.doors+o.drawers===0?a("studio_shelves",o.shelves,"shelves"):g}
          ${O(t,r("studio_handle"),o.handle,[["bar",r("studio_handle_bar")],["knob",r("studio_handle_knob")],["none",r("studio_handle_none")]],c=>i({handle:c}))}
          ${O(t,r("studio_base"),o.base,[["plinth",r("studio_base_plinth")],["legs",r("studio_base_legs")],["none",r("studio_base_none")]],c=>i({base:c}))}`;case"shelf":return m`${a("studio_shelves",o.shelves,"shelves")} ${L(t,r("studio_back"),o.back,c=>i({back:c}))}`;case"lamp":return O(t,r("studio_lamp"),o.lamp,[["floor",r("studio_lamp_floor")],["table",r("studio_lamp_table")],["pendant",r("studio_lamp_pendant")],["wall",r("studio_lamp_wall")]],c=>i({lamp:c}));case"device":return m`${L(t,r("studio_display"),o.display,c=>i({display:c}))}
          ${O(t,r("studio_mount"),o.mount,[["floor",r("studio_mount_floor")],["surface",r("studio_mount_surface")],["wall",r("studio_mount_wall")]],c=>i({mount:c}))}
          ${o.mount==="floor"?O(t,r("studio_base"),o.base,[["none",r("studio_base_none")],["legs",r("studio_base_legs")],["plinth",r("studio_base_plinth")]],c=>i({base:c})):g}`}};return m`<section class="nf-studio">
    <h3>🛠️ ${r(e.itemId?"studio_title_edit":"studio_title")}</h3>
    ${R(r("studio_hint"))}
    <div class="nf-lib-chips" role="group" aria-label=${r("studio_kind")}>
      ${i_.map(c=>m`<button class="nf-chip" aria-pressed=${o.kind===c} ?disabled=${!!e.itemId&&o.kind!==c} @click=${()=>o.kind!==c&&n.change(s_(o,c))}>${r(`studio_kind_${c}`)}</button>`)}
    </div>
    ${lx(o)}
    <div class="nf-form">
      ${j(t,r("studio_name"),o.name,c=>i({name:c}),{wide:!0,maxlength:60,placeholder:r(`studio_kind_${o.kind}`)})}
      ${s("studio_width",o.w,"w")} ${s("studio_depth",o.d,"d")} ${s("studio_height",o.h,"h")} ${l()}
      ${u_(t,r(o.kind==="lamp"?"studio_color_lamp_body":"studio_color_body"),o.body,c=>i({body:c}))}
      ${o.kind==="cabinet"||o.kind==="shelf"||o.kind==="lamp"||o.display?u_(t,r(o.kind==="lamp"?"studio_color_shade":o.kind==="device"?"studio_color_display":o.kind==="shelf"?"studio_color_boards":"studio_color_front"),o.front,c=>i({front:c})):g}
    </div>
    ${e.error?m`<p class="nf-sub nf-warn">${e.error}</p>`:g}
    ${X(m`<button class="nf-btn nf-primary" ?disabled=${e.busy||!t.admin} @click=${()=>n.save()}>${r(e.itemId?"studio_save":"studio_place")}</button>`,m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>n.close()}>${r("cancel")}</button>`)}
  </section>`}var cx={room_no_area:"\u{1F3F7}\uFE0F",areas_unplaced:"\u2795",devices_unplaced:"\u{1F4CD}",rooms_overlap:"\u29C9",opening_off_wall:"\u{1F6AA}",entity_missing:"\u2753",furniture_entity_missing:"\u2753",standby:"\u{1F50C}",battery_low:"\u{1FAAB}"};function ux(t,e){let n=e.kind==="room_no_area"&&e.vars.area?"check_room_no_area_named":`check_${e.kind}`;return t.t(n,e.vars)}function dx(t,e){let n=t.t;switch(e.fix.do){case"set_area":return n("check_fix_set_area",{area:String(e.vars.area)});case"add_area_rooms":return n("check_fix_add_rooms");case"place_devices":return n("check_fix_place",{n:e.fix.entityIds.length});case"remove_placements":return n("check_fix_remove",{n:e.fix.entityIds.length});default:return n("check_fix_show")}}function p_(t,e,n){let r=t.t,o=t.doc.floors.filter(i=>e.some(s=>s.floorId===i.id));return m`<section class="nf-check-panel">
    <div class="nf-h3row"><h3>✓ ${r("check_title")}</h3><button class="nf-btn nf-field-btn" title=${r("close")} @click=${()=>n.close()}>✕</button></div>
    ${e.length===0?m`<p class="nf-sub nf-check-ok">✅ ${r("check_all_good")}</p>`:m`${R(r("check_hint",{n:e.length}))}
        ${o.map(i=>m`<h4 class="nf-check-floor">${i.name}</h4>
            <ul class="nf-check-list">
              ${e.filter(s=>s.floorId===i.id).map(s=>m`<li>
                    <span class="nf-check-icon" aria-hidden="true">${cx[s.kind]}</span><span class="nf-check-text">${ux(t,s)}</span>
                    <button class="nf-btn ${s.changes?"nf-primary":""}" ?disabled=${s.changes&&!t.admin} @click=${()=>n.fix(s)}>${dx(t,s)}</button>
                    ${s.entityIds?hx(t,s.entityIds,n):g}
                  </li>`)}
            </ul>`)}`}
    ${(t.doc.settings.check_ignore??[]).length>0?m`<p class="nf-sub"><button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.resetIgnored()}>${r("check_reset_ignored",{n:t.doc.settings.check_ignore.length})}</button></p>`:g}
  </section>`}function hx(t,e,n){let r=t.t;return m`<details class="nf-check-names">
    <summary>${r("check_show_devices",{n:e.length})}</summary>
    <p class="nf-check-all"><button class="nf-btn" ?disabled=${!t.admin} @click=${()=>n.ignore(e)}>${r("check_ignore_all",{n:e.length})}</button></p>
    <ul>
      ${e.map(o=>m`<li><span class="nf-check-name" title=${o}>${t.hass?G(t.hass,o):o}</span> <small>${o}</small>
        <button class="nf-btn nf-check-ignore" ?disabled=${!t.admin} @click=${()=>n.ignore([o])}>${r("check_fix_ignore")}</button></li>`)}
    </ul>
  </details>`}var f_=(t,e)=>m`<button class="nf-btn nf-check-open" title=${t.t("check_open_hint")} @click=${e}>✓ ${t.t("check_open")}</button>`;function m_(t,e){if(!e||!Number.isFinite(e.value))return null;let n=/^\s*([^/\s]+)\s*\/\s*kWh\s*$/i.exec(e.unit);if(!n)return null;let r=/^(ct|cent|cents|c)$/i.test(n[1]),o=r||/^eur$/i.test(n[1])?"\u20AC":n[1];return{value:Math.round(t*e.value*(r?1:100))/100,currency:o}}var __=20,g_=new WeakMap;function px(t){let e=t.entities??{},n=g_.get(e);if(!n){n=new Map;for(let[r,o]of Object.entries(e))o.device_id&&r.startsWith("sensor.")&&t.states[r]?.attributes.device_class==="battery"&&!n.has(o.device_id)&&n.set(o.device_id,r);g_.set(e,n)}return n}function fx(t,e){let n=t.entities?.[e]?.device_id,r=n?px(t).get(n):void 0;if(r){let s=Number(t.states[r]?.state);if(Number.isFinite(s))return s}let o=t.states[e]?.attributes;if(!o||o.battery_level===void 0&&o.battery===void 0)return null;let i=Number(o.battery_level??o.battery);return Number.isFinite(i)?i:null}function mx(t){let e=[],n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);for(let r of t.placements)e.push({entity:r.entity_id,x:r.x,z:r.z,room:null});for(let r of t.furniture)for(let o of[r.entity,r.power])n(o)&&e.push({entity:o,x:r.x,z:r.z,room:null});for(let r of t.openings)for(let o of[r.contact,r.contact2,r.tilt,r.tilt2,r.cover,r.cover2,r.lock])n(o)&&e.push({entity:o,x:NaN,z:NaN,room:r.room_id});return e}var gx=(t,e,n)=>t.rooms.find(r=>r.points.length>=3&&W([e,n],r.points));function b_(t,e){let n=new Set,r=[];for(let o of e.floors)for(let i of mx(o)){let s=t.entities?.[i.entity]?.device_id??i.entity;if(n.has(s))continue;let a=fx(t,i.entity);a!==null&&(n.add(s),r.push({entity:i.entity,level:a,floorId:o.id,roomId:i.room??gx(o,i.x,i.z)?.id??null}))}return r.sort((o,i)=>o.level-i.level)}var sr=.08;function y_(t,e){let n=1/0;for(let r=0;r<e.length;r++){let o=e[r],i=e[(r+1)%e.length],[s,a]=[i[0]-o[0],i[1]-o[1]],l=s*s+a*a,c=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*s+(t[1]-o[1])*a)/l)):0;n=Math.min(n,Math.hypot(t[0]-(o[0]+s*c),t[1]-(o[1]+a*c)))}return n}var w_=t=>({x0:Math.min(...t.map(e=>e[0])),x1:Math.max(...t.map(e=>e[0])),z0:Math.min(...t.map(e=>e[1])),z1:Math.max(...t.map(e=>e[1]))});function _x(t,e,n=.2){if(t.points.length<3||e.points.length<3)return!1;let[r,o]=[w_(t.points),w_(e.points)],i=Math.max(r.x0,o.x0)+sr,s=Math.min(r.x1,o.x1)-sr,a=Math.max(r.z0,o.z0)+sr,l=Math.min(r.z1,o.z1)-sr;if(s<=i||l<=a)return!1;for(let c=i;c<=s+1e-9;c+=Math.min(n,s-i||n))for(let u=a;u<=l+1e-9;u+=Math.min(n,l-a||n)){let d=[c,u];if(W(d,t.points)&&W(d,e.points)&&y_(d,t.points)>sr&&y_(d,e.points)>sr)return!0}return!1}function k_(t){let e=new Set(["id","type","variant","name","icon","picture","vehicle","room_id","wall"]),n=r=>typeof r=="string"&&/^[a-z_]+\.[a-z0-9_]+$/.test(r);return Object.entries(t).flatMap(([r,o])=>e.has(r)?[]:Array.isArray(o)?o.filter(n):n(o)?[o]:[])}var v_=t=>k_(t),bx=3,yx=new Set(["off","standby","idle"]);function wx(t,e,n,r){let o=e.energy.tariff,i=o?t.states[o]:void 0,s=i?{value:Number(i.state),unit:String(i.attributes.unit_of_measurement??"")}:null,a=new Set,l=(c,u)=>{if(!c||c==="none"||a.has(c))return;a.add(c);let d=t.states[c]?.state;if(!d||!yx.has(d)||c.startsWith("light."))return;let p=ep(t,c),h=p?$e(t.states[p]):null;if(h===null||h<=bx)return;let f=m_(h*24*365/1e3,s);r.push({kind:"standby",floorId:n.id,vars:{name:G(t,c),w:Math.round(h),cost:f?`${f.value.toFixed(0)} ${f.currency}`:`${Math.round(h*24*365/1e3)} kWh`},fix:u,changes:!1})};for(let c of n.furniture)l(c.entity,{do:"show_furniture",furnitureId:c.id});for(let c of n.placements){let u=n.rooms.find(d=>d.points.length>=3&&W([c.x,c.z],d.points));u&&l(c.entity_id,{do:"show_room",roomId:u.id})}}function x_(t,e){let n=[],r=e?.areas,o=new Set(t.settings.check_ignore??[]),i=new Set(t.floors.flatMap(s=>s.rooms.map(a=>a.area_id)).filter(s=>!!s));for(let s of t.floors){if(s.layer)continue;for(let l of s.rooms){if(l.area_id)continue;let c=Object.values(r??{}).find(u=>u.name.trim().toLowerCase()===l.name.trim().toLowerCase()&&!i.has(u.area_id));n.push(c?{kind:"room_no_area",floorId:s.id,vars:{room:l.name,area:c.name},fix:{do:"set_area",roomId:l.id,areaId:c.area_id},changes:!0}:{kind:"room_no_area",floorId:s.id,vars:{room:l.name,area:""},fix:{do:"show_room",roomId:l.id},changes:!1})}let a=rr(t,s,r);if(a.length&&n.push({kind:"areas_unplaced",floorId:s.id,vars:{n:a.length,names:a.map(l=>l.name).join(", ")},fix:{do:"add_area_rooms"},changes:!0}),e){let l=je(e,[s]),c=Sr(e,[s]);for(let u of s.rooms){if(!u.area_id)continue;let d=qi(s,u);for(let f of s.furniture)if(W([f.x,f.z],u.points))for(let _ of v_(f))d.add(_);for(let f of s.openings)if(f.room_id===u.id){for(let _ of k_(f))d.add(_);for(let _ of Object.values(c.get(f.id)??{}))typeof _=="string"&&d.add(_)}for(let f of s.furniture){let _=l.get(f.id);if(_&&W([f.x,f.z],u.points))for(let b of[_.entity,_.power])typeof b=="string"&&d.add(b)}let p=ke(e,u).filter(f=>Pt(Ue(e,f))),h=Rn(e,p).map(f=>f.primary).filter(f=>!d.has(f)&&!o.has(f));h.length&&n.push({kind:"devices_unplaced",floorId:s.id,vars:{room:u.name,n:h.length},fix:{do:"place_devices",roomId:u.id,entityIds:h},entityIds:h,changes:!0})}}for(let l=0;l<s.rooms.length;l++)for(let c=l+1;c<s.rooms.length;c++){let[u,d]=[s.rooms[l],s.rooms[c]];_x(u,d)&&n.push({kind:"rooms_overlap",floorId:s.id,vars:{a:u.name,b:d.name},fix:{do:"show_room",roomId:d.id},changes:!1})}if(s.openings.length){let l=we(s.rooms,xe(t.settings),s.walls??[]).walls;for(let c of s.openings){let u=He(c,s.rooms,s.walls??[]);(!u||!Ht(l,c,u))&&n.push({kind:"opening_off_wall",floorId:s.id,vars:{room:s.rooms.find(d=>d.id===c.room_id)?.name??""},fix:{do:"show_opening",openingId:c.id},changes:!1})}}if(e&&wx(e,t,s,n),e&&Object.keys(e.states).length){let l=s.placements.map(c=>c.entity_id).filter(c=>!e.states[c]);l.length&&n.push({kind:"entity_missing",floorId:s.id,vars:{n:l.length,ids:l.slice(0,3).join(", ")},fix:{do:"remove_placements",entityIds:l},changes:!0});for(let c of s.furniture){let u=v_(c).filter(d=>d!=="none"&&!e.states[d]);u.length&&!(he(c.type)&&!c.entity)&&n.push({kind:"furniture_entity_missing",floorId:s.id,vars:{id:u[0]},fix:{do:"show_furniture",furnitureId:c.id},changes:!1})}}}if(e)for(let s of b_(e,t)){if(s.level>=__)break;n.push({kind:"battery_low",floorId:s.floorId,vars:{name:G(e,s.entity),level:Math.round(s.level)},fix:s.roomId?{do:"show_room",roomId:s.roomId}:{do:"show_floor"},changes:!1})}return n}var ne=t=>t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Tt=t=>t.map(([e,n])=>`${e.toFixed(3)},${n.toFixed(3)}`).join(" ");function rc(t,e,n,r,o={}){let i=we(e.rooms,xe(t.settings),e.walls??[]).walls,s=[...e.rooms.flatMap(y=>y.points),...i.flatMap(y=>y.footprint)];if(!s.length)return"";let[a,l]=[Math.min(...s.map(y=>y[0])),Math.max(...s.map(y=>y[0]))],[c,u]=[Math.min(...s.map(y=>y[1])),Math.max(...s.map(y=>y[1]))],d=1.2,p=[];for(let y of e.rooms)p.push(`<polygon points="${Tt(y.points)}" fill="#f4f4f4" stroke="none"/>`);for(let y of i)p.push(`<polygon points="${Tt(y.footprint)}" fill="#222" stroke="#222" stroke-width="0.01"/>`);for(let y of e.openings){let x=He(y,e.rooms,e.walls??[]),k=x?Ht(i,y,x):null;if(!k)continue;let{wall:S,s:$}=k,E=Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1]);if(E<1e-6)continue;let T=[(S.b[0]-S.a[0])/E,(S.b[1]-S.a[1])/E],P=[-T[1],T[0]],z=(ee,V)=>[S.a[0]+T[0]*ee+P[0]*V,S.a[1]+T[1]*ee+P[1]*V],[H,N]=[$-y.width/2,$+y.width/2],[B,J]=[S.left+.01,-(S.right+.01)];if(p.push(`<polygon points="${Tt([z(H,B),z(N,B),z(N,J),z(H,J)])}" fill="#fff"/>`),y.type==="garage"){let ee=(S.left-S.right)/2;p.push(`<polyline points="${Tt([z(H,ee),z(N,ee)])}" fill="none" stroke="#555" stroke-width="0.02" stroke-dasharray="0.12 0.08"/>`)}else if(y.type==="window"){let ee=(S.left-S.right)/2;p.push(`<polyline points="${Tt([z(H,ee),z(N,ee)])}" fill="none" stroke="#222" stroke-width="0.03"/>`),p.push(`<polyline points="${Tt([z(H,B-.01),z(N,B-.01)])}" fill="none" stroke="#222" stroke-width="0.015"/><polyline points="${Tt([z(H,J+.01),z(N,J+.01)])}" fill="none" stroke="#222" stroke-width="0.015"/>`)}else{let ee=x.room,V=$t(ee,x.edge,y.offset-y.width/2),ce=$t(ee,x.edge,y.offset+y.width/2),Be=Math.hypot(ce[0]-V[0],ce[1]-V[1])||1,Ro=[(ce[0]-V[0])/Be,(ce[1]-V[1])/Be],ys=_e(ee.points)>=0?1:-1,hc=[-Ro[1]*ys,Ro[0]*ys],pc=S.free||S.roomLeft===ee.id?[S.left,S.right]:[S.right,S.left],fc=y.swing==="out",mc=xt(y,S.exterior),ur=fc?-pc[1]:pc[0],dr=(hr,Fo)=>[hr[0]+hc[0]*Fo,hr[1]+hc[1]*Fo],Eo=(y.leaves===2?.5:1)*Be,Ao=(hr,Fo)=>{let[ws,vs]=dr(hr,ur),[_c,bc]=dr(Fo,ur),To=dr(hr,ur+(fc?-Eo:Eo)),Z_=(To[0]-ws)*(bc-vs)-(To[1]-vs)*(_c-ws)>0?1:0;return`<path d="M ${ws} ${vs} L ${To[0]} ${To[1]} A ${Eo} ${Eo} 0 0 ${Z_} ${_c} ${bc}" fill="none" stroke="#555" stroke-width="0.015"/>`},j_=y.hinge==="left"==ys>0,gc=[(V[0]+ce[0])/2,(V[1]+ce[1])/2];mc==="passage"||(mc==="sliding"?p.push(`<polyline points="${Tt([dr(V,ur),dr(ce,ur)])}" fill="none" stroke="#555" stroke-width="0.015"/>`):y.leaves===2?p.push(Ao(V,gc),Ao(ce,gc)):p.push(j_?Ao(V,ce):Ao(ce,V)))}}if(o.furniture)for(let y of e.furniture)y.w<=0||y.d<=0||p.push(`<polygon points="${Tt(kr(y))}" fill="#e6e6e6" stroke="#8a8a8a" stroke-width="0.02"/>`);let h=new Map(n.map(y=>[y.roomId,y]));for(let y of o.names===!1?[]:e.rooms){if(y.points.length<3)continue;let[x,k]=ve(y.points),S=h.get(y.id);p.push(`<text x="${x}" y="${k-.08}" font-size="0.32" text-anchor="middle" font-weight="600">${ne(y.name)}</text>`),S&&p.push(`<text x="${x}" y="${k+.32}" font-size="0.24" text-anchor="middle" fill="#444">${ne(r.area(S.living>0?S.living:S.floor))}</text>`)}let f=(y,x,k,S,$,E)=>{let P=(y+k)/2,z=(x+S)/2,H=E?`M ${y-.15} ${x} L ${y+.15} ${x} M ${k-.15} ${S} L ${k+.15} ${S}`:`M ${y} ${x-.15} L ${y} ${x+.15} M ${k} ${S-.15} L ${k} ${S+.15}`,N=E?`<text x="${P-.25}" y="${z}" font-size="0.26" text-anchor="middle" transform="rotate(-90 ${P-.25} ${z})">${ne($)}</text>`:`<text x="${P}" y="${z+.4}" font-size="0.26" text-anchor="middle">${ne($)}</text>`;return`<path d="M ${y} ${x} L ${k} ${S} ${H}" stroke="#222" stroke-width="0.015" fill="none"/>${N}`};o.dimensions!==!1&&(p.push(f(a,u+.5,l,u+.5,r.length(l-a),!1)),p.push(f(a-.5,c,a-.5,u,r.length(u-c),!0))),o.dimensions!==!1&&p.push(`<path d="M ${l-1} ${c-.7} L ${l} ${c-.7}" stroke="#222" stroke-width="0.06"/><text x="${l-.5}" y="${c-.85}" font-size="0.22" text-anchor="middle">${ne(r.length(1))}</text>`);let _=o.dimensions===!1?.4:d,[b,w]=[l-a+2*_,u-c+2*_],v=`${a-_} ${c-_} ${b} ${w}`;if(o.px){let[y,x]=[Math.round(o.px),Math.round(o.px*w/b)];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${v}" width="${y}" height="${x}" font-family="system-ui, sans-serif"><rect x="${a-_}" y="${c-_}" width="${b}" height="${w}" fill="#fff"/>${p.join("")}</svg>`}return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${v}" style="width:${(b*10).toFixed(1)}mm" font-family="system-ui, sans-serif">${p.join("")}</svg>`}function $_(t,e){let n=t.floors.filter(l=>!l.layer&&l.rooms.length),r=[],o=[],i=[];for(let l of[...n].sort((c,u)=>c.elevation-u.elevation)){let c=bn(t,l);i.push(...c);let u=nr(c);r.push(`<section class="page"><h1>${ne(l.name)}</h1><div class="sub">${ne(e.living)}: ${ne(e.area(u.living))}</div>${rc(t,l,c,e)}</section>`),o.push(`<tr class="floor"><th colspan="4">${ne(l.name)}</th></tr>`);for(let d of c){let p=l.rooms.find(h=>h.id===d.roomId);o.push(`<tr><td>${ne(p.name)}</td><td>${ne(e.area(d.floor))}</td><td>${d.low>.05?ne(e.area(d.low)):""}</td><td><b>${ne(e.area(d.living))}</b></td></tr>`)}o.push(`<tr class="sum"><td>${ne(e.total)}</td><td>${ne(e.area(u.floor))}</td><td>${u.low>.05?ne(e.area(u.low)):""}</td><td><b>${ne(e.area(u.living))}</b></td></tr>`)}let s=nr(i),a=`<section class="page"><h1>${ne(e.living)}</h1><table><thead><tr><th>${ne(e.room)}</th><th>${ne(e.floorArea)}</th><th>${ne(e.low)}</th><th>${ne(e.living)}</th></tr></thead><tbody>${o.join("")}<tr class="grand"><td>${ne(e.total)}</td><td>${ne(e.area(s.floor))}</td><td>${s.low>.05?ne(e.area(s.low)):""}</td><td><b>${ne(e.area(s.living))}</b></td></tr></tbody></table><p class="note">${ne(e.note)}</p></section>`;return`<!doctype html><html><head><meta charset="utf-8"><title>${ne(e.title)}</title><style>
    body { font-family: system-ui, sans-serif; color: #111; margin: 0; background: #fff; }
    .page { page-break-after: always; padding: 12mm; }
    .page:last-child { page-break-after: auto; }
    h1 { font-size: 18pt; margin: 0 0 2mm; }
    .sub { color: #555; margin-bottom: 4mm; }
    svg { display: block; max-width: 100%; max-height: 240mm; height: auto; }
    table { border-collapse: collapse; width: 100%; font-size: 11pt; }
    th, td { text-align: left; padding: 1.5mm 2mm; border-bottom: 0.2mm solid #ccc; }
    td:not(:first-child), th:not(:first-child) { text-align: right; }
    tr.floor th { background: #eee; }
    tr.sum td { border-bottom: 0.4mm solid #888; }
    tr.grand td { font-size: 12pt; border-top: 0.6mm solid #222; }
    .note { color: #666; font-size: 9pt; margin-top: 4mm; }
    @media print { .page { padding: 0; } }
  </style></head><body>${r.join("")}${a}<script>window.addEventListener("load", () => setTimeout(() => window.print(), 300));<\/script></body></html>`}var oc=2400;function S_(t,e,n,r){let o={...r,px:oc};return rc(t,e,bn(t,e),n,o)}function vx(t){let e=Number(/\swidth="(\d+)"/.exec(t)?.[1]),n=Number(/\sheight="(\d+)"/.exec(t)?.[1]);return[e||oc,n||oc]}async function M_(t){let[e,n]=vx(t),r=URL.createObjectURL(new Blob([t],{type:"image/svg+xml;charset=utf-8"}));try{let o=new Image;o.decoding="async",await new Promise((s,a)=>{o.onload=()=>s(),o.onerror=()=>a(new Error("the plan image could not be drawn")),o.src=r});let i=document.createElement("canvas");return i.width=e,i.height=n,i.getContext("2d").drawImage(o,0,0,e,n),await new Promise((s,a)=>i.toBlob(l=>l?s(l):a(new Error("no image")),"image/png"))}finally{URL.revokeObjectURL(r)}}var R_=t=>`${t.normalize("NFKD").replace(/[^\w]+/g,"-").replace(/^-+|-+$/g,"").toLowerCase()||"floor"}.png`;function E_(t,e){let n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=e,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}var A_="nextfloor.tour_done",kx=[["Ctrl Z","keys_undo"],["Ctrl Shift Z \xB7 Ctrl Y","keys_redo"],["Ctrl D","keys_duplicate"],["Entf / Delete","keys_delete"],["\u2190 \u2191 \u2192 \u2193","keys_nudge"],["Shift + \u2190\u2191\u2192\u2193","keys_nudge_10"],["Alt + \u2190\u2191\u2192\u2193","keys_nudge_1"],["R \xB7 Shift R","keys_rotate"],["L","keys_lock"],["Enter","keys_close_shape"],["Esc","keys_escape"],["Shift","keys_straight"],["?","keys_sheet"]],bs=[["tour_1_title","tour_1"],["tour_2_title","tour_2"],["tour_3_title","tour_3"],["tour_4_title","tour_4"]];function F_(){try{return localStorage.getItem(A_)!=="1"}catch{return!1}}function T_(){try{localStorage.setItem(A_,"1")}catch{}}function z_(t,e){return m`<div class="nf-keys" role="dialog" aria-label=${t("keys_title")} @click=${n=>n.target===n.currentTarget&&e()}>
    <div class="nf-keys-card">
      <div class="nf-h3row"><h3>⌨ ${t("keys_title")}</h3><button class="nf-btn nf-field-btn" aria-label=${t("close")} @click=${e}>✕</button></div>
      <dl>
        ${kx.map(([n,r])=>m`<dt>${n.split(" \xB7 ").map((o,i)=>m`${i?" \xB7 ":""}<kbd>${o}</kbd>`)}</dt><dd>${t(r)}</dd>`)}
      </dl>
    </div>
  </div>`}function xx(t){return{rect:t("tool_rect"),free:t("tool_polygon"),rooms:t("area_rooms",{n:"\u2026"}).replace(/\s*\(…\)\s*$/,""),opening:t("tool_opening"),furniture:t("tool_furniture"),split:t("split_3d"),check:t("check_open")}}function P_(t,e,n){if(e===null||e>=bs.length)return g;let[r,o]=bs[e],i=e===bs.length-1;return m`<div class="nf-tour" role="dialog" aria-label=${t("tour_title")}>
    <div class="nf-tour-step">${e+1} / ${bs.length}</div>
    <h3>${t(r)}</h3>
    <p>${t(o,xx(t))}</p>
    <div class="nf-actions">
      ${e>0?m`<button class="nf-btn" @click=${()=>n(e-1)}>‹ ${t("tour_back")}</button>`:g}
      <button class="nf-btn nf-primary" @click=${()=>n(i?null:e+1)}>${t(i?"tour_done":"tour_next")}</button>
      ${i?g:m`<button class="nf-link" @click=${()=>n(null)}>${t("tour_skip")}</button>`}
    </div>
  </div>`}var Ut="https://github.com/therealMRBK/NextFloor";var $o=t=>`/api/nextfloor/mesh/${encodeURIComponent(t)}`,ar=12*1024*1024;function D_(t,e){let n=new Map;for(let r of t)for(let o of r.items){if(!o.mesh)continue;let i=n.get(o.mesh)??[];n.set(o.mesh,[...i,`${nt(o,fe(r.id,o.id),e)} \xB7 ${Ne(r,e)}`])}return[...n].map(([r,o])=>({id:r,items:o})).sort((r,o)=>r.items[0].localeCompare(o.items[0]))}function lr(t){return t<1024*1024?`${Math.max(1,Math.round(t/1024))} KB`:`${(t/(1024*1024)).toFixed(1)} MB`}function ic(t){return t===201||t===200||t===204?null:t===401||t===403?"forbidden":t===413?"too_large":t===400?"not_glb":t===404?"bad_id":"other"}var $x=40,Sx=(t=ar)=>Math.floor(t*.8/$x),sc=[{key:"light",triangles:3e4},{key:"normal",triangles:8e4},{key:"fine",triangles:15e4}];function I_(t){return Math.min(sc.find(e=>e.key===t).triangles,Sx())}var ac=class extends se{static properties={hass:{attribute:!1},packs:{attribute:!1},_present:{state:!0},_draft:{state:!0},_busy:{state:!0},_message:{state:!0}};checked=new Set;run=0;constructor(){super(),this._present={},this._draft=null,this._busy=!1,this._message=null}t(e,n){return Ae(this.hass,e,n)}get slots(){return D_(this.packs??[],this.hass?.language??"en")}willUpdate(){for(let e of this.slots)this.checked.has(e.id)||!this.hass?.fetchWithAuth||(this.checked.add(e.id),this.askPresence(e.id))}async askPresence(e){let n=await this.hass.fetchWithAuth($o(e),{method:"HEAD"}).catch(()=>null),r=n&&n.status!==405?n.ok:await this.hass.fetchWithAuth($o(e)).then(o=>o.ok,()=>!1);this._present={...this._present,[e]:r?"yes":"no"}}async choose(e,n){if(n){this._message=null,this._busy=!0;try{let r=await n.arrayBuffer(),i=await(await mn()).inspectModel(r);this._draft={slot:e,fileName:n.name,data:r,info:i,turns:0,paint:i.paint,detail:"normal",colour:"#1d5bd6",result:null},await this.refresh()}catch(r){this._draft=null,this._message={ok:!1,text:this.readError(r)}}finally{this._busy=!1}}}readError(e){let r=`model_error_${e?.reason}`,o=this.t(r);return o===r?this.t("model_error_unreadable",{detail:String(e?.message??e)}):o}async refresh(){let e=this._draft;if(!e)return;let n=++this.run;this._busy=!0;try{let r=await mn(),{glb:o,triangles:i}=await r.prepareModel(e.data,{turns:e.turns,paint:e.paint,maxTriangles:I_(e.detail)}),s=await r.previewModel(o,e.colour);n===this.run&&this._draft===e&&(this._draft={...e,result:{glb:o,triangles:i,picture:s}})}catch(r){n===this.run&&(this._message={ok:!1,text:this.readError(r)})}finally{n===this.run&&(this._busy=!1)}}change(e){this._draft&&(this._draft={...this._draft,...e},this.refresh())}turn(e){this._draft&&this.change({turns:(this._draft.turns+e+4)%4})}togglePaint(e,n){if(!this._draft)return;let r=this._draft.paint.filter(o=>o!==e);this.change({paint:n?[...r,e]:r})}async upload(){let e=this._draft;if(!(!e?.result||!this.hass?.fetchWithAuth)){if(e.result.glb.byteLength>ar){this._message={ok:!1,text:this.t("model_error_too_large",{max:lr(ar)})};return}this._busy=!0;try{let n=await this.hass.fetchWithAuth($o(e.slot.id),{method:"POST",body:e.result.glb}),r=ic(n.status);if(r){this._message={ok:!1,text:this.t(`model_upload_${r}`,{max:lr(ar)})};return}this._present={...this._present,[e.slot.id]:"yes"},this._message={ok:!0,text:this.t("model_uploaded",{id:e.slot.id,size:lr(e.result.glb.byteLength)})},this._draft=null}catch(n){this._message={ok:!1,text:this.t("model_upload_other",{detail:String(n?.message??n)})}}finally{this._busy=!1}}}async removeModel(e){if(!this.hass?.fetchWithAuth||!confirm(this.t("model_remove_confirm",{id:e.id})))return;let n=await this.hass.fetchWithAuth($o(e.id),{method:"DELETE"}),r=ic(n.status);this._present={...this._present,[e.id]:r?this._present[e.id]:"no"},this._message=r?{ok:!1,text:this.t(`model_upload_${r}`,{max:lr(ar)})}:{ok:!0,text:this.t("model_removed",{id:e.id})}}row(e){let n=this._present[e.id]??"unknown",r=n==="yes"?this.t("model_present"):n==="no"?this.t("model_missing"):"\u2026";return m`<div class="nf-model">
      <div>
        <b>${e.items[0]}</b>${e.items.length>1?m` <span class="nf-sub">+${e.items.length-1}</span>`:g}
        <span class="nf-sub">${e.id}.glb · <span class="nf-model-${n}">${r}</span></span>
      </div>
      <div class="nf-model-actions">
        <label class="nf-btn nf-primary">
          ${this.t(n==="yes"?"model_replace":"model_add")}
          <input type="file" accept=".glb,model/gltf-binary" hidden @change=${o=>this.picked(e,o)} />
        </label>
        ${n==="yes"?m`<button class="nf-btn nf-danger" @click=${()=>this.removeModel(e)}>${this.t("model_remove")}</button>`:g}
      </div>
    </div>`}picked(e,n){let r=n.target,o=r.files?.[0];r.value="",this.choose(e,o)}editor(e){let{info:n,result:r}=e,o=n.size.map(i=>i.toFixed(2)).join(" \xD7 ");return m`<section class="nf-model-edit">
      <h4>${e.slot.items[0]}</h4>
      <p class="nf-sub">${e.fileName} · ${this.t("model_info",{triangles:n.triangles.toLocaleString(this.hass?.language),size:o})}</p>
      <div class="nf-model-body">
        <div class="nf-model-picture">${r?m`<img src=${r.picture} alt="" />`:m`<span class="nf-sub">${this.t("loading")}</span>`}</div>
        <div class="nf-model-options">
          <div class="nf-field">
            <span>${this.t("model_front")}</span>
            <div class="nf-actions">
              <button class="nf-btn" @click=${()=>this.turn(-1)}>↺ 90°</button>
              <button class="nf-btn" @click=${()=>this.turn(1)}>↻ 90°</button>
            </div>
            <small class="nf-sub">${this.t("model_front_hint")}</small>
          </div>
          <div class="nf-field">
            <span>${this.t("model_paint")}</span>
            ${n.materials.map(i=>m`<label class="nf-check"><input type="checkbox" .checked=${e.paint.includes(i.name)} @change=${s=>this.togglePaint(i.name,s.target.checked)} /> ${i.name}</label>`)}
            <label class="nf-check"><input type="color" .value=${e.colour} @change=${i=>this.change({colour:i.target.value})} /> ${this.t("model_paint_preview")}</label>
          </div>
          <div class="nf-field">
            <span>${this.t("model_detail")}</span>
            <div class="nf-seg">${sc.map(i=>m`<button aria-pressed=${e.detail===i.key} @click=${()=>this.change({detail:i.key})}>${this.t(`model_detail_${i.key}`)}</button>`)}</div>
            ${r?m`<small class="nf-sub">${this.t("model_result",{triangles:r.triangles.toLocaleString(this.hass?.language),size:lr(r.glb.byteLength)})}</small>`:g}
          </div>
        </div>
      </div>
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!r||this._busy} @click=${()=>this.upload()}>${this.t("model_upload")}</button>
        <button class="nf-btn" @click=${()=>this._draft=null}>${this.t("cancel")}</button>
      </div>
    </section>`}render(){let e=this.slots;return e.length===0||!(this.hass?.user?.is_admin??!1)?g:m`<section class="nf-ext-card">
      <h3>${this.t("models")}</h3>
      <p class="nf-sub">${this.t("models_hint")}</p>
      ${e.map(n=>this.row(n))}
      ${this._draft?this.editor(this._draft):g}
      ${this._busy&&!this._draft?m`<p class="nf-sub">${this.t("loading")}</p>`:g}
      ${this._message?m`<p class="nf-sub ${this._message.ok?"nf-notice":"nf-pack-error"}">${this._message.text}</p>`:g}
      <p class="nf-sub">${this.t("models_licence")}</p>
    </section>`}static styles=[Qe,mt,de`
      :host {
        display: block;
      }
      .nf-model {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 8px 12px;
        padding: 8px 0;
        border-top: 1px solid var(--nf-line);
      }
      .nf-model > div:first-child {
        display: grid;
        gap: 2px;
      }
      .nf-model-actions {
        display: flex;
        gap: 8px;
      }
      .nf-model-yes {
        color: #41c46b;
      }
      .nf-model-no {
        color: var(--nf-muted);
      }
      .nf-model-edit {
        margin-top: 10px;
        padding: 12px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      .nf-model-body {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
      }
      .nf-model-picture {
        display: grid;
        place-items: center;
        width: 220px;
        height: 220px;
        border-radius: 12px;
        background: var(--nf-chrome-solid);
      }
      .nf-model-picture img {
        width: 220px;
        height: 220px;
      }
      .nf-model-options {
        display: grid;
        flex: 1;
        min-width: 220px;
        gap: 10px;
        align-content: start;
      }
      .nf-field {
        display: grid;
        gap: 4px;
      }
    `]};customElements.get("nf-model-upload")||customElements.define("nf-model-upload",ac);var cr="therealMRBK/NextFloor-Plugins",O_=`https://raw.githubusercontent.com/${cr}/main/index.json`,Mx=t=>/^https:\/\/raw\.githubusercontent\.com\/[\w.-]+\/[\w.-]+\/[0-9a-f]{40}\/[\w./-]+\.m?js$/.test(t),De=(t,e)=>typeof t=="string"?t.trim().slice(0,e):"";function Rx(t){let e=t?.plugins;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=De(o.id,64),s=De(o.url,300),a=De(o.sha256,64).toLowerCase(),l=De(o.name,60),c=De(o.version,40),u=De(o.homepage,200);!/^[\w.-]+$/.test(i)||n.has(i)||!l||!c||!Mx(s)||!/^[0-9a-f]{64}$/.test(a)||(n.add(i),r.push({id:i,name:l,description:De(o.description,300),author:De(o.author,60),version:c,homepage:/^https:\/\//.test(u)?u:"",url:s,sha256:a}))}return r}async function L_(t=(...e)=>fetch(...e)){let e=await t(O_,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Rx(await e.json())}function H_(t,e){let n=(e??[]).find(r=>r.id===t.id);return n?n.sha256===t.sha256&&n.url===t.url?"installed":"update":"available"}function C_(t,e){let n=t??[],r={url:e.url,enabled:!0,id:e.id,version:e.version,sha256:e.sha256},o=n.findIndex(i=>i.id===e.id);return o<0?[...n,r]:n.map((i,s)=>s===o?{...r,enabled:i.enabled}:i)}var Ex=(t,e)=>t===`https://raw.githubusercontent.com/${cr}/main/packs/${e}.json`;function Ax(t){let e=t?.packs;if(!Array.isArray(e))return[];let n=new Set,r=[];for(let o of e){if(!o||typeof o!="object")continue;let i=De(o.id,40),s=De(o.url,300),a=De(o.sha256,64).toLowerCase(),l=De(o.name,80);if(!/^[a-z0-9][a-z0-9_.-]{0,39}$/.test(i)||i.startsWith("nextfloor.")||n.has(i)||!l||!Ex(s,i)||!/^[0-9a-f]{64}$/.test(a))continue;n.add(i);let c=(u,d)=>typeof u=="number"&&Number.isInteger(u)&&u>0?u:d;r.push({id:i,name:l,description:De(o.description,400),author:De(o.author,80),release:c(o.release,1),items:c(o.items,0),url:s,sha256:a})}return r.sort((o,i)=>o.name.localeCompare(i.name))}async function W_(t=(...e)=>fetch(...e)){let e=await t(O_,{cache:"no-store"});if(!e.ok)throw new Error(`HTTP ${e.status}`);return Ax(await e.json())}function N_(t,e){let n=e.find(r=>r.id===t.id);return n?(n.release??1)>=t.release?"installed":"update":"available"}var Fx=t=>[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,"0")).join("");async function V_(t,e=(...n)=>fetch(...n)){let n=await e(t.url,{cache:"no-store"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let r=await n.arrayBuffer(),o=globalThis.crypto?.subtle;if(o&&Fx(await o.digest("SHA-256",r))!==t.sha256)throw new Error("checksum mismatch: the file is not the one that was reviewed");return new TextDecoder().decode(r)}var Tx="https://therealmrbk.github.io/NextFloor/builder/",lc=class extends se{static properties={hass:{attribute:!1},packs:{attribute:!1},_msg:{state:!0},_busy:{state:!0},_store:{state:!0},_storeError:{state:!0}};constructor(){super(),this._msg=null,this._busy=!1,this._store=null,this._storeError=null}async loadStore(){this._store="loading",this._storeError=null;try{this._store=await W_()}catch(e){this._store=null,this._storeError=this.t("community_failed",{detail:e?.message??String(e)})}}async installStore(e){this._busy=!0,this._msg=null;try{let n=await yr(this.hass,await V_(e));this._msg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}finally{this._busy=!1}}renderStore(){let e=this.packs??[],n=this._store;return m`<h4>${this.t("community_title")}</h4>
      <p class="nf-sub">
        ${this.t("community_intro")} <a href=${Tx} target="_blank" rel="noopener">${this.t("community_builder")}</a> ·
        <a href=${`https://github.com/${cr}#community-furniture`} target="_blank" rel="noopener">${this.t("community_how")}</a>
      </p>
      ${n===null?m`<div><button class="nf-btn" @click=${()=>{this.loadStore()}}>${this.t("community_load")}</button></div>`:n==="loading"?m`<p class="nf-sub">${this.t("loading")}</p>`:n.length?m`<ul>
                ${n.map(r=>{let o=N_(r,e);return m`<li>
                    <div class="nf-pack-main">
                      <strong>${r.name}</strong>
                      <span class="nf-detail">${r.id} · ${this.t("pack_by",{publisher:r.author,n:r.items})}</span>
                      ${r.description?m`<span class="nf-detail">${r.description}</span>`:g}
                    </div>
                    <button class="nf-btn ${o==="installed"?"":"nf-primary"}" ?disabled=${this._busy||o==="installed"} @click=${()=>{this.installStore(r)}}>
                      ${this.t(o==="installed"?"community_installed":o==="update"?"community_update":"community_install")}
                    </button>
                  </li>`})}
              </ul>`:m`<p class="nf-sub">${this.t("community_none")}</p>`}
      ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}`}t(e,n){return Ae(this.hass,e,n)}changed(){this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))}errorText(e){let{code:n,message:r}=e??{},o=r??String(e),i=`pack_error_${n}`,s=this.t(i,{detail:o});return s===i?this.t("pack_error_other",{detail:o}):s}async importTexts(e){if(!this.hass||!e.length)return 0;this._busy=!0;let n=[],r=[];for(let{label:i,text:s}of e)try{let a=await yr(this.hass,s);n.push(this.t("pack_imported",{name:a.name,publisher:a.publisher,n:a.items}))}catch(a){r.push(i?`${i}: ${this.errorText(a)}`:this.errorText(a))}this._busy=!1,n.length&&this.changed();let o=e.length>1?[this.t("packs_imported_n",{n:n.length,total:e.length})]:[];return this._msg={ok:r.length===0,text:[...o,...n,...r].join(" \xB7 ")},n.length}async importFiles(e){let n=e.target,r=[...n.files??[]];n.value="",await this.importTexts(await Promise.all(r.map(async o=>({label:o.name,text:await o.text()}))))}async importPasted(){let e=this.renderRoot.querySelector("textarea"),n=e?.value.trim()??"";if(!e||!n)return void(this._msg={ok:!1,text:this.t("pack_paste_empty")});try{JSON.parse(n)}catch(r){return void(this._msg={ok:!1,text:this.t("pack_paste_not_json",{detail:r instanceof Error?r.message:String(r)})})}await this.importTexts([{label:"",text:n}])>0&&(e.value="")}async deletePack(e){if(!(!this.hass||!confirm(this.t("pack_remove_confirm",{name:Ne(e,this.hass.language??"de")}))))try{await Bc(this.hass,e.id),this._msg=null,this.changed()}catch(n){this._msg={ok:!1,text:this.errorText(n)}}}render(){let e=(this.packs??[]).filter(o=>!o.builtin),n=(this.packs??[]).length-e.length,r=this.hass?.language??"de";return m`<section class="nf-packs">
      <h3>${this.t("packs_title")}</h3>
      <p class="nf-sub">${this.t("packs_intro",{n})} <a href="${Ut}/blob/main/docs/packs.md" target="_blank" rel="noopener">${this.t("packs_docs")}</a></p>
      ${e.length?m`<ul>
            ${e.map(o=>m`<li>
                <div class="nf-pack-main">
                  <strong>${Ne(o,r)}</strong>
                  <span class="nf-detail">${o.id} · ${this.t("pack_by",{publisher:o.publisher,n:o.items.length})}</span>
                  ${o.description?m`<span class="nf-detail">${o.description}</span>`:g}
                </div>
                <button class="nf-btn" ?disabled=${this._busy} @click=${()=>this.deletePack(o)}>${this.t("pack_remove")}</button>
              </li>`)}
          </ul>`:m`<p class="nf-sub">${this.t("packs_none")}</p>`}
      <label class="nf-btn nf-file">
        ${this.t("pack_import")}
        <input type="file" accept=".nfpack,.json,application/json" multiple hidden ?disabled=${this._busy} @change=${o=>this.importFiles(o)} />
      </label>
      <textarea rows="6" spellcheck="false" aria-label=${this.t("pack_paste")} placeholder=${'{ "format": "nfpack", "version": 1, "id": "myname.kitchen", \u2026 }'}></textarea>
      <div>
        <button class="nf-btn nf-primary" ?disabled=${this._busy} @click=${()=>this.importPasted()}>${this.t("pack_paste")}</button>
      </div>
      ${this._msg?m`<p class=${this._msg.ok?"nf-ok":"nf-error"} role=${this._msg.ok?"status":"alert"}>${this._msg.text}</p>`:g}
      ${this.hass?this.renderStore():g}
    </section>`}static styles=[Qe,mt,de`
      .nf-packs {
        display: grid;
        gap: 10px;
        padding: 16px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      h3 {
        margin: 0;
        font-size: 17px;
      }
      .nf-sub,
      .nf-ok,
      .nf-error {
        margin: 0;
        font-size: 13px;
      }
      .nf-sub {
        color: var(--nf-soft);
      }
      .nf-ok {
        color: var(--success-color, #2e7d32);
      }
      .nf-error {
        color: var(--error-color, #c62828);
        overflow-wrap: anywhere;
      }
      h4 {
        margin: 14px 0 0;
        font-size: 15px;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
      }
      li {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .nf-pack-main {
        flex: 1;
        min-width: 0;
        display: grid;
        gap: 2px;
      }
      .nf-detail {
        font-size: 12px;
        color: var(--nf-soft);
        overflow-wrap: anywhere;
      }
      .nf-file {
        justify-self: start;
        cursor: pointer;
      }
      textarea {
        box-sizing: border-box;
        width: 100%;
        min-height: 110px;
        resize: vertical;
        padding: 8px 10px;
        border: 1px solid var(--nf-line);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: 12px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace;
      }
    `]};customElements.get("nf-pack-manager")||customElements.define("nf-pack-manager",lc);var TO=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);var zx=new Map;var B_=()=>[...zx.values()];var cc=class extends se{static properties={hass:{attribute:!1},plugins:{attribute:!1},_error:{state:!0},_store:{state:!0},_storeError:{state:!0},_storeOpen:{state:!0}};stop=null;constructor(){super(),this._error="",this._storeError="",this._storeOpen=!1}connectedCallback(){super.connectedCallback(),this.stop=ri(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.stop?.()}t(e,n){return Ae(this.hass,e,n)}emit(e){this.dispatchEvent(new CustomEvent("plugins-changed",{detail:e,bubbles:!0,composed:!0}))}add(e){let n=Gs(e.value),r=this.plugins??[];if(!Us(n))return void(this._error=this.t("plugins_url_invalid"));if(r.some(o=>o.url===n))return void(this._error=this.t("plugins_exists"));if(r.length>=20)return void(this._error=this.t("plugins_limit"));this._error="",e.value="",this.emit([...r,{url:n,enabled:!0}])}async toggleStore(){if(this._storeOpen=!this._storeOpen,!(!this._storeOpen||this._store)){this._storeError="";try{this._store=await L_()}catch(e){this._storeError=this.t("store_failed",{error:e instanceof Error?e.message:String(e)})}}}install(e){let n=this.plugins??[],r=n.some(o=>o.id===e.id);if(!r&&n.length>=20)return void(this._error=this.t("plugins_limit"));if(!r&&n.some(o=>o.url===e.url))return void(this._error=this.t("plugins_exists"));window.confirm(this.t("store_confirm",{name:e.name,author:e.author||"?",url:e.url}))&&(this._error="",this.emit(C_(n,e)))}renderStore(){return m`<div class="nf-store">
      <button class="nf-btn" @click=${()=>this.toggleStore()}>${this._storeOpen?this.t("store_close"):this.t("store_open")}</button>
      ${this._storeOpen?m`<p class="nf-sub">${this.t("store_intro")} <a href="https://github.com/${cr}" target="_blank" rel="noopener">${this.t("store_submit")}</a></p>
            ${this._storeError?m`<p class="nf-error" role="alert">${this._storeError}</p>`:g}
            ${!this._store&&!this._storeError?m`<p class="nf-sub">${this.t("plugins_loading")}</p>`:g}
            ${this._store&&!this._store.length?m`<p class="nf-sub">${this.t("store_empty")}</p>`:g}
            <ul>
              ${(this._store??[]).map(e=>{let n=H_(e,this.plugins);return m`<li>
                  <div class="nf-plugin-main">
                    <span><strong>${e.name}</strong> <span class="nf-detail">${e.version}${e.author?` \xB7 ${e.author}`:""}</span></span>
                    ${e.description?m`<span class="nf-detail">${e.description}</span>`:g}
                    ${e.homepage?m`<a class="nf-detail" href=${e.homepage} target="_blank" rel="noopener">${e.homepage}</a>`:g}
                  </div>
                  ${n==="installed"?m`<span class="nf-state ok">${this.t("store_installed")}</span>`:m`<button class="nf-btn" @click=${()=>this.install(e)}>${n==="update"?this.t("store_update"):this.t("store_install")}</button>`}
                </li>`})}
            </ul>`:g}
    </div>`}stateOf(e){let n=B_().find(i=>i.url===e),r=js().filter(i=>i.source===e),o=[...n?.error?[n.error]:[],...r.flatMap(i=>i.errors)];if(n?.state==="error")return{label:this.t("plugins_error"),tone:"err",detail:o.join(" \xB7 ")};if(n?.state==="loading")return{label:this.t("plugins_loading"),tone:"warn",detail:""};if(n?.state==="loaded"&&!r.length)return{label:this.t("plugins_nothing_registered"),tone:"warn",detail:""};if(r.length){let i=r.map(s=>`${s.name}${s.version?` ${s.version}`:""}`).join(", ");return{label:this.t("plugins_loaded"),tone:o.length?"warn":"ok",detail:o.length?`${i} \xB7 ${o.join(" \xB7 ")}`:i}}return{label:this.t("plugins_reload_hint"),tone:"warn",detail:""}}render(){let e=this.plugins??[],n=js().filter(r=>!r.source);return m`<section class="nf-plugins">
      <h3>${this.t("plugins_title")}</h3>
      <p class="nf-sub">${this.t("plugins_intro")} <a href="${Ut}/blob/main/docs/plugins.md" target="_blank" rel="noopener">${this.t("plugins_docs")}</a></p>
      <p class="nf-warn">⚠️ ${this.t("plugins_warning")}</p>
      ${e.length?m`<ul>
            ${e.map((r,o)=>{let i=r.enabled?this.stateOf(r.url):{label:this.t("plugins_off"),tone:"warn",detail:""};return m`<li>
                <label class="nf-check" title=${this.t("plugins_reload_hint")}>
                  <input type="checkbox" .checked=${r.enabled}
                    @change=${s=>this.emit(e.map((a,l)=>l===o?{...a,enabled:s.target.checked}:a))} />
                </label>
                <div class="nf-plugin-main">
                  <code>${r.id?`${r.id}${r.version?` ${r.version}`:""}`:r.url}</code>
                  <span class="nf-state ${i.tone}">${i.label}</span>
                  ${i.detail?m`<span class="nf-detail">${i.detail}</span>`:g}
                </div>
                <button class="nf-btn" @click=${()=>this.emit(e.filter((s,a)=>a!==o))}>${this.t("plugins_remove")}</button>
              </li>`})}
          </ul>`:m`<p class="nf-sub">${this.t("plugins_none")}</p>`}
      ${n.length?m`<p class="nf-sub">${this.t("plugins_from_dashboard")}: ${n.map(r=>`${r.name}${r.version?` ${r.version}`:""}`).join(", ")}</p>`:g}
      ${this.renderStore()}
      <div class="nf-add">
        <input type="text" placeholder="/local/nextfloor/my-plugin.js" aria-label=${this.t("plugins_add")}
          @keydown=${r=>r.key==="Enter"&&this.add(r.target)} />
        <button class="nf-btn" @click=${r=>this.add(r.target.previousElementSibling)}>${this.t("plugins_add")}</button>
      </div>
      ${this._error?m`<p class="nf-error" role="alert">${this._error}</p>`:g}
    </section>`}static styles=[Qe,mt,de`
      .nf-plugins {
        display: grid;
        gap: 10px;
        padding: 16px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      h3 {
        margin: 0;
        font-size: 17px;
      }
      .nf-sub,
      .nf-warn,
      .nf-error {
        margin: 0;
        font-size: 13px;
      }
      .nf-sub {
        color: var(--nf-soft);
      }
      .nf-warn {
        color: var(--warning-color, #b26b00);
      }
      .nf-error {
        color: var(--error-color, #c62828);
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 8px;
      }
      li {
        display: flex;
        gap: 10px;
        align-items: center;
      }
      .nf-plugin-main {
        flex: 1;
        min-width: 0;
        display: grid;
        gap: 2px;
      }
      code {
        overflow-wrap: anywhere;
        font-size: 13px;
      }
      .nf-state {
        font-size: 12px;
      }
      .nf-state.ok {
        color: var(--success-color, #2e7d32);
      }
      .nf-state.warn {
        color: var(--nf-soft);
      }
      .nf-state.err {
        color: var(--error-color, #c62828);
      }
      .nf-detail {
        font-size: 12px;
        color: var(--nf-soft);
        overflow-wrap: anywhere;
      }
      .nf-store {
        display: grid;
        gap: 8px;
      }
      .nf-add {
        display: flex;
        gap: 8px;
      }
      .nf-add input {
        flex: 1;
        min-width: 0;
      }
    `]};customElements.get("nf-plugin-manager")||customElements.define("nf-plugin-manager",cc);var uc=class extends se{static properties={hass:{attribute:!1},packs:{attribute:!1},plugins:{attribute:!1}};t(e,n){return Ae(this.hass,e,n)}render(){return m`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${Ut}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${Ut}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${Ut}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <nf-pack-manager .hass=${this.hass} .packs=${this.packs}></nf-pack-manager>
      <nf-model-upload .hass=${this.hass} .packs=${this.packs}></nf-model-upload>
      <nf-plugin-manager .hass=${this.hass} .plugins=${this.plugins}></nf-plugin-manager>
    </div>`}static styles=[Qe,mt,de`
      :host {
        display: block;
        overflow: auto;
      }
      .nf-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .nf-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .nf-ext-head a {
        text-decoration: none;
      }
      .nf-ext-actions,
      .nf-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .nf-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .nf-sub {
        color: var(--nf-soft);
        font-size: 13px;
      }
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",uc);var So="handled",K_=["select","rect","polygon","wall","opening","furniture","stairs","outdoor","hole","roof","energy"],G_=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),Mo=10,Ve=t=>Math.round(t*1e3)/1e3,U_={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},dc=class extends se{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},loadCardEditor:{attribute:!1},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_solid3d:{state:!0},_sidePinned:{state:!0},_studio:{state:!0},_check:{state:!0},_keys:{state:!0},_note:{state:!0},_dims:{state:!0},_tour:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_energyNote:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_wallView:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0},_arcEdit:{state:!0},_routeDraft:{state:!0}};doc3dTimer;tourChecked=!1;_pick=null;_pickTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new ds(100);lib=new Xi(()=>this.requestUpdate());side=new ms(()=>this.requestUpdate());sel=new fs(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this._arcEdit=null,this._routeDraft=null,this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this.roof.chimneyId=null,this._energyNote=null,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let r=Number(localStorage.getItem("nextfloor.editorSplit"));r>=20&&r<=80&&(this._splitRatio=r/100)}catch{}this._wall3d="cut",this._solid3d=!1,this._doc3d=this._doc,this._sideOpen=!1;let n=!0;try{n=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=n,this._studio=null,this._check=!1,this._keys=!1,this._note=null,this._dims=(()=>{try{return localStorage.getItem("nextfloor.plan_dims")==="1"}catch{return!1}})(),this._tour=null,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._wallView=null,this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,n){return Ae(this.hass,e,n)}measureState(){return{draft:this._draft,length:this._measureLen,rectSize:this._rectSize}}measureActions(){return{setLength:e=>this._measureLen=e,step:e=>this.measureStep(e),close:()=>this.closeDraft(),undo:()=>this._draft=this._draft.slice(0,-1),setRectSize:e=>this._rectSize=e,addRectangle:()=>this.rectBySize()}}arcActions(){return{edit:this._arcEdit,setEdit:e=>this._arcEdit=e,apply:e=>{if(!this.isAdmin||Math.abs(e.bulge)<.01)return;let n=this._doc,r=structuredClone(n),o=r.floors.find(c=>c.id===this._floorId);if(!o)return;let[i,s,a]=e.key.split(":");if(!(i==="wall"?cm(o,s,e.bulge).length>0:lm(o,s,Number(a),e.bulge))){this._arcEdit={...e,error:this.t("arc_too_wide")};return}this._arcEdit=null,this.setDoc(r,n)}}}_wallSide="center";freeWallActions(){return{update:e=>this.updateFreeWall(e),join:()=>this.joinFreeWalls(),note:this.side.notice,remove:()=>this.deleteFreeWall(),arc:this.arcActions(),lockButton:this.fixButton("wall",this.sel.wall??"")}}outdoorActions(){return{update:e=>this.updateOutdoor(e),setRectangle:(e,n)=>{let r=this.outdoorArea;r&&this.updateOutdoor({points:df(r,e,n)})},duplicate:()=>this.duplicateOutdoor(),remove:()=>this.deleteOutdoor(),removeCorner:e=>{let n=this.sel.outdoor;n&&this.change((r,o)=>{Qp(o.outdoor.find(i=>i.id===n),e)})},lockButton:this.fixButton("outdoor",this.sel.outdoor??"")}}libraryActions(){return{add:e=>this.addFurniture(e),studio:()=>this.openStudio(null),packs:this.packs??[]}}openStudio(e){let n=e?U(e):void 0,r=n?.recipe&&e?.startsWith(`pack:${yn}:`)?n.id:null;this._studio={recipe:r&&n?.recipe?{...n.recipe}:tc("cabinet",""),itemId:r,busy:!1,error:null},this._tool="furniture"}async saveStudio(){let e=this._studio;if(!e||!this.hass||!this.isAdmin)return;let n=this.hass.language??"en",r=vr().find(u=>u.id===yn),o=r?.items??[],i={...e.recipe,name:e.recipe.name||this.t(`studio_kind_${e.recipe.kind}`)},s=e.itemId??l_(i.name,o.map(u=>u.id)),a=_s(i,s,n),l={id:yn,name:r?.name??this.t("studio_pack_name"),publisher:r?.publisher??this.t("studio_pack_publisher"),release:(r?.release??0)+1,items:e.itemId?o.map(u=>u.id===s?a:u):[...o,a]};this._studio={...e,busy:!0,error:null};try{let{builtin:u,imported_at:d,...p}=l;await yr(this.hass,JSON.stringify({format:"nfpack",version:1,...p}))}catch(u){this._studio={...e,busy:!1,error:this.t("studio_error",{detail:u.message??String(u)})};return}Is([...vr().filter(u=>u.id!==yn),l]),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),this._studio=null;let c=fe(yn,s);if(e.itemId){let[u,d,p]=a.size;this.change(h=>h.floors.forEach(f=>f.furniture.forEach(_=>_.type===c&&Object.assign(_,{w:u,d,h:p}))))}else this.addFurniture(c)}printTexts(){let e=n=>this.t(n);return{title:this.t("print_title"),room:e("print_room"),floorArea:e("print_floor_area"),living:e("print_living"),low:e("print_low"),total:e("print_total"),note:e("living_area_hint"),area:n=>ze(this.hass,n),length:n=>ge(this.hass,n)}}async exportPlanImages(e,n){let r=(n?this._doc.floors:this.floor?[this.floor]:[]).filter(o=>!o.layer&&o.rooms.length);if(!r.length)return void(this.side.notice=this.t("image_export_empty"));try{for(let o of r)E_(await M_(S_(this._doc,o,this.printTexts(),e)),R_(o.name));this.side.notice=this.t("image_export_done",{n:r.length})}catch{this.side.notice=this.t("image_export_failed")}}printPlan(){let e=$_(this._doc,this.printTexts()),n=window.open("","_blank");if(!n)return void alert(this.t("print_blocked"));n.document.open(),n.document.write(e),n.document.close()}fixFinding(e){e.floorId!==this._floorId&&this.floorActions().openFloor(e.floorId);let n=o=>o.floors.find(i=>i.id===e.floorId),r=e.fix;switch(r.do){case"show_floor":return;case"show_room":return this.selectItem("room",r.roomId);case"show_opening":return this.selectItem("opening",r.openingId);case"show_furniture":return this.selectItem("furniture",r.furnitureId);case"set_area":return this.change(o=>{let i=n(o)?.rooms.find(s=>s.id===r.roomId);i&&Object.assign(i,Rl(i,r.areaId,this.hass?.areas??{}))});case"add_area_rooms":{let o=n(this._doc);o&&this.addAreaRooms(o);return}case"place_devices":return this.change(o=>{let i=n(o),s=i?.rooms.find(a=>a.id===r.roomId);i&&s&&ol(o,i,s,r.entityIds)});case"remove_placements":return this.change(o=>{let i=n(o);i&&(i.placements=i.placements.filter(s=>!r.entityIds.includes(s.entity_id)))})}}ignoreDevices(e){this.change(n=>{n.settings.check_ignore=[...new Set([...n.settings.check_ignore??[],...e])]})}setDims(e){this._dims=e;try{localStorage.setItem("nextfloor.plan_dims",e?"1":"0")}catch{}}addNote(e){if(!this.isAdmin||!this.floor)return;let n=I("note");this.change((r,o)=>o.notes=[...o.notes??[],{id:n,x:Math.round(e[0]*100)/100,z:Math.round(e[1]*100)/100,text:""}]),this._note=n,this._sideOpen=!0}studioButton(){let e=this.furnitureItem?.type;return!e||!kt(e)||!U(e)?.recipe||!e.startsWith(`pack:${yn}:`)||!this.isAdmin?g:m`<button class="nf-btn nf-lib-studio" @click=${()=>this.openStudio(e)}>🛠️ ${this.t("studio_open")}</button>`}deviceActions(){return{update:e=>this.updateDevice(e),centre:()=>this.centreDevice(),remove:()=>{this.removeDevice(this.sel.device??""),this.sel.device=null},asFurniture:(e,n)=>this.deviceToFurniture(e,n),packs:this.packs??[],lockButton:this.fixButton("device",this.sel.device??"")}}deviceListActions(){return{select:e=>this.selectItem("device",e),place:e=>this.placeDevices(e),remove:e=>this.removeDevice(e),patchRoom:e=>this.updateRoom(e),spreadLights:e=>this.spreadCeilingLights(e),confirm:e=>confirm(e)}}furnitureToFloor(e){let[n,r]=[this._floorId,this.sel.furniture];if(!n||!r||!this.isAdmin)return;let o=structuredClone(this._doc);Yg(o,n,r,e)&&(this.setDoc(o),this._floorId=e,this.selectItem("furniture",r))}furnitureActions(){return{update:e=>this.updateFurniture(e),rotate:e=>this.rotateFurniture(e),duplicate:()=>this.duplicateFurniture(),addTask:()=>this.addTaskToFurniture(),remove:()=>this.deleteFurniture(),toDevice:e=>this.furnitureToDevice(e),toSpot:e=>this.vehicleToSpot(e),toFloor:e=>this.furnitureToFloor(e),packs:this.packs??[],lockButton:this.fixButton("furniture",this.sel.furniture??"")}}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,n)=>this.setOpeningPreset(e,n),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),isBelowGround:e=>e.type==="window"&&this.openingIsExterior(e)&&(this.floor?.elevation??0)+e.sill<-.22,lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new Li({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:No,storeImage:zt},readPicture:jn,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new us({host:this.host,floorId:()=>e._floorId,setFloorId:n=>e._floorId=n,confirm:n=>confirm(n),refresh:()=>e.requestUpdate()})}redrawQueued=!1;redrawSoon=()=>{this.redrawQueued||(this.redrawQueued=!0,setTimeout(()=>{this.redrawQueued=!1,this.requestUpdate()},30))};canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),toWorld:(e,n)=>this.toWorld(e,n),scale:this._view.scale,floorId:this._floorId,redraw:this.redrawSoon}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new Ai({get hass(){return e.hass},get doc(){return e._doc},t:(n,r)=>e.t(n,r),adopt:n=>{e.setDoc(n),e._floorId=n.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:n=>e.side.notice=n,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(n,r)=>e.t(n,r),change:n=>e.change(n),replace:n=>e.setDoc(n),pickPoint:n=>e.pickPoint(n),get loadCardEditor(){return e.loadCardEditor}}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&Is(this.packs??[]),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(!this.tourChecked&&this.building&&(this.tourChecked=!0,!this.building.floors.some(n=>n.rooms.length)&&F_()&&(this._tour=0)),this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(n=>n.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let n=e.currentTarget.parentElement,r=e.currentTarget;r.setPointerCapture(e.pointerId);let o=n.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-o.left)/o.width))},s=()=>{r.removeEventListener("pointermove",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};r.addEventListener("pointermove",i),r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:n,x:r,z:o}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(p=>p.id===n);if(!l)continue;let[c,u]=sa(a,l.x,l.z,r,o);Object.assign(l,{x:c,z:u});let d=Ar(a,l,i);d&&Object.assign(l,d)}})}onDeviceMoved3d(e){let{id:n,x:r,z:o}=e.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(u=>u.entity_id===n);if(!a)continue;let[l,c]=sa(s,a.x,a.z,r,o);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return g;let e=this.furnitureItem,n=this.device;if(e){let r=Qo(e),o=(i,s,a=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${i}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[i]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[i]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return m`<div class="nf-3d-bar">
        <span>${tt(this.hass,e.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${r?m`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Se(this.floor,e))*100)/100)}
                @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:g}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(n){let r=Q(n.entity_id),o=r==="light",i=r?Vo(r,this.floor?ht(this.floor,n.x,n.z):2.5,o?n.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${G(this.hass,n.entity_id)}</span>
        ${o?m`<select class="nf-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>m`<option value=${s} ?selected=${s===(n.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:g}
        <label class="nf-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((n.y??i)*100)/100)}
            @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:(((n.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:((n.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",n.entity_id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteItem("device",n.entity_id)}>${this.t("delete")}</button>
      </div>`}return g}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};fittingField(e,n,r){if(r==="field")return e.settings.roof.solar?.find(i=>i.id===n);if(r==="win"){let i=e.settings.roof.windows?.find(s=>s.id===n);return i?sn(i):void 0}let o=e.settings.roof.chimneys?.find(i=>i.id===n);return o?Rt(o,Y(e).find(i=>i.key===o.face)):void 0}grab3dStart(e){let n=this._doc,r=Y(n),o=null,i=(a,l,c,u,d=!1,p=!1)=>{if(!c||d)return;let h=yi(c,e.o,e.d);!h||!Ra(c,u,h.u,h.s)||o&&o.t<=h.t||(o={id:a,win:l,chimney:p,t:h.t,du:h.u-u.u,ds:h.s-u.v})};if(this._tool==="energy")for(let a of n.settings.roof.solar??[])i(a.id,!1,Ee(n,a,r),a,!!a.locked);if(this._tool==="roof")for(let a of n.settings.roof.windows??[])i(a.id,!0,r.find(l=>l.key===a.face)??null,sn(a),!!a.locked);if(this._tool==="roof")for(let a of n.settings.roof.chimneys??[]){let l=r.find(c=>c.key===a.face)??null;i(a.id,!1,l,Rt(a,l),!!a.locked,!0)}if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,chimney:s.chimney,du:s.du,ds:s.ds,base:n,moved:!1},s.chimney?this.roof.chimneyId=s.id:s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let n=this.grab3d;if(!n)return;let r=n.base,o=this.fittingField(r,n.id,n.win?"win":n.chimney?"chimney":"field");if(!o)return;let i=Ee(r,o),s=i?.unbounded?[i]:n.win||n.chimney?Y(r):[...Y(r),...Ye(r)],a=null;for(let p of s){let h=yi(p,e.o,e.d);h&&Ma(p,h.u,h.s)&&(!a||h.t<a.t)&&(a={face:p,...h})}if(!a)return;let l=a.face,c=.05,u=p=>Ve(Math.round(p/c)*c),d=ft(l,{...o,face:l.key,u:u(a.u-n.du),v:u(a.s-n.ds),tilt:l.flat?o.tilt??15:o.tilt});n.moved=!0,this.change(p=>{if(n.win||n.chimney){let f=n.win?p.settings.roof.windows?.find(_=>_.id===n.id):p.settings.roof.chimneys?.find(_=>_.id===n.id);f&&Object.assign(f,{face:l.key,...d});return}let h=p.settings.roof.solar?.find(f=>f.id===n.id);h&&Object.assign(h,{face:l.key,...d},l.flat&&h.tilt==null?{tilt:15}:{})},n.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
      ${this.houseTool?g:m`<div class="nf-seg nf-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
            <button aria-pressed=${this._wall3d==="slope"} title=${this.t("walls_slope_hint")} @click=${()=>this._wall3d="slope"}>${this.t("walls_slope")}</button>
            <button aria-pressed=${this._solid3d} title=${this.t("walls_solid_hint")} @click=${()=>this._solid3d=!this._solid3d}>${this.t("walls_solid")}</button>
          </div>`}
      ${this.render3dBar()}
      <nf-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .solidWalls=${!this.houseTool&&this._solid3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?Ge:this._tool==="roof"?[]:null}
        .selectedFurniture=${this.sel.furniture}
        .selectedDevice=${this.sel.device}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this.sel.furniture&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this.sel.device&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
      ></nf-view3d>
    </div>`}updated(){for(let n of this.renderRoot.querySelectorAll("select option[selected]"))n.selected||(n.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let n of this.storedPictures())this.bg.ensureLoaded(n)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,n=this._doc){n&&this.history.record(n),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,n=this._doc,r=!0){let o=structuredClone(n),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(o,i),this.setDoc(o,r?n:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(n=>n.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(n=>n.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:n,ox:r,oy:o}=this._view;return[e[0]*n+r,e[1]*n+o]}pickPoint(e){this._pick?.(null),this._pick=e,clearTimeout(this._pickTimer),this._pickTimer=window.setTimeout(()=>this.cancelPick(),6e4),this.requestUpdate()}cancelPick(){clearTimeout(this._pickTimer),this._pick&&(this._pick=null,this.requestUpdate())}toWorld(e,n){let{scale:r,ox:o,oy:i}=this._view;return[(e-o)/r,(n-i)/r]}localPoint(e){let n=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-n.left,e.clientY-n.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],n=e.length?pe(e):{x0:0,z0:0,x1:10,z1:8},r=1.5,o=n.x1-n.x0+2*r,i=n.z1-n.z0+2*r,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(n.x0+n.x1)/2*s,oy:this._size.h/2-(n.z0+n.z1)/2*s}}showPoint(e,n){let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-e*r,oy:this._size.h/2-n*r}}zoomAt(e,n,r){let{scale:o,ox:i,oy:s}=this._view,a=Math.max(8,Math.min(600,o*e)),l=a/o;this._view={scale:a,ox:n-(n-i)*l,oy:r-(r-s)*l}}snap(e,n,r=!1){if(this._guides={},r)return e;let o=fm(e,{rooms:this.floor?.rooms??[],grid:this._doc.settings.grid,reach:Mo/this._view.scale,skip:n});return this._guides=o.guides,o.point}onPointerDown(e){if(this._pick){let[r,o]=this.localPoint(e),i=this._pick;this.cancelPick(),i(this.toWorld(r,o));return}this._ctx=null;let n=e.target?.closest?.("[data-note]")?.getAttribute("data-note");if(n&&this._tool==="select"){this._note=n,this._sideOpen=!0;return}if(this._note&&(this._note=null),this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let r=this.localPoint(e),o=e.target;this.pressStart=r,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(o,r))},550)}}guardFixed(e){let n=this.drag;if(!n)return;let r=null;n.kind==="vertex"||n.kind==="room"?r=["room",n.roomId]:n.kind==="device"||n.kind==="aim"?r=["device",n.entityId]:n.kind==="opening"?r=["opening",n.id]:n.kind==="furniture"||n.kind==="rotate"||n.kind==="resize"?r=["furniture",n.id]:n.kind==="wallmove"?r=["wall",n.id]:n.kind==="outdoor"&&(r=["outdoor",n.id]),!(!r||!this.isFixedItem(...r))&&("moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){let i=this.drag;i&&G_.has(i.kind)&&"moved"in i&&i.moved&&"base"in i&&this.restoreLive(i.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let r={local:n,world:this.toWorld(...n),target:e.target,fine:e.altKey},o=this.pressRoute(r)??this.pressBackground(r)??this.pressWallTool(r)??this.pressRoofTools(r)??this.pressDrawingTool(r)??this.pressItem(r)??this.pressRoom(r);o!==So&&(this.drag=o)}pan(e){return{kind:"pan",last:e.local}}moves(e,n){return this.isAdmin?n:this.pan(e)}pressBackground(e){let{world:n,target:r}=e,o=this.floor?.background;if(this.bg.level&&this.isAdmin&&o)return this.bg.tapLevel(n),So;if(this.bg.handlesShown&&o&&r.closest("[data-bg-rotate]")){let s=Un(o,this.bg.picture(o.image_id)?.aspect??1);return{kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(n[1]-s[1],n[0]-s[0]),rot:o.rotation??0}}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&o)return this.bg.tapRuler(n),So;let i=!!r.closest("[data-bg-handle]")||!!r.closest("[data-bg]");if(o&&this.bg.handlesShown&&!this.bg.edit&&i)return this.pictureGesture(e,o);if(this.bg.edit&&this.isAdmin&&o){if(i)return this.pictureGesture(e,o);this.bg.edit=!1}}pictureGesture(e,n){return e.target.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:e.world,bx:n.x,bz:n.z,base:this._doc,moved:!1}}pressWallTool(e){if(this._tool!=="wall")return;let n=this.snap(e.world,void 0,e.fine);return{kind:"freewall",start:n,end:n}}pressRoofTools(e){if(this._tool!=="roof"&&this._tool!=="energy")return;let{local:n,world:r,target:o}=e,i=(v,y)=>o.closest(v)?.getAttribute(y)??null,s=this._tool==="energy",a=s?i("[data-energy-device]","data-energy-device"):null;if(a)return this.pressEnergyDevice(e,a);let l=s?i("[data-solar-turn]","data-solar-turn"):null;if(l&&this.isAdmin)return{kind:"solarturn",id:l,base:this._doc,moved:!1};let c=s?i("[data-solar]","data-solar"):null;if(c)return this.pressSolarField(e,c);let u=this._tool==="roof"?i("[data-roofwin]","data-roofwin"):null;if(u)return this.pressRoofWindow(e,u);let d=this._tool==="roof"?i("[data-chimney]","data-chimney"):null;if(d)return this.pressChimney(e,d);this._tool==="roof"&&(this.roof.windowId=null,this.roof.chimneyId=null);let p=s?i(".nf-energy-item","data-furniture"):null;if(p)return this.pressEnergyDevice(e,p);if(s)return this.selectItem("furniture",null),this.roof.solarId=null,this.pan(e);let h=i("[data-plus]","data-plus");if(h?.startsWith("roof:")&&this.isAdmin)return this.splitRoofEdgeGesture(...h.split(":").slice(1));let f=i("[data-roof-vertex]","data-roof-vertex"),_=i("[data-roof-corner]","data-roof-corner"),b=i("[data-roof]","data-roof");if(f&&this.isAdmin){let[v,y]=f.split(":");return{kind:"roofvertex",id:v,index:Number(y),base:this._doc,moved:!1}}if(_&&this.isAdmin){let[v,y,x]=_.split(":");return{kind:"roofcorner",id:v,corner:[y==="1"?1:0,x==="1"?1:0],base:this._doc,moved:!1}}if(b){let v=this.roof.isFixed(this._doc.settings.roof.sections?.find(y=>y.id===b));return v&&this.roof.sectionId===b&&(this._fixedHint=!0),this.roof.sectionId=b,this.isAdmin&&!v?{kind:"roofmove",id:b,start:r,startScreen:n,base:this._doc,moved:!1}:this.pan(e)}if(!this.isAdmin)return this.pan(e);this.roof.sectionId=null;let w=this.snap(r,void 0,e.fine);return{kind:"rect",start:w,end:w,roof:!0}}pressEnergyDevice(e,n){return this.roof.solarId=null,this.selectItem("furniture",n),this.moves(e,{kind:"furniture",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1})}pressSolarField(e,n){let{local:r,world:o,target:i}=e,s=i.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&n===this.roof.solarId&&s&&this.isAdmin)return this.roof.toggleCell(s),this.pan(e);n!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=n,this.roof.sectionId=null;let a=this._doc.settings.roof.solar?.find(d=>d.id===n),l=a?Ee(this._doc,a)??void 0:void 0,c=l?this.faceHit(l,o):null,u=a&&c?{du:c.u-a.u,ds:Number.isNaN(c.s)?0:c.s-a.v}:null;return this.isAdmin&&!a?.locked?{kind:"solarmove",id:n,start:o,startScreen:r,base:this._doc,moved:!1,grab:u}:this.pan(e)}pressRoofWindow(e,n){this.roof.windowId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.windows?.find(a=>a.id===n),o=r?Y(this._doc).find(a=>a.key===r.face):void 0,i=o?In(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,win:!0}:this.pan(e)}pressChimney(e,n){this.roof.chimneyId=n,this.roof.sectionId=null;let r=this._doc.settings.roof.chimneys?.find(a=>a.id===n),o=r?Y(this._doc).find(a=>a.key===r.face):void 0,i=o?In(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,chimney:!0}:this.pan(e)}pressDrawingTool(e){let n=this._tool;if(n==="rect"||n==="outdoor"||n==="hole"||n==="stairs"){let r=this.snap(e.world,void 0,e.fine);return{kind:"rect",start:r,end:r,outdoor:n==="outdoor",hole:n==="hole",stairs:n==="stairs"}}if(n==="polygon"||n==="measure")return{kind:"tap",startScreen:e.local,last:e.local,panning:!1};if(n==="opening")return this.placeOpening(this._openingPreset,e.local)?So:this.pan(e)}pressItem(e){let{local:n,world:r,target:o}=e,i=(k,S)=>o.closest(k)?.getAttribute(S)??null,s=this._doc,a=i("[data-device]","data-device");if(a&&this.isAdmin)return{kind:"device",entityId:a,start:r,startScreen:n,base:s,moved:!1};let l=i("[data-opening]","data-opening");if(l)return this.selectItem("opening",l),this.moves(e,{kind:"opening",id:l,startScreen:n,base:s,moved:!1});let c=i("[data-resize]","data-resize");if(c&&this.isAdmin){let[k,S,$]=c.split(":");return{kind:"resize",id:k,corner:[S==="1"?1:-1,$==="1"?1:-1],base:s,moved:!1}}let u=i("[data-rotate]","data-rotate");if(u&&this.isAdmin)return{kind:"rotate",id:u,base:s,moved:!1};let d=i("[data-aim]","data-aim");if(d&&this.isAdmin)return{kind:"aim",entityId:d,base:s,moved:!1};let p=o.closest("[data-vertex], [data-mid]")?null:i("[data-furniture]","data-furniture");if(p)return this.selectItem("furniture",p),this.moves(e,{kind:"furniture",id:p,start:r,startScreen:n,base:s,moved:!1});let h=i("[data-vertex]","data-vertex"),f=i("[data-mid]","data-mid");if(h!==null&&this.room&&this.isAdmin)return this.sel.corner=Number(h),{kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:s,moved:!1};if(f!==null&&this.room&&this.isAdmin)return this.splitEdgeGesture(this.room,Number(f));let _=i("[data-wall-end]","data-wall-end");if(_&&this.isAdmin){let[k,S]=_.split(":");return{kind:"wallmove",id:k,end:S,start:r,startScreen:n,base:s,moved:!1}}let b=i("[data-free-wall]","data-free-wall");if(b)return this.selectItem("wall",b),this.moves(e,{kind:"wallmove",id:b,end:null,start:r,startScreen:n,base:s,moved:!1});let w=i("[data-plus]","data-plus");if(w?.startsWith("out:")&&this.isAdmin)return this.splitOutdoorEdgeGesture(...w.split(":").slice(1));let v=i("[data-out-vertex]","data-out-vertex");if(v&&this.isAdmin){let[k,S]=v.split(":");return{kind:"outvertex",id:k,index:Number(S),base:s,moved:!1}}let y=pf(this.floor?.walls??[],n,k=>this.toScreen(k),9);if(y)return this.selectItem("wall",y),this.moves(e,{kind:"wallmove",id:y,end:null,start:r,startScreen:n,base:s,moved:!1});let x=i("[data-outdoor]","data-outdoor");if(x&&!o.closest("[data-room]")&&!this.roomAt(r))return this.selectItem("outdoor",x),this.moves(e,{kind:"outdoor",id:x,start:r,startScreen:n,base:s,moved:!1})}splitEdgeGesture(e,n){let[r,o]=[e.points[n],e.points[(n+1)%e.points.length]],i=rt([(r[0]+o[0])/2,(r[1]+o[1])/2],[0,0]),s=this._doc;return this.change((a,l)=>El(l,e.id,n,i),s,!1),this.sel.corner=n+1,{kind:"vertex",roomId:e.id,index:n+1,base:s,moved:!0}}splitOutdoorEdgeGesture(e,n){let r=Number(n),o=this._doc,i=this.floorOf({base:o})?.outdoor.find(l=>l.id===e);if(!i)return;let[s,a]=[i.points[r],i.points[(r+1)%i.points.length]];return this.change((l,c)=>Jp(c.outdoor.find(u=>u.id===e),r,[(s[0]+a[0])/2,(s[1]+a[1])/2]),o,!1),{kind:"outvertex",id:e,index:r+1,base:o,moved:!0}}splitRoofEdgeGesture(e,n){let r=Number(n),o=this._doc;return this.change(i=>{let s=i.settings.roof.sections?.find(u=>u.id===e);if(!s)return;let a=al(s),[l,c]=[a[r],a[(r+1)%a.length]];bf(s,r,[(l[0]+c[0])/2,(l[1]+c[1])/2])},o,!1),{kind:"roofvertex",id:e,index:r+1,base:o,moved:!0}}pressRoom(e){let n=e.target.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(e.world);return n?(n!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",n),!this.isAdmin||this._tool==="furniture"?this.pan(e):{kind:"room",roomId:n,start:e.world,startScreen:e.local,base:this._doc,moved:!1}):(this.selectItem("room",null),this.pan(e))}onPointerMove(e){let n=this.localPoint(e);if(this.pressStart?qn(n,this.pressStart,8)&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0)):this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0),this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,n),this.pinch){this.pinchMove();return}let r=this.toWorld(...n),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(r,void 0,e.altKey));return}this.moveDrag(o,{local:n,world:r,fine:e.altKey,straight:e.shiftKey})}pinchMove(){let e=this.pinchState();!e||!this.pinch||(this.zoomAt(e.dist/Math.max(1,this.pinch.dist),...e.mid),this._view={...this._view,ox:this._view.ox+e.mid[0]-this.pinch.mid[0],oy:this._view.oy+e.mid[1]-this.pinch.mid[1]},this.pinch=e)}panBy(e,n){this._view={...this._view,ox:this._view.ox+n[0]-e[0],oy:this._view.oy+n[1]-e[1]}}live(e,n){this.change(n,e.base,!1)}floorOf(e){return e.base.floors.find(n=>n.id===this._floorId)}moveDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid,a=l=>l.moved||qn(r,l.startScreen);switch(e.kind){case"pan":this.panBy(e.last,r),e.last=r;return;case"tap":(e.panning||qn(r,e.startScreen,6))&&(e.panning=!0,this.panBy(e.last,r)),e.last=r;return;case"rect":e.end=this.snap(o,void 0,i),this.requestUpdate();return;case"freewall":e.end=um(e.start,this.snap(o,void 0,i),n.straight),this.requestUpdate();return;case"wallmove":{if(!a(e))return;e.moved=!0;let l=(this.floorOf(e)?.walls??[]).find(u=>u.id===e.id);if(!l)return;let c;if(e.end){let u=this.snap(o,void 0,i),d=this._doc.settings.wall_interior,[p,h]=_o(l,d),[f,_]=e.end==="a"?Vi(u,h,l,d):Vi(p,u,l,d);c={a:f,b:_}}else{let u=Qi(e.start,o,gn(s,i));c={a:rt(l.a,u),b:rt(l.b,u)}}this.live(e,(u,d)=>Object.assign((d.walls??[]).find(p=>p.id===e.id),c));return}case"vertex":{let l=this.snap(o,{roomId:e.roomId,index:e.index},i);e.moved=!0,this.live(e,(c,u)=>{u.rooms.find(d=>d.id===e.roomId).points[e.index]=l});return}case"room":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.rooms.find(p=>p.id===e.roomId);if(!l||!c)return;let u=this.roomDelta(c,[o[0]-e.start[0],o[1]-e.start[1]],i),d=new Set(l.placements.filter(p=>W([p.x,p.z],c.points)).map(p=>p.entity_id));this.live(e,(p,h)=>{h.rooms.find(f=>f.id===e.roomId).points=c.points.map(f=>rt(f,u)),h.placements=l.placements.map(f=>{if(!d.has(f.entity_id))return f;let[_,b]=rt([f.x,f.z],u);return{...f,x:_,z:b}})});return}case"opening":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.openings.find(f=>f.id===e.id),u=c&&l?He(c,l.rooms,l.walls??[]):null;if(!c||!u)return;let d=l?Wt(l.openings,c):[c],p=!c.wall&&d.length>1&&l?Ln(u.room,d):null;if(p){let f=i?.01:this._doc.settings.grid,_=Ta(u.room,o)-p.width/2,b=f>0?Math.round(_/f)*f:_,w=Math.max(0,Math.min(Jr(u.room)-p.width,b));this.live(e,(v,y)=>{let x=y.openings.find(S=>S.id===e.id),k=x?Qr(y.openings,u.room,x,w,p.width,()=>I("opening")):null;k&&(y.openings=k)});return}let h=this.dropOffset(u.room,u.edge,o,c.width,i);this.live(e,(f,_)=>{_.openings.find(b=>b.id===e.id).offset=h});return}case"furniture":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.furniture.find(h=>h.id===e.id);if(!l)return;let[c,u]=Al([l.x,l.z],e.start,o,gn(s,i)),p=(i?null:this.snapToWall({...l,x:c,z:u}))??{x:c,z:u,rotation:l.rotation};this.live(e,(h,f)=>{Object.assign(f.furniture.find(_=>_.id===e.id),p)});return}case"resize":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=Fu(l,e.corner,o,gn(s,i));this.live(e,(u,d)=>{Object.assign(d.furniture.find(p=>p.id===e.id),c)});return}case"rotate":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=Fl([l.x,l.z],o,i?1:15);this.live(e,(u,d)=>{d.furniture.find(p=>p.id===e.id).rotation=c});return}case"aim":{e.moved=!0;let l=this.floorOf(e)?.placements.find(u=>u.entity_id===e.entityId);if(!l)return;let c={rotation:Fl([l.x,l.z],o,i?1:5)};this.live(e,(u,d)=>{Object.assign(d.placements.find(p=>p.entity_id===e.entityId),c)});return}case"device":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.placements.find(d=>d.entity_id===e.entityId);if(!l)return;let[c,u]=Al([l.x,l.z],e.start,o,gn(s,i));this.live(e,(d,p)=>{Object.assign(p.placements.find(h=>h.entity_id===e.entityId),{x:c,z:u})});return}case"outdoor":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!l)return;let c=Qi(e.start,o,gn(s,i));this.live(e,(u,d)=>{d.outdoor.find(p=>p.id===e.id).points=l.points.map(p=>rt(p,c))});return}case"outvertex":{e.moved=!0;let l=this.snap(o,void 0,i),c=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!c)return;this.live(e,(u,d)=>{let p=d.outdoor.find(h=>h.id===e.id);p&&(p.points=hm(c.points,e.index,l))});return}case"bgmove":e.moved=!0,this.live(e,(l,c)=>{c.background&&([c.background.x,c.background.z]=rt([e.bx,e.bz],[o[0]-e.start[0],o[1]-e.start[1]]))});return;case"bgrotate":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Un(l,c.aspect),d=Tp(e.rot,e.start,Math.atan2(o[1]-u[1],o[0]-u[0]),n.straight);this.live(e,(p,h)=>{h.background&&(h.background.rotation=d)});return}case"bgscale":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Math.max(.5,Ve(Fp(l,c.aspect,o)[0]));this.live(e,(d,p)=>{p.background&&(p.background.width=u)});return}default:this.moveRoofDrag(e,n)}}moveRoofDrag(e,n){let{local:r,world:o,fine:i}=n,s=this._doc.settings.grid;switch(e.kind){case"roofmove":{if(!e.moved&&!qn(r,e.startScreen))return;e.moved=!0;let a=Qi(e.start,o,gn(s,i)),l=e.base.settings.roof.sections?.find(c=>c.id===e.id);if(!l)return;this.live(e,c=>{let u=c.settings.roof.sections?.find(_=>_.id===e.id);if(!u)return;let[d,p]=rt([l.x0,l.z0],a),[h,f]=rt([l.x1,l.z1],a);Object.assign(u,{x0:d,x1:h,z0:p,z1:f}),l.points&&(u.points=l.points.map(_=>rt(_,a)))});return}case"roofvertex":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);!c?.points||e.index>=c.points.length||(c.points[e.index]=rt(a,[0,0]),Object.assign(c,Ct(c.points)))});return}case"roofcorner":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);c&&(c[e.corner[0]?"x1":"x0"]=Ve(a[0]),c[e.corner[1]?"z1":"z0"]=Ve(a[1]))});return}case"solarturn":{e.moved=!0;let a=e.base.settings.roof.solar?.find(u=>u.id===e.id),l=a?Ee(e.base,a):null;if(!a||!l)return;let c=Zr(e.base,a,dm(Kr(l,a),o,i?1:15));this.live(e,u=>{let d=u.settings.roof.solar?.find(p=>p.id===e.id);d&&Object.assign(d,c)});return}case"solarmove":this.moveSolar(e,n);return;default:return}}moveSolar(e,n){let{local:r,world:o,fine:i}=n;if(!e.moved&&!qn(r,e.startScreen))return;e.moved=!0;let s=this.fittingField(e.base,e.id,e.win?"win":e.chimney?"chimney":"field"),a=e.win||e.chimney?Y(e.base):[...Y(e.base),...this._floorId?Ye(e.base,this._floorId):[]],l=s?Ee(e.base,s,a):null;if(!s||!l)return;let c=i?.01:.05,u=b=>Ve(Math.round(b/c)*c),d=l.unbounded?null:Sa(a,o),p=l,h,f;if(d&&e.grab)p=d.face,h=u(d.u-e.grab.du),f=Number.isNaN(d.s)?d.face.key===s.face?s.v:Math.max(0,d.face.ls-1.5):u(d.s-e.grab.ds);else{let[b,w]=[o[0]-e.start[0],o[1]-e.start[1]],v=[l.es[0],l.es[2]];h=u(s.u+b*l.eu[0]+w*l.eu[2]),f=u(s.v+(b*v[0]+w*v[1])/(v[0]*v[0]+v[1]*v[1]||1))}let _=ft(p,{...s,face:p.key,u:h,v:f,tilt:p.flat?s.tilt??15:s.tilt});this.live(e,b=>{if(e.win||e.chimney){let v=e.win?b.settings.roof.windows?.find(y=>y.id===e.id):b.settings.roof.chimneys?.find(y=>y.id===e.id);v&&Object.assign(v,{face:p.key,..._});return}let w=b.settings.roof.solar?.find(v=>v.id===e.id);w&&Object.assign(w,{face:p.key,..._},p.flat&&w.tilt==null?{tilt:15}:{})})}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||e.type==="pointercancel"){n&&G_.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let r=this.localPoint(e);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":if(n.moved&&n.end&&!e.altKey){let o=ji(this.floor?.walls??[],this._doc.settings.wall_interior,n.id);o.length&&this.change((i,s)=>{Zi(s,o)},this._doc,!1)}n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[o,i]=n.start,[s,a]=n.end;if(Math.abs(s-o)>=.2&&Math.abs(a-i)>=.2){let l=[Math.min(o,s),Math.min(i,a)],c=[Math.max(o,s),Math.max(i,a)],u=[l,[c[0],l[1]],c,[l[0],c[1]]];n.outdoor?this.addOutdoor(u):n.hole?this.addHole(l,c):n.stairs?this.addStairs(l,c):n.roof?this.roof.addSection(l,c):this.addRoom(u)}else!n.outdoor&&!n.hole&&!n.stairs&&!n.roof&&this.roomFromWallsAt(this.toWorld(r[0],r[1]));this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...r),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...r),void 0,e.altKey),r);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[n,r]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),n,r)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[n,r]=e;return{dist:Math.hypot(n[0]-r[0],n[1]-r[1]),mid:[(n[0]+r[0])/2,(n[1]+r[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,n,r){if(r)return n;let o=this._doc.settings.grid,i=[Math.round(n[0]/o)*o,Math.round(n[1]/o)*o],a=Mo/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let u of e.points){let d=Math.hypot(u[0]+n[0]-c[0],u[1]+n[1]-c[1]);d<a&&(a=d,i=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(o=>W(e,o.points)).sort((o,i)=>Me(o.points)-Me(i.points))[0]?.id??null}addDraftPoint(e,n){let r=this._draft;if(r.length>=3){let[i,s]=this.toScreen(r[0]);if(Math.hypot(i-n[0],s-n[1])<14){this.closeDraft();return}}let o=r[r.length-1];o&&Math.hypot(o[0]-e[0],o[1]-e[1])<1e-6||(this._draft=[...r,e])}closeDraft(){this._draft.length>=3&&Me(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let n=this._draft[this._draft.length-1];if(!n||!(this._measureLen>0))return;let r=kn(n,this._measureLen,e),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(r[0]-o[0],r[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,r]}rectBySize(){let e=this._draft[0]??[0,0],[n,r]=this._rectSize;n>.1&&r>.1&&(this.addRoom([e,kn(e,n,"right"),kn(kn(e,n,"right"),r,"down"),kn(e,r,"down")]),this._draft=[])}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let n=this.sel.wall;n&&this.change((r,o)=>{let i=(o.walls??[]).find(a=>a.id===n),s="thickness"in e&&i.axis?_o(i,r.settings.wall_interior):null;Object.assign(i,e),s&&([i.a,i.b]=Vi(s[0],s[1],i,r.settings.wall_interior))})}joinFreeWalls(){let e=ji(this.floor?.walls??[],this._doc.settings.wall_interior);e.length&&this.change((n,r)=>{Zi(r,e)}),this.side.notice=this.t(e.length?"wall_joined":"wall_join_none",{n:e.length}),this.requestUpdate()}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((n,r)=>{r.walls=(r.walls??[]).filter(o=>o.id!==e),r.openings=r.openings.filter(o=>o.wall!==e)}),this.sel.wall=null)}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let n=this.sel.outdoor;this.change((r,o)=>Object.assign(o.outdoor.find(i=>i.id===n),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((n,r)=>r.outdoor=r.outdoor.filter(o=>o.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;if(e.key==="Escape"&&this._pick){e.preventDefault(),this.cancelPick();return}let r=e.ctrlKey||e.metaKey;if(r&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(r&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(r&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!r&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!r&&(this.sel.furniture||this.sel.device)){let o=this.sel.target;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(U_,e.key)&&!r&&(this._tool==="select"||this._tool==="furniture")){let o=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=U_[e.key];this.nudgeSelection(i*o,s*o)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!r&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="?"&&!r)this._keys=!this._keys;else if(e.key==="Escape"){if(this._keys){this._keys=!1;return}if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let n=structuredClone(this._doc);n.floors=n.floors.filter(r=>r.id!==e.id),this.setDoc(n),this._floorId=n.floors[0]?.id??null,this.sel.room=null}faceHit(e,n){return e.wall?{u:(n[0]-e.o[0])*e.eu[0]+(n[1]-e.o[2])*e.eu[2],s:Number.NaN}:In(e,n)}planLayers(e,n){let r=this.canvasContext(),o=this.room,i=!!o&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",o.id),s=this.drag?.kind==="freewall"||this.drag?.kind==="rect"?this.drag:null;return A`${$p(r,this._doc.settings)} ${vp(r,this.bg,e)} ${Sm(r,this._size)} ${Mm(r)} ${n?Rm(r,n):g}
      ${e?A`${Em(r,e,this.sel.outdoor)} ${Fm(r,e,this.sel.room,this.sel.edge)} ${km(r,e,this.sel.furniture)}
        ${zm(r,e,this.sel.wall)} ${n?Lm(r,e,n,this.sel.opening):g} ${Tm(r,e)}
        ${this._tool==="select"?xm(r,e,this.sel.device):g}
        ${this._tool==="select"?$m(r,e,this._note):g}
        ${this._dims?Im(r,e):g}
        ${i?Dm(r,o,this.sel.corner):g}
        ${Am(r,this.outdoorArea,this._tool)}
        ${o&&this._tool==="select"?Pm(r,o):g}
        ${bp(r,e)}`:g}
      ${this._tool==="roof"?A`${ja(r,this.roof)}${gp(r,this.roof)}${wp(r,this.roof)}`:this._tool==="energy"?A`${ja(r,this.roof)}${mp(r,this.roof)}${yp(r,this.floor,this._doc.energy.routes??[],this._routeDraft)}${_p(r,this.floor,this.sel.furniture)}`:g}
      ${gm(r,s,this._tool,this._draft,this._cursor)} ${mm(r,this._guides,this._size)}`}wallsOfFloor(){let e=this.floor;return e?we(e.rooms,xe(this._doc.settings),e.walls??[]).walls:[]}edgeParts(e,n){let r=this.wallsOfFloor().flatMap(o=>o.sources.filter(i=>i.room_id===e.id&&i.edge===n).map(i=>i.t0));return r.length>0?[...new Set(r)].sort((o,i)=>o-i):[0]}changeRoom(e,n){this.isAdmin&&this.change((r,o)=>{let i=o.rooms.find(s=>s.id===e.id);i&&n(i)})}edgeActions(){return{openWall:(e,n)=>this._wallView={roomId:e.id,edge:n},partsOf:(e,n)=>this.edgeParts(e,n),isOuter:(e,n)=>this.wallsOfFloor().some(r=>r.exterior&&r.sources.some(o=>o.room_id===e.id&&o.edge===n)),setHeight:(e,n,r,o)=>{if(r!==void 0){let s=this.edgeParts(e,n).length;this.changeRoom(e,a=>Vm(a,n,r,o,s));return}let i=this.wallsOfFloor().filter(s=>s.sources.some(a=>a.room_id===e.id&&a.edge===n)).flatMap(s=>s.sources);i.some(s=>s.room_id===e.id&&s.edge===n)||i.push({room_id:e.id,edge:n,t0:0,t1:0}),this.isAdmin&&this.change((s,a)=>{for(let l of i){let c=a.rooms.find(u=>u.id===l.room_id);c&&Dl(c,l.edge,o)}})},setSlope:(e,n,r,o)=>this.changeRoom(e,i=>Wm(i,n,r,o)),clearSlope:(e,n)=>this.changeRoom(e,r=>Nm(r,n,this.floor?.height??2.5)),setThickness:(e,n,r,o,i)=>this.changeRoom(e,s=>Um(s,n,r,o,i)),arc:this.arcActions(),cut:(e,n,r)=>{let o=this.edgeParts(e,n);this.changeRoom(e,i=>Bm(i,n,r,o))},moveCut:(e,n,r,o)=>{let i=this.edgeParts(e,n);this.changeRoom(e,s=>Km(s,n,r,o,i))},join:(e,n,r,o)=>this.changeRoom(e,i=>Gm(i,n,r,o)),lit:this.sel.edge,light:e=>this.sel.edge=e}}addFloor(e=null){let n=Gg(this._doc,e,{first:this.t("default_floor"),next:o=>this.t("new_floor",{n:o})}),r=structuredClone(this._doc);r.floors=Jl(r.floors,n),this.setDoc(r),this._floorId=n.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let n=rr(this._doc,e,this.hass?.areas);if(n.length===0)return;let r=Au(e,n,()=>I("room"));this.change((o,i)=>i.rooms.push(...r)),this.fit()}duplicateFloor(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=qg(this._doc,n,this.t("floor_copy_name",{name:n.name}),e),o=structuredClone(this._doc);o.floors=Jl(o.floors,r),this.setDoc(o),this._floorId=r.id,this.sel.room=null,this.side.floorCopy=null,this.fit()}moveFloor(e){let n=this._floorId;if(!n)return;let r=Ug(this._doc.floors,n,e);if(r.every((i,s)=>i.id===this._doc.floors[s].id))return;let o=structuredClone(this._doc);o.floors=r.map(i=>o.floors.find(s=>s.id===i.id)),this.setDoc(o)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},print:()=>this.printPlan(),exportImage:(e,n)=>{this.exportPlanImages(e,n)},addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),duplicateFloor:e=>this.duplicateFloor(e),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),roomsFromWalls:()=>this.roomsFromWalls(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:n=>this.selectItem("room",n),patch:n=>this.updateRoom(n),setArea:n=>this.setArea(n),setRect:(n,r)=>this.setRect(n,r),setCorner:(n,r,o)=>this.setPoint(n,r,o),removeCorner:n=>this.deleteVertex(n),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:n=>this.applyPackage(e,n),openSpots:()=>{let n=this.hass?ke(this.hass,e).filter(r=>r.startsWith("light.")):[];this.side.spots=Qg(e,n)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:Ym(this.host,e,this.edgeActions()),climate:$f(this.host,e,n=>this.updateRoom(n)),corner:this.sel.corner}}applyPackage(e,n){if(!this.isAdmin)return;let r=Ud(e,n,()=>I("furniture"));this.change((o,i)=>i.furniture.push(...r)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:r.length})}placeSpots(e){let n=this.side.spots;if(!n||!this.isAdmin)return;let r=gs(e,n);this.change((o,i)=>i.furniture.push(...r)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:r.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,n){if(!this.floor)return;let[r,o]=Ni(e,n,this._doc.settings.wall_interior,this._wallSide),i={...jp(r,o),...this._wallSide!=="center"?{axis:this._wallSide}:{}};this.change((s,a)=>{a.walls=[...a.walls??[],i],Zi(a,ji(a.walls,this._doc.settings.wall_interior,i.id))}),this.selectItem("wall",i.id)}addHole(e,n){if(!this.floor)return;let r=Yp(e,n);this.change((o,i)=>i.furniture.push(r)),this.selectItem("furniture",r.id),this._tool="select"}addStairs(e,n){let r=this.floor;if(!r)return;let[o,i]=[n[0]-e[0],n[1]-e[1]],s=rl("stairs",this._doc,r,[(e[0]+n[0])/2,(e[1]+n[1])/2]),a=o>i*1.2;Object.assign(s,{w:Math.round((a?i:o)*1e3)/1e3,d:Math.round((a?o:i)*1e3)/1e3,rotation:a?90:0}),this.change((l,c)=>c.furniture.push(s)),this.selectItem("furniture",s.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let n=Xp(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let n=ef(e);this.change((r,o)=>o.outdoor.push(n)),this.selectItem("outdoor",n.id)}addRoom(e){if(!this.floor)return;let n=Ji(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((n,r)=>nm(r,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let n=tm(e);this.change((r,o)=>o.rooms.push(n)),this.sel.room=n.id}deleteVertex(e){let n=this.room;n&&(this.change((r,o)=>rm(o,n.id,e)),this.sel.corner=null)}nudgeSelection(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=this.sel.target;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=o?o.kind==="room"?{kind:"room",id:o.id,corner:this.sel.corner}:{kind:o.kind,id:o.id}:null,s=i?Hg(r,i,e,n):tr;return s===tr?!1:(s!==hs&&this.change((a,l)=>s.apply(l)),!0)}addFurniture(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=this.room,o=rl(e,this._doc,n,r?ve(r.points):this.viewCentre());this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}rotateFurniture(e){let n=this.furnitureItem;n&&this.isAdmin&&this.updateFurniture({rotation:nf(n.rotation,e)})}addTaskToFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let n=I("note"),r=Math.max(.3,Math.min(20,Math.round((e.h??1)*100)/100)),o=(e.name??"").trim();this.change((i,s)=>s.notes=[...s.notes??[],{id:n,x:Math.round(e.x*100)/100,z:Math.round(e.z*100)/100,y:r,text:o?`${o}: `:"",repeat_months:12}]),this.selectItem("furniture",null),this._note=n,this._sideOpen=!0}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let n=tf(e);this.change((r,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}vehicleToSpot(e){if(!this.isAdmin)return;let n=rf(e);this.change((r,o)=>{o.furniture=o.furniture.filter(i=>i.id!==e.id),o.furniture.push(n)}),this.selectItem("furniture",n.id)}deviceToFurniture(e,n){if(!this.isAdmin)return;let r=of(e,n);this.change((o,i)=>{i.placements=i.placements.filter(s=>s.entity_id!==e.entity_id),i.furniture.push(r)}),this.sel.device=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let n=e.entity;if(!this.isAdmin||!n||n==="none")return;let r=sf(e,n);this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===n)||i.placements.push(r)}),this.sel.furniture=null,this.selectItem("device",n)}placeDevices(e){let n=this.room;!n||e.length===0||!this.isAdmin||this.change((r,o)=>ol(r,o,n,e))}removeDevice(e){this.change(n=>af(n,e))}centreDevice(){let e=this.device,n=e?this.floor?.rooms.find(i=>i.id===this.roomAt([e.x,e.z])):void 0;if(!e||!n)return;let[r,o]=lf(n);this.updateDevice({x:r,z:o})}spreadCeilingLights(e){let n=this.floor;if(!n)return;let r=sm(e,n.placements);r.length!==0&&this.change((o,i)=>{for(let s of r)Object.assign(i.placements.find(a=>a.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,n){!this.isAdmin||!e&&!n||(this.change(r=>Ng(r,this.shiftScope(),e,n)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>Vg(e,this.shiftScope()))}setArea(e){let n=this.room;n&&this.updateRoom(Rl(n,e,this.hass?.areas??{}))}setRect(e,n){let r=this.room,o=r?om(r,e,n):null;o&&this.updateRoom({points:o})}setPoint(e,n,r){let o=this.room,i=o?im(o,e,n,r):null;i&&this.updateRoom({points:i})}setOpeningPreset(e,n){this._openingPreset=n,this.updateOpening(uf(e,n))}pressRoute(e){let n=this._routeDraft;if(!n||this._tool!=="energy"||!this._floorId||n.points.length>=xu)return;let r=n.key.startsWith("pipe:")&&!e.fine?this.onOtherPipe(e.world,n.key):null,[o,i]=(r??this.snap(e.world,void 0,e.fine)).map(s=>Math.round(s*1e3)/1e3);return this._routeDraft={...n,points:[...n.points,{floor_id:this._floorId,x:o,z:i}]},So}onOtherPipe(e,n){let r=Mo/this._view.scale,o=null,i=(s,a=0)=>{let l=Math.hypot(s[0]-e[0],s[1]-e[1])-a;l<=r&&(!o||l<o.d)&&(o={at:s,d:l})};for(let s of this._doc.energy.routes??[]){if(s.key===n||!s.key.startsWith("pipe:"))continue;let a=s.points.filter(l=>l.floor_id===this._floorId).map(l=>[l.x,l.z]);a.forEach(l=>i(l,r/3));for(let l=0;l+1<a.length;l++){let[c,u]=[a[l],a[l+1]],d=(u[0]-c[0])**2+(u[1]-c[1])**2;if(d<1e-9)continue;let p=Math.min(1,Math.max(0,((e[0]-c[0])*(u[0]-c[0])+(e[1]-c[1])*(u[1]-c[1]))/d));i([c[0]+(u[0]-c[0])*p,c[1]+(u[1]-c[1])*p])}}return o?.at??null}routeActions(){let e=n=>this.change(r=>{r.energy.routes=n(r.energy.routes??[]),r.energy.routes.length||delete r.energy.routes});return{draft:this._routeDraft,start:n=>this._routeDraft={key:n,points:[...this._doc.energy.routes?.find(r=>r.key===n)?.points??[]]},undoPoint:()=>this._routeDraft&&(this._routeDraft={...this._routeDraft,points:this._routeDraft.points.slice(0,-1)}),cancel:()=>this._routeDraft=null,finish:()=>{let n=this._routeDraft;this._routeDraft=null,!(!n||!this.isAdmin)&&e(r=>{let o=r.find(s=>s.key===n.key),i=r.filter(s=>s.key!==n.key);return n.points.length?[...i,{key:n.key,points:n.points,...o?.cable?{cable:!0}:{}}]:i})},clear:n=>this.isAdmin&&e(r=>r.filter(o=>o.key!==n)),setCable:(n,r)=>this.isAdmin&&e(o=>o.map(i=>i.key===n?{...i,cable:r}:i))}}pipeActions(){return{add:()=>this.isAdmin&&this.change(e=>{let n=e.energy.pipes??[];e.energy.pipes=[...n,{id:I("pipe"),name:`${this.t("pipe")} ${n.length+1}`,kind:n.length%2?"return":"supply",entity:null}]}),update:(e,n)=>this.isAdmin&&this.change(r=>{let o=r.energy.pipes?.find(i=>i.id===e);o&&Object.assign(o,n)}),remove:e=>this.isAdmin&&this.change(n=>{n.energy.pipes=(n.energy.pipes??[]).filter(r=>r.id!==e),n.energy.pipes.length||delete n.energy.pipes,n.energy.routes=(n.energy.routes??[]).filter(r=>r.key!==qo(e)),n.energy.routes.length||delete n.energy.routes})}}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,n)=>this.openEnergyDevice(e,n),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,n){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",n.id),this.showPoint(n.x,n.z)}addEnergyDevice(e){let n=this.floor;if(!n||!this.isAdmin)return;let r=i=>i.area_id&&this.hass?.areas?.[i.area_id]?.name||"",o=Lg(e,this._doc,n,{roomLabel:i=>`${i.name} ${r(i)} ${i.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}async importEnergy(){if(!this.hass)return;let e=await Ig({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:n=>this.addEnergyDevice(n),setField:(n,r,o)=>this.change(i=>{let s=i.floors.flatMap(a=>a.furniture).find(a=>a.id===n);s&&(s[r]=o)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(o=>o.id===this.roof.solarId):void 0;if(e)return zg(this.roofDeps(),e);let n=this.sel.furniture?this.floor?.furniture.find(o=>o.id===this.sel.furniture&&Ge.includes(o.type)):void 0;if(n)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${ko(this.host,n,this.furnitureActions())}`;let r=this.energyActions();return m`${ap(this.host,r)}${Tg(this.roofDeps())}${lp(this.host,r)}${hp(this.host,this.routeActions())}${pp(this.host,this.pipeActions(),this.routeActions())}${cp(this.host,r)}${up(this.host)}`}fixItem(e,n,r){if(e)switch(n){case"room":return e.rooms.find(o=>o.id===r);case"opening":return e.openings.find(o=>o.id===r);case"furniture":return e.furniture.find(o=>o.id===r);case"device":return e.placements.find(o=>o.entity_id===r);case"wall":return(e.walls??[]).find(o=>o.id===r);case"outdoor":return e.outdoor.find(o=>o.id===r)}}isFixedItem(e,n){return Zo(this.fixItem(this.floor,e,n),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,n){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let r=!this.isFixedItem(e,n);this.change((o,i)=>{let s=this.fixItem(i,e,n);s&&(s.locked=r)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,n){return!this.isFixedItem(e,n)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,n){if(!this.isAdmin||!this.floor)return;let r=this.toWorld(...n),o=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=o("data-device"),a=o("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),u=o("data-outdoor"),d=o("data-room")??this.roomAt(r);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:u&&!d?i=["outdoor",u]:d&&(i=["room",d]),!i){this._ctx=null;return}let[p,h]=i;this.selectItem(p,h),(p==="opening"||p==="furniture")&&(this.sel.room=this.sel.room??d),this._ctx={x:n[0],y:n[1],kind:p,id:h,at:r}}deleteItem(e,n){if(e==="device"){if(!this.confirmFixedDelete(e,n))return;this.removeDevice(n),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return g;let n=this.isFixedItem(e.kind,e.id),r=this.renderRoot.querySelector(".nf-canvas-wrap"),o=Math.max(4,Math.min(e.x,(r?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(r?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="nf-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${n?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?m`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:g}
      ${e.kind==="furniture"?m`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${n} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${n} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:g}
      ${e.at?m`<button @click=${s(()=>this.addNote(e.at))}>✎ ${this.t("note_add")}</button>`:g}
      <button class="nf-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,n){if(!this.isAdmin)return g;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:g;let r=this.isFixedItem(e,n);return m`<button class="nf-btn nf-fix" aria-pressed=${r} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,n)}>
      ${r?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}dropOffset(e,n,r,o,i){let s=e.points[n],a=e.points[(n+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((r[0]-s[0])*(a[0]-s[0])+(r[1]-s[1])*(a[1]-s[1]))/l;return cf(l,c,o,i?.01:this._doc.settings.grid)}selectItem(e,n){this.side.notice=null,n&&(this._sideOpen=!0),this.sel.select(e,n,{roomOfDevice:r=>{let o=this.floor?.placements.find(i=>i.entity_id===r);return(o&&this.roomAt([o.x,o.z]))??null},roomOfOpening:r=>this.floor?.openings.find(o=>o.id===r)?.room_id??null})}get opening(){let e=this.sel.opening?this.floor?.openings.find(o=>o.id===this.sel.opening):void 0;if(!e?.front||!this.floor)return e;let n=this.floor.rooms.find(o=>o.id===e.room_id),r=n?Ln(n,Wt(this.floor.openings,e)):null;return r?{...e,width:r.width}:e}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,n){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=null;for(let _ of r.walls??[]){let b=He({room_id:"",edge:0,wall:_.id},r.rooms,r.walls??[]);if(!b)continue;let[w,v]=this.toScreen(_.a),[y,x]=this.toScreen(_.b),k=(y-w)**2+(x-v)**2||1,S=Math.min(1,Math.max(0,((n[0]-w)*(y-w)+(n[1]-v)*(x-v))/k)),$=Math.hypot(n[0]-w-(y-w)*S,n[1]-v-(x-v)*S),E=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],T=r.rooms.find(P=>P.points.length>=3&&W(E,P.points));$<Mo*2.2&&(!o||$-1<o.d)&&(o={room:b.room,edge:0,d:$-1,wall:_.id,roomId:T?.id??_.id})}for(let _ of r.rooms)for(let b=0;b<_.points.length;b++){let[w,v]=this.toScreen(_.points[b]),[y,x]=this.toScreen(_.points[(b+1)%_.points.length]),k=(y-w)**2+(x-v)**2||1,S=Math.min(1,Math.max(0,((n[0]-w)*(y-w)+(n[1]-v)*(x-v))/k)),$=Math.hypot(n[0]-w-(y-w)*S,n[1]-v-(x-v)*S),E=$-(_.id===this.sel.room?.5:0);$<Mo*2.2&&(!o||E<o.d)&&(o={room:_,edge:b,d:E})}if(!o)return!1;let{room:i,edge:s,wall:a}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],u=Math.hypot(c[0]-l[0],c[1]-l[1]),d=xn[e],p=d.type;if(d.style==="glass_wall"&&!a){let _=Ta(i,this.toWorld(...n)),b=Fa(i,_-d.width/2,d.width);if(b&&b.length>1){let w=I("front"),v=b.map(y=>({id:I("opening"),room_id:o.roomId??i.id,edge:y.edge,offset:y.offset,width:y.width,front:w,type:p,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",...ei.has(d.style)?{}:{style:d.style},...d.opens?{opens:d.opens}:{},cover:null,contact:null,contact2:null,tilt:null}));return this.change((y,x)=>x.openings.push(...v)),this._tool="select",this.selectItem("opening",v[0].id),!0}}let h=Ve(Math.min(d.width,Math.max(.3,u-.1))),f={id:I("opening"),room_id:o.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.dropOffset(i,s,this.toWorld(...n),h,!1),width:h,type:p,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",...d.style&&!ei.has(d.style)?{style:d.style}:{},...d.opens?{opens:d.opens}:{},cover:null,contact:null,contact2:null,tilt:null};return this.change((_,b)=>b.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(e){let n=this.sel.opening;this.change((r,o)=>{let i=o.openings.find(u=>u.id===n);if(!i)return;let s=Wt(o.openings,i),a=i.wall?null:o.rooms.find(u=>u.id===i.room_id),l=a&&i.type==="window"&&i.style==="glass_wall"&&(e.width!=null||e.offset!=null),c=l&&a?Ln(a,s):null;if(l&&a&&c){let u=Math.max(.3,e.width??c.width),d=c.from;e.width!=null&&(d+=(c.width-u)/2),e.offset!=null&&(d+=e.offset-i.offset),d=Math.max(0,Math.min(Jr(a)-u,d));let p=Qr(o.openings,a,{...i,...e},d,u,()=>I("opening"));p&&(o.openings=p);return}for(let u of s)Object.assign(u,e)})}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((n,r)=>{let o=r.openings.find(s=>s.id===e),i=new Set((o?Wt(r.openings,o):[o]).map(s=>s?.id));r.openings=r.openings.filter(s=>!i.has(s.id))}),this.sel.opening=null)}snapToWall(e){return this.floor?Ar(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let n=this.sel.furniture;this.change((r,o)=>Object.assign(o.furniture.find(i=>i.id===n),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((n,r)=>r.furniture=r.furniture.filter(o=>o.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let n=this.sel.device;this.change((r,o)=>Object.assign(o.placements.find(i=>i.entity_id===n),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;if(this._doc.settings.rooms_as_drawn){this.side.notice=this.t("gaps_not_needed");return}let{rooms:n,gaps:r}=pd(e.rooms);if(!r.length){this.side.notice=this.t("gaps_none");return}let o=fd(r);this.change((i,s)=>{s.rooms=n,o&&(i.settings.wall_interior=o)}),this.side.notice=o?this.t("gaps_closed_wall",{n:r.length,t:q(this.hass,o,2)}):this.t("gaps_closed",{n:r.length})}roomsFromWalls(){let e=this.floor;if(!e||!this.isAdmin)return;let n=oa(e);if(!n.length){this.side.notice=this.t(_d(e)?"rooms_from_walls_covered":"rooms_from_walls_none");return}this.change((r,o)=>{for(let i of n){let s=Ji(i,this.t("new_room",{n:o.rooms.length+1}));s.wall_heights=i.map(()=>0),o.rooms.push(s)}}),this.side.notice=this.t("rooms_from_walls_done",{n:n.length})}roomFromWallsAt(e){let n=this.floor;if(!n||!this.isAdmin||!n.walls?.length)return;let r=oa(n).find(i=>W(e,i));if(!r)return;let o=Ji(r,this.t("new_room",{n:n.rooms.length+1}));o.wall_heights=r.map(()=>0),this.change((i,s)=>s.rooms.push(o)),this.sel.room=o.id,this.sel.corner=null,this._tool="select"}updateFloor(e){this.change((n,r)=>Object.assign(r,e))}updateRoom(e){let n=this.sel.room;this.change((r,o)=>Object.assign(o.rooms.find(i=>i.id===n),e))}render(){Mf(this._doc.settings.units);let e=this.floor,n=e?we(e.rooms,xe(this._doc.settings),e.walls??[]):null;return m`
      ${em(this.host,this.lib.preview)}
      ${this._wallView?m`<nf-wall-view .host=${this.host} .doc=${this._doc} .roomId=${this._wallView.roomId} .edge=${this._wallView.edge} @close=${()=>this._wallView=null}></nf-wall-view>`:g}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            ${this.narrow?m`<select class="nf-tool-select" aria-label=${this.t("tool_select")} ?disabled=${!e} @change=${r=>{this._tool=r.target.value,this._draft=[],this._cursor=null,this._sideOpen=this._tool!=="select"}}>
                  ${K_.filter(r=>this.isAdmin||r==="select").map(r=>m`<option value=${r} ?selected=${this._tool===r}>${this.t(`tool_${r}`)}</option>`)}
                </select>`:g}
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")} ?hidden=${this.narrow}>
              ${K_.map(r=>m`<button
                  aria-pressed=${this._tool===r}
                  ?disabled=${!e||!this.isAdmin&&r!=="select"}
                  @click=${()=>{this._tool=r,this._draft=[],this._cursor=null,this._sideOpen=r!=="select"}}
                >
                  ${this.t(`tool_${r}`)}
                </button>`)}
            </div>
            <div class="nf-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?m`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:g}
              <button aria-pressed=${this._dims} title=${this.t("plan_dims_hint")} @click=${()=>this.setDims(!this._dims)}>📏 ${this.t("plan_dims")}</button>
            </div>
            ${this._tool==="wall"?m`<label class="nf-wallside" title=${this.t("wall_side_hint")}>${this.t("wall_side")}
                  <select @change=${r=>this._wallSide=r.target.value}>
                    ${["center","left","right"].map(r=>m`<option value=${r} ?selected=${this._wallSide===r}>${this.t(`wall_side_${r}`)}</option>`)}
                  </select>
                </label>`:g}
            ${n?.warnings.length?m`<span class="nf-warn">${this.t("overlap_warning")}</span>`:g}
          </div>
          <div class="nf-stage-pair ${this._split?"nf-split":""}" style=${this._split&&!this.narrow?`--nf-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="nf-canvas-wrap">
            ${this.houseTool?m`<div class="nf-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:g}
            <svg
              class="nf-plan nf-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.planLayers(e,n?.walls??null)}
            </svg>
            ${this.renderContext()}
            <p class="nf-hint ${this._fixedHint?"nf-hint-fixed":""}">${this._pick?this.t("robot_cal_doing"):e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
            <button class="nf-keys-open" title=${this.t("keys_title")} aria-label=${this.t("keys_title")} @click=${()=>this._keys=!0}>?</button>
            ${this.isAdmin?P_((r,o)=>this.t(r,o),this._tour,r=>{this._tour=r,r===null&&T_()}):g}
            ${this._keys?z_(r=>this.t(r),()=>this._keys=!1):g}
          </div>
          ${this._split&&!this.narrow?m`<div class="nf-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:g}
          ${this._split?this.render3d():g}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}selectFrom3d(e,n){this.selectItem(e,n),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("nextfloor.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?m`<aside class="nf-side nf-side-strip"></aside>
      <aside class="nf-side nf-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.safeSide(e)}
      </aside>`:m`<aside class="nf-side nf-side-strip">
        <button class="nf-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this.sel.furniture||this.sel.device||this.sel.opening?m`<button class="nf-strip-btn nf-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:g}
        <button class="nf-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="nf-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:m`<aside class="nf-side">${this.renderPinRow()}${this.safeSide(e)}</aside>`}safeSide(e){try{return this.renderSide(e)}catch(n){return console.error("NextFloor: the side bar could not be drawn",n),m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        <p class="nf-note">${this.t("side_failed",{error:n instanceof Error?n.message:String(n)})}</p>`}}renderPinRow(e=!1){return!this._split||this.narrow?g:m`<div class="nf-pin-row">
      ${e?m`<button class="nf-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:g}
      <button class="nf-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let n=this.room,r=this.isAdmin;if(this._tool==="roof")return kg(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&r)return this._studio?h_(this.host,this._studio,{change:s=>this._studio&&(this._studio={...this._studio,recipe:s,error:null}),save:()=>{this.saveStudio()},close:()=>this._studio=null}):m`${this.furnitureItem?m`${ko(this.host,this.furnitureItem,this.furnitureActions())}${this.studioButton()}`:g} ${Qf(this.host,this.lib,this.room?.name,this.libraryActions())}`;let o=this._tool==="measure"?null:this.furnitureItem?ko(this.host,this.furnitureItem,this.furnitureActions()):this.opening?Bl(this.host,this.opening,this.openingActions()):this.device?Ol(this.host,this.device,this.deviceActions()):this.outdoorArea?il(this.host,this.outdoorArea,this.outdoorActions()):this.freeWall?sl(this.host,this.freeWall,this.freeWallActions()):null,i=this._note?e?.notes?.find(s=>s.id===this._note):void 0;return i?m`<button class="nf-btn nf-back" @click=${()=>this._note=null}>‹ ${this.t("back_to_floor")}</button>
        ${Om(this.host,i,{patch:s=>this.change((a,l)=>Object.assign(l.notes.find(c=>c.id===i.id),s)),remove:()=>{this.change((s,a)=>a.notes=(a.notes??[]).filter(l=>l.id!==i.id)),this._note=null}})}`:o?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${o}`:n&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${ec(this.host,this.side,n,this.roomActions(n))} ${ul(this.host,this.side,n,this.deviceListActions())}`:m`
      ${r?g:m`<p class="nf-note">${this.t("read_only")}</p>`}
      ${this._check?p_(this.host,x_(this._doc,this.hass),{fix:s=>this.fixFinding(s),ignore:s=>this.ignoreDevices(s),resetIgnored:()=>this.change(s=>s.settings.check_ignore=null),close:()=>this._check=!1}):r?f_(this.host,()=>this._check=!0):g}
      ${Xg(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?ff(this.host,this.measureState(),this.measureActions()):this.freeWall?sl(this.host,this.freeWall,this.freeWallActions()):this.outdoorArea?il(this.host,this.outdoorArea,this.outdoorActions()):this.opening?Bl(this.host,this.opening,this.openingActions()):this.furnitureItem?ko(this.host,this.furnitureItem,this.furnitureActions()):this.device?Ol(this.host,this.device,this.deviceActions()):n?m`${ec(this.host,this.side,n,this.roomActions(n))} ${ul(this.host,this.side,n,this.deviceListActions())}`:e?r_(this.host,e,{select:s=>this.selectItem("room",s)}):g}
      ${r?oh(this.host,()=>this.paneView()):g} ${r?rh(this.host,()=>this.groundView()):g} ${r?nh(this.host):g}
      ${dp(this.host)}
      ${r&&!0?ih(this.host):g} ${r?sh(this.host,this._doc):g} ${r?dh(this.host):g}
      ${e&&r?Pp(this.host,this.bg,e):g} ${r?Xh(this.host,this.settingsActions):g}
      ${r?Ih(this.host,this.backup):g}
    `}openingIsExterior(e){let n=this.floor,r=n?He(e,n.rooms,n.walls??[]):null;if(!n||!r)return!1;let o=we(n.rooms,xe(this._doc.settings),n.walls??[]);return Ht(o.walls,e,r)?.wall.exterior??!1}groundView(){let e=this.paneView();if(!e)return alert(this.t("floor_start_view_need_pane")),null;let n=this.floor?.elevation??0;return e.target?{...e,target:{...e.target,y:Ve(e.target.y+n)}}:e}paneView(){let n=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!n)return null;let r=n.target;return{theta:Ve(n.theta),phi:Ve(n.phi),radius:Ve(n.radius),...r?{target:{x:Ve(r.x),y:Ve(r.y),z:Ve(r.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}storedPictures(){let e=[];for(let n of this._doc.floors)for(let r of n.furniture)for(let o of r.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!e.includes(o.image)&&e.push(o.image);return e}static styles=[Qe,mt,o_]};customElements.get("nf-editor")||customElements.define("nf-editor",dc);export{dc as NfEditor};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
