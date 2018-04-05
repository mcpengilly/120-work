//let cups[];

let cupFill = (96, 59, 36);


function setup() {
  createCanvas(windowWidth,800);
}

function draw() {
  background('rgb(201, 216, 255)');
  coffeeCup(windowWidth/2,400,1,1);
  coffeeCup(windowWidth* 2/3,400,1,1);
  coffeeCup(windowWidth/4,550,1,1);
  coffeeCup(windowWidth/3,100,1,1);

}

function coffeeCup(posX,posY,scaleX,scaleY) {
  push();
  translate(posX,posY);
  scale(scaleX,scaleY);

  fill(cupFill);
  stroke('rgb(229, 230, 225)');
  arc(0,0,200,200,0,PI);
  fill('rgb(229, 230, 225)');
  arc(0,125,125,75,PI,0);
  pop();
}

function fillCups(cupNum) {
}
