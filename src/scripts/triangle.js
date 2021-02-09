class Triangle {
    constructor(canvas, color, xStart, xDist) {
        this.canvas = canvas;
        this.ctc = this.canvas.ctx;
        this.xDist = xDist;
        this.xStart = xStart
        this.color = color;
    }

    draw() {
        var canvasElement = document.getElementById("canvas");
        let ctx = this.canvas.ctx;
        let cw = canvasElement.width - 50;
        let ch = canvasElement.height - 400;


        let cy = ch / 2;
        let cx = cw / 2;

        var triangle = {
            //the first vertex is in the center of the canvas
            //you may decide to change this.
            x1: cx,
            y1: cy,
            //the second vertex is on the circumscribed circle at 0 radians where R is the radius of the circle ( a = 30, b=30 )
            //you may decide to change this.
            x2: this.xStart,
            y2: ch,
            //calculate the 3-rd vertex
            x3: this.xStart + this.xDist,
            y3: ch,
        };


        ctx.beginPath();
        ctx.moveTo(triangle.x1, triangle.y1);
        ctx.lineTo(triangle.x2, triangle.y2);
        ctx.lineTo(triangle.x3, triangle.y3);
        ctx.lineTo(triangle.x1, triangle.y1);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        ctx.fill();

        ctx.stroke();
    }
    reset() {
        try {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        } catch (e) {
            console.log(e)
        }

    }
}

export default Triangle;