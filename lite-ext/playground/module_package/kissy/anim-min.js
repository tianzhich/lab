/*
Copyright 2011, KISSY UI Library v1.1.7dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("anim/base",function(g,d,t,q,o,l){function a(b,c,e,i,f,h){if(!(b=d.get(b)))return l;if(!(this instanceof a))return new a(b,c,e,i,f,h);var k=g.isPlainObject(e);c=c;this.domEl=b;if(g.isPlainObject(c))c=String(g.param(c,";")).replace(/=/g,":").replace(/%23/g,"#").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();var x={},z=B.length,u;m.innerHTML='<div style="'+c+'"></div>';for(b=m.firstChild.style;z--;)if(u=b[B[z]])x[B[z]]=r(u);this.props=x;this.targetStyle=c;if(k)k=g.merge(v,e);else{k=g.clone(v);
if(e)k.duration=p(e)||1;if(g.isString(i)||g.isFunction(i))k.easing=i;if(g.isFunction(f))k.complete=f;if(h!==l)k.nativeSupport=h}this.config=k;if(k.nativeSupport&&s()&&g.isString(i=k.easing))if(/cubic-bezier\([\s\d.,]+\)/.test(i)||(i=q.NativeTimeFunction[i])){k.easing=i;this.transitionName=s()}g.isFunction(f)&&this.on(n,f);return l}function s(){var b="transition",c;if(m.style[b]!==l)c=b;else g.each(["Webkit","Moz","O"],function(e){if(m.style[b=e+"Transition"]!==l){c=b;return false}});s=function(){return c};
return c}function A(b,c,e){o.ie&&e.indexOf(j)>-1&&d.css(b,j,c[j].v);b.style.cssText+=";"+e}function r(b){var c=p(b);b=(b+"").replace(/^[-\d.]+/,"");return isNaN(c)?{v:b,u:"",f:w}:{v:c,u:b,f:D}}function D(b,c,e){return(b+(c-b)*e).toFixed(3)}function w(b,c,e){for(var i=2,f,h,k=[],x=[];f=3,h=arguments[i-1],i--;)if(h.substr(0,4)==="rgb(")for(h=h.match(/\d+/g);f--;)k.push(~~h[f]);else if(h.substr(0,l||1)==="#"){if(h.length===4)h="#"+h.substr(1,l||1)+h.substr(1,l||1)+h.substr(2,l||1)+h.substr(2,l||1)+h.substr(3,
l||1)+h.substr(3,l||1);for(;f--;)k.push(parseInt(h.substr(1+f*2,2),16))}else return c;for(;f--;){i=~~(k[f+3]+(k[f]-k[f+3])*e);x.push(i<0?0:i>255?255:i)}return"rgb("+x.join(",")+")"}var p=parseFloat;t=g.require("event/target");var m=d.create("<div>"),B="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
j="opacity",n="complete",v={duration:1,easing:"easeNone",nativeSupport:true};g.augment(a,t,{run:function(){var b=this,c=b.config,e=b.domEl,i,f,h,k,x=b.props,z={},u;for(u in x)z[u]=r(d.css(e,u));if(b.fire("start")!==false){b.stop();if(b.transitionName)b._nativeRun();else{i=c.duration*1E3;h=g.now();k=h+i;f=c.easing;if(g.isString(f))f=q[f]||q.easeNone;b.timer=g.later(c=function(){var E=g.now(),G=E>k?1:(E-h)/i,C,y,F;for(u in x){C=z[u];y=x[u];if(y.v==0)y.u=C.u;if(C.u!==y.u)C.v=0;d.css(e,u,y.f(C.v,y.v,
f(G))+y.u)}if(b.fire("step")===false||(F=E>k)){b.stop();F&&b.fire(n)}},13,true);c()}return b}},_nativeRun:function(){var b=this,c=b.config,e=b.domEl,i=b.props,f=c.duration*1E3;c=c.easing;var h=b.transitionName,k={};k[h+"Property"]="all";k[h+"Duration"]=f+"ms";k[h+"TimingFunction"]=c;d.css(e,k);g.later(function(){A(e,i,b.targetStyle)},0);g.later(function(){b.stop(true)},f)},stop:function(b){if(this.transitionName)this._nativeStop(b);else{if(this.timer){this.timer.cancel();this.timer=l}if(b){A(this.domEl,
this.props,this.targetStyle);this.fire(n)}}return this},_nativeStop:function(b){var c=this.domEl,e=this.transitionName,i=this.props,f;if(b){d.css(c,e+"Property","none");this.fire(n)}else{for(f in i)d.css(c,f,d._getComputedStyle(c,f));d.css(c,e+"Property","none")}}});a.supportTransition=function(){return!!s()};return a},{requires:["dom","event","anim/easing","ua"]});
KISSY.add("anim/easing",function(){var g=Math,d=g.PI,t=g.pow,q=g.sin,o=1.70158,l={easeNone:function(a){return a},easeIn:function(a){return a*a},easeOut:function(a){return(2-a)*a},easeBoth:function(a){return(a*=2)<1?0.5*a*a:0.5*(1- --a*(a-2))},easeInStrong:function(a){return a*a*a*a},easeOutStrong:function(a){return 1- --a*a*a*a},easeBothStrong:function(a){return(a*=2)<1?0.5*a*a*a*a:0.5*(2-(a-=2)*a*a*a)},elasticIn:function(a){if(a===0||a===1)return a;return-(t(2,10*(a-=1))*q((a-0.075)*2*d/0.3))},elasticOut:function(a){if(a===
0||a===1)return a;return t(2,-10*a)*q((a-0.075)*2*d/0.3)+1},elasticBoth:function(a){if(a===0||(a*=2)===2)return a;if(a<1)return-0.5*t(2,10*(a-=1))*q((a-0.1125)*2*d/0.45);return t(2,-10*(a-=1))*q((a-0.1125)*2*d/0.45)*0.5+1},backIn:function(a){if(a===1)a-=0.0010;return a*a*((o+1)*a-o)},backOut:function(a){return(a-=1)*a*((o+1)*a+o)+1},backBoth:function(a){if((a*=2)<1)return 0.5*a*a*(((o*=1.525)+1)*a-o);return 0.5*((a-=2)*a*(((o*=1.525)+1)*a+o)+2)},bounceIn:function(a){return 1-l.bounceOut(1-a)},bounceOut:function(a){return a<
1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},bounceBoth:function(a){if(a<0.5)return l.bounceIn(a*2)*0.5;return l.bounceOut(a*2-1)*0.5+0.5}};l.NativeTimeFunction={easeNone:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeBoth:"ease-in-out",easeInStrong:"cubic-bezier(0.9, 0.0, 0.9, 0.5)",easeOutStrong:"cubic-bezier(0.1, 0.5, 0.1, 1.0)",easeBothStrong:"cubic-bezier(0.9, 0.0, 0.1, 1.0)"};return l});
KISSY.add("anim/node-plugin",function(g,d,t,q,o){function l(j,n,v,b,c){if(n==="toggle"){c=d.css(j,s)===A?1:0;n="show"}if(c)d.css(j,s,d.data(j,s)||"");var e={},i={};g.each(B[n],function(f){if(f===r){e[r]=d.css(j,r);d.css(j,r,D)}else if(f===w){e[w]=d.css(j,w);i.opacity=c?1:0;c&&d.css(j,w,0)}else if(f===p){e[p]=d.css(j,p);i.height=c?d.css(j,p)||j.naturalHeight:0;c&&d.css(j,p,0)}else if(f===m){e[m]=d.css(j,m);i.width=c?d.css(j,m)||j.naturalWidth:0;c&&d.css(j,m,0)}});(new t(j,i,v,"easeOut",function(){if(!c){var f=
j.style,h=f[s];if(h!==A){h&&d.data(j,s,h);f[s]=A}e[p]&&d.css(j,{height:e[p]});e[m]&&d.css(j,{height:e[m]});e[w]&&d.css(j,{height:e[w]});e[r]&&d.css(j,{height:e[r]})}b&&g.isFunction(b)&&b()})).run()}q=g.require("node/node").prototype;var a=g.require("node/nodelist").prototype,s="display",A="none",r="overflow",D="hidden",w="opacity",p="height",m="width",B={show:[r,w,p,m],fade:[w],slide:[r,p]};g.each([q,a],function(j){j.animate=function(){var n=g.makeArray(arguments);g.each(this,function(v){t.apply(o,
[v].concat(n)).run()});return this};g.each({show:["show",1],hide:["show",0],toggle:["toggle"],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",1],slideUp:["slide",0]},function(n,v){j[v]=function(b,c){d[v]&&arguments.length===0?d[v](this):g.each(this,function(e){l(e,n[0],b,c,n[1])});return this}})})},{requires:["dom","anim/base","node"]});KISSY.add("anim",function(g,d){return d},{requires:["anim/base","anim/easing","anim/node-plugin"]});