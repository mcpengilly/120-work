var fillR;
var fillB;
var offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noCursor();
}

function draw() {
  background(0);

  for (let x = -30; x <= windowWidth; x += 30) {
    for (let y = -30; y <= windowHeight; y += 30) {
      // fill(random(255),random(255),random(255));
      fillR = map(x,0,windowWidth,0,255);
      fillB = map(y,0,windowHeight,0,255);
      fill(fillR,random(255),fillB);
      ellipse(x + offset,y + offset,15,15);
    }
  }
  offset = offset + 1;
  if (offset >= 30) {
    offset = 0;
  }
}
