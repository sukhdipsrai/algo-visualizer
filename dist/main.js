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

  var sliceFactor = 5; // pixel math failure, should try to consume every pixel of canvas, cause small artifact bug

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJjbGVhckNhbnZhcyIsIm15VHJpIiwic3VtIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3J3YXJkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwicGxheUJ1dHRvbiIsInN0YXJ0UVMiLCJiQ3RybHMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic3BlZWQiLCJzbGljZUZhY3RvciIsIndpZHRoIiwibmV4dFdpZHRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieERpc3QiLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJhbmltYXRpbmciLCJhbmltYXRpb24iLCJpIiwibGVuZ3RoIiwiZHJhdyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsImNlaWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsInJlbW92ZSIsInF1aWNrU29ydCIsInRoZW4iLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsImoiLCJzd2FwQW5kUmVuZGVyIiwic2V0VGltZW91dCIsInRlbXAiLCJtYXJrIiwic3RhcnRDYW52YXMiLCJjbGVhckRlbW8iLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJzcXVhcmVzIiwiU3F1YXJlIiwiY3R4IiwiY29vcmRzIiwiZmlsbENvbG9yIiwiZm9yRWFjaCIsInNxIiwidXBkYXRlU3F1YXJlIiwiZHJhd1NxdWFyZSIsImlubmVyV2lkdGgiLCJyZXZlcnNlQW5pbWF0aW9uIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZU1vdXNlRG93biIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsInNldENvbG9yIiwibWFwIiwiY28iLCJwb3AiLCJzZWxlY3RvciIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiZ2V0Q29udGV4dCIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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QUFFSCxPQUhELENBR0UsT0FBT2lDLENBQVAsRUFBVTtBQUNSbkcsZUFBTyxDQUFDQyxHQUFSLENBQVlrRyxDQUFaO0FBQ0g7QUFFSjs7Ozs7O0FBR1VyRyx1RUFBZixFOzs7Ozs7Ozs7OztBQ3JFQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5jb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4gICAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gICAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIG15RnVuYygpIHtcbiAgICAvLyBjbGVhckRlbW8oKVxuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGxldCBteVRyaSA9IFtdO1xuICAgIGxldCBzdW0gPSAwO1xuXG5cblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgbGV0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCJGT1JXQVJEXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgIGxldCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUExBWVwiO1xuICAgICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFFTKTtcbiAgICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1jb250cm9scycpXG4gICAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgfVxuICAgIGxldCBzcGVlZCA9IDE1O1xuXG4gICAgZnVuY3Rpb24gY3ljbGVTcGVlZCgpIHtcbiAgICAgICAgaWYgKHNwZWVkID4gMTAwKSBzcGVlZCA9IDIwO1xuICAgICAgICBlbHNlIHNwZWVkID0gNzU7XG4gICAgfVxuICAgIGxldCBzbGljZUZhY3RvciA9IDU7XG4gICAgLy8gcGl4ZWwgbWF0aCBmYWlsdXJlLCBzaG91bGQgdHJ5IHRvIGNvbnN1bWUgZXZlcnkgcGl4ZWwgb2YgY2FudmFzLCBjYXVzZSBzbWFsbCBhcnRpZmFjdCBidWdcbiAgICB3aGlsZSAoc3VtIDwgY2FudmFzLmNhbnZhcy53aWR0aCAtIDUpIHtcbiAgICAgICAgbGV0IG5leHRXaWR0aCA9IDA7XG4gICAgICAgIGlmIChjYW52YXMuY2FudmFzLndpZHRoIC0gc3VtIDwgMjU1KSBuZXh0V2lkdGggPSBjYW52YXMuY2FudmFzLndpZHRoIC0gc3VtO1xuICAgICAgICBlbHNlIG5leHRXaWR0aCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAyNTUpKTtcbiAgICAgICAgbGV0IHhEaXN0ID0gbmV4dFdpZHRoIC8gKHNsaWNlRmFjdG9yICogY2FudmFzLmNhbnZhcy53aWR0aCk7XG5cbiAgICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKGNhbnZhcywgYmx1ZVJhbmRvbWl6ZXIobmV4dFdpZHRoLCAyNTUpLCB4RGlzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHhEaXN0KTtcbiAgICAgICAgLy8gbmV3VHJpLmRyYXcoc3VtKTtcbiAgICAgICAgc3VtICs9ICh4RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiwgY2FudmFzLmNhbnZhcy53aWR0aCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RyaSk7XG4gICAgfVxuXG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7IC8vIHR1cm4gb2ZmIHdpdGggcGxheSBidXR0b24sIHF1aWtzb3J0IHdpbGwgY29udHJvbCBhbmltYXRpb25zXG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gICAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICAgIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgICAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgICAgICBpZiAoc2hhZGVWYWwgPCAxMCkgc2hhZGVWYWwgPSBcIjBcIiArIHNoYWRlVmFsO1xuICAgICAgICBsZXQgclZhbHVlID0gXCIzQ1wiO1xuICAgICAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuXG4gICAgICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhteVRyaS5sZW5ndGgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikucmVtb3ZlKCk7XG4gICAgICAgIGFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJxdWlja3NvcnQgZmluaXNoZWRcIilcbiAgICAgICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhteVRyaVsxXSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvcnRpbmdcIik7XG4gICAgICAgIC8vIG5lZWRlZCB0byBzZXR1cCBhIHN0cm9uZyByZXNvbHZlLCBuZWVkIHRvIGNvbWUgYmFjayB0byB0aGlzICwgcmVhc29uOiBmb3IgcGF1c2luZyBhbmltYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkudGhlbigocGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+IChxdWlja1NvcnQoYXJyLCBwaSArIDEsIGVuZCkpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgcmVzb2x2ZSgpXG4gICAgICAgIH0pXG5cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0ueERpc3Q7XG4gICAgICAgICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgICAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgaWYgKGFycltqXS54RGlzdCA8PSBwaXZvdCkgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3dhcEFuZFJlbmRlcihqKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzd2FwIGhhcHBlbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzd2FwcGluZ1wiLCBhcnJbaV0sIGFycltqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLm1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycltqXS5tYXJrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZW5kKSByZXNvbHZlKGkpO1xuICAgICAgICAgICAgICAgIH0sIHNwZWVkICogaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0gLy8gZW50aXJlIGJsb2NrXG5cbi8vIFNxdWFyZSBjb25zdHJ1Y3RvciBnZXRzIGEgY2FudmFzIHByb3BlcnR5LCBjb29yZHMgLCBjb2xvclxuXG5mdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbiAgICBjbGVhckRlbW8oKTtcbiAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuICAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbiAgICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbiAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgICAgIFwid2luZG93XCIsXG4gICAgICAgIFwia2V5ZG93blwiLFxuICAgICAgICBoYW5kbGVLZXlEb3duLFxuICAgIF0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgICAgICBcIndpbmRvd1wiLFxuICAgICAgICBcIm1vdXNlZG93blwiLFxuICAgICAgICBoYW5kbGVNb3VzZURvd24sXG4gICAgXSk7XG5cbiAgICAvLyAzMiBpcyBBU0NJSSBmb3Igc3BhY2UsIHJhbmRvbWl6ZSBjb2xvclxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4gICAgICAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbiBjbGljayBhbmltYXRlIG5ldyBzcXVhcmVcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3F1YXJlcy5wdXNoKFxuICAgICAgICAgICAgbmV3IFNxdWFyZShcbiAgICAgICAgICAgICAgICBjYW52YXMuY3R4LFxuICAgICAgICAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICBsZXQgW1xuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICApO1xuICAgIH1cbn0iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gICAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIC8vIH1cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTsiLCJjbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG5cblxuXG4gICAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7IiwiY2xhc3MgVHJpYW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdyh4U3RhcnQpIHtcbiAgICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gNDAwO1xuXG5cbiAgICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgxOiBjeCxcbiAgICAgICAgICAgIHkxOiBjeSxcbiAgICAgICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICAgICAgeTI6IGNoLFxuICAgICAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgICAgICB4MzogdGhpcy54U3RhcnQgKyAodGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgpLFxuICAgICAgICAgICAgeTM6IGNoLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgbGV0IGZpbGxDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlZCkge1xuICAgICAgICAgICAgZmlsbENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgLy8gcHJlIHByb2R1Y3Rpb24sIGxpbmUgZGVmYXVsdHMgdG8gYmxhY2tcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgbWFyaygpIHtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==