(()=>{var t={n:a=>{var l=a&&a.__esModule?()=>a.default:()=>a;return t.d(l,{a:l}),l},d:(a,l)=>{for(var e in l)t.o(l,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:l[e]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};(()=>{"use strict";t.r(a);const l=flarum.core.compat["admin/app"];var e=t.n(l);e().initializers.add("litalino/flarum-adblock",(function(){e().extensionData.for("litalino-adblock").registerSetting({setting:"litalino-adblock.adblock-div",name:"litalino-adblock.adblock-div",label:e().translator.trans("adblock.admin.adblock-div"),type:"select",options:{"#content":"#content",".sideNavContainer":".sideNavContainer",".IndexPage-toolbar":".IndexPage-toolbar"},default:"content"}).registerSetting({setting:"litalino-adblock.adblock-img",name:"litalino-adblock.adblock-img",type:"text",label:e().translator.trans("adblock.admin.adblock-img"),placeholder:e().translator.trans("adblock.admin.adblock-img-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-url",name:"litalino-adblock.adblock-url",type:"text",label:e().translator.trans("adblock.admin.adblock-url"),placeholder:e().translator.trans("adblock.admin.adblock-url-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-alt",name:"litalino-adblock.adblock-alt",type:"text",label:e().translator.trans("adblock.admin.adblock-alt"),placeholder:e().translator.trans("adblock.admin.adblock-alt-placeholder"),default:""}).registerSetting({label:e().translator.trans("adblock.admin.adblock-action"),help:e().translator.trans("adblock.admin.adblock-action-help"),setting:"litalino-adblock.adblock-action",type:"select",options:{notice:e().translator.trans("adblock.admin.adblock-action-notice")},default:"notice"}).registerSetting({setting:"litalino-adblock.adblock-supportUsTitle",name:"litalino-adblock.adblock-supportUsTitle",type:"text",label:e().translator.trans("adblock.admin.adblock-supportUsTitle"),placeholder:e().translator.trans("adblock.admin.adblock-supportUsTitle-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-supportUsMessage",name:"litalino-adblock.adblock-supportUsMessage",type:"text",label:e().translator.trans("adblock.admin.adblock-supportUsMessage"),placeholder:e().translator.trans("adblock.admin.adblock-supportUsMessage-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-supportRedirectUrl",name:"litalino-adblock.adblock-supportRedirectUrl",type:"text",label:e().translator.trans("adblock.admin.adblock-supportRedirectUrl"),placeholder:e().translator.trans("adblock.admin.adblock-supportRedirectUrl-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-notice-element",name:"litalino-adblock.adblock-notice-element",label:e().translator.trans("adblock.admin.adblock-notice-element"),type:"select",options:{content:"#content"},default:"content"}).registerSetting({setting:"litalino-adblock.adblock-notice-method",name:"litalino-adblock.adblock-notice-method",label:e().translator.trans("adblock.admin.adblock-notice-method"),type:"select",options:{prepend:"prepend",append:"append",alert:"alert"},default:"alert"}).registerSetting({setting:"litalino-adblock.adblock-notice-content",name:"litalino-adblock.adblock-notice-content",type:"textarea",rows:4,label:e().translator.trans("adblock.admin.adblock-notice-content"),help:e().translator.trans("adblock.admin.adblock-notice-content-help"),placeholder:e().translator.trans("adblock.admin.adblock-notice-content-placeholder"),default:""}).registerSetting({setting:"litalino-adblock.adblock-notice-content-sup",name:"litalino-adblock.adblock-notice-content-sup",type:"text",label:e().translator.trans("adblock.admin.adblock-notice-content-sup"),placeholder:e().translator.trans("adblock.admin.adblock-notice-content-sup-placeholder"),default:""})}))})(),module.exports=a})();
//# sourceMappingURL=admin.js.map