/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(5);

	var _menu = __webpack_require__(7);

	var _menu2 = _interopRequireDefault(_menu);

	var _form = __webpack_require__(14);

	var _form2 = _interopRequireDefault(_form);

	var _model = __webpack_require__(17);

	var _model2 = _interopRequireDefault(_model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var menu = new _menu2.default({
		el: document.querySelector('.js-menu'),
		tmpl: '#menu',
		data: {
			title: 'SINGLE PAGE APPLICATION FROM JS',
			items: [{
				href: 'https://vk.com',
				anchor: 'vk.com'
			}, {
				href: 'https://ok.ru',
				anchor: 'ok.ru'
			}, {
				href: 'https://yahoo.com',
				anchor: 'yahoo.com'
			}, {
				href: 'https://yandex.ru',
				anchor: 'yandex.ru'
			}]
		}
	}); //import

	var model = new _model2.default({
		data: {},
		resource: 'menu',
		id: '-KIIIl-A1w7peqCRVZ0R'
	});

	var form = new _form2.default({
		el: document.querySelector('.js-form'),
		tmpl: '#form'
	});

	menu.el.addEventListener('remove', function (event) {
		menu.removeItem(event.detail);
	});

	form.el.addEventListener('add', function (event) {
		menu.addItem(event.detail);
		model.setData(menu.data);
		model.save(); // сохранить на сервере
	});

	model.fetch(menu.render.bind(menu));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./pure-min.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./pure-min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*!\nPure v0.6.0\nCopyright 2014 Yahoo! Inc. All rights reserved.\nLicensed under the BSD License.\nhttps://github.com/yahoo/pure/blob/master/LICENSE.md\n*/\n/*!\nnormalize.css v^3.0 | MIT License | git.io/normalize\nCopyright (c) Nicolas Gallagher and Jonathan Neal\n*/\n/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.hidden,[hidden]{display:none!important}.pure-img{max-width:100%;height:auto;display:block}.pure-g{letter-spacing:-.31em;*letter-spacing:normal;*word-spacing:-.43em;text-rendering:optimizespeed;font-family:FreeSans,Arimo,\"Droid Sans\",Helvetica,Arial,sans-serif;display:-webkit-flex;-webkit-flex-flow:row wrap;display:-ms-flexbox;-ms-flex-flow:row wrap;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start}.opera-only :-o-prefocus,.pure-g{word-spacing:-.43em}.pure-u{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-g [class *=\"pure-u\"]{font-family:sans-serif}.pure-u-1,.pure-u-1-1,.pure-u-1-2,.pure-u-1-3,.pure-u-2-3,.pure-u-1-4,.pure-u-3-4,.pure-u-1-5,.pure-u-2-5,.pure-u-3-5,.pure-u-4-5,.pure-u-5-5,.pure-u-1-6,.pure-u-5-6,.pure-u-1-8,.pure-u-3-8,.pure-u-5-8,.pure-u-7-8,.pure-u-1-12,.pure-u-5-12,.pure-u-7-12,.pure-u-11-12,.pure-u-1-24,.pure-u-2-24,.pure-u-3-24,.pure-u-4-24,.pure-u-5-24,.pure-u-6-24,.pure-u-7-24,.pure-u-8-24,.pure-u-9-24,.pure-u-10-24,.pure-u-11-24,.pure-u-12-24,.pure-u-13-24,.pure-u-14-24,.pure-u-15-24,.pure-u-16-24,.pure-u-17-24,.pure-u-18-24,.pure-u-19-24,.pure-u-20-24,.pure-u-21-24,.pure-u-22-24,.pure-u-23-24,.pure-u-24-24{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-1-24{width:4.1667%;*width:4.1357%}.pure-u-1-12,.pure-u-2-24{width:8.3333%;*width:8.3023%}.pure-u-1-8,.pure-u-3-24{width:12.5%;*width:12.469%}.pure-u-1-6,.pure-u-4-24{width:16.6667%;*width:16.6357%}.pure-u-1-5{width:20%;*width:19.969%}.pure-u-5-24{width:20.8333%;*width:20.8023%}.pure-u-1-4,.pure-u-6-24{width:25%;*width:24.969%}.pure-u-7-24{width:29.1667%;*width:29.1357%}.pure-u-1-3,.pure-u-8-24{width:33.3333%;*width:33.3023%}.pure-u-3-8,.pure-u-9-24{width:37.5%;*width:37.469%}.pure-u-2-5{width:40%;*width:39.969%}.pure-u-5-12,.pure-u-10-24{width:41.6667%;*width:41.6357%}.pure-u-11-24{width:45.8333%;*width:45.8023%}.pure-u-1-2,.pure-u-12-24{width:50%;*width:49.969%}.pure-u-13-24{width:54.1667%;*width:54.1357%}.pure-u-7-12,.pure-u-14-24{width:58.3333%;*width:58.3023%}.pure-u-3-5{width:60%;*width:59.969%}.pure-u-5-8,.pure-u-15-24{width:62.5%;*width:62.469%}.pure-u-2-3,.pure-u-16-24{width:66.6667%;*width:66.6357%}.pure-u-17-24{width:70.8333%;*width:70.8023%}.pure-u-3-4,.pure-u-18-24{width:75%;*width:74.969%}.pure-u-19-24{width:79.1667%;*width:79.1357%}.pure-u-4-5{width:80%;*width:79.969%}.pure-u-5-6,.pure-u-20-24{width:83.3333%;*width:83.3023%}.pure-u-7-8,.pure-u-21-24{width:87.5%;*width:87.469%}.pure-u-11-12,.pure-u-22-24{width:91.6667%;*width:91.6357%}.pure-u-23-24{width:95.8333%;*width:95.8023%}.pure-u-1,.pure-u-1-1,.pure-u-5-5,.pure-u-24-24{width:100%}.pure-button{display:inline-block;zoom:1;line-height:normal;white-space:nowrap;vertical-align:middle;text-align:center;cursor:pointer;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button{font-family:inherit;font-size:100%;padding:.5em 1em;color:#444;color:rgba(0,0,0,.8);border:1px solid #999;border:0 rgba(0,0,0,0);background-color:#E6E6E6;text-decoration:none;border-radius:2px}.pure-button-hover,.pure-button:hover,.pure-button:focus{filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#1a000000', GradientType=0);background-image:-webkit-gradient(linear,0 0,0 100%,from(transparent),color-stop(40%,rgba(0,0,0,.05)),to(rgba(0,0,0,.1)));background-image:-webkit-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:-moz-linear-gradient(top,rgba(0,0,0,.05) 0,rgba(0,0,0,.1));background-image:-o-linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));background-image:linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1))}.pure-button:focus{outline:0}.pure-button-active,.pure-button:active{box-shadow:0 0 0 1px rgba(0,0,0,.15) inset,0 0 6px rgba(0,0,0,.2) inset;border-color:#000\\9}.pure-button[disabled],.pure-button-disabled,.pure-button-disabled:hover,.pure-button-disabled:focus,.pure-button-disabled:active{border:0;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);filter:alpha(opacity=40);-khtml-opacity:.4;-moz-opacity:.4;opacity:.4;cursor:not-allowed;box-shadow:none}.pure-button-hidden{display:none}.pure-button::-moz-focus-inner{padding:0;border:0}.pure-button-primary,.pure-button-selected,a.pure-button-primary,a.pure-button-selected{background-color:#0078e7;color:#fff}.pure-form input[type=text],.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=color],.pure-form select,.pure-form textarea{padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;vertical-align:middle;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-form input:not([type]){padding:.5em .6em;display:inline-block;border:1px solid #ccc;box-shadow:inset 0 1px 3px #ddd;border-radius:4px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-form input[type=color]{padding:.2em .5em}.pure-form input[type=text]:focus,.pure-form input[type=password]:focus,.pure-form input[type=email]:focus,.pure-form input[type=url]:focus,.pure-form input[type=date]:focus,.pure-form input[type=month]:focus,.pure-form input[type=time]:focus,.pure-form input[type=datetime]:focus,.pure-form input[type=datetime-local]:focus,.pure-form input[type=week]:focus,.pure-form input[type=number]:focus,.pure-form input[type=search]:focus,.pure-form input[type=tel]:focus,.pure-form input[type=color]:focus,.pure-form select:focus,.pure-form textarea:focus{outline:0;border-color:#129FEA}.pure-form input:not([type]):focus{outline:0;border-color:#129FEA}.pure-form input[type=file]:focus,.pure-form input[type=radio]:focus,.pure-form input[type=checkbox]:focus{outline:thin solid #129FEA;outline:1px auto #129FEA}.pure-form .pure-checkbox,.pure-form .pure-radio{margin:.5em 0;display:block}.pure-form input[type=text][disabled],.pure-form input[type=password][disabled],.pure-form input[type=email][disabled],.pure-form input[type=url][disabled],.pure-form input[type=date][disabled],.pure-form input[type=month][disabled],.pure-form input[type=time][disabled],.pure-form input[type=datetime][disabled],.pure-form input[type=datetime-local][disabled],.pure-form input[type=week][disabled],.pure-form input[type=number][disabled],.pure-form input[type=search][disabled],.pure-form input[type=tel][disabled],.pure-form input[type=color][disabled],.pure-form select[disabled],.pure-form textarea[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input:not([type])[disabled]{cursor:not-allowed;background-color:#eaeded;color:#cad2d3}.pure-form input[readonly],.pure-form select[readonly],.pure-form textarea[readonly]{background-color:#eee;color:#777;border-color:#ccc}.pure-form input:focus:invalid,.pure-form textarea:focus:invalid,.pure-form select:focus:invalid{color:#b94a48;border-color:#e9322d}.pure-form input[type=file]:focus:invalid:focus,.pure-form input[type=radio]:focus:invalid:focus,.pure-form input[type=checkbox]:focus:invalid:focus{outline-color:#e9322d}.pure-form select{height:2.25em;border:1px solid #ccc;background-color:#fff}.pure-form select[multiple]{height:auto}.pure-form label{margin:.5em 0 .2em}.pure-form fieldset{margin:0;padding:.35em 0 .75em;border:0}.pure-form legend{display:block;width:100%;padding:.3em 0;margin-bottom:.3em;color:#333;border-bottom:1px solid #e5e5e5}.pure-form-stacked input[type=text],.pure-form-stacked input[type=password],.pure-form-stacked input[type=email],.pure-form-stacked input[type=url],.pure-form-stacked input[type=date],.pure-form-stacked input[type=month],.pure-form-stacked input[type=time],.pure-form-stacked input[type=datetime],.pure-form-stacked input[type=datetime-local],.pure-form-stacked input[type=week],.pure-form-stacked input[type=number],.pure-form-stacked input[type=search],.pure-form-stacked input[type=tel],.pure-form-stacked input[type=color],.pure-form-stacked input[type=file],.pure-form-stacked select,.pure-form-stacked label,.pure-form-stacked textarea{display:block;margin:.25em 0}.pure-form-stacked input:not([type]){display:block;margin:.25em 0}.pure-form-aligned input,.pure-form-aligned textarea,.pure-form-aligned select,.pure-form-aligned .pure-help-inline,.pure-form-message-inline{display:inline-block;*display:inline;*zoom:1;vertical-align:middle}.pure-form-aligned textarea{vertical-align:top}.pure-form-aligned .pure-control-group{margin-bottom:.5em}.pure-form-aligned .pure-control-group label{text-align:right;display:inline-block;vertical-align:middle;width:10em;margin:0 1em 0 0}.pure-form-aligned .pure-controls{margin:1.5em 0 0 11em}.pure-form input.pure-input-rounded,.pure-form .pure-input-rounded{border-radius:2em;padding:.5em 1em}.pure-form .pure-group fieldset{margin-bottom:10px}.pure-form .pure-group input,.pure-form .pure-group textarea{display:block;padding:10px;margin:0 0 -1px;border-radius:0;position:relative;top:-1px}.pure-form .pure-group input:focus,.pure-form .pure-group textarea:focus{z-index:3}.pure-form .pure-group input:first-child,.pure-form .pure-group textarea:first-child{top:1px;border-radius:4px 4px 0 0;margin:0}.pure-form .pure-group input:first-child:last-child,.pure-form .pure-group textarea:first-child:last-child{top:1px;border-radius:4px;margin:0}.pure-form .pure-group input:last-child,.pure-form .pure-group textarea:last-child{top:-2px;border-radius:0 0 4px 4px;margin:0}.pure-form .pure-group button{margin:.35em 0}.pure-form .pure-input-1{width:100%}.pure-form .pure-input-2-3{width:66%}.pure-form .pure-input-1-2{width:50%}.pure-form .pure-input-1-3{width:33%}.pure-form .pure-input-1-4{width:25%}.pure-form .pure-help-inline,.pure-form-message-inline{display:inline-block;padding-left:.3em;color:#666;vertical-align:middle;font-size:.875em}.pure-form-message{display:block;color:#666;font-size:.875em}@media only screen and (max-width :480px){.pure-form button[type=submit]{margin:.7em 0 0}.pure-form input:not([type]),.pure-form input[type=text],.pure-form input[type=password],.pure-form input[type=email],.pure-form input[type=url],.pure-form input[type=date],.pure-form input[type=month],.pure-form input[type=time],.pure-form input[type=datetime],.pure-form input[type=datetime-local],.pure-form input[type=week],.pure-form input[type=number],.pure-form input[type=search],.pure-form input[type=tel],.pure-form input[type=color],.pure-form label{margin-bottom:.3em;display:block}.pure-group input:not([type]),.pure-group input[type=text],.pure-group input[type=password],.pure-group input[type=email],.pure-group input[type=url],.pure-group input[type=date],.pure-group input[type=month],.pure-group input[type=time],.pure-group input[type=datetime],.pure-group input[type=datetime-local],.pure-group input[type=week],.pure-group input[type=number],.pure-group input[type=search],.pure-group input[type=tel],.pure-group input[type=color]{margin-bottom:0}.pure-form-aligned .pure-control-group label{margin-bottom:.3em;text-align:left;display:block;width:100%}.pure-form-aligned .pure-controls{margin:1.5em 0 0}.pure-form .pure-help-inline,.pure-form-message-inline,.pure-form-message{display:block;font-size:.75em;padding:.2em 0 .8em}}.pure-menu{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.pure-menu-fixed{position:fixed;left:0;top:0;z-index:3}.pure-menu-list,.pure-menu-item{position:relative}.pure-menu-list{list-style:none;margin:0;padding:0}.pure-menu-item{padding:0;margin:0;height:100%}.pure-menu-link,.pure-menu-heading{display:block;text-decoration:none;white-space:nowrap}.pure-menu-horizontal{width:100%;white-space:nowrap}.pure-menu-horizontal .pure-menu-list{display:inline-block}.pure-menu-horizontal .pure-menu-item,.pure-menu-horizontal .pure-menu-heading,.pure-menu-horizontal .pure-menu-separator{display:inline-block;*display:inline;zoom:1;vertical-align:middle}.pure-menu-item .pure-menu-item{display:block}.pure-menu-children{display:none;position:absolute;left:100%;top:0;margin:0;padding:0;z-index:3}.pure-menu-horizontal .pure-menu-children{left:0;top:auto;width:inherit}.pure-menu-allow-hover:hover>.pure-menu-children,.pure-menu-active>.pure-menu-children{display:block;position:absolute}.pure-menu-has-children>.pure-menu-link:after{padding-left:.5em;content:\"\\25B8\";font-size:small}.pure-menu-horizontal .pure-menu-has-children>.pure-menu-link:after{content:\"\\25BE\"}.pure-menu-scrollable{overflow-y:scroll;overflow-x:hidden}.pure-menu-scrollable .pure-menu-list{display:block}.pure-menu-horizontal.pure-menu-scrollable .pure-menu-list{display:inline-block}.pure-menu-horizontal.pure-menu-scrollable{white-space:nowrap;overflow-y:hidden;overflow-x:auto;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;padding:.5em 0}.pure-menu-horizontal.pure-menu-scrollable::-webkit-scrollbar{display:none}.pure-menu-separator{background-color:#ccc;height:1px;margin:.3em 0}.pure-menu-horizontal .pure-menu-separator{width:1px;height:1.3em;margin:0 .3em}.pure-menu-heading{text-transform:uppercase;color:#565d64}.pure-menu-link{color:#777}.pure-menu-children{background-color:#fff}.pure-menu-link,.pure-menu-disabled,.pure-menu-heading{padding:.5em 1em}.pure-menu-disabled{opacity:.5}.pure-menu-disabled .pure-menu-link:hover{background-color:transparent}.pure-menu-active>.pure-menu-link,.pure-menu-link:hover,.pure-menu-link:focus{background-color:#eee}.pure-menu-selected .pure-menu-link,.pure-menu-selected .pure-menu-link:visited{color:#000}.pure-table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb}.pure-table caption{color:#000;font:italic 85%/1 arial,sans-serif;padding:1em 0;text-align:center}.pure-table td,.pure-table th{border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:.5em 1em}.pure-table td:first-child,.pure-table th:first-child{border-left-width:0}.pure-table thead{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom}.pure-table td{background-color:transparent}.pure-table-odd td{background-color:#f2f2f2}.pure-table-striped tr:nth-child(2n-1) td{background-color:#f2f2f2}.pure-table-bordered td{border-bottom:1px solid #cbcbcb}.pure-table-bordered tbody>tr:last-child>td{border-bottom-width:0}.pure-table-horizontal td,.pure-table-horizontal th{border-width:0 0 1px;border-bottom:1px solid #cbcbcb}.pure-table-horizontal tbody>tr:last-child>td{border-bottom-width:0}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body, html {\n\theight: 100%;\n}\n\nbody {\n\toverflow: hidden;\n    background: radial-gradient(black 15%, transparent 16%) 0 0, radial-gradient(black 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;\n    background-color: #282828;\n\n    background-size: 16px 16px;\n}\n\n.app {\n\tmax-width: 600px;\n    transform: translateY(-50%) translateX(-50%);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n\n    background-color: #fff;\n}", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //import


	var _templateEngine = __webpack_require__(8);

	var _templateEngine2 = _interopRequireDefault(_templateEngine);

	var _menu = __webpack_require__(9);

	var _menu2 = _interopRequireDefault(_menu);

	__webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class Menu
	 * Компонента "Меню"
	 */

	var Menu = function () {

		/**
	  * @constructor
	  * @param  {Object} opts
	  */

		function Menu(opts) {
			_classCallCheck(this, Menu);

			this.el = opts.el;
			this.data = opts.data;

			console.time('tmpl_innerHTML');
			this._template = document.querySelector(opts.tmpl).innerHTML;
			console.timeEnd('tmpl_innerHTML');

			console.time('jade_init');
			this._template_jade = _menu2.default;
			console.timeEnd('jade_init');

			this.render();
			this._initEvents();
		}

		/**
	  * Добавляем элемент меню
	  * @param {Object} item
	  */


		_createClass(Menu, [{
			key: 'addItem',
			value: function addItem(item) {
				this.data.items.push(item);
				this.render();
			}

			/**
	   * Удаляем пункт меню из данных
	   * @param  {Object} removedItem
	   */

		}, {
			key: 'removeItem',
			value: function removeItem(removedItem) {
				this.data.items = this.data.items.filter(function (item, index) {
					return index !== removedItem.index;
				});
				this.render();
			}

			/**
	   * Создаем HTML
	   * @param {Object|undefined} data
	   */

		}, {
			key: 'render',
			value: function render(data) {
				if (data) {
					this.data = data;
				}

				console.time('tmpl_innerHTML_render');
				this.el.innerHTML = (0, _templateEngine2.default)(this._template, this.data);
				console.timeEnd('tmpl_innerHTML_render');

				console.time('tmpl_jade_render');
				this.el.innerHTML = this._template_jade(this.data);
				console.timeEnd('tmpl_jade_render');
			}

			/**
	  * Удаления элемента меню
	  * @param  {HTMLElement} item
	  * @private
	  */

		}, {
			key: '_onRemoveClick',
			value: function _onRemoveClick(item) {
				var index = parseInt(item.parentNode.dataset.index, 10);

				this.trigger('remove', {
					index: index
				});
			}

			/**
	  * Выбор элемента меню
	  * @param  {HTMLElement} item
	  */

		}, {
			key: 'pickItem',
			value: function pickItem(item) {
				this.trigger('pick', {
					href: item.getAttribute('href'),
					anchor: item.textContent
				});
			}

			/**
	  * Развешиваем события
	  */

		}, {
			key: '_initEvents',
			value: function _initEvents() {
				this.el.addEventListener('click', this._onClick.bind(this));
			}

			/**
	  * Клик в любую область меню
	  * @param {Event} event
	  * @private
	  */

		}, {
			key: '_onClick',
			value: function _onClick(event) {
				event.preventDefault();
				var item = event.target;

				switch (item.dataset.action) {
					case 'remove':
						this._onRemoveClick(item);
						break;

					case 'pick':
						this.pickItem(item);
						break;
				}
			}

			/**
	  * Сообщение миру о случившемся
	  * @param {string} name тип события
	  * @param {Object} data объект события
	  */

		}, {
			key: 'trigger',
			value: function trigger(name, data) {
				var widgetEvent = new CustomEvent(name, {
					bubbles: true,
					detail: data
				});

				this.el.dispatchEvent(widgetEvent);
			}
		}]);

		return Menu;
	}();

	// Export


	exports.default = Menu;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var templateEngine = function templateEngine(html, options) {
		var re = /<%([^%>]+)?%>/g,
		    reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
		    code = 'var r=[];\n',
		    cursor = 0,
		    match;
		var add = function add(line, js) {
			js ? code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n' : code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '';
			return add;
		};
		while (match = re.exec(html)) {
			add(html.slice(cursor, match.index))(match[1], true);
			cursor = match.index + match[0].length;
		}
		add(html.substr(cursor, html.length - cursor));
		code += 'return r.join("");';
		return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
	};

	//export
	exports.default = templateEngine;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(10);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (items, title, undefined) {
	buf.push("<div class=\"pure-menu custom-restricted-width\"><span class=\"menu__title pure-menu-heading\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</span><ul class=\"pure-menu-list\">");
	// iterate items
	;(function(){
	  var $$obj = items;
	  if ('number' == typeof $$obj.length) {

	    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
	      var item = $$obj[index];

	buf.push("<li" + (jade.attr("data-index", index, true, true)) + " class=\"pure-menu-item\"><a data-action=\"pick\"" + (jade.attr("href", item.href, true, true)) + " class=\"pure-menu-link\">" + (jade.escape(null == (jade_interp = item.anchor) ? "" : jade_interp)) + "</a><i data-action=\"remove\" class=\"close\"></i></li>");
	    }

	  } else {
	    var $$l = 0;
	    for (var index in $$obj) {
	      $$l++;      var item = $$obj[index];

	buf.push("<li" + (jade.attr("data-index", index, true, true)) + " class=\"pure-menu-item\"><a data-action=\"pick\"" + (jade.attr("href", item.href, true, true)) + " class=\"pure-menu-link\">" + (jade.escape(null == (jade_interp = item.anchor) ? "" : jade_interp)) + "</a><i data-action=\"remove\" class=\"close\"></i></li>");
	    }

	  }
	}).call(this);

	buf.push("</ul></div>");}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"undefined" in locals_for_with?locals_for_with.undefined: false?undefined:undefined));;return buf.join("");
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) : val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? Object.keys(val).filter(function (key) {
	    return val[key];
	  }) : [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};

	exports.style = function (val) {
	  if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' + 'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' + 'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse) {
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i],
	          val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html) {
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str) {
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(11).readFileSync(filename, 'utf8');
	  } catch (ex) {
	    rethrow(err, null, lineno);
	  }
	  var context = 3,
	      lines = str.split('\n'),
	      start = Math.max(lineno - context, 0),
	      end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function (line, i) {
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./menu.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./menu.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".menu {\n\tpadding: 10px;\n}\n\n.menu__title {\n\tbackground-image: url(https://learn.javascript.ru/img/sitetoolbar__logo_small.svg);\n    background-position: 0px -9px;\n    background-repeat: no-repeat;\n\n\ttext-align: center;\n    font-size: 19px;\n    padding-left: 90px;\n}\n\n.close {\n  position: absolute;\n  right: 32px;\n  top: 0;\n  width: 32px;\n  height: 32px;\n  opacity: 0.3;\n  cursor: pointer;\n}\n.close:hover {\n  opacity: 1;\n}\n.close:before, .close:after {\n  position: absolute;\n  left: 15px;\n  content: ' ';\n  height: 33px;\n  width: 2px;\n  background-color: #333;\n}\n.close:before {\n  transform: rotate(45deg);\n}\n.close:after {\n  transform: rotate(-45deg);\n}\n\n.pure-menu-item .close {\n  display: none;\n}\n\n.pure-menu-item:hover .close {\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //import


	var _templateEngine = __webpack_require__(8);

	var _templateEngine2 = _interopRequireDefault(_templateEngine);

	__webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class Form
	 * Компонента "Форма"
	 */

	var Form = function () {

		/**
	  * @constructor
	  * @param  {Object} opts
	  */

		function Form(opts) {
			_classCallCheck(this, Form);

			this.el = opts.el;
			this.data = opts.data;
			this._template = document.querySelector(opts.tmpl).innerHTML;

			this.render();
			this._initEvents();
		}

		/**
	  * Создаем HTML
	  */


		_createClass(Form, [{
			key: 'render',
			value: function render() {
				this.el.innerHTML = (0, _templateEngine2.default)(this._template, this.data);
			}

			/**
	   * Получение элемента формы по имени
	   * @param  {string} name
	   * @return {HTMLElement}
	   */

		}, {
			key: 'getField',
			value: function getField(name) {
				return this.el.querySelector('[name="' + name + '"]');
			}

			/**
	  * Сообщение миру о случившемся
	  * @param {string} name тип события
	  * @param {Object} data объект события
	  */

		}, {
			key: 'trigger',
			value: function trigger(name, data) {
				var widgetEvent = new CustomEvent(name, {
					bubbles: true,
					detail: data
				});

				this.el.dispatchEvent(widgetEvent);
			}

			/**
	  * Развешиваем события
	  */

		}, {
			key: '_initEvents',
			value: function _initEvents() {
				this.el.addEventListener('submit', this._onSubmit.bind(this));
			}

			/**
	  * Отправка данных формы
	  * @param {Event} event
	  * @private
	  */

		}, {
			key: '_onSubmit',
			value: function _onSubmit(event) {
				event.preventDefault();

				this.trigger('add', {
					href: this.getField('href').value,
					anchor: this.getField('anchor').value
				});

				event.target.reset();
			}
		}]);

		return Form;
	}();

	//export


	exports.default = Form;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./form.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./form.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".form {\n\tpadding: 0 20px;\n}\n\n.form__input {\n\tmargin-right: 5px;\n\twidth: 150px;\n}\n\n.form__btn {\n\tbackground-color: #be1622;\n\tcolor: rgba(255,255,255,1.0);\n}", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BASE_URL = 'https://javascriptru.firebaseio.com';

	/**
	 * Модель данных меню
	 * @class Model
	 */

	var Model = function () {

		/**
	  * Конструктор модели
	  * @param  {Objcet} options
	  * @param  {string} options.url
	  */

		function Model(_ref) {
			var resource = _ref.resource;
			var id = _ref.id;
			var _ref$data = _ref.data;
			var data = _ref$data === undefined ? {} : _ref$data;

			_classCallCheck(this, Model);

			this.data = data;
			this.resource = resource;
			this.id = id;
		}

		/**
	  * Геттер для данных модели
	  * @return {Object}
	  */


		_createClass(Model, [{
			key: 'getData',
			value: function getData() {
				return this.data;
			}

			/**
	   * Сеттер для данных модели
	   * @param {Object} data
	   */

		}, {
			key: 'setData',
			value: function setData(data) {
				this.data = data;
			}

			/**
	   * Загрузка данных с сервера
	   * @param  {Function} resolve
	   * @return {XMLHttpRequest}
	   */

		}, {
			key: 'fetch',
			value: function fetch(resolve) {
				var _this = this;

				var req = this._makeRequest('GET', function (req) {
					var data = _this.parse(req.responseText);
					_this.data = data;

					resolve(_this.getData());
				});

				req.send();

				return req;
			}

			/**
	   * Сохранение данных на сервере
	   * @param  {Function} resolve
	   * @return {XMLHttpRequest}
	   */

		}, {
			key: 'save',
			value: function save(resolve) {
				var _this2 = this;

				var req = this._makeRequest('PUT', function (req) {
					var data = _this2.parse(req.responseText);
					_this2.data = data;

					resolve(_this2);
				});

				var reqString = JSON.stringify(this.getData());
				req.send(reqString);

				return req;
			}

			/**
	   * Создание объекта запроса
	   * @param {string} method - HTTP method
	   * @param {Function} success - callback
	   * @return {XMLHttpRequest}
	   */

		}, {
			key: '_makeRequest',
			value: function _makeRequest(method, success) {
				var xhr = new XMLHttpRequest();
				var url = this._getUrl(method);

				xhr.open(method, url, false);

				xhr.onreadystatechange = function () {
					if (xhr.readyState !== 4) return;

					if (xhr.status !== 200) {
						//TODO: обаботать ошибки запроса
					} else {
						success(xhr);
					}
				};

				return xhr;
			}

			/**
	   * Выбор URL в зависимости от метода
	   * @param  {string} [method]
	   * @return {string}
	   */

		}, {
			key: '_getUrl',
			value: function _getUrl() {
				var url = BASE_URL + '/' + this.resource;

				if (this.id) {
					url += '/' + this.id;
				}

				return url + '.json';
			}

			/**
	   * Преобразлвание тескта отвева в данные
	   * @param {string} responseText
	   * @return {Object}
	   */

		}, {
			key: 'parse',
			value: function parse(responseText) {
				return JSON.parse(responseText);
			}
		}]);

		return Model;
	}();

	//export


	exports.default = Model;

/***/ }
/******/ ]);