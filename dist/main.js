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

  if (document.getElementById("playButton") === null) {
    var playButton = document.createElement("button");
    playButton.id = "playButton";
    playButton.innerHTML = "PLAY";
    playButton.addEventListener("click", startQS);
    document.getElementById("button-controls").appendChild(playButton);
  } else {
    document.getElementById("playButton").addEventListener("click", startQS);
  }

  if (document.getElementById("forwardButton") === null) {
    var forwardButton = document.createElement("button");
    forwardButton.id = "forwardButton";
    forwardButton.innerHTML = "FORWARD";
    document.getElementById("button-controls").appendChild(forwardButton);
    document.getElementById("forwardButton").addEventListener("click", cycleSpeed);
  } else {
    document.getElementById("forwardButton").addEventListener("click", cycleSpeed);
  }

  var speed = 50;

  function cycleSpeed() {
    if (speed === 100) speed = 20;else speed = 100;
  }

  var sliceFactor = 2;

  while (sum < canvas.canvas.width) {
    var nextWidth = 0;
    if (canvas.canvas.width - sum < 255) nextWidth = canvas.canvas.width - sum;else nextWidth = Math.floor(Math.random() * 254 + 1);
    var xDist = nextWidth / (sliceFactor * canvas.canvas.width);
    var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(nextWidth, 255), xDist); // newTri.draw(sum);

    sum += xDist * canvas.canvas.width;
    myTri.push(newTri); // console.log("sum", sum);
    // console.log("width", canvas.canvas.width);
    // console.log(newTri);
  }

  var animating = true; // turn off with play button, quiksort will control animations

  var animation = function animation() {
    var sum = 0;
    canvas.clearCanvas();

    for (var i = 0; i < myTri.length; i++) {
      myTri[i].draw(sum);
      sum += myTri[i].xDist * canvas.canvas.width;
    }

    if (animating) {
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
    document.getElementById('playButton').remove();
    animating = false;
    quickSort(myTri, 0, myTri.length - 1);
  }

  function quickSort(arr, start, end) {
    var xStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    console.log("sorting"); // needed to setup a strong resolve, need to come back to this , reason: for pausing animation

    if (start < end) {
      quickSortPartition(arr, start, end).then(function (pi) {
        quickSort(arr, start, pi - 1);
        quickSort(arr, pi + 1, end);
      });
    }
  }

  function quickSortPartition(arr, start, end) {
    return new Promise(function (resolve, reject) {
      var pivot = arr[end].xDist;
      var i = start - 1; // tracking pivot location

      var j = start - 1;

      while (j < end) {
        j++;
        swapAndRender(j);
      }

      function swapAndRender(j) {
        setTimeout(function () {
          if (arr[j].xDist <= pivot) {
            i++;

            if (i !== j) {
              console.log("swap happened");
              var temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
              window.requestAnimationFrame(animation);
            }

            if (j === end) resolve(i);
          }
        }, speed * j);
      }
    });
  }
} // entire block
// Square constructor gets a canvas property, coords , color


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
      var cw = canvasElement.width;
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
      ctx.fillStyle = this.color; // pre production, line defaults to black

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJteVRyaSIsInN1bSIsImdldEVsZW1lbnRCeUlkIiwicGxheUJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsInN0YXJ0UVMiLCJhcHBlbmRDaGlsZCIsImZvcndhcmRCdXR0b24iLCJjeWNsZVNwZWVkIiwic3BlZWQiLCJzbGljZUZhY3RvciIsIndpZHRoIiwibmV4dFdpZHRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieERpc3QiLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwicHVzaCIsImFuaW1hdGluZyIsImFuaW1hdGlvbiIsImNsZWFyQ2FudmFzIiwiaSIsImxlbmd0aCIsImRyYXciLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJyZW1vdmUiLCJxdWlja1NvcnQiLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsImNvbnNvbGUiLCJsb2ciLCJxdWlja1NvcnRQYXJ0aXRpb24iLCJ0aGVuIiwicGkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBpdm90IiwiaiIsInN3YXBBbmRSZW5kZXIiLCJzZXRUaW1lb3V0IiwidGVtcCIsInN0YXJ0Q2FudmFzIiwiY2xlYXJEZW1vIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwic3F1YXJlcyIsIlNxdWFyZSIsImN0eCIsImNvb3JkcyIsImZpbGxDb2xvciIsImZvckVhY2giLCJzcSIsInVwZGF0ZVNxdWFyZSIsImRyYXdTcXVhcmUiLCJpbm5lcldpZHRoIiwicmV2ZXJzZUFuaW1hdGlvbiIsImhhbmRsZUtleURvd24iLCJoYW5kbGVNb3VzZURvd24iLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzZXRDb2xvciIsIm1hcCIsImNvIiwicG9wIiwic2VsZWN0b3IiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIiwicHJvcHMiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEF0dHJpYnV0ZSIsImdldENvbnRleHQiLCJhcHBlbmQiLCJjbGVhclJlY3QiLCJjb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIiwiYW5pbWF0aW9uRGlyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjYW52YXNFbGVtZW50IiwiY3ciLCJjaCIsImN5IiwiY3giLCJ0cmlhbmdsZSIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwiZmlsbCIsInN0cm9rZSIsImUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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QUFFSCxPQUhELENBR0UsT0FBT2dDLENBQVAsRUFBVTtBQUNSNUUsZUFBTyxDQUFDQyxHQUFSLENBQVkyRSxDQUFaO0FBQ0g7QUFFSjs7Ozs7O0FBR1VwRyx1RUFBZixFOzs7Ozs7Ozs7OztBQzFEQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5jb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4gICAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gICAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIG15RnVuYygpIHtcbiAgICAvLyBjbGVhckRlbW8oKVxuICAgIC8vIGNhbnZhcy5jbGVhckNhdm5hcygpO1xuICAgIGxldCBteVRyaSA9IFtdO1xuICAgIGxldCBzdW0gPSAwO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIjtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBMQVlcIjtcbiAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpLmFwcGVuZENoaWxkKHBsYXlCdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkZPUldBUkRcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIikuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbik7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH1cblxuICAgIGxldCBzcGVlZCA9IDUwO1xuXG4gICAgZnVuY3Rpb24gY3ljbGVTcGVlZCgpIHtcbiAgICAgICAgaWYgKHNwZWVkID09PSAxMDApXG4gICAgICAgICAgICBzcGVlZCA9IDIwO1xuICAgICAgICBlbHNlIHNwZWVkID0gMTAwO1xuICAgIH1cbiAgICBsZXQgc2xpY2VGYWN0b3IgPSAyO1xuICAgIHdoaWxlIChzdW0gPCAoY2FudmFzLmNhbnZhcy53aWR0aCkpIHtcbiAgICAgICAgbGV0IG5leHRXaWR0aCA9IDA7XG4gICAgICAgIGlmICgoY2FudmFzLmNhbnZhcy53aWR0aCkgLSBzdW0gPCAyNTUpIG5leHRXaWR0aCA9IGNhbnZhcy5jYW52YXMud2lkdGggLSBzdW07XG4gICAgICAgIGVsc2UgbmV4dFdpZHRoID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDI1NCkgKyAxKTtcbiAgICAgICAgbGV0IHhEaXN0ID0gbmV4dFdpZHRoIC8gKHNsaWNlRmFjdG9yICogY2FudmFzLmNhbnZhcy53aWR0aCk7XG4gICAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShcbiAgICAgICAgICAgIGNhbnZhcyxcbiAgICAgICAgICAgIGJsdWVSYW5kb21pemVyKG5leHRXaWR0aCwgMjU1KSxcbiAgICAgICAgICAgIHhEaXN0XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gbmV3VHJpLmRyYXcoc3VtKTtcbiAgICAgICAgc3VtICs9ICh4RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiwgY2FudmFzLmNhbnZhcy53aWR0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RyaSk7XG4gICAgfVxuXG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7IC8vIHR1cm4gb2ZmIHdpdGggcGxheSBidXR0b24sIHF1aWtzb3J0IHdpbGwgY29udHJvbCBhbmltYXRpb25zXG5cblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBteVRyaVtpXS5kcmF3KHN1bSk7XG4gICAgICAgICAgICBzdW0gKz0gbXlUcmlbaV0ueERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gICAgZnVuY3Rpb24gYmx1ZVJhbmRvbWl6ZXIoaW5wdXRzaGFkZSwgbWF4VmFsKSB7XG4gICAgICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgICAgIGlmIChzaGFkZVZhbCA8IDEwKSBzaGFkZVZhbCA9IFwiMFwiICsgc2hhZGVWYWw7XG4gICAgICAgIGxldCByVmFsdWUgPSBcIjNDXCI7XG4gICAgICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG5cbiAgICAgICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5QnV0dG9uJykucmVtb3ZlKCk7XG4gICAgICAgIGFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic29ydGluZ1wiKTtcbiAgICAgICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgICAgIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4ocGkgPT4ge1xuICAgICAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpO1xuICAgICAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0ueERpc3Q7XG4gICAgICAgICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgICAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3dhcEFuZFJlbmRlcihqKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycltqXS54RGlzdCA8PSBwaXZvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN3YXAgaGFwcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBlbmQpIHJlc29sdmUoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBzcGVlZCAqIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IC8vIGVudGlyZSBibG9ja1xuXG4vLyBTcXVhcmUgY29uc3RydWN0b3IgZ2V0cyBhIGNhbnZhcyBwcm9wZXJ0eSwgY29vcmRzICwgY29sb3JcblxuZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4gICAgY2xlYXJEZW1vKCk7XG4gICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbiAgICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4gICAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuICAgIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EuZHJhd1NxdWFyZSgpKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4gICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4gICAgICAgICAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSA8IDApIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgICAgICBcIndpbmRvd1wiLFxuICAgICAgICBcImtleWRvd25cIixcbiAgICAgICAgaGFuZGxlS2V5RG93bixcbiAgICBdKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICAgICAgXCJ3aW5kb3dcIixcbiAgICAgICAgXCJtb3VzZWRvd25cIixcbiAgICAgICAgaGFuZGxlTW91c2VEb3duLFxuICAgIF0pO1xuXG4gICAgLy8gMzIgaXMgQVNDSUkgZm9yIHNwYWNlLCByYW5kb21pemUgY29sb3JcbiAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuICAgICAgICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gb24gY2xpY2sgYW5pbWF0ZSBuZXcgc3F1YXJlXG4gICAgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNxdWFyZXMucHVzaChcbiAgICAgICAgICAgIG5ldyBTcXVhcmUoXG4gICAgICAgICAgICAgICAgY2FudmFzLmN0eCxcbiAgICAgICAgICAgICAgICBjYW52YXMuY29vcmRzLm1hcCgoY28pID0+IGNvICsgMjUpLFxuICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsQ29sb3JcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IFtcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRlbW8oKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbiAgICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKV0uZm9yRWFjaCgoZWxlbSkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgKTtcbiAgICB9XG59IiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgY29sb3IgPSBcImdyZWVuXCIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxuXG5cblxuICAgIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIHRoaXMueERpc3QgPSB4RGlzdDtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIGRyYXcoeFN0YXJ0KSB7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgICAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodCAtIDQwMDtcblxuXG4gICAgICAgIGxldCBjeSA9IGNoIC8gMjtcbiAgICAgICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgICAgIHZhciB0cmlhbmdsZSA9IHtcbiAgICAgICAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgICAgICB4MTogY3gsXG4gICAgICAgICAgICB5MTogY3ksXG4gICAgICAgICAgICAvL3RoZSBzZWNvbmQgdmVydGV4IGlzIG9uIHRoZSBjaXJjdW1zY3JpYmVkIGNpcmNsZSBhdCAwIHJhZGlhbnMgd2hlcmUgUiBpcyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUgKCBhID0gMzAsIGI9MzAgKVxuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgICAgIHkyOiBjaCxcbiAgICAgICAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgKHRoaXMueERpc3QgKiBjYW52YXNFbGVtZW50LndpZHRoKSxcbiAgICAgICAgICAgIHkzOiBjaCxcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngyLCB0cmlhbmdsZS55Mik7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAvLyBwcmUgcHJvZHVjdGlvbiwgbGluZSBkZWZhdWx0cyB0byBibGFja1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9