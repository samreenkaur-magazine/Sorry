let highestZ = 1;

class Paper {
  constructor(el) {
    this.el = el;

    this.isDragging = false;
    this.offsetX = 0;
    this.offsetY = 0;

    this.x = 0;
    this.y = 0;

    el.addEventListener("mousedown", (e) => this.startDrag(e));
    window.addEventListener("mousemove", (e) => this.drag(e));
    window.addEventListener("mouseup", () => this.stopDrag());
  }

  startDrag(e) {
    this.isDragging = true;

    this.el.style.zIndex = highestZ++;

    const rect = this.el.getBoundingClientRect();

    this.offsetX = e.clientX - rect.left;
    this.offsetY = e.clientY - rect.top;
  }

  drag(e) {
    if (!this.isDragging) return;

    this.x = e.clientX - this.offsetX;
    this.y = e.clientY - this.offsetY;

    this.el.style.left = this.x + "px";
    this.el.style.top = this.y + "px";
  }

  stopDrag() {
    this.isDragging = false;
  }
}

document.querySelectorAll(".paper").forEach(el => {
  el.style.position = "absolute"; // IMPORTANT FIX
  new Paper(el);
});
