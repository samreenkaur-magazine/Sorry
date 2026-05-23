let highestZ = 1;

class Paper {
  constructor(el) {
    this.el = el;
    this.x = 0;
    this.y = 0;
    this.holding = false;

    el.addEventListener("mousedown", (e) => this.start(e));
    window.addEventListener("mousemove", (e) => this.move(e));
    window.addEventListener("mouseup", () => this.end());
  }

  start(e) {
    this.holding = true;
    this.el.style.zIndex = highestZ++;
    this.offsetX = e.clientX - this.x;
    this.offsetY = e.clientY - this.y;
  }

  move(e) {
    if (!this.holding) return;

    this.x = e.clientX - this.offsetX;
    this.y = e.clientY - this.offsetY;

    this.el.style.transform = `translate(${this.x}px, ${this.y}px) rotate(-5deg)`;
  }

  end() {
    this.holding = false;
  }
}

document.querySelectorAll(".paper").forEach(el => {
  new Paper(el);
});
