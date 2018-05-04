var pacman;
var inky;
var blinky;
var pinky;
var clyde;
var dots;
var lives;
var score;
var gameStarted;
var startX;
var startY;
// var moveSound;
// var eatSound;
// var deathSound;
//
// function preload() {
//   moveSound = loadSound('sounds/pacman_chomp.wav');
// }

function setup() {
  createCanvas(windowWidth, windowHeight - 5);
  pacman = new Pacman();
  inky = new Inky();
  blinky = new Blinky();
  pinky = new Pinky();
  clyde = new Clyde();
  dots = new Dots();

  // set starting lives and score
  lives = 3;
  score = 0;

  // add position for start button
  startX = windowWidth/2;
  startY = windowHeight/2;

  // set gameStarted to false
  gameStarted = false;
}

function draw() {
  background(46);

  // make rectangle for start button
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(startX, startY, 160, 40);
  fill(0);
  textAlign(CENTER, [CENTER]);
  textSize(24);
  text('Start Game', startX + 2.5, startY + 5, 160, 40);
  if (gameStarted == false &&
      mouseX >= (windowWidth/2) - 80 &&
      mouseX <= (windowWidth/2) + 80 &&
      mouseY >= (windowHeight/2) - 20 &&
      mouseY <= (windowHeight/2) + 20) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  if (gameStarted == true) {
    noCursor();
    // hide start button
    startX = windowWidth * 2;
    startY = windowHeight * 2;
    pacman.show();
    pacman.moveX();
    pacman.moveY();
    pacman.wrap();
    inky.show();
    inky.mov();
    inky.wrap();
    blinky.show();
    blinky.mov();
    blinky.wrap();
    pinky.show();
    pinky.mov();
    pinky.wrap();
    clyde.show();
    clyde.mov();
    clyde.wrap();
    dots.show();

    // display score and lives
    fill(255);
    noStroke();
    textAlign(LEFT);
    textSize(24);
    text("Score: " + score, 30, 50);
    text("Lives: " + lives, 30, 80);
    // every 120 frames the ghosts randomly pick one of four directions
    // regretting making each ghost a seperate class
    if (frameCount % 120 == 0) {
      inky.setDir(ceil(random(0,4)));
    }
    if (frameCount % 30 == 0) {
      // make blinky loosely follow pacman
      if (blinky.x < pacman.x && ceil(random(0,2)) == 1) {
        blinky.setDir(1);
      } else if (blinky.x > pacman.x && ceil(random(0,2)) == 1) {
        blinky.setDir(2);
      } else if (blinky.y < pacman.y && ceil(random(0,2)) == 2) {
        blinky.setDir(3);
      } else if (blinky.y > pacman.y && ceil(random(0,2)) == 2) {
        blinky.setDir(4);
      }
    }
    if (frameCount % 180 == 0) {
      pinky.setDir(ceil(random(0,4)));
    }
    if (frameCount % 200 == 0) {
      clyde.setDir(ceil(random(0,4)));
    }

    // make dots change location when pacman touches them
    if (pacman.x + pacman.r >= dots.x - dots.r &&
        pacman.x - pacman.r <= dots.x + dots.r &&
        pacman.y + pacman.r >= dots.y - dots.r &&
        pacman.y - pacman.r <= dots.y + dots.r) {
      dots.updateLoc();
      score++;
    }

    if (pacman.x + pacman.r >= inky.x - 18 &&
        pacman.x - pacman.r <= inky.x + 18 &&
        pacman.y + pacman.r >= inky.y - 20 &&
        pacman.y - pacman.r <= inky.y + 20) {
          pacman.death();
          inky.death();
          blinky.death();
          pinky.death();
          clyde.death();
          dots.updateLoc();
          lives--;
        }

    if (pacman.x + pacman.r >= blinky.x - 18 &&
        pacman.x - pacman.r <= blinky.x + 18 &&
        pacman.y + pacman.r >= blinky.y - 20 &&
        pacman.y - pacman.r <= blinky.y + 20) {
          pacman.death();
          inky.death();
          blinky.death();
          pinky.death();
          clyde.death();
          dots.updateLoc();
          lives--;
        }

    if (pacman.x + pacman.r >= pinky.x - 18 &&
        pacman.x - pacman.r <= pinky.x + 18 &&
        pacman.y + pacman.r >= pinky.y - 20 &&
        pacman.y - pacman.r <= pinky.y + 20) {
          pacman.death();
          inky.death();
          blinky.death();
          pinky.death();
          clyde.death();
          dots.updateLoc();
          lives--;
        }

        // copying and pasting sure is fun

    if (pacman.x + pacman.r >= clyde.x - 18 &&
        pacman.x - pacman.r <= clyde.x + 18 &&
        pacman.y + pacman.r >= clyde.y - 20 &&
        pacman.y - pacman.r <= clyde.y + 20) {
          pacman.death();
          inky.death();
          blinky.death();
          pinky.death();
          clyde.death();
          dots.updateLoc();
          lives--;
        }

        // I really wish that I made a master ghost class

    // end game when lives reach 0
    if (lives <= 0) {

      // show cursor
      cursor(ARROW);

      // reset lives and score
      lives = 3;
      score = 0;

      // reset ghost positions
      inky.x = windowWidth/5;
      inky.y = windowHeight/5;
      blinky.x = (2 * windowWidth)/5;
      blinky.y = windowHeight/5;
      pinky.x = (3 * windowWidth)/5;
      pinky.y = windowHeight/5;
      clyde.x = (4 * windowWidth)/5;
      clyde.y = windowHeight/5;

      // set gameStarted to false
      gameStarted = false;
    }
  } else {
    startX = windowWidth/2;
    startY = windowHeight/2;
  }
}

function mousePressed() {
  if (mouseX >= (windowWidth/2) - 40 &&
      mouseX <= (windowWidth/2) + 40 &&
      mouseY >= (windowHeight/2) - 10 &&
      mouseY <= (windowHeight/2) + 10) {
          gameStarted = true;
      }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    pacman.setXDir(1);
    pacman.dirSelect = 'right';
  } else if (keyCode == LEFT_ARROW) {
    pacman.setXDir(-1);
    pacman.dirSelect = 'left';
  }
  if (keyCode == DOWN_ARROW) {
    pacman.setYDir(1);
    pacman.dirSelect = 'down';
  } else if (keyCode == UP_ARROW) {
    pacman.setYDir(-1);
    pacman.dirSelect = 'up';
  }
}
