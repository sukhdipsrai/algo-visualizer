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
      var resetButton = document.createElement("button");
      resetButton.id = "resetButton";
      resetButton.innerHTML = "RESET";
      resetButton.addEventListener("click", reset);

      var _bCtrls2 = document.getElementById("button-controls");

      _bCtrls2.appendChild(resetButton);
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
        sliceFactor = 50;
        reset();
        sliceButton.innerHTML = "MAYBE NOT?";
        return;

      case 50:
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

      function swapAndRender(j) {
        i++;
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        arr[i].mark1();
        arr[j].mark2();

        if (j === end) {
          arr[end].markStatic();
          resolve(i);
        }
      }

      arr[end].markStatic();
      timedWhileLoop();

      function timedWhileLoop() {
        setTimeout(function () {
          if (j < end) {
            j++;
            if (arr[j].val <= pivot) swapAndRender(j);
            timedWhileLoop();
          }
        }, speed.value);
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

      this.color = "#FFD700";
      setTimeout(function () {
        _this.color = _this.DEFAULT_COLOR;
      }, this.speed.value * 1.5);
    }
  }, {
    key: "mark2",
    value: function mark2() {
      var _this2 = this;

      this.color = "#FFD700";
      setTimeout(function () {
        _this2.color = _this2.DEFAULT_COLOR;
      }, this.speed.value * 1.5);
    }
  }, {
    key: "markStatic",
    value: function markStatic() {
      var pivotColor = "#ff00ff";
      if (this.color === pivotColor) this.color = this.DEFAULT_COLOR;else this.color = pivotColor;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwic29ydFNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJteUZ1bmMiLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInZhbHVlIiwic2xpY2VGYWN0b3IiLCJyZXNldCIsImluaXRpYWxpemVCdXR0b25zIiwicXNiIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImdldEVsZW1lbnRCeUlkIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3ljbGVTcGVlZCIsImhpZGRlbiIsInBsYXlCdXR0b24iLCJzdGFydFFTIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJkaXNhYmxlZCIsInF1aWNrU29ydCIsInRoZW4iLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsIlByb21pc2UiLCJyZXNvbHZlIiwicXVpY2tTb3J0UGFydGl0aW9uMiIsInBpIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicmVqZWN0IiwicGl2b3QiLCJqIiwidGltZUJ1ZmZlciIsInN3YXBBbmRSZW5kZXIiLCJzZXRUaW1lb3V0IiwidGVtcCIsIm1hcmsiLCJtYXJrMSIsIm1hcmsyIiwibWFya1N0YXRpYyIsInRpbWVkV2hpbGVMb29wIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwicG9wIiwic2VsZWN0b3IiLCJldmVudCIsImhhbmRsZXIiLCJjbGVhckRlbW8iLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW0iLCJwcm9wcyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEF0dHJpYnV0ZSIsImN0eCIsImdldENvbnRleHQiLCJhcHBlbmQiLCJjbGVhclJlY3QiLCJjb2xvciIsImZpbGxDb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIiwiU3F1YXJlIiwiY29vcmRzIiwiYW5pbWF0aW9uRGlyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJERUZBVUxUX0NPTE9SIiwibWFya2VkIiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJwaXZvdENvbG9yIiwiZSIs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bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmxldCBzb3J0U2VsZWN0ID0gXCIxXCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIG15RnVuYygpIHtcbiAgbGV0IG15VHJpID0gW107XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuICBsZXQgc3BlZWQgPSB7IHZhbHVlOiA1IH07XG4gIGxldCBzbGljZUZhY3RvciA9IDg7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICAvLyBteUZ1bmMgaXMgdGhlIG1haW4gZnVuY3Rpb24gdGhhdCBydW5zIGFsbCBzb3J0cywgYnV0dG9ucyBhcmUgYWJzdHJhY3RlZCBvdXRzaWRlIG9mIHRoZSBmdW5jdGlvbiBzY29wZVxuICAvLyBwb3NzaWJsZSB0byBpbnN0YW5zdGlhdGUgbXlGdW5jIGFzIGEgY2xhc3MgYnV0IHRoZXJlIGlzIHRvbyBtdWNoIERPTSBmdW5jdGlvbmFsaXR5IHRoYXQgd291bGQgYmUgdW4tY2xhc3MgbGlrZSB0byBkb1xuICAvLyBzd2l0Y2ggKHNvcnRTZWxlY3QpIHtcbiAgLy8gICBjYXNlIFwiMVwiOlxuICAvLyAgIC8vIHF1aWtjc29ydCwgZGVmaW5lIHN0YXJ0KCkgYWNjb3JkaW5nbHlcbiAgLy8gICBjYXNlIFwiMlwiOlxuICAvLyAgIC8vIHNvbWUgb3RoZXIgc29ydCwgZGVmaW5lIHN0YXJ0KCkgYWNjb3JkaW5nbHlcbiAgLy8gICBjYXNlIFwiM1wiOlxuICAvLyAgIC8vc29tZSBvdGhlciBzb3J0LCBkZWZpbmUgc3RhcnQoKSBhY2NvcmRpbmdseVxuICAvLyAgIGNhc2UgXCI0XCI6XG4gIC8vICAgLy9zb21lIG90aGVyIHNvcnQsIGRlZmluZSBzdGFydCgpIGFjY29yZGluZ2x5XG5cbiAgLy8gICBkZWZhdWx0OlxuICAvLyAgICAgXCIxXCI7XG4gIC8vIH1cblxuICByZXNldCgpO1xuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIGxldCBxc2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIik7XG4gICAgcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgIHFzYi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgcXNiLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiU0xPV0VSXCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKS5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIlBMQVlcIjtcbiAgICAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0UVMpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzbGljZUJ1dHRvbi5pZCA9IFwic2xpY2VCdXR0b25cIjtcbiAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiTU9SRSBUUklBTkdMRVNcIjtcbiAgICAgIHNsaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNsaWNlKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShzbGljZUJ1dHRvbiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCJSRVNFVFwiO1xuICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgIGlmIChzcGVlZC52YWx1ZSA9PSA1KSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDUwO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpLmlubmVySFRNTCA9IFwiRkFTVEVSXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKS5pbm5lckhUTUwgPSBcIlNMT1dFUlwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKTtcbiAgICBzd2l0Y2ggKHNsaWNlRmFjdG9yKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMTQ7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiRVZFTiBNT1JFIFRSSUFOR0xFU1wiO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDE0OlxuICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIk1PUkUgVFJJQU5HTEVTLi4uXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjg7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiSSBTQUlEIE1PUkUhXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNTA7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiTUFZQkUgTk9UP1wiO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDUwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDg7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiTU9SRSBUUklBTkdMRVNcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVBcnIoKSB7XG4gICAgLy8gRGl2aWRlIGNhbnZhcyBpbnRvIHNsaWNlcyBvZiBlcXVhbCBsZW5ndGhcbiAgICAvLyBVc2UgbGluZWFyIGNvbG9yIG1hcGluZyB0byBUcmlhbmdsZS52YWxcbiAgICAvLyBUcmlhbmdsZS52YWwgd2lsbCBiZSBzb3J0ZWQgZmllbGRcbiAgICAvLyB4RGlzdCByZW1haW5zIHNhbWVcbiAgICBsZXQgeERpc3QgPSAxIC8gKDEwICogc2xpY2VGYWN0b3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgKiBzbGljZUZhY3RvcjsgaSsrKSB7XG4gICAgICAvLyAwLTI1NSByYW5kb20gbnVtYmVyXG4gICAgICBsZXQgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU0ICsgMSk7XG5cbiAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBibHVlUmFuZG9taXplcih2YWwsIDI1NSksXG4gICAgICAgIHhEaXN0LFxuICAgICAgICB2YWwsXG4gICAgICAgIHNwZWVkXG4gICAgICApO1xuXG4gICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRWYXJzKCkge1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgbXlUcmkgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgcmVzZXRWYXJzKCk7XG4gICAgaW5pdGlhbGl6ZUFycigpO1xuICB9XG5cbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUcmkubGVuZ3RoOyBpKyspIHtcbiAgICAgIG15VHJpW2ldLmRyYXcoc3VtKTtcbiAgICAgIHN1bSArPSBteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGg7XG4gICAgfVxuICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAvLyB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbiksIDE4KTtcbiAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgIGxldCByVmFsdWUgPSBcIjNDXCI7IC8vNjBcbiAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuICAgIGlmIChzaGFkZVZhbCA8IDE2KSBnVmFsdWUgPSBcIjBcIiArIGdWYWx1ZTtcblxuICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgLy8gY29uc29sZS5sb2cobXlUcmkubGVuZ3RoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIC8vIGFuaW1hdGluZyA9IGZhbHNlO1xuICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICByZXNldEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2cobXlUcmkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgIC8vIG5lZWRlZCB0byBzZXR1cCBhIHN0cm9uZyByZXNvbHZlLCBuZWVkIHRvIGNvbWUgYmFjayB0byB0aGlzICwgcmVhc29uOiBmb3IgcGF1c2luZyBhbmltYXRpb25cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24yKGFyciwgc3RhcnQsIGVuZCkudGhlbigocGkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgc3RhcnQsIHBpIC0gMSkudGhlbigoKSA9PlxuICAgICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBwaSArIDEsIGVuZClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG4gICAgICBsZXQgdGltZUJ1ZmZlciA9IDA7XG4gICAgICB3aGlsZSAoaiA8IGVuZCkge1xuICAgICAgICBqKys7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzd2FwQW5kUmVuZGVyKGopIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dhcCBoYXBwZW5lZFwiKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXBwaW5nXCIsIGFycltpXSwgYXJyW2pdKTtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgIGFycltpXS5tYXJrKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsoKTtcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSByZXNvbHZlKGkpO1xuICAgICAgICAgIC8vIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfSwgaiAqIHNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24yKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS52YWw7XG4gICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuXG4gICAgICBmdW5jdGlvbiBzd2FwQW5kUmVuZGVyKGopIHtcbiAgICAgICAgaSsrO1xuXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgYXJyW2VuZF0ubWFya1N0YXRpYygpO1xuICAgICAgICAgIHJlc29sdmUoaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGFycltlbmRdLm1hcmtTdGF0aWMoKTtcbiAgICAgIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgICBmdW5jdGlvbiB0aW1lZFdoaWxlTG9vcCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGogPCBlbmQpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgICAgICAgdGltZWRXaGlsZUxvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSAvLyBlbnRpcmUgYmxvY2tcblxuLy8gU3F1YXJlIGNvbnN0cnVjdG9yIGdldHMgYSBjYW52YXMgcHJvcGVydHksIGNvb3JkcyAsIGNvbG9yXG5cbi8vIGZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuLy8gICAgIGNsZWFyRGVtbygpO1xuLy8gICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuLy8gICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4vLyAgICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuLy8gICAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbi8vICAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuLy8gICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbi8vICAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4vLyAgICAgICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4vLyAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbi8vICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuLy8gICAgICAgICAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH07XG5cbi8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICAgICAgXCJ3aW5kb3dcIixcbi8vICAgICAgICAgXCJrZXlkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZUtleURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwibW91c2Vkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZU1vdXNlRG93bixcbi8vICAgICBdKTtcblxuLy8gICAgIC8vIDMyIGlzIEFTQ0lJIGZvciBzcGFjZSwgcmFuZG9taXplIGNvbG9yXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuLy8gICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4vLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbi8vICAgICAgICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC8vIG9uIGNsaWNrIGFuaW1hdGUgbmV3IHNxdWFyZVxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBzcXVhcmVzLnB1c2goXG4vLyAgICAgICAgICAgICBuZXcgU3F1YXJlKFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jdHgsXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgIGxldCBbXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGV2ZW50LFxuICAgICAgaGFuZGxlcixcbiAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgKTtcbiAgfVxufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgY29sb3IgPSBcImdyZWVuXCIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxuXG5cblxuICAgIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QsIHZhbCwgc3BlZWQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuREVGQVVMVF9DT0xPUiA9IGNvbG9yO1xuICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgdGhpcy52YWwgPSB2YWw7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICB9XG5cbiAgZHJhdyh4U3RhcnQpIHtcbiAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgbGV0IGN3ID0gY2FudmFzRWxlbWVudC53aWR0aDtcbiAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodCAtIDIwMDtcblxuICAgIGxldCBjeSA9IGNoIC8gMjtcbiAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAvL3RoZSBmaXJzdCB2ZXJ0ZXggaXMgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgeDE6IGN4LFxuICAgICAgeTE6IGN5LFxuICAgICAgLy90aGUgc2Vjb25kIHZlcnRleCBpcyBvbiB0aGUgY2lyY3Vtc2NyaWJlZCBjaXJjbGUgYXQgMCByYWRpYW5zIHdoZXJlIFIgaXMgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlICggYSA9IDMwLCBiPTMwIClcbiAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICB4MjogdGhpcy54U3RhcnQsXG4gICAgICB5MjogY2gsXG4gICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgIHgzOiB0aGlzLnhTdGFydCArIHRoaXMueERpc3QgKiBjYW52YXNFbGVtZW50LndpZHRoLFxuICAgICAgeTM6IGNoLFxuICAgIH07XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngzLCB0cmlhbmdsZS55Myk7XG4gICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LmZpbGwoKTtcblxuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxuXG4gIG1hcmsxKCkge1xuICAgIHRoaXMuY29sb3IgPSBcIiNGRkQ3MDBcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfQ09MT1I7XG4gICAgfSwgdGhpcy5zcGVlZC52YWx1ZSAqIDEuNSk7XG4gIH1cblxuICBtYXJrMigpIHtcbiAgICB0aGlzLmNvbG9yID0gXCIjRkZENzAwXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX0NPTE9SO1xuICAgIH0sIHRoaXMuc3BlZWQudmFsdWUgKiAxLjUpO1xuICB9XG5cbiAgbWFya1N0YXRpYygpIHtcbiAgICBjb25zdCBwaXZvdENvbG9yID0gXCIjZmYwMGZmXCI7XG4gICAgaWYgKHRoaXMuY29sb3IgPT09IHBpdm90Q29sb3IpIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfQ09MT1I7XG4gICAgZWxzZSB0aGlzLmNvbG9yID0gcGl2b3RDb2xvcjtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWFuZ2xlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==