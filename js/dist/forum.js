(()=>{var t={n:a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return t.d(e,{a:e}),e},d:(a,e)=>{for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};(()=>{"use strict";t.r(a);const e=flarum.core.compat.extend,o=flarum.core.compat.app;var n=t.n(o);const i=flarum.core.compat["forum/components/IndexPage"];var r=t.n(i);n().initializers.add("litalino/flarum-adblock",(function(){(0,e.extend)(r().prototype,"oninit",(function(){var t=window.XF||{};t.samViewCountMethod="impression",t.samServerTime=Math.floor(Date.now()/1e3),t.samItem=".samItem",t.samCodeUnit=".samCodeUnit",t.samBannerUnit=".samBannerUnit",document.addEventListener("DOMContentLoaded",(function(){var a=n().forum.attribute("baseUrl")+"/assets/extensions/litalino-adblock/bg.jpg",e=n().forum.attribute("baseUrl"),o=n().translator.trans("flarum-adblock.admin.adBlock-alt"),i=n().forum.attribute("litalino-flarum-adlock.adBlock-div")?n().forum.attribute("litalino-flarum-adlock.adBlock-div"):"content",r=n().forum.attribute("litalino-flarum-adlock.adBlock-url")?n().forum.attribute("litalino-flarum-adlock.adBlock-url"):e,l=n().forum.attribute("litalino-flarum-adlock.adBlock-img")?n().forum.attribute("litalino-flarum-adlock.adBlock-img"):a,s=n().forum.attribute("litalino-flarum-adlock.adBlock-img")?n().forum.attribute("litalino-flarum-adlock.adBlock-alt"):o,d=document.getElementById(""+i);if(d){var m=document.createElement("div");m.innerHTML='<div class="samItem"> <a href="'+r+'" target="_blank" rel="nofollow"> <img src="'+l+'" title="'+s+'" alt="'+s+'"> </a> </div>',m.className="samBannerUnit samAlignCenter",d.parentNode.insertBefore(m,d)}var c=n().translator.trans("flarum-adblock.admin.adBlockNotice-content");console.log(c);var u=n().forum.attribute("litalino-flarum-adlock.adBlockAction")?n().forum.attribute("litalino-flarum-adlock.adBlockAction"):"notice",f=n().forum.attribute("litalino-flarum-adlock.supportUsTitle")?n().forum.attribute("litalino-flarum-adlock.supportUsTitle"):n().translator.trans("flarum-adblock.admin.supportUsTitle"),p=n().forum.attribute("litalino-flarum-adlock.supportUsMessage")?n().forum.attribute("litalino-flarum-adlock.supportUsMessage"):n().translator.trans("flarum-adblock.admin.supportUsMessage"),b=n().forum.attribute("litalino-flarum-adlock.supportRedirectUrl")?n().forum.attribute("litalino-flarum-adlock.supportRedirectUrl"):"",k=n().forum.attribute("litalino-flarum-adlock.adBlockNotice-element")?n().forum.attribute("litalino-flarum-adlock.adBlockNotice-element"):"#content",g=n().forum.attribute("litalino-flarum-adlock.adBlockNotice-content")||c,v=u,h=f,y=p,B=b,w={element:k,method:"prepend",content:g,interval:1440,views:1};function U(t){if(t.find('[data-xf-init="sam-lazy"]').length)return!0;var a=t.find(".samAdminActions"),e=t.find(".samIgnoreContent"),o=t.find("ins.adsbygoogle"),n=t.find('[id^="div-gpt-ad"]'),i=0;if(a.length&&(i+=a.height()),e.length&&(i+=e.height()),o.length){if(void 0===o[0].attributes["data-adsbygoogle-status"])return!1;if(o.is(":hidden"))return!0}else if(n.length&&"1px"==n.css("min-height"))return!1;return t.height()-i>0}$(document).on("click","#samDismiss",(function(){var t,a;$(this).parent("#samNotice").fadeOut(),$("body").removeClass("samAdBlockDetected"),t=Math.floor(Date.now()/1e3),a="",document.cookie="adblok_sam_notice_dismiss="+t+"; "+a+"; sameSite=Session; Secure",path="/"})),$(document).on("samInitDetection",(function(){!function(){t.samCoreLoaded=!0,$('<div class="banner_728x90 ad-banner" />').appendTo("body");var a=$(t.samCodeUnit+" "+t.samItem+":not(.samLazyLoading),"+t.samBannerUnit+" "+t.samItem+":not(.samLazyLoading)");if(a.length&&$(".banner_728x90.ad-banner").is(":hidden"))if("backup"==v||"message"==v)a.each((function(){if(!U($(this))&&0==$(this).find("> a img[data-src]").length)if("backup"==v){var t=$(this).find(".samBackup");t.length&&(t.find("img").each((function(){$(this).attr("src",$(this).data("src"))})),t.fadeIn())}else $('<div class="samSupportUs" />').html(y).prependTo($(this))}));else{var e=0;a.each((function(){U($(this))||(e+=1)}));var o=!0;if(w.views&&w.views>2&&(o=!1),console.log("adsBlocked : "+e),!e&&o)if("notice"==v){var n=!!w.interval&&function(t){for(var a="adblok_sam_notice_dismiss=",e=document.cookie.split(";"),o=0;o<e.length;o++){for(var n=e[o];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(a))return n.substring(26,n.length)}return null}();if(n&&Math.floor(Date.now()/1e3)-n<=60*w.interval)return;var i=y;w.content&&(i=w.content);var r=$('<div id="samNotice" />');r.prepend('<a role="button" id="samDismiss">×</a>'),r.append("<span>"+i+"</span>"),"prepend"==w.method?r.prependTo(w.element):r.appendTo(w.element),r.fadeIn("slow"),$("body").addClass("samAdBlockDetected")}else{var l=window.location.href,s=B;if(s&&-1===l.indexOf(s))return void(window.location.href=s);var d=t.getOverlayHtml({title:h,dismissible:!1,html:'<div class="blockMessage">'+y+"</div>"});new t.Overlay(d,{backdropClose:!1,keyboard:!1,escapeClose:!1,className:"samSupportUsOverlay"}).show(),$("head").append("<style>::-webkit-scrollbar{display: none;}</style>"),$(".samSupportUsOverlay").css("background-color","black").fadeTo("slow",.95)}}}()})),$(document).trigger("samInitDetection")}))}))}))})(),module.exports=a})();
//# sourceMappingURL=forum.js.map