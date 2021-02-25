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
      enableButtons();
      console.log("bubble sort finished");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3VycmVudFN0YXRlT2JqIiwiY3VycmVudEV4YW1wbGUiLCJjdXJyZW50RXZlbnRMaXN0ZW5lcnMiLCJhbGdvU2VsZWN0IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRIYW5kbGVyIiwiY2FudmFzIiwiY2FudmFzRXhhbXBsZSIsImNyZWF0ZUNhbnZhcyIsImlkIiwibXlGdW5jIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnZXRFbGVtZW50QnlJZCIsImFkZCIsImFsZ28iLCJteVRyaSIsImFuaW1hdGluZyIsInNwZWVkIiwic2xpY2VGYWN0b3IiLCJyZXNldCIsInN0YXJ0QWxnbyIsInRvZ2dsZVNvcnRCdXR0b25zIiwiY29uc29sZSIsImxvZyIsInN0YXJ0UVMiLCJzdGFydEJTIiwic3RhcnRSUyIsInN0YXJ0U1MiLCJ0b2dnbGUiLCJkaXNhYmxlZCIsImluaXRpYWxpemVCdXR0b25zIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyIiwiZm9yd2FyZExvYWQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImN5Y2xlU3BlZWQiLCJoaWRkZW4iLCJwbGF5QnV0dG9uIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uQ29udGFpbmVyIiwibG9hZEJvcmRlciIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwic3R5bGUiLCJyaWdodCIsImxvYWQiLCJpbml0aWFsaXplQXJyIiwieERpc3QiLCJpIiwidmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJyZXNldFZhcnMiLCJjbGVhckNhbnZhcyIsImFuaW1hdGlvbiIsInN1bSIsImxlbmd0aCIsImRyYXciLCJ3aWR0aCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsImNlaWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsImhpZGVCdXR0b25zIiwiZW5hYmxlQnV0dG9ucyIsInF1aWNrU29ydCIsInRoZW4iLCJidWJibGVTb3J0IiwicmFkaXhTb3J0Iiwic2VsZWN0aW9uU29ydCIsImFyciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3dhcHNCb29sIiwib3V0ZXJMb29wIiwiaW5uZXJsb29wIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwibWFyazIiLCJ0ZW1wIiwibWFyazEiLCJleHAiLCJyYWRpeExvb3AiLCJjb3VudGluZ1NvcnQiLCJzb3J0ZWRBcnJheSIsImJ1Y2tldCIsImZpbGwiLCJsb2MiLCJjb2xvciIsImRlZmF1bHRDb2xvciIsInNjYW5WaXN1YWwiLCJ0cmFuc2Zlckxvb3AiLCJlbmQiLCJ4U3RhcnQiLCJxdWlja1NvcnRQYXJ0aXRpb24yIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsImoiLCJzd2FwQW5kUmVuZGVyIiwiY29sb3JSZXNldCIsIm1hcmtTdGF0aWMiLCJ0aW1lZFdoaWxlTG9vcCIsInByb3BzIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImJvZHkiLCJjbGVhclJlY3QiLCJmaWxsQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJtYXJrZWQiLCJzdGF0aWMiLCJjYW52YXNFbGVtZW50IiwiY3ciLCJjaCIsImN5IiwiY3giLCJ0cmlhbmdsZSIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxnQkFBYyxFQUFFLElBRE07QUFFdEJDLHVCQUFxQixFQUFFO0FBRkQsQ0FBeEI7QUFLQSxJQUFJQyxVQUFVLEdBQUc7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBakIsQyxDQUNBOztBQUNBQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0ND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QWMsS0FBZDtBQUNBLFNBQUksQ0FBQzVCLEtBQUwsR0FBYSxLQUFJLENBQUNDLFlBQWxCO0FBQ0QsR0FIRDs7QUFLQSxPQUFLdEYsS0FBTCxHQUFhLFlBQU07QUFDakIsUUFBSTtBQUNGLFdBQUksQ0FBQ3lHLEdBQUwsQ0FBU0csU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFJLENBQUMvSCxNQUFMLENBQVlxRSxLQUFyQyxFQUE0QyxLQUFJLENBQUNyRSxNQUFMLENBQVl5SCxNQUF4RDtBQUNELEtBRkQsQ0FFRSxPQUFPK0IsQ0FBUCxFQUFVO0FBQ1ZsSSxhQUFPLENBQUNDLEdBQVIsQ0FBWWlJLENBQVo7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDOztBQUdZNUYsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUM5RkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxuY29uc3QgY3VycmVudFN0YXRlT2JqID0ge1xuICBjdXJyZW50RXhhbXBsZTogbnVsbCxcbiAgY3VycmVudEV2ZW50TGlzdGVuZXJzOiBbXSxcbn07XG5cbmxldCBhbGdvU2VsZWN0ID0geyB2YWx1ZTogbnVsbCB9O1xuLy8gVE9ETzogbG9vcCBvdmVyIGNsYXNzIGxpc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJxdWljay1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcImJ1YmJsZS1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhZGl4LXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwicmFkaXgtc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3Rpb24tc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJzZWxlY3Rpb24tc29ydFwiKTtcbn0pO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgY2FudmFzRXhhbXBsZSgpO1xuY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuXG5mdW5jdGlvbiBzdGFydEhhbmRsZXIoaWQpIHtcbiAgaWYgKGFsZ29TZWxlY3QudmFsdWUgPT09IG51bGwpIHtcbiAgICBteUZ1bmMoYWxnb1NlbGVjdCk7XG4gIH1cbiAgYWxnb1NlbGVjdC52YWx1ZSA9IGlkO1xuXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRCdXR0b25cIik7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQnV0dG9uXCIpO1xufVxuXG5mdW5jdGlvbiBteUZ1bmMoYWxnbykge1xuICBsZXQgbXlUcmkgPSBbXTtcbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gIGxldCBzcGVlZCA9IHsgdmFsdWU6IDUgfTtcbiAgbGV0IHNsaWNlRmFjdG9yID0gODsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG4gIHJlc2V0KCk7XG5cbiAgZnVuY3Rpb24gc3RhcnRBbGdvKCkge1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKHRydWUpO1xuICAgIGNvbnNvbGUubG9nKGFsZ28udmFsdWUsIFwiIHN0YXJ0ZWQgYnkgYWxnby12YWx1ZVwiKTtcbiAgICBzd2l0Y2ggKGFsZ28udmFsdWUpIHtcbiAgICAgIGNhc2UgXCJxdWljay1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UVMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcImJ1YmJsZS1zb3J0XCI6XG4gICAgICAgIHN0YXJ0QlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInJhZGl4LXNvcnRcIjpcbiAgICAgICAgc3RhcnRSUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLXNvcnRcIjpcbiAgICAgICAgc3RhcnRTUygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU29ydEJ1dHRvbnModmFsdWUpIHtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwidW5jbGlja2FibGVcIik7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcImNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgLy8gbGV0IHFzYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAvLyBxc2IuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIC8vIHFzYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1dHRvbnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGZvcndhcmRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGZvcndhcmRMb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuaWQgPSBcImZvcndhcmRCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGZvcndhcmRMb2FkLmlkID0gXCJmb3J3YXJkTG9hZFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pZCA9IFwiZm9yd2FyZEJ1dHRvblwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OCYjOTY1OFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZEJ1dHRvbik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkTG9hZCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIilcbiAgICAgICAgLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b25Db250YWluZXIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4XCI7XG4gICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEFsZ28pO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBzbGljZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5pZCA9IFwic2xpY2VCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGxldCBsb2FkQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxvYWRCb3JkZXIuaWQgPSBcInNsaWNlTG9hZFwiO1xuICAgICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNsaWNlQnV0dG9uLmlkID0gXCJzbGljZUJ1dHRvblwiO1xuICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgICBzbGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTbGljZSk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChzbGljZUJ1dHRvbik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQobG9hZEJvcmRlcik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKVxuICAgICAgKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcmVzZXRCdXR0b24uaWQgPSBcInJlc2V0QnV0dG9uXCI7XG4gICAgICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjODYzNFwiO1xuICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgIGlmIChzcGVlZC52YWx1ZSA9PT0gNSkge1xuICAgICAgc3BlZWQudmFsdWUgPSA1MDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgbGV0IGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlTG9hZFwiKTtcbiAgICBzd2l0Y2ggKHNsaWNlRmFjdG9yKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMTQ7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjY4JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjUyJVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjM2JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNDA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjE2JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDQwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDUwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDUwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjg0JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUFycigpIHtcbiAgICAvLyBEaXZpZGUgY2FudmFzIGludG8gc2xpY2VzIG9mIGVxdWFsIGxlbmd0aFxuICAgIC8vIFVzZSBsaW5lYXIgY29sb3IgbWFwaW5nIHRvIFRyaWFuZ2xlLnZhbFxuICAgIC8vIFRyaWFuZ2xlLnZhbCB3aWxsIGJlIHNvcnRlZCBmaWVsZFxuICAgIC8vIHhEaXN0IHJlbWFpbnMgc2FtZVxuICAgIGxldCB4RGlzdCA9IDEgLyAoMTAgKiBzbGljZUZhY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAqIHNsaWNlRmFjdG9yOyBpKyspIHtcbiAgICAgIC8vIDAtMjU1IHJhbmRvbSBudW1iZXJcbiAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpO1xuXG4gICAgICBjb25zdCBuZXdUcmkgPSBuZXcgVHJpYW5nbGUoXG4gICAgICAgIGNhbnZhcyxcbiAgICAgICAgYmx1ZVJhbmRvbWl6ZXIodmFsLCAyNTUpLFxuICAgICAgICB4RGlzdCxcbiAgICAgICAgdmFsLFxuICAgICAgICBzcGVlZFxuICAgICAgKTtcblxuICAgICAgbXlUcmkucHVzaChuZXdUcmkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VmFycygpIHtcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgIG15VHJpID0gW107XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpbml0aWFsaXplQnV0dG9ucygpO1xuICAgIHJlc2V0VmFycygpO1xuICAgIGluaXRpYWxpemVBcnIoKTtcbiAgfVxuXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBteVRyaVtpXS5kcmF3KHN1bSk7XG4gICAgICBzdW0gKz0gbXlUcmlbaV0ueERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoO1xuICAgIH1cbiAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgLy8gd2luZG93LnNldFRpbWVvdXQod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pLCAxOCk7XG4gIC8vIExvZ2ljIHByZWZvcm1lZCBvbiBHIHZhbHVlLCBrZWVwaW5nIFIgYWJkIEIgY29uc3RhbnRcbiAgZnVuY3Rpb24gYmx1ZVJhbmRvbWl6ZXIoaW5wdXRzaGFkZSwgbWF4VmFsKSB7XG4gICAgbGV0IHNoYWRlVmFsID0gTWF0aC5jZWlsKChpbnB1dHNoYWRlIC8gbWF4VmFsKSAqIDI1NSk7XG5cbiAgICBsZXQgclZhbHVlID0gXCIzQ1wiOyAvLzYwXG4gICAgbGV0IGdWYWx1ZSA9IHNoYWRlVmFsLnRvU3RyaW5nKDE2KTtcbiAgICBpZiAoc2hhZGVWYWwgPCAxNikgZ1ZhbHVlID0gXCIwXCIgKyBnVmFsdWU7XG5cbiAgICByZXR1cm4gYCMke3JWYWx1ZSArIGdWYWx1ZX1mZmA7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQnV0dG9ucygpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5oaWRkZW4gPSB0cnVlO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMoKSB7XG4gICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gICAgdG9nZ2xlU29ydEJ1dHRvbnMoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRRUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydEJTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgYnViYmxlU29ydChteVRyaSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImJ1YmJsZSBzb3J0IGZpbmlzaGVkXCIpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0UlMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICByYWRpeFNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0U1MoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBzZWxlY3Rpb25Tb3J0KCkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGlvbiBzb3J0IGZpbmlzaGVkXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnViYmxlU29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnViYmxlIFNvcnQgUlVOTk5JTkdcIik7XG4gICAgICBsZXQgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgIGxldCBpID0gLTE7XG4gICAgICBjb25zdCBvdXRlckxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzd2Fwc0Jvb2wpIHtcbiAgICAgICAgICBzd2Fwc0Jvb2wgPSBmYWxzZTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaW5uZXJsb29wKDApO1xuICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlubmVybG9vcCA9IChzdGFydCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc3RhcnQgPCBhcnIubGVuZ3RoIC0gMSAtIGkpIHtcbiAgICAgICAgICAgIC8vIGxlIDIgY2hhcmFjdGVyIG9wdGltaXphdGlvbiwgNDkgY2hhcmFjdGVyIGNvbW1lbnRcbiAgICAgICAgICAgIGFycltzdGFydF0ubWFyazIoKTtcbiAgICAgICAgICAgIGlmIChhcnJbc3RhcnRdLnZhbCA+IGFycltzdGFydCArIDFdLnZhbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW3N0YXJ0XTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XSA9IGFycltzdGFydCArIDFdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnQgKyAxXSA9IHRlbXA7XG4gICAgICAgICAgICAgIHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGFycltzdGFydF0ubWFyazEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0ICs9IDE7XG4gICAgICAgICAgICBpbm5lcmxvb3Aoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSBvdXRlckxvb3AoKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIG91dGVyTG9vcCgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJhZGl4U29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmFkaXggU29ydCBSVU5OTklOR1wiKTtcbiAgICAgIGxldCBleHAgPSAxO1xuICAgICAgY29uc3QgcmFkaXhMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigyNTUgLyBleHApID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXh0IGV4cFwiKTtcbiAgICAgICAgICAgIGNvdW50aW5nU29ydChhcnIsIGV4cCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGV4cCAqPSAxMDtcbiAgICAgICAgICAgICAgcmFkaXhMb29wKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHJhZGl4TG9vcCgpO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IGNvdW50aW5nU29ydCA9IChhcnIsIGV4cCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY291bnRpbmcgc29ydFwiKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBzb3J0ZWRBcnJheSA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgICAgIGxldCBidWNrZXQgPSBuZXcgQXJyYXkoMTApLmZpbGwoMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKylcbiAgICAgICAgYnVja2V0W01hdGguZmxvb3IoYXJyW2ldLnZhbCAvIGV4cCkgJSAxMF0rKztcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykgYnVja2V0W2ldICs9IGJ1Y2tldFtpIC0gMV07XG5cbiAgICAgIGZvciAobGV0IGkgPSBhcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgbG9jID0gTWF0aC5mbG9vcihhcnJbaV0udmFsIC8gZXhwKSAlIDEwO1xuICAgICAgICBzb3J0ZWRBcnJheVtidWNrZXRbbG9jXSAtIDFdID0ge1xuICAgICAgICAgIHZhbDogYXJyW2ldLnZhbCxcbiAgICAgICAgICBjb2xvcjogYXJyW2ldLmNvbG9yLFxuICAgICAgICAgIGRlZmF1bHRDb2xvcjogYXJyW2ldLmRlZmF1bHRDb2xvcixcbiAgICAgICAgfTtcbiAgICAgICAgYnVja2V0W2xvY10tLTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNjYW5WaXN1YWwgPSAoaSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoaSA9PT0gLTEpIHRyYW5zZmVyTG9vcCgwKTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFycltpXS5tYXJrMigpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgc2NhblZpc3VhbChpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICBzY2FuVmlzdWFsKGFyci5sZW5ndGggLSAxKTtcbiAgICAgIGNvbnN0IHRyYW5zZmVyTG9vcCA9IChpKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChhcnJbaV0udmFsICE9PSBzb3J0ZWRBcnJheVtpXS52YWwpIHtcbiAgICAgICAgICAgIGFycltpXS52YWwgPSBzb3J0ZWRBcnJheVtpXS52YWw7XG4gICAgICAgICAgICBhcnJbaV0uZGVmYXVsdENvbG9yID0gc29ydGVkQXJyYXlbaV0uZGVmYXVsdENvbG9yO1xuICAgICAgICAgICAgYXJyW2ldLmNvbG9yID0gc29ydGVkQXJyYXlbaV0uY29sb3I7XG5cbiAgICAgICAgICAgIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgIH0gZWxzZSBhcnJbaV0ubWFyazIoKTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaWYgKGkgPT09IGFyci5sZW5ndGgpIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgZWxzZSB0cmFuc2Zlckxvb3AoaSk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2VsZWN0aW9uU29ydCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0aW9uIFNvcnQgUlVOTk5JTkdcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSg1KTtcbiAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAvLyBuZWVkZWQgdG8gc2V0dXAgYSBzdHJvbmcgcmVzb2x2ZSwgbmVlZCB0byBjb21lIGJhY2sgdG8gdGhpcyAsIHJlYXNvbjogZm9yIHBhdXNpbmcgYW5pbWF0aW9uXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcblxuICAgICAgY29uc3Qgc3dhcEFuZFJlbmRlciA9IChqKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVpY2sgc29ydCBzd2FwXCIpO1xuICAgICAgICBpZiAoYXJyW2pdLnZhbCA8PSBwaXZvdCkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgICBhcnJbZW5kXS5jb2xvclJlc2V0KCk7IC8vID0gZmFsc2U7XG4gICAgICAgICAgICBhcnJbc3RhcnRdLmNvbG9yUmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgIT09IHN0YXJ0ICYmIGogIT09IGVuZCkgYXJyW3N0YXJ0XS5tYXJrU3RhdGljKCk7XG5cbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIC8vIGlmIChpIDwgMCkgYXJyWzBdLm1hcmsyKCk7XG4gICAgICAgICAgLy8gZWxzZSBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpbWVkV2hpbGVMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhcnJbZW5kXS5tYXJrU3RhdGljKCk7XG4gICAgICAgICAgaWYgKGogPCBlbmQpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICAgICAgICBpZiAoaiAhPT0gZW5kKSB0aW1lZFdoaWxlTG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgYCR7d2luZG93LmlubmVySGVpZ2h0fWApXG5cbiAgICAgICAgdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgfVxuICAgIGNyZWF0ZUNhbnZhcygpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIGAke3dpbmRvdy5pbm5lcldpZHRofWApXG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhd1NxdWFyZSgpIHtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGxDb2xvcjtcbiAgICAgICAgLy8gICB0aGlzLmN0eC5maWxsUmVjdCguLi50aGlzLmNvb3Jkcyk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXBkYXRlU3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY29vcmRzID0gdGhpcy5jb29yZHMubWFwKChjb29yZCkgPT4gKGNvb3JkICs9IDEgKiB0aGlzLmFuaW1hdGlvbkRpcikpO1xuICAgICAgICAvLyB9XG5cbiAgICAvLyBjbGVhclNxdWFyZSgpIHtcbiAgICAvLyAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXZlcnNlQW5pbWF0aW9uKCkge1xuICAgIC8vICAgdGhpcy5hbmltYXRpb25EaXIgKj0gLTE7XG4gICAgLy8gfVxuICAgIGNsZWFyQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG4gICAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlOyIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QsIHZhbCwgc3BlZWQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZGVmYXVsdENvbG9yID0gY29sb3I7XG4gICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICB0aGlzLm1hcmsxID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kcmF3ID0gKHhTdGFydCkgPT4ge1xuICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodCAtIDIwMDtcblxuICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgeDE6IGN4LFxuICAgICAgICB5MTogY3ksXG4gICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgeTI6IGNoLFxuICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgdGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgsXG4gICAgICAgIHkzOiBjaCxcbiAgICAgIH07XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICB0aGlzLm1hcmsyID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjRkZENzAwXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubWFya1N0YXRpYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29sb3IgPSBcIiNGRjAwRkZcIjtcbiAgICAgIC8vIGlmICh0aGlzLnN0YXRpYykge1xuICAgICAgLy8gICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAvLyAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICB0aGlzLmNvbG9yID0gc3RyO1xuICAgICAgLy8gICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgICAvLyB9XG4gICAgfTtcblxuICAgIHRoaXMuY29sb3JSZXNldCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXQgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9