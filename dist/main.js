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
  canvas.clearCanvas();
  var myTri = [];
  var sum = 0;

  if (document.getElementById("forwardButton") === null) {
    var forwardButton = document.createElement("button");
    forwardButton.id = "forwardButton";
    forwardButton.innerHTML = "FORWARD";
    document.getElementById("button-controls").appendChild(forwardButton);
    document.getElementById("forwardButton").addEventListener("click", cycleSpeed);
  } else {
    document.getElementById("forwardButton").addEventListener("click", cycleSpeed);
  }

  if (document.getElementById("playButton") === null) {
    var playButton = document.createElement("button");
    playButton.id = "playButton";
    playButton.innerHTML = "PLAY";
    playButton.addEventListener("click", startQS);
    var bCtrls = document.getElementById('button-controls');
    bCtrls.insertBefore(playButton, bCtrls.firstChild);
  } else {
    document.getElementById("playButton").addEventListener("click", startQS);
  }

  var speed = 7;

  function cycleSpeed() {
    if (speed > 100) speed = 20;else speed = 75;
  }

  var sliceFactor = 16; // pixel math failure, should try to consume every pixel of canvas, cause small artifact bug

  while (sum < canvas.canvas.width - 5) {
    var nextWidth = 0; // if (canvas.canvas.width - sum < 255) nextWidth = canvas.canvas.width - sum;
    // else 

    nextWidth = Math.floor(Math.random() * 255);
    var xDist = nextWidth / (sliceFactor * canvas.canvas.width);
    var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(nextWidth, 255), xDist); // console.log(xDist);
    // newTri.draw(sum);

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
    console.log(myTri.length);
    document.getElementById("playButton").remove();
    animating = false;
    quickSort(myTri, 0, myTri.length - 1).then(function () {
      console.log("quicksort finished");
      animating = true;
      window.requestAnimationFrame(animation);
      document.getElementById("forwardButton").remove();
      console.log(myTri[1]);
    });
  }

  function quickSort(arr, start, end) {
    var xStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    // console.log("sorting");
    // needed to setup a strong resolve, need to come back to this , reason: for pausing animation
    return new Promise(function (resolve) {
      if (start < end) {
        quickSortPartition(arr, start, end).then(function (pi) {
          resolve(quickSort(arr, start, pi - 1).then(function () {
            return quickSort(arr, pi + 1, end);
          }));
        });
      } else resolve();
    });
  }

  function quickSortPartition(arr, start, end) {
    return new Promise(function (resolve, reject) {
      var pivot = arr[end].xDist;
      var i = start - 1; // tracking pivot location

      var j = start - 1;

      while (j < end) {
        j++;
        if (arr[j].xDist <= pivot) swapAndRender(j);
      }

      function swapAndRender(j) {
        setTimeout(function () {
          i++;

          if (i !== j) {
            // console.log("swap happened");
            // console.log("swapping", arr[i], arr[j]);
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            debugger;
            arr[i].mark();
            arr[j].mark();
            window.requestAnimationFrame(animation);
          }

          if (j === end) resolve(i);
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
    this.marked = false;
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
      var fillColor = this.color;

      if (this.marked) {
        fillColor = 'green';
        this.marked = false;
      }

      ctx.fillStyle = fillColor; // pre production, line defaults to black

      ctx.strokeStyle = this.color;
      ctx.fill();
      ctx.stroke();
    }
  }, {
    key: "mark",
    value: function mark() {
      this.marked = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJjbGVhckNhbnZhcyIsIm15VHJpIiwic3VtIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3J3YXJkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwicGxheUJ1dHRvbiIsInN0YXJ0UVMiLCJiQ3RybHMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic3BlZWQiLCJzbGljZUZhY3RvciIsIndpZHRoIiwibmV4dFdpZHRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieERpc3QiLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwicHVzaCIsImFuaW1hdGluZyIsImFuaW1hdGlvbiIsImkiLCJsZW5ndGgiLCJkcmF3Iiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5wdXRzaGFkZSIsIm1heFZhbCIsInNoYWRlVmFsIiwiY2VpbCIsInJWYWx1ZSIsImdWYWx1ZSIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsInJlbW92ZSIsInF1aWNrU29ydCIsInRoZW4iLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsImoiLCJzd2FwQW5kUmVuZGVyIiwic2V0VGltZW91dCIsInRlbXAiLCJtYXJrIiwic3RhcnRDYW52YXMiLCJjbGVhckRlbW8iLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJzcXVhcmVzIiwiU3F1YXJlIiwiY3R4IiwiY29vcmRzIiwiZmlsbENvbG9yIiwiZm9yRWFjaCIsInNxIiwidXBkYXRlU3F1YXJlIiwiZHJhd1NxdWFyZSIsImlubmVyV2lkdGgiLCJyZXZlcnNlQW5pbWF0aW9uIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbG9yIiwibWFwIiwiY28iLCJwb3AiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiZ2V0Q29udGV4dCIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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RUFBcEIsRUFBd0JILFFBQVEsQ0FBQ0ksRUFBakM7QUFDQWpELFNBQUcsQ0FBQ3NELE1BQUosQ0FBV1QsUUFBUSxDQUFDSyxFQUFwQixFQUF3QkwsUUFBUSxDQUFDTSxFQUFqQztBQUNBbkQsU0FBRyxDQUFDc0QsTUFBSixDQUFXVCxRQUFRLENBQUNDLEVBQXBCLEVBQXdCRCxRQUFRLENBQUNFLEVBQWpDO0FBQ0EvQyxTQUFHLENBQUN1RCxTQUFKO0FBQ0EsVUFBSXJELFNBQVMsR0FBRyxLQUFLOEIsS0FBckI7O0FBQ0EsVUFBSSxLQUFLTyxNQUFULEVBQWlCO0FBQ2JyQyxpQkFBUyxHQUFHLE9BQVo7QUFDQSxhQUFLcUMsTUFBTCxHQUFjLEtBQWQ7QUFDSDs7QUFDRHZDLFNBQUcsQ0FBQ3FDLFNBQUosR0FBZ0JuQyxTQUFoQixDQXJDUyxDQXNDVDs7QUFDQUYsU0FBRyxDQUFDd0QsV0FBSixHQUFrQixLQUFLeEIsS0FBdkI7QUFDQWhDLFNBQUcsQ0FBQ3lELElBQUo7QUFFQXpELFNBQUcsQ0FBQzBELE1BQUo7QUFDSDs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLbkIsTUFBTCxHQUFjLElBQWQ7QUFDSDs7O1dBRUQsaUJBQVE7QUFDSixVQUFJO0FBQ0EsYUFBS3ZDLEdBQUwsQ0FBUytCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS3BHLE1BQUwsQ0FBWW9CLEtBQXJDLEVBQTRDLEtBQUtwQixNQUFMLENBQVkrRixNQUF4RDtBQUVILE9BSEQsQ0FHRSxPQUFPaUMsQ0FBUCxFQUFVO0FBQ1JwRixlQUFPLENBQUNDLEdBQVIsQ0FBWW1GLENBQVo7QUFDSDtBQUVKOzs7Ozs7QUFHVXJHLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDckVBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgICBjdXJyZW50RXZlbnRMaXN0ZW5lcnM6IFtdLFxufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gbXlGdW5jKCkge1xuICAgIC8vIGNsZWFyRGVtbygpXG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgbGV0IG15VHJpID0gW107XG4gICAgbGV0IHN1bSA9IDA7XG5cblxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkZPUldBUkRcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIikuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbik7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJQTEFZXCI7XG4gICAgICAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UVMpO1xuICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJylcbiAgICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShwbGF5QnV0dG9uLCBiQ3RybHMuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFFTKTtcbiAgICB9XG4gICAgbGV0IHNwZWVkID0gNztcblxuICAgIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgICAgIGlmIChzcGVlZCA+IDEwMCkgc3BlZWQgPSAyMDtcbiAgICAgICAgZWxzZSBzcGVlZCA9IDc1O1xuICAgIH1cbiAgICBsZXQgc2xpY2VGYWN0b3IgPSAxNjtcbiAgICAvLyBwaXhlbCBtYXRoIGZhaWx1cmUsIHNob3VsZCB0cnkgdG8gY29uc3VtZSBldmVyeSBwaXhlbCBvZiBjYW52YXMsIGNhdXNlIHNtYWxsIGFydGlmYWN0IGJ1Z1xuICAgIHdoaWxlIChzdW0gPCBjYW52YXMuY2FudmFzLndpZHRoIC0gNSkge1xuICAgICAgICBsZXQgbmV4dFdpZHRoID0gMDtcbiAgICAgICAgLy8gaWYgKGNhbnZhcy5jYW52YXMud2lkdGggLSBzdW0gPCAyNTUpIG5leHRXaWR0aCA9IGNhbnZhcy5jYW52YXMud2lkdGggLSBzdW07XG4gICAgICAgIC8vIGVsc2UgXG4gICAgICAgIG5leHRXaWR0aCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyNTUpKTtcbiAgICAgICAgbGV0IHhEaXN0ID0gbmV4dFdpZHRoIC8gKHNsaWNlRmFjdG9yICogY2FudmFzLmNhbnZhcy53aWR0aCk7XG5cbiAgICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKGNhbnZhcywgYmx1ZVJhbmRvbWl6ZXIobmV4dFdpZHRoLCAyNTUpLCB4RGlzdCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHhEaXN0KTtcbiAgICAgICAgLy8gbmV3VHJpLmRyYXcoc3VtKTtcbiAgICAgICAgc3VtICs9ICh4RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiwgY2FudmFzLmNhbnZhcy53aWR0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RyaSk7XG4gICAgfVxuXG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7IC8vIHR1cm4gb2ZmIHdpdGggcGxheSBidXR0b24sIHF1aWtzb3J0IHdpbGwgY29udHJvbCBhbmltYXRpb25zXG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gICAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICAgIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgICAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgICAgICBpZiAoc2hhZGVWYWwgPCAxMCkgc2hhZGVWYWwgPSBcIjBcIiArIHNoYWRlVmFsO1xuICAgICAgICBsZXQgclZhbHVlID0gXCIzQ1wiO1xuICAgICAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuXG4gICAgICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhteVRyaS5sZW5ndGgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikucmVtb3ZlKCk7XG4gICAgICAgIGFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWlja3NvcnQgZmluaXNoZWRcIilcbiAgICAgICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhteVRyaVsxXSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvcnRpbmdcIik7XG4gICAgICAgIC8vIG5lZWRlZCB0byBzZXR1cCBhIHN0cm9uZyByZXNvbHZlLCBuZWVkIHRvIGNvbWUgYmFjayB0byB0aGlzICwgcmVhc29uOiBmb3IgcGF1c2luZyBhbmltYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkudGhlbigocGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+IChxdWlja1NvcnQoYXJyLCBwaSArIDEsIGVuZCkpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgcmVzb2x2ZSgpXG4gICAgICAgIH0pXG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0ueERpc3Q7XG4gICAgICAgICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgICAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgaWYgKGFycltqXS54RGlzdCA8PSBwaXZvdCkgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3dhcEFuZFJlbmRlcihqKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwIGhhcHBlbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwcGluZ1wiLCBhcnJbaV0sIGFycltqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLm1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycltqXS5tYXJrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZW5kKSByZXNvbHZlKGkpO1xuICAgICAgICAgICAgICAgIH0sIHNwZWVkICogaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0gLy8gZW50aXJlIGJsb2NrXG5cbi8vIFNxdWFyZSBjb25zdHJ1Y3RvciBnZXRzIGEgY2FudmFzIHByb3BlcnR5LCBjb29yZHMgLCBjb2xvclxuXG5mdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbiAgICBjbGVhckRlbW8oKTtcbiAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuICAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbiAgICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbiAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgICAgIFwid2luZG93XCIsXG4gICAgICAgIFwia2V5ZG93blwiLFxuICAgICAgICBoYW5kbGVLZXlEb3duLFxuICAgIF0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgICAgICBcIndpbmRvd1wiLFxuICAgICAgICBcIm1vdXNlZG93blwiLFxuICAgICAgICBoYW5kbGVNb3VzZURvd24sXG4gICAgXSk7XG5cbiAgICAvLyAzMiBpcyBBU0NJSSBmb3Igc3BhY2UsIHJhbmRvbWl6ZSBjb2xvclxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4gICAgICAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbiBjbGljayBhbmltYXRlIG5ldyBzcXVhcmVcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3F1YXJlcy5wdXNoKFxuICAgICAgICAgICAgbmV3IFNxdWFyZShcbiAgICAgICAgICAgICAgICBjYW52YXMuY3R4LFxuICAgICAgICAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICBsZXQgW1xuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICApO1xuICAgIH1cbn0iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gICAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIC8vIH1cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTsiLCJjbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG5cblxuXG4gICAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7IiwiY2xhc3MgVHJpYW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdyh4U3RhcnQpIHtcbiAgICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gNDAwO1xuXG5cbiAgICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgxOiBjeCxcbiAgICAgICAgICAgIHkxOiBjeSxcbiAgICAgICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICAgICAgeTI6IGNoLFxuICAgICAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgICAgICB4MzogdGhpcy54U3RhcnQgKyAodGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgpLFxuICAgICAgICAgICAgeTM6IGNoLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgbGV0IGZpbGxDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlZCkge1xuICAgICAgICAgICAgZmlsbENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgLy8gcHJlIHByb2R1Y3Rpb24sIGxpbmUgZGVmYXVsdHMgdG8gYmxhY2tcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgbWFyaygpIHtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==