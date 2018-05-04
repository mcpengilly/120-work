function Pacman() {
  this.x = windowWidth/2;
  this.y = (windowHeight * 4)/5;
  this.xDir = 0;
  this.yDir = 0;
  this.r = 20;
  this.show = function() {
    fill('rgb(218, 216, 25)');

    var start = this.pacDir[this.dirSelect][0];
    var end = this.pacDir[this.dirSelect][1];
    //make arc shape that represents pacman
    arc(this.x, this.y, this.r * 2, this.r * 2, start, end);
  }

  // starting direction
  this.dirSelect = 'right';

  // store arc start and end for each direction
  this.pacDir = {
    right: [PI/4, PI + ((3*PI)/4)],
    left: [PI + (PI/4), (3*PI)/4],
    up: [PI + ((3*PI)/4), PI + (PI/4)],
    down: [(3 * PI)/4, PI/4]
  }

  this.setXDir = function(dir) {
    //set direction with key press
    this.xDir = dir;
    //remove verticle movement
    this.yDir = 0;
  }

  this.setYDir = function(dir) {
    //set direction with key press
    this.yDir = dir;
    //remove horizontal movement
    this.xDir = 0;
  }

  this.moveX = function(dir) {
    //increased movement speed
    this.x += this.xDir * 5;
  }

  this.moveY = function(dir) {
    //increased movement speed
    this.y += this.yDir * 5;
  }

  //wrap pacman to opposite side when contacting window edge
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
    this.x = windowWidth/2;
    this.y = (windowHeight * 4)/5;
    this.xDir = 0;
    this.yDir = 0;
    this.dirSelect = 'right';
  }
}
