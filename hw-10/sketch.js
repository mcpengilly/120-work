function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}

var bgr;
var bgg = 127;
var bggChange = 1;
var bgb;
var triX1;
var triY1;
var triX2;
var triY2;
var triX3;
var triY3;
var triChange;

function draw() {
  //noCursor();
  background(bgr,bgg,bgb);
  //background(100,100,100);

  //triangle
  noFill();
  stroke(255);
  drawTriangle(0, 0, 1, 1);
  drawTriangle(50,50,.5,.5);
  drawTriangle(1075,0,1,1);
  drawTriangle(-530,700,1,1);

  bgr = map(mouseX,0,windowWidth,0,255);
  bgg += floor(random(-bggChange - 1,bggChange + 2));
  bgg = constrain(bgg,1,255);
  bgb = map(mouseY,0,windowHeight,0,255);

  //triangle variable assignments
  // triX1 = windowWidth/2;
  // triY1 = 200;
  // triX2 = 500;
  // triY2 = 400;
  // triX3 = 800;
  // triY3 = 400;
  //
  // //triangle movement
  // triChange = mouseY/5;
  // triY1 = triY1 - triChange;
  // triX2 = triX2 - triChange*2;
  // triY2 = triY2 + triChange*2;
  // triX3 = triX3 + triChange*2;
  // triY3 = triY3 + triChange*2;
}

function drawTriangle(posX, posY, scaleX, scaleY) {
  translate(posX, posY);
  scale(scaleX,scaleY);
  triangle(triX1, triY1, triX2, triY2, triX3, triY3);

  triX1 = windowWidth/2;
  triY1 = 200;
  triX2 = 500;
  triY2 = 400;
  triX3 = 800;
  triY3 = 400;

  triChange = mouseY;
  triY1 = triY1 - triChange;
  triX2 = triX2 - triChange*2;
  triY2 = triY2 + triChange*2;
  triX3 = triX3 + triChange*2;
  triY3 = triY3 + triChange*2;
}
