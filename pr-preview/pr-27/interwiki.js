(function(){function Q(e){return function(r){var i=f(r,"priority"),o=Number(i);if(isNaN(o)){console.error("Interwiki: rejected style with priority"+i);return}var a=f(r,"theme");a&&N(o,Be(e,a));var n=f(r,"css");n&&Se(o,n)}}function Se(e,t){var r=Array.prototype.slice.call(document.head.querySelectorAll("style.custom-style"));if(!r.some(Y(e,t))){var i=document.createElement("style");i.innerText=t,K(e,i)}}function N(e,t){var r=Array.prototype.slice.call(document.head.querySelectorAll("link.custom-style"));if(!r.some(Y(e,t))){var i=document.createElement("link");i.rel="stylesheet",i.href=t,K(e,i)}}function K(e,t){t.classList.add("custom-style"),t.dataset.priority=e;var r=Array.prototype.slice.call(document.head.querySelectorAll("link.custom-style, style.custom-style")),i=t.tagName,o=r.some(function(a){var n=Number(a.dataset.priority),s=a.tagName;if(e>n)return!1;if(n===e){if(s==="LINK"&&i==="STYLE")return!1;s===i&&console.error("Interwiki: encountered two "+(s==="LINK"?"themes":"CSS styles")+" with the same priority ("+n+") - result may not be as expected")}return document.head.insertBefore(t,a),!0});o||document.head.appendChild(t)}function Y(e,t){var r=function(i){return Number(i.getAttribute("data-priority"))!==e?!1:i.tagName==="LINK"?i.getAttribute("href")===t:i.tagName==="STYLE"?i.innerText===t:!1};return r}function Be(e,t){if(t.indexOf("http")===0||t.indexOf("//")===0)return t;if(!e)return console.error("Interwiki: could not resolve relative fullname ("+t+") for unconfigured site. Consider using a full URL instead."),"";if(t.indexOf("/")===-1)return e+"/local--code/"+t+"/1";var r=t.split("/");return r.length>=3&&r[1]==="code"?e+"/local--code/"+r[0]+"/"+r[2]:(console.error("Interwiki: unknown theme location:"+t),"")}var d=[];var $=function(){return d.some(function(e){return e.activeTargets.length>0})};var Z=function(){return d.some(function(e){return e.skippedTargets.length>0})};var ee="ResizeObserver loop completed with undelivered notifications.",te=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:ee}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=ee),window.dispatchEvent(e)};var v;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(v||(v={}));var l=function(e){return Object.freeze(e)};var A=function(){function e(t,r){this.inlineSize=t,this.blockSize=r,l(this)}return e}();var D=function(){function e(t,r,i,o){return this.x=t,this.y=r,this.width=i,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,l(this)}return e.prototype.toJSON=function(){var t=this,r=t.x,i=t.y,o=t.top,a=t.right,n=t.bottom,s=t.left,u=t.width,c=t.height;return{x:r,y:i,top:o,right:a,bottom:n,left:s,width:u,height:c}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}();var y=function(e){return e instanceof SVGElement&&"getBBox"in e},z=function(e){if(y(e)){var t=e.getBBox(),r=t.width,i=t.height;return!r&&!i}var o=e,a=o.offsetWidth,n=o.offsetHeight;return!(a||n||e.getClientRects().length)},L=function(e){var t;if(e instanceof Element)return!0;var r=(t=e==null?void 0:e.ownerDocument)===null||t===void 0?void 0:t.defaultView;return!!(r&&e instanceof r.Element)},re=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1};var h=typeof window!="undefined"?window:{};var k=new WeakMap,ie=/auto|scroll/,Te=/^tb|vertical/,Ce=/msie|trident/i.test(h.navigator&&h.navigator.userAgent),p=function(e){return parseFloat(e||"0")},m=function(e,t,r){return e===void 0&&(e=0),t===void 0&&(t=0),r===void 0&&(r=!1),new A((r?t:e)||0,(r?e:t)||0)},oe=l({devicePixelContentBoxSize:m(),borderBoxSize:m(),contentBoxSize:m(),contentRect:new D(0,0,0,0)}),M=function(e,t){if(t===void 0&&(t=!1),k.has(e)&&!t)return k.get(e);if(z(e))return k.set(e,oe),oe;var r=getComputedStyle(e),i=y(e)&&e.ownerSVGElement&&e.getBBox(),o=!Ce&&r.boxSizing==="border-box",a=Te.test(r.writingMode||""),n=!i&&ie.test(r.overflowY||""),s=!i&&ie.test(r.overflowX||""),u=i?0:p(r.paddingTop),c=i?0:p(r.paddingRight),g=i?0:p(r.paddingBottom),b=i?0:p(r.paddingLeft),ye=i?0:p(r.borderTopWidth),we=i?0:p(r.borderRightWidth),xe=i?0:p(r.borderBottomWidth),Oe=i?0:p(r.borderLeftWidth),X=b+c,j=u+g,C=Oe+we,I=ye+xe,U=s?e.offsetHeight-I-e.clientHeight:0,G=n?e.offsetWidth-C-e.clientWidth:0,ze=o?X+C:0,ke=o?j+I:0,x=i?i.width:p(r.width)-ze-G,O=i?i.height:p(r.height)-ke-U,Ee=x+X+G+C,Re=O+j+U+I,J=l({devicePixelContentBoxSize:m(Math.round(x*devicePixelRatio),Math.round(O*devicePixelRatio),a),borderBoxSize:m(Ee,Re,a),contentBoxSize:m(x,O,a),contentRect:new D(b,u,x,O)});return k.set(e,J),J},E=function(e,t,r){var i=M(e,r),o=i.borderBoxSize,a=i.contentBoxSize,n=i.devicePixelContentBoxSize;switch(t){case v.DEVICE_PIXEL_CONTENT_BOX:return n;case v.BORDER_BOX:return o;default:return a}};var q=function(){function e(t){var r=M(t);this.target=t,this.contentRect=r.contentRect,this.borderBoxSize=l([r.borderBoxSize]),this.contentBoxSize=l([r.contentBoxSize]),this.devicePixelContentBoxSize=l([r.devicePixelContentBoxSize])}return e}();var R=function(e){if(z(e))return 1/0;for(var t=0,r=e.parentNode;r;)t+=1,r=r.parentNode;return t};var ne=function(){var e=1/0,t=[];d.forEach(function(n){if(n.activeTargets.length!==0){var s=[];n.activeTargets.forEach(function(c){var g=new q(c.target),b=R(c.target);s.push(g),c.lastReportedSize=E(c.target,c.observedBox),b<e&&(e=b)}),t.push(function(){n.callback.call(n.observer,s,n.observer)}),n.activeTargets.splice(0,n.activeTargets.length)}});for(var r=0,i=t;r<i.length;r++){var o=i[r];o()}return e};var P=function(e){d.forEach(function(r){r.activeTargets.splice(0,r.activeTargets.length),r.skippedTargets.splice(0,r.skippedTargets.length),r.observationTargets.forEach(function(o){o.isActive()&&(R(o.target)>e?r.activeTargets.push(o):r.skippedTargets.push(o))})})};var ae=function(){var e=0;for(P(e);$();)e=ne(),P(e);return Z()&&te(),e>0};var F,se=[],Ie=function(){return se.splice(0).forEach(function(e){return e()})},ce=function(e){if(!F){var t=0,r=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return Ie()}).observe(r,i),F=function(){r.textContent="".concat(t?t--:t++)}}se.push(e),F()};var ue=function(e){ce(function(){requestAnimationFrame(e)})};var S=0,Ne=function(){return!!S},Ae=250,De={attributes:!0,characterData:!0,childList:!0,subtree:!0},de=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],le=function(e){return e===void 0&&(e=0),Date.now()+e},W=!1,Le=function(){function e(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return e.prototype.run=function(t){var r=this;if(t===void 0&&(t=Ae),!W){W=!0;var i=le(t);ue(function(){var o=!1;try{o=ae()}finally{if(W=!1,t=i-le(),!Ne())return;o?r.run(1e3):t>0?r.run(t):r.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var t=this,r=function(){return t.observer&&t.observer.observe(document.body,De)};document.body?r():h.addEventListener("DOMContentLoaded",r)},e.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),de.forEach(function(r){return h.addEventListener(r,t.listener,!0)}))},e.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),de.forEach(function(r){return h.removeEventListener(r,t.listener,!0)}),this.stopped=!0)},e}(),B=new Le,_=function(e){!S&&e>0&&B.start(),S+=e,!S&&B.stop()};var Me=function(e){return!y(e)&&!re(e)&&getComputedStyle(e).display==="inline"},pe=function(){function e(t,r){this.target=t,this.observedBox=r||v.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var t=E(this.target,this.observedBox,!0);return Me(this.target)&&(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}();var fe=function(){function e(t,r){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=r}return e}();var T=new WeakMap,ve=function(e,t){for(var r=0;r<e.length;r+=1)if(e[r].target===t)return r;return-1},w=function(){function e(){}return e.connect=function(t,r){var i=new fe(t,r);T.set(t,i)},e.observe=function(t,r,i){var o=T.get(t),a=o.observationTargets.length===0;ve(o.observationTargets,r)<0&&(a&&d.push(o),o.observationTargets.push(new pe(r,i&&i.box)),_(1),B.schedule())},e.unobserve=function(t,r){var i=T.get(t),o=ve(i.observationTargets,r),a=i.observationTargets.length===1;o>=0&&(a&&d.splice(d.indexOf(i),1),i.observationTargets.splice(o,1),_(-1))},e.disconnect=function(t){var r=this,i=T.get(t);i.observationTargets.slice().forEach(function(o){return r.unobserve(t,o.target)}),i.activeTargets.splice(0,i.activeTargets.length)},e}();var H=function(){function e(t){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof t!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");w.connect(this,t)}return e.prototype.observe=function(t,r){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!L(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");w.observe(this,t,r)},e.prototype.unobserve=function(t){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!L(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");w.unobserve(this,t)},e.prototype.disconnect=function(){w.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();var qe="   query InterwikiQuery($url: URL!) {     page(url: $url) {       translations {         url       }       translationOf {         url         translations {           url         }       }     }   } ";function he(e,t,r,i){Fe(V(e.url+r),function(o){Pe(o,e,t,i)})}function V(e){if(e.indexOf(".wikidot.com")===-1&&e.indexOf("scpfoundation.net")===-1)throw new Error("Crom requires wikidot.com or scpfoundation.net branch URLs ("+e+")");return e.replace(/^https:/,"http:")}function Pe(e,t,r,i){function o(s){return s.url}var a=null,n=[];n=n.concat(e.translations.map(o)),e.translationOf&&(a=e.translationOf.url,n.push(a),n=n.concat(e.translationOf.translations.map(o))),n.forEach(function(s){var u=s.indexOf(V(t.url))===0;if(!u){var c=Object.keys(r).find(function(g){return s.indexOf(V(r[g].url))===0});if(!c){console.warn("Interwiki: unknown branch "+s);return}i(s,r[c].name,c,a===s)}})}function Fe(e,t){var r=new XMLHttpRequest,i="https://api.crom.avn.sh/graphql?query="+encodeURIComponent(qe)+"&variables="+encodeURIComponent(JSON.stringify({url:e}));r.open("GET",i,!0),r.setRequestHeader("Accept","application/json"),r.addEventListener("readystatechange",function(){if(r.readyState===XMLHttpRequest.DONE)try{if(r.status===200){var o=JSON.parse(r.responseText);if(o.errors&&o.errors.length>0)throw new Error(o.errors);t(o.data.page)}else throw new Error(r.status)}catch(a){console.error("Interwiki: lookup failed for "+e),console.error(a)}}),r.send()}var We=he;function me(e,t,r){var i=e[t]||{},o=document.getElementsByClassName("side-block")[0];o.style.display="none";var a=document.querySelector(".heading p");a.innerText=i.head,We(i,e,r,_e)}function _e(e,t,r,i){var o=document.getElementsByClassName("side-block")[0],a=Array.prototype.slice.call(o.getElementsByClassName("menu-item"));o.style.display="";var n=document.createElement("div");n.classList.add("menu-item"),i&&n.classList.add("original"),n.setAttribute("name",r);var s=document.createElement("img");s.setAttribute("src","//scp-wiki.wdfiles.com/local--files/nav:side/default.png"),s.setAttribute("alt","default.png"),s.classList.add("image"),n.appendChild(s);var u=document.createElement("a");u.setAttribute("href",e),u.setAttribute("target","_parent"),u.innerText=t,n.appendChild(u),o.appendChild(n),a.some(function(c){if(c.getAttribute("name")>r)return o.insertBefore(n,c),!0})}var ge={cn:{name:"\u4E2D\u6587",head:"\u5176\u4ED6\u8BED\u8A00",url:"https://scp-wiki-cn.wikidot.com/",id:"530812",category:""},cs:{name:"\u010Cesky",head:"V jin\xFDch jazyc\xEDch",url:"https://scp-cs.wikidot.com/",id:"2060442",category:""},en:{name:"English",head:"In other languages",url:"https://scp-wiki.wikidot.com/",id:"66711",category:""},fr:{name:"Fran\xE7ais",head:"Dans d\u2019autres langues",url:"https://fondationscp.wikidot.com/",id:"464696",category:""},de:{name:"Deutsch",head:"In anderen Sprachen",url:"https://scp-wiki-de.wikidot.com/",id:"1269857",category:""},int:{name:"International",head:"Languages",url:"https://scp-int.wikidot.com/",id:"1427610",category:""},it:{name:"Italiano",head:"In altre lingue",url:"https://fondazionescp.wikidot.com/",id:"530167",category:""},jp:{name:"\u65E5\u672C\u8A9E",head:"\u4ED6\u8A00\u8A9E\u7248",url:"https://scp-jp.wikidot.com/",id:"578002",category:""},ko:{name:"\uD55C\uAD6D\uC5B4",head:"\uB2E4\uB978 \uC5B8\uC5B4",url:"https://scpko.wikidot.com/",id:"486864",category:""},pl:{name:"Polski",head:"W innych j\u0119zykach",url:"http://scp-pl.wikidot.com/",id:"647733",category:""},ptbr:{name:"Portugu\xEAs",head:"Em outros idiomas",url:"https://scp-pt-br.wikidot.com/",id:"783633",category:""},ru:{name:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",head:"\u041D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0437\u044B\u043A\u0430\u0445",url:"https://scpfoundation.net/",id:"",category:""},es:{name:"Espa\xF1ol",head:"En otros idiomas",url:"http://lafundacionscp.wikidot.com/",id:"560484",category:""},th:{name:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",head:"\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E37\u0E48\u0E19",url:"https://scp-th.wikidot.com/",id:"547203",category:""},ua:{name:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",head:"\u0406\u043D\u0448\u0438\u043C\u0438 \u043C\u043E\u0432\u0430\u043C\u0438",url:"https://scp-ukrainian.wikidot.com/",id:"1398197",category:""},"zh-tr":{name:"\u7E41\u9AD4\u4E2D\u6587",head:"\u5176\u4ED6\u8A9E\u8A00",url:"https://scp-zh-tr.wikidot.com/",id:"3947998",category:""},vn:{name:"Ti\u1EBFng Vi\u1EC7t",head:"Ng\xF4n ng\u1EEF",url:"https://scp-vn.wikidot.com/",id:"836589",category:""}};var be={cn:{name:"\u4E2D\u6587",head:"\u5176\u4ED6\u8BED\u8A00",url:"https://scp-wiki-cn.wikidot.com/",id:"530812",category:"wanderers:"},cs:{name:"\u010Ce\u0161tina",head:"V jin\xFDch jazyc\xEDch",url:"https://wanderers-library-cs.wikidot.com/",id:"4600566",category:""},en:{name:"English",head:"Languages",url:"https://wanderers-library.wikidot.com/",id:"146034",category:""},fr:{name:"Fran\xE7ais",head:"Dans d\u2019autres langues",url:"https://fondationscp.wikidot.com/",id:"464696",category:"vagabonds:"},jp:{name:"\u65E5\u672C\u8A9E",head:"\u4ED6\u8A00\u8A9E\u7248",url:"https://wanderers-library-jp.wikidot.com/",id:"4600658",category:""},ko:{name:"\uD55C\uAD6D\uC5B4",head:"\uB2E4\uB978 \uC5B8\uC5B4",url:"https://wanderers-library-ko.wikidot.com/",id:"621849",category:""},pl:{name:"Polski",head:"W innych j\u0119zykach",url:"https://wanderers-library-pl.wikidot.com/",id:"4593099",category:""},ru:{name:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",head:"\u041D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0437\u044B\u043A\u0430\u0445",url:"https://scpfoundation.net/",id:"",category:"wl:"}};var He=window.resizeIframe.createResizeIframe;addEventListener("DOMContentLoaded",function(){var e=f(location.search,"community"),t=f(location.search,"pagename"),r=f(location.search,"lang"),i=f(location.search,"preventWikidotBaseStyle");Xe(e,t,r,i),window.isInterwikiFrame=!0});function f(e,t){e.indexOf("?")===0&&(e=e.substring(1));var r=e.split("&");r.reverse();var i=r.find(function(o){return o.indexOf(t+"=")===0});return i==null?"":decodeURIComponent(i.substring(t.length+1))}function Ve(){Array.prototype.slice.call(parent).forEach(function(e){try{e.isStyleFrame&&window.requestStyleChange(e.location.search)}catch(t){if(!(t instanceof DOMException))throw t}})}function Xe(e,t,r,i){t=t.replace(/^_default:/,"");var o={wl:be,scp:ge}[e]||{},a=o[r]||{},n=document.referrer,s=location.href.replace(/^.*\//,"/"),u=He(n,s),c=new H(function(){document.getElementsByClassName("menu-item").length&&u()});c.observe(document.documentElement),window.requestStyleChange=Q(a.url||""),i!=="true"&&N(-1,"//d3g0gp89917ko0.cloudfront.net/v--3e3a6f7dbcc9/common--theme/base/css/style.css"),Ve(),me(o,r,t)}})();
//# sourceMappingURL=interwiki.js.map
