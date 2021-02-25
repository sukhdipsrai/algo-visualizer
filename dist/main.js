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

      console.log(vals);
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

      for (var _i = 0; _i < arr.length; _i++) {
        bucket[Math.floor(arr[_i].val / exp) % 10]++;
      }

      for (var _i2 = 1; _i2 < 10; _i2++) {
        bucket[_i2] += bucket[_i2 - 1];
      }

      var buildArrayLoop = function buildArrayLoop(i) {
        setTimeout(function () {}, speed.value);
      };

      for (var _i3 = arr.length - 1; _i3 >= 0; _i3--) {
        var loc = Math.floor(arr[_i3].val / exp) % 10;
        sortedArray[bucket[loc] - 1] = {
          val: arr[_i3].val,
          color: arr[_i3].color,
          defaultColor: arr[_i3].defaultColor
        };
        bucket[loc]--;
      }

      var vals = [];

      for (var _i4 = 0; _i4 < sortedArray.length; _i4++) {
        vals.push(sortedArray[_i4].val);
      }

      console.log(vals);
      var i = 0;

      var transferLoop = function transferLoop() {
        debugger;
        setTimeout(function () {
          // if (arr[i].val !== sortedArray[i].val) {
          // arr[i] = sortedArray[i];
          // Object.freeze(arr[i]);
          arr[i].val = sortedArray[i].val;
          arr[i].defaultColor = sortedArray[i].defaultColor;
          arr[i].color = sortedArray[i].color; // arr[i].xDist = sortedArray[i].xDist;
          // arr[i].marked = sortedArray[i].marked;
          // console.log(arr[i]);
          // arr[i].mark1();
          // sortedArray[i].mark1();
          // } else arr[i].mark2();

          i++;
          if (i === arr.length - 1) resolve(null);else transferLoop();
        }, speed.value);
      }; // arr = sortedArray;
      // resolve(null);


      transferLoop(); // for (let i = 0; i < sortedArray.length; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcXVhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdHJpYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImN1cnJlbnRTdGF0ZU9iaiIsImN1cnJlbnRFeGFtcGxlIiwiY3VycmVudEV2ZW50TGlzdGVuZXJzIiwiYWxnb1NlbGVjdCIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0SGFuZGxlciIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJpZCIsIm15RnVuYyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGQiLCJhbGdvIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInNsaWNlRmFjdG9yIiwicmVzZXQiLCJzdGFydEFsZ28iLCJ0b2dnbGVTb3J0QnV0dG9ucyIsImNvbnNvbGUiLCJsb2ciLCJzdGFydFFTIiwic3RhcnRCUyIsInN0YXJ0UlMiLCJzdGFydFNTIiwidG9nZ2xlIiwiZGlzYWJsZWQiLCJpbml0aWFsaXplQnV0dG9ucyIsImZvcndhcmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciIsImZvcndhcmRMb2FkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsImJDdHJscyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzbGljZUJ1dHRvbkNvbnRhaW5lciIsImxvYWRCb3JkZXIiLCJzbGljZUJ1dHRvbiIsImN5Y2xlU2xpY2UiLCJyZXNldEJ1dHRvbiIsInN0eWxlIiwicmlnaHQiLCJsb2FkIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInZhbHMiLCJzZWxlY3Rpb25Tb3J0IiwiYXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzd2Fwc0Jvb2wiLCJvdXRlckxvb3AiLCJpbm5lcmxvb3AiLCJzdGFydCIsInNldFRpbWVvdXQiLCJtYXJrMiIsInRlbXAiLCJtYXJrMSIsImV4cCIsInJhZGl4TG9vcCIsImNvdW50aW5nU29ydCIsInNvcnRlZEFycmF5IiwiYnVja2V0IiwiZmlsbCIsImJ1aWxkQXJyYXlMb29wIiwibG9jIiwiY29sb3IiLCJkZWZhdWx0Q29sb3IiLCJ0cmFuc2Zlckxvb3AiLCJlbmQiLCJ4U3RhcnQiLCJxdWlja1NvcnRQYXJ0aXRpb24yIiwicGkiLCJxdWlja1NvcnRQYXJ0aXRpb24iLCJyZWplY3QiLCJwaXZvdCIsImoiLCJ0aW1lQnVmZmVyIiwic3dhcEFuZFJlbmRlciIsIm1hcmsiLCJjb2xvclJlc2V0IiwibWFya1N0YXRpYyIsInRpbWVkV2hpbGVMb29wIiwidW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzIiwicG9wIiwic2VsZWN0b3IiLCJldmVudCIsImhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJEZW1vIiwiYm9keSIsInJlbW92ZUNoaWxkIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW0iLCJwcm9wcyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEF0dHJpYnV0ZSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJmaWxsQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJTcXVhcmUiLCJjb29yZHMiLCJhbmltYXRpb25EaXIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm1hcmtlZCIsInN0YXRpYyIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FB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LE9BRlMsRUFFUCxLQUFJLENBQUMxRixLQUFMLENBQVd0QixLQUZKLENBQVY7QUFHRDtBQUNGLEdBUEQ7O0FBU0EsT0FBSzhILFVBQUwsR0FBa0IsWUFBTTtBQUN0QixTQUFJLENBQUM4QixNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUksQ0FBQzdDLEtBQUwsR0FBYSxTQUFiLENBRnNCLENBR3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FWRDs7QUFZQSxPQUFLYyxVQUFMLEdBQWtCLFlBQU07QUFDdEIsU0FBSSxDQUFDK0IsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFJLENBQUM3QyxLQUFMLEdBQWEsS0FBSSxDQUFDQyxZQUFsQjtBQUNELEdBSEQ7O0FBS0EsT0FBS3hGLEtBQUwsR0FBYSxZQUFNO0FBQ2pCLFFBQUk7QUFDRixXQUFJLENBQUN3SCxHQUFMLENBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSSxDQUFDN0ksTUFBTCxDQUFZcUUsS0FBckMsRUFBNEMsS0FBSSxDQUFDckUsTUFBTCxDQUFZd0ksTUFBeEQ7QUFDRCxLQUZELENBRUUsT0FBT2tDLENBQVAsRUFBVTtBQUNWcEosYUFBTyxDQUFDQyxHQUFSLENBQVltSixDQUFaO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQzs7QUFHWTlHLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDOUZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBTcXVhcmUgZnJvbSBcIi4vc2NyaXB0cy9zcXVhcmVcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbmNvbnN0IGN1cnJlbnRTdGF0ZU9iaiA9IHtcbiAgY3VycmVudEV4YW1wbGU6IG51bGwsXG4gIGN1cnJlbnRFdmVudExpc3RlbmVyczogW10sXG59O1xuXG5sZXQgYWxnb1NlbGVjdCA9IHsgdmFsdWU6IG51bGwgfTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInF1aWNrLXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwiYnViYmxlLXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFkaXgtc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJyYWRpeC1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGlvbi1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInNlbGVjdGlvbi1zb3J0XCIpO1xufSk7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihpZCkge1xuICBpZiAoYWxnb1NlbGVjdC52YWx1ZSA9PT0gbnVsbCkge1xuICAgIG15RnVuYyhhbGdvU2VsZWN0KTtcbiAgfVxuICBhbGdvU2VsZWN0LnZhbHVlID0gaWQ7XG5cbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRCdXR0b25cIik7XG59XG5cbmZ1bmN0aW9uIG15RnVuYyhhbGdvKSB7XG4gIGxldCBteVRyaSA9IFtdO1xuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgbGV0IHNwZWVkID0geyB2YWx1ZTogNSB9O1xuICBsZXQgc2xpY2VGYWN0b3IgPSA4OyAvLyBpbmNyZWFzaW5nIHdpbGwgY3JlYXRlIG1vcmUgdHJpYW5nbGUgc2xpY2VzXG5cbiAgcmVzZXQoKTtcblxuICBmdW5jdGlvbiBzdGFydEFsZ28oKSB7XG4gICAgdG9nZ2xlU29ydEJ1dHRvbnModHJ1ZSk7XG4gICAgY29uc29sZS5sb2coYWxnby52YWx1ZSwgXCIgc3RhcnRlZCBieSBhbGdvLXZhbHVlXCIpO1xuICAgIHN3aXRjaCAoYWxnby52YWx1ZSkge1xuICAgICAgY2FzZSBcInF1aWNrLXNvcnRcIjpcbiAgICAgICAgc3RhcnRRUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwiYnViYmxlLXNvcnRcIjpcbiAgICAgICAgc3RhcnRCUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwicmFkaXgtc29ydFwiOlxuICAgICAgICBzdGFydFJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJzZWxlY3Rpb24tc29ydFwiOlxuICAgICAgICBzdGFydFNTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTb3J0QnV0dG9ucyh2YWx1ZSkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmRpc2FibGVkID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICAvLyBsZXQgcXNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIC8vIHFzYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgLy8gLy8gcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQnV0dG9ucygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZm9yd2FyZExvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5pZCA9IFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiO1xuICAgICAgZm9yd2FyZExvYWQuaWQgPSBcImZvcndhcmRMb2FkXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4JiM5NjU4XCI7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRMb2FkKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKVxuICAgICAgICAuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIjtcbiAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NThcIjtcbiAgICAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0QWxnbyk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHNsaWNlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmlkID0gXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiO1xuICAgICAgbGV0IGxvYWRCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbG9hZEJvcmRlci5pZCA9IFwic2xpY2VMb2FkXCI7XG4gICAgICBsZXQgc2xpY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc2xpY2VCdXR0b24uaWQgPSBcInNsaWNlQnV0dG9uXCI7XG4gICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcbiAgICAgIHNsaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNsaWNlKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKHNsaWNlQnV0dG9uKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChsb2FkQm9yZGVyKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpXG4gICAgICApO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICByZXNldEJ1dHRvbi5pZCA9IFwicmVzZXRCdXR0b25cIjtcbiAgICAgIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9IFwiJiM4NjM0XCI7XG4gICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXQpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgaWYgKHNwZWVkLnZhbHVlID09PSA1KSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDUwO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiNTAlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTbGljZSgpIHtcbiAgICBsZXQgbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VMb2FkXCIpO1xuICAgIHN3aXRjaCAoc2xpY2VGYWN0b3IpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAxNDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiNjglXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyMDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiNTIlXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyODtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMzYlXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA0MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMTYlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNTA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNTA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gODtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiODQlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQXJyKCkge1xuICAgIC8vIERpdmlkZSBjYW52YXMgaW50byBzbGljZXMgb2YgZXF1YWwgbGVuZ3RoXG4gICAgLy8gVXNlIGxpbmVhciBjb2xvciBtYXBpbmcgdG8gVHJpYW5nbGUudmFsXG4gICAgLy8gVHJpYW5nbGUudmFsIHdpbGwgYmUgc29ydGVkIGZpZWxkXG4gICAgLy8geERpc3QgcmVtYWlucyBzYW1lXG4gICAgbGV0IHhEaXN0ID0gMSAvICgxMCAqIHNsaWNlRmFjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwICogc2xpY2VGYWN0b3I7IGkrKykge1xuICAgICAgLy8gMC0yNTUgcmFuZG9tIG51bWJlclxuICAgICAgbGV0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XG5cbiAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBibHVlUmFuZG9taXplcih2YWwsIDI1NSksXG4gICAgICAgIHhEaXN0LFxuICAgICAgICB2YWwsXG4gICAgICAgIHNwZWVkXG4gICAgICApO1xuXG4gICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRWYXJzKCkge1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgbXlUcmkgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgcmVzZXRWYXJzKCk7XG4gICAgaW5pdGlhbGl6ZUFycigpO1xuICB9XG5cbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUcmkubGVuZ3RoOyBpKyspIHtcbiAgICAgIG15VHJpW2ldLmRyYXcoc3VtKTtcbiAgICAgIHN1bSArPSBteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGg7XG4gICAgfVxuICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAvLyB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbiksIDE4KTtcbiAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgIGxldCByVmFsdWUgPSBcIjNDXCI7IC8vNjBcbiAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuICAgIGlmIChzaGFkZVZhbCA8IDE2KSBnVmFsdWUgPSBcIjBcIiArIGdWYWx1ZTtcblxuICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCdXR0b25zKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IHRydWU7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IGZhbHNlO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyhmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcXVpY2tTb3J0KG15VHJpLCAwLCBteVRyaS5sZW5ndGggLSAxKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0QlMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBidWJibGVTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnViYmxlIHNvcnQgZmluaXNoZWRcIik7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRSUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHJhZGl4U29ydChteVRyaSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInJhZGl4IHNvcnQgZmluaXNoZWRcIik7XG4gICAgICBsZXQgdmFscyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykgdmFscy5wdXNoKG15VHJpW2ldLnZhbCk7XG4gICAgICBjb25zb2xlLmxvZyh2YWxzKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFNTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgc2VsZWN0aW9uU29ydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gc29ydCBmaW5pc2hlZFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImJ1YmJsZSBTb3J0IFJVTk5OSU5HXCIpO1xuICAgICAgbGV0IHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICBsZXQgaSA9IC0xO1xuICAgICAgY29uc3Qgb3V0ZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3dhcHNCb29sKSB7XG4gICAgICAgICAgc3dhcHNCb29sID0gZmFsc2U7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlubmVybG9vcCgwKTtcbiAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbm5lcmxvb3AgPSAoc3RhcnQpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXJ0IDwgYXJyLmxlbmd0aCAtIDEgLSBpKSB7XG4gICAgICAgICAgICAvLyBsZSAyIGNoYXJhY3RlciBvcHRpbWl6YXRpb24sIDQ5IGNoYXJhY3RlciBjb21tZW50XG4gICAgICAgICAgICBhcnJbc3RhcnRdLm1hcmsyKCk7XG4gICAgICAgICAgICBpZiAoYXJyW3N0YXJ0XS52YWwgPiBhcnJbc3RhcnQgKyAxXS52YWwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltzdGFydF07XG4gICAgICAgICAgICAgIGFycltzdGFydF0gPSBhcnJbc3RhcnQgKyAxXTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0ICsgMV0gPSB0ZW1wO1xuICAgICAgICAgICAgICBzd2Fwc0Jvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICBhcnJbc3RhcnRdLm1hcmsxKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydCArPSAxO1xuICAgICAgICAgICAgaW5uZXJsb29wKHN0YXJ0KTtcbiAgICAgICAgICB9IGVsc2Ugb3V0ZXJMb29wKCk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICBvdXRlckxvb3AoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhZGl4U29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmFkaXggU29ydCBSVU5OTklOR1wiKTtcbiAgICAgIGxldCBleHAgPSAxO1xuICAgICAgY29uc3QgcmFkaXhMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigyNTUgLyBleHApID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXh0IGV4cFwiKTtcbiAgICAgICAgICAgIGNvdW50aW5nU29ydChhcnIsIGV4cCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGV4cCAqPSAxMDtcbiAgICAgICAgICAgICAgcmFkaXhMb29wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHJhZGl4TG9vcCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGNvdW50aW5nU29ydCA9IChhcnIsIGV4cCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY291bnRpbmcgc29ydFwiKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBzb3J0ZWRBcnJheSA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgICAgIGxldCBidWNrZXQgPSBuZXcgQXJyYXkoMTApLmZpbGwoMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKylcbiAgICAgICAgYnVja2V0W01hdGguZmxvb3IoYXJyW2ldLnZhbCAvIGV4cCkgJSAxMF0rKztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykgYnVja2V0W2ldICs9IGJ1Y2tldFtpIC0gMV07XG5cbiAgICAgIGNvbnN0IGJ1aWxkQXJyYXlMb29wID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7fSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsb2MgPSBNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTA7XG4gICAgICAgIHNvcnRlZEFycmF5W2J1Y2tldFtsb2NdIC0gMV0gPSB7XG4gICAgICAgICAgdmFsOiBhcnJbaV0udmFsLFxuICAgICAgICAgIGNvbG9yOiBhcnJbaV0uY29sb3IsXG4gICAgICAgICAgZGVmYXVsdENvbG9yOiBhcnJbaV0uZGVmYXVsdENvbG9yLFxuICAgICAgICB9O1xuICAgICAgICBidWNrZXRbbG9jXS0tO1xuICAgICAgfVxuXG4gICAgICBsZXQgdmFscyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRBcnJheS5sZW5ndGg7IGkrKylcbiAgICAgICAgdmFscy5wdXNoKHNvcnRlZEFycmF5W2ldLnZhbCk7XG4gICAgICBjb25zb2xlLmxvZyh2YWxzKTtcblxuICAgICAgbGV0IGkgPSAwO1xuICAgICAgY29uc3QgdHJhbnNmZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gaWYgKGFycltpXS52YWwgIT09IHNvcnRlZEFycmF5W2ldLnZhbCkge1xuICAgICAgICAgIC8vIGFycltpXSA9IHNvcnRlZEFycmF5W2ldO1xuICAgICAgICAgIC8vIE9iamVjdC5mcmVlemUoYXJyW2ldKTtcbiAgICAgICAgICBhcnJbaV0udmFsID0gc29ydGVkQXJyYXlbaV0udmFsO1xuICAgICAgICAgIGFycltpXS5kZWZhdWx0Q29sb3IgPSBzb3J0ZWRBcnJheVtpXS5kZWZhdWx0Q29sb3I7XG4gICAgICAgICAgYXJyW2ldLmNvbG9yID0gc29ydGVkQXJyYXlbaV0uY29sb3I7XG4gICAgICAgICAgLy8gYXJyW2ldLnhEaXN0ID0gc29ydGVkQXJyYXlbaV0ueERpc3Q7XG4gICAgICAgICAgLy8gYXJyW2ldLm1hcmtlZCA9IHNvcnRlZEFycmF5W2ldLm1hcmtlZDtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnJbaV0pO1xuICAgICAgICAgIC8vIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgIC8vIHNvcnRlZEFycmF5W2ldLm1hcmsxKCk7XG4gICAgICAgICAgLy8gfSBlbHNlIGFycltpXS5tYXJrMigpO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCAtIDEpIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgZWxzZSB0cmFuc2Zlckxvb3AoKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIC8vIGFyciA9IHNvcnRlZEFycmF5O1xuICAgICAgLy8gcmVzb2x2ZShudWxsKTtcbiAgICAgIHRyYW5zZmVyTG9vcCgpO1xuICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gICBhcnJbaV0uY29sb3IgPSBzb3J0ZWRBcnJheVtpXS5jb2xvcjtcbiAgICAgIC8vICAgYXJyW2ldLmRlZmF1bHRDb2xvciA9IHNvcnRlZEFycmF5W2ldLmRlZmF1bHRDb2xvcjtcbiAgICAgIC8vICAgYXJyW2ldLnZhbCA9IHNvcnRlZEFycmF5W2ldLnZhbDtcbiAgICAgIC8vIH1cbiAgICAgIC8vIHJlc29sdmUobnVsbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2VsZWN0aW9uU29ydCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0aW9uIFNvcnQgUlVOTk5JTkdcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSg1KTtcbiAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAvLyBuZWVkZWQgdG8gc2V0dXAgYSBzdHJvbmcgcmVzb2x2ZSwgbmVlZCB0byBjb21lIGJhY2sgdG8gdGhpcyAsIHJlYXNvbjogZm9yIHBhdXNpbmcgYW5pbWF0aW9uXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gbm8gbG9uZ2VyIGJlaW5nIHVzZWQsIGhlbGQgZm9yIHJlZmVyZW5jZVxuICBmdW5jdGlvbiBxdWlja1NvcnRQYXJ0aXRpb24oYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG4gICAgICBsZXQgdGltZUJ1ZmZlciA9IDA7XG4gICAgICB3aGlsZSAoaiA8IGVuZCkge1xuICAgICAgICBqKys7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzd2FwQW5kUmVuZGVyKGopIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dhcCBoYXBwZW5lZFwiKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3YXBwaW5nXCIsIGFycltpXSwgYXJyW2pdKTtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgIGFycltpXS5tYXJrKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsoKTtcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSByZXNvbHZlKGkpO1xuICAgICAgICAgIC8vIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfSwgaiAqIHNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG5cbiAgICAgIGNvbnN0IHN3YXBBbmRSZW5kZXIgPSAoaikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1aWNrIHNvcnQgc3dhcFwiKTtcbiAgICAgICAgaWYgKGFycltqXS52YWwgPD0gcGl2b3QpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgYXJyW2VuZF0uY29sb3JSZXNldCgpOyAvLyA9IGZhbHNlO1xuICAgICAgICAgICAgYXJyW3N0YXJ0XS5jb2xvclJlc2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpICE9PSBzdGFydCAmJiBqICE9PSBlbmQpIGFycltzdGFydF0ubWFya1N0YXRpYygpO1xuXG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICBhcnJbaV0ubWFyazIoKTtcbiAgICAgICAgICBhcnJbal0ubWFyazIoKTtcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgICByZXNvbHZlKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnJbal0ubWFyazIoKTtcbiAgICAgICAgICBpZiAoaSA8IDApIGFyclswXS5tYXJrMigpO1xuICAgICAgICAgIGVsc2UgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB0aW1lZFdoaWxlTG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYXJyW2VuZF0ubWFya1N0YXRpYygpO1xuICAgICAgICAgIGlmIChqIDwgZW5kKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgICAgICAgaWYgKGogIT09IGVuZCkgdGltZWRXaGlsZUxvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICB0aW1lZFdoaWxlTG9vcCgpO1xuICAgIH0pO1xuICB9XG59IC8vIGVudGlyZSBibG9ja1xuXG4vLyBTcXVhcmUgY29uc3RydWN0b3IgZ2V0cyBhIGNhbnZhcyBwcm9wZXJ0eSwgY29vcmRzICwgY29sb3JcblxuLy8gZnVuY3Rpb24gc3RhcnRDYW52YXMoKSB7XG4vLyAgICAgY2xlYXJEZW1vKCk7XG4vLyAgICAgdW5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFeGFtcGxlID0gXCJDQU5WQVNERU1PXCI7XG4vLyAgICAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbi8vICAgICBjYW52YXMuY3JlYXRlQ2FudmFzKCk7XG4vLyAgICAgY29uc3Qgc3F1YXJlcyA9IFtuZXcgU3F1YXJlKGNhbnZhcy5jdHgsIGNhbnZhcy5jb29yZHMsIGNhbnZhcy5maWxsQ29sb3IpXTtcblxuLy8gICAgIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuXG4vLyAgICAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuLy8gICAgICAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbi8vICAgICAgICAgaWYgKGFuaW1hdGluZykgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EudXBkYXRlU3F1YXJlKGNhbnZhcy5maWxsQ29sb3IpKTtcbi8vICAgICAgICAgc3F1YXJlcy5mb3JFYWNoKChzcSkgPT4gc3EuZHJhd1NxdWFyZSgpKTtcbi8vICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuLy8gICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAoc3EuY29vcmRzWzBdICsgc3EuY29vcmRzWzJdID4gd2luZG93LmlubmVyV2lkdGgpXG4vLyAgICAgICAgICAgICAgICAgc3EucmV2ZXJzZUFuaW1hdGlvbigpO1xuLy8gICAgICAgICAgICAgaWYgKHNxLmNvb3Jkc1swXSA8IDApIHNxLnJldmVyc2VBbmltYXRpb24oKTtcbi8vICAgICAgICAgfSk7XG4vLyAgICAgfTtcblxuLy8gICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbi8vICAgICBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnB1c2goW1xuLy8gICAgICAgICBcIndpbmRvd1wiLFxuLy8gICAgICAgICBcImtleWRvd25cIixcbi8vICAgICAgICAgaGFuZGxlS2V5RG93bixcbi8vICAgICBdKTtcblxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4vLyAgICAgY3VycmVudFN0YXRlT2JqLmN1cnJlbnRFdmVudExpc3RlbmVycy5wdXNoKFtcbi8vICAgICAgICAgXCJ3aW5kb3dcIixcbi8vICAgICAgICAgXCJtb3VzZWRvd25cIixcbi8vICAgICAgICAgaGFuZGxlTW91c2VEb3duLFxuLy8gICAgIF0pO1xuXG4vLyAgICAgLy8gMzIgaXMgQVNDSUkgZm9yIHNwYWNlLCByYW5kb21pemUgY29sb3Jcbi8vICAgICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4vLyAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMzIpIHtcbi8vICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgICAgICBzcXVhcmVzLmZvckVhY2goKHNxKSA9PiBzcS5yZXZlcnNlQW5pbWF0aW9uKCkpO1xuLy8gICAgICAgICAgICAgY2FudmFzLnNldENvbG9yKGAjJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpfWApO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gb24gY2xpY2sgYW5pbWF0ZSBuZXcgc3F1YXJlXG4vLyAgICAgZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4vLyAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgIHNxdWFyZXMucHVzaChcbi8vICAgICAgICAgICAgIG5ldyBTcXVhcmUoXG4vLyAgICAgICAgICAgICAgICAgY2FudmFzLmN0eCxcbi8vICAgICAgICAgICAgICAgICBjYW52YXMuY29vcmRzLm1hcCgoY28pID0+IGNvICsgMjUpLFxuLy8gICAgICAgICAgICAgICAgIGNhbnZhcy5maWxsQ29sb3Jcbi8vICAgICAgICAgICAgIClcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgLy8gYW5pbWF0aW5nID0gIWFuaW1hdGluZztcbi8vICAgICB9XG4vLyB9XG5cbmZ1bmN0aW9uIHVucmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgd2hpbGUgKGN1cnJlbnRTdGF0ZU9iai5jdXJyZW50RXZlbnRMaXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgbGV0IFtcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgZXZlbnQsXG4gICAgICBoYW5kbGVyLFxuICAgIF0gPSBjdXJyZW50U3RhdGVPYmouY3VycmVudEV2ZW50TGlzdGVuZXJzLnBvcCgpO1xuICAgIGlmIChzZWxlY3RvciA9PT0gXCJ3aW5kb3dcIikge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgLy8gY29uc29sZS5sb2coaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckRlbW8oKSB7XG4gIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiQ0FOVkFTREVNT1wiKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSk7XG4gIGlmIChjdXJyZW50U3RhdGVPYmouY3VycmVudEV4YW1wbGUgPT09IFwiRE9NREVNT1wiKSB7XG4gICAgWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FyZFwiKV0uZm9yRWFjaCgoZWxlbSkgPT5cbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbSlcbiAgICApO1xuICB9XG59XG4iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gICAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIC8vIH1cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTsiLCJjbGFzcyBTcXVhcmUge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgY29vcmRzLCBjb2xvciA9IFwiZ3JlZW5cIikge1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgPSAxO1xuICAgIH1cblxuICAgIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICB9XG5cblxuXG4gICAgcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7IiwiY2xhc3MgVHJpYW5nbGUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCwgdmFsLCBzcGVlZCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgIHRoaXMueERpc3QgPSB4RGlzdDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5kZWZhdWx0Q29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLm1hcmtlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsID0gdmFsO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgIHRoaXMubWFyazEgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRyYXcgPSAoeFN0YXJ0KSA9PiB7XG4gICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgbGV0IGN3ID0gY2FudmFzRWxlbWVudC53aWR0aDtcbiAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gMjAwO1xuXG4gICAgICBsZXQgY3kgPSBjaCAvIDI7XG4gICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgIHZhciB0cmlhbmdsZSA9IHtcbiAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICB4MTogY3gsXG4gICAgICAgIHkxOiBjeSxcbiAgICAgICAgLy90aGUgc2Vjb25kIHZlcnRleCBpcyBvbiB0aGUgY2lyY3Vtc2NyaWJlZCBjaXJjbGUgYXQgMCByYWRpYW5zIHdoZXJlIFIgaXMgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlICggYSA9IDMwLCBiPTMwIClcbiAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICB5MjogY2gsXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgICB4MzogdGhpcy54U3RhcnQgKyB0aGlzLnhEaXN0ICogY2FudmFzRWxlbWVudC53aWR0aCxcbiAgICAgICAgeTM6IGNoLFxuICAgICAgfTtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguZmlsbCgpO1xuXG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIHRoaXMubWFyazIgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIiNGRkQ3MDBcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5tYXJrU3RhdGljID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgICAgdGhpcy5jb2xvciA9IFwiI0ZGMDBGRlwiO1xuICAgICAgLy8gaWYgKHRoaXMuc3RhdGljKSB7XG4gICAgICAvLyAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgIC8vICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIHRoaXMuY29sb3IgPSBzdHI7XG4gICAgICAvLyAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jb2xvclJlc2V0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=