class Obstacle {
  constructor(w, playerY, playerH, ctx) {
    this.ctx = ctx;
    this.w = 2;
    this.h = this.w * 8;
    this.dx = 3;
    this.x = w;
    this.y = playerY + playerH - this.h - 50;

  this.img = new Image();
  this.img.src = "img/ezgif-4-db8d1f5abe5b.jpg";
}

draw() {
  this.ctx.drawImage(this.img, this.x, this.y);
}

  move() {
    this.x -= this.dx;
  }

}