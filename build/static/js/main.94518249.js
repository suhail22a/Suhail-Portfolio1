/*! For license information please see main.94518249.js.LICENSE.txt */
(()=>{var e={809:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,i,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(i=r;0!==i--;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(i=r;0!==i--;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=r;0!==i--;){var o=a[i];if(("_owner"!==o||!t.$$typeof)&&!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n}},219:(e,t,n)=>{"use strict";var r=n(86),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return r.isMemo(e)?o:s[e.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=o;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,p=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(p){var i=h(n);i&&i!==p&&e(t,i,r)}var o=u(n);d&&(o=o.concat(d(n)));for(var s=l(t),m=l(n),g=0;g<o.length;++g){var v=o[g];if(!a[v]&&(!r||!r[v])&&(!m||!m[v])&&(!s||!s[v])){var y=f(n,v);try{c(t,v,y)}catch(b){}}}}return t}},381:(e,t,n)=>{var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,d=c||u||Function("return this")(),f=Object.prototype.toString,h=Math.max,p=Math.min,m=function(){return d.Date.now()};function g(e,t,n){var i,a,o,s,l,c,u=0,d=!1,f=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=a;return i=a=void 0,u=t,s=e.apply(r,n)}function w(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-u>=o}function x(){var e=m();if(w(e))return k(e);l=setTimeout(x,function(e){var n=t-(e-c);return f?p(n,o-(e-u)):n}(e))}function k(e){return l=void 0,g&&i?b(e):(i=a=void 0,s)}function S(){var e=m(),n=w(e);if(i=arguments,a=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(x,t),d?b(e):s}(c);if(f)return l=setTimeout(x,t),b(c)}return void 0===l&&(l=setTimeout(x,t)),s}return t=y(t)||0,v(n)&&(d=!!n.leading,o=(f="maxWait"in n)?h(y(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=c=a=l=void 0},S.flush=function(){return void 0===l?s:k(m())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||s.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(r);return v(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),g(e,t,{leading:i,maxWait:t,trailing:a})}},497:(e,t,n)=>{"use strict";var r=n(218);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,a,o){if(o!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}},173:(e,t,n)=>{e.exports=n(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},341:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var a=n(43),o=i(a),s=i(n(381)),l=i(n(173)),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var r=!0;r;){var i=e,a=t,o=n;r=!1,null===i&&(i=Function.prototype);var s=Object.getOwnPropertyDescriptor(i,a);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(o)}var c=Object.getPrototypeOf(i);if(null===c)return;e=c,t=a,n=o,r=!0,s=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"===typeof window,this.listener=(0,s.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),this.listener.cancel(),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout((function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return o.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(a.Component);t.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:l.default.string,animateOut:l.default.string,offset:l.default.number,duration:l.default.number,delay:l.default.number,initiallyVisible:l.default.bool,animateOnce:l.default.bool,style:l.default.object,scrollableParentSelector:l.default.string,className:l.default.string,animatePreScroll:l.default.bool},e.exports=t.default},479:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case a:case s:case o:case f:case h:return e;default:switch(e=e&&e.$$typeof){case u:case c:case d:case m:case p:case l:return e;default:return t}}case i:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return v(e)===a}},163:(e,t,n)=>{"use strict";e.exports=n(479)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},p={};function m(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(p,e)||!d.call(h,e)&&(f.test(e)?p[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var w=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,x=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),P=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),N=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var L,A=Object.assign;function D(e){if(void 0===L)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);L=t&&t[1]||""}return"\n"+L+e}var F=!1;function V(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&"string"===typeof c.stack){for(var i=c.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?D(e):""}function U(e){switch(e.tag){case 5:return D(e.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return e=V(e.type,!1);case 11:return e=V(e.type.render,!1);case 1:return e=V(e.type,!0);default:return""}}function $(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case _:return"StrictMode";case j:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case O:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:$(e.type)||"Memo";case N:t=e._payload,e=e._init;try{return $(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function B(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=B(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=B(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function J(e,t){G(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ae(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue,de=(ue=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ue(e,t)}))}:ue);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(he).forEach((function(e){pe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var ve=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var we=null;function xe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,_e=null;function Ce(e){if(e=bi(e)){if("function"!==typeof ke)throw Error(a(280));var t=e.stateNode;t&&(t=xi(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?_e?_e.push(e):_e=[e]:Se=e}function Pe(){if(Se){var e=Se,t=_e;if(_e=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Oe(e,t){return e(t)}function je(){}var ze=!1;function Te(e,t,n){if(ze)return e(t,n);ze=!0;try{return Oe(e,t,n)}finally{ze=!1,(null!==Se||null!==_e)&&(je(),Pe())}}function Ne(e,t){var n=e.stateNode;if(null===n)return null;var r=xi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Re=!1;if(u)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ue){Re=!1}function Me(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Le=!1,Ae=null,De=!1,Fe=null,Ve={onError:function(e){Le=!0,Ae=e}};function Ue(e,t,n,r,i,a,o,s,l){Le=!1,Ae=null,Me.apply(Ve,arguments)}function $e(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if($e(e)!==e)throw Error(a(188))}function Be(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=$e(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return We(i),e;if(o===r)return We(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Xe=i.unstable_cancelCallback,qe=i.unstable_shouldYield,Qe=i.unstable_requestPaint,Ge=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,at=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ct=64,ut=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=dt(s):0!==(a&=o)&&(r=dt(a))}else 0!==(o=n&~i)?r=dt(o):0!==a&&(r=dt(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-ot(t)),r|=e[n],t&=~i;return r}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ct;return 0===(4194240&(ct<<=1))&&(ct=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bt=0;function wt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var xt,kt,St,_t,Ct,Et=!1,Pt=[],Ot=null,jt=null,zt=null,Tt=new Map,Nt=new Map,Rt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nt.delete(t.pointerId)}}function Lt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=bi(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function At(e){var t=yi(e.target);if(null!==t){var n=$e(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=bi(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);we=r,n.target.dispatchEvent(r),we=null,t.shift()}return!0}function Ft(e,t,n){Dt(e)&&n.delete(t)}function Vt(){Et=!1,null!==Ot&&Dt(Ot)&&(Ot=null),null!==jt&&Dt(jt)&&(jt=null),null!==zt&&Dt(zt)&&(zt=null),Tt.forEach(Ft),Nt.forEach(Ft)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,Vt)))}function $t(e){function t(t){return Ut(t,e)}if(0<Pt.length){Ut(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Ot&&Ut(Ot,e),null!==jt&&Ut(jt,e),null!==zt&&Ut(zt,e),Tt.forEach(t),Nt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)At(n),null===n.blockedOn&&Rt.shift()}var Ht=w.ReactCurrentBatchConfig,Wt=!0;function Bt(e,t,n,r){var i=bt,a=Ht.transition;Ht.transition=null;try{bt=1,Kt(e,t,n,r)}finally{bt=i,Ht.transition=a}}function Yt(e,t,n,r){var i=bt,a=Ht.transition;Ht.transition=null;try{bt=4,Kt(e,t,n,r)}finally{bt=i,Ht.transition=a}}function Kt(e,t,n,r){if(Wt){var i=qt(e,t,n,r);if(null===i)Wr(e,t,r,Xt,n),Mt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Ot=Lt(Ot,e,t,n,r,i),!0;case"dragenter":return jt=Lt(jt,e,t,n,r,i),!0;case"mouseover":return zt=Lt(zt,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Tt.set(a,Lt(Tt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Nt.set(a,Lt(Nt.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==i;){var a=bi(i);if(null!==a&&xt(a),null===(a=qt(e,t,n,r))&&Wr(e,t,r,Xt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Xt=null;function qt(e,t,n,r){if(Xt=null,null!==(e=yi(e=xe(r))))if(null===(t=$e(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Gt?Gt.value:Gt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,sn,ln,cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},un=an(cn),dn=A({},cn,{view:0,detail:0}),fn=an(dn),hn=A({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(on=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=on=0,ln=e),on)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),pn=an(hn),mn=an(A({},hn,{dataTransfer:0})),gn=an(A({},dn,{relatedTarget:0})),vn=an(A({},cn,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=A({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),wn=an(A({},cn,{data:0})),xn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return _n}var En=A({},dn,{key:function(e){if(e.key){var t=xn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(En),On=an(A({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),jn=an(A({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),zn=an(A({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=A({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nn=an(Tn),Rn=[9,13,27,32],In=u&&"CompositionEvent"in window,Mn=null;u&&"documentMode"in document&&(Mn=document.documentMode);var Ln=u&&"TextEvent"in window&&!Mn,An=u&&(!In||Mn&&8<Mn&&11>=Mn),Dn=String.fromCharCode(32),Fn=!1;function Vn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var $n=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Bn(e,t,n,r){Ee(r),0<(t=Yr(t,"onChange")).length&&(n=new un("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Xn(e){Dr(e,0)}function qn(e){if(K(wi(e)))return e}function Qn(e,t){if("change"===e)return t}var Gn=!1;if(u){var Jn;if(u){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Gn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&qn(Kn)){var t=[];Bn(t,Kn,e,xe(e)),Te(Xn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Kn)}function ar(e,t){if("click"===e)return qn(t)}function or(e,t){if("input"===e||"change"===e)return qn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function cr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ur(e,t){var n,r=cr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=cr(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ur(n,a);var o=ur(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=u&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function wr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==X(r)||("selectionStart"in(r=gr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new un("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionend:xr("Transition","TransitionEnd")},Sr={},_r={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in _r)return Sr[e]=n[t];return e}u&&(_r=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),Pr=Cr("animationiteration"),Or=Cr("animationstart"),jr=Cr("transitionend"),zr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(e,t){zr.set(e,t),l(t,[e])}for(var Rr=0;Rr<Tr.length;Rr++){var Ir=Tr[Rr];Nr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}Nr(Er,"onAnimationEnd"),Nr(Pr,"onAnimationIteration"),Nr(Or,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(jr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Ar(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,l,c){if(Ue.apply(this,arguments),Le){if(!Le)throw Error(a(198));var u=Ae;Le=!1,Ae=null,De||(De=!0,Fe=u)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Ar(i,s,c),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Ar(i,s,c),a=l}}}if(De)throw e=Fe,De=!1,Fe=null,e}function Fr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Vr(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Ur]){e[Ur]=!0,o.forEach((function(t){"selectionchange"!==t&&(Lr.has(t)||Vr(t,!1,e),Vr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Vr("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(Qt(t)){case 1:var i=Bt;break;case 4:i=Yt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=yi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Te((function(){var r=a,i=xe(n),o=[];e:{var s=zr.get(e);if(void 0!==s){var l=un,c=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=Pn;break;case"focusin":c="focus",l=gn;break;case"focusout":c="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=jn;break;case Er:case Pr:case Or:l=vn;break;case jr:l=zn;break;case"scroll":l=fn;break;case"wheel":l=Nn;break;case"copy":case"cut":case"paste":l=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=On}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==s?s+"Capture":null:s;u=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=Ne(p,f))&&u.push(Br(p,m,h)))),d)break;p=p.return}0<u.length&&(s=new l(s,c,null,n,i),o.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===we||!(c=n.relatedTarget||n.fromElement)||!yi(c)&&!c[pi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?yi(c):null)&&(c!==(d=$e(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=pn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(u=On,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:wi(l),h=null==c?s:wi(c),(s=new u(m,p+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,yi(i)===r&&((u=new u(f,p+"enter",c,n,i)).target=h,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(f=c,p=0,h=u=l;h;h=Kr(h))p++;for(h=0,m=f;m;m=Kr(m))h++;for(;0<p-h;)u=Kr(u),p--;for(;0<h-p;)f=Kr(f),h--;for(;p--;){if(u===f||null!==f&&u===f.alternate)break e;u=Kr(u),f=Kr(f)}u=null}else u=null;null!==l&&Xr(o,s,l,u,!1),null!==c&&null!==d&&Xr(o,d,c,u,!0)}if("select"===(l=(s=r?wi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=Qn;else if(Wn(s))if(Gn)g=or;else{g=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ar);switch(g&&(g=g(e,r))?Bn(o,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?wi(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,wr(o,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":wr(o,n,i)}var y;if(In)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else $n?Vn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(An&&"ko"!==n.locale&&($n||"onCompositionStart"!==b?"onCompositionEnd"===b&&$n&&(y=en()):(Jt="value"in(Gt=i)?Gt.value:Gt.textContent,$n=!0)),0<(v=Yr(r,b)).length&&(b=new wn(b,e,null,n,i),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=Un(n))&&(b.data=y))),(y=Ln?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Fn=!0,Dn);case"textInput":return(e=t.data)===Dn&&Fn?null:e;default:return null}}(e,n):function(e,t){if($n)return"compositionend"===e||!In&&Vn(e,t)?(e=en(),Zt=Jt=Gt=null,$n=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return An&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new wn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=y))}Dr(o,t)}))}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Ne(e,n))&&r.unshift(Br(e,a,i)),null!=(a=Ne(e,t))&&r.push(Br(e,a,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Ne(n,a))&&o.unshift(Br(n,l,s)):i||null!=(l=Ne(n,a))&&o.push(Br(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var qr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Qr,"")}function Jr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(a(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,ai="function"===typeof Promise?Promise:void 0,oi="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ai?function(e){return ai.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void $t(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);$t(t)}function ci(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,hi="__reactProps$"+di,pi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,vi="__reactHandles$"+di;function yi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[fi])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function bi(e){return!(e=e[fi]||e[pi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function wi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function xi(e){return e[hi]||null}var ki=[],Si=-1;function _i(e){return{current:e}}function Ci(e){0>Si||(e.current=ki[Si],ki[Si]=null,Si--)}function Ei(e,t){Si++,ki[Si]=e.current,e.current=t}var Pi={},Oi=_i(Pi),ji=_i(!1),zi=Pi;function Ti(e,t){var n=e.type.contextTypes;if(!n)return Pi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ni(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ri(){Ci(ji),Ci(Oi)}function Ii(e,t,n){if(Oi.current!==Pi)throw Error(a(168));Ei(Oi,t),Ei(ji,n)}function Mi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,H(e)||"Unknown",i));return A({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,zi=Oi.current,Ei(Oi,e),Ei(ji,ji.current),!0}function Ai(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Mi(e,t,zi),r.__reactInternalMemoizedMergedChildContext=e,Ci(ji),Ci(Oi),Ei(Oi,e)):Ci(ji),Ei(ji,n)}var Di=null,Fi=!1,Vi=!1;function Ui(e){null===Di?Di=[e]:Di.push(e)}function $i(){if(!Vi&&null!==Di){Vi=!0;var e=0,t=bt;try{var n=Di;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Di=null,Fi=!1}catch(i){throw null!==Di&&(Di=Di.slice(e+1)),Ke(Ze,$i),i}finally{bt=t,Vi=!1}}return null}var Hi=[],Wi=0,Bi=null,Yi=0,Ki=[],Xi=0,qi=null,Qi=1,Gi="";function Ji(e,t){Hi[Wi++]=Yi,Hi[Wi++]=Bi,Bi=e,Yi=t}function Zi(e,t,n){Ki[Xi++]=Qi,Ki[Xi++]=Gi,Ki[Xi++]=qi,qi=e;var r=Qi;e=Gi;var i=32-ot(r)-1;r&=~(1<<i),n+=1;var a=32-ot(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qi=1<<32-ot(t)+i|n<<i|r,Gi=a+e}else Qi=1<<a|n<<i|r,Gi=e}function ea(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function ta(e){for(;e===Bi;)Bi=Hi[--Wi],Hi[Wi]=null,Yi=Hi[--Wi],Hi[Wi]=null;for(;e===qi;)qi=Ki[--Xi],Ki[Xi]=null,Gi=Ki[--Xi],Ki[Xi]=null,Qi=Ki[--Xi],Ki[Xi]=null}var na=null,ra=null,ia=!1,aa=null;function oa(e,t){var n=Tc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=ci(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qi?{id:Qi,overflow:Gi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ca(e){if(ia){var t=ra;if(t){var n=t;if(!sa(e,t)){if(la(e))throw Error(a(418));t=ci(n.nextSibling);var r=na;t&&sa(e,t)?oa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(a(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function ua(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function da(e){if(e!==na)return!1;if(!ia)return ua(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw fa(),Error(a(418));for(;t;)oa(e,t),t=ci(t.nextSibling)}if(ua(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=ci(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?ci(e.stateNode.nextSibling):null;return!0}function fa(){for(var e=ra;e;)e=ci(e.nextSibling)}function ha(){ra=na=null,ia=!1}function pa(e){null===aa?aa=[e]:aa.push(e)}var ma=w.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function va(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){return(0,e._init)(e._payload)}function ba(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Ac(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===N&&ya(a)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=Ic(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Dc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Mc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ac(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case x:return(n=Ic(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case k:return(t=Dc(t,e.mode,n)).return=e,t;case N:return f(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Mc(t,e.mode,n,null)).return=e,t;va(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case x:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case N:return h(e,t,(i=n._init)(n._payload),r)}if(te(n)||M(n))return null!==i?null:d(e,t,n,r,null);va(e,n)}return null}function p(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case x:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case N:return p(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||M(r))return d(t,e=e.get(n)||null,r,i,null);va(t,r)}return null}function m(i,a,s,l){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),a=o(v,a,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===s.length)return n(i,d),ia&&Ji(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=f(i,s[m],l))&&(a=o(d,a,m),null===u?c=d:u.sibling=d,u=d);return ia&&Ji(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=p(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach((function(e){return t(i,e)})),ia&&Ji(i,m),c}function g(i,s,l,c){var u=M(l);if("function"!==typeof u)throw Error(a(150));if(null==(l=u.call(l)))throw Error(a(151));for(var d=u=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=h(i,m,y.value,c);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(i,m),s=o(b,s,g),null===d?u=b:d.sibling=b,d=b,m=v}if(y.done)return n(i,m),ia&&Ji(i,g),u;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(i,y.value,c))&&(s=o(y,s,g),null===d?u=y:d.sibling=y,d=y);return ia&&Ji(i,g),u}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=p(m,i,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=o(y,s,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(i,e)})),ia&&Ji(i,g),u}return function e(r,a,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case x:e:{for(var c=o.key,u=a;null!==u;){if(u.key===c){if((c=o.type)===S){if(7===u.tag){n(r,u.sibling),(a=i(u,o.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===N&&ya(c)===u.type){n(r,u.sibling),(a=i(u,o.props)).ref=ga(r,u,o),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===S?((a=Mc(o.props.children,r.mode,l,o.key)).return=r,r=a):((l=Ic(o.type,o.key,o.props,null,r.mode,l)).ref=ga(r,a,o),l.return=r,r=l)}return s(r);case k:e:{for(u=o.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Dc(o,r.mode,l)).return=r,r=a}return s(r);case N:return e(r,a,(u=o._init)(o._payload),l)}if(te(o))return m(r,a,o,l);if(M(o))return g(r,a,o,l);va(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Ac(o,r.mode,l)).return=r,r=a),s(r)):n(r,a)}}var wa=ba(!0),xa=ba(!1),ka=_i(null),Sa=null,_a=null,Ca=null;function Ea(){Ca=_a=Sa=null}function Pa(e){var t=ka.current;Ci(ka),e._currentValue=t}function Oa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ja(e,t){Sa=e,Ca=_a=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bs=!0),e.firstContext=null)}function za(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},null===_a){if(null===Sa)throw Error(a(308));_a=e,Sa.dependencies={lanes:0,firstContext:e}}else _a=_a.next=e;return t}var Ta=null;function Na(e){null===Ta?Ta=[e]:Ta.push(e)}function Ra(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Na(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ia(e,r)}function Ia(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ma=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Aa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Da(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ol)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ia(e,n)}return null===(i=r.interleaved)?(t.next=t,Na(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ia(e,n)}function Va(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Ua(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $a(e,t,n,r){var i=e.updateQueue;Ma=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var f=s.lane,h=s.eventTime;if((r&f)===f){null!==u&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=n,m.tag){case 1:if("function"===typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null===(f="function"===typeof(p=m.payload)?p.call(h,d,f):p)||void 0===f)break e;d=A({},d,f);break e;case 2:Ma=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Ll|=o,e.lanes=o,e.memoizedState=d}}function Ha(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Wa={},Ba=_i(Wa),Ya=_i(Wa),Ka=_i(Wa);function Xa(e){if(e===Wa)throw Error(a(174));return e}function qa(e,t){switch(Ei(Ka,t),Ei(Ya,e),Ei(Ba,Wa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Ba),Ei(Ba,t)}function Qa(){Ci(Ba),Ci(Ya),Ci(Ka)}function Ga(e){Xa(Ka.current);var t=Xa(Ba.current),n=le(t,e.type);t!==n&&(Ei(Ya,e),Ei(Ba,n))}function Ja(e){Ya.current===e&&(Ci(Ba),Ci(Ya))}var Za=_i(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=w.ReactCurrentDispatcher,io=w.ReactCurrentBatchConfig,ao=0,oo=null,so=null,lo=null,co=!1,uo=!1,fo=0,ho=0;function po(){throw Error(a(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,o){if(ao=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:es,e=n(r,i),uo){o=0;do{if(uo=!1,fo=0,25<=o)throw Error(a(301));o+=1,lo=so=null,t.updateQueue=null,ro.current=ts,e=n(r,i)}while(uo)}if(ro.current=Jo,t=null!==so&&null!==so.next,ao=0,lo=so=oo=null,co=!1,t)throw Error(a(300));return e}function vo(){var e=0!==fo;return fo=0,e}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?oo.memoizedState=lo=e:lo=lo.next=e,lo}function bo(){if(null===so){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===lo?oo.memoizedState:lo.next;if(null!==t)lo=t,so=e;else{if(null===e)throw Error(a(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===lo?oo.memoizedState=lo=e:lo=lo.next=e}return lo}function wo(e,t){return"function"===typeof t?t(e):t}function xo(e){var t=bo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((ao&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=f,s=r):c=c.next=f,oo.lanes|=d,Ll|=d}u=u.next}while(null!==u&&u!==o);null===c?s=r:c.next=l,sr(r,t.memoizedState)||(bs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,oo.lanes|=o,Ll|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=bo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);sr(o,t.memoizedState)||(bs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function _o(e,t){var n=oo,r=bo(),i=t(),o=!sr(r.memoizedState,i);if(o&&(r.memoizedState=i,bs=!0),r=r.queue,Lo(Po.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,To(9,Eo.bind(null,n,r,i,t),void 0,null),null===jl)throw Error(a(349));0!==(30&ao)||Co(n,t,i)}return i}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Eo(e,t,n,r){t.value=n,t.getSnapshot=r,Oo(t)&&jo(e)}function Po(e,t,n){return n((function(){Oo(t)&&jo(e)}))}function Oo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function jo(e){var t=Ia(e,1);null!==t&&nc(t,e,1,-1)}function zo(e){var t=yo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:e},t.queue=e,e=e.dispatch=Xo.bind(null,oo,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function No(){return bo().memoizedState}function Ro(e,t,n,r){var i=yo();oo.flags|=e,i.memoizedState=To(1|t,n,void 0,void 0===r?null:r)}function Io(e,t,n,r){var i=bo();r=void 0===r?null:r;var a=void 0;if(null!==so){var o=so.memoizedState;if(a=o.destroy,null!==r&&mo(r,o.deps))return void(i.memoizedState=To(t,n,a,r))}oo.flags|=e,i.memoizedState=To(1|t,n,a,r)}function Mo(e,t){return Ro(8390656,8,e,t)}function Lo(e,t){return Io(2048,8,e,t)}function Ao(e,t){return Io(4,2,e,t)}function Do(e,t){return Io(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Io(4,4,Fo.bind(null,t,e),n)}function Uo(){}function $o(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ho(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wo(e,t,n){return 0===(21&ao)?(e.baseState&&(e.baseState=!1,bs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),oo.lanes|=n,Ll|=n,e.baseState=!0),t)}function Bo(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{bt=n,io.transition=r}}function Yo(){return bo().memoizedState}function Ko(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qo(e))Qo(t,n);else if(null!==(n=Ra(e,t,n,r))){nc(n,e,r,ec()),Go(n,t,r)}}function Xo(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qo(e))Qo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,o)){var l=t.interleaved;return null===l?(i.next=i,Na(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(c){}null!==(n=Ra(e,t,i,r))&&(nc(n,e,r,i=ec()),Go(n,t,r))}}function qo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function Qo(e,t){uo=co=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Go(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Jo={readContext:za,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useInsertionEffect:po,useLayoutEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useMutableSource:po,useSyncExternalStore:po,useId:po,unstable_isNewReconciler:!1},Zo={readContext:za,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:za,useEffect:Mo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ro(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=yo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:zo,useDebugValue:Uo,useDeferredValue:function(e){return yo().memoizedState=e},useTransition:function(){var e=zo(!1),t=e[0];return e=Bo.bind(null,e[1]),yo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,i=yo();if(ia){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===jl)throw Error(a(349));0!==(30&ao)||Co(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Mo(Po.bind(null,r,o,e),[e]),r.flags|=2048,To(9,Eo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yo(),t=jl.identifierPrefix;if(ia){var n=Gi;t=":"+t+"R"+(n=(Qi&~(1<<32-ot(Qi)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ho++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:za,useCallback:$o,useContext:za,useEffect:Lo,useImperativeHandle:Vo,useInsertionEffect:Ao,useLayoutEffect:Do,useMemo:Ho,useReducer:xo,useRef:No,useState:function(){return xo(wo)},useDebugValue:Uo,useDeferredValue:function(e){return Wo(bo(),so.memoizedState,e)},useTransition:function(){return[xo(wo)[0],bo().memoizedState]},useMutableSource:So,useSyncExternalStore:_o,useId:Yo,unstable_isNewReconciler:!1},ts={readContext:za,useCallback:$o,useContext:za,useEffect:Lo,useImperativeHandle:Vo,useInsertionEffect:Ao,useLayoutEffect:Do,useMemo:Ho,useReducer:ko,useRef:No,useState:function(){return ko(wo)},useDebugValue:Uo,useDeferredValue:function(e){var t=bo();return null===so?t.memoizedState=e:Wo(t,so.memoizedState,e)},useTransition:function(){return[ko(wo)[0],bo().memoizedState]},useMutableSource:So,useSyncExternalStore:_o,useId:Yo,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=A({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:A({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&$e(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Da(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(nc(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),a=Da(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Fa(e,a,i))&&(nc(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Da(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Fa(e,i,r))&&(nc(t,e,r,n),Va(t,e,r))}};function as(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,a))}function os(e,t,n){var r=!1,i=Pi,a=t.contextType;return"object"===typeof a&&null!==a?a=za(a):(i=Ni(t)?zi:Oi.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ti(e,i):Pi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},La(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=za(a):(a=Ni(t)?zi:Oi.current,i.context=Ti(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(rs(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),$a(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function cs(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var i=n}catch(a){i="\nError generating stack: "+a.message+"\n"+a.stack}return{value:e,source:t,stack:i,digest:null}}function us(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fs="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,n){(n=Da(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wl||(Wl=!0,Bl=r),ds(0,t)},n}function ps(e,t,n){(n=Da(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cc.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Da(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=w.ReactCurrentOwner,bs=!1;function ws(e,t,n,r){t.child=null===e?xa(t,null,n,r):wa(t,e.child,n,r)}function xs(e,t,n,r,i){n=n.render;var a=t.ref;return ja(t,i),r=go(e,t,n,r,a,i),n=vo(),null===e||bs?(ia&&n&&ea(t),t.flags|=1,ws(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function ks(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Nc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ic(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Ss(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(o,r)&&e.ref===t.ref)return Ws(e,t,i)}return t.flags|=1,(e=Rc(a,r)).ref=t.ref,e.return=t,t.child=e}function Ss(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(lr(a,r)&&e.ref===t.ref){if(bs=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Ws(e,t,i);0!==(131072&e.flags)&&(bs=!0)}}return Es(e,t,n,r,i)}function _s(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ei(Rl,Nl),Nl|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ei(Rl,Nl),Nl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ei(Rl,Nl),Nl|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ei(Rl,Nl),Nl|=r;return ws(e,t,i,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Es(e,t,n,r,i){var a=Ni(n)?zi:Oi.current;return a=Ti(t,a),ja(t,i),n=go(e,t,n,r,a,i),r=vo(),null===e||bs?(ia&&r&&ea(t),t.flags|=1,ws(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ws(e,t,i))}function Ps(e,t,n,r,i){if(Ni(n)){var a=!0;Li(t)}else a=!1;if(ja(t,i),null===t.stateNode)Hs(e,t),os(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=za(c):c=Ti(t,c=Ni(n)?zi:Oi.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&ss(t,o,r,c),Ma=!1;var f=t.memoizedState;o.state=f,$a(t,r,o,i),l=t.memoizedState,s!==r||f!==l||ji.current||Ma?("function"===typeof u&&(rs(t,n,u,r),l=t.memoizedState),(s=Ma||as(t,n,s,r,f,l,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Aa(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ns(t.type,s),o.props=c,d=t.pendingProps,f=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=za(l):l=Ti(t,l=Ni(n)?zi:Oi.current);var h=n.getDerivedStateFromProps;(u="function"===typeof h||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==d||f!==l)&&ss(t,o,r,l),Ma=!1,f=t.memoizedState,o.state=f,$a(t,r,o,i);var p=t.memoizedState;s!==d||f!==p||ji.current||Ma?("function"===typeof h&&(rs(t,n,h,r),p=t.memoizedState),(c=Ma||as(t,n,c,r,f,p,l)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Os(e,t,n,r,a,i)}function Os(e,t,n,r,i,a){Cs(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Ai(t,n,!1),Ws(e,t,a);r=t.stateNode,ys.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=wa(t,e.child,null,a),t.child=wa(t,null,s,a)):ws(e,t,s,a),t.memoizedState=r.state,i&&Ai(t,n,!0),t.child}function js(e){var t=e.stateNode;t.pendingContext?Ii(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ii(0,t.context,!1),qa(e,t.containerInfo)}function zs(e,t,n,r,i){return ha(),pa(i),t.flags|=256,ws(e,t,n,r),t.child}var Ts,Ns,Rs,Is,Ms={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function As(e,t,n){var r,i=t.pendingProps,o=Za.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ei(Za,1&o),null===e)return ca(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Lc(l,i,0,null),e=Mc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ls(n),t.memoizedState=Ms,e):Ds(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Fs(e,t,s,r=us(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Lc({mode:"visible",children:r.children},i,0,null),(o=Mc(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&wa(t,e.child,null,s),t.child.memoizedState=Ls(s),t.memoizedState=Ms,o);if(0===(1&t.mode))return Fs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Fs(e,t,s,r=us(o=Error(a(419)),r,void 0))}if(l=0!==(s&e.childLanes),bs||l){if(null!==(r=jl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Ia(e,i),nc(r,e,i,-1))}return mc(),Fs(e,t,s,r=us(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Pc.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ra=ci(i.nextSibling),na=t,ia=!0,aa=null,null!==e&&(Ki[Xi++]=Qi,Ki[Xi++]=Gi,Ki[Xi++]=qi,Qi=e.id,Gi=e.overflow,qi=t),t=Ds(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,o,n);if(s){s=i.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Rc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Rc(r,s):(s=Mc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ls(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Ms,i}return e=(s=e.child).sibling,i=Rc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ds(e,t){return(t=Lc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fs(e,t,n,r){return null!==r&&pa(r),wa(t,e.child,null,n),(e=Ds(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Oa(e.return,t,n)}function Us(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function $s(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(ws(e,t,r.children,n),0!==(2&(r=Za.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vs(e,n,t);else if(19===e.tag)Vs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ei(Za,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Us(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Us(t,!0,n,null,a);break;case"together":Us(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ws(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ll|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Bs(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return Ni(t.type)&&Ri(),Ys(t),null;case 3:return r=t.stateNode,Qa(),Ci(ji),Ci(Oi),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(da(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==aa&&(oc(aa),aa=null))),Ns(e,t),Ys(t),null;case 5:Ja(t);var i=Xa(Ka.current);if(n=t.type,null!==e&&null!=t.stateNode)Rs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Ys(t),null}if(e=Xa(Ba.current),da(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fi]=t,r[hi]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Mr.length;i++)Fr(Mr[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":Q(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ie(r,o),Fr("invalid",r)}for(var l in ye(n,o),i=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Jr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Fr("scroll",r)}switch(n){case"input":Y(r),Z(r,o,!0);break;case"textarea":Y(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fi]=t,e[hi]=r,Ts(e,t,!1,!1),t.stateNode=e;e:{switch(l=be(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Mr.length;i++)Fr(Mr[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":Q(e,r),i=q(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=A({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(o in ye(n,i),c=i)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?ge(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&de(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&fe(e,u):"number"===typeof u&&fe(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Fr("scroll",e):null!=u&&b(e,o,u,l))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)Is(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Xa(Ka.current),Xa(Ba.current),da(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(o=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return Ys(t),null;case 13:if(Ci(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&0!==(1&t.mode)&&0===(128&t.flags))fa(),ha(),t.flags|=98560,o=!1;else if(o=da(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[fi]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),o=!1}else null!==aa&&(oc(aa),aa=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===Il&&(Il=3):mc())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return Qa(),Ns(e,t),null===e&&$r(t.stateNode.containerInfo),Ys(t),null;case 10:return Pa(t.type._context),Ys(t),null;case 19:if(Ci(Za),null===(o=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Bs(o,!1);else{if(0!==Il||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=eo(e))){for(t.flags|=128,Bs(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ei(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Ge()>$l&&(t.flags|=128,r=!0,Bs(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Bs(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ia)return Ys(t),null}else 2*Ge()-o.renderingStartTime>$l&&1073741824!==n&&(t.flags|=128,r=!0,Bs(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,n=Za.current,Ei(Za,r?1&n|2:1&n),t):(Ys(t),null);case 22:case 23:return dc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Nl)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function Xs(e,t){switch(ta(t),t.tag){case 1:return Ni(t.type)&&Ri(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qa(),Ci(ji),Ci(Oi),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(Ci(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(Za),null;case 4:return Qa(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return dc(),null;default:return null}}Ts=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ns=function(){},Rs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xa(Ba.current);var a,o=null;switch(n){case"input":i=q(e,i),r=q(e,r),o=[];break;case"select":i=A({},i,{value:void 0}),r=A({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ye(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Fr("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Is=function(e,t,n,r){n!==r&&(t.flags|=4)};var qs=!1,Qs=!1,Gs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){_c(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){_c(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&el(t,n,a)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function al(e){var t=e.alternate;null!==t&&(e.alternate=null,al(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[hi],delete t[mi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ol(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function cl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(cl(e,t,n),e=e.sibling;null!==e;)cl(e,t,n),e=e.sibling}var ul=null,dl=!1;function fl(e,t,n){for(n=n.child;null!==n;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(at&&"function"===typeof at.onCommitFiberUnmount)try{at.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:Qs||Zs(n,t);case 6:var r=ul,i=dl;ul=null,fl(e,t,n),dl=i,null!==(ul=r)&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ul.removeChild(n.stateNode));break;case 18:null!==ul&&(dl?(e=ul,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),$t(e)):li(ul,n.stateNode));break;case 4:r=ul,i=dl,ul=n.stateNode.containerInfo,dl=!0,fl(e,t,n),ul=r,dl=i;break;case 0:case 11:case 14:case 15:if(!Qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&el(n,t,o),i=i.next}while(i!==r)}fl(e,t,n);break;case 1:if(!Qs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){_c(n,t,s)}fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:1&n.mode?(Qs=(r=Qs)||null!==n.memoizedState,fl(e,t,n),Qs=r):fl(e,t,n);break;default:fl(e,t,n)}}function pl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gs),t.forEach((function(t){var r=Oc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:ul=l.stateNode,dl=!1;break e;case 3:case 4:ul=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===ul)throw Error(a(160));hl(o,s,i),ul=null,dl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(u){_c(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){_c(e,e.return,g)}try{nl(5,e,e.return)}catch(g){_c(e,e.return,g)}}break;case 1:ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(g){_c(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&G(i,o),be(l,s);var u=be(l,o);for(s=0;s<c.length;s+=2){var d=c[s],f=c[s+1];"style"===d?ge(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):b(i,d,f,u)}switch(l){case"input":J(i,o);break;case"textarea":ae(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;null!=p?ne(i,!!o.multiple,p,!1):h!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[hi]=o}catch(g){_c(e,e.return,g)}}break;case 6:if(ml(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){_c(e,e.return,g)}}break;case 3:if(ml(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$t(t.containerInfo)}catch(g){_c(e,e.return,g)}break;case 4:default:ml(t,e),vl(e);break;case 13:ml(t,e),vl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(Ul=Ge())),4&r&&pl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Qs=(u=Qs)||d,ml(t,e),Qs=u):ml(t,e),vl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(f=Js=d;null!==Js;){switch(p=(h=Js).child,h.tag){case 0:case 11:case 14:case 15:nl(4,h,h.return);break;case 1:Zs(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){_c(r,n,g)}}break;case 5:Zs(h,h.return);break;case 22:if(null!==h.memoizedState){xl(f);continue}}null!==p?(p.return=h,Js=p):xl(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,u?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=f.stateNode,s=void 0!==(c=f.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=me("display",s))}catch(g){_c(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){_c(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ml(t,e),vl(e),4&r&&pl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(ol(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),cl(e,sl(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;ll(e,sl(e),o);break;default:throw Error(a(161))}}catch(s){_c(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Js=e,bl(e,t,n)}function bl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||qs;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||Qs;s=qs;var c=Qs;if(qs=o,(Qs=l)&&!c)for(Js=i;null!==Js;)l=(o=Js).child,22===o.tag&&null!==o.memoizedState?kl(i):null!==l?(l.return=o,Js=l):kl(i);for(;null!==a;)Js=a,bl(a,t,n),a=a.sibling;Js=i,qs=s,Qs=c}wl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,Js=a):wl(e)}}function wl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Qs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ha(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ha(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&$t(f)}}}break;default:throw Error(a(163))}Qs||512&t.flags&&il(t)}catch(h){_c(t,t.return,h)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function xl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function kl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){_c(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){_c(t,i,l)}}var a=t.return;try{il(t)}catch(l){_c(t,a,l)}break;case 5:var o=t.return;try{il(t)}catch(l){_c(t,o,l)}}}catch(l){_c(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var Sl,_l=Math.ceil,Cl=w.ReactCurrentDispatcher,El=w.ReactCurrentOwner,Pl=w.ReactCurrentBatchConfig,Ol=0,jl=null,zl=null,Tl=0,Nl=0,Rl=_i(0),Il=0,Ml=null,Ll=0,Al=0,Dl=0,Fl=null,Vl=null,Ul=0,$l=1/0,Hl=null,Wl=!1,Bl=null,Yl=null,Kl=!1,Xl=null,ql=0,Ql=0,Gl=null,Jl=-1,Zl=0;function ec(){return 0!==(6&Ol)?Ge():-1!==Jl?Jl:Jl=Ge()}function tc(e){return 0===(1&e.mode)?1:0!==(2&Ol)&&0!==Tl?Tl&-Tl:null!==ma.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=bt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nc(e,t,n,r){if(50<Ql)throw Ql=0,Gl=null,Error(a(185));vt(e,n,r),0!==(2&Ol)&&e===jl||(e===jl&&(0===(2&Ol)&&(Al|=n),4===Il&&sc(e,Tl)),rc(e,r),1===n&&0===Ol&&0===(1&t.mode)&&($l=Ge()+500,Fi&&$i()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-ot(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=ht(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=ft(e,e===jl?Tl:0);if(0===r)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Fi=!0,Ui(e)}(lc.bind(null,e)):Ui(lc.bind(null,e)),oi((function(){0===(6&Ol)&&$i()})),n=null;else{switch(wt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=jc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Jl=-1,Zl=0,0!==(6&Ol))throw Error(a(327));var n=e.callbackNode;if(kc()&&e.callbackNode!==n)return null;var r=ft(e,e===jl?Tl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Ol;Ol|=2;var o=pc();for(jl===e&&Tl===t||(Hl=null,$l=Ge()+500,fc(e,t));;)try{yc();break}catch(l){hc(e,l)}Ea(),Cl.current=o,Ol=i,null!==zl?t=0:(jl=null,Tl=0,t=Il)}if(0!==t){if(2===t&&(0!==(i=pt(e))&&(r=i,t=ac(e,i))),1===t)throw n=Ml,fc(e,0),sc(e,r),rc(e,Ge()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!sr(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gc(e,r))&&(0!==(o=pt(e))&&(r=o,t=ac(e,o))),1===t))throw n=Ml,fc(e,0),sc(e,r),rc(e,Ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:xc(e,Vl,Hl);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Ul+500-Ge())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(xc.bind(null,e,Vl,Hl),t);break}xc(e,Vl,Hl);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ot(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_l(r/1960))-r)){e.timeoutHandle=ri(xc.bind(null,e,Vl,Hl),r);break}xc(e,Vl,Hl);break;default:throw Error(a(329))}}}return rc(e,Ge()),e.callbackNode===n?ic.bind(null,e):null}function ac(e,t){var n=Fl;return e.current.memoizedState.isDehydrated&&(fc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Vl,Vl=n,null!==t&&oc(t)),e}function oc(e){null===Vl?Vl=e:Vl.push.apply(Vl,e)}function sc(e,t){for(t&=~Dl,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(0!==(6&Ol))throw Error(a(327));kc();var t=ft(e,0);if(0===(1&t))return rc(e,Ge()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=pt(e);0!==r&&(t=r,n=ac(e,r))}if(1===n)throw n=Ml,fc(e,0),sc(e,t),rc(e,Ge()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xc(e,Vl,Hl),rc(e,Ge()),null}function cc(e,t){var n=Ol;Ol|=1;try{return e(t)}finally{0===(Ol=n)&&($l=Ge()+500,Fi&&$i())}}function uc(e){null!==Xl&&0===Xl.tag&&0===(6&Ol)&&kc();var t=Ol;Ol|=1;var n=Pl.transition,r=bt;try{if(Pl.transition=null,bt=1,e)return e()}finally{bt=r,Pl.transition=n,0===(6&(Ol=t))&&$i()}}function dc(){Nl=Rl.current,Ci(Rl)}function fc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==zl)for(n=zl.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ri();break;case 3:Qa(),Ci(ji),Ci(Oi),no();break;case 5:Ja(r);break;case 4:Qa();break;case 13:case 19:Ci(Za);break;case 10:Pa(r.type._context);break;case 22:case 23:dc()}n=n.return}if(jl=e,zl=e=Rc(e.current,null),Tl=Nl=t,Il=0,Ml=null,Dl=Al=Ll=0,Vl=Fl=null,null!==Ta){for(t=0;t<Ta.length;t++)if(null!==(r=(n=Ta[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Ta=null}return e}function hc(e,t){for(;;){var n=zl;try{if(Ea(),ro.current=Jo,co){for(var r=oo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}co=!1}if(ao=0,lo=so=oo=null,uo=!1,fo=0,El.current=null,null===n||null===n.return){Il=1,Ml=t,zl=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Tl,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=gs(s);if(null!==p){p.flags&=-257,vs(p,s,l,0,t),1&p.mode&&ms(o,u,t),c=u;var m=(t=p).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){ms(o,u,t),mc();break e}c=Error(a(426))}else if(ia&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),pa(cs(c,l));break e}}o=c=cs(c,l),4!==Il&&(Il=2),null===Fl?Fl=[o]:Fl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ua(o,hs(0,c,t));break e;case 1:l=c;var y=o.type,b=o.stateNode;if(0===(128&o.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Yl||!Yl.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,Ua(o,ps(o,l,t));break e}}o=o.return}while(null!==o)}wc(n)}catch(w){t=w,zl===n&&null!==n&&(zl=n=n.return);continue}break}}function pc(){var e=Cl.current;return Cl.current=Jo,null===e?Jo:e}function mc(){0!==Il&&3!==Il&&2!==Il||(Il=4),null===jl||0===(268435455&Ll)&&0===(268435455&Al)||sc(jl,Tl)}function gc(e,t){var n=Ol;Ol|=2;var r=pc();for(jl===e&&Tl===t||(Hl=null,fc(e,t));;)try{vc();break}catch(i){hc(e,i)}if(Ea(),Ol=n,Cl.current=r,null!==zl)throw Error(a(261));return jl=null,Tl=0,Il}function vc(){for(;null!==zl;)bc(zl)}function yc(){for(;null!==zl&&!qe();)bc(zl)}function bc(e){var t=Sl(e.alternate,e,Nl);e.memoizedProps=e.pendingProps,null===t?wc(e):zl=t,El.current=null}function wc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,Nl)))return void(zl=n)}else{if(null!==(n=Xs(n,t)))return n.flags&=32767,void(zl=n);if(null===e)return Il=6,void(zl=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zl=t);zl=t=e}while(null!==t);0===Il&&(Il=5)}function xc(e,t,n){var r=bt,i=Pl.transition;try{Pl.transition=null,bt=1,function(e,t,n,r){do{kc()}while(null!==Xl);if(0!==(6&Ol))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ot(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===jl&&(zl=jl=null,Tl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,jc(tt,(function(){return kc(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Pl.transition,Pl.transition=null;var s=bt;bt=1;var l=Ol;Ol|=4,El.current=null,function(e,t){if(ei=Wt,hr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(x){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||0!==i&&3!==f.nodeType||(l=s+i),f!==o||0!==r&&3!==f.nodeType||(c=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=s),h===o&&++d===r&&(c=s),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Wt=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(a(163))}}catch(x){_c(t,t.return,x)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),pr(ti),Wt=!!ei,ti=ei=null,e.current=n,yl(n,e,i),Qe(),Ol=l,bt=s,Pl.transition=o}else e.current=n;if(Kl&&(Kl=!1,Xl=e,ql=i),o=e.pendingLanes,0===o&&(Yl=null),function(e){if(at&&"function"===typeof at.onCommitFiberRoot)try{at.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),rc(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wl)throw Wl=!1,e=Bl,Bl=null,e;0!==(1&ql)&&0!==e.tag&&kc(),o=e.pendingLanes,0!==(1&o)?e===Gl?Ql++:(Ql=0,Gl=e):Ql=0,$i()}(e,t,n,r)}finally{Pl.transition=i,bt=r}return null}function kc(){if(null!==Xl){var e=wt(ql),t=Pl.transition,n=bt;try{if(Pl.transition=null,bt=16>e?16:e,null===Xl)var r=!1;else{if(e=Xl,Xl=null,ql=0,0!==(6&Ol))throw Error(a(331));var i=Ol;for(Ol|=4,Js=e.current;null!==Js;){var o=Js,s=o.child;if(0!==(16&Js.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(Js=u;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,o)}var f=d.child;if(null!==f)f.return=d,Js=f;else for(;null!==Js;){var h=(d=Js).sibling,p=d.return;if(al(d),d===u){Js=null;break}if(null!==h){h.return=p,Js=h;break}Js=p}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,Js=s;else e:for(;null!==Js;){if(0!==(2048&(o=Js).flags))switch(o.tag){case 0:case 11:case 15:nl(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Js=y;break e}Js=o.return}}var b=e.current;for(Js=b;null!==Js;){var w=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==w)w.return=s,Js=w;else e:for(s=b;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(k){_c(l,l.return,k)}if(l===s){Js=null;break e}var x=l.sibling;if(null!==x){x.return=l.return,Js=x;break e}Js=l.return}}if(Ol=i,$i(),at&&"function"===typeof at.onPostCommitFiberRoot)try{at.onPostCommitFiberRoot(it,e)}catch(k){}r=!0}return r}finally{bt=n,Pl.transition=t}}return!1}function Sc(e,t,n){e=Fa(e,t=hs(0,t=cs(n,t),1),1),t=ec(),null!==e&&(vt(e,1,t),rc(e,t))}function _c(e,t,n){if(3===e.tag)Sc(e,e,n);else for(;null!==t;){if(3===t.tag){Sc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Fa(t,e=ps(t,e=cs(n,e),1),1),e=ec(),null!==t&&(vt(t,1,e),rc(t,e));break}}t=t.return}}function Cc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,jl===e&&(Tl&n)===n&&(4===Il||3===Il&&(130023424&Tl)===Tl&&500>Ge()-Ul?fc(e,0):Dl|=n),rc(e,t)}function Ec(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ut,0===(130023424&(ut<<=1))&&(ut=4194304)));var n=ec();null!==(e=Ia(e,t))&&(vt(e,t,n),rc(e,n))}function Pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Ec(e,n)}function Oc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Ec(e,n)}function jc(e,t){return Ke(e,t)}function zc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tc(e,t,n,r){return new zc(e,t,n,r)}function Nc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=Tc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ic(e,t,n,r,i,o){var s=2;if(r=e,"function"===typeof e)Nc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Mc(n.children,i,o,t);case _:s=8,i|=8;break;case C:return(e=Tc(12,n,t,2|i)).elementType=C,e.lanes=o,e;case j:return(e=Tc(13,n,t,i)).elementType=j,e.lanes=o,e;case z:return(e=Tc(19,n,t,i)).elementType=z,e.lanes=o,e;case R:return Lc(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:s=10;break e;case P:s=9;break e;case O:s=11;break e;case T:s=14;break e;case N:s=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=Tc(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Mc(e,t,n,r){return(e=Tc(7,e,r,t)).lanes=n,e}function Lc(e,t,n,r){return(e=Tc(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Ac(e,t,n){return(e=Tc(6,e,null,t)).lanes=n,e}function Dc(e,t,n){return(t=Tc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,a,o,s,l){return e=new Fc(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=Tc(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(a),e}function Uc(e){if(!e)return Pi;e:{if($e(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ni(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Ni(n))return Mi(e,n,t)}return t}function $c(e,t,n,r,i,a,o,s,l){return(e=Vc(n,r,!0,e,0,a,0,s,l)).context=Uc(null),n=e.current,(a=Da(r=ec(),i=tc(n))).callback=void 0!==t&&null!==t?t:null,Fa(n,a,i),e.current.lanes=i,vt(e,i,r),rc(e,r),e}function Hc(e,t,n,r){var i=t.current,a=ec(),o=tc(i);return n=Uc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Da(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(i,t,o))&&(nc(e,i,o,a),Va(e,i,o)),o}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Bc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yc(e,t){Bc(e,t),(e=e.alternate)&&Bc(e,t)}Sl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||ji.current)bs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bs=!1,function(e,t,n){switch(t.tag){case 3:js(t),ha();break;case 5:Ga(t);break;case 1:Ni(t.type)&&Li(t);break;case 4:qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ei(ka,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ei(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?As(e,t,n):(Ei(Za,1&Za.current),null!==(e=Ws(e,t,n))?e.sibling:null);Ei(Za,1&Za.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return $s(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ei(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,_s(e,t,n)}return Ws(e,t,n)}(e,t,n);bs=0!==(131072&e.flags)}else bs=!1,ia&&0!==(1048576&t.flags)&&Zi(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=Ti(t,Oi.current);ja(t,n),i=go(null,t,r,e,i,n);var o=vo();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ni(r)?(o=!0,Li(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,La(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Os(null,t,r,!0,o,n)):(t.tag=0,ia&&o&&ea(t),ws(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Nc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===O)return 11;if(e===T)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Es(null,t,r,e,n);break e;case 1:t=Ps(null,t,r,e,n);break e;case 11:t=xs(null,t,r,e,n);break e;case 14:t=ks(null,t,r,ns(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Es(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(js(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,Aa(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=zs(e,t,r,n,i=cs(Error(a(423)),t));break e}if(r!==i){t=zs(e,t,r,n,i=cs(Error(a(424)),t));break e}for(ra=ci(t.stateNode.containerInfo.firstChild),na=t,ia=!0,aa=null,n=xa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===i){t=Ws(e,t,n);break e}ws(e,t,r,n)}t=t.child}return t;case 5:return Ga(t),null===e&&ca(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==o&&ni(r,o)&&(t.flags|=32),Cs(e,t),ws(e,t,s,n),t.child;case 6:return null===e&&ca(t),null;case 13:return As(e,t,n);case 4:return qa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wa(t,null,r,n):ws(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,xs(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return ws(e,t,t.pendingProps,n),t.child;case 8:case 12:return ws(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ei(ka,r._currentValue),r._currentValue=s,null!==o)if(sr(o.value,s)){if(o.children===i.children&&!ji.current){t=Ws(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Da(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),Oa(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Oa(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}ws(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ja(t,n),r=r(i=za(i)),t.flags|=1,ws(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),ks(e,t,r,i=ns(r.type,i),n);case 15:return Ss(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Hs(e,t),t.tag=1,Ni(r)?(e=!0,Li(t)):e=!1,ja(t,n),os(t,r,i),ls(t,r,i,n),Os(null,t,r,!0,e,n);case 19:return $s(e,t,n);case 22:return _s(e,t,n)}throw Error(a(156,t.tag))};var Kc="function"===typeof reportError?reportError:function(e){console.error(e)};function Xc(e){this._internalRoot=e}function qc(e){this._internalRoot=e}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Wc(o);s.call(e)}}Hc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Wc(o);a.call(e)}}var o=$c(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=o,e[pi]=o.current,$r(8===e.nodeType?e.parentNode:e),uc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Wc(l);s.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[pi]=l.current,$r(8===e.nodeType?e.parentNode:e),uc((function(){Hc(t,l,n,r)})),l}(n,t,e,i,r);return Wc(o)}qc.prototype.render=Xc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Hc(e,t,null,null)},qc.prototype.unmount=Xc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;uc((function(){Hc(null,e,null,null)})),t[pi]=null}},qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=_t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&At(e)}},xt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),rc(t,Ge()),0===(6&Ol)&&($l=Ge()+500,$i()))}break;case 13:uc((function(){var t=Ia(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Yc(e,1)}},kt=function(e){if(13===e.tag){var t=Ia(e,134217728);if(null!==t)nc(t,e,134217728,ec());Yc(e,134217728)}},St=function(e){if(13===e.tag){var t=tc(e),n=Ia(e,t);if(null!==n)nc(n,e,t,ec());Yc(e,t)}},_t=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xi(r);if(!i)throw Error(a(90));K(r),J(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Oe=cc,je=uc;var eu={usingClientEntryPoint:!1,Events:[bi,wi,xi,Ee,Pe,cc]},tu={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nu={bundleType:tu.bundleType,version:tu.version,rendererPackageName:tu.rendererPackageName,rendererConfig:tu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Be(e))?null:e.stateNode},findFiberByHostInstance:tu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{it=ru.inject(nu),at=ru}catch(ue){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qc(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qc(e))throw Error(a(299));var n=!1,r="",i=Kc;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,0,n,0,r,i),e[pi]=t.current,$r(8===e.nodeType?e.parentNode:e),new Xc(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=Be(t))?null:e.stateNode},t.flushSync=function(e){return uc(e)},t.hydrate=function(e,t,n){if(!Gc(t))throw Error(a(200));return Zc(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qc(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=Kc;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=$c(t,null,e,1,null!=n?n:null,i,0,o,s),e[pi]=t.current,$r(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new qc(t)},t.render=function(e,t,n){if(!Gc(t))throw Error(a(200));return Zc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gc(e))throw Error(a(40));return!!e._reactRootContainer&&(uc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[pi]=null}))})),!0)},t.unstable_batchedUpdates=cc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gc(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return Zc(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},82:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,s=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,p=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case a:case s:case o:case h:return e;default:switch(e=e&&e.$$typeof){case c:case f:case g:case m:case l:return e;default:return t}}case i:return t}}}function k(e){return x(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=l,t.Element=r,t.ForwardRef=f,t.Fragment=a,t.Lazy=g,t.Memo=m,t.Portal=i,t.Profiler=s,t.StrictMode=o,t.Suspense=h,t.isAsyncMode=function(e){return k(e)||x(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===f},t.isFragment=function(e){return x(e)===a},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===i},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===o},t.isSuspense=function(e){return x(e)===h},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===d||e===s||e===o||e===h||e===p||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===w||e.$$typeof===v)},t.typeOf=x},86:(e,t,n)=>{"use strict";e.exports=n(82)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var w=b.prototype=new y;w.constructor=b,m(w,v.prototype),w.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,i)&&!_.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function O(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+O(l,0):a,x(o)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),j(o,t,i,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",x(e))for(var c=0;c<e.length;c++){var u=a+O(s=e[c],c);l+=j(s,t,i,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=j(s=s.value,t,i,u=a+O(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function z(e,t,n){if(null==e)return e;var r=[],i=0;return j(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},R={transition:null},I={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!_.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,f=null,h=3,p=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function x(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,R(k);else{var t=r(u);null!==t&&I(x,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,y(E),E=-1),p=!0;var a=h;try{for(w(n),f=r(c);null!==f&&(!(f.expirationTime>n)||e&&!j());){var o=f.callback;if("function"===typeof o){f.callback=null,h=f.priorityLevel;var s=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?f.callback=s:f===r(c)&&i(c),w(n)}else i(c);f=r(c)}if(null!==f)var l=!0;else{var d=r(u);null!==d&&I(x,d.startTime-n),l=!1}return l}finally{f=null,h=a,p=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,_=!1,C=null,E=-1,P=5,O=-1;function j(){return!(t.unstable_now()-O<P)}function z(){if(null!==C){var e=t.unstable_now();O=e;var n=!0;try{n=C(!0,e)}finally{n?S():(_=!1,C=null)}}else _=!1}if("function"===typeof b)S=function(){b(z)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,N=T.port2;T.port1.onmessage=z,S=function(){N.postMessage(null)}}else S=function(){v(z,0)};function R(e){C=e,_||(_=!0,S())}function I(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,R(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(y(E),E=-1):g=!0,I(x,a-o))):(e.sortIndex=s,n(c,e),m||p||(m=!0,R(k))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,a(n)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e=n(43),t=n.t(e,2),r=n(950),i=n.t(r,2),a=n(86),o=n(324),s=n.n(o);const l=function(e){function t(e,r,l,c,f){for(var h,p,m,g,w,k=0,S=0,_=0,C=0,E=0,N=0,I=m=h=0,L=0,A=0,D=0,F=0,V=l.length,U=V-1,$="",H="",W="",B="";L<V;){if(p=l.charCodeAt(L),L===U&&0!==S+C+_+k&&(0!==S&&(p=47===S?10:47),C=_=k=0,V++,U++),0===S+C+_+k){if(L===U&&(0<A&&($=$.replace(d,"")),0<$.trim().length)){switch(p){case 32:case 9:case 59:case 13:case 10:break;default:$+=l.charAt(L)}p=59}switch(p){case 123:for(h=($=$.trim()).charCodeAt(0),m=1,F=++L;L<V;){switch(p=l.charCodeAt(L)){case 123:m++;break;case 125:m--;break;case 47:switch(p=l.charCodeAt(L+1)){case 42:case 47:e:{for(I=L+1;I<U;++I)switch(l.charCodeAt(I)){case 47:if(42===p&&42===l.charCodeAt(I-1)&&L+2!==I){L=I+1;break e}break;case 10:if(47===p){L=I+1;break e}}L=I}}break;case 91:p++;case 40:p++;case 34:case 39:for(;L++<U&&l.charCodeAt(L)!==p;);}if(0===m)break;L++}if(m=l.substring(F,L),0===h&&(h=($=$.replace(u,"").trim()).charCodeAt(0)),64===h){switch(0<A&&($=$.replace(d,"")),p=$.charCodeAt(1)){case 100:case 109:case 115:case 45:A=r;break;default:A=T}if(F=(m=t(r,A,m,p,f+1)).length,0<R&&(w=s(3,m,A=n(T,$,D),r,O,P,F,p,f,c),$=A.join(""),void 0!==w&&0===(F=(m=w.trim()).length)&&(p=0,m="")),0<F)switch(p){case 115:$=$.replace(x,o);case 100:case 109:case 45:m=$+"{"+m+"}";break;case 107:m=($=$.replace(v,"$1 $2"))+"{"+m+"}",m=1===z||2===z&&a("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=$+m,112===c&&(H+=m,m="")}else m=""}else m=t(r,n(r,$,D),m,c,f+1);W+=m,m=D=A=I=h=0,$="",p=l.charCodeAt(++L);break;case 125:case 59:if(1<(F=($=(0<A?$.replace(d,""):$).trim()).length))switch(0===I&&(h=$.charCodeAt(0),45===h||96<h&&123>h)&&(F=($=$.replace(" ",":")).length),0<R&&void 0!==(w=s(1,$,r,e,O,P,H.length,c,f,c))&&0===(F=($=w.trim()).length)&&($="\0\0"),h=$.charCodeAt(0),p=$.charCodeAt(1),h){case 0:break;case 64:if(105===p||99===p){B+=$+l.charAt(L);break}default:58!==$.charCodeAt(F-1)&&(H+=i($,h,p,$.charCodeAt(2)))}D=A=I=h=0,$="",p=l.charCodeAt(++L)}}switch(p){case 13:case 10:47===S?S=0:0===1+h&&107!==c&&0<$.length&&(A=1,$+="\0"),0<R*M&&s(0,$,r,e,O,P,H.length,c,f,c),P=1,O++;break;case 59:case 125:if(0===S+C+_+k){P++;break}default:switch(P++,g=l.charAt(L),p){case 9:case 32:if(0===C+k+S)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==p&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+S+k&&(A=D=1,g="\f"+g);break;case 108:if(0===C+S+k+j&&0<I)switch(L-I){case 2:112===E&&58===l.charCodeAt(L-3)&&(j=E);case 8:111===N&&(j=N)}break;case 58:0===C+S+k&&(I=L);break;case 44:0===S+_+C+k&&(A=1,g+="\r");break;case 34:case 39:0===S&&(C=C===p?0:0===C?p:C);break;case 91:0===C+S+_&&k++;break;case 93:0===C+S+_&&k--;break;case 41:0===C+S+k&&_--;break;case 40:if(0===C+S+k){if(0===h)if(2*E+3*N===533);else h=1;_++}break;case 64:0===S+_+C+k+I+m&&(m=1);break;case 42:case 47:if(!(0<C+k+_))switch(S){case 0:switch(2*p+3*l.charCodeAt(L+1)){case 235:S=47;break;case 220:F=L,S=42}break;case 42:47===p&&42===E&&F+2!==L&&(33===l.charCodeAt(F+2)&&(H+=l.substring(F,L+1)),g="",S=0)}}0===S&&($+=g)}N=E,E=p,L++}if(0<(F=H.length)){if(A=r,0<R&&(void 0!==(w=s(2,H,A,e,O,P,F,c,f,c))&&0===(H=w).length))return B+H+W;if(H=A.join(",")+"{"+H+"}",0!==z*j){switch(2!==z||a(H,2)||(j=0),j){case 111:H=H.replace(b,":-moz-$1")+H;break;case 112:H=H.replace(y,"::-webkit-input-$1")+H.replace(y,"::-moz-$1")+H.replace(y,":-ms-input-$1")+H}j=0}}return B+H+W}function n(e,t,n){var i=t.trim().split(m);t=i;var a=i.length,o=e.length;switch(o){case 0:case 1:var s=0;for(e=0===o?"":e[0]+" ";s<a;++s)t[s]=r(e,t[s],n).trim();break;default:var l=s=0;for(t=[];s<a;++s)for(var c=0;c<o;++c)t[l++]=r(e[c]+" ",i[s],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function i(e,t,n,r){var o=e+";",s=2*t+3*n+4*r;if(944===s){e=o.indexOf(":",9)+1;var l=o.substring(e,o.length-1).trim();return l=o.substring(0,e).trim()+l+";",1===z||2===z&&a(l,1)?"-webkit-"+l+l:l}if(0===z||2===z&&!a(o,1))return o;switch(s){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(E,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(l=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+l+o;case 1005:return h.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(l=o.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(t)){case 226:l=o.replace(w,"tb");break;case 232:l=o.replace(w,"tb-rl");break;case 220:l=o.replace(w,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+l+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,s=(l=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(111>l.charCodeAt(8))break;case 115:o=o.replace(l,"-webkit-"+l)+";"+o;break;case 207:case 102:o=o.replace(l,"-webkit-"+(102<s?"inline-":"")+"box")+";"+o.replace(l,"-webkit-"+l)+";"+o.replace(l,"-ms-"+l+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return l=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+l+"-ms-flex-"+l+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0)?i(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(l,"-webkit-"+l)+o.replace(l,"-moz-"+l.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+o}return o}function a(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),I(2!==t?r:r.replace(_,"$1"),n,t)}function o(e,t){var n=i(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function s(e,t,n,r,i,a,o,s,l,u){for(var d,f=0,h=t;f<R;++f)switch(d=N[f].call(c,e,h,n,r,i,a,o,s,l,u)){case void 0:case!1:case!0:case null:break;default:h=d}if(h!==t)return h}function l(e){return void 0!==(e=e.prefix)&&(I=null,e?"function"!==typeof e?z=1:(z=2,I=e):z=0),l}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<R){var i=s(-1,n,r,r,O,P,0,0,0,0);void 0!==i&&"string"===typeof i&&(n=i)}var a=t(T,r,n,0,0);return 0<R&&(void 0!==(i=s(-2,a,r,r,O,P,a.length,0,0,0))&&(a=i)),j=0,P=O=1,a}var u=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,h=/zoo|gra/,p=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,S=/-self|flex-/g,_=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,P=1,O=1,j=0,z=1,T=[],N=[],R=0,I=null,M=0;return c.use=function e(t){switch(t){case void 0:case null:R=N.length=0;break;default:if("function"===typeof t)N[R++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else M=0|!!t}return e},c.set=l,void 0!==e&&l(e),c};const c={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function u(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var d=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,f=u((function(e){return d.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),h=n(219),p=n.n(h);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},v=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,a.typeOf)(e)},y=Object.freeze([]),b=Object.freeze({});function w(e){return"function"==typeof e}function x(e){return e.displayName||e.name||"Component"}function k(e){return e&&"string"==typeof e.styledComponentId}var S="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",_="undefined"!=typeof window&&"HTMLElement"in window,C=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY))),E={};function P(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var O=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)(i<<=1)<0&&P(16,""+e);this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=0,l=t.length;s<l;s++)this.tag.insertRule(o,t[s])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+=this.tag.getRule(a)+"/*!sc*/\n";return t},e}(),j=new Map,z=new Map,T=1,N=function(e){if(j.has(e))return j.get(e);for(;z.has(T);)T++;var t=T++;return j.set(e,t),z.set(t,e),t},R=function(e){return z.get(e)},I=function(e,t){t>=T&&(T=t+1),j.set(e,t),z.set(t,e)},M="style["+S+'][data-styled-version="5.3.11"]',L=new RegExp("^"+S+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),A=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},D=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(L);if(s){var l=0|parseInt(s[1],10),c=s[2];0!==l&&(I(c,l),A(e,c,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},F=function(){return n.nc},V=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(S))return r}}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(S,"active"),r.setAttribute("data-styled-version","5.3.11");var o=F();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},U=function(){function e(e){var t=this.element=V(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}P(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=V(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),H=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),W=_,B={isServer:!_,useCSSOMInjection:!C},Y=function(){function e(e,t,n){void 0===e&&(e=b),void 0===t&&(t={}),this.options=m({},B,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&_&&W&&(W=!1,function(e){for(var t=document.querySelectorAll(M),n=0,r=t.length;n<r;n++){var i=t[n];i&&"active"!==i.getAttribute(S)&&(D(e,i),i.parentNode&&i.parentNode.removeChild(i))}}(this))}e.registerId=function(e){return N(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(m({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,i=t.target,e=n?new H(i):r?new U(i):new $(i),new O(e)));var e,t,n,r,i},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(N(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(N(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(N(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=0;i<n;i++){var a=R(i);if(void 0!==a){var o=e.names.get(a),s=t.getGroup(i);if(o&&s&&o.size){var l=S+".g"+i+'[id="'+a+'"]',c="";void 0!==o&&o.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+s+l+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,X=function(e){return String.fromCharCode(e+(e>25?39:97))};function q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=X(t%52)+n;return(X(t%52)+n).replace(K,"$1-$2")}var Q=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},G=function(e){return Q(5381,e)};function J(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(w(n)&&!k(n))return!1}return!0}var Z=G("5.3.11"),ee=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&J(e),this.componentId=t,this.baseHash=Q(Z,t),this.baseStyle=n,Y.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))i.push(this.staticRulesId);else{var a=ye(this.rules,e,t,n).join(""),o=q(Q(this.baseHash,a)>>>0);if(!t.hasNameForId(r,o)){var s=n(a,"."+o,void 0,r);t.insertRules(r,o,s)}i.push(o),this.staticRulesId=o}else{for(var l=this.rules.length,c=Q(this.baseHash,n.hash),u="",d=0;d<l;d++){var f=this.rules[d];if("string"==typeof f)u+=f;else if(f){var h=ye(f,e,t,n),p=Array.isArray(h)?h.join(""):h;c=Q(c,p+d),u+=p}}if(u){var m=q(c>>>0);if(!t.hasNameForId(r,m)){var g=n(u,"."+m,void 0,r);t.insertRules(r,m,g)}i.push(m)}}return i.join(" ")},e}(),te=/^\s*\/\/.*$/gm,ne=[":","[",".","#"];function re(e){var t,n,r,i,a=void 0===e?b:e,o=a.options,s=void 0===o?b:o,c=a.plugins,u=void 0===c?y:c,d=new l(s),f=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,i,a,o,s,l,c,u,d){switch(n){case 1:if(0===u&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(i[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),p=function(e,r,a){return 0===r&&-1!==ne.indexOf(a[n.length])||a.match(i)?e:"."+t};function m(e,a,o,s){void 0===s&&(s="&");var l=e.replace(te,""),c=a&&o?o+" "+a+" { "+l+" }":l;return t=s,n=a,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(o||!a?"":a,c)}return d.use([].concat(u,[function(e,t,i){2===e&&i.length&&i[0].lastIndexOf(n)>0&&(i[0]=i[0].replace(r,p))},h,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||P(15),Q(e,t.name)}),5381).toString():"",m}var ie=e.createContext(),ae=(ie.Consumer,e.createContext()),oe=(ae.Consumer,new Y),se=re();function le(){return(0,e.useContext)(ie)||oe}function ce(){return(0,e.useContext)(ae)||se}function ue(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=le(),o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target]),l=(0,e.useMemo)((function(){return re({options:{prefix:!t.disableVendorPrefixes},plugins:r})}),[t.disableVendorPrefixes,r]);return(0,e.useEffect)((function(){s()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]),e.createElement(ie.Provider,{value:o},e.createElement(ae.Provider,{value:l},t.children))}var de=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=se);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return P(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=se),this.name+e.hash},e}(),fe=/([A-Z])/,he=/([A-Z])/g,pe=/^ms-/,me=function(e){return"-"+e.toLowerCase()};function ge(e){return fe.test(e)?e.replace(he,me).replace(pe,"-ms-"):e}var ve=function(e){return null==e||!1===e||""===e};function ye(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)""!==(i=ye(e[o],t,n,r))&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}return ve(e)?"":k(e)?"."+e.styledComponentId:w(e)?"function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!t?e:ye(e(t),t,n,r):e instanceof de?n?(e.inject(n,r),e.getName(r)):e:v(e)?function e(t,n){var r,i,a=[];for(var o in t)t.hasOwnProperty(o)&&!ve(t[o])&&(Array.isArray(t[o])&&t[o].isCss||w(t[o])?a.push(ge(o)+":",t[o],";"):v(t[o])?a.push.apply(a,e(t[o],o)):a.push(ge(o)+": "+(r=o,(null==(i=t[o])||"boolean"==typeof i||""===i?"":"number"!=typeof i||0===i||r in c||r.startsWith("--")?String(i).trim():i+"px")+";")));return n?[n+" {"].concat(a,["}"]):a}(e):e.toString();var l}var be=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function we(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return w(e)||v(e)?be(ye(g(y,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:be(ye(g(e,n)))}new Set;var xe=function(e,t,n){return void 0===n&&(n=b),e.theme!==n.theme&&e.theme||t||n.theme},ke=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Se=/(^-|-$)/g;function _e(e){return e.replace(ke,"-").replace(Se,"")}var Ce=function(e){return q(G(e)>>>0)};function Ee(e){return"string"==typeof e&&!0}var Pe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Oe=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function je(e,t,n){var r=e[n];Pe(t)&&Pe(r)?ze(r,t):e[n]=t}function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Pe(o))for(var s in o)Oe(s)&&je(e,o[s],s)}return e}var Te=e.createContext();Te.Consumer;var Ne={};function Re(t,n,r){var i=k(t),a=!Ee(t),o=n.attrs,s=void 0===o?y:o,l=n.componentId,c=void 0===l?function(e,t){var n="string"!=typeof e?"sc":_e(e);Ne[n]=(Ne[n]||0)+1;var r=n+"-"+Ce("5.3.11"+n+Ne[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):l,u=n.displayName,d=void 0===u?function(e){return Ee(e)?"styled."+e:"Styled("+x(e)+")"}(t):u,h=n.displayName&&n.componentId?_e(n.displayName)+"-"+n.componentId:n.componentId||c,g=i&&t.attrs?Array.prototype.concat(t.attrs,s).filter(Boolean):s,v=n.shouldForwardProp;i&&t.shouldForwardProp&&(v=n.shouldForwardProp?function(e,r,i){return t.shouldForwardProp(e,r,i)&&n.shouldForwardProp(e,r,i)}:t.shouldForwardProp);var S,_=new ee(r,h,i?t.componentStyle:void 0),C=_.isStatic&&0===s.length,E=function(t,n){return function(t,n,r,i){var a=t.attrs,o=t.componentStyle,s=t.defaultProps,l=t.foldedComponentIds,c=t.shouldForwardProp,u=t.styledComponentId,d=t.target,h=function(e,t,n){void 0===e&&(e=b);var r=m({},t,{theme:e}),i={};return n.forEach((function(e){var t,n,a,o=e;for(t in w(o)&&(o=o(r)),o)r[t]=i[t]="className"===t?(n=i[t],a=o[t],n&&a?n+" "+a:n||a):o[t]})),[r,i]}(xe(n,(0,e.useContext)(Te),s)||b,n,a),p=h[0],g=h[1],v=function(e,t,n){var r=le(),i=ce();return t?e.generateAndInjectStyles(b,r,i):e.generateAndInjectStyles(n,r,i)}(o,i,p),y=r,x=g.$as||n.$as||g.as||n.as||d,k=Ee(x),S=g!==n?m({},n,{},g):n,_={};for(var C in S)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?_.as=S[C]:(c?c(C,f,x):!k||f(C))&&(_[C]=S[C]));return n.style&&g.style!==n.style&&(_.style=m({},n.style,{},g.style)),_.className=Array.prototype.concat(l,u,v!==u?v:null,n.className,g.className).filter(Boolean).join(" "),_.ref=y,(0,e.createElement)(x,_)}(S,t,n,C)};return E.displayName=d,(S=e.forwardRef(E)).attrs=g,S.componentStyle=_,S.displayName=d,S.shouldForwardProp=v,S.foldedComponentIds=i?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):y,S.styledComponentId=h,S.target=i?t.target:t,S.withComponent=function(e){var t=n.componentId,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(n,["componentId"]),a=t&&t+"-"+(Ee(e)?e:_e(x(e)));return Re(e,m({},i,{attrs:g,componentId:a}),r)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?ze({},t.defaultProps,e):e}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),a&&p()(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Ie=function(e){return function e(t,n,r){if(void 0===r&&(r=b),!(0,a.isValidElementType)(n))return P(1,String(n));var i=function(){return t(n,r,we.apply(void 0,arguments))};return i.withConfig=function(i){return e(t,n,m({},r,{},i))},i.attrs=function(i){return e(t,n,m({},r,{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i}(Re,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Ie[e]=Ie(e)}));var Me=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=J(e),Y.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var i=r(ye(this.rules,t,n,r).join(""),""),a=this.componentId+e;n.insertRules(a,a,i)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Y.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();!function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=F();return"<style "+[n&&'nonce="'+n+'"',S+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+e+"</style>"},this.getStyleTags=function(){return t.sealed?P(2):t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)return P(2);var r=((n={})[S]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),i=F();return i&&(r.nonce=i),[e.createElement("style",m({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Y({isServer:!0}),this.sealed=!1}var n=t.prototype;n.collectStyles=function(t){return this.sealed?P(2):e.createElement(ue,{sheet:this.instance},t)},n.interleaveWithNodeStream=function(e){return P(3)}}();const Le=Ie,Ae=Le.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  .logo{
    font-size: 2.8rem;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`;const De=n.p+"static/media/react-icon.f1484e295933af0e748d6a01b05a8361.svg";const Fe=n.p+"static/media/linkedin.4f00d78f67f451cf01173f7418aa186f.svg";const Ve=n.p+"static/media/github.d344c0fc70ddfb6de253ddc40adcb086.svg";const Ue=n.p+"static/media/whatsapp.459dad86534ca5699520ed770f3ce605.svg";const $e=n.p+"static/media/telegram.45bf2371ee6528cc27d66c08f8e43356.svg";const He=n.p+"static/media/instagram.e9d6b5424508db6397a027a4e0fe0dd0.svg";var We=n(579);function Be(){return(0,We.jsxs)(Ae,{className:"footer",children:[(0,We.jsxs)("a",{href:"https://github.com/suhail22a/",className:"logo",children:[(0,We.jsx)("span",{children:"www.suhail"}),(0,We.jsx)("span",{children:"ahmad.in"})]}),(0,We.jsx)("div",{children:(0,We.jsxs)("p",{children:["This Website was made with ",(0,We.jsx)("img",{src:De,alt:"React"})]})}),(0,We.jsxs)("div",{className:"social-media",children:[(0,We.jsx)("a",{href:"https://www.linkedin.com/in/suhailahmad786",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Fe,alt:"Linkedin"})}),(0,We.jsx)("a",{href:"https://github.com/suhail22a/",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ve,alt:"GitHub"})}),(0,We.jsx)("a",{href:"https://api.whatsapp.com/send/?phone=%2B918707219308&text=Hello+Suhail",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ue,alt:"Whatsapp"})}),(0,We.jsx)("a",{href:"https://t.me/tech_sam_223/",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:$e,alt:"telegram"})}),(0,We.jsx)("a",{href:"https://www.instagram.com/tech_sam_223/",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:He,alt:"Instagram"})})]})]})}const Ye=Le.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: #21212150;
  
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a{
      color: #FFFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button{
        padding: 0.6rem 2rem;
      }

      &:hover{
        filter: brightness(0.6);
      }
    }

  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    display: none;

    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }


    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }

  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #FFFF;
    cursor: pointer;
    transition: .6s;
  }


  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  @media only screen and (max-width: 800px) {
    label {
    position: relative;
   }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
   transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  @media (max-width: 960px){
    padding: 1.8rem 3rem;

    .menu{
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);

      a.button{
        background-color: var(--pink);
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
`;function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}var Xe;!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Xe||(Xe={}));const qe="popstate";function Qe(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function Ge(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Je(e,t){return{usr:e.state,key:e.key,idx:t}}function Ze(e,t,n,r){return void 0===n&&(n=null),Ke({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?tt(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function et(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function tt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function nt(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=Xe.Pop,l=null,c=u();function u(){return(o.state||{idx:null}).idx}function d(){s=Xe.Pop;let e=u(),t=null==e?null:e-c;c=e,l&&l({action:s,location:h.location,delta:t})}function f(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"===typeof e?e:et(e);return n=n.replace(/ $/,"%20"),Qe(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==c&&(c=0,o.replaceState(Ke({},o.state,{idx:c}),""));let h={get action(){return s},get location(){return e(i,o)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(qe,d),l=e,()=>{i.removeEventListener(qe,d),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=Xe.Push;let r=Ze(h.location,e,t);n&&n(r,e),c=u()+1;let d=Je(r,c),f=h.createHref(r);try{o.pushState(d,"",f)}catch(p){if(p instanceof DOMException&&"DataCloneError"===p.name)throw p;i.location.assign(f)}a&&l&&l({action:s,location:h.location,delta:1})},replace:function(e,t){s=Xe.Replace;let r=Ze(h.location,e,t);n&&n(r,e),c=u();let i=Je(r,c),d=h.createHref(r);o.replaceState(i,"",d),a&&l&&l({action:s,location:h.location,delta:0})},go:e=>o.go(e)};return h}var rt;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(rt||(rt={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function it(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Ge("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function at(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function ot(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function st(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function lt(e,t){let n=st(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function ct(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=tt(e):(i=Ke({},e),Qe(!i.pathname||!i.pathname.includes("?"),ot("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),ot("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),ot("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?tt(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:dt(r),hash:ft(i)}}(i,a),c=s&&"/"!==s&&s.endsWith("/"),u=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!c&&!u||(l.pathname+="/"),l}const ut=e=>e.join("/").replace(/\/\/+/g,"/"),dt=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ft=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;const ht=["post","put","patch","delete"],pt=(new Set(ht),["get",...ht]);new Set(pt),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function mt(){return mt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mt.apply(this,arguments)}const gt=e.createContext(null);const vt=e.createContext(null);const yt=e.createContext(null);const bt=e.createContext(null);const wt=e.createContext({outlet:null,matches:[],isDataRoute:!1});function xt(){return null!=e.useContext(bt)}function kt(){return xt()||Qe(!1),e.useContext(bt).location}function St(t){e.useContext(yt).static||e.useLayoutEffect(t)}function _t(){let{isDataRoute:t}=e.useContext(wt);return t?function(){let{router:t}=Ot(Et.UseNavigateStable),n=jt(Pt.UseNavigateStable),r=e.useRef(!1);return St((()=>{r.current=!0})),e.useCallback((function(e,i){void 0===i&&(i={}),r.current&&("number"===typeof e?t.navigate(e):t.navigate(e,mt({fromRouteId:n},i)))}),[t,n])}():function(){xt()||Qe(!1);let t=e.useContext(gt),{basename:n,future:r,navigator:i}=e.useContext(yt),{matches:a}=e.useContext(wt),{pathname:o}=kt(),s=JSON.stringify(lt(a,r.v7_relativeSplatPath)),l=e.useRef(!1);return St((()=>{l.current=!0})),e.useCallback((function(e,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof e)return void i.go(e);let a=ct(e,JSON.parse(s),o,"path"===r.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:ut([n,a.pathname])),(r.replace?i.replace:i.push)(a,r.state,r)}),[n,i,s,o,t])}()}function Ct(t,n){let{relative:r}=void 0===n?{}:n,{future:i}=e.useContext(yt),{matches:a}=e.useContext(wt),{pathname:o}=kt(),s=JSON.stringify(lt(a,i.v7_relativeSplatPath));return e.useMemo((()=>ct(t,JSON.parse(s),o,"path"===r)),[t,s,o,r])}e.Component;var Et=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Et||{}),Pt=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pt||{});function Ot(t){let n=e.useContext(gt);return n||Qe(!1),n}function jt(t){let n=function(){let t=e.useContext(wt);return t||Qe(!1),t}(),r=n.matches[n.matches.length-1];return r.route.id||Qe(!1),r.route.id}const zt={};const Tt=(e,t,n)=>{var r;zt[r="\u26a0\ufe0f React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+n+"."]||(zt[r]=!0,console.warn(r))};function Nt(e,t){null!=e&&e.v7_startTransition||Tt("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),null!=e&&e.v7_relativeSplatPath||t&&t.v7_relativeSplatPath||Tt("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist||Tt("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod||Tt("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration||Tt("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation||Tt("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}t.startTransition;function Rt(t){let{basename:n="/",children:r=null,location:i,navigationType:a=Xe.Pop,navigator:o,static:s=!1,future:l}=t;xt()&&Qe(!1);let c=n.replace(/^\/*/,"/"),u=e.useMemo((()=>({basename:c,navigator:o,static:s,future:mt({v7_relativeSplatPath:!1},l)})),[c,l,o,s]);"string"===typeof i&&(i=tt(i));let{pathname:d="/",search:f="",hash:h="",state:p=null,key:m="default"}=i,g=e.useMemo((()=>{let e=at(d,c);return null==e?null:{location:{pathname:e,search:f,hash:h,state:p,key:m},navigationType:a}}),[c,d,f,h,p,m,a]);return null==g?null:e.createElement(yt.Provider,{value:u},e.createElement(bt.Provider,{children:r,value:g}))}new Promise((()=>{}));e.Component;function It(){return It=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},It.apply(this,arguments)}function Mt(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const Lt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],At=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(hl){}const Dt=e.createContext({isTransitioning:!1});new Map;const Ft=t.startTransition;i.flushSync,t.useId;function Vt(t){let{basename:n,children:r,future:i,window:a}=t,o=e.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:a,v5Compat:!0})&&(s={}),nt((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return Ze("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:et(t)}),null,s)));let l=o.current,[c,u]=e.useState({action:l.action,location:l.location}),{v7_startTransition:d}=i||{},f=e.useCallback((e=>{d&&Ft?Ft((()=>u(e))):u(e)}),[u,d]);return e.useLayoutEffect((()=>l.listen(f)),[l,f]),e.useEffect((()=>Nt(i)),[i]),e.createElement(Rt,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:l,future:i})}const Ut="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,$t=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ht=e.forwardRef((function(t,n){let r,{onClick:i,relative:a,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=t,h=Mt(t,Lt),{basename:p}=e.useContext(yt),m=!1;if("string"===typeof u&&$t.test(u)&&(r=u,Ut))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=at(t.pathname,p);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:m=!0}catch(hl){}let g=function(t,n){let{relative:r}=void 0===n?{}:n;xt()||Qe(!1);let{basename:i,navigator:a}=e.useContext(yt),{hash:o,pathname:s,search:l}=Ct(t,{relative:r}),c=s;return"/"!==i&&(c="/"===s?i:ut([i,s])),a.createHref({pathname:c,search:l,hash:o})}(u,{relative:a}),v=function(t,n){let{target:r,replace:i,state:a,preventScrollReset:o,relative:s,viewTransition:l}=void 0===n?{}:n,c=_t(),u=kt(),d=Ct(t,{relative:s});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,r)){e.preventDefault();let n=void 0!==i?i:et(u)===et(d);c(t,{replace:n,state:a,preventScrollReset:o,relative:s,viewTransition:l})}}),[u,c,d,i,a,r,t,o,s,l])}(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:a,viewTransition:f});return e.createElement("a",It({},h,{href:r||g,onClick:m||o?i:function(e){i&&i(e),e.defaultPrevented||v(e)},ref:n,target:c}))}));const Wt=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:o=!1,style:s,to:l,viewTransition:c,children:u}=t,d=Mt(t,At),f=Ct(l,{relative:d.relative}),h=kt(),p=e.useContext(vt),{navigator:m,basename:g}=e.useContext(yt),v=null!=p&&function(t,n){void 0===n&&(n={});let r=e.useContext(Dt);null==r&&Qe(!1);let{basename:i}=Kt(Bt.useViewTransitionState),a=Ct(t,{relative:n.relative});if(!r.isTransitioning)return!1;let o=at(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=at(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=it(a.pathname,s)||null!=it(a.pathname,o)}(f)&&!0===c,y=m.encodeLocation?m.encodeLocation(f).pathname:f.pathname,b=h.pathname,w=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&g&&(w=at(w,g)||w);const x="/"!==y&&y.endsWith("/")?y.length-1:y.length;let k,S=b===y||!o&&b.startsWith(y)&&"/"===b.charAt(x),_=null!=w&&(w===y||!o&&w.startsWith(y)&&"/"===w.charAt(y.length)),C={isActive:S,isPending:_,isTransitioning:v},E=S?r:void 0;k="function"===typeof a?a(C):[a,S?"active":null,_?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let P="function"===typeof s?s(C):s;return e.createElement(Ht,It({},d,{"aria-current":E,className:k,ref:n,style:P,to:l,viewTransition:c}),"function"===typeof u?u(C):u)}));var Bt,Yt;function Kt(t){let n=e.useContext(gt);return n||Qe(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bt||(Bt={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Yt||(Yt={}));var Xt=function(){return Xt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Xt.apply(this,arguments)};var qt="",Qt=null,Gt=null,Jt=null;function Zt(){qt="",null!==Qt&&Qt.disconnect(),null!==Gt&&(window.clearTimeout(Gt),Gt=null)}function en(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function tn(){var e=null;if("#"===qt)e=document.body;else{var t=qt.replace("#","");null===(e=document.getElementById(t))&&"#top"===qt&&(e=document.body)}if(null!==e){Jt(e);var n=e.getAttribute("tabindex");return null!==n||en(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||en(e)||(e.blur(),e.removeAttribute("tabindex")),Zt(),!0}return!1}function nn(t){return e.forwardRef((function(n,r){var i="";"string"===typeof n.to&&n.to.includes("#")?i="#"+n.to.split("#").slice(1).join("#"):"object"===typeof n.to&&"string"===typeof n.to.hash&&(i=n.to.hash);var a={};t===Wt&&(a.isActive=function(e,t){return e&&e.isExact&&t.hash===i});var o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(n,["scroll","smooth","timeout","elementId"]);return e.createElement(t,Xt({},a,o,{onClick:function(e){var t;Zt(),qt=n.elementId?"#"+n.elementId:i,n.onClick&&n.onClick(e),""===qt||e.defaultPrevented||0!==e.button||n.target&&"_self"!==n.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(Jt=n.scroll||function(e){return n.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},t=n.timeout,window.setTimeout((function(){!1===tn()&&(null===Qt&&(Qt=new MutationObserver(tn)),Qt.observe(document,{attributes:!0,childList:!0,subtree:!0}),Gt=window.setTimeout((function(){Zt()}),t||1e4))}),0))},ref:r}),n.children)}))}var rn=nn(Ht),an=nn(Wt);const on=n.p+"static/media/Suhail_Resume.9feb5d069c5476d89461.pdf",sn=n.p+"static/media/profilelogo.cf7c654367621d4ba507.png";function ln(){const[t,n]=(0,e.useState)(!1);function r(){n(!1)}return(0,We.jsx)(Ye,{className:"header-fixed",children:(0,We.jsxs)(Vt,{children:[(0,We.jsx)(rn,{smooth:!0,to:"#home",className:"logo",children:(0,We.jsx)("img",{src:sn,alt:"Suhail Ahmad",style:{width:"300px",height:"100px",objectFit:"cover"},onClick:()=>window.open("https://www.linkedin.com/in/suhailahmad786/","_blank")})}),(0,We.jsx)("input",{onChange:function(){document.getElementsByTagName("html")[0].classList.toggle("light")},className:"container_toggle",type:"checkbox",id:"switch",name:"mode"}),(0,We.jsx)("label",{htmlFor:"switch",children:"Toggle"}),(0,We.jsxs)("nav",{className:t?"active":"",children:[(0,We.jsx)(an,{smooth:!0,to:"#home",onClick:r,children:"Home"}),(0,We.jsx)(an,{smooth:!0,to:"#about",onClick:r,children:"About me"}),(0,We.jsx)(an,{smooth:!0,to:"#project",onClick:r,children:"Project"}),(0,We.jsx)(an,{smooth:!0,to:"#contact",onClick:r,children:"Contact"}),(0,We.jsx)("a",{href:on,download:!0,className:"button",children:"Resume"})]}),(0,We.jsx)("div",{"aria-expanded":t?"true":"false","aria-haspopup":"true","aria-label":t?"Fechar menu":"Abrir menu",className:t?"menu active":"menu",onClick:()=>{n(!t)}})]})})}const cn="generated",un="pointerleave",dn="pointermove",fn="touchend",hn="tsParticles - Error";class pn{constructor(e,t,n){if(this._updateFromAngle=(e,t)=>{this.x=Math.cos(e)*t,this.y=Math.sin(e)*t},!Vn(e)&&e){this.x=e.x,this.y=e.y;const t=e;this.z=t.z?t.z:0}else{if(void 0===e||void 0===t)throw new Error(`${hn} Vector3d not initialized correctly`);this.x=e,this.y=t,this.z=n??0}}static get origin(){return pn.create(0,0,0)}get angle(){return Math.atan2(this.y,this.x)}set angle(e){this._updateFromAngle(e,this.length)}get length(){return Math.sqrt(this.getLengthSq())}set length(e){this._updateFromAngle(this.angle,e)}static clone(e){return pn.create(e.x,e.y,e.z)}static create(e,t,n){return new pn(e,t,n)}add(e){return pn.create(this.x+e.x,this.y+e.y,this.z+e.z)}addTo(e){this.x+=e.x,this.y+=e.y,this.z+=e.z}copy(){return pn.clone(this)}distanceTo(e){return this.sub(e).length}distanceToSq(e){return this.sub(e).getLengthSq()}div(e){return pn.create(this.x/e,this.y/e,this.z/e)}divTo(e){this.x/=e,this.y/=e,this.z/=e}getLengthSq(){return this.x**2+this.y**2}mult(e){return pn.create(this.x*e,this.y*e,this.z*e)}multTo(e){this.x*=e,this.y*=e,this.z*=e}normalize(){const e=this.length;0!=e&&this.multTo(1/e)}rotate(e){return pn.create(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)+this.y*Math.cos(e),0)}setTo(e){this.x=e.x,this.y=e.y;const t=e;this.z=t.z?t.z:0}sub(e){return pn.create(this.x-e.x,this.y-e.y,this.z-e.z)}subFrom(e){this.x-=e.x,this.y-=e.y,this.z-=e.z}}class mn extends pn{constructor(e,t){super(e,t,0)}static get origin(){return mn.create(0,0)}static clone(e){return mn.create(e.x,e.y)}static create(e,t){return new mn(e,t)}}let gn=Math.random;new Map;function vn(){return yn(gn(),0,1-1e-16)}function yn(e,t,n){return Math.min(Math.max(e,t),n)}function bn(e){const t=kn(e);let n=xn(e);return t===n&&(n=0),vn()*(t-n)+n}function wn(e){return Vn(e)?e:bn(e)}function xn(e){return Vn(e)?e:e.min}function kn(e){return Vn(e)?e:e.max}function Sn(e,t){if(e===t||void 0===t&&Vn(e))return e;const n=xn(e),r=kn(e);return void 0!==t?{min:Math.min(n,t),max:Math.max(r,t)}:Sn(n,r)}function _n(e,t){return function(e,t){const n=e.x-t.x,r=e.y-t.y;return{dx:n,dy:r,distance:Math.sqrt(n**2+r**2)}}(e,t).distance}function Cn(e){return{x:e.position?.x??vn()*e.size.width,y:e.position?.y??vn()*e.size.height}}function En(e){return e?e.endsWith("%")?parseFloat(e)/100:parseFloat(e):1}const Pn={debug:console.debug,error:console.error,info:console.info,log:console.log,verbose:console.log,warning:console.warn};function On(){return Pn}function jn(){return"undefined"===typeof window||!window||"undefined"===typeof window.document||!window.document}function zn(e){if(!jn()&&"undefined"!==typeof matchMedia)return matchMedia(e)}function Tn(e,t){return e===t||Hn(t)&&t.indexOf(e)>-1}function Nn(e,t){return e[void 0!==t&&(!(arguments.length>2&&void 0!==arguments[2])||arguments[2])?t%e.length:function(e){return Math.floor(vn()*e.length)}(e)]}function Rn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const i of n){if(void 0===i||null===i)continue;if(!$n(i)){e=i;continue}const t=Array.isArray(i);!t||!$n(e)&&e&&Array.isArray(e)?t||!$n(e)&&e&&!Array.isArray(e)||(e={}):e=[];for(const n in i){if("__proto__"===n)continue;const t=i[n],r=e;r[n]=$n(t)&&Array.isArray(t)?t.map((e=>Rn(r[n],e))):Rn(r[n],t)}}return e}function In(e,t){return Hn(e)?e.map(((e,n)=>t(e,n))):t(e,0)}function Mn(e,t,n){return Hn(e)?Nn(e,t,n):e}function Ln(e,t){if(!("percent"===e.mode)){const{mode:t,...n}=e;return n}return"x"in e?{x:e.x/100*t.width,y:e.y/100*t.height}:{width:e.width/100*t.width,height:e.height/100*t.height}}function An(e,t){return Ln(e,t)}function Dn(e){return"boolean"===typeof e}function Fn(e){return"string"===typeof e}function Vn(e){return"number"===typeof e}function Un(e){return"function"===typeof e}function $n(e){return"object"===typeof e&&null!==e}function Hn(e){return Array.isArray(e)}const Wn="random",Bn=new Map;function Yn(e){Bn.set(e.key,e)}function Kn(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Xn(e){for(const[,r]of Bn)if(e.startsWith(r.stringPrefix))return r.parseString(e);const t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,((e,t,n,r,i)=>t+t+n+n+r+r+(void 0!==i?i+i:""))),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(t);return n?{a:void 0!==n[4]?parseInt(n[4],16)/255:1,b:parseInt(n[3],16),g:parseInt(n[2],16),r:parseInt(n[1],16)}:void 0}function qn(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!e)return;const r=Fn(e)?{value:e}:e;if(Fn(r.value))return Qn(r.value,t,n);if(Hn(r.value))return qn({value:Nn(r.value,t,n)});for(const[,i]of Bn){const e=i.handleRangeColor(r);if(e)return e}}function Qn(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!e)return;const r=Fn(e)?{value:e}:e;if(Fn(r.value))return r.value===Wn?er():function(e){return Xn(e)}(r.value);if(Hn(r.value))return Qn({value:Nn(r.value,t,n)});for(const[,i]of Bn){const e=i.handleColor(r);if(e)return e}}function Gn(e,t){const n=qn(e,t,!(arguments.length>2&&void 0!==arguments[2])||arguments[2]);return n?Jn(n):void 0}function Jn(e){const t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o={h:0,l:(i+a)/2,s:0};return i!==a&&(o.s=o.l<.5?(i-a)/(i+a):(i-a)/(2-i-a),o.h=t===i?(n-r)/(i-a):o.h=n===i?2+(r-t)/(i-a):4+(t-n)/(i-a)),o.l*=100,o.s*=100,o.h*=60,o.h<0&&(o.h+=360),o.h>=360&&(o.h-=360),o}function Zn(e){const t={b:0,g:0,r:0},n={h:e.h/360,l:e.l/100,s:e.s/100};if(n.s){const e=n.l<.5?n.l*(1+n.s):n.l+n.s-n.l*n.s,r=2*n.l-e;t.r=Kn(r,e,n.h+1/3),t.g=Kn(r,e,n.h),t.b=Kn(r,e,n.h-1/3)}else t.r=t.g=t.b=n.l;return t.r=Math.floor(255*t.r),t.g=Math.floor(255*t.g),t.b=Math.floor(255*t.b),t}function er(e){const t=e??0;return{b:Math.floor(bn(Sn(t,256))),g:Math.floor(bn(Sn(t,256))),r:Math.floor(bn(Sn(t,256)))}}function tr(e,t){return`rgba(${e.r}, ${e.g}, ${e.b}, ${t??1})`}function nr(e,t){return`hsla(${e.h}, ${e.s}%, ${e.l}%, ${t??1})`}function rr(e){return void 0!==e?{h:e.h.value,s:e.s.value,l:e.l.value}:void 0}function ir(e,t){e.clearRect(0,0,t.width,t.height)}function ar(e,t,n){const r=t[n];void 0!==r&&(e[n]=(e[n]??1)*r)}class or{constructor(e){this.container=e,this._applyPostDrawUpdaters=e=>{for(const t of this._postDrawUpdaters)t.afterDraw&&t.afterDraw(e)},this._applyPreDrawUpdaters=(e,t,n,r,i,a)=>{for(const o of this._preDrawUpdaters){if(o.getColorStyles){const{fill:a,stroke:s}=o.getColorStyles(t,e,n,r);a&&(i.fill=a),s&&(i.stroke=s)}if(o.getTransformValues){const e=o.getTransformValues(t);for(const t in e)ar(a,e,t)}o.beforeDraw&&o.beforeDraw(t)}},this._applyResizePlugins=()=>{for(const e of this._resizePlugins)e.resize&&e.resize()},this._getPluginParticleColors=e=>{let t,n;for(const r of this._colorPlugins)if(!t&&r.particleFillColor&&(t=Gn(r.particleFillColor(e))),!n&&r.particleStrokeColor&&(n=Gn(r.particleStrokeColor(e))),t&&n)break;return[t,n]},this._initCover=()=>{const e=this.container.actualOptions.backgroundMask.cover,t=qn(e.color);if(t){const n={...t,a:e.opacity};this._coverColorStyle=tr(n,n.a)}},this._initStyle=()=>{const e=this.element,t=this.container.actualOptions;if(e){this._fullScreen?(this._originalStyle=Rn({},e.style),this._setFullScreenStyle()):this._resetOriginalStyle();for(const n in t.style){if(!n||!t.style)continue;const r=t.style[n];r&&e.style.setProperty(n,r,"important")}}},this._initTrail=async()=>{const e=this.container.actualOptions,t=e.particles.move.trail,n=t.fill;if(t.enable)if(n.color){const t=qn(n.color);if(!t)return;const r=e.particles.move.trail;this._trailFill={color:{...t},opacity:1/r.length}}else await new Promise(((e,r)=>{if(!n.image)return;const i=document.createElement("img");i.addEventListener("load",(()=>{this._trailFill={image:i,opacity:1/t.length},e()})),i.addEventListener("error",(e=>{r(e.error)})),i.src=n.image}))},this._paintBase=e=>{this.draw((t=>function(e,t,n){e.fillStyle=n??"rgba(0,0,0,0)",e.fillRect(0,0,t.width,t.height)}(t,this.size,e)))},this._paintImage=(e,t)=>{this.draw((n=>function(e,t,n,r){n&&(e.globalAlpha=r,e.drawImage(n,0,0,t.width,t.height),e.globalAlpha=1)}(n,this.size,e,t)))},this._repairStyle=()=>{const e=this.element;e&&(this._safeMutationObserver((e=>e.disconnect())),this._initStyle(),this.initBackground(),this._safeMutationObserver((t=>t.observe(e,{attributes:!0}))))},this._resetOriginalStyle=()=>{const e=this.element,t=this._originalStyle;if(!e||!t)return;const n=e.style;n.position=t.position,n.zIndex=t.zIndex,n.top=t.top,n.left=t.left,n.width=t.width,n.height=t.height},this._safeMutationObserver=e=>{this._mutationObserver&&e(this._mutationObserver)},this._setFullScreenStyle=()=>{const e=this.element;if(!e)return;const t="important",n=e.style;n.setProperty("position","fixed",t),n.setProperty("z-index",this.container.actualOptions.fullScreen.zIndex.toString(10),t),n.setProperty("top","0",t),n.setProperty("left","0",t),n.setProperty("width","100%",t),n.setProperty("height","100%",t)},this.size={height:0,width:0},this._context=null,this._generated=!1,this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}get _fullScreen(){return this.container.actualOptions.fullScreen.enable}clear(){const e=this.container.actualOptions,t=e.particles.move.trail,n=this._trailFill;e.backgroundMask.enable?this.paint():t.enable&&t.length>0&&n?n.color?this._paintBase(tr(n.color,n.opacity)):n.image&&this._paintImage(n.image,n.opacity):this.draw((e=>{ir(e,this.size)}))}destroy(){if(this.stop(),this._generated){const e=this.element;e&&e.remove()}else this._resetOriginalStyle();this._preDrawUpdaters=[],this._postDrawUpdaters=[],this._resizePlugins=[],this._colorPlugins=[]}draw(e){const t=this._context;if(t)return e(t)}drawParticle(e,t){if(e.spawning||e.destroyed)return;const n=e.getRadius();if(n<=0)return;const r=e.getFillColor(),i=e.getStrokeColor()??r;let[a,o]=this._getPluginParticleColors(e);a||(a=r),o||(o=i),(a||o)&&this.draw((r=>{const i=this.container,s=i.actualOptions,l=e.options.zIndex,c=(1-e.zIndexFactor)**l.opacityRate,u=e.bubble.opacity??e.opacity?.value??1,d=u*c,f=(e.strokeOpacity??u)*c,h={},p={fill:a?nr(a,d):void 0};p.stroke=o?nr(o,f):p.fill,this._applyPreDrawUpdaters(r,e,n,d,p,h),function(e){const{container:t,context:n,particle:r,delta:i,colorStyles:a,backgroundMask:o,composite:s,radius:l,opacity:c,shadow:u,transform:d}=e,f=r.getPosition(),h=r.rotation+(r.pathRotation?r.velocity.angle:0),p=Math.sin(h),m=Math.cos(h),g={a:m*(d.a??1),b:p*(d.b??1),c:-p*(d.c??1),d:m*(d.d??1)};n.setTransform(g.a,g.b,g.c,g.d,f.x,f.y),n.beginPath(),o&&(n.globalCompositeOperation=s);const v=r.shadowColor;u.enable&&v&&(n.shadowBlur=u.blur,n.shadowColor=tr(v),n.shadowOffsetX=u.offset.x,n.shadowOffsetY=u.offset.y),a.fill&&(n.fillStyle=a.fill);const y=r.strokeWidth??0;n.lineWidth=y,a.stroke&&(n.strokeStyle=a.stroke),function(e,t,n,r,i,a){if(!n.shape)return;const o=e.drawers.get(n.shape);o&&o.draw(t,n,r,i,a,e.retina.pixelRatio)}(t,n,r,l,c,i),y>0&&n.stroke(),r.close&&n.closePath(),r.fill&&n.fill(),function(e,t,n,r,i,a){if(!n.shape)return;const o=e.drawers.get(n.shape);o&&o.afterEffect&&o.afterEffect(t,n,r,i,a,e.retina.pixelRatio)}(t,n,r,l,c,i),n.globalCompositeOperation="source-over",n.setTransform(1,0,0,1,0,0)}({container:i,context:r,particle:e,delta:t,colorStyles:p,backgroundMask:s.backgroundMask.enable,composite:s.backgroundMask.composite,radius:n*(1-e.zIndexFactor)**l.sizeRate,opacity:d,shadow:e.options.shadow,transform:h}),this._applyPostDrawUpdaters(e)}))}drawParticlePlugin(e,t,n){this.draw((r=>function(e,t,n,r){t.drawParticle&&t.drawParticle(e,n,r)}(r,e,t,n)))}drawPlugin(e,t){this.draw((n=>function(e,t,n){t.draw&&t.draw(e,n)}(n,e,t)))}async init(){this._safeMutationObserver((e=>e.disconnect())),this._mutationObserver=function(e){if(!jn()&&"undefined"!==typeof MutationObserver)return new MutationObserver(e)}((e=>{for(const t of e)"attributes"===t.type&&"style"===t.attributeName&&this._repairStyle()})),this.resize(),this._initStyle(),this._initCover();try{await this._initTrail()}catch(hl){On().error(hl)}this.initBackground(),this._safeMutationObserver((e=>{this.element&&e.observe(this.element,{attributes:!0})})),this.initUpdaters(),this.initPlugins(),this.paint()}initBackground(){const e=this.container.actualOptions.background,t=this.element;if(!t)return;const n=t.style;if(n){if(e.color){const t=qn(e.color);n.backgroundColor=t?tr(t,e.opacity):""}else n.backgroundColor="";n.backgroundImage=e.image||"",n.backgroundPosition=e.position||"",n.backgroundRepeat=e.repeat||"",n.backgroundSize=e.size||""}}initPlugins(){this._resizePlugins=[];for(const[,e]of this.container.plugins)e.resize&&this._resizePlugins.push(e),(e.particleFillColor||e.particleStrokeColor)&&this._colorPlugins.push(e)}initUpdaters(){this._preDrawUpdaters=[],this._postDrawUpdaters=[];for(const e of this.container.particles.updaters)e.afterDraw&&this._postDrawUpdaters.push(e),(e.getColorStyles||e.getTransformValues||e.beforeDraw)&&this._preDrawUpdaters.push(e)}loadCanvas(e){this._generated&&this.element&&this.element.remove(),this._generated=e.dataset&&cn in e.dataset?"true"===e.dataset[cn]:this._generated,this.element=e,this.element.ariaHidden="true",this._originalStyle=Rn({},this.element.style),this.size.height=e.offsetHeight,this.size.width=e.offsetWidth,this._context=this.element.getContext("2d"),this._safeMutationObserver((e=>{this.element&&e.observe(this.element,{attributes:!0})})),this.container.retina.init(),this.initBackground()}paint(){const e=this.container.actualOptions;this.draw((t=>{e.backgroundMask.enable&&e.backgroundMask.cover?(ir(t,this.size),this._paintBase(this._coverColorStyle)):this._paintBase()}))}resize(){if(!this.element)return!1;const e=this.container,t=e.retina.pixelRatio,n=e.canvas.size,r=this.element.offsetWidth*t,i=this.element.offsetHeight*t;if(i===n.height&&r===n.width&&i===this.element.height&&r===this.element.width)return!1;const a={...n};return this.element.width=n.width=this.element.offsetWidth*t,this.element.height=n.height=this.element.offsetHeight*t,this.container.started&&(this.resizeFactor={width:n.width/a.width,height:n.height/a.height}),!0}stop(){this._safeMutationObserver((e=>e.disconnect())),this._mutationObserver=void 0,this.draw((e=>ir(e,this.size)))}async windowResize(){if(!this.element||!this.resize())return;const e=this.container,t=e.updateActualOptions();e.particles.setDensity(),this._applyResizePlugins(),t&&await e.refresh()}}function sr(e,t,n,r,i){if(r){let r={passive:!0};Dn(i)?r.capture=i:void 0!==i&&(r=i),e.addEventListener(t,n,r)}else{const r=i;e.removeEventListener(t,n,r)}}class lr{constructor(e){this.container=e,this._doMouseTouchClick=e=>{const t=this.container,n=t.actualOptions;if(this._canPush){const e=t.interactivity.mouse,r=e.position;if(!r)return;e.clickPosition={...r},e.clickTime=(new Date).getTime();In(n.interactivity.events.onClick.mode,(e=>this.container.handleClickMode(e)))}"touchend"===e.type&&setTimeout((()=>this._mouseTouchFinish()),500)},this._handleThemeChange=e=>{const t=e,n=this.container,r=n.options,i=r.defaultThemes,a=t.matches?i.dark:i.light,o=r.themes.find((e=>e.name===a));o&&o.default.auto&&n.loadTheme(a)},this._handleVisibilityChange=()=>{const e=this.container,t=e.actualOptions;this._mouseTouchFinish(),t.pauseOnBlur&&(document&&document.hidden?(e.pageHidden=!0,e.pause()):(e.pageHidden=!1,e.getAnimationStatus()?e.play(!0):e.draw(!0)))},this._handleWindowResize=async()=>{this._resizeTimeout&&(clearTimeout(this._resizeTimeout),delete this._resizeTimeout),this._resizeTimeout=setTimeout((async()=>{const e=this.container.canvas;e&&await e.windowResize()}),1e3*this.container.actualOptions.interactivity.events.resize.delay)},this._manageInteractivityListeners=(e,t)=>{const n=this._handlers,r=this.container,i=r.actualOptions,a=r.interactivity.element;if(!a)return;const o=a,s=r.canvas.element;s&&(s.style.pointerEvents=o===s?"initial":"none"),(i.interactivity.events.onHover.enable||i.interactivity.events.onClick.enable)&&(sr(a,dn,n.mouseMove,t),sr(a,"touchstart",n.touchStart,t),sr(a,"touchmove",n.touchMove,t),i.interactivity.events.onClick.enable?(sr(a,fn,n.touchEndClick,t),sr(a,"pointerup",n.mouseUp,t),sr(a,"pointerdown",n.mouseDown,t)):sr(a,fn,n.touchEnd,t),sr(a,e,n.mouseLeave,t),sr(a,"touchcancel",n.touchCancel,t))},this._manageListeners=e=>{const t=this._handlers,n=this.container,r=n.actualOptions.interactivity.detectsOn,i=n.canvas.element;let a=un;"window"===r?(n.interactivity.element=window,a="pointerout"):n.interactivity.element="parent"===r&&i?i.parentElement??i.parentNode:i,this._manageMediaMatch(e),this._manageResize(e),this._manageInteractivityListeners(a,e),document&&sr(document,"visibilitychange",t.visibilityChange,e,!1)},this._manageMediaMatch=e=>{const t=this._handlers,n=zn("(prefers-color-scheme: dark)");n&&(void 0===n.addEventListener?void 0!==n.addListener&&(e?n.addListener(t.oldThemeChange):n.removeListener(t.oldThemeChange)):sr(n,"change",t.themeChange,e))},this._manageResize=e=>{const t=this._handlers,n=this.container;if(!n.actualOptions.interactivity.events.resize)return;if("undefined"===typeof ResizeObserver)return void sr(window,"resize",t.resize,e);const r=n.canvas.element;this._resizeObserver&&!e?(r&&this._resizeObserver.unobserve(r),this._resizeObserver.disconnect(),delete this._resizeObserver):!this._resizeObserver&&e&&r&&(this._resizeObserver=new ResizeObserver((async e=>{e.find((e=>e.target===r))&&await this._handleWindowResize()})),this._resizeObserver.observe(r))},this._mouseDown=()=>{const{interactivity:e}=this.container;if(!e)return;const{mouse:t}=e;t.clicking=!0,t.downPosition=t.position},this._mouseTouchClick=e=>{const t=this.container,n=t.actualOptions,{mouse:r}=t.interactivity;r.inside=!0;let i=!1;const a=r.position;if(a&&n.interactivity.events.onClick.enable){for(const[,e]of t.plugins)if(e.clickPositionValid&&(i=e.clickPositionValid(a),i))break;i||this._doMouseTouchClick(e),r.clicking=!1}},this._mouseTouchFinish=()=>{const e=this.container.interactivity;if(!e)return;const t=e.mouse;delete t.position,delete t.clickPosition,delete t.downPosition,e.status=un,t.inside=!1,t.clicking=!1},this._mouseTouchMove=e=>{const t=this.container,n=t.actualOptions,r=t.interactivity,i=t.canvas.element;if(!r||!r.element)return;let a;if(r.mouse.inside=!0,e.type.startsWith("pointer")){this._canPush=!0;const t=e;if(r.element===window){if(i){const e=i.getBoundingClientRect();a={x:t.clientX-e.left,y:t.clientY-e.top}}}else if("parent"===n.interactivity.detectsOn){const e=t.target,n=t.currentTarget;if(e&&n&&i){const r=e.getBoundingClientRect(),o=n.getBoundingClientRect(),s=i.getBoundingClientRect();a={x:t.offsetX+2*r.left-(o.left+s.left),y:t.offsetY+2*r.top-(o.top+s.top)}}else a={x:t.offsetX??t.clientX,y:t.offsetY??t.clientY}}else t.target===i&&(a={x:t.offsetX??t.clientX,y:t.offsetY??t.clientY})}else if(this._canPush="touchmove"!==e.type,i){const t=e,n=t.touches[t.touches.length-1],r=i.getBoundingClientRect();a={x:n.clientX-(r.left??0),y:n.clientY-(r.top??0)}}const o=t.retina.pixelRatio;a&&(a.x*=o,a.y*=o),r.mouse.position=a,r.status=dn},this._touchEnd=e=>{const t=e,n=Array.from(t.changedTouches);for(const r of n)this._touches.delete(r.identifier);this._mouseTouchFinish()},this._touchEndClick=e=>{const t=e,n=Array.from(t.changedTouches);for(const r of n)this._touches.delete(r.identifier);this._mouseTouchClick(e)},this._touchStart=e=>{const t=e,n=Array.from(t.changedTouches);for(const r of n)this._touches.set(r.identifier,performance.now());this._mouseTouchMove(e)},this._canPush=!0,this._touches=new Map,this._handlers={mouseDown:()=>this._mouseDown(),mouseLeave:()=>this._mouseTouchFinish(),mouseMove:e=>this._mouseTouchMove(e),mouseUp:e=>this._mouseTouchClick(e),touchStart:e=>this._touchStart(e),touchMove:e=>this._mouseTouchMove(e),touchEnd:e=>this._touchEnd(e),touchCancel:e=>this._touchEnd(e),touchEndClick:e=>this._touchEndClick(e),visibilityChange:()=>this._handleVisibilityChange(),themeChange:e=>this._handleThemeChange(e),oldThemeChange:e=>this._handleThemeChange(e),resize:()=>{this._handleWindowResize()}}}addListeners(){this._manageListeners(!0)}removeListeners(){this._manageListeners(!1)}}class cr{constructor(){this.value=""}static create(e,t){const n=new cr;return n.load(e),void 0!==t&&(Fn(t)||Hn(t)?n.load({value:t}):n.load(t)),n}load(e){void 0!==e?.value&&(this.value=e.value)}}class ur{constructor(){this.color=new cr,this.color.value="",this.image="",this.position="",this.repeat="",this.size="",this.opacity=1}load(e){e&&(void 0!==e.color&&(this.color=cr.create(this.color,e.color)),void 0!==e.image&&(this.image=e.image),void 0!==e.position&&(this.position=e.position),void 0!==e.repeat&&(this.repeat=e.repeat),void 0!==e.size&&(this.size=e.size),void 0!==e.opacity&&(this.opacity=e.opacity))}}class dr{constructor(){this.color=new cr,this.color.value="#fff",this.opacity=1}load(e){e&&(void 0!==e.color&&(this.color=cr.create(this.color,e.color)),void 0!==e.opacity&&(this.opacity=e.opacity))}}class fr{constructor(){this.composite="destination-out",this.cover=new dr,this.enable=!1}load(e){if(e){if(void 0!==e.composite&&(this.composite=e.composite),void 0!==e.cover){const t=e.cover,n=Fn(e.cover)?{color:e.cover}:e.cover;this.cover.load(void 0!==t.color?t:{color:n})}void 0!==e.enable&&(this.enable=e.enable)}}}class hr{constructor(){this.enable=!0,this.zIndex=0}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.zIndex&&(this.zIndex=e.zIndex))}}class pr{constructor(){this.enable=!1,this.mode=[]}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.mode&&(this.mode=e.mode))}}class mr{constructor(){this.selectors=[],this.enable=!1,this.mode=[],this.type="circle"}get el(){return this.elementId}set el(e){this.elementId=e}get elementId(){return this.ids}set elementId(e){this.ids=e}get ids(){return In(this.selectors,(e=>e.replace("#","")))}set ids(e){this.selectors=In(e,(e=>`#${e}`))}load(e){if(!e)return;const t=e.ids??e.elementId??e.el;void 0!==t&&(this.ids=t),void 0!==e.selectors&&(this.selectors=e.selectors),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.type&&(this.type=e.type)}}class gr{constructor(){this.enable=!1,this.force=2,this.smooth=10}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.force&&(this.force=e.force),void 0!==e.smooth&&(this.smooth=e.smooth))}}class vr{constructor(){this.enable=!1,this.mode=[],this.parallax=new gr}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.mode&&(this.mode=e.mode),this.parallax.load(e.parallax))}}class yr{constructor(){this.delay=.5,this.enable=!0}load(e){void 0!==e&&(void 0!==e.delay&&(this.delay=e.delay),void 0!==e.enable&&(this.enable=e.enable))}}class br{constructor(){this.onClick=new pr,this.onDiv=new mr,this.onHover=new vr,this.resize=new yr}get onclick(){return this.onClick}set onclick(e){this.onClick=e}get ondiv(){return this.onDiv}set ondiv(e){this.onDiv=e}get onhover(){return this.onHover}set onhover(e){this.onHover=e}load(e){if(!e)return;this.onClick.load(e.onClick??e.onclick);const t=e.onDiv??e.ondiv;void 0!==t&&(this.onDiv=In(t,(e=>{const t=new mr;return t.load(e),t}))),this.onHover.load(e.onHover??e.onhover),Dn(e.resize)?this.resize.enable=e.resize:this.resize.load(e.resize)}}class wr{constructor(e,t){this._engine=e,this._container=t}load(e){if(!e)return;if(!this._container)return;const t=this._engine.plugins.interactors.get(this._container);if(t)for(const n of t)n.loadModeOptions&&n.loadModeOptions(this,e)}}class xr{constructor(e,t){this.detectsOn="window",this.events=new br,this.modes=new wr(e,t)}get detect_on(){return this.detectsOn}set detect_on(e){this.detectsOn=e}load(e){if(!e)return;const t=e.detectsOn??e.detect_on;void 0!==t&&(this.detectsOn=t),this.events.load(e.events),this.modes.load(e.modes)}}class kr{load(e){e&&(e.position&&(this.position={x:e.position.x??50,y:e.position.y??50,mode:e.position.mode??"percent"}),e.options&&(this.options=Rn({},e.options)))}}class Sr{constructor(){this.maxWidth=1/0,this.options={},this.mode="canvas"}load(e){e&&(void 0!==e.maxWidth&&(this.maxWidth=e.maxWidth),void 0!==e.mode&&("screen"===e.mode?this.mode="screen":this.mode="canvas"),void 0!==e.options&&(this.options=Rn({},e.options)))}}class _r{constructor(){this.auto=!1,this.mode="any",this.value=!1}load(e){e&&(void 0!==e.auto&&(this.auto=e.auto),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.value&&(this.value=e.value))}}class Cr{constructor(){this.name="",this.default=new _r}load(e){e&&(void 0!==e.name&&(this.name=e.name),this.default.load(e.default),void 0!==e.options&&(this.options=Rn({},e.options)))}}class Er{constructor(){this.count=0,this.enable=!1,this.offset=0,this.speed=1,this.delay=0,this.decay=0,this.sync=!0}load(e){e&&(void 0!==e.count&&(this.count=Sn(e.count)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.offset&&(this.offset=Sn(e.offset)),void 0!==e.speed&&(this.speed=Sn(e.speed)),void 0!==e.decay&&(this.decay=Sn(e.decay)),void 0!==e.delay&&(this.delay=Sn(e.delay)),void 0!==e.sync&&(this.sync=e.sync))}}class Pr{constructor(){this.h=new Er,this.s=new Er,this.l=new Er}load(e){e&&(this.h.load(e.h),this.s.load(e.s),this.l.load(e.l))}}class Or extends cr{constructor(){super(),this.animation=new Pr}static create(e,t){const n=new Or;return n.load(e),void 0!==t&&(Fn(t)||Hn(t)?n.load({value:t}):n.load(t)),n}load(e){if(super.load(e),!e)return;const t=e.animation;void 0!==t&&(void 0!==t.enable?this.animation.h.load(t):this.animation.load(e.animation))}}class jr{constructor(){this.speed=2}load(e){e&&void 0!==e.speed&&(this.speed=e.speed)}}class zr{constructor(){this.enable=!0,this.retries=0}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.retries&&(this.retries=e.retries))}}class Tr{constructor(){this.count=0,this.enable=!1,this.speed=1,this.decay=0,this.delay=0,this.sync=!1}load(e){e&&(void 0!==e.count&&(this.count=Sn(e.count)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed&&(this.speed=Sn(e.speed)),void 0!==e.decay&&(this.decay=Sn(e.decay)),void 0!==e.delay&&(this.delay=Sn(e.delay)),void 0!==e.sync&&(this.sync=e.sync))}}class Nr extends Tr{constructor(){super(),this.mode="auto",this.startValue="random"}load(e){super.load(e),e&&(void 0!==e.minimumValue&&(this.minimumValue=e.minimumValue),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.startValue&&(this.startValue=e.startValue))}}class Rr{constructor(){this.enable=!1,this.minimumValue=0}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0!==e.minimumValue&&(this.minimumValue=e.minimumValue))}}class Ir{constructor(){this.random=new Rr,this.value=0}load(e){e&&(Dn(e.random)?this.random.enable=e.random:this.random.load(e.random),void 0!==e.value&&(this.value=Sn(e.value,this.random.enable?this.random.minimumValue:void 0)))}}class Mr extends Ir{constructor(){super(),this.random.minimumValue=.1,this.value=1}}class Lr{constructor(){this.horizontal=new Mr,this.vertical=new Mr}load(e){e&&(this.horizontal.load(e.horizontal),this.vertical.load(e.vertical))}}class Ar{constructor(){this.absorb=new jr,this.bounce=new Lr,this.enable=!1,this.maxSpeed=50,this.mode="bounce",this.overlap=new zr}load(e){e&&(this.absorb.load(e.absorb),this.bounce.load(e.bounce),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.maxSpeed&&(this.maxSpeed=Sn(e.maxSpeed)),void 0!==e.mode&&(this.mode=e.mode),this.overlap.load(e.overlap))}}class Dr{constructor(){this.offset=0,this.value=90}load(e){e&&(void 0!==e.offset&&(this.offset=Sn(e.offset)),void 0!==e.value&&(this.value=Sn(e.value)))}}class Fr{constructor(){this.distance=200,this.enable=!1,this.rotate={x:3e3,y:3e3}}get rotateX(){return this.rotate.x}set rotateX(e){this.rotate.x=e}get rotateY(){return this.rotate.y}set rotateY(e){this.rotate.y=e}load(e){if(!e)return;void 0!==e.distance&&(this.distance=Sn(e.distance)),void 0!==e.enable&&(this.enable=e.enable);const t=e.rotate?.x??e.rotateX;void 0!==t&&(this.rotate.x=t);const n=e.rotate?.y??e.rotateY;void 0!==n&&(this.rotate.y=n)}}class Vr{constructor(){this.x=50,this.y=50,this.mode="percent",this.radius=0}load(e){e&&(void 0!==e.x&&(this.x=e.x),void 0!==e.y&&(this.y=e.y),void 0!==e.mode&&(this.mode=e.mode),void 0!==e.radius&&(this.radius=e.radius))}}class Ur{constructor(){this.acceleration=9.81,this.enable=!1,this.inverse=!1,this.maxSpeed=50}load(e){e&&(void 0!==e.acceleration&&(this.acceleration=Sn(e.acceleration)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.inverse&&(this.inverse=e.inverse),void 0!==e.maxSpeed&&(this.maxSpeed=Sn(e.maxSpeed)))}}class $r{constructor(){this.clamp=!0,this.delay=new Ir,this.enable=!1,this.options={}}load(e){e&&(void 0!==e.clamp&&(this.clamp=e.clamp),this.delay.load(e.delay),void 0!==e.enable&&(this.enable=e.enable),this.generator=e.generator,e.options&&(this.options=Rn(this.options,e.options)))}}class Hr{load(e){e&&(void 0!==e.color&&(this.color=cr.create(this.color,e.color)),void 0!==e.image&&(this.image=e.image))}}class Wr{constructor(){this.enable=!1,this.length=10,this.fill=new Hr}get fillColor(){return this.fill.color}set fillColor(e){this.fill.load({color:e})}load(e){e&&(void 0!==e.enable&&(this.enable=e.enable),void 0===e.fill&&void 0===e.fillColor||this.fill.load(e.fill||{color:e.fillColor}),void 0!==e.length&&(this.length=e.length))}}class Br{constructor(){this.default="out"}load(e){e&&(void 0!==e.default&&(this.default=e.default),this.bottom=e.bottom??e.default,this.left=e.left??e.default,this.right=e.right??e.default,this.top=e.top??e.default)}}class Yr{constructor(){this.acceleration=0,this.enable=!1}load(e){e&&(void 0!==e.acceleration&&(this.acceleration=Sn(e.acceleration)),void 0!==e.enable&&(this.enable=e.enable),e.position&&(this.position=Rn({},e.position)))}}class Kr{constructor(){this.angle=new Dr,this.attract=new Fr,this.center=new Vr,this.decay=0,this.distance={},this.direction="none",this.drift=0,this.enable=!1,this.gravity=new Ur,this.path=new $r,this.outModes=new Br,this.random=!1,this.size=!1,this.speed=2,this.spin=new Yr,this.straight=!1,this.trail=new Wr,this.vibrate=!1,this.warp=!1}get bounce(){return this.collisions}set bounce(e){this.collisions=e}get collisions(){return!1}set collisions(e){}get noise(){return this.path}set noise(e){this.path=e}get outMode(){return this.outModes.default}set outMode(e){this.outModes.default=e}get out_mode(){return this.outMode}set out_mode(e){this.outMode=e}load(e){if(!e)return;this.angle.load(Vn(e.angle)?{value:e.angle}:e.angle),this.attract.load(e.attract),this.center.load(e.center),void 0!==e.decay&&(this.decay=Sn(e.decay)),void 0!==e.direction&&(this.direction=e.direction),void 0!==e.distance&&(this.distance=Vn(e.distance)?{horizontal:e.distance,vertical:e.distance}:{...e.distance}),void 0!==e.drift&&(this.drift=Sn(e.drift)),void 0!==e.enable&&(this.enable=e.enable),this.gravity.load(e.gravity);const t=e.outModes??e.outMode??e.out_mode;void 0!==t&&($n(t)?this.outModes.load(t):this.outModes.load({default:t})),this.path.load(e.path??e.noise),void 0!==e.random&&(this.random=e.random),void 0!==e.size&&(this.size=e.size),void 0!==e.speed&&(this.speed=Sn(e.speed)),this.spin.load(e.spin),void 0!==e.straight&&(this.straight=e.straight),this.trail.load(e.trail),void 0!==e.vibrate&&(this.vibrate=e.vibrate),void 0!==e.warp&&(this.warp=e.warp)}}class Xr extends Nr{constructor(){super(),this.destroy="none",this.speed=2}get opacity_min(){return this.minimumValue}set opacity_min(e){this.minimumValue=e}load(e){void 0!==e?.opacity_min&&void 0===e.minimumValue&&(e.minimumValue=e.opacity_min),super.load(e),e&&void 0!==e.destroy&&(this.destroy=e.destroy)}}class qr extends Ir{constructor(){super(),this.animation=new Xr,this.random.minimumValue=.1,this.value=1}get anim(){return this.animation}set anim(e){this.animation=e}load(e){if(!e)return;super.load(e);const t=e.animation??e.anim;void 0!==t&&(this.animation.load(t),this.value=Sn(this.value,this.animation.enable?this.animation.minimumValue:void 0))}}class Qr{constructor(){this.enable=!1,this.width=1920,this.height=1080}get area(){return this.width}set area(e){this.width=e}get factor(){return this.height}set factor(e){this.height=e}get value_area(){return this.area}set value_area(e){this.area=e}load(e){if(!e)return;void 0!==e.enable&&(this.enable=e.enable);const t=e.width??e.area??e.value_area;void 0!==t&&(this.width=t);const n=e.height??e.factor;void 0!==n&&(this.height=n)}}class Gr{constructor(){this.density=new Qr,this.limit=0,this.value=0}get max(){return this.limit}set max(e){this.limit=e}load(e){if(!e)return;this.density.load(e.density);const t=e.limit??e.max;void 0!==t&&(this.limit=t),void 0!==e.value&&(this.value=e.value)}}class Jr{constructor(){this.blur=0,this.color=new cr,this.enable=!1,this.offset={x:0,y:0},this.color.value="#000"}load(e){e&&(void 0!==e.blur&&(this.blur=e.blur),this.color=cr.create(this.color,e.color),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.offset&&(void 0!==e.offset.x&&(this.offset.x=e.offset.x),void 0!==e.offset.y&&(this.offset.y=e.offset.y)))}}const Zr="character",ei="char",ti="image",ni="images",ri="polygon",ii="star";class ai{constructor(){this.loadShape=(e,t,n,r)=>{if(!e)return;const i=Hn(e),a=i?[]:{},o=i!==Hn(this.options[t]),s=i!==Hn(this.options[n]);o&&(this.options[t]=a),s&&r&&(this.options[n]=a),this.options[t]=Rn(this.options[t]??a,e),this.options[n]&&!r||(this.options[n]=Rn(this.options[n]??a,e))},this.close=!0,this.fill=!0,this.options={},this.type="circle"}get character(){return this.options[Zr]??this.options[ei]}set character(e){this.options[ei]=this.options[Zr]=e}get custom(){return this.options}set custom(e){this.options=e}get image(){return this.options[ti]??this.options[ni]}set image(e){this.options[ni]=this.options[ti]=e}get images(){return this.image}set images(e){this.image=e}get polygon(){return this.options[ri]??this.options[ii]}set polygon(e){this.options[ii]=this.options[ri]=e}get stroke(){return[]}set stroke(e){}load(e){if(!e)return;const t=e.options??e.custom;if(void 0!==t)for(const n in t){const e=t[n];e&&(this.options[n]=Rn(this.options[n]??{},e))}this.loadShape(e.character,Zr,ei,!0),this.loadShape(e.polygon,ri,ii,!1),this.loadShape(e.image??e.images,ti,ni,!0),void 0!==e.close&&(this.close=e.close),void 0!==e.fill&&(this.fill=e.fill),void 0!==e.type&&(this.type=e.type)}}class oi extends Nr{constructor(){super(),this.destroy="none",this.speed=5}get size_min(){return this.minimumValue}set size_min(e){this.minimumValue=e}load(e){void 0!==e?.size_min&&void 0===e.minimumValue&&(e.minimumValue=e.size_min),super.load(e),e&&void 0!==e.destroy&&(this.destroy=e.destroy)}}class si extends Ir{constructor(){super(),this.animation=new oi,this.random.minimumValue=1,this.value=3}get anim(){return this.animation}set anim(e){this.animation=e}load(e){if(super.load(e),!e)return;const t=e.animation??e.anim;void 0!==t&&(this.animation.load(t),this.value=Sn(this.value,this.animation.enable?this.animation.minimumValue:void 0))}}class li{constructor(){this.width=0}load(e){e&&(void 0!==e.color&&(this.color=Or.create(this.color,e.color)),void 0!==e.width&&(this.width=Sn(e.width)),void 0!==e.opacity&&(this.opacity=Sn(e.opacity)))}}class ci extends Ir{constructor(){super(),this.opacityRate=1,this.sizeRate=1,this.velocityRate=1}load(e){super.load(e),e&&(void 0!==e.opacityRate&&(this.opacityRate=e.opacityRate),void 0!==e.sizeRate&&(this.sizeRate=e.sizeRate),void 0!==e.velocityRate&&(this.velocityRate=e.velocityRate))}}class ui{constructor(e,t){this._engine=e,this._container=t,this.bounce=new Lr,this.collisions=new Ar,this.color=new Or,this.color.value="#fff",this.groups={},this.move=new Kr,this.number=new Gr,this.opacity=new qr,this.reduceDuplicates=!1,this.shadow=new Jr,this.shape=new ai,this.size=new si,this.stroke=new li,this.zIndex=new ci}load(e){if(!e)return;if(this.bounce.load(e.bounce),this.color.load(Or.create(this.color,e.color)),void 0!==e.groups)for(const r in e.groups){const t=e.groups[r];void 0!==t&&(this.groups[r]=Rn(this.groups[r]??{},t))}this.move.load(e.move),this.number.load(e.number),this.opacity.load(e.opacity),void 0!==e.reduceDuplicates&&(this.reduceDuplicates=e.reduceDuplicates),this.shape.load(e.shape),this.size.load(e.size),this.shadow.load(e.shadow),this.zIndex.load(e.zIndex);const t=e.move?.collisions??e.move?.bounce;void 0!==t&&(this.collisions.enable=t),this.collisions.load(e.collisions),void 0!==e.interactivity&&(this.interactivity=Rn({},e.interactivity));const n=e.stroke??e.shape?.stroke;if(n&&(this.stroke=In(n,(e=>{const t=new li;return t.load(e),t}))),this._container){const t=this._engine.plugins.updaters.get(this._container);if(t)for(const r of t)r.loadOptions&&r.loadOptions(this,e);const n=this._engine.plugins.interactors.get(this._container);if(n)for(const r of n)r.loadParticlesOptions&&r.loadParticlesOptions(this,e)}}}function di(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const i of n)e.load(i)}function fi(e,t){const n=new ui(e,t);for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return di(n,...i),n}class hi{constructor(e,t){this._findDefaultTheme=e=>this.themes.find((t=>t.default.value&&t.default.mode===e))??this.themes.find((e=>e.default.value&&"any"===e.default.mode)),this._importPreset=e=>{this.load(this._engine.plugins.getPreset(e))},this._engine=e,this._container=t,this.autoPlay=!0,this.background=new ur,this.backgroundMask=new fr,this.defaultThemes={},this.delay=0,this.fullScreen=new hr,this.detectRetina=!0,this.duration=0,this.fpsLimit=120,this.interactivity=new xr(e,t),this.manualParticles=[],this.particles=fi(this._engine,this._container),this.pauseOnBlur=!0,this.pauseOnOutsideViewport=!0,this.responsive=[],this.smooth=!1,this.style={},this.themes=[],this.zLayers=100}get backgroundMode(){return this.fullScreen}set backgroundMode(e){this.fullScreen.load(e)}get fps_limit(){return this.fpsLimit}set fps_limit(e){this.fpsLimit=e}get retina_detect(){return this.detectRetina}set retina_detect(e){this.detectRetina=e}load(e){if(!e)return;void 0!==e.preset&&In(e.preset,(e=>this._importPreset(e))),void 0!==e.autoPlay&&(this.autoPlay=e.autoPlay),void 0!==e.delay&&(this.delay=Sn(e.delay));const t=e.detectRetina??e.retina_detect;void 0!==t&&(this.detectRetina=t),void 0!==e.duration&&(this.duration=Sn(e.duration));const n=e.fpsLimit??e.fps_limit;void 0!==n&&(this.fpsLimit=n),void 0!==e.pauseOnBlur&&(this.pauseOnBlur=e.pauseOnBlur),void 0!==e.pauseOnOutsideViewport&&(this.pauseOnOutsideViewport=e.pauseOnOutsideViewport),void 0!==e.zLayers&&(this.zLayers=e.zLayers),this.background.load(e.background);const r=e.fullScreen??e.backgroundMode;Dn(r)?this.fullScreen.enable=r:this.fullScreen.load(r),this.backgroundMask.load(e.backgroundMask),this.interactivity.load(e.interactivity),e.manualParticles&&(this.manualParticles=e.manualParticles.map((e=>{const t=new kr;return t.load(e),t}))),this.particles.load(e.particles),this.style=Rn(this.style,e.style),this._engine.plugins.loadOptions(this,e),void 0!==e.smooth&&(this.smooth=e.smooth);const i=this._engine.plugins.interactors.get(this._container);if(i)for(const a of i)a.loadOptions&&a.loadOptions(this,e);if(void 0!==e.responsive)for(const a of e.responsive){const e=new Sr;e.load(a),this.responsive.push(e)}if(this.responsive.sort(((e,t)=>e.maxWidth-t.maxWidth)),void 0!==e.themes)for(const a of e.themes){const e=this.themes.find((e=>e.name===a.name));if(e)e.load(a);else{const e=new Cr;e.load(a),this.themes.push(e)}}this.defaultThemes.dark=this._findDefaultTheme("dark")?.name,this.defaultThemes.light=this._findDefaultTheme("light")?.name}setResponsive(e,t,n){this.load(n);const r=this.responsive.find((n=>"screen"===n.mode&&screen?n.maxWidth>screen.availWidth:n.maxWidth*t>e));return this.load(r?.options),r?.maxWidth}setTheme(e){if(e){const t=this.themes.find((t=>t.name===e));t&&this.load(t.options)}else{const e=zn("(prefers-color-scheme: dark)"),t=e&&e.matches,n=this._findDefaultTheme(t?"dark":"light");n&&this.load(n.options)}}}class pi{constructor(e,t){this.container=t,this._engine=e,this._interactors=e.plugins.getInteractors(this.container,!0),this._externalInteractors=[],this._particleInteractors=[]}async externalInteract(e){for(const t of this._externalInteractors)t.isEnabled()&&await t.interact(e)}handleClickMode(e){for(const t of this._externalInteractors)t.handleClickMode&&t.handleClickMode(e)}init(){this._externalInteractors=[],this._particleInteractors=[];for(const e of this._interactors){switch(e.type){case"external":this._externalInteractors.push(e);break;case"particles":this._particleInteractors.push(e)}e.init()}}async particlesInteract(e,t){for(const n of this._externalInteractors)n.clear(e,t);for(const n of this._particleInteractors)n.isEnabled(e)&&await n.interact(e,t)}async reset(e){for(const t of this._externalInteractors)t.isEnabled()&&t.reset(e);for(const t of this._particleInteractors)t.isEnabled(e)&&t.reset(e)}}const mi=e=>{if(!Tn(e.outMode,e.checkModes))return;const t=2*e.radius;e.coord>e.maxCoord-t?e.setCb(-e.radius):e.coord<t&&e.setCb(e.radius)};class gi{constructor(e,t,n,r,i,a){var o=this;this.container=n,this._calcPosition=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;for(const[,d]of e.plugins){const e=void 0!==d.particlePosition?d.particlePosition(t,o):void 0;if(e)return pn.create(e.x,e.y,n)}const i=Cn({size:e.canvas.size,position:t}),a=pn.create(i.x,i.y,n),s=o.getRadius(),l=o.options.move.outModes,c=t=>{mi({outMode:t,checkModes:["bounce","bounce-horizontal"],coord:a.x,maxCoord:e.canvas.size.width,setCb:e=>a.x+=e,radius:s})},u=t=>{mi({outMode:t,checkModes:["bounce","bounce-vertical"],coord:a.y,maxCoord:e.canvas.size.height,setCb:e=>a.y+=e,radius:s})};return c(l.left??l.default),c(l.right??l.default),u(l.top??l.default),u(l.bottom??l.default),o._checkOverlap(a,r)?o._calcPosition(e,void 0,n,r+1):a},this._calculateVelocity=()=>{const e=function(e){const t=mn.origin;return t.length=1,t.angle=e,t}(this.direction).copy(),t=this.options.move;if("inside"===t.direction||"outside"===t.direction)return e;const n=Math.PI/180*wn(t.angle.value),r=Math.PI/180*wn(t.angle.offset),i={left:r-n/2,right:r+n/2};return t.straight||(e.angle+=bn(Sn(i.left,i.right))),t.random&&"number"===typeof t.speed&&(e.length*=vn()),e},this._checkOverlap=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=o.options.collisions,r=o.getRadius();if(!n.enable)return!1;const i=n.overlap;if(i.enable)return!1;const a=i.retries;if(a>=0&&t>a)throw new Error(`${hn} particle is overlapping and can't be placed`);return!!o.container.particles.find((t=>_n(e,t.position)<r+t.getRadius()))},this._getRollColor=e=>{if(!e||!this.roll||!this.backColor&&!this.roll.alter)return e;const t=this.roll.horizontal&&this.roll.vertical?2:1,n=this.roll.horizontal?Math.PI/2:0;return Math.floor(((this.roll.angle??0)+n)/(Math.PI/t))%2?this.backColor?this.backColor:this.roll.alter?function(e,t,n){return{h:e.h,s:e.s,l:e.l+("darken"===t?-1:1)*n}}(e,this.roll.alter.type,this.roll.alter.value):e:e},this._initPosition=e=>{const t=this.container,n=wn(this.options.zIndex.value);this.position=this._calcPosition(t,e,yn(n,0,t.zLayers)),this.initialPosition=this.position.copy();const r=t.canvas.size;switch(this.moveCenter={...An(this.options.move.center,r),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??"percent"},this.direction=function(e,t,n){if(Vn(e))return e*Math.PI/180;switch(e){case"top":return-Math.PI/2;case"top-right":return-Math.PI/4;case"right":return 0;case"bottom-right":return Math.PI/4;case"bottom":return Math.PI/2;case"bottom-left":return 3*Math.PI/4;case"left":return Math.PI;case"top-left":return-3*Math.PI/4;case"inside":return Math.atan2(n.y-t.y,n.x-t.x);case"outside":return Math.atan2(t.y-n.y,t.x-n.x);default:return vn()*Math.PI*2}}(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside"}this.offset=mn.origin},this._loadShapeData=(e,t)=>{const n=e.options[this.shape];if(n)return Rn({close:e.close,fill:e.fill},Mn(n,this.id,t))},this._engine=e,this.init(t,r,i,a)}destroy(e){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;const t=this.container,n=this.pathGenerator;for(const[,r]of t.plugins)r.particleDestroyed&&r.particleDestroyed(this,e);for(const r of t.particles.updaters)r.particleDestroyed&&r.particleDestroyed(this,e);n&&n.reset(this)}draw(e){const t=this.container;for(const[,n]of t.plugins)t.canvas.drawParticlePlugin(n,this,e);t.canvas.drawParticle(this,e)}getFillColor(){return this._getRollColor(this.bubble.color??rr(this.color))}getMass(){return this.getRadius()**2*Math.PI/2}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??rr(this.strokeColor))}init(e,t,n,r){const i=this.container,a=this._engine;this.id=e,this.group=r,this.fill=!0,this.pathRotation=!1,this.close=!0,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;const o=i.retina.pixelRatio,s=i.actualOptions,l=fi(this._engine,i,s.particles),c=l.shape.type,{reduceDuplicates:u}=l;this.shape=Mn(c,this.id,u);const d=l.shape;if(n&&n.shape&&n.shape.type){const e=Mn(n.shape.type,this.id,u);e&&(this.shape=e,d.load(n.shape))}this.shapeData=this._loadShapeData(d,u),l.load(n);const f=this.shapeData;f&&l.load(f.particles);const h=new xr(a,i);h.load(i.actualOptions.interactivity),h.load(l.interactivity),this.interactivity=h,this.fill=f?.fill??l.shape.fill,this.close=f?.close??l.shape.close,this.options=l;const p=this.options.move.path;this.pathDelay=1e3*function(e){const t=e.random,{enable:n,minimumValue:r}=Dn(t)?{enable:t,minimumValue:0}:t;return wn(n?Sn(e.value,r):e.value)}(p.delay),p.generator&&(this.pathGenerator=this._engine.plugins.getPathGenerator(p.generator),this.pathGenerator&&i.addPath(p.generator,this.pathGenerator)&&this.pathGenerator.init(i)),i.retina.initParticle(this),this.size=function(e,t){const n=e.value,r=e.animation,i={delayTime:1e3*wn(r.delay),enable:r.enable,value:wn(e.value)*t,max:kn(n)*t,min:xn(n)*t,loops:0,maxLoops:wn(r.count),time:0};if(r.enable){switch(i.decay=1-wn(r.decay),r.mode){case"increase":i.status="increasing";break;case"decrease":i.status="decreasing";break;case"random":i.status=vn()>=.5?"increasing":"decreasing"}const e="auto"===r.mode;switch(r.startValue){case"min":i.value=i.min,e&&(i.status="increasing");break;case"max":i.value=i.max,e&&(i.status="decreasing");break;default:i.value=bn(i),e&&(i.status=vn()>=.5?"increasing":"decreasing")}}return i.initialValue=i.value,i}(this.options.size,o),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(t),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-wn(this.options.move.decay);const m=i.particles;m.needsSort=m.needsSort||m.lastZIndex<this.position.z,m.lastZIndex=this.position.z,this.zIndexFactor=this.position.z/i.zLayers,this.sides=24;let g=i.drawers.get(this.shape);g||(g=this._engine.plugins.getShapeDrawer(this.shape),g&&i.drawers.set(this.shape,g)),g&&g.loadShape&&g.loadShape(this);const v=g?.getSidesCount;v&&(this.sides=v(this)),this.spawning=!1,this.shadowColor=qn(this.options.shadow.color);for(const y of i.particles.updaters)y.init(this);for(const y of i.particles.movers)y.init&&y.init(this);g&&g.particleInit&&g.particleInit(i,this);for(const[,y]of i.plugins)y.particleCreated&&y.particleCreated(this)}isInsideCanvas(){const e=this.getRadius(),t=this.container.canvas.size,n=this.position;return n.x>=-e&&n.y>=-e&&n.y<=t.height+e&&n.x<=t.width+e}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(const e of this.container.particles.updaters)e.reset&&e.reset(this)}}class vi{constructor(e,t){this.position=e,this.particle=t}}class yi{constructor(e,t){this.position={x:e,y:t}}}class bi extends yi{constructor(e,t,n,r){super(e,t),this.size={height:r,width:n}}contains(e){const t=this.size.width,n=this.size.height,r=this.position;return e.x>=r.x&&e.x<=r.x+t&&e.y>=r.y&&e.y<=r.y+n}intersects(e){e instanceof wi&&e.intersects(this);const t=this.size.width,n=this.size.height,r=this.position,i=e.position,a=e instanceof bi?e.size:{width:0,height:0},o=a.width,s=a.height;return i.x<r.x+t&&i.x+o>r.x&&i.y<r.y+n&&i.y+s>r.y}}class wi extends yi{constructor(e,t,n){super(e,t),this.radius=n}contains(e){return _n(e,this.position)<=this.radius}intersects(e){const t=this.position,n=e.position,r=Math.abs(n.x-t.x),i=Math.abs(n.y-t.y),a=this.radius;if(e instanceof wi){return a+e.radius>Math.sqrt(r**2+i**2)}if(e instanceof bi){const{width:t,height:n}=e.size;return Math.pow(r-t,2)+Math.pow(i-n,2)<=a**2||r<=a+t&&i<=a+n||r<=t||i<=n}return!1}}class xi{constructor(e,t){this.rectangle=e,this.capacity=t,this._subdivide=()=>{const{x:e,y:t}=this.rectangle.position,{width:n,height:r}=this.rectangle.size,{capacity:i}=this;for(let a=0;a<4;a++)this._subs.push(new xi(new bi(e+n/2*(a%2),t+r/2*(Math.round(a/2)-a%2),n/2,r/2),i));this._divided=!0},this._points=[],this._divided=!1,this._subs=[]}insert(e){return!!this.rectangle.contains(e.position)&&(this._points.length<this.capacity?(this._points.push(e),!0):(this._divided||this._subdivide(),this._subs.some((t=>t.insert(e)))))}query(e,t,n){const r=n||[];if(!e.intersects(this.rectangle))return[];for(const i of this._points)!e.contains(i.position)&&_n(e.position,i.position)>i.particle.getRadius()&&(!t||t(i.particle))||r.push(i.particle);if(this._divided)for(const i of this._subs)i.query(e,t,r);return r}queryCircle(e,t,n){return this.query(new wi(e.x,e.y,t),n)}queryRectangle(e,t,n){return this.query(new bi(e.x,e.y,t.width,t.height),n)}}const ki=e=>new bi(-e.width/4,-e.height/4,3*e.width/2,3*e.height/2);class Si{constructor(e,t){this._applyDensity=(e,t,n)=>{if(!e.number.density?.enable)return;const r=e.number,i=this._initDensityFactor(r.density),a=r.value,o=r.limit>0?r.limit:a,s=Math.min(a,o)*i+t,l=Math.min(this.count,this.filter((e=>e.group===n)).length);this.limit=r.limit*i,l<s?this.push(Math.abs(s-l),void 0,e,n):l>s&&this.removeQuantity(l-s,n)},this._initDensityFactor=e=>{const t=this._container;if(!t.canvas.element||!e.enable)return 1;const n=t.canvas.element,r=t.retina.pixelRatio;return n.width*n.height/(e.factor*r**2*e.area)},this._pushParticle=(e,t,n,r)=>{try{let i=this.pool.pop();i?i.init(this._nextId,e,t,n):i=new gi(this._engine,this._nextId,this._container,e,t,n);let a=!0;if(r&&(a=r(i)),!a)return;return this._array.push(i),this._zArray.push(i),this._nextId++,this._engine.dispatchEvent("particleAdded",{container:this._container,data:{particle:i}}),i}catch(hl){return void On().warning(`${hn} adding particle: ${hl}`)}},this._removeParticle=(e,t,n)=>{const r=this._array[e];if(!r||r.group!==t)return!1;r.destroy(n);const i=this._zArray.indexOf(r);return this._array.splice(e,1),this._zArray.splice(i,1),this.pool.push(r),this._engine.dispatchEvent("particleRemoved",{container:this._container,data:{particle:r}}),!0},this._engine=e,this._container=t,this._nextId=0,this._array=[],this._zArray=[],this.pool=[],this.limit=0,this.needsSort=!1,this.lastZIndex=0,this._interactionManager=new pi(e,t);const n=t.canvas.size;this.quadTree=new xi(ki(n),4),this.movers=this._engine.plugins.getMovers(t,!0),this.updaters=this._engine.plugins.getUpdaters(t,!0)}get count(){return this._array.length}addManualParticles(){const e=this._container,t=e.actualOptions;for(const n of t.manualParticles)this.addParticle(n.position?An(n.position,e.canvas.size):void 0,n.options)}addParticle(e,t,n,r){const i=this._container.actualOptions.particles.number.limit;if(i>0){const e=this.count+1-i;e>0&&this.removeQuantity(e)}return this._pushParticle(e,t,n,r)}clear(){this._array=[],this._zArray=[]}destroy(){this._array=[],this._zArray=[],this.movers=[],this.updaters=[]}async draw(e){const t=this._container;t.canvas.clear(),await this.update(e);for(const[,n]of t.plugins)t.canvas.drawPlugin(n,e);for(const n of this._zArray)n.draw(e)}filter(e){return this._array.filter(e)}find(e){return this._array.find(e)}handleClickMode(e){this._interactionManager.handleClickMode(e)}init(){const e=this._container,t=e.actualOptions;this.lastZIndex=0,this.needsSort=!1;let n=!1;this.updaters=this._engine.plugins.getUpdaters(e,!0),this._interactionManager.init();for(const[,r]of e.plugins)if(void 0!==r.particlesInitialization&&(n=r.particlesInitialization()),n)break;this._interactionManager.init();for(const[,r]of e.pathGenerators)r.init(e);if(this.addManualParticles(),!n){for(const e in t.particles.groups){const n=t.particles.groups[e];for(let r=this.count,i=0;i<n.number?.value&&r<t.particles.number.value;r++,i++)this.addParticle(void 0,n,e)}for(let e=this.count;e<t.particles.number.value;e++)this.addParticle()}}push(e,t,n,r){this.pushing=!0;for(let i=0;i<e;i++)this.addParticle(t?.position,n,r);this.pushing=!1}async redraw(){this.clear(),this.init(),await this.draw({value:0,factor:0})}remove(e,t,n){this.removeAt(this._array.indexOf(e),void 0,t,n)}removeAt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(e<0||e>this.count)return;let i=0;for(let a=e;i<t&&a<this.count;a++)this._removeParticle(a--,n,r)&&i++}removeQuantity(e,t){this.removeAt(0,e,t)}setDensity(){const e=this._container.actualOptions,t=e.particles.groups;for(const n in t)this._applyDensity(t[n],0,n);this._applyDensity(e.particles,e.manualParticles.length)}async update(e){const t=this._container,n=new Set;this.quadTree=new xi(ki(t.canvas.size),4);for(const[,r]of t.pathGenerators)r.update();for(const[,r]of t.plugins)r.update&&r.update(e);for(const r of this._array){const i=t.canvas.resizeFactor;i&&!r.ignoresResizeRatio&&(r.position.x*=i.width,r.position.y*=i.height,r.initialPosition.x*=i.width,r.initialPosition.y*=i.height),r.ignoresResizeRatio=!1,await this._interactionManager.reset(r);for(const[,t]of this._container.plugins){if(r.destroyed)break;t.particleUpdate&&t.particleUpdate(r,e)}for(const t of this.movers)t.isEnabled(r)&&t.move(r,e);r.destroyed?n.add(r):this.quadTree.insert(new vi(r.getPosition(),r))}if(n.size){const e=e=>!n.has(e);this._array=this.filter(e),this._zArray=this._zArray.filter(e),this.pool.push(...n)}await this._interactionManager.externalInteract(e);for(const r of this._array){for(const t of this.updaters)t.update(r,e);r.destroyed||r.spawning||await this._interactionManager.particlesInteract(r,e)}if(delete t.canvas.resizeFactor,this.needsSort){const e=this._zArray;e.sort(((e,t)=>t.position.z-e.position.z||e.id-t.id)),this.lastZIndex=e[e.length-1].position.z,this.needsSort=!1}}}class _i{constructor(e){this.container=e,this.pixelRatio=1,this.reduceFactor=1}init(){const e=this.container,t=e.actualOptions;this.pixelRatio=!t.detectRetina||jn()?1:window.devicePixelRatio,this.reduceFactor=1;const n=this.pixelRatio;if(e.canvas.element){const t=e.canvas.element;e.canvas.size.width=t.offsetWidth*n,e.canvas.size.height=t.offsetHeight*n}const r=t.particles,i=r.move;this.attractDistance=wn(i.attract.distance)*n,this.maxSpeed=wn(i.gravity.maxSpeed)*n,this.sizeAnimationSpeed=wn(r.size.animation.speed)*n}initParticle(e){const t=e.options,n=this.pixelRatio,r=t.move,i=r.distance,a=e.retina;a.attractDistance=wn(r.attract.distance)*n,a.moveDrift=wn(r.drift)*n,a.moveSpeed=wn(r.speed)*n,a.sizeAnimationSpeed=wn(t.size.animation.speed)*n;const o=a.maxDistance;o.horizontal=void 0!==i.horizontal?i.horizontal*n:void 0,o.vertical=void 0!==i.vertical?i.vertical*n:void 0,a.maxSpeed=wn(r.gravity.maxSpeed)*n}}function Ci(e){return e&&!e.destroyed}function Ei(e,t){const n=new hi(e,t);for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return di(n,...i),n}const Pi={generate:e=>e.velocity,init:()=>{},update:()=>{},reset:()=>{}};class Oi{constructor(e,t,n){this.id=t,this._intersectionManager=e=>{if(Ci(this)&&this.actualOptions.pauseOnOutsideViewport)for(const t of e)t.target===this.interactivity.element&&(t.isIntersecting?this.play:this.pause)()},this._nextFrame=async e=>{try{if(!this.smooth&&void 0!==this.lastFrameTime&&e<this.lastFrameTime+1e3/this.fpsLimit)return void this.draw(!1);this.lastFrameTime??=e;const t=function(e){return{value:e,factor:arguments.length>2&&void 0!==arguments[2]&&arguments[2]?60/(arguments.length>1&&void 0!==arguments[1]?arguments[1]:60):60*e/1e3}}(e-this.lastFrameTime,this.fpsLimit,this.smooth);if(this.addLifeTime(t.value),this.lastFrameTime=e,t.value>1e3)return void this.draw(!1);if(await this.particles.draw(t),!this.alive())return void this.destroy();this.getAnimationStatus()&&this.draw(!1)}catch(hl){On().error(`${hn} in animation loop`,hl)}},this._engine=e,this.fpsLimit=120,this.smooth=!1,this._delay=0,this._duration=0,this._lifeTime=0,this._firstStart=!0,this.started=!1,this.destroyed=!1,this._paused=!0,this.lastFrameTime=0,this.zLayers=100,this.pageHidden=!1,this._sourceOptions=n,this._initialSourceOptions=n,this.retina=new _i(this),this.canvas=new or(this),this.particles=new Si(this._engine,this),this.pathGenerators=new Map,this.interactivity={mouse:{clicking:!1,inside:!1}},this.plugins=new Map,this.drawers=new Map,this._options=Ei(this._engine,this),this.actualOptions=Ei(this._engine,this),this._eventListeners=new lr(this),"undefined"!==typeof IntersectionObserver&&IntersectionObserver&&(this._intersectionObserver=new IntersectionObserver((e=>this._intersectionManager(e)))),this._engine.dispatchEvent("containerBuilt",{container:this})}get options(){return this._options}get sourceOptions(){return this._sourceOptions}addClickHandler(e){if(!Ci(this))return;const t=this.interactivity.element;if(!t)return;const n=(t,n,r)=>{if(!Ci(this))return;const i=this.retina.pixelRatio,a={x:n.x*i,y:n.y*i},o=this.particles.quadTree.queryCircle(a,r*i);e(t,o)};let r=!1,i=!1;t.addEventListener("click",(e=>{if(!Ci(this))return;const t=e,r={x:t.offsetX||t.clientX,y:t.offsetY||t.clientY};n(e,r,1)})),t.addEventListener("touchstart",(()=>{Ci(this)&&(r=!0,i=!1)})),t.addEventListener("touchmove",(()=>{Ci(this)&&(i=!0)})),t.addEventListener("touchend",(e=>{if(Ci(this)){if(r&&!i){const t=e;let r=t.touches[t.touches.length-1];if(!r&&(r=t.changedTouches[t.changedTouches.length-1],!r))return;const i=this.canvas.element,a=i?i.getBoundingClientRect():void 0,o={x:r.clientX-(a?a.left:0),y:r.clientY-(a?a.top:0)};n(e,o,Math.max(r.radiusX,r.radiusY))}r=!1,i=!1}})),t.addEventListener("touchcancel",(()=>{Ci(this)&&(r=!1,i=!1)}))}addLifeTime(e){this._lifeTime+=e}addPath(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return!(!Ci(this)||!n&&this.pathGenerators.has(e))&&(this.pathGenerators.set(e,t??Pi),!0)}alive(){return!this._duration||this._lifeTime<=this._duration}destroy(){if(!Ci(this))return;this.stop(),this.particles.destroy(),this.canvas.destroy();for(const[,n]of this.drawers)n.destroy&&n.destroy(this);for(const n of this.drawers.keys())this.drawers.delete(n);this._engine.plugins.destroy(this),this.destroyed=!0;const e=this._engine.dom(),t=e.findIndex((e=>e===this));t>=0&&e.splice(t,1),this._engine.dispatchEvent("containerDestroyed",{container:this})}draw(e){if(!Ci(this))return;let t=e;this._drawAnimationFrame=requestAnimationFrame((async e=>{t&&(this.lastFrameTime=void 0,t=!1),await this._nextFrame(e)}))}async export(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(const[,n]of this.plugins){if(!n.export)continue;const r=await n.export(e,t);if(r.supported)return r.blob}On().error(`${hn} - Export plugin with type ${e} not found`)}getAnimationStatus(){return!this._paused&&!this.pageHidden&&Ci(this)}handleClickMode(e){if(Ci(this)){this.particles.handleClickMode(e);for(const[,t]of this.plugins)t.handleClickMode&&t.handleClickMode(e)}}async init(){if(!Ci(this))return;const e=this._engine.plugins.getSupportedShapes();for(const n of e){const e=this._engine.plugins.getShapeDrawer(n);e&&this.drawers.set(n,e)}this._options=Ei(this._engine,this,this._initialSourceOptions,this.sourceOptions),this.actualOptions=Ei(this._engine,this,this._options);const t=this._engine.plugins.getAvailablePlugins(this);for(const[n,r]of t)this.plugins.set(n,r);this.retina.init(),await this.canvas.init(),this.updateActualOptions(),this.canvas.initBackground(),this.canvas.resize(),this.zLayers=this.actualOptions.zLayers,this._duration=1e3*wn(this.actualOptions.duration),this._delay=1e3*wn(this.actualOptions.delay),this._lifeTime=0,this.fpsLimit=this.actualOptions.fpsLimit>0?this.actualOptions.fpsLimit:120,this.smooth=this.actualOptions.smooth;for(const[,n]of this.drawers)n.init&&await n.init(this);for(const[,n]of this.plugins)n.init&&await n.init();this._engine.dispatchEvent("containerInit",{container:this}),this.particles.init(),this.particles.setDensity();for(const[,n]of this.plugins)n.particlesSetup&&n.particlesSetup();this._engine.dispatchEvent("particlesSetup",{container:this})}async loadTheme(e){Ci(this)&&(this._currentTheme=e,await this.refresh())}pause(){if(Ci(this)&&(void 0!==this._drawAnimationFrame&&(cancelAnimationFrame(this._drawAnimationFrame),delete this._drawAnimationFrame),!this._paused)){for(const[,e]of this.plugins)e.pause&&e.pause();this.pageHidden||(this._paused=!0),this._engine.dispatchEvent("containerPaused",{container:this})}}play(e){if(!Ci(this))return;const t=this._paused||e;if(!this._firstStart||this.actualOptions.autoPlay){if(this._paused&&(this._paused=!1),t)for(const[,e]of this.plugins)e.play&&e.play();this._engine.dispatchEvent("containerPlay",{container:this}),this.draw(t||!1)}else this._firstStart=!1}async refresh(){if(Ci(this))return this.stop(),this.start()}async reset(){if(Ci(this))return this._initialSourceOptions=void 0,this._options=Ei(this._engine,this),this.actualOptions=Ei(this._engine,this,this._options),this.refresh()}setNoise(e,t,n){Ci(this)&&this.setPath(e,t,n)}setPath(e,t,n){if(!e||!Ci(this))return;const r={...Pi};if(Un(e))r.generate=e,t&&(r.init=t),n&&(r.update=n);else{const t=r;r.generate=e.generate||t.generate,r.init=e.init||t.init,r.update=e.update||t.update}this.addPath("default",r,!0)}async start(){Ci(this)&&!this.started&&(await this.init(),this.started=!0,await new Promise((e=>{this._delayTimeout=setTimeout((async()=>{this._eventListeners.addListeners(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.observe(this.interactivity.element);for(const[,e]of this.plugins)e.start&&await e.start();this._engine.dispatchEvent("containerStarted",{container:this}),this.play(),e()}),this._delay)})))}stop(){if(Ci(this)&&this.started){this._delayTimeout&&(clearTimeout(this._delayTimeout),delete this._delayTimeout),this._firstStart=!0,this.started=!1,this._eventListeners.removeListeners(),this.pause(),this.particles.clear(),this.canvas.stop(),this.interactivity.element instanceof HTMLElement&&this._intersectionObserver&&this._intersectionObserver.unobserve(this.interactivity.element);for(const[,e]of this.plugins)e.stop&&e.stop();for(const e of this.plugins.keys())this.plugins.delete(e);this._sourceOptions=this._options,this._engine.dispatchEvent("containerStopped",{container:this})}}updateActualOptions(){this.actualOptions.responsive=[];const e=this.actualOptions.setResponsive(this.canvas.size.width,this.retina.pixelRatio,this._options);return this.actualOptions.setTheme(this._currentTheme),this.responsiveMaxWidth!==e&&(this.responsiveMaxWidth=e,!0)}}class ji{constructor(){this._listeners=new Map}addEventListener(e,t){this.removeEventListener(e,t);let n=this._listeners.get(e);n||(n=[],this._listeners.set(e,n)),n.push(t)}dispatchEvent(e,t){const n=this._listeners.get(e);n&&n.forEach((e=>e(t)))}hasEventListener(e){return!!this._listeners.get(e)}removeAllEventListeners(e){e?this._listeners.delete(e):this._listeners=new Map}removeEventListener(e,t){const n=this._listeners.get(e);if(!n)return;const r=n.length,i=n.indexOf(t);i<0||(1===r?this._listeners.delete(e):n.splice(i,1))}}function zi(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t.get(e);return i&&!r||(i=[...n.values()].map((t=>t(e))),t.set(e,i)),i}class Ti{constructor(e){this._engine=e,this.plugins=[],this._initializers={interactors:new Map,movers:new Map,updaters:new Map},this.interactors=new Map,this.movers=new Map,this.updaters=new Map,this.presets=new Map,this.drawers=new Map,this.pathGenerators=new Map}addInteractor(e,t){this._initializers.interactors.set(e,t)}addParticleMover(e,t){this._initializers.movers.set(e,t)}addParticleUpdater(e,t){this._initializers.updaters.set(e,t)}addPathGenerator(e,t){!this.getPathGenerator(e)&&this.pathGenerators.set(e,t)}addPlugin(e){!this.getPlugin(e.id)&&this.plugins.push(e)}addPreset(e,t){(arguments.length>2&&void 0!==arguments[2]&&arguments[2]||!this.getPreset(e))&&this.presets.set(e,t)}addShapeDrawer(e,t){In(e,(e=>{!this.getShapeDrawer(e)&&this.drawers.set(e,t)}))}destroy(e){this.updaters.delete(e),this.movers.delete(e),this.interactors.delete(e)}getAvailablePlugins(e){const t=new Map;for(const n of this.plugins)n.needsPlugin(e.actualOptions)&&t.set(n.id,n.getPlugin(e));return t}getInteractors(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return zi(e,this.interactors,this._initializers.interactors,t)}getMovers(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return zi(e,this.movers,this._initializers.movers,t)}getPathGenerator(e){return this.pathGenerators.get(e)}getPlugin(e){return this.plugins.find((t=>t.id===e))}getPreset(e){return this.presets.get(e)}getShapeDrawer(e){return this.drawers.get(e)}getSupportedShapes(){return this.drawers.keys()}getUpdaters(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return zi(e,this.updaters,this._initializers.updaters,t)}loadOptions(e,t){for(const n of this.plugins)n.loadOptions(e,t)}loadParticlesOptions(e,t){const n=this.updaters.get(e);if(n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];for(const e of n)e.loadOptions&&e.loadOptions(t,...i)}}}class Ni{constructor(){this._configs=new Map,this._domArray=[],this._eventDispatcher=new ji,this._initialized=!1,this.plugins=new Ti(this)}get configs(){const e={};for(const[t,n]of this._configs)e[t]=n;return e}get version(){return"2.12.0"}addConfig(e,t){Fn(e)?t&&(t.name=e,this._configs.set(e,t)):this._configs.set(e.name??"default",e)}addEventListener(e,t){this._eventDispatcher.addEventListener(e,t)}async addInteractor(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.plugins.addInteractor(e,t),await this.refresh(n)}async addMover(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.plugins.addParticleMover(e,t),await this.refresh(n)}async addParticleUpdater(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.plugins.addParticleUpdater(e,t),await this.refresh(n)}async addPathGenerator(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];this.plugins.addPathGenerator(e,t),await this.refresh(n)}async addPlugin(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.plugins.addPlugin(e),await this.refresh(t)}async addPreset(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.plugins.addPreset(e,t,n),await this.refresh(r)}async addShape(e,t,n,r,i){let a,o,s,l,c=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];Dn(n)?(c=n,o=void 0):o=n,Dn(r)?(c=r,s=void 0):s=r,Dn(i)?(c=i,l=void 0):l=i,a=Un(t)?{afterEffect:s,destroy:l,draw:t,init:o}:t,this.plugins.addShapeDrawer(e,a),await this.refresh(c)}dispatchEvent(e,t){this._eventDispatcher.dispatchEvent(e,t)}dom(){return this._domArray}domItem(e){const t=this.dom(),n=t[e];if(n&&!n.destroyed)return n;t.splice(e,1)}init(){this._initialized||(this._initialized=!0)}async load(e,t){return this.loadFromArray(e,t)}async loadFromArray(e,t,n){let r;return!function(e){return!(!(t=e).id&&!t.element&&!t.url&&!t.options);var t}(e)?(r={},Fn(e)?r.id=e:r.options=e,Vn(t)?r.index=t:r.options=t??r.options,r.index=n??r.index):r=e,this._loadParams(r)}async loadJSON(e,t,n){let r,i;return Vn(t)||void 0===t?r=e:(i=e,r=t),this._loadParams({id:i,url:r,index:n})}async refresh(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this.dom().forEach((e=>e.refresh()))}removeEventListener(e,t){this._eventDispatcher.removeEventListener(e,t)}async set(e,t,n,r){const i={index:r};return Fn(e)?i.id=e:i.element=e,t instanceof HTMLElement?i.element=t:i.options=t,Vn(n)?i.index=n:i.options=n??i.options,this._loadParams(i)}async setJSON(e,t,n,r){const i={};return e instanceof HTMLElement?(i.element=e,i.url=t,i.index=n):(i.id=e,i.element=t,i.url=n,i.index=r),this._loadParams(i)}setOnClickHandler(e){const t=this.dom();if(!t.length)throw new Error(`${hn} can only set click handlers after calling tsParticles.load()`);for(const n of t)n.addClickHandler(e)}async _loadParams(e){const t=e.id??`tsparticles${Math.floor(1e4*vn())}`,{index:n,url:r}=e,i=r?await async function(e){const t=Mn(e.url,e.index);if(!t)return e.fallback;const n=await fetch(t);return n.ok?n.json():(On().error(`${hn} ${n.status} while retrieving config file`),e.fallback)}({fallback:e.options,url:r,index:n}):e.options;let a=e.element??document.getElementById(t);a||(a=document.createElement("div"),a.id=t,document.body.append(a));const o=Mn(i,n),s=this.dom(),l=s.findIndex((e=>e.id===t));if(l>=0){const e=this.domItem(l);e&&!e.destroyed&&(e.destroy(),s.splice(l,1))}let c;if("canvas"===a.tagName.toLowerCase())c=a,c.dataset[cn]="false";else{const e=a.getElementsByTagName("canvas");e.length?(c=e[0],c.dataset[cn]="false"):(c=document.createElement("canvas"),c.dataset[cn]="true",a.appendChild(c))}c.style.width||(c.style.width="100%"),c.style.height||(c.style.height="100%");const u=new Oi(this,t,o);return l>=0?s.splice(l,0,u):s.push(u),u.canvas.loadCanvas(c),await u.start(),u}}class Ri{constructor(){this.key="hsl",this.stringPrefix="hsl"}handleColor(e){const t=e.value.hsl??e.value;if(void 0!==t.h&&void 0!==t.s&&void 0!==t.l)return Zn(t)}handleRangeColor(e){const t=e.value.hsl??e.value;if(void 0!==t.h&&void 0!==t.l)return Zn({h:wn(t.h),l:wn(t.l),s:wn(t.s)})}parseString(e){if(!e.startsWith("hsl"))return;const t=/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e);return t?function(e){const t=Zn(e);return{a:e.a,b:t.b,g:t.g,r:t.r}}({a:t.length>4?En(t[5]):1,h:parseInt(t[1],10),l:parseInt(t[3],10),s:parseInt(t[2],10)}):void 0}}class Ii{constructor(){this.key="rgb",this.stringPrefix="rgb"}handleColor(e){const t=e.value.rgb??e.value;if(void 0!==t.r)return t}handleRangeColor(e){const t=e.value.rgb??e.value;if(void 0!==t.r)return{r:wn(t.r),g:wn(t.g),b:wn(t.b)}}parseString(e){if(!e.startsWith(this.stringPrefix))return;const t=/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(e);return t?{a:t.length>4?En(t[5]):1,b:parseInt(t[3],10),g:parseInt(t[2],10),r:parseInt(t[1],10)}:void 0}}const Mi=function(){const e=new Ii,t=new Ri;Yn(e),Yn(t);const n=new Ni;return n.init(),n}();jn()||(window.tsParticles=Mi);var Li=n(809),Ai=n.n(Li);const Di="tsparticles";class Fi extends e.Component{constructor(e){super(e),this.state={init:!1,library:void 0}}destroy(){this.state.library&&(this.state.library.destroy(),this.setState({library:void 0}))}shouldComponentUpdate(e){return!Ai()(e,this.props)}componentDidUpdate(){this.refresh()}forceUpdate(){this.refresh().then((()=>{super.forceUpdate()}))}componentDidMount(){(async()=>{this.props.init&&await this.props.init(Mi),this.setState({init:!0},(async()=>{await this.loadParticles()}))})()}componentWillUnmount(){this.destroy()}render(){const{width:t,height:n,className:r,canvasClassName:i,id:a}=this.props;return e.createElement("div",{className:r,id:a},e.createElement("canvas",{className:i,style:Object.assign(Object.assign({},this.props.style),{width:t,height:n})}))}async refresh(){this.destroy(),await this.loadParticles()}async loadParticles(){var e,t,n;if(!this.state.init)return;const r=null!==(t=null!==(e=this.props.id)&&void 0!==e?e:Fi.defaultProps.id)&&void 0!==t?t:Di,i=this.props.url?await Mi.loadJSON(r,this.props.url):await Mi.load(r,null!==(n=this.props.params)&&void 0!==n?n:this.props.options);await(async e=>{this.props.container&&(this.props.container.current=e),this.setState({library:e}),this.props.loaded&&await this.props.loaded(e)})(i)}}Fi.defaultProps={width:"100%",height:"100%",options:{},style:{},url:void 0,id:Di};const Vi=Fi,Ui=Le.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px){
    padding: 0 4rem;
  }

  @media(max-width: 360px){
    padding: 0 2rem;
  }
`,$i=Le.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
      .ab{
    margin-top: 2rem;
    color: var(--green);
  }
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`;var Hi=n(341),Wi=n.n(Hi);const Bi=n.p+"static/media/illustration.cf4b7a67f23b684549c4f797c62b527a.svg",Yi=n.p+"static/media/Hello.d93720933c608f6178fb.gif";var Ki={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xi=e.createContext&&e.createContext(Ki),qi=["attr","size","title"];function Qi(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Zi(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ji(Object(n),!0).forEach((function(t){ea(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ea(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ta(t){return t&&t.map(((t,n)=>e.createElement(t.tag,Zi({key:n},t.attr),ta(t.child))))}function na(t){return n=>e.createElement(ra,Gi({attr:Zi({},t.attr)},n),ta(t.child))}function ra(t){var n=n=>{var r,{attr:i,size:a,title:o}=t,s=Qi(t,qi),l=a||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",Gi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:Zi(Zi({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==Xi?e.createElement(Xi.Consumer,null,(e=>n(e))):n(Ki)}function ia(e){return na({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6.5 15h2.5c0.827 0 1.5-0.673 1.5-1.5 0-0.267-0.070-0.518-0.193-0.736 0.417-0.267 0.693-0.734 0.693-1.264 0-0.384-0.145-0.734-0.383-1 0.238-0.266 0.383-0.616 0.383-1 0-0.175-0.030-0.344-0.086-0.5h3.586c0.827 0 1.5-0.673 1.5-1.5s-0.673-1.5-1.5-1.5h-6.167l1.466-2.75c0.131-0.227 0.201-0.486 0.201-0.75 0-0.827-0.673-1.5-1.5-1.5-0.412 0-0.796 0.164-1.082 0.461-0.004 0.004-0.007 0.008-0.011 0.012l-3.407 3.737v-0.71c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-0.691l2.276 1.138c0.069 0.035 0.146 0.053 0.224 0.053zM2.5 14c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5 0.5 0.224 0.5 0.5-0.224 0.5-0.5 0.5zM6.618 14l-2.618-1.309v-5.997l4.143-4.544c0.095-0.097 0.221-0.15 0.357-0.15 0.276 0 0.5 0.224 0.5 0.5 0 0.085-0.020 0.166-0.061 0.239-0.005 0.008-0.010 0.017-0.014 0.025l-1.866 3.5c-0.083 0.155-0.078 0.342 0.013 0.492s0.253 0.243 0.429 0.243h7c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.382z"},child:[]}]})(e)}function aa(){return(0,We.jsxs)($i,{id:"home",children:[(0,We.jsxs)("div",{className:"hero-text",children:[(0,We.jsx)(Wi(),{animateIn:"fadeInUp",children:(0,We.jsxs)("p",{children:["Hello ",(0,We.jsx)("img",{src:Yi,alt:"Hello",width:"20px"}),", I'm"]})}),(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:200,children:(0,We.jsx)("h1",{children:"Suhail Ahmad"})}),(0,We.jsx)("br",{}),(0,We.jsxs)(Wi(),{animateIn:"fadeInUp",delay:600,children:[(0,We.jsx)("b",{className:"purple ab",children:"My field of Interest's are:\xa0"}),(0,We.jsx)("br",{}),(0,We.jsx)("br",{}),(0,We.jsx)("ul",{children:(0,We.jsxs)("li",{className:"about-activity",children:[(0,We.jsx)(ia,{}),"Full stack development",(0,We.jsx)("br",{}),(0,We.jsx)(ia,{}),"DevOps",(0,We.jsx)("br",{}),(0,We.jsx)(ia,{}),"Problem Solving",(0,We.jsx)("br",{}),(0,We.jsx)(ia,{}),"Android Development",(0,We.jsx)("br",{}),(0,We.jsx)(ia,{}),"SQL and NoSQL databases",(0,We.jsx)("br",{}),(0,We.jsx)(ia,{}),"Data analysis"]})})]}),(0,We.jsx)("br",{}),(0,We.jsx)("br",{}),(0,We.jsx)("br",{}),(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:800,children:(0,We.jsx)(Vt,{children:(0,We.jsx)(an,{smooth:!0,to:"#contact",className:"button",children:"Contact"})})}),(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:1e3,children:(0,We.jsxs)("div",{className:"social-media",children:[(0,We.jsx)("a",{href:"https://www.linkedin.com/in/suhailahmad786/",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Fe,alt:"LinkedIn"})}),(0,We.jsx)("a",{href:"https://github.com/suhail22a/",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ve,alt:"GitHub"})}),(0,We.jsx)("a",{href:"https://api.whatsapp.com/send/?phone=%2B918707219308&text=Hello+Suhail",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ue,alt:"WhatsApp"})}),(0,We.jsx)("a",{href:"https://t.me/tech_sam_223",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:$e,alt:"Telegram"})})]})})]}),(0,We.jsx)("div",{className:"hero-image",children:(0,We.jsx)(Wi(),{animateIn:"fadeInRight",delay:1e3,children:(0,We.jsx)("img",{src:Bi,alt:"Illustration"})})})]})}const oa=Le.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  .ab{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`,sa=n.p+"static/media/SuhailAhmad.048817b3314c0d4ce829.png";const la=n.p+"static/media/wordpress.3bcdd91b50514041e84ea420c14b4812.svg";const ca=n.p+"static/media/html-icon.ebfc51e406097a90691ab82f1aa72db3.svg";const ua=n.p+"static/media/css-icon.60a6c50d5a470990f63ee17a3bbd9178.svg";const da=n.p+"static/media/js-icon.ffcf56dc5498f7bbbec802191c740e5f.svg";const fa=n.p+"static/media/node-icon.3dc364b8e9beb3561620274aea4f0844.svg";const ha=n.p+"static/media/typescript-icon.17d5e87eac2c9d1dc722ce1e0b60d5df.svg";const pa=n.p+"static/media/vue-icon.c286d2da48ffbf281f407b0c4c94271f.svg";const ma=n.p+"static/media/bootstrap-icon.be374cc9bd654654918df2362bcfb240.svg";var ga=n(139),va=n.n(ga);const ya=["xxl","xl","lg","md","sm","xs"],ba="xs",wa=e.createContext({prefixes:{},breakpoints:ya,minBreakpoint:ba}),{Consumer:xa,Provider:ka}=wa;function Sa(t,n){const{prefixes:r}=(0,e.useContext)(wa);return t||r[n]||n}const _a=e.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...a}=e;return r=Sa(r,"card-body"),(0,We.jsx)(i,{ref:t,className:va()(n,r),...a})}));_a.displayName="CardBody";const Ca=_a,Ea=e.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...a}=e;return r=Sa(r,"card-footer"),(0,We.jsx)(i,{ref:t,className:va()(n,r),...a})}));Ea.displayName="CardFooter";const Pa=Ea,Oa=e.createContext(null);Oa.displayName="CardHeaderContext";const ja=Oa,za=e.forwardRef(((t,n)=>{let{bsPrefix:r,className:i,as:a="div",...o}=t;const s=Sa(r,"card-header"),l=(0,e.useMemo)((()=>({cardHeaderBsPrefix:s})),[s]);return(0,We.jsx)(ja.Provider,{value:l,children:(0,We.jsx)(a,{ref:n,...o,className:va()(i,s)})})}));za.displayName="CardHeader";const Ta=za,Na=e.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,variant:i,as:a="img",...o}=e;const s=Sa(n,"card-img");return(0,We.jsx)(a,{ref:t,className:va()(i?`${s}-${i}`:s,r),...o})}));Na.displayName="CardImg";const Ra=Na,Ia=e.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="div",...a}=e;return r=Sa(r,"card-img-overlay"),(0,We.jsx)(i,{ref:t,className:va()(n,r),...a})}));Ia.displayName="CardImgOverlay";const Ma=Ia,La=e.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="a",...a}=e;return r=Sa(r,"card-link"),(0,We.jsx)(i,{ref:t,className:va()(n,r),...a})}));La.displayName="CardLink";const Aa=La,Da=t=>e.forwardRef(((e,n)=>(0,We.jsx)("div",{...e,ref:n,className:va()(e.className,t)}))),Fa=Da("h6"),Va=e.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i=Fa,...a}=e;return r=Sa(r,"card-subtitle"),(0,We.jsx)(i,{ref:t,className:va()(n,r),...a})}));Va.displayName="CardSubtitle";const Ua=Va,$a=e.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i="p",...a}=e;return r=Sa(r,"card-text"),(0,We.jsx)(i,{ref:t,className:va()(n,r),...a})}));$a.displayName="CardText";const Ha=$a,Wa=Da("h5"),Ba=e.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:i=Wa,...a}=e;return r=Sa(r,"card-title"),(0,We.jsx)(i,{ref:t,className:va()(n,r),...a})}));Ba.displayName="CardTitle";const Ya=Ba,Ka=e.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,bg:i,text:a,border:o,body:s=!1,children:l,as:c="div",...u}=e;const d=Sa(n,"card");return(0,We.jsx)(c,{ref:t,...u,className:va()(r,d,i&&`bg-${i}`,a&&`text-${a}`,o&&`border-${o}`),children:s?(0,We.jsx)(Ca,{children:l}):l})}));Ka.displayName="Card";const Xa=Object.assign(Ka,{Img:Ra,Title:Ya,Subtitle:Ua,Body:Ca,Link:Aa,Text:Ha,Header:Ta,Footer:Pa,ImgOverlay:Ma});const qa=function(){return(0,We.jsx)(Xa,{className:"quote-card-view",children:(0,We.jsx)(Xa.Body,{children:(0,We.jsxs)("blockquote",{className:"blockquote mb-0",children:[(0,We.jsxs)("p",{style:{textAlign:"justify"},children:["Beyond my technical acumen ,my arsenal includes a comprehensive command of ",(0,We.jsx)("strong",{children:" Digital Marketing  "}),"Strategies, propelling buisnesses to new heights.",(0,We.jsx)("br",{}),(0,We.jsx)("br",{}),"Some other activities that I love to do!"]}),(0,We.jsxs)("ul",{children:[(0,We.jsxs)("li",{className:"about-activity",children:[(0,We.jsx)(ia,{})," Digital Marketing"]}),(0,We.jsxs)("li",{className:"about-activity",children:[(0,We.jsx)(ia,{})," Writting Tech Blogs"]}),(0,We.jsxs)("li",{className:"about-activity",children:[(0,We.jsx)(ia,{})," Problem Solving"]})]})]})})})};function Qa(){return(0,We.jsxs)(oa,{id:"about",children:[(0,We.jsxs)("div",{className:"about-text",children:[(0,We.jsx)(Wi(),{animateIn:"fadeInLeft",children:(0,We.jsx)("h2",{children:"About me"})}),(0,We.jsx)(Wi(),{animateIn:"fadeInLeft",delay:100,children:(0,We.jsxs)("p",{children:["Hi there!",(0,We.jsx)("span",{className:"wave",role:"img","aria-labelledby":"wave",children:"\ud83d\udc4b\ud83c\udffb"})," I'm Suhail Ahmad."]})}),(0,We.jsx)(Wi(),{animateIn:"fadeInLeft",delay:200,style:{marginTop:"2rem",marginBottom:"2rem"},children:(0,We.jsx)("p",{children:"I am a final year B.Tech Student skilled in MERN Development, Version Control, AWS Cloud, Java, and SQL."})}),(0,We.jsx)(Wi(),{animateIn:"fadeInLeft",delay:300,style:{marginTop:"2rem",marginBottom:"2rem"},children:(0,We.jsx)("p",{children:"With a deep understanding of modern frameworks and tools, I excel in building responsive user interfaces, integrating APIs, managing databases, and deploying scalable applications."})}),(0,We.jsx)(Wi(),{animateIn:"fadeInLeft",delay:400,children:(0,We.jsx)("p",{children:"This portfolio reflects my journey, skills, and commitment to continuous learning. Whether you're here to explore my work or collaborate, I invite you to dive in and connect with me!"})}),(0,We.jsxs)(Wi(),{animateIn:"fadeInLeft",delay:500,children:[(0,We.jsxs)("h1",{style:{fontSize:"2.1em",paddingBottom:"20px"},children:[(0,We.jsx)("br",{}),"My Area of ",(0,We.jsx)("strong",{children:"Interest"})]}),(0,We.jsx)(qa,{})]}),(0,We.jsxs)(Wi(),{animateIn:"fadeInLeft",delay:600,children:[(0,We.jsx)("br",{}),(0,We.jsx)("h3",{children:"Here are my main skills:"})]}),(0,We.jsxs)("div",{className:"hard-skills",children:[(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:100,children:(0,We.jsx)("img",{src:la,alt:"WordPress"})})}),(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:130,children:(0,We.jsx)("img",{src:De,alt:"React"})})}),(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:140,children:(0,We.jsx)("img",{src:ha,alt:"TypeScript"})})}),(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:150,children:(0,We.jsx)("img",{src:pa,alt:"Vue"})})}),(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:160,children:(0,We.jsx)("img",{src:fa,alt:"Node"})})}),(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:170,children:(0,We.jsx)("img",{src:ca,alt:"HTML"})})}),(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:180,children:(0,We.jsx)("img",{src:ua,alt:"CSS"})})}),(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:190,children:(0,We.jsx)("img",{src:ma,alt:"Bootstrap"})})}),(0,We.jsx)("div",{className:"hability",children:(0,We.jsx)(Wi(),{animateIn:"fadeInUp",delay:190,children:(0,We.jsx)("img",{src:da,alt:"JavaScript"})})})]})]}),(0,We.jsx)("div",{className:"about-image",children:(0,We.jsx)(Wi(),{animateIn:"fadeInRight",delay:200,children:(0,We.jsx)("img",{src:sa,alt:"Suhail Ahmad",style:{width:"400px",height:"400px",borderRadius:"50%",objectFit:"cover"}})})})]})}const Ga=Le.section`
  margin: 3rem auto;
  padding: 2rem;
  width: 90%;
  max-width: 650px;
  background: linear-gradient(145deg, #f7f7f7, #ffffff);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;

  header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: #333;
      position: relative;
      animation: slideIn 0.8s ease-in-out;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background: #ff4757;
        border-radius: 5px;
      }
    }

    p {
      font-size: 1.2rem;
      color: #666;
      margin-top: 1rem;
    }
  }

  .contacts {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 1rem;

    .contact-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #ff6b81, #ff4757);
      padding: 1rem;
      border-radius: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.3s ease;
      overflow: hidden;
      position: relative;
      z-index: 1;

      .contact-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
      }

      .contact-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        font-weight: bold;
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }

      .contact-icon {
        width: 35px;
        height: 35px;
        transition: transform 0.3s ease;
      }

      .contact-text {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      &:hover .contact-icon {
        transform: scale(1.2);
      }

      &:hover .contact-text {
        transform: scale(1.1);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .form-group {
      display: flex;
      flex-direction: column;

      label {
        font-size: 1rem;
        color: #333;
        margin-bottom: 0.5rem;
      }

      input,
      textarea {
        padding: 0.8rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        transition: box-shadow 0.3s ease, border-color 0.3s ease;

        &:focus {
          border-color: #ff4757;
          box-shadow: 0 0 10px rgba(255, 71, 87, 0.5);
          outline: none;
        }
      }

      textarea {
        min-height: 100px;
      }
    }

    button {
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      color: #fff;
      background: #ff4757;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #ff6b81;
      }
    }

    .form-status {
      text-align: center;
      margin-top: 1rem;
      font-size: 1rem;
      color: #28a745;
    }
  }

  .pop-up-message {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    animation: slideInPopUp 0.5s forwards;
    z-index: 9999;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideInPopUp {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;const Ja=n.p+"static/media/email-icon.a83578f914460e952501546655b76165.svg";const Za=n.p+"static/media/phone-icon.91617f27ac814ef5f29b533ab3d256ec.svg";function eo(){const t="tech.suhail22@gmail.com",n="8707219308",[r,i]=(0,e.useState)({name:"",email:"",message:""}),[a,o]=(0,e.useState)(""),[s,l]=(0,e.useState)(!1),c=e=>{i({...r,[e.target.name]:e.target.value})};return(0,We.jsxs)(Ga,{id:"contact",children:[(0,We.jsxs)("header",{children:[(0,We.jsx)("h2",{children:"Contact"}),(0,We.jsx)("p",{children:"Ready to get started on your project?"}),(0,We.jsx)("p",{children:"Contact me now for a Free consultation."})]}),(0,We.jsxs)("div",{className:"contacts",children:[(0,We.jsx)("div",{className:"contact-item",children:(0,We.jsx)("a",{href:`mailto:${t}`,className:"contact-link",children:(0,We.jsxs)("div",{className:"contact-content",children:[(0,We.jsx)("img",{src:Ja,alt:"Email",className:"contact-icon"}),(0,We.jsx)("span",{className:"contact-text",children:t})]})})}),(0,We.jsx)("div",{className:"contact-item",children:(0,We.jsx)("a",{href:`tel:${n}`,className:"contact-link",children:(0,We.jsxs)("div",{className:"contact-content",children:[(0,We.jsx)("img",{src:Za,alt:"Phone",className:"contact-icon"}),(0,We.jsx)("span",{className:"contact-text",children:n})]})})})]}),(0,We.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),r.name&&r.email&&r.message)try{console.log("Form submitted:",r),o("Message sent successfully!"),i({name:"",email:"",message:""}),l(!0),setTimeout((()=>l(!1)),3e3)}catch(t){o("An error occurred. Please try again.")}else o("Please fill out all fields.")},className:"contact-form",children:[(0,We.jsxs)("div",{className:"form-group",children:[(0,We.jsx)("label",{htmlFor:"name",children:"Name:"}),(0,We.jsx)("input",{type:"text",id:"name",name:"name",value:r.name,onChange:c,required:!0})]}),(0,We.jsxs)("div",{className:"form-group",children:[(0,We.jsx)("label",{htmlFor:"email",children:"Email:"}),(0,We.jsx)("input",{type:"email",id:"email",name:"email",value:r.email,onChange:c,required:!0})]}),(0,We.jsxs)("div",{className:"form-group",children:[(0,We.jsx)("label",{htmlFor:"message",children:"Message:"}),(0,We.jsx)("textarea",{id:"message",name:"message",value:r.message,onChange:c,required:!0})]}),(0,We.jsx)("button",{type:"submit",children:"Send"})]}),a&&(0,We.jsx)("p",{className:"form-status",children:a}),s&&(0,We.jsx)("div",{className:"pop-up-message",children:(0,We.jsx)("p",{children:"Message Sent Successfully!"})})]})}const to=Le.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`;const no=n.p+"static/media/external-link.74ce2401d684101cc83125c6dac8ce9c.svg";var ro=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(hl){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),io=Math.abs,ao=String.fromCharCode,oo=Object.assign;function so(e){return e.trim()}function lo(e,t,n){return e.replace(t,n)}function co(e,t){return e.indexOf(t)}function uo(e,t){return 0|e.charCodeAt(t)}function fo(e,t,n){return e.slice(t,n)}function ho(e){return e.length}function po(e){return e.length}function mo(e,t){return t.push(e),e}var go=1,vo=1,yo=0,bo=0,wo=0,xo="";function ko(e,t,n,r,i,a,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:go,column:vo,length:o,return:""}}function So(e,t){return oo(ko("",null,null,"",null,null,0),e,{length:-e.length},t)}function _o(){return wo=bo>0?uo(xo,--bo):0,vo--,10===wo&&(vo=1,go--),wo}function Co(){return wo=bo<yo?uo(xo,bo++):0,vo++,10===wo&&(vo=1,go++),wo}function Eo(){return uo(xo,bo)}function Po(){return bo}function Oo(e,t){return fo(xo,e,t)}function jo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zo(e){return go=vo=1,yo=ho(xo=e),bo=0,[]}function To(e){return xo="",e}function No(e){return so(Oo(bo-1,Mo(91===e?e+2:40===e?e+1:e)))}function Ro(e){for(;(wo=Eo())&&wo<33;)Co();return jo(e)>2||jo(wo)>3?"":" "}function Io(e,t){for(;--t&&Co()&&!(wo<48||wo>102||wo>57&&wo<65||wo>70&&wo<97););return Oo(e,Po()+(t<6&&32==Eo()&&32==Co()))}function Mo(e){for(;Co();)switch(wo){case e:return bo;case 34:case 39:34!==e&&39!==e&&Mo(wo);break;case 40:41===e&&Mo(e);break;case 92:Co()}return bo}function Lo(e,t){for(;Co()&&e+wo!==57&&(e+wo!==84||47!==Eo()););return"/*"+Oo(t,bo-1)+"*"+ao(47===e?e:Co())}function Ao(e){for(;!jo(Eo());)Co();return Oo(e,bo)}var Do="-ms-",Fo="-moz-",Vo="-webkit-",Uo="comm",$o="rule",Ho="decl",Wo="@keyframes";function Bo(e,t){for(var n="",r=po(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function Yo(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ho:return e.return=e.return||e.value;case Uo:return"";case Wo:return e.return=e.value+"{"+Bo(e.children,r)+"}";case $o:e.value=e.props.join(",")}return ho(n=Bo(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ko(e){return To(Xo("",null,null,null,[""],e=zo(e),0,[0],e))}function Xo(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,f=0,h=0,p=0,m=1,g=1,v=1,y=0,b="",w=i,x=a,k=r,S=b;g;)switch(p=y,y=Co()){case 40:if(108!=p&&58==uo(S,d-1)){-1!=co(S+=lo(No(y),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:S+=No(y);break;case 9:case 10:case 13:case 32:S+=Ro(p);break;case 92:S+=Io(Po()-1,7);continue;case 47:switch(Eo()){case 42:case 47:mo(Qo(Lo(Co(),Po()),t,n),l);break;default:S+="/"}break;case 123*m:s[c++]=ho(S)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(S=lo(S,/\f/g,"")),h>0&&ho(S)-d&&mo(h>32?Go(S+";",r,n,d-1):Go(lo(S," ","")+";",r,n,d-2),l);break;case 59:S+=";";default:if(mo(k=qo(S,t,n,c,u,i,s,b,w=[],x=[],d),a),123===y)if(0===u)Xo(S,t,k,k,w,a,d,s,x);else switch(99===f&&110===uo(S,3)?100:f){case 100:case 108:case 109:case 115:Xo(e,k,k,r&&mo(qo(e,k,k,0,0,i,s,b,i,w=[],d),x),i,x,d,s,r?w:x);break;default:Xo(S,k,k,k,[""],x,0,s,x)}}c=u=h=0,m=v=1,b=S="",d=o;break;case 58:d=1+ho(S),h=p;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==_o())continue;switch(S+=ao(y),y*m){case 38:v=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(ho(S)-1)*v,v=1;break;case 64:45===Eo()&&(S+=No(Co())),f=Eo(),u=d=ho(b=S+=Ao(Po())),y++;break;case 45:45===p&&2==ho(S)&&(m=0)}}return a}function qo(e,t,n,r,i,a,o,s,l,c,u){for(var d=i-1,f=0===i?a:[""],h=po(f),p=0,m=0,g=0;p<r;++p)for(var v=0,y=fo(e,d+1,d=io(m=o[p])),b=e;v<h;++v)(b=so(m>0?f[v]+" "+y:lo(y,/&\f/g,f[v])))&&(l[g++]=b);return ko(e,t,n,0===i?$o:s,l,c,u)}function Qo(e,t,n){return ko(e,t,n,Uo,ao(wo),fo(e,2,-2),0)}function Go(e,t,n,r){return ko(e,t,n,Ho,fo(e,0,r),fo(e,r+1,-1),r)}var Jo=function(e,t,n){for(var r=0,i=0;r=i,i=Eo(),38===r&&12===i&&(t[n]=1),!jo(i);)Co();return Oo(e,bo)},Zo=function(e,t){return To(function(e,t){var n=-1,r=44;do{switch(jo(r)){case 0:38===r&&12===Eo()&&(t[n]=1),e[n]+=Jo(bo-1,t,n);break;case 2:e[n]+=No(r);break;case 4:if(44===r){e[++n]=58===Eo()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=ao(r)}}while(r=Co());return e}(zo(e),t))},es=new WeakMap,ts=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||es.get(n))&&!r){es.set(e,!0);for(var i=[],a=Zo(t,i),o=n.props,s=0,l=0;s<a.length;s++)for(var c=0;c<o.length;c++,l++)e.props[l]=i[s]?a[s].replace(/&\f/g,o[c]):o[c]+" "+a[s]}}},ns=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function rs(e,t){switch(function(e,t){return 45^uo(e,0)?(((t<<2^uo(e,0))<<2^uo(e,1))<<2^uo(e,2))<<2^uo(e,3):0}(e,t)){case 5103:return Vo+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Vo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Vo+e+Fo+e+Do+e+e;case 6828:case 4268:return Vo+e+Do+e+e;case 6165:return Vo+e+Do+"flex-"+e+e;case 5187:return Vo+e+lo(e,/(\w+).+(:[^]+)/,Vo+"box-$1$2"+Do+"flex-$1$2")+e;case 5443:return Vo+e+Do+"flex-item-"+lo(e,/flex-|-self/,"")+e;case 4675:return Vo+e+Do+"flex-line-pack"+lo(e,/align-content|flex-|-self/,"")+e;case 5548:return Vo+e+Do+lo(e,"shrink","negative")+e;case 5292:return Vo+e+Do+lo(e,"basis","preferred-size")+e;case 6060:return Vo+"box-"+lo(e,"-grow","")+Vo+e+Do+lo(e,"grow","positive")+e;case 4554:return Vo+lo(e,/([^-])(transform)/g,"$1"+Vo+"$2")+e;case 6187:return lo(lo(lo(e,/(zoom-|grab)/,Vo+"$1"),/(image-set)/,Vo+"$1"),e,"")+e;case 5495:case 3959:return lo(e,/(image-set\([^]*)/,Vo+"$1$`$1");case 4968:return lo(lo(e,/(.+:)(flex-)?(.*)/,Vo+"box-pack:$3"+Do+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Vo+e+e;case 4095:case 3583:case 4068:case 2532:return lo(e,/(.+)-inline(.+)/,Vo+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ho(e)-1-t>6)switch(uo(e,t+1)){case 109:if(45!==uo(e,t+4))break;case 102:return lo(e,/(.+:)(.+)-([^]+)/,"$1"+Vo+"$2-$3$1"+Fo+(108==uo(e,t+3)?"$3":"$2-$3"))+e;case 115:return~co(e,"stretch")?rs(lo(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==uo(e,t+1))break;case 6444:switch(uo(e,ho(e)-3-(~co(e,"!important")&&10))){case 107:return lo(e,":",":"+Vo)+e;case 101:return lo(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Vo+(45===uo(e,14)?"inline-":"")+"box$3$1"+Vo+"$2$3$1"+Do+"$2box$3")+e}break;case 5936:switch(uo(e,t+11)){case 114:return Vo+e+Do+lo(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Vo+e+Do+lo(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Vo+e+Do+lo(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Vo+e+Do+e+e}return e}var is=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ho:e.return=rs(e.value,e.length);break;case Wo:return Bo([So(e,{value:lo(e.value,"@","@"+Vo)})],r);case $o:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Bo([So(e,{props:[lo(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return Bo([So(e,{props:[lo(t,/:(plac\w+)/,":"+Vo+"input-$1")]}),So(e,{props:[lo(t,/:(plac\w+)/,":-moz-$1")]}),So(e,{props:[lo(t,/:(plac\w+)/,Do+"input-$1")]})],r)}return""}))}}],as=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,i,a=e.stylisPlugins||is,o={},s=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;s.push(e)}));var l,c,u=[Yo,(c=function(e){l.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],d=function(e){var t=po(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}([ts,ns].concat(a,u));i=function(e,t,n,r){l=n,Bo(Ko(e?e+"{"+t.styles+"}":t.styles),d),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new ro({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return f.sheet.hydrate(s),f};function os(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")})),r}var ss=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},ls=function(e,t,n){ss(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+r:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}};var cs={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},us=/[A-Z]|^ms/g,ds=/_EMO_([^_]+?)_([^]*?)_EMO_/g,fs=function(e){return 45===e.charCodeAt(1)},hs=function(e){return null!=e&&"boolean"!==typeof e},ps=u((function(e){return fs(e)?e:e.replace(us,"-$&").toLowerCase()})),ms=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(ds,(function(e,t,n){return vs={name:t,styles:n,next:vs},t}))}return 1===cs[e]||fs(e)||"number"!==typeof t||0===t?t:t+"px"};function gs(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var i=n;if(1===i.anim)return vs={name:i.name,styles:i.styles,next:vs},i.name;var a=n;if(void 0!==a.styles){var o=a.next;if(void 0!==o)for(;void 0!==o;)vs={name:o.name,styles:o.styles,next:vs},o=o.next;return a.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=gs(e,t,n[i])+";";else for(var a in n){var o=n[a];if("object"!==typeof o){var s=o;null!=t&&void 0!==t[s]?r+=a+"{"+t[s]+"}":hs(s)&&(r+=ps(a)+":"+ms(a,s)+";")}else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var l=gs(e,t,o);switch(a){case"animation":case"animationName":r+=ps(a)+":"+l+";";break;default:r+=a+"{"+l+"}"}}else for(var c=0;c<o.length;c++)hs(o[c])&&(r+=ps(a)+":"+ms(a,o[c])+";")}return r}(e,t,n);case"function":if(void 0!==e){var s=vs,l=n(e);return vs=s,gs(e,t,l)}}var c=n;if(null==t)return c;var u=t[c];return void 0!==u?u:c}var vs,ys=/label:\s*([^\s;{]+)\s*(;|$)/g;function bs(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";vs=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,i+=gs(n,t,a)):i+=a[0];for(var o=1;o<e.length;o++){if(i+=gs(n,t,e[o]),r)i+=a[o]}ys.lastIndex=0;for(var s,l="";null!==(s=ys.exec(i));)l+="-"+s[1];var c=function(e){for(var t,n=0,r=0,i=e.length;i>=4;++r,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(i){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(i)+l;return{name:c,styles:i,next:vs}}var ws=!!t.useInsertionEffect&&t.useInsertionEffect,xs=ws||function(e){return e()},ks=(ws||e.useLayoutEffect,e.createContext("undefined"!==typeof HTMLElement?as({key:"css"}):null)),Ss=(ks.Provider,function(t){return(0,e.forwardRef)((function(n,r){var i=(0,e.useContext)(ks);return t(n,i,r)}))}),_s=e.createContext({});var Cs={}.hasOwnProperty,Es="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ps=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return ss(t,n,r),xs((function(){return ls(t,n,r)})),null},Os=Ss((function(t,n,r){var i=t.css;"string"===typeof i&&void 0!==n.registered[i]&&(i=n.registered[i]);var a=t[Es],o=[i],s="";"string"===typeof t.className?s=os(n.registered,o,t.className):null!=t.className&&(s=t.className+" ");var l=bs(o,void 0,e.useContext(_s));s+=n.key+"-"+l.name;var c={};for(var u in t)Cs.call(t,u)&&"css"!==u&&u!==Es&&(c[u]=t[u]);return c.className=s,r&&(c.ref=r),e.createElement(e.Fragment,null,e.createElement(Ps,{cache:n,serialized:l,isStringTag:"string"===typeof a}),e.createElement(a,c))})),js=We.Fragment;function zs(e,t,n){return Cs.call(t,"css")?We.jsx(Os,function(e,t){var n={};for(var r in t)Cs.call(t,r)&&(n[r]=t[r]);return n[Es]=e,n}(e,t),n):We.jsx(e,t,n)}function Ts(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return bs(t)}var Ns=function(){var e=Ts.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Rs=function e(t){for(var n=t.length,r=0,i="";r<n;r++){var a=t[r];if(null!=a){var o=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))o=e(a);else for(var s in o="",a)a[s]&&s&&(o&&(o+=" "),o+=s);break;default:o=a}o&&(i&&(i+=" "),i+=o)}}return i};var Is=function(e){var t=e.cache,n=e.serializedArr;return xs((function(){for(var e=0;e<n.length;e++)ls(t,n[e],!1)})),null},Ms=Ss((function(t,n){var r=[],i=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var a=bs(t,n.registered);return r.push(a),ss(n,a,!1),n.key+"-"+a.name},a={css:i,cx:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e,t,n){var r=[],i=os(e,r,n);return r.length<2?n:i+t(r)}(n.registered,i,Rs(t))},theme:e.useContext(_s)},o=t.children(a);return e.createElement(e.Fragment,null,e.createElement(Is,{cache:n,serializedArr:r}),o)})),Ls=Object.defineProperty,As=(e,t,n)=>((e,t,n)=>t in e?Ls(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),Ds=new Map,Fs=new WeakMap,Vs=0,Us=void 0;function $s(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(Fs.has(n)||(Vs+=1,Fs.set(n,Vs.toString())),Fs.get(n)):"0"):e[t]}`;var n})).toString()}function Hs(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Us;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:a,elements:o}=function(e){const t=$s(e);let n=Ds.get(t);if(!n){const r=new Map;let i;const a=new IntersectionObserver((t=>{t.forEach((t=>{var n;const a=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach((e=>{e(a,t)}))}))}),e);i=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:a,elements:r},Ds.set(t,n)}return n}(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),a.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(o.delete(e),a.unobserve(e)),0===o.size&&(a.disconnect(),Ds.delete(i))}}var Ws=class extends e.Component{constructor(e){super(e),As(this,"node",null),As(this,"_unobserveCb",null),As(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),As(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i,fallbackInView:a}=this.props;this._unobserveCb=Hs(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:i},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"===typeof t){const{inView:e,entry:n}=this.state;return t({inView:e,entry:n,ref:this.handleNode})}const{as:n,triggerOnce:r,threshold:i,root:a,rootMargin:o,onChange:s,skip:l,trackVisibility:c,delay:u,initialInView:d,fallbackInView:f,...h}=this.props;return e.createElement(n||"div",{ref:this.handleNode,...h},t)}};function Bs(){let{threshold:t,delay:n,trackVisibility:r,rootMargin:i,root:a,triggerOnce:o,skip:s,initialInView:l,fallbackInView:c,onChange:u}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[f,h]=e.useState(null),p=e.useRef(),[m,g]=e.useState({inView:!!l,entry:void 0});p.current=u,e.useEffect((()=>{if(s||!f)return;let e;return e=Hs(f,((t,n)=>{g({inView:t,entry:n}),p.current&&p.current(t,n),n.isIntersecting&&o&&e&&(e(),e=void 0)}),{root:a,rootMargin:i,threshold:t,trackVisibility:r,delay:n},c),()=>{e&&e()}}),[Array.isArray(t)?t.toString():t,f,a,i,o,s,r,c,n]);const v=null==(d=m.entry)?void 0:d.target,y=e.useRef();f||!v||o||s||y.current===v||(y.current=v,g({inView:!!l,entry:void 0}));const b=[h,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var Ys=n(163);Ns`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Ns`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Ns`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Ns`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Ns`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Ns`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Ns`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Ns`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Ns`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Ns`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Ns`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Ns`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Ns`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const Ks=Ns`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Ns`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Xs(e,t){return n=>n?e():t()}function qs(e){return Xs(e,(()=>null))}function Qs(e){return qs((()=>({opacity:0})))(e)}const Gs=t=>{const{cascade:n=!1,damping:r=.5,delay:i=0,duration:a=1e3,fraction:o=0,keyframes:s=Ks,triggerOnce:l=!1,className:c,style:u,childClassName:d,childStyle:f,children:h,onVisibilityChange:p}=t,m=(0,e.useMemo)((()=>function(e){let{duration:t=1e3,delay:n=0,timingFunction:r="ease",keyframes:i=Ks,iterationCount:a=1}=e;return Ts`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${n}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:s,duration:a})),[a,s]);return void 0==h?null:"string"===typeof(g=h)||"number"===typeof g||"boolean"===typeof g?zs(Zs,{...t,animationStyles:m,children:String(h)}):(0,Ys.isFragment)(h)?zs(el,{...t,animationStyles:m}):zs(js,{children:e.Children.map(h,((s,h)=>{if(!(0,e.isValidElement)(s))return null;const g=i+(n?h*a*r:0);switch(s.type){case"ol":case"ul":return zs(Ms,{children:e=>{let{cx:n}=e;return zs(s.type,{...s.props,className:n(c,s.props.className),style:Object.assign({},u,s.props.style),children:zs(Gs,{...t,children:s.props.children})})}});case"li":return zs(Ws,{threshold:o,triggerOnce:l,onChange:p,children:e=>{let{inView:t,ref:n}=e;return zs(Ms,{children:e=>{let{cx:r}=e;return zs(s.type,{...s.props,ref:n,className:r(d,s.props.className),css:qs((()=>m))(t),style:Object.assign({},f,s.props.style,Qs(!t),{animationDelay:g+"ms"})})}})}});default:return zs(Ws,{threshold:o,triggerOnce:l,onChange:p,children:e=>{let{inView:t,ref:n}=e;return zs("div",{ref:n,className:c,css:qs((()=>m))(t),style:Object.assign({},u,Qs(!t),{animationDelay:g+"ms"}),children:zs(Ms,{children:e=>{let{cx:t}=e;return zs(s.type,{...s.props,className:t(d,s.props.className),style:Object.assign({},f,s.props.style)})}})})}})}}))});var g},Js={display:"inline-block",whiteSpace:"pre"},Zs=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:i=0,duration:a=1e3,fraction:o=0,triggerOnce:s=!1,className:l,style:c,children:u,onVisibilityChange:d}=e,{ref:f,inView:h}=Bs({triggerOnce:s,threshold:o,onChange:d});return Xs((()=>zs("div",{ref:f,className:l,style:Object.assign({},c,Js),children:u.split("").map(((e,n)=>zs("span",{css:qs((()=>t))(h),style:{animationDelay:i+n*a*r+"ms"},children:e},n)))})),(()=>zs(el,{...e,children:u})))(n)},el=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:i,style:a,children:o,onVisibilityChange:s}=e,{ref:l,inView:c}=Bs({triggerOnce:r,threshold:n,onChange:s});return zs("div",{ref:l,className:i,css:qs((()=>t))(c),style:Object.assign({},a,Qs(!c)),children:o})};Ns`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Ns`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Ns`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Ns`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Ns`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Ns`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ns`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ns`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ns`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ns`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const tl=Ns`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,nl=Ns`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,rl=Ns`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,il=Ns`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,al=Ns`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;const ol={backfaceVisibility:"visible"},sl=t=>{const{direction:n,reverse:r=!1,style:i,...a}=t,o=(0,e.useMemo)((()=>function(e,t){switch(t){case"horizontal":return e?il:nl;case"vertical":return e?al:rl;default:return tl}}(r,n)),[n,r]);return zs(Gs,{keyframes:o,style:Object.assign({},i,ol),...a})};Ns`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Ns`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Ns`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Ns`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ns`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ns`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ns`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ns`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Ns`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Ns`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ns`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Ns`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Ns`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Ns`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Ns`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Ns`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ns`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ns`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ns`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ns`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Ns`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Ns`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Ns`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Ns`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function ll(){return(0,We.jsxs)(to,{id:"project",children:[(0,We.jsx)("h2",{children:"My Projects"}),(0,We.jsxs)("div",{className:"projects",children:[(0,We.jsx)(sl,{triggerOnce:!0,children:(0,We.jsxs)("div",{className:"project",children:[(0,We.jsxs)("header",{children:[(0,We.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,We.jsx)("title",{children:"Folder"}),(0,We.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,We.jsxs)("div",{className:"project-links",children:[(0,We.jsx)("a",{href:"https://github.com/suhail22a/Web-Editor",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ve,alt:"GitHub"})}),(0,We.jsx)("a",{href:"https://web-editor-a1zz.vercel.app/web",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:no,alt:"Live Site"})})]})]}),(0,We.jsxs)("div",{className:"body",children:[(0,We.jsx)("h3",{children:"Web-Editor"}),(0,We.jsx)("p",{children:"Web-Editor is an advanced, cloud-based platform that streamlines content creation and editing, providing a user-friendly interface and real-time collaboration features. Designed for seamless web-based workflows, it empowers teams to collaborate efficiently, edit content effortlessly, and enhance productivity across various digital projects."})]}),(0,We.jsx)("footer",{children:(0,We.jsxs)("ul",{className:"tech-list",children:[(0,We.jsx)("li",{children:"Vite"}),(0,We.jsx)("li",{children:"Node.js"}),(0,We.jsx)("li",{children:"Tailwind CSS"})]})})]})}),(0,We.jsx)(sl,{triggerOnce:!0,children:(0,We.jsxs)("div",{className:"project",children:[(0,We.jsxs)("header",{children:[(0,We.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,We.jsx)("title",{children:"Folder"}),(0,We.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,We.jsx)("div",{className:"project-links",children:(0,We.jsx)("a",{href:"https://github.com/suhail22a/Invoice-Generator",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ve,alt:"GitHub"})})})]}),(0,We.jsxs)("div",{className:"body",children:[(0,We.jsx)("h3",{children:"Invoice Generator"}),(0,We.jsx)("p",{children:"Invoice Generator is an intuitive, automated platform that simplifies the creation and management of professional invoices. With customizable templates and real-time calculations, it ensures accuracy and efficiency, allowing businesses to generate, track, and manage invoices seamlessly, all within a user-friendly interface."})]}),(0,We.jsx)("footer",{children:(0,We.jsxs)("ul",{className:"tech-list",children:[(0,We.jsx)("li",{children:"React"}),(0,We.jsx)("li",{children:"Node.js"}),(0,We.jsx)("li",{children:"Tailwind CSS"})]})})]})}),(0,We.jsx)(sl,{triggerOnce:!0,children:(0,We.jsxs)("div",{className:"project",children:[(0,We.jsxs)("header",{children:[(0,We.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,We.jsx)("title",{children:"Folder"}),(0,We.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,We.jsxs)("div",{className:"project-links",children:[(0,We.jsx)("a",{href:"https://github.com/suhail22a/HandWritting",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ve,alt:"GitHub"})}),(0,We.jsx)("a",{href:"https://hand-writting-three.vercel.app/",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:no,alt:"Live Site"})})]})]}),(0,We.jsxs)("div",{className:"body",children:[(0,We.jsx)("h3",{children:"Text 2 Handwriting"}),(0,We.jsx)("p",{children:"Text to Handwriting is an innovative tool that effortlessly transforms typed text into realistic, personalized handwritten content. By mimicking natural cursive writing styles, it adds a personal and creative touch to digital text, making it perfect for crafting custom notes, messages, or even professional documents with the authenticity of handwritten communication."})]}),(0,We.jsx)("footer",{children:(0,We.jsxs)("ul",{className:"tech-list",children:[(0,We.jsx)("li",{children:"Three.js"}),(0,We.jsx)("li",{children:"Node.js"}),(0,We.jsx)("li",{children:"Firebase"})]})})]})}),(0,We.jsx)(sl,{triggerOnce:!0,children:(0,We.jsxs)("div",{className:"project",children:[(0,We.jsxs)("header",{children:[(0,We.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,We.jsx)("title",{children:"Folder"}),(0,We.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,We.jsx)("div",{className:"project-links",children:(0,We.jsx)("a",{href:"https://github.com/suhail22a/HealthHaven",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ve,alt:"GitHub"})})})]}),(0,We.jsxs)("div",{className:"body",children:[(0,We.jsx)("h3",{children:"HealthHaven"}),(0,We.jsx)("p",{children:"HealthHaven is an intuitive medical appointment scheduling platform designed to simplify healthcare management. It allows patients to easily book, reschedule, and track appointments with their healthcare providers, while offering seamless integration for doctors and clinics to manage their schedules efficiently, ensuring a hassle-free experience for both patients and medical professionals"})]}),(0,We.jsx)("footer",{children:(0,We.jsxs)("ul",{className:"tech-list",children:[(0,We.jsx)("li",{children:"PHP"}),(0,We.jsx)("li",{children:"HTML"}),(0,We.jsx)("li",{children:"CSS"}),(0,We.jsx)("li",{children:"MySQL"})]})})]})}),(0,We.jsx)(sl,{triggerOnce:!0,children:(0,We.jsxs)("div",{className:"project",children:[(0,We.jsxs)("header",{children:[(0,We.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,We.jsx)("title",{children:"Folder"}),(0,We.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,We.jsxs)("div",{className:"project-links",children:[(0,We.jsx)("a",{href:"https://github.com/suhail22a/SMS-Bomber",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ve,alt:"GitHub"})}),(0,We.jsx)("a",{href:"https://sms-bomber-gamma.vercel.app/",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:no,alt:"Live Site"})})]})]}),(0,We.jsxs)("div",{className:"body",children:[(0,We.jsx)("h3",{children:"SMS-Bomber"}),(0,We.jsx)("p",{children:"SMS-Bomber is a tool designed to automate the process of sending multiple SMS messages in a short period. While it showcases the power of bulk messaging, it is important to note that such tools should be used responsibly and in compliance with applicable regulations to prevent misuse or spamming."})]}),(0,We.jsx)("footer",{children:(0,We.jsxs)("ul",{className:"tech-list",children:[(0,We.jsx)("li",{children:"HTML"}),(0,We.jsx)("li",{children:"API Integration"}),(0,We.jsx)("li",{children:"CSS"})]})})]})}),(0,We.jsx)(sl,{triggerOnce:!0,children:(0,We.jsxs)("div",{className:"project",children:[(0,We.jsxs)("header",{children:[(0,We.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,We.jsx)("title",{children:"Folder"}),(0,We.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,We.jsx)("div",{className:"project-links",children:(0,We.jsx)("a",{href:"https://github.com/suhail22a/LMS",target:"_blank",rel:"noreferrer",children:(0,We.jsx)("img",{src:Ve,alt:"GitHub"})})})]}),(0,We.jsxs)("div",{className:"body",children:[(0,We.jsx)("h3",{children:"LMS"}),(0,We.jsx)("p",{children:"SMS-Bomber is a tool designed to automate the process of sending multiple SMS messages in a short period. While it showcases the power of bulk messaging, it is important to note that such tools should be used responsibly and in compliance with applicable regulations to prevent misuse or spamming."})]}),(0,We.jsx)("footer",{children:(0,We.jsxs)("ul",{className:"tech-list",children:[(0,We.jsx)("li",{children:"PHP"}),(0,We.jsx)("li",{children:"HTML"}),(0,We.jsx)("li",{children:"CSS"}),(0,We.jsx)("li",{children:"MySQL"})]})})]})})]}),(0,We.jsx)("br",{}),(0,We.jsx)("br",{}),(0,We.jsx)("br",{})]})}const cl=n.p+"static/media/sass-icon.8351205a93eafac2e392b26acf7580e1.svg";function ul(){return(0,We.jsxs)(Ui,{children:[(0,We.jsx)(Vi,{id:"tsparticles",options:{fullScreen:{enable:!0,zIndex:1},detectRetina:!0,fpsLimit:60,interactivity:{events:{onClick:{enable:!0,mode:"push"},onDiv:{elementId:"repulse-div",enable:!1,mode:"repulse"},onHover:{enable:!0,mode:"bubble",parallax:{enable:!1,force:60,smooth:10}},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:2},connect:{distance:80,lineLinked:{opacity:.5},radius:60},grab:{distance:400,lineLinked:{opacity:1}},push:{quantity:2},remove:{quantity:2},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},lineLinked:{blink:!1,color:"#000",consent:!1,distance:150,enable:!1,opacity:.4,width:1},move:{attract:{enable:!1,rotate:{x:600,y:1200}},bounce:!1,direction:"none",enable:!0,outMode:"out",random:!1,speed:2,straight:!1},number:{density:{enable:!0,area:800},limit:20,value:15},opacity:{animation:{enable:!0,minimumValue:.2,speed:1,sync:!1},random:!0,value:1},rotate:{animation:{enable:!0,speed:5,sync:!1},direction:"random",random:!0,value:0},shape:{character:{fill:!1,font:"Verdana",style:"",value:"*",weight:"400"},image:[{src:ma,width:20,height:20},{src:ua,width:20,height:20},{src:la,width:20,height:20},{src:ca,width:20,height:20},{src:da,width:20,height:20},{src:fa,width:20,height:20},{src:De,width:20,height:20},{src:cl,width:20,height:20},{src:ha,width:20,height:20},{src:pa,width:20,height:20}],polygon:{sides:5},stroke:{color:"#000000",width:0},type:"image"},size:{animation:{enable:!1,minimumValue:.1,speed:40,sync:!1},random:!1,value:16}},polygon:{draw:{enable:!1,lineColor:"#ffffff",lineWidth:.5},move:{radius:10},scale:1,url:""},background:{image:"",position:"50% 50%",repeat:"no-repeat",size:"cover"}}}),(0,We.jsx)(aa,{}),(0,We.jsx)(Qa,{}),(0,We.jsx)(ll,{}),(0,We.jsx)(eo,{})]})}const dl=(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a=we.apply(void 0,[t].concat(r)),o="sc-global-"+Ce(JSON.stringify(a)),s=new Me(a,o);function l(t){var n=le(),r=ce(),i=(0,e.useContext)(Te),a=(0,e.useRef)(n.allocateGSInstance(o)).current;return n.server&&c(a,t,n,i,r),(0,e.useLayoutEffect)((function(){if(!n.server)return c(a,t,n,i,r),function(){return s.removeStyles(a,n)}}),[a,t,n,i,r]),null}function c(e,t,n,r,i){if(s.isStatic)s.renderStyles(e,E,n,i);else{var a=m({},t,{theme:xe(t,r,l.defaultProps)});s.renderStyles(e,a,n,i)}}return e.memo(l)})`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`;const fl=function(){return(0,We.jsxs)(We.Fragment,{children:[(0,We.jsx)(dl,{}),(0,We.jsx)(ln,{}),(0,We.jsx)(ul,{}),(0,We.jsx)(Be,{})]})};r.render((0,We.jsx)(e.StrictMode,{children:(0,We.jsx)(fl,{})}),document.getElementById("root"))})()})();
//# sourceMappingURL=main.94518249.js.map