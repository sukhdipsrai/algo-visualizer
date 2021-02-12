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
  var speed = 100;
  var sliceFactor = 2; // increasing will create more triangle slices

  reset();

  function initializeButtons() {
    var qsb = document.querySelector("#quick-sort");
    qsb.removeEventListener("click", myFunc);
    qsb.classList.add("unclickable");
    qsb.classList.remove("clickable");

    if (document.getElementById("forwardButton") === null) {
      var forwardButton = document.createElement("button");
      forwardButton.id = "forwardButton";
      forwardButton.innerHTML = "FASTER";
      document.getElementById("button-controls").appendChild(forwardButton);
      document.getElementById("forwardButton").addEventListener("click", cycleSpeed);
    } else document.getElementById("playButton").hidden = false;

    if (document.getElementById("playButton") === null) {
      var playButton = document.createElement("button");
      playButton.id = "playButton";
      playButton.innerHTML = "PLAY";
      playButton.addEventListener("click", startQS);
      var bCtrls = document.getElementById('button-controls');
      bCtrls.insertBefore(playButton, bCtrls.firstChild);
    } else document.getElementById("forwardButton").hidden = false;

    if (document.getElementById("sliceButton") === null) {
      var sliceButton = document.createElement("button");
      sliceButton.id = 'sliceButton';
      sliceButton.innerHTML = "MORE TRIANGLES";
      sliceButton.addEventListener("click", cycleSlice);

      var _bCtrls = document.getElementById('button-controls');

      _bCtrls.insertBefore(sliceButton, document.getElementById("resetButton"));
    } else document.getElementById('sliceButton').hidden = false;

    if (document.getElementById("resetButton") === null) {
      var resetButton = document.createElement("button");
      resetButton.id = "resetButton";
      resetButton.innerHTML = "RESET";
      resetButton.addEventListener("click", reset);

      var _bCtrls2 = document.getElementById('button-controls');

      _bCtrls2.appendChild(resetButton);
    }
  }

  function cycleSpeed() {
    if (speed == 5) {
      speed = 100;
      document.getElementById('forwardButton').innerHTML = "FASTER";
    } else {
      speed = 5;
      document.getElementById('forwardButton').innerHTML = "SLOWER";
    }
  }

  function cycleSlice() {
    var sliceButton = document.getElementById('sliceButton');

    switch (sliceFactor) {
      case 2:
        debugger;
        sliceFactor = 4;
        reset();
        sliceButton.innerHTML = "EVEN MORE TRIANGLES";
        return;

      case 4:
        debugger;
        sliceFactor = 8;
        reset();
        sliceButton.innerHTML = "MORE TRIANGLES...";
        return;

      case 8:
        debugger;
        sliceFactor = 12;
        reset();
        sliceButton.innerHTML = "I SAID MORE!";
        return;

      case 12:
        debugger;
        sliceFactor = 20;
        reset();
        sliceButton.innerHTML = "MAYBE NOT?";
        return;

      case 20:
        debugger;
        sliceFactor = 2;
        reset();
        sliceButton.innerHTML = "MORE TRIANGLES";
        return;
    }
  }

  function reset() {
    initializeButtons();
    canvas.clearCanvas();
    animating = true;
    myTri = [];
    var sum = 0; // pixel math failure, should try to consume every pixel of canvas, cause small artifact bug
    //TODO: rework kinks in this logic

    while (sum < canvas.canvas.width - 255 / sliceFactor) {
      var _nextWidth = 0;
      _nextWidth = Math.floor(Math.random() * 254 + 1);

      var _xDist = _nextWidth / (sliceFactor * canvas.canvas.width);

      var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(_nextWidth, 255), _xDist); // console.log(xDist);
      // newTri.draw(sum);

      sum += _xDist * canvas.canvas.width;
      myTri.push(newTri); // console.log("sum", sum);
      // console.log("width", canvas.canvas.width);
      // console.log(newTri);
    }

    var nextWidth = Math.floor(canvas.canvas.width - sum) * sliceFactor;
    var xDist = nextWidth / (sliceFactor * canvas.canvas.width);
    myTri.push(new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(nextWidth, 255), xDist));
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
    document.getElementById("playButton").hidden = true;
    document.getElementById("forwardButton").hidden = true;
    document.getElementById('sliceButton').hidden = true;
    document.getElementById("resetButton").disabled = true;
    animating = false;
    quickSort(myTri, 0, myTri.length - 1).then(function () {
      animating = true;
      window.requestAnimationFrame(animation);
      document.getElementById("resetButton").disabled = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwibXlGdW5jIiwiY2FudmFzIiwiY2FudmFzRXhhbXBsZSIsImNyZWF0ZUNhbnZhcyIsIm15VHJpIiwiYW5pbWF0aW5nIiwic3BlZWQiLCJzbGljZUZhY3RvciIsInJlc2V0IiwiaW5pdGlhbGl6ZUJ1dHRvbnMiLCJxc2IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3J3YXJkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsInN0YXJ0UVMiLCJiQ3RybHMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic2xpY2VCdXR0b24iLCJjeWNsZVNsaWNlIiwicmVzZXRCdXR0b24iLCJjbGVhckNhbnZhcyIsInN1bSIsIndpZHRoIiwibmV4dFdpZHRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieERpc3QiLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwicHVzaCIsImFuaW1hdGlvbiIsImkiLCJsZW5ndGgiLCJkcmF3Iiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5wdXRzaGFkZSIsIm1heFZhbCIsInNoYWRlVmFsIiwiY2VpbCIsInJWYWx1ZSIsImdWYWx1ZSIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImRpc2FibGVkIiwicXVpY2tTb3J0IiwidGhlbiIsImFyciIsInN0YXJ0IiwiZW5kIiwieFN0YXJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJxdWlja1NvcnRQYXJ0aXRpb24iLCJwaSIsInJlamVjdCIsInBpdm90IiwiaiIsInN3YXBBbmRSZW5kZXIiLCJzZXRUaW1lb3V0IiwidGVtcCIsIm1hcmsiLCJzdGFydENhbnZhcyIsImNsZWFyRGVtbyIsInVucmVnaXN0ZXJFdmVudExpc3RlbmVycyIsInNxdWFyZXMiLCJTcXVhcmUiLCJjdHgiLCJjb29yZHMiLCJmaWxsQ29sb3IiLCJmb3JFYWNoIiwic3EiLCJ1cGRhdGVTcXVhcmUiLCJkcmF3U3F1YXJlIiwiaW5uZXJXaWR0aCIsInJldmVyc2VBbmltYXRpb24iLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlTW91c2VEb3duIiwiZXZlbnQiLCJ3aGljaCIsInByZXZlbnREZWZhdWx0Iiwic2V0Q29sb3IiLCJtYXAiLCJjbyIsInBvcCIsInNlbGVjdG9yIiwiaGFuZGxlciIsImJvZHkiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIiwicHJvcHMiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEF0dHJpYnV0ZSIsImdldENvbnRleHQiLCJhcHBlbmQiLCJjbGVhclJlY3QiLCJjb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIiwiYW5pbWF0aW9uRGlyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtYXJrZWQiLCJjYW52YXNFbGVtZW50IiwiY3ciLCJjaCIsImN5IiwiY3giLCJ0cmlhbmdsZSIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZVN0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QWhCLENBckNTLENBc0NUOztBQUNBRixTQUFHLENBQUN1RCxXQUFKLEdBQWtCLEtBQUt4QixLQUF2QjtBQUNBL0IsU0FBRyxDQUFDd0QsSUFBSjtBQUVBeEQsU0FBRyxDQUFDeUQsTUFBSjtBQUNIOzs7V0FFRCxnQkFBTztBQUNILFdBQUtuQixNQUFMLEdBQWMsSUFBZDtBQUNIOzs7V0FFRCxpQkFBUTtBQUNKLFVBQUk7QUFDQSxhQUFLdEMsR0FBTCxDQUFTOEIsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLOUcsTUFBTCxDQUFZZ0MsS0FBckMsRUFBNEMsS0FBS2hDLE1BQUwsQ0FBWXlHLE1BQXhEO0FBRUgsT0FIRCxDQUdFLE9BQU9pQyxDQUFQLEVBQVU7QUFDUm5GLGVBQU8sQ0FBQ0MsR0FBUixDQUFZa0YsQ0FBWjtBQUNIO0FBRUo7Ozs7OztBQUdVbkcsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNyRUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICAgIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuICAgIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG5jb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuXG5mdW5jdGlvbiBteUZ1bmMoKSB7XG4gICAgbGV0IG15VHJpID0gW107XG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gICAgbGV0IHNwZWVkID0gMTAwO1xuICAgIGxldCBzbGljZUZhY3RvciA9IDI7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICAgIHJlc2V0KCk7XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IHFzYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKTtcbiAgICAgICAgcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgICAgICBxc2IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICAgICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiRkFTVEVSXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKS5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUExBWVwiO1xuICAgICAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJylcbiAgICAgICAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBzbGljZUJ1dHRvbi5pZCA9ICdzbGljZUJ1dHRvbic7XG4gICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk1PUkUgVFJJQU5HTEVTXCI7XG4gICAgICAgICAgICBzbGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTbGljZSlcbiAgICAgICAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKVxuICAgICAgICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShzbGljZUJ1dHRvbiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSlcbiAgICAgICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGljZUJ1dHRvbicpLmhpZGRlbiA9IGZhbHNlO1xuXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICByZXNldEJ1dHRvbi5pZCA9IFwicmVzZXRCdXR0b25cIjtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9IFwiUkVTRVRcIjtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldCk7XG4gICAgICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJylcbiAgICAgICAgICAgIGJDdHJscy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgICAgICBpZiAoc3BlZWQgPT0gNSkge1xuICAgICAgICAgICAgc3BlZWQgPSAxMDA7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yd2FyZEJ1dHRvbicpLmlubmVySFRNTCA9IFwiRkFTVEVSXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGVlZCA9IDU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yd2FyZEJ1dHRvbicpLmlubmVySFRNTCA9IFwiU0xPV0VSXCI7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGljZUJ1dHRvbicpO1xuICAgICAgICBzd2l0Y2ggKHNsaWNlRmFjdG9yKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgc2xpY2VGYWN0b3IgPSA0O1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gKFwiRVZFTiBNT1JFIFRSSUFOR0xFU1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgc2xpY2VGYWN0b3IgPSA4O1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gKFwiTU9SRSBUUklBTkdMRVMuLi5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNsaWNlRmFjdG9yID0gMTI7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSAoXCJJIFNBSUQgTU9SRSFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gKFwiTUFZQkUgTk9UP1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNsaWNlRmFjdG9yID0gMjtcbiAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IChcIk1PUkUgVFJJQU5HTEVTXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGluaXRpYWxpemVCdXR0b25zKClcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIG15VHJpID0gW107XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAvLyBwaXhlbCBtYXRoIGZhaWx1cmUsIHNob3VsZCB0cnkgdG8gY29uc3VtZSBldmVyeSBwaXhlbCBvZiBjYW52YXMsIGNhdXNlIHNtYWxsIGFydGlmYWN0IGJ1Z1xuICAgICAgICAvL1RPRE86IHJld29yayBraW5rcyBpbiB0aGlzIGxvZ2ljXG4gICAgICAgIHdoaWxlIChzdW0gPCBjYW52YXMuY2FudmFzLndpZHRoIC0gKDI1NSAvIHNsaWNlRmFjdG9yKSkge1xuICAgICAgICAgICAgbGV0IG5leHRXaWR0aCA9IDA7XG4gICAgICAgICAgICBuZXh0V2lkdGggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjU0KSArIDEpO1xuICAgICAgICAgICAgbGV0IHhEaXN0ID0gbmV4dFdpZHRoIC8gKHNsaWNlRmFjdG9yICogY2FudmFzLmNhbnZhcy53aWR0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShjYW52YXMsIGJsdWVSYW5kb21pemVyKG5leHRXaWR0aCwgMjU1KSwgeERpc3QpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeERpc3QpO1xuICAgICAgICAgICAgLy8gbmV3VHJpLmRyYXcoc3VtKTtcbiAgICAgICAgICAgIHN1bSArPSAoeERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIsIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VHJpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dFdpZHRoID0gTWF0aC5mbG9vcihjYW52YXMuY2FudmFzLndpZHRoIC0gc3VtKSAqIHNsaWNlRmFjdG9yO1xuICAgICAgICBsZXQgeERpc3QgPSBuZXh0V2lkdGggLyAoc2xpY2VGYWN0b3IgKiBjYW52YXMuY2FudmFzLndpZHRoKTtcbiAgICAgICAgbXlUcmkucHVzaChuZXcgVHJpYW5nbGUoY2FudmFzLCBibHVlUmFuZG9taXplcihuZXh0V2lkdGgsIDI1NSksIHhEaXN0KSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUcmkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG15VHJpW2ldLmRyYXcoc3VtKTtcbiAgICAgICAgICAgIHN1bSArPSBteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAgIC8vIExvZ2ljIHByZWZvcm1lZCBvbiBHIHZhbHVlLCBrZWVwaW5nIFIgYWJkIEIgY29uc3RhbnRcbiAgICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICAgICAgbGV0IHNoYWRlVmFsID0gTWF0aC5jZWlsKChpbnB1dHNoYWRlIC8gbWF4VmFsKSAqIDI1NSk7XG5cbiAgICAgICAgaWYgKHNoYWRlVmFsIDwgMTApIHNoYWRlVmFsID0gXCIwXCIgKyBzaGFkZVZhbDtcbiAgICAgICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjtcbiAgICAgICAgbGV0IGdWYWx1ZSA9IHNoYWRlVmFsLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICByZXR1cm4gYCMke3JWYWx1ZSArIGdWYWx1ZX1mZmA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRRUygpIHtcbiAgICAgICAgY29uc29sZS5sb2cobXlUcmkubGVuZ3RoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xpY2VCdXR0b24nKS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29ydGluZ1wiKTtcbiAgICAgICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT4gKHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKSkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSByZXNvbHZlKClcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS54RGlzdDtcbiAgICAgICAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGVuZCkge1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2pdLnhEaXN0IDw9IHBpdm90KSBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2FwQW5kUmVuZGVyKGopIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXAgaGFwcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXBwaW5nXCIsIGFycltpXSwgYXJyW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLm1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycltqXS5tYXJrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZW5kKSByZXNvbHZlKGkpO1xuICAgICAgICAgICAgICAgIH0sIHNwZWVkICogaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0gLy8gZW50aXJlIGJsb2NrXG5cbi8vIFNxdWFyZSBjb25zdHJ1Y3RvciBnZXRzIGEgY2FudmFzIHByb3BlcnR5LCBjb29yZHMgLCBjb2xvclxuXG5mdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbiAgICBjbGVhckRlbW8oKTtcbiAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuICAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbiAgICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbiAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbiAgICAgICAgICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4gICAgICAgIFwid2luZG93XCIsXG4gICAgICAgIFwia2V5ZG93blwiLFxuICAgICAgICBoYW5kbGVLZXlEb3duLFxuICAgIF0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbiAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuICAgICAgICBcIndpbmRvd1wiLFxuICAgICAgICBcIm1vdXNlZG93blwiLFxuICAgICAgICBoYW5kbGVNb3VzZURvd24sXG4gICAgXSk7XG5cbiAgICAvLyAzMiBpcyBBU0NJSSBmb3Igc3BhY2UsIHJhbmRvbWl6ZSBjb2xvclxuICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4gICAgICAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbiBjbGljayBhbmltYXRlIG5ldyBzcXVhcmVcbiAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3F1YXJlcy5wdXNoKFxuICAgICAgICAgICAgbmV3IFNxdWFyZShcbiAgICAgICAgICAgICAgICBjYW52YXMuY3R4LFxuICAgICAgICAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4gICAgICAgICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICBsZXQgW1xuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICApO1xuICAgIH1cbn0iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gICAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIC8vIH1cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTsiLCJjbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG5cblxuXG4gICAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7IiwiY2xhc3MgVHJpYW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdyh4U3RhcnQpIHtcbiAgICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gNDAwO1xuXG5cbiAgICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgxOiBjeCxcbiAgICAgICAgICAgIHkxOiBjeSxcbiAgICAgICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICAgICAgeTI6IGNoLFxuICAgICAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgICAgICB4MzogdGhpcy54U3RhcnQgKyAodGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgpLFxuICAgICAgICAgICAgeTM6IGNoLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgbGV0IGZpbGxDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlZCkge1xuICAgICAgICAgICAgZmlsbENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgLy8gcHJlIHByb2R1Y3Rpb24sIGxpbmUgZGVmYXVsdHMgdG8gYmxhY2tcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgbWFyaygpIHtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==