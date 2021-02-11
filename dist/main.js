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

  if (document.getElementById('playButton') === null) {
    var playButton = document.createElement('button');
    playButton.id = 'playButton';
    playButton.innerHTML = "PLAY";
    playButton.addEventListener("click", startQS);
    document.getElementById('button-controls').appendChild(playButton);
  } else {
    document.getElementById('playButton').addEventListener('click', startQS);
  }

  if (document.getElementById('forwardButton') === null) {
    var forwardButton = document.createElement('button');
    forwardButton.id = 'forwardButton';
    forwardButton.innerHTML = "FORWARD";
    document.getElementById('button-controls').appendChild(forwardButton);
    document.getElementById('forwardButton').addEventListener('click', testSleep);
  } else {
    document.getElementById('forwardButton').addEventListener('click', testSleep);
  }

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
      window.requestAnimationFrame(animation);
    }

    canvas.clearCanvas();

    for (var i = 0; i < myTri.length; i++) {
      myTri[i].draw(sum);
      sum += myTri[i].xDist * canvas.canvas.width;
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

  var test = [5, 12, 1, 12, 1253, 1212, 652, -1, -5];

  function startQS() {
    animating = false;
    quickSort(myTri, 0, myTri.length - 1);
    displayLength(myTri);
    animating = true;
  }

  function displayLength(arr) {
    var str = "";

    for (var x = 0; x < arr.length; x++) {
      str += arr[x].xDist + " ";
    }

    return str;
  }

  function sleep(milliseconds) {
    return new Promise(function (resolve, reject) {
      setTimeout(resolve, milliseconds);
    });
  }

  function testSleep() {
    sleep(5000).then(function () {
      return console.log("test sleep");
    });
  }

  function quickSort(arr, start, end) {
    var xStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    if (start < end) {
      var pi = quickSortPartition(arr, start, end);
      debugger;
      quickSort(arr, start, pi - 1);
      quickSort(arr, pi + 1, end);
    }
  }

  function quickSortPartition(arr, start, end) {
    var pivot = arr[end].xDist;
    var i = start - 1; // tracking pivot location

    var j = start;

    while (j < end) {
      if (arr[j].xDist < pivot) {
        i++;
        var _temp = arr[i];
        arr[i] = arr[j];
        arr[j] = _temp;
      }

      j++;
    }

    var temp = arr[i + 1];
    arr[i + 1] = arr[end];
    arr[end] = temp;
    return i + 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJteVRyaSIsInN1bSIsImdldEVsZW1lbnRCeUlkIiwicGxheUJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsInN0YXJ0UVMiLCJhcHBlbmRDaGlsZCIsImZvcndhcmRCdXR0b24iLCJ0ZXN0U2xlZXAiLCJ3aWR0aCIsIm5leHRXaWR0aCIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJhbmltYXRpbmciLCJhbmltYXRpb24iLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhckNhbnZhcyIsImkiLCJsZW5ndGgiLCJkcmF3IiwieERpc3QiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsInRlc3QiLCJxdWlja1NvcnQiLCJkaXNwbGF5TGVuZ3RoIiwiYXJyIiwic3RyIiwieCIsInNsZWVwIiwibWlsbGlzZWNvbmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJzdGFydCIsImVuZCIsInhTdGFydCIsInBpIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicGl2b3QiLCJqIiwidGVtcCIsInN0YXJ0Q2FudmFzIiwiY2xlYXJEZW1vIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwic3F1YXJlcyIsIlNxdWFyZSIsImN0eCIsImNvb3JkcyIsImZpbGxDb2xvciIsImZvckVhY2giLCJzcSIsInVwZGF0ZVNxdWFyZSIsImRyYXdTcXVhcmUiLCJpbm5lcldpZHRoIiwicmV2ZXJzZUFuaW1hdGlvbiIsImhhbmRsZUtleURvd24iLCJoYW5kbGVNb3VzZURvd24iLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzZXRDb2xvciIsImZsb29yIiwibWFwIiwiY28iLCJwb3AiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiZ2V0Q29udGV4dCIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3BCQyxnQkFBYyxFQUFFLElBREk7QUFFcEJDLHVCQUFxQixFQUFFO0FBRkgsQ0FBeEI7QUFLQUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0VDLE1BQWhFO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUlDLHVEQUFKLEVBQWY7QUFDQUQsTUFBTSxDQUFDRSxZQUFQOztBQUVBLFNBQVNILE1BQVQsR0FBa0I7QUFDZDtBQUNBO0FBQ0EsTUFBSUksS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxHQUFHLEdBQUcsQ0FBVjs7QUFFQSxNQUFJUixRQUFRLENBQUNTLGNBQVQsQ0FBd0IsWUFBeEIsTUFBMEMsSUFBOUMsRUFBb0Q7QUFDaEQsUUFBSUMsVUFBVSxHQUFHVixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQUQsY0FBVSxDQUFDRSxFQUFYLEdBQWdCLFlBQWhCO0FBQ0FGLGNBQVUsQ0FBQ0csU0FBWCxHQUF1QixNQUF2QjtBQUNBSCxjQUFVLENBQUNSLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDWSxPQUFyQztBQUNBZCxZQUFRLENBQUNTLGNBQVQsQ0FBd0IsaUJBQXhCLEVBQTJDTSxXQUEzQyxDQUF1REwsVUFBdkQ7QUFDSCxHQU5ELE1BTU87QUFDSFYsWUFBUSxDQUFDUyxjQUFULENBQXdCLFlBQXhCLEVBQXNDUCxnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0VZLE9BQWhFO0FBQ0g7O0FBRUQsTUFBSWQsUUFBUSxDQUFDUyxjQUFULENBQXdCLGVBQXhCLE1BQTZDLElBQWpELEVBQXVEO0FBQ25ELFFBQUlPLGFBQWEsR0FBR2hCLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBSyxpQkFBYSxDQUFDSixFQUFkLEdBQW1CLGVBQW5CO0FBQ0FJLGlCQUFhLENBQUNILFNBQWQsR0FBMEIsU0FBMUI7QUFDQWIsWUFBUSxDQUFDUyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ00sV0FBM0MsQ0FBdURDLGFBQXZEO0FBQ0FoQixZQUFRLENBQUNTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUNQLGdCQUF6QyxDQUEwRCxPQUExRCxFQUFtRWUsU0FBbkU7QUFDSCxHQU5ELE1BTU87QUFDSGpCLFlBQVEsQ0FBQ1MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q1AsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FZSxTQUFuRTtBQUVIOztBQUVELFNBQU9ULEdBQUcsR0FBR0osTUFBTSxDQUFDQSxNQUFQLENBQWNjLEtBQTNCLEVBQWtDO0FBQzlCLFFBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFFBQUlmLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjYyxLQUFkLEdBQXNCVixHQUF0QixHQUE0QixHQUFoQyxFQUNJVyxTQUFTLEdBQUdmLE1BQU0sQ0FBQ0EsTUFBUCxDQUFjYyxLQUFkLEdBQXNCVixHQUFsQyxDQURKLEtBRUtXLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsTUFBTCxDQUFZLEdBQVosSUFBbUIsR0FBN0IsQ0FBWjtBQUNMLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyx5REFBSixDQUNYcEIsTUFEVyxFQUVYcUIsY0FBYyxDQUFDTixTQUFELEVBQVksR0FBWixDQUZILEVBR1hBLFNBQVMsR0FBR2YsTUFBTSxDQUFDQSxNQUFQLENBQWNjLEtBSGYsQ0FBZixDQUw4QixDQVU5Qjs7QUFDQVYsT0FBRyxJQUFJVyxTQUFQO0FBQ0FaLFNBQUssQ0FBQ21CLElBQU4sQ0FBV0gsTUFBWCxFQVo4QixDQWE5QjtBQUNIOztBQUVELE1BQUlJLFNBQVMsR0FBRyxJQUFoQixDQTNDYyxDQTJDUTs7QUFDdEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixRQUFJcEIsR0FBRyxHQUFHLENBQVY7O0FBQ0EsUUFBSW1CLFNBQUosRUFBZTtBQUVYRSxZQUFNLENBQUNDLHFCQUFQLENBQTZCRixTQUE3QjtBQUNIOztBQUVEeEIsVUFBTSxDQUFDMkIsV0FBUDs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd6QixLQUFLLENBQUMwQixNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ3pCLFdBQUssQ0FBQ3lCLENBQUQsQ0FBTCxDQUFTRSxJQUFULENBQWMxQixHQUFkO0FBQ0FBLFNBQUcsSUFBS0QsS0FBSyxDQUFDeUIsQ0FBRCxDQUFMLENBQVNHLEtBQVQsR0FBaUIvQixNQUFNLENBQUNBLE1BQVAsQ0FBY2MsS0FBdkM7QUFDSDtBQUNKLEdBWkQ7O0FBY0FXLFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJGLFNBQTdCLEVBMURjLENBK0RkOztBQUNBLFdBQVNILGNBQVQsQ0FBd0JXLFVBQXhCLEVBQW9DQyxNQUFwQyxFQUE0QztBQUN4QyxRQUFJQyxRQUFRLEdBQUdsQixJQUFJLENBQUNDLElBQUwsQ0FBV2UsVUFBVSxHQUFHQyxNQUFkLEdBQXdCLEdBQWxDLENBQWY7QUFFQSxRQUFJQyxRQUFRLEdBQUcsRUFBZixFQUFtQkEsUUFBUSxHQUFHLE1BQU1BLFFBQWpCO0FBQ25CLFFBQUlDLE1BQU0sR0FBRyxJQUFiO0FBQ0EsUUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLFFBQVQsQ0FBa0IsRUFBbEIsQ0FBYjtBQUVBLHNCQUFXRixNQUFNLEdBQUdDLE1BQXBCO0FBQ0g7O0FBQ0QsTUFBSUUsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxDQUFSLEVBQVcsRUFBWCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsR0FBM0IsRUFBZ0MsQ0FBQyxDQUFqQyxFQUFvQyxDQUFDLENBQXJDLENBQVg7O0FBRUEsV0FBUzVCLE9BQVQsR0FBbUI7QUFDZmEsYUFBUyxHQUFHLEtBQVo7QUFDQWdCLGFBQVMsQ0FBQ3BDLEtBQUQsRUFBUSxDQUFSLEVBQVdBLEtBQUssQ0FBQzBCLE1BQU4sR0FBZSxDQUExQixDQUFUO0FBQ0FXLGlCQUFhLENBQUNyQyxLQUFELENBQWI7QUFDQW9CLGFBQVMsR0FBRyxJQUFaO0FBQ0g7O0FBRUQsV0FBU2lCLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQ3hCLFFBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsR0FBRyxDQUFDWixNQUF4QixFQUFnQ2MsQ0FBQyxFQUFqQztBQUNJRCxTQUFHLElBQUlELEdBQUcsQ0FBQ0UsQ0FBRCxDQUFILENBQU9aLEtBQVAsR0FBZSxHQUF0QjtBQURKOztBQUVBLFdBQU9XLEdBQVA7QUFDSDs7QUFFRCxXQUFTRSxLQUFULENBQWVDLFlBQWYsRUFBNkI7QUFDekIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekNDLGdCQUFVLENBQUNGLE9BQUQsRUFBVUYsWUFBVixDQUFWO0FBQ0gsS0FGTSxDQUFQO0FBR0g7O0FBRUQsV0FBU2hDLFNBQVQsR0FBcUI7QUFDakIrQixTQUFLLENBQUMsSUFBRCxDQUFMLENBQVlNLElBQVosQ0FBaUI7QUFBQSxhQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLENBQU47QUFBQSxLQUFqQjtBQUVIOztBQUVELFdBQVNiLFNBQVQsQ0FBbUJFLEdBQW5CLEVBQXdCWSxLQUF4QixFQUErQkMsR0FBL0IsRUFBZ0Q7QUFBQSxRQUFaQyxNQUFZLHVFQUFILENBQUc7O0FBQzVDLFFBQUlGLEtBQUssR0FBR0MsR0FBWixFQUFpQjtBQUNiLFVBQUlFLEVBQUUsR0FBR0Msa0JBQWtCLENBQUNoQixHQUFELEVBQU1ZLEtBQU4sRUFBYUMsR0FBYixDQUEzQjtBQUNBO0FBQ0FmLGVBQVMsQ0FBQ0UsR0FBRCxFQUFNWSxLQUFOLEVBQWFHLEVBQUUsR0FBRyxDQUFsQixDQUFUO0FBQ0FqQixlQUFTLENBQUNFLEdBQUQsRUFBTWUsRUFBRSxHQUFHLENBQVgsRUFBY0YsR0FBZCxDQUFUO0FBQ0g7QUFDSjs7QUFJRCxXQUFTRyxrQkFBVCxDQUE0QmhCLEdBQTVCLEVBQWlDWSxLQUFqQyxFQUF3Q0MsR0FBeEMsRUFBNkM7QUFDekMsUUFBSUksS0FBSyxHQUFHakIsR0FBRyxDQUFDYSxHQUFELENBQUgsQ0FBU3ZCLEtBQXJCO0FBQ0EsUUFBSUgsQ0FBQyxHQUFHeUIsS0FBSyxHQUFHLENBQWhCLENBRnlDLENBRXRCOztBQUNuQixRQUFJTSxDQUFDLEdBQUdOLEtBQVI7O0FBQ0EsV0FBT00sQ0FBQyxHQUFHTCxHQUFYLEVBQWdCO0FBQ1osVUFBSWIsR0FBRyxDQUFDa0IsQ0FBRCxDQUFILENBQU81QixLQUFQLEdBQWUyQixLQUFuQixFQUEwQjtBQUN0QjlCLFNBQUM7QUFDRCxZQUFNZ0MsS0FBSSxHQUFHbkIsR0FBRyxDQUFDYixDQUFELENBQWhCO0FBQ0FhLFdBQUcsQ0FBQ2IsQ0FBRCxDQUFILEdBQVNhLEdBQUcsQ0FBQ2tCLENBQUQsQ0FBWjtBQUNBbEIsV0FBRyxDQUFDa0IsQ0FBRCxDQUFILEdBQVNDLEtBQVQ7QUFDSDs7QUFDREQsT0FBQztBQUNKOztBQUNELFFBQU1DLElBQUksR0FBR25CLEdBQUcsQ0FBQ2IsQ0FBQyxHQUFHLENBQUwsQ0FBaEI7QUFDQWEsT0FBRyxDQUFDYixDQUFDLEdBQUcsQ0FBTCxDQUFILEdBQWFhLEdBQUcsQ0FBQ2EsR0FBRCxDQUFoQjtBQUNBYixPQUFHLENBQUNhLEdBQUQsQ0FBSCxHQUFXTSxJQUFYO0FBQ0EsV0FBT2hDLENBQUMsR0FBRyxDQUFYO0FBQ0g7QUFDSixDLENBR0Q7OztBQUVBLFNBQVNpQyxXQUFULEdBQXVCO0FBQ25CQyxXQUFTO0FBQ1RDLDBCQUF3QjtBQUN4QnRFLGlCQUFlLENBQUNDLGNBQWhCLEdBQWlDLFlBQWpDO0FBQ0EsTUFBTU0sTUFBTSxHQUFHLElBQUlDLHVEQUFKLEVBQWY7QUFDQUQsUUFBTSxDQUFDRSxZQUFQO0FBQ0EsTUFBTThELE9BQU8sR0FBRyxDQUFDLElBQUlDLHVEQUFKLENBQVdqRSxNQUFNLENBQUNrRSxHQUFsQixFQUF1QmxFLE1BQU0sQ0FBQ21FLE1BQTlCLEVBQXNDbkUsTUFBTSxDQUFDb0UsU0FBN0MsQ0FBRCxDQUFoQjtBQUVBLE1BQUk3QyxTQUFTLEdBQUcsSUFBaEI7O0FBRUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQnhCLFVBQU0sQ0FBQzJCLFdBQVA7QUFDQSxRQUFJSixTQUFKLEVBQWV5QyxPQUFPLENBQUNLLE9BQVIsQ0FBZ0IsVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsQ0FBQ0MsWUFBSCxDQUFnQnZFLE1BQU0sQ0FBQ29FLFNBQXZCLENBQVI7QUFBQSxLQUFoQjtBQUNmSixXQUFPLENBQUNLLE9BQVIsQ0FBZ0IsVUFBQ0MsRUFBRDtBQUFBLGFBQVFBLEVBQUUsQ0FBQ0UsVUFBSCxFQUFSO0FBQUEsS0FBaEI7QUFDQS9DLFVBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJGLFNBQTdCO0FBQ0F3QyxXQUFPLENBQUNLLE9BQVIsQ0FBZ0IsVUFBQ0MsRUFBRCxFQUFRO0FBQ3BCLFVBQUlBLEVBQUUsQ0FBQ0gsTUFBSCxDQUFVLENBQVYsSUFBZUcsRUFBRSxDQUFDSCxNQUFILENBQVUsQ0FBVixDQUFmLEdBQThCMUMsTUFBTSxDQUFDZ0QsVUFBekMsRUFDSUgsRUFBRSxDQUFDSSxnQkFBSDtBQUNKLFVBQUlKLEVBQUUsQ0FBQ0gsTUFBSCxDQUFVLENBQVYsSUFBZSxDQUFuQixFQUFzQkcsRUFBRSxDQUFDSSxnQkFBSDtBQUN6QixLQUpEO0FBS0gsR0FWRDs7QUFZQWpELFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJGLFNBQTdCO0FBRUFDLFFBQU0sQ0FBQzNCLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DNkUsYUFBbkM7QUFDQWxGLGlCQUFlLENBQUNFLHFCQUFoQixDQUFzQzJCLElBQXRDLENBQTJDLENBQ3ZDLFFBRHVDLEVBRXZDLFNBRnVDLEVBR3ZDcUQsYUFIdUMsQ0FBM0M7QUFNQWxELFFBQU0sQ0FBQzNCLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDOEUsZUFBckM7QUFDQW5GLGlCQUFlLENBQUNFLHFCQUFoQixDQUFzQzJCLElBQXRDLENBQTJDLENBQ3ZDLFFBRHVDLEVBRXZDLFdBRnVDLEVBR3ZDc0QsZUFIdUMsQ0FBM0MsRUFoQ21CLENBc0NuQjs7QUFDQSxXQUFTRCxhQUFULENBQXVCRSxLQUF2QixFQUE4QjtBQUMxQixRQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsRUFBcEIsRUFBd0I7QUFDcEJELFdBQUssQ0FBQ0UsY0FBTjtBQUNBZixhQUFPLENBQUNLLE9BQVIsQ0FBZ0IsVUFBQ0MsRUFBRDtBQUFBLGVBQVFBLEVBQUUsQ0FBQ0ksZ0JBQUgsRUFBUjtBQUFBLE9BQWhCO0FBQ0ExRSxZQUFNLENBQUNnRixRQUFQLFlBQW9CaEUsSUFBSSxDQUFDaUUsS0FBTCxDQUFXakUsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLFFBQTNCLEVBQXFDbUIsUUFBckMsQ0FBOEMsRUFBOUMsQ0FBcEI7QUFDSDtBQUNKLEdBN0NrQixDQStDbkI7OztBQUNBLFdBQVN1QyxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUM1QkEsU0FBSyxDQUFDRSxjQUFOO0FBQ0FmLFdBQU8sQ0FBQzFDLElBQVIsQ0FDSSxJQUFJMkMsdURBQUosQ0FDSWpFLE1BQU0sQ0FBQ2tFLEdBRFgsRUFFSWxFLE1BQU0sQ0FBQ21FLE1BQVAsQ0FBY2UsR0FBZCxDQUFrQixVQUFDQyxFQUFEO0FBQUEsYUFBUUEsRUFBRSxHQUFHLEVBQWI7QUFBQSxLQUFsQixDQUZKLEVBR0luRixNQUFNLENBQUNvRSxTQUhYLENBREosRUFGNEIsQ0FTNUI7QUFDSDtBQUNKOztBQUVELFNBQVNMLHdCQUFULEdBQW9DO0FBQ2hDLFNBQU90RSxlQUFlLENBQUNFLHFCQUFoQixDQUFzQ2tDLE1BQTdDLEVBQXFEO0FBQUEsZ0NBSzdDcEMsZUFBZSxDQUFDRSxxQkFBaEIsQ0FBc0N5RixHQUF0QyxFQUw2QztBQUFBO0FBQUEsUUFFN0NDLFFBRjZDO0FBQUEsUUFHN0NSLEtBSDZDO0FBQUEsUUFJN0NTLE9BSjZDOztBQU1qRCxRQUFJRCxRQUFRLEtBQUssUUFBakIsRUFBMkI7QUFDdkI1RCxZQUFNLENBQUM4RCxtQkFBUCxDQUEyQlYsS0FBM0IsRUFBa0NTLE9BQWxDO0FBQ0FuQyxhQUFPLENBQUNDLEdBQVIsQ0FBWWtDLE9BQVo7QUFDSCxLQUhELE1BR087QUFDSDFGLGNBQVEsQ0FBQ0MsYUFBVCxDQUF1QndGLFFBQXZCLEVBQWlDRSxtQkFBakMsQ0FBcURWLEtBQXJELEVBQTREUyxPQUE1RDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFTeEIsU0FBVCxHQUFxQjtBQUNqQixNQUFJckUsZUFBZSxDQUFDQyxjQUFoQixLQUFtQyxZQUF2QyxFQUNJRSxRQUFRLENBQUM0RixJQUFULENBQWNDLFdBQWQsQ0FBMEI3RixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBMUI7O0FBQ0osTUFBSUosZUFBZSxDQUFDQyxjQUFoQixLQUFtQyxTQUF2QyxFQUFrRDtBQUM5Qyx1QkFBSUUsUUFBUSxDQUFDOEYsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBSixFQUF3Q3JCLE9BQXhDLENBQWdELFVBQUNzQixJQUFEO0FBQUEsYUFDNUMvRixRQUFRLENBQUM0RixJQUFULENBQWNDLFdBQWQsQ0FBMEJFLElBQTFCLENBRDRDO0FBQUEsS0FBaEQ7QUFHSDtBQUNKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMxT0sxRixhO0FBQ0YseUJBQVkyRixLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBSzVGLE1BQUwsR0FBY0osUUFBUSxDQUFDVyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLUCxNQUFMLENBQVljLEtBQVosR0FBb0JXLE1BQU0sQ0FBQ2dELFVBQTNCO0FBQ0EsU0FBS3pFLE1BQUwsQ0FBWTZGLE1BQVosR0FBcUJwRSxNQUFNLENBQUNxRSxXQUE1QjtBQUNBLFNBQUs5RixNQUFMLENBQVkrRixZQUFaLENBQXlCLFFBQXpCLFlBQXNDdEUsTUFBTSxDQUFDcUUsV0FBN0M7QUFFQSxTQUFLOUYsTUFBTCxDQUFZK0YsWUFBWixDQUF5QixJQUF6QixFQUErQixRQUEvQjtBQUNBLFNBQUs3QixHQUFMLEdBQVcsS0FBS2xFLE1BQUwsQ0FBWWdHLFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUVIOzs7O1dBQ0Qsd0JBQWU7QUFDUHBHLGNBQVEsQ0FBQzRGLElBQVQsQ0FBY1MsTUFBZCxDQUFxQixLQUFLakcsTUFBMUIsRUFETyxDQUVQO0FBQ0E7QUFDSCxLLENBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7V0FDQSx1QkFBYztBQUNWLFdBQUtrRSxHQUFMLENBQVNnQyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtsRyxNQUFMLENBQVljLEtBQXJDLEVBQTRDLEtBQUtkLE1BQUwsQ0FBWTZGLE1BQXhEO0FBQ0EsV0FBSzdGLE1BQUwsQ0FBWWMsS0FBWixHQUFvQlcsTUFBTSxDQUFDZ0QsVUFBM0I7QUFDQSxXQUFLekUsTUFBTCxDQUFZNkYsTUFBWixHQUFxQnBFLE1BQU0sQ0FBQ3FFLFdBQTVCO0FBQ0g7OztXQUNELGtCQUFTSyxLQUFULEVBQWdCO0FBQ1osV0FBSy9CLFNBQUwsR0FBaUIrQixLQUFqQjtBQUNBdkcsY0FBUSxDQUFDNEYsSUFBVCxDQUFjWSxLQUFkLENBQW9CQyxlQUFwQixHQUFzQ0YsS0FBdEM7QUFDQXZHLGNBQVEsQ0FBQzRGLElBQVQsQ0FBY1ksS0FBZCxDQUFvQkUsTUFBcEI7QUFDSDs7Ozs7O0FBR1VyRyw0RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDM0NNZ0UsTTtBQUNGLGtCQUFZQyxHQUFaLEVBQWlCQyxNQUFqQixFQUEwQztBQUFBLFFBQWpCZ0MsS0FBaUIsdUVBQVQsT0FBUzs7QUFBQTs7QUFDdEMsU0FBS2pDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtnQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLSSxZQUFMLEdBQW9CLENBQXBCO0FBQ0g7Ozs7V0FFRCxzQkFBYTtBQUFBOztBQUNULFdBQUtyQyxHQUFMLENBQVNzQyxTQUFULEdBQXFCLEtBQUtMLEtBQTFCOztBQUNBLHdCQUFLakMsR0FBTCxFQUFTdUMsUUFBVCxxQ0FBcUIsS0FBS3RDLE1BQTFCO0FBQ0g7OztXQUlELDRCQUFtQjtBQUNmLFdBQUtvQyxZQUFMLElBQXFCLENBQUMsQ0FBdEI7QUFDSDs7Ozs7O0FBR1V0QyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDcEJNN0MsUTtBQUNGLG9CQUFZcEIsTUFBWixFQUFvQm1HLEtBQXBCLEVBQTJCcEUsS0FBM0IsRUFBa0M7QUFBQTs7QUFDOUIsU0FBSy9CLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtrRSxHQUFMLEdBQVcsS0FBS2xFLE1BQUwsQ0FBWWtFLEdBQXZCO0FBQ0EsU0FBS25DLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtvRSxLQUFMLEdBQWFBLEtBQWI7QUFDSDs7OztXQUVELGNBQUs1QyxNQUFMLEVBQWE7QUFDVCxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFJbUQsYUFBYSxHQUFHOUcsUUFBUSxDQUFDUyxjQUFULENBQXdCLFFBQXhCLENBQXBCO0FBQ0EsVUFBSTZELEdBQUcsR0FBRyxLQUFLbEUsTUFBTCxDQUFZa0UsR0FBdEI7QUFDQSxVQUFJeUMsRUFBRSxHQUFHRCxhQUFhLENBQUM1RixLQUFkLEdBQXNCLEVBQS9CO0FBQ0EsVUFBSThGLEVBQUUsR0FBR0YsYUFBYSxDQUFDYixNQUFkLEdBQXVCLEdBQWhDO0FBR0EsVUFBSWdCLEVBQUUsR0FBR0QsRUFBRSxHQUFHLENBQWQ7QUFDQSxVQUFJRSxFQUFFLEdBQUdILEVBQUUsR0FBRyxDQUFkO0FBRUEsVUFBSUksUUFBUSxHQUFHO0FBQ1g7QUFDQTtBQUNBQyxVQUFFLEVBQUVGLEVBSE87QUFJWEcsVUFBRSxFQUFFSixFQUpPO0FBS1g7QUFDQTtBQUNBSyxVQUFFLEVBQUUsS0FBSzNELE1BUEU7QUFRWDRELFVBQUUsRUFBRVAsRUFSTztBQVNYO0FBQ0FRLFVBQUUsRUFBRSxLQUFLN0QsTUFBTCxHQUFlLEtBQUt4QixLQUFMLEdBQWEyRSxhQUFhLENBQUM1RixLQVZuQztBQVdYdUcsVUFBRSxFQUFFVDtBQVhPLE9BQWY7QUFlQTFDLFNBQUcsQ0FBQ29ELFNBQUo7QUFDQXBELFNBQUcsQ0FBQ3FELE1BQUosQ0FBV1IsUUFBUSxDQUFDQyxFQUFwQixFQUF3QkQsUUFBUSxDQUFDRSxFQUFqQztBQUNBL0MsU0FBRyxDQUFDc0QsTUFBSixDQUFXVCxRQUFRLENBQUNHLEVBQXBCLEVBQXdCSCxRQUFRLENBQUNJLEVBQWpDO0FBQ0FqRCxTQUFHLENBQUNzRCxNQUFKLENBQVdULFFBQVEsQ0FBQ0ssRUFBcEIsRUFBd0JMLFFBQVEsQ0FBQ00sRUFBakM7QUFDQW5ELFNBQUcsQ0FBQ3NELE1BQUosQ0FBV1QsUUFBUSxDQUFDQyxFQUFwQixFQUF3QkQsUUFBUSxDQUFDRSxFQUFqQztBQUNBL0MsU0FBRyxDQUFDdUQsU0FBSjtBQUNBdkQsU0FBRyxDQUFDc0MsU0FBSixHQUFnQixLQUFLTCxLQUFyQjtBQUNBakMsU0FBRyxDQUFDd0QsV0FBSixHQUFrQixLQUFLdkIsS0FBdkI7QUFDQWpDLFNBQUcsQ0FBQ3lELElBQUo7QUFFQXpELFNBQUcsQ0FBQzBELE1BQUo7QUFDSDs7O1dBQ0QsaUJBQVE7QUFDSixVQUFJO0FBQ0EsYUFBSzFELEdBQUwsQ0FBU2dDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2xHLE1BQUwsQ0FBWWMsS0FBckMsRUFBNEMsS0FBS2QsTUFBTCxDQUFZNkYsTUFBeEQ7QUFFSCxPQUhELENBR0UsT0FBT2dDLENBQVAsRUFBVTtBQUNSMUUsZUFBTyxDQUFDQyxHQUFSLENBQVl5RSxDQUFaO0FBQ0g7QUFFSjs7Ozs7O0FBR1V6Ryx1RUFBZixFOzs7Ozs7Ozs7OztBQ3pEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5jb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4gICAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gICAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIG15RnVuYygpIHtcbiAgICAvLyBjbGVhckRlbW8oKVxuICAgIC8vIGNhbnZhcy5jbGVhckNhdm5hcygpO1xuICAgIGxldCBteVRyaSA9IFtdO1xuICAgIGxldCBzdW0gPSAwO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5QnV0dG9uJykgPT09IG51bGwpIHtcbiAgICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pZCA9ICdwbGF5QnV0dG9uJztcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBMQVlcIjtcbiAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKS5hcHBlbmRDaGlsZChwbGF5QnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3RhcnRRUyk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3J3YXJkQnV0dG9uJykgPT09IG51bGwpIHtcbiAgICAgICAgbGV0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZm9yd2FyZEJ1dHRvbi5pZCA9ICdmb3J3YXJkQnV0dG9uJztcbiAgICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkZPUldBUkRcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1jb250cm9scycpLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yd2FyZEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVzdFNsZWVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yd2FyZEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGVzdFNsZWVwKTtcblxuICAgIH1cblxuICAgIHdoaWxlIChzdW0gPCBjYW52YXMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgIGxldCBuZXh0V2lkdGggPSAwO1xuICAgICAgICBpZiAoY2FudmFzLmNhbnZhcy53aWR0aCAtIHN1bSA8IDEwMClcbiAgICAgICAgICAgIG5leHRXaWR0aCA9IGNhbnZhcy5jYW52YXMud2lkdGggLSBzdW07XG4gICAgICAgIGVsc2UgbmV4dFdpZHRoID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKDQwMCkgKiAxMDApO1xuICAgICAgICBjb25zdCBuZXdUcmkgPSBuZXcgVHJpYW5nbGUoXG4gICAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgICBibHVlUmFuZG9taXplcihuZXh0V2lkdGgsIDEwMCksXG4gICAgICAgICAgICBuZXh0V2lkdGggLyBjYW52YXMuY2FudmFzLndpZHRoXG4gICAgICAgICk7XG4gICAgICAgIC8vIG5ld1RyaS5kcmF3KHN1bSk7XG4gICAgICAgIHN1bSArPSBuZXh0V2lkdGg7XG4gICAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VHJpKTtcbiAgICB9XG5cbiAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTsgLy8gdHVybiBvZmYgd2l0aCBwbGF5IGJ1dHRvbiwgcXVpa3NvcnQgd2lsbCBjb250cm9sIGFuaW1hdGlvbnNcbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSB7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBteVRyaVtpXS5kcmF3KHN1bSk7XG4gICAgICAgICAgICBzdW0gKz0gKG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuXG5cblxuICAgIC8vIExvZ2ljIHByZWZvcm1lZCBvbiBHIHZhbHVlLCBrZWVwaW5nIFIgYWJkIEIgY29uc3RhbnRcbiAgICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICAgICAgbGV0IHNoYWRlVmFsID0gTWF0aC5jZWlsKChpbnB1dHNoYWRlIC8gbWF4VmFsKSAqIDI1NSk7XG5cbiAgICAgICAgaWYgKHNoYWRlVmFsIDwgMTApIHNoYWRlVmFsID0gXCIwXCIgKyBzaGFkZVZhbDtcbiAgICAgICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjtcbiAgICAgICAgbGV0IGdWYWx1ZSA9IHNoYWRlVmFsLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICByZXR1cm4gYCMke3JWYWx1ZSArIGdWYWx1ZX1mZmA7XG4gICAgfVxuICAgIGxldCB0ZXN0ID0gWzUsIDEyLCAxLCAxMiwgMTI1MywgMTIxMiwgNjUyLCAtMSwgLTVdO1xuXG4gICAgZnVuY3Rpb24gc3RhcnRRUygpIHtcbiAgICAgICAgYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSlcbiAgICAgICAgZGlzcGxheUxlbmd0aChteVRyaSk7XG4gICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUxlbmd0aChhcnIpIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYXJyLmxlbmd0aDsgeCsrKVxuICAgICAgICAgICAgc3RyICs9IGFyclt4XS54RGlzdCArIFwiIFwiXG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2xlZXAobWlsbGlzZWNvbmRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbWlsbGlzZWNvbmRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGVzdFNsZWVwKCkge1xuICAgICAgICBzbGVlcCg1MDAwKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwidGVzdCBzbGVlcFwiKSlcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgICAgICBsZXQgcGkgPSBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKVxuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKTtcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnhEaXN0O1xuICAgICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgICAgbGV0IGogPSBzdGFydDtcbiAgICAgICAgd2hpbGUgKGogPCBlbmQpIHtcbiAgICAgICAgICAgIGlmIChhcnJbal0ueERpc3QgPCBwaXZvdCkge1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaSArIDFdO1xuICAgICAgICBhcnJbaSArIDFdID0gYXJyW2VuZF07XG4gICAgICAgIGFycltlbmRdID0gdGVtcDtcbiAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgIH1cbn1cblxuXG4vLyBTcXVhcmUgY29uc3RydWN0b3IgZ2V0cyBhIGNhbnZhcyBwcm9wZXJ0eSwgY29vcmRzICwgY29sb3JcblxuZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4gICAgY2xlYXJEZW1vKCk7XG4gICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbiAgICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuICAgIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EuZHJhd1NxdWFyZSgpKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSA8IDApIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgICAgICBcIndpbmRvd1wiLFxuICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgaGFuZGxlS2V5RG93bixcbiAgICBdKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICAgICAgXCJ3aW5kb3dcIixcbiAgICAgICAgXCJtb3VzZWRvd25cIixcbiAgICAgICAgaGFuZGxlTW91c2VEb3duLFxuICAgIF0pO1xuXG4gICAgLy8gMzIgaXMgQVNDSUkgZm9yIHNwYWNlLCByYW5kb21pemUgY29sb3JcbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuICAgICAgICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gb24gY2xpY2sgYW5pbWF0ZSBuZXcgc3F1YXJlXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNxdWFyZXMucHVzaChcbiAgICAgICAgICAgIG5ldyBTcXVhcmUoXG4gICAgICAgICAgICAgICAgY2FudmFzLmN0eCxcbiAgICAgICAgICAgICAgICBjYW52YXMuY29vcmRzLm1hcCgoY28pID0+IGNvICsgMjUpLFxuICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsQ29sb3JcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IFtcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRlbW8oKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbiAgICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKV0uZm9yRWFjaCgoZWxlbSkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgKTtcbiAgICB9XG59IiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgY29sb3IgPSBcImdyZWVuXCIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxuXG5cblxuICAgIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIHRoaXMueERpc3QgPSB4RGlzdDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIGRyYXcoeFN0YXJ0KSB7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoIC0gNTA7XG4gICAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gNDAwO1xuXG5cbiAgICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgxOiBjeCxcbiAgICAgICAgICAgIHkxOiBjeSxcbiAgICAgICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICAgICAgeTI6IGNoLFxuICAgICAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgICAgICB4MzogdGhpcy54U3RhcnQgKyAodGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgpLFxuICAgICAgICAgICAgeTM6IGNoLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWFuZ2xlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=