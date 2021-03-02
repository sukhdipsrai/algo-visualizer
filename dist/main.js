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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90cmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJhbGdvU2VsZWN0IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRIYW5kbGVyIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJlbGUiLCJtb2RhbEhhbmRsZXIiLCJnZXRFbGVtZW50QnlJZCIsIk1vZGFsVGFiU3dpdGNoIiwiaWQiLCJkaXNhYmxlZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNhbnZhcyIsImNhbnZhc0V4YW1wbGUiLCJjcmVhdGVDYW52YXMiLCJteUZ1bmMiLCJyZW1vdmUiLCJhZGQiLCJtb2RhbCIsImFsZ28iLCJteVRyaSIsImFuaW1hdGluZyIsInNwZWVkIiwic2xpY2VGYWN0b3IiLCJyZXNldCIsInN0YXJ0QWxnbyIsInRvZ2dsZVNvcnRCdXR0b25zIiwic3RhcnRRUyIsInN0YXJ0QlMiLCJzdGFydFJTIiwic3RhcnRTUyIsImluaXRpYWxpemVCdXR0b25zIiwiZm9yd2FyZEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJmb3J3YXJkQnV0dG9uQ29udGFpbmVyIiwiZm9yd2FyZExvYWQiLCJpbm5lckhUTUwiLCJhcHBlbmQiLCJhcHBlbmRDaGlsZCIsImN5Y2xlU3BlZWQiLCJoaWRkZW4iLCJwbGF5QnV0dG9uIiwiYkN0cmxzIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInNsaWNlQnV0dG9uQ29udGFpbmVyIiwibG9hZEJvcmRlciIsInNsaWNlQnV0dG9uIiwiY3ljbGVTbGljZSIsInJlc2V0QnV0dG9uIiwic3R5bGUiLCJyaWdodCIsImxvYWQiLCJpbml0aWFsaXplQXJyIiwieERpc3QiLCJpIiwidmFsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibmV3VHJpIiwiVHJpYW5nbGUiLCJibHVlUmFuZG9taXplciIsInB1c2giLCJyZXNldFZhcnMiLCJjbGVhckNhbnZhcyIsImFuaW1hdGlvbiIsInN1bSIsImxlbmd0aCIsImRyYXciLCJ3aWR0aCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImlucHV0c2hhZGUiLCJtYXhWYWwiLCJzaGFkZVZhbCIsImNlaWwiLCJyVmFsdWUiLCJnVmFsdWUiLCJ0b1N0cmluZyIsImhpZGVCdXR0b25zIiwiZW5hYmxlQnV0dG9ucyIsInF1aWNrU29ydCIsInRoZW4iLCJidWJibGVTb3J0IiwicmFkaXhTb3J0Iiwic2VsZWN0aW9uU29ydCIsImFyciIsIlByb21pc2UiLCJyZXNvbHZlIiwic3dhcHNCb29sIiwib3V0ZXJMb29wIiwiaW5uZXJsb29wIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwibWFyazIiLCJ0ZW1wIiwibWFyazEiLCJleHAiLCJyYWRpeExvb3AiLCJjb3VudGluZ1NvcnQiLCJzb3J0ZWRBcnJheSIsImJ1Y2tldCIsImZpbGwiLCJsb2MiLCJjb2xvciIsImRlZmF1bHRDb2xvciIsInNjYW5WaXN1YWwiLCJ0cmFuc2Zlckxvb3AiLCJtaW4iLCJpbm5lckxvb3AiLCJqIiwiZW5kIiwieFN0YXJ0IiwicXVpY2tTb3J0UGFydGl0aW9uMiIsInBpIiwicmVqZWN0IiwicGl2b3QiLCJzd2FwQW5kUmVuZGVyIiwiY29sb3JSZXNldCIsIm1hcmtTdGF0aWMiLCJ0aW1lZFdoaWxlTG9vcCIsInByb3BzIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImJvZHkiLCJvZmZzZXRIZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRBdHRyaWJ1dGUiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiZmlsbENvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsdGVyIiwiYm9keUVsZSIsImNoaWxkcmVuIiwiYW5zIiwibWFya2VkIiwic3RhdGljIiwiY2FudmFzRWxlbWVudCIsImN3IiwiY2giLCJjeSIsImN4IiwidHJpYW5nbGUiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQSxJQUFJQSxVQUFVLEdBQUc7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBakIsQyxDQUNBOztBQUNBQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsRUFBc0NDLGdCQUF0QyxDQUF1RCxPQUF2RCxFQUFnRSxZQUFN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TTtBQUN0QixTQUFJLENBQUNtQixNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUksQ0FBQ2xDLEtBQUwsR0FBYSxTQUFiLENBRnNCLENBR3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsR0FWRDs7QUFZQSxPQUFLYyxVQUFMLEdBQWtCLFlBQU07QUFDdEIsU0FBSSxDQUFDb0IsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFJLENBQUNsQyxLQUFMLEdBQWEsS0FBSSxDQUFDQyxZQUFsQjtBQUNELEdBSEQ7O0FBS0EsT0FBS2xGLEtBQUwsR0FBYSxZQUFNO0FBQ2pCLFFBQUk7QUFDRixXQUFJLENBQUN5RyxHQUFMLENBQVNFLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSSxDQUFDdkgsTUFBTCxDQUFZMEQsS0FBckMsRUFBNEMsS0FBSSxDQUFDMUQsTUFBTCxDQUFZZ0gsTUFBeEQ7QUFDRCxLQUZELENBRUUsT0FBT21DLENBQVAsRUFBVTtBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNEO0FBQ0YsR0FORDtBQU9ELEM7O0FBR1lsRyx1RUFBZixFOzs7Ozs7Ozs7OztBQzlGQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCBjYW52YXNFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvY2FudmFzXCI7XG5pbXBvcnQgVHJpYW5nbGUgZnJvbSBcIi4vc2NyaXB0cy90cmlhbmdsZVwiO1xuXG5sZXQgYWxnb1NlbGVjdCA9IHsgdmFsdWU6IG51bGwgfTtcbi8vIFRPRE86IGxvb3Agb3ZlciBjbGFzcyBsaXN0XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3F1aWNrLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwicXVpY2stc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidWJibGUtc29ydFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEhhbmRsZXIoXCJidWJibGUtc29ydFwiKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYWRpeC1zb3J0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXJ0SGFuZGxlcihcInJhZGl4LXNvcnRcIik7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VsZWN0aW9uLXNvcnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhcnRIYW5kbGVyKFwic2VsZWN0aW9uLXNvcnRcIik7XG59KTtcbkFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZ2dsZS1tb2RhbFwiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsSGFuZGxlcigpO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvdy10by10YWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgTW9kYWxUYWJTd2l0Y2goXCJob3ctdG8tdGFiXCIpO1xufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtdGFiXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIE1vZGFsVGFiU3dpdGNoKFwiYWJvdXQtdGFiXCIpO1xufSk7XG5cbmZ1bmN0aW9uIE1vZGFsVGFiU3dpdGNoKGlkKSB7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsLXRhYnNcIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgIGVsZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwib25cIik7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJvZmZcIik7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuZGlzYWJsZWQgPSB0cnVlO1xuICAvL1RPRE86IGFkZCBzZWxlY3RlZCBzdHlsaW5nIG9uIGlkXG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYlwiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJpbnZpc2libGVcIik7XG4gICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJ2aXNpYmxlXCIpO1xuICB9KTtcbn1cbmNvbnN0IGNhbnZhcyA9IG5ldyBjYW52YXNFeGFtcGxlKCk7XG5jYW52YXMuY3JlYXRlQ2FudmFzKCk7XG5cbmZ1bmN0aW9uIHN0YXJ0SGFuZGxlcihpZCkge1xuICBpZiAoYWxnb1NlbGVjdC52YWx1ZSA9PT0gbnVsbCkge1xuICAgIG15RnVuYyhhbGdvU2VsZWN0KTtcbiAgfVxuICBhbGdvU2VsZWN0LnZhbHVlID0gaWQ7XG5cbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWxnb1wiKSkuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZEJ1dHRvblwiKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRCdXR0b25cIik7XG59XG5cbmZ1bmN0aW9uIG1vZGFsSGFuZGxlcigpIHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC10dXRvcmlhbFwiKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtbW9kYWxcIik7XG4gIG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW1vZGFsXCIpO1xufVxuXG5mdW5jdGlvbiBteUZ1bmMoYWxnbykge1xuICBsZXQgbXlUcmkgPSBbXTtcbiAgbGV0IGFuaW1hdGluZyA9IHRydWU7XG4gIGxldCBzcGVlZCA9IHsgdmFsdWU6IDUgfTtcbiAgbGV0IHNsaWNlRmFjdG9yID0gODsgLy8gaW5jcmVhc2luZyB3aWxsIGNyZWF0ZSBtb3JlIHRyaWFuZ2xlIHNsaWNlc1xuXG4gIHJlc2V0KCk7XG5cbiAgZnVuY3Rpb24gc3RhcnRBbGdvKCkge1xuICAgIHRvZ2dsZVNvcnRCdXR0b25zKHRydWUpO1xuICAgIHN3aXRjaCAoYWxnby52YWx1ZSkge1xuICAgICAgY2FzZSBcInF1aWNrLXNvcnRcIjpcbiAgICAgICAgc3RhcnRRUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwiYnViYmxlLXNvcnRcIjpcbiAgICAgICAgc3RhcnRCUygpO1xuICAgICAgICByZXR1cm47XG4gICAgICBjYXNlIFwicmFkaXgtc29ydFwiOlxuICAgICAgICBzdGFydFJTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgXCJzZWxlY3Rpb24tc29ydFwiOlxuICAgICAgICBzdGFydFNTKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVTb3J0QnV0dG9ucyh2YWx1ZSkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFsZ29cIikpLmZvckVhY2goKGVsZSkgPT4ge1xuICAgICAgZWxlLmNsYXNzTGlzdC50b2dnbGUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgIGVsZS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xpY2thYmxlXCIpO1xuICAgICAgZWxlLmRpc2FibGVkID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICAvLyBsZXQgcXNiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIC8vIHFzYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgLy8gLy8gcXNiLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBteUZ1bmMpO1xuICAgIC8vIHFzYi5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgLy8gcXNiLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2FibGVcIik7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQnV0dG9ucygpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpID09PSBudWxsKSB7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBsZXQgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBsZXQgZm9yd2FyZExvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9yd2FyZEJ1dHRvbkNvbnRhaW5lci5pZCA9IFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiO1xuICAgICAgZm9yd2FyZExvYWQuaWQgPSBcImZvcndhcmRMb2FkXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlkID0gXCJmb3J3YXJkQnV0dG9uXCI7XG4gICAgICBmb3J3YXJkQnV0dG9uLmlubmVySFRNTCA9IFwiJiM5NjU4JiM5NjU4XCI7XG4gICAgICBmb3J3YXJkQnV0dG9uQ29udGFpbmVyLmFwcGVuZChmb3J3YXJkQnV0dG9uKTtcbiAgICAgIGZvcndhcmRCdXR0b25Db250YWluZXIuYXBwZW5kKGZvcndhcmRMb2FkKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKVxuICAgICAgICAuYXBwZW5kQ2hpbGQoZm9yd2FyZEJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkQnV0dG9uXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3ljbGVTcGVlZCk7XG4gICAgfSBlbHNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHBsYXlCdXR0b24uaWQgPSBcInBsYXlCdXR0b25cIjtcbiAgICAgIHBsYXlCdXR0b24uaW5uZXJIVE1MID0gXCImIzk2NThcIjtcbiAgICAgIHBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0QWxnbyk7XG4gICAgICBjb25zdCBiQ3RybHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jb250cm9sc1wiKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUocGxheUJ1dHRvbiwgYkN0cmxzLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcndhcmRCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGljZUJ1dHRvblwiKSA9PT0gbnVsbCkge1xuICAgICAgbGV0IHNsaWNlQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmlkID0gXCJzbGljZUJ1dHRvbkNvbnRhaW5lclwiO1xuICAgICAgbGV0IGxvYWRCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbG9hZEJvcmRlci5pZCA9IFwic2xpY2VMb2FkXCI7XG4gICAgICBsZXQgc2xpY2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgc2xpY2VCdXR0b24uaWQgPSBcInNsaWNlQnV0dG9uXCI7XG4gICAgICBzbGljZUJ1dHRvbi5pbm5lckhUTUwgPSBcIitcIjtcbiAgICAgIHNsaWNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjeWNsZVNsaWNlKTtcbiAgICAgIGNvbnN0IGJDdHJscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNvbnRyb2xzXCIpO1xuICAgICAgc2xpY2VCdXR0b25Db250YWluZXIuYXBwZW5kKHNsaWNlQnV0dG9uKTtcbiAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLmFwcGVuZChsb2FkQm9yZGVyKTtcbiAgICAgIGJDdHJscy5pbnNlcnRCZWZvcmUoXG4gICAgICAgIHNsaWNlQnV0dG9uQ29udGFpbmVyLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpXG4gICAgICApO1xuICAgIH0gZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWNlQnV0dG9uQ29udGFpbmVyXCIpLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRCdXR0b25cIikgPT09IG51bGwpIHtcbiAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICByZXNldEJ1dHRvbi5pZCA9IFwicmVzZXRCdXR0b25cIjtcbiAgICAgIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9IFwiJiM4NjM0XCI7XG4gICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXQpO1xuICAgICAgY29uc3QgYkN0cmxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY29udHJvbHNcIik7XG4gICAgICBiQ3RybHMuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGN5Y2xlU3BlZWQoKSB7XG4gICAgaWYgKHNwZWVkLnZhbHVlID09PSA1KSB7XG4gICAgICBzcGVlZC52YWx1ZSA9IDUwO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3J3YXJkTG9hZFwiKS5zdHlsZS5yaWdodCA9IFwiNTAlXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWVkLnZhbHVlID0gNTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZExvYWRcIikuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3ljbGVTbGljZSgpIHtcbiAgICBsZXQgbG9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VMb2FkXCIpO1xuICAgIHN3aXRjaCAoc2xpY2VGYWN0b3IpIHtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAxNDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiNjglXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAxNDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyMDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiNTIlXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyMDpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSAyODtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMzYlXCI7XG5cbiAgICAgICAgcmVzZXQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAyODpcbiAgICAgICAgc2xpY2VGYWN0b3IgPSA0MDtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiMTYlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gNTA7XG4gICAgICAgIGxvYWQuc3R5bGUucmlnaHQgPSBcIjAlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIGNhc2UgNTA6XG4gICAgICAgIHNsaWNlRmFjdG9yID0gODtcbiAgICAgICAgbG9hZC5zdHlsZS5yaWdodCA9IFwiODQlXCI7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplQXJyKCkge1xuICAgIC8vIERpdmlkZSBjYW52YXMgaW50byBzbGljZXMgb2YgZXF1YWwgbGVuZ3RoXG4gICAgLy8gVXNlIGxpbmVhciBjb2xvciBtYXBpbmcgdG8gVHJpYW5nbGUudmFsXG4gICAgLy8gVHJpYW5nbGUudmFsIHdpbGwgYmUgc29ydGVkIGZpZWxkXG4gICAgLy8geERpc3QgcmVtYWlucyBzYW1lXG4gICAgbGV0IHhEaXN0ID0gMSAvICgxMCAqIHNsaWNlRmFjdG9yKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwICogc2xpY2VGYWN0b3I7IGkrKykge1xuICAgICAgLy8gMC0yNTUgcmFuZG9tIG51bWJlclxuICAgICAgbGV0IHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XG5cbiAgICAgIGNvbnN0IG5ld1RyaSA9IG5ldyBUcmlhbmdsZShcbiAgICAgICAgY2FudmFzLFxuICAgICAgICBibHVlUmFuZG9taXplcih2YWwsIDI1NSksXG4gICAgICAgIHhEaXN0LFxuICAgICAgICB2YWwsXG4gICAgICAgIHNwZWVkXG4gICAgICApO1xuXG4gICAgICBteVRyaS5wdXNoKG5ld1RyaSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRWYXJzKCkge1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGFuaW1hdGluZyA9IHRydWU7XG4gICAgbXlUcmkgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIGluaXRpYWxpemVCdXR0b25zKCk7XG4gICAgcmVzZXRWYXJzKCk7XG4gICAgaW5pdGlhbGl6ZUFycigpO1xuICB9XG5cbiAgY29uc3QgYW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzdW0gPSAwO1xuICAgIGNhbnZhcy5jbGVhckNhbnZhcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbXlUcmkubGVuZ3RoOyBpKyspIHtcbiAgICAgIG15VHJpW2ldLmRyYXcoc3VtKTtcbiAgICAgIHN1bSArPSBteVRyaVtpXS54RGlzdCAqIGNhbnZhcy5jYW52YXMud2lkdGg7XG4gICAgfVxuICAgIGlmIChhbmltYXRpbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAvLyB3aW5kb3cuc2V0VGltZW91dCh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbiksIDE4KTtcbiAgLy8gTG9naWMgcHJlZm9ybWVkIG9uIEcgdmFsdWUsIGtlZXBpbmcgUiBhYmQgQiBjb25zdGFudFxuICBmdW5jdGlvbiBibHVlUmFuZG9taXplcihpbnB1dHNoYWRlLCBtYXhWYWwpIHtcbiAgICBsZXQgc2hhZGVWYWwgPSBNYXRoLmNlaWwoKGlucHV0c2hhZGUgLyBtYXhWYWwpICogMjU1KTtcblxuICAgIGxldCByVmFsdWUgPSBcIjNDXCI7IC8vNjBcbiAgICBsZXQgZ1ZhbHVlID0gc2hhZGVWYWwudG9TdHJpbmcoMTYpO1xuICAgIGlmIChzaGFkZVZhbCA8IDE2KSBnVmFsdWUgPSBcIjBcIiArIGdWYWx1ZTtcblxuICAgIHJldHVybiBgIyR7clZhbHVlICsgZ1ZhbHVlfWZmYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCdXR0b25zKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheUJ1dHRvblwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yd2FyZEJ1dHRvbkNvbnRhaW5lclwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpY2VCdXR0b25Db250YWluZXJcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IHRydWU7XG4gICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBsZXQgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc2V0QnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLmhpZGRlbiA9IGZhbHNlO1xuICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICB0b2dnbGVTb3J0QnV0dG9ucyhmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFFTKCkge1xuICAgIGhpZGVCdXR0b25zKCk7XG4gICAgcXVpY2tTb3J0KG15VHJpLCAwLCBteVRyaS5sZW5ndGggLSAxKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0QlMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBidWJibGVTb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UlMoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICByYWRpeFNvcnQobXlUcmkpLnRoZW4oKCkgPT4ge1xuICAgICAgZW5hYmxlQnV0dG9ucygpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHN0YXJ0U1MoKSB7XG4gICAgaGlkZUJ1dHRvbnMoKTtcbiAgICBzZWxlY3Rpb25Tb3J0KG15VHJpKS50aGVuKCgpID0+IHtcbiAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgc3dhcHNCb29sID0gdHJ1ZTtcbiAgICAgIGxldCBpID0gLTE7XG4gICAgICBjb25zdCBvdXRlckxvb3AgPSAoKSA9PiB7XG4gICAgICAgIGlmIChzd2Fwc0Jvb2wpIHtcbiAgICAgICAgICBzd2Fwc0Jvb2wgPSBmYWxzZTtcbiAgICAgICAgICBpKys7XG4gICAgICAgICAgaW5uZXJsb29wKDApO1xuICAgICAgICB9IGVsc2UgcmVzb2x2ZShudWxsKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlubmVybG9vcCA9IChzdGFydCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc3RhcnQgPCBhcnIubGVuZ3RoIC0gMSAtIGkpIHtcbiAgICAgICAgICAgIC8vIGxlIDIgY2hhcmFjdGVyIG9wdGltaXphdGlvbiwgNDkgY2hhcmFjdGVyIGNvbW1lbnRcbiAgICAgICAgICAgIGFycltzdGFydF0ubWFyazIoKTtcbiAgICAgICAgICAgIGlmIChhcnJbc3RhcnRdLnZhbCA+IGFycltzdGFydCArIDFdLnZhbCkge1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW3N0YXJ0XTtcbiAgICAgICAgICAgICAgYXJyW3N0YXJ0XSA9IGFycltzdGFydCArIDFdO1xuICAgICAgICAgICAgICBhcnJbc3RhcnQgKyAxXSA9IHRlbXA7XG4gICAgICAgICAgICAgIHN3YXBzQm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgIGFycltzdGFydF0ubWFyazEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0ICs9IDE7XG4gICAgICAgICAgICBpbm5lcmxvb3Aoc3RhcnQpO1xuICAgICAgICAgIH0gZWxzZSBvdXRlckxvb3AoKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIG91dGVyTG9vcCgpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHJhZGl4U29ydChhcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCBleHAgPSAxO1xuICAgICAgY29uc3QgcmFkaXhMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigyNTUgLyBleHApID4gMCkge1xuICAgICAgICAgICAgY291bnRpbmdTb3J0KGFyciwgZXhwKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgZXhwICo9IDEwO1xuICAgICAgICAgICAgICByYWRpeExvb3AoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKG51bGwpO1xuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuICAgICAgcmFkaXhMb29wKCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gdXNlZCBieSByYWRpeCBzb3J0XG4gIGNvbnN0IGNvdW50aW5nU29ydCA9IChhcnIsIGV4cCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IHNvcnRlZEFycmF5ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICAgICAgbGV0IGJ1Y2tldCA9IG5ldyBBcnJheSgxMCkuZmlsbCgwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKVxuICAgICAgICBidWNrZXRbTWF0aC5mbG9vcihhcnJbaV0udmFsIC8gZXhwKSAlIDEwXSsrO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSBidWNrZXRbaV0gKz0gYnVja2V0W2kgLSAxXTtcblxuICAgICAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBsb2MgPSBNYXRoLmZsb29yKGFycltpXS52YWwgLyBleHApICUgMTA7XG4gICAgICAgIHNvcnRlZEFycmF5W2J1Y2tldFtsb2NdIC0gMV0gPSB7XG4gICAgICAgICAgdmFsOiBhcnJbaV0udmFsLFxuICAgICAgICAgIGNvbG9yOiBhcnJbaV0uY29sb3IsXG4gICAgICAgICAgZGVmYXVsdENvbG9yOiBhcnJbaV0uZGVmYXVsdENvbG9yLFxuICAgICAgICB9O1xuICAgICAgICBidWNrZXRbbG9jXS0tO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NhblZpc3VhbCA9IChpKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChpID09PSAtMSkgdHJhbnNmZXJMb29wKDApO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyW2ldLm1hcmsyKCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgICBzY2FuVmlzdWFsKGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHNjYW5WaXN1YWwoYXJyLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgdHJhbnNmZXJMb29wID0gKGkpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGFycltpXS52YWwgIT09IHNvcnRlZEFycmF5W2ldLnZhbCkge1xuICAgICAgICAgICAgYXJyW2ldLnZhbCA9IHNvcnRlZEFycmF5W2ldLnZhbDtcbiAgICAgICAgICAgIGFycltpXS5kZWZhdWx0Q29sb3IgPSBzb3J0ZWRBcnJheVtpXS5kZWZhdWx0Q29sb3I7XG4gICAgICAgICAgICBhcnJbaV0uY29sb3IgPSBzb3J0ZWRBcnJheVtpXS5jb2xvcjtcblxuICAgICAgICAgICAgYXJyW2ldLm1hcmsxKCk7XG4gICAgICAgICAgfSBlbHNlIGFycltpXS5tYXJrMigpO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaSA9PT0gYXJyLmxlbmd0aCkgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICBlbHNlIHRyYW5zZmVyTG9vcChpKTtcbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzZWxlY3Rpb25Tb3J0KGFycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgbGV0IG1pbiA9IHsgdmFsOiAyNTYsIGxvYzogbnVsbCB9O1xuICAgICAgY29uc3Qgb3V0ZXJMb29wID0gKCkgPT4ge1xuICAgICAgICBpZiAoaSA8IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICBtaW4udmFsID0gMjU2O1xuICAgICAgICAgIGlubmVyTG9vcChpKTtcbiAgICAgICAgfSBlbHNlIHJlc29sdmUobnVsbCk7XG4gICAgICB9O1xuXG4gICAgICAvLyBmcm9tIGogdG8gYXJyLmxlbmd0aCwgZmluZCBtaW4uLi5cblxuICAgICAgY29uc3QgaW5uZXJMb29wID0gKGopID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGogPCBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2pdLnZhbCA8IG1pbi52YWwpIG1pbiA9IHsgdmFsOiBhcnJbal0udmFsLCBsb2M6IGogfTtcbiAgICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgICAgaW5uZXJMb29wKGogKyAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGFycltpXTtcbiAgICAgICAgICAgIGFycltpXSA9IGFyclttaW4ubG9jXTtcbiAgICAgICAgICAgIGFyclttaW4ubG9jXSA9IHRlbXA7XG4gICAgICAgICAgICBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgICAgIGFyclttaW4ubG9jXS5tYXJrMSgpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgb3V0ZXJMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVlZC52YWx1ZSk7XG4gICAgICB9O1xuXG4gICAgICBvdXRlckxvb3AoMCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBxdWlja1NvcnQoYXJyLCBzdGFydCwgZW5kLCB4U3RhcnQgPSAwKSB7XG4gICAgLy8gbmVlZGVkIHRvIHNldHVwIGEgc3Ryb25nIHJlc29sdmUsIG5lZWQgdG8gY29tZSBiYWNrIHRvIHRoaXMgLCByZWFzb246IGZvciBwYXVzaW5nIGFuaW1hdGlvblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgICAgIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKS50aGVuKChwaSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICBxdWlja1NvcnQoYXJyLCBzdGFydCwgcGkgLSAxKS50aGVuKCgpID0+XG4gICAgICAgICAgICAgIHF1aWNrU29ydChhcnIsIHBpICsgMSwgZW5kKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHF1aWNrU29ydFBhcnRpdGlvbjIoYXJyLCBzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGxldCBwaXZvdCA9IGFycltlbmRdLnZhbDtcbiAgICAgIGxldCBpID0gc3RhcnQgLSAxOyAvLyB0cmFja2luZyBwaXZvdCBsb2NhdGlvblxuICAgICAgbGV0IGogPSBzdGFydCAtIDE7XG5cbiAgICAgIGNvbnN0IHN3YXBBbmRSZW5kZXIgPSAoaikgPT4ge1xuICAgICAgICBpZiAoYXJyW2pdLnZhbCA8PSBwaXZvdCkge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBpZiAoaiA9PT0gZW5kKSB7XG4gICAgICAgICAgICBhcnJbZW5kXS5jb2xvclJlc2V0KCk7IC8vID0gZmFsc2U7XG4gICAgICAgICAgICBhcnJbc3RhcnRdLmNvbG9yUmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGkgIT09IHN0YXJ0ICYmIGogIT09IGVuZCkgYXJyW3N0YXJ0XS5tYXJrU3RhdGljKCk7XG5cbiAgICAgICAgICBjb25zdCB0ZW1wID0gYXJyW2ldO1xuICAgICAgICAgIGFycltpXSA9IGFycltqXTtcbiAgICAgICAgICBhcnJbal0gPSB0ZW1wO1xuICAgICAgICAgIGFycltpXS5tYXJrMSgpO1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIGlmIChqID09PSBlbmQpIHtcbiAgICAgICAgICAgIHJlc29sdmUoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFycltqXS5tYXJrMigpO1xuICAgICAgICAgIC8vIGlmIChpIDwgMCkgYXJyWzBdLm1hcmsyKCk7XG4gICAgICAgICAgLy8gZWxzZSBhcnJbaV0ubWFyazEoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHRpbWVkV2hpbGVMb29wID0gKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBhcnJbZW5kXS5tYXJrU3RhdGljKCk7XG4gICAgICAgICAgaWYgKGogPCBlbmQpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBBbmRSZW5kZXIoaik7XG4gICAgICAgICAgICBpZiAoaiAhPT0gZW5kKSB0aW1lZFdoaWxlTG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3BlZWQudmFsdWUpO1xuICAgICAgfTtcbiAgICAgIHRpbWVkV2hpbGVMb29wKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNsYXNzIGNhbnZhc0V4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNhbnZhc1wiKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgfVxuICBjcmVhdGVDYW52YXMoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpO1xuICB9XG4gIHNldENvbG9yKGNvbG9yKSB7XG4gICAgdGhpcy5maWxsQ29sb3IgPSBjb2xvcjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmlsdGVyID0gYGJyaWdodG5lc3MoMTUwJSlgO1xuICB9XG4gIGdldEhlaWdodCgpIHtcbiAgICBsZXQgYm9keUVsZSA9IEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgbGV0IGFucyA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgIGFucyArPSBNYXRoLmNlaWwoYm9keUVsZVtpXS5vZmZzZXRIZWlnaHQpO1xuICAgIH1cbiAgICByZXR1cm4gYW5zICsgMjA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2FudmFzRXhhbXBsZTtcbiIsImNsYXNzIFRyaWFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvciwgeERpc3QsIHZhbCwgc3BlZWQpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmN0eDtcbiAgICB0aGlzLnhEaXN0ID0geERpc3Q7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZGVmYXVsdENvbG9yID0gY29sb3I7XG4gICAgdGhpcy5tYXJrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgdGhpcy5zdGF0aWMgPSBmYWxzZTtcbiAgICB0aGlzLm1hcmsxID0gKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRpYykge1xuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgICB9LCB0aGlzLnNwZWVkLnZhbHVlICogMik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuZHJhdyA9ICh4U3RhcnQpID0+IHtcbiAgICAgIHRoaXMueFN0YXJ0ID0geFN0YXJ0O1xuICAgICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5jdHg7XG4gICAgICBsZXQgY3cgPSBjYW52YXNFbGVtZW50LndpZHRoO1xuICAgICAgbGV0IGNoID0gY2FudmFzRWxlbWVudC5oZWlnaHQ7XG5cbiAgICAgIGxldCBjeSA9IGNoIC8gNDtcbiAgICAgIGxldCBjeCA9IGN3IC8gMjtcblxuICAgICAgdmFyIHRyaWFuZ2xlID0ge1xuICAgICAgICAvL3RoZSBmaXJzdCB2ZXJ0ZXggaXMgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXG4gICAgICAgIC8veW91IG1heSBkZWNpZGUgdG8gY2hhbmdlIHRoaXMuXG4gICAgICAgIHgxOiBjeCxcbiAgICAgICAgeTE6IGN5LFxuICAgICAgICAvL3RoZSBzZWNvbmQgdmVydGV4IGlzIG9uIHRoZSBjaXJjdW1zY3JpYmVkIGNpcmNsZSBhdCAwIHJhZGlhbnMgd2hlcmUgUiBpcyB0aGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUgKCBhID0gMzAsIGI9MzAgKVxuICAgICAgICAvL3lvdSBtYXkgZGVjaWRlIHRvIGNoYW5nZSB0aGlzLlxuICAgICAgICB4MjogdGhpcy54U3RhcnQsXG4gICAgICAgIHkyOiBjaCxcbiAgICAgICAgLy9jYWxjdWxhdGUgdGhlIDMtcmQgdmVydGV4XG4gICAgICAgIHgzOiB0aGlzLnhTdGFydCArIHRoaXMueERpc3QgKiBjYW52YXNFbGVtZW50LndpZHRoLFxuICAgICAgICB5MzogY2gsXG4gICAgICB9O1xuXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngyLCB0cmlhbmdsZS55Mik7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngzLCB0cmlhbmdsZS55Myk7XG4gICAgICBjdHgubGluZVRvKHRyaWFuZ2xlLngxLCB0cmlhbmdsZS55MSk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgIGN0eC5maWxsKCk7XG5cbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgdGhpcy5tYXJrMiA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiI0ZGRDcwMFwiO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gICAgICAgIH0sIHRoaXMuc3BlZWQudmFsdWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm1hcmtTdGF0aWMgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRpYyA9IHRydWU7XG4gICAgICB0aGlzLmNvbG9yID0gXCIjRkYwMEZGXCI7XG4gICAgICAvLyBpZiAodGhpcy5zdGF0aWMpIHtcbiAgICAgIC8vICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgICAgLy8gICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgdGhpcy5jb2xvciA9IHN0cjtcbiAgICAgIC8vICAgdGhpcy5zdGF0aWMgPSB0cnVlO1xuICAgICAgLy8gfVxuICAgIH07XG5cbiAgICB0aGlzLmNvbG9yUmVzZXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRpYyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xuICAgIH07XG5cbiAgICB0aGlzLnJlc2V0ID0gKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWFuZ2xlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==