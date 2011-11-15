/* add in Array.indexOf method, as not properly implemented in IE */
if (!Array.prototype.indexOf){
  Array.prototype.indexOf = function(searchElement /*, fromIndex */){
    "use strict";
    if (this === void 0 || this === null) throw new TypeError();
    var t = Object(this), len = t.length >>> 0;
    if (len === 0) return -1;
    var n = 0;
    if (arguments.length > 0){ n = Number(arguments[1]); if (n !== n) n = 0; else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) n = (n > 0 || -1) * Math.floor(Math.abs(n)); }
    if (n >= len) return -1;
    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
    for (; k < len; k++){ if (k in t && t[k] === searchElement) return k; }
    return -1;
  };
}

function setTimeoutObj(o, t, f, a){ a=a?a:[]; return setTimeout(function(){ f.apply(o,a); }, t); }
function SetIntervalObj(o, t, f, a){ a=a?a:[]; return setInterval(function(){ f.apply(o,a); }, t); }
function getQrystrVal(name){ var match = RegExp('[?&]'+ name +'=([^&]*)').exec(window.location.search); return match && decodeURIComponent(match[1].replace(/\+/g, ' ')); }

html5media.configureFlowplayer = function(tag, element, config){
    config.plugins.controls.buttonColor = "#b7e5fa";
    config.plugins.controls.backgroundColor = "#666666";
}
