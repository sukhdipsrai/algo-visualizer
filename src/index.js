import "./styles/index.scss";

import canvasExample from "./scripts/canvas";
import Square from "./scripts/square";
import Triangle from "./scripts/triangle";

const currentStateObj = {
  currentExample: null,
  currentEventListeners: [],
};

let sortSelect = "1";

document.querySelector("#quick-sort").addEventListener("click", myFunc);
const canvas = new canvasExample();
canvas.createCanvas();

function myFunc() {
  let myTri = [];
  let animating = true;
  let speed = { value: 50 };
  let sliceFactor = 2; // increasing will create more triangle slices

  // myFunc is the main function that runs all sorts, buttons are abstracted outside of the function scope
  // possible to instanstiate myFunc as a class but there is too much DOM functionality that would be un-class like to do
  // switch (sortSelect) {
  //   case "1":
  //   // quikcsort, define start() accordingly
  //   case "2":
  //   // some other sort, define start() accordingly
  //   case "3":
  //   //some other sort, define start() accordingly
  //   case "4":
  //   //some other sort, define start() accordingly

  //   default:
  //     "1";
  // }

  reset();

  function initializeButtons() {
    let qsb = document.querySelector("#quick-sort");
    qsb.removeEventListener("click", myFunc);
    qsb.classList.add("unclickable");
    qsb.classList.remove("clickable");

    if (document.getElementById("forwardButton") === null) {
      let forwardButton = document.createElement("button");
      forwardButton.id = "forwardButton";
      forwardButton.innerHTML = "FASTER";
      document.getElementById("button-controls").appendChild(forwardButton);
      document
        .getElementById("forwardButton")
        .addEventListener("click", cycleSpeed);
    } else document.getElementById("playButton").hidden = false;

    if (document.getElementById("playButton") === null) {
      let playButton = document.createElement("button");
      playButton.id = "playButton";
      playButton.innerHTML = "PLAY";
      playButton.addEventListener("click", startQS);
      const bCtrls = document.getElementById("button-controls");
      bCtrls.insertBefore(playButton, bCtrls.firstChild);
    } else document.getElementById("forwardButton").hidden = false;

    if (document.getElementById("sliceButton") === null) {
      let sliceButton = document.createElement("button");
      sliceButton.id = "sliceButton";
      sliceButton.innerHTML = "MORE TRIANGLES";
      sliceButton.addEventListener("click", cycleSlice);
      const bCtrls = document.getElementById("button-controls");
      bCtrls.insertBefore(sliceButton, document.getElementById("resetButton"));
    } else document.getElementById("sliceButton").hidden = false;

    if (document.getElementById("resetButton") === null) {
      let resetButton = document.createElement("button");
      resetButton.id = "resetButton";
      resetButton.innerHTML = "RESET";
      resetButton.addEventListener("click", reset);
      const bCtrls = document.getElementById("button-controls");
      bCtrls.appendChild(resetButton);
    }
  }

  function cycleSpeed() {
    if (speed.value == 5) {
      speed.value = 50;
      document.getElementById("forwardButton").innerHTML = "FASTER";
    } else {
      speed.value = 5;
      document.getElementById("forwardButton").innerHTML = "SLOWER";
    }
  }

  function cycleSlice() {
    let sliceButton = document.getElementById("sliceButton");
    switch (sliceFactor) {
      case 2:
        sliceFactor = 4;
        reset();
        sliceButton.innerHTML = "EVEN MORE TRIANGLES";
        return;
      case 4:
        sliceFactor = 8;
        reset();
        sliceButton.innerHTML = "MORE TRIANGLES...";
        return;
      case 8:
        sliceFactor = 12;
        reset();
        sliceButton.innerHTML = "I SAID MORE!";
        return;
      case 12:
        sliceFactor = 20;
        reset();
        sliceButton.innerHTML = "MAYBE NOT?";
        return;
      case 20:
        sliceFactor = 2;
        reset();
        sliceButton.innerHTML = "MORE TRIANGLES";
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
      let val = Math.floor(Math.random() * 254 + 1);

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

  function startQS() {
    // console.log(myTri.length);
    document.getElementById("playButton").hidden = true;
    document.getElementById("forwardButton").hidden = true;
    document.getElementById("sliceButton").hidden = true;
    let resetButton = document.getElementById("resetButton");
    resetButton.disabled = true;
    resetButton.classList.add("unclickable");
    // animating = false;
    quickSort(myTri, 0, myTri.length - 1).then(() => {
      resetButton.disabled = false;
      resetButton.classList.remove("unclickable");
      // console.log(myTri);
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

  function quickSortPartition(arr, start, end) {
    return new Promise(function (resolve, reject) {
      let pivot = arr[end].val;
      let i = start - 1; // tracking pivot location
      let j = start - 1;
      let timeBuffer = 0;
      while (j < end) {
        j++;
        if (arr[j].val <= pivot) swapAndRender(j);
      }

      function swapAndRender(j) {
        setTimeout(function () {
          i++;
          // console.log("swap happened");
          // console.log("swapping", arr[i], arr[j]);
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          arr[i].mark();
          arr[j].mark();
          if (j === end) resolve(i);
          // window.requestAnimationFrame(animation);
        }, j * speed.value);
      }
    });
  }
  function quickSortPartition2(arr, start, end) {
    return new Promise(function (resolve, reject) {
      let pivot = arr[end].val;
      let i = start - 1; // tracking pivot location
      let j = start - 1;
      // while (j < end) {
      //   j++;
      //   if (arr[j].val <= pivot) swapAndRender(j);
      // }

      function swapAndRender(j) {
        i++;
        // console.log("swap happened");
        // console.log("swapping", arr[i], arr[j]);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        arr[i].mark1();
        arr[j].mark2();
        if (j === end) {
          arr[end].markStatic();
          resolve(i);
        }
      }
      arr[end].markStatic();
      timedWhileLoop();
      function timedWhileLoop() {
        setTimeout(() => {
          if (j < end) {
            j++;
            if (arr[j].val <= pivot) swapAndRender(j);
            timedWhileLoop();
          }
        }, speed.value);
      }
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
    let [
      selector,
      event,
      handler,
    ] = currentStateObj.currentEventListeners.pop();
    if (selector === "window") {
      window.removeEventListener(event, handler);
      // console.log(handler);
    } else {
      document.querySelector(selector).removeEventListener(event, handler);
    }
  }
}

function clearDemo() {
  if (currentStateObj.currentExample === "CANVASDEMO")
    document.body.removeChild(document.querySelector("canvas"));
  if (currentStateObj.currentExample === "DOMDEMO") {
    [...document.querySelectorAll(".card")].forEach((elem) =>
      document.body.removeChild(elem)
    );
  }
}
