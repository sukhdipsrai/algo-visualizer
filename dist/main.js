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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsImVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbEhhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsIk1vZGFsVGFiU3dpdGNoIiwiaWQiLCJkaXNhYmxlZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm1vZGFsIiwibXlGdW5jIiwiYWxnb1NlbGVjdCIsInZhbHVlIiwiY2FudmFzIiwiY2FudmFzRXhhbXBsZSIsImNyZWF0ZUNhbnZhcyIsIm15VHJpIiwiYW5pbWF0aW5nIiwic3BlZWQiLCJzbGljZUZhY3RvciIsInN0YXJ0SGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZXNldCIsInJlbW92ZSIsImFkZCIsInN0YXJ0QWxnbyIsInRvZ2dsZVNvcnRCdXR0b25zIiwic3RhcnRRUyIsInN0YXJ0QlMiLCJzdGFydFJTIiwic3RhcnRTUyIsImluaXRpYWxpemVCdXR0b25zIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyIiwiZm9yd2FyZExvYWQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImN5Y2xlU3BlZWQiLCJoaWRkZW4iLCJwbGF5QnV0dG9uIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uQ29udGFpbmVyIiwibG9hZEJvcmRlciIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwic3R5bGUiLCJyaWdodCIsImxvYWQiLCJpbml0aWFsaXplQXJyIiwieERpc3QiLCJpIiwidmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJyZXNldFZhcnMiLCJjbGVhckNhbnZhcyIsImVuYWJsZUJ1dHRvbnMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImhpZGVGb3J3YXJkQnV0dG9uIiwicXVpY2tTb3J0IiwidGhlbiIsImJ1YmJsZVNvcnQiLCJyYWRpeFNvcnQiLCJzZWxlY3Rpb25Tb3J0IiwiYXJyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzd2Fwc0Jvb2wiLCJvdXRlckxvb3AiLCJpbm5lcmxvb3AiLCJzdGFydCIsInNldFRpbWVvdXQiLCJtYXJrMiIsInRlbXAiLCJtYXJrMSIsImV4cCIsInJhZGl4TG9vcCIsImNvdW50aW5nU29ydCIsInNvcnRlZEFycmF5IiwiYnVja2V0IiwiZmlsbCIsImxvYyIsImNvbG9yIiwiZGVmYXVsdENvbG9yIiwic2NhblZpc3VhbCIsInRyYW5zZmVyTG9vcCIsIm1pbiIsImlubmVyTG9vcCIsImoiLCJlbmQiLCJ4U3RhcnQiLCJxdWlja1NvcnRQYXJ0aXRpb24yIiwicGkiLCJyZWplY3QiLCJwaXZvdCIsInN3YXBBbmRSZW5kZXIiLCJjb2xvclJlc2V0IiwibWFya1N0YXRpYyIsInRpbWVkV2hpbGVMb29wIiwicHJvcHMiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiYm9keSIsIm9mZnNldEhlaWdodCIsImdldEhlaWdodCIsInNldEF0dHJpYnV0ZSIsImN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJmaWxsQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmaWx0ZXIiLCJib2R5RWxlIiwiY2hpbGRyZW4iLCJhbnMiLCJtYXJrZWQiLCJzdGF0aWMiLCJjYW52YXNFbGVtZW50IiwiY3ciLCJjaCIsImN5IiwiY3giLCJ0cmlhbmdsZSIsIngxIiwieTEiLCJ4MiIsInkyIiwieDMiLCJ5MyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUFBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLGNBQWhDLENBQVgsRUFBNERDLE9BQTVELENBQW9FLFVBQUNDLEdBQUQsRUFBUztBQUMzRUEsS0FBRyxDQUFDQyxnQkFBSixDQUFxQixPQUFyQixF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VUFBTCxHQUFrQixZQUFNO0FBQ3RCLFNBQUksQ0FBQ29CLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBSSxDQUFDbEMsS0FBTCxHQUFhLEtBQUksQ0FBQ0MsWUFBbEI7QUFDRCxHQUhEOztBQUtBLE9BQUtyRixLQUFMLEdBQWEsWUFBTTtBQUNqQixRQUFJO0FBQ0YsV0FBSSxDQUFDNEcsR0FBTCxDQUFTRSxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUksQ0FBQ3hILE1BQUwsQ0FBWTJELEtBQXJDLEVBQTRDLEtBQUksQ0FBQzNELE1BQUwsQ0FBWWlILE1BQXhEO0FBQ0QsS0FGRCxDQUVFLE9BQU9tQyxDQUFQLEVBQVU7QUFDVjVJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZMkksQ0FBWjtBQUNEO0FBQ0YsR0FORDtBQU9ELEM7O0FBR1luRyx1RUFBZixFOzs7Ozs7Ozs7OztBQzlGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5BcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2dnbGUtbW9kYWxcIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEhhbmRsZXIoKTtcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3ctdG8tdGFiXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIE1vZGFsVGFiU3dpdGNoKFwiaG93LXRvLXRhYlwiKTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LXRhYlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBNb2RhbFRhYlN3aXRjaChcImFib3V0LXRhYlwiKTtcbn0pO1xuXG5mdW5jdGlvbiBNb2RhbFRhYlN3aXRjaChpZCkge1xuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbC10YWJzXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcIm9uXCIpO1xuICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwib2ZmXCIpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmRpc2FibGVkID0gdHJ1ZTtcbiAgLy9UT0RPOiBhZGQgc2VsZWN0ZWQgc3R5bGluZyBvbiBpZFxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJcIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwiaW52aXNpYmxlXCIpO1xuICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwidmlzaWJsZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vZGFsSGFuZGxlcigpIHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10dXRvcmlhbFwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtbW9kYWxcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW1vZGFsXCIpO1xufVxuXG5teUZ1bmMoKTtcbmZ1bmN0aW9uIG15RnVuYygpIHtcbiAgbGV0IGFsZ29TZWxlY3QgPSB7IHZhbHVlOiBudWxsIH07XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG4gIGNhbnZhcy5jcmVhdGVDYW52YXMoKTtcbiAgbGV0IG15VHJpID0gW107XG4gIGxldCBhbmltYXRpbmcgPSB0cnVlO1xuICBsZXQgc3BlZWQgPSB7IHZhbHVlOiA1IH07XG4gIGxldCBzbGljZUZhY3RvciA9IDg7IC8vIGluY3JlYXNpbmcgd2lsbCBjcmVhdGUgbW9yZSB0cmlhbmdsZSBzbGljZXNcblxuICBjb25zdCBzdGFydEhhbmRsZXIgPSAoaWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0SGFuZGxlclwiKTtcbiAgICByZXNldCgpO1xuICAgIGFsZ29TZWxlY3QudmFsdWUgPSBpZDtcblxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkQnV0dG9uXCIpO1xuICB9O1xuXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3RhcnRIYW5kbGVyKGVsZS5pZCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHN0YXJ0QWxnbygpIHtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyh0cnVlKTtcbiAgICBzd2l0Y2ggKGFsZ29TZWxlY3QudmFsdWUpIHtcbiAgICAgIGNhc2UgXCJxdWljay1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UVMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcImJ1YmJsZS1zb3J0XCI6XG4gICAgICAgIHN0YXJ0QlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInJhZGl4LXNvcnRcIjpcbiAgICAgICAgc3RhcnRSUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLXNvcnRcIjpcbiAgICAgICAgc3RhcnRTUygpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU29ydEJ1dHRvbnModmFsdWUpIHtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwidW5jbGlja2FibGVcIik7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcImNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5kaXNhYmxlZCA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgLy8gbGV0IHFzYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAvLyBxc2IuZGlzYWJsZWQgPSB0cnVlO1xuICAgIC8vIC8vIHFzYi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbXlGdW5jKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUJ1dHRvbnMoKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IGZvcndhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgbGV0IGZvcndhcmRCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbGV0IGZvcndhcmRMb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuaWQgPSBcImZvcndhcmRCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGZvcndhcmRMb2FkLmlkID0gXCJmb3J3YXJkTG9hZFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pZCA9IFwiZm9yd2FyZEJ1dHRvblwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OCYjOTY1OFwiO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZEJ1dHRvbik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkTG9hZCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIilcbiAgICAgICAgLmFwcGVuZENoaWxkKGZvcndhcmRCdXR0b25Db250YWluZXIpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvblwiKVxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU3BlZWQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBwbGF5QnV0dG9uLmlkID0gXCJwbGF5QnV0dG9uXCI7XG4gICAgICBwbGF5QnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4XCI7XG4gICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEFsZ28pO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKHBsYXlCdXR0b24sIGJDdHJscy5maXJzdENoaWxkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBzbGljZUJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5pZCA9IFwic2xpY2VCdXR0b25Db250YWluZXJcIjtcbiAgICAgIGxldCBsb2FkQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxvYWRCb3JkZXIuaWQgPSBcInNsaWNlTG9hZFwiO1xuICAgICAgbGV0IHNsaWNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNsaWNlQnV0dG9uLmlkID0gXCJzbGljZUJ1dHRvblwiO1xuICAgICAgc2xpY2VCdXR0b24uaW5uZXJIVE1MID0gXCIrXCI7XG4gICAgICBzbGljZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTbGljZSk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChzbGljZUJ1dHRvbik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQobG9hZEJvcmRlcik7XG4gICAgICBiQ3RybHMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lcixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKVxuICAgICAgKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcmVzZXRCdXR0b24uaWQgPSBcInJlc2V0QnV0dG9uXCI7XG4gICAgICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjODYzNFwiO1xuICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0KTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNwZWVkKCkge1xuICAgIGlmIChzcGVlZC52YWx1ZSA9PT0gNSkge1xuICAgICAgc3BlZWQudmFsdWUgPSA1MDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjUwJVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU2xpY2UoKSB7XG4gICAgbGV0IGxvYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlTG9hZFwiKTtcbiAgICBzd2l0Y2ggKHNsaWNlRmFjdG9yKSB7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMTQ7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjY4JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjUyJVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gMjg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjM2JVwiO1xuXG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgMjg6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNDA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjE2JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDQwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDUwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIwJVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDUwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDg7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjg0JVwiO1xuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZUFycigpIHtcbiAgICAvLyBEaXZpZGUgY2FudmFzIGludG8gc2xpY2VzIG9mIGVxdWFsIGxlbmd0aFxuICAgIC8vIFVzZSBsaW5lYXIgY29sb3IgbWFwaW5nIHRvIFRyaWFuZ2xlLnZhbFxuICAgIC8vIFRyaWFuZ2xlLnZhbCB3aWxsIGJlIHNvcnRlZCBmaWVsZFxuICAgIC8vIHhEaXN0IHJlbWFpbnMgc2FtZVxuICAgIGxldCB4RGlzdCA9IDEgLyAoMTAgKiBzbGljZUZhY3Rvcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMCAqIHNsaWNlRmFjdG9yOyBpKyspIHtcbiAgICAgIC8vIDAtMjU1IHJhbmRvbSBudW1iZXJcbiAgICAgIGxldCB2YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpO1xuXG4gICAgICBjb25zdCBuZXdUcmkgPSBuZXcgVHJpYW5nbGUoXG4gICAgICAgIGNhbnZhcyxcbiAgICAgICAgYmx1ZVJhbmRvbWl6ZXIodmFsLCAyNTUpLFxuICAgICAgICB4RGlzdCxcbiAgICAgICAgdmFsLFxuICAgICAgICBzcGVlZFxuICAgICAgKTtcblxuICAgICAgbXlUcmkucHVzaChuZXdUcmkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VmFycygpIHtcbiAgICBjYW52YXMuY2xlYXJDYW52YXMoKTtcbiAgICBhbmltYXRpbmcgPSB0cnVlO1xuICAgIG15VHJpID0gW107XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpbml0aWFsaXplQnV0dG9ucygpO1xuICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgIGxldCByVmFsdWUgPSBcIjNDXCI7IC8vNjBcbiAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuICAgIGlmIChzaGFkZVZhbCA8IDE2KSBnVmFsdWUgPSBcIjBcIiArIGdWYWx1ZTtcblxuICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCdXR0b25zKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IHRydWU7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IGZhbHNlO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVGb3J3YXJkQnV0dG9uKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaGlkZUZvcndhcmRCdXR0b24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0QlMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBidWJibGVTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGhpZGVGb3J3YXJkQnV0dG9uKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFJTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcmFkaXhTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGhpZGVGb3J3YXJkQnV0dG9uKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRTUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHNlbGVjdGlvblNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaGlkZUZvcndhcmRCdXR0b24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgIGxldCBpID0gLTE7XG4gICAgICBjb25zdCBvdXRlckxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzd2Fwc0Jvb2wpIHtcbiAgICAgICAgICBzd2Fwc0Jvb2wgPSBmYWxzZTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaW5uZXJsb29wKDApO1xuICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlubmVybG9vcCA9IChzdGFydCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc3RhcnQgPCBhcnIubGVuZ3RoIC0gMSAtIGkpIHtcbiAgICAgICAgICAgIC8vIGxlIDIgY2hhcmFjdGVyIG9wdGltaXphdGlvbiwgNDkgY2hhcmFjdGVyIGNvbW1lbnRcbiAgICAgICAgICAgIGFycltzdGFydF0ubWFyazIoKTtcbiAgICAgICAgICAgIGlmIChhcnJbc3RhcnRdLnZhbCA+IGFycltzdGFydCArIDFdLnZhbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW3N0YXJ0XTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XSA9IGFycltzdGFydCArIDFdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnQgKyAxXSA9IHRlbXA7XG4gICAgICAgICAgICAgIHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGFycltzdGFydF0ubWFyazEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0ICs9IDE7XG4gICAgICAgICAgICBpbm5lcmxvb3Aoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSBvdXRlckxvb3AoKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIG91dGVyTG9vcCgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJhZGl4U29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBleHAgPSAxO1xuICAgICAgY29uc3QgcmFkaXhMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigyNTUgLyBleHApID4gMCkge1xuICAgICAgICAgICAgY291bnRpbmdTb3J0KGFyciwgZXhwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgZXhwICo9IDEwO1xuICAgICAgICAgICAgICByYWRpeExvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgcmFkaXhMb29wKCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gdXNlZCBieSByYWRpeCBzb3J0XG4gIGNvbnN0IGNvdW50aW5nU29ydCA9IChhcnIsIGV4cCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IHNvcnRlZEFycmF5ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICAgICAgbGV0IGJ1Y2tldCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxuICAgICAgICBidWNrZXRbTWF0aC5mbG9vcihhcnJbaV0udmFsIC8gZXhwKSAlIDEwXSsrO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSBidWNrZXRbaV0gKz0gYnVja2V0W2kgLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsb2MgPSBNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTA7XG4gICAgICAgIHNvcnRlZEFycmF5W2J1Y2tldFtsb2NdIC0gMV0gPSB7XG4gICAgICAgICAgdmFsOiBhcnJbaV0udmFsLFxuICAgICAgICAgIGNvbG9yOiBhcnJbaV0uY29sb3IsXG4gICAgICAgICAgZGVmYXVsdENvbG9yOiBhcnJbaV0uZGVmYXVsdENvbG9yLFxuICAgICAgICB9O1xuICAgICAgICBidWNrZXRbbG9jXS0tO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NhblZpc3VhbCA9IChpKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpID09PSAtMSkgdHJhbnNmZXJMb29wKDApO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBzY2FuVmlzdWFsKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHNjYW5WaXN1YWwoYXJyLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgdHJhbnNmZXJMb29wID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGFycltpXS52YWwgIT09IHNvcnRlZEFycmF5W2ldLnZhbCkge1xuICAgICAgICAgICAgYXJyW2ldLnZhbCA9IHNvcnRlZEFycmF5W2ldLnZhbDtcbiAgICAgICAgICAgIGFycltpXS5kZWZhdWx0Q29sb3IgPSBzb3J0ZWRBcnJheVtpXS5kZWZhdWx0Q29sb3I7XG4gICAgICAgICAgICBhcnJbaV0uY29sb3IgPSBzb3J0ZWRBcnJheVtpXS5jb2xvcjtcblxuICAgICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgfSBlbHNlIGFycltpXS5tYXJrMigpO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCkgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICBlbHNlIHRyYW5zZmVyTG9vcChpKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgbGV0IG1pbiA9IHsgdmFsOiAyNTYsIGxvYzogbnVsbCB9O1xuICAgICAgY29uc3Qgb3V0ZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICBtaW4udmFsID0gMjU2O1xuICAgICAgICAgIGlubmVyTG9vcChpKTtcbiAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBmcm9tIGogdG8gYXJyLmxlbmd0aCwgZmluZCBtaW4uLi5cblxuICAgICAgY29uc3QgaW5uZXJMb29wID0gKGopID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGogPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2pdLnZhbCA8IG1pbi52YWwpIG1pbiA9IHsgdmFsOiBhcnJbal0udmFsLCBsb2M6IGogfTtcbiAgICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgICAgaW5uZXJMb29wKGogKyAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICAgIGFycltpXSA9IGFyclttaW4ubG9jXTtcbiAgICAgICAgICAgIGFyclttaW4ubG9jXSA9IHRlbXA7XG4gICAgICAgICAgICBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgICAgIGFyclttaW4ubG9jXS5tYXJrMSgpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgb3V0ZXJMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuXG4gICAgICBvdXRlckxvb3AoMCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG5cbiAgICAgIGNvbnN0IHN3YXBBbmRSZW5kZXIgPSAoaikgPT4ge1xuICAgICAgICBpZiAoYXJyW2pdLnZhbCA8PSBwaXZvdCkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgICBhcnJbZW5kXS5jb2xvclJlc2V0KCk7IC8vID0gZmFsc2U7XG4gICAgICAgICAgICBhcnJbc3RhcnRdLmNvbG9yUmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgIT09IHN0YXJ0ICYmIGogIT09IGVuZCkgYXJyW3N0YXJ0XS5tYXJrU3RhdGljKCk7XG5cbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIC8vIGlmIChpIDwgMCkgYXJyWzBdLm1hcmsyKCk7XG4gICAgICAgICAgLy8gZWxzZSBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpbWVkV2hpbGVMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhcnJbZW5kXS5tYXJrU3RhdGljKCk7XG4gICAgICAgICAgaWYgKGogPCBlbmQpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICAgICAgICBpZiAoaiAhPT0gZW5kKSB0aW1lZFdoaWxlTG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgfVxuICBjcmVhdGVDYW52YXMoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpO1xuICB9XG4gIHNldENvbG9yKGNvbG9yKSB7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICB9XG4gIGdldEhlaWdodCgpIHtcbiAgICBsZXQgYm9keUVsZSA9IEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgbGV0IGFucyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIGFucyArPSBNYXRoLmNlaWwoYm9keUVsZVtpXS5vZmZzZXRIZWlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gYW5zICsgMjA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTtcbiIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QsIHZhbCwgc3BlZWQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZGVmYXVsdENvbG9yID0gY29sb3I7XG4gICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICB0aGlzLm1hcmsxID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlICogMik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZHJhdyA9ICh4U3RhcnQpID0+IHtcbiAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgICAgbGV0IGNoID0gY2FudmFzRWxlbWVudC5oZWlnaHQ7XG5cbiAgICAgIGxldCBjeSA9IGNoIC8gNDtcbiAgICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAvL3N0YXJ0XG4gICAgICAgIHgxOiBjeCxcbiAgICAgICAgeTE6IGN5LFxuXG4gICAgICAgIC8vc2Vjb25kIHBvaW50XG4gICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgeTI6IGNoLFxuXG4gICAgICAgIC8vY2FsY3VsYXRlIHRoZSAzLXJkIHZlcnRleFxuICAgICAgICB4MzogdGhpcy54U3RhcnQgKyB0aGlzLnhEaXN0ICogY2FudmFzRWxlbWVudC53aWR0aCxcbiAgICAgICAgeTM6IGNoLFxuICAgICAgfTtcblxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MiwgdHJpYW5nbGUueTIpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MywgdHJpYW5nbGUueTMpO1xuICAgICAgY3R4LmxpbmVUbyh0cmlhbmdsZS54MSwgdHJpYW5nbGUueTEpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguZmlsbCgpO1xuXG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIHRoaXMubWFyazIgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcIiNGRkQ3MDBcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5tYXJrU3RhdGljID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgICAgdGhpcy5jb2xvciA9IFwiI0ZGMDBGRlwiO1xuICAgICAgLy8gaWYgKHRoaXMuc3RhdGljKSB7XG4gICAgICAvLyAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgIC8vICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAvLyAgIHRoaXMuY29sb3IgPSBzdHI7XG4gICAgICAvLyAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAgIC8vIH1cbiAgICB9O1xuXG4gICAgdGhpcy5jb2xvclJlc2V0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICB9O1xuXG4gICAgdGhpcy5yZXNldCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlhbmdsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=