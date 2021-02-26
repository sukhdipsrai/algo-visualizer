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
Array.from(document.getElementsByClassName("toggle-modal")).forEach(function (ele) {
  ele.addEventListener("click", function () {
    modalHandler();
  });
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

function modalHandler() {
  var modal = document.getElementById("modal-tutorial");
  modal.classList.toggle("hide-modal");
  modal.classList.toggle("show-modal");
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
    });
  }

  function bubbleSort(arr) {
    return new Promise(function (resolve) {
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
      var exp = 1;

      var radixLoop = function radixLoop() {
        setTimeout(function () {
          if (Math.floor(255 / exp) > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJhbGdvU2VsZWN0IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRIYW5kbGVyIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJtb2RhbEhhbmRsZXIiLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwiaWQiLCJteUZ1bmMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnZXRFbGVtZW50QnlJZCIsImFkZCIsIm1vZGFsIiwidG9nZ2xlIiwiYWxnbyIsIm15VHJpIiwiYW5pbWF0aW5nIiwic3BlZWQiLCJzbGljZUZhY3RvciIsInJlc2V0Iiwic3RhcnRBbGdvIiwidG9nZ2xlU29ydEJ1dHRvbnMiLCJzdGFydFFTIiwic3RhcnRCUyIsInN0YXJ0UlMiLCJzdGFydFNTIiwiZGlzYWJsZWQiLCJpbml0aWFsaXplQnV0dG9ucyIsImZvcndhcmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciIsImZvcndhcmRMb2FkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsImJDdHJscyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzbGljZUJ1dHRvbkNvbnRhaW5lciIsImxvYWRCb3JkZXIiLCJzbGljZUJ1dHRvbiIsImN5Y2xlU2xpY2UiLCJyZXNldEJ1dHRvbiIsInN0eWxlIiwicmlnaHQiLCJsb2FkIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInNlbGVjdGlvblNvcnQiLCJhcnIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN3YXBzQm9vbCIsIm91dGVyTG9vcCIsImlubmVybG9vcCIsInN0YXJ0Iiwic2V0VGltZW91dCIsIm1hcmsyIiwidGVtcCIsIm1hcmsxIiwiZXhwIiwicmFkaXhMb29wIiwiY291bnRpbmdTb3J0Iiwic29ydGVkQXJyYXkiLCJidWNrZXQiLCJmaWxsIiwibG9jIiwiY29sb3IiLCJkZWZhdWx0Q29sb3IiLCJzY2FuVmlzdWFsIiwidHJhbnNmZXJMb29wIiwibWluIiwiaW5uZXJMb29wIiwiaiIsImVuZCIsInhTdGFydCIsInF1aWNrU29ydFBhcnRpdGlvbjIiLCJwaSIsInJlamVjdCIsInBpdm90Iiwic3dhcEFuZFJlbmRlciIsImNvbG9yUmVzZXQiLCJtYXJrU3RhdGljIiwidGltZWRXaGlsZUxvb3AiLCJwcm9wcyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNldEF0dHJpYnV0ZSIsImN0eCIsImdldENvbnRleHQiLCJib2R5IiwiY2xlYXJSZWN0IiwiZmlsbENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIiwibWFya2VkIiwic3RhdGljIiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQSxVQUFVLEdBQUc7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBakIsQyxDQUNBOztBQUNBQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NDLGdCQUF0QyxDQUF1RCxPQUF2RCxFQUFnRSxZQUFNO0FBQ3BFQyxjQUFZLENBQUMsWUFBRCxDQUFaO0FBQ0QsQ0FGRDtBQUdBSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNDLGdCQUF2QyxDQUF3RCxPQUF4RCxFQUFpRSxZQUFNO0FBQ3JFQyxjQUFZLENBQUMsYUFBRCxDQUFaO0FBQ0QsQ0FGRDtBQUdBSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NDLGdCQUF0QyxDQUF1RCxPQUF2RCxFQUFnRSxZQUFNO0FBQ3BFQyxjQUFZLENBQUMsWUFBRCxDQUFaO0FBQ0QsQ0FGRDtBQUdBSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLEVBQTBDQyxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFBb0UsWUFBTTtBQUN4RUMsY0FBWSxDQUFDLGdCQUFELENBQVo7QUFDRCxDQUZEO0FBR0FDLEtBQUssQ0FBQ0MsSUFBTixDQUFXTCxRQUFRLENBQUNNLHNCQUFULENBQWdDLGNBQWhDLENBQVgsRUFBNERDLE9BQTVELENBQW9FLFVBQUNDLEdBQUQsRUFBUztBQUMzRUEsS0FBRyxDQUFDTixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO0FBQ2xDTyxnQkFBWTtBQUNiLEdBRkQ7QUFHRCxDQUpEO0FBTUEsSUFBTUMsTUFBTSxHQUFHLElBQUlDLHVEQUFKLEVBQWY7QUFDQUQsTUFBTSxDQUFDRSxZQUFQOztBQUVBLFNBQVNULFlBQVQsQ0FBc0JVLEVBQXRCLEVBQTBCO0FBQ3hCLE1BQUlmLFVBQVUsQ0FBQ0MsS0FBWCxLQUFxQixJQUF6QixFQUErQjtBQUM3QmUsVUFBTSxDQUFDaEIsVUFBRCxDQUFOO0FBQ0Q7O0FBQ0RBLFlBQVUsQ0FBQ0MsS0FBWCxHQUFtQmMsRUFBbkI7QUFFQVQsT0FBSyxDQUFDQyxJQUFOLENBQVdMLFFBQVEsQ0FBQ00sc0JBQVQsQ0FBZ0MsTUFBaEMsQ0FBWCxFQUFvREMsT0FBcEQsQ0FBNEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ25FQSxPQUFHLENBQUNPLFNBQUosQ0FBY0MsTUFBZCxDQUFxQixnQkFBckI7QUFDRCxHQUZEO0FBR0FoQixVQUFRLENBQUNpQixjQUFULENBQXdCSixFQUF4QixFQUE0QkUsU0FBNUIsQ0FBc0NHLEdBQXRDLENBQTBDLGdCQUExQztBQUNEOztBQUVELFNBQVNULFlBQVQsR0FBd0I7QUFDdEIsTUFBSVUsS0FBSyxHQUFHbkIsUUFBUSxDQUFDaUIsY0FBVCxDQUF3QixnQkFBeEIsQ0FBWjtBQUNBRSxPQUFLLENBQUNKLFNBQU4sQ0FBZ0JLLE1BQWhCLENBQXVCLFlBQXZCO0FBQ0FELE9BQUssQ0FBQ0osU0FBTixDQUFnQkssTUFBaEIsQ0FBdUIsWUFBdkI7QUFDRDs7QUFFRCxTQUFTTixNQUFULENBQWdCTyxJQUFoQixFQUFzQjtBQUNwQixNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUNBLE1BQUlDLEtBQUssR0FBRztBQUFFekIsU0FBSyxFQUFFO0FBQVQsR0FBWjtBQUNBLE1BQUkwQixXQUFXLEdBQUcsQ0FBbEIsQ0FKb0IsQ0FJQzs7QUFFckJDLE9BQUs7O0FBRUwsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQkMscUJBQWlCLENBQUMsSUFBRCxDQUFqQjs7QUFDQSxZQUFRUCxJQUFJLENBQUN0QixLQUFiO0FBQ0UsV0FBSyxZQUFMO0FBQ0U4QixlQUFPO0FBQ1A7O0FBQ0YsV0FBSyxhQUFMO0FBQ0VDLGVBQU87QUFDUDs7QUFDRixXQUFLLFlBQUw7QUFDRUMsZUFBTztBQUNQOztBQUNGLFdBQUssZ0JBQUw7QUFDRUMsZUFBTztBQUNQO0FBWko7QUFjRDs7QUFFRCxXQUFTSixpQkFBVCxDQUEyQjdCLEtBQTNCLEVBQWtDO0FBQ2hDSyxTQUFLLENBQUNDLElBQU4sQ0FBV0wsUUFBUSxDQUFDTSxzQkFBVCxDQUFnQyxNQUFoQyxDQUFYLEVBQW9EQyxPQUFwRCxDQUE0RCxVQUFDQyxHQUFELEVBQVM7QUFDbkVBLFNBQUcsQ0FBQ08sU0FBSixDQUFjSyxNQUFkLENBQXFCLGFBQXJCO0FBQ0FaLFNBQUcsQ0FBQ08sU0FBSixDQUFjSyxNQUFkLENBQXFCLFdBQXJCO0FBQ0FaLFNBQUcsQ0FBQ3lCLFFBQUosR0FBZWxDLEtBQWY7QUFDRCxLQUpELEVBRGdDLENBT2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxXQUFTbUMsaUJBQVQsR0FBNkI7QUFDM0IsUUFBSWxDLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0IsZUFBeEIsTUFBNkMsSUFBakQsRUFBdUQ7QUFDckQsVUFBSWtCLGFBQWEsR0FBR25DLFFBQVEsQ0FBQ29DLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFDQSxVQUFJQyxzQkFBc0IsR0FBR3JDLFFBQVEsQ0FBQ29DLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7QUFDQSxVQUFJRSxXQUFXLEdBQUd0QyxRQUFRLENBQUNvQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FDLDRCQUFzQixDQUFDeEIsRUFBdkIsR0FBNEIsd0JBQTVCO0FBQ0F5QixpQkFBVyxDQUFDekIsRUFBWixHQUFpQixhQUFqQjtBQUNBc0IsbUJBQWEsQ0FBQ3RCLEVBQWQsR0FBbUIsZUFBbkI7QUFDQXNCLG1CQUFhLENBQUNJLFNBQWQsR0FBMEIsY0FBMUI7QUFDQUYsNEJBQXNCLENBQUNHLE1BQXZCLENBQThCTCxhQUE5QjtBQUNBRSw0QkFBc0IsQ0FBQ0csTUFBdkIsQ0FBOEJGLFdBQTlCO0FBQ0F0QyxjQUFRLENBQ0xpQixjQURILENBQ2tCLGlCQURsQixFQUVHd0IsV0FGSCxDQUVlSixzQkFGZjtBQUdBckMsY0FBUSxDQUNMaUIsY0FESCxDQUNrQixlQURsQixFQUVHZixnQkFGSCxDQUVvQixPQUZwQixFQUU2QndDLFVBRjdCO0FBR0QsS0FoQkQsTUFnQk8xQyxRQUFRLENBQUNpQixjQUFULENBQXdCLFlBQXhCLEVBQXNDMEIsTUFBdEMsR0FBK0MsS0FBL0M7O0FBRVAsUUFBSTNDLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0IsWUFBeEIsTUFBMEMsSUFBOUMsRUFBb0Q7QUFDbEQsVUFBSTJCLFVBQVUsR0FBRzVDLFFBQVEsQ0FBQ29DLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQVEsZ0JBQVUsQ0FBQy9CLEVBQVgsR0FBZ0IsWUFBaEI7QUFDQStCLGdCQUFVLENBQUNMLFNBQVgsR0FBdUIsUUFBdkI7QUFDQUssZ0JBQVUsQ0FBQzFDLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDeUIsU0FBckM7QUFDQSxVQUFNa0IsTUFBTSxHQUFHN0MsUUFBUSxDQUFDaUIsY0FBVCxDQUF3QixpQkFBeEIsQ0FBZjtBQUNBNEIsWUFBTSxDQUFDQyxZQUFQLENBQW9CRixVQUFwQixFQUFnQ0MsTUFBTSxDQUFDRSxVQUF2QztBQUNELEtBUEQsTUFPTy9DLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0Isd0JBQXhCLEVBQWtEMEIsTUFBbEQsR0FBMkQsS0FBM0Q7O0FBRVAsUUFBSTNDLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0IsYUFBeEIsTUFBMkMsSUFBL0MsRUFBcUQ7QUFDbkQsVUFBSStCLG9CQUFvQixHQUFHaEQsUUFBUSxDQUFDb0MsYUFBVCxDQUF1QixLQUF2QixDQUEzQjtBQUNBWSwwQkFBb0IsQ0FBQ25DLEVBQXJCLEdBQTBCLHNCQUExQjtBQUNBLFVBQUlvQyxVQUFVLEdBQUdqRCxRQUFRLENBQUNvQyxhQUFULENBQXVCLEtBQXZCLENBQWpCO0FBQ0FhLGdCQUFVLENBQUNwQyxFQUFYLEdBQWdCLFdBQWhCO0FBQ0EsVUFBSXFDLFdBQVcsR0FBR2xELFFBQVEsQ0FBQ29DLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7QUFDQWMsaUJBQVcsQ0FBQ3JDLEVBQVosR0FBaUIsYUFBakI7QUFDQXFDLGlCQUFXLENBQUNYLFNBQVosR0FBd0IsR0FBeEI7QUFDQVcsaUJBQVcsQ0FBQ2hELGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDaUQsVUFBdEM7O0FBQ0EsVUFBTU4sT0FBTSxHQUFHN0MsUUFBUSxDQUFDaUIsY0FBVCxDQUF3QixpQkFBeEIsQ0FBZjs7QUFDQStCLDBCQUFvQixDQUFDUixNQUFyQixDQUE0QlUsV0FBNUI7QUFDQUYsMEJBQW9CLENBQUNSLE1BQXJCLENBQTRCUyxVQUE1Qjs7QUFDQUosYUFBTSxDQUFDQyxZQUFQLENBQ0VFLG9CQURGLEVBRUVoRCxRQUFRLENBQUNpQixjQUFULENBQXdCLGFBQXhCLENBRkY7QUFJRCxLQWhCRCxNQWdCT2pCLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEMEIsTUFBaEQsR0FBeUQsS0FBekQ7O0FBRVAsUUFBSTNDLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0IsYUFBeEIsTUFBMkMsSUFBL0MsRUFBcUQ7QUFDbkQsVUFBSW1DLFdBQVcsR0FBR3BELFFBQVEsQ0FBQ29DLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7QUFDQWdCLGlCQUFXLENBQUN2QyxFQUFaLEdBQWlCLGFBQWpCO0FBQ0F1QyxpQkFBVyxDQUFDYixTQUFaLEdBQXdCLFFBQXhCO0FBQ0FhLGlCQUFXLENBQUNsRCxnQkFBWixDQUE2QixPQUE3QixFQUFzQ3dCLEtBQXRDOztBQUNBLFVBQU1tQixRQUFNLEdBQUc3QyxRQUFRLENBQUNpQixjQUFULENBQXdCLGlCQUF4QixDQUFmOztBQUNBNEIsY0FBTSxDQUFDSixXQUFQLENBQW1CVyxXQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU1YsVUFBVCxHQUFzQjtBQUNwQixRQUFJbEIsS0FBSyxDQUFDekIsS0FBTixLQUFnQixDQUFwQixFQUF1QjtBQUNyQnlCLFdBQUssQ0FBQ3pCLEtBQU4sR0FBYyxFQUFkO0FBQ0FDLGNBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNvQyxLQUF2QyxDQUE2Q0MsS0FBN0MsR0FBcUQsS0FBckQ7QUFDRCxLQUhELE1BR087QUFDTDlCLFdBQUssQ0FBQ3pCLEtBQU4sR0FBYyxDQUFkO0FBQ0FDLGNBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNvQyxLQUF2QyxDQUE2Q0MsS0FBN0MsR0FBcUQsSUFBckQ7QUFDRDtBQUNGOztBQUVELFdBQVNILFVBQVQsR0FBc0I7QUFDcEIsUUFBSUksSUFBSSxHQUFHdkQsUUFBUSxDQUFDaUIsY0FBVCxDQUF3QixXQUF4QixDQUFYOztBQUNBLFlBQVFRLFdBQVI7QUFDRSxXQUFLLENBQUw7QUFDRUEsbUJBQVcsR0FBRyxFQUFkO0FBQ0E4QixZQUFJLENBQUNGLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixLQUFuQjtBQUVBNUIsYUFBSztBQUNMOztBQUNGLFdBQUssRUFBTDtBQUNFRCxtQkFBVyxHQUFHLEVBQWQ7QUFDQThCLFlBQUksQ0FBQ0YsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEtBQW5CO0FBRUE1QixhQUFLO0FBQ0w7O0FBQ0YsV0FBSyxFQUFMO0FBQ0VELG1CQUFXLEdBQUcsRUFBZDtBQUNBOEIsWUFBSSxDQUFDRixLQUFMLENBQVdDLEtBQVgsR0FBbUIsS0FBbkI7QUFFQTVCLGFBQUs7QUFDTDs7QUFDRixXQUFLLEVBQUw7QUFDRUQsbUJBQVcsR0FBRyxFQUFkO0FBQ0E4QixZQUFJLENBQUNGLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixLQUFuQjtBQUNBNUIsYUFBSztBQUNMOztBQUNGLFdBQUssRUFBTDtBQUNFRCxtQkFBVyxHQUFHLEVBQWQ7QUFDQThCLFlBQUksQ0FBQ0YsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLElBQW5CO0FBQ0E1QixhQUFLO0FBQ0w7O0FBQ0YsV0FBSyxFQUFMO0FBQ0VELG1CQUFXLEdBQUcsQ0FBZDtBQUNBOEIsWUFBSSxDQUFDRixLQUFMLENBQVdDLEtBQVgsR0FBbUIsS0FBbkI7QUFDQTVCLGFBQUs7QUFDTDtBQWpDSjtBQW1DRDs7QUFFRCxXQUFTOEIsYUFBVCxHQUF5QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBRyxLQUFLLEtBQUtoQyxXQUFWLENBQVo7O0FBQ0EsU0FBSyxJQUFJaUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLakMsV0FBekIsRUFBc0NpQyxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDO0FBQ0EsVUFBSUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQVY7QUFFQSxVQUFNQyxNQUFNLEdBQUcsSUFBSUMseURBQUosQ0FDYnRELE1BRGEsRUFFYnVELGNBQWMsQ0FBQ04sR0FBRCxFQUFNLEdBQU4sQ0FGRCxFQUdiRixLQUhhLEVBSWJFLEdBSmEsRUFLYm5DLEtBTGEsQ0FBZjtBQVFBRixXQUFLLENBQUM0QyxJQUFOLENBQVdILE1BQVg7QUFDRDtBQUNGOztBQUVELFdBQVNJLFNBQVQsR0FBcUI7QUFDbkJ6RCxVQUFNLENBQUMwRCxXQUFQO0FBQ0E3QyxhQUFTLEdBQUcsSUFBWjtBQUNBRCxTQUFLLEdBQUcsRUFBUjtBQUNEOztBQUVELFdBQVNJLEtBQVQsR0FBaUI7QUFDZlEscUJBQWlCO0FBQ2pCaUMsYUFBUztBQUNUWCxpQkFBYTtBQUNkOztBQUVELE1BQU1hLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQTVELFVBQU0sQ0FBQzBELFdBQVA7O0FBQ0EsU0FBSyxJQUFJVixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHcEMsS0FBSyxDQUFDaUQsTUFBMUIsRUFBa0NiLENBQUMsRUFBbkMsRUFBdUM7QUFDckNwQyxXQUFLLENBQUNvQyxDQUFELENBQUwsQ0FBU2MsSUFBVCxDQUFjRixHQUFkO0FBQ0FBLFNBQUcsSUFBSWhELEtBQUssQ0FBQ29DLENBQUQsQ0FBTCxDQUFTRCxLQUFULEdBQWlCL0MsTUFBTSxDQUFDQSxNQUFQLENBQWMrRCxLQUF0QztBQUNEOztBQUNELFFBQUlsRCxTQUFKLEVBQWU7QUFDYm1ELFlBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJOLFNBQTdCO0FBQ0Q7QUFDRixHQVZEOztBQVlBSyxRQUFNLENBQUNDLHFCQUFQLENBQTZCTixTQUE3QixFQS9Mb0IsQ0FnTXBCO0FBQ0E7O0FBQ0EsV0FBU0osY0FBVCxDQUF3QlcsVUFBeEIsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQzFDLFFBQUlDLFFBQVEsR0FBR2xCLElBQUksQ0FBQ21CLElBQUwsQ0FBV0gsVUFBVSxHQUFHQyxNQUFkLEdBQXdCLEdBQWxDLENBQWY7QUFFQSxRQUFJRyxNQUFNLEdBQUcsSUFBYixDQUgwQyxDQUd2Qjs7QUFDbkIsUUFBSUMsTUFBTSxHQUFHSCxRQUFRLENBQUNJLFFBQVQsQ0FBa0IsRUFBbEIsQ0FBYjtBQUNBLFFBQUlKLFFBQVEsR0FBRyxFQUFmLEVBQW1CRyxNQUFNLEdBQUcsTUFBTUEsTUFBZjtBQUVuQixzQkFBV0QsTUFBTSxHQUFHQyxNQUFwQjtBQUNEOztBQUVELFdBQVNFLFdBQVQsR0FBdUI7QUFDckJuRixZQUFRLENBQUNpQixjQUFULENBQXdCLFlBQXhCLEVBQXNDMEIsTUFBdEMsR0FBK0MsSUFBL0M7QUFDQTNDLFlBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0Isd0JBQXhCLEVBQWtEMEIsTUFBbEQsR0FBMkQsSUFBM0Q7QUFDQTNDLFlBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEMEIsTUFBaEQsR0FBeUQsSUFBekQ7QUFDQSxRQUFJUyxXQUFXLEdBQUdwRCxRQUFRLENBQUNpQixjQUFULENBQXdCLGFBQXhCLENBQWxCO0FBQ0FtQyxlQUFXLENBQUNULE1BQVosR0FBcUIsSUFBckI7QUFDQVMsZUFBVyxDQUFDckMsU0FBWixDQUFzQkcsR0FBdEIsQ0FBMEIsYUFBMUI7QUFDRDs7QUFFRCxXQUFTa0UsYUFBVCxHQUF5QjtBQUN2QixRQUFJaEMsV0FBVyxHQUFHcEQsUUFBUSxDQUFDaUIsY0FBVCxDQUF3QixhQUF4QixDQUFsQjtBQUNBbUMsZUFBVyxDQUFDVCxNQUFaLEdBQXFCLEtBQXJCO0FBQ0FTLGVBQVcsQ0FBQ3JDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGFBQTdCO0FBQ0FZLHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDRDs7QUFFRCxXQUFTQyxPQUFULEdBQW1CO0FBQ2pCc0QsZUFBVztBQUNYRSxhQUFTLENBQUMvRCxLQUFELEVBQVEsQ0FBUixFQUFXQSxLQUFLLENBQUNpRCxNQUFOLEdBQWUsQ0FBMUIsQ0FBVCxDQUFzQ2UsSUFBdEMsQ0FBMkMsWUFBTTtBQUMvQ0YsbUJBQWE7QUFDZCxLQUZEO0FBR0Q7O0FBRUQsV0FBU3RELE9BQVQsR0FBbUI7QUFDakJxRCxlQUFXO0FBQ1hJLGNBQVUsQ0FBQ2pFLEtBQUQsQ0FBVixDQUFrQmdFLElBQWxCLENBQXVCLFlBQU07QUFDM0JGLG1CQUFhO0FBQ2QsS0FGRDtBQUdEOztBQUVELFdBQVNyRCxPQUFULEdBQW1CO0FBQ2pCb0QsZUFBVztBQUNYSyxhQUFTLENBQUNsRSxLQUFELENBQVQsQ0FBaUJnRSxJQUFqQixDQUFzQixZQUFNO0FBQzFCRixtQkFBYTtBQUNkLEtBRkQ7QUFHRDs7QUFDRCxXQUFTcEQsT0FBVCxHQUFtQjtBQUNqQm1ELGVBQVc7QUFDWE0saUJBQWEsQ0FBQ25FLEtBQUQsQ0FBYixDQUFxQmdFLElBQXJCLENBQTBCLFlBQU07QUFDOUJGLG1CQUFhO0FBQ2QsS0FGRDtBQUdEOztBQUVELFdBQVNHLFVBQVQsQ0FBb0JHLEdBQXBCLEVBQXlCO0FBQ3ZCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixVQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFDQSxVQUFJbkMsQ0FBQyxHQUFHLENBQUMsQ0FBVDs7QUFDQSxVQUFNb0MsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFJRCxTQUFKLEVBQWU7QUFDYkEsbUJBQVMsR0FBRyxLQUFaO0FBQ0FuQyxXQUFDO0FBQ0RxQyxtQkFBUyxDQUFDLENBQUQsQ0FBVDtBQUNELFNBSkQsTUFJT0gsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNSLE9BTkQ7O0FBUUEsVUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCQyxrQkFBVSxDQUFDLFlBQU07QUFDZixjQUFJRCxLQUFLLEdBQUdOLEdBQUcsQ0FBQ25CLE1BQUosR0FBYSxDQUFiLEdBQWlCYixDQUE3QixFQUFnQztBQUM5QjtBQUNBZ0MsZUFBRyxDQUFDTSxLQUFELENBQUgsQ0FBV0UsS0FBWDs7QUFDQSxnQkFBSVIsR0FBRyxDQUFDTSxLQUFELENBQUgsQ0FBV3JDLEdBQVgsR0FBaUIrQixHQUFHLENBQUNNLEtBQUssR0FBRyxDQUFULENBQUgsQ0FBZXJDLEdBQXBDLEVBQXlDO0FBQ3ZDLGtCQUFNd0MsSUFBSSxHQUFHVCxHQUFHLENBQUNNLEtBQUQsQ0FBaEI7QUFDQU4saUJBQUcsQ0FBQ00sS0FBRCxDQUFILEdBQWFOLEdBQUcsQ0FBQ00sS0FBSyxHQUFHLENBQVQsQ0FBaEI7QUFDQU4saUJBQUcsQ0FBQ00sS0FBSyxHQUFHLENBQVQsQ0FBSCxHQUFpQkcsSUFBakI7QUFDQU4sdUJBQVMsR0FBRyxJQUFaO0FBQ0FILGlCQUFHLENBQUNNLEtBQUQsQ0FBSCxDQUFXSSxLQUFYO0FBQ0Q7O0FBQ0RKLGlCQUFLLElBQUksQ0FBVDtBQUNBRCxxQkFBUyxDQUFDQyxLQUFELENBQVQ7QUFDRCxXQVpELE1BWU9GLFNBQVM7QUFDakIsU0FkUyxFQWNQdEUsS0FBSyxDQUFDekIsS0FkQyxDQUFWO0FBZUQsT0FoQkQ7O0FBaUJBK0YsZUFBUztBQUNWLEtBN0JNLENBQVA7QUE4QkQ7O0FBQ0QsV0FBU04sU0FBVCxDQUFtQkUsR0FBbkIsRUFBd0I7QUFDdEIsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLFVBQUlTLEdBQUcsR0FBRyxDQUFWOztBQUNBLFVBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJMLGtCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUlyQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxNQUFNd0MsR0FBakIsSUFBd0IsQ0FBNUIsRUFBK0I7QUFDN0JFLHdCQUFZLENBQUNiLEdBQUQsRUFBTVcsR0FBTixDQUFaLENBQXVCZixJQUF2QixDQUE0QixZQUFNO0FBQ2hDZSxpQkFBRyxJQUFJLEVBQVA7QUFDQUMsdUJBQVM7QUFDVixhQUhEO0FBSUQsV0FMRCxNQUtPVixPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ1IsU0FQUyxFQU9QcEUsS0FBSyxDQUFDekIsS0FQQyxDQUFWO0FBUUQsT0FURDs7QUFVQXVHLGVBQVM7QUFDVixLQWJNLENBQVA7QUFjRCxHQXRTbUIsQ0F1U3BCOzs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDYixHQUFELEVBQU1XLEdBQU4sRUFBYztBQUNqQyxXQUFPLElBQUlWLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUIsVUFBSVksV0FBVyxHQUFHLElBQUlwRyxLQUFKLENBQVVzRixHQUFHLENBQUNuQixNQUFkLENBQWxCO0FBQ0EsVUFBSWtDLE1BQU0sR0FBRyxJQUFJckcsS0FBSixDQUFVLEVBQVYsRUFBY3NHLElBQWQsQ0FBbUIsQ0FBbkIsQ0FBYjs7QUFDQSxXQUFLLElBQUloRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0MsR0FBRyxDQUFDbkIsTUFBeEIsRUFBZ0NiLENBQUMsRUFBakM7QUFDRStDLGNBQU0sQ0FBQzdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXNkIsR0FBRyxDQUFDaEMsQ0FBRCxDQUFILENBQU9DLEdBQVAsR0FBYTBDLEdBQXhCLElBQStCLEVBQWhDLENBQU47QUFERjs7QUFFQSxXQUFLLElBQUkzQyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHLEVBQXBCLEVBQXdCQSxFQUFDLEVBQXpCO0FBQTZCK0MsY0FBTSxDQUFDL0MsRUFBRCxDQUFOLElBQWErQyxNQUFNLENBQUMvQyxFQUFDLEdBQUcsQ0FBTCxDQUFuQjtBQUE3Qjs7QUFFQSxXQUFLLElBQUlBLEdBQUMsR0FBR2dDLEdBQUcsQ0FBQ25CLE1BQUosR0FBYSxDQUExQixFQUE2QmIsR0FBQyxJQUFJLENBQWxDLEVBQXFDQSxHQUFDLEVBQXRDLEVBQTBDO0FBQ3hDLFlBQU1pRCxHQUFHLEdBQUcvQyxJQUFJLENBQUNDLEtBQUwsQ0FBVzZCLEdBQUcsQ0FBQ2hDLEdBQUQsQ0FBSCxDQUFPQyxHQUFQLEdBQWEwQyxHQUF4QixJQUErQixFQUEzQztBQUNBRyxtQkFBVyxDQUFDQyxNQUFNLENBQUNFLEdBQUQsQ0FBTixHQUFjLENBQWYsQ0FBWCxHQUErQjtBQUM3QmhELGFBQUcsRUFBRStCLEdBQUcsQ0FBQ2hDLEdBQUQsQ0FBSCxDQUFPQyxHQURpQjtBQUU3QmlELGVBQUssRUFBRWxCLEdBQUcsQ0FBQ2hDLEdBQUQsQ0FBSCxDQUFPa0QsS0FGZTtBQUc3QkMsc0JBQVksRUFBRW5CLEdBQUcsQ0FBQ2hDLEdBQUQsQ0FBSCxDQUFPbUQ7QUFIUSxTQUEvQjtBQUtBSixjQUFNLENBQUNFLEdBQUQsQ0FBTjtBQUNEOztBQUNELFVBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNwRCxDQUFELEVBQU87QUFDeEJ1QyxrQkFBVSxDQUFDLFlBQU07QUFDZixjQUFJdkMsQ0FBQyxLQUFLLENBQUMsQ0FBWCxFQUFjcUQsWUFBWSxDQUFDLENBQUQsQ0FBWixDQUFkLEtBQ0s7QUFDSHJCLGVBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPd0MsS0FBUDtBQUNBeEMsYUFBQztBQUNEb0Qsc0JBQVUsQ0FBQ3BELENBQUQsQ0FBVjtBQUNEO0FBQ0YsU0FQUyxFQU9QbEMsS0FBSyxDQUFDekIsS0FQQyxDQUFWO0FBUUQsT0FURDs7QUFVQStHLGdCQUFVLENBQUNwQixHQUFHLENBQUNuQixNQUFKLEdBQWEsQ0FBZCxDQUFWOztBQUNBLFVBQU13QyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDckQsQ0FBRCxFQUFPO0FBQzFCdUMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSVAsR0FBRyxDQUFDaEMsQ0FBRCxDQUFILENBQU9DLEdBQVAsS0FBZTZDLFdBQVcsQ0FBQzlDLENBQUQsQ0FBWCxDQUFlQyxHQUFsQyxFQUF1QztBQUNyQytCLGVBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPQyxHQUFQLEdBQWE2QyxXQUFXLENBQUM5QyxDQUFELENBQVgsQ0FBZUMsR0FBNUI7QUFDQStCLGVBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPbUQsWUFBUCxHQUFzQkwsV0FBVyxDQUFDOUMsQ0FBRCxDQUFYLENBQWVtRCxZQUFyQztBQUNBbkIsZUFBRyxDQUFDaEMsQ0FBRCxDQUFILENBQU9rRCxLQUFQLEdBQWVKLFdBQVcsQ0FBQzlDLENBQUQsQ0FBWCxDQUFla0QsS0FBOUI7QUFFQWxCLGVBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPMEMsS0FBUDtBQUNELFdBTkQsTUFNT1YsR0FBRyxDQUFDaEMsQ0FBRCxDQUFILENBQU93QyxLQUFQOztBQUNQeEMsV0FBQztBQUNELGNBQUlBLENBQUMsS0FBS2dDLEdBQUcsQ0FBQ25CLE1BQWQsRUFBc0JxQixPQUFPLENBQUMsSUFBRCxDQUFQLENBQXRCLEtBQ0ttQixZQUFZLENBQUNyRCxDQUFELENBQVo7QUFDTixTQVhTLEVBV1BsQyxLQUFLLENBQUN6QixLQVhDLENBQVY7QUFZRCxPQWJEO0FBY0QsS0F6Q00sQ0FBUDtBQTBDRCxHQTNDRDs7QUE2Q0EsV0FBUzBGLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQzFCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixVQUFJbEMsQ0FBQyxHQUFHLENBQVI7QUFDQSxVQUFJc0QsR0FBRyxHQUFHO0FBQUVyRCxXQUFHLEVBQUUsR0FBUDtBQUFZZ0QsV0FBRyxFQUFFO0FBQWpCLE9BQVY7O0FBQ0EsVUFBTWIsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixZQUFJcEMsQ0FBQyxHQUFHZ0MsR0FBRyxDQUFDbkIsTUFBWixFQUFvQjtBQUNsQnlDLGFBQUcsQ0FBQ3JELEdBQUosR0FBVSxHQUFWO0FBQ0FzRCxtQkFBUyxDQUFDdkQsQ0FBRCxDQUFUO0FBQ0QsU0FIRCxNQUdPa0MsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNSLE9BTEQsQ0FIOEIsQ0FVOUI7OztBQUVBLFVBQU1xQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxDQUFELEVBQU87QUFDdkJqQixrQkFBVSxDQUFDLFlBQU07QUFDZixjQUFJaUIsQ0FBQyxHQUFHeEIsR0FBRyxDQUFDbkIsTUFBWixFQUFvQjtBQUNsQixnQkFBSW1CLEdBQUcsQ0FBQ3dCLENBQUQsQ0FBSCxDQUFPdkQsR0FBUCxHQUFhcUQsR0FBRyxDQUFDckQsR0FBckIsRUFBMEJxRCxHQUFHLEdBQUc7QUFBRXJELGlCQUFHLEVBQUUrQixHQUFHLENBQUN3QixDQUFELENBQUgsQ0FBT3ZELEdBQWQ7QUFBbUJnRCxpQkFBRyxFQUFFTztBQUF4QixhQUFOO0FBQzFCeEIsZUFBRyxDQUFDd0IsQ0FBRCxDQUFILENBQU9oQixLQUFQO0FBQ0FlLHFCQUFTLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQVQ7QUFDRCxXQUpELE1BSU87QUFDTCxnQkFBTWYsSUFBSSxHQUFHVCxHQUFHLENBQUNoQyxDQUFELENBQWhCO0FBQ0FnQyxlQUFHLENBQUNoQyxDQUFELENBQUgsR0FBU2dDLEdBQUcsQ0FBQ3NCLEdBQUcsQ0FBQ0wsR0FBTCxDQUFaO0FBQ0FqQixlQUFHLENBQUNzQixHQUFHLENBQUNMLEdBQUwsQ0FBSCxHQUFlUixJQUFmO0FBQ0FULGVBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPMEMsS0FBUDtBQUNBVixlQUFHLENBQUNzQixHQUFHLENBQUNMLEdBQUwsQ0FBSCxDQUFhUCxLQUFiO0FBQ0ExQyxhQUFDO0FBQ0RvQyxxQkFBUztBQUNWO0FBQ0YsU0FkUyxFQWNQdEUsS0FBSyxDQUFDekIsS0FkQyxDQUFWO0FBZUQsT0FoQkQ7O0FBa0JBK0YsZUFBUyxDQUFDLENBQUQsQ0FBVDtBQUNELEtBL0JNLENBQVA7QUFnQ0Q7O0FBRUQsV0FBU1QsU0FBVCxDQUFtQkssR0FBbkIsRUFBd0JNLEtBQXhCLEVBQStCbUIsR0FBL0IsRUFBZ0Q7QUFBQSxRQUFaQyxNQUFZLHVFQUFILENBQUc7QUFDOUM7QUFDQSxXQUFPLElBQUl6QixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLFVBQUlJLEtBQUssR0FBR21CLEdBQVosRUFBaUI7QUFDZkUsMkJBQW1CLENBQUMzQixHQUFELEVBQU1NLEtBQU4sRUFBYW1CLEdBQWIsQ0FBbkIsQ0FBcUM3QixJQUFyQyxDQUEwQyxVQUFDZ0MsRUFBRCxFQUFRO0FBQ2hEMUIsaUJBQU8sQ0FDTFAsU0FBUyxDQUFDSyxHQUFELEVBQU1NLEtBQU4sRUFBYXNCLEVBQUUsR0FBRyxDQUFsQixDQUFULENBQThCaEMsSUFBOUIsQ0FBbUM7QUFBQSxtQkFDakNELFNBQVMsQ0FBQ0ssR0FBRCxFQUFNNEIsRUFBRSxHQUFHLENBQVgsRUFBY0gsR0FBZCxDQUR3QjtBQUFBLFdBQW5DLENBREssQ0FBUDtBQUtELFNBTkQ7QUFPRCxPQVJELE1BUU92QixPQUFPO0FBQ2YsS0FWTSxDQUFQO0FBV0Q7O0FBRUQsV0FBU3lCLG1CQUFULENBQTZCM0IsR0FBN0IsRUFBa0NNLEtBQWxDLEVBQXlDbUIsR0FBekMsRUFBOEM7QUFDNUMsV0FBTyxJQUFJeEIsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUIyQixNQUFuQixFQUEyQjtBQUM1QyxVQUFJQyxLQUFLLEdBQUc5QixHQUFHLENBQUN5QixHQUFELENBQUgsQ0FBU3hELEdBQXJCO0FBQ0EsVUFBSUQsQ0FBQyxHQUFHc0MsS0FBSyxHQUFHLENBQWhCLENBRjRDLENBRXpCOztBQUNuQixVQUFJa0IsQ0FBQyxHQUFHbEIsS0FBSyxHQUFHLENBQWhCOztBQUVBLFVBQU15QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNQLENBQUQsRUFBTztBQUMzQixZQUFJeEIsR0FBRyxDQUFDd0IsQ0FBRCxDQUFILENBQU92RCxHQUFQLElBQWM2RCxLQUFsQixFQUF5QjtBQUN2QjlELFdBQUM7O0FBQ0QsY0FBSXdELENBQUMsS0FBS0MsR0FBVixFQUFlO0FBQ2J6QixlQUFHLENBQUN5QixHQUFELENBQUgsQ0FBU08sVUFBVCxHQURhLENBQ1U7O0FBQ3ZCaEMsZUFBRyxDQUFDTSxLQUFELENBQUgsQ0FBVzBCLFVBQVg7QUFDRDs7QUFDRCxjQUFJaEUsQ0FBQyxLQUFLc0MsS0FBTixJQUFla0IsQ0FBQyxLQUFLQyxHQUF6QixFQUE4QnpCLEdBQUcsQ0FBQ00sS0FBRCxDQUFILENBQVcyQixVQUFYO0FBRTlCLGNBQU14QixJQUFJLEdBQUdULEdBQUcsQ0FBQ2hDLENBQUQsQ0FBaEI7QUFDQWdDLGFBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxHQUFTZ0MsR0FBRyxDQUFDd0IsQ0FBRCxDQUFaO0FBQ0F4QixhQUFHLENBQUN3QixDQUFELENBQUgsR0FBU2YsSUFBVDtBQUNBVCxhQUFHLENBQUNoQyxDQUFELENBQUgsQ0FBTzBDLEtBQVA7QUFDQVYsYUFBRyxDQUFDd0IsQ0FBRCxDQUFILENBQU9oQixLQUFQOztBQUNBLGNBQUlnQixDQUFDLEtBQUtDLEdBQVYsRUFBZTtBQUNidkIsbUJBQU8sQ0FBQ2xDLENBQUQsQ0FBUDtBQUNEO0FBQ0YsU0FoQkQsTUFnQk87QUFDTGdDLGFBQUcsQ0FBQ3dCLENBQUQsQ0FBSCxDQUFPaEIsS0FBUCxHQURLLENBRUw7QUFDQTtBQUNEO0FBQ0YsT0F0QkQ7O0FBdUJBLFVBQU0wQixjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IzQixrQkFBVSxDQUFDLFlBQU07QUFDZlAsYUFBRyxDQUFDeUIsR0FBRCxDQUFILENBQVNRLFVBQVQ7O0FBQ0EsY0FBSVQsQ0FBQyxHQUFHQyxHQUFSLEVBQWE7QUFDWEQsYUFBQztBQUNETyx5QkFBYSxDQUFDUCxDQUFELENBQWI7QUFDQSxnQkFBSUEsQ0FBQyxLQUFLQyxHQUFWLEVBQWVTLGNBQWM7QUFDOUI7QUFDRixTQVBTLEVBT1BwRyxLQUFLLENBQUN6QixLQVBDLENBQVY7QUFRRCxPQVREOztBQVVBNkgsb0JBQWM7QUFDZixLQXZDTSxDQUFQO0FBd0NEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQy9kS2pILGE7QUFDRix5QkFBWWtILEtBQVosRUFBbUI7QUFBQTs7QUFDZixTQUFLbkgsTUFBTCxHQUFjVixRQUFRLENBQUNvQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLMUIsTUFBTCxDQUFZK0QsS0FBWixHQUFvQkMsTUFBTSxDQUFDb0QsVUFBM0I7QUFDQSxTQUFLcEgsTUFBTCxDQUFZcUgsTUFBWixHQUFxQnJELE1BQU0sQ0FBQ3NELFdBQTVCO0FBQ0EsU0FBS3RILE1BQUwsQ0FBWXVILFlBQVosQ0FBeUIsUUFBekIsWUFBc0N2RCxNQUFNLENBQUNzRCxXQUE3QztBQUVBLFNBQUt0SCxNQUFMLENBQVl1SCxZQUFaLENBQXlCLElBQXpCLEVBQStCLFFBQS9CO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUt4SCxNQUFMLENBQVl5SCxVQUFaLENBQXVCLElBQXZCLENBQVg7QUFFSDs7OztXQUNELHdCQUFlO0FBQ1BuSSxjQUFRLENBQUNvSSxJQUFULENBQWM1RixNQUFkLENBQXFCLEtBQUs5QixNQUExQixFQURPLENBRVA7QUFDQTtBQUNILEssQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVKO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztXQUNBLHVCQUFjO0FBQ1YsV0FBS3dILEdBQUwsQ0FBU0csU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLM0gsTUFBTCxDQUFZK0QsS0FBckMsRUFBNEMsS0FBSy9ELE1BQUwsQ0FBWXFILE1BQXhEO0FBQ0EsV0FBS3JILE1BQUwsQ0FBWStELEtBQVosR0FBb0JDLE1BQU0sQ0FBQ29ELFVBQTNCO0FBQ0EsV0FBS3BILE1BQUwsQ0FBWXFILE1BQVosR0FBcUJyRCxNQUFNLENBQUNzRCxXQUE1QjtBQUNIOzs7V0FDRCxrQkFBU3BCLEtBQVQsRUFBZ0I7QUFDWixXQUFLMEIsU0FBTCxHQUFpQjFCLEtBQWpCO0FBQ0E1RyxjQUFRLENBQUNvSSxJQUFULENBQWMvRSxLQUFkLENBQW9Ca0YsZUFBcEIsR0FBc0MzQixLQUF0QztBQUNBNUcsY0FBUSxDQUFDb0ksSUFBVCxDQUFjL0UsS0FBZCxDQUFvQm1GLE1BQXBCO0FBQ0g7Ozs7OztBQUdVN0gsNEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0lDM0NNcUQsUSxHQUNKLGtCQUFZdEQsTUFBWixFQUFvQmtHLEtBQXBCLEVBQTJCbkQsS0FBM0IsRUFBa0NFLEdBQWxDLEVBQXVDbkMsS0FBdkMsRUFBOEM7QUFBQTs7QUFBQTs7QUFDNUMsT0FBS2QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsT0FBS3dILEdBQUwsR0FBVyxLQUFLeEgsTUFBTCxDQUFZd0gsR0FBdkI7QUFDQSxPQUFLekUsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS21ELEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLFlBQUwsR0FBb0JELEtBQXBCO0FBQ0EsT0FBSzZCLE1BQUwsR0FBYyxLQUFkO0FBQ0EsT0FBSzlFLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtuQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLa0gsTUFBTCxHQUFjLEtBQWQ7O0FBQ0EsT0FBS3RDLEtBQUwsR0FBYSxZQUFNO0FBQ2pCLFFBQUksQ0FBQyxLQUFJLENBQUNzQyxNQUFWLEVBQWtCO0FBQ2hCLFdBQUksQ0FBQzlCLEtBQUwsR0FBYSxLQUFiO0FBQ0FYLGdCQUFVLENBQUMsWUFBTTtBQUNmLGFBQUksQ0FBQ1csS0FBTCxHQUFhLEtBQUksQ0FBQ0MsWUFBbEI7QUFDRCxPQUZTLEVBRVAsS0FBSSxDQUFDckYsS0FBTCxDQUFXekIsS0FBWCxHQUFtQixDQUZaLENBQVY7QUFHRDtBQUNGLEdBUEQ7O0FBU0EsT0FBS3lFLElBQUwsR0FBWSxVQUFDNEMsTUFBRCxFQUFZO0FBQ3RCLFNBQUksQ0FBQ0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsUUFBSXVCLGFBQWEsR0FBRzNJLFFBQVEsQ0FBQ2lCLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBcEI7QUFDQSxRQUFJaUgsR0FBRyxHQUFHLEtBQUksQ0FBQ3hILE1BQUwsQ0FBWXdILEdBQXRCO0FBQ0EsUUFBSVUsRUFBRSxHQUFHRCxhQUFhLENBQUNsRSxLQUF2QjtBQUNBLFFBQUlvRSxFQUFFLEdBQUdGLGFBQWEsQ0FBQ1osTUFBZCxHQUF1QixHQUFoQztBQUVBLFFBQUllLEVBQUUsR0FBR0QsRUFBRSxHQUFHLENBQWQ7QUFDQSxRQUFJRSxFQUFFLEdBQUdILEVBQUUsR0FBRyxDQUFkO0FBRUEsUUFBSUksUUFBUSxHQUFHO0FBQ2I7QUFDQTtBQUNBQyxRQUFFLEVBQUVGLEVBSFM7QUFJYkcsUUFBRSxFQUFFSixFQUpTO0FBS2I7QUFDQTtBQUNBSyxRQUFFLEVBQUUsS0FBSSxDQUFDL0IsTUFQSTtBQVFiZ0MsUUFBRSxFQUFFUCxFQVJTO0FBU2I7QUFDQVEsUUFBRSxFQUFFLEtBQUksQ0FBQ2pDLE1BQUwsR0FBYyxLQUFJLENBQUMzRCxLQUFMLEdBQWFrRixhQUFhLENBQUNsRSxLQVZoQztBQVdiNkUsUUFBRSxFQUFFVDtBQVhTLEtBQWY7QUFjQVgsT0FBRyxDQUFDcUIsU0FBSjtBQUNBckIsT0FBRyxDQUFDc0IsTUFBSixDQUFXUixRQUFRLENBQUNDLEVBQXBCLEVBQXdCRCxRQUFRLENBQUNFLEVBQWpDO0FBQ0FoQixPQUFHLENBQUN1QixNQUFKLENBQVdULFFBQVEsQ0FBQ0csRUFBcEIsRUFBd0JILFFBQVEsQ0FBQ0ksRUFBakM7QUFDQWxCLE9BQUcsQ0FBQ3VCLE1BQUosQ0FBV1QsUUFBUSxDQUFDSyxFQUFwQixFQUF3QkwsUUFBUSxDQUFDTSxFQUFqQztBQUNBcEIsT0FBRyxDQUFDdUIsTUFBSixDQUFXVCxRQUFRLENBQUNDLEVBQXBCLEVBQXdCRCxRQUFRLENBQUNFLEVBQWpDO0FBQ0FoQixPQUFHLENBQUN3QixTQUFKO0FBRUF4QixPQUFHLENBQUN5QixTQUFKLEdBQWdCLEtBQUksQ0FBQy9DLEtBQXJCO0FBQ0FzQixPQUFHLENBQUMwQixXQUFKLEdBQWtCLEtBQUksQ0FBQ2hELEtBQXZCO0FBQ0FzQixPQUFHLENBQUN4QixJQUFKO0FBRUF3QixPQUFHLENBQUMyQixNQUFKO0FBQ0QsR0FwQ0Q7O0FBc0NBLE9BQUszRCxLQUFMLEdBQWEsWUFBTTtBQUNqQixRQUFJLENBQUMsS0FBSSxDQUFDd0MsTUFBVixFQUFrQjtBQUNoQixXQUFJLENBQUM5QixLQUFMLEdBQWEsU0FBYjtBQUNBWCxnQkFBVSxDQUFDLFlBQU07QUFDZixhQUFJLENBQUNXLEtBQUwsR0FBYSxLQUFJLENBQUNDLFlBQWxCO0FBQ0QsT0FGUyxFQUVQLEtBQUksQ0FBQ3JGLEtBQUwsQ0FBV3pCLEtBRkosQ0FBVjtBQUdEO0FBQ0YsR0FQRDs7QUFTQSxPQUFLNEgsVUFBTCxHQUFrQixZQUFNO0FBQ3RCLFNBQUksQ0FBQ2UsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFJLENBQUM5QixLQUFMLEdBQWEsU0FBYixDQUZzQixDQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBVkQ7O0FBWUEsT0FBS2MsVUFBTCxHQUFrQixZQUFNO0FBQ3RCLFNBQUksQ0FBQ2dCLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBSSxDQUFDOUIsS0FBTCxHQUFhLEtBQUksQ0FBQ0MsWUFBbEI7QUFDRCxHQUhEOztBQUtBLE9BQUtuRixLQUFMLEdBQWEsWUFBTTtBQUNqQixRQUFJO0FBQ0YsV0FBSSxDQUFDd0csR0FBTCxDQUFTRyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUksQ0FBQzNILE1BQUwsQ0FBWStELEtBQXJDLEVBQTRDLEtBQUksQ0FBQy9ELE1BQUwsQ0FBWXFILE1BQXhEO0FBQ0QsS0FGRCxDQUVFLE9BQU8rQixDQUFQLEVBQVU7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDRDtBQUNGLEdBTkQ7QUFPRCxDOztBQUdZOUYsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUM5RkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuXG5pbXBvcnQgY2FudmFzRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2NhbnZhc1wiO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gXCIuL3NjcmlwdHMvdHJpYW5nbGVcIjtcblxubGV0IGFsZ29TZWxlY3QgPSB7IHZhbHVlOiBudWxsIH07XG4vLyBUT0RPOiBsb29wIG92ZXIgY2xhc3MgbGlzdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNxdWljay1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInF1aWNrLXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnViYmxlLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwiYnViYmxlLXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFkaXgtc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJyYWRpeC1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdGlvbi1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInNlbGVjdGlvbi1zb3J0XCIpO1xufSk7XG5BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2dnbGUtbW9kYWxcIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEhhbmRsZXIoKTtcbiAgfSk7XG59KTtcblxuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGlkKSB7XG4gIGlmIChhbGdvU2VsZWN0LnZhbHVlID09PSBudWxsKSB7XG4gICAgbXlGdW5jKGFsZ29TZWxlY3QpO1xuICB9XG4gIGFsZ29TZWxlY3QudmFsdWUgPSBpZDtcblxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkQnV0dG9uXCIpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbn1cblxuZnVuY3Rpb24gbW9kYWxIYW5kbGVyKCkge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXR1dG9yaWFsXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1tb2RhbFwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbW9kYWxcIik7XG59XG5cbmZ1bmN0aW9uIG15RnVuYyhhbGdvKSB7XG4gIGxldCBteVRyaSA9IFtdO1xuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgbGV0IHNwZWVkID0geyB2YWx1ZTogNSB9O1xuICBsZXQgc2xpY2VGYWN0b3IgPSA4OyAvLyBpbmNyZWFzaW5nIHdpbGwgY3JlYXRlIG1vcmUgdHJpYW5nbGUgc2xpY2VzXG5cbiAgcmVzZXQoKTtcblxuICBmdW5jdGlvbiBzdGFydEFsZ28oKSB7XG4gICAgdG9nZ2xlU29ydEJ1dHRvbnModHJ1ZSk7XG4gICAgc3dpdGNoIChhbGdvLnZhbHVlKSB7XG4gICAgICBjYXNlIFwicXVpY2stc29ydFwiOlxuICAgICAgICBzdGFydFFTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJidWJibGUtc29ydFwiOlxuICAgICAgICBzdGFydEJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJyYWRpeC1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInNlbGVjdGlvbi1zb3J0XCI6XG4gICAgICAgIHN0YXJ0U1MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNvcnRCdXR0b25zKHZhbHVlKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2FibGVcIik7XG4gICAgICBlbGUuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIC8vIGxldCBxc2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgLy8gcXNiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyAvLyBxc2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBmb3J3YXJkTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmlkID0gXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBmb3J3YXJkTG9hZC5pZCA9IFwiZm9yd2FyZExvYWRcIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NTgmIzk2NThcIjtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRCdXR0b24pO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZExvYWQpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OFwiO1xuICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRBbGdvKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShwbGF5QnV0dG9uLCBiQ3RybHMuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgc2xpY2VCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuaWQgPSBcInNsaWNlQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBsZXQgbG9hZEJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsb2FkQm9yZGVyLmlkID0gXCJzbGljZUxvYWRcIjtcbiAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzbGljZUJ1dHRvbi5pZCA9IFwic2xpY2VCdXR0b25cIjtcbiAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuICAgICAgc2xpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU2xpY2UpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc2xpY2VCdXR0b24pO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKGxvYWRCb3JkZXIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShcbiAgICAgICAgc2xpY2VCdXR0b25Db250YWluZXIsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIilcbiAgICAgICk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCImIzg2MzRcIjtcbiAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldCk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTcGVlZCgpIHtcbiAgICBpZiAoc3BlZWQudmFsdWUgPT09IDUpIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCI1MCVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlZWQudmFsdWUgPSA1O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNsaWNlKCkge1xuICAgIGxldCBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUxvYWRcIik7XG4gICAgc3dpdGNoIChzbGljZUZhY3Rvcikge1xuICAgICAgY2FzZSA4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDE0O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI2OCVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDE0OlxuICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI1MiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDI4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIzNiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDI4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDQwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIxNiVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA0MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA1MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA1MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI4NCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVBcnIoKSB7XG4gICAgLy8gRGl2aWRlIGNhbnZhcyBpbnRvIHNsaWNlcyBvZiBlcXVhbCBsZW5ndGhcbiAgICAvLyBVc2UgbGluZWFyIGNvbG9yIG1hcGluZyB0byBUcmlhbmdsZS52YWxcbiAgICAvLyBUcmlhbmdsZS52YWwgd2lsbCBiZSBzb3J0ZWQgZmllbGRcbiAgICAvLyB4RGlzdCByZW1haW5zIHNhbWVcbiAgICBsZXQgeERpc3QgPSAxIC8gKDEwICogc2xpY2VGYWN0b3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgKiBzbGljZUZhY3RvcjsgaSsrKSB7XG4gICAgICAvLyAwLTI1NSByYW5kb20gbnVtYmVyXG4gICAgICBsZXQgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KTtcblxuICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICBjYW52YXMsXG4gICAgICAgIGJsdWVSYW5kb21pemVyKHZhbCwgMjU1KSxcbiAgICAgICAgeERpc3QsXG4gICAgICAgIHZhbCxcbiAgICAgICAgc3BlZWRcbiAgICAgICk7XG5cbiAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFZhcnMoKSB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBteVRyaSA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIC8vIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKSwgMTgpO1xuICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgaWYgKHNoYWRlVmFsIDwgMTYpIGdWYWx1ZSA9IFwiMFwiICsgZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gZmFsc2U7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRCUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIGJ1YmJsZVNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRSUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHJhZGl4U29ydChteVRyaSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRTUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHNlbGVjdGlvblNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnViYmxlU29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBzd2Fwc0Jvb2wgPSB0cnVlO1xuICAgICAgbGV0IGkgPSAtMTtcbiAgICAgIGNvbnN0IG91dGVyTG9vcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN3YXBzQm9vbCkge1xuICAgICAgICAgIHN3YXBzQm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpbm5lcmxvb3AoMCk7XG4gICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5uZXJsb29wID0gKHN0YXJ0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChzdGFydCA8IGFyci5sZW5ndGggLSAxIC0gaSkge1xuICAgICAgICAgICAgLy8gbGUgMiBjaGFyYWN0ZXIgb3B0aW1pemF0aW9uLCA0OSBjaGFyYWN0ZXIgY29tbWVudFxuICAgICAgICAgICAgYXJyW3N0YXJ0XS5tYXJrMigpO1xuICAgICAgICAgICAgaWYgKGFycltzdGFydF0udmFsID4gYXJyW3N0YXJ0ICsgMV0udmFsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbc3RhcnRdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnRdID0gYXJyW3N0YXJ0ICsgMV07XG4gICAgICAgICAgICAgIGFycltzdGFydCArIDFdID0gdGVtcDtcbiAgICAgICAgICAgICAgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XS5tYXJrMSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnQgKz0gMTtcbiAgICAgICAgICAgIGlubmVybG9vcChzdGFydCk7XG4gICAgICAgICAgfSBlbHNlIG91dGVyTG9vcCgpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgb3V0ZXJMb29wKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmFkaXhTb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGV4cCA9IDE7XG4gICAgICBjb25zdCByYWRpeExvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChNYXRoLmZsb29yKDI1NSAvIGV4cCkgPiAwKSB7XG4gICAgICAgICAgICBjb3VudGluZ1NvcnQoYXJyLCBleHApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBleHAgKj0gMTA7XG4gICAgICAgICAgICAgIHJhZGl4TG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICByYWRpeExvb3AoKTtcbiAgICB9KTtcbiAgfVxuICAvLyB1c2VkIGJ5IHJhZGl4IHNvcnRcbiAgY29uc3QgY291bnRpbmdTb3J0ID0gKGFyciwgZXhwKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgc29ydGVkQXJyYXkgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gICAgICBsZXQgYnVja2V0ID0gbmV3IEFycmF5KDEwKS5maWxsKDApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1Y2tldFtNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTBdKys7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIGJ1Y2tldFtpXSArPSBidWNrZXRbaSAtIDFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxvYyA9IE1hdGguZmxvb3IoYXJyW2ldLnZhbCAvIGV4cCkgJSAxMDtcbiAgICAgICAgc29ydGVkQXJyYXlbYnVja2V0W2xvY10gLSAxXSA9IHtcbiAgICAgICAgICB2YWw6IGFycltpXS52YWwsXG4gICAgICAgICAgY29sb3I6IGFycltpXS5jb2xvcixcbiAgICAgICAgICBkZWZhdWx0Q29sb3I6IGFycltpXS5kZWZhdWx0Q29sb3IsXG4gICAgICAgIH07XG4gICAgICAgIGJ1Y2tldFtsb2NdLS07XG4gICAgICB9XG4gICAgICBjb25zdCBzY2FuVmlzdWFsID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPT09IC0xKSB0cmFuc2Zlckxvb3AoMCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJbaV0ubWFyazIoKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIHNjYW5WaXN1YWwoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgc2NhblZpc3VhbChhcnIubGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCB0cmFuc2Zlckxvb3AgPSAoaSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoYXJyW2ldLnZhbCAhPT0gc29ydGVkQXJyYXlbaV0udmFsKSB7XG4gICAgICAgICAgICBhcnJbaV0udmFsID0gc29ydGVkQXJyYXlbaV0udmFsO1xuICAgICAgICAgICAgYXJyW2ldLmRlZmF1bHRDb2xvciA9IHNvcnRlZEFycmF5W2ldLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgICAgIGFycltpXS5jb2xvciA9IHNvcnRlZEFycmF5W2ldLmNvbG9yO1xuXG4gICAgICAgICAgICBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgICB9IGVsc2UgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoKSByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIGVsc2UgdHJhbnNmZXJMb29wKGkpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNlbGVjdGlvblNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBsZXQgbWluID0geyB2YWw6IDI1NiwgbG9jOiBudWxsIH07XG4gICAgICBjb25zdCBvdXRlckxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgIG1pbi52YWwgPSAyNTY7XG4gICAgICAgICAgaW5uZXJMb29wKGkpO1xuICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGZyb20gaiB0byBhcnIubGVuZ3RoLCBmaW5kIG1pbi4uLlxuXG4gICAgICBjb25zdCBpbm5lckxvb3AgPSAoaikgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoaiA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChhcnJbal0udmFsIDwgbWluLnZhbCkgbWluID0geyB2YWw6IGFycltqXS52YWwsIGxvYzogaiB9O1xuICAgICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgICBpbm5lckxvb3AoaiArIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgYXJyW2ldID0gYXJyW21pbi5sb2NdO1xuICAgICAgICAgICAgYXJyW21pbi5sb2NdID0gdGVtcDtcbiAgICAgICAgICAgIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgICAgYXJyW21pbi5sb2NdLm1hcmsxKCk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBvdXRlckxvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG5cbiAgICAgIG91dGVyTG9vcCgwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAvLyBuZWVkZWQgdG8gc2V0dXAgYSBzdHJvbmcgcmVzb2x2ZSwgbmVlZCB0byBjb21lIGJhY2sgdG8gdGhpcyAsIHJlYXNvbjogZm9yIHBhdXNpbmcgYW5pbWF0aW9uXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcblxuICAgICAgY29uc3Qgc3dhcEFuZFJlbmRlciA9IChqKSA9PiB7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIGFycltlbmRdLmNvbG9yUmVzZXQoKTsgLy8gPSBmYWxzZTtcbiAgICAgICAgICAgIGFycltzdGFydF0uY29sb3JSZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSAhPT0gc3RhcnQgJiYgaiAhPT0gZW5kKSBhcnJbc3RhcnRdLm1hcmtTdGF0aWMoKTtcblxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgLy8gaWYgKGkgPCAwKSBhcnJbMF0ubWFyazIoKTtcbiAgICAgICAgICAvLyBlbHNlIGFycltpXS5tYXJrMSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgdGltZWRXaGlsZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFycltlbmRdLm1hcmtTdGF0aWMoKTtcbiAgICAgICAgICBpZiAoaiA8IGVuZCkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIGlmIChqICE9PSBlbmQpIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgdGltZWRXaGlsZUxvb3AoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBgJHt3aW5kb3cuaW5uZXJIZWlnaHR9YClcblxuICAgICAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB9XG4gICAgY3JlYXRlQ2FudmFzKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIGAke3dpbmRvdy5pbm5lckhlaWdodH1gKVxuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgYCR7d2luZG93LmlubmVyV2lkdGh9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBkcmF3U3F1YXJlKCkge1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZmlsbENvbG9yO1xuICAgICAgICAvLyAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnRoaXMuY29vcmRzKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB1cGRhdGVTcXVhcmUoKSB7XG4gICAgICAgIC8vICAgdGhpcy5jb29yZHMgPSB0aGlzLmNvb3Jkcy5tYXAoKGNvb3JkKSA9PiAoY29vcmQgKz0gMSAqIHRoaXMuYW5pbWF0aW9uRGlyKSk7XG4gICAgICAgIC8vIH1cblxuICAgIC8vIGNsZWFyU3F1YXJlKCkge1xuICAgIC8vICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIC8vIH1cblxuICAgIC8vIHJldmVyc2VBbmltYXRpb24oKSB7XG4gICAgLy8gICB0aGlzLmFuaW1hdGlvbkRpciAqPSAtMTtcbiAgICAvLyB9XG4gICAgY2xlYXJDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cbiAgICBzZXRDb2xvcihjb2xvcikge1xuICAgICAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZpbHRlciA9IGBicmlnaHRuZXNzKDE1MCUpYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbnZhc0V4YW1wbGU7IiwiY2xhc3MgVHJpYW5nbGUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCwgdmFsLCBzcGVlZCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgIHRoaXMueERpc3QgPSB4RGlzdDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5kZWZhdWx0Q29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLm1hcmtlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsID0gdmFsO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgIHRoaXMubWFyazEgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUgKiAyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kcmF3ID0gKHhTdGFydCkgPT4ge1xuICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodCAtIDIwMDtcblxuICAgICAgbGV0IGN5ID0gY2ggLyAyO1xuICAgICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgeDE6IGN4LFxuICAgICAgICB5MTogY3ksXG4gICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgeTI6IGNoLFxuICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgdGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgsXG4gICAgICAgIHkzOiBjaCxcbiAgICAgIH07XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICB0aGlzLm1hcmsyID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjRkZENzAwXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubWFya1N0YXRpYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29sb3IgPSBcIiNGRjAwRkZcIjtcbiAgICAgIC8vIGlmICh0aGlzLnN0YXRpYykge1xuICAgICAgLy8gICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAvLyAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICB0aGlzLmNvbG9yID0gc3RyO1xuICAgICAgLy8gICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgICAvLyB9XG4gICAgfTtcblxuICAgIHRoaXMuY29sb3JSZXNldCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXQgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9