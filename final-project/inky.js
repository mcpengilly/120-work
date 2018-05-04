function Inky() {
  this.x = windowWidth/5;
  this.y = windowHeight/5;
  this.xDir = 0;
  this.yDir = 0;

  this.show = function() {
    fill('rgb(43, 33, 233)');
    rect(this.x, this.y, 36, 40);
  }

  this.setDir = function(dir) {
    if (dir == 1) {
      this.xDir = 4;
      this.yDir = 0;
    } else if (dir == 2) {
      this.xDir = -4;
      this.yDir = 0;
    } else if (dir == 3) {
      this.yDir = 4;
      this.xDir = 0;
    } else if (dir == 4) {
      this.yDir = -4;
      this.xDir = 0;
    }
  }

  this.mov = function() {
    this.x += this.xDir;
    this.y += this.yDir;
  }

  this.wrap = function() {
    if (this.x > windowWidth) {
      this.x = 0;
     } else if (this.x < 0) {
      this.x = windowWidth;
    }
     if (this.y > windowHeight - 5) {
      this.y = 0;
    } else if (this.y < 0) {
      this.y = windowHeight - 5;
    }
  }

  this.death = function() {
    this.x = windowWidth/5;
    this.y = windowHeight/5;
    this.xDir = 0;
    this.yDir = 0;
  }
}
