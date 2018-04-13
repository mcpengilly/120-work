let cups = [];
let numOfCups = 10;

function setup() {
  createCanvas(windowWidth,800);
  for (let i = 0; i < numOfCups; i++) {
    cups.push(new Cup());
  }
}

function draw() {
  background('rgb(52, 43, 33)');
  for (var i = 0; i < cups.length; i++) {
    cups[i].frame();
  }
}

class Cup {
  constructor(posX, posY, scale) {
    this.posX = random(width);
    this.posY = random(height);
    this.scale = random(.5, 2);
    this.moveX = random(-2, 2);
    this.moveY = random(-2, 2);
  }

  frame() {
    this.display();
    this.move();
  }

  display() {
    push();
    translate(this.posX, this.posY);
    scale(this.scale, this.scale);

    fill('rgb(229, 230, 225)');
    stroke('rgb(229, 230, 225)');
    arc(0,0,200,200,0,PI);
    arc(0,125,125,75,PI,0);
    pop();
  }

  move() {
    this.posX += this.moveX;
    this.posY += this.moveY;

    if (this.posX >= width || this.posX <= 0) {
      this.moveX *= -1;
    } else if (this.posY >= height || this.posY <= 0) {
      this.moveY *= -1;
    }
  }
}
