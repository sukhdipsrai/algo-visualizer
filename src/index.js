import "./styles/index.scss";

import canvasExample from "./scripts/canvas";
import Square from "./scripts/square";
import Triangle from "./scripts/triangle";

const currentStateObj = {
    currentExample: null,
    currentEventListeners: [],
};

document.querySelector("#quick-sort").addEventListener("click", myFunc);
const canvas = new canvasExample();
canvas.createCanvas();

function myFunc() {
    // clearDemo()
    // canvas.clearCavnas();
    let myTri = [];

    let sum = 0;

    while (sum < canvas.canvas.width) {
        let nextWidth = 0;
        if (canvas.canvas.width - sum < 100)
            nextWidth = canvas.canvas.width - sum;
        else nextWidth = Math.ceil(Math.random(400) * 100);
        const newTri = new Triangle(
            canvas,
            blueRandomizer(nextWidth, 100),
            nextWidth / canvas.canvas.width
        );
        // newTri.draw(sum);
        sum += nextWidth;
        myTri.push(newTri);
        // console.log(newTri);
    }

    const animation = () => {
        let sum = 0;
        canvas.clearCanvas();
        for (let i = 0; i < myTri.length; i++) {
            myTri[i].draw(sum);
            sum += (myTri[i].xDist * canvas.canvas.width)
        }
        window.requestAnimationFrame(animation);
    }

    window.requestAnimationFrame(animation);


    // Logic preformed on G value, keeping R abd B constant
    function blueRandomizer(inputshade, maxVal) {
        let shadeVal = Math.ceil((inputshade / maxVal) * 255);

        if (shadeVal < 10) shadeVal = "0" + shadeVal;
        let rValue = "3C";
        let gValue = shadeVal.toString(16);

        return `#${rValue + gValue}ff`;
    }
}

// Square constructor gets a canvas property, coords , color

function startCanvas() {
    clearDemo();
    unregisterEventListeners();
    currentStateObj.currentExample = "CANVASDEMO";
    const canvas = new canvasExample();
    canvas.createCanvas();
    const squares = [new Square(canvas.ctx, canvas.coords, canvas.fillColor)];

    let animating = true;

    const animation = () => {
        canvas.clearCanvas();
        if (animating) squares.forEach((sq) => sq.updateSquare(canvas.fillColor));
        squares.forEach((sq) => sq.drawSquare());
        window.requestAnimationFrame(animation);
        squares.forEach((sq) => {
            if (sq.coords[0] + sq.coords[2] > window.innerWidth)
                sq.reverseAnimation();
            if (sq.coords[0] < 0) sq.reverseAnimation();
        });
    };

    window.requestAnimationFrame(animation);

    window.addEventListener("keydown", handleKeyDown);
    currentStateObj.currentEventListeners.push([
        "window",
        "keydown",
        handleKeyDown,
    ]);

    window.addEventListener("mousedown", handleMouseDown);
    currentStateObj.currentEventListeners.push([
        "window",
        "mousedown",
        handleMouseDown,
    ]);

    // 32 is ASCII for space, randomize color
    function handleKeyDown(event) {
        if (event.which === 32) {
            event.preventDefault();
            squares.forEach((sq) => sq.reverseAnimation());
            canvas.setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
        }
    }

    // on click animate new square
    function handleMouseDown(event) {
        event.preventDefault();
        squares.push(
            new Square(
                canvas.ctx,
                canvas.coords.map((co) => co + 25),
                canvas.fillColor
            )
        );
        // animating = !animating;
    }
}

function unregisterEventListeners() {
    while (currentStateObj.currentEventListeners.length) {
        let [
            selector,
            event,
            handler,
        ] = currentStateObj.currentEventListeners.pop();
        if (selector === "window") {
            window.removeEventListener(event, handler);
            console.log(handler);
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