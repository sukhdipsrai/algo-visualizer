import "./styles/index.scss";

import canvasExample from "./scripts/canvas";
import Triangle from "./scripts/triangle";

const currentStateObj = {
  currentExample: null,
  currentEventListeners: [],
};

let algoSelect = { value: null };
// TODO: loop over class list
document.querySelector("#quick-sort").addEventListener("click", () => {
  startHandler("quick-sort");
});
document.querySelector("#bubble-sort").addEventListener("click", () => {
  startHandler("bubble-sort");
});
document.querySelector("#radix-sort").addEventListener("click", () => {
  startHandler("radix-sort");
});
document.querySelector("#selection-sort").addEventListener("click", () => {
  startHandler("selection-sort");
});

const canvas = new canvasExample();
canvas.createCanvas();

function startHandler(id) {
  if (algoSelect.value === null) {
    myFunc(algoSelect);
  }
  algoSelect.value = id;

  Array.from(document.getElementsByClassName("algo")).forEach((ele) => {
    ele.classList.remove("selectedButton");
  });
  document.getElementById(id).classList.add("selectedButton");
}

function myFunc(algo) {
  let myTri = [];
  let animating = true;
  let speed = { value: 5 };
  let sliceFactor = 8; // increasing will create more triangle slices

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
    Array.from(document.getElementsByClassName("algo")).forEach((ele) => {
      ele.classList.toggle("unclickable");
      ele.classList.toggle("clickable");
      ele.disabled = value;
    });

    // let qsb = document.getElementById(id);
    // qsb.disabled = true;
    // // qsb.removeEventListener("click", myFunc);
    // qsb.classList.add("unclickable");
    // qsb.classList.remove("clickable");
  }

  function initializeButtons() {
    if (document.getElementById("forwardButton") === null) {
      let forwardButton = document.createElement("button");
      let forwardButtonContainer = document.createElement("div");
      let forwardLoad = document.createElement("div");
      forwardButtonContainer.id = "forwardButtonContainer";
      forwardLoad.id = "forwardLoad";
      forwardButton.id = "forwardButton";
      forwardButton.innerHTML = "&#9658&#9658";
      forwardButtonContainer.append(forwardButton);
      forwardButtonContainer.append(forwardLoad);
      document
        .getElementById("button-controls")
        .appendChild(forwardButtonContainer);
      document
        .getElementById("forwardButton")
        .addEventListener("click", cycleSpeed);
    } else document.getElementById("playButton").hidden = false;

    if (document.getElementById("playButton") === null) {
      let playButton = document.createElement("button");
      playButton.id = "playButton";
      playButton.innerHTML = "&#9658";
      playButton.addEventListener("click", startAlgo);
      const bCtrls = document.getElementById("button-controls");
      bCtrls.insertBefore(playButton, bCtrls.firstChild);
    } else document.getElementById("forwardButtonContainer").hidden = false;

    if (document.getElementById("sliceButton") === null) {
      let sliceButtonContainer = document.createElement("div");
      sliceButtonContainer.id = "sliceButtonContainer";
      let loadBorder = document.createElement("div");
      loadBorder.id = "sliceLoad";
      let sliceButton = document.createElement("button");
      sliceButton.id = "sliceButton";
      sliceButton.innerHTML = "+";
      sliceButton.addEventListener("click", cycleSlice);
      const bCtrls = document.getElementById("button-controls");
      sliceButtonContainer.append(sliceButton);
      sliceButtonContainer.append(loadBorder);
      bCtrls.insertBefore(
        sliceButtonContainer,
        document.getElementById("resetButton")
      );
    } else document.getElementById("sliceButtonContainer").hidden = false;

    if (document.getElementById("resetButton") === null) {
      let resetButton = document.createElement("button");
      resetButton.id = "resetButton";
      resetButton.innerHTML = "&#8634";
      resetButton.addEventListener("click", reset);
      const bCtrls = document.getElementById("button-controls");
      bCtrls.appendChild(resetButton);
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
    let load = document.getElementById("sliceLoad");
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
    let xDist = 1 / (10 * sliceFactor);
    for (let i = 0; i < 10 * sliceFactor; i++) {
      // 0-255 random number
      let val = Math.floor(Math.random() * 255);

      const newTri = new Triangle(
        canvas,
        blueRandomizer(val, 255),
        xDist,
        val,
        speed
      );

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

  const animation = () => {
    let sum = 0;
    canvas.clearCanvas();
    for (let i = 0; i < myTri.length; i++) {
      myTri[i].draw(sum);
      sum += myTri[i].xDist * canvas.canvas.width;
    }
    if (animating) {
      window.requestAnimationFrame(animation);
    }
  };

  window.requestAnimationFrame(animation);
  // window.setTimeout(window.requestAnimationFrame(animation), 18);
  // Logic preformed on G value, keeping R abd B constant
  function blueRandomizer(inputshade, maxVal) {
    let shadeVal = Math.ceil((inputshade / maxVal) * 255);

    let rValue = "3C"; //60
    let gValue = shadeVal.toString(16);
    if (shadeVal < 16) gValue = "0" + gValue;

    return `#${rValue + gValue}ff`;
  }

  function hideButtons() {
    document.getElementById("playButton").hidden = true;
    document.getElementById("forwardButtonContainer").hidden = true;
    document.getElementById("sliceButtonContainer").hidden = true;
    let resetButton = document.getElementById("resetButton");
    resetButton.hidden = true;
    resetButton.classList.add("unclickable");
  }

  function enableButtons() {
    let resetButton = document.getElementById("resetButton");
    resetButton.hidden = false;
    resetButton.classList.remove("unclickable");
    toggleSortButtons(false);
  }

  function startQS() {
    hideButtons();
    quickSort(myTri, 0, myTri.length - 1).then(() => {
      enableButtons();
    });
  }

  function startBS() {
    hideButtons();
    bubbleSort(myTri).then(() => {
      enableButtons();
      console.log("bubble sort finished");
    });
  }
  function startRS() {
    hideButtons();
    radixSort(myTri).then(() => {
      enableButtons();
    });
  }
  function startSS() {
    hideButtons();
    selectionSort().then(() => {
      enableButtons();
      console.log("selection sort finished");
    });
  }

  function bubbleSort(arr) {
    return new Promise((resolve) => {
      console.log("bubble Sort RUNNNING");
      let swapsBool = true;
      let i = -1;
      const outerLoop = () => {
        if (swapsBool) {
          swapsBool = false;
          i++;
          innerloop(0);
        } else resolve(null);
      };

      const innerloop = (start) => {
        setTimeout(() => {
          if (start < arr.length - 1 - i) {
            // le 2 character optimization, 49 character comment
            arr[start].mark2();
            if (arr[start].val > arr[start + 1].val) {
              const temp = arr[start];
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
    return new Promise((resolve) => {
      console.log("radix Sort RUNNNING");
      let exp = 1;
      const radixLoop = () => {
        setTimeout(() => {
          if (Math.floor(255 / exp) > 0) {
            console.log("next exp");
            countingSort(arr, exp).then(() => {
              exp *= 10;
              radixLoop();
            });
          } else resolve(null);
        }, speed.value);
      };
      radixLoop();
    });
  }
  const countingSort = (arr, exp) => {
    console.log("counting sort");
    return new Promise((resolve) => {
      let sortedArray = new Array(arr.length);
      let bucket = new Array(10).fill(0);
      for (let i = 0; i < arr.length; i++)
        bucket[Math.floor(arr[i].val / exp) % 10]++;
      for (let i = 1; i < 10; i++) bucket[i] += bucket[i - 1];

      for (let i = arr.length - 1; i >= 0; i--) {
        const loc = Math.floor(arr[i].val / exp) % 10;
        sortedArray[bucket[loc] - 1] = {
          val: arr[i].val,
          color: arr[i].color,
          defaultColor: arr[i].defaultColor,
        };
        bucket[loc]--;
      }
      const scanVisual = (i) => {
        setTimeout(() => {
          if (i === -1) transferLoop(0);
          else {
            arr[i].mark2();
            i--;
            scanVisual(i);
          }
        }, speed.value);
      };
      scanVisual(arr.length - 1);
      const transferLoop = (i) => {
        setTimeout(() => {
          if (arr[i].val !== sortedArray[i].val) {
            arr[i].val = sortedArray[i].val;
            arr[i].defaultColor = sortedArray[i].defaultColor;
            arr[i].color = sortedArray[i].color;

            arr[i].mark1();
          } else arr[i].mark2();
          i++;
          if (i === arr.length) resolve(null);
          else transferLoop(i);
        }, speed.value);
      };
    });
  };

  function selectionSort() {
    return new Promise((resolve) => {
      console.log("selection Sort RUNNNING");
      setTimeout(() => {
        resolve(5);
      }, speed.value);
    });
  }

  function quickSort(arr, start, end, xStart = 0) {
    // needed to setup a strong resolve, need to come back to this , reason: for pausing animation
    return new Promise((resolve) => {
      if (start < end) {
        quickSortPartition2(arr, start, end).then((pi) => {
          resolve(
            quickSort(arr, start, pi - 1).then(() =>
              quickSort(arr, pi + 1, end)
            )
          );
        });
      } else resolve();
    });
  }

  function quickSortPartition2(arr, start, end) {
    return new Promise(function (resolve, reject) {
      let pivot = arr[end].val;
      let i = start - 1; // tracking pivot location
      let j = start - 1;

      const swapAndRender = (j) => {
        // console.log("quick sort swap");
        if (arr[j].val <= pivot) {
          i++;
          if (j === end) {
            arr[end].colorReset(); // = false;
            arr[start].colorReset();
          }
          if (i !== start && j !== end) arr[start].markStatic();

          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          arr[i].mark1();
          arr[j].mark2();
          if (j === end) {
            resolve(i);
          }
        } else {
          arr[j].mark2();
          // if (i < 0) arr[0].mark2();
          // else arr[i].mark1();
        }
      };
      const timedWhileLoop = () => {
        setTimeout(() => {
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
