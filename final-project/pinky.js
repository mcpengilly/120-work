function Pinky() {
  this.x = (3*windowWidth)/5;
  this.y = windowHeight/5;
  this.xDir = 0;
  this.yDir = 0;

  // let img;

  // function preload() {
  //   img = loadImage('./sprites/inky1.png');
  // }

  this.show = function() {
    fill('rgb(213, 59, 211)');
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
    this.x = (windowWidth * 3)/5;
    this.y = windowHeight/5;
    this.xDir = 0;
    this.yDir = 0;
  }
}
