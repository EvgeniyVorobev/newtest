/*

 @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 @version 2.1.6
*/
(function(g,h){"object"===typeof exports?module.exports=h(require("jquery")):"function"===typeof define&&define.amd?define(["jquery"],h):h(g.jQuery)})(this,function(g){var h=function(d,a){var f,b=document.createElement("canvas");d.appendChild(b);"undefined"!==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(b);var c=b.getContext("2d");b.width=b.height=a.size;var k=1;1<window.devicePixelRatio&&(k=window.devicePixelRatio,b.style.width=b.style.height=[a.size,"px"].join(""),b.width=b.height=
a.size*k,c.scale(k,k));c.translate(a.size/2,a.size/2);c.rotate((-.5+a.rotate/180)*Math.PI);var e=(a.size-a.lineWidth)/2;a.scaleColor&&a.scaleLength&&(e-=a.scaleLength+2);Date.now=Date.now||function(){return+new Date};var l=function(a,b,d){d=Math.min(Math.max(-1,d||0),1);var m=0>=d?!0:!1;c.beginPath();c.arc(0,0,e,0,2*Math.PI*d,m);c.strokeStyle=a;c.lineWidth=b;c.stroke()},g=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,
1E3/60)}}(),h=function(){if(a.scaleColor){c.lineWidth=1;c.fillStyle=a.scaleColor;c.save();for(var b=24;0<b;--b){if(0===b%6){var e=a.scaleLength;var d=0}else e=.6*a.scaleLength,d=a.scaleLength-e;c.fillRect(-a.size/2+d,0,e,1);c.rotate(Math.PI/12)}c.restore()}a.trackColor&&l(a.trackColor,a.trackWidth||a.lineWidth,1)};this.getCanvas=function(){return b};this.getCtx=function(){return c};this.clear=function(){c.clearRect(a.size/-2,a.size/-2,a.size,a.size)};this.draw=function(b){a.scaleColor||a.trackColor?
c.getImageData&&c.putImageData?f?c.putImageData(f,0,0):(h(),f=c.getImageData(0,0,a.size*k,a.size*k)):(this.clear(),h()):this.clear();c.lineCap=a.lineCap;var e="function"===typeof a.barColor?a.barColor(b):a.barColor;l(e,a.lineWidth,b/100)}.bind(this);this.animate=function(b,e){var c=Date.now();a.onStart(b,e);var d=function(){var l=Math.min(Date.now()-c,a.animate.duration),f=a.easing(this,l,b,e-b,a.animate.duration);this.draw(f);a.onStep(b,e,f);if(l>=a.animate.duration)a.onStop(b,e);else g(d)}.bind(this);
g(d)}.bind(this)},n=function(d,a){var f={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1E3,enabled:!0},easing:function(a,b,c,d,f){b/=f/2;return 1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(b,a){},onStep:function(b,a,c){},onStop:function(b,a){}};if("undefined"!==typeof h)f.renderer=h;else if("undefined"!==typeof SVGRenderer)f.renderer=SVGRenderer;else throw Error("Please load either the SVG- or the CanvasRenderer");
var b={},c=0,g=function(){this.el=d;this.options=b;for(var e in f)f.hasOwnProperty(e)&&(b[e]=a&&"undefined"!==typeof a[e]?a[e]:f[e],"function"===typeof b[e]&&(b[e]=b[e].bind(this)));"string"===typeof b.easing&&"undefined"!==typeof jQuery&&jQuery.isFunction(jQuery.easing[b.easing])?b.easing=jQuery.easing[b.easing]:b.easing=f.easing;"number"===typeof b.animate&&(b.animate={duration:b.animate,enabled:!0});"boolean"!==typeof b.animate||b.animate||(b.animate={duration:1E3,enabled:b.animate});this.renderer=
new b.renderer(d,b);this.renderer.draw(c);d.dataset&&d.dataset.percent?this.update(parseFloat(d.dataset.percent)):d.getAttribute&&d.getAttribute("data-percent")&&this.update(parseFloat(d.getAttribute("data-percent")))}.bind(this);this.update=function(a){a=parseFloat(a);b.animate.enabled?this.renderer.animate(c,a):this.renderer.draw(a);c=a;return this}.bind(this);this.disableAnimation=function(){b.animate.enabled=!1;return this};this.enableAnimation=function(){b.animate.enabled=!0;return this};g()};
g.fn.easyPieChart=function(d){return this.each(function(){if(!g.data(this,"easyPieChart")){var a=g.extend({},d,g(this).data());g.data(this,"easyPieChart",new n(this,a))}})}});