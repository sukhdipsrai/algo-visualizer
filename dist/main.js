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
  var speed = 60;
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
      var bCtrls = document.getElementById("button-controls");
      bCtrls.insertBefore(playButton, bCtrls.firstChild);
    } else document.getElementById("forwardButton").hidden = false;

    if (document.getElementById("sliceButton") === null) {
      var sliceButton = document.createElement("button");
      sliceButton.id = "sliceButton";
      sliceButton.innerHTML = "MORE TRIANGLES";
      sliceButton.addEventListener("click", cycleSlice);

      var _bCtrls = document.getElementById("button-controls");

      _bCtrls.insertBefore(sliceButton, document.getElementById("resetButton"));
    } else document.getElementById("sliceButton").hidden = false;

    if (document.getElementById("resetButton") === null) {
      var resetButton = document.createElement("button");
      resetButton.id = "resetButton";
      resetButton.innerHTML = "RESET";
      resetButton.addEventListener("click", reset);

      var _bCtrls2 = document.getElementById("button-controls");

      _bCtrls2.appendChild(resetButton);
    }
  }

  function cycleSpeed() {
    if (speed == 16) {
      speed = 32;
      document.getElementById("forwardButton").innerHTML = "FASTER";
    } else {
      speed = 16;
      document.getElementById("forwardButton").innerHTML = "SLOWER";
    }
  }

  function cycleSlice() {
    var sliceButton = document.getElementById("sliceButton");

    switch (sliceFactor) {
      case 2:
        sliceFactor = 4;
        reset();
        sliceButton.innerHTML = "EVEN MORE TRIANGLES";
        return;

      case 4:
        sliceFactor = 8;
        reset();
        sliceButton.innerHTML = "MORE TRIANGLES...";
        return;

      case 8:
        sliceFactor = 12;
        reset();
        sliceButton.innerHTML = "I SAID MORE!";
        return;

      case 12:
        sliceFactor = 20;
        reset();
        sliceButton.innerHTML = "MAYBE NOT?";
        return;

      case 20:
        sliceFactor = 2;
        reset();
        sliceButton.innerHTML = "MORE TRIANGLES";
        return;
    }
  }

  function initializeArr() {
    // Divide canvas into slices of equal length
    // Use linear color maping to Triangle.val
    // Triangle.val will be sorted field
    // xDist remains same
    var xDist = 1 / (10 * sliceFactor);

    for (var i = 0; i < 10 * sliceFactor; i++) {
      // 0-255 random number
      var val = Math.floor(Math.random() * 254 + 1);
      var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(val, 255), xDist, val);
      myTri.push(newTri);
    }
  }

  function resetVars() {
    canvas.clearCanvas();
    animating = true;
    myTri = [];
  }

  function reset() {
    initializeButtons();
    resetVars();
    initializeArr();
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

  window.requestAnimationFrame(animation); // window.setTimeout(window.requestAnimationFrame(animation), 18);
  // Logic preformed on G value, keeping R abd B constant

  function blueRandomizer(inputshade, maxVal) {
    var shadeVal = Math.ceil(inputshade / maxVal * 255);
    var rValue = "3C"; //60

    var gValue = shadeVal.toString(16);
    if (shadeVal < 16) gValue = "0" + gValue;
    return "#".concat(rValue + gValue, "ff");
  }

  function startQS() {
    // console.log(myTri.length);
    document.getElementById("playButton").hidden = true;
    document.getElementById("forwardButton").hidden = true;
    document.getElementById("sliceButton").hidden = true;
    var resetButton = document.getElementById("resetButton");
    resetButton.disabled = true;
    resetButton.classList.add("unclickable"); // animating = false;

    quickSort(myTri, 0, myTri.length - 1).then(function () {
      resetButton.disabled = false;
      resetButton.classList.remove("unclickable"); // console.log(myTri);
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
      var pivot = arr[end].val;
      var i = start - 1; // tracking pivot location

      var j = start - 1;
      var timeBuffer = 0;

      while (j < end) {
        j++;
        if (arr[j].val <= pivot) swapAndRender(j);
      }

      function swapAndRender(j) {
        setTimeout(function () {
          i++; // console.log("swap happened");
          // console.log("swapping", arr[i], arr[j]);

          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          arr[i].mark();
          arr[j].mark(); // window.requestAnimationFrame(animation);
        }, j * speed);
        setTimeout(function () {
          arr[i].unmark();
          arr[j].unmark();
          if (j === end) resolve(i);
        }, (j + 1) * speed);
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
      window.removeEventListener(event, handler); // console.log(handler);
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
  function Triangle(canvas, color, xDist, val) {
    _classCallCheck(this, Triangle);

    this.canvas = canvas;
    this.ctx = this.canvas.ctx;
    this.xDist = xDist;
    this.color = color;
    this.marked = false;
    this.val = val;
  }

  _createClass(Triangle, [{
    key: "draw",
    value: function draw(xStart) {
      this.xStart = xStart;
      var canvasElement = document.getElementById("canvas");
      var ctx = this.canvas.ctx;
      var cw = canvasElement.width;
      var ch = canvasElement.height - 200;
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

      if (this.marked) {
        ctx.fillStyle = "red";
      } else {
        ctx.fillStyle = this.color;
      } // pre production, line defaults to black


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
    key: "unmark",
    value: function unmark() {
      this.marked = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJteVRyaSIsImFuaW1hdGluZyIsInNwZWVkIiwic2xpY2VGYWN0b3IiLCJyZXNldCIsImluaXRpYWxpemVCdXR0b25zIiwicXNiIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldEVsZW1lbnRCeUlkIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3ljbGVTcGVlZCIsImhpZGRlbiIsInBsYXlCdXR0b24iLCJzdGFydFFTIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJkaXNhYmxlZCIsInF1aWNrU29ydCIsInRoZW4iLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsImoiLCJ0aW1lQnVmZmVyIiwic3dhcEFuZFJlbmRlciIsInNldFRpbWVvdXQiLCJ0ZW1wIiwibWFyayIsInVubWFyayIsInVucmVnaXN0ZXJFdmVudExpc3RlbmVycyIsInBvcCIsInNlbGVjdG9yIiwiZXZlbnQiLCJoYW5kbGVyIiwiY2xlYXJEZW1vIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwicHJvcHMiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJjdHgiLCJnZXRDb250ZXh0IiwiYXBwZW5kIiwiY2xlYXJSZWN0IiwiY29sb3IiLCJmaWxsQ29sb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsIlNxdWFyZSIsImNvb3JkcyIsImFuaW1hdGlvbkRpciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibWFya2VkIiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtR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QUNMLFdBQUtuQixNQUFMLEdBQWMsSUFBZDtBQUNEOzs7V0FDRCxrQkFBUztBQUNQLFdBQUtBLE1BQUwsR0FBYyxLQUFkO0FBQ0Q7OztXQUVELGlCQUFRO0FBQ04sVUFBSTtBQUNGLGFBQUtkLEdBQUwsQ0FBU0csU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLaEcsTUFBTCxDQUFZK0MsS0FBckMsRUFBNEMsS0FBSy9DLE1BQUwsQ0FBWTBGLE1BQXhEO0FBQ0QsT0FGRCxDQUVFLE9BQU9xQyxDQUFQLEVBQVU7QUFDVkMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQUNGOzs7Ozs7QUFHWXpGLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDckVBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG5jb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuXG5mdW5jdGlvbiBteUZ1bmMoKSB7XG4gIGxldCBteVRyaSA9IFtdO1xuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgbGV0IHNwZWVkID0gNjA7XG4gIGxldCBzbGljZUZhY3RvciA9IDI7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICByZXNldCgpO1xuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIGxldCBxc2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIik7XG4gICAgcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgIHFzYi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgcXNiLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiRkFTVEVSXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKS5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBMQVlcIjtcbiAgICAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UVMpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzbGljZUJ1dHRvbi5pZCA9IFwic2xpY2VCdXR0b25cIjtcbiAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiTU9SRSBUUklBTkdMRVNcIjtcbiAgICAgIHNsaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNsaWNlKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShzbGljZUJ1dHRvbiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCJSRVNFVFwiO1xuICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgIGlmIChzcGVlZCA9PSAxNikge1xuICAgICAgc3BlZWQgPSAzMjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKS5pbm5lckhUTUwgPSBcIkZBU1RFUlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVlZCA9IDE2O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmlubmVySFRNTCA9IFwiU0xPV0VSXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTbGljZSgpIHtcbiAgICBsZXQgc2xpY2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpO1xuICAgIHN3aXRjaCAoc2xpY2VGYWN0b3IpIHtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA0O1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkVWRU4gTU9SRSBUUklBTkdMRVNcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBzbGljZUZhY3RvciA9IDg7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiTU9SRSBUUklBTkdMRVMuLi5cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDEyO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkkgU0FJRCBNT1JFIVwiO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDEyOlxuICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk1BWUJFIE5PVD9cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk1PUkUgVFJJQU5HTEVTXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQXJyKCkge1xuICAgIC8vIERpdmlkZSBjYW52YXMgaW50byBzbGljZXMgb2YgZXF1YWwgbGVuZ3RoXG4gICAgLy8gVXNlIGxpbmVhciBjb2xvciBtYXBpbmcgdG8gVHJpYW5nbGUudmFsXG4gICAgLy8gVHJpYW5nbGUudmFsIHdpbGwgYmUgc29ydGVkIGZpZWxkXG4gICAgLy8geERpc3QgcmVtYWlucyBzYW1lXG4gICAgbGV0IHhEaXN0ID0gMSAvICgxMCAqIHNsaWNlRmFjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwICogc2xpY2VGYWN0b3I7IGkrKykge1xuICAgICAgLy8gMC0yNTUgcmFuZG9tIG51bWJlclxuICAgICAgbGV0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NCArIDEpO1xuXG4gICAgICBjb25zdCBuZXdUcmkgPSBuZXcgVHJpYW5nbGUoY2FudmFzLCBibHVlUmFuZG9taXplcih2YWwsIDI1NSksIHhEaXN0LCB2YWwpO1xuXG4gICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRWYXJzKCkge1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgbXlUcmkgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgcmVzZXRWYXJzKCk7XG4gICAgaW5pdGlhbGl6ZUFycigpO1xuICB9XG5cbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUcmkubGVuZ3RoOyBpKyspIHtcbiAgICAgIG15VHJpW2ldLmRyYXcoc3VtKTtcbiAgICAgIHN1bSArPSBteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGg7XG4gICAgfVxuICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAvLyB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbiksIDE4KTtcbiAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgIGxldCByVmFsdWUgPSBcIjNDXCI7IC8vNjBcbiAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuICAgIGlmIChzaGFkZVZhbCA8IDE2KSBnVmFsdWUgPSBcIjBcIiArIGdWYWx1ZTtcblxuICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgLy8gY29uc29sZS5sb2cobXlUcmkubGVuZ3RoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIC8vIGFuaW1hdGluZyA9IGZhbHNlO1xuICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICByZXNldEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2cobXlUcmkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgIC8vIG5lZWRlZCB0byBzZXR1cCBhIHN0cm9uZyByZXNvbHZlLCBuZWVkIHRvIGNvbWUgYmFjayB0byB0aGlzICwgcmVhc29uOiBmb3IgcGF1c2luZyBhbmltYXRpb25cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcbiAgICAgIGxldCB0aW1lQnVmZmVyID0gMDtcbiAgICAgIHdoaWxlIChqIDwgZW5kKSB7XG4gICAgICAgIGorKztcbiAgICAgICAgaWYgKGFycltqXS52YWwgPD0gcGl2b3QpIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN3YXBBbmRSZW5kZXIoaikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpKys7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXAgaGFwcGVuZWRcIik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwcGluZ1wiLCBhcnJbaV0sIGFycltqXSk7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICBhcnJbaV0ubWFyaygpO1xuICAgICAgICAgIGFycltqXS5tYXJrKCk7XG4gICAgICAgICAgLy8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICB9LCBqICogc3BlZWQpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhcnJbaV0udW5tYXJrKCk7XG4gICAgICAgICAgYXJyW2pdLnVubWFyaygpO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHJlc29sdmUoaSk7XG4gICAgICAgIH0sIChqICsgMSkgKiBzcGVlZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0gLy8gZW50aXJlIGJsb2NrXG5cbi8vIFNxdWFyZSBjb25zdHJ1Y3RvciBnZXRzIGEgY2FudmFzIHByb3BlcnR5LCBjb29yZHMgLCBjb2xvclxuXG4vLyBmdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbi8vICAgICBjbGVhckRlbW8oKTtcbi8vICAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbi8vICAgICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuLy8gICAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbi8vICAgICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4vLyAgICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbi8vICAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4vLyAgICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuLy8gICAgICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuLy8gICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuLy8gICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbi8vICAgICAgICAgICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuXG4vLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwia2V5ZG93blwiLFxuLy8gICAgICAgICBoYW5kbGVLZXlEb3duLFxuLy8gICAgIF0pO1xuXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAgICAgICBcIndpbmRvd1wiLFxuLy8gICAgICAgICBcIm1vdXNlZG93blwiLFxuLy8gICAgICAgICBoYW5kbGVNb3VzZURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICAvLyAzMiBpcyBBU0NJSSBmb3Igc3BhY2UsIHJhbmRvbWl6ZSBjb2xvclxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbi8vICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuLy8gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4vLyAgICAgICAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAvLyBvbiBjbGljayBhbmltYXRlIG5ldyBzcXVhcmVcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbi8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgc3F1YXJlcy5wdXNoKFxuLy8gICAgICAgICAgICAgbmV3IFNxdWFyZShcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuY3R4LFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuLy8gICAgIH1cbi8vIH1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICBsZXQgW1xuICAgICAgc2VsZWN0b3IsXG4gICAgICBldmVudCxcbiAgICAgIGhhbmRsZXIsXG4gICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4gICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICk7XG4gIH1cbn1cbiIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG5cbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRofWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAgICAgICAvLyB9XG5cbiAgICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgLy8gfVxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlOyIsImNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cblxuXG5cbiAgICByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCJjbGFzcyBUcmlhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0LCB2YWwpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgdGhpcy52YWwgPSB2YWw7XG4gIH1cblxuICBkcmF3KHhTdGFydCkge1xuICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gMjAwO1xuXG4gICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgIHZhciB0cmlhbmdsZSA9IHtcbiAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICB4MTogY3gsXG4gICAgICB5MTogY3ksXG4gICAgICAvL3RoZSBzZWNvbmQgdmVydGV4IGlzIG9uIHRoZSBjaXJjdW1zY3JpYmVkIGNpcmNsZSBhdCAwIHJhZGlhbnMgd2hlcmUgUiBpcyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUgKCBhID0gMzAsIGI9MzAgKVxuICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgIHkyOiBjaCxcbiAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgdGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgsXG4gICAgICB5MzogY2gsXG4gICAgfTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgaWYgKHRoaXMubWFya2VkKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgfVxuICAgIC8vIHByZSBwcm9kdWN0aW9uLCBsaW5lIGRlZmF1bHRzIHRvIGJsYWNrXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgbWFyaygpIHtcbiAgICB0aGlzLm1hcmtlZCA9IHRydWU7XG4gIH1cbiAgdW5tYXJrKCkge1xuICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=