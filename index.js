!function(e){var t={};function n(r){if(t[r])return t[r].exports;var d=t[r]={i:r,l:!1,exports:{}};return e[r].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(r,d,function(t){return e[t]}.bind(null,d));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){var r,d,a,i,o,l,u,s,c=n(1),b=["start","stop","pause","resume"],p=["audio/webm","audio/ogg","audio/wav"];function m(e){d.innerHTML="",navigator.mediaDevices.getUserMedia({audio:!0}).then(function(t){r=new MediaRecorder(t),b.forEach(function(e){r.addEventListener(e,function(e){var t=document.createElement("li");t.innerHTML="<strong>"+e+": </strong>"+r.state,"start"===e&&(t.innerHTML+=", "+r.mimeType);d.appendChild(t),"recording"===r.state?(i.disabled=!0,a.disabled=!0,s.disabled=!1,l.disabled=!0,o.disabled=!1,u.disabled=!1):"paused"===r.state?(i.disabled=!0,a.disabled=!0,s.disabled=!1,l.disabled=!1,o.disabled=!0,u.disabled=!1):"inactive"===r.state&&(i.disabled=!1,a.disabled=!1,s.disabled=!0,l.disabled=!0,o.disabled=!0,u.disabled=!0)}.bind(null,e))}),r.addEventListener("dataavailable",E),"full"===e?r.start():r.start(1e3)}),i.blur(),a.blur()}function f(){r.stop(),r.stream.getTracks()[0].stop(),u.blur()}function y(){r.pause(),o.blur()}function v(){r.resume(),l.blur()}function g(){r.requestData(),s.blur()}function E(e){var t=document.createElement("li"),n=document.createElement("strong");n.innerText="dataavailable: ",t.appendChild(n);var r=document.createElement("span");r.innerText=e.data.type+", "+c(e.data.size,{unitSeparator:" ",decimalPlaces:0}),t.appendChild(r);var a=document.createElement("audio");a.controls=!0,a.src=URL.createObjectURL(e.data),t.appendChild(a),d.appendChild(t)}document.addEventListener("DOMContentLoaded",function(){if(d=document.getElementById("list"),i=document.getElementById("sec"),a=document.getElementById("record"),s=document.getElementById("request"),l=document.getElementById("resume"),o=document.getElementById("pause"),u=document.getElementById("stop"),MediaRecorder.notSupported)return d.style.display="none",document.getElementById("controls").style.display="none",document.getElementById("formats").style.display="none",document.getElementById("mode").style.display="none",void(document.getElementById("support").style.display="block");document.getElementById("formats").innerText="Format: "+p.filter(function(e){return MediaRecorder.isTypeSupported(e)}).join(", "),i.addEventListener("click",m.bind(null,"parts")),a.addEventListener("click",m.bind(null,"full")),s.addEventListener("click",g),l.addEventListener("click",v),o.addEventListener("click",y),u.addEventListener("click",f),i.disabled=!1,a.disabled=!1})},function(e,t,n){"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */e.exports=function(e,t){if("string"==typeof e)return l(e);if("number"==typeof e)return o(e,t);return null},e.exports.format=o,e.exports.parse=l;var r=/\B(?=(\d{3})+(?!\d))/g,d=/(?:\.0*|(\.[^0]+)0+)$/,a={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:1024*(1<<30)},i=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;function o(e,t){if(!Number.isFinite(e))return null;var n=Math.abs(e),i=t&&t.thousandsSeparator||"",o=t&&t.unitSeparator||"",l=t&&void 0!==t.decimalPlaces?t.decimalPlaces:2,u=Boolean(t&&t.fixedDecimals),s=t&&t.unit||"";s&&a[s.toLowerCase()]||(s=n>=a.tb?"TB":n>=a.gb?"GB":n>=a.mb?"MB":n>=a.kb?"KB":"B");var c=(e/a[s.toLowerCase()]).toFixed(l);return u||(c=c.replace(d,"$1")),i&&(c=c.replace(r,i)),c+o+s}function l(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,n=i.exec(e),r="b";return n?(t=parseFloat(n[1]),r=n[4].toLowerCase()):(t=parseInt(e,10),r="b"),Math.floor(a[r]*t)}}]);