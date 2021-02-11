/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_square__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/square */ "./src/scripts/square.js");
/* harmony import */ var _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/triangle */ "./src/scripts/triangle.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var currentStateObj = {
  currentExample: null,
  currentEventListeners: []
};
document.querySelector("#quick-sort").addEventListener("click", myFunc);
var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
canvas.createCanvas();

function myFunc() {
  // clearDemo()
  // canvas.clearCavnas();
  var myTri = [];
  var sum = 0;
  var playButton = document.createElement('button');
  playButton.id = 'playButton';
  playButton.innerHTML = "PLAY";
  document.getElementById('button-controls').appendChild(playButton);
  var forwardButton = document.createElement('button');
  forwardButton.id = 'forwardButton';
  forwardButton.innerHTML = "FORWARD";
  document.getElementById('button-controls').appendChild(forwardButton);

  while (sum < canvas.canvas.width) {
    var nextWidth = 0;
    if (canvas.canvas.width - sum < 100) nextWidth = canvas.canvas.width - sum;else nextWidth = Math.ceil(Math.random(400) * 100);
    var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(nextWidth, 100), nextWidth / canvas.canvas.width); // newTri.draw(sum);

    sum += nextWidth;
    myTri.push(newTri); // console.log(newTri);
  }

  var animation = function animation(sum) {
    canvas.clearCanvas();

    for (var i = 0; i < myTri.length; i++) {
      myTri[i].draw(sum);
      sum += myTri[i].xDist * canvas.canvas.width;
    }

    window.requestAnimationFrame(animation(50));
  };

  window.requestAnimationFrame(animation(0)); // Logic preformed on G value, keeping R abd B constant

  function blueRandomizer(inputshade, maxVal) {
    var shadeVal = Math.ceil(inputshade / maxVal * 255);
    if (shadeVal < 10) shadeVal = "0" + shadeVal;
    var rValue = "3C";
    var gValue = shadeVal.toString(16);
    return "#".concat(rValue + gValue, "ff");
  }

  function quickSort(arr, start, end) {
    var xStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  }
} // Square constructor gets a canvas property, coords , color


function startCanvas() {
  clearDemo();
  unregisterEventListeners();
  currentStateObj.currentExample = "CANVASDEMO";
  var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
  canvas.createCanvas();
  var squares = [new _scripts_square__WEBPACK_IMPORTED_MODULE_2__["default"](canvas.ctx, canvas.coords, canvas.fillColor)];
  var animating = true;

  var animation = function animation() {
    canvas.clearCanvas();
    if (animating) squares.forEach(function (sq) {
      return sq.updateSquare(canvas.fillColor);
    });
    squares.forEach(function (sq) {
      return sq.drawSquare();
    });
    window.requestAnimationFrame(animation);
    squares.forEach(function (sq) {
      if (sq.coords[0] + sq.coords[2] > window.innerWidth) sq.reverseAnimation();
      if (sq.coords[0] < 0) sq.reverseAnimation();
    });
  };

  window.requestAnimationFrame(animation);
  window.addEventListener("keydown", handleKeyDown);
  currentStateObj.currentEventListeners.push(["window", "keydown", handleKeyDown]);
  window.addEventListener("mousedown", handleMouseDown);
  currentStateObj.currentEventListeners.push(["window", "mousedown", handleMouseDown]); // 32 is ASCII for space, randomize color

  function handleKeyDown(event) {
    if (event.which === 32) {
      event.preventDefault();
      squares.forEach(function (sq) {
        return sq.reverseAnimation();
      });
      canvas.setColor("#".concat(Math.floor(Math.random() * 16777215).toString(16)));
    }
  } // on click animate new square


  function handleMouseDown(event) {
    event.preventDefault();
    squares.push(new _scripts_square__WEBPACK_IMPORTED_MODULE_2__["default"](canvas.ctx, canvas.coords.map(function (co) {
      return co + 25;
    }), canvas.fillColor)); // animating = !animating;
  }
}

function unregisterEventListeners() {
  while (currentStateObj.currentEventListeners.length) {
    var _currentStateObj$curr = currentStateObj.currentEventListeners.pop(),
        _currentStateObj$curr2 = _slicedToArray(_currentStateObj$curr, 3),
        selector = _currentStateObj$curr2[0],
        event = _currentStateObj$curr2[1],
        handler = _currentStateObj$curr2[2];

    if (selector === "window") {
      window.removeEventListener(event, handler);
      console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {
  if (currentStateObj.currentExample === "CANVASDEMO") document.body.removeChild(document.querySelector("canvas"));

  if (currentStateObj.currentExample === "DOMDEMO") {
    _toConsumableArray(document.querySelectorAll(".card")).forEach(function (elem) {
      return document.body.removeChild(elem);
    });
  }
}

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvasExample = /*#__PURE__*/function () {
  function canvasExample(props) {
    _classCallCheck(this, canvasExample);

    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.setAttribute("height", "".concat(window.innerHeight));
    this.canvas.setAttribute("id", "canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas); // this.canvas.setAttribute("height", `${window.innerHeight}`)
      // this.canvas.setAttribute("width", `${window.innerWidth}`)
    } // drawSquare() {
    //   this.ctx.fillStyle = this.fillColor;
    //   this.ctx.fillRect(...this.coords);
    // }
    // updateSquare() {
    //   this.coords = this.coords.map((coord) => (coord += 1 * this.animationDir));
    // }
    // clearSquare() {
    //   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // }
    // reverseAnimation() {
    //   this.animationDir *= -1;
    // }

  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }]);

  return canvasExample;
}();

/* harmony default export */ __webpack_exports__["default"] = (canvasExample);

/***/ }),

/***/ "./src/scripts/square.js":
/*!*******************************!*\
  !*** ./src/scripts/square.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square = /*#__PURE__*/function () {
  function Square(ctx, coords) {
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "green";

    _classCallCheck(this, Square);

    this.ctx = ctx;
    this.coords = coords;
    this.color = color;
    this.animationDir = 1;
  }

  _createClass(Square, [{
    key: "drawSquare",
    value: function drawSquare() {
      var _this$ctx;

      this.ctx.fillStyle = this.color;

      (_this$ctx = this.ctx).fillRect.apply(_this$ctx, _toConsumableArray(this.coords));
    }
  }, {
    key: "reverseAnimation",
    value: function reverseAnimation() {
      this.animationDir *= -1;
    }
  }]);

  return Square;
}();

/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./src/scripts/triangle.js":
/*!*********************************!*\
  !*** ./src/scripts/triangle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Triangle = /*#__PURE__*/function () {
  function Triangle(canvas, color, xDist) {
    _classCallCheck(this, Triangle);

    this.canvas = canvas;
    this.ctx = this.canvas.ctx;
    this.xDist = xDist;
    this.color = color;
  }

  _createClass(Triangle, [{
    key: "draw",
    value: function draw(xStart) {
      this.xStart = xStart;
      var canvasElement = document.getElementById("canvas");
      var ctx = this.canvas.ctx;
      var cw = canvasElement.width - 50;
      var ch = canvasElement.height - 400;
      var cy = ch / 2;
      var cx = cw / 2;
      var triangle = {
        //the first vertex is in the center of the canvas
        //you may decide to change this.
        x1: cx,
        y1: cy,
        //the second vertex is on the circumscribed circle at 0 radians where R is the radius of the circle ( a = 30, b=30 )
        //you may decide to change this.
        x2: this.xStart,
        y2: ch,
        //calculate the 3-rd vertex
        x3: this.xStart + this.xDist * canvasElement.width,
        y3: ch
      };
      ctx.beginPath();
      ctx.moveTo(triangle.x1, triangle.y1);
      ctx.lineTo(triangle.x2, triangle.y2);
      ctx.lineTo(triangle.x3, triangle.y3);
      ctx.lineTo(triangle.x1, triangle.y1);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.fill();
      ctx.stroke();
    }
  }, {
    key: "reset",
    value: function reset() {
      try {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      } catch (e) {
        console.log(e);
      }
    }
  }]);

  return Triangle;
}();

/* harmony default export */ __webpack_exports__["default"] = (Triangle);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJteVRyaSIsInN1bSIsInBsYXlCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJpbm5lckhUTUwiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiZm9yd2FyZEJ1dHRvbiIsIndpZHRoIiwibmV4dFdpZHRoIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwicHVzaCIsImFuaW1hdGlvbiIsImNsZWFyQ2FudmFzIiwiaSIsImxlbmd0aCIsImRyYXciLCJ4RGlzdCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsInJWYWx1ZSIsImdWYWx1ZSIsInRvU3RyaW5nIiwicXVpY2tTb3J0IiwiYXJyIiwic3RhcnQiLCJlbmQiLCJ4U3RhcnQiLCJzdGFydENhbnZhcyIsImNsZWFyRGVtbyIsInVucmVnaXN0ZXJFdmVudExpc3RlbmVycyIsInNxdWFyZXMiLCJTcXVhcmUiLCJjdHgiLCJjb29yZHMiLCJmaWxsQ29sb3IiLCJhbmltYXRpbmciLCJmb3JFYWNoIiwic3EiLCJ1cGRhdGVTcXVhcmUiLCJkcmF3U3F1YXJlIiwiaW5uZXJXaWR0aCIsInJldmVyc2VBbmltYXRpb24iLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlTW91c2VEb3duIiwiZXZlbnQiLCJ3aGljaCIsInByZXZlbnREZWZhdWx0Iiwic2V0Q29sb3IiLCJmbG9vciIsIm1hcCIsImNvIiwicG9wIiwic2VsZWN0b3IiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsInByb3BzIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRDb250ZXh0IiwiYXBwZW5kIiwiY2xlYXJSZWN0IiwiY29sb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsImFuaW1hdGlvbkRpciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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SSxFQUFqQztBQUNBcEQsU0FBRyxDQUFDeUQsTUFBSixDQUFXVCxRQUFRLENBQUNLLEVBQXBCLEVBQXdCTCxRQUFRLENBQUNNLEVBQWpDO0FBQ0F0RCxTQUFHLENBQUN5RCxNQUFKLENBQVdULFFBQVEsQ0FBQ0MsRUFBcEIsRUFBd0JELFFBQVEsQ0FBQ0UsRUFBakM7QUFDQWxELFNBQUcsQ0FBQzBELFNBQUo7QUFDQTFELFNBQUcsQ0FBQ3lDLFNBQUosR0FBZ0IsS0FBS0wsS0FBckI7QUFDQXBDLFNBQUcsQ0FBQzJELFdBQUosR0FBa0IsS0FBS3ZCLEtBQXZCO0FBQ0FwQyxTQUFHLENBQUM0RCxJQUFKO0FBRUE1RCxTQUFHLENBQUM2RCxNQUFKO0FBQ0g7OztXQUNELGlCQUFRO0FBQ0osVUFBSTtBQUNBLGFBQUs3RCxHQUFMLENBQVNtQyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtoRixNQUFMLENBQVlZLEtBQXJDLEVBQTRDLEtBQUtaLE1BQUwsQ0FBWTJFLE1BQXhEO0FBRUgsT0FIRCxDQUdFLE9BQU9nQyxDQUFQLEVBQVU7QUFDUnZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZc0MsQ0FBWjtBQUNIO0FBRUo7Ozs7OztBQUdVekYsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUN6REEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICAgIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuICAgIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG5jb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuXG5mdW5jdGlvbiBteUZ1bmMoKSB7XG4gICAgLy8gY2xlYXJEZW1vKClcbiAgICAvLyBjYW52YXMuY2xlYXJDYXZuYXMoKTtcbiAgICBsZXQgbXlUcmkgPSBbXTtcbiAgICBsZXQgc3VtID0gMDtcblxuICAgIGxldCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcGxheUJ1dHRvbi5pZCA9ICdwbGF5QnV0dG9uJztcbiAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUExBWVwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKS5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbiAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGZvcndhcmRCdXR0b24uaWQgPSAnZm9yd2FyZEJ1dHRvbic7XG4gICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkZPUldBUkRcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJykuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbik7XG5cbiAgICB3aGlsZSAoc3VtIDwgY2FudmFzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICBsZXQgbmV4dFdpZHRoID0gMDtcbiAgICAgICAgaWYgKGNhbnZhcy5jYW52YXMud2lkdGggLSBzdW0gPCAxMDApXG4gICAgICAgICAgICBuZXh0V2lkdGggPSBjYW52YXMuY2FudmFzLndpZHRoIC0gc3VtO1xuICAgICAgICBlbHNlIG5leHRXaWR0aCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSg0MDApICogMTAwKTtcbiAgICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICAgICAgY2FudmFzLFxuICAgICAgICAgICAgYmx1ZVJhbmRvbWl6ZXIobmV4dFdpZHRoLCAxMDApLFxuICAgICAgICAgICAgbmV4dFdpZHRoIC8gY2FudmFzLmNhbnZhcy53aWR0aFxuICAgICAgICApO1xuICAgICAgICAvLyBuZXdUcmkuZHJhdyhzdW0pO1xuICAgICAgICBzdW0gKz0gbmV4dFdpZHRoO1xuICAgICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RyaSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKHN1bSkgPT4ge1xuICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgICAgICAgc3VtICs9IChteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGgpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24oNTApKTtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbigwKSk7XG5cblxuICAgIC8vIExvZ2ljIHByZWZvcm1lZCBvbiBHIHZhbHVlLCBrZWVwaW5nIFIgYWJkIEIgY29uc3RhbnRcbiAgICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICAgICAgbGV0IHNoYWRlVmFsID0gTWF0aC5jZWlsKChpbnB1dHNoYWRlIC8gbWF4VmFsKSAqIDI1NSk7XG5cbiAgICAgICAgaWYgKHNoYWRlVmFsIDwgMTApIHNoYWRlVmFsID0gXCIwXCIgKyBzaGFkZVZhbDtcbiAgICAgICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjtcbiAgICAgICAgbGV0IGdWYWx1ZSA9IHNoYWRlVmFsLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICByZXR1cm4gYCMke3JWYWx1ZSArIGdWYWx1ZX1mZmA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuXG4gICAgfVxufVxuXG4vLyBTcXVhcmUgY29uc3RydWN0b3IgZ2V0cyBhIGNhbnZhcyBwcm9wZXJ0eSwgY29vcmRzICwgY29sb3JcblxuZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4gICAgY2xlYXJEZW1vKCk7XG4gICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbiAgICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuICAgIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EuZHJhd1NxdWFyZSgpKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSA8IDApIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgICAgICBcIndpbmRvd1wiLFxuICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgaGFuZGxlS2V5RG93bixcbiAgICBdKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICAgICAgXCJ3aW5kb3dcIixcbiAgICAgICAgXCJtb3VzZWRvd25cIixcbiAgICAgICAgaGFuZGxlTW91c2VEb3duLFxuICAgIF0pO1xuXG4gICAgLy8gMzIgaXMgQVNDSUkgZm9yIHNwYWNlLCByYW5kb21pemUgY29sb3JcbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuICAgICAgICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gb24gY2xpY2sgYW5pbWF0ZSBuZXcgc3F1YXJlXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNxdWFyZXMucHVzaChcbiAgICAgICAgICAgIG5ldyBTcXVhcmUoXG4gICAgICAgICAgICAgICAgY2FudmFzLmN0eCxcbiAgICAgICAgICAgICAgICBjYW52YXMuY29vcmRzLm1hcCgoY28pID0+IGNvICsgMjUpLFxuICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsQ29sb3JcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IFtcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRlbW8oKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbiAgICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKV0uZm9yRWFjaCgoZWxlbSkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgKTtcbiAgICB9XG59IiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgY29sb3IgPSBcImdyZWVuXCIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxuXG5cblxuICAgIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIHRoaXMueERpc3QgPSB4RGlzdDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIGRyYXcoeFN0YXJ0KSB7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoIC0gNTA7XG4gICAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gNDAwO1xuXG5cbiAgICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgxOiBjeCxcbiAgICAgICAgICAgIHkxOiBjeSxcbiAgICAgICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICAgICAgeTI6IGNoLFxuICAgICAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgICAgICB4MzogdGhpcy54U3RhcnQgKyAodGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgpLFxuICAgICAgICAgICAgeTM6IGNoLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWFuZ2xlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=