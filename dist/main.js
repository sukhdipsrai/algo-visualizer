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
    }
  }

  function cycleSpeed() {
    if (speed == 5) speed = 100;else speed = 5;
  }

  function reset() {
    initializeButtons();
    canvas.clearCanvas();
    animating = true;
    myTri = [];
    var sum = 0; // pixel math failure, should try to consume every pixel of canvas, cause small artifact bug
    //TODO: rework kinks in this logic

    while (sum < canvas.canvas.width - 2) {
      var nextWidth = 0;
      nextWidth = Math.floor(Math.random() * 255);
      var xDist = nextWidth / (sliceFactor * canvas.canvas.width);
      var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(nextWidth, 255), xDist); // console.log(xDist);
      // newTri.draw(sum);

      sum += xDist * canvas.canvas.width;
      myTri.push(newTri); // console.log("sum", sum);
      // console.log("width", canvas.canvas.width);
      // console.log(newTri);
    } // let nextWidth = Math.floor(canvas.canvas.width - sum);
    // let xDist = nextWidth / (sliceFactor * canvas.canvas.width);
    // myTri.push(new Triangle(canvas, blueRandomizer(nextWidth, 255), xDist));

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
    document.getElementById("resetButton").hidden = true;
    animating = false;
    quickSort(myTri, 0, myTri.length - 1).then(function () {
      console.log("quicksort finished");
      animating = true;
      window.requestAnimationFrame(animation);
      document.getElementById("forwardButton").remove();
      console.log(myTri[1]);
      document.getElementById("resetButton").hidden = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJteVRyaSIsImFuaW1hdGluZyIsInNwZWVkIiwic2xpY2VGYWN0b3IiLCJyZXNldCIsImluaXRpYWxpemVCdXR0b25zIiwicXNiIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldEVsZW1lbnRCeUlkIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3ljbGVTcGVlZCIsInBsYXlCdXR0b24iLCJzdGFydFFTIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInJlc2V0QnV0dG9uIiwiY2xlYXJDYW52YXMiLCJzdW0iLCJ3aWR0aCIsIm5leHRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInhEaXN0IiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJhbmltYXRpb24iLCJpIiwibGVuZ3RoIiwiZHJhdyIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsImNlaWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJoaWRkZW4iLCJxdWlja1NvcnQiLCJ0aGVuIiwiYXJyIiwic3RhcnQiLCJlbmQiLCJ4U3RhcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInF1aWNrU29ydFBhcnRpdGlvbiIsInBpIiwicmVqZWN0IiwicGl2b3QiLCJqIiwic3dhcEFuZFJlbmRlciIsInNldFRpbWVvdXQiLCJ0ZW1wIiwibWFyayIsInN0YXJ0Q2FudmFzIiwiY2xlYXJEZW1vIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwic3F1YXJlcyIsIlNxdWFyZSIsImN0eCIsImNvb3JkcyIsImZpbGxDb2xvciIsImZvckVhY2giLCJzcSIsInVwZGF0ZVNxdWFyZSIsImRyYXdTcXVhcmUiLCJpbm5lcldpZHRoIiwicmV2ZXJzZUFuaW1hdGlvbiIsImhhbmRsZUtleURvd24iLCJoYW5kbGVNb3VzZURvd24iLCJldmVudCIsIndoaWNoIiwicHJldmVudERlZmF1bHQiLCJzZXRDb2xvciIsIm1hcCIsImNvIiwicG9wIiwic2VsZWN0b3IiLCJoYW5kbGVyIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiZ2V0Q29udGV4dCIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFB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QixFQUF3QkQsUUFBUSxDQUFDRSxFQUFqQztBQUNBOUMsU0FBRyxDQUFDc0QsU0FBSjtBQUNBLFVBQUlwRCxTQUFTLEdBQUcsS0FBSzZCLEtBQXJCOztBQUNBLFVBQUksS0FBS08sTUFBVCxFQUFpQjtBQUNicEMsaUJBQVMsR0FBRyxPQUFaO0FBQ0EsYUFBS29DLE1BQUwsR0FBYyxLQUFkO0FBQ0g7O0FBQ0R0QyxTQUFHLENBQUNvQyxTQUFKLEdBQWdCbEMsU0FBaEIsQ0FyQ1MsQ0FzQ1Q7O0FBQ0FGLFNBQUcsQ0FBQ3VELFdBQUosR0FBa0IsS0FBS3hCLEtBQXZCO0FBQ0EvQixTQUFHLENBQUN3RCxJQUFKO0FBRUF4RCxTQUFHLENBQUN5RCxNQUFKO0FBQ0g7OztXQUVELGdCQUFPO0FBQ0gsV0FBS25CLE1BQUwsR0FBYyxJQUFkO0FBQ0g7OztXQUVELGlCQUFRO0FBQ0osVUFBSTtBQUNBLGFBQUt0QyxHQUFMLENBQVM4QixTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUszRyxNQUFMLENBQVk2QixLQUFyQyxFQUE0QyxLQUFLN0IsTUFBTCxDQUFZc0csTUFBeEQ7QUFFSCxPQUhELENBR0UsT0FBT2lDLENBQVAsRUFBVTtBQUNSbkYsZUFBTyxDQUFDQyxHQUFSLENBQVlrRixDQUFaO0FBQ0g7QUFFSjs7Ozs7O0FBR1VuRyx1RUFBZixFOzs7Ozs7Ozs7OztBQ3JFQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5jb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4gICAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gICAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIG15RnVuYygpIHtcbiAgICBsZXQgbXlUcmkgPSBbXTtcbiAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBsZXQgc3BlZWQgPSA1O1xuICAgIGxldCBzbGljZUZhY3RvciA9IDU7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICAgIHJlc2V0KCk7XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IHFzYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKTtcbiAgICAgICAgcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgICAgICBxc2IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICAgICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiRk9SV0FSRFwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIikuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbik7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICBkb2N1bWVudFxuICAgICAgICAgICAgLy8gICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgICAgICAvLyAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUExBWVwiO1xuICAgICAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJylcbiAgICAgICAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UVMpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCJSRVNFVFwiO1xuICAgICAgICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKVxuICAgICAgICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PSA1KSBzcGVlZCA9IDEwMDtcbiAgICAgICAgZWxzZSBzcGVlZCA9IDU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGluaXRpYWxpemVCdXR0b25zKClcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIG15VHJpID0gW107XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAvLyBwaXhlbCBtYXRoIGZhaWx1cmUsIHNob3VsZCB0cnkgdG8gY29uc3VtZSBldmVyeSBwaXhlbCBvZiBjYW52YXMsIGNhdXNlIHNtYWxsIGFydGlmYWN0IGJ1Z1xuICAgICAgICAvL1RPRE86IHJld29yayBraW5rcyBpbiB0aGlzIGxvZ2ljXG4gICAgICAgIHdoaWxlIChzdW0gPCBjYW52YXMuY2FudmFzLndpZHRoIC0gMikge1xuICAgICAgICAgICAgbGV0IG5leHRXaWR0aCA9IDA7XG4gICAgICAgICAgICBuZXh0V2lkdGggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjU1KSk7XG4gICAgICAgICAgICBsZXQgeERpc3QgPSBuZXh0V2lkdGggLyAoc2xpY2VGYWN0b3IgKiBjYW52YXMuY2FudmFzLndpZHRoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKGNhbnZhcywgYmx1ZVJhbmRvbWl6ZXIobmV4dFdpZHRoLCAyNTUpLCB4RGlzdCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4RGlzdCk7XG4gICAgICAgICAgICAvLyBuZXdUcmkuZHJhdyhzdW0pO1xuICAgICAgICAgICAgc3VtICs9ICh4RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgbXlUcmkucHVzaChuZXdUcmkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdW1cIiwgc3VtKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid2lkdGhcIiwgY2FudmFzLmNhbnZhcy53aWR0aCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdUcmkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IG5leHRXaWR0aCA9IE1hdGguZmxvb3IoY2FudmFzLmNhbnZhcy53aWR0aCAtIHN1bSk7XG4gICAgICAgIC8vIGxldCB4RGlzdCA9IG5leHRXaWR0aCAvIChzbGljZUZhY3RvciAqIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICAvLyBteVRyaS5wdXNoKG5ldyBUcmlhbmdsZShjYW52YXMsIGJsdWVSYW5kb21pemVyKG5leHRXaWR0aCwgMjU1KSwgeERpc3QpKTtcbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gICAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICAgIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgICAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgICAgICBpZiAoc2hhZGVWYWwgPCAxMCkgc2hhZGVWYWwgPSBcIjBcIiArIHNoYWRlVmFsO1xuICAgICAgICBsZXQgclZhbHVlID0gXCIzQ1wiO1xuICAgICAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuXG4gICAgICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhteVRyaS5sZW5ndGgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInF1aWNrc29ydCBmaW5pc2hlZFwiKVxuICAgICAgICAgICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15VHJpWzFdKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29ydGluZ1wiKTtcbiAgICAgICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT4gKHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKSkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSByZXNvbHZlKClcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS54RGlzdDtcbiAgICAgICAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGVuZCkge1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2pdLnhEaXN0IDw9IHBpdm90KSBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2FwQW5kUmVuZGVyKGopIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXAgaGFwcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXBwaW5nXCIsIGFycltpXSwgYXJyW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0ubWFyaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2pdLm1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBlbmQpIHJlc29sdmUoaSk7XG4gICAgICAgICAgICAgICAgfSwgc3BlZWQgKiBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSAvLyBlbnRpcmUgYmxvY2tcblxuLy8gU3F1YXJlIGNvbnN0cnVjdG9yIGdldHMgYSBjYW52YXMgcHJvcGVydHksIGNvb3JkcyAsIGNvbG9yXG5cbmZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuICAgIGNsZWFyRGVtbygpO1xuICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4gICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuICAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbiAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuICAgICAgICAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbiAgICAgICAgXCJ3aW5kb3dcIixcbiAgICAgICAgXCJrZXlkb3duXCIsXG4gICAgICAgIGhhbmRsZUtleURvd24sXG4gICAgXSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgICAgIFwid2luZG93XCIsXG4gICAgICAgIFwibW91c2Vkb3duXCIsXG4gICAgICAgIGhhbmRsZU1vdXNlRG93bixcbiAgICBdKTtcblxuICAgIC8vIDMyIGlzIEFTQ0lJIGZvciBzcGFjZSwgcmFuZG9taXplIGNvbG9yXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbiAgICAgICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9uIGNsaWNrIGFuaW1hdGUgbmV3IHNxdWFyZVxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzcXVhcmVzLnB1c2goXG4gICAgICAgICAgICBuZXcgU3F1YXJlKFxuICAgICAgICAgICAgICAgIGNhbnZhcy5jdHgsXG4gICAgICAgICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbiAgICAgICAgICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2hpbGUgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBbXG4gICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gXCJ3aW5kb3dcIikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiQ0FOVkFTREVNT1wiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiRE9NREVNT1wiKSB7XG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgICk7XG4gICAgfVxufSIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG5cbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRofWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAgICAgICAvLyB9XG5cbiAgICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgLy8gfVxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlOyIsImNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cblxuXG5cbiAgICByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCJjbGFzcyBUcmlhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KHhTdGFydCkge1xuICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgbGV0IGN3ID0gY2FudmFzRWxlbWVudC53aWR0aDtcbiAgICAgICAgbGV0IGNoID0gY2FudmFzRWxlbWVudC5oZWlnaHQgLSA0MDA7XG5cblxuICAgICAgICBsZXQgY3kgPSBjaCAvIDI7XG4gICAgICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgICAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAgICAgICAvL3RoZSBmaXJzdCB2ZXJ0ZXggaXMgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDE6IGN4LFxuICAgICAgICAgICAgeTE6IGN5LFxuICAgICAgICAgICAgLy90aGUgc2Vjb25kIHZlcnRleCBpcyBvbiB0aGUgY2lyY3Vtc2NyaWJlZCBjaXJjbGUgYXQgMCByYWRpYW5zIHdoZXJlIFIgaXMgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlICggYSA9IDMwLCBiPTMwIClcbiAgICAgICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgICAgICB4MjogdGhpcy54U3RhcnQsXG4gICAgICAgICAgICB5MjogY2gsXG4gICAgICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgICAgICAgIHgzOiB0aGlzLnhTdGFydCArICh0aGlzLnhEaXN0ICogY2FudmFzRWxlbWVudC53aWR0aCksXG4gICAgICAgICAgICB5MzogY2gsXG4gICAgICAgIH07XG5cblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngzLCB0cmlhbmdsZS55Myk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBsZXQgZmlsbENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgaWYgKHRoaXMubWFya2VkKSB7XG4gICAgICAgICAgICBmaWxsQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAvLyBwcmUgcHJvZHVjdGlvbiwgbGluZSBkZWZhdWx0cyB0byBibGFja1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBtYXJrKCkge1xuICAgICAgICB0aGlzLm1hcmtlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9