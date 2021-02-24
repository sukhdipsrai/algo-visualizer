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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiYWxnb1NlbGVjdCIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0SGFuZGxlciIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJpZCIsIm15RnVuYyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGQiLCJhbGdvIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInNsaWNlRmFjdG9yIiwicmVzZXQiLCJzdGFydEFsZ28iLCJ0b2dnbGVTb3J0QnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFFTIiwic3RhcnRCUyIsInN0YXJ0UlMiLCJzdGFydFNTIiwidG9nZ2xlIiwiZGlzYWJsZWQiLCJpbml0aWFsaXplQnV0dG9ucyIsImZvcndhcmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciIsImZvcndhcmRMb2FkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsImJDdHJscyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzbGljZUJ1dHRvbkNvbnRhaW5lciIsImxvYWRCb3JkZXIiLCJzbGljZUJ1dHRvbiIsImN5Y2xlU2xpY2UiLCJyZXNldEJ1dHRvbiIsInN0eWxlIiwicmlnaHQiLCJsb2FkIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInNlbGVjdGlvblNvcnQiLCJhcnIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN3YXBzQm9vbCIsIm91dGVyTG9vcCIsImlubmVybG9vcCIsInN0YXJ0Iiwic2V0VGltZW91dCIsIm1hcmsyIiwidGVtcCIsIm1hcmsxIiwiZW5kIiwieFN0YXJ0IiwicXVpY2tTb3J0UGFydGl0aW9uMiIsInBpIiwicXVpY2tTb3J0UGFydGl0aW9uIiwicmVqZWN0IiwicGl2b3QiLCJqIiwidGltZUJ1ZmZlciIsInN3YXBBbmRSZW5kZXIiLCJtYXJrIiwiY29sb3JSZXNldCIsIm1hcmtTdGF0aWMiLCJ0aW1lZFdoaWxlTG9vcCIsInVucmVnaXN0ZXJFdmVudExpc3RlbmVycyIsInBvcCIsInNlbGVjdG9yIiwiZXZlbnQiLCJoYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyRGVtbyIsImJvZHkiLCJyZW1vdmVDaGlsZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtIiwicHJvcHMiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiY29sb3IiLCJmaWxsQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJTcXVhcmUiLCJjb29yZHMiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkRFRkFVTFRfQ09MT1IiLCJtYXJrZWQiLCJzdGF0aWMiLCJjYW52YXNFbGVtZW50IiwiY3ciLCJjaCIsImN5IiwiY3giLCJ0cmlhbmdsZSIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsInN0cm9rZVN0eWxlIiwiZmlsbCIsInN0cm9rZSIsImUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBO0FBQ0E7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UTtBQUNOLFVBQUk7QUFDRixhQUFLWixHQUFMLENBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBS2pJLE1BQUwsQ0FBWXFFLEtBQXJDLEVBQTRDLEtBQUtyRSxNQUFMLENBQVk0SCxNQUF4RDtBQUNELE9BRkQsQ0FFRSxPQUFPcUMsQ0FBUCxFQUFVO0FBQ1YzSSxlQUFPLENBQUNDLEdBQVIsQ0FBWTBJLENBQVo7QUFDRDtBQUNGOzs7Ozs7QUFHWXJHLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDL0ZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5sZXQgYWxnb1NlbGVjdCA9IHsgdmFsdWU6IG51bGwgfTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInF1aWNrLXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwiYnViYmxlLXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFkaXgtc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJyYWRpeC1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGlvbi1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInNlbGVjdGlvbi1zb3J0XCIpO1xufSk7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihpZCkge1xuICBpZiAoYWxnb1NlbGVjdC52YWx1ZSA9PT0gbnVsbCkge1xuICAgIG15RnVuYyhhbGdvU2VsZWN0KTtcbiAgfVxuICBhbGdvU2VsZWN0LnZhbHVlID0gaWQ7XG5cbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRCdXR0b25cIik7XG59XG5cbmZ1bmN0aW9uIG15RnVuYyhhbGdvKSB7XG4gIGxldCBteVRyaSA9IFtdO1xuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgbGV0IHNwZWVkID0geyB2YWx1ZTogNSB9O1xuICBsZXQgc2xpY2VGYWN0b3IgPSA4OyAvLyBpbmNyZWFzaW5nIHdpbGwgY3JlYXRlIG1vcmUgdHJpYW5nbGUgc2xpY2VzXG5cbiAgcmVzZXQoKTtcblxuICBmdW5jdGlvbiBzdGFydEFsZ28oKSB7XG4gICAgdG9nZ2xlU29ydEJ1dHRvbnModHJ1ZSk7XG4gICAgY29uc29sZS5sb2coYWxnby52YWx1ZSwgXCIgc3RhcnRlZCBieSBhbGdvLXZhbHVlXCIpO1xuICAgIHN3aXRjaCAoYWxnby52YWx1ZSkge1xuICAgICAgY2FzZSBcInF1aWNrLXNvcnRcIjpcbiAgICAgICAgc3RhcnRRUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwiYnViYmxlLXNvcnRcIjpcbiAgICAgICAgc3RhcnRCUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwicmFkaXgtc29ydFwiOlxuICAgICAgICBzdGFydFJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJzZWxlY3Rpb24tc29ydFwiOlxuICAgICAgICBzdGFydFNTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTb3J0QnV0dG9ucyh2YWx1ZSkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmRpc2FibGVkID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICAvLyBsZXQgcXNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIC8vIHFzYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgLy8gLy8gcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQnV0dG9ucygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZm9yd2FyZExvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5pZCA9IFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiO1xuICAgICAgZm9yd2FyZExvYWQuaWQgPSBcImZvcndhcmRMb2FkXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4JiM5NjU4XCI7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRMb2FkKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKVxuICAgICAgICAuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIjtcbiAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NThcIjtcbiAgICAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0QWxnbyk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHNsaWNlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmlkID0gXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiO1xuICAgICAgbGV0IGxvYWRCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbG9hZEJvcmRlci5pZCA9IFwic2xpY2VMb2FkXCI7XG4gICAgICBsZXQgc2xpY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc2xpY2VCdXR0b24uaWQgPSBcInNsaWNlQnV0dG9uXCI7XG4gICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcbiAgICAgIHNsaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNsaWNlKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKHNsaWNlQnV0dG9uKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChsb2FkQm9yZGVyKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpXG4gICAgICApO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICByZXNldEJ1dHRvbi5pZCA9IFwicmVzZXRCdXR0b25cIjtcbiAgICAgIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9IFwiJiM4NjM0XCI7XG4gICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXQpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgaWYgKHNwZWVkLnZhbHVlID09PSA1KSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDUwO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiNTAlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTbGljZSgpIHtcbiAgICBsZXQgbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VMb2FkXCIpO1xuICAgIHN3aXRjaCAoc2xpY2VGYWN0b3IpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAxNDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiNjglXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyMDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiNTIlXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyODtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMzYlXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA0MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMTYlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNTA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNTA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gODtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiODQlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQXJyKCkge1xuICAgIC8vIERpdmlkZSBjYW52YXMgaW50byBzbGljZXMgb2YgZXF1YWwgbGVuZ3RoXG4gICAgLy8gVXNlIGxpbmVhciBjb2xvciBtYXBpbmcgdG8gVHJpYW5nbGUudmFsXG4gICAgLy8gVHJpYW5nbGUudmFsIHdpbGwgYmUgc29ydGVkIGZpZWxkXG4gICAgLy8geERpc3QgcmVtYWlucyBzYW1lXG4gICAgbGV0IHhEaXN0ID0gMSAvICgxMCAqIHNsaWNlRmFjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwICogc2xpY2VGYWN0b3I7IGkrKykge1xuICAgICAgLy8gMC0yNTUgcmFuZG9tIG51bWJlclxuICAgICAgbGV0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XG5cbiAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBibHVlUmFuZG9taXplcih2YWwsIDI1NSksXG4gICAgICAgIHhEaXN0LFxuICAgICAgICB2YWwsXG4gICAgICAgIHNwZWVkXG4gICAgICApO1xuXG4gICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRWYXJzKCkge1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgbXlUcmkgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgcmVzZXRWYXJzKCk7XG4gICAgaW5pdGlhbGl6ZUFycigpO1xuICB9XG5cbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUcmkubGVuZ3RoOyBpKyspIHtcbiAgICAgIG15VHJpW2ldLmRyYXcoc3VtKTtcbiAgICAgIHN1bSArPSBteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGg7XG4gICAgfVxuICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAvLyB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbiksIDE4KTtcbiAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgIGxldCByVmFsdWUgPSBcIjNDXCI7IC8vNjBcbiAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuICAgIGlmIChzaGFkZVZhbCA8IDE2KSBnVmFsdWUgPSBcIjBcIiArIGdWYWx1ZTtcblxuICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCdXR0b25zKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IHRydWU7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IGZhbHNlO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyhmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcXVpY2tTb3J0KG15VHJpLCAwLCBteVRyaS5sZW5ndGggLSAxKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0QlMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBidWJibGVTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnViYmxlIHNvcnQgZmluaXNoZWRcIik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRSUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHJhZGl4U29ydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJyYWRpeCBzb3J0IGZpbmlzaGVkXCIpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0U1MoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBzZWxlY3Rpb25Tb3J0KCkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGlvbiBzb3J0IGZpbmlzaGVkXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnViYmxlU29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnViYmxlIFNvcnQgUlVOTk5JTkdcIik7XG4gICAgICBsZXQgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgIGxldCBpID0gLTE7XG4gICAgICBjb25zdCBvdXRlckxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzd2Fwc0Jvb2wpIHtcbiAgICAgICAgICBzd2Fwc0Jvb2wgPSBmYWxzZTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaW5uZXJsb29wKDApO1xuICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlubmVybG9vcCA9IChzdGFydCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc3RhcnQgPCBhcnIubGVuZ3RoIC0gMSAtIGkpIHtcbiAgICAgICAgICAgIC8vIGxlIDIgY2hhcmFjdGVyIG9wdGltaXphdGlvbiwgNDkgY2hhcmFjdGVyIGNvbW1lbnRcbiAgICAgICAgICAgIGFycltzdGFydF0ubWFyazIoKTtcbiAgICAgICAgICAgIGlmIChhcnJbc3RhcnRdLnZhbCA+IGFycltzdGFydCArIDFdLnZhbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW3N0YXJ0XTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XSA9IGFycltzdGFydCArIDFdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnQgKyAxXSA9IHRlbXA7XG4gICAgICAgICAgICAgIHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGFycltzdGFydF0ubWFyazEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0ICs9IDE7XG4gICAgICAgICAgICBpbm5lcmxvb3Aoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSBvdXRlckxvb3AoKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIG91dGVyTG9vcCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFkaXhTb3J0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyYWRpeCBTb3J0IFJVTk5OSU5HXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoNSk7XG4gICAgICB9LCA1MDAwKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gU29ydCBSVU5OTklOR1wiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKDUpO1xuICAgICAgfSwgNTAwMCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIG5vIGxvbmdlciBiZWluZyB1c2VkLCBoZWxkIGZvciByZWZlcmVuY2VcbiAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS52YWw7XG4gICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuICAgICAgbGV0IHRpbWVCdWZmZXIgPSAwO1xuICAgICAgd2hpbGUgKGogPCBlbmQpIHtcbiAgICAgICAgaisrO1xuICAgICAgICBpZiAoYXJyW2pdLnZhbCA8PSBwaXZvdCkgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc3dhcEFuZFJlbmRlcihqKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXAgaGFwcGVuZWRcIik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwcGluZ1wiLCBhcnJbaV0sIGFycltqXSk7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICBhcnJbaV0ubWFyaygpO1xuICAgICAgICAgIGFycltqXS5tYXJrKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkgcmVzb2x2ZShpKTtcbiAgICAgICAgICAvLyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgICAgIH0sIGogKiBzcGVlZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24yKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS52YWw7XG4gICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuXG4gICAgICBjb25zdCBzd2FwQW5kUmVuZGVyID0gKGopID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJxdWljayBzb3J0IHN3YXBcIik7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIGFycltlbmRdLmNvbG9yUmVzZXQoKTsgLy8gPSBmYWxzZTtcbiAgICAgICAgICAgIGFycltzdGFydF0uY29sb3JSZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSAhPT0gc3RhcnQgJiYgaiAhPT0gZW5kKSBhcnJbc3RhcnRdLm1hcmtTdGF0aWMoKTtcblxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGkgPCAwKSBhcnJbMF0ubWFyazIoKTtcbiAgICAgICAgICBlbHNlIGFycltpXS5tYXJrMigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgdGltZWRXaGlsZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFycltlbmRdLm1hcmtTdGF0aWMoKTtcbiAgICAgICAgICBpZiAoaiA8IGVuZCkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIGlmIChqICE9PSBlbmQpIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgdGltZWRXaGlsZUxvb3AoKTtcbiAgICB9KTtcbiAgfVxufSAvLyBlbnRpcmUgYmxvY2tcblxuLy8gU3F1YXJlIGNvbnN0cnVjdG9yIGdldHMgYSBjYW52YXMgcHJvcGVydHksIGNvb3JkcyAsIGNvbG9yXG5cbi8vIGZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuLy8gICAgIGNsZWFyRGVtbygpO1xuLy8gICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuLy8gICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4vLyAgICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuLy8gICAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbi8vICAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuLy8gICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbi8vICAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4vLyAgICAgICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4vLyAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbi8vICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuLy8gICAgICAgICAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH07XG5cbi8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICAgICAgXCJ3aW5kb3dcIixcbi8vICAgICAgICAgXCJrZXlkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZUtleURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwibW91c2Vkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZU1vdXNlRG93bixcbi8vICAgICBdKTtcblxuLy8gICAgIC8vIDMyIGlzIEFTQ0lJIGZvciBzcGFjZSwgcmFuZG9taXplIGNvbG9yXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuLy8gICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4vLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbi8vICAgICAgICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC8vIG9uIGNsaWNrIGFuaW1hdGUgbmV3IHNxdWFyZVxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBzcXVhcmVzLnB1c2goXG4vLyAgICAgICAgICAgICBuZXcgU3F1YXJlKFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jdHgsXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgIGxldCBbXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGV2ZW50LFxuICAgICAgaGFuZGxlcixcbiAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgKTtcbiAgfVxufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgY29sb3IgPSBcImdyZWVuXCIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxuXG5cblxuICAgIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QsIHZhbCwgc3BlZWQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuREVGQVVMVF9DT0xPUiA9IGNvbG9yO1xuICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgdGhpcy52YWwgPSB2YWw7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gIH1cblxuICBkcmF3KHhTdGFydCkge1xuICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gMjAwO1xuXG4gICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgIHZhciB0cmlhbmdsZSA9IHtcbiAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICB4MTogY3gsXG4gICAgICB5MTogY3ksXG4gICAgICAvL3RoZSBzZWNvbmQgdmVydGV4IGlzIG9uIHRoZSBjaXJjdW1zY3JpYmVkIGNpcmNsZSBhdCAwIHJhZGlhbnMgd2hlcmUgUiBpcyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUgKCBhID0gMzAsIGI9MzAgKVxuICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgIHkyOiBjaCxcbiAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgdGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgsXG4gICAgICB5MzogY2gsXG4gICAgfTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICBjdHguZmlsbCgpO1xuXG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG5cbiAgbWFyazEoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9DT0xPUjtcbiAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG1hcmsyKCkge1xuICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgIHRoaXMuY29sb3IgPSBcIiNGRkQ3MDBcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5ERUZBVUxUX0NPTE9SO1xuICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbWFya1N0YXRpYygpIHtcbiAgICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgdGhpcy5jb2xvciA9IFwiI0ZGMDBGRlwiO1xuICAgIC8vIGlmICh0aGlzLnN0YXRpYykge1xuICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuREVGQVVMVF9DT0xPUjtcbiAgICAvLyAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuY29sb3IgPSBzdHI7XG4gICAgLy8gICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgLy8gfVxuICB9XG5cbiAgY29sb3JSZXNldCgpIHtcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgIHRoaXMuY29sb3IgPSB0aGlzLkRFRkFVTFRfQ09MT1I7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=