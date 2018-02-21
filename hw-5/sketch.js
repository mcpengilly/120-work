function setup() {
  createCanvas(windowWidth, 800);
  frameRate(30);
}

let ellipseWidth = 0;
let ellipseHeight = 0;
let ellipseColor = 0;

function draw() {
  noCursor();
  noStroke();
  background((193, 193, 193));

  push();

  //static circles
  
  push();

  //circle 1

  fill(ellipseColor,0,0);

  //removed: fill('rgba(ellipseColor,0,0,.5)')

  ellipse(windowWidth * .3, 400, ellipseWidth, ellipseHeight);
  pop();

  push();
  //circle 2
  fill(0,0,ellipseColor,[127]);

  //removed: fill('rgba(0,0,ellipseColor,.5)')

  ellipse(windowWidth * .7, 400, ellipseWidth, ellipseHeight);
  pop();
  pop();

  push();

  //moving circle

  fill(ellipseColor, ellipseColor,0);

  //removed: fill('rgba(ellipseColor, ellipseColor, 0, .5)')
  //when using the removed code the varibales to change the color no longer work
  //can varibales not be used while an alpha value is also being used?

  ellipse(mouseX,mouseY,ellipseWidth,ellipseHeight);
  pop();


  ellipseWidth = ellipseWidth + 1;
  ellipseHeight = ellipseHeight + 1;
  ellipseColor = ellipseColor + 1;
  ellipseColor = ellipseColor % 255;
}
