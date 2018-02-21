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

  fill('rgba(255,0,0,.5)');

  ellipse(windowWidth * .3, 400, ellipseWidth, ellipseHeight);
  pop();

  push();
  //circle 2

  fill('rgba(0,0,255,.5)');

  ellipse(windowWidth * .7, 400, ellipseWidth, ellipseHeight);
  pop();
  pop();

  push();

  //moving circle
  
  fill('rgba(255, 255, 0, .5)');


  ellipse(mouseX,mouseY,ellipseWidth,ellipseHeight);
  pop();


  ellipseWidth = ellipseWidth + 1;
  ellipseHeight = ellipseHeight + 1;
}
