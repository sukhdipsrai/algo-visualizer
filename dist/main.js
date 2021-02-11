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
  playButton.addEventListener("click", startQS);
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

  var animating = true; // turn off with play button, quiksort will control animations

  var animation = function animation() {
    var sum = 0;

    if (animating) {
      canvas.clearCanvas();

      for (var i = 0; i < myTri.length; i++) {
        myTri[i].draw(sum);
        sum += myTri[i].xDist * canvas.canvas.width;
      }

      window.requestAnimationFrame(animation);
    }
  };

  window.requestAnimationFrame(animation); // Logic preformed on G value, keeping R abd B constant

  function blueRandomizer(inputshade, maxVal) {
    var shadeVal = Math.ceil(inputshade / maxVal * 255);
    if (shadeVal < 10) shadeVal = "0" + shadeVal;
    var rValue = "3C";
    var gValue = shadeVal.toString(16);
    return "#".concat(rValue + gValue, "ff");
  }

  function startQS() {
    quickSort(myTri, 0, myTri.length - 1);
    displayLength();
  }

  function quickSort(arr, start, end) {
    var xStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (start < end) {
      debugger;
      var pi = quickSortPartition(arr, start, end);
      quickSort(arr, start, pi - 1);
      quickSort(arr, pi + 1, end);
    }
  }

  function displayLength() {
    for (var x = 0; x < myTri.length; x++) {
      console.log(myTri[x].xDist);
    }
  }

  function quickSortPartition(arr, start, end) {
    var pivot = arr[end].xDist;
    var i = start - 1; // tracking pivot location

    debugger;

    for (var j = start; j < end; j++) {
      if (arr[j].xDist < pivot) {
        i++;
        var _temp = arr[i];
        arr[i] = arr[j];
        arr[j] = _temp; // arr[j] = arr[i];
        // arr[i] = temp;
      } // i should be the location where pivot value must go
      // is final swap neccesary, pass by ref?
      // const temp = arr[i];
      // arr[i] = arr[end];
      // arr[end] = temp;


      var temp = arr[i + 1];
      arr[i + 1] = arr[end];
      arr[end] = temp;
      return i + 1;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJteVRyaSIsInN1bSIsInBsYXlCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJpbm5lckhUTUwiLCJzdGFydFFTIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImZvcndhcmRCdXR0b24iLCJ3aWR0aCIsIm5leHRXaWR0aCIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJhbmltYXRpbmciLCJhbmltYXRpb24iLCJjbGVhckNhbnZhcyIsImkiLCJsZW5ndGgiLCJkcmF3IiwieERpc3QiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsInF1aWNrU29ydCIsImRpc3BsYXlMZW5ndGgiLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsInBpIiwicXVpY2tTb3J0UGFydGl0aW9uIiwieCIsImNvbnNvbGUiLCJsb2ciLCJwaXZvdCIsImoiLCJ0ZW1wIiwic3RhcnRDYW52YXMiLCJjbGVhckRlbW8iLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJzcXVhcmVzIiwiU3F1YXJlIiwiY3R4IiwiY29vcmRzIiwiZmlsbENvbG9yIiwiZm9yRWFjaCIsInNxIiwidXBkYXRlU3F1YXJlIiwiZHJhd1NxdWFyZSIsImlubmVyV2lkdGgiLCJyZXZlcnNlQW5pbWF0aW9uIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbG9yIiwiZmxvb3IiLCJtYXAiLCJjbyIsInBvcCIsInNlbGVjdG9yIiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsInByb3BzIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRDb250ZXh0IiwiYXBwZW5kIiwiY2xlYXJSZWN0IiwiY29sb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsImFuaW1hdGlvbkRpciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtR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QUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLeEYsTUFBTCxDQUFZYSxLQUFyQyxFQUE0QyxLQUFLYixNQUFMLENBQVltRixNQUF4RDtBQUVILE9BSEQsQ0FHRSxPQUFPZ0MsQ0FBUCxFQUFVO0FBQ1JyRSxlQUFPLENBQUNDLEdBQVIsQ0FBWW9FLENBQVo7QUFDSDtBQUVKOzs7Ozs7QUFHVWhHLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDekRBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgICBjdXJyZW50RXZlbnRMaXN0ZW5lcnM6IFtdLFxufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gbXlGdW5jKCkge1xuICAgIC8vIGNsZWFyRGVtbygpXG4gICAgLy8gY2FudmFzLmNsZWFyQ2F2bmFzKCk7XG4gICAgbGV0IG15VHJpID0gW107XG4gICAgbGV0IHN1bSA9IDA7XG5cbiAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBsYXlCdXR0b24uaWQgPSAncGxheUJ1dHRvbic7XG4gICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBMQVlcIjtcbiAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFFTKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKS5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbiAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGZvcndhcmRCdXR0b24uaWQgPSAnZm9yd2FyZEJ1dHRvbic7XG4gICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkZPUldBUkRcIjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJykuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbik7XG5cbiAgICB3aGlsZSAoc3VtIDwgY2FudmFzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICBsZXQgbmV4dFdpZHRoID0gMDtcbiAgICAgICAgaWYgKGNhbnZhcy5jYW52YXMud2lkdGggLSBzdW0gPCAxMDApXG4gICAgICAgICAgICBuZXh0V2lkdGggPSBjYW52YXMuY2FudmFzLndpZHRoIC0gc3VtO1xuICAgICAgICBlbHNlIG5leHRXaWR0aCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSg0MDApICogMTAwKTtcbiAgICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICAgICAgY2FudmFzLFxuICAgICAgICAgICAgYmx1ZVJhbmRvbWl6ZXIobmV4dFdpZHRoLCAxMDApLFxuICAgICAgICAgICAgbmV4dFdpZHRoIC8gY2FudmFzLmNhbnZhcy53aWR0aFxuICAgICAgICApO1xuICAgICAgICAvLyBuZXdUcmkuZHJhdyhzdW0pO1xuICAgICAgICBzdW0gKz0gbmV4dFdpZHRoO1xuICAgICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RyaSk7XG4gICAgfVxuXG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7IC8vIHR1cm4gb2ZmIHdpdGggcGxheSBidXR0b24sIHF1aWtzb3J0IHdpbGwgY29udHJvbCBhbmltYXRpb25zXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgICAgICAgICAgIHN1bSArPSAobXlUcmlbaV0ueERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG5cblxuXG4gICAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICAgIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgICAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgICAgICBpZiAoc2hhZGVWYWwgPCAxMCkgc2hhZGVWYWwgPSBcIjBcIiArIHNoYWRlVmFsO1xuICAgICAgICBsZXQgclZhbHVlID0gXCIzQ1wiO1xuICAgICAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuXG4gICAgICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgICAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpXG4gICAgICAgIGRpc3BsYXlMZW5ndGgoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBsZXQgcGkgPSBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKVxuXG4gICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKTtcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlMZW5ndGgoKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbXlUcmkubGVuZ3RoOyB4KyspXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhteVRyaVt4XS54RGlzdClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnhEaXN0O1xuICAgICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIGZvciAobGV0IGogPSBzdGFydDsgaiA8IGVuZDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2pdLnhEaXN0IDwgcGl2b3QpIHtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAvLyBhcnJbal0gPSBhcnJbaV07XG4gICAgICAgICAgICAgICAgLy8gYXJyW2ldID0gdGVtcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGkgc2hvdWxkIGJlIHRoZSBsb2NhdGlvbiB3aGVyZSBwaXZvdCB2YWx1ZSBtdXN0IGdvXG4gICAgICAgICAgICAvLyBpcyBmaW5hbCBzd2FwIG5lY2Nlc2FyeSwgcGFzcyBieSByZWY/XG4gICAgICAgICAgICAvLyBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgLy8gYXJyW2ldID0gYXJyW2VuZF07XG4gICAgICAgICAgICAvLyBhcnJbZW5kXSA9IHRlbXA7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2kgKyAxXTtcbiAgICAgICAgICAgIGFycltpICsgMV0gPSBhcnJbZW5kXTtcbiAgICAgICAgICAgIGFycltlbmRdID0gdGVtcDtcbiAgICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gU3F1YXJlIGNvbnN0cnVjdG9yIGdldHMgYSBjYW52YXMgcHJvcGVydHksIGNvb3JkcyAsIGNvbG9yXG5cbmZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuICAgIGNsZWFyRGVtbygpO1xuICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4gICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbiAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICAgICAgXCJ3aW5kb3dcIixcbiAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgIGhhbmRsZUtleURvd24sXG4gICAgXSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgICAgIFwid2luZG93XCIsXG4gICAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bixcbiAgICBdKTtcblxuICAgIC8vIDMyIGlzIEFTQ0lJIGZvciBzcGFjZSwgcmFuZG9taXplIGNvbG9yXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9uIGNsaWNrIGFuaW1hdGUgbmV3IHNxdWFyZVxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzcXVhcmVzLnB1c2goXG4gICAgICAgICAgICBuZXcgU3F1YXJlKFxuICAgICAgICAgICAgICAgIGNhbnZhcy5jdHgsXG4gICAgICAgICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbiAgICAgICAgICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2hpbGUgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBbXG4gICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gXCJ3aW5kb3dcIikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiQ0FOVkFTREVNT1wiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiRE9NREVNT1wiKSB7XG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgICk7XG4gICAgfVxufSIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG5cbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRofWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAgICAgICAvLyB9XG5cbiAgICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgLy8gfVxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlOyIsImNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cblxuXG5cbiAgICByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCJjbGFzcyBUcmlhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBkcmF3KHhTdGFydCkge1xuICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgbGV0IGN3ID0gY2FudmFzRWxlbWVudC53aWR0aCAtIDUwO1xuICAgICAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodCAtIDQwMDtcblxuXG4gICAgICAgIGxldCBjeSA9IGNoIC8gMjtcbiAgICAgICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgICAgIHZhciB0cmlhbmdsZSA9IHtcbiAgICAgICAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgICAgICB4MTogY3gsXG4gICAgICAgICAgICB5MTogY3ksXG4gICAgICAgICAgICAvL3RoZSBzZWNvbmQgdmVydGV4IGlzIG9uIHRoZSBjaXJjdW1zY3JpYmVkIGNpcmNsZSBhdCAwIHJhZGlhbnMgd2hlcmUgUiBpcyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUgKCBhID0gMzAsIGI9MzAgKVxuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgICAgIHkyOiBjaCxcbiAgICAgICAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgKHRoaXMueERpc3QgKiBjYW52YXNFbGVtZW50LndpZHRoKSxcbiAgICAgICAgICAgIHkzOiBjaCxcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngyLCB0cmlhbmdsZS55Mik7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9