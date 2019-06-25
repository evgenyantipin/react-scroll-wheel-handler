module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){y&&d&&(y=!1,d.length?h=d.concat(h):v=-1,h.length&&u())}function u(){if(!y){var e=o(a);y=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,y=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function l(){}var c,f,p=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],y=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||y||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(3),s=n.n(u),l=n(4),c=n.n(l),f=n(9),p=n.n(f),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){n.props.disableKeyboard||document.addEventListener("keydown",n.handleKeyPress,{passive:!0})},n.componentWillUnmount=function(){n.props.disableKeyboard||document.removeEventListener("keydown",n.handleKeyPress,{passive:!0}),n.timer&&clearTimeout(n.timer)},n.startTimeout=function(){var e=n.props.timeout;n.onTimeout=!0,n.timer=setTimeout(function(){n.onTimeout=!1,n.firedEvent=!1},e)},n.setTrainData=function(e){if(n.trainData.length+1<4)for(n.trainData.push(e);n.trainData.length<4;)n.trainData.unshift(0);else n.trainData.push(e),n.trainData.shift()},n.handleWheelScroll=function(e){e.stopPropagation();var t=n.props,r=t.pauseListeners,o=t.timeout,i=t.upHandler,a=t.downHandler,u=n.Lethargy.check(e);if(!1!==u&&!n.firedEvent&&!r)return n.firedEvent=!0,o&&n.startTimeout(),u>0?void(i&&i()):void(u<0&&a&&a());r||o&&n.onTimeout||(n.firedEvent=!1)},n.handleKeyPress=function(e){var t=n.props,r=t.upHandler,o=t.downHandler,i=t.leftHandler,a=t.rightHandler,u=t.timeout;t.pauseListeners||n.onTimeout||(38===e.keyCode&&(r&&r(),u&&n.startTimeout()),37===e.keyCode&&(a&&a(),u&&n.startTimeout()),39===e.keyCode&&(i&&i(),u&&n.startTimeout()),40===e.keyCode&&(o&&o(),u&&n.startTimeout()))},n.unify=function(e){return e.changedTouches?e.changedTouches[0]:e},n.handleSwipeStart=function(e){n.startX=n.unify(e).clientX,n.startY=n.unify(e).clientY},n.handleSwipeEnd=function(e){var t=n.props,r=t.leftHandler,o=t.rightHandler,i=t.upHandler,a=t.downHandler,u=t.timeout,s=t.pauseListeners,l=0,c=0;if(!n.onTimeout&&!s){if((n.startX||0===n.startX)&&(l=n.unify(e).clientX-n.startX),(n.startY||0===n.startY)&&(c=n.unify(e).clientY-n.startY),Math.abs(l)>Math.abs(c)){var f=Math.sign(l);f<0&&r&&r(),f>0&&o&&o()}else{var p=Math.sign(c);p<0&&a&&a(),p>0&&i&&i()}u&&n.startTimeout(),n.startY=null,n.startX=null}},n.lastScroll,n.nScrolling=[],n.firedEvent=!1,n.onTimeout=!1,n.scrollTime=0,n.trainData=[],n.dataString="",n.Lethargy=new p.a,n}return a(t,e),h(t,[{key:"render",value:function(){function e(){var e=this.props,t=e.CustomContainerComponent,n=e.children,o=e.customStyle,i=(e.upHandler,e.downHandler,e.pauseListeners,e.disableKeyboard,r(e,["CustomContainerComponent","children","customStyle","upHandler","downHandler","pauseListeners","disableKeyboard"]));return"function"==typeof t?s.a.createElement(t,d({onKeyPress:this.handleKeyPress,style:o,onWheel:this.handleWheelScroll,tabIndex:"0",onTouchStart:this.handleSwipeStart,onMouseDown:this.handleSwipeStart,onMouseUp:this.handleSwipeEnd,onTouchEnd:this.handleSwipeEnd},i),n):s.a.createElement("div",d({onTouchStart:this.handleSwipeStart,onMouseDown:this.handleSwipeStart,onMouseUp:this.handleSwipeEnd,onTouchEnd:this.handleSwipeEnd,style:o,onWheel:this.handleWheelScroll,tabIndex:"0"},i),n)}return e}()}]),t}(u.Component);y.propTypes={upHandler:c.a.func,downHandler:c.a.func,leftHandler:c.a.func,rightHandler:c.a.func,customStyle:c.a.object,CustomContainerComponent:c.a.func,pauseListeners:c.a.bool.isRequired,timeout:c.a.number,disableKeyboard:c.a.bool.isRequired},y.defaultProps={pauseListeners:!1,timeout:700,disableKeyboard:!1},t.default=y},function(e,t){e.exports=require("react")},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r};e.exports=n(5)(o,!0)}else e.exports=n(8)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){function r(){return null}var o=n(6),i=n(1),a=n(7),u=function(){};"production"!==t.env.NODE_ENV&&(u=function(e){var t="Warning: "+e;try{throw new Error(t)}catch(e){}}),e.exports=function(e,n){function s(e){var t=e&&(D&&e[D]||e[x]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function c(e){this.message=e,this.stack=""}function f(e){function r(r,s,l,f,p,d,h){if(f=f||P,d=d||l,h!==i){if(n){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=f+":"+l;!o[v]&&a<3&&(u("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),o[v]=!0,a++)}}return null==s[l]?r?new c(null===s[l]?"The "+p+" `"+d+"` is marked as required in `"+f+"`, but its value is `null`.":"The "+p+" `"+d+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(s,l,f,p,d)}if("production"!==t.env.NODE_ENV)var o={},a=0;var s=r.bind(null,!1);return s.isRequired=r.bind(null,!0),s}function p(e){function t(t,n,r,o,i,a){var u=t[n];if(O(u)!==e)return new c("Invalid "+o+" `"+i+"` of type `"+E(u)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return f(t)}function d(e){function t(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new c("Invalid "+o+" `"+a+"` of type `"+O(u)+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<u.length;s++){var l=e(u,s,r,o,a+"["+s+"]",i);if(l instanceof Error)return l}return null}return f(t)}function h(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||P;return new c("Invalid "+o+" `"+i+"` of type `"+S(t[n])+"` supplied to `"+r+"`, expected instance of `"+a+"`.")}return null}return f(t)}function y(e){function n(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(l(a,e[u]))return null;return new c("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?f(n):("production"!==t.env.NODE_ENV&&u("Invalid argument supplied to oneOf, expected an instance of array."),r)}function v(e){function t(t,n,r,o,a){if("function"!=typeof e)return new c("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],s=O(u);if("object"!==s)return new c("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in u)if(u.hasOwnProperty(l)){var f=e(u,l,r,o,a+"."+l,i);if(f instanceof Error)return f}return null}return f(t)}function m(e){function n(t,n,r,o,a){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,a,i))return null}return new c("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&u("Invalid argument supplied to oneOfType, expected an instance of array."),r;for(var o=0;o<e.length;o++){var a=e[o];if("function"!=typeof a)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+j(a)+" at index "+o+"."),r}return f(n)}function b(e){function t(t,n,r,o,a){var u=t[n],s=O(u);if("object"!==s)return new c("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");for(var l in e){var f=e[l];if(f){var p=f(u,l,r,o,a+"."+l,i);if(p)return p}}return null}return f(t)}function w(e){function t(t,n,r,a,u){var s=t[n],l=O(s);if("object"!==l)return new c("Invalid "+a+" `"+u+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");var f=o({},t[n],e);for(var p in f){var d=e[p];if(!d)return new c("Invalid "+a+" `"+u+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=d(s,p,r,a,u+"."+p,i);if(h)return h}return null}return f(t)}function g(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(g);if(null===t||e(t))return!0;var n=s(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!g(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!g(i[1]))return!1}return!0;default:return!1}}function T(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function O(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":T(t,e)?"symbol":t}function E(e){if(void 0===e||null===e)return""+e;var t=O(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=E(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function S(e){return e.constructor&&e.constructor.name?e.constructor.name:P}var D="function"==typeof Symbol&&Symbol.iterator,x="@@iterator",P="<<anonymous>>",k={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:function(){return f(r)}(),arrayOf:d,element:function(){function t(t,n,r,o,i){var a=t[n];if(!e(a)){return new c("Invalid "+o+" `"+i+"` of type `"+O(a)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return f(t)}(),instanceOf:h,node:function(){function e(e,t,n,r,o){return g(e[t])?null:new c("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return f(e)}(),objectOf:v,oneOf:y,oneOfType:m,shape:b,exact:w};return c.prototype=Error.prototype,k.checkPropTypes=a,k.PropTypes=k,k}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,u,s=r(e),l=1;l<arguments.length;l++){n=Object(arguments[l]);for(var c in n)i.call(n,c)&&(s[c]=n[c]);if(o){u=o(n);for(var f=0;f<u.length;f++)a.call(n,u[f])&&(s[u[f]]=n[u[f]])}}return s}},function(e,t,n){"use strict";(function(t){function r(e,n,r,u,s){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var c;try{if("function"!=typeof e[l]){var f=Error((u||"React class")+": "+r+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.");throw f.name="Invariant Violation",f}c=e[l](n,l,u,r,null,i)}catch(e){c=e}if(!c||c instanceof Error||o((u||"React class")+": type specification of "+r+" `"+l+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof c+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),c instanceof Error&&!(c.message in a)){a[c.message]=!0;var p=s?s():"";o("Failed "+r+" type: "+c.message+(null!=p?p:""))}}}var o=function(){};if("production"!==t.env.NODE_ENV){var i=n(1),a={};o=function(e){var t="Warning: "+e;try{throw new Error(t)}catch(e){}}}e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";function r(){}var o=n(1);e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){(function(){var e;e=void 0!==t&&null!==t?t:this,e.Lethargy=function(){function e(e,t,n,r){this.stability=null!=e?Math.abs(e):8,this.sensitivity=null!=t?1+Math.abs(t):100,this.tolerance=null!=n?1+Math.abs(n):1.1,this.delay=null!=r?r:150,this.lastUpDeltas=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this),this.lastDownDeltas=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this),this.deltasTimestamp=function(){var e,t,n;for(n=[],e=1,t=2*this.stability;1<=t?e<=t:e>=t;1<=t?e++:e--)n.push(null);return n}.call(this)}return e.prototype.check=function(e){var t;return e=e.originalEvent||e,null!=e.wheelDelta?t=e.wheelDelta:null!=e.deltaY?t=-40*e.deltaY:null==e.detail&&0!==e.detail||(t=-40*e.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),t>0?(this.lastUpDeltas.push(t),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(t),this.lastDownDeltas.shift(),this.isInertia(-1))},e.prototype.isInertia=function(e){var t,n,r,o,i,a,u;return t=-1===e?this.lastDownDeltas:this.lastUpDeltas,null===t[0]?e:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&t[0]===t[2*this.stability-1])&&(r=t.slice(0,this.stability),n=t.slice(this.stability,2*this.stability),u=r.reduce(function(e,t){return e+t}),i=n.reduce(function(e,t){return e+t}),a=u/r.length,o=i/n.length,Math.abs(a)<Math.abs(o*this.tolerance)&&this.sensitivity<Math.abs(o)&&e)},e.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},e.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},e}()}).call(this),e.exports=this.Lethargy}]);