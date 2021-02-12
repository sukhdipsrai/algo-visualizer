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
  canvas.clearCanvas();
  var myTri = [];
  var animating = true;
  var speed = 5;
  var sliceFactor = 5; // increasing will create more triangle slices

  reset();

  function initializeButtons() {
    var qsb = document.querySelector("#quick-sort");
    qsb.removeEventListener("click", myFunc);
    qsb.classList.add("unclickable");
    qsb.classList.remove("clickable");

    if (document.getElementById("forwardButton") === null) {
      var forwardButton = document.createElement("button");
      forwardButton.id = "forwardButton";
      forwardButton.innerHTML = "FORWARD";
      document.getElementById("button-controls").appendChild(forwardButton);
      document.getElementById("forwardButton").addEventListener("click", cycleSpeed); // } else {
      //     document
      //         .getElementById("forwardButton")
      //         .addEventListener("click", cycleSpeed);
    }

    if (document.getElementById("playButton") === null) {
      var playButton = document.createElement("button");
      playButton.id = "playButton";
      playButton.innerHTML = "PLAY";
      playButton.addEventListener("click", startQS);
      var bCtrls = document.getElementById('button-controls');
      bCtrls.insertBefore(playButton, bCtrls.firstChild); // } else {
      //     document.getElementById("playButton").addEventListener("click", startQS);
    }

    if (document.getElementById("resetButton") === null) {
      var resetButton = document.createElement("button");
      resetButton.id = "resetButton";
      resetButton.innerHTML = "RESET";
      resetButton.addEventListener("click", reset);

      var _bCtrls = document.getElementById('button-controls');

      _bCtrls.appendChild(resetButton);
    } else {
      document.getElementById("playButton").addEventListener("click", reset);
    }
  }

  function cycleSpeed() {
    if (speed > 100) speed = 20;else speed = 75;
  }

  function reset() {
    initializeButtons();
    myTri = [];
    var sum = 0; // pixel math failure, should try to consume every pixel of canvas, cause small artifact bug

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
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJjbGVhckNhbnZhcyIsIm15VHJpIiwiYW5pbWF0aW5nIiwic3BlZWQiLCJzbGljZUZhY3RvciIsInJlc2V0IiwiaW5pdGlhbGl6ZUJ1dHRvbnMiLCJxc2IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3J3YXJkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwicGxheUJ1dHRvbiIsInN0YXJ0UVMiLCJiQ3RybHMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwicmVzZXRCdXR0b24iLCJzdW0iLCJ3aWR0aCIsIm5leHRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInhEaXN0IiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJhbmltYXRpb24iLCJpIiwibGVuZ3RoIiwiZHJhdyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsImNlaWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJxdWlja1NvcnQiLCJ0aGVuIiwiYXJyIiwic3RhcnQiLCJlbmQiLCJ4U3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInF1aWNrU29ydFBhcnRpdGlvbiIsInBpIiwicmVqZWN0IiwicGl2b3QiLCJqIiwic3dhcEFuZFJlbmRlciIsInNldFRpbWVvdXQiLCJ0ZW1wIiwibWFyayIsInN0YXJ0Q2FudmFzIiwiY2xlYXJEZW1vIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwic3F1YXJlcyIsIlNxdWFyZSIsImN0eCIsImNvb3JkcyIsImZpbGxDb2xvciIsImZvckVhY2giLCJzcSIsInVwZGF0ZVNxdWFyZSIsImRyYXdTcXVhcmUiLCJpbm5lcldpZHRoIiwicmV2ZXJzZUFuaW1hdGlvbiIsImhhbmRsZUtleURvd24iLCJoYW5kbGVNb3VzZURvd24iLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzZXRDb2xvciIsIm1hcCIsImNvIiwicG9wIiwic2VsZWN0b3IiLCJoYW5kbGVyIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiZ2V0Q29udGV4dCIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FB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NkIsS0FBckI7O0FBQ0EsVUFBSSxLQUFLTyxNQUFULEVBQWlCO0FBQ2JwQyxpQkFBUyxHQUFHLE9BQVo7QUFDQSxhQUFLb0MsTUFBTCxHQUFjLEtBQWQ7QUFDSDs7QUFDRHRDLFNBQUcsQ0FBQ29DLFNBQUosR0FBZ0JsQyxTQUFoQixDQXJDUyxDQXNDVDs7QUFDQUYsU0FBRyxDQUFDdUQsV0FBSixHQUFrQixLQUFLeEIsS0FBdkI7QUFDQS9CLFNBQUcsQ0FBQ3dELElBQUo7QUFFQXhELFNBQUcsQ0FBQ3lELE1BQUo7QUFDSDs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLbkIsTUFBTCxHQUFjLElBQWQ7QUFDSDs7O1dBRUQsaUJBQVE7QUFDSixVQUFJO0FBQ0EsYUFBS3RDLEdBQUwsQ0FBUzhCLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzFHLE1BQUwsQ0FBWTZCLEtBQXJDLEVBQTRDLEtBQUs3QixNQUFMLENBQVlxRyxNQUF4RDtBQUVILE9BSEQsQ0FHRSxPQUFPaUMsQ0FBUCxFQUFVO0FBQ1JsRixlQUFPLENBQUNDLEdBQVIsQ0FBWWlGLENBQVo7QUFDSDtBQUVKOzs7Ozs7QUFHVWxHLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDckVBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgICBjdXJyZW50RXZlbnRMaXN0ZW5lcnM6IFtdLFxufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gbXlGdW5jKCkge1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGxldCBteVRyaSA9IFtdO1xuICAgIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuICAgIGxldCBzcGVlZCA9IDU7XG4gICAgbGV0IHNsaWNlRmFjdG9yID0gNTsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG5cbiAgICByZXNldCgpO1xuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBxc2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIik7XG4gICAgICAgIHFzYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbiAgICAgICAgcXNiLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgICAgcXNiLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZm9yd2FyZEJ1dHRvbi5pZCA9IFwiZm9yd2FyZEJ1dHRvblwiO1xuICAgICAgICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkZPUldBUkRcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC8vICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAgICAgLy8gICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBMQVlcIjtcbiAgICAgICAgICAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UVMpO1xuICAgICAgICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1jb250cm9scycpXG4gICAgICAgICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFFTKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICByZXNldEJ1dHRvbi5pZCA9IFwicmVzZXRCdXR0b25cIjtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9IFwiUkVTRVRcIjtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldCk7XG4gICAgICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJylcbiAgICAgICAgICAgIGJDdHJscy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgICAgIGlmIChzcGVlZCA+IDEwMCkgc3BlZWQgPSAyMDtcbiAgICAgICAgZWxzZSBzcGVlZCA9IDc1O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBpbml0aWFsaXplQnV0dG9ucygpXG4gICAgICAgIG15VHJpID0gW107XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAvLyBwaXhlbCBtYXRoIGZhaWx1cmUsIHNob3VsZCB0cnkgdG8gY29uc3VtZSBldmVyeSBwaXhlbCBvZiBjYW52YXMsIGNhdXNlIHNtYWxsIGFydGlmYWN0IGJ1Z1xuICAgICAgICB3aGlsZSAoc3VtIDwgY2FudmFzLmNhbnZhcy53aWR0aCAtIDUpIHtcbiAgICAgICAgICAgIGxldCBuZXh0V2lkdGggPSAwO1xuICAgICAgICAgICAgLy8gaWYgKGNhbnZhcy5jYW52YXMud2lkdGggLSBzdW0gPCAyNTUpIG5leHRXaWR0aCA9IGNhbnZhcy5jYW52YXMud2lkdGggLSBzdW07XG4gICAgICAgICAgICAvLyBlbHNlIFxuICAgICAgICAgICAgbmV4dFdpZHRoID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDI1NSkpO1xuICAgICAgICAgICAgbGV0IHhEaXN0ID0gbmV4dFdpZHRoIC8gKHNsaWNlRmFjdG9yICogY2FudmFzLmNhbnZhcy53aWR0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShjYW52YXMsIGJsdWVSYW5kb21pemVyKG5leHRXaWR0aCwgMjU1KSwgeERpc3QpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeERpc3QpO1xuICAgICAgICAgICAgLy8gbmV3VHJpLmRyYXcoc3VtKTtcbiAgICAgICAgICAgIHN1bSArPSAoeERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIsIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VHJpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBteVRyaVtpXS5kcmF3KHN1bSk7XG4gICAgICAgICAgICBzdW0gKz0gbXlUcmlbaV0ueERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gICAgZnVuY3Rpb24gYmx1ZVJhbmRvbWl6ZXIoaW5wdXRzaGFkZSwgbWF4VmFsKSB7XG4gICAgICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgICAgIGlmIChzaGFkZVZhbCA8IDEwKSBzaGFkZVZhbCA9IFwiMFwiICsgc2hhZGVWYWw7XG4gICAgICAgIGxldCByVmFsdWUgPSBcIjNDXCI7XG4gICAgICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG5cbiAgICAgICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG15VHJpLmxlbmd0aCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5yZW1vdmUoKTtcbiAgICAgICAgYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInF1aWNrc29ydCBmaW5pc2hlZFwiKVxuICAgICAgICAgICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15VHJpWzFdKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29ydGluZ1wiKTtcbiAgICAgICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT4gKHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKSkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSByZXNvbHZlKClcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS54RGlzdDtcbiAgICAgICAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGVuZCkge1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2pdLnhEaXN0IDw9IHBpdm90KSBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2FwQW5kUmVuZGVyKGopIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXAgaGFwcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXBwaW5nXCIsIGFycltpXSwgYXJyW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0ubWFyaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2pdLm1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBlbmQpIHJlc29sdmUoaSk7XG4gICAgICAgICAgICAgICAgfSwgc3BlZWQgKiBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSAvLyBlbnRpcmUgYmxvY2tcblxuLy8gU3F1YXJlIGNvbnN0cnVjdG9yIGdldHMgYSBjYW52YXMgcHJvcGVydHksIGNvb3JkcyAsIGNvbG9yXG5cbmZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuICAgIGNsZWFyRGVtbygpO1xuICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4gICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbiAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICAgICAgXCJ3aW5kb3dcIixcbiAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgIGhhbmRsZUtleURvd24sXG4gICAgXSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgICAgIFwid2luZG93XCIsXG4gICAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bixcbiAgICBdKTtcblxuICAgIC8vIDMyIGlzIEFTQ0lJIGZvciBzcGFjZSwgcmFuZG9taXplIGNvbG9yXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9uIGNsaWNrIGFuaW1hdGUgbmV3IHNxdWFyZVxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzcXVhcmVzLnB1c2goXG4gICAgICAgICAgICBuZXcgU3F1YXJlKFxuICAgICAgICAgICAgICAgIGNhbnZhcy5jdHgsXG4gICAgICAgICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbiAgICAgICAgICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2hpbGUgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBbXG4gICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gXCJ3aW5kb3dcIikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiQ0FOVkFTREVNT1wiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiRE9NREVNT1wiKSB7XG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgICk7XG4gICAgfVxufSIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG5cbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRofWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAgICAgICAvLyB9XG5cbiAgICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgLy8gfVxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlOyIsImNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cblxuXG5cbiAgICByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCJjbGFzcyBUcmlhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KHhTdGFydCkge1xuICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgbGV0IGN3ID0gY2FudmFzRWxlbWVudC53aWR0aDtcbiAgICAgICAgbGV0IGNoID0gY2FudmFzRWxlbWVudC5oZWlnaHQgLSA0MDA7XG5cblxuICAgICAgICBsZXQgY3kgPSBjaCAvIDI7XG4gICAgICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgICAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAgICAgICAvL3RoZSBmaXJzdCB2ZXJ0ZXggaXMgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDE6IGN4LFxuICAgICAgICAgICAgeTE6IGN5LFxuICAgICAgICAgICAgLy90aGUgc2Vjb25kIHZlcnRleCBpcyBvbiB0aGUgY2lyY3Vtc2NyaWJlZCBjaXJjbGUgYXQgMCByYWRpYW5zIHdoZXJlIFIgaXMgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlICggYSA9IDMwLCBiPTMwIClcbiAgICAgICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgICAgICB4MjogdGhpcy54U3RhcnQsXG4gICAgICAgICAgICB5MjogY2gsXG4gICAgICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgICAgICAgIHgzOiB0aGlzLnhTdGFydCArICh0aGlzLnhEaXN0ICogY2FudmFzRWxlbWVudC53aWR0aCksXG4gICAgICAgICAgICB5MzogY2gsXG4gICAgICAgIH07XG5cblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngzLCB0cmlhbmdsZS55Myk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBsZXQgZmlsbENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgaWYgKHRoaXMubWFya2VkKSB7XG4gICAgICAgICAgICBmaWxsQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAvLyBwcmUgcHJvZHVjdGlvbiwgbGluZSBkZWZhdWx0cyB0byBibGFja1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBtYXJrKCkge1xuICAgICAgICB0aGlzLm1hcmtlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9