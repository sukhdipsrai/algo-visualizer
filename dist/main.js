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
};
var canvas = new _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__["default"]();
canvas.createCanvas();
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
  var algo = null;
  var myTri = [];
  var animating = true;
  var speed = {
    value: 5
  };
  var sliceFactor = 8; // increasing will create more triangle slices

  var startHandler = function startHandler(id) {
    console.log("startHandler");
    algo = algoSelect;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJhbGdvU2VsZWN0IiwidmFsdWUiLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbEhhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsIk1vZGFsVGFiU3dpdGNoIiwiaWQiLCJkaXNhYmxlZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm1vZGFsIiwibXlGdW5jIiwiYWxnbyIsIm15VHJpIiwiYW5pbWF0aW5nIiwic3BlZWQiLCJzbGljZUZhY3RvciIsInN0YXJ0SGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZXNldCIsInJlbW92ZSIsImFkZCIsInN0YXJ0QWxnbyIsInRvZ2dsZVNvcnRCdXR0b25zIiwic3RhcnRRUyIsInN0YXJ0QlMiLCJzdGFydFJTIiwic3RhcnRTUyIsImluaXRpYWxpemVCdXR0b25zIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyIiwiZm9yd2FyZExvYWQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImN5Y2xlU3BlZWQiLCJoaWRkZW4iLCJwbGF5QnV0dG9uIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uQ29udGFpbmVyIiwibG9hZEJvcmRlciIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwic3R5bGUiLCJyaWdodCIsImxvYWQiLCJpbml0aWFsaXplQXJyIiwieERpc3QiLCJpIiwidmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJyZXNldFZhcnMiLCJjbGVhckNhbnZhcyIsImVuYWJsZUJ1dHRvbnMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImhpZGVGb3J3YXJkQnV0dG9uIiwicXVpY2tTb3J0IiwidGhlbiIsImJ1YmJsZVNvcnQiLCJyYWRpeFNvcnQiLCJzZWxlY3Rpb25Tb3J0IiwiYXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzd2Fwc0Jvb2wiLCJvdXRlckxvb3AiLCJpbm5lcmxvb3AiLCJzdGFydCIsInNldFRpbWVvdXQiLCJtYXJrMiIsInRlbXAiLCJtYXJrMSIsImV4cCIsInJhZGl4TG9vcCIsImNvdW50aW5nU29ydCIsInNvcnRlZEFycmF5IiwiYnVja2V0IiwiZmlsbCIsImxvYyIsImNvbG9yIiwiZGVmYXVsdENvbG9yIiwic2NhblZpc3VhbCIsInRyYW5zZmVyTG9vcCIsIm1pbiIsImlubmVyTG9vcCIsImoiLCJlbmQiLCJ4U3RhcnQiLCJxdWlja1NvcnRQYXJ0aXRpb24yIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsInN3YXBBbmRSZW5kZXIiLCJjb2xvclJlc2V0IiwibWFya1N0YXRpYyIsInRpbWVkV2hpbGVMb29wIiwicHJvcHMiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiYm9keSIsIm9mZnNldEhlaWdodCIsImdldEhlaWdodCIsInNldEF0dHJpYnV0ZSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJmaWxsQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJib2R5RWxlIiwiY2hpbGRyZW4iLCJhbnMiLCJtYXJrZWQiLCJzdGF0aWMiLCJjYW52YXNFbGVtZW50IiwiY3ciLCJjaCIsImN5IiwiY3giLCJ0cmlhbmdsZSIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQWpCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUlDLHVEQUFKLEVBQWY7QUFDQUQsTUFBTSxDQUFDRSxZQUFQO0FBRUFDLEtBQUssQ0FB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U0FBYixDQUZzQixDQUd0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBVkQ7O0FBWUEsT0FBS2MsVUFBTCxHQUFrQixZQUFNO0FBQ3RCLFNBQUksQ0FBQ29CLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBSSxDQUFDbEMsS0FBTCxHQUFhLEtBQUksQ0FBQ0MsWUFBbEI7QUFDRCxHQUhEOztBQUtBLE9BQUtyRixLQUFMLEdBQWEsWUFBTTtBQUNqQixRQUFJO0FBQ0YsV0FBSSxDQUFDNEcsR0FBTCxDQUFTRSxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUksQ0FBQ3pJLE1BQUwsQ0FBWTRFLEtBQXJDLEVBQTRDLEtBQUksQ0FBQzVFLE1BQUwsQ0FBWWtJLE1BQXhEO0FBQ0QsS0FGRCxDQUVFLE9BQU9tQyxDQUFQLEVBQVU7QUFDVjVJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZMkksQ0FBWjtBQUNEO0FBQ0YsR0FORDtBQU9ELEM7O0FBR1luRyx1RUFBZixFOzs7Ozs7Ozs7OztBQzlGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5sZXQgYWxnb1NlbGVjdCA9IHsgdmFsdWU6IG51bGwgfTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbkFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZ2dsZS1tb2RhbFwiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsSGFuZGxlcigpO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdy10by10YWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgTW9kYWxUYWJTd2l0Y2goXCJob3ctdG8tdGFiXCIpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtdGFiXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIE1vZGFsVGFiU3dpdGNoKFwiYWJvdXQtdGFiXCIpO1xufSk7XG5cbmZ1bmN0aW9uIE1vZGFsVGFiU3dpdGNoKGlkKSB7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLXRhYnNcIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJvZmZcIik7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuZGlzYWJsZWQgPSB0cnVlO1xuICAvL1RPRE86IGFkZCBzZWxlY3RlZCBzdHlsaW5nIG9uIGlkXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYlwiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJpbnZpc2libGVcIik7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gbW9kYWxIYW5kbGVyKCkge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXR1dG9yaWFsXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1tb2RhbFwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbW9kYWxcIik7XG59XG5teUZ1bmMoKTtcbmZ1bmN0aW9uIG15RnVuYygpIHtcbiAgbGV0IGFsZ28gPSBudWxsO1xuICBsZXQgbXlUcmkgPSBbXTtcbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gIGxldCBzcGVlZCA9IHsgdmFsdWU6IDUgfTtcbiAgbGV0IHNsaWNlRmFjdG9yID0gODsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG4gIGNvbnN0IHN0YXJ0SGFuZGxlciA9IChpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic3RhcnRIYW5kbGVyXCIpO1xuICAgIGFsZ28gPSBhbGdvU2VsZWN0O1xuICAgIHJlc2V0KCk7XG4gICAgYWxnb1NlbGVjdC52YWx1ZSA9IGlkO1xuXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkQnV0dG9uXCIpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRCdXR0b25cIik7XG4gIH07XG5cbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzdGFydEhhbmRsZXIoZWxlLmlkKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gc3RhcnRBbGdvKCkge1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKHRydWUpO1xuICAgIHN3aXRjaCAoYWxnby52YWx1ZSkge1xuICAgICAgY2FzZSBcInF1aWNrLXNvcnRcIjpcbiAgICAgICAgc3RhcnRRUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwiYnViYmxlLXNvcnRcIjpcbiAgICAgICAgc3RhcnRCUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwicmFkaXgtc29ydFwiOlxuICAgICAgICBzdGFydFJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJzZWxlY3Rpb24tc29ydFwiOlxuICAgICAgICBzdGFydFNTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTb3J0QnV0dG9ucyh2YWx1ZSkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmRpc2FibGVkID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICAvLyBsZXQgcXNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIC8vIHFzYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgLy8gLy8gcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQnV0dG9ucygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZm9yd2FyZExvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5pZCA9IFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiO1xuICAgICAgZm9yd2FyZExvYWQuaWQgPSBcImZvcndhcmRMb2FkXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4JiM5NjU4XCI7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRMb2FkKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKVxuICAgICAgICAuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIjtcbiAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NThcIjtcbiAgICAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0QWxnbyk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHNsaWNlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmlkID0gXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiO1xuICAgICAgbGV0IGxvYWRCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbG9hZEJvcmRlci5pZCA9IFwic2xpY2VMb2FkXCI7XG4gICAgICBsZXQgc2xpY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc2xpY2VCdXR0b24uaWQgPSBcInNsaWNlQnV0dG9uXCI7XG4gICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcbiAgICAgIHNsaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNsaWNlKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKHNsaWNlQnV0dG9uKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChsb2FkQm9yZGVyKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpXG4gICAgICApO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICByZXNldEJ1dHRvbi5pZCA9IFwicmVzZXRCdXR0b25cIjtcbiAgICAgIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9IFwiJiM4NjM0XCI7XG4gICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXQpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgaWYgKHNwZWVkLnZhbHVlID09PSA1KSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDUwO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiNTAlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTbGljZSgpIHtcbiAgICBsZXQgbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VMb2FkXCIpO1xuICAgIHN3aXRjaCAoc2xpY2VGYWN0b3IpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAxNDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiNjglXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyMDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiNTIlXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyODtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMzYlXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA0MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMTYlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNTA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNTA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gODtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiODQlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQXJyKCkge1xuICAgIC8vIERpdmlkZSBjYW52YXMgaW50byBzbGljZXMgb2YgZXF1YWwgbGVuZ3RoXG4gICAgLy8gVXNlIGxpbmVhciBjb2xvciBtYXBpbmcgdG8gVHJpYW5nbGUudmFsXG4gICAgLy8gVHJpYW5nbGUudmFsIHdpbGwgYmUgc29ydGVkIGZpZWxkXG4gICAgLy8geERpc3QgcmVtYWlucyBzYW1lXG4gICAgbGV0IHhEaXN0ID0gMSAvICgxMCAqIHNsaWNlRmFjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwICogc2xpY2VGYWN0b3I7IGkrKykge1xuICAgICAgLy8gMC0yNTUgcmFuZG9tIG51bWJlclxuICAgICAgbGV0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XG5cbiAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBibHVlUmFuZG9taXplcih2YWwsIDI1NSksXG4gICAgICAgIHhEaXN0LFxuICAgICAgICB2YWwsXG4gICAgICAgIHNwZWVkXG4gICAgICApO1xuXG4gICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRWYXJzKCkge1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgbXlUcmkgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIHJlc2V0VmFycygpO1xuICAgIGluaXRpYWxpemVBcnIoKTtcbiAgfVxuXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgc3VtID0gMDtcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15VHJpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBteVRyaVtpXS5kcmF3KHN1bSk7XG4gICAgICBzdW0gKz0gbXlUcmlbaV0ueERpc3QgKiBjYW52YXMuY2FudmFzLndpZHRoO1xuICAgIH1cbiAgICBpZiAoYW5pbWF0aW5nKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcblxuICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgaWYgKHNoYWRlVmFsIDwgMTYpIGdWYWx1ZSA9IFwiMFwiICsgZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gZmFsc2U7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUZvcndhcmRCdXR0b24oKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgdG9nZ2xlU29ydEJ1dHRvbnMoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRRUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHF1aWNrU29ydChteVRyaSwgMCwgbXlUcmkubGVuZ3RoIC0gMSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICBoaWRlRm9yd2FyZEJ1dHRvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRCUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIGJ1YmJsZVNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaGlkZUZvcndhcmRCdXR0b24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UlMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICByYWRpeFNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaGlkZUZvcndhcmRCdXR0b24oKTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBzdGFydFNTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgc2VsZWN0aW9uU29ydChteVRyaSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgICBoaWRlRm9yd2FyZEJ1dHRvbigpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnViYmxlU29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBzd2Fwc0Jvb2wgPSB0cnVlO1xuICAgICAgbGV0IGkgPSAtMTtcbiAgICAgIGNvbnN0IG91dGVyTG9vcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN3YXBzQm9vbCkge1xuICAgICAgICAgIHN3YXBzQm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpbm5lcmxvb3AoMCk7XG4gICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5uZXJsb29wID0gKHN0YXJ0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChzdGFydCA8IGFyci5sZW5ndGggLSAxIC0gaSkge1xuICAgICAgICAgICAgLy8gbGUgMiBjaGFyYWN0ZXIgb3B0aW1pemF0aW9uLCA0OSBjaGFyYWN0ZXIgY29tbWVudFxuICAgICAgICAgICAgYXJyW3N0YXJ0XS5tYXJrMigpO1xuICAgICAgICAgICAgaWYgKGFycltzdGFydF0udmFsID4gYXJyW3N0YXJ0ICsgMV0udmFsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbc3RhcnRdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnRdID0gYXJyW3N0YXJ0ICsgMV07XG4gICAgICAgICAgICAgIGFycltzdGFydCArIDFdID0gdGVtcDtcbiAgICAgICAgICAgICAgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XS5tYXJrMSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnQgKz0gMTtcbiAgICAgICAgICAgIGlubmVybG9vcChzdGFydCk7XG4gICAgICAgICAgfSBlbHNlIG91dGVyTG9vcCgpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgb3V0ZXJMb29wKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmFkaXhTb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGV4cCA9IDE7XG4gICAgICBjb25zdCByYWRpeExvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChNYXRoLmZsb29yKDI1NSAvIGV4cCkgPiAwKSB7XG4gICAgICAgICAgICBjb3VudGluZ1NvcnQoYXJyLCBleHApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBleHAgKj0gMTA7XG4gICAgICAgICAgICAgIHJhZGl4TG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICByYWRpeExvb3AoKTtcbiAgICB9KTtcbiAgfVxuICAvLyB1c2VkIGJ5IHJhZGl4IHNvcnRcbiAgY29uc3QgY291bnRpbmdTb3J0ID0gKGFyciwgZXhwKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgc29ydGVkQXJyYXkgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gICAgICBsZXQgYnVja2V0ID0gbmV3IEFycmF5KDEwKS5maWxsKDApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1Y2tldFtNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTBdKys7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIGJ1Y2tldFtpXSArPSBidWNrZXRbaSAtIDFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxvYyA9IE1hdGguZmxvb3IoYXJyW2ldLnZhbCAvIGV4cCkgJSAxMDtcbiAgICAgICAgc29ydGVkQXJyYXlbYnVja2V0W2xvY10gLSAxXSA9IHtcbiAgICAgICAgICB2YWw6IGFycltpXS52YWwsXG4gICAgICAgICAgY29sb3I6IGFycltpXS5jb2xvcixcbiAgICAgICAgICBkZWZhdWx0Q29sb3I6IGFycltpXS5kZWZhdWx0Q29sb3IsXG4gICAgICAgIH07XG4gICAgICAgIGJ1Y2tldFtsb2NdLS07XG4gICAgICB9XG4gICAgICBjb25zdCBzY2FuVmlzdWFsID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPT09IC0xKSB0cmFuc2Zlckxvb3AoMCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJbaV0ubWFyazIoKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIHNjYW5WaXN1YWwoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgc2NhblZpc3VhbChhcnIubGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCB0cmFuc2Zlckxvb3AgPSAoaSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoYXJyW2ldLnZhbCAhPT0gc29ydGVkQXJyYXlbaV0udmFsKSB7XG4gICAgICAgICAgICBhcnJbaV0udmFsID0gc29ydGVkQXJyYXlbaV0udmFsO1xuICAgICAgICAgICAgYXJyW2ldLmRlZmF1bHRDb2xvciA9IHNvcnRlZEFycmF5W2ldLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgICAgIGFycltpXS5jb2xvciA9IHNvcnRlZEFycmF5W2ldLmNvbG9yO1xuXG4gICAgICAgICAgICBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgICB9IGVsc2UgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoKSByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIGVsc2UgdHJhbnNmZXJMb29wKGkpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNlbGVjdGlvblNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBsZXQgbWluID0geyB2YWw6IDI1NiwgbG9jOiBudWxsIH07XG4gICAgICBjb25zdCBvdXRlckxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgIG1pbi52YWwgPSAyNTY7XG4gICAgICAgICAgaW5uZXJMb29wKGkpO1xuICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGZyb20gaiB0byBhcnIubGVuZ3RoLCBmaW5kIG1pbi4uLlxuXG4gICAgICBjb25zdCBpbm5lckxvb3AgPSAoaikgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoaiA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChhcnJbal0udmFsIDwgbWluLnZhbCkgbWluID0geyB2YWw6IGFycltqXS52YWwsIGxvYzogaiB9O1xuICAgICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgICBpbm5lckxvb3AoaiArIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgYXJyW2ldID0gYXJyW21pbi5sb2NdO1xuICAgICAgICAgICAgYXJyW21pbi5sb2NdID0gdGVtcDtcbiAgICAgICAgICAgIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgICAgYXJyW21pbi5sb2NdLm1hcmsxKCk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBvdXRlckxvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG5cbiAgICAgIG91dGVyTG9vcCgwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAvLyBuZWVkZWQgdG8gc2V0dXAgYSBzdHJvbmcgcmVzb2x2ZSwgbmVlZCB0byBjb21lIGJhY2sgdG8gdGhpcyAsIHJlYXNvbjogZm9yIHBhdXNpbmcgYW5pbWF0aW9uXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcblxuICAgICAgY29uc3Qgc3dhcEFuZFJlbmRlciA9IChqKSA9PiB7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIGFycltlbmRdLmNvbG9yUmVzZXQoKTsgLy8gPSBmYWxzZTtcbiAgICAgICAgICAgIGFycltzdGFydF0uY29sb3JSZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSAhPT0gc3RhcnQgJiYgaiAhPT0gZW5kKSBhcnJbc3RhcnRdLm1hcmtTdGF0aWMoKTtcblxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgLy8gaWYgKGkgPCAwKSBhcnJbMF0ubWFyazIoKTtcbiAgICAgICAgICAvLyBlbHNlIGFycltpXS5tYXJrMSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgdGltZWRXaGlsZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFycltlbmRdLm1hcmtTdGF0aWMoKTtcbiAgICAgICAgICBpZiAoaiA8IGVuZCkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIGlmIChqICE9PSBlbmQpIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgdGltZWRXaGlsZUxvb3AoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpO1xuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCk7XG4gIH1cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gIH1cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGxldCBib2R5RWxlID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBsZXQgYW5zID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgYW5zICs9IE1hdGguY2VpbChib2R5RWxlW2ldLm9mZnNldEhlaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBhbnMgKyAyMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlO1xuIiwiY2xhc3MgVHJpYW5nbGUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCwgdmFsLCBzcGVlZCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgIHRoaXMueERpc3QgPSB4RGlzdDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5kZWZhdWx0Q29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLm1hcmtlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsID0gdmFsO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgIHRoaXMubWFyazEgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUgKiAyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kcmF3ID0gKHhTdGFydCkgPT4ge1xuICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodDtcblxuICAgICAgbGV0IGN5ID0gY2ggLyA0O1xuICAgICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAgIC8vc3RhcnRcbiAgICAgICAgeDE6IGN4LFxuICAgICAgICB5MTogY3ksXG5cbiAgICAgICAgLy9zZWNvbmQgcG9pbnRcbiAgICAgICAgeDI6IHRoaXMueFN0YXJ0LFxuICAgICAgICB5MjogY2gsXG5cbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgIHgzOiB0aGlzLnhTdGFydCArIHRoaXMueERpc3QgKiBjYW52YXNFbGVtZW50LndpZHRoLFxuICAgICAgICB5MzogY2gsXG4gICAgICB9O1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngyLCB0cmlhbmdsZS55Mik7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngzLCB0cmlhbmdsZS55Myk7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5tYXJrMiA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiI0ZGRDcwMFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm1hcmtTdGF0aWMgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgICB0aGlzLmNvbG9yID0gXCIjRkYwMEZGXCI7XG4gICAgICAvLyBpZiAodGhpcy5zdGF0aWMpIHtcbiAgICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgLy8gICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgdGhpcy5jb2xvciA9IHN0cjtcbiAgICAgIC8vICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgICAgLy8gfVxuICAgIH07XG5cbiAgICB0aGlzLmNvbG9yUmVzZXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0ID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWFuZ2xlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==