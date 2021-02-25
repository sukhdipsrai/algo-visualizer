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
    radixSort(myTri).then(function () {
      enableButtons();
      console.log("radix sort finished");
      var vals = [];

      for (var i = 0; i < myTri.length; i++) {
        vals.push(myTri[i].val);
      }

      console.log(isSorted(vals));
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

  var isSorted = function isSorted(arr) {
    var l = arr.length;

    if (l <= 1) {
      return true;
    }

    for (var i = 1; i < l; i++) {
      var con1 = arr[i] > 0 && arr[i - 1] < 0;
      var con2 = arr[i] < 0 && arr[i - 1] > 0;

      if (con1 || con2) {
        return false;
      }
    }

    return true;
  };

  function radixSort(arr) {
    return new Promise(function (resolve) {
      console.log("radix Sort RUNNNING");
      var exp = 1;

      var radixLoop = function radixLoop() {
        setTimeout(function () {
          if (Math.floor(255 / exp) > 0) {
            console.log("next exp");
            countingSort(arr, exp).then(function () {
              exp *= 10;
              radixLoop();
            });
          } else resolve(null);
        }, speed.value);
      };

      radixLoop();
    });
  }

  var countingSort = function countingSort(arr, exp) {
    console.log("counting sort");
    return new Promise(function (resolve) {
      var sortedArray = new Array(arr.length);
      var bucket = new Array(10).fill(0);

      for (var i = 0; i < arr.length; i++) {
        bucket[Math.floor(arr[i].val / exp) % 10]++;
      }

      for (var _i = 1; _i < 10; _i++) {
        bucket[_i] += bucket[_i - 1];
      }

      for (var _i2 = arr.length - 1; _i2 >= 0; _i2--) {
        var loc = Math.floor(arr[_i2].val / exp) % 10;
        sortedArray[bucket[loc] - 1] = {
          val: arr[_i2].val,
          color: arr[_i2].color,
          defaultColor: arr[_i2].defaultColor
        };
        bucket[loc]--;
      }

      var scanVisual = function scanVisual(i) {
        setTimeout(function () {
          if (i === -1) transferLoop(0);else {
            arr[i].mark2();
            i--;
            scanVisual(i);
          }
        }, speed.value);
      };

      scanVisual(arr.length - 1);

      var transferLoop = function transferLoop(i) {
        setTimeout(function () {
          if (arr[i].val !== sortedArray[i].val) {
            arr[i].val = sortedArray[i].val;
            arr[i].defaultColor = sortedArray[i].defaultColor;
            arr[i].color = sortedArray[i].color;
            arr[i].mark1();
          } else arr[i].mark2();

          i++;
          if (i === arr.length) resolve(null);else transferLoop(i);
        }, speed.value);
      };
    });
  };

  function selectionSort() {
    return new Promise(function (resolve) {
      console.log("selection Sort RUNNNING");
      setTimeout(function () {
        resolve(5);
      }, speed.value);
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
          arr[i].mark1();
          arr[j].mark2();

          if (j === end) {
            resolve(i);
          }
        } else {
          arr[j].mark2(); // if (i < 0) arr[0].mark2();
          // else arr[i].mark1();
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

var Triangle = function Triangle(canvas, color, xDist, val, speed) {
  var _this = this;

  _classCallCheck(this, Triangle);

  this.canvas = canvas;
  this.ctx = this.canvas.ctx;
  this.xDist = xDist;
  this.color = color;
  this.defaultColor = color;
  this.marked = false;
  this.val = val;
  this.speed = speed;
  this.static = false;

  this.mark1 = function () {
    if (!_this.static) {
      _this.color = "red";
      setTimeout(function () {
        _this.color = _this.defaultColor;
      }, _this.speed.value);
    }
  };

  this.draw = function (xStart) {
    _this.xStart = xStart;
    var canvasElement = document.getElementById("canvas");
    var ctx = _this.canvas.ctx;
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
      x2: _this.xStart,
      y2: ch,
      //calculate the 3-rd vertex
      x3: _this.xStart + _this.xDist * canvasElement.width,
      y3: ch
    };
    ctx.beginPath();
    ctx.moveTo(triangle.x1, triangle.y1);
    ctx.lineTo(triangle.x2, triangle.y2);
    ctx.lineTo(triangle.x3, triangle.y3);
    ctx.lineTo(triangle.x1, triangle.y1);
    ctx.closePath();
    ctx.fillStyle = _this.color;
    ctx.strokeStyle = _this.color;
    ctx.fill();
    ctx.stroke();
  };

  this.mark2 = function () {
    if (!_this.static) {
      _this.color = "#FFD700";
      setTimeout(function () {
        _this.color = _this.defaultColor;
      }, _this.speed.value);
    }
  };

  this.markStatic = function () {
    _this.static = true;
    _this.color = "#FF00FF"; // if (this.static) {
    //   this.color = this.defaultColor;
    //   this.static = false;
    // } else {
    //   this.color = str;
    //   this.static = true;
    // }
  };

  this.colorReset = function () {
    _this.static = false;
    _this.color = _this.defaultColor;
  };

  this.reset = function () {
    try {
      _this.ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    } catch (e) {
      console.log(e);
    }
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiYWxnb1NlbGVjdCIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0SGFuZGxlciIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJpZCIsIm15RnVuYyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGQiLCJhbGdvIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInNsaWNlRmFjdG9yIiwicmVzZXQiLCJzdGFydEFsZ28iLCJ0b2dnbGVTb3J0QnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFFTIiwic3RhcnRCUyIsInN0YXJ0UlMiLCJzdGFydFNTIiwidG9nZ2xlIiwiZGlzYWJsZWQiLCJpbml0aWFsaXplQnV0dG9ucyIsImZvcndhcmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciIsImZvcndhcmRMb2FkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsImJDdHJscyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzbGljZUJ1dHRvbkNvbnRhaW5lciIsImxvYWRCb3JkZXIiLCJzbGljZUJ1dHRvbiIsImN5Y2xlU2xpY2UiLCJyZXNldEJ1dHRvbiIsInN0eWxlIiwicmlnaHQiLCJsb2FkIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInZhbHMiLCJpc1NvcnRlZCIsInNlbGVjdGlvblNvcnQiLCJhcnIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN3YXBzQm9vbCIsIm91dGVyTG9vcCIsImlubmVybG9vcCIsInN0YXJ0Iiwic2V0VGltZW91dCIsIm1hcmsyIiwidGVtcCIsIm1hcmsxIiwibCIsImNvbjEiLCJjb24yIiwiZXhwIiwicmFkaXhMb29wIiwiY291bnRpbmdTb3J0Iiwic29ydGVkQXJyYXkiLCJidWNrZXQiLCJmaWxsIiwibG9jIiwiY29sb3IiLCJkZWZhdWx0Q29sb3IiLCJzY2FuVmlzdWFsIiwidHJhbnNmZXJMb29wIiwiZW5kIiwieFN0YXJ0IiwicXVpY2tTb3J0UGFydGl0aW9uMiIsInBpIiwicmVqZWN0IiwicGl2b3QiLCJqIiwic3dhcEFuZFJlbmRlciIsImNvbG9yUmVzZXQiLCJtYXJrU3RhdGljIiwidGltZWRXaGlsZUxvb3AiLCJ1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJwb3AiLCJzZWxlY3RvciIsImV2ZW50IiwiaGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGVhckRlbW8iLCJib2R5IiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWxlbSIsInByb3BzIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImZpbGxDb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsIlNxdWFyZSIsImNvb3JkcyIsImFuaW1hdGlvbkRpciIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwibWFya2VkIiwic3RhdGljIiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwr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QUFJLENBQUNyRSxNQUFMLENBQVl5SSxNQUF4RDtBQUNELEtBRkQsQ0FFRSxPQUFPa0MsQ0FBUCxFQUFVO0FBQ1ZySixhQUFPLENBQUNDLEdBQVIsQ0FBWW9KLENBQVo7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDOztBQUdZL0csdUVBQWYsRTs7Ozs7Ozs7Ozs7QUM5RkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmxldCBhbGdvU2VsZWN0ID0geyB2YWx1ZTogbnVsbCB9O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwicXVpY2stc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJidWJibGUtc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWRpeC1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInJhZGl4LXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0aW9uLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwic2VsZWN0aW9uLXNvcnRcIik7XG59KTtcblxuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGlkKSB7XG4gIGlmIChhbGdvU2VsZWN0LnZhbHVlID09PSBudWxsKSB7XG4gICAgbXlGdW5jKGFsZ29TZWxlY3QpO1xuICB9XG4gIGFsZ29TZWxlY3QudmFsdWUgPSBpZDtcblxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkQnV0dG9uXCIpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbn1cblxuZnVuY3Rpb24gbXlGdW5jKGFsZ28pIHtcbiAgbGV0IG15VHJpID0gW107XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuICBsZXQgc3BlZWQgPSB7IHZhbHVlOiA1IH07XG4gIGxldCBzbGljZUZhY3RvciA9IDg7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICByZXNldCgpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0QWxnbygpIHtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyh0cnVlKTtcbiAgICBjb25zb2xlLmxvZyhhbGdvLnZhbHVlLCBcIiBzdGFydGVkIGJ5IGFsZ28tdmFsdWVcIik7XG4gICAgc3dpdGNoIChhbGdvLnZhbHVlKSB7XG4gICAgICBjYXNlIFwicXVpY2stc29ydFwiOlxuICAgICAgICBzdGFydFFTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJidWJibGUtc29ydFwiOlxuICAgICAgICBzdGFydEJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJyYWRpeC1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInNlbGVjdGlvbi1zb3J0XCI6XG4gICAgICAgIHN0YXJ0U1MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNvcnRCdXR0b25zKHZhbHVlKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2FibGVcIik7XG4gICAgICBlbGUuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIC8vIGxldCBxc2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgLy8gcXNiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyAvLyBxc2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBmb3J3YXJkTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmlkID0gXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBmb3J3YXJkTG9hZC5pZCA9IFwiZm9yd2FyZExvYWRcIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NTgmIzk2NThcIjtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRCdXR0b24pO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZExvYWQpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OFwiO1xuICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRBbGdvKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShwbGF5QnV0dG9uLCBiQ3RybHMuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgc2xpY2VCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuaWQgPSBcInNsaWNlQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBsZXQgbG9hZEJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsb2FkQm9yZGVyLmlkID0gXCJzbGljZUxvYWRcIjtcbiAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzbGljZUJ1dHRvbi5pZCA9IFwic2xpY2VCdXR0b25cIjtcbiAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuICAgICAgc2xpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU2xpY2UpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc2xpY2VCdXR0b24pO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKGxvYWRCb3JkZXIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShcbiAgICAgICAgc2xpY2VCdXR0b25Db250YWluZXIsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIilcbiAgICAgICk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCImIzg2MzRcIjtcbiAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldCk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTcGVlZCgpIHtcbiAgICBpZiAoc3BlZWQudmFsdWUgPT09IDUpIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCI1MCVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlZWQudmFsdWUgPSA1O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNsaWNlKCkge1xuICAgIGxldCBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUxvYWRcIik7XG4gICAgc3dpdGNoIChzbGljZUZhY3Rvcikge1xuICAgICAgY2FzZSA4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDE0O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI2OCVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDE0OlxuICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI1MiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDI4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIzNiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDI4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDQwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIxNiVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA0MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA1MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA1MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI4NCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVBcnIoKSB7XG4gICAgLy8gRGl2aWRlIGNhbnZhcyBpbnRvIHNsaWNlcyBvZiBlcXVhbCBsZW5ndGhcbiAgICAvLyBVc2UgbGluZWFyIGNvbG9yIG1hcGluZyB0byBUcmlhbmdsZS52YWxcbiAgICAvLyBUcmlhbmdsZS52YWwgd2lsbCBiZSBzb3J0ZWQgZmllbGRcbiAgICAvLyB4RGlzdCByZW1haW5zIHNhbWVcbiAgICBsZXQgeERpc3QgPSAxIC8gKDEwICogc2xpY2VGYWN0b3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgKiBzbGljZUZhY3RvcjsgaSsrKSB7XG4gICAgICAvLyAwLTI1NSByYW5kb20gbnVtYmVyXG4gICAgICBsZXQgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KTtcblxuICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICBjYW52YXMsXG4gICAgICAgIGJsdWVSYW5kb21pemVyKHZhbCwgMjU1KSxcbiAgICAgICAgeERpc3QsXG4gICAgICAgIHZhbCxcbiAgICAgICAgc3BlZWRcbiAgICAgICk7XG5cbiAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFZhcnMoKSB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBteVRyaSA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIC8vIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKSwgMTgpO1xuICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgaWYgKHNoYWRlVmFsIDwgMTYpIGdWYWx1ZSA9IFwiMFwiICsgZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gZmFsc2U7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRCUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIGJ1YmJsZVNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJidWJibGUgc29ydCBmaW5pc2hlZFwiKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFJTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcmFkaXhTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmFkaXggc29ydCBmaW5pc2hlZFwiKTtcbiAgICAgIGxldCB2YWxzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB2YWxzLnB1c2gobXlUcmlbaV0udmFsKTtcbiAgICAgIGNvbnNvbGUubG9nKGlzU29ydGVkKHZhbHMpKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFNTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgc2VsZWN0aW9uU29ydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gc29ydCBmaW5pc2hlZFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImJ1YmJsZSBTb3J0IFJVTk5OSU5HXCIpO1xuICAgICAgbGV0IHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICBsZXQgaSA9IC0xO1xuICAgICAgY29uc3Qgb3V0ZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3dhcHNCb29sKSB7XG4gICAgICAgICAgc3dhcHNCb29sID0gZmFsc2U7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlubmVybG9vcCgwKTtcbiAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbm5lcmxvb3AgPSAoc3RhcnQpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXJ0IDwgYXJyLmxlbmd0aCAtIDEgLSBpKSB7XG4gICAgICAgICAgICAvLyBsZSAyIGNoYXJhY3RlciBvcHRpbWl6YXRpb24sIDQ5IGNoYXJhY3RlciBjb21tZW50XG4gICAgICAgICAgICBhcnJbc3RhcnRdLm1hcmsyKCk7XG4gICAgICAgICAgICBpZiAoYXJyW3N0YXJ0XS52YWwgPiBhcnJbc3RhcnQgKyAxXS52YWwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltzdGFydF07XG4gICAgICAgICAgICAgIGFycltzdGFydF0gPSBhcnJbc3RhcnQgKyAxXTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0ICsgMV0gPSB0ZW1wO1xuICAgICAgICAgICAgICBzd2Fwc0Jvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICBhcnJbc3RhcnRdLm1hcmsxKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydCArPSAxO1xuICAgICAgICAgICAgaW5uZXJsb29wKHN0YXJ0KTtcbiAgICAgICAgICB9IGVsc2Ugb3V0ZXJMb29wKCk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICBvdXRlckxvb3AoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBpc1NvcnRlZCA9IChhcnIpID0+IHtcbiAgICBjb25zdCB7IGxlbmd0aDogbCB9ID0gYXJyO1xuICAgIGlmIChsIDw9IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgY29uMSA9IGFycltpXSA+IDAgJiYgYXJyW2kgLSAxXSA8IDA7XG4gICAgICBjb25zdCBjb24yID0gYXJyW2ldIDwgMCAmJiBhcnJbaSAtIDFdID4gMDtcbiAgICAgIGlmIChjb24xIHx8IGNvbjIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgZnVuY3Rpb24gcmFkaXhTb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyYWRpeCBTb3J0IFJVTk5OSU5HXCIpO1xuICAgICAgbGV0IGV4cCA9IDE7XG4gICAgICBjb25zdCByYWRpeExvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChNYXRoLmZsb29yKDI1NSAvIGV4cCkgPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgZXhwXCIpO1xuICAgICAgICAgICAgY291bnRpbmdTb3J0KGFyciwgZXhwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgZXhwICo9IDEwO1xuICAgICAgICAgICAgICByYWRpeExvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgcmFkaXhMb29wKCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgY291bnRpbmdTb3J0ID0gKGFyciwgZXhwKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjb3VudGluZyBzb3J0XCIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IHNvcnRlZEFycmF5ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICAgICAgbGV0IGJ1Y2tldCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxuICAgICAgICBidWNrZXRbTWF0aC5mbG9vcihhcnJbaV0udmFsIC8gZXhwKSAlIDEwXSsrO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSBidWNrZXRbaV0gKz0gYnVja2V0W2kgLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsb2MgPSBNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTA7XG4gICAgICAgIHNvcnRlZEFycmF5W2J1Y2tldFtsb2NdIC0gMV0gPSB7XG4gICAgICAgICAgdmFsOiBhcnJbaV0udmFsLFxuICAgICAgICAgIGNvbG9yOiBhcnJbaV0uY29sb3IsXG4gICAgICAgICAgZGVmYXVsdENvbG9yOiBhcnJbaV0uZGVmYXVsdENvbG9yLFxuICAgICAgICB9O1xuICAgICAgICBidWNrZXRbbG9jXS0tO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NhblZpc3VhbCA9IChpKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpID09PSAtMSkgdHJhbnNmZXJMb29wKDApO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBzY2FuVmlzdWFsKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHNjYW5WaXN1YWwoYXJyLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgdHJhbnNmZXJMb29wID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGFycltpXS52YWwgIT09IHNvcnRlZEFycmF5W2ldLnZhbCkge1xuICAgICAgICAgICAgYXJyW2ldLnZhbCA9IHNvcnRlZEFycmF5W2ldLnZhbDtcbiAgICAgICAgICAgIGFycltpXS5kZWZhdWx0Q29sb3IgPSBzb3J0ZWRBcnJheVtpXS5kZWZhdWx0Q29sb3I7XG4gICAgICAgICAgICBhcnJbaV0uY29sb3IgPSBzb3J0ZWRBcnJheVtpXS5jb2xvcjtcblxuICAgICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgfSBlbHNlIGFycltpXS5tYXJrMigpO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCkgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICBlbHNlIHRyYW5zZmVyTG9vcChpKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gU29ydCBSVU5OTklOR1wiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKDUpO1xuICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgIC8vIG5lZWRlZCB0byBzZXR1cCBhIHN0cm9uZyByZXNvbHZlLCBuZWVkIHRvIGNvbWUgYmFjayB0byB0aGlzICwgcmVhc29uOiBmb3IgcGF1c2luZyBhbmltYXRpb25cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24yKGFyciwgc3RhcnQsIGVuZCkudGhlbigocGkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgc3RhcnQsIHBpIC0gMSkudGhlbigoKSA9PlxuICAgICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBwaSArIDEsIGVuZClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24yKGFyciwgc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBsZXQgcGl2b3QgPSBhcnJbZW5kXS52YWw7XG4gICAgICBsZXQgaSA9IHN0YXJ0IC0gMTsgLy8gdHJhY2tpbmcgcGl2b3QgbG9jYXRpb25cbiAgICAgIGxldCBqID0gc3RhcnQgLSAxO1xuXG4gICAgICBjb25zdCBzd2FwQW5kUmVuZGVyID0gKGopID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJxdWljayBzb3J0IHN3YXBcIik7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIGFycltlbmRdLmNvbG9yUmVzZXQoKTsgLy8gPSBmYWxzZTtcbiAgICAgICAgICAgIGFycltzdGFydF0uY29sb3JSZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSAhPT0gc3RhcnQgJiYgaiAhPT0gZW5kKSBhcnJbc3RhcnRdLm1hcmtTdGF0aWMoKTtcblxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgLy8gaWYgKGkgPCAwKSBhcnJbMF0ubWFyazIoKTtcbiAgICAgICAgICAvLyBlbHNlIGFycltpXS5tYXJrMSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgdGltZWRXaGlsZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFycltlbmRdLm1hcmtTdGF0aWMoKTtcbiAgICAgICAgICBpZiAoaiA8IGVuZCkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIGlmIChqICE9PSBlbmQpIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgdGltZWRXaGlsZUxvb3AoKTtcbiAgICB9KTtcbiAgfVxufSAvLyBlbnRpcmUgYmxvY2tcblxuLy8gU3F1YXJlIGNvbnN0cnVjdG9yIGdldHMgYSBjYW52YXMgcHJvcGVydHksIGNvb3JkcyAsIGNvbG9yXG5cbi8vIGZ1bmN0aW9uIHN0YXJ0Q2FudmFzKCkge1xuLy8gICAgIGNsZWFyRGVtbygpO1xuLy8gICAgIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9IFwiQ0FOVkFTREVNT1wiO1xuLy8gICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4vLyAgICAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuLy8gICAgIGNvbnN0IHNxdWFyZXMgPSBbbmV3IFNxdWFyZShjYW52YXMuY3R4LCBjYW52YXMuY29vcmRzLCBjYW52YXMuZmlsbENvbG9yKV07XG5cbi8vICAgICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcblxuLy8gICAgIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbi8vICAgICAgICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4vLyAgICAgICAgIGlmIChhbmltYXRpbmcpIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnVwZGF0ZVNxdWFyZShjYW52YXMuZmlsbENvbG9yKSk7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLmRyYXdTcXVhcmUoKSk7XG4vLyAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbi8vICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSArIHNxLmNvb3Jkc1syXSA+IHdpbmRvdy5pbm5lcldpZHRoKVxuLy8gICAgICAgICAgICAgICAgIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gPCAwKSBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH07XG5cbi8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICAgICAgXCJ3aW5kb3dcIixcbi8vICAgICAgICAgXCJrZXlkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZUtleURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwibW91c2Vkb3duXCIsXG4vLyAgICAgICAgIGhhbmRsZU1vdXNlRG93bixcbi8vICAgICBdKTtcblxuLy8gICAgIC8vIDMyIGlzIEFTQ0lJIGZvciBzcGFjZSwgcmFuZG9taXplIGNvbG9yXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuLy8gICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDMyKSB7XG4vLyAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EucmV2ZXJzZUFuaW1hdGlvbigpKTtcbi8vICAgICAgICAgICAgIGNhbnZhcy5zZXRDb2xvcihgIyR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTY3NzcyMTUpLnRvU3RyaW5nKDE2KX1gKTtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIC8vIG9uIGNsaWNrIGFuaW1hdGUgbmV3IHNxdWFyZVxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBzcXVhcmVzLnB1c2goXG4vLyAgICAgICAgICAgICBuZXcgU3F1YXJlKFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jdHgsXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmNvb3Jkcy5tYXAoKGNvKSA9PiBjbyArIDI1KSxcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuZmlsbENvbG9yXG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIC8vIGFuaW1hdGluZyA9ICFhbmltYXRpbmc7XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHdoaWxlIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgIGxldCBbXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGV2ZW50LFxuICAgICAgaGFuZGxlcixcbiAgICBdID0gY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wb3AoKTtcbiAgICBpZiAoc2VsZWN0b3IgPT09IFwid2luZG93XCIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJEZW1vKCkge1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkNBTlZBU0RFTU9cIilcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIikpO1xuICBpZiAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID09PSBcIkRPTURFTU9cIikge1xuICAgIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcmRcIildLmZvckVhY2goKGVsZW0pID0+XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pXG4gICAgKTtcbiAgfVxufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGNvb3JkcywgY29sb3IgPSBcImdyZWVuXCIpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyID0gMTtcbiAgICB9XG5cbiAgICBkcmF3U3F1YXJlKCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgfVxuXG5cblxuICAgIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QsIHZhbCwgc3BlZWQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZGVmYXVsdENvbG9yID0gY29sb3I7XG4gICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICB0aGlzLm1hcmsxID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kcmF3ID0gKHhTdGFydCkgPT4ge1xuICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodCAtIDIwMDtcblxuICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgeDE6IGN4LFxuICAgICAgICB5MTogY3ksXG4gICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgeTI6IGNoLFxuICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgdGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgsXG4gICAgICAgIHkzOiBjaCxcbiAgICAgIH07XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICB0aGlzLm1hcmsyID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjRkZENzAwXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubWFya1N0YXRpYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29sb3IgPSBcIiNGRjAwRkZcIjtcbiAgICAgIC8vIGlmICh0aGlzLnN0YXRpYykge1xuICAgICAgLy8gICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAvLyAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICB0aGlzLmNvbG9yID0gc3RyO1xuICAgICAgLy8gICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgICAvLyB9XG4gICAgfTtcblxuICAgIHRoaXMuY29sb3JSZXNldCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXQgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9