(()=>{var a={n:t=>{var l=t&&t.__esModule?()=>t.default:()=>t;return a.d(l,{a:l}),l},d:(t,l)=>{for(var e in l)a.o(l,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:l[e]})},o:(a,t)=>Object.prototype.hasOwnProperty.call(a,t),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},t={};(()=>{"use strict";a.r(t);const l=flarum.core.compat["admin/app"];var e=a.n(l);e().initializers.add("litalino/flarum-adblock",(function(){e().extensionData.for("litalino-adblock").registerSetting({setting:"litalino-adblock.adblock-div",name:"litalino-adblock.adblock-div",type:"text",label:e().translator.trans("adblock.admin.adblock-div"),placeholder:e().translator.trans("adblock.admin.adblock-div-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-img",name:"litalino-adblock.adblock-img",type:"text",label:e().translator.trans("adblock.admin.adblock-img"),placeholder:e().translator.trans("adblock.admin.adblock-img-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-url",name:"litalino-adblock.adblock-url",type:"text",label:e().translator.trans("adblock.admin.adblock-url"),placeholder:e().translator.trans("adblock.admin.adblock-url-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-alt",name:"litalino-adblock.adblock-alt",type:"text",label:e().translator.trans("adblock.admin.adblock-alt"),placeholder:e().translator.trans("adblock.admin.adblock-alt-placeholder"),default:""}).registerSetting({label:e().translator.trans("adblock.admin.adblock-action"),help:e().translator.trans("adblock.admin.adblock-action-help"),setting:"litalino-adblock.adblock-action",type:"select",options:{notice:e().translator.trans("adblock.admin.adblock-action-notice"),message:e().translator.trans("adblock.admin.adblock-action-message"),backup:e().translator.trans("adblock.admin.adblock-action-backup")},default:"notice"}).registerSetting({setting:"litalino-adblock.adblock-supportUsTitle",name:"litalino-adblock.adblock-supportUsTitle",type:"text",label:e().translator.trans("adblock.admin.adblock-supportUsTitle"),placeholder:e().translator.trans("adblock.admin.adblock-supportUsTitle-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-supportUsMessage",name:"litalino-adblock.adblock-supportUsMessage",type:"text",label:e().translator.trans("adblock.admin.adblock-supportUsMessage"),placeholder:e().translator.trans("adblock.admin.adblock-supportUsMessage-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-supportRedirectUrl",name:"litalino-adblock.adblock-supportRedirectUrl",type:"text",label:e().translator.trans("adblock.admin.adblock-supportRedirectUrl"),placeholder:e().translator.trans("adblock.admin.adblock-supportRedirectUrl-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-notice-element",name:"litalino-adblock.adblock-notice-element",type:"text",label:e().translator.trans("adblock.admin.adblock-notice-element"),placeholder:e().translator.trans("adblock.admin.adblock-notice-element-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-notice-content",name:"litalino-adblock.adblock-notice-content",type:"textarea",rows:4,label:e().translator.trans("adblock.admin.adblock-notice-content"),help:e().translator.trans("adblock.admin.adblock-notice-content-help"),placeholder:e().translator.trans("adblock.admin.adblock-notice-content-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-notice-content-sup",name:"litalino-adblock.adblock-notice-content-sup",type:"text",label:e().translator.trans("adblock.admin.adblock-notice-content-sup"),placeholder:e().translator.trans("adblock.admin.adblock-notice-content-placeholder"),default:""})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map