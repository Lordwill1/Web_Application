(function(){var e=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},f=Date.now||function(){return+new Date};var g=document,k=window;var l=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"==typeof a)return"string"==typeof b&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var m=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};var n=function(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;k.google_image_requests||(k.google_image_requests=[]);var d=k.document.createElement("img");if(b){var h=function(){if(b){var a=k.google_image_requests,c=l(a,d);0<=c&&Array.prototype.splice.call(a,c,1)}d.removeEventListener&&d.removeEventListener("load",h,!1);d.removeEventListener&&d.removeEventListener("error",h,!1)};m(d,"load",h);m(d,"error",h)}c&&(d.referrerPolicy="no-referrer");d.src=a;k.google_image_requests.push(d)};var p=function(a,b,c){if("array"==e(b))for(var d=0;d<b.length;d++)p(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};var v=function(a,b,c){q(g.hidden)?(this.a="hidden",this.f="visibilitychange"):q(g.mozHidden)?(this.a="mozHidden",this.f="mozvisibilitychange"):q(g.msHidden)?(this.a="msHidden",this.f="msvisibilitychange"):q(g.webkitHidden)&&(this.a="webkitHidden",this.f="webkitvisibilitychange");this.h=a;this.b=!1;this.c=-1;this.i=b;this.j=c;g[this.a]&&r(this,2);t(this);u(this)},t=function(a){m(g,a.f,function(){if(g[a.a])a.b&&(a.b=!1,a.c=f(),r(a,0));else{if(-1!=a.c){var b=f()-a.c;0<b&&(a.c=-1,r(a,1,b))}r(a,3)}})},u=function(a){m(k,"click",function(b){return a.g(b)})};v.prototype.g=function(){var a=this;this.b=!0;k.setTimeout(function(){a.b=!1},5E3)};v.prototype.handleClick=v.prototype.g;var r=function(a,b,c){var d={gqid:a.i,qqid:a.j};0==b&&(d["return"]=0);1==b&&(d["return"]=1,d.timeDelta=c);2==b&&(d.bgload=1);3==b&&(d.fg=1);b=[];for(var h in d)p(h,d[h],b);n(a.h+"&label=window_focus&"+b.join("&"))},q=function(a){return"undefined"!==typeof a};var w=function(a,b,c){return new v(a,b,c)},x=["wfocusnhinit"],y=this;x[0]in y||"undefined"==typeof y.execScript||y.execScript("var "+x[0]);for(var z;x.length&&(z=x.shift());){var A;if(A=!x.length)A=void 0!==w;A?y[z]=w:y[z]&&y[z]!==Object.prototype[z]?y=y[z]:y=y[z]={}}var B=k.google_wf_async,C;if(C=!(!B||!B.call))C="function"===typeof B;C&&k.google_wf_async();}).call(this);
