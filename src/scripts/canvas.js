class canvasExample {
  constructor(props) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = document.body.offsetHeight - this.getHeight();
    this.canvas.setAttribute("id", "canvas");
    this.ctx = this.canvas.getContext("2d");
  }
  createCanvas() {
    document.body.append(this.canvas);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.canvas.width = window.innerWidth;
    this.canvas.height = document.body.offsetHeight - this.getHeight();
  }
  setColor(color) {
    this.fillColor = color;
    document.body.style.backgroundColor = color;
    document.body.style.filter = `brightness(150%)`;
  }
  getHeight() {
    let bodyEle = Array.from(document.body.children);
    let ans = 0;
    for (let i = 0; i < 4; i++) {
      ans += Math.ceil(bodyEle[i].offsetHeight);
    }
    return ans + 20;
  }
}

export default canvasExample;
