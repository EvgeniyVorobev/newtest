(function(e){var q={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",responsiveWidth:!1},m=e(window),r=e(document),g=[],n=m.height(),l=function(){var a=m.scrollTop(),c=r.height(),f=c-n;f=a>f?f-a:0;for(var d=0;d<g.length;d++){var b=g[d],h=b.stickyWrapper.offset().top-b.topSpacing-f;a<=h?null!==b.currentTop&&(b.stickyElement.css("position","").css("top",""),b.stickyElement.trigger("sticky-end",[b]).parent().removeClass(b.className),b.currentTop=
null):(h=c-b.stickyElement.outerHeight()-b.topSpacing-b.bottomSpacing-a-f,h=0>h?h+b.topSpacing:b.topSpacing,b.currentTop!=h&&(b.stickyElement.css("position","fixed").css("top",h),"undefined"!==typeof b.getWidthFrom&&b.stickyElement.css("width",e(b.getWidthFrom).width()),b.stickyElement.trigger("sticky-start",[b]).parent().addClass(b.className),b.currentTop=h))}},p=function(){n=m.height();for(var a=0;a<g.length;a++){var c=g[a];"undefined"!==typeof c.getWidthFrom&&!0===c.responsiveWidth&&c.stickyElement.css("width",
e(c.getWidthFrom).width())}},k={init:function(a){var c=e.extend({},q,a);return this.each(function(){var a=e(this),d=a.attr("id");d=e("<div></div>").attr("id",d+"-sticky-wrapper").addClass(c.wrapperClassName);a.wrapAll(d);c.center&&a.parent().css({width:a.outerWidth(),marginLeft:"auto",marginRight:"auto"});"right"==a.css("float")&&a.css({"float":"none"}).parent().css({"float":"right"});d=a.parent();d.css("height",a.outerHeight());g.push({topSpacing:c.topSpacing,bottomSpacing:c.bottomSpacing,stickyElement:a,
currentTop:null,stickyWrapper:d,className:c.className,getWidthFrom:c.getWidthFrom,responsiveWidth:c.responsiveWidth})})},update:l,unstick:function(a){return this.each(function(){for(var a=e(this),f=-1,d=0;d<g.length;d++)g[d].stickyElement.get(0)==a.get(0)&&(f=d);-1!=f&&(g.splice(f,1),a.unwrap(),a.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",l,!1),window.addEventListener("resize",p,!1)):window.attachEvent&&(window.attachEvent("onscroll",l),window.attachEvent("onresize",
p));e.fn.sticky=function(a){if(k[a])return k[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)e.error("Method "+a+" does not exist on jQuery.sticky");else return k.init.apply(this,arguments)};e.fn.unstick=function(a){if(k[a])return k[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)e.error("Method "+a+" does not exist on jQuery.sticky");else return k.unstick.apply(this,arguments)};e(function(){setTimeout(l,0)})})(jQuery);
