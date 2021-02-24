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
var algoSelect = {
  value: null
};
document.querySelector("#quick-sort").addEventListener("click", function () {
  startHandler("quick-sort");
});
document.querySelector("#bubble-sort").addEventListener("click", function () {
  startHandler("bubble-sort");
});
document.querySelector("#radix-sort").addEventListener("click", function () {
  startHandler("radix-sort");
});
document.querySelector("#bubble-sort").addEventListener("click", function () {
  startHandler("selection-sort");
});
var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
canvas.createCanvas();

function startHandler(id) {
  // TODO handle logic og button views
  debugger;

  if (algoSelect.value === null) {
    myFunc(algoSelect);
  }

  algoSelect.value = id;
  Array.from(document.getElementsByClassName("algo")).forEach(function (ele) {
    ele.classList.remove("selectedButton");
  });
  document.getElementById(id).classList.add("selectedButton");
}

function myFunc(algo) {
  var myTri = [];
  var animating = true;
  var speed = {
    value: 5
  };
  var sliceFactor = 8; // increasing will create more triangle slices

  reset();

  function startAlgo() {
    toggleSortButtons(true);
    console.log(algo.value, " started by algo-value");
    debugger;

    switch (algo.value) {
      case "quick-sort":
        startQS();
        return;

      case "bubble-sort":
        startBS();
        return;

      case "radix-sort":
        startRS();
        return;

      case "selection-sort":
        startSS();
        return;
    }
  }

  function toggleSortButtons(value) {
    Array.from(document.getElementsByClassName("algo")).forEach(function (ele) {
      ele.classList.toggle("unclickable");
      ele.classList.toggle("clickable");
      ele.disabled = value;
    }); // let qsb = document.getElementById(id);
    // qsb.disabled = true;
    // // qsb.removeEventListener("click", myFunc);
    // qsb.classList.add("unclickable");
    // qsb.classList.remove("clickable");
  }

  function initializeButtons() {
    if (document.getElementById("forwardButton") === null) {
      var forwardButton = document.createElement("button");
      var forwardButtonContainer = document.createElement("div");
      var forwardLoad = document.createElement("div");
      forwardButtonContainer.id = "forwardButtonContainer";
      forwardLoad.id = "forwardLoad";
      forwardButton.id = "forwardButton";
      forwardButton.innerHTML = "&#9658&#9658";
      forwardButtonContainer.append(forwardButton);
      forwardButtonContainer.append(forwardLoad);
      document.getElementById("button-controls").appendChild(forwardButtonContainer);
      document.getElementById("forwardButton").addEventListener("click", cycleSpeed);
    } else document.getElementById("playButton").hidden = false;

    if (document.getElementById("playButton") === null) {
      var playButton = document.createElement("button");
      playButton.id = "playButton";
      playButton.innerHTML = "&#9658";
      playButton.addEventListener("click", startAlgo);
      var bCtrls = document.getElementById("button-controls");
      bCtrls.insertBefore(playButton, bCtrls.firstChild);
    } else document.getElementById("forwardButtonContainer").hidden = false;

    if (document.getElementById("sliceButton") === null) {
      var sliceButtonContainer = document.createElement("div");
      sliceButtonContainer.id = "sliceButtonContainer";
      var loadBorder = document.createElement("div");
      loadBorder.id = "sliceLoad";
      var sliceButton = document.createElement("button");
      sliceButton.id = "sliceButton";
      sliceButton.innerHTML = "+";
      sliceButton.addEventListener("click", cycleSlice);

      var _bCtrls = document.getElementById("button-controls");

      sliceButtonContainer.append(sliceButton);
      sliceButtonContainer.append(loadBorder);

      _bCtrls.insertBefore(sliceButtonContainer, document.getElementById("resetButton"));
    } else document.getElementById("sliceButtonContainer").hidden = false;

    if (document.getElementById("resetButton") === null) {
      var resetButton = document.createElement("button");
      resetButton.id = "resetButton";
      resetButton.innerHTML = "&#8634";
      resetButton.addEventListener("click", reset);

      var _bCtrls2 = document.getElementById("button-controls");

      _bCtrls2.appendChild(resetButton);
    }
  }

  function cycleSpeed() {
    if (speed.value === 5) {
      speed.value = 50;
      document.getElementById("forwardLoad").style.right = "50%";
    } else {
      speed.value = 5;
      document.getElementById("forwardLoad").style.right = "0%";
    }
  }

  function cycleSlice() {
    var load = document.getElementById("sliceLoad");

    switch (sliceFactor) {
      case 8:
        sliceFactor = 14;
        load.style.right = "68%";
        reset();
        return;

      case 14:
        sliceFactor = 20;
        load.style.right = "52%";
        reset();
        return;

      case 20:
        sliceFactor = 28;
        load.style.right = "36%";
        reset();
        return;

      case 28:
        sliceFactor = 40;
        load.style.right = "16%";
        reset();
        return;

      case 40:
        sliceFactor = 50;
        load.style.right = "0%";
        reset();
        return;

      case 50:
        sliceFactor = 8;
        load.style.right = "84%";
        reset();
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
    document.getElementById("forwardButtonContainer").hidden = true;
    document.getElementById("sliceButtonContainer").hidden = true;
    var resetButton = document.getElementById("resetButton");
    resetButton.hidden = true;
    resetButton.classList.add("unclickable");
  }

  function enableButtons() {
    var resetButton = document.getElementById("resetButton");
    resetButton.hidden = false;
    resetButton.classList.remove("unclickable");
    toggleSortButtons(false);
  }

  function startQS() {
    hideButtons();
    quickSort(myTri, 0, myTri.length - 1).then(function () {
      enableButtons();
    });
  }

  function startBS() {
    hideButtons();
    bubbleSort().then(function () {
      enableButtons();
      console.log("bubble sort finished");
    });
  }

  function startRS() {
    hideButtons();
    radixSort().then(function () {
      enableButtons();
      console.log("radix sort finished");
    });
  }

  function startSS() {
    hideButtons();
    selectionSort().then(function () {
      enableButtons();
      console.log("selection sort finished");
    });
  }

  function bubbleSort() {
    return new Promise(function (resolve) {
      console.log("bubble Sort RUNNNING");
      setTimeout(function () {
        resolve(5);
      }, 5000);
    });
  }

  function radixSort() {
    return new Promise(function (resolve) {
      console.log("radix Sort RUNNNING");
      setTimeout(function () {
        resolve(5);
      }, 5000);
    });
  }

  function selectionSort() {
    return new Promise(function (resolve) {
      console.log("selection Sort RUNNNING");
      setTimeout(function () {
        resolve(5);
      }, 5000);
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
  } // no longer being used, held for reference


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

      var swapAndRender = function swapAndRender(j) {
        if (arr[j].val <= pivot) {
          i++;

          if (j === end) {
            arr[end].colorReset(); // = false;

            arr[start].colorReset();
          }

          if (i !== start && j !== end) arr[start].markStatic();
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          arr[i].mark2();
          arr[j].mark2();

          if (j === end) {
            resolve(i);
          }
        } else {
          arr[j].mark2();
          if (i < 0) arr[0].mark2();else arr[i].mark2();
        }
      };

      var timedWhileLoop = function timedWhileLoop() {
        setTimeout(function () {
          arr[end].markStatic();

          if (j < end) {
            j++;
            swapAndRender(j);
            if (j !== end) timedWhileLoop();
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
        }, this.speed.value);
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
        }, this.speed.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiYWxnb1NlbGVjdCIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0SGFuZGxlciIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJpZCIsIm15RnVuYyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGQiLCJhbGdvIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInNsaWNlRmFjdG9yIiwicmVzZXQiLCJzdGFydEFsZ28iLCJ0b2dnbGVTb3J0QnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFFTIiwic3RhcnRCUyIsInN0YXJ0UlMiLCJzdGFydFNTIiwidG9nZ2xlIiwiZGlzYWJsZWQiLCJpbml0aWFsaXplQnV0dG9ucyIsImZvcndhcmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciIsImZvcndhcmRMb2FkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsImJDdHJscyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzbGljZUJ1dHRvbkNvbnRhaW5lciIsImxvYWRCb3JkZXIiLCJzbGljZUJ1dHRvbiIsImN5Y2xlU2xpY2UiLCJyZXNldEJ1dHRvbiIsInN0eWxlIiwicmlnaHQiLCJsb2FkIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInNlbGVjdGlvblNvcnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJhcnIiLCJzdGFydCIsImVuZCIsInhTdGFydCIsInF1aWNrU29ydFBhcnRpdGlvbjIiLCJwaSIsInF1aWNrU29ydFBhcnRpdGlvbiIsInJlamVjdCIsInBpdm90IiwiaiIsInRpbWVCdWZmZXIiLCJzd2FwQW5kUmVuZGVyIiwidGVtcCIsIm1hcmsiLCJjb2xvclJlc2V0IiwibWFya1N0YXRpYyIsIm1hcmsyIiwidGltZWRXaGlsZUxvb3AiLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJwb3AiLCJzZWxlY3RvciIsImV2ZW50IiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhckRlbW8iLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsInByb3BzIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImNvbG9yIiwiZmlsbENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIiwiU3F1YXJlIiwiY29vcmRzIiwiYW5pbWF0aW9uRGlyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJERUZBVUxUX0NPTE9SIiwibWFya2VkIiwic3RhdGljIiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsImZpbGwiLCJzdHJva2UiLCJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLGdCQUFjLEVBQUUs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Ozs7V0FFRCxpQkFBUTtBQUNOLFVBQUk7QUFDRixhQUFLWixHQUFMLENBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzdILE1BQUwsQ0FBWXFFLEtBQXJDLEVBQTRDLEtBQUtyRSxNQUFMLENBQVl3SCxNQUF4RDtBQUNELE9BRkQsQ0FFRSxPQUFPcUMsQ0FBUCxFQUFVO0FBQ1Z2SSxlQUFPLENBQUNDLEdBQVIsQ0FBWXNJLENBQVo7QUFDRDtBQUNGOzs7Ozs7QUFHWWpHLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDL0ZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5sZXQgYWxnb1NlbGVjdCA9IHsgdmFsdWU6IG51bGwgfTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInF1aWNrLXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwiYnViYmxlLXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFkaXgtc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJyYWRpeC1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInNlbGVjdGlvbi1zb3J0XCIpO1xufSk7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihpZCkge1xuICAvLyBUT0RPIGhhbmRsZSBsb2dpYyBvZyBidXR0b24gdmlld3NcbiAgZGVidWdnZXI7XG4gIGlmIChhbGdvU2VsZWN0LnZhbHVlID09PSBudWxsKSB7XG4gICAgbXlGdW5jKGFsZ29TZWxlY3QpO1xuICB9XG4gIGFsZ29TZWxlY3QudmFsdWUgPSBpZDtcblxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkQnV0dG9uXCIpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbn1cblxuZnVuY3Rpb24gbXlGdW5jKGFsZ28pIHtcbiAgbGV0IG15VHJpID0gW107XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuICBsZXQgc3BlZWQgPSB7IHZhbHVlOiA1IH07XG4gIGxldCBzbGljZUZhY3RvciA9IDg7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICByZXNldCgpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0QWxnbygpIHtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyh0cnVlKTtcbiAgICBjb25zb2xlLmxvZyhhbGdvLnZhbHVlLCBcIiBzdGFydGVkIGJ5IGFsZ28tdmFsdWVcIik7XG4gICAgZGVidWdnZXI7XG5cbiAgICBzd2l0Y2ggKGFsZ28udmFsdWUpIHtcbiAgICAgIGNhc2UgXCJxdWljay1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UVMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcImJ1YmJsZS1zb3J0XCI6XG4gICAgICAgIHN0YXJ0QlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInJhZGl4LXNvcnRcIjpcbiAgICAgICAgc3RhcnRSUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLXNvcnRcIjpcbiAgICAgICAgc3RhcnRTUygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU29ydEJ1dHRvbnModmFsdWUpIHtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwidW5jbGlja2FibGVcIik7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcImNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgLy8gbGV0IHFzYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAvLyBxc2IuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIC8vIHFzYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1dHRvbnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGZvcndhcmRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGZvcndhcmRMb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuaWQgPSBcImZvcndhcmRCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGZvcndhcmRMb2FkLmlkID0gXCJmb3J3YXJkTG9hZFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pZCA9IFwiZm9yd2FyZEJ1dHRvblwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OCYjOTY1OFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZEJ1dHRvbik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkTG9hZCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIilcbiAgICAgICAgLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b25Db250YWluZXIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4XCI7XG4gICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEFsZ28pO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBzbGljZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5pZCA9IFwic2xpY2VCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGxldCBsb2FkQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxvYWRCb3JkZXIuaWQgPSBcInNsaWNlTG9hZFwiO1xuICAgICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNsaWNlQnV0dG9uLmlkID0gXCJzbGljZUJ1dHRvblwiO1xuICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgICBzbGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTbGljZSk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChzbGljZUJ1dHRvbik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQobG9hZEJvcmRlcik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKVxuICAgICAgKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcmVzZXRCdXR0b24uaWQgPSBcInJlc2V0QnV0dG9uXCI7XG4gICAgICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjODYzNFwiO1xuICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgIGlmIChzcGVlZC52YWx1ZSA9PT0gNSkge1xuICAgICAgc3BlZWQudmFsdWUgPSA1MDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgbGV0IGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlTG9hZFwiKTtcbiAgICBzd2l0Y2ggKHNsaWNlRmFjdG9yKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMTQ7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjY4JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjUyJVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjM2JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNDA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjE2JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDQwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDUwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDUwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjg0JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUFycigpIHtcbiAgICAvLyBEaXZpZGUgY2FudmFzIGludG8gc2xpY2VzIG9mIGVxdWFsIGxlbmd0aFxuICAgIC8vIFVzZSBsaW5lYXIgY29sb3IgbWFwaW5nIHRvIFRyaWFuZ2xlLnZhbFxuICAgIC8vIFRyaWFuZ2xlLnZhbCB3aWxsIGJlIHNvcnRlZCBmaWVsZFxuICAgIC8vIHhEaXN0IHJlbWFpbnMgc2FtZVxuICAgIGxldCB4RGlzdCA9IDEgLyAoMTAgKiBzbGljZUZhY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAqIHNsaWNlRmFjdG9yOyBpKyspIHtcbiAgICAgIC8vIDAtMjU1IHJhbmRvbSBudW1iZXJcbiAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTQgKyAxKTtcblxuICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICBjYW52YXMsXG4gICAgICAgIGJsdWVSYW5kb21pemVyKHZhbCwgMjU1KSxcbiAgICAgICAgeERpc3QsXG4gICAgICAgIHZhbCxcbiAgICAgICAgc3BlZWRcbiAgICAgICk7XG5cbiAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFZhcnMoKSB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBteVRyaSA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIC8vIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKSwgMTgpO1xuICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgaWYgKHNoYWRlVmFsIDwgMTYpIGdWYWx1ZSA9IFwiMFwiICsgZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gZmFsc2U7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRCUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIGJ1YmJsZVNvcnQoKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnViYmxlIHNvcnQgZmluaXNoZWRcIik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRSUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHJhZGl4U29ydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJyYWRpeCBzb3J0IGZpbmlzaGVkXCIpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0U1MoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBzZWxlY3Rpb25Tb3J0KCkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGlvbiBzb3J0IGZpbmlzaGVkXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnViYmxlU29ydCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnViYmxlIFNvcnQgUlVOTk5JTkdcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSg1KTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJhZGl4U29ydCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmFkaXggU29ydCBSVU5OTklOR1wiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKDUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc2VsZWN0aW9uU29ydCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0aW9uIFNvcnQgUlVOTk5JTkdcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSg1KTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgIC8vIG5lZWRlZCB0byBzZXR1cCBhIHN0cm9uZyByZXNvbHZlLCBuZWVkIHRvIGNvbWUgYmFjayB0byB0aGlzICwgcmVhc29uOiBmb3IgcGF1c2luZyBhbmltYXRpb25cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24yKGFyciwgc3RhcnQsIGVuZCkudGhlbigocGkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgc3RhcnQsIHBpIC0gMSkudGhlbigoKSA9PlxuICAgICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBwaSArIDEsIGVuZClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBubyBsb25nZXIgYmVpbmcgdXNlZCwgaGVsZCBmb3IgcmVmZXJlbmNlXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcbiAgICAgIGxldCB0aW1lQnVmZmVyID0gMDtcbiAgICAgIHdoaWxlIChqIDwgZW5kKSB7XG4gICAgICAgIGorKztcbiAgICAgICAgaWYgKGFycltqXS52YWwgPD0gcGl2b3QpIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN3YXBBbmRSZW5kZXIoaikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwIGhhcHBlbmVkXCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dhcHBpbmdcIiwgYXJyW2ldLCBhcnJbal0pO1xuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsoKTtcbiAgICAgICAgICBhcnJbal0ubWFyaygpO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHJlc29sdmUoaSk7XG4gICAgICAgICAgLy8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICB9LCBqICogc3BlZWQudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcblxuICAgICAgY29uc3Qgc3dhcEFuZFJlbmRlciA9IChqKSA9PiB7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIGFycltlbmRdLmNvbG9yUmVzZXQoKTsgLy8gPSBmYWxzZTtcbiAgICAgICAgICAgIGFycltzdGFydF0uY29sb3JSZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSAhPT0gc3RhcnQgJiYgaiAhPT0gZW5kKSBhcnJbc3RhcnRdLm1hcmtTdGF0aWMoKTtcblxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGkgPCAwKSBhcnJbMF0ubWFyazIoKTtcbiAgICAgICAgICBlbHNlIGFycltpXS5tYXJrMigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgdGltZWRXaGlsZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFycltlbmRdLm1hcmtTdGF0aWMoKTtcbiAgICAgICAgICBpZiAoaiA8IGVuZCkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIGlmIChqICE9PSBlbmQpIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgdGltZWRXaGlsZUxvb3AoKTtcbiAgICB9KTtcbiAgfVxufSAvLyBlbnRpcmUgYmxvY2tcblxuLy8gU3F1YXJlIGNvbnN0cnVjdG9yIGdldHMgYSBjYW52YXMgcHJvcGVydHksIGNvb3JkcyAsIGNvbG9yXG5cbi8vIGZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuLy8gICAgIGNsZWFyRGVtbygpO1xuLy8gICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuLy8gICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4vLyAgICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuLy8gICAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbi8vICAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuLy8gICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbi8vICAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4vLyAgICAgICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4vLyAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbi8vICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuLy8gICAgICAgICAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH07XG5cbi8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICAgICAgXCJ3aW5kb3dcIixcbi8vICAgICAgICAgXCJrZXlkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZUtleURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwibW91c2Vkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZU1vdXNlRG93bixcbi8vICAgICBdKTtcblxuLy8gICAgIC8vIDMyIGlzIEFTQ0lJIGZvciBzcGFjZSwgcmFuZG9taXplIGNvbG9yXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuLy8gICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4vLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbi8vICAgICAgICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC8vIG9uIGNsaWNrIGFuaW1hdGUgbmV3IHNxdWFyZVxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBzcXVhcmVzLnB1c2goXG4vLyAgICAgICAgICAgICBuZXcgU3F1YXJlKFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jdHgsXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgIGxldCBbXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGV2ZW50LFxuICAgICAgaGFuZGxlcixcbiAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgKTtcbiAgfVxufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgY29sb3IgPSBcImdyZWVuXCIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxuXG5cblxuICAgIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QsIHZhbCwgc3BlZWQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuREVGQVVMVF9DT0xPUiA9IGNvbG9yO1xuICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgdGhpcy52YWwgPSB2YWw7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gIH1cblxuICBkcmF3KHhTdGFydCkge1xuICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gMjAwO1xuXG4gICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgIHZhciB0cmlhbmdsZSA9IHtcbiAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICB4MTogY3gsXG4gICAgICB5MTogY3ksXG4gICAgICAvL3RoZSBzZWNvbmQgdmVydGV4IGlzIG9uIHRoZSBjaXJjdW1zY3JpYmVkIGNpcmNsZSBhdCAwIHJhZGlhbnMgd2hlcmUgUiBpcyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUgKCBhID0gMzAsIGI9MzAgKVxuICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgIHkyOiBjaCxcbiAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgdGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgsXG4gICAgICB5MzogY2gsXG4gICAgfTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgbWFyazEoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9DT0xPUjtcbiAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmsyKCkge1xuICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBcIiNGRkQ3MDBcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX0NPTE9SO1xuICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbWFya1N0YXRpYygpIHtcbiAgICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgdGhpcy5jb2xvciA9IFwiI0ZGMDBGRlwiO1xuICAgIC8vIGlmICh0aGlzLnN0YXRpYykge1xuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9DT0xPUjtcbiAgICAvLyAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuY29sb3IgPSBzdHI7XG4gICAgLy8gICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgLy8gfVxuICB9XG5cbiAgY29sb3JSZXNldCgpIHtcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfQ09MT1I7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=