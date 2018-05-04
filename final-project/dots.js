function Dots() {
  this.x = random(10, windowWidth - 10);
  this.y = random(10, windowHeight - 10);
  this.r = 8;

  this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.updateLoc = function() {
    this.x = random(10, windowWidth - 10);
    this.y = random(10, windowHeight - 10);
  }
}
