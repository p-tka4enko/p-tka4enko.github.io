module.exports=function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var r=class{constructor(){this._error={MIN_SHOULD_BE_NUMBER:"Тип свойства min должно быть number",MAX_SHOULD_BE_NUMBER:"Тип свойства max должно быть number",FROM_SHOULD_BE_NUMBER:"Тип свойства from должно быть number",TO_SHOULD_BE_NUMBER:"Тип свойства to должно быть number",STEP_SHOULD_BE_NUMBER:"Тип свойства step должно быть number",RANGE_SHOULD_BE_BOOLEAN:"Тип свойства range должно быть boolean",VERTICAL_SHOULD_BE_BOOLEAN:"Тип свойства vertical должно быть boolean",DISPLAY_HINT_SHOULD_BE_BOOLEAN:"Тип свойства displayHint должно быть boolean",DISPLAY_TRACKER_SHOULD_BE_BOOLEAN:"Тип свойства displayTracker должно быть boolean",DISPLAY_GRID_SHOULD_BE_BOOLEAN:"Тип свойства displayGrid должно быть boolean",GRID_STEP_SHOULD_BE_NUMBER:"Тип свойства gridStep должно быть number",DISABLED_SHOULD_BE_BOOLEAN:"Тип свойства disabled должно быть boolean",ON_INIT_SHOULD_BE_FUNCTION_OR_NULL:"Тип свойства onInit должно быть function или null",ON_START_SHOULD_BE_FUNCTION_OR_NULL:"Тип свойства onStart должно быть function или null",ON_SLIDE_SHOULD_BE_FUNCTION_OR_NULL:"Тип свойства onSlide должно быть function или null",ON_CHANGE_SHOULD_BE_FUNCTION_OR_NULL:"Тип свойства onChange должно быть function или null",ON_FINISH_SHOULD_BE_FUNCTION_OR_NULL:"Тип свойства onFinish должно быть function или null",ON_UPDATE_SHOULD_BE_FUNCTION_OR_NULL:"Тип свойства onUpdate должно быть function или null"}}getNormalizedConfig(t){let{min:e,max:i,step:r,from:n,to:s}=t;return e=Number(e.toFixed(4)),i=Number(i.toFixed(4)),r=Number(r.toFixed(4)),i<e&&(i=e),(n=this.getNormalizedValue(n,e,i,r))>(s=this.getNormalizedValue(s,n,i,r))&&(n=s),{...t,min:e,max:i,step:r,from:n,to:s}}getNormalizedValue(t,e,i,r){let n=t;if(n<e)n=e;else if(n<=i-(i-e)%r){const t=Number((n-(n-e)%r).toFixed(4)),i=Number((n+r-(n-e)%r).toFixed(4));n=n<(t+i)/2?t:i}else n=i;return n}checkConfigTypes(t){if("number"!=typeof t.min||Number.isNaN(t.min))throw new Error(this._error.MIN_SHOULD_BE_NUMBER);if("number"!=typeof t.max||Number.isNaN(t.max))throw new Error(this._error.MAX_SHOULD_BE_NUMBER);if("number"!=typeof t.from||Number.isNaN(t.from))throw new Error(this._error.FROM_SHOULD_BE_NUMBER);if("number"!=typeof t.to||Number.isNaN(t.to))throw new Error(this._error.TO_SHOULD_BE_NUMBER);if("number"!=typeof t.step||Number.isNaN(t.step))throw new Error(this._error.STEP_SHOULD_BE_NUMBER);if("boolean"!=typeof t.range)throw new Error(this._error.RANGE_SHOULD_BE_BOOLEAN);if("boolean"!=typeof t.vertical)throw new Error(this._error.VERTICAL_SHOULD_BE_BOOLEAN);if("boolean"!=typeof t.displayHint)throw new Error(this._error.DISPLAY_HINT_SHOULD_BE_BOOLEAN);if("boolean"!=typeof t.displayTracker)throw new Error(this._error.DISPLAY_TRACKER_SHOULD_BE_BOOLEAN);if("boolean"!=typeof t.displayGrid)throw new Error(this._error.DISPLAY_GRID_SHOULD_BE_BOOLEAN);if("number"!=typeof t.gridStep||Number.isNaN(t.gridStep))throw new Error(this._error.GRID_STEP_SHOULD_BE_NUMBER);if("boolean"!=typeof t.disabled)throw new Error(this._error.DISABLED_SHOULD_BE_BOOLEAN);if("function"!=typeof t.onInit&&null!==t.onInit)throw new Error(this._error.ON_INIT_SHOULD_BE_FUNCTION_OR_NULL);if("function"!=typeof t.onStart&&null!==t.onStart)throw new Error(this._error.ON_START_SHOULD_BE_FUNCTION_OR_NULL);if("function"!=typeof t.onSlide&&null!==t.onSlide)throw new Error(this._error.ON_SLIDE_SHOULD_BE_FUNCTION_OR_NULL);if("function"!=typeof t.onChange&&null!==t.onChange)throw new Error(this._error.ON_CHANGE_SHOULD_BE_FUNCTION_OR_NULL);if("function"!=typeof t.onFinish&&null!==t.onFinish)throw new Error(this._error.ON_FINISH_SHOULD_BE_FUNCTION_OR_NULL);if("function"!=typeof t.onUpdate&&null!==t.onUpdate)throw new Error(this._error.ON_UPDATE_SHOULD_BE_FUNCTION_OR_NULL)}toString(){return'{"class": "ConfigNormalizer"}'}};var n=class{constructor(...t){this.handle={FROM:1,TO:2},this._currentHandle=null,this._observers=[],this._initialConfig=null,this._config=null,this._configNormalizer=new r,this._initConfig(t)}addObserver(t){return!(this._observers.filter(e=>e===t).length>0||(this._observers.push(t),0))}getConfig(){return this._config}startSlide(t){return!this._currentHandle&&!this._config.disabled&&(this._currentHandle=t,this._call(this._config.onStart),!0)}finishSlide(){return!!this._currentHandle&&(this._currentHandle=null,this._call(this._config.onFinish),!0)}slide(t){if(!this._currentHandle)return;const e=this._configNormalizer,i=this._config,{min:r,max:n,from:s,to:o,step:l,range:a,onChange:_,onSlide:d}=i;this._currentHandle===this.handle.FROM?i.from=e.getNormalizedValue(t,r,a?o:n,l):this._currentHandle===this.handle.TO&&(i.to=e.getNormalizedValue(t,s,n,l)),i.from===s&&i.to===o||this._call(_),this._call(d),this._notifyObservers()}update(t){const{onUpdate:e}=this._config;Object.assign(this._config,this.validate(t)),this._call(e),this._notifyObservers()}reset(){this.update(this._initialConfig)}validate(t){const e=this._configNormalizer,i={...this._config,...t};return e.checkConfigTypes(i),e.getNormalizedConfig(i)}getNearestHandle(t){const{range:e,from:i,to:r}=this._config;return e&&Math.abs(i-t-1)>Math.abs(r-t+1)?this.handle.TO:this.handle.FROM}toString(){return JSON.stringify({class:"Model",...this._config})}_initConfig(t){this._config={min:0,max:100,range:!1,from:0,to:10,step:1,vertical:!1,displayHint:!1,displayTracker:!1,displayGrid:!1,gridStep:25,disabled:!1,onInit:null,onStart:null,onSlide:null,onChange:null,onFinish:null,onUpdate:null},t.forEach(t=>{Object.assign(this._config,t)}),this._config=this.validate(this._config),this._initialConfig={...this._config},this._call(this._config.onInit)}_notifyObservers(){this._observers.forEach(t=>{t()})}_call(t){"function"==typeof t&&t(this._config)}};var s=class{constructor(t,e,i){this._model=t,this._views=e,this._id=i,this._bindEvents()}toString(){return`{"class": "Controller", "id": "${this._id}"}`}_bindEvents(){const t=$(window),e=$(document);this._views.mainView.getRoot().on(`mousedown.Controller${this._id}`,this._handleStartSlide.bind(this)),t.on(`mousemove.Controller${this._id}`,this._handleSlide.bind(this)),t.on(`mouseup.Controller${this._id}`,this._model.finishSlide.bind(this._model)),t.on(`resize.Controller${this._id}`,this._updateViews.bind(this)),e.ready(this._updateViews.bind(this))}_handleStartSlide(t){t.preventDefault();const e=this._calculateValue(t),i=this._model.getNearestHandle(e);this._model.startSlide(i),this._model.slide(e)}_handleSlide(t){const e=this._calculateValue(t);this._model.slide(e)}_calculateValue(t){const{vertical:e,min:i,max:r}=this._model.getConfig(),n=this._getPointCoord(t),s=this._getSliderSizeInPx();return i+(r-i)*(e?1-n/(s-1):n/(s-1))}_getPointCoord(t){const{vertical:e}=this._model.getConfig(),{mainView:i}=this._views,r=t.pageX-i.getRoot().offset().left,n=t.pageY-i.getRoot().offset().top;return e?n:r}_getSliderSizeInPx(){const{vertical:t}=this._model.getConfig(),{mainView:e}=this._views;return t?e.getRoot().height():e.getRoot().width()}_updateViews(){const{mainView:t,handleView:e,hintView:i,trackerView:r,gridView:n}=this._views;t.update(),e.update(),i.update(),r.update(),n.update()}};var o=class{constructor(t,e){this._model=t,this._$root=$(e).addClass("range-slider"),this._model.addObserver(this.update.bind(this))}getRoot(){return this._$root}update(){const{vertical:t}=this._model.getConfig();t?this._setToVertical():this._setToHorizontal()}toString(){return'{"class": "MainView"}'}_setToVertical(){this._$root.addClass("range-slider_vertical")}_setToHorizontal(){this._$root.removeClass("range-slider_vertical")}};var l=class{constructor(t,e){this._model=t,this._$leftHandle=$("<div>").appendTo(e).addClass("range-slider__handle"),this._$rightHandle=$("<div>").appendTo(e).addClass("range-slider__handle"),this._model.addObserver(this.update.bind(this))}getLeftHandle(){return this._$leftHandle}getRightHandle(){return this._$rightHandle}update(){const{range:t}=this._model.getConfig();t?this._displayRightHandle():this._hideRightHandle(),this._calculateHandlePosition()}toString(){return'{"class": "HandleView"}'}_displayRightHandle(){this._$rightHandle.removeClass("range-slider__handle_hidden")}_hideRightHandle(){this._$rightHandle.addClass("range-slider__handle_hidden")}_calculateHandlePosition(){const{min:t,max:e,from:i,to:r,vertical:n}=this._model.getConfig(),s=t!==e?(i-t)/(e-t)*100:0,o=t!==e?(r-t)/(e-t)*100:0;n?(this._$leftHandle.css("bottom",`${s}%`).css("left",""),this._$rightHandle.css("bottom",`${o}%`).css("left","")):(this._$leftHandle.css("left",`${s}%`).css("bottom",""),this._$rightHandle.css("left",`${o}%`).css("bottom",""))}};var a=class{constructor(t,e){this._model=t,this._handleView=e,this._$leftHint=$("<div>").appendTo(e.getLeftHandle()).addClass("range-slider__hint"),this._$rightHint=$("<div>").appendTo(e.getRightHandle()).addClass("range-slider__hint"),this._model.addObserver(this.update.bind(this))}update(){const{displayHint:t,from:e,to:i}=this._model.getConfig();t?(this._displayHints(),this._setHintText(e,i),this._calculateHintPosition()):this._hideHints()}toString(){return'{"class": "HintView"}'}_displayHints(){this._$leftHint.removeClass("range-slider__hint_hidden"),this._$rightHint.removeClass("range-slider__hint_hidden")}_hideHints(){this._$leftHint.addClass("range-slider__hint_hidden"),this._$rightHint.addClass("range-slider__hint_hidden")}_setHintText(t,e){this._$leftHint.text(t),this._$rightHint.text(e)}_calculateHintPosition(){const t=this._$leftHint,e=this._$rightHint,i=this._handleView.getLeftHandle(),r=this._handleView.getRightHandle(),n=i.offset().top,s=i.offset().top+i.outerHeight(),o=i.offset().left,l=i.offset().left+i.outerWidth(),a=r.offset().top,_=r.offset().top+r.outerHeight(),d=r.offset().left,h=r.offset().left+r.outerWidth(),{vertical:c,from:f,to:u}=this._model.getConfig();c?(this._alignObjBetweenVerticalPoints(t,n,s),this._alignObjBetweenVerticalPoints(e,a,_),t.css("left",""),e.css("left","")):(this._alignObjBetweenHorizontalPoints(t,o,l),this._alignObjBetweenHorizontalPoints(e,d,h),t.css("top",""),e.css("top","")),this._checkCollisionOfHints()&&(t.text(`${f} — ${u}`),e.addClass("range-slider__hint_hidden"),c?this._alignObjBetweenVerticalPoints(t,a,s):this._alignObjBetweenHorizontalPoints(t,o,h))}_alignObjBetweenHorizontalPoints(t,e,i){let r=e-(t.outerWidth()-i+e)/2;r=this._getOffsetLeftWithoutFallingOutOfDocument(r,t.outerWidth()),t.offset({left:r})}_alignObjBetweenVerticalPoints(t,e,i){let r=e-(t.outerHeight()-i+e)/2;r=this._getOffsetTopWithoutFallingOutOfDocument(r,t.outerHeight()),t.offset({top:r})}_getOffsetLeftWithoutFallingOutOfDocument(t,e){const i=$("html").width();return t<0?0:t+e>i?i-e:t}_getOffsetTopWithoutFallingOutOfDocument(t){return t<0?0:t}_checkCollisionOfHints(){const t=this._$leftHint,e=this._$rightHint;if("hidden"===t.css("visibility")||"hidden"===e.css("visibility"))return!1;const i=t.offset().left,r=t.offset().left+t.outerWidth(),n=e.offset().left,s=e.offset().left+e.outerWidth(),o=!(i<=n&&r<=n||i>=s&&r>=s),l=t.offset().top,a=t.offset().top+t.outerHeight(),_=e.offset().top,d=e.offset().top+e.outerHeight();return o&&!(l<=_&&a<=_||l>=d&&a>=d)}};var _=class{constructor(t,e){this._model=t,this._$tracker=$("<div>").appendTo(e).addClass("range-slider__tracker"),this._model.addObserver(this.update.bind(this))}update(){const{displayTracker:t}=this._model.getConfig();t?(this._displayTracker(),this._calculateTrackerSize(),this._calculateTrackerPosition()):this._hideTracker()}toString(){return'{"class": "TrackerView"}'}_displayTracker(){this._$tracker.removeClass("range-slider__tracker_hidden")}_hideTracker(){this._$tracker.addClass("range-slider__tracker_hidden")}_calculateTrackerSize(){const{min:t,max:e,from:i,to:r,range:n,vertical:s}=this._model.getConfig(),o=t!==e?(i-t)/(e-t)*100:0,l=n?(t!==e?(r-t)/(e-t)*100:0)-o:o;s?this._$tracker.css("height",`${l}%`).css("width",""):this._$tracker.css("width",`${l}%`).css("height","")}_calculateTrackerPosition(){const{min:t,max:e,from:i,range:r,vertical:n}=this._model.getConfig(),s=r?(i-t)/(e-t)*100:0;n?this._$tracker.css("bottom",`${s}%`).css("left",""):this._$tracker.css("left",`${s}%`).css("bottom","")}};var d=class{constructor(t,e){this._model=t,this._$grid=$("<div>").appendTo(e).addClass("range-slider__grid"),this._model.addObserver(this.update.bind(this))}update(){const{displayGrid:t}=this._model.getConfig();t?(this._displayGrid(),this._updateGrid()):this._hideGrid()}toString(){return'{"class": "GridView"}'}_displayGrid(){this._$grid.removeClass("range-slider__grid_hidden")}_hideGrid(){this._$grid.addClass("range-slider__grid_hidden")}_updateGrid(){const{min:t,max:e,gridStep:i,vertical:r}=this._model.getConfig();this._$grid.empty();for(let n=t;n<e;n+=i){const s=(n-t)/(e-t)*100,o=r?"bottom":"left";this._addGridMark(n,s,o),n+i>=e&&this._addGridMark(e,100,o)}}_addGridMark(t,e,i){$("<div>").appendTo(this._$grid).addClass("range-slider__grid-mark").text(t).css(i,`${e}%`)}};class h{constructor(t){this.handle=t.handle,this._model=t}slide(t,e){this._model.startSlide(t),this._model.slide(e),this._model.finishSlide()}update(t){this._model.update(t)}reset(){this._model.reset()}toString(){return'{"class": "RangeSlider"}'}static init(t){const e=t;e.fn.rangeSlider=function(t){return this.each(function(i){if(!e(this).data("range-slider")){const r=e(this).data(),c=new n(t,r),f=new o(c,this),u=new l(c,this),g=new a(c,u),O=new _(c,this),m=new d(c,this);new s(c,{mainView:f,handleView:u,hintView:g,trackerView:O,gridView:m},i),e(this).data("range-slider",new h(c))}})}}}e.default=h}]);