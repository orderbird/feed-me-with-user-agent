!function(){var e={827:function(){},279:function(e,t,a){var n=a(827);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,a(673).Z)("43063986",n,!0,{})},673:function(e,t,a){"use strict";function n(e,t){for(var a=[],n={},s=0;s<t.length;s++){var i=t[s],r=i[0],l={id:e+":"+s,css:i[1],media:i[2],sourceMap:i[3]};n[r]?n[r].parts.push(l):a.push(n[r]={id:r,parts:[l]})}return a}a.d(t,{Z:function(){return f}});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},r=s&&(document.head||document.getElementsByTagName("head")[0]),l=null,o=0,d=!1,p=function(){},u=null,h="data-vue-ssr-id",c="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,a,s){d=a,u=s||{};var r=n(e,t);return g(r),function(t){for(var a=[],s=0;s<r.length;s++){var l=r[s];(o=i[l.id]).refs--,a.push(o)}for(t?g(r=n(e,t)):r=[],s=0;s<a.length;s++){var o;if(0===(o=a[s]).refs){for(var d=0;d<o.parts.length;d++)o.parts[d]();delete i[o.id]}}}}function g(e){for(var t=0;t<e.length;t++){var a=e[t],n=i[a.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](a.parts[s]);for(;s<a.parts.length;s++)n.parts.push(m(a.parts[s]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{var r=[];for(s=0;s<a.parts.length;s++)r.push(m(a.parts[s]));i[a.id]={id:a.id,refs:1,parts:r}}}}function v(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function m(e){var t,a,n=document.querySelector("style["+h+'~="'+e.id+'"]');if(n){if(d)return p;n.parentNode.removeChild(n)}if(c){var s=o++;n=l||(l=v()),t=I.bind(null,n,s,!1),a=I.bind(null,n,s,!0)}else n=v(),t=U.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}var b,C=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function I(e,t,a,n){var s=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=C(t,s);else{var i=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function U(e,t){var a=t.css,n=t.media,s=t.sourceMap;if(n&&e.setAttribute("media",n),u.ssrId&&e.setAttribute(h,t.id),s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,a),i.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";a(279),function(e){Craft.UpdatesUtility=Garnish.Base.extend({$body:null,showUpdates:!1,criticalUpdateAvailable:!1,allowUpdates:null,installableUpdates:null,init:function(){var t=this;this.$body=e("#content");var a=e("#graphic"),n=e("#status");this.installableUpdates=[],Craft.cp.checkForUpdates(!0,!0,(function(s){if(t.allowUpdates=s.allowUpdates,s.updates.cms&&t.processUpdate(s.updates.cms,!1),s.updates.plugins&&s.updates.plugins.length)for(var i=0;i<s.updates.plugins.length;i++)t.processUpdate(s.updates.plugins[i],!0);if(t.showUpdates){if(a.remove(),n.remove(),t.installableUpdates.length){var r=Craft.t("app","{num, number} {num, plural, =1{Available Update} other{Available Updates}}",{num:t.installableUpdates.length});e("#header h1").text(r)}t.allowUpdates&&t.installableUpdates.length>1&&t.createUpdateForm(Craft.t("app","Update all"),t.installableUpdates).insertAfter(e("#header > .flex:last"))}else a.addClass("success"),n.text(Craft.t("app","You’re all up to date!"))}))},processUpdate:function(e,a){if(e.releases.length||e.abandoned){this.showUpdates=!0;var n=new t(this,e,a);n.installable&&this.installableUpdates.push(n)}},createUpdateForm:function(t,a){var n=e("<form/>",{method:"post"});n.append(Craft.getCsrfInput()),n.append(e("<input/>",{type:"hidden",name:"action",value:"updater"})),n.append(e("<input/>",{type:"hidden",name:"return",value:"utilities/updates"}));for(var s=0;s<a.length;s++)n.append(e("<input/>",{type:"hidden",name:"install["+a[s].updateInfo.handle+"]",value:a[s].updateInfo.latestVersion})),n.append(e("<input/>",{type:"hidden",name:"packageNames["+a[s].updateInfo.handle+"]",value:a[s].updateInfo.packageName}));return n.append(e("<button/>",{type:"submit",text:t,class:"btn submit"})),n}});var t=Garnish.Base.extend({updateInfo:null,isPlugin:null,installable:!1,$container:null,$header:null,$contents:null,$releaseContainer:null,$showAllLink:null,licenseHud:null,$licenseSubmitBtn:null,licenseSubmitAction:null,init:function(t,a,n){this.updatesPage=t,this.updateInfo=a,this.isPlugin=n,this.installable=!!this.updateInfo.releases.length,this.createPane(),this.initReleases(),this.createHeading(),this.createCta(),this.updateInfo.abandoned?e('<blockquote class="note"><p>'+this.updateInfo.statusText+"</p></blockquote>").insertBefore(this.$releaseContainer):"eligible"!==this.updateInfo.status&&(e('<blockquote class="note ineligible"><p>'+this.updateInfo.statusText+"</p></blockquote>").insertBefore(this.$releaseContainer),"expired"!==this.updateInfo.status&&null!==this.updateInfo.latestVersion||(this.installable=!1))},createPane:function(){this.$container=e('<div class="update"/>').appendTo(this.updatesPage.$body),this.$header=e('<div class="update-header"/>').appendTo(this.$container),this.$contents=e('<div class="readable"/>').appendTo(this.$container),this.$releaseContainer=e('<div class="releases"/>').appendTo(this.$contents)},createHeading:function(){e('<div class="readable left"/>').appendTo(this.$header).append(e("<h1/>",{text:this.updateInfo.name}))},createCta:function(){if(this.updatesPage.allowUpdates&&this.updateInfo.latestVersion&&!1!==this.updateInfo.ctaUrl){var t=e('<div class="buttons right"/>').appendTo(this.$header);void 0!==this.updateInfo.ctaUrl?e("<a/>",{class:"btn submit",text:this.updateInfo.ctaText,href:this.updateInfo.ctaUrl}).appendTo(t):this.updatesPage.createUpdateForm(this.updateInfo.ctaText,[this]).appendTo(t)}},initReleases:function(){for(var e=0;e<this.updateInfo.releases.length;e++)new a(this,this.updateInfo.releases[e])}}),a=Garnish.Base.extend({update:null,releaseInfo:null,notesId:null,$container:null,$headingContainer:null,init:function(e,t){this.update=e,this.releaseInfo=t,this.notesId="notes-"+Math.floor(1e6*Math.random()),this.createContainer(),this.createHeading(),this.releaseInfo.notes&&(this.createReleaseNotes(),new Craft.FieldToggle(this.$headingContainer))},createContainer:function(){this.$container=e('<div class="pane release"/>').appendTo(this.update.$releaseContainer),this.releaseInfo.critical&&this.$container.addClass("critical")},createHeading:function(){this.releaseInfo.notes?this.$headingContainer=e("<a/>",{class:"release-info fieldtoggle","data-target":this.notesId}):this.$headingContainer=e("<div/>",{class:"release-info"}),this.$headingContainer.appendTo(this.$container),e("<h2/>",{text:this.releaseInfo.version}).appendTo(this.$headingContainer),this.releaseInfo.critical&&e("<strong/>",{class:"critical",text:Craft.t("app","Critical")}).appendTo(this.$headingContainer),this.releaseInfo.date&&e("<span/>",{class:"date",text:Craft.formatDate(this.releaseInfo.date)}).appendTo(this.$headingContainer)},createReleaseNotes:function(){var t=e("<div/>",{id:this.notesId}).appendTo(this.$container).append(e("<div/>",{class:"release-notes"}).html(this.releaseInfo.notes));this.releaseInfo.critical||t.find("blockquote").length?this.$headingContainer.addClass("expanded"):t.addClass("hidden")}},{maxInitialUpdateHeight:500})}(jQuery)}()}();
//# sourceMappingURL=UpdatesUtility.js.map