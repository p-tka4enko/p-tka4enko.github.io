!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=3)}([function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=function(n,e){return e?e.querySelector(n):document.querySelector(n)}.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),c=null,l=0,p=[],m=t(9);function f(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(x(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(x(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function u(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),p.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(n.insertAt.before,t);t.insertBefore(e,o)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=p.indexOf(n);e>=0&&p.splice(e,1)}function h(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return _(e,n.attrs),u(n,e),e}function _(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function x(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=l++;t=c||(c=h(e)),r=v.bind(null,t,a,!1),o=v.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",_(e,n.attrs),u(n,e),e}(e),r=function(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=m(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),o=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),r=function(n,e){var t=e.css,r=e.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){g(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=d(n,e);return f(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&f(d(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var w,y=(w=[],function(n,e){return w[n]=e,w.filter(Boolean).join("\n")});function v(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){"use strict";t.r(e);t(4),t(5);var r;(r=t(6)).keys().forEach(r)},function(n,e,t){n.exports=t.p+"./assets/favicons/favicon.ico"},function(n,e,t){n.exports=t.p+"./manifest.json"},function(n,e,t){var r={"./components/circle/circle.styl":7,"./components/colors/colors.styl":10,"./components/contact-list/contact-list.styl":12,"./components/period-list/period-list.styl":14,"./components/period/period.styl":16,"./components/person-card/person-card.styl":18,"./components/power-bar/power-bar.styl":20,"./components/progress-bar/progress-bar.styl":22,"./components/section/section.styl":24,"./components/skill-list/skill-list.styl":32,"./components/software-list/software-list.styl":34,"./components/text/text.styl":36,"./fonts/fonts.styl":38,"./index.styl":56};function o(n){var e=i(n);return t(e)}function i(n){if(!t.o(r,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return r[n]}o.keys=function(){return Object.keys(r)},o.resolve=i,n.exports=o,o.id=6},function(n,e,t){var r=t(8);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".circle {\n  width: 38.5rem;\n  height: 38.5rem;\n  border: 1px solid #006cb4;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.circle__inner {\n  width: 33.75rem;\n  height: 33.75rem;\n  border-radius: 50%;\n  background-color: #006cb4;\n  background-repeat: no-repeat;\n}\n",""])},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,e,t){var r=t(11);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"",""])},function(n,e,t){var r=t(13);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".contact-list__contact {\n  display: flex;\n  margin-bottom: 5rem;\n}\n.contact-list__header,\n.contact-list__content {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.contact-list__header {\n  width: 31%;\n  color: #006cb4;\n  text-transform: uppercase;\n  font-size: 3.33rem;\n  font-weight: bold;\n  letter-spacing: 0.083333333rem;\n}\n.contact-list__content {\n  width: 69%;\n  font-size: 3.42rem;\n}\n.contact-list__content_a {\n  color: #000;\n  text-decoration: none;\n}\n.contact-list__content_a:hover {\n  text-decoration: underline;\n}\n",""])},function(n,e,t){var r=t(15);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".period-list {\n  margin: 0;\n  padding: 0;\n}\n.period-list__li {\n  position: relative;\n  list-style-type: none;\n  margin-bottom: 1.699999999rem;\n}\n.period-list__li:last-child {\n  margin-bottom: 0;\n}\n.period-list__mark {\n  position: absolute;\n  left: -6.75rem;\n  top: 1.5rem;\n  width: 3.333333333rem;\n  height: 3.333333333rem;\n  background-color: #000;\n  border-radius: 50%;\n}\n",""])},function(n,e,t){var r=t(17);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'.period__header {\n  display: flex;\n  flex-wrap: wrap;\n}\n.period__title {\n  max-width: 50%;\n  font-size: 4.3rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n@media only screen and (max-width: 480px) {\n  .period__title {\n    max-width: 100%;\n  }\n}\n.period__title_blue {\n  color: #006cb4;\n}\n.period__timeline {\n  max-width: 46%;\n  margin-left: 2.333333333rem;\n  font-size: 4.3rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n@media only screen and (max-width: 480px) {\n  .period__timeline {\n    margin-left: 0;\n    max-width: 100%;\n    flex-basis: 100%;\n  }\n}\n.period__timeline::before {\n  content: "// ";\n}\n@media only screen and (max-width: 480px) {\n  .period__timeline::before {\n    content: "";\n  }\n}\n.period__subtitle {\n  font-size: 4.3rem;\n  text-transform: uppercase;\n  flex-basis: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  margin-top: 0.2rem;\n}\n.period__content {\n  padding-top: 1.2rem;\n  padding-left: 0.25rem;\n}\n',""])},function(n,e,t){var r=t(19);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".person-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-left: 2.666666666rem;\n  text-transform: uppercase;\n}\n.person-card__photo {\n  margin: 0 auto;\n}\n.person-card__name {\n  margin-top: 5.65rem;\n  font-size: 9.25rem;\n  word-spacing: 0.166666666rem;\n  line-height: 7rem;\n}\n.person-card__surname {\n  margin-top: 1.25rem;\n  font-size: 10.2rem;\n  font-weight: bold;\n  letter-spacing: 0.083333333rem;\n  line-height: 7.718918918rem;\n}\n.person-card__job {\n  font-size: 4.15rem;\n  font-weight: bold;\n  margin-top: 3.583333333rem;\n  margin-left: 0.166666666rem;\n  letter-spacing: -0.083333333rem;\n  line-height: 3.14054054rem;\n}\n.person-card__name,\n.person-card__surname,\n.person-card__job {\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n",""])},function(n,e,t){var r=t(21);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".power-bar__title {\n  font-size: 4.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  text-align: center;\n}\n.power-bar__buffer {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.5rem;\n  margin-left: 0.416666666rem;\n}\n.power-bar__mark {\n  width: 2.916666666rem;\n  height: 2.916666666rem;\n  background-color: #e6e6e6;\n  margin-right: 1.666666666rem;\n  border-radius: 50%;\n}\n.power-bar__mark_enabled {\n  background-color: #006cb4;\n}\n",""])},function(n,e,t){var r=t(23);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".progress-bar__title {\n  font-size: 4.25rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n}\n.progress-bar__buffer {\n  background-color: #e6e6e6;\n  margin-top: 2.4rem;\n}\n.progress-bar__progress {\n  height: 3.666666666rem;\n  background-color: #006cb4;\n}\n",""])},function(n,e,t){var r=t(25);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){var r=t(2);(n.exports=t(0)(!1)).push([n.i,".section__header {\n  display: flex;\n  align-items: center;\n}\n@media only screen and (max-width: 480px) {\n  .section__header {\n    justify-content: center;\n  }\n}\n.section__icon {\n  width: 13rem;\n  height: 13rem;\n  flex-shrink: 0;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n}\n.section__title {\n  color: #006cb4;\n  text-transform: uppercase;\n  font-size: 6.75rem;\n  font-weight: bold;\n  letter-spacing: 0.083333333rem;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n@media only screen and (max-width: 480px) {\n  .section__title {\n    border-bottom: 0.833333333rem solid #006cb4;\n  }\n}\n.section__line {\n  flex-grow: 1;\n  height: 0.833333333rem;\n  background-color: #006cb4;\n}\n@media only screen and (max-width: 480px) {\n  .section__line {\n    display: none;\n  }\n}\n.section_profile .section__icon {\n  background-image: url("+r(t(26))+");\n}\n.section_profile .section__title {\n  margin-top: 0;\n  margin-right: 1.083333333rem;\n  margin-bottom: 0.833333333rem;\n  margin-left: 1.583333333rem;\n}\n.section_profile .section__line {\n  margin-bottom: 0.333333333rem;\n}\n.section_profile .section__content {\n  padding-top: 1.75rem;\n  padding-left: 0.083333333rem;\n}\n.section_contact .section__icon {\n  background-image: url("+r(t(27))+");\n}\n.section_contact .section__title {\n  margin-top: 0;\n  margin-right: 1rem;\n  margin-bottom: 0.75rem;\n  margin-left: 2rem;\n}\n.section_contact .section__line {\n  margin-right: 0.083333333rem;\n  margin-bottom: 0.333333333rem;\n}\n.section_contact .section__content {\n  padding-top: 5rem;\n}\n.section_skill .section__icon {\n  background-image: url("+r(t(28))+");\n}\n.section_skill .section__title {\n  margin-top: 0;\n  margin-right: 2rem;\n  margin-bottom: 0.916666666rem;\n  margin-left: 1.583333333rem;\n}\n.section_skill .section__line {\n  margin-right: 0.5rem;\n  margin-bottom: 0.416666666rem;\n}\n.section_skill .section__content {\n  padding-top: 3.6rem;\n  padding-left: 0.666666666rem;\n}\n.section_education .section__icon {\n  background-image: url("+r(t(29))+");\n}\n.section_education .section__title {\n  margin-top: 0;\n  margin-right: 1.333333333rem;\n  margin-bottom: 0.833333333rem;\n  margin-left: 3.166666666rem;\n}\n.section_education .section__line {\n  margin-bottom: 0.333333333rem;\n}\n.section_education .section__content {\n  padding-top: 3.8rem;\n  padding-left: 8.75rem;\n}\n.section_experience .section__icon {\n  background-image: url("+r(t(30))+");\n}\n.section_experience .section__title {\n  margin-top: 0;\n  margin-right: 0.083333333rem;\n  margin-bottom: 0.166666666rem;\n  margin-left: 2.75rem;\n}\n.section_experience .section__line {\n  margin-top: 0.25rem;\n}\n.section_experience .section__content {\n  padding-top: 6.3rem;\n  padding-left: 8.75rem;\n}\n.section_software .section__icon {\n  background-image: url("+r(t(31))+");\n}\n.section_software .section__title {\n  margin-top: 0;\n  margin-right: 3.833333333rem;\n  margin-bottom: 0;\n  margin-left: 3.083333333rem;\n}\n.section_software .section__line {\n  margin-top: 0.583333333rem;\n}\n.section_software .section__content {\n  padding-top: 3.8rem;\n}\n",""])},function(n,e,t){n.exports=t.p+"./assets/images/profile-icon.png"},function(n,e,t){n.exports=t.p+"./assets/images/contact-icon.png"},function(n,e,t){n.exports=t.p+"./assets/images/skill-icon.png"},function(n,e,t){n.exports=t.p+"./assets/images/education-icon.png"},function(n,e,t){n.exports=t.p+"./assets/images/experience-icon.png"},function(n,e,t){n.exports=t.p+"./assets/images/software-icon.png"},function(n,e,t){var r=t(33);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".skill-list__item {\n  margin-bottom: 3.2rem;\n}\n.skill-list__item:last-child {\n  margin-bottom: 0;\n}\n",""])},function(n,e,t){var r=t(35);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".software-list {\n  display: flex;\n  justify-content: space-between;\n  padding-right: 0.416666666rem;\n  padding-left: 1.25rem;\n}\n@media only screen and (max-width: 480px) {\n  .software-list {\n    flex-direction: column;\n  }\n}\n.software-list__col-1,\n.software-list__col-2 {\n  width: 44.35%;\n}\n@media only screen and (max-width: 480px) {\n  .software-list__col-1,\n  .software-list__col-2 {\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 480px) {\n  .software-list__col-1 {\n    margin-bottom: 3.2rem;\n  }\n}\n.software-list__item {\n  margin-bottom: 3.2rem;\n}\n.software-list__item:last-child {\n  margin-bottom: 0;\n}\n",""])},function(n,e,t){var r=t(37);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,".text {\n  font-size: 2.585rem;\n  line-height: 3.083333333rem;\n  word-spacing: -0.041666666rem;\n}\n",""])},function(n,e,t){var r=t(39);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){var r=t(2);(n.exports=t(0)(!1)).push([n.i,'@font-face {\n  font-family: "Myriad Pro";\n  font-weight: normal;\n  font-style: normal;\n  src: url('+r(t(40))+');\n  src: local("\\263A"), url('+r(t(41))+') format("woff"), url('+r(t(42))+') format("truetype"), url('+r(t(43))+') format("svg");\n}\n@font-face {\n  font-family: "Myriad Pro";\n  font-weight: normal;\n  font-style: italic;\n  src: url('+r(t(44))+');\n  src: local("\\263A"), url('+r(t(45))+') format("woff"), url('+r(t(46))+') format("truetype"), url('+r(t(47))+') format("svg");\n}\n@font-face {\n  font-family: "Myriad Pro";\n  font-weight: bold;\n  font-style: normal;\n  src: url('+r(t(48))+');\n  src: local("\\263A"), url('+r(t(49))+') format("woff"), url('+r(t(50))+') format("truetype"), url('+r(t(51))+') format("svg");\n}\n@font-face {\n  font-family: "Myriad Pro";\n  font-weight: bold;\n  font-style: italic;\n  src: url('+r(t(52))+');\n  src: local("\\263A"), url('+r(t(53))+') format("woff"), url('+r(t(54))+') format("truetype"), url('+r(t(55))+') format("svg");\n}\n',""])},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro.eot"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro.woff"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro.ttf"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro.svg"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-italic.eot"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-italic.woff"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-italic.ttf"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-italic.svg"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-bold.eot"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-bold.woff"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-bold.ttf"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-bold.svg"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-italic-bold.eot"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-italic-bold.woff"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-italic-bold.ttf"},function(n,e,t){n.exports=t.p+"./assets/fonts/myriad-pro-italic-bold.svg"},function(n,e,t){var r=t(57);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(n.exports=t(0)(!1)).push([n.i,'html {\n  color: #000;\n  background-color: #fff;\n  font-size: 12px;\n  font-family: "Myriad Pro", Arial, sans-serif;\n}\n@media only screen and (max-width: 1024px) {\n  html {\n    font-size: 4.800000000000001px;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1440px) {\n  html {\n    font-size: 6px;\n  }\n}\n@media only screen and (min-width: 1440px) and (max-width: 1680px) {\n  html {\n    font-size: 7.199999999999999px;\n  }\n}\n@media only screen and (min-width: 1680px) and (max-width: 1920px) {\n  html {\n    font-size: 8.399999999999999px;\n  }\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n.main-wrapper {\n  width: 90.8%;\n  min-width: 320px;\n  max-width: 1920px;\n  margin: 0 auto;\n  padding-bottom: 15.83333333rem;\n  display: flex;\n  justify-content: space-between;\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper {\n    flex-direction: column;\n    padding-left: 0.666666666rem;\n    padding-right: 0.666666666rem;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper {\n    flex-direction: row;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__col-1 {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__col-1 {\n    width: 36.8%;\n    padding-top: 14.66666666rem;\n    padding-left: 0.666666666rem;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__col-2 {\n    width: 100%;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__col-2 {\n    width: 56.2%;\n    padding-top: 12.41666666rem;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__person-card {\n    margin-top: 10rem;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__person-card {\n    margin-top: 0;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__profile {\n    margin-top: 10rem;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__profile {\n    margin-top: 13.5rem;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__contact {\n    margin-top: 10rem;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__contact {\n    margin-top: 8.1rem;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__skills {\n    margin-top: 10rem;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__skills {\n    margin-top: 3.3rem;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__education {\n    margin-top: 10rem;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__education {\n    margin-top: 0;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__experience {\n    margin-top: 10rem;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__experience {\n    margin-top: 8.1rem;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .main-wrapper__software {\n    margin-top: 10rem;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .main-wrapper__software {\n    margin-top: 8.5rem;\n  }\n}\n',""])}]);