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
    var rValue = "3C"; //60

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwibXlGdW5jIiwiY2FudmFzIiwiY2FudmFzRXhhbXBsZSIsImNyZWF0ZUNhbnZhcyIsIm15VHJpIiwiYW5pbWF0aW5nIiwic3BlZWQiLCJzbGljZUZhY3RvciIsInJlc2V0IiwiaW5pdGlhbGl6ZUJ1dHRvbnMiLCJxc2IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3J3YXJkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsInN0YXJ0UVMiLCJiQ3RybHMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic2xpY2VCdXR0b24iLCJjeWNsZVNsaWNlIiwicmVzZXRCdXR0b24iLCJjbGVhckNhbnZhcyIsInN1bSIsIndpZHRoIiwibmV4dFdpZHRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieERpc3QiLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwicHVzaCIsImFuaW1hdGlvbiIsImkiLCJsZW5ndGgiLCJkcmF3Iiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5wdXRzaGFkZSIsIm1heFZhbCIsInNoYWRlVmFsIiwiY2VpbCIsInJWYWx1ZSIsImdWYWx1ZSIsInRvU3RyaW5nIiwiY29uc29sZSIsImxvZyIsImRpc2FibGVkIiwicXVpY2tTb3J0IiwidGhlbiIsImFyciIsInN0YXJ0IiwiZW5kIiwieFN0YXJ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJxdWlja1NvcnRQYXJ0aXRpb24iLCJwaSIsInJlamVjdCIsInBpdm90IiwiaiIsInN3YXBBbmRSZW5kZXIiLCJzZXRUaW1lb3V0IiwidGVtcCIsIm1hcmsiLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJwb3AiLCJzZWxlY3RvciIsImV2ZW50IiwiaGFuZGxlciIsImNsZWFyRGVtbyIsImJvZHkiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlbSIsInByb3BzIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImFwcGVuZCIsImNsZWFyUmVjdCIsImNvbG9yIiwiZmlsbENvbG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJTcXVhcmUiLCJjb29yZHMiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtR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QUF3QkQsUUFBUSxDQUFDRSxFQUFqQztBQUNBdEIsU0FBRyxDQUFDOEIsU0FBSjtBQUNBLFVBQUl6QixTQUFTLEdBQUcsS0FBS0QsS0FBckI7O0FBQ0EsVUFBSSxLQUFLVSxNQUFULEVBQWlCO0FBQ2JULGlCQUFTLEdBQUcsT0FBWjtBQUNBLGFBQUtTLE1BQUwsR0FBYyxLQUFkO0FBQ0g7O0FBQ0RkLFNBQUcsQ0FBQ1ksU0FBSixHQUFnQlAsU0FBaEIsQ0FyQ1MsQ0FzQ1Q7O0FBQ0FMLFNBQUcsQ0FBQytCLFdBQUosR0FBa0IsS0FBSzNCLEtBQXZCO0FBQ0FKLFNBQUcsQ0FBQ2dDLElBQUo7QUFFQWhDLFNBQUcsQ0FBQ2lDLE1BQUo7QUFDSDs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLbkIsTUFBTCxHQUFjLElBQWQ7QUFDSDs7O1dBRUQsaUJBQVE7QUFDSixVQUFJO0FBQ0EsYUFBS2QsR0FBTCxDQUFTRyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUs5RixNQUFMLENBQVlnQyxLQUFyQyxFQUE0QyxLQUFLaEMsTUFBTCxDQUFZd0YsTUFBeEQ7QUFFSCxPQUhELENBR0UsT0FBT3FDLENBQVAsRUFBVTtBQUNSdEUsZUFBTyxDQUFDQyxHQUFSLENBQVlxRSxDQUFaO0FBQ0g7QUFFSjs7Ozs7O0FBR1V0Rix1RUFBZixFOzs7Ozs7Ozs7OztBQ3JFQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5jb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4gICAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gICAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIG15RnVuYygpIHtcbiAgICBsZXQgbXlUcmkgPSBbXTtcbiAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBsZXQgc3BlZWQgPSAxMDA7XG4gICAgbGV0IHNsaWNlRmFjdG9yID0gMjsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG4gICAgcmVzZXQoKTtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgICAgICBsZXQgcXNiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpO1xuICAgICAgICBxc2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG4gICAgICAgIHFzYi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgICAgIHFzYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2thYmxlXCIpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgICAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCJGQVNURVJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICAgICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIjtcbiAgICAgICAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCJQTEFZXCI7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFFTKTtcbiAgICAgICAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKVxuICAgICAgICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShwbGF5QnV0dG9uLCBiQ3RybHMuZmlyc3RDaGlsZCk7XG4gICAgICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHNsaWNlQnV0dG9uLmlkID0gJ3NsaWNlQnV0dG9uJztcbiAgICAgICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiTU9SRSBUUklBTkdMRVNcIjtcbiAgICAgICAgICAgIHNsaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNsaWNlKVxuICAgICAgICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbi1jb250cm9scycpXG4gICAgICAgICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHNsaWNlQnV0dG9uLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpKVxuICAgICAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWNlQnV0dG9uJykuaGlkZGVuID0gZmFsc2U7XG5cblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCJSRVNFVFwiO1xuICAgICAgICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXR0b24tY29udHJvbHMnKVxuICAgICAgICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PSA1KSB7XG4gICAgICAgICAgICBzcGVlZCA9IDEwMDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3J3YXJkQnV0dG9uJykuaW5uZXJIVE1MID0gXCJGQVNURVJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwZWVkID0gNTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3J3YXJkQnV0dG9uJykuaW5uZXJIVE1MID0gXCJTTE9XRVJcIjtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3ljbGVTbGljZSgpIHtcbiAgICAgICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWNlQnV0dG9uJyk7XG4gICAgICAgIHN3aXRjaCAoc2xpY2VGYWN0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBzbGljZUZhY3RvciA9IDQ7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSAoXCJFVkVOIE1PUkUgVFJJQU5HTEVTXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICBzbGljZUZhY3RvciA9IDg7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSAoXCJNT1JFIFRSSUFOR0xFUy4uLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgc2xpY2VGYWN0b3IgPSAxMjtcbiAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IChcIkkgU0FJRCBNT1JFIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgIHNsaWNlRmFjdG9yID0gMjA7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSAoXCJNQVlCRSBOT1Q/XCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgc2xpY2VGYWN0b3IgPSAyO1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gKFwiTU9SRSBUUklBTkdMRVNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKVxuICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICAgICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgICAgbXlUcmkgPSBbXTtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIC8vIHBpeGVsIG1hdGggZmFpbHVyZSwgc2hvdWxkIHRyeSB0byBjb25zdW1lIGV2ZXJ5IHBpeGVsIG9mIGNhbnZhcywgY2F1c2Ugc21hbGwgYXJ0aWZhY3QgYnVnXG4gICAgICAgIHdoaWxlIChzdW0gPCBjYW52YXMuY2FudmFzLndpZHRoIC0gKDI1NSAvIHNsaWNlRmFjdG9yKSkge1xuICAgICAgICAgICAgbGV0IG5leHRXaWR0aCA9IDA7XG4gICAgICAgICAgICBuZXh0V2lkdGggPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjU0KSArIDEpO1xuICAgICAgICAgICAgbGV0IHhEaXN0ID0gbmV4dFdpZHRoIC8gKHNsaWNlRmFjdG9yICogY2FudmFzLmNhbnZhcy53aWR0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShjYW52YXMsIGJsdWVSYW5kb21pemVyKG5leHRXaWR0aCwgMjU1KSwgeERpc3QpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeERpc3QpO1xuICAgICAgICAgICAgLy8gbmV3VHJpLmRyYXcoc3VtKTtcbiAgICAgICAgICAgIHN1bSArPSAoeERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoKTtcbiAgICAgICAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3VtXCIsIHN1bSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIndpZHRoXCIsIGNhbnZhcy5jYW52YXMud2lkdGgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VHJpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dFdpZHRoID0gTWF0aC5mbG9vcihjYW52YXMuY2FudmFzLndpZHRoIC0gc3VtKSAqIHNsaWNlRmFjdG9yO1xuICAgICAgICBsZXQgeERpc3QgPSBuZXh0V2lkdGggLyAoc2xpY2VGYWN0b3IgKiBjYW52YXMuY2FudmFzLndpZHRoKTtcbiAgICAgICAgbXlUcmkucHVzaChuZXcgVHJpYW5nbGUoY2FudmFzLCBibHVlUmFuZG9taXplcihuZXh0V2lkdGgsIDI1NSksIHhEaXN0KSk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUcmkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG15VHJpW2ldLmRyYXcoc3VtKTtcbiAgICAgICAgICAgIHN1bSArPSBteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAgIC8vIExvZ2ljIHByZWZvcm1lZCBvbiBHIHZhbHVlLCBrZWVwaW5nIFIgYWJkIEIgY29uc3RhbnRcbiAgICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICAgICAgbGV0IHNoYWRlVmFsID0gTWF0aC5jZWlsKChpbnB1dHNoYWRlIC8gbWF4VmFsKSAqIDI1NSk7XG5cbiAgICAgICAgaWYgKHNoYWRlVmFsIDwgMTApIHNoYWRlVmFsID0gXCIwXCIgKyBzaGFkZVZhbDtcbiAgICAgICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgICAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuXG4gICAgICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhteVRyaS5sZW5ndGgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGljZUJ1dHRvbicpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgICAgIHJlc2V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndW5jbGlja2FibGUnKTtcbiAgICAgICAgYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICAgICAgcmVzZXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3VuY2xpY2thYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAgICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT4gKHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKSkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSByZXNvbHZlKClcbiAgICAgICAgfSlcblxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS54RGlzdDtcbiAgICAgICAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGVuZCkge1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2pdLnhEaXN0IDw9IHBpdm90KSBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2FwQW5kUmVuZGVyKGopIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXAgaGFwcGVuZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXBwaW5nXCIsIGFycltpXSwgYXJyW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLm1hcmsoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycltqXS5tYXJrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gZW5kKSByZXNvbHZlKGkpO1xuICAgICAgICAgICAgICAgIH0sIHNwZWVkICogaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0gLy8gZW50aXJlIGJsb2NrXG5cbi8vIFNxdWFyZSBjb25zdHJ1Y3RvciBnZXRzIGEgY2FudmFzIHByb3BlcnR5LCBjb29yZHMgLCBjb2xvclxuXG4vLyBmdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbi8vICAgICBjbGVhckRlbW8oKTtcbi8vICAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbi8vICAgICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuLy8gICAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbi8vICAgICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4vLyAgICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbi8vICAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4vLyAgICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuLy8gICAgICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuLy8gICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuLy8gICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbi8vICAgICAgICAgICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuXG4vLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwia2V5ZG93blwiLFxuLy8gICAgICAgICBoYW5kbGVLZXlEb3duLFxuLy8gICAgIF0pO1xuXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAgICAgICBcIndpbmRvd1wiLFxuLy8gICAgICAgICBcIm1vdXNlZG93blwiLFxuLy8gICAgICAgICBoYW5kbGVNb3VzZURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICAvLyAzMiBpcyBBU0NJSSBmb3Igc3BhY2UsIHJhbmRvbWl6ZSBjb2xvclxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbi8vICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuLy8gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4vLyAgICAgICAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAvLyBvbiBjbGljayBhbmltYXRlIG5ldyBzcXVhcmVcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbi8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgc3F1YXJlcy5wdXNoKFxuLy8gICAgICAgICAgICAgbmV3IFNxdWFyZShcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuY3R4LFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuLy8gICAgIH1cbi8vIH1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgICAgICBsZXQgW1xuICAgICAgICAgICAgc2VsZWN0b3IsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgICAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICAgICApO1xuICAgIH1cbn0iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gICAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIC8vIH1cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTsiLCJjbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG5cblxuXG4gICAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7IiwiY2xhc3MgVHJpYW5nbGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZHJhdyh4U3RhcnQpIHtcbiAgICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gNDAwO1xuXG5cbiAgICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgxOiBjeCxcbiAgICAgICAgICAgIHkxOiBjeSxcbiAgICAgICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICAgICAgeTI6IGNoLFxuICAgICAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgICAgICB4MzogdGhpcy54U3RhcnQgKyAodGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgpLFxuICAgICAgICAgICAgeTM6IGNoLFxuICAgICAgICB9O1xuXG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgbGV0IGZpbGxDb2xvciA9IHRoaXMuY29sb3I7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlZCkge1xuICAgICAgICAgICAgZmlsbENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgLy8gcHJlIHByb2R1Y3Rpb24sIGxpbmUgZGVmYXVsdHMgdG8gYmxhY2tcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgbWFyaygpIHtcbiAgICAgICAgdGhpcy5tYXJrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==