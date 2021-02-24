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
document.querySelector("#selection-sort").addEventListener("click", function () {
  startHandler("selection-sort");
});
var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
canvas.createCanvas();

function startHandler(id) {
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
      var val = Math.floor(Math.random() * 255);
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
    bubbleSort(myTri).then(function () {
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

  function bubbleSort(arr) {
    return new Promise(function (resolve) {
      console.log("bubble Sort RUNNNING");
      var swapsBool = true;
      var i = -1;

      var outerLoop = function outerLoop() {
        if (swapsBool) {
          swapsBool = false;
          i++;
          innerloop(0);
        } else resolve(null);
      };

      var innerloop = function innerloop(start) {
        setTimeout(function () {
          if (start < arr.length - 1 - i) {
            // le 2 character optimization, 49 character comment
            arr[start].mark2();

            if (arr[start].val > arr[start + 1].val) {
              var temp = arr[start];
              arr[start] = arr[start + 1];
              arr[start + 1] = temp;
              swapsBool = true;
              arr[start].mark1();
            }

            start += 1;
            innerloop(start);
          } else outerLoop();
        }, speed.value);
      };

      outerLoop();
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
        // console.log("quick sort swap");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJhbGdvU2VsZWN0IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRIYW5kbGVyIiwiY2FudmFzIiwiY2FudmFzRXhhbXBsZSIsImNyZWF0ZUNhbnZhcyIsImlkIiwibXlGdW5jIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnZXRFbGVtZW50QnlJZCIsImFkZCIsImFsZ28iLCJteVRyaSIsImFuaW1hdGluZyIsInNwZWVkIiwic2xpY2VGYWN0b3IiLCJyZXNldCIsInN0YXJ0QWxnbyIsInRvZ2dsZVNvcnRCdXR0b25zIiwiY29uc29sZSIsImxvZyIsInN0YXJ0UVMiLCJzdGFydEJTIiwic3RhcnRSUyIsInN0YXJ0U1MiLCJ0b2dnbGUiLCJkaXNhYmxlZCIsImluaXRpYWxpemVCdXR0b25zIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyIiwiZm9yd2FyZExvYWQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImN5Y2xlU3BlZWQiLCJoaWRkZW4iLCJwbGF5QnV0dG9uIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uQ29udGFpbmVyIiwibG9hZEJvcmRlciIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwic3R5bGUiLCJyaWdodCIsImxvYWQiLCJpbml0aWFsaXplQXJyIiwieERpc3QiLCJpIiwidmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJyZXNldFZhcnMiLCJjbGVhckNhbnZhcyIsImFuaW1hdGlvbiIsInN1bSIsImxlbmd0aCIsImRyYXciLCJ3aWR0aCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsImNlaWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsImhpZGVCdXR0b25zIiwiZW5hYmxlQnV0dG9ucyIsInF1aWNrU29ydCIsInRoZW4iLCJidWJibGVTb3J0IiwicmFkaXhTb3J0Iiwic2VsZWN0aW9uU29ydCIsImFyciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3dhcHNCb29sIiwib3V0ZXJMb29wIiwiaW5uZXJsb29wIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwibWFyazIiLCJ0ZW1wIiwibWFyazEiLCJlbmQiLCJ4U3RhcnQiLCJxdWlja1NvcnRQYXJ0aXRpb24yIiwicGkiLCJxdWlja1NvcnRQYXJ0aXRpb24iLCJyZWplY3QiLCJwaXZvdCIsImoiLCJ0aW1lQnVmZmVyIiwic3dhcEFuZFJlbmRlciIsIm1hcmsiLCJjb2xvclJlc2V0IiwibWFya1N0YXRpYyIsInRpbWVkV2hpbGVMb29wIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwicG9wIiwic2VsZWN0b3IiLCJldmVudCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJEZW1vIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEF0dHJpYnV0ZSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJjb2xvciIsImZpbGxDb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsIlNxdWFyZSIsImNvb3JkcyIsImFuaW1hdGlvbkRpciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiREVGQVVMVF9DT0xPUiIsIm1hcmtlZCIsInN0YXRpYyIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFLElBRE07QUFFdEJDLHVCQUFxQixFQUFFO0FBRkQsQ0FBeEI7QUFLQSxJQUFJQyxVQUFVLEdBQUc7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBakI7QUFFQUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0UsWUFBTTtBQUNwRUMsY0FBWSxDQUFDLFlBQUQsQ0FBWjtBQUNELENBRkQ7QUFHQUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBTTtBQUNyRUMsY0FBWSxDQUFDLGFBQUQsQ0FBWjtBQUNELENBRkQ7QUFHQUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0UsWUFBTTtBQUNwRUMsY0FBWSxDQUFDLFlBQUQsQ0FBWjtBQUNELENBRkQ7QUFHQUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0MsZ0JBQTFDLENBQTJELE9BQTNELEVBQW9FLFlBQU07QUFDeEVDLGNBQVksQ0FBQyxnQkFBRCxDQUFaO0FBQ0QsQ0FGRDtBQUlBLElBQU1DLE1BQU0sR0FBRyxJQUFJQyx1REFBSixFQUFmO0FBQ0FELE1BQU0sQ0FBQ0UsWUFBUDs7QUFFQSxTQUFTSCxZQUFULENBQXNCSSxFQUF0QixFQUEwQjtBQUN4QixNQUFJVCxVQUFVLENBQUNDLEtBQVgsS0FBcUIsSUFBekIsRUFBK0I7QUFDN0JTLFVBQU0sQ0FBQ1YsVUFBRCxDQUFOO0FBQ0Q7O0FBQ0RBLFlBQVUsQ0FBQ0MsS0FBWCxHQUFtQlEsRUFBbkI7QUFFQUUsT0FBSyxDQUFDQyxJQUFOLENBQVdWLFFBQVEsQ0FBQ1csc0JBQVQsQ0FBZ0MsTUFBaEMsQ0FBWCxFQUFvREMsT0FBcEQsQ0FBNEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ25FQSxPQUFHLENBQUNDLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixnQkFBckI7QUFDRCxHQUZEO0FBR0FmLFVBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0JULEVBQXhCLEVBQTRCTyxTQUE1QixDQUFzQ0csR0FBdEMsQ0FBMEMsZ0JBQTFDO0FBQ0Q7O0FBRUQsU0FBU1QsTUFBVCxDQUFnQlUsSUFBaEIsRUFBc0I7QUFDcEIsTUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxNQUFJQyxLQUFLLEdBQUc7QUFBRXRCLFNBQUssRUFBRTtBQUFULEdBQVo7QUFDQSxNQUFJdUIsV0FBVyxHQUFHLENBQWxCLENBSm9CLENBSUM7O0FBRXJCQyxPQUFLOztBQUVMLFdBQVNDLFNBQVQsR0FBcUI7QUFDbkJDLHFCQUFpQixDQUFDLElBQUQsQ0FBakI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlULElBQUksQ0FBQ25CLEtBQWpCLEVBQXdCLHdCQUF4Qjs7QUFDQSxZQUFRbUIsSUFBSSxDQUFDbkIsS0FBYjtBQUNFLFdBQUssWUFBTDtBQUNFNkIsZUFBTztBQUNQOztBQUNGLFdBQUssYUFBTDtBQUNFQyxlQUFPO0FBQ1A7O0FBQ0YsV0FBSyxZQUFMO0FBQ0VDLGVBQU87QUFDUDs7QUFDRixXQUFLLGdCQUFMO0FBQ0VDLGVBQU87QUFDUDtBQVpKO0FBY0Q7O0FBRUQsV0FBU04saUJBQVQsQ0FBMkIxQixLQUEzQixFQUFrQztBQUNoQ1UsU0FBSyxDQUFDQyxJQUFOLENBQVdWLFFBQVEsQ0FBQ1csc0JBQVQsQ0FBZ0MsTUFBaEMsQ0FBWCxFQUFvREMsT0FBcEQsQ0FBNEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ25FQSxTQUFHLENBQUNDLFNBQUosQ0FBY2tCLE1BQWQsQ0FBcUIsYUFBckI7QUFDQW5CLFNBQUcsQ0FBQ0MsU0FBSixDQUFja0IsTUFBZCxDQUFxQixXQUFyQjtBQUNBbkIsU0FBRyxDQUFDb0IsUUFBSixHQUFlbEMsS0FBZjtBQUNELEtBSkQsRUFEZ0MsQ0FPaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUVELFdBQVNtQyxpQkFBVCxHQUE2QjtBQUMzQixRQUFJbEMsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixlQUF4QixNQUE2QyxJQUFqRCxFQUF1RDtBQUNyRCxVQUFJbUIsYUFBYSxHQUFHbkMsUUFBUSxDQUFDb0MsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBLFVBQUlDLHNCQUFzQixHQUFHckMsUUFBUSxDQUFDb0MsYUFBVCxDQUF1QixLQUF2QixDQUE3QjtBQUNBLFVBQUlFLFdBQVcsR0FBR3RDLFFBQVEsQ0FBQ29DLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQUMsNEJBQXNCLENBQUM5QixFQUF2QixHQUE0Qix3QkFBNUI7QUFDQStCLGlCQUFXLENBQUMvQixFQUFaLEdBQWlCLGFBQWpCO0FBQ0E0QixtQkFBYSxDQUFDNUIsRUFBZCxHQUFtQixlQUFuQjtBQUNBNEIsbUJBQWEsQ0FBQ0ksU0FBZCxHQUEwQixjQUExQjtBQUNBRiw0QkFBc0IsQ0FBQ0csTUFBdkIsQ0FBOEJMLGFBQTlCO0FBQ0FFLDRCQUFzQixDQUFDRyxNQUF2QixDQUE4QkYsV0FBOUI7QUFDQXRDLGNBQVEsQ0FDTGdCLGNBREgsQ0FDa0IsaUJBRGxCLEVBRUd5QixXQUZILENBRWVKLHNCQUZmO0FBR0FyQyxjQUFRLENBQ0xnQixjQURILENBQ2tCLGVBRGxCLEVBRUdkLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCd0MsVUFGN0I7QUFHRCxLQWhCRCxNQWdCTzFDLFFBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MyQixNQUF0QyxHQUErQyxLQUEvQzs7QUFFUCxRQUFJM0MsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixZQUF4QixNQUEwQyxJQUE5QyxFQUFvRDtBQUNsRCxVQUFJNEIsVUFBVSxHQUFHNUMsUUFBUSxDQUFDb0MsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBUSxnQkFBVSxDQUFDckMsRUFBWCxHQUFnQixZQUFoQjtBQUNBcUMsZ0JBQVUsQ0FBQ0wsU0FBWCxHQUF1QixRQUF2QjtBQUNBSyxnQkFBVSxDQUFDMUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNzQixTQUFyQztBQUNBLFVBQU1xQixNQUFNLEdBQUc3QyxRQUFRLENBQUNnQixjQUFULENBQXdCLGlCQUF4QixDQUFmO0FBQ0E2QixZQUFNLENBQUNDLFlBQVAsQ0FBb0JGLFVBQXBCLEVBQWdDQyxNQUFNLENBQUNFLFVBQXZDO0FBQ0QsS0FQRCxNQU9PL0MsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3Qix3QkFBeEIsRUFBa0QyQixNQUFsRCxHQUEyRCxLQUEzRDs7QUFFUCxRQUFJM0MsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixhQUF4QixNQUEyQyxJQUEvQyxFQUFxRDtBQUNuRCxVQUFJZ0Msb0JBQW9CLEdBQUdoRCxRQUFRLENBQUNvQyxhQUFULENBQXVCLEtBQXZCLENBQTNCO0FBQ0FZLDBCQUFvQixDQUFDekMsRUFBckIsR0FBMEIsc0JBQTFCO0FBQ0EsVUFBSTBDLFVBQVUsR0FBR2pELFFBQVEsQ0FBQ29DLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7QUFDQWEsZ0JBQVUsQ0FBQzFDLEVBQVgsR0FBZ0IsV0FBaEI7QUFDQSxVQUFJMkMsV0FBVyxHQUFHbEQsUUFBUSxDQUFDb0MsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUNBYyxpQkFBVyxDQUFDM0MsRUFBWixHQUFpQixhQUFqQjtBQUNBMkMsaUJBQVcsQ0FBQ1gsU0FBWixHQUF3QixHQUF4QjtBQUNBVyxpQkFBVyxDQUFDaEQsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0NpRCxVQUF0Qzs7QUFDQSxVQUFNTixPQUFNLEdBQUc3QyxRQUFRLENBQUNnQixjQUFULENBQXdCLGlCQUF4QixDQUFmOztBQUNBZ0MsMEJBQW9CLENBQUNSLE1BQXJCLENBQTRCVSxXQUE1QjtBQUNBRiwwQkFBb0IsQ0FBQ1IsTUFBckIsQ0FBNEJTLFVBQTVCOztBQUNBSixhQUFNLENBQUNDLFlBQVAsQ0FDRUUsb0JBREYsRUFFRWhELFFBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0IsYUFBeEIsQ0FGRjtBQUlELEtBaEJELE1BZ0JPaEIsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0QyQixNQUFoRCxHQUF5RCxLQUF6RDs7QUFFUCxRQUFJM0MsUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixhQUF4QixNQUEyQyxJQUEvQyxFQUFxRDtBQUNuRCxVQUFJb0MsV0FBVyxHQUFHcEQsUUFBUSxDQUFDb0MsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUNBZ0IsaUJBQVcsQ0FBQzdDLEVBQVosR0FBaUIsYUFBakI7QUFDQTZDLGlCQUFXLENBQUNiLFNBQVosR0FBd0IsUUFBeEI7QUFDQWEsaUJBQVcsQ0FBQ2xELGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDcUIsS0FBdEM7O0FBQ0EsVUFBTXNCLFFBQU0sR0FBRzdDLFFBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWY7O0FBQ0E2QixjQUFNLENBQUNKLFdBQVAsQ0FBbUJXLFdBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTVixVQUFULEdBQXNCO0FBQ3BCLFFBQUlyQixLQUFLLENBQUN0QixLQUFOLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCc0IsV0FBSyxDQUFDdEIsS0FBTixHQUFjLEVBQWQ7QUFDQUMsY0FBUSxDQUFDZ0IsY0FBVCxDQUF3QixhQUF4QixFQUF1Q3FDLEtBQXZDLENBQTZDQyxLQUE3QyxHQUFxRCxLQUFyRDtBQUNELEtBSEQsTUFHTztBQUNMakMsV0FBSyxDQUFDdEIsS0FBTixHQUFjLENBQWQ7QUFDQUMsY0FBUSxDQUFDZ0IsY0FBVCxDQUF3QixhQUF4QixFQUF1Q3FDLEtBQXZDLENBQTZDQyxLQUE3QyxHQUFxRCxJQUFyRDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0gsVUFBVCxHQUFzQjtBQUNwQixRQUFJSSxJQUFJLEdBQUd2RCxRQUFRLENBQUNnQixjQUFULENBQXdCLFdBQXhCLENBQVg7O0FBQ0EsWUFBUU0sV0FBUjtBQUNFLFdBQUssQ0FBTDtBQUNFQSxtQkFBVyxHQUFHLEVBQWQ7QUFDQWlDLFlBQUksQ0FBQ0YsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEtBQW5CO0FBRUEvQixhQUFLO0FBQ0w7O0FBQ0YsV0FBSyxFQUFMO0FBQ0VELG1CQUFXLEdBQUcsRUFBZDtBQUNBaUMsWUFBSSxDQUFDRixLQUFMLENBQVdDLEtBQVgsR0FBbUIsS0FBbkI7QUFFQS9CLGFBQUs7QUFDTDs7QUFDRixXQUFLLEVBQUw7QUFDRUQsbUJBQVcsR0FBRyxFQUFkO0FBQ0FpQyxZQUFJLENBQUNGLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixLQUFuQjtBQUVBL0IsYUFBSztBQUNMOztBQUNGLFdBQUssRUFBTDtBQUNFRCxtQkFBVyxHQUFHLEVBQWQ7QUFDQWlDLFlBQUksQ0FBQ0YsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEtBQW5CO0FBQ0EvQixhQUFLO0FBQ0w7O0FBQ0YsV0FBSyxFQUFMO0FBQ0VELG1CQUFXLEdBQUcsRUFBZDtBQUNBaUMsWUFBSSxDQUFDRixLQUFMLENBQVdDLEtBQVgsR0FBbUIsSUFBbkI7QUFDQS9CLGFBQUs7QUFDTDs7QUFDRixXQUFLLEVBQUw7QUFDRUQsbUJBQVcsR0FBRyxDQUFkO0FBQ0FpQyxZQUFJLENBQUNGLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixLQUFuQjtBQUNBL0IsYUFBSztBQUNMO0FBakNKO0FBbUNEOztBQUVELFdBQVNpQyxhQUFULEdBQXlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLEtBQUssS0FBS25DLFdBQVYsQ0FBWjs7QUFDQSxTQUFLLElBQUlvQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtwQyxXQUF6QixFQUFzQ29DLENBQUMsRUFBdkMsRUFBMkM7QUFDekM7QUFDQSxVQUFJQyxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsQ0FBVjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyx5REFBSixDQUNiNUQsTUFEYSxFQUViNkQsY0FBYyxDQUFDTixHQUFELEVBQU0sR0FBTixDQUZELEVBR2JGLEtBSGEsRUFJYkUsR0FKYSxFQUtidEMsS0FMYSxDQUFmO0FBUUFGLFdBQUssQ0FBQytDLElBQU4sQ0FBV0gsTUFBWDtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0ksU0FBVCxHQUFxQjtBQUNuQi9ELFVBQU0sQ0FBQ2dFLFdBQVA7QUFDQWhELGFBQVMsR0FBRyxJQUFaO0FBQ0FELFNBQUssR0FBRyxFQUFSO0FBQ0Q7O0FBRUQsV0FBU0ksS0FBVCxHQUFpQjtBQUNmVyxxQkFBaUI7QUFDakJpQyxhQUFTO0FBQ1RYLGlCQUFhO0FBQ2Q7O0FBRUQsTUFBTWEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixRQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUNBbEUsVUFBTSxDQUFDZ0UsV0FBUDs7QUFDQSxTQUFLLElBQUlWLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd2QyxLQUFLLENBQUNvRCxNQUExQixFQUFrQ2IsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQ3ZDLFdBQUssQ0FBQ3VDLENBQUQsQ0FBTCxDQUFTYyxJQUFULENBQWNGLEdBQWQ7QUFDQUEsU0FBRyxJQUFJbkQsS0FBSyxDQUFDdUMsQ0FBRCxDQUFMLENBQVNELEtBQVQsR0FBaUJyRCxNQUFNLENBQUNBLE1BQVAsQ0FBY3FFLEtBQXRDO0FBQ0Q7O0FBQ0QsUUFBSXJELFNBQUosRUFBZTtBQUNic0QsWUFBTSxDQUFDQyxxQkFBUCxDQUE2Qk4sU0FBN0I7QUFDRDtBQUNGLEdBVkQ7O0FBWUFLLFFBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJOLFNBQTdCLEVBaE1vQixDQWlNcEI7QUFDQTs7QUFDQSxXQUFTSixjQUFULENBQXdCVyxVQUF4QixFQUFvQ0MsTUFBcEMsRUFBNEM7QUFDMUMsUUFBSUMsUUFBUSxHQUFHbEIsSUFBSSxDQUFDbUIsSUFBTCxDQUFXSCxVQUFVLEdBQUdDLE1BQWQsR0FBd0IsR0FBbEMsQ0FBZjtBQUVBLFFBQUlHLE1BQU0sR0FBRyxJQUFiLENBSDBDLENBR3ZCOztBQUNuQixRQUFJQyxNQUFNLEdBQUdILFFBQVEsQ0FBQ0ksUUFBVCxDQUFrQixFQUFsQixDQUFiO0FBQ0EsUUFBSUosUUFBUSxHQUFHLEVBQWYsRUFBbUJHLE1BQU0sR0FBRyxNQUFNQSxNQUFmO0FBRW5CLHNCQUFXRCxNQUFNLEdBQUdDLE1BQXBCO0FBQ0Q7O0FBRUQsV0FBU0UsV0FBVCxHQUF1QjtBQUNyQm5GLFlBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MyQixNQUF0QyxHQUErQyxJQUEvQztBQUNBM0MsWUFBUSxDQUFDZ0IsY0FBVCxDQUF3Qix3QkFBeEIsRUFBa0QyQixNQUFsRCxHQUEyRCxJQUEzRDtBQUNBM0MsWUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixzQkFBeEIsRUFBZ0QyQixNQUFoRCxHQUF5RCxJQUF6RDtBQUNBLFFBQUlTLFdBQVcsR0FBR3BELFFBQVEsQ0FBQ2dCLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbEI7QUFDQW9DLGVBQVcsQ0FBQ1QsTUFBWixHQUFxQixJQUFyQjtBQUNBUyxlQUFXLENBQUN0QyxTQUFaLENBQXNCRyxHQUF0QixDQUEwQixhQUExQjtBQUNEOztBQUVELFdBQVNtRSxhQUFULEdBQXlCO0FBQ3ZCLFFBQUloQyxXQUFXLEdBQUdwRCxRQUFRLENBQUNnQixjQUFULENBQXdCLGFBQXhCLENBQWxCO0FBQ0FvQyxlQUFXLENBQUNULE1BQVosR0FBcUIsS0FBckI7QUFDQVMsZUFBVyxDQUFDdEMsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsYUFBN0I7QUFDQVUscUJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNEOztBQUVELFdBQVNHLE9BQVQsR0FBbUI7QUFDakJ1RCxlQUFXO0FBQ1hFLGFBQVMsQ0FBQ2xFLEtBQUQsRUFBUSxDQUFSLEVBQVdBLEtBQUssQ0FBQ29ELE1BQU4sR0FBZSxDQUExQixDQUFULENBQXNDZSxJQUF0QyxDQUEyQyxZQUFNO0FBQy9DRixtQkFBYTtBQUNkLEtBRkQ7QUFHRDs7QUFFRCxXQUFTdkQsT0FBVCxHQUFtQjtBQUNqQnNELGVBQVc7QUFDWEksY0FBVSxDQUFDcEUsS0FBRCxDQUFWLENBQWtCbUUsSUFBbEIsQ0FBdUIsWUFBTTtBQUMzQkYsbUJBQWE7QUFDYjFELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0QsS0FIRDtBQUlEOztBQUNELFdBQVNHLE9BQVQsR0FBbUI7QUFDakJxRCxlQUFXO0FBQ1hLLGFBQVMsR0FBR0YsSUFBWixDQUFpQixZQUFNO0FBQ3JCRixtQkFBYTtBQUNiMUQsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDRCxLQUhEO0FBSUQ7O0FBQ0QsV0FBU0ksT0FBVCxHQUFtQjtBQUNqQm9ELGVBQVc7QUFDWE0saUJBQWEsR0FBR0gsSUFBaEIsQ0FBcUIsWUFBTTtBQUN6QkYsbUJBQWE7QUFDYjFELGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0QsS0FIRDtBQUlEOztBQUVELFdBQVM0RCxVQUFULENBQW9CRyxHQUFwQixFQUF5QjtBQUN2QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUJsRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLFVBQUlrRSxTQUFTLEdBQUcsSUFBaEI7QUFDQSxVQUFJbkMsQ0FBQyxHQUFHLENBQUMsQ0FBVDs7QUFDQSxVQUFNb0MsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFJRCxTQUFKLEVBQWU7QUFDYkEsbUJBQVMsR0FBRyxLQUFaO0FBQ0FuQyxXQUFDO0FBQ0RxQyxtQkFBUyxDQUFDLENBQUQsQ0FBVDtBQUNELFNBSkQsTUFJT0gsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNSLE9BTkQ7O0FBUUEsVUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCQyxrQkFBVSxDQUFDLFlBQU07QUFDZixjQUFJRCxLQUFLLEdBQUdOLEdBQUcsQ0FBQ25CLE1BQUosR0FBYSxDQUFiLEdBQWlCYixDQUE3QixFQUFnQztBQUM5QjtBQUNBZ0MsZUFBRyxDQUFDTSxLQUFELENBQUgsQ0FBV0UsS0FBWDs7QUFDQSxnQkFBSVIsR0FBRyxDQUFDTSxLQUFELENBQUgsQ0FBV3JDLEdBQVgsR0FBaUIrQixHQUFHLENBQUNNLEtBQUssR0FBRyxDQUFULENBQUgsQ0FBZXJDLEdBQXBDLEVBQXlDO0FBQ3ZDLGtCQUFNd0MsSUFBSSxHQUFHVCxHQUFHLENBQUNNLEtBQUQsQ0FBaEI7QUFDQU4saUJBQUcsQ0FBQ00sS0FBRCxDQUFILEdBQWFOLEdBQUcsQ0FBQ00sS0FBSyxHQUFHLENBQVQsQ0FBaEI7QUFDQU4saUJBQUcsQ0FBQ00sS0FBSyxHQUFHLENBQVQsQ0FBSCxHQUFpQkcsSUFBakI7QUFDQU4sdUJBQVMsR0FBRyxJQUFaO0FBQ0FILGlCQUFHLENBQUNNLEtBQUQsQ0FBSCxDQUFXSSxLQUFYO0FBQ0Q7O0FBQ0RKLGlCQUFLLElBQUksQ0FBVDtBQUNBRCxxQkFBUyxDQUFDQyxLQUFELENBQVQ7QUFDRCxXQVpELE1BWU9GLFNBQVM7QUFDakIsU0FkUyxFQWNQekUsS0FBSyxDQUFDdEIsS0FkQyxDQUFWO0FBZUQsT0FoQkQ7O0FBaUJBK0YsZUFBUztBQUNWLEtBOUJNLENBQVA7QUErQkQ7O0FBRUQsV0FBU04sU0FBVCxHQUFxQjtBQUNuQixXQUFPLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUJsRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBc0UsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2ZMLGVBQU8sQ0FBQyxDQUFELENBQVA7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsS0FMTSxDQUFQO0FBTUQ7O0FBQ0QsV0FBU0gsYUFBVCxHQUF5QjtBQUN2QixXQUFPLElBQUlFLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUJsRSxhQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBc0UsZ0JBQVUsQ0FBQyxZQUFNO0FBQ2ZMLGVBQU8sQ0FBQyxDQUFELENBQVA7QUFDRCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsS0FMTSxDQUFQO0FBTUQ7O0FBRUQsV0FBU1AsU0FBVCxDQUFtQkssR0FBbkIsRUFBd0JNLEtBQXhCLEVBQStCSyxHQUEvQixFQUFnRDtBQUFBLFFBQVpDLE1BQVksdUVBQUgsQ0FBRztBQUM5QztBQUNBLFdBQU8sSUFBSVgsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixVQUFJSSxLQUFLLEdBQUdLLEdBQVosRUFBaUI7QUFDZkUsMkJBQW1CLENBQUNiLEdBQUQsRUFBTU0sS0FBTixFQUFhSyxHQUFiLENBQW5CLENBQXFDZixJQUFyQyxDQUEwQyxVQUFDa0IsRUFBRCxFQUFRO0FBQ2hEWixpQkFBTyxDQUNMUCxTQUFTLENBQUNLLEdBQUQsRUFBTU0sS0FBTixFQUFhUSxFQUFFLEdBQUcsQ0FBbEIsQ0FBVCxDQUE4QmxCLElBQTlCLENBQW1DO0FBQUEsbUJBQ2pDRCxTQUFTLENBQUNLLEdBQUQsRUFBTWMsRUFBRSxHQUFHLENBQVgsRUFBY0gsR0FBZCxDQUR3QjtBQUFBLFdBQW5DLENBREssQ0FBUDtBQUtELFNBTkQ7QUFPRCxPQVJELE1BUU9ULE9BQU87QUFDZixLQVZNLENBQVA7QUFXRCxHQTFUbUIsQ0E0VHBCOzs7QUFDQSxXQUFTYSxrQkFBVCxDQUE0QmYsR0FBNUIsRUFBaUNNLEtBQWpDLEVBQXdDSyxHQUF4QyxFQUE2QztBQUMzQyxXQUFPLElBQUlWLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CYyxNQUFuQixFQUEyQjtBQUM1QyxVQUFJQyxLQUFLLEdBQUdqQixHQUFHLENBQUNXLEdBQUQsQ0FBSCxDQUFTMUMsR0FBckI7QUFDQSxVQUFJRCxDQUFDLEdBQUdzQyxLQUFLLEdBQUcsQ0FBaEIsQ0FGNEMsQ0FFekI7O0FBQ25CLFVBQUlZLENBQUMsR0FBR1osS0FBSyxHQUFHLENBQWhCO0FBQ0EsVUFBSWEsVUFBVSxHQUFHLENBQWpCOztBQUNBLGFBQU9ELENBQUMsR0FBR1AsR0FBWCxFQUFnQjtBQUNkTyxTQUFDO0FBQ0QsWUFBSWxCLEdBQUcsQ0FBQ2tCLENBQUQsQ0FBSCxDQUFPakQsR0FBUCxJQUFjZ0QsS0FBbEIsRUFBeUJHLGFBQWEsQ0FBQ0YsQ0FBRCxDQUFiO0FBQzFCOztBQUVELGVBQVNFLGFBQVQsQ0FBdUJGLENBQXZCLEVBQTBCO0FBQ3hCWCxrQkFBVSxDQUFDLFlBQVk7QUFDckJ2QyxXQUFDLEdBRG9CLENBRXJCO0FBQ0E7O0FBQ0EsY0FBTXlDLElBQUksR0FBR1QsR0FBRyxDQUFDaEMsQ0FBRCxDQUFoQjtBQUNBZ0MsYUFBRyxDQUFDaEMsQ0FBRCxDQUFILEdBQVNnQyxHQUFHLENBQUNrQixDQUFELENBQVo7QUFDQWxCLGFBQUcsQ0FBQ2tCLENBQUQsQ0FBSCxHQUFTVCxJQUFUO0FBQ0FULGFBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPcUQsSUFBUDtBQUNBckIsYUFBRyxDQUFDa0IsQ0FBRCxDQUFILENBQU9HLElBQVA7QUFDQSxjQUFJSCxDQUFDLEtBQUtQLEdBQVYsRUFBZVQsT0FBTyxDQUFDbEMsQ0FBRCxDQUFQLENBVE0sQ0FVckI7QUFDRCxTQVhTLEVBV1BrRCxDQUFDLEdBQUd2RixLQUFLLENBQUN0QixLQVhILENBQVY7QUFZRDtBQUNGLEtBeEJNLENBQVA7QUF5QkQ7O0FBRUQsV0FBU3dHLG1CQUFULENBQTZCYixHQUE3QixFQUFrQ00sS0FBbEMsRUFBeUNLLEdBQXpDLEVBQThDO0FBQzVDLFdBQU8sSUFBSVYsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJjLE1BQW5CLEVBQTJCO0FBQzVDLFVBQUlDLEtBQUssR0FBR2pCLEdBQUcsQ0FBQ1csR0FBRCxDQUFILENBQVMxQyxHQUFyQjtBQUNBLFVBQUlELENBQUMsR0FBR3NDLEtBQUssR0FBRyxDQUFoQixDQUY0QyxDQUV6Qjs7QUFDbkIsVUFBSVksQ0FBQyxHQUFHWixLQUFLLEdBQUcsQ0FBaEI7O0FBRUEsVUFBTWMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixDQUFELEVBQU87QUFDM0I7QUFDQSxZQUFJbEIsR0FBRyxDQUFDa0IsQ0FBRCxDQUFILENBQU9qRCxHQUFQLElBQWNnRCxLQUFsQixFQUF5QjtBQUN2QmpELFdBQUM7O0FBQ0QsY0FBSWtELENBQUMsS0FBS1AsR0FBVixFQUFlO0FBQ2JYLGVBQUcsQ0FBQ1csR0FBRCxDQUFILENBQVNXLFVBQVQsR0FEYSxDQUNVOztBQUN2QnRCLGVBQUcsQ0FBQ00sS0FBRCxDQUFILENBQVdnQixVQUFYO0FBQ0Q7O0FBQ0QsY0FBSXRELENBQUMsS0FBS3NDLEtBQU4sSUFBZVksQ0FBQyxLQUFLUCxHQUF6QixFQUE4QlgsR0FBRyxDQUFDTSxLQUFELENBQUgsQ0FBV2lCLFVBQVg7QUFFOUIsY0FBTWQsSUFBSSxHQUFHVCxHQUFHLENBQUNoQyxDQUFELENBQWhCO0FBQ0FnQyxhQUFHLENBQUNoQyxDQUFELENBQUgsR0FBU2dDLEdBQUcsQ0FBQ2tCLENBQUQsQ0FBWjtBQUNBbEIsYUFBRyxDQUFDa0IsQ0FBRCxDQUFILEdBQVNULElBQVQ7QUFDQVQsYUFBRyxDQUFDaEMsQ0FBRCxDQUFILENBQU93QyxLQUFQO0FBQ0FSLGFBQUcsQ0FBQ2tCLENBQUQsQ0FBSCxDQUFPVixLQUFQOztBQUNBLGNBQUlVLENBQUMsS0FBS1AsR0FBVixFQUFlO0FBQ2JULG1CQUFPLENBQUNsQyxDQUFELENBQVA7QUFDRDtBQUNGLFNBaEJELE1BZ0JPO0FBQ0xnQyxhQUFHLENBQUNrQixDQUFELENBQUgsQ0FBT1YsS0FBUDtBQUNBLGNBQUl4QyxDQUFDLEdBQUcsQ0FBUixFQUFXZ0MsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPUSxLQUFQLEdBQVgsS0FDS1IsR0FBRyxDQUFDaEMsQ0FBRCxDQUFILENBQU93QyxLQUFQO0FBQ047QUFDRixPQXZCRDs7QUF3QkEsVUFBTWdCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQmpCLGtCQUFVLENBQUMsWUFBTTtBQUNmUCxhQUFHLENBQUNXLEdBQUQsQ0FBSCxDQUFTWSxVQUFUOztBQUNBLGNBQUlMLENBQUMsR0FBR1AsR0FBUixFQUFhO0FBQ1hPLGFBQUM7QUFDREUseUJBQWEsQ0FBQ0YsQ0FBRCxDQUFiO0FBQ0EsZ0JBQUlBLENBQUMsS0FBS1AsR0FBVixFQUFlYSxjQUFjO0FBQzlCO0FBQ0YsU0FQUyxFQU9QN0YsS0FBSyxDQUFDdEIsS0FQQyxDQUFWO0FBUUQsT0FURDs7QUFVQW1ILG9CQUFjO0FBQ2YsS0F4Q00sQ0FBUDtBQXlDRDtBQUNGLEMsQ0FBQztBQUVGO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0Msd0JBQVQsR0FBb0M7QUFDbEMsU0FBT3hILGVBQWUsQ0FBQ0UscUJBQWhCLENBQXNDMEUsTUFBN0MsRUFBcUQ7QUFBQSxnQ0FLL0M1RSxlQUFlLENBQUNFLHFCQUFoQixDQUFzQ3VILEdBQXRDLEVBTCtDO0FBQUE7QUFBQSxRQUVqREMsUUFGaUQ7QUFBQSxRQUdqREMsS0FIaUQ7QUFBQSxRQUlqREMsT0FKaUQ7O0FBTW5ELFFBQUlGLFFBQVEsS0FBSyxRQUFqQixFQUEyQjtBQUN6QjNDLFlBQU0sQ0FBQzhDLG1CQUFQLENBQTJCRixLQUEzQixFQUFrQ0MsT0FBbEMsRUFEeUIsQ0FFekI7QUFDRCxLQUhELE1BR087QUFDTHZILGNBQVEsQ0FBQ0MsYUFBVCxDQUF1Qm9ILFFBQXZCLEVBQWlDRyxtQkFBakMsQ0FBcURGLEtBQXJELEVBQTREQyxPQUE1RDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTRSxTQUFULEdBQXFCO0FBQ25CLE1BQUk5SCxlQUFlLENBQUNDLGNBQWhCLEtBQW1DLFlBQXZDLEVBQ0VJLFFBQVEsQ0FBQzBILElBQVQsQ0FBY0MsV0FBZCxDQUEwQjNILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUExQjs7QUFDRixNQUFJTixlQUFlLENBQUNDLGNBQWhCLEtBQW1DLFNBQXZDLEVBQWtEO0FBQ2hELHVCQUFJSSxRQUFRLENBQUM0SCxnQkFBVCxDQUEwQixPQUExQixDQUFKLEVBQXdDaEgsT0FBeEMsQ0FBZ0QsVUFBQ2lILElBQUQ7QUFBQSxhQUM5QzdILFFBQVEsQ0FBQzBILElBQVQsQ0FBY0MsV0FBZCxDQUEwQkUsSUFBMUIsQ0FEOEM7QUFBQSxLQUFoRDtBQUdEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3RnQkt4SCxhO0FBQ0YseUJBQVl5SCxLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBSzFILE1BQUwsR0FBY0osUUFBUSxDQUFDb0MsYUFBVCxDQUF1QixRQUF2QixDQUFkO0FBQ0EsU0FBS2hDLE1BQUwsQ0FBWXFFLEtBQVosR0FBb0JDLE1BQU0sQ0FBQ3FELFVBQTNCO0FBQ0EsU0FBSzNILE1BQUwsQ0FBWTRILE1BQVosR0FBcUJ0RCxNQUFNLENBQUN1RCxXQUE1QjtBQUNBLFNBQUs3SCxNQUFMLENBQVk4SCxZQUFaLENBQXlCLFFBQXpCLFlBQXNDeEQsTUFBTSxDQUFDdUQsV0FBN0M7QUFFQSxTQUFLN0gsTUFBTCxDQUFZOEgsWUFBWixDQUF5QixJQUF6QixFQUErQixRQUEvQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLL0gsTUFBTCxDQUFZZ0ksVUFBWixDQUF1QixJQUF2QixDQUFYO0FBRUg7Ozs7V0FDRCx3QkFBZTtBQUNQcEksY0FBUSxDQUFDMEgsSUFBVCxDQUFjbEYsTUFBZCxDQUFxQixLQUFLcEMsTUFBMUIsRUFETyxDQUVQO0FBQ0E7QUFDSCxLLENBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSjtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7V0FDQSx1QkFBYztBQUNWLFdBQUsrSCxHQUFMLENBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2pJLE1BQUwsQ0FBWXFFLEtBQXJDLEVBQTRDLEtBQUtyRSxNQUFMLENBQVk0SCxNQUF4RDtBQUNBLFdBQUs1SCxNQUFMLENBQVlxRSxLQUFaLEdBQW9CQyxNQUFNLENBQUNxRCxVQUEzQjtBQUNBLFdBQUszSCxNQUFMLENBQVk0SCxNQUFaLEdBQXFCdEQsTUFBTSxDQUFDdUQsV0FBNUI7QUFDSDs7O1dBQ0Qsa0JBQVNLLEtBQVQsRUFBZ0I7QUFDWixXQUFLQyxTQUFMLEdBQWlCRCxLQUFqQjtBQUNBdEksY0FBUSxDQUFDMEgsSUFBVCxDQUFjckUsS0FBZCxDQUFvQm1GLGVBQXBCLEdBQXNDRixLQUF0QztBQUNBdEksY0FBUSxDQUFDMEgsSUFBVCxDQUFjckUsS0FBZCxDQUFvQm9GLE1BQXBCO0FBQ0g7Ozs7OztBQUdVcEksNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzNDTXFJLE07QUFDRixrQkFBWVAsR0FBWixFQUFpQlEsTUFBakIsRUFBMEM7QUFBQSxRQUFqQkwsS0FBaUIsdUVBQVQsT0FBUzs7QUFBQTs7QUFDdEMsU0FBS0gsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS1EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0wsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS00sWUFBTCxHQUFvQixDQUFwQjtBQUNIOzs7O1dBRUQsc0JBQWE7QUFBQTs7QUFDVCxXQUFLVCxHQUFMLENBQVNVLFNBQVQsR0FBcUIsS0FBS1AsS0FBMUI7O0FBQ0Esd0JBQUtILEdBQUwsRUFBU1csUUFBVCxxQ0FBcUIsS0FBS0gsTUFBMUI7QUFDSDs7O1dBSUQsNEJBQW1CO0FBQ2YsV0FBS0MsWUFBTCxJQUFxQixDQUFDLENBQXRCO0FBQ0g7Ozs7OztBQUdVRixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDcEJNMUUsUTtBQUNKLG9CQUFZNUQsTUFBWixFQUFvQmtJLEtBQXBCLEVBQTJCN0UsS0FBM0IsRUFBa0NFLEdBQWxDLEVBQXVDdEMsS0FBdkMsRUFBOEM7QUFBQTs7QUFDNUMsU0FBS2pCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUsrSCxHQUFMLEdBQVcsS0FBSy9ILE1BQUwsQ0FBWStILEdBQXZCO0FBQ0EsU0FBSzFFLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUs2RSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLUyxhQUFMLEdBQXFCVCxLQUFyQjtBQUNBLFNBQUtVLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS3JGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUt0QyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLNEgsTUFBTCxHQUFjLEtBQWQ7QUFDRDs7OztXQUVELGNBQUszQyxNQUFMLEVBQWE7QUFDWCxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFJNEMsYUFBYSxHQUFHbEosUUFBUSxDQUFDZ0IsY0FBVCxDQUF3QixRQUF4QixDQUFwQjtBQUNBLFVBQUltSCxHQUFHLEdBQUcsS0FBSy9ILE1BQUwsQ0FBWStILEdBQXRCO0FBQ0EsVUFBSWdCLEVBQUUsR0FBR0QsYUFBYSxDQUFDekUsS0FBdkI7QUFDQSxVQUFJMkUsRUFBRSxHQUFHRixhQUFhLENBQUNsQixNQUFkLEdBQXVCLEdBQWhDO0FBRUEsVUFBSXFCLEVBQUUsR0FBR0QsRUFBRSxHQUFHLENBQWQ7QUFDQSxVQUFJRSxFQUFFLEdBQUdILEVBQUUsR0FBRyxDQUFkO0FBRUEsVUFBSUksUUFBUSxHQUFHO0FBQ2I7QUFDQTtBQUNBQyxVQUFFLEVBQUVGLEVBSFM7QUFJYkcsVUFBRSxFQUFFSixFQUpTO0FBS2I7QUFDQTtBQUNBSyxVQUFFLEVBQUUsS0FBS3BELE1BUEk7QUFRYnFELFVBQUUsRUFBRVAsRUFSUztBQVNiO0FBQ0FRLFVBQUUsRUFBRSxLQUFLdEQsTUFBTCxHQUFjLEtBQUs3QyxLQUFMLEdBQWF5RixhQUFhLENBQUN6RSxLQVZoQztBQVdib0YsVUFBRSxFQUFFVDtBQVhTLE9BQWY7QUFjQWpCLFNBQUcsQ0FBQzJCLFNBQUo7QUFDQTNCLFNBQUcsQ0FBQzRCLE1BQUosQ0FBV1IsUUFBUSxDQUFDQyxFQUFwQixFQUF3QkQsUUFBUSxDQUFDRSxFQUFqQztBQUNBdEIsU0FBRyxDQUFDNkIsTUFBSixDQUFXVCxRQUFRLENBQUNHLEVBQXBCLEVBQXdCSCxRQUFRLENBQUNJLEVBQWpDO0FBQ0F4QixTQUFHLENBQUM2QixNQUFKLENBQVdULFFBQVEsQ0FBQ0ssRUFBcEIsRUFBd0JMLFFBQVEsQ0FBQ00sRUFBakM7QUFDQTFCLFNBQUcsQ0FBQzZCLE1BQUosQ0FBV1QsUUFBUSxDQUFDQyxFQUFwQixFQUF3QkQsUUFBUSxDQUFDRSxFQUFqQztBQUNBdEIsU0FBRyxDQUFDOEIsU0FBSjtBQUVBOUIsU0FBRyxDQUFDVSxTQUFKLEdBQWdCLEtBQUtQLEtBQXJCO0FBQ0FILFNBQUcsQ0FBQytCLFdBQUosR0FBa0IsS0FBSzVCLEtBQXZCO0FBQ0FILFNBQUcsQ0FBQ2dDLElBQUo7QUFFQWhDLFNBQUcsQ0FBQ2lDLE1BQUo7QUFDRDs7O1dBRUQsaUJBQVE7QUFBQTs7QUFDTixVQUFJLENBQUMsS0FBS25CLE1BQVYsRUFBa0I7QUFDaEIsYUFBS1gsS0FBTCxHQUFhLEtBQWI7QUFDQXJDLGtCQUFVLENBQUMsWUFBTTtBQUNmLGVBQUksQ0FBQ3FDLEtBQUwsR0FBYSxLQUFJLENBQUNTLGFBQWxCO0FBQ0QsU0FGUyxFQUVQLEtBQUsxSCxLQUFMLENBQVd0QixLQUZKLENBQVY7QUFHRDtBQUNGOzs7V0FFRCxpQkFBUTtBQUFBOztBQUNOLFVBQUksQ0FBQyxLQUFLa0osTUFBVixFQUFrQjtBQUNoQixhQUFLWCxLQUFMLEdBQWEsU0FBYjtBQUNBckMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2YsZ0JBQUksQ0FBQ3FDLEtBQUwsR0FBYSxNQUFJLENBQUNTLGFBQWxCO0FBQ0QsU0FGUyxFQUVQLEtBQUsxSCxLQUFMLENBQVd0QixLQUZKLENBQVY7QUFHRDtBQUNGOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtrSixNQUFMLEdBQWMsSUFBZDtBQUNBLFdBQUtYLEtBQUwsR0FBYSxTQUFiLENBRlcsQ0FHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLFdBQUtXLE1BQUwsR0FBYyxLQUFkO0FBQ0EsV0FBS1gsS0FBTCxHQUFhLEtBQUtTLGFBQWxCO0FBQ0Q7OztXQUVELGlCQUFRO0FBQ04sVUFBSTtBQUNGLGFBQUtaLEdBQUwsQ0FBU0UsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLakksTUFBTCxDQUFZcUUsS0FBckMsRUFBNEMsS0FBS3JFLE1BQUwsQ0FBWTRILE1BQXhEO0FBQ0QsT0FGRCxDQUVFLE9BQU9xQyxDQUFQLEVBQVU7QUFDVjNJLGVBQU8sQ0FBQ0MsR0FBUixDQUFZMEksQ0FBWjtBQUNEO0FBQ0Y7Ozs7OztBQUdZckcsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUMvRkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmxldCBhbGdvU2VsZWN0ID0geyB2YWx1ZTogbnVsbCB9O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwicXVpY2stc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJidWJibGUtc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWRpeC1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInJhZGl4LXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0aW9uLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwic2VsZWN0aW9uLXNvcnRcIik7XG59KTtcblxuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGlkKSB7XG4gIGlmIChhbGdvU2VsZWN0LnZhbHVlID09PSBudWxsKSB7XG4gICAgbXlGdW5jKGFsZ29TZWxlY3QpO1xuICB9XG4gIGFsZ29TZWxlY3QudmFsdWUgPSBpZDtcblxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkQnV0dG9uXCIpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbn1cblxuZnVuY3Rpb24gbXlGdW5jKGFsZ28pIHtcbiAgbGV0IG15VHJpID0gW107XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuICBsZXQgc3BlZWQgPSB7IHZhbHVlOiA1IH07XG4gIGxldCBzbGljZUZhY3RvciA9IDg7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICByZXNldCgpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0QWxnbygpIHtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyh0cnVlKTtcbiAgICBjb25zb2xlLmxvZyhhbGdvLnZhbHVlLCBcIiBzdGFydGVkIGJ5IGFsZ28tdmFsdWVcIik7XG4gICAgc3dpdGNoIChhbGdvLnZhbHVlKSB7XG4gICAgICBjYXNlIFwicXVpY2stc29ydFwiOlxuICAgICAgICBzdGFydFFTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJidWJibGUtc29ydFwiOlxuICAgICAgICBzdGFydEJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJyYWRpeC1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInNlbGVjdGlvbi1zb3J0XCI6XG4gICAgICAgIHN0YXJ0U1MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNvcnRCdXR0b25zKHZhbHVlKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2FibGVcIik7XG4gICAgICBlbGUuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIC8vIGxldCBxc2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgLy8gcXNiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyAvLyBxc2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBmb3J3YXJkTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmlkID0gXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBmb3J3YXJkTG9hZC5pZCA9IFwiZm9yd2FyZExvYWRcIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NTgmIzk2NThcIjtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRCdXR0b24pO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZExvYWQpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OFwiO1xuICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRBbGdvKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShwbGF5QnV0dG9uLCBiQ3RybHMuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgc2xpY2VCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuaWQgPSBcInNsaWNlQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBsZXQgbG9hZEJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsb2FkQm9yZGVyLmlkID0gXCJzbGljZUxvYWRcIjtcbiAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzbGljZUJ1dHRvbi5pZCA9IFwic2xpY2VCdXR0b25cIjtcbiAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuICAgICAgc2xpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU2xpY2UpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc2xpY2VCdXR0b24pO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKGxvYWRCb3JkZXIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShcbiAgICAgICAgc2xpY2VCdXR0b25Db250YWluZXIsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIilcbiAgICAgICk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCImIzg2MzRcIjtcbiAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldCk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTcGVlZCgpIHtcbiAgICBpZiAoc3BlZWQudmFsdWUgPT09IDUpIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCI1MCVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlZWQudmFsdWUgPSA1O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNsaWNlKCkge1xuICAgIGxldCBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUxvYWRcIik7XG4gICAgc3dpdGNoIChzbGljZUZhY3Rvcikge1xuICAgICAgY2FzZSA4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDE0O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI2OCVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDE0OlxuICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI1MiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDI4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIzNiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDI4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDQwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIxNiVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA0MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA1MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA1MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI4NCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVBcnIoKSB7XG4gICAgLy8gRGl2aWRlIGNhbnZhcyBpbnRvIHNsaWNlcyBvZiBlcXVhbCBsZW5ndGhcbiAgICAvLyBVc2UgbGluZWFyIGNvbG9yIG1hcGluZyB0byBUcmlhbmdsZS52YWxcbiAgICAvLyBUcmlhbmdsZS52YWwgd2lsbCBiZSBzb3J0ZWQgZmllbGRcbiAgICAvLyB4RGlzdCByZW1haW5zIHNhbWVcbiAgICBsZXQgeERpc3QgPSAxIC8gKDEwICogc2xpY2VGYWN0b3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgKiBzbGljZUZhY3RvcjsgaSsrKSB7XG4gICAgICAvLyAwLTI1NSByYW5kb20gbnVtYmVyXG4gICAgICBsZXQgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KTtcblxuICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICBjYW52YXMsXG4gICAgICAgIGJsdWVSYW5kb21pemVyKHZhbCwgMjU1KSxcbiAgICAgICAgeERpc3QsXG4gICAgICAgIHZhbCxcbiAgICAgICAgc3BlZWRcbiAgICAgICk7XG5cbiAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFZhcnMoKSB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBteVRyaSA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIC8vIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKSwgMTgpO1xuICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgaWYgKHNoYWRlVmFsIDwgMTYpIGdWYWx1ZSA9IFwiMFwiICsgZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gZmFsc2U7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRCUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIGJ1YmJsZVNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJidWJibGUgc29ydCBmaW5pc2hlZFwiKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFJTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcmFkaXhTb3J0KCkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJhZGl4IHNvcnQgZmluaXNoZWRcIik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRTUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHNlbGVjdGlvblNvcnQoKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0aW9uIHNvcnQgZmluaXNoZWRcIik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWJibGVTb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJidWJibGUgU29ydCBSVU5OTklOR1wiKTtcbiAgICAgIGxldCBzd2Fwc0Jvb2wgPSB0cnVlO1xuICAgICAgbGV0IGkgPSAtMTtcbiAgICAgIGNvbnN0IG91dGVyTG9vcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN3YXBzQm9vbCkge1xuICAgICAgICAgIHN3YXBzQm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpbm5lcmxvb3AoMCk7XG4gICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5uZXJsb29wID0gKHN0YXJ0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChzdGFydCA8IGFyci5sZW5ndGggLSAxIC0gaSkge1xuICAgICAgICAgICAgLy8gbGUgMiBjaGFyYWN0ZXIgb3B0aW1pemF0aW9uLCA0OSBjaGFyYWN0ZXIgY29tbWVudFxuICAgICAgICAgICAgYXJyW3N0YXJ0XS5tYXJrMigpO1xuICAgICAgICAgICAgaWYgKGFycltzdGFydF0udmFsID4gYXJyW3N0YXJ0ICsgMV0udmFsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbc3RhcnRdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnRdID0gYXJyW3N0YXJ0ICsgMV07XG4gICAgICAgICAgICAgIGFycltzdGFydCArIDFdID0gdGVtcDtcbiAgICAgICAgICAgICAgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XS5tYXJrMSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnQgKz0gMTtcbiAgICAgICAgICAgIGlubmVybG9vcChzdGFydCk7XG4gICAgICAgICAgfSBlbHNlIG91dGVyTG9vcCgpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgb3V0ZXJMb29wKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByYWRpeFNvcnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInJhZGl4IFNvcnQgUlVOTk5JTkdcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSg1KTtcbiAgICAgIH0sIDUwMDApO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHNlbGVjdGlvblNvcnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGlvbiBTb3J0IFJVTk5OSU5HXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoNSk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAvLyBuZWVkZWQgdG8gc2V0dXAgYSBzdHJvbmcgcmVzb2x2ZSwgbmVlZCB0byBjb21lIGJhY2sgdG8gdGhpcyAsIHJlYXNvbjogZm9yIHBhdXNpbmcgYW5pbWF0aW9uXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gbm8gbG9uZ2VyIGJlaW5nIHVzZWQsIGhlbGQgZm9yIHJlZmVyZW5jZVxuICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG4gICAgICBsZXQgdGltZUJ1ZmZlciA9IDA7XG4gICAgICB3aGlsZSAoaiA8IGVuZCkge1xuICAgICAgICBqKys7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzd2FwQW5kUmVuZGVyKGopIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dhcCBoYXBwZW5lZFwiKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXBwaW5nXCIsIGFycltpXSwgYXJyW2pdKTtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgIGFycltpXS5tYXJrKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsoKTtcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSByZXNvbHZlKGkpO1xuICAgICAgICAgIC8vIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfSwgaiAqIHNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG5cbiAgICAgIGNvbnN0IHN3YXBBbmRSZW5kZXIgPSAoaikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1aWNrIHNvcnQgc3dhcFwiKTtcbiAgICAgICAgaWYgKGFycltqXS52YWwgPD0gcGl2b3QpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgYXJyW2VuZF0uY29sb3JSZXNldCgpOyAvLyA9IGZhbHNlO1xuICAgICAgICAgICAgYXJyW3N0YXJ0XS5jb2xvclJlc2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpICE9PSBzdGFydCAmJiBqICE9PSBlbmQpIGFycltzdGFydF0ubWFya1N0YXRpYygpO1xuXG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICBhcnJbaV0ubWFyazIoKTtcbiAgICAgICAgICBhcnJbal0ubWFyazIoKTtcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgICByZXNvbHZlKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnJbal0ubWFyazIoKTtcbiAgICAgICAgICBpZiAoaSA8IDApIGFyclswXS5tYXJrMigpO1xuICAgICAgICAgIGVsc2UgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB0aW1lZFdoaWxlTG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYXJyW2VuZF0ubWFya1N0YXRpYygpO1xuICAgICAgICAgIGlmIChqIDwgZW5kKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgICAgICAgaWYgKGogIT09IGVuZCkgdGltZWRXaGlsZUxvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICB0aW1lZFdoaWxlTG9vcCgpO1xuICAgIH0pO1xuICB9XG59IC8vIGVudGlyZSBibG9ja1xuXG4vLyBTcXVhcmUgY29uc3RydWN0b3IgZ2V0cyBhIGNhbnZhcyBwcm9wZXJ0eSwgY29vcmRzICwgY29sb3JcblxuLy8gZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4vLyAgICAgY2xlYXJEZW1vKCk7XG4vLyAgICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4vLyAgICAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbi8vICAgICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4vLyAgICAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuLy8gICAgIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4vLyAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuLy8gICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbi8vICAgICAgICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbi8vICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EuZHJhd1NxdWFyZSgpKTtcbi8vICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuLy8gICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4vLyAgICAgICAgICAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSA8IDApIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfTtcblxuLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAgICAgICBcIndpbmRvd1wiLFxuLy8gICAgICAgICBcImtleWRvd25cIixcbi8vICAgICAgICAgaGFuZGxlS2V5RG93bixcbi8vICAgICBdKTtcblxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICAgICAgXCJ3aW5kb3dcIixcbi8vICAgICAgICAgXCJtb3VzZWRvd25cIixcbi8vICAgICAgICAgaGFuZGxlTW91c2VEb3duLFxuLy8gICAgIF0pO1xuXG4vLyAgICAgLy8gMzIgaXMgQVNDSUkgZm9yIHNwYWNlLCByYW5kb21pemUgY29sb3Jcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4vLyAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbi8vICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuLy8gICAgICAgICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gb24gY2xpY2sgYW5pbWF0ZSBuZXcgc3F1YXJlXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4vLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgIHNxdWFyZXMucHVzaChcbi8vICAgICAgICAgICAgIG5ldyBTcXVhcmUoXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmN0eCxcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuY29vcmRzLm1hcCgoY28pID0+IGNvICsgMjUpLFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsQ29sb3Jcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbi8vICAgICB9XG4vLyB9XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgd2hpbGUgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgbGV0IFtcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgZXZlbnQsXG4gICAgICBoYW5kbGVyLFxuICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuICAgIGlmIChzZWxlY3RvciA9PT0gXCJ3aW5kb3dcIikge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgLy8gY29uc29sZS5sb2coaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRlbW8oKSB7XG4gIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiQ0FOVkFTREVNT1wiKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG4gIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiRE9NREVNT1wiKSB7XG4gICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKV0uZm9yRWFjaCgoZWxlbSkgPT5cbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICApO1xuICB9XG59XG4iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gICAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIC8vIH1cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTsiLCJjbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG5cblxuXG4gICAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7IiwiY2xhc3MgVHJpYW5nbGUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCwgdmFsLCBzcGVlZCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgIHRoaXMueERpc3QgPSB4RGlzdDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5ERUZBVUxUX0NPTE9SID0gY29sb3I7XG4gICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgfVxuXG4gIGRyYXcoeFN0YXJ0KSB7XG4gICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgbGV0IGNoID0gY2FudmFzRWxlbWVudC5oZWlnaHQgLSAyMDA7XG5cbiAgICBsZXQgY3kgPSBjaCAvIDI7XG4gICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgIHgxOiBjeCxcbiAgICAgIHkxOiBjeSxcbiAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgeTI6IGNoLFxuICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICB4MzogdGhpcy54U3RhcnQgKyB0aGlzLnhEaXN0ICogY2FudmFzRWxlbWVudC53aWR0aCxcbiAgICAgIHkzOiBjaCxcbiAgICB9O1xuXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngyLCB0cmlhbmdsZS55Mik7XG4gICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5maWxsKCk7XG5cbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cblxuICBtYXJrMSgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX0NPTE9SO1xuICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbWFyazIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5jb2xvciA9IFwiI0ZGRDcwMFwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfQ09MT1I7XG4gICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBtYXJrU3RhdGljKCkge1xuICAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICB0aGlzLmNvbG9yID0gXCIjRkYwMEZGXCI7XG4gICAgLy8gaWYgKHRoaXMuc3RhdGljKSB7XG4gICAgLy8gICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX0NPTE9SO1xuICAgIC8vICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgdGhpcy5jb2xvciA9IHN0cjtcbiAgICAvLyAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAvLyB9XG4gIH1cblxuICBjb2xvclJlc2V0KCkge1xuICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9DT0xPUjtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWFuZ2xlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==