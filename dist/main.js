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

  var speed = 15;

  function cycleSpeed() {
    if (speed > 100) speed = 20;else speed = 75;
  }

  var sliceFactor = 2; // pixel math failure, should try to consume every pixel of canvas, cause small artifact bug

  while (sum < canvas.canvas.width - 5) {
    var nextWidth = 0;
    if (canvas.canvas.width - sum < 255) nextWidth = canvas.canvas.width - sum;else nextWidth = Math.floor(Math.random() * 255);
    var xDist = nextWidth / (sliceFactor * canvas.canvas.width);
    var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(nextWidth, 255), xDist);
    console.log(xDist); // newTri.draw(sum);

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
      document.getElementById("button-controls").remove();
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
            console.log("swap happened");
            console.log("swapping", arr[i], arr[j]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJjbGVhckNhbnZhcyIsIm15VHJpIiwic3VtIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3J3YXJkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwicGxheUJ1dHRvbiIsInN0YXJ0UVMiLCJiQ3RybHMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic3BlZWQiLCJzbGljZUZhY3RvciIsIndpZHRoIiwibmV4dFdpZHRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieERpc3QiLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJhbmltYXRpbmciLCJhbmltYXRpb24iLCJpIiwibGVuZ3RoIiwiZHJhdyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsImNlaWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsInJlbW92ZSIsInF1aWNrU29ydCIsInRoZW4iLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsImoiLCJzd2FwQW5kUmVuZGVyIiwic2V0VGltZW91dCIsInRlbXAiLCJtYXJrIiwic3RhcnRDYW52YXMiLCJjbGVhckRlbW8iLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJzcXVhcmVzIiwiU3F1YXJlIiwiY3R4IiwiY29vcmRzIiwiZmlsbENvbG9yIiwiZm9yRWFjaCIsInNxIiwidXBkYXRlU3F1YXJlIiwiZHJhd1NxdWFyZSIsImlubmVyV2lkdGgiLCJyZXZlcnNlQW5pbWF0aW9uIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbG9yIiwibWFwIiwiY28iLCJwb3AiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiZ2V0Q29udGV4dCIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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O0FBRUgsT0FIRCxDQUdFLE9BQU9pQyxDQUFQLEVBQVU7QUFDUm5HLGVBQU8sQ0FBQ0MsR0FBUixDQUFZa0csQ0FBWjtBQUNIO0FBRUo7Ozs7OztBQUdVckcsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNyRUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICAgIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuICAgIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG5jb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuXG5mdW5jdGlvbiBteUZ1bmMoKSB7XG4gICAgLy8gY2xlYXJEZW1vKClcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBsZXQgbXlUcmkgPSBbXTtcbiAgICBsZXQgc3VtID0gMDtcblxuXG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZm9yd2FyZEJ1dHRvbi5pZCA9IFwiZm9yd2FyZEJ1dHRvblwiO1xuICAgICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiRk9SV0FSRFwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKS5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIjtcbiAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBMQVlcIjtcbiAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKVxuICAgICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UVMpO1xuICAgIH1cbiAgICBsZXQgc3BlZWQgPSAxNTtcblxuICAgIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgICAgIGlmIChzcGVlZCA+IDEwMCkgc3BlZWQgPSAyMDtcbiAgICAgICAgZWxzZSBzcGVlZCA9IDc1O1xuICAgIH1cbiAgICBsZXQgc2xpY2VGYWN0b3IgPSAyO1xuICAgIC8vIHBpeGVsIG1hdGggZmFpbHVyZSwgc2hvdWxkIHRyeSB0byBjb25zdW1lIGV2ZXJ5IHBpeGVsIG9mIGNhbnZhcywgY2F1c2Ugc21hbGwgYXJ0aWZhY3QgYnVnXG4gICAgd2hpbGUgKHN1bSA8IGNhbnZhcy5jYW52YXMud2lkdGggLSA1KSB7XG4gICAgICAgIGxldCBuZXh0V2lkdGggPSAwO1xuICAgICAgICBpZiAoY2FudmFzLmNhbnZhcy53aWR0aCAtIHN1bSA8IDI1NSkgbmV4dFdpZHRoID0gY2FudmFzLmNhbnZhcy53aWR0aCAtIHN1bTtcbiAgICAgICAgZWxzZSBuZXh0V2lkdGggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjU1KSk7XG4gICAgICAgIGxldCB4RGlzdCA9IG5leHRXaWR0aCAvIChzbGljZUZhY3RvciAqIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShjYW52YXMsIGJsdWVSYW5kb21pemVyKG5leHRXaWR0aCwgMjU1KSwgeERpc3QpO1xuICAgICAgICBjb25zb2xlLmxvZyh4RGlzdCk7XG4gICAgICAgIC8vIG5ld1RyaS5kcmF3KHN1bSk7XG4gICAgICAgIHN1bSArPSAoeERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoKTtcbiAgICAgICAgbXlUcmkucHVzaChuZXdUcmkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIsIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdUcmkpO1xuICAgIH1cblxuICAgIGxldCBhbmltYXRpbmcgPSB0cnVlOyAvLyB0dXJuIG9mZiB3aXRoIHBsYXkgYnV0dG9uLCBxdWlrc29ydCB3aWxsIGNvbnRyb2wgYW5pbWF0aW9uc1xuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUcmkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG15VHJpW2ldLmRyYXcoc3VtKTtcbiAgICAgICAgICAgIHN1bSArPSBteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAgIC8vIExvZ2ljIHByZWZvcm1lZCBvbiBHIHZhbHVlLCBrZWVwaW5nIFIgYWJkIEIgY29uc3RhbnRcbiAgICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICAgICAgbGV0IHNoYWRlVmFsID0gTWF0aC5jZWlsKChpbnB1dHNoYWRlIC8gbWF4VmFsKSAqIDI1NSk7XG5cbiAgICAgICAgaWYgKHNoYWRlVmFsIDwgMTApIHNoYWRlVmFsID0gXCIwXCIgKyBzaGFkZVZhbDtcbiAgICAgICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjtcbiAgICAgICAgbGV0IGdWYWx1ZSA9IHNoYWRlVmFsLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICByZXR1cm4gYCMke3JWYWx1ZSArIGdWYWx1ZX1mZmA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRRUygpIHtcbiAgICAgICAgY29uc29sZS5sb2cobXlUcmkubGVuZ3RoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLnJlbW92ZSgpO1xuICAgICAgICBhbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgcXVpY2tTb3J0KG15VHJpLCAwLCBteVRyaS5sZW5ndGggLSAxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicXVpY2tzb3J0IGZpbmlzaGVkXCIpXG4gICAgICAgICAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhteVRyaVsxXSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvcnRpbmdcIik7XG4gICAgICAgIC8vIG5lZWRlZCB0byBzZXR1cCBhIHN0cm9uZyByZXNvbHZlLCBuZWVkIHRvIGNvbWUgYmFjayB0byB0aGlzICwgcmVhc29uOiBmb3IgcGF1c2luZyBhbmltYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkudGhlbigocGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+IChxdWlja1NvcnQoYXJyLCBwaSArIDEsIGVuZCkpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgcmVzb2x2ZSgpXG4gICAgICAgIH0pXG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0ueERpc3Q7XG4gICAgICAgICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgICAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgaWYgKGFycltqXS54RGlzdCA8PSBwaXZvdCkgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3dhcEFuZFJlbmRlcihqKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzd2FwIGhhcHBlbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzd2FwcGluZ1wiLCBhcnJbaV0sIGFycltqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLm1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycltqXS5tYXJrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZW5kKSByZXNvbHZlKGkpO1xuICAgICAgICAgICAgICAgIH0sIHNwZWVkICogaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0gLy8gZW50aXJlIGJsb2NrXG5cbi8vIFNxdWFyZSBjb25zdHJ1Y3RvciBnZXRzIGEgY2FudmFzIHByb3BlcnR5LCBjb29yZHMgLCBjb2xvclxuXG5mdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbiAgICBjbGVhckRlbW8oKTtcbiAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuICAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbiAgICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbiAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgICAgIFwid2luZG93XCIsXG4gICAgICAgIFwia2V5ZG93blwiLFxuICAgICAgICBoYW5kbGVLZXlEb3duLFxuICAgIF0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgICAgICBcIndpbmRvd1wiLFxuICAgICAgICBcIm1vdXNlZG93blwiLFxuICAgICAgICBoYW5kbGVNb3VzZURvd24sXG4gICAgXSk7XG5cbiAgICAvLyAzMiBpcyBBU0NJSSBmb3Igc3BhY2UsIHJhbmRvbWl6ZSBjb2xvclxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4gICAgICAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbiBjbGljayBhbmltYXRlIG5ldyBzcXVhcmVcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3F1YXJlcy5wdXNoKFxuICAgICAgICAgICAgbmV3IFNxdWFyZShcbiAgICAgICAgICAgICAgICBjYW52YXMuY3R4LFxuICAgICAgICAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICBsZXQgW1xuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICApO1xuICAgIH1cbn0iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gICAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIC8vIH1cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTsiLCJjbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG5cblxuXG4gICAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7IiwiY2xhc3MgVHJpYW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdyh4U3RhcnQpIHtcbiAgICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gNDAwO1xuXG5cbiAgICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgxOiBjeCxcbiAgICAgICAgICAgIHkxOiBjeSxcbiAgICAgICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICAgICAgeTI6IGNoLFxuICAgICAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgICAgICB4MzogdGhpcy54U3RhcnQgKyAodGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgpLFxuICAgICAgICAgICAgeTM6IGNoLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgbGV0IGZpbGxDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlZCkge1xuICAgICAgICAgICAgZmlsbENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgLy8gcHJlIHByb2R1Y3Rpb24sIGxpbmUgZGVmYXVsdHMgdG8gYmxhY2tcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgbWFyaygpIHtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==