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
/* harmony import */ var _scripts_triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/triangle */ "./src/scripts/triangle.js");



var currentStateObj = {
  currentExample: null,
  currentEventListeners: []
};
var algoSelect = {
  value: null
}; // TODO: loop over class list

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
    toggleSortButtons(true); // console.log(algo.value, " started by algo-value");

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
      var newTri = new _scripts_triangle__WEBPACK_IMPORTED_MODULE_2__["default"](canvas, blueRandomizer(val, 255), xDist, val, speed);
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
      enableButtons(); // console.log("bubble sort finished");
    });
  }

  function startRS() {
    hideButtons();
    radixSort(myTri).then(function () {
      enableButtons();
    });
  }

  function startSS() {
    hideButtons();
    selectionSort(myTri).then(function () {
      enableButtons();
      console.log("selection sort finished");
    });
  }

  function bubbleSort(arr) {
    return new Promise(function (resolve) {
      // console.log("bubble Sort RUNNNING");
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
      // console.log("radix Sort RUNNNING");
      var exp = 1;

      var radixLoop = function radixLoop() {
        setTimeout(function () {
          if (Math.floor(255 / exp) > 0) {
            // console.log("next exp");
            countingSort(arr, exp).then(function () {
              exp *= 10;
              radixLoop();
            });
          } else resolve(null);
        }, speed.value);
      };

      radixLoop();
    });
  } // used by radix sort


  var countingSort = function countingSort(arr, exp) {
    // console.log("counting sort");
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

  function selectionSort(arr) {
    return new Promise(function (resolve) {
      console.log("selection Sort RUNNNING");
      var i = 0;
      var min = {
        val: 256,
        loc: null
      };

      var outerLoop = function outerLoop() {
        if (i < arr.length) {
          min.val = 256;
          innerLoop(i);
        } else resolve(null);
      }; // from j to arr.length, find min...


      var innerLoop = function innerLoop(j) {
        setTimeout(function () {
          if (j < arr.length) {
            if (arr[j].val < min.val) min = {
              val: arr[j].val,
              loc: j
            };
            arr[j].mark2();
            innerLoop(j + 1);
          } else {
            var temp = arr[i];
            arr[i] = arr[min.loc];
            arr[min.loc] = temp;
            arr[i].mark1();
            arr[min.loc].mark1();
            i++;
            outerLoop();
          }
        }, speed.value);
      };

      outerLoop(0);
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
      }, _this.speed.value * 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJjdXJyZW50U3RhdGVPYmoiLCJjdXJyZW50RXhhbXBsZSIsImN1cnJlbnRFdmVudExpc3RlbmVycyIsImFsZ29TZWxlY3QiLCJ2YWx1ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEhhbmRsZXIiLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwiaWQiLCJteUZ1bmMiLCJBcnJheSIsImZyb20iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdldEVsZW1lbnRCeUlkIiwiYWRkIiwiYWxnbyIsIm15VHJpIiwiYW5pbWF0aW5nIiwic3BlZWQiLCJzbGljZUZhY3RvciIsInJlc2V0Iiwic3RhcnRBbGdvIiwidG9nZ2xlU29ydEJ1dHRvbnMiLCJzdGFydFFTIiwic3RhcnRCUyIsInN0YXJ0UlMiLCJzdGFydFNTIiwidG9nZ2xlIiwiZGlzYWJsZWQiLCJpbml0aWFsaXplQnV0dG9ucyIsImZvcndhcmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciIsImZvcndhcmRMb2FkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsImJDdHJscyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzbGljZUJ1dHRvbkNvbnRhaW5lciIsImxvYWRCb3JkZXIiLCJzbGljZUJ1dHRvbiIsImN5Y2xlU2xpY2UiLCJyZXNldEJ1dHRvbiIsInN0eWxlIiwicmlnaHQiLCJsb2FkIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInNlbGVjdGlvblNvcnQiLCJjb25zb2xlIiwibG9nIiwiYXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzd2Fwc0Jvb2wiLCJvdXRlckxvb3AiLCJpbm5lcmxvb3AiLCJzdGFydCIsInNldFRpbWVvdXQiLCJtYXJrMiIsInRlbXAiLCJtYXJrMSIsImV4cCIsInJhZGl4TG9vcCIsImNvdW50aW5nU29ydCIsInNvcnRlZEFycmF5IiwiYnVja2V0IiwiZmlsbCIsImxvYyIsImNvbG9yIiwiZGVmYXVsdENvbG9yIiwic2NhblZpc3VhbCIsInRyYW5zZmVyTG9vcCIsIm1pbiIsImlubmVyTG9vcCIsImoiLCJlbmQiLCJ4U3RhcnQiLCJxdWlja1NvcnRQYXJ0aXRpb24yIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsInN3YXBBbmRSZW5kZXIiLCJjb2xvclJlc2V0IiwibWFya1N0YXRpYyIsInRpbWVkV2hpbGVMb29wIiwicHJvcHMiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJjdHgiLCJnZXRDb250ZXh0IiwiYm9keSIsImNsZWFyUmVjdCIsImZpbGxDb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsIm1hcmtlZCIsInN0YXRpYyIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUc7QUFDdEJDLGdCQUFjLEVBQUUsSUFETTtBQUV0QkMsdUJBQXFCLEVBQUU7QUFGRCxDQUF4QjtBQUtBLElBQUlDLFVBQVUsR0FBRztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUFqQixDLENBQ0E7O0FBQ0FDLFFBQVEsQ0FBQ0Ms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R0FBYSxLQUFJLENBQUNDLFlBQWxCO0FBQ0QsR0FIRDs7QUFLQSxPQUFLdEYsS0FBTCxHQUFhLFlBQU07QUFDakIsUUFBSTtBQUNGLFdBQUksQ0FBQzJHLEdBQUwsQ0FBU0csU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFJLENBQUNqSSxNQUFMLENBQVltRSxLQUFyQyxFQUE0QyxLQUFJLENBQUNuRSxNQUFMLENBQVkySCxNQUF4RDtBQUNELEtBRkQsQ0FFRSxPQUFPK0IsQ0FBUCxFQUFVO0FBQ1Z0RSxhQUFPLENBQUNDLEdBQVIsQ0FBWXFFLENBQVo7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDOztBQUdZaEcsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUM5RkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmxldCBhbGdvU2VsZWN0ID0geyB2YWx1ZTogbnVsbCB9O1xuLy8gVE9ETzogbG9vcCBvdmVyIGNsYXNzIGxpc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJxdWljay1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcImJ1YmJsZS1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhZGl4LXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwicmFkaXgtc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3Rpb24tc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJzZWxlY3Rpb24tc29ydFwiKTtcbn0pO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuXG5mdW5jdGlvbiBzdGFydEhhbmRsZXIoaWQpIHtcbiAgaWYgKGFsZ29TZWxlY3QudmFsdWUgPT09IG51bGwpIHtcbiAgICBteUZ1bmMoYWxnb1NlbGVjdCk7XG4gIH1cbiAgYWxnb1NlbGVjdC52YWx1ZSA9IGlkO1xuXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRCdXR0b25cIik7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQnV0dG9uXCIpO1xufVxuXG5mdW5jdGlvbiBteUZ1bmMoYWxnbykge1xuICBsZXQgbXlUcmkgPSBbXTtcbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gIGxldCBzcGVlZCA9IHsgdmFsdWU6IDUgfTtcbiAgbGV0IHNsaWNlRmFjdG9yID0gODsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG4gIHJlc2V0KCk7XG5cbiAgZnVuY3Rpb24gc3RhcnRBbGdvKCkge1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKHRydWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGFsZ28udmFsdWUsIFwiIHN0YXJ0ZWQgYnkgYWxnby12YWx1ZVwiKTtcbiAgICBzd2l0Y2ggKGFsZ28udmFsdWUpIHtcbiAgICAgIGNhc2UgXCJxdWljay1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UVMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcImJ1YmJsZS1zb3J0XCI6XG4gICAgICAgIHN0YXJ0QlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInJhZGl4LXNvcnRcIjpcbiAgICAgICAgc3RhcnRSUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLXNvcnRcIjpcbiAgICAgICAgc3RhcnRTUygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU29ydEJ1dHRvbnModmFsdWUpIHtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwidW5jbGlja2FibGVcIik7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcImNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgLy8gbGV0IHFzYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAvLyBxc2IuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIC8vIHFzYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1dHRvbnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGZvcndhcmRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGZvcndhcmRMb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuaWQgPSBcImZvcndhcmRCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGZvcndhcmRMb2FkLmlkID0gXCJmb3J3YXJkTG9hZFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pZCA9IFwiZm9yd2FyZEJ1dHRvblwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OCYjOTY1OFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZEJ1dHRvbik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkTG9hZCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIilcbiAgICAgICAgLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b25Db250YWluZXIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4XCI7XG4gICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEFsZ28pO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBzbGljZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5pZCA9IFwic2xpY2VCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGxldCBsb2FkQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxvYWRCb3JkZXIuaWQgPSBcInNsaWNlTG9hZFwiO1xuICAgICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNsaWNlQnV0dG9uLmlkID0gXCJzbGljZUJ1dHRvblwiO1xuICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgICBzbGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTbGljZSk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChzbGljZUJ1dHRvbik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQobG9hZEJvcmRlcik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKVxuICAgICAgKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcmVzZXRCdXR0b24uaWQgPSBcInJlc2V0QnV0dG9uXCI7XG4gICAgICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjODYzNFwiO1xuICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgIGlmIChzcGVlZC52YWx1ZSA9PT0gNSkge1xuICAgICAgc3BlZWQudmFsdWUgPSA1MDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgbGV0IGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlTG9hZFwiKTtcbiAgICBzd2l0Y2ggKHNsaWNlRmFjdG9yKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMTQ7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjY4JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjUyJVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjM2JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNDA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjE2JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDQwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDUwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDUwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjg0JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUFycigpIHtcbiAgICAvLyBEaXZpZGUgY2FudmFzIGludG8gc2xpY2VzIG9mIGVxdWFsIGxlbmd0aFxuICAgIC8vIFVzZSBsaW5lYXIgY29sb3IgbWFwaW5nIHRvIFRyaWFuZ2xlLnZhbFxuICAgIC8vIFRyaWFuZ2xlLnZhbCB3aWxsIGJlIHNvcnRlZCBmaWVsZFxuICAgIC8vIHhEaXN0IHJlbWFpbnMgc2FtZVxuICAgIGxldCB4RGlzdCA9IDEgLyAoMTAgKiBzbGljZUZhY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAqIHNsaWNlRmFjdG9yOyBpKyspIHtcbiAgICAgIC8vIDAtMjU1IHJhbmRvbSBudW1iZXJcbiAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpO1xuXG4gICAgICBjb25zdCBuZXdUcmkgPSBuZXcgVHJpYW5nbGUoXG4gICAgICAgIGNhbnZhcyxcbiAgICAgICAgYmx1ZVJhbmRvbWl6ZXIodmFsLCAyNTUpLFxuICAgICAgICB4RGlzdCxcbiAgICAgICAgdmFsLFxuICAgICAgICBzcGVlZFxuICAgICAgKTtcblxuICAgICAgbXlUcmkucHVzaChuZXdUcmkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VmFycygpIHtcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgIG15VHJpID0gW107XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpbml0aWFsaXplQnV0dG9ucygpO1xuICAgIHJlc2V0VmFycygpO1xuICAgIGluaXRpYWxpemVBcnIoKTtcbiAgfVxuXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBteVRyaVtpXS5kcmF3KHN1bSk7XG4gICAgICBzdW0gKz0gbXlUcmlbaV0ueERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoO1xuICAgIH1cbiAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgLy8gd2luZG93LnNldFRpbWVvdXQod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pLCAxOCk7XG4gIC8vIExvZ2ljIHByZWZvcm1lZCBvbiBHIHZhbHVlLCBrZWVwaW5nIFIgYWJkIEIgY29uc3RhbnRcbiAgZnVuY3Rpb24gYmx1ZVJhbmRvbWl6ZXIoaW5wdXRzaGFkZSwgbWF4VmFsKSB7XG4gICAgbGV0IHNoYWRlVmFsID0gTWF0aC5jZWlsKChpbnB1dHNoYWRlIC8gbWF4VmFsKSAqIDI1NSk7XG5cbiAgICBsZXQgclZhbHVlID0gXCIzQ1wiOyAvLzYwXG4gICAgbGV0IGdWYWx1ZSA9IHNoYWRlVmFsLnRvU3RyaW5nKDE2KTtcbiAgICBpZiAoc2hhZGVWYWwgPCAxNikgZ1ZhbHVlID0gXCIwXCIgKyBnVmFsdWU7XG5cbiAgICByZXR1cm4gYCMke3JWYWx1ZSArIGdWYWx1ZX1mZmA7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQnV0dG9ucygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5oaWRkZW4gPSB0cnVlO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMoKSB7XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gICAgdG9nZ2xlU29ydEJ1dHRvbnMoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRRUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEJTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgYnViYmxlU29ydChteVRyaSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJ1YmJsZSBzb3J0IGZpbmlzaGVkXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRSUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHJhZGl4U29ydChteVRyaSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRTUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHNlbGVjdGlvblNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gc29ydCBmaW5pc2hlZFwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImJ1YmJsZSBTb3J0IFJVTk5OSU5HXCIpO1xuICAgICAgbGV0IHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICBsZXQgaSA9IC0xO1xuICAgICAgY29uc3Qgb3V0ZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoc3dhcHNCb29sKSB7XG4gICAgICAgICAgc3dhcHNCb29sID0gZmFsc2U7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlubmVybG9vcCgwKTtcbiAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbm5lcmxvb3AgPSAoc3RhcnQpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXJ0IDwgYXJyLmxlbmd0aCAtIDEgLSBpKSB7XG4gICAgICAgICAgICAvLyBsZSAyIGNoYXJhY3RlciBvcHRpbWl6YXRpb24sIDQ5IGNoYXJhY3RlciBjb21tZW50XG4gICAgICAgICAgICBhcnJbc3RhcnRdLm1hcmsyKCk7XG4gICAgICAgICAgICBpZiAoYXJyW3N0YXJ0XS52YWwgPiBhcnJbc3RhcnQgKyAxXS52YWwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltzdGFydF07XG4gICAgICAgICAgICAgIGFycltzdGFydF0gPSBhcnJbc3RhcnQgKyAxXTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0ICsgMV0gPSB0ZW1wO1xuICAgICAgICAgICAgICBzd2Fwc0Jvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICBhcnJbc3RhcnRdLm1hcmsxKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGFydCArPSAxO1xuICAgICAgICAgICAgaW5uZXJsb29wKHN0YXJ0KTtcbiAgICAgICAgICB9IGVsc2Ugb3V0ZXJMb29wKCk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICBvdXRlckxvb3AoKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiByYWRpeFNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInJhZGl4IFNvcnQgUlVOTk5JTkdcIik7XG4gICAgICBsZXQgZXhwID0gMTtcbiAgICAgIGNvbnN0IHJhZGl4TG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoMjU1IC8gZXhwKSA+IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmV4dCBleHBcIik7XG4gICAgICAgICAgICBjb3VudGluZ1NvcnQoYXJyLCBleHApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBleHAgKj0gMTA7XG4gICAgICAgICAgICAgIHJhZGl4TG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICByYWRpeExvb3AoKTtcbiAgICB9KTtcbiAgfVxuICAvLyB1c2VkIGJ5IHJhZGl4IHNvcnRcbiAgY29uc3QgY291bnRpbmdTb3J0ID0gKGFyciwgZXhwKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJjb3VudGluZyBzb3J0XCIpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IHNvcnRlZEFycmF5ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICAgICAgbGV0IGJ1Y2tldCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxuICAgICAgICBidWNrZXRbTWF0aC5mbG9vcihhcnJbaV0udmFsIC8gZXhwKSAlIDEwXSsrO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSBidWNrZXRbaV0gKz0gYnVja2V0W2kgLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsb2MgPSBNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTA7XG4gICAgICAgIHNvcnRlZEFycmF5W2J1Y2tldFtsb2NdIC0gMV0gPSB7XG4gICAgICAgICAgdmFsOiBhcnJbaV0udmFsLFxuICAgICAgICAgIGNvbG9yOiBhcnJbaV0uY29sb3IsXG4gICAgICAgICAgZGVmYXVsdENvbG9yOiBhcnJbaV0uZGVmYXVsdENvbG9yLFxuICAgICAgICB9O1xuICAgICAgICBidWNrZXRbbG9jXS0tO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NhblZpc3VhbCA9IChpKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpID09PSAtMSkgdHJhbnNmZXJMb29wKDApO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBzY2FuVmlzdWFsKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHNjYW5WaXN1YWwoYXJyLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgdHJhbnNmZXJMb29wID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGFycltpXS52YWwgIT09IHNvcnRlZEFycmF5W2ldLnZhbCkge1xuICAgICAgICAgICAgYXJyW2ldLnZhbCA9IHNvcnRlZEFycmF5W2ldLnZhbDtcbiAgICAgICAgICAgIGFycltpXS5kZWZhdWx0Q29sb3IgPSBzb3J0ZWRBcnJheVtpXS5kZWZhdWx0Q29sb3I7XG4gICAgICAgICAgICBhcnJbaV0uY29sb3IgPSBzb3J0ZWRBcnJheVtpXS5jb2xvcjtcblxuICAgICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgfSBlbHNlIGFycltpXS5tYXJrMigpO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCkgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICBlbHNlIHRyYW5zZmVyTG9vcChpKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJzZWxlY3Rpb24gU29ydCBSVU5OTklOR1wiKTtcblxuICAgICAgbGV0IGkgPSAwO1xuICAgICAgbGV0IG1pbiA9IHsgdmFsOiAyNTYsIGxvYzogbnVsbCB9O1xuICAgICAgY29uc3Qgb3V0ZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICBtaW4udmFsID0gMjU2O1xuICAgICAgICAgIGlubmVyTG9vcChpKTtcbiAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBmcm9tIGogdG8gYXJyLmxlbmd0aCwgZmluZCBtaW4uLi5cblxuICAgICAgY29uc3QgaW5uZXJMb29wID0gKGopID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGogPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2pdLnZhbCA8IG1pbi52YWwpIG1pbiA9IHsgdmFsOiBhcnJbal0udmFsLCBsb2M6IGogfTtcbiAgICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgICAgaW5uZXJMb29wKGogKyAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICAgIGFycltpXSA9IGFyclttaW4ubG9jXTtcbiAgICAgICAgICAgIGFyclttaW4ubG9jXSA9IHRlbXA7XG4gICAgICAgICAgICBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgICAgIGFyclttaW4ubG9jXS5tYXJrMSgpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgb3V0ZXJMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuXG4gICAgICBvdXRlckxvb3AoMCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG5cbiAgICAgIGNvbnN0IHN3YXBBbmRSZW5kZXIgPSAoaikgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1aWNrIHNvcnQgc3dhcFwiKTtcbiAgICAgICAgaWYgKGFycltqXS52YWwgPD0gcGl2b3QpIHtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgYXJyW2VuZF0uY29sb3JSZXNldCgpOyAvLyA9IGZhbHNlO1xuICAgICAgICAgICAgYXJyW3N0YXJ0XS5jb2xvclJlc2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpICE9PSBzdGFydCAmJiBqICE9PSBlbmQpIGFycltzdGFydF0ubWFya1N0YXRpYygpO1xuXG4gICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgICAgICAgYXJyW2pdID0gdGVtcDtcbiAgICAgICAgICBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgICBhcnJbal0ubWFyazIoKTtcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgICByZXNvbHZlKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcnJbal0ubWFyazIoKTtcbiAgICAgICAgICAvLyBpZiAoaSA8IDApIGFyclswXS5tYXJrMigpO1xuICAgICAgICAgIC8vIGVsc2UgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB0aW1lZFdoaWxlTG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgYXJyW2VuZF0ubWFya1N0YXRpYygpO1xuICAgICAgICAgIGlmIChqIDwgZW5kKSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwQW5kUmVuZGVyKGopO1xuICAgICAgICAgICAgaWYgKGogIT09IGVuZCkgdGltZWRXaGlsZUxvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICB0aW1lZFdoaWxlTG9vcCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjbGFzcyBjYW52YXNFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuXG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIH1cbiAgICBjcmVhdGVDYW52YXMoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBgJHt3aW5kb3cuaW5uZXJXaWR0aH1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXdTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5maWxsQ29sb3I7XG4gICAgICAgIC8vICAgdGhpcy5jdHguZmlsbFJlY3QoLi4udGhpcy5jb29yZHMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHVwZGF0ZVNxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmNvb3JkcyA9IHRoaXMuY29vcmRzLm1hcCgoY29vcmQpID0+IChjb29yZCArPSAxICogdGhpcy5hbmltYXRpb25EaXIpKTtcbiAgICAgICAgLy8gfVxuXG4gICAgLy8gY2xlYXJTcXVhcmUoKSB7XG4gICAgLy8gICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgLy8gfVxuXG4gICAgLy8gcmV2ZXJzZUFuaW1hdGlvbigpIHtcbiAgICAvLyAgIHRoaXMuYW5pbWF0aW9uRGlyICo9IC0xO1xuICAgIC8vIH1cbiAgICBjbGVhckNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICAgIHNldENvbG9yKGNvbG9yKSB7XG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTsiLCJjbGFzcyBUcmlhbmdsZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3IsIHhEaXN0LCB2YWwsIHNwZWVkKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgdGhpcy54RGlzdCA9IHhEaXN0O1xuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLmRlZmF1bHRDb2xvciA9IGNvbG9yO1xuICAgIHRoaXMubWFya2VkID0gZmFsc2U7XG4gICAgdGhpcy52YWwgPSB2YWw7XG4gICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xuICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgdGhpcy5tYXJrMSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwicmVkXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSAqIDIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmRyYXcgPSAoeFN0YXJ0KSA9PiB7XG4gICAgICB0aGlzLnhTdGFydCA9IHhTdGFydDtcbiAgICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgICBsZXQgY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgICAgbGV0IGN3ID0gY2FudmFzRWxlbWVudC53aWR0aDtcbiAgICAgIGxldCBjaCA9IGNhbnZhc0VsZW1lbnQuaGVpZ2h0IC0gMjAwO1xuXG4gICAgICBsZXQgY3kgPSBjaCAvIDI7XG4gICAgICBsZXQgY3ggPSBjdyAvIDI7XG5cbiAgICAgIHZhciB0cmlhbmdsZSA9IHtcbiAgICAgICAgLy90aGUgZmlyc3QgdmVydGV4IGlzIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICB4MTogY3gsXG4gICAgICAgIHkxOiBjeSxcbiAgICAgICAgLy90aGUgc2Vjb25kIHZlcnRleCBpcyBvbiB0aGUgY2lyY3Vtc2NyaWJlZCBjaXJjbGUgYXQgMCByYWRpYW5zIHdoZXJlIFIgaXMgdGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlICggYSA9IDMwLCBiPTMwIClcbiAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICB5MjogY2gsXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgICB4MzogdGhpcy54U3RhcnQgKyB0aGlzLnhEaXN0ICogY2FudmFzRWxlbWVudC53aWR0aCxcbiAgICAgICAgeTM6IGNoLFxuICAgICAgfTtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguZmlsbCgpO1xuXG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIHRoaXMubWFyazIgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIiNGRkQ3MDBcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5tYXJrU3RhdGljID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgICAgdGhpcy5jb2xvciA9IFwiI0ZGMDBGRlwiO1xuICAgICAgLy8gaWYgKHRoaXMuc3RhdGljKSB7XG4gICAgICAvLyAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgIC8vICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIHRoaXMuY29sb3IgPSBzdHI7XG4gICAgICAvLyAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jb2xvclJlc2V0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=