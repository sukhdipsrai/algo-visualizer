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
var sortSelect = "1";
document.querySelector("#quick-sort").addEventListener("click", myFunc);
var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
canvas.createCanvas();

function myFunc() {
  var myTri = [];
  var animating = true;
  var speed = {
    value: 5
  };
  var sliceFactor = 8; // increasing will create more triangle slices
  // myFunc is the main function that runs all sorts, buttons are abstracted outside of the function scope
  // possible to instanstiate myFunc as a class but there is too much DOM functionality that would be un-class like to do
  // switch (sortSelect) {
  //   case "1":
  //   // quikcsort, define start() accordingly
  //   case "2":
  //   // some other sort, define start() accordingly
  //   case "3":
  //   //some other sort, define start() accordingly
  //   case "4":
  //   //some other sort, define start() accordingly
  //   default:
  //     "1";
  // }

  reset();

  function initializeButtons() {
    var qsb = document.querySelector("#quick-sort");
    qsb.removeEventListener("click", myFunc);
    qsb.classList.add("unclickable");
    qsb.classList.remove("clickable");

    if (document.getElementById("forwardButton") === null) {
      var forwardButton = document.createElement("button");
      forwardButton.id = "forwardButton";
      forwardButton.innerHTML = "SLOWER";
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
      var _resetButton = document.createElement("button");

      _resetButton.id = "resetButton";
      _resetButton.innerHTML = "RESET";

      _resetButton.addEventListener("click", reset);

      var _bCtrls2 = document.getElementById("button-controls");

      _bCtrls2.appendChild(_resetButton);
    }
  }

  function cycleSpeed() {
    if (speed.value == 5) {
      speed.value = 50;
      document.getElementById("forwardButton").innerHTML = "FASTER";
    } else {
      speed.value = 5;
      document.getElementById("forwardButton").innerHTML = "SLOWER";
    }
  }

  function cycleSlice() {
    var sliceButton = document.getElementById("sliceButton");

    switch (sliceFactor) {
      case 8:
        sliceFactor = 14;
        reset();
        sliceButton.innerHTML = "EVEN MORE TRIANGLES";
        return;

      case 14:
        sliceFactor = 20;
        reset();
        sliceButton.innerHTML = "MORE TRIANGLES...";
        return;

      case 20:
        sliceFactor = 28;
        reset();
        sliceButton.innerHTML = "I SAID MORE!";
        return;

      case 28:
        sliceFactor = 40;
        reset();
        sliceButton.innerHTML = "MAYBE NOT?";
        return;

      case 40:
        sliceFactor = 8;
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
      var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_3__["default"](canvas, blueRandomizer(val, 255), xDist, val, speed);
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

  function hideButtons() {
    document.getElementById("playButton").hidden = true;
    document.getElementById("forwardButton").hidden = true;
    document.getElementById("sliceButton").hidden = true;
    var resetButton = document.getElementById("resetButton");
    resetButton.disabled = true;
    resetButton.classList.add("unclickable");
  }

  function enableButtons() {
    resetButton.disabled = false;
    resetButton.classList.remove("unclickable");
  }

  function startQS() {
    hideButtons();
    quickSort(myTri, 0, myTri.length - 1).then(function () {
      enableButtons();
    });
  }

  function quickSort(arr, start, end) {
    var xStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    // needed to setup a strong resolve, need to come back to this , reason: for pausing animation
    return new Promise(function (resolve) {
      if (start < end) {
        quickSortPartition2(arr, start, end).then(function (pi) {
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
          arr[j].mark();
          if (j === end) resolve(i); // window.requestAnimationFrame(animation);
        }, j * speed.value);
      }
    });
  }

  function quickSortPartition2(arr, start, end) {
    return new Promise(function (resolve, reject) {
      var pivot = arr[end].val;
      var i = start - 1; // tracking pivot location

      var j = start - 1;
      arr[end].markStatic();

      var swapAndRender = function swapAndRender(j) {
        if (arr[j].val <= pivot) {
          i++;

          if (j === end) {
            arr[end].static = false;
          }

          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          arr[i].mark1();
          arr[j].mark2();

          if (j === end) {
            resolve(i);
          }
        } else arr[j].mark2();
      };

      var timedWhileLoop = function timedWhileLoop() {
        setTimeout(function () {
          arr[end].markStatic();

          if (j < end) {
            j++;
            swapAndRender(j);
            timedWhileLoop();
          }
        }, speed.value);
      };

      timedWhileLoop();
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
  function Triangle(canvas, color, xDist, val, speed) {
    _classCallCheck(this, Triangle);

    this.canvas = canvas;
    this.ctx = this.canvas.ctx;
    this.xDist = xDist;
    this.color = color;
    this.DEFAULT_COLOR = color;
    this.marked = false;
    this.val = val;
    this.speed = speed;
    this.static = false;
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
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.fill();
      ctx.stroke();
    }
  }, {
    key: "mark1",
    value: function mark1() {
      var _this = this;

      if (!this.static) {
        this.color = "red";
        setTimeout(function () {
          _this.color = _this.DEFAULT_COLOR;
        }, this.speed.value * 1.5);
      }
    }
  }, {
    key: "mark2",
    value: function mark2() {
      var _this2 = this;

      if (!this.static) {
        this.color = "#FFD700";
        setTimeout(function () {
          _this2.color = _this2.DEFAULT_COLOR;
        }, this.speed.value * 1.5);
      }
    }
  }, {
    key: "markStatic",
    value: function markStatic() {
      this.static = true;
      this.color = "#FF00FF"; // if (this.static) {
      //   this.color = this.DEFAULT_COLOR;
      //   this.static = false;
      // } else {
      //   this.color = str;
      //   this.static = true;
      // }
    }
  }, {
    key: "colorReset",
    value: function colorReset() {
      this.static = false;
      this.color = this.DEFAULT_COLOR;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwic29ydFNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJteUZ1bmMiLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInZhbHVlIiwic2xpY2VGYWN0b3IiLCJyZXNldCIsImluaXRpYWxpemVCdXR0b25zIiwicXNiIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldEVsZW1lbnRCeUlkIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3ljbGVTcGVlZCIsImhpZGRlbiIsInBsYXlCdXR0b24iLCJzdGFydFFTIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImRpc2FibGVkIiwiZW5hYmxlQnV0dG9ucyIsInF1aWNrU29ydCIsInRoZW4iLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVpY2tTb3J0UGFydGl0aW9uMiIsInBpIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicmVqZWN0IiwicGl2b3QiLCJqIiwidGltZUJ1ZmZlciIsInN3YXBBbmRSZW5kZXIiLCJzZXRUaW1lb3V0IiwidGVtcCIsIm1hcmsiLCJtYXJrU3RhdGljIiwic3RhdGljIiwibWFyazEiLCJtYXJrMiIsInRpbWVkV2hpbGVMb29wIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwicG9wIiwic2VsZWN0b3IiLCJldmVudCIsImhhbmRsZXIiLCJjbGVhckRlbW8iLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW0iLCJwcm9wcyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEF0dHJpYnV0ZSIsImN0eCIsImdldENvbnRleHQiLCJhcHBlbmQiLCJjbGVhclJlY3QiLCJjb2xvciIsImZpbGxDb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIiwiU3F1YXJlIiwiY29vcmRzIiwiYW5pbWF0aW9uRGlyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJERUZBVUxUX0NPTE9SIiwibWFya2VkIiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2VT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QUFLd0IsS0FBTCxHQUFhLFNBQWIsQ0FGVyxDQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztXQUVELHNCQUFhO0FBQ1gsV0FBS3hCLE1BQUwsR0FBYyxLQUFkO0FBQ0EsV0FBS3dCLEtBQUwsR0FBYSxLQUFLVSxhQUFsQjtBQUNEOzs7V0FFRCxpQkFBUTtBQUNOLFVBQUk7QUFDRixhQUFLZCxHQUFMLENBQVNHLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS3hHLE1BQUwsQ0FBWWdELEtBQXJDLEVBQTRDLEtBQUtoRCxNQUFMLENBQVlrRyxNQUF4RDtBQUNELE9BRkQsQ0FFRSxPQUFPc0MsQ0FBUCxFQUFVO0FBQ1ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFDRjs7Ozs7O0FBR1lqRyx1RUFBZixFOzs7Ozs7Ozs7OztBQy9GQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgU3F1YXJlIGZyb20gXCIuL3NjcmlwdHMvc3F1YXJlXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5jb25zdCBjdXJyZW50U3RhdGVPYmogPSB7XG4gIGN1cnJlbnRFeGFtcGxlOiBudWxsLFxuICBjdXJyZW50RXZlbnRMaXN0ZW5lcnM6IFtdLFxufTtcblxubGV0IHNvcnRTZWxlY3QgPSBcIjFcIjtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gbXlGdW5jKCkge1xuICBsZXQgbXlUcmkgPSBbXTtcbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gIGxldCBzcGVlZCA9IHsgdmFsdWU6IDUgfTtcbiAgbGV0IHNsaWNlRmFjdG9yID0gODsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG4gIC8vIG15RnVuYyBpcyB0aGUgbWFpbiBmdW5jdGlvbiB0aGF0IHJ1bnMgYWxsIHNvcnRzLCBidXR0b25zIGFyZSBhYnN0cmFjdGVkIG91dHNpZGUgb2YgdGhlIGZ1bmN0aW9uIHNjb3BlXG4gIC8vIHBvc3NpYmxlIHRvIGluc3RhbnN0aWF0ZSBteUZ1bmMgYXMgYSBjbGFzcyBidXQgdGhlcmUgaXMgdG9vIG11Y2ggRE9NIGZ1bmN0aW9uYWxpdHkgdGhhdCB3b3VsZCBiZSB1bi1jbGFzcyBsaWtlIHRvIGRvXG4gIC8vIHN3aXRjaCAoc29ydFNlbGVjdCkge1xuICAvLyAgIGNhc2UgXCIxXCI6XG4gIC8vICAgLy8gcXVpa2Nzb3J0LCBkZWZpbmUgc3RhcnQoKSBhY2NvcmRpbmdseVxuICAvLyAgIGNhc2UgXCIyXCI6XG4gIC8vICAgLy8gc29tZSBvdGhlciBzb3J0LCBkZWZpbmUgc3RhcnQoKSBhY2NvcmRpbmdseVxuICAvLyAgIGNhc2UgXCIzXCI6XG4gIC8vICAgLy9zb21lIG90aGVyIHNvcnQsIGRlZmluZSBzdGFydCgpIGFjY29yZGluZ2x5XG4gIC8vICAgY2FzZSBcIjRcIjpcbiAgLy8gICAvL3NvbWUgb3RoZXIgc29ydCwgZGVmaW5lIHN0YXJ0KCkgYWNjb3JkaW5nbHlcblxuICAvLyAgIGRlZmF1bHQ6XG4gIC8vICAgICBcIjFcIjtcbiAgLy8gfVxuXG4gIHJlc2V0KCk7XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1dHRvbnMoKSB7XG4gICAgbGV0IHFzYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKTtcbiAgICBxc2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG4gICAgcXNiLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCJTTE9XRVJcIjtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b24pO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiUExBWVwiO1xuICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRRUyk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNsaWNlQnV0dG9uLmlkID0gXCJzbGljZUJ1dHRvblwiO1xuICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCJNT1JFIFRSSUFOR0xFU1wiO1xuICAgICAgc2xpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU2xpY2UpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHNsaWNlQnV0dG9uLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcmVzZXRCdXR0b24uaWQgPSBcInJlc2V0QnV0dG9uXCI7XG4gICAgICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSBcIlJFU0VUXCI7XG4gICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXQpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgaWYgKHNwZWVkLnZhbHVlID09IDUpIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikuaW5uZXJIVE1MID0gXCJGQVNURVJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlZWQudmFsdWUgPSA1O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmlubmVySFRNTCA9IFwiU0xPV0VSXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTbGljZSgpIHtcbiAgICBsZXQgc2xpY2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpO1xuICAgIHN3aXRjaCAoc2xpY2VGYWN0b3IpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAxNDtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCJFVkVOIE1PUkUgVFJJQU5HTEVTXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjA7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiTU9SRSBUUklBTkdMRVMuLi5cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyODtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCJJIFNBSUQgTU9SRSFcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA0MDtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCJNQVlCRSBOT1Q/XCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gODtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCJNT1JFIFRSSUFOR0xFU1wiO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUFycigpIHtcbiAgICAvLyBEaXZpZGUgY2FudmFzIGludG8gc2xpY2VzIG9mIGVxdWFsIGxlbmd0aFxuICAgIC8vIFVzZSBsaW5lYXIgY29sb3IgbWFwaW5nIHRvIFRyaWFuZ2xlLnZhbFxuICAgIC8vIFRyaWFuZ2xlLnZhbCB3aWxsIGJlIHNvcnRlZCBmaWVsZFxuICAgIC8vIHhEaXN0IHJlbWFpbnMgc2FtZVxuICAgIGxldCB4RGlzdCA9IDEgLyAoMTAgKiBzbGljZUZhY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAqIHNsaWNlRmFjdG9yOyBpKyspIHtcbiAgICAgIC8vIDAtMjU1IHJhbmRvbSBudW1iZXJcbiAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTQgKyAxKTtcblxuICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICBjYW52YXMsXG4gICAgICAgIGJsdWVSYW5kb21pemVyKHZhbCwgMjU1KSxcbiAgICAgICAgeERpc3QsXG4gICAgICAgIHZhbCxcbiAgICAgICAgc3BlZWRcbiAgICAgICk7XG5cbiAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFZhcnMoKSB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBteVRyaSA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIC8vIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKSwgMTgpO1xuICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgaWYgKHNoYWRlVmFsIDwgMTYpIGdWYWx1ZSA9IFwiMFwiICsgZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMoKSB7XG4gICAgcmVzZXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcXVpY2tTb3J0KG15VHJpLCAwLCBteVRyaS5sZW5ndGggLSAxKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAvLyBuZWVkZWQgdG8gc2V0dXAgYSBzdHJvbmcgcmVzb2x2ZSwgbmVlZCB0byBjb21lIGJhY2sgdG8gdGhpcyAsIHJlYXNvbjogZm9yIHBhdXNpbmcgYW5pbWF0aW9uXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS52YWw7XG4gICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuICAgICAgbGV0IHRpbWVCdWZmZXIgPSAwO1xuICAgICAgd2hpbGUgKGogPCBlbmQpIHtcbiAgICAgICAgaisrO1xuICAgICAgICBpZiAoYXJyW2pdLnZhbCA8PSBwaXZvdCkgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc3dhcEFuZFJlbmRlcihqKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXAgaGFwcGVuZWRcIik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwcGluZ1wiLCBhcnJbaV0sIGFycltqXSk7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICBhcnJbaV0ubWFyaygpO1xuICAgICAgICAgIGFycltqXS5tYXJrKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkgcmVzb2x2ZShpKTtcbiAgICAgICAgICAvLyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIH0sIGogKiBzcGVlZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24yKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS52YWw7XG4gICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuICAgICAgYXJyW2VuZF0ubWFya1N0YXRpYygpO1xuXG4gICAgICBjb25zdCBzd2FwQW5kUmVuZGVyID0gKGopID0+IHtcbiAgICAgICAgaWYgKGFycltqXS52YWwgPD0gcGl2b3QpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgYXJyW2VuZF0uc3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBhcnJbal0ubWFyazIoKTtcbiAgICAgIH07XG4gICAgICBjb25zdCB0aW1lZFdoaWxlTG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYXJyW2VuZF0ubWFya1N0YXRpYygpO1xuXG4gICAgICAgICAgaWYgKGogPCBlbmQpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICAgICAgICB0aW1lZFdoaWxlTG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgfSk7XG4gIH1cbn0gLy8gZW50aXJlIGJsb2NrXG5cbi8vIFNxdWFyZSBjb25zdHJ1Y3RvciBnZXRzIGEgY2FudmFzIHByb3BlcnR5LCBjb29yZHMgLCBjb2xvclxuXG4vLyBmdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbi8vICAgICBjbGVhckRlbW8oKTtcbi8vICAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbi8vICAgICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuLy8gICAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbi8vICAgICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4vLyAgICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbi8vICAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4vLyAgICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuLy8gICAgICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuLy8gICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuLy8gICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbi8vICAgICAgICAgICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuXG4vLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwia2V5ZG93blwiLFxuLy8gICAgICAgICBoYW5kbGVLZXlEb3duLFxuLy8gICAgIF0pO1xuXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAgICAgICBcIndpbmRvd1wiLFxuLy8gICAgICAgICBcIm1vdXNlZG93blwiLFxuLy8gICAgICAgICBoYW5kbGVNb3VzZURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICAvLyAzMiBpcyBBU0NJSSBmb3Igc3BhY2UsIHJhbmRvbWl6ZSBjb2xvclxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbi8vICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuLy8gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4vLyAgICAgICAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAvLyBvbiBjbGljayBhbmltYXRlIG5ldyBzcXVhcmVcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbi8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgc3F1YXJlcy5wdXNoKFxuLy8gICAgICAgICAgICAgbmV3IFNxdWFyZShcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuY3R4LFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuLy8gICAgIH1cbi8vIH1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICBsZXQgW1xuICAgICAgc2VsZWN0b3IsXG4gICAgICBldmVudCxcbiAgICAgIGhhbmRsZXIsXG4gICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4gICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICk7XG4gIH1cbn1cbiIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG5cbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRofWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAgICAgICAvLyB9XG5cbiAgICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgLy8gfVxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlOyIsImNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cblxuXG5cbiAgICByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCJjbGFzcyBUcmlhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0LCB2YWwsIHNwZWVkKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLkRFRkFVTFRfQ09MT1IgPSBjb2xvcjtcbiAgICB0aGlzLm1hcmtlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsID0gdmFsO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICB9XG5cbiAgZHJhdyh4U3RhcnQpIHtcbiAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgbGV0IGN3ID0gY2FudmFzRWxlbWVudC53aWR0aDtcbiAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodCAtIDIwMDtcblxuICAgIGxldCBjeSA9IGNoIC8gMjtcbiAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAvL3RoZSBmaXJzdCB2ZXJ0ZXggaXMgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgeDE6IGN4LFxuICAgICAgeTE6IGN5LFxuICAgICAgLy90aGUgc2Vjb25kIHZlcnRleCBpcyBvbiB0aGUgY2lyY3Vtc2NyaWJlZCBjaXJjbGUgYXQgMCByYWRpYW5zIHdoZXJlIFIgaXMgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlICggYSA9IDMwLCBiPTMwIClcbiAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICB4MjogdGhpcy54U3RhcnQsXG4gICAgICB5MjogY2gsXG4gICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgIHgzOiB0aGlzLnhTdGFydCArIHRoaXMueERpc3QgKiBjYW52YXNFbGVtZW50LndpZHRoLFxuICAgICAgeTM6IGNoLFxuICAgIH07XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngzLCB0cmlhbmdsZS55Myk7XG4gICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIG1hcmsxKCkge1xuICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfQ09MT1I7XG4gICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlICogMS41KTtcbiAgICB9XG4gIH1cblxuICBtYXJrMigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICB0aGlzLmNvbG9yID0gXCIjRkZENzAwXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9DT0xPUjtcbiAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUgKiAxLjUpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmtTdGF0aWMoKSB7XG4gICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgIHRoaXMuY29sb3IgPSBcIiNGRjAwRkZcIjtcbiAgICAvLyBpZiAodGhpcy5zdGF0aWMpIHtcbiAgICAvLyAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfQ09MT1I7XG4gICAgLy8gICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICB0aGlzLmNvbG9yID0gc3RyO1xuICAgIC8vICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNvbG9yUmVzZXQoKSB7XG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX0NPTE9SO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9