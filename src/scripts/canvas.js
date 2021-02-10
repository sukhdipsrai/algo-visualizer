class canvasExample {
    constructor(props) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.setAttribute("height", `${window.innerHeight}`)

        this.canvas.setAttribute("id", "canvas");
        this.ctx = this.canvas.getContext("2d");

    }
    createCanvas() {
            document.body.append(this.canvas);
            // this.canvas.setAttribute("height", `${window.innerHeight}`)
            // this.canvas.setAttribute("width", `${window.innerWidth}`)
        }
        // drawSquare() {
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
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    setColor(color) {
        this.fillColor = color;
        document.body.style.backgroundColor = color;
        document.body.style.filter = `brightness(150%)`;
    }
}

export default canvasExample;