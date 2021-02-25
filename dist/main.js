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

      var buildArrayLoop = function buildArrayLoop(i) {
        setTimeout(function () {}, speed.value);
      };

      for (var _i2 = arr.length - 1; _i2 >= 0; _i2--) {
        var loc = Math.floor(arr[_i2].val / exp) % 10;
        sortedArray[bucket[loc] - 1] = {
          val: arr[_i2].val,
          color: arr[_i2].color,
          defaultColor: arr[_i2].defaultColor
        };
        bucket[loc]--;
      }

      var vals = []; // for (let i = 0; i < sortedArray.length; i++)
      //   vals.push(sortedArray[i].val);
      // console.log(vals);

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
        debugger;
        setTimeout(function () {
          if (arr[i].val !== sortedArray[i].val) {
            // arr[i] = sortedArray[i];
            // Object.freeze(arr[i]);
            // console.log("i: ", i, " val: ", sortedArray[i].val);
            arr[i].val = sortedArray[i].val;
            arr[i].defaultColor = sortedArray[i].defaultColor;
            arr[i].color = sortedArray[i].color; // arr[i].xDist = sortedArray[i].xDist;
            // arr[i].marked = sortedArray[i].marked;
            // console.log(arr[i]);

            arr[i].mark1(); // sortedArray[i].mark1();
          } else arr[i].mark2();

          i++;
          if (i === arr.length) resolve(null);else transferLoop(i);
        }, speed.value);
      }; // arr = sortedArray;
      // resolve(null);
      // transferLoop(0);
      // for (let i = 0; i < sortedArray.length; i++) {
      //   arr[i].color = sortedArray[i].color;
      //   arr[i].defaultColor = sortedArray[i].defaultColor;
      //   arr[i].val = sortedArray[i].val;
      // }
      // resolve(null);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiYWxnb1NlbGVjdCIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0SGFuZGxlciIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJpZCIsIm15RnVuYyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGQiLCJhbGdvIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInNsaWNlRmFjdG9yIiwicmVzZXQiLCJzdGFydEFsZ28iLCJ0b2dnbGVTb3J0QnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFFTIiwic3RhcnRCUyIsInN0YXJ0UlMiLCJzdGFydFNTIiwidG9nZ2xlIiwiZGlzYWJsZWQiLCJpbml0aWFsaXplQnV0dG9ucyIsImZvcndhcmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciIsImZvcndhcmRMb2FkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsImJDdHJscyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzbGljZUJ1dHRvbkNvbnRhaW5lciIsImxvYWRCb3JkZXIiLCJzbGljZUJ1dHRvbiIsImN5Y2xlU2xpY2UiLCJyZXNldEJ1dHRvbiIsInN0eWxlIiwicmlnaHQiLCJsb2FkIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInZhbHMiLCJpc1NvcnRlZCIsInNlbGVjdGlvblNvcnQiLCJhcnIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN3YXBzQm9vbCIsIm91dGVyTG9vcCIsImlubmVybG9vcCIsInN0YXJ0Iiwic2V0VGltZW91dCIsIm1hcmsyIiwidGVtcCIsIm1hcmsxIiwibCIsImNvbjEiLCJjb24yIiwiZXhwIiwicmFkaXhMb29wIiwiY291bnRpbmdTb3J0Iiwic29ydGVkQXJyYXkiLCJidWNrZXQiLCJmaWxsIiwiYnVpbGRBcnJheUxvb3AiLCJsb2MiLCJjb2xvciIsImRlZmF1bHRDb2xvciIsInNjYW5WaXN1YWwiLCJ0cmFuc2Zlckxvb3AiLCJlbmQiLCJ4U3RhcnQiLCJxdWlja1NvcnRQYXJ0aXRpb24yIiwicGkiLCJxdWlja1NvcnRQYXJ0aXRpb24iLCJyZWplY3QiLCJwaXZvdCIsImoiLCJ0aW1lQnVmZmVyIiwic3dhcEFuZFJlbmRlciIsIm1hcmsiLCJjb2xvclJlc2V0IiwibWFya1N0YXRpYyIsInRpbWVkV2hpbGVMb29wIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwicG9wIiwic2VsZWN0b3IiLCJldmVudCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJEZW1vIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEF0dHJpYnV0ZSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJmaWxsQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJTcXVhcmUiLCJjb29yZHMiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsInN0YXRpYyIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIs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QWxCO0FBQ0QsT0FGUyxFQUVQLEtBQUksQ0FBQzlGLEtBQUwsQ0FBV3RCLEtBRkosQ0FBVjtBQUdEO0FBQ0YsR0FQRDs7QUFTQSxPQUFLbUksVUFBTCxHQUFrQixZQUFNO0FBQ3RCLFNBQUksQ0FBQzhCLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBSSxDQUFDOUMsS0FBTCxHQUFhLFNBQWIsQ0FGc0IsQ0FHdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVZEOztBQVlBLE9BQUtlLFVBQUwsR0FBa0IsWUFBTTtBQUN0QixTQUFJLENBQUMrQixNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUksQ0FBQzlDLEtBQUwsR0FBYSxLQUFJLENBQUNDLFlBQWxCO0FBQ0QsR0FIRDs7QUFLQSxPQUFLNUYsS0FBTCxHQUFhLFlBQU07QUFDakIsUUFBSTtBQUNGLFdBQUksQ0FBQzZILEdBQUwsQ0FBU0UsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFJLENBQUNsSixNQUFMLENBQVlxRSxLQUFyQyxFQUE0QyxLQUFJLENBQUNyRSxNQUFMLENBQVk2SSxNQUF4RDtBQUNELEtBRkQsQ0FFRSxPQUFPa0MsQ0FBUCxFQUFVO0FBQ1Z6SixhQUFPLENBQUNDLEdBQVIsQ0FBWXdKLENBQVo7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDOztBQUdZbkgsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUM5RkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFNxdWFyZSBmcm9tIFwiLi9zY3JpcHRzL3NxdWFyZVwiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmxldCBhbGdvU2VsZWN0ID0geyB2YWx1ZTogbnVsbCB9O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwicXVpY2stc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJidWJibGUtc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWRpeC1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInJhZGl4LXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0aW9uLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwic2VsZWN0aW9uLXNvcnRcIik7XG59KTtcblxuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGlkKSB7XG4gIGlmIChhbGdvU2VsZWN0LnZhbHVlID09PSBudWxsKSB7XG4gICAgbXlGdW5jKGFsZ29TZWxlY3QpO1xuICB9XG4gIGFsZ29TZWxlY3QudmFsdWUgPSBpZDtcblxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkQnV0dG9uXCIpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbn1cblxuZnVuY3Rpb24gbXlGdW5jKGFsZ28pIHtcbiAgbGV0IG15VHJpID0gW107XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuICBsZXQgc3BlZWQgPSB7IHZhbHVlOiA1IH07XG4gIGxldCBzbGljZUZhY3RvciA9IDg7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICByZXNldCgpO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0QWxnbygpIHtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyh0cnVlKTtcbiAgICBjb25zb2xlLmxvZyhhbGdvLnZhbHVlLCBcIiBzdGFydGVkIGJ5IGFsZ28tdmFsdWVcIik7XG4gICAgc3dpdGNoIChhbGdvLnZhbHVlKSB7XG4gICAgICBjYXNlIFwicXVpY2stc29ydFwiOlxuICAgICAgICBzdGFydFFTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJidWJibGUtc29ydFwiOlxuICAgICAgICBzdGFydEJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJyYWRpeC1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInNlbGVjdGlvbi1zb3J0XCI6XG4gICAgICAgIHN0YXJ0U1MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNvcnRCdXR0b25zKHZhbHVlKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2FibGVcIik7XG4gICAgICBlbGUuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIC8vIGxldCBxc2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgLy8gcXNiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyAvLyBxc2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBmb3J3YXJkTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmlkID0gXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBmb3J3YXJkTG9hZC5pZCA9IFwiZm9yd2FyZExvYWRcIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NTgmIzk2NThcIjtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRCdXR0b24pO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZExvYWQpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OFwiO1xuICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRBbGdvKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShwbGF5QnV0dG9uLCBiQ3RybHMuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgc2xpY2VCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuaWQgPSBcInNsaWNlQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBsZXQgbG9hZEJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsb2FkQm9yZGVyLmlkID0gXCJzbGljZUxvYWRcIjtcbiAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzbGljZUJ1dHRvbi5pZCA9IFwic2xpY2VCdXR0b25cIjtcbiAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuICAgICAgc2xpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU2xpY2UpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc2xpY2VCdXR0b24pO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKGxvYWRCb3JkZXIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShcbiAgICAgICAgc2xpY2VCdXR0b25Db250YWluZXIsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIilcbiAgICAgICk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCImIzg2MzRcIjtcbiAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldCk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTcGVlZCgpIHtcbiAgICBpZiAoc3BlZWQudmFsdWUgPT09IDUpIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCI1MCVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlZWQudmFsdWUgPSA1O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNsaWNlKCkge1xuICAgIGxldCBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUxvYWRcIik7XG4gICAgc3dpdGNoIChzbGljZUZhY3Rvcikge1xuICAgICAgY2FzZSA4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDE0O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI2OCVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDE0OlxuICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI1MiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDI4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIzNiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDI4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDQwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIxNiVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA0MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA1MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA1MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI4NCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVBcnIoKSB7XG4gICAgLy8gRGl2aWRlIGNhbnZhcyBpbnRvIHNsaWNlcyBvZiBlcXVhbCBsZW5ndGhcbiAgICAvLyBVc2UgbGluZWFyIGNvbG9yIG1hcGluZyB0byBUcmlhbmdsZS52YWxcbiAgICAvLyBUcmlhbmdsZS52YWwgd2lsbCBiZSBzb3J0ZWQgZmllbGRcbiAgICAvLyB4RGlzdCByZW1haW5zIHNhbWVcbiAgICBsZXQgeERpc3QgPSAxIC8gKDEwICogc2xpY2VGYWN0b3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgKiBzbGljZUZhY3RvcjsgaSsrKSB7XG4gICAgICAvLyAwLTI1NSByYW5kb20gbnVtYmVyXG4gICAgICBsZXQgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KTtcblxuICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICBjYW52YXMsXG4gICAgICAgIGJsdWVSYW5kb21pemVyKHZhbCwgMjU1KSxcbiAgICAgICAgeERpc3QsXG4gICAgICAgIHZhbCxcbiAgICAgICAgc3BlZWRcbiAgICAgICk7XG5cbiAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFZhcnMoKSB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBteVRyaSA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIC8vIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKSwgMTgpO1xuICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgaWYgKHNoYWRlVmFsIDwgMTYpIGdWYWx1ZSA9IFwiMFwiICsgZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gZmFsc2U7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRCUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIGJ1YmJsZVNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJidWJibGUgc29ydCBmaW5pc2hlZFwiKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFJTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcmFkaXhTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwicmFkaXggc29ydCBmaW5pc2hlZFwiKTtcbiAgICAgIGxldCB2YWxzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB2YWxzLnB1c2gobXlUcmlbaV0udmFsKTtcbiAgICAgIGNvbnNvbGUubG9nKGlzU29ydGVkKHZhbHMpKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFNTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgc2VsZWN0aW9uU29ydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gc29ydCBmaW5pc2hlZFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImJ1YmJsZSBTb3J0IFJVTk5OSU5HXCIpO1xuICAgICAgbGV0IHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICBsZXQgaSA9IC0xO1xuICAgICAgY29uc3Qgb3V0ZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3dhcHNCb29sKSB7XG4gICAgICAgICAgc3dhcHNCb29sID0gZmFsc2U7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlubmVybG9vcCgwKTtcbiAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbm5lcmxvb3AgPSAoc3RhcnQpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXJ0IDwgYXJyLmxlbmd0aCAtIDEgLSBpKSB7XG4gICAgICAgICAgICAvLyBsZSAyIGNoYXJhY3RlciBvcHRpbWl6YXRpb24sIDQ5IGNoYXJhY3RlciBjb21tZW50XG4gICAgICAgICAgICBhcnJbc3RhcnRdLm1hcmsyKCk7XG4gICAgICAgICAgICBpZiAoYXJyW3N0YXJ0XS52YWwgPiBhcnJbc3RhcnQgKyAxXS52YWwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltzdGFydF07XG4gICAgICAgICAgICAgIGFycltzdGFydF0gPSBhcnJbc3RhcnQgKyAxXTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0ICsgMV0gPSB0ZW1wO1xuICAgICAgICAgICAgICBzd2Fwc0Jvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICBhcnJbc3RhcnRdLm1hcmsxKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydCArPSAxO1xuICAgICAgICAgICAgaW5uZXJsb29wKHN0YXJ0KTtcbiAgICAgICAgICB9IGVsc2Ugb3V0ZXJMb29wKCk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICBvdXRlckxvb3AoKTtcbiAgICB9KTtcbiAgfVxuICBjb25zdCBpc1NvcnRlZCA9IChhcnIpID0+IHtcbiAgICBjb25zdCB7IGxlbmd0aDogbCB9ID0gYXJyO1xuICAgIGlmIChsIDw9IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGw7IGkrKykge1xuICAgICAgY29uc3QgY29uMSA9IGFycltpXSA+IDAgJiYgYXJyW2kgLSAxXSA8IDA7XG4gICAgICBjb25zdCBjb24yID0gYXJyW2ldIDwgMCAmJiBhcnJbaSAtIDFdID4gMDtcbiAgICAgIGlmIChjb24xIHx8IGNvbjIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgZnVuY3Rpb24gcmFkaXhTb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJyYWRpeCBTb3J0IFJVTk5OSU5HXCIpO1xuICAgICAgbGV0IGV4cCA9IDE7XG4gICAgICBjb25zdCByYWRpeExvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChNYXRoLmZsb29yKDI1NSAvIGV4cCkgPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQgZXhwXCIpO1xuICAgICAgICAgICAgY291bnRpbmdTb3J0KGFyciwgZXhwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgZXhwICo9IDEwO1xuICAgICAgICAgICAgICByYWRpeExvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgcmFkaXhMb29wKCk7XG4gICAgfSk7XG4gIH1cbiAgY29uc3QgY291bnRpbmdTb3J0ID0gKGFyciwgZXhwKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjb3VudGluZyBzb3J0XCIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IHNvcnRlZEFycmF5ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICAgICAgbGV0IGJ1Y2tldCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxuICAgICAgICBidWNrZXRbTWF0aC5mbG9vcihhcnJbaV0udmFsIC8gZXhwKSAlIDEwXSsrO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSBidWNrZXRbaV0gKz0gYnVja2V0W2kgLSAxXTtcblxuICAgICAgY29uc3QgYnVpbGRBcnJheUxvb3AgPSAoaSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHt9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxvYyA9IE1hdGguZmxvb3IoYXJyW2ldLnZhbCAvIGV4cCkgJSAxMDtcbiAgICAgICAgc29ydGVkQXJyYXlbYnVja2V0W2xvY10gLSAxXSA9IHtcbiAgICAgICAgICB2YWw6IGFycltpXS52YWwsXG4gICAgICAgICAgY29sb3I6IGFycltpXS5jb2xvcixcbiAgICAgICAgICBkZWZhdWx0Q29sb3I6IGFycltpXS5kZWZhdWx0Q29sb3IsXG4gICAgICAgIH07XG4gICAgICAgIGJ1Y2tldFtsb2NdLS07XG4gICAgICB9XG5cbiAgICAgIGxldCB2YWxzID0gW107XG4gICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEFycmF5Lmxlbmd0aDsgaSsrKVxuICAgICAgLy8gICB2YWxzLnB1c2goc29ydGVkQXJyYXlbaV0udmFsKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHMpO1xuICAgICAgY29uc3Qgc2NhblZpc3VhbCA9IChpKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpID09PSAtMSkgdHJhbnNmZXJMb29wKDApO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBzY2FuVmlzdWFsKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHNjYW5WaXN1YWwoYXJyLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgdHJhbnNmZXJMb29wID0gKGkpID0+IHtcbiAgICAgICAgZGVidWdnZXI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChhcnJbaV0udmFsICE9PSBzb3J0ZWRBcnJheVtpXS52YWwpIHtcbiAgICAgICAgICAgIC8vIGFycltpXSA9IHNvcnRlZEFycmF5W2ldO1xuICAgICAgICAgICAgLy8gT2JqZWN0LmZyZWV6ZShhcnJbaV0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpOiBcIiwgaSwgXCIgdmFsOiBcIiwgc29ydGVkQXJyYXlbaV0udmFsKTtcbiAgICAgICAgICAgIGFycltpXS52YWwgPSBzb3J0ZWRBcnJheVtpXS52YWw7XG4gICAgICAgICAgICBhcnJbaV0uZGVmYXVsdENvbG9yID0gc29ydGVkQXJyYXlbaV0uZGVmYXVsdENvbG9yO1xuICAgICAgICAgICAgYXJyW2ldLmNvbG9yID0gc29ydGVkQXJyYXlbaV0uY29sb3I7XG4gICAgICAgICAgICAvLyBhcnJbaV0ueERpc3QgPSBzb3J0ZWRBcnJheVtpXS54RGlzdDtcbiAgICAgICAgICAgIC8vIGFycltpXS5tYXJrZWQgPSBzb3J0ZWRBcnJheVtpXS5tYXJrZWQ7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJbaV0pO1xuICAgICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgICAvLyBzb3J0ZWRBcnJheVtpXS5tYXJrMSgpO1xuICAgICAgICAgIH0gZWxzZSBhcnJbaV0ubWFyazIoKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGgpIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgZWxzZSB0cmFuc2Zlckxvb3AoaSk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICAvLyBhcnIgPSBzb3J0ZWRBcnJheTtcbiAgICAgIC8vIHJlc29sdmUobnVsbCk7XG4gICAgICAvLyB0cmFuc2Zlckxvb3AoMCk7XG4gICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAgIGFycltpXS5jb2xvciA9IHNvcnRlZEFycmF5W2ldLmNvbG9yO1xuICAgICAgLy8gICBhcnJbaV0uZGVmYXVsdENvbG9yID0gc29ydGVkQXJyYXlbaV0uZGVmYXVsdENvbG9yO1xuICAgICAgLy8gICBhcnJbaV0udmFsID0gc29ydGVkQXJyYXlbaV0udmFsO1xuICAgICAgLy8gfVxuICAgICAgLy8gcmVzb2x2ZShudWxsKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gU29ydCBSVU5OTklOR1wiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByZXNvbHZlKDUpO1xuICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0KGFyciwgc3RhcnQsIGVuZCwgeFN0YXJ0ID0gMCkge1xuICAgIC8vIG5lZWRlZCB0byBzZXR1cCBhIHN0cm9uZyByZXNvbHZlLCBuZWVkIHRvIGNvbWUgYmFjayB0byB0aGlzICwgcmVhc29uOiBmb3IgcGF1c2luZyBhbmltYXRpb25cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChzdGFydCA8IGVuZCkge1xuICAgICAgICBxdWlja1NvcnRQYXJ0aXRpb24yKGFyciwgc3RhcnQsIGVuZCkudGhlbigocGkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgc3RhcnQsIHBpIC0gMSkudGhlbigoKSA9PlxuICAgICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBwaSArIDEsIGVuZClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSByZXNvbHZlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBubyBsb25nZXIgYmVpbmcgdXNlZCwgaGVsZCBmb3IgcmVmZXJlbmNlXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcbiAgICAgIGxldCB0aW1lQnVmZmVyID0gMDtcbiAgICAgIHdoaWxlIChqIDwgZW5kKSB7XG4gICAgICAgIGorKztcbiAgICAgICAgaWYgKGFycltqXS52YWwgPD0gcGl2b3QpIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN3YXBBbmRSZW5kZXIoaikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2FwIGhhcHBlbmVkXCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dhcHBpbmdcIiwgYXJyW2ldLCBhcnJbal0pO1xuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsoKTtcbiAgICAgICAgICBhcnJbal0ubWFyaygpO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHJlc29sdmUoaSk7XG4gICAgICAgICAgLy8gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgICAgICB9LCBqICogc3BlZWQudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcblxuICAgICAgY29uc3Qgc3dhcEFuZFJlbmRlciA9IChqKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVpY2sgc29ydCBzd2FwXCIpO1xuICAgICAgICBpZiAoYXJyW2pdLnZhbCA8PSBwaXZvdCkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgICBhcnJbZW5kXS5jb2xvclJlc2V0KCk7IC8vID0gZmFsc2U7XG4gICAgICAgICAgICBhcnJbc3RhcnRdLmNvbG9yUmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgIT09IHN0YXJ0ICYmIGogIT09IGVuZCkgYXJyW3N0YXJ0XS5tYXJrU3RhdGljKCk7XG5cbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgIGFycltpXS5tYXJrMigpO1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIGlmIChpIDwgMCkgYXJyWzBdLm1hcmsyKCk7XG4gICAgICAgICAgZWxzZSBhcnJbaV0ubWFyazIoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpbWVkV2hpbGVMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhcnJbZW5kXS5tYXJrU3RhdGljKCk7XG4gICAgICAgICAgaWYgKGogPCBlbmQpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICAgICAgICBpZiAoaiAhPT0gZW5kKSB0aW1lZFdoaWxlTG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgfSk7XG4gIH1cbn0gLy8gZW50aXJlIGJsb2NrXG5cbi8vIFNxdWFyZSBjb25zdHJ1Y3RvciBnZXRzIGEgY2FudmFzIHByb3BlcnR5LCBjb29yZHMgLCBjb2xvclxuXG4vLyBmdW5jdGlvbiBzdGFydENhbnZhcygpIHtcbi8vICAgICBjbGVhckRlbW8oKTtcbi8vICAgICB1bnJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPSBcIkNBTlZBU0RFTU9cIjtcbi8vICAgICBjb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuLy8gICAgIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbi8vICAgICBjb25zdCBzcXVhcmVzID0gW25ldyBTcXVhcmUoY2FudmFzLmN0eCwgY2FudmFzLmNvb3JkcywgY2FudmFzLmZpbGxDb2xvcildO1xuXG4vLyAgICAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG5cbi8vICAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4vLyAgICAgICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuLy8gICAgICAgICBpZiAoYW5pbWF0aW5nKSBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS51cGRhdGVTcXVhcmUoY2FudmFzLmZpbGxDb2xvcikpO1xuLy8gICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5kcmF3U3F1YXJlKCkpO1xuLy8gICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4vLyAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHtcbi8vICAgICAgICAgICAgIGlmIChzcS5jb29yZHNbMF0gKyBzcS5jb29yZHNbMl0gPiB3aW5kb3cuaW5uZXJXaWR0aClcbi8vICAgICAgICAgICAgICAgICBzcS5yZXZlcnNlQW5pbWF0aW9uKCk7XG4vLyAgICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdIDwgMCkgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuXG4vLyAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuLy8gICAgIGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucHVzaChbXG4vLyAgICAgICAgIFwid2luZG93XCIsXG4vLyAgICAgICAgIFwia2V5ZG93blwiLFxuLy8gICAgICAgICBoYW5kbGVLZXlEb3duLFxuLy8gICAgIF0pO1xuXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAgICAgICBcIndpbmRvd1wiLFxuLy8gICAgICAgICBcIm1vdXNlZG93blwiLFxuLy8gICAgICAgICBoYW5kbGVNb3VzZURvd24sXG4vLyAgICAgXSk7XG5cbi8vICAgICAvLyAzMiBpcyBBU0NJSSBmb3Igc3BhY2UsIHJhbmRvbWl6ZSBjb2xvclxuLy8gICAgIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbi8vICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSAzMikge1xuLy8gICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgICAgIHNxdWFyZXMuZm9yRWFjaCgoc3EpID0+IHNxLnJldmVyc2VBbmltYXRpb24oKSk7XG4vLyAgICAgICAgICAgICBjYW52YXMuc2V0Q29sb3IoYCMke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNil9YCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAvLyBvbiBjbGljayBhbmltYXRlIG5ldyBzcXVhcmVcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbi8vICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgc3F1YXJlcy5wdXNoKFxuLy8gICAgICAgICAgICAgbmV3IFNxdWFyZShcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuY3R4LFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5jb29yZHMubWFwKChjbykgPT4gY28gKyAyNSksXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmZpbGxDb2xvclxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICApO1xuLy8gICAgICAgICAvLyBhbmltYXRpbmcgPSAhYW5pbWF0aW5nO1xuLy8gICAgIH1cbi8vIH1cblxuZnVuY3Rpb24gdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCkge1xuICB3aGlsZSAoY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICBsZXQgW1xuICAgICAgc2VsZWN0b3IsXG4gICAgICBldmVudCxcbiAgICAgIGhhbmRsZXIsXG4gICAgXSA9IGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMucG9wKCk7XG4gICAgaWYgKHNlbGVjdG9yID09PSBcIndpbmRvd1wiKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGVtbygpIHtcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJDQU5WQVNERU1PXCIpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY2FudmFzXCIpKTtcbiAgaWYgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXhhbXBsZSA9PT0gXCJET01ERU1PXCIpIHtcbiAgICBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpXS5mb3JFYWNoKChlbGVtKSA9PlxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtKVxuICAgICk7XG4gIH1cbn1cbiIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG5cbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRofWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAgICAgICAvLyB9XG5cbiAgICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgLy8gfVxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlOyIsImNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBjb29yZHMsIGNvbG9yID0gXCJncmVlblwiKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciA9IDE7XG4gICAgfVxuXG4gICAgZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgIH1cblxuXG5cbiAgICByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNxdWFyZTsiLCJjbGFzcyBUcmlhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0LCB2YWwsIHNwZWVkKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmRlZmF1bHRDb2xvciA9IGNvbG9yO1xuICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgdGhpcy52YWwgPSB2YWw7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgdGhpcy5tYXJrMSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZHJhdyA9ICh4U3RhcnQpID0+IHtcbiAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgICAgbGV0IGNoID0gY2FudmFzRWxlbWVudC5oZWlnaHQgLSAyMDA7XG5cbiAgICAgIGxldCBjeSA9IGNoIC8gMjtcbiAgICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAvL3RoZSBmaXJzdCB2ZXJ0ZXggaXMgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgIHgxOiBjeCxcbiAgICAgICAgeTE6IGN5LFxuICAgICAgICAvL3RoZSBzZWNvbmQgdmVydGV4IGlzIG9uIHRoZSBjaXJjdW1zY3JpYmVkIGNpcmNsZSBhdCAwIHJhZGlhbnMgd2hlcmUgUiBpcyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUgKCBhID0gMzAsIGI9MzAgKVxuICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICB4MjogdGhpcy54U3RhcnQsXG4gICAgICAgIHkyOiBjaCxcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgIHgzOiB0aGlzLnhTdGFydCArIHRoaXMueERpc3QgKiBjYW52YXNFbGVtZW50LndpZHRoLFxuICAgICAgICB5MzogY2gsXG4gICAgICB9O1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngyLCB0cmlhbmdsZS55Mik7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngzLCB0cmlhbmdsZS55Myk7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5tYXJrMiA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiI0ZGRDcwMFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm1hcmtTdGF0aWMgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgICB0aGlzLmNvbG9yID0gXCIjRkYwMEZGXCI7XG4gICAgICAvLyBpZiAodGhpcy5zdGF0aWMpIHtcbiAgICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgLy8gICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgdGhpcy5jb2xvciA9IHN0cjtcbiAgICAgIC8vICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgICAgLy8gfVxuICAgIH07XG5cbiAgICB0aGlzLmNvbG9yUmVzZXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0ID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWFuZ2xlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==