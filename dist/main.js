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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiYWxnb1NlbGVjdCIsInZhbHVlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0SGFuZGxlciIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwiZWxlIiwibW9kYWxIYW5kbGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJNb2RhbFRhYlN3aXRjaCIsImlkIiwiZGlzYWJsZWQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjYW52YXMiLCJjYW52YXNFeGFtcGxlIiwiY3JlYXRlQ2FudmFzIiwibXlGdW5jIiwicmVtb3ZlIiwiYWRkIiwibW9kYWwiLCJhbGdvIiwibXlUcmkiLCJhbmltYXRpbmciLCJzcGVlZCIsInNsaWNlRmFjdG9yIiwicmVzZXQiLCJzdGFydEFsZ28iLCJ0b2dnbGVTb3J0QnV0dG9ucyIsInN0YXJ0UVMiLCJzdGFydEJTIiwic3RhcnRSUyIsInN0YXJ0U1MiLCJpbml0aWFsaXplQnV0dG9ucyIsImZvcndhcmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciIsImZvcndhcmRMb2FkIiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJjeWNsZVNwZWVkIiwiaGlkZGVuIiwicGxheUJ1dHRvbiIsImJDdHJscyIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzbGljZUJ1dHRvbkNvbnRhaW5lciIsImxvYWRCb3JkZXIiLCJzbGljZUJ1dHRvbiIsImN5Y2xlU2xpY2UiLCJyZXNldEJ1dHRvbiIsInN0eWxlIiwicmlnaHQiLCJsb2FkIiwiaW5pdGlhbGl6ZUFyciIsInhEaXN0IiwiaSIsInZhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm5ld1RyaSIsIlRyaWFuZ2xlIiwiYmx1ZVJhbmRvbWl6ZXIiLCJwdXNoIiwicmVzZXRWYXJzIiwiY2xlYXJDYW52YXMiLCJhbmltYXRpb24iLCJzdW0iLCJsZW5ndGgiLCJkcmF3Iiwid2lkdGgiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnB1dHNoYWRlIiwibWF4VmFsIiwic2hhZGVWYWwiLCJjZWlsIiwiclZhbHVlIiwiZ1ZhbHVlIiwidG9TdHJpbmciLCJoaWRlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJxdWlja1NvcnQiLCJ0aGVuIiwiYnViYmxlU29ydCIsInJhZGl4U29ydCIsInNlbGVjdGlvblNvcnQiLCJhcnIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN3YXBzQm9vbCIsIm91dGVyTG9vcCIsImlubmVybG9vcCIsInN0YXJ0Iiwic2V0VGltZW91dCIsIm1hcmsyIiwidGVtcCIsIm1hcmsxIiwiZXhwIiwicmFkaXhMb29wIiwiY291bnRpbmdTb3J0Iiwic29ydGVkQXJyYXkiLCJidWNrZXQiLCJmaWxsIiwibG9jIiwiY29sb3IiLCJkZWZhdWx0Q29sb3IiLCJzY2FuVmlzdWFsIiwidHJhbnNmZXJMb29wIiwibWluIiwiaW5uZXJMb29wIiwiaiIsImVuZCIsInhTdGFydCIsInF1aWNrU29ydFBhcnRpdGlvbjIiLCJwaSIsInJlamVjdCIsInBpdm90Iiwic3dhcEFuZFJlbmRlciIsImNvbG9yUmVzZXQiLCJtYXJrU3RhdGljIiwidGltZWRXaGlsZUxvb3AiLCJwcm9wcyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJib2R5Iiwib2Zmc2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0QXR0cmlidXRlIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNsZWFyUmVjdCIsImZpbGxDb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbHRlciIsImJvZHlFbGUiLCJjaGlsZHJlbiIsImFucyIsIm1hcmtlZCIsInN0YXRpYyIsImNhbnZhc0VsZW1lbnQiLCJjdyIsImNoIiwiY3kiLCJjeCIsInRyaWFuZ2xlIiwieDEiLCJ5MSIsIngyIiwieTIiLCJ4MyIsInkzIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwiY2xvc2VQYXRoIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJzdHJva2UiLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQWpCLEMsQ0FDQTs7QUFDQUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0UsWUFBTTtBQUNwRUMsY0FBWSxDQUFDLFlBQUQsQ0FBWjtBQUNELENBRkQ7QUFHQUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLEVBQXVDQyxnQkFBdkMsQ0FBd0QsT0FBeEQsRUFBaUUsWUFBTTtBQUNyRUMsY0FBWSxDQUFDLGFBQUQsQ0FBWjtBQUNELENBRkQ7QUFHQUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDQyxnQkFBdEMsQ0FBdUQsT0FBdkQsRUFBZ0UsWUFBTTtBQUNwRUMsY0FBWSxDQUFDLFlBQUQsQ0FBWjtBQUNELENBRkQ7QUFHQUgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixFQUEwQ0MsZ0JBQTFDLENBQTJELE9BQTNELEVBQW9FLFlBQU07QUFDeEVDLGNBQVksQ0FBQyxnQkFBRCxDQUFaO0FBQ0QsQ0FGRDtBQUdBQyxLQUFLLENBQUNDLElBQU4sQ0FBV0wsUUFBUSxDQUFDTSxzQkFBVCxDQUFnQyxjQUFoQyxDQUFYLEVBQTREQyxPQUE1RCxDQUFvRSxVQUFDQyxHQUFELEVBQVM7QUFDM0VBLEtBQUcsQ0FBQ04sZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtBQUNsQ08sZ0JBQVk7QUFDYixHQUZEO0FBR0QsQ0FKRDtBQU1BVCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NSLGdCQUF0QyxDQUF1RCxPQUF2RCxFQUFnRSxZQUFNO0FBQ3BFUyxnQkFBYyxDQUFDLFlBQUQsQ0FBZDtBQUNELENBRkQ7QUFJQVgsUUFBUSxDQUFDVSxjQUFULENBQXdCLFdBQXhCLEVBQXFDUixnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsWUFBTTtBQUNuRVMsZ0JBQWMsQ0FBQyxXQUFELENBQWQ7QUFDRCxDQUZEOztBQUlBLFNBQVNBLGNBQVQsQ0FBd0JDLEVBQXhCLEVBQTRCO0FBQzFCUixPQUFLLENBQUNDLElBQU4sQ0FBV0wsUUFBUSxDQUFDTSxzQkFBVCxDQUFnQyxZQUFoQyxDQUFYLEVBQTBEQyxPQUExRCxDQUFrRSxVQUFDQyxHQUFELEVBQVM7QUFDekVBLE9BQUcsQ0FBQ0ssUUFBSixHQUFlLEtBQWY7QUFDQUwsT0FBRyxDQUFDTSxTQUFKLENBQWNDLE1BQWQsQ0FBcUIsSUFBckI7QUFDQVAsT0FBRyxDQUFDTSxTQUFKLENBQWNDLE1BQWQsQ0FBcUIsS0FBckI7QUFDRCxHQUpEO0FBS0FmLFVBQVEsQ0FBQ1UsY0FBVCxDQUF3QkUsRUFBeEIsRUFBNEJDLFFBQTVCLEdBQXVDLElBQXZDLENBTjBCLENBTzFCOztBQUNBVCxPQUFLLENBQUNDLElBQU4sQ0FBV0wsUUFBUSxDQUFDTSxzQkFBVCxDQUFnQyxLQUFoQyxDQUFYLEVBQW1EQyxPQUFuRCxDQUEyRCxVQUFDQyxHQUFELEVBQVM7QUFDbEVBLE9BQUcsQ0FBQ00sU0FBSixDQUFjQyxNQUFkLENBQXFCLFdBQXJCO0FBQ0FQLE9BQUcsQ0FBQ00sU0FBSixDQUFjQyxNQUFkLENBQXFCLFNBQXJCO0FBQ0QsR0FIRDtBQUlEOztBQUNELElBQU1DLE1BQU0sR0FBRyxJQUFJQyx1REFBSixFQUFmO0FBQ0FELE1BQU0sQ0FBQ0UsWUFBUDs7QUFFQSxTQUFTZixZQUFULENBQXNCUyxFQUF0QixFQUEwQjtBQUN4QixNQUFJZCxVQUFVLENBQUNDLEtBQVgsS0FBcUIsSUFBekIsRUFBK0I7QUFDN0JvQixVQUFNLENBQUNyQixVQUFELENBQU47QUFDRDs7QUFDREEsWUFBVSxDQUFDQyxLQUFYLEdBQW1CYSxFQUFuQjtBQUVBUixPQUFLLENBQUNDLElBQU4sQ0FBV0wsUUFBUSxDQUFDTSxzQkFBVCxDQUFnQyxNQUFoQyxDQUFYLEVBQW9EQyxPQUFwRCxDQUE0RCxVQUFDQyxHQUFELEVBQVM7QUFDbkVBLE9BQUcsQ0FBQ00sU0FBSixDQUFjTSxNQUFkLENBQXFCLGdCQUFyQjtBQUNELEdBRkQ7QUFHQXBCLFVBQVEsQ0FBQ1UsY0FBVCxDQUF3QkUsRUFBeEIsRUFBNEJFLFNBQTVCLENBQXNDTyxHQUF0QyxDQUEwQyxnQkFBMUM7QUFDRDs7QUFFRCxTQUFTWixZQUFULEdBQXdCO0FBQ3RCLE1BQUlhLEtBQUssR0FBR3RCLFFBQVEsQ0FBQ1UsY0FBVCxDQUF3QixnQkFBeEIsQ0FBWjtBQUNBWSxPQUFLLENBQUNSLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCLFlBQXZCO0FBQ0FPLE9BQUssQ0FBQ1IsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUIsWUFBdkI7QUFDRDs7QUFFRCxTQUFTSSxNQUFULENBQWdCSSxJQUFoQixFQUFzQjtBQUNwQixNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUNBLE1BQUlDLEtBQUssR0FBRztBQUFFM0IsU0FBSyxFQUFFO0FBQVQsR0FBWjtBQUNBLE1BQUk0QixXQUFXLEdBQUcsQ0FBbEIsQ0FKb0IsQ0FJQzs7QUFFckJDLE9BQUs7O0FBRUwsV0FBU0MsU0FBVCxHQUFxQjtBQUNuQkMscUJBQWlCLENBQUMsSUFBRCxDQUFqQjs7QUFDQSxZQUFRUCxJQUFJLENBQUN4QixLQUFiO0FBQ0UsV0FBSyxZQUFMO0FBQ0VnQyxlQUFPO0FBQ1A7O0FBQ0YsV0FBSyxhQUFMO0FBQ0VDLGVBQU87QUFDUDs7QUFDRixXQUFLLFlBQUw7QUFDRUMsZUFBTztBQUNQOztBQUNGLFdBQUssZ0JBQUw7QUFDRUMsZUFBTztBQUNQO0FBWko7QUFjRDs7QUFFRCxXQUFTSixpQkFBVCxDQUEyQi9CLEtBQTNCLEVBQWtDO0FBQ2hDSyxTQUFLLENBQUNDLElBQU4sQ0FBV0wsUUFBUSxDQUFDTSxzQkFBVCxDQUFnQyxNQUFoQyxDQUFYLEVBQW9EQyxPQUFwRCxDQUE0RCxVQUFDQyxHQUFELEVBQVM7QUFDbkVBLFNBQUcsQ0FBQ00sU0FBSixDQUFjQyxNQUFkLENBQXFCLGFBQXJCO0FBQ0FQLFNBQUcsQ0FBQ00sU0FBSixDQUFjQyxNQUFkLENBQXFCLFdBQXJCO0FBQ0FQLFNBQUcsQ0FBQ0ssUUFBSixHQUFlZCxLQUFmO0FBQ0QsS0FKRCxFQURnQyxDQU9oQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsV0FBU29DLGlCQUFULEdBQTZCO0FBQzNCLFFBQUluQyxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsZUFBeEIsTUFBNkMsSUFBakQsRUFBdUQ7QUFDckQsVUFBSTBCLGFBQWEsR0FBR3BDLFFBQVEsQ0FBQ3FDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBcEI7QUFDQSxVQUFJQyxzQkFBc0IsR0FBR3RDLFFBQVEsQ0FBQ3FDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7QUFDQSxVQUFJRSxXQUFXLEdBQUd2QyxRQUFRLENBQUNxQyxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FDLDRCQUFzQixDQUFDMUIsRUFBdkIsR0FBNEIsd0JBQTVCO0FBQ0EyQixpQkFBVyxDQUFDM0IsRUFBWixHQUFpQixhQUFqQjtBQUNBd0IsbUJBQWEsQ0FBQ3hCLEVBQWQsR0FBbUIsZUFBbkI7QUFDQXdCLG1CQUFhLENBQUNJLFNBQWQsR0FBMEIsY0FBMUI7QUFDQUYsNEJBQXNCLENBQUNHLE1BQXZCLENBQThCTCxhQUE5QjtBQUNBRSw0QkFBc0IsQ0FBQ0csTUFBdkIsQ0FBOEJGLFdBQTlCO0FBQ0F2QyxjQUFRLENBQ0xVLGNBREgsQ0FDa0IsaUJBRGxCLEVBRUdnQyxXQUZILENBRWVKLHNCQUZmO0FBR0F0QyxjQUFRLENBQ0xVLGNBREgsQ0FDa0IsZUFEbEIsRUFFR1IsZ0JBRkgsQ0FFb0IsT0FGcEIsRUFFNkJ5QyxVQUY3QjtBQUdELEtBaEJELE1BZ0JPM0MsUUFBUSxDQUFDVSxjQUFULENBQXdCLFlBQXhCLEVBQXNDa0MsTUFBdEMsR0FBK0MsS0FBL0M7O0FBRVAsUUFBSTVDLFFBQVEsQ0FBQ1UsY0FBVCxDQUF3QixZQUF4QixNQUEwQyxJQUE5QyxFQUFvRDtBQUNsRCxVQUFJbUMsVUFBVSxHQUFHN0MsUUFBUSxDQUFDcUMsYUFBVCxDQUF1QixRQUF2QixDQUFqQjtBQUNBUSxnQkFBVSxDQUFDakMsRUFBWCxHQUFnQixZQUFoQjtBQUNBaUMsZ0JBQVUsQ0FBQ0wsU0FBWCxHQUF1QixRQUF2QjtBQUNBSyxnQkFBVSxDQUFDM0MsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMyQixTQUFyQztBQUNBLFVBQU1pQixNQUFNLEdBQUc5QyxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWY7QUFDQW9DLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQkYsVUFBcEIsRUFBZ0NDLE1BQU0sQ0FBQ0UsVUFBdkM7QUFDRCxLQVBELE1BT09oRCxRQUFRLENBQUNVLGNBQVQsQ0FBd0Isd0JBQXhCLEVBQWtEa0MsTUFBbEQsR0FBMkQsS0FBM0Q7O0FBRVAsUUFBSTVDLFFBQVEsQ0FBQ1UsY0FBVCxDQUF3QixhQUF4QixNQUEyQyxJQUEvQyxFQUFxRDtBQUNuRCxVQUFJdUMsb0JBQW9CLEdBQUdqRCxRQUFRLENBQUNxQyxhQUFULENBQXVCLEtBQXZCLENBQTNCO0FBQ0FZLDBCQUFvQixDQUFDckMsRUFBckIsR0FBMEIsc0JBQTFCO0FBQ0EsVUFBSXNDLFVBQVUsR0FBR2xELFFBQVEsQ0FBQ3FDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7QUFDQWEsZ0JBQVUsQ0FBQ3RDLEVBQVgsR0FBZ0IsV0FBaEI7QUFDQSxVQUFJdUMsV0FBVyxHQUFHbkQsUUFBUSxDQUFDcUMsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUNBYyxpQkFBVyxDQUFDdkMsRUFBWixHQUFpQixhQUFqQjtBQUNBdUMsaUJBQVcsQ0FBQ1gsU0FBWixHQUF3QixHQUF4QjtBQUNBVyxpQkFBVyxDQUFDakQsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0NrRCxVQUF0Qzs7QUFDQSxVQUFNTixPQUFNLEdBQUc5QyxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWY7O0FBQ0F1QywwQkFBb0IsQ0FBQ1IsTUFBckIsQ0FBNEJVLFdBQTVCO0FBQ0FGLDBCQUFvQixDQUFDUixNQUFyQixDQUE0QlMsVUFBNUI7O0FBQ0FKLGFBQU0sQ0FBQ0MsWUFBUCxDQUNFRSxvQkFERixFQUVFakQsUUFBUSxDQUFDVSxjQUFULENBQXdCLGFBQXhCLENBRkY7QUFJRCxLQWhCRCxNQWdCT1YsUUFBUSxDQUFDVSxjQUFULENBQXdCLHNCQUF4QixFQUFnRGtDLE1BQWhELEdBQXlELEtBQXpEOztBQUVQLFFBQUk1QyxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsYUFBeEIsTUFBMkMsSUFBL0MsRUFBcUQ7QUFDbkQsVUFBSTJDLFdBQVcsR0FBR3JELFFBQVEsQ0FBQ3FDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbEI7QUFDQWdCLGlCQUFXLENBQUN6QyxFQUFaLEdBQWlCLGFBQWpCO0FBQ0F5QyxpQkFBVyxDQUFDYixTQUFaLEdBQXdCLFFBQXhCO0FBQ0FhLGlCQUFXLENBQUNuRCxnQkFBWixDQUE2QixPQUE3QixFQUFzQzBCLEtBQXRDOztBQUNBLFVBQU1rQixRQUFNLEdBQUc5QyxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsaUJBQXhCLENBQWY7O0FBQ0FvQyxjQUFNLENBQUNKLFdBQVAsQ0FBbUJXLFdBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTVixVQUFULEdBQXNCO0FBQ3BCLFFBQUlqQixLQUFLLENBQUMzQixLQUFOLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCMkIsV0FBSyxDQUFDM0IsS0FBTixHQUFjLEVBQWQ7QUFDQUMsY0FBUSxDQUFDVSxjQUFULENBQXdCLGFBQXhCLEVBQXVDNEMsS0FBdkMsQ0FBNkNDLEtBQTdDLEdBQXFELEtBQXJEO0FBQ0QsS0FIRCxNQUdPO0FBQ0w3QixXQUFLLENBQUMzQixLQUFOLEdBQWMsQ0FBZDtBQUNBQyxjQUFRLENBQUNVLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUM0QyxLQUF2QyxDQUE2Q0MsS0FBN0MsR0FBcUQsSUFBckQ7QUFDRDtBQUNGOztBQUVELFdBQVNILFVBQVQsR0FBc0I7QUFDcEIsUUFBSUksSUFBSSxHQUFHeEQsUUFBUSxDQUFDVSxjQUFULENBQXdCLFdBQXhCLENBQVg7O0FBQ0EsWUFBUWlCLFdBQVI7QUFDRSxXQUFLLENBQUw7QUFDRUEsbUJBQVcsR0FBRyxFQUFkO0FBQ0E2QixZQUFJLENBQUNGLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixLQUFuQjtBQUVBM0IsYUFBSztBQUNMOztBQUNGLFdBQUssRUFBTDtBQUNFRCxtQkFBVyxHQUFHLEVBQWQ7QUFDQTZCLFlBQUksQ0FBQ0YsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEtBQW5CO0FBRUEzQixhQUFLO0FBQ0w7O0FBQ0YsV0FBSyxFQUFMO0FBQ0VELG1CQUFXLEdBQUcsRUFBZDtBQUNBNkIsWUFBSSxDQUFDRixLQUFMLENBQVdDLEtBQVgsR0FBbUIsS0FBbkI7QUFFQTNCLGFBQUs7QUFDTDs7QUFDRixXQUFLLEVBQUw7QUFDRUQsbUJBQVcsR0FBRyxFQUFkO0FBQ0E2QixZQUFJLENBQUNGLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixLQUFuQjtBQUNBM0IsYUFBSztBQUNMOztBQUNGLFdBQUssRUFBTDtBQUNFRCxtQkFBVyxHQUFHLEVBQWQ7QUFDQTZCLFlBQUksQ0FBQ0YsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLElBQW5CO0FBQ0EzQixhQUFLO0FBQ0w7O0FBQ0YsV0FBSyxFQUFMO0FBQ0VELG1CQUFXLEdBQUcsQ0FBZDtBQUNBNkIsWUFBSSxDQUFDRixLQUFMLENBQVdDLEtBQVgsR0FBbUIsS0FBbkI7QUFDQTNCLGFBQUs7QUFDTDtBQWpDSjtBQW1DRDs7QUFFRCxXQUFTNkIsYUFBVCxHQUF5QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBRyxLQUFLLEtBQUsvQixXQUFWLENBQVo7O0FBQ0EsU0FBSyxJQUFJZ0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLaEMsV0FBekIsRUFBc0NnQyxDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDO0FBQ0EsVUFBSUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEdBQTNCLENBQVY7QUFFQSxVQUFNQyxNQUFNLEdBQUcsSUFBSUMseURBQUosQ0FDYmpELE1BRGEsRUFFYmtELGNBQWMsQ0FBQ04sR0FBRCxFQUFNLEdBQU4sQ0FGRCxFQUdiRixLQUhhLEVBSWJFLEdBSmEsRUFLYmxDLEtBTGEsQ0FBZjtBQVFBRixXQUFLLENBQUMyQyxJQUFOLENBQVdILE1BQVg7QUFDRDtBQUNGOztBQUVELFdBQVNJLFNBQVQsR0FBcUI7QUFDbkJwRCxVQUFNLENBQUNxRCxXQUFQO0FBQ0E1QyxhQUFTLEdBQUcsSUFBWjtBQUNBRCxTQUFLLEdBQUcsRUFBUjtBQUNEOztBQUVELFdBQVNJLEtBQVQsR0FBaUI7QUFDZk8scUJBQWlCO0FBQ2pCaUMsYUFBUztBQUNUWCxpQkFBYTtBQUNkOztBQUVELE1BQU1hLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSUMsR0FBRyxHQUFHLENBQVY7QUFDQXZELFVBQU0sQ0FBQ3FELFdBQVA7O0FBQ0EsU0FBSyxJQUFJVixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbkMsS0FBSyxDQUFDZ0QsTUFBMUIsRUFBa0NiLENBQUMsRUFBbkMsRUFBdUM7QUFDckNuQyxXQUFLLENBQUNtQyxDQUFELENBQUwsQ0FBU2MsSUFBVCxDQUFjRixHQUFkO0FBQ0FBLFNBQUcsSUFBSS9DLEtBQUssQ0FBQ21DLENBQUQsQ0FBTCxDQUFTRCxLQUFULEdBQWlCMUMsTUFBTSxDQUFDQSxNQUFQLENBQWMwRCxLQUF0QztBQUNEOztBQUNELFFBQUlqRCxTQUFKLEVBQWU7QUFDYmtELFlBQU0sQ0FBQ0MscUJBQVAsQ0FBNkJOLFNBQTdCO0FBQ0Q7QUFDRixHQVZEOztBQVlBSyxRQUFNLENBQUNDLHFCQUFQLENBQTZCTixTQUE3QixFQS9Mb0IsQ0FnTXBCO0FBQ0E7O0FBQ0EsV0FBU0osY0FBVCxDQUF3QlcsVUFBeEIsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQzFDLFFBQUlDLFFBQVEsR0FBR2xCLElBQUksQ0FBQ21CLElBQUwsQ0FBV0gsVUFBVSxHQUFHQyxNQUFkLEdBQXdCLEdBQWxDLENBQWY7QUFFQSxRQUFJRyxNQUFNLEdBQUcsSUFBYixDQUgwQyxDQUd2Qjs7QUFDbkIsUUFBSUMsTUFBTSxHQUFHSCxRQUFRLENBQUNJLFFBQVQsQ0FBa0IsRUFBbEIsQ0FBYjtBQUNBLFFBQUlKLFFBQVEsR0FBRyxFQUFmLEVBQW1CRyxNQUFNLEdBQUcsTUFBTUEsTUFBZjtBQUVuQixzQkFBV0QsTUFBTSxHQUFHQyxNQUFwQjtBQUNEOztBQUVELFdBQVNFLFdBQVQsR0FBdUI7QUFDckJwRixZQUFRLENBQUNVLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NrQyxNQUF0QyxHQUErQyxJQUEvQztBQUNBNUMsWUFBUSxDQUFDVSxjQUFULENBQXdCLHdCQUF4QixFQUFrRGtDLE1BQWxELEdBQTJELElBQTNEO0FBQ0E1QyxZQUFRLENBQUNVLGNBQVQsQ0FBd0Isc0JBQXhCLEVBQWdEa0MsTUFBaEQsR0FBeUQsSUFBekQ7QUFDQSxRQUFJUyxXQUFXLEdBQUdyRCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbEI7QUFDQTJDLGVBQVcsQ0FBQ1QsTUFBWixHQUFxQixJQUFyQjtBQUNBUyxlQUFXLENBQUN2QyxTQUFaLENBQXNCTyxHQUF0QixDQUEwQixhQUExQjtBQUNEOztBQUVELFdBQVNnRSxhQUFULEdBQXlCO0FBQ3ZCLFFBQUloQyxXQUFXLEdBQUdyRCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbEI7QUFDQTJDLGVBQVcsQ0FBQ1QsTUFBWixHQUFxQixLQUFyQjtBQUNBUyxlQUFXLENBQUN2QyxTQUFaLENBQXNCTSxNQUF0QixDQUE2QixhQUE3QjtBQUNBVSxxQkFBaUIsQ0FBQyxLQUFELENBQWpCO0FBQ0Q7O0FBRUQsV0FBU0MsT0FBVCxHQUFtQjtBQUNqQnFELGVBQVc7QUFDWEUsYUFBUyxDQUFDOUQsS0FBRCxFQUFRLENBQVIsRUFBV0EsS0FBSyxDQUFDZ0QsTUFBTixHQUFlLENBQTFCLENBQVQsQ0FBc0NlLElBQXRDLENBQTJDLFlBQU07QUFDL0NGLG1CQUFhO0FBQ2QsS0FGRDtBQUdEOztBQUVELFdBQVNyRCxPQUFULEdBQW1CO0FBQ2pCb0QsZUFBVztBQUNYSSxjQUFVLENBQUNoRSxLQUFELENBQVYsQ0FBa0IrRCxJQUFsQixDQUF1QixZQUFNO0FBQzNCRixtQkFBYTtBQUNkLEtBRkQ7QUFHRDs7QUFFRCxXQUFTcEQsT0FBVCxHQUFtQjtBQUNqQm1ELGVBQVc7QUFDWEssYUFBUyxDQUFDakUsS0FBRCxDQUFULENBQWlCK0QsSUFBakIsQ0FBc0IsWUFBTTtBQUMxQkYsbUJBQWE7QUFDZCxLQUZEO0FBR0Q7O0FBQ0QsV0FBU25ELE9BQVQsR0FBbUI7QUFDakJrRCxlQUFXO0FBQ1hNLGlCQUFhLENBQUNsRSxLQUFELENBQWIsQ0FBcUIrRCxJQUFyQixDQUEwQixZQUFNO0FBQzlCRixtQkFBYTtBQUNkLEtBRkQ7QUFHRDs7QUFFRCxXQUFTRyxVQUFULENBQW9CRyxHQUFwQixFQUF5QjtBQUN2QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUIsVUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBQ0EsVUFBSW5DLENBQUMsR0FBRyxDQUFDLENBQVQ7O0FBQ0EsVUFBTW9DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsWUFBSUQsU0FBSixFQUFlO0FBQ2JBLG1CQUFTLEdBQUcsS0FBWjtBQUNBbkMsV0FBQztBQUNEcUMsbUJBQVMsQ0FBQyxDQUFELENBQVQ7QUFDRCxTQUpELE1BSU9ILE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDUixPQU5EOztBQVFBLFVBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBVztBQUMzQkMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSUQsS0FBSyxHQUFHTixHQUFHLENBQUNuQixNQUFKLEdBQWEsQ0FBYixHQUFpQmIsQ0FBN0IsRUFBZ0M7QUFDOUI7QUFDQWdDLGVBQUcsQ0FBQ00sS0FBRCxDQUFILENBQVdFLEtBQVg7O0FBQ0EsZ0JBQUlSLEdBQUcsQ0FBQ00sS0FBRCxDQUFILENBQVdyQyxHQUFYLEdBQWlCK0IsR0FBRyxDQUFDTSxLQUFLLEdBQUcsQ0FBVCxDQUFILENBQWVyQyxHQUFwQyxFQUF5QztBQUN2QyxrQkFBTXdDLElBQUksR0FBR1QsR0FBRyxDQUFDTSxLQUFELENBQWhCO0FBQ0FOLGlCQUFHLENBQUNNLEtBQUQsQ0FBSCxHQUFhTixHQUFHLENBQUNNLEtBQUssR0FBRyxDQUFULENBQWhCO0FBQ0FOLGlCQUFHLENBQUNNLEtBQUssR0FBRyxDQUFULENBQUgsR0FBaUJHLElBQWpCO0FBQ0FOLHVCQUFTLEdBQUcsSUFBWjtBQUNBSCxpQkFBRyxDQUFDTSxLQUFELENBQUgsQ0FBV0ksS0FBWDtBQUNEOztBQUNESixpQkFBSyxJQUFJLENBQVQ7QUFDQUQscUJBQVMsQ0FBQ0MsS0FBRCxDQUFUO0FBQ0QsV0FaRCxNQVlPRixTQUFTO0FBQ2pCLFNBZFMsRUFjUHJFLEtBQUssQ0FBQzNCLEtBZEMsQ0FBVjtBQWVELE9BaEJEOztBQWlCQWdHLGVBQVM7QUFDVixLQTdCTSxDQUFQO0FBOEJEOztBQUNELFdBQVNOLFNBQVQsQ0FBbUJFLEdBQW5CLEVBQXdCO0FBQ3RCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixVQUFJUyxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxVQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCTCxrQkFBVSxDQUFDLFlBQU07QUFDZixjQUFJckMsSUFBSSxDQUFDQyxLQUFMLENBQVcsTUFBTXdDLEdBQWpCLElBQXdCLENBQTVCLEVBQStCO0FBQzdCRSx3QkFBWSxDQUFDYixHQUFELEVBQU1XLEdBQU4sQ0FBWixDQUF1QmYsSUFBdkIsQ0FBNEIsWUFBTTtBQUNoQ2UsaUJBQUcsSUFBSSxFQUFQO0FBQ0FDLHVCQUFTO0FBQ1YsYUFIRDtBQUlELFdBTEQsTUFLT1YsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNSLFNBUFMsRUFPUG5FLEtBQUssQ0FBQzNCLEtBUEMsQ0FBVjtBQVFELE9BVEQ7O0FBVUF3RyxlQUFTO0FBQ1YsS0FiTSxDQUFQO0FBY0QsR0F0U21CLENBdVNwQjs7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ2IsR0FBRCxFQUFNVyxHQUFOLEVBQWM7QUFDakMsV0FBTyxJQUFJVixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzlCLFVBQUlZLFdBQVcsR0FBRyxJQUFJckcsS0FBSixDQUFVdUYsR0FBRyxDQUFDbkIsTUFBZCxDQUFsQjtBQUNBLFVBQUlrQyxNQUFNLEdBQUcsSUFBSXRHLEtBQUosQ0FBVSxFQUFWLEVBQWN1RyxJQUFkLENBQW1CLENBQW5CLENBQWI7O0FBQ0EsV0FBSyxJQUFJaEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dDLEdBQUcsQ0FBQ25CLE1BQXhCLEVBQWdDYixDQUFDLEVBQWpDO0FBQ0UrQyxjQUFNLENBQUM3QyxJQUFJLENBQUNDLEtBQUwsQ0FBVzZCLEdBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPQyxHQUFQLEdBQWEwQyxHQUF4QixJQUErQixFQUFoQyxDQUFOO0FBREY7O0FBRUEsV0FBSyxJQUFJM0MsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRyxFQUFwQixFQUF3QkEsRUFBQyxFQUF6QjtBQUE2QitDLGNBQU0sQ0FBQy9DLEVBQUQsQ0FBTixJQUFhK0MsTUFBTSxDQUFDL0MsRUFBQyxHQUFHLENBQUwsQ0FBbkI7QUFBN0I7O0FBRUEsV0FBSyxJQUFJQSxHQUFDLEdBQUdnQyxHQUFHLENBQUNuQixNQUFKLEdBQWEsQ0FBMUIsRUFBNkJiLEdBQUMsSUFBSSxDQUFsQyxFQUFxQ0EsR0FBQyxFQUF0QyxFQUEwQztBQUN4QyxZQUFNaUQsR0FBRyxHQUFHL0MsSUFBSSxDQUFDQyxLQUFMLENBQVc2QixHQUFHLENBQUNoQyxHQUFELENBQUgsQ0FBT0MsR0FBUCxHQUFhMEMsR0FBeEIsSUFBK0IsRUFBM0M7QUFDQUcsbUJBQVcsQ0FBQ0MsTUFBTSxDQUFDRSxHQUFELENBQU4sR0FBYyxDQUFmLENBQVgsR0FBK0I7QUFDN0JoRCxhQUFHLEVBQUUrQixHQUFHLENBQUNoQyxHQUFELENBQUgsQ0FBT0MsR0FEaUI7QUFFN0JpRCxlQUFLLEVBQUVsQixHQUFHLENBQUNoQyxHQUFELENBQUgsQ0FBT2tELEtBRmU7QUFHN0JDLHNCQUFZLEVBQUVuQixHQUFHLENBQUNoQyxHQUFELENBQUgsQ0FBT21EO0FBSFEsU0FBL0I7QUFLQUosY0FBTSxDQUFDRSxHQUFELENBQU47QUFDRDs7QUFDRCxVQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDcEQsQ0FBRCxFQUFPO0FBQ3hCdUMsa0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSXZDLENBQUMsS0FBSyxDQUFDLENBQVgsRUFBY3FELFlBQVksQ0FBQyxDQUFELENBQVosQ0FBZCxLQUNLO0FBQ0hyQixlQUFHLENBQUNoQyxDQUFELENBQUgsQ0FBT3dDLEtBQVA7QUFDQXhDLGFBQUM7QUFDRG9ELHNCQUFVLENBQUNwRCxDQUFELENBQVY7QUFDRDtBQUNGLFNBUFMsRUFPUGpDLEtBQUssQ0FBQzNCLEtBUEMsQ0FBVjtBQVFELE9BVEQ7O0FBVUFnSCxnQkFBVSxDQUFDcEIsR0FBRyxDQUFDbkIsTUFBSixHQUFhLENBQWQsQ0FBVjs7QUFDQSxVQUFNd0MsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3JELENBQUQsRUFBTztBQUMxQnVDLGtCQUFVLENBQUMsWUFBTTtBQUNmLGNBQUlQLEdBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPQyxHQUFQLEtBQWU2QyxXQUFXLENBQUM5QyxDQUFELENBQVgsQ0FBZUMsR0FBbEMsRUFBdUM7QUFDckMrQixlQUFHLENBQUNoQyxDQUFELENBQUgsQ0FBT0MsR0FBUCxHQUFhNkMsV0FBVyxDQUFDOUMsQ0FBRCxDQUFYLENBQWVDLEdBQTVCO0FBQ0ErQixlQUFHLENBQUNoQyxDQUFELENBQUgsQ0FBT21ELFlBQVAsR0FBc0JMLFdBQVcsQ0FBQzlDLENBQUQsQ0FBWCxDQUFlbUQsWUFBckM7QUFDQW5CLGVBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPa0QsS0FBUCxHQUFlSixXQUFXLENBQUM5QyxDQUFELENBQVgsQ0FBZWtELEtBQTlCO0FBRUFsQixlQUFHLENBQUNoQyxDQUFELENBQUgsQ0FBTzBDLEtBQVA7QUFDRCxXQU5ELE1BTU9WLEdBQUcsQ0FBQ2hDLENBQUQsQ0FBSCxDQUFPd0MsS0FBUDs7QUFDUHhDLFdBQUM7QUFDRCxjQUFJQSxDQUFDLEtBQUtnQyxHQUFHLENBQUNuQixNQUFkLEVBQXNCcUIsT0FBTyxDQUFDLElBQUQsQ0FBUCxDQUF0QixLQUNLbUIsWUFBWSxDQUFDckQsQ0FBRCxDQUFaO0FBQ04sU0FYUyxFQVdQakMsS0FBSyxDQUFDM0IsS0FYQyxDQUFWO0FBWUQsT0FiRDtBQWNELEtBekNNLENBQVA7QUEwQ0QsR0EzQ0Q7O0FBNkNBLFdBQVMyRixhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUMxQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDOUIsVUFBSWxDLENBQUMsR0FBRyxDQUFSO0FBQ0EsVUFBSXNELEdBQUcsR0FBRztBQUFFckQsV0FBRyxFQUFFLEdBQVA7QUFBWWdELFdBQUcsRUFBRTtBQUFqQixPQUFWOztBQUNBLFVBQU1iLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsWUFBSXBDLENBQUMsR0FBR2dDLEdBQUcsQ0FBQ25CLE1BQVosRUFBb0I7QUFDbEJ5QyxhQUFHLENBQUNyRCxHQUFKLEdBQVUsR0FBVjtBQUNBc0QsbUJBQVMsQ0FBQ3ZELENBQUQsQ0FBVDtBQUNELFNBSEQsTUFHT2tDLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDUixPQUxELENBSDhCLENBVTlCOzs7QUFFQSxVQUFNcUIsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCakIsa0JBQVUsQ0FBQyxZQUFNO0FBQ2YsY0FBSWlCLENBQUMsR0FBR3hCLEdBQUcsQ0FBQ25CLE1BQVosRUFBb0I7QUFDbEIsZ0JBQUltQixHQUFHLENBQUN3QixDQUFELENBQUgsQ0FBT3ZELEdBQVAsR0FBYXFELEdBQUcsQ0FBQ3JELEdBQXJCLEVBQTBCcUQsR0FBRyxHQUFHO0FBQUVyRCxpQkFBRyxFQUFFK0IsR0FBRyxDQUFDd0IsQ0FBRCxDQUFILENBQU92RCxHQUFkO0FBQW1CZ0QsaUJBQUcsRUFBRU87QUFBeEIsYUFBTjtBQUMxQnhCLGVBQUcsQ0FBQ3dCLENBQUQsQ0FBSCxDQUFPaEIsS0FBUDtBQUNBZSxxQkFBUyxDQUFDQyxDQUFDLEdBQUcsQ0FBTCxDQUFUO0FBQ0QsV0FKRCxNQUlPO0FBQ0wsZ0JBQU1mLElBQUksR0FBR1QsR0FBRyxDQUFDaEMsQ0FBRCxDQUFoQjtBQUNBZ0MsZUFBRyxDQUFDaEMsQ0FBRCxDQUFILEdBQVNnQyxHQUFHLENBQUNzQixHQUFHLENBQUNMLEdBQUwsQ0FBWjtBQUNBakIsZUFBRyxDQUFDc0IsR0FBRyxDQUFDTCxHQUFMLENBQUgsR0FBZVIsSUFBZjtBQUNBVCxlQUFHLENBQUNoQyxDQUFELENBQUgsQ0FBTzBDLEtBQVA7QUFDQVYsZUFBRyxDQUFDc0IsR0FBRyxDQUFDTCxHQUFMLENBQUgsQ0FBYVAsS0FBYjtBQUNBMUMsYUFBQztBQUNEb0MscUJBQVM7QUFDVjtBQUNGLFNBZFMsRUFjUHJFLEtBQUssQ0FBQzNCLEtBZEMsQ0FBVjtBQWVELE9BaEJEOztBQWtCQWdHLGVBQVMsQ0FBQyxDQUFELENBQVQ7QUFDRCxLQS9CTSxDQUFQO0FBZ0NEOztBQUVELFdBQVNULFNBQVQsQ0FBbUJLLEdBQW5CLEVBQXdCTSxLQUF4QixFQUErQm1CLEdBQS9CLEVBQWdEO0FBQUEsUUFBWkMsTUFBWSx1RUFBSCxDQUFHO0FBQzlDO0FBQ0EsV0FBTyxJQUFJekIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBYTtBQUM5QixVQUFJSSxLQUFLLEdBQUdtQixHQUFaLEVBQWlCO0FBQ2ZFLDJCQUFtQixDQUFDM0IsR0FBRCxFQUFNTSxLQUFOLEVBQWFtQixHQUFiLENBQW5CLENBQXFDN0IsSUFBckMsQ0FBMEMsVUFBQ2dDLEVBQUQsRUFBUTtBQUNoRDFCLGlCQUFPLENBQ0xQLFNBQVMsQ0FBQ0ssR0FBRCxFQUFNTSxLQUFOLEVBQWFzQixFQUFFLEdBQUcsQ0FBbEIsQ0FBVCxDQUE4QmhDLElBQTlCLENBQW1DO0FBQUEsbUJBQ2pDRCxTQUFTLENBQUNLLEdBQUQsRUFBTTRCLEVBQUUsR0FBRyxDQUFYLEVBQWNILEdBQWQsQ0FEd0I7QUFBQSxXQUFuQyxDQURLLENBQVA7QUFLRCxTQU5EO0FBT0QsT0FSRCxNQVFPdkIsT0FBTztBQUNmLEtBVk0sQ0FBUDtBQVdEOztBQUVELFdBQVN5QixtQkFBVCxDQUE2QjNCLEdBQTdCLEVBQWtDTSxLQUFsQyxFQUF5Q21CLEdBQXpDLEVBQThDO0FBQzVDLFdBQU8sSUFBSXhCLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CMkIsTUFBbkIsRUFBMkI7QUFDNUMsVUFBSUMsS0FBSyxHQUFHOUIsR0FBRyxDQUFDeUIsR0FBRCxDQUFILENBQVN4RCxHQUFyQjtBQUNBLFVBQUlELENBQUMsR0FBR3NDLEtBQUssR0FBRyxDQUFoQixDQUY0QyxDQUV6Qjs7QUFDbkIsVUFBSWtCLENBQUMsR0FBR2xCLEtBQUssR0FBRyxDQUFoQjs7QUFFQSxVQUFNeUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDUCxDQUFELEVBQU87QUFDM0IsWUFBSXhCLEdBQUcsQ0FBQ3dCLENBQUQsQ0FBSCxDQUFPdkQsR0FBUCxJQUFjNkQsS0FBbEIsRUFBeUI7QUFDdkI5RCxXQUFDOztBQUNELGNBQUl3RCxDQUFDLEtBQUtDLEdBQVYsRUFBZTtBQUNiekIsZUFBRyxDQUFDeUIsR0FBRCxDQUFILENBQVNPLFVBQVQsR0FEYSxDQUNVOztBQUN2QmhDLGVBQUcsQ0FBQ00sS0FBRCxDQUFILENBQVcwQixVQUFYO0FBQ0Q7O0FBQ0QsY0FBSWhFLENBQUMsS0FBS3NDLEtBQU4sSUFBZWtCLENBQUMsS0FBS0MsR0FBekIsRUFBOEJ6QixHQUFHLENBQUNNLEtBQUQsQ0FBSCxDQUFXMkIsVUFBWDtBQUU5QixjQUFNeEIsSUFBSSxHQUFHVCxHQUFHLENBQUNoQyxDQUFELENBQWhCO0FBQ0FnQyxhQUFHLENBQUNoQyxDQUFELENBQUgsR0FBU2dDLEdBQUcsQ0FBQ3dCLENBQUQsQ0FBWjtBQUNBeEIsYUFBRyxDQUFDd0IsQ0FBRCxDQUFILEdBQVNmLElBQVQ7QUFDQVQsYUFBRyxDQUFDaEMsQ0FBRCxDQUFILENBQU8wQyxLQUFQO0FBQ0FWLGFBQUcsQ0FBQ3dCLENBQUQsQ0FBSCxDQUFPaEIsS0FBUDs7QUFDQSxjQUFJZ0IsQ0FBQyxLQUFLQyxHQUFWLEVBQWU7QUFDYnZCLG1CQUFPLENBQUNsQyxDQUFELENBQVA7QUFDRDtBQUNGLFNBaEJELE1BZ0JPO0FBQ0xnQyxhQUFHLENBQUN3QixDQUFELENBQUgsQ0FBT2hCLEtBQVAsR0FESyxDQUVMO0FBQ0E7QUFDRDtBQUNGLE9BdEJEOztBQXVCQSxVQUFNMEIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCM0Isa0JBQVUsQ0FBQyxZQUFNO0FBQ2ZQLGFBQUcsQ0FBQ3lCLEdBQUQsQ0FBSCxDQUFTUSxVQUFUOztBQUNBLGNBQUlULENBQUMsR0FBR0MsR0FBUixFQUFhO0FBQ1hELGFBQUM7QUFDRE8seUJBQWEsQ0FBQ1AsQ0FBRCxDQUFiO0FBQ0EsZ0JBQUlBLENBQUMsS0FBS0MsR0FBVixFQUFlUyxjQUFjO0FBQzlCO0FBQ0YsU0FQUyxFQU9QbkcsS0FBSyxDQUFDM0IsS0FQQyxDQUFWO0FBUUQsT0FURDs7QUFVQThILG9CQUFjO0FBQ2YsS0F2Q00sQ0FBUDtBQXdDRDtBQUNGLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwZks1RyxhO0FBQ0oseUJBQVk2RyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUs5RyxNQUFMLEdBQWNoQixRQUFRLENBQUNxQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxTQUFLckIsTUFBTCxDQUFZMEQsS0FBWixHQUFvQkMsTUFBTSxDQUFDb0QsVUFBM0I7QUFDQSxTQUFLL0csTUFBTCxDQUFZZ0gsTUFBWixHQUFxQmhJLFFBQVEsQ0FBQ2lJLElBQVQsQ0FBY0MsWUFBZCxHQUE2QixLQUFLQyxTQUFMLEVBQWxEO0FBQ0EsU0FBS25ILE1BQUwsQ0FBWW9ILFlBQVosQ0FBeUIsSUFBekIsRUFBK0IsUUFBL0I7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS3JILE1BQUwsQ0FBWXNILFVBQVosQ0FBdUIsSUFBdkIsQ0FBWDtBQUNEOzs7O1dBQ0Qsd0JBQWU7QUFDYnRJLGNBQVEsQ0FBQ2lJLElBQVQsQ0FBY3hGLE1BQWQsQ0FBcUIsS0FBS3pCLE1BQTFCO0FBQ0Q7OztXQUVELHVCQUFjO0FBQ1osV0FBS3FILEdBQUwsQ0FBU0UsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFLdkgsTUFBTCxDQUFZMEQsS0FBckMsRUFBNEMsS0FBSzFELE1BQUwsQ0FBWWdILE1BQXhEO0FBQ0EsV0FBS2hILE1BQUwsQ0FBWTBELEtBQVosR0FBb0JDLE1BQU0sQ0FBQ29ELFVBQTNCO0FBQ0EsV0FBSy9HLE1BQUwsQ0FBWWdILE1BQVosR0FBcUJoSSxRQUFRLENBQUNpSSxJQUFULENBQWNDLFlBQWQsR0FBNkIsS0FBS0MsU0FBTCxFQUFsRDtBQUNEOzs7V0FDRCxrQkFBU3RCLEtBQVQsRUFBZ0I7QUFDZCxXQUFLMkIsU0FBTCxHQUFpQjNCLEtBQWpCO0FBQ0E3RyxjQUFRLENBQUNpSSxJQUFULENBQWMzRSxLQUFkLENBQW9CbUYsZUFBcEIsR0FBc0M1QixLQUF0QztBQUNBN0csY0FBUSxDQUFDaUksSUFBVCxDQUFjM0UsS0FBZCxDQUFvQm9GLE1BQXBCO0FBQ0Q7OztXQUNELHFCQUFZO0FBQ1YsVUFBSUMsT0FBTyxHQUFHdkksS0FBSyxDQUFDQyxJQUFOLENBQVdMLFFBQVEsQ0FBQ2lJLElBQVQsQ0FBY1csUUFBekIsQ0FBZDtBQUNBLFVBQUlDLEdBQUcsR0FBRyxDQUFWOztBQUNBLFdBQUssSUFBSWxGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJrRixXQUFHLElBQUloRixJQUFJLENBQUNtQixJQUFMLENBQVUyRCxPQUFPLENBQUNoRixDQUFELENBQVAsQ0FBV3VFLFlBQXJCLENBQVA7QUFDRDs7QUFDRCxhQUFPVyxHQUFHLEdBQUcsRUFBYjtBQUNEOzs7Ozs7QUFHWTVILDRFQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztJQ2hDTWdELFEsR0FDSixrQkFBWWpELE1BQVosRUFBb0I2RixLQUFwQixFQUEyQm5ELEtBQTNCLEVBQWtDRSxHQUFsQyxFQUF1Q2xDLEtBQXZDLEVBQThDO0FBQUE7O0FBQUE7O0FBQzVDLE9BQUtWLE1BQUwsR0FBY0EsTUFBZDtBQUNBLE9BQUtxSCxHQUFMLEdBQVcsS0FBS3JILE1BQUwsQ0FBWXFILEdBQXZCO0FBQ0EsT0FBSzNFLEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUttRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxZQUFMLEdBQW9CRCxLQUFwQjtBQUNBLE9BQUtpQyxNQUFMLEdBQWMsS0FBZDtBQUNBLE9BQUtsRixHQUFMLEdBQVdBLEdBQVg7QUFDQSxPQUFLbEMsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS3FILE1BQUwsR0FBYyxLQUFkOztBQUNBLE9BQUsxQyxLQUFMLEdBQWEsWUFBTTtBQUNqQixRQUFJLENBQUMsS0FBSSxDQUFDMEMsTUFBVixFQUFrQjtBQUNoQixXQUFJLENBQUNsQyxLQUFMLEdBQWEsS0FBYjtBQUNBWCxnQkFBVSxDQUFDLFlBQU07QUFDZixhQUFJLENBQUNXLEtBQUwsR0FBYSxLQUFJLENBQUNDLFlBQWxCO0FBQ0QsT0FGUyxFQUVQLEtBQUksQ0FBQ3BGLEtBQUwsQ0FBVzNCLEtBQVgsR0FBbUIsQ0FGWixDQUFWO0FBR0Q7QUFDRixHQVBEOztBQVNBLE9BQUswRSxJQUFMLEdBQVksVUFBQzRDLE1BQUQsRUFBWTtBQUN0QixTQUFJLENBQUNBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFFBQUkyQixhQUFhLEdBQUdoSixRQUFRLENBQUNVLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBcEI7QUFDQSxRQUFJMkgsR0FBRyxHQUFHLEtBQUksQ0FBQ3JILE1BQUwsQ0FBWXFILEdBQXRCO0FBQ0EsUUFBSVksRUFBRSxHQUFHRCxhQUFhLENBQUN0RSxLQUF2QjtBQUNBLFFBQUl3RSxFQUFFLEdBQUdGLGFBQWEsQ0FBQ2hCLE1BQXZCO0FBRUEsUUFBSW1CLEVBQUUsR0FBR0QsRUFBRSxHQUFHLENBQWQ7QUFDQSxRQUFJRSxFQUFFLEdBQUdILEVBQUUsR0FBRyxDQUFkO0FBRUEsUUFBSUksUUFBUSxHQUFHO0FBQ2I7QUFDQTtBQUNBQyxRQUFFLEVBQUVGLEVBSFM7QUFJYkcsUUFBRSxFQUFFSixFQUpTO0FBS2I7QUFDQTtBQUNBSyxRQUFFLEVBQUUsS0FBSSxDQUFDbkMsTUFQSTtBQVFib0MsUUFBRSxFQUFFUCxFQVJTO0FBU2I7QUFDQVEsUUFBRSxFQUFFLEtBQUksQ0FBQ3JDLE1BQUwsR0FBYyxLQUFJLENBQUMzRCxLQUFMLEdBQWFzRixhQUFhLENBQUN0RSxLQVZoQztBQVdiaUYsUUFBRSxFQUFFVDtBQVhTLEtBQWY7QUFjQWIsT0FBRyxDQUFDdUIsU0FBSjtBQUNBdkIsT0FBRyxDQUFDd0IsTUFBSixDQUFXUixRQUFRLENBQUNDLEVBQXBCLEVBQXdCRCxRQUFRLENBQUNFLEVBQWpDO0FBQ0FsQixPQUFHLENBQUN5QixNQUFKLENBQVdULFFBQVEsQ0FBQ0csRUFBcEIsRUFBd0JILFFBQVEsQ0FBQ0ksRUFBakM7QUFDQXBCLE9BQUcsQ0FBQ3lCLE1BQUosQ0FBV1QsUUFBUSxDQUFDSyxFQUFwQixFQUF3QkwsUUFBUSxDQUFDTSxFQUFqQztBQUNBdEIsT0FBRyxDQUFDeUIsTUFBSixDQUFXVCxRQUFRLENBQUNDLEVBQXBCLEVBQXdCRCxRQUFRLENBQUNFLEVBQWpDO0FBQ0FsQixPQUFHLENBQUMwQixTQUFKO0FBRUExQixPQUFHLENBQUMyQixTQUFKLEdBQWdCLEtBQUksQ0FBQ25ELEtBQXJCO0FBQ0F3QixPQUFHLENBQUM0QixXQUFKLEdBQWtCLEtBQUksQ0FBQ3BELEtBQXZCO0FBQ0F3QixPQUFHLENBQUMxQixJQUFKO0FBRUEwQixPQUFHLENBQUM2QixNQUFKO0FBQ0QsR0FwQ0Q7O0FBc0NBLE9BQUsvRCxLQUFMLEdBQWEsWUFBTTtBQUNqQixRQUFJLENBQUMsS0FBSSxDQUFDNEMsTUFBVixFQUFrQjtBQUNoQixXQUFJLENBQUNsQyxLQUFMLEdBQWEsU0FBYjtBQUNBWCxnQkFBVSxDQUFDLFlBQU07QUFDZixhQUFJLENBQUNXLEtBQUwsR0FBYSxLQUFJLENBQUNDLFlBQWxCO0FBQ0QsT0FGUyxFQUVQLEtBQUksQ0FBQ3BGLEtBQUwsQ0FBVzNCLEtBRkosQ0FBVjtBQUdEO0FBQ0YsR0FQRDs7QUFTQSxPQUFLNkgsVUFBTCxHQUFrQixZQUFNO0FBQ3RCLFNBQUksQ0FBQ21CLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBSSxDQUFDbEMsS0FBTCxHQUFhLFNBQWIsQ0FGc0IsQ0FHdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQVZEOztBQVlBLE9BQUtjLFVBQUwsR0FBa0IsWUFBTTtBQUN0QixTQUFJLENBQUNvQixNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUksQ0FBQ2xDLEtBQUwsR0FBYSxLQUFJLENBQUNDLFlBQWxCO0FBQ0QsR0FIRDs7QUFLQSxPQUFLbEYsS0FBTCxHQUFhLFlBQU07QUFDakIsUUFBSTtBQUNGLFdBQUksQ0FBQ3lHLEdBQUwsQ0FBU0UsU0FBVCxDQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixLQUFJLENBQUN2SCxNQUFMLENBQVkwRCxLQUFyQyxFQUE0QyxLQUFJLENBQUMxRCxNQUFMLENBQVlnSCxNQUF4RDtBQUNELEtBRkQsQ0FFRSxPQUFPbUMsQ0FBUCxFQUFVO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQzs7QUFHWWxHLHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDOUZBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcblxuaW1wb3J0IGNhbnZhc0V4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9jYW52YXNcIjtcbmltcG9ydCBUcmlhbmdsZSBmcm9tIFwiLi9zY3JpcHRzL3RyaWFuZ2xlXCI7XG5cbmxldCBhbGdvU2VsZWN0ID0geyB2YWx1ZTogbnVsbCB9O1xuLy8gVE9ETzogbG9vcCBvdmVyIGNsYXNzIGxpc3RcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcXVpY2stc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJxdWljay1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1YmJsZS1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcImJ1YmJsZS1zb3J0XCIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhZGl4LXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwicmFkaXgtc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3Rpb24tc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJzZWxlY3Rpb24tc29ydFwiKTtcbn0pO1xuQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9nZ2xlLW1vZGFsXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxIYW5kbGVyKCk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG93LXRvLXRhYlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBNb2RhbFRhYlN3aXRjaChcImhvdy10by10YWJcIik7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhYm91dC10YWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgTW9kYWxUYWJTd2l0Y2goXCJhYm91dC10YWJcIik7XG59KTtcblxuZnVuY3Rpb24gTW9kYWxUYWJTd2l0Y2goaWQpIHtcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWwtdGFic1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJvblwiKTtcbiAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcIm9mZlwiKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5kaXNhYmxlZCA9IHRydWU7XG4gIC8vVE9ETzogYWRkIHNlbGVjdGVkIHN0eWxpbmcgb24gaWRcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcImludmlzaWJsZVwiKTtcbiAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVcIik7XG4gIH0pO1xufVxuY29uc3QgY2FudmFzID0gbmV3IGNhbnZhc0V4YW1wbGUoKTtcbmNhbnZhcy5jcmVhdGVDYW52YXMoKTtcblxuZnVuY3Rpb24gc3RhcnRIYW5kbGVyKGlkKSB7XG4gIGlmIChhbGdvU2VsZWN0LnZhbHVlID09PSBudWxsKSB7XG4gICAgbXlGdW5jKGFsZ29TZWxlY3QpO1xuICB9XG4gIGFsZ29TZWxlY3QudmFsdWUgPSBpZDtcblxuICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhbGdvXCIpKS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkQnV0dG9uXCIpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbn1cblxuZnVuY3Rpb24gbW9kYWxIYW5kbGVyKCkge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXR1dG9yaWFsXCIpO1xuICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1tb2RhbFwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbW9kYWxcIik7XG59XG5cbmZ1bmN0aW9uIG15RnVuYyhhbGdvKSB7XG4gIGxldCBteVRyaSA9IFtdO1xuICBsZXQgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgbGV0IHNwZWVkID0geyB2YWx1ZTogNSB9O1xuICBsZXQgc2xpY2VGYWN0b3IgPSA4OyAvLyBpbmNyZWFzaW5nIHdpbGwgY3JlYXRlIG1vcmUgdHJpYW5nbGUgc2xpY2VzXG5cbiAgcmVzZXQoKTtcblxuICBmdW5jdGlvbiBzdGFydEFsZ28oKSB7XG4gICAgdG9nZ2xlU29ydEJ1dHRvbnModHJ1ZSk7XG4gICAgc3dpdGNoIChhbGdvLnZhbHVlKSB7XG4gICAgICBjYXNlIFwicXVpY2stc29ydFwiOlxuICAgICAgICBzdGFydFFTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJidWJibGUtc29ydFwiOlxuICAgICAgICBzdGFydEJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJyYWRpeC1zb3J0XCI6XG4gICAgICAgIHN0YXJ0UlMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSBcInNlbGVjdGlvbi1zb3J0XCI6XG4gICAgICAgIHN0YXJ0U1MoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVNvcnRCdXR0b25zKHZhbHVlKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICBlbGUuY2xhc3NMaXN0LnRvZ2dsZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJjbGlja2FibGVcIik7XG4gICAgICBlbGUuZGlzYWJsZWQgPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIC8vIGxldCBxc2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgLy8gcXNiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAvLyAvLyBxc2IucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuYyk7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAvLyBxc2IuY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrYWJsZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVCdXR0b25zKCkge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGxldCBmb3J3YXJkQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxldCBmb3J3YXJkTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmlkID0gXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBmb3J3YXJkTG9hZC5pZCA9IFwiZm9yd2FyZExvYWRcIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaWQgPSBcImZvcndhcmRCdXR0b25cIjtcbiAgICAgIGZvcndhcmRCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NTgmIzk2NThcIjtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRCdXR0b24pO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoZm9yd2FyZExvYWQpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpXG4gICAgICAgIC5hcHBlbmRDaGlsZChmb3J3YXJkQnV0dG9uQ29udGFpbmVyKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25cIilcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNwZWVkKTtcbiAgICB9IGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgcGxheUJ1dHRvbi5pZCA9IFwicGxheUJ1dHRvblwiO1xuICAgICAgcGxheUJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjOTY1OFwiO1xuICAgICAgcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRBbGdvKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShwbGF5QnV0dG9uLCBiQ3RybHMuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgc2xpY2VCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuaWQgPSBcInNsaWNlQnV0dG9uQ29udGFpbmVyXCI7XG4gICAgICBsZXQgbG9hZEJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsb2FkQm9yZGVyLmlkID0gXCJzbGljZUxvYWRcIjtcbiAgICAgIGxldCBzbGljZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzbGljZUJ1dHRvbi5pZCA9IFwic2xpY2VCdXR0b25cIjtcbiAgICAgIHNsaWNlQnV0dG9uLmlubmVySFRNTCA9IFwiK1wiO1xuICAgICAgc2xpY2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGN5Y2xlU2xpY2UpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBzbGljZUJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoc2xpY2VCdXR0b24pO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKGxvYWRCb3JkZXIpO1xuICAgICAgYkN0cmxzLmluc2VydEJlZm9yZShcbiAgICAgICAgc2xpY2VCdXR0b25Db250YWluZXIsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIilcbiAgICAgICk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldEJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlc2V0QnV0dG9uLmlkID0gXCJyZXNldEJ1dHRvblwiO1xuICAgICAgcmVzZXRCdXR0b24uaW5uZXJIVE1MID0gXCImIzg2MzRcIjtcbiAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldCk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTcGVlZCgpIHtcbiAgICBpZiAoc3BlZWQudmFsdWUgPT09IDUpIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRMb2FkXCIpLnN0eWxlLnJpZ2h0ID0gXCI1MCVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlZWQudmFsdWUgPSA1O1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjeWNsZVNsaWNlKCkge1xuICAgIGxldCBsb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUxvYWRcIik7XG4gICAgc3dpdGNoIChzbGljZUZhY3Rvcikge1xuICAgICAgY2FzZSA4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDE0O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI2OCVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDE0OlxuICAgICAgICBzbGljZUZhY3RvciA9IDIwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI1MiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDIwOlxuICAgICAgICBzbGljZUZhY3RvciA9IDI4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIzNiVcIjtcblxuICAgICAgICByZXNldCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIDI4OlxuICAgICAgICBzbGljZUZhY3RvciA9IDQwO1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCIxNiVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA0MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA1MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSA1MDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA4O1xuICAgICAgICBsb2FkLnN0eWxlLnJpZ2h0ID0gXCI4NCVcIjtcbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVBcnIoKSB7XG4gICAgLy8gRGl2aWRlIGNhbnZhcyBpbnRvIHNsaWNlcyBvZiBlcXVhbCBsZW5ndGhcbiAgICAvLyBVc2UgbGluZWFyIGNvbG9yIG1hcGluZyB0byBUcmlhbmdsZS52YWxcbiAgICAvLyBUcmlhbmdsZS52YWwgd2lsbCBiZSBzb3J0ZWQgZmllbGRcbiAgICAvLyB4RGlzdCByZW1haW5zIHNhbWVcbiAgICBsZXQgeERpc3QgPSAxIC8gKDEwICogc2xpY2VGYWN0b3IpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAgKiBzbGljZUZhY3RvcjsgaSsrKSB7XG4gICAgICAvLyAwLTI1NSByYW5kb20gbnVtYmVyXG4gICAgICBsZXQgdmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KTtcblxuICAgICAgY29uc3QgbmV3VHJpID0gbmV3IFRyaWFuZ2xlKFxuICAgICAgICBjYW52YXMsXG4gICAgICAgIGJsdWVSYW5kb21pemVyKHZhbCwgMjU1KSxcbiAgICAgICAgeERpc3QsXG4gICAgICAgIHZhbCxcbiAgICAgICAgc3BlZWRcbiAgICAgICk7XG5cbiAgICAgIG15VHJpLnB1c2gobmV3VHJpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFZhcnMoKSB7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBteVRyaSA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaW5pdGlhbGl6ZUJ1dHRvbnMoKTtcbiAgICByZXNldFZhcnMoKTtcbiAgICBpbml0aWFsaXplQXJyKCk7XG4gIH1cblxuICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgbGV0IHN1bSA9IDA7XG4gICAgY2FudmFzLmNsZWFyQ2FudmFzKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVRyaS5sZW5ndGg7IGkrKykge1xuICAgICAgbXlUcmlbaV0uZHJhdyhzdW0pO1xuICAgICAgc3VtICs9IG15VHJpW2ldLnhEaXN0ICogY2FudmFzLmNhbnZhcy53aWR0aDtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbiAgfTtcblxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIC8vIHdpbmRvdy5zZXRUaW1lb3V0KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKSwgMTgpO1xuICAvLyBMb2dpYyBwcmVmb3JtZWQgb24gRyB2YWx1ZSwga2VlcGluZyBSIGFiZCBCIGNvbnN0YW50XG4gIGZ1bmN0aW9uIGJsdWVSYW5kb21pemVyKGlucHV0c2hhZGUsIG1heFZhbCkge1xuICAgIGxldCBzaGFkZVZhbCA9IE1hdGguY2VpbCgoaW5wdXRzaGFkZSAvIG1heFZhbCkgKiAyNTUpO1xuXG4gICAgbGV0IHJWYWx1ZSA9IFwiM0NcIjsgLy82MFxuICAgIGxldCBnVmFsdWUgPSBzaGFkZVZhbC50b1N0cmluZygxNik7XG4gICAgaWYgKHNoYWRlVmFsIDwgMTYpIGdWYWx1ZSA9IFwiMFwiICsgZ1ZhbHVlO1xuXG4gICAgcmV0dXJuIGAjJHtyVmFsdWUgKyBnVmFsdWV9ZmZgO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJ1dHRvbnMoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5QnV0dG9uXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gdHJ1ZTtcbiAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uaGlkZGVuID0gZmFsc2U7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UVMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBxdWlja1NvcnQobXlUcmksIDAsIG15VHJpLmxlbmd0aCAtIDEpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRCUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIGJ1YmJsZVNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRSUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHJhZGl4U29ydChteVRyaSkudGhlbigoKSA9PiB7XG4gICAgICBlbmFibGVCdXR0b25zKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gc3RhcnRTUygpIHtcbiAgICBoaWRlQnV0dG9ucygpO1xuICAgIHNlbGVjdGlvblNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnViYmxlU29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBzd2Fwc0Jvb2wgPSB0cnVlO1xuICAgICAgbGV0IGkgPSAtMTtcbiAgICAgIGNvbnN0IG91dGVyTG9vcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN3YXBzQm9vbCkge1xuICAgICAgICAgIHN3YXBzQm9vbCA9IGZhbHNlO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpbm5lcmxvb3AoMCk7XG4gICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaW5uZXJsb29wID0gKHN0YXJ0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChzdGFydCA8IGFyci5sZW5ndGggLSAxIC0gaSkge1xuICAgICAgICAgICAgLy8gbGUgMiBjaGFyYWN0ZXIgb3B0aW1pemF0aW9uLCA0OSBjaGFyYWN0ZXIgY29tbWVudFxuICAgICAgICAgICAgYXJyW3N0YXJ0XS5tYXJrMigpO1xuICAgICAgICAgICAgaWYgKGFycltzdGFydF0udmFsID4gYXJyW3N0YXJ0ICsgMV0udmFsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbc3RhcnRdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnRdID0gYXJyW3N0YXJ0ICsgMV07XG4gICAgICAgICAgICAgIGFycltzdGFydCArIDFdID0gdGVtcDtcbiAgICAgICAgICAgICAgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XS5tYXJrMSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnQgKz0gMTtcbiAgICAgICAgICAgIGlubmVybG9vcChzdGFydCk7XG4gICAgICAgICAgfSBlbHNlIG91dGVyTG9vcCgpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgb3V0ZXJMb29wKCk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gcmFkaXhTb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGV4cCA9IDE7XG4gICAgICBjb25zdCByYWRpeExvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChNYXRoLmZsb29yKDI1NSAvIGV4cCkgPiAwKSB7XG4gICAgICAgICAgICBjb3VudGluZ1NvcnQoYXJyLCBleHApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBleHAgKj0gMTA7XG4gICAgICAgICAgICAgIHJhZGl4TG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG4gICAgICByYWRpeExvb3AoKTtcbiAgICB9KTtcbiAgfVxuICAvLyB1c2VkIGJ5IHJhZGl4IHNvcnRcbiAgY29uc3QgY291bnRpbmdTb3J0ID0gKGFyciwgZXhwKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgc29ydGVkQXJyYXkgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gICAgICBsZXQgYnVja2V0ID0gbmV3IEFycmF5KDEwKS5maWxsKDApO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1Y2tldFtNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTBdKys7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIGJ1Y2tldFtpXSArPSBidWNrZXRbaSAtIDFdO1xuXG4gICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGxvYyA9IE1hdGguZmxvb3IoYXJyW2ldLnZhbCAvIGV4cCkgJSAxMDtcbiAgICAgICAgc29ydGVkQXJyYXlbYnVja2V0W2xvY10gLSAxXSA9IHtcbiAgICAgICAgICB2YWw6IGFycltpXS52YWwsXG4gICAgICAgICAgY29sb3I6IGFycltpXS5jb2xvcixcbiAgICAgICAgICBkZWZhdWx0Q29sb3I6IGFycltpXS5kZWZhdWx0Q29sb3IsXG4gICAgICAgIH07XG4gICAgICAgIGJ1Y2tldFtsb2NdLS07XG4gICAgICB9XG4gICAgICBjb25zdCBzY2FuVmlzdWFsID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGkgPT09IC0xKSB0cmFuc2Zlckxvb3AoMCk7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJbaV0ubWFyazIoKTtcbiAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgIHNjYW5WaXN1YWwoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgc2NhblZpc3VhbChhcnIubGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCB0cmFuc2Zlckxvb3AgPSAoaSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoYXJyW2ldLnZhbCAhPT0gc29ydGVkQXJyYXlbaV0udmFsKSB7XG4gICAgICAgICAgICBhcnJbaV0udmFsID0gc29ydGVkQXJyYXlbaV0udmFsO1xuICAgICAgICAgICAgYXJyW2ldLmRlZmF1bHRDb2xvciA9IHNvcnRlZEFycmF5W2ldLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgICAgIGFycltpXS5jb2xvciA9IHNvcnRlZEFycmF5W2ldLmNvbG9yO1xuXG4gICAgICAgICAgICBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgICB9IGVsc2UgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChpID09PSBhcnIubGVuZ3RoKSByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIGVsc2UgdHJhbnNmZXJMb29wKGkpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHNlbGVjdGlvblNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICBsZXQgbWluID0geyB2YWw6IDI1NiwgbG9jOiBudWxsIH07XG4gICAgICBjb25zdCBvdXRlckxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpIDwgYXJyLmxlbmd0aCkge1xuICAgICAgICAgIG1pbi52YWwgPSAyNTY7XG4gICAgICAgICAgaW5uZXJMb29wKGkpO1xuICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIGZyb20gaiB0byBhcnIubGVuZ3RoLCBmaW5kIG1pbi4uLlxuXG4gICAgICBjb25zdCBpbm5lckxvb3AgPSAoaikgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoaiA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChhcnJbal0udmFsIDwgbWluLnZhbCkgbWluID0geyB2YWw6IGFycltqXS52YWwsIGxvYzogaiB9O1xuICAgICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgICBpbm5lckxvb3AoaiArIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgICAgYXJyW2ldID0gYXJyW21pbi5sb2NdO1xuICAgICAgICAgICAgYXJyW21pbi5sb2NdID0gdGVtcDtcbiAgICAgICAgICAgIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgICAgYXJyW21pbi5sb2NdLm1hcmsxKCk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBvdXRlckxvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWVkLnZhbHVlKTtcbiAgICAgIH07XG5cbiAgICAgIG91dGVyTG9vcCgwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBlbmQsIHhTdGFydCA9IDApIHtcbiAgICAvLyBuZWVkZWQgdG8gc2V0dXAgYSBzdHJvbmcgcmVzb2x2ZSwgbmVlZCB0byBjb21lIGJhY2sgdG8gdGhpcyAsIHJlYXNvbjogZm9yIHBhdXNpbmcgYW5pbWF0aW9uXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICAgICAgcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpLnRoZW4oKHBpKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHN0YXJ0LCBwaSAtIDEpLnRoZW4oKCkgPT5cbiAgICAgICAgICAgICAgcXVpY2tTb3J0KGFyciwgcGkgKyAxLCBlbmQpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVpY2tTb3J0UGFydGl0aW9uMihhcnIsIHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgbGV0IHBpdm90ID0gYXJyW2VuZF0udmFsO1xuICAgICAgbGV0IGkgPSBzdGFydCAtIDE7IC8vIHRyYWNraW5nIHBpdm90IGxvY2F0aW9uXG4gICAgICBsZXQgaiA9IHN0YXJ0IC0gMTtcblxuICAgICAgY29uc3Qgc3dhcEFuZFJlbmRlciA9IChqKSA9PiB7XG4gICAgICAgIGlmIChhcnJbal0udmFsIDw9IHBpdm90KSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIGFycltlbmRdLmNvbG9yUmVzZXQoKTsgLy8gPSBmYWxzZTtcbiAgICAgICAgICAgIGFycltzdGFydF0uY29sb3JSZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSAhPT0gc3RhcnQgJiYgaiAhPT0gZW5kKSBhcnJbc3RhcnRdLm1hcmtTdGF0aWMoKTtcblxuICAgICAgICAgIGNvbnN0IHRlbXAgPSBhcnJbaV07XG4gICAgICAgICAgYXJyW2ldID0gYXJyW2pdO1xuICAgICAgICAgIGFycltqXSA9IHRlbXA7XG4gICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgaWYgKGogPT09IGVuZCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyW2pdLm1hcmsyKCk7XG4gICAgICAgICAgLy8gaWYgKGkgPCAwKSBhcnJbMF0ubWFyazIoKTtcbiAgICAgICAgICAvLyBlbHNlIGFycltpXS5tYXJrMSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgdGltZWRXaGlsZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGFycltlbmRdLm1hcmtTdGF0aWMoKTtcbiAgICAgICAgICBpZiAoaiA8IGVuZCkge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEFuZFJlbmRlcihqKTtcbiAgICAgICAgICAgIGlmIChqICE9PSBlbmQpIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgdGltZWRXaGlsZUxvb3AoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY2xhc3MgY2FudmFzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpO1xuICAgIHRoaXMuY2FudmFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FudmFzXCIpO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICB9XG4gIGNyZWF0ZUNhbnZhcygpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICBjbGVhckNhbnZhcygpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCk7XG4gIH1cbiAgc2V0Q29sb3IoY29sb3IpIHtcbiAgICB0aGlzLmZpbGxDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5maWx0ZXIgPSBgYnJpZ2h0bmVzcygxNTAlKWA7XG4gIH1cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGxldCBib2R5RWxlID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBsZXQgYW5zID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgYW5zICs9IE1hdGguY2VpbChib2R5RWxlW2ldLm9mZnNldEhlaWdodCk7XG4gICAgfVxuICAgIHJldHVybiBhbnMgKyAyMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYW52YXNFeGFtcGxlO1xuIiwiY2xhc3MgVHJpYW5nbGUge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9yLCB4RGlzdCwgdmFsLCBzcGVlZCkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuY3R4O1xuICAgIHRoaXMueERpc3QgPSB4RGlzdDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgdGhpcy5kZWZhdWx0Q29sb3IgPSBjb2xvcjtcbiAgICB0aGlzLm1hcmtlZCA9IGZhbHNlO1xuICAgIHRoaXMudmFsID0gdmFsO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgIHRoaXMubWFyazEgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUgKiAyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5kcmF3ID0gKHhTdGFydCkgPT4ge1xuICAgICAgdGhpcy54U3RhcnQgPSB4U3RhcnQ7XG4gICAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICAgIGxldCBjdyA9IGNhbnZhc0VsZW1lbnQud2lkdGg7XG4gICAgICBsZXQgY2ggPSBjYW52YXNFbGVtZW50LmhlaWdodDtcblxuICAgICAgbGV0IGN5ID0gY2ggLyA0O1xuICAgICAgbGV0IGN4ID0gY3cgLyAyO1xuXG4gICAgICB2YXIgdHJpYW5nbGUgPSB7XG4gICAgICAgIC8vdGhlIGZpcnN0IHZlcnRleCBpcyBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICAgICAgLy95b3UgbWF5IGRlY2lkZSB0byBjaGFuZ2UgdGhpcy5cbiAgICAgICAgeDE6IGN4LFxuICAgICAgICB5MTogY3ksXG4gICAgICAgIC8vdGhlIHNlY29uZCB2ZXJ0ZXggaXMgb24gdGhlIGNpcmN1bXNjcmliZWQgY2lyY2xlIGF0IDAgcmFkaWFucyB3aGVyZSBSIGlzIHRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZSAoIGEgPSAzMCwgYj0zMCApXG4gICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgIHgyOiB0aGlzLnhTdGFydCxcbiAgICAgICAgeTI6IGNoLFxuICAgICAgICAvL2NhbGN1bGF0ZSB0aGUgMy1yZCB2ZXJ0ZXhcbiAgICAgICAgeDM6IHRoaXMueFN0YXJ0ICsgdGhpcy54RGlzdCAqIGNhbnZhc0VsZW1lbnQud2lkdGgsXG4gICAgICAgIHkzOiBjaCxcbiAgICAgIH07XG5cbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDIsIHRyaWFuZ2xlLnkyKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDMsIHRyaWFuZ2xlLnkzKTtcbiAgICAgIGN0eC5saW5lVG8odHJpYW5nbGUueDEsIHRyaWFuZ2xlLnkxKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcblxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LmZpbGwoKTtcblxuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICB0aGlzLm1hcmsyID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCIjRkZENzAwXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sb3IgPSB0aGlzLmRlZmF1bHRDb2xvcjtcbiAgICAgICAgfSwgdGhpcy5zcGVlZC52YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMubWFya1N0YXRpYyA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGljID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29sb3IgPSBcIiNGRjAwRkZcIjtcbiAgICAgIC8vIGlmICh0aGlzLnN0YXRpYykge1xuICAgICAgLy8gICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAvLyAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgICAvLyB9IGVsc2Uge1xuICAgICAgLy8gICB0aGlzLmNvbG9yID0gc3RyO1xuICAgICAgLy8gICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgICAvLyB9XG4gICAgfTtcblxuICAgIHRoaXMuY29sb3JSZXNldCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGljID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgfTtcblxuICAgIHRoaXMucmVzZXQgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpYW5nbGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9