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



Array.from(document.getElementsByClassName("toggle-modal")).forEach(function (ele) {
  ele.addEventListener("click", function () {
    modalHandler();
  });
});
document.getElementById("how-to-tab").addEventListener("click", function () {
  ModalTabSwitch("how-to-tab");
});
document.getElementById("about-tab").addEventListener("click", function () {
  ModalTabSwitch("about-tab");
});

function ModalTabSwitch(id) {
  Array.from(document.getElementsByClassName("modal-tabs")).forEach(function (ele) {
    ele.disabled = false;
    ele.classList.toggle("on");
    ele.classList.toggle("off");
  });
  document.getElementById(id).disabled = true; //TODO: add selected styling on id

  Array.from(document.getElementsByClassName("tab")).forEach(function (ele) {
    ele.classList.toggle("invisible");
    ele.classList.toggle("visible");
  });
}

function modalHandler() {
  var modal = document.getElementById("modal-tutorial");
  modal.classList.toggle("hide-modal");
  modal.classList.toggle("show-modal");
}

myFunc();

function myFunc() {
  var algoSelect = {
    value: null
  };
  var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
  canvas.createCanvas();
  var myTri = [];
  var animating = true;
  var speed = {
    value: 5
  };
  var sliceFactor = 8; // increasing will create more triangle slices

  var startHandler = function startHandler(id) {
    console.log(speed);
    console.log("startHandler");
    reset();
    algoSelect.value = id;
    Array.from(document.getElementsByClassName("algo")).forEach(function (ele) {
      ele.classList.remove("selectedButton");
    });
    document.getElementById(id).classList.add("selectedButton");
  };

  Array.from(document.getElementsByClassName("algo")).forEach(function (ele) {
    ele.addEventListener("click", function () {
      startHandler(ele.id);
    });
  });

  function startAlgo() {
    toggleSortButtons(true);

    switch (algoSelect.value) {
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
    enableButtons();
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

  window.requestAnimationFrame(animation); // Logic preformed on G value, keeping R abd B constant

  function blueRandomizer(inputshade, maxVal) {
    var shadeVal = Math.ceil(inputshade / maxVal * 255);
    var rValue = "3C"; //60

    var gValue = shadeVal.toString(16);
    if (shadeVal < 16) gValue = "0" + gValue;
    return "#".concat(rValue + gValue, "ff");
  }

  function hideButtons() {
    document.getElementById("playButton").hidden = true; // document.getElementById("forwardButtonContainer").hidden = true;

    document.getElementById("sliceButtonContainer").hidden = true;
    var resetButton = document.getElementById("resetButton");
    resetButton.hidden = true;
    resetButton.classList.add("unclickable");
  }

  function enableButtons() {
    var resetButton = document.getElementById("resetButton");
    resetButton.hidden = false;
    resetButton.classList.remove("unclickable");
  }

  function hideForwardButton() {
    document.getElementById("forwardButtonContainer").hidden = true;
    toggleSortButtons(false);
  }

  function startQS() {
    hideButtons();
    quickSort(myTri, 0, myTri.length - 1).then(function () {
      enableButtons();
      hideForwardButton();
    });
  }

  function startBS() {
    hideButtons();
    bubbleSort(myTri).then(function () {
      enableButtons();
      hideForwardButton();
    });
  }

  function startRS() {
    hideButtons();
    radixSort(myTri).then(function () {
      enableButtons();
      hideForwardButton();
    });
  }

  function startSS() {
    hideButtons();
    selectionSort(myTri).then(function () {
      enableButtons();
      hideForwardButton();
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
    this.canvas.height = document.body.offsetHeight - this.getHeight();
    this.canvas.setAttribute("id", "canvas");
    this.ctx = this.canvas.getContext("2d");
  }

  _createClass(canvasExample, [{
    key: "createCanvas",
    value: function createCanvas() {
      document.body.append(this.canvas);
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.width = window.innerWidth;
      this.canvas.height = document.body.offsetHeight - this.getHeight();
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.fillColor = color;
      document.body.style.backgroundColor = color;
      document.body.style.filter = "brightness(150%)";
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var bodyEle = Array.from(document.body.children);
      var ans = 0;

      for (var i = 0; i < 4; i++) {
        ans += Math.ceil(bodyEle[i].offsetHeight);
      }

      return ans + 20;
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
    var ch = canvasElement.height;
    var cy = ch / 4;
    var cx = cw / 2;
    var triangle = {
      //start
      x1: cx,
      y1: cy,
      //second point
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZGFsSGFuZGxlciIsImdldEVsZW1lbnRCeUlkIiwiTW9kYWxUYWJTd2l0Y2giLCJpZCIsImRpc2FibGVkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibW9kYWwiLCJteUZ1bmMiLCJhbGdvU2VsZWN0IiwidmFsdWUiLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInNsaWNlRmFjdG9yIiwic3RhcnRIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsInJlc2V0IiwicmVtb3ZlIiwiYWRkIiwic3RhcnRBbGdvIiwidG9nZ2xlU29ydEJ1dHRvbnMiLCJzdGFydFFTIiwic3RhcnRCUyIsInN0YXJ0UlMiLCJzdGFydFNTIiwiaW5pdGlhbGl6ZUJ1dHRvbnMiLCJmb3J3YXJkQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImZvcndhcmRCdXR0b25Db250YWluZXIiLCJmb3J3YXJkTG9hZCIsImlubmVySFRNTCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiY3ljbGVTcGVlZCIsImhpZGRlbiIsInBsYXlCdXR0b24iLCJiQ3RybHMiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic2xpY2VCdXR0b25Db250YWluZXIiLCJsb2FkQm9yZGVyIiwic2xpY2VCdXR0b24iLCJjeWNsZVNsaWNlIiwicmVzZXRCdXR0b24iLCJzdHlsZSIsInJpZ2h0IiwibG9hZCIsImluaXRpYWxpemVBcnIiLCJ4RGlzdCIsImkiLCJ2YWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJuZXdUcmkiLCJUcmlhbmdsZSIsImJsdWVSYW5kb21pemVyIiwicHVzaCIsInJlc2V0VmFycyIsImNsZWFyQ2FudmFzIiwiZW5hYmxlQnV0dG9ucyIsImFuaW1hdGlvbiIsInN1bSIsImxlbmd0aCIsImRyYXciLCJ3aWR0aCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsImNlaWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsImhpZGVCdXR0b25zIiwiaGlkZUZvcndhcmRCdXR0b24iLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInNlbGVjdGlvblNvcnQiLCJhcnIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN3YXBzQm9vbCIsIm91dGVyTG9vcCIsImlubmVybG9vcCIsInN0YXJ0Iiwic2V0VGltZW91dCIsIm1hcmsyIiwidGVtcCIsIm1hcmsxIiwiZXhwIiwicmFkaXhMb29wIiwiY291bnRpbmdTb3J0Iiwic29ydGVkQXJyYXkiLCJidWNrZXQiLCJmaWxsIiwibG9jIiwiY29sb3IiLCJkZWZhdWx0Q29sb3IiLCJzY2FuVmlzdWFsIiwidHJhbnNmZXJMb29wIiwibWluIiwiaW5uZXJMb29wIiwiaiIsImVuZCIsInhTdGFydCIsInF1aWNrU29ydFBhcnRpdGlvbjIiLCJwaSIsInJlamVjdCIsInBpdm90Iiwic3dhcEFuZFJlbmRlciIsImNvbG9yUmVzZXQiLCJtYXJrU3RhdGljIiwidGltZWRXaGlsZUxvb3AiLCJwcm9wcyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImZpbGxDb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsImJvZHlFbGUiLCJjaGlsZHJlbiIsImFucyIsIm1hcmtlZCIsInN0YXRpYyIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsY0FBaEMsQ0FBWCxFQUE0REMsT0FBNUQsQ0FBb0UsVUFBQ0MsR0FBRCxFQUFTO0FBQzNFQSxLQUFHLENBQUNDLGdCQUFKLENBQXFCLE9B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FWRDs7QUFZQSxPQUFLYyxVQUFMLEdBQWtCLFlBQU07QUFDdEIsU0FBSSxDQUFDb0IsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFJLENBQUNsQyxLQUFMLEdBQWEsS0FBSSxDQUFDQyxZQUFsQjtBQUNELEdBSEQ7O0FBS0EsT0FBS3JGLEtBQUwsR0FBYSxZQUFNO0FBQ2pCLFFBQUk7QUFDRixXQUFJLENBQUM0RyxHQUFMLENBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSSxDQUFDeEgsTUFBTCxDQUFZMkQsS0FBckMsRUFBNEMsS0FBSSxDQUFDM0QsTUFBTCxDQUFZaUgsTUFBeEQ7QUFDRCxLQUZELENBRUUsT0FBT21DLENBQVAsRUFBVTtBQUNWNUksYUFBTyxDQUFDQyxHQUFSLENBQVkySSxDQUFaO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQzs7QUFHWW5HLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDOUZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbkFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZ2dsZS1tb2RhbFwiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsSGFuZGxlcigpO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdy10by10YWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgTW9kYWxUYWJTd2l0Y2goXCJob3ctdG8tdGFiXCIpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtdGFiXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIE1vZGFsVGFiU3dpdGNoKFwiYWJvdXQtdGFiXCIpO1xufSk7XG5cbmZ1bmN0aW9uIE1vZGFsVGFiU3dpdGNoKGlkKSB7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLXRhYnNcIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJvZmZcIik7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuZGlzYWJsZWQgPSB0cnVlO1xuICAvL1RPRE86IGFkZCBzZWxlY3RlZCBzdHlsaW5nIG9uIGlkXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYlwiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJpbnZpc2libGVcIik7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW9kYWxIYW5kbGVyKCkge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXR1dG9yaWFsXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1tb2RhbFwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbW9kYWxcIik7XG59XG5cbm15RnVuYygpO1xuZnVuY3Rpb24gbXlGdW5jKCkge1xuICBsZXQgYWxnb1NlbGVjdCA9IHsgdmFsdWU6IG51bGwgfTtcbiAgY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbiAgY2FudmFzLmNyZWF0ZUNhbnZhcygpO1xuICBsZXQgbXlUcmkgPSBbXTtcbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gIGxldCBzcGVlZCA9IHsgdmFsdWU6IDUgfTtcbiAgbGV0IHNsaWNlRmFjdG9yID0gODsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG4gIGNvbnN0IHN0YXJ0SGFuZGxlciA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNwZWVkKTtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0SGFuZGxlclwiKTtcbiAgICByZXNldCgpO1xuICAgIGFsZ29TZWxlY3QudmFsdWUgPSBpZDtcblxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQnV0dG9uXCIpO1xuICB9O1xuXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3RhcnRIYW5kbGVyKGVsZS5pZCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0QWxnbygpIHtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyh0cnVlKTtcbiAgICBzd2l0Y2ggKGFsZ29TZWxlY3QudmFsdWUpIHtcbiAgICAgIGNhc2UgXCJxdWljay1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UVMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcImJ1YmJsZS1zb3J0XCI6XG4gICAgICAgIHN0YXJ0QlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInJhZGl4LXNvcnRcIjpcbiAgICAgICAgc3RhcnRSUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLXNvcnRcIjpcbiAgICAgICAgc3RhcnRTUygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU29ydEJ1dHRvbnModmFsdWUpIHtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwidW5jbGlja2FibGVcIik7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcImNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgLy8gbGV0IHFzYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAvLyBxc2IuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIC8vIHFzYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1dHRvbnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGZvcndhcmRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGZvcndhcmRMb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuaWQgPSBcImZvcndhcmRCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGZvcndhcmRMb2FkLmlkID0gXCJmb3J3YXJkTG9hZFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pZCA9IFwiZm9yd2FyZEJ1dHRvblwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OCYjOTY1OFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZEJ1dHRvbik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkTG9hZCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIilcbiAgICAgICAgLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b25Db250YWluZXIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4XCI7XG4gICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEFsZ28pO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBzbGljZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5pZCA9IFwic2xpY2VCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGxldCBsb2FkQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxvYWRCb3JkZXIuaWQgPSBcInNsaWNlTG9hZFwiO1xuICAgICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNsaWNlQnV0dG9uLmlkID0gXCJzbGljZUJ1dHRvblwiO1xuICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgICBzbGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTbGljZSk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChzbGljZUJ1dHRvbik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQobG9hZEJvcmRlcik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKVxuICAgICAgKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcmVzZXRCdXR0b24uaWQgPSBcInJlc2V0QnV0dG9uXCI7XG4gICAgICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjODYzNFwiO1xuICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgIGlmIChzcGVlZC52YWx1ZSA9PT0gNSkge1xuICAgICAgc3BlZWQudmFsdWUgPSA1MDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgbGV0IGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlTG9hZFwiKTtcbiAgICBzd2l0Y2ggKHNsaWNlRmFjdG9yKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMTQ7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjY4JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjUyJVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjM2JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNDA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjE2JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDQwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDUwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDUwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjg0JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUFycigpIHtcbiAgICAvLyBEaXZpZGUgY2FudmFzIGludG8gc2xpY2VzIG9mIGVxdWFsIGxlbmd0aFxuICAgIC8vIFVzZSBsaW5lYXIgY29sb3IgbWFwaW5nIHRvIFRyaWFuZ2xlLnZhbFxuICAgIC8vIFRyaWFuZ2xlLnZhbCB3aWxsIGJlIHNvcnRlZCBmaWVsZFxuICAgIC8vIHhEaXN0IHJlbWFpbnMgc2FtZVxuICAgIGxldCB4RGlzdCA9IDEgLyAoMTAgKiBzbGljZUZhY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAqIHNsaWNlRmFjdG9yOyBpKyspIHtcbiAgICAgIC8vIDAtMjU1IHJhbmRvbSBudW1iZXJcbiAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpO1xuXG4gICAgICBjb25zdCBuZXdUcmkgPSBuZXcgVHJpYW5nbGUoXG4gICAgICAgIGNhbnZhcyxcbiAgICAgICAgYmx1ZVJhbmRvbWl6ZXIodmFsLCAyNTUpLFxuICAgICAgICB4RGlzdCxcbiAgICAgICAgdmFsLFxuICAgICAgICBzcGVlZFxuICAgICAgKTtcblxuICAgICAgbXlUcmkucHVzaChuZXdUcmkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VmFycygpIHtcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgIG15VHJpID0gW107XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpbml0aWFsaXplQnV0dG9ucygpO1xuICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgIGxldCByVmFsdWUgPSBcIjNDXCI7IC8vNjBcbiAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuICAgIGlmIChzaGFkZVZhbCA8IDE2KSBnVmFsdWUgPSBcIjBcIiArIGdWYWx1ZTtcblxuICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCdXR0b25zKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IHRydWU7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IGZhbHNlO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVGb3J3YXJkQnV0dG9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaGlkZUZvcndhcmRCdXR0b24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0QlMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBidWJibGVTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGhpZGVGb3J3YXJkQnV0dG9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFJTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcmFkaXhTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGhpZGVGb3J3YXJkQnV0dG9uKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRTUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHNlbGVjdGlvblNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaGlkZUZvcndhcmRCdXR0b24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgIGxldCBpID0gLTE7XG4gICAgICBjb25zdCBvdXRlckxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzd2Fwc0Jvb2wpIHtcbiAgICAgICAgICBzd2Fwc0Jvb2wgPSBmYWxzZTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaW5uZXJsb29wKDApO1xuICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlubmVybG9vcCA9IChzdGFydCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc3RhcnQgPCBhcnIubGVuZ3RoIC0gMSAtIGkpIHtcbiAgICAgICAgICAgIC8vIGxlIDIgY2hhcmFjdGVyIG9wdGltaXphdGlvbiwgNDkgY2hhcmFjdGVyIGNvbW1lbnRcbiAgICAgICAgICAgIGFycltzdGFydF0ubWFyazIoKTtcbiAgICAgICAgICAgIGlmIChhcnJbc3RhcnRdLnZhbCA+IGFycltzdGFydCArIDFdLnZhbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW3N0YXJ0XTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XSA9IGFycltzdGFydCArIDFdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnQgKyAxXSA9IHRlbXA7XG4gICAgICAgICAgICAgIHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGFycltzdGFydF0ubWFyazEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0ICs9IDE7XG4gICAgICAgICAgICBpbm5lcmxvb3Aoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSBvdXRlckxvb3AoKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIG91dGVyTG9vcCgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJhZGl4U29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBleHAgPSAxO1xuICAgICAgY29uc3QgcmFkaXhMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigyNTUgLyBleHApID4gMCkge1xuICAgICAgICAgICAgY291bnRpbmdTb3J0KGFyciwgZXhwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgZXhwICo9IDEwO1xuICAgICAgICAgICAgICByYWRpeExvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgcmFkaXhMb29wKCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gdXNlZCBieSByYWRpeCBzb3J0XG4gIGNvbnN0IGNvdW50aW5nU29ydCA9IChhcnIsIGV4cCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IHNvcnRlZEFycmF5ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICAgICAgbGV0IGJ1Y2tldCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxuICAgICAgICBidWNrZXRbTWF0aC5mbG9vcihhcnJbaV0udmFsIC8gZXhwKSAlIDEwXSsrO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSBidWNrZXRbaV0gKz0gYnVja2V0W2kgLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsb2MgPSBNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTA7XG4gICAgICAgIHNvcnRlZEFycmF5W2J1Y2tldFtsb2NdIC0gMV0gPSB7XG4gICAgICAgICAgdmFsOiBhcnJbaV0udmFsLFxuICAgICAgICAgIGNvbG9yOiBhcnJbaV0uY29sb3IsXG4gICAgICAgICAgZGVmYXVsdENvbG9yOiBhcnJbaV0uZGVmYXVsdENvbG9yLFxuICAgICAgICB9O1xuICAgICAgICBidWNrZXRbbG9jXS0tO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NhblZpc3VhbCA9IChpKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpID09PSAtMSkgdHJhbnNmZXJMb29wKDApO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBzY2FuVmlzdWFsKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHNjYW5WaXN1YWwoYXJyLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgdHJhbnNmZXJMb29wID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGFycltpXS52YWwgIT09IHNvcnRlZEFycmF5W2ldLnZhbCkge1xuICAgICAgICAgICAgYXJyW2ldLnZhbCA9IHNvcnRlZEFycmF5W2ldLnZhbDtcbiAgICAgICAgICAgIGFycltpXS5kZWZhdWx0Q29sb3IgPSBzb3J0ZWRBcnJheVtpXS5kZWZhdWx0Q29sb3I7XG4gICAgICAgICAgICBhcnJbaV0uY29sb3IgPSBzb3J0ZWRBcnJheVtpXS5jb2xvcjtcblxuICAgICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgfSBlbHNlIGFycltpXS5tYXJrMigpO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCkgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICBlbHNlIHRyYW5zZmVyTG9vcChpKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgbGV0IG1pbiA9IHsgdmFsOiAyNTYsIGxvYzogbnVsbCB9O1xuICAgICAgY29uc3Qgb3V0ZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICBtaW4udmFsID0gMjU2O1xuICAgICAgICAgIGlubmVyTG9vcChpKTtcbiAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBmcm9tIGogdG8gYXJyLmxlbmd0aCwgZmluZCBtaW4uLi5cblxuICAgICAgY29uc3QgaW5uZXJMb29wID0gKGopID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGogPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2pdLnZhbCA8IG1pbi52YWwpIG1pbiA9IHsgdmFsOiBhcnJbal0udmFsLCBsb2M6IGogfTtcbiAgICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgICAgaW5uZXJMb29wKGogKyAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICAgIGFycltpXSA9IGFyclttaW4ubG9jXTtcbiAgICAgICAgICAgIGFyclttaW4ubG9jXSA9IHRlbXA7XG4gICAgICAgICAgICBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgICAgIGFyclttaW4ubG9jXS5tYXJrMSgpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgb3V0ZXJMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuXG4gICAgICBvdXRlckxvb3AoMCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG5cbiAgICAgIGNvbnN0IHN3YXBBbmRSZW5kZXIgPSAoaikgPT4ge1xuICAgICAgICBpZiAoYXJyW2pdLnZhbCA8PSBwaXZvdCkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgICBhcnJbZW5kXS5jb2xvclJlc2V0KCk7IC8vID0gZmFsc2U7XG4gICAgICAgICAgICBhcnJbc3RhcnRdLmNvbG9yUmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgIT09IHN0YXJ0ICYmIGogIT09IGVuZCkgYXJyW3N0YXJ0XS5tYXJrU3RhdGljKCk7XG5cbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIC8vIGlmIChpIDwgMCkgYXJyWzBdLm1hcmsyKCk7XG4gICAgICAgICAgLy8gZWxzZSBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpbWVkV2hpbGVMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhcnJbZW5kXS5tYXJrU3RhdGljKCk7XG4gICAgICAgICAgaWYgKGogPCBlbmQpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICAgICAgICBpZiAoaiAhPT0gZW5kKSB0aW1lZFdoaWxlTG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgfVxuICBjcmVhdGVDYW52YXMoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpO1xuICB9XG4gIHNldENvbG9yKGNvbG9yKSB7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICB9XG4gIGdldEhlaWdodCgpIHtcbiAgICBsZXQgYm9keUVsZSA9IEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgbGV0IGFucyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIGFucyArPSBNYXRoLmNlaWwoYm9keUVsZVtpXS5vZmZzZXRIZWlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gYW5zICsgMjA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTtcbiIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QsIHZhbCwgc3BlZWQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZGVmYXVsdENvbG9yID0gY29sb3I7XG4gICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICB0aGlzLm1hcmsxID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlICogMik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZHJhdyA9ICh4U3RhcnQpID0+IHtcbiAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgICAgbGV0IGNoID0gY2FudmFzRWxlbWVudC5oZWlnaHQ7XG5cbiAgICAgIGxldCBjeSA9IGNoIC8gNDtcbiAgICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAvL3N0YXJ0XG4gICAgICAgIHgxOiBjeCxcbiAgICAgICAgeTE6IGN5LFxuXG4gICAgICAgIC8vc2Vjb25kIHBvaW50XG4gICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgeTI6IGNoLFxuXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgICB4MzogdGhpcy54U3RhcnQgKyB0aGlzLnhEaXN0ICogY2FudmFzRWxlbWVudC53aWR0aCxcbiAgICAgICAgeTM6IGNoLFxuICAgICAgfTtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguZmlsbCgpO1xuXG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIHRoaXMubWFyazIgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIiNGRkQ3MDBcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5tYXJrU3RhdGljID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgICAgdGhpcy5jb2xvciA9IFwiI0ZGMDBGRlwiO1xuICAgICAgLy8gaWYgKHRoaXMuc3RhdGljKSB7XG4gICAgICAvLyAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgIC8vICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIHRoaXMuY29sb3IgPSBzdHI7XG4gICAgICAvLyAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jb2xvclJlc2V0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=