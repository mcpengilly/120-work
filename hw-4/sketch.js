function setup () {
  createCanvas( 800, 450);
}

function draw() {
  background(245);
  //main sandbox
  push();
  //canvas center
  translate( 400, 225);
  //third character
  push();
  rotate(radians(90));
  fill('rgba(219, 219, 211, 0.8)');
  ellipse(175,-190,100);
  fill(0);
  ellipse(195,-210,20,30);
  ellipse(155,-210,20,30);
  fill('rgba(219, 219, 211, 1)');
  pop();
  //body code
  push();
  rotate(radians(90));
  fill('rgba(219, 219, 211, 0.8)');
  rect( 150, -140, 50, 200, 25, 25, 25, 25);
  //quad is meant to be jaw bone
  fill('rgba(221, 221, 212, 1)');
  strokeWeight(0);
  quad(150,-185,200,-185,205,-125,145,-125);
  strokeWeight(1);
  line(205,-125,145,-125);
  line(205,-125,203,-149);
  line(145,-125,146,-149);
  strokeWeight(5);
  line(155,-175,155,-135);
  line(165,-175,165,-135);
  line(175,-175,175,-135);
  line(185,-175,185,-135);
  line(195,-175,195,-135);
  pop();
  //second character
  push();
  rotate(radians(45));
  fill('rgba(152, 14, 14, 0.8)');
  ellipse(95,-70,100);
  strokeWeight(20);
  point(115,-90);
  point(75,-90);
  strokeWeight(3);
  line(70,-45,120,-45);
  line(75,-40,75,-50);
  line(85,-40,85,-50);
  line(95,-40,95,-50);
  line(105,-40,105,-50);
  line(115,-40,115,-50);
  pop();
  //body code
  push();
  rotate(radians(45));
  fill('rgba(152, 14, 14, 0.8)');
  rect( 70, -20, 50, 200, 25, 25, 25, 25);
  pop();

  //first character
  push();
  //head code
  push();
  fill('rgba(251, 255, 42, 1)');
  ellipse(-50,-50,100);
  strokeWeight(10);
  point(-30,-70);
  point(-70,-70);
  fill('rgb(0, 0, 0)')
  arc(-50,-30,50,20,0,PI,CHORD);
  pop();
  //body code
  push();
  fill('rgba(251, 255, 42, 1)');
  rect( -75, 0, 50, 200, 25, 25, 25, 25);
  pop();
  pop();
  pop();
}
