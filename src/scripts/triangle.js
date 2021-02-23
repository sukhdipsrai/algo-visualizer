class Triangle {
  constructor(canvas, color, xDist, val, speed) {
    this.canvas = canvas;
    this.ctx = this.canvas.ctx;
    this.xDist = xDist;
    this.color = color;
    this.DEFAULT_COLOR = color;
    this.marked = false;
    this.val = val;
    this.speed = speed;
  }

  draw(xStart) {
    this.xStart = xStart;
    var canvasElement = document.getElementById("canvas");
    let ctx = this.canvas.ctx;
    let cw = canvasElement.width;
    let ch = canvasElement.height - 200;

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
      x3: this.xStart + this.xDist * canvasElement.width,
      y3: ch,
    };

    ctx.beginPath();
    ctx.moveTo(triangle.x1, triangle.y1);
    ctx.lineTo(triangle.x2, triangle.y2);
    ctx.lineTo(triangle.x3, triangle.y3);
    ctx.lineTo(triangle.x1, triangle.y1);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.fill();

    ctx.stroke();
  }

  mark1() {
    this.color = "#FFD700";
    setTimeout(() => {
      this.color = this.DEFAULT_COLOR;
    }, this.speed.value * 1.5);
  }

  mark2() {
    this.color = "#FFD700";
    setTimeout(() => {
      this.color = this.DEFAULT_COLOR;
    }, this.speed.value * 1.5);
  }

  markStatic() {
    const pivotColor = "#ff00ff";
    if (this.color === pivotColor) this.color = this.DEFAULT_COLOR;
    else this.color = pivotColor;
  }

  reset() {
    try {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    } catch (e) {
      console.log(e);
    }
  }
}

export default Triangle;
