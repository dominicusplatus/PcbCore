(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(3);
	var aspnet_prerendering_1 = __webpack_require__(4);
	var core_1 = __webpack_require__(5);
	var angular2_universal_1 = __webpack_require__(6);
	var app_module_1 = __webpack_require__(7);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = aspnet_prerendering_1.createServerRenderer(function (params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                document: '<app></app>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(148);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("./vendor");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(48);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(54);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(2);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(118);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var router_1 = __webpack_require__(8);
	var angular2_universal_1 = __webpack_require__(6);
	var app_component_1 = __webpack_require__(9);
	var globaltoolmenu_component_1 = __webpack_require__(14);
	var designtoolmenu_component_1 = __webpack_require__(18);
	var designview_component_1 = __webpack_require__(22);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            globaltoolmenu_component_1.GlobalMenuComponent,
	            designtoolmenu_component_1.DesignToolMenuComponent,
	            designview_component_1.DesignViewComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'designview', pathMatch: 'full' },
	                { path: 'globaltool-menu', component: globaltoolmenu_component_1.GlobalMenuComponent },
	                { path: 'designtool-menu', component: designtoolmenu_component_1.DesignToolMenuComponent },
	                { path: 'designview', component: designview_component_1.DesignViewComponent },
	                { path: '**', redirectTo: 'designview' }
	            ])
	        ]
	    }),
	    __metadata("design:paramtypes", [])
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(63);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	//require("css!./main.css");
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(10),
	        styles: [__webpack_require__(11)]
	    }),
	    __metadata("design:paramtypes", [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div id='mainpage' class='container'>\n\n       <router-outlet></router-outlet>\n\n    <div id='containerTop' class=' layoutcontainer'>\n           <div class=\"container col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                   <globaltool-menu></globaltool-menu>\n          </div>\n    </div>\n\n     <div id='containerMiddle'  class=' layoutcontainer'>\n\n        <div id='contentContMain' class=\"col-md-10 no-float\">\n                   <designview></designview>\n        </div>\n            \n        <div id='contentContTool'  class=\"col-md-2 no-float\">\n\n        </div>\n           \n    </div>\n \n     <div id='containerBottom'  class=' layoutcontainer'>\n           <div class=\"container col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                  <designtool-menu></designtool-menu>\n          </div>\n       \n    </div>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(12);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(37);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var GlobalMenuComponent = (function () {
	    function GlobalMenuComponent() {
	    }
	    return GlobalMenuComponent;
	}());
	GlobalMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'globaltool-menu',
	        template: __webpack_require__(15),
	        styles: [__webpack_require__(16)]
	    }),
	    __metadata("design:paramtypes", [])
	], GlobalMenuComponent);
	exports.GlobalMenuComponent = GlobalMenuComponent;


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-top\">\n\n  <div class=\"container\">\n\n        <div class=\"container col-xs-6 col-sm-6 col-md-3\">\n            <div class=\"collapse navbar-collapse \">\n                <a href=\"#\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-floppy-open\"></span>  \n                </a>\n            </div>\n       </div>\n\n       <div class=\"container col-xs-6 col-sm-6 col-md-3\">\n            <div class=\"collapse navbar-collapse \">\n                <a href=\"#\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-plus\"></span>  \n                </a>\n            </div>\n       </div>\n\n       <div class=\"container col-xs-6 col-sm-6 col-md-3\">\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu4\">\n            <li><a href=\"#\">sch1</a></li>\n            <li><a href=\"#\">pcb1</a></li>\n        </ul>\n      </div>\n\n  </div>\n\n</div>\n\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(17);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var DesignToolMenuComponent = (function () {
	    function DesignToolMenuComponent() {
	    }
	    return DesignToolMenuComponent;
	}());
	DesignToolMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'designtool-menu',
	        template: __webpack_require__(19),
	        styles: [__webpack_require__(20)]
	    }),
	    __metadata("design:paramtypes", [])
	], DesignToolMenuComponent);
	exports.DesignToolMenuComponent = DesignToolMenuComponent;


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-top\">\n\n  <div class=\"container\">\n\n        <div class=\"container col-xs-6 col-sm-6 col-md-3 col-lg-3\">\n            <div class=\"collapse navbar-collapse \">\n                <a href=\"#\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-floppy-open\"></span>  \n                </a>\n            </div>\n       </div>\n\n       <div class=\"container col-xs-6 col-sm-6 col-md-3\">\n            <div class=\"collapse navbar-collapse \">\n                <a href=\"#\" class=\"btn btn-default btn-lg\">\n                    <span class=\"glyphicon glyphicon-plus\"></span>  \n                </a>\n            </div>\n       </div>\n\n       <div class=\"container col-xs-6 col-sm-6 col-md-3\">\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu4\">\n            <li><a href=\"#\">sch1</a></li>\n            <li class=\"disabled\"><a href=\"#\">Disabled link</a></li>\n            <li><a href=\"#\">pcb1</a></li>\n        </ul>\n      </div>\n\n  </div>\n\n</div>\n\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(21);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(5);
	var SchematicGridDrawingTool_1 = __webpack_require__(23);
	var DesignViewComponent = (function () {
	    function DesignViewComponent() {
	        this.drawtool = new SchematicGridDrawingTool_1.SchematicGridDrawingTool();
	    }
	    DesignViewComponent.prototype.draw = function () {
	        this.drawtool.draw();
	        var c = document.getElementById("myCanvas");
	        var ctx = c.getContext("2d");
	        ctx.moveTo(0, 0);
	        ctx.lineTo(200, 100);
	        ctx.stroke();
	        /*
	                        var drawer = Raphael("myCanvas", 200, 200);
	                        var circle =    drawer.circle(50, 40, 10);
	                        circle.attr("fill", "#f00");
	                        circle.attr("stroke", "#fff");
	        */
	    };
	    DesignViewComponent.prototype.clicked = function (event) {
	        this.draw();
	    };
	    return DesignViewComponent;
	}());
	DesignViewComponent = __decorate([
	    core_1.Component({
	        selector: 'designview',
	        template: __webpack_require__(26),
	        styles: [__webpack_require__(27)]
	    }),
	    __metadata("design:paramtypes", [])
	], DesignViewComponent);
	exports.DesignViewComponent = DesignViewComponent;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var popups = __webpack_require__(24);
	var SchematicGridDrawingTool = (function () {
	    function SchematicGridDrawingTool() {
	    }
	    //public drawer: Raphael; // = new Raphael()
	    SchematicGridDrawingTool.prototype.draw = function () {
	        popups.alert("Hello world!");
	        //this.drawer =  new Raphael(50, 50, 400, 400);
	        /*
	        var drawer = Raphael(50, 50, 400, 400);
	       var circle =    drawer.circle(50, 40, 10);
	       circle.attr("fill", "#f00");
	       circle.attr("stroke", "#fff");
	     
	       */
	    };
	    return SchematicGridDrawingTool;
	}());
	exports.SchematicGridDrawingTool = SchematicGridDrawingTool;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * bootbox.js [v4.4.0]
	 *
	 * http://bootboxjs.com/license.txt
	 */
	
	// @see https://github.com/makeusabrew/bootbox/issues/180
	// @see https://github.com/makeusabrew/bootbox/issues/186
	(function (root, factory) {
	
	  "use strict";
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(25)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(require("jquery"));
	  } else {
	    // Browser globals (root is window)
	    root.bootbox = factory(root.jQuery);
	  }
	
	}(this, function init($, undefined) {
	
	  "use strict";
	
	  // the base DOM structure needed to create a modal
	  var templates = {
	    dialog:
	      "<div class='bootbox modal' tabindex='-1' role='dialog'>" +
	        "<div class='modal-dialog'>" +
	          "<div class='modal-content'>" +
	            "<div class='modal-body'><div class='bootbox-body'></div></div>" +
	          "</div>" +
	        "</div>" +
	      "</div>",
	    header:
	      "<div class='modal-header'>" +
	        "<h4 class='modal-title'></h4>" +
	      "</div>",
	    footer:
	      "<div class='modal-footer'></div>",
	    closeButton:
	      "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
	    form:
	      "<form class='bootbox-form'></form>",
	    inputs: {
	      text:
	        "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
	      textarea:
	        "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
	      email:
	        "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
	      select:
	        "<select class='bootbox-input bootbox-input-select form-control'></select>",
	      checkbox:
	        "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
	      date:
	        "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
	      time:
	        "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
	      number:
	        "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
	      password:
	        "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
	    }
	  };
	
	  var defaults = {
	    // default language
	    locale: "en",
	    // show backdrop or not. Default to static so user has to interact with dialog
	    backdrop: "static",
	    // animate the modal in/out
	    animate: true,
	    // additional class string applied to the top level dialog
	    className: null,
	    // whether or not to include a close button
	    closeButton: true,
	    // show the dialog immediately by default
	    show: true,
	    // dialog container
	    container: "body"
	  };
	
	  // our public object; augmented after our private API
	  var exports = {};
	
	  /**
	   * @private
	   */
	  function _t(key) {
	    var locale = locales[defaults.locale];
	    return locale ? locale[key] : locales.en[key];
	  }
	
	  function processCallback(e, dialog, callback) {
	    e.stopPropagation();
	    e.preventDefault();
	
	    // by default we assume a callback will get rid of the dialog,
	    // although it is given the opportunity to override this
	
	    // so, if the callback can be invoked and it *explicitly returns false*
	    // then we'll set a flag to keep the dialog active...
	    var preserveDialog = $.isFunction(callback) && callback.call(dialog, e) === false;
	
	    // ... otherwise we'll bin it
	    if (!preserveDialog) {
	      dialog.modal("hide");
	    }
	  }
	
	  function getKeyLength(obj) {
	    // @TODO defer to Object.keys(x).length if available?
	    var k, t = 0;
	    for (k in obj) {
	      t ++;
	    }
	    return t;
	  }
	
	  function each(collection, iterator) {
	    var index = 0;
	    $.each(collection, function(key, value) {
	      iterator(key, value, index++);
	    });
	  }
	
	  function sanitize(options) {
	    var buttons;
	    var total;
	
	    if (typeof options !== "object") {
	      throw new Error("Please supply an object of options");
	    }
	
	    if (!options.message) {
	      throw new Error("Please specify a message");
	    }
	
	    // make sure any supplied options take precedence over defaults
	    options = $.extend({}, defaults, options);
	
	    if (!options.buttons) {
	      options.buttons = {};
	    }
	
	    buttons = options.buttons;
	
	    total = getKeyLength(buttons);
	
	    each(buttons, function(key, button, index) {
	
	      if ($.isFunction(button)) {
	        // short form, assume value is our callback. Since button
	        // isn't an object it isn't a reference either so re-assign it
	        button = buttons[key] = {
	          callback: button
	        };
	      }
	
	      // before any further checks make sure by now button is the correct type
	      if ($.type(button) !== "object") {
	        throw new Error("button with key " + key + " must be an object");
	      }
	
	      if (!button.label) {
	        // the lack of an explicit label means we'll assume the key is good enough
	        button.label = key;
	      }
	
	      if (!button.className) {
	        if (total <= 2 && index === total-1) {
	          // always add a primary to the main option in a two-button dialog
	          button.className = "btn-primary";
	        } else {
	          button.className = "btn-default";
	        }
	      }
	    });
	
	    return options;
	  }
	
	  /**
	   * map a flexible set of arguments into a single returned object
	   * if args.length is already one just return it, otherwise
	   * use the properties argument to map the unnamed args to
	   * object properties
	   * so in the latter case:
	   * mapArguments(["foo", $.noop], ["message", "callback"])
	   * -> { message: "foo", callback: $.noop }
	   */
	  function mapArguments(args, properties) {
	    var argn = args.length;
	    var options = {};
	
	    if (argn < 1 || argn > 2) {
	      throw new Error("Invalid argument length");
	    }
	
	    if (argn === 2 || typeof args[0] === "string") {
	      options[properties[0]] = args[0];
	      options[properties[1]] = args[1];
	    } else {
	      options = args[0];
	    }
	
	    return options;
	  }
	
	  /**
	   * merge a set of default dialog options with user supplied arguments
	   */
	  function mergeArguments(defaults, args, properties) {
	    return $.extend(
	      // deep merge
	      true,
	      // ensure the target is an empty, unreferenced object
	      {},
	      // the base options object for this type of dialog (often just buttons)
	      defaults,
	      // args could be an object or array; if it's an array properties will
	      // map it to a proper options object
	      mapArguments(
	        args,
	        properties
	      )
	    );
	  }
	
	  /**
	   * this entry-level method makes heavy use of composition to take a simple
	   * range of inputs and return valid options suitable for passing to bootbox.dialog
	   */
	  function mergeDialogOptions(className, labels, properties, args) {
	    //  build up a base set of dialog properties
	    var baseOptions = {
	      className: "bootbox-" + className,
	      buttons: createLabels.apply(null, labels)
	    };
	
	    // ensure the buttons properties generated, *after* merging
	    // with user args are still valid against the supplied labels
	    return validateButtons(
	      // merge the generated base properties with user supplied arguments
	      mergeArguments(
	        baseOptions,
	        args,
	        // if args.length > 1, properties specify how each arg maps to an object key
	        properties
	      ),
	      labels
	    );
	  }
	
	  /**
	   * from a given list of arguments return a suitable object of button labels
	   * all this does is normalise the given labels and translate them where possible
	   * e.g. "ok", "confirm" -> { ok: "OK, cancel: "Annuleren" }
	   */
	  function createLabels() {
	    var buttons = {};
	
	    for (var i = 0, j = arguments.length; i < j; i++) {
	      var argument = arguments[i];
	      var key = argument.toLowerCase();
	      var value = argument.toUpperCase();
	
	      buttons[key] = {
	        label: _t(value)
	      };
	    }
	
	    return buttons;
	  }
	
	  function validateButtons(options, buttons) {
	    var allowedButtons = {};
	    each(buttons, function(key, value) {
	      allowedButtons[value] = true;
	    });
	
	    each(options.buttons, function(key) {
	      if (allowedButtons[key] === undefined) {
	        throw new Error("button key " + key + " is not allowed (options are " + buttons.join("\n") + ")");
	      }
	    });
	
	    return options;
	  }
	
	  exports.alert = function() {
	    var options;
	
	    options = mergeDialogOptions("alert", ["ok"], ["message", "callback"], arguments);
	
	    if (options.callback && !$.isFunction(options.callback)) {
	      throw new Error("alert requires callback property to be a function when provided");
	    }
	
	    /**
	     * overrides
	     */
	    options.buttons.ok.callback = options.onEscape = function() {
	      if ($.isFunction(options.callback)) {
	        return options.callback.call(this);
	      }
	      return true;
	    };
	
	    return exports.dialog(options);
	  };
	
	  exports.confirm = function() {
	    var options;
	
	    options = mergeDialogOptions("confirm", ["cancel", "confirm"], ["message", "callback"], arguments);
	
	    /**
	     * overrides; undo anything the user tried to set they shouldn't have
	     */
	    options.buttons.cancel.callback = options.onEscape = function() {
	      return options.callback.call(this, false);
	    };
	
	    options.buttons.confirm.callback = function() {
	      return options.callback.call(this, true);
	    };
	
	    // confirm specific validation
	    if (!$.isFunction(options.callback)) {
	      throw new Error("confirm requires a callback");
	    }
	
	    return exports.dialog(options);
	  };
	
	  exports.prompt = function() {
	    var options;
	    var defaults;
	    var dialog;
	    var form;
	    var input;
	    var shouldShow;
	    var inputOptions;
	
	    // we have to create our form first otherwise
	    // its value is undefined when gearing up our options
	    // @TODO this could be solved by allowing message to
	    // be a function instead...
	    form = $(templates.form);
	
	    // prompt defaults are more complex than others in that
	    // users can override more defaults
	    // @TODO I don't like that prompt has to do a lot of heavy
	    // lifting which mergeDialogOptions can *almost* support already
	    // just because of 'value' and 'inputType' - can we refactor?
	    defaults = {
	      className: "bootbox-prompt",
	      buttons: createLabels("cancel", "confirm"),
	      value: "",
	      inputType: "text"
	    };
	
	    options = validateButtons(
	      mergeArguments(defaults, arguments, ["title", "callback"]),
	      ["cancel", "confirm"]
	    );
	
	    // capture the user's show value; we always set this to false before
	    // spawning the dialog to give us a chance to attach some handlers to
	    // it, but we need to make sure we respect a preference not to show it
	    shouldShow = (options.show === undefined) ? true : options.show;
	
	    /**
	     * overrides; undo anything the user tried to set they shouldn't have
	     */
	    options.message = form;
	
	    options.buttons.cancel.callback = options.onEscape = function() {
	      return options.callback.call(this, null);
	    };
	
	    options.buttons.confirm.callback = function() {
	      var value;
	
	      switch (options.inputType) {
	        case "text":
	        case "textarea":
	        case "email":
	        case "select":
	        case "date":
	        case "time":
	        case "number":
	        case "password":
	          value = input.val();
	          break;
	
	        case "checkbox":
	          var checkedItems = input.find("input:checked");
	
	          // we assume that checkboxes are always multiple,
	          // hence we default to an empty array
	          value = [];
	
	          each(checkedItems, function(_, item) {
	            value.push($(item).val());
	          });
	          break;
	      }
	
	      return options.callback.call(this, value);
	    };
	
	    options.show = false;
	
	    // prompt specific validation
	    if (!options.title) {
	      throw new Error("prompt requires a title");
	    }
	
	    if (!$.isFunction(options.callback)) {
	      throw new Error("prompt requires a callback");
	    }
	
	    if (!templates.inputs[options.inputType]) {
	      throw new Error("invalid prompt type");
	    }
	
	    // create the input based on the supplied type
	    input = $(templates.inputs[options.inputType]);
	
	    switch (options.inputType) {
	      case "text":
	      case "textarea":
	      case "email":
	      case "date":
	      case "time":
	      case "number":
	      case "password":
	        input.val(options.value);
	        break;
	
	      case "select":
	        var groups = {};
	        inputOptions = options.inputOptions || [];
	
	        if (!$.isArray(inputOptions)) {
	          throw new Error("Please pass an array of input options");
	        }
	
	        if (!inputOptions.length) {
	          throw new Error("prompt with select requires options");
	        }
	
	        each(inputOptions, function(_, option) {
	
	          // assume the element to attach to is the input...
	          var elem = input;
	
	          if (option.value === undefined || option.text === undefined) {
	            throw new Error("given options in wrong format");
	          }
	
	          // ... but override that element if this option sits in a group
	
	          if (option.group) {
	            // initialise group if necessary
	            if (!groups[option.group]) {
	              groups[option.group] = $("<optgroup/>").attr("label", option.group);
	            }
	
	            elem = groups[option.group];
	          }
	
	          elem.append("<option value='" + option.value + "'>" + option.text + "</option>");
	        });
	
	        each(groups, function(_, group) {
	          input.append(group);
	        });
	
	        // safe to set a select's value as per a normal input
	        input.val(options.value);
	        break;
	
	      case "checkbox":
	        var values   = $.isArray(options.value) ? options.value : [options.value];
	        inputOptions = options.inputOptions || [];
	
	        if (!inputOptions.length) {
	          throw new Error("prompt with checkbox requires options");
	        }
	
	        if (!inputOptions[0].value || !inputOptions[0].text) {
	          throw new Error("given options in wrong format");
	        }
	
	        // checkboxes have to nest within a containing element, so
	        // they break the rules a bit and we end up re-assigning
	        // our 'input' element to this container instead
	        input = $("<div/>");
	
	        each(inputOptions, function(_, option) {
	          var checkbox = $(templates.inputs[options.inputType]);
	
	          checkbox.find("input").attr("value", option.value);
	          checkbox.find("label").append(option.text);
	
	          // we've ensured values is an array so we can always iterate over it
	          each(values, function(_, value) {
	            if (value === option.value) {
	              checkbox.find("input").prop("checked", true);
	            }
	          });
	
	          input.append(checkbox);
	        });
	        break;
	    }
	
	    // @TODO provide an attributes option instead
	    // and simply map that as keys: vals
	    if (options.placeholder) {
	      input.attr("placeholder", options.placeholder);
	    }
	
	    if (options.pattern) {
	      input.attr("pattern", options.pattern);
	    }
	
	    if (options.maxlength) {
	      input.attr("maxlength", options.maxlength);
	    }
	
	    // now place it in our form
	    form.append(input);
	
	    form.on("submit", function(e) {
	      e.preventDefault();
	      // Fix for SammyJS (or similar JS routing library) hijacking the form post.
	      e.stopPropagation();
	      // @TODO can we actually click *the* button object instead?
	      // e.g. buttons.confirm.click() or similar
	      dialog.find(".btn-primary").click();
	    });
	
	    dialog = exports.dialog(options);
	
	    // clear the existing handler focusing the submit button...
	    dialog.off("shown.bs.modal");
	
	    // ...and replace it with one focusing our input, if possible
	    dialog.on("shown.bs.modal", function() {
	      // need the closure here since input isn't
	      // an object otherwise
	      input.focus();
	    });
	
	    if (shouldShow === true) {
	      dialog.modal("show");
	    }
	
	    return dialog;
	  };
	
	  exports.dialog = function(options) {
	    options = sanitize(options);
	
	    var dialog = $(templates.dialog);
	    var innerDialog = dialog.find(".modal-dialog");
	    var body = dialog.find(".modal-body");
	    var buttons = options.buttons;
	    var buttonStr = "";
	    var callbacks = {
	      onEscape: options.onEscape
	    };
	
	    if ($.fn.modal === undefined) {
	      throw new Error(
	        "$.fn.modal is not defined; please double check you have included " +
	        "the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ " +
	        "for more details."
	      );
	    }
	
	    each(buttons, function(key, button) {
	
	      // @TODO I don't like this string appending to itself; bit dirty. Needs reworking
	      // can we just build up button elements instead? slower but neater. Then button
	      // can just become a template too
	      buttonStr += "<button data-bb-handler='" + key + "' type='button' class='btn " + button.className + "'>" + button.label + "</button>";
	      callbacks[key] = button.callback;
	    });
	
	    body.find(".bootbox-body").html(options.message);
	
	    if (options.animate === true) {
	      dialog.addClass("fade");
	    }
	
	    if (options.className) {
	      dialog.addClass(options.className);
	    }
	
	    if (options.size === "large") {
	      innerDialog.addClass("modal-lg");
	    } else if (options.size === "small") {
	      innerDialog.addClass("modal-sm");
	    }
	
	    if (options.title) {
	      body.before(templates.header);
	    }
	
	    if (options.closeButton) {
	      var closeButton = $(templates.closeButton);
	
	      if (options.title) {
	        dialog.find(".modal-header").prepend(closeButton);
	      } else {
	        closeButton.css("margin-top", "-10px").prependTo(body);
	      }
	    }
	
	    if (options.title) {
	      dialog.find(".modal-title").html(options.title);
	    }
	
	    if (buttonStr.length) {
	      body.after(templates.footer);
	      dialog.find(".modal-footer").html(buttonStr);
	    }
	
	
	    /**
	     * Bootstrap event listeners; used handle extra
	     * setup & teardown required after the underlying
	     * modal has performed certain actions
	     */
	
	    dialog.on("hidden.bs.modal", function(e) {
	      // ensure we don't accidentally intercept hidden events triggered
	      // by children of the current dialog. We shouldn't anymore now BS
	      // namespaces its events; but still worth doing
	      if (e.target === this) {
	        dialog.remove();
	      }
	    });
	
	    /*
	    dialog.on("show.bs.modal", function() {
	      // sadly this doesn't work; show is called *just* before
	      // the backdrop is added so we'd need a setTimeout hack or
	      // otherwise... leaving in as would be nice
	      if (options.backdrop) {
	        dialog.next(".modal-backdrop").addClass("bootbox-backdrop");
	      }
	    });
	    */
	
	    dialog.on("shown.bs.modal", function() {
	      dialog.find(".btn-primary:first").focus();
	    });
	
	    /**
	     * Bootbox event listeners; experimental and may not last
	     * just an attempt to decouple some behaviours from their
	     * respective triggers
	     */
	
	    if (options.backdrop !== "static") {
	      // A boolean true/false according to the Bootstrap docs
	      // should show a dialog the user can dismiss by clicking on
	      // the background.
	      // We always only ever pass static/false to the actual
	      // $.modal function because with `true` we can't trap
	      // this event (the .modal-backdrop swallows it)
	      // However, we still want to sort of respect true
	      // and invoke the escape mechanism instead
	      dialog.on("click.dismiss.bs.modal", function(e) {
	        // @NOTE: the target varies in >= 3.3.x releases since the modal backdrop
	        // moved *inside* the outer dialog rather than *alongside* it
	        if (dialog.children(".modal-backdrop").length) {
	          e.currentTarget = dialog.children(".modal-backdrop").get(0);
	        }
	
	        if (e.target !== e.currentTarget) {
	          return;
	        }
	
	        dialog.trigger("escape.close.bb");
	      });
	    }
	
	    dialog.on("escape.close.bb", function(e) {
	      if (callbacks.onEscape) {
	        processCallback(e, dialog, callbacks.onEscape);
	      }
	    });
	
	    /**
	     * Standard jQuery event listeners; used to handle user
	     * interaction with our dialog
	     */
	
	    dialog.on("click", ".modal-footer button", function(e) {
	      var callbackKey = $(this).data("bb-handler");
	
	      processCallback(e, dialog, callbacks[callbackKey]);
	    });
	
	    dialog.on("click", ".bootbox-close-button", function(e) {
	      // onEscape might be falsy but that's fine; the fact is
	      // if the user has managed to click the close button we
	      // have to close the dialog, callback or not
	      processCallback(e, dialog, callbacks.onEscape);
	    });
	
	    dialog.on("keyup", function(e) {
	      if (e.which === 27) {
	        dialog.trigger("escape.close.bb");
	      }
	    });
	
	    // the remainder of this method simply deals with adding our
	    // dialogent to the DOM, augmenting it with Bootstrap's modal
	    // functionality and then giving the resulting object back
	    // to our caller
	
	    $(options.container).append(dialog);
	
	    dialog.modal({
	      backdrop: options.backdrop ? "static": false,
	      keyboard: false,
	      show: false
	    });
	
	    if (options.show) {
	      dialog.modal("show");
	    }
	
	    // @TODO should we return the raw element here or should
	    // we wrap it in an object on which we can expose some neater
	    // methods, e.g. var d = bootbox.alert(); d.hide(); instead
	    // of d.modal("hide");
	
	   /*
	    function BBDialog(elem) {
	      this.elem = elem;
	    }
	
	    BBDialog.prototype = {
	      hide: function() {
	        return this.elem.modal("hide");
	      },
	      show: function() {
	        return this.elem.modal("show");
	      }
	    };
	    */
	
	    return dialog;
	
	  };
	
	  exports.setDefaults = function() {
	    var values = {};
	
	    if (arguments.length === 2) {
	      // allow passing of single key/value...
	      values[arguments[0]] = arguments[1];
	    } else {
	      // ... and as an object too
	      values = arguments[0];
	    }
	
	    $.extend(defaults, values);
	  };
	
	  exports.hideAll = function() {
	    $(".bootbox").modal("hide");
	
	    return exports;
	  };
	
	
	  /**
	   * standard locales. Please add more according to ISO 639-1 standard. Multiple language variants are
	   * unlikely to be required. If this gets too large it can be split out into separate JS files.
	   */
	  var locales = {
	    bg_BG : {
	      OK      : "Ок",
	      CANCEL  : "Отказ",
	      CONFIRM : "Потвърждавам"
	    },
	    br : {
	      OK      : "OK",
	      CANCEL  : "Cancelar",
	      CONFIRM : "Sim"
	    },
	    cs : {
	      OK      : "OK",
	      CANCEL  : "Zrušit",
	      CONFIRM : "Potvrdit"
	    },
	    da : {
	      OK      : "OK",
	      CANCEL  : "Annuller",
	      CONFIRM : "Accepter"
	    },
	    de : {
	      OK      : "OK",
	      CANCEL  : "Abbrechen",
	      CONFIRM : "Akzeptieren"
	    },
	    el : {
	      OK      : "Εντάξει",
	      CANCEL  : "Ακύρωση",
	      CONFIRM : "Επιβεβαίωση"
	    },
	    en : {
	      OK      : "OK",
	      CANCEL  : "Cancel",
	      CONFIRM : "OK"
	    },
	    es : {
	      OK      : "OK",
	      CANCEL  : "Cancelar",
	      CONFIRM : "Aceptar"
	    },
	    et : {
	      OK      : "OK",
	      CANCEL  : "Katkesta",
	      CONFIRM : "OK"
	    },
	    fa : {
	      OK      : "قبول",
	      CANCEL  : "لغو",
	      CONFIRM : "تایید"
	    },
	    fi : {
	      OK      : "OK",
	      CANCEL  : "Peruuta",
	      CONFIRM : "OK"
	    },
	    fr : {
	      OK      : "OK",
	      CANCEL  : "Annuler",
	      CONFIRM : "D'accord"
	    },
	    he : {
	      OK      : "אישור",
	      CANCEL  : "ביטול",
	      CONFIRM : "אישור"
	    },
	    hu : {
	      OK      : "OK",
	      CANCEL  : "Mégsem",
	      CONFIRM : "Megerősít"
	    },
	    hr : {
	      OK      : "OK",
	      CANCEL  : "Odustani",
	      CONFIRM : "Potvrdi"
	    },
	    id : {
	      OK      : "OK",
	      CANCEL  : "Batal",
	      CONFIRM : "OK"
	    },
	    it : {
	      OK      : "OK",
	      CANCEL  : "Annulla",
	      CONFIRM : "Conferma"
	    },
	    ja : {
	      OK      : "OK",
	      CANCEL  : "キャンセル",
	      CONFIRM : "確認"
	    },
	    lt : {
	      OK      : "Gerai",
	      CANCEL  : "Atšaukti",
	      CONFIRM : "Patvirtinti"
	    },
	    lv : {
	      OK      : "Labi",
	      CANCEL  : "Atcelt",
	      CONFIRM : "Apstiprināt"
	    },
	    nl : {
	      OK      : "OK",
	      CANCEL  : "Annuleren",
	      CONFIRM : "Accepteren"
	    },
	    no : {
	      OK      : "OK",
	      CANCEL  : "Avbryt",
	      CONFIRM : "OK"
	    },
	    pl : {
	      OK      : "OK",
	      CANCEL  : "Anuluj",
	      CONFIRM : "Potwierdź"
	    },
	    pt : {
	      OK      : "OK",
	      CANCEL  : "Cancelar",
	      CONFIRM : "Confirmar"
	    },
	    ru : {
	      OK      : "OK",
	      CANCEL  : "Отмена",
	      CONFIRM : "Применить"
	    },
	    sq : {
	      OK : "OK",
	      CANCEL : "Anulo",
	      CONFIRM : "Prano"
	    },
	    sv : {
	      OK      : "OK",
	      CANCEL  : "Avbryt",
	      CONFIRM : "OK"
	    },
	    th : {
	      OK      : "ตกลง",
	      CANCEL  : "ยกเลิก",
	      CONFIRM : "ยืนยัน"
	    },
	    tr : {
	      OK      : "Tamam",
	      CANCEL  : "İptal",
	      CONFIRM : "Onayla"
	    },
	    zh_CN : {
	      OK      : "OK",
	      CANCEL  : "取消",
	      CONFIRM : "确认"
	    },
	    zh_TW : {
	      OK      : "OK",
	      CANCEL  : "取消",
	      CONFIRM : "確認"
	    }
	  };
	
	  exports.addLocale = function(name, values) {
	    $.each(["OK", "CANCEL", "CONFIRM"], function(_, v) {
	      if (!values[v]) {
	        throw new Error("Please supply a translation for '" + v + "'");
	      }
	    });
	
	    locales[name] = {
	      OK: values.OK,
	      CANCEL: values.CANCEL,
	      CONFIRM: values.CONFIRM
	    };
	
	    return exports;
	  };
	
	  exports.removeLocale = function(name) {
	    delete locales[name];
	
	    return exports;
	  };
	
	  exports.setLocale = function(name) {
	    return exports.setDefaults("locale", name);
	  };
	
	  exports.init = function(_$) {
	    return init(_$ || $);
	  };
	
	  return exports;
	}));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(23);

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div id=\"middcontent\" class='container fill'>\n    <div class='row'>\n                <router-outlet></router-outlet>\n\n        <button type=\"button\" (click)=\"clicked($event)\" class=\"btn btn-primary btn-lg btn-block\">GO</button>\n\n\n        <script type=\"text/javascript\">\n                // Initialize container when document is loaded\n                window.onload = function () {\n                    require(['../raphael'], function(Raphael) {\n                        var paper = Raphael(\"myCanvas\", 640, 720);\n                        paper.circle(100, 100, 100).attr({'fill':'270-#FAE56B:0-#E56B6B:100'}); //example\n                    });\n                };\n                //Work here, in a separate script file or via command line\n            </script>\n            \n            \n        <canvas id=\"myCanvas\" width=\"200\" height=\"200\" style=\"border:1px solid #000000;\">\n            \n        </canvas> \n\n    </div>\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(28);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTljZjM4ZmFlMzY5ODE4YjMyN2QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscy9ub2RlLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCIuL3ZlbmRvclwiIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUtbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2NvcmUvYnVuZGxlcy9jb3JlLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwvbm9kZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9hcHAubW9kdWxlLnRzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvcm91dGVyL2J1bmRsZXMvcm91dGVyLnVtZC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3IiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3M/ZGRjMyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9nbG9iYWx0b29sbWVudS9nbG9iYWx0b29sbWVudS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dsb2JhbHRvb2xtZW51L2dsb2JhbHRvb2xtZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9nbG9iYWx0b29sbWVudS9nbG9iYWx0b29sbWVudS5jb21wb25lbnQuY3NzP2ExMzYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dsb2JhbHRvb2xtZW51L2dsb2JhbHRvb2xtZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rlc2lnbnRvb2xtZW51L2Rlc2lnbnRvb2xtZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudG9vbG1lbnUvZGVzaWdudG9vbG1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rlc2lnbnRvb2xtZW51L2Rlc2lnbnRvb2xtZW51LmNvbXBvbmVudC5jc3M/NjlhYiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudG9vbG1lbnUvZGVzaWdudG9vbG1lbnUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudmlldy9kZXNpZ252aWV3LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL3Rvb2xzL2RyYXdpbmcvU2NoZW1hdGljR3JpZERyYXdpbmdUb29sLnRzIiwid2VicGFjazovLy8uL34vYm9vdGJveC9ib290Ym94LmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvciIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudmlldy9kZXNpZ252aWV3LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZXNpZ252aWV3L2Rlc2lnbnZpZXcuY29tcG9uZW50LmNzcz85MzgwIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZXNpZ252aWV3L2Rlc2lnbnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixvREFBeUU7QUFDekUscUNBQStDO0FBQy9DLG1EQUF5RDtBQUN6RCwyQ0FBNkM7QUFNN0Msc0JBQWMsRUFBRSxDQUFDO0FBQ2pCLEtBQU0sUUFBUSxHQUFHLHdDQUFtQixFQUFFLENBQUM7O0FBRXZDLG1CQUFlLDBDQUFvQixDQUFDLGdCQUFNO0tBQ3RDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO1NBQzdDLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2xDLElBQUksRUFBRSwyQkFBMkI7YUFDakMsVUFBVSxFQUFFO2lCQUNSLE9BQU8sRUFBRSxHQUFHO2lCQUNaLFVBQVUsRUFBRSxNQUFNLENBQUMsR0FBRztpQkFDdEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2lCQUN4QixPQUFPLEVBQUUsS0FBSztpQkFDZCxRQUFRLEVBQUUsYUFBYTtjQUMxQjthQUNELGFBQWEsRUFBRSxVQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUs7aUJBQ3RELDZFQUE2RTtpQkFDN0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDaEIsQ0FBQztVQUNKLENBQUMsQ0FBQztTQUVILE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFrQixjQUFNLGVBQVEsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQUk7YUFDeEYsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDNUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ2YsQ0FBQyxDQUFDLENBQUM7QUFDUCxFQUFDLENBQUMsQ0FBQzs7Ozs7OztBQ3BDSCxnRDs7Ozs7O0FDQUEsc0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQXlDO0FBQ3pDLHVDQUErQztBQUMvQyxtREFBcUQ7QUFLckQsOENBQTZEO0FBQzdELDBEQUEyRjtBQUMzRiwwREFBK0Y7QUFDL0Ysc0RBQW1GO0FBc0JuRixLQUFhLFNBQVM7S0FBdEI7S0FFQSxDQUFDO0tBQUQsZ0JBQUM7QUFBRCxFQUFDO0FBRlksVUFBUztLQXBCckIsZUFBUSxDQUFDO1NBQ04sU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtTQUMzQixZQUFZLEVBQUU7YUFDViw0QkFBWTthQUNaLDhDQUFtQjthQUNuQixrREFBdUI7YUFDdkIsMENBQW1CO1VBQ3RCO1NBQ0QsT0FBTyxFQUFFO2FBQ0wsb0NBQWU7YUFDZixxQkFBWSxDQUFDLE9BQU8sQ0FBQztpQkFDakIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtpQkFDekQsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLDhDQUFtQixFQUFFO2lCQUMzRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsa0RBQXVCLEVBQUU7aUJBQy9ELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUM7aUJBQ3JELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFO2NBQzNDLENBQUM7VUFDTDtNQUNKLENBQUM7O0lBRVcsU0FBUyxDQUVyQjtBQUZZLCtCQUFTOzs7Ozs7O0FDaEN0QiwrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHFDQUEwQztBQU0xQyw2QkFBNEI7QUFPNUIsS0FBYSxZQUFZO0tBQXpCO0tBQ0EsQ0FBQztLQUFELG1CQUFDO0FBQUQsRUFBQztBQURZLGFBQVk7S0FMeEIsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxLQUFLO1NBQ2YsUUFBUSxFQUFFLG1CQUFPLENBQUMsRUFBc0IsQ0FBQztTQUN6QyxNQUFNLEVBQUUsQ0FBQyxtQkFBTyxDQUFDLEVBQXFCLENBQUMsQ0FBQztNQUMzQyxDQUFDOztJQUNXLFlBQVksQ0FDeEI7QUFEWSxxQ0FBWTs7Ozs7OztBQ2J6Qiw0MkI7Ozs7Ozs7QUNDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7O0FDUEEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxxQ0FBMEM7QUFPMUMsS0FBYSxtQkFBbUI7S0FBaEM7S0FDQSxDQUFDO0tBQUQsMEJBQUM7QUFBRCxFQUFDO0FBRFksb0JBQW1CO0tBTC9CLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsaUJBQWlCO1NBQzNCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQWlDLENBQUM7U0FDcEQsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxFQUFnQyxDQUFDLENBQUM7TUFDdEQsQ0FBQzs7SUFDVyxtQkFBbUIsQ0FDL0I7QUFEWSxtREFBbUI7Ozs7Ozs7QUNQaEMsMC9COzs7Ozs7O0FDQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxxQ0FBMEM7QUFPMUMsS0FBYSx1QkFBdUI7S0FBcEM7S0FDQSxDQUFDO0tBQUQsOEJBQUM7QUFBRCxFQUFDO0FBRFksd0JBQXVCO0tBTG5DLGdCQUFTLENBQUM7U0FDUCxRQUFRLEVBQUUsaUJBQWlCO1NBQzNCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQWlDLENBQUM7U0FDcEQsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxFQUFnQyxDQUFDLENBQUM7TUFDdEQsQ0FBQzs7SUFDVyx1QkFBdUIsQ0FDbkM7QUFEWSwyREFBdUI7Ozs7Ozs7QUNQcEMsNGtDOzs7Ozs7O0FDQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQSxxQ0FBMEM7QUFNMUMsMERBQXVGO0FBU3ZGLEtBQWEsbUJBQW1CO0tBUGhDO1NBU1csYUFBUSxHQUE2QixJQUFLLG1EQUF3QixFQUFFLENBQUM7S0EwQmhGLENBQUM7S0F4QlUsa0NBQUksR0FBWDtTQUNNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FFbkIsSUFBSSxDQUFDLEdBQXVCLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEUsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztTQUNwQixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7U0FHekI7Ozs7O1dBS0U7S0FHRSxDQUFDO0tBRUQscUNBQU8sR0FBUCxVQUFRLEtBQUs7U0FDVCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDaEIsQ0FBQztLQUVMLDBCQUFDO0FBQUQsRUFBQztBQTVCWSxvQkFBbUI7S0FQL0IsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxZQUFZO1NBQ3RCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLEVBQTZCLENBQUM7U0FDaEQsTUFBTSxFQUFFLENBQUMsbUJBQU8sQ0FBQyxFQUE0QixDQUFDLENBQUM7TUFFbEQsQ0FBQzs7SUFFVyxtQkFBbUIsQ0E0Qi9CO0FBNUJZLG1EQUFtQjs7Ozs7Ozs7QUNkaEMsc0NBQWtDO0FBRWxDO0tBQUE7S0FnQkEsQ0FBQztLQWRHLDRDQUE0QztLQUVyQyx1Q0FBSSxHQUFYO1NBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUM1QiwrQ0FBK0M7U0FDL0M7Ozs7OztVQU1DO0tBRU4sQ0FBQztLQUNMLCtCQUFDO0FBQUQsRUFBQztBQWhCWSw2REFBd0I7Ozs7Ozs7QUNIckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdIQUErRztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBLDBDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFxQztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7O0FBRVg7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLGdDQUErQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSx3Q0FBdUM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBNkMsVUFBVTtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7Ozs7OztBQ3g5QkQsK0M7Ozs7OztBQ0FBLCtaQUE4WixpRUFBaUUsc0VBQXNFLDREQUE0RCxtQ0FBbUMsRUFBRSxpQ0FBaUMsRUFBRSxvQkFBb0IsK05BQStOLCtEOzs7Ozs7O0FDQzU1Qjs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTljZjM4ZmFlMzY5ODE4YjMyN2QiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICd6b25lLmpzJztcbmltcG9ydCB7IGNyZWF0ZVNlcnZlclJlbmRlcmVyLCBSZW5kZXJSZXN1bHQgfSBmcm9tICdhc3BuZXQtcHJlcmVuZGVyaW5nJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBSYXBoYWVsIH0gZnJvbSAncmFwaGFlbCc7XG5pbXBvcnQge1NjaGVtYXRpY0dyaWREcmF3aW5nVG9vbH0gIGZyb20gXCIuL2FwcC90b29scy9kcmF3aW5nL1NjaGVtYXRpY0dyaWREcmF3aW5nVG9vbFwiO1xuXG5cbmVuYWJsZVByb2RNb2RlKCk7XG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VydmVyUmVuZGVyZXIocGFyYW1zID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVuZGVyUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xuICAgICAgICAgICAgbmFtZTogJ2FuZ3VsYXItdW5pdmVyc2FsIHJlcXVlc3QnLFxuICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiBwYXJhbXMudXJsLFxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzxhcHA+PC9hcHA+J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSGFuZGxlRXJyb3I6IChwYXJlbnRab25lLCBjdXJyZW50Wm9uZSwgdGFyZ2V0Wm9uZSwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDE0OCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMvbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi92ZW5kb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCIuL3ZlbmRvclwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMikpKDQ4KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUtbm9kZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoNTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hc3BuZXQtcHJlcmVuZGVyaW5nL2luZGV4LmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvY29yZS9idW5kbGVzL2NvcmUudW1kLmpzIGZyb20gZGxsLXJlZmVyZW5jZSAuL3ZlbmRvclxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgxMTgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9hbmd1bGFyMi11bml2ZXJzYWwvbm9kZS9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xuXG5pbXBvcnQgeyBSYXBoYWVsIH0gZnJvbSAncmFwaGFlbCc7XG5pbXBvcnQge1NjaGVtYXRpY0dyaWREcmF3aW5nVG9vbH0gIGZyb20gXCIuL3Rvb2xzL2RyYXdpbmcvU2NoZW1hdGljR3JpZERyYXdpbmdUb29sXCI7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudCdcbmltcG9ydCB7IEdsb2JhbE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZ2xvYmFsdG9vbG1lbnUvZ2xvYmFsdG9vbG1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERlc2lnblRvb2xNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Rlc2lnbnRvb2xtZW51L2Rlc2lnbnRvb2xtZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZXNpZ25WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Rlc2lnbnZpZXcvZGVzaWdudmlldy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBHbG9iYWxNZW51Q29tcG9uZW50LFxuICAgICAgICBEZXNpZ25Ub29sTWVudUNvbXBvbmVudCxcbiAgICAgICAgRGVzaWduVmlld0NvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBVbml2ZXJzYWxNb2R1bGUsIC8vIE11c3QgYmUgZmlyc3QgaW1wb3J0LiBUaGlzIGF1dG9tYXRpY2FsbHkgaW1wb3J0cyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlLCBhbmQgSnNvbnBNb2R1bGUgdG9vLlxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnZGVzaWdudmlldycsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgICB7IHBhdGg6ICdnbG9iYWx0b29sLW1lbnUnLCBjb21wb25lbnQ6IEdsb2JhbE1lbnVDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2Rlc2lnbnRvb2wtbWVudScsIGNvbXBvbmVudDogRGVzaWduVG9vbE1lbnVDb21wb25lbnQgfSxcbiAgICAgICAgICAgIHsgcGF0aDogJ2Rlc2lnbnZpZXcnLCBjb21wb25lbnQ6IERlc2lnblZpZXdDb21wb25lbnR9LFxuICAgICAgICAgICAgeyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnZGVzaWdudmlldycgfVxuICAgICAgICBdKVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSg2Myk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL3JvdXRlci9idW5kbGVzL3JvdXRlci51bWQuanMgZnJvbSBkbGwtcmVmZXJlbmNlIC4vdmVuZG9yXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vZ2xvYmFsdG9vbG1lbnUvZ2xvYmFsdG9vbG1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERlc2lnblRvb2xNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vZGVzaWdudG9vbG1lbnUvZGVzaWdudG9vbG1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERlc2lnblZpZXdDb21wb25lbnQgfSBmcm9tICcuLi9kZXNpZ252aWV3L2Rlc2lnbnZpZXcuY29tcG9uZW50JztcblxuLy9yZXF1aXJlKFwiY3NzIS4vbWFpbi5jc3NcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuY3NzJyldXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPSdtYWlucGFnZScgY2xhc3M9J2NvbnRhaW5lcic+XFxuXFxuICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cXG5cXG4gICAgPGRpdiBpZD0nY29udGFpbmVyVG9wJyBjbGFzcz0nIGxheW91dGNvbnRhaW5lcic+XFxuICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTEyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgPGdsb2JhbHRvb2wtbWVudT48L2dsb2JhbHRvb2wtbWVudT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICAgPGRpdiBpZD0nY29udGFpbmVyTWlkZGxlJyAgY2xhc3M9JyBsYXlvdXRjb250YWluZXInPlxcblxcbiAgICAgICAgPGRpdiBpZD0nY29udGVudENvbnRNYWluJyBjbGFzcz1cXFwiY29sLW1kLTEwIG5vLWZsb2F0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgPGRlc2lnbnZpZXc+PC9kZXNpZ252aWV3PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8ZGl2IGlkPSdjb250ZW50Q29udFRvb2wnICBjbGFzcz1cXFwiY29sLW1kLTIgbm8tZmxvYXRcXFwiPlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICBcXG4gICAgPC9kaXY+XFxuIFxcbiAgICAgPGRpdiBpZD0nY29udGFpbmVyQm90dG9tJyAgY2xhc3M9JyBsYXlvdXRjb250YWluZXInPlxcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTEyIGNvbC1sZy0xMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRlc2lnbnRvb2wtbWVudT48L2Rlc2lnbnRvb2wtbWVudT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgIFxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyKSkoMzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dsb2JhbHRvb2wtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZ2xvYmFsdG9vbG1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2dsb2JhbHRvb2xtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVudUNvbXBvbmVudCB7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9nbG9iYWx0b29sbWVudS9nbG9iYWx0b29sbWVudS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlIG5hdmJhci1maXhlZC10b3BcXFwiPlxcblxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtM1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWxnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWZsb3BweS1vcGVuXFxcIj48L3NwYW4+ICBcXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyIGNvbC14cy02IGNvbC1zbS02IGNvbC1tZC0zXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2UgXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tbGdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPiAgXFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgPC9kaXY+XFxuXFxuICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtM1xcXCI+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiIGFyaWEtbGFiZWxsZWRieT1cXFwiZHJvcGRvd25NZW51NFxcXCI+XFxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiPnNjaDE8L2E+PC9saT5cXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCI+cGNiMTwvYT48L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcblxcbjwvZGl2PlxcblxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dsb2JhbHRvb2xtZW51L2dsb2JhbHRvb2xtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWx0b29sbWVudS5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9nbG9iYWx0b29sbWVudS9nbG9iYWx0b29sbWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2dsb2JhbHRvb2xtZW51L2dsb2JhbHRvb2xtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Rlc2lnbnRvb2wtbWVudScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZGVzaWdudG9vbG1lbnUuY29tcG9uZW50Lmh0bWwnKSxcbiAgICBzdHlsZXM6IFtyZXF1aXJlKCcuL2Rlc2lnbnRvb2xtZW51LmNvbXBvbmVudC5jc3MnKV1cbn0pXG5leHBvcnQgY2xhc3MgRGVzaWduVG9vbE1lbnVDb21wb25lbnQge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudG9vbG1lbnUvZGVzaWdudG9vbG1lbnUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZSBuYXZiYXItZml4ZWQtdG9wXFxcIj5cXG5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTMgY29sLWxnLTNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1mbG9wcHktb3BlblxcXCI+PC9zcGFuPiAgXFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgPC9kaXY+XFxuXFxuICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtM1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIFxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWxnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj4gIFxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgIDwvZGl2PlxcblxcbiAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgY29sLXhzLTYgY29sLXNtLTYgY29sLW1kLTNcXFwiPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIiBhcmlhLWxhYmVsbGVkYnk9XFxcImRyb3Bkb3duTWVudTRcXFwiPlxcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5zY2gxPC9hPjwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJkaXNhYmxlZFxcXCI+PGEgaHJlZj1cXFwiI1xcXCI+RGlzYWJsZWQgbGluazwvYT48L2xpPlxcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIj5wY2IxPC9hPjwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgPC9kaXY+XFxuXFxuPC9kaXY+XFxuXFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudG9vbG1lbnUvZGVzaWdudG9vbG1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Rlc2lnbnRvb2xtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2Rlc2lnbnRvb2xtZW51L2Rlc2lnbnRvb2xtZW51LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudG9vbG1lbnUvZGVzaWdudG9vbG1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vaW1wb3J0IElTZXJ2aWNlID0gcmVxdWlyZShcIi4vcmFwaGFlbFwiKTtcblxuaW1wb3J0ICogYXMgUmFwaGFlbCBmcm9tICdyYXBoYWVsJztcblxuaW1wb3J0IHtTY2hlbWF0aWNHcmlkRHJhd2luZ1Rvb2x9ICBmcm9tIFwiLi4vLi4vdG9vbHMvZHJhd2luZy9TY2hlbWF0aWNHcmlkRHJhd2luZ1Rvb2xcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkZXNpZ252aWV3JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9kZXNpZ252aWV3LmNvbXBvbmVudC5odG1sJyksXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9kZXNpZ252aWV3LmNvbXBvbmVudC5jc3MnKV1cblxufSlcblxuZXhwb3J0IGNsYXNzIERlc2lnblZpZXdDb21wb25lbnQge1xuXG4gICAgcHVibGljIGRyYXd0b29sOiBTY2hlbWF0aWNHcmlkRHJhd2luZ1Rvb2wgPSBuZXcgIFNjaGVtYXRpY0dyaWREcmF3aW5nVG9vbCgpO1xuICAgIFxuICAgIHB1YmxpYyBkcmF3KCl7XG4gICAgICAgICAgdGhpcy5kcmF3dG9vbC5kcmF3KCk7XG5cbiAgICAgICAgICAgIHZhciBjID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2FudmFzXCIpO1xuICAgICAgICAgICAgdmFyIGN0eCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgICAgY3R4Lm1vdmVUbygwLDApO1xuICAgICAgICAgICAgY3R4LmxpbmVUbygyMDAsMTAwKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcblxuXG4vKlxuICAgICAgICAgICAgICAgIHZhciBkcmF3ZXIgPSBSYXBoYWVsKFwibXlDYW52YXNcIiwgMjAwLCAyMDApO1xuICAgICAgICAgICAgICAgIHZhciBjaXJjbGUgPSAgICBkcmF3ZXIuY2lyY2xlKDUwLCA0MCwgMTApO1xuICAgICAgICAgICAgICAgIGNpcmNsZS5hdHRyKFwiZmlsbFwiLCBcIiNmMDBcIik7XG4gICAgICAgICAgICAgICAgY2lyY2xlLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpO1xuKi9cblxuXG4gICAgfVxuICAgICAgICAgIFxuICAgIGNsaWNrZWQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZXNpZ252aWV3L2Rlc2lnbnZpZXcuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgUmFwaGFlbCB9IGZyb20gJ3JhcGhhZWwnO1xuaW1wb3J0ICogYXMgcG9wdXBzIGZyb20gJ2Jvb3Rib3gnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hdGljR3JpZERyYXdpbmdUb29sIHtcblxuICAgIC8vcHVibGljIGRyYXdlcjogUmFwaGFlbDsgLy8gPSBuZXcgUmFwaGFlbCgpXG5cbiAgICBwdWJsaWMgZHJhdygpe1xuICAgICAgICBwb3B1cHMuYWxlcnQoXCJIZWxsbyB3b3JsZCFcIik7XG4gICAgICAgICAvL3RoaXMuZHJhd2VyID0gIG5ldyBSYXBoYWVsKDUwLCA1MCwgNDAwLCA0MDApO1xuICAgICAgICAgLypcbiAgICAgICAgIHZhciBkcmF3ZXIgPSBSYXBoYWVsKDUwLCA1MCwgNDAwLCA0MDApO1xuICAgICAgICB2YXIgY2lyY2xlID0gICAgZHJhd2VyLmNpcmNsZSg1MCwgNDAsIDEwKTtcbiAgICAgICAgY2lyY2xlLmF0dHIoXCJmaWxsXCIsIFwiI2YwMFwiKTtcbiAgICAgICAgY2lyY2xlLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpO1xuICAgICAgXG4gICAgICAgICovXG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvdG9vbHMvZHJhd2luZy9TY2hlbWF0aWNHcmlkRHJhd2luZ1Rvb2wudHMiLCIvKipcbiAqIGJvb3Rib3guanMgW3Y0LjQuMF1cbiAqXG4gKiBodHRwOi8vYm9vdGJveGpzLmNvbS9saWNlbnNlLnR4dFxuICovXG5cbi8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21ha2V1c2FicmV3L2Jvb3Rib3gvaXNzdWVzLzE4MFxuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWFrZXVzYWJyZXcvYm9vdGJveC9pc3N1ZXMvMTg2XG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblxuICBcInVzZSBzdHJpY3RcIjtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXCJqcXVlcnlcIl0sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgIHJvb3QuYm9vdGJveCA9IGZhY3Rvcnkocm9vdC5qUXVlcnkpO1xuICB9XG5cbn0odGhpcywgZnVuY3Rpb24gaW5pdCgkLCB1bmRlZmluZWQpIHtcblxuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyB0aGUgYmFzZSBET00gc3RydWN0dXJlIG5lZWRlZCB0byBjcmVhdGUgYSBtb2RhbFxuICB2YXIgdGVtcGxhdGVzID0ge1xuICAgIGRpYWxvZzpcbiAgICAgIFwiPGRpdiBjbGFzcz0nYm9vdGJveCBtb2RhbCcgdGFiaW5kZXg9Jy0xJyByb2xlPSdkaWFsb2cnPlwiICtcbiAgICAgICAgXCI8ZGl2IGNsYXNzPSdtb2RhbC1kaWFsb2cnPlwiICtcbiAgICAgICAgICBcIjxkaXYgY2xhc3M9J21vZGFsLWNvbnRlbnQnPlwiICtcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nbW9kYWwtYm9keSc+PGRpdiBjbGFzcz0nYm9vdGJveC1ib2R5Jz48L2Rpdj48L2Rpdj5cIiArXG4gICAgICAgICAgXCI8L2Rpdj5cIiArXG4gICAgICAgIFwiPC9kaXY+XCIgK1xuICAgICAgXCI8L2Rpdj5cIixcbiAgICBoZWFkZXI6XG4gICAgICBcIjxkaXYgY2xhc3M9J21vZGFsLWhlYWRlcic+XCIgK1xuICAgICAgICBcIjxoNCBjbGFzcz0nbW9kYWwtdGl0bGUnPjwvaDQ+XCIgK1xuICAgICAgXCI8L2Rpdj5cIixcbiAgICBmb290ZXI6XG4gICAgICBcIjxkaXYgY2xhc3M9J21vZGFsLWZvb3Rlcic+PC9kaXY+XCIsXG4gICAgY2xvc2VCdXR0b246XG4gICAgICBcIjxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYm9vdGJveC1jbG9zZS1idXR0b24gY2xvc2UnIGRhdGEtZGlzbWlzcz0nbW9kYWwnIGFyaWEtaGlkZGVuPSd0cnVlJz4mdGltZXM7PC9idXR0b24+XCIsXG4gICAgZm9ybTpcbiAgICAgIFwiPGZvcm0gY2xhc3M9J2Jvb3Rib3gtZm9ybSc+PC9mb3JtPlwiLFxuICAgIGlucHV0czoge1xuICAgICAgdGV4dDpcbiAgICAgICAgXCI8aW5wdXQgY2xhc3M9J2Jvb3Rib3gtaW5wdXQgYm9vdGJveC1pbnB1dC10ZXh0IGZvcm0tY29udHJvbCcgYXV0b2NvbXBsZXRlPW9mZiB0eXBlPXRleHQgLz5cIixcbiAgICAgIHRleHRhcmVhOlxuICAgICAgICBcIjx0ZXh0YXJlYSBjbGFzcz0nYm9vdGJveC1pbnB1dCBib290Ym94LWlucHV0LXRleHRhcmVhIGZvcm0tY29udHJvbCc+PC90ZXh0YXJlYT5cIixcbiAgICAgIGVtYWlsOlxuICAgICAgICBcIjxpbnB1dCBjbGFzcz0nYm9vdGJveC1pbnB1dCBib290Ym94LWlucHV0LWVtYWlsIGZvcm0tY29udHJvbCcgYXV0b2NvbXBsZXRlPSdvZmYnIHR5cGU9J2VtYWlsJyAvPlwiLFxuICAgICAgc2VsZWN0OlxuICAgICAgICBcIjxzZWxlY3QgY2xhc3M9J2Jvb3Rib3gtaW5wdXQgYm9vdGJveC1pbnB1dC1zZWxlY3QgZm9ybS1jb250cm9sJz48L3NlbGVjdD5cIixcbiAgICAgIGNoZWNrYm94OlxuICAgICAgICBcIjxkaXYgY2xhc3M9J2NoZWNrYm94Jz48bGFiZWw+PGlucHV0IGNsYXNzPSdib290Ym94LWlucHV0IGJvb3Rib3gtaW5wdXQtY2hlY2tib3gnIHR5cGU9J2NoZWNrYm94JyAvPjwvbGFiZWw+PC9kaXY+XCIsXG4gICAgICBkYXRlOlxuICAgICAgICBcIjxpbnB1dCBjbGFzcz0nYm9vdGJveC1pbnB1dCBib290Ym94LWlucHV0LWRhdGUgZm9ybS1jb250cm9sJyBhdXRvY29tcGxldGU9b2ZmIHR5cGU9J2RhdGUnIC8+XCIsXG4gICAgICB0aW1lOlxuICAgICAgICBcIjxpbnB1dCBjbGFzcz0nYm9vdGJveC1pbnB1dCBib290Ym94LWlucHV0LXRpbWUgZm9ybS1jb250cm9sJyBhdXRvY29tcGxldGU9b2ZmIHR5cGU9J3RpbWUnIC8+XCIsXG4gICAgICBudW1iZXI6XG4gICAgICAgIFwiPGlucHV0IGNsYXNzPSdib290Ym94LWlucHV0IGJvb3Rib3gtaW5wdXQtbnVtYmVyIGZvcm0tY29udHJvbCcgYXV0b2NvbXBsZXRlPW9mZiB0eXBlPSdudW1iZXInIC8+XCIsXG4gICAgICBwYXNzd29yZDpcbiAgICAgICAgXCI8aW5wdXQgY2xhc3M9J2Jvb3Rib3gtaW5wdXQgYm9vdGJveC1pbnB1dC1wYXNzd29yZCBmb3JtLWNvbnRyb2wnIGF1dG9jb21wbGV0ZT0nb2ZmJyB0eXBlPSdwYXNzd29yZCcgLz5cIlxuICAgIH1cbiAgfTtcblxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgLy8gZGVmYXVsdCBsYW5ndWFnZVxuICAgIGxvY2FsZTogXCJlblwiLFxuICAgIC8vIHNob3cgYmFja2Ryb3Agb3Igbm90LiBEZWZhdWx0IHRvIHN0YXRpYyBzbyB1c2VyIGhhcyB0byBpbnRlcmFjdCB3aXRoIGRpYWxvZ1xuICAgIGJhY2tkcm9wOiBcInN0YXRpY1wiLFxuICAgIC8vIGFuaW1hdGUgdGhlIG1vZGFsIGluL291dFxuICAgIGFuaW1hdGU6IHRydWUsXG4gICAgLy8gYWRkaXRpb25hbCBjbGFzcyBzdHJpbmcgYXBwbGllZCB0byB0aGUgdG9wIGxldmVsIGRpYWxvZ1xuICAgIGNsYXNzTmFtZTogbnVsbCxcbiAgICAvLyB3aGV0aGVyIG9yIG5vdCB0byBpbmNsdWRlIGEgY2xvc2UgYnV0dG9uXG4gICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgLy8gc2hvdyB0aGUgZGlhbG9nIGltbWVkaWF0ZWx5IGJ5IGRlZmF1bHRcbiAgICBzaG93OiB0cnVlLFxuICAgIC8vIGRpYWxvZyBjb250YWluZXJcbiAgICBjb250YWluZXI6IFwiYm9keVwiXG4gIH07XG5cbiAgLy8gb3VyIHB1YmxpYyBvYmplY3Q7IGF1Z21lbnRlZCBhZnRlciBvdXIgcHJpdmF0ZSBBUElcbiAgdmFyIGV4cG9ydHMgPSB7fTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIF90KGtleSkge1xuICAgIHZhciBsb2NhbGUgPSBsb2NhbGVzW2RlZmF1bHRzLmxvY2FsZV07XG4gICAgcmV0dXJuIGxvY2FsZSA/IGxvY2FsZVtrZXldIDogbG9jYWxlcy5lbltrZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NhbGxiYWNrKGUsIGRpYWxvZywgY2FsbGJhY2spIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIGJ5IGRlZmF1bHQgd2UgYXNzdW1lIGEgY2FsbGJhY2sgd2lsbCBnZXQgcmlkIG9mIHRoZSBkaWFsb2csXG4gICAgLy8gYWx0aG91Z2ggaXQgaXMgZ2l2ZW4gdGhlIG9wcG9ydHVuaXR5IHRvIG92ZXJyaWRlIHRoaXNcblxuICAgIC8vIHNvLCBpZiB0aGUgY2FsbGJhY2sgY2FuIGJlIGludm9rZWQgYW5kIGl0ICpleHBsaWNpdGx5IHJldHVybnMgZmFsc2UqXG4gICAgLy8gdGhlbiB3ZSdsbCBzZXQgYSBmbGFnIHRvIGtlZXAgdGhlIGRpYWxvZyBhY3RpdmUuLi5cbiAgICB2YXIgcHJlc2VydmVEaWFsb2cgPSAkLmlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrLmNhbGwoZGlhbG9nLCBlKSA9PT0gZmFsc2U7XG5cbiAgICAvLyAuLi4gb3RoZXJ3aXNlIHdlJ2xsIGJpbiBpdFxuICAgIGlmICghcHJlc2VydmVEaWFsb2cpIHtcbiAgICAgIGRpYWxvZy5tb2RhbChcImhpZGVcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0S2V5TGVuZ3RoKG9iaikge1xuICAgIC8vIEBUT0RPIGRlZmVyIHRvIE9iamVjdC5rZXlzKHgpLmxlbmd0aCBpZiBhdmFpbGFibGU/XG4gICAgdmFyIGssIHQgPSAwO1xuICAgIGZvciAoayBpbiBvYmopIHtcbiAgICAgIHQgKys7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9XG5cbiAgZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBpdGVyYXRvcikge1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgJC5lYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgIGl0ZXJhdG9yKGtleSwgdmFsdWUsIGluZGV4KyspO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXRpemUob3B0aW9ucykge1xuICAgIHZhciBidXR0b25zO1xuICAgIHZhciB0b3RhbDtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHN1cHBseSBhbiBvYmplY3Qgb2Ygb3B0aW9uc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMubWVzc2FnZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHNwZWNpZnkgYSBtZXNzYWdlXCIpO1xuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSBhbnkgc3VwcGxpZWQgb3B0aW9ucyB0YWtlIHByZWNlZGVuY2Ugb3ZlciBkZWZhdWx0c1xuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCFvcHRpb25zLmJ1dHRvbnMpIHtcbiAgICAgIG9wdGlvbnMuYnV0dG9ucyA9IHt9O1xuICAgIH1cblxuICAgIGJ1dHRvbnMgPSBvcHRpb25zLmJ1dHRvbnM7XG5cbiAgICB0b3RhbCA9IGdldEtleUxlbmd0aChidXR0b25zKTtcblxuICAgIGVhY2goYnV0dG9ucywgZnVuY3Rpb24oa2V5LCBidXR0b24sIGluZGV4KSB7XG5cbiAgICAgIGlmICgkLmlzRnVuY3Rpb24oYnV0dG9uKSkge1xuICAgICAgICAvLyBzaG9ydCBmb3JtLCBhc3N1bWUgdmFsdWUgaXMgb3VyIGNhbGxiYWNrLiBTaW5jZSBidXR0b25cbiAgICAgICAgLy8gaXNuJ3QgYW4gb2JqZWN0IGl0IGlzbid0IGEgcmVmZXJlbmNlIGVpdGhlciBzbyByZS1hc3NpZ24gaXRcbiAgICAgICAgYnV0dG9uID0gYnV0dG9uc1trZXldID0ge1xuICAgICAgICAgIGNhbGxiYWNrOiBidXR0b25cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gYmVmb3JlIGFueSBmdXJ0aGVyIGNoZWNrcyBtYWtlIHN1cmUgYnkgbm93IGJ1dHRvbiBpcyB0aGUgY29ycmVjdCB0eXBlXG4gICAgICBpZiAoJC50eXBlKGJ1dHRvbikgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYnV0dG9uIHdpdGgga2V5IFwiICsga2V5ICsgXCIgbXVzdCBiZSBhbiBvYmplY3RcIik7XG4gICAgICB9XG5cbiAgICAgIGlmICghYnV0dG9uLmxhYmVsKSB7XG4gICAgICAgIC8vIHRoZSBsYWNrIG9mIGFuIGV4cGxpY2l0IGxhYmVsIG1lYW5zIHdlJ2xsIGFzc3VtZSB0aGUga2V5IGlzIGdvb2QgZW5vdWdoXG4gICAgICAgIGJ1dHRvbi5sYWJlbCA9IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFidXR0b24uY2xhc3NOYW1lKSB7XG4gICAgICAgIGlmICh0b3RhbCA8PSAyICYmIGluZGV4ID09PSB0b3RhbC0xKSB7XG4gICAgICAgICAgLy8gYWx3YXlzIGFkZCBhIHByaW1hcnkgdG8gdGhlIG1haW4gb3B0aW9uIGluIGEgdHdvLWJ1dHRvbiBkaWFsb2dcbiAgICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gXCJidG4tcHJpbWFyeVwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcImJ0bi1kZWZhdWx0XCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIG1hcCBhIGZsZXhpYmxlIHNldCBvZiBhcmd1bWVudHMgaW50byBhIHNpbmdsZSByZXR1cm5lZCBvYmplY3RcbiAgICogaWYgYXJncy5sZW5ndGggaXMgYWxyZWFkeSBvbmUganVzdCByZXR1cm4gaXQsIG90aGVyd2lzZVxuICAgKiB1c2UgdGhlIHByb3BlcnRpZXMgYXJndW1lbnQgdG8gbWFwIHRoZSB1bm5hbWVkIGFyZ3MgdG9cbiAgICogb2JqZWN0IHByb3BlcnRpZXNcbiAgICogc28gaW4gdGhlIGxhdHRlciBjYXNlOlxuICAgKiBtYXBBcmd1bWVudHMoW1wiZm9vXCIsICQubm9vcF0sIFtcIm1lc3NhZ2VcIiwgXCJjYWxsYmFja1wiXSlcbiAgICogLT4geyBtZXNzYWdlOiBcImZvb1wiLCBjYWxsYmFjazogJC5ub29wIH1cbiAgICovXG4gIGZ1bmN0aW9uIG1hcEFyZ3VtZW50cyhhcmdzLCBwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIGFyZ24gPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuXG4gICAgaWYgKGFyZ24gPCAxIHx8IGFyZ24gPiAyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50IGxlbmd0aFwiKTtcbiAgICB9XG5cbiAgICBpZiAoYXJnbiA9PT0gMiB8fCB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgb3B0aW9uc1twcm9wZXJ0aWVzWzBdXSA9IGFyZ3NbMF07XG4gICAgICBvcHRpb25zW3Byb3BlcnRpZXNbMV1dID0gYXJnc1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucyA9IGFyZ3NbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogbWVyZ2UgYSBzZXQgb2YgZGVmYXVsdCBkaWFsb2cgb3B0aW9ucyB3aXRoIHVzZXIgc3VwcGxpZWQgYXJndW1lbnRzXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZUFyZ3VtZW50cyhkZWZhdWx0cywgYXJncywgcHJvcGVydGllcykge1xuICAgIHJldHVybiAkLmV4dGVuZChcbiAgICAgIC8vIGRlZXAgbWVyZ2VcbiAgICAgIHRydWUsXG4gICAgICAvLyBlbnN1cmUgdGhlIHRhcmdldCBpcyBhbiBlbXB0eSwgdW5yZWZlcmVuY2VkIG9iamVjdFxuICAgICAge30sXG4gICAgICAvLyB0aGUgYmFzZSBvcHRpb25zIG9iamVjdCBmb3IgdGhpcyB0eXBlIG9mIGRpYWxvZyAob2Z0ZW4ganVzdCBidXR0b25zKVxuICAgICAgZGVmYXVsdHMsXG4gICAgICAvLyBhcmdzIGNvdWxkIGJlIGFuIG9iamVjdCBvciBhcnJheTsgaWYgaXQncyBhbiBhcnJheSBwcm9wZXJ0aWVzIHdpbGxcbiAgICAgIC8vIG1hcCBpdCB0byBhIHByb3BlciBvcHRpb25zIG9iamVjdFxuICAgICAgbWFwQXJndW1lbnRzKFxuICAgICAgICBhcmdzLFxuICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB0aGlzIGVudHJ5LWxldmVsIG1ldGhvZCBtYWtlcyBoZWF2eSB1c2Ugb2YgY29tcG9zaXRpb24gdG8gdGFrZSBhIHNpbXBsZVxuICAgKiByYW5nZSBvZiBpbnB1dHMgYW5kIHJldHVybiB2YWxpZCBvcHRpb25zIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIGJvb3Rib3guZGlhbG9nXG4gICAqL1xuICBmdW5jdGlvbiBtZXJnZURpYWxvZ09wdGlvbnMoY2xhc3NOYW1lLCBsYWJlbHMsIHByb3BlcnRpZXMsIGFyZ3MpIHtcbiAgICAvLyAgYnVpbGQgdXAgYSBiYXNlIHNldCBvZiBkaWFsb2cgcHJvcGVydGllc1xuICAgIHZhciBiYXNlT3B0aW9ucyA9IHtcbiAgICAgIGNsYXNzTmFtZTogXCJib290Ym94LVwiICsgY2xhc3NOYW1lLFxuICAgICAgYnV0dG9uczogY3JlYXRlTGFiZWxzLmFwcGx5KG51bGwsIGxhYmVscylcbiAgICB9O1xuXG4gICAgLy8gZW5zdXJlIHRoZSBidXR0b25zIHByb3BlcnRpZXMgZ2VuZXJhdGVkLCAqYWZ0ZXIqIG1lcmdpbmdcbiAgICAvLyB3aXRoIHVzZXIgYXJncyBhcmUgc3RpbGwgdmFsaWQgYWdhaW5zdCB0aGUgc3VwcGxpZWQgbGFiZWxzXG4gICAgcmV0dXJuIHZhbGlkYXRlQnV0dG9ucyhcbiAgICAgIC8vIG1lcmdlIHRoZSBnZW5lcmF0ZWQgYmFzZSBwcm9wZXJ0aWVzIHdpdGggdXNlciBzdXBwbGllZCBhcmd1bWVudHNcbiAgICAgIG1lcmdlQXJndW1lbnRzKFxuICAgICAgICBiYXNlT3B0aW9ucyxcbiAgICAgICAgYXJncyxcbiAgICAgICAgLy8gaWYgYXJncy5sZW5ndGggPiAxLCBwcm9wZXJ0aWVzIHNwZWNpZnkgaG93IGVhY2ggYXJnIG1hcHMgdG8gYW4gb2JqZWN0IGtleVxuICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICApLFxuICAgICAgbGFiZWxzXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBmcm9tIGEgZ2l2ZW4gbGlzdCBvZiBhcmd1bWVudHMgcmV0dXJuIGEgc3VpdGFibGUgb2JqZWN0IG9mIGJ1dHRvbiBsYWJlbHNcbiAgICogYWxsIHRoaXMgZG9lcyBpcyBub3JtYWxpc2UgdGhlIGdpdmVuIGxhYmVscyBhbmQgdHJhbnNsYXRlIHRoZW0gd2hlcmUgcG9zc2libGVcbiAgICogZS5nLiBcIm9rXCIsIFwiY29uZmlybVwiIC0+IHsgb2s6IFwiT0ssIGNhbmNlbDogXCJBbm51bGVyZW5cIiB9XG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVMYWJlbHMoKSB7XG4gICAgdmFyIGJ1dHRvbnMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgdmFyIGFyZ3VtZW50ID0gYXJndW1lbnRzW2ldO1xuICAgICAgdmFyIGtleSA9IGFyZ3VtZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudC50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBidXR0b25zW2tleV0gPSB7XG4gICAgICAgIGxhYmVsOiBfdCh2YWx1ZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUJ1dHRvbnMob3B0aW9ucywgYnV0dG9ucykge1xuICAgIHZhciBhbGxvd2VkQnV0dG9ucyA9IHt9O1xuICAgIGVhY2goYnV0dG9ucywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgYWxsb3dlZEJ1dHRvbnNbdmFsdWVdID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGVhY2gob3B0aW9ucy5idXR0b25zLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChhbGxvd2VkQnV0dG9uc1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYnV0dG9uIGtleSBcIiArIGtleSArIFwiIGlzIG5vdCBhbGxvd2VkIChvcHRpb25zIGFyZSBcIiArIGJ1dHRvbnMuam9pbihcIlxcblwiKSArIFwiKVwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgZXhwb3J0cy5hbGVydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvcHRpb25zO1xuXG4gICAgb3B0aW9ucyA9IG1lcmdlRGlhbG9nT3B0aW9ucyhcImFsZXJ0XCIsIFtcIm9rXCJdLCBbXCJtZXNzYWdlXCIsIFwiY2FsbGJhY2tcIl0sIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAob3B0aW9ucy5jYWxsYmFjayAmJiAhJC5pc0Z1bmN0aW9uKG9wdGlvbnMuY2FsbGJhY2spKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhbGVydCByZXF1aXJlcyBjYWxsYmFjayBwcm9wZXJ0eSB0byBiZSBhIGZ1bmN0aW9uIHdoZW4gcHJvdmlkZWRcIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogb3ZlcnJpZGVzXG4gICAgICovXG4gICAgb3B0aW9ucy5idXR0b25zLm9rLmNhbGxiYWNrID0gb3B0aW9ucy5vbkVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCQuaXNGdW5jdGlvbihvcHRpb25zLmNhbGxiYWNrKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5jYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIHJldHVybiBleHBvcnRzLmRpYWxvZyhvcHRpb25zKTtcbiAgfTtcblxuICBleHBvcnRzLmNvbmZpcm0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3B0aW9ucztcblxuICAgIG9wdGlvbnMgPSBtZXJnZURpYWxvZ09wdGlvbnMoXCJjb25maXJtXCIsIFtcImNhbmNlbFwiLCBcImNvbmZpcm1cIl0sIFtcIm1lc3NhZ2VcIiwgXCJjYWxsYmFja1wiXSwgYXJndW1lbnRzKTtcblxuICAgIC8qKlxuICAgICAqIG92ZXJyaWRlczsgdW5kbyBhbnl0aGluZyB0aGUgdXNlciB0cmllZCB0byBzZXQgdGhleSBzaG91bGRuJ3QgaGF2ZVxuICAgICAqL1xuICAgIG9wdGlvbnMuYnV0dG9ucy5jYW5jZWwuY2FsbGJhY2sgPSBvcHRpb25zLm9uRXNjYXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jYWxsYmFjay5jYWxsKHRoaXMsIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5idXR0b25zLmNvbmZpcm0uY2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmNhbGxiYWNrLmNhbGwodGhpcywgdHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vIGNvbmZpcm0gc3BlY2lmaWMgdmFsaWRhdGlvblxuICAgIGlmICghJC5pc0Z1bmN0aW9uKG9wdGlvbnMuY2FsbGJhY2spKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb25maXJtIHJlcXVpcmVzIGEgY2FsbGJhY2tcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cG9ydHMuZGlhbG9nKG9wdGlvbnMpO1xuICB9O1xuXG4gIGV4cG9ydHMucHJvbXB0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9wdGlvbnM7XG4gICAgdmFyIGRlZmF1bHRzO1xuICAgIHZhciBkaWFsb2c7XG4gICAgdmFyIGZvcm07XG4gICAgdmFyIGlucHV0O1xuICAgIHZhciBzaG91bGRTaG93O1xuICAgIHZhciBpbnB1dE9wdGlvbnM7XG5cbiAgICAvLyB3ZSBoYXZlIHRvIGNyZWF0ZSBvdXIgZm9ybSBmaXJzdCBvdGhlcndpc2VcbiAgICAvLyBpdHMgdmFsdWUgaXMgdW5kZWZpbmVkIHdoZW4gZ2VhcmluZyB1cCBvdXIgb3B0aW9uc1xuICAgIC8vIEBUT0RPIHRoaXMgY291bGQgYmUgc29sdmVkIGJ5IGFsbG93aW5nIG1lc3NhZ2UgdG9cbiAgICAvLyBiZSBhIGZ1bmN0aW9uIGluc3RlYWQuLi5cbiAgICBmb3JtID0gJCh0ZW1wbGF0ZXMuZm9ybSk7XG5cbiAgICAvLyBwcm9tcHQgZGVmYXVsdHMgYXJlIG1vcmUgY29tcGxleCB0aGFuIG90aGVycyBpbiB0aGF0XG4gICAgLy8gdXNlcnMgY2FuIG92ZXJyaWRlIG1vcmUgZGVmYXVsdHNcbiAgICAvLyBAVE9ETyBJIGRvbid0IGxpa2UgdGhhdCBwcm9tcHQgaGFzIHRvIGRvIGEgbG90IG9mIGhlYXZ5XG4gICAgLy8gbGlmdGluZyB3aGljaCBtZXJnZURpYWxvZ09wdGlvbnMgY2FuICphbG1vc3QqIHN1cHBvcnQgYWxyZWFkeVxuICAgIC8vIGp1c3QgYmVjYXVzZSBvZiAndmFsdWUnIGFuZCAnaW5wdXRUeXBlJyAtIGNhbiB3ZSByZWZhY3Rvcj9cbiAgICBkZWZhdWx0cyA9IHtcbiAgICAgIGNsYXNzTmFtZTogXCJib290Ym94LXByb21wdFwiLFxuICAgICAgYnV0dG9uczogY3JlYXRlTGFiZWxzKFwiY2FuY2VsXCIsIFwiY29uZmlybVwiKSxcbiAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgaW5wdXRUeXBlOiBcInRleHRcIlxuICAgIH07XG5cbiAgICBvcHRpb25zID0gdmFsaWRhdGVCdXR0b25zKFxuICAgICAgbWVyZ2VBcmd1bWVudHMoZGVmYXVsdHMsIGFyZ3VtZW50cywgW1widGl0bGVcIiwgXCJjYWxsYmFja1wiXSksXG4gICAgICBbXCJjYW5jZWxcIiwgXCJjb25maXJtXCJdXG4gICAgKTtcblxuICAgIC8vIGNhcHR1cmUgdGhlIHVzZXIncyBzaG93IHZhbHVlOyB3ZSBhbHdheXMgc2V0IHRoaXMgdG8gZmFsc2UgYmVmb3JlXG4gICAgLy8gc3Bhd25pbmcgdGhlIGRpYWxvZyB0byBnaXZlIHVzIGEgY2hhbmNlIHRvIGF0dGFjaCBzb21lIGhhbmRsZXJzIHRvXG4gICAgLy8gaXQsIGJ1dCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSByZXNwZWN0IGEgcHJlZmVyZW5jZSBub3QgdG8gc2hvdyBpdFxuICAgIHNob3VsZFNob3cgPSAob3B0aW9ucy5zaG93ID09PSB1bmRlZmluZWQpID8gdHJ1ZSA6IG9wdGlvbnMuc2hvdztcblxuICAgIC8qKlxuICAgICAqIG92ZXJyaWRlczsgdW5kbyBhbnl0aGluZyB0aGUgdXNlciB0cmllZCB0byBzZXQgdGhleSBzaG91bGRuJ3QgaGF2ZVxuICAgICAqL1xuICAgIG9wdGlvbnMubWVzc2FnZSA9IGZvcm07XG5cbiAgICBvcHRpb25zLmJ1dHRvbnMuY2FuY2VsLmNhbGxiYWNrID0gb3B0aW9ucy5vbkVzY2FwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuY2FsbGJhY2suY2FsbCh0aGlzLCBudWxsKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5idXR0b25zLmNvbmZpcm0uY2FsbGJhY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgc3dpdGNoIChvcHRpb25zLmlucHV0VHlwZSkge1xuICAgICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICBjYXNlIFwidGV4dGFyZWFcIjpcbiAgICAgICAgY2FzZSBcImVtYWlsXCI6XG4gICAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcbiAgICAgICAgICB2YWx1ZSA9IGlucHV0LnZhbCgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICAgIHZhciBjaGVja2VkSXRlbXMgPSBpbnB1dC5maW5kKFwiaW5wdXQ6Y2hlY2tlZFwiKTtcblxuICAgICAgICAgIC8vIHdlIGFzc3VtZSB0aGF0IGNoZWNrYm94ZXMgYXJlIGFsd2F5cyBtdWx0aXBsZSxcbiAgICAgICAgICAvLyBoZW5jZSB3ZSBkZWZhdWx0IHRvIGFuIGVtcHR5IGFycmF5XG4gICAgICAgICAgdmFsdWUgPSBbXTtcblxuICAgICAgICAgIGVhY2goY2hlY2tlZEl0ZW1zLCBmdW5jdGlvbihfLCBpdGVtKSB7XG4gICAgICAgICAgICB2YWx1ZS5wdXNoKCQoaXRlbSkudmFsKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3B0aW9ucy5jYWxsYmFjay5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgb3B0aW9ucy5zaG93ID0gZmFsc2U7XG5cbiAgICAvLyBwcm9tcHQgc3BlY2lmaWMgdmFsaWRhdGlvblxuICAgIGlmICghb3B0aW9ucy50aXRsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicHJvbXB0IHJlcXVpcmVzIGEgdGl0bGVcIik7XG4gICAgfVxuXG4gICAgaWYgKCEkLmlzRnVuY3Rpb24ob3B0aW9ucy5jYWxsYmFjaykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInByb21wdCByZXF1aXJlcyBhIGNhbGxiYWNrXCIpO1xuICAgIH1cblxuICAgIGlmICghdGVtcGxhdGVzLmlucHV0c1tvcHRpb25zLmlucHV0VHlwZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgcHJvbXB0IHR5cGVcIik7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIHRoZSBpbnB1dCBiYXNlZCBvbiB0aGUgc3VwcGxpZWQgdHlwZVxuICAgIGlucHV0ID0gJCh0ZW1wbGF0ZXMuaW5wdXRzW29wdGlvbnMuaW5wdXRUeXBlXSk7XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMuaW5wdXRUeXBlKSB7XG4gICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgY2FzZSBcInRleHRhcmVhXCI6XG4gICAgICBjYXNlIFwiZW1haWxcIjpcbiAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICBjYXNlIFwidGltZVwiOlxuICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XG4gICAgICAgIGlucHV0LnZhbChvcHRpb25zLnZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJzZWxlY3RcIjpcbiAgICAgICAgdmFyIGdyb3VwcyA9IHt9O1xuICAgICAgICBpbnB1dE9wdGlvbnMgPSBvcHRpb25zLmlucHV0T3B0aW9ucyB8fCBbXTtcblxuICAgICAgICBpZiAoISQuaXNBcnJheShpbnB1dE9wdGlvbnMpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHBhc3MgYW4gYXJyYXkgb2YgaW5wdXQgb3B0aW9uc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5wdXRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb21wdCB3aXRoIHNlbGVjdCByZXF1aXJlcyBvcHRpb25zXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWFjaChpbnB1dE9wdGlvbnMsIGZ1bmN0aW9uKF8sIG9wdGlvbikge1xuXG4gICAgICAgICAgLy8gYXNzdW1lIHRoZSBlbGVtZW50IHRvIGF0dGFjaCB0byBpcyB0aGUgaW5wdXQuLi5cbiAgICAgICAgICB2YXIgZWxlbSA9IGlucHV0O1xuXG4gICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbi50ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImdpdmVuIG9wdGlvbnMgaW4gd3JvbmcgZm9ybWF0XCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIC4uLiBidXQgb3ZlcnJpZGUgdGhhdCBlbGVtZW50IGlmIHRoaXMgb3B0aW9uIHNpdHMgaW4gYSBncm91cFxuXG4gICAgICAgICAgaWYgKG9wdGlvbi5ncm91cCkge1xuICAgICAgICAgICAgLy8gaW5pdGlhbGlzZSBncm91cCBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgIGlmICghZ3JvdXBzW29wdGlvbi5ncm91cF0pIHtcbiAgICAgICAgICAgICAgZ3JvdXBzW29wdGlvbi5ncm91cF0gPSAkKFwiPG9wdGdyb3VwLz5cIikuYXR0cihcImxhYmVsXCIsIG9wdGlvbi5ncm91cCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsZW0gPSBncm91cHNbb3B0aW9uLmdyb3VwXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbGVtLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgb3B0aW9uLnZhbHVlICsgXCInPlwiICsgb3B0aW9uLnRleHQgKyBcIjwvb3B0aW9uPlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZWFjaChncm91cHMsIGZ1bmN0aW9uKF8sIGdyb3VwKSB7XG4gICAgICAgICAgaW5wdXQuYXBwZW5kKGdyb3VwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc2FmZSB0byBzZXQgYSBzZWxlY3QncyB2YWx1ZSBhcyBwZXIgYSBub3JtYWwgaW5wdXRcbiAgICAgICAgaW5wdXQudmFsKG9wdGlvbnMudmFsdWUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgIHZhciB2YWx1ZXMgICA9ICQuaXNBcnJheShvcHRpb25zLnZhbHVlKSA/IG9wdGlvbnMudmFsdWUgOiBbb3B0aW9ucy52YWx1ZV07XG4gICAgICAgIGlucHV0T3B0aW9ucyA9IG9wdGlvbnMuaW5wdXRPcHRpb25zIHx8IFtdO1xuXG4gICAgICAgIGlmICghaW5wdXRPcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInByb21wdCB3aXRoIGNoZWNrYm94IHJlcXVpcmVzIG9wdGlvbnNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlucHV0T3B0aW9uc1swXS52YWx1ZSB8fCAhaW5wdXRPcHRpb25zWzBdLnRleHQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJnaXZlbiBvcHRpb25zIGluIHdyb25nIGZvcm1hdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrYm94ZXMgaGF2ZSB0byBuZXN0IHdpdGhpbiBhIGNvbnRhaW5pbmcgZWxlbWVudCwgc29cbiAgICAgICAgLy8gdGhleSBicmVhayB0aGUgcnVsZXMgYSBiaXQgYW5kIHdlIGVuZCB1cCByZS1hc3NpZ25pbmdcbiAgICAgICAgLy8gb3VyICdpbnB1dCcgZWxlbWVudCB0byB0aGlzIGNvbnRhaW5lciBpbnN0ZWFkXG4gICAgICAgIGlucHV0ID0gJChcIjxkaXYvPlwiKTtcblxuICAgICAgICBlYWNoKGlucHV0T3B0aW9ucywgZnVuY3Rpb24oXywgb3B0aW9uKSB7XG4gICAgICAgICAgdmFyIGNoZWNrYm94ID0gJCh0ZW1wbGF0ZXMuaW5wdXRzW29wdGlvbnMuaW5wdXRUeXBlXSk7XG5cbiAgICAgICAgICBjaGVja2JveC5maW5kKFwiaW5wdXRcIikuYXR0cihcInZhbHVlXCIsIG9wdGlvbi52YWx1ZSk7XG4gICAgICAgICAgY2hlY2tib3guZmluZChcImxhYmVsXCIpLmFwcGVuZChvcHRpb24udGV4dCk7XG5cbiAgICAgICAgICAvLyB3ZSd2ZSBlbnN1cmVkIHZhbHVlcyBpcyBhbiBhcnJheSBzbyB3ZSBjYW4gYWx3YXlzIGl0ZXJhdGUgb3ZlciBpdFxuICAgICAgICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbihfLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBvcHRpb24udmFsdWUpIHtcbiAgICAgICAgICAgICAgY2hlY2tib3guZmluZChcImlucHV0XCIpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaW5wdXQuYXBwZW5kKGNoZWNrYm94KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIEBUT0RPIHByb3ZpZGUgYW4gYXR0cmlidXRlcyBvcHRpb24gaW5zdGVhZFxuICAgIC8vIGFuZCBzaW1wbHkgbWFwIHRoYXQgYXMga2V5czogdmFsc1xuICAgIGlmIChvcHRpb25zLnBsYWNlaG9sZGVyKSB7XG4gICAgICBpbnB1dC5hdHRyKFwicGxhY2Vob2xkZXJcIiwgb3B0aW9ucy5wbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucGF0dGVybikge1xuICAgICAgaW5wdXQuYXR0cihcInBhdHRlcm5cIiwgb3B0aW9ucy5wYXR0ZXJuKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5tYXhsZW5ndGgpIHtcbiAgICAgIGlucHV0LmF0dHIoXCJtYXhsZW5ndGhcIiwgb3B0aW9ucy5tYXhsZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIG5vdyBwbGFjZSBpdCBpbiBvdXIgZm9ybVxuICAgIGZvcm0uYXBwZW5kKGlucHV0KTtcblxuICAgIGZvcm0ub24oXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gRml4IGZvciBTYW1teUpTIChvciBzaW1pbGFyIEpTIHJvdXRpbmcgbGlicmFyeSkgaGlqYWNraW5nIHRoZSBmb3JtIHBvc3QuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gQFRPRE8gY2FuIHdlIGFjdHVhbGx5IGNsaWNrICp0aGUqIGJ1dHRvbiBvYmplY3QgaW5zdGVhZD9cbiAgICAgIC8vIGUuZy4gYnV0dG9ucy5jb25maXJtLmNsaWNrKCkgb3Igc2ltaWxhclxuICAgICAgZGlhbG9nLmZpbmQoXCIuYnRuLXByaW1hcnlcIikuY2xpY2soKTtcbiAgICB9KTtcblxuICAgIGRpYWxvZyA9IGV4cG9ydHMuZGlhbG9nKG9wdGlvbnMpO1xuXG4gICAgLy8gY2xlYXIgdGhlIGV4aXN0aW5nIGhhbmRsZXIgZm9jdXNpbmcgdGhlIHN1Ym1pdCBidXR0b24uLi5cbiAgICBkaWFsb2cub2ZmKFwic2hvd24uYnMubW9kYWxcIik7XG5cbiAgICAvLyAuLi5hbmQgcmVwbGFjZSBpdCB3aXRoIG9uZSBmb2N1c2luZyBvdXIgaW5wdXQsIGlmIHBvc3NpYmxlXG4gICAgZGlhbG9nLm9uKFwic2hvd24uYnMubW9kYWxcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAvLyBuZWVkIHRoZSBjbG9zdXJlIGhlcmUgc2luY2UgaW5wdXQgaXNuJ3RcbiAgICAgIC8vIGFuIG9iamVjdCBvdGhlcndpc2VcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoc2hvdWxkU2hvdyA9PT0gdHJ1ZSkge1xuICAgICAgZGlhbG9nLm1vZGFsKFwic2hvd1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlhbG9nO1xuICB9O1xuXG4gIGV4cG9ydHMuZGlhbG9nID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBzYW5pdGl6ZShvcHRpb25zKTtcblxuICAgIHZhciBkaWFsb2cgPSAkKHRlbXBsYXRlcy5kaWFsb2cpO1xuICAgIHZhciBpbm5lckRpYWxvZyA9IGRpYWxvZy5maW5kKFwiLm1vZGFsLWRpYWxvZ1wiKTtcbiAgICB2YXIgYm9keSA9IGRpYWxvZy5maW5kKFwiLm1vZGFsLWJvZHlcIik7XG4gICAgdmFyIGJ1dHRvbnMgPSBvcHRpb25zLmJ1dHRvbnM7XG4gICAgdmFyIGJ1dHRvblN0ciA9IFwiXCI7XG4gICAgdmFyIGNhbGxiYWNrcyA9IHtcbiAgICAgIG9uRXNjYXBlOiBvcHRpb25zLm9uRXNjYXBlXG4gICAgfTtcblxuICAgIGlmICgkLmZuLm1vZGFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCIkLmZuLm1vZGFsIGlzIG5vdCBkZWZpbmVkOyBwbGVhc2UgZG91YmxlIGNoZWNrIHlvdSBoYXZlIGluY2x1ZGVkIFwiICtcbiAgICAgICAgXCJ0aGUgQm9vdHN0cmFwIEphdmFTY3JpcHQgbGlicmFyeS4gU2VlIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvIFwiICtcbiAgICAgICAgXCJmb3IgbW9yZSBkZXRhaWxzLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGVhY2goYnV0dG9ucywgZnVuY3Rpb24oa2V5LCBidXR0b24pIHtcblxuICAgICAgLy8gQFRPRE8gSSBkb24ndCBsaWtlIHRoaXMgc3RyaW5nIGFwcGVuZGluZyB0byBpdHNlbGY7IGJpdCBkaXJ0eS4gTmVlZHMgcmV3b3JraW5nXG4gICAgICAvLyBjYW4gd2UganVzdCBidWlsZCB1cCBidXR0b24gZWxlbWVudHMgaW5zdGVhZD8gc2xvd2VyIGJ1dCBuZWF0ZXIuIFRoZW4gYnV0dG9uXG4gICAgICAvLyBjYW4ganVzdCBiZWNvbWUgYSB0ZW1wbGF0ZSB0b29cbiAgICAgIGJ1dHRvblN0ciArPSBcIjxidXR0b24gZGF0YS1iYi1oYW5kbGVyPSdcIiArIGtleSArIFwiJyB0eXBlPSdidXR0b24nIGNsYXNzPSdidG4gXCIgKyBidXR0b24uY2xhc3NOYW1lICsgXCInPlwiICsgYnV0dG9uLmxhYmVsICsgXCI8L2J1dHRvbj5cIjtcbiAgICAgIGNhbGxiYWNrc1trZXldID0gYnV0dG9uLmNhbGxiYWNrO1xuICAgIH0pO1xuXG4gICAgYm9keS5maW5kKFwiLmJvb3Rib3gtYm9keVwiKS5odG1sKG9wdGlvbnMubWVzc2FnZSk7XG5cbiAgICBpZiAob3B0aW9ucy5hbmltYXRlID09PSB0cnVlKSB7XG4gICAgICBkaWFsb2cuYWRkQ2xhc3MoXCJmYWRlXCIpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmNsYXNzTmFtZSkge1xuICAgICAgZGlhbG9nLmFkZENsYXNzKG9wdGlvbnMuY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zaXplID09PSBcImxhcmdlXCIpIHtcbiAgICAgIGlubmVyRGlhbG9nLmFkZENsYXNzKFwibW9kYWwtbGdcIik7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnNpemUgPT09IFwic21hbGxcIikge1xuICAgICAgaW5uZXJEaWFsb2cuYWRkQ2xhc3MoXCJtb2RhbC1zbVwiKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy50aXRsZSkge1xuICAgICAgYm9keS5iZWZvcmUodGVtcGxhdGVzLmhlYWRlcik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY2xvc2VCdXR0b24pIHtcbiAgICAgIHZhciBjbG9zZUJ1dHRvbiA9ICQodGVtcGxhdGVzLmNsb3NlQnV0dG9uKTtcblxuICAgICAgaWYgKG9wdGlvbnMudGl0bGUpIHtcbiAgICAgICAgZGlhbG9nLmZpbmQoXCIubW9kYWwtaGVhZGVyXCIpLnByZXBlbmQoY2xvc2VCdXR0b24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2VCdXR0b24uY3NzKFwibWFyZ2luLXRvcFwiLCBcIi0xMHB4XCIpLnByZXBlbmRUbyhib2R5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy50aXRsZSkge1xuICAgICAgZGlhbG9nLmZpbmQoXCIubW9kYWwtdGl0bGVcIikuaHRtbChvcHRpb25zLnRpdGxlKTtcbiAgICB9XG5cbiAgICBpZiAoYnV0dG9uU3RyLmxlbmd0aCkge1xuICAgICAgYm9keS5hZnRlcih0ZW1wbGF0ZXMuZm9vdGVyKTtcbiAgICAgIGRpYWxvZy5maW5kKFwiLm1vZGFsLWZvb3RlclwiKS5odG1sKGJ1dHRvblN0cik7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBCb290c3RyYXAgZXZlbnQgbGlzdGVuZXJzOyB1c2VkIGhhbmRsZSBleHRyYVxuICAgICAqIHNldHVwICYgdGVhcmRvd24gcmVxdWlyZWQgYWZ0ZXIgdGhlIHVuZGVybHlpbmdcbiAgICAgKiBtb2RhbCBoYXMgcGVyZm9ybWVkIGNlcnRhaW4gYWN0aW9uc1xuICAgICAqL1xuXG4gICAgZGlhbG9nLm9uKFwiaGlkZGVuLmJzLm1vZGFsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIGVuc3VyZSB3ZSBkb24ndCBhY2NpZGVudGFsbHkgaW50ZXJjZXB0IGhpZGRlbiBldmVudHMgdHJpZ2dlcmVkXG4gICAgICAvLyBieSBjaGlsZHJlbiBvZiB0aGUgY3VycmVudCBkaWFsb2cuIFdlIHNob3VsZG4ndCBhbnltb3JlIG5vdyBCU1xuICAgICAgLy8gbmFtZXNwYWNlcyBpdHMgZXZlbnRzOyBidXQgc3RpbGwgd29ydGggZG9pbmdcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcykge1xuICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKlxuICAgIGRpYWxvZy5vbihcInNob3cuYnMubW9kYWxcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAvLyBzYWRseSB0aGlzIGRvZXNuJ3Qgd29yazsgc2hvdyBpcyBjYWxsZWQgKmp1c3QqIGJlZm9yZVxuICAgICAgLy8gdGhlIGJhY2tkcm9wIGlzIGFkZGVkIHNvIHdlJ2QgbmVlZCBhIHNldFRpbWVvdXQgaGFjayBvclxuICAgICAgLy8gb3RoZXJ3aXNlLi4uIGxlYXZpbmcgaW4gYXMgd291bGQgYmUgbmljZVxuICAgICAgaWYgKG9wdGlvbnMuYmFja2Ryb3ApIHtcbiAgICAgICAgZGlhbG9nLm5leHQoXCIubW9kYWwtYmFja2Ryb3BcIikuYWRkQ2xhc3MoXCJib290Ym94LWJhY2tkcm9wXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICovXG5cbiAgICBkaWFsb2cub24oXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGRpYWxvZy5maW5kKFwiLmJ0bi1wcmltYXJ5OmZpcnN0XCIpLmZvY3VzKCk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBCb290Ym94IGV2ZW50IGxpc3RlbmVyczsgZXhwZXJpbWVudGFsIGFuZCBtYXkgbm90IGxhc3RcbiAgICAgKiBqdXN0IGFuIGF0dGVtcHQgdG8gZGVjb3VwbGUgc29tZSBiZWhhdmlvdXJzIGZyb20gdGhlaXJcbiAgICAgKiByZXNwZWN0aXZlIHRyaWdnZXJzXG4gICAgICovXG5cbiAgICBpZiAob3B0aW9ucy5iYWNrZHJvcCAhPT0gXCJzdGF0aWNcIikge1xuICAgICAgLy8gQSBib29sZWFuIHRydWUvZmFsc2UgYWNjb3JkaW5nIHRvIHRoZSBCb290c3RyYXAgZG9jc1xuICAgICAgLy8gc2hvdWxkIHNob3cgYSBkaWFsb2cgdGhlIHVzZXIgY2FuIGRpc21pc3MgYnkgY2xpY2tpbmcgb25cbiAgICAgIC8vIHRoZSBiYWNrZ3JvdW5kLlxuICAgICAgLy8gV2UgYWx3YXlzIG9ubHkgZXZlciBwYXNzIHN0YXRpYy9mYWxzZSB0byB0aGUgYWN0dWFsXG4gICAgICAvLyAkLm1vZGFsIGZ1bmN0aW9uIGJlY2F1c2Ugd2l0aCBgdHJ1ZWAgd2UgY2FuJ3QgdHJhcFxuICAgICAgLy8gdGhpcyBldmVudCAodGhlIC5tb2RhbC1iYWNrZHJvcCBzd2FsbG93cyBpdClcbiAgICAgIC8vIEhvd2V2ZXIsIHdlIHN0aWxsIHdhbnQgdG8gc29ydCBvZiByZXNwZWN0IHRydWVcbiAgICAgIC8vIGFuZCBpbnZva2UgdGhlIGVzY2FwZSBtZWNoYW5pc20gaW5zdGVhZFxuICAgICAgZGlhbG9nLm9uKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIEBOT1RFOiB0aGUgdGFyZ2V0IHZhcmllcyBpbiA+PSAzLjMueCByZWxlYXNlcyBzaW5jZSB0aGUgbW9kYWwgYmFja2Ryb3BcbiAgICAgICAgLy8gbW92ZWQgKmluc2lkZSogdGhlIG91dGVyIGRpYWxvZyByYXRoZXIgdGhhbiAqYWxvbmdzaWRlKiBpdFxuICAgICAgICBpZiAoZGlhbG9nLmNoaWxkcmVuKFwiLm1vZGFsLWJhY2tkcm9wXCIpLmxlbmd0aCkge1xuICAgICAgICAgIGUuY3VycmVudFRhcmdldCA9IGRpYWxvZy5jaGlsZHJlbihcIi5tb2RhbC1iYWNrZHJvcFwiKS5nZXQoMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpYWxvZy50cmlnZ2VyKFwiZXNjYXBlLmNsb3NlLmJiXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlhbG9nLm9uKFwiZXNjYXBlLmNsb3NlLmJiXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChjYWxsYmFja3Mub25Fc2NhcGUpIHtcbiAgICAgICAgcHJvY2Vzc0NhbGxiYWNrKGUsIGRpYWxvZywgY2FsbGJhY2tzLm9uRXNjYXBlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIFN0YW5kYXJkIGpRdWVyeSBldmVudCBsaXN0ZW5lcnM7IHVzZWQgdG8gaGFuZGxlIHVzZXJcbiAgICAgKiBpbnRlcmFjdGlvbiB3aXRoIG91ciBkaWFsb2dcbiAgICAgKi9cblxuICAgIGRpYWxvZy5vbihcImNsaWNrXCIsIFwiLm1vZGFsLWZvb3RlciBidXR0b25cIiwgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGNhbGxiYWNrS2V5ID0gJCh0aGlzKS5kYXRhKFwiYmItaGFuZGxlclwiKTtcblxuICAgICAgcHJvY2Vzc0NhbGxiYWNrKGUsIGRpYWxvZywgY2FsbGJhY2tzW2NhbGxiYWNrS2V5XSk7XG4gICAgfSk7XG5cbiAgICBkaWFsb2cub24oXCJjbGlja1wiLCBcIi5ib290Ym94LWNsb3NlLWJ1dHRvblwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAvLyBvbkVzY2FwZSBtaWdodCBiZSBmYWxzeSBidXQgdGhhdCdzIGZpbmU7IHRoZSBmYWN0IGlzXG4gICAgICAvLyBpZiB0aGUgdXNlciBoYXMgbWFuYWdlZCB0byBjbGljayB0aGUgY2xvc2UgYnV0dG9uIHdlXG4gICAgICAvLyBoYXZlIHRvIGNsb3NlIHRoZSBkaWFsb2csIGNhbGxiYWNrIG9yIG5vdFxuICAgICAgcHJvY2Vzc0NhbGxiYWNrKGUsIGRpYWxvZywgY2FsbGJhY2tzLm9uRXNjYXBlKTtcbiAgICB9KTtcblxuICAgIGRpYWxvZy5vbihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChlLndoaWNoID09PSAyNykge1xuICAgICAgICBkaWFsb2cudHJpZ2dlcihcImVzY2FwZS5jbG9zZS5iYlwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHRoZSByZW1haW5kZXIgb2YgdGhpcyBtZXRob2Qgc2ltcGx5IGRlYWxzIHdpdGggYWRkaW5nIG91clxuICAgIC8vIGRpYWxvZ2VudCB0byB0aGUgRE9NLCBhdWdtZW50aW5nIGl0IHdpdGggQm9vdHN0cmFwJ3MgbW9kYWxcbiAgICAvLyBmdW5jdGlvbmFsaXR5IGFuZCB0aGVuIGdpdmluZyB0aGUgcmVzdWx0aW5nIG9iamVjdCBiYWNrXG4gICAgLy8gdG8gb3VyIGNhbGxlclxuXG4gICAgJChvcHRpb25zLmNvbnRhaW5lcikuYXBwZW5kKGRpYWxvZyk7XG5cbiAgICBkaWFsb2cubW9kYWwoe1xuICAgICAgYmFja2Ryb3A6IG9wdGlvbnMuYmFja2Ryb3AgPyBcInN0YXRpY1wiOiBmYWxzZSxcbiAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICAgIHNob3c6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBpZiAob3B0aW9ucy5zaG93KSB7XG4gICAgICBkaWFsb2cubW9kYWwoXCJzaG93XCIpO1xuICAgIH1cblxuICAgIC8vIEBUT0RPIHNob3VsZCB3ZSByZXR1cm4gdGhlIHJhdyBlbGVtZW50IGhlcmUgb3Igc2hvdWxkXG4gICAgLy8gd2Ugd3JhcCBpdCBpbiBhbiBvYmplY3Qgb24gd2hpY2ggd2UgY2FuIGV4cG9zZSBzb21lIG5lYXRlclxuICAgIC8vIG1ldGhvZHMsIGUuZy4gdmFyIGQgPSBib290Ym94LmFsZXJ0KCk7IGQuaGlkZSgpOyBpbnN0ZWFkXG4gICAgLy8gb2YgZC5tb2RhbChcImhpZGVcIik7XG5cbiAgIC8qXG4gICAgZnVuY3Rpb24gQkJEaWFsb2coZWxlbSkge1xuICAgICAgdGhpcy5lbGVtID0gZWxlbTtcbiAgICB9XG5cbiAgICBCQkRpYWxvZy5wcm90b3R5cGUgPSB7XG4gICAgICBoaWRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbS5tb2RhbChcImhpZGVcIik7XG4gICAgICB9LFxuICAgICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW0ubW9kYWwoXCJzaG93XCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgKi9cblxuICAgIHJldHVybiBkaWFsb2c7XG5cbiAgfTtcblxuICBleHBvcnRzLnNldERlZmF1bHRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIC8vIGFsbG93IHBhc3Npbmcgb2Ygc2luZ2xlIGtleS92YWx1ZS4uLlxuICAgICAgdmFsdWVzW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC4uLiBhbmQgYXMgYW4gb2JqZWN0IHRvb1xuICAgICAgdmFsdWVzID0gYXJndW1lbnRzWzBdO1xuICAgIH1cblxuICAgICQuZXh0ZW5kKGRlZmF1bHRzLCB2YWx1ZXMpO1xuICB9O1xuXG4gIGV4cG9ydHMuaGlkZUFsbCA9IGZ1bmN0aW9uKCkge1xuICAgICQoXCIuYm9vdGJveFwiKS5tb2RhbChcImhpZGVcIik7XG5cbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBzdGFuZGFyZCBsb2NhbGVzLiBQbGVhc2UgYWRkIG1vcmUgYWNjb3JkaW5nIHRvIElTTyA2MzktMSBzdGFuZGFyZC4gTXVsdGlwbGUgbGFuZ3VhZ2UgdmFyaWFudHMgYXJlXG4gICAqIHVubGlrZWx5IHRvIGJlIHJlcXVpcmVkLiBJZiB0aGlzIGdldHMgdG9vIGxhcmdlIGl0IGNhbiBiZSBzcGxpdCBvdXQgaW50byBzZXBhcmF0ZSBKUyBmaWxlcy5cbiAgICovXG4gIHZhciBsb2NhbGVzID0ge1xuICAgIGJnX0JHIDoge1xuICAgICAgT0sgICAgICA6IFwi0J7QulwiLFxuICAgICAgQ0FOQ0VMICA6IFwi0J7RgtC60LDQt1wiLFxuICAgICAgQ09ORklSTSA6IFwi0J/QvtGC0LLRitGA0LbQtNCw0LLQsNC8XCJcbiAgICB9LFxuICAgIGJyIDoge1xuICAgICAgT0sgICAgICA6IFwiT0tcIixcbiAgICAgIENBTkNFTCAgOiBcIkNhbmNlbGFyXCIsXG4gICAgICBDT05GSVJNIDogXCJTaW1cIlxuICAgIH0sXG4gICAgY3MgOiB7XG4gICAgICBPSyAgICAgIDogXCJPS1wiLFxuICAgICAgQ0FOQ0VMICA6IFwiWnJ1xaFpdFwiLFxuICAgICAgQ09ORklSTSA6IFwiUG90dnJkaXRcIlxuICAgIH0sXG4gICAgZGEgOiB7XG4gICAgICBPSyAgICAgIDogXCJPS1wiLFxuICAgICAgQ0FOQ0VMICA6IFwiQW5udWxsZXJcIixcbiAgICAgIENPTkZJUk0gOiBcIkFjY2VwdGVyXCJcbiAgICB9LFxuICAgIGRlIDoge1xuICAgICAgT0sgICAgICA6IFwiT0tcIixcbiAgICAgIENBTkNFTCAgOiBcIkFiYnJlY2hlblwiLFxuICAgICAgQ09ORklSTSA6IFwiQWt6ZXB0aWVyZW5cIlxuICAgIH0sXG4gICAgZWwgOiB7XG4gICAgICBPSyAgICAgIDogXCLOlc69z4TOrM6+zrXOuVwiLFxuICAgICAgQ0FOQ0VMICA6IFwizpHOus+Nz4HPic+DzrdcIixcbiAgICAgIENPTkZJUk0gOiBcIs6Vz4DOuc6yzrXOss6xzq/Pic+DzrdcIlxuICAgIH0sXG4gICAgZW4gOiB7XG4gICAgICBPSyAgICAgIDogXCJPS1wiLFxuICAgICAgQ0FOQ0VMICA6IFwiQ2FuY2VsXCIsXG4gICAgICBDT05GSVJNIDogXCJPS1wiXG4gICAgfSxcbiAgICBlcyA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCJDYW5jZWxhclwiLFxuICAgICAgQ09ORklSTSA6IFwiQWNlcHRhclwiXG4gICAgfSxcbiAgICBldCA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCJLYXRrZXN0YVwiLFxuICAgICAgQ09ORklSTSA6IFwiT0tcIlxuICAgIH0sXG4gICAgZmEgOiB7XG4gICAgICBPSyAgICAgIDogXCLZgtio2YjZhFwiLFxuICAgICAgQ0FOQ0VMICA6IFwi2YTYutmIXCIsXG4gICAgICBDT05GSVJNIDogXCLYqtin24zbjNivXCJcbiAgICB9LFxuICAgIGZpIDoge1xuICAgICAgT0sgICAgICA6IFwiT0tcIixcbiAgICAgIENBTkNFTCAgOiBcIlBlcnV1dGFcIixcbiAgICAgIENPTkZJUk0gOiBcIk9LXCJcbiAgICB9LFxuICAgIGZyIDoge1xuICAgICAgT0sgICAgICA6IFwiT0tcIixcbiAgICAgIENBTkNFTCAgOiBcIkFubnVsZXJcIixcbiAgICAgIENPTkZJUk0gOiBcIkQnYWNjb3JkXCJcbiAgICB9LFxuICAgIGhlIDoge1xuICAgICAgT0sgICAgICA6IFwi15DXmdep15XXqFwiLFxuICAgICAgQ0FOQ0VMICA6IFwi15HXmdeY15XXnFwiLFxuICAgICAgQ09ORklSTSA6IFwi15DXmdep15XXqFwiXG4gICAgfSxcbiAgICBodSA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCJNw6lnc2VtXCIsXG4gICAgICBDT05GSVJNIDogXCJNZWdlcsWRc8OtdFwiXG4gICAgfSxcbiAgICBociA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCJPZHVzdGFuaVwiLFxuICAgICAgQ09ORklSTSA6IFwiUG90dnJkaVwiXG4gICAgfSxcbiAgICBpZCA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCJCYXRhbFwiLFxuICAgICAgQ09ORklSTSA6IFwiT0tcIlxuICAgIH0sXG4gICAgaXQgOiB7XG4gICAgICBPSyAgICAgIDogXCJPS1wiLFxuICAgICAgQ0FOQ0VMICA6IFwiQW5udWxsYVwiLFxuICAgICAgQ09ORklSTSA6IFwiQ29uZmVybWFcIlxuICAgIH0sXG4gICAgamEgOiB7XG4gICAgICBPSyAgICAgIDogXCJPS1wiLFxuICAgICAgQ0FOQ0VMICA6IFwi44Kt44Oj44Oz44K744OrXCIsXG4gICAgICBDT05GSVJNIDogXCLnorroqo1cIlxuICAgIH0sXG4gICAgbHQgOiB7XG4gICAgICBPSyAgICAgIDogXCJHZXJhaVwiLFxuICAgICAgQ0FOQ0VMICA6IFwiQXTFoWF1a3RpXCIsXG4gICAgICBDT05GSVJNIDogXCJQYXR2aXJ0aW50aVwiXG4gICAgfSxcbiAgICBsdiA6IHtcbiAgICAgIE9LICAgICAgOiBcIkxhYmlcIixcbiAgICAgIENBTkNFTCAgOiBcIkF0Y2VsdFwiLFxuICAgICAgQ09ORklSTSA6IFwiQXBzdGlwcmluxIF0XCJcbiAgICB9LFxuICAgIG5sIDoge1xuICAgICAgT0sgICAgICA6IFwiT0tcIixcbiAgICAgIENBTkNFTCAgOiBcIkFubnVsZXJlblwiLFxuICAgICAgQ09ORklSTSA6IFwiQWNjZXB0ZXJlblwiXG4gICAgfSxcbiAgICBubyA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCJBdmJyeXRcIixcbiAgICAgIENPTkZJUk0gOiBcIk9LXCJcbiAgICB9LFxuICAgIHBsIDoge1xuICAgICAgT0sgICAgICA6IFwiT0tcIixcbiAgICAgIENBTkNFTCAgOiBcIkFudWx1alwiLFxuICAgICAgQ09ORklSTSA6IFwiUG90d2llcmTFulwiXG4gICAgfSxcbiAgICBwdCA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCJDYW5jZWxhclwiLFxuICAgICAgQ09ORklSTSA6IFwiQ29uZmlybWFyXCJcbiAgICB9LFxuICAgIHJ1IDoge1xuICAgICAgT0sgICAgICA6IFwiT0tcIixcbiAgICAgIENBTkNFTCAgOiBcItCe0YLQvNC10L3QsFwiLFxuICAgICAgQ09ORklSTSA6IFwi0J/RgNC40LzQtdC90LjRgtGMXCJcbiAgICB9LFxuICAgIHNxIDoge1xuICAgICAgT0sgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgOiBcIkFudWxvXCIsXG4gICAgICBDT05GSVJNIDogXCJQcmFub1wiXG4gICAgfSxcbiAgICBzdiA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCJBdmJyeXRcIixcbiAgICAgIENPTkZJUk0gOiBcIk9LXCJcbiAgICB9LFxuICAgIHRoIDoge1xuICAgICAgT0sgICAgICA6IFwi4LiV4LiB4Lil4LiHXCIsXG4gICAgICBDQU5DRUwgIDogXCLguKLguIHguYDguKXguLTguIFcIixcbiAgICAgIENPTkZJUk0gOiBcIuC4ouC4t+C4meC4ouC4seC4mVwiXG4gICAgfSxcbiAgICB0ciA6IHtcbiAgICAgIE9LICAgICAgOiBcIlRhbWFtXCIsXG4gICAgICBDQU5DRUwgIDogXCLEsHB0YWxcIixcbiAgICAgIENPTkZJUk0gOiBcIk9uYXlsYVwiXG4gICAgfSxcbiAgICB6aF9DTiA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCLlj5bmtohcIixcbiAgICAgIENPTkZJUk0gOiBcIuehruiupFwiXG4gICAgfSxcbiAgICB6aF9UVyA6IHtcbiAgICAgIE9LICAgICAgOiBcIk9LXCIsXG4gICAgICBDQU5DRUwgIDogXCLlj5bmtohcIixcbiAgICAgIENPTkZJUk0gOiBcIueiuuiqjVwiXG4gICAgfVxuICB9O1xuXG4gIGV4cG9ydHMuYWRkTG9jYWxlID0gZnVuY3Rpb24obmFtZSwgdmFsdWVzKSB7XG4gICAgJC5lYWNoKFtcIk9LXCIsIFwiQ0FOQ0VMXCIsIFwiQ09ORklSTVwiXSwgZnVuY3Rpb24oXywgdikge1xuICAgICAgaWYgKCF2YWx1ZXNbdl0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHN1cHBseSBhIHRyYW5zbGF0aW9uIGZvciAnXCIgKyB2ICsgXCInXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9jYWxlc1tuYW1lXSA9IHtcbiAgICAgIE9LOiB2YWx1ZXMuT0ssXG4gICAgICBDQU5DRUw6IHZhbHVlcy5DQU5DRUwsXG4gICAgICBDT05GSVJNOiB2YWx1ZXMuQ09ORklSTVxuICAgIH07XG5cbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfTtcblxuICBleHBvcnRzLnJlbW92ZUxvY2FsZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgbG9jYWxlc1tuYW1lXTtcblxuICAgIHJldHVybiBleHBvcnRzO1xuICB9O1xuXG4gIGV4cG9ydHMuc2V0TG9jYWxlID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBleHBvcnRzLnNldERlZmF1bHRzKFwibG9jYWxlXCIsIG5hbWUpO1xuICB9O1xuXG4gIGV4cG9ydHMuaW5pdCA9IGZ1bmN0aW9uKF8kKSB7XG4gICAgcmV0dXJuIGluaXQoXyQgfHwgJCk7XG4gIH07XG5cbiAgcmV0dXJuIGV4cG9ydHM7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYm9vdGJveC9ib290Ym94LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDIpKSgyMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgLi92ZW5kb3Jcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGlkPVxcXCJtaWRkY29udGVudFxcXCIgY2xhc3M9J2NvbnRhaW5lciBmaWxsJz5cXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcblxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIChjbGljayk9XFxcImNsaWNrZWQoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tbGcgYnRuLWJsb2NrXFxcIj5HTzwvYnV0dG9uPlxcblxcblxcbiAgICAgICAgPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2phdmFzY3JpcHRcXFwiPlxcbiAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplIGNvbnRhaW5lciB3aGVuIGRvY3VtZW50IGlzIGxvYWRlZFxcbiAgICAgICAgICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZShbJy4uL3JhcGhhZWwnXSwgZnVuY3Rpb24oUmFwaGFlbCkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXBlciA9IFJhcGhhZWwoXFxcIm15Q2FudmFzXFxcIiwgNjQwLCA3MjApO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcGVyLmNpcmNsZSgxMDAsIDEwMCwgMTAwKS5hdHRyKHsnZmlsbCc6JzI3MC0jRkFFNTZCOjAtI0U1NkI2QjoxMDAnfSk7IC8vZXhhbXBsZVxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgIH07XFxuICAgICAgICAgICAgICAgIC8vV29yayBoZXJlLCBpbiBhIHNlcGFyYXRlIHNjcmlwdCBmaWxlIG9yIHZpYSBjb21tYW5kIGxpbmVcXG4gICAgICAgICAgICA8L3NjcmlwdD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAgICAgIDxjYW52YXMgaWQ9XFxcIm15Q2FudmFzXFxcIiB3aWR0aD1cXFwiMjAwXFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCIgc3R5bGU9XFxcImJvcmRlcjoxcHggc29saWQgIzAwMDAwMDtcXFwiPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9jYW52YXM+IFxcblxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9kZXNpZ252aWV3L2Rlc2lnbnZpZXcuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Rlc2lnbnZpZXcuY29tcG9uZW50LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudmlldy9kZXNpZ252aWV3LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZGVzaWdudmlldy9kZXNpZ252aWV3LmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=