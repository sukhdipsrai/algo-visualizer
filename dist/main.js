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
    var resetButton = document.getElementById("resetButton");
    resetButton.disabled = true;
    resetButton.classList.add('unclickable');
    animating = false;
    quickSort(myTri, 0, myTri.length - 1).then(function () {
      animating = true;
      window.requestAnimationFrame(animation);
      resetButton.disabled = false;
      resetButton.classList.remove('unclickable');
    });
  }

  function quickSort(arr, start, end) {
    var xStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
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
// function startCanvas() {
//     clearDemo();
//     unregisterEventListeners();
//     currentStateObj.currentExample = "CANVASDEMO";
//     const canvas = new canvasExample();
//     canvas.createCanvas();
//     const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];
//     let animating = true;
//     const animation = () => {
//         canvas.clearCanvas();
//         if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));
//         squares.forEach((sq) => sq.drawSquare());
//         window.requestAnimationFrame(animation);
//         squares.forEach((sq) => {
//             if (sq.coords[0] + sq.coords[2] > window.innerWidth)
//                 sq.reverseAnimation();
//             if (sq.coords[0] < 0) sq.reverseAnimation();
//         });
//     };
//     window.requestAnimationFrame(animation);
//     window.addEventListener("keydown", handleKeyDown);
//     currentStateObj.currentEventListeners.push([
//         "window",
//         "keydown",
//         handleKeyDown,
//     ]);
//     window.addEventListener("mousedown", handleMouseDown);
//     currentStateObj.currentEventListeners.push([
//         "window",
//         "mousedown",
//         handleMouseDown,
//     ]);
//     // 32 is ASCII for space, randomize color
//     function handleKeyDown(event) {
//         if (event.which === 32) {
//             event.preventDefault();
//             squares.forEach((sq) => sq.reverseAnimation());
//             canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
//         }
//     }
//     // on click animate new square
//     function handleMouseDown(event) {
//         event.preventDefault();
//         squares.push(
//             new Square(
//                 canvas.ctx,
//                 canvas.coords.map((co) => co + 25),
//                 canvas.fillColor
//             )
//         );
//         // animating = !animating;
//     }
// }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwibXlGdW5jIiwiY2FudmFzIiwiY2FudmFzRXhhbXBsZSIsImNyZWF0ZUNhbnZhcyIsIm15VHJpIiwiYW5pbWF0aW5nIiwic3BlZWQiLCJzbGljZUZhY3RvciIsInJlc2V0IiwiaW5pdGlhbGl6ZUJ1dHRvbnMiLCJxc2IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3J3YXJkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsInN0YXJ0UVMiLCJiQ3RybHMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic2xpY2VCdXR0b24iLCJjeWNsZVNsaWNlIiwicmVzZXRCdXR0b24iLCJjbGVhckNhbnZhcyIsInN1bSIsIndpZHRoIiwibmV4dFdpZHRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieERpc3QiLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwicHVzaCIsImFuaW1hdGlvbiIsImkiLCJsZW5ndGgiLCJkcmF3Iiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5wdXRzaGFkZSIsIm1heFZhbCIsInNoYWRlVmFsIiwiY2VpbCIsInJWYWx1ZSIsImdWYWx1ZSIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImRpc2FibGVkIiwicXVpY2tTb3J0IiwidGhlbiIsImFyciIsInN0YXJ0IiwiZW5kIiwieFN0YXJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJxdWlja1NvcnRQYXJ0aXRpb24iLCJwaSIsInJlamVjdCIsInBpdm90IiwiaiIsInN3YXBBbmRSZW5kZXIiLCJzZXRUaW1lb3V0IiwidGVtcCIsIm1hcmsiLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJwb3AiLCJzZWxlY3RvciIsImV2ZW50IiwiaGFuZGxlciIsImNsZWFyRGVtbyIsImJvZHkiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbSIsInByb3BzIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwiZmlsbENvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJTcXVhcmUiLCJjb29yZHMiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtR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Q0UsRUFBakM7QUFDQXRCLFNBQUcsQ0FBQzhCLFNBQUo7QUFDQSxVQUFJekIsU0FBUyxHQUFHLEtBQUtELEtBQXJCOztBQUNBLFVBQUksS0FBS1UsTUFBVCxFQUFpQjtBQUNiVCxpQkFBUyxHQUFHLE9BQVo7QUFDQSxhQUFLUyxNQUFMLEdBQWMsS0FBZDtBQUNIOztBQUNEZCxTQUFHLENBQUNZLFNBQUosR0FBZ0JQLFNBQWhCLENBckNTLENBc0NUOztBQUNBTCxTQUFHLENBQUMrQixXQUFKLEdBQWtCLEtBQUszQixLQUF2QjtBQUNBSixTQUFHLENBQUNnQyxJQUFKO0FBRUFoQyxTQUFHLENBQUNpQyxNQUFKO0FBQ0g7OztXQUVELGdCQUFPO0FBQ0gsV0FBS25CLE1BQUwsR0FBYyxJQUFkO0FBQ0g7OztXQUVELGlCQUFRO0FBQ0osVUFBSTtBQUNBLGFBQUtkLEdBQUwsQ0FBU0csU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLOUYsTUFBTCxDQUFZZ0MsS0FBckMsRUFBNEMsS0FBS2hDLE1BQUwsQ0FBWXdGLE1BQXhEO0FBRUgsT0FIRCxDQUdFLE9BQU9xQyxDQUFQLEVBQVU7QUFDUnRFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZcUUsQ0FBWjtBQUNIO0FBRUo7Ozs7OztBQUdVdEYsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNyRUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICAgIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuICAgIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG5jb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuXG5mdW5jdGlvbiBteUZ1bmMoKSB7XG4gICAgbGV0IG15VHJpID0gW107XG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gICAgbGV0IHNwZWVkID0gMTAwO1xuICAgIGxldCBzbGljZUZhY3RvciA9IDI7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICAgIHJlc2V0KCk7XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IHFzYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKTtcbiAgICAgICAgcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgICAgICBxc2IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICAgICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiRkFTVEVSXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKS5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUExBWVwiO1xuICAgICAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJylcbiAgICAgICAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBzbGljZUJ1dHRvbi5pZCA9ICdzbGljZUJ1dHRvbic7XG4gICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk1PUkUgVFJJQU5HTEVTXCI7XG4gICAgICAgICAgICBzbGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTbGljZSlcbiAgICAgICAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKVxuICAgICAgICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShzbGljZUJ1dHRvbiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSlcbiAgICAgICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGljZUJ1dHRvbicpLmhpZGRlbiA9IGZhbHNlO1xuXG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICByZXNldEJ1dHRvbi5pZCA9IFwicmVzZXRCdXR0b25cIjtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9IFwiUkVTRVRcIjtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldCk7XG4gICAgICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnV0dG9uLWNvbnRyb2xzJylcbiAgICAgICAgICAgIGJDdHJscy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgICAgICBpZiAoc3BlZWQgPT0gNSkge1xuICAgICAgICAgICAgc3BlZWQgPSAxMDA7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yd2FyZEJ1dHRvbicpLmlubmVySFRNTCA9IFwiRkFTVEVSXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGVlZCA9IDU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yd2FyZEJ1dHRvbicpLmlubmVySFRNTCA9IFwiU0xPV0VSXCI7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGljZUJ1dHRvbicpO1xuICAgICAgICBzd2l0Y2ggKHNsaWNlRmFjdG9yKSB7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgc2xpY2VGYWN0b3IgPSA0O1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gKFwiRVZFTiBNT1JFIFRSSUFOR0xFU1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgc2xpY2VGYWN0b3IgPSA4O1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gKFwiTU9SRSBUUklBTkdMRVMuLi5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNsaWNlRmFjdG9yID0gMTI7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSAoXCJJIFNBSUQgTU9SRSFcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gKFwiTUFZQkUgTk9UP1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNsaWNlRmFjdG9yID0gMjtcbiAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IChcIk1PUkUgVFJJQU5HTEVTXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGluaXRpYWxpemVCdXR0b25zKClcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgIG15VHJpID0gW107XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAvLyBwaXhlbCBtYXRoIGZhaWx1cmUsIHNob3VsZCB0cnkgdG8gY29uc3VtZSBldmVyeSBwaXhlbCBvZiBjYW52YXMsIGNhdXNlIHNtYWxsIGFydGlmYWN0IGJ1Z1xuICAgICAgICB3aGlsZSAoc3VtIDwgY2FudmFzLmNhbnZhcy53aWR0aCAtICgyNTUgLyBzbGljZUZhY3RvcikpIHtcbiAgICAgICAgICAgIGxldCBuZXh0V2lkdGggPSAwO1xuICAgICAgICAgICAgbmV4dFdpZHRoID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDI1NCkgKyAxKTtcbiAgICAgICAgICAgIGxldCB4RGlzdCA9IG5leHRXaWR0aCAvIChzbGljZUZhY3RvciAqIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUcmkgPSBuZXcgVHJpYW5nbGUoY2FudmFzLCBibHVlUmFuZG9taXplcihuZXh0V2lkdGgsIDI1NSksIHhEaXN0KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHhEaXN0KTtcbiAgICAgICAgICAgIC8vIG5ld1RyaS5kcmF3KHN1bSk7XG4gICAgICAgICAgICBzdW0gKz0gKHhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aCk7XG4gICAgICAgICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN1bVwiLCBzdW0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3aWR0aFwiLCBjYW52YXMuY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RyaSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRXaWR0aCA9IE1hdGguZmxvb3IoY2FudmFzLmNhbnZhcy53aWR0aCAtIHN1bSkgKiBzbGljZUZhY3RvcjtcbiAgICAgICAgbGV0IHhEaXN0ID0gbmV4dFdpZHRoIC8gKHNsaWNlRmFjdG9yICogY2FudmFzLmNhbnZhcy53aWR0aCk7XG4gICAgICAgIG15VHJpLnB1c2gobmV3IFRyaWFuZ2xlKGNhbnZhcywgYmx1ZVJhbmRvbWl6ZXIobmV4dFdpZHRoLCAyNTUpLCB4RGlzdCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBteVRyaVtpXS5kcmF3KHN1bSk7XG4gICAgICAgICAgICBzdW0gKz0gbXlUcmlbaV0ueERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gICAgZnVuY3Rpb24gYmx1ZVJhbmRvbWl6ZXIoaW5wdXRzaGFkZSwgbWF4VmFsKSB7XG4gICAgICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgICAgIGlmIChzaGFkZVZhbCA8IDEwKSBzaGFkZVZhbCA9IFwiMFwiICsgc2hhZGVWYWw7XG4gICAgICAgIGxldCByVmFsdWUgPSBcIjNDXCI7XG4gICAgICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG5cbiAgICAgICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG15VHJpLmxlbmd0aCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWNlQnV0dG9uJykuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKTtcbiAgICAgICAgcmVzZXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd1bmNsaWNrYWJsZScpO1xuICAgICAgICBhbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgcXVpY2tTb3J0KG15VHJpLCAwLCBteVRyaS5sZW5ndGggLSAxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICByZXNldEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndW5jbGlja2FibGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgICAgICAvLyBuZWVkZWQgdG8gc2V0dXAgYSBzdHJvbmcgcmVzb2x2ZSwgbmVlZCB0byBjb21lIGJhY2sgdG8gdGhpcyAsIHJlYXNvbjogZm9yIHBhdXNpbmcgYW5pbWF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgICAgICAgICAgIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocXVpY2tTb3J0KGFyciwgc3RhcnQsIHBpIC0gMSkudGhlbigoKSA9PiAocXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpKSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHJlc29sdmUoKVxuICAgICAgICB9KVxuXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnhEaXN0O1xuICAgICAgICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICAgICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgZW5kKSB7XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgIGlmIChhcnJbal0ueERpc3QgPD0gcGl2b3QpIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHN3YXBBbmRSZW5kZXIoaikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dhcCBoYXBwZW5lZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dhcHBpbmdcIiwgYXJyW2ldLCBhcnJbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0ubWFyaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2pdLm1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSBlbmQpIHJlc29sdmUoaSk7XG4gICAgICAgICAgICAgICAgfSwgc3BlZWQgKiBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSAvLyBlbnRpcmUgYmxvY2tcblxuLy8gU3F1YXJlIGNvbnN0cnVjdG9yIGdldHMgYSBjYW52YXMgcHJvcGVydHksIGNvb3JkcyAsIGNvbG9yXG5cbi8vIGZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuLy8gICAgIGNsZWFyRGVtbygpO1xuLy8gICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuLy8gICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4vLyAgICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuLy8gICAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbi8vICAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuLy8gICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbi8vICAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4vLyAgICAgICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4vLyAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbi8vICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuLy8gICAgICAgICAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH07XG5cbi8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICAgICAgXCJ3aW5kb3dcIixcbi8vICAgICAgICAgXCJrZXlkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZUtleURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwibW91c2Vkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZU1vdXNlRG93bixcbi8vICAgICBdKTtcblxuLy8gICAgIC8vIDMyIGlzIEFTQ0lJIGZvciBzcGFjZSwgcmFuZG9taXplIGNvbG9yXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuLy8gICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4vLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbi8vICAgICAgICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC8vIG9uIGNsaWNrIGFuaW1hdGUgbmV3IHNxdWFyZVxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBzcXVhcmVzLnB1c2goXG4vLyAgICAgICAgICAgICBuZXcgU3F1YXJlKFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jdHgsXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2hpbGUgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICAgIGxldCBbXG4gICAgICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gXCJ3aW5kb3dcIikge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiQ0FOVkFTREVNT1wiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICAgIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiRE9NREVNT1wiKSB7XG4gICAgICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgICAgICk7XG4gICAgfVxufSIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG5cbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRofWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAgICAgICAvLyB9XG5cbiAgICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgLy8gfVxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlOyIsImNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cblxuXG5cbiAgICByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCJjbGFzcyBUcmlhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkcmF3KHhTdGFydCkge1xuICAgICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgbGV0IGN3ID0gY2FudmFzRWxlbWVudC53aWR0aDtcbiAgICAgICAgbGV0IGNoID0gY2FudmFzRWxlbWVudC5oZWlnaHQgLSA0MDA7XG5cblxuICAgICAgICBsZXQgY3kgPSBjaCAvIDI7XG4gICAgICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgICAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAgICAgICAvL3RoZSBmaXJzdCB2ZXJ0ZXggaXMgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDE6IGN4LFxuICAgICAgICAgICAgeTE6IGN5LFxuICAgICAgICAgICAgLy90aGUgc2Vjb25kIHZlcnRleCBpcyBvbiB0aGUgY2lyY3Vtc2NyaWJlZCBjaXJjbGUgYXQgMCByYWRpYW5zIHdoZXJlIFIgaXMgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlICggYSA9IDMwLCBiPTMwIClcbiAgICAgICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgICAgICB4MjogdGhpcy54U3RhcnQsXG4gICAgICAgICAgICB5MjogY2gsXG4gICAgICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgICAgICAgIHgzOiB0aGlzLnhTdGFydCArICh0aGlzLnhEaXN0ICogY2FudmFzRWxlbWVudC53aWR0aCksXG4gICAgICAgICAgICB5MzogY2gsXG4gICAgICAgIH07XG5cblxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngzLCB0cmlhbmdsZS55Myk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICBsZXQgZmlsbENvbG9yID0gdGhpcy5jb2xvcjtcbiAgICAgICAgaWYgKHRoaXMubWFya2VkKSB7XG4gICAgICAgICAgICBmaWxsQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAvLyBwcmUgcHJvZHVjdGlvbiwgbGluZSBkZWZhdWx0cyB0byBibGFja1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBtYXJrKCkge1xuICAgICAgICB0aGlzLm1hcmtlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9