(function(){var f=!1;function h(t,e){var r=document.getElementById("resizer-container"),a=document.createElement("iframe");return a.style.display="none",r.appendChild(a),e[0]!=="/"&&(e="/"+e),S(function(n){if(n&&(f=!0),f){var c=r.getBoundingClientRect().top;a.src=t+"/common--javascript/resize-iframe.html?#"+c+e}},750)}function S(t,e){var r=0;return function(){clearTimeout(r),r=setTimeout(function(){t(arguments)},e)}}var I="   query InterwikiQuery($url: URL!) {     page(url: $url) {       translations {         url       }       translationOf {         url         translations {           url         }       }     }   } ";function y(t,e,r,a){L(m(t.url+r),function(n){E(n,t,e,a)})}function m(t){if(t.indexOf(".wikidot.com")===-1)throw new Error("Crom requires wikidot.com branch URLs ("+t+")");return t.replace(/^https:/,"http:")}function E(t,e,r,a){function n(o){return o.url}var c=null,i=[];i=i.concat(t.translations.map(n)),t.translationOf&&(c=t.translationOf.url,i.push(c),i=i.concat(t.translationOf.translations.map(n))),i.forEach(function(o){var s=o.indexOf(m(e.url))===0;if(!s){var l=Object.keys(r).find(function(d){return o.indexOf(m(r[d].url))===0});if(!l){console.warn("Interwiki: unknown branch "+o);return}a(o,r[l].name,l,c===o)}})}function L(t,e){var r=new XMLHttpRequest;r.open("POST","https://api.crom.avn.sh/graphql",!0),r.setRequestHeader("Content-Type","application/json"),r.addEventListener("readystatechange",function(){if(r.readyState===XMLHttpRequest.DONE)try{if(r.status===200){var a=JSON.parse(r.responseText);if(a.errors&&a.errors.length>0)throw new Error(a.errors);e(a.data.page)}else throw new Error(r.status)}catch(n){console.error("Interwiki: lookup failed for "+t),console.error(n)}}),r.send(JSON.stringify({query:I,variables:{url:t}}))}var C=y;function g(t,e,r,a){var n=t[e]||{},c=document.getElementsByClassName("side-block")[0];c.style.display="none";var i=document.querySelector(".heading p");i.innerText=n.head,C(n,t,r,function(o,s,l,d){N(o,s,l,d),a(!0)})}function N(t,e,r,a){var n=document.getElementsByClassName("side-block")[0],c=Array.prototype.slice.call(n.getElementsByClassName("menu-item"));n.style.display="";var i=document.createElement("div");i.classList.add("menu-item"),a&&i.classList.add("original"),i.setAttribute("name",r);var o=document.createElement("img");o.setAttribute("src","//scp-wiki.wdfiles.com/local--files/nav:side/default.png"),o.setAttribute("alt","default.png"),o.classList.add("image"),i.appendChild(o);var s=document.createElement("a");s.setAttribute("href",t),s.setAttribute("target","_parent"),s.innerText=e,i.appendChild(s),n.appendChild(i),c.some(function(l){if(l.getAttribute("name")>r)return n.insertBefore(i,l),!0})}function k(t,e){return function(a){var n=u(a,"priority"),c=Number(n);if(isNaN(c)){console.error("Interwiki: rejected style with priority"+n);return}var i=u(a,"theme");i&&p(c,T(t,i),e);var o=u(a,"css");o&&O(c,o,e)}}function O(t,e,r){var a=Array.prototype.slice.call(document.head.querySelectorAll("style.custom-style"));if(!a.some(v(t,e))){var n=document.createElement("style");n.innerText=e,w(t,n),setTimeout(r,250)}}function p(t,e,r){var a=Array.prototype.slice.call(document.head.querySelectorAll("link.custom-style"));if(!a.some(v(t,e))){var n=document.createElement("link");n.rel="stylesheet",n.addEventListener("load",r),n.href=e,w(t,n)}}function w(t,e){e.classList.add("custom-style"),e.dataset.priority=t;var r=Array.prototype.slice.call(document.head.querySelectorAll("link.custom-style, style.custom-style")),a=e.tagName,n=r.some(function(c){var i=Number(c.dataset.priority),o=c.tagName;if(t>i)return!1;if(i===t){if(o==="LINK"&&a==="STYLE")return!1;o===a&&console.error("Interwiki: encountered two "+(o==="LINK"?"themes":"CSS styles")+" with the same priority ("+i+") - result may not be as expected")}return document.head.insertBefore(e,c),!0});n||document.head.appendChild(e)}function v(t,e){var r=function(a){return Number(a.getAttribute("data-priority"))!==t?!1:a.tagName==="LINK"?a.getAttribute("href")===e:a.tagName==="STYLE"?a.innerText===e:!1};return r}function T(t,e){if(e.indexOf("http")===0||e.indexOf("//")===0)return e;if(!t)return console.error("Interwiki: could not resolve relative fullname ("+e+") for unconfigured site. Consider using a full URL instead."),"";if(e.indexOf("/")===-1)return t+"/local--code/"+e+"/1";var r=e.split("/");return r.length>=3&&r[1]==="code"?t+"/local--code/"+r[0]+"/"+r[2]:(console.error("Interwiki: unknown theme location:"+e),"")}var b={cn:{name:"\u4E2D\u6587",head:"\u5176\u4ED6\u8BED\u8A00",url:"https://scp-wiki-cn.wikidot.com/",id:"530812",category:""},cs:{name:"\u010Cesky",head:"V jin\xFDch jazyc\xEDch",url:"https://scp-cs.wikidot.com/",id:"2060442",category:""},en:{name:"English",head:"In other languages",url:"https://scp-wiki.wikidot.com/",id:"66711",category:""},fr:{name:"Fran\xE7ais",head:"Dans d\u2019autres langues",url:"https://fondationscp.wikidot.com/",id:"464696",category:""},de:{name:"Deutsch",head:"In anderen Sprachen",url:"https://scp-wiki-de.wikidot.com/",id:"1269857",category:""},int:{name:"International",head:"Languages",url:"https://scp-int.wikidot.com/",id:"1427610",category:""},it:{name:"Italiano",head:"In altre lingue",url:"https://fondazionescp.wikidot.com/",id:"530167",category:""},jp:{name:"\u65E5\u672C\u8A9E",head:"\u4ED6\u8A00\u8A9E\u7248",url:"https://scp-jp.wikidot.com/",id:"578002",category:""},ko:{name:"\uD55C\uAD6D\uC5B4",head:"\uB2E4\uB978 \uC5B8\uC5B4",url:"http://scpko.wikidot.com/",id:"486864",category:""},pl:{name:"Polski",head:"W innych j\u0119zykach",url:"http://scp-pl.wikidot.com/",id:"647733",category:""},ptbr:{name:"Portugu\xEAs",head:"Em outros idiomas",url:"https://scp-pt-br.wikidot.com/",id:"783633",category:""},ru:{name:"\u0420\u0443\u0441\u0441\u043A\u0438\u0439",head:"\u041D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u044F\u0437\u044B\u043A\u0430\u0445",url:"http://scp-ru.wikidot.com/",id:"169125",category:""},es:{name:"Espa\xF1ol",head:"En otros idiomas",url:"http://lafundacionscp.wikidot.com/",id:"560484",category:""},th:{name:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",head:"\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E37\u0E48\u0E19",url:"https://scp-th.wikidot.com/",id:"547203",category:""},ua:{name:"\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",head:"\u0406\u043D\u0448\u0438\u043C\u0438 \u043C\u043E\u0432\u0430\u043C\u0438",url:"https://scp-ukrainian.wikidot.com/",id:"1398197",category:""},"zh-tr":{name:"\u7E41\u9AD4\u4E2D\u6587",head:"\u5176\u4ED6\u8A9E\u8A00",url:"https://scp-zh-tr.wikidot.com/",id:"3947998",category:""},vn:{name:"Ti\u1EBFng Vi\u1EC7t",head:"Ng\xF4n ng\u1EEF",url:"https://scp-vn.wikidot.com/",id:"836589",category:""}};var x={cn:{name:"\u4E2D\u6587",head:"\u5176\u4ED6\u8BED\u8A00",url:"https://scp-wiki-cn.wikidot.com/",id:"530812",category:"wanderers:"},cs:{name:"\u010Ce\u0161tina",head:"V jin\xFDch jazyc\xEDch",url:"https://wanderers-library-cs.wikidot.com/",id:"4600566",category:""},en:{name:"English",head:"Languages",url:"https://wanderers-library.wikidot.com/",id:"146034",category:""},jp:{name:"\u65E5\u672C\u8A9E",head:"\u4ED6\u8A00\u8A9E\u7248",url:"https://wanderers-library-jp.wikidot.com/",id:"4600658",category:""},ko:{name:"\uD55C\uAD6D\uC5B4",head:"\uB2E4\uB978 \uC5B8\uC5B4",url:"https://wanderers-library-ko.wikidot.com/",id:"621849",category:""},pl:{name:"Polski",head:"W innych j\u0119zykach",url:"https://wanderers-library-pl.wikidot.com/",id:"4593099",category:""}};addEventListener("DOMContentLoaded",function(){var t=u(location.search,"community"),e=u(location.search,"pagename"),r=u(location.search,"lang"),a=u(location.search,"preventWikidotBaseStyle");A(t,e,r,a),window.isInterwikiFrame=!0});function u(t,e){t.indexOf("?")===0&&(t=t.substring(1));var r=t.split("&");r.reverse();var a=r.find(function(n){return n.indexOf(e+"=")===0});return a==null?"":decodeURIComponent(a.substring(e.length+1))}function B(){Array.prototype.slice.call(parent).forEach(function(t){try{t.isStyleFrame&&window.requestStyleChange(t.location.search)}catch(e){if(!(e instanceof DOMException))throw e}})}function A(t,e,r,a){e=e.replace(/^_default:/,"");var n={wl:x,scp:b}[t]||{},c=n[r]||{},i=document.referrer,o=location.href.replace(/^.*\//,"/"),s=h(i,o);window.requestStyleChange=k(c.url||"",s),a!=="true"&&p(-1,"//d3g0gp89917ko0.cloudfront.net/v--3e3a6f7dbcc9/common--theme/base/css/style.css"),B(),g(n,r,e,s)}})();
//# sourceMappingURL=interwiki.js.map
