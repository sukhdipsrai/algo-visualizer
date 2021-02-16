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
  var speed = 50;
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
    if (speed == 5) {
      speed = 50;
      document.getElementById("forwardButton").innerHTML = "FASTER";
    } else {
      speed = 5;
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
          i++;

          if (i !== j) {
            // console.log("swap happened");
            // console.log("swapping", arr[i], arr[j]);
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            arr[i].mark();
            arr[j].mark(); // window.requestAnimationFrame(animation);
          }

          if (j === end) resolve(i);
        }, j * speed);
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

      if (this.marked) {
        ctx.fillStyle = "red";
        this.marked = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm15RnVuYyIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJteVRyaSIsImFuaW1hdGluZyIsInNwZWVkIiwic2xpY2VGYWN0b3IiLCJyZXNldCIsImluaXRpYWxpemVCdXR0b25zIiwicXNiIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldEVsZW1lbnRCeUlkIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3ljbGVTcGVlZCIsImhpZGRlbiIsInBsYXlCdXR0b24iLCJzdGFydFFTIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJkaXNhYmxlZCIsInF1aWNrU29ydCIsInRoZW4iLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsImoiLCJ0aW1lQnVmZmVyIiwic3dhcEFuZFJlbmRlciIsInNldFRpbWVvdXQiLCJ0ZW1wIiwibWFyayIsInVucmVnaXN0ZXJFdmVudExpc3RlbmVycyIsInBvcCIsInNlbGVjdG9yIiwiZXZlbnQiLCJoYW5kbGVyIiwiY2xlYXJEZW1vIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtIiwicHJvcHMiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJjdHgiLCJnZXRDb250ZXh0IiwiYXBwZW5kIiwiY2xlYXJSZWN0IiwiY29sb3IiLCJmaWxsQ29sb3IiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsIlNxdWFyZSIsImNvb3JkcyIsImFuaW1hdGlvbkRpciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibWFya2VkIiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QUsvRixNQUFMLENBQVkrQyxLQUFyQyxFQUE0QyxLQUFLL0MsTUFBTCxDQUFZeUYsTUFBeEQ7QUFFSCxPQUhELENBR0UsT0FBT3FDLENBQVAsRUFBVTtBQUNSQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNIO0FBRUo7Ozs7OztBQUdVeEYsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUN2RUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICAgIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuICAgIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG5jb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuXG5mdW5jdGlvbiBteUZ1bmMoKSB7XG4gICAgbGV0IG15VHJpID0gW107XG4gICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gICAgbGV0IHNwZWVkID0gNTA7XG4gICAgbGV0IHNsaWNlRmFjdG9yID0gMjsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG4gICAgcmVzZXQoKTtcblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgICAgICBsZXQgcXNiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpO1xuICAgICAgICBxc2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG4gICAgICAgIHFzYi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgICAgIHFzYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2thYmxlXCIpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgICAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCJGQVNURVJcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICAgICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICAgICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUExBWVwiO1xuICAgICAgICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgICAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgc2xpY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgc2xpY2VCdXR0b24uaWQgPSBcInNsaWNlQnV0dG9uXCI7XG4gICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk1PUkUgVFJJQU5HTEVTXCI7XG4gICAgICAgICAgICBzbGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTbGljZSk7XG4gICAgICAgICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgICAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUoc2xpY2VCdXR0b24sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikpO1xuICAgICAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCJSRVNFVFwiO1xuICAgICAgICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PSA1KSB7XG4gICAgICAgICAgICBzcGVlZCA9IDUwO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmlubmVySFRNTCA9IFwiRkFTVEVSXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcGVlZCA9IDU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikuaW5uZXJIVE1MID0gXCJTTE9XRVJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIik7XG4gICAgICAgIHN3aXRjaCAoc2xpY2VGYWN0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBzbGljZUZhY3RvciA9IDQ7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIkVWRU4gTU9SRSBUUklBTkdMRVNcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgc2xpY2VGYWN0b3IgPSA4O1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCJNT1JFIFRSSUFOR0xFUy4uLlwiO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBzbGljZUZhY3RvciA9IDEyO1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCJJIFNBSUQgTU9SRSFcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgIHNsaWNlRmFjdG9yID0gMjA7XG4gICAgICAgICAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk1BWUJFIE5PVD9cIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgIHNsaWNlRmFjdG9yID0gMjtcbiAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiTU9SRSBUUklBTkdMRVNcIjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQXJyKCkge1xuICAgICAgICAvLyBEaXZpZGUgY2FudmFzIGludG8gc2xpY2VzIG9mIGVxdWFsIGxlbmd0aFxuICAgICAgICAvLyBVc2UgbGluZWFyIGNvbG9yIG1hcGluZyB0byBUcmlhbmdsZS52YWxcbiAgICAgICAgLy8gVHJpYW5nbGUudmFsIHdpbGwgYmUgc29ydGVkIGZpZWxkXG4gICAgICAgIC8vIHhEaXN0IHJlbWFpbnMgc2FtZVxuICAgICAgICBsZXQgeERpc3QgPSAxIC8gKDEwICogc2xpY2VGYWN0b3IpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwICogc2xpY2VGYWN0b3I7IGkrKykge1xuICAgICAgICAgICAgLy8gMC0yNTUgcmFuZG9tIG51bWJlclxuICAgICAgICAgICAgbGV0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NCArIDEpO1xuXG4gICAgICAgICAgICBjb25zdCBuZXdUcmkgPSBuZXcgVHJpYW5nbGUoY2FudmFzLCBibHVlUmFuZG9taXplcih2YWwsIDI1NSksIHhEaXN0LCB2YWwpO1xuXG4gICAgICAgICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFZhcnMoKSB7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICBteVRyaSA9IFtdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBpbml0aWFsaXplQnV0dG9ucygpO1xuICAgICAgICByZXNldFZhcnMoKTtcbiAgICAgICAgaW5pdGlhbGl6ZUFycigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgICAgbGV0IHN1bSA9IDA7XG4gICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBteVRyaVtpXS5kcmF3KHN1bSk7XG4gICAgICAgICAgICBzdW0gKz0gbXlUcmlbaV0ueERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgLy8gd2luZG93LnNldFRpbWVvdXQod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pLCAxOCk7XG4gICAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICAgIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgICAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgICAgICBsZXQgclZhbHVlID0gXCIzQ1wiOyAvLzYwXG4gICAgICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChzaGFkZVZhbCA8IDE2KSBnVmFsdWUgPSBcIjBcIiArIGdWYWx1ZTtcblxuICAgICAgICByZXR1cm4gYCMke3JWYWx1ZSArIGdWYWx1ZX1mZmA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRRUygpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobXlUcmkubGVuZ3RoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgICAgIHJlc2V0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICAvLyBhbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgcXVpY2tTb3J0KG15VHJpLCAwLCBteVRyaS5sZW5ndGggLSAxKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHJlc2V0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhteVRyaSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAgICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgICAgICAgICAgIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgICAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG4gICAgICAgICAgICBsZXQgdGltZUJ1ZmZlciA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGVuZCkge1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICBpZiAoYXJyW2pdLnZhbCA8PSBwaXZvdCkgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3dhcEFuZFJlbmRlcihqKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwIGhhcHBlbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwcGluZ1wiLCBhcnJbaV0sIGFycltqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycltpXS5tYXJrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJbal0ubWFyaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IGVuZCkgcmVzb2x2ZShpKTtcbiAgICAgICAgICAgICAgICB9LCBqICogc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IC8vIGVudGlyZSBibG9ja1xuXG4vLyBTcXVhcmUgY29uc3RydWN0b3IgZ2V0cyBhIGNhbnZhcyBwcm9wZXJ0eSwgY29vcmRzICwgY29sb3JcblxuLy8gZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4vLyAgICAgY2xlYXJEZW1vKCk7XG4vLyAgICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4vLyAgICAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbi8vICAgICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4vLyAgICAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuLy8gICAgIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4vLyAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuLy8gICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbi8vICAgICAgICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbi8vICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EuZHJhd1NxdWFyZSgpKTtcbi8vICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuLy8gICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4vLyAgICAgICAgICAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSA8IDApIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfTtcblxuLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAgICAgICBcIndpbmRvd1wiLFxuLy8gICAgICAgICBcImtleWRvd25cIixcbi8vICAgICAgICAgaGFuZGxlS2V5RG93bixcbi8vICAgICBdKTtcblxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICAgICAgXCJ3aW5kb3dcIixcbi8vICAgICAgICAgXCJtb3VzZWRvd25cIixcbi8vICAgICAgICAgaGFuZGxlTW91c2VEb3duLFxuLy8gICAgIF0pO1xuXG4vLyAgICAgLy8gMzIgaXMgQVNDSUkgZm9yIHNwYWNlLCByYW5kb21pemUgY29sb3Jcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4vLyAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbi8vICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuLy8gICAgICAgICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gb24gY2xpY2sgYW5pbWF0ZSBuZXcgc3F1YXJlXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4vLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgIHNxdWFyZXMucHVzaChcbi8vICAgICAgICAgICAgIG5ldyBTcXVhcmUoXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmN0eCxcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuY29vcmRzLm1hcCgoY28pID0+IGNvICsgMjUpLFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsQ29sb3Jcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbi8vICAgICB9XG4vLyB9XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICAgICAgbGV0IFtcbiAgICAgICAgICAgIHNlbGVjdG9yLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRlbW8oKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbiAgICAgICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKV0uZm9yRWFjaCgoZWxlbSkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICAgICAgKTtcbiAgICB9XG59IiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgY29sb3IgPSBcImdyZWVuXCIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxuXG5cblxuICAgIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCwgdmFsKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xuICAgIH1cblxuICAgIGRyYXcoeFN0YXJ0KSB7XG4gICAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgICAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodCAtIDQwMDtcblxuXG4gICAgICAgIGxldCBjeSA9IGNoIC8gMjtcbiAgICAgICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgICAgIHZhciB0cmlhbmdsZSA9IHtcbiAgICAgICAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgICAgICB4MTogY3gsXG4gICAgICAgICAgICB5MTogY3ksXG4gICAgICAgICAgICAvL3RoZSBzZWNvbmQgdmVydGV4IGlzIG9uIHRoZSBjaXJjdW1zY3JpYmVkIGNpcmNsZSBhdCAwIHJhZGlhbnMgd2hlcmUgUiBpcyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUgKCBhID0gMzAsIGI9MzAgKVxuICAgICAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgICAgIHkyOiBjaCxcbiAgICAgICAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgKHRoaXMueERpc3QgKiBjYW52YXNFbGVtZW50LndpZHRoKSxcbiAgICAgICAgICAgIHkzOiBjaCxcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngyLCB0cmlhbmdsZS55Mik7XG4gICAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMubWFya2VkKSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmUgcHJvZHVjdGlvbiwgbGluZSBkZWZhdWx0cyB0byBibGFja1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbCgpO1xuXG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBtYXJrKCkge1xuICAgICAgICB0aGlzLm1hcmtlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9