(function(_){var ba,ea,fa,ha,ia,ka,la,na,pa,ua,va,wa,Ca,Da;ba=function(a){return function(){return _.aa[a].apply(this,arguments)}};ea=function(a,b){var c=_.k(b,ca,16);c&&_.n(c,12,!1)&&_.n(b,5,!1)&&da(a,{backgroundColor:"transparent",backgroundImage:"none"})};_.aa=[];fa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};ha="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;ia=function(){ia=function(){};ha.Symbol||(ha.Symbol=ka)};ka=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();_.ma=function(){ia();var a=ha.Symbol.iterator;a||(a=ha.Symbol.iterator=ha.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&fa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});_.ma=function(){}};la=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};na=function(a){_.ma();a={next:a};a[ha.Symbol.iterator]=function(){return this};return a};_.oa=function(a){_.ma();var b=a[window.Symbol.iterator];return b?b.call(a):la(a)};pa=function(a){if(a){for(var b=ha,c=["Promise"],d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&fa(b,c,{configurable:!0,writable:!0,value:a})}};pa(function(a){function b(){this.b=null}function c(a){return a instanceof e?a:new e(function(b){b(a)})}if(a)return a;b.prototype.c=function(a){null==this.b&&(this.b=[],this.l());this.b.push(a)};b.prototype.l=function(){var a=this;this.g(function(){a.v()})};var d=ha.setTimeout;b.prototype.g=function(a){d(a,0)};b.prototype.v=function(){for(;this.b&&this.b.length;){var a=this.b;this.b=[];for(var b=0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(m){this.o(m)}}}this.b=null};b.prototype.o=function(a){this.g(function(){throw a;})};var e=function(a){this.c=0;this.g=void 0;this.b=[];var b=this.l();try{a(b.resolve,b.reject)}catch(p){b.reject(p)}};e.prototype.l=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.D),reject:a(this.o)}};e.prototype.D=function(a){if(a===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof e)this.G(a);else{a:switch(typeof a){case "object":var b=null!=a;break a;case "function":b=!0;break a;default:b=!1}b?this.C(a):this.v(a)}};e.prototype.C=function(a){var b=void 0;try{b=a.then}catch(p){this.o(p);return}"function"==typeof b?this.J(b,a):this.v(a)};e.prototype.o=function(a){this.A(2,a)};e.prototype.v=function(a){this.A(1,a)};e.prototype.A=function(a,b){if(0!=this.c)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.c);this.c=a;this.g=b;this.B()};e.prototype.B=function(){if(null!=this.b){for(var a=0;a<this.b.length;++a)f.c(this.b[a]);this.b=null}};var f=new b;e.prototype.G=function(a){var b=this.l();a.ma(b.resolve,b.reject)};e.prototype.J=function(a,b){var c=this.l();try{a.call(b,c.resolve,c.reject)}catch(m){c.reject(m)}};e.prototype.then=function(a,b){function c(a,b){return"function"==typeof a?function(b){try{d(a(b))}catch(Ba){f(Ba)}}:b}var d,f,g=new e(function(a,b){d=a;f=b});this.ma(c(a,d),c(b,f));return g};e.prototype["catch"]=function(a){return this.then(void 0,a)};e.prototype.ma=function(a,b){function c(){switch(d.c){case 1:a(d.g);break;case 2:b(d.g);break;default:throw Error("Unexpected state: "+d.c);}}var d=this;null==this.b?f.c(c):this.b.push(c)};e.resolve=c;e.reject=function(a){return new e(function(b,c){c(a)})};e.race=function(a){return new e(function(b,d){for(var e=_.oa(a),f=e.next();!f.done;f=e.next())c(f.value).ma(b,d)})};e.all=function(a){var b=_.oa(a),d=b.next();return d.done?c([]):new e(function(a,e){function f(b){return function(c){g[b]=c;l--;0==l&&a(g)}}var g=[],l=0;do g.push(void 0),l++,c(d.value).ma(f(g.length-1),e),d=b.next();while(!d.done)})};return e});var qa;if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var ra;a:{var sa={Ja:!0},ta={};try{ta.__proto__=sa;ra=ta.Ja;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}ua=qa;va="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b};wa=function(a,b){a.prototype=va(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.N=b.prototype};_.q=this;_.u=function(a){return void 0!==a};_.v=function(a){return"string"==typeof a};_.w=function(a,b,c){a=a.split(".");c=c||_.q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&_.u(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}};_.xa=function(){};_.ya=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.za=function(a){return"array"==_.ya(a)};_.Aa=function(a){return"function"==_.ya(a)};Ca=function(a,b,c){return a.call.apply(a.bind,arguments)};Da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.y=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?_.y=Ca:_.y=Da;return _.y.apply(null,arguments)};_.z=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};_.A=Date.now||function(){return+new Date};_.B=function(a,b){function c(){}c.prototype=b.prototype;a.N=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Vb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var Ga;_.Ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(_.v(a))return _.v(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.Fa=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Ga=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=_.v(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var l=f[g];b.call(void 0,l,g,a)&&(d[e++]=l)}return d};_.Ha=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=_.v(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};_.Ia=function(a,b){b=(0,_.Ea)(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c};_.Ja=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};_.Ka=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var La;a:{var Ma=_.q.navigator;if(Ma){var Na=Ma.userAgent;if(Na){La=Na;break a}}La=""}var C=function(a){return-1!=La.indexOf(a)};var Oa=function(){return C("iPhone")&&!C("iPod")&&!C("iPad")};var Pa=function(a){Pa[" "](a);return a};Pa[" "]=_.xa;_.Qa=function(a,b){try{return Pa(a[b]),!0}catch(c){}return!1};var Ta,Za,$a;_.Ra=C("Opera");_.Sa=C("Trident")||C("MSIE");Ta=C("Edge");_.Ua=C("Gecko")&&!(-1!=La.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge");_.Va=-1!=La.toLowerCase().indexOf("webkit")&&!C("Edge");_.Wa=C("Android");_.Xa=Oa();_.Ya=C("iPad");Za=function(){var a=_.q.document;return a?a.documentMode:void 0};a:{var ab="",bb=function(){var a=La;if(_.Ua)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ta)return/Edge\/([\d\.]+)/.exec(a);if(_.Sa)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Va)return/WebKit\/(\S+)/.exec(a);if(_.Ra)return/(?:Version)[ \/]?(\S+)/.exec(a)}();bb&&(ab=bb?bb[1]:"");if(_.Sa){var cb=Za();if(null!=cb&&cb>(0,window.parseFloat)(ab)){$a=String(cb);break a}}$a=ab}_.db=$a;var fb=_.q.document;_.eb=fb&&_.Sa?Za()||("CSS1Compat"==fb.compatMode?(0,window.parseInt)(_.db,10):5):void 0;_.gb=Oa()||C("iPod");_.ib=C("iPad");_.jb=C("Android")&&!((C("Chrome")||C("CriOS"))&&!C("Edge")||C("Firefox")||C("Opera")||C("Silk"));var kb,lb,ob;_.D=function(){};kb="function"==typeof window.Uint8Array;_.E=function(a,b,c){a.b=null;b||(b=[]);a.A=void 0;a.l=-1;a.c=b;a:{if(b=a.c.length){--b;var d=a.c[b];if(d&&"object"==typeof d&&!_.za(d)&&!(kb&&d instanceof window.Uint8Array)){a.o=b-a.l;a.g=d;break a}}a.o=Number.MAX_VALUE}a.v={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.o)d+=a.l,a.c[d]=a.c[d]||lb;else{var e=a.o+a.l;a.c[e]||(a.g=a.c[e]={});a.g[d]=a.g[d]||lb}};lb=[];_.nb=function(a,b){if(b<a.o){b+=a.l;var c=a.c[b];return c===lb?a.c[b]=[]:c}if(a.g)return c=a.g[b],c===lb?a.g[b]=[]:c};ob=function(a,b){if(b<a.o){b+=a.l;var c=a.c[b];return c===lb?a.c[b]=[]:c}c=a.g[b];return c===lb?a.g[b]=[]:c};_.n=function(a,b,c){a=_.nb(a,b);return null==a?c:a};_.k=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=_.nb(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};_.pb=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=ob(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==lb&&(b=a.b[c]=[]);return b};_.qb=function(a){if(a.b)for(var b in a.b){var c=a.b[b];if(_.za(c))for(var d=0;d<c.length;d++)c[d]&&_.qb(c[d]);else c&&_.qb(c)}return a.c};var sb=function(a){_.E(this,a,rb)},rb,ub;_.B(sb,_.D);rb=[1,23];ub=function(a){return _.pb(a,_.tb,1)};_.tb=function(a){_.E(this,a,vb)};_.B(_.tb,_.D);var vb=[20,33];_.tb.prototype.getType=function(){return _.n(this,1,0)};var ca=function(a){_.E(this,a,null)};_.B(ca,_.D);_.wb=function(a){_.E(this,a,null)};_.B(_.wb,_.D);var xb;xb={qb:0,Qb:1,Rb:45,Sb:46,Eb:48,URL:2,ib:3,Za:4,Pb:5,Jb:7,wb:8,fb:9,yb:6,Bb:34,rb:13,$a:14,xb:15,zb:16,Ab:40,Nb:47,Ub:29,nb:30,Ob:49,Fb:17,jb:18,pb:19,ob:20,Lb:23,cb:24,Ib:25,Hb:26,eb:27,Gb:28,VIDEO:39,Tb:31,lb:32,bb:33,sb:35,Cb:36,ab:37,kb:38,Db:42,Kb:43,Mb:44,gb:50,tb:1E3,ub:1001,vb:1002};_.yb=[16,47,49,18,27,28,39];var zb=function(a,b,c,d,e){c="&"+b+"="+c;var f=a.indexOf("&"+d+"=");c=0>f?a+c:a.substring(0,f)+c+a.substring(f);return 2E3<c.length?_.u(e)?zb(a,b,e,d,void 0):a:c};_.F=window.document;_.G=window;var Cb,Ab;_.I=function(){this.c="";this.l=Ab};_.I.prototype.g=!0;_.I.prototype.b=function(){return this.c};_.Bb=function(a){if(a instanceof _.I&&a.constructor===_.I&&a.l===Ab)return a.c;_.ya(a);return"type_error:SafeUrl"};Cb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;_.Eb=function(a){if(a instanceof _.I)return a;a="object"==typeof a&&a.g?a.b():String(a);Cb.test(a)||(a="about:invalid#zClosurez");return _.Db(a)};Ab={};_.Db=function(a){var b=new _.I;b.c=a;return b};_.Db("about:blank");var Fb=function(a,b){b=b instanceof _.I?b:_.Eb(b);a.href=_.Bb(b)};var Gb=function(a,b){this.b=_.u(a)?a:0;this.c=_.u(b)?b:0};Gb.prototype.ceil=function(){this.b=Math.ceil(this.b);this.c=Math.ceil(this.c);return this};Gb.prototype.floor=function(){this.b=Math.floor(this.b);this.c=Math.floor(this.c);return this};Gb.prototype.round=function(){this.b=Math.round(this.b);this.c=Math.round(this.c);return this};var Hb=function(a){try{return!!a&&null!=a.location.href&&_.Qa(a,"foo")}catch(b){return!1}},Ib=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};_.J=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};_.Jb=function(a,b,c){var d=!1,e=!1;e=void 0===e?!1:e;d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var f=a.document.createElement("img");if(c||d){var g=function(b){c&&c(b);d&&_.Ia(a.google_image_requests,f);f.removeEventListener&&f.removeEventListener("load",g,!1);f.removeEventListener&&f.removeEventListener("error",g,!1)};_.J(f,"load",g);_.J(f,"error",g)}e&&(f.referrerPolicy="no-referrer");f.src=b;a.google_image_requests.push(f)};var Kb,Lb,Mb,da;Kb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};Lb=!!window.google_async_iframe_id;Mb=Lb&&window.parent||window;_.Nb=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};_.Ob=function(a,b,c){c=void 0===c?_.F:c;switch(a){case 2:return c.getElementsByClassName(b);case 3:return c.getElementsByTagName(b)}return[]};_.K=function(a,b,c){c=void 0===c?_.F:c;switch(a){case 1:if(c.getElementById)return c.getElementById(b);break;case 2:case 3:if(a=_.Ob(a,b,c),0<a.length)return a[0]}return null};da=function(a,b){a&&Kb(b,function(b,d){a.style[d]=b})};_.Pb=function(a){var b=/[?&]adurl=([^&]+)/.exec(a);if(!b||!/[?&]ae=1(&|$)/.test(a))return null;try{return{wa:a+"&act=1",K:(0,window.decodeURIComponent)(b[1])}}catch(c){return null}};window.google={};var Qb=function(a,b,c,d){b=c(d,b);if(!(b instanceof Array))return a;(0,_.Fa)(b,function(b){if(2!==b.length&&3!==b.length)return a;a=zb(a,b[0],b[1],"adurl",b[2])});return a};var Rb=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var Sb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,Tb=function(a,b){this.b=a;this.c=b},Ub=function(a,b){this.url=a;this.Aa=!!b;this.depth=null};var Vb=function(){this.g="&";this.l=_.u(void 0)?void 0:"trn";this.o=!1;this.c={};this.v=0;this.b=[]},Wb=function(a,b){var c={};c[a]=b;return[c]},Yb=function(a,b,c,d,e){var f=[];Ib(a,function(a,l){(a=Xb(a,b,c,d,e))&&f.push(l+"="+a)});return f.join(b)},Xb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Xb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(Yb(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))},Zb=function(a,b,c,d){a.b.push(b);a.c[b]=Wb(c,d)},ac=function(a,b,c,d){b=b+"//"+c+d;var e=$b(a)-d.length;if(0>e)return"";a.b.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.b.length;f++)for(var g=a.b[f],l=a.c[g],p=0;p<l.length;p++){if(!e){d=null==d?g:d;break}var m=Yb(l[p],a.g,",$");if(m){m=c+m;if(e>=m.length){e-=m.length;b+=m;c=a.g;break}else a.o&&(c=e,m[c-1]==a.g&&--c,b+=m.substr(0,c),c=a.g,e=0);d=null==d?g:d}}f="";a.l&&null!=d&&(f=c+a.l+"="+d);return b+f},$b=function(a){if(!a.l)return 4E3;var b=1,c;for(c in a.c)b=c.length>b?c.length:b;return 4E3-a.l.length-b-a.g.length-1};var bc=function(a,b,c,d,e,f){if((d?a.o:Math.random())<(e||a.b))try{if(c instanceof Vb)var g=c;else g=new Vb,Ib(c,function(a,b){var c=g,d=c.v++;a=Wb(b,a);c.b.push(d);c.c[d]=a});var l=ac(g,a.l,a.c,a.g+b+"&");l&&("undefined"===typeof f?_.Jb(_.q,l,void 0):_.Jb(_.q,l,f))}catch(p){}};var cc=null;var dc=function(){var a=_.q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,_.A)()},ec=function(){var a=void 0===a?_.q:a;return(a=a.performance)&&a.now?a.now():null};var fc=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};var L=_.q.performance,gc=!!(L&&L.mark&&L.measure&&L.clearMarks),hc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=gc){var b;if(null===cc){cc="";try{a="";try{a=_.q.top.location.hash}catch(c){a=_.q.location.hash}a&&(cc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=cc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}),jc=function(){var a=ic;this.events=[];this.c=a||_.q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=hc()||(null!=b?b:1>Math.random())},kc=function(a){a&&L&&hc()&&(L.clearMarks("goog_"+a.uniqueId+"_start"),L.clearMarks("goog_"+a.uniqueId+"_end"))};jc.prototype.start=function(a,b){if(!this.b)return null;var c=ec()||dc();a=new fc(a,b,c);b="goog_"+a.uniqueId+"_start";L&&hc()&&L.mark(b);return a};var qc;_.nc=function(){var a=lc;this.g=mc;this.l=this.b;this.c=void 0===a?null:a};_.nc.prototype.pinger=ba(0);qc=function(a,b,c,d){try{if(a.c&&a.c.b){var e=a.c.start(b.toString(),3);var f=c();var g=a.c;c=e;if(g.b&&"number"==typeof c.value){var l=ec()||dc();c.duration=l-c.value;var p="goog_"+c.uniqueId+"_end";L&&hc()&&L.mark(p);g.b&&g.events.push(c)}}else f=c()}catch(m){g=!0;try{kc(e),g=(d||a.l).call(a,b,new oc(pc(m),m.fileName,m.lineNumber),void 0,void 0)}catch(r){a.b(217,r)}if(!g)throw m;}return f};_.sc=function(a,b,c){var d=rc;return function(e){for(var f=[],g=0;g<arguments.length;++g)f[g]=arguments[g];return qc(d,a,function(){return b.apply(c,f)},void 0)}};_.nc.prototype.b=function(a,b,c,d,e){e=e||"jserror";try{var f=new Vb;f.o=!0;Zb(f,1,"context",a);b.error&&b.meta&&b.id||(b=new oc(pc(b),b.fileName,b.lineNumber));b.msg&&Zb(f,2,"msg",b.msg.substring(0,512));b.file&&Zb(f,3,"file",b.file);0<b.line&&Zb(f,4,"line",b.line);var g=b.meta||{};if(d)try{d(g)}catch(jd){}b=[g];f.b.push(5);f.c[5]=b;d=_.q;b=[];g=null;do{var l=d;if(Hb(l)){var p=l.location.href;g=l.document&&l.document.referrer||null}else p=g,g=null;b.push(new Ub(p||""));try{d=l.parent}catch(jd){d=null}}while(d&&l!=d);p=0;for(var m=b.length-1;p<=m;++p)b[p].depth=m-p;l=_.q;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var r=b[m];r.url||(r.url=l.location.ancestorOrigins[m-1]||"",r.Aa=!0)}var t=new Ub(_.q.location.href,!1);l=null;var x=b.length-1;for(r=x;0<=r;--r){var H=b[r];!l&&Sb.test(H.url)&&(l=H);if(H.url&&!H.Aa){t=H;break}}H=null;var ph=b.length&&b[x].url;0!=t.depth&&ph&&(H=b[x]);var Ba=new Tb(t,H);Ba.c&&Zb(f,6,"top",Ba.c.url||"");Zb(f,7,"url",Ba.b.url||"");bc(this.g,e,f,!1,c)}catch(jd){try{bc(this.g,e,{context:"ecmserr",rctx:a,msg:pc(jd),url:Ba&&Ba.b.url},!1,c)}catch(Qj){}}return!0};var pc=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},oc=function(a,b,c){Rb.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};wa(oc,Rb);var mc,rc,vc;if(Lb&&!Hb(Mb)){var tc="."+_.F.domain;try{for(;2<tc.split(".").length&&!Hb(Mb);)_.F.domain=tc=tc.substr(tc.indexOf(".")+1),Mb=window.parent}catch(a){}Hb(Mb)||(Mb=window)}var ic=Mb,lc=new jc,uc=function(){if(!ic.google_measure_js_timing){var a=lc;a.b=!1;a.events!=a.c.google_js_reporting_queue&&(hc()&&(0,_.Fa)(a.events,kc),a.events.length=0)}};mc=new function(){var a=void 0===a?_.G:a;this.l="http:"===a.location.protocol?"http:":"https:";this.c="pagead2.googlesyndication.com";this.g="/pagead/gen_204?id=";this.b=.01;this.o=Math.random()};rc=new _.nc;"complete"==ic.document.readyState?uc():lc.b&&_.J(ic,"load",function(){uc()});vc=rc.b;_.wc=function(a,b,c){bc(mc,a,b,"jserror"!=a,c,void 0)};var xc=/^((market|itms|intent|itms-appss):\/\/)/i,yc=function(a){var b;a instanceof _.I||!xc.test(a)?b=a:b=_.Db(a);return b};var zc=function(a,b){this.b=a;this.C=b;this.o=[];this.g=[];this.A={};this.c={};this.v=this.l=!1;this.B=-1},Ac=function(a,b,c){var d=b=b.getAttribute("data-original-click-url");if(d)for(var e=0;e<a.o.length;e++)d=Qb(d,b,a.o[e],c);return d},Bc=function(a,b){(/[?&]ae=1(&|$)/.test(b.href)||_.n(a.b,38,!1))&&qc(rc,446,function(){var c=Date.now(),d;if(d=c-a.B>_.n(a.b,39,0))a:{if(d=_.Pb(b.href)){var e=d.wa+"&ri=1"+(b.getAttribute("data-cts")?"&cts="+(new Date).getTime():"");if(window.navigator.sendBeacon){if(window.navigator.sendBeacon(e,"")){Fb(b,yc(d.K));d=!0;break a}Fb(b,yc(b.href+"&ri=2"))}else Fb(b,yc(b.href+"&ri=16"))}d=!1}d&&(a.B=c)},vc)},Cc=function(a,b,c,d){if(0!=a.g.length&&(d.preventDefault?!d.defaultPrevented:!1!==d.returnValue)){var e=1==d.which&&!d.ctrlKey&&"_blank"!=b.target&&"_new"!=b.target;e&&_.Nb(d);for(var f=[],g={},l=0;l<a.g.length;g={url:g.url},l++)if(g.url=a.g[l](c),g.url){var p=new window.Promise(function(a){return function(b){_.Jb(_.G,a.url,b)}}(g));f.push(p)}c=window.Promise.all(f);f=new window.Promise(function(a){window.setTimeout(a,2E3)});e&&window.Promise.race([c,f]).then((0,_.y)(zc.prototype.G,a,b,d))}};zc.prototype.G=function(a,b){this.l=!0;var c=!1;if(b.target)a:{c=b.target;var d=b.button,e=b.ctrlKey,f=b.shiftKey,g=b.metaKey,l=b.altKey,p=new Gb(b.x,b.y);if(window.document.createEvent){var m=window.document.createEvent("MouseEvents");m.initMouseEvent("click",!0,!0,null,0,p.b,p.c,p.b,p.c,e,l,f,g,d,null)}else if(window.document.createEventObject)m=window.document.createEventObject(),m.Wb="onclick",m.button=d,m.ctrlKey=e,m.altKey=l,m.shiftKey=f,m.metaKey=g,m.clientX=p.b,m.clientY=p.c,m.screenX=p.b,m.screenY=p.c;else{c=!1;break a}c.dispatchEvent?(c.dispatchEvent(m),c=!0):c=!1}!a.href||c||Dc(this,a,b)||(Bc(this,a),_.G.top.location=a.href)};zc.prototype.D=function(a,b,c,d){if(this.l)this.l=!1;else{d||(d=_.G.event);this.c[c][b].forEach(function(a){a(d)});if(a.href){var e=Ac(this,a,d.type);e&&(a.href=e)}"click"==c&&(Cc(this,a,b,d),(d.preventDefault?d.defaultPrevented:!1===d.returnValue)||Dc(this,a,d)||Bc(this,a))}};var Ec=function(a,b,c,d){a.c[d]||(a.c[d]={});a.c[d][c]||(a.c[d][c]=[]);_.J(b,d,(0,_.y)(a.D,a,b,c,d))},Dc=function(a,b,c){var d=b.href;if(a.C){if(a.C.b(b,c,a.b,a.v))return!0}else if(_.q.googdlu&&(_.q.googdlu.tryOpenPlayStore&&_.q.googdlu.tryOpenPlayStore(c,d,_.n(a.b,15,""))||_.q.googdlu.tryOpenItunesStore&&_.q.googdlu.tryOpenItunesStore(c,d,_.n(a.b,15,""))))return!0;return _.n(a.b,31,!1)&&_.n(a.b,30,!1)&&_.n(a.b,28,"")&&_.q.googdlu&&_.q.googdlu.tryOpenAppUrl?(_.q.googdlu.tryOpenAppUrl(c,d,_.n(a.b,32,""),_.n(a.b,28,"")),!0):!1};var Fc;Fc=function(a){if(a.classList)return a.classList;a=a.className;return _.v(a)&&a.match(/\S+/g)||[]};_.Gc=function(a,b){a.classList?a.classList.add(b):(a.classList?a.classList.contains(b):0<=(0,_.Ea)(Fc(a),b))||(a.className+=0<a.className.length?" "+b:b)};_.Hc=function(a,b){if(a.classList)a.classList.remove(b);else if(a.classList?a.classList.contains(b):0<=(0,_.Ea)(Fc(a),b))a.className=Ga(Fc(a),function(a){return a!=b}).join(" ")};var Ic=function(a){_.q.setTimeout(function(){throw a;},0)},Jc,Kc=function(){var a=_.q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=(0,_.y)(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.u(c.next)){c=c.next;var a=c.xa;c.xa=null;a()}};return function(a){d.next={xa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.q.setTimeout(a,0)}};var Lc=function(a,b){this.g=a;this.l=b;this.c=0;this.b=null};Lc.prototype.get=function(){if(0<this.c){this.c--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};var Mc=function(){this.c=this.b=null},Oc=new Lc(function(){return new Nc},function(a){a.reset()});Mc.prototype.add=function(a,b){var c=Oc.get();c.set(a,b);this.c?this.c.next=c:this.b=c;this.c=c};var Qc=function(){var a=Pc,b=null;a.b&&(b=a.b,a.b=a.b.next,a.b||(a.c=null),b.next=null);return b},Nc=function(){this.next=this.c=this.b=null};Nc.prototype.set=function(a,b){this.b=a;this.c=b;this.next=null};Nc.prototype.reset=function(){this.next=this.c=this.b=null};var Uc=function(a){Rc||Sc();Tc||(Rc(),Tc=!0);Pc.add(a,void 0)},Rc,Sc=function(){if(_.q.Promise&&_.q.Promise.resolve){var a=_.q.Promise.resolve(void 0);Rc=function(){a.then(Vc)}}else Rc=function(){var a=Vc;!_.Aa(_.q.setImmediate)||_.q.Window&&_.q.Window.prototype&&!C("Edge")&&_.q.Window.prototype.setImmediate==_.q.setImmediate?(Jc||(Jc=Kc()),Jc(a)):_.q.setImmediate(a)}},Tc=!1,Pc=new Mc,Vc=function(){for(var a;a=Qc();){try{a.b.call(a.c)}catch(c){Ic(c)}var b=Oc;b.l(a);100>b.c&&(b.c++,a.next=b.b,b.b=a)}Tc=!1};_.M=function(){this.l=this.l;this.g=this.g};_.M.prototype.l=!1;_.M.prototype.ra=ba(1);_.M.prototype.I=ba(3);_.Wc=function(a){_.M.call(this);this.A=1;this.o=[];this.v=0;this.b=[];this.c={};this.C=!!a};_.B(_.Wc,_.M);_.Wc.prototype.subscribe=function(a,b,c){var d=this.c[a];d||(d=this.c[a]=[]);var e=this.A;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.A=e+3;d.push(e);return e};_.Wc.prototype.D=function(a){var b=this.b[a];b&&(b=this.c[b],0!=this.v?(this.o.push(a),this.b[a+1]=_.xa):(b&&_.Ia(b,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2]))};_.Wc.prototype.B=function(a,b){var c=this.c[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var g=c[e];Xc(this.b[g+1],this.b[g+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.v--,0<this.o.length&&0==this.v)for(;c=this.o.pop();)this.D(c)}}}};var Xc=function(a,b,c){Uc(function(){a.apply(b,c)})};_.Wc.prototype.I=ba(2);var N=function(a,b,c,d){this.o=new _.Wc;this.c=a;this.c[0]=[b];this.l=[];this.g=new zc(c,d);this.b=c;b=_.n(this.b,22,"");c=_.n(this.b,23,"");b&&c&&d&&(d.canOpenIntents([{url:b,id:b,H:c}],(0,_.y)(this.Da,this))||d.canOpenURLs(b,(0,_.y)(this.Da,this)));(d=_.K(1,"common_15click_anchor"))?(a[20]=[d],Yc(this,20)):(d=_.Ja(_.Ob(2,"common_15click_anchor")),0<d.length&&(a[20]=d,Yc(this,20)))},Yc,$c;_.h=N.prototype;_.h.Da=function(a,b){b=(a=_.n(this.b,22,""))&&b?b[a]:!1;this.g.v=!!b;this.F(0,"app_installed",!b)};_.h.navigationAdPieces=function(){return this.l};_.h.oa=function(){return!0};_.h.has=function(a){return(a=this.c[a])&&0<a.length};_.h.listen=function(a,b,c){var d=this.c[a];if(d){var e=this.g;c=_.z(c,a,this);var f=("click"==b||"mousedown"==b)&&e.A[a];e.c[b]||(e.c[b]={});e.c[b][a]||(e.c[b][a]=[]);e.c[b][a].push(c);if(!f)for(a=0;a<d.length;a++)_.J(d[a],b,c)}};_.h.F=function(a,b,c){if(b){a=this.getElementsByAdPiece(a);for(var d=0;d<a.length;d++)c?_.Hc(a[d],b):_.Gc(a[d],b)}};_.h.getElementsByAdPiece=function(a){return this.c[a]?this.c[a]:[]};_.Zc=function(a,b,c){a=a.getElementsByAdPiece(b);if(c)for(b=0;b<a.length;b++){var d=a[b].getAttribute(c);if(d)return d}return null};Yc=function(a,b){if(a.c[b]&&a.oa(b)){a.l.push(b);var c=a.g;a=a.c[b];for(var d=0;d<a.length;d++){var e=a[d];e.href&&e.setAttribute("data-original-click-url",e.href);Ec(c,e,b,"mousedown");Ec(c,e,b,"click")}c.A[b]=!0}};$c=function(a,b){a=a.getElementsByAdPiece(b);for(b=0;b<a.length;b++)if(!a[b].href)return!1;return!0};_.h=N.prototype;_.h.creativeConversionUrl=function(){return _.n(this.b,6,"")};_.h.redirectUrl=function(){return _.n(this.b,8,"")};_.h.getIndex=function(){return _.n(this.b,2,0)};_.h.listenOnObject=function(a,b){this.o.subscribe(a,b)};_.h.fireOnObject=function(a,b){this.o.B(a,b)};var ad,bd;ad=function(a){this.A=new _.Wc;this.o=null;this.g=[];this.b=a;this.l=[];this.v=!1;this.c=null};bd=function(a){a=new ad(new sb(a));_.w("adSlot",a,void 0);return a};_.cd=function(){var a=_.q.adSlot;return a?a:(rc.b("hdrNDslt",Error("no adslot"),void 0,void 0),bd(null))};_.h=ad.prototype;_.h.forEachAd=function(a){(0,_.Fa)(this.g,a)};_.h.pa=function(a){this.g.push(a)};_.h.Oa=function(a){if(a=_.K(1,a))this.o=a;if(0==this.g.length)_.q.css=null;else{for(a=0;a<this.l.length;++a)this.l[a]();this.v=!0}};_.h.listenOnObject=function(a,b){this.A.subscribe(a,b)};_.h.fireOnObject=function(a,b){this.A.B(a,b)};_.h.registerFinalizeCallback=function(a){this.v?a():this.l.push(a)};_.h.getSerializedAdSlotData=function(){return _.qb(this.b)};_.h.getAdsLength=function(){return this.g.length};_.h.getAd=function(a){return 0<=a&&a<this.g.length&&this.g[a].getIndex()==a?this.g[a]:null};_.h.getContainer=function(){return this.o};_.h.openSystemBrowser=function(a){return this.c?(this.c.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0}),!0):!1};_.h.openAttribution=function(a){return this.c?(this.c.openSystemBrowser(a,{useFirstPackage:!0,useRunningProcess:!0,useCustomTabs:!0}),!0):!1};var ed=function(a,b,c){N.call(this,a,b,c,_.cd().c);for(a=0;a<dd.length;a++)Yc(this,dd[a])};wa(ed,N);var fd=function(a,b){var c=O,d={};if(!b)return null;d[0]=[b];Kb(xb,function(a){c[a]&&(d[a]=_.Ja(_.Ob(2,c[a],b)))});return new ed(d,b,a)};ed.prototype.oa=function(a){return $c(this,a)||4==a};var gd=function(a){_.n(a,19,!1)&&(0,_.Fa)(ob(a,20),function(a){_.Jb(_.G,a,void 0)})};ed.prototype.v=function(a,b){return this.oa(b)?a:""};var dd=[1,2,3,4,8,6,40,24,33,25,36,37,38,9];var hd="UNKNOWN",id="UNKNOWN",kd=null,ld=function(a,b,c){b.gqid=hd;b.qqid=id;b.com=a;_.wc("glaurung",b,c)},P={},O=(P[1]="ad-title",P[2]="ad-url",P[3]="ad-body",P[4]="ad-button",P[8]="ad-favicon",P[6]="ad-image",P[26]="ad-price",P[23]="ad-reviews",P[43]="ad-rating-stars",P[44]="ad-reviews-count",P[24]="ad-app-store-image",P[25]="ad-promo-headline",P[33]="ad-app-icon",P[16]="ad-image-gallery",P[40]="ad-image-gallery-image",P[36]="ad-logo",P[37]="ad-advertiser",P[38]="ad-call-to-action",P[39]="ad-video",P[42]="ad-logo-wrapper",P[9]="ad-background",P),md=function(a,b,c){var d=a.b,e=_.k(d,ca,16);if(e&&_.n(e,1,!1)){e=O;for(var f in e)delete e[f];O[1]="title-link";O[2]="url-link";O[3]="body-link";O[4]="button-link";O[8]="favicon-link";O[6]="image-link";O[26]="price";O[23]="reviews";O[43]="rating-stars";O[44]="reviews-count";O[24]="app-store";O[25]="promo-headline";O[33]="app-icon";O[16]="image-gallery";O[40]="image-gallery-image-link";O[36]="logo-link";O[37]="advertiser-link";O[38]="call-to-action-link";O[39]="video";O[42]="logo";O[50]="badge-box";O[9]="ad-background";_.K(2,"app-store-link",b)&&(O[24]="app-store-link");_.K(2,"app-icon-link",b)&&(O[33]="app-icon-link");_.K(2,"promo-headline-link",b)&&(O[25]="promo-headline-link")}f=_.K(1,"adunit",b);e=_.K(1,"ads",b);if(!f||!e)return 1;var g={};0==_.n(d,32,0)?(g.width=_.n(d,2,0)+"px",g.height=_.n(d,3,0)+"px",g.position="absolute",g.top="0",g.left="0"):(g.width="100%",g.height="100%");g.overflow="hidden";da(f,g);ea(f,d);ea(e,d);try{c(e,a)}catch(m){return _.n(d,13,!1)&&(kd=m),2}c=0;d=ub(d);for(f=0;f<d.length;f++){g=d[f];var l="taw"+_.n(g,2,0);e=_.K(1,l,b);if(!e)return 3;e=fd(g,e);if(!e)return 1;_.G.registerAd?_.G.registerAd(e,l):c=4;_.n(g,11,!1)&&_.G.initAppPromo&&_.G.initAppPromo(e,a);gd(g);if(_.n(g,19,!1))if(l=ob(g,33),0<l.length)for(g=0;g<l.length;g++){var p=(0,_.y)(ed.prototype.v,e,l[g]);e.g.g.push(p)}else g=(0,_.y)(ed.prototype.v,e,_.n(g,21,"")),e.g.g.push(g);a.pa(e)}return c};var nd=function(a,b,c){var d=[];d[0]=[c];d[15]=[b];(b=_.K(1,"abgc"))&&(d[27]=[b]);(b=_.K(1,"cbc"))&&(d[28]=[b]);N.call(this,d,c,a,_.cd().c);Yc(this,15)};wa(nd,N);var od=function(a,b){var c={};c[0]=[b];N.call(this,c,b,a,_.cd().c)};wa(od,N);var qd=function(a,b,c){N.call(this,a,b,c,_.cd().c);for(a=0;a<pd.length;a++)Yc(this,pd[a]);this.listen(4,"mouseover",(0,_.y)(this.F,this,0,"onhoverbg",!1));this.listen(4,"mouseout",(0,_.y)(this.F,this,0,"onhoverbg",!0))};wa(qd,N);qd.prototype.oa=function(a){return $c(this,a)||4==a};var Q={},rd=(Q[1]="rhtitle",Q[45]="rhtitleline1",Q[46]="rhtitleline2",Q[48]="rhlongtitle",Q[3]="rhbody",Q[2]="rhurl",Q[4]="rhbutton",Q[8]="rhfavicon",Q[14]="rhaddress",Q[6]="rhimage",Q[34]="rhimagetemplate",Q[49]="rh-scrollflow",Q[16]="rhimagegallery",Q[47]="rhreviewgallery",Q[29]="rhviewimagegallery",Q[30]="rhcloseimagegalleryview",Q[31]="rhtrydemobutton",Q[32]="rhclosetrydemoview",Q[39]="rhvideo",Q[9]="rhbackground",Q[13]="rh-icore-empty",Q[5]="rhsitelink",Q[7]="rhradlink",Q[17]="rh-multiframe",Q[18]="rh-box-breadcrumbs",Q[23]="rhstarratings",Q[24]="rhstoreicon",Q[25]="rhpromotext",Q[26]="rhprice",Q[27]="abgc",Q[28]="cbc",Q[35]="rhdemocountdowntimer",Q[36]="rhlogo",Q[1001]="rhoverlap-imagegallery",Q[1002]="rhoverlap-trydemo",Q),pd=[1,45,46,48,2,4,5,7,8,3,9,6,14,15,34,26,24,36];ad.prototype.forEachAd=ad.prototype.forEachAd;ad.prototype.addAd=ad.prototype.pa;ad.prototype.finalize=ad.prototype.Oa;_.w("buildAdSlot",bd,void 0);_.w("buildGlaurungAds",function(a,b,c){var d=(new Date).getTime(),e=1,f=!1;kd=null;try{f=_.n(a.b,13,!1),hd=_.n(a.b,8,""),id=_.n(a.b,7,""),e=md(a,b,c)}catch(g){f&&(kd=g),e=1}a=(new Date).getTime();b={};b.r=e;b.d=a-d;ld("bridge",b);return e},void 0);_.w("glaurungError",function(){return kd},void 0);_.w("glaurungBridge.log",ld,void 0);_.w("glaurungBridge.getAdPieceClassName",function(a){return O[a]},void 0);_.w("buildImageAd",function(a,b){if(0>b||b>=ub(a.b).length)a=null;else{a=ub(a.b)[b];b=_.K(1,"google_image_div");var c=_.K(1,"aw0");a=b&&c?new nd(a,c,b):null}return a},void 0);_.w("buildRichmediaAd",function(a,b){return 0>b||b>=ub(a.b).length?null:new od(ub(a.b)[b],_.F.body)},void 0);_.w("buildTextAd",function(a,b){var c=a.b;if(!(0>b||b>=ub(c).length)){if(0>b||b>=ub(a.b).length)var d=null;else{d=ub(a.b)[b];var e=_.K(1,"taw"+b);if(e){var f={0:[e]},g;for(g in xb){var l=xb[g],p=rd[l];p&&(f[l]=_.Ja(_.Ob(2,p,e)))}d=new qd(f,e,d)}else d=null}d&&(_.G.registerAd&&_.G.registerAd(d,"taw"+b),a.pa(d),_.n(ub(c)[b],11,!1)&&_.G.initAppPromo&&_.G.initAppPromo(d,a))}},void 0);})(window.hydra=window.hydra||{});
